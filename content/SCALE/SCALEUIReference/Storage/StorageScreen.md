---
title: "Storage Screens"
description: "This article provides information on the **Storage** screen widgets and options for pools, devices, datasets and disks listed on this screen."
weight: 30 
aliases:
tags:
- scalepools
- scaledisks
- scaledatasets
- scalescrub
---


{{< toc >}}

SCALE Bluefin introduces a new main **Storage Dashboard** screen designed to help users configure storage resources such as devices (vdevs, disks, etc.), manage usage (datasets), keep the pool healthy (scrub), and manage hard disk drive resources (disks). 

Before adding a pool, the **Storage Dashboard** dislpays the **No Pools** screen with a **Create Pool** button in the center of the screen.

![StorageDashboardNoPools](/images/SCALE/22.12/StorageDashboardNoPools.png "SCALE Storage Dashboard without Pools") 

Both **Create Pool** buttons (on the top right or center of the screen) open the **Create Pool > [Pool Manager](#pool-manager)** configuration screen. The **Pool Manager** configuration screen displays when adding a new pool and when adding to an existing pool. 

After adding a pool, five widgets display on the screen, one that remains fixed at the top of the dashboard, the other is a set of four for each pool created on the system. 

![StorageDashboardWithPool](/images/SCALE/22.12/StorageDashboardWithPool.png "SCALE Storage Dashboard with Pool") 

**Import** opens the **[Import Pool](#import-pool-screen)** screen.

**Disks** opens the **[Disks]({{< relref "/SCALEUIReference/Storage/Disks/DisksScreens.md" >}})** screen.

## Storage Dashboard Widgets
The **Storage Dashboard** widgets organize storage functions for each pool by the storage type (VDEVs, datasets, and disks) and related tasks (scrub, or other tasks). 
After adding a pool to the system, the **Storage Dashboard** displays five widgets. 
The **Unassigned Resources** widget provides the number of available disks on the system to use in pools. 
Each pool has a set of four widgets: **[Topology](#topology-widget)** for managing pool virtual devices or VDEVs, **[Usage](#usage-widget)** for managing datasets and zvols, **[ZFS Health](#zfs-health-widget)** for managing pool health and pool functions like scrub and auto TRIM, and **[Disk Health](#disk-health-widget)** for managing disks and disk health. 

Each widgets in the set of four pool widgets includes a color-coded icon just to the right of the header that indicates the status of the pool as healthy (green checkmark), offline (red cross), or in a warning state (purple warning sign). 

### Unused Resources
The **Unused Resources Unassigned Disks** widget displays the number of disks available on your system to use in pools.
{{< expand "Click Here for More Information" "v" >}}
To see information on each disk on the system, click **Manage Disks** on the **[Disk health](#disk-health-widget)** widget.

![StorageDashboardUnusedResourcesWidget](/images/SCALE/22.12/StorageDashboardUnusedResourcesWidget.png "Storage Dashboard Unused Resources Widget") 

**Add To Pool** opens the **[Add to Pool](#add-to-pool-window)** window. 

**New Pool** opens the **Create Pool > [Pool Manager](#pool-manager)** screen. 
**Existing Pool** opens the **Add VDevs to Pool > [Pool Manager](#pool-manager)** screen.
{{< /expand >}}

#### Add To Pool Window
The **Add to Pool** window allows you to select a disk or disks to add to either a new pool or an existing pool.
{{< expand "Click Here for More Information" "v" >}}

![AddToPoolWindow](/images/SCALE/22.12/AddToPoolWindow.png "Add To Pool") 

The **Unassigned Disks** area displays the amount of storage and number of disks that provides that storage.

The **Add Disks To** area includes two radio buttons:
* **New Pool** adds a new pool.
* **Existing Pool** adds the **Existing Pool** field where you select the existing pool from the dropdown list.
   
   ![AddToPool-ExistingWindow](/images/SCALE/22.12/AddToPool-ExistingWindow.png "Add To Existing Pool") 

**Add Disks** opens the **[Pool Manager](#pool-manager)** screen for the radio button option you selected, **Create Pool** to add a new VDEV or **Add to a Pool** where you can add to the existing VDEV.
{{< /expand >}}

### Topology Widget
The **Topology** widget provides information on VDEVS configured on the system and the status on the pool. 
{{< expand "Click Here for More Information" "v" >}}
The widget lists each VDEV type (Data, Metadata, Log, Cache, Spare, and Dedup). Pools with a **Data VDEV** indicates if it is a stripe, mirror, RAID, or mixed configuration, the number of disks, and storage capacity of that VDEV.


![StorageDashboardTopologyWidget](/images/SCALE/22.12/StorageDashboardTopologyWidget.png "Storage Dashboard Topology Widget") 

**Manage Devices** opens the **[Devices]({{< relref "DevicesScreenSCALE.md" >}})** screen where you can add  or manage existing VDEVs.

### Usage Widget
The **Usage** widget provides information on the space used by datasets configured on the system and the status of pool usage. 
{{< expand "Click Here for More Information" "v" >}}
The widget includes a donut chart that illustrates the percentage of space used on the pool. 
This graph is color-coded where blue indicates space usage in the 0-80% range and red for anything above 80%.
A warning displays below this donut graph when usage is above 80%. 
**Usable Capaciity** details on the card provide the selected pool space **Used**, **Available**, and **Used by Snapshots**. 

![StorageDashboardUsageWidget](/images/SCALE/22.12/StorageDashboardUsageWidget.png "Storage Dashboard Usage Widget") 

**View Disk Space Reports** opens the pool usage reports for the selected pool.

**Manage Datasets** opens the **[Datasets]({{< relref "DatasetsScreensScale.md" >}})** screen.
{{< /expand >}}

### ZFS Health Widget
The **ZFS Health** widget provides information on the health of the pool. 
{{< expand "Click Here for More Information" "v" >}}
The details on the widget include **Pool Status** as online of offline, **Total ZFS Errors** which is a count of the number of ZFS errors, **Scheduled Scrub Task** as set or not, and **Auto TRIM** as on or off.

![StorageDashboardZFSHealthWidget](/images/SCALE/22.12/StorageDashboardZFSHealthWidget.png "Storage Dashboard ZFS Health Widget") 

**View all Scrub Tasks** opens the **Data Protections > Scrub Tasks** details screen that lists all scheduled scrub tasks.

**Scrub** opens the **Scrub Pool** dialog. 

**Edit Auto TRIM** opens the dialog that allows you to set this to On.
{{< /expand >}}

#### Scrub Dialog
The **Scrub Pool** dialog allows you to perform an unscheduled scrub task. 

![ScrubPoolDialog](/images/SCALE/22.12/ScrubPoolDialog.png "Scrub Pool Dialog")

To schedule a single or a regular pool scrub operation, click **View All Scrub Tasks** to open the **Data Protections > Scrub Tasks** details screen where you can add or manage scrub tasks configured on your system.

#### Auto TRIM Dialog
**Edit Auto TRIM** opens the dialog that allows you to set this to On.

![PoolOptionsAuotTRIM](/images/SCALE/22.12/PoolOptionsAuotTRIM.png "Pool Option Auto TRIM")

{{< /expand >}}
### Disk Health Widget
The **Disk Health** widget provides information on the health of the disks in a pool pool. 
{{< expand "Click Here for More Information" "v" >}}
The details on the widget include the non-dismissed disk temperature alerts for highest, lowest and average temperature, and any failed S.M.A.R.T. tests.

![StorageDashboardDiskHealthWidget](/images/SCALE/22.12/StorageDashboardDiskHealthWidget.png "Storage Dashboard Disk Health Widget") 

**Manage Disks** opens the **Storage > [Disk]({{< relref "/SCALEUIReference/Storage/Disks/DisksScreens.md" >}})** screen.

**View Reports** opens the **Report** screen for the disks in the selected pool.

**View all S.M.A.R.T. Tests** opens the **Data Protection > S.M.A.R.T. Tests** screen.

## Pool Manager
The **Pool Manager** configuration screen displays after clicking **Create Pool** on the **Storage Dashboard** or **Add VDEV** on the **[Devices]({{< relref "DevicesScreensSCALE.md" >}})** screen.

The **Create Pool** button opens the **Create Pool** screen with the **Pool Manager** configuration form.

![StorageCreatePoolPoolManager](/images/SCALE/22.12/StorageCreatePoolPoolManager.png "Storage Create Pool > Pool Manager") 

**Add VDEV** opens the **Add Vdevs to Pool** screen with the **Pool Manager** configuration form for the selected pool.

## Import Pool Screen

The **Import Pool** button opens the **Import Pool** screen where you can select a pool detected by TrueNAS as present on the system but not connected.

![ImportPoolScreen](/images/SCALE/22.12/ImportPoolScreen.png "Import Pool Screen") 

Select the unconnected pool from the **Pool** dropdown list.

**Import** starts the process to connect the pool in TrueNAS and bring it into SCALE.

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

Click the <span class="iconify" data-icon="mdi:database-cog"></span> icon button for the pool to display the **Pool Actions** dropdown list. The options are **Pool Options**, **Export/Disconnect**, **Add Vdevs**, **Scrub Pool**, **Status** and **Expand Pool**. See [Pools Screens]({{< relref "/SCALE/SCALEUIReference/Storage/Pools/PoolsScreens.md" >}}) for more information on the UI screens, dialogs and windows.

## Dataset Actions List

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset to display the **Dataset Actions** dropdown list. The options are **Add Dataset**, **Add Zvol**, **Edit Options**, **View Permissions**, **User Quotas**, **Group Quotas** and **Create Snapshot**. See [Datasets Screens]({{< relref "/SCALE/SCALEUIReference/Storage/Pools/DatasetsScreensScale.md" >}}) for more information on the UI screens, dialogs and windows.

## Zvol Actions List
Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset to display the **Zvol Actions** dropdown list. The options for the selected zvol are **Delete Zvol**, **Edit Zvol** and **Create Snapshot**. See [Zvols Screens]({{< relref "/SCALE/SCALEUIReference/Storage/Pools/ZvolsScreensScale.md" >}}) for more information on the UI screens, dialogs and windows.

## Encryption Options
If you use encryption when you create a pool, the root and child datasets or zvols have the option to inherit the encryption, modify the type of encryption, or not use encryption at all. For more information see [Storage Encryption]({{< relref "EncryptionScale.md" >}}).

If encryption is enabled, the **Dataset Actions** and **Zvol Actions** option lists include the **Encryption Options** list item used to configure encryption settings for that dataset or zvol.

{{< taglist tag="scalestorage" limit="10" >}}