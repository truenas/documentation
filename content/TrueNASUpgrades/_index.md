---
title: "Software Releases"
description: "Centralized schedules and upgrade charts for software releases."
weight: 7
related: false
url: /softwarereleases/
aliases:
 - /scale/gettingstarted/upgrades/
 - /truenasupgrades/
 - /releasenotes/releaseschedule/
---

## Release List

{{< columns >}}

{{< tabbox name=scale-downloads defaultTab=3 >}}

<--->

{{< tabbox name=core-downloads defaultTab=3 >}}

{{< /columns >}}

Each listed release links to download files for that release.
For the latest deployment and update recommendations from the TrueNAS team, see the [Software Status page](https://www.truenas.com/software-status/).

Bug tickets are typically accepted for the latest release of the current stable version.
Nightly builds also accept feedback and bug tickets.

### Nightly Builds

{{< include file="archive/NightlyTestWarning.md" >}}

Nightly builds are automatically published when automated testing passes.
**.iso** files are available for fresh installation on disposable hardware or a virtual machine.

**.update** files are also available for manually updating an existing experimental system to a nightly build.

Your testing and feedback are always welcome!
TrueNAS nightlies have an [option in the top panel](https://www.truenas.com/docs/scale/scaleuireference/toptoolbar/#how-would-you-rate-this-page?) to submit feedback directly to the development team.
Let us know what is working well and what can be improved!

### Legacy Releases

Legacy TrueNAS versions are provided for historical context and upgrade pathways.
They are provided "as-is" and typically do not receive further maintenance releases.
Individual releases are within each major version.

Legacy releases can only be used by downloading the .iso file and freshly installing it to the hardware.

## Documentation Lifecycle

This website is a repository of all documentation for TrueNAS projects and related products.
The TrueNAS team maintains this documentation and provides regular updates for current and in-development (future) versions of TrueNAS software.
For documentation purposes, current and future releases are those recommended by the TrueNAS [Software Status page](https://www.truenas.com/software-status/) for one or more user types.

Documentation for previous releases no longer recommended for any user type is archived and unmaintained.
See the [Documentation Archive](https://www.truenas.com/docs/archive/) for content related to these releases.

## Upgrade Paths

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

## Release Schedules

**The release names and dates provided here are tentative and can change at any time.**

Development timelines are available below.

{{< columns >}}

{{< releaselist name=scale-releases defaultTab=2 >}}

<--->

{{< releaselist name=core-releases defaultTab=2 >}}

<--->

{{< releaselist name=tc-releases defaultTab=2 >}}

{{< /columns >}}

{{< expand "Individual releases within a major version are labeled as Early, Stable, or Maintenance (expand for details)." "v" >}}

{{< truetable >}}
| Type | Status |
|-----------|-------------|
| Early | Public release of an unstable version that is either not feature complete or has more testing cycles planned. Follows an ALPHA, BETA, and RC naming convention. |
| Stable | Public release of a feature complete and internal and community tested major version. Follows a .0 naming convention. |
| Maintenance | Public release with software bug fixes and additional internal and community testing. Follows a .# naming convention, with small-scope maintenance releases ("hotpatches") following a .#.# convention. |
{{< /truetable >}}

{{< /expand >}}

## Timelines

Releases for major versions can overlap while a new major version is working towards a stable release and the previous major version is still receiving maintenance updates.

{{< timeline name="scale-releases" >}}

{{< timeline name="core-releases" >}}

{{< timeline name="tc-releases" >}}
