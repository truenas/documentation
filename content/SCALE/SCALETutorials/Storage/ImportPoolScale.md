---
title: "Import Pool"
description: "Provides information on ZFS importing for storage pools in TrueNAS SCALE. It also addresses GELI-encrypted pools."
weight: 10
aliases:
 - /scale/scaletutorials/storage/datasets/importpoolscale/
 - /scale/scaletutorials/storage/datasets/importingdata/
 - /scale/scaleuireference/storage/datasets/importdatascreenscale/
 - /scale/scaletutorials/storage/pools/importpoolscale/
tags:
 - install
 - disks
 - pools
 - migrate
---

ZFS pool importing works for pools that are exported or disconnected from the current system, those created on another system, and for pools you reconnect after reinstalling or upgrading the TrueNAS system.

{{< hint type=note >}}
The import procedure only applies to disks with a ZFS storage pool.
{{< /hint >}}

{{< expand "Do I need to do anything different with disks installed on a different system?" "v" >}}
When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in the Linux command line or a web interface equivalent to export the pool on that system.
Shut down that system and move the drives to the TrueNAS system.
Shutting down the original system prevents an **in use by another machine** error during the TrueNAS import.
{{< /expand >}}

To import a pool, go to the **Storage Dashboard** and click **Import Pool** at the top of the screen.

TrueNAS detects the pools that are present but not connected and adds them to the **Pools** dropdown list.

{{< trueimage src="/images/SCALE/Storage/ImportPoolScreen.png" alt="Import Pool Screen" id="Import Pool Screen" >}}

Select a pool from the **Pool** dropdown list, then click **Import**.

{{< expand "Can I import GELI-encrypted pools?" "v" >}}
GELI encryption is specific to FreeBSD so TrueNAS SCALE cannot import GELI-encrypted pools. 
See the **GELI Pool Migrations** section in the CORE [Storage Encryption](https://www.truenas.com/docs/core/coretutorials/storage/pools/storageencryption/#geli-pool-migrations) article.

The [Preparing to Migrate]({{< relref "MigratePrep.md" >}}) article provides information on what you can and cannot migrate and a checklist of actions to take before migrating from CORE with GELI-encrypted pools to SCALE.
{{< /expand >}}
