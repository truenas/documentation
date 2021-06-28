---
title: "Cloud Sync Tasks"
weight: 10
---

{{< toc >}}

TrueNAS can send, receive, or synchronize data with a Cloud Storage provider. Cloud Sync tasks allow for single time transfers or recurring transfers on a schedule and are an effective method to back up data to a remote location.

{{< hint warning >}}
Using the Cloud means that data can go to a third party commercial vendor not directly affiliated with iXsystems. Please investigate and fully understand that vendor’s pricing policies and services before creating any Cloud Sync task. iXsystems is not responsible for any charges incurred from the use of third party vendors with the Cloud Sync feature.
{{< /hint >}}

TrueNAS supports major providers like Amazon S3, Google Cloud, and Microsoft Azure, along with a variety of other vendors.  To see the full list of supported vendors, go to **Credentials > Backup Credentials > Cloud Credentials** click *Add* and open the *Provider* dropdown.

## Requirements

* All system [Storage](/SCALE/storage/) must be configured and ready to receive or send data.
* A Cloud Storage provider account and a cloud storage location must be available, like an Amazon S3 bucket.
* Cloud Storage account credentials must be saved to **System > Cloud Credentials** before creating the sync task. See *Cloud Credentials* for specific instructions.

## Creating a Cloud Sync Task

Go to **Data Protection > Cloud Sync Tasks** and click *Add*.

![DataProtectionCloudSyncAdd](/images/SCALE/DataProtectionCloudSyncAdd.png "Creating a Cloud Sync Task")

Give the task a memorable *Description* and select an existing cloud *Credential*. TrueNAS connects to the chosen Cloud Storage Provider and shows the available storage locations. Decide if data is transferring to (*PUSH*) or from (*PULL*) the Cloud Storage location (**Remote**). Choose a *Transfer Mode*:

{{< tabs "Transfer Modes" >}}
{{< tab "Sync" >}}
*Sync* keeps all the files identical between the two storage locations. If the sync encounters an error, files are not deleted in the destination.
This includes a common error when the [Dropbox copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.

Note that syncing to a Backblaze B2 bucket does not delete files from the bucket, even when those files have been deleted locally. Instead, files are tagged with a version number or moved to a hidden state. To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).

Files stored in Amazon S3 Glacier or S3 Glacier Deep Archive cannot be deleted by a sync. These files must first be restored by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).
{{< /tab >}}
{{< tab "Copy" >}}
*Copy* duplicates each source file into the destination, _overwriting_ any files in the destination that have the same name as the source. Copying is the least potentially destructive option.
{{< /tab >}}
{{< tab "Move" >}}
*Move* transfers the files from the source to the destination and _deletes_ the original source files. Files with the same names on the destination are overwritten.
{{< /tab >}}
{{< /tabs >}}

Next, **Control** when the task runs by defining a *Schedule*. When a specific *Schedule* is required, choose *Custom* and use the **Advanced Scheduler**.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Unsetting *Enable* makes the configuration available without allowing the *Schedule* to run the task. To manually activate a saved task, go to **Data Protection > Cloud Sync Tasks**, click <i class="fa fa-play" aria-hidden="true"></i> for the cloud sync task you want to run.  You will be prompted to *CONTINUE* or *CANCEL* the *Run Now* operation.

The remaining options allow tuning the task to your specific requirements.

{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/TasksCloudSyncAddFields.md.part" markdown="true" >}}

### Scripting and Environment Variables

Advanced users can write scripts that run immediately *before* or *after* the Cloud Sync task. The **Post-script** field is only run when the Cloud Sync task successfully completes. You can pass a variety of task environment variables into the **Pre-** and **Post-** script fields:

* CLOUD_SYNC_ID
* CLOUD_SYNC_DESCRIPTION
* CLOUD_SYNC_DIRECTION
* CLOUD_SYNC_TRANSFER_MODE
* CLOUD_SYNC_ENCRYPTION
* CLOUD_SYNC_FILENAME_ENCRYPTION
* CLOUD_SYNC_ENCRYPTION_PASSWORD
* CLOUD_SYNC_ENCRYPTION_SALT
* CLOUD_SYNC_SNAPSHOT

There also are provider-specific variables like CLOUD_SYNC_CLIENT_ID or CLOUD_SYNC_TOKEN or CLOUD_SYNC_CHUNK_SIZE

Remote storage settings:
* CLOUD_SYNC_BUCKET
* CLOUD_SYNC_FOLDER

Local storage settings:
* CLOUD_SYNC_PATH

{{< /expand >}}

### Testing Settings

Test the settings before saving by clicking *Dry Run*. TrueNAS connects to the Cloud Storage Provider and simulates a file transfer. No data is actually sent or received.
A dialog shows the test status and allows downloading the task logs.  This can also be ran by clicking <i class="material-icons" aria-hidden="true" title="Dry Run">loop</i> after the task has been created.

![DataProtectionCloudSyncAddBoxDryRun](/images/SCALE/DataProtectionCloudSyncDryRun.png "Example: Box Drive Test")

## Cloud Sync Behavior

Saved tasks are activated according to their schedule or by clicking <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i>. An in-progress cloud sync must finish before another can begin. Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running or the most recent run of a task, click the task *State*.

## Cloud Sync Restore

To quickly create a new Cloud Sync that uses the same options but reverses the data transfer, select <i class="material-icons" aria-hidden="true" title="Restore">history</i> for an existing Cloud Sync on the **Data Protection** page.

![DataProtectionsCloudSyncRestore](/images/SCALE/DataProtectionCloudSyncRestore.png "Cloud Sync Restore")

Enter a new *Description* for this reversed task, define the path to a storage location for the transferred data and click *Restore*.

The restored cloud sync is saved as another entry in **Data protection > Cloud Sync Tasks**.

In case the restore destination dataset is the same as the original source dataset, the restored files might have their ownership altered to *root*. If the original files were not created by *root* and a different owner is required, you can recursively reset ACL Permissions of the restored dataset through the GUI or by running `chown` from the CLI.
