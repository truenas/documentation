---
title: Nightly Version Notes
description: "Highlights and change log for the next major version of TrueNAS CORE."
weight: 3
aliases:
  - /releasenotes/core/13.0beta1/
  - /releasenotes/core/13.0rc1/
  - /releasenotes/core/
  - /core/corereleasenotes/
related: false
---

{{< hint type="tip" >}}
This page is being rebuilt with notes from the latest TrueNAS CORE **nightly** development versions.
The latest [TrueNAS CORE **13.0** version release notes](https://www.truenas.com/docs/core/13.0/gettingstarted/corereleasenotes/) are now available from the TrueNAS CORE 13.0 documentation section.
Release notes for all the latest major versions are also linked from the [Docs Hub Home](/)
{{< /hint >}}

## Obtaining a Release

{{< include file="_includes/NightlyTestWarning.md" >}}

To download a <file>.tar</file> file for installing or upgrading to a CORE 13.1 nightly version, go to https://www.truenas.com/download-truenas-core/ and click **Download Future Previews**.
Select the latest <file>.tar</file> file and click **Download**.

Log in to the web interface and go to **System > Update**.
Click **INSTALL MANUAL UPDATE FILE**.
Select **SAVE CONFIGURATION** when prompted.
Select an **Update File Temporary Storage Location** then click **Chose File** and browse to select the <file>.tar</file> file.
Click **APPLY UPDATE**.

More details are available from [Updating Core]({{< relref "/core/coretutorials/updatingtruenas/updatingcore.md" >}}).

{{< expand "Release Schedule (Click to expand)" "v" >}}

## Software Lifecycle

{{< include file="/content/_includes/LifecycleTable.md" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" >}}

## Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=core-releases >}}
{{< /expand >}}

## Major Component Versions

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

## Nightly Changelog

Notable changes:

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and scheduled for removal in CORE 13.1.
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should migrate to a separately maintained [MinIO plugin]({{< relref "MinIOPlugin.md" >}}) or otherwise move any production data away from the S3 service storage location before upgrading to a 13.1 pre-release version.
  See the CORE 13.0 tutorial for [detailed migration instructions](http://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/).
  See also [Feature Deprecations]({{< relref "Deprecations.md" >}}).

* The web UI **Shell** is removed in CORE 13.1. Users can continue to access the shell using [SSH]({{< relref "ConfiguringSSH.md" >}}) or a physical system connection with serial cable or other direct method ([NAS-124392](https://ixsystems.atlassian.net/browse/NAS-124392)).
