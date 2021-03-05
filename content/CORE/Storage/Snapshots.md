---
title: "Snapshots"
weight: 20
---

{{< toc >}}

Snapshots are one of the most powerful features of ZFS.
A snapshot provides a read-only point-in-time copy of a file system or volume.
This copy does not consume extra space in the ZFS pool.
The snapshot only records the differences between storage block references whenever the data is modified.

{{< expand "Why do I want to keep snapshots?" "v" >}}
Snapshots keep a history of files and provide a way to recover an older or even deleted files.
For this reason, many administrators take regular snapshots, store them for some time, and copy them to a different system.
This strategy allows an administrator to roll the system data back to a specific point in time.
In the event of catastrophic system or disk failure, off-site snapshots can restore data up to the most recent snapshot.
{{< /expand >}}

Taking snapshots requires the system have all [pools](/core/storage/pools/), [datasets](/core/storage/pools/), and [zvols](/core/storage/pools/) already configured.

## Creating a Single Snapshot

{{< hint ok >}}
To save time and regularly create fresh snapshots, consider making a [Periodic Snapshot Task](/core/tasks/) instead.
{{< /hint >}}

To quickly snapshot existing storage, go to **Storage > Snapshots** and click *ADD*.

![StorageSnapshotsAdd](/images/CORE/12.0/StorageSnapshotsAdd.png "Create a New Snapshot")

Use the *Dataset* drop down to select an existing ZFS pool, dataset, or zvol to snapshot.

The suggested *Name* is automatically generated but can be overridden with any custom string.
Choosing a proper *Naming Schema* instead allows including the snapshot in [Replication Tasks](/core/storage/pools/).
The *Naming Schema* drop-down is populated with previously created schemas from periodic snapshot tasks.

To include child datasets with the snapshot, set *Recursive*.

## Managing Snapshots

Go to **Storage > Snapshots** to manage created snapshots.

![StorageSnapshots](/images/CORE/12.0/StorageSnapshots.png "List of Created Snapshots")

Each entry in the list includes the dataset and snapshot names.
Click <i class="fa fa-chevron-right" aria-hidden="true" title="Right Chevron"></i>&nbsp; (Expand) to view options for a snapshot:

{{< tabs "Snapshot Options" >}}
{{< tab "DATE CREATED" >}}
Shows the exact time and date of the snapshot creation.
{{< /tab >}}
{{< tab "USED" >}}
Amount of space consumed by this dataset and all of its descendants.
This value is checked against the dataset quota and reservation.
The space used does not include the dataset reservation, but does take into account the reservations of any descendant datasets.
The amount of space that a dataset consumes from its parent, as well as the amount of space freed if this dataset is recursively deleted, is the greater of its space used and its reservation.

Creating a snapshot initially shares space between the snapshot, filesystem, and possibly with previous snapshots.
Filesystem changes reduces the shared space and counts toward the snapshot's used space.
Snapshot deletion often increases the space that is unique and used in other snapshots.
Another method to view the space used by an individual snapshot is to go to the **Shell** and enter `zfs list -t snapshot`.

The space used, available, or referenced does not account for pending changes.
Pending changes generally update within a few seconds, but larger disk changes slow usage updates.
{{< /tab >}}
{{< tab "REFERENCED" >}}
The amount of data accessible by this dataset,
This could be shared with other datasets in the pool.
New snapshots or clones reference the same amount of space as the filesystem or snapshot it was created from, as the contents are identical.
{{< /tab >}}
{{< tab "DELETE" >}}
Destroys the snapshot.
Child clones must be deleted before their parent snapshot can be deleted.
While creating a snapshot is instantaneous, deleting a snapshot is I/O intensive and can take a long time, especially when deduplication is enabled.
{{< expand "Why?" "v" >}}
To delete a block in a snapshot, ZFS has to review all allocated blocks to see if that block is used anywhere else; if it is not, it can be freed.
{{< /expand >}}
{{< /tab >}}
{{< tab "CLONE TO NEW DATASET" >}}
Creates a new snapshot "clone" (dataset) from the snapshot contents.
{{< expand "What is a clone?" "v" >}}
A clone is a writable copy of the snapshot.
Because a clone is actually a dataset which can be mounted, it appears in the **Pools** screen rather than the **Snapshots** screen.
By default, *-clone* is added to the new snapshot name when the clone is created.
{{< /expand >}}
A dialog prompts for the new dataset *Name*.
The suggested *Name* derives from the snapshot name.
{{< /tab >}}
{{< tab "ROLLBACK" >}}
Revert the **Dataset** back to the point in time saved by the **Snapshot**.

{{< hint warning >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
Replications use the existing snapshot when doing an incremental backup, and rolling back can put the snapshots "out of order".
To restore the data within a snapshot, the recommended steps are:

* Clone the desired snapshot.
* Share the clone with the share type or service running on the TrueNAS system.
* After users have recovered the needed data, delete the clone from **Storage > Pools**.

This approach does not destroy any on-disk data and has no impact on replication.
{{< /hint >}}

TrueNAS asks for confirmation before rolling back to the chosen snapshot state.
Clicking *Yes* reverts all dataset files to the state they were in when the snapshot was created.
{{< /tab >}}
{{< /tabs >}}

### Bulk Operations

To delete multiple snapshots, set the left column boxes for each snapshot and click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> *Delete* button that appears.

To quickly search through the snapshots list by name, type a matching criteria into the <i class="material-icons" aria-hidden="true" title="Search">search</i> *Filter Snapshots* text area.
The list changes to only display the snapshot names that match the filter text.

## Browsing a Snapshot Collection

{{< hint warning >}}
This is an advanced capability which requires ZFS and command line experience.
{{< /hint >}}

All dataset snapshots are accessible as an ordinary hierarchical filesystem
This is reached from a hidden <file>.zfs</file> located at the root of every dataset.

{{< hint warning >}}
A snapshot and any files it contains are not accessible or searchable when the snapshot mount path is longer than *88* characters.
The data within the snapshot is safe and the snapshot is accessible again when the mount path is shortened.
{{< /hint >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or using **Sharing** services like *SMB*, *NFS*, and *SFTP*.
In summary, the main required changes to settings are:

* Snapshot visibility must be manually enabled in the ZFS properties of the dataset.
* In Samba auxiliary settings, the `veto files` command must be modified to not hide the <file>.zfs</file>, and the setting `zfsacl:expose_snapdir=true` must be added.

The effect is that any user who can access the dataset contents can view the list of snapshots by going to the dataset <file>.zfs</file> directory.
Users can browse and search any files they have permission to access throughout the entire dataset snapshot collection.

A user’s ability to view files within a snapshot is limited by any permissions or ACLs set on the files when the snapshot was taken.
Snapshots are fixed as “read-only”, so this access does not permit the user to change any files in the snapshots, or to modify or delete any snapshot, even if they had write permission at the time when the snapshot was taken.

ZFS has a `zfs diff` command which can be run in the **Shell**.
This command lists all changed files between any two snapshot versions within a dataset, or between any snapshot and the current data.
