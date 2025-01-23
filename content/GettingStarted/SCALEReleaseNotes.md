---
title: "25.04 (Fangtooth) Development Notes"
description: "Highlights, change log, and known issues for the latest TrueNAS nightly development version."
weight: 10
related: false
---
{{< header logo="/images/tn-openstorage-logo.png" logo_alt="TrueNAS Logo" version="25.04 Fangtooth" icon="" icon_alt="" >}}

{{< hint type="tip" title="25.04 Nightly Development Documentation" >}}
This page tracks the latest development roadmap and notes for the future TrueNAS major version 25.04 (Fangtooth).

See the stable [24.10 (Electric Eel)](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/) release notes for information relating to that version.
{{< /hint >}}

## Features

{{< include file="/static/includes/25.04FeatureList.md" >}}

## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

For adventurous users that want to experiment with the latest feature development, 25.04 (Fangtooth) nightly images are available from the [the TrueNAS downloads server](https://download.truenas.com/truenas-scale-fangtooth-nightly/).

More details are available from [Software Releases](https://www.truenas.com/docs/softwarereleases/).

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

  {{< include file="/static/includes/APIDocs.md" >}}

  You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
  Click **API Docs** to view API documentation.

* 25.04 also introduces user-linked API access keys, allowing administrators to configure per-user access to the TrueNAS API.
  Keys are revokable and can be configured to automatically expire on a preset date.
  
  {{< include file="/static/includes/API_AD.md" >}}

  User-linked API keys allow for better integration of TrueNAS into third-party solutions.
  Use this as a reference for projects that require direct TrueNAS integration.

  {{< include file="/static/includes/APIKeyWarn.md" >}}

  See [Managing API Keys]({{< relref "/scaletutorials/toptoolbar/managingapikeys.md" >}}) for more information.

  * {{< include file="/static/includes/APIKeyMigrate.md" >}}

* The default libvirt account UID and GID is changed to to avoid possible clashes with user created Active Directory (AD) users. TrueNAS automatically updates libvirt UID and GIDs when upgraded to 25.04. Users attempting revert to 24.10 or an earlier release must manually review and update libvirt-qemu user and group IDs back to the values that were default in that version (64055:64055 for 24.10).

### Migrating Virtual Machines

{{< include file="/static/includes/Incus.md" >}}

{{< include file="/static/includes/MigratingVMs.md" >}}

### Upgrade Paths (Anticipated)

{{< include file="/static/includes/25.04UpgradeMethods.md" >}}

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
See the [Migration articles]({{< relref "/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the migration process.

You must either clean install using an <file>iso</file> or use an upgrade file to migrate a FreeBSD-based TrueNAS system to TrueNAS 25.04 (Fangtooth).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with migration.
-->

## Component Versions
Component version numbers below are updated to reflect the latest TrueNAS 24.05 release.
Click the component version number to see release notes for that component.

{{< component-versions "25.04" >}}

### OpenZFS Feature Flags
TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.2.99) are listed below:

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| fast deduplication | [com.klarasystems:fast_dedup](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#fast_dedup) | This flag is present in 24.10, but is now generally available through the TrueNAS UI. |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 25.04-BETA.1 Changelog

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**February 13, 2025**

iXsystems is pleased to release TrueNAS 25.04-BETA.1!
This first public release version of TrueNAS 25.04 (Fangtooth) has software component updates and new features that are in the polishing phase.

Notable changes:

* The TrueNAS REST API is deprecated in TrueNAS 25.04 and replaced with a versioned JSON-RPC 2.0 over WebSocket API ([API Reference]({{< relref "/api/_index.md" >}})). Full removal of the REST API is planned for a future release.
* Improved API key mechanism with support for user-linked API keys ([NAS-131396](https://ixsystems.atlassian.net/browse/NAS-131396)).
* The default libvirt account UID & GID is changed to a less common value to avoid clashing with user created UID/GIDs. See Upgrade Notes above for more information ([NAS-131695](https://ixsystems.atlassian.net/browse/NAS-131695)).

<a href="https://ixsystems.atlassian.net/issues/?filter=11744" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04-BETA.1 Known Issues

* An issue has been discovered for cloud sync tasks configured with file name encryption, which is available in **Advanced Remote Options** ([NAS-132472](https://ixsystems.atlassian.net/browse/NAS-132472)). As this is an upstream issue in rclone, we recommend that users should not create new cloud sync tasks with the **Filename Encryption** setting enabled. Existing users of this feature must leave it enabled for existing cloud sync tasks to be able to recover backups.

<a href="https://ixsystems.atlassian.net/issues/?filter=11745" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04-BETA.1 that are being resolved in a future TrueNAS release.
