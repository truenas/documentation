---
title: "Importing Storage Pools"
description: "This article provides information on ZFS importing for storage pools in TrueNAS SCALE. It also addresses GELI-encrypted pools."
weight: 46
tags:
- scaleinstall
- scalestorage
- scalepools
- scalemigrate
---

{{< toc >}}

ZFS pool importing works for pools that are exported or disconnected from the current system, those created on another system, and for pools you reconnect after reinstalling or upgrading the TrueNAS system.

{{< hint info >}}
The import procedure only applies to disks with a ZFS storage pool.
To import disks with different file systems, see the SCALE [Managing Disks]({{< relref "ManagingDisks.md" >}}) article.
{{< /hint >}}

{{< expand "Do I need to do anything different with disks installed on a different system?" "v" >}}
When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in the command line or a web interface equivalent to export the pool on that system.
Shut that system down and move the drives to the TrueNAS system.
Shutting down the original system prevents an **in use by another machine** error during the TrueNAS import.
{{< /expand >}}

To import a pool, go to the **Storage Dashboard** and click **Import Pool** at the top of the screen to open the **Import Pool** screen.

TrueNAS detects any pools that are present but unconnected and adds them to the **Pools** dropdown list.

![ImportPoolScreen](/images/SCALE/22.12/ImportPoolScreen.png "Import Pool Screen") 

Select a pool from the **Pool** dropdown list and click **Import**.

{{< expand "Can I import GELI-encrypted pools?" "v" >}}
Since GELI encryption is specific to FreeBSD, TrueNAS SCALE cannot import GELI-encrypted pools. 
See the **Migrating GELI-encrypted Pools to SCALE** section in the [Installing SCALE]({{< relref "SCALE/GettingStarted/Install/InstallingSCALE.md" >}}) article.
{{< /expand >}}

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}