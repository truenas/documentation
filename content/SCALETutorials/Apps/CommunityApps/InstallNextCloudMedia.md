---
title: "Nextcloud"
description: "Provides instructions to configure TrueNAS SCALE and install Nextcloud to support hosting a wider variety of media file previews such as HEIC, Mp4 and MOV files."
weight:
tags:
- apps
- media
---

{{< include file="/static/includes/CommunityAppsLegacy.md" >}}
{{< include file="/static/includes/CommunityAppsContribute.md" >}}

Nextcloud is a drop-in replacement for many popular cloud services, including file sharing, calendar, groupware and more.
One of its more common uses for the home environment is serving as a media backup, and organizing and sharing service.
This procedure demonstrates how to set up Nextcloud on TrueNAS SCALE, and configure it to support hosting a wider variety of media file previews, including High Efficiency Image Container (HEIC), MP4 and MOV files.
The instructions in this article apply to SCALE 22.12.0 and later.

## Before You Begin

Before using SCALE to install the Nextcloud application you need to configure TrueNAS SCALE storage for Nextcloud application to use.

If you are creating a user account to manage this application, create the user with sudo permissions enabled, or make sure the [local administrator]({{< relref "ManageLocalUsersSCALE.md" >}}) account has sudo permissions enabled.
If creating a new user, add this user to the dataset permissions.

If you want to use a certificate for this application, create a new self-signed CA and certificate, or import the CA and create the certificate if using one already configured for Nextcloud. A certificate is not required to deploy the application.

Set up an account with Nextcloud if you don't already have one. Enter this user account in the application configuration.

## Installing Nextcloud on SCALE

In this procedure you:

1. Add the storage Nextcloud uses

2. Install the Nextcloud app in SCALE

### Adding Nextcloud Storage

Nextcloud needs five datasets. A primary dataset for the application (**nextcloud**) with four child datasets.
The four child datasets are named and used as follows:

* One for the primary data volume (**data**)
* One for the postgres data volume (**db**)
* One for the postgres backup volume (**dbbackup**)
* One for extra mount path volume (**opt**).

SCALE creates the **ix-applications** dataset in the pool you set as the application pool when you first go to the **Apps** screen.
This dataset is internally managed, so you cannot use this as the parent when you create the required Nextcloud datasets.

To create the Nextcloud app datasets, go to **Datasets**, select the dataset you want to use as the parent dataset, then click **Add Dataset** to [add a dataset]({{< relref "DatasetsScale.md" >}}).
In this example, we create the Nextcloud datasets under the root parent dataset **tank**.

Enter **nextcloud** in **Name**, select **Apps** as the **Dataset Preset**.
Click **Advanced Options** to make any other setting changes you want to make, and click **Save**.
When prompted, select **Return to Pool List**.

Next, select the **nextcloud** dataset, click **Add Dataset** to add the first child dataset.
Enter **data** in **Name** and select **Apps** as the **Dataset Preset**.
Click **Advanced Options** to make any other setting changes you want to make for the dataset, and click **Save**.

Repeat this three more times to add the other three child datasets to the **nextcloud** parent dataset.
Add one named **db**, the next **dbbackup**, and then finally **opt**.

When finished you should have the **nextcloud** parent dataset with four child datasets under it. Our example paths are:
* */mnt/tank/nextcloud/data*
* */mnt/tank/nextcloud/db*
* */mnt/tank/nextcloud/dbbackup*
* */mnt/tank/nextcloud/opt*

{{< trueimage src="/images/SCALE/Datasets/AppsAddNextcloudDatasets.png" alt="Add Nextcloud Storage" id="Add Nextcloud Storage" >}}

### Installing Nextcloud in SCALE

Go to **Apps**.

1. Set the pool SCALE applications use.
   If you have not installed an application yet, click **Settings**, select **Choose Pool** to open the **Choose a pool for Apps** dialog.
   Enter or select the name of the pool where you created the Nextcloud datasets from the **Pools** dropdown list and then click **Choose** to set the pool for all applications.

   {{< trueimage src="/images/SCALE/Apps/AppsChooseAPoolForApps.png" alt="Choose A Pool for Apps" id="Choose A Pool for Apps" >}}

   When set, the **Installed Applications** screen displays **Apps Service Running** on the top screen banner.

2. Click **Discover Apps** and then locate the **Nextcloud** app.
   Change the **Sort** to **App Name**, then type **Nextcloud** in the search field to display the app widget.

   {{< trueimage src="/images/SCALE/Apps/LocateNextcloudAppWidget.png" alt="Locate Nextcloud App Widget" id="Locate Nextcloud App Widget" >}}

   Click on the widget to open the **Nextcloud** details screen, then click **Install**.
   If this is the first application installed, SCALE displays a dialog about configuring apps.

   {{< trueimage src="/images/SCALE/Apps/AppsInformationDialog.png" alt="Apps Information Dialog" id="Apps Information Dialog" >}}

   Click **Confirm** then **Agree** to close the dialog and open the **Nextcloud** details screen opens.

   {{< trueimage src="/images/SCALE/Apps/NextcloudAppDetailsScreen.png" alt="Nextcloud Details Screen" id="Nextcloud Details Screen" >}}

   Click **Install** to open the **Install Nextcloud** wizard.

   {{< trueimage src="/images/SCALE/Apps/InstallNextcloudScreen.png" alt="Install Nextcloud Screen" id="Install Nextcloud Screen" >}}

