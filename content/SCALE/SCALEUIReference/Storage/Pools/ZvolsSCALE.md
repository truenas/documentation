---
title: "Zvols"
geekdocCollapseSection: true
weight: 40
---

{{< toc >}}

A ZFS Volume (zvol) is a [dataset]({{< relref "DatasetsSCALE.md" >}}) that represents a block device.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}).

To create a zvol in a pool, go to **Storage** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; on a pool or dataset, then select *Add Zvol*.

## Zvol Creation Options

![ZvolsCreateSCALE](/images/SCALE/ZvolsCreateSCALE.png "Creating a new Zvol")

To create a zvol with default options, enter a name and size for the zvol and click *Save*.

{{< tabs "zvol Options" >}}
{{< tab "Basic Options" >}}
| Setting | Description |
|---------|-------------|
| Zvol name | Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, a zvol with a 70-character filename or path cannot be used as an iSCSI extent. This setting is mandatory. |
| Comments | Enter any notes about this zvol. |
| Size for this zvol | Specify size and value. Units like `t`, `TiB`, and `G` can be used. The size of the zvol can be increased later, but cannot be reduced. If the size is more than 80% of the available capacity, the creation will fail with an “out of space” error unless `Force size` is also enabled. |
| Force size | By default, the system will not create a zvol if that operation brings the pool to over 80% capacity. **While NOT recommended**, enabling this option will force the creation of the zvol. |
| Sync | Sets the data write synchronization. *Inherit* gets the sync settings from the parent dataset. *Standard* uses the sync settings requested by the client software. *Always* waits for data writes to complete. *Disabled* never waits for writes to complete. |
| Compression level  | Compress data to save space. Refer to Compression for a description of the available algorithms. |
| ZFS Deduplication | Do not change this setting unless instructed to do so by your iXsystems support engineer. |
| Sparse | Used to provide thin provisioning. Use with caution as writes will fail when the pool is low on space. |
| Read-only | Set to prevent the zvol from being modified. |
| Inherit (Encryption Options) | Enabling causes the zvol to use the encryption properties of the root dataset. |

{{< /tab >}}
{{< tab "Advanced Options" >}}

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
{{< /tab >}}
{{< /tabs >}}

## Managing Zvols

To see zvol options, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the desired zvol in **Storage**:

* *Delete Zvol* removes the zvol from TrueNAS. Deleting a zvol also deletes all of that zvol's snapshots.
  {{< hint danger >}}
  Deleting zvols can result in unrecoverable data loss!
  Be sure that any critical data is moved off the zvol or is otherwise obsolete.
  {{< /hint >}}
* *Edit Zvol* opens the zvol creation form for changing the previously saved settings. Users cannot change the name.
* *Create Snapshot* takes a single current point-in-time image of the zvol and saves it to *Snapshots*. TrueNAS will suggest a *Name* and offer the *Recursive* option.

If you clone a zvol from an existing [snapshot]({{< relref "/SCALE/SCALEUIReference/Storage/SnapshotsSCALE.md" >}}), TrueNAS will offer the *Promote Dataset* option.
After promoting a clone, the original volume becomes a clone of the promoted clone. Promoting a clone allows users to delete the volume that created the clone.
Otherwise, you cannot delete a clone while the original volume exists.

When a zvol is the child of an [encrypted]({{< relref "EncryptionSCALE.md" >}}) dataset, TrueNAS offers additional *Encryption Actions*.
