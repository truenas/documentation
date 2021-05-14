---
title: "Distributed Cluster Volume"
weight: 10
---

{{< toc >}}

{{< hint danger >}}
Cluster Volume management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

![ClusterVolumeTypeSelection](/images/TrueCommand/2.0/ClusterVolumeTypeSelection.png "Cluster Volume Type Selection")

In a Distributed Volume, files are distributed across the various bricks in the volume. File-A may be stored only in Brick-1 or Brick-2 but not on both. As a result, there is no data redundancy. The purpose for a Distributed Volume is to easily & cheaply scale the volume size. 
Warning: This means that a brick failure will lead to complete loss of data.


### Creating the cluster

To create a Distributed Cluster Volume, click the Cluster Volume button <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> in the top left of the dashboard or the Cluster Volume button in the Settings Menu <i class="material-icons" aria-hidden="true" title="Settings">settings</i> dropdown.

Once the Cluster Volumes page has loaded click **Create**.
Name the Cluster, select the Distributed type in the *Volume Type* Drop down.

Click the *Brick Choices* drop down and check the locations to use for bricks.

![DistributedClusterSelectBrickLocations](/images/TrueCommand/2.0/DistributedClusterSelectBrickLocations.png "DistributedClusterSelectBrickLocations")

Set the sizes for the bricks. When finished click **Next**.

![DistributedClusterCreate](/images/TrueCommand/2.0/DistributedClusterCreate.png "DistributedClusterCreate")

Review the configuration and click **Create** to create the Volume. 

![DistributedClusterReview](/images/TrueCommand/2.0/DistributedClusterReview.png "DistributedClusterReview")

Once the volume is made, you can view its status.

![DistributedClusterCard](/images/TrueCommand/2.0/DistributedClusterCard.png "DistributedClusterCard")

### Managing the cluster

In a Distributed Volume the editing options are, adding a brick, replacing a brick, and to delete the cluster.

![DistributedClusterOptions](/images/TrueCommand/2.0/DistributedClusterOptions.png "DistributedClusterOptions")

#### Add a brick to a Distributed Cluster

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

#### Removing a brick in a Distributed Cluster

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


#### Deleting a Distrubuted Cluster

Click the three dots icon in the cluster overview card and select **Delete**
A confirmation box will appear and the deletion must be confirmed before proceeding.

![DistributedClusterDelete](/images/TrueCommand/2.0/DistributedClusterDelete.png "DistributedClusterDelete")

After checking the confirm box, Click **OK** to delete the cluster.

