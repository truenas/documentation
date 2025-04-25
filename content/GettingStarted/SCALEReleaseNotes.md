---
title: "24.04 (Dragonfish) Version Notes"
description: "Highlights, change log, and known issues for the latest SCALE nightly development version."
weight: 10
related: false
---

{{< header logo="/images/tn-scale-logo.png" logo_alt="TrueNAS SCALE Logo" version="24.04 Dragonfish" icon="/images/SCALEDragonfishIcon.png" icon_alt="SCALE Dragonfish Icon" >}}

## Primary Features

{{< include file="/static/includes/24.04FeatureList.md" >}}

## Obtaining a Release

24.04 (Dragonfish) is available from the [TrueNAS SCALE download page](https://www.truenas.com/download-truenas-scale/).

For adventurous users that want to experiment with the latest developments, nightly build [.iso](https://download.truenas.com/truenas-scale-dragonfish-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-Dragonfish-Nightlies/) files are also available.

More details are available from [Software Releases](https://www.truenas.com/docs/truenasupgrades/).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=1 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

{{< include file="/static/includes/UpgradeClearCache.md" >}}

* TrueNAS SCALE is an appliance built from specific Linux packages.
  Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.

* Users with unofficial apps installed should review app storage drivers to determine if any utilize the OpenEBS-ZFS container storage interface (CSI) before upgrading. This CSI is not supported in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)). Unofficial apps that use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backups for those apps. New users are not able to install and deploy these apps.

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in SMB share failures after an upgrade.

* TrueNAS SCALE 24.04 (Dragonfish) no longer includes the deprecated gluster component.
  Systems installed with 24.04 cannot be used in experimental TrueCommand clusters.
  Community users that experimented with this now-deprecated TrueCommand feature need to migrate any data from the TrueCommand cluster and delete it before upgrading any clustered SCALE systems to 24.04.

* Several built-in services from SCALE 22.12 (Bluefin) in **System Settings > Services** are replaced by community applications ([details](https://www.truenas.com/docs/scale/22.12/gettingstarted/scaledeprecatedfeatures/)).
  SCALE 22.12 (Bluefin) systems must disable these built-in services and begin using the equivalent application **before** upgrading to SCALE 23.10 (Cobia), before upgrading to SCALE 24.04, or users can force an upgrade without disabling them. This is not recommended for the S3 service as you must migrate the MinIO service and data or lose it.

* {{< include file="/static/includes/24.04HomeDirectory.md" >}}
  
  See [Managing Users]({{< ref "managelocalusersscale.md#configuring-a-user" >}}) for more information.

* Users upgrading from TrueNAS SCALE 23.10 (Cobia) to 24.04 (Dragonfish) who import a Cobia configuration file might find that some services are not automatically enabled as expected.
After uploading the configuration file and rebooting the system, review **System Settings > Services**.
For any services that should be enabled, set it to **Running** and **Start Automatically**.

### Upgrade Paths

There are a variety of options for upgrading to SCALE 24.04.

{{< include file="/static/includes/24.04UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

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
See the [Migration articles]({{< ref "/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.

You must either clean install or use an upgrade ***iso** file to migrate a TrueNAS CORE system to SCALE 24.04 (Dragonfish).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with transitioning from CORE to SCALE.

## Component Versions

Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Debian Base | [12 (Bookworm)](https://www.debian.org/releases/bookworm/) |
| Linux Kernel | [6.6.32](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.32) |
| NVIDIA Driver | [545.23.08-2](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) |
| OpenZFS | [2.2.4-2](https://github.com/openzfs/zfs/releases/tag/zfs-2.2.4) |
{{< /truetable >}}

### OpenZFS Feature Flags

24.04.2.1 (Dragonfish) has the same [OpenZFS major version](https://www.truenas.com/docs/scale/23.10/gettingstarted/scalereleasenotes/#new-openzfs-feature-flags) as 23.10.1 (Cobia).

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

## 24.04.2.5

**November 8, 2024**

iXsystems is pleased to release TrueNAS 24.04.2.5!
This is a release to address another high-impact issue discovered with SMB memory management.

### Notable Changes

* Fix Management of SMB AIO read buffers ([NAS-132365](https://ixsystems.atlassian.net/browse/NAS-132365)).

Users with 24.04.2.4 installed and SMB shares in use are encouraged to upgrade to this release immediately.

### Known Issues

* An issue has been discovered for cloud sync tasks configured with file name encryption, which is available in **Advanced Remote Options** ([NAS-132472](https://ixsystems.atlassian.net/browse/NAS-132472)). As this is an upstream issue in rclone, we recommend that users should not create new cloud sync tasks with the **Filename Encryption** setting enabled. Existing users of this feature must leave it enabled for existing cloud sync tasks to be able to recover backups.

Please see the 24.04.2 changelog below and use the Jira filter links to see the full changelog and known issues related to the 24.04.2 > 24.04.2.5 releases.

## 24.04.2.4

**November 7, 2024**

iXsystems is pleased to release TrueNAS 24.04.2.4!
This is a release to address a small number of issues discovered in the 24.04.2.3 release.

### Notable Changes

* Fix memory consumption related to SMB AIO reads ([NAS-132166](https://ixsystems.atlassian.net/browse/NAS-132166)).
* Fix HA logic bug to ensure marked critical interfaces are treated as critical ([NAS-132115](https://ixsystems.atlassian.net/browse/NAS-132115)).
* Prevent SED pool degradation after power loss ([NAS-129366](https://ixsystems.atlassian.net/browse/NAS-129366)).

### Known Issues

* Users have reported an issue with SMB memory management under heavy SMB loads.
  A fix for this issue is in the 24.04.2.5 release version.

Please see the 24.04.2 Jira changelog below and use the Jira filter links to see the full changelog and known issues related to the 24.04.2 > 24.04.2.4 releases.

## 24.04.2.3

**October 10, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04.2.3!
This is a hotpatch to address two issues in the previous 24.04.2.2 release, primarily affecting some TrueNAS Enterprise customers with High Availability (HA) systems and failover enabled.

### Known Issues

* An issue was discovered where the TrueNAS UI can send an improper payload for the Outboard Activity option when re-saving an edit to global network settings ([NAS-131787](https://ixsystems.atlassian.net/browse/NAS-131787)).
  Users who encounter this issue can upgrade to 24.10.0 where the issue is corrected.

Please use the 24.04.2 Jira filter links below to see the full changelog and known issues related to the 24.04.2, 24.04.2.1, 24.04.2.2, and 24.04.2.3 releases.

## 24.04.2.2

**September 17, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04.2.2!
This is a hotpatch to address an issue in the previous 24.04.2.1 release where failover-related Proactive Support alerts were being triggered too often on some TrueNAS Enterprise platforms.

Please use the 24.04.2 Jira filter links below to see the full changelog and known issues related to the 24.04.2, 24.04.2.1, and 24.04.2.2 releases.

## 24.04.2.1

**September 11, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04.2.1!
This is a small maintenance release and includes refinement and fixes for issues discovered after the 24.04.2 release.

### Notable Changes

* Adds proactive support and auto-alerts for unscheduled failovers, reboots, and unexpected High Availability (HA) issues.
  When licensed for HA and the Proactive Support feature is configured, failover events generate a Support ticket with the corresponding support license notated [NAS-130591](https://ixsystems.atlassian.net/browse/NAS-130591).
* Fix bug with case preservation when MacOS clients access an SMB share [NAS-130743](https://ixsystems.atlassian.net/browse/NAS-130743).

Please use the 24.04.2 Jira filter links below to see the full changelog and known issues related to the 24.04.2 and 24.04.2.1 releases.

## 24.04.2

**July 9, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04.2!
This is a maintenance release and includes refinement and fixes for issues discovered after the 24.04.1 and 24.04.1.1 releases.

### Notable Changes

* Fixes implemented for CVE-2024-6387, noted as the "regreSSHion" vulnerability. Additional details and links to the technical discussion and analysis of the vulnerability are available from [NAS-129828](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/issues/NAS-129828).

  TrueNAS SCALE Enterprise users should update to 24.04.2 as soon as possible to address this vulnerability.
* Linux kernel updated to 6.6.32 ([NAS-129293](https://ixsystems.atlassian.net/browse/NAS-129293)).
* TrueNAS zfs synced with upstream OpenZFS 2.2.5-staging ([NAS-129592](https://ixsystems.atlassian.net/browse/NAS-129592)).
* Additional fixes to prevent OOM errors due to ZFS ARC caching with heavy NFS workloads ([NAS-129533](https://ixsystems.atlassian.net/browse/NAS-129533)).
* Simplify file artifact generation that prevented debug generation with large numbers of files per directory ([NAS-128779](https://ixsystems.atlassian.net/browse/NAS-128779)).
* Fixed ACL form bug when directory services cache is disabled ([NAS-129528](https://ixsystems.atlassian.net/browse/NAS-129528)).
* Prevent app service disruption when the interface has a configured description ([NAS-129150](https://ixsystems.atlassian.net/browse/NAS-129150)).
* Show only pods which are running when retrieving choices for pod console access ([NAS-128919](https://ixsystems.atlassian.net/browse/NAS-128919)).
* Bug fix for cloud sync tasks with filename encryption ([NAS-127485](https://ixsystems.atlassian.net/browse/NAS-127485)).
* Fix range validator for apps config arguments ([NAS-128590](https://ixsystems.atlassian.net/browse/NAS-128590)).
* Fixed bug that caused cloud sync tasks to include the ix-applications dataset when it should have been excluded ([NAS-129488](https://ixsystems.atlassian.net/browse/NAS-129488)).
* Fixed bug that prevented editing the share Purpose for existing SMB shares ([NAS-128987](https://ixsystems.atlassian.net/browse/NAS-128987)).
* Allow configuration of a wider range of MTU values ([NAS-129608](https://ixsystems.atlassian.net/browse/NAS-129608)).
* Prevent Netdata and k3s log spam that caused excessive writes to the boot pool ([NAS-129384](https://ixsystems.atlassian.net/browse/NAS-129384) and [NAS-129383](https://ixsystems.atlassian.net/browse/NAS-129383)).
* Fixed ipmitool bug with updated IANA Enterprise numbers ([NAS-128598](https://ixsystems.atlassian.net/browse/NAS-128598)).
* Prevent 90 second shutdown timeout for VMs that are not started ([NAS-129481](https://ixsystems.atlassian.net/browse/NAS-129481)).  

<a href="https://ixsystems.atlassian.net/issues/?filter=10572" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04.2 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Systems migrating from 13.0-U6.2 that have storage pools with cache and spare devices can show, post-upgrade to 24.04.2, pools as having unavailable devices and other disk detection errors ([NAS-130825](https://ixsystems.atlassian.net/browse/NAS-130825)).
  This is caused by a difference between how CORE and SCALE identify devices for pool import. To work around this issue, use the TrueNAS UI to export the affected pool and then re-import it.

* Network UPS Tools (NUT) service can utilize 100% of 1 CPU thread when power is cut to the UPS [NAS-130175](https://ixsystems.atlassian.net/browse/NAS-130175).
  This issue is resolved in a new version of the related service, which will be made available in a future TrueNAS release when the [updated NUT version](https://tracker.debian.org/pkg/nut) is moved into upstream stable Debian repositories.

<a href="https://ixsystems.atlassian.net/issues/?filter=10573" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04.2 that are being resolved in a future TrueNAS SCALE release.

## 24.04.1.1

{{< expand "Click to expand" "v" >}}

**May 29, 2024**
iXsystems is pleased to release TrueNAS SCALE 24.04.1.1!
This is a maintenance release focused on two high-impact issues found in the previous 24.04.1 release:

### Notable Changes

* Apps Service (Kubernetes) times out waiting for network interface ([NAS-129150](https://ixsystems.atlassian.net/browse/NAS-129150)).
* Apps menu selected by a Read-only Admin user fails with traceback ([NAS-129187](https://ixsystems.atlassian.net/browse/NAS-129187)).

### Known Issues

* Apps have network connectivity issues or are showing as unreachable ([TNCHARTS-1092](https://ixsystems.atlassian.net/browse/TNCHARTS-1092)).
  Please go to **Apps** > **Settings** > **Advanced Settings** and verify the **Route v4 Gateway** and **Route v4 Interface** fields are populated with functional settings.

Please use the 24.04.1 Jira filter links below to see the full changelog and known issues related to the 24.04.1 and 24.04.1.1 releases.
{{< /expand >}}

## 24.04.1

{{< expand "Click to expand" "v" >}}
**May 28, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04.1!
This is a maintenance release and includes improvements and fixes for issues discovered after the release of 24.04.0.

### Notable Changes

* Linux kernel updated to version 6.6.29 ([NAS-128478](https://ixsystems.atlassian.net/browse/NAS-128478)).
* Samba updated to 4.19.6 ([NAS-128729](https://ixsystems.atlassian.net/browse/NAS-128729), [NAS-128410](https://ixsystems.atlassian.net/browse/NAS-128410)).
* Rclone updated to version 1.65.2 ([NAS-127485](https://ixsystems.atlassian.net/browse/NAS-127485)).
* Fixes to address issues involving ZFS ARC cache and excessive swap usage leading to performance degradation ([NAS-128988](https://ixsystems.atlassian.net/browse/NAS-128988), [NAS-128788](https://ixsystems.atlassian.net/browse/NAS-128788)).
  * With these changes swap is disabled by default, `vm.swappiness` is set to `1`, and Multi-Gen LRU is disabled.
    Additional related development is expected in the upcoming 24.10 major version of TrueNAS SCALE.
* Automated migration to force home directories of existing SMB users from **/nonexistent** to **/var/empty** ([NAS-128710](https://ixsystems.atlassian.net/browse/NAS-128710)).
* Fixed network reporting numbers for apps ([NAS-128471](https://ixsystems.atlassian.net/browse/NAS-128471)).
* Fixed an issue where a TrueNAS system that has a VM configured with IPv6 bind addresses could disrupt the TrueNAS web interface ([NAS-128102](https://ixsystems.atlassian.net/browse/NAS-128102)).
* Intel ARC GPU firmware included to enable transcoding ([NAS-127365](https://ixsystems.atlassian.net/browse/NAS-127365)).
* Fix for starting apps with a bridge interface ([NAS-127870](https://ixsystems.atlassian.net/browse/NAS-127870)).
* Retrieve interface names not stored in the database on fresh install for reporting ([NAS-128161](https://ixsystems.atlassian.net/browse/NAS-128161)).
* Fixed stats logic on Installed apps page to prevent refreshing ([NAS-128515](https://ixsystems.atlassian.net/browse/NAS-128515)).
* Allow systemd to set ACLs on log files ([NAS-128536](https://ixsystems.atlassian.net/browse/NAS-128536)).
* Fixed bug in updating localization settings ([NAS-128301](https://ixsystems.atlassian.net/browse/NAS-128301)).
* Ensure newly created iSCSI targets are discoverable in HA systems ([NAS-128099](https://ixsystems.atlassian.net/browse/NAS-128099)).
* Improved workflow when FIPS settings are toggled on HA systems ([NAS-128187](https://ixsystems.atlassian.net/browse/NAS-128187)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10558" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04.1 and 24.04.1.1 releases.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Apps Service (Kubernetes) failing to start after upgrade to 24.04.1 ([NAS-129150](https://ixsystems.atlassian.net/browse/NAS-129150])). An initial investigation found that a saved network interface description string causes the service to time out. If you encounter an error with Apps services not starting after upgrading to 24.04.1, please try going to the **Network** screen and clearing any saved **Description** values from interfaces that are also used in the **Apps** > **Settings** > **Advanced Settings** form. This is also resolved in the 24.04.1.1 hotpatch.

<a href="https://ixsystems.atlassian.net/issues/?filter=10559" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04.1 and 24.04.1.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}

## 24.04.0

{{< expand "Click to expand" "v" >}}
**April 23, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04.0!
This is the first stable release of TrueNAS SCALE 24.04 Dragonfish. It includes numerous software component updates and polished features, as well as fixes for issues discovered in 24.04-RC.1.

### Notable Changes

* Users migrating data from an existing third-party NAS solution to TrueNAS SCALE 24.04 can use the Syncthing Enterprise application to mount the source with a remote SMB share that preserves metadata.
  See [Third-Party SMB Data Migration]({{< ref "DataMigrationSyncthing" >}}) for considerations and a full tutorial.
* Improved workflow for FIPS changes on HA systems ([NAS-128187](https://ixsystems.atlassian.net/browse/NAS-128187)).
* Improved compatibility of TrueNAS SCALE MinIO app and CORE MinIO plugin facilitate [simplified migration](https://www.truenas.com/docs/solutions/miniocoretoscale/) for CORE users with S3 data deployments.
* Fixed bug to ensure ISCSI targets are mountable after removing and replacing targets ([NAS-128099](https://ixsystems.atlassian.net/browse/NAS-128099)).
* Bug fix for NUT service and UPS data reporting ([NAS-127788](https://ixsystems.atlassian.net/browse/NAS-127788)).
* Ensure Netdata reporting history persists after reboot ([NAS-127880](https://ixsystems.atlassian.net/browse/NAS-127880)).
* Hide SPICE viewer password when entered ([NAS-127868](https://ixsystems.atlassian.net/browse/NAS-127868)).
* Fixes for units and data display on the **Dashboard** and **Reporting** page ([NAS-127963](https://ixsystems.atlassian.net/browse/NAS-127963) and [NAS-127854](https://ixsystems.atlassian.net/browse/NAS-127854)).
* Update replication resume token at object receive instead of data receive ([NAS-126772](https://ixsystems.atlassian.net/browse/NAS-126772)).
* Relax L2ARC lock during write operations to prevent OOM activation or deadlock ([NAS-127456](https://ixsystems.atlassian.net/browse/NAS-127456)).
* Prevent **Datasets** tree from unexpectedly collapsing open datasets ([NAS-127966](https://ixsystems.atlassian.net/browse/NAS-127966)).
* Fix GPU endpoint usage for GPU passthrough ([NAS-127882](https://ixsystems.atlassian.net/browse/NAS-127882)).
* Prevent cloud sync tasks from failing when pre/post-init scripts are present ([NAS-127975](https://ixsystems.atlassian.net/browse/NAS-127975)).
* Fix regression in directory services initialization affecting SMB share ACLs ([NAS-127970](https://ixsystems.atlassian.net/browse/NAS-127970)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10541" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04.0 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* An issue was discovered after 24.04.0 released involving ZFS ARC memory and excessive swap space usage.
  Community members who have experienced this issue report excessive RAM consumption leading to decreased middleware performance, web UI slowdowns, and UI inaccessibility.

  24.04.0 users experiencing system slowdown and excess swap space usage (especially when free RAM is still available) can temporarily disable swap from the command line by running `swapoff -a` as root (or sudo). See [Investigation of slow UI / RAM / SWAP issues](https://forums.truenas.com/t/investigation-of-slow-ui-ram-swap-issues/4029) on the TrueNAS Community Forums for more information and further discussion.

  A resolution is expected in the upcoming 24.04.1 maintenance release.

* A TrueNAS system that has a VM configured with IPv6 bind addresses can disrupt the TrueNAS web interface after upgrading to 24.04.0 ([NAS-128102](https://ixsystems.atlassian.net/browse/NAS-128102)).
  Users with this particular configuration are encouraged to either wait for the 24.04.1 maintenance release before upgrading or remove any IPv6 bind addresses from existing VMs before upgrading to 24.04.0.

* Installed Apps network traffic is reporting numbers greater than actual usage [NAS-128471](https://ixsystems.atlassian.net/browse/NAS-128471).

<a href="https://ixsystems.atlassian.net/issues/?filter=10542" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04.0 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}

## 24.04-RC.1

{{< expand "Click to Expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**March 21, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04-RC.1!
This release candidate version has software component updates and new features that are in the polishing phase as well as fixes for issues discovered in 24.04-BETA.1.

### Notable Changes

* New privilege levels for TrueNAS [administrative users]({{< ref "AdminRoles" >}}) for greater system security hardening ([NAS-123416](https://ixsystems.atlassian.net/browse/NAS-123416)).
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

  The Netdata UI bases time on the local browser time, while the SCALE **Reporting** screen is based on the TrueNAS system time.
  Some difference in event time between the two screens is expected.

<a href="https://ixsystems.atlassian.net/issues/?filter=10526" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04-RC.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Users upgrading from TrueNAS SCALE 23.10 (Cobia) to 24.04 (Dragonfish) who import a Cobia configuration file might find that some services are not automatically enabled as expected.
After uploading the configuration file and rebooting the system, review **System Settings > Services**.
For services that should be enabled, set it to **Running** and **Start Automatically**.
* System data reporting graphs on the **Dashboard** and **Reporting** screens are undergoing additional review and polish ahead of the 24.04.0 release.

<a href="https://ixsystems.atlassian.net/issues/?filter=10527" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04-RC.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}

## 24.04-BETA.1

{{< expand "Click to Expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**February 6, 2024**

iXsystems is pleased to release TrueNAS SCALE 24.04-BETA.1!
This has software component updates and new features that are in the polishing phase.

### Notable Changes

* New audit logging framework added with initial support for SMB and other TrueNAS UI account and authorization activity ([NAS-123447](https://ixsystems.atlassian.net/browse/NAS-123447)), including SMB activity ([NAS-123371](https://ixsystems.atlassian.net/browse/NAS-123371)).
  An [Auditing screen]({{< ref "AuditingSCALE" >}}) manages this feature in the UI.

* A new dashboard widget for backup configurations is available. This summarizes saved backup tasks and has links to quickly set up new backup schedules.

* New status pages for [SMB]({{< ref "SMBSharesScreens.md#smb-status-screens" >}}) and [NFS]({{< ref "NFSSharesScreens.md#nfs-sessions-screen" >}}) services allow managing active sessions ([SMB - NAS-105505](https://ixsystems.atlassian.net/browse/NAS-105505) and [NFS - NAS-124942](https://ixsystems.atlassian.net/browse/NAS-124942)).

* FreeIPA support is added to **Credentials** > **Directory Services** > **Configure LDAP** form ([NAS-123701](https://ixsystems.atlassian.net/browse/NAS-123701)).

* The [Feedback reporting]({{< ref "/SCALEUIReference/TopToolbar/#how-would-you-rate-this-page" >}}) window has improved!
  The page rating icon is now always visible on the top toolbar and the feedback window also functions for new bug reports and improvement suggestions ([NAS-124484](https://ixsystems.atlassian.net/browse/NAS-124484)).
  Clicking **File a ticket** on **System Settings** > **General** also opens the feedback window.
  
* An unsupported [development mode]({{< ref "DeveloperMode" >}}) is added to the base system.
  Enabling this puts the system in an unsupported state and allows customization of the operating system.
  
* systemd-nspawn containers ([Sandboxes]({{< ref "/SCALETutorials/Apps/Sandboxes" >}})) are added as an unsupported community feature so that an advanced containerization user can deploy custom software in persistent containers.

* Support is added for data ingest via filesystem (SMB/NFS) clients, allowing users migrating to TrueNAS SCALE to more easily import data from a third-party NAS solution ([NAS-123717](https://ixsystems.atlassian.net/browse/NAS-123717)).
  Supported SMB migration via the TrueNAS Syncthing Enterprise app is arriving in a future 24.04 release.

* Linux kernel is updated to 6.6 ([NAS-123465](https://ixsystems.atlassian.net/browse/NAS-123465)).

* ZFS ARC memory allocations are now identical to TrueNAS CORE ([NAS-123034](https://ixsystems.atlassian.net/browse/NAS-123034)).

* Share creation forms are reworked to centralize and speed up the configuration process ([NAS-123420](https://ixsystems.atlassian.net/browse/NAS-123420)).

* The feedback system is reworked and expanded to also control creating bug reports and improvement suggestions in the TrueNAS Jira project ([NAS-124484](https://ixsystems.atlassian.net/browse/NAS-124484)).

* The deprecated gluster component is removed and all other gluster-related components are removed from TrueNAS SCALE.

* OpenEBS-ZFS container storage interface (CSI) driver support is removed in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)).
  
  New and existing users who only use official apps are unaffected by this change, as these apps do not use OpenEBS-ZFS CSI drivers.
  Unofficial apps are unaffected if they are configured as outlined below.
  
  Unofficial apps that use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backups for those apps. New users are not able to install and deploy these apps.
  
  Maintainers of unofficial catalog apps using OpenEBS-ZFS CSI drivers should either begin to ship a CSI driver with the app or use the one provided in SCALE.
  
* Improved performance for SMB Shares with directories containing [large file counts](https://www.truenas.com/docs/references/performance/smbfiletimes/).

<a href="https://ixsystems.atlassian.net/issues/?filter=10486" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.04-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* The administrator account privileges feature is still under development and further bugfixes and enhancements are anticipated in future 24.04 (Dragonfish) releases.
  Issues that are currently being resolved as part of finishing the feature:
  * Read-only TrueNAS administrators are not able to query audit entries. This [fix](https://github.com/truenas/middleware/pull/13035) is anticipated in the 24.04-RC.1 release.

* Displayed units for network traffic are inconsistent between the web interface Dashboard and Reporting screens.
  Additional changes for consistency and IEC conformant terminology are targeted for 24.04-RC.1 [NAS-125453](https://ixsystems.atlassian.net/browse/NAS-125453).

<a href="https://ixsystems.atlassian.net/issues/?filter=10487" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.04-BETA.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}
