'use strict';
// Tests for static/js/version-switcher.js (DOCS-2800). Run: node --test scripts/tests/js/
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const VS = require('../../../static/js/version-switcher.js');
const { DEFAULT_REGISTRY, parseLocation, labelFor, dropdownItems, buildIndex, indexFromSitemap, resolve } = VS;

const byId = (id, registry = DEFAULT_REGISTRY) => registry.versions.find((v) => v.id === id);
const mkVersion = (id, product, root, extra = {}) => ({
  id, label: id, product, roots: [root], pagemap: null, sitemap: null, keyPrefix: '', menus: [], group: 'previous', ...extra,
});
const idx = (pages, version) => buildIndex({ v: 1, root: '/', pages }, version || mkVersion('t', 'truenas', '/t/'));

const LATEST = { id: 'latest', label: 'Latest', product: 'truenas', roots: ['/docs/'], pagemap: '/docs/pagemap-latest.json', sitemap: null, keyPrefix: '', menus: ['TrueNAS'], group: 'latest' };
const withLatest = {
  ...DEFAULT_REGISTRY,
  hubSections: ['contributing', 'references', 'solutions', 'hardware', 'scale', 'core', 'truecommand', 'nightly'],
  versions: [...DEFAULT_REGISTRY.versions, LATEST],
};
const newLayout = {
  ...DEFAULT_REGISTRY,
  versions: [
    mkVersion('nightly', 'truenas', '/docs/nightly/'),
    mkVersion('28', 'truenas', '/docs/28/'),
    { ...mkVersion('27', 'truenas', '/docs/scale/27/'), roots: ['/docs/scale/27/', '/docs/27/'] },
  ],
};

// ---- parseLocation / labelFor -------------------------------------------------

test('parseLocation: versioned page under /docs/scale/27/', () => {
  const r = parseLocation('/docs/scale/27/storage/pools/');
  assert.equal(r.version.id, '27');
  assert.equal(r.rel, 'storage/pools/');
});

test('parseLocation: nightly root is a prefix of the others but loses to longer roots', () => {
  assert.equal(parseLocation('/docs/scale/storage/').version.id, 'nightly');
  assert.equal(parseLocation('/docs/scale/storage/').rel, 'storage/');
  assert.equal(parseLocation('/docs/scale/27/storage/').version.id, '27');
});

test('parseLocation: hub page is not under any version', () => {
  assert.equal(parseLocation('/docs/contributing/').version, null);
});

test('parseLocation: unregistered versioned root is parsed ad hoc as archive', () => {
  const r = parseLocation('/docs/scale/24.10/x/');
  assert.equal(r.version.product, 'archive');
  assert.equal(r.version.id, '24.10');
  assert.equal(r.rel, 'x/');
});

test('parseLocation: path without trailing slash still matches the root', () => {
  const r = parseLocation('/docs/scale/27');
  assert.equal(r.version.id, '27');
  assert.equal(r.rel, '');
});

test('parseLocation: bare latest matches only non-hub, non-versioned paths', () => {
  assert.equal(parseLocation('/docs/shares/smb/', withLatest).version.id, 'latest');
  assert.equal(parseLocation('/docs/shares/smb/', withLatest).rel, 'shares/smb/');
  assert.equal(parseLocation('/docs/contributing/', withLatest).version, null);
  assert.equal(parseLocation('/docs/', withLatest).version, null);
  assert.equal(parseLocation('/docs/scale/27/x/', withLatest).version.id, '27');
});

test('parseLocation: new layout (nightly/, 28/, 27 with two roots)', () => {
  assert.equal(parseLocation('/docs/nightly/a/', newLayout).version.id, 'nightly');
  assert.equal(parseLocation('/docs/28/a/', newLayout).version.id, '28');
  assert.equal(parseLocation('/docs/27/a/', newLayout).version.id, '27');
  assert.equal(parseLocation('/docs/scale/27/a/', newLayout).version.id, '27');
});

