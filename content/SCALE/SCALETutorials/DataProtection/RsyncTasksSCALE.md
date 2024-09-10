---
title: "Configuring Rsync Tasks"
description: "Provides instructions on adding rsync tasks with two methods, SSH connection and module."
weight: 30
alias:
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
The **Pull** function copies data from a remote system and stores it in the defined **Path** on the TrueNAS host system.

There are two ways to connect to a remote system and run an rsync task: setting up an [SSH connection](#configuring-ssh-mode-rsync-tasks) to the remote server or an [rsync module](#configuring-module-mode-rsync-tasks) on the remote server.

## Configuring SSH Mode Rsync Tasks

Before you create an rsync task in SSH mode, [add an SSH connection and keypair](#setting-up-an-ssh-connection) between the TrueNAS host and remote system.
See [Adding SSH Credentials]({{< relref "AddSSHConnectionKeyPair.md" >}}) for more information.

After setting up the SSH connection, [configure the rsync task](#creating-an-ssh-mode-rsync-task) on the TrueNAS host.

### Setting up an SSH Connection

1. Enable SSH on the remote system.

2. Enable SSH in TrueNAS.
  Go to **System > Services** and toggle **SSH** on.

3. Add an SSH connection to the remote server.
Go to **Credentials > Backup Credentials** and use **SSH Connections** and **SSH Keypairs**.

   Populate the **SSH Connections** configuration fields as follows:

   **TrueNAS Host to TrueNAS Remote**

     a. Select **Semi-automatic (TrueNAS only)** in **Setup Method**.<br>
     b. Enter the remote **TrueNAS URL**.<br>
     c. Fill in the remaining credentials for this TrueNAS to authenticate to the remote TrueNAS and exchange SSH keys.<br>
     d. Select **Generate New** in **Private Key**.<br>
     e. Enter a number of seconds for TrueNAS to attempt the connection before timing out and closing the connection.<br>

   **TrueNAS Host to Non-TrueNAS Remote**

     a. Select **Manual** in **Setup Method**.<br>
     b. Enter the remote host name, port number, and user in the appropriate fields.<br>
     c. Select **Generate New** in **Private Key** or click **Discover Remote Host Key** to connect to the remote system and automatically populate the **Remote Host Key** field.<br>
     d. Enter a number of seconds for TrueNAS to attempt the connection before timing out and closing the connection.<br>

    Click **Save.**
    If you generated a new keypair, click <i class="material-icons" aria-hidden="true" title="Download">file_download</i> on **SSH Keypairs** to download the public and private keys.
    TrueNAS automatically adds the public key to **Authorized Keys** for the admin user.

4. Add the keypair and SSH connection to the remote system.
  
    If the remote system is another TrueNAS SCALE system, go to **Credentials > Backup Credentials** and add the keypair first.
    Paste in the public and private keys that you created on the host.
    Then create the SSH connection as above.
    Select the new key from the **Private Key** dropdown.

5. Go to **Credentials > Users**, select the admin user, and click **Edit**.
    Check **Authentication** to ensure the SSH public key is present.
    If needed, paste the public key in **Authorized Keys** or click **Choose File** then browse to and upload the public key file.

    (Optional) If selecting **SSH private key stored in user's home directory** for **Connect Using** in the rsync task configuration, add the private key to the home directory for the user to perform the task.
    For the admin user, the default location is <file>/home/admin/.ssh/*private_key*</file>.

6. If not already present, add the public key to the home directory of the remote user with permission to write to the destination dataset.
    Follow the procedure above for remote TrueNAS SCALE systems.

    (Optional) If selecting **SSH private key stored in user's home directory** for **Connect Using** in the rsync task configuration, add the private key to the home directory for the remote user.

### Creating an SSH Mode Rsync Task

1. Go to **Data Protection** and click **Add** on the **Rsync Tasks** widget to open the **Add Rsync Task** screen.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceRemoteSSH.png" alt="Add Rsync Task - SSH Mode" id="Add Rsync Task - SSH Mode" >}}

2. Enter or browse to the dataset or folder to sync with the remote server.
    Use the <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and each folder listed on the tree to expand and browse through, then click on the name to populate the path field.

    {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

3. Select a **User** account to perform the rsync task.
    The user must have permissions to run an rsync on the remote server and read/write permission for the local dataset.

4. Set the **Direction** for the rsync task.
    Select **Pull** to copy from the remote server to TrueNAS or **Push** to copy to the remote server.

5. Select **SSH** as the connection mode from the **Rsync Mode** dropdown.
    The SSH settings fields show.

6. Choose a connection method from the **Connect using** dropdown list.

    If selecting **SSH private key stored in user's home directory**, enter the IP address or hostname of the remote system in **Remote Host**.
        Use the format *username@remote_host* if the username differs on the remote host.
        Enter the SSH port number for the remote system in **Remote SSH Port**. By default, **22** is reserved in TrueNAS.

    If selecting **SSH connection from the keychain**, select an existing **SSH connection** to a remote system or choose **Create New** to add a new SSH connection.

7. Enter in **Remote Path** the full path to a location on the remote server to pull from or push to.
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
    You can still run the rsync task by going to **Data Protection** and clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon for the rsync task.

10. Click **Save**.

## Configuring Module Mode Rsync Tasks

Before you create an rsync task in module mode, you must [define at least one module](#defining-an-rsync-module) per [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) on the remote rsync server.
The [Rsync Daemon]({{< relref "Rsyncd.md" >}}) application is available in situations where configuring TrueNAS as an rsync server with an rsync module is necessary.

After configuring the rsync server, [configure the rsync task](#creating-a-module-mode-rsync-task).

### Defining an Rsync Module

If the non-TruNAS remote server includes an rsync service, make sure it is turned on.

1. Create a [dataset]({{< relref "DatasetsSCALE.md" >}}) on the remote TrueNAS (or other system).
    Write down the host and path to the data on the remote system you plan to sync with.

2. Create a module on the remote system.
    On TrueNAS, install an rsync app (such as [Rsyncd]({{< relref "Rsyncd.md" >}})) and configure the module.

### Creating a Module Mode Rsync Task

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
    You can still run the rsync task by going to **Data Protection** and clicking <i class="fa fa-chevron-right"></i> then the **Run Now** <i class="material-icons" aria-hidden="true" title="play_arrow">play_arrow</i> icon for the rsync task.

9. Click **Save**.
