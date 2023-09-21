---
title: "Storage Dashboard"
description: "Provides information on the Storage Dashboard widgets and options for pools, devices, datasets, and disks listed on this screen."
geekdocCollapseSection: true
weight: 30 
aliases:
tags:
- scalepools
- scalestorage
- scalescrub
- scalevdevs
---


{{< toc >}}

The **Storage Dashboard** screen, allows users configure and manage storage resources such as pools (VDEVs), datasets, and disks, and to keep the pool healthy (scrub). 
The dashboard widgets organize functions related to storage resources.

## No Pools Screen
The **No Pools** screen displays before you add the first pool. 

{{< trueimage src="/images/SCALE/Storage/StorageDashboardNoPools.png" alt="Storage Dashboard without Pools" id="Storage Dashboard without Pools" >}}

The **Create Pool** button in the center of the screen opens the **[Pool Manager]({{< relref "PoolCreateWizardScreens.md" >}})** screen.

## Storage Dashboard 
The **Storage Dashboard** has four buttons at the top right of the screen that provide access to pool and disk functions:

* {{< expand "Import Pool (Click to expand)" "v" >}}

  The **Import Pool** button opens the **Import Pool** screen.

  {{< trueimage src="/images/SCALE/Storage/ImportPoolScreen.png" alt="Import Pool Screen" id="Import Pool Screen" >}}

  Select a pool from the **Pool** dropdown list. These are pools that TrueNAS detects as present on the system but not yet connected in TrueNAS.

  **Import** starts the process to connect the pool in TrueNAS and bring it into SCALE.
  Import also reconnects pools after users reinstall or upgrade their TrueNAS system.
  {{< /expand >}}

* **Disks** opens the **[Disks]({{< relref "DisksScreen.md" >}})** screen with options to manage individual disks connected to the TrueNAS storage array.
* **Create Pool** opens the **[Pool Creation Wizard]({{< relref "PoolCreateWizardScreens.md" >}})**.

After adding pools, the dashboard includes five widgets and two more buttons.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardWithPool.png" alt="Storage Dashboard with Pool" id="Storage Dashboard with Pool" >}}

* {{< expand "Export/Disconnect (Click to expand)" "v" >}}
  **Export/Disconnect** opens the **Export/disconnect pool: *poolname*** window that allows users to export, disconnect, or delete a pool. 

  The **Export/disconnect pool** window includes a warning that states data becomes unavailable after an export and that selecting **Destroy Data on this pool** destroys data on the pool disks.

  {{< hint type=important >}}
  Exporting/disconnecting can be a destructive process!
  Back up all data before performing this operation. You might not be able to recover data lost through this operation.
  {{< /hint >}}

  {{< trueimage src="/images/SCALE/Storage/ExportDisconnectPoolWindow.png" alt="Export/Disconnect Pool Window" id="Export/Disconnect Pool Window" >}}

  This window displays the share type (for example, SMB share, etc.) affected by the export/disconnect operation if a share uses the pool.

  Disks in an exported pool become available to use in a new pool but remain marked as used by an exported pool.
  If you select a disk used by an exported pool to use in a new pool, the system displays a warning message about the disk.

  {{< truetable >}}
  | Setting | Description |
  |---------|-------------|
  | **Destroy data on this pool?** | Select to erase all data on the pool. A field displays where you type the name of the pool to confirm the operation before the **Export/Disconnect** button activates. |
  | **Delete configuration of shares that use this pool** | Enabled by default to remove the share connection to this pool. Exporting or disconnecting the pool deletes the configuration of shares using this pool. You must reconfigure the shares affected by this operation. |
  | **Confirm Export/Disconnect** | (Required) Select to confirm the operation and accept the warnings displayed. Activates the **Export/Disconnect** button. |
  {{< /truetable >}}

  **Export/Disconnect** executes the process and begins the pool export or disconnect.
  A status window displays with progress. When complete, a final dialog displays stating the export/disconnect completed successfully.
  {{< /expand >}}

* {{< expand "Expand (Click to expand)" "v" >}}
  Select **Expand Pool** to increase the pool size to match all available disk space.
  Users with pools using virtual disks use this option to resize these virtual disks apart from TrueNAS.

  {{< trueimage src="/images/SCALE/Storage/ExpandPoolDialog.png" alt="Expand Pool Dialog" id="Expand Pool Dialog" >}}

  **Confirm** activates the **Continue** button.
  {{< /expand >}}

