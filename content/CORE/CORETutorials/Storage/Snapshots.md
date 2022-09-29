---
title: "Creating Snapshots"
descripton: "This article describes how to create snapshots on TrueNAS CORE."
weight: 20
aliases:
 - /core/storage/snapshots/
 - /core/uireference/storage/snapshots/
tags:
- coresnapshots
---

{{< toc >}}

{{< include file="/_includes/SnapshotsIntroSnippet.md" type="page" >}}

Taking snapshots requires the system have all [pools]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}}), [datasets]({{< relref "/CORE/CORETutorials/Storage/Pools/datasets.md" >}}), and [zvols]({{< relref "/CORE/CORETutorials/Storage/Pools/zvols.md" >}}) already configured.

## Creating a Single Snapshot

{{< hint ok >}}
Consider making a [Periodic Snapshot Task]({{< relref "/CORE/UIReference/Tasks/PeriodicSnapshotTasks.md" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

To perform a quick snapshot of existing storage, go to **Storage > Snapshots** and click **ADD**.

![StorageSnapshotsAdd](/images/CORE/12.0/StorageSnapshotsAdd.png "Create a New Snapshot")

Use the **Dataset** dropdown list to select an existing ZFS pool, dataset, or zvol to snapshot.

The TrueNAS software displays a suggested name that you can override with any custom string.

To include the snapshot in [local]({{< relref "LocalReplication.md" >}}) or [remote]({{< relref "RemoteReplication.md" >}}) replication tasks  choose a proper naming schema. The **Naming Schema** drop-down list populates with schemas already created from periodic snapshot tasks.

To include child datasets with the snapshot, select **Recursive**.

## Managing Snapshots

Go to **Storage > Snapshots** to manage created snapshots.

![StorageSnapshots](/images/CORE/12.0/StorageSnapshots.png "List of Created Snapshots")

Each entry in the list includes the dataset and snapshot names.
Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to view options for a snapshot.

**DATE CREATED** shows the exact time and date of the snapshot creation.

**USED** shows the amount of space consumed by this dataset and all of its descendants.
This value, checked against the dataset quota and reservation, shows the space used but does not include the dataset reservation. It takes into account the reservations of any descendant datasets.
The amount of space that a dataset consumes from its parent, and the amount of space freed if this dataset is recursively deleted, is the greater of its space used and its reservation.

At creation, a snapshot shares space between the snapshot, file system, and even with previous snapshots.
File system changes reduce the shared space and count toward space used by a snapshot.
Deleting a snapshot often increases the space that is unique and used in other snapshots.

**REFERENCED** shows the amount of data accessible by this dataset. This could be shared with other datasets in the pool. New snapshots or clones reference the same amount of space as the file system it was created from, as the contents are identical.

### Viewing Used Space with Shell

Another method to view the space used by an individual snapshot is to go to the **Shell** and enter command `zfs list -t snapshot`.

The space used, available, or referenced does not account for pending changes.
In general, pending changes update within a few seconds, but larger disk changes slow usage updates.

### Deleting a Snapshot

{{< include file="/_includes/DeletingSnapshots.md" type="page" >}}

### Cloning a Snapshot

Use **CLONE TO NEW DATASET** to create a new snapshot *clone* (dataset) from the snapshot contents.

{{< expand "What is a clone?" "v" >}}
A *clone* is a writable copy of the snapshot.
Because a clone is actually a mountable dataset, it appears in the **Pools** screen rather than the **Snapshots** screen.
Creating a new snapshot adds **-clone** to the name by default.
{{< /expand >}}
A dialog prompts for the new dataset name.
The suggested name derives from the snapshot name.

### Rolling Back
Reverts the dataset back to the point in time saved by the snapshot.

{{< hint warning >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
Replications use the existing snapshot when doing an incremental backup, and rolling back can put the snapshots out of order.
To restore the data within a snapshot, the recommended steps are:

1.  Clone the desired snapshot.

2.  Share the clone with the share type or service running on the TrueNAS system.

3.  Allow users to recover their needed data.

4.  Delete the clone from **Storage > Pools**.

This approach does not destroy any on-disk data and has no impact on replication.
{{< /hint >}}

TrueNAS asks for confirmation before rolling back to the chosen snapshot state.
Clicking **Yes** reverts all dataset files to the state they were in at the time of snapshot creation.

## Bulk Operations

{{< include file="/_includes/SnapshotsBulkOperations.md" type="page" >}}

## Browsing a Snapshot Collection

{{< include file="/_includes/BrowsingSnapshotCollections1.md" type="page" >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or the **Sharing** screen using services like **SMB**, **NFS**, and **SFTP**.

{{< include file="/_includes/BrowsingSnapshotCollections2.md" type="page" >}}

{{< taglist tag="coresnapshots" limit="10" >}}

