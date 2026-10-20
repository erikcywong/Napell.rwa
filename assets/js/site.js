/* NAPELL RWA — shared behaviour (no dependencies) */
(function () {
  'use strict';

  /* scroll progress */
  var prog = document.getElementById('prog');
  function onScroll() {
    if (!prog) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    prog.style.width = Math.min(100, Math.max(0, p * 100)) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.classList.remove('open');
    });
  }

  /* reveal on scroll */
  var items = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 45 + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* PI gate */
  var gate = document.getElementById('pi-gate');
  var unlock = document.getElementById('pi-unlock');
  var locked = document.getElementById('pi-content');
  if (gate && unlock && locked) {
    var boxes = gate.querySelectorAll('input[type=checkbox]');
    function sync() {
      var all = true;
      boxes.forEach(function (b) { if (!b.checked) all = false; });
      unlock.disabled = !all;
      unlock.style.opacity = all ? '1' : '.45';
      unlock.style.cursor = all ? 'pointer' : 'not-allowed';
    }
    boxes.forEach(function (b) { b.addEventListener('change', sync); });
    sync();
    unlock.addEventListener('click', function () {
      if (unlock.disabled) return;
      gate.style.display = 'none';
      locked.classList.add('open');
      try { sessionStorage.setItem('napell_pi', '1'); } catch (e) {}
      locked.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    try {
      if (sessionStorage.getItem('napell_pi') === '1') {
        gate.style.display = 'none';
        locked.classList.add('open');
      }
    } catch (e) {}
  }

  /* footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
