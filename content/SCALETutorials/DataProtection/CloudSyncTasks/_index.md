---
title: "Cloud Sync Tasks"
description: "Tutorials for configuring and managing data backups to from TrueNAS to various 3rd party Cloud Service Providers."
geekdocCollapseSection: true
weight: 20
tags:
 - cloud
related: false
keywords:
- enterprise data storage solution
- nas cloud storage
- data protection
- data backup and recovery
---

This section has tutorials for configuring and managing data backups to from TrueNAS to various 3rd party cloud service providers.
This article provides instructions on adding a cloud sync task, configuring environment variables, running an unscheduled sync task, creating a copy of a task with a reversed transfer mode, and troubleshooting common issues with some cloud storage providers.

TrueNAS can send, receive, or synchronize data with a cloud storage provider.
Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule. They are an effective method to back up data to a remote location.

{{< include file="/static/includes/CloudServiceProvidersSCALE.md" >}}

{{< hint type=important >}}
Using the cloud means data can go to a third-party commercial vendor not directly affiliated with TrueNAS.
You should fully understand vendor pricing policies and services before using them for cloud sync tasks.

TrueNAS is not responsible for any charges incurred using third-party vendors with the cloud sync feature.
{{< /hint >}}

## Cloud Sync Task Requirements
You must have:
* All system [storage]({{< ref "/SCALETutorials/Storage/" >}}) configured and ready to receive or send data.
A cloud storage provider account and location (like an Amazon S3 bucket).

You can create cloud storage account credentials using **Credentials > Backup Credentials > Cloud Credentials** before adding the sync task or add it when configuring the cloud sync task using **Add** on the **Data Protection > Cloud Sync Task** widget to open the **Cloudsync Task Wizard**.
See the [Cloud Credentials]({{< ref "/SCALETutorials/Credentials/BackupCredentials/AddCloudCredentials" >}}) article for instructions on adding a backup cloud credential.

## Creating a Cloud Sync Task

{{< include file="/static/includes/CreateCloudSyncTaskScale.md" >}}

### Encrypting Cloud Sync Tasks
The option to encrypt data transferred to or from a cloud storage provider is available in the **Advanced Options** settings.

Select **Remote Encryption** to use [rclone crypt](https://rclone.org/crypt/) encryption during pull and push transfers.
With **Pull** selected as the **Transfer Direction**, the **Remote Encryption** decrypts files stored on the remote system before the transfer.
This requires entering the same password to encrypt data in both **Encryption Password** and **Encryption Salt**.

With **Push** selected as the **Transfer Direction**, data is encrypted before it is transferred and stored on the remote system.
This also requires entering the same password to encrypt data in both **Encryption Password** and **Encryption Salt**.

{{< include file="/static/includes/FilenameEncryption.md" >}}

When selecting **Filename Encryption** transfers encrypt and decrypt file names with the rclone [Standard file name encryption mode](https://rclone.org/crypt//#file-name-encryption-modes).
The original directory structure of the files is preserved.
When disabled, encryption does not hide file names or directory structure, file names can be 246 characters long, use sub-paths, and copy single files.
When enabled, file names are encrypted, file names are limited to 143 characters, the directory structure is visible, and files with identical names have identical uploaded names.
File names can use sub-paths, single-copy files, and shortcuts to shorten the directory recursion.

### Troubleshooting Transfer Mode Problems
**Sync** keeps all the files identical between the two storage locations.
If the sync encounters an error, it does not delete files in the destination.

#### Dropbox Issues
One common error occurs when the [Dropbox copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.

#### BackBlaze B2 Issues
Syncing to a Backblaze B2 bucket does not delete files from the bucket, even after deleting those files locally.
Instead, files are tagged with a version number or moved to a hidden state.
To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).

{{< hint type=note >}}
A directory, deleted in BackBlaze B2 and notated with an asterisk, do not display in the TrueNAS UI.
These folders are essentially empty directories and Backblaze API restricts them so they do not display.
{{< /hint >}}
#### Amazon S3 Issues
Sync cannot delete files stored in Amazon S3 Glacier or S3 Glacier Deep Archive.
First restore these files by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).

### Using Scripting and Environment Variables
Advanced users can write scripts that run immediately before or after the cloud sync task.

Use either the **Advanced Options** screen accessed from the **Cloudsync Task Wizard** or **Edit Cloud Sync Task** screen, scroll down to the **Advanced Options** to locate and then enter environment variables in either the **Pre-script** or **Post-script** fields.
The **Post-script** field only runs when the cloud sync task succeeds.

## Running an Unscheduled Cloud Sync Task
Saved tasks activate based on the schedule set for the task.
Click **Run Now** on the **Cloud Sync Task** widget to run the sync task before the saved scheduled time. 
You can also expand the task on the **Cloud Sync Tasks** screen and click **Run Now** on the task details screen.

An in-progress cloud sync must finish before another can begin.
Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running task, or its most recent run, click on the **State** oval.

## Using Cloud Sync Task Restore
To create a new cloud sync task that uses the same options but reverses the data transfer, select <i class="material-icons" aria-hidden="true" title="Restore">history</i> for an existing cloud sync on the **Data Protection** page.
The **Restore Cloud Sync Task** window opens.

{{< trueimage src="/images/SCALE/DataProtection/RestoreCloudSyncTaskWindow.png" alt="Cloud Sync Restore" id="Cloud Sync Restore" >}}

Enter a name in **Description** for this reversed task.

Select the **Transfer Mode** and then define the path for a storage location on TrueNAS for the transferred data.

Click **Restore**.

TrueNAS saves the restored cloud sync as another entry in **Data protection > Cloud Sync Tasks**.

If you set the restore destination to the source dataset, TrueNAS may alter ownership of the restored files to **root**.
If root did not create the original files and you need them to have a different owner, you can recursively reset their ACL permissions through the GUI.

<div class="noprint">

## Cloud Sync Tasks Contents

{{< children depth="2" description="true" >}}

</div>
