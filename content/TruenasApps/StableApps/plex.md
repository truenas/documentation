---
title: "Plex"
description: "Provides installation instructions to configure and deploy the Plex app in TrueNAS."
weight:
aliases:
 - /truenasapps/stableapps/plexapp/
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions
- TrueNAS media applications
---

{{< github-content 
    path="trains/stable/plex/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

Plex is a media server that allows you to manage and stream your media (music, movies, live TV, etc.) to any Plex client.

## Before You Begin

Before you install the Plex app:

* Set up a Plex account.

  After installing the Plex app and logging into Plex through the **Web Portal** button in TrueNAS, if you have not already configured your Plex account media server, Plex shows the configuration screens to set up the media server, add libraries, and customize your Plex account.

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/PlexDetailsScreen.png" alt="Plex App Details Screen" id="Plex App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px">Plex uses for storage volumes: <b>data</b> to use as the Plex data directory for database and metadata storage, and <b>config</b> for Plex application configuration storage.

  You can create a dataset or use a temporary directory option for log data.
  Transcode data is not useful or meant for persistent storage, so using a temporary directory is a better option.</p>

  {{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}

  You can set up the permissions (ACLs) for these datasets after adding them using the <b>Edit ACL</b> screen, or wait and use the <b>Install Plex</b> wizard ACL settings to add permissions.
  You can also edit permissions after using either method.</div>
  
### Installing the Plex App

{{< hint info >}}
This basic procedure covers the required Plex app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallPlexScreen.png" alt="Install Plex Screen" id="Install Plex Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Next, enter the **Plex Configuration** settings.
For a basic installation, you can accept the default values.

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

While logged into your Plex account, go to the [Plex **Claim Code** web page](https://www.plex.tv/claim/) to copy the **Claim Code** string provided by Plex, and then paste it into the TrueNAS **Install Plex** wizard **Claim Token** field. This authentication token provides TrueNAS access to your Plex account.

{{< trueimage src="/images/SCALE/Apps/InstallPlexConfig1.png" alt="Plex Configuration Settings" id="Plex Configuration Settings" >}}

Next, either accept the default values shown or enter the IP addresses for local network connections (Ethernet or WiFi routers) you want in your Plex network.
See [Setting Up Local Network](#setting-up-local-network) below for more information.

You can add devices and additional environment variables, but this is not required to deploy the app.
For more information,  see [Adding Devices](#adding-devicess) below.

Accept the default values in **User and Group Configuration** and **Network Configurations**.
(Optional) If you created a new user to administer apps, enter that user ID in the user and group fields.
See [User and Group Configuration](#user-and-group-configuration) and [Network Configuration](#network-configuration) for more details.

Add your **Storage Configuration** settings.
{{< expand "Configuring Plex Storage" "v" >}}
Select **Add** to the right of **ACL Entries** for each user or group entry you want to add.
For example, add the **568** user and **0**, and set the permission level to **FULL_CONTROL Access**.

Select **Force Flag**.

Repeat the steps above for the **Plex Configuration**.
Repeat the same steps when creating and using a dataset for the **Plex Logs** storage volumes, but if not, set the storage volume type to either **temporary** or **tmpfs** for both **Logs** and **Transcode** storage volumes.
{{< /expand >}}

Add any labels you want to use to organize your media files.
For example, labeling video files as *movies* or *sports*, etc. Labels allow you to create custom groupings or classifications beyond the default metadata provided by Plex.

Accept the defaults in **Resources Configuration** and select the GPU option if you have a compatible GPU installed in the system and want to use it for hardware-accelerated transcoding.

Click **Install**. A progress dialog opens before switching to the **Installed** applications screen.
The **Installed** screen shows the **plex** app in the **Deploying** state until fully installed and then the status changes to **Running** when ready to use.

Click **Web Portal** on the **Application Info** widget to open the Plex web portal sign-in screen.

{{< trueimage src="/images/SCALE/Apps/PlexAppWebPortalSignInScreen.png" alt="Plex Sign In Screen" id="Plex Sign In Screen" >}}

After signing in, Plex guides you through several initial media server configuration screens if this is a new account or shows your default Plex media screen for your existing configured account.

## Understanding App Installation Wizard Settings

The following section provides more detailed explanations of the settings in each section of the **Install** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Plex Configuration Settings

Plex configuration settings include setting up the server timezone, authentication to the Plex account, location of the Plex container image, local network settings, and adding devices or additional environment variables to apply to the container.

{{< trueimage src="/images/SCALE/Apps/InstallPlexConfig1.png" alt="Install Plex Configuration Settings" id="Install Plex Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

TrueNAS authenticates to the Plex account using a [Plex claim token](https://www.plex.tv/claim/).
While signed into your Plex account, copy the token provided by Plex into the **Claim Token** field.
The Plex app does not deploy if you do not include this token.

Accept the default value in **Image** to use the container image for the TrueNAS app.

#### Setting Up Local Network

TrueNAS shows the default IP addresses detected for your system.
If these address fields are not shown in the wizard, your network is considered to be on the external network.

Accept the default values or enter IP addresses for local network connections (Ethernet or WiFi routers) you want to add to your Plex local network.
These addresses define how Plex interacts with devices and services on your network and can optimize how your Plex media server communicates with devices in your home.

Specified addresses are considered on the local network when enforcing bandwidth restrictions.
If left blank, only the subnet for the server is considered to be on your local network.
When the host network is not enabled, the server subnet is the network for Docker.
Therefore, all connections from other clients are considered to be on the external network.
If set, all other IP addresses are considered to be external to your local network.

#### Adding Devices in the Container

Plex account settings allow you to add and manage devices, such as a USB TV tuner or similar hardware, that connect to your media server, both on the local network you define and remotely from external network connections.
Adding devices in the TrueNAS Plex app passes devices through to your Plex account.
Click **Add** to the right of **Devices** in the **Install Plex** wizard for each device to add.

{{< trueimage src="/images/SCALE/Apps/InstallPlexConfigAddDevice.png" alt="Install Plex Add Device" id="Install Plex Add Device" >}}

Enter the device name in **Host Device** and **Container Device**. For example, device */dev/dvb*.

#### Adding Environment Variables

{{< include file="/static/includes/apps/AppInstallWizardEnvironVariablesSettings.md" >}}

Refer to Plex documentation for more information on [environment variables](https://support.plex.tv/articles/201105343-advanced-hidden-server-settings/) they provide to customize your app deployment.

### User and Group Configuration

{{< trueimage src="/images/SCALE/Apps/InstallPlexUserAndGroupConfig.png" alt="Plex User and Group Configuration Settings" id="Plex User and Group Configuration Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

The default web port for Plex is **32400**.

{{< include file="/static/includes/apps/AppInstallWizardNetworkConfig.md" >}}

{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}

### Storage Configuration

TrueNAS provides options for data and configuration storage volumes: ixVolumes and host paths.
Logs and transcode data can use these storage options or you can create directories to hold log and transcode data.
Both logs and transcode data are not intended for persistent data storage.

Logs and transcode data can use the **temporary** directory option that creates a Docker volume in the hidden **ix-apps** dataset.

Transcode data chunks are streamed to a player and meant to be discarded after use, like notes on a scratchpad.
This makes the **tmpfs** directory option a better choice for this transcode data as it creates a Linux temporary filesystem type in RAM.

Neither directory storage option provides easy access to stored data, so if you want to store and access log data, create a dataset called **logs**.

Plex required host path storage volumes:

* **data** to use as the Plex data directory for database and metadata storage.
* **config** to use as the Plex app configuration storage volume.
* **logs** optional if you want to save and have easy access to log data.

If organizing datasets under a parent dataset named *plex*, configure the [ACL permissions]({{< relref "PermissionsSCALE.md" >}}) for this parent dataset and add an ACE entry for the run-as (root or **0**) or assigned user (**568**).

See [Before You Begin](#before-you-begin) for more information on creating app datasets.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

{{< include file="/static/includes/apps/AppInstallWizardTemporaryAndTmpfsDirectories.md" >}}

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Plex** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, scroll down to the **Permissions** widget, and then click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Plex, the run-as users are **0** for **root** and **568**. Add a user entry for these users.
Save the ACL before leaving the screen.
See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for more information.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallPlexResourcesConfiguration.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}
{{< include file="/static/includes/apps/InstallWizardGPUPassthrough.md" >}}

## Troubleshooting Tips

Before editing Plex app settings, stop the app, and then edit settings. After saving changes, restart the app.

Refer to the Plex support website and documentation for assistance with your Plex media server issues.

### App Sticks in Deploying State

You must get a claim token from Plex and add it to the app or Plex does not deploy. If your app is not deploying, try obtaining a fresh claim token from Plex. Stop the Plex app, then edit the TrueNAS Plex app settings to paste the new token into the **Claim Token** field. Save the change. Restart the app.

If the app still does not start, try clearing your screen cache. This can sometimes prevent showing the app as fully deployed.

### Plex App NVIDIA GPU Driver Issues

If Plex reports issues with drivers you might have to delete the app and recreate a fresh app container using the same datasets.
Also, check **Apps > Configuration > Settings** to make sure the NVIDIA driver option is selected.

Search the [TrueNAS forum](https://forums.truenas.com/) for Plex discussion threads for other tips and suggestions.

### Cannot Access Libraries or Media Files

Check the dataset permissions, and verify the user accessing these files has the correct permissions.
You can edit dataset permissions using the **Edit** button on the **Permissions** widget on the **Datasets** screen.
Select the dataset, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Check the ACL entries list for the user accessing the files.
If not present, click **Add ACL Entry**, select **User**, and locate the user name on the **User** dropdown list.
Assign the level of permissions you want to assign, then save the ACL changes.

You can also add the user in the Plex app settings.
Click on the Plex app row on the **Installed** application table. Stop the app, then click **Edit**.
Scroll down to the storage volume for **Data**, click **Add** to the right of **ACL Entries**.
Select **Entry is for a USER** as the **ID Type**, enter the user ID number, and then select the level of permission you want to allow.
Save the changes, then restart the app.
