---
title: "Setting Up a Remote Replication Task"
description: "This article provides instructions on adding a replication task with a remote system."
weight: 60
aliases:
tags:
- scalereplication
- scalebackup
---

{{< toc >}}


## Using Remote Replication

TrueNAS SCALE replication allows users to create one-time or regularly scheduled snapshots of data stored in pools, datasets or zvols on their SCALE system as a way to back up stored data. 
When properly configured and scheduled, remote replication takes take regular snapshots of storage pools or datasets and saves them in the destination location on another system. 

Remote replication can occur between your TrueNAS SCALE system and another TrueNAS system (SCALE or CORE) where you want to use to store your replicated snapshots. 

With the implementation of rootless login and the admin user, setting up replication tasks as an admin user has a few differences than with setting up replication tasks when logged in as root. Setting up remote replication while logged in as the admin user requires selecting **Use Sudo For ZFS Commands**. 

The first snapshot taken for a task creates a full file system snapshot, and all subsequent snapshots taken for that task are incremental to capture differences occurring between the full and subsequent incremental snapshots.

Scheduling options allow users to run replication tasks daily, weekly, monthly, or on a custom schedule. 
Users also have the option to run a scheduled job on demand.

Remote replication requires setting up an SSH connection in TrueNAS before creating a remote replication task. 

## Setting Up a Simple Replication Task Overview 
This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote. 
It also covers the related steps you should take prior to configuring a replication task. 

{{< include file="/content/_includes/BasicReplicationProcess.md" type="page" >}}

## Creating a Remote Replication Task

To streamline creating simple replication tasks use the **Replication Task Wizard** to create and copy ZFS snapshots to another system. 
The wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list to load the configuration settings for that task into the wizard, and then make change such as assigning it a different destination, schedule, or retention lifetime, etc. 
Saving changes to the configuration creates a new replication task without altering the task you loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

{{< hint info >}}
Replication tasks require a periodic snapshot task. Early release of SCALE requires you to create a periodic snapshot task before you create the replication task, but SCALE now creates this task before it runs a replication task.
{{< /hint >}}
{{< hint warning >}}
Before you begin configuring the replication task, first verify the destination dataset you want to use to store the replication snapshots is free of existing snapshots, or that snapshots with critical data are backed up before you create the task.
{{< /hint >}}
To create a local replication task:

1. Create the destination dataset or storage location you want to use to store the replication snapshots.
   If using another TrueNAS SCALE system, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) in one of your pools.
  
2. Verify the admin user home directory setting. 
   Go to **Credentials > Local User**, click anywhere on the **admin** user row to expand it. 
   Scroll down to the **Home Directory** setting and verify it is not **/nonexistent** but points to the **/home/admin/** path. In later release of Bluefin, select **Create Home Directory**, then Click **Save**.

   In the early release of Bluefin, the admin user created does not point to **/home/admin/** in the **Home Directory** field. 
   You need to create a dataset to store user home directories, for example, a dataset named *homedirectories*, then edit the admin user to change this to the path to the dataset you created, for example, */tank/homedirectories*.

   ![ChangeAdminUserHomeDirectorySetting](/images/SCALE/22.12/ChangeAdminUserHomeDirectorySetting.png "Home Directory Settings Early Bluefin")

   Make sure the home directory is not read only.
   Click **Save**.

