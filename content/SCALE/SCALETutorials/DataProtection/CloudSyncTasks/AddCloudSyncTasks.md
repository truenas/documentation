---
title: "Adding Cloud Sync Tasks"
description: "This article provides instructions to add a cloud sync task, configure environment variables, run an unscheduled sync task, create a copy of a task with a reversed transfer mode, and troubleshoot common issues with some cloud storage providers."
weight: 10
tags:
- scalecloud
- scalebackup
---

{{< toc >}}

TrueNAS can send, receive, or synchronize data with a cloud storage provider. 
Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule. They are an effective method to back up data to a remote location.

{{< hint warning >}}
Using the cloud means data can go to a third-party commercial vendor not directly affiliated with iXsystems. You should fully understand vendor pricing policies and services before using them for cloud sync tasks.

iXsystems is not responsible for any charges incurred from using third-party vendors with the cloud sync feature.
{{< /hint >}}

TrueNAS supports major providers like Storj, Amazon S3, Google Cloud, and Microsoft Azure. It also supports many other vendors. To see the full list of supported vendors, go to **Credentials > Backup Credentials > Cloud Credentials** click **Add** and open the **Provider** dropdown list.

## Cloud Sync Task Requirements

* You must have all system [storage]({{< relref "/SCALE/SCALETutorials/Storage/Pools/_index.md" >}}) configured and ready to receive or send data.
* You must have a cloud storage provider account and location (like an Amazon S3 bucket).

You can create the cloud storage account credentials using **Credentials > Backup Credentials > Cloud Credentials** before creating the sync task or add it at the time you create the cloud sync task on **Data Protection > Cloud Sync Task > Add Cloud Sync Task**. See the [Cloud Credentials]({{< relref "/SCALE/SCALETutorials/Credentials/BackupCredentials/AddCloudCredentials.md" >}}) article for instructions on adding a backup credential using cloud credentials.

## Creating a Cloud Sync Task

{{< include file="/content/_includes/CreateCloudSyncTaskScale.md" type="page" >}}

### Troubleshooting Transfer Mode Problems
**Sync** keeps all the files identical between the two storage locations. 
If the sync encounters an error, it does not delete files in the destination.

#### Dropbox Issues
One common error occurs when the [Dropbox copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.

#### BackBlaze B2 Issues
Syncing to a Backblaze B2 bucket does not delete files from the bucket, even when you deleted those files locally. 
Instead, files are tagged with a version number or moved to a hidden state. 
To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).

{{< hint info >}}
A directory, deleted in BackBlaze B2 and notated with an asterisk, do not display in the SCALE UI. These folders are essentially empty directories and Backblaze API restricts these so they do not display.
{{< /hint >}}
#### Amazon S3 Issues
Sync cannot delete files stored in Amazon S3 Glacier or S3 Glacier Deep Archive. 
First restore these files by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).

### Using Scripting and Environment Variables

Advanced users can write scripts that run immediately before or after the cloud sync task. 
Using either the **Add Cloud Sync Task** or **Edit Cloud Sync Task** screens, enter environment variables to either the **Pre-script** or **Post-script** fields.
The **Post-script** field only runs when the cloud sync task succeeds. 
{{< expand "Click here for Environment Variables" "v" >}}

#### General Environment Variables

* `CLOUD_SYNC_ID`
* `CLOUD_SYNC_DESCRIPTION`
* `CLOUD_SYNC_DIRECTION`
* `CLOUD_SYNC_TRANSFER_MODE`
* `CLOUD_SYNC_ENCRYPTION`
* `CLOUD_SYNC_FILENAME_ENCRYPTION`
* `CLOUD_SYNC_ENCRYPTION_PASSWORD`
* `CLOUD_SYNC_ENCRYPTION_SALT`
* `CLOUD_SYNC_SNAPSHOT`

#### Provider-Specific Variables
There also are provider-specific variables like CLOUD_SYNC_CLIENT_ID or CLOUD_SYNC_TOKEN or CLOUD_SYNC_CHUNK_SIZE.

Remote storage settings:
* `CLOUD_SYNC_BUCKET`
* `CLOUD_SYNC_FOLDER`

Local storage settings:
* `CLOUD_SYNC_PATH`
{{< /expand >}}

## Running an Unscheduled Cloud Sync Task 

Saved tasks activate according to their schedule or you can use the **Run Now** option the **Cloud Sync Task** widget.  
To run the sync task before the saved schedule for the task, click on the cloud sync task to open the edit configuration screen for that task. 
If not already cleared, select **Enable** below the **Schedule** field to clear the checkbox, and then click **Save**.

On the **Cloud Sync Task** widget, click the **Run Now** <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> button.

An in-progress cloud sync must finish before another can begin. 
Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running task, or its most recent run, click **State**.

## Using Cloud Sync Task Restore

To create a new cloud sync task that uses the same options but reverses the data transfer, select <i class="material-icons" aria-hidden="true" title="Restore">history</i> for an existing cloud sync on the **Data Protection** page. The **Restore Cloud Sync Task** window opens.

![RestoreCloudSyncTaskWindow](/images/SCALE/22.02/RestoreCloudSyncTaskWindow.png "Cloud Sync Restore")

Enter a name in **Description** for this reversed task.

Select the **Transfer Mode** and then define the path for a storage location on TrueNAS scale for the transferred data.

Click **Restore**.

TrueNAS saves the restored cloud sync as another entry in **Data protection > Cloud Sync Tasks**.

If you set the restore destination to the source dataset, TrueNAS may alter ownership of the restored files to **root**. If root did not create the original files and you need them to have a different owner, you can recursively reset their ACL permissions through the GUI or run `chown` from the CLI.

{{< taglist tag="scalecloud" limit="10" >}}
