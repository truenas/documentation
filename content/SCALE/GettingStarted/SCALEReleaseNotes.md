---
title: "25.10 (Goldeye) Development Notes"
description: "Highlights, change log, and known issues for the latest TrueNAS nightly development version."
aliases:
 - /scale/scalereleasenotes/
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/25.10/gettingstarted/scalereleasenotes/
 - /releasenotes/
weight: 10
related: false
---
{{< header logo="/images/tn-openstorage-logo.png" logo_alt="TrueNAS Logo" version="25.10 Goldeye" icon="" icon_alt="" >}}

{{< hint type="tip" title="25.10 Nightly Development Documentation" >}}
This page tracks the latest development roadmap and notes for the future TrueNAS major version 25.10 (Goldeye).

See the stable [24.10 (Electric Eel)](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/) or pre-release [25.04 (Fangtooth)](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/) release notes for information relating to those versions.
{{< /hint >}}

## Features

{{< include file="/static/includes/25.10FeatureList.md" >}}

## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

For adventurous users that want to experiment with the latest feature development, 25.10 (Goldeye) nightly images are available from the [the TrueNAS downloads server](https://download.truenas.com/truenas-scale-goldeye-nightly/).

More details are available from [Software Releases]({{< relref "/TrueNASUpgrades/_index.md" >}}).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

* TrueNAS is an appliance built from specific Linux packages.
  Attempting to update TrueNAS with `apt` or methods other than the TrueNAS web interface can result in a nonfunctional system.

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in SMB share failures after an upgrade.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

* {{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

  {{< expand "Accessing API Documentation" "v" >}}
  {{< include file="/static/includes/APIDocs.md" >}}
  {{< /expand >}}

### Upgrade Paths (Anticipated)
<!--
{{< include file="/static/includes/25.10UpgradeMethods.md" >}}
-->

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

<!--
### Migrating from TrueNAS CORE

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< enterprise >}}
Enterprise customers with HA systems should contact iXsystems Support for assistance with migrating to TrueNAS.
{{< expand "iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

When attempting to migrate from a FreeBSD-based TrueNAS version, the general recommendation is to back up the system configuration file and use a TrueNAS **.iso** file to fresh install TrueNAS.
After install, restore the system configuration and import the pools.

Depending on the specific system configuration, this can be a straightforward or complicated process.
See the [Migration articles]({{< relref "/SCALE/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the migration process.

You must either clean install using an <file>iso</file> or use an upgrade file to migrate a FreeBSD-based TrueNAS system to TrueNAS 25.10 (Goldeye).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with migration.
-->

## Component Versions
Component version numbers below are updated to reflect the latest TrueNAS 25.10 release.
Click the component version number to see release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.12) |
| OpenZFS | [](https://github.com/openzfs/zfs/tree/zfs-2.3.0-rc3) |
| Docker Engine | [](https://docs.docker.com/engine/release-notes/27/#2731) |
{{< /truetable >}}

### OpenZFS Feature Flags
TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.2.99) are listed below:

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
|  | [](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#fast_dedup) |  |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 25.10 Nightly Development

* 
