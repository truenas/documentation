---
title: "Managing TrueCloud Backup Tasks"
description: "Provides instructions on setting up a TrueCloud backup task and configuring a Storj TrueNAS account to work with TrueNAS."
weight: 5
tags:
- TrueCloud
- cloud
- backup
keywords:
- nas cloud storage
- data protection
- data backup and recovery
---

TrueNAS can send, receive, or synchronize data with the cloud storage providers available in TrueNAS.

TrueCloud backup tasks allow for single-time transfers or recurring transfers on a schedule.
They are an effective method to back up data to a remote location.

This article provides instructions on configuring a TrueCloud backup task using Storj and covers setting up both the Storj TrueNAS account and TrueNAS credential.

{{< hint type=important >}}
To take advantage of the lower-cost benefits of the TrueCloud backup service, you must create your Storj TrueNAS account using the link provided on the **Add Cloud Credentials** screen.

You must also create and authorize the storage buckets on Storj for TrueNAS to use.

TrueNAS is not responsible for charges incurred using a third-party vendor with the TrueCloud backup feature.
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

2. Enter or browse to select the local **Source Path** to the datasets or a single non-Container managed zvol that you want sent to the cloud for backup.
   Click the arrow to the left of the name to expand it, then click on the name to select it.

4. Select the Storj credential on the **Credentials** dropdown list.
   You can select **Add New** to create the Storj credential if you skipped the instructions above.

5. Select the Storj bucket to use from the **Bucket** dropdown list.

   If you have not previously created a TrueNAS compatible Storj bucket, select **Add New** and follow the procedure in [Creating a TrueNAS Storj Bucket](#creating-a-truenas-storj-bucket).

   Click the arrow icon for the **Folder** field to expand the dropdown list and select the desired folder in the Storj bucket, or enter a folder path.
   Enter `/name`, where *name* is a folder that does not exist, to create a new folder in the Storj bucket.

6. Enter a name for the task under **Task Settings**.
  
7. Enter the number of snapshot copies to retain in **Keep Last**.

8. Enter a password for the backup repository.
   Record this password in a secure location.
   You need the password to recreate the task using the same bucket/folder, such as in a new TrueNAS install or system, or to restore data from the existing snapshots in another TrueNAS system.

9. Set the task schedule for when to run this task.

10. Click **Save**.

{{< hint type=important >}}
Restic uses the password you created for the backup repository to encrypt and manage the repository. Without this password, you cannot access or restore backup data, and restic cannot decrypt the repository.

TrueNAS only stores the password as part of the TrueCloud backup task. It passes the password to restic using the environment variable RESTIC_PASSWORD each time you access the repository. TrueNAS does this so that restic can further manage and encrypt the repository.
{{< /hint >}}

TrueNAS adds the task to the **TrueCloud Backup Tasks** widget with the state **N/A** until the task runs on schedule.
To test the task, click **<i class="fa fa-play" aria-hidden="true" title="Run Job"></i> Run Job** to start the task apart from the scheduled time.

When you finish creating a task, the **Task Details** for it become available on the right side of the screen.

The task status changes to **SUCCESS** when it runs successfully. 

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudTaskSuccess.png" alt="TrueCloud Backup Task Complete" id="TrueCloud Backup Task Complete" >}}

### Using Advanced Options

**Advanced Options** and **Advanced Remote Options** contain additional settings for advanced users.

{{< trueimage src="/images/SCALE/DataProtection/AddTrueCloudTaskAdvancedOptions.png" alt="Add TrueCloud Backup Task Advanced Options" id="Add TrueCloud Backup Task Advanced Options" >}}

<!-- <to be re-added at a later date> To take a snapshot before transferring data to Storj, select **Take Snapshot**.
This option is not available for datasets with child datasets.
-->

Advanced users can write scripts that run immediately before or after the TrueCloud backup task.
Enter environment variables in either the **Pre-script** or **Post-script** fields.
The **Post-script** field only runs when the TrueCloud backup task succeeds.
See [TrueCloud Backup Tasks Screens]({{< ref "truecloudbackuptasksscreen/#advanced-options-settings" >}}) for information on available environment variables.

Use **Exclude** to enter a list of files and directories to exclude from sync.
Press <kbd>Enter</kbd> to separate entries.
See [TrueCloud Backup Tasks Screens]({{< ref "truecloudbackuptasksscreen/#advanced-options-settings" >}}) for syntax examples.

Use **Transfer Settings** to prevent excess resource consumption by setting the pack size and read concurrency.

## Managing TrueCloud Tasks

To edit an existing TrueCloud backup task, click **<i class="fa fa-pencil" aria-hidden="true" title="Edit"></i> Edit** to open the **Edit TrueCloud Backup Task** screen. After making changes, click **Save**.

To run a scheduled task before the defined time, click **<i class="fa fa-play" aria-hidden="true" title="Run Job"></i> Run Job** to start the task immediately.

To delete a task, click **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** for the task to delete. 

See [TrueCloud Backup Tasks Screens]({{< ref "truecloudbackuptasksscreen/#advanced-options-settings" >}}) for more information on TrueCloud Backup Task screens.

### Restoring Data from TrueCloud Snapshots
To restore data from a TrueCloud backup, locate an existing snapshot on the **Snapshots widget**.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudSnapshots.png" alt="Snapshots Widget" id="Snapshots Widget" >}}

Click **<i class="material-icons" aria-hidden="true" title="Restore">history</i> Restore** to open the **Restore from Snapshot** screen.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudRestore.png" alt="Restore from Snapshot" id="Restore from Snapshot" >}}

Select **Include Everything** to restore all data, or exclude some data using **Include from subfolder**, **Select paths to exclude**, or **Exclude by pattern**.
See [TrueCloud Backup Tasks Screens]({{< ref "TrueCloudBackupTasksScreen" >}}) for more information.

Set the local **Target** to the target dataset of the backup task.
Click **Save** to restore data from the snapshot.

### Removing TrueCloud Snapshots

To delete an existing snapshot, locate it on the **Snapshots widget**.
Click **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** to delete the snapshot.
A **Delete Snapshot** dialog opens.

{{< trueimage src="/images/SCALE/DataProtection/TrueCloudDeleteSnapshot.png" alt="Delete Snapshot" id="Delete Snapshot" >}}

Click **Confirm** and then **Delete** to start the job.
