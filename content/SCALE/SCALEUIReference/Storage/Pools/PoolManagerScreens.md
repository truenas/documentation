---
title: "Pool Manager Screen"
description: "This article provides information on VDEV options, data VDEV types and the settings and functions on the **Pool Manager** configuration screen."
weight: 20
aliases: /scale/scaleuireference/storage/pools/poolsscreens/
tags: 
- scalepools
- scalestorage
- scalevdevs
- scaledisks
---

{{< toc >}}

The **[Storage Dashboard]({{< relref "StorageDashboardScreen.md" >}})** screen displays information widgets for all pools configured in your TrueNAS. The **Pool Manager** opens after using several options found on the **Storage Dashboard** and from the **Unused Resources** widget on the dashboard, and the **Add VDEVS** on the **[Devices]({{< relref "DevicesScreensSCALE.md" >}}) screen.

## Pool Manager Screen

The **Pool Manager** provides options to configure storage pools on your TrueNAS system. Each pool must have a **Data VDEV** before you can add other types of VDEVS such as **Cache VDEV**, **Log VDEV**, **Spare VDEV**, **Metadata VDEV**, or **Dedup VDEV**.

![StorageCreatePoolPoolManager](/images/SCALE/22.12/StorageCreatePoolPoolManager.png "Storage Create Pool > Pool Manager") 

If your system disks do not have unique serial numbers, the **Pool Manager** screen displays a warning message and the **Show disks with non-unique serial numbers** option. 

![PoolManagerWithDiskWarning](/images/SCALE/22.02/PoolManagerWithDiskWarning.png "TrueNAS SCALE Pool Manager")

Select **Show disks with non-unique serial numbers** to display the system disks.
The **0 selected/ *#* total** below the **Available Disks** displays a count of the number of disks selected to the total number of disks available on your system. 
This counter keeps track of the total number of available disks in the system when disks span across several screen pages.

| Settings | Description |
|----------|-------------|
| **Name** | Available when creating a pool, when adding to an existing pool this field does not display but the name of the pool shows at the top of the form directly below the **Pool Manager** header. Enter a name for the pool of up to 50 characters in length that follows [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). Pool names should be lower case alpha characters to avoid potential problems with sharing protocols. Names can include numbers, and special characters such as underscore (_), hyphen (-), colon (:), or a period (.). Choose something that helps you identify the pool and the type of data it stores and helps with locating data in systems with pages or hundreds of storage pools configured on the system. |
| **Encryption** | Select to enable [ZFS encryption](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html) for this pool, the root (parent) dataset and if desired, child datasets and zvols in this pool. See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on using SCALE storage encryption. |
| **Reset Layout** | Click to clear a suggested a layout that displays after you click **Suggest Layout**. |
| **Suggest Layout** | Click to have TrueNAS review all available disks and populate the primary **Data VDev** list with identically-sized drives in a configuration balanced between storage capacity and data redundancy. **Reset Layout** clears the suggested layout. |
| **Add Vdev** | Click to display the dropdown list of [VDEV options](#vdev-options). Each selected VDEV type populates the screen with a table titled with the VDEV type. |
| **Available Disks** | Displays the list of disks on your system. Click the <span class="material-icons">chevron_right</span> expand icon to see the disk serial number and model number, and if using iXsystems-provided system hardware, where it is on the **Enclosure** screen (the position in the server). |
| **Data VDevs** | Default VDEV type on the **Pool Manager** screen. The **Data VDEV** pane includes a dropdown list to select either **Stripe** or **Mirror**, and changes to the RAID size based on the number of disks added to the data VDEV. You must include a Data VDEV in any pool you create and before you add any other type of VDEV to the pool. |
| **Repeat First VDev** | Click to create another VDEV of the same type and configuration below the default **Data VDevs** pane. |
| **Estimated raw capacity** | Displays the raw storage capacity of the disks for the **Data VDev** type. A **Stripe** uses the entire capacity of the disks for storage and has no redundancy. Failed or degraded disks in a stripe can result in data loss! A **Mirror** requires at least two disks and mirrors the data from one disk onto each other disk in the VDEV, which can limit the total capacity. **Raid-Z** configurations offer different balances of data redundancy and total capacity for the selected disks. |
| **Estimated total raw data capacity**<br>**Estimated data capacity available after extension** | The total estimated raw capacity of the disks in the VDEV. **Estimated total raw data capacity** changes to **Estimated data capacity available after extension** when you select **Add VDevs to Pool**. |

### VDEV Layout Options

| Settings | Description |
|----------|-------------|
| **Data** | Data is the standard VDEV for primary storage operations. Each storage pool requires at least one data VDEV. Data VDEV configuration typically affects how users can configure other types of VDEVs. |
| **Cache** | A cache VDEVs is a [ZFS L2ARC]({{< relref "/Content/References/L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations. Users can add or remove cache VDEVs after creating the pool. |
| **Log** | A log VDEV is a [ZFS LOG]({{< relref "/content/References/SLOG.md" >}}) device that improves synchronous write speeds. Users can add or remove log VDEVs after creating the pool. |
| **Hot Spare** | A Hot Spare VDEV is a drive or drives reserved for inserting into data VDEVs when an active drive fails. The system uses hot spares as temporary replacements for failed drives to prevent larger pool and data loss scenarios. When a user replaces a failed drive with a new one, the hot spare reverts to an inactive state and becomes available again as a hot spare. If a user detaches the failed drive from the pool without adding a new one, the system promotes the temporary hot spare to a full data VDEV member. |
| **Metadata** | A metadata VDEV is a special allocation class used to create fusion pools for increased metadata and small block I/O performance. |
| **Dedup** | A dedup VDEV stores [ZFS de-duplication]({{< relref "/content/References/ZFSDeduplication.md" >}}). Requires allocating X GiB for every X TiB of general storage. Example: *1 GiB* of dedup VDEV capacity for every *1 TiB* of data VDEV availability. |

### Data VDEV Types

| Settings | Description |
|----------|-------------|
| **Stripe** | Each disk stores data. A stripe requires at least one disk and has no data redundancy. |
| **Mirror** | Data is identical in each disk. A mirror requires at least two disks, provides the most redundancy, and has the least capacity. |
| **RAIDZ1** | Uses one disk for parity while all other disks store data. RAIDZ1 requires at least three disks. |
| **RAIDZ2** | Uses two disks for parity while all other disks store data. RAIDZ2 requires at least four disks. |
| **RAIDZ3** | Uses three disks for parity while all other disks store data. RAIDZ3 requires at least five disks. |


{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}