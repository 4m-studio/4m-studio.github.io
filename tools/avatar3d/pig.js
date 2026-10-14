// Zhuzhu — a round, pale-pink piglet with a bow on one ear, built from
// primitives. A line-for-line mirror of
// AvatarTracker/Avatar/PrimitivePigBody.swift: same units (hips at the origin,
// +x screen right, +y up, +z toward the camera), same hierarchy, same Shape
// constants. Change one, change both.
//
// Taro's rules, a pig's parts: no outline (soft shading and a contact shadow),
// the neck PINNED to the body, one-piece stub arms, ears that are the brows,
// happy ∩ eyes, squash and stretch. What is the pig's own: a snout that sniffs
// and lifts when it talks, nostrils that flare, ears that FLOP forward rather
// than flatten back, a bow that rides the screen-right ear, and a corkscrew
// tail that boings.

export const Shape = {
  // Torso: a soft round ball the big head sinks into.
  bodyCenterY: 0.38,
  bodyRadii: [0.52, 0.43, 0.45],
  neckY: 0.58,

  // Head: bigger and rounder than the body — a piglet is mostly head.
  headCenterY: 0.42,
  headRadii: [0.60, 0.50, 0.50],
  headGain: 1.25,
  maxHeadAngle: 0.75,
  /// Looking DOWN tips less far: past this the chin would sink into the belly.
  maxHeadDown: 0.40,

  // Ears: rounded petals on the crown, leaning out and a little forward.
  // They are the brows: raised perks them up, lowered flops them forward.
  /// The ear's PIVOT, sunk inside the skull along the ear's own resting axis;
  /// the ear is lifted back out by `earRoot`, so it turns about a point deep
  /// in the head and its base never lifts out of the skull when it flops.
  earBase: [0.300, 0.251, -0.001],
  earRoot: 0.10,
  earRadius: 0.20,
  earHeight: 0.26,
  earDepth: 0.36,
  earLean: 0.72,
  earForward: 0.42,
  innerEarRadius: 0.135,
  innerEarHeight: 0.19,
  innerEarDepth: 0.16,
  innerEarLift: [0.0, 0.020, 0.052],
  innerEarTilt: -0.10,
  earPerk: 0.38,
  earFlop: 0.20,
  earFlopForward: 0.50,
  /// How far the ears lag a hop, as a forward flop per unit of vertical speed.
  earBounce: 0.55,
  earBounceLimit: 0.20,

  // The bow, on the screen-right ear, in the ear's own frame.
  bowAt: [-0.06, 0.18, 0.052],
  bowTilt: 0.25,
  bowLoopX: 0.075,
  bowLoopRadii: [0.085, 0.058, 0.034],
  bowLoopAngle: 0.32,
  bowKnotRadius: 0.036,

  eyeX: 0.25,
  eyeY: 0.05,
  eyeRadii: [0.046, 0.056, 0.026],
  gazeTravelX: 0.030,
  gazeTravelY: 0.026,
  shutEyeScale: 0.12,
  eyeSurprise: 0.30,
  eyeAngerSquint: 0.35,
  eyeAngerSlant: 0.55,
  happyEyeFrom: 0.35,
  happyEyeTo: 0.70,
  happyEyeRadius: 0.042,
  happyEyeTube: 0.0115,
  happyEyeSweep: 2.5,

  cheekX: 0.385,
  cheekY: -0.115,
  cheekRadii: [0.080, 0.050, 0.012],
  cheekGrow: 0.6,

  // Snout: a fat oval disc standing proud of the face, two nostrils on its
  // front. It sniffs on its own every few seconds, lifts with a smile and
  // when the mouth opens, and its nostrils flare.
  snoutY: -0.05,
  snoutRadii: [0.150, 0.108, 0.075],
  snoutOut: 0.030,
  nostrilX: 0.052,
  nostrilY: 0.004,
  nostrilRadii: [0.021, 0.033, 0.012],
  snoutSmileLift: 0.012,
  snoutTalkLift: 0.018,
  sniffLift: 0.012,
  nostrilFlare: 0.45,

  // Mouth: a small U under the snout, two halves hinged at the bottom so a
  // smile lifts the outer ends and a frown drops them below the middle.
  mouthY: -0.22,
  mouthLift: 0.004,
  mouthArcRadius: 0.036,
  mouthTube: 0.0095,
  mouthHalfSweep: 1.0,
  mouthRestTilt: 0.12,
  smileTilt: 0.70,
  openSmileFlatten: 0.6,
  mouthDrop: 0.046,
  mouthWiden: 0.020,
  smileWiden: 0.012,
  mouthLineGoneAt: 0.18,

  // Arms: ONE piece each, as Taro's. The arm points where the two-bone solve
  // put the hand; there is simply no elbow to see.
  shoulderX: 0.33,
  shoulderY: 0.50,
  shoulderZ: 0.30,
  upperLength: 0.11,
  forearmLength: 0.11,
  limbRadius: 0.078,
  pawRadius: 0.088,
  restArmAngle: 0.35,
  clearance: 0.012,

  // Tail: a corkscrew out of the screen-right hip, boinging on a spring.
  tailBase: [0.30, 0.26, -0.34],
  tailTurns: 2.0,
  tailLength: 0.22,
  tailCoil: 0.060,
  tailTube: 0.030,
  tailTaper: 0.55,
  tailAim: [0.70, 0.15, -0.80],
  tailWag: 0.16,
  tailWagRate: 1.3,
  tailBoing: 0.9,
  /// The swing never turns the coil back into the body, however the spring rings.
  tailSwingLimit: 0.42,

  breathAmount: 0.02,
  hopStretch: 0.07,
  surpriseStretch: 0.05,
  bounceHeight: 0.09,
  heartFade: 0.06,
};

