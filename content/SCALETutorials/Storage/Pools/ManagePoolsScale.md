---
title: "Managing Pools"
description: "Provides instructions on managing storage pools, VDEVS and disks in TrueNAS SCALE."
weight: 20
aliases: 
tag: 
- scalepools
- scalestorage
- scalevdevs
- scaledisks
---


{{< toc >}}


Use the **Storage Dashboard** widgets to manage a pool.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardWithPool.png" alt="Storage Dashboard with Pool" id="Storage Dashboard with Pool" >}}

## Setting Up Auto TRIM

Select **Storage** on the main navigation panel, locate the **ZFS Health** widget for the pool, then click the **Edit Auto TRIM**. The **Pool Options for *poolname*** dialog opens.

{{< trueimage src="/images/SCALE/Storage/PoolOptionsAuotTRIM.png" alt="Pool Edit Auto TRIM Dialog" id="Pool Edit Auto TRIM Dialog" >}}

Select **Auto TRIM**.

Click **Save**.

With **Auto TRIM** selected and active, TrueNAS periodically checks the pool disks for storage blocks it can reclaim.
Auto TRIM can impact pool performance, so the default setting is disabled.

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).

## Exporting/Disconnecting or Deleting a Pool

The **Export/Disconnect** button allows you to disconnect a pool and transfer drives to a new system where you can import the pool.
It also lets you completely delete the pool and any data stored on it.

Click on **Export/Disconnect** on the **Storage Dashboard**.

{{< trueimage src="/images/SCALE/Storage/ExportDisconnectPoolWindow.png" alt="Export/Disconnect Pool Window" id="Export/Disconnect Pool Window" >}}

A dialog displays showing any system services affected by exporting the pool.

To delete the pool and erase all the data on the pool, select **Destroy data on this pool**.
The pool name field displays at the bottom of the window. Type the pool name into this field. To export the pool, do not select this option.

Select **Delete configuration of shares that used this pool?** to delete shares connected to the pool.

Select **Confirm Export/Disconnect**

Click **Export/Disconnect**. A confirmation dialog displays when the export/disconnect completes.

## Adding a VDEV to a Pool

ZFS supports adding VDEVs to an existing ZFS pool to increase the capacity or performance of the pool.

{{< hint type=tip >}}
You cannot change the original encryption or data VDEV configuration.
{{< /hint >}}

To add a VDEV to a pool:
Click **Manage Devices** on the **Topology** widget to open the **Devices** screen.
Click **Add VDEV** on the **Devices** screen to open the **Add Vdevs to Pool** screen.

{{< trueimage src="/images/SCALE/Storage/AddVdevsToPoolScreen.png" alt="Add VDEVs to Pool Screen" id="Add VDEVs to Pool Screen" >}}

Adding a vdev to an existing pool follows the same process as documented in [Create Pool]({{< relref "CreatePoolWizard.md" >}}). 
Click on the type of vdev you want to add, for example, to add a spare, click on **Spare** to show the vdev spare options.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolSpareScreen.png" alt="Add VDEVs to Pool Spare Example" id="Add VDEVs to Pool Spare Example" >}}

To use the automated option, select the disk size from the **Automated Disk Selection > Disk Size** dropdown list, then select the number of vdevs to add from the **Width** dropdown.
To add the vdev manually, click **Manual Disk Selection** to open the **Manual Selection** screen. 

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolManualSelectionScreen.png" alt="Add Vdev Manual Selection Screen" id="Add Vdev Manual Selection Screen" >}}

Click **Add** to show the vdev options available for the vdev type.
The example image shows adding a stripe vdev for the spare. 
Vdev options are limited by the number of available disks in your system and the configuration of any existing vdevs of that type in the pool. 
Drag the disk icon to the stripe vdev, then click **Save Selection**.

{{< trueimage src="/images/SCALE/Storage/ManualSelectionAddVdevAddDisk.png" alt="Add Disk to Stripe Vdev for Spare" id="Add Disk to Stripe Vdev for Spare" >}}

The **Manual Selection** screen closes and returns to the **Add Vdev to Pool** wizard screen (in this case the Spare option.)

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolSpareWithVdevAdded.png" alt="Add Vdev to Pool Spare with Vdev Added" id="Add Vdev to Pool Spare with Vdev Added" >}}

You have the option to accept the change or click **Edit Manual Disk Selection** to change the disk added to the strip vdev for the spare, or click **Reset Step** to clear the strip vdev from the spare completely.
Click either **Next** or a numbered item to add another type of vdev to this pool. 

Repeat the same process above for each type of vdev to add.

Click **Save and Go to Review** to go to the **Review** screen when ready to save your changes.

{{< trueimage src="/images/SCALE/Storage/AddVdevToPoolReviewScreen.png" alt="Add Vdev to Pool Review Screen" id="Add Vdev to Pool Review Screen" >}}

To make changes, click either **Back** or the vdev option (i.e, **Log**, **Cache**, etc.) to return to the settings for that vdev.
To clear all changes, click **Start Over**.
Select **Confirm** then click **Start Over** to clear all changes.

To save changes click **Update Pool**.

