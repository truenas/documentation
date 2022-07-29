---
title: "Importing Pools"
description: "This article provides instructions on importing storage pools into TrueNAS SCALE. Use importing pools to migrate your storage pools from one server to another."
weight: 48
aliases: 
tag: 
 - scalepools
 - scalestorage
---


{{< hint info >}}
The import procedure only applies to disks with a ZFS storage pool.
To import disks with different file systems, see the SCALE Disks article.
{{< /hint >}}

ZFS pool importing works for pools exported or disconnected from the current system, created on another system, and pools reconnected after reinstalling or upgrading the TrueNAS system.

{{< expand "Do I need to do anything different with disks installed on a different system?" "v" >}}
When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in a command-line shell or equivalent web interface to export the pool on that system.
Shut that system down and move the drives to the TrueNAS system.
Shutting down the original system prevents an *in use by another machine* error during the TrueNAS import.
{{< /expand >}}

## Importing a Pool

To import a pool, go to **Storage** and click **Import**.

TrueNAS detects any pools that are present but unconnected.

Select a pool from the **Pool** dropdown options and click **Next**.

![ImportPool1SCALE](/images/SCALE/ImportPool1SCALE.png "Import Pool Selection")

Review the **Pool Import Summary** on the **Confirm Options** screen and click **Import**.

![ImportPool2SCALE](/images/SCALE/ImportPool2SCALE.png "Import Pool Selection")

{{< expand "Can I import GELI-encrypted pools?" "v" >}}
Since GELI encryption is specific to FreeBSD, TrueNAS SCALE cannot import GELI-encrypted pools. 
See the **Migrating GELI-encrypted Pools to SCALE** section in the [Installing SCALE]({{< relref "/SCALE/GettingStarted/InstallingSCALE.md" >}}) article.
{{< /expand >}}

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}