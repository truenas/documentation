---
title: "Zvol Screens"
descritpion: "This article provides information on Zvol screen settings and functions."
weight: 40
aliases: /
tags:
 - scalezvols
 - scalestorage
---

{{< toc >}}

To access the Zvol screens, from the **Storage** screen click on the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a pool or dataset, then click **Add Zvol** to display the **Add Zvol** screen. To edit a zvol, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a zvol, then click **Edit Zvol** to display the **Edit Zvol** screen.

## Add Zvol Screen
The **Add Zvol** has two screens, basic options and advanced options. The basic options display by default. Click **Advanced Options** to expand the settings to include the block size setting.

## Basic Options Settings

![ZvolsCreateSCALE](/images/SCALE/ZvolsCreateSCALE.png "Creating a new Zvol")

| Setting | Description |
|---------|-------------|
|** Zvol name** | Requrired setting. Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, you cannot use a zvol with a 70-character file name or path as an iSCSI extent. |
| **Comments** | Enter any notes about this zvol. |
| **Size for this zvol** | Specify size and value. You can include units like **t** as in TiB, and **G**. You can increase the size of the zvol later, but you cannot reduce size. If the size is more than 80% of the available capacity, the creation fails with an out-of-space error unless you select **Force size**. |
| **Force size** | Select to enable the system to create a zvol where the size is over 80% capacity. By default, the system does not create a zvol of this size. While notrecommended, enabling this option forces the creation of the zvol. |
| **Sync** | Select the data write synchronization option from the dropdown list. **Inherit** gets the sync settings from the parent dataset. **Standard** uses the sync settings requested by the client software. **Always** waits for data writes to complete. **Disabled** never waits for writes to complete. |
| **Compression level**  | Select the option from the dropdown list for the type of data compression to use. Compressing data saves space. Compression algorithm options include **Inherit (lz4)**, **Off**, **Lz4(recommended)** and several others. |
| ZFS Deduplication | Do not change this setting unless instructed to do so by your iXsystems support engineer. |
| Sparse | Used to provide thin provisioning. Use with caution as writes will fail when the pool is low on space. |
| Read-only | Set to prevent the zvol from being modified. |
| Inherit (Encryption Options) | Enabling causes the zvol to use the encryption properties of the root dataset. |

### Advanced Options Settings

![ZvolsCreateSCALE](/images/SCALE/ZvolsCreateSCALE.png "Creating a new Zvol")

| Setting | Description |
|---------|-------------|
| Block size | The default is *Inherit*, other options include, *4KiB*, *8KiB*, *16KiB*, *32KiB*, *64KiB*, *128KiB* |

TrueNAS automatically recommends a space-efficient *block size* for new zvols.
This table shows the minimum recommended volume *block size* values.
Use the *Block size* drop-down to change the value.

| Configuration | Number of Drives | Optimal Block Size | 
|---------------|-------|-------|
| Mirror | N/A | 16k |
| Raidz-1 | 3 | 16k |
| Raidz-1 | 4/5 | 32k |
| Raidz-1 | 6/7/8/9 | 64k |
| Raidz-1 | 10+ | 128k |
| Raidz-2 | 4 | 16k |
| Raidz-2 | 5/6 | 32k |
| Raidz-2 | 7/8/9/10 | 64k |
| Raidz-2 | 11+ | 128k |
| Raidz-3 | 5 | 16k |
| Raidz-3 | 6/7 | 32k |
| Raidz-3 | 8/9/10/11 | 64k |
| Raidz-3 | 12+ | 128k |

Depending on their workload, zvols can require additional tuning for optimal performance.
See the OpenZFS handbook [workload tuning chapter](https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html) for more information.

### Data Compression Algorithms

| Compression | Descripton |
|-------------|------------|
| **Inherit (lz4)** |  |
| **Off** |  |
| **Lz4 (recommended)** |  |
| **zstd-5 (default level, 3)**  |  |
| **zstd-5 (slow)** |  |
| **sztd-7 (very slow)** |  |
| **zstd-fast (default level, 1)** |  |
| **gzip (defaul level, 6)** |  |
| **gzip-1 (fastet)** |  |
| **gzip-9 (maximum, slow)**|  |
| **zle (runs of zeros)** |  |
| **lzjb (Legacy, not recommended)** |  |


## Managing Zvols

To see zvol options, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the desired zvol in **Storage**:

* *Delete Zvol* removes the zvol from TrueNAS. Deleting a zvol also deletes all of that zvol's snapshots.
  {{< hint danger >}}
  Deleting zvols can result in unrecoverable data loss!
  Be sure that any critical data is moved off the zvol or is otherwise obsolete.
  {{< /hint >}}
* *Edit Zvol* opens the zvol creation form for changing the previously saved settings. Users cannot change the name.
* *Create Snapshot* takes a single current point-in-time image of the zvol and saves it to *Snapshots*. TrueNAS will suggest a *Name* and offer the *Recursive* option.

If you clone a zvol from an existing [snapshot]({{< relref "SnapshotsSCALE.md" >}}), TrueNAS will offer the *Promote Dataset* option.
After promoting a clone, the original volume becomes a clone of the promoted clone. Promoting a clone allows users to delete the volume that created the clone.
Otherwise, you cannot delete a clone while the original volume exists.

When a zvol is the child of an [encrypted]({{< relref "EncryptionSCALE.md" >}}) dataset, TrueNAS offers additional *Encryption Actions*.
