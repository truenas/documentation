---
title: SCALE Bluefin Release Notes
weight: 5
aliases:
  - /releasenotes/
  - /releasenotes/scale/
  - /releasenotes/releaseschedule/
---

{{< toc >}}

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" type="page" >}}

## SCALE Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" type="page" >}}

| Version | Checkpoint | Scheduled Date |
|---------|------------|----------------|
| SCALE 22.12.BETA.1 | Code-freeze |  |
| SCALE 22.12.BETA.1 | Internal Testing Sprints |  |
| SCALE 22.12.BETA.1 | Tag |  |
| SCALE 22.12.BETA.1 | Release |  |
| SCALE 22.12.BETA.2 | Code-freeze |  |
| SCALE 22.12.BETA.2 | Internal Testing Sprints |  |
| SCALE 22.12.BETA.2 | Tag |  |
| SCALE 22.12.BETA.2 | Release |  |
| SCALE 22.12.RC.1 | Code-freeze |  |
| SCALE 22.12.RC.1 | Internal Testing Sprints |  |
| SCALE 22.12.RC.1 | Tag |  |
| SCALE 22.12.RC.1 | Release |  |
| SCALE 22.12.0 | Code-freeze |  |
| SCALE 22.12.0 | Internal Testing Sprints |  |
| SCALE 22.12.0 | Tag |  |
| SCALE 22.12.0 | Release |  |
| SCALE 22.12.1 | Code-freeze |  |
| SCALE 22.12.1 | Internal Testing Sprints |  |
| SCALE 22.12.1 | Tag |  |
| SCALE 22.12.1 | Release |  |

## Obtaining the Release

To download an <file>.iso</file> file for installing SCALE Bluefin, go to https://www.truenas.com/truenas-scale/ and click **Download**.
Manual update files are also available at this location.

To upgrade an existing SCALE install, log in to your SCALE web interface and go to **System Settings > Update**.

{{< hint warning >}}
SCALE is developed as an appliance that uses specific Linux packages with each release. Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.
{{< /hint >}}

## <version changelog>

## Known Issues

| Seen In | Key | Summary | Workaround | Resolved In |
|---------|-----|---------|------------|-------------|
| 22.02.3 | <a href="https://ixsystems.atlassian.net/browse/NAS-117581" target="_blank">NAS-117581</a> | Launch Docker Image button is disabled. | On the <b>Apps</b> page, select the <b>Available Applications</b> tab before trying to click the button. | 22.02.3.1 |
| 22.02.1 |<a href="https://ixsystems.atlassian.net/browse/NAS-116473" target="_blank">NAS-116473</a> | Large Drive Count Issues | iX is investigating isuses with booting SCALE on systems with more than 100 Disks. | 22.12-RC.1 |
| 22.02.0 | <a href="https://jira.ixsystems.com/browse/NAS-115238" target="_blank">NAS-115238</a> | Removed drive from pool does not degrade pool status (SCALE). | Issue is being investigated and a fix provided in a future release | Targeted 22.02.4 |
| 22.02.0-RC.2 |  | Cosmetic issue with update trains when updating from SCALE 22.02.0-RC.2. | After updating from 22.02.0-RC.2, the previous update train might show in <b>System Settings > Update</b>. This is a cosmetic issue only and can be ignored. |  |
|  |  | Unable to mount an NFS export after migrating from CORE > SCALE or updating to 22.02.0. | The <file>/etc/exports</file> file is no longer generated when the NFS configuration contains <i>mapall</i> or <i>maproot</i> entries for unknown users or groups. This can impact users who previously had a mapping group set to <i>wheel</i>, which does not exist in SCALE. If you are unable to mount an NFS export, review your NFS share configuration and change any <i>wheel</i> entries to something specific for your environment or <i>root</i>. |  |
|  |  | ZFS feature flag has been removed. | See <a href="#zfs-feature-flag-removal">ZFS Feature Flag Removal</a> for more information. |  |
|  |  | SCALE Gluster/Cluster. | Gluster/Cluster features are still in testing.  Administrators should use caution when deploying and avoid use with critical data. |  |
|  | <a href="https://jira.ixsystems.com/browse/NAS-110263" target="_blank">NAS-110263</a> | AFP sharing is removed from TrueNAS SCALE. The protocol is deprecated and no longer receives development effort or security fixes. | TrueNAS SCALE automatically migrates any existing AFP shares into an SMB configuration that is preset to function like an AFP share. | 21.06-BETA.1 |
| 21.06-BETA.1 | <a href="https://jira.ixsystems.com/browse/NAS-111547" target="_blank">NAS-111547</a> | ZFS shouldn't count vdev IO errors on hotplug removal | Pool status isn't being updated immediately on disk exchange events. | Targeted 22.12 |

## ZFS Feature Flag Removal 
{{< expand "Expand if you created or upgraded a pool using a TrueNAS SCALE nightly build dated between June 29, 2021 and July 15, 2021" "v" >}}
### Executive Summary

* ZFS `xattr_compat` feature flag removed

### How to tell if I'm impacted by this change

* Users who created or upgraded a pool using a TrueNAS SCALE nightly build dated between June 29, 2021 and July 15, 2021 are impacted by this change.
* Users who have manually set `xattr_compat=all` on a dataset and written an xattr are impacted by this change.
* If unsure, you can verify a pool's status of the `xattr_compat` feature flag. If the flag is in the active state, you are impacted by this change.
 
![ZFSFeatureFlagRemovalExample](/images/SCALE/ZFSFeatureFlagsRemovalExample5.png "Feature Flag Status") 
 
### How to resolve this if I am impacted

* Any pool that has had the feature active, must be backed up and restored into a pool created on a version of ZFS without the feature. For details on how to perform data protection procedures, please refer to the TrueNAS SCALE [Data Protection]({{< relref "/content/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) documentation.

### Technical details behind the change

See the [ZFS Feature Flags Removal article]({{< relref "SCALEZFSFlagRemoval.md" >}}) for more information.
{{< /expand >}}
