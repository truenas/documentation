---
title: "Local Pool Migration"
description: "Provides information on migrating data and configuration from one local pool to another on a TrueNAS storage appliance."
weight: 50 
aliases:
tags:
- pools
- storage
- storage provisioning
doctype: tutorial
---

## Overview

This tutorial covers migrating data and configuration from one local pool to another on a TrueNAS storage appliance. This is helpful if, for example, you have two local pools (Pool A and Pool B) and want to consolidate by moving data and shares from Pool B to Pool A. You then destroy Pool B and repurpose its drives.

{{< hint type=caution title="Disruptive Change" >}}
Local pool migration is a significant and disruptive storage configuration change. Make sure you have everything you need in the preparation phase before continuing to the migration phase.
{{< /hint >}}

- List of shares and share types being moved
- List of backup tasks being moved
- New topology for the target pool (if vdev changes are planned for Pool A)
- Details and hierarchy of any encrypted datasets being moved
- Plan for reusing the drives freed from Pool B (for example, extending Pool A or creating new pools)

The work is divided into two phases:

**Phase 1: Preparation** — split into two parts: a week before the maintenance window, and the day of.

**Phase 2: Migration** — the actual data and configuration move, followed by destroying Pool B.

{{< hint type=tip title="ZFS Storage Tiering" >}}
If the post-migration goal is to consolidate Pool B drives into Pool A as part of enabling [Storage Tiering]({{< ref "/SCALE/Storage/StorageTiering" >}}), follow the [Storage Tiering Migration Guide]({{< ref "/SCALE/Storage/Pools/StorageTieringPoolMigration" >}})  instead. That procedure adds tiering-specific preflight items, a topology change to the Pool A special class, and a third phase covering tier migration jobs.
{{< /hint >}}

## Phase 1: Preflight

### One Week Before Migration

Complete these tasks approximately one week before the scheduled maintenance window. Use this time to identify issues and reduce risks during the maintenance window.