3. Go to **Data Protection** and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard**. Configure the following settings:
   
   ![CreateRemoteReplicationTask](/images/SCALE/22.12/CreateRemoteReplicationTask.png "New Remote Replication Task")
   
   a. Select either **On this System** or **On a Different System** on the **Source Location** dropdown list. 
      If your source is a remote system, select **On a Different System**. The **Destination Location** automatically changes to **On this System**.       
      If your source is the local TrueNAS SCALE system, you must select **On a Different System** from the **Destination Location** dropdown list to do remote replication. 
      
      TrueNAS shows the number snapshots available for replication.
    
    b. Select an existing SSH connection to the remote system, or select **Create New** to open the **[New SSH Connection](#configure-a-new-ssh-connection)** configuration screen.
    
    c. Browse to the source pool/dataset(s), then click on the dataset(s) to populate the **Source** with the path. 
       You can select multiple sources or manually type the names into the **Source** field. 
       Selecting **Recursive** replicates all snapshots contained within the selected source dataset snapshots.

    d. Repeat to populate the **Destination** field. 
       You cannot use zvols as a remote replication destination. Add a name to the end of the path to create a new dataset in that location.
  
    e. Select **Use Sudo for ZFS Commands**. Only displays when logged in as the admin user (or the name of the admin user). 
       This removes the need to issue the cli `zfs allow` command in Shell on the remote system. 

    ![CreateRemoteReplicationTaskSetSudo](/images/SCALE/22.12/CreateRemoteReplicationTaskSetSudo.png "Select Use Sudo for ZFS Commands")
    

    f. Select the **Include snapshots with the name** radio button you want to use. If **Naming Schema**, you must enter a schema in **Naming Schema**.
       Remote sources require entering a snapshot naming schema to identify the snapshots to replicate. 
       A naming schema is a pattern of naming custom snapshots you want to replicate. 
       Enter the name and [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) %Y, %m, %d, %H, and %M strings that match the snapshots to include in the replication. Separate entries by pressing <kbd>Enter</kbd>. The number of snapshots matching the patterns display.

   g. (Optional) Enter a name for the snapshot in **Task Name**. 
      SCALE populates this field with the default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in destination dataset a challenge. 
      To make it easier to find the snapshot, give it name easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily. 
    
4. Click **Next** to display the scheduling options.

5. Select the schedule and snapshot retention life time.

    a. Select the **Replication Schedule** radio button you want to use. Select **Run Once** to set up a replication task you run one time.
       Select **Run On a Schedule** then select when from the **Schedule** dropdown list.
    
    ![CreatelReplicationTaskSetSchedule](/images/SCALE/22.12/CreatelReplicationTaskSetSchedule.png "Set Replication Task Schedule")

   b. Select the **Destination Snapshot Lifetime** radio button option you want to use. 
       This specifies how long SCALE should store copied snapshots in the destination dataset before SCALE deletes it.
       **Same as Source** is selected by default. Select **Never Delete** to keep all snapshots until you delete them manually.
       Select **Custom** to show two additional settings, then enter the number of the duration you select from the dropdown list. For example, *2 Weeks*.
  
6. Click **START REPLICATION**. 
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

### Configure a New SSH Connection

To configure a new SSH connection in the **Replication Task Wizard**:

1. Select **Create New** on the **SSH Connection** dropdown list to open the **New SSH Connection** configuration screen.

2. Enter a name for the connection.
   
   ![NewSSHConnectionNameAndMethod](/images/SCALE/22.12/NewSSHConnectionNameAndMethod.png "New SSH Connection Name and Method")

3. Select the **Setup Method** from the dropdown list. If a TrueNAS system, select **Semi-Automatic**.

4. Enter the URL to the remote TrueNAS in **TrueNAS URL**.   

   ![NewSSHConnectionAuthetication](/images/SCALE/22.12/NewSSHConnectionAuthetication.png "New SSH Connection Authentication")

5. Enter the administration user (i.e., root or admin) that logs into the remote system with the web UI in **Admin Username**. 
   Enter the password in **Admin Password**.

6. Enter the administration user (i.e., root or admin) for remote system SSH session.

7. Select **Generate New** from the **Private Key** dropdown list.

8. (Optional) Select a cipher from the dropdown list, or enter a new value in seconds for the **Connection Timeout**.

9. Click **Save** to create a new ssh connection and populate the **SSH Connection** field in the **Replication Task Wizard**.

### Using the Encryption Option
To use encryption when replicating data select **Encryption** and display additional encryption options.

* **Encryption Key Format** allows the user to choose between a hex (base 16 numeral) or passphrase (alphanumeric) style encryption key. 
* **Store Encryption key in Sending TrueNAS database** allows the user to either store the encryption key in the sending TrueNAS database (box checked) or choose a temporary location for the encryption key that decrypts replicated data (box unchecked)

For more information on replicating encrypted pools or datasets, see [Replicating Encrypted Data Storage].

### Using SSH Transfer Security 
{{< hint info >}}
Using encryption for SSH transfer security is always recommended.
{{< /hint >}}

In situations where you use two systems within an absolutely secure network for replication, disabling encryption speeds up the transfer.
However, the data is completely unprotected from eavesdropping.

Choosing **No Encryption** for the task is less secure but faster. This method uses common port settings but you can override these by switching to the **Advanced Replication Creation** options or by editing the task after creation.

![TasksReplicationTaskSecuritySCALE](/images/SCALE/RepSecurityTaskSCALE.png "Replication Security and Task Name")


{{< taglist tag="scalereplication" limit="10" >}}