---
title: "Storage Screens"
description: "This article provides information on the **Storage** screen and options for pools, datasets or zvols listed on this screen."
weight: 55 
tags:
- scalepools
- scalestorage
---


The **Storage** screen displays a list of all the pools and datasets or zvols configured in your TrueNAS. If the system does not have any pools, it displays the **Create Pool** button in the center of the screen.

![StorageScreenCreateFirstPool](/images/SCALE/22.02/StorageScreenCreateFirstPool.png "SStorage Screen Create Pool")

After creating pools, datasets and zvols, the screen lists each and provides status of the pool.

![StorageScreen](/images/SCALE/22.02/StorageScreen.png "SCALE Storage Screen with Pools")

The **Storage** screen provides access disk, snapshots, and the pool import or creation wizard screens from the buttons and dropdown lists at the top right of the **Storage** screen.

Use **Import** to open the **Import Pool** wizard where users reconnect pools exported/disconnected from the current system or created on another system. Import also reconnects pools after users reinstall or upgrade their TrueNAS system.

Use **Create Pool** to open the **Pool Manager** screen where you cratea  ZFS data storage pool with physical disks to effectively store and protect data.

Use the **Snapshots** dropdown to open either the **Snapshots** or **VMware-Snapshots** screen. Snapshots create read-only point-in-time copies of a file system, volume or a running virtual machine. 

Use the **Disk** dropdown to open either the **Disks** or **Import Disks** screen. The **Disks** screen lts users manage, wipe, and import storage disks that TrueNAS ues for ZFS storage.

The storage pool displays in a header row that includes the status as online, offline, or degraged and includes a color-coded symbol that corresponds to the state of the pool. 

![PoolStatusOnlineOrDegraded](/images/SCALE/22.02/PoolStatusOnlineOrDegraded.png "Pool Status Indications")

This same information displays on both the **Storage** widget and a pool widget you can add to the **Dashboard**. 
The pool header includes the **Pool Operations** <span class="iconify" data-icon="mdi:database-cog"></span> icon that displays the **Pool Actions** dropdown list of options you can use for storage pools.

## Pool Actions List

The **Pool Actions** dropdown list options are **Pool Options**, **Export/Disconnect**, **Add Vdevs**, **Scrub Pool**, **Status** and **Expand Pool**.

### Pool Options
**Pool Options** displays the option to enable **Auto TRIM**.
{{< expand "Click here for more information" "v" >}}
When enabled, TrueNAS to periodically reviews data blocks tp identify the blocks it can reclaim. 
Auto TRIM can impact pool performance, so it is disabled by default.

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
{{< /expand >}}
### Export/Disconnect
**Export/Disconnect** allows users to export, disconnect, or delete a pool. Disks in the pool become available to use in a new pool.
{{< expand "Click here for more information" "v" >}}
{{< hint warning >}} 
This can be a destructive process! Back up all data before performing this operation. You might not be able to recover data lost though this operation.
{{< /hint >}}
**Export/disconnect pool** displays a warning about this option and the impact on other services and destroying data on the selected pool. 

![ExportDisconnectPool](/images/SCALE/22.02/ExportDisconnectPool.png "Export/Disconnect Pool")

| Setting | Description |
|---------|-------------|
| **Destroy data on this pool?** | Select to erase all data on the pool. When selected the **Confirm Export/Disconnect** checkbox disappears. |
| **Delete configuration of shares that sued this pool?** | Enabled by default. Exporting or disconnecting the pool delets the configuration of shares using this pool. You must reconfigure your shares impacted by this operation. |
| **Confirm Export/Disconnect** | Required option. Select to confirm this operation and accept the warnings displayed. Activates the **Export/Disconnect** button. |
{{< /expand >}}
### Add Vdevs
**Add Vdevs** displays the **[Pool Manager]({{< relref "/SCALEUIReference/Storage/Pools/PoolsScreens.md" >}})** screen where you can add another vdev to the selected pool.

### Scrub Pool
**Scrub Pool** initiates a check on pool data integrity.
{{< expand "Click here for more information" "v" >}}
If TrueNAS detects any problems during the scrub, it either corrects them automatically or generates an [alert]({{< relref "/CORE/UIReference/System/AlertSettings.md" >}}) in the web interface.

[ScrubPoolSCALE](/images/SCALE/ScrubPoolSCALE.png "Scrub Pool")

