---
title: "Creating Snapshots"
description: "Provides instructions on creating ZFS snapshots in TrueNAS Scale."
weight: 40
tags: 
 - snapshots
 - backup
 - storage
keywords:
- nas storage solution
- enterprise storage solutions
- nas data storage
- backup and data protection
---

{{< include file="/static/includes/SnapshotsIntroSnippet.md" >}}

Taking snapshots requires the system have all [pools]({{< ref "CreatePoolWizard" >}}), [datasets]({{< ref "DatasetsScale" >}}), and [zvols]({{< ref "AddManageZvols" >}}) already configured.

## Creating a Snapshot

{{< hint type=note >}}
Consider making a [Periodic Snapshot Task]({{< ref "PeriodicSnapshotTasksScreensSCALE" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

There are two ways to access snapshot creation:

### From the Data Protection Screen
To access the **Snapshots** screen, go to **Data Protection** > **Periodic Snapshot Tasks** and click the **Snapshots** button in the lower right corner of the widget.

{{< trueimage src="/images/SCALE/DataProtection/DataProtectSnapshotTasksSCALE.png" alt="Create a New Snapshot" id="Create a New Snapshot" >}}

Existing snapshots display as a list.

{{< trueimage src="/images/SCALE/DataProtection/SnapshotsListingSCALE1.png" alt="Snapshot Screen" id="Snapshot Screen" >}}

### From the Datasets Screen
From the **Datasets** screen select the dataset to snapshot, then click **Create Snapshot** on the **Data Protection** widget.

{{< trueimage src="/images/SCALE/Storage/StorageSnapshotsListedContentSCALE.png" alt="Manage Snapshots" id="Manage Snapshots" >}}

If you click **Create Snapshot** the **Snapshots** screen opens filtered for the selected dataset.
Clear the dataset from the search field to see all snapshots.

You can also click the **Manage Snapshots** link on the **Data Protection** widget to open the **Snapshots** screen.

![StorageSnapshotsListedContentSCALE](/images/SCALE/Storage/StorageSnapshotsListedContentSCALE.png "Manage Snapshots") 

1. Click **Add** at the top right of the screen to open the **Add Snapshot** screen.
    
   {{< trueimage src="/images/SCALE/Datasets/AddSnapshotSCALE1.png" alt="Add a New Snapshot" id="Add a New Snapshot" >}}

2. Select a dataset or zvol from the **Dataset** dropdown list.

3. Accept the name suggested by the TrueNAS software in the **Name** field or enter any custom string to override the suggested name.

4. (Optional) Select an option from  the **Naming Schema** dropdown list that the TrueNAS software populated with existing periodic snapshot task schemas.
   If you select an option, TrueNAS generates a name for the snapshot using that naming schema from the selected periodic snapshot and replicates that snapshot.

   You cannot enter a value in both **Naming Schema** and in **Name** as selecting or entering a value in **Naming Schema** populates the other field.

5. (Optional) Select **Recursive** to include child datasets with the snapshot.

6. Click **Save** to create the snapshot.

{{<include file="/static/includes/addcolumnorganizer.md">}}
