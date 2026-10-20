#!/usr/bin/env python3
"""AvatarSample B for the web: a smaller copy of pixiv's VRoid sample model.

    python3 tools/avatar3d/sampleb_web.py <AvatarSample_B.vrm> assets/models/avatarsample-b.vrm

The source is AvatarTracker's Tools/model_avatar/sources/AvatarSample_B.vrm (VRM 1.0,
21 MB; licence notes in Tools/model_avatar/models/AvatarSample_B.LICENSE.md). The page
only needs what the AvatarTracker stage shows, so this keeps the model and its VRM data
(humanoid, spring bones, MToon, lookAt, licence meta) and trims the rest:

- morph targets: only the ones the page's expressions use (blinks, mouth, smile, brows,
  the VRM presets), positions only (no morph normals);
- the lower legs and shoes: never on the stage (it shows her from the hair to the hips),
  so their triangles and vertices are dropped;
- vertex data quantised (KHR_mesh_quantization): normals as bytes, UVs as 16-bit where
  they stay in 0..1, joints and skin weights as bytes, indices as 16-bit;
- textures: WebP (EXT_texture_webp), at most 1024 px; the 2048 px thumbnail is dropped
  (meta.thumbnailImage removed).

Nothing else is changed. The VRM licence meta is kept as authored: the model is NOT CC0.
Needs numpy and Pillow.
"""
import io
import json
import struct
import sys

import numpy as np
from PIL import Image

KEEP_TARGETS = [
    # VRM presets
    "Fcl_ALL_Neutral", "Fcl_ALL_Angry", "Fcl_ALL_Fun", "Fcl_ALL_Joy", "Fcl_ALL_Sorrow", "Fcl_ALL_Surprised",
    "Fcl_MTH_A", "Fcl_MTH_I", "Fcl_MTH_U", "Fcl_MTH_E", "Fcl_MTH_O",
    "Fcl_EYE_Close", "Fcl_EYE_Close_L", "Fcl_EYE_Close_R",
    # AvatarTracker's own channels (its avatar.json): smile, joy, sad, brows
    "Fcl_MTH_Fun", "Fcl_EYE_Joy", "Fcl_BRW_Joy", "Fcl_MTH_Sorrow", "Fcl_BRW_Sorrow",
    "Fcl_BRW_Surprised", "Fcl_BRW_Angry", "Fcl_EYE_Surprised",
]
# Custom expressions the page drives, one morph each (as the app's avatar.json maps them).
CUSTOM = {"smileMouth": "Fcl_MTH_Fun", "joyEyes": "Fcl_EYE_Joy", "joyBrows": "Fcl_BRW_Joy",
          "sadMouth": "Fcl_MTH_Sorrow", "sadBrows": "Fcl_BRW_Sorrow",
          "browUp": "Fcl_BRW_Surprised", "browDown": "Fcl_BRW_Angry", "eyesWide": "Fcl_EYE_Surprised"}
CUT_Y = 0.42          # body triangles entirely below this height (m) are dropped
MAX_TEX = 1024
WEBP_Q = 88

CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NC = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT4": 16}


