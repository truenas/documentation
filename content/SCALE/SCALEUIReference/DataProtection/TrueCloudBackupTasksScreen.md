---
title: "TrueCloud Backup Tasks Screens"
description: "Provides information on the TrueCloud Backup Tasks screens and settings."
weight: 5
tags:
- TrueCloud
- cloud
- backup
keywords:
- nas cloud storage
- data protection
- data backup and recovery
---

The **TrueCloud Backup Tasks** widget on the **Data Protection** screen shows configured TrueCloud tasks, and provides access to configuration screens to add single-time or scheduled recurring transfers between TrueNAS SCALE and a Storj Ix cloud storage account.
TrueCloud tasks are an effective method to back up data to a remote location, restore snapshots, or to perform cloud-storage-migration.

## TrueCloud Backup Tasks Widget
The **TrueCloud Backup Tasks** widget shows a list of tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudTaskSuccess.png" alt="TrueCloud Backup Tasks Widget" id="TrueCloud Backup Tasks Widget" >}}

The widget shows **No records have been added yet** until a TrueCloud task is added.

Click on the widget header to open the [**TrueCloud Backup Tasks**](#truecloud-backup-tasks-screen) screen that lists all tasks configured on the system.

**Add** on the widget and the **TrueCloud Backup Tasks** screen opens the **[Add TrueCloud Backup Task Screen](#add-truecloud-backup-task-screen)**.

Each task includes four icons for various functions:

* The <span class="material-icons">edit</span> **Edit** icon opens the **[Edit TrueCloud Backup Task](#edit-truecloud-backup-task-screen)** screen populated with with the settings for that task.

* The <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> **Run Now** icon starts the backup task, running it outside of the scheduled time.

* The **<i class="material-icons" aria-hidden="true" title="View Details">visibility</i> View Details** icon opens the [**TrueCloud Backup Tasks**](#truecloud-backup-tasks-screen) Screen with details for the selected task visible.

* The <span class="material-icons">delete</span> **Delete** icon opens a confirmation dialog before the system deletes the task.

**State** displays the status of the previous or current task as **SUCCESS** for completed tasks, **FAILED** if the task fails to complete, and **RUNNING** for tasks in progress.
Tasks that have not been run yet display **N/A**.
Click on the state oval to open the **Logs** dialog for that task.
**Download Logs** saves a copy of the current task logs.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudLogs.png" alt="TrueCloud Logs Dialog" id="TrueCloud Logs Dialog" >}}

## TrueCloud Backup Tasks Screen
The **TrueCloud Backup Tasks** screen lists all tasks configured on the system.
Click **TrueCloud Backup Tasks <i class="material-icons" aria-hidden="true" title="Open In New">open_in_new</i>** on the widget title or **<i class="material-icons" aria-hidden="true" title="View Details">visibility</i> View Details** on a task to go to the **TrueCloud Backup Tasks** screen.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudBackupTasksScreenComplete.png" alt="TrueCloud Backup Tasks Screen" id="TrueCloud Backup Tasks Screen" >}}

Buttons for these task options perform the same functions as the icons on the widget:

* <span class="material-icons">edit</span> **Edit** opens the **[Edit TrueCloud Backup Task](#edit-truecloud-backup-task-screen)** screen populated with with the settings for that task.

* <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> **Run Now** starts the backup task, running it outside of the scheduled time.

* <span class="material-icons">delete</span> **Delete** opens a confirmation dialog before the system deletes the task.

{{<include file="/static/includes/addcolumnorganizer.md">}}

Select any task to see details on the configured task, such as the schedule, path to the dataset or directories, snapshots and other options for that task.

### Snapshots Widget
The **Snapshots** widget lists existing TrueCloud snapshots for the selected backup task.
It contains options to restore from or delete an existing snapshot.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudSnapshots.png" alt="Snapshots Widget" id="Snapshots Widget" >}}

**<i class="material-icons" aria-hidden="true" title="Restore">history</i> Restore** opens the **Restore from Snapshot** screen.

<span class="material-icons">delete</span> **Delete** opens a confirmation dialog before the system deletes the snapshot.

### Restore from Snapshot Screen
The **Restore from Snapshot** screen displays the date and time of the selected snapshot.
It contains **Remote** and **Local** options to configure the TrueCloud snapshot restoration.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudRestore.png" alt="Restore from Snapshot" id="Restore from Snapshot" >}}

#### Remote Settings
**Remote Settings** specify all data in the backup or exclude some data from a restoration.
Additional settings display depending on the **Include/Exclude** selection.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Include Everything** | Restore all backed up data from the remote snapshot to the selected local path. |
| **Include from subfolder** | Restore data from a subfolder within the backed up data.  |
| **Subfolder** | Displays when **Include from subfolder** is selected. Enter or browse to the subfolder within the snapshot to restore data from. |
| **Included Paths** | Displays when **Include from subfolder** is selected. Select files and directories to include from the backup. Leave empty to include everything in the selected subfolder. |
| **Select paths to exclude** | Exclude only certain paths from the data to restore. |
| **Excluded Paths** | Displays when **Select paths to exclude** is selected. Enter or select files and directories to exclude from the backup. Use the checkboxes to select multiple paths or separate multiple entries with a comma. |
| **Exclude by pattern** | Exclude files and directories matching defined glob patterns. |
| **Pattern** | Displays when **Exclude by pattern** is selected. | 
{{< /truetable >}}

#### Local Settings
Use **Target**  to select the local directory where files are restored.
Be cautious with setting the restore target to avoid overwriting existing files.

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

**<i class="material-icons" aria-hidden="true" title="Create Dataset">create_new_folder</i> Create Dataset** opens a dialog to name and create a new dataset at the selected target.

Click **Save** to restore data from the snapshot.
  
## Add and Edit TrueCloud Backup Task Screen
The **Add TrueCloud Backup Task** and **Edit TrueCloud Backup Task** screens contain options to configure a new backup task. The edit screen opens populated with the existing task settings.
Settings are grouped into the **Local**, **Remote**, **Task** Settings, and **Control**. **Advanced** and **Advanced Remote Options** are for use by advanced users.

{{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskBasicOptions.png" alt="Add TrueCloud Backup Task - Basic Options" id="Add TrueCloud Backup Task - Basic Options" >}}

### Local Settings
**Local** settings allow selecting the dataset or directory to use in the task. Selecting the dataset populates the **Source Path** field.

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Source Path** | Use to specify the path to the dataset or directory to send to the cloud backup provider used in the task. Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of **/mnt** folder to expand and show datasets and directories within that folder. Locate the dataset or directory location to send to Storj for TrueCloud backup. Click the <span class="material-icons">arrow_right</span> arrow to the left of **/mnt** folder again to collapse the directory tree. |
{{< /truetable >}}

### Remote Settings
The **Remote** settings specify the TrueCloud credential and destination storage locations.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Credential** | Select an exiting cloud storage provider credential, such as Storj iX from the dropdown list. TrueNAS automatically validates the selected credential. <br> Select **Add New** to open the [**Cloud Credentials**]({{< relref "CloudCredentialScreen.md" >}}) screen. This is the same configuration screen as when you click **Add** on the **Credentials > Backup Credentials** screen. |
| **Bucket** | Shows after selecting the cloud provider in the **Credential** field. Select the pre-defined bucket to use if the provider uses buckets. For example, Amazon S3 and Storj use buckets. |
| **Folder** | Use to specify the dataset or directory to receive the backed up data. Enter the path or click the <span class="material-icons">arrow_right</span> arrow to the left of the folder icon and at each dataset or directory to reach the storage location to use for this task. <br> Enter `/name`, where *name* is a folder that does not exist, to create a new folder in the Storj bucket. |
{{< /truetable >}}

### Task Settings
**Task Settings** specifies the task name, snapshot retention policy, and password.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Name** | Enter a name for the TrueCloud backup task. |
| **Keep Last** | Enter a number of past snapshot copies to retain before removing older snapshots. |
| **Password** | Enter a password for the backup repository. Record this password in a secure location. Required to recreate the task using the same bucket/folder, such as in a new TrueNAS install or system, or to restore data from the existing snapshots in another TrueNAS system. |
{{< /truetable >}}

### Control Settings
**Control** settings establish a schedule for when the backup task occurs.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. |
| **Enabled** | Select to enable this TrueCloud task. Leave clear to disable the task without deleting it and keep the configuration available without allowing the specified schedule to run the task. The toggle in the **Enable** column on the **TrueCloud Backup Tasks** widget enables/disables the task. |
{{< /truetable >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/AdvancedScheduler.md" >}}
{{< /expand >}}

### Advanced Options Settings
**Advanced Options** settings are intended for use by advanced users.

{{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskAdvancedOptions.png" alt="Add TrueCloud Backup Task - Advanced Options" id="Add TrueCloud Backup Task - Advanced Options" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Take Snapshot** | Select to take a snapshot before transferring data to Storj or the cloud storage provider specified. This option is not available to datasets with child datasets. |
| **Pre-Script** | For advanced users only. Enter a script to execute before running the task. See the [Managing TrueCloud Backup Tasks tutorial]({{< relref "TrueCloudTasks.md #using-advanced-options" >}}) for more information. |
| **Post-Script** | For advanced users only. Enter a script to execute after running the task. See the [Managing TrueCloud Backup Tasks tutorial]({{< relref "TrueCloudTasks.md #using-advanced-options" >}}) for more information. |
| **Exclude** | Enter a list of files and directories to exclude from the backup. Separate entries by pressing <kbd>Enter</kbd>.<br> Examples of proper syntax to exclude files/directories are:<li>`photos</code>` excludes a file named *photos*</li><li>`/photos`> excludes a file named *photos* from root directory (but not subdirectories)</li><li>`photos/` excludes a directory named *photos*</li><li>`/photos/` excludes a directory named *photos* from root directory (but not subdirectories).</li></ul> See [rclone filtering](https://rclone.org/filtering/) for more details about the `--exclude` option. |
{{< /truetable >}}

### Advanced Remote Options
*Advanced Remote Options** settings are intended for use by advanced users.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Transfers** | Enter the number of simultaneous file transfers. Enter a number based on the available bandwidth and destination system performance. See [rclone --transfers](https://rclone.org/docs/#transfers-n). |
| **Bandwidth limit** | Enter a single bandwidth limit or bandwidth limit schedule in rclone format. Separate entries by pressing <kbdEnter</kbd>. Example: *08:00,512 12:00,10MB 13:00,512 18:00,30MB 23:00,off*. You can specify units with the beginning letter **b**, **k** (default), **M**, or **G**. See [rclone --bwlimit](https://rclone.org/docs/#bwlimit-bandwidth-spec). |
{{< /truetable >}}