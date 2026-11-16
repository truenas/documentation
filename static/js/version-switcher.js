/*
 * Docs version switcher (DOCS-2800).
 *
 * Resolves "the same article in another version" in four tiers:
 *   same    - same article, same URL shape in the target
 *   moved   - same article at an updated URL (alias history, unique page name)
 *   parent  - nearest existing parent of the article
 *   landing - the target version's landing page
 *
 * Version locations live in a registry (/docs/versions.json, with the embedded default below),
 * so URL layout changes are edits to that file and not changes to this script.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VersionSwitcher = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var GROUP_ORDER = ['latest', 'next', 'current', 'previous', 'archive'];

  var BOOKS = {
    truenas: ['scaletutorials', 'scaleuireference', 'scaleclireference'],
    core: ['coretutorials', 'uireference']
  };

  function entry(id, label, product, root, extra) {
    var base = {
      id: id,
      label: label,
      product: product,
      roots: [root],
      pagemap: root + 'pagemap.json',
      sitemap: root + 'sitemap.xml',
      keyPrefix: '',
      menus: ['TrueNAS'],
      group: 'previous'
    };
    for (var k in extra) { base[k] = extra[k]; }
    return base;
  }

  // Today's layout and dropdown. Keep identical to static/versions.json (a test checks this).
  var DEFAULT_REGISTRY = {
    v: 1,
    hubSections: ['contributing', 'references', 'solutions', 'softwarestatus', 'software-status', 'hardware', 'search', 'archive', 'core', 'truecommand', 'scale', 'nightly'],
    versions: [
      entry('nightly', '28', 'truenas', '/docs/scale/', { pagemap: '/docs/pagemap.json', sitemap: '/docs/sitemap.xml', keyPrefix: 'scale/', group: 'next' }),
      entry('27', '27', 'truenas', '/docs/scale/27/', { group: 'next' }),
      entry('25.10', '25.10', 'truenas', '/docs/scale/25.10/', { group: 'current' }),
      entry('25.04', '25.04', 'truenas', '/docs/scale/25.04/', { group: 'previous' }),
      entry('13.0', '13.0', 'core', '/docs/core/13.0/', { group: 'previous' }),
      entry('3.0', '3.0', 'truecommand', '/docs/truecommand/3.0/', { menus: ['TrueCommand'], group: 'current' }),
      entry('archive', 'Archive', 'archive', '/docs/archive/', { pagemap: null, sitemap: null, menus: ['TrueNAS', 'TrueCommand'], group: 'archive' })
    ]
  };

  // ---- normalization ----------------------------------------------------------

  // Comparison key: lowercase, no leading slash, one trailing slash, '' for a version root.
  function norm(rel) {
    var s = String(rel || '').toLowerCase().replace(/\/+/g, '/').replace(/^\//, '');
    if (s && s.charAt(s.length - 1) !== '/') { s += '/'; }
    return s;
  }

  function withSlash(path) {
    var s = String(path || '').toLowerCase().replace(/\/+/g, '/');
    return s.charAt(s.length - 1) === '/' ? s : s + '/';
  }

  function lastSegment(rel) {
    var parts = norm(rel).split('/').filter(Boolean);
    return parts.length ? parts[parts.length - 1] : '';
  }

  // ---- location ---------------------------------------------------------------

  var ADHOC_RE = /^\/docs\/(scale|core|truecommand)\/(\d+(?:\.\d+)?)\//;

  function adhocVersion(root, id, family) {
    return { id: id, label: 'Archive', product: 'archive', family: family, roots: [root], pagemap: null, sitemap: null, keyPrefix: '', menus: [], group: 'archive', adhoc: true };
  }

  // The registry the page is using: the embedded default until a served one has loaded.
  var activeRegistry = DEFAULT_REGISTRY;

  function parseLocation(pathname, registry) {
    registry = registry || activeRegistry;
    var p = withSlash(pathname);
    var hub = registry.hubSections || [];
    var best = null;
    var bestRoot = '';

    registry.versions.forEach(function (v) {
      v.roots.forEach(function (r) {
        if (p.indexOf(r) !== 0 || r.length <= bestRoot.length) { return; }
        if (r === '/docs/') {
          // Bare "latest": never the hub landing page, a hub section or a numbered directory.
          var first = p.slice(r.length).split('/')[0];
          if (!first || hub.indexOf(first) !== -1 || /^\d/.test(first)) { return; }
        }
        best = v;
        bestRoot = r;
      });
    });

    var m = ADHOC_RE.exec(p);
    if (m && m[0].length > bestRoot.length) {
      return { version: adhocVersion(m[0], m[2], m[1]), rel: norm(p.slice(m[0].length)) };
    }
    if (!best) { return { version: null, rel: norm(p) }; }
    return { version: best, rel: norm(p.slice(bestRoot.length)) };
  }

  function labelFor(pathname, registry) {
    var v = parseLocation(pathname, registry).version;
    if (!v) { return ''; }
    return v.adhoc ? 'Archive' : v.label;
  }

  function dropdownItems(menu, registry) {
    registry = registry || activeRegistry;
    var items = [];
    registry.versions.forEach(function (v, i) {
      if (v.menus && v.menus.indexOf(menu) !== -1) {
        items.push({ order: GROUP_ORDER.indexOf(v.group), i: i, item: { group: v.group, id: v.id, label: v.label } });
      }
    });
    items.sort(function (a, b) { return a.order - b.order || a.i - b.i; });
    return items.map(function (x) { return x.item; });
  }

  // ---- indexes ----------------------------------------------------------------

  function buildIndex(pagemap, version) {
    var prefix = (version && version.keyPrefix) || '';
    var canon = Object.create(null);
    var aliasToCanon = Object.create(null);
    var aliasesByCanon = Object.create(null);
    var bySlug = Object.create(null);
    var pages = (pagemap && pagemap.pages) || {};

    Object.keys(pages).forEach(function (key) {
      var k = norm(key);
      if (prefix) {
        if (k.indexOf(prefix) !== 0) { return; }
        k = k.slice(prefix.length);
      }
      if (!k) { return; }
      canon[k] = true;
      var slug = lastSegment(k);
      (bySlug[slug] = bySlug[slug] || []).push(k);
      var list = aliasesByCanon[k] = aliasesByCanon[k] || [];
      (pages[key] || []).forEach(function (alias) {
        var a = norm(alias);
        if (prefix && a.indexOf(prefix) === 0) { a = a.slice(prefix.length); }
        if (!a) { return; }
        list.push(a);
        if (!(a in aliasToCanon)) { aliasToCanon[a] = k; }
      });
    });

    function resolveKey(rel) {
      var r = norm(rel);
      if (canon[r]) { return r; }
      return r in aliasToCanon ? aliasToCanon[r] : null;
    }

    return {
      resolve: resolveKey,
      aliasesOf: function (rel) {
        var c = resolveKey(rel);
        return c ? aliasesByCanon[c].slice() : [];
      },
      uniqueBySlug: function (slug) {
        var list = bySlug[String(slug || '').toLowerCase()];
        return list && list.length === 1 ? list[0] : null;
      }
    };
  }

  function indexFromSitemap(urls, version) {
    var root = version.roots[0];
    var pages = {};
    urls.forEach(function (u) {
      var p = withSlash(String(u).replace(/^https?:\/\/[^/]+/, '').replace(/[?#].*$/, ''));
      if (p.indexOf(root) === 0) {
        var rel = norm(p.slice(root.length));
        if (rel) { pages[rel] = []; }
      }
    });
    return buildIndex({ v: 1, pages: pages }, { keyPrefix: '' });
  }

  // ---- resolver ---------------------------------------------------------------

  function allBooks() { return BOOKS.truenas.concat(BOOKS.core); }

  function stripBook(rel) {
    var parts = norm(rel).split('/').filter(Boolean);
    if (parts.length && allBooks().indexOf(parts[0]) !== -1) { parts.shift(); }
    return parts.length ? parts.join('/') + '/' : '';
  }

  // The path as written, with the book segment stripped, and with each of the target's books added.
  function variants(rel, target) {
    var out = [];
    function add(v) { if (v && out.indexOf(v) === -1) { out.push(v); } }
    var base = stripBook(rel);
    add(norm(rel));
    add(base);
    (BOOKS[target.product] || []).forEach(function (b) { add(norm(b + '/' + base)); });
    return out;
  }

  // Look the candidates up in an index: canonical hits first, then alias hits.
  function lookup(cands, index) {
    var i, hit;
    for (i = 0; i < cands.length; i++) {
      hit = index.resolve(cands[i]);
      if (hit !== null && hit === cands[i]) { return { key: hit, canonical: true }; }
    }
    for (i = 0; i < cands.length; i++) {
      hit = index.resolve(cands[i]);
      if (hit !== null) { return { key: hit, canonical: false }; }
    }
    return null;
  }

  function resolve(rel, source, target, sourceIndex, targetIndex) {
    var r = norm(rel);
    var base = stripBook(r);
    var landing = target.roots[0];
    function out(key, tier) { return { url: landing + key, tier: tier }; }

    // Tier 1 and 2: the path itself (a hit through the target's aliases counts as moved).
    var hit = lookup(variants(r, target), targetIndex);
    if (hit) { return out(hit.key, hit.canonical ? 'same' : 'moved'); }

    // Tier 2: the source page's own alias history, then a unique page name in the target.
    var aliases = sourceIndex ? sourceIndex.aliasesOf(r) : [];
    for (var i = 0; i < aliases.length; i++) {
      hit = lookup(variants(aliases[i], target), targetIndex);
      if (hit) { return out(hit.key, 'moved'); }
    }
    var slug = lastSegment(base);
    var unique = slug ? targetIndex.uniqueBySlug(slug) : null;
    if (unique) { return out(unique, 'moved'); }

    // Tier 3: nearest existing parent.
    var parts = base.split('/').filter(Boolean);
    while (parts.length > 1) {
      parts.pop();
      hit = lookup(variants(parts.join('/') + '/', target), targetIndex);
      if (hit) { return out(hit.key, 'parent'); }
    }

    // Tier 4.
    return out('', 'landing');
  }

  // ---- loading and navigation -------------------------------------------------

  var REGISTRY_URL = '/docs/versions.json';
  var NOTICE_KEY = 'versionSwitcherNotice';
  var DEFAULT_TIMEOUT = 3000;
  var registryPromise = null;
  var indexPromises = {};

  function _resetCaches() {
    registryPromise = null;
    indexPromises = {};
    activeRegistry = DEFAULT_REGISTRY;
  }

  function defaultFetch() {
    if (typeof fetch === 'function') { return fetch.bind(typeof window !== 'undefined' ? window : undefined); }
    return function () { return Promise.reject(new Error('no fetch')); };
  }

  // Fetch and parse inside one timeout, so neither a stalled request nor a stalled body hangs the switcher.
  function fetchParsed(fetchFn, url, ms, kind) {
    return new Promise(function (resolvePromise, rejectPromise) {
      var done = false;
      var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var timer = setTimeout(function () {
        if (done) { return; }
        done = true;
        if (controller) { controller.abort(); }
        rejectPromise(new Error('timeout'));
      }, ms);
      function finish(fn, value) {
        if (done) { return; }
        done = true;
        clearTimeout(timer);
        fn(value);
      }
      Promise.resolve()
        .then(function () { return fetchFn(url, controller ? { signal: controller.signal } : undefined); })
        .then(function (res) {
          if (!res || !res.ok) { throw new Error('HTTP ' + (res && res.status)); }
          return kind === 'text' ? res.text() : res.json();
        })
        .then(function (value) { finish(resolvePromise, value); }, function (err) { finish(rejectPromise, err); });
    });
  }

  function validRegistry(r) {
    return !!r && r.v === 1 && Array.isArray(r.versions) && r.versions.length > 0 &&
      r.versions.every(function (v) { return v && v.id && Array.isArray(v.roots) && v.roots.length > 0; });
  }

  function loadRegistry(fetchFn, opts) {
    if (registryPromise) { return registryPromise; }
    var ms = (opts && opts.timeoutMs) || DEFAULT_TIMEOUT;
    registryPromise = fetchParsed(fetchFn || defaultFetch(), REGISTRY_URL, ms, 'json').then(
      function (r) { return validRegistry(r) ? r : DEFAULT_REGISTRY; },
      function () { return DEFAULT_REGISTRY; }
    ).then(function (registry) {
      activeRegistry = registry;
      return registry;
    });
    return registryPromise;
  }

  // Page map first, then the sitemap; null when neither is usable. Failures are not cached.
  function loadIndex(version, fetchFn, opts) {
    var key = [version.id, version.pagemap, version.sitemap].join('|');
    if (indexPromises[key]) { return indexPromises[key]; }
    var f = fetchFn || defaultFetch();
    var ms = (opts && opts.timeoutMs) || DEFAULT_TIMEOUT;

    function fromPagemap() {
      if (!version.pagemap) { return Promise.resolve(null); }
      return fetchParsed(f, version.pagemap, ms, 'json')
        .then(function (d) { return d && d.pages ? buildIndex(d, version) : null; })
        .catch(function () { return null; });
    }
    function fromSitemap() {
      if (!version.sitemap) { return Promise.resolve(null); }
      return fetchParsed(f, version.sitemap, ms, 'text')
        .then(function (text) {
          var urls = [];
          var re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
          var m;
          while ((m = re.exec(text)) !== null) { urls.push(m[1]); }
          return urls.length ? indexFromSitemap(urls, version) : null;
        })
        .catch(function () { return null; });
    }

    var p = fromPagemap().then(function (index) { return index || fromSitemap(); }).then(function (index) {
      if (!index) { delete indexPromises[key]; }
      return index;
    });
    indexPromises[key] = p;
    return p;
  }

  function getStorage(deps) {
    if (deps && deps.storage) { return deps.storage; }
    try { return typeof window !== 'undefined' ? window.sessionStorage : null; } catch (e) { return null; }
  }

  function safeSet(storage, key, value) {
    try { if (storage) { storage.setItem(key, value); } } catch (e) { /* storage may be blocked */ }
  }

  function switchVersion(targetId, deps) {
    deps = deps || {};
    var fetchFn = deps.fetch || defaultFetch();
    var loc = deps.location || window.location;
    var storage = getStorage(deps);

    return loadRegistry(fetchFn, deps).then(function (registry) {
      var target = null;
      registry.versions.forEach(function (v) { if (v.id === targetId) { target = v; } });
      if (!target) { return; }

      var cur = parseLocation(loc.pathname, registry);
      var source = cur.version;
      if (source && source.id === target.id) { return; }

      var landing = target.roots[0];
      var comparable = target.product === 'truenas' || target.product === 'core';
      if (!source || !comparable || source.product === 'truecommand' || source.family === 'truecommand' || cur.rel === '') {
        loc.assign(landing);
        return;
      }

      return Promise.all([loadIndex(source, fetchFn, deps), loadIndex(target, fetchFn, deps)]).then(function (indexes) {
        if (!indexes[1]) { loc.assign(landing); return; }
        var result = resolve(cur.rel, source, target, indexes[0], indexes[1]);
        var url = result.url;
        if (result.tier === 'same' || result.tier === 'moved') {
          url += loc.hash || '';
        } else {
          safeSet(storage, NOTICE_KEY, JSON.stringify({ tier: result.tier, label: target.label }));
        }
        loc.assign(url);
      });
    });
  }

  // Shown on the destination page after a parent or landing fallback.
  function showPendingNotice(deps) {
    deps = deps || {};
    var storage = getStorage(deps);
    var doc = deps.document || (typeof document !== 'undefined' ? document : null);
    if (!storage || !doc || !doc.body) { return; }

    var raw;
    try {
      raw = storage.getItem(NOTICE_KEY);
      if (raw !== null && raw !== undefined) { storage.removeItem(NOTICE_KEY); }
    } catch (e) { return; }
    if (!raw) { return; }

    var notice;
    try { notice = JSON.parse(raw); } catch (e) { return; }
    var text = null;
    if (notice.tier === 'parent') { text = 'Showing the closest match in version ' + notice.label; }
    if (notice.tier === 'landing') { text = 'That article is not in version ' + notice.label + '; showing the version home page'; }
    if (!text) { return; }

    var box = doc.createElement('div');
    box.setAttribute('role', 'status');
    box.textContent = text;
    box.style.position = 'fixed';
    box.style.bottom = '16px';
    box.style.left = '16px';
    box.style.right = '16px';
    box.style.maxWidth = '480px';
    box.style.padding = '10px 40px 10px 14px';
    box.style.background = '#1f2d3d';
    box.style.color = '#fff';
    box.style.borderRadius = '6px';
    box.style.fontSize = '14px';
    box.style.zIndex = '10000';
    box.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';

    var close = doc.createElement('button');
    close.textContent = '×';
    close.setAttribute('aria-label', 'Dismiss');
    close.style.position = 'absolute';
    close.style.top = '4px';
    close.style.right = '8px';
    close.style.background = 'none';
    close.style.border = 'none';
    close.style.color = '#fff';
    close.style.fontSize = '20px';
    close.style.cursor = 'pointer';
    close.addEventListener('click', function () { box.remove(); });
    box.appendChild(close);
    doc.body.appendChild(box);
  }

  var api = {
    GROUP_ORDER: GROUP_ORDER,
    BOOKS: BOOKS,
    DEFAULT_REGISTRY: DEFAULT_REGISTRY,
    parseLocation: parseLocation,
    labelFor: labelFor,
    dropdownItems: dropdownItems,
    buildIndex: buildIndex,
    indexFromSitemap: indexFromSitemap,
    resolve: resolve,
    loadRegistry: loadRegistry,
    loadIndex: loadIndex,
    switchVersion: switchVersion,
    showPendingNotice: showPendingNotice,
    _resetCaches: _resetCaches
  };

  // In the browser: warm the registry now and show any pending notice once the page is ready.
  if (typeof window !== 'undefined' && typeof document !== 'undefined' && !(typeof module === 'object' && module.exports)) {
    loadRegistry();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { showPendingNotice(); });
    } else {
      showPendingNotice();
    }
  }

  return api;
}));
