---
title: "SCALE 23.10 Release Notes"
description: "Highlights, change log, and known issues for each SCALE 23.10 (Cobia) release."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
weight: 10
---

{{< toc >}}

## SCALE 23.10 (Cobia) Primary Features

{{< include file="/static/includes/23.10FeatureList.md" >}}

### Service Deprecations

Several built-in services from SCALE 22.12 (Bluefin) in **System Settings > Services** are replaced by community applications.
You must disable these built-in services and begin using the equivalent application **before** upgrading to SCALE 23.10 (Cobia).

{{< enterprise >}}
TrueNAS SCALE Enterprise customers with TrueNAS SCALE 22.12.3 (Bluefin) or later deployed are warned when a deprecated service is in use.
To prevent any loss of service, customers with Silver or Gold level support contracts with iXsystems are prevented from upgrading to TrueNAS SCALE 23.10 (Cobia) until the deprecated services are addressed.
{{< /enterprise >}}

{{< columns >}}
* Dynamic DNS replaced by **[ddns-updater]({{< relref "/SCALETutorials/Apps/_index.md" >}})**
* OpenVPN Server replaced by multiple VPN [apps]({{< relref "/SCALETutorials/Apps/_index.md" >}})
* OpenVPN Client has no equivalent application
* Rsyncd Server replaced by **rsyncd]({{< relref "/SCALETutorials/Apps/_index.md" >}})**
<--->
* S3 replaced by **[minio]({{< relref "/SCALETutorials/Apps/_index.md" >}})**
* WebDAV replaced by **[webdav]({{< relref "/SCALETutorials/Apps/_index.md" >}})**
* TFTP replaced by **[tftpd-hpa]({{< relref "/SCALETutorials/Apps/_index.md" >}})**

