---
title: "Creating and Managing Snapshots"
description: "This article provides instructions on managing ZFS snapshots in TrueNAS Scale."
weight: 30
aliases: 
- /scale/scaleuireference/storage/snapshotsscale/
- /scaletutorials/storage/snapshotsscale/
tags: 
 - scalesnapshots
 - scalebackup
 - scalestorage
---

{{< toc >}}

{{< include file="/_includes/SnapshotsIntroSnippet.md" type="page" >}}

Taking snapshots requires the system have all [pools]({{< relref "CreatePoolScale.md" >}}), [datasets]({{< relref "DatasetsScale.md" >}}), and [zvols]({{< relref "AddManageZvols.md" >}}) already configured.

{{< hint info >}}
If you plan to access your snapshots using an SMB share in a Windows client, File Explorer limits the number of snapshots Windows presents to you. 
If TrueNAS responds with more snapshots than the File Explorer limit, File Explorer shows no available snapshots.
TrueNAS displays a dialog stating the dataset snapshot count has more snapshots than recommended, and states performance or functionality might degrade.
{{< /hint >}}

## Creating a Snapshot

{{< hint info >}}
Consider making a [Periodic Snapshot Task]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

From the **Datasets** screen select the dataset you want to snapshot, then click **Create Snapshot** on **Data Protection** widget. 
You can also click **Manage Snapshots** to open the **Snapshots** screen and click **Add**.

If you click **Create Snapshot** the **Snapshots** screen opens filtered for the dataset you selected. 
Clear the dataset from the search field to see all snapshots.

1. Click either **Add** at the top right of the screen to open the **Add Snapshot** screen.
   
   ![AddSnapshotScreen](/images/SCALE/22.12/AddSnapshotScreen.png "Add a New Snapshot")

2. Select dataset or zvol from the **Dataset** dropdown list. 

3. Accept the name suggested by the TrueNAS software in the **Name** field or enter any custom string to override the suggested name.

4. (Optional) Select an option from  the **Naming Schema** dropdown list that the TrueNAS software populated with existing periodic snapshot task schemas.  
   If you select an option, TrueNAS generates a name for the snapshot using that naming schema from the selected Periodic Snapshot and replicates that snapshot. 

   You cannot enter a value in **Naming Schema** and in **Name** as selecting or entering a value in **Naming Schema** populates the other field. 

5. (Optional) Select **Recursive** to include child datasets with the snapshot.

6. Click **Save** to create the snapshot.
  
## Managing Snapshots

The **Snapshots** screen lists all snapshots created on the system after you clear any dataset path from the search field at the top of the screen. 

To manage snapshots, click anywhere on a snapshot to expand it and display the options for managing that snapshot.

![SnapshotsScreenExpandedSnapshot](/images/SCALE/22.12/SnapshotsScreenExpandedSnapshot.png "Expanded Snapshot Screen")

Select the checkbox to the left of each snapshot to select multiple snapshots and display the **Batch Operations** option to **Delete** the selected snapshots.

Click the **Show extra columns** toggle to add more information in the table. Click **Show** to display extra columns in the table. To hide the added columns, click the toggle again and then click **Hide**. 

Snapshot details includes the space used, date created, retention policy, and the amount of data the dataset can access. It also includes four options: **Hold**, **Delete**, **Clone To New Dataset**, and **Rollback**. 

### Deleting a Snapshot

{{< include file="/_includes/DeletingSnapshots.md" type="page" >}}

![DeleteSnapshotDialog](/images/SCALE/22.12/DeleteSnapshotDialog.png "Delete Single Snapshot")

**Confirm** activates the **Delete** button.

#### Batch Operations - Delete
To delete more than one snapshot in one operation, select the checkbox beside the datasets you want to delete and to display the **Batch Operations Delete** option. 

![SnapshotsScreenBatachOperations](/images/SCALE/22.12/SnapshotsScreenBatachOperations.png "Batch Operations Delete Snapshot")

**Batch Operations Delete** opens a window listing all selected snapshots.

![DeleteMultipleSnapshotsWindow](/images/SCALE/22.12/DeleteMultipleSnapshotsWindow.png "Batch Operations Delete Snapshot Window")

{{< include file="/_includes/SnapshotsBulkOperations.md" type="page" >}} 

**Confirm** activates the **Delete** button. If a snaphot has the **[Hold](#snapshot-details-screen)** option selected, an error displays to prevent you from deleting that snapshot.

### Cloning to a New Dataset

The **Clone To New Dataset** option creates a new snapshot *clone* (dataset) from the snapshot contents.

{{< expand "What is a clone?" "v" >}}
A **clone** is a writable copy of the snapshot.
Because a clone is a mountable dataset, it appears in the **Storage** screen rather than the **Snapshots** screen.
By default, TrueNAS adds **-clone** to the new snapshot name when creating the clone.
{{< /expand >}}

A dialog prompts for the new dataset name.
The suggested name derives from the snapshot name.

![CloneToDatasetDialog](/images/SCALE/22.12/CloneToDatasetDialog.png "Clone To New Dataset from Snapshot")

Enter a new name in the **Dataset Name** field or leave the default value if you want to keep track of the dataset based on the snapshot it was created from.

**Clone** creates the new dataset on the **Datasets** screen tree table.

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
4.  Delete the clone from **Datasets**.

This approach does not destroy any on-disk data or impact replication.

TrueNAS asks for confirmation before rolling back to the chosen snapshot state. Select the [radio button]({{< relref "SnapshotsScreens.md" >}}) for how you want the rollback to operate.

![DatasetRollbackFromSnapshotWindow](/images/SCALE/22.12/DatasetRollbackFromSnapshotWindow.png "Dataset Rollback from Snapshot")

Click **Confirm** to activate the **Rollback** button.

## Browsing a Snapshot Collection 

{{< include file="/_includes/BrowsingSnapshotCollections1.md" type="page" >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or the **Shares** screen using services like **SMB**, **NFS**, and **SFTP**.

{{< include file="/_includes/BrowsingSnapshotCollections2.md" type="page" >}}

{{< taglist tag="scalesnapshots" limit="10" >}}
