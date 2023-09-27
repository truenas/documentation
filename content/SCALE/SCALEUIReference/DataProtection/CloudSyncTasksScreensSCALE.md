---
title: "Cloud Sync Tasks Screens"
description: "Provides information on the Cloud Sync task screens and settings."
weight: 20
aliases:
- /scale/scaleuireference/dataprotection/cloud-sync-tasks/
tags:
- scalecloud
- scalebackup
---

{{< toc >}}

The **Cloud Sync Tasks** widget on the **Data Protection** screen provides access to cloud sync tasks configured on SCALE and to configuration screens with settings to add single-time or scheduled recurring transfers between TrueNAS SCALE and a cloud storage provider.
They are an effective method to back up data to a remote location.

{{< include file="content/_includes/CloudServiceProvidersSCALE.md" >}}

## Cloud Sync Task Widget
The **Cloud Sync Task** widget displays a list of tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/DataProtectionCloudSyncTask.png" alt="Data Protection Cloud Sync Task" id="Data Protection Cloud Sync Task" >}}

If cloud sync task are not yet configured **No Cloud Sync Tasks configured** displays in the widget.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWidgeNoTasks.png" alt="No Cloud Sync Tasks" id="No Cloud Sync Tasks" >}}

Add opens the **[Add Cloud Sync Task](#add-and-edit-cloud-sync-task-screens)** screen. 
Each task listed is a link that opens the **[Edit Cloud Sync Task](#add-and-edit-cloud-sync-task-screens)** screen populated with with the settings for that task. Click on the **Description**, **Frequency** or **Next Run** column entry to open the edit task screen.

**State** displays the status of the next cloud sync task. Click on the state for the cloud sync task to display a **Logs** dialog for that task. 
**Download Logs** saves a copy of the current task logs.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskStateLogDialog.png" alt="Cloud Sync Task State Log" id="Cloud Sync Task State Log" >}}

The <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> **Run Now** icon starts the cloud sync, running outside of the time scheduled in the saved configuration. When doing a dry run, you can close the window and monitor the task using the **Jobs** option on the top toolbar.

The <span class="material-icons">loop</span> **Dry Run** icon performs the same function as the **Dry Run** button on the add and edit configuration screens. It performs a test of the configured settings.

The <span class="material-icons">restore</span> **Restore** icon creates a new cloud sync task from an existing task that uses the same options but reverses the data transfer.

{{< trueimage src="/images/SCALE/DataProtection/RestoreCloudSyncTaskWindow.png" alt="Restore Cloud Sync Tasks" id="Restore Cloud Sync Tasks" >}}

The <span class="material-icons">delete</span> **Delete** icon opens a simple delete dialog where you confirm before the system deletes the saved cloud sync task.

## Add and Edit Cloud Sync Task Screens

The **Add Cloud Sync Task** and **Edit Cloud Sync Task** display the same settings.

The **Manage Credentials** link opens the [Backup Credentials]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}) screen.

###  Transfer Settings
**Transfer** setting options change the cloud sync task direction (send or receive) and data transfer method (copy or move).

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushTransferRemote.png" alt="Add Cloud Sync Task Remote Settings" id="Add Cloud Sync Task Remote Settings" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Enter a description of the cloud sync task. |
| **Direction** | Select a direction option from the dropdown list. **PUSH** sends data to cloud storage. **PULL** receives data from cloud storage and is the default setting. |
| **Transfer Mode** | Select the transfer mode type from the dropdown list. To keep all files identical between the two storage locations, select **SYNC**. This changes files on the destination to match those on the source. If a file does not exist on the source, it is also deleted from the destination. To duplicate each source file into the destination and overwrite destination files using the same source select **COPY**. This copies files from the source to the destination. If files with the same names are present on the destination, they are overwritten. To transfer files from the source to the destination and delete source files select **MOVE**. If first copies files from the source to the destination and then deletes them from the source. Files with the same names on the destination are overwritten. |
| **Directory/Files** | Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of <span class="material-icons">folder</span>/mnt and at each dataset until you locate the dataset, directory location you want to send to the cloud for push syncs, or the destination to write to for pull syncs. Be cautious with pull destinations to avoid overwriting existing files. Click the <span class="material-icons">arrow_right</span> arrow to the left of <span class="material-icons">folder</span>/mnt again to collapse the directory tree. |
{{< /truetable >}}

### Remote Settings
The option selected in **Credential** changes settings displayed in the **Remote** settings area. 
Use the **Manage Credentials** link to open the **Backup Credentials** screen where you can add a new provider credential using the **Cloud Credentials** widget.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Credential** | Select an exiting backup cloud storage provider credential from the dropdown list. A **Bucket** setting displays after selecting a credential that uses S3, like **Amazon S3**. TrueNAS automatically validates the selected credential. |
| **Bucket** | Select the pre-defined bucket S3 to use. |
| **Folder** | Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of the <span class="material-icons">folder</span> icon and at each directory or folder to reach the storage location to uses for this task. |
{{< /truetable >}}

