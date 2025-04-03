---
title: "25.04 (Fangtooth) Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 25.04 release versions."
weight: 10
related: false
---
{{< header logo="/images/tn-openstorage-logo.png" logo_alt="TrueNAS Logo" version="25.04 Fangtooth" icon="/images/Fangtooth_Icon.png" icon_alt="Fangtooth Icon" >}}

{{< hint type="tip" title="25.04 Early Release Documentation" >}}
This page tracks the latest development roadmap and early release notes for the future TrueNAS major version 25.04 (Fangtooth).

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

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* {{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

  {{< include file="/static/includes/APIDocs.md" >}}

  You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
  Click **API Docs** to view API documentation.

* 25.04 also introduces user-linked API access keys, allowing administrators to configure per-user access to the TrueNAS API.
  Keys are revocable and can be configured to automatically expire on a preset date.
  
  {{< include file="/static/includes/API_AD.md" >}}

  User-linked API keys allow for better integration of TrueNAS into third-party solutions.
  Use this as a reference for projects that require direct TrueNAS integration.

  {{< include file="/static/includes/APIKeyWarn.md" >}}

  See [Managing API Keys]({{< ref "/scaletutorials/toptoolbar/managingapikeys" >}}) for more information.

  * {{< include file="/static/includes/APIKeyMigrate.md" >}}

* {{< include file="/static/includes/ConfigRestrictions.md" >}}

### Migrating Virtual Machines

{{< include file="/static/includes/Incus.md" >}}

{{< include file="/static/includes/MigratingVMs.md" >}}

### TrueNAS Apps

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

{{< include file="/static/includes/AppsSupportTimeline.md" >}}

### Upgrade Paths (Anticipated)

{{< include file="/static/includes/25.04UpgradeMethods.md" >}}

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

<!--
### Migrating from TrueNAS CORE

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< enterprise >}}
Enterprise customers with HA systems should contact TrueNAS Enterprise Support for assistance with migrating to TrueNAS.
{{< expand "TrueNAS Enterprise Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

When attempting to migrate from a FreeBSD-based TrueNAS version, the general recommendation is to back up the system configuration file and use a TrueNAS **.iso** file to fresh install TrueNAS.
After install, restore the system configuration and import the pools.

Depending on the specific system configuration, this can be a straightforward or complicated process.
See the [Migration articles]({{< ref "/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the migration process.

You must either clean install using an <file>iso</file> or use an upgrade file to migrate a FreeBSD-based TrueNAS system to TrueNAS 25.04 (Fangtooth).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with migration.
-->

## Component Versions

Click the component version number to see release notes for that component.

{{< component-versions "25.04" >}}

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.2.99) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| fast deduplication | [com.klarasystems:fast_dedup](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#fast_dedup) | This flag is present in 24.10, but is now generally available through the TrueNAS UI. |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

<!-- for 25.04.0 Notable Changes:
* Allow configuration of IO bus for disk devices in Instances ([NAS-134250](https://ixsystems.atlassian.net/browse/NAS-134250)).
  This enables users to create virtualized disks using a standard other than VirtIO in cases where the OS image does not by default include VirtIO drivers.
-->

## 25.04-RC.1

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**March 11, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04-RC.1!
This release candidate version has software component updates and new features that are in the polishing phase as well as fixes for issues discovered in 25.04-BETA.1.

Special thanks to (Github users) René, jnbastoky, Bas Nijholt, jbsamcho, t0b3, Franco Castillo, Ljcbaby, Oskar, ken1010533, Gleb Chesnokov, markrieder, janekdz, Aurélien Sallé, Nicodemus Schoenwald, m.chernobrov, Jason Cheng, SejoWuigui, TheJulianJES, p0358, Janek, Dhananjay Kamble, wanyuehan, Georg Schölly, dany22m, xream, and Lee Jihaeng for contributing to TrueNAS 25.04-RC.1. For information on how you can contribute, visit https://www.truenas.com/docs/contributing/.

### Notable Changes

* To prevent excessive resource usage, especially on systems with large HDD storage pools, SMART test results no longer appear directly on the **Storage** dashboard.
  Click **View S.M.A.R.T. Tests** on the **Disk Health** widget to open the **S.M.A.R.T. Test Results of *POOL*** screen.
* To improve stability and prevent unsupported SMB configurations from breaking on [migration from TrueNAS CORE]({{< ref "/GettingStarted/Migrate/" >}}), TrueNAS automatically removes the SMB auxiliary parameters `wide links`, `use sendfile`, `vfs objects`, and `allow insecure` during migration ([NAS-132911](https://ixsystems.atlassian.net/browse/NAS-132911)).
* To prevent unexpected failures in SMB shares, TrueNAS automatically disables SMB2/3 lease support and AAPL extensions (typically used to configure Time Machine) globally when [multiprotocol SMB/NFS shares]({{< ref "MixedModeShares" >}}) are enabled ([NAS-133680](https://ixsystems.atlassian.net/browse/NAS-133680)).
* Reserve 2 GiB of disk space (but no more than 1%) to allow the data disk to be replaced with a slightly smaller one in the future ([NAS-134309](https://ixsystems.atlassian.net/browse/NAS-134309)).
* Bugfix: Ensure disk temperature reporting is available for all disks ([NAS-130766](https://ixsystems.atlassian.net/browse/NAS-130766)).
* Bugfix: Allow SMB authentication for usernames with a capital letter ([NAS-134346](https://ixsystems.atlassian.net/browse/NAS-134346)).
* Bugfix: Fix top toolbar icon colors for the iX Blue, Paper, and High Contrast UI themes ([NAS-133853](https://ixsystems.atlassian.net/browse/NAS-133853)).
* Bugfix: Enable the applications **Web UI** button when accessing from IPv6 or mDNS name ([NAS-133655](https://ixsystems.atlassian.net/browse/NAS-133655)).

<a href="https://ixsystems.atlassian.net/issues/?filter=11942" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04-RC.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Further development of the experimental **Instances** virtualization feature is expected ahead of the 25.04.0 release. Current known issues include:
  * Full IDMAP support is currently unavailable in the TrueNAS UI ([NAS-134447](https://ixsystems.atlassian.net/browse/NAS-134447)).
    Users testing instances in 25.04-RC.1 can use the **apps** user and group (568:568) to set permissions with consistent mapping in the TrueNAS host and containers.
  * In 25.04-RC.1, VirtIO is the only available IO bus for VMs, which complicates deployment of VMs using OS images that do not natively support VirtIO, see ([NAS-134250](https://ixsystems.atlassian.net/browse/NAS-134250)).
    Additional IO bus options are expected in 25.04.0 ([NAS-134393](https://ixsystems.atlassian.net/browse/NAS-134393)).
* Some users of TrueNAS Apps attempting to configure GPU allocation report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -job app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
    * `APP_NAME` is the name you entered in the application, for example “plex”.
    * `PCI_SLOT` is the pci slot identified in the error, for example "0000:2d:00.0”.
    * `GPU_UUID` is the UUID matching the pci slot that you retrieved with the above command.

<a href="https://ixsystems.atlassian.net/issues/?filter=11975" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04-BETA.1 that are being resolved in a future TrueNAS release.

## 25.04-BETA.1

{{< expand "Click to expand" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**February 13, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04-BETA.1!
This first public release version of TrueNAS 25.04 (Fangtooth) has software component updates and new features that are in the polishing phase.

### Notable changes

* The TrueNAS REST API is deprecated in TrueNAS 25.04 and replaced with a versioned JSON-RPC 2.0 over WebSocket API ([API Reference]({{< ref "/api/" >}})). Full removal of the REST API is planned for a future release.
* Improved API key mechanism with support for user-linked API keys ([NAS-131396](https://ixsystems.atlassian.net/browse/NAS-131396)).
* UI login experience improvements ([NAS-130810](https://ixsystems.atlassian.net/browse/NAS-130810)).
* NFS over RDMA support - Enterprise Feature ([NAS-131784](https://ixsystems.atlassian.net/browse/NAS-131784)).
* iSCSI Extensions for RDMA (iSER) support - Enterprise Feature ([NAS-106190](https://ixsystems.atlassian.net/browse/NAS-106190)).
* ZFS Fast deduplication support ([NAS-127088](https://ixsystems.atlassian.net/browse/NAS-127088)).
* iSCSI XCOPY support through ZVOL block cloning ([NAS-130017](ixsystems.atlassian.net/browse/NAS-130017)).
* Incus Container & VM Support - Experimental Community Feature ([NAS-130251](https://ixsystems.atlassian.net/browse/NAS-130251)).
* Hide SED related options in the UI for non-Enterprise users ([NAS-133442](https://ixsystems.atlassian.net/browse/NAS-133442)).
* Bump nvidia driver version ([NAS-133575](https://ixsystems.atlassian.net/browse/NAS-133575)).
* Remove integrated Netdata web portal from the TrueNAS UI and middleware ([NAS-133629](https://ixsystems.atlassian.net/browse/NAS-133629)).
  Default Netdata integration is removed due to STIG security requirements.
  Users who want to continue using Netdata monitoring can install Netdata from the TrueNAS Apps catalog.
* Bugfix: "Cache and Spare disks are not recognized post upgrade from 13.0 U6.2 to 24.04.2" ([NAS-130825](https://ixsystems.atlassian.net/browse/NAS-130825)).
* Bugfix: "Unable to start a VM due to insufficient memory" ([NAS-128544](https://ixsystems.atlassian.net/browse/NAS-128544)).

<a href="https://ixsystems.atlassian.net/issues/?filter=11744" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* An issue has been discovered for cloud sync tasks configured with file name encryption, which is available in **Advanced Remote Options** ([NAS-132472](https://ixsystems.atlassian.net/browse/NAS-132472)). As this is an upstream issue in rclone, we recommend that users should not create new cloud sync tasks with the **Filename Encryption** setting enabled. Existing users of this feature must leave it enabled for existing cloud sync tasks to be able to recover backups.
* Unable to Create dataset under disks while configuring a new virtualization Instance ([NAS-134151](https://ixsystems.atlassian.net/browse/NAS-134151)).
* UUID related traceback when activating NVIDIA GPU for Jellyfin app: `base_v2_1_14.error.RenderError: Expected [uuid] to be set for GPU in slot [0000:01:00.0] in [nvidia_gpu_selection]` ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -j app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
    * `APP_NAME` is the name you entered in the application, for example “plex”.
    * `PCI_SLOT` is the pci slot identified in the error, for example "0000:2d:00.0”.
    * `GPU_UUID` is the UUID matching the pci slot that you retrieved with the above command.

<a href="https://ixsystems.atlassian.net/issues/?filter=11745" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04-BETA.1 that are being resolved in a future TrueNAS release.
{{< /expand >}}
