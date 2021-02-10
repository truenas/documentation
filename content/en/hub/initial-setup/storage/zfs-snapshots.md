---
title: "ZFS Snapshots"
description: "ZFS Snapshots" 
tags: ["ZFS","snapshots"]
---

Snapshots are one of the most powerful features of ZFS. A snapshot provides a read-only point-in-time copy of a file system or volume that does not consume extra space in the ZFS pool. The snapshot only uses space when the block references are changed. Snapshots save disk space by recording only the differences between the current dataset and a previous version.
<!-- markdown-link-check-disable-next-line -->
Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file. For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system, typically by [replication](/hub/tasks/scheduled/replication/). Such a strategy allows the administrator to roll the system back to a specific point in time. If there is a catastrophic loss, an off-site snapshot can be used to restore data up to the time of the last snapshot.

You must have a storage pool and any datasets or zvols created before creating a snapshot.

## Creating a Single Snapshot

To create a snapshot separately from a periodic snapshot schedule, go to **Storage > Snapshots** and click **ADD**.

Select an existing ZFS pool, dataset, or zvol to snapshot. To include child datasets with the snapshot, set **Recursive**.

The snapshot can have a custom **Name** or be automatically named by a **Naming Schema**. Using a **Naming Schema** allows the snapshot to be included in Replication Tasks. The **Naming Schema** drop-down is populated with previously created schemas from [Periodic Snapshot Tasks](/hub/tasks/scheduled/snapshot-scheduling/).

{{% alert title=Warning color=warning %}}
Snapshots that do not follow a proper naming schema cannot be replicated!
{{% /alert %}}

## Managing Snapshots

To view and manage the listing of created snapshots, use **Storage** > **Snapshots**. 

<img src="/images/StorageSnapshots.png" width='700px'>
<br><br>

Each entry in the list includes the name of the dataset and snapshot. Click **>** (Expand) to view these options:

**DATE CREATED** shows the exact time and date of the snapshot creation.

**USED** is the amount of space consumed by this dataset and all of its descendants. This value is checked against the dataset quota and reservation. The space used does not include the dataset reservation, but does take into account the reservations of any descendant datasets. The amount of space that a dataset consumes from its parent, as well as the amount of space freed if this dataset is recursively deleted, is the greater of its space used and its reservation. When a snapshot is created, the space is initially shared between the snapshot and the filesystem, and possibly with previous snapshots. As the filesystem changes, space that was previously shared becomes unique to the snapshot, and is counted in the used space of the snapshot. Deleting a snapshot can increase the amount of space unique to, and used by, other snapshots. The amount of space used, available, or referenced does not take into account pending changes. While pending changes are generally accounted for within a few seconds, disk changes do not necessarily guarantee that the space usage information is updated immediately.
Space used by individual snapshots can be seen by running `zfs list -t snapshot` from the GUI Shell.


**REFERENCED** indicates the amount of data accessible by this dataset, which may or may not be shared with other datasets in the pool. When a snapshot or clone is created, it initially references the same amount of space as the filesystem or snapshot it was created from, since its contents are identical.

**DELETE** shows a confirmation dialog. Child clones must be deleted before their parent snapshot can be deleted. While creating a snapshot is instantaneous, deleting a snapshot can be I/O intensive and can take a long time, especially when deduplication is enabled. In order to delete a block in a snapshot, ZFS has to walk all the allocated blocks to see if that block is used anywhere else; if it is not, it can be freed.

**CLONE TO NEW DATASET** prompts for the name of the new dataset created from the cloned snapshot. A default name is provided based on the name of the original snapshot. Click the SAVE button to finish cloning the snapshot.

A clone is a writable copy of the snapshot. Since a clone is actually a dataset which can be mounted, it appears in the **Pools** screen rather than the **Snapshots** screen. By default, -clone is added to the name of a snapshot when a clone is created.

**Rollback**: Clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) > **Rollback** asks for confirmation before rolling back to the chosen snapshot state. Clicking **Yes** causes all files in the dataset to revert to the state they were in when the snapshot was created.

{{% alert title=Warning color=warning %}}
Rollback is a potentially dangerous operation and causes any configured replication tasks to fail as the replication system uses the existing snapshot when doing an incremental backup. To restore the data within a snapshot, the recommended steps are:

+ Clone the desired snapshot.
+ Share the clone with the share type or service running on the TrueNAS system.
+ After users have recovered the needed data, delete the clone in the Active Pools tab.

This approach does not destroy any on-disk data and has no impact on replication.
{{% /alert %}}

A range of snapshots can be deleted. Set the left column checkboxes for each snapshot and click the **Delete** icon above the table. Be careful when deleting multiple snapshots.

Periodic snapshots can be configured to appear as shadow copies in newer versions of Windows Explorer. Users can access the files in the shadow copy using Explorer without requiring any interaction with the TrueNAS web interface.

To quickly search through the snapshots list by name, type a matching criteria into the `Filter Snapshots` text area. The listing will change to only display the snapshot names that match the filter text.

{{% alert title=Warning color=warning %}}
A snapshot and any files it contains will not be accessible or searchable if the mount path of the snapshot is longer than 88 characters. The data within the snapshot will be safe, and the snapshot will become accessible again when the mount path is shortened.
{{% /alert %}}

## Browsing a Snapshot Collection

All snapshots for a dataset are accessible as an ordinary hierarchical filesystem, which can be reached from a hidden `.zfs` file located at the root of every dataset. A user with permission to access that file can view and explore all snapshots for a dataset like any other files - from the **CLI** or via *File Sharing* services such as *Samba*, *NFS* and *FTP*. This is an advanced capability which requires some command line actions to achieve. In summary, the main changes to settings that are required are:

+ Snapshot visibility must be manually enabled in the ZFS properties of the dataset.
+ In Samba auxillary settings, the *veto files* command must be modified to not hide the `.zfs file`, and the setting **zfsacl:expose_snapdir=true** must be added.

The effect will be that any user who can access the dataset contents will be able to view the list of snapshots by navigating to the `.zfs` directory of the dataset. They will also be able to browse and search any files they have permission to access throughout the entire snapshot collection of the dataset.

A user’s ability to view files within a snapshot will be limited by any permissions or ACLs set on the files when the snapshot was taken. Snapshots are fixed as “read-only”, so this access does not permit the user to change any files in the snapshots, or to modify or delete any snapshot, even if they had write permission at the time when the snapshot was taken.

ZFS has a `zfs diff` command which can be run at the GUI SHELL. This command will list the files that have changed between any two snapshot versions within a dataset, or between any snapshot and the current data. 
