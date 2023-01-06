---
title: "Configuring Rsync Tasks"
description: "This article provides instructions on adding rsync tasks using either of two methods, one using an rsync module created in TrueNAS and the other using an SSH connection."
weight: 30
alias:
tags:
 - scalersync
 - scalessh
---

{{< toc >}}

You often need to copy data to another system for backup or when migrating to a new system.
A fast and secure way of doing this is by using [rsync](https://rsync.samba.org/).
These instructions assume that both sides of the rsync task, host and remote, use a TrueNAS systems.

## Rsync Service and Modules

The rsync task does not work unless the related system service is turned on.
To turn the rsync service on, go to **System > Services** and toggle the **Rsync** on.
To activate the service whenever TrueNAS boots, select the **Start Automatically** checkbox.

![ServicesRsyncOn](/images/SCALE/22.12/ServicesRsyncOn.png "System Services Rsync On")

Click the <i class="material-icons" aria-hidden="true" title="edit">edit</i> to configure the service on the 
 **Services > RSYNC > Rsync** screen.
There are two tabs for rsync configuration: basic **Configure** options and **Rsync Module** creation and management.


## Rsync Basic Requirements

For an remote synch (rsync) task to work you need to first:

* Create a [dataset]({{< relref "DatasetsSCALE.md" >}}) on both the TrueNAS and know the host and path to the data on the remote system you plan to sync with.

* Create at least one rsync module in TrueNAS SCALE in **Services > Rsync > Rsync Module** 

  or 
  
  Create an SSH connection in **Credentials > Backup Credentials > SSH Connections**.

* Turn on the rsync service on both the TrueNAS and in the remote server.

Rsync provides the ability to either push or pull data. 
The **Rsync Tasks** task push function copies data from the TrueNAS host system to a remote system. 
The **Rsync Tasks** task pull function moves or copies data from a remote system and puts on the TrueNAS host system.

{{< hint info >}}
The remote system must have the rsync service activated.
{{< /hint >}}

## Creating an Rsync Task

{{< expand "Tutorial Video" >}}
{{< embed-video name="scaleangelfishrsync" >}}
{{< /expand >}}

Go to **Data Protection > Rsync Tasks** and click **Add** to open the **Add Rsync Task** configuration screen.

![AddRsyncTaskSourceRemoteModule](/images/SCALE/22.12/AddRsyncTaskSourceRemoteModule.png "Add Rsync Task Source and Remote Settings") 

Enter or use the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the path to copy.

Begin typing the user into the **User** field or select the user from the dropdown list. The user must have permissions to run an rsync on the remote server.

Select the direction. Select **Pull** to copy from the remote server to the TrueNAS SCALE server location, or **Push** to copy from the TrueNAS to the remote server. 

Enter the remote host name or IP in **Remote Host**. You need to have the remote server rsync service configured and turned on.

Select the connection mode from the **Rsync Mode** dropdown. Each mode option displays settings for the selected type. 
You need to have either a rsync module configured or an SSH connection for the remote server already configured.

Set the schedule for when to run this task, and any other options you want to use. 
If you need a custom schedule, select **Custom** to open the advanced scheduler window.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}
Click **Save.**

### Creating an Rsync Task Using Module Mode

Before you create an rsync task on the host system, you must create a module on the remote system. 
You must define at least one module in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) of the rsync server or in the rsync modules of another system. 
When TrueNAS is the remote system, create a module in **System Settings > Services > Rsync** on the **Rsync Modules** screen. 
See [Configuring an Rsync Module]({{< relref "ConfigRsyncServiceSCALE.md" >}}) for more information.
{{< expand "Click Here for More Information" "v" >}}
After adding the rsync module, go to **Data Protection > Rsync Tasks**, and click **Add** to open the **Add Rsync Task** configuration screen. 

