---
title: "SCALE 23.10 Release Notes"
description: "Highlights, change log, and known issues for each SCALE 23.10 (Cobia) release."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
weight: 10
---

{{< toc >}}

## Obtaining a Release

To download an <file>.iso</file> file for installing or upgrading to SCALE 23.10-BETA.1 (Cobia), go to https://www.truenas.com/truenas-scale/ and click **Download**.
SCALE ISO upgrade process: [TrueNAS Upgrades]({{< relref "23.10Upgrades.md" >}})

Manual update files for SCALE 23.10-BETA.1 (Cobia) are also provided from https://www.truenas.com/truenas-scale/.
SCALE update process: [SCALE Community]({{< relref "UpdateSCALE.md" >}}) | [SCALE Enterprise]({{< relref "UpdateHASCALE.md" >}})

{{< expand "Release Schedule (Click to expand)" "v" >}}

{{< include file="/content/_includes/LifecycleTable.md" type="page" >}}

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}
{{< truetable >}}
| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| SCALE 23.10-RC.1 (Cobia) | Code-freeze | 30 August 2023 |
|                          | Internal Testing Sprints | 4 September - 15 September 2023 |
|                          | Tag | 18 September 2023 |
|                          | **Release** | **19 September 2023** |
| SCALE 23.10.0 (Cobia) | Code-freeze | 4 October 2023 |
|                       | Internal Testing Sprints | 9 October - 20 October 2023
|                       | Tag | 23 October 2023 |
|                       | **Release** | **24 October 2024** |
| SCALE 23.10.1 (Cobia) | Code-freeze | 29 November 2023 |
|                       | Internal Testing Sprints | 4 December - 15 December 2023 |
|                       | Tag | 18 December 2023 |
|                       | **Release** | **19 December 2023** |
{{< /truetable >}}
{{< /expand >}}

## Upgrade Notes

Several built-in services from SCALE 22.12 (Bluefin) or TrueNAS CORE 13.0 in **System Settings > Services** are replaced by community applications.
You must disable these built-in services and begin using the equivalent application **before** upgrading to SCALE 23.10 (Cobia).

{{< enterprise >}}
TrueNAS SCALE Enterprise customers with TrueNAS SCALE 22.12.3 (Bluefin) or later deployed are warned when a deprecated service is in use.
To prevent any loss of service, customers with Silver or Gold level support contracts with iXsystems are prevented from upgrading to TrueNAS SCALE 23.10 (Cobia) until the deprecated services are addressed.
{{< /enterprise >}}

{{< expand "Replaced Services (Click to expand)" "v" >}}
{{< columns >}}
* Dynamic DNS replaced by **[ddns-updater]({{< relref "ddns-updater.md" >}})**
* OpenVPN Server replaced by multiple VPN [apps]({{< relref "/SCALETutorials/Apps/CommunityApps/_index.md" >}})
* OpenVPN Client has no equivalent application.
* Rsyncd Server replaced by **[rsyncd]({{< relref "rsyncd.md" >}})**
<--->
* S3 replaced by **[minio]({{< relref "/SCALETutorials/Apps/CommunityApps/MinIOApp/_index.md" >}})**.
* WebDAV replaced by **[webdav]({{< relref "webdav.md" >}})**
* TFTP replaced by **[tftpd-hpa]({{< relref "tftp-hpaapp.md" >}})**

