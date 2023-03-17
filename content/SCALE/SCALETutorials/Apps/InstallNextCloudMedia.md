---
title: "Adding Nextcloud for Media Previews"
description: "This article provides instructions to configure TrueNAS SCALE and install Nextcloud to support hosting a wider variety of media file previews such as HEIC, Mp4 and MOV files."
weight: 30
alias: /scale/scaleuireference/apps/nextcloudscale/
tags:
- scalenextcloud
- scaleapps
- scaleadmin
---

{{< toc >}}

Nextcloud is a drop-in replacement for many popular cloud services, including file sharing, calendar, groupware and more. 
One of its more common uses for the home environment is serving as a media backup, and organizing and sharing service.
This procedure demonstrates how to set up Nextcloud on TrueNAS SCALE, and configure it to support hosting a wider variety of media file previews, including High Efficiency Image Container (HEIC), MP4 and MOV files.
The instructions in this article apply to SCALE 22.12.0 and later.

## Before You Begin

Before using SCALE to install the Nextcloud application you need to configure TrueNAS SCALE storage for Nextcloud application to use. 

Verify the [local administrator]({{< relref "ManageLocalUsersSCALE.md" >}}) account has sudo permissions enabled.

Set up an account with Nextcloud if you don't already have one.

## Installing Nextcloud on SCALE

In this procedure you:

1. Add the storage Nextcloud uses

2. Install the Nextcloud app in SCALE

### Adding Nextcloud Storage

Nextcloud needs a primary dataset for the application (nextcloud), and four datasets, one it uses for the primary data volume (data), a postgres data volume (db) and one as a postgres backup volume (dbbackup), and an one for extra mount path volume (opt). 

SCALE Bluefin creates the **ix-applications** dataset in the pool you set as the application pool when you first go to the **Apps** screen. This dataset is internally managed so you cannot use this as the parent when you create the required Nextcloud datasets.

To create the Nextcloud datasets, go to **Datasets**, select the dataset you want to use as the parent dataset, then click **Add Dataset** to [add a dataset]({{< relref "DatasetsScale.md" >}}). In this example, we create the Nextcloud datasets under the root parent dataset **tank**.

Enter **nextcloud** in **Name**, make any other setting changes you want to make, and click **Save**.

Next, select the **nextcloud** dataset, click **Add Dataset** to add the **data** child dataset. 
Enter **data** in **Name**, make any other setting changes you want to make for the dataset, and click **Save**. 

Repeat this three more times to add the other three child datasets to the **nextcloud** non-root parent dataset. 
Add one named **db**, the next **dbbackup**, and then finally **opt**.

When finished you should have the **nextcloud** parent dataset with four child datasets under it. Our example paths are:
* */mnt/tank/nextcloud/data*
* */mnt/tank/nextcloud/db*
* */mnt/tank/nextcloud/dbbackup*
* */mnt/tank/nextcloud/opt*

![AppsAddNextcloudDatasets](/images/SCALE/22.12/AppsAddNextcloudDatasets.png "Add Nextcloud Storage")

### Installing Nextcloud in SCALE

Go to **Apps** to open the **Applications** screen and then click on the **Available Applications** tab. 

1. Set the pool SCALE applications use. 
   
   If you have not installed an application yet, SCALE opens the **Choose a pool for Apps** dialog. Select the pool where you created the Nextcloud datasets from the **Pools** dropdown list and then click **Choose** to set the pool for all applications. 

   ![AppsChooseAPoolForApps](/images/SCALE/22.02/AppsChooseAPoolForApps.png "Choose a Pool for Apps")

   After SCALE finishes configuring the system to use this pool, a confirmation dialog displays. Click **Close**

2. Locate the **nextcloud** widget and then click **Install** to open the **Nextcloud** configuration wizard.
   
   ![AvailableApplications](/images/SCALE/22.02/AvailableApplications.png "Available Applications")

3. Enter a name for the app in **Application Name** and then click **Next**. This example uses *nextcloud*.   
   
   ![AddNextcloudEnterApplicationName](/images/SCALE/22.12/AddNextcloudEnterApplicationName.png "Add Nextcloud Application Name")

4. Enter a user name and password to use as a Nextcloud login on the **Nextcloud Configuration** settings screen, and then click **Next**. 
   For a basic installation you can leave the default values in all settings except **Username** and **Password**. This example uses *admin* as the user.
   TrueNAS populates **Nextcloud host** with the IP address for your server, **Nextcloud data directory** with the correct path, and **Node Port to use for Nextcloud** with the correct port number.

   ![AddNextcloudUsernameAndPassword](/images/SCALE/22.12/AddNextcloudUsernameAndPassword.png "Add Nextcloud User Name and Password")

5. Enter the storage settings for each of the four datasets created for Nextcloud. 
   
   a. Enter or browse to the location where you created the nextcloud/data dataset in **Host Path for Nextcloud Data Volume**. This example uses the /mnt/tank/nextcloud/data path.

      ![AddNextcloudDataAndOptPaths](/images/SCALE/22.12/AddNextcloudDataAndOptPaths.png "Add Nextcloud Data and Opt Paths")

   b. Click **Add** to display the **Mount Path in Pod** and **Host Path** fields.       
      Enter the mount path in the Nextcloud container that you want to use in **Mount Path in Pod**. The example uses the same as the dataset path **/opt**. 
      Enter or browse to the location where you created the **nextcloud/opt** dataset in **Host Path**. This example uses the **/mnt/tank/nextcloud/opt** path.

   c. Select **Enable Host Path for Postgres Data Volume**, and then enter or browse to the **nextcloud/db** dataset location in **Host Path for Postgres Data Volume**.

      ![AddNextcloudDbAndDbBackup](/images/SCALE/22.12/AddNextcloudDbAndDbBackup.png "Add Nextcloud DB and DBbackup Paths")

   d. Select **Enable Host Path for Postgres Backup Volume**, and then enter or browse to the **nextcloud/dbbackup** dataset location in the **Host Path for Progres Backup Volume**. 

6. Select **Enable cronjobs for nextcloud** on the **CronJob configuration** screen.

   ![AddNextcloudEnableCronJobs](/images/SCALE/22.12/AddNextcloudEnableCronJobs.png "Nextcloud Enable CronJobs")

{{< expand "Nextcloud Cron Jobs" "v" >}}
NextCloud Cron Jobs only run while the app is running. If you stop the app, the Cron Job(s) do not run until you start the app again.

For more information on formatting and using Cron Jobs, see [Managing Cron Jobs]({{< relref "ManageCronJobsSCALE.md" >}}).
{{< /expand >}}

7. Accept the remaining setting defaults on the **Scaling/Upgrade Policy** and **Advanced DNS Settings** screens.

8. Scroll up to review the configuration settings and fix any errors or **Save** to complete the installation.

Click on the **Installed Applications** tab to see the **nextcloud** widget. 
   
![NextcloudWidgetActive](/images/SCALE/22.02/NextcloudWidgetActive.png "Nextcloud Widget Active")
   
When the **nextcloud** widget displays **ACTIVE**, click **Web Portal** to open the NextCloud sign in screen in a new browser window. 

![NextCloudSignIn](/images/SCALE/22.02/NextCloudSignIn.png "Nextcloud Sign In Screen")

{{< taglist tag="scaleadmin" limit="10" title="Related Admin User Articles" >}}