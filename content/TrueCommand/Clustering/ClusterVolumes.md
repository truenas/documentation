---
title: "Creating Clustered Volumes"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint info >}}
Gluster requires TrueNAS systems to have a static IP.  TrueNAS with DHCP enabled can not be part of a Cluster Volume.
{{< /hint >}}



To create a Cluster Volume, click the Cluster Volume button <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> in the top left of the dashboard or the Cluster Volume button in the Settings Menu <i class="material-icons" aria-hidden="true" title="Settings">settings</i> dropdown.

Once the Cluster Volumes page has loaded click **Create**.
Name the Cluster, select the type in the *Volume Type* Drop down, and set the redundancy level.

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

There are five types of Clustered Volumes.

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}
In a Distributed Volume, files are distributed across the various bricks in the volume. File-A may be stored only in Brick-1 or Brick-2 but not on both. As a result, there is no data redundancy. The purpose for a Distributed Volume is to easily & cheaply scale the volume size. 
Warning: This means that a brick failure will lead to complete loss of data.

Click the *Brick Choices* drop down and check the locations to use for bricks.

![DistributedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedClusterSelectBrickLocations.png "DistributedClusterSelectBrickLocations")

When finished click **Next**.

![DistributedClusterCreate](/images/TrueCommand/2.0/DistributedClusterCreate.png "DistributedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![DistributedClusterReview](/images/TrueCommand/2.0/DistributedClusterReview.png "DistributedClusterReview")

Once the volume is made, you can view its status.

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")

{{< /tab >}}
{{< tab "Replicated" >}}
In a Replicated Volume, the risk of data loss in a distributed volume is overcome. Exact copies of the all of the data are maintained on all bricks. The number of replicas in the volume is determined when creating the volume. At least three bricks are needed to create a volume.  For further redundancy, add more bricks.  A three brick volume will have 3 replicas, while a four brick volume will contain 4 replicas. A replicated volume will allow data to still be accessed even if a single brick fails. A Replicated volume is used for better reliability and data redundancy.

Click the *Brick Choices* drop down and check the locations to use for bricks.

![ReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/ReplicatedClusterSelectBrickLocations.png "ReplicatedClusterSelectBrickLocations")

When finished click **Next**.

![ReplicatedClusterCreate](/images/TrueCommand/2.0/ReplicatedClusterCreate.png "ReplicatedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![ReplicatedClusterReview](/images/TrueCommand/2.0/ReplicatedClusterReview.png "ReplicatedClusterReview")

Once the volume is made, you can view its status.

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")

{{< /tab >}}
{{< tab "Distributed Replicated" >}}
In a Distributed Replicated Volume, data is distributed across replicated sets of bricks. The number of bricks must be a multiple of the replica count. The order in which bricks are specified is important because adjacent bricks become replicas of each other. This type of volume is best used when high availability of data due to redundancy and scaling storage is required. For example, an 8 brick volume with a replica count of two would result in the first two bricks become replicas of each other then the next two and so on. This volume would be referred to as 4x2. By contrast, in this 8 brick example, a replica count of 4 would result in four bricks become replica of each other and this volume would be referred to as 2x4 volume.

The **Replica value** value for a Distributed Replicated Volume must be a divisor of the total number of bricks selected.  If 8 bricks are selected, the replica count can either be 2 or 4.  A replica count of two will create a 4x2 volume where pairs of bricks replicate each other. A replica count of four will create a 2x4 volume where sets of 4 bricks replicate each other.

{{< hint warning >}}
Using a Replica count of that is not a divisor of the total number or bricks will results in a failed Volume Creation.
{{< /hint >}}

Click the *Brick Choices* drop down and check the locations to use for bricks.

![DistributedReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedReplicatedClusterSelectBrickLocations.png "DistributedReplicatedClusterSelectBrickLocations")

Select the *Replica Count* from the list. When finished click **Next**.

![DistributedReplicatedClusterCreate](/images/TrueCommand/2.0/DistributedReplicatedClusterCreate.png "DistributedReplicatedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![DistributedReplicatedClusterReview](/images/TrueCommand/2.0/DistributedReplicatedClusterReview.png "DistributedReplicatedClusterReview")

Once the volume is made, you can view its status.

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")


{{< /tab >}}
{{< tab "Dispersed" >}}
In a Dispersed Volume, the data is dispersed across the bricks and is based on on erasure codes. The data is stripped, with some redundancy added, across multiple bricks in the volume. Dispersed volumes allow a configurable level of reliability with minimal storage space waste. The number of redundant bricks in the volume is determined when creating the volume. The number of redundant bricks determines how many bricks can be lost without interrupting the operation of the volume.

The **Redundancy value** for a Dispersed Volume must be greater than 0 and less than n-1.  The redundancy value can be considered to be the number of bricks you that can be lost before data loss occurs. 

Click the *Brick Choices* drop down and check the locations to use for bricks.

![DispersedClusterSelectBrickLocations](/images/TrueCommand/2.0/DispersedClusterSelectBrickLocations.png "DispersedClusterSelectBrickLocations")

Select the *Redundancy value*. When finished click **Next**.

![DispersedClusterCreate](/images/TrueCommand/2.0/DispersedClusterCreate.png "DispersedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![DispersedClusterReview](/images/TrueCommand/2.0/DispersedClusterReview.png "DispersedClusterReview")

Once the volume is made, you can view its status.

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")

{{< /tab >}}

{{< tab "Distributed Dispersed" >}}

{{< hint warning >}}
Distributed Dispersed Volumes are not implemented at this time.
{{< /hint >}} 

{{< /tab >}}
{{< /tabs >}}