{{< /columns >}}
{{< hint type="info" title="S3 Service Replacement" >}}
Due to [Minio's filesystem mode deprecation](https://min.io/docs/minio/container/operations/install-deploy-manage/migrate-fs-gateway.html) and update methodology, older versions of Minio are not updatable to newer versions and require additional update steps.
This impacts moving from the built-in **S3** service to the **Minio** application.
A detailed TrueNAS-specific tutorial for moving configuration and storage data from the built-in **S3** service to the latest **Minio** version available from the Community App Catalog is forthcoming.
{{< /hint >}}
{{< /expand >}}

TrueNAS SCALE is an appliance built from specific Linux packages.
Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.

All auxiliary parameters can change between TrueNAS major versions due to security and development changes.
We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.

Systems with large numbers of attached disks are recommended to use the new Pool Creation wizard when creating or modifying a pool.

### Upgrade Paths (Anticipated)

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

{{< hint type="warning" title="System Configuration File Compatibility" >}}
System configuration files generated from releases before **22.12.4 (Bluefin)** are not compatible with 23.10 (Cobia).
When available, update the system to **22.12.4 (Bluefin)**, resolve any migrations from deprecated services to replacement apps, and download a fresh system configuration file before attempting to upgrade.
{{< /hint >}}

{{< enterprise >}}
Migrations from TrueNAS CORE for Enterprise High Availability (HA) systems are not recommended at this time.
{{< /enterprise >}}

{{< columns >}}
**TrueNAS SCALE**

```mermaid
flowchart LR

A[Angelfish 22.02.4] --> C
B[CORE 13.0-U5.3] --> C
C[Bluefin 22.12.4] --> D
D[Cobia 23.10.0]
```

<--->
**TrueNAS SCALE Enterprise**

```mermaid
flowchart LR
A(Current 22.12 Bluefin version) --> B[Bluefin 22.12.4] --> C[Cobia 23.10.0]
```

{{< /columns >}}

## Component Versions
Click the component version number to see the latest release notes for that component.
<table class="truetable" style="width:25%;">
  <tr>
    <th>Component</th>
	<th>Version</th>
  </tr>
  <tr>
    <td>Linux Kernel</td><td><a href="https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.1.42">6.1.42</a></td>
  </tr>
  <tr>
	<td>Nvidia Driver</td><td><a href="https://docs.nvidia.com/datacenter/tesla/pdf/NVIDIA_Data_Center_GPU_Driver_Release_Notes_535_v1.0.pdf">535.54.03-2</a></td>
  </tr>
  <tr>
	<td>OpenZFS</td><td><a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.2.0-rc1">2.2.0</a></td>
  </tr>
</table>

### New OpenZFS Feature Flags
The items listed here represent new feature flags implemented since the previous update to the built-in OpenZFS version (2.1.11).

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| blake3 | [org.openzfs:blake3](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:blake3) | |
| block_cloning | [com.fudosecurity:block_cloning](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.fudosecurity:block_cloning) | This is enabled by default for pools created in 23.10 (Cobia). Systems upgrading to 23.10 have to upgrade existing pools to enable this feature. |
| draid | [org.openzfs:draid](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:draid) | Web interface support is not present in 23.10-BETA.1. |
| head_errlog | [com.delphix:head_errlog](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.delphix:head_errlog) | |
| vdev_zaps_v2 | [com.klarasystems:vdev_zaps_v2](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.klarasystems:vdev_zaps_v2) | |
| zilsaxattr | [org.openzfs:zilsaxattr](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:zilsaxattr) | Web interface support is not present in 23.10-BETA.1. |
{{< /truetable >}}

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html).
For more details on zpool.features.7 see [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 23.10-BETA.1 Changelog
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}
**August 15, 2023**

{{< include file="/content/_includes/23.10FeatureList.md" type="page" >}}

<a href="https://ixsystems.atlassian.net/issues/?filter=10359&atlOrigin=eyJpIjoiNTczY2E2NmVjODk5NGE0NThlZTFlOTI4MDFhOTMzNzUiLCJwIjoiaiJ9" target="_blank">Click here</a> for the full changelog of completed tickets that are included in the 23.10-BETA.1 release.
Open the changelog in Jira to see the <span class="iconify" data-icon="mdi:export-variant"></span> **Export** menu to print or download the changelog in various file formats.

### 23.10-BETA.1 Ongoing Issues

[Click here](https://ixsystems.atlassian.net/issues/?filter=10361&atlOrigin=eyJpIjoiN2ExNTQ5YmE0NmNkNGQyN2FiMTJmYmJlOWIwZWI0ZjIiLCJwIjoiaiJ9) to view the latest information about issues discovered in 23.10-BETA.1 that are being resolved in a future TrueNAS SCALE release.
