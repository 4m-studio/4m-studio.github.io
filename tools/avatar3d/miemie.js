// MieMie 3D — the chibi, sculpted-in-code version of the 2D MieMie: a dark
// wavy bob with a centre part and a pearl clip, a black tee, dark jeans,
// white sneakers, big lashed brown eyes, strong blush, pink lips.
//
// A line-for-line mirror of AvatarTracker/Avatar/PrimitiveMieMieBody.swift
// (the swift's `MieMieMeshes` holds the mesh generators below):
// same units (hips at the origin, +x screen right, +y up, +z toward the
// camera), same hierarchy, same Shape constants. Change one, change both.
//
// Rules carried over from Mochi and Taro: the neck is PINNED to the body and
// the head only turns on it; every part is rigid on a pivot and only a leaf
// ever gets a non-uniform scale; no outline, soft shading and a floor shadow
// do the shaping; a cartoon exaggerates (head gain, ^^ eyes, eye widening).
//
// Render:  npm install && node shoot.cjs poses.json out.png
// Tile:    node render_tile.cjs ../../AvatarTracker/Assets.xcassets/MieMie3DTile.imageset/MieMie3DTile.png
// Checks:  python3 ../verify_miemie3d.py   (runs check.mjs; needs node only)

export const Shape = {
  // Torso: a lathed tee, elliptical in section. (y, radius) from hem to collar.
  tee: [[0.235, 0.232], [0.262, 0.244], [0.33, 0.236], [0.42, 0.242], [0.50, 0.250],
        [0.555, 0.246], [0.605, 0.214], [0.640, 0.160], [0.662, 0.098]],
  teeDepth: 0.78,
  bodyCenterY: 0.42,
  /// The ellipsoid the arms keep clear of, standing in for the tee.
  bodyRadii: [0.255, 0.25, 0.20],
  neckY: 0.66,
  collarRadius: 0.088,
  collarTube: 0.016,
  collarDepth: 0.86,

  hipY: 0.215,
  hipRadii: [0.232, 0.10, 0.185],
  legX: 0.105,
  legTop: 0.19,
  legBottom: 0.08,
  legRadius: 0.078,
  shoeRadii: [0.088, 0.052, 0.118],
  shoeY: 0.048,
  shoeZ: 0.03,

  // Head, relative to the neck pivot.
  headCenterY: 0.40,
  headRadii: [0.46, 0.44, 0.42],
  /// The head turns MORE than the person: a cartoon. Capped lower than
  /// Taro's because a bob hanging to the shoulders meets them on a big roll.
  headGain: 1.2,
  maxHeadAngle: 0.6,

  // Hair: the cap over the skull and the bob hanging from it, two closed shells.
  hairColumns: 96,
  hairCapRows: 26,
  hairCurtainRows: 14,
  hairThickness: 0.040,
  /// Extra volume at the sides of the cap, peaking at the temples: a bell.
  hairPuff: 0.035,
  /// Polar angle (from the crown) where the bob leaves the skull and drops
  /// straight down: the skull's WIDEST point, where its side is already
  /// vertical. Any lower and the cap would follow the skull back in under
  /// the bob, and the two would meet in a crease that reads as two tiers.
  hairCapEnd: 1.5708,
  hairDrop: 0.45,
  /// How far down the side of the face a cap-only column can reach.
  hairFaceEnd: 1.95,
  hairFlare: 0.030,
  hairFlick: 0.055,
  hairCurtainThickness: 0.035,
  /// The face opening, carved out of the cap: inside `hairFaceInner` a
  /// column ends at the hairline; out to `hairFaceOuter` it reaches down the
  /// side of the face.
  hairFaceInner: 0.52,
  hairFaceOuter: 0.98,
  /// Columns from here round the back carry the bob.
  hairSkirtFrom: 0.98,
  /// A cap-only column thins to this share of its thickness at its end, over
  /// this much polar angle: the soft hair edge round the face.
  hairEdgeThin: 0.25,
  hairEdgeTaper: 0.22,
  /// The bob is its own part and starts UNDER the cap, at this polar angle,
  /// sunk this far below the cap's outside, so it can swing.
  hairSkirtTop: 1.10,
  hairSkirtInset: 0.020,
  /// The bob's clumps grow in over this share of its drop.
  hairSkirtClumpIn: 0.40,
  /// Above this much polar angle from the cap's edge the tucked bob sits at
  /// the cap's deepest groove; within it, it rises to the clumps' middle.
  hairSkirtTuckBlend: 0.15,
  /// Over the bob the cap thins over this much polar angle to stand this
  /// far proud of it: a lip, not a ledge.
  hairCapBlend: 0.30,
  hairCapLip: 0.004,
  /// The bob thins toward its two front edges over this much azimuth, to
  /// this share of its thickness.
  hairSkirtEdge: 0.30,
  hairSkirtEdgeThin: 0.35,
  hairSkirtColumns: 72,
  hairSkirtCapRows: 8,
  /// The bob hangs: it takes back this share of the head's tilt, on an
  /// under-damped spring, and a sideways lean flicks it.
  hairHang: 0.45,
  hairMaxSwing: 0.27,
  hairLeanKick: 0.18,
  hairline: 0.86,
  hairlineCurve: 0.40,
  /// The centre part: a small notch in the hairline and a groove to the crown.
  partNotch: 0.10,
  partWidth: 0.030,
  partDepth: 0.032,
  hairClumps: 16,
  hairClumpDepth: 0.20,
  hairWave: 0.03,
  hairWaves: 7,
  /// What the arms keep clear of up top: the head with its cap and face, as
  /// one ellipsoid about the head's centre, and the bob as what it is seen
  /// from above — a band between these two radii round the head's centre,
  /// from its front edges round the back, turning with the head. Not one big
  /// ellipsoid: hung low enough to cover the bob, that reached the shoulders
  /// and pushed a resting arm half a unit toward the camera.
  headOccluderRadii: [0.55, 0.47, 0.45],
  /// Up, because the hair is on top: its bottom is the chin, which has none.
  /// Centred, it reached the shoulder under a tilted head and pushed a
  /// resting arm toward the camera.
  headOccluderOffsetY: 0.03,
  bobOccluderInner: 0.46,
  bobOccluderOuter: 0.62,

  // Pearl clip, on the screen-left side of the part.
  clipPhi: -0.50,
  clipTheta: 0.72,
  clipPearls: 4,
  clipPearlRadius: 0.025,
  clipSpacing: 0.050,
  clipTilt: -0.75,

  // Face features, (x, y) on the head's front relative to its centre.
  eyeX: 0.168,
  eyeY: -0.045,
  scleraRadii: [0.078, 0.088, 0.010],
  irisRadii: [0.060, 0.072, 0.006],
  pupilRadii: [0.028, 0.036, 0.004],
  gazeTravelX: 0.017,
  gazeTravelY: 0.013,
  shutEyeScale: 0.08,
  eyeCloseLine: -0.15,
  lashArcRadius: 0.086,
  lashSweep: 1.95,
  lashTube: 0.0105,
  lashRise: 0.006,
  flickLength: 0.034,
  flickAngle: 0.75,
  /// Closed-eye line (∪) for a blink: in over 0.60–0.80, the open lash out
  /// over 0.80–0.95, so one drawing is always whole.
  closedArcRadius: 0.07,
  closedSweep: 1.7,
  /// Raised brows widen the eyes; lowered ones narrow them.
  eyeSurprise: 0.22,
  eyeAngerSquint: 0.30,
  /// Happy eyes: a big smile squashes each eye away under its lash, leaving
  /// the ∩ lash as a ^ — the smile at which that starts and is complete.
  happyEyeFrom: 0.45,
  happyEyeTo: 0.80,

  browY: 0.115,
  browArcRadius: 0.11,
  browSweep: 0.85,
  browTube: 0.0095,
  browTravel: 0.032,
  browTilt: 0.32,
  /// A frown lifts the inner ends of the brows: worried.
  sadBrow: 0.45,

  cheekX: 0.25,
  cheekY: -0.150,
  cheekRadii: [0.070, 0.043, 0.012],
  cheekGrow: 0.45,

  noseY: -0.115,
  noseRadii: [0.021, 0.015, 0.014],

  mouthY: -0.215,
  mouthHalfWidth: 0.052,
  mouthLine: 0.0075,
  smileTilt: 0.50,
  mouthDrop: 0.085,
  /// The closed line hands over to the opening: it thins away as the mouth
  /// opens and is gone by this much open (PrimitiveChibiBody.mouthLineWeight).
  mouthLineGoneAt: 0.18,
  mouthWiden: 0.026,
  openSmileFlatten: 0.6,
  smileWiden: 0.012,
  lipRadii: [0.034, 0.015, 0.011],

  // Arms: two bones, a short black sleeve over the top of the upper arm.
  shoulderX: 0.235,
  shoulderY: 0.545,
  shoulderZ: 0.0,
  upperLength: 0.17,
  forearmLength: 0.16,
  limbRadius: 0.041,
  sleeveRadius: 0.060,
  sleeveLength: 0.55,
  palmRadius: 0.056,
  restArmAngle: 0.42,
  clearance: 0.012,

  breathAmount: 0.012,
  bounceHeight: 0.06,
  handShapeFade: 0.06,
};

