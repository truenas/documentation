<p align="center">
 <a href="https://discord.gg/Q3St5fPETd"><img alt="Join Discord" src="https://badgen.net/discord/members/Q3St5fPETd/?icon=discord&label=Join%20the%20TrueNAS%20Community" /></a>
 <a href="https://forums.truenas.com/"><img alt="Join Forums" src="https://badgen.net/badge/Forums/Post%20Now//purple" /></a>
 <a href="https://jira.ixsystems.com"><img alt="File Issue" src="https://badgen.net/badge/Jira/File%20Issue//red?icon=jira" /></a>
</p>

# TrueNAS Documentation

Welcome to the TrueNAS documentation repository. The files here build the TrueNAS Documentation Hub at <https://www.truenas.com/docs/>. Software documentation is released under the Creative Commons license (see [LICENSE.md](LICENSE.md)).

Fixes and improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [contributing guide](https://www.truenas.com/docs/contributing/) first, then pick the branch that matches the page you want to change.

## Which branch do I edit?

Each branch publishes to the URL that matches its name. Look at the address of the page you are editing, then open your pull request against that branch.

| Branch | Published at | Use it for |
|---|---|---|
| [`main`](https://github.com/truenas/documentation/tree/main) | `truenas.com/docs/` | The hub: Solutions, References, Contributing, Software Status, Hardware. This branch. |
| [`nightly`](https://github.com/truenas/documentation/tree/nightly) | `truenas.com/docs/nightly/` | The TrueNAS release in development. New features and unreleased content. |
| [`27`](https://github.com/truenas/documentation/tree/27) | `truenas.com/docs/scale/27/` | TrueNAS 27 |
| [`25.10`](https://github.com/truenas/documentation/tree/25.10) | `truenas.com/docs/scale/25.10/` | TrueNAS 25.10 |
| [`25.04`](https://github.com/truenas/documentation/tree/25.04) | `truenas.com/docs/scale/25.04/` | TrueNAS 25.04 |
| [`24.10`](https://github.com/truenas/documentation/tree/24.10) and earlier | `truenas.com/docs/scale/<version>/` | Older TrueNAS releases. 24.04, 23.10 and 22.12 are frozen and not rebuilt. |
| [`13.3`](https://github.com/truenas/documentation/tree/13.3), [`13.0`](https://github.com/truenas/documentation/tree/13.0) | `truenas.com/docs/core/<version>/` | TrueNAS CORE |
| [`3.0`](https://github.com/truenas/documentation/tree/3.0), [`2.3`](https://github.com/truenas/documentation/tree/2.3) | `truenas.com/docs/truecommand/<version>/` | TrueCommand |

If a correction applies to more than one release, make it on the newest branch that has the problem and say in the pull request which older versions need it too.

`main` is the default branch. A page about one specific release does not belong here; it belongs on `nightly` or on that release's branch.

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
