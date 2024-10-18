---
title: "25.04 (Fangtooth) Development Notes"
description: "Highlights, change log, and known issues for the latest TrueNAS nightly development version."
aliases:
 - /scale/scalereleasenotes/
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/scale22.12/
 - /scale/25.04/gettingstarted/scalereleasenotes/
weight: 10
related: false
---
{{< header logo="/images/tn-scale-logo.png" logo_alt="TrueNAS Logo" version="25.04 Fangtooth" icon="" icon_alt="" >}}

{{< hint type="tip" title="25.04 Nightly Development Documentation" >}}
This page tracks the latest development roadmap and notes for the future TrueNAS major version 25.04 (Fangtooth).

See the stable [24.04 (Dragonfish)](https://www.truenas.com/docs/scale/24.04/gettingstarted/scalereleasenotes/) or early development [24.10 (Electric Eel)](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/) release notes for information relating to that version.
{{< /hint >}}

## Features

{{< include file="/static/includes/25.04FeatureList.md" >}}

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## 25.04 Nightly Development Changelog

Coming soon

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

<!--
## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

25.04 (Fangtooth) early releases (BETA and RC) are available from the [TrueNAS SCALE download page](https://www.truenas.com/download-truenas-scale/).

For adventurous users that want to experiment with the latest feature development, nightly build [.iso](https://download.truenas.com/truenas-scale-electriceel-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-ElectricEel-Nightlies/) files are available.

More details are available from [Software Releases]({{< relref "/TrueNASUpgrades/_index.md" >}}).

## Upgrade Notes

* TrueNAS SCALE is an appliance built from specific Linux packages.
  Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in SMB share failures after an upgrade.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}
  
### Upgrade Paths (Anticipated)

{{< include file="/static/includes/25.04UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS major version.

include file="/static/includes/SCALEUpgradePaths.md" 

### CORE to SCALE Migrations

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< enterprise >}}
Enterprise customers with HA systems should contact iXsystems Support for assistance with migrating to TrueNAS SCALE.
{{< expand "iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

When attempting to migrate from TrueNAS CORE, the general recommendation is to back up the system configuration file and use a SCALE **.iso** file to fresh install TrueNAS.
After install, restore the system configuration and import the pools.

Depending on the specific system configuration, this can be a straightforward or complicated process.
See the [Migration articles]({{< relref "/SCALE/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.

You must either clean install using an <file>iso</file> or use an upgrade file to migrate a TrueNAS CORE system to SCALE 25.04 (Fangtooth).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with transitioning from CORE to SCALE.

## Component Versions
Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [_._.__](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v_._.__) |
| OpenZFS | [_._.__](https://github.com/openzfs/zfs/tree/zfs-_._.__) |
{{< /truetable >}}

### OpenZFS Feature Flags
TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.2.99) are listed below:

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
|  | [org.openzfs:raidz_expansion](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#raidz_expansion) |  |
|  | [com.delphix:redaction_list_spill](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#redaction_list_spill) | |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 25.04-BETA.1 Changelog

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**Month Day, 2025**

iXsystems is pleased to release TrueNAS 25.04-BETA.1!
This has software component updates and new features that are in the polishing phase.

Notable changes:

* 

<a href="https://ixsystems.atlassian.net/issues/?filter=_____" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04-BETA.1 Known Issues

* 

<a href="https://ixsystems.atlassian.net/issues/?filter=_____" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04-BETA.1 that are being resolved in a future TrueNAS SCALE release.
-->