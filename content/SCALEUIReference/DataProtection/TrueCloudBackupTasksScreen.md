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

The **TrueCloud Backup Tasks** widget on the **Data Protection** screen shows configured TrueCloud tasks, and provides access to configuration screens to add or schedule recurring transfers between TrueNAS and a cloud storage provider account like Storj iX.

TrueCloud backup tasks effectively back up data to remote locations, restore snapshots, and perform cloud-storage migration.

## TrueCloud Backup Tasks Widget
The **TrueCloud Backup Tasks** widget shows a list of tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudTaskSuccess.png" alt="TrueCloud Backup Tasks Widget" id="TrueCloud Backup Tasks Widget" >}}

The widget shows **No records have been added yet** until a TrueCloud task is added.

The widget header opens the [**TrueCloud Backup Tasks**](#truecloud-backup-tasks-screen) screen that lists all TrueCloud backup tasks configured on the system.

**Add** on the widget and the **TrueCloud Backup Tasks** screen opens the **[Add TrueCloud Backup Task Screen](#add-truecloud-backup-task-screen)**.

Each task on the widget shows four icons for various functions:

* <span class="material-icons">edit</span> **Edit** opens the **[Edit TrueCloud Backup Task](#edit-truecloud-backup-task-screen)** screen populated with with the settings for that task.

* <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> **Run Now** starts and runs the backup task outside of the scheduled time.

* **<i class="material-icons" aria-hidden="true" title="View Details">visibility</i> View Details** opens the [**TrueCloud Backup Tasks**](#truecloud-backup-tasks-screen) screen that lists backup tasks configured on the system. Click on a task to see details for the selected task.

* <span class="material-icons">delete</span> **Delete** opens a confirmation dialog before the system deletes the task.

**State** shows the status of the previous or current task. Possible status indications are:

* **SUCCESS** for completed tasks.
* **FAILED** if the task fails to complete.
* **RUNNING** for tasks in progress.
* **N/A** for scheduled tasks before they run.

### TrueCloud Logs Dialog
The state oval opens the **Logs** dialog for that task.
**Download Logs** saves a copy of the current task logs.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudLogs.png" alt="TrueCloud Logs Dialog" id="TrueCloud Logs Dialog" >}}

## TrueCloud Backup Tasks Screen
The **TrueCloud Backup Tasks** screen lists all tasks configured on the system.
The **TrueCloud Backup Tasks <i class="material-icons" aria-hidden="true" title="Open In New">open_in_new</i>** on the widget title or **<i class="material-icons" aria-hidden="true" title="View Details">visibility</i> View Details** on a task opens the **TrueCloud Backup Tasks** screen.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudBackupTasksScreenComplete.png" alt="TrueCloud Backup Tasks Screen" id="TrueCloud Backup Tasks Screen" >}}

Task options perform the same functions as the icons on the widget:

* <span class="material-icons">edit</span> **Edit** opens the **[Edit TrueCloud Backup Task](#edit-truecloud-backup-task-screen)** screen populated with with the settings for that task.

* <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> **Run Now** starts and runs the backup task outside of the scheduled time.

* <span class="material-icons">delete</span> **Delete** opens a confirmation dialog before the system deletes the task.

{{<include file="/static/includes/addcolumnorganizer.md">}}

Select any task to see details for the configured task, such as the schedule, path to the dataset or directories, snapshots, and other task options.

### Snapshots Widget
The **Snapshots** widget lists existing TrueCloud snapshots for the selected backup task.
It contains options to restore from or delete an existing snapshot.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudSnapshots.png" alt="Snapshots Widget" id="Snapshots Widget" >}}

**<i class="material-icons" aria-hidden="true" title="Restore">history</i> Restore** opens the [**Restore from Snapshot**](#restore-from-snapshot-screen) screen.

<span class="material-icons">delete</span> **Delete** opens a confirmation dialog before the system deletes the snapshot.

### Restore from Snapshot Screen
The **Restore from Snapshot** screen shows the date and time of the selected snapshot.
It shows **Remote** and **Local** configuration options to restore the TrueCloud snapshot.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudRestore.png" alt="Restore from Snapshot" id="Restore from Snapshot" >}}

#### Remote Settings
**Remote Settings** specify all data in the backup or exclude some data from a restoration.
Additional settings show depending on the **Include/Exclude** selection.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Include Everything** | Select to restore all backed-up data from the remote snapshot to the selected local path. |
| **Include from subfolder** | Select to restore data from a subfolder within the backed-up data. |
| **Subfolder** | Shows when **Include from subfolder** is selected. Enter or browse to the subfolder within the snapshot with the data to restore. |
| **Included Paths** | Shows when **Include from subfolder** is selected. Select files and directories to include from the backup. Leave empty to include everything in the selected subfolder. |
| **Select paths to exclude** | Select to exclude only certain paths from the data to restore. |
| **Excluded Paths** | Shows when **Select paths to exclude** is selected. Enter or select files and directories to exclude from the backup. Select as many checkboxes as desired to select multiple paths or separate multiple entries with a comma. |
| **Exclude by pattern** | Select to exclude files and directories matching defined glob patterns. |
| **Pattern** | Shows when **Exclude by pattern** is selected. | 
{{< /truetable >}}

#### Local Settings
Use **Local** settings to select the target mount point on the current (local) system where files are restored.
Be cautious when setting the restore target to avoid overwriting existing files.

**Target** settings allow entering the path to the dataset or directory or browse to the location to populate the field with the local directory where files are restored.

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

**<i class="material-icons" aria-hidden="true" title="Create Dataset">create_new_folder</i> Create Dataset** opens a dialog to name and create a new dataset at the selected target.

**Save** starts restoring data from the snapshot.
  
## Add and Edit TrueCloud Backup Task Screen
The **Add TrueCloud Backup Task** and **Edit TrueCloud Backup Task** screens contain options to configure a new backup task.
The edit screen opens populated with the existing task settings.
Each screen shows the **Local**, **Remote**, **Task Settings**, and **Control** settings.
The **Advanced** and **Advanced Remote Options** are for advanced users.

{{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskBasicOptions.png" alt="Add TrueCloud Backup Task - Basic Options" id="Add TrueCloud Backup Task - Basic Options" >}}

### Local Settings
**Local** settings set the dataset or directory used in the task. Selecting the dataset populates the **Source Path** field.

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Source Path** | Enter or browse to select the dataset or directory with the data to send to the cloud backup provider set in the task. Click the <span class="material-icons">arrow_right</span> arrow to the left of the **/mnt** folder to expand and show datasets and directories within that folder. This is the dataset or directory location with the data the TrueCloud backup task sends to the cloud storage provider. Click the <span class="material-icons">arrow_right</span> arrow to the left of the **/mnt** folder again to collapse the directory tree. |
{{< /truetable >}}

### Remote Settings
The **Remote** settings specify the TrueCloud credential and destination storage locations.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Credential** | Select an existing Storj iX credential from the dropdown list. TrueNAS automatically validates the selected credential. <br> Select **Add New** to open the [**Cloud Credentials**]({{< ref "CloudCredentialScreens" >}}) screen. This is the same configuration screen that opens when you click **Add** on the **Credentials > Backup Credentials** screen. |
| **Bucket** | Displays after selecting the Storj credential. Select a pre-configured Storj bucket. Only TrueNAS-compatible Storj buckets are selectable. <br> Select **Add New** to create a new Storj bucket from the TrueNAS UI. |
| **New Bucket Name** | Displays when **Add New** is selected in the **Bucket** field. Enter a name for the new bucket. Only lowercase letters, numbers, and hyphens are allowed. |
| **Folder** | Enter or browse to select the dataset or directory to receive the backed-up data. Click the <span class="material-icons">arrow_right</span> arrow to the left of the folder icon and at each dataset or directory to reach the storage location to use for this task. <br> Enter <code>/<i>name</i></code>, where *name* is a folder that does not exist, to create a new folder in the bucket. |
{{< /truetable >}}

### Task Settings
**Task Settings** specify the task name, snapshot retention policy, and password for the backup repository.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Name** | Enter a name for the TrueCloud backup task. |
| **Keep Last** | Enter a number for the past snapshot copies to retain before removing older snapshots. |
| **Password** | Enter a password for the backup repository. Record this password in a secure location. Required to recreate the task using the same bucket/folder, such as in a new TrueNAS install or system, or to restore data from the existing snapshots in another TrueNAS system. |
{{< /truetable >}}

### Control Settings
**Control** settings establish a schedule for when to run the backup task.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. |
| **Enabled** | Select to enable the TrueCloud task. Leave clear to disable the task without deleting it and keep the configuration available without allowing the specified schedule to run the task. The toggle in the **Enable** column on the **TrueCloud Backup Tasks** widget enables/disables the task. |
{{< /truetable >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/AdvancedScheduler.md" >}}
{{< /expand >}}

### Advanced Options Settings
**Advanced Options** settings are intended for advanced users.

{{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskAdvancedOptions.png" alt="Add TrueCloud Backup Task - Advanced Options" id="Add TrueCloud Backup Task - Advanced Options" >}}

<!-- <to be re-added to the table at a later date> | **Take Snapshot** | Select to take a snapshot before transferring data to the specified cloud provider like Storj. This option is not available to datasets with child datasets. |-->

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Take Snapshot** | Select to set the TrueCloud Backup Task to take a snapshot of the dataset before a push. |
| **Use Absolute Paths** | Select to ensure that restic backups will contain absolute paths. If you don't check this box, the restic backup will contain relative paths. |
| **Pre-Script** | (For advanced users only) Enter a script to execute before running the task. See the [Managing TrueCloud Backup Tasks tutorial]({{< ref "TrueCloudTasks/#using-advanced-options" >}}) for more information. See **Script Environment Variables** below for a list of variables for scripts. |
| **Post-Script** | (For advanced users only) Enter a script to execute after running the task. See the [Managing TrueCloud Backup Tasks tutorial]({{< ref "TrueCloudTasks/#using-advanced-options" >}}) for more information. See **Script Environment Variables** below for a list of variables for scripts. |
| **Exclude** | Enter a list of files and directories to exclude from the backup. Separate entries by pressing <kbd>Enter</kbd>. See [restic exclude patterns](https://restic.readthedocs.io/en/latest/040_backup.html#excluding-files) for more information about the `--exclude` option and proper syntax. |
{{< /truetable >}}

{{< expand "Script Environment Variables" "v" >}}
The following environment variables can be used in pre and post-scripts.
<li>CLOUD_BACKUP_ID
<li>CLOUD_BACKUP_DESCRITPION
<li>CLOUD_BACKUP_PASSWORD
<li>CLOUD_BACKUP_KEEP_LAST
<li>CLOUD_BACKUP_TRANSFER_SETTING
<li>CLOUD_BACKUP_ACCESS_KEY_ID
<li>CLOUD_BACKUP_FOLDER
<li>CLOUD_BACKUP_BUCKET
<li>CLOUD_BACKUP_FAST_LIST (always zero (0) for false, planned removal in Fangtooth)</li>
{{< /expand >}}

### Advanced Remote Options
**Advanced Remote Options** settings are intended for advanced users.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Transfer Settings** | Select the option from the dropdown list to set the number of simultaneous file transfers to allow. Options:<br><li>**Default** - Select to use the Restic PACK_SIZE of 16 Mib and READ_CONCURRENCY to two files.<br><li>**Perfromance** - Select to set the Restic PACK_SIZE to 29 MiB and READ_CONCURRENCY to two files.<br><li>**Fast Storage** - Select to set the Restic PACK_SIZE to 58 MiB and READ_CONCURRENCY to 100 files.</li>  |
{{< /truetable >}}