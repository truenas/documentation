---
title: "Emby Server"
description: "Provides instructions to configure TrueNAS and install Emby Server for movies, TV shows, books, photos, music, and other media files."
weight:
aliases:
 - /truenasapps/stableapps/embyapp/
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions

---

{{< github-content 
    path="trains/stable/emby/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

Emby manages personal media libraries of home videos, movies, TV shows, photos, books, and music files.
Emby has two parts with at least one client and server.
The client or apps play back media files stored in the Emby server, and the server stores the media library.
TrueNAS Emby app provides the server function.
The Emby service uses a Web UI to manage user profiles that are allowed to access your media files and allows you to manage the media library of files.
Emby naming conventions for media files are important. Pay close attention to the instructions Emby provides to correctly configure the TrueNAS Emby app storage volumes, and when adding any labels to apply to media files.

## Before You Begin

Before you install the Emby app:

- Read the [Emby Support documentation](https://emby.media/support/articles/Home.html).
  Emby instructions in the **Media Preparation** and [**Library Setup**](https://emby.media/support/articles/Library-Setup.html) sections influence how you set up storage volume types and labels used in the TrueNAS **Install Emby** app wizard.
  Organize media files into folders by type, movies, photos, music, etc.
  Emby instructions say to include the release date of movies in the folder name as follows, *movieName (year)*.

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/EmbyDetailsScreen.png" alt="Nextcloud App Details Screen" id="Nextcloud App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}
<div style="margin-left: 33px">The Emby run-as user ID is <b>0</b>. The app also includes the default <b>apps</b> user ID <b>568</b>.
If you create a new TrueNAS user to serve as the administrator for the app, make note of the UID, and add it to the ACL permissions for each dataset created for and used by the app.</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
Emby expects only one host path dataset storage volume, <b>config</b>, but you can create more datasets if you want to add additional storage volumes for the app to use, such as for a library, logs, or an SMB share.
These extra storage volumes are not required and can be added after installing the app.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

## Installing the Application

{{< hint info >}}
This basic procedure covers the required Emby app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallEmbyScreen.png" alt="Install Enby Screen" id="Install Emby Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Enter the **Emby Configuration** settings.
{{< include file="/static/includes/apps/InstallWizardTimezoneSettings.md" >}}

The TrueNAS app is configured with all the required environment variables required to deploy the app.
If you want to customize the container, click **Add** to the right of **Additional Environment Variables** for each to enter the variable(s) and values(s).

Accept the default values in **User and Group Configuration** and **Network Configurations**.
(Optional) If you created a new user to administer the app, enter that user ID in the user and group fields.
See [User and Group Configuration](#user-and-group-configuration) and [Network Configuration](#network-configuration) for more details.
Leave **Host Network** unselected.

Add your **Storage Configuration** settings.

For **Emby Configuration Storage**, set the **Type** to **Host Path (Path that already exists on the system)**.
Select **Enable ACL** then enter or browse to and select the **config** dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallEmbyStorageConfigHostPathACLandACESettings.png" alt="Add Emby Config ACL and ACE Settings" id="Add Emby Config ACL and ACE Settings" >}}

Click **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For Emby, click twice to add the **568** and **0** user IDs. Give each **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the steps above for each storage volume you plan to add, for example, *library* for media data storage or *embysmb* for an SMB share volume.
See [Storage Configuration Settings](#storage-configuration-settings) below for more information.

Accept the defaults in **Resources Configuration**, and select the GPU option if applicable.

Click **Install**. A progress dialog displays before switching to the **Installed** applications screen.
The **Installed** screen displays with the **Emby** app in the **Deploying** state. Status changes to **Running** when ready to use.

{{< trueimage src="/images/SCALE/Apps/EmbyAppRunning.png" alt="Emby App Installed and Running" id="Emby App Installed and Running" >}}

Select the Emby app row, and click **Web Portal** on the **Application Info** widget to open the Emby web portal sign-in screen or if adding a new Emby account, to show the Emby account creation screens.

{{< trueimage src="/images/SCALE/Apps/EmbySignInScreen.png" alt="Emby First Time Sign In Screen" id="Emby First Time Sign In Screen" >}}

Select the language from the **Preferred display language** dropdown list, then click **Next** to advance to the **Create Your First User** screen.

{{< trueimage src="/images/SCALE/Apps/EmbyCreateNewUserAcctScreen.png" alt="Emby Create First User Screen" id="Emby Create First User Screen" >}}

Click **Next** to show the Emby **Setup Libraries Screen** where you can add your media libraries.

{{< trueimage src="/images/SCALE/Apps/EmbySetupMediaLibrariesScreen.png" alt="Emby Setup Libraries Screen" id="Emby Setup Libraries Screen" >}}

Click **Next** to continue setting up your Emby server account. Advance through the setup screens until complete, then click **Finish**.

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install Emby** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Emby Configuration Settings

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

#### Adding Environment Variables

Emby does not use environment variables to customize client or server settings in their Web UI.
The TrueNAS Emby app is preconfigured with all environment variables required to deploy the application.

### User and Group Configuration Settings

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration Settings

The default web port for the TrueNAS Emby app is **9096**.
Emby automatically maps port number assignments that do not match their port numbers, **8096** for HTTP, and **8920** for HTTPS usage and connections.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="static/includes/apps/InstallWizardHostNetworkSettings.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}

### Storage Configuration Settings

TrueNAS provides two options for storage volumes: ixVolumes and host paths.
Emby only expects one host path storage volume, **config** to hold app configuration data, but you can add additional storage volumes for media library, or log storage if you choose.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

If you organize the **config** dataset under a parent dataset named **emby**, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the **root** user.

You can add extra storage volumes during the app installation, or edit the application after it deploys. Stop the app before editing settings.
{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Emby** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Emby, the run-as users are **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.
{{< expand "Configuring Additional Storage Volumes" "v" >}}
If you choose to configure additional storage volumes, click **Add** to the right of **Additional Storage** to show the **Type** field with three options:

- **HostPath (Path that already exists on the system)** requires an existing dataset.
- **ixVolume (Dataset created automatically by the system)** creates a storage volume in the hidden **ix-apps** dataset.
- **SMB/CIFS Share (Mounts a volume to a SMB share)** shows settings to create an SMB share storage volume.
  You must create the SMB share user and share dataset before adding this type.
- **Anonymous (Temporary directory created on the disk)** creates a temporary directory in the hidden **ix-apps** dataset.
- **Tmpfs (Temporary directory created on the RAM)** creates a temporary directory in RAM.
{{< /expand >}}

If adding an SMB share as an additional storage volume, create the SMB dataset and share user(s), and add the user ID for the share user(s) to the dataset ACL.
{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Labels Configuration

Emby uses metadata to add information to media files, such as where media files are saved, the language used, and parental controls.
Emby uses tags to add identification information to media files.

{{< include file="/static/includes/apps/InstallWizardLabelsConfiguration.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallEmbyLabelsConfig.png" alt="Labels Configuration Settings" id="Labels Configuration Settings" >}}

### Resources Configuration

{{< trueimage src="/images/SCALE/Apps/InstallEmbyResourcesConfig.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}
