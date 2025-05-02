---
title: "Storage"
description: "Provides information on the Storage Dashboard widgets and options for pools, devices, and disks listed on this screen."
geekdocCollapseSection: true
weight: 30 
tags:
- pools
- storage
- scrub
- storage provisioning
---

The **Storage Dashboard** screen allows users to configure and manage storage resources such as pools (VDEVs) and disks. 
The dashboard widgets organize functions related to storage resources.

## No Pools Screen
The **No Pools** screen displays before you add the first pool.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardNoPools.png" alt="Storage Dashboard without Pools" id="Storage Dashboard without Pools" >}}

The **Create Pool** button in the center of the screen opens the **[Pool Creation Wizard]({{< ref "PoolCreateWizardScreens" >}})** screen.

## Storage Dashboard
The buttons at the top right of the **Storage Dashboard** screen provide access to pool and disk functions:

* {{< expand "Import Pool" "v" >}}

**Import Pool** opens the **Import Pool** screen.

{{< trueimage src="/images/SCALE/Storage/ImportPoolScreen.png" alt="Import Pool Screen" id="Import Pool Screen" >}}

Select a pool from the **Pool** dropdown list.
These are ZFS storage pools previously created and stored on disks connected to the TrueNAS system.
TrueNAS detects these as present on the system but not yet connected in TrueNAS.

**Import** starts connecting the pool and bringing it into TrueNAS.
 {{< /expand >}}

* **Disks** opens the **[Disks]({{< ref "DisksScreen" >}})** screen.
* **Create Pool** opens the **[Pool Creation Wizard]({{< ref "PoolCreateWizardScreens" >}})**.

