---
title: "Pool Screens"
description: "This article provides information on Pool screens, settings and functions."
weight: 20
tag: 
 - scalepools
 - scalestorage
---

{{< toc >}}

The **Storage** screen displays a list of all the pools and datasets or zvols configured in your TrueNAS. 

## Pool Manager Screen

To access the **Pool Manager** screen to create a new pool click **Create Pool**. To access **Pool Manager** to modify an existing pool, click the <span class="iconify" data-icon="mdi:database-cog"></span> icon button for the pool and select **Add Vdevs**. 

![PoolManagerSCALE](/images/SCALE/PoolManagerSCALE.png "TrueNAS SCALE Pool Manager")

If your system disks do not have unique serial numbers, the **Pool Manager** screen displays a warning message and the **Show disks with non-unique serial numbers** option. 

![PoolManagerWithDiskWarning](/images/SCALE/22.02/PoolManagerWithDiskWarning.png "TrueNAS SCALE Pool Manager")

Select **Show disks with non-unique serial numbers** to display the system disks.
The **0 selected/ *#* total** below the **Available Disks** displays a count of the number of disks selected to the total number of disks available on your system. 
This counter keeps track of the total number of available disk in the system when disks span across several screen pages.

| Settings | Description |
|----------|-------------|
| **Name** | Enter the name you want to use for the pool. Choose something that helps you identify this pool and the type of data it stores. This helps with locating data in systems with pages or hundreds of storage pools configured on the system.  |
| **Encryption** | Select to enable encryption for this pool, the root dataset and if desired, child datasets and zvols in this pool. See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on using SCALE storage encryption. |
| **Reset Layout** | Click to clear a suggested layout after you click **Suggest Layout**. |
| **Suggested Layout** | Click to have TrueNAS review all available disks and populate the primary **Data VDev** list with identically-sized drives in a configuration balanced between storage capacity and data redundancy. **Reset Layout** clears the suggested layout. |
| **Add Vdev** | Click to display the dropdown list of [vdev options](#vdev-options) in the section below. |
| **Available Disks** | Displays the list of disks on your system. Click the <span class="material-icons">chevron_right</span> expand icon to see the disk serial number and model number and where it is on the **Enclosure** screen (the position in the server if using iXsystems-provided hardware). |
| **Data VDevs** | Default vdev type on the **Pool Manager** screen. After selecting a vdev type from the **Add Vdev** a new list displays under the **Data VDevs** list. |
| **Repeat** | Click to create another vdev of the same type and configuration below the exiting **Data VDevs** list. |
| Vdev type | The vdev type dropdown list below the **Data Vdevs** list displays **Stripe** but then changes to **Mirror** after you select two disks and move them to the **Data Vdevs** list. If you select more than two disk you can select different types from this list based on the number of disks moved.  |
| **Estimated raw capacity** | Displays the raw storage capacity of the disks for the **Data VDev** type. For a mirror, this is the storage of one disk with the other disk provides redundancy. |
| **Estimated total raw data capacity**<br>**Estimated data capacity available after extension** | The total estimated raw capacity of the disks in the vdev. **Estimated total raw data capacity** changes to **Estimated data capacity available after extension** on the **Add Vdevs to Pool** version of **Pool Manager**. |

### Vdev Layout Options

| Settings | Description |
|----------|-------------|
| **Data** | Data is the standard vdev for primary storage operations. Each storage pool requires at least one Data vdev. Data vdev configuration typically affects how users can configure other types of vdevs. |
| **Cache** | A cache vdevs is a [ZFS L2ARC]({{< relref "/Content/References/L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations. Users can add or remove cache vdevs after creating the pool. |
| **Log** | A log vdev is a [ZFS LOG]({{< relref "/content/References/SLOG.md" >}}) device that improves synchronous write speeds. Users can add or remove log vdevs after creating the pool. |
| **Hot Spare** | A Hot Spare vdev is a drive or drives reserved for inserting into data vdevs when an active drive fails. The system uses hot spares as temporary replacements for failed drives to prevent larger pool and data loss scenarios. When a user replaces a failed drive with a new one, the hot spare reverts to an inactive state and becomes available again as a hot spare. If a user detaches the failed drive from the pool without adding a new one, the system promotes the temporary hot spare to a full data vdev member. |
| **Metadata** | A metadata vdev is a special allocation class used to create fusion pools for increased metadata and small block I/O performance. |
| **Dedup** | A dedup vdev stores [ZFS de-duplication]({{< relref "/content/References/ZFSDeduplication.md" >}}). Requires allocating X GiB for every X TiB of general storage. Example: *1 GiB* of dedup vdev capacity for every *1 TiB* of data vdev availability. |

### Vdev Options

| Settings | Description |
|----------|-------------|
| **Stripe** | Each disk stores data. A Stripe requires at least one disk and has no data redundancy. |
| **Mirror** | Data is identical in each disk. A Mirror requires at least two disks, provides the most redundancy, and has the least capacity. |
| **RAIDZ1** | Uses one disk for parity while all other disks store data. RAIDZ1 requires at least three disks. |
| **RAIDZ2** | Uses two disks for parity while all other disks store data. RAIDZ2 requires at least four disks. |
| **RAIDZ3** | Uses three disks for parity while all other disks store data. RAIDZ3 requires at least five disks. |

## Pool Actions List Options
The **Pool Actions** dropdown list displays options to expand the pool, check the status of disks in the pool, implement ZFS TRIM, perform an integrity check on the pool, and export or disconnect the pool.
If the pool is configured to use [encryption]({{< relref "EncryptionScale.md" >}}), the option to export dataset keys also displays on the **Pool Actions** dropdown list.

To access options for pools listed on the **Storage** screen click on the <span class="iconify" data-icon="mdi:database-cog"></span> icon button to display the **Pool Actions** dropdown list of options.

![PoolStatusPoolActionsEncryptionOption](/images/SCALE/22.02/PoolStatusPoolActionsEncryptionOption.png "Pool Actions with Encryption Option")

### Pool Options Dialog
Select **Pool Options** to display the **Edit Pool Options** dialog.

![PoolOptionsSCALE](/images/SCALE/PoolOptionsSCALE.png "Pool Options")

Select **Auto TRIM** to enable TrueNAS to periodically review data blocks to identify empty obsolete blocks it can delete. If left clear (default), TrueNAS incorporates day-block overwrites when a device write starts.

{{< expand "Click here for more Auto TRIM information" "v" >}}
When enabled, TrueNAS to periodically reviews data blocks tp identify the blocks it can reclaim. 
Auto TRIM is disabled because it can impact pool performance.

For more details about TRIM in ZFS, see the `autotrim` property description in [zpool.8](https://zfsonlinux.org/manpages/0.8.1/man8/zpool.8.html).
{{< /expand >}}

Select **Confirm** to activate **Save**.

### Export/Disconnect Window
Select **Export/Disconnect** to display the **Export/disconnect pool: *poolname*** window. 
**Export/Disconnect** allows users to export, disconnect, or delete a pool. 
Disks in the pool become available to use in a new pool.
A warning displays stating data becomes unavailble after an export and that selecting **Destroy Data on this pool** destroys data on the pool disks. 

{{< hint warning >}} 
This can be a destructive process! Back up all data before performing this operation. You might not be able to recover data lost though this operation.
{{< /hint >}}

![ExportDiconnectDestroyDataSelected](/images/SCALE/22.02/ExportDiconnectDestroyDataSelected.png "Export/Disconnect Pool and Destroy Data")

If a share uses the pool this window displays the share type (for example, SMB share, etc.) affected by the export/disconnect operation.

![ExportDisconnectPool](/images/SCALE/22.02/ExportDisconnectPool.png "Export/Disconnect Pool")

| Setting | Description |
|---------|-------------|
| **Destroy data on this pool?** | Select to erase all data on the pool.  When selected the **Confirm Export/Disconnect** checkbox disappears. |
| **Delete configuration of shares that sued this pool?** | Enabled by default to remove the share connection to this pool. Exporting or disconnecting the pool deletes the configuration of shares using this pool. You must reconfigure the shares affected by this operation. |
| **Confirm Export/Disconnect** | Required option. Select to confirm this operation and accept the warnings displayed. Activates the **Export/Disconnect** button. |

Click **Export/Disconnect** to execute the process and begin the pool export or disconnect. A status window displays with progress. When complete, a final dialog displays stating the export/disconnect completed successfully.

### Add Vdevs Screen
Displays the **Add Vdev to Pool** screen with **Pool Manager** showing the selected pool. You cannot rename the pool or change the vdev type.

![AddVdevToPool](/images/SCALE/22.02/AddVdevToPool.png "Add Vdev to Pool Screen")

The screen settings are described in the [Pool Manager](#pool-manager-screen) section above.

### Scrub Pool Dialog
Select **Scrub Pool** to display the start pool scrub dialog. Select **Confirm** to activate the **Start Scrub** button.

![ScrubPoolSCALE](/images/SCALE/ScrubPoolSCALE.png "Scrub Pool")

**Scrub Pool** initiates a check on pool data integrity.
If TrueNAS detects any problems during the scrub, it either corrects them automatically or generates an [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) in the web interface.

By default, TrueNAS automatically checks every pool to verify it is on a reoccurring scrub schedule.

### Status Screen
Select **Status** to display the **Pool Status** screen that lists the pool, vdev type, and drives in the pool.

![PoolStatusScreen](/images/SCALE/22.02/PoolStatusScreen.png "Pool Status Screen")

**Pool Status** screen displays the status of any scrub operation, errors encountered and the date of the scrub operation.

The list displays the number of reads, writes and checksums, and the status of each root dataset, vdev for the root dataset, and disks in the vdev.

Use **Refresh** to update the screen after making a change.

Click the <span class="material-icons">more_vert</span> for the pool vdev to display the vdev type actions dropdown list if the type is **Mirror**. Options are **Extend** or **Remove**.

Click the <span class="material-icons">more_vert</span> for a disk to display **Disk Actions** dropdown list. Options are **Edit**, **Offline**, **Online**, **Replace**, **Remove** and **Detach**. See [Disk Screen]({{< relref "/SCALE/SCALEUIReference/Storage/Disks/DisksScreens.md" >}}) for more information on these options.

### Expand Pool
Select **Expand Pool** to increase the pool size to match all available disk space. Users with pools using virtual disks use this otpion to resize these virtual disks apart from TrueNAS.

### Export Dataset Keys Dialog
Select **Export Dataset Keys** to obtain the encryption keys for the dataset. Displays the exported json file at the bottom of the screen. Click the expand icon and select the desired option for the downloaded file. 
{{< hint danger >}}
Keep exported encryption files in a safe and secure location!

Always back up encryption keys. Losing an encryption key could result in permanently locked, or lost, data!
{{< /hint >}}

## Import Pool Screens
Click **Import** to view the **Import Pool** wizard screens.

![ImportPool1SCALE](/images/SCALE/ImportPool1SCALE.png "Import Pool Selection")

Use the **Pool Import Summary** dropdown to select the pool to import. Click **Next** to advance to the **Confirm Options** screen

![ImportPool2SCALE](/images/SCALE/ImportPool2SCALE.png "Import Pool Selection")

Click **Import** to begin the pool import process.

{{< taglist tag="scalepools" limit="10" title="Related Pools Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}