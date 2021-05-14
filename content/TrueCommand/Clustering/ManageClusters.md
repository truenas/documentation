---
title: "Managing Clustered Storage"
weight: 20
---

{{< toc >}}

Clustered Volumes have differing management options based on cluster type.

{{< hint danger >}}
Removing and/or Replacing bricks from a clustered volume may lead to data corruption.  Do not attempt to utilize this feature at the current time. 
{{< /hint >}}

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")

In a Distributed Volume the editing options are, adding a brick, replacing a brick, and to delete the cluster.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

### Add a brick to a Distributed Cluster

Click the three dots icon in the cluster overview card and select the **+ Add Brick** option to open the *Add Brick* menu.

![DistributedClusterOptionsAdd](/images/TrueCommand/2.0/DistributedClusterOptionsAdd.png "DistributedClusterOptionsAdd")

Click *Brick Choices* to display the list of systems available.

![DistributedClusterOptionsAddBrick](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrick.png "DistributedClusterOptionsAddBrick")

Selecting a system will display the options for the brick that will be created. It is strongly recommended that the size matches the existing bricks, but this can be changed if required.

![DistributedClusterOptionsAddBrickOptions](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrickOptions.png "DistributedClusterOptionsAddBrickOptions")

When you are satified with the settings, click **SAVE** to add the brick.  TrueCommmand and TrueNAS SCALE will not add the brick to the cluster.

![DistributedClusterOptionsAddProcessing](/images/TrueCommand/2.0/DistributedClusterOptionsAddProcessing.png "DistributedClusterOptionsAddProcessing")

When the new brick has been added, the cluster card will reflect the change.

![DistributedClusterOptionsAddBrickCompleted](/images/TrueCommand/2.0/
DistributedClusterOptionsAddBrickCompleted.png "DistributedClusterOptionsAddBrickCompleted")

### Removing a brick in a Distributed Cluster

{{< hint info >}}
This option is only avilable if a cluster has 4 or more bricks.
{{< /hint >}}

{{< hint warning >}}
This Feature is not fully implemented yet.
{{< /hint >}}

Click the three dots icon in the cluster overview card and hover the **Remove Brick** option for the list of bricks to appear.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

Hover the mouse over the bricks listed to display their bricks. Click the IP to remove the brick.

![DistributedClusterOptionsRemove](/images/TrueCommand/2.0/DistributedClusterOptionsRemove.png "DistributedClusterOptionsRemove")

A confirmation box will appear and the deletion must be confirmed before proceeding.

![DistributedClusterOptionsRemoveConfirm](/images/TrueCommand/2.0/DistributedClusterOptionsRemoveConfirm.png "DistributedClusterOptionsRemoveConfirm")

After checking the confirm box, Click **OK** to remove the brick.


### Deleting a Distrubuted Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![DistributedClusterDelete](/images/TrueCommand/2.0/DistributedClusterDelete.png "DistributedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Replicated" >}}

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")

In a Replicated Volume the editing options are replacing a brick and deleting the cluster.

### Replacing a Brick in a Replicated Cluster

{{< hint warning >}}
This Feature is not fully implemented yet.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

### Deleting a Replicated Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![ReplicatedClusterDelete](/images/TrueCommand/2.0/ReplicatedClusterDelete.png "ReplicatedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Distributed Replicated" >}}

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")

In a Distributed Replicated the editing options are replacing a brick and deleting the cluster.

### Replacing a Brick in a Distributed Replicated Cluster

{{< hint warning >}}
This Feature is not fully implemented yet.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

### Deleting a Distrubuted Replicated Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![DistributedReplicatedClusterDelete](/images/TrueCommand/2.0/DistributedReplicatedClusterDelete.png "DistributedReplicatedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Dispersed" >}}

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")

In a Dispersed Volume the editing options are replacing a brick and deleting the cluster.

### Replacing a Brick in a Dispersed Cluster

{{< hint warning >}}
This Feature is not fully implemented yet.
{{< /hint >}}

![DispersedClusterOptions](/images/TrueCommand/2.0/DispersedClusterOptions.png "DispersedClusterOptions")

### Deleting a Dispersed Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![DispersedClusterDelete](/images/TrueCommand/2.0/DispersedClusterDelete.png "DispersedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.
{{< /tab >}}
{{< tab "Distributed Dispersed" >}}

{{< hint warning >}}
Distributed Dispersed Volumes are not implemented at this time.
{{< /hint >}} 

{{< /tab >}}
{{< /tabs >}}
