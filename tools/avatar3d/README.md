# AvatarTracker's 3D characters on the web

All the 3D characters share one bundle, `assets/js/avatar3d.js` (the characters plus only the parts
of three.js they use, with the shared part in `assets/js/3d/chunk-*.js`). The AvatarTracker page
fetches it the first time someone picks Mochi, Taro, MieMie 3D, Zhuzhu or AvatarSample B, never
before, and only once for all of them. AvatarSample B also needs three-vrm and the glTF loader, which
esbuild splits into their own chunk (`assets/js/3d/sampleb3d.src-*.js`), fetched only when she is
picked, together with her model.

- `mochi3d.src.js` — Mochi, a port of the app's `PrimitiveChibiBody.swift` (shapes, colours,
  outlines, face, arms) plus the lights and camera from `RealityAvatarRenderer.swift`.
- `taro.js` — Taro, the app's own three.js mirror of `PrimitiveCatBody.swift`
  (`AvatarTracker/Tools/taro3d/taro.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `taro3d.src.js` — the renderer, lights and camera around Taro, and the page's pose turned into his.
- `miemie.js` — MieMie 3D, the app's own three.js mirror of `PrimitiveMieMieBody.swift`
  (`AvatarTracker/Tools/miemie3d/miemie.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `miemie3d.src.js` — the renderer, lights and camera around her, and the page's wrist targets turned
  into her two arm angles (2-bone IK, elbow out and low, as Mochi's).
- `pig.js` — Zhuzhu, the app's own three.js mirror of `PrimitivePigBody.swift`
  (`AvatarTracker/Tools/pig3d/pig.js`), copied unchanged. When the app's copy changes, copy it
  again and rebuild.
- `zhuzhu3d.src.js` — the renderer, lights (the app's render-tool levels, as MieMie 3D's) and camera
  around her, and the page's pose turned into her stub arms (as Taro's).
- `sampleb3d.src.js` — AvatarSample B, pixiv's VRoid sample model (VRM 1.0, **not CC0**; licence
  notes in AvatarTracker's `Tools/model_avatar/models/AvatarSample_B.LICENSE.md`), loaded with
  pixiv's three-vrm (MIT). Like the app's `ModelAvatarBody`, everything about her comes from the
  model: humanoid bones, the face's blend shapes (the ones the app's avatar.json maps), the VRM's
  spring bones with the app's `springOverrides` (long and side locks hang with gravity). The page's
  pose drives her neck/head (neckShare 0.3), eyes, blinks, mouth, smile, brows, and both arms by
  2-bone IK (outward reach halved — her arms are long), fingers curled for the hand shapes, and a
  pink heart for 🫶. The stage shows *In development · test builds only* (cast.js).
- `sampleb_web.py` — makes `assets/models/avatarsample-b.vrm` (2.2 MB) from the app's 21 MB
  `Tools/model_avatar/sources/AvatarSample_B.vrm`: only the morph targets the page uses (sparse,
  positions only), lower legs and shoes dropped, vertex data quantised (KHR_mesh_quantization),
  textures as ≤1024 px WebP (EXT_texture_webp), thumbnail dropped. VRM meta and licence kept as
  authored. Needs numpy and Pillow:
  `python3 tools/avatar3d/sampleb_web.py ../AvatarTracker/Tools/model_avatar/sources/AvatarSample_B.vrm assets/models/avatarsample-b.vrm`
- `avatar3d.src.js` — the bundle's entry.

To rebuild after changing any of them:

```sh
cd tools/avatar3d
npm install
npm run build          # clears and rewrites assets/js/3d/ — commit the deletions too
cd ../.. && python3 tools/build.py
```
