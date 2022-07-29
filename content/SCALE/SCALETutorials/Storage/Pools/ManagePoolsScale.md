---
title: "Managing Pools"
description: "This article provides instructions on managing storage pools in TrueNAS SCALE."
weight: 50
aliases: 
tag: 
 - scalepools
 - scalestorage
---


{{< toc >}}


Use the **Pool Operations** <span class="iconify" data-icon="mdi:database-cog"></span> icon button to manage a pool. Click to display the **Pool Actions** dropdown list.

![PoolOperationsMenuSCALE](/images/SCALE/PoolOperationsMenuSCALE.png "Pool Operations Menu")

The options on the **Pool Actions** dropdown list vary based on the pool setup. Only pools with encryption include the **Encryption Actions** **Export Dataset Keys** option. 

### Setting Up Auto TRIM

Select **Pool Options** to display the **Edit Pool Options** dialog for the selected pool.

![PoolOptionsSCALE](/images/SCALE/PoolOptionsSCALE.png "Pool Options")

Select **Auto TRIM**. 

Select **Confirm** and then **Save**.

With **Auto TRIM** selected and active, TrueNAS periodically checks the pool disks for storage blocks it can reclaim. Auto TRIM can impact pool performance, so the default setting is disabled. 

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).

### Exporting or Disconnecting a Pool

The **Export/Disconnect** option disconnects the pool to transfer drives to a new system where you can import the pool. Also use to completely delete the pool and any data stored on it. 

Select **Export/Disconnect** on the **Pool Actions** dropdown list for the selected pool.

![ExportPoolSCALE](/images/SCALE/ExportPoolSCALE.png "Pool Export")

A dialog box displays with any system services affected by exporting the pool listed in the dialog.

Select **Destroy data on this pool?** to erase all data on the pool. 

Click **Delete configuration of shares that used this pool?** to delete shares connected to the pool.

### Adding Vdevs

ZFS supports adding vdevs to an existing ZFS pool to increase the capacity of the pool. 
Use **Add Vdevs** to expand the storage of an existing vdev.
After creating a vdev, you cannot add more drives to that vdev but you can stripe a new vdev with another of the same type to increase the overall pool size. 
To extend a pool, you must add a vdev that is the same type as existing vdevs.

Vdevs extending examples:

* To make a striped mirror, add the same number of drives to extend a ZFS mirror. 
  For example, you start with ten available drives. Begin by creating a mirror of two drives, and then extending the mirror by adding another mirror of two drives. Repeat this three more times until you add all ten drives.
* To make a stripe of two RAIDZ1 vdevs (similar to RAID 50 on a hardware controller), add another three drives to extend the three-drive RAIDZ1.
* To make a stripe of RAIDZ2 vdevs (similar to RAID 60 on a hardware controller), add another four drives to extend the four-drive RAIDZ2.
* To make a hot spare for a vdev, add a disk to the pool using **Hot Spare**.

The **Add Vdevs** button opens the **Pool Manager** in the **Add Vdevs to Pool** screen. 
{{< hint ok >}}
You cannot change the original encryption or data Vdev configuration.
{{< /hint >}}
TrueNAS selects data vdevs by default. To add different Vdev types to a pool, select one from the **Add Vdev** dropdown.

### Using Scrub Pool

Use **Scrub Pool** to start a pool data integrity check.

![ScrubPoolSCALE](/images/SCALE/ScrubPoolSCALE.png "Scrub Pool")

If TrueNAS detects problems during the scrub operation, it either corrects them or generates an [alert]({{< relref "/CORE/UIReference/System/AlertSettings.md" >}}) in the web interface.

By default, TrueNAS automatically checks every pool on a reoccurring scrub schedule.

To check the state of the last scrub or disks in the pool, use **Status**.

### Extending a Vdev

Click **Status** to open the **Pool Status** screen.

![PoolStatusSCALE](/images/SCALE/PoolStatusSCALE.png "Pool Status")

Use the <span class="material-icons">more_vert</span> to display the options for a selected vdev. 
Click **Extend** to display the **Extend Vdev** dialog. 

Select the disk from the dropdown list and click **Extend**.

## Managing Pool Disks

The **Pool Status** screen disks also have [disk management]({{< relref "/SCALE/SCALEUIReference/Storage/Disks/DisksScreens.md" >}}) options.

See [Replacing Disks]({{< relref "/SCALE/SCALETutorials/Storage/Disks/ReplacingDisks.md" >}}) for more information on the **Offline**, **Replace** and **Online** options.

#### Expand Pool

Click **Expand Pool** to increase the pool size to match all available disk space. An example is expanding a pool when resizing virtual disks apart from TrueNAS.

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}