---
title: Nightly Version Notes
description: "Highlights and change log for the next major version of TrueNAS CORE."
weight: 3
aliases:
  - /releasenotes/core/13.0beta1/
  - /releasenotes/core/13.0rc1/
  - /releasenotes/core/
  - /core/corereleasenotes/
  - /core/13.3/gettingstarted/corereleasenotes/
related: false
---
{{< header logo="/images/truenas-core-logo.png" logo_alt="TrueNAS CORE Logo" version="13.3" icon="" icon_alt="" >}}
{{< hint type="tip" >}}
This page is being rebuilt with notes from the latest TrueNAS CORE **nightly** development versions.
The latest [TrueNAS CORE **13.0** version release notes](https://www.truenas.com/docs/core/13.0/gettingstarted/corereleasenotes/) are now available from the TrueNAS CORE 13.0 documentation section.
Release notes for all the latest major versions are also linked from the [Docs Hub Home](/)
{{< /hint >}}

## Obtaining a Release

{{< include file="archive/NightlyTestWarning.md" >}}

To download a <file>.tar</file> file for installing or upgrading to a CORE 13.3 nightly version, go to https://www.truenas.com/download-truenas-core/ and click **Download Future Previews**.
Select the latest <file>.tar</file> file and click **Download**.

Log in to the web interface and go to **System > Update**.
Click **INSTALL MANUAL UPDATE FILE**.
Select **SAVE CONFIGURATION** when prompted.
Select an **Update File Temporary Storage Location** then click **Chose File** and browse to select the <file>.tar</file> file.
Click **APPLY UPDATE**.

More details are available from [Updating Core]({{< relref "/core/coretutorials/updatingtruenas/updatingcore.md" >}}).

{{< expand "Release Schedule (Click to expand)" "v" >}}

## Software Lifecycle

{{< include file="/static/includes/LifecycleTable.md" >}}

{{< include file="/static/includes/SoftwareStatusPage.md" >}}

## Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=core-releases defaultTab=3 >}}
{{< /expand >}}
<!-- Update for RC.1 release
## Upgrade Notes

### Upgrade Paths
-->
## Component Versions

Click the component version number to see the latest release notes for that component.

<table class="truetable" style="width:40%;margin-left:0;margin-right:auto">
  <tr>
    <th>Component</th>
	<th>Version</th>
  </tr>
  <tr>
    <td>FreeBSD</td><td><a href="https://www.freebsd.org/releases/13.2R/relnotes/">13.2-RELEASE-p6</a></td>
  </tr>
  <tr>
	<td>OpenZFS</td><td><a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.2.2">2.2.2-1</a></td>
  </tr>
</table>

### New OpenZFS Feature Flags
The items listed here represent new feature flags implemented since the previous update to the built-in OpenZFS version.

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| blake3 | [org.openzfs:blake3](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:blake3) | |
| block_cloning | [com.fudosecurity:block_cloning](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.fudosecurity:block_cloning) | |
| draid | [org.openzfs:draid](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:draid) | draid is not supported in the TrueNAS CORE web interface. See [TrueNAS SCALE](https://www.truenas.com/truenas-scale/) for this feature. |
| head_errlog | [com.delphix:head_errlog](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.delphix:head_errlog) | |
| vdev_zaps_v2 | [com.klarasystems:vdev_zaps_v2](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.klarasystems:vdev_zaps_v2) | |
| zilsaxattr | [org.openzfs:zilsaxattr](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:zilsaxattr) |  |
{{< /truetable >}}

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## Nightly Changelog

Notable changes:

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and scheduled for removal in CORE 13.3.
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should migrate to a separately maintained [MinIO plugin]({{< relref "MinIOPlugin.md" >}}) or otherwise move any production data away from the S3 service storage location before upgrading to a 13.3 pre-release version.
  See the CORE 13.0 tutorial for [detailed migration instructions](http://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/).
  See also [Feature Deprecations]({{< relref "Deprecations.md" >}}).

* The web UI **Shell** is removed in CORE 13.3. Users can continue to access the shell using [SSH]({{< relref "ConfiguringSSH.md" >}}) or a physical system connection with serial cable or other direct method ([NAS-124392](https://ixsystems.atlassian.net/browse/NAS-124392)).

* The Plugins, Jails, and Virtual Machines features are in maintenance mode and are offered to the TrueNAS community "as-is".
  [TrueNAS Enterprise](https://www.truenas.com/truenas-enterprise/) customers with a critical need for virtualization features should consider TrueNAS SCALE for officially tested and supported virtualization features.
  