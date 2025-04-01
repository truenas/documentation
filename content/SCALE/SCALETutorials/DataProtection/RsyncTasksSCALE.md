---
title: "Configuring Rsync Tasks"
description: "Provides instructions on adding rsync tasks with two methods, SSH connection and module."
weight: 30
aliases:
tags:
 - rsync
 - ssh
keywords:
- enterprise data storage 
- nas data storage
- data protection
- data backup and recovery
- rsync
---

[Rsync](https://rsync.samba.org/) provides fast incremental data transfer to synchronize files between a TrueNAS host and a remote system.
The **Push** function copies data from TrueNAS to a remote system.
The **Pull** function copies data from a remote system to the TrueNAS local host system, and stores it in the dataset defined in the **Path** field.

There are two ways to connect to a remote system and run an rsync task: 
* Set up an [SSH connection](#configuring-ssh-mode-rsync-tasks) to the remote server.
* Set up an [rsync module](#configuring-module-mode-rsync-tasks) for the remote server.

## Configuring SSH Mode Rsync Tasks
Before you create an rsync task in SSH mode, [add an SSH connection and keypair](#setting-up-an-ssh-connection) between the TrueNAS host and remote system.
See [Adding SSH Credentials]({{< relref "AddSSHConnectionKeyPair.md" >}}) for more information.

After setting up the SSH connection, [configure the rsync task](#creating-an-ssh-mode-rsync-task) on the TrueNAS host.

### Setting Up an SSH Connection
You can set up a new SSH connection on the **Credentials > Backup Credentials** screen by clicking **Add** on the **SSH Connections** widget, or while setting up a new rsync task using the option to select **SSH connection from the keychain** in the **Connect using** field and selecting **Add New** in **SSH Connection** on the **Add Rsync Task** screen.

The following procedure provides instructions on setting up an SSH connection using the **New SSH Connection** screen.

Enable SSH on both the local and remote systems.
On the local TrueNAS host system, go to **System > Services** and toggle **SSH** to on, and enable the SSH service on the remote host system.

Set up a home directory for the remote system administrator on the remote system.
Note the path to where home directories are stored to enter on the local host TrueNAS.
   
If the remote system is also a TrueNAS, go to **Credentials**, select **Users** to see the list of users.
Select the administration user and click **Edit**.

If creating a new administration user, for rsync functions, click **Add**.
See [Managing Users]({{< relref "managelocalusersscale/#creating-an-administrator-user-account" >}}) for more information.
Take note of the path to the home directory to use in setting up the connection.

Add an SSH connection for the remote server on the local TrueNAS host system. 

{{< expand "Adding a remote TrueNAS system" "v" >}}

{{< include file="/static/includes/AddSSHConnection.md" >}}

{{< /expand >}}

{{< expand "Adding a connection to a non-TrueNAS remote host system" "v" >}}

{{< include file="/static/includes/AddManualSSHConnection.md" >}}

{{< /expand >}} 

The generated keypair shows on the **SSH Keypair** widget.
To download the public and private keypairs, click the <i class="material-icons" aria-hidden="true" title="Download">file_download</i> for the new keypair on the **SSH Keypairs** widget.

### Adding an Rsync Task
Enabled SSH on both the local host TrueNAS and the remote destination system.

You can use the SSS connection created in [Setting Up an SSH Connection](#setting-up-an-ssh-connection) or create a new connection while configuring the rsync task.

1. Go to **Data Protection** and click **Add** on the **Rsync Tasks** widget to open the **Add Rsync Task** screen.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceRemoteSSH.png" alt="Add Rsync Task - SSH Mode" id="Add Rsync Task - SSH Mode" >}}

2. Enter or browse to the dataset or folder to sync with the remote server.
   Use the <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and each folder listed on the tree to expand and browse through, then click on the name to populate the path field.

    {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

3. Select the administration user for the local host TrueNAS system from the **User** dropdown. This is the user account to perform the rsync task.
   The user must have read/write permissions for the local dataset.

4. Set the **Direction** for the rsync task.
   Select **Pull** to copy from the remote server to TrueNAS or **Push** to copy to the remote server.

5. Select **SSH** as the connection mode from the **Rsync Mode** dropdown to use an SSH connection. The settings fields show.
   
   Set this to **Module** if syncing with a non-TrueNAS remote system. See [Setting Up an Rsync Task Using Module Mode](#setting-up-an-rsync-task-using-module-modek) for more information.
  
6. Choose a connection method from the **Connect using** dropdown list.

   If selecting **SSH private key stored in user's home directory**, the public key for the SSH connection must be saved in the home directory for administration user.
   To accomplish this, copy the public key from the **SSH Keypair** and paste into the **Authorized Keys** field on the **Edit User** screen.

   If selecting **SSH connection from the keychain** the system grabs the key for you, and select either the existing SSH credential from the **SSH Connection** dropdown list or select **Add New** to open the **New SSH Connection** configuration screen.

7. Enter the full path to the dataset on the remote server to either pull from or push to in **Remote Path**.
   Maximum path length is 255 characters.

   If the remote path location does not exist, select **Validate Remote Path** to create and define it in **Remote Path**.

8. Set the schedule for when to run this task, and any other options you want to use.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Add Rsync Task Schedule and More Options" id="Add Rsync Task Schedule and More Options" >}}

   If you need a custom schedule, select **Custom** to open the advanced scheduler window.
   {{< expand "Advanced Scheduler" "v" >}}
   {{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
   {{< /expand >}}

9. Select the **Enabled** to enable the task.
   Leave cleared to disable the task but not delete the configuration.
   You can run the rsync task at any time from the **Rsync Taks** widget by the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon for the rsync task.

10. Click **Save**.
   The system verifies the SSH connection and adds the task to the **Rsync Tasks** widget.
   If the connection fails the system lets you know what went wrong so you can correct the issue with the connection.

## Configuring Module Mode Rsync Tasks

Before you create an rsync task in module mode, you must [define at least one module](#defining-an-rsync-module) per [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) on the remote rsync server.
The [Rsync Daemon]({{< relref "Rsyncd.md" >}}) application is available in situations where configuring TrueNAS as an rsync server with an rsync module is necessary.

After configuring the rsync server, configure the rsync task.

### Defining an Rsync Module

If the non-TruNAS remote server includes an rsync service, make sure it is turned on.

1. Create a dataset on the remote system.
   Write down the host and path to the data on the remote system you plan to sync with.

2. Create an rsync module on the remote system.
   On TrueNAS, install an rsync app (such as [Rsyncd]({{< relref "Rsyncd.md" >}})) and configure the module.

### Setting Up an Rsync Task Using Module Mode

1. Go to **Data Protection** and click **Add** on the **Rsync Tasks** widget to open the **Add Rsync Task** screen.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceAndRemoteSettings.png" alt="Add Rsync Task - Module Mode" id="Add Rsync Task - Module Mode" >}}

2. Enter or browse to the dataset or folder to sync with the remote server.
   Use the <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and each folder listed on the tree to expand and browse through, then click on the name to populate the path field.

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

3. Select a **User** account to perform the rsync task.
   The user must have permissions to run an rsync on the remote server and read/write permission for the local dataset.

4. Set the **Direction** for the rsync task.
   Select **Pull** to copy from the remote server to TrueNAS or **Push** to copy to the remote server.

5. Select **Module** as the connection mode from the **Rsync Mode** dropdown.
   The module settings fields show.

6. Enter the remote host name or IP in **Remote Host**.
   Use the format *username@remote_host* when the username differs from the host entered into the **Remote Host** field.

7. Set the schedule for when to run this task, and any other options you want to use.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Add Rsync Task Schedule and More Options" id="Add Rsync Task Schedule and More Options" >}}

   If you need a custom schedule, select **Custom** to open the advanced scheduler window.
   {{< expand "Advanced Scheduler" "v" >}}
   {{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
   {{< /expand >}}

8. Select the **Enabled** to enable the task.
   Leave cleared to disable the task but not delete the configuration.

   You can run the rsync task by clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon for the rsync task.

9. Click **Save**.
