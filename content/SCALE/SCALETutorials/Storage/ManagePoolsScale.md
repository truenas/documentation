---
title: "Managing Pools"
description: "Provides instructions on managing storage pools, VDEVs, and disks in TrueNAS."
weight: 40
aliases:
 - /scale/scaletutorials/storage/pools/managepoolsscale/
 - /scale/scaleuireference/dataprotection/scrubtasksscreensscale/
 - /scale/scaletutorials/dataprotection/scrubtasksscale/
tags: 
- pools
- storage
- disks
keywords:
- nas storage software
- enterprise data storage solutions
- nas data storage
- storage provisioning
---

The **Storage Dashboard** widgets provide enhanced storage provisioning capabilities and access to pool management options to keep the pool and disks healthy, upgrade pools and VDEVs, open datasets, snapshots, and data protection screens.
This article provides instructions on pool management functions available in the TrueNAS UI.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardWithPool.png" alt="Storage Dashboard with Pool" id="Storage Dashboard with Pool" >}}

## Setting Up Auto TRIM

Select **Storage** on the main navigation panel to open the **Storage Dashboard**.
Locate the **Storage Health** widget for the pool, then click the **Edit Auto TRIM**. The **Pool Options for *poolname*** dialog opens.

{{< trueimage src="/images/SCALE/Storage/PoolOptionsAuotTRIM.png" alt="Pool Edit Auto TRIM Dialog" id="Pool Edit Auto TRIM Dialog" >}}

Select **Auto TRIM**.

Click **Save**.

With **Auto TRIM** selected and active, TrueNAS periodically checks the pool disks for storage blocks it can reclaim.
Auto TRIM can impact pool performance, so the default setting is disabled.

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).

## Exporting/Disconnecting or Deleting a Pool

Use the **Export/Disconnect** button to disconnect a pool and transfer drives to a new system where you can import the pool.
It also lets you completely delete the pool and any data stored on it.

Click on **Export/Disconnect** on the **Storage Dashboard**.

{{< trueimage src="/images/SCALE/Storage/ExportDisconnectPoolWindow.png" alt="Export/Disconnect Pool Window" id="Export/Disconnect Pool Window" >}}

A dialog displays showing any system services affected by exporting the pool, and options based on services configured on the system.

To delete the pool and erase all the data on the pool, select **Destroy data on this pool**.
The pool name field displays at the bottom of the window. Type the pool name into this field. To export the pool, do not select this option.

Select **Delete saved configurations from TrueNAS?** to delete shares and saved configurations on this pool.

Select **Confirm Export/Disconnect**

Click **Export/Disconnect**. A confirmation dialog displays when the export/disconnect completes.

## Upgrading a Pool

Upgrading a storage pool is typically not required unless the new OpenZFS feature flags are deemed necessary for required or improved system operation.

Do not do a pool-wide ZFS upgrade until you are ready to commit to this TrueNAS major version! You can not undo a pool upgrade, and you lose the ability to roll back to an earlier major version!

The **Upgrade** button displays on the **Storage Dashboard** for existing pools after an upgrade to a new TrueNAS major version that includes new [OpenZFS feature flags]({{< ref "SCALEReleaseNotes.md#component-versions" >}}).
Newly created pools are always up to date with the OpenZFS feature flags available in the installed TrueNAS version.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUpgradPoolConfirmationDialog.png" alt="Upgrade Pool Confirmation Dialog" id="Upgrade Pool Confirmation Dialog" >}}

Upgrading pools only takes a few seconds and is non-disruptive.
However, the best practice is to upgrade a pool while it is not in heavy use.
The upgrade process suspends I/O for a short period but is nearly instantaneous on a quiet pool.

It is not necessary to stop sharing services to upgrade the pool.

## Running a Pool Data Integrity Check (Scrub)

Use **Scrub Now** on the **Storage Health** pool widget to start a pool data integrity check.

{{< trueimage src="/images/SCALE/Storage/StorageHealthWidget.png" alt="Storage Health Widget" id="Storage Health Widget" >}}

Click **Scrub Now** to open the **Scrub Pool** dialog, then click **Start Scrub** to begin the process.

If TrueNAS detects problems during the scrub operation, it either corrects them or generates an [alert]({{< ref "/SCALE/SCALEUIReference/TopToolbar/Alerts" >}}) in the web interface.

