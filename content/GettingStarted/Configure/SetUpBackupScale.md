---
title: "Backing Up TrueNAS"
description: "Provides general information and instructions on setting up data storage backups, saving the system configuration and initial system debug files, and creating a boot environment."
weight: 60
tags:
- backup
keywords:
- nas data storage solution
- nas storage software
- data backups
- snapshot technology
---

After configuring your TrueNAS storage and data sharing or any other function, service, or application, it is time to ensure an effective data backup.

You should also:

* [Download and save your system configuration file](#backing-up-the-system-configuration) to protect your system configuration information.
* [Download a debug file](#downloading-the-initial-system-debug-file).
* [Create a boot environment](#create-a-boot-environment) to use as a restore point.
* [Backup Stored Data](#backing-up-truenas-storage-data)

TrueNAS provides several options to set up a data storage backup method including using either a cloud sync provider and scheduled task, or configuring a replication task.

## Backing Up the System Configuration
The first thing you should do after you set up TrueNAS is back up your system configuration by downloading the system configuration file.

{{< include file="/static/includes/DownloadSystemConfigFileSCALE.md" >}}

### Downloading the Initial System Debug File

After saving the system configuration, go to **System > Advanced Settings** and click **Save Debug**. After the download completes, save this initial debug file with your system configuration file.

## Create a Boot Environment

After installing and completing your system configuration, [create a boot environment]({{< relref "ManageBootEnvironSCALE.md" >}}) to use as a restore point.

If an issue occurs where you lose access to the TrueNAS UI, you can establish an SSH session and restore it from the boot environment.
You can clone the boot environment listed after the **initial-install** environment and rename the clone to something you recognize, such as the release number with date and time.

## Backing Up TrueNAS Storage Data

TrueNAS has several options that allow you to back up data:

* [TrueCloud backup tasks](#using-truecloud-backup-or-cloud-sync)
* [Cloud sync tasks]({{< relref "/ScaleTutorials/DataProtection/CloudSyncTasks/_index.md" >}})
* [Replication tasks](#using-replication)
* [Rsync tasks]({{< relref "RsyncTasksSCALE.md" >}})

Both TrueCloud backup and cloud sync tasks require setting up a cloud service provider account and adding the credentials in TrueNAS before configuring and scheduling the tasks.

Replication requires setting up SSH credentials before configuring and scheduling the task. Rsync tasks can be configured with SSH credentials or set up to use a module.

### Using TrueCloud Backup or Cloud Sync

{{< hint type=note title="3rd Party Account Required" >}}
Cloud sync requires an account with a cloud storage provider and a storage location created with that provider, like an Amazon S3 bucket.
TrueNAS supports major providers like Storj, Amazon S3, Google Cloud, Box, and Microsoft Azure, along with a variety of other vendors.
These providers can charge fees for data transfer and storage, so please review the policies of your cloud storage provider before transferring your data.
{{< /hint >}}

Cloud sync and TrueCloud backup tasks can be configured to send, receive, or synchronize data with a cloud storage provider.

The simplest way to set up a TrueCloud backup task is using a Storj iX account.
See [Managing TrueCloud Backup Tasks]({{< relref "TrueCloudTasks.md" >}}) for a full tutorial.

See [Adding Cloud Credentials]({{< relref "/SCALETutorials/Credentials/BackupCredentials/AddCloudCredentials.md" >}}) for information on connecting TrueNAS to other cloud storage providers.

### Using Replication
Replication is the process of taking a moment-in-time snapshot of data and then copying that snapshot to another location.
Snapshot technology typically uses less storage than full file backups and has more management and snapshot storage options.
{{< expand "Setting Up a Simple Replication Task" "v" >}}
To create a simple replication task with the TrueNAS replication wizard:

Replication needs an existing [periodic snapshot task]({{< relref "PeriodicSnapshotTasksSCALE.md" >}})** to run before the replication task runs or the replication task fails.
You can define this before configuring the replication task or select the replication wizard **Replicate Custom Snapshots** option to have TrueNAS automatically create the task before running the replication task.

1. Create a periodic snapshot task using the or use the replication wizard **Replicate Custom Snapshots** replication option.
   If scheduling a task, TrueNAS creates the periodic snapshot task when it runs the replication task according to the scheduled time.

2. Create the replication task.

   Go to **Data Protection**, and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard** configuration screen.

   Select both the **Source Location** and **Destination Location** using the dropdown list options.
   You can back up your data on the same system or a different system.
   If you select **A different system** you must have an SSH connection. Have your destination and source information ready.

   Set the **Source** and **Destination** paths, either enter the full path to the data you want to back up or click on the caret <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt** and at the pool and dataset levels to expand the options. Click on the dataset or directory to narrow the backup down to that level.

   The task name populates from the values in **Source** and **Destination**.

   Select **Replicate Custom Snapshots**.

   Click **Next**.

3. Define when to run this task.

   Select the radio button for **Run On a Schedule** and select the schedule to use. Select **Run Once** to run the task manually.
   If using this option you must have a periodic snapshot task already defined. If running on a schedule, you do not need to pre-defined a snapshot task.

   Select the radio button to specify the destination snapshot lifetime.

4. Click **START REPLICATION**. The task appears on the **Replication Tasks** widget with the status **PENDING**.
{{< /expand >}}

You can monitor created backup tasks from the **Dashboard** widget.
