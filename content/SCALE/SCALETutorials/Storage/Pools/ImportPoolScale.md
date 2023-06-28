---
title: "Importing a Pool"
description: "Provides information on ZFS importing for storage pools in TrueNAS SCALE. It also addresses GELI-encrypted pools."
weight: 25
aliases:
- /scale/scaletutorials/storage/datasets/importpoolscale/
tags:
- scaleinstall
- scaledisks
- scaleimport
- scalepools
- scalemigrate
---

{{< toc >}}

ZFS pool importing works for pools that are exported or disconnected from the current system, those created on another system, and for pools you reconnect after reinstalling or upgrading the TrueNAS system.

{{< hint type=note >}}
The import procedure only applies to disks with a ZFS storage pool.
To import disks with different file systems, see the SCALE [Managing Disks]({{< relref "ManagingDisks.md" >}}) article.
{{< /hint >}}

{{< expand "Do I need to do anything different with disks installed on a different system?" "v" >}}
When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in the Linux command line or a web interface equivalent to export the pool on that system.
Shut that system down and move the drives to the TrueNAS system.
Shutting down the original system prevents an **in use by another machine** error during the TrueNAS import.
{{< /expand >}}

To import a pool, go to the **Storage Dashboard** and click **Import Pool** at the top of the screen.

TrueNAS detects the pools that are present but unconnected and adds them to the **Pools** dropdown list.

{{< trueimage src="/images/SCALE/22.12/ImportPoolScreen.png" alt="Import Pool Screen" id="1: Import Pool Screen" >}}

Select a pool from the **Pool** dropdown list, then click **Import**.

{{< expand "Can I import GELI-encrypted pools?" "v" >}}
Since GELI encryption is specific to FreeBSD, TrueNAS SCALE cannot import GELI-encrypted pools. 
See the **Migrating GELI-encrypted Pools to SCALE** section in the [Installing SCALE]({{< relref "SCALE/GettingStarted/Install/InstallingSCALE.md" >}}) article.
{{< /expand >}}

{{< taglist tag="scaleimport" limit="10" title="Related Import Articles" >}}
{{< taglist tag="scalepools" limit="10" title="Related Pools Articles" >}}
