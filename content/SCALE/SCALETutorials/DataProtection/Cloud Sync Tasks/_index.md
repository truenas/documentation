---
title: "Cloud Sync Tasks"
weight: 20
alias: /scale/scaleuireference/dataprotection/cloud-sync-tasks/
---

{{< toc >}}

TrueNAS can send, receive, or synchronize data with a cloud storage provider. Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule. They are an effective method to back up data to a remote location.

{{< hint warning >}}
Using the cloud means data can go to a third-party commercial vendor not directly affiliated with iXsystems. You should fully understand vendor pricing policies and services before using them for cloud sync tasks.

 iXsystems is not responsible for any charges incurred from using third-party vendors with the cloud sync feature.
{{< /hint >}}

TrueNAS supports major providers like Amazon S3, Google Cloud, and Microsoft Azure. It also supports many other vendors. To see the full list of supported vendors, go to **Credentials > Backup Credentials > Cloud Credentials** click **Add** and open the **Provider** drop-down list.

## Requirements

* You must have all system [storage]({{< relref "/SCALE/SCALEUIReference/Storage/_index.md" >}}) configured and ready to receive or send data.
* You must have a cloud storage provider account and location (like an Amazon S3 bucket).
* You must have cloud storage account credentials saved to **System > Cloud Credentials** before creating the sync task. See [Cloud Credentials]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}) for specific instructions.

## Creating a Cloud Sync Task

{{< embed-video name="scaleangelfishcloudsync" >}}

Go to **Data Protection > Cloud Sync Tasks** and click **Add**.

![DataProtectionCloudSyncAdd](/images/SCALE/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task")

Type a memorable task description in the **Description** field. Use the **Credential** dropdown list to select an existing cloud or create a new one with the **+ Add a backup credential** option. 

{{< expand "What happens if my cloud sync credentials are invalid?" "v" >}}
Once you choose a cloud credential from the dropdown list, TrueNAS automatically validates access to that cloud sync provider.  Invalid credentials results in the following Alert: 

![DataProtectionCloudSyncInvalidAlert](/images/SCALE/DataProtectionCloudSyncInvalidAlert.png "Invalid Credentials Alert")

Click **FIX CREDENTIAL**.  TrueNAS directs you to the Cloud Credentials entry view.  

![DataProtectionCloudSyncInvalidFix](/images/SCALE/DataProtectionCloudSyncInvalidFix.png "Name and Provider View")

Check your provider credentials and update the applicable fields within the ***Authentication*** section, then click ***Verify Credential***.  *The Credential is valid* will display if TrueNAS successfully accesses your provider.  Click ***Save*** and return to **Data Protection > Cloud Sync Tasks > Add**.
{{< /expand >}}

TrueNAS connects to the chosen cloud storage provider and shows the available storage locations. Select the option if data is transferring to (**PUSH**) or from (**PULL**) the cloud storage location (**Remote**). Select a **Transfer Mode**:

{{< tabs "Transfer Modes" >}}
{{< tab "Sync" >}}
**Sync** keeps all the files identical between the two storage locations. If the sync encounters an error, it does not delete files in the destination.
One common error occurs when the [Dropbox copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.

Note that syncing to a Backblaze B2 bucket does not delete files from the bucket, even when you deleted those files locally. Instead, files are tagged with a version number or moved to a hidden state. To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).

Sync cannot delete files stored in Amazon S3 Glacier or S3 Glacier Deep Archive. These files must first be restored by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).
{{< /tab >}}
{{< tab "Copy" >}}
**Copy** duplicates each source file into the destination, overwriting any destination files using the same name as the source. Copying is the least potentially destructive option.
{{< /tab >}}
{{< tab "Move" >}}
**Move** transfers the files from the source to the destination and deletes the source files. **Move** also overwrites files with the same names on the destination.
{{< /tab >}}
{{< /tabs >}}

Next, use the **Control** options. Define when the task runs using **Schedule**. If you need a specific schedule, select **Custom** and use the **Advanced Scheduler**.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Clear the **Enable** checkbox to make the configuration available without allowing the specified schedule to run the task. To manually activate a saved task, go to **Data Protection > Cloud Sync Tasks**, click <i class="fa fa-play" aria-hidden="true"></i> for the cloud sync task you want to run.  You are prompted to **CONTINUE** or **CANCEL** the **Run Now** operation.

The remaining options allow tuning the task to your specific requirements.

{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/Reference/TasksCloudSyncAddFields.md.part" markdown="true" >}}

### Scripting and Environment Variables

Advanced users can write scripts that run immediately before or after the cloud sync task. The **Post-script** field only runs when the cloud sync task succeeds. You can pass a variety of task environment variables into the **Pre-** and **Post-** script fields:

* `CLOUD_SYNC_ID`
* `CLOUD_SYNC_DESCRIPTION`
* `CLOUD_SYNC_DIRECTION`
* `CLOUD_SYNC_TRANSFER_MODE`
* `CLOUD_SYNC_ENCRYPTION`
* `CLOUD_SYNC_FILENAME_ENCRYPTION`
* `CLOUD_SYNC_ENCRYPTION_PASSWORD`
* `CLOUD_SYNC_ENCRYPTION_SALT`
* `CLOUD_SYNC_SNAPSHOT`

There also are provider-specific variables like CLOUD_SYNC_CLIENT_ID or CLOUD_SYNC_TOKEN or CLOUD_SYNC_CHUNK_SIZE.

Remote storage settings:
* `CLOUD_SYNC_BUCKET`
* `CLOUD_SYNC_FOLDER`

Local storage settings:
* `CLOUD_SYNC_PATH`

{{< /expand >}}

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
