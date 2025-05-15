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

More details are available from [Software Releases]({{< ref "/TrueNASUpgrades" >}}).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

  {{< expand "Accessing API Documentation" "v" >}}
  {{< include file="/static/includes/APIDocs.md" >}}
  {{< /expand >}}

### Upgrade Paths (Anticipated)
<!--
{{< include file="/static/includes/25.10UpgradeMethods.md" >}}
-->

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

<!--
### Migrating from TrueNAS 13.0 or 13.3

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

Depending on the specific system configuration, migrating from a FreeBSD-based TrueNAS version can be a straightforward or complicated process.
See the [Migration articles]({{< ref "/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the migration process.

{{< enterprise >}}
{{< include file="/static/includes/EnterpriseMigrationSupport.md" >}}

{{< expand "TrueNAS Enterprise Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}

{{< /expand >}}
{{< /enterprise >}}
-->

## Component Versions

Click the component version number to see release notes for that component.

{{< component-versions "25.10" >}}

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.3.0) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
|  | [](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#FLAG) |  |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 25.10 Nightly Development

* 
