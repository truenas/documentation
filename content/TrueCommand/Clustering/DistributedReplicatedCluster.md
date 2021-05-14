---
title: "Distributed Replicated Cluster Volume"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

In a Distributed Replicated Volume, data is distributed across replicated sets of bricks. The number of bricks must be a multiple of the replica count. The order in which bricks are specified is important because adjacent bricks become replicas of each other. This type of volume is best used when high availability of data due to redundancy and scaling storage is required. For example, an 8 brick volume with a replica count of two would result in the first two bricks become replicas of each other then the next two and so on. This volume would be referred to as 4x2. By contrast, in this 8 brick example, a replica count of 4 would result in four bricks become replica of each other and this volume would be referred to as 2x4 volume.

The **Replica value** value for a Distributed Replicated Volume must be a divisor of the total number of bricks selected.  If 8 bricks are selected, the replica count can either be 2 or 4.  A replica count of two will create a 4x2 volume where pairs of bricks replicate each other. A replica count of four will create a 2x4 volume where sets of 4 bricks replicate each other.
{{< hint danger >}}
Using a Replica count of 0 will result in a distributed volume and offer no data integrity saftey. 
{{< /hint >}}
{{< hint warning >}}
Using a Replica count of that is not a divisor of the total number or bricks will results in a failed Volume Creation.
{{< /hint >}}

### Creating the cluster

Once the Cluster Volumes page has loaded click **Create**.
Name the Cluster, select the Distributed Replicated type in the *Volume Type* Drop down.

Click the *Brick Choices* drop down and check the locations to use for bricks.


![DistributedReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedReplicatedClusterSelectBrickLocations.png "DistributedReplicatedClusterSelectBrickLocations")

When finished click **Next**.

![DistributedReplicatedClusterCreate](/images/TrueCommand/2.0/DistributedReplicatedClusterCreate.png "DistributedReplicatedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![DistributedReplicatedClusterReview](/images/TrueCommand/2.0/DistributedReplicatedClusterReview.png "DistributedReplicatedClusterReview")

Once the volume is made, you can view its status.

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")

### Managing the cluster

In a Distributed Replicated the editing options are replacing a brick and deleting the cluster.

#### Replacing a Brick in a Distributed Replicated Cluster

{{< hint warning >}}
This Feature is not fully implemented yet.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

#### Deleting a Distrubuted Replicated Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![DistributedReplicatedClusterDelete](/images/TrueCommand/2.0/DistributedReplicatedClusterDelete.png "DistributedReplicatedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.

