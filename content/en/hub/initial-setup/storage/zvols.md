---
title: "Zvols"
description: "How to create a Zvol."
weight: 30
tags: ["zfs","zvol"]
---

{{% pageinfo color="primary" %}}
A ZFS pool must be created first to create a Zvol. See
[Creating a new ZFS Pool]({{< relref "pools.md" >}}).
{{% /pageinfo %}}

<img src="/images/Pools-zvol.png">
<br><br>

To create a Zvol in the desired pool, go to **Storage > Pools** then click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add Zvol*.

To quickly create a Zvol with the default options, enter a name for the Zvol, a size, and click *SAVE*. To modify more advanced settings of the Zvol click *ADVANCED MODE*. Zvol options can also be edited after creation. To edit a Zvol, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Edit Options*.

## zvol Configuration Options 

| Setting            | Value          | Advanced Mode | Description |
|--------------------|----------------|---------------|--------------|
| zvol name          | string         |               | Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, a zvol with a 70-character filename or path cannot be used as an iSCSI extent. This setting is mandatory.                                          |
| Comments           | string         |               | Enter any notes about this zvol.  |
| Size for this zvol | integer        |               | Specify size and value. Units like `t`, `TiB`, and `G` can be used. The size of the zvol can be increased later, but cannot be reduced. If the size is more than 80% of the available capacity, the creation will fail with an “out of space” error unless `Force size` is also enabled.     |
| Force size         | checkbox       |               | By default, the system will not create a zvol if that operation will bring the pool to over 80% capacity. **While NOT recommended**, enabling this option will force the creation of the zvol.                                                                                           |
| Sync               | drop-down menu |               | Sets the data write synchronization. *Inherit* inherits the sync settings from the parent dataset, *Standard* uses the sync settings that have been requested by the client software, *Always* waits for data writes to complete, and *Disabled* never waits for writes to complete.         |
| Compression level  | drop-down menu |               | Compress data to save space. Refer to Compression for a description of the available algorithms.  |
| ZFS Deduplication  | drop-down menu |               | Do not change this setting unless instructed to do so by your iXsystems support engineer. |
| Sparse             | checkbox       |               | Used to provide thin provisioning. Use with caution as writes will fail when the pool is low on space.   |
| Inherit (Encrytption Options) | checkbox | | Enabling will cause the zvol to use the encryption properties of the root dataset. |

Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) next to the desired zvol in **Storage** > **Pools** to access the `Delete zvol`, `Edit Zvol`, `Create Snapshot`, and, for an existing zvol snapshot, `Promote Dataset` options.

Similar to datasets, a zvol name cannot be changed.

Choosing a zvol for deletion shows a warning that all snapshots of that zvol will also be deleted.

### Advanced Options

| Setting            | Value          | Advanced Mode | Description |
| Block size         | drop-down menu | ✓             | The default is *Inherit*, other options include, *4KiB*, *8KiB*, *16KiB*, *32KiB*, *64KiB*, *128KiB*,|
