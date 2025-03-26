---
title: "Nextcloud"
description: "Provides instructions to configure TrueNAS and install Nextcloud to support hosting a wider variety of media file previews such as HEIC, Mp4, and MOV files."
weight:
aliases:
 - /scale/scaleuireference/apps/nextcloudscale/
 - /scale/scaletutorials/apps/installnextcloudmedia/
 - /scale/scaletutorials/apps/chartapps/installnextcloudmedia/
 - /scale/scaletutorials/apps/stableapps/installnextcloudmedia/
 - /scale/scaletutorials/apps/communityapps/installnextcloudmedia/
 - /truenasapps/communityapps/installnextcloudmedia/
 - /truenasapps/stableapps/installnextcloudmedia/
tags:
- apps
- media
- imaginary
- redis
keywords:
- nas data storage
- software storage solutions
- imaginary
- redis
---

{{< github-content 
    path="trains/stable/nextcloud/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

Nextcloud is a drop-in replacement for many popular cloud services, including file sharing, calendar, groupware, and more.
One of its more common uses for the home environment is serving as a media backup, and organizing and sharing service.

Nextcloud 24 introduced support for handing off image preview thumbnail generation to an external service, Imaginary, a small HTTP server written in GO.
It receives images over a REST API. Imaginary can upscale, downscale, crop, or resize images.
TrueNAS Nextcloud app users can include Imaginary in their app deployment.

This procedure demonstrates how to set up Nextcloud on TrueNAS and configure it to support hosting a wider variety of media file previews, including High-Efficiency Image Container (HEIC), MP4, and MOV files.
TrueNAS Nextcloud app postgres options include a postgres image selector and data storage volume.
TrueNAS Nextcloud app provides backward compatibility and migration of early deployments of Nextcloud.

TrueNAS offers one deployment option for setting up Nextcloud, a Linux Debian-based TrueNAS version application available in TrueNAS releases 24.10 and later.
The instructions in this article apply to these TrueNAS 24.10 and later releases.

TrueNAS offered a FreeBSD-based TrueNAS Nextcloud plugin in releases 13.0 and 13, but it is no longer available in TrueNAS 13.0 and is soon to be unavailable in 13.3. Refer to release notes for more information on upcoming and current changes.
For more information on the FreeBSD-based Nextcloud plugin, see [Nextcloud]({{< relref "/content/solutions/integrations/nextcloud.md" >}}).



## Before You Begin

Before you install the Nextcloud app:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/NextcloudDetailsScreen.png" alt="Nextcloud App Details Screen" id="Nextcloud App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px">Nextcloud requires three datasets: <b>html</b> for app data, <b>data</b> for user data, and <b>postgres_data</b> for the database data storage volume.
  Earlier versions of the Nextcloud app relied on four datasets.
  If upgrading with an existing deployment of this application, the installation wizard offers an option to migrate these to the new configuration.</div>
  
<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

<div style="margin-left: 33px">You can modify dataset ACLs at the time of creation, or later in the app.
  Adding ACL permissions in the installation wizard is the recommended method.

  {{< include file="/static/includes/apps/InstallWizardPostgresStorageAutomaticPermissions.md" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}}

<div style="margin-left: 33px">Adding a certificate is optional but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for Nextcloud. A certificate is not required to deploy the application.

* Set up a Nextcloud account.
  If you have an existing Nextcloud account, you enter the credentials for that user in the installation wizard.
  If you do not have an existing Nextcloud account, you can create one using the application install wizard.</div>

### Installing the Nextcloud App

{{< hint info >}}
This basic procedure covers the required Nextcloud app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}
{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudScreen.png" alt="Install Nextcloud Screen" id="Install Nextcloud Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Next, enter the **Nextcloud Configuration** settings.
{{< expand "Entering Nextcloud Configuration Settings" "v" >}}
For a basic installation, you can accept default values, but enter the following values:
Enter the name of the administration user in **Admin User** and **Admin Password**.
If using an existing Nextcloud account, enter the administration credentials for that account or enter new to create new Nextcloud user account credentials.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfig1.png" alt="Nextcloud Configuration Username" id="Nextcloud Configuration Username" >}}

Select the APT packages you want to use. Nextcloud requires **ffmpeg** and **smbclient**. Click **Add** to the right of **APT Packages** twice to add two sets of **Package** fields.
Select **ffmpeg** in one, and **smbclient** in the other.
If selecting **ocrmypdf**, also set the **Tesseract Language Codes** option to use.
Click **Add** to show the **Language** field then enter either **chi-sim** for simplified Chinese or **eng** for English.
See [Nextcloud Configuration Settings](#nextcloud-configuration-settings) below for more information.

Enter either the fully qualified domain name or the IP address and port for your TrueNAS system in **Host** as *##.###.###.##:port* or *my.domain.com:port*.
The **Data Directory Path** is pre-populated with the correct path.

Enable **Imaginary** if you want to use this option to modify images.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfig2.png" alt="Enter Host and Other Config Settings" id="Enter Host and Other Config Settings" >}}

Enter a password in **Redis Password** to create a new credential or enter the existing password if you already have Redis configured in your Nextcloud account.
Enter a password in **Database Password** to create a new credential for the Nextcloud database or enter the existing password if you already have the Nextcloud account database configured. Nextcloud does not URL encode in some places so do not use the ampersand (&), at (@), hashtag (#), or percent (%) characters in the Redis password.

Accept the remaining defaults in the **Nextcloud Configuration** section. However, if you are setting up a cron job schedule, select **Enabled** under **Cron** to show the settings that allow you to schedule a cron job.

{{< expand "Nextcloud Cron Jobs" "v" >}}
NextCloud cron jobs only run while the app is running. If you stop the app, the cron job(s) do not run until you start the app again.

For more information on formatting and using cron jobs, see [Managing Cron Jobs]({{< relref "ManageCronJobsSCALE.md" >}}).
{{< /expand >}}

The TrueNAS app is configured with all the required environment variables, but if you want to customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).
{{< /expand >}}

Enter the network configuration settings.
Accept the default port, **30027**, in **WebUI Port**, or enter an available port number of your choice.
See [Network Configuration](#network-configuration) below for more information on changing the default port.
This port must match the one used in **Host** above.

If you configured a certificate for Nextcloud, select it in **Certificate ID**.
A certificate is not required unless you want to use an external port other than the default **30027**.

Add your **Storage Configuration** settings.

{{< hint type=info >}}
Do not select **DEPRECATED: Old Storage Structure** if you are deploying Nextcloud for the first time as this slows down the installation and is unnecessary.
If you are upgrading where your Nextcloud deployment in TrueNAS was a 1.x.x release, select this option.
{{< /hint >}}

Set **Type** to **Host Path (Path that already exists on the system)** for **AppData Storage**.
Select **Enable ACL**, then enter or browse to select the **html** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudStorageAppDataACLandACESettings.png" alt="Add Nextcloud Storage for AppData" id="Add Nextcloud Storage for AppData" >}}

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
Set **ID Type** to **Entry is for a USER**, enter the **0** in **ID**, and give it full control permissions.
For example, add the **0** user, and give each **FULL_CONTROL Access**. Repeat this for the **568** user.

Select **Force Flag** to allow upgrading the app when the dataset has existing data.

Repeat the storage steps above to configure the host path for **Nextcoud Data Storage**. Enter or select the **data** dataset. 

To configure the **Nextcloud Postgres Data Storage** host path, do not select **Enable ACL**!
Set **Type** to **Host Path (Path that already exists on the system)**, then enter or browse to select the **postgres_data** dataset to populate the **Host Path** field.
Select **Automatic Permissions**. This does not show if you selected **Enable ACL**.

{{< trueimage src="/images/SCALE/Apps/InstallWizardPostgresDatasetAutomaticPermissions.png" alt="Postgres Storage Automatic Permissions" id="Postgres Storage Automatic Permissions" >}}

See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **nextcloud** app in the **Deploying** state. Status changes to **Running** when ready to use.

Click **Web UI** on the **Application Info** widget to open the Nextcloud web portal sign-in screen.

{{< trueimage src="/images/SCALE/Apps/NextcloudSignInScreen.png" alt="Nextcloud Sign In Screen" id="Nextcloud Sign In Screen" >}}

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Nextcloud Configuration Settings

Nextcloud configuration settings include setting up credentials, APT packages (previously referred to as the commands), the host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule, and adding additional environment variables.

If you have an existing Nextcloud account add the credentials for that account in the **Admin User** and **Admin Password** fields.
If you do not have an existing account enter the name and password you want to use to create the Nextcloud login credentials.

{{< expand "Adding APT Packages" "v" >}}
Nextcloud has three APT package options:

* **ffmpeg**
* **smbclient**
* **ocrmypdf**

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfigAPTPackageOptions.png" alt="Configure Nextcloud APT Packages" id="Configure Nextcloud APT Packages" >}}

You must add both the **ffmpeg** and **smbclient** packages to deploy this app.

You can also use **ocrmypdf** if needed, but you must select the **Tesseract Language Code**. Options are **chi-sim** for Simplified Chinese or **eng** for English.
For more information on tesseract languages to install for OCRmypdf, see [here](https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html) for a list of language codes.
Entering the wrong language code prevents the container from starting. Only takes effect if **ocrmypdf** is selected.

Click **Add** to the right of **APT Packages** for each option you want or need to add.
{{< /expand >}}

To configure the **Host**, enter the IP address for the TrueNAS system where you install the Nextcloud app and the web port number separated by a colon. For example, <i>12.123.12.3</i><b>:30027</b>.
**30027** is the default port assigned to the TrueNAS Nextcloud app deployment.
See [Network Configuration](#network-configuration) for more information on this port assignment and how to change it.

**Data Directory Path** shows the data directory where Nextcloud stores all files from the users.
It is prepopulated with **/var/www/html/data**  which is the default path inside the container. We recommend not changing this path.

Nextcloud Redis requires a password for access. If you have an existing Nextcloud account with Redis configured, enter that existing password here but if not, enter a password to use for Redis in Nextcloud.
Nextcloud also requires a password to secure access to the database.
If you have an existing Nextcloud account database with a password configured, enter it **Database Password**.
Enter a new password if you do not have an existing database password. The default value is **nextcloud**.
The TrueNAS Nextcloud app passes these passwords to Nextcloud.

The **PHP Upload Limit (in GB)** applies a timeout to the client_max_body size in nginx, and the post_max_size and upload_max_filesize in PHP. Accept the default.

The **Max Execution Time (in Seconds)** sets the maximum execution time for Nextcloud. The default is **30** seconds, but you can adjust this based on your needs.

The **PHP Memory Limit (in MB)** sets a memory limit on PHP. The default is **512**, with a range of 128 to 4096.

The **OP Cache Memory Consumption (in MB)** sets the size of the memory cache consumption. The default is **128**, with a range of 128 to 1024.

If enabled, **Cron** shows the **Schedule** option. The default value is <b>*/5 * * * *</b>. Enter the schedule values to replace the asterisks based on your desired schedule.

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudConfigCronSettings.png" alt="Configure Nextcloud Cron Settings" id="Configure Nextcloud Cron Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardEnvironVariablesSettings.md" >}}
Refer to Nextcloud documentation for more information on environment variables.

### Network Configuration

The default web port for Nextcloud is **30027**.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

TrueNAS provides two options for storage volumes: ixVolumes and host paths. 

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

Nextcloud needs three datasets for host path storage volume configurations:

* **html** to use as the **AppData** storage volume.
* **data** to use as the **User Data** storage volume.
* **postgres_data** to use as the **Postgres Data** storage volume.

If you nest these datasets under a parent dataset named *nextcloud*, you can create this nextcloud dataset with the **Dataset Preset** set to **Generic** or **Apps**.
You can configure the ACL for this dataset from the **Permissions** widget on the **Datasets** screen.
If the app has postgres storage volumes, the process is easier and less prone to permissions errors if you use the **Automatic Permissions** option in the postgres storage volume section of the install Wizard. 

{{< expand "Earlier Nextcloud Deployment Datasets" "v" >}}
Earlier deployments of the Nextcloud app use five datasets, the parent dataset for the application (**nextcloud**) and the four child datasets:

* **appdata** that contains HTML, apps, custom_themes, config, etc.
* **userdata** that contains the actual files uploaded by the user
* **pgdata** that contains the database files.
* **pgbackup** that contains the database backups

Upgrading to 24.10 migrates earlier Nextcloud Kubernetes app deployments to the current Docker Compose configuration.
{{< /expand >}}

#### Setting Dataset ACL Permissions
You can configure ACL permissions for the required dataset in the **Install Nextcloud** wizard, or from the **Datasets** screen any time after adding the datasets.

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

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, then scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Nextcloud, the run-as users are **0** for **root** and **568** for Imaginary. Add a user entry for these users.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

#### Mounting an SMB Share

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Labels Configuration 

{{< include file="/static/includes/apps/InstallWizardLabelsConfiguration.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallNextcloudResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}

### Integrating Nextcloud and Collabora

Users can use Collabora and Nextcloud together. Collabora allows users to open and edit documents stored in their Nextcloud account.
This integration allows users to edit a document simultaneously while providing live comments, suggestions, and version histories.

Users with Collabora and Nextcloud applications installed in TrueNAS can access the Nextcloud UI **Apps** section to find the **Collabora Online** application.

After installing Collabora Online, navigate to the **Collabora Online** tab in Nextcloud and enter your Collabora server address in the **Collabora Online server** field.
This integrates Collabora and Nextcloud accounts, enhancing document access and editing capabilities.

For more details on installing Collabora, visit the [Collabora TrueNAS tutorial](https://www.truenas.com/docs/truenasapps/stableapps/collabora/).

## Troubleshooting Tips

### App Sticks in Deploying State
If the app shows errors and does not deploy, the traceback should provide information on where the problem lies.
If you opted to manually configure ACLs for a parent dataset and the storage volumes, or you did not select **Automatic Permissions** for the postgres storage volume configuration, opting instead to select **Enable ACL** and manually adding ACL entries, you might have the parent dataset and postgress storage volume permissions incorrectly set.
In this scenario, you might need to add the **www-data** user and group (33:33) or some other user specified in the traceback to the *nextcloud* dataset. Do not set recursive for this user.

To avoid this problem, select **Automatic Permissions** for the postgres host path storage volume before you click **Install** in the wizard.

If you are deploying the app for the first time and encounter this error, you can delete all datasets, recreate them, and then configure the app installation wizard again.
This removes any permissions issues with the deleted datasets.

You can also try to reset all permissions on the original datasets until the app installs without errors.
Stop the app before editing the ACL permissions for the datasets.

Add the **www-data** user and group, or the one specified in the traceback, to the parent, **html**, and **data** datasets. Do not set the parent dataset to recursive.
You can set recursive on the **data** and **html** datasets, but it is unnecessary.
To do this:

1. Select the dataset, scroll down to the **Permissions** widget, click **Edit** to open the **ACL Editor** screen.
2. Click **Add Item**, select **User** in **Who** and **www-data** in the **User** field, and select **Full Control** in **Permissions**.
3. Add an entry for the group by repeating the above steps but select **Group**.
4. Click **Save Access Control List**.

Finally, add the user **netdata** and group **docker** (999:999) to the **Postgres Data** dataset, following the same process.
Within the postgres container, the user and group 999 map to **postgres**.
