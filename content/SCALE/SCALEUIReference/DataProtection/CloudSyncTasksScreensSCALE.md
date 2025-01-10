---
title: "Cloud Sync Tasks Screens"
description: "Provides information on the Cloud Sync task screens and settings."
weight: 20
aliases:
- /scale/scaleuireference/dataprotection/cloud-sync-tasks/
- /scale/scaleclireference/task/cloudsync/
tags:
- cloud
- backup
- cloud-storage-migration
---

The **Cloud Sync Tasks** widget on the **Data Protection** screen shows configured cloud sync tasks, and provides access to configuration screens to add single-time or scheduled recurring transfers between TrueNAS and a cloud storage provider.
Cloud sync tasks are an effective method to back up data to a remote location, or to perform cloud-storage-migration through a  provider.

{{< include file="/static/includes/CloudServiceProvidersSCALE.md" >}}

## Cloud Sync Task Widget
The **Cloud Sync Task** widget shows a list of tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWidget.png" alt="Cloud Sync Task Widget" id="Cloud Sync Task Widget" >}}

The widget shows **No Cloud Sync Tasks configured** until cloud sync tasks are added.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWidgetNoTasks.png" alt="No Cloud Sync Tasks" id="No Cloud Sync Tasks" >}}

Click on the widget header to open the [**Cloud Sync Task**](#cloud-sync-task-screen) screen that lists all tasks configured on the system.

**Add** on the widget and the **Cloud Sync Task** screen opens the **[Cloudsync Task Wizard](#cloudync-task-wizard)**.

Each task includes five icons for various functions:

* The <span class="material-icons">edit</span> **Edit** icon opens the **[Edit Cloud Sync Task](#advanced-options-and-edit-cloud-sync-task-screens)** screen populated with with the settings for that task.

* The <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> **Run Now** icon starts the cloud sync, running it outside of the scheduled time. 

* The <span class="material-icons">loop</span> **Dry Run** icon performs the same function as the **Dry Run** button on the add and edit configuration screens. It performs a test of the configured settings.
  When doing a dry run, you can close the window and monitor the task using the **Jobs** option on the top toolbar.

* The <span class="material-icons">restore</span> **Restore** icon creates a new cloud sync task from an existing task.
  The new task has the same settings but reverses the data transfer.

* The <span class="material-icons">delete</span> **Delete** icon opens a confirmation dialog before the system deletes the task.

**State** displays the status of the next cloud sync task as **SUCCESS** for completed tasks, **FAILED** if the task fails to complete the sync, and **PENDING** for tasks that have not run yet.
Click on the state oval to open the **Logs** dialog for that task. **Download Logs** saves a copy of the current task logs.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskStateLogDialog.png" alt="Cloud Sync Task State Log" id="Cloud Sync Task State Log" >}}

## Cloud Sync Task Screen
The **Cloud Sync Task** screen lists all tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTasksScreen.png" alt="Cloud Sync Task Screen" id="Cloud Sync Task Screen" >}}

Expand any task to see details on the configured task, such as the cloud sync provider, direction, transfer mode, path to the dataset or directories, and other options for that task.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTasksScreenTaskDetails.png" alt="Cloud Sync Task Details" id="Cloud Sync Task Details" >}}

Buttons for these task options perform the same functions as the icons on the widget:

* **Run Now** starts the task outside of the scheduled period.

* **Dry Run** performs a test of the configuration. 
  This is the same function as the **Dry Run** button on the **Edit Cloud Sync Task** screen and the **Advanced Options** for the **Cloudsync Task Wizard**. 

* **Restore** opens the **Restore Cloud Sync Task** window where you can create a new cloud sync task from an existing task with the same options but the new task reverses the transfer from PUSH to PULL and vice-versa.

{{<include file="/static/includes/addcolumnorganizer.md">}}
  
  {{< trueimage src="/images/SCALE/DataProtection/RestoreCloudSyncTaskWindow.png" alt="Restore Cloud Sync Tasks" id="Restore Cloud Sync Tasks" >}}

* **Edit** opens the [Edit Cloud Sync Task](#advanced-options-and-edit-cloud-sync-task-screens) screen.

* **Delete** opens a dialog where you confirm the action before the system deletes the task.

## Cloudsync Task Wizard
The **Cloud Sync Task** wizard screens simplify the task creation process.
It includes two screens, **Provider** and **What and When**.

### Provider Wizard Screen
The **Provider** wizard screen allows you to select the cloud sync provider with the **Credentials** dropdown.
Select the provider from the dropdown list to show the additional credential settings that the provider requires to establish a connection.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardProviderScreen.png" alt="Cloudsync Task Wizard Provider Screen" id="Cloudsync Task Wizard Provider Screen" >}}

Select **Add New** to open the **Cloud Credentials** screen. This is the same configuration screen as when you click **Add** on the **Credentials > Backup Credentials** screen.

**Advanced Options** opens a screen with the same settings as the **Edit Cloud Sync Task** screen.

**Verify Credentials** tests the settings before you advance to the settings on the **What and When** wizard screen.

### What and When Wizard Screen
The **What and When** screen sets the direction (PUSH or PULL), transfer mode (move, copy, or sync), the datasets or directories source and destination, and sets the schedule for the transfer.
The **Bucket** field displays for providers that use buckets to hold transferred files, folders, etc.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardWhatandWhenScreen.png" alt="Cloudsync Task Wizard Provider Screen" id="Cloudsync Task Wizard Provider Screen" >}}

The **Advanced Options** button shows at the bottom of this screen as well.

## Advanced Options and Edit Cloud Sync Task Screens
The **Advanced Options** accessed from the **Cloudsync Task Wizard** and **Edit Cloud Sync Task** display the same settings.
Settings are grouped into the **Transfer**, **Remote**, **Control**, and **Advanced Options** for advanced users.

The **Manage Credentials** link opens the [Backup Credentials]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}) screen.

###  Transfer Settings
**Transfer** settings change the cloud sync task direction (**PUSH** or **PULL**), data transfer method (**COPY**, **MOVE**, or **SYNC**), and allow selecting the dataset or directory to use in the task. Selecting the dataset or file populates the **Directory/Files** field.

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushTransferRemote.png" alt="Add Cloud Sync Task Remote Settings" id="Add Cloud Sync Task Remote Settings" >}}

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Enter a description of the cloud sync task. |
| **Direction** | Select a direction option from the dropdown list. **PUSH** sends data to cloud storage. **PULL** receives data from cloud storage and is the default setting. |
| **Transfer Mode** | Select the transfer mode type from the dropdown list. There are three options:<br><li>**COPY** - Select to duplicate each source file into the destination. If files with the same names are present on the destination, they are overwritten.<br><li>**MOVE** - Select to transfer files from the source to the destination and delete source files. Copies files from the source to the destination and then deletes them from the source. Files with the same names on the destination are overwritten.<br><li>**SYNC** - Select to change files on the destination to match those on the source. If a file does not exist on the source, it is also deleted from the destination.</li> |
| **Directory/Files** | Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of **/mnt** folder to expand and show datasets and directories within that folder. When you locate the dataset or directory location to send to the cloud for push syncs, or as the destination to write to for pull syncs. Be cautious with pull destinations to avoid overwriting existing files. Click the <span class="material-icons">arrow_right</span> arrow to the left of **/mnt** folder again to collapse the directory tree. |
{{< /truetable >}}

### Remote Settings
The **Remote** settings specify the cloud sync provider and destination storage locations.
The option selected in **Credential** changes settings displayed in the **Remote** settings area.
The **Manage Credentials** link opens the **Backup Credentials** screen where you can add a new provider credential.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Credential** | Select an existing backup cloud storage provider credential from the dropdown list. A **Bucket** setting displays after selecting a credential that uses S3, like **Amazon S3**. TrueNAS automatically validates the selected credential. |
| **Bucket** | Select the pre-defined bucket S3 to use. For Storj-iX credentials, select **Add New** to open the **Add Bucket** screen and create a new bucket on your Storj account from the TrueNAS UI. |
| **Folder** | Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of the folder icon and at each dataset or directory to reach the storage location to use for this task. |
{{< /truetable >}}

#### Add Bucket Screen

The **Add Bucket** screen opens when **Add New** is selected from the **Bucket** dropdown in **Remote Settings**.
It is only available for Storj-iX provider credentials.

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskNewBucket.png" alt="Add Bucket Screen" id="Add Bucket Screen" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Bucket Name** | Enter a name for the new bucket |
{{< /truetable >}}

Click **Save** on the **Add bucket** screen to create the remote bucket on Storj and then return to the **Cloud Sync Task Wizard**.

### Control Settings
**Control** settings establish a schedule for when the cloud sync task occurs.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. |
| **Enabled** | Select to enable this cloud sync task. Leave clear to disable the task without deleting it and keep the configuration available without allowing the specified schedule to run the task. You can use the toggle in the **Enable** column on the **Cloud Sync Tasks** widget to enable or disable the task. |
{{< /truetable >}}

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/AdvancedScheduler.md" >}}
{{< /expand >}}

### Advanced Options Settings
**Advanced Options** settings are for advanced users.
Selecting **Push** in **Direction** adds the **Take Snapshot** option in **Advanced Options**.

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushControlAdvancedOptions.png" alt="Add Cloud Sync Task Control and Advanced Options" id="Add Cloud Sync Task Control and Advanced Options" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Take Snapshot** | Displays if **Direction** is set to **Push**. Select to take a snapshot before transferring data to the cloud storage provider. |
| **Create empty source dirs on destination after sync** | Select to create an empty source directory in the cloud storage provider folder when pushing data to the cloud provider location, or in TrueNAS if pulling data from the cloud storage provider. |
| **Follow Symlinks** | Select to follow symbolic links (symlinks) and copy the items to which they link. |
| **Pre-Script** | For advanced users. Enter a script to execute before running sync. See the [Cloud Sync tutorial]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks/_index.md" >}}) for more information. |
| **Post-Script** | For advanced user. Enter a script to execute after running sync. See the [Cloud Sync tutorial]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks/_index.md" >}}) for more information. |
| **Exclude** | Enter a list of files and directories to exclude from sync. Separate entries by pressing <kbd>Enter</kbd>.<br> Examples of proper syntax to exclude files/directories are:<li> `photos</code>` excludes a file named *photos*</li><li> `/photos`> excludes a file named *photos* from root directory (but not subdirectories)</li><li>`photos/` excludes a directory named *photos</li><li>`/photos/` excludes a directory named *photos* from root directory (but not subdirectories).</li></ul> See [rclone filtering](https://rclone.org/filtering/) for more details about the `--exclude` option. |
{{< /truetable >}}

### Advanced Remote Options
The **Advanced Remote Options** settings are for advanced users to configure remote encryption and transfer bandwidth speed and limit.

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushControlAdvancedEncrypt.png" alt="Advanced Remote Encryption Options" id="Advanced Remote Encryption Options" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Remote Encryption** | Select to use [rclone crypt](https://rclone.org/crypt/) encryption during pull and push transfers. Selecting **PUSH** in **Direction** encrypts files before transfer and stores the encrypted files on the remote system. Files are encrypted using the encryption password and encryption salt values. Selecting **PULL** decrypts files stored on the remote system before the transfer. Transferring the encrypted files requires entering the same encryption password and encryption salt used to encrypt the files. Additional details about the encryption algorithm and key derivation are available in the [rclone crypt File formats documentation](https://rclone.org/crypt/#file-formats). Selecting **Remote Encryption** shows the **Filename Encryption**, **Encryption Password**, and **Encryption Salt** settings. |
| **Filename Encryption** | **Not recommended** (see below). Shows after selecting **Remote Encryption**. When selected, transfers encrypt and decrypt file names with the rclone [Standard file name encryption mode](https://rclone.org/crypt//#file-name-encryption-modes). The original directory structure of the files is preserved. <br>When enabled, file names are encrypted, file names are limited to 143 characters, directory structure is visible, and files with identical names have identical uploaded names. File names can use sub-paths, single-copy files, and shortcuts to shorten the directory recursion. <br>When disabled, encryption does not hide file names or directory structure, file names can be 246 characters long, and you can use sub-paths, and copy single files. |
| **Encryption Password** | Shows after selecting **Remote Encryption**. Enter the password to encrypt and decrypt remote data.<br>Warning: Always securely back up this password! Losing the encryption password results in data loss. |
| **Encryption Salt** | Shows after selecting **Remote Encryption**. Enter a long string of random characters for use as salt for the encryption password.<br>Warning: Always securely back up the encryption salt value! Losing the salt value results in data loss. |
| **Transfers** | Select the option for the number of simultaneous file transfers based on the available bandwidth and destination system performance from the dropdown list. Options: **Low Bandwidth(4)**, **Medium Bandwidth (8)**, **High Bandwidth(16)**, and **Custom**. See [rclone --transfers](https://rclone.org/docs/#transfers-n). |
| **Bandwidth limit** | Enter a single bandwidth limit or bandwidth limit schedule in rclone format. For example: *08:00,512 12:00,10MB 13:00,512 18:00,30MB 23:00,off*. Separate entries by pressing <kbd>Enter</kbd>. You can specify units with the beginning letter **b**, **k** (default), **M**, or **G**. See [rclone --bwlimit](https://rclone.org/docs/#bwlimit-bandwidth-spec). |
{{< /truetable >}}

{{< include file="/static/includes/FilenameEncryption.md" >}}