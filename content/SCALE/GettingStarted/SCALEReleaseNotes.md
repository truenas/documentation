---
title: "24.04 (Dragonfish) Version Notes"
description: "Highlights, change log, and known issues for the latest SCALE nightly development version."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/scale22.12/
 - /scale/24.04/gettingstarted/scalereleasenotes/
weight: 10
related: false
---

{{< include file="/content/_includes/24.04FeatureList.md" >}}

## Obtaining a Release

{{< hint type="warning" title="Early Release Warning" >}}
Early releases of a major version are intended for testing and feedback purposes only.
{{< /hint >}}

24.04 (Dragonfish) early releases (BETA and RC) are available from the [TrueNAS SCALE download page](https://www.truenas.com/download-truenas-scale/).

For adventurous users that want to experiment with the latest developments, nightly build [.iso](https://download.truenas.com/truenas-scale-dragonfish-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-Dragonfish-Nightlies/) files are also available.

More details are available from [Software Releases]({{< relref "/TrueNASUpgrades/_index.md" >}}).

## Release Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/content/_includes/LifecycleTable.md" >}}
{{< include file="/content/_includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

* Users with unofficial apps installed should review app storage drivers to determine if any utilize the OpenEBS-ZFS container storage interface (CSI) before upgrading. This CSI is not supported in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)). Unofficial apps which use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backup for those apps. New users are not able to install and deploy these apps.

* TrueNAS SCALE 24.04 (Dragonfish) no longer includes the deprecated gluster component.
  Systems installed with 24.04 cannot be used in experimental TrueCommand clusters.
  Community users that experimented with this now-deprecated TrueCommand feature need to migrate any data from the TrueCommand cluster and delete it before upgrading any clustered SCALE systems to 24.04.

### Upgrade Paths

There are a variety of options for upgrading to SCALE 24.04.

{{< include file="/_includes/24.04UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

If attempting to migrate from TrueNAS CORE, see the [Migration section]({{< relref "/SCALE/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.

{{< enterprise >}}
Migrations from TrueNAS CORE for Enterprise High Availability (HA) systems are not recommended at this time.
{{< /enterprise >}}

{{< columns >}}
**TrueNAS SCALE (Anticipated)**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR

A["22.02.4 (Angelfish)"] --> C
B[CORE 13.0-U6] --> C
C["22.12.4.2 (Bluefin)"] --> D
D["23.10.1.3 (Cobia)"] --> E
E["24.04.0 (Dragonfish)"]
{{< /mermaid >}}

<--->
**TrueNAS SCALE Enterprise (Anticipated)**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR
A("Current 23.10 (Cobia) release") --> B["23.10.2 (Cobia)"] --> C["24.04.0 (Dragonfish)"]
{{< /mermaid >}}

{{< /columns >}}

## Component Versions
Click the component version number to see the latest release notes for that component.
<table class="truetable" style="width:25%;">
  <tr>
    <th>Component</th>
	<th>Version</th>
  </tr>
  <tr>
    <td>Linux Kernel</td><td><a href="https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.10">6.6.10</a></td>
  </tr>
  <tr>
	<td>Nvidia Driver</td><td><a href="https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html">545.23.08-1</a></td>
  </tr>
  <tr>
	<td>OpenZFS</td><td><a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.2.2">2.2.2-1</a></td>
  </tr>
</table>

### OpenZFS Feature Flags
24.04-BETA.1 (Dragonfish) has the same [OpenZFS version as 23.10.1 (Cobia)](https://www.truenas.com/docs/scale/23.10/gettingstarted/scalereleasenotes/#new-openzfs-feature-flags).
No new feature flags are introduced at this time.

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 24.04-BETA.1

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early release software for critical tasks.
{{< /hint >}}

**February 6, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04-BETA.1!
This has software component updates and new features that are in the polishing phase.

Notable changes:

* New audit logging for UI and API actions ([NAS-123447](https://ixsystems.atlassian.net/browse/NAS-123447)), including SMB activity ([NAS-123371](https://ixsystems.atlassian.net/browse/NAS-123371)).
  An [Auditing screen]({{< relref "AuditingSCALE.md" >}}) is available for managing this feature from the UI.

* New dashboard widget for backup configurations is available. This summarizes saved backup tasks and has links to quickly set up new backup schedules.

* New status pages for [SMB]({{< relref "SMBSharesScreens.md#smb-status-screens" >}}) and [NFS]({{< relref "NFSSharesScreens.md#nfs-sessions-screen" >}}) services allow managing active sessions ([SMB - NAS-105505](https://ixsystems.atlassian.net/browse/NAS-105505) and [NFS - NAS-124942](https://ixsystems.atlassian.net/browse/NAS-124942)).

* FreeIPA support is added to **Credentials** > **Directory Services** > **Configure LDAP** form ([NAS-123701](https://ixsystems.atlassian.net/browse/NAS-123701)).

* The Feedback reporting window has improved!
  The page rating icon is now always visible on the top toolbar and the feedback window also functions for new bug reports and improvement suggestions ([NAS-124484](https://ixsystems.atlassian.net/browse/NAS-124484)).
  Clicking **File a ticket** on **System Settings** > **General** also opens the feedback window.
  
* A development mode option is added to the base system. Enabling this puts the system in an unsupported state and allows customization of the operating system.

* systemd-nspawn containers ([Sandboxes]({{< relref "/SCALE/SCALETutorials/Apps/Sandboxes.md" >}})) are added as an unsupported community feature so that an advanced containerization user can deploy custom software in persistent containers.

* Support is added for data ingest via filesystem (SMB/NFS) clients, allowing users migrating to TrueNAS SCALE to more easily import data from a third party NAS solution ([NAS-123717](https://ixsystems.atlassian.net/browse/NAS-123717)).

  <!-- Commenting out Syncthing Migration Content until Enterprise app updated. Expected before RC.1 or .0. Keyword: SyncDraft  -->
  <!-- Remove comments and fix relref link below when ready to make live -->
  <!-- 
  Users migrating data from an existing third-party NAS solution to TrueNAS SCALE 24.04 can use the Syncthing Enterprise application to mount the source with a remote SMB share that preserves metadata.

  See Third-Party Data Migration relref "DataMigrationSyncthing.md" for considerations and a full tutorial.
  --> 

* systemd-nspawn containers ([Sandboxes]({{< relref "/SCALE/SCALETutorials/Apps/Sandboxes.md" >}})) are added as an unsupported community feature so that an advanced containerization user can deploy custom software in persistent containers.

* An unsupported [development mode]({{< relref "DeveloperMode.md" >}}) is added to the base system.
  Enabling this puts the system in an unsupported state and allows customization of the operating system.

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

<a href="https://ixsystems.atlassian.net/issues/?filter=10486" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04-BETA.1 release.
{{< include file="_includes/JiraFilterInstructions.md" >}}

### 24.04-BETA.1 Known Issues

* The administrator account privileges feature is still under development and further bugfixes and enhancements are anticipated in future 24.04 (Dragonfish) releases.

* Displayed units for network traffic are inconsistent between the web interface Dashboard and Reporting screens.
  Additional changes for consistency and IEC comformant terminology is targeted for 24.04-RC.1 [NAS-125453](https://ixsystems.atlassian.net/browse/NAS-125453).

* Read-only TrueNAS administrators are not able to query audit entries. This [fix](https://github.com/truenas/middleware/pull/13035) is anticipated in the 24.04-RC.1 release.

<a href="https://ixsystems.atlassian.net/issues/?filter=10487" target="_blank">Click here to see the latest information</a> about issues discovered in 24.04-BETA.1 that are being resolved in a future TrueNAS SCALE release.