{{< hint type=note >}}
A scrub is a data integrity check of your pool. Scrubs identify data integrity problems, detect silent data corruptions caused by transient hardware issues, and provide early disk failure alerts.
{{< /hint >}}

### Scheduling Scrub Tasks

TrueNAS automatically creates a scheduled scrub for each pool that runs every Sunday at 12:00 AM.

The **Storage Health** widget shows the scheduled scrub status:

* **Scheduled Scrub: None Set** with a **Schedule** link if no scrub task exists
* **Scheduled Scrub: [when]** with a **Configure** link if a scrub task is configured and enabled

Click **Schedule** to create a new scrub schedule or **Configure** to modify an existing schedule. This opens the **Configure Scheduled Scrub** screen, where you can set the schedule, number of threshold days, and enable or disable the scheduled scrub.

**Threshold Days** sets the days before a completed scrub can run again.
This controls the task schedule.
For example, scheduling a scrub to run daily and setting threshold days to *7* means the scrub attempts to run daily.
When the scrub is successful, TrueNAS continues to check daily but does not run again until *seven* days have elapsed.
Using a multiple of *seven* ensures the scrub always occurs on the same weekday.

{{< hint type=note >}}
Starting in TrueNAS 25.10, resilver priority settings are now located in **System Settings > Advanced Settings** on the **Storage** widget.
{{< /hint >}}

## Managing Pool Disks

The **Disks** button on the **Storage Dashboard** screen and the **View Disks** button on the **Disk Health** widget open the **Disks** screen.

**View VDEVs** on the **VDEVs** widget opens the ***Poolname* VDEVs** screen.
To manage disks in a pool, click on the VDEV to expand it and show the disks in that VDEV.
Click on a disk to see the widgets for that disk.
You can take a disk offline, detach it, replace it, manage the SED encryption password, and perform other disk management tasks from this screen.

See [Replacing Disks]({{< ref "ReplacingDisks" >}}) for more information on the **Offline**, **Replace** and **Online** options.

## Expanding a Pool

There are a few ways to increase the size of an existing pool:

* Add one or more drives to an existing RAIDZ VDEV.
* Add a new VDEV of the same type.
* Add a new VDEV of a different type.
* Replace all existing disks in the VDEV with larger disks.

Adding a new special VDEV increases usable space in combination with a special_small_files VDEV, but it is not encouraged.  
A VDEV limits all disks to the usable capacity of the smallest attached device.  

When you use one of the above methods, TrueNAS does not automatically expand the pool to fit newly available space.  

{{< trueimage src="/images/SCALE/Storage/ExpandPoolDialog.png" alt="Expand Pool Dialog" id="Expand Pool Dialog" >}}

To expand an existing pool:

1. Navigate to **Storage** and click **Expand Pool** above the **Usage** widget.  
2. Select **Confirm** in the **Expand Pool** pop-up screen.  
3. Click **Continue** to initiate the pool expansion process.  

TrueNAS expands the pool to use the additional available capacity.

### Extending a RAIDZ VDEV

Extend a RAIDZ VDEV to add additional disks one at a time, expanding capacity incrementally.
This is useful for small pools (typically with only one RAID-Z VDEV), where there is not enough hardware capacity to add a second VDEV, doubling the number of disks.

{{< expand "Overview and Considerations" "v" >}}
TrueNAS RAIDZ extensions to allow incremental expansion of an existing RAIDZ VDEV using one more disk.
RAIDZ extension allows resource- or hardware-limited home lab and small enterprise users to expand storage capacity with lower upfront costs compared to traditional ZFS expansion methods.

To expand a RAIDZ array, TrueNAS reads data from the current disks and rewrites it onto the new configuration, including any additional disks.

Data redundancy is maintained.
Make sure the pool is healthy before beginning the expansion process.
If a disk fails mid-expansion, the process pauses until the RAIDZ virtual device (vdev) is healthy again, typically by replacing the failed disk and waiting for the system to rebuild.

The storage pool remains accessible throughout the expansion.
If you restart or export/import the pool, the expansion resumes from where it left off.

After the expansion, the extra space becomes available for use.

