---
title: "Backing Up TrueNAS"
description: "Provides general information and instructions on setting up data storage backup solutions, saving the system configuration and initial system debug files, and creating a boot environment."
weight: 60
aliases:
 - /scale/gettingstarted/install/setupbackupscale/
tags:
- backup
---

After configuring your TrueNAS storage and data sharing or any other function, service, or application, it is time to ensure effective back up of your data.

You should also:

* [Download and save your system configuration file](#backing-up-the-system-configuration) to protect your system configuration information.
* [Download a debug file](#downloading-the-initial-system-debug-file).
* [Create a boot environment](#create-a-boot-environment) to use as a restore point.

You should also set up a data storage backup method using either a cloud sync or replication task.

## Backing Up TrueNAS Storage Data

TrueNAS provides for data backup through cloud sync or replication.

### Using Cloud Sync for Data Backup

{{< hint type=note title="3rd Party Account Required" >}}
Cloud sync requires an account with a cloud storage provider and a storage location created with that provider, like an Amazon S3 bucket.
SCALE support major providers like Storj, Amazon S3, Google Cloud, Box, and Microsoft Azure, along with a variety of other vendors.
These providers can charge fees for data transfer and storage, so please review the polices of your cloud storage provider before transferring your data.
{{< /hint >}}

You can configure TrueNAS to send, receive, or synchronize data with a cloud storage provider.
The simplest way to set up a cloud sync task is using a free iX Storj account.

{{< expand "Cloud Sync Quickstart with a Free Storj Account" "v" >}}

1. Create an iX Storj account and link to TrueNAS.

   From the TrueNAS **Dashboard**, find the **Backup Tasks** widget and click **Cloud Sync to Storj or similar provider**.

   Open the **Credentials** dropdown and select **Add New**.

   The **Storj iX** provider is preselected.
   Click **Signup for account** to open a browser tab then register and activate a free iX-Storj Account.

   After the iX-Storj account is created, log in to the Storj portal, create a new bucket, and create new S3 access credentials ([details]({{< relref "AddStorjCloudSyncTask.md#adding-storj-cloud-credentials" >}})).
   When the new S3 Credentials are created, download the **Access Key** and **Secret Key** and paste each string into the TrueNAS **Access Key ID** and **Secret Access Key** fields, respectively.
   Click **Save**.

2. Define the backup targets and schedule.

   In the TrueNAS Cloud sync task wizard, review the fields in the **What and When** section ([details]({{< relref "AddStorjCloudSyncTask.md#setting-up-the-storj-cloud-sync-task" >}})).
   Select the created Storj **Bucket** before attempting to choose a **Folder**.

   There are several predefined **Schedules** to choose from, or select **Custom** to define your own.

   Click **Save**.
{{< /expand >}}

See [Adding Cloud Credentials]({{< relref "/scale/scaletutorials/credentials/backupcredentials/addcloudcredentials.md" >}}) for information on connecting TrueNAS SCALE to other cloud storage providers.

### Using Replication for Data Backup

Replication is the process of taking a moment-in-time snapshot of data and then copying that snapshot to another location.
Snapshots typically use less storage than full file backups and have more management options.
{{< expand "Click here for basic instructions" "v" >}}
To create a simple replication task with the TrueNAS replication wizard:

1. Create a periodic snapshot task using the **[Periodic Snapshot Task]({{< relref "PeriodicSnapshotTasksSCALE.md" >}})** or use the **Run Once** replication schedule option.
   If scheduling a task, SCALE creates the periodic snapshot task when it runs the replication task according to the scheduled time.

2. Create the replication task.

   Go to **Data Protection** and click **Add** on the **Replication Tasks** widget. The **Replication Task Wizard** opens on the **What and Where** configuration screen.
   Select both the **Source Location** and **Destination Location** using the dropdown list options.
   You can back up your data on the same system or a different system.
   If you select **A different system** you must have SSH connection. Have your destination and source information ready.

   Next enter the **Source** and **Destination** paths. To populate the field with the full path, you can either type the full path to the data you want to back up or click on the caret <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt** and at the pool and dataset levels to expand the options. Click on the dataset and/or the file if you want to narrow backup down to that level.

   The task name populates from the values in **Source** and **Destination**. Click **Next**.

3. Define when you want this task to occur.

   Select the radio button for **Run On a Schedule** and select the schedule you want to use. Or select **Run Once** to run the task manually.
   If using this option you must have a periodic snapshot task already defined. If running on a schedule you don't have to have a pre-defined snapshot task.

   Select the radio button to specify the destination snapshot lifetime.

4. Click **START REPLICATION**. The task appears on the **Replication Tasks** widget with the status as **PENDING**.
{{< /expand >}}

You can monitor created backup tasks from the **Dashboard** widget.

## Backing Up the System Configuration

Now that you configured your system network, storage, and the data shares you want, and you have set up your data back up solution, it is time to back up your system configuration.

{{< expand "Click here for instructions" "v" >}}
{{< include file="/content/_includes/DownloadSystemConfigFileSCALE.md" >}}
{{< /expand >}}

### Downloading the Initial System Debug File

After saving the system configuration, go to **System Settings > Advanced** and click **Save Debug**. After the download completes save this initial debug file with your system configuration file.

## Create a Boot Environment

After installing and completing your SCALE system configuration, [create a boot environment]({{< relref "ManageBootEnvironSCALE.md" >}}) to use as a restore point.
If an issue occurs where you lose access to the SCALE UI, you can establish an SSH session and restore it from the boot environment.
You can clone the boot environment listed after the **initial-install** environment and rename the clone to something you recognize, such as the release number with date and time.
