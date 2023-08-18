---
title: "Adding Zvols"
description: "Describes how to create a Zvol on TrueNAS CORE."
weight: 19
aliases: /core/storage/pools/zvols/
tags:
- corezvol
- corestorage
---

{{< toc >}}

A ZFS Volume (Zvol) is a [dataset]({{< relref "/CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) that represents a block device.
These are needed when configuring an [iSCSI Share]({{< relref "/CORE/CORETutorials/Sharing/iSCSI/AddingiSCSIShare.md" >}}).

To create a zvol in a pool, go to **Storage > Pools** then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add Zvol*.

## Options

![StoragePoolsCreateZvol](/images/CORE/12.0/StoragePoolsCreateZvol.png "Creating a new Zvol")

To quickly create a Zvol with the default options, enter a name for the Zvol, a size, and click **SAVE**.

See [Zvols Screen]({{< relref "/CORE/UIReference/Storage/Pools/ZvolsScreen.md" >}}) for more information on zvol settings.

### Setting Zvol Block Sizes

To set the zvol block size, click **ADVANCED OPTIONS** on the **ADD ZVOL** screen. This adds the **Block Size** setting near the bottom of the screen.
Select that option that suits the use case or uses the information below to help determine the correct setting to use.

{{< expand "Optimal Zvol Block Sizes" "v" >}}

TrueNAS automatically recommends a space-efficient block size for new zvols. This table shows the minimum recommended volume block size values. To manually change this value, use the **Block size** dropdown list.

{{< truetable >}}
| Configuration | Number of Drives | Optimal Block Size | 
|---------------|------------------|--------------------|
| Mirror | N/A | 16k |
| Raidz-1 | 3 | 16k |
| Raidz-1 | 4/5 | 32k |
| Raidz-1 | 6/7/8/9 | 64k |
| Raidz-1 | 10+ | 128k |
| Raidz-2 | 4 | 16k |
| Raidz-2 | 5/6 | 32k |
| Raidz-2 | 7/8/9/10 | 64k |
| Raidz-2 | 11+ | 128k |
| Raidz-3 | 5 | 16k |
| Raidz-3 | 6/7 | 32k |
| Raidz-3 | 8/9/10/11 | 64k |
| Raidz-3 | 12+ | 128k |
{{< /truetable >}}

Additional tuning might be required for optimal performance, depending on the workload. iXsystems engineers are available to assist [Enterprise](https://www.truenas.com/truenas-enterprise/) customers with tuning their TrueNAS hardware. The [workload tuning chapter](https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html) of the OpenZFS handbook is also a good resource.

{{< /expand >}}

## Managing Zvols

To see options for an existing zvol, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the desired zvol in **Storage** > **Pools**:

Use **Delete zvol** to remove the zvol from TrueNAS.
{{< hint type=warning >}}
Deleting zvols can result in unrecoverable data loss!
Be sure that any critical data is moved off the zvol or is otherwise obsolete.
{{< /hint >}}
Deleting a zvol also deletes all snapshots of that zvol.
Use **Edit Zvol** to open the zvol creation form to change the previously saved settings.
Similar to datasets, a zvol name cannot be changed.
Use **Create Snapshot** to take a single current-point-in-time image of the zvol and save it to **Storage > Snapshots**.
A snapshot name is suggested in **Name** along with an extra option to make the snapshot **Recursive** is available.

When the selected zvol is cloned from an existing [snapshot]({{< relref "/CORE/CORETutorials/Storage/Snapshots.md" >}}), **Promote Dataset** is available.
When a clone is promoted, the original volume becomes a clone of the clone, making it possible to delete the volume that the clone was created from.
Otherwise, a clone cannot be deleted while the original volume exists.

When the zvol is created with [encryption]({{< relref "/CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}) enabled, additional **Encryption Actions** are displayed.

{{< taglist tag="corestorage" limit="10" title="Related Storage Articles" >}}
