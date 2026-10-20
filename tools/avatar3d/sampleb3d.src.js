/* AvatarSample B — AvatarTracker's modelled 3D human, for the web.
   pixiv's VRoid sample model (VRM 1.0; NOT CC0 — see AvatarTracker's
   Tools/model_avatar/models/AvatarSample_B.LICENSE.md), loaded with pixiv's
   three-vrm (MIT) from assets/models/avatarsample-b.vrm, a trimmed copy made by
   sampleb_web.py. In the app she is still in Debug builds only.

   As in the app's ModelAvatarBody, everything about her comes from the model:
   the humanoid bones, the face's blend shapes (the same ones the app's
   avatar.json maps), the VRM's own spring bones for her hair and bows, with
   the app's overrides (the long and side locks hang with gravity and keep
   clear of the body). This file only turns the page's pose into hers: the head
   split between neck and head (neckShare 0.3), eyes, blinks, mouth, smile,
   brows, a hop, the chest's sway, and both arms by 2-bone IK toward the page's
   wrist targets, with the fingers curled for the hand shapes.

   Fetched only when someone picks her (assets/js/avatar3d.js imports it on
   demand, so three.js itself is still downloaded once). */
import {
  WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, AmbientLight, SRGBColorSpace, NoToneMapping,
  Vector3, Quaternion, Euler, Mesh, Shape, ExtrudeGeometry, MeshBasicMaterial, Color
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
function Spring(v, k, c) { this.x = v; this.v = 0; this.t = v; this.k = k; this.c = c; }
Spring.prototype.step = function (dt) {
  while (dt > 1e-6) {
    const h = Math.min(dt, 1 / 120), a = (this.t - this.x) * this.k - this.v * this.c;
    this.v += a * h; this.x += this.v * h; dt -= h;
  }
};
Spring.prototype.reset = function (v) { this.x = this.t = v; this.v = 0; };

// The app's springOverrides (Tools/model_avatar/models/AvatarSample_B.json): VRoid's
// long and side locks have no gravity as authored, so they'd stand out like wings.
const SPRING_OVERRIDES = [
  [/^J_Sec_Hair\d+_0[456]$/, 1.2],
  [/^J_Sec_Hair\d+_0[23]$/, 0.4]
];
const NECK_SHARE = 0.3, MAX_HEAD = 0.6, REST_ARM = 0.2;
const FINGERS = ['Thumb', 'Index', 'Middle', 'Ring', 'Little'];
const SEGS = { Thumb: ['Metacarpal', 'Proximal', 'Distal'], other: ['Proximal', 'Intermediate', 'Distal'] };
// How far each finger curls (0 open … 1 fist) for the page's hand shapes.
const HANDS = {
  open:     [0.05, 0.08, 0.08, 0.1, 0.12],
  fist:     [0.75, 1, 1, 1, 1],
  point:    [0.7, 0, 1, 1, 1],
  peace:    [0.7, 0, 0, 1, 1],
  thumbsUp: [0, 1, 1, 1, 1],
  heart:    [0.35, 0.55, 0.6, 0.65, 0.7]
};

function heartGeometry(s) {
  const h = new Shape();
  h.moveTo(0, -0.35 * s);
  h.bezierCurveTo(-0.15 * s, -0.2 * s, -0.5 * s, 0, -0.5 * s, 0.22 * s);
  h.bezierCurveTo(-0.5 * s, 0.45 * s, -0.22 * s, 0.55 * s, 0, 0.35 * s);
  h.bezierCurveTo(0.22 * s, 0.55 * s, 0.5 * s, 0.45 * s, 0.5 * s, 0.22 * s);
  h.bezierCurveTo(0.5 * s, 0, 0.15 * s, -0.2 * s, 0, -0.35 * s);
  const g = new ExtrudeGeometry(h, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 10 });
  g.translate(0, 0, -0.012);
  return g;
}

