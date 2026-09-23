/* ==========================================================================
   4M Studio — hero news carousel.
   One slide per app. Arrows, tabs, swipe/drag and ←/→ keys. No autoplay:
   the first slide is MieMie, and she shouldn't be yanked away mid-wave.
   Inactive slides are `inert`, so keyboard and screen-reader users only
   ever meet the slide that is on screen.
   ========================================================================== */
(function () {
  'use strict';

  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var viewport = root.querySelector('.news__viewport');
    var track = root.querySelector('.news__track');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.news__slide'));
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.news__tab'));
    var n = slides.length, index = 0;
    if (!n) return;

    function go(i, opts) {
      index = (i + n) % n;
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
      if (opts && opts.focusTab) tabs[index].focus();
      if (!(opts && opts.silent) && history.replaceState) {
        history.replaceState(null, '', index === 0 ? location.pathname + location.search : '#' + slides[index].id);
      }
    }

    root.querySelector('[data-prev]').addEventListener('click', function () { go(index - 1); });
    root.querySelector('[data-next]').addEventListener('click', function () { go(index + 1); });
    tabs.forEach(function (t, k) { t.addEventListener('click', function () { go(k); }); });

    root.addEventListener('keydown', function (e) {
      if (e.target.closest('.mm-stage')) return;          // MieMie owns Enter/Space
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1, { focusTab: !!e.target.closest('.news__tabs') }); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); go(index - 1, { focusTab: !!e.target.closest('.news__tabs') }); }
    });

    /* Swipe / drag. Horizontal intent only — vertical scrolling stays native
       (touch-action: pan-y). A real drag swallows the click that follows, so
       swiping across MieMie doesn't also make her gesture. */
    var start = null, dx = 0, dragging = false, suppressClick = false;
    function begin(x, y, target) {
      if (target.closest('button, a, .mm-actions')) return;
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

    // Deep link: /#slide-wearly opens on Wearly (also when the hash changes later).
    window.addEventListener('hashchange', function () {
      var el = location.hash && root.querySelector(location.hash.replace(/[^#\w-]/g, ''));
      if (el && slides.indexOf(el) >= 0) go(slides.indexOf(el), { silent: true });
    });
    var hashed = location.hash && root.querySelector(location.hash.replace(/[^#\w-]/g, ''));
    var first = hashed && slides.indexOf(hashed) >= 0 ? slides.indexOf(hashed) : 0;
    track.classList.add('is-dragging'); // no animation for the first placement
    go(first, { silent: true });
    requestAnimationFrame(function () { requestAnimationFrame(function () { track.classList.remove('is-dragging'); }); });
  });
})();
