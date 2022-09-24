---
title: "Installing NextCloud on SCALE"
description: "This article provides instructions for a basic NextCloud installation on TrueNAS SCALE."
weight: 26
alias: /scale/scaleuireference/apps/nextcloudscale/
tags:
 - scalenextcloud
---

{{< toc >}}


[NextCloud](https://nextcloud.com/) provides a suite of client-server software for creating and using file hosting services. 
TrueNAS SCALE includes NextCloud in the catalog of available applications you can install on your system.

## Before You Begin

Before using SCALE to install the NextCloud application you need to configure TrueNAS SCALE storage for NextCloud application to use. 

Set up an account with NextCloud if you don't already have one.

## Installing NextCloud

This procedure includes setting up the pool storage for NextCloud and the basic installation and configuration of the application.

### Adding NextCloud Storage

NextCloud needs a primary dataset for the application. You can add as many child datasets as your use case requires such as a primary data volume, a postgres data volume (db) and a postgres backup volume (dbbackup), or for extra mount path volume (opt). 

You can either create these datasets under an existing dataset you use for applications (apps), or if you have enough disks on your TrueNAS system and want to create a new pool to use just for media files, create a new pool and then add the NextCloud datasets as child datasets to the root dataset. 

To create a new pool, go to **Storage** and click **Create Pool** to [add a new pool]({{< relref "CreatePoolScale.md" >}}).

To add under an existing dataset, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the dataset where you want to add the NextCloud datasets, and then select **[Add Dataset]({{< relref "DatasetsSCALE.md" >}})**. 
In our Nextcloud example we use pool *tank*, parent dataset *apps** and then created the *nextcloud* dataset. 

Next, select the **nextcloud** dataset, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Add Dataset** to add the child dataset **data** and click **Save**. 

### Installing NextCloud

{{< hint info >}}
**Official Applications**
 
Official applications listed on **Available Applications** are pre-configured to only require a name during deployment.
{{< /hint >}}

### Installing NextCloud in SCALE
This procedure installs NextCloud with basic settings and only one dataset.

Go to **Apps** to open the **Applications** screen and then click on the **Available Applications** tab. 

1. Set the pool SCALE applications use. 
   
   If you have not installed an application yet, SCALE opens the **Choose a pool for Apps** dialog. 
   Select the pool where you created the NextCloud dataset from the **Pools** dropdown list and then click **Choose** to set the pool for all applications. 

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

5. Enter the storage settings for the NextCloud dataset. 
   
   Enter or browse to the location where you created the nextcloud/data dataset in **Host Path for Nextcloud Data Volume**. 
   This example uses the */mnt/tank/apps***/nextcloud/data*** path.
   
   ![AddNextcloudDataHostPath](/images/SCALE/22.02/AddNextcloudDataHostPath.png "Add Nextcloud Data Host Paths")

   To collapse the directory tree, click the arrow to the left of /mnt. 
   Do not click on /mnt as this changes the path and you have to reselect your dataset
   This completes the basic storage setup for NextCloud. Click **Next**.

6. (Optional) Select **Enable cronjobs for nextcloud** on the **CronJob configuration** screen, and then click **Next**.

   ![AddNextcloudEnableCronJobs](/images/SCALE/22.02/AddNextcloudEnableCronJobs.png "Nextcloud Enable CronJobs")

7. Accept the remaining setting defaults and click **Next** on the **Scaling/Upgrade Policy** and **Advanced DNS Settings** screens.

8. Review the configuration settings and then click **Back** to fix any errors or **Save** to complete the installation.
  
9. Click on the **Installed Applications** tab to see the **nextcloud** widget. 
   
   ![NextcloudWidgetActive](/images/SCALE/22.02/NextcloudWidgetActive.png "Nextcloud Widget Active")
   
   When the **nextcloud** widget displays **ACTIVE**, click **Web Portal** to open the NextCloud sign in screen in a new browser window. 

   ![NextCloudSignIn](/images/SCALE/22.02/NextCloudSignIn.png "Nextcloud Sign In Screen")

Refer to the NextCloud documentation for details about using the NextCloud platform:

* [Administrators Manual](https://docs.nextcloud.com/server/latest/admin_manual/)
* [Users Manual](https://docs.nextcloud.com/server/latest/user_manual/en/)
* [Nextcloud Developer Documentation](https://docs.nextcloud.com/server/latest/developer_manual/)

{{< taglist tag="scalenextcloud" limit="10" title="Related NextCloud Articles" >}}