3. Enter a name for the app in **Application Name** if you want to change what displays or have multiple Nextcloud app deployments on your system.
   This example uses the default *nextcloud*.

4. Scroll down to or click on **Nextcloud Configuration** to show the app configuration settings.
   For a basic installation you can leave the default values in all settings except **Username** and **Password**.

   a. (Optional) Click in the **Certificate Configuration** field and select the certificate for Nextcloud if already created and using a certificate.

   b. Enter the Nextcloud username and password created in the [Before You Begin](#before-you-begin) section or existing Nextcould user account credentials.
   This example uses *admin* as the user.

   {{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfigUsernamePassword.png" alt="Nextcloud Configuration Username" id="Nextcloud Configuration Username" >}}

   TrueNAS populates **Nextcloud host** with the IP address for your TrueNAS server and **Nextcloud data directory** populates with the correct path.

   Select **Install ffmpeg** to automatically install the utility FFmpeg when the container starts.

   {{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfigEnvironmentVariable.png" alt="Nextcloud Configuration Environment Variable" id="Nextcloud Configuration Environment Variable" >}}

   TrueNAS populates the **Node Port to use for Nextcloud** field with the correct port number.
   To specify an optional **Nextcloud environment** name and value, click the **Add** button.

5. Enter the storage settings for each of the four datasets created for Nextcloud.

   a. Delect **Enable Host Path for Nextcloud Data Volum**, then browse to and select the **nextcloud/data** dataset to populate the **Host Path for Nextcloud Data Volume** field.

   {{< trueimage src="/images/SCALE/Apps/InstallNextcloudEnableHostPath.png" alt="Enable Nextcloud Host Path" id="EnableNextcloud Host Path" >}}

   b. Click **Add** to display the **Mount Path in Pod** and **Host Path** fields.
      Enter or browse to select the host path for the **nextcloud/opt** dataset to populate the **Host Path** field, then enter the path in the **Mount Path in Pod** field. This example uses the **/mnt/tank/nextcloud/opt** path.

   {{< trueimage src="/images/SCALE/Apps/InstallNetdataStorageExtraHostPath.png" alt="Add Host Path Nextcloud Data Volume" id="Add Host Path Nextcloud Data Volume" >}}

   c. Select **Enable Host Path for Postgres Data Volume**, and then enter or browse to the **nextcloud/db** dataset location in **Host Path for Postgres Data Volume**.

   {{< trueimage src="/images/SCALE/Apps/InstallNextcloudAddPostgresDataVolume.png" alt="Add Host Path for Postgres Data Volume" id="Add Host Path for Postgres Data Volume" >}}

   d. Select **Enable Host Path for Postgres Backup Volume**, and then enter or browse to the **nextcloud/dbbackup** dataset location in the **Host Path for Postgres Backup Volume**.

   {{< trueimage src="/images/SCALE/Apps/InstallNextcloudAddPostgresBackupVolume.png" alt="Add Host Path for Postgres Backup Volume" id="Add Host Path for Postgres Backup Volume" >}}

6. Select **Enable cronjobs for nextcloud** on the **CronJob configuration** screen.

   {{< expand "Nextcloud Cron Jobs" "v" >}}
   NextCloud cron jobs only run while the app is running. If you stop the app, the cron job(s) do not run until you start the app again.

   For more information on formatting and using cron jobs, see [Managing Cron Jobs]({{< relref "ManageCronJobsSCALE.md" >}}).
   {{< /expand >}}

7. Accept the remaining setting defaults on the **Scaling/Upgrade Policy** and **Advanced DNS Settings** screens.

8. Scroll up to review the configuration settings and fix any errors or **Save** to complete the installation.
   The **Installed** screen displays with the **nextcloud** app in the **Deploying** state.
   It changes to **Running** when ready to use.
   Click **Web Portal** on the **Application Info** widget to open the Nextcloud web portal sign-in screen.

{{< trueimage src="/images/SCALE/Apps/NextcloudSignInScreen.png" alt="Nextcloud Sign In Screen" id="Nextcloud Sign In Screen" >}}

## Troubleshooting Tips

### App Sticks in Deploying State
If the app does not deploy, add the **www-data** user and group to the **/nextcloud** dataset but do not set recursive.
Stop the app before editing the ACL permissions for the datasets.

Next, add the **www-data** user and group to the **/nextcloud/data** dataset. You can set this to recursive but it is not necessary.
To do this:
1. Select the dataset, scroll down to the **Permissions** widget, click **Edit** to open the **ACL Editor** screen.
2. Click **Add Item**, select **User** in **Who** and **www-data** in the **User** field, and select **Full Control** in **Permissions**.
3. Add an entry for the group by repeating the above steps but select **Group**.
4. Click **Save Access Control List**.

After adding both the user and group ACE entries for the **/nextcloud** dataset, select the **/nextcloud/data** dataset and edit the permissions the same way.