The fault-tolerance level of the RAIDZ array remains unchanged.
For example, a four-disk-wide RAIDZ2 expanded to a six-disk-wide RAIDZ2 still cannot lose more than two disks at a time.

You can expand a RAIDZ vdev multiple times.

Existing data blocks retain their original data-to-parity ratio and block width, but are spread across the larger set of disks.
New data blocks adopt the new data-to-parity ratio and width.
Because of this overhead, an extended RAIDZ VDEV can report a lower total capacity than a freshly created VDEV with the same number of disks.

{{< trueimage src="/images/Reference/RaidzExpansion.png" alt="RAIDZ Expansion" id="RAIDZ Expansion" caption="Before (left) and after (right) expansion of a four-disk to five-disk RAIDZ1<br>Thanks to Matt Ahrens ([Source](https://arstechnica.com/gadgets/2021/06/raidz-expansion-code-lands-in-openzfs-master/))" >}}

Extended VDEVs recover lost headroom because existing data is read and rewritten to the new parity ratio.
This can occur naturally over the lifetime of the pool as you modify or delete data.
Replicate and rewrite the data to the extended pool to manually recover capacity.

You can use the [RAIDZ Extension Calculator]({{< ref "/References/ExtensionCalculator" >}}) to visualize potential lost headroom and capacity available to recover by rewriting existing data.

{{< include file="/static/includes/ExpandedVdevReporting.md" >}}

