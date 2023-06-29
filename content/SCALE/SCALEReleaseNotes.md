---
title: "SCALE 23.10 Cobia Release Notes"
description: "Highlights, change log, and known issues for each SCALE 23.10 (Cobia) release."
aliases:
 - /scale/scalenextversion/
 - /scale/scalereleasenotes/
weight: 7
---

{{< toc >}}

iXsystems is pleased to introduce TrueNAS SCALE 23.10 (Cobia)!
This SCALE major version provides many new features and continued improvements to the TrueNAS SCALE experience.

These are some of the major changes:

* Drive count optimizations: SCALE 23.10 has numerous back-end improvements to allow up to **1255** disks under management!
* System service replacements: many system services that were built in to SCALE Bluefin have been rebuilt as optional TrueNAS SCALE Applications.
  This gives users even more control over tuning SCALE to use only desired services and even more flexibility with updating these services.
  These services are no longer available from **System Settings > Services** but do have an equivalent application (noted in `()`) available from **Apps**:
  * Dynamic DNS (**ddns-updater**)
  * OpenVPN Server (multiple VPN apps)
  * Rsyncd Server (**rsyncd**)
  * S3 (**minio**)
  * TFTP (**tftpd-hpa**)
  * WebDAV (**webdav**)
  
  The OpenVPN Client service was also removed but has no equivalent application.
  Please seek an alternate solution if this was a required service.
  
  {{< enterprise >}}
  TrueNAS SCALE Enterprise customers with TrueNAS SCALE 22.12.3 (Bluefin) or later deployed are warned when a deprecated service is in use.
  To prevent any loss of service, customers with Silver or Gold level support contracts with iXsystems are prevented from upgrading to TrueNAS SCALE 23.10 (Cobia) until the deprecated services are addressed.
  {{< /enterprise >}}

* OneDrive Cloud Credential removed: the backend python module is deprecated since 2016 and is incompatible with SCALE 23.10.
  Users are encouraged to switch to an alternate Cloud Storage provider for any existing OneDrive Cloud Sync tasks before upgrading to SCALE 23.10.

* Storage changes
* Apps changes
* New Web UI feedback system: A new feedback reporting option has been introduced to encourage  user experience comments and suggestions for screens undergoing revision in prerelease software versions.

