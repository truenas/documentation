---
title: "TrueNAS Software Status"
description: "Find the right TrueNAS version for your use case with current deployment recommendations, release schedules, and upgrade paths."
weight: 5
related: false
aliases:
 - /scale/gettingstarted/upgrades/
 - /truenasupgrades/
 - /softwarereleases/
 - /releasenotes/releaseschedule/
---

## Which TrueNAS Version is Recommended?

Choosing the right TrueNAS version depends on balancing your need for new features against operational risk tolerance. The recommendations below are regularly updated to help you select the most appropriate version based on your use case and risk profile.

{{< software-status-table >}}

<small>\* TrueNAS CORE is no longer under active development. Enterprise customers should contact TrueNAS Support to discuss migration options.</small>

{{< user-expectations-table >}}

{{< enterprise >}}
In all cases for systems with a TrueNAS Enterprise support contract, we recommend [contacting the TrueNAS Support team](https://www.truenas.com/support/) prior to updating your TrueNAS appliance.
Our Support team can provide advice based on your unique requirements and be there to help you resolve any unexpected issues.
{{< /enterprise >}}

Bookmark this page and check back before upgrading to see the latest recommendations. New releases are recommended for more risk-sensitive environments after extensive testing across diverse deployments.

## Release Schedule

{{< releaselist name=scale-releases defaultTab=2 >}}

{{< expand "Individual releases within a major version are labeled as Early, Stable, or Maintenance (expand for details)." "v" >}}

{{< truetable >}}
| Type | Status |
|-----------|-------------|
| Early | Public release of an unstable version that is either not feature complete or has more testing cycles planned. Follows an ALPHA, BETA, and RC naming convention. |
| Stable | Public release of a feature complete and internal and community tested major version. Follows a .0 naming convention. |
| Maintenance | Public release with software bug fixes and additional internal and community testing. Follows a .# naming convention, with small-scope maintenance releases ("hotpatches") following a .#.# convention. |
{{< /truetable >}}

{{< /expand >}}

## Development Timeline

Releases for major versions can overlap while a new major version is working towards a stable release and the previous major version is still receiving maintenance updates.

{{< timeline name="scale-releases" >}}

## Upgrade Paths

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

## Releases

{{< columns >}}

{{< tabbox name=scale-downloads defaultTab=3 >}}

<--->

{{< tabbox name=core-downloads defaultTab=2 >}}

{{< /columns >}}

Each listed release links to download files for that release.

Bug tickets are typically accepted for the latest release of the current stable version.
Nightly builds also accept feedback and bug tickets.

{{< expand "Nightly Builds" "v" >}}
{{< include file="archive/NightlyTestWarning.md" >}}

Nightly builds are automatically published when automated testing passes.
**.iso** files are available for fresh installation on disposable hardware or a virtual machine.

**.update** files are also available for manually updating an existing experimental system to a nightly build.

Your testing and feedback are always welcome!
TrueNAS nightlies have an [option in the top panel](https://www.truenas.com/docs/scale/scaleuireference/toptoolbar/#how-would-you-rate-this-page?) to submit feedback directly to the development team.
Let us know what is working well and what can be improved!

{{< /expand >}}

{{< expand "Legacy Releases" "v" >}}
Legacy TrueNAS versions are provided for historical context and upgrade pathways.
They are provided "as-is" and typically do not receive further maintenance releases.
Individual releases are within each major version.

Legacy releases can only be used by downloading the .iso file and freshly installing it to the hardware.
{{< /expand >}}

## Documentation Lifecycle

This website is a repository of all documentation for TrueNAS projects and related products.
The TrueNAS team maintains this documentation and provides regular updates for current and in-development (future) versions of TrueNAS software.
For documentation purposes, current and future releases are those [recommended](#which-truenas-version-is-recommended) for one or more user types.

Documentation for previous releases no longer recommended for any user type is archived and unmaintained.
See the [Documentation Archive](https://www.truenas.com/docs/archive/) for content related to these releases.
