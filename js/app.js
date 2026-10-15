/* Boot: routes, theme, and the saved-item counter in the header. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL;
  var router = TRAVEL.router;

  router.route('/', function () { return TRAVEL.views.home(); });
  router.route('/travelers', function () { return TRAVEL.views.travelers(); });
  router.route('/trip', function () { return TRAVEL.views.trip(); });
  router.route('/prep', function () { return TRAVEL.views.prep(); });
  router.route('/country/:code/:tab?', function (params) { return TRAVEL.views.country(params); });

  /* ------------------------------- theme -------------------------------- */
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var label = toggle ? toggle.querySelector('[data-theme-label]') : null;

  function systemPrefersDark() {
    return global.matchMedia && global.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(theme) {
    if (theme === 'dark' || theme === 'light') root.setAttribute('data-theme', theme);
    else root.removeAttribute('data-theme');
    if (label) {
      var effective = theme || (systemPrefersDark() ? 'dark' : 'light');
      label.textContent = effective === 'dark' ? 'Light mode' : 'Dark mode';
    }
  }

  applyTheme(TRAVEL.store.get().theme);

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = TRAVEL.store.get().theme || (systemPrefersDark() ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      TRAVEL.store.update(function (s) { s.theme = next; });
      applyTheme(next);
    });
  }

  /* --------------------------- saved item count -------------------------- */
  var counter = document.getElementById('trip-count');

  function countSaved() {
    var saved = TRAVEL.store.get().saved || {};
    var total = 0;
    Object.keys(saved).forEach(function (code) { total += Object.keys(saved[code]).length; });
    return total;
  }

  function refreshTripCount() {
    if (!counter) return;
    var n = countSaved();
    counter.hidden = n === 0;
    counter.textContent = n ? TRAVEL.util.plural(n, 'item') + ' saved' : '';
  }
  TRAVEL.refreshTripCount = refreshTripCount;
  refreshTripCount();

  /* ------------------------------ nav state ----------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));

  router.afterRender(function (path) {
    var key = path === '/' ? 'home' :
      path.indexOf('/travelers') === 0 ? 'travelers' :
      path.indexOf('/trip') === 0 ? 'trip' :
      path.indexOf('/prep') === 0 ? 'prep' : 'home';
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-nav') === key) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    refreshTripCount();
  });

  var sub = document.getElementById('brand-sub');
  if (sub) {
    var full = TRAVEL.data.all().filter(function (c) { return c.depth === 'full'; }).length;
    sub.textContent = full + ' full guides · ' + TRAVEL.data.all().length + ' countries';
  }

  var footMeta = document.getElementById('foot-meta');
  if (footMeta) {
    footMeta.textContent = 'Your travelers, saved items and checklists are stored in this browser only. Nothing is sent to a server.';
  }

  router.start(document.getElementById('main'));
})(window);
