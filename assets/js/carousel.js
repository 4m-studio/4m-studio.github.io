/* ==========================================================================
   4M Studio — hero news carousel.
   One slide per app. Arrows, tabs, swipe/drag and ←/→ keys.
   Autoplay (data-autoplay="ms"): moves on by itself, with a progress bar on
   the active tab. It holds while the pointer is over the carousel, while a
   visitor is touching/typing in it (and for a while after), while keyboard
   focus is inside it, while MieMie is mid-gesture, when the carousel is off
   screen or the browser tab is hidden. The pause button stops it for good;
   prefers-reduced-motion turns it off. Inactive slides are `inert`, so
   keyboard and screen-reader users only ever meet the slide that is on screen.
   The tab strip scrolls sideways when the apps don't fit; the active tab is
   kept in view and the edges fade when there is more to swipe to.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var viewport = root.querySelector('.news__viewport');
    var track = root.querySelector('.news__track');
    var tabsEl = root.querySelector('.news__tabs');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.news__slide'));
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.news__tab'));
    var toggle = root.querySelector('[data-toggle]');
    var n = slides.length, index = 0;
    if (!n) return;

    /* ---------- Tab strip: keep the active tab in view, fade overflowing edges ---------- */
    function edges() {
      if (!tabsEl) return;
      var max = tabsEl.scrollWidth - tabsEl.clientWidth;
      tabsEl.classList.toggle('has-more-start', tabsEl.scrollLeft > 2);
      tabsEl.classList.toggle('has-more-end', tabsEl.scrollLeft < max - 2);
    }
    function reveal(i, smooth) {
      if (!tabsEl || tabsEl.scrollWidth <= tabsEl.clientWidth) { edges(); return; }
      var t = tabs[i];
      var left = t.offsetLeft - (tabsEl.clientWidth - t.offsetWidth) / 2;
      left = Math.max(0, Math.min(left, tabsEl.scrollWidth - tabsEl.clientWidth));
      // scrollTo on the strip only — never scrollIntoView, which would also scroll the page.
      if (tabsEl.scrollTo) tabsEl.scrollTo({ left: left, behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
      else tabsEl.scrollLeft = left;
    }
    if (tabsEl) {
      tabsEl.addEventListener('scroll', edges, { passive: true });
      window.addEventListener('resize', function () { reveal(index, false); }, { passive: true });
    }

    // The browser scrolls the (overflow: hidden) viewport itself when it follows a
    // #slide-… link; that offset would add to the track transform and show the wrong slide.
    function unscroll() { if (viewport.scrollLeft) viewport.scrollLeft = 0; }
    viewport.addEventListener('scroll', unscroll, { passive: true });

    function go(i, opts) {
      opts = opts || {};
      index = (i + n) % n;
      unscroll();
      track.style.transform = 'translate3d(' + (-index * 100) + '%,0,0)';
      slides.forEach(function (s, k) {
        var on = k === index;
        s.classList.toggle('is-active', on);
        if (on) { s.removeAttribute('inert'); s.removeAttribute('aria-hidden'); }
        else { s.setAttribute('inert', ''); s.setAttribute('aria-hidden', 'true'); }
      });
      tabs.forEach(function (t, k) {
        t.setAttribute('aria-selected', String(k === index));
        t.tabIndex = k === index ? 0 : -1;
      });
      root.style.setProperty('--active-accent', getComputedStyle(slides[index]).getPropertyValue('--accent'));
      reveal(index, !opts.instant);
      if (opts.focusTab) tabs[index].focus();
      if (!opts.silent && history.replaceState) {
        history.replaceState(null, '', index === 0 ? location.pathname + location.search : '#' + slides[index].id);
      }
      restart();
    }

    root.querySelector('[data-prev]').addEventListener('click', function () { hold(); go(index - 1); });
    root.querySelector('[data-next]').addEventListener('click', function () { hold(); go(index + 1); });
    tabs.forEach(function (t, k) { t.addEventListener('click', function () { hold(); go(k); }); });

    root.addEventListener('keydown', function (e) {
      if (e.target.closest('.mm-stage, .qqn-room')) return;   // MieMie / Qiao Que own Enter/Space
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1, { focusTab: !!e.target.closest('.news__tabs') }); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); go(index - 1, { focusTab: !!e.target.closest('.news__tabs') }); }
    });

    /* ---------- Swipe / drag ----------
       Horizontal intent only — vertical scrolling stays native (touch-action:
       pan-y). A real drag swallows the click that follows, so swiping across
       MieMie doesn't also make her gesture. */
    var start = null, dx = 0, dragging = false, suppressClick = false;
    function begin(x, y, target) {
      if (target.closest('button, a, .mm-actions, .qqn-actions')) return;
      start = { x: x, y: y, w: viewport.clientWidth };
      dx = 0; dragging = false;
    }
    function move(x, y) {           // returns true while a horizontal drag is in progress
      if (!start) return false;
      var mx = x - start.x, my = y - start.y;
      if (!dragging) {
        if (Math.abs(mx) > 10 && Math.abs(mx) > Math.abs(my) * 1.2) {
          dragging = true; track.classList.add('is-dragging');
        } else if (Math.abs(my) > 12) { start = null; return false; }
      }
      if (dragging) {
        dx = mx;
        var edge = (index === 0 && dx > 0) || (index === n - 1 && dx < 0) ? 0.35 : 1;
        track.style.transform = 'translate3d(calc(' + (-index * 100) + '% + ' + (dx * edge) + 'px),0,0)';
      }
      return dragging;
    }
    function end() {
      if (!start) return;
      var w = start.w; start = null;
      if (!dragging) return;
      track.classList.remove('is-dragging');
      suppressClick = true; setTimeout(function () { suppressClick = false; }, 60);
      if (Math.abs(dx) > Math.min(90, w * 0.18)) go(index + (dx < 0 ? 1 : -1)); else go(index, { silent: true });
      dragging = false;
    }
    // Mouse and pen: pointer events.
    viewport.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch' || e.button !== 0) return;
      begin(e.clientX, e.clientY, e.target);
    });
    window.addEventListener('pointermove', function (e) { if (e.pointerType !== 'touch') move(e.clientX, e.clientY); }, { passive: true });
    window.addEventListener('pointerup', function (e) { if (e.pointerType !== 'touch') end(); });
    // Touch: touch events, so a horizontal swipe can stop the page from
    // claiming the gesture while vertical scrolling stays native.
    viewport.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { start = null; return; }
      begin(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }, { passive: true });
    viewport.addEventListener('touchmove', function (e) {
      if (move(e.touches[0].clientX, e.touches[0].clientY) && e.cancelable) e.preventDefault();
    }, { passive: false });
    viewport.addEventListener('touchend', end);
    viewport.addEventListener('touchcancel', end);
    viewport.addEventListener('click', function (e) {
      if (suppressClick) { e.stopPropagation(); e.preventDefault(); }
    }, true);

    /* ---------- Autoplay ---------- */
    var DELAY = parseInt(root.getAttribute('data-autoplay'), 10) || 0;
    var HOLD = 12000;                 // quiet time after the visitor last touched/typed in the carousel
    var auto = DELAY > 0 && !reduceMotion;
    var elapsed = 0, last = 0, heldUntil = 0, hovering = false, onScreen = true, stopped = false, tick = null;

    function hold() { heldUntil = Date.now() + HOLD; }
    function restart() { elapsed = 0; paint(); }
    function paint() {
      if (!auto) return;
      var p = stopped ? 0 : Math.min(1, elapsed / DELAY);
      tabs.forEach(function (t, k) { t.style.setProperty('--p', k === index ? p.toFixed(3) : '0'); });
    }
    function waiting() {
      return stopped || hovering || !onScreen || document.hidden || Date.now() < heldUntil ||
        !!root.querySelector(':focus-visible') ||
        !!slides[index].querySelector('[data-playing]');     // MieMie mid-gesture
    }
    function step() {
      var now = Date.now(), dt = Math.min(now - last, 1000); last = now;
      if (waiting()) return;
      elapsed += dt;
      if (elapsed >= DELAY) go(index + 1, { silent: true });
      else paint();
    }

    if (auto) {
      root.classList.add('is-autoplay');
      if (toggle) {
        toggle.hidden = false;
        toggle.addEventListener('click', function () {
          stopped = !stopped;
          toggle.setAttribute('aria-pressed', String(stopped));
          toggle.setAttribute('aria-label', toggle.getAttribute(stopped ? 'data-label-play' : 'data-label-pause'));
          root.classList.toggle('is-stopped', stopped);
          restart();
        });
      }
      root.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') hovering = true; });
      root.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') hovering = false; });
      root.addEventListener('pointerdown', function (e) { if (!e.target.closest('[data-toggle]')) hold(); }, true);
      root.addEventListener('touchstart', hold, { passive: true, capture: true });
      root.addEventListener('keydown', hold, true);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (en) { onScreen = en[0].isIntersecting; }, { threshold: 0.35 }).observe(viewport);
      }
      last = Date.now();
      tick = setInterval(step, 100);
    }

    // Deep link: /#slide-wearly opens on Wearly (also when the hash changes later).
    window.addEventListener('hashchange', function () {
      var el = location.hash && root.querySelector(location.hash.replace(/[^#\w-]/g, ''));
      if (el && slides.indexOf(el) >= 0) go(slides.indexOf(el), { silent: true });
    });
    var hashed = location.hash && root.querySelector(location.hash.replace(/[^#\w-]/g, ''));
    var first = hashed && slides.indexOf(hashed) >= 0 ? slides.indexOf(hashed) : 0;
    track.classList.add('is-dragging'); // no animation for the first placement
    go(first, { silent: true, instant: true });
    requestAnimationFrame(function () { requestAnimationFrame(function () { track.classList.remove('is-dragging'); }); });
  });
})();
