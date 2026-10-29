# TrueNAS Documentation Hub (`main`)

This branch holds the documentation hub: the content that is not tied to one TrueNAS release. It is built with Hugo and the Docsy theme.

## Branch name = published path

Each branch of this repository publishes to the URL that matches its name. To find where a change belongs, look at the URL of the page you are editing.

| Branch | Published at | Content |
|---|---|---|
| `main` | `truenas.com/docs/` (the root) | This hub |
| `nightly` | `truenas.com/docs/nightly/` | The release in development |
| `27` | `truenas.com/docs/scale/27/` | TrueNAS 27 |
| `25.10`, `25.04`, ... | `truenas.com/docs/scale/<version>/` | Earlier TrueNAS releases |
| `13.3`, `13.0` | `truenas.com/docs/core/<version>/` | TrueNAS CORE |
| `3.0`, `2.3` | `truenas.com/docs/truecommand/<version>/` | TrueCommand |

Open pull requests against the branch you are editing. `main` is the default branch.

## What is here

- `content/en/` has the hub sections: `contributing`, `hardware`, `references`, `solutions` and `software-status`. `_archive` holds the retired CORE and TrueCommand release notes; it is published but kept out of navigation and lists.
- Search and shared page elements come from the [`docs-shared`](https://github.com/truenas/docs-shared) module (branch `TrueShared2026`), imported in `hugo.toml` and pinned to a commit (bump the pin to pick up its changes). The search client registers the hub index and the version indexes in `static/js/search-multi-site.js` in that module.
- `data/properties/software_status_config.yaml` feeds the Software Status page. The Nightly Maintenance Jenkins job updates it through `scripts/update-software-status.py` and opens a pull request. Do not edit it by hand.

## Build locally

You need Hugo Extended (0.146.0 or later), Go (for Hugo modules) and Node.js.

```bash
npm install
hugo serve                       # development server
hugo --gc --minify               # production build into public/
npx pagefind --site public       # optional: build the search index
```

## Build pipeline

`jenkins/Jenkinsfile` builds every branch, and `jenkins/docs-build.env` sets how each branch builds:

| Key | Meaning |
|---|---|
| `PUBLISH_TO_PROD` | `true` publishes the build; anything else only builds it |
| `OUTPUT_DIR` | target directory under `/var/www/html/` |
| `DEPLOY_SCRIPT` | root-owned script that links the published directory into the site (empty for the root build) |
| `PAGEFIND_GLOB` | comma-separated list of sections to index for search |
| `BASE_URL` | absolute site URL passed to Hugo as `--baseURL`, used for canonical links |
| `ARCHIVED` | `true` freezes a version: it is not rebuilt or republished |

The branch that publishes to `docs1` owns the site root and deletes anything it does not build. `jenkins/frozen-root-excludes.txt` lists files and pages from earlier publishes that must survive that cleanup; regenerate it with the cutover runbook instead of editing it by hand.

## License

See [LICENSE.md](LICENSE.md).