For more information, see [Jim Salter's article](https://arstechnica.com/gadgets/2021/06/raidz-expansion-code-lands-in-openzfs-master/) at Ars Technica and the upstream [RAIDZ extension](https://github.com/openzfs/zfs/pull/15022) PR, sponsored by iXsystems, at OpenZFS.
See also ["ZFS RAIDZ Expansion Is Awesome but Has a Small Caveat"](https://louwrentius.com/zfs-raidz-expansion-is-awesome-but-has-a-small-caveat.html) by Louwrentius for an in-depth discussion of lost capacity and recovering overhead.
{{< /expand >}}

To extend a RAIDZ VDEV, go to **Storage**.
Locate the pool and click **View VDEVs** on the **VDEVs** widget to open the ***Poolname* VDEVs** screen.

{{< trueimage src="/images/SCALE/Storage/DevicesMirrorVDEVSelected.png" alt="Devices Screen" id="Devices Screen" >}}

Select the target VDEV and click **Extend** to open the **Extend Vdev** window.

{{< trueimage src="/images/SCALE/Storage/ExtendVdev.png" alt="Extend Vdev" id="Extend Vdev" >}}

Select an available disk from the **New Disk** dropdown menu.
Click **Extend**.

A job progress window opens.
TrueNAS returns to the ***Poolname* VDEVs** screen when complete.

### Adding a VDEV to a Pool

ZFS supports adding VDEVs to an existing ZFS pool to increase the capacity or performance of the pool.
To extend a pool by mirroring, you must add a data VDEV of the same type as existing VDEVs.

{{< hint type=tip >}}
You cannot change the original encryption or data VDEV configuration.
{{< /hint >}}

{{< expand "Adding VDEV Examples" "v" >}}

* To make a striped mirror, add the same number of drives to extend a ZFS mirror.
  For example, you start with ten available drives. Create a mirror of two drives, then extend the mirror by adding another mirror of two drives. Repeat this three more times until you add all ten drives.
* To make a stripe of two 3-drive RAIDZ1 VDEVs (similar to RAID 50 on a hardware controller), add another three drives as a new RAIDZ1 VDEV to the existing single 3-drive RAIDZ1 VDEV pool.
* To make a stripe of two 6-disk RAIDZ2 VDEVs (similar to RAID 60 on a hardware controller), add another six drives as a new RAIDZ2 VDEV to the existing single 6-drive RAIDZ2 VDEV pool.
* To add a deduplication VDEV, we suggest creating the VDEV when you first create the pool to ensure that all metadata or deduplication tables are stored on it.
  Special or deduplication VDEVs added to a pool with existing data are only populated with new writes.
{{< /expand >}}

To add a VDEV to an existing pool, you can:
* Click **Add To Pool** to open the **Add To Pool** window, and select **Existing Pool**. Select the pool on the **Existing Pool** dropdown.

  {{< trueimage src="/images/SCALE/Storage/AddToPoolExistingPoolWindow.png" alt="Add To Pool - Existing Pool" id="Add To Pool - Existing Pool" >}}

* Click **View VDEVs** on the **VDEVs** widget to open the ***Poolname* VDEVs** screen, then click **Add VDEV** to open the **Add Vdevs to Pool** wizard.

  {{< trueimage src="/images/SCALE/Storage/AddVdevsToPoolScreen.png" alt="Add VDEVs to Pool Wizard" id="Add VDEVs to Pool Screen" >}}

Adding a vdev to an existing pool follows the same process as documented in [Create Pool]({{< ref "CreatePoolWizard" >}}).
Click on the type of vdev you want to add. For example, to add a spare, click on **Spare** to show the vdev spare options.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolSpareScreen.png" alt="Add VDEVs to Pool Spare Example" id="Add VDEVs to Pool Spare Example" >}}

Select the layout, mirror, or stripe.

Select the disk size to use the **Automated Disk Selection** option. The **Width** and **Number of VDEVs** fields populate with default values based on the layout and disk size selected. To change this, select new values from the dropdown lists.

{{< expand "Adding a VDEV Manually" "v" >}}
To add the vdev manually, click **Manual Disk Selection** to open the **Manual Selection** screen.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolManualSelectionScreen.png" alt="Add Vdev Manual Selection Screen" id="Add Vdev Manual Selection Screen" >}}

Click **Add** to show the vdev options available for the vdev type.
The example image shows adding a stripe vdev for the spare.
Vdev options are limited by the number of available disks in your system and the configuration of any existing vdevs of that type in the pool.
Drag the disk icon to the stripe vdev, then click **Save Selection**.

{{< trueimage src="/images/SCALE/Storage/ManualSelectionAddVdevAddDisk.png" alt="Add Disk to Stripe Vdev for Spare" id="Add Disk to Stripe Vdev for Spare" >}}

The **Manual Selection** screen closes and returns to the **Add Vdev to Pool** wizard screen (in this case, the Spare option.)

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolSpareWithVdevAdded.png" alt="Add Vdev to Pool Spare with Vdev Added" id="Add Vdev to Pool Spare with Vdev Added" >}}

{{< /expand >}}
You can accept the change or click **Edit Manual Disk Selection** to change the disk added to the strip vdev for the spare, or click **Reset Step** to clear the strip vdev from the spare completely.
Click either **Next** or a numbered item to add another type of vdev to this pool.

Repeat the same process above for each type of vdev to add.

Click **Save and Go to Review** to show the **Review** screen when ready to save your changes.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolReviewScreen.png" alt="Add Vdev to Pool Review Screen" id="Add Vdev to Pool Review Screen" >}}

To make changes, click either **Back** or the vdev option (i.e., **Log**, **Cache**, etc.) to return to the settings for that vdev.
To clear all changes, click **Start Over**.
Select **Confirm**, then click **Start Over** to clear all changes.

Click **Update Pool** to save changes.

#### Adding a Deduplication VDEV

You can add a deduplication VDEV to an existing pool, but files in the pool might or might not have deduplication applied to them.
When adding a deduplication VDEV to an existing pool, any existing entries in the deduplication table remain on the data VDEVs until the data they reference is rewritten.

After adding a deduplication VDEV to a pool, and when adding duplicated files to the pool, the **Storage Health** widget on the **Storage Dashboard** shows two links, **Prune** and **Set Quota**. These links do not show if duplicated files do not exist in the pool.

Use **Prune** to set the parameters used to prune the deduplication table (DDT). When pruning the size, select the percentage or age measurement to use.

{{< trueimage src="/images/SCALE/Storage/DedupPruneDialog.png" alt="Prune Deduplication Table Dialog" id="Prune Deduplication Table Dialog" >}}

Use **Set Quota** to set the DDT quota. This determines the maximum table size allowed.
The default setting, **Auto**, allows the system to determine the quota based on the size of a dedicated dedup vdev when setting the quota limit.
This property works for both legacy and fast dedup tables.

{{< trueimage src="/images/SCALE/Storage/DedupQutoaDialog.png" alt="Deduplication Quota Dialog" id="Deduplication Quota Dialog" >}}

Change to **Custom** to set the quota to your preference.

Click **Save** to save and close the dialogs.

### Replacing Disks to Expand a Pool

To expand a pool by replacing disks with a higher-capacity disk, follow the same procedure as in [Replacing Disks]({{< ref "ReplacingDisks" >}}).

Insert a new disk into an empty enclosure slot. Remove the old disk only after completing the replacement operation.
If an empty slot is unavailable, you can off-line the existing disk and replace it in the same slot, but this reduces redundancy during the process.

Go to the **Storage Dashboard** and click **View VDEVs** on the **VDEVs** widget opens the ***Poolname* VDEVs** screen.

1. Click anywhere on the VDEV to expand it and select one of the existing disks.

2. (Optional) If replacing disks in the same slot, take one existing disk offline.

   {{< trueimage src="/images/SCALE/Storage/DevicesDiskWidgets.png" alt="Devices Disk Widgets" id="Devices Disk Widgets" >}}

   Click **Offline** on the **ZFS Info** widget to take the disk offline. The button toggles to **Online**.

   Remove the disk from the system.

3. Insert a larger capacity disk into an open enclosure slot (or if no empty slots, the slot of the offline disk being replaced).

   {{< trueimage src="/images/SCALE/Storage/ReplaceDiskAndOnline.png" alt="Replace and Online a Disk" id="Replace and Online a Disk" >}}

   a. Click **Replace** on the **Disk Info** widget on the ***Poolname* Devices** screen for the disk you off-lined.

   b. Select the new drive from the **Member Disk** dropdown list on the **Replacing disk *diskname*** dialog.

   {{< trueimage src="/images/SCALE/Storage/ReplacingDiskDialog.png" alt="Replacing Disk Dialog" id="Replacing Disk Dialog" >}}

4. Add the new disk to the existing VDEV. Click **Replace Disk** to add the new disk to the VDEV and bring it online.

   Disk replacement fails when the selected disk has partitions or data present.
   To destroy any data on the replacement disk and allow the replacement to continue, select the **Force** option.

   {{< trueimage src="/images/SCALE/Storage/ReplacingDiskStatusDialog.png" alt="Replacing Disk Status" id="Replacing Disk Status" >}}

   After the disk wipe completes, TrueNAS starts replacing the failed disk.
   TrueNAS resilvers the pool during the replacement process.
   This can take a long time for pools with large amounts of data.
   When the resilver process completes, the pool status returns to **Online** status on the ***Poolname* Devices** screen.

Wait for the resilver to complete before replacing the next disk.
Repeat steps 1-4 for all attached disks.

After replacing the last attached disk, click **Expand** on the **Storage Dashboard** to increase the pool size to fit all available disk space.

## Removing VDEVs

You can always remove the L2ARC (cache) and SLOG (log) VDEVs from an existing pool, regardless of topology or VDEV type.
Removing these devices does not impact data integrity but can significantly impact read and write performance.

In addition, you can remove a data VDEV from an existing pool under specific circumstances.
This process preserves data integrity but has multiple requirements:

* The pool must be upgraded to a ZFS version with the `device_removal` feature flag.
  The system shows the [**Upgrade** button](#upgrading-a-pool) after upgrading TrueNAS when new ZFS feature flags are available.
* All top-level VDEVs in the pool must be *only* mirrors or stripes.
* Special VDEVs cannot be removed when RAIDZ data VDEVs are present.
* All top-level VDEVs in the pool must use the same basic allocation unit size (`ashift`).
* The remaining data VDEVs must contain sufficient free space to hold all data from the removed VDEV.

It is generally not possible to remove a device when a RAIDZ data VDEV is present.

To remove a VDEV from a pool:

1. Click ***View VDEVs** on the **VDEVs** widget opens the ***Poolname* VDEVs** screen.
2. Click the device or drive to remove, then click the **Remove** button in the **ZFS Info** widget.
   If the **Remove** button is not visible, check that all conditions for VDEV removal listed above are correct.
3. Confirm the removal operation and click the **Remove** button.

The VDEV removal process status shows in the [**Jobs** screen]({{< ref "JobsScreens" >}}) (or alternately with the `zpool status` command).
Avoid physically removing or attempting to wipe the disks until the removal operation completes.
