// Taro — a round, chubby peach-and-pink tabby built from primitives. A line-for-line mirror
// of AvatarTracker/Avatar/PrimitiveCatBody.swift: same units (hips at the
// origin, +x screen right, +y up, +z toward the camera), same hierarchy, same
// Shape constants. Change one, change both.
//
// v3: no outline (soft shading and a contact shadow instead), the neck PINNED
// to the body, one-piece stub arms, and a cartoon face that exaggerates:
// happy eyes, big ears, squash and stretch.

export const Shape = {
  // Torso: a big soft ball, as wide as the head, that the head sinks into.
  bodyCenterY: 0.38,
  bodyRadii: [0.55, 0.44, 0.45],
  neckY: 0.58,

  // Head, relative to the neck pivot. Wider than tall: a cat's face.
  headCenterY: 0.40,
  headRadii: [0.56, 0.46, 0.48],
  /// The head turns MORE than the person: it is a cartoon.
  headGain: 1.25,
  maxHeadAngle: 0.75,

  // Ears: rounded cones on the crown, leaning outward. They are the brows.
  earBase: [0.32, 0.31, 0.03],
  earRadius: 0.15,
  earHeight: 0.25,
  earDepth: 0.55,
  earLean: 0.36,
  innerEarRadius: 0.092,
  innerEarHeight: 0.17,
  innerEarDepth: 0.22,
  innerEarLift: [0.0, 0.025, 0.066],
  innerEarTilt: -0.30,
  earPerk: 0.30,
  earFlatten: 0.85,
  earFlattenBack: 0.45,

  eyeX: 0.185,
  eyeY: -0.005,
  eyeRadii: [0.066, 0.080, 0.03],
  gazeTravelX: 0.035,
  gazeTravelY: 0.030,
  shutEyeScale: 0.10,
  /// Raised brows widen the eyes, lowered ones narrow and slant them.
  eyeSurprise: 0.28,
  eyeAngerSquint: 0.35,
  eyeAngerSlant: 0.55,
  /// Happy eyes: a smile turns each eye into a ∩ arc. The smile at which the
  /// swap starts and is complete.
  happyEyeFrom: 0.35,
  happyEyeTo: 0.70,
  happyEyeRadius: 0.052,
  happyEyeTube: 0.012,
  happyEyeSweep: 2.5,

  cheekX: 0.31,
  cheekY: -0.10,
  cheekGrow: 0.7,

  // Muzzle: two white puffs under a pink nose; the mouth is an ω along them.
  puffX: 0.062,
  puffY: -0.165,
  puffRadii: [0.082, 0.064, 0.045],
  noseY: -0.112,
  noseRadii: [0.034, 0.022, 0.02],
  noseLift: 0.032,
  mouthY: -0.152,
  mouthLift: 0.046,
  mouthArcRadius: 0.028,
  mouthTube: 0.0085,
  mouthArcSweep: 2.6,
  smileTilt: 0.55,
  mouthDrop: 0.085,
  mouthWiden: 0.030,
  openSmileFlatten: 0.6,
  smileWiden: 0.014,

  whiskerX: 0.13,
  whiskerY: -0.16,
  whiskerLength: 0.20,
  whiskerFan: 0.17,

  // Arms: ONE piece each — a ball inside the shoulder, a tube, a round end.
  // The arm points where the two-bone solve put the hand, so tracking and
  // presets drive it unchanged; there is simply no elbow to see.
  shoulderX: 0.34,
  shoulderY: 0.50,
  shoulderZ: 0.30,
  upperLength: 0.11,
  forearmLength: 0.11,
  limbRadius: 0.078,
  pawRadius: 0.088,
  restArmAngle: 0.35,
  clearance: 0.012,

  // Tail: a sphere-and-tube chain curling up the screen-right side.
  tailBase: [0.40, 0.10, -0.10],
  tailSegments: 6,
  tailSegmentLength: 0.080,
  tailRadius: 0.064,
  tailHeading: -0.05,
  tailCurl: 0.24,
  tailCurlGrowth: 2.0,
  tailWag: 0.14,
  tailWagRate: 1.6,

  // Squash and stretch, about the hips. Volume is kept: what the body gains
  // in height it gives up across.
  breathAmount: 0.02,
  hopStretch: 0.07,
  surpriseStretch: 0.05,
  bounceHeight: 0.09,
  heartFade: 0.06,
};

