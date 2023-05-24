---
title: "Storage Dashboard Screen"
description: "This article provides information on the Storage Dashboard screen widgets and options for pools, devices, datasets, and disks listed on this screen."
weight: 30 
aliases:
tags:
- scalepools
- scalestorage
- scalescrub
- scalevdevs
---


{{< toc >}}

SCALE Bluefin introduces the new **Storage Dashboard** screen that is designed to help users configure and manage storage resources such as pools (VDEVs), datasets, and disks, and to keep the pool healthy (scrub). This dashboard uses widgets to organize functions directly or indirectly related to storage resources.

The **Storage Dashboard** displays the **No Pools** screen with a **Create Pool** button in the center of the screen until you add a pool.

![StorageDashboardNoPools](/images/SCALE/22.12/StorageDashboardNoPools.png "SCALE Storage Dashboard without Pools") 

Both the **Create Pool** button on the top right and at the center of the screen open the **Create Pool > [Pool Manager]({{< relref "PoolManagerScreens.md" >}})** configuration screen. 

After adding a pool, the screen displays five widgets. The **[Unassigned Disks](#unassigned-disks-widget)** widget remains at the top of the dashboard and the other four are a set that display for each pool created on the system. 

![StorageDashboardWithPool](/images/SCALE/22.12/StorageDashboardWithPool.png "SCALE Storage Dashboard with Pool") 

**Import** at the top of the dashboard opens the **[Import Pool](#import-pool-screen)** screen.

**Disks** at the top of the dashboard opens the **[Disks]({{< relref "DisksScreensSCALE.md" >}})** screen. The **Manage Disks** button on the **[Disk Health](#disk-health-widget)** widget opens the same **Disks** screen.

**Export/Disconnect** opens the **[Export/disconnect pool](#exportdisconnect-window)** window that allows you to either completely remove a pool and deleted all the contents of that pool, or to export the pool to the server and disconnect it in TrueNAS SCALE.

**Expand** opens the **[Expand pool](#expand-dialog)** dialog. Use to expand the selected pool to fit all available disk space.

## Pool Status
Each widget in the set of four pool widgets includes a color-coded icon just to the right of the header that indicates the status of the pool as healthy (green checkmark), offline (orange triangle), or in a warning state (purple warning sign). 

![StoragePoolWidgetsDegradedState](/images/SCALE/22.12/StoragePoolWidgetsDegradedState.png "Pool Status Indications")

This same information displays on both the **Storage** widget and a pool widget you can add to the **Dashboard**. 

## Storage Dashboard Widgets
The **Storage Dashboard** widgets organize storage and related functions for each pool. 

The **Unassigned Disks** widget remains at the top of the dashboard and provides the number of available disks on the system to use in pools. 
Each pool has a set of four widgets: **[Topology](#topology-widget)** for managing pool virtual devices or VDEVs, **[Usage](#usage-widget)** for managing datasets and zvols, **[ZFS Health](#zfs-health-widget)** for managing pool health and pool functions like scrub and auto TRIM, and **[Disk Health](#disk-health-widget)** for managing disks and disk health. 
Each set of pool widgets provides access to screens for each storage type with the information for the pool pre-selected. For example, **Manage Devices** on the **[Topology](#topology-widget)** widget opens the **Devices** screen with the VDEVs configured for that pool and not all pools on the system.

### Unassigned Disks Widget
The **Unassigned Disks** widget displays the number of disks available on your system to use in pools. The disk count includes disks assigned in an exported pool. If you attempt to use a disk assigned in an exported pool a warning message displays that prompts you to select a different disk.

{{< expand "Click Here for More Information" "v" >}}
To see information on each disk on the system, click **Manage Disks** on the **[Disk health](#disk-health-widget)** widget.

![StorageDashboardUnassignedDisksWidget](/images/SCALE/22.12/StorageDashboardUnassignedDisksWidget.png "Storage Dashboard Unassigned Disks Widget") 

**Add To Pool** opens the **[Add to Pool](#add-to-pool-window)** window. 
{{< /expand >}}

#### Add To Pool Window
The **Add to Pool** window allows you to select a disk or disks to add to either a new pool or an existing pool.
{{< expand "Click Here for More Information" "v" >}}

![AddToPoolWindow](/images/SCALE/22.12/AddToPoolWindow.png "Add To Pool") 

The **Unassigned Disks** area displays the amount of storage and the number of disks that provide that storage.

The **Add Disks To** area includes two radio buttons:

**New Pool** opens the **Create Pool > [Pool Manager]({{< relref "PoolManagerScreens.md" >}})** screen. 
**Existing Pool** opens the **Add VDevs to Pool > [Pool Manager]({{< relref "PoolManagerScreens.md" >}})** screen.
   
   ![AddToPool-ExistingWindow](/images/SCALE/22.12/AddToPool-ExistingWindow.png "Add To Existing Pool") 

**Add Disks** opens the **[Pool Manager](#pool-manager)** screen for the radio button option you selected, **Create Pool** to add a new VDEV or **Add to a Pool** where you can add to the existing VDEV.
{{< /expand >}}

### Topology Widget
The **Topology** widget provides information on VDEVS configured on the system and the status of the pool. 
{{< expand "Click Here for More Information" "v" >}}
The widget lists each VDEV type (data, metadata, log, cache, spare, and dedup). 
A **Data VDEV** includes the data type (stripe, mirror, RAID, or mixed configuration), the number of disks (**wide**), and the storage capacity of that VDEV.

![StorageDashboardTopologyWidget](/images/SCALE/22.12/StorageDashboardTopologyWidget.png "Storage Dashboard Topology Widget") 

**Manage Devices** opens the **[Devices]({{< relref "DevicesScreensSCALE.md" >}})** screen where you can add or manage existing VDEVs.
{{< /expand >}}
### Usage Widget
The **Usage** widget provides information on the space configured datasets use and the status of pool usage. 
{{< expand "Click Here for More Information" "v" >}}
The widget includes a donut chart that illustrates the percentage of space used on the pool. 
This color-coded graph displays space usage in the 0-80% range in blue indicates and anything above 80% in red.
A warning displays below this donut graph when usage is above 80%. 
**Usable Capacity** details the selected pool space statistics by **Used**, **Available**, and **Used by Snapshots**. 

![StorageDashboardUsageWidget](/images/SCALE/22.12/StorageDashboardUsageWidget.png "Storage Dashboard Usage Widget") 

**View Disk Space Reports** opens the pool usage reports for the selected pool.

{{< hint type=note >}}
Large petabyte systems may report storage numbers inaccurately. Storage configurations with more than 9,007,199,254,740,992 bytes will round the last 4 digits.

For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

**Manage Datasets** opens the **[Datasets]({{< relref "DatasetsScreensScale.md" >}})** screen that shows the datasets configured for the pool that owns this widget.
{{< /expand >}}

### ZFS Health Widget
The **ZFS Health** widget provides information on the health of the pool. 
{{< expand "Click Here for More Information" "v" >}}
The details on the widget include **Pool Status** as online or offline, **Total ZFS Errors** count of the number of ZFS errors, **Scheduled Scrub Task** as set or not, and **Auto TRIM** as on or off.

![StorageDashboardZFSHealthWidget](/images/SCALE/22.12/StorageDashboardZFSHealthWidget.png "Storage Dashboard ZFS Health Widget") 

**View all Scrub Tasks** opens the **[Data Protections > Scrub Tasks]({{< relref "ScrubTasksScreensSCALE.md" >}})** details screen that lists all scheduled scrub tasks and allows you to add a new task or edit an existing task.

**Scrub** opens the **[Scrub Pool](#scrub-dialog)** dialog. 

**[Edit Auto TRIM](#auto-trim-dialog)** opens the dialog that allows you to set Auto TRIM on or off.
{{< /expand >}}

#### Scrub Pool Dialog
The **Scrub Pool** dialog allows you to perform an unscheduled scrub task. **Scrub Pool** initiates a check on pool data integrity.
{{< expand "Click Here for More Information" "v" >}}
If TrueNAS detects any problems during the scrub, it either corrects them automatically or generates an [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) in the web interface.

By default, TrueNAS automatically checks every pool to verify it is on a reoccurring scrub schedule.

To schedule a single or a regular pool scrub operation, click **View All Scrub Tasks** to open the **Data Protections > Scrub Tasks** details screen where you can add or manage scrub tasks configured on your system.

![ScrubPoolDialog](/images/SCALE/22.12/ScrubPoolDialog.png "Scrub Pool Dialog")

**Confirm** activates the **Start Scrub** button.
{{< /expand >}}
#### Auto TRIM Dialog
**Edit Auto TRIM** opens the dialog that allows you to set auto TRIM.
{{< expand "Click Here for More Information" "v" >}}
When enabled, Auto TRIM allows TrueNAS to periodically review data blocks to identify which empty blocks of obsolete blocks it can delete. Leave unselected to incorporate day block overwrites when a device write is started (default).

![PoolOptionsAuotTRIM](/images/SCALE/22.12/PoolOptionsAuotTRIM.png "Pool Option Auto TRIM")

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).

Select **Confirm** to activate **Save**.
{{< /expand >}}

### Disk Health Widget
The **Disk Health** widget provides information on the health of the disks in a pool. 
{{< expand "Click Here for More Information" "v" >}}
The details on the widget include the non-dismissed disk temperature alerts for highest, lowest, and average temperature, and any failed S.M.A.R.T. tests.

![StorageDashboardDiskHealthWidget](/images/SCALE/22.12/StorageDashboardDiskHealthWidget.png "Storage Dashboard Disk Health Widget") 

**Manage Disks** opens the **Storage > [Disk]({{< relref "DisksScreensSCALE.md" >}})** screen.

**View Reports** opens the **Report** screen for the disks in the selected pool.

**View all S.M.A.R.T. Tests** opens the **Data Protection > S.M.A.R.T. Tests** screen.
{{< /expand >}}

## Pool Manager Screens
The **Pool Manager({{< relref "PoolManagerScreens.md" >}})** configuration screen displays after clicking **Create Pool** on the **Storage Dashboard** or **Add VDEV** on the **[Devices]({{< relref "DevicesScreensSCALE.md" >}})** screen.

The **Create Pool** button opens the **Create Pool** screen with the **Pool Manager** configuration screen.

**Add VDEV** on the **Devices** screen opens the **Add Vdevs to Pool** screen with the **Pool Manager** configuration screen for the selected pool. 

## Import Pool Screen

The **Import Pool** button opens the **Import Pool** screen. 

![ImportPoolScreen](/images/SCALE/22.12/ImportPoolScreen.png "Import Pool Screen") 

Select a pool from the **Pool** dropdown list TrueNAS detects as present on the system but that is not yet connected in TrueNAS. 

**Import** starts the process to connect the pool in TrueNAS and bring it into SCALE. Import also reconnects pools after users reinstall or upgrade their TrueNAS system.

## Export/Disconnect Window
**Export/Disconnect** opens the **Export/disconnect pool: *poolname*** window that allows users to export, disconnect, or delete a pool. 
{{< expand "Click Here for More Information" "v" >}}
The **Export/disconnect pool** window includes a warning that states data becomes unavailable after an export and that selecting **Destroy Data on this pool** destroys data on the pool disks. 

{{< hint type=important >}} 
Exporting/disconnecting can be a destructive process! Back up all data before performing this operation. You might not be able to recover data lost through this operation.
{{< /hint >}}

![ExportDisconnectPoolWindow](/images/SCALE/22.12/ExportDisconnectPoolWindow.png "Export/Disconnect Pool Window")

If a share uses the pool this window displays the share type (for example, SMB share, etc.) affected by the export/disconnect operation.

Disks in an exported pool become available to use in a new pool but remain marked as used by an exported pool. If you select a disk used by an exported pool to use in a new pool the system displays a warning message about the disk.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Destroy data on this pool?** | Select to erase all data on the pool. After selecting this a field displays there you type the name of the pool to confirm the operation before the **Export/Disconnect** button activates. |
| **Delete configuration of shares that use this pool** | Enabled by default to remove the share connection to this pool. Exporting or disconnecting the pool deletes the configuration of shares using this pool. You must reconfigure the shares affected by this operation. |
| **Confirm Export/Disconnect** | Required option. Select to confirm the operation and accept the warnings displayed. Activates the **Export/Disconnect** button. |
{{< /truetable >}}

**Export/Disconnect** executes the process and begins the pool export or disconnect. A status window displays with progress. When complete, a final dialog displays stating the export/disconnect completed successfully.
{{< /expand >}}

## Expand Dialog
Select **Expand Pool** to increase the pool size to match all available disk space. Users with pools using virtual disks use this option to resize these virtual disks apart from TrueNAS.

![ExpandPoolDialog](/images/SCALE/22.12/ExpandPoolDialog.png "Expand Pool Dialog")

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}
