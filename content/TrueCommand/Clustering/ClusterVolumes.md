---
title: "Creating Clustered Volumes"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster volume management is a BETA feature in TrueCommand 2.0. 
**Please back up your data before using BETA features.** 
Do not rely on cluster volume management for critical data.
{{< /hint >}}

{{< hint info >}}
Gluster requires TrueNAS systems to have a static IP. TrueNAS systems with DHCP enabled can not be part of a cluster volume.
{{< /hint >}}

To create a cluster volume, click the **Cluster Volume** <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> icon in the top left of the top menu bar or the **Cluster Volume** button on the **Settings** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu drop-down.

Click **Create** on the **Cluster Volumes** page.
Name the cluster, select the desired type in the **Volume Type** drop-down list, then set the redundancy level for distributed replicated and dispersed volumes.

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

TrueCommand has five cluster volume types.

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}
**DISTRIBUTED** volumes distribute files across the various bricks in the volume. *File-A* can be stored in *Brick-1* or *Brick-2* but not on both. As a result, the volume has no data redundancy. A distributed volume's purpose is to cheaply and easily scale the volume size. However, it can suffer significant data loss during a disk or server failure because directory contents are spread randomly across the bricks in the volume. 

{{< hint danger >}}
**Warning:** Brick failure in a distributed volume results in complete data loss.
{{< /hint >}}

Click the **Brick Choices** drop-down, then select the locations to use for bricks.

![DistributedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedClusterSelectBrickLocations.png "DistributedClusterSelectBrickLocations")

When finished, click **Next**.

![DistributedClusterCreate](/images/TrueCommand/2.0/DistributedClusterCreate.png "DistributedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![DistributedClusterReview](/images/TrueCommand/2.0/DistributedClusterReview.png "DistributedClusterReview")

You can view the volume status after creating it.

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")
{{< /tab >}}

{{< tab "Replicated" >}}
**REPLICATED** volumes offer better reliability and data redundancy, and overcome the risk of data loss in a distributed volume. All bricks maintain exact copies of all data. You determine the number of replicas for the volume when you create it. Replicated volumes require at least three bricks, but you can add more bricks for additional redundancy. Three-brick volumes have three replicas, and four-brick volumes have four replicas. Replicated volumes allow data access even if a single brick fails. 

Click the **Brick Choices** drop-down, then select the locations to use for bricks.

![ReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/ReplicatedClusterSelectBrickLocations.png "ReplicatedClusterSelectBrickLocations")

When finished, click **Next**.

![ReplicatedClusterCreate](/images/TrueCommand/2.0/ReplicatedClusterCreate.png "ReplicatedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![ReplicatedClusterReview](/images/TrueCommand/2.0/ReplicatedClusterReview.png "ReplicatedClusterReview")

You can view the volume status after creating it. 

![ReplicatedClusterCard](/images/TrueCommand/2.0/ReplicatedClusterCard.png "ReplicatedClusterCard")
{{< /tab >}}

{{< tab "Distributed Replicated" >}}
**DISTRIBUTED REPLICATED** volumes distribute data across replicated sets of bricks. The brick number must be a multiple of the replica count. The order in which you specify bricks is important because adjacent bricks become replicas of each other. Distributed replicated volumes are best when you need high data availability due to redundancy and scaling storage. For example, an eight-brick volume with a replica count of two would result in the first two bricks becoming replicas of each other, and then the next two and so on. This volume is called a 4x2. By contrast, in this eight brick example, a replica count of four results in four bricks becoming replicas of each other. This volume is called a 2x4.
The distributed replicated volume's **Replica value** must be a divisor of the total number of bricks selected. If you use eight bricks, the replica count can be two or four. A replica count of two creates a 4x2 volume where pairs of bricks replicate each other. A replica count of four generates a 2x4 volume where sets of four bricks replicate each other.

{{< hint warning >}}
Using a replica count that is not a divisor of the total brick number will cause volume creation to fail.
{{< /hint >}}

Click the **Brick Choices** drop-down, then select the locations to use for bricks.

![DistributedReplicatedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedReplicatedClusterSelectBrickLocations.png "DistributedReplicatedClusterSelectBrickLocations")

Select the **Replica Count** from the list. When finished, click **Next**.

![DistributedReplicatedClusterCreate](/images/TrueCommand/2.0/DistributedReplicatedClusterCreate.png "DistributedReplicatedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![DistributedReplicatedClusterReview](/images/TrueCommand/2.0/DistributedReplicatedClusterReview.png "DistributedReplicatedClusterReview")

You can view the volume status after creating it.

![DistributedReplicatedClusterCard](/images/TrueCommand/2.0/DistributedReplicatedClusterCard.png "DistributedReplicatedClusterCard")
{{< /tab >}}

{{< tab "Dispersed" >}}
**DISPERSED** volumes disperse data across the bricks. Dispersed volumes use Erasure Coding (EC), a data protection method in which data is broken into fragments, expanded and encoded with redundant data pieces, and stored across a set of different locations. EC lets users recover the data stored on one or more bricks in case of failure. The redundancy count setting determines the number of bricks that can fail without losing data. Dispersed volumes allow a configurable level of reliability with minimal storage space waste. You define the number of redundant bricks in the volume when you create it. The number of redundant bricks determines how many bricks the volume can lose without interrupting operation.

The dispersed volume's **Redundancy value** must be greater than 0 and less than n-1. Think of the redundancy value as the number of bricks you can lose before data loss occurs. 

The data protection offered by erasure coding can be represented in simple form by the following equation: *n = k + m*. 

Here, *n* is the total number of bricks. We would require any *k* bricks out of *n* bricks for recovery. In other words, we can tolerate failure up to any *m* bricks.

Click the **Brick Choices** drop-down, then select the locations to use for bricks.

![DispersedClusterSelectBrickLocations](/images/TrueCommand/2.0/DispersedClusterSelectBrickLocations.png "DispersedClusterSelectBrickLocations")

Select the **Redundancy value**. When finished, click **Next**.

![DispersedClusterCreate](/images/TrueCommand/2.0/DispersedClusterCreate.png "DispersedClusterCreate")

Review the configuration and click **Create** to create the volume. 

![DispersedClusterReview](/images/TrueCommand/2.0/DispersedClusterReview.png "DispersedClusterReview")

You can view the volume status after creating it.

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")
{{< /tab >}}

{{< tab "Distributed Dispersed" >}}

{{< hint warning >}}
We have not implemented Distributed Dispersed volumes yet.
{{< /hint >}} 

{{< /tab >}}
{{< /tabs >}}