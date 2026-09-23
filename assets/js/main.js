/* ==========================================================================
   4M Studio — main.js
   No dependencies. Everything degrades gracefully if JS is off.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Sticky nav + scroll progress + reveals ----------
     One rAF-throttled scroll handler drives everything that depends on
     scroll position. A plain geometry check is used instead of
     IntersectionObserver here: it can't miss an element during a fast
     scroll or a programmatic jump, which matters because .reveal elements
     start invisible. */
  var nav = document.querySelector('.nav');
  var progress = document.querySelector('.progress');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('is-stuck', y > 12);

    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (h > 0 ? Math.min(y / h, 1) : 0) + ')';
    }

    checkReveals();
    checkCounters();
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function inView(el, ratio) {
    var r = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh * ratio && r.bottom > 0;
  }

  function checkReveals() {
    if (!revealables.length) return;
    revealables = revealables.filter(function (el) {
      // Anything at or above the fold counts, including elements a fast jump
      // skipped past entirely — a .reveal must never stay invisible.
      if (el.getBoundingClientRect().top < (window.innerHeight || 800) * 0.9) { el.classList.add('is-in'); return false; }
      return true;
    });
  }

  if (reduceMotion) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
    revealables = [];
  }

  /* ---------- Count-up stats ---------- */
  function animateCount(el) {
    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || '';
    var decimals = (el.dataset.count.split('.')[1] || '').length;
    var dur = 1500;
    var start = performance.now();

    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));

  function checkCounters() {
    if (!counters.length) return;
    counters = counters.filter(function (el) {
      if (!inView(el, 0.95)) return true;
      animateCount(el);
      return false;
    });
  }

  if (reduceMotion) {
    counters.forEach(function (el) {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
    counters = [];
  }

  /* First pass, once layout has settled. */
  onScroll();
  window.addEventListener('load', onScroll);

  /* ---------- Cursor spotlight on app cards ---------- */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.app-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------- Gentle pointer parallax on the hero phones ---------- */
  var phones = document.querySelector('.phones');
  if (phones && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
    var raf = null;
    window.addEventListener('pointermove', function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var cx = (e.clientX / window.innerWidth - 0.5) * 2;
        var cy = (e.clientY / window.innerHeight - 0.5) * 2;
        phones.style.transform = 'rotateY(' + (cx * 5).toFixed(2) + 'deg) rotateX(' + (-cy * 4).toFixed(2) + 'deg)';
        raf = null;
      });
    }, { passive: true });
  }

  /* ---------- Active section highlighting ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'var(--text)' : '';
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { so.observe(s); });
  }

  /* ---------- Apps dropdown ----------
     Opens on hover (with a short close delay so the pointer can travel into
     the panel), on keyboard focus, and on click/tap. Esc closes it. On the
     mobile menu the list is simply shown inline. */
  document.querySelectorAll('[data-menu]').forEach(function (item) {
    var trigger = item.querySelector('.nav__apps');
    var timer = null;
    var mobile = window.matchMedia('(max-width: 720px)');
    function set(open) {
      clearTimeout(timer);
      item.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    }
    item.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse' && !mobile.matches) set(true); });
    item.addEventListener('pointerleave', function (e) {
      if (e.pointerType === 'mouse' && !mobile.matches) timer = setTimeout(function () { set(false); }, 180);
    });
    trigger.addEventListener('click', function (e) {
      if (mobile.matches) return;               // inline list on mobile; link goes to #apps
      // First tap/click opens the panel; a click while open follows the link.
      if (!item.classList.contains('is-open')) { e.preventDefault(); set(true); }
    });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) set(false); });
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); set(true); setTimeout(function () { var f = item.querySelector('.menu__item'); if (f) f.focus(); }, 40); }
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { set(false); trigger.focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.target.classList.contains('menu__item')) {
        e.preventDefault();
        var all = Array.prototype.slice.call(item.querySelectorAll('.menu__item'));
        var i = all.indexOf(e.target) + (e.key === 'ArrowDown' ? 1 : -1);
        if (all[i]) all[i].focus();
      }
    });
    document.addEventListener('click', function (e) { if (!item.contains(e.target)) set(false); });
  });

  /* ---------- Language choice is remembered ---------- */
  document.querySelectorAll('[data-set-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('4m-lang', a.getAttribute('data-set-lang')); } catch (e) {}
      // Keep the hash (e.g. #slide-wearly) when switching language.
      if (location.hash && a.href.indexOf('#') < 0) a.href = a.href + location.hash;
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
