---
title: "Software Development Life Cycle"
description: "Notice about the typical development timeframe and end of life expectations for TrueNAS major versions."
weight: 20
aliases:
  - /scale/introduction/softwaredevelopmentlifecyclescale/
  - /scale/gettingstarted/useragreements/softwaredevelopmentlifecyclescale/
---

The TrueNAS Software Development Life Cycle (SDLC) covers how the TrueNAS team plans, develops, tests, deploys, and maintains TrueNAS releases.
TrueNAS uses an <a href="https://www.truenas.com/blog/advantages-of-the-truenas-open-core-business-model/" target="_blank">open-core model</a>.
Community and Enterprise systems run the same software from the same installation image, with Enterprise features unlocked through licensing.
Community members play an important role in testing pre-release builds, with participation guided by the [TrueNAS Software Status](https://www.truenas.com/docs/softwarestatus/) page and the [update profile]({{< ref "UpdateScreens" >}}) configured on each system.

## Planning

The TrueNAS team defines the objectives, scope, and direction of future TrueNAS versions.
This involves gathering feedback from both Enterprise and Community users, identifying existing problems, and evaluating potential solutions.
Enterprise customer requirements and use cases are a key input to the planning process.
Community members can also submit and vote on ideas through the <a href="https://forums.truenas.com/c/features/12" target="_blank">Feature Requests</a> section of the TrueNAS forums.
The output is a prioritized list of improvements targeted for an upcoming release.

## Development

Engineers investigate planned changes in detail and define implementation steps.
Peers review proposed changes for completeness, correctness, and coding standards before development begins.
TrueNAS developers then implement the approved changes.

## Evaluation

TrueNAS teams integrate changes into the codebase and test builds across multiple stages of development, with Community members contributing additional coverage by running early development versions.
Nightly builds undergo regression testing throughout the development cycle, with more intensive validation following code freeze and before each release.
Engineers rework any features or changes that fall short of requirements before release.

The documentation team evaluates pre-release builds in parallel and writes public-facing content describing changes in the new version.

TrueNAS also conducts a security review of the codebase during this stage, addressing any findings before release and publishing relevant security notices, errata, and best practices to the [TrueNAS Security website](https://security.truenas.com/).

## Maintenance

Each release enters an ongoing maintenance phase covering bug fixes, security patches, and further development needs.
Maintenance releases are published as issues are resolved, with user feedback continuing to inform planning for future versions.

## Release Versioning

Starting with TrueNAS 26, TrueNAS follows an annual release cadence with one major version per year.
The major version number reflects the release year: TrueNAS 26 in 2026, TrueNAS 27 in 2027, and so on.

Version numbers follow a `YY.MINOR.PATCH` format:

- **YY** — the release year (26, 27, etc.)
- **MINOR** — increments for significant updates within a release year (e.g., `26.1.0`)
- **PATCH** — increments for minor point releases and bug fixes (e.g., `26.0.1`)

Each major release progresses through the following stages before and after general availability:

{{< truetable >}}
| Stage | Version Format | Description |
|-------|----------------|-------------|
| Nightly | `26.0.0-MASTER+YYYYMMDD-HHMMSS` | Automated daily builds from active development, available for early testing and feedback |
| BETA | `26.0.0-BETA.#` | Feature-complete builds for broader Community testing |
| RC | `26.0.0-RC.#` | Release candidates with final stabilization fixes |
| Release | `26.0.0` | General availability |
| Maintenance | `26.0.#` / `26.#.0` | Point releases for bug fixes and larger mid-year updates |
{{< /truetable >}}

## End of Life

TrueNAS does not define a fixed End of Life (EoL) date for its releases.
In practice, a version reaches end of life when the TrueNAS team no longer recommends it for any user type.
At that point, its documentation moves to the [Documentation Archive](https://www.truenas.com/docs/archive/) and receives no further updates.

The [TrueNAS Software Status](https://www.truenas.com/docs/softwarestatus/) page is the authoritative source for current version recommendations, covering user types from Developer to Mission Critical.
Check this page when deciding whether to upgrade or stay on your current version.
