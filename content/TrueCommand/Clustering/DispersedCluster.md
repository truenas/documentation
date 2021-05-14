---
title: "Dispersed Cluster Volume"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

In a Dispersed Volume, the data is dispersed across the bricks and is based on on erasure codes. The data is stripped, with some redundancy added, across multiple bricks in the volume. Dispersed volumes allow a configurable level of reliability with minimal storage space waste. The number of redundant bricks in the volume is determined when creating the volume. The number of redundant bricks determines how many bricks can be lost without interrupting the operation of the volume.

The **Redundancy value** for a Dispersed Volume must be greater than 0 and less than n-1.  The redundancy value can be considered to be the number of bricks you that can be lost before data loss occurs. 
{{< hint info >}}
Attempting to use a Replica count of 0 in a Dispersed Volume will be overridden by Gluster and the value will be set to 1.
{{< /hint >}}

### Creating the cluster

To create a Dispersed Cluster Volume, click the Cluster Volume button <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> in the top left of the dashboard or the Cluster Volume button in the Settings Menu <i class="material-icons" aria-hidden="true" title="Settings">settings</i> dropdown.

Once the Cluster Volumes page has loaded click **Create**.
Name the Cluster, select the Dispersed type in the *Volume Type* Drop down.

Click the *Brick Choices* drop down and check the locations to use for bricks.

![DispersedClusterSelectBrickLocations](/images/TrueCommand/2.0/DispersedClusterSelectBrickLocations.png "DispersedClusterSelectBrickLocations")

When finished click **Next**.

![DispersedClusterCreate](/images/TrueCommand/2.0/DispersedClusterCreate.png "DispersedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![DispersedClusterReview](/images/TrueCommand/2.0/DispersedClusterReview.png "DispersedClusterReview")

Once the volume is made, you can view its status.

![DispersedClusterCard](/images/TrueCommand/2.0/DispersedClusterCard.png "DispersedClusterCard")

#### Managing the cluster

In a Dispersed Volume the editing options are replacing a brick and deleting the cluster.

#### Replacing a Brick in a Dispersed Cluster

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
