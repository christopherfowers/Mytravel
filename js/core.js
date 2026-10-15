/* Core: namespace, persistent store, hash router, DOM helpers.
   Loaded as a classic script so the app also runs from a local file:// path. */
(function (global) {
  'use strict';

  var TRAVEL = global.TRAVEL || {};
  global.TRAVEL = TRAVEL;

  /* ----------------------------- storage ----------------------------- */
  var KEY = 'tripdossier.v1';

  function defaultState() {
    return {
      travelers: [],
      diet: {},
      mobility: {},
      prefs: { energy: 'any', languageComfort: 'none', budget: 'any', interests: [] },
      saved: {},        // countryCode -> { itemId: {type, name, day} }
      checked: {},      // checklist item id -> true
      notes: {},
      lastCountry: null,
      theme: null
    };
  }

  var state = defaultState();

  function load() {
    try {
      var raw = global.localStorage.getItem(KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          state = Object.assign(defaultState(), parsed);
          state.prefs = Object.assign(defaultState().prefs, parsed.prefs || {});
        }
      }
    } catch (err) {
      /* private browsing, blocked storage, or corrupt data: carry on with defaults */
    }
  }

  function save() {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (err) {
      /* nothing to do: the app stays usable for this session */
    }
  }

  var listeners = [];

  var store = {
    get: function () { return state; },
    update: function (fn) {
      fn(state);
      save();
      listeners.forEach(function (l) { l(state); });
    },
    onChange: function (fn) { listeners.push(fn); },
    reset: function () {
      state = defaultState();
      save();
      listeners.forEach(function (l) { l(state); });
    },
    exportJSON: function () { return JSON.stringify(state, null, 2); },
    importJSON: function (text) {
      var parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== 'object') throw new Error('That file does not contain trip data.');
      state = Object.assign(defaultState(), parsed);
      state.prefs = Object.assign(defaultState().prefs, parsed.prefs || {});
      save();
      listeners.forEach(function (l) { l(state); });
    }
  };
  TRAVEL.store = store;

  /* ------------------------------ dom -------------------------------- */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') node.addEventListener(k.slice(2), v);
        else if (v === true) node.setAttribute(k, '');
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach(function (child) {
      if (child == null || child === false) return;
      node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    });
    return node;
  }

  function frag(nodes) {
    var f = document.createDocumentFragment();
    (nodes || []).forEach(function (n) { if (n) f.appendChild(n); });
    return f;
  }

  TRAVEL.dom = { el: el, esc: esc, frag: frag };

  /* ---------------------------- utilities ---------------------------- */
  function slug(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function uniq(list) {
    return list.filter(function (v, i) { return list.indexOf(v) === i; });
  }

  function plural(n, one, many) {
    return n + ' ' + (n === 1 ? one : (many || one + 's'));
  }

  function titleCase(text) {
    return String(text).replace(/(^|[\s-])([a-z])/g, function (m, p, c) { return p + c.toUpperCase(); });
  }

  TRAVEL.util = { slug: slug, uniq: uniq, plural: plural, titleCase: titleCase };

  /* ----------------------------- routing ----------------------------- */
  var routes = [];

  function route(pattern, handler) {
    // pattern like '/country/:code/:tab?'
    var names = [];
    var rx = pattern.replace(/\/:([a-zA-Z]+)(\?)?/g, function (m, name, opt) {
      names.push(name);
      return opt ? '(?:/([^/]+))?' : '/([^/]+)';
    });
    routes.push({ rx: new RegExp('^' + rx + '$'), names: names, handler: handler });
  }

  function currentPath() {
    var hash = global.location.hash || '#/';
    return hash.replace(/^#/, '') || '/';
  }

  function resolve() {
    var path = currentPath();
    for (var i = 0; i < routes.length; i++) {
      var m = path.match(routes[i].rx);
      if (m) {
        var params = {};
        routes[i].names.forEach(function (name, idx) {
          params[name] = m[idx + 1] ? decodeURIComponent(m[idx + 1]) : null;
        });
        return { handler: routes[i].handler, params: params, path: path };
      }
    }
    return null;
  }

  function go(path, opts) {
    var target = '#' + path;
    if (global.location.hash === target) {
      render();
      return;
    }
    if (opts && opts.replace && global.history && global.history.replaceState) {
      global.history.replaceState(null, '', target);
      render();
    } else {
      global.location.hash = target;
    }
  }

  var mount = null;
  var onRendered = [];

  function render() {
    if (!mount) return;
    var match = resolve();
    mount.innerHTML = '';
    if (!match) {
      mount.appendChild(el('div', { class: 'wrap' }, [
        el('div', { class: 'empty' }, [
          el('p', { text: 'That page does not exist.' }),
          el('a', { class: 'btn', href: '#/', text: 'Back to countries' })
        ])
      ]));
    } else {
      var view = match.handler(match.params);
      if (view) mount.appendChild(view);
    }
    onRendered.forEach(function (fn) { fn(currentPath()); });
  }

  TRAVEL.router = {
    route: route,
    go: go,
    render: render,
    path: currentPath,
    afterRender: function (fn) { onRendered.push(fn); },
    start: function (mountNode) {
      mount = mountNode;
      global.addEventListener('hashchange', render);
      render();
    }
  };

  /* --------------------------- country data -------------------------- */
  var countries = {};   // code -> record

  TRAVEL.data = {
    /* A dossier file calls this. Anything registered here is a full guide
       unless it explicitly says otherwise. */
    register: function (record) {
      if (!record || !record.code) return;
      var code = record.code.toUpperCase();
      countries[code] = Object.assign(countries[code] || {}, record, {
        code: code,
        depth: record.depth || 'full'
      });
    },
    registerBaseline: function (list) {
      list.forEach(function (record) {
        var code = record.code.toUpperCase();
        // a full dossier already registered wins; baseline only fills gaps
        countries[code] = Object.assign({ depth: 'basic' }, record, countries[code] || {}, { code: code });
      });
    },
    get: function (code) { return code ? countries[String(code).toUpperCase()] || null : null; },
    all: function () {
      return Object.keys(countries).map(function (k) { return countries[k]; })
        .sort(function (a, b) { return a.name.localeCompare(b.name); });
    },
    search: function (query) {
      var q = String(query || '').trim().toLowerCase();
      var all = TRAVEL.data.all();
      if (!q) return all;
      return all.filter(function (c) {
        var haystack = [c.name, c.code, c.region, (c.alsoKnownAs || []).join(' '),
          (c.languages || []).join(' '), (c.cities || []).join(' ')].join(' ').toLowerCase();
        return haystack.indexOf(q) !== -1;
      }).sort(function (a, b) {
        var an = a.name.toLowerCase().indexOf(q), bn = b.name.toLowerCase().indexOf(q);
        if (an !== bn) return (an === -1 ? 99 : an) - (bn === -1 ? 99 : bn);
        return a.name.localeCompare(b.name);
      });
    }
  };

  load();
})(window);
