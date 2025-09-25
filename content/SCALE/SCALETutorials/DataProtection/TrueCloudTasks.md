---
title: "Managing TrueCloud Backup Tasks"
description: "Provides instructions on setting up a TrueCloud backup task and configuring a Storj iX account to work with TrueNAS."
weight: 5
tags:
- TrueCloud
- cloud
- backup
keywords:
- nas cloud storage
- data protection
- data backup and recovery
aliases: 
- cloudsynctasks/addstorjcloudsynctask
---

TrueNAS can send, receive, or synchronize data with the cloud storage providers available in TrueNAS.

TrueCloud backup tasks allow for single-time transfers or recurring transfers on a schedule.
They are an effective method to back up data to a remote location.

This article provides instructions on configuring a TrueCloud backup task using Storj and covers setting up the Storj iX account and TrueNAS credential.

{{< hint type=important >}}
To take advantage of the lower-cost benefits of the TrueCloud backup service, you must create your Storj iX account using the link provided on the **Add Cloud Credentials** screen.

You must also create and authorize the storage buckets on Storj for TrueNAS to use.

iXsystems is not responsible for charges incurred using a third-party vendor with the TrueCloud backup feature.
{{< /hint >}}

## TrueCloud Backup Task Requirements

You must configure all system storage (pool and datasets or zvols) and have them ready to receive or send data.

## Creating a TrueCloud Backup Task

To create a TrueCloud Backup task:

1. Create the TrueNAS [Storj cloud credential](#adding-storj-cloud-credentials).

   Adding the Storj cloud credential in TrueNAS includes following the link to create the Storj iX account, creating a new bucket, and obtaining the S3 authentication credentials needed to complete the process in TrueNAS.

2. Create the [TrueCloud Backup task](#setting-up-the-truecloud-backup-task) for one bucket.

### Adding Storj Cloud Credentials

{{< include file="/static/includes/AddStorjCloudCredential.md" >}}

After completing this configuration form, you can set up the [TrueCloud Backup task](#setting-up-the-truecloud-backup-task).

#### Setting up S3 Access

{{< include file="/static/includes/SetUpStorjiXAccountS3Access.md" >}}

#### Creating a TrueNAS Storj Bucket

{{< include file="/static/includes/StorjBucket.md" >}}

### Adding a Storj TrueCloud Backup Task

To add the TrueCloud backup task, go to **Data Protection > TrueCloud Backup Tasks**:

1. Click **Add** to open the **Add TrueCloud Backup Task** screen.

   {{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskBasicOptions.png" alt="Add TrueCloud Backup Task" id="Add TrueCloud Backup Task" >}}

2. Enter or browse to select the local **Source Path** to the directories or files you want sent to the cloud for backup.
   Click the arrow to the left of the name to expand it, then click on the name to select it.

   Optionally, enter or browse to select a **Cache Path** to store cache files. This can improve backup performance for users with massive datasets and large numbers of files.

3. Select the Storj credential on the **Credentials** dropdown list.
   You can select **Add New** to create the Storj credential if you skipped the instructions above.

4. Select the Storj bucket from the **Bucket** dropdown list.

   If you have not previously created a TrueNAS compatible Storj bucket, select **Add New** and follow the procedure in [Creating a TrueNAS Storj Bucket](#creating-a-truenas-storj-bucket).

   Click the arrow icon for the **Folder** field to expand the dropdown list and select the desired folder in the Storj bucket, or enter a folder path.
   Enter `/name`, where *name* is a folder that does not exist, to create a new folder in the Storj bucket.

5. Enter a name for the task under **Task Settings**.
  
6. Enter the number of snapshot copies to retain in **Keep Last**.

7. (Optional) Enter a **Rate Limit** value in KiB/s (kibibytes per second) to limit the backup transfer rate. This is a static rate limit that applies throughout the entire backup process. Leave empty for no rate limit.

8. Enter a password for the backup repository.
   Record this password in a secure location.
   You need the password to recreate the task using the same bucket/folder, such as in a new TrueNAS install or system, or to restore data from the existing snapshots in another TrueNAS system.

9. Set the task schedule for when to run this task.

10. Click **Save**.

TrueNAS adds the task to the **TrueCloud Backup Tasks** widget with the state **N/A** until the task runs on schedule.
To test the task, click the vertical ellipses <span class="material-icons">more_vert</span> on the task and select **<i class="fa fa-play" aria-hidden="true" title="Run Job"></i> Run Job** to start the task apart from the scheduled time.

The task status changes to **SUCCESS** when complete.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudTaskSuccess.png" alt="TrueCloud Backup Task Complete" id="TrueCloud Backup Task Complete" >}}

### Using Advanced Options

**Advanced Options** and **Advanced Remote Options** contain additional settings for advanced users.

{{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskAdvancedOptions.png" alt="Add TrueCloud Backup Task Advanced Options" id="Add TrueCloud Backup Task Advanced Options" >}}

Select **Use Snapshot** to create and use a snapshot to back up or synchronize the operation between TrueNAS and the TrueCloud backup solution. This snapshot is automatically removed after the operation completes.

Advanced users can write scripts that run immediately before or after the TrueCloud backup task.
Enter environment variables in either the **Pre-script** or **Post-script** fields.
The **Post-script** field only runs when the TrueCloud backup task succeeds.
See [TrueCloud Backup Tasks Screens]({{< ref "truecloudbackuptasksscreen/#advanced-options-settings" >}}) for information on available environment variables.

Use **Exclude** to enter a list of files and directories to exclude from sync.
Press <kbd>Enter</kbd> to separate entries.
See [TrueCloud Backup Tasks Screens]({{< ref "truecloudbackuptasksscreen/#advanced-options-settings" >}}) for syntax examples.

Use **Transfer Settings** to prevent excess resource consumption by setting the pack size and read concurrency.

## Managing TrueCloud Tasks

To edit an existing TrueCloud backup task, click the vertical ellipses <span class="material-icons">more_vert</span> on the task and select **<i class="fa fa-pencil" aria-hidden="true" title="Edit"></i> Edit** to open the **Edit TrueCloud Backup Task** screen. After making changes, click **Save**.

To run a scheduled task before the defined time, click the vertical ellipses <span class="material-icons">more_vert</span> on the task and select **<i class="fa fa-play" aria-hidden="true" title="Run Job"></i> Run Job** to start the task immediately.

To delete a task, click the vertical ellipses <span class="material-icons">more_vert</span> on the task and select **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** for the task to delete. 

See [TrueCloud Backup Tasks Screens]({{< ref "truecloudbackuptasksscreen/#advanced-options-settings" >}}) for more information on TrueCloud Backup Task screens.

### Restoring Data from TrueCloud Snapshots
To restore data from a TrueCloud backup, locate an existing snapshot on the **Snapshots widget**.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudSnapshots.png" alt="Snapshots Widget" id="Snapshots Widget" >}}

Click the vertical ellipses <span class="material-icons">more_vert</span> on the task and select **<i class="material-icons" aria-hidden="true" title="Restore">history</i> Restore** to open the **Restore from Snapshot** screen.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudRestore.png" alt="Restore from Snapshot" id="Restore from Snapshot" >}}

Select **Include Everything** to restore all data, or exclude some data using **Include from subfolder**, **Select paths to exclude**, or **Exclude by pattern**.
See [TrueCloud Backup Tasks Screens]({{< ref "TrueCloudBackupTasksScreen" >}}) for more information.

Set the local **Target** to the target dataset of the backup task.
Click **Save** to restore data from the snapshot.

### Removing TrueCloud Snapshots

To delete an existing snapshot, locate it on the **Snapshots widget**.
Click the vertical ellipses <span class="material-icons">more_vert</span> on the snapshot and select **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** to delete the snapshot.
A **Delete Snapshot** dialog opens.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudDeleteSnapshot.png" alt="Delete Snapshot" id="Delete Snapshot" >}}

Click **Confirm** and then **Delete** to start the job.