export const Palette = {
  skin: [1.00, 0.89, 0.84],
  skinShade: [0.97, 0.80, 0.76],
  hair: [0.25, 0.165, 0.145],
  tee: [0.17, 0.16, 0.19],
  denim: [0.22, 0.23, 0.29],
  shoe: [0.97, 0.96, 0.95],
  sole: [0.86, 0.84, 0.84],
  sclera: [1.0, 1.0, 1.0],
  iris: [0.42, 0.26, 0.19],
  pupil: [0.16, 0.09, 0.08],
  lash: [0.16, 0.10, 0.10],
  brow: [0.36, 0.25, 0.21],
  blush: [1.0, 0.58, 0.64],
  nose: [1.0, 0.76, 0.74],
  mouth: [0.55, 0.16, 0.22],
  lip: [0.96, 0.50, 0.56],
  teeth: [1.0, 0.99, 0.97],
  tongue: [1.0, 0.56, 0.62],
  pearl: [0.98, 0.97, 0.95],
  heart: [1.0, 0.42, 0.55],
  shadow: [0.30, 0.20, 0.22],
  shine: [1, 1, 1],
};

const SKIN_ROUGHNESS = 0.7;
const HAIR_ROUGHNESS = 0.42;

// ---------------------------------------------------------------- meshes ---
// Every generator returns { positions: [x,y,z,...], indices: [...] } with
// triangles counter-clockwise seen from outside; the Swift is the same code.

/// A lathe around y with an elliptical section (z = depth * x). Closed at the
/// bottom by a fan and at the top by a fan, so it is watertight.
export function latheMesh(profile, depth, segments = 48) {
  const pos = [], idx = [];
  for (const [y, r] of profile)
    for (let j = 0; j < segments; j++) {
      const a = j / segments * Math.PI * 2;
      pos.push(Math.sin(a) * r, y, Math.cos(a) * r * depth);
    }
  const rings = profile.length;
  for (let i = 0; i < rings - 1; i++)
    for (let j = 0; j < segments; j++) {
      const a = i * segments + j, b = i * segments + (j + 1) % segments;
      const c = a + segments, d = b + segments;
      idx.push(a, b, c, b, d, c);
    }
  const bottom = pos.length / 3; pos.push(0, profile[0][0], 0);
  const top = pos.length / 3; pos.push(0, profile[rings - 1][0], 0);
  const last = (rings - 1) * segments;
  for (let j = 0; j < segments; j++) {
    idx.push(bottom, (j + 1) % segments, j);
    idx.push(top, last + j, last + (j + 1) % segments);
  }
  return { positions: pos, indices: idx };
}

/// A ring lying in the xz plane, elliptical like the tee's section
/// (z = depth * x): the crew-neck collar.
export function torusMesh(radius, tube, depth, segments = 48, ring = 12) {
  const pos = [], idx = [];
  for (let j = 0; j < segments; j++) {
    const a = j / segments * Math.PI * 2;
    const c = [Math.sin(a) * radius, 0, Math.cos(a) * radius * depth];
    const nl = Math.hypot(Math.sin(a), Math.cos(a) * depth);
    const n = [Math.sin(a) / nl * 1, 0, Math.cos(a) * depth / nl];
    for (let k = 0; k < ring; k++) {
      const b = k / ring * Math.PI * 2;
      pos.push(c[0] + n[0] * Math.cos(b) * tube, Math.sin(b) * tube, c[2] + n[2] * Math.cos(b) * tube);
    }
  }
  for (let j = 0; j < segments; j++)
    for (let k = 0; k < ring; k++) {
      const a = j * ring + k, b = j * ring + (k + 1) % ring;
      const c = ((j + 1) % segments) * ring + k, d = ((j + 1) % segments) * ring + (k + 1) % ring;
      idx.push(a, c, b, b, c, d);
    }
  return { positions: pos, indices: idx };
}