Enter the required information as described in [Creating an Rsync Task](#creating-an-rsync-task) above. 

![AddRsyncTaskSourceRemoteModule](/images/SCALE/22.12/AddRsyncTaskSourceRemoteModule.png "Add Rsync Task Source and Remote Settings") 

Select the direction for the rsync task.

Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* when the username differs from the host entered into the **Remote Host** field. 

Now select **Module** from the **Rsync Mode** dropdown list, and then enter either the remote system host name or IP address exactly as it appears on the remote system in **Remote Module Name**. 

Select a schedule for the rsync task.

Configure the remaining options according to your specific needs.

If you leave the **Enable** checkbox cleared it disables the task schedule, but you can still save  and run the rsync task manually.

Click **Save**.
{{< /expand >}}

### Creating an Rsync Task Using SSH Mode

First, enable SSH on the remote system. 
Next enable SSH in TrueNAS. 
Go to **System > Services** and toggle **SSH** on.

Now set up an SSH connection to the remote server. You can do this in **Credentials > Backup Credentials** using **SSH Connections** and **SSH Keypairs**, or using **System Settings > Shell** and TrueNAS CLI commands.
To use the UI, see [Adding SSH connections]({{< relref "AddSSHConnectionKeyPair.md" >}}). 
Populate the **SSH Connections** configuration fields as follows:
  
  Select **Semi-automatic** as the **Setup Method** 
  Select **Private Key** to **Generate New**

#### Creating an SSH Connection Using CLI in Shell
You can use **System Settings > Shell** and TrueNAS command-line to set up an SSH connection.
{{< expand "Click Here for More Information" "v" >}}
To use a command line, go to the **Shell** on the host system.
Enter `su - {USERNAME}`, where *{USERNAME}* is the TrueNAS user account that runs the rsync task.
Enter `ssh-keygen -t rsa` to create the key pair.
When prompted for a password, press <kbd>Enter</kbd> without setting a password (a password breaks the automated task).
Here is an example of running the command:
   
   ```zsh
   truenas# ssh-keygen -t rsa
   Generating public/private rsa key pair.
   Enter file in which to save the key (/root/.ssh/id_rsa):
   Created directory '/root/.ssh'.
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   Your identification is saved in /root/.ssh/id_rsa.
   Your public key is saved in /root/.ssh/id_rsa.pub.
   The key fingerprint is:
   SHA256:NZMgbuPvTHeEqi3SA/U5wW8un6AWrx8ZsRQdbJJHmR4 tester@truenas.local
   The key randomart image is:
   +---[RSA 2048]----+
   |      . o=o+     |
   |     . .ooE.     |
   |      +.o==.     |
   |     o.oo+.+     |
   |     ...S+. .    |
   |    . ..++o.     |
   |     o oB+. .    |
   |    . =Bo+.o     |
   |     o+==oo      |
   +----[SHA256]-----+
   ```

The default public key location is <file>\~/.ssh/id_rsa.pub</file>. 
Enter `cat ~/.ssh/id_rsa.pub` to see the key and copy the file contents.

Copy it to the corresponding user account on the remote system in **Credentials > Users**. 
By default, SCALE only displays the root user and prompts you to display hidden users. 
Follow the directions to locate the **sshd** user account.
Click on the **sshd** user and then on **Edit**. Paste the key in **SSH Public Key**.

Next, copy the host key from the remote system to the host system user <file>.ssh/known_hosts</file> directory, using `ssh-keyscan`.

On the host system, open the **Shell** and enter `ssh-keyscan -t rsa {remoteIPaddress} >> {userknown_hostsDir}` where *{remoteIPaddress}* is the remote system IP address and *{userknown_hostsDir}* is the <file>known_hosts</file> directory on the host system.
Example: `ssh-keyscan -t rsa 192.168.2.6 >> /root/.ssh/known_hosts`.
{{< /expand >}}

After establishing the SSH connection, add the rsync task.
{{< expand "Click Here for More Information" "v" >}}

Go to **Data Protection > Rsync Tasks** and click **Add** to open the **Add Rsync Task** configuration screen.

Enter the required information as described in [Creating an Rsync Task](#creating-an-rsync-task) above. 

Select a **User** account that matches the SSH connection **Username** entry in the **SSH Connections** you set up.

Choose a **Direction** for the rsync task as either **Push** or **Pull** and then define the task **Schedule**.

Provide a **Description** for the rsync task.

Select **SSH** in **Rsync Mode**. The SSH settings fields display.

Choose a connection method from the **Connect using** dropdown list. The following image and fields display if **SSH private key stored in user's home directory** is chosen:

![AddRsyncTaskSourceRemoteSSHDir](/images/SCALE/22.12/AddRsyncTaskSourceRemoteSSHDir.png "Add Rsync Task: SSH Mode")


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
| Remote Path | Select from options listed. |
| Validate Remote Path | Set to automatically create the defined **Remote Path** if it does not exist. Checkbox is selected by default. |

If you chose **SSH connection from the keychain**, the following fields display:

![AddRsyncTaskSourceRemoteSSHKeychain](/images/SCALE/22.12/AddRsyncTaskSourceRemoteSSHKeychain.png "Add Rsync Task: SSH Mode")

| Setting | Description |
|---------|-------------|
| Path | Enter or browse to the path to be copied. |
| User | Select the user to run the rsync task. The user selected must have permissions to write to the specified directory on the remote host. |
| Direction | Directs the flow of data to the remote host. Options are **Push** and **Pull**. |
| Description | Enter a description of the rsync task. |
| Rsync Mode | Choose to either use a custom-defined remote module of the rsync server or to use an SSH configuration for the rsync task. |
| Connect using | Use the dropdown list to select. The following fields display when **SSH SSH connection from the keychain** is selected: |
| SSH Connection | Select an existing **SSH connection** to a remote system or choose **Create New** to create a new SSH connection. |
| Remote Path | Select from options listed. |
| Validate Remote Path | Set to automatically create the defined **Remote Path** if it does not exist. Checkbox is selected by default. |


Next, enter the **Remote Host** IP address or hostname.
Use the format *username@remote_host* if the username differs on the remote host.

Enter the SSH port number in **Remote SSH Port**. By default, **22** is reserved in TrueNAS.

Enter or browse to the location on the remote server where you either copy information from or to in **Remote Path**. Maximum path length is *255* characters.

Select **Validate Remote Path** if the remote path location does not exist to create and define it in **Remote Path**.

Select the schedule to use and configure the remaining options according to your specific needs.

Click **Save**.
{{< /expand >}}

### Additional Options for Both Module and SSH Rsync Modes:

![AddRsyncTaskSchedOpt](/images/SCALE/22.12/AddRsyncTaskSchedOpt.png "Add Rsync Task Schedule and Other Options Settings")

Clear the **Enabled** checkbox to disable the task schedule without deleting the configuration. 
You can still run the rsync task by going to **Data Protection > Rsync Tasks** and clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon.



{{< taglist tag="scalersync" limit="10" >}}