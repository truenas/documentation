---
title: "Managing Clustered Storage"
weight: 20
---

{{< toc >}}

Clustered volumes have differing management options based on the cluster type.

{{< hint danger >}}
Removing and/or replacing bricks from a clustered volume can lead to data corruption. Do not attempt to use this feature at this time. 
{{< /hint >}}

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")

**Distributed-Cluster** volume the editing options are, **Add Brick**, **Replace Brick**, and **Delete** the cluster.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

### Add a brick to a Distributed Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select the **+ Add Brick** option to open the **Add Brick** menu.

![DistributedClusterOptionsAdd](/images/TrueCommand/2.0/DistributedClusterOptionsAdd.png "DistributedClusterOptionsAdd")

Click **Brick Choices** to display the list of available systems.

![DistributedClusterOptionsAddBrick](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrick.png "DistributedClusterOptionsAddBrick")

Selecting a system displays options for the created brick. iXsystems strongly recommends that you match the size of the existing bricks but you can change this if required.

![DistributedClusterOptionsAddBrickOptions](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrickOptions.png "DistributedClusterOptionsAddBrickOptions")

When you are satisfied with the settings, click **SAVE** to add the brick. TrueCommmand and TrueNAS SCALE adds the brick to the cluster.

![DistributedClusterOptionsAddProcessing](/images/TrueCommand/2.0/DistributedClusterOptionsAddProcessing.png "DistributedClusterOptionsAddProcessing")

After adding the new brick the cluster card reflects the change.

![DistributedClusterOptionsAddBrickCompleted](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrickCompleted.png "DistributedClusterOptionsAddBrickCompleted")

### Removing a brick in a Distributed Cluster

{{< hint info >}}
This option is only avilable if a cluster has four or more bricks.
{{< /hint >}}

{{< hint warning >}}
This feature is not yet fully implemented.
{{< /hint >}}

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and hover the mouse over the **Remove Brick** option to display the list of bricks.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

Hover the mouse over the listed bricks to display their bricks. Click on the IP to remove the brick.

![DistributedClusterOptionsRemove](/images/TrueCommand/2.0/DistributedClusterOptionsRemove.png "DistributedClusterOptionsRemove")

A confirmation box displays and you must confirm the deletion to proceed.

![DistributedClusterOptionsRemoveConfirm](/images/TrueCommand/2.0/DistributedClusterOptionsRemoveConfirm.png "DistributedClusterOptionsRemoveConfirm")

After checking the confirm box, click **OK** to remove the brick.

### Deleting a Distributed Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select **Delete**. A confirmation box displays. You must confirm the deletion to proceed.

![DistributedClusterDelete](/images/TrueCommand/2.0/DistributedClusterDelete.png "DistributedClusterDelete")

After checking the confirm box, click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Replicated" >}}

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")

**Replicated-Cluster** volume editing options are **Replace Brick** and **Delete** the cluster.

### Replacing a Brick in a Replicated Cluster

{{< hint warning >}}
This feature is not fully implemented yet.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

### Deleting a Replicated Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select **Delete**. A confirmation box displays and you must confirm the deletion to proceed.

![ReplicatedClusterDelete](/images/TrueCommand/2.0/ReplicatedClusterDelete.png "ReplicatedClusterDelete")

After checking the confirm box, click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Distributed Replicated" >}}

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")

**Distributed-Replicated-Cluster** editing options are **Replace Brick** and **Delete** the cluster.

### Replacing a Brick in a Distributed Replicated Cluster

{{< hint warning >}}
This feature is not fully implemented yet.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

### Deleting a Distributed Replicated Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select **Delete**. A confirmation box displays and you must confirm the deletion to proceed.

![DistributedReplicatedClusterDelete](/images/TrueCommand/2.0/DistributedReplicatedClusterDelete.png "DistributedReplicatedClusterDelete")

After checking the confirm box, click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Dispersed" >}}

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")

**Dispersed-Cluster** volume editing options are **Replace Brick** and **Delete** the cluster.

### Replacing a Brick in a Dispersed Cluster

{{< hint warning >}}
This feature is not fully implemented yet.
{{< /hint >}}

![DispersedClusterOptions](/images/TrueCommand/2.0/DispersedClusterOptions.png "DispersedClusterOptions")

### Deleting a Dispersed Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon oin the cluster overview card and select **Delete**. A confirmation box displays and you must confirm the deletion to proceed.

![DispersedClusterDelete](/images/TrueCommand/2.0/DispersedClusterDelete.png "DispersedClusterDelete")

After checking the confirm box, click **OK** to delete the cluster.
{{< /tab >}}
{{< tab "Distributed Dispersed" >}}

{{< hint warning >}}
Distributed dispersed volumes are not implemented at this time.
{{< /hint >}} 

{{< /tab >}}
{{< /tabs >}}
