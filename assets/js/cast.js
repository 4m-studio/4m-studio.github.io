/* ==========================================================================
   The AvatarTracker cast — Stick and Mika, next to MieMie (assets/js/miemie.js).

   Only the AvatarTracker app page loads this. A switcher under the live stage
   swaps the character on the same canvas: the old one is torn down first, so
   only one is ever drawn, and Mika's layers are downloaded on her first tap.

   - Mika: the same layered engine, rig copied from mika.avatarpkg/avatar.json
     (canvas 1024x1359, half body). MieMie's gesture targets are mapped onto
     her shorter arms; she has no finger-heart drawing, so — as in the app —
     the open hand stands in.
   - Stick: AvatarTracker's StickAvatarRenderer, drawn with lines in its
     dark-mode colours. Its arms follow the app's own gesture intents.
   ========================================================================== */
(function () {
  'use strict';
  var M = window.MieMie;
  if (!M || !M.Character) return;
  var clamp = M.util.clamp, MM = M.miemie;

  /* ---------- Mika (mika.avatarpkg/avatar.json, canvas 1024x1359) ---------- */
  var MIKA = {
    id: 'mika', name: 'Mika', dir: 'mika/', W: 1024, H: 1359,
    L: {
      hairBack:         [512.0, 523.0, 580, 996, 'hair_back'],
      neck:             [512.0, 664.5, 278, 201, 'neck'],
      body:             [512.0, 968.0, 606, 590, 'body'],
      armLeftUpper:     [202.0, 862.0, 364, 308, 'arm_left_upper'],
      armRightUpper:    [822.0, 862.0, 364, 308, 'arm_right_upper'],
      armLeftFore:      [147.0, 1092.5, 242, 309, 'arm_left_fore'],
      armRightFore:     [877.0, 1092.5, 242, 309, 'arm_right_fore'],
      handLeftOpen:     [262.0, 1255.0, 102, 116, 'hand_left_open'],
      handLeftFist:     [248.0, 1237.0, 74, 80, 'hand_left_fist'],
      handLeftPoint:    [262.5, 1255.0, 103, 116, 'hand_left_point'],
      handLeftPeace:    [263.0, 1257.0, 104, 120, 'hand_left_peace'],
      handLeftThumbsUp: [231.0, 1237.0, 108, 80, 'hand_left_thumbsup'],
      handRightOpen:    [762.0, 1255.0, 102, 116, 'hand_right_open'],
      handRightFist:    [776.0, 1237.0, 74, 80, 'hand_right_fist'],
      handRightPoint:   [761.5, 1255.0, 103, 116, 'hand_right_point'],
      handRightPeace:   [761.0, 1257.0, 104, 120, 'hand_right_peace'],
      handRightThumbsUp:[793.0, 1237.0, 108, 80, 'hand_right_thumbsup'],
      face:             [512.5, 360.5, 473, 499, 'face'],
      blush:            [512.5, 482.5, 403, 163, 'blush'],
      nose:             [516.0, 471.5, 32, 41, 'nose'],
      eyeLeft:          [408.5, 406.0, 161, 100, 'eye_left'],
      eyeRight:         [615.5, 405.5, 161, 99, 'eye_right'],
      irisLeft:         [409.0, 412.0, 100, 100, 'iris_left'],
      irisRight:        [616.0, 412.0, 100, 100, 'iris_right'],
      lidLeft:          [395.5, 411.0, 201, 122, 'lid_left'],
      lidRight:         [629.5, 412.0, 201, 122, 'lid_right'],
      browLeft:         [406.5, 337.5, 129, 43, 'brow_left'],
      browRight:        [617.5, 338.0, 129, 42, 'brow_right'],
      mouthNeutral:     [512.0, 543.5, 90, 25, 'mouth_neutral'],
      mouthSmile:       [512.0, 550.5, 136, 53, 'mouth_smile'],
      mouthOpen:        [512.5, 555.0, 117, 82, 'mouth_open'],
      hairFront:        [512.0, 352.0, 524, 588, 'hair_front']
    },
    pivot: [512.0, 569.1],
    aperture: { left: [332.6, 346.3, 151.6, 122.8], right: [539.8, 346.3, 151.6, 122.8] },
    arm: {
      left:  { s: [330.8, 757.6], e: [62.5, 973.5], w: [229.3, 1210.7], out: -1 },
      right: { s: [693.2, 757.6], e: [961.5, 973.5], w: [794.7, 1210.7], out: 1 }
    },
    iris: { x: 22, up: 10, down: 10 },
    hands: ['Open', 'Fist', 'Point', 'Peace', 'ThumbsUp'], rest: 'Open',
    eyeMask: false,
    hairY: 120, bodyPivot: [512, 1300],
    box: [-200, -200, 1224, 1359],
    // Same aspect as MieMie's crop (1700 / 1244), so the stage never resizes; she
    // stands a little lower so her waist meets the frame's floor fade.
    crop: [-113, -73, 1250, 1708.2],
    frameTop: 610, lookY: 410,
    brow: 26, lidDrop: 44, mouthDrop: 13,   // the package's own pose travel (browLeft dy, blinkLeft dy, mouthOpen dy)
    fade: [1215, 1352],                     // she is cut at the waist: dissolve it into the frame
    adapt: function (p) {
      // MieMie's wrist targets, re-anchored at Mika's shoulders and scaled to
      // her arm length (634 vs 769 px).
      var k = 0.824;
      ['L', 'R'].forEach(function (c) {
        if (!p[c]) return;
        var from = MM.arm[c === 'L' ? 'left' : 'right'].s, to = MIKA.arm[c === 'L' ? 'left' : 'right'].s;
        p[c] = [to[0] + (p[c][0] - from[0]) * k, to[1] + (p[c][1] - from[1]) * k];
      });
      return p;
    }
  };
  MIKA.adapt = (function (base) {
    // A few poses need their own targets: her head is large for her arms, so
    // "over the head" and "beside the cheek" sit in different places.
    var own = {
      wave: function (p, t) { var s = Math.sin(t * 9); p.L = [80 + s * 22, 420]; p.Lr = -6 + s * 14; return p; },
      heart: function (p, t) { p.R = [930, 470 - Math.max(0, Math.sin(t * 6)) * 10]; p.Rr = -8; return p; },
      bigheart: function (p, t) { var b = Math.sin(t * 5) * 8; p.L = [150, 250 + b]; p.R = [874, 250 + b]; p.Lr = 20; p.Rr = -20; return p; },
      peace: function (p, t) { p.R = [940, 430]; p.Rr = -4 + Math.sin(t * 5) * 4; return p; },
      thumbs: function (p, t) { p.L = [130, 600 - Math.max(0, Math.sin(t * 6)) * 12]; p.Lr = 180; return p; }
    };
    return function (p, name, t) { return own[name] ? own[name](p, t) : base(p); };
  })(MIKA.adapt);

  /* ---------- Stick (StickAvatarRenderer, on a 1000-wide artboard) ---------- */
  // Proportions are the app's: head 0.45 w at 0.15 h, body to 0.70 h,
  // arms 0.30 w, shoulders ±0.09 w, legs (0.15, 0.28) w, line 0.026 w.
  var SW = 1000, SH = 1366.6;
  var G = {
    hs: 0.45 * SW, headY: 0.15 * SH, bodyEnd: 0.70 * SH,
    arm: 0.30 * SW, shoulder: 0.09 * SW, lw: 0.026 * SW,
    legRest: Math.atan2(0.15, 0.28), leg: Math.hypot(0.15, 0.28) * SW
  };
  G.neck = G.headY + G.hs;
  G.shY = G.neck + (G.bodyEnd - G.neck) * 0.25;
  // Arm targets in arm lengths from the shoulder: [outward, down]; rest is the app's 45°.
  var REST = [Math.SQRT1_2, Math.SQRT1_2];
  // The app's gesture intents (AvatarAction.posePlan), read as stick-figure arm positions.
  var STICK_POSES = {
    // His head is wide for his arms, so raised hands go out to the side, clear of the face.
    wave: function (t) { var s = Math.sin(t * 9); return { L: [0.86 + s * 0.08, -0.42 - s * 0.06] }; },
    heart: function (t) { return { R: [0.8, -0.48 - Math.max(0, Math.sin(t * 6)) * 0.05], heart: 1 }; },
    bigheart: function (t) { var b = Math.sin(t * 5) * 0.03; return { L: [0.72, -0.66 + b], R: [0.72, -0.66 + b], big: 1 }; },
    peace: function (t) { return { R: [0.86, -0.44 + Math.sin(t * 5) * 0.03] }; },
    thumbs: function (t) { return { L: [0.62, -0.25 - Math.max(0, Math.sin(t * 6)) * 0.06] }; },
    clap: function (t) { var g = Math.abs(Math.sin(t * 8)) * 0.24; return { L: [-0.28 + g, 0.5], R: [-0.28 + g, 0.5] }; },
    dance: function (t) { var u = (Math.sin(t * 3.4) + 1) / 2; return { L: [0.6 + u * 0.25, 0.7 - u * 1.15], R: [0.85 - u * 0.25, -0.45 + u * 1.15] }; },
    surprised: function () { return { L: [0.9, 0.2], R: [0.9, 0.2] }; },
    shy: function () { return { L: [-0.2, 0.8], R: [-0.2, 0.8] }; }
  };
  var STICK = {
    id: 'stick', name: 'Stick', W: SW, H: SH,
    box: [-260, -40, SW + 260, SH],
    crop: [-50, 40, 1100, 1503.2],       // same aspect as MieMie's crop, feet just above the floor fade
    frameTop: G.neck, lookY: G.headY + G.hs * 0.4, lookX: SW / 2, pivot: [SW / 2, G.neck],
    ink: '#f3f1ff', fill: '#14141c',     // label / systemBackground in dark mode
    build: function (self) { self.stick = { heart: 0, big: 0 }; },
    springs: function (sp) {
      sp('LX', REST[0], 150, 21); sp('LY', REST[1], 150, 21);
      sp('RX', REST[0], 150, 21); sp('RY', REST[1], 150, 21);
      sp('heart', 0, 120, 18);
    },
    adapt: function (p, name, t) {
      var a = STICK_POSES[name] ? STICK_POSES[name](t) : {};
      p.L = a.L || null; p.R = a.R || null; p.heart = a.heart || 0; p.big = a.big || 0;
      return p;
    },
    targets: function (self, p) {
      var S = self.s, l = p.L || REST, r = p.R || REST;
      S.LX.t = l[0]; S.LY.t = l[1]; S.RX.t = r[0]; S.RY.t = r[1];
      S.heart.t = p.heart || p.big ? 1 : 0;
      self.stick.big = p.big ? 1 : (p.heart ? 0 : self.stick.big);
    },
    paint: function (self) { paintStick(self); }
  };

  function arm(sx, sy, out, tx, ty) {
    // 2-bone IK with equal halves; the elbow bends outward, away from the body.
    var h = G.arm / 2, X = sx + out * tx * G.arm, Y = sy + ty * G.arm;
    var d = Math.min(Math.hypot(X - sx, Y - sy), G.arm - 0.5), base = Math.atan2(Y - sy, X - sx);
    var a = Math.acos(Math.min(1, d / (2 * h))), u = base - out * a;
    var ex = sx + Math.cos(u) * h, ey = sy + Math.sin(u) * h, f = Math.atan2(Y - ey, X - ex);
    return [[sx, sy], [ex, ey], [ex + Math.cos(f) * h, ey + Math.sin(f) * h]];
  }
  function heartPath(c, x, y, w) {
    var h = w * 0.9, l = x - w / 2, t = y - h / 2;
    c.beginPath();
    c.moveTo(x, t + h);
    c.bezierCurveTo(x, t + h * 0.7, l, t + h * 0.7, l, t + h * 0.3);
    c.arc(l + w * 0.25, t + h * 0.3, w * 0.25, Math.PI, 0);
    c.arc(l + w * 0.75, t + h * 0.3, w * 0.25, Math.PI, 0);
    c.bezierCurveTo(l + w, t + h * 0.7, x, t + h * 0.7, x, t + h);
    c.closePath();
  }

  function paintStick(self) {
    var S = self.s, rig = self.rig, c = rig.ctx, k = rig.k, b = rig.box, d = STICK;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, rig.canvas.width, rig.canvas.height);
    c.setTransform(k, 0, 0, k, -b[0] * k, -b[1] * k);
    var lx = S.lookX.x, ly = S.lookY.x, breath = self.breath || 0;
    var cx = SW / 2, hs = G.hs, lw = G.lw;
    c.strokeStyle = d.ink; c.fillStyle = d.fill; c.lineWidth = lw; c.lineCap = 'round'; c.lineJoin = 'round';
    function line(pts) { c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); for (var i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]); c.stroke(); }

    c.save();
    // Whole figure: bounce, breath and sway about the hips.
    c.translate(0, S.bounce.x + breath * 3);
    c.translate(cx, G.bodyEnd); c.rotate(S.sway.x * Math.PI / 180); c.translate(-cx, -G.bodyEnd);

    var lean = lx * 0.035 * SW;
    line([[cx, G.neck], [cx, G.bodyEnd]]);
    [-1, 1].forEach(function (o) {
      line([[cx, G.bodyEnd], [cx + o * Math.sin(G.legRest) * G.leg, G.bodyEnd + Math.cos(G.legRest) * G.leg]]);
    });
    var sm = [cx + lean * 0.5, G.shY];
    var lS = [sm[0] - G.shoulder, sm[1]], rS = [sm[0] + G.shoulder, sm[1]];
    line([lS, rS]);
    var swing = breath * 0.02;
    var L = arm(lS[0], lS[1], -1, S.LX.x + swing, S.LY.x), R = arm(rS[0], rS[1], 1, S.RX.x + swing, S.RY.x);
    var headBottom = G.neck;
    var lFront = L[2][1] < headBottom, rFront = R[2][1] < headBottom;
    if (!lFront) line(L);
    if (!rFront) line(R);

    // Head: rolls about the neck and leans with the look.
    c.save();
    c.translate(cx, G.neck); c.rotate((S.roll.x + lx * 5) * 0.6 * Math.PI / 180); c.translate(-cx, -G.neck);
    c.translate(lean, ly * 10 - breath * 2);
    var hy = G.headY, hc = hy + hs / 2;
    c.beginPath(); c.arc(cx, hc, hs / 2, 0, Math.PI * 2); c.fill(); c.stroke();
    // Face
    var eyeY = hy + hs * 0.4 + ly * hs * 0.03, eo = hs * 0.15, eh = hs * 0.12, gx = lx * hs * 0.05;
    var blinkL = S.lidL.x > 0.5, blinkR = S.lidR.x > 0.5;
    c.beginPath();
    [[cx - eo + gx, blinkL], [cx + eo + gx, blinkR]].forEach(function (e) {
      if (e[1]) { c.moveTo(e[0] - eh / 2, eyeY); c.lineTo(e[0] + eh / 2, eyeY); }
      else { c.moveTo(e[0], eyeY - eh / 2); c.lineTo(e[0], eyeY + eh / 2); }
    });
    c.stroke();
    var bv = S.brow.x;
    if (Math.abs(bv) > 0.15) {
      c.lineWidth = lw * 0.8;
      [[cx - eo + gx, 1], [cx + eo + gx, -1]].forEach(function (e) {
        var by = eyeY - hs * 0.13 - bv * hs * 0.05, hw = hs * 0.075;
        c.beginPath(); c.moveTo(e[0] - hw, by + e[1] * bv * hw * 0.25); c.lineTo(e[0] + hw, by - e[1] * bv * hw * 0.25); c.stroke();
      });
      c.lineWidth = lw;
    }
    var my = hy + hs * 0.75, mw = hs * 0.3, op = clamp(S.open.x, 0, 1), smile = S.smile.x + 0.3;
    c.beginPath();
    if (op > 0.2) { var rr = mw * 0.4 + op * hs * 0.08; c.ellipse(cx, my - rr * 0.25, rr * 0.82, rr, 0, 0, Math.PI * 2); }
    else if (smile > 0.1) { var r1 = mw * 0.6; c.arc(cx, my - r1 * 0.7, r1, Math.PI * 0.25, Math.PI * 0.75); }
    else { c.moveTo(cx - mw / 2, my); c.lineTo(cx + mw / 2, my); }
    c.stroke();
    c.restore();

    if (lFront) line(L);
    if (rFront) line(R);

    // The app draws a heart at the hand for 🫶; for 💗 a big one over the head.
    var hv = clamp(S.heart.x, 0, 1.2);
    if (hv > 0.05) {
      var big = self.stick.big, w = (big ? hs * 0.5 : hs * 0.42) * hv;
      var px = big ? cx : R[2][0] + w * 0.3, py = big ? G.headY - w * 0.3 : R[2][1] - w * 0.45;
      c.save(); c.translate(px, py); c.rotate(big ? 0 : -0.2); c.translate(-px, -py);
      heartPath(c, px, py, w);
      c.fillStyle = '#ff6fb1'; c.fill(); c.lineWidth = lw * 0.8; c.stroke();
      c.restore();
    }
    c.restore();
  }

  var DEFS = { stick: STICK, miemie: MM, mika: MIKA };

  /* ---------- Switcher ---------- */
  function init() {
    document.querySelectorAll('[data-cast]').forEach(function (bar) {
      var root = bar.closest('[data-miemie]');
      if (!root) return;
      var stage = root.querySelector('.mm-stage'), actions = root.querySelector('.mm-actions');
      var labels = { stage: stage && stage.getAttribute('aria-label'), actions: actions && actions.getAttribute('aria-label') };
      var buttons = bar.querySelectorAll('[data-char]');
      function select(id) {
        var cur = root.__miemie, def = DEFS[id];
        if (!def || (cur && cur.def.id === id)) return;
        if (cur) cur.destroy();
        // A short fade-in for the newcomer, and the frame glides to its chin line.
        root.classList.remove('is-swapping'); void root.offsetWidth; root.classList.add('is-swapping');
        clearTimeout(root.__swapT);
        root.__swapT = setTimeout(function () { root.classList.remove('is-swapping'); }, 500);
        root.__miemie = new M.Character(root, def);
        root.setAttribute('data-char', id);
        buttons.forEach(function (b) { b.setAttribute('aria-checked', String(b.getAttribute('data-char') === id)); });
        var name = def.name || 'MieMie';
        if (stage && labels.stage) stage.setAttribute('aria-label', labels.stage.split('MieMie').join(name));
        if (actions && labels.actions) actions.setAttribute('aria-label', labels.actions.split('MieMie').join(name));
      }
      buttons.forEach(function (b) {
        b.addEventListener('click', function () { select(b.getAttribute('data-char')); });
      });
      // Arrow keys move between characters, as in any radio group.
      bar.addEventListener('keydown', function (e) {
        var list = Array.prototype.slice.call(buttons), i = list.indexOf(document.activeElement);
        if (i < 0 || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
        e.preventDefault();
        var n = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
        n.focus(); n.click();
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
