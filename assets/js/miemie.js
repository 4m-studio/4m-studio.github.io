/* ==========================================================================
   MieMie — a live, layered 2D character for the AvatarTracker card.

   A small web port of AvatarTracker's Layered2DAvatarRenderer, driven by the
   same MieMie.avatarpkg rig: the layer rectangles, head pivot, eye apertures
   and arm skeleton below are copied from its avatar.json (canvas 1024x1920).

   - She looks at the pointer (head, face parallax, irises clipped to the eye).
   - Blinks on her own; hair lags behind the head a little.
   - Click / tap / Enter to cycle through preset gestures; the action row
     triggers a specific one. Arms are placed by 2-bone IK from wrist targets.

   No dependencies. Respects prefers-reduced-motion (no idle motion, gestures
   jump to their key pose). Pauses its animation loop when off screen.
   ========================================================================== */
(function () {
  'use strict';

  var W = 1024, H = 1920;

  /* ---------- Rig (from MieMie.avatarpkg/avatar.json, in canvas px) ---------- */
  var L = {
    hairBack:        [517.2, 448.2, 679, 705,  'hair_back'],
    neck:            [515.1, 727.5, 207, 244,  'neck'],
    body:            [516.3, 1231.1, 679, 1030, 'body'],
    armLeftUpper:    [262.1, 1000.9, 233, 561, 'arm_left_upper'],
    armRightUpper:   [766.5, 1001.3, 238, 566, 'arm_right_upper'],
    armLeftFore:     [172.7, 1377.8, 192, 466, 'arm_left_fore'],
    armRightFore:    [854.6, 1372.0, 188, 448, 'arm_right_fore'],
    handLeftRest:    [102.2, 1673.4, 126, 324, 'hand_left_rest'],
    handLeftOpen:    [101.2, 1616.0, 164, 218, 'hand_left_open'],
    handLeftFist:    [103.6, 1580.0, 137, 145, 'hand_left_fist'],
    handLeftPoint:   [90.4,  1606.6, 150, 200, 'hand_left_point'],
    handLeftPeace:   [96.4,  1613.3, 138, 211, 'hand_left_peace'],
    handLeftThumbsUp:[128.8, 1606.6, 152, 197, 'hand_left_thumbs_up'],
    handLeftHeart:   [113.7, 1603.3, 107, 189, 'hand_left_heart'],
    handRightRest:   [925.5, 1668.3, 126, 344, 'hand_right_rest'],
    handRightOpen:   [923.0, 1598.3, 166, 211, 'hand_right_open'],
    handRightFist:   [917.3, 1563.2, 134, 141, 'hand_right_fist'],
    handRightPoint:  [932.9, 1594.7, 150, 206, 'hand_right_point'],
    handRightPeace:  [927.1, 1600.4, 138, 214, 'hand_right_peace'],
    handRightThumbsUp:[897.1, 1588.2, 143, 192, 'hand_right_thumbs_up'],
    handRightHeart:  [909.6, 1582.4, 107, 180, 'hand_right_heart'],
    face:            [514.1, 482.5, 400, 522,  'face'],
    blush:           [521.9, 452.7, 319, 138,  'blush'],
    nose:            [514.0, 488.2, 39, 40,    'nose'],
    eyeLeft:         [425.0, 414.5, 108, 68,   'eye_left'],
    eyeRight:        [607.5, 415.1, 109, 69,   'eye_right'],
    irisLeft:        [435.0, 417.1, 46, 47,    'iris_left'],
    irisRight:       [596.1, 417.6, 46, 48,    'iris_right'],
    lidLeft:         [427.6, 400.3, 110, 66,   'lid_left'],
    lidRight:        [606.2, 400.8, 112, 66,   'lid_right'],
    browLeft:        [435.7, 370.9, 113, 27,   'brow_left'],
    browRight:       [602.8, 365.8, 114, 28,   'brow_right'],
    mouthNeutral:    [517.1, 549.7, 118, 55,   'mouth_neutral'],
    mouthSmile:      [515.8, 557.1, 130, 67,   'mouth_smile'],
    mouthOpen:       [515.9, 559.3, 119, 77,   'mouth_open'],
    hairFront:       [540.8, 439.2, 635, 719,  'hair_front']
  };
  var HEAD_PIVOT = [516.1, 734.4];
  var APERTURE = {
    left:  [371.0, 380.4, 108.3, 68.2],
    right: [553.0, 380.7, 109.2, 68.5]
  };
  var ARM = {
    left:  { s: [322.2, 819.5], e: [210.2, 1210.5], w: [113.3, 1559.4], out: -1 },
    right: { s: [709.9, 819.5], e: [819.8, 1213.7], w: [911.4, 1544.3], out: 1 }
  };
  var HANDS = ['Rest', 'Open', 'Fist', 'Point', 'Peace', 'ThumbsUp', 'Heart'];

  var DEG = 180 / Math.PI;
  function ang(a, b) { return Math.atan2(b[1] - a[1], b[0] - a[0]) * DEG; }
  function dist(a, b) { return Math.hypot(b[0] - a[0], b[1] - a[1]); }
  function wrap(d) { while (d > 180) d -= 360; while (d <= -180) d += 360; return d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function band(v, a, b) { var t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }

  Object.keys(ARM).forEach(function (k) {
    var a = ARM[k];
    a.l1 = dist(a.s, a.e); a.l2 = dist(a.e, a.w);
    a.restU = ang(a.s, a.e); a.restF = ang(a.e, a.w);
  });

  /* Two-bone IK: wrist target -> local rotations (deg) of upper arm and forearm.
     The elbow always bends outward, away from the body. */
  function ik(side, tx, ty) {
    var a = ARM[side];
    var d = clamp(dist(a.s, [tx, ty]), Math.abs(a.l1 - a.l2) + 2, a.l1 + a.l2 - 2);
    var base = Math.atan2(ty - a.s[1], tx - a.s[0]);
    var alpha = Math.acos(clamp((a.l1 * a.l1 + d * d - a.l2 * a.l2) / (2 * a.l1 * d), -1, 1));
    var best = null;
    [1, -1].forEach(function (sgn) {
      var u = base + sgn * alpha;
      var ex = a.s[0] + Math.cos(u) * a.l1, ey = a.s[1] + Math.sin(u) * a.l1;
      var score = ex * a.out + ey * 0.9;  // outward and low, like a relaxed elbow
      if (!best || score > best.score) best = { score: score, u: u, ex: ex, ey: ey };
    });
    var fWorld = Math.atan2(ty - best.ey, tx - best.ex) * DEG;
    var du = wrap(best.u * DEG - a.restU);
    var df = wrap(fWorld - a.restF - du);
    return { u: du, f: df };
  }

  /* ---------- Springs ---------- */
  function Spring(v, k, c) { this.x = v; this.v = 0; this.t = v; this.k = k; this.c = c; }
  Spring.prototype.step = function (dt) {
    var a = (this.t - this.x) * this.k - this.v * this.c;
    this.v += a * dt; this.x += this.v * dt;
  };
  Spring.prototype.snap = function () { this.x = this.t; this.v = 0; };

  /* ---------- Gestures ----------
     Each returns targets for time t (seconds since start). Arms are given as
     wrist positions in canvas px; `hand*` picks the hand drawing. */
  var GESTURES = {
    wave: {
      label: 'Hi there!', emoji: '👋', dur: 2.6,
      pose: function (t) {
        var s = Math.sin(t * 9);
        return { L: [170 + s * 26, 560], Lh: 'Open', Lr: -8 + s * 16,
                 smile: 1, open: t < 1.2 ? 0.8 : 0, roll: -4, brow: 0.5, lookX: -0.25 };
      }
    },
    heart: {
      label: 'Love you!', emoji: '🫶', dur: 2.6,
      pose: function (t) {
        // Finger heart beside the cheek. The wrist sits out at shoulder height
        // so the IK keeps the elbow DOWN and the forearm points up; closer in,
        // MieMie's long arms can only fold with the elbow up (upside down).
        return { R: [868, 800 - Math.max(0, Math.sin(t * 6)) * 12], Rh: 'Heart', Rr: -14,
                 smile: 1, winkL: t > 0.35 && t < 2.1 ? 1 : 0, blush: 1, roll: 5, lookX: 0.1 };
      }
    },
    bigheart: {
      label: 'Big love!', emoji: '💗', dur: 2.8,
      pose: function (t) {
        // Both arms overhead, hands meeting on top of the head.
        var b = Math.sin(t * 5) * 8;
        return { L: [452, 190 + b], R: [580, 190 + b], Lh: 'Open', Rh: 'Open', Lr: 28, Rr: -28,
                 smile: 1, open: 0.35, blush: 1, roll: Math.sin(t * 2.6) * 3, lookY: -0.05 };
      }
    },
    peace: {
      label: 'Peace ✌️', emoji: '✌️', dur: 2.4,
      pose: function (t) {
        return { R: [812, 480], Rh: 'Peace', Rr: -4 + Math.sin(t * 5) * 4,
                 smile: 1, roll: 6, lookX: 0.15, brow: 0.3 };
      }
    },
    thumbs: {
      label: 'Nice work!', emoji: '👍', dur: 2.2,
      pose: function (t) {
        var b = Math.max(0, Math.sin(t * 6)) * 14;
        return { L: [300, 1010 - b], Lh: 'ThumbsUp', Lr: 0,
                 smile: 1, brow: 0.4, roll: -3 };
      }
    },
    clap: {
      label: 'Yay!', emoji: '👏', dur: 2.4,
      pose: function (t) {
        var g = Math.abs(Math.sin(t * 8)) * 70;
        return { L: [452 - g, 1000], R: [572 + g, 1000], Lh: 'Open', Rh: 'Open', Lr: -40, Rr: 40,
                 smile: 1, open: 0.6, bounce: Math.abs(Math.sin(t * 8)) * 8 };
      }
    },
    dance: {
      label: 'Dance time!', emoji: '💃', dur: 3.6,
      pose: function (t) {
        var s = Math.sin(t * 3.4), u = (s + 1) / 2;   // 0..1, one arm up while the other is down
        return { L: [270 - u * 60, 1180 - u * 620], R: [760 + (1 - u) * 60, 1180 - (1 - u) * 620],
                 Lh: 'Fist', Rh: 'Fist', sway: s * 5, roll: -s * 6,
                 bounce: Math.abs(Math.sin(t * 6.8)) * 16, smile: 1, open: 0.4, lookX: s * 0.4 };
      }
    },
    surprised: {
      label: 'Oh!', emoji: '✨', dur: 1.8,
      pose: function (t) {
        return { open: 1, brow: 1, bounce: t < 0.4 ? 30 : 0, lookY: -0.2,
                 L: [260, 1260], R: [770, 1260], Lh: 'Open', Rh: 'Open' };
      }
    },
    shy: {
      label: 'Hehe…', emoji: '😳', dur: 2.4,
      pose: function () {
        return { blush: 1, smile: 0.8, roll: 7, lookX: 0.55, lookY: 0.45, brow: -0.2, hold: true };
      }
    }
  };
  var ORDER = ['wave', 'heart', 'peace', 'bigheart', 'thumbs', 'clap', 'dance', 'surprised', 'shy'];
  var LABELS = {
    zh: { wave: '嗨～你好！', heart: '比心～', bigheart: '爱你哟！', peace: '耶 ✌️', thumbs: '真棒！',
          clap: '好耶！', dance: '一起跳舞！', surprised: '哇！', shy: '嘿嘿…' }
  };
  function label(name, g) {
    var lang = (document.documentElement.lang || 'en').slice(0, 2);
    return (LABELS[lang] && LABELS[lang][name]) || g.label;
  }

  /* ---------- Build ---------- */
  function el(tag, cls, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }
  function layer(id, parent, base) {
    var d = L[id], img = el('img', 'mm-l', parent);
    img.src = base + d[4] + '.webp';
    img.alt = ''; img.draggable = false; img.decoding = 'async';
    img.style.cssText = 'left:' + (d[0] - d[2] / 2) + 'px;top:' + (d[1] - d[3] / 2) +
      'px;width:' + d[2] + 'px;height:' + d[3] + 'px';
    return img;
  }
  function group(cls, parent, ox, oy) {
    var g = el('div', 'mm-g ' + (cls || ''), parent);
    if (ox != null) g.style.transformOrigin = ox + 'px ' + oy + 'px';
    return g;
  }

  function MieMie(root) {
    var base = root.getAttribute('data-src') || 'assets/img/miemie/';
    var self = this;
    this.root = root;
    this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var stage = root.querySelector('.mm-stage');
    var fig = el('div', 'mm-fig', stage);
    this.stage = stage; this.fig = fig;

    var body = group('mm-body', fig, 512, 1560);
    var headBack = group('mm-head', body, HEAD_PIVOT[0], HEAD_PIVOT[1]);
    var hairBackG = group('', headBack, HEAD_PIVOT[0], 250);
    layer('hairBack', hairBackG, base);
    layer('neck', body, base).style.zIndex = 10;
    var torso = group('', body); torso.style.zIndex = 20;
    layer('body', torso, base);

    this.arms = {};
    ['left', 'right'].forEach(function (side) {
      var A = ARM[side], cap = side === 'left' ? 'Left' : 'Right';
      var wrapG = group('mm-arm', body); wrapG.style.zIndex = 25;
      var up = group('', wrapG, A.s[0], A.s[1]);
      layer('arm' + cap + 'Upper', up, base);
      var fo = group('', up, A.e[0], A.e[1]);
      layer('arm' + cap + 'Fore', fo, base);
      var ha = group('', fo, A.w[0], A.w[1]);
      var hands = {};
      HANDS.forEach(function (h) {
        hands[h] = layer('hand' + cap + h, ha, base);
        hands[h].style.opacity = h === 'Rest' ? 1 : 0;
      });
      self.arms[side] = { wrap: wrapG, up: up, fo: fo, ha: ha, hands: hands, shape: 'Rest' };
    });

    var head = group('mm-head', body, HEAD_PIVOT[0], HEAD_PIVOT[1]);
    head.style.zIndex = 30;
    var faceG = group('', head);
    layer('face', faceG, base);
    var feat = group('', head);
    var blush = layer('blush', feat, base);
    layer('nose', feat, base);

    function eye(side) {
      var cap = side === 'left' ? 'Left' : 'Right', ap = APERTURE[side];
      var g = group('', feat);
      layer('eye' + cap, g, base);
      var clip = group('', g);
      clip.style.clipPath = 'ellipse(' + (ap[2] / 2 - 3) + 'px ' + (ap[3] / 2 - 2) + 'px at ' +
        (ap[0] + ap[2] / 2) + 'px ' + (ap[1] + ap[3] / 2) + 'px)';
      var iris = layer('iris' + cap, clip, base);
      var lid = layer('lid' + cap, feat, base);
      var brow = layer('brow' + cap, feat, base);
      return { g: g, iris: iris, lid: lid, brow: brow };
    }
    this.eyes = { left: eye('left'), right: eye('right') };
    this.mouth = {
      neutral: layer('mouthNeutral', feat, base),
      smile: layer('mouthSmile', feat, base),
      open: layer('mouthOpen', feat, base)
    };
    var hairFrontG = group('', head, HEAD_PIVOT[0], 250);
    layer('hairFront', hairFrontG, base);

    this.n = { body: body, head: head, headBack: headBack, face: faceG, feat: feat, blush: blush,
               hairF: hairFrontG, hairB: hairBackG };

    /* springs */
    var S = this.s = {};
    function sp(name, v, k, c) { S[name] = new Spring(v, k, c); }
    sp('lookX', 0, 70, 14); sp('lookY', 0, 70, 14);
    sp('roll', 0, 90, 16); sp('sway', 0, 80, 14); sp('bounce', 0, 260, 22);
    sp('hair', 0, 55, 7);
    sp('smile', 0, 60, 14); sp('open', 0, 70, 15); sp('blush', 0.55, 30, 11);
    sp('brow', 0, 80, 15); sp('lidL', 0, 400, 40); sp('lidR', 0, 400, 40);
    ['LU', 'LF', 'LH', 'RU', 'RF', 'RH'].forEach(function (k) { sp(k, 0, 150, 21); });

    this.pointer = null;      // {x, y} in client px
    this.lastPointer = 0;
    this.idle = { x: 0, y: 0, next: 0 };
    this.blink = { next: 2 + Math.random() * 2, t: -1 };
    this.gesture = null;
    this.idx = 0;
    this.time = 0;
    this.visible = true;

    this.bubble = root.querySelector('.mm-bubble');
    this.frame = root.querySelector('.mm-frame');
    this.frameTop = parseFloat(root.getAttribute('data-frame-top') || '640');
    this.layout();
    this.bind();
    this.render(0);
  }

  MieMie.prototype.layout = function () {
    // Crop of the canvas that the stage shows (canvas px). Arms can reach a
    // little outside it; the stage does not clip them.
    var cx0 = -110, cy0 = 60, cw = 1244, ch = 1700;
    var r = this.stage.getBoundingClientRect();
    var sc = r.width / cw;
    this.stage.style.height = (ch * sc) + 'px';
    // The frame (her "screen") starts at chin height, so the head and any
    // raised arm break out over its top edge.
    if (this.frame) this.frame.style.top = ((this.frameTop - cy0) * sc) + 'px';
    this.fig.style.transform = 'translate(' + (-cx0 * sc) + 'px,' + (-cy0 * sc) + 'px) scale(' + sc + ')';
    this.scale = sc; this.crop = [cx0, cy0];
  };

  MieMie.prototype.bind = function () {
    var self = this;
    function look(e) {
      self.pointer = { x: e.clientX, y: e.clientY };
      self.lastPointer = self.time;
      self.wake();
    }
    window.addEventListener('pointermove', look, { passive: true });
    window.addEventListener('pointerdown', look, { passive: true });
    // Touch screens have no hover: say so in the hint.
    var hint = this.root.querySelector('.mm-hint');
    if (hint && !window.matchMedia('(hover: hover)').matches) {
      hint.textContent = this.root.getAttribute('data-hint-touch') || 'Touch anywhere — she looks. Tap her for a move.';
    }
    window.addEventListener('resize', function () { self.layout(); self.wake(); }, { passive: true });

    this.stage.addEventListener('click', function () { self.next(); });
    this.stage.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); self.next(); }
    });
    this.root.querySelectorAll('[data-gesture]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        self.play(b.getAttribute('data-gesture'));
      });
    });

    if ('IntersectionObserver' in window) {
      var greeted = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          self.visible = en.isIntersecting;
          if (en.isIntersecting) {
            self.wake();
            if (!greeted && en.intersectionRatio > 0.5) {
              greeted = true;
              setTimeout(function () { if (!self.gesture) self.play('wave'); }, 500);
            }
          }
        });
      }, { threshold: [0, 0.5] }).observe(this.stage);
    }
    this.wake();
  };

  MieMie.prototype.next = function () {
    this.play(ORDER[this.idx % ORDER.length]);
    this.idx++;
  };

  MieMie.prototype.play = function (name) {
    var g = GESTURES[name];
    if (!g) return;
    this.gesture = { name: name, g: g, t: 0 };
    this.root.setAttribute('data-playing', name);
    this.root.querySelectorAll('[data-gesture]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-gesture') === name));
    });
    if (this.bubble) {
      this.bubble.textContent = label(name, g);
      this.bubble.classList.remove('is-on');
      void this.bubble.offsetWidth;
      this.bubble.classList.add('is-on');
    }
    if (this.reduce) {
      // Jump to the key pose instead of animating into it.
      this.applyTargets(g.pose(g.dur * 0.45));
      var S = this.s;
      Object.keys(S).forEach(function (k) { S[k].snap(); });
      this.render(0);
      var self = this;
      clearTimeout(this.reduceTimer);
      this.reduceTimer = setTimeout(function () { self.gesture = null; self.applyTargets({});
        Object.keys(S).forEach(function (k) { S[k].snap(); }); self.render(0); self.clearPlaying(); }, g.dur * 1000);
      return;
    }
    this.wake();
  };

  MieMie.prototype.clearPlaying = function () {
    this.root.removeAttribute('data-playing');
    this.root.querySelectorAll('[data-gesture]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    if (this.bubble) this.bubble.classList.remove('is-on');
  };

  MieMie.prototype.wake = function () {
    if (this.raf || !this.visible) return;
    var self = this, last = performance.now();
    function loop(now) {
      var dt = Math.min((now - last) / 1000, 1 / 30); last = now;
      self.raf = null;
      self.tick(dt);
      if (self.visible && (!self.reduce || self.gesture)) self.raf = requestAnimationFrame(loop);
    }
    this.raf = requestAnimationFrame(loop);
  };

  MieMie.prototype.setHand = function (side, shape) {
    var arm = this.arms[side];
    if (arm.shape === shape) return;
    arm.hands[arm.shape].style.opacity = 0;
    arm.hands[shape].style.opacity = 1;
    arm.shape = shape;
  };

  MieMie.prototype.applyTargets = function (p) {
    var S = this.s;
    var l = p.L ? ik('left', p.L[0], p.L[1]) : { u: 0, f: 0 };
    var r = p.R ? ik('right', p.R[0], p.R[1]) : { u: 0, f: 0 };
    S.LU.t = l.u; S.LF.t = l.f; S.LH.t = p.Lr || 0;
    S.RU.t = r.u; S.RF.t = r.f; S.RH.t = p.Rr || 0;
    this.setHand('left', p.Lh || 'Rest');
    this.setHand('right', p.Rh || 'Rest');
    // Raised arms pass in front of the hair and face.
    this.arms.left.wrap.style.zIndex = p.L ? 120 : 25;
    this.arms.right.wrap.style.zIndex = p.R ? 120 : 25;
    S.smile.t = p.smile || 0; S.open.t = p.open || 0;
    S.blush.t = p.blush != null ? p.blush : 0.55;
    S.brow.t = p.brow || 0;
    S.roll.t = p.roll || 0; S.sway.t = p.sway || 0; S.bounce.t = -(p.bounce || 0);
    this.poseLook = (p.lookX != null || p.lookY != null) ? [p.lookX || 0, p.lookY || 0, p.hold] : null;
    this.poseWinkL = p.winkL || 0;
    S.lidL.t = this.poseWinkL; S.lidR.t = 0;
  };

  MieMie.prototype.tick = function (dt) {
    var S = this.s, self = this;
    this.time += dt;

    // Gesture timeline
    if (this.gesture) {
      this.gesture.t += dt;
      var g = this.gesture.g;
      if (this.gesture.t >= g.dur) { this.gesture = null; this.applyTargets({}); this.clearPlaying(); }
      else this.applyTargets(g.pose(this.gesture.t));
    }

    // Where to look: the pointer, else a gentle idle wander.
    var lx = 0, ly = 0;
    var usePointer = this.pointer && (this.time - this.lastPointer < 5);
    if (usePointer) {
      var r = this.stage.getBoundingClientRect();
      var hx = r.left + (HEAD_PIVOT[0] - this.crop[0]) * this.scale;
      var hy = r.top + (440 - this.crop[1]) * this.scale;
      var dx = this.pointer.x - hx, dy = this.pointer.y - hy;
      var reach = Math.max(220, r.width * 0.9);
      lx = clamp(dx / reach, -1, 1); ly = clamp(dy / reach, -1, 1);
      // Soft saturation so far-away pointers do not pin her at the limit.
      lx = Math.tanh(lx * 1.4); ly = Math.tanh(ly * 1.4);
    } else {
      if (this.time > this.idle.next) {
        this.idle.next = this.time + 1.8 + Math.random() * 2.6;
        this.idle.x = (Math.random() * 2 - 1) * 0.45;
        this.idle.y = (Math.random() * 2 - 1) * 0.25;
      }
      lx = this.idle.x; ly = this.idle.y;
    }
    if (this.poseLook) {
      var w = this.poseLook[2] ? 1 : 0.55;
      lx = lx * (1 - w) + this.poseLook[0] * w; ly = ly * (1 - w) + this.poseLook[1] * w;
    }
    S.lookX.t = lx; S.lookY.t = ly;

    // Auto blink: ~160 ms every 2.6–5.4 s.
    var bl = 0;
    this.blink.next -= dt;
    if (this.blink.next <= 0) { this.blink.t = 0; this.blink.next = 2.6 + Math.random() * 2.8; }
    if (this.blink.t >= 0) {
      this.blink.t += dt;
      var p = this.blink.t / 0.17;
      bl = p < 0.5 ? p * 2 : Math.max(0, 2 - p * 2);
      if (p >= 1) this.blink.t = -1;
    }
    S.lidL.t = Math.max(bl, this.poseWinkL || 0);
    S.lidR.t = bl;

    // Head roll also follows the look a little; hair lags the head.
    S.hair.t = S.lookX.x * 14 + S.roll.x * 0.8;

    Object.keys(S).forEach(function (k) { S[k].step(dt); });
    if (this.reduce && !this.gesture) Object.keys(S).forEach(function (k) { S[k].snap(); });

    // Idle breathing
    this.breath = this.reduce ? 0 : Math.sin(this.time * 1.7);
    this.render();
    void self;
  };

  MieMie.prototype.render = function () {
    var S = this.s, n = this.n;
    var lx = S.lookX.x, ly = S.lookY.x;
    var breath = this.breath || 0;

    if (this.frame) {
      // The frame tilts with her gaze; she stays square to the viewer, which
      // is what makes her read as standing in front of it.
      this.frame.style.transform = 'perspective(1100px) rotateY(' + (lx * -9).toFixed(2) +
        'deg) rotateX(' + (6 + ly * 5).toFixed(2) + 'deg)';
    }
    n.body.style.transform = 'translateY(' + (S.bounce.x + breath * 2).toFixed(2) + 'px) rotate(' +
      S.sway.x.toFixed(2) + 'deg)';

    var roll = S.roll.x + lx * 5;
    var headT = 'translate(' + (lx * 10).toFixed(2) + 'px,' + (ly * 8 - breath * 1.5).toFixed(2) +
      'px) rotate(' + roll.toFixed(2) + 'deg)';
    n.head.style.transform = headT;
    n.headBack.style.transform = headT;

    // 2.5D: features move more than the face, back hair moves the other way.
    n.face.style.transform = 'translate(' + (lx * 7).toFixed(2) + 'px,' + (ly * 5).toFixed(2) + 'px)';
    n.feat.style.transform = 'translate(' + (lx * 17).toFixed(2) + 'px,' + (ly * 12).toFixed(2) + 'px)';
    var hairLag = S.hair.x - (lx * 14 + S.roll.x * 0.8);
    n.hairF.style.transform = 'translate(' + (lx * 11).toFixed(2) + 'px,' + (ly * 6).toFixed(2) +
      'px) rotate(' + (-hairLag * 0.12).toFixed(2) + 'deg)';
    n.hairB.style.transform = 'translate(' + (-lx * 7).toFixed(2) + 'px,' + (-ly * 4).toFixed(2) +
      'px) rotate(' + (-hairLag * 0.1).toFixed(2) + 'deg)';

    // Irises, clipped to each eye's aperture.
    var ix = (lx * 27).toFixed(2), iy = (ly * 11).toFixed(2);
    this.eyes.left.iris.style.transform = 'translate(' + ix + 'px,' + iy + 'px)';
    this.eyes.right.iris.style.transform = 'translate(' + ix + 'px,' + iy + 'px)';

    // Blink: lid fades in first, then the open eye fades out (sequenced).
    [['left', S.lidL.x], ['right', S.lidR.x]].forEach(function (e) {
      var eye = this.eyes[e[0]], c = clamp(e[1], 0, 1);
      eye.lid.style.opacity = band(c, 0.28, 0.6).toFixed(3);
      eye.g.style.opacity = (1 - band(c, 0.6, 0.92)).toFixed(3);
      eye.brow.style.transform = 'translateY(' + (-S.brow.x * 18 + c * 4).toFixed(2) + 'px)';
    }, this);

    // Mouth cross-fade
    var sm = clamp(S.smile.x, 0, 1), op = clamp(S.open.x, 0, 1);
    this.mouth.open.style.opacity = op.toFixed(3);
    this.mouth.smile.style.opacity = (sm * (1 - op)).toFixed(3);
    this.mouth.neutral.style.opacity = (1 - Math.max(sm, op)).toFixed(3);
    n.blush.style.opacity = clamp(S.blush.x, 0, 1).toFixed(3);

    // Arms (idle: a hint of swing with the breath)
    var swing = breath * 0.8;
    var a = this.arms;
    a.left.up.style.transform = 'rotate(' + (S.LU.x + swing).toFixed(2) + 'deg)';
    a.left.fo.style.transform = 'rotate(' + S.LF.x.toFixed(2) + 'deg)';
    a.left.ha.style.transform = 'rotate(' + S.LH.x.toFixed(2) + 'deg)';
    a.right.up.style.transform = 'rotate(' + (S.RU.x - swing).toFixed(2) + 'deg)';
    a.right.fo.style.transform = 'rotate(' + S.RF.x.toFixed(2) + 'deg)';
    a.right.ha.style.transform = 'rotate(' + S.RH.x.toFixed(2) + 'deg)';
  };

  function init() {
    document.querySelectorAll('[data-miemie]').forEach(function (root) {
      if (!root.__miemie) root.__miemie = new MieMie(root);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.MieMie = { ik: ik, gestures: ORDER };
})();
