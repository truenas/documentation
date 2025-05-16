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

TrueNAS provides several options to set up a data storage backup method, including using a cloud sync provider and a scheduled task or configuring a replication task.

## Backing Up the System Configuration
After setting up TrueNAS, first, back up your system configuration by downloading the system configuration file.

{{< include file="/static/includes/DownloadSystemConfigFileSCALE.md" >}}

### Downloading the Initial System Debug File

After saving the system configuration, save an initial system debug file by going to **System > Advanced Settings** and clicking **Save Debug**. After the download completes, save this initial debug file with your system configuration file.

Why download the initial system debug file?
Downloading and storing the initial system debug after completing the system configuration is a recommended best practice to have a point of reference for your system if a problem arises. Save a debug file after a major system upgrade or reconfiguration to provide Support or Engineering if requested.

## Create a Boot Environment

After installing and completing your SCALE system configuration, [create a boot environment]({{< ref "ManageBootEnvironSCALE" >}}) to use as a restore point.

If you lose access to the TrueNAS UI, you can establish an SSH session and restore it from the boot environment.
You can clone the boot environment listed after the **initial-install** environment and rename the clone to something you recognize, such as the release number with date and time.

## Backing Up TrueNAS Storage Data

TrueNAS has several options that allow you to back up data:

* [TrueCloud backup tasks](#using-truecloud-backup-or-cloud-sync)
* [Cloud sync tasks]({{< ref "/ScaleTutorials/DataProtection/CloudSyncTasks/" >}})
* [Replication tasks](#using-replication)
* [Rsync tasks]({{< ref "/SCALETutorials/DataProtection/RsyncTasksSCALE" >}})

TrueCloud backup and cloud sync tasks require setting up a cloud service provider account and adding the credentials in TrueNAS before configuring and scheduling the tasks.

Replication requires setting up SSH credentials before configuring and scheduling the task. Rsync tasks can be configured with SSH credentials or set to use a module.

### Using TrueCloud Backup or Cloud Sync

{{< hint type=note title="3rd Party Account Required" >}}
Cloud sync requires an account with a cloud storage provider and a storage location created with that provider, like an Amazon S3 bucket.
SCALE supports major providers like Storj, Amazon S3, Google Cloud, Box, and Microsoft Azure, along with a variety of other vendors.
These providers can charge fees for data transfer and storage, so please review the policies of your cloud storage provider before transferring your data.
{{< /hint >}}

Cloud sync and TrueCloud backup tasks can be configured to send, receive, or synchronize data with a cloud storage provider.

The simplest way to set up a TrueCloud backup task is using a Storj iX account.
See [Managing TrueCloud Backup Tasks]({{< ref "TrueCloudTasks" >}}) for a full tutorial.

See [Adding Cloud Credentials]({{< ref "/scaletutorials/credentials/backupcredentials/addcloudcredentials" >}}) for information on connecting TrueNAS SCALE to other cloud storage providers.

### Using Replication
Replication takes a moment-in-time snapshot of data and then copies that snapshot to another location.
Snapshot technology typically uses less storage than full file backups and has more management and snapshot storage options.
{{< expand "Setting Up a Simple Replication Task" "v" >}}
To create a simple replication task with the TrueNAS replication wizard:

Replication needs an existing [periodic snapshot task]({{< ref "PeriodicSnapshotTasksSCALE" >}})** to run before the replication task runs or the replication task fails.
You can define a periodic snapshot before manually configuring the replication task, or let the system create the snapshot task by selecting the replication wizard **Replicate Custom Snapshots** option. When using the wizard, TrueNAS automatically creates the periodic snapshot task and then runs the replication task.

1. Create a periodic snapshot task using the replication wizard **Replicate Custom Snapshots** replication option.
 If scheduling a task, TrueNAS creates the periodic snapshot task when it runs the replication task according to the scheduled time.

2. Create the replication task.

 Go to **Data Protection**, and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard** configuration screen.

 Select the **Source Location** and **Destination Location** using the dropdown list options.
You can back up your data on the same or a different system.
 If selecting **A different system**, you must have an SSH connection to that system. Have your destination and source information ready.

Set the **Source** and **Destination** paths, either enter the full path to the data you want to back up or click on the caret <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt** and at the pool and dataset levels to expand the options. Click on the dataset or directory to narrow the backup down to that level.

 The task name populates from the values in **Source** and **Destination**.

 Select **Replicate Custom Snapshots**.

 Click **Next**.

3. Define when to run this task.

 Select the radio button for **Run On a Schedule** and select the schedule you want to use. Select **Run Once** to run the task manually.
When using this option, you must have defined a periodic snapshot task. If running on a schedule, you do not need to pre-defined a snapshot task.

 Select the radio button to specify the destination snapshot lifetime.

4. Click **START REPLICATION**. The task appears on the **Replication Tasks** widget with the status **PENDING**.
{{< /expand >}}

You can monitor created backup tasks from the **Dashboard** widget.
