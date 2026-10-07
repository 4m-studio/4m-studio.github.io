/* Mochi — AvatarTracker's 3D character, for the web.
   A port of PrimitiveChibiBody.swift + the lights and camera of
   RealityAvatarRenderer.swift: the same primitives, sizes, colours, outline
   hulls, face placement on the head sphere, arm depth clearance and finger
   heart. Bundled with Taro and the parts of three.js they use into
   assets/js/avatar3d.js (see README.md), and loaded only when someone
   picks a 3D character on the AvatarTracker page. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, CapsuleGeometry,
  MeshStandardMaterial, MeshBasicMaterial, DirectionalLight, HemisphereLight, Color,
  Vector3, Quaternion, Euler, BackSide, SRGBColorSpace, NoToneMapping
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const Shape = {
  bodyCenterY: 0.33, bodyRadii: [0.30, 0.33, 0.27],
  neckY: 0.60, headCenterY: 0.42, headRadius: 0.50,
  earOffset: [0.35, 0.43, 0.06], earRadii: [0.14, 0.14, 0.08],
  innerEarOffset: [0.36, 0.45, 0.12], innerEarRadii: [0.07, 0.07, 0.03],
  eyeX: 0.165, eyeY: -0.02, eyeRadii: [0.062, 0.088, 0.03],
  gazeTravelX: 0.035, gazeTravelY: 0.030, shutEyeScale: 0.10,
  browY: 0.125, browTravel: 0.030, browTilt: 0.25,
  cheekX: 0.29, cheekY: -0.14,
  mouthY: -0.19, mouthHalfWidth: 0.052, smileTilt: 0.55, mouthDrop: 0.055,
  openSmileFlatten: 0.6, smileWiden: 0.012,
  shoulderX: 0.22, shoulderY: 0.48, upperLength: 0.17, forearmLength: 0.16,
  limbRadius: 0.045, palmRadius: 0.065, restArmAngle: 0.70, clearance: 0.012,
  breathAmount: 0.012, bounceHeight: 0.06, bodyRiseFollow: 0.12, handShapeFade: 0.06
};
const rgb = (r, g, b) => new Color().setRGB(r, g, b, SRGBColorSpace);
const Palette = {
  cream: rgb(1.00, 0.95, 0.88), blue: rgb(0.62, 0.80, 0.98), blueDark: rgb(0.50, 0.68, 0.90),
  pink: rgb(1.00, 0.70, 0.76), ink: rgb(0.22, 0.15, 0.15), mouth: rgb(0.42, 0.16, 0.20),
  leaf: rgb(0.46, 0.78, 0.45), white: rgb(1, 1, 1), outline: rgb(0.30, 0.22, 0.22), heart: rgb(1.00, 0.42, 0.55)
};
const OUTLINE_SCALE = 1.045;

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smoothstep = (x) => { const t = clamp(x, 0, 1); return t * t * (3 - 2 * t); };
const V = (a) => new Vector3(a[0], a[1], a[2]);
const Z = new Vector3(0, 0, 1), Y = new Vector3(0, 1, 0), NEG_Y = new Vector3(0, -1, 0);
function rotation(from, to) {
  if (from.dot(to) < -0.9999) return new Quaternion().setFromAxisAngle(Z, Math.PI);
  return new Quaternion().setFromUnitVectors(from, to);
}
function Spring(v, k, c) { this.x = v; this.v = 0; this.t = v; this.k = k; this.c = c; }
// Sub-stepped: the arm-depth springs (k 420, c 41) go unstable above ~1/45 s per
// step, and a browser frame can be longer than the app's display-link tick.
Spring.prototype.step = function (dt) {
  while (dt > 1e-6) {
    const h = Math.min(dt, 1 / 120), a = (this.t - this.x) * this.k - this.v * this.c;
    this.v += a * h; this.x += this.v * h; dt -= h;
  }
};
Spring.prototype.reset = function (v) { this.x = this.t = v; this.v = 0; };

export function createMochi(canvas, view) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NoToneMapping;
  const scene = new Scene();

  // Geometry and materials are shared; the scene is ~70 small meshes.
  const sphere = new SphereGeometry(1, 40, 28);
  const mats = new Map();
  const matte = (color, roughness = 0.85) => {
    const key = color.getHexString() + roughness;
    if (!mats.has(key)) mats.set(key, new MeshStandardMaterial({ color, roughness, metalness: 0 }));
    return mats.get(key);
  };
  const outlineMat = new MeshBasicMaterial({ color: Palette.outline, side: BackSide });
  const capsules = new Map();
  const capsule = (length, radius) => {
    const key = length + ':' + radius;
    if (!capsules.has(key)) capsules.set(key, new CapsuleGeometry(radius, Math.max(0.0001, length - 2 * radius), 6, 14));
    return capsules.get(key);
  };
  function outline(mesh) {
    const hull = new Mesh(mesh.geometry, outlineMat);
    hull.scale.setScalar(OUTLINE_SCALE);
    mesh.add(hull);
  }
  function ellipsoid(radii, color, outlined = false, roughness = 0.85) {
    const m = new Mesh(sphere, matte(color, roughness));
    m.scale.set(radii[0], radii[1], radii[2]);
    if (outlined) outline(m);
    return m;
  }
  function segment(length, radius, color, outlined = true) {
    const m = new Mesh(capsule(length, radius), matte(color));
    if (outlined) outline(m);
    return m;
  }
  const node = () => new Group();

  const root = node(), chest = node(), belly = node(), neck = node(), headPivot = node(), sprout = node();
  scene.add(root);
  root.add(chest); chest.add(belly); chest.add(neck); neck.add(headPivot);
  neck.position.set(0, Shape.neckY, 0);
  const sproutSpring = new Spring(0, 140, 7);
  let lastLean = 0;

  // feet
  for (const side of [-1, 1]) {
    const foot = ellipsoid([0.11, 0.07, 0.13], Palette.blueDark, true);
    foot.position.set(side * 0.12, 0.03, 0.05);
    root.add(foot);
  }
  // body
  const torso = ellipsoid(Shape.bodyRadii, Palette.blue, true);
  torso.position.set(0, Shape.bodyCenterY, 0);
  belly.add(torso);
  const patch = ellipsoid([0.17, 0.16, 0.05], Palette.cream);
  patch.position.set(0, 0.30, Shape.bodyRadii[2] - 0.035);
  belly.add(patch);
  // head
  const center = new Vector3(0, Shape.headCenterY, 0);
  const skull = ellipsoid([Shape.headRadius, Shape.headRadius, Shape.headRadius], Palette.cream, true);
  skull.position.copy(center);
  headPivot.add(skull);
  for (const side of [-1, 1]) {
    const ear = ellipsoid(Shape.earRadii, Palette.cream, true);
    ear.position.copy(center).add(V(Shape.earOffset).multiply(new Vector3(side, 1, 1)));
    headPivot.add(ear);
    const inner = ellipsoid(Shape.innerEarRadii, Palette.pink);
    inner.position.copy(center).add(V(Shape.innerEarOffset).multiply(new Vector3(side, 1, 1)));
    headPivot.add(inner);
  }
  sprout.position.copy(center).add(new Vector3(0, Shape.headRadius - 0.01, 0));
  headPivot.add(sprout);
  const stalk = segment(0.10, 0.012, Palette.leaf, false);
  stalk.position.set(0, 0.05, 0);
  sprout.add(stalk);
  for (const side of [-1, 1]) {
    const leaf = ellipsoid([0.075, 0.032, 0.045], Palette.leaf);
    leaf.position.set(side * 0.06, 0.105, 0);
    leaf.rotation.z = side * 0.45;
    sprout.add(leaf);
  }

  // face, placed on the head sphere
  function place(obj, x, y, lift = 0.004) {
    const r = Shape.headRadius;
    const z = Math.sqrt(Math.max(0.0001, r * r - x * x - y * y));
    const n = new Vector3(x, y, z).normalize();
    obj.position.copy(center).addScaledVector(n, r + lift);
    obj.quaternion.copy(rotation(Z, n));
  }
  const eyes = [], brows = [], cheeks = [];
  for (const side of [-1, 1]) {
    const pivot = node();
    const ball = ellipsoid(Shape.eyeRadii, Palette.ink, false, 0.35);
    pivot.add(ball);
    const highlights = node();
    const big = ellipsoid([0.020, 0.020, 0.006], Palette.white, false, 0.3);
    big.position.set(0.020, 0.036, Shape.eyeRadii[2] * 0.9);
    const small = ellipsoid([0.010, 0.010, 0.004], Palette.white, false, 0.3);
    small.position.set(-0.018, -0.034, Shape.eyeRadii[2] * 0.85);
    highlights.add(big); highlights.add(small);
    pivot.add(highlights);
    headPivot.add(pivot);
    eyes.push({ pivot, ball, highlights, x: side * Shape.eyeX });

    const browPivot = node();
    place(browPivot, side * Shape.eyeX, Shape.browY);
    const bar = segment(0.075, 0.0085, Palette.ink, false);
    bar.rotation.z = Math.PI / 2;
    const holder = node();
    holder.add(bar);
    browPivot.add(holder);
    headPivot.add(browPivot);
    brows.push({ holder, side });

    const cheek = ellipsoid([0.065, 0.040, 0.012], Palette.pink);
    place(cheek, side * Shape.cheekX, Shape.cheekY, 0);
    headPivot.add(cheek);
    cheeks.push(cheek);
  }
  const mouth = node();
  place(mouth, 0, Shape.mouthY);
  headPivot.add(mouth);
  const mouthLeft = node(), mouthRight = node();
  for (const [pivot, side] of [[mouthLeft, -1], [mouthRight, 1]]) {
    const bar = segment(Shape.mouthHalfWidth, 0.008, Palette.mouth, false);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(side * (Shape.mouthHalfWidth * 0.5 - 0.004), 0, 0.012);
    pivot.add(bar);
    mouth.add(pivot);
  }
  const mouthCavity = ellipsoid([0.045, 0.004, 0.010], Palette.mouth);
  mouthCavity.position.set(0, 0, 0.004);
  mouth.add(mouthCavity);
  const tongue = ellipsoid([0.026, 0.012, 0.006], Palette.pink);
  mouth.add(tongue);

  // arms
  const heartGeo = new RoundedBoxGeometry(0.07, 0.07, 0.035, 2, 0.006);
  function buildArm(outward) {
    const shoulderBall = ellipsoid([Shape.limbRadius * 1.15, Shape.limbRadius * 1.15, Shape.limbRadius * 1.15], Palette.blue);
    const upper = segment(Shape.upperLength, Shape.limbRadius, Palette.blue);
    const elbowBall = ellipsoid([Shape.limbRadius, Shape.limbRadius, Shape.limbRadius], Palette.blue);
    const forearm = segment(Shape.forearmLength, Shape.limbRadius * 0.92, Palette.blue);
    const hand = node(), thumbUpFrame = node(), heart = node();
    [shoulderBall, upper, elbowBall, forearm, hand, heart].forEach((p) => chest.add(p));
    const palm = ellipsoid([Shape.palmRadius, Shape.palmRadius, Shape.palmRadius * 0.85], Palette.cream, true);
    palm.position.set(0, -Shape.palmRadius * 0.6, 0);
    hand.add(palm);
    const inward = -outward;
    const open = node();
    const pad = ellipsoid([0.05, 0.035, 0.04], Palette.cream, true);
    pad.position.set(0, -Shape.palmRadius * 1.25, 0);
    const nub = ellipsoid([0.024, 0.03, 0.024], Palette.cream, true);
    nub.position.set(inward * 0.055, -0.025, 0.02);
    open.add(pad); open.add(nub);
    const point = node();
    const finger = segment(0.08, 0.014, Palette.cream);
    finger.position.set(0, -Shape.palmRadius - 0.045, 0);
    point.add(finger);
    const peace = node();
    for (const spread of [-1, 1]) {
      const f = segment(0.08, 0.014, Palette.cream);
      f.position.set(spread * 0.022, -Shape.palmRadius - 0.042, 0);
      f.rotation.z = -spread * 0.22;
      peace.add(f);
    }
    const thumbsUp = node();
    const thumb = segment(0.07, 0.016, Palette.cream);
    thumb.position.set(0, 0.06, 0.01);
    thumbUpFrame.add(thumb);
    thumbsUp.add(thumbUpFrame);
    const shapes = { open, fist: node(), point, peace, thumbsUp, heart: node() };
    const weights = {};
    for (const k in shapes) {
      hand.add(shapes[k]);
      weights[k] = k === 'open' ? 1 : 0;
      shapes[k].scale.setScalar(weights[k]);
      shapes[k].visible = weights[k] > 0.01;
    }
    const side = 0.07;
    const diamond = new Mesh(heartGeo, matte(Palette.heart, 0.5));
    diamond.rotation.z = Math.PI / 4;
    heart.add(diamond);
    const off = side / (2 * Math.SQRT2);
    for (const lobe of [-1, 1]) {
      const c = ellipsoid([side / 2, side / 2, 0.02], Palette.heart, false, 0.5);
      c.position.set(lobe * off, off, 0);
      heart.add(c);
    }
    heart.scale.setScalar(0); heart.visible = false;
    return { outward, shoulderBall, upper, elbowBall, forearm, hand, thumbUpFrame, heart, shapes, weights,
             elbowDepth: new Spring(0.02, 420, 41), handDepth: new Spring(0.02, 420, 41),
             tx: new Spring(Math.sin(Shape.restArmAngle), 150, 21), ty: new Spring(Math.cos(Shape.restArmAngle), 150, 21) };
  }
  const arms = { left: buildArm(-1), right: buildArm(1) };

  // ---- depth clearance (PrimitiveChibiBody.clearSegment) ----
  function clearanceAt(p, headR, bodyR, headCenter) {
    let need = 0;
    const occ = [[headCenter, [Shape.headRadius, Shape.headRadius, Shape.headRadius], headR]];
    if (bodyR != null) occ.push([new Vector3(0, Shape.bodyCenterY, 0), Shape.bodyRadii, bodyR]);
    for (const [c, rr, pad] of occ) {
      const a = rr[0] + pad, b = rr[1] + pad, cz = rr[2] + pad;
      const u = ((p[0] - c.x) / a) ** 2 + ((p[1] - c.y) / b) ** 2;
      if (u < 1) need = Math.max(need, c.z + cz * Math.sqrt(1 - u) + Shape.clearance);
    }
    return need;
  }
  const L = Shape.limbRadius;
  const upperSamples = [[0.25, L, null], [0.5, L, null], [0.75, L, 0], [1, L, L]];
  const foreSamples = [];
  for (let t = 0; t <= 0.875 + 1e-6; t += 0.125) foreSamples.push([t, L, L]);
  foreSamples.push([1, Shape.palmRadius, Shape.palmRadius]);
  function clearSegment(a, b, za, zb, samples, pinned, headCenter) {
    for (let it = 0; it < 2; it++) {
      for (const [t, hr, br] of samples) {
        const p = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
        const need = clearanceAt(p, hr, br, headCenter);
        const z = za + (zb - za) * t;
        if (z >= need) continue;
        if (pinned || t >= 0.5) zb = Math.max(zb, (need - (1 - t) * za) / Math.max(t, 0.05));
        else za = Math.max(za, (need - t * zb) / (1 - t));
      }
    }
    return [za, zb];
  }
  function placeSeg(m, a, b, length) {
    const d = b.clone().sub(a), span = d.length();
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.copy(rotation(Y, span > 1e-4 ? d.divideScalar(span) : Y.clone()));
    m.scale.set(1, Math.max(span / length, 0.01), 1);
  }
  function applyArm(rig, target, shape, lift, headCenter, dt) {
    const o = rig.outward;
    const shoulder = new Vector3(o * Shape.shoulderX, Shape.shoulderY + lift, 0.02);
    // Wrist target in arm lengths from the shoulder ([outward, down]); 2-bone IK, elbow outward and low.
    rig.tx.t = target[0]; rig.ty.t = target[1];
    if (dt > 0) { rig.tx.step(dt); rig.ty.step(dt); } else { rig.tx.reset(target[0]); rig.ty.reset(target[1]); }
    const lu = Shape.upperLength, lf = Shape.forearmLength, total = lu + lf;
    let hx = shoulder.x + o * rig.tx.x * total, hy = shoulder.y - rig.ty.x * total;
    let dx = hx - shoulder.x, dy = hy - shoulder.y, d = Math.hypot(dx, dy);
    const maxD = total - 1e-4, minD = Math.abs(lu - lf) + 0.01;
    if (d > maxD) { hx = shoulder.x + dx / d * maxD; hy = shoulder.y + dy / d * maxD; d = maxD; }
    if (d < minD) d = minD;
    const base = Math.atan2(hy - shoulder.y, hx - shoulder.x);
    const alpha = Math.acos(clamp((lu * lu + d * d - lf * lf) / (2 * lu * d), -1, 1));
    let best = null;
    for (const s of [1, -1]) {
      const u = base + s * alpha, ex = shoulder.x + Math.cos(u) * lu, ey = shoulder.y + Math.sin(u) * lu;
      const score = ex * o - ey * 0.9;
      if (!best || score > best.score) best = { score, ex, ey };
    }
    const elbow2 = [best.ex, best.ey], hand2 = [hx, hy], sh2 = [shoulder.x, shoulder.y];
    const up = clearSegment(sh2, elbow2, shoulder.z, shoulder.z, upperSamples, true, headCenter);
    const fo = clearSegment(elbow2, hand2, up[1], up[1], foreSamples, false, headCenter);
    rig.elbowDepth.t = fo[0]; rig.handDepth.t = fo[1];
    if (dt > 0) { rig.elbowDepth.step(dt); rig.handDepth.step(dt); } else { rig.elbowDepth.reset(fo[0]); rig.handDepth.reset(fo[1]); }
    const elbow = new Vector3(elbow2[0], elbow2[1], rig.elbowDepth.x);
    const hand = new Vector3(hand2[0], hand2[1], rig.handDepth.x);
    rig.shoulderBall.position.copy(shoulder);
    placeSeg(rig.upper, shoulder, elbow, lu);
    rig.elbowBall.position.copy(elbow);
    placeSeg(rig.forearm, elbow, hand, lf);
    const along = hand.clone().sub(elbow);
    const handQ = rotation(NEG_Y, along.length() > 1e-4 ? along.normalize() : NEG_Y.clone());
    rig.hand.position.copy(hand);
    rig.hand.quaternion.copy(handQ);
    rig.thumbUpFrame.quaternion.copy(handQ.clone().invert());
    const rate = dt > 0 ? Math.min(1, dt / Shape.handShapeFade) : 1;
    for (const k in rig.shapes) {
      const w = rig.weights[k] + ((k === shape ? 1 : 0) - rig.weights[k]) * rate;
      rig.weights[k] = w;
      rig.shapes[k].scale.setScalar(Math.max(w, 1e-4));
      rig.shapes[k].visible = w > 0.01;
    }
    const hw = rig.weights.heart;
    rig.heart.position.copy(hand).add(new Vector3(0, 0.15, 0.06));
    rig.heart.scale.setScalar(Math.max(hw, 1e-4));
    rig.heart.visible = hw > 0.01;
  }

  // ---- lights and camera (RealityAvatarRenderer) ----
  const key = new DirectionalLight(0xffffff, 2.6); key.position.set(-2, 3, 5);
  const fill = new DirectionalLight(rgb(1.0, 0.95, 0.92), 1.1); fill.position.set(3, 1, 4);
  const rim = new DirectionalLight(rgb(0.90, 0.95, 1.0), 0.8); rim.position.set(0, 3, -4);
  // RealityKit also lights with its default environment; a soft sky/ground stands in for it.
  const sky = new HemisphereLight(rgb(1, 0.98, 0.96), rgb(0.62, 0.6, 0.66), 1.45);
  scene.add(key, fill, rim, sky);
  const yc = (view.yTop + view.yBot) / 2, halfH = (view.yTop - view.yBot) / 2, dist = 5.4;
  const camera = new PerspectiveCamera(2 * Math.atan(halfH / dist) * 180 / Math.PI, 1, 0.1, 50);
  camera.position.set(0, yc + 0.06, dist);
  camera.lookAt(0, yc, 0);

  function apply(p, dt) {
    const restSin = Math.sin(Shape.restArmAngle), restCos = Math.cos(Shape.restArmAngle);
    root.position.set(p.hipShift || 0, (p.rise || 0) * Shape.bodyRiseFollow + (p.bounce || 0) * Shape.bounceHeight, 0);
    const chestQ = new Quaternion().setFromEuler(new Euler(0, p.chestYaw || 0, 0))
      .multiply(new Quaternion().setFromEuler(new Euler(0, 0, p.chestRoll || 0)));
    chest.quaternion.copy(chestQ);
    const breathScale = 1 + (p.breath || 0) * Shape.breathAmount;
    belly.scale.set(1, breathScale, 1);
    const lift = (breathScale - 1) * Shape.neckY;
    const headWorld = new Quaternion().setFromAxisAngle(Y, p.headYaw || 0)
      .multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -(p.headPitch || 0)))
      .multiply(new Quaternion().setFromAxisAngle(Z, -(p.headRoll || 0)));
    const headLocal = chestQ.clone().invert().multiply(headWorld);
    headPivot.quaternion.copy(headLocal);
    const cosRoll = Math.max(Math.cos(p.chestRoll || 0), 0.5);
    const neckX = ((p.lean || 0) - (p.hipShift || 0) + Shape.neckY * Math.sin(p.chestRoll || 0)) / cosRoll;
    neck.position.set(neckX, Shape.neckY + lift + (p.rise || 0) * (1 - Shape.bodyRiseFollow), 0);

    // sprout lags the head
    const headWorldZ = -(p.headRoll || 0);
    const leanVel = dt > 0 ? clamp(((p.lean || 0) - lastLean) / dt, -1.5, 1.5) : 0;
    lastLean = p.lean || 0;
    sproutSpring.t = headWorldZ + leanVel * 0.25;
    if (dt > 0) sproutSpring.step(dt); else sproutSpring.reset(headWorldZ);
    sprout.rotation.z = clamp(sproutSpring.x - headWorldZ, -0.6, 0.6);

    // face
    const gx = (p.gazeX || 0) * Shape.gazeTravelX, gy = (p.gazeY || 0) * Shape.gazeTravelY;
    eyes.forEach((e, i) => {
      const blink = clamp(i === 0 ? p.blinkL || 0 : p.blinkR || 0, 0, 1);
      place(e.pivot, e.x + gx, Shape.eyeY + gy, 0);
      const open = 1 - blink * (1 - Shape.shutEyeScale);
      e.ball.scale.set(Shape.eyeRadii[0] * (1 + blink * 0.12), Shape.eyeRadii[1] * open, Shape.eyeRadii[2]);
      e.highlights.visible = blink < 0.45;
    });
    brows.forEach((b, i) => {
      const v = i === 0 ? p.browL || 0 : p.browR || 0;
      b.holder.position.set(0, v * Shape.browTravel, 0.006);
      b.holder.rotation.z = -b.side * v * Shape.browTilt;
    });
    const smile = clamp(p.smile || 0, -1, 1), happy = Math.max(0, smile), open = clamp(p.open || 0, 0, 1);
    cheeks.forEach((c) => c.scale.set(0.065 * (1 + happy * 0.3), 0.040 * (1 + happy * 0.3), 0.012 * (1 + happy * 0.3)));
    const flatten = 1 - Shape.openSmileFlatten * smoothstep(open / 0.4);
    const tilt = smile * Shape.smileTilt * flatten;
    mouthLeft.rotation.z = -tilt; mouthRight.rotation.z = tilt;
    const halfHeight = 0.004 + Shape.mouthDrop * open;
    mouthCavity.scale.set(0.045 + 0.015 * open + Shape.smileWiden * happy, halfHeight, 0.010);
    mouthCavity.position.set(0, 0.004 - halfHeight, 0.004);
    mouthCavity.visible = open > 0.03;
    tongue.position.set(0, 0.004 - halfHeight * 1.45, 0.009);
    const ts = Math.max(1e-4, Math.min(1, open * 1.6));
    tongue.scale.set(0.026 * ts, 0.012 * ts, 0.006 * ts);
    tongue.visible = open > 0.25;

    const headCenter = neck.position.clone().add(new Vector3(0, Shape.headCenterY, 0).applyQuaternion(headLocal));
    applyArm(arms.left, p.L || [restSin, restCos], p.Lshape || 'open', lift, headCenter, dt);
    applyArm(arms.right, p.R || [restSin, restCos], p.Rshape || 'open', lift, headCenter, dt);
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
      sphere.dispose(); heartGeo.dispose();
      capsules.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose()); outlineMat.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    }
  };
}