## Storage Dashboard Widgets
After adding a pool, the screen displays five widgets.
The **Unassigned Disks** widget remains at the top of the dashboard if the system has disks not added to a pool.
The other four widgets are a set that displays for each pool created on the system.

* {{< expand "Unassigned Disks (Click to expand)" "v" >}}
  The **Unassigned Disks** widget displays the number of disks available on your system to use in pools. 
  The disk count includes disks assigned in an exported pool. 
  If you attempt to use a disk assigned in an exported pool, a warning message displays that prompts you to select a different disk.
  
  To see information on each disk on the system, click **Manage Disks** on the **[Disk health](#disk-health-widget)** widget.
  
  {{< trueimage src="/images/SCALE/Storage/StorageDashboardUnassignedDisksWidget.png" alt="Unassigned Disks Widget" id="Unassigned Disks Widget" >}}
  
  {{< /expand >}}
  
  * {{< expand "Add To Pool window (Click to expand)" "v" >}}

  The **Unassigned Disks** widget **Add to Pool** window displays the number of unassigned disks and provides the option to assign disks to a new or existing pool.

  The **Unassigned Disks** area displays the number of unassigned disks, the size and type of disks, and indicates any disks associated with an previous pool.

  {{< trueimage src="/images/SCALE/Storage/AddToPoolWindow.png" alt="Add To Pool" id="Add To Pool New Pool" >}}

  The **Add Disks To** window has three radio buttons:
  
  * **New Pool** opens the **Create Pool > Pool Manager** screen.
  * **Existing Pool** adds the **Existing Pool** dropdown list with available options.
  * **Existing Pool (Legacy)** adds the **Existing Pool** dropdown list with available options.

  {{< trueimage src="/images/SCALE/Storage/AddToPoolExistingPool.png" alt="Add To Existing Pool" id="Add To Existing Pool" >}}

  {{< trueimage src="/images/SCALE/Storage/AddToPoolExistingPoolLegacy.png" alt="Add To Existing Pool (Legacy)" id="Add To Existing Pool (Legacy)" >}}

  After selecting **Existing Pool**, the **Add Disks** opens the **Pool Manager** screen if the existing pool was created with the **Pool Manager**.
  If the pool was created with the **Pool Creation Wizard**, **Add Disks** opens the **Pool Creation Wizard**.
  If you select **New Pool**, **Add Disks** opens the **Pool Creation Wizard** screen.
  {{< /expand >}}

* {{< expand "Topology (Click to expand)" "v" >}}

  The **Topology** widget provides information on the VDEVs configured on the system and the status of the pool. 
  
  The widget lists each VDEV type (data, metadata, log, cache, spare, and dedup). 
  A **Data VDEV** includes the data type (stripe, mirror, RAID, or mixed configuration), the number of disks (**wide**), and the storage capacity of that VDEV.
  
  {{< trueimage src="/images/SCALE/Storage/StorageDashboardTopologyWidget.png" alt="Topology Widget" id="Topology Widget" >}}
  
  **Manage Devices** opens the **[Devices]({{< relref "DevicesScreensSCALE.md" >}})** screen where you can add or manage existing VDEVs.
  {{< /expand >}}

* {{< expand "Usage (Click to expand)" "v" >}}
  The **Usage** widget provides information on the space datasets use and the status of pool usage.

  The widget includes a color-coded donut chart that illustrates the percentage of space the pool uses.
  Blue indicates space usage in the 0-80% range and red indicates anything above 80%.
  A warning displays below the donut graph when usage exceeds 80%.

  **Usable Capacity** details pool space statistics by **Used**, **Available**, and **Used by Snapshots**.

  {{< trueimage src="/images/SCALE/Storage/StorageDashboardUsageWidget.png" alt="Usage Widget" id="Usage Widget" >}}

  **View Disk Space Reports** opens the pool usage reports for the selected pool.

  {{< hint type=note >}}
  Large (>1 petabyte) systems could report storage numbers inaccurately.
  Storage configurations with more than 9,007,199,254,740,992 bytes round the last 4 digits.
  For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
  {{< /hint >}}

  **Manage Datasets** opens the **[Datasets]({{< relref "DatasetsScreensScale.md" >}})** screen.
  {{< /expand >}}

* {{< expand "ZFS Health (Click to expand)" "v" >}}  
  The **ZFS Health** widget provides information on the health of the pool. 
  
  Widget details include:
  * **Pool Status** as online or offline
  * **Total ZFS Errors** count of the number of ZFS errors
  * **Scheduled Scrub Task** as set or not
  * **Auto TRIM** as on or off
  
  {{< trueimage src="/images/SCALE/Storage/StorageDashboardZFSHealthWidget.png" alt="ZFS Health Widget" id="ZFS Health Widget" >}}
  
  **View all Scrub Tasks** opens the **[Data Protections > Scrub Tasks]({{< relref "ScrubTasksScreensSCALE.md" >}})** details screen. 
  This lists all scheduled scrub tasks and allows you to add a new task or edit an existing task.
  {{< /expand >}}
  
  * {{< expand "Scrub Pool Dialog (Click to expand)" "v" >}}
  Clicking the **Scrub** button from the **ZFS Health** widget initiates a check on pool data integrity.
  The **Scrub Pool** dialog allows you to perform an unscheduled scrub task.
  If TrueNAS detects problems during the scrub, it either corrects them automatically or generates an [alert]({{< relref "AlertSettingsScreen.md" >}}) in the web interface.

  By default, TrueNAS automatically checks every pool to verify it is on a reoccurring scrub schedule.

  To schedule a single or a regular pool scrub operation, click **View All Scrub Tasks** to open the **Data Protections > Scrub Tasks** details screen and add or manage scrub tasks configured on your system.

  {{< trueimage src="/images/SCALE/DataProtection/ScrubPoolDialog.png" alt="Scrub Pool Dialog" id="Scrub Pool Dialog" >}}

  **Confirm** activates the **Start Scrub** button.
  {{< /expand >}}

  * {{< expand "Auto TRIM Dialog (Click to expand)" "v" >}}

  The **ZFS Health** widget **Edit Auto TRIM** option opens a dialog to set **Auto TRIM**.

  {{< trueimage src="/images/SCALE/Storage/PoolOptionsAuotTRIM.png" alt="Pool Option Auto TRIM" id="Pool Option Auto TRIM" >}}

  When enabled, **Auto TRIM** allows TrueNAS to periodically review data blocks and identify which empty blocks of obsolete blocks it can delete.
  Leave unselected to incorporate day block overwrites when a device write is started (default).
  Select **Confirm** to activate **Save**.

  For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
  {{< /expand >}}

* {{< expand "Disk Health (Click to expand)" "v" >}}
  The **Disk Health** widget provides information on the health of the disks in a pool.

  The details on the widget include the non-dismissed disk temperature alerts for highest, lowest, and average temperature, and failed S.M.A.R.T. tests.

  {{< trueimage src="/images/SCALE/Storage/StorageDashboardDiskHealthWidget.png" alt="Disk Health Widget" id="Disk Health Widget" >}}

  **Manage Disks** opens the **Storage > [Disk]({{< relref "DisksScreen.md" >}})** screen.

  **View Reports** opens the **Report** screen for the disks in the selected pool.

  **View all S.M.A.R.T. Tests** opens the **Data Protection > S.M.A.R.T. Tests** screen.
  {{< /expand >}}

Each set of pool widgets provides access to screens for disks, datasets, VDEVs, snapshots, quotas, and pool ZFS functions for the pool. 
For example, **Manage Devices** on the **Topology** widget opens the **Devices** screen with the VDEVs configured for only that pool.

### Pool Status

Each widget in the set of four pool widgets includes a color-coded icon just to the right of the header. 
This icon indicates the status of the pool as healthy (green checkmark), offline (orange triangle), or in a warning state (purple warning sign). 

{{< trueimage src="/images/SCALE/Storage/StoragePoolWidgetsDegradedState.png" alt="Pool Status Indications" id="Pool Status Indications" >}}

This same information displays on both the **Storage** widget and a pool widget you can add to the **Dashboard**.

## Upgrade Dialog
The **Upgrade** button displays on the **Storage Dashboard** for existing pools after an upgrade to a new TrueNAS release includes new [OpenZFS feature flags]({{< relref "SCALEReleaseNotes.md#component-versions" >}}).
Newly created pools are always up to date with the OpenZFS feature flags available in the installed TrueNAS release.

{{< include file="/_includes/UpgradePools.md" >}}

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUpgradPoolConfirmation.png" alt="Updgrade Pool Dialog" id="Upgrade Pool Dialog" >}}

The upgrade itself only takes a few seconds and is non-disruptive.
It is not necessary to stop any sharing services to upgrade the pool.
However, it is best to upgrade when the pool is not in heavy use.
The upgrade process suspends I/O for a short period, but is nearly instantaneous on a quiet pool.

## Section Contents

{{< children depth="2" description="true" >}}

{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}
