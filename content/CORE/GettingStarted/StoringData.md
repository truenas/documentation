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

![]()

Set *Create a new pool* and click *CREATE POOL*

![]()

For the *Name*, enter *pool1* or any other preferred name.
In the **Available Disks**, set two identical disks and click the <right arrow icon> to move them to the **Data VDevs** area.

![]()

TrueNAS automatically suggests *Mirror* as the ideal layout for maximized data storage and protection.

Review the **Estimated total raw data capacity** and click *CREATE*.
TrueNAS wipes the disks and adds *pool1* to the **Storage > Pools** list.

![]()

## Data Management

Once your storage has been successfully created, it's time to ensure your data is effectively stored and backed-up.
TrueNAS offers several options to help ensure your data is adequately protected.

{{< tabs "Backup Options" >}}
{{< tab "Rsync" >}}
{{< /tab >}}
{{< tab "Cloud Sync" >}}
{{< hint info >}}
This option requires an account with the Cloud Storage provider and a storage location created with the provider, like an Amazon S3 bucket.
Major providers like Amazon S3, Google Cloud, Box and Microsoft Azure are supported, along with a variety of other vendors.
These can charge fees for data transfers and storage, so please review your cloud storage provider's policies before transferring any data.
{{< /hint >}}

You can configure TrueNAS to send, receive, or synchronize data with a Cloud Storage provider.
Configuring a Cloud Sync task allows you to transfer data a single time or set up a recurring schedule to periodically transfer data.
This can be an effective method to back up your data to a remote location.

Go to **System > Cloud Credentials > ADD**.
Enter a *Name* and choose your *Provider* from the dropdown menu.
For authentication, depending on the provider chosen, you will either enter the credentials manually, or you will be prompted to login to the provider and the credentials will be filled in automatically.

![CloudSyncLogin](/images/CORE/12.0/StoringDataCloudSyncAuth.png "Cloud Sync Authorization")

After the credentials have been successfully entered, click **VERIFY CREDENTIAL**.  Once verification is confirmed, click **SUBMIT**. 

Go to **Tasks > Cloud Sync Tasks > ADD**.  Add a *Description* for your task, select **PUSH** as your *Direction* and **COPY** as the *Transfer Mode*.  Choose the Pool/Dataset you wish to backup under *Directory File* and the frequency of your task via the *Schedule* options available.  Finally, under the *Credential* dropdown, select your provider. To test your task, click **DRY RUN**.  Once the dry run is complete, click **SUBMIT**. 
{{< /tab >}}
{{< tab "Replication" >}}
TrueNAS provides a wizard that is useful to quickly configure different simple replication scenarios.  Go to **Tasks > Replication Tasks** and click **ADD**.  Set the source location to the local system and pick which datasets to snapshot. The wizard takes new snapshots of the sources when no existing source snapshots are found.

![RepTaskSource](/images/CORE/12.0/StoringDataRepTaskSource.png "Rep Task Source")

Set the destination to the local system and define the path to the storage location for replicated snapshots. When manually defining the destination, be sure to type the full path to the destination location.

![RepTaskDestination](/images/CORE/12.0/StoringDataRepTaskDestination.png "Rep Task Destination")

You can define a specific schedule for this replication or choose to run it immediately after saving the new task. Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

![RepTaskSchedule](/images/CORE/12.0/StoringDataRepTaskSchedule.png "Rep Task Schedule")

Clicking **START REPLICATION** saves the new task and immediately attempts to replicate snapshots to the destination.

![RepTaskCompletion](/images/CORE/12.0/StoringDataRepTaskCompletion.png "Rep Task Completion")

To confirm that snapshots have been replicated, go to **Storage > Snapshots** and verify the destination Dataset has new Snapshots with correct timestamps.

![RepTaskVerification](/images/CORE/12.0/StoringDataRepTaskVerified.png "Rep Task Verification")
{{< /tab >}}
{{< /tabs >}}
