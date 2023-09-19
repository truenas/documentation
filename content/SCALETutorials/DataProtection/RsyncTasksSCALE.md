---
title: "Configuring Rsync Tasks"
description: "Provides instructions on adding rsync tasks using either of two methods, one using an rsync module created in TrueNAS and the other using an SSH connection."
weight: 30
alias:
tags:
 - scalersync
 - scalessh
---

{{< toc >}}

You often need to copy data to another system for backup or when migrating to a new system.
A fast and secure way of doing this is by using [rsync](https://rsync.samba.org/) with SSH.

## Rsync Basic Requirements

For a remote sync (rsync) task to work you need to first:

* Create a [dataset]({{< relref "DatasetsSCALE.md" >}}) on the TrueNAS

* When the **Rsync Mode** is **SSH**, go to **System Settings > Services** and enable **SSH**.
  Create an SSH connection in **Credentials > Backup Credentials > SSH Connections**.

* When the **Rsync Mode** is **Module**,  record the host and path to the data on the remote system you plan to sync with.

Rsync provides the ability to either push or pull data. 
The **Push** direction copies data from TrueNAS to a remote system.
The **Pull** function moves or copies data from a remote system and stores it in the defined **Path** on the TrueNAS host system.

{{< hint type=note >}}
When the remote system is another TrueNAS, set the **Rsync Mode** to **SSH**, verify the **SSH** service is active on both systems, and ensure SSH keys are exchanged between systems.
When the remote system is not TrueNAS, make sure that system has the rsync service activated and permissions configured for the user account name that TrueNAS will use to run the rsync task.
{{< /hint >}}

## Creating an Rsync Task

Go to **Data Protection > Rsync Tasks** and click **Add** to open the **Add Rsync Task** configuration screen.

![AddRsyncTaskSourceRemoteModule](/images/SCALE/23.10/AddRsyncTaskSourceRemoteModule.png "Add Rsync Task Source and Remote Settings") 

Enter or use the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the path to copy.

Begin typing the user into the **User** field or select the user from the dropdown list.
The user must have permissions to run an rsync on the remote server.

Select the direction. Select **Pull** to copy from the remote server to TrueNAS, or **Push** to copy from TrueNAS to the remote server.

Enter the remote host name or IP in **Remote Host**.
You need to have the remote server rsync service configured and turned on.

Select the connection mode from the **Rsync Mode** dropdown. Each mode option displays settings for the selected type. 
You need to have either a rsync module configured in a remote rsync server or an SSH connection for the remote server already configured.

Set the schedule for when to run this task, and any other options you want to use. 
If you need a custom schedule, select **Custom** to open the advanced scheduler window.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="content/_includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}
Click **Save.**

### Creating an Rsync Task Using SSH Mode (Recommended)

First, enable SSH on the remote system.
Next enable SSH in TrueNAS; go to **System > Services** and toggle **SSH** on.

Now set up an SSH connection to the remote server. You can do this in **Credentials > Backup Credentials** using **SSH Connections** and **SSH Keypairs**, or using **System Settings > Shell** and TrueNAS CLI commands.
To use the UI, see [Adding SSH connections]({{< relref "AddSSHConnectionKeyPair.md" >}}).
Populate the **SSH Connections** configuration fields as follows:

**Semi-Automatic (TrueNAS to TrueNAS)**

1. Select **Semi-automatic** as the **Setup Method**.
2. Enter the remote **TrueNAS URL**.
3. Fill in the remaining credentials for this TrueNAS to authenticate to the remote TrueNAS and exchange SSH keys.
4. Select **Private Key** to **Generate New**.
5. Enter a number of seconds for TrueNAS to attempt the connection before timing out and closing the connection.

**Manual (TrueNAS to Non-TrueNAS)**

1. Enter the remote **Host** name, **Port**, and **Username**.
2. With these fields properly configured, click **Discover Remote Host Key** to connect to the remote system and automatically populate the **Remote Host Key**.
3. Enter a number of seconds for TrueNAS to attempt the connection before timing out and closing the connection.

After establishing the SSH connection, add the rsync task.

{{< expand "Rsync Task Creation (Click to expand)" "v" >}}

Go to **Data Protection > Rsync Tasks** and click **Add** to open the **Add Rsync Task** configuration screen.

Enter the required information as described in [Creating an Rsync Task](#creating-an-rsync-task) above.

Select a **User** account that matches the SSH connection **Username** entry in the **SSH Connections** you set up.

Choose a **Direction** for the rsync task as either **Push** or **Pull** and then define the task **Schedule**.

Provide a **Description** for the rsync task.

Select **SSH** in **Rsync Mode**.
The SSH settings fields display.

Choose a connection method from the **Connect using** dropdown list.
These image and fields display when **SSH private key stored in user's home directory** is chosen:

![AddRsyncTaskSourceRemoteSSHDir](/images/SCALE/22.12/AddRsyncTaskSourceRemoteSSHDir.png "Add Rsync Task: SSH Mode")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| Path | Enter or browse to the path to be copied. |
| User | Select the user to run the rsync task. The user selected must have permissions to write to the specified directory on the remote host. |
| Direction | Directs the flow of data to the remote host. Options are **Push** and **Pull**. |
| Description | Enter a description of the rsync task. |
| Rsync Mode | Choose to either use a custom-defined remote module of the rsync server or to use an SSH configuration for the rsync task. |
| Connect using | Use the dropdown list to select. The following fields display when **SSH private key stored in user's home directory** is selected: |
| Remote Host | Enter the IP address or hostname of the remote system that will store the copy. Use the format `username@remote_host` if the username differs on the remote host. |
| Remote SSH Port | Enter the SSH Port of the remote system. Default is 22. |
| Remote Path | Enter a path to use on the remote system for the sync task. |
| Validate Remote Path | Set to automatically create the defined **Remote Path** if it does not exist. Checkbox is selected by default. |
{{< /truetable >}}

If you chose **SSH connection from the keychain**, the following fields display:

![AddRsyncTaskSourceRemoteSSHKeychain](/images/SCALE/22.12/AddRsyncTaskSourceRemoteSSHKeychain.png "Add Rsync Task: SSH Mode")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| Path | Enter or browse to the path to be copied. |
| User | Select the user to run the rsync task. The user selected must have permissions to write to the specified directory on the remote host. |
| Direction | Directs the flow of data to the remote host. Options are **Push** and **Pull**. |
| Description | Enter a description of the rsync task. |
| Rsync Mode | Choose to either use a custom-defined remote module of the rsync server or to use an SSH configuration for the rsync task. |
| Connect using | Use the dropdown list to select. The following fields display when **SSH SSH connection from the keychain** is selected: |
| SSH Connection | Select an existing **SSH connection** to a remote system or choose **Create New** to create a new SSH connection. |
| Remote Path | Enter a path to use on the remote system for the sync task. |
| Validate Remote Path | Set to automatically create the defined **Remote Path** if it does not exist. Checkbox is selected by default. |
{{< /truetable >}}

Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* if the username differs on the remote host.

Enter the SSH port number in **Remote SSH Port**. By default, **22** is reserved in TrueNAS.

Enter a full path to a location on the remote server where you either copy information from or to in **Remote Path**.
Maximum path length is *255* characters.

Set **Validate Remote Path** when the remote path location does not exist to create and define it in **Remote Path**.

Select the schedule to use and configure the remaining options according to your specific needs.

Click **Save**.
{{< /expand >}}

### Creating an Rsync Task Using Module Mode

Before you create an rsync task on the host system, you must create a module on the remote system.
You must define at least one module in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) of the rsync server.
The [Rsync Daemon]({{< relref "Rsyncd.md" >}}) application is available in situations where configuring TrueNAS as an rsync server with an rsync module is necessary.

{{< expand "Click Here for More Information" "v" >}}
When the rsync server is configured, go to **Data Protection > Rsync Tasks**, and click **Add** to open the **Add Rsync Task** configuration screen. 

Enter the required information as described in [Creating an Rsync Task](#creating-an-rsync-task) above. 

![AddRsyncTaskSourceRemoteModule](/images/SCALE/23.10/AddRsyncTaskSourceAndRemoteSettings.png "Add Rsync Task Source and Remote Settings") 

Select the direction for the rsync task.

Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* when the username differs from the host entered into the **Remote Host** field.

Now select **Module** from the **Rsync Mode** dropdown list, and then enter either the remote system host name or IP address exactly as it appears on the remote system in **Remote Module Name**.

Select a schedule for the rsync task.

Configure the remaining options according to your specific needs.

If you leave the **Enable** checkbox cleared it disables the task schedule, but you can still save  and run the rsync task manually.

Click **Save**.
{{< /expand >}}

### Additional Options for Both Module and SSH Rsync Modes:

![AddRsyncTaskSchedOpt](/images/SCALE/23.10/AddRsyncTaskSchedOpt.png "Add Rsync Task Schedule and Other Options Settings")

Clear the **Enabled** checkbox to disable the task schedule without deleting the configuration. 
You can still run the rsync task by going to **Data Protection > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon.

{{< taglist tag="scalersync" limit="10" >}}
