---
title: "Adding NextCloud for Media Previews"
description: "This article provides instructions to configure TrueNAS SCALE and install NextCloud to support hosting a wider variety of media file previews such as HEIC, Mp4 and MOV files."
weight: 30
alias:
tags:
 - scalenextcloud
 - scaleapps
---

{{< toc >}}

NextCloud is a drop-in replacement for many popular cloud services, including file sharing, calendar, groupware and more. 
One of its more common uses for the home environment is serving as a media backup, and organizing and sharing service.
This procedure demonstrates how to set up NextCloud on TrueNAS SCALE, and configure it to support hosting a wider variety of media file previews, including High Efficiency Image Fromat (HEIC), MP4 and MOV files.
The instructions in this article apply to SCALE 22.02.3 and later.

## Before You Begin

Before using SCALE to install the NextCloud application you need to configure TrueNAS SCALE storage for NextCloud application to use. 
You also use the SCALE Shell to set the ffmpg binary before you begin the NextCloud installation and configuration.

Set up an account with NextCloud if you don't already have one.

## Installing NextCloud on SCALE

In this procedure you:

1. Add the storage NextCloud uses

2. Set up the ffmpg binary

3. Install the NextCloud app in SCALE

### Adding NextCloud Storage

NextCloud needs a primary dataset for the application, and four datasets it uses for the primary data volume, a postgres data volume (db) and one as a postgres backup volume (dbbackup), and an one for extra mount path volume (opt). 

You can either create these datasets under an existing dataset you use for applications (apps), or if you have enough disks on your TrueNAS system and want to create a new pool to use just for media files, create a new pool and then add the NextCloud datasets as child datasets to the root dataset. 

To create a new pool, go to **Storage** and click **Create Pool** to [add a new pool]({{< relref "CreatePoolScale.md" >}}).

To add under an existing dataset, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the dataset where you want to add the NextCloud datasets, and then select **[Add Dataset]({{< relref "DatasetsSCALE.md" >}})**. 
In our Nextcloud example we use pool *tank*, parent dataset *apps** and then created the *nextcloud* dataset. 

Next, select the **nextcloud** dataset, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Add Dataset** to add a child dataset. Enter **data** in **Name** and click **Save**. 
Repeat this step three more times to add the three child datasets to the **nextcloud** dataset, one named **db**, the next **dbbackup**, and then finally **opt**.

When finished you should have the *nextcloud* parent dataset with four child datasets under it. Our example paths are:
* */mnt/tank/apps/nextcloud/data*
* */mnt/tank/apps/nextcloud/db*
* */mnt/tank/apps/nextcloud/dbbackup*
* */mnt/tank/apps/nextcloud/opt*

![AppsAddNextCloudStorage](/images/SCALE/22.02/AppsAddNextCloudStorage.png "Add Nextcloud Storage")

### Set Up the ffmpg Binary

Go to **System > Shell** and enter these six commands:

```
cd /mnt/tank/apps/nextcloud/opt

wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

tar xvf ffmpeg-release-amd64-static.tar.xz --wildcards \*static/ffmpeg

rm ffmpeg-release-amd64-static.tar.xz

mv ffmpeg-*-static/ bin/

chown root:root bin/ffmpeg
```

With the ffmpeg binary set you can now install NextCloud on your TrueNAS SCALE.

### Installing NextCloud in SCALE

Go to **Apps** to open the **Applications** screen and then click on the **Available Applications** tab. 

1. Set the pool SCALE applications use. 
   
   If you have not installed an application yet, SCALE opens the **Choose a pool for Apps** dialog. Select the pool where you created the NextCloud datasets from the **Pools** dropdown list and then click **Choose** to set the pool for all applications. 

   ![AppsChooseAPoolForApps](/images/SCALE/22.02/AppsChooseAPoolForApps.png "Choose a Pool for Apps")

   After SCALE finishes configuring the system to use this pool, a confirmation dialog displays. Click **Close**

2. Locate the **nextcloud** widget and then click **Install** to open the **Nextcloud** configuration wizard.
   
   ![AvailableApplications](/images/SCALE/22.02/AvailableApplications.png "Available Applications")

3. Enter a name for the app in **Application Name** and then click **Next**. This example uses *nextcloud*.   
   
   ![AddNextcloudEnterApplicationName](/images/SCALE/22.02/AddNextcloudEnterApplicationName.png "Add Nextcloud Application Name")

4. Enter a user name and password to use as a NextCloud login on the **Nextcloud Configuration** settings screen, and then click **Next**. 
   For a basic installation you can leave the default values in all settings except **Username** and **Password**. This example uses *admin* as the user.
   TrueNAS populates **Nextcloud host** with the IP address for your server, **Nextcloud data directory** with the correct path, and **Node Port to use for Nextcloud** with the correct port number.

   ![AddNextcloudUsernameAndPassword](/images/SCALE/22.02/AddNextcloudUsernameAndPassword.png "Add Nextcloud User Name and Password")

5. Enter the storage settings for each of the four datasets created for NextCloud. 
   
   Enter or browse to the location where you created the nextcloud/data dataset in **Host Path for Nextcloud Data Volume**. 
   This example uses the */mnt/tank/apps***/nextcloud/data*** path.
   
   ![AddNextcloudDataAndOptPaths](/images/SCALE/22.02/AddNextcloudDataAndOptPaths.png "Add Nextcloud Data and Opt Paths")

   Click **Add** to display the **Mount Path in Pod** and **Host Path** fields. 
   Enter **/opt** in **Mount Path in Pod**, and then either enter or browse to the location where you created the **nextcloud/opt** dataset in **Host Path**. 
   This example uses the */mnt/tank/apps***/nextcloud/opt*** path.

   Select **Enable Host Path for Postgres Data Volume**, and then enter or browse to the location where you created the **nextcloud/db** dataset in **Host Path for Postgres Data Volume**.

   ![AddNextcloudDbAndDbbackup](/images/SCALE/22.02/AddNextcloudDbAndDbbackup.png "Add Nextcloud DB and DBbackup Paths")

   Select **Enable Host Path for Postgres Backup Volume**, and then enter or browse to the location where you created the **nextcloud/dbbackup** dataset in the **Host Path for Progres Backup Volume**. This completes the storage setup for NextCloud. Click **Next**.

6. Select **Enable cronjobs for nextcloud** on the **CronJob configuration** screen, and then click **Next**.

   ![AddNextcloudEnableCronJobs](/images/SCALE/22.02/AddNextcloudEnableCronJobs.png "Nextcloud Enable CronJobs")

7. Accept the remaining setting defaults and click **Next** on the **Scaling/Upgrade Policy** and **Advanced DNS Settings** screens.

8. Review the configuration settings and then click **Back** to fix any errors or **Save** to complete the installation.
   
   ![AddNextcloudConfirmSettings](/images/SCALE/22.02/AddNextcloudConfirmSettings.png "Confirm Nextcloud Settings") 

9. Click on the **Installed Applications** tab to see the **nextcloud** widget. 
   
   ![NextcloudWidgetActive](/images/SCALE/22.02/NextcloudWidgetActive.png "Nextcloud Widget Active")
   
   When the **nextcloud** widget displays **ACTIVE**, click **Web Portal** to open the NextCloud sign in screen in a new browser window. 

   ![NextCloudSignIn](/images/SCALE/22.02/NextCloudSignIn.png "Nextcloud Sign In Screen")

{{< taglist tag="scalenextcloud" limit="10" title="Related NextCloud Articles" >}}