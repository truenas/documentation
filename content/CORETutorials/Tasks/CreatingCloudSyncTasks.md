---
title: "Creating Cloud Sync Tasks"
description: "Describes how to configure cloud storage backup tasks in TrueNAS CORE."
weight: 90
aliases:
  - /core/system/cloudcredentials
  - /core/system/cloudsynctasks
  - /core/tasks/cloudsynctasks
tags:
- cloud
- databackup
---

Cloud sync tasks let TrueNAS integrate with a Cloud Storage provider for additional backup storage.
Cloud Sync tasks allow for single time transfers or recurring transfers on a schedule, and are an effective method to back up data to a remote location.

{{< include file="/static/includes/CloudServiceProvidersCORE.md" >}}

{{< hint type=important >}}
Using the Cloud means that data can go to a third party commercial vendor not directly affiliated with iXsystems.
Please investigate and fully understand vendor pricing policies and services before creating any Cloud Sync task.
iXsystems is not responsible for any charges incurred from the use of third party vendors with the Cloud Sync feature.
{{< /hint >}}

## Create a Cloud Storage Credential

Transferring data from TrueNAS to the Cloud requires saving Cloud Storage Provider credentials on the system.

To maximize security, TrueNAS encrypts credentials after saving.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable **Export Password Secret Seed** when generating that [configuration backup]({{< relref "/CORE/CORETutorials/SystemConfiguration/UsingConfigurationBackups.md" >}}).
Remember to protect any downloaded TrueNAS configuration files.

Go to **System > Cloud Credentials** and click **ADD**.

![SystemCloudCredentialsAddS3](/images/CORE/System/SystemCloudCredentialsAddS3.png "Adding new Cloud Credential: S3")

Enter a credential **Name** and choose a **Provider**.
The rest of the options vary by **Provider**.

Enter the required **Authentication** strings to enable saving the credential.

See [Cloud Credentials]({{< relref "/core/uireference/system/cloudcredentials.md" >}}) for provider-specific fields and settings.

### Automatic Authentication

Some providers can automatically populate the required **Authentication** strings by logging in to the account.
To automatically configure the credential, click **Login to Provider** and entering your account username and password.

![SystemCloudCredentialsOAuthLogin](/images/CORE/System/SystemCloudCredentialsOAuthLogin.png "Cloud Provider OAuth Login")

We recommend verifying the credential before saving it.

## Create a Cloud Sync Task

{{< expand "Requirements" "v" >}}
* All system [Storage]({{< relref "CORE/CORETutorials/Storage/_index.md" >}}) configured and ready to receive or send data.
* A Cloud Storage provider account and a cloud storage location (like an Amazon S3 bucket).
* Cloud Storage account credentials must be saved in **System > Cloud Credentials**.
{{< /expand >}}

Go to **Tasks > Cloud Sync Tasks** and click **ADD**.

![TasksCloudSyncAdd](/images/CORE/Tasks/TasksCloudSyncAdd.png "Creating a Cloud Sync Task")

Give the task a **Description** and select a cloud credential.
TrueNAS connects to the chosen Cloud Storage Provider and shows the available storage locations.

Decide if data is transferring to (**PUSH**) or from (**PULL**) the Cloud Storage location (**Remote**).

Choose a **Transfer Mode**:

**SYNC** keeps all the files identical between the two storage locations. If a sync encounters an error, the destination does not delete the files.

{{< hint type=note >}}
Syncing to a Backblaze B2 bucket does not delete files from the bucket, even when you delete those files locally.
Instead, Backblaze tags files with a version number or moves them to a hidden state.
To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).
{{< /hint >}}

**COPY** duplicates each source file into the destination, overwriting any destination files with the same name as the source.
Copying is the least potentially destructive option.

**MOVE** transfers the files from the source to the destination and deletes the original source files.
It also overwrites files with the same names on the destination.

Next, select a **Schedule** from the drop-down, or unset **Enable** to make the task available without running on a schedule.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/AdvancedScheduler.md" >}}
{{< /expand >}}

{{< expand "Advanced Options" "v" >}}
### Scripting and Environment Variables

Advanced users can write scripts that run immediately before or after the Cloud Sync task.
The **Post-script** field runs when the Cloud Sync task successfully completes.
You can pass a variety of task environment variables into the **Pre-script** and **Post-script** fields:

* CLOUD_SYNC_ID
* CLOUD_SYNC_DESCRIPTION
* CLOUD_SYNC_DIRECTION
* CLOUD_SYNC_TRANSFER_MODE
* CLOUD_SYNC_ENCRYPTION
* CLOUD_SYNC_FILENAME_ENCRYPTION
* CLOUD_SYNC_ENCRYPTION_PASSWORD
* CLOUD_SYNC_ENCRYPTION_SALT
* CLOUD_SYNC_SNAPSHOT

There also are provider-specific variables like CLOUD_SYNC_CLIENT_ID or CLOUD_SYNC_TOKEN or CLOUD_SYNC_CHUNK_SIZE.

Remote storage settings:
* CLOUD_SYNC_BUCKET
* CLOUD_SYNC_FOLDER

Local storage settings:
* CLOUD_SYNC_PATH
{{< /expand >}}

### Testing Settings

Test the settings before saving by clicking **DRY RUN**.
TrueNAS connects to the Cloud Storage Provider and simulates a file transfer without sending or receiving data.

![TasksCloudsyncAddGoogledriveDryrun](/images/CORE/Tasks/TasksCloudsyncAddGoogledriveDryrun.png "Example: Google Drive Test")

## Cloud Sync Behavior

Saved tasks activate based on their schedule, or when you click **RUN NOW**.
An in-progress cloud sync must finish before another can begin.
Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running task or a task most recent run, click the task status.

## Cloud Sync Restore

To quickly create a new cloud sync task that uses the same options but reverses the data transfer, expand (<i class="fa fa-chevron-right"></i>) on an existing task and click **RESTORE**.

![TasksCloudSyncRestore](/images/CORE/Tasks/TasksCloudSyncRestore.png "Cloud Sync Restore")

Give the new task a **Description** and define the path to a storage location for the transferred data.

TrueNAS saves the restored cloud sync task as another entry in **Tasks > Cloud Sync Tasks**.

If the restore destination dataset is the same as the original source dataset, the restored files might have their ownership altered to _root_. If  _root_ did not create the original files and they need a different owner, you can recursively reset ACL Permissions of the restored dataset through the GUI or by running `chown` from the CLI.
