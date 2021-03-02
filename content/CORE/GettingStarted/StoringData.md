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
Mixing disks of different sizes in a vdev is not allowed.
{{< /hint >}}

{{< tabs "VdevConfiguration" >}}
{{< tab "Stripe" >}}
## Stripe
 
A *Stripe* configuration requires at least one disk and has no data redundancy.

{{< hint [warning] >}}
**We never recommend using a Stripe to store critical data, since a single disk failure could result in losing all data in that vdev.**
{{< /hint >}

Select the *check box* next to the drive(s) you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column. If choosing *Stripe* as your configuration you will be need to select the **Force** option checkbox.  A **Warning** dialogue will appear and you will need to *confirm* your selection and click **CONTINUE**.  

![StripeVdevDataLoss](/images/CORE/12.0/StoringDataStripe.png "Stripe Vdev Warning")
<br><br>

After confirmation is complete click **CREATE**.  You will receive a **Warning** that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**. 

![StripeVdevCreation](/images/CORE/12.0/StoringDataStripe.png "Stripe Vdev Creation")
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

Click **CREATE**.  You will receive a **Warning** dialogue that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**.  After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![Raidz1VdevStatus](/images/CORE/12.0/StoringDataRaidz1Status.png "Raidz-1 Vdev Status")

{{< /tab >}}
{{< tab "RAIDZ2" >}}

## RAIDZ2

In a *RAIDZ2* configuration two disks are used to maintain data and all other disks are used to store data. Requires at least four disks.

Select the *check box* next to the drives you want to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> to place in the **Data VDevs** Column.  Ensure *Raid-z2* is shown as the configuration of choice beneath the drives you've added.

![Raidz2VdevCreation](/images/CORE/12.0/StoringDataRaidz2.png "Raidz-2 Vdev Creation")

Click **CREATE**.  You will receive a **Warning** dialogue that the contents of all added disks will be erased.  **Confirm** and click **CREATE POOL**.  After successful creation your pool will now be available under **Storage > Pools**.  To check the status of your pool, click <i class="fas fa-cog" aria-hidden="true". title="Settings"></i>&nbsp and choose *Status*.

![Raidz2VdevStatus](/images/CORE/12.0/StoringDataRaidz2Status.png "Raidz-2 Vdev Status")

{{< /tab >}}
{{< /tabs >}}

# Set Up Backups

# ???

# Profit!
