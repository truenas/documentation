---
title: "Rsync Tasks Screens"
description: "Provides information on the Rsync Tasks screens and settings."
weight: 30
aliases:
 - /scale/scaleclireference/task/clirsync/
tags:
 - rsync
 - ssh
---

The **Rsync Task** widget on the **Data Protection** screen shows rsync tasks configured on the TrueNAS system.
It provides access to configuration screens to add single-time or scheduled recurring transfers between TrueNAS and an rsync backup server.
Rsync tasks are an effective method to back up data to a remote location.

## Rsync Task Widget

The **Rsync Tasks** widget shows a description about rsync tasks until the first task is configured, then it shows a list of tasks configured on the system, with th details about the task, and the task status.

<div style="display: flex; gap: 20px; align-items: flex-start;">
    <div style="flex: 1;">
      <img src="/images/SCALE/DataProtection/RsyncTaskWidgetNoTasks.png" alt="Rsync Task Widget No Task" style="width: 100%; max-width: 400px; height: auto;">
    </div>
    <div style="flex: 1;">
      <img src="/images/SCALE/DataProtection/RsyncTaskWidget.png" alt="Rsync Task Widget with Tasks" style="width: 100%; max-width: 400px; height: auto;">
    </div>
  </div>
  
The widget header opens the [**Rsync Task**](#rsync-task-screen) screen.

**Add** opens the **[Add Rsync Task](#add-and-edit-rsync-task-screens)** screen.

{{< include file="/static/includes/RsyncMoreVertOptions.md" >}}

**State** displays the status of the next cloud sync task as **SUCCESS** for completed tasks, **FAILED** if the task fails to complete the sync, and **PENDING** for tasks that have not run yet.
Click on the state oval to open the **Logs** dialog for that task. **Download Logs** saves a copy of the current task logs.

{{< trueimage src="/images/SCALE/DataProtection/RsyncTaskLogDialog.png" alt="Rsync Task Log Dialog" id="Rsync Task Log Dialog" >}}

## Rsync Task Screen

The **Rsync Task** screen lists all tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/RsyncTasksScreen.png" alt="Rsync Tasks Screen" id="Rsync Tasks Screen" >}}

The screen shows a table listing each task, with details about the task, and the task status.
Table column headings sort the list in ascending or descending order.

{{< include file="/static/includes/RsyncMoreVertOptions.md" >}}

**Add** opens the **[Add Rsync Task](#add-and-edit-rsync-task-screens)** screen.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Add and Edit Rsync Task Screens

The **Add Rsync Task** and **Edit Rsync Task** screens show the same settings.
The sections below group settings by functional area.

### Source and Remote Options

**Source** settings specify the location of the stored data to sync with a remote server, set the user that performs the task, and the direction of the task (send or receive data).
The **Remote** settings specify the mode for the task and remote host connection information.
Settings change based on the option (**Module** or **SSH**) set in **Rsync Mode**.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceAndRemoteSettings.png" alt="Rsync Task Source and Remote Module Settings" id="Rsync Task Source and Remote Module Settings" >}}

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSourceRemoteSSH.png" alt="Rsync Task Source and Remote SSH Settings" id="Rsync Task Source and Remote SSH Settings" >}}

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< expand "Source and Remote Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Path** | (Required) Enter or browse to the dataset or directory to sync with a remote server. Use the <span class="material-icons">arrow_right</span> to the left of **/mnt** folder to expand the folder tree, then click on the name to select and populate the **Path** field. Linux file path limits apply. Other operating systems can have different limits, which might affect how to use them as sources or destinations. |
| **User** | (Required) Select the user to run the rsync task. Select a user who has permissions to write to the specified directory on the remote host. If setting **Rsync Mode** to **SSH**, the user must have an SSH private key in their home directory if **Connect using** is set to **SSH private key stored in user's home directory**. |
| **Direction** | (Required) Select the direction of the flow of data to the remote host. Options are:<br><li>**Push** - During a push, the dataset copies data to the remote module.<br><li>**Pull** - During a pull, the dataset stores data copied from the remote system.</li> |
| **Description** | (Optional) Enter a description of the rsync task. |
| **Rsync Mode** | Select the mode from the dropdown list. Options are:<br><li>**Module** - Uses a custom-defined remote module from the rsync server.<br><li>**SSH** - Uses an SSH configuration for the rsync task. The remote system must have SSH enabled. The host system needs an established SSH connection to the remote for the rsync task. **SSH** displays more settings.</li> |
| **Remote Host** | (Required) Enter the IP address or host name and domain of the remote system. Use the format `username@remote_host` if the user name differs on the remote host. |
| **Remote Module Name** | (Required) If **Rsync Mode** is set to **Module**, specify the name of the module on the remote rsync server. Define at least one module per [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) on the remote rsync server. Enter the **Module Name** exactly as it appears on the remote system. |
| **Connect using** | (Required) When **Rsync Mode** is set to **SSH**, shows two options: <br><li>**SSH private key stored in user's home directory** - The user entered in **User** must have an SSH private key added and stored in the home directory for the user. Create the SSH connection and keypair, download the keys, then add the private key to the user in the UI and to the home directory either from the **Shell** using Linux CLI commands or while in an SSH session with the system. <br><li>**SSH connection from the keychain** - Requires creating an [SSH connection and keypair]({{< ref "AddSSHConnectionKeyPair" >}}) before setting up the rsync task. Shows the **SSH Connection** dropdown list showing SSH connections configured in the system.</li> |
| **SSH Connection** | Shows when **Rsync Mode** is set to **SSH**, and **Connect Using** is set to **SSH connecton from the keychain**. Shows a dropdown list of SSH connections added in TrueNAS. Sets the rsync task to use the selected SSH connection to authenticate sync operations with the remote server. |
| **Remote SSH Port** |  (Required) If **Rsync Mode** is set to **SSH**, enter the SSH port number of the remote system. By default, **22** is reserved in TrueNAS. |
| **Remote Path** | Enter an existing path on the remote host. Maximum path length is 255 characters. |
| **Validate Remote Path** | Shows when **Rsync Mode** is set to **SSH**. Set to test the remote server connection and verify that the defined **Remote Path** exists. |
{{< /truetable >}}
{{< /expand >}}

### Schedule and More Options

**Schedule** defines when the remote sync task occurs.
The **More Options** specify other settings related to when and how the rsync occurs.

{{< trueimage src="/images/SCALE/DataProtection/AddRsyncTaskSchedOpt.png" alt="Rsync Task Schedule and Other Options Settings" id="Rsync Task Schedule and Other Options Settings" >}}

{{< expand "Schedule Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Schedule** | Shows a list of schedule preset options. See **Schedule Presets** below for more info. |
| **Recursive** | Select to include all subdirectories of the specified directory. When cleared, only the specified directory is included. |
| **Enabled** | Select to enable this rsync task. Clear to disable this rsync task without deleting it. |
{{< /truetable >}}
{{< /expand >}}

{{< include file="/static/includes/SchedulePresetOptions.md" >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/AdvancedScheduler.md" >}}
{{< /expand >}}

{{< expand "More Options Settings" "v" >}}

{{< include file="/static/includes/auxiliary-parameters-caution.md" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Times** | Select to preserve modification times of files. |
| **Compress** | Select to reduce the size of data to transmit. Recommended for slow connections. |
| **Archive** |  Select to preserve symlinks, permissions, modification times, group, and special files. When selected, rsync runs recursively. When run as root, owner, device files, and special files are also preserved. Equal to passing the flags `-rlptgoD` to rsync. |
| **Delete** | Select to delete files in the destination directory that do not exist in the source directory. |
| **Quiet** | Select to suppress informational messages from the remote server. |
| **Preserve Permissions** | Select to preserve original file permissions. Useful when the user is set to root. |
| **Preserve Extended Attributes** | Select to preserve [extended attributes](https://en.wikipedia.org/wiki/Extended_file_attributes), but this must be supported by both systems. |
| **Delay Updates** | Select to save a temporary file from each updated file to a holding directory until the end of the transfer. All transferred files are renamed once the transfer is complete. |
| **Auxiliary Parameters** | Enter additional [rsync(1)](https://rsync.samba.org/ftp/rsync/rsync.html) options to include. Separate entries by pressing <kbd>Enter</kbd>. Note: You must escape the `*` character with a backslash (`\*.txt`) or inside single quotes (`'*.txt'`). |
{{< /truetable >}}
{{< /expand >}}
