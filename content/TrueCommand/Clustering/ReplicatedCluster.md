---
title: "Replicated Cluster Volume"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

In a Replicated Volume, the risk of data loss in a distributed volume is overome. Exact copies of the all of the data are maintained on all bricks. The number of replicas in the volume is determined when creating the volume. At least three bricks are needed to create a volume.  For further redundancy, add more bricks.  A three brick volume will have 3 replicas, while a four brick volume will contain 4 replicas. A replicated volume will allow data to still be accessed even if a single brick fails. A Replicated volume is used for better reliability and data redundancy.

{{< hint danger >}}
Using a Replica count of 0 will result in a distributed volume and offer no data integrity saftey. 
{{< /hint >}}


### Creating the cluster

To create a Replicated Cluster Volume, click the Cluster Volume button <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> in the top left of the dashboard or the Cluster Volume button in the Settings Menu <i class="material-icons" aria-hidden="true" title="Settings">settings</i> dropdown.

Once the Cluster Volumes page has loaded click **Create**.
Name the Cluster, select the Replicated type in the *Volume Type* Drop down.

Click the *Brick Choices* drop down and check the locations to use for bricks.

![ReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/ReplicatedClusterSelectBrickLocations.png "ReplicatedClusterSelectBrickLocations")

When finished click **Next**.

![ReplicatedClusterCreate](/images/TrueCommand/2.0/ReplicatedClusterCreate.png "ReplicatedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![ReplicatedClusterReview](/images/TrueCommand/2.0/ReplicatedClusterReview.png "ReplicatedClusterReview")

Once the volume is made, you can view its status.

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")

### Managing the cluster

In a Replicated Volume the editing options are replacing a brick and deleting the cluster.

#### Replacing a Brick in a Replicated Cluster

{{< hint warning >}}
This Feature is not fully implemented yet.
{{< /hint >}}

![DistributedReplicatedClusterOptions](/images/TrueCommand/2.0/DistributedReplicatedClusterOptions.png "DistributedReplicatedClusterOptions")

#### Deleting a Replicated Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![ReplicatedClusterDelete](/images/TrueCommand/2.0/ReplicatedClusterDelete.png "ReplicatedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.



