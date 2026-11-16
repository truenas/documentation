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

  function adhocVersion(root, id) {
    return { id: id, label: 'Archive', product: 'archive', roots: [root], pagemap: null, sitemap: null, keyPrefix: '', menus: [], group: 'archive', adhoc: true };
  }

  function parseLocation(pathname, registry) {
    registry = registry || DEFAULT_REGISTRY;
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
      return { version: adhocVersion(m[0], m[2]), rel: norm(p.slice(m[0].length)) };
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
    registry = registry || DEFAULT_REGISTRY;
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

  return {
    GROUP_ORDER: GROUP_ORDER,
    BOOKS: BOOKS,
    DEFAULT_REGISTRY: DEFAULT_REGISTRY,
    parseLocation: parseLocation,
    labelFor: labelFor,
    dropdownItems: dropdownItems,
    buildIndex: buildIndex,
    indexFromSitemap: indexFromSitemap,
    resolve: resolve,
    _norm: norm
  };
}));
