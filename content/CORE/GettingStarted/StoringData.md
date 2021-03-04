---
title: "Storing Data"
weight: 20
---

{{< toc >}}

# Create Storage

{{< hint [info] >}}
**Storage Redundancy**\
Before creating a pool, determine the level of required redundancy, how many disks will be added, and if any data exists on those disks. Creating a pool overwrites disk data, so save any required data to different media before adding disks to a pool.
{{< /hint >}}

After successfully installing the latest version of TrueNAS on your system, the next step is to create storage.  Go to **Storage > Pools** and click **ADD**.  Choose *Create new pool* and click **CREATE POOL** to open the **Pool Manager**. Enter a name for the pool in the *Name* field. Ensure that the chosen name conforms to these [naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). Choose the number of disks needed for your pool configuration.

{{< hint [info] >}}
When getting ready to configure your storage keep in mind that mixing disks of different sizes in a vdev is not allowed.
{{< /hint >}}

{{< tabs "VdevConfiguration" >}}
{{< tab "Stripe" >}}
## Stripe
 
A *Stripe* configuration requires at least one disk and has no data redundancy.

{{< hint [warning] >}}
**We never recommend using a Stripe to store critical data, since a single disk failure could result in losing all data in that vdev.**
{{< /hint >}

Select the *check box* next to the drive(s) you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column. If choosing *Stripe* as your configuration you will be need to select the **Force** option checkbox.  A **Warning** dialogue will appear and you will need to *confirm* your selection and click **CONTINUE**.  

![StripeVdevDataLoss](/images/CORE/12.0/StoringDataStripeWarning.png "Stripe Vdev Warning")
<br><br>

After confirmation is complete click **CREATE**.  You will receive a **Warning** that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**. 

![StripeVdevCreation](/images/CORE/12.0/StoringDataStripeCreation.png "Stripe Vdev Creation")
<br><br>

After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![StripeVdevStatus](/images/CORE/12.0/StoringDataStripeStatus.png "Stripe Vdev Status")
<br><br>

{{< /tab >}}
{{< tab "Mirror" >}}

## Mirror
 
In a *Mirror* configuration data is identical in each disk. Requires at least two disks and has the most redundancy.

Select the *check box* next to the drives you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column.  Ensure *Mirror* is shown as the configuration of choice beneath the drives you've added.  

![MirrorVdevCreation](/images/CORE/12.0/StoringDataMirror.png "Mirrorr Vdev Creation")

Click **CREATE**.  You will receive a **Warning** dialogue that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**.  After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![MirrorVdevStatus](/images/CORE/12.0/StoringDataMirrorStatus.png "Mirror Vdev Status")

{{< /tab >}}
{{< tab "RAIDZ1" >}}

## RAIDZ1

In a *RAIDZ1* configuration one disk is used to maintain data and all other disks are used to store data. Requires at least three disks.

Select the *check box* next to the drives you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column.  Ensure *Raid-z* is shown as the configuration of choice beneath the drives you've added.

![Raidz1VdevCreation](/images/CORE/12.0/StoringDataRaidz1.png "Raidz-1 Vdev Creation")
<br><br>

Click **CREATE**.  You will receive a **Warning** dialogue that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**.  After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![Raidz1VdevStatus](/images/CORE/12.0/StoringDataRaidz1Status.png "Raidz-1 Vdev Status")
<br><br>

{{< /tab >}}
{{< tab "RAIDZ2" >}}

## RAIDZ2

In a *RAIDZ2* configuration two disks are used to maintain data and all other disks are used to store data. Requires at least four disks.

Select the *check box* next to the drives you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column.  Ensure *Raid-z2* is shown as the configuration of choice beneath the drives you've added.

![Raidz2VdevCreation](/images/CORE/12.0/StoringDataRaidz2.png "Raidz-2 Vdev Creation")
<br><br>

Click **CREATE**.  You will receive a **Warning** dialogue that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**.  After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![Raidz2VdevStatus](/images/CORE/12.0/StoringDataRaidz2Status.png "Raidz-2 Vdev Status")
<br><br>

{{< /tab >}}
{{< tab "RAIDZ3" >}}

## RAIDZ3

In a *RAIDZ3* configuration three disks are used to maintain data and all other disks are used to store data. Requires at least five disks.

Select the *check box* next to the drives you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column.  Ensure *Raid-z3* is shown as the configuration of choice beneath the drives you've added.

![Raidz3VdevCreation](/images/CORE/12.0/StoringDataRaidz3.png "Raidz-3 Vdev Creation")
<br><br>

Click **CREATE**.  You will receive a **Warning** dialogue that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**.  After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![Raidz3VdevStatus](/images/CORE/12.0/StoringDataRaidz3Status.png "Raidz-3 Vdev Status")
<br><br>

{{< /tab >}}
{{< /tabs >}}

# Set Up Backups

Once your storage has been successfully created, it's time to ensure your data is effectively backed-up.  TrueNAS offeres several options to help ensure your data is adequately protected.  

## Cloud Sync

You can configure TrueNAS to send, receive, or synchronize data with a Cloud Storage provider. Configuring a Cloud Sync task allows you to transfer data a single time or set up a recurring schedule to periodically transfer data. This can be an effective method to back up your data to a remote location.

{{< hint [info] >}}
**Cloud Sync Providers**\
You will need an account with the Cloud Storage provider and a storage location created with the provider, like an Amazon S3 bucket. Major providers like Amazon S3, Google Cloud, Box and Microsoft Azure are supported, along with a variety of other vendors.
{{< /hint >}}

Go to **System > Cloud Credentials > ADD**.  Enter a *Name* and choose your *Provider* from the dropdown menu.  For authentication, depending on the provider chosen, you will either enter the credentials manually, or you will be prompted to login to the provider and the credentials will be filled in automatically.

![CloudSyncLogin](/images/CORE/12.0/StoringDataCloudSyncAuth.png "Cloud Sync Authorization")
<br><br>

After the credentials have been successfully entered, click **VERIFY CREDENTIAL**.  Once verification is confirmed, click **SUBMIT**. 

Go to **Tasks > Cloud Sync Tasks > ADD**.  Add a *Description* for your task, select **PUSH** as your *Direction* and **COPY** as the *Transfer Mode*.  Choose the Pool/Dataset you wish to backup under *Directory File* and the frequency of your task via the *Schedule* options available.  Finally, under the *Credential* dropdown, select your provider. To test your task, click **DRY RUN**.  Once the dry run is complete, click **SUBMIT**. 

## Replication Tasks

TrueNAS provides a wizard that is useful to quickly configure different simple replication scenarios.  Go to **Tasks > Replication Tasks** and click **ADD**.  Set the source location to the local system and pick which datasets to snapshot. The wizard takes new snapshots of the sources when no existing source snapshots are found.

![RepTaskSource](/images/CORE/12.0/StoringDataRepTaskSource.png "Rep Task Source")
<br><br>

Set the destination to the local system and define the path to the storage location for replicated snapshots. When manually defining the destination, be sure to type the full path to the destination location.

![RepTaskDestination](/images/CORE/12.0/StoringDataRepTaskDestination.png "Rep Task Destination")
<br><br>

You can define a specific schedule for this replication or choose to run it immediately after saving the new task. Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

![RepTaskSchedule](/images/CORE/12.0/StoringDataRepTaskSchedule.png "Rep Task Schedule")
<br><br>

Clicking **START REPLICATION** saves the new task and immediately attempts to replicate snapshots to the destination.

![RepTaskCompletion](/images/CORE/12.0/StoringDataRepTaskCompletion.png "Rep Task Completion")
<br><br>

To confirm that snapshots have been replicated, go to **Storage > Snapshots** and verify the destination Dataset has new Snapshots with correct timestamps.

![RepTaskVerification](/images/CORE/12.0/StoringDataRepTaskVerified.png "Rep Task Verification")
<br><br>




