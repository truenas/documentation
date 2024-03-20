---
title: "24.04 (Dragonfish) Version Notes"
description: "Highlights, change log, and known issues for the latest SCALE nightly development version."
weight: 10
related: false
---

<div class="centered-content" >
{{< figure src="/images/tn-scale-logo.png" alt="TrueNAS SCALE Logo" width="33%" >}}
<p style="font-weight: bold; font-size: 24px; margin-top: 20px; margin-bottom: 10px;">24.04 Dragonfish</p>
{{< figure src="/images/SCALEDragonfishIcon.png" alt="SCALE Dragonfish Icon" width="50%" >}}
<br>
</div>

## Primary Features

{{< include file="/static/includes/24.04FeatureList.md" >}}

## Obtaining a Release

{{< hint type="warning" title="Early Release Warning" >}}
Early releases of a major version are intended for testing and feedback purposes only.
{{< /hint >}}

24.04 (Dragonfish) early releases (BETA and RC) are available from the [TrueNAS SCALE download page](https://www.truenas.com/download-truenas-scale/).

For adventurous users that want to experiment with the latest developments, nightly build [.iso](https://download.truenas.com/truenas-scale-dragonfish-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-Dragonfish-Nightlies/) files are also available.

More details are available from [Software Releases](https://www.truenas.com/docs/truenasupgrades/).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=2 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

* TrueNAS SCALE is an appliance built from specific Linux packages.
  Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.

* Users with unofficial apps installed should review app storage drivers to determine if any utilize the OpenEBS-ZFS container storage interface (CSI) before upgrading. This CSI is not supported in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)). Unofficial apps which use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backup for those apps. New users are not able to install and deploy these apps.

* All auxiliary parameters can change between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.

* TrueNAS SCALE 24.04 (Dragonfish) no longer includes the deprecated gluster component.
  Systems installed with 24.04 cannot be used in experimental TrueCommand clusters.
  Community users that experimented with this now-deprecated TrueCommand feature need to migrate any data from the TrueCommand cluster and delete it before upgrading any clustered SCALE systems to 24.04.

* Several built-in services from SCALE 22.12 (Bluefin) in **System Settings > Services** are replaced by community applications ([details](https://www.truenas.com/docs/scale/22.12/gettingstarted/scaledeprecatedfeatures/)).
  SCALE 22.12 (Bluefin) systems must disable these built-in services and begin using the equivalent application **before** upgrading to SCALE 24.04 (Dragonfish) or users can force an upgrade without disabling them. This is not recommended for the S3 service as you must migrate the MinIO service and data or lose it.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

### Upgrade Paths

There are a variety of options for upgrading to SCALE 24.04.

{{< include file="/static/includes/24.04UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

**TrueNAS SCALE (Anticipated)**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR

A["22.02.4 (Angelfish)"] -->|update| C
B[CORE 13.0-U6.1] -->|ISO install| E
C["22.12.4.2 (Bluefin)"] -->|update| D
C["22.12.4.2 (Bluefin)"] -->|update| E
D["23.10.2 (Cobia)"] -->|update| E
E["24.04.0 (Dragonfish)"]
{{< /mermaid >}}

**TrueNAS SCALE Enterprise (Anticipated)**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR
A["CORE 13.0-U6.1"] -->|ISO install| D
B["Current 23.10 (Cobia) release"] -->|update| C["23.10.2 (Cobia)"] -->|update| D["24.04.0 (Dragonfish)"]
{{< /mermaid >}}

### CORE > SCALE Migrations

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

{{< enterprise >}}
Enterprise customers with HA systems should contact iXsystems Support for assistance with migrating to TrueNAS SCALE.
{{< expand "iXsystems Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

When attempting to migrate from TrueNAS CORE, the general recommendation is to back up the system configuration file and use a SCALE **.iso** file to fresh install TrueNAS.
After install, restore the system configuration and import the pools.

Depending on the specific system configuration, this can be a straightforward or complicated process.
See the [Migration articles]({{< relref "/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.

You must either clean install or use an upgrade ***iso** file to migrate a TrueNAS CORE system to SCALE 24.04 (Dragonfish).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with transitioning from CORE to SCALE.

## Component Versions

Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [6.6.16](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.16) |
| NVIDIA Driver | [545.23.08-2](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) |
| OpenZFS | [2.2.3-2](https://github.com/openzfs/zfs/releases/tag/zfs-2.2.3) |
{{< /truetable >}}

### OpenZFS Feature Flags

24.04-RC.1 (Dragonfish) has the same [OpenZFS major version](https://www.truenas.com/docs/scale/23.10/gettingstarted/scalereleasenotes/#new-openzfs-feature-flags) as 23.10.1 (Cobia).

The items listed here represent new feature flags implemented since the previous update to the built-in OpenZFS version (2.1.11).

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| blake3 | [org.openzfs:blake3](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:blake3) | |
| block_cloning | [com.fudosecurity:block_cloning](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.fudosecurity:block_cloning) | |
| draid | [org.openzfs:draid](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:draid) | |
| head_errlog | [com.delphix:head_errlog](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.delphix:head_errlog) | |
| vdev_zaps_v2 | [com.klarasystems:vdev_zaps_v2](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.klarasystems:vdev_zaps_v2) | |
| zilsaxattr | [org.openzfs:zilsaxattr](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:zilsaxattr) | |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 24.04-RC.1 Changelog

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early release software for critical tasks.
{{< /hint >}}

**March 21, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04-RC.1!
This release candidate version has software component updates and new features that are in the polishing phase as well as fixes for issues discovered in 24.04-BETA.1.

Notable changes:

* New privilege levels for TrueNAS [administrative users]({{< relref "AdminRoles.md" >}}) for greater system security hardening ([NAS-123416](https://ixsystems.atlassian.net/browse/NAS-123416)).
* UPS graphs are added to **Reporting** screens ([NAS-125159](https://ixsystems.atlassian.net/browse/NAS-125159)).
* Fixes and polish on **Dashboard** and **Reporting** screens ([NAS-125453](https://ixsystems.atlassian.net/browse/NAS-125453), [NAS-127824](https://ixsystems.atlassian.net/browse/NAS-127824)).
* Fix for missing SATA/SSD temperatures ([NAS-127524](https://ixsystems.atlassian.net/browse/NAS-127524)).
* Prevent catalog validation from exhausting available space in /var/run ([NAS-127213](https://ixsystems.atlassian.net/browse/NAS-127213)).
* Fix for Autoextend fails when upgrading drives in vdev - manual extend causes drive to drop offline ([NAS-126809](https://ixsystems.atlassian.net/browse/NAS-126809)).
* Prevent SMB access-denied error when copying a read-only file with an alternate data stream ([NAS-126846](https://ixsystems.atlassian.net/browse/NAS-126846)).
* Ensure alert notifications expire properly ([NAS-127543](https://ixsystems.atlassian.net/browse/NAS-127543)).
* Improved zpool TRIM performance ([NAS-125882](https://ixsystems.atlassian.net/browse/NAS-125882)).
* Improved Kubernetes stability for applications ([NAS-125640](https://ixsystems.atlassian.net/browse/NAS-125640)).
* Exposed Netdata UI under **Reporting > Netdata** for deeper real-time introspection and reporting on system performance.
Note: As the Netdata UI bases time on the local browser time, while the SCALE **Reporting** screen is based on the TrueNAS system time, some difference in event time between the two screens is expected.

  <!-- Commenting out Syncthing Migration Content until Enterprise app updated. Expected in .0. Keyword: SyncDraft  -->
  <!-- Remove comments and fix relref link below when ready to make live -->
  <!-- 
  Users migrating data from an existing third-party NAS solution to TrueNAS SCALE 24.04 can use the Syncthing Enterprise application to mount the source with a remote SMB share that preserves metadata.

  See Third-Party Data Migration relref "DataMigrationSyncthing.md" for considerations and a full tutorial.
  -->
  
<a href="https://ixsystems.atlassian.net/issues/?filter=10526" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04-RC.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 24.04-RC.1 Known Issues

* Users upgrading from TrueNAS SCALE 23.10 (Cobia) to 24.04 (Dragonfish) who import a Cobia configuration file might find that some services are not automatically enabled as expected.
After uploading the configuration file and rebooting the system, review **System Settings > Services**.
For services any that should be enabled, set it to **Running** and **Start Automatically**.
* System data reporting graphs on the **Dashboard** and **Reporting** screens are undergoing additional review and polish ahead of the 24.04.0 release.

<a href="https://ixsystems.atlassian.net/issues/?filter=10527" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04-RC.1 that are being resolved in a future TrueNAS SCALE release.

## 24.04-BETA.1 Changelog

{{< expand "Click to Expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early release software for critical tasks.
{{< /hint >}}

**February 6, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04-BETA.1!
This has software component updates and new features that are in the polishing phase.

Notable changes:

* New audit logging framework added with initial support for SMB and other TrueNAS UI account and authorization activity ([NAS-123447](https://ixsystems.atlassian.net/browse/NAS-123447)), including SMB activity ([NAS-123371](https://ixsystems.atlassian.net/browse/NAS-123371)).
  An [Auditing screen]({{< relref "AuditingSCALE.md" >}}) manages this feature in the UI.

* New dashboard widget for backup configurations is available. This summarizes saved backup tasks and has links to quickly set up new backup schedules.

* New status pages for [SMB]({{< relref "SMBSharesScreens.md#smb-status-screens" >}}) and [NFS]({{< relref "NFSSharesScreens.md#nfs-sessions-screen" >}}) services allow managing active sessions ([SMB - NAS-105505](https://ixsystems.atlassian.net/browse/NAS-105505) and [NFS - NAS-124942](https://ixsystems.atlassian.net/browse/NAS-124942)).

* FreeIPA support is added to **Credentials** > **Directory Services** > **Configure LDAP** form ([NAS-123701](https://ixsystems.atlassian.net/browse/NAS-123701)).

* The [Feedback reporting]({{< relref "/SCALEUIReference/TopToolbar/_index.md#how-would-you-rate-this-page" >}}) window has improved!
  The page rating icon is now always visible on the top toolbar and the feedback window also functions for new bug reports and improvement suggestions ([NAS-124484](https://ixsystems.atlassian.net/browse/NAS-124484)).
  Clicking **File a ticket** on **System Settings** > **General** also opens the feedback window.
  
* An unsupported [development mode]({{< relref "DeveloperMode.md" >}}) is added to the base system.
  Enabling this puts the system in an unsupported state and allows customization of the operating system.
  
* systemd-nspawn containers ([Sandboxes]({{< relref "/SCALETutorials/Apps/Sandboxes.md" >}})) are added as an unsupported community feature so that an advanced containerization user can deploy custom software in persistent containers.

* Support is added for data ingest via filesystem (SMB/NFS) clients, allowing users migrating to TrueNAS SCALE to more easily import data from a third party NAS solution ([NAS-123717](https://ixsystems.atlassian.net/browse/NAS-123717)).
  Supported SMB migration via the TrueNAS Syncthing Enterprise app is arriving in a future 24.04 release.

* Linux kernel is updated to 6.6 ([NAS-123465](https://ixsystems.atlassian.net/browse/NAS-123465)).

* ZFS ARC memory allocations are now identical to TrueNAS CORE ([NAS-123034](https://ixsystems.atlassian.net/browse/NAS-123034)).

* Share creation forms are reworked to centralize and speed up the configuration process ([NAS-123420](https://ixsystems.atlassian.net/browse/NAS-123420)).

* The feedback system is reworked and expanded to also control creating bug reports and improvement suggestions in the TrueNAS Jira project ([NAS-124484](https://ixsystems.atlassian.net/browse/NAS-124484)).

* The deprecated gluster component is removed and all other gluster-related components are removed from TrueNAS SCALE.

* OpenEBS-ZFS container storage interface (CSI) driver support is removed in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)).
  
  New and existing users who only use official apps are unaffected by this change, as these apps do not use OpenEBS-ZFS CSI drivers.
  Unofficial apps are unaffected if they are configured as outlined below.
  
  Unofficial apps which use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backup for those apps. New users are not able to install and deploy these apps.
  
  Maintainers of unofficial catalog apps using OpenEBS-ZFS CSI drivers should either begin to ship a CSI driver with the app or use the one provided in SCALE.
  
* Improved performance for SMB Shares with directories containing [large file counts](https://www.truenas.com/docs/references/performance/smbfiletimes/).

<a href="https://ixsystems.atlassian.net/issues/?filter=10486" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 24.04-BETA.1 Known Issues

* The administrator account privileges feature is still under development and further bugfixes and enhancements are anticipated in future 24.04 (Dragonfish) releases.
  Issues that are currently being resolved as part of finishing the feature:
  * Read-only TrueNAS administrators are not able to query audit entries. This [fix](https://github.com/truenas/middleware/pull/13035) is anticipated in the 24.04-RC.1 release.

* Displayed units for network traffic are inconsistent between the web interface Dashboard and Reporting screens.
  Additional changes for consistency and IEC conformant terminology is targeted for 24.04-RC.1 [NAS-125453](https://ixsystems.atlassian.net/browse/NAS-125453).

<a href="https://ixsystems.atlassian.net/issues/?filter=10487" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04-BETA.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}