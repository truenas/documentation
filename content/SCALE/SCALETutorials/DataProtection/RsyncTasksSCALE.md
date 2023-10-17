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

{{< hint type=note >}}
When the remote system is another TrueNAS, set the **Rsync Mode** to **SSH**, verify the **SSH** service is active on both systems, and ensure SSH keys are exchanged between systems.
When the remote system is not TrueNAS, make sure that system has the rsync service activated and permissions configured for the user account name that TrueNAS will use to run the rsync task.
{{< /hint >}}

Rsync provides the ability to either push or pull data.
The **Push** direction copies data from TrueNAS to a remote system.
The **Pull** function moves or copies data from a remote system and stores it in the defined **Path** on the TrueNAS host system.

## Creating an Rsync Task

Go to **Data Protection > Rsync Tasks** and click **Add** to open the **Add Rsync Task** configuration screen.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceRemoteModule.png" alt="Add Rsync Task Source and Remote" id="Add Rsync Task Source and Remote" >}}

Enter or use the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the path to copy.

Begin typing the user into the **User** field or select the user from the dropdown list.
The user must have permissions to run an rsync on the remote server.

Select the direction. Select **Pull** to copy from the remote server to TrueNAS, or **Push** to copy from TrueNAS to the remote server.

Enter the remote host name or IP in **Remote Host**.
You need to have the remote server rsync service configured and turned on.

Select the connection mode from the **Rsync Mode** dropdown. Each mode option displays settings for the selected type.
You need to have either a rsync module configured in a remote rsync server or an SSH connection for the remote server already configured.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Add Rsync Task Schedule and More Options" id="Add Rsync Task Schedule and More Options" >}}

Set the schedule for when to run this task, and any other options you want to use.
If you need a custom schedule, select **Custom** to open the advanced scheduler window.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="content/_includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}

Clear the **Enabled** checkbox to disable the task schedule without deleting the configuration.
You can still run the rsync task by going to **Data Protection > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon.

Click **Save.**

### Creating an Rsync Task Using SSH Mode (Recommended)

First, enable SSH and establish a connection to the remote server.

{{< expand "Establishing an SSH Connection" "v" >}}
Enable SSH on the remote system.

Enable SSH in TrueNAS.
Go to **System > Services** and toggle **SSH** on.

Set up an SSH connection to the remote server. You can do this in **Credentials > Backup Credentials** using **SSH Connections** and **SSH Keypairs**, or using **System Settings > Shell** to access the TrueNAS CLI and the [`system keychain_credential`]({{< relref "CLIKeychainCredential.md" >}}) and [`service ssh`]({{< relref "/SCALE/SCALECLIReference/Service/CLISSH/_index.md" >}}) commands.
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

{{< /expand >}}

After establishing the SSH connection, add the rsync task.

Go to **Data Protection > Rsync Tasks** and click **Add** to open the **Add Rsync Task** configuration screen.
Enter the required information as described in [Creating an Rsync Task](#creating-an-rsync-task) above.

Select a **User** account that matches the SSH connection **Username** entry in the **SSH Connections** you set up.

Choose a **Direction** for the rsync task as either **Push** or **Pull** and then define the task **Schedule**.

Provide a **Description** for the rsync task.

Select **SSH** in **Rsync Mode**.
The SSH settings fields display.

Choose a connection method from the **Connect using** dropdown list.

For **SSH private key stored in user's home directory**, enter the IP address or hostname of the remote system in **Remote Host**.
Use the format *username@remote_host* if the username differs on the remote host.
Enter the SSH Port of the remote system in **Remote SSH Port**. By default, **22** is reserved in TrueNAS.

For **SSH connection from the keychain**, the following fields display, select an existing **SSH connection** to a remote system or choose **Create New** to create a new SSH connection.

Enter a full path to a location on the remote server where you either copy information from or to in **Remote Path**.
Maximum path length is *255* characters.

Set **Validate Remote Path** when the remote path location does not exist to create and define it in **Remote Path**.

Select the schedule to use and configure the remaining options according to your specific needs.

Click **Save**.

### Creating an Rsync Task Using Module Mode

Before you create an rsync task on the host system, you must create a module on the remote system.
You must define at least one module in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) of the rsync server.
The [Rsync Daemon]({{< relref "Rsyncd.md" >}}) application is available in situations where configuring TrueNAS as an rsync server with an rsync module is necessary.

When the rsync server is configured, go to **Data Protection > Rsync Tasks**, and click **Add** to open the **Add Rsync Task** configuration screen.
Enter the required information as described in [Creating an Rsync Task](#creating-an-rsync-task) above.

Select the direction for the rsync task.

Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* when the username differs from the host entered into the **Remote Host** field.

Now select **Module** from the **Rsync Mode** dropdown list, and then enter either the remote system host name or IP address exactly as it appears on the remote system in **Remote Module Name**.

Select the schedule to use and configure the remaining options according to your specific needs.

Click **Save**.

{{< taglist tag="scalersync" limit="10" >}}
