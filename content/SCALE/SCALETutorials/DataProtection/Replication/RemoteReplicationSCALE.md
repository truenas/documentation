---
title: "Setting Up a Remote Replication Task"
description: "Provides instructions on adding a replication task with a remote system."
weight: 30
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

{{< include file="/content/_includes/ReplicationIntroSCALE.md" type="page" >}}

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

{{< include file="/content/_includes/ReplicationCreateDatasetAndAdminHomeDirSteps.md" type="page" >}}

3. Go to **Data Protection** and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard**. Configure the following settings:
   
   {{< trueimage src="/images/SCALE/22.12/CreateRemoteReplicationTask.png" alt="New Remote Replication Task" id="2 New Remote Replication Task" >}}
   
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
      When the dialog displays, click **Use Sudo for ZFS Comands**. If you close this dialog, select the option on the **Add Replication Task** wizard screen.

   {{< trueimage src="/images/SCALE/22.12/UseSudoForZFSCommandsDialog.png" alt="Select Use Sudo for ZFS Commands" id="3 Select Use Sudo for ZFS Commands" >}}
    
   f. Select **Replicate Custome Snapshots**, then leave the default value in **Naming Schema**.
      If you know how to enter the schema you want, enter it in **Naming Schema**.
      Remote sources require entering a snapshot naming schema to identify the snapshots to replicate. 
      A naming schema is a pattern of naming custom snapshots you want to replicate. 
      Enter the name and [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) %Y, %m, %d, %H, and %M strings that match the snapshots to include in the replication. Separate entries by pressing <kbd>Enter</kbd>. The number of snapshots matching the patterns display.

   g. (Optional) Enter a name for the snapshot in **Task Name**. 
      SCALE populates this field with the default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in destination dataset a challenge. 
      To make it easier to find the snapshot, give it name easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily. 
    
{{< include file="/content/_includes/ReplicationScheduleAndRetentionSteps.md" type="page" >}}

For information on replicating encrypted pools or datasets, see [Setting Up a Encrypted Replication Task]({{< relref "ReplicationWithEncryptionSCALE.md" >}}).

### Configuring a New SSH Connection

{{< include file="/content/_includes/ReplicationConfigNewSSHConnection.md" type="page" >}}

### Using SSH Transfer Security 

{{< include file="/content/_includes/ReplicationSSHTransferSecurity.md" type="page" >}}

{{< taglist tag="scalereplication" limit="10" >}}