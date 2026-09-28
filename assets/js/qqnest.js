/* ==========================================================================
   QQNest — Qiao Que's nest, live, for the QQNest card and app page.

   A small web port of the app's home screen (小窝):
   - QQFigure / QQRig (QiaoQueArt.swift, QiaoQueRig.swift): the layered
     qiaoque.avatarpkg, the same pivots, the same mood poses and the same idle
     motion — body sways first, the head half a beat later, ears, ahoge and
     tail later still; blinks and the odd ear twitch are deterministic pulses.
   - RoomView.swift: wall, window and curtains, bed, desk, sofa, music corner,
     the rug and star garland that unlock with the bond level.
   - HomeView.swift: tap him to pat (bounce, sparkles, a mood, a line), feed
     him a treat (it flies to him, hearts float up), idle lines every 9–16 s,
     the bond bar with its five stages and the level-up card.

   Web-only extra: when a pointer is around, his head turns toward it a little
   and the face layers shift for a hint of depth (like MieMie).

   Bond progress is kept in localStorage (`qqn-bond`) so a visitor's giraffe
   keeps its level. No dependencies. Honours prefers-reduced-motion and pauses
   while off screen.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Rig: qiaoque.avatarpkg/avatar.json (canvas 1600 x 2000) ---------- */
  var CW = 1600, CH = 2000, K = CW / 200;        // canvas px per design unit
  var LAYERS = {
    ahoge: [727, 63, 194, 218], armLeft: [384, 1279, 187, 518], armRight: [1029, 1279, 187, 518],
    bangs: [288, 188, 1024, 747], blush: [471, 963, 658, 138], body: [393, 1049, 814, 940],
    brows: [510, 729, 580, 60], earLeft: [225, 4, 427, 581], earLeft_flush: [225, 4, 427, 581],
    earRight: [948, 4, 427, 581], earRight_flush: [948, 4, 427, 581],
    eyes_closed: [468, 783, 664, 213], eyes_heart: [529, 824, 542, 192], eyes_open: [459, 770, 682, 276],
    eyes_smile: [472, 878, 657, 90], eyes_wide: [443, 755, 714, 303], face: [433, 473, 734, 751],
    hairBack: [285, 197, 1030, 946], hairFront: [422, 622, 756, 515], hairSide: [279, 513, 1051, 820],
    hairTail: [388, 819, 959, 549], mouth_cat: [739, 1083, 122, 40], mouth_o: [768, 1082, 64, 76],
    mouth_open: [736, 1084, 128, 96], mouth_small: [767, 1101, 66, 24], mouth_smile: [740, 1086, 120, 41],
    mouth_yawn: [752, 1066, 96, 124], nose: [781, 1008, 29, 56], plush: [137, 1532, 286, 457],
    shadow: [380, 1909, 840, 91], tail: [1001, 1241, 548, 600]
  };
  var BLUSH_BASE = 0.55;
  var PIV = {
    ahoge: [792, 264], earLeft: [496, 464], earRight: [1104, 464], feet: [800, 2000], neck: [800, 1200],
    plush: [240, 1976], shoulderLeft: [480, 1360], shoulderRight: [1120, 1360], tail: [1040, 1728]
  };
  var EYES = ['open', 'wide', 'smile', 'closed', 'heart'];
  var MOUTHS = ['smile', 'open', 'o', 'yawn', 'cat', 'small'];

  /* ---------- Poses: QiaoQuePose.preset ---------- */
  function pose(o) {
    var p = { headTilt: 0, headLift: 0, browLift: 0, armLeft: 0, armRight: 0, wave: 0,
              earDroop: 0, blushBoost: 0, earFlush: 0, eyes: 'open', mouth: 'smile' };
    for (var k in o) p[k] = o[k];
    return p;
  }
  var POSES = {
    idle: pose({}),
    happy: pose({ headTilt: 3, headLift: 1, browLift: 1.5, eyes: 'smile', mouth: 'open' }),
    surprised: pose({ headLift: 2.5, browLift: 3.5, earDroop: -5, eyes: 'wide', mouth: 'o' }),
    shy: pose({ headTilt: -6, headLift: -1.5, earDroop: 9, blushBoost: 0.3, earFlush: 1, eyes: 'closed', mouth: 'small' }),
    yawn: pose({ headTilt: 5, headLift: -1, browLift: -1, earDroop: 6, eyes: 'closed', mouth: 'yawn' }),
    love: pose({ headTilt: -4, armLeft: -26, armRight: 26, eyes: 'heart', mouth: 'cat' }),
    wave: pose({ headTilt: 3, armRight: -18, wave: 1 }),
    cheer: pose({ headLift: 3, browLift: 2, armLeft: -38, armRight: 38, earDroop: -4, eyes: 'smile', mouth: 'open' })
  };
  var NUM = ['headTilt', 'headLift', 'browLift', 'armLeft', 'armRight', 'wave', 'earDroop', 'blushBoost', 'earFlush'];
  function mix(a, b, k) {
    var r = {};
    NUM.forEach(function (n) { r[n] = a[n] + (b[n] - a[n]) * k; });
    r.wave = Math.max(0, r.wave); r.blushBoost = Math.max(0, r.blushBoost);
    r.earFlush = Math.min(1, Math.max(0, r.earFlush));
    r.eyes = k < 0.5 ? a.eyes : b.eyes; r.mouth = k < 0.5 ? a.mouth : b.mouth;
    return r;
  }

  /* ---------- Motion: QQRig ---------- */
  var SWAY = 6.8, BREATH = 4.2, WAVE = 1.1, TAU = Math.PI * 2;
  function spring(t) {
    if (t <= 0) return 0;
    var d = 7, w = 11;
    return 1 - Math.exp(-d * t) * (Math.cos(w * t) + d / w * Math.sin(w * t));
  }
  function fract(x) { return x - Math.floor(x); }
  function pulse(t, cycle, seed, dur, edge, chance) {
    var n = Math.floor(t / cycle);
    var r1 = fract(Math.sin(n * 12.9898 + seed) * 43758.5453);
    var r2 = fract(Math.sin(n * 78.233 + seed * 3) * 12543.1234);
    if (r2 >= (chance == null ? 1 : chance)) return 0;
    var start = n * cycle + 0.3 + r1 * Math.max(0, cycle - dur - 0.6), d = t - start;
    if (d < 0 || d >= dur) return 0;
    if (d < edge) return d / edge;
    if (d > dur - edge) return (dur - d) / edge;
    return 1;
  }
  function state(from, to, k, fade, t, blink, twitch) {
    var p = mix(from, to, k), w = TAU / SWAY;
    function sway(lag) { return Math.sin(w * (t - lag)); }
    var breath = 0.5 - 0.5 * Math.cos(TAU * t / BREATH);
    var headBreath = 0.5 - 0.5 * Math.cos(TAU * (t - 0.3) / BREATH);
    var flap = 0.5 - 0.5 * Math.cos(TAU * t / WAVE);
    var earLag = -2.2 * sway(0.8);
    var s = {
      lean: 2 * sway(0), breathe: breath,
      headTilt: p.headTilt + 1.6 * sway(0.45), headLift: p.headLift + 0.8 * headBreath, browLift: p.browLift,
      armLeft: p.armLeft + 1.5 * sway(0.9), armRight: p.armRight - 22 * p.wave * flap - 1.5 * sway(0.9),
      earLeft: -p.earDroop + earLag - 7 * twitch, earRight: p.earDroop + earLag,
      tail: 4 * sway(0.5), plush: 3 + 3 * sway(0.25), ahoge: 1.5 + 5 * sway(0.7),
      blushBoost: p.blushBoost, earFlush: p.earFlush
    };
    var f = Math.min(1, Math.max(0, fade));
    var eyes = {}, mouths = {};
    function add(o, v, wt) { if (wt > 0.001) o[v] = (o[v] || 0) + wt; }
    if (from.eyes === to.eyes) add(eyes, to.eyes, 1); else { add(eyes, from.eyes, 1 - f); add(eyes, to.eyes, f); }
    if (blink > 0) {
      var moved = 0;
      ['open', 'wide'].forEach(function (e) {
        if (eyes[e]) { moved += eyes[e] * blink; eyes[e] *= 1 - blink; }
      });
      add(eyes, 'closed', moved);
    }
    if (from.mouth === to.mouth) add(mouths, to.mouth, 1); else { add(mouths, from.mouth, 1 - f); add(mouths, to.mouth, f); }
    s.eyes = eyes; s.mouths = mouths;
    return s;
  }

  /* ---------- Game data: Models.swift / GameState.swift ---------- */
  // The app has a fifth stage, 桥鹊的小伙伴 (420); May dropped it from the website (Sep 28).
  // The star garland and the cuddly face come with the top stage here instead.
  var STAGES = [
    { at: 0,   zh: '初次见面',     en: 'First meeting',
      note: { zh: '桥鹊学会了对你挥手', en: 'Qiao Que learned to wave at you' } },
    { at: 60,  zh: '熟悉的长颈鹿', en: 'A familiar giraffe',
      note: { zh: '解锁：害羞表情 + 新的问候语', en: 'Unlocked: a shy face + new greetings' } },
    { at: 180, zh: '每天都来陪伴', en: 'Here every day',
      note: { zh: '解锁：小窝地毯 + 打哈欠动作', en: 'Unlocked: a rug for the nest + yawning' } },
    { at: 900, zh: '特别的长颈鹿', en: 'A special giraffe',
      note: { zh: '解锁：限定合影 + 专属称呼', en: 'Unlocked: a limited photo + a special nickname' } }
  ];
  var FOODS = [
    { id: 'candy', zh: '糖果', en: 'Candy', aff: 2, love: 1,
      r: { zh: ['甜甜的，心情也甜甜的。', '一颗就够开心一整天。', '我先藏一颗晚上吃。'],
           en: ['Sweet treat, sweet mood.', 'One is enough to make my day.', "I'll hide one for tonight."] } },
    { id: 'cookie', zh: '小饼干', en: 'Cookie', aff: 3, love: 1,
      r: { zh: ['咔嚓——好脆！', '掉渣了掉渣了。', '再来一块可以吗？'],
           en: ['Crunch — so crispy!', 'Crumbs everywhere!', 'Can I have another?'] } },
    { id: 'milk', zh: '草莓牛奶', en: 'Strawberry milk', aff: 5, love: 2,
      r: { zh: ['草莓味的，超对！', '咕嘟咕嘟——满血复活。', '谢谢长颈鹿的补给！'],
           en: ['Strawberry — perfect!', 'Glug, glug — fully recharged.', 'Thanks for the supplies, giraffe!'] } },
    { id: 'cake', zh: '小蛋糕', en: 'Little cake', aff: 8, love: 3,
      r: { zh: ['奶油！我最喜欢奶油了！', '这个……是给我的吗？', '长颈鹿好会挑呀。'],
           en: ['Cream! I love cream!', 'Is this… for me?', "You're so good at picking, giraffe."] } },
    { id: 'hotpot', zh: '火锅', en: 'Hotpot', aff: 14, love: 3,
      r: { zh: ['哇！是火锅！！', '这也太隆重了吧……', '今天是什么好日子吗？'],
           en: ['Whoa! Hotpot!!', 'This is way too fancy…', 'Is today a special day?'] } },
    { id: 'gift', zh: '神秘礼物盒', en: 'Mystery gift', aff: 20, love: 3,
      r: { zh: ['里面是什么呀？好紧张。', '长颈鹿也太宠我了。', '我可以拆开了吗？'],
           en: ["What's inside? I'm nervous.", 'You spoil me, giraffe.', 'Can I open it now?'] } }
  ];
  var POKE_LIMIT = 20;   // GameState.dailyPokeRewardLimit

  var TEXT = {
    en: {
      idle: ["You're here, giraffe!", 'What shall we play today?', 'Getting a little hungry…', 'Stay with me a while.'],
      idle2: ['Nice weather out the window today.'], idle4: ["You're my special giraffe."],
      poke: ['Hehe.', 'That tickles!', "What's up?", "I'm listening, I'm listening.", 'You can pat me again.'],
      poke1: ['…a little shy now.'], poke3: ["You're my favourite."],
      full: "I'm so content today — just stay and chat.", thanks: 'Thank you!',
      toNext: function (n, s) { return n + ' to “' + s + '”'; }, top: 'Top bond level',
      levelUp: 'Bond level up!', ok: 'Yay!', feed: function (f, a) { return 'Feed him ' + f + ' (+' + a + ' bond)'; },
      pat: 'Pat Qiao Que'
    },
    zh: {
      idle: ['长颈鹿来啦！', '今天要玩什么？', '有点饿了……', '陪我待一会儿吧。'],
      idle2: ['窗外今天天气不错。'], idle4: ['你是特别的那只长颈鹿。'],
      poke: ['诶嘿。', '痒痒的！', '怎么啦？', '我在听我在听。', '再摸一下也可以。'],
      poke1: ['……有点害羞。'], poke3: ['最喜欢你了。'],
      full: '今天已经很满足啦，陪我说说话吧。', thanks: '谢谢你！',
      toNext: function (n, s) { return '距离「' + s + '」还差 ' + n; }, top: '已是最高阶段',
      levelUp: '亲密度提升！', ok: '太好啦', feed: function (f, a) { return '投喂' + f + '（亲密度 +' + a + '）'; },
      pat: '摸摸桥鹊'
    }
  };
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ---------- Cute icons (CuteIcons.swift, 40 x 40) ---------- */
  var C = { lilac: '#CDBDF2', lilacDeep: '#AE9AE3', honey: '#FFD98E', honeyDeep: '#F7B75C', peach: '#FFC2C7',
            peachDeep: '#FF9AA6', mint: '#B8E6D2', sky: '#A9D6F5', heart: '#FF8BA0', star: '#FFC85C', ink: '#5B4B48',
            inkSoft: '#9C8A86' };
  var ICONS = {
    candy: '<rect x="10" y="10" width="20" height="20" rx="10" fill="' + C.lilac + '"/>' +
      '<rect x="14" y="13" width="6" height="14" rx="3" fill="#fff" fill-opacity=".6" transform="rotate(30 17 20)"/>' +
      '<path d="M1 14 L1 26 L10 20Z" fill="' + C.lilacDeep + '"/><path d="M39 14 L39 26 L30 20Z" fill="' + C.lilacDeep + '"/>',
    cookie: '<circle cx="20" cy="20" r="14" fill="' + C.honey + '"/>' +
      '<circle cx="22" cy="22" r="12.5" fill="' + C.honeyDeep + '" fill-opacity=".55"/>' +
      '<g fill="#6B4A34"><circle cx="14" cy="15" r="2.2"/><circle cx="25" cy="14" r="2.2"/><circle cx="20" cy="23" r="2.2"/>' +
      '<circle cx="17" cy="28" r="2.2"/><circle cx="27" cy="25" r="2.2"/></g>',
    milk: '<path d="M9 9 H31 L27 30.3 Q20 35.8 13 30.3Z" fill="' + C.peach + '" fill-opacity=".55"/>' +
      '<path d="M11 21 H29 L27 30.3 Q20 35.8 13 30.3Z" fill="' + C.peachDeep + '"/>' +
      '<path d="M9 9 H31 L27 30.3 Q20 35.8 13 30.3Z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="23" y="0" width="4" height="20" rx="2" fill="' + C.mint + '" transform="rotate(14 25 10)"/>' +
      '<circle cx="15" cy="8" r="3.5" fill="' + C.heart + '"/>',
    cake: '<rect x="6" y="22.5" width="28" height="13" rx="4" fill="' + C.honey + '"/>' +
      '<rect x="6" y="13" width="28" height="12" rx="6" fill="#fff"/>' +
      '<circle cx="20" cy="10" r="4.5" fill="' + C.heart + '"/>' +
      '<rect x="22" y="2" width="2.2" height="6" rx="1.1" fill="' + C.mint + '" transform="rotate(20 23 5)"/>',
    hotpot: '<ellipse cx="20" cy="21" rx="15" ry="6" fill="' + C.honeyDeep + '"/>' +
      '<path d="M4 17 H36 Q35 35 20 35 Q5 35 4 17Z" fill="#B9846A"/>' +
      '<rect x="-3" y="22" width="8" height="4" rx="2" fill="#8E6350"/><rect x="35" y="22" width="8" height="4" rx="2" fill="#8E6350"/>' +
      '<g fill="#fff" fill-opacity=".75"><rect x="10.3" y="3" width="3.4" height="10" rx="1.7" transform="rotate(-16 12 8)"/>' +
      '<rect x="18.3" y="3" width="3.4" height="10" rx="1.7"/><rect x="26.3" y="3" width="3.4" height="10" rx="1.7" transform="rotate(16 28 8)"/></g>',
    gift: '<rect x="7" y="13" width="26" height="22" rx="5" fill="' + C.mint + '"/>' +
      '<rect x="5" y="9.5" width="30" height="9" rx="4" fill="' + C.sky + '"/>' +
      '<rect x="17.5" y="5" width="5" height="30" fill="' + C.peachDeep + '"/>' +
      '<circle cx="15" cy="8" r="4" fill="' + C.peachDeep + '"/><circle cx="25" cy="8" r="4" fill="' + C.peachDeep + '"/>',
    pat: '<path d="M16.5 7.5a3 3 0 0 1 6 0V18l1.2-.4a3 3 0 0 1 2.3.1l6.3 3a3.6 3.6 0 0 1 2 3.9l-1.4 7.8A4.5 4.5 0 0 1 28.5 36H19a4.5 4.5 0 0 1-3.6-1.8L9.7 26.6a2.8 2.8 0 0 1 3.9-3.9l2.9 2.3Z" fill="' + C.lilacDeep + '"/>' +
      '<path d="M11 9.2a8 8 0 0 1 17 0" fill="none" stroke="' + C.lilacDeep + '" stroke-opacity=".55" stroke-width="2.4" stroke-linecap="round"/>'
  };
  function icon(id, size) {
    return '<svg viewBox="0 0 40 40" width="' + size + '" height="' + size + '" aria-hidden="true" overflow="visible">' + ICONS[id] + '</svg>';
  }
  var HEART = 'M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.5 6.7 4.5c2.2 0 3.7 1.2 5.3 3 1.6-1.8 3.1-3 5.3-3 3.7 0 5.8 3.8 4.3 7.3C19.5 16.4 12 21 12 21Z';
  var STAR = 'M12 2.5l2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 16.8 6.2 20l1.4-6.4L2.7 9.2l6.5-.7Z';
  var SPARKLE = 'M12 1.5c.7 5.6 4.9 9.8 10.5 10.5-5.6.7-9.8 4.9-10.5 10.5C11.3 16.9 7.1 12.7 1.5 12 7.1 11.3 11.3 7.1 12 1.5Z';

  /* ---------- Room: RoomView.swift, drawn at 380 x 420 ---------- */
  var RW = 380, RH = 420;
  function room() {
    var w = RW, h = RH, floorY = h * 0.72, o = [];
    o.push('<defs><linearGradient id="qqnWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FDEFE0"/><stop offset="1" stop-color="#FFF3E4"/></linearGradient>' +
      '<linearGradient id="qqnSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9D6F5"/><stop offset="1" stop-color="#A9D6F5" stop-opacity=".55"/></linearGradient></defs>');
    o.push('<rect width="' + w + '" height="' + h + '" fill="url(#qqnWall)"/>');
    // wallpaper dots
    var dots = '';
    for (var row = 0, y = 16; y < h * 0.7; y += 42, row++) {
      for (var x = row % 2 ? 41 : 20; x < w; x += 42) dots += '<circle cx="' + (x + 3) + '" cy="' + (y + 3) + '" r="3"/>';
    }
    o.push('<g fill="#FFC2C7" fill-opacity=".22">' + dots + '</g>');
    // floor
    o.push('<rect y="' + floorY + '" width="' + w + '" height="' + (h - floorY) + '" fill="#EFD9C2"/>' +
      '<rect y="' + floorY + '" width="' + w + '" height="3" fill="#5B4B48" fill-opacity=".06"/>');
    // window
    var wx = w * 0.20, wy = h * 0.28, ww = w * 0.26, wh = h * 0.30;
    o.push('<g transform="translate(' + wx + ' ' + wy + ')">' +
      '<rect x="' + (-ww / 2) + '" y="' + (-wh / 2) + '" width="' + ww + '" height="' + wh + '" rx="18" fill="url(#qqnSky)"/>' +
      '<g class="qqn-clouds"><rect x="' + (-ww * 0.10 - ww * 0.21) + '" y="' + (-wh * 0.18 - wh * 0.08) + '" width="' + ww * 0.42 + '" height="' + wh * 0.16 + '" rx="' + wh * 0.08 + '" fill="#fff" fill-opacity=".85"/>' +
      '<rect x="' + (ww * 0.16 - ww * 0.17) + '" y="' + (wh * 0.10 - wh * 0.065) + '" width="' + ww * 0.34 + '" height="' + wh * 0.13 + '" rx="' + wh * 0.065 + '" fill="#fff" fill-opacity=".7"/></g>' +
      '<rect x="' + (-ww / 2 + 3.5) + '" y="' + (-wh / 2 + 3.5) + '" width="' + (ww - 7) + '" height="' + (wh - 7) + '" rx="14.5" fill="none" stroke="#fff" stroke-width="7"/>' +
      '<rect x="-3" y="' + (-wh / 2) + '" width="6" height="' + wh + '" fill="#fff"/><rect x="' + (-ww / 2) + '" y="-3" width="' + ww + '" height="6" fill="#fff"/>' +
      '<rect class="qqn-curtain qqn-curtain--l" x="' + (-ww * 0.44 - ww * 0.12) + '" y="' + (-wh * 0.525) + '" width="' + ww * 0.24 + '" height="' + wh * 1.05 + '" rx="10" fill="#FFC2C7" fill-opacity=".85"/>' +
      '<rect class="qqn-curtain qqn-curtain--r" x="' + (ww * 0.44 - ww * 0.12) + '" y="' + (-wh * 0.525) + '" width="' + ww * 0.24 + '" height="' + wh * 1.05 + '" rx="10" fill="#FFC2C7" fill-opacity=".85"/>' +
      '</g>');
    // star garland (top bond stage)
    var stars = '';
    for (var i = 0; i < 6; i++) {
      var sx = w / 2 + (i - 2.5) * (w * 0.10 + 13);
      stars += '<path d="' + STAR + '" transform="translate(' + (sx - 6.5) + ' ' + (h * 0.10 - 6.5 + (i % 2 ? 7 : 0)) + ') scale(.54)"/>';
    }
    o.push('<g class="qqn-decor qqn-garland" fill="#FFC85C">' + stars + '</g>');
    // bed
    o.push('<g transform="translate(' + w * 0.16 + ' ' + (floorY - 4) + ')">' +
      '<rect x="-65" y="-11" width="130" height="46" rx="14" fill="#E3C6A8"/>' +
      '<rect x="-61" y="-13" width="122" height="30" rx="14" fill="#CDBDF2"/>' +
      '<rect x="-58" y="-17" width="40" height="22" rx="10" fill="#fff"/>' +
      '<rect x="-71" y="-35" width="14" height="54" rx="7" fill="#D3B08C"/></g>');
    // desk + lamp + plant
    o.push('<g transform="translate(' + w * 0.84 + ' ' + (floorY - 6) + ')">' +
      '<rect x="-46" y="6" width="8" height="40" rx="4" fill="#D3B08C"/><rect x="38" y="6" width="8" height="40" rx="4" fill="#D3B08C"/>' +
      '<rect x="-52" y="-6" width="104" height="12" rx="6" fill="#E3C6A8"/>' +
      '<rect x="-32.5" y="-34" width="5" height="26" rx="2.5" fill="#F7B75C"/>' +
      '<path d="M-45 -32 L-37.2 -52 L-22.8 -52 L-15 -32Z" fill="#FFD98E" stroke="#FFD98E" stroke-width="2" stroke-linejoin="round"/>' +
      '<g transform="translate(30 -18)"><path d="M-7 1 H7 L5 11 Q0 13 -5 11Z" fill="#E08A5B"/><rect x="-8" y="-1" width="16" height="4" rx="2" fill="#C8704A"/>' +
      '<path d="M0 -1 C-1 -7 -7 -9 -10 -8 C-8 -4 -4 -2 0 -1Z M0 -1 C1 -8 6 -11 10 -10 C8 -5 4 -2 0 -1Z M0 -1 C-1 -8 0 -12 1 -14 C3 -10 2 -5 0 -1Z" fill="#6CBF6A"/></g>' +
      '</g>');
    // sofa
    o.push('<g transform="translate(' + w * 0.60 + ' ' + (floorY + h * 0.08) + ')" fill="#B8E6D2">' +
      '<rect x="-48" y="-30" width="96" height="20" rx="10" fill-opacity=".85"/>' +
      '<rect x="-48" y="-17" width="96" height="34" rx="16"/>' +
      '<rect x="-53" y="-25" width="14" height="34" rx="7" fill-opacity=".7"/><rect x="39" y="-25" width="14" height="34" rx="7" fill-opacity=".7"/>' +
      '<rect x="-37" y="-25" width="22" height="22" rx="8" fill="#FFC2C7" transform="rotate(-12 -26 -14)"/></g>');
    // rug (bond stage 2+)
    o.push('<g class="qqn-decor qqn-rug"><ellipse cx="' + w * 0.5 + '" cy="' + h * 0.90 + '" rx="' + w * 0.25 + '" ry="' + h * 0.07 + '" fill="#CDBDF2" fill-opacity=".55"/>' +
      '<ellipse cx="' + w * 0.5 + '" cy="' + h * 0.90 + '" rx="' + (w * 0.25 - 2) + '" ry="' + (h * 0.07 - 2) + '" fill="none" stroke="#AE9AE3" stroke-opacity=".5" stroke-width="4"/></g>');
    // music corner
    o.push('<g transform="translate(' + w * 0.86 + ' ' + h * 0.88 + ')">' +
      '<path class="qqn-note qqn-note--a" d="M0 0 v-9.5 l6 -1.8 v3 l-4 1.2 v7.6 a3 3 0 1 1 -2-2.8Z" transform="translate(-24 -34)" fill="#AE9AE3" fill-opacity=".8"/>' +
      '<path class="qqn-note qqn-note--b" d="M0 0 v-7.5 l4.8 -1.4 v2.4 l-3.2 1 v6 a2.4 2.4 0 1 1 -1.6-2.2Z" transform="translate(17 -48)" fill="#A9D6F5" fill-opacity=".9"/>' +
      '<rect x="-26" y="-17" width="52" height="34" rx="8" fill="#CFA97F"/>' +
      '<circle cx="-6" cy="-2" r="11" fill="#5B4B48" fill-opacity=".85"/><circle cx="-6" cy="-2" r="3" fill="#fff"/>' +
      '<rect x="10.5" y="-14" width="3" height="20" rx="1.5" fill="#9C8A86" transform="rotate(28 12 -4)"/>' +
      '<rect x="-34" y="19" width="68" height="15" rx="7.5" fill="#AE9AE3" fill-opacity=".9"/>' +
      '<text x="0" y="29.6" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fff" font-family="ui-rounded, \'SF Pro Rounded\', system-ui, sans-serif">Coming Soon</text></g>');
    return '<svg class="qqn-scene" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" aria-hidden="true">' + o.join('') + '</svg>';
  }

  /* ---------- DOM helpers ---------- */
  function el(tag, cls, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (parent) parent.appendChild(e);
    return e;
  }
  function group(parent, pivot) {
    var g = el('div', 'qqn-g', parent);
    if (pivot) g.style.transformOrigin = pivot[0] + 'px ' + pivot[1] + 'px';
    return g;
  }
  function layer(name, parent, base) {
    var d = LAYERS[name], img = el('img', 'qqn-l', parent);
    img.src = base + name + '.webp'; img.alt = ''; img.draggable = false; img.decoding = 'async';
    img.style.cssText = 'left:' + d[0] + 'px;top:' + d[1] + 'px;width:' + d[2] + 'px;height:' + d[3] + 'px';
    return img;
  }

  /* ---------- Spring for the tap bounce ---------- */
  function Spr() { this.x = 0; this.v = 0; this.t = 0; this.k = 815; this.c = 25.7; }
  Spr.prototype.set = function (t, response, damping) {
    this.t = t; this.k = Math.pow(TAU / response, 2); this.c = 4 * Math.PI * damping / response;
  };
  Spr.prototype.step = function (dt) {
    var a = (this.t - this.x) * this.k - this.v * this.c;
    this.v += a * dt; this.x += this.v * dt;
  };

  /* ---------- The nest ---------- */
  function Nest(root) {
    var self = this;
    this.root = root;
    this.lang = (document.documentElement.lang || 'en').slice(0, 2) === 'zh' ? 'zh' : 'en';
    this.T = TEXT[this.lang];
    this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var base = root.getAttribute('data-src') || 'assets/img/qqnest/rig/';

    this.roomEl = root.querySelector('.qqn-room');
    this.roomEl.insertAdjacentHTML('afterbegin', room());
    this.figWrap = el('div', 'qqn-figwrap', this.roomEl);
    var fig = this.fig = el('div', 'qqn-fig', this.figWrap);
    this.fx = el('div', 'qqn-fx', this.roomEl);
    this.bubble = root.querySelector('.qqn-bubble');

    /* QQFigure: same draw order and grouping as the app */
    layer('shadow', fig, base);
    var body = group(fig, PIV.feet);
    var n = this.n = { body: body };
    n.tail = group(body, PIV.tail); layer('tail', n.tail, base);
    layer('body', body, base);
    n.armL = group(body, PIV.shoulderLeft); layer('armLeft', n.armL, base);
    n.armR = group(body, PIV.shoulderRight); layer('armRight', n.armR, base);
    n.plush = group(body, PIV.plush); layer('plush', n.plush, base);
    var head = n.head = group(body, PIV.neck);
    n.back = group(head); layer('hairTail', n.back, base);
    n.earL = group(head, PIV.earLeft); n.earLImg = [layer('earLeft', n.earL, base), layer('earLeft_flush', n.earL, base)];
    n.earR = group(head, PIV.earRight); n.earRImg = [layer('earRight', n.earR, base), layer('earRight_flush', n.earR, base)];
    n.hairBackG = group(head); layer('hairBack', n.hairBackG, base);   // over the ears, under the face
    n.face = group(head); layer('face', n.face, base);
    n.side = group(head); layer('hairSide', n.side, base);
    n.feat = group(head);
    n.brows = group(n.feat); layer('brows', n.brows, base);
    n.fringe = group(head); layer('bangs', n.fringe, base); layer('hairFront', n.fringe, base);
    n.feat2 = group(head);
    n.eyes = {}; EYES.forEach(function (e) { n.eyes[e] = layer('eyes_' + e, n.feat2, base); });
    n.blush = layer('blush', n.feat2, base);
    layer('nose', n.feat2, base);
    n.mouths = {}; MOUTHS.forEach(function (m) { n.mouths[m] = layer('mouth_' + m, n.feat2, base); });
    n.ahoge = group(head, PIV.ahoge); layer('ahoge', n.ahoge, base);

    /* mood + time */
    this.mood = 'idle'; this.fromPose = POSES.idle; this.changedAt = -10;
    this.time = 0; this.phase = Math.random() * 20;
    this.bounce = new Spr();
    this.look = { x: 0, y: 0, tx: 0, ty: 0 };
    this.pointer = null; this.lastPointer = -10;
    this.visible = true;
    this.pokes = 0;

    this.load();
    this.buildActions();
    this.renderBond(false);
    this.layout();
    this.bind();
    this.frame(0);
  }

  Nest.prototype.load = function () {
    this.aff = 0;
    try { this.aff = Math.max(0, parseInt(localStorage.getItem('qqn-bond') || '0', 10) || 0); } catch (e) {}
    this.stage = this.stageFor(this.aff);
    this.applyDecor();
  };
  Nest.prototype.save = function () { try { localStorage.setItem('qqn-bond', String(this.aff)); } catch (e) {} };
  Nest.prototype.stageFor = function (a) { var s = 0; STAGES.forEach(function (st, i) { if (a >= st.at) s = i; }); return s; };
  Nest.prototype.applyDecor = function () {
    this.roomEl.classList.toggle('has-rug', this.stage >= 2);
    this.roomEl.classList.toggle('has-garland', this.stage >= 3);
  };

  Nest.prototype.buildActions = function () {
    var self = this, bar = this.root.querySelector('.qqn-actions'), T = this.T;
    var pat = el('button', 'qqn-btn qqn-btn--pat', bar);
    pat.type = 'button'; pat.innerHTML = icon('pat', 26);
    pat.title = T.pat; pat.setAttribute('aria-label', T.pat);
    pat.addEventListener('click', function (e) { e.stopPropagation(); self.poke(); });
    el('span', 'qqn-sep', bar).setAttribute('aria-hidden', 'true');
    FOODS.forEach(function (f) {
      var b = el('button', 'qqn-btn', bar);
      b.type = 'button'; b.innerHTML = icon(f.id, 26);
      var name = self.T.feed(f[self.lang], f.aff);
      b.title = name; b.setAttribute('aria-label', name);
      b.addEventListener('click', function (e) { e.stopPropagation(); self.feed(f, b); });
    });
  };

  Nest.prototype.layout = function () {
    var r = this.roomEl.getBoundingClientRect();
    // Figure = half the room's width (HomeView: min(w * 0.46, 190) on a ~393pt stage).
    var fw = r.width * 0.5;
    this.figScale = fw / CW;
    this.fig.style.transform = 'scale(' + this.figScale + ')';
    this.figWrap.style.width = fw + 'px';
    this.figWrap.style.height = (fw * CH / CW) + 'px';
  };

  Nest.prototype.bind = function () {
    var self = this;
    this.roomEl.addEventListener('click', function (e) {
      if (self.levelCard && self.levelCard.contains(e.target)) return;
      self.poke();
    });
    this.roomEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); self.poke(); }
    });
    function look(e) { self.pointer = { x: e.clientX, y: e.clientY }; self.lastPointer = self.time; self.wake(); }
    window.addEventListener('pointermove', look, { passive: true });
    window.addEventListener('resize', function () { self.layout(); self.wake(); }, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(function () { self.layout(); }).observe(this.roomEl);

    if ('IntersectionObserver' in window) {
      var greeted = false;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          self.visible = en.isIntersecting;
          if (en.isIntersecting) {
            self.wake();
            self.scheduleIdle();
            if (!greeted && en.intersectionRatio > 0.5) {
              greeted = true;
              setTimeout(function () { self.say(self.idleLine()); self.setMood('wave', 2.2); }, 450);
            }
          }
        });
      }, { threshold: [0, 0.5] }).observe(this.roomEl);
    }
    this.wake();
  };

  /* ---------- Behaviour (HomeView) ---------- */
  Nest.prototype.idleLine = function () {
    var T = this.T, pool = T.idle.slice();
    if (this.stage >= 2) pool = pool.concat(T.idle2);
    if (this.stage >= 3) pool = pool.concat(T.idle4);
    return pick(pool);
  };
  Nest.prototype.pokeLine = function () {
    var T = this.T, pool = T.poke.slice();
    if (this.stage >= 1) pool = pool.concat(T.poke1);
    if (this.stage >= 3) pool = pool.concat(T.poke3);
    return pick(pool);
  };

  Nest.prototype.poke = function () {
    this.pokes++;
    var rewarded = this.pokes <= POKE_LIMIT;
    this.hop();
    this.burst(11);
    var moods = this.stage >= 3 ? ['happy', 'shy', 'love', 'surprised'] : ['happy', 'surprised', 'shy'];
    this.setMood(pick(moods), 1.6);
    this.say(rewarded ? this.pokeLine() : this.T.full);
    if (rewarded) this.addAffection(1);
  };

  Nest.prototype.feed = function (f, btn) {
    var self = this;
    if (this.feeding) return;
    this.feeding = true;
    // The treat leaves its button and flies up into the room (HomeView flyingFood).
    var app = this.root.querySelector('.qqn-app');
    var a = app.getBoundingClientRect(), r = this.roomEl.getBoundingClientRect(), b = btn.getBoundingClientRect();
    var food = el('span', 'qqn-food', app);
    food.innerHTML = icon(f.id, 46);
    var sx = b.left + b.width / 2 - a.left, sy = b.top + b.height / 2 - a.top;
    var ex = r.left - a.left + r.width / 2, ey = r.top - a.top + r.height * 0.62;
    var dur = this.reduce ? 200 : 450;
    var anim = food.animate([
      { transform: 'translate(' + (sx - 23) + 'px,' + (sy - 23) + 'px) scale(1.3)', opacity: 1 },
      { transform: 'translate(' + (ex - 23) + 'px,' + (ey - 23) + 'px) scale(.6)', opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(.42,0,1,1)', fill: 'forwards' });
    anim.onfinish = function () {
      food.remove();
      self.feeding = false;
      self.hop();
      self.burst(11);
      self.hearts(7);
      self.setMood(f.love >= 3 ? 'surprised' : 'happy', 2.0);
      self.say(pick(f.r[self.lang]) || self.T.thanks);
      self.addAffection(f.aff);
    };
  };

  Nest.prototype.setMood = function (m, revertAfter) {
    var self = this, now = this.time;
    // Spring from wherever he is right now, so quick changes never jump.
    var cur = this.moodAt(now);
    this.fromPose = cur; this.changedAt = now; this.mood = m;
    clearTimeout(this.revert);
    if (revertAfter) this.revert = setTimeout(function () { self.setMood('idle'); }, revertAfter * 1000);
    this.wake();
  };
  Nest.prototype.progress = function (now) {
    if (this.reduce) return [1, 1];
    var since = now - this.changedAt;
    return [spring(since), Math.min(1, Math.max(0, since / 0.14))];
  };
  Nest.prototype.moodAt = function (now) {
    var pk = this.progress(now), target = POSES[this.mood];
    var here = mix(this.fromPose, target, pk[0]);
    here.eyes = pk[1] < 0.5 ? this.fromPose.eyes : target.eyes;
    here.mouth = pk[1] < 0.5 ? this.fromPose.mouth : target.mouth;
    return here;
  };

  Nest.prototype.hop = function () {
    var b = this.bounce, self = this;
    b.set(this.reduce ? 0.25 : 1, 0.22, 0.45);
    clearTimeout(this.hopT);
    this.hopT = setTimeout(function () { b.set(0, 0.42, 0.5); }, 140);
    this.wake();
  };

  Nest.prototype.say = function (text) {
    var b = this.bubble;
    if (!b || this.levelCard) return;
    b.textContent = text;
    b.classList.remove('is-on'); void b.offsetWidth; b.classList.add('is-on');
  };

  Nest.prototype.scheduleIdle = function () {
    var self = this;
    if (this.idleT) return;
    this.idleT = setTimeout(function () {
      self.idleT = null;
      if (!self.visible) return;
      if (!self.levelCard) {
        self.say(self.idleLine());
        if (Math.random() < 0.5) self.setMood(pick(['wave', 'yawn', 'idle']), 2.2);
      }
      self.scheduleIdle();
    }, 9000 + Math.random() * 7000);
  };

  Nest.prototype.addAffection = function (n) {
    var before = this.stage;
    this.aff += n;
    this.stage = this.stageFor(this.aff);
    this.save();
    this.renderBond(true);
    if (this.stage > before) this.levelUp();
  };

  Nest.prototype.renderBond = function (animate) {
    var bond = this.root.querySelector('.qqn-bond');
    if (!bond) return;
    var s = STAGES[this.stage], next = STAGES[this.stage + 1], lang = this.lang;
    bond.querySelector('.qqn-bond__name').textContent = s[lang];
    var p = next ? (this.aff - s.at) / (next.at - s.at) : 1;
    bond.querySelector('.qqn-bond__to').textContent = next ? this.T.toNext(Math.max(0, next.at - this.aff), next[lang]) : this.T.top;
    var bar = bond.querySelector('.qqn-bond__bar i');
    bar.style.width = Math.max(6, Math.min(100, p * 100)).toFixed(1) + '%';
    bond.querySelector('.qqn-bond__bar').setAttribute('aria-valuenow', String(Math.round(p * 100)));
    if (animate && !this.reduce) {
      var heart = bond.querySelector('.qqn-bond__heart');
      heart.classList.remove('is-pop'); void heart.offsetWidth; heart.classList.add('is-pop');
    }
  };

  Nest.prototype.levelUp = function () {
    var self = this, s = STAGES[this.stage], lang = this.lang;
    this.applyDecor();
    if (this.levelCard) this.levelCard.remove();
    if (this.bubble) this.bubble.classList.remove('is-on');
    var card = this.levelCard = el('div', 'qqn-level', this.roomEl);
    card.setAttribute('role', 'status');
    card.innerHTML = '<p class="qqn-level__t">' + this.T.levelUp + '</p><p class="qqn-level__s">' + s[lang] +
      '</p><p class="qqn-level__n">' + s.note[lang] + '</p><button type="button" class="qqn-level__ok">' + this.T.ok + '</button>';
    function close() {
      if (!self.levelCard) return;
      card.classList.add('is-out');
      setTimeout(function () { card.remove(); }, 260);
      self.levelCard = null;
      self.setMood('idle');
    }
    card.querySelector('button').addEventListener('click', function (e) { e.stopPropagation(); close(); });
    this.setMood('cheer', 0);
    this.confetti();
    setTimeout(close, 4200);
  };

  /* ---------- Particles (Particles.swift) ---------- */
  function shape(path, color, size) {
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" aria-hidden="true"><path d="' + path + '" fill="' + color + '"/></svg>';
  }
  Nest.prototype.origin = function () {
    var r = this.roomEl.getBoundingClientRect();
    return [r.width / 2, r.height * 0.58, r.width / 380];
  };
  Nest.prototype.burst = function (count) {
    if (this.reduce) count = Math.ceil(count / 3);
    var o = this.origin(), shapes = [HEART, STAR, SPARKLE], colors = ['#FF8BA0', '#FFC85C', '#AE9AE3'];
    for (var i = 0; i < count; i++) {
      var p = el('span', 'qqn-p', this.fx);
      var size = (10 + Math.random() * 9) * o[2];
      p.innerHTML = shape(shapes[i % 3], colors[i % 3], size);
      var a = (i / count) * TAU + Math.random() * 0.5, d = (60 + Math.random() * 36) * o[2];
      var x = Math.cos(a) * d, y = Math.sin(a) * d * 0.8 - 20 * o[2];
      p.style.left = o[0] + 'px'; p.style.top = o[1] + 'px';
      p.animate([
        { transform: 'translate(-50%,-50%) scale(.3)', opacity: 0 },
        { transform: 'translate(calc(-50% + ' + x * 0.7 + 'px),calc(-50% + ' + y * 0.7 + 'px)) scale(1.1)', opacity: 1, offset: 0.35 },
        { transform: 'translate(calc(-50% + ' + x + 'px),calc(-50% + ' + y + 'px)) scale(.6) rotate(' + (Math.random() * 60 - 30) + 'deg)', opacity: 0 }
      ], { duration: 700 + Math.random() * 250, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = p.remove.bind(p);
    }
  };
  Nest.prototype.hearts = function (count) {
    if (this.reduce) return;
    var o = this.origin();
    for (var i = 0; i < count; i++) {
      var p = el('span', 'qqn-p', this.fx);
      p.innerHTML = shape(HEART, i % 2 ? '#FF8BA0' : '#FF9AA6', (14 + Math.random() * 8) * o[2]);
      var x = (Math.random() * 2 - 1) * 70 * o[2];
      p.style.left = o[0] + x * 0.3 + 'px'; p.style.top = o[1] + 'px';
      p.animate([
        { transform: 'translate(-50%,-50%) scale(.4)', opacity: 0 },
        { transform: 'translate(calc(-50% + ' + x * 0.6 + 'px),-' + 60 * o[2] + 'px) scale(1)', opacity: 1, offset: 0.3 },
        { transform: 'translate(calc(-50% + ' + x + 'px),-' + 170 * o[2] + 'px) scale(.8)', opacity: 0 }
      ], { duration: 1300 + Math.random() * 500, delay: i * 90, easing: 'ease-out', fill: 'backwards' }).onfinish = p.remove.bind(p);
    }
  };
  Nest.prototype.confetti = function () {
    if (this.reduce) return;
    var r = this.roomEl.getBoundingClientRect(), colors = ['#FF8BA0', '#FFC85C', '#A9D6F5', '#CDBDF2', '#B8E6D2'];
    for (var i = 0; i < 36; i++) {
      var p = el('span', 'qqn-conf', this.fx);
      p.style.background = colors[i % colors.length];
      p.style.left = (Math.random() * r.width) + 'px';
      var drift = (Math.random() * 2 - 1) * 40;
      p.animate([
        { transform: 'translate(0,-20px) rotate(0)', opacity: 1 },
        { transform: 'translate(' + drift + 'px,' + (r.height + 20) + 'px) rotate(' + (360 + Math.random() * 360) + 'deg)', opacity: 0.9 }
      ], { duration: 1600 + Math.random() * 1200, delay: Math.random() * 400, easing: 'cubic-bezier(.25,.6,.45,1)', fill: 'backwards' })
        .onfinish = p.remove.bind(p);
    }
  };

  /* ---------- Frame loop ---------- */
  Nest.prototype.wake = function () {
    if (this.raf || !this.visible) return;
    var self = this, last = performance.now();
    function loop(now) {
      var dt = Math.min((now - last) / 1000, 1 / 20); last = now;
      self.raf = null;
      self.frame(dt);
      var settling = self.reduce && (Math.abs(self.bounce.x - self.bounce.t) > 0.001 || self.time - self.changedAt < 0.2);
      if (self.visible && (!self.reduce || settling)) self.raf = requestAnimationFrame(loop);
    }
    this.raf = requestAnimationFrame(loop);
  };

  function rot(d) { return 'rotate(' + d.toFixed(2) + 'deg)'; }

  Nest.prototype.frame = function (dt) {
    this.time += dt;
    var now = this.time, n = this.n;
    var pk = this.progress(now);
    var t = this.reduce ? 0 : now + this.phase;
    var s = state(this.fromPose, POSES[this.mood], pk[0], pk[1], t,
      this.reduce ? 0 : pulse(t, 3.6, 4.1, 0.16, 0.05), this.reduce ? 0 : pulse(t, 5.3, 9.7, 0.28, 0.1, 0.55));

    // Web extra: turn toward a nearby pointer.
    var L = this.look;
    if (this.pointer && now - this.lastPointer < 4 && !this.reduce) {
      var r = this.roomEl.getBoundingClientRect();
      var hx = r.left + r.width / 2, hy = r.top + r.height * 0.5;
      L.tx = Math.tanh((this.pointer.x - hx) / Math.max(260, r.width) * 1.3);
      L.ty = Math.tanh((this.pointer.y - hy) / Math.max(260, r.width) * 1.3);
    } else { L.tx = 0; L.ty = 0; }
    var ease = Math.min(1, dt * 5);
    L.x += (L.tx - L.x) * ease; L.y += (L.ty - L.y) * ease;
    var lx = L.x, ly = L.y;

    // Tap bounce: squash-and-stretch from the feet.
    this.bounce.step(dt);
    var b = this.bounce.x;
    this.figWrap.style.transform = 'translate(-50%,' + (-b * 124 * this.figScale).toFixed(2) + 'px) scale(' +
      (1 + b * 0.10).toFixed(4) + ',' + (1 - b * 0.14).toFixed(4) + ')';

    n.body.style.transform = rot(s.lean) + ' scale(' + (1 + 0.02 * s.breathe).toFixed(4) + ')';
    n.tail.style.transform = rot(s.tail);
    n.armL.style.transform = rot(s.armLeft);
    n.armR.style.transform = rot(s.armRight);
    n.plush.style.transform = rot(s.plush);
    n.head.style.transform = 'translate(' + (lx * 10).toFixed(1) + 'px,' + (-s.headLift * K + ly * 6).toFixed(2) + 'px) ' +
      rot(s.headTilt + lx * 2.5);
    // A little parallax inside the head: features lead, back hair trails.
    n.back.style.transform = n.hairBackG.style.transform = 'translate(' + (-lx * 6).toFixed(1) + 'px,' + (-ly * 4).toFixed(1) + 'px)';
    n.face.style.transform = 'translate(' + (lx * 5).toFixed(1) + 'px,' + (ly * 4).toFixed(1) + 'px)';
    n.side.style.transform = 'translate(' + (lx * 4).toFixed(1) + 'px,' + (ly * 3).toFixed(1) + 'px)';
    var fx = (lx * 14).toFixed(1), fy = (ly * 10).toFixed(1);
    n.feat.style.transform = 'translate(' + fx + 'px,' + fy + 'px)';
    n.feat2.style.transform = 'translate(' + fx + 'px,' + fy + 'px)';
    n.brows.style.transform = 'translateY(' + (-s.browLift * K).toFixed(2) + 'px)';
    n.fringe.style.transform = 'translate(' + (lx * 9).toFixed(1) + 'px,' + (ly * 6).toFixed(1) + 'px)';
    n.earL.style.transform = 'translate(' + (-lx * 4).toFixed(1) + 'px,0) ' + rot(s.earLeft);
    n.earR.style.transform = 'translate(' + (-lx * 4).toFixed(1) + 'px,0) ' + rot(s.earRight);
    n.earLImg[0].style.opacity = n.earRImg[0].style.opacity = (1 - s.earFlush).toFixed(3);
    n.earLImg[1].style.opacity = n.earRImg[1].style.opacity = s.earFlush.toFixed(3);
    n.ahoge.style.transform = 'translate(' + (lx * 9).toFixed(1) + 'px,0) ' + rot(s.ahoge);
    EYES.forEach(function (e) { n.eyes[e].style.opacity = Math.min(1, s.eyes[e] || 0).toFixed(3); });
    MOUTHS.forEach(function (m) { n.mouths[m].style.opacity = Math.min(1, s.mouths[m] || 0).toFixed(3); });
    n.blush.style.opacity = Math.min(1, BLUSH_BASE + s.blushBoost).toFixed(3);
  };

  function init() {
    document.querySelectorAll('[data-qqnest]').forEach(function (root) {
      if (!root.__qqn) root.__qqn = new Nest(root);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
