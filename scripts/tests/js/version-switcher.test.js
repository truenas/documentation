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
