---
title: "Rsync Tasks Screens"
description: "This article provides information on the Rsync Task screens and settings."
weight: 30
alias:
tags:
 - scalersync
 - scalessh
---

{{< toc >}}

The **Rsync Task** widget on the **Data Protection** screen lists rsync tasks configured on the TrueNAS system.

![RsyncTaskWidget](/images/SCALE/22.02/RsyncTaskWidget.png "Data Protection Rsync Task Widget") 

The **Rsync Tasks** widget displays **No Rsync Tasks configured** before you add a task.

![RsyncTaskWidgetNoTasks](/images/SCALE/22.02/RsyncTaskWidgetNoTasks.png "Data Protection Rsync Task Widget No Tasks") 

**Add** opens the **[Add Rsync Task](#add-and-edit-rsync-task-screens)** screen. 

Each rsync task is a link to open the **[Edit Rsync Task](#add-and-edit-rsync-task-screens)** screen.

The widget displays the status of a task as **PENDING**, **RUNNING**, **SUCCESS** or **FAILED**.

Use the <span class="material-icons">play_arrow</span> **Run Now** icon to manually run the task.

Use the <span class="material-icons">delete</span> icon to open a delete confirmation dialog.

## Add and Edit Rsync Task Screens
The **Add Rsync Task** and **Edit Rsync Task** display the same settings.

### Source and Remote Settings
**Source** and **Remote** settings specify the direction of the remote sync, the TrueNAS system and the remote rsync server paths to or from the data location, the method to uses to sync the TrueNAS and remote servers and the user with permissions to do the remote sync operation. 
{{< expand "Click Here for More Information" "v" >}}

![AddRsyncTaskSourceAndRemoteSettings](/images/SCALE/22.02/AddRsyncTaskSourceAndRemoteSettings.png "Add Rsync Task Source and Remote Settings") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Path** | Required. Enter or use the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the path to copy. Linux file path limits apply. Other operating systems can have different limits which might affect how you can use them as sources or destinations. |
| **User** | Required. Select the user to run the rsync task. Select a user that has permissions to write to the specified directory on the remote host. |
| **Direction** | Required. Select the direction of the flow of data to the remote host. Options are **Push** or **Pull**. During a push, the dataset transfers to the remote module. During a pull, the dataset stores files from the remote system. |
| **Description** | Enter a description of the rsync task. |
| **Remote Host** | Required. Enter the IP address or host name of the remote system that stores the copy. Use the format `username@remote_host` if the user name differs on the remote host. |
| **Rsync Mode** | Select the mode from the dropdown list. Select **Module** to use a custom-defined remote module of the rsync server or if the remote server is a TrueNAS, and then define the [rsync module]({{< relref "ConfigRsyncServiceSCALE.md" >}}) or select **SSH** to use an SSH configuration for the rsync task. The remote system must have SSH enabled. The host system needs an established SSH connection to the remote for the rsync task. **SSH** displays more settings. |
| **Remote Module Name** | Required. If **Rsync Mode** is **Module** specify the name of the module on the remote rsync server. Define at least one module in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) or the rsync server or in the **Rsync Modules** of another TrueNAS system. Type the **Remote Module Name** exactly as it appears on the remote system. |
| **Remote SSH Port** | Required when **Rsync Mode** is **SSH**. Enter the SSH port number of the remote system. By default, **22** is reserved in TrueNAS. |
| **Remote Path** | Enter or use the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the existing path on the remote host to sync with, or use **Validate Remote Path** to automatically create and define the path if it does not exist. Maximum path length is 255 characters. |
| **Validate Remote Path** | Displays if **Rsync Mode** is **Module**. Select to automatically create the defined **Remote Path** if it does not exist. |
{{< /truetable >}}
{{< /expand >}}

### Schedule and More Options Settings
**Schedule** defines when the remote sync task occurs and **More Options** specify other settings related to when and how the rsync occurs.
{{< expand "Click Here for More Information" "v" >}}

![AddRsyncTaskSchedOpt](/images/SCALE/22.12/AddRsyncTaskSchedOpt.png "Add Rsync Task Schedule and Other Options Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Schedule** | Select a schedule preset or select **Custom** to open the advanced scheduler. |
| **Recursive** | Select to include all subdirectories of the specified directory. When cleared, only the specified directory is included. |
| **Times** | Select to preserve modification times of files. |
| **Compress** | Select to reduce the size of data to transmit. Recommended for slow connections. |
| **Archive** |  Select to preserve symlinks, permissions, modification times, group and special files. When selected, rsync runs recursively. When run as root, owner, device files, and special files are also preserved. Equal to passing the flags `-rlptgoD` to rsync. |
| **Delete** | Select to delete files in the destination directory that do not exist in the source directory. |
| **Quiet** | Select to suppress informational messages from the remote server. |
| **Preserve Permissions** | Select to preserve original file permissions. Useful when the user is set to root. |
| **Preserve Extended Attributes** | Select to preserve [extended attributes](https://en.wikipedia.org/wiki/Extended_file_attributes), but this must be supported by both systems. |
| **Delay Updates** | Select to save a temporary file from each updated file to a holding directory until the end of the transfer. All transferred files renamed once the transfer is complete. |
| **Auxiliary Parameters** | Enter additional [rsync(1)](https://rsync.samba.org/ftp/rsync/rsync.html) options to include. Separate entries by pressing <kbd>Enter</kbd>. Note: You must escape the <span class="material-icons">emergency</span> character with a backslash (`\`) or used inside single quotes ('*.txt'). |
| **Enabled** | Select to enable this rsync task. Clear to disable this rsync task without deleting it. |
{{< /truetable >}}

{{< /expand >}}

{{< taglist tag="scalersync" limit="10" >}}