export const Palette = {
  skin: [0.99, 0.84, 0.81],      // pale piglet pink
  belly: [1.0, 0.89, 0.86],
  innerEar: [0.97, 0.62, 0.62],
  snout: [0.98, 0.67, 0.67],
  nostril: [0.50, 0.22, 0.25],
  blush: [1.0, 0.56, 0.60],
  bow: [0.95, 0.40, 0.44],
  bowKnot: [0.86, 0.30, 0.36],
  ink: [0.22, 0.14, 0.14],
  mouth: [0.50, 0.17, 0.22],
  tongue: [1.0, 0.50, 0.58],
  heart: [1.0, 0.42, 0.55],
  shadow: [0.40, 0.20, 0.20],
  shine: [1, 1, 1],
};

/// Soft and a touch satiny, so the light shapes a round body with no outline.
const SKIN_ROUGHNESS = 0.60;

export function createPig(THREE) {
  const color = (c) => new THREE.Color().setRGB(c[0], c[1], c[2], THREE.SRGBColorSpace);
  const mats = new Map();
  function matte(c, roughness = SKIN_ROUGHNESS) {
    const key = c.join(",") + roughness;
    if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color: color(c), roughness, metalness: 0 }));
    return mats.get(key);
  }
  const unitSphere = new THREE.SphereGeometry(1, 48, 32);
  const unitTube = new THREE.CylinderGeometry(1, 1, 1, 32, 1, true);
  const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const qAxis = (angle, axis) => new THREE.Quaternion().setFromAxisAngle(v3(axis).normalize(), angle);

  function ellipsoid(radii, c, roughness = SKIN_ROUGHNESS) {
    const m = new THREE.Mesh(unitSphere, matte(c, roughness));
    m.scale.set(radii[0], radii[1], radii[2]);
    return m;
  }
  function tube(c) { return new THREE.Mesh(unitTube, matte(c)); }
  function geometry(pos, idx) {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  // The pig's ear: a petal along +y from a base at the origin, flattened
  // front to back — wide at the base, a ROUND tip rather than a cat's point.
  // `root` carries the base on down below the origin, buried in the skull.
  function earGeometry(radius, height, depth, root = 0) {
    const seg = 32;
    const profile = root > 0 ? [[-root, radius]] : [];
    for (let i = 0; i <= 12; i++) profile.push([height * i / 12, petalRadius(radius, i / 12)]);
    const rings = profile.length - 1;
    const pos = [], idx = [];
    for (const [y, r] of profile) {
      for (let j = 0; j < seg; j++) {
        const a = (j / seg) * Math.PI * 2;
        pos.push(Math.cos(a) * r, y, Math.sin(a) * r * depth);
      }
    }
    const tip = pos.length / 3; pos.push(0, height, 0);
    const base = pos.length / 3; pos.push(0, profile[0][0], 0);
    for (let i = 0; i < rings; i++)
      for (let j = 0; j < seg; j++) {
        const a = i * seg + j, b = i * seg + (j + 1) % seg, c = a + seg, d = b + seg;
        idx.push(a, c, b, b, c, d);
      }
    for (let j = 0; j < seg; j++) {
      idx.push(rings * seg + j, tip, rings * seg + (j + 1) % seg);
      idx.push(base, j, (j + 1) % seg);
    }
    return geometry(pos, idx);
  }

  // `sweep` radians of a circle from angle `start`, as a tube with rounded
  // end caps. Taro's arc, with the start free so a half can be built.
  function arcGeometry(radius, tubeR, start, sweep) {
    const steps = 20, ring = 10;
    const pos = [], idx = [];
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
    return geometry(pos, idx);
  }

  // The corkscrew: a tube around a helix along +x, from the origin to
  // `length`, thinning toward the tip. Its frame is fixed (the helix's own
  // radial and binormal), so rings never twist.
  function helixGeometry() {
    const steps = 96, ring = 12;
    const pos = [], idx = [];
    for (let i = 0; i <= steps; i++) {
      const s = i / steps;
      const c = helixPoint(s);
      const th = 2 * Math.PI * Shape.tailTurns * s;
      const k = 2 * Math.PI * Shape.tailTurns * Shape.tailCoil * coilScale(s);
      // Tangent of (L s, r cos θ, r sin θ), ignoring the slow taper.
      const T = norm3([Shape.tailLength, -k * Math.sin(th), k * Math.cos(th)]);
      const N = [0, -Math.cos(th), -Math.sin(th)];               // toward the axis
      const B = cross3(T, N);
      const r = Shape.tailTube * (1 - (1 - Shape.tailTaper) * s);
      for (let j = 0; j < ring; j++) {
        const b = j / ring * Math.PI * 2;
        const u = Math.cos(b), w = Math.sin(b);
        pos.push(c[0] + (N[0] * u + B[0] * w) * r, c[1] + (N[1] * u + B[1] * w) * r, c[2] + (N[2] * u + B[2] * w) * r);
      }
    }
    for (let i = 0; i < steps; i++)
      for (let j = 0; j < ring; j++) {
        const a = i * ring + j, b = i * ring + (j + 1) % ring, c = a + ring, d = b + ring;
        idx.push(a, b, c, b, d, c);
      }
    return geometry(pos, idx);
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

  // A point on the snout disc's front, in the snout's frame, and the way
  // the surface faces there.
  function snoutPlacement(x, y, lift) {
    const [a, b, c] = S.snoutRadii;
    const u = Math.max(0.0001, 1 - (x / a) ** 2 - (y / b) ** 2);
    const z = c * Math.sqrt(u);
    const n = norm3([x / (a * a), y / (b * b), z / (c * c)]);
    return { p: [x + n[0] * lift, y + n[1] * lift, S.snoutOut + z + n[2] * lift], n };
  }

  // ---- floor shadow
  const shadowMat = new THREE.MeshBasicMaterial({ color: color(Palette.shadow), transparent: true, opacity: 0.16, depthWrite: false });
  const shadow = new THREE.Mesh(unitSphere, shadowMat);
  shadow.scale.set(0.60, 0.004, 0.46);
  root.add(shadow);

  // ---- body: two trotters, a round torso, a paler belly
  for (const side of [-1, 1]) {
    const foot = ellipsoid([0.105, 0.065, 0.11], Palette.skin);
    foot.position.set(side * 0.21, 0.04, 0.27);
    root.add(foot);
  }
  const torso = ellipsoid(S.bodyRadii, Palette.skin);
  torso.position.set(0, S.bodyCenterY, 0);
  belly.add(torso);
  const patch = ellipsoid([0.23, 0.19, 0.07], Palette.belly);
  patch.position.set(0, 0.29, S.bodyRadii[2] - 0.043);
  belly.add(patch);

  // ---- tail
  const tail = new THREE.Object3D();          // at the hip, aimed out
  tail.position.set(...S.tailBase);
  chest.add(tail);
  const tailSwing = new THREE.Object3D();     // wag and boing
  tail.add(tailSwing);
  const tailCoil = new THREE.Mesh(helixGeometry(), matte(Palette.skin));
  tailSwing.add(tailCoil);
  const tailTip = ellipsoid(Array(3).fill(S.tailTube * S.tailTaper), Palette.skin);
  tailSwing.add(tailTip);
  tail.quaternion.copy(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 0, 0), v3(S.tailAim).normalize()));

  // ---- head
  const skull = ellipsoid(S.headRadii, Palette.skin);
  skull.position.set(0, S.headCenterY, 0);
  headPivot.add(skull);

  const ears = [];
  const earG = earGeometry(S.earRadius, S.earHeight, S.earDepth, S.earRoot);
  const innerG = earGeometry(S.innerEarRadius, S.innerEarHeight, S.innerEarDepth);
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    pivot.position.set(side * S.earBase[0], S.headCenterY + S.earBase[1], S.earBase[2]);
    headPivot.add(pivot);
    const frame = new THREE.Object3D();         // the ear, lifted out of the skull
    frame.position.set(0, S.earRoot, 0);
    pivot.add(frame);
    frame.add(new THREE.Mesh(earG, matte(Palette.skin)));
    const inner = new THREE.Mesh(innerG, matte(Palette.innerEar));
    inner.position.set(...S.innerEarLift);
    inner.quaternion.copy(qAxis(S.innerEarTilt, [1, 0, 0]));
    frame.add(inner);
    if (side > 0) frame.add(buildBow());
    ears.push({ pivot, side });
  }

  function buildBow() {
    const bow = new THREE.Object3D();
    bow.position.set(...S.bowAt);
    bow.quaternion.copy(qAxis(S.bowTilt, [0, 0, 1]));
    for (const lobe of [-1, 1]) {
      const loop = ellipsoid(S.bowLoopRadii, Palette.bow, 0.5);
      loop.position.set(lobe * S.bowLoopX, 0, 0);
      loop.quaternion.copy(qAxis(-lobe * S.bowLoopAngle, [0, 0, 1]));
      bow.add(loop);
    }
    const knot = ellipsoid([S.bowKnotRadius, S.bowKnotRadius * 1.1, S.bowKnotRadius * 0.9], Palette.bowKnot, 0.5);
    knot.position.set(0, 0, 0.012);
    bow.add(knot);
    return bow;
  }

  // ---- face
  const eyes = [], cheeks = [];
  const happyG = arcGeometry(S.happyEyeRadius, S.happyEyeTube, -Math.PI / 2 - S.happyEyeSweep / 2, S.happyEyeSweep);
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    const shape = new THREE.Object3D();
    pivot.add(shape);
    const ball = ellipsoid(S.eyeRadii, Palette.ink, 0.35);
    shape.add(ball);
    const highlights = new THREE.Object3D();
    const big = ellipsoid([0.016, 0.016, 0.005], Palette.shine, 0.3);
    big.position.set(0.014, 0.022, S.eyeRadii[2] * 0.9);
    const small = ellipsoid([0.007, 0.007, 0.004], Palette.shine, 0.3);
    small.position.set(-0.013, -0.022, S.eyeRadii[2] * 0.85);
    highlights.add(big, small);
    shape.add(highlights);
    const happy = new THREE.Mesh(happyG, matte(Palette.ink, 0.35));
    happy.quaternion.copy(qAxis(Math.PI, [0, 0, 1]));
    happy.position.set(0, -S.happyEyeRadius * 0.55, 0.010);
    shape.add(happy);
    headPivot.add(pivot);
    eyes.push({ pivot, shape, ball, highlights, happy, side, x: side * S.eyeX });

    const cheek = ellipsoid(S.cheekRadii, Palette.blush);
    place(cheek, side * S.cheekX, S.cheekY, 0);
    headPivot.add(cheek);
    cheeks.push(cheek);
  }

  // Snout: `snoutBase` sits on the face, `snout` lifts and sniffs inside it.
  const snoutBase = new THREE.Object3D();
  place(snoutBase, 0, S.snoutY, 0);
  headPivot.add(snoutBase);
  const snout = new THREE.Object3D();
  snoutBase.add(snout);
  const snoutDisc = ellipsoid(S.snoutRadii, Palette.snout, 0.5);
  snoutDisc.position.set(0, 0, S.snoutOut);
  snout.add(snoutDisc);
  const nostrils = [];
  for (const side of [-1, 1]) {
    const n = ellipsoid(S.nostrilRadii, Palette.nostril, 0.6);
    const sp = snoutPlacement(side * S.nostrilX, S.nostrilY, -0.003);
    n.position.set(...sp.p);
    n.quaternion.copy(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), v3(sp.n)));
    snout.add(n);
    nostrils.push(n);
  }

  const mouth = new THREE.Object3D();
  place(mouth, 0, S.mouthY, S.mouthLift);
  headPivot.add(mouth);
  const mouthHalves = [], mouthArcs = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    const start = side > 0 ? -Math.PI / 2 : -Math.PI / 2 - S.mouthHalfSweep;
    const arc = new THREE.Mesh(arcGeometry(S.mouthArcRadius, S.mouthTube, start, S.mouthHalfSweep), matte(Palette.mouth));
    arc.position.set(0, S.mouthArcRadius, 0);   // the U's bottom on the hinge
    pivot.add(arc);
    mouthArcs.push(arc);
    mouth.add(pivot);
    mouthHalves.push({ pivot, side });
  }
  const cavity = ellipsoid([0.03, 0.004, 0.010], Palette.mouth);
  mouth.add(cavity);
  const tongue = ellipsoid([0.022, 0.012, 0.006], Palette.tongue);
  mouth.add(tongue);

  // ---- arms (Taro's, in pig skin)
  function buildArm(outward) {
    const shoulderBall = ellipsoid(Array(3).fill(S.limbRadius), Palette.skin);
    const stub = tube(Palette.skin);
    const paw = ellipsoid(Array(3).fill(S.pawRadius), Palette.skin);
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

  const earSpring = { v: 0, vel: 0 };
  const tailSpring = { v: 0, vel: 0 };
  let lastLean = 0, lastHeight = 0;

  function apply(pose, dt) {
    const perk = Math.max(0, (pose.browLeft + pose.browRight) / 2);
    const stretch = 1 + pose.breath * S.breathAmount + pose.bounce * S.hopStretch + perk * S.surpriseStretch;
    const squeeze = 1 / Math.sqrt(stretch);
    const hop = pose.bounce * S.bounceHeight;
    root.position.set(pose.hipShift, pose.rise + hop, 0);
    root.scale.setScalar(pose.depthScale);
    shadow.position.set(0, 0.002 - (pose.rise + hop), 0.02);
    const shrink = 1 - clamp(hop / 0.2, 0, 0.4);
    shadow.scale.set(0.60 * shrink, 0.004, 0.46 * shrink);

    const chestQ = qAxis(pose.chestRoll, [0, 0, 1]);
    chest.quaternion.copy(chestQ);
    belly.scale.set(squeeze, stretch, squeeze);
    const lift = (stretch - 1) * S.neckY;

    // THE NECK IS PINNED to the top of the body. The head only turns on it.
    neck.position.set(0, S.neckY + lift, 0);
    const g = S.headGain, m = S.maxHeadAngle;
    const yaw = clamp(pose.headYaw * g, -m, m), pitch = clamp(pose.headPitch * g, -S.maxHeadDown, m), roll = clamp(pose.headRoll * g, -m, m);
    const headWorld = qAxis(yaw, [0, 1, 0]).multiply(qAxis(-pitch, [1, 0, 0])).multiply(qAxis(-roll, [0, 0, 1]));
    const headLocal = chestQ.clone().invert().multiply(headWorld);
    headPivot.quaternion.copy(headLocal);

    // Vertical speed of the whole pig: the ears and the tail lag it.
    const height = pose.rise + hop;
    const vy = dt > 0 ? clamp((height - lastHeight) / dt, -2, 2) : 0;
    lastHeight = height;
    const leanVelocity = dt > 0 ? clamp((pose.lean - lastLean) / dt, -1.5, 1.5) : 0;
    lastLean = pose.lean;

    applyEars(pose, vy, dt);
    applyTail(pose, vy, leanVelocity, dt);
    applyFace(pose);

    const hc = neck.position.clone().add(new THREE.Vector3(0, S.headCenterY, 0).applyQuaternion(headLocal));
    const shoulderLift = (stretch - 1) * S.shoulderY;
    applyArm(pose.screenLeftArm, leftArm, shoulderLift, squeeze, [hc.x, hc.y, hc.z], dt);
    applyArm(pose.screenRightArm, rightArm, shoulderLift, squeeze, [hc.x, hc.y, hc.z], dt);
  }

  function applyEars(pose, vy, dt) {
    // Going up, the ears are left behind and flop; landing, they bounce.
    stepSpring(earSpring, clamp(vy * S.earBounce, -S.earBounceLimit, S.earBounceLimit), dt, 140, 7);
    for (const [i, ear] of ears.entries()) {
      const brow = i === 0 ? pose.browLeft : pose.browRight;
      const perk = Math.max(0, brow), flop = Math.max(0, -brow);
      const lean = S.earLean - perk * S.earPerk + flop * S.earFlop + earTwitch(pose.time, ear.side);
      const forward = S.earForward - perk * 0.18 + flop * S.earFlopForward + earSpring.v;
      ear.pivot.quaternion.copy(qAxis(-ear.side * lean, [0, 0, 1]).multiply(qAxis(forward, [1, 0, 0])));
    }
  }

  function applyTail(pose, vy, leanVelocity, dt) {
    // A boing: the coil stretches out on a hop and springs back. A lazy wag,
    // quicker when happy, kicked the other way by a lean.
    stepSpring(tailSpring, clamp(-vy * S.tailBoing, -0.5, 0.5) - leanVelocity * 0.3, dt, 90, 5);
    const happy = Math.max(0, pose.smile);
    const wag = Math.sin(pose.time * S.tailWagRate * (1 + happy)) * S.tailWag * (1 + 0.6 * happy);
    const swing = clamp(wag + tailSpring.v * 0.35, -S.tailSwingLimit, S.tailSwingLimit);
    tailSwing.quaternion.copy(qAxis(swing, [0, 0, 1]).multiply(qAxis(wag * 0.5, [0, 1, 0])));
    const boing = clamp(1 + tailSpring.v * 0.5 + 0.15 * happy - 0.15 * Math.max(0, -pose.smile), 0.8, 1.5);
    tailCoil.scale.set(boing, 1, 1);
    const tip = helixPoint(1);
    tailTip.position.set(tip[0] * boing, tip[1], tip[2]);
  }

  function applyFace(pose) {
    const gx = pose.gazeX * S.gazeTravelX, gy = pose.gazeY * S.gazeTravelY;
    const happy = Math.max(0, pose.smile);
    const joy = smoothstep((pose.smile - S.happyEyeFrom) / (S.happyEyeTo - S.happyEyeFrom));
    const arcIn = smoothstep(joy / 0.5);
    const ballOut = smoothstep((joy - 0.5) / 0.5);
    for (const [i, eye] of eyes.entries()) {
      const blink = i === 0 ? pose.blinkLeft : pose.blinkRight;
      const brow = i === 0 ? pose.browLeft : pose.browRight;
      const perk = Math.max(0, brow), frown = Math.max(0, -brow);
      place(eye.pivot, eye.x + gx, S.eyeY + gy, 0);
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
      c.scale.set(S.cheekRadii[0] * k, S.cheekRadii[1] * k, S.cheekRadii[2]);
    }

    // The snout lifts with a smile and as the mouth opens, and sniffs.
    const open = pose.mouthOpen;
    const frown = Math.max(0, -(pose.browLeft + pose.browRight) / 2);
    const s = sniff(pose.time);
    snout.position.set(0, happy * S.snoutSmileLift + open * S.snoutTalkLift + s * S.sniffLift, 0);
    snout.quaternion.copy(qAxis(-s * 0.08, [1, 0, 0]));
    const flare = 1 + S.nostrilFlare * Math.max(open * 0.6, frown, Math.abs(s));
    for (const n of nostrils) n.scale.set(S.nostrilRadii[0] * flare, S.nostrilRadii[1] * (1 + (flare - 1) * 0.4), S.nostrilRadii[2]);

    const flatten = 1 - S.openSmileFlatten * smoothstep(open / 0.4);
    const tilt = (S.mouthRestTilt + pose.smile * S.smileTilt) * flatten;
    for (const h of mouthHalves) h.pivot.quaternion.copy(qAxis(h.side * tilt, [0, 0, 1]));
    const half = 0.004 + S.mouthDrop * open;
    cavity.scale.set(0.028 + S.mouthWiden * open + S.smileWiden * happy, half, 0.010);
    cavity.position.set(0, 0.006 - half, -0.004);
    cavity.visible = open > 0.03;
    const line = mouthLineWeight(open, S.mouthLineGoneAt);
    for (const arc of mouthArcs) { arc.scale.setScalar(Math.max(line, 1e-4)); arc.visible = line > 0.25; }
    tongue.position.set(0, 0.006 - half * 1.55, -0.001);
    const tk = Math.min(1, open * 1.6);
    tongue.scale.set(0.022 * tk * 1.3, 0.012 * tk * 1.3, 0.006);
    tongue.visible = open > 0.25;
  }

  return { root, apply, Shape };
}

