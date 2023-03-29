---
title: "Setting Up a Local Replication Task"
description: "This article provides instructions on adding a replication task using different pools or datasets on the same TrueNAS system."
weight: 20
aliases:
tags:
- scalereplication
- scalebackup
- scalesnapshots
---

{{< toc >}}


## Using Local Replication

A local replication creates a zfs snapshot and saves it to another location on the same TrueNAS SCALE system either using a different pool, or dataset or zvol. 
This allows users with only one system to take quick data backups or snapshots of their data when they have only one system.
In this scenario, create a dataset on the same pool to store the replication snapshots. You can create and use a zvol for this purpose.

While we recommend regularly scheduled replications to a remote location as the optimal backup scenario, this is useful when no remote backup locations are available, or when a disk is in immediate danger of failure.

{{< include file="/content/_includes/ZvolSpaceWarning.md" type="page" >}}

Local replication on systems with more than one pool can also create a dataset to use for the replicated snapshots.

With the implementation of rootless login and the admin user, setting up replication tasks as an admin user has a few differences over setting up replication tasks when logged in as root. 

## Setting Up a Simple Replication Task Overview 
This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote. 
It also covers the related steps you should take prior to configuring a replication task. 

{{< include file="/content/_includes/BasicReplicationProcess.md" type="page" >}}

## Configuring a Local Replication Task

The replication wizard allows users to create and copy ZFS snapshots to another location on the same system. 
If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list to load the configuration settings for that task into the wizard, and then make change such as assigning it a different schedule or retention lifetime.

{{< hint info >}}
Replication tasks require a periodic snapshot task. Early release of SCALE requires you to create a periodic snapshot task before you create the replication task, but SCALE now creates this task before it runs a replication task.
{{< /hint >}}
{{< hint warning >}}
Before you begin configuring the replication task, first verify the destination dataset you want to use to store the replication snapshots is free of existing snapshots, or that snapshots with critical data are backed up before you create the task.
{{< /hint >}}
To create a local replication task:

1. Create the destination dataset (or Zvol) you want to use to store the replication snapshots.
   Based on your system configuration and the number of pools on your TrueNAS SCALE system, either [create a dataset]({{< relref "DatasetsSCALE.md" >}}) in your only pool or in one of your other pools.
  
2. Verify the admin user home directory setting. 
   Go to **Credentials > Local User**, click anywhere on the **admin** user row to expand it. 
   Scroll down to the **Home Directory** setting and verify it is not **/nonexistent** but points to the **/home/admin/** path. In later release of Bluefin, select **Create Home Directory**, then Click **Save**.

   In the early release of Bluefin, the admin user created does not point to **/home/admin/** in the **Home Directory** field. 
   You need to create a dataset to store user home directories, for example, a dataset named *homedirectories*, then edit the admin user to change this to the path to the dataset you created, for exmaple, */tank/homedirectories*.

   ![ChangeAdminUserHomeDirectorySetting](/images/SCALE/22.12/ChangeAdminUserHomeDirectorySetting.png "Home Directory Settings Early Bluefin")

   Make sure the home directory is not read only.
   Click **Save**.

3. Go to **Data Protection** and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard**. Configure the following settings:
   
   ![CreateLocalReplicationTask](/images/SCALE/22.12/CreateLocalReplicationTask.png "New Local Replication Task")
   
   a. Select **On this System** on the **Source Location** dropdown list. 
      Browse to the location of the pool or dataset you want to replicate and select it so it populates **Source** with the path.
      Selecting **Recursive** replicates all snapshots contained within the selected source dataset snapshots.

   b. Select **On this System** on the **Destination Location** dropdown list. 
      Browse to the location of the pool or dataset you want to use to store replicated snapshots and select it so it populates the **Destination** with the path.

   c. (Optional) Enter a name for the snapshot in **Task Name**. 
      SCALE populates this field with the default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in destination dataset a challenge. 
      To make it easier to find the snapshot, give it name easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily. 
    
    d. Click **Next** to display the scheduling options.

    e. Select the **Replication Schedule** radio button you want to use. Select **Run Once** to set up a replication task you run one time.
       Select **Run On a Schedule** then select when from the **Schedule** dropdown list.
    
    ![CreateReplicationTaskSetSchedule](/images/SCALE/22.12/CreateReplicationTaskSetSchedule.png "Set Replication Task Schedule")

    f. Select the **Destination Snapshot Lifetime** radio button option you want to use. 
       This specifies how long SCALE should store copied snapshots in the destination dataset before SCALE deletes it.
       **Same as Source** is selected by default. Select **Never Delete** to keep all snapshots until you delete them manually.
       Select **Custom** to show two additional settings, then enter the number of the duration you select from the dropdown list. For example, *2 Weeks*.
  
  4. Click **START REPLICATION**. 
     A dialog displays if this is the first snapshot taken using the destination dataset.
     If SCALE does not find a replicated snapshot in the destination dataset to use to create an incremental snapshot, it deletes any existing snapshots found and creates a full copy of the day snapshot to use as a basis for the future scheduled incremental snapshots for this schedule task. 
     This operation can delete important data, so ensure you can delete any existing snapshots or back them up in another location.
     
     ![ReplicationSnapshotConfirmationDialog](/images/SCALE/22.12/ReplicationSnapshotConfirmationDialog.png "Local Replication Task Confirmation")

     Click **Confirm**, then **Continue** to add the task to the **Replication Task** widget. 
     The newly added task shows the status as **PENDING** until it runs on the schedule you set. 
     
     ![ReplicationTaskWidgetWithPendingTask](/images/SCALE/22.12/ReplicationTaskWidgetWithPendingTask.png "Replication Task in Pending State")
     
     Select **Run Now** if you want to run the task immediately.

To see a log for a task, click the task **State** to open a dialog with the log for that replication task.

To see the replication snapshots, go to **Datasets**, select the destination dataset on the tree table, then select **Manage Snapshots** on the **Data Protection** widget to see the list of snapshots in that dataset. Click **Show extra columns** to add more information columns to the table such as the date created which can help you locate a specific snapshot or enter part of or the full the name in the search field to narrow the list of snapshots.

![ReplicationSnapthotListInDestinationDataset](/images/SCALE/22.12/ReplicationSnapthotListInDestinationDataset.png "Snapshot List in Destination Dataset")


{{< taglist tag="scalereplication" limit="10" >}}
{{< taglist tag="scalesnapshots" limit="10" title="Related Snapshot Articles" >}}