export const Palette = {
  fur: [1.0, 0.70, 0.56],       // peach
  furDark: [0.93, 0.46, 0.40],  // coral tabby stripes
  white: [1.0, 0.98, 0.96],
  cream: [1.0, 0.95, 0.91],
  pink: [1.0, 0.54, 0.66],
  nose: [0.95, 0.47, 0.58],
  ink: [0.24, 0.15, 0.16],
  mouth: [0.50, 0.17, 0.22],
  whisker: [0.66, 0.44, 0.42],
  heart: [1.0, 0.42, 0.55],
  shadow: [0.36, 0.18, 0.16],
  shine: [1, 1, 1],
};

/// Soft and a touch satiny, so the light shapes a round body with no outline.
const FUR_ROUGHNESS = 0.62;

export function createTaro(THREE) {
  // Palette values are sRGB, as UIColor's are; tell three.js so, or it reads
  // them as linear and every colour comes out washed pale.
  const color = (c) => new THREE.Color().setRGB(c[0], c[1], c[2], THREE.SRGBColorSpace);
  const mats = new Map();
  function matte(c, roughness = FUR_ROUGHNESS) {
    const key = c.join(",") + roughness;
    if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color: color(c), roughness, metalness: 0 }));
    return mats.get(key);
  }
  const unitSphere = new THREE.SphereGeometry(1, 48, 32);
  const unitTube = new THREE.CylinderGeometry(1, 1, 1, 32, 1, true);
  const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const qAxis = (angle, axis) => new THREE.Quaternion().setFromAxisAngle(v3(axis).normalize(), angle);

  function ellipsoid(radii, c, roughness = FUR_ROUGHNESS) {
    const m = new THREE.Mesh(unitSphere, matte(c, roughness));
    m.scale.set(radii[0], radii[1], radii[2]);
    return m;
  }
  function segment(length, radius, c) {
    const g = new THREE.CapsuleGeometry(radius, Math.max(0.0001, length - 2 * radius), 8, 20);
    return new THREE.Mesh(g, matte(c));
  }
  function tube(c) { return new THREE.Mesh(unitTube, matte(c)); }

  function earGeometry(radius, height, depth) {
    const rings = 10, seg = 32;
    const pos = [], idx = [];
    for (let i = 0; i <= rings; i++) {
      const t = i / rings;
      const r = radius * Math.pow(1 - t, 0.85) * (1 - 0.15 * t * t);
      for (let j = 0; j < seg; j++) {
        const a = (j / seg) * Math.PI * 2;
        pos.push(Math.cos(a) * r, height * t, Math.sin(a) * r * depth);
      }
    }
    const tip = pos.length / 3; pos.push(0, height, 0);
    const base = pos.length / 3; pos.push(0, 0, 0);
    for (let i = 0; i < rings; i++)
      for (let j = 0; j < seg; j++) {
        const a = i * seg + j, b = i * seg + (j + 1) % seg, c = a + seg, d = b + seg;
        idx.push(a, c, b, b, c, d);
      }
    for (let j = 0; j < seg; j++) {
      idx.push(rings * seg + j, tip, rings * seg + (j + 1) % seg);
      idx.push(base, j, (j + 1) % seg);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }
  // The bottom `sweep` radians of a circle, as a tube; both ends point up.
  function arcGeometry(radius, tubeR, sweep) {
    const steps = 24, ring = 10;
    const pos = [], idx = [];
    const start = -Math.PI / 2 - sweep / 2;
    for (let i = 0; i <= steps; i++) {
      const a = start + sweep * i / steps;
      for (let j = 0; j < ring; j++) {
        const b = j / ring * Math.PI * 2;
        const rr = radius + Math.cos(b) * tubeR;
        pos.push(Math.cos(a) * rr, Math.sin(a) * rr, Math.sin(b) * tubeR);
      }
    }
    for (let i = 0; i < steps; i++)
      for (let j = 0; j < ring; j++) {
        const a = i * ring + j, b = i * ring + (j + 1) % ring, c = a + ring, d = b + ring;
        idx.push(a, c, b, b, c, d);
      }
    for (const [i, sgn] of [[0, -1], [steps, 1]]) {
      const a = start + sweep * i / steps;
      const centre = pos.length / 3;
      const t = [-Math.sin(a) * sgn, Math.cos(a) * sgn];
      pos.push(Math.cos(a) * radius + t[0] * tubeR * 0.6, Math.sin(a) * radius + t[1] * tubeR * 0.6, 0);
      for (let j = 0; j < ring; j++) {
        const p = i * ring + j, q = i * ring + (j + 1) % ring;
        if (sgn > 0) idx.push(q, p, centre); else idx.push(p, q, centre);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  const S = Shape;
  const root = new THREE.Object3D();
  const chest = new THREE.Object3D();
  const belly = new THREE.Object3D();
  const neck = new THREE.Object3D();
  const headPivot = new THREE.Object3D();
  root.add(chest); chest.add(belly); chest.add(neck); neck.add(headPivot);
  neck.position.set(0, S.neckY, 0);

  function facePlacement(x, y, lift = 0.004) {
    const [a, b, c] = S.headRadii;
    const u = Math.max(0.0001, 1 - (x / a) ** 2 - (y / b) ** 2);
    const z = c * Math.sqrt(u);
    const n = new THREE.Vector3(x / (a * a), y / (b * b), z / (c * c)).normalize();
    const p = new THREE.Vector3(x, S.headCenterY + y, z).addScaledVector(n, lift);
    return { p, q: new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), n) };
  }
  function place(e, x, y, lift = 0.004) {
    const { p, q } = facePlacement(x, y, lift);
    e.position.copy(p); e.quaternion.copy(q);
  }

  // ---- floor shadow: stays on the floor and shrinks on a hop
  const shadowMat = new THREE.MeshBasicMaterial({ color: color(Palette.shadow), transparent: true, opacity: 0.16, depthWrite: false });
  const shadow = new THREE.Mesh(unitSphere, shadowMat);
  shadow.scale.set(0.62, 0.004, 0.46);
  root.add(shadow);

  // ---- body
  for (const side of [-1, 1]) {
    const foot = ellipsoid([0.10, 0.06, 0.10], Palette.fur);
    foot.position.set(side * 0.21, 0.035, 0.27);
    root.add(foot);
  }
  const torso = ellipsoid(S.bodyRadii, Palette.fur);
  torso.position.set(0, S.bodyCenterY, 0);
  belly.add(torso);
  const patch = ellipsoid([0.27, 0.22, 0.07], Palette.cream);
  patch.position.set(0, 0.28, S.bodyRadii[2] - 0.045);
  belly.add(patch);

  // ---- tail
  const tail = new THREE.Object3D();
  tail.position.set(...S.tailBase);
  chest.add(tail);
  const tailTubes = [], tailJoints = [];
  for (let i = 0; i <= S.tailSegments; i++) {
    const joint = ellipsoid(Array(3).fill(S.tailRadius), Palette.fur);
    tail.add(joint); tailJoints.push(joint);
    if (i < S.tailSegments) { const t = tube(Palette.fur); tail.add(t); tailTubes.push(t); }
  }

  // ---- head
  const skull = ellipsoid(S.headRadii, Palette.fur);
  skull.position.set(0, S.headCenterY, 0);
  headPivot.add(skull);

  const ears = [];
  const earG = earGeometry(S.earRadius, S.earHeight, S.earDepth);
  const innerG = earGeometry(S.innerEarRadius, S.innerEarHeight, S.innerEarDepth);
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    pivot.position.set(side * S.earBase[0], S.headCenterY + S.earBase[1], S.earBase[2]);
    headPivot.add(pivot);
    pivot.add(new THREE.Mesh(earG, matte(Palette.fur)));
    const inner = new THREE.Mesh(innerG, matte(Palette.pink));
    inner.position.set(...S.innerEarLift);
    inner.quaternion.copy(qAxis(S.innerEarTilt, [1, 0, 0]));
    pivot.add(inner);
    ears.push({ pivot, side });
  }

  for (const [x, y, len, tilt] of [[-0.085, 0.265, 0.075, -0.22], [0, 0.285, 0.105, 0], [0.085, 0.265, 0.075, 0.22]]) {
    const holder = new THREE.Object3D();
    place(holder, x, y, -0.004);
    const bar = segment(len, 0.019, Palette.furDark);
    bar.scale.set(1, 1, 0.45);
    bar.quaternion.copy(qAxis(tilt, [0, 0, 1]));
    holder.add(bar);
    headPivot.add(holder);
  }

  // ---- face
  const eyes = [], cheeks = [], whiskerFans = [];
  const happyG = arcGeometry(S.happyEyeRadius, S.happyEyeTube, S.happyEyeSweep);
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    const shape = new THREE.Object3D();        // takes the anger slant
    pivot.add(shape);
    const ball = ellipsoid(S.eyeRadii, Palette.ink, 0.35);
    shape.add(ball);
    const highlights = new THREE.Object3D();
    const big = ellipsoid([0.021, 0.021, 0.006], Palette.shine, 0.3);
    big.position.set(0.019, 0.032, S.eyeRadii[2] * 0.9);
    const small = ellipsoid([0.010, 0.010, 0.004], Palette.shine, 0.3);
    small.position.set(-0.018, -0.032, S.eyeRadii[2] * 0.85);
    highlights.add(big, small);
    shape.add(highlights);
    // ∩: the U turned over, lifted so its top sits where the eye's top was.
    const happy = new THREE.Mesh(happyG, matte(Palette.ink, 0.35));
    happy.quaternion.copy(qAxis(Math.PI, [0, 0, 1]));
    happy.position.set(0, -S.happyEyeRadius * 0.55, 0.012);
    shape.add(happy);
    headPivot.add(pivot);
    eyes.push({ pivot, shape, ball, highlights, happy, side, x: side * S.eyeX });

    const cheek = ellipsoid([0.068, 0.040, 0.012], Palette.pink);
    place(cheek, side * S.cheekX, S.cheekY, 0);
    headPivot.add(cheek);
    cheeks.push(cheek);

    const puff = ellipsoid(S.puffRadii, Palette.white);
    place(puff, side * S.puffX, S.puffY, 0);
    headPivot.add(puff);

    const fan = new THREE.Object3D();
    place(fan, side * S.whiskerX, S.whiskerY, 0.022);
    headPivot.add(fan);
    const holder = new THREE.Object3D();
    fan.add(holder);
    for (const k of [-1, 0, 1]) {
      const w = new THREE.Object3D();
      const strand = segment(S.whiskerLength, 0.0042, Palette.whisker);
      strand.quaternion.copy(qAxis(Math.PI / 2, [0, 0, 1]));
      strand.position.set(side * S.whiskerLength / 2, 0, 0);
      w.add(strand);
      w.position.set(0, k * 0.014, 0);
      w.quaternion.copy(qAxis(side * k * S.whiskerFan, [0, 0, 1]));
      holder.add(w);
    }
    whiskerFans.push({ holder, side });
  }

  const nose = ellipsoid(S.noseRadii, Palette.nose, 0.5);
  place(nose, 0, S.noseY, S.noseLift);
  headPivot.add(nose);

  const mouth = new THREE.Object3D();
  place(mouth, 0, S.mouthY, S.mouthLift);
  headPivot.add(mouth);
  const philtrum = segment(0.032, 0.0075, Palette.mouth);
  philtrum.position.set(0, 0.014, 0.002);
  mouth.add(philtrum);
  const mouthHalves = [];
  const arcG = arcGeometry(S.mouthArcRadius, S.mouthTube, S.mouthArcSweep);
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    const arc = new THREE.Mesh(arcG, matte(Palette.mouth));
    arc.position.set(side * S.mouthArcRadius, 0, 0);
    pivot.add(arc);
    mouth.add(pivot);
    mouthHalves.push({ pivot, side });
  }
  const cavity = ellipsoid([0.04, 0.004, 0.010], Palette.mouth);
  mouth.add(cavity);
  const tongue = ellipsoid([0.024, 0.012, 0.006], Palette.pink);
  mouth.add(tongue);

  // ---- arms
  function buildArm(outward) {
    const shoulderBall = ellipsoid(Array(3).fill(S.limbRadius), Palette.fur);
    const stub = tube(Palette.fur);
    const paw = ellipsoid(Array(3).fill(S.pawRadius), Palette.fur);
    const heart = new THREE.Object3D();
    for (const p of [shoulderBall, stub, paw, heart]) chest.add(p);
    const side = 0.07;
    const diamond = new THREE.Mesh(new THREE.BoxGeometry(side, side, 0.035), matte(Palette.heart, 0.5));
    diamond.quaternion.copy(qAxis(Math.PI / 4, [0, 0, 1]));
    heart.add(diamond);
    const off = side / (2 * Math.SQRT2);
    for (const lobe of [-1, 1]) {
      const c = ellipsoid([side / 2, side / 2, 0.02], Palette.heart, 0.5);
      c.position.set(lobe * off, off, 0);
      heart.add(c);
    }
    heart.scale.setScalar(0); heart.visible = false;
    return { outward, shoulderBall, stub, paw, heart, heartWeight: 0, pawDepth: { v: 0, vel: 0 } };
  }
  const leftArm = buildArm(-1), rightArm = buildArm(1);

  // ---- pose
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
  const smoothstep = (v) => { const t = clamp(v, 0, 1); return t * t * (3 - 2 * t); };
  function stepSpring(s, target, dt, k, d) {
    if (dt <= 0) { s.v = target; s.vel = 0; return; }
    const st = Math.min(Math.max(dt, 1 / 240), 1 / 30);
    s.vel += ((target - s.v) * k - s.vel * d) * st; s.v += s.vel * st;
  }

  function clearancePoint(p, pad, withBody, hc) {
    let need = 0;
    const occ = [[hc, S.headRadii]];
    if (withBody) occ.push([[0, S.bodyCenterY, 0], S.bodyRadii]);
    for (const [c, r] of occ) {
      const a = r[0] + pad, b = r[1] + pad, cc = r[2] + pad;
      const u = ((p[0] - c[0]) / a) ** 2 + ((p[1] - c[1]) / b) ** 2;
      if (u < 1) need = Math.max(need, c[2] + cc * Math.sqrt(1 - u) + S.clearance);
    }
    return need;
  }
  // The stub starts inside the body, so the body only counts from halfway.
  const armSamples = [[0.25, S.limbRadius, false], [0.5, S.limbRadius, false], [0.625, S.limbRadius, true],
    [0.75, S.limbRadius, true], [0.875, S.limbRadius, true], [1, S.pawRadius, true]];
  function placeTube(e, a, b, radius) {
    const d = new THREE.Vector3().subVectors(b, a);
    const span = d.length();
    e.position.copy(a).add(b).multiplyScalar(0.5);
    e.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), span > 1e-4 ? d.clone().divideScalar(span) : new THREE.Vector3(0, 1, 0));
    e.scale.set(radius, Math.max(span, 0.0001), radius);
  }
  function applyArm(arm, rig, shoulderLift, squeeze, hc, dt) {
    const o = rig.outward;
    const shoulder = new THREE.Vector3(o * S.shoulderX * squeeze, S.shoulderY + shoulderLift, S.shoulderZ);
    // Where the two-bone solve put the hand, as a direction: the stub points
    // there at its full length.
    const reach = clamp(arm.reach ?? 1, 0.5, 1);
    const a1 = arm.upper, a2 = arm.upper + arm.forearm;
    const ex = o * Math.sin(a1) * S.upperLength, ey = -Math.cos(a1) * S.upperLength;
    const hx = ex + o * Math.sin(a2) * S.forearmLength, hy = ey - Math.cos(a2) * S.forearmLength;
    const len = Math.hypot(hx, hy);
    const L = S.upperLength + S.forearmLength;
    const dir = len > 1e-4 ? [hx / len, hy / len] : [o * Math.sin(S.restArmAngle), -Math.cos(S.restArmAngle)];
    const across = L * reach;
    const end2 = [shoulder.x + dir[0] * across, shoulder.y + dir[1] * across];
    let z = shoulder.z + L * Math.sqrt(Math.max(0, 1 - reach * reach));
    // Forward of whatever the stub would pass through; the shoulder is pinned.
    for (let k = 0; k < 2; k++)
      for (const [t, pad, withBody] of armSamples) {
        const p = [shoulder.x + (end2[0] - shoulder.x) * t, shoulder.y + (end2[1] - shoulder.y) * t];
        const need = clearancePoint(p, pad, withBody, hc);
        const zt = shoulder.z + (z - shoulder.z) * t;
        if (zt < need) z = Math.max(z, (need - (1 - t) * shoulder.z) / Math.max(t, 0.05));
      }
    stepSpring(rig.pawDepth, z, dt, 420, 41);
    const end = new THREE.Vector3(end2[0], end2[1], rig.pawDepth.v);
    rig.shoulderBall.position.copy(shoulder);
    placeTube(rig.stub, shoulder, end, S.limbRadius);
    rig.paw.position.copy(end);
    const rate = dt > 0 ? Math.min(1, dt / S.heartFade) : 1;
    rig.heartWeight += ((arm.handShape === "heart" ? 1 : 0) - rig.heartWeight) * rate;
    rig.heart.position.copy(end).add(new THREE.Vector3(0, 0.18, 0.10));
    rig.heart.scale.setScalar(rig.heartWeight);
    rig.heart.visible = rig.heartWeight > 0.01;
  }

  function earTwitch(time, side) {
    const period = side > 0 ? 6.3 : 8.9;
    const phase = (time + (side > 0 ? 1.7 : 4.1)) % period;
    if (phase > 0.45) return 0;
    return Math.sin(phase / 0.45 * Math.PI * 3) * Math.exp(-phase * 6) * 0.22;
  }

  let tailSway = { v: 0, vel: 0 };
  let lastLean = 0;

  function apply(pose, dt) {
    const perk = Math.max(0, (pose.browLeft + pose.browRight) / 2);
    // Squash and stretch about the hips, keeping volume.
    const stretch = 1 + pose.breath * S.breathAmount + pose.bounce * S.hopStretch + perk * S.surpriseStretch;
    const squeeze = 1 / Math.sqrt(stretch);
    const hop = pose.bounce * S.bounceHeight;
    root.position.set(pose.hipShift, pose.rise + hop, 0);
    root.scale.setScalar(pose.depthScale);
    shadow.position.set(0, 0.002 - (pose.rise + hop), 0.02);
    const shrink = 1 - clamp(hop / 0.2, 0, 0.4);
    shadow.scale.set(0.62 * shrink, 0.004, 0.46 * shrink);

    // The body leans as one piece: it only rolls.
    const chestQ = qAxis(pose.chestRoll, [0, 0, 1]);
    chest.quaternion.copy(chestQ);
    belly.scale.set(squeeze, stretch, squeeze);
    const lift = (stretch - 1) * S.neckY;

    // THE NECK IS PINNED to the top of the body. The head only turns on it.
    neck.position.set(0, S.neckY + lift, 0);
    const g = S.headGain, m = S.maxHeadAngle;
    const yaw = clamp(pose.headYaw * g, -m, m), pitch = clamp(pose.headPitch * g, -m, m), roll = clamp(pose.headRoll * g, -m, m);
    const headWorld = qAxis(yaw, [0, 1, 0]).multiply(qAxis(-pitch, [1, 0, 0])).multiply(qAxis(-roll, [0, 0, 1]));
    const headLocal = chestQ.clone().invert().multiply(headWorld);
    headPivot.quaternion.copy(headLocal);

    applyEars(pose);
    applyTail(pose, dt);
    applyFace(pose);

    const hc = neck.position.clone().add(new THREE.Vector3(0, S.headCenterY, 0).applyQuaternion(headLocal));
    const shoulderLift = (stretch - 1) * S.shoulderY;
    applyArm(pose.screenLeftArm, leftArm, shoulderLift, squeeze, [hc.x, hc.y, hc.z], dt);
    applyArm(pose.screenRightArm, rightArm, shoulderLift, squeeze, [hc.x, hc.y, hc.z], dt);
  }

  function applyEars(pose) {
    for (const [i, ear] of ears.entries()) {
      const brow = i === 0 ? pose.browLeft : pose.browRight;
      const perk = Math.max(0, brow), flat = Math.max(0, -brow);
      const lean = S.earLean - perk * S.earPerk + flat * S.earFlatten + earTwitch(pose.time, ear.side);
      const back = -flat * S.earFlattenBack + perk * 0.12;
      ear.pivot.quaternion.copy(qAxis(-ear.side * lean, [0, 0, 1]).multiply(qAxis(back, [1, 0, 0])));
    }
  }

  function applyTail(pose, dt) {
    const leanVelocity = dt > 0 ? clamp((pose.lean - lastLean) / dt, -1.5, 1.5) : 0;
    lastLean = pose.lean;
    stepSpring(tailSway, -leanVelocity * 0.35, dt, 60, 6);
    const happy = Math.max(0, pose.smile);
    const wag = Math.sin(pose.time * S.tailWagRate * (1 + happy)) * S.tailWag * (1 + happy) + tailSway.v;
    const curl = S.tailCurl * (1 + 0.35 * pose.smile);
    let heading = S.tailHeading + wag * 0.4 - Math.max(0, -pose.smile) * 0.25;
    let p = new THREE.Vector3();
    const n = S.tailSegments;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      tailJoints[i].position.copy(p);
      const q = p.clone().add(new THREE.Vector3(Math.cos(heading), Math.sin(heading), 0).multiplyScalar(S.tailSegmentLength));
      placeTube(tailTubes[i], p, q, S.tailRadius);
      p = q;
      heading += curl * (1 + (S.tailCurlGrowth - 1) * t) + wag * t * 0.8;
    }
    tailJoints[n].position.copy(p);
  }

  function applyFace(pose) {
    const gx = pose.gazeX * S.gazeTravelX, gy = pose.gazeY * S.gazeTravelY;
    const happy = Math.max(0, pose.smile);
    const sad = Math.max(0, -pose.smile);
    // ∩ eyes in, open eyes out: the lower drawing stays whole until the upper
    // has arrived, as every cross-fade in this project does.
    const joy = smoothstep((pose.smile - S.happyEyeFrom) / (S.happyEyeTo - S.happyEyeFrom));
    const arcIn = smoothstep(joy / 0.5);
    const ballOut = smoothstep((joy - 0.5) / 0.5);
    for (const [i, eye] of eyes.entries()) {
      const blink = i === 0 ? pose.blinkLeft : pose.blinkRight;
      const brow = i === 0 ? pose.browLeft : pose.browRight;
      const perk = Math.max(0, brow), frown = Math.max(0, -brow);
      place(eye.pivot, eye.x + gx, S.eyeY + gy, 0);
      // Anger slants the eye down toward the nose.
      eye.shape.quaternion.copy(qAxis(eye.side * frown * S.eyeAngerSlant, [0, 0, 1]));
      const size = 1 + perk * S.eyeSurprise;
      const open = (1 - blink * (1 - S.shutEyeScale)) * (1 - frown * S.eyeAngerSquint) * (1 - ballOut * 0.9);
      eye.ball.scale.set(S.eyeRadii[0] * size * (1 + blink * 0.12), S.eyeRadii[1] * size * open, S.eyeRadii[2]);
      eye.ball.visible = ballOut < 0.98;
      eye.highlights.scale.setScalar(size);
      eye.highlights.visible = blink < 0.45 && joy < 0.3 && frown < 0.6;
      eye.happy.scale.setScalar(Math.max(0.0001, arcIn));
      eye.happy.visible = arcIn > 0.01;
    }
    for (const c of cheeks) {
      const k = 1 + happy * S.cheekGrow;
      c.scale.set(0.068 * k, 0.040 * k, 0.012);
    }
    const open = pose.mouthOpen;
    const flatten = 1 - S.openSmileFlatten * smoothstep(open / 0.4);
    const tilt = pose.smile * S.smileTilt * flatten;
    for (const h of mouthHalves) h.pivot.quaternion.copy(qAxis(h.side * tilt, [0, 0, 1]));
    const half = 0.004 + S.mouthDrop * open;
    cavity.scale.set(0.034 + S.mouthWiden * open + S.smileWiden * happy, half, 0.010);
    cavity.position.set(0, -0.010 - half, -0.006);
    cavity.visible = open > 0.03;
    tongue.position.set(0, -0.010 - half * 1.45, -0.001);
    const tk = Math.min(1, open * 1.6);
    tongue.scale.set(0.024 * tk * 1.3, 0.012 * tk * 1.3, 0.006);
    tongue.visible = open > 0.25;
    for (const w of whiskerFans) w.holder.quaternion.copy(qAxis(w.side * (happy * 0.22 - sad * 0.2), [0, 0, 1]));
  }

  return { root, apply, Shape };
}

export function neutralPose() {
  const arm = { upper: Shape.restArmAngle, forearm: 0, reach: 1, handShape: "open" };
  return {
    headYaw: 0, headPitch: 0, headRoll: 0, lean: 0, rise: 0, depthScale: 1,
    hipShift: 0, chestRoll: 0, chestYaw: 0, breath: 0, bounce: 0,
    gazeX: 0, gazeY: 0, blinkLeft: 0, blinkRight: 0, mouthOpen: 0, smile: 0,
    browLeft: 0, browRight: 0,
    screenLeftArm: { ...arm }, screenRightArm: { ...arm }, time: 0, idle: 1,
  };
}