test('labelFor: registry label, Archive for ad hoc, empty for none', () => {
  assert.equal(labelFor('/docs/scale/27/x/'), '27');
  assert.equal(labelFor('/docs/scale/storage/'), '28');
  assert.equal(labelFor('/docs/scale/24.10/x/'), 'Archive');
  assert.equal(labelFor('/docs/contributing/'), '');
});

// ---- dropdownItems -------------------------------------------------------------

test('dropdownItems: default registry order and groups', () => {
  assert.deepEqual(dropdownItems('TrueNAS').map((i) => i.id), ['nightly', '27', '25.10', '25.04', '13.0', 'archive']);
  assert.deepEqual(dropdownItems('TrueCommand').map((i) => i.id), ['3.0', 'archive']);
  assert.deepEqual(dropdownItems('TrueNAS')[0], { group: 'next', id: 'nightly', label: '28' });
});

test('dropdownItems: a latest entry is first in the TrueNAS menu', () => {
  const items = dropdownItems('TrueNAS', withLatest);
  assert.equal(items[0].id, 'latest');
  assert.equal(items[0].label, 'Latest');
});

test('versions.json is a copy of the embedded default registry', () => {
  const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../static/versions.json'), 'utf8'));
  assert.deepEqual(file, DEFAULT_REGISTRY);
});

// ---- indexes ---------------------------------------------------------------------

test('buildIndex: keyPrefix keeps version pages and drops hub pages', () => {
  const nightly = byId('nightly');
  const index = buildIndex({ v: 1, root: '/', pages: { 'scale/storage/pools/': [], 'contributing/x/': [] } }, nightly);
  assert.equal(index.resolve('storage/pools/'), 'storage/pools/');
  assert.equal(index.resolve('contributing/x/'), null);
});

test('indexFromSitemap: resolves paths under the version root', () => {
  const v27 = byId('27');
  const index = indexFromSitemap(['https://www.truenas.com/docs/scale/27/storage/pools/'], v27);
  assert.equal(index.resolve('storage/pools/'), 'storage/pools/');
  assert.deepEqual(index.aliasesOf('storage/pools/'), []);
});

// ---- resolve: tiers ----------------------------------------------------------------

test('resolve: same path exists in target -> same', () => {
  const r = resolve('storage/pools/', byId('25.10'), byId('27'), null, idx({ 'storage/pools/': [] }));
  assert.deepEqual(r, { url: '/docs/scale/27/storage/pools/', tier: 'same' });
});

test('resolve: 25.10 -> 27 strips the book segment', () => {
  const r = resolve('scaletutorials/storage/pools/', byId('25.10'), byId('27'), null, idx({ 'storage/pools/': [] }));
  assert.deepEqual(r, { url: '/docs/scale/27/storage/pools/', tier: 'same' });
});

test('resolve: 27 -> 25.10 adds the book segment', () => {
  const r = resolve('storage/pools/', byId('27'), byId('25.10'), null, idx({ 'scaletutorials/storage/pools/': [] }));
  assert.deepEqual(r, { url: '/docs/scale/25.10/scaletutorials/storage/pools/', tier: 'same' });
});

test('resolve: CORE 13.0 coretutorials -> 27', () => {
  const r = resolve('coretutorials/storage/pools/', byId('13.0'), byId('27'), null, idx({ 'storage/pools/': [] }));
  assert.equal(r.tier, 'same');
  assert.equal(r.url, '/docs/scale/27/storage/pools/');
});

test('resolve: CORE 13.0 uireference -> 25.10 scaleuireference', () => {
  const r = resolve('uireference/storage/pools/', byId('13.0'), byId('25.10'), null, idx({ 'scaleuireference/storage/pools/': [] }));
  assert.equal(r.tier, 'same');
  assert.equal(r.url, '/docs/scale/25.10/scaleuireference/storage/pools/');
});

test('resolve: 27 -> CORE 13.0 adds coretutorials', () => {
  const r = resolve('storage/pools/', byId('27'), byId('13.0'), null, idx({ 'coretutorials/storage/pools/': [] }));
  assert.equal(r.tier, 'same');
  assert.equal(r.url, '/docs/core/13.0/coretutorials/storage/pools/');
});