/// The bottom `sweep` radians of a circle as a tube; both ends point up.
export function arcMesh(radius, tube, sweep, steps = 24, ring = 10) {
  const pos = [], idx = [];
  const start = -Math.PI / 2 - sweep / 2;
  for (let i = 0; i <= steps; i++) {
    const a = start + sweep * i / steps;
    for (let j = 0; j < ring; j++) {
      const b = j / ring * Math.PI * 2;
      const rr = radius + Math.cos(b) * tube;
      pos.push(Math.cos(a) * rr, Math.sin(a) * rr, Math.sin(b) * tube);
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
    pos.push(Math.cos(a) * radius + t[0] * tube * 0.6, Math.sin(a) * radius + t[1] * tube * 0.6, 0);
    for (let j = 0; j < ring; j++) {
      const p = i * ring + j, q = i * ring + (j + 1) % ring;
      if (sgn > 0) idx.push(q, p, centre); else idx.push(p, q, centre);
    }
  }
  return { positions: pos, indices: idx };
}

const smooth01 = (v) => { const t = Math.min(Math.max(v, 0), 1); return t * t * (3 - 2 * t); };

/// Where a column of the hair's CAP ends: a polar angle from the crown, at
/// most `hairCapEnd`. Inside `hairFaceInner` it stops at the hairline; out to
/// `hairFaceOuter` it reaches down the side of the face, lying on the skull.
export function hairCapEndAt(phi) {
  const S = Shape;
  const a = Math.abs(phi);
  const hairline = S.hairline + S.hairlineCurve * (a / S.hairFaceInner) ** 2
    - S.partNotch * Math.exp(-((phi / 0.07) ** 2));
  const k = smooth01((a - S.hairFaceInner) / (S.hairFaceOuter - S.hairFaceInner));
  return Math.min(hairline + (S.hairFaceEnd - hairline) * k, S.hairFaceEnd);
}

/// Whether a column carries the bob. Only columns from `hairSkirtFrom` round
/// the back do; the face is framed by the cap alone, so no part of the bob
/// can ever hang in front of the cheek.
export function hairHasSkirt(phi) { return Math.abs(phi) >= Shape.hairSkirtFrom; }

/// How far the bob drops at a column, with the hem's waves.
export function hairDropAt(phi) {
  const S = Shape;
  return S.hairDrop + S.hairWave * Math.sin(phi * S.hairWaves);
}

/// The hair's own thickness at polar angle `theta` of column `phi`: a bell,
/// puffier at the sides, with clumps running from the crown down and the
/// centre part. The cap and the bob both start from this.
export function hairBaseThickness(phi, theta) {
  const S = Shape;
  const [rx, , rz] = S.headRadii;
  const st = Math.sin(theta);
  let t = (S.hairThickness + S.hairPuff * st * st)
    * (1 + S.hairClumpDepth * Math.cos(phi * S.hairClumps) * smooth01(theta / 1.2));
  const x = st * Math.sin(phi) * rx, z = st * Math.cos(phi) * rz;
  t -= S.partDepth * Math.exp(-((x / S.partWidth) ** 2)) * smooth01(z / 0.12);
  return t;
}

/// How thick the CAP is at `theta` of a column whose cap ends at `end`.
/// Over the bob it comes down to meet it nearly flush, so the two read as one
/// bob rather than two tiers. Where a cap-only column ends on the face it
/// thins, so that hair edge is soft rather than a cut slab — except next to
/// the bob, which it has to meet at full thickness.
export function hairCapThickness(phi, theta, end, skirt) {
  const S = Shape;
  const t = hairBaseThickness(phi, theta);
  if (skirt) {
    // Toward its edge the cap lets go of its clumps and comes down to stand
    // just `hairCapLip` proud of the bob's smooth top, so the two meet
    // flush: one bob, not two tiers.
    const k = smooth01((theta - (S.hairCapEnd - S.hairCapBlend)) / S.hairCapBlend);
    const flush = hairSkirtThickness(phi, theta, 0) - S.hairSkirtInset + S.hairCapLip;
    return Math.max(t + (flush - t) * k, 0.004);
  }
  const nearSkirt = smooth01((Math.abs(phi) - (S.hairSkirtFrom - 0.2)) / 0.2);
  const taper = S.hairEdgeThin + (1 - S.hairEdgeThin) * smooth01((end - theta) / S.hairEdgeTaper);
  return Math.max(t * (taper + (1 - taper) * nearSkirt), 0.004);
}

/// A point on the cap: [outer, inner] relative to the head's centre. The
/// inside is just under the skull.
export function hairCapPoint(phi, theta, thickness) {
  const [rx, ry, rz] = Shape.headRadii;
  const st = Math.sin(theta), ct = Math.cos(theta);
  const dir = [st * Math.sin(phi), ct, st * Math.cos(phi)];
  const t = thickness, i = 0.012;
  return [[dir[0] * (rx + t), dir[1] * (ry + t), dir[2] * (rz + t)],
          [dir[0] * (rx - i), dir[1] * (ry - i), dir[2] * (rz - i)]];
}

/// A point on the bob: [outer, inner] relative to the head's centre. Above
/// `hairCapEnd` (`drop` 0, `theta` < `hairCapEnd`) it lies UNDER the cap, by
/// `hairSkirtInset`, so it can swing a little without its top ever showing;
/// below, it hangs `drop` down from the cap's end, flaring a little and
/// flicking out at the hem. Its inside is `hairCurtainThickness` in.
export function hairSkirtPoint(phi, theta, drop) {
  const S = Shape;
  const sp = Math.sin(phi), cp = Math.cos(phi);
  // Thinner toward the two front edges, so they end as a tapered lock
  // rather than a cut slab.
  const fromEdge = Math.abs(phi) - S.hairSkirtFrom;
  const th = S.hairCurtainThickness
    * (S.hairSkirtEdgeThin + (1 - S.hairSkirtEdgeThin) * smooth01(fromEdge / S.hairSkirtEdge));
  if (drop <= 0) {
    const t = hairSkirtThickness(phi, theta, 0) - S.hairSkirtInset;
    return [hairCapPoint(phi, theta, t)[0], hairCapPoint(phi, theta, t - th)[0]];
  }
  const top = hairCapPoint(phi, S.hairCapEnd, hairSkirtThickness(phi, S.hairCapEnd, 0) - S.hairSkirtInset)[0];
  const u = drop / S.hairDrop;
  // The clumps grow in over the top of the drop: what the cap edge shows of
  // the bob is ridged, what can swing up under the cap is not.
  const clump = hairSkirtThickness(phi, S.hairCapEnd, u) - hairSkirtThickness(phi, S.hairCapEnd, 0);
  const out = clump + S.hairFlare * u + S.hairFlick * smooth01((u - 0.7) / 0.3);
  const o = [top[0] + sp * out, top[1] - drop, top[2] + cp * out];
  return [o, [o[0] - sp * th, o[1], o[2] - cp * th]];
}

/// The bob's own thickness at polar angle `theta`, `u` of the way down its
/// drop. Tucked under the cap it is SMOOTH, at the clumps' MIDDLE depth:
/// swung, a point slides sideways under the cap, and with `hairClumpDepth`
/// small enough the middle depth less `hairSkirtInset` is never above even the
/// cap's deepest groove, so nothing can poke through. Its clumps grow back in
/// over the top `hairSkirtClumpIn` of the drop.
export function hairSkirtThickness(phi, theta, u) {
  const S = Shape;
  const st = Math.sin(theta);
  const bell = S.hairThickness + S.hairPuff * st * st;
  // Above the cap's edge band, down at the cap's deepest groove.
  const tuck = smooth01((theta - (S.hairCapEnd - S.hairSkirtTuckBlend)) / S.hairSkirtTuckBlend);
  const k = smooth01(u / S.hairSkirtClumpIn);
  return bell * (1 - S.hairClumpDepth * (1 - tuck) + S.hairClumpDepth * Math.cos(phi * S.hairClumps) * k);
}

/// Appends a quad, counter-clockwise from outside, on its own vertices so its
/// normals stay crisp.
function quad(pos, idx, p0, p1, p2, p3) {
  const base = pos.length / 3;
  for (const p of [p0, p1, p2, p3]) pos.push(...p);
  idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
}

/// The cap: a closed shell over the skull. Every column runs from the crown
/// to where its cap ends — the hairline at the front, down the side of the
/// face beside it, `hairCapEnd` round the back — with a rim along the bottom.
/// Columns wrap all the way round; the crown rows are degenerate and harmless.
export function hairCapMesh() {
  const S = Shape;
  const cols = S.hairColumns, rows = S.hairCapRows, per = rows + 1;
  const outer = [], inner = [];
  for (let j = 0; j < cols; j++) {
    const phi = -Math.PI + (j + 0.5) / cols * Math.PI * 2;
    const has = hairHasSkirt(phi);
    const end = has ? S.hairCapEnd : hairCapEndAt(phi);
    for (let i = 0; i <= rows; i++) {
      const theta = end * i / rows;
      const [o, n] = hairCapPoint(phi, theta, hairCapThickness(phi, theta, end, has));
      outer.push(o); inner.push(n);
    }
  }
  const pos = [], idx = [];
  for (const p of outer) pos.push(...p);
  const ib = pos.length / 3;
  for (const p of inner) pos.push(...p);
  const at = (j, i) => (j % cols) * per + i;
  for (let j = 0; j < cols; j++)
    for (let i = 0; i < rows; i++) {
      const a = at(j, i), b = at(j + 1, i), c = at(j, i + 1), d = at(j + 1, i + 1);
      idx.push(a, c, b, b, c, d);
      idx.push(ib + a, ib + b, ib + c, ib + b, ib + d, ib + c);
    }
  for (let j = 0; j < cols; j++)
    quad(pos, idx, outer[at(j, rows)], inner[at(j, rows)], inner[at(j + 1, rows)], outer[at(j + 1, rows)]);
  return { positions: pos, indices: idx };
}

/// The bob: a closed slab round the back, from `hairSkirtTop` (tucked under
/// the cap) down to the hem. It is its own part so it can hang: see
/// `applyHair`. End caps close its two front edges.
export function hairSkirtMesh() {
  const S = Shape;
  const cols = S.hairSkirtColumns, capRows = S.hairSkirtCapRows, dropRows = S.hairCurtainRows;
  const rows = capRows + dropRows, per = rows + 1;
  const outer = [], inner = [];
  const span = 2 * Math.PI - 2 * S.hairSkirtFrom;
  for (let k = 0; k <= cols; k++) {
    let phi = S.hairSkirtFrom + k / cols * span;
    if (phi > Math.PI) phi -= 2 * Math.PI;
    const drop = hairDropAt(phi);
    for (let i = 0; i <= rows; i++) {
      const [o, n] = i <= capRows
        ? hairSkirtPoint(phi, S.hairSkirtTop + (S.hairCapEnd - S.hairSkirtTop) * i / capRows, 0)
        : hairSkirtPoint(phi, S.hairCapEnd, drop * (i - capRows) / dropRows);
      outer.push(o); inner.push(n);
    }
  }
  const pos = [], idx = [];
  for (const p of outer) pos.push(...p);
  const ib = pos.length / 3;
  for (const p of inner) pos.push(...p);
  const at = (k, i) => k * per + i;
  for (let k = 0; k < cols; k++)
    for (let i = 0; i < rows; i++) {
      const a = at(k, i), b = at(k + 1, i), c = at(k, i + 1), d = at(k + 1, i + 1);
      idx.push(a, c, b, b, c, d);
      idx.push(ib + a, ib + b, ib + c, ib + b, ib + d, ib + c);
    }
  for (let k = 0; k < cols; k++) {
    // Hem, facing down; top edge, facing up.
    quad(pos, idx, outer[at(k, rows)], inner[at(k, rows)], inner[at(k + 1, rows)], outer[at(k + 1, rows)]);
    quad(pos, idx, outer[at(k, 0)], outer[at(k + 1, 0)], inner[at(k + 1, 0)], inner[at(k, 0)]);
  }
  for (let i = 0; i < rows; i++) {
    // The first column's edge faces back along -phi, the last's along +phi.
    quad(pos, idx, inner[at(0, i)], inner[at(0, i + 1)], outer[at(0, i + 1)], outer[at(0, i)]);
    quad(pos, idx, inner[at(cols, i)], outer[at(cols, i)], outer[at(cols, i + 1)], inner[at(cols, i + 1)]);
  }
  return { positions: pos, indices: idx };
}

/// [outer, inner] at a point of the CAP, for things that sit on the hair.
export function hairSurface(phi, theta) {
  const has = hairHasSkirt(phi);
  const end = has ? Shape.hairCapEnd : hairCapEndAt(phi);
  return hairCapPoint(phi, theta, hairCapThickness(phi, theta, end, has));
}

// ------------------------------------------------------------- character ---

export function createMieMie(THREE) {
  const color = (c) => new THREE.Color().setRGB(c[0], c[1], c[2], THREE.SRGBColorSpace);
  const mats = new Map();
  function matte(c, roughness = SKIN_ROUGHNESS) {
    const key = c.join(",") + roughness;
    if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color: color(c), roughness, metalness: 0 }));
    return mats.get(key);
  }
  const unitSphere = new THREE.SphereGeometry(1, 48, 32);
  const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const qAxis = (angle, axis) => new THREE.Quaternion().setFromAxisAngle(v3(axis).normalize(), angle);
  function geom(m) {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(m.positions, 3));
    g.setIndex(m.indices);
    g.computeVertexNormals();
    return g;
  }
  function ellipsoid(radii, c, roughness = SKIN_ROUGHNESS) {
    const m = new THREE.Mesh(unitSphere, matte(c, roughness));
    m.scale.set(radii[0], radii[1], radii[2]);
    return m;
  }
  function segment(length, radius, c, roughness = SKIN_ROUGHNESS) {
    const g = new THREE.CapsuleGeometry(radius, Math.max(0.0001, length - 2 * radius), 8, 20);
    return new THREE.Mesh(g, matte(c, roughness));
  }

  const S = Shape;
  const root = new THREE.Object3D();
  const chest = new THREE.Object3D();
  const belly = new THREE.Object3D();
  const neck = new THREE.Object3D();
  const headPivot = new THREE.Object3D();
  root.add(chest); chest.add(belly); chest.add(neck); neck.add(headPivot);
  neck.position.set(0, S.neckY, 0);
  const hc = [0, S.headCenterY, 0];

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

  // ---- floor shadow
  const shadowMat = new THREE.MeshBasicMaterial({ color: color(Palette.shadow), transparent: true, opacity: 0.16, depthWrite: false });
  const shadow = new THREE.Mesh(unitSphere, shadowMat);
  shadow.scale.set(0.42, 0.004, 0.30);
  root.add(shadow);

  // ---- legs, shoes, hips (on the root: they do not roll with the chest)
  for (const side of [-1, 1]) {
    const leg = segment(S.legTop - S.legBottom + 2 * S.legRadius, S.legRadius, Palette.denim, 0.85);
    leg.position.set(side * S.legX, (S.legTop + S.legBottom) / 2, 0);
    root.add(leg);
    const shoe = ellipsoid(S.shoeRadii, Palette.shoe, 0.55);
    shoe.position.set(side * S.legX, S.shoeY, S.shoeZ);
    root.add(shoe);
    const sole = ellipsoid([S.shoeRadii[0] * 1.04, 0.016, S.shoeRadii[2] * 1.03], Palette.sole, 0.6);
    sole.position.set(side * S.legX, 0.014, S.shoeZ);
    root.add(sole);
  }
  const hips = ellipsoid(S.hipRadii, Palette.denim, 0.85);
  hips.position.set(0, S.hipY, 0);
  chest.add(hips);

  // ---- tee
  const tee = new THREE.Mesh(geom(latheMesh(S.tee, S.teeDepth)), matte(Palette.tee, 0.8));
  belly.add(tee);
  const collar = new THREE.Mesh(geom(torusMesh(S.collarRadius, S.collarTube, S.collarDepth)), matte(Palette.tee, 0.8));
  collar.position.set(0, S.neckY - 0.004, 0);
  belly.add(collar);

  // ---- neck (pinned) and head
  const neckPiece = segment(0.20, 0.068, Palette.skinShade);
  neckPiece.position.set(0, 0.06, 0);
  neck.add(neckPiece);

  const skull = ellipsoid(S.headRadii, Palette.skin);
  skull.position.set(...hc);
  headPivot.add(skull);

  // DEBUG_HAIR paints the cap green and the bob blue, to see which is which.
  const debugHair = !!globalThis.DEBUG_HAIR;
  const hairMat = debugHair ? new THREE.MeshStandardMaterial({ color: 0x30a050, roughness: 0.6 })
                            : matte(Palette.hair, HAIR_ROUGHNESS);
  const hair = new THREE.Mesh(geom(hairCapMesh()), hairMat);
  hair.position.set(...hc);
  headPivot.add(hair);
  // The bob hangs from the head's centre, on its own pivot.
  const skirtPivot = new THREE.Object3D();
  skirtPivot.position.set(...hc);
  headPivot.add(skirtPivot);
  const skirtG = geom(hairSkirtMesh());
  const skirtMat = debugHair ? new THREE.MeshStandardMaterial({ color: 0x4060e0, roughness: 0.6 })
                             : matte(Palette.hair, HAIR_ROUGHNESS);
  skirtPivot.add(new THREE.Mesh(skirtG, skirtMat));
  const swingRoll = { v: 0, vel: 0 }, swingPitch = { v: 0, vel: 0 };
  let lastLean = 0;

  // Pearl clip, sitting on the cap.
  const clip = new THREE.Object3D();
  {
    const [o] = hairSurface(S.clipPhi, S.clipTheta);
    const n = new THREE.Vector3(o[0] / S.headRadii[0] ** 2, o[1] / S.headRadii[1] ** 2, o[2] / S.headRadii[2] ** 2).normalize();
    clip.position.set(o[0] + hc[0], o[1] + hc[1], o[2] + hc[2]).addScaledVector(n, S.clipPearlRadius * 0.55);
    clip.quaternion.copy(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), n))
      .multiply(qAxis(S.clipTilt, [0, 0, 1]));
    for (let k = 0; k < S.clipPearls; k++) {
      const pearl = ellipsoid(Array(3).fill(S.clipPearlRadius), Palette.pearl, 0.22);
      pearl.position.set((k - (S.clipPearls - 1) / 2) * S.clipSpacing, 0, 0);
      clip.add(pearl);
    }
    headPivot.add(clip);
  }

  // ---- face
  const lashG = geom(arcMesh(S.lashArcRadius, S.lashTube, S.lashSweep));
  const closedG = geom(arcMesh(S.closedArcRadius, S.lashTube * 0.9, S.closedSweep));
  const browG = geom(arcMesh(S.browArcRadius, S.browTube, S.browSweep));
  const eyes = [], brows = [], cheeks = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    headPivot.add(pivot);
    const sclera = ellipsoid(S.scleraRadii, Palette.sclera, 0.4);
    const iris = ellipsoid(S.irisRadii, Palette.iris, 0.35);
    const pupil = ellipsoid(S.pupilRadii, Palette.pupil, 0.35);
    const big = ellipsoid([0.020, 0.020, 0.004], Palette.shine, 0.3);
    const small = ellipsoid([0.010, 0.010, 0.003], Palette.shine, 0.3);
    // The open lash: the arc turned over so it is a ∩ over the eye.
    const lash = new THREE.Object3D();
    const lashArc = new THREE.Mesh(lashG, matte(Palette.lash, 0.5));
    lashArc.quaternion.copy(qAxis(Math.PI, [0, 0, 1]));
    lash.add(lashArc);
    // A flick at the outer corner.
    const flick = segment(S.flickLength, S.lashTube * 0.9, Palette.lash, 0.5);
    const cornerAngle = Math.PI / 2 - S.lashSweep / 2;  // from the arc's top, outward
    const corner = [side * Math.cos(cornerAngle) * S.lashArcRadius, Math.sin(cornerAngle) * S.lashArcRadius];
    flick.position.set(corner[0] + side * Math.cos(S.flickAngle) * S.flickLength * 0.45,
                       corner[1] + Math.sin(S.flickAngle) * S.flickLength * 0.45, 0);
    flick.quaternion.copy(qAxis(-side * (Math.PI / 2 - S.flickAngle), [0, 0, 1]));
    lash.add(flick);
    const closed = new THREE.Mesh(closedG, matte(Palette.lash, 0.5));
    for (const p of [sclera, iris, pupil, big, small, lash, closed]) pivot.add(p);
    eyes.push({ pivot, sclera, iris, pupil, big, small, lash, closed, side, x: side * S.eyeX });

    const browPivot = new THREE.Object3D();
    place(browPivot, side * S.eyeX, S.browY, 0.004);
    const browBar = new THREE.Object3D();
    const browArc = new THREE.Mesh(browG, matte(Palette.brow, 0.6));
    browArc.quaternion.copy(qAxis(Math.PI, [0, 0, 1]));
    browArc.position.set(0, -S.browArcRadius * 0.92, 0);
    browBar.add(browArc);
    browPivot.add(browBar);
    headPivot.add(browPivot);
    brows.push({ bar: browBar, side });

    const cheek = ellipsoid(S.cheekRadii, Palette.blush, 0.8);
    place(cheek, side * S.cheekX, S.cheekY, 0);
    headPivot.add(cheek);
    cheeks.push(cheek);
  }

  const nose = ellipsoid(S.noseRadii, Palette.nose, 0.6);
  place(nose, 0, S.noseY, 0.004);
  headPivot.add(nose);

  const mouth = new THREE.Object3D();
  place(mouth, 0, S.mouthY, 0.002);
  headPivot.add(mouth);
  const mouthHalves = [], mouthBars = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Object3D();
    const bar = segment(S.mouthHalfWidth, S.mouthLine, Palette.mouth, 0.5);
    mouthBars.push(bar);
    bar.quaternion.copy(qAxis(Math.PI / 2, [0, 0, 1]));
    bar.position.set(side * (S.mouthHalfWidth * 0.5 - 0.004), 0, 0.010);
    pivot.add(bar);
    mouth.add(pivot);
    mouthHalves.push({ pivot, side });
  }
  const cavity = ellipsoid([0.04, 0.004, 0.010], Palette.mouth, 0.6);
  mouth.add(cavity);
  const teeth = ellipsoid([0.030, 0.009, 0.006], Palette.teeth, 0.4);
  mouth.add(teeth);
  const tongue = ellipsoid([0.024, 0.012, 0.006], Palette.tongue, 0.6);
  mouth.add(tongue);
  const lip = ellipsoid(S.lipRadii, Palette.lip, 0.45);
  mouth.add(lip);

  // ---- arms
  function buildArm(outward) {
    const cap = ellipsoid(Array(3).fill(S.sleeveRadius * 1.04), Palette.tee, 0.8);
    const sleeve = segment(S.upperLength * S.sleeveLength, S.sleeveRadius, Palette.tee, 0.8);
    const upper = segment(S.upperLength, S.limbRadius, Palette.skin);
    const elbow = ellipsoid(Array(3).fill(S.limbRadius), Palette.skin);
    const fore = segment(S.forearmLength, S.limbRadius * 0.93, Palette.skin);
    const hand = new THREE.Object3D();
    const thumbUpFrame = new THREE.Object3D();
    const heart = new THREE.Object3D();
    for (const p of [cap, sleeve, upper, elbow, fore, hand, heart]) chest.add(p);

    const palm = ellipsoid([S.palmRadius, S.palmRadius, S.palmRadius * 0.8], Palette.skin);
    palm.position.set(0, -S.palmRadius * 0.6, 0);
    hand.add(palm);
    const inward = -outward;
    const open = new THREE.Object3D();
    const pad = ellipsoid([0.046, 0.034, 0.036], Palette.skin);
    pad.position.set(0, -S.palmRadius * 1.25, 0);
    const nub = ellipsoid([0.022, 0.028, 0.022], Palette.skin);
    nub.position.set(inward * 0.050, -0.022, 0.018);
    open.add(pad, nub);
    const point = new THREE.Object3D();
    const finger = segment(0.075, 0.013, Palette.skin);
    finger.position.set(0, -S.palmRadius - 0.042, 0);
    point.add(finger);
    const peace = new THREE.Object3D();
    for (const spread of [-1, 1]) {
      const f = segment(0.075, 0.013, Palette.skin);
      f.position.set(spread * 0.020, -S.palmRadius - 0.040, 0);
      f.quaternion.copy(qAxis(-spread * 0.22, [0, 0, 1]));
      peace.add(f);
    }
    const thumbsUp = new THREE.Object3D();
    const thumb = segment(0.065, 0.015, Palette.skin);
    thumb.position.set(0, 0.056, 0.01);
    thumbUpFrame.add(thumb);
    thumbsUp.add(thumbUpFrame);
    const shapes = { open, fist: new THREE.Object3D(), point, peace, thumbsUp, heart: new THREE.Object3D() };
    const weights = {};
    for (const [k, node] of Object.entries(shapes)) {
      hand.add(node);
      weights[k] = k === "open" ? 1 : 0;
      node.scale.setScalar(weights[k]); node.visible = weights[k] > 0.01;
    }
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
    return { outward, cap, sleeve, upper, elbow, fore, hand, thumbUpFrame, heart, shapes, weights,
             elbowDepth: { v: 0, vel: 0 }, handDepth: { v: 0, vel: 0 } };
  }
  const leftArm = buildArm(-1), rightArm = buildArm(1);

  // ------------------------------------------------------------------ pose ---
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
  const smoothstep = smooth01;
  function stepSpring(s, target, dt, k, d) {
    if (dt <= 0) { s.v = target; s.vel = 0; return; }
    const st = Math.min(Math.max(dt, 1 / 240), 1 / 30);
    s.vel += ((target - s.v) * k - s.vel * d) * st; s.v += s.vel * st;
  }

  // What the arms keep in front of: head and cap, the bob, and the body.
  // `headYaw` is the head's turn relative to the chest, which turns the bob.
  function clearancePoint(p, pad, bodyPad, headC, headYaw, bobRoll, z) {
    let need = 0;
    const occ = [[[headC[0], headC[1] + S.headOccluderOffsetY, headC[2]], S.headOccluderRadii, pad]];
    if (bodyPad !== null) occ.push([[0, S.bodyCenterY, 0], S.bodyRadii, bodyPad]);
    for (const [c, r, pd] of occ) {
      const a = r[0] + pd, b = r[1] + pd, cc = r[2] + pd;
      const u = ((p[0] - c[0]) / a) ** 2 + ((p[1] - c[1]) / b) ** 2;
      if (u < 1) need = Math.max(need, c[2] + cc * Math.sqrt(1 - u) + S.clearance);
    }
    return Math.max(need, bobClearance(p, pad, headC, headYaw, bobRoll, z));
  }
  // The bob, from above, is a band between `bobOccluderInner` and
  // `bobOccluderOuter` round the head's centre, from its front edge round
  // the back, at the heights from the skull's widest point to the hem. On
  // each side the front edge is at `hairSkirtFrom` turned by the head's yaw.
  // A point must be in front of the band's front-most point at its x: on
  // the outside circle, or on the front edge's end cap, whichever is nearer
  // the camera — if the band reaches that x on the front side at all. A
  // point already INSIDE the band's ring (`z`, the depth it has now, short of
  // the inside) is in the hollow under the head and needs nothing: a resting
  // arm, with the head turned hard and the bob's corner swung in front of the
  // shoulder, is behind the hair, not in it.
  // `bobRoll` is the bob's tilt in the picture, about the head's centre: it
  // is tested upright, so the point is turned back by it first.
  function bobClearance(p, pad, headC, headYaw, bobRoll, z) {
    const c = Math.cos(bobRoll), s = Math.sin(bobRoll);
    const rx = p[0] - headC[0], ry = p[1] - headC[1];
    const dy = -rx * s + ry * c;
    // A limb's radius of slack below the hem: the solve tests samples, and a
    // sample just below the window must still hold up the arm between it and
    // the next one.
    if (dy > pad || dy < -(S.hairDrop + S.hairWave) - 2 * pad) return 0;
    const dx = rx * c + ry * s, side = dx >= 0 ? 1 : -1, a = Math.abs(dx);
    const edge = Math.max(S.hairSkirtFrom + side * headYaw, 0.05);
    const ro = S.bobOccluderOuter + pad, ri = Math.max(S.bobOccluderInner - pad, 0);
    if (a >= ro) return 0;
    const front = Math.min(Math.sqrt(ro * ro - a * a), a / Math.tan(edge) + pad / Math.sin(edge));
    const inner = a < ri ? Math.sqrt(ri * ri - a * a) : 0;
    if (front < inner || z - headC[2] < inner) return 0;
    return headC[2] + front + S.clearance;
  }

  const upperSamples = [[0.25, S.limbRadius, null], [0.5, S.limbRadius, null],
    [0.75, S.limbRadius, 0], [1.0, S.limbRadius, S.limbRadius]];
  const foreSamples = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((t) => [t, S.limbRadius, S.limbRadius])
    .concat([[1, S.palmRadius, S.palmRadius]]);
  function clearSegment(a, b, za0, zb0, samples, pinned, headC, headYaw, bobRoll) {
    let za = za0, zb = zb0;
    for (let k = 0; k < 2; k++)
      for (const [t, head, body] of samples) {
        const p = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
        const z = za + (zb - za) * t;
        const need = clearancePoint(p, head, body, headC, headYaw, bobRoll, z);
        if (z >= need) continue;
        if (pinned || t >= 0.5) zb = Math.max(zb, (need - (1 - t) * za) / Math.max(t, 0.05));
        else za = Math.max(za, (need - t * zb) / (1 - t));
      }
    return [za, zb];
  }
  function placeSeg(e, a, b, length) {
    const d = new THREE.Vector3().subVectors(b, a);
    const span = d.length();
    e.position.copy(a).add(b).multiplyScalar(0.5);
    e.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), span > 1e-4 ? d.clone().divideScalar(span) : new THREE.Vector3(0, 1, 0));
    e.scale.set(1, Math.max(span / length, 0.01), 1);
  }
  function applyArm(arm, rig, lift, headC, headYaw, bobRoll, dt) {
    const o = rig.outward;
    const shoulder = new THREE.Vector3(o * S.shoulderX, S.shoulderY + lift, S.shoulderZ);
    const reach = clamp(arm.reach ?? 1, 0.5, 1);
    const lu = S.upperLength * reach, lf = S.forearmLength * reach;
    const a1 = arm.upper, a2 = arm.upper + arm.forearm;
    const e2 = [shoulder.x + o * Math.sin(a1) * lu, shoulder.y - Math.cos(a1) * lu];
    const h2 = [e2[0] + o * Math.sin(a2) * lf, e2[1] - Math.cos(a2) * lf];
    const toward = Math.sqrt(Math.max(0, 1 - reach * reach));
    const s2 = [shoulder.x, shoulder.y];
    const up = clearSegment(s2, e2, shoulder.z, shoulder.z + S.upperLength * toward, upperSamples, true, headC, headYaw, bobRoll);
    const fo = clearSegment(e2, h2, up[1], up[1] + S.forearmLength * toward, foreSamples, false, headC, headYaw, bobRoll);
    stepSpring(rig.elbowDepth, fo[0], dt, 420, 41);
    stepSpring(rig.handDepth, fo[1], dt, 420, 41);
    const elbow = new THREE.Vector3(e2[0], e2[1], rig.elbowDepth.v);
    const hand = new THREE.Vector3(h2[0], h2[1], rig.handDepth.v);
    rig.cap.position.copy(shoulder);
    placeSeg(rig.upper, shoulder, elbow, S.upperLength);
    // The sleeve covers the top of the upper arm, along the same bone.
    const sleeveEnd = shoulder.clone().lerp(elbow, S.sleeveLength);
    placeSeg(rig.sleeve, shoulder, sleeveEnd, S.upperLength * S.sleeveLength);
    rig.elbow.position.copy(elbow);
    placeSeg(rig.fore, elbow, hand, S.forearmLength);
    const along = new THREE.Vector3().subVectors(hand, elbow);
    const handQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0),
      along.length() > 1e-4 ? along.clone().normalize() : new THREE.Vector3(0, -1, 0));
    rig.hand.position.copy(hand);
    rig.hand.quaternion.copy(handQ);
    rig.thumbUpFrame.quaternion.copy(handQ.clone().invert());
    const rate = dt > 0 ? Math.min(1, dt / S.handShapeFade) : 1;
    for (const [k, node] of Object.entries(rig.shapes)) {
      const target = k === (arm.handShape ?? "open") ? 1 : 0;
      rig.weights[k] += (target - rig.weights[k]) * rate;
      node.scale.setScalar(rig.weights[k]); node.visible = rig.weights[k] > 0.01;
    }
    const hw = rig.weights.heart;
    rig.heart.position.copy(hand).add(new THREE.Vector3(0, 0.15, 0.06));
    rig.heart.scale.setScalar(hw); rig.heart.visible = hw > 0.01;
  }

  function apply(pose, dt) {
    const hop = pose.bounce * S.bounceHeight;
    root.position.set(pose.hipShift, pose.rise + hop, 0);
    root.scale.setScalar(pose.depthScale);
    shadow.position.set(0, 0.002 - (pose.rise + hop), 0.02);
    const shrink = 1 - clamp(hop / 0.2, 0, 0.4);
    shadow.scale.set(0.42 * shrink, 0.004, 0.30 * shrink);

    const chestQ = qAxis(pose.chestYaw, [0, 1, 0]).multiply(qAxis(pose.chestRoll, [0, 0, 1]));
    chest.quaternion.copy(chestQ);
    const breathScale = 1 + pose.breath * S.breathAmount;
    belly.scale.set(1, breathScale, 1);
    const lift = (breathScale - 1) * S.neckY;

    // THE NECK IS PINNED to the top of the tee; the head only turns on it.
    neck.position.set(0, S.neckY + lift, 0);
    const g = S.headGain, m = S.maxHeadAngle;
    const yaw = clamp(pose.headYaw * g, -m, m), pitch = clamp(pose.headPitch * g, -m, m), roll = clamp(pose.headRoll * g, -m, m);
    const headWorld = qAxis(yaw, [0, 1, 0]).multiply(qAxis(-pitch, [1, 0, 0])).multiply(qAxis(-roll, [0, 0, 1]));
    const headLocal = chestQ.clone().invert().multiply(headWorld);
    headPivot.quaternion.copy(headLocal);

    applyHair(pose, pitch, roll, dt);
    applyFace(pose);

    const headC = neck.position.clone().add(new THREE.Vector3(0, S.headCenterY, 0).applyQuaternion(headLocal));
    // The head's turn relative to the chest, which turns the bob.
    const headYaw = yaw - pose.chestYaw;
    // The bob's tilt in the picture: the head's, less what it takes back.
    const bobRoll = -roll + swingRoll.v;
    applyArm(pose.screenLeftArm, leftArm, lift, [headC.x, headC.y, headC.z], headYaw, bobRoll, dt);
    applyArm(pose.screenRightArm, rightArm, lift, [headC.x, headC.y, headC.z], headYaw, bobRoll, dt);
  }

  /// The bob takes back part of the head's tilt, late and with a wobble, so it
  /// hangs rather than standing out like a bell when she looks up or tips her
  /// head; a sideways lean flicks it the other way.
  function applyHair(pose, pitch, roll, dt) {
    const leanVelocity = dt > 0 ? clamp((pose.lean - lastLean) / dt, -1.5, 1.5) : 0;
    lastLean = pose.lean;
    // `roll` and `pitch` are already the head's WORLD tilt (the chest's
    // turn is taken back out of the head before it is applied).
    stepSpring(swingRoll, clamp(roll * S.hairHang + leanVelocity * S.hairLeanKick,
                                -S.hairMaxSwing, S.hairMaxSwing), dt, 90, 8);
    stepSpring(swingPitch, clamp(pitch * S.hairHang, -S.hairMaxSwing, S.hairMaxSwing), dt, 90, 8);
    // The head took -roll about z and -pitch about x, so giving some of it
    // back is a positive turn.
    skirtPivot.quaternion.copy(qAxis(swingRoll.v, [0, 0, 1]).multiply(qAxis(swingPitch.v, [1, 0, 0])));
  }

  function applyFace(pose) {
    const gx = pose.gazeX * S.gazeTravelX, gy = pose.gazeY * S.gazeTravelY;
    const happy = Math.max(0, pose.smile), sad = Math.max(0, -pose.smile);
    const joy = smoothstep((pose.smile - S.happyEyeFrom) / (S.happyEyeTo - S.happyEyeFrom));
    for (const [i, eye] of eyes.entries()) {
      const blink = i === 0 ? pose.blinkLeft : pose.blinkRight;
      const brow = i === 0 ? pose.browLeft : pose.browRight;
      const perk = Math.max(0, brow), frown = Math.max(0, -brow);
      place(eye.pivot, eye.x, S.eyeY, 0);
      const size = 1 + perk * S.eyeSurprise;
      // How open the eye is: a blink, a frown's squint, and joy squashing it
      // away under the lash. The eye closes toward its own top-third, which
      // is where the lash comes down to.
      const open = (1 - blink * (1 - S.shutEyeScale)) * (1 - frown * S.eyeAngerSquint) * (1 - joy * (1 - S.shutEyeScale));
      // It closes onto a line a little below its centre, `eyeCloseLine`:
      // the top comes down further than the bottom comes up, as a lid does.
      const [sx, sy, sz] = S.scleraRadii;
      const h = sy * size * open;
      const cy = S.eyeCloseLine * sy * (1 - open);
      eye.sclera.scale.set(sx * size, h, sz);
      eye.sclera.position.set(0, cy - 0.0, 0);
      // The iris and pupil keep inside the sclera: they squash with it and
      // their gaze travel shrinks with it.
      const gyEff = gy * open;
      eye.iris.scale.set(S.irisRadii[0] * size, S.irisRadii[1] * size * open, S.irisRadii[2]);
      eye.iris.position.set(gx * size, cy + gyEff, sz);
      eye.pupil.scale.set(S.pupilRadii[0] * size, S.pupilRadii[1] * size * open, S.pupilRadii[2]);
      eye.pupil.position.set(gx * size, cy + gyEff - 0.006 * open, sz + S.irisRadii[2]);
      const shine = blink < 0.45 && joy < 0.3 && frown < 0.7;
      eye.big.position.set(gx * size + 0.020, cy + gyEff + 0.026 * open, sz + 0.012);
      eye.small.position.set(gx * size - 0.018, cy + gyEff - 0.030 * open, sz + 0.011);
      eye.big.visible = eye.small.visible = shine;
      for (const s of [eye.sclera, eye.iris, eye.pupil]) s.visible = open > 0.12;

      // The lash rides the top edge of the eye. A blink swaps it for the ∪
      // line, sequenced; joy keeps it, so a big smile leaves ^ ^.
      const lashTop = cy + h + S.lashRise;
      eye.lash.position.set(0, lashTop - S.lashArcRadius, sz + 0.004);
      eye.lash.quaternion.copy(qAxis(eye.side * frown * 0.25, [0, 0, 1]));
      const closedIn = smoothstep((blink - 0.60) / 0.20) * (1 - joy);
      const openOut = smoothstep((blink - 0.80) / 0.15) * (1 - joy);
      eye.lash.scale.setScalar(Math.max(0.0001, 1 - openOut));
      eye.lash.visible = openOut < 0.99;
      eye.closed.scale.setScalar(Math.max(0.0001, closedIn));
      eye.closed.position.set(0, cy + S.closedArcRadius - 0.006, sz + 0.004);
      eye.closed.visible = closedIn > 0.01;
    }
    for (const [i, b] of brows.entries()) {
      const v = i === 0 ? pose.browLeft : pose.browRight;
      b.bar.position.set(0, v * S.browTravel, 0.006);
      // Raised lifts the inner end, lowered drops it (cross); sad lifts the
      // inner end too, worried.
      b.bar.quaternion.copy(qAxis(-b.side * (v * S.browTilt + sad * S.sadBrow), [0, 0, 1]));
    }
    for (const c of cheeks) {
      const k = 1 + happy * S.cheekGrow;
      c.scale.set(S.cheekRadii[0] * k, S.cheekRadii[1] * k, S.cheekRadii[2]);
    }
    const open = pose.mouthOpen;
    const flatten = 1 - S.openSmileFlatten * smoothstep(open / 0.4);
    const tilt = pose.smile * S.smileTilt * flatten;
    for (const h of mouthHalves) h.pivot.quaternion.copy(qAxis(h.side * tilt, [0, 0, 1]));
    const half = 0.004 + S.mouthDrop * open;
    const width = 0.040 + S.mouthWiden * open + S.smileWiden * happy;
    cavity.scale.set(width, half, 0.010);
    cavity.position.set(0, 0.004 - half, 0.004);
    cavity.visible = open > 0.03;
    // The line hands over to the opening (a leaf scale, across the bar only).
    const line = mouthLineWeight(open, S.mouthLineGoneAt);
    for (const bar of mouthBars) { bar.scale.set(Math.max(line, 1e-4), 1, Math.max(line, 1e-4)); bar.visible = line > 0.25; }
    // The teeth sit INSIDE the opening's top, never across its edge.
    const centreY = 0.004 - half;
    const toothHalf = Math.min(0.009 * smoothstep((open - 0.12) / 0.2), 0.3 * half);
    const toothY = centreY + 0.88 * half - toothHalf;
    const row = (toothY - centreY) / half;
    const rowHalfWidth = width * Math.sqrt(Math.max(0, 1 - row * row));
    teeth.scale.set(Math.max(1e-4, Math.min(width * 0.72, rowHalfWidth * 0.8)), Math.max(1e-4, toothHalf), 0.006);
    teeth.position.set(0, toothY, 0.009);
    teeth.visible = open > 0.12;
    tongue.position.set(0, 0.004 - half * 1.45, 0.009);
    const tk = Math.min(1, open * 1.6);
    tongue.scale.set(0.024 * tk, 0.012 * tk, 0.006);
    tongue.visible = open > 0.25;
    // The lower lip rides the bottom edge of the opening: tucked under the
    // line when shut, a thin rim below the opening when open.
    const lipDrop = 0.35 + 0.40 * (1 - line);
    lip.position.set(0, 0.004 - 2 * half - S.lipRadii[1] * lipDrop, 0.006);
    lip.scale.set(S.lipRadii[0] * (1 + 0.4 * open + 0.2 * happy), S.lipRadii[1], S.lipRadii[2]);
  }

  return { root, apply, Shape };
}

/// How much of the closed mouth line is still drawn at `open`: all of it with
/// the lips together, none by `goneAt` (PrimitiveChibiBody.mouthLineWeight).
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
    screenLeftArm: { ...arm }, screenRightArm: { ...arm }, time: 0,
  };
}
