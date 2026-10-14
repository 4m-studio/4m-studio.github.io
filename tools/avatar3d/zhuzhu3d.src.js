/* Zhuzhu — AvatarTracker's 3D piglet, for the web.
   pig.js is the app's own three.js mirror of PrimitivePigBody.swift
   (AvatarTracker/Tools/pig3d/pig.js), copied here unchanged: the round pale-pink
   body, the bow on the screen-right ear, dot eyes and blush, the snout that
   sniffs and lifts when she talks, ears that are the brows (perk up, flop
   forward), one-piece stub arms and the corkscrew tail that boings. This file
   only adds what the page needs around her: a renderer, the lights and camera
   of RealityAvatarRenderer.swift, and the page's pose turned into hers (the
   same stub-arm translation as Taro's — she is built on his rules).
   Bundled with the other 3D characters into assets/js/avatar3d.js (see README.md). */
import {
  WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, HemisphereLight, Color, SRGBColorSpace, NoToneMapping,
  Object3D, Mesh, SphereGeometry, CylinderGeometry, BoxGeometry, BufferGeometry,
  Float32BufferAttribute, MeshStandardMaterial, MeshBasicMaterial, Vector3, Quaternion
} from 'three';
import { createPig, Shape, neutralPose } from './pig.js';

// pig.js takes three.js as an argument (the app's tools pass the whole
// library). Hand it only the classes it uses, so the bundle stays tree-shaken.
const THREE = {
  Object3D, Mesh, SphereGeometry, CylinderGeometry, BoxGeometry, BufferGeometry,
  Float32BufferAttribute, MeshStandardMaterial, MeshBasicMaterial, Vector3, Quaternion, Color, SRGBColorSpace
};

const rgb = (r, g, b) => new Color().setRGB(r, g, b, SRGBColorSpace);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
function Spring(v, k, c) { this.x = v; this.v = 0; this.t = v; this.k = k; this.c = c; }
Spring.prototype.step = function (dt) {
  while (dt > 1e-6) {
    const h = Math.min(dt, 1 / 120), a = (this.t - this.x) * this.k - this.v * this.c;
    this.v += a * h; this.x += this.v * h; dt -= h;
  }
};
Spring.prototype.reset = function (v) { this.x = this.t = v; this.v = 0; };

export function createZhuzhu3D(canvas, view) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NoToneMapping;
  const scene = new Scene();
  const pig = createPig(THREE);
  scene.add(pig.root);

  // ---- lights and camera (RealityAvatarRenderer's three-point light) ----
  // The levels of the app's own render tool (Tools/pig3d/render.html), which
  // drew her gallery tile, as for MieMie 3D: Taro's brighter set bleaches her
  // pale pink toward white.
  const key = new DirectionalLight(0xffffff, 2.4); key.position.set(-2, 3, 5);
  const fill = new DirectionalLight(rgb(1.0, 0.95, 0.92), 1.1); fill.position.set(3, 1, 4);
  const rim = new DirectionalLight(rgb(0.90, 0.95, 1.0), 0.9); rim.position.set(0, 3, -4);
  const sky = new HemisphereLight(0xffffff, 0xd8c8c4, 0.75);
  scene.add(key, fill, rim, sky);
  const yc = (view.yTop + view.yBot) / 2, halfH = (view.yTop - view.yBot) / 2, dist = 5.4;
  const camera = new PerspectiveCamera(2 * Math.atan(halfH / dist) * 180 / Math.PI, 1, 0.1, 50);
  camera.position.set(0, yc + 0.06, dist);
  camera.lookAt(0, yc, 0);

  // ---- the page's pose → Zhuzhu's ----
  // The page gives each wrist as a target in arm lengths from the shoulder,
  // [outward, down]. Her stub arm only needs a direction and a reach (it has
  // no elbow to show), so the target becomes an angle from straight down.
  const rest = [Math.sin(Shape.restArmAngle), Math.cos(Shape.restArmAngle)];
  const springs = {
    L: [new Spring(rest[0], 150, 21), new Spring(rest[1], 150, 21)],
    R: [new Spring(rest[0], 150, 21), new Spring(rest[1], 150, 21)]
  };
  function arm(s, target, shape, dt) {
    const t = target || rest;
    s[0].t = t[0]; s[1].t = t[1];
    if (dt > 0) { s[0].step(dt); s[1].step(dt); } else { s[0].reset(t[0]); s[1].reset(t[1]); }
    const x = s[0].x, y = s[1].x;
    return { upper: Math.atan2(x, y), forearm: 0, reach: clamp(Math.hypot(x, y), 0.5, 1),
             handShape: shape === 'heart' ? 'heart' : 'open' };
  }
  let time = 0;

  function apply(p, dt) {
    time += Math.max(0, dt);
    const pose = neutralPose();
    pose.time = time; pose.idle = 1;
    pose.headYaw = p.headYaw || 0; pose.headPitch = p.headPitch || 0; pose.headRoll = p.headRoll || 0;
    pose.lean = p.lean || 0; pose.hipShift = p.hipShift || 0; pose.chestRoll = p.chestRoll || 0;
    pose.breath = p.breath || 0; pose.bounce = p.bounce || 0;
    pose.gazeX = p.gazeX || 0; pose.gazeY = p.gazeY || 0;
    pose.blinkLeft = clamp(p.blinkL || 0, 0, 1); pose.blinkRight = clamp(p.blinkR || 0, 0, 1);
    pose.mouthOpen = clamp(p.open || 0, 0, 1); pose.smile = clamp(p.smile || 0, -1, 1);
    pose.browLeft = clamp(p.browL || 0, -1, 1); pose.browRight = clamp(p.browR || 0, -1, 1);
    pose.screenLeftArm = arm(springs.L, p.L, p.Lshape, dt);
    pose.screenRightArm = arm(springs.R, p.R, p.Rshape, dt);
    pig.apply(pose, dt);
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
      pig.root.traverse((o) => { if (o.geometry) geos.add(o.geometry); if (o.material) mats.add(o.material); });
      geos.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
    }
  };
}
