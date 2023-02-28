---
title: "Managing Snapshots"
description: "This article provides instructions on managing ZFS snapshots in TrueNAS Scale."
weight: 45
aliases:
 - /scale/scaleuireference/storage/snapshotsscale/
 - /scale/scaletutorials/storage/snapshotsscale/
tags: 
 - scalesnapshots
 - scalebackup
 - scalestorage
---

{{< toc >}}

## List Snapshots

Go to **Data Protection** and locate the **Periodic Snapshot Tasks** widget. Click the **Snapshots** button in the lower right hand corner of the widget.

![DataProtectSnapshotTasksSCALE](/images/SCALE/22.12/DataProtectSnapshotTasksSCALE.png "Snapshots Button")

{{< hint info >}}
File Explorer limits the number of snapshots Windows presents to users. If TrueNAS responds with more than the File Explorer limit, File Explorer shows no available snapshots.
TrueNAS displays a dialog stating the dataset snapshot count has more snapshots than recommended, and states performance or functionality might degrade.
{{< /hint >}}

The snapshots display as a list. Use the search bar at top to narrow the selection.

![SnapshotsListingSCALE1](/images/SCALE/22.12/SnapshotsListingSCALE1.png "Snapshot Screen")

Click <span class="material-icons">expand_more</span> to view snapshot options.

![SnapshotsListingExpandedSCALE1](/images/SCALE/22.12/SnapshotsListingExpandedSCALE1.png "Snapshot Screen Expanded")

{{< include file="/_includes/CloneAndPromoteSnapshotDataset.md" type="page" >}}

### Deleting a Snapshot

{{< include file="/_includes/DeletingSnapshots.md" type="page" >}}

![SnapshotDeleteNonPromotedSCALE](/images/SCALE/22.12/SnapshotDeleteNonPromotedSCALE.png "Delete Snapshot Confirmation")

Click the **Delete** button. A confirmation dialog displays. Select **Confirm** to activate the **Delete** button.

### Rollback

The **Rollback** option reverts the dataset back to the point in time saved by the snapshot.

{{< hint warning >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
{{< /hint >}}
Replications use the existing snapshot when doing an incremental backup, and rolling back can put the snapshots out-of-order.
To restore the data within a snapshot, the recommended steps are:

1.  Clone the desired snapshot.
2.  Share the clone with the share type or service running on the TrueNAS system.
3.  Allow users to recover their needed data.
4.  Delete the clone from **Storage**.

This approach does not destroy any on-disk data or impact replication.

TrueNAS asks for confirmation before rolling back to the chosen snapshot state. Select the radio button for how you want the rollback to operate.

![DatasetRollbackSnapshotWarnSCALE](/images/SCALE/22.12/DatasetRollbackSnapshotWarnSCALE.png "Dataset Rollback from Snapshot")

Click **Confirm** to activate the **Rollback** button.

### Deleting with Batch Operations

![SnapshotDeleteBatchSCALE](/images/SCALE/22.12/SnapshotDeleteBatchSCALE.png "Delete Batch Operation Select")

{{< include file="/_includes/SnapshotsBulkOperations.md" type="page" >}} 

![SnapshotDeleteBatchConfirmSCALE](/images/SCALE/22.12/SnapshotDeleteBatchConfirmSCALE.png "Delete Batch Operation Confirm")

## Browsing a Snapshot Collection

{{< include file="/_includes/BrowsingSnapshotCollections1.md" type="page" >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or the **Shares** screen using services like **SMB**, **NFS**, and **SFTP**.

{{< include file="/_includes/BrowsingSnapshotCollections2.md" type="page" >}}

{{< taglist tag="scalesnapshots" limit="10" >}}