test('resolve: CORE -> SCALE with an ambiguous page name falls to the parent, never moved', () => {
  const target = idx({ 'storage/': [], 'storage/x/pools/': [], 'other/pools/': [] });
  const r = resolve('coretutorials/storage/pools/', byId('13.0'), byId('27'), null, target);
  assert.equal(r.tier, 'parent');
  assert.equal(r.url, '/docs/scale/27/storage/');
});

test('resolve: alias in target maps to the canonical page, never the alias', () => {
  const target = idx({ 'storage/newname/': ['storage/pools/'] });
  const r = resolve('storage/pools/', byId('25.10'), byId('27'), null, target);
  assert.deepEqual(r, { url: '/docs/scale/27/storage/newname/', tier: 'moved' });
});

test('resolve: an alias of the source page that exists in the target -> moved', () => {
  const source = idx({ 'storage/pools/': ['old/pools-page/'] });
  const target = idx({ 'old/pools-page/': [] });
  const r = resolve('storage/pools/', byId('25.10'), byId('27'), source, target);
  assert.deepEqual(r, { url: '/docs/scale/27/old/pools-page/', tier: 'moved' });
});

test('resolve: unique last segment in target -> moved; two candidates -> not used', () => {
  const unique = resolve('x/pools/', byId('25.10'), byId('27'), null, idx({ 'storage/pools/': [] }));
  assert.deepEqual(unique, { url: '/docs/scale/27/storage/pools/', tier: 'moved' });
  const two = resolve('x/pools/', byId('25.10'), byId('27'), null, idx({ 'x/': [], 'storage/pools/': [], 'other/pools/': [] }));
  assert.equal(two.tier, 'parent');
  assert.equal(two.url, '/docs/scale/27/x/');
});

test('resolve: nearest existing parent', () => {
  const nearest = resolve('a/b/c/', byId('25.10'), byId('27'), null, idx({ 'a/': [], 'a/b/': [] }));
  assert.deepEqual(nearest, { url: '/docs/scale/27/a/b/', tier: 'parent' });
  const far = resolve('a/b/c/', byId('25.10'), byId('27'), null, idx({ 'a/': [] }));
  assert.deepEqual(far, { url: '/docs/scale/27/a/', tier: 'parent' });
});

test('resolve: nothing matches -> landing page of the target', () => {
  const r = resolve('a/b/c/', byId('25.10'), byId('27'), null, idx({ 'z/': [] }));
  assert.deepEqual(r, { url: '/docs/scale/27/', tier: 'landing' });
});

test('resolve: works against a sitemap-built index', () => {
  const target = indexFromSitemap(['https://www.truenas.com/docs/scale/27/storage/pools/'], byId('27'));
  const r = resolve('storage/pools/', byId('25.10'), byId('27'), null, target);
  assert.equal(r.tier, 'same');
});

test('resolve: uppercase input without trailing slash is normalized', () => {
  const r = resolve('Storage/Pools', byId('25.10'), byId('27'), null, idx({ 'storage/pools/': [] }));
  assert.equal(r.tier, 'same');
});

test('resolve: pre-cutover nightly target uses its canonical root and ignores hub pages', () => {
  const nightly = byId('nightly');
  const target = buildIndex({ v: 1, root: '/', pages: { 'scale/storage/pools/': [], 'contributing/storage/pools/': [] } }, nightly);
  const r = resolve('storage/pools/', byId('27'), nightly, null, target);
  assert.deepEqual(r, { url: '/docs/scale/storage/pools/', tier: 'same' });
});

// ---- loading, navigation, notice (Task 3) -------------------------------------------

const { loadRegistry, loadIndex, switchVersion, showPendingNotice, _resetCaches } = VS;

