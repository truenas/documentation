---
title: "SCALE 23.10 Release Notes"
description: "Highlights, change log, and known issues for each SCALE 23.10 (Cobia) release."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
weight: 10
---

{{< toc >}}

{{< include file="/content/_includes/LifecycleTable.md" type="page" >}}
## Release Schedule
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

{{< hint type=important >}}
* TrueNAS SCALE is an appliance that uses specific Linux packages with each release.
  Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.
* HA migrations from TrueNAS CORE Enterprise systems are not recommended without consulting with iXsystems Support first.
* All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
* The <a href="https://www.truenas.com/software-status/" target="_blank">Software Status</a> page shows the latest recommendations for using the various TrueNAS software releases.
{{< /hint >}}
## Obtaining a Release

To download an <file>.iso</file> file for installing or upgrading to SCALE 23.10 (Cobia), go to https://www.truenas.com/truenas-scale/ and click **Download**.
SCALE major version upgrade process: [TrueNAS Upgrades]({{< relref "23.10Upgrades.md" >}})

To update minor versions within SCALE 23.10 (Cobia), log in to your SCALE web interface and go to **System Settings > Update**.
Manual update files are provided from https://www.truenas.com/truenas-scale/.
SCALE minor version update process: [SCALE Community]({{< relref "UpdateSCALE.md" >}}) | [SCALE Enterprise]({{< relref "UpdateHASCALE.md" >}})

### Cobia Unstable Nightly Images

{{< hint type=warning >}}
Nightly builds are considered experimental and highly unstable.
Do not use a nightly build for anything other than testing and development.
{{< /hint >}}
Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time.
These images are made publicly available when they pass automated basic usability testing.
This means that during times of heavy development, nightly images might be less frequently available.
Online updates are created every 2 hours and are available in the SCALE UI online updating page.
* [ISO Installation Files](https://download.truenas.com/truenas-scale-cobia-nightly/ "SCALE 23.10 (Cobia) Nightly .iso files")

## 23.10 Component Versions
Click the component version number to see the latest release notes for that component.
<table class="truetable" style="max-width:25%;">
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
	<td>ZFS</td><td><a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.2.0-rc1">2.2.0</a></td>
  </tr>
</table>
{{< expand "OpenZFS Feature Flags (Click to expand)" "v" >}}

The items listed here represent new feature flags implemented since the previous update to the built-in OpenZFS version (2.1.11).

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html).
For more details on zpool.features.7 see [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| blake3 | [org.openzfs:blake3](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:blake3) | |
| block_cloning | [com.fudosecurity:block_cloning](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.fudosecurity:block_cloning) | |
| draid | [org.openzfs:draid](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:draid) | Support for draid is anticipated in a future 23.10 early release. |
| head_errlog | [com.delphix:head_errlog](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.delphix:head_errlog) | |
| vdev_zaps_v2 | [com.klarasystems:vdev_zaps_v2](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.klarasystems:vdev_zaps_v2) | |
| zilsaxattr | [org.openzfs:zilsaxattr](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:zilsaxattr) | |
{{< /truetable >}}
{{< /expand >}}

## 23.10-BETA.1
{{< hint type=warning >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}
**August 15, 2023**

iXsystems is pleased to release TrueNAS SCALE 23.10-BETA.1!

### 23.10-BETA.1 Changelog

<!-- add copy about logging in to jira to see the list of tickets (test to confirm behavior), add link to jira filter -->

## TrueNAS SCALE Ongoing Issues

These issues have been discovered through community or internal testing and are being tracked for resolution.

<!-- add copy about logging in to jira to see the list of tickets (test to confirm behavior), add link to jira filter -->
