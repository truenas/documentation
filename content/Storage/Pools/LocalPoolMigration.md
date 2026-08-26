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

This tutorial covers migrating data and configuration from one local pool to another on a TrueNAS storage appliance.
Migrating is helpful if, for example, when you have two local pools (Pool A and Pool B) and want to consolidate them by moving data and shares from Pool B to Pool A.
You can then destroy Pool B and repurpose its drives.

{{< hint type=caution title="Disruptive Change" >}}
Local pool migration is a significant and disruptive storage configuration change. Make sure you have everything you need as discussed in the preparation phase before continuing to the migration phase.
{{< /hint >}}

Have the following ready:
- List of shares and share types being moved
- List of backup tasks being moved
- New topology for the target pool (if vdev changes are planned for Pool A)
- Details and hierarchy of any encrypted datasets being moved, and the encryption key or passphrases to unlock them
- Plan for reusing the drives freed from Pool B (for example, extending Pool A or creating new pools)

The work is divided into two phases:

**Phase 1: Preparation** — split into two parts: one performed a week before the maintenance window, and the other the day of.

**Phase 2: Migration** — the actual data and configuration move, followed by destroying Pool B.

{{< hint type=tip title="ZFS Storage Tiering" >}}
If the post-migration goal is to consolidate Pool B drives into Pool A as part of enabling [Storage Tiering]({{< ref "/Storage/StorageTiering" >}}), follow the [Storage Tiering Migration Guide]({{< ref "/Storage/Pools/StorageTieringPoolMigration" >}}) instead. That procedure adds tiering-specific preparation items, a topology change to the Pool A special class, and a third phase covering tier migration jobs.
{{< /hint >}}

## Phase 1: Preparation

Preparation is performed in two stages, one completed approximately one week before, and the other the day of the planned migration.

### One Week Before Migration

Complete these tasks approximately one week before the scheduled maintenance window. Use this time to identify issues and reduce risks during the maintenance window.

- Confirm the system (or both controllers on Enterprise HA systems) is on a supported, stable TrueNAS version.
- Confirm that Pool A has sufficient space to hold the data from Pool B.
- [Move the system dataset]({{< ref "/SystemSettings/Advanced/AdvancedSettings.md#managing-the-system-dataset" >}}) to Pool A if it is not located there already.
- [Configure local replication tasks]({{< ref "/DataProtection/Replication/LocalReplication" >}}) for data from Pool B to Pool A. Ensure your Pool B dataset hierarchy is set up to avoid name collisions with existing datasets in Pool A.
- Be prepared to reconfigure local storage paths after they change pools.
- [Reconfigure apps](https://apps.truenas.com/managing-apps/managing-installed-apps/#migrating-existing-applications), [containers]({{< ref "/Containers/ManagingContainers" >}}), and [VMs]({{< ref "/virtualmachines/addmanagevmdevices/" >}}) to use Pool A.
- Move local user account home directories from Pool B to Pool A.
- Schedule and confirm an uninterrupted 4-hour maintenance window for the migration.

If you are using multi-layered ZFS encryption, [contact support](https://www.truenas.com/support/) before continuing.

### Day of Migration

Complete these checks immediately before beginning migration work.

- Confirm that you have an uninterrupted 4-hour maintenance window for the migration.
- Verify you have OOBM/IPMI access to the system (or both controllers on HA systems) as well as SSH access, and the admin user has full control permissions with `sudo` command permissions.
- Download a [system configuration fle as a backup]({{< ref "/systemsettings/advanced/managesysconfig/#downloading-the-file" >}}), including the secret seed.**
- Download a [system debug]({{< ref "/systemsettings/general/generalsettings/" >}}).
- [Ensure no client systems are connected to services shared by Pool B]({{< ref "/datasets/datasetsscreens/#dataset-tree-table" >}}).
- Stop all sharing services exporting data from Pool B. Do not delete the share configuration!
- Stop all Pool B replication jobs that are not the local replication jobs you created for this migration. <br> Do not delete the job configuration!
- [Take a final snapshot]({{< ref "/datasets/snapshots/creatingsnapshots/" >}}) and run local replication to ensure all data on Pool B is fully replicated to Pool A.
- Confirm the system dataset is still assigned to Pool A.
- Verify directory services are healthy (if applicable).

## Phase 2: Data and Configuration Migration

Migration can take four hours or more to complete depending on the amount of data in the dataset. Make sure you have ample time to complete this process before beginning the migration process.

### Migration Sequence

{{< include file="/static/includes/StorageTieringMigrationSequence.md" >}}

You can now reuse the drives freed from Pool B for your new use case (extending Pool A, creating new pools, [creating a fusion pool for storage tiering]({{< ref "/Storage/Pools/CreatingFusionPools" >}}), etc.).

{{< hint type=caution title="Pool Topology" >}}
Any topology changes you make to Pool A (such as adding vdevs) are permanent. Thoroughly review the all new topology changes before applying them.
{{< /hint >}}
