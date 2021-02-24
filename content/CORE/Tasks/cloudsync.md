---
title: "Cloud Data Transfers"
description: "How to configure Cloud Credentials and Cloud Sync tasks to send or receive data from a Cloud Storage Provider."
tags: ["cloud storage"]
weight: 100
---

You can configure TrueNAS to send, receive, or synchronize data with a Cloud Storage provider.
Configuring a Cloud Sync task allows you to transfer data a single time or set up a recurring schedule to periodically transfer data.
This can be an effective method to back up your data to a remote location.

You should already have your [TrueNAS Storage](/CORE/Storage/) configured.
You will also need an account with the Cloud Storage provider and a storage location created with the provider, like an Amazon S3 bucket.
Major providers like Amazon S3, Google Cloud, and Microsoft Azure are supported, along with a variety of other vendors.
To see the full list of supported vendors, log in to the TrueNAS UI and go to *System > Cloud Credentials > Add* and open the *Provider* dropdown.

{{< hint warning >}}
Using the Cloud means that data can go to a third party commercial vendor not directly affiliated with iXsystems.
Please investigate and fully understand that vendor’s pricing policies and services before creating any Cloud Sync task.
iXsystems is not responsible for any charges incurred from the use of third party vendors with the Cloud Sync feature.
{{< /hint >}}

To start using Cloud storage, save cloud storage provider credentials on the system and create a new *Cloud Sync* task.

## Saving a Cloud Storage Credential

Transferring data from TrueNAS to the Cloud requires saving Cloud Storage Provider credentials on the system.
To maximize security, these credentials are encrypted when saved.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable *Export Password Secret Seed* when generating that configuration backup.
Remember to keep any downloaded TrueNAS configuration files secure.

It is recommended to have another browser tab open and logged in to the Cloud Storage Provider account you intend to link to TrueNAS.
Some providers can require additional information that is generated on the storage provider account page.
For example, saving an Amazon S3 credential on TrueNAS could require logging in to the S3 account and generating an access key pair on the *Security Credentials > Access Keys* page.

To save cloud storage provider credentials, go to *System > Cloud Credentials* and click *Add*.

![System Cloud Credentials Add S3](/images/CORE/12.0/SystemCloudCredentialsAddS3.png "System Cloud Credentials Add S3")

Enter a name for the credential and choose a *Provider*.
The rest of the options change according to the chosen *Provider*.
Enter the required *Authentication* strings to enable saving the credential.

Some providers can automatically populate the required *Authentication* strings by logging in to the account.
To automatically configure the credential, click *Login to Provider* and entering your account username and password.

![System Cloud Credentials OAuth Login](/images/CORE/12.0/SystemCloudCredentialsOAuthLogin.png "System Cloud Credentials OAuth Login")

It is recommended to verify the credential before saving it.

## Creating a Cloud Sync Task

Now that the required Cloud Credentials are saved, go to *Tasks > Cloud Sync Tasks* and click *Add*.

![Tasks Cloud Sync Add](/images/CORE/12.0/TasksCloudSyncAdd.png "Tasks Cloud Sync Add")

Give the task a memorable name and select a cloud credential that is saved on the system.
TrueNAS will attempt to connect to the Cloud Storage Provider and show the available storage locations.
You can configure the task to push to or pull from the cloud storage provider.

### File Transfer Behavior

There are three options for how files are transfered between systems:

*Sync* keeps all the files identical between the two storage locations.
If the sync encounters an error, files are not deleted in the destination.
This includes a common error when the [Dropbox copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.

Note that syncing to a Backblaze B2 bucket does not delete files from the bucket, even when those files have been deleted locally.
Instead, files are tagged with a version number or moved to a hidden state.
To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).

Files stored in Amazon S3 Glacier or S3 Glacier Deep Archive cannot be deleted by a sync.
These files must first be restored by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).

*Copy* duplicates each source file into the destination, <ins>overwriting</ins> any files in the destination that have the same name as the source.
This is the least potentially destructive option.

*Move* transfers the files from the source to the destination and <ins>deletes</ins> the original source files.
Files with the same names on the destination are overwritten.

### Scheduling the Task

To automate the task to periodically run, define a *Schedule* and make sure *Enabled* is set.
It's recommended to schedule the task at times when the task can run quickly and not be interrupted.
The advanced scheduler shows a preview of your currently chosen schedule and can accept standard [cron input strings](https://www.freebsd.org/cgi/man.cgi?query=crontab&sektion=5) for the *Minutes*, *Hours*, and *Days*.
Unsetting *Enabled* only keeps the task from automatically running.
You can still save the cloud sync task and run it manually.

### Advanced Options

There are a variety of advanced options that allow you to fine-tune the cloud sync.
These include:

* including symlinked files in the transfer
* a list of files to **Exclude** from the transfer
* defining transfer limitations to prevent going over any bandwidth caps
* adding encryption to the data that will be transferred
  
#### Scripting and Environment Variables

Advanced users can write scripts that run immediately *before* or *after* the Cloud Sync task.
The **Post-script** field is only run when the Cloud Sync task successfully completes.
You can pass a variety of task environment variables into the **Pre-** and **Post-** script fields:

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

Advanced options are not required for every cloud sync and are configured according to your specific security and data needs.

### Testing Settings

It is recommended to test your settings before saving the cloud sync task by clicking *Dry Run*.
A connection to the Cloud Storage Provider is established and a file transfer is simulated.
No data is actually sent or received.
A dialog shows the test status and allows downloading the task logs.

![Tasks Cloud sync Add Google drive Dry run](/images/CORE/12.0/TasksCloudsyncAddGoogledriveDryrun.png "Tasks Cloud sync Add Google drive Dry run")

## Cloud Sync Behavior

Saved tasks are activated according to their schedule or by clicking *Run Now*.
An in-progress cloud sync must finish before another can begin.
Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running or the most recent run of a task, click the task status.

## Cloud Sync Restore

To quickly create a new Cloud Sync that uses the same options but reverses the data transfer, expand and existing Cloud Sync and click *Restore*.

![Tasks Cloud Sync Restore](/images/CORE/12.0/TasksCloudSyncRestore.png "Tasks Cloud Sync Restore")

The restored cloud sync is saved as another entry in *Tasks > Cloud Sync Tasks*.
