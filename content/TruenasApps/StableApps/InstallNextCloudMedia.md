---
title: "Nextcloud"
description: "Provides instructions to configure TrueNAS and install Nextcloud to support hosting a wider variety of media file previews such as HEIC, Mp4, and MOV files."
weight:
alias:
 - /scale/scaleuireference/apps/nextcloudscale/
 - /scale/scaletutorials/apps/installnextcloudmedia/
 - /scale/scaletutorials/apps/chartapps/installnextcloudmedia/
 - /scale/scaletutorials/apps/stableapps/installnextcloudmedia/
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions
---

Nextcloud is a drop-in replacement for many popular cloud services, including file sharing, calendar, groupware, and more.
One of its more common uses for the home environment is serving as a media backup, and organizing and sharing service.
This procedure demonstrates how to set up Nextcloud on TrueNAS, and configure it to support hosting a wider variety of media file previews, including High Efficiency Image Container (HEIC), MP4, and MOV files.
The instructions in this article apply to TrueNAS 22.10.0 and later.

{{< include file="/static/includes/AppsUnversioned.md" >}}

## Before You Begin
Before you install the Nextcloud app:

{{< include file="/static/includes/apps/AppsStableBeforeYouBegin.md" >}}

{{< include file="/static/includes/apps/AppsBeforeYouBeginCertificate.md" >}}

<p style="margin-left: 33px">Adding a certificate is optional but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for Nextcloud. A certificate is not required to deploy the application.</p>

* Go to **Datasets** and select the pool or dataset where you want to place the Nextcloud dataset.
  For example, */tank/apps/nextcloud* or */tank/nextcloud*.
  You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).

  [Create the three dataset(s)]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
  Nextcloud uses **html** for app data, **data** for user data, and **postgres_data** for the postgres storage volume.
  Earlier versions of the Nextcloud app relied on four datasets.
  If upgrading with an existing deployment of this application the app is migrated to the new configuration.
  
  You can organize these datasets under a parent dataset to keep them separated from datasets for other potential applications.
  For example, create the *nextcloud* dataset and nest each dataset under it.
  If you organize the Nextcloud required datasets under a parent dataset you must configure ACL permissions for it.
  When you add the **postgres_data** dataset, it must have a **POSIX** ACL.

  {{< expand "Configure Nextcloud Dataset ACLs" "v" >}}
  You must configure the ACLs permissions for two datasets while on the **Datasets** screen: the parent dataset (i.e., the *nextcloud* dataset) and the **postgres_data** dataset.
  You can configure ACL permissions for the Nextcloud **html** and **data** datasets when prompted or configure them in the app installation wizard as described in the installation section.

  To configure the dataset ACL permissions from the **Datasets** screen, either select the **Set ACL for this dataset** option when prompted after adding the dataset or select the dataset row, and then click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.

  For the parent dataset, set the **owner** and **group** to **admin** or the name of your administration user account and click **Apply Owner** and **Apply Group**.
  Next add an ACE entry for the **netdata** user and give it full permissions.
  Click **Save Access Control List**.

  {{< trueimage src="/images/SCALE/Apps/AddNextcloudParentDatasetNetdataUserACL.png" alt="Add Nextcloud Parent Dataset ACL Permissions" id="Add Nextcloud Parent Dataset ACL Permissions" >}}

  When adding the **postgres_data** dataset, enter the dataset name and then click **Advanced Options** to show the advanced dataset settings.
  Scroll down to the **ACL Type** and select **POSIX** from the dropdown list, and then click **Save**.
  Only the **postgres_data** dataset requires the POSIX ACL type setting.

  {{< trueimage src="/images/SCALE/Apps/SetPostgres_dataACLtoPOSIX.png" alt="Set postgres_data Dataset ACL Type" id="Set postgres_data Dataset ACL Type" >}}

  Click **Set ACL for this dataset** to open the **Edit ACL** screen.
  Set the **owner** and **group** to **netdata** and click **Apply Owner** and **Apply Group**, and then with that ACL entry highlighted, assign full control permissions before you save the ACL.
  Click **Save Access Control List**.

  {{< trueimage src="/images/SCALE/Apps/AddPostgres_DataACLPermissions.png" alt="Add Nextcloud postgres_data Dataset ACL Permissions" id="Add Nextcloud postgres_data Dataset ACL Permissions" >}}

  {{< /expand >}}


{{< include file="/static/includes/apps/AppBeforeYouBeginNewUser.md" >}}