After adding pools, the dashboard shows [storage widgets](#storage-dashboard-widgets) and two more buttons.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardWithPool.png" alt="Storage Dashboard with Pool" id="Storage Dashboard with Pool" >}}

{{< expand "Export/Disconnect" "v" >}}
**Export/Disconnect** opens the **Export/disconnect pool: *poolname*** window where users can export, disconnect, or delete a pool.

The **Export/disconnect pool** window includes a warning stating data becomes unavailable after export and that selecting **Destroy Data on this pool** destroys data on the pool disks.

{{< hint type=important >}}
Exporting/disconnecting can be a destructive process!
Back up all data before performing this operation. You might not be able to recover data lost through this operation.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Storage/ExportDisconnectPoolWindow.png" alt="Export/Disconnect Pool Window" id="Export/Disconnect Pool Window" >}}

This window displays the share type (i.e., SMB share, etc.) affected by the export/disconnect operation if a share uses the pool.

Disks in an exported pool become available to use in a new pool but remain marked as used by an exported pool.
If you select a disk used by an exported pool for use in a new pool, the system displays a warning message about the disk.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Destroy data on this pool?** | Select to erase all data on the pool. A field displays where you enter the pool name to confirm the operation before the **Export/Disconnect** button activates. |
| **Delete configuration of shares that use this pool** | Enabled by default to remove the share connection to this pool. Exporting or disconnecting the pool deletes the configuration of shares using this pool. You must reconfigure the shares affected by this operation. |
| **Confirm Export/Disconnect** | (Required) Select to confirm the operation and accept the warnings displayed. Activates the **Export/Disconnect** button. |
{{< /truetable >}}

**Export/Disconnect** executes the process and begins the pool export or disconnect.
A status window shows progress. When complete, a final dialog states the export/disconnect completed successfully.
 {{< /expand >}}

{{< expand "Expand Pool" "v" >}}
Select **Expand Pool** to increase the pool size to match all available disk space.
Users with pools using virtual disks use this option to resize these virtual disks apart from TrueNAS.

{{< trueimage src="/images/SCALE/Storage/ExpandPoolDialog.png" alt="Expand Pool Dialog" id="Expand Pool Dialog" >}}

**Confirm** activates the **Continue** button.
 {{< /expand >}}

## Storage Dashboard Widgets
After adding a pool, the screen displays storage widgets.
The same set of four widgets and the **Export/Disconnect** and **Expand** buttons display for each pool created on the system.
The **Unassigned Disks** widget at the top of the **Storage Dashboard** only shows when disks are available to add to a new or existing pool.

Each set of pool widgets provides access to screens for disks, datasets, VDEVs, snapshots, quotas, and pool ZFS functions for the pool.
For example, **Manage Devices** on the **Topology** widget opens the **Devices** screen with the VDEVs configured for only that pool.

### Unassigned Disks Widget
The **Unassigned Disks** widget displays the number of disks available on your system to use in pools.
The disk count includes disks assigned in an exported pool.
If you attempt to use a disk assigned in an exported pool, a warning message prompts you to select a different disk.

To see information on each disk on the system, click **Manage Disks** on the **[Disk health](#disk-health-widget)** widget

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUnassignedDisksWidget.png" alt="Unassigned Disks Widget" id="Unassigned Disks Widget" >}}

{{< expand "Add To Pool Window" "v" >}}
**Add to Pool** on the **Unassigned Disks** widget opens the **Add to Pool** window.
It displays the number of unassigned disks and provides the option to assign these disks to a new or existing pool.

{{< trueimage src="/images/SCALE/Storage/AddToPoolWindow.png" alt="Add To Pool" id="Add To Pool New Pool" >}}

The **Add To Pool** window has three radio buttons:

* **New Pool** opens the **Pool Creation Wizard**.
* **Existing Pool** shows the **Existing Pool** dropdown list of available pool options.
* **Existing Pool (Legacy)** adds the **Existing Pool** dropdown list of available pool options.

{{< trueimage src="/images/SCALE/Storage/AddToPoolExistingPool.png" alt="Add To Existing Pool" id="Add To Existing Pool" >}}

{{< trueimage src="/images/SCALE/Storage/AddToPoolExistingPoolLegacy.png" alt="Add To Existing Pool (Legacy)" id="Add To Existing Pool (Legacy)" >}}

**Add Disks** opens the **Pool Manager** screen if the existing pool was created with the **Pool Manager**, otherwise it opens the **Pool Creation Wizard**.
If you select **New Pool**, **Add Disks** opens the **Pool Creation Wizard** screen.
 {{< /expand >}}

### Topology Widget
The **Topology** widget shows information on the VDEVs configured on the system and the status of the pool.

The widget lists each VDEV type (data, metadata, log, cache, spare, and dedup).
A **Data VDEV** includes the data type (stripe, mirror, RAID, or mixed configuration), the number of disks (**wide**), and the storage capacity of that VDEV.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardTopologyWidget.png" alt="Topology Widget" id="Topology Widget" >}}

**Manage Devices** opens the **[Devices]({{< ref "DevicesScreensSCALE" >}})** screen where you can add or manage existing VDEVs.

### Usage Widget
The **Usage** widget shows information on the pool space datasets consumed and the status of pool usage.

The widget includes a color-coded donut chart that illustrates the percentage of space the pool uses.
Blue indicates space usage in the 0-80% range and red indicates anything above 80%.
A warning message displays below the donut graph when usage exceeds 80%.

**Usable Capacity** details pool space statistics by **Used**, **Available**, and **Used by Snapshots**.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUsageWidget.png" alt="Usage Widget" id="Usage Widget" >}}

**View Disk Space Reports** opens the pool usage reports for the selected pool.

{{< hint type=note >}}
Large (>1 petabyte) systems could report storage numbers inaccurately.
Storage configurations with more than 9,007,199,254,740,992 bytes round the last 4 digits.
For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

**Manage Datasets** opens the **[Datasets]({{< ref "/SCALEUIReference/Datasets/" >}})** screen.

### ZFS Health Widget
The **ZFS Health** widget shows health-of-the-pool information.

 Widget details include:
* **Pool Status** shows the pool status as online or offline.
* **Total ZFS Errors** shows the number of ZFS errors detected for this pool.
* **Scheduled Scrub Task** shows the status of the next scrub task as set or not.
* **Auto TRIM** shows the auto trim feature as on or off.
* **Last Scan** shows the date and time of the last completed scrub.
* **Last Scan Errors** shows the number of errors detected during the last scrub.
* **Last Scan Duration** shows the time, in minutes and seconds the last scrub ran.
* **Deduplication Table** shows the size of the deduplication table only if a dedup VDEV is added to the pool.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardZFSHealthWidgetWithDedup.png" alt="ZFS Health Widget" id="ZFS Health Widget" >}}

**Scrub** opens the **Scrub Pool** dialog. Run a check on the data integrity of the pool from this dialog.

**View all Scrub Tasks** opens the **[Data Protections > Scrub Tasks]({{< ref "ScrubTasksScreensSCALE" >}})** details screen.
This lists all scheduled scrub tasks and allows you to add a new or edit an existing task.

**Prune** and **Set Quota** only show if the pool has a dedup VDEV and it contains duplicated files in the pool.

{{< expand "Scrub Pool Dialog" "v" >}}
The **Scrub Pool** dialog allows you to run an unscheduled scrub task.
If TrueNAS detects problems during the scrub, it either corrects them automatically or generates an [alert]({{< ref "AlertSettingsScreen" >}}) in the web interface.

By default, TrueNAS automatically checks every pool to verify it is on a reoccurring scrub schedule.

To schedule a single or a regular pool scrub operation, click **View All Scrub Tasks** to open the **Data Protections > Scrub Tasks** details screen and add or manage scrub tasks configured on your system.

{{< trueimage src="/images/SCALE/DataProtection/ScrubPoolDialog.png" alt="Scrub Pool Dialog" id="Scrub Pool Dialog" >}}

**Confirm** activates the **Start Scrub** button.
 {{< /expand >}}

{{< expand "Auto TRIM Dialog" "v" >}}
The **Edit Auto TRIM** option on the **ZFS Health** widget opens a dialog to set **Auto TRIM**.

{{< trueimage src="/images/SCALE/Storage/PoolOptionsAuotTRIM.png" alt="Pool Option Auto TRIM" id="Pool Option Auto TRIM" >}}

When enabled, **Auto TRIM** allows TrueNAS to periodically review data blocks and identify which empty blocks of obsolete blocks it can delete.
Leave unselected to incorporate day block overwrites when a device write is started (default).
Select **Confirm** to activate **Save**.

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
 {{< /expand >}}

{{< expand "Prune Deduplication Table Dialog" "v" >}}
The **Prune Deduplication Table** dialog shows pruning measurement options the system should use when pruning the deduplication table (DDT).
Options are **Percentage** and **Age**.

**Percentage** shows a slider to set the size (maximum amount of storage) percentage threshold the DDT is filled before it reaches the maximum size.
 When reached the system prunes the table. 

 {{< trueimage src="/images/SCALE/Storage/DedupPruneDialog.png" alt="Prune Deduplication Table - Percentage" id="Prune Deduplication Table - Percentage" >}}

**Age** shows the **Age (in days)** field where you enter the number of days between pruning processes the system waits before automatically pruning the DDT.

 {{< trueimage src="/images/SCALE/Storage/DedupPruneDialogAge.png" alt="Prune Deduplication Table - Age" id="Prune Deduplication Table - Age" >}}

{{< /expand >}}

{{< expand "Deduplication Qutoa Dialog" "v" >}}
The **Deduplication Quota for *poolname*** shows the **Quota** dropdown list with three options for setting the maximum size limit the deduplication table can reach.

**Auto** is the default option, which allows the system to set the quota and the size of a dedicated dedup VDEV.
This property works for both legacy and fast dedup tables.

{{< trueimage src="/images/SCALE/Storage/DedupQutoaDialog.png" alt="Deduplication Qutoa for Pool Dialog" id="Prune Deduplication Table Dialog" >}}

**Custom** shows the **Custom Qutoa** field where you enter the maximum size of the DDT (quota).

{{< trueimage src="/images/SCALE/Storage/DedupQutoaDialogCustom.png" alt="Deduplication Qutoa for Pool - Custom" id="Prune Deduplication Table - Custom" >}}

**None** disables the quota.
{{< /expand >}}

### Disk Health Widget
The **Disk Health** widget shows information on the health of the disks in a pool.
The details on the widget include the non-dismissed disk temperature alerts for highest, lowest, and average temperatures.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardDiskHealthWidget.png" alt="Disk Health Widget" id="Disk Health Widget" >}}

**Manage Disks** opens the **Storage > [Disk]({{< ref "DisksScreen" >}})** screen.

**View Reports** opens the **Report** screen for the disks in the selected pool.

**View all S.M.A.R.T. Tests** opens the **Data Protection > S.M.A.R.T. Tests** screen.

### Pool Status Indicator
Each pool widget includes a color-coded icon just to the right of the header.
This icon indicates the status of the pool as healthy (green checkmark), offline (orange triangle), or in a warning state (purple warning sign).

{{< trueimage src="/images/SCALE/Storage/StoragePoolWidgetsDegradedState.png" alt="Pool Status Indications" id="Pool Status Indications" >}}

This same information displays on both the **Storage** widget and a pool widget you can add to the **Dashboard**.

## Upgrade Dialog
The **Storage Dashboard** shows the **Upgrade** button for existing pools after an upgrade to a new TrueNAS release that includes new [OpenZFS feature flags]({{< ref "SCALEReleaseNotes.md#component-versions" >}}).
Newly created pools are always up-to-date with the OpenZFS feature flags in the installed TrueNAS release.

{{< include file="/static/includes/UpgradePools.md" >}}

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUpgradPoolConfirmation.png" alt="Upgrade Pool Dialog" id="Upgrade Pool Dialog" >}}

The upgrade itself only takes a few seconds and is non-disruptive.
It is not necessary to stop any sharing services to upgrade the pool.
However, it is best to upgrade when the pool is not in heavy use.
The upgrade process suspends I/O for a short period but is nearly instantaneous on a quiet pool.

<div class="noprint">

## Section Contents

{{< children depth="2" description="true" >}}

</div>
