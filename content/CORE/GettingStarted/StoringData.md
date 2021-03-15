---
title: "Storing Data"
weight: 20
---

{{< toc >}}

Now that we're logged in to the web interface, it's time to set up TrueNAS storage and data backups.
These instructions demonstrate a simple *mirrored* pool setup, where one disk is used for storage and the other for data protection.
However, there are a vast number of configuration possibilities for your storage environment!
You can read more about these options in the in-depth [Pool Creation article]({{< relref "PoolCreate.md" >}}).

## Requirements

At minimum, the system needs at least two identically sized disks to create a mirrored storage pool.
The disk used for the TrueNAS installation does not count toward this limit.

Data backups can be configured in several ways and have different requirements.
Backing data up in the Cloud requires a 3rd party Cloud Storage provider account.
Backups with Replication requires either additional storage on the TrueNAS system or (ideally) another TrueNAS system in a different location.

## Simple Storage Setup

Go to **Storage > Pools** and click *ADD*.
Set *Create a new pool* and click *CREATE POOL*

![StoragePoolsAddCreateManager](/images/CORE/12.0/StoragePoolsAddCreateManager.png "TrueNAS Pool Manager")

For the *Name*, enter *tank* or any other preferred name.
In the **Available Disks**, set two identical disks and click the <right arrow icon> to move them to the **Data VDevs** area.

![StoragePoolsAddCreateTank](/images/CORE/12.0/StoragePoolsAddCreateTank.png "Creating the tank pool")

TrueNAS automatically suggests *Mirror* as the ideal layout for maximized data storage and protection.

Review the **Estimated total raw data capacity** and click *CREATE*.
TrueNAS wipes the disks and adds *tank* to the **Storage > Pools** list.

![StoragePoolsListTank](/images/CORE/12.0/StoragePoolsListTank.png "Finding the tank pool")

## Data Management

When the storage is created, it's time to ensure the data is effectively stored and backed-up.
TrueNAS offers several options to help ensure your data is adequately protected.

{{< tabs "Backup Options" >}}
{{< tab "Cloud Sync" >}}
{{< hint info >}}
This option requires an account with the Cloud Storage provider and a storage location created with the provider, like an Amazon S3 bucket.
Major providers like Amazon S3, Google Cloud, Box and Microsoft Azure are supported, along with a variety of other vendors.
These can charge fees for data transfers and storage, so please review your cloud storage provider's policies before transferring any data.
{{< /hint >}}

You can configure TrueNAS to send, receive, or synchronize data with a Cloud Storage provider.
Configuring a Cloud Sync task allows you to transfer data a single time or set up a recurring schedule to periodically transfer data.

### Add the Credential

Go to **System > Cloud Credentials > ADD**.
Enter a *Name* and choose the *Provider* from the dropdown menu.
The authentication options change depending on the selected *Provider*.
Credentials either must be entered manually or a single provider login is required and the credentials add automatically.

![CloudSyncLogin](/images/CORE/12.0/StoringDataCloudSyncAuth.png "Cloud Sync Authorization")

After entering the *Provider* credentials, click *VERIFY CREDENTIAL*.
When verification is confirmed, click *SUBMIT*.

### Add the Data Transfer Task

Go to **Tasks > Cloud Sync Tasks** and click *ADD*.

![TasksCloudSyncAdd](/images/CORE/12.0/TasksCloudSyncAdd.png "Creating a Cloud Sync Task")

Select the previously saved *Credential* to populate the **Remote** section.

Add a *Description* for the  task, select *PUSH* or *PULL* as the *Direction* and *COPY* as the *Transfer Mode*.
Under *Directory/Files*, choose the **tank** dataset previously created.

Now, use the **Control** options to define how often this task runs.
Open the *Schedule* drop down and choose a preset time when running the task is least intrusive to your network.
When the task only needs to run once, unset *Enabled*.
The task can then be triggered a single time from the **Tasks > Cloud Sync Tasks** list to do the initial migration or backup.

To test your task, click *DRY RUN*.
When the test run is successful, click *SUBMIT* to save the task and add it to **Tasks > Cloud Sync Tasks**.

To manually run the task, go to **Tasks > Cloud Sync Tasks**, click **>** to expand the new task, and click *RUN NOW*.

![TasksCloudSyncOptions](/images/CORE/12.0/TasksCloudSyncOptions.png "Cloud Sync Task Options")

The **Status** shows success or failure.
Click the status entry to see a detailed log of the action.
{{< /tab >}}
{{< tab "Replication" >}}
Replication is the process of taking a moment in time "snapshot" of the data and copying that snapshot to another location.
Snapshots typically use less storage than full file backups and have more management options.
This instruction shows using the TrueNAS Wizard to create a simple replication.

Go to **Tasks > Replication Tasks** and click *ADD*.
Set the source location to the local system and pick which datasets to snapshot.
The wizard takes new snapshots of the sources when no existing source snapshots are found.

![RepTaskSource](/images/CORE/12.0/StoringDataRepTaskSource.png "Rep Task Source")

Set the destination to the local system and define the path to the storage location for replicated snapshots.
When manually defining the destination, be sure to type the full path to the destination location.

![RepTaskDestination](/images/CORE/12.0/StoringDataRepTaskDestination.png "Rep Task Destination")

You can define a specific schedule for this replication or choose to run it immediately after saving the new task.
Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

![RepTaskSchedule](/images/CORE/12.0/StoringDataRepTaskSchedule.png "Rep Task Schedule")

Clicking *START REPLICATION* saves the new task and immediately attempts to replicate snapshots to the destination.

![RepTaskCompletion](/images/CORE/12.0/StoringDataRepTaskCompletion.png "Rep Task Completion")

To confirm that snapshots have been replicated, go to **Storage > Snapshots** and verify the destination dataset has new snapshots with correct timestamps.

![RepTaskVerification](/images/CORE/12.0/StoringDataRepTaskVerified.png "Rep Task Verification")
{{< /tab >}}
{{< /tabs >}}

With TrueNAS configured to store and back up data, let's move on to [sharing data]({{< relref "SharingStorage.md" >}}).
