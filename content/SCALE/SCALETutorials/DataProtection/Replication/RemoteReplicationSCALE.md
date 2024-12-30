---
title: "Setting Up a Remote Replication Task"
description: "Provides instructions on adding a replication task with a remote system."
weight: 30
aliases:
tags:
- replication
- backup
keywords:
- enterprise data storage solution
- nas data storage solution
- data protection
- data backup and recovery
---


## Using Remote Replication
TrueNAS replication allows users to create one-time or regularly scheduled ZFS snapshots of data stored in pools, datasets, or zvols on their system as a way to back up stored data.
When properly configured and scheduled, remote replication takes regular snapshots of storage pools or datasets and saves them in the destination location on another system.

Remote replication occurs between an originating TrueNAS system and a destination TrueNAS system with replicated snapshots.

With the implementation of the administration user and role-based permissions, setting up replication tasks as an admin user has a few differences from those set up when logged in as the root user.
Setting up remote replication when logged in as the admin user requires selecting **Use Sudo For ZFS Commands**.

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

Remote replication requires setting up an SSH connection in TrueNAS before creating a remote replication task.

## Setting Up a Simple Replication Task Overview
This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote.
It also covers the related steps you should take before configuring a replication task.

{{< include file="/static/includes/BasicReplicationProcess.md" >}}

## Creating a Remote Replication Task
To streamline creating simple replication tasks use the **Replication Task Wizard** to create and copy ZFS snapshots to another system.
The wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list to load the configuration settings for that task into the wizard, and then make changes such as assigning it a different destination, schedule, or retention lifetime, etc.
Saving changes to the configuration creates a new replication task without altering the task you loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

{{< include file="/static/includes/ReplicationCreateDatasetAndAdminHomeDirSteps.md" >}}

3. Go to **Data Protection** and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard**. Configure the following settings:

   {{< trueimage src="/images/SCALE/DataProtection/CreateRemoteReplicationTask.png" alt="New Remote Replication Task" id="New Remote Replication Task" >}}

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

   a. Select either **On this System** or **On a Different System** on the **Source Location** dropdown list.
      If your source is a remote system, select **On a Different System**. The **Destination Location** automatically changes to **On this System**.
      If your source is the local TrueNAS system, you must select **On a Different System** from the **Destination Location** dropdown list to do remote replication.

      TrueNAS shows the number of snapshots available for replication.

   b. Select an existing SSH connection to the remote system, or select **Create New** to open the **[New SSH Connection](#configuring-a-new-ssh-connection)** configuration screen.

   c. Browse to the source pool/dataset(s), then click on the dataset(s) to populate the **Source** with the path.
      You can select multiple sources or manually type the names into the **Source** field.
      Selecting **Recursive** replicates all snapshots contained within the selected source dataset snapshots.

   d. Repeat to populate the **Destination** field.
      You cannot use zvols as a remote replication destination. Add a name to the end of the path to create a new dataset in that location.
  
   e. Select **Use Sudo for ZFS Commands**. Only displays when logged in as the admin user (or the name of the admin user).
      This removes the need to issue the cli `zfs allow` command in Shell on the remote system.
      When the dialog displays, click **Use Sudo for ZFS Commands**. If you close this dialog, select the option on the **Add Replication Task** wizard screen.

   {{< trueimage src="/images/SCALE/DataProtection/UseSudoForZFSCommandsDialog.png" alt="Select Use Sudo for ZFS Commands" id="Select Use Sudo for ZFS Commands" >}}

   f. Select **Replicate Custom Snapshots**, then leave the default value in **Naming Schema**.
      If you know how to enter the schema you want, enter it in **Naming Schema**.
      Remote sources require entering a snapshot naming schema to identify the snapshots to replicate.
      A naming schema is a pattern of naming custom snapshots you want to replicate.
      Enter the name and [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) %Y, %m, %d, %H, and %M strings that match the snapshots to include in the replication. Separate entries by pressing <kbd>Enter</kbd>. The number of snapshots matching the patterns display.

      Selecting **Matching regular expression** does not automatically destroy snapshots where selecting **Matching naming schema** does.
      If using regular expression, the snapshots on the destination host are not automatically destroyed if they are also destroyed on the source host due to snapshot lifetime.
      Snapshots on the destination host display as "Will not be destroyed automatically" and do not display with a retention period.
      Use naming schema for these.

   g. (Optional) Enter a name for the snapshot in **Task Name**.
      TrueNAS populates this field with a default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in the destination dataset a challenge.
      To make it easier to find the snapshot, give it a name that is easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily.

{{< include file="/static/includes/ReplicationScheduleAndRetentionSteps.md" >}}

For information on replicating encrypted pools or datasets, see [Setting Up an Encrypted Replication Task]({{< relref "ReplicationWithEncryptionSCALE.md" >}}).

### Configuring a New SSH Connection

{{< include file="/static/includes/ReplicationConfigNewSSHConnection.md" >}}

### Using SSH Transfer Security

{{< include file="/static/includes/ReplicationSSHTransferSecurity.md" >}}