### Control Settings
**Control** settings establish when the cloud sync task occurs. 

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushControlAdvancedOptions.png" alt="Add Cloud Sync Task Control and Advanced Options" id="Add Cloud Sync Task Control and Advanced Options" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Schedule** | Select a schedule preset or choose Custom to open the advanced scheduler. |
| **Enabled** | Select to enable this Cloud Sync Task. To disable this cloud sync task without deleting it and make the configuration available without allowing the specified schedule to run the task, clear the checkbox. You can use the **Enable** column on the **Cloud Sync Tasks** widget to enable or disable the task. |
{{< /truetable >}}

### Advanced Options Settings
**Advanced Options** settings include settings for advanced users. Selecting **Push** in **Direction** adds the **Take Snapshot** option in **Advanced Options**.

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Take Snapshot** | Displays if **Direction** is set to **Push**. Select to take a snapshot before transfering data to the cloud storage provider. |
| **Create empty source dirs on destination after sync** | Select to create an empty source directory in the cloud storage provider folder when pushing data to the cloud provider location, or in TrueNAS if pulling data from the cloud storage provider. |
| **Follow Symlinks** | Select to follow symlinks and copy the items to which they link. |
| **Pre-Script** | For advanced users. Enter a script to execute before running sync. See the [Cloud Sync tutorial]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks/AddCloudSyncTasks.md" >}}) for more information. |
| **Post-Script** | For advanced user. Enter a script to execute after running sync. See the [Cloud Sync tutorial]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks/AddCloudSyncTasks.md" >}}) for more information. |
| **Exclude** | Enter a list of files and directories to exclude from sync. Separate entries by pressing <kbd>Enter</kbd>.<br> Examples of proper syntax used to exclude files/directories are:<li> `photos</code>` excludes a file named *photos*</li><li> `/photos`> excludes a file named *photos* from root directory (but not subdirectories)</li><li>`photos/` excludes a directory named *photos</li><li>`/photos/` excludes a directory named *photos* from root directory (but not subdirectories).</li></ul> See [rclone filtering](https://rclone.org/filtering/) for more details about the `--exclude` option. |
{{< /truetable >}}

### Advanced Remote Options
**Advanced Remote Options** configure settings related to the remote system.

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushControlAdvancedEncrypt.png" alt="Advanced Remote Encryption Options" id="Advanced Remote Encryption Options" >}}

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Remote Encryption** | Select to use [rclone crypt](https://rclone.org/crypt/) encryption during pull and push transfers. Selecting **PUSH** in **Direction** encrypts files before transfer and stores the encrypted files on the remote system. Files are encrypted using the encryption password and encryption salt values. Selecting **PULL** decrypts files stored on the remote system before the transfer. Transferring the encrypted files requires entering the same encryption password and encryption salt used to encrypt the files. Additional details about the encryption algorithm and key derivation are available in the [rclone crypt File formats documentation](https://rclone.org/crypt/#file-formats). |
| **Filename Encryption** | Selected by default. When selected, the pull and push tranfers encrypt or decrypt file names with the rclone [Standard file name encryption mode](https://rclone.org/crypt//#file-name-encryption-modes). The original directory structure of the files is preserved. When disabled, encryption does not hide file names or directory structure, file names can be 246 characters long, use sub-paths, and copy single files. When enabled, file names are encrypted, file names are limited to 143 characters, directory structure is visible, and files with identical names have identical uploaded names. File names can use sub-paths, single copy files, and shortcuts to shorten the directory recursion. |
| **Encryption Password** | Enter the password to encrypt and decrypt remote data. Warning: Always securely back up this password! Losing the encryption password results in data loss. |
| **Encryption Salt** | Enter a long string of random characters for use as salt for the encryption password. Warning: Always securely back up the encryption salt value! Losing the salt value results in data loss. |
| **Transfers** | Enter the number of simultaneous file transfers. Enter a number based on the available bandwidth and destination system performance. See [rclone --transfers](https://rclone.org/docs/#transfers-n). |
| **Bandwidth limit** | Enter a single bandwidth limit or bandwidth limit schedule in rclone format. Separate entries by pressing <kbdEnter</kbd>. Example: *08:00,512 12:00,10MB 13:00,512 18:00,30MB 23:00,off*. You can specify units with the beginning letter: **b**, **k** (default), **M**, or **G**. See [rclone --bwlimit](https://rclone.org/docs/#bwlimit-bandwidth-spec). |
{{< /truetable >}}


{{< taglist tag="scalecloud" limit="10" >}}