By default, TrueNAS automatically checks every pool to verify it is on a reoccurring scrub schedule.
{{< /expand >}}
### Status
**Status** displays the **[Pool Status]({{< relref "/SCALEUIReference/Storage/Pools/PoolsScreens.md" >}})** screen where you can see disks the status of disks in the poool, the vdev type, and perform options for the vdev and disks.

### Expand Pool
**Expand** increases the pool size to match all available disk space. A user typically expands a pool when virtual disks are resized apart from TrueNAS. A dialog displays when the process completes.

## Dataset Actions List

The **Dataset Actions** dropdown list options for the root dataset are **Add Dataset**, **Add Zvol**, **Edit Options**, **View Permissions**, **User Quotas**, **Group Quotas** and **Create Snapshot**.

The **Dataset Actions** dropdown list options for child datasets are the same but also include **Delete Dataset**.
### Add Dataset
The **Add Dataset** option displays the **[Add Dataset]({{< relref "/SCALEUIReference/Storage/Pools/DatasetScreens.md" >}})** configuration screen where you can create a child dataset to the root dataset or to another child dataset.

### Add Zvol
**Add Zvol** displays the **[Add Zvol]({{< relref "/SCALUIReference/Storage/Pools/ZvolsScreens.md" >}})** where you can create zvols for a root or child dataset.

### Edit Options
**Edit Options** displays the **[Edit Dataset]({{<< relref "/SCALEUIReference/Storage/Pools/DatasetsScreens.md" >>}})** screen where you can edit the settings for the selected dataset.

### View Permissions
**View Permissions** displays the **[Dataset Permissions]({{<< relref "/SCALEUIReference/Storage/Pools/DatasetsScreens.md" >>}})** widget to the right of the root dataset on the **Storage**screen.
{{< expand "Click here for more information" "v" >}}
The **Dataset Permissions** widget is read-only.

![ViewDatasetPermissionsWidget](/images/SCALE/22.02/ViewDatasetPermissionsWidget.png "View Dataset Permissions")

| Settings | Description |
|----------|-------------|
| **Owner** | Displays the name of the owner, which is **root** for both the root dataset and the child datasets of root. |
| **Group** | Displays the name of the group, which is **root** for both the root dataset and the child datasets of root.. |
| **Path** | Displays the path for the selected dataset. |
| **Unix Permissions** | Diplays three levels of permissions, **Read|Write|Execute** for the root parent, **Read|Execute** for the child of the root parent, and **Read|Execute** for any other storage volume child under the parent root dataset. |
{{< /expand >}}
### User Quotas
**User Quotas** displays the **[User Qutoas]({{< relref "/SCALEUIReference/Storage/UserQutoasScreen.md" >}})** screen. 

### Group Quotas
**Group Quotas** displays the **[Group Qutoas]({{< relref "/SCALEUIReference/Storage/GroupQutoasScreen.md" >}})** screen.

### Create Snapshot
**Create Snapshot** displays the **One time snapshot of *datasetname*** dialog where you can create a manual snapshot of the selected dataset.
{{< expand "Click here for more information" "v" >}}
The *datasetname* part of the dialog name changes based on the name of the selected dataset.

![OneTimeSnapshotDialog](/images/SCALE/22.02/OneTimeSnapshotDialog.png "Create One Time Snapshot")

**Name** displays the system-created name for the snapshot.

Select **Recursive** to include child datasets or zvols in the snapshot of the parent or root dataset.

Click **Create Snapshot** to create the manual snapshot.
{{< /expand >}}

## Zvol Actions List
The **Zvol Actions** dropdown list options for the selected zvol are **Delete Zvol**, **Edit Zvol** and **Create Snapshot**.

### Delete Zvol
**Delete Zvol** displays a confirmation dialog where you enter the name of the zvol and select **Confirm** to activate the **Delete Zvol** button.

### Edit Zvol
**Edit Zvol** displays the **[Edit Zvol]({{< relref "/SCALEUIReference/Storage/Pools/ZvolsScreens.md" >}})** screen where you can modify current settings.

### Create Snapshot
**Create Snapshot** displays a **One time snapshot *zvol*** dialog where you can create a manual snapshot of the selected zvol.

## Encryption Options
If you create a pool to use encryption, the root and child datasets or zvols have the option to inherit the encryption, modify the type of encryption, or not use encryption at all. For more information see [Storage Encryption]({{< relref "SCALETutorials/Storage/StorageEncryption.md" >}}).

If encryption is enabled, the **Dataset Actions** and **Zvol Actions** menus include the **Encryption Options** list item you use to configure encryption type and other settings for that dataset or zvol.

{{< taglist tag="scalestorage" limit="10" >}}