---
title: "Storage Tiering Pool Migration"
description: "Provides information on migrating data and configuration from one local pool to another on a TrueNAS storage appliance."
weight: 60 
aliases:
tags:
- pools
- storage
- tiering
doctype: tutorial
---

{{< enterprise >}}
Storage Tiering is only available on TrueNAS Enterprise systems.
{{< /enterprise >}}

## Overview

This tutorial covers using the ZFS storage tiering feature introduced in TrueNAS 26 to migrate a TrueNAS Enterprise storage appliance from a two-pool configuration (for example, an HDD pool with a mirrored special vdev and a separate SSD pool) to a single tiered pool.

{{< hint type=note title="Local Pool Migration" >}}
If your goal is to migrate data between two local pools without enabling storage tiering, follow the [Local Pool Migration Guide]({{< ref "/SCALE/Storage/Pools/LocalPoolMigration.md" >}}) instead.
{{< /hint >}}

This procedure addresses the following starting and target configurations:

- **Starting configuration (TrueNAS 25.10)**
   - Pool A: HDD pool with a mirrored special vdev
   - Pool B: SSD pool for fast storage

- **Target configuration (TrueNAS 26 or later)**
   - Pool A: tiered pool with the SSDs from the former Pool B absorbed into the Pool A special vdev to provide **Performance Tier** capacity

{{< hint type=important title="Zvol Support" >}}
ZFS storage tiering **does not support zvols**. If you are using iSCSI, NVMeT, or Fibre Channel block protocols (which use zvols), you might not benefit from tiering, and may experience reduced performance after changing pool topology according to this procedure.
{{< /hint >}}

Migrating from a two-pool configuration to a single tiered pool is a significant and disruptive storage configuration change. Make sure you have everything you need in the preparation phase before continuing to the migration phase.

- List of shares and share types being moved
- List of backup tasks being moved
- New topology plan for the target pool (including new special vdev configuration)
- List of which datasets you need to migrated to the **Performance Tier** after the move, and the priority order.
- Details and hierarchy of any encrypted datasets being moved

The work is divided into three phases:

**Phase 1: Preparation** — split into two parts: a week before the maintenance window, and the day of.

**Phase 2: Migration** — the data and configuration move, followed by destroying Pool B to reuse the drives in Pool A.

**Phase 3: Tiering** — enable tiering and queue tier migration jobs to move priority datasets to the **Performance Tier**.



## Phase 1: Preflight

### One Week Before Migration

Complete these tasks approximately one week before the scheduled maintenance window. Use this time to identify issues and reduce risks during the maintenance window.

