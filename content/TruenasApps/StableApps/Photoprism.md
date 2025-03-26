---
title: "Photoprism"
description: "Provides installation instructions to configure and deploy the Photoprism app in TrueNAS."
weight:
aliases:
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions
- TrueNAS photo applications
---

{{< github-content 
    path="trains/stable/photoprism/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

The TrueNAS Photoprism app provides an efficient way to install, manage, and utilize the various capabilities of Photoprism. TrueNAS deploys the Photoprism app in a Docker container using Docker Compose. After successfully deploying the app, you can access the Photoprism web interface from TrueNAS. The Photoprism interface allows you to organize, search, and share your photos with advanced features like AI-based image classification, facial recognition, and geotagging. You can also manage photo collections, create albums, and utilize powerful search tools to find specific images based on metadata and tags.

## Before You Begin

Prepare TrueNAS before installing Photoprism by:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/PhotoprismAppDetailsScreen.png" alt="Photoprism Information Screen" id="Photoprism Information Screen" >}}</div>

<p style="margin-left: 33px">Photoprism uses three datasets: <b>import</b>, <b>storage</b>, and <b>originals</b>. Ensure that your <b>import</b> dataset is configured with a functioning SMB share, as this is the dataset Photoprism uses to access and import your desired photos.
Follow the instructions below in **Creating Datasets for Apps** to correctly set up these datasets.</p>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

  <p style="margin-left: 33px">Create a parent dataset, such as <i>appName</i>, and then the storage datasets (<b><i>config</i></b> and <b><i>data</i></b>) under it.
  Select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them in the app.</p>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

## Installing the Application

{{< hint info >}}
This basic procedure covers the required Photoprism app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

Go to **Apps**, click on **Discover Apps**, and locate the Photoprism widget by either scrolling down to it or begin typing the name into the search field.
To locate the Photoprism app widget, begin typing Photoprism into the search field to show app widgets matching the search input.

{{< trueimage src="/images/SCALE/Apps/DiscoverScreenLocatePhotoprism.png" alt="Example of Locating an App Widget" id="Example of Locating an App Widget" >}}

If this is the first application installed, TrueNAS displays a dialog about configuring apps.

{{< expand "Configuring Apps Dialog" "v" >}}
{{< trueimage src="/images/SCALE/Apps/AppsInformationDialog.png" alt="Apps Information Dialog" id="Apps Information Dialog" >}}

Click **Confirm** then **Agree** to close the dialog and open the application details screen.
{{< /expand >}}
If not the first time installing apps the dialog does not show, click on the widget to open the app information screen.

Click **Install** to open the Photoprism installation wizard.

Application configuration settings are grouped into several sections, each explained below in **Understanding App Installation Wizard Settings**.
To find specific fields begin typing in the **Search Input Fields** search field to show the section or field, scroll down to a particular section, or click on the section heading in the list of sections on the upper-right of the wizard screen.

{{< trueimage src="/images/SCALE/Apps/InstallPhotoprismScreen.png" alt="Install Photoprism Screen" id="Install Photoprism Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the **Photoprism Configuration** settings and enter an **Admin Password**.

The TrueNAS app is configured with all the required environment variables, but if you want to further customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

(Optional) If you created a new user to administer apps, enter that user ID in the user and group fields.
See [User and Group Configuration](#user-and-group-configuration) and [Network Configuration](#network-configuration) for more details.

Leave **Host Network** unselected.

Add your **Storage Configuration** settings.

Set **Host Path (Path that already exists on the system)** in **Type** for **Photoprism Import Storage**.
Select **Enable ACL**, and then enter or browse to select the **import** dataset to populate the **Host Path** field. This is the dataset that should have a usable SMB share configured.

{{< trueimage src="/images/SCALE/Apps/InstallPhotoprismStorageConfigDataACLandACE.png" alt="Add Photoprism Data Storage" id="Add Photoprism Data Storage" >}}

Select **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For example, add the **568** user and **0**, and give each **FULL_CONTROL Access**.

Repeat the above storage configuration steps for the **Photoprism Storage** and **Photoprism Originals Storage** options, ensuring that your **storage** and **originals** datasets are set as the **Host Path (Path that already exists on the system)** for each configuration.

Select **Force Flag**.

See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **nextcloud** app in the **Deploying** state. Status changes to **Running** when ready to use.

{{< trueimage src="/images/SCALE/Apps/PhotoprismInstalled.png" alt="Photoprism Installed" id="Photoprism Installed" >}}

Click **Web UI** on the **Application Info** widget to open the Photoprism web portal sign-in screen. 

Sign in using the **admin** username and the password you set when configuring Photoprism.

{{< trueimage src="/images/SCALE/Apps/PhotoprismSignInScreen.png" alt="Photoprism Sign In Screen" id="Photoprism Sign In Screen" >}}

{{< trueimage src="/images/SCALE/Apps/PhotoprismMainDashboard.png" alt="Photoprism Dashboard" id="Photoprism Dashboard" >}}

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install Photoprism** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Photoprism Configuration Settings

Photoprism configuration settings include setting up credentials, *APT packages* (previously referred to as the commands), the *host IP and port, data directory path, upload limits, execution times, memory limits and cache memory consumption, adding a cron job with schedule, and adding additional environment variables*.

If you have an existing Photoprism account, add the credential for that account in the **Admin Password** field.
If you do not have an existing account, enter the name and password you want to use to create the Photoprism login credentials.

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}
Refer to [Photoprism documentation](https://docs.photoprism.app/getting-started/config-options/) for more information on environment variables.

### User and Group Configuration

Some TrueNAS apps have predefined run-as user and group IDs. These assignments vary based on the app train and other variables such as installing but not running as the root user.

Default user and group IDs are:
* **568** (**apps** user), used in some **community** apps and all apps in the **enterprise** train
* **0** (**root** user).

Accept the default user and group ID in the **User and Group Configuration** section or enter the user ID for a new TrueNAS user created to serve as the administrator for Photoprism.

Create any app administrator user before installing the application, and take note of the UID.
Enter this user ID when configuring the user for the app and as the user when setting up storage volume permissions.

### Network Configuration

The default web port for Photoprism is **20800**.
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

TrueNAS provides two options for storage volumes: ixVolumes and host paths.

{{< expand "Setting the Storage Volume Type" "v" >}}
To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This adds a storage volume for the application nested in the hidden **ix-apps** dataset, located on the pool selected as the apps pool.
Using ixVolume is intended for a test deployment of an app but not for a full app deployment, as data does not persist for these volumes after deleting the app where a dataset does.
Datasets make recovering, transferring, and accessing app configuration, user, or other data possible where ixVolumes do not.

To use an existing dataset, which is the recommended option, set **Type** to **Host Path (Path that already exists on the system)**.

If the install wizard shows a **Mount Path**, either accept the default value or enter the correct mount path. For example, if the dataset name is *data*, enter */data* as the mount path.

During this step, ensure that the **import** dataset is configured with an SMB share and selected as the host path for the **Photoprism Import Storage** **Type**, as this is the dataset Photoprism utilizes for the import process.

Select **Enable ACL** to define ACL permissions and populate the **Host Path** field by either entering or browsing to and selecting the dataset location.
Populating the **Host Path** with the dataset location and then selecting **Enable ACL** clears the values, so we recommend selecting **Enable ACL** before entering the host path.

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

Repeat the above for each required dataset.
{{< /expand >}}

You can add extra storage volumes at the time of installation or edit the application after it deploys. Stop the app before editing settings.

{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Photoprism** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}
{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, and scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod. The SMB share on your **import** dataset from prior steps does not require further configuration in this step.
{{< include file="/static/includes/apps/InstallAppsStorageConfig2.md" >}}

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallPhotoprismResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}} -->

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}

{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}
