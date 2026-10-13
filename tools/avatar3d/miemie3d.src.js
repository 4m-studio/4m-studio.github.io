/* MieMie 3D — AvatarTracker's chibi, sculpted-in-code MieMie, for the web.
   miemie.js is the app's own three.js mirror of PrimitiveMieMieBody.swift
   (AvatarTracker/Tools/miemie3d/miemie.js), copied here unchanged: the bob that
   hangs on a spring, centre part and pearl clip, lashed eyes, blush, black tee
   and jeans, pinned neck, two-bone arms that keep clear of the head and hair.
   This file only adds what the page needs around it: a renderer, the lights
   and camera of RealityAvatarRenderer.swift, and the page's pose (the one Mochi
   takes) turned into hers. Bundled with Mochi and Taro into
   assets/js/avatar3d.js (see README.md). */
import {
  WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, HemisphereLight, Color, SRGBColorSpace, NoToneMapping,
  Object3D, Mesh, SphereGeometry, CylinderGeometry, CapsuleGeometry, BoxGeometry, BufferGeometry,
  Float32BufferAttribute, MeshStandardMaterial, MeshBasicMaterial, Vector3, Quaternion
} from 'three';
import { createMieMie, Shape, neutralPose } from './miemie.js';

// miemie.js takes three.js as an argument (the app's renderer passes the whole
// library). Hand it only the classes it uses, so the bundle stays tree-shaken.
const THREE = {
  Object3D, Mesh, SphereGeometry, CylinderGeometry, CapsuleGeometry, BoxGeometry, BufferGeometry,
  Float32BufferAttribute, MeshStandardMaterial, MeshBasicMaterial, Vector3, Quaternion, Color, SRGBColorSpace
};

const rgb = (r, g, b) => new Color().setRGB(r, g, b, SRGBColorSpace);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
function Spring(v, k, c) { this.x = v; this.v = 0; this.t = v; this.k = k; this.c = c; }
Spring.prototype.step = function (dt) {
  while (dt > 1e-6) {
    const h = Math.min(dt, 1 / 120), a = (this.t - this.x) * this.k - this.v * this.c;
    this.v += a * h; this.x += this.v * h; dt -= h;
  }
};
Spring.prototype.reset = function (v) { this.x = this.t = v; this.v = 0; };

export function createMieMie3D(canvas, view) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NoToneMapping;
  const scene = new Scene();
  const mm = createMieMie(THREE);
  scene.add(mm.root);

  // ---- lights and camera (RealityAvatarRenderer's three-point light) ----
  // The app's own mirror's levels (Tools/miemie3d/render.html), which its
  // checks hold to the app: brighter washes her skin out to white.
  const key = new DirectionalLight(0xffffff, 2.4); key.position.set(-2, 3, 5);
  const fill = new DirectionalLight(rgb(1.0, 0.95, 0.92), 1.1); fill.position.set(3, 1, 4);
  const rim = new DirectionalLight(rgb(0.90, 0.95, 1.0), 0.9); rim.position.set(0, 3, -4);
  const sky = new HemisphereLight(0xffffff, 0xd8c8c4, 0.75);
  scene.add(key, fill, rim, sky);
  const yc = (view.yTop + view.yBot) / 2, halfH = (view.yTop - view.yBot) / 2, dist = 5.4;
  const camera = new PerspectiveCamera(2 * Math.atan(halfH / dist) * 180 / Math.PI, 1, 0.1, 50);
  camera.position.set(0, yc + 0.06, dist);
  camera.lookAt(0, yc, 0);

  // ---- the page's pose → MieMie's ----
  // The page gives each wrist as a target in arm lengths from the shoulder,
  // [outward, down]. Her arm takes two angles from straight down (outward
  // positive): the upper arm, and the forearm's bend on it. 2-bone IK, with
  // the elbow chosen as Mochi's is: outward and low.
  const lu = Shape.upperLength, lf = Shape.forearmLength, total = lu + lf;
  const rest = [Math.sin(Shape.restArmAngle), Math.cos(Shape.restArmAngle)];
  const springs = {
    L: [new Spring(rest[0], 150, 21), new Spring(rest[1], 150, 21)],
    R: [new Spring(rest[0], 150, 21), new Spring(rest[1], 150, 21)]
  };
  function arm(s, target, shape, dt) {
    const t = target || rest;
    s[0].t = t[0]; s[1].t = t[1];
    if (dt > 0) { s[0].step(dt); s[1].step(dt); } else { s[0].reset(t[0]); s[1].reset(t[1]); }
    // Shoulder at the origin, x outward, y up.
    let hx = s[0].x * total, hy = -s[1].x * total, d = Math.hypot(hx, hy);
    const maxD = total - 1e-4, minD = Math.abs(lu - lf) + 0.01;
    if (d > maxD) { hx *= maxD / d; hy *= maxD / d; d = maxD; }
    if (d < minD) { const k = d > 1e-6 ? minD / d : 0; hx = k ? hx * k : 0; hy = k ? hy * k : -minD; d = minD; }
    const base = Math.atan2(hy, hx);
    const alpha = Math.acos(clamp((lu * lu + d * d - lf * lf) / (2 * lu * d), -1, 1));
    let ex = 0, ey = 0, best = -Infinity;
    for (const sgn of [1, -1]) {
      const u = base + sgn * alpha, x = Math.cos(u) * lu, y = Math.sin(u) * lu, score = x - y * 0.9;
      if (score > best) { best = score; ex = x; ey = y; }
    }
    const upper = Math.atan2(ex, -ey), lower = Math.atan2(hx - ex, -(hy - ey));
    return { upper, forearm: wrap(lower - upper), reach: 1, handShape: shape || 'open' };
  }
  let time = 0;

  function apply(p, dt) {
    time += Math.max(0, dt);
    const pose = neutralPose();
    pose.time = time;
    pose.headYaw = p.headYaw || 0; pose.headPitch = p.headPitch || 0; pose.headRoll = p.headRoll || 0;
    pose.lean = p.lean || 0; pose.hipShift = p.hipShift || 0; pose.chestRoll = p.chestRoll || 0;
    pose.breath = p.breath || 0; pose.bounce = p.bounce || 0;
    pose.gazeX = p.gazeX || 0; pose.gazeY = p.gazeY || 0;
    pose.blinkLeft = clamp(p.blinkL || 0, 0, 1); pose.blinkRight = clamp(p.blinkR || 0, 0, 1);
    pose.mouthOpen = clamp(p.open || 0, 0, 1); pose.smile = clamp(p.smile || 0, -1, 1);
    pose.browLeft = clamp(p.browL || 0, -1, 1); pose.browRight = clamp(p.browR || 0, -1, 1);
    pose.screenLeftArm = arm(springs.L, p.L, p.Lshape, dt);
    pose.screenRightArm = arm(springs.R, p.R, p.Rshape, dt);
    mm.apply(pose, dt);
  }

  return {
    setSize(cssW, cssH, dpr) {
      renderer.setPixelRatio(Math.min(dpr || 1, 2));
      renderer.setSize(cssW, cssH, false);
      camera.aspect = cssW / cssH;
      camera.updateProjectionMatrix();
    },
    apply,
    render() { renderer.render(scene, camera); },
    dispose() {
      const geos = new Set(), mats = new Set();
      mm.root.traverse((o) => { if (o.geometry) geos.add(o.geometry); if (o.material) mats.add(o.material); });
      geos.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
    }
  };
}