export function createSampleB3D(canvas, view, opts) {
  opts = opts || {};
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NoToneMapping;
  const scene = new Scene();

  // MToon is a toon shader: one key light decides lit vs shade, the ambient lifts the shade.
  const key = new DirectionalLight(0xffffff, 2.2); key.position.set(-1.2, 2.2, 3);
  const amb = new AmbientLight(0xffffff, 0.9);
  scene.add(key, amb);
  const yc = (view.yTop + view.yBot) / 2, halfH = (view.yTop - view.yBot) / 2, dist = 5.4;
  const camera = new PerspectiveCamera(2 * Math.atan(halfH / dist) * 180 / Math.PI, 1, 0.1, 50);
  camera.position.set(0, yc + 0.03, dist);
  camera.lookAt(0, yc, 0);

  let vrm = null, rig = null, dead = false, time = 0;
  const heartMat = new MeshBasicMaterial({ color: new Color().setRGB(1.0, 0.42, 0.62, SRGBColorSpace) });
  const heartGeo = heartGeometry(0.075);
  const heart = new Mesh(heartGeo, heartMat);
  heart.visible = false;

  const ready = new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.load(opts.url, (gltf) => {
      if (dead) { VRMUtils.deepDispose(gltf.scene); return; }
      vrm = gltf.userData.vrm;
      if (!vrm) { reject(new Error('not a VRM')); return; }
      // (sampleb_web.py has already dropped unused vertices; its quantised normals are
      // interleaved, which VRMUtils.removeUnnecessaryVertices can't take.)
      vrm.scene.traverse((o) => { o.frustumCulled = false; });
      scene.add(vrm.scene);
      scene.add(heart);
      rig = buildRig(vrm);
      resolve();
    }, (e) => {
      if (opts.onProgress && e && e.total) opts.onProgress(e.loaded / e.total);
    }, reject);
  });

  function buildRig(vrm) {
    const h = vrm.humanoid;
    const node = (n) => h.getNormalizedBoneNode(n);
    vrm.scene.updateMatrixWorld(true);
    const raw = (n) => h.getRawBoneNode(n).getWorldPosition(new Vector3());
    // Screen sides: the screen-left arm is her RIGHT arm (she faces the camera).
    const side = (screen) => {
      const ch = screen === 'L' ? 'right' : 'left', out = screen === 'L' ? -1 : 1;
      const s = raw(ch + 'UpperArm'), e = raw(ch + 'LowerArm'), w = raw(ch + 'Hand');
      const fingers = FINGERS.map((f) => (f === 'Thumb' ? SEGS.Thumb : SEGS.other)
        .map((seg) => node(ch + f + seg)).filter(Boolean));
      return {
        out, upper: node(ch + 'UpperArm'), lower: node(ch + 'LowerArm'), hand: node(ch + 'Hand'),
        a: s.distanceTo(e), b: e.distanceTo(w), shoulder: s, fingers,
        tgt: [new Spring(Math.sin(REST_ARM), 150, 21), new Spring(Math.cos(REST_ARM), 150, 21)],
        curl: FINGERS.map((_, i) => new Spring(HANDS.open[i], 160, 24)),
        heart: new Spring(0, 120, 20)
      };
    };
    // Hair: the app's overrides, and every collider group for the locks that hang.
    const groups = vrm.springBoneManager ? vrm.springBoneManager.colliderGroups : [];
    if (vrm.springBoneManager) {
      vrm.springBoneManager.joints.forEach((j) => {
        const o = SPRING_OVERRIDES.find(([re]) => re.test(j.bone.name));
        if (!o) return;
        j.settings.gravityPower = o[1];
        j.settings.gravityDir = new Vector3(0, -1, 0);
        j.colliderGroups = groups.slice();
      });
    }
    return {
      hips: node('hips'), spine: node('spine'), chest: node('chest'), upper: node('upperChest') || node('chest'),
      neck: node('neck'), head: node('head'),
      hipsY: node('hips').position.y,
      L: side('L'), R: side('R')
    };
  }

  // ---- IK: shoulder at the origin, the chest's frame (x right, y up, z toward the camera) ----
  const tmpA = new Vector3(), tmpB = new Vector3(), tmpE = new Vector3(), pole = new Vector3();
  const qa = new Quaternion(), qb = new Quaternion(), qInv = new Quaternion();
  function solveArm(arm, target, shape, dt) {
    // The page's targets are made for the chibis' short, wide-set arms. Hers are long and her
    // shoulders narrow, so outward reach is halved (a wave stays beside her head, inside the
    // stage) and hands brought in stop at her middle instead of crossing over.
    const t = target ? [target[0] * (target[0] > 0 ? 0.5 : 0.45), target[1] < 0 ? target[1] * 0.9 : target[1]]
      : [Math.sin(REST_ARM), Math.cos(REST_ARM)];
    arm.tgt[0].t = t[0]; arm.tgt[1].t = t[1];
    if (dt > 0) { arm.tgt[0].step(dt); arm.tgt[1].step(dt); } else { arm.tgt[0].reset(t[0]); arm.tgt[1].reset(t[1]); }
    const out = arm.tgt[0].x, down = arm.tgt[1].x, total = arm.a + arm.b;
    // Hands that come in across the body come forward too, so they stay in front of her.
    const fwd = clamp(0.18 - out * 0.45, 0.06, 0.55);
    tmpA.set(arm.out * out * total, -down * total, fwd * total);
    let d = tmpA.length();
    const maxD = total * 0.995, minD = Math.abs(arm.a - arm.b) + 0.02;
    if (d > maxD) { tmpA.multiplyScalar(maxD / d); d = maxD; }
    if (d < minD) { tmpA.multiplyScalar(minD / Math.max(d, 1e-6)); d = minD; }
    const n = tmpB.copy(tmpA).normalize();
    // Elbow: out to the side, a little down and back — where a person's elbow goes.
    pole.set(arm.out * 0.75, -0.55, -0.35);
    pole.addScaledVector(n, -pole.dot(n));
    if (pole.lengthSq() < 1e-6) pole.set(0, 0, -1);
    pole.normalize();
    const cosA = clamp((arm.a * arm.a + d * d - arm.b * arm.b) / (2 * arm.a * d), -1, 1), sinA = Math.sqrt(1 - cosA * cosA);
    tmpE.copy(n).multiplyScalar(arm.a * cosA).addScaledVector(pole, arm.a * sinA);
    const rest = tmpB.set(arm.out, 0, 0);
    qa.setFromUnitVectors(rest, tmpE.clone().normalize());
    qb.setFromUnitVectors(rest, tmpA.clone().sub(tmpE).normalize());
    arm.upper.quaternion.copy(qa);
    arm.lower.quaternion.copy(qInv.copy(qa).invert().multiply(qb));
    arm.hand.quaternion.identity();
    // Fingers: curl about the axis across the palm (palm down in the rest T-pose).
    const want = HANDS[shape] || HANDS.open;
    arm.fingers.forEach((segs, i) => {
      const c = arm.curl[i];
      c.t = want[i];
      if (dt > 0) c.step(dt); else c.reset(want[i]);
      const thumb = i === 0;
      segs.forEach((b, k) => {
        const ang = c.x * (thumb ? [0.35, 0.55, 0.6][k] : [1.1, 1.3, 0.9][k]);
        if (thumb) b.quaternion.setFromEuler(new Euler(0, arm.out * ang * 0.9, arm.out * -ang * 0.4));
        else b.quaternion.setFromAxisAngle(Z, -arm.out * ang);
      });
    });
    arm.heart.t = shape === 'heart' ? 1 : 0;
    if (dt > 0) arm.heart.step(dt); else arm.heart.reset(arm.heart.t);
  }
  const Z = new Vector3(0, 0, 1), Y = new Vector3(0, 1, 0), X = new Vector3(1, 0, 0);

  function apply(p, dt) {
    if (!rig) return;
    dt = Math.max(0, dt);
    time += dt;
    // Body: hop, sway and lean, breath in the upper chest.
    rig.hips.position.y = rig.hipsY + (p.bounce || 0) * 0.05;
    rig.hips.position.x = (p.lean || 0) * 0.6;
    rig.spine.quaternion.setFromAxisAngle(Z, (p.chestRoll || 0) * 0.6);
    rig.chest.quaternion.setFromAxisAngle(Z, (p.chestRoll || 0) * 0.4);
    rig.upper.quaternion.setFromAxisAngle(X, -(p.breath || 0) * 0.02);
    // Head: the app's split — the neck takes neckShare of the turn, the head the rest.
    const yaw = clamp(p.headYaw || 0, -MAX_HEAD, MAX_HEAD), pitch = clamp(p.headPitch || 0, -MAX_HEAD, MAX_HEAD),
      roll = clamp(p.headRoll || 0, -MAX_HEAD, MAX_HEAD);
    const hq = new Quaternion().setFromAxisAngle(Y, yaw)
      .multiply(new Quaternion().setFromAxisAngle(X, -pitch))
      .multiply(new Quaternion().setFromAxisAngle(Z, -roll));
    rig.neck.quaternion.identity().slerp(hq, NECK_SHARE);
    rig.head.quaternion.identity().slerp(hq, 1 - NECK_SHARE);
    // Arms and hands.
    solveArm(rig.L, p.L, p.Lshape, dt);
    solveArm(rig.R, p.R, p.Rshape, dt);
    // Face: the app's channels, by the same blend shapes.
    const em = vrm.expressionManager;
    if (em) {
      const smile = clamp(p.smile || 0, -1, 1), brow = ((p.browL || 0) + (p.browR || 0)) / 2;
      em.setValue('blinkRight', clamp(p.blinkL || 0, 0, 1));   // screen-left eye is her right
      em.setValue('blinkLeft', clamp(p.blinkR || 0, 0, 1));
      em.setValue('aa', clamp(p.mouthOpen || 0, 0, 1) * 0.85);
      em.setValue('smileMouth', Math.max(0, smile) * 0.8 * (1 - clamp(p.mouthOpen || 0, 0, 1) * 0.5));
      em.setValue('sadMouth', Math.max(0, -smile));
      em.setValue('browUp', Math.max(0, brow));
      em.setValue('browDown', Math.max(0, -brow));
    }
    if (vrm.lookAt) {
      vrm.lookAt.autoUpdate = false;
      vrm.lookAt.yaw = clamp(p.gazeX || 0, -1, 1) * 40;
      vrm.lookAt.pitch = clamp(p.gazeY || 0, -1, 1) * 35;
    }
    vrm.update(dt);
    // The finger heart: a little pink heart above the hands, as in the app.
    const hw = Math.max(rig.L.heart.x, rig.R.heart.x);
    if (hw > 0.2) {
      const a = rig.L.hand.getWorldPosition(new Vector3()), b = rig.R.hand.getWorldPosition(new Vector3());
      const both = rig.L.heart.x > 0.5 && rig.R.heart.x > 0.5;
      const at = both ? a.add(b).multiplyScalar(0.5) : (rig.L.heart.x > rig.R.heart.x ? a : b);
      heart.position.set(at.x, at.y + 0.09 + Math.sin(time * 5) * 0.006, at.z + 0.05);
      heart.scale.setScalar(clamp(hw, 0.001, 1) * (both ? 1.3 : 0.9));
      heart.visible = true;
    } else heart.visible = false;
  }

  return {
    ready,
    setSize(cssW, cssH, dpr) {
      renderer.setPixelRatio(Math.min(dpr || 1, 2));
      renderer.setSize(cssW, cssH, false);
      camera.aspect = cssW / cssH;
      camera.updateProjectionMatrix();
    },
    apply(p, dt) {
      // The page's names → the shared 3D pose names (as the other characters take them).
      apply({
        headYaw: p.headYaw, headPitch: p.headPitch, headRoll: p.headRoll, gazeX: p.gazeX, gazeY: p.gazeY,
        blinkL: p.blinkL, blinkR: p.blinkR, mouthOpen: p.open, smile: p.smile, browL: p.browL, browR: p.browR,
        bounce: p.bounce, breath: p.breath, chestRoll: p.chestRoll, lean: p.lean,
        L: p.L, R: p.R, Lshape: p.Lshape, Rshape: p.Rshape
      }, dt);
    },
    render() { if (vrm) renderer.render(scene, camera); },
    dispose() {
      dead = true;
      if (vrm) VRMUtils.deepDispose(vrm.scene);
      heartGeo.dispose(); heartMat.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    }
  };
}
