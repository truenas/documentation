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

This procedure addresses requirements for starting and configuring the target:

- **Starting configuration (TrueNAS 25.10)**
   - Pool A: HDD pool with a mirrored special vdev
   - Pool B: SSD pool for fast storage

- **Target configuration (TrueNAS 26 or later)**
   - Pool A: tiered pool with the SSDs from the former Pool B absorbed into the Pool A special vdev to provide **Performance Tier** capacity

{{< hint type=important title="Zvol Support" >}}
ZFS storage tiering does not support zvols! iSCSI, NVMeT, or Fibre Channel block protocols, which use zvols, might not benefit from tiering, and can experience reduced performance after changing pool topology according to this procedure.
{{< /hint >}}

{{< hint type=caution title="Disruptive Change" >}}
Migrating from a two-pool configuration to a single tiered pool is a significant and disruptive storage configuration change. Make sure you have everything you need in the preparation phase before continuing to the migration phase.
{{< /hint >}}

Have the following ready:
- List of shares and share types being moved
- List of backup tasks being moved
- New topology plan for the target pool (including new special vdev configuration)
- List of which datasets you need to migrated to the performance tier after the move, and the priority order
- Details and hierarchy of any encrypted datasets being moved, and the encryption key or passphrases to unlock them

The work is divided into three phases:

**Phase 1: Preparation** — split into two parts: a week before the maintenance window, and the day of.

**Phase 2: Migration** — the data and configuration move, followed by destroying Pool B to reuse the drives in Pool A.

**Phase 3: Tiering** — enable tiering and queue tier migration jobs to move priority datasets to the **Performance Tier**.

## Phase 1: Prepartion

Preparation is performed in two stages, one completed approximately one week before, and the other the day of the planned migration.

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

If you are using multi-layered ZFS encryption, [contact support](https://www.truenas.com/support/) before continuing.

{{< hint type=important title="Support Verification" >}}
[Contact support](https://www.truenas.com/support/) and verify the new configuration before continuing.
Note that all data formerly on the SSD pool initially has lower performance after pool migration until it is migrated from the regular tier to the performance tier.
TrueNAS queues tier migrations by dataset, so it is important that you maintain your priority order list of which datasets you need to migrated to the performance tier after the move. You cannot pre-stage them because the required pool topology does not exist until TrueNAS 26.
{{< /hint >}}

### Day of Migration

Complete these checks immediately before the beginning of migration work.

- Confirm that you have an uninterrupted 4-hour maintenance window and an escalation path to Support for the migration.
- Verify you have IPMI access to the system (or both controllers on HA systems) as well as SSH access.
- Download a [system configuration backup]({{< ref "/SCALE/systemsettings/advanced/managesysconfig/#downloading-the-file" >}}), including the secret seed.
- Download a [system debug]({{< ref "/SCALE/systemsettings/general/generalsettings/" >}}).
- [Ensure no client systems are connected to services shared by Pool B]({{< ref "/SCALE/datasets/datasetsscreens/#dataset-tree-table" >}}).
- Stop all sharing services exporting data from Pool B. Do not delete the share configuration!
- Stop all Pool B replication jobs that are not the local replication jobs you created for this migration. <br> Do not delete the job configuration!
- [Issue a final snapshot]({{< ref "/SCALE/datasets/snapshots/creatingsnapshots/" >}}) and local replication to ensure all data on Pool B is fully replicated to Pool A.
- Confirm the system dataset is still assigned to Pool A.
- Verify directory services are healthy (if applicable).
- Confirm that your reconfiguration plan has not changed.

If you are using multi-layered ZFS encryption, [contact support](https://www.truenas.com/support/) before continuing.

## Phase 2: Data and Configuration Migration

{{< include file="/static/includes/StorageTieringMigrationSequence.md" >}}

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

{{< hint type=caution title="Shares are locked to a single dataset" >}}
Once tiering is on, SMB shares and Webshares stop following nested datasets. Each share exposes only its own dataset, and any child datasets under it is no longer visible to clients through that share. Create a separate share for each dataset you want to expose.
{{< /hint >}}

### Migrate Performance Datasets

Go to **Datasets**, select a dataset in the tree view, then click **Change** next to the **Storage Tier** field in the **Details** card to migrate it to the **Performance Tier**.

Migrate the datasets according to the priority order list you created during the preparation phase.

{{< hint type=caution title="Avoid Unnecessary Administrative Failovers" >}}
Avoid unnecessary administrative failovers until all migrations are complete. In-progress tier migration jobs continue across failovers, but TrueNAS might not maintain queue ordering after service restarts or failovers.
{{< /hint >}}