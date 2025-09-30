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


Remote replication backs up data store on a local originating TrueNAS system to a second remote destination TrueNAS system.
TrueNAS allows scheduling a one-time or regularly scheduled ZFS snapshot of data stored in pools, datasets, or zvols, and saves them in another system.

With the implementation of the administration user and role-based permissions, setting up replication tasks as an admin user has a few differences from those set up when logged in as the root user.
Setting up remote replication when logged in as the admin user requires selecting **Use Sudo For ZFS Commands**.

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

{{< include file="/static/includes/ReplicationRemoteBeforeYouBegin.md" >}}

To configure the remote replication task, follow the instructions in the section below.

## Creating a Remote Replication Task

Using the **Replication Task Wizard** to create and copy ZFS snapshots to another system, which streamlines creating simple replication tasks.
The wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list.
This loads the configuration settings for that task into the wizard, where you can make changes such as assigning it a different destination, setting a new schedule, or retention lifetime, etc.
Saving changes to the configuration creates a new replication task without altering the task originally loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

{{< include file="/static/includes/ReplicationWizardSteps1and2.md" >}}

3. Configure the following settings for remote replicaiton after selecting **On a Different System** in either **Source Location** or **Destination Location**:

   {{< trueimage src="/images/SCALE/DataProtection/CreateRemoteReplicationTask.png" alt="New Remote Replication Task" id="New Remote Replication Task" >}}

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

   a. Select an existing SSH connection from the dropdown list or select **Add New** to open the **[New SSH Connection](#configuring-a-new-ssh-connection)** screen.
      If you created the SSH connection in the section above, select it.
      When adding a new connection, if there are other configuration issues, such as the user not correctly set up, TrueNAS shows errors indicating what the issue is.
      Exit the replication wizard to correct issues and then return to begin the task configuration again.

      After completing the replication wizard task creation where you add a new SSH connection in the wizard, return to the remote system user configuration to add the new public key for the SSH connection to the admin user configuration.

   b. Use the file browser to browse and select the parent dataset with the data to replication. Clicking on the dataset(s) populates the path.
      
      When setting up the **Source**, you can select multiple sources or manually type the names into the **Source** field.

      When setting up the **Destination**, the **Destination** path allows adding a directory/dataset by entering <b>/<i>name</i></b>, where *rname* is the name of a directory or dataset. The source path does not allow adding a new dataset/directory.
      You cannot use zvols as a remote replication destination. Add a name to the end of the path to create a new dataset in that location.

   c. Repeat the preceding steps to populate which ever location (source or destination) is not specified.
  
   d. Select **Use Sudo for ZFS Commands**.
      A dialog opens prompting you to add this capability. Selecting this removes the need to issue the cli `zfs allow` command in Shell on the remote system.
      Click **Use Sudo for ZFS Commands**.  If you click away or the dialog closes before clicking this option, you can select this option on the wizard screen.

   {{< trueimage src="/images/SCALE/DataProtection/UseSudoForZFSCommandsDialog.png" alt="Select Use Sudo for ZFS Commands" id="Select Use Sudo for ZFS Commands" >}}

{{< include file="/static/includes/ReplicationWizardSteps4thru6.md" >}}

{{< include file="/static/includes/ReplicationScheduleAndRetentionSteps.md" >}}

For information on replicating encrypted pools or datasets, see [Setting Up an Encrypted Replication Task]({{< ref "ReplicationWithEncryptionSCALE" >}}).

### Configuring a New SSH Connection

{{< include file="/static/includes/ReplicationConfigNewSSHConnection.md" >}}

### Using SSH Transfer Security

{{< include file="/static/includes/ReplicationSSHTransferSecurity.md" >}}