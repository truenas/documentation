---
title: "Nightly Development Notes"
description: "Highlights and notes about the next SCALE major version."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
weight: 10
---

{{< toc >}}

{{< hint type="tip" title="Work in Progress" >}}
This article is being rewritten to document changes in the latest TrueNAS SCALE nightly version.

To view notes for previous major version releases, use the Product and Version drop downs at the top of this page or the links available on the [Docs Hub Home page](www.truenas.com/docs/).
{{< /hint >}}

<!--
## Obtaining a Release

{{< expand "Release Schedule (Click to expand)" "v" >}}

{{< include file="/content/_includes/LifecycleTable.md" >}}

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}
{{< truetable >}}
| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| TBD                  | Tag | TBD |
|                       | **Release** | **TBD** |
{{< /truetable >}}
{{< /expand >}}

## SCALE Next Version Primary Features


## Upgrade Notes

### Upgrade Paths (Anticipated)

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

If attempting to migrate from TrueNAS CORE, see the [Migration section]({{< relref "/SCALE/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.


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

## SCALE Next Version Changelog
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}

**Month, Day Year**

Notable changes:

* Bullet list of high-visibility or heavy user impact changes.

<a href="https://ixsystems.atlassian.net/issues/?filter=10379" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the NEXT Version release.
To switch between detail and list views for the changelog, press `t`.
Open the changelog in Jira to see the <span class="iconify" data-icon="mdi:export-variant"></span> **Export** menu to print or download the changelog in various file formats.

### SCALE NEXT Version Ongoing Issues

<a href="https://ixsystems.atlassian.net/issues/?filter=10380" target="_blank">Click here to see the latest information</a> about issues discovered in SCALE NEXT Version that are being resolved in a future TrueNAS SCALE release.

-->