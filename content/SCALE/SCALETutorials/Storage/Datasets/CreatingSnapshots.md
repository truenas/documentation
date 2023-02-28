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

{{< hint info >}}
Consider making a [Periodic Snapshot Task]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

To access the **Snapshots** screen, go to **Data Protection** > **Periodic Snapshot Tasks** and click the **Snapshots** button in the lower right corner of the widget.

![DataProtectSnapshotTasksSCALE](/images/SCALE/22.12/DataProtectSnapshotTasksSCALE.png "Create a New Snapshot")

Existing snapshots display as a list.

![SnapshotsListingSCALE1](/images/SCALE/22.12/SnapshotsListingSCALE1.png "Snapshot Screen")

1. Click **ADD** at the top right of the screen to open the **Add Snapshot** screen.
   
   ![AddSnapshotSCALE1](/images/SCALE/22.12/AddSnapshotSCALE1.png "Add a New Snapshot")

2. Select an existing ZFS pool, dataset, or zvol to snapshot option from the **Dataset** dropdown list. 

3. Accept the name suggested by the TrueNAS software in the **Name** field or enter any custom string to override the suggested name.

4. (Optional) Select an option from  the **Naming Schema** dropdown list that the TrueNAS software populated with existing periodic snapshot task schemas.  
   If you select an option, TrueNAS generates a name for the snapshot using that naming schema from the selected Periodic Snapshot and replicates that snapshot. 

   You cannot enter a value in both **Naming Schema** and in **Name** as selecting or entering a value in **Naming Schema** populates the other field. 

5. (Optional) Select **Recursive** to include child datasets with the snapshot.

6. Click **Save** to create the snapshot.
 
{{< taglist tag="scalesnapshots" limit="10" >}}
