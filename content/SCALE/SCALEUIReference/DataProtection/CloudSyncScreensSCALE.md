---
title: "Cloud Sync Tasks Screens"
weight: 20
---

{{< toc >}}

The **Cloud Sync Tasks** widget on the **Data Protection** screen provides access to cloud sync tasks configured on SCALE and to configuration screens with settings to add  single-time or scheduled recurring transfers between TrueNAS SCALE and a could storage provider. They are an effective method to back up data to a remote location.

## Cloud Sync Task Widget
The **Cloud Sync Task** widget displays a list of tasks configured on the system.

![DataProtectionCloudSyncTask](/images/SCALE/22.02/DataProtectionCloudSyncTask.png "Data Protection Cloud Sync Task") 

If no cloud sync task are configured **No Cloud Sync Tasks configured** displays in the widget.

![CloudSynchTasksWidgetNoTasks](/images/SCALE/22.02/CloudSynchTasksWidgetNoTasks.png "No Cloud Sync Tasks")

Add opens the **[Add Cloud Sync Task](#add-and-edit-cloud-sync-task-screens)** screen. 
Each task listed is a link that opens the **[Edit Cloud Sync Task](#add-and-edit-cloud-sync-task-screens)** screen populated with with the settings for that task. Click on the **Description**, **Frequency** or **Next Run** column entry to open the edit task screen.

**State** displays the status of the next cloud sync task. 

The <span class="material-icons">play_arrow</span> **Run Now** icon starts the cloud sync, running outside of the time scheduled in the saved configuration. 

The <span class="material-icons">loop</span> **Dry Run** icon performs the same function as the **Dry Run** button on the add and edit configuration screens. It performs a test of the configured settings.

The <span class="material-icons">delete</span> **Delete** icon opens a delete dialog where you confirm before the system deletes the saved cloud sync task.

## Add and Edit Cloud Sync Task Screens

The **Add Cloud Sync Task** and **Edit Cloud Sync Task** display the same settings.

The **Add a backup credential** option on the **Credential** dropdown list opens a window where you enter the [cloud storage provider settings](#cloud-storage-provider-window).

###  Transfer Settings
**Transfer** setting options change the 

![DataProtectionCloudSyncAdd](/images/SCALE/22.02/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task") change image

| Settings | Description |
|----------|-------------|
| **Description** | Enter a description of the cloud sync task. |
| **Direction** | Select a direction option from the dropdown list. **PUSH** sends data to cloud storage. **PULL** receives data from cloud storage and is the default setting. Changing the direction from **PULL** to **PUSH** or visa versa displays a **Transfer Mode Reset** information dialog and resets the **Transfer Mode** to **COPY**. |
| **Transfer Mode** | Select the transfer mode type from the dropdown list. To keep all files identical between the two storage locations, select **SYNC**. It changes files on the destination to match those on the source. If a file does not exist on the source, it is also deleted from the destination. To duplicate each source file into the destination and overwrite destination files using the same source select **COPY**. It copies files from the source to the destination. If files with the same names are present on the destination, they are overwritten. To transfer files from the source to the destination and delete source files select **MOVE**. If first copies files from the source to the destination and then deletes them from the source. Files with the same names on the destination are overwritten. |
| **Directory/Files** | Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of <span class="material-icons">folder</span>/mnt and at each dataset until you locate the dataset, directory location you want to send to the cloud for push syncs, or the destination to write to for pull syncs. Be cautious with pull destinations to avoid overwriting existing files. |

### Remote Settings
The option selected in **Credential** changes settings displayed in the **Remote** settings area or it opens a window with [cloud provider settings](#cloud-storage-provider-window).

![DataProtectionCloudSyncAdd](/images/SCALE/22.02/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task") change image

| Settings | Description |
|----------|-------------|
| **Credential** | Select either **Add a backup credential** or a backup cloud storage provider credential from the dropdown list. **Add a backup credential** opens the cloud service provider settings window. The **Bucket** setting displays after selecting a credential that uses S3, like **Amazon S3**. TrueNAS automaticially validates the selected credential. If you select a credential with invalid authentication settings the system displays an error dialog. Click **Fix Credential** opens the **Credentials > Backup Credentials > Cloud Credentials** configuration screen for that backup credential. |
| **Bucket** | Select the pre-defined S3 bucket to use. |
| **Folder** | Enter or click the <span class="material-icons">arrow_right</span> arrow to the left of the <span class="material-icons">folder</span> icon and at each directory or folder to reach the storage location to uses for this task. |

### Control Settings
**Control** settings establish when the cloud sync task occurs.

![DataProtectionCloudSyncAdd](/images/SCALE/22.02/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task") change image

| Settings | Description |
|----------|-------------|
| **Schedule** | Select a schedule preset or choose Custom to open the advanced scheduler. |
| **Enabled** | Select to enable this Cloud Sync Task. To disable this cloud sync task without deleting it and make the configuration available without allowing the specified schedule to run the task, clear the checkbox. You can use the **Enable** column on the **Cloud Sync Tasks** widget to enable or disable the task. |

### Advanced Options Settings


![DataProtectionCloudSyncAdd](/images/SCALE/22.02/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task") change image

| Settings | Description |
|----------|-------------|
| **Follow Symlinks** | Select to follow symlinks and copy the items to which they link. |
| **Pre-Script** | For advanced users. Enter a script to execute before running sync. See []({{< relref "" >}}) for more information. |
| **Post-Script** | For advanced user. Enter a script to execute after running sync. See []({{< relref "" >}}) for more information. |
| **Exclude** | Enter a list of files and directories to exclude from sync. Separate entries by pressing <kbd>Enter</kbd>.<br> Examples of proper syntax used to exclude files/directories are:<li>* `photos</code>` excludes a file named *photos*</li><li>* `/photos`> excludes a file named *photos* from root directory (but not subdirectories)</li><li>`photos/` excludes a directory named *photos</li><li>`/photos/` excludes a directory named *photos* from root directory (but not subdirectories).</li></ul> See [rclone filtering](https://rclone.org/filtering/) for more details about the `--exclude` option. |

### Advanced Remote Options


![DataProtectionCloudSyncAdd](/images/SCALE/22.02/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task") change image

| Settings | Description |
|----------|-------------|
| **Remote Encryption** | Selecting **PUSH** in **Direction** encrypts files before transfer and stores the encrypted files on the remote system. Files are encrypted using the encryption password and encryption salt values. Selecting **PULL** decrypts files stored on the remote system before the transfer. Transferring the encrypted files requires entering the same encryption password and encryption salt used to encrypt the files. Additional details about the encryption algorithm and key derivation are available in the [rclone crypt File formats documentation](https://rclone.org/crypt/#file-formats). |
| **Transfers** | Enter the number of simultaneous file transfers. Enter a number based on the available bandwidth and destination system performance. See [rclone --transfers](https://rclone.org/docs/#transfers-n). |
| **Bandwidth limit** | Enter a single bandwidth limit or bandwidth limit schedule in rclone format. Separate entries by pressing <kbdEnter</kbd>. Example: *08:00,512 12:00,10MB 13:00,512 18:00,30MB 23:00,off*. You can specify units with the beginning letter: **b**, **k** (default), **M**, or **G**. See [rclone --bwlimit](https://rclone.org/docs/#bwlimit-bandwidth-spec). |

### Cloud Storage Provider Window 

![AddCloudSyncTaskBackupCredentialSettings](/images/SCALE/22.02/AddCloudSyncTaskBackupCredentialSettings.png "Add Backup Credential Name and Provider Settings") change image

#### Name and Provider Settings


| Settings | Description |
|----------|-------------|



#### Authentication Settings


| Settings | Description |
|----------|-------------|


#### Authentication Advanced Options


| Settings | Description |
|----------|-------------|



### Testing Settings

To test the settings before saving, click **Dry Run**. TrueNAS connects to the cloud storage provider and simulates a file transfer but does not send or receive data.
A dialog box displays with the test status and allows you to download the task logs. You can also run this by clicking <i class="material-icons" aria-hidden="true" title="Dry Run">loop</i> after creating the task.

![DataProtectionCloudSyncAddBoxDryRun](/images/SCALE/DataProtectionCloudSyncDryRun.png "Example: Box Drive Test")

## Cloud Sync Behavior

Saved tasks activate according to their schedule or by clicking <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i>. An in-progress cloud sync must finish before another can begin. Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running task, or its most recent run, click **State**.

## Cloud Sync Restore

To quickly create a new cloud sync that uses the same options but reverses the data transfer, select <i class="material-icons" aria-hidden="true" title="Restore">history</i> for an existing cloud sync on the **Data Protection** page.

![DataProtectionsCloudSyncRestore](/images/SCALE/DataProtectionCloudSyncRestore.png "Cloud Sync Restore")

Type a new description for this reversed task, then define the path to a storage location for the transferred data and click **Restore**.

TrueNAS saves the restored cloud sync as another entry in **Data protection > Cloud Sync Tasks**.

If you set the restore destination to the source dataset, TrueNAS may alter ownership of the restored files to *root*. If *root* did not create the original files and you need them to have a different owner, you can recursively reset their ACL permissions through the GUI or run `chown` from the CLI.