{{< /columns >}}
{{< hint type="info" title="S3 Service Replacement" >}}
Due to the [MinIO filesystem mode deprecation](https://min.io/docs/minio/container/operations/install-deploy-manage/migrate-fs-gateway.html) and update methodology, older versions of MinIO are not updatable to newer versions and require additional update steps.
This impacts moving from the built-in **S3** service to the **Minio** application.
See [Migrating from MinIO S3](https://www.truenas.com/docs/scale/22.12/scaletutorials/apps/communityapps/minioclustersscale/migratingfroms3service/) in the TrueNAS SCALE 22.12 (Bluefin) documentation for a detailed, TrueNAS-specific, tutorial for moving configuration and storage data from the built-in **S3** service to the latest **Minio** version, available from the Community App Catalog.
{{< /hint >}}

## Obtaining a Release

Log in to the web interface and go to **System Settings > Update** to check for available updates from the **TrueNAS-SCALE-Cobia - TrueNAS SCALE Cobia [release]** update train and begin downloading the latest stable release.

Alternately, to download an <file>.iso</file> file or <file>.update</file> for installing or upgrading to SCALE 23.10.2 (Cobia), go to https://www.truenas.com/truenas-scale/ and click **Download**.

{{< include file="/static/includes/23.10UpgradeMethods.md" >}}
More details are available from [23.10 Upgrades]({{< relref "23.10Upgrades.md" >}}).

### Release Schedule 

See [Software Releases](https://www.truenas.com/docs/truenasupgrades/) for the latest development updates and timelines. 

## Upgrade Notes

* {{< hint type="warning" title="ISO Upgrades Unsupported" >}}
  The only install option supported by the 23.10 (Cobia) <file>ISO</file> installer is a clean installation.
  The <file>ISO</file> installer **Upgrade Install** and **Fresh Install** options are removed.
  Continue to use the TrueNAS SCALE [update process]({{< relref "UpdateSCALE.md" >}}) to seamlessly upgrade from one SCALE major version to another.
  {{< /hint >}}

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

* TrueNAS SCALE is an appliance built from specific Linux packages.
  Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.

* All auxiliary parameters can change between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.

* Systems with large numbers of attached disks are recommended to use the [new Pool Creation wizard]({{< relref "CreatePoolWizard.md" >}}) when creating or modifying a pool.

* New OpenZFS feature flags are available in this release.
  Storage pools created in previous TrueNAS SCALE versions can upgrade to enable the new feature flags.

  {{< expand "About Storage Pool Upgrades (Click to expand)" "v" >}}
  {{< include file="/static/includes/UpgradePools.md" >}}
  {{< /expand >}}

* TrueCommand support for TrueNAS SCALE 23.10 (Cobia) system connections is anticipated in the TrueCommand 3.0 release.
  Systems using TrueCommand clustering should not upgrade to 23.10 (Cobia) and remain on 22.12 (Bluefin) until compatible TrueCommand and SCALE versions are released at a later date.

* Use caution when upgrading a system that has a storage pool that is both encrypted and is used for TrueNAS SCALE application storage.
  When this is a critical use case, remain on TrueNAS SCALE Bluefin until a later SCALE Cobia maintenance release addresses any issues with encrypted pools used for application storage and management.

* TrueNAS SCALE 23.10 (Cobia) changed from using `ntpd` to [chronyd](https://chrony-project.org/doc/4.4/chronyd.html) for system time management.
  Use [chronyc](https://chrony-project.org/doc/4.4/chronyc.html) commands instead of `ntpq` or similar ntp commands.

* Systems with physical NICs upgrading from TrueNAS SCALE 22.12 (Bluefin) to 23.10 (Cobia) might encounter an issue relating to NIC names being updated and written to the database.
  If the Dashboard doesn't fully load when logging in to 23.10 (Cobia), go to **Network** and re-apply the interface settings to the named physical interfaces.

### Upgrade Paths

There are a variety of options for upgrading to SCALE 23.10.

{{< include file="/static/includes/23.10UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

{{< hint type="warning" title="System Configuration File Compatibility" >}}
System configuration files generated from releases before **22.12.4 (Bluefin)** are not compatible with 23.10 (Cobia).
When available, update the system to **22.12.4 (Bluefin)**, resolve any migrations from deprecated services to replacement apps, and download a fresh system configuration file before attempting to upgrade.
{{< /hint >}}

If attempting to migrate from TrueNAS CORE, see the [Migration section]({{< relref "/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.

{{< enterprise >}}
Migrations from TrueNAS CORE for Enterprise High Availability (HA) systems are not recommended at this time.
{{< /enterprise >}}

{{< columns >}}
**TrueNAS SCALE**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR

A["22.02.4 (Angelfish)"] --> C
B[CORE 13.0-U6] --> C
C["22.12.4.2 (Bluefin)"] --> D
D["23.10.2 (Cobia)"]
{{< /mermaid >}}

<--->
**TrueNAS SCALE Enterprise**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR
A("Current 22.12 (Bluefin) release") --> B["22.12.4.2 (Bluefin)"] --> C["23.10.2 (Cobia)"]
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
    <td>Linux Kernel</td><td><a href="https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.1.63">6.1.63</a><br>(<a href="https://lwn.net/Articles/958863/">6.1.74</a> released with SCALE 23.10.2)</td>
  </tr>
  <tr>
	<td>Nvidia Driver</td><td><a href="https://docs.nvidia.com/datacenter/tesla/pdf/NVIDIA_Data_Center_GPU_Driver_Release_Notes_535_v1.0.pdf">535.54.03-2</a></td>
  </tr>
  <tr>
	<td>OpenZFS</td><td><a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.2.0-rc1">2.2.0</a><br>(<a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.2.2">2.2.2</a> released with SCALE 23.10.1)<br>(<a href="https://github.com/openzfs/zfs/pull/15836">2.2.3</a> released with SCALE 23.10.2)</td>
  </tr>
</table>

### New OpenZFS Feature Flags
The items listed here represent new feature flags implemented since the previous update to the built-in OpenZFS version (2.1.11).

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| blake3 | [org.openzfs:blake3](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:blake3) | |
| block_cloning | [com.fudosecurity:block_cloning](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.fudosecurity:block_cloning) | This is enabled by default for pools created in 23.10 (Cobia). Systems upgrading to 23.10 have to upgrade existing pools to enable this feature. |
| draid | [org.openzfs:draid](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:draid) |  |
| head_errlog | [com.delphix:head_errlog](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.delphix:head_errlog) | |
| vdev_zaps_v2 | [com.klarasystems:vdev_zaps_v2](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.klarasystems:vdev_zaps_v2) | |
| zilsaxattr | [org.openzfs:zilsaxattr](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:zilsaxattr) |  |
{{< /truetable >}}

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 23.10.2

**February 22, 2024**

iXsystems is pleased to release TrueNAS SCALE 23.10.2!
This is a maintenance release to address community reported bugs in SCALE 23.10.1 and improve stability.

### Notable Changes

* Linux Kernel is updated to v. [6.1.74](https://lwn.net/Articles/958863/) ([NAS-126897](https://ixsystems.atlassian.net/browse/NAS-126897)).
* OpenZFS is updated to an early release version of v. [2.2.3](https://github.com/openzfs/zfs/pull/15836). OpenZFS feature flags are not changed.
* Network statistics on the dashboard and reporting screen now have consistent units ([NAS-125453](https://ixsystems.atlassian.net/browse/NAS-125453)).
* Failed cleanup after attempting to open ZFS snapshot directory are prevented ([NAS-126808](https://ixsystems.atlassian.net/browse/NAS-126808)).
* Accidental discard of NFSV4 ACLs is prevented ([NAS-127021](https://ixsystems.atlassian.net/browse/NAS-127021)).
* Fix bug relating to expanding VDEVs when replacing drives with larger drives ([NAS-126809](https://ixsystems.atlassian.net/browse/NAS-126809)).
* Fix disk temperature reporting ([NAS-127100](https://ixsystems.atlassian.net/browse/NAS-127100)).
* An NFS group permissions bug is fixed ([NAS-126067](https://ixsystems.atlassian.net/browse/NAS-126067)).
* RESTful API pagination parameters are fixed ([NAS-126080](https://ixsystems.atlassian.net/browse/NAS-126080)).
* Privacy improvements for debug files ([NAS-126925](https://ixsystems.atlassian.net/browse/NAS-126925)).
* Fix third party apps catalog validation exhausting space in /var/run ([NAS-127213](https://ixsystems.atlassian.net/browse/NAS-127213)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10500" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 23.10.2 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

{{< enterprise >}}
Some TrueNAS Enterprise HA systems can experience a panic if the admin configures iSCSI extents while the passive controller is in the process of setting up ALUA configuration.

When setting up new deployments with many targets, fully configure all iSCSI extents and targets before enabling ALUA.{{< /enterprise >}}

* Some users find SATA SSD drive temperatures are not visible on the **Reporting** screen ([NAS-127524](https://ixsystems.atlassian.net/browse/NAS-127524)). If you experience this issue, go to **System Settings > Services**, locate the **S.M.A.R.T.** service row and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **S.M.A.R.T. General Options** screen. Set **Check Interval** to 30 or less.

<a href="https://ixsystems.atlassian.net/issues/?filter=10501" target="_blank">Click here to see the latest information</a> about issues discovered in 23.10.2 that are being resolved in a future TrueNAS SCALE release.

## 23.10.1.3

{{< expand "Click to Expand" "v" >}}
**January 24, 2024**

iXsystems is pleased to release TrueNAS SCALE 23.10.1.3!
This is a small hotpatch with fixes for network interfaces, including related fixes for TrueNAS Enterprise High-Availability (HA) platforms.

### Notable Changes

* [NAS-125862](https://ixsystems.atlassian.net/browse/NAS-125862) - bond (link aggregation) physical interface constraint failure during database migration.

{{< enterprise >}}
These changes and known issue only impact TrueNAS SCALE Enterprise platforms with the High Availability (HA) feature.
Community users are not impacted.

* [NAS-126722](https://ixsystems.atlassian.net/browse/NAS-126722) - Treat interface FAULT event messages as BACKUP.
* [NAS-126922](https://ixsystems.atlassian.net/browse/NAS-126922) - Fix HA Virtual IP (VIP) error when interfaces have a null vrrp_config key.

### Known Issues

{{< include file="/static/includes/SCALEHADisableSTP.md" >}}
{{< /enterprise >}}
{{< /expand >}}

## 23.10.1.2

This hotpatch was not released in favor of making and releasing a new build versioned as **23.10.1.3**.

## 23.10.1.1

{{< expand "Click to Expand" "v" >}}
**January 16, 2024**

iXsystems is pleased to release TrueNAS SCALE 23.10.1.1!
This is a small hotpatch with fixes for web interface issues discovered after the 23.10.1 release.
The full 23.10.2 maintenance release is anticipated later in February.

### Notable Changes

* Fix non-physical interface (Link Aggregation, VLAN, Bridge) link address writing into the database when it is updated ([NAS-125932](https://ixsystems.atlassian.net/browse/NAS-125932)).
* Fix network interface speed reporting ([NAS-125832](https://ixsystems.atlassian.net/browse/NAS-125832)).
* Fix disk temperature reporting ([NAS-125841](https://ixsystems.atlassian.net/browse/NAS-125841)).

{{< enterprise >}}
A rare edge case with iSCSI ALUA that can cause server instability was discovered in SCALE 23.10 releases.
The upcoming SCALE 23.10.2 release fixes this issue and includes more bugfixes for servers with a large number of iSCSI targets.

SCALE 23.10 Enterprise-licensed systems should keep the iSCSI ALUA feature disabled.
After updating to 23.10.2, ALUA can be re-enabled.
{{< /enterprise >}}

See the [**23.10.1 Ongoing Issues**](#23101-ongoing-issues) list below for any additional details about issues discovered after the 23.10.1 release.
{{< /expand >}}

## 23.10.1

{{< expand "Click to Expand" "v" >}}
**December 19, 2023**

iXsystems is pleased to release TrueNAS SCALE 23.10.1!
This is a maintenance release to address community reported bugs in SCALE 23.10 (Cobia) and improve stability.

### Notable Changes

* Reported issues involving cached Web UI artifacts are addressed in 23.10.1 ([NAS-124602](https://ixsystems.atlassian.net/browse/NAS-124602)).

  {{< include file="/static/includes/UpgradeClearCache.md" >}}

* OpenZFS is updated to [version 2.2.2](https://github.com/openzfs/zfs/releases/tag/zfs-2.2.2) to fix a data integrity issue discovered in that project ([NAS-125541](https://ixsystems.atlassian.net/browse/NAS-125541)).
  While this bug has been present in OpenZFS for many years, this issue has not been found to impact any TrueNAS systems to date.
  See this [TrueNAS Community announcement](https://www.truenas.com/community/threads/old-openzfs-issue-found-and-being-resolved.114556/) for more details.
* The ZFS block cloning feature is temporarily disabled in 23.10.1. This is being done out of an abundance of caution while the OpenZFS project conducts additional testing. While re-enabling this feature is anticipated in a future 23.10 release, SCALE nightly builds continue to have ZFS block cloning enabled for experimentation and testing.
* [Exporting]({{< relref "ConfigReportsSCALE.md#configuring-reporting-exporters" >}}) Netdata reporting metrics to a third party database (Graphite) is now supported ([NAS-123668](https://ixsystems.atlassian.net/browse/NAS-123668)).
* The Linux kernel is updated to version [6.1.63](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.1.63) ([NAS-125309](https://ixsystems.atlassian.net/browse/NAS-125309)).
* All network interface hardware addresses persist at upgrade to address a name change some TrueNAS Enterprise system NICs experience when upgrading from TrueNAS SCALE Bluefin to TrueNAS SCALE Cobia ([NAS-124679](https://ixsystems.atlassian.net/browse/NAS-124679)).
* The deprecated **Use System Dataset** option in **System Settings > Advanced > Syslog** is removed ([WebUI PR #9026](https://github.com/truenas/webui/pull/9026/)).
* Improved sorting and filtering of replace disk search results ([NAS-124732](https://ixsystems.atlassian.net/browse/NAS-124732)).
* Fix issue with immutable fields preventing additional storage configuration for applications ([NAS-125196](https://ixsystems.atlassian.net/browse/NAS-125196)).
* The only install option supported by the 23.10.1 (Cobia) <file>ISO</file> installer is a clean installation.
  The <file>ISO</file> installer **Upgrade Install** and **Fresh Install** options are removed.
  Only the **Fresh Install** behavior is supported by the SCALE 23.10.1 (and later versions) ISO file.
  Continue to use the TrueNAS SCALE [update process]({{< relref "UpdateSCALE.md" >}}) to seamlessly upgrade from one SCALE major version to another.

<a href="https://ixsystems.atlassian.net/issues/?filter=10435" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 23.10.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Non-physical network interface addresses (Link Aggregation, VLAN, Bridge) improperly write into the database during interface configuration changes and cause these interfaces to stop functioning.
  Users with critical virtualized network interfaces on 23.10.0 should wait to update until the 23.10.1.1 release is available.
  If the system encounters this issue after updating to 23.10.1, first update to 23.10.1.1.
  Then go to the **Network** screen, remove any saved **bond**, **br**, or **vlan** interface configurations, and recreate them.
  See [NAS-125932](https://ixsystems.atlassian.net/browse/NAS-125932) and the related Jira tickets for more details.
* TrueNAS Enterprise High Availability customers with iSCSI and ALUA enabled can experience intermittent iSCSI management issues due to operation timeout. A fix is forthcoming in the 23.10.2 release.
* Adding a large custom applications catalog before a storage pool is selected for app use can result in system instability.
  Work around the issue by selecting a pool for TrueNAS SCALE app usage and rebooting the system.
  See [NAS-125877](https://ixsystems.atlassian.net/browse/NAS-125877) for more details.
* Importing a designated **ix-applications** pool does not automatically start the installed applications.
  This is targeted for resolution in the SCALE 23.10.2 maintenance release.
* The **Email Options** screen accessed from **Alerts** **<span class="material-icons">notifications</span> > Email** does not open if accessed a second time.
  If you encounter this issue, simply refresh your browser or go to another screen in the TrueNAS UI and click **Email** again.
* There is a known issue with the **Dashboard** **Network** widget tooltip reporting incorrect values for network speed.
  The main data presented in the **Network** widget is correct.

<a href="https://ixsystems.atlassian.net/issues/?filter=10436" target="_blank">Click here to see the latest information</a> about issues discovered in 23.10.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}

## 23.10.0.1

{{< expand "Click to Expand" "v" >}}
**October 31, 2023**

iXsystems is pleased to release TrueNAS SCALE 23.10.0.1!
This is a small hotpatch to address issues reported by the community after the 23.10.0 release.

### Notable Changes

* Fix for TrueNAS SCALE application deployment being stuck when the pool used for application management is encrypted ([NAS-124776](https://ixsystems.atlassian.net/browse/NAS-124776)).

* Fix issue where system logs stop sending to a remote logging server ([NAS-124845](https://ixsystems.atlassian.net/browse/NAS-124845)).

See the **23.10.0 Ongoing Issues** list below for any additional details about issues discovered after the 23.10.0 release.
{{< /expand >}}

## 23.10.0

{{< expand "Click to Expand" "v" >}}
**October 24, 2023**

iXsystems is pleased to release TrueNAS SCALE 23.10.0!

### Notable Changes

* [SMB/NFSv4 multiprotocol sharing]({{< relref "MixedModeShares.md" >}}) of the same dataset is now supported.
* Apps screens improvements. [NAS-124339](https://ixsystems.atlassian.net/browse/NAS-124339) and [NAS-124335](https://ixsystems.atlassian.net/browse/NAS-124335)
* The **Reports Config** form is removed from the **Reporting** screen. [NAS-124345](https://ixsystems.atlassian.net/browse/NAS-124345)

<a href="https://ixsystems.atlassian.net/issues/?filter=10398" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 23.10.0 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Some TrueNAS Enterprise system NICs experience a name change when upgrading from TrueNAS SCALE Bluefin to TrueNAS SCALE Cobia, preventing the NIC configuration from functioning ([NAS-124679](https://ixsystems.atlassian.net/browse/NAS-124679)).
  <br>**Workaround:** If this occurs when upgrading to SCALE 23.10 (Cobia), use the SCALE web interface to manually port the configuration from the nonfunctional NIC to the entry for the newly named NIC.
  When the system has a single NIC that is affected and web interface access is unavailable, connect to the system serial console and manually port the previous configuration to the newly named NIC.

<a href="https://ixsystems.atlassian.net/issues/?filter=10399" target="_blank">Click here to see the latest information</a> about issues discovered in 23.10.0 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}

## 23.10-RC.1

{{< expand "Click to Expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}

**September 19, 2023**

### Notable Changes

* The legacy pool creation screens are removed and the new pool creation wizard is the primary UI screen for creating new storage pools [NAS-123697](https://ixsystems.atlassian.net/browse/NAS-123697)
* **Apps > Settings** adds the **Manager Container Images** option for downloading, updating, or deleting specific container images from TrueNAS.
* Web interface feedback buttons are visible for community feedback on early releases.
* As part of the netdata implementation and overhaul of the reporting features, Graphite support is no longer built-in with TrueNAS SCALE 23.10 (Cobia) [NAS-123862](https://ixsystems.atlassian.net/browse/NAS-123862).
* Fix for the UPS service to allow device detection  [NAS-123625](https://ixsystems.atlassian.net/browse/NAS-123625)

<a href="https://ixsystems.atlassian.net/issues/?filter=10379" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 23.10-RC.1 release.
To switch between detail and list views for the changelog, press `t`.
Open the changelog in Jira to see the <span class="iconify" data-icon="mdi:export-variant"></span> **Export** menu to print or download the changelog in various file formats.

### Known Issues

Notes:

* VMs created in previous SCALE versions with a legacy BIOS enabled can lose the **Display** button in 23.10-RC.1.
  When encountered, reconfigure the VM to use a UEFI BIOS to re-enable the **Display** button ([NAS-124296](https://ixsystems.atlassian.net/browse/NAS-124296)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10380" target="_blank">Click here to see the latest information</a> about issues discovered in 23.10-RC.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}

## 23.10-BETA.1

{{< expand "Click to expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}
**August 15, 2023**

{{< include file="/static/includes/23.10FeatureList.md" >}}

### Notable Changes

* The advanced **Auxiliary Parameters** field is removed from both **Shares > SMB > Add** and **System Settings > Services > SMB** screens ([NAS-120530](https://ixsystems.atlassian.net/browse/NAS-120530)). Previously configured auxiliary parameters do remain on upgrade, but further changes must be done through CLI or API.
* As part of the system reporting and debug improvements, system logs now exclusively write to the TrueNAS boot device.

<a href="https://ixsystems.atlassian.net/issues/?filter=10359&atlOrigin=eyJpIjoiNTczY2E2NmVjODk5NGE0NThlZTFlOTI4MDFhOTMzNzUiLCJwIjoiaiJ9" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 23.10-BETA.1 release.
To switch between detail and list views for the changelog, press `t`.
Open the changelog in Jira to see the <span class="iconify" data-icon="mdi:export-variant"></span> **Export** menu to print or download the changelog in various file formats.

### Known Issues

<a href="https://ixsystems.atlassian.net/issues/?filter=10361&atlOrigin=eyJpIjoiN2ExNTQ5YmE0NmNkNGQyN2FiMTJmYmJlOWIwZWI0ZjIiLCJwIjoiaiJ9" target="_blank">Click here to see the latest information</a> about issues discovered in 23.10-BETA.1 that are being resolved in a future TrueNAS SCALE release.
{{< /expand >}}
