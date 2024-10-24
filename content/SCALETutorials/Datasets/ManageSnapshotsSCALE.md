---
title: "Managing Snapshots"
description: "Provides instructions on managing ZFS snapshots in TrueNAS Scale."
weight: 45
tags: 
 - snapshots
 - backup
 - storage
---

## Viewing the List of Snapshots

{{< hint type=note >}}
File Explorer limits the number of snapshots Windows presents to users. If TrueNAS responds with more than the File Explorer limit, File Explorer shows no available snapshots.
TrueNAS displays a dialog stating the dataset snapshot count has more snapshots than recommended and states performance or functionality might degrade.
{{< /hint >}}

There are two ways to view the list of snapshots:

* Go to **Datasets** > **Data Protection** widget > **Manage Snapshots** link to open the **Snapshots** screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetDataProtectManageSnapshotsSCALE.png" alt="Manage Snapshots" id="Manage Snapshots" >}}

* Go to **Data Protection**, locate the **Periodic Snapshot Tasks** widget, then click the **Snapshots** button in the lower right-hand corner of the widget.

{{< trueimage src="/images/SCALE/DataProtection/DataProtectSnapshotTasksSCALE.png" alt="Snapshots Button" id="Snapshots Button" >}}

The **Snapshots** screen displays a list of snapshots on the system. Use the search bar at the top to narrow the selection. Clear the search bar to list all snapshots.

{{< trueimage src="/images/SCALE/DataProtection/SnapshotsListingSCALE1.png" alt="Snapshot Screen" id="Snapshot Screen" >}}

Click <span class="material-icons">expand_more</span> to view snapshot options.

{{< trueimage src="/images/SCALE/Datasets/SnapshotsListingExpandedSCALE1.png" alt="Snapshot Screen Expanded" id="Snapshot Screen Expanded" >}}

{{< include file="/static/includes/CloneAndPromoteSnapshotDataset.md" >}}

### Deleting a Snapshot

{{< include file="/static/includes/DeletingSnapshots.md" >}}

{{< trueimage src="/images/SCALE/Datasets/SnapshotDeleteNonPromotedSCALE.png" alt="Delete Snapshot Confirmation" id="Delete Snapshot Confirmation" >}}

Click the **Delete** button. A confirmation dialog displays. Select **Confirm** to activate the **Delete** button.

### Deleting with Batch Operations

{{< include file="/static/includes/SnapshotsBulkOperations.md" >}}

{{< trueimage src="/images/SCALE/Datasets/SnapshotDeleteBatchSCALE.png" alt="Delete Batch Selection" id="Delete Batch Selection" >}}

{{< trueimage src="/images/SCALE/Datasets/SnapshotDeleteBatchConfirmSCALE.png" alt="Confirm Batch Deletion" id="Confirm Batch Deletion" >}}

**Confirm** activates the **Delete** button. If the snapshot has the **Hold** options selected, an error displays to prevent you from deleting that snapshot.

### Using Rollback to Revert a Dataset
The **Rollback** option reverts the dataset to the point in time saved by the snapshot.

{{< hint type=tip title="Replication Safe Alternative" >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
Replications use the existing snapshot when doing an incremental backup, and rolling back can put the snapshots out of order.

A less disruptive method to restore data from a point in time is to clone a specific snapshot as a new dataset:

1. Clone the desired snapshot.
2. Share the clone with the share type or service running on the TrueNAS system.
3. Allow users to recover their needed data.
4. Delete the clone from **Datasets**.

This approach does not destroy any on-disk data or disrupt automated replication tasks.
{{< /hint >}}

TrueNAS asks for confirmation before rolling back to the chosen snapshot state.
Select the radio button for how you want the rollback to operate.

{{< trueimage src="/images/SCALE/Datasets/DatasetRollbackSnapshotWarnSCALE.png" alt="Rollback from Snapshot" id="Rollback from Snapshot" >}}

Click **Confirm** to activate the **Rollback** button.

## Browsing a Snapshot Collection

{{< include file="/static/includes/BrowsingSnapshotCollections1.md" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}
