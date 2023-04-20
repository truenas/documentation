---
title: "Creating Snapshots"
description: "This article provides instructions on creating ZFS snapshots in TrueNAS Scale."
weight: 40
aliases:
 - /scale/scaleuireference/storage/snapshotsscale/
 - /scale/scaletutorials/storage/snapshotsscale/
tags: 
 - scalesnapshots
 - scalebackup
 - scalestorage
---

{{< toc >}}

{{< include file="/_includes/SnapshotsIntroSnippet.md" type="page" >}}

Taking snapshots requires the system have all [pools]({{< relref "CreatePoolScale.md" >}}), [datasets]({{< relref "DatasetsScale.md" >}}), and [zvols]({{< relref "AddManageZvols.md" >}}) already configured.

## Creating a Snapshot

{{< hint type=note >}}
Consider making a [Periodic Snapshot Task]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

There are two ways to access snapshot creation:

### From the Data Protection Screen
To access the **Snapshots** screen, go to **Data Protection** > **Periodic Snapshot Tasks** and click the **Snapshots** button in the lower right corner of the widget.

![DataProtectSnapshotTasksSCALE](/images/SCALE/22.12/DataProtectSnapshotTasksSCALE.png "Create a New Snapshot")

Existing snapshots display as a list.

![SnapshotsListingSCALE1](/images/SCALE/22.12/SnapshotsListingSCALE1.png "Snapshot Screen")

### From the Datasets Screen
From the **Datasets** screen select the dataset you want to snapshot, then click **Create Snapshot** on **Data Protection** widget. 

![DatasetDataProtectManageSnapshotsSCALE](/images/SCALE/22.12/DatasetDataProtectManageSnapshotsSCALE.png "Manage Snapshots") 

If you click **Create Snapshot** the **Snapshots** screen opens filtered for the dataset you selected. 
Clear the dataset from the search field to see all snapshots.

You can also click the **Manage Snapshots** link on the **Data Protection** widget to open the **Snapshots** screen.

![StorageSnapshotsListedContentSCALE](/images/SCALE/22.12/StorageSnapshotsListedContentSCALE.png "Manage Snapshots") 

1. Click **Add** at the top right of the screen to open the **Add Snapshot** screen.
    
![AddSnapshotSCALE1](/images/SCALE/22.12/AddSnapshotSCALE1.png "Add a New Snapshot")

2. Select a dataset or zvol from the **Dataset** dropdown list. 

3. Accept the name suggested by the TrueNAS software in the **Name** field or enter any custom string to override the suggested name.

4. (Optional) Select an option from  the **Naming Schema** dropdown list that the TrueNAS software populated with existing periodic snapshot task schemas.  
   If you select an option, TrueNAS generates a name for the snapshot using that naming schema from the selected periodic snapshot and replicates that snapshot. 

   You cannot enter a value in both **Naming Schema** and in **Name** as selecting or entering a value in **Naming Schema** populates the other field. 

5. (Optional) Select **Recursive** to include child datasets with the snapshot.

6. Click **Save** to create the snapshot.

{{< taglist tag="scalesnapshots" limit="10" >}}
