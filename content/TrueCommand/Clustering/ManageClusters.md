---
title: "Managing Clustered Storage"
weight: 20
---

{{< toc >}}

Clustered volumes have differing management options based on the cluster type.

{{< hint danger >}}
Removing or replacing bricks from a clustered volume can lead to data corruption. Do not attempt to use this feature at this time. 
{{< /hint >}}

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")

**Distributed-Cluster** volumes have three editing options: **Add Brick**, **Remove Brick**, and **Delete**.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

### Add a brick to a Distributed Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select the **+ Add Brick** option to open the **Add Brick to Distributed-Cluster** menu.

![DistributedClusterOptionsAdd](/images/TrueCommand/2.0/DistributedClusterOptionsAdd.png "DistributedClusterOptionsAdd")

Click **Brick Choices** to display the list of available systems.

![DistributedClusterOptionsAddBrick](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrick.png "DistributedClusterOptionsAddBrick")

Selecting a system displays options for the brick. iXsystems strongly recommends that you match the size of the existing bricks, but you can change this if required.

![DistributedClusterOptionsAddBrickOptions](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrickOptions.png "DistributedClusterOptionsAddBrickOptions")

After you are satisfied with the settings, click **SAVE** to add the brick to the cluster.

![DistributedClusterOptionsAddProcessing](/images/TrueCommand/2.0/DistributedClusterOptionsAddProcessing.png "DistributedClusterOptionsAddProcessing")

After adding the new brick, the cluster card reflects the change.

![DistributedClusterOptionsAddBrickCompleted](/images/TrueCommand/2.0/DistributedClusterOptionsAddBrickCompleted.png "DistributedClusterOptionsAddBrickCompleted")

### Removing a brick in a Distributed Cluster

{{< hint info >}}
This option is only available if a cluster has four or more bricks.
{{< /hint >}}

{{< hint warning >}}
This feature is not yet fully implemented.
{{< /hint >}}

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and hover your cursor over the **Remove Brick** option to display the list of bricks.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

Hover your cursor over the listed items to display their bricks. Click on the IP to remove the brick.

![DistributedClusterOptionsRemove](/images/TrueCommand/2.0/DistributedClusterOptionsRemove.png "DistributedClusterOptionsRemove")

Check the **Confirm** box, then click **OK** to remove the brick.

![DistributedClusterOptionsRemoveConfirm](/images/TrueCommand/2.0/DistributedClusterOptionsRemoveConfirm.png "DistributedClusterOptionsRemoveConfirm")

### Deleting a Distributed Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select **Delete**.

![DistributedClusterDelete](/images/TrueCommand/2.0/DistributedClusterDelete.png "DistributedClusterDelete")

Check the **Confirm** box, then click **OK** to delete the cluster.

On the Dashboard, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon and select Services. Stop the Gluster service and uncheck START ON BOOT.

{{< /tab >}}
{{< tab "Replicated" >}}

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")

**Replicated-Cluster** volumes have two editing options: **Replace Brick** and **Delete**.

### Replacing a Brick in a Replicated Cluster

{{< hint warning >}}
This feature is not yet fully implemented.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

### Deleting a Replicated Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select **Delete**.

![ReplicatedClusterDelete](/images/TrueCommand/2.0/ReplicatedClusterDelete.png "ReplicatedClusterDelete")

Check the **Confirm** box, then click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Distributed Replicated" >}}

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")

**Distributed-Replicated-Cluster** volumes have two editing options: **Replace Brick** and **Delete**.

### Replacing a Brick in a Distributed Replicated Cluster

{{< hint warning >}}
This feature is not yet fully implemented.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

### Deleting a Distributed Replicated Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon on the cluster overview card and select **Delete**.

![DistributedReplicatedClusterDelete](/images/TrueCommand/2.0/DistributedReplicatedClusterDelete.png "DistributedReplicatedClusterDelete")

Check the **Confirm** box, then click **OK** to delete the cluster.

{{< /tab >}}
{{< tab "Dispersed" >}}

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")

**Dispersed-Cluster** volumes have two editing options: **Replace Brick** and **Delete**.

### Replacing a Brick in a Dispersed Cluster

{{< hint warning >}}
This feature is not yet fully implemented.
{{< /hint >}}

![DispersedClusterOptions](/images/TrueCommand/2.0/DispersedClusterOptions.png "DispersedClusterOptions")

### Deleting a Dispersed Cluster

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon oin the cluster overview card and select **Delete**. A confirmation box displays and you must confirm the deletion to proceed.

![DispersedClusterDelete](/images/TrueCommand/2.0/DispersedClusterDelete.png "DispersedClusterDelete")

Check the **Confirm** box, then click **OK** to delete the cluster.
{{< /tab >}}
{{< tab "Distributed Dispersed" >}}

{{< hint warning >}}
iXsystems has not implemented Distributed dispersed volumes at this time.
{{< /hint >}} 

{{< /tab >}}
{{< /tabs >}}
