---
title: "Pool Manager Screen"
description: "Provides information on VDEV options, data VDEV types, and the settings and functions on the Pool Manager configuration screen."
weight: 25
aliases: /scale/scaleuireference/storage/pools/poolsscreens/
tags: 
- scalepools
- scalestorage
- scalevdevs
- scaledisks
---

{{< toc >}}

The **Storage Dashboard** displays information about the pools configured on your TrueNAS system. 
The **Create Pool** button at the top right of the screen opens the **Pool Manager** screen.

{{< trueimage src="/images/SCALE/22.12/StorageCreatePoolManagerSCALE.png" alt="Create Pool Using Pool Manager" id="1: Create Pool Using Pool Manager" >}}

{{< truetable >}}
| Name | Description|
|---------|------------|
| **Name** | Enter a name for the pool of up to 50 characters in length that follows [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). Use lower-case alpha characters to avoid potential problems with sharing protocols. Names can include numbers and special characters such as underscore (_), hyphen (-), colon (:), or a period (.). |
| **Encryption** | Select to enable [ZFS encryption](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html) for this pool and all datasets (or zvols) created within the pool. See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on using SCALE storage encryption. |
| **Reset Layout** | Click to reset the proposed layout displayed. Click before saving to remove any selected VDEV types and move disks assigned to any VDEV back to the **Available Disks** list. |
| **Suggest Layout** | Click to allow TrueNAS to review all available disks and populate the primary data VDEVs with identically sized drives. These drives are balanced for storage capacity and data redundancy. To clear the suggestion, click **Reset Layout** |
| **Add Vdev** | Click to display the dropdown list of [VDEV options](#vdev-options). VDEV types are **Data**, **Cache**, **Log**, **Hot Spare**, **Metadata** or **Dedup**. Click on a VDEV types to add it to an existing or new pool VDEV setup. |
| **Available Disks** | List of available disks on the TrueNAS. Click the <span class="material-icons">chevron_right</span> expand icon to see the disk serial number and model number. Select the disk checkbox, then click the blue <span class="iconify" data-icon="bytesize:arrow-right"></span> to the left of the VDEV type (if more than one VDEV type exists) to move the disks to that VDEV. To move it back to the **Available Disks** list, select the disk checkbox(es) and the blue <span class="iconify" data-icon="bytesize:arrow-left"></span>. |
| **Data VDevs** | List of disks assigned to the VDEV(s). A pool must include a Data VDEV before you add any other type of VDEV to the pool. |
| **VDev type** | Displays under the **Data VDevs** heading. For initial pool creation, the default type is **Stripe**. After adding disks to the **Data VDevs** a <span class="iconify" data-icon="bxs:down-arrow"></span> expand symbol displays with available options to change the default type of VDEV (for example, if two disks are moved to a Data VDEV, the **Mirror** option displays along with **Stripe**). |
| **Estimated raw capacity:** | Displays the raw storage capacity of the disks for the Data VDEV type. |
| **Estimated total raw capacity:** | Displays the estimated total raw capacity of the disks in the VDEV. |
{{< /truetable >}}

**CANCEL** exits without saving and displays the **Pools** screen.

**CREATE** adds the pool VDEV.

If your system disks do not have unique serial numbers, the **Pool Manager** screen displays a warning message and the **Show disks with non-unique serial numbers** option. 

{{< trueimage src="/images/SCALE/22.12/PoolManagerWithDiskWarningSCALE1.png" alt="Non-Unique Disk Serial Numbers Warning" id="2: Non-Unique Disk Serial Numbers Warning" >}}

Select **Show disks with non-unique serial numbers** to display the system disks.

The **0 selected/ *#* total** below the **Available Disks** displays a count of the number of disks selected / to the total number of disks available on your system. 
This counter keeps track of the total number of available disks in the system when disks span across several screen pages.

### VDEV Layout Options

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Data** | Data is the standard VDEV for primary storage operations. Each storage pool requires at least one data VDEV. Data VDEV configuration typically affects how users can configure other types of VDEVs. |
| **Cache** | A cache VDEV is a [ZFS L2ARC]({{< relref "/Content/References/L2ARC.md" >}}) read-cache used with fast devices to accelerate read operations. Users can add or remove cache VDEVs after creating the pool. |
| **Log** | A log VDEV is a [ZFS LOG]({{< relref "/content/References/SLOG.md" >}}) device that improves synchronous write speeds. Users can add or remove log VDEVs after creating the pool. |
| **Hot Spare** | A Hot Spare VDEV is a drive or drives reserved for inserting into Data VDEVs when an active drive fails. The system uses hot spares as temporary replacements for failed drives to prevent larger pool and data loss scenarios. When a user replaces a failed drive with a new one, the hot spare reverts to an inactive state and becomes available again as a hot spare. If a user detaches the failed drive from the pool without adding a new one, the system promotes the temporary hot spare to a full Data VDEV member. |
| **Metadata** | A Metadata VDEV is a special allocation class used to create fusion pools for increased metadata and small block I/O performance. |
| **Dedup** | A Dedup VDEV stores [ZFS de-duplication]({{< relref "/content/References/ZFSDeduplication.md" >}}). Requires allocating X GiB for every X TiB of general storage. Example: *1 GiB* of Dedup VDEV capacity for every *1 TiB* of Data VDEV availability. |
{{< /truetable >}}

### Data VDEV Types

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Stripe** | Each disk stores data. A stripe requires at least one disk and has no data redundancy. |
| **Mirror** | Data is identical in each disk. A mirror requires at least two disks, provides the most redundancy, and has the least capacity. |
| **RAIDZ1** | Uses one disk for parity while all other disks store data. RAIDZ1 requires at least three disks. |
| **RAIDZ2** | Uses two disks for parity while all other disks store data. RAIDZ2 requires at least four disks. |
| **RAIDZ3** | Uses three disks for parity while all other disks store data. RAIDZ3 requires at least five disks. |
{{< /truetable >}}

{{< taglist tag="scalepools" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}
