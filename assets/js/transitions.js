/* ==========================================================================
   4M Studio — transitions.js
   StoryReel photo-transition gallery (apps/storyreel). Draws on <canvas>:
   a phone preview that plays the chosen theme's mix of transitions, and one
   looping card per effect. Markup and copy come from tools/build.py
   (transitions_section); the effect list arrives as JSON in .tx-data.
   Scenes are drawn illustrations standing in for travel photos.
   Pauses off screen; with Reduce Motion it holds still until Play.
   ========================================================================== */
(function () {
  "use strict";
  var root = document.querySelector(".tx");
  if (!root) return;
  var dataEl = root.querySelector(".tx-data");
  if (!dataEl) return;
  var DATA = JSON.parse(dataEl.textContent);
  var EFFECT = {};
  DATA.effects.forEach(function (e) { EFFECT[e.id] = e; });
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function clamp(x, a, b) { a = a === undefined ? 0 : a; b = b === undefined ? 1 : b; return Math.max(a, Math.min(b, x)); }
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeIn(t) { return t * t * t; }
  function easeInOutQuint(t) { return t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * t + 2, 5) / 2; }
  function easeOutBack(t) { var c1 = 1.7, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
  function rng(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function mk(w, h) { var c = document.createElement("canvas"); c.width = w; c.height = h; return c; }

  /* ---------- Illustrated sample scenes ---------- */
  function ridge(g, r, baseY, amp, rough, color, w, h) {
    g.fillStyle = color; g.beginPath(); g.moveTo(0, h);
    var y = baseY, step = w / 60;
    for (var x = 0; x <= w + step; x += step) { y += (r() - 0.5) * rough; y = baseY + clamp(y - baseY, -amp, amp); g.lineTo(x, y); }
    g.lineTo(w, h); g.closePath(); g.fill();
  }
  function pine(g, x, base, hgt, color) {
    g.fillStyle = color; g.beginPath();
    for (var i = 0; i < 4; i++) { var y = base - hgt * (i / 4), wd = hgt * 0.32 * (1 - i / 5); g.moveTo(x - wd, y); g.lineTo(x, y - hgt * 0.38); g.lineTo(x + wd, y); }
    g.fill(); g.fillRect(x - hgt * 0.03, base, hgt * 0.06, hgt * 0.08);
  }
  function grad(g, y0, y1, stops) { var l = g.createLinearGradient(0, y0, 0, y1); stops.forEach(function (s) { l.addColorStop(s[0], s[1]); }); return l; }

  var SCENES = [
    { place: { en: "Big Sur", zh: "大瑟尔" }, draw: function (g, w, h) {
      var r = rng(11), i;
      g.fillStyle = grad(g, 0, h * 0.62, [[0, "#2a1c4f"], [0.55, "#d2577a"], [1, "#ffc46b"]]); g.fillRect(0, 0, w, h);
      var sx = w * 0.62, sy = h * 0.5, glow = g.createRadialGradient(sx, sy, 10, sx, sy, w * 0.6);
      glow.addColorStop(0, "rgba(255,236,170,0.95)"); glow.addColorStop(0.15, "rgba(255,190,110,0.55)"); glow.addColorStop(1, "rgba(255,160,90,0)");
      g.fillStyle = glow; g.fillRect(0, 0, w, h); g.fillStyle = "#fff3cf"; g.beginPath(); g.arc(sx, sy, w * 0.07, 0, Math.PI * 2); g.fill();
      ridge(g, r, h * 0.55, 40, 26, "#8d4a78", w, h); ridge(g, r, h * 0.62, 60, 34, "#5d2f63", w, h);
      ridge(g, r, h * 0.71, 70, 40, "#381f4a", w, h); ridge(g, r, h * 0.82, 60, 44, "#1c1229", w, h);
      g.strokeStyle = "rgba(30,15,40,0.7)"; g.lineWidth = 3;
      for (i = 0; i < 5; i++) { var bx = w * (0.2 + r() * 0.5), by = h * (0.25 + r() * 0.15), bw = 10 + r() * 10; g.beginPath(); g.moveTo(bx - bw, by); g.quadraticCurveTo(bx - bw / 2, by - 6, bx, by); g.quadraticCurveTo(bx + bw / 2, by - 6, bx + bw, by); g.stroke(); }
    } },
    { place: { en: "Big Sur", zh: "大瑟尔" }, draw: function (g, w, h) {
      var r = rng(23), i, k, x;
      g.fillStyle = grad(g, 0, h * 0.5, [[0, "#5aa6dd"], [1, "#cfe8f6"]]); g.fillRect(0, 0, w, h);
      g.fillStyle = "rgba(255,255,255,0.85)";
      for (i = 0; i < 6; i++) { var cx = r() * w, cy = h * (0.08 + r() * 0.25); for (k = 0; k < 6; k++) { g.beginPath(); g.ellipse(cx + (k - 3) * 22, cy + Math.sin(k) * 6, 40, 16, 0, 0, Math.PI * 2); g.fill(); } }
      g.fillStyle = grad(g, h * 0.5, h * 0.8, [[0, "#1f6f9a"], [1, "#3fb6c4"]]); g.fillRect(0, h * 0.5, w, h * 0.3);
      g.strokeStyle = "rgba(255,255,255,0.55)"; g.lineWidth = 3;
      for (i = 0; i < 14; i++) { var y = h * (0.53 + i * 0.019); g.beginPath(); for (x = 0; x <= w; x += 12) g.lineTo(x, y + Math.sin(x / (30 + i * 3) + i) * (2 + i * 0.4)); g.stroke(); }
      g.fillStyle = grad(g, h * 0.78, h, [[0, "#efd9a8"], [1, "#d6b47c"]]);
      g.beginPath(); g.moveTo(0, h); g.lineTo(0, h * 0.8); for (x = 0; x <= w; x += 20) g.lineTo(x, h * 0.79 + Math.sin(x / 70) * 12); g.lineTo(w, h); g.fill();
      g.fillStyle = "rgba(255,255,255,0.8)"; g.beginPath(); for (x = 0; x <= w; x += 10) g.lineTo(x, h * 0.785 + Math.sin(x / 70) * 12 + Math.sin(x / 9) * 3); g.lineTo(w, h * 0.8); g.lineTo(0, h * 0.8); g.fill();
      g.fillStyle = "#3c4a2e"; g.beginPath(); g.moveTo(0, h * 0.82); g.lineTo(0, h * 0.36); g.lineTo(w * 0.12, h * 0.38); g.lineTo(w * 0.22, h * 0.47); g.lineTo(w * 0.3, h * 0.58); g.lineTo(w * 0.24, h * 0.7); g.lineTo(w * 0.1, h * 0.82); g.fill();
      g.fillStyle = "#566a3c"; g.beginPath(); g.moveTo(0, h * 0.4); g.lineTo(w * 0.1, h * 0.41); g.lineTo(w * 0.18, h * 0.48); g.lineTo(0, h * 0.55); g.fill();
    } },
    { place: { en: "Tokyo", zh: "东京" }, draw: function (g, w, h) {
      var r = rng(37), i;
      g.fillStyle = grad(g, 0, h, [[0, "#0b1030"], [0.6, "#2a2364"], [1, "#5a3a7a"]]); g.fillRect(0, 0, w, h);
      g.fillStyle = "rgba(255,255,255,0.8)"; for (i = 0; i < 90; i++) { g.globalAlpha = 0.3 + r() * 0.7; g.fillRect(r() * w, r() * h * 0.45, 2, 2); } g.globalAlpha = 1;
      g.fillStyle = "#f4ead0"; g.beginPath(); g.arc(w * 0.78, h * 0.13, 34, 0, Math.PI * 2); g.fill();
      var tx = w * 0.3; g.strokeStyle = "#e0573c"; g.lineWidth = 6; g.beginPath(); g.moveTo(tx - 50, h * 0.62); g.lineTo(tx, h * 0.2); g.lineTo(tx + 50, h * 0.62); g.stroke();
      g.lineWidth = 3; for (i = 1; i < 8; i++) { var yy = h * 0.2 + i * (h * 0.42 / 8), hw = 50 * (i / 8); g.beginPath(); g.moveTo(tx - hw, yy); g.lineTo(tx + hw, yy); g.stroke(); }
      g.fillStyle = "#ffd36b"; g.fillRect(tx - 18, h * 0.38, 36, 10);
      for (var layer = 0; layer < 2; layer++) {
        var x = -10;
        while (x < w) {
          var bw = 40 + r() * 70, bh = h * (layer ? 0.18 + r() * 0.22 : 0.25 + r() * 0.3);
          g.fillStyle = layer ? "#0a0c1c" : "#15183a"; g.fillRect(x, h - bh, bw, bh);
          for (var wy = h - bh + 12; wy < h - 8; wy += 16) for (var wx = x + 8; wx < x + bw - 8; wx += 12) if (r() < 0.38) { g.fillStyle = r() < 0.8 ? "rgba(255,214,120,0.9)" : "rgba(140,210,255,0.9)"; g.fillRect(wx, wy, 6, 8); }
          x += bw + 4;
        }
      }
    } },
    { place: { en: "Tokyo", zh: "东京" }, draw: function (g, w, h) {
      var r = rng(41), i;
      g.fillStyle = grad(g, 0, h * 0.6, [[0, "#9fd0f2"], [1, "#f3eef6"]]); g.fillRect(0, 0, w, h);
      g.fillStyle = grad(g, h * 0.62, h, [[0, "#9cc777"], [1, "#5f9a4d"]]); g.fillRect(0, h * 0.62, w, h);
      g.fillStyle = "#e9dfcf"; g.beginPath(); g.moveTo(w * 0.42, h * 0.62); g.lineTo(w * 0.58, h * 0.62); g.lineTo(w * 0.95, h); g.lineTo(w * 0.05, h); g.fill();
      [[0.12, 0.66, 1.1], [0.86, 0.68, 1.2], [0.3, 0.6, 0.7], [0.7, 0.6, 0.75]].forEach(function (t) {
        var tx = t[0], ty = t[1], sc = t[2];
        g.strokeStyle = "#5b3a2c"; g.lineWidth = 16 * sc; g.lineCap = "round"; g.beginPath(); g.moveTo(w * tx, h * ty + 120 * sc); g.lineTo(w * tx, h * ty - 60 * sc); g.stroke();
        g.lineWidth = 7 * sc; g.beginPath(); g.moveTo(w * tx, h * ty); g.lineTo(w * tx + 70 * sc, h * ty - 90 * sc); g.moveTo(w * tx, h * ty - 20 * sc); g.lineTo(w * tx - 70 * sc, h * ty - 100 * sc); g.stroke();
        for (var j = 0; j < 70; j++) { var a = r() * Math.PI * 2, d = r() * 150 * sc; g.fillStyle = "hsla(" + (335 + r() * 15) + ", 80%, " + (80 + r() * 10) + "%, 0.8)"; g.beginPath(); g.arc(w * tx + Math.cos(a) * d * 1.2, h * ty - 110 * sc + Math.sin(a) * d * 0.7, 22 * sc * (0.6 + r() * 0.6), 0, Math.PI * 2); g.fill(); }
      });
      for (i = 0; i < 60; i++) { g.fillStyle = "rgba(255,200,220,0.85)"; g.beginPath(); g.ellipse(r() * w, r() * h, 5, 3, r() * 3, 0, Math.PI * 2); g.fill(); }
    } },
    { place: { en: "Dolomites", zh: "多洛米蒂" }, draw: function (g, w, h) {
      var r = rng(53), i;
      g.fillStyle = grad(g, 0, h * 0.6, [[0, "#1f4f93"], [1, "#8cc3ea"]]); g.fillRect(0, 0, w, h);
      [[0.25, 0.3], [0.62, 0.22], [0.9, 0.34]].forEach(function (pk) {
        var x = w * pk[0], y = h * pk[1], bw = w * 0.42, base = h * 0.62;
        g.fillStyle = "#6f86a6"; g.beginPath(); g.moveTo(x - bw, base); g.lineTo(x, y); g.lineTo(x + bw, base); g.fill();
        g.fillStyle = "#4d6283"; g.beginPath(); g.moveTo(x, y); g.lineTo(x + bw, base); g.lineTo(x + bw * 0.1, base); g.fill();
        g.fillStyle = "#f6f9ff"; g.beginPath(); g.moveTo(x, y); g.lineTo(x - bw * 0.32, y + h * 0.13); g.lineTo(x - bw * 0.12, y + h * 0.11); g.lineTo(x, y + h * 0.15); g.lineTo(x + bw * 0.1, y + h * 0.1); g.lineTo(x + bw * 0.3, y + h * 0.13); g.fill();
        g.fillStyle = "#c8d7ee"; g.beginPath(); g.moveTo(x, y); g.lineTo(x + bw * 0.3, y + h * 0.13); g.lineTo(x + bw * 0.1, y + h * 0.1); g.lineTo(x, y + h * 0.15); g.fill();
      });
      g.fillStyle = grad(g, h * 0.6, h, [[0, "#2f5a3e"], [1, "#163223"]]); g.fillRect(0, h * 0.62, w, h);
      for (i = 0; i < 26; i++) pine(g, r() * w, h * (0.68 + r() * 0.3), 60 + r() * 120, i % 2 ? "#0f2a1b" : "#173a26");
    } },
    { place: { en: "Dolomites", zh: "多洛米蒂" }, draw: function (g, w, h) {
      var r = rng(67), i;
      g.fillStyle = grad(g, 0, h * 0.48, [[0, "#f2a7a0"], [1, "#fbe3c4"]]); g.fillRect(0, 0, w, h * 0.5);
      var mountains = mk(w, Math.round(h * 0.5)), mg = mountains.getContext("2d");
      ridge(mg, r, h * 0.28, 60, 50, "#9a7fa8", w, h * 0.5); ridge(mg, r, h * 0.36, 50, 40, "#6d5a86", w, h * 0.5); ridge(mg, r, h * 0.44, 30, 30, "#3e3a5c", w, h * 0.5);
      g.drawImage(mountains, 0, 0);
      g.fillStyle = grad(g, h * 0.5, h, [[0, "#d9b7b8"], [1, "#5a6c8f"]]); g.fillRect(0, h * 0.5, w, h * 0.5);
      g.save(); g.globalAlpha = 0.45; g.translate(0, h); g.scale(1, -1); g.drawImage(mountains, 0, 0); g.restore();
      g.strokeStyle = "rgba(255,255,255,0.35)"; g.lineWidth = 2;
      for (i = 0; i < 26; i++) { var y = h * (0.52 + r() * 0.46), x = r() * w; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 40 + r() * 90, y); g.stroke(); }
      for (i = 0; i < 9; i++) pine(g, w * (i < 5 ? r() * 0.22 : 0.78 + r() * 0.22), h * (0.5 + r() * 0.04), 140 + r() * 90, "#1d2433");
    } }
  ];
  var FULL = [], SMALL = [];
  SCENES.forEach(function (sc) {
    var c = mk(720, 1280); sc.draw(c.getContext("2d"), 720, 1280); FULL.push(c);
    var s = mk(184, 328); s.getContext("2d").drawImage(c, 0, 0, 184, 328); SMALL.push(s);
  });

  /* ---------- Effects: each draws outgoing A and incoming B at progress p ---------- */
  var filterOK = (function () { try { var t = mk(2, 2).getContext("2d"); t.filter = "blur(2px)"; return t.filter === "blur(2px)"; } catch (e) { return false; } })();
  var scratches = {};
  function scratch(w, h) { var k = w + "x" + h; return scratches[k] || (scratches[k] = mk(w, h)); }
  function layer(img, kb) {
    return function (ctx, w, h, o) {
      o = o || {};
      var a = o.alpha === undefined ? 1 : o.alpha;
      if (a <= 0.001) return;
      var sc = (o.scale === undefined ? 1 : o.scale) * kb;
      var blur = (o.blur || 0) * (w / 360);
      ctx.save(); ctx.globalAlpha *= a;
      if (blur > 0.3 && filterOK) ctx.filter = "blur(" + blur.toFixed(1) + "px)";
      var bleed = blur > 0.3 ? 1 + (blur * 3) / w : 1;
      ctx.translate(w / 2 + (o.dx || 0) * w, h / 2 + (o.dy || 0) * h);
      ctx.scale(sc * bleed, sc * bleed);
      ctx.drawImage(img, -w / 2, -h / 2, w, h);
      ctx.restore();
    };
  }
  var DRAW = {
    crossfade: function (ctx, w, h, p, A, B) { A(ctx, w, h); B(ctx, w, h, { alpha: easeInOut(p) }); },
    zoomDissolve: function (ctx, w, h, p, A, B) { var e = easeInOut(p); A(ctx, w, h, { scale: 1 + 0.12 * e }); B(ctx, w, h, { scale: 1.08 - 0.08 * e, alpha: e }); },
    blurDissolve: function (ctx, w, h, p, A, B) { A(ctx, w, h, { blur: 14 * clamp(p * 1.6) }); B(ctx, w, h, { alpha: easeInOut(p), blur: 14 * (1 - clamp((p - 0.35) / 0.65)) }); },
    lightLeak: function (ctx, w, h, p, A, B) {
      A(ctx, w, h); B(ctx, w, h, { alpha: easeInOut(p) });
      var k = Math.sin(Math.PI * p); if (k < 0.01) return;
      ctx.save(); ctx.globalCompositeOperation = "screen";
      var cx = w * (-0.2 + 1.4 * p), cy = h * (0.35 + 0.2 * p);
      var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.9);
      g.addColorStop(0, "rgba(255,170,80," + 0.85 * k + ")"); g.addColorStop(0.45, "rgba(255,90,70," + 0.45 * k + ")"); g.addColorStop(1, "rgba(255,60,60,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      g = ctx.createRadialGradient(w - cx * 0.6, h * 0.8, 0, w - cx * 0.6, h * 0.8, w * 0.6);
      g.addColorStop(0, "rgba(255,220,150," + 0.5 * k + ")"); g.addColorStop(1, "rgba(255,220,150,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); ctx.restore();
    },
    dipBlack: function (ctx, w, h, p, A, B) {
      ctx.fillStyle = "#000"; ctx.fillRect(0, 0, w, h);
      if (p < 0.5) A(ctx, w, h, { alpha: 1 - easeInOut(p / 0.5) }); else B(ctx, w, h, { alpha: easeInOut((p - 0.5) / 0.5) });
    },
    softWipe: function (ctx, w, h, p, A, B, dir) {
      A(ctx, w, h);
      var s = scratch(w, h), g = s.getContext("2d");
      g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = "source-over"; g.globalAlpha = 1; g.clearRect(0, 0, w, h);
      B(g, w, h);
      var f = 0.18, pos = -f + easeInOut(p) * (1 + 2 * f);
      var gr = g.createLinearGradient(dir > 0 ? 0 : w, 0, dir > 0 ? w : 0, h);
      gr.addColorStop(clamp(pos - f), "rgba(0,0,0,1)"); gr.addColorStop(clamp(pos + f), "rgba(0,0,0,0)");
      g.globalCompositeOperation = "destination-in"; g.fillStyle = gr; g.fillRect(0, 0, w, h); g.globalCompositeOperation = "source-over";
      ctx.drawImage(s, 0, 0);
    },
    push: function (ctx, w, h, p, A, B, dir) { var e = easeInOut(p); A(ctx, w, h, { dx: -e * dir }); B(ctx, w, h, { dx: (1 - e) * dir }); },
    whipPan: function (ctx, w, h, p, A, B, dir) {
      var e = easeInOutQuint(p), speed = Math.max(0, 1 - Math.abs(p - 0.5) * 2.4);
      function draw(off, a) { A(ctx, w, h, { dx: -e * dir + off, alpha: a }); B(ctx, w, h, { dx: (1 - e) * dir + off, alpha: a }); }
      draw(0, 1);
      if (speed > 0.05) for (var i = 1; i <= 5; i++) draw(-dir * i * 0.025 * speed, 0.16 * speed);
    },
    flash: function (ctx, w, h, p, A, B) {
      if (p < 0.5) A(ctx, w, h, { scale: 1 + 0.05 * p }); else B(ctx, w, h, { scale: 1.04 - 0.04 * (p - 0.5) * 2 });
      ctx.fillStyle = "rgba(255,255,255," + Math.pow(Math.sin(Math.PI * p), 2) * 0.95 + ")"; ctx.fillRect(0, 0, w, h);
    },
    zoomPunch: function (ctx, w, h, p, A, B) {
      var a = clamp(p / 0.55), b = clamp((p - 0.4) / 0.6);
      if (p < 0.6) A(ctx, w, h, { scale: 1 + 0.4 * easeIn(a), alpha: 1 - clamp((p - 0.4) / 0.2), blur: 8 * easeIn(a) });
      if (p > 0.4) B(ctx, w, h, { scale: 0.86 + 0.14 * easeOutBack(b), alpha: clamp((p - 0.4) / 0.2) });
    }
  };

  /* ---------- Effect cards ---------- */
  var cards = Array.prototype.map.call(root.querySelectorAll(".tx-card__canvas"), function (cv) {
    return { cv: cv, ctx: cv.getContext("2d"), fx: EFFECT[cv.dataset.fx], a: SMALL[+cv.dataset.a], b: SMALL[+cv.dataset.b], offset: +cv.dataset.offset, visible: true };
  }).filter(function (c) { return c.fx && DRAW[c.fx.id]; });
  function drawCard(c, t) {
    var ctx = c.ctx, w = c.cv.width, h = c.cv.height, hold = 0.9, d = c.fx.dur, cycle = 2 * (hold + d);
    var u = ((t + c.offset) % cycle + cycle) % cycle, from = c.a, to = c.b, dir = 1;
    if (u >= hold + d) { u -= hold + d; from = c.b; to = c.a; dir = -1; }
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.filter = "none"; ctx.fillStyle = "#000"; ctx.fillRect(0, 0, w, h);
    if (u < hold) { layer(from, 1)(ctx, w, h); return; }
    DRAW[c.fx.id](ctx, w, h, clamp((u - hold) / d), layer(from, 1), layer(to, 1), dir);
  }

  /* ---------- Phone preview ---------- */
  var themeSel = root.querySelector(".tx-theme");
  var pc = root.querySelector(".tx-player"), pctx = pc.getContext("2d");
  var nowName = root.querySelector(".tx-now__name"), nowDur = root.querySelector(".tx-now__dur");
  var playBtn = root.querySelector(".tx-play"), slowBtn = root.querySelector(".tx-slow");
  function moodOf() { return (themeSel.value || "elegant:0").split(":")[0]; }
  function sizePlayer() {
    var r = pc.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    var w = Math.max(180, Math.round(r.width * dpr)); pc.width = w; pc.height = Math.round(w * 16 / 9);
  }

  var SLIDE = 2.4, seq = [], loopN = 0, slideIdx = 0, slideT = 0, playing = !reduceMotion, slow = false;
  function planLoop(prevFx) {
    var mood = moodOf(), pal = DATA.palettes[mood] || ["crossfade"];
    var calm = pal.indexOf("dipBlack") >= 0 ? "dipBlack" : (pal.indexOf("crossfade") >= 0 ? "crossfade" : pal[0]);
    var pool = pal.filter(function (id) { return id !== "dipBlack"; });
    if (!pool.length) pool = [calm];
    var r = rng(1000 + loopN * 97 + mood.length * 13), out = [], last = prevFx;
    for (var i = 0; i < SCENES.length; i++) {
      var prev = (i + SCENES.length - 1) % SCENES.length, fx;
      if (SCENES[i].place.en !== SCENES[prev].place.en) fx = calm;
      else { var opts = pool.filter(function (id) { return id !== last; }); fx = opts.length ? opts[Math.floor(r() * opts.length)] : pool[0]; }
      out.push(fx); last = fx;
    }
    return out;
  }
  function updateNow() { var fx = EFFECT[seq[slideIdx]]; nowName.textContent = fx.name; nowDur.textContent = fx.dur.toFixed(2) + "s"; }
  function resetPlayer() { loopN = 0; slideIdx = 0; slideT = 0; seq = planLoop(null); updateNow(); }

  var FONT = '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", sans-serif';
  function drawCaption(ctx, w, h, scene, alpha) {
    if (alpha <= 0.01) return;
    ctx.save(); ctx.globalAlpha = alpha;
    var g = ctx.createLinearGradient(0, h * 0.72, 0, h); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,0.6)");
    ctx.fillStyle = g; ctx.fillRect(0, h * 0.72, w, h * 0.28);
    var u = w / 360, name = DATA.lang === "zh" ? scene.place.zh : scene.place.en.toUpperCase();
    ctx.fillStyle = "#fff"; ctx.font = "600 " + 20 * u + "px " + FONT; ctx.fillText(name, 20 * u, h - 34 * u);
    ctx.restore();
  }
  function drawPlayer() {
    var w = pc.width, h = pc.height, fxId = seq[slideIdx], fx = EFFECT[fxId];
    var prevI = (slideIdx + SCENES.length - 1) % SCENES.length;
    pctx.setTransform(1, 0, 0, 1, 0, 0); pctx.globalAlpha = 1; pctx.filter = "none"; pctx.fillStyle = "#000"; pctx.fillRect(0, 0, w, h);
    var kbCur = 1 + 0.06 * clamp(slideT / SLIDE);
    if (slideT < fx.dur) {
      var p = clamp(slideT / fx.dur);
      DRAW[fxId](pctx, w, h, p, layer(FULL[prevI], 1.06), layer(FULL[slideIdx], kbCur), slideIdx % 2 ? -1 : 1);
      drawCaption(pctx, w, h, SCENES[prevI], 1 - clamp(p / 0.5));
      drawCaption(pctx, w, h, SCENES[slideIdx], clamp((p - 0.5) / 0.5));
    } else {
      layer(FULL[slideIdx], kbCur)(pctx, w, h);
      drawCaption(pctx, w, h, SCENES[slideIdx], 1);
    }
  }

  function syncPlay() { playBtn.textContent = playing ? DATA.labels.pause : DATA.labels.play; }
  playBtn.addEventListener("click", function () { playing = !playing; syncPlay(); });
  slowBtn.addEventListener("click", function () {
    slow = !slow; slowBtn.setAttribute("aria-pressed", String(slow));
    slowBtn.textContent = slow ? DATA.labels.normal : DATA.labels.slow;
  });
  themeSel.addEventListener("change", resetPlayer);

  /* ---------- Loop: runs only while the section is on screen ---------- */
  var onScreen = false, rafId = 0, lastTs = null, clock = 0, frame = 0;
  function tick(ts) {
    rafId = 0;
    var dt = lastTs === null ? 0 : Math.min(0.1, (ts - lastTs) / 1000); lastTs = ts;
    var rate = slow ? 0.35 : 1;
    if (playing) {
      clock += dt * rate; slideT += dt * rate;
      if (slideT >= SLIDE) {
        slideT -= SLIDE; var prevFx = seq[slideIdx]; slideIdx++;
        if (slideIdx >= SCENES.length) { slideIdx = 0; loopN++; seq = planLoop(prevFx); }
        updateNow();
      }
    }
    drawPlayer();
    if (frame++ % 2 === 0) cards.forEach(function (c) { if (c.visible) drawCard(c, clock); });
    if (onScreen) rafId = requestAnimationFrame(tick);
  }
  function start() { if (!rafId) { lastTs = null; rafId = requestAnimationFrame(tick); } }

  sizePlayer(); resetPlayer(); syncPlay();
  drawPlayer(); cards.forEach(function (c) { drawCard(c, 1.2); });   // a still first frame before any motion
  window.addEventListener("resize", function () { sizePlayer(); drawPlayer(); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      onScreen = es[0].isIntersecting;
      if (onScreen) start();
    }, { rootMargin: "120px 0px" }).observe(root);
    var cardIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { cards.forEach(function (c) { if (c.cv === e.target) c.visible = e.isIntersecting; }); });
    });
    cards.forEach(function (c) { cardIO.observe(c.cv); });
  } else {
    onScreen = true; start();
  }
})();
