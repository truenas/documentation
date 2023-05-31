---
title: "Backing Up TrueNAS"
description: "Provides general information and instructions on setting up data storage backup solutions, saving the system configuration and initial system debug files, and creating a boot environment."
weight: 60
aliases:
 - /scale/gettingstarted/install/setupbackupscale/
tags:
- scalebackup
- scaleconfig
---

{{< toc >}}


After configuring your TrueNAS storage and data sharing, or any other function, service, or application, it is time to ensure effective back up of your data using the backup options TrueNAS provides. 

You should also:

* [Download and save your system configuration file](#backing-up-the-system-configuration) to protect your system configuration information.
* [Download a debug file](#downloading-the-initial-system-debug-file)
* [Create a boot environment](#create-a-boot-environment) to use as a restore point 

You should also set up a data storage backup method using either a cloud sync or replication task.

## Backing Up TrueNAS Storage Data

TrueNAS provides for data backup through cloud sync or replication.

### Using Cloud Sync for Data Backup
{{< hint type=note >}}
Cloud sync requires an account with a cloud storage provider and a storage location created with that provider, like Amazon S3 bucket.
SCALE support major providers like Storj, Amazon S3, Google Cloud, Box and Microsoft Azure, along with a variety of other vendors.
These providers can charge fees for data transfer and storage, so please review the polices of your cloud storage provider before transferring your data.
{{< /hint >}}

You can configure TrueNAS to send, receive, or synchronize data with a cloud storage provider. 
{{< expand "Click here for instructions to set up cloud sync" "v" >}}

1. Add your cloud storage credentials to TrueNAS.

   Go to **Credentials > Backup Credentials** and click **Add** to open the **Cloud Credentials** configuration screen.

   Some cloud storage providers, like Amazon S3, require you log into your cloud account to generate additional information like an access key. TrueNAS requires you to enter the Amazon S3 credentials you generate on their **Security Credentials > Access Keys** page before you can save and add the cloud credentials. 
   Check with your cloud storage provider to see what credentials they require TrueNAS to provide to complete data transfers.

   Some cloud storage providers, like Box, can automatically populate the required **Authentication** fields after you log into your account using OAuth Authentication. 

   {{< expand "Click here for more information" "v" >}}
   {{< include file="/content/_includes/OAuthCloudCredentialSetupSCALE.md" type="page" >}}
   {{< /expand >}} 
   For more information on cloud credentials see [Adding Cloud Credentials]({{< relref "AddCloudCredentials.md" >}})

2. Create a cloud sync data transfer task.

   {{< include file="/content/_include/CreateCloudSyncTaskScale.md" type="page" >}}

   To manually start a saved task, click the <i class="fa fa-caret-right" aria-hidden="true"></i> **Run Now** for the cloud sync task you want to start. 
{{< /expand >}}
### Using Replication for Data Backup

Replication is the process of taking a moment-in-time snapshot of the data and then copying that snapshot to another location. 
Snapshots typically use less storage than full file backups and have more management options. 
{{< expand "Click here for basic instructions" "v" >}}
This instruction shows using the TrueNAS replication wizard to create a simple replication task.

1. Create a periodic snapshot task using the **[Periodic Snapshot Task]({{< relref "PeriodicSnapshotTasksSCALE.md" >}})** if you want to use the **Run Once** replication schedule option. 
   If scheduling a task, SCALE creates the periodic snapshot task when it runs the replication task according to schedule time.

2. Create the replication task.

   Go to **Data Protection** and click **Add** on the **Replication Tasks** widget. The **Replication Task Wizard** opens on the **What and Where** configuration screen. 
   Select both the **Source Location** and **Destination Location** using the dropdown list options. 
   You can back up your data on the same system or a different system. 
   If you select **A different system** you must have SSH connection. Have your destination and source information ready.

   Next enter the **Source** and **Destination** paths. To populate the field with the full path, you can either type the full path to the data you want to back up or click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt** and at the pool and dataset levels to expand the options. Click on the dataset and/or the file if you want to narrow backup down to that level.

   The task a name populates from the values in **Source** and **Destination**. Click **Next**.

3. Define when you want this task to occur.

   Select the radio button for **Run On a Schedule** and select the schedule you want to use. Or select **Run Once** to run the task manually.
   If using this option you must have a periodic snapshot task already defined. If running on a schedule you don't have to have a pre-defined snapshot task.

   Select the radio button to specify how long the destination snapshot lifetime.

4. Click **START REPLICATION**. The task appears on the **Replication Tasks** widget with the status as **PENDING**.
{{< /expand >}}
## Backing Up the System Configuration

Now that you configured your system network, storage and the data shares you wanted, and you have set up your data back up solution it is time to back up your system configuration.
{{< expand "Click here for instructions" "v" >}}
{{< include file="/content/_includes/DownloadSystemConfigFileSCALE.md" type="page" >}}
{{< /expand >}}
### Downloading the Initial System Debug File

After saving the system configuration, go to **System Settings > Advanced** and click **Save Debug**. After the download completes save this initial debug file with your system configuration file.

## Create a Boot Environment

After installing and completing your SCALE system configuration, [create a boot environment]({{< relref "ManageBootEnvironSCALE.md" >}}) to use as a restore point.
If an issue occurs where you lose access to the SCALE UI, you can establish an SSH session and restore it from the boot environment. 
You can clone the boot environment listed after the initial/initial environment and rename the clone to something you recognize such as the release number with date and time.

{{< taglist tag="scaleconfig" limit="10" title="Related Configuration Articles" >}}
{{< taglist tag="scalebackup" limit="10" title="Related Backup Articles" >}}
