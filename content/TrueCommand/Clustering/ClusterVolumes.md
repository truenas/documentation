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
Gluster requires TrueNAS systmes to have a static IP.  TrueNAS with DHCP enabled can not be part of a Cluster Volume.
{{< /hint >}}

{{< hint danger >}}
Removing and/or Replacing bricks from a clustered volume may lead to data corruption.  Do not attempt to utilize this feature at the current time. 
{{< /hint >}}


To create a Cluster Volume, click the Cluster Volume button <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> in the top left of the dashboard or the Cluster Volume button in the Settings Menu <i class="material-icons" aria-hidden="true" title="Settings">settings</i> dropdown.

Once the Cluster Volumes page has loaded click **Create**.
Name the Cluster, select the type in the *Volume Type* Drop down, and set the redundancy level.

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

There are four types of Clustered Volumes available.

{{< tabs "Types of Clustered Volumes" >}}
{{< tab "Distributed" >}}
In a Distributed Volume, files are distributed across the various bricks in the volume. File-A may be stored only in Brick-1 or Brick-2 but not on both. As a result, there is no data redundancy. The purpose for a Distributed Volume is to easily & cheaply scale the volume size. 
Warning: This means that a brick failure will lead to complete loss of data.
{{< /tab >}}
{{< tab "Replicated" >}}
In a Replicated Volume, the risk of data loss in a distributed volume is overome. Exact copies of the all of the data are maintained on all bricks. The number of replicas in the volume is determined when creating the volume. At least two bricks are needed to create a volume.  For further redundancy, add more bricks.  A 2 brick volume will have 2 replicas, while a three brick volume will contain 3 replicas. A replicated volume will allow data to still be accessed even if a single brick fails. A Replicated volume is used for better reliability and data redundancy.
{{< /tab >}}
{{< tab "Distributed Replicated" >}}
In a Distributed Replicated Volume, data is distributed across replicated sets of bricks. The number of bricks must be a multiple of the replica count. The order in which bricks are specified is important because adjacent bricks become replicas of each other. This type of volume is best used when high availability of data due to redundancy and scaling storage is required. For example, an 8 brick volume with a replica count of two would result in the first two bricks become replicas of each other then the next two and so on. This volume would be referred to as 4x2. By contrast, in this 8 brick example, a replica count of 4 would result in four bricks become replica of each other and this volume would be referred to as 2x4 volume.
{{< /tab >}}
{{< tab "Dispersed" >}}
In a Dispersed Volume, the data is dispersed across the bricks and is based on on erasure codes. The data is stripped, with some redundancy added, across multiple bricks in the volume. Dispersed volumes allow a configurable level of reliability with minimal storage space waste. The number of redundant bricks in the volume is determined when creating the volume. The number of redundant bricks determines how many bricks can be lost without interrupting the operation of the volume.
{{< /tab >}}
{{< /tabs >}}

Next Set the size that is desired for the individual Bricks.  By default, this size will be applied to all bricks in the cluster.  If different sizes are required, uncheck the *Sync Sizes* box.

Click the *Brick Choices* drop down and check the locations to use for bricks.

![ClusterVolumeBricksSelection](/images/TrueCommand/2.0/ClusterVolumeBricksSelection.png "Cluster Volume Bricks Selection")

The **Replica value** for a Replicated Volume must either equal the number of bricks selected or be *n-1* if using an Arbiter.

{{< hint danger >}}
Using a Replica count of 0 will result in a distributed volume and offer no data integrity saftey. 
{{< /hint >}}
{{< hint warning >}}
When using an arbiter, deselect the *Sync Sizes* option and manually set a size for the Arbiter brick. The size of the arbiter needs to be 4kb times the number of files you predict.  Depending on the type of data being stored, that could be much smaller or much larger than the brick size.
{{< /hint >}}

The **Replica value** value for a Distributed Replicated Volume must be a divisor of the total number of bricks selected.  If 8 bricks are selected, the replica count can either be 2 or 4.  A replica count of two will create a 4x2 volume where pairs of bricks replicate each other. A replica count of four will create a 2x4 volume where sets of 4 bricks replicate each other.

{{< hint danger >}}
Using a Replica count of 0 will result in a distributed volume and offer no data integrity saftey. 
{{< /hint >}}
{{< hint warning >}}
Using a Replica count of that is not a divisor of the total number or bricks will results in a failed Volume Creation.
{{< /hint >}}

The **Redundancy value** for a Dispersed Volume must be greater than 0 and less than n-1.  The redundancy value can be considered to be the number of bricks you that can be lost before data loss occurs. 
{{< hint info >}}
Attempting to use a Replica count of 0 will be overridden by Gluster and the value will be set to 1.
{{< /hint >}}


![ClusterVolumeBricksSelected](/images/TrueCommand/2.0/ClusterVolumeBricksSelected.png "Cluster Volume Bricks Selected")

When finished click **Next**.
Review the configuration and click **Create** to create the Volume. 

![ClusterVolumeReview](/images/TrueCommand/2.0/ClusterVolumeReview.png "Cluster Volume Review")

Once the volume is made, you can view its status.

![ClusterVolumeCreated](/images/TrueCommand/2.0/ClusterVolumeCreated.png "Cluster Volume Created")




