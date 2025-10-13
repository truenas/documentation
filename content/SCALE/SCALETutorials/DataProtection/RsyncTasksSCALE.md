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

[Rsync](https://rsync.samba.org/) provides fast incremental data transfer to synchronize files between a TrueNAS system and a remote system.
The **Push** function copies data from TrueNAS to a remote system.
The **Pull** function copies data from a remote system to the TrueNAS local host system and stores it in the dataset defined in the **Path** field.

There are two ways to connect to a remote system and run an rsync task:

* Set up an [SSH connection](#configuring-ssh-mode-rsync-tasks) to the remote server.
* Set up an [rsync module](#configuring-module-mode-rsync-tasks) for the remote server.

## Before You Configure the Rsync Mode

An rsync task has two basic methods:
* Module
* SSH

Module mode requires adding an rsync app to the remote system, configuring a module on that system, and then entering it in the rsync task in TrueNAS.

SSH mode has two connection options:
* **SSH private key stored in the user's home directory**
* **SSH connection for the keychain**

Setting options change based on the SSH connection option selected.

Set up a home directory for the remote system administrator on the remote system.
Note the path to where home directories are stored to enter on the local host TrueNAS.

If the remote system is also a TrueNAS, go to **Credentials**, select **Users** to see the list of users.
Select the administration user and click **Edit**.

If creating a new administration user for rsync functions, click **Add**.
See [Managing Users]({{< ref "manageusers/#creating-an-administrator-user-account" >}}) for more information.
Take note of the path to the home directory to use in setting up the connection.

Add an SSH connection for the remote server on the local TrueNAS host system.

{{< expand "Adding a remote TrueNAS system" "v" >}}

{{< include file="/static/includes/AddSSHConnection.md" >}}

{{< /expand >}}

TrueNAS allows configuring multiple admin users on the system. All admin users configured in the TrueNAS system show in the rsync task **User** dropdown list.

## Adding an Rsync Task Using SSH

Enabled SSH on both the local host TrueNAS, and the remote destination system.

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

5. Set the **Rsync Mode** to **SSH**, and then select the connection method from the **Connect using** dropdown list.
   Settings fields for the selected connection type show.
   
   Leave this set to **Module** if syncing with a non-TrueNAS remote system.
   See [Addin an Rsync Task Using Module Mode](#adding-an-rsync-task-using-module-mode) for more information.
  
   If selecting **SSH private key stored in the user home directory**, the public key for the SSH connection must be alread be saved in the home directory for the admin user.

   If selecting **SSH connection from the keychain**, choose either the existing SSH credential from the **SSH Connection** dropdown list or select **Add New** to open the **New SSH Connection** configuration screen. See [Using an SSH Connection](#using-an-ssh-connection) below for more information.

   If the connection fails, the system lets you know what is wrong so you can correct the issue with the connection.

6. Enter the full path to the dataset on the remote server in **Remote Path**. The maximum path length is 255 characters.

   To confirm the remote server is reachable and the path exists, leave **Validate Remote Path** selected.

7. Select a schedule for when to run this task and any other options you want to use.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Add Rsync Task Schedule and More Options" id="Add Rsync Task Schedule and More Options" >}}

   If you need a custom schedule, select **Custom** to open the advanced scheduler window.
   {{< expand "Advanced Scheduler" "v" >}}
   {{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
   {{< /expand >}}

8. Leave **Enabled** selected. Clear the checkbox to disable the task without deleting the configuration.

9. Click **Save**. The system verifies the SSH connection and adds the task to the **Rsync Tasks** widget.

To run the rsync task at any time, select it on the **Rsync Tasks** widget, click on the vertical ellipses <span class="material-icons">more_vert</span> for the task, and select the **Run Now**.

#### Using an SSH Connection

The TrueNAS UI allows users to select an existing SSH connection or to create a new connection while configuring the task.
The **New SSH Connection** screen opened using the **Add New** option in the rsync task and accessed while on the **Backup Credentials** screen are essentially the same and show the same setting options.

To set up a new SSH connection before adding an rsync task, go to **Credentials > Backup Credentials** and click **Add** on the **SSH Connections** widget.
See [Adding SSH Credentials]({{< ref "AddSSHConnectionKeyPair" >}}) for more information on adding SSH Connections and key pairs.

To add a new connection while configuring the rsync task on the **Add Rsync Task** screen, set the mode to **SSH**, select **SSH connection for the keychain**, and then select **Add New** on the **SSH Connection** dropdown list. The **New SSH Connection** screen opens.

{{< expand "Adding an SSH Connection to a TrueNAS System" "v" >}}

{{< include file="/static/includes/AddSSHConnection.md" >}}

{{< /expand >}}

{{< expand "Adding an SSH Connection to a Non-TrueNAS System" "v" >}}

{{< include file="/static/includes/AddManualSSHConnection.md" >}}

{{< /expand >}} 

Next, set up a home directory for the system administrator on the remote system if one does not already exist.
If the remote system is a TrueNAS, edit the user to add the public key. In TrueNAS, go to **Users**, click **Edit**, and paste the key into the pubic key field.

After adding the SSH connection, go to **System > Services** to turn on the **SSH** service.
We don't recommend leaving the SSH service turned on when not in use for security hardening.
Turn it on before the rsync task is scheduled to run, then off again after the task completes to keep your system secured.
(Optional) To automatically start or restart the SSH service after a system restart, select this option.
Enable the SSH service on the remote system according to the configuration process for a non-TrueNAS system.

## Setting Up an Rsync Task Using Module Mode 

Before you create an rsync task in module mode, you must [define at least one module](#defining-an-rsync-module) per [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) on the remote rsync server.
The [Rsync Daemon](https://apps.truenas.com/catalog/rsyncd/) application is available in situations where configuring TrueNAS as an rsync server with an rsync module is necessary.

After configuring the remote server with rsync and a module, configure the rsync task in TrueNAS.

### Setting Up an Rsync Module

If the non-TruNAS remote server includes an rsync service, make sure it is turned on. To configure a module on the remote server:

1. Create a dataset.
   Write down the host and path to the data on the remote system you plan to sync with.

2. Create an rsync module.

   If the remote system is not a TrueNAS and has an rsync app installed, create a module according to the configuration process for that app and system.
   If the remote system is not a TrueNAS, install an rsync app, such as [Rsyncd](https://apps.truenas.com/catalog/rsyncd/), and configure it per the instructions for the app and your remote non-TrueNAS system.

   If the remote system is another TrueNAS, install an rsync app.
   Debian-based TrueNAS systems include the **Rsync Daemon** app in the Community app catalog.
   [Install the app](https://apps.truenas.com/resources/deploy-rsyncd/) and use it to configure a module.

   {{< expand "Configuring a module in the TrueNAS RsyncD app" "v" >}}
   To create the module, you need the IP address or host name of your TrueNAS (host) server.
   The host server is configured with the rsync task that transfers your data to the remote server.

   When the remote system is a Debian-based TrueNAS system, go to **Apps > Discover Apps** and search for the **Rsync Daemon** app.
   
   Click on the widget, and then click **Install** to open the installation wizard.

   To add a module, click **Add** to the right of **Rsync Modules**, then:
   1. Assign a name. This name is added in the **Add Rsync Task** screen on your TrueNAS system when you set up a task using **Module** in the **Rsync Mode** field.
   2. (Optional) Enter a comment to help you remember the purpose of this module or where it is used.
   3. Select the host path for the rsyncd app.
      You can use **Create Dataset** to add a new dataset, and repeat to add a new child dataset if not selecting an existing dataset.
   4. Set the level of access by selecting the option on the **Access Mode** dropdown list.
   5. (Optional) Add IP addresses to the **Host Allow** or **Host Deny** options if you want to narrow access to this module.
   6. Take note of the name of the module and the host path to it or use in later when you add the rsync task in your TrueNAS system.

   Complete the rest of the app configuration to suit your use case, and click **Install**. 
   The app shows in the TrueNAS UI on the **Applications** screen as **Running** when fully deployed.
   {{< /expand >}}

### Adding an Rsync Task Using Module Mode

To configure the rsync task using module mode, you need:
* The name of the module
* The IP address or host name for the remote server
* The path to the dataset

Go to **Data Protection** and click **Add** on the **Rsync Tasks** widget to open the **Add Rsync Task** screen.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceAndRemoteSettings.png" alt="Add Rsync Task - Module Mode" id="Add Rsync Task - Module Mode" >}}

1. Enter or browse to and select the dataset or folder to sync with the remote server.
   Clicking on the dataset name populates the path field.

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

2. Select the admin account to perform the rsync task on the **User** dropdown list.
   The user must have permissions to run an rsync on the remote server and read/write permission for the local dataset.

3. Set the **Direction** for the rsync task.
   Select **Pull** to copy from the remote server to TrueNAS or **Push** to copy to the remote server.

4. Set the **Rsync Mode** to **Module**.
   The module settings fields show.

5. Enter the remote host name or IP in **Remote Host**.

6. Set the schedule for when to run this task, and any other options you want to use.

   {{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Add Rsync Task Schedule and More Options" id="Add Rsync Task Schedule and More Options" >}}

   If you need a custom schedule, select **Custom** to open the advanced scheduler window.
   {{< expand "Advanced Scheduler" "v" >}}
   {{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
   {{< /expand >}}

7. Leave the **Enabled** selected to enable the task.
   Clear the checkbox to disable the task without deleting the configuration.

8. Click **Save**.

You can run the rsync task by clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon for the rsync task on the **Rsync Task** widget.