{{< hint type=important >}}
* TrueNAS SCALE is developed as an appliance that uses specific Linux packages with each release. Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.
* HA migrations from TrueNAS CORE Enterprise systems are not recommended without consulting with iXsystems Support first.
* All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
* New security checks are present for host paths in use by various system services. If you have host paths that are shared by multiple system services (e.g. Apps and SMB), please read the 22.12 [Known Issues](#known-issues-with-a-future-resolution) and take steps to create unique host paths for each in-use system service.
{{< /hint >}}

Want to collaborate on TrueNAS SCALE? Join our [Official Discord Server.](https://discord.com/invite/Q3St5fPETd)

## Software Lifecycle

{{< include file="/content/_includes/SoftwareStatusPage.md" type="page" >}}

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

## Release Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

{{< truetable >}}
| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| SCALE 23.10-BETA.1 (Cobia) | Code-freeze | 26 July 2023
| SCALE 23.10-BETA.1 (Cobia) | Internal Testing Sprints | 31 July - 11 August 2023 |
| SCALE 23.10-BETA.1 (Cobia) | Tag | 14 August 2023 |
| SCALE 23.10-BETA.1 (Cobia) | Release | 15 August 2023 |
{{< /truetable >}}

## Obtaining a Release

To download an <file>.iso</file> file for installing SCALE 23.10 (Cobia), go to https://www.truenas.com/truenas-scale/ and click **Download**.
Manual update files are also available from this location.

To upgrade an existing SCALE install, log in to your SCALE web interface and go to **System Settings > Update**.

### Cobia Unstable Nightly Images (Unstable Branch, developers and brave testers)

(*Review this text and update as needed*)

{{< hint type=warning >}}
Nightly builds are considered experimental and highly unstable.
Do not use a nightly build for anything other than testing and development.
{{< /hint >}}

Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time.
These images are made publicly available when they pass automated basic usability testing.
This means that during times of heavy development, nightly images might be less frequently available.
Online updates are created every 2 hours and are available in the SCALE UI online updating page.

* [ISO Installation Files](https://download.truenas.com/truenas-scale-bluefin-nightly/ "SCALE Angelfish Nightly .iso files")
* [Manual Update File](https://update.freenas.org/scale/TrueNAS-SCALE-Bluefin-Nightlies/TrueNAS-SCALE-Bluefin-Nightly.update)

## 23.10-BETA.1

{{< hint type=warning >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}

**TBD, 2023**

### Component Versions

TrueNAS SCALE is built from many different software components.
This list has up-to-date information on which versions of Linux, ZFS, and NVIDIA drivers are included with this TrueNAS SCALE release.
Click the component version number to see the latest release notes for that component.

<table class="truetable" style="max-width:25%;">
  <tr>
    <th>Component</th>
	<th>Version</th>
  </tr>
  <tr>
    <td>Linux Kernel</td><td><a href="https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v5.15.107">5.15.107</a></td>
  </tr>
  <tr>
	<td>Nvidia Driver</td><td><a href="https://www.nvidia.com/download/driverResults.aspx/191961/en-us/">515.65.01</a></td>
  </tr>
  <tr>
	<td>ZFS</td><td><a href="https://github.com/openzfs/zfs/releases/tag/zfs-2.1.11">2.1.11</a></td>
  </tr>
</table>

### OpenZFS Feature Flags

(*Identify if this subsection is still needed. If so, determine if this needs to update per maintenance release or per major version and adjust the section's placement in the file accordingly.*)

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html).

For more details on zpool.features.7 see [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

{{< truetable >}}
| Feature Flag | GUID | Dependencies | Description |
|--------------|------|--------------|-------------|
| blake3 | org.openzfs.blake3 | extensible)dataset | Enables use of the BLAKE3 hash algorithm for checksum and dedup. BLAKE3 is a secure hash algorithm focused on high performance. When enabled, the administrator can turn on the blake3 checksum on any dataset using `zfs set checksum=blake dset` [see zfs-set(8)](https://openzfs.github.io/openzfs-docs/man/8/zfs-set.8.html). |
| head_errlog | com.delphix:head_errlog | n/a | Enables the upgraded version of `errlog`. The error log of each head dataset is stored separately in the zap object and keyed by the head id. Every dataset affected by an error block is listed in the output of `zpool status`. |
| zilsaxattr | org.openzfs:zilsaxattr | extensible_dataset | Enables `xattr-sa` extended attribute logging in the ZIL. If enabled, extended attribute changes from both `xattrdir=dir` and `xattr=sa` are guaranteed to be durable if either `sync=always` is set for the dataset when a change is made or sync(2) is called on the dataset after making changes. |
{{< /truetable >}}

### 23.10-BETA.1 Changelog

#### New Feature

#### Improvement

#### Bug


## Known Issues 
Known issues are those found during internal testing or reported by the community and are listed in three tables:
* Notices that provide more detail about Bluefin specific changes.
* Issues from a release that will be resolved in a future targeted release(s).
* Issues resolved in a particular version.

### Notices without a Resolution Release

{{< truetable >}}
| Notice or Behavior | Details |
|--------------------|---------|
| Virtual Machine display devices appear to be insecure. | This is under investigation and resolution is TBD. To secure the system, disable any VM display devices after configuring the VM. |
| TrueNAS does not create alerts for SMR disks. | TrueNAS SCALE and TrueCommand have never created alerts when SMR disks are used. |
| TrueNAS SCALE does not support T10-DIF drives. | We are currently working on a procedure to resolve the issue. |
| Unable to mount an NFS export after migrating from CORE > SCALE or updating to 22.02.0. | The <file>/etc/exports</file> file is no longer generated when the NFS configuration contains <i>mapall</i> or <i>maproot</i> entries for unknown users or groups. If you are unable to mount an NFS export, verify the NFS share configuration is compatible with your network environment. |
| SCALE Gluster/Cluster. | Gluster/Cluster features are still in testing. Administrators should use caution when deploying and avoid use with critical data. |
| AFP sharing is removed from TrueNAS SCALE. | The AFP protocol is deprecated and no longer receives development effort or security fixes. TrueNAS SCALE automatically migrates any existing AFP shares into an SMB configuration that is preset to function like an AFP share. |
| MS-DOS based SMB clients cannot connect to TrueNAS SCALE | SMB clients determined to be end-of-life (EOL) by their vendor are not supported in TrueNAS. Administrators should work to phase out any clients using the SMB1 protocol from their environments. |
| App deployment can get stuck in validation when the Host Path is used between Apps and TrueNAS sharing services (e.g. SMB and NFS). | Shared host paths are considered insecure and are not recommended. Review host paths used by Apps and Sharing services and adjust paths to be unique. As a last resort that can result in system and app instability, **Host Path Safety Checks** can be disabled in **Apps > Settings > Advanced Settings**. |
| Apps fail to start | There are known issues where applications fail to start after reboot. The fixed-in release is not known at this time. |
{{< /truetable >}}

### Known Issues with a Future Resolution

{{< truetable >}}
| Seen In | Key | Summary | Workaround | Resolution Target |
|---------|-----|---------|------------|-------------------|
| 23.10-BETA.1 | NAS-###### | This is a quick summary of the ticket. | This is a concise note about how to avoid the issue. | 23.10-RC.1 |

{{< /truetable >}}

### Resolved Known Issues
{{< expand "Resolved Known Issues List" "v">}}
{{< truetable >}}
| Seen In | Resolved In | Key | Summary | Workaround |
|---------|-------------|-----|---------|------------|

{{< /truetable >}}
{{< /expand >}}
