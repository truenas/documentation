Content patches are welcome!
The [contributing guide](https://www.truenas.com/docs/contributing/) covers writing style, article templates and how to submit a change. The [repository README](README.md) explains which branch to edit and how to build the site locally.

## Choose the Right Branch

Each branch publishes to the URL that matches its name. Open your pull request against the branch for the page you are changing:

* [`main`](https://github.com/truenas/documentation/tree/main) for the unversioned hub (Solutions, References, Contributing, Software Status, Hardware).
* [`nightly`](https://github.com/truenas/documentation/tree/nightly) for the release in development.
* A release branch such as [`27`](https://github.com/truenas/documentation/tree/27) for corrections to a version that is already released.

The README has the full list of branches and where each one is published.

## Content Needs

It is very easy for content to become out of date or syntax and typographical errors to creep in.
Contributions that resolve a discovered content issue are extremely helpful!

## Upstream Changes

Because of the variety of Open Source solutions that are powering this repository and website, most structural changes need to be proposed upstream in these projects:

* https://github.com/commonmark
* https://github.com/gohugoio/hugo
* https://github.com/google/docsy (the hub and, over time, the product docs)
* https://github.com/thegeeklab/hugo-geekdoc (released versions and `nightly` until they move to Docsy)

## Reviews

All submissions, including submissions by project members, require review.
GitHub pull requests provide the means to see and review proposed changes.
See the [GitHub Help](https://help.github.com/articles/about-pull-requests/) for more information.

## Issue Reports

To report an issue with the website or content, go to https://jira.ixsystems.com/ and open a ticket in the [NAS](https://jira.ixsystems.com/projects/NAS/) project.