- Upgrade the system (or both controllers on HA systems) to TrueNAS 26.
- Confirm that Pool A has sufficient space to hold the data from Pool B.
- [Contact support](https://www.truenas.com/support/) to acquire a new license for TrueNAS 26 with the ZFS Storage Tiering feature is included.
- [Move the system dataset]({{< ref "/SCALE/SystemSettings/Advanced/AdvancedSettings.md#managing-the-system-dataset" >}}) to Pool A if it is not located there already.
- [Configure local replication tasks]({{< ref "/SCALE/DataProtection/Replication/LocalReplication" >}}) for data from Pool B to Pool A. Ensure your Pool B dataset hierarchy is set up to avoid name collisions with existing datasets in Pool A.
- Be prepared to reconfiguration local storage paths after they change pools.
- [Reconfigure apps](https://apps.truenas.com/managing-apps/managing-installed-apps/#migrating-existing-applications), [containers]({{< ref "/SCALE/Containers/ManagingContainers" >}}), and [VMs]({{< ref "/SCALE/virtualmachines/addmanagevmdevices/" >}}) to use Pool A.
- Move local user account home directories from Pool B to Pool A.
- Verify the **Storage > Tiering** form is available in the WebUI, and that the **Enable** checkbox is present and unchecked.
- Schedule and confirm an uninterrupted 4-hour maintenance window for the migration.
- If you are using multi-layered ZFS encryption, [contact support](https://www.truenas.com/support/) before continuing.

{{< hint type=important title="Support Verification" >}}
[Contact support](https://www.truenas.com/support/) and verify the new configuration before continuing. Note that all data formerly on the SSD pool will initially have lower performance after pool migration until it is migrated from the **Regular Tier** to the **Performance Tier**. TrueNAS queues tier migrations by dataset, so it is important that you maintain your priority order list of which datasets you need to migrated to the **Performance Tier** after the move. You cannot pre-stage them because the required pool topology does not exist until TrueNAS 26.
{{< /hint >}}



### Day of Migration

Complete these checks immediately before migration work begins.

- Confirm that you have an uninterrupted 4-hour maintenance window and an escalation path to Support for the migration.
- Verify you have IPMI access to the system (or both controllers on HA systems) as well as SSH access.
- Download a [system configuration backup]({{< ref "/SCALE/systemsettings/advanced/managesysconfig/#downloading-the-file" >}}), including the secret seed.**
- Download a [system debug]({{< ref "/SCALE/systemsettings/general/generalsettings/" >}}).
- [Ensure no client systems are connected to services shared by Pool B]({{< ref "/SCALE/datasets/datasetsscreens/#dataset-tree-table" >}}).
- Stop all sharing services exporting data from Pool B. **Do not delete the share configuration.**
- Stop all Pool B replication jobs that are not the local replication jobs you created for this migration. <br> **Do not delete the job configuration.**
- [Issue a final snapshot]({{< ref "/SCALE/datasets/snapshots/creatingsnapshots/" >}}) and local replication to ensure all data on Pool B is fully replicated to Pool A.
- Confirm the system dataset is still assigned to Pool A.
- Verify directory services are healthy (if applicable).
- Confirm that your reconfiguration plan has not changed.
- If you are using multi-layered ZFS encryption, [contact support](https://www.truenas.com/support/) before continuing.

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

7. Use the freed SSD drives to [extend the special class on Pool A]({{< ref "/SCALE/storage/pools/managepools/#expanding-a-pool" >}}) according to your reconfiguration plan by adding vdevs of the required type to the special class.

{{< hint type=caution title="Pool Topology" >}}
Any topology changes you make to Pool A (such as adding vdevs) are permanent. Thouroughly review the all new topology changes before applying them.
{{< /hint >}}



## Phase 3: Tiering Configuration

After completing the migration and extending the special class with the SSD drives, you can enable storage tiering and queue datasets for **Performance Tier** migrations.

### Enable Tiering

Go to **Storage** and click **Tiering**.

{{< trueimage src="/images/SCALE/Storage/TieringScreen.png" alt="Tiering Screen" id="Tiering Screen" >}}

Enter your desired values for [**Max Concurrent Jobs** and **Max Used Percentage**]({{< ref "/SCALE/Storage/StorageDashboardScreens" >}}). Each dataset migration to the **Performance Tier** consumes one tier job. The default is two active dataset migrations at a time, with the remainder queued. Select **Enable** and click **Save**

{{< hint type=caution title="Shares will be locked to a single dataset" >}}
Once tiering is on, SMB shares and Webshares stop following nested datasets. Each share will expose only its own dataset, and any child datasets under it will no longer be visible to clients through that share. Create a separate share for each dataset you want to expose.
{{< /hint >}}

### Migrate Performance Datasets

Go to **Datasets**, select a dataset in the tree view, then click **Change** next to the **Storage Tier** field in the **Details** card to migrate it to the **Performance Tier**.

Migrate the datasets according to the priority order list you created during the preflight phase.

{{< hint type=caution title="Avoid Unnecessary Administrative Failovers" >}}
Avoid unnecessary administrative failovers until all migrations are complete. In-progress tier migration jobs continue across failovers, but TrueNAS might not maintain queue ordering after service restarts or failovers.
{{< /hint >}}