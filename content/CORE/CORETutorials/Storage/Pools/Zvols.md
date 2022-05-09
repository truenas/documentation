---
title: "Zvols"
weight: 19
aliases: /core/storage/pools/zvols/
---

{{< toc >}}

A ZFS Volume (Zvol) is a [dataset]({{< relref "/CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) that represents a block device.
These are needed when configuring an [iSCSI Share]({{< relref "/CORE/CORETutorials/Sharing/iSCSI/AddingiSCSIShare.md" >}}).

To create a zvol in a pool, go to **Storage > Pools** then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add Zvol*.

## Options

![StoragePoolsCreateZvol](/images/CORE/12.0/StoragePoolsCreateZvol.png "Creating a new Zvol")

To quickly create a Zvol with the default options, enter a name for the Zvol, a size, and click *SAVE*.

| Setting | Value | Description |
|---------|-------|-------------|
| Zvol name | string | Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, a zvol with a 70-character filename or path cannot be used as an iSCSI extent. This setting is mandatory. |
| Comments | string | Enter any notes about this zvol. |
| Size for this zvol | integer | Specify size and value. Units like `t`, `TiB`, and `G` can be used. The size of the zvol can be increased later, but cannot be reduced. If the size is more than 80% of the available capacity, the creation fails with an **out of space** error unless **Force size** is also enabled. |
| Force size | checkbox | By default, the system does not create a zvol if that operation brings the pool to over 80% capacity. **While NOT recommended**, enabling this option forces the creation of the zvol. |
| Sync | drop-down menu | Sets the data write synchronization. **Inherit** inherits the sync settings from the parent dataset, **Standard** uses the sync settings that have been requested by the client software, **Always** waits for data writes to complete, and **Disabled** never waits for writes to complete. |
| Compression level  | drop-down menu | Compress data to save space. Refer to Compression for a description of the available algorithms. |
| ZFS Deduplication | drop-down menu | Do not change this setting unless instructed to do so by your iXsystems support engineer. |
| Sparse | checkbox | Used to provide thin provisioning. Use with caution as writes fail when the pool is low on space. |
| Read-only | drop-down menu | Set to prevent the zvol from being modified. |
| Inherit (Encryption Options) | checkbox | Enabling causes the zvol to use the encryption properties of the root dataset. |

{{< expand "Advanced Options" "v" >}}

| Setting | Value | Description |
|---------|-------|-------------|
| Block size | drop-down menu | The default is *Inherit*, other options include, *4KiB*, *8KiB*, *16KiB*, *32KiB*, *64KiB*, *128KiB* |

{{< /expand >}}

{{< expand "Optimal Zvol Block Sizes" "v" >}}

TrueNAS automatically recommends a space-efficient *block size* for new zvols. This table shows the minimum volume *block size* values that are recommended. To manually change this value, use the *Block size* dropdown menu.

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

Additional tuning can be required for optimal performance, depending on the workload. iXsystems Engineers are available to assist [Enterprise](https://www.truenas.com/truenas-enterprise/) customers with tuning their TrueNAS hardware. The [workload tuning chapter](https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html) of the OpenZFS handbook is also a good resource.

{{< /expand >}}

## Managing Zvols

To see options for an existing zvol, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the desired zvol in **Storage** > **Pools**:

* *Delete zvol* removes the zvol from TrueNAS.
  {{< hint danger >}}
  Deleting zvols can result in unrecoverable data loss!
  Be sure that any critical data is moved off the zvol or is otherwise obsolete.
  {{< /hint >}}
  Deleting a zvol also deletes all snapshots of that zvol.
* *Edit Zvol* opens the zvol creation form for changing the previously saved settings.
  Similar to datasets, a zvol name cannot be changed.
* *Create Snapshot* takes a single current point in time image of the zvol and saves it to **Storage > Snapshots**.
  A snapshot *Name* is suggested and an extra option to make the snapshot *Recursive* is available.

When the selected zvol is cloned from an existing [snapshot]({{< relref "/CORE/CORETutorials/Storage/Snapshots.md" >}}), *Promote Dataset* is available.
When a clone is promoted, the original volume becomes a clone of the clone, making it possible to delete the volume that the clone was created from.
Otherwise, a clone cannot be deleted while the original volume exists.

When the zvol is created with [encryption]({{< relref "/CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}) enabled, additional **Encryption Actions** are shown.
