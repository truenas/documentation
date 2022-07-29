---
title: "Storage Screens"
description: "This article provides information on the **Storage** screen and options for pools, datasets or zvols listed on this screen."
weight: 30 
tags:
- scalestorage
---


The **Storage** screen displays a list of all the pools and datasets or zvols configured in your TrueNAS. If the system does not have any pools, it displays the **Create Pool** button in the center of the screen.

![StorageScreenCreateFirstPool](/images/SCALE/22.02/StorageScreenCreateFirstPool.png "Storage Screen Create Pool")

After creating pools, datasets and zvols, the screen lists each and provides status of the pool.

![StorageScreen](/images/SCALE/22.02/StorageScreen.png "SCALE Storage Screen with Pools")

The **Storage** screen provides access disk, snapshots, and the pool import or creation wizard screens from the buttons and dropdown lists at the top right of the **Storage** screen.

Use **Import** to open the **Import Pool** wizard where users reconnect pools exported/disconnected from the current system or created on another system. Import also reconnects pools after users reinstall or upgrade their TrueNAS system.

Use **Create Pool** to open the **Pool Manager** screen where you crate a ZFS data storage pool with physical disks to effectively store and protect data.

Use the **Snapshots** dropdown to open either the **Snapshots** or **VMware-Snapshots** screen. Snapshots create read-only point-in-time copies of a file system, volume or a running virtual machine. 

Use the **Disk** dropdown to open either the **Disks** or **Import Disks** screen. The **Disks** screen lets users manage, wipe, and import storage disks that TrueNAS uses for ZFS storage.

The storage pool displays in a header row that includes the status as online, offline, or degraded and includes a color-coded symbol that corresponds to the state of the pool. 

![PoolStatusOnlineOrDegraded](/images/SCALE/22.02/PoolStatusOnlineOrDegraded.png "Pool Status Indications")

This same information displays on both the **Storage** widget and a pool widget you can add to the **Dashboard**. 
The pool header includes the **Pool Operations** <span class="iconify" data-icon="mdi:database-cog"></span> icon that displays the **Pool Actions** dropdown list of options you can use for storage pools.

## Pool Actions List

Click the <span class="iconify" data-icon="mdi:database-cog"></span> icon button for the pool to display the **Pool Actions** dropdown list. The options are **Pool Options**, **Export/Disconnect**, **Add Vdevs**, **Scrub Pool**, **Status** and **Expand Pool**. See [Pools Screens]({{< relref "/SCALEUIReference/Pools/PoolsScreens.md" >}}) for more information on the UI screens, dialogs and windows.

## Dataset Actions List

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset to display the **Dataset Actions** dropdown list. The options are **Add Dataset**, **Add Zvol**, **Edit Options**, **View Permissions**, **User Quotas**, **Group Quotas** and **Create Snapshot**. See [Datasets Screens]({{< relref "/SCALEUIReference/Pools/DatasetsScreensScale.md" >}}) for more information on the UI screens, dialogs and windows.

## Zvol Actions List
Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset to display the **Zvol Actions** dropdown list. The options for the selected zvol are **Delete Zvol**, **Edit Zvol** and **Create Snapshot**. See [Zvols Screens]({{< relref "/SCALEUIReference/Pools/ZvolsScreensScale.md" >}}) for more information on the UI screens, dialogs and windows.

## Encryption Options
If you use encryption when you create a pool, the root and child datasets or zvols have the option to inherit the encryption, modify the type of encryption, or not use encryption at all. For more information see [Storage Encryption]({{< relref "SCALETutorials/Storage/Pools/EncryptionScale.md" >}}).

If encryption is enabled, the **Dataset Actions** and **Zvol Actions** option lists include the **Encryption Options** list item used to configure encryption settings for that dataset or zvol.

{{< taglist tag="scalestorage" limit="10" >}}