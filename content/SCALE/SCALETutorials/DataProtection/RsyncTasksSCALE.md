---
title: "Configuring Rsync Tasks"
description: "Provides instructions on adding rsync tasks using the two methods, module and SSH connection."
weight: 30
alias:
tags:
 - rsync
 - ssh
---

You often need to copy data to another system for backup or when migrating to a new system.
A fast and secure way of doing this is by using [rsync](https://rsync.samba.org/) with SSH.

Rsync provides the ability to either push or pull data.
The **Push** direction copies data from TrueNAS to a remote system.
The **Pull** function moves or copies data from a remote system and stores it in the defined **Path** on the TrueNAS host system.

## Before You Begin
There are two ways to connect to a remote system and run an rsyc task: setting up an rsync module or an SSH connection.
You need to have either a rsync module configured in a remote rsync server or an SSH connection for the remote server already configured.
Each has different preparation requirements.

For remote sync task using **Module** mode: 

* Create a [dataset]({{< relref "DatasetsSCALE.md" >}}) on the remote TrueNAS (or other system).
  Write down the host and path to the data on the remote system you plan to sync with.

* Create a module on the remote system.
  On TrueNAS, [install an rsync app (for example, Rsyncd)]({{< relref "Rsyncd.md" >}}) and configure the module.

For remote sync using **SSH** mode:

* [Create an SSH connection and keypair]({{< relref "AddSSHConnectionKeyPair.md" >}}).
  Go to **Credentials > Backup Credentials** to add an SSH connection and keypair. Download the keys.
  Enter the admin user that should set up and have permission to perform the remote sync operation with the remote system.
  If using two TrueNAS systems with the admin user, enter admin. If one system only uses the root user, enter root.

* Update the admin user by adding the private key to user in the UI and then adding the private key to the home directory for the admin user.
  When the **Rsync Mode** is **SSH**, 

* Start the SSH service on both systems. Go to **System Settings > Services** and enable **SSH**.

{{< hint type=note >}}
When the remote system is another TrueNAS, set the **Rsync Mode** to **SSH**, verify the **SSH** service is active on both systems, and ensure SSH keys are exchanged between systems.
When the remote system is not TrueNAS, make sure that system has the rsync service activated and permissions configured for the user account name that TrueNAS uses to run the rsync task.
{{< /hint >}}


## Creating an Rsync Task (Module Option)
Before you create an rsync task on the host system, you must create a module on the remote system.
You must define at least one module per [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) on the rsync server.
The [Rsync Daemon]({{< relref "Rsyncd.md" >}}) application is available in situations where configuring TrueNAS as an rsync server with an rsync module is necessary.
If the non-TruNAS remote server includes an rsync service, make sure it is turned on. 

After configuring the rsync server, go to **Data Protection** and click **Add** on the **Rsync Tasks** widget to open the **Add Rsync Task** screen.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceAndRemoteSettings.png" alt="Add Rsync Task Source and Remote" id="Add Rsync Task Source and Remote" >}}

Enter or browse to the dataset or folder to sync with the remote server.
Use the <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and each folder listed on the tree to expand and browse through, then click on the name to populate the path field.

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

Click in the **User** field then select the user from the dropdown list.
The user must have permissions to run an rsync on the remote server.

Set the **Direction** for the rsync task.
Select **Pull** to copy from the remote server to TrueNAS or **Push** to copy from TrueNAS to the remote server.

Select **Module** as the connection mode from the **Rsync Mode** dropdown.

Enter the remote host name or IP in **Remote Host**.
Use the format *username@remote_host* when the username differs from the host entered into the **Remote Host** field.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Add Rsync Task Schedule and More Options" id="Add Rsync Task Schedule and More Options" >}}

Set the schedule for when to run this task, and any other options you want to use.
If you need a custom schedule, select **Custom** to open the advanced scheduler window.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}

Select the **Enabled** to enable the task.
Leave cleared to disable the task but not delete the configuration. 
You can still run the rsync task by going to **Data Protection** and clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon for the rsycn task.

Click **Save.**

### Creating an Rsync Task Using SSH Mode 
First, enable SSH and establish a connection to the remote server.

We do not recommend using the SSH option as this introduces security vulnerabilities and does not meet security hardening guidelines.

{{< expand "Establishing an SSH Connection" "v" >}}
Enable SSH on the remote system.

Enable SSH in TrueNAS.
Go to **System > Services** and toggle **SSH** on.

Set up an SSH connection to the remote server.
To do this go to **Credentials > Backup Credentials** and use **SSH Connections** and **SSH Keypairs**.
See [Adding SSH connections]({{< relref "AddSSHConnectionKeyPair.md" >}}) for more information.

Populate the **SSH Connections** configuration fields as follows:

**Semi-Automatic (TrueNAS to TrueNAS)**

1. Select **Semi-automatic** in **Setup Method**.
2. Enter the remote **TrueNAS URL**.
3. Fill in the remaining credentials for this TrueNAS to authenticate to the remote TrueNAS and exchange SSH keys.
4. Select **Generate New** in **Private Key**.
5. Enter a number of seconds for TrueNAS to attempt the connection before timing out and closing the connection.

**Manual (TrueNAS to Non-TrueNAS)**

1. Enter the remote host name, port number, and user in the appropriate fields.
2. Click **Discover Remote Host Key** to connect to the remote system and automatically populate the **Remote Host Key** field.
3. Enter a number of seconds for TrueNAS to attempt the connection before timing out and closing the connection.
{{< /expand >}}

After establishing the SSH connection, add the rsync task.

Go to **Data Protection** and click **Add** on the **Rsync Tasks** widget to open the **Add Rsync Task** screen.

Choose a **Direction** for the rsync task as either **Push** or **Pull** and then define the task **Schedule**.

Select a **User** account that matches the SSH connection **Username** entry in the **SSH Connections** set up for this remote sync.

Provide a **Description** for the rsync task.

Select **SSH** in **Rsync Mode**.
The SSH settings fields show.

Choose a connection method from the **Connect using** dropdown list.

* If selecting **SSH private key stored in user's home directory**, enter the IP address or hostname of the remote system in **Remote Host**.
  Use the format *username@remote_host* if the username differs on the remote host.
  Enter the SSH port number for the remote system in **Remote SSH Port**. By default, **22** is reserved in TrueNAS.

* If selecting **SSH connection from the keychain**, select an existing **SSH connection** to a remote system or choose **Create New** to add a new SSH connection.

Enter a full path to a location on the remote server where you either copy information from or to in **Remote Path**.
Maximum path length is 255 characters.

If the remote path location does not exist, select **Validate Remote Path** to create and define it in **Remote Path**.

Select the schedule to use and configure the remaining options according to your specific needs.

Click **Save**.