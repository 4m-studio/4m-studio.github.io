/* ==========================================================================
   4M Studio — tiny 2D rig renderer shared by MieMie and Qiao Que.

   Why a canvas: the characters are cut-out layers laid out on big artboards
   (1024×1920, 1600×2000). Drawn as DOM, every moving part became its own
   full-artboard GPU layer; on a 3× iPhone that is ~70 MB each, and Safari
   killed the page. Here the whole character is one canvas the size it is
   shown on screen, redrawn each frame.

   Node: a group (children) or an image leaf, with CSS-like maths:
     M = T(origin) · T(tx, ty) · R(rot°) · S(sx, sy) · T(-origin)
   Children draw in z order (stable, like CSS z-index among siblings).
   A node with `mask` renders its subtree off screen and keeps only the
   pixels under the mask image (optionally also inside `ellipse`); a node
   with only `ellipse` is clipped to it directly.
   ========================================================================== */
(function () {
  'use strict';

  var RAD = Math.PI / 180;

  function Node(parent, ox, oy) {
    this.kids = []; this.ox = ox || 0; this.oy = oy || 0;
    this.tx = 0; this.ty = 0; this.rot = 0; this.sx = 1; this.sy = 1;
    this.a = 1; this.z = 0; this.img = null; this.mask = null; this.ellipse = null;
    this.order = parent ? parent.kids.length : 0;
    if (parent) parent.kids.push(this);
  }

  function ready(img) { return img && img.complete && img.naturalWidth > 0; }
  function byZ(p, q) { return (p.z - q.z) || (p.order - q.order); }

  function drawKids(ctx, n, alpha, k) {
    var kids = n.kids;
    for (var i = 1; i < kids.length; i++) if (byZ(kids[i - 1], kids[i]) > 0) { kids = kids.slice().sort(byZ); break; }
    for (var j = 0; j < kids.length; j++) drawNode(ctx, kids[j], alpha, k);
  }

  function drawNode(ctx, n, alpha, k) {
    var a = alpha * n.a;
    if (a <= 0.002) return;
    var moved = n.tx || n.ty || n.rot || n.sx !== 1 || n.sy !== 1;
    if (moved) {
      ctx.save();
      ctx.translate(n.ox + n.tx, n.oy + n.ty);
      if (n.rot) ctx.rotate(n.rot * RAD);
      if (n.sx !== 1 || n.sy !== 1) ctx.scale(n.sx, n.sy);
      ctx.translate(-n.ox, -n.oy);
    }
    if (n.img) {
      if (ready(n.img)) { ctx.globalAlpha = a; ctx.drawImage(n.img, n.x, n.y, n.w, n.h); }
    } else if (n.mask) {
      drawMasked(ctx, n, a, k);
    } else if (n.ellipse) {
      // Clip to the ellipse only (a character whose eyes have no mask image).
      var e = n.ellipse;
      ctx.save(); ctx.beginPath(); ctx.ellipse(e[0], e[1], e[2], e[3], 0, 0, Math.PI * 2); ctx.clip();
      drawKids(ctx, n, a, k);
      ctx.restore();
    } else {
      drawKids(ctx, n, a, k);
    }
    if (moved) ctx.restore();
  }

  function drawMasked(ctx, n, a, k) {
    var m = n.mask;
    if (!ready(m.img)) return;
    var c = n.off || (n.off = document.createElement('canvas'));
    var cw = Math.max(1, Math.ceil(m.w * k)), ch = Math.max(1, Math.ceil(m.h * k));
    if (c.width !== cw || c.height !== ch) { c.width = cw; c.height = ch; }
    var o = c.getContext('2d');
    o.setTransform(1, 0, 0, 1, 0, 0);
    o.globalCompositeOperation = 'source-over'; o.globalAlpha = 1;
    o.clearRect(0, 0, cw, ch);
    o.setTransform(k, 0, 0, k, -m.x * k, -m.y * k);
    o.save();
    if (n.ellipse) {
      var e = n.ellipse;
      o.beginPath(); o.ellipse(e[0], e[1], e[2], e[3], 0, 0, Math.PI * 2); o.clip();
    }
    drawKids(o, n, 1, k);
    o.restore();
    o.globalAlpha = 1;
    o.globalCompositeOperation = 'destination-in';
    o.drawImage(m.img, m.x, m.y, m.w, m.h);
    o.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = a;
    ctx.drawImage(c, m.x, m.y, m.w, m.h);
  }

  /* A canvas showing the rig's box [x0, y0, x1, y1] (artboard px). */
  function Stage(canvas, box) {
    this.canvas = canvas; this.ctx = canvas.getContext('2d');
    this.box = box; this.k = 1; this.cache = {};
    this.root = new Node(null);
    this.pending = false; this.onload = null;
  }
  Stage.prototype.group = function (parent, ox, oy) { return new Node(parent || this.root, ox, oy); };
  Stage.prototype.image = function (parent, src, x, y, w, h) {
    var n = new Node(parent || this.root);
    n.img = this.load(src); n.x = x; n.y = y; n.w = w; n.h = h;
    return n;
  };
  Stage.prototype.load = function (src) {
    if (this.cache[src]) return this.cache[src];
    var img = new Image(), self = this;
    img.decoding = 'async';
    img.onload = function () {
      // Redraw once per frame at most while the layers stream in.
      if (self.pending) return;
      self.pending = true;
      requestAnimationFrame(function () { self.pending = false; if (self.onload) self.onload(); else self.draw(); });
    };
    img.src = src;
    return (this.cache[src] = img);
  };
  /* scale = CSS px per artboard px. Sets the canvas's CSS size to the box and
     its backing store to that size × devicePixelRatio (capped at 3×). */
  Stage.prototype.resize = function (scale, sharpen) {
    // `sharpen` > 1 adds resolution for a canvas that CSS will scale up later.
    var b = this.box, dpr = Math.min((window.devicePixelRatio || 1) * (sharpen || 1), 3);
    var cssW = (b[2] - b[0]) * scale, cssH = (b[3] - b[1]) * scale;
    var pw = Math.max(1, Math.round(cssW * dpr)), ph = Math.max(1, Math.round(cssH * dpr));
    this.canvas.style.width = cssW + 'px'; this.canvas.style.height = cssH + 'px';
    if (this.canvas.width !== pw || this.canvas.height !== ph) { this.canvas.width = pw; this.canvas.height = ph; }
    this.k = pw / (b[2] - b[0]);
  };
  Stage.prototype.draw = function () {
    var c = this.ctx, k = this.k, b = this.box;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.globalAlpha = 1;
    c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    c.setTransform(k, 0, 0, k, -b[0] * k, -b[1] * k);
    c.imageSmoothingEnabled = true; c.imageSmoothingQuality = 'high';
    drawKids(c, this.root, 1, k);
  };

  window.Rig2D = { Stage: Stage, Node: Node };
})();