// ---- shared helpers (module level, so verify scripts can read them) -------

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const smoothstep = (v) => { const t = clamp(v, 0, 1); return t * t * (3 - 2 * t); };
const norm3 = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

function stepSpring(s, target, dt, k, d) {
  if (dt <= 0) { s.v = target; s.vel = 0; return; }
  const st = Math.min(Math.max(dt, 1 / 240), 1 / 30);
  s.vel += ((target - s.v) * k - s.vel * d) * st; s.v += s.vel * st;
}

/// The ear's half-width at `t` up its height: full at the base, swelling a
/// touch, then closing to a ROUND tip.
export function petalRadius(radius, t) {
  return radius * Math.sqrt(Math.max(0, 1 - t * t)) * (1 + 0.18 * t) * (1 - 0.35 * t);
}

/// The coil opens out from the hip: tight where it leaves the body.
function coilScale(s) { return 0.3 + 0.7 * Math.min(1, s * 2.5); }

/// A point on the tail's helix at `s` along it, in the tail's frame.
export function helixPoint(s) {
  const th = 2 * Math.PI * Shape.tailTurns * s;
  const r = Shape.tailCoil * coilScale(s);
  return [Shape.tailLength * s, r * Math.cos(th) - Shape.tailCoil * 0.3, r * Math.sin(th)];
}

/// A quick triple sniff every few seconds: -1...1, mostly 0.
export function sniff(time) {
  const period = 4.7;
  const phase = ((time + 2.3) % period + period) % period;
  if (phase > 0.6) return 0;
  return Math.sin(phase / 0.6 * Math.PI * 3) * Math.sin(phase / 0.6 * Math.PI);
}

/// An occasional flick of one ear, never both together.
function earTwitch(time, side) {
  const period = side > 0 ? 7.1 : 9.7;
  const phase = (time + (side > 0 ? 1.1 : 5.3)) % period;
  if (phase > 0.45) return 0;
  return Math.sin(phase / 0.45 * Math.PI * 3) * Math.exp(-phase * 6) * 0.16;
}

/// How much of the closed mouth line is still drawn at `open`.
export function mouthLineWeight(open, goneAt) {
  const t = Math.min(1, Math.max(0, (open - 0.03) / (goneAt - 0.03)));
  return 1 - t * t * (3 - 2 * t);
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
