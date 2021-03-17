---
title: "Zvols"
weight: 19
---

{{< toc >}}

A ZFS Volume (Zvol) is a [dataset]({{< relref "Datasets.md" >}}) that represents a block device.
These are needed when configuring an [iSCSI Share]({{< relref "iSCSIShare.md" >}}).

To create a zvol in a pool, go to **Storage > Pools** then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add Zvol*.

## Options

![StoragePoolsCreateZvol](/images/CORE/12.0/StoragePoolsCreateZvol.jpg "Creating a new Zvol")

To quickly create a Zvol with the default options, enter a name for the Zvol, a size, and click *SAVE*.

| Setting | Value | Description |
|---------|-------|-------------|
| Zvol name | string | Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, a zvol with a 70-character filename or path cannot be used as an iSCSI extent. This setting is mandatory. |
| Comments | string | Enter any notes about this zvol. |
| Size for this zvol | integer | Specify size and value. Units like `t`, `TiB`, and `G` can be used. The size of the zvol can be increased later, but cannot be reduced. If the size is more than 80% of the available capacity, the creation will fail with an “out of space” error unless `Force size` is also enabled. |
| Force size | checkbox | By default, the system will not create a zvol if that operation will bring the pool to over 80% capacity. **While NOT recommended**, enabling this option will force the creation of the zvol. |
| Sync | drop-down menu | Sets the data write synchronization. *Inherit* inherits the sync settings from the parent dataset, *Standard* uses the sync settings that have been requested by the client software, *Always* waits for data writes to complete, and *Disabled* never waits for writes to complete. |
| Compression level  | drop-down menu | Compress data to save space. Refer to Compression for a description of the available algorithms. |
| ZFS Deduplication | drop-down menu | Do not change this setting unless instructed to do so by your iXsystems support engineer. |
| Sparse | checkbox | Used to provide thin provisioning. Use with caution as writes will fail when the pool is low on space. |
| Inherit (Encryption Options) | checkbox | Enabling causes the zvol to use the encryption properties of the root dataset. |

{{< expand "Advanced Options" "v" >}}

| Setting | Value | Description |
|---------|-------|-------------|
| Block size | drop-down menu | The default is *Inherit*, other options include, *4KiB*, *8KiB*, *16KiB*, *32KiB*, *64KiB*, *128KiB* |

{{< /expand >}}

## Managing Zvols

To see options for an existing zvol, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) next to the desired zvol in **Storage** > **Pools**:

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

When the selected zvol is cloned from an existing [snapshot]({{< relref "Snapshots.md" >}}), *Promote Dataset* is available.
When a clone is promoted, the original volume becomes a clone of the clone, making it possible to delete the volume that the clone was created from.
Otherwise, a clone cannot be deleted while the original volume exists.

When the zvol is created with [encryption]({{< relref "StorageEncryption.md" >}}) enabled, additional **Encryption Actions** are shown.