- Confirm the system (or both controllers on enterprise HA systems) is on a supported, stable TrueNAS version.
- Confirm that Pool A has sufficient space to hold the data from Pool B.
- [Move the system dataset]({{< ref "/SCALE/SystemSettings/Advanced/AdvancedSettings.md#managing-the-system-dataset" >}}) to Pool A if it is not located there already.
- [Configure local replication tasks]({{< ref "/SCALE/DataProtection/Replication/LocalReplication" >}}) for data from Pool B to Pool A. Ensure your Pool B dataset hierarchy is set up to avoid name collisions with existing datasets in Pool A.
- Be prepared to reconfiguration local storage paths after they change pools.
- [Reconfigure apps](https://apps.truenas.com/managing-apps/managing-installed-apps/#migrating-existing-applications), [containers]({{< ref "/SCALE/Containers/ManagingContainers" >}}), and [VMs]({{< ref "/SCALE/virtualmachines/addmanagevmdevices/" >}}) to use Pool A.
- Move local user account home directories from Pool B to Pool A.
- Schedule and confirm an uninterrupted 4-hour maintenance window for the migration.
- If you are using multi-layered ZFS encryption, [contact support](https://www.truenas.com/support/) before continuing.

### Day of Migration

Complete these checks immediately before the migration work begins.

- Confirm that you have an uninterrupted 4-hour maintenance window for the migration.
- Verify you have OOBM/IPMI access to the system (or both controllers on HA systems) as well as SSH access.
- Download a [system configuration backup]({{< ref "/SCALE/systemsettings/advanced/managesysconfig/#downloading-the-file" >}}), including the secret seed.**
- Download a [system debug]({{< ref "/SCALE/systemsettings/general/generalsettings/" >}}).
- Ensure no client systems are connected to services shared by Pool B.
- Stop all sharing services exporting data from Pool B. **Do not delete the share configuration.**
- Stop all Pool B replication jobs that are not the local replication jobs you created for this migration. <br> **Do not delete the job configuration.**
- [Issue a final snapshot]({{< ref "/SCALE/datasets/snapshots/creatingsnapshots/" >}}) and local replication to ensure all data on Pool B is fully replicated to Pool A.
- Confirm the system dataset is still assigned to Pool A.
- Verify directory services are healthy (if applicable).

## Phase 2: Data and Configuration Migration


### Migration Sequence

1. Review all shares using storage on Pool B and follow the share migration steps for each share.
2. Reload the **Datasets** page in the WebUI and confirm no datasets in Pool B show sharing icons. Open the **Sharing** page and confirm all share paths now point to Pool A.

   {{< expand "SMB Share Migration" "v" >}}
   #### SMB Share Migration

   {{< hint type=warning title="SMB Share Configurations and ACLs" >}}
   You can configure SMB shares to share a subdirectory inside a dataset rather than the root of the dataset.
   Do not delete and re-add SMB shares. Doing so removes the existing share ACL and replaces it with an open ACL, even if you maintain the exact the share settings in the UI.
   {{< /hint >}}

   Go to **Shares > Windows (SMB) Shares** and identify every share associated with Pool B. Note the SMB share ACL (not the filesystem ACL).

   Click <span class="material-icons">more_vert</span> to the right of the share and click **Edit**. Change the share **Path** from the dataset on Pool B to the same dataset on Pool A. Be sure to maintain any subdirectory path export. For example: */mnt/Pool B/share/subdir* changes to */mnt/Pool A/share/subdir*.

   After changing and saving the path, view the SMB share ACL and verify it is identical to the starting you noted before the change configuration.
   {{< /expand >}}


   {{< expand "NFS Share Migration" "v" >}}
   #### NFS Share Migration

   {{< hint type=warning title="NFS Share Configurations" >}}
   You can configure NFS shares to share a subdirectory inside a dataset rather than the root of the dataset.
   {{< /hint >}}

   Go to **Shares > UNIX (NFS) Shares** and identify every share associated with Pool B.

   Click <span class="material-icons">more_vert</span> to the right of the share and click **Edit**. Change the share **Path** from the dataset on Pool B to the same dataset on Pool A. Be sure to maintain any subdirectory path export. For example: */mnt/Pool B/share/subdir* changes to */mnt/Pool A/share/subdir*.
   {{< /expand >}}


   {{< expand "iSCSI / NVMeT / FC Migration Migration" "v" >}}
   ### iSCSI / NVMeT / FC Migration

   {{< hint type=warning title="Preserve Extents" >}}
   Edit the existing extent entries. Do not destroy and recreate extents.
   {{< /hint >}}

   Go to **Shares > Block (iSCSI) Shares Targets** and select the **Extents** tab. Find the extent you want to change, then click <span class="material-icons">more_vert</span> to the right of the extent and select **Edit**. Change the Device **Path** from the zvol/file on Pool B to the same zvol/file on Pool A.
   {{< /expand >}}

3. Review all backup-related tasks on Pool B and follow the task migration steps for each item.
4. Reload the **Datasets** page and confirm no stray backup tasks remain on Pool B. Open the **Data Protection** page and confirm no data protection tasks are active for Pool B.

   {{< expand "TrueCloud Backup Tasks Migration" "v" >}}
   ### TrueCloud Backup Tasks Migration
   {{< hint type=warning title="Remote Storage Consumption" >}}
   Depending on the TrueCloud service configuration (for example, if absolute paths are used), remote storage consumption may increase significantly after a path change. If you are using absolute paths, you might need to monitor space usage and clean up old backups from the previous pool.
   {{< /hint >}}
   Go to **Data Protection > TrueCloud Backup Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the **Local** **Source Path** (and **Cache Path** if needed) to the new target on Pool A and click **Save**.
   {{< /expand >}}


   {{< expand "Periodic Snapshot Tasks Migration" "v" >}}
   ### Periodic Snapshot Tasks Migration
   Go to **Data Protection > Periodic Snapshot Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the dataset to the new target on Pool A. For example: *Pool B/share* changes to *Pool A/share*.
   {{< /expand >}}


   {{< expand "Replication Tasks Migration" "v" >}}
   ### Replication Tasks Migration
   Go to **Data Protection > Replication Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   The configuration change depends on the direction of replication:
   - For tasks originating **On this System**, change the **Source** to the equivalent Pool A dataset.
   - For tasks originating **On a Different System**, change the **Destination** to the equivalent Pool A dataset.
   {{< /expand >}}


   {{< expand "Cloudsync Tasks Migration" "v" >}}
   ### Cloudsync Tasks Migration
   Go to **Data Protection > Cloud Sync Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the **Directory/Files** path to the new target on Pool A.
   {{< /expand >}}


   {{< expand "Rsync Tasks Migration" "v" >}}
   ### Rsync Tasks Migration
   Go to **Data Protection > Rsync Tasks** and click <span class="material-icons">expand_more</span> expand to the right of the task you need to change, then click **Edit**.
   Change the **Local Path** to the new location on Pool A.
   {{< /expand >}}

5. Review [local user account home directories]({{< ref "/SCALE/credentials/users/manageusers/#expand-6" >}}) to confirm no accounts are using paths on Pool B.

{{< hint type=danger title="Critical Checkpoint" >}}
At this point, you have reconfigured the server so that all shares, tasks, and user home directories are on Pool A. However, you can still revert all changes [using the configuration file]({{< ref "/SCALE/systemsettings/advanced/managesysconfig/#uploading-the-file" >}}) you previously saved. Before proceeding, verify all data is accessible via test clients at the new Pool A paths.

For replicated datasets and zvols, you may need to change them to read-write before the customer can validate access.
{{< /hint >}}

6. Destroy Pool B from the WebUI. Go to **Storage** and click **Disconnect** on Pool B. Select **Delete Pool**. then confirm the export and click **Disconnect**. 

You can now reuse the drives freed from Pool B for your new use case (extending Pool A, creating new pools, etc.).

{{< hint type=caution title="Pool Topology" >}}
Any topology changes you make to Pool A (such as adding vdevs) are permanent. Thouroughly review the all new topology changes before applying them.
{{< /hint >}}