function mkFetch(routes, log) {
  return async (url) => {
    if (log) { log.push(url); }
    const r = routes[url];
    if (r === undefined) { return { ok: false, status: 404 }; }
    if (r === 'hang') { return new Promise(() => {}); }
    if (r === 'reject') { throw new Error('network down'); }
    if (r.raw !== undefined) { return { ok: true, json: async () => JSON.parse(r.raw), text: async () => r.raw }; }
    if (r.text !== undefined) { return { ok: true, text: async () => r.text }; }
    return { ok: true, json: async () => r };
  };
}
function mkLocation(pathname, hash = '', search = '') {
  return { pathname, hash, search, assigned: [], assign(u) { this.assigned.push(u); } };
}
function mkStorage(throwing = false) {
  const m = new Map();
  return {
    m,
    getItem(k) { if (throwing) { throw new Error('blocked'); } return m.has(k) ? m.get(k) : null; },
    setItem(k, v) { if (throwing) { throw new Error('blocked'); } m.set(k, String(v)); },
    removeItem(k) { if (throwing) { throw new Error('blocked'); } m.delete(k); },
  };
}
function mkDocument() {
  const mk = () => ({ children: [], style: {}, attrs: {}, listeners: {}, textContent: '',
    appendChild(c) { this.children.push(c); return c; }, setAttribute(k, v) { this.attrs[k] = v; },
    addEventListener(t, f) { this.listeners[t] = f; }, remove() { this.removed = true; } });
  const body = mk();
  return { body, createElement: () => mk() };
}
const SRC = '/docs/scale/25.10/scaletutorials/storage/pools/';
const SRC_MAP = { v: 1, pages: { 'scaletutorials/storage/pools/': [] } };
const T27_MAP = { v: 1, pages: { 'storage/pools/': [], 'storage/': [] } };
const T = { timeoutMs: 50 };

test.beforeEach(() => _resetCaches());

