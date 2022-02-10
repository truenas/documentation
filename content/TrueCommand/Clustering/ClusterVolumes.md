---
title: "Creating Clustered Volumes"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

{{< hint info >}}
Gluster requires TrueNAS systems to have a static IP. TrueNAS with DHCP enabled can not be part of a cluster volume.
{{< /hint >}}

{{< hint warning >}}
TrueNAS does not support distributed dispersed volumes at this time.

The cluster feature uses reverse DNS lookup. A valid reverse lookup is required.
{{< /hint >}} 

To create a cluster volume, click the **Cluster Volume** icon <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> in the top left of the top menu bar or the **Cluster Volume** button on the **Settings** menu <i class="material-icons" aria-hidden="true" title="Settings">settings</i> dropdown.

Click **Create** on the **Cluster Volumes** page.
Type a name for the cluster, select the desired type on the **Volume Type** drop-down list, and then set the redundancy level for distributed replicated and dispersed volumes.

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

There are five types of clustered volumes.

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}
Select **DISTRIBUTED** volume to distribute files across the various bricks in the volume. 
You can only store *File-A* in *Brick-1* or *Brick-2* but not on both. 
As a result, there is no data redundancy. 
The purpose of a distributed volume is to easily and cheaply scale the volume size. 
Distributed volumes can suffer significant data loss during a disk or server failure because directory contents are spread randomly across the bricks in the volume. 

{{< hint danger >}}
Warning: This means that a brick failure leads to complete loss of data.
{{< /hint >}}

Click the **Brick Choices** down arrow icon and select the locations to use for bricks from the dropdown list.

![DistributedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedClusterSelectBrickLocations.png "DistributedClusterSelectBrickLocations")

When finished, click **Next**.

![DistributedClusterCreate](/images/TrueCommand/2.0/DistributedClusterCreate.png "DistributedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![DistributedClusterReview](/images/TrueCommand/2.0/DistributedClusterReview.png "DistributedClusterReview")

After making the volume you can view its status.

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")

{{< /tab >}}
{{< tab "Replicated" >}}
Select **REPLICATED** volume for better reliability and data redundancy, and overcome the risk of data loss in a distributed volume. 
Exact copies of the all of the data are maintained on all bricks. 
The number of replicas in the volume is determined when creating the volume. 
At least three bricks are needed to create a volume. 
For further redundancy, add more bricks. 
A three brick volume has three replicas, while a four brick volume contains four replicas. 
A replicated volume allows data access even if a single brick fails. 

Click the **Brick Choices** down arrow icon and select the locations to use for bricks from the dropdown list.

![ReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/ReplicatedClusterSelectBrickLocations.png "ReplicatedClusterSelectBrickLocations")

When finished click **Next**.

![ReplicatedClusterCreate](/images/TrueCommand/2.0/ReplicatedClusterCreate.png "ReplicatedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![ReplicatedClusterReview](/images/TrueCommand/2.0/ReplicatedClusterReview.png "ReplicatedClusterReview")

After making the volume you can view its status.

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")

{{< /tab >}}
{{< tab "Distributed Replicated" >}}
Select **DISTRIBUTED REPLICATED** volume to distribute data across replicated sets of bricks. 
The number of bricks must be a multiple of the replica count. 
The order in which bricks are specified is important because adjacent bricks become replicas of each other. 
This type of volume is best used when high availability of data due to redundancy and scaling storage is required. 
For example, an eight brick volume with a replica count of two would result in the first two bricks becoming replicas of each other, and then the next two and so on. 
This volume can be referred to as 4x2. 
By contrast, in this eight brick example, a replica count of four results in four bricks becoming replica of each other and this volume can be referred to as 2x4 volume.

The **Replica value** for a distributed replicated volume must be a divisor of the total number of bricks selected. 
If eight bricks are selected, the replica count can be either two or four. 
A replica count of two creates a 4x2 volume where pairs of bricks replicate each other. 
A replica count of four creates a 2x4 volume where sets of four bricks replicate each other.

{{< hint warning >}}
Using a replica count that is not a divisor of the total number or bricks results in a failed volume creation.
{{< /hint >}}

Click the **Brick Choices** down arrow icon and select the locations to use for bricks from the dropdown list.

![DistributedReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedReplicatedClusterSelectBrickLocations.png "DistributedReplicatedClusterSelectBrickLocations")

Select the **Replica Count** from the list. When finished click **Next**.

![DistributedReplicatedClusterCreate](/images/TrueCommand/2.0/DistributedReplicatedClusterCreate.png "DistributedReplicatedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![DistributedReplicatedClusterReview](/images/TrueCommand/2.0/DistributedReplicatedClusterReview.png "DistributedReplicatedClusterReview")

After making the volume you can view its status.

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")


{{< /tab >}}
{{< tab "Dispersed" >}}
Select **DISPERSED** volume to disperse data across the bricks. 
It is based on erasure coding. 
Erasure coding (EC) is a method of data protection in which data is broken into fragments, expanded and encoded with redundant data pieces and stored across a set of different locations. 
This allows the recovery of the data stored on one or more bricks in case of failure. 
The number of bricks that can fail without losing data is configured by setting the redundancy count. 
Dispersed volumes allow a configurable level of reliability with minimal storage space waste. 
The number of redundant bricks in the volume is determined when creating the volume. 
The number of redundant bricks determines how many bricks can be lost without interrupting the operation of the volume.

The **Redundancy value** for a dispersed volume must be greater than 0 and less than n minus 1 or n-1. 
Think of the redundancy value as the number of bricks you can lose before data loss occurs. 
The data protection offered by erasure coding can be represented in simple form by the following equation: *n* = *k* + *m*. 
Here *n* is the total number of bricks, we would require any *k* bricks out of *n* bricks for recovery. 
In other words, we can tolerate failure up to any *m* bricks.

Click the **Brick Choices** down arrow icon and select the locations to use for bricks from the dropdown list.

![DispersedClusterSelectBrickLocations](/images/TrueCommand/2.0/DispersedClusterSelectBrickLocations.png "DispersedClusterSelectBrickLocations")

Select the **Redundancy value**. When finished click **Next**.

![DispersedClusterCreate](/images/TrueCommand/2.0/DispersedClusterCreate.png "DispersedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![DispersedClusterReview](/images/TrueCommand/2.0/DispersedClusterReview.png "DispersedClusterReview")

After making the volume you can view its status.

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")

{{< /tab >}}

{{< tab "Distributed Dispersed" >}}

{{< hint warning >}}
Distributed dispersed volumes are not implemented at this time.
{{< /hint >}} 

{{< /tab >}}
{{< /tabs >}}