### Extending a Vdev

You cannot add more drives to an existing data VDEV but you can stripe a new VDEV of the same type to increase the overall pool size.
To extend a pool, you must add a data VDEV of the same type as existing VDEVs.
For example, create another mirror, then stripe the new mirror VDEV to the existing mirror VDEV.
While on the **Devices** screen, click on the data vdev, then click **Extend**. 

{{< expand "Extending VDEV Examples" "v" >}}
* To make a striped mirror, add the same number of drives to extend a ZFS mirror.
  For example, you start with ten available drives. Begin by creating a mirror of two drives, and then extending the mirror by adding another mirror of two drives. Repeat this three more times until you add all ten drives.
* To make a stripe of two RAIDZ1 VDEVs (similar to RAID 50 on a hardware controller), add another three drives to extend the three-drive RAIDZ1.
* To make a stripe of RAIDZ2 VDEVs (similar to RAID 60 on a hardware controller), add another four drives to extend the four-drive RAIDZ2.
{{< /expand >}}
### Removing VDEVs
You can always remove the L2ARC (cache) and SLOG (log) VDEVs from an existing pool, regardless of topology or VDEV type.
Removing these devices does not impact data integrity, but can significantly impact performance for reads and writes.

In addition, you can remove a data VDEV from an existing pool under specific circumstances.
This process preserves data integrity but has multiple requirements:

* The pool must be upgraded to a ZFS version that includes the `device_removal` feature flag.
* All top-level VDEVs in the pool must be *only* mirrors or stripes.
* Special VDEVs cannot be removed when RAIDZ data VDEVs are present.
* All top-level VDEVs in the pool must use the same basic allocation unit size (`ashift`).
* The remaining data VDEVs must contain sufficient free space to hold all of the data from the removed VDEV.

When a RAIDZ data VDEV is present, it is generally not possible to remove a device.

To remove a VDEV from a pool:
Click **Manage Devices** on the **Topology** widget to open the **Devices** screen.
Click the device or drive to remove, then click the **Remove** button in the **ZFS Info** pane.
If the **Remove** button is not visible, check that all conditions for VDEV removal listed above are correct.
Confirm the removal operation and click the **Remove** button.

The VDEV removal process status is visible in the [Task Manager]({{< relref "TasksScreens.md" >}}) (or alternately with the `zpool status` command).
Avoid physically removing or attempting to wipe the disks until the removal operation completes.

## Running a Pool Data Integrity Check (Scrub)
Use **Scrub** on the **ZFS Health** pool widget to start a pool data integrity check.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardDiskHealthWidget.png" alt="Disk Health Widget" id="Disk Health Widget" >}}

Click **Scrub** to open the **Scrub Pool** dialog.
Select **Confirm**, then click **Start Scrub**.

If TrueNAS detects problems during the scrub operation, it either corrects them or generates an [alert]({{< relref "/SCALEUIReference/TopToolbar/Alerts/_index.md" >}}) in the web interface.

By default, TrueNAS automatically checks every pool on a reoccurring scrub schedule.

The **ZFS Health** widget displays the state of the last scrub or disks in the pool.
To view scheduled scrub tasks, click **View all Scrub Tasks** on the **ZFS Health** widget.

## Managing Pool Disks
The **Storage Dashboard** screen **Disks** button and the **Manage Disks** button on the **Disk Health** widget both open the **Disks** screen.

**Manage Devices** on the **Topology** widget opens the **Devices** screen.
To manage disks in a pool, click on the VDEV to expand it and show the disks in that VDEV.
Click on a disk to see the devices widgets for that disk.
You can take a disk offline, detach it, replace it, manage the SED encryption password, and perform other disk management tasks from this screen.

See [Replacing Disks]({{< relref "ReplacingDisks.md" >}}) for more information on the **Offline**, **Replace** and **Online** options.

## Expanding a Pool
Click **Expand** on the **Storage Dashboard** to increase the pool size to match all available disk space. An example is expanding a pool when resizing virtual disks apart from TrueNAS.

## Upgrading a Pool
Storage pool upgrades are typically not required unless the new OpenZFS feature flags are deemed necessary for required or improved system operation.

Do *not* do a pool-wide ZFS upgrade until you are ready to commit to this SCALE major version and lose the ability to roll back to an earlier major version!

The **Upgrade** button displays on the **Storage Dashboard** for existing pools after an upgrade to a new TrueNAS major version includes new [OpenZFS feature flags]({{< relref "SCALEReleaseNotes.md#component-versions" >}}).
Newly created pools are always up to date with the OpenZFS feature flags available in the installed TrueNAS version.

{{< trueimage src="/images/SCALE/Storage/StorageDashboardUpgradPoolConfirmationDialog.png" alt="Upgrade Pool Confirmation Dialog" id="Upgrade Pool Confirmation Dialog" >}}

The upgrade itself only takes a few seconds and is non-disruptive.
It is not necessary to stop any sharing services to upgrade the pool.
However, it is best to upgrade when the pool is not in heavy use.
The upgrade process suspends I/O for a short period, but is nearly instantaneous on a quiet pool.

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disk Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}