* Set up a Nextcloud account.
  If you have an existing Nextcloud account, you enter the credentials for that users in the installation wizard.
  If do not have an existing Nextcloud account you can create the account from the application install wizard.

### Installing the Nextcloud App
{{< hint info >}}
This basic procedure covers the required Nextcloud app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudScreen.png" alt="Install Nextcloud Screen" id="Install Nextcloud Screen" >}}

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

Next, enter the **Nextcloud Configuration** settings.
{{< expand "Entering Nextcloud Configuration Settings" "v" >}}
For a basic installation, you can accept default values, but enter the following values:
Enter the name of the administration user in **Admin User** and **Admin Password**.
If using an existing Nextcloud account, enter the administration credentials for that account or enter new to create new Nextcloud user account credentials.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfig1.png" alt="Nextcloud Configuration Username" id="Nextcloud Configuration Username" >}}

Select the APT packages you want to use. Nextcloud requires ffmpeg and smbclient. Click **Add** to the right of **APT Packages** twice to add two sets of **Package** fields.
Select **ffmpeg** in one, and **smbclient** in the other.
If also selecting **ocrmypdf**, also set the **Tesseract Language Codes** option to use.
Click **Add** to show the **Language** field then enter either **chi-sim** for simplified Chinese or **eng** for English.

Enter either the fully qualified domain name or the IP address and port for your TrueNAS system in **Host** as *##.###.###.##:port#* or *my.domain.com:port#*.
The **Data Directory Path** is pre-populated with the correct path.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfig2.png" alt="Enter Host and Other Config Settings" id="Enter Host and Other Config Settings" >}}

Enter a password in **Redis Password** to create a new credential or enter the existing password if you already have Redis configured in your Nextcloud account.
Enter a password in **Database Password** to create a new credential for the Nextcloud database or enter the existing password if you already have the Nextcloud account database configured.

Accept the remaining defaults in the **Nextcloud Configuration** section, but if setting up a cron job schedule, select **Enabled** under **Cron** to show the settings to allow you to schedule a cron job.

{{< expand "Nextcloud Cron Jobs" "v" >}}
NextCloud cron jobs only run while the app is running. If you stop the app, the cron job(s) do not run until you start the app again.