test('switchVersion: canonical URL from the target page map; source and target maps fetched', async () => {
  const log = [];
  const loc = mkLocation(SRC);
  const fetchFn = mkFetch({ '/docs/scale/25.10/pagemap.json': SRC_MAP, '/docs/scale/27/pagemap.json': T27_MAP }, log);
  await switchVersion('27', { fetch: fetchFn, location: loc, storage: mkStorage(), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/storage/pools/']);
  assert.ok(log.includes('/docs/scale/25.10/pagemap.json') && log.includes('/docs/scale/27/pagemap.json'));
});

test('switchVersion: a registry served from /docs/versions.json is used', async () => {
  const registry = { v: 1, hubSections: [], versions: [
    mkVersion('nightly', 'truenas', '/docs/nightly/', { pagemap: '/docs/nightly/pagemap.json' }),
    mkVersion('27', 'truenas', '/docs/scale/27/', { pagemap: '/docs/scale/27/pagemap.json' }),
  ] };
  const loc = mkLocation('/docs/nightly/storage/pools/');
  const fetchFn = mkFetch({ '/docs/versions.json': registry, '/docs/nightly/pagemap.json': { v: 1, pages: { 'storage/pools/': [] } }, '/docs/scale/27/pagemap.json': T27_MAP });
  await switchVersion('27', { fetch: fetchFn, location: loc, storage: mkStorage(), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/storage/pools/']);
});

test('switchVersion: malformed or failing registry falls back to the embedded default', async () => {
  for (const reg of [{ raw: '{{not json' }, 'reject', { v: 2, versions: [] }, { v: 1, versions: [] }]) {
    _resetCaches();
    const loc = mkLocation(SRC);
    const fetchFn = mkFetch({ '/docs/versions.json': reg, '/docs/scale/25.10/pagemap.json': SRC_MAP, '/docs/scale/27/pagemap.json': T27_MAP });
    await switchVersion('27', { fetch: fetchFn, location: loc, storage: mkStorage(), ...T });
    assert.deepEqual(loc.assigned, ['/docs/scale/27/storage/pools/']);
  }
});

test('switchVersion: missing target page map falls back to its sitemap', async () => {
  const loc = mkLocation(SRC);
  const sitemap = { text: '<urlset><url><loc>https://www.truenas.com/docs/scale/27/storage/pools/</loc></url></urlset>' };
  await switchVersion('27', { fetch: mkFetch({ '/docs/scale/27/sitemap.xml': sitemap }), location: loc, storage: mkStorage(), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/storage/pools/']);
});

test('switchVersion: malformed page map JSON is a failure, not an exception', async () => {
  const loc = mkLocation(SRC);
  await switchVersion('27', { fetch: mkFetch({ '/docs/scale/27/pagemap.json': { raw: '<<<' } }), location: loc, storage: mkStorage(), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/']);
});

test('switchVersion: every fetch rejecting or hanging ends on the landing page', async () => {
  for (const mode of ['reject', 'hang']) {
    _resetCaches();
    const loc = mkLocation(SRC);
    const routes = { '/docs/versions.json': mode, '/docs/scale/25.10/pagemap.json': mode, '/docs/scale/27/pagemap.json': mode, '/docs/scale/25.10/sitemap.xml': mode, '/docs/scale/27/sitemap.xml': mode };
    await switchVersion('27', { fetch: mkFetch(routes), location: loc, storage: mkStorage(), ...T });
    assert.deepEqual(loc.assigned, ['/docs/scale/27/']);
  }
});

test('switchVersion: CORE 13.0 to 27 resolves through both page maps, and back', async () => {
  const core = { v: 1, pages: { 'coretutorials/storage/pools/': [] } };
  const loc = mkLocation('/docs/core/13.0/coretutorials/storage/pools/');
  await switchVersion('27', { fetch: mkFetch({ '/docs/core/13.0/pagemap.json': core, '/docs/scale/27/pagemap.json': T27_MAP }), location: loc, storage: mkStorage(), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/storage/pools/']);
  _resetCaches();
  const back = mkLocation('/docs/scale/27/storage/pools/');
  await switchVersion('13.0', { fetch: mkFetch({ '/docs/core/13.0/pagemap.json': core, '/docs/scale/27/pagemap.json': T27_MAP }), location: back, storage: mkStorage(), ...T });
  assert.deepEqual(back.assigned, ['/docs/core/13.0/coretutorials/storage/pools/']);
});

test('switchVersion: TrueCommand and Archive go straight to the landing page without page maps', async () => {
  for (const [id, root] of [['3.0', '/docs/truecommand/3.0/'], ['archive', '/docs/archive/']]) {
    _resetCaches();
    const log = [];
    const loc = mkLocation(SRC);
    await switchVersion(id, { fetch: mkFetch({}, log), location: loc, storage: mkStorage(), ...T });
    assert.deepEqual(loc.assigned, [root]);
    assert.ok(!log.some((u) => /pagemap|sitemap/.test(u)), log.join(','));
  }
});

test('switchVersion: hash kept on same/moved matches, dropped on parent; query never forwarded', async () => {
  const maps = { '/docs/scale/25.10/pagemap.json': SRC_MAP, '/docs/scale/27/pagemap.json': T27_MAP };
  const same = mkLocation(SRC, '#sec', '?q=1');
  await switchVersion('27', { fetch: mkFetch(maps), location: same, storage: mkStorage(), ...T });
  assert.deepEqual(same.assigned, ['/docs/scale/27/storage/pools/#sec']);
  _resetCaches();
  const parent = mkLocation('/docs/scale/25.10/scaletutorials/storage/other-page/', '#sec', '?q=1');
  await switchVersion('27', { fetch: mkFetch(maps), location: parent, storage: mkStorage(), ...T });
  assert.deepEqual(parent.assigned, ['/docs/scale/27/storage/']);
});

test('switchVersion: same version or a page outside any root', async () => {
  const same = mkLocation(SRC);
  await switchVersion('25.10', { fetch: mkFetch({}), location: same, storage: mkStorage(), ...T });
  assert.deepEqual(same.assigned, []);
  const outside = mkLocation('/docs/contributing/');
  await switchVersion('27', { fetch: mkFetch({}), location: outside, storage: mkStorage(), ...T });
  assert.deepEqual(outside.assigned, ['/docs/scale/27/']);
});

test('switchVersion: a version landing page goes to the target landing page', async () => {
  const loc = mkLocation('/docs/scale/25.10/');
  await switchVersion('27', { fetch: mkFetch({ '/docs/scale/27/pagemap.json': T27_MAP }), location: loc, storage: mkStorage(), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/']);
});

test('switchVersion: parent and landing write a notice, same and moved do not; throwing storage is tolerated', async () => {
  const maps = { '/docs/scale/25.10/pagemap.json': SRC_MAP, '/docs/scale/27/pagemap.json': T27_MAP };
  const s1 = mkStorage();
  await switchVersion('27', { fetch: mkFetch(maps), location: mkLocation(SRC), storage: s1, ...T });
  assert.equal(s1.m.size, 0);
  _resetCaches();
  const s2 = mkStorage();
  await switchVersion('27', { fetch: mkFetch(maps), location: mkLocation('/docs/scale/25.10/scaletutorials/storage/nope/'), storage: s2, ...T });
  assert.deepEqual(JSON.parse(s2.m.get('versionSwitcherNotice')), { tier: 'parent', label: '27' });
  _resetCaches();
  const s3 = mkStorage();
  await switchVersion('27', { fetch: mkFetch(maps), location: mkLocation('/docs/scale/25.10/scaletutorials/zzz/nope/'), storage: s3, ...T });
  assert.deepEqual(JSON.parse(s3.m.get('versionSwitcherNotice')), { tier: 'landing', label: '27' });
  _resetCaches();
  const loc = mkLocation(SRC);
  await switchVersion('27', { fetch: mkFetch(maps), location: loc, storage: mkStorage(true), ...T });
  assert.deepEqual(loc.assigned, ['/docs/scale/27/storage/pools/']);
});

test('showPendingNotice: renders one dismissible notice and clears the key', () => {
  const doc = mkDocument();
  const storage = mkStorage();
  storage.setItem('versionSwitcherNotice', JSON.stringify({ tier: 'parent', label: '27' }));
  showPendingNotice({ document: doc, storage });
  assert.equal(doc.body.children.length, 1);
  assert.match(doc.body.children[0].textContent, /Showing the closest match in version 27/);
  assert.equal(storage.m.size, 0);
  storage.setItem('versionSwitcherNotice', JSON.stringify({ tier: 'landing', label: '25.10' }));
  const doc2 = mkDocument();
  showPendingNotice({ document: doc2, storage });
  assert.match(doc2.body.children[0].textContent, /That article is not in version 25\.10; showing the version home page/);
  const doc3 = mkDocument();
  showPendingNotice({ document: doc3, storage });
  assert.equal(doc3.body.children.length, 0);
});

test('loadIndex: returns null when neither page map nor sitemap exists', async () => {
  assert.equal(await loadIndex(byId('27'), mkFetch({}), T), null);
  assert.equal(await loadIndex(byId('archive'), mkFetch({}), T), null);
});

test('loadRegistry: valid registry is returned, invalid falls back', async () => {
  const good = { v: 1, hubSections: [], versions: [mkVersion('x', 'truenas', '/docs/x/')] };
  assert.deepEqual(await loadRegistry(mkFetch({ '/docs/versions.json': good }), T), good);
  _resetCaches();
  assert.deepEqual(await loadRegistry(mkFetch({}), T), DEFAULT_REGISTRY);
});

test('loadRegistry: the served registry becomes the default for parseLocation, labelFor and dropdownItems', async () => {
  const served = { v: 1, hubSections: [], versions: [{ ...mkVersion('nightly', 'truenas', '/docs/nightly/'), label: '28', menus: ['TrueNAS'], group: 'next' }] };
  assert.equal(parseLocation('/docs/nightly/a/').version, null);
  await loadRegistry(mkFetch({ '/docs/versions.json': served }), T);
  assert.equal(parseLocation('/docs/nightly/a/').version.id, 'nightly');
  assert.equal(labelFor('/docs/nightly/a/'), '28');
  assert.deepEqual(dropdownItems('TrueNAS').map((i) => i.id), ['nightly']);
  _resetCaches();
  assert.equal(parseLocation('/docs/nightly/a/').version, null);
});