def main(src, dst):
    raw = open(src, "rb").read()
    jl = struct.unpack("<I", raw[12:16])[0]
    J = json.loads(raw[20:20 + jl])
    b0 = 20 + jl + 8
    BV, A = J["bufferViews"], J["accessors"]

    def view(i):
        v = BV[i]
        return raw[b0 + v.get("byteOffset", 0): b0 + v.get("byteOffset", 0) + v["byteLength"]]

    def read(i):
        a = A[i]
        n = NC[a["type"]]
        v = BV[a["bufferView"]]
        stride = v.get("byteStride")
        dt = np.dtype(CT[a["componentType"]])
        base = b0 + v.get("byteOffset", 0) + a.get("byteOffset", 0)
        if stride and stride != dt.itemsize * n:
            out = np.empty((a["count"], n), dt)
            for k in range(a["count"]):
                out[k] = np.frombuffer(raw, dt, n, base + k * stride)
        else:
            out = np.frombuffer(raw, dt, a["count"] * n, base).reshape(a["count"], n).copy()
        return out if n > 1 else out[:, 0]

    # ---- new binary, built view by view ----
    blob = bytearray()
    new_views, new_acc = [], []

    def add_view(data, target=None, stride=None):
        while len(blob) % 4:
            blob.append(0)
        v = {"buffer": 0, "byteOffset": len(blob), "byteLength": len(data)}
        if target:
            v["target"] = target
        if stride:
            v["byteStride"] = stride
        blob.extend(data)
        new_views.append(v)
        return len(new_views) - 1

    def add_acc(arr, ctype, typ, normalized=False, target=None, minmax=False):
        arr = np.ascontiguousarray(arr)
        n = NC[typ]
        stride = None
        data = arr.astype(CT[ctype]).reshape(-1, n) if n > 1 else arr.astype(CT[ctype])
        if target == 34962 and n > 1 and (data.itemsize * n) % 4:
            # vertex attributes must be 4-byte aligned: pad each element
            pad = 4 - (data.itemsize * n) % 4
            padded = np.zeros((data.shape[0], n + pad // data.itemsize), data.dtype)
            padded[:, :n] = data
            stride = padded.itemsize * padded.shape[1]
            data = padded
        a = {"bufferView": add_view(data.tobytes(), target, stride), "componentType": ctype,
             "count": int(arr.shape[0]), "type": typ}
        if normalized:
            a["normalized"] = True
        if minmax:
            a["min"] = [float(x) for x in np.atleast_1d(arr.reshape(arr.shape[0], -1).min(0))]
            a["max"] = [float(x) for x in np.atleast_1d(arr.reshape(arr.shape[0], -1).max(0))]
        new_acc.append(a)
        return len(new_acc) - 1

    def add_sparse(d):
        """A morph target as a sparse accessor: most of the face doesn't move for any one shape."""
        moved = np.nonzero(np.abs(d).max(1) > 1e-7)[0]
        a = {"componentType": 5126, "count": int(d.shape[0]), "type": "VEC3",
             "min": [float(x) for x in d.min(0)], "max": [float(x) for x in d.max(0)]}
        if len(moved):
            a["sparse"] = {"count": int(len(moved)),
                           "indices": {"bufferView": add_view(moved.astype(np.uint16).tobytes()), "componentType": 5123},
                           "values": {"bufferView": add_view(d[moved].astype(np.float32).tobytes())}}
        else:                                             # a shape that moves nothing
            a["bufferView"] = add_view(np.zeros((d.shape[0], 3), np.float32).tobytes())
        new_acc.append(a)
        return len(new_acc) - 1

    def copy_acc(i):
        a = dict(A[i])
        a["bufferView"] = add_view(view(a["bufferView"]), BV[a["bufferView"]].get("target"), BV[a["bufferView"]].get("byteStride"))
        new_acc.append(a)
        return len(new_acc) - 1

    # ---- meshes ----
    names_all = J["meshes"][0]["extras"]["targetNames"]
    keep_idx = [names_all.index(n) for n in KEEP_TARGETS]
    remap_target = {old: new for new, old in enumerate(keep_idx)}

    for mesh in J["meshes"]:
        prims = mesh["primitives"]
        attrs = prims[0]["attributes"]
        assert all(p["attributes"] == attrs for p in prims), "primitives must share their vertices"
        data = {k: read(v) for k, v in attrs.items()}
        pos = data["POSITION"]
        tris = [read(p["indices"]).reshape(-1, 3) for p in prims]
        if mesh["name"].startswith("Body"):
            tris = [t[pos[t][:, :, 1].max(1) >= CUT_Y] for t in tris]
        used = np.unique(np.concatenate([t.ravel() for t in tris]))
        remap = np.full(len(pos), -1, np.int64)
        remap[used] = np.arange(len(used))
        print(f"{mesh['name']}: {len(pos)} → {len(used)} vertices")
        data = {k: v[used] for k, v in data.items()}

        na = {}
        na["POSITION"] = add_acc(data["POSITION"], 5126, "VEC3", target=34962, minmax=True)
        nrm = data["NORMAL"]
        nrm = nrm / np.maximum(np.linalg.norm(nrm, axis=1, keepdims=True), 1e-8)
        na["NORMAL"] = add_acc(np.round(nrm * 127), 5120, "VEC3", normalized=True, target=34962)
        uv = data["TEXCOORD_0"]
        if uv.min() >= 0 and uv.max() <= 1:
            na["TEXCOORD_0"] = add_acc(np.round(uv * 65535), 5123, "VEC2", normalized=True, target=34962)
        else:
            na["TEXCOORD_0"] = add_acc(uv, 5126, "VEC2", target=34962)
        j = data["JOINTS_0"]
        na["JOINTS_0"] = add_acc(j, 5121 if j.max() < 256 else 5123, "VEC4", target=34962)
        w = data["WEIGHTS_0"].astype(np.float64)
        w /= np.maximum(w.sum(1, keepdims=True), 1e-8)
        q = np.round(w * 255).astype(np.int64)
        fix = 255 - q.sum(1)
        q[np.arange(len(q)), q.argmax(1)] += fix          # each row sums to exactly 255
        na["WEIGHTS_0"] = add_acc(q, 5121, "VEC4", normalized=True, target=34962)

        targets = None
        if prims[0].get("targets"):
            targets = []
            for old in keep_idx:
                d = read(prims[0]["targets"][old]["POSITION"])[used]
                targets.append({"POSITION": add_sparse(d)})
            mesh["extras"]["targetNames"] = KEEP_TARGETS
            if "weights" in mesh:
                mesh["weights"] = [mesh["weights"][i] for i in keep_idx]
        kept = []
        for p, t in zip(prims, tris):
            if not len(t):
                continue                                   # e.g. the shoes: wholly under the cut
            kept.append(p)
            nt = remap[t].ravel()
            p["attributes"] = dict(na)
            p["indices"] = add_acc(nt, 5123 if nt.max() < 65536 else 5125, "SCALAR", target=34963)
            if targets is not None:
                p["targets"] = targets
            else:
                p.pop("targets", None)
        mesh["primitives"] = kept

    # ---- skins: inverse bind matrices as they are ----
    for s in J["skins"]:
        s["inverseBindMatrices"] = copy_acc(s["inverseBindMatrices"])

    # ---- VRM: expressions and meta ----
    vrm = J["extensions"]["VRMC_vrm"]
    face_node = next(i for i, n in enumerate(J["nodes"]) if n.get("mesh") == 0)
    for e in vrm["expressions"]["preset"].values():
        for bnd in e.get("morphTargetBinds", []):
            bnd["index"] = remap_target[bnd["index"]]
    vrm["expressions"]["custom"] = {
        k: {"morphTargetBinds": [{"node": face_node, "index": KEEP_TARGETS.index(v), "weight": 1}],
            "isBinary": False, "overrideBlink": "none", "overrideLookAt": "none", "overrideMouth": "none"}
        for k, v in CUSTOM.items()}
    thumb = vrm["meta"].pop("thumbnailImage", None)

    # ---- images → WebP, ≤1024 px; drop the thumbnail ----
    used_images = sorted({t["source"] for t in J["textures"]})
    if thumb is not None and not any(t["source"] == thumb for t in J["textures"]):
        used_images = [i for i in used_images if i != thumb]
    img_map, new_images = {}, []
    for i in used_images:
        im = Image.open(io.BytesIO(view(J["images"][i]["bufferView"])))
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        if max(im.size) > MAX_TEX:
            k = MAX_TEX / max(im.size)
            im = im.resize((round(im.size[0] * k), round(im.size[1] * k)), Image.LANCZOS)
        if im.mode == "RGBA" and im.getchannel("A").getextrema() == (255, 255):
            im = im.convert("RGB")
        out = io.BytesIO()
        im.save(out, "WEBP", quality=WEBP_Q, method=6, exact=im.mode == "RGBA")
        img_map[i] = len(new_images)
        new_images.append({"name": J["images"][i].get("name", f"image{i}"), "mimeType": "image/webp",
                           "bufferView": add_view(out.getvalue())})
    J["images"] = new_images
    for t in J["textures"]:
        t["extensions"] = dict(t.get("extensions", {}), EXT_texture_webp={"source": img_map[t.pop("source")]})

    J["bufferViews"], J["accessors"] = new_views, new_acc
    while len(blob) % 4:
        blob.append(0)
    J["buffers"] = [{"byteLength": len(blob)}]
    for ext in ("KHR_mesh_quantization", "EXT_texture_webp"):
        if ext not in J["extensionsUsed"]:
            J["extensionsUsed"].append(ext)
    J["extensionsRequired"] = sorted(set(J.get("extensionsRequired", [])) | {"KHR_mesh_quantization", "EXT_texture_webp"})
    J["asset"]["generator"] = (J["asset"].get("generator", "") + " · 4m-studio sampleb_web.py").strip(" ·")

    js = json.dumps(J, separators=(",", ":"), ensure_ascii=False).encode()
    js += b" " * (-len(js) % 4)
    out = struct.pack("<4sII", b"glTF", 2, 12 + 8 + len(js) + 8 + len(blob))
    out += struct.pack("<I4s", len(js), b"JSON") + js + struct.pack("<I4s", len(blob), b"BIN\0") + bytes(blob)
    open(dst, "wb").write(out)
    print(f"{src}: {len(raw) / 1e6:.1f} MB → {dst}: {len(out) / 1e6:.2f} MB")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
