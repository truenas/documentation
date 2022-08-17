---
title: "Creating and Managing Snapshots"
description: "This article provides instructions on managing ZFS snapshots in TrueNAS Scale."
weight: 30
aliases:
 - /docs/scale/scaleuireference/storage/snapshotsscale/
 - /scale/scaletutorials/storage/snapshotsscale/
tag: 
 - scalesnapshots
 - scalebackup
 - scalestorage
---

{{< toc >}}

{{< include file="/_includes/SnapshotsIntroSnippet.md" type="page" >}}

Taking snapshots requires the system have all [pools]({{< relref "CreatePoolScale.md" >}}), [datasets]({{< relref "DatasetsScale.md" >}}), and [zvols]({{< relref "AddManageZvols.md" >}}) already configured.

## Creating a Snapshot

{{< hint info >}}
Consider making a [Periodic Snapshot Task]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

{{< expand "Video Tutorial" "v" >}}
This short video demonstrates manually adding a snapshot {{< embed-video name="scaleangelfishmanualsnapshots" >}}
{{< /expand >}}

From the **Storage** screen you can either and click **Snapshots** on the top right corner of the screen. Select **Snapshots** to display the **Snapshots** screen, or click on the <span class="material-icons">more_vert</span> for the dataset on the **Pool Manager** screen and select **Create Snapshot** to take a one-time snapshot of that dataset.

If you don't have snapshots created, the **Snapshots** screen displays the **Add Snapshots** option in the center of the screen. 

![SnapshotScreenAddFirstSnapshot](/images/SCALE/22.02/SnapshotScreenAddFirstSnapshot.png "Create a New Snapshot")

1. Click either **Add Snapshots** or **ADD** at the top right of the screen to open the **Add Snapshot** screen.
   
   ![AddSnapshotScreen](/images/SCALE/22.02/AddSnapshotScreen.png "Add a New Snapshot")

2. Select an existing ZFS pool, dataset, or zvol to snapshot option from the **Dataset** dropdown list. 

3. Accept the name suggested by the TrueNAS software in the **Name** field ore enter any custom string to override the suggested name.

4. (Optional) Select an option from  the **Naming Schema** dropdown list that the TrueNAS software populated with existing periodic snapshot task schemas.  
   If you select an option, TrueNAS generates a name for the snapshot using that naming schema from the selected Periodic Snapshot and replicates that snapshot. 

   You cannot enter a value in **Naming Schema** and in **Name** as selecting or entering a value in **Naming Schema** populates the other field. 

5. (Optional) Select **Recursive** to include child datasets with the snapshot.

6. Click **Save** to create the snapshot.
  
## Managing Snapshots

The **Snapshots** screen lists all snapshots created on the system. To manage snapshots, click the <span class="material-icons">expand_more</span> icon to expand the snapshot and display the options for managing that snapshot.

![SnapshotScreenExpandedSnapshot](/images/SCALE/22.02/SnapshotScreenExpandedSnapshot.png "Snapshot Options")

You can display more information in that table by clicking the <span class="material-icons">settings</span> icon. Click **Show** to display extra columns in the table. To hide the added columns, click the span class="material-icons">settings</span> icon again and then click **Hide**. 

Each snapshot entry in the list includes the dataset and snapshot names. Entries also display the snapshot numbers, the space they use, the date the system created them, and the amount of data the dataset can access.

Click <span class="material-icons">expand_more</span> to view snapshot options.

{{< hint info >}}
File Explorer he number of snapshots Windows presents to users. If TrueNAS responds with more than the File Explorer limit, File Explorer shows no available snapshots.
TrueNAS displays a dialog stating the dataset snapshot count has more snapshots than recommended, and states performance or functionality might degrade.
{{< /hint >}}
### Deleting a Snapshot

{{< include file="/_includes/DeletingSnapshots.md" type="page" >}}

![DeleteSnapshotDialog](/images/SCALE/22.02/DeleteSnapshotDialog.png "Delete Snapshot Confirmation")

Click the **Delete** button. A confirmation dialog displays. Select **Confirm** to activate the **Delete** button.

### Cloning to a New Dataset

The **Clone to New Dataset** option creates a new snapshot *clone* (dataset) from the snapshot contents.

{{< expand "What is a clone?" "v" >}}
A **clone** is a writable copy of the snapshot.
Because a clone is a mountable dataset, it appears in the **Storage** screen rather than the **Snapshots** screen.
By default, TrueNAS adds **-clone** to the new snapshot name when creating the clone.
{{< /expand >}}

A dialog prompts for the new dataset name.
The suggested name derives from the snapshot name.

![CloneSnapshotScreen](/images/SCALE/22.02/CloneSnapshotScreen.png "Clone to New Dataset")

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

![DatasetRollbackFromSnapshot](/images/SCALE/22.02/DatasetRollbackFromSnapshot.png "Dataset Rollback from Snapshot")

Click **Confirm** to activate the **Rollback** button.

### Deleting with Batch Operations

![SnapshotBatchOperationConfirmationt](/images/SCALE/22.02/SnapshotBatchOperationConfirmation.png "Delete Batch Operation")

{{< include file="/_includes/SnapshotsBulkOperations.md" type="page" >}}

## Browsing a Snapshot Collection

{{< include file="/_includes/BrowsingSnapshotCollections1.md" type="page" >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or the **Shares** screen using services like **SMB**, **NFS**, and **SFTP**.

{{< include file="/_includes/BrowsingSnapshotCollections2.md" type="page" >}}

{{< taglist tag="scalesnapshots" limit="10" >}}
