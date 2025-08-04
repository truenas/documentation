---
title: "Storage"
description: "Provides information on the Storage Dashboard widgets and options for pools, devices, and disks listed on this screen."
geekdocCollapseSection: true
weight: 30 
aliases:
 - /scale/scaleuireference/storage/pools/
 - /scale/scaleclireference/storage/
 - /scale/scaleclireference/storage/clifilesystem-storage/
 - /scale/scaleuireference/storage/storagedashboardscreen/ 
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

After adding pools, the dashboard shows the [pool widgets](#pool-widgets) and additional buttons.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardWithPool.png" alt="Storage Dashboard with Pool" id="Storage Dashboard with Pool" >}}


* {{< expand "Export/Disconnect" "v" >}}
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

* {{< expand "Expand Pool" "v" >}}
Select **Expand Pool** to increase the pool size to match all available disk space.
Users with pools using virtual disks use this option to resize these virtual disks apart from TrueNAS.

{{< trueimage src="/images/SCALE/Storage/ExpandPoolDialog.png" alt="Expand Pool Dialog" id="Expand Pool Dialog" >}}

**Confirm** activates the **Continue** button.
 {{< /expand >}}

* **[Upgrade](#upgrade-dialog)**

## Storage Dashboard Widgets

After adding a pool, the screen displays storage and pool widgets.

The set of four pool widgets and the **Export/Disconnect** and **Expand** buttons show for each pool created on the system.


Each set of pool widgets provides access to screens for disks, datasets, VDEVs, snapshots, quotas, and pool ZFS functions for the pool.
For example, **Manage Devices** on the **Topology** widget opens the **Devices** screen with the VDEVs configured for only that pool.

### Unassigned Disks Widget

The **Unassigned Disks** widget at the top of the **Storage Dashboard** shows when disks are available to add to a new or existing pool.
If the system has disks available and that are associated with exported pools, the **Disks with Exported pools** shows instead.
The number of available disks shows, and the **Add to Pool** button.
The pool with the system dataset, and the state of the pool, shows in the dialog.

**Add to Pool** opens a window with two options:
* **New Pool** 
* **Existing Pool**

**Existing Pool** shows the **Existing Pool** dropdown list of pools on the system.

**Add Disks** opens the **Pool Creation Wizard** when **New Pool** is selected. It opens the **Add VDEVs to Pool** wizard when **Existing Pool** is selected.
The **Storage** link in the breadcrumb at the top of the screen returns you to the **Storage Dashboard** to cancel out of adding to a new or existing pool.

If you attempt to use a disk assigned in an exported pool, a warning message prompts you to select a different disk.

To see information on each disk on the system, click **View Disks** on the **[Disk health](#disk-health-widget)** widget

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUnassignedDisksWidget.png" alt="Unassigned Disks Widget" id="Unassigned Disks Widget" >}}

* {{< expand "Add To Pool Window" "v" >}}
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

### VDEVs Widget

The **VDEVs** widget shows information on the VDEVs configured on the system and the status of the pool.

The widget lists each VDEV type (data, metadata, log, cache, spare, and dedup) assoicated with the pool.
A **Data VDEV** includes the data type (stripe, mirror, RAID, or mixed configuration), the number of disks (**wide**), and the storage capacity of that VDEV.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardVDEVWidget.png" alt="VDEVs Widget" id="VDEVs Widget" >}}

**View VDEVs** opens the **[VDEVs]({{< ref "DevicesScreensSCALE" >}})** screen where you can add or manage existing VDEVs.

#### Status Indicators

Each pool widget includes a color-coded icon just to the right of the header, near the VDEV lists to indicate the state of the pool VDEV, or near disks in the VDEV. Possible states are:
* Green circle with checkmark for a **Healthy** 
* Orange circle with an exclamation mark for **No Redundancy** or **Pool is Unhealthy**
* Red circle with an x for **Pool is not Healthy**

This same information displays on the main **Dashboard** on the **Storage** widget and a pool widget.

### Usage Widget

The **Usage** widget shows information on the pool space datasets consumed and the status of pool usage.

The widget includes a color-coded donut chart that illustrates the percentage of space the pool uses.
Blue indicates space usage in the 0-80% range and red indicates anything above 80%.
A warning message displays below the donut graph when usage exceeds 80%.

**Usable Capacity** details pool space statistics by **Used** and **Available**.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUsageWidget.png" alt="Usage Widget" id="Usage Widget" >}}

**View Disk Reports** opens the pool usage reports for the selected pool.

{{< hint type=note >}}
Large (>1 petabyte) systems could report storage numbers inaccurately.
Storage configurations with more than 9,007,199,254,740,992 bytes round the last 4 digits.
For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

**View Datasets** opens the **[Datasets]({{< ref "/SCALE/SCALEUIReference/Datasets" >}})** screen.

### Storage Health Widget

The **ZFS Health** widget shows health-of-the-pool information.

Possible widget details include:
* Pool status shows the pool status as** Online, no errors** or **Offline**, **Degraded no errors**.
* **Scheduled Scrub** shows the time based on a 24 hour clock and frequency of a schduled scrub (the day the task runs).
* **Auto TRIM** shows the auto trim feature as on or off.
* **Last Scan** shows the date and time of the last completed scrub.
* **Last Scan Errors** shows the number of errors detected during the last scrub.
* **Last Scan Duration** shows the time, in minutes and seconds the last scrub ran.
* **Deduplication Table** only shows if a dedup VDEV is added to the pool. Shows the size of the deduplication table.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardDiskHealthWidget.png" alt="Storage Health Widget" id="Storage Health Widget" >}}

**Scrub Now** opens the **Scrub Pool** dialog. **Start Scrub** in the **Scrub Pool** dialog runs a check on the data integrity of the pool. 

**Configure** opens the **Configure Scheduled Scrub** screen.

**Prune** and **Set Quota** only show if the pool has a dedup VDEV and it contains duplicated files in the pool.

#### Configure Scheduled Scrub Screen

The **Configure Scheduled Scrub** screen sets a schedule for TrueNAS to run a scrub operation.

{{< trueimage src="/images/SCALE/Storage/ConfigureScheduledScrubScreen.png" alt="Configure Scheduled Scrub Screen" id="Configure Scheduled Scrub Screen" >}}

A scrub is a data integrity check of your pool. 
Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.
By default, TrueNAS automatically checks every pool to verify it is on a reoccurring scrub schedule.
If TrueNAS detects problems during the scrub, it corrects them automatically or generates an [alert]({{< ref "AlertSettingsScreen" >}}).

**Enabled** shows the schedule information on the **Storage Health** dashboard as the value for **Scheduled Scrub**.
When disabled, **Scheduled Scrub** changes to **Not Set** and shows the **Schedule** link. **Schedule** opens the **Configure Scheduled Scrub** screen.

**Schedule** shows a dropdown list of schedule options:
* **Hourly** which runs the scrub at the start of each hour.
* **Daily** which runs a scrub at **00:00** on the 24-hour clock.
  This is the time period where system processes and demands are likely at the lowest point, and where it reduces drain on system resources.
* **Weekly** which runs the scrub on Sundays at **00:00** for the same reason as with the **Daily** option.
* **Monthly** which runs on the first day of the mont at **00:00**.
* **Custom** which runs at 12.00 AM, only on Sunday.
** **Create** which opens the custom schedule window where you can select the frequency (how often it runs), time (in hours and minutes), start or finish times, an dset a time zone.

**Threshold Days** sets the days before a completed scrub is allowed  to run again.
This controls the task schedule.
For example, scheduling a scrub to run daily and setting threshold days to *7* means the scrub attempts to run daily.
When the scrub is successful, it continues to check daily but does not run again until *seven* days have elapsed.
Using a multiple of *seven* ensures the scrub always occurs on the same weekday.

**Save** sets the schedule and adds the time and frequency to the **Storage Health** widget.

#### Auto TRIM Dialog

The **Edit Auto TRIM** option on the **ZFS Health** widget opens a dialog to set **Auto TRIM**.

{{< trueimage src="/images/SCALE/Storage/PoolOptionsAuotTRIM.png" alt="Pool Option Auto TRIM" id="Pool Option Auto TRIM" >}}

When enabled, **Auto TRIM** allows TrueNAS to periodically review data blocks and identify which empty blocks of obsolete blocks it can delete.
Leave unselected to incorporate day block overwrites when a device write is started (default).
Select **Confirm** to activate **Save**.

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).

#### Prune Deduplication Table Dialog

The **Prune Deduplication Table** dialog shows pruning measurement options the system should use when pruning the deduplication table (DDT).
Options are **Percentage** and **Age**.

**Percentage** shows a slider to set the size (maximum amount of storage) percentage threshold the DDT is filled before it reaches the maximum size.
 When reached the system prunes the table. 

 {{< trueimage src="/images/SCALE/Storage/DedupPruneDialog.png" alt="Prune Deduplication Table - Percentage" id="Prune Deduplication Table - Percentage" >}}

**Age** shows the **Age (in days)** field where you enter the number of days between pruning processes the system waits before automatically pruning the DDT.

 {{< trueimage src="/images/SCALE/Storage/DedupPruneDialogAge.png" alt="Prune Deduplication Table - Age" id="Prune Deduplication Table - Age" >}}

#### Deduplication Qutoa Dialog

The **Deduplication Quota for *poolname*** shows the **Quota** dropdown list with three options for setting the maximum size limit the deduplication table can reach.

**Auto** is the default option, which allows the system to set the quota and the size of a dedicated dedup VDEV.
This property works for both legacy and fast dedup tables.

{{< trueimage src="/images/SCALE/Storage/DedupQutoaDialog.png" alt="Deduplication Qutoa for Pool Dialog" id="Prune Deduplication Table Dialog" >}}

**Custom** shows the **Custom Qutoa** field where you enter the maximum size of the DDT (quota).

{{< trueimage src="/images/SCALE/Storage/DedupQutoaDialogCustom.png" alt="Deduplication Qutoa for Pool - Custom" id="Prune Deduplication Table - Custom" >}}

**None** disables the quota.

### Disk Health Widget

The **Disk Health** widget shows information on the health of the disks in a pool.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardDiskHealthWidget.png" alt="Disk Health Widget" id="Disk Health Widget" >}}

The disk health details include:
* Disk temperature related alerts
* Highest Temperature
* Lowest Temperature 
* Average Disk Temperature

TrueNAS complies with SAS/SATA specifications, and reports temperatures in Celsius. TrueNAS converts Kelvin to Celsius

**View Disks** opens the **Storage > [Disk]({{< ref "DisksScreen" >}})** screen.

**View Reports** opens the **Report** screen for the disks in the selected pool.

## Upgrade Dialog

The **Storage Dashboard** shows the **Upgrade** button for existing pools after an upgrade to a new TrueNAS release that includes new [OpenZFS feature flags]({{< ref "SCALEReleaseNotes.md#component-versions" >}}).
Newly created pools are always up-to-date with the OpenZFS feature flags in the installed TrueNAS release.

{{< include file="/static/includes/UpgradePools.md" >}}

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUpgradPoolConfirmation.png" alt="Upgrade Pool Dialog" id="Upgrade Pool Dialog" >}}

The upgrading only takes a few seconds and is non-disruptive. However, it is best to upgrade when the pool is not in heavy use.

The upgrade process suspends I/O for a short period but is nearly instantaneous on a quiet pool.

It is not necessary to stop any sharing services to upgrade the pool.

<div class="noprint">

## Section Contents

{{< children depth="2" description="true" >}}

</div>