For more information on formatting and using cron jobs, see [Managing Cron Jobs]({{< relref "ManageCronJobsSCALE.md" >}}).
{{< /expand >}}

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).
{{< /expand >}}
Enter the network configuration settings. 
Enter the default port, **30027**, in **WebUI Port**, or enter an available port number of your choice.
See [Network Configuration](#network-configuration) below for more information on changing the default port.
This port must match the one used in **Host** above.

If you configured a certificate, select it in **Certificate ID**. A certificate is required if you want to select an external port other than the default **30027**.

Enter the storage settings for each of the datasets created for the Nextcloud app.
{{< expand "Configuring Nextcloud Storage" "v" >}}
Do not select **DEPRECATED: Old Storage Structure** if you are deploying Nextcloud for the first time as this slows down the installation and is not necessary.
If you are upgrading where your Nextcloud deployment in TrueNAS was a 1.x.x release, select this option.
  
Set **Host Path (Path that already exists on the system)** in **Type** for **Nextcloud AppData Storage**.
Select **Enable ACL**, and then either enter or browse to and select the **html** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudStorageAppDataACLandACESettings.png" alt="Add Nextcloud Storage for AppData" id="Add Nextcloud Storage for AppData" >}}

Select **Add** to the right of **ACL Entries**, add the **1001** user, and give it **FULL_CONTROL Access**.
Select **Force Flag**.

Repeat this step for the **Nextcloud User Data Storage** storage volume.
After setting **Type** to **Host Path (Path that already exists on the system)** and selecting **Enable ACL**, enter or browse to and select the **data** dataset.
Select **Add** to the right of **ACL Entries** to add the **1001** user, and give it **FULL_CONTROL Access**. Select **Force Flag**

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudStorageDataACLandACESettings.png" alt="Add Nextcloud Storage Volumes" id="Add Nextcloud Storage Volumes" >}}

Finally, set **Type** to **Host Path (Path that already exists on the system)** under **Nextcloud Postgres Data Storage**.
Do not select **Enable ACL**!
Either enter or browse to and select the **postgres_data** dataset to populate the **Host Path** field. Do not add an ACE entry for this dataset using the app installation wizard.
ACL permissions are set for this dataset in the [Before You Begin](#before-you-begin) section in the **Configure Nextcloud Dataset ACLs** expandable section.
{{< /expand >}}
Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **nextcloud** app in the **Deploying** state. Status changes to **Running** when ready to use.

Click **Web Portal** on the **Application Info** widget to open the Nextcloud web portal sign-in screen.

{{< trueimage src="/images/SCALE/Apps/NextcloudSignInScreen.png" alt="Nextcloud Sign In Screen" id="Nextcloud Sign In Screen" >}}

## Understanding App Installation Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

### Configuration Settings
Nextcloud configuration settings include setting up credentials, ACT packages (previously referred to as the commands), the host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule, and adding additional environment variables.

If you have an existing Nextcloud account add the credentials for that account in the **Admin User** and **Admin Password** fields.
If you do not have an existing account enter the name and password you want to use to create the Nextcloud login credentials.

{{< expand "Adding APT Packages" "v" >}}
Nextcloud has three APT package options:
* **ffmpeg**
* **smbclient**
* **ocrmypdf**

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfigAPTPackageOptions.png" alt="Configure Nextcloud APT Packages" id="Configure Nextcloud APT Packages" >}}

You must add both the **ffmpeg** and **smbclient** packages to deploy this app.
You can use **ocrmypdf** as well if needed, but you must also select the **Tesseract Language Code** to use. Options are **chi-sim** for Simplified Chinese or **eng** for English.
Click **Add** to the right of **APT Packages** for each option you want or need to add.
{{< /expand >}}
To configure the host, enter the IP address for the TrueNAS system where you install the Nextcloud app and the web port number separated by a colon. For example, <i>12.123.12.3</i><b>:30027</b>.
**30027** is the default port assigned to the TrueNAS Nextcloud app deployment. See [Network Configuration](#network-configuration) for more information on this port assignment and how to change it if so desired.

**Data Directory Path** shows the data directory where Nextcloud stores all files from the users.
It is prepopulated with **/var/www/html/data**  which is the default path inside the container. We recommend not changing this path.

Nextcloud Redis requires a password for access. If you have an existing Nextcloud account with Redis configured, enter that existing password here but if not, enter a password to use for Redis in Nextcloud.
Nextcloud also requires a password to secure access to the database.
If you have an existing Nextcloud account database with a password configured, enter it **Database Password**. If you do not have an existing database password enter a new password for the database. The default value is **nextcloud**.
The TrueNAS Nextcloud app passes these passwords to Nextcloud.

The **PHP Upload Limit (in GB)** applies a timeout to the client_max_body size in nginx, and the post_max_size and upload_max_filesize in PHP. Accept the default.

The **Max Execution Time (in Seconds)** sets the maximum execution time for Nextcloud. The default is **30** seconds but you can adjust this based upon your needs.

The **PHP Memory Limit (in MB)** sets a memory limit on PHP. The default is **512**, with a range of 128 to 4096.

The **OP Cache Memory Consumption (in MB)** sets the size of the memory cache consumption. The default is **128**, with a range of 128 to 1024.

If enabled, **Cron** shows the **Schedule** option. The default value is <b>*/5 * * * *</b>. Enter the schedule values to replace the asterisks based on your desired schedule.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfigCronSettings.png" alt="Configure Nextcloud Cron Settings" id="Configure Nextcloud Cron Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardEnvironVariablesSettings.md" >}}
Refer to Nextcloud documentation for more information on environment variables.

### Network Configuration
The default web port for Nextcloud is **30027**.

{{< include file="/static/includes/apps/AppsInstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/AppsInstallWizardAdvancedDNSSettings.md" >}}
{{< include file="/static/includes/apps/AppInstallWizardCertificateSettings.md" >}}

**Nginx Configuration** setting, **Proxy Timeout**, applies the time out (in seconds) to proxy connection, and proxy send and receive.
The default value is **60** with a minimum of 30 seconds.
Enable **Use a different port for URL rewrites** to show the **External Port** setting. When enabled, the URL write uses the access port instead of the node port (default 9001).
**External Port** default port is **443**.
Nextcloud continues to listen on the node port.

### Storage Configuration
TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

Nextcloud needs three datasets for host path storage volume configurations:
* **html** to use as the **AppData** storage volume.
* **data** to use as the **User Data** storage volume.
* **postgres_data** to use as the **Postgres Data** storage volume.

If you group these datasets under a parent dataset named *nextcloud*, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the **netdata** user.

The app installation wizard cannot set up the ACL type or correctly add user permissions for the postgres storage volume.
You must configure these outside the install wizard using the **Add Dataset** and **Edit ACL** screens.
When adding the **postgres_data** dataset set it up with a POSIX ACL, and add the **netdata** user as the owner user and group with full control permissions.

See the instructions provided in the [Before You Begin](#before-you-begin) section for instructions on creating both the parent and postgres_data datasets and configuring the ACL permissions for each.

{{< expand "Earlier Nextcloud Deployment Datasets" "v" >}}
Earlier deployments of the Nextcloud app use five datasets, the parent dataset for the application (**nextcloud**) and the four child datasets:
* **appdata** that contains HTML, apps, custom_themes, config, etc.
* **userdata** that contains the actual files uploaded by the user
* **pgdata** that contains the database files.
* **pgbackup** that contains the database backups

Upgrading to 24.10 migrates earlier Nextcloud Kubernetes app deployments to the current Docker Compose configuration.
{{< /expand >}}
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}
See **Mounting an SMB Share** below for details.

{{< expand "Creating App Datasets" "v" >}}
To create the Nextcloud app datasets, go to **Datasets**, select the dataset you want to use as the parent dataset, then click **Add Dataset** to [add a dataset]({{< relref "DatasetsScale.md" >}}).
In this example, we create the Nextcloud datasets under the root parent dataset **tank**.

Enter **nextcloud** in **Name**, and select **Apps** as the **Dataset Preset**.
Click **Advanced Options** if you want to make any other setting changes. Click **Save**.
When prompted, select **Return to Pool List** to configure permissions later after adding the other three datasets, or open the ACL editor to edit ACL permissions immediately after adding the dataset.

Next, select the **nextcloud** dataset, and click **Add Dataset** to add the first child dataset.
Enter **html** in **Name** and select **Apps** as the **Dataset Preset**.
Click **Advanced Options** if you want to make any other setting changes. Click **Save**.

Repeat this two more times to add the other child datasets to the **nextcloud** parent dataset.
When finished you should have the **nextcloud** parent dataset with three child datasets under it. Our example paths are:
* */mnt/tank/nextcloud/***html**
* */mnt/tank/nextcloud/***data**
* */mnt/tank/nextcloud/***postgres_data**

{{< trueimage src="/images/SCALE/Apps/AppsAddNextcloudDatasets.png" alt="Add Nextcloud Storage" id="Add Nextcloud Storage" >}}
{{< /expand >}}

#### ACL and ACE Settings

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

#### Mounting an SMB Share
TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/AppWizardStorageSMBOption.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}
{{< include file="/static/includes/apps/AppsInstallWizardGPUPassthrough.md" >}}

## Troubleshooting Tips
{{< hint type=info title="Update pre v. 2.0.4 Nextcloud Installations">}}
There are known issues with Nextcloud app releases earlier than 2.0.4.
Use the **Upgrade** option in the TrueNAS UI to update your Nextcloud release to 2.0.4.
For more information on known issues, click [here](https://github.com/truenas/charts/issues/2444).

For information on Nextcloud fixes involving TrueNAS apps, see [PR 2447 nextcloud:fixes](https://github.com/truenas/charts/pull/2447).
{{< /hint >}}

Nextcloud stability issues often result from misconfigured data ownership.
Review logs for denied permissions and correct any apparent errors.
To do this:
1. Go to **Apps** and select Nextcloud from the installed applications screen.
2. Click <i class="material-icons" aria-hidden="true" title="View Logs">article</i> **View Logs** to open a **Choose Pod** window.

{{< trueimage src="/images/SCALE/Apps/NextcloudLogsChoosePod.png" alt="Choose Pod Window" id="Choose Pod Window" >}}

3. Select the pod and container to review, enter a number of **Tail Lines** to view or accept the default 500, and click **Choose** to open the **Pod Logs** screen.

### App Sticks in Deploying State
If the app does not deploy, try adding the **www-data** user and group (33:33) to the **/nextcloud** dataset but do not set recursive.
Stop the app before editing the ACL permissions for the datasets.

Next, add the **www-data** user and group to the **appdata** and **userdata** datasets. You can set this to recursive, but it is not necessary.
To do this:
1. Select the dataset, scroll down to the **Permissions** widget, click **Edit** to open the **ACL Editor** screen.
2. Click **Add Item**, select **User** in **Who** and **www-data** in the **User** field, and select **Full Control** in **Permissions**.
3. Add an entry for the group by repeating the above steps but select **Group**.
4. Click **Save Access Control List**.

Finally, add the user **netdata** and group **docker** (999:999) to the **Postgres Data** and **Postgres Backup** datasets, following the same process.
Within the Nextcloud container, the user and group 999 map to **postgres**.
