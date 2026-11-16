"""Checks the pagemap.json that Hugo publishes (DOCS-2800).

Set PAGEMAP_PUBLIC_DIR to a built site directory to run these tests:
    hugo --gc --destination <dir> && PAGEMAP_PUBLIC_DIR=<dir> python -m pytest scripts/tests/test_pagemap.py
"""
import json
import os
import re
import unittest
from urllib.parse import urlparse

PUBLIC = os.environ.get("PAGEMAP_PUBLIC_DIR")
EXCLUDED = ("tags/", "book/", "archive/", "volume/")
PAGINATION_RE = re.compile(r"/page/\d+/$")

CANONICAL_RE = re.compile(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"|<link[^>]+href="([^"]+)"[^>]+rel="canonical"')


def load_pagemap():
    with open(os.path.join(PUBLIC, "pagemap.json"), encoding="utf-8") as handle:
        return json.load(handle)


def alias_stubs():
    """Yield (relative dir, canonical href) for every Hugo alias stub."""
    for dirpath, _dirs, files in os.walk(PUBLIC):
        if "index.html" not in files:
            continue
        with open(os.path.join(dirpath, "index.html"), encoding="utf-8", errors="replace") as handle:
            body = handle.read(4096)
        if 'http-equiv="refresh"' not in body:
            continue
        match = CANONICAL_RE.search(body)
        if not match:
            continue  # layouts/redirect/single.html stubs have no canonical link
        rel = os.path.relpath(dirpath, PUBLIC).replace(os.sep, "/")
        yield rel.lower().strip("/") + "/", match.group(1) or match.group(2)


@unittest.skipUnless(PUBLIC, "PAGEMAP_PUBLIC_DIR not set")
class PageMapTests(unittest.TestCase):
    def test_pagemap_shape(self):
        data = load_pagemap()
        self.assertEqual(data["v"], 1)
        self.assertIn("root", data)
        self.assertTrue(data["pages"], "page map is empty")
        for key, aliases in data["pages"].items():
            for path in [key, *aliases]:
                self.assertEqual(path, path.lower(), path)
                self.assertFalse(path.startswith("/"), path)
                self.assertTrue(path.endswith("/"), path)
            self.assertFalse(any(f"/{part}" in f"/{key}" for part in EXCLUDED), key)

    def test_every_alias_stub_is_in_pagemap(self):
        data = load_pagemap()
        root = urlparse(data["root"]).path.rstrip("/") + "/"
        stubs = list(alias_stubs())
        self.assertTrue(stubs, "no alias stubs found; is this a full build?")
        missing = []
        for stub_rel, href in stubs:
            canonical = urlparse(href).path
            canonical = canonical[len(root):] if canonical.startswith(root) else canonical.lstrip("/")
            canonical = canonical.lower().strip("/")
            canonical = canonical + "/" if canonical else ""
            if not canonical:
                continue  # aliases of the home page resolve to the landing page anyway
            if PAGINATION_RE.search(stub_rel):
                continue  # Hugo's pager stubs, not content aliases
            if any(f"/{part}" in f"/{canonical}" for part in EXCLUDED):
                continue  # target is excluded from the page map, as from the sitemap
            if stub_rel not in data["pages"].get(canonical, []):
                missing.append((stub_rel, canonical))
        self.assertEqual(missing[:10], [], f"{len(missing)} alias stubs missing from pagemap")


if __name__ == "__main__":
    unittest.main()
