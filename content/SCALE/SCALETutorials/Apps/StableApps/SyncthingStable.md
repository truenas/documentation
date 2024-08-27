---
title: "Syncthing (Stable)"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the offical version of Syncthing in the stable app train."
weight: 90
aliases:
 - /scale/scaletutorials/apps/chartapps/syncthingcharts/
 - /scale/scaletutorials/apps/stableapps/syncthingcharts/
tags:
- apps
- syncthing
---

## Syncthing Overview
{{< include file="/static/includes/SyncthingOverview.md" >}}

{{< include file="/static/includes/SyncthingArticleIntro.md" >}}

{{< expand "Adding the Enterprise App" "v" >}}
To add the **enterprise** train Syncthing application to the list of available applications:
{{< include file="/static/includes/AddEnterpriseTrain.md" >}}
The **stables** and **enterprise** train versions of the Syncthing app widget display on the **Discover** application screen.

{{< trueimage src="/images/SCALE/Apps/DiscoverSyncthingAppWidgets.png" alt="Discovering Syncthing App Widgets" id="Discovering Syncthing App Widget" >}}

{{< /expand >}}

## Before Installing Syncthing
{{< include file="/static/includes/SyncthingFirstSteps.md" >}}

## Installing the Syncthing Application
You can have multiple Syncthing app deployments (for example two or more **stable**, two or more **enterprise**, or a combination of **stable** and **enterprise** trains, etc.).
Each Syncthing app deployment requires a unique name that can include numbers, and dashes or underscores (for example, *syncthing2*, *syncthing-test*, *syncthing_1*, etc.).
If deploying multiple Syncthing apps on your system, each app deployment requires separate storage volumes.
Using the same two storage datasets for two different app deployments results in the app failing to start.
Create a new folder for each Syncthing app deployment and add both the **home** and **data1** datasets in that folder.

Use a consistent file-naming convention to avoid conflict situations where data does not or cannot synchronize because of file name conflicts.
Path and file names in the Syncthing app are case sensitive.
For example, a file named *MyData.txt* is not the same as *mydata.txt* file in Syncthing.

Go to **Apps > Discover Apps** and locate the **Syncthing** widget for the app in the stable train.

{{< trueimage src="/images/SCALE/Apps/SyncthingAppWidget.png" alt="Syncthing App Widget Stable Train" id="Syncthing App Widget Stable Train" >}}

Click on the widget to open the Syncthing details screen.

{{< trueimage src="/images/SCALE/Apps/SyncthingAppDetailsScreen.png" alt="Syncthing Details Screen Stable Train" id="Syncthing Details Screen Stable Screen" >}}

Click on the widget to open the Syncthing details screen.

Click **Install** to open the **Install Syncthing** wizard.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section, or click on the section heading in the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingAppWizard.png" alt="Install Syncthing Wizard" id="Install Syncthing Wizard" >}}

Accept the default values in **Application Name** and **Version**.

Select the timezone where the TrueNAS server is located from the **Timezone** dropdown list.

Accept the default user and group ID settings (**568**).
If you created a user for this app, change these settings to the UID/GID for that new user.

Configure the storage settings.
You can allow Syncthing to create the configuration storage volume, but we recommend setting **Type** to **Host Path (Path that already exists on the system)**, and then enter or browse to the location of the **home** dataset to populate the **Host Path** field for the **Syncthing Config Storage** settings.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigHomeHostPath.png" alt="Syncthing Home Storage Settings" id="Syncthing Home Storage Settings" >}}

Next, Click **add** to the right of **Additional Storage** to add the storage configuration settings for the data volume.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigData1HostPath.png" alt="Syncthing Data1 Storage Settings" id="Syncthing Data1 Storage Settings" >}}

Enter or browse to the dataset created to populate the **Host Path** field (for example, */mnt/tank/syncthing/config*), then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field.

To add another dataset path inside the container, see [**Storage Settings**](#storage-settings) below for more information.
Set **Type** to **Host Path (Path that already exists on the system)**, enter **/data1** in **Mount Path**, and then either enter or browse to the path to the **data1** dataset to populate the **Host Path** field.

Accept the default port numbers in **Networking**.
See [Network Settings](#networking-settings) below for more information on network settings.
Before changing the default port number, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
When selected, **Host Network** binds to the default host settings programmed for Syncthing.
When enabled the app uses the host network for Syncthing.
The TCP and UDP ports listen on port **20978** and **20979**.
Web UI listens on port **20910**.

Syncthing does not require advanced DNS options. If you want to add DNS options, see [Advanced DNS Settings](#advanced-dns-settings) below.

Accept the default resource limit values for CPU and memory or select **Enable Pod resource limits** to show the CPU and memory limit fields, then enter the new values you want to use for Syncthing. See [Resource Configuration Settings](#resource-configuration-settings) below for more information.

Click **Install**.
The system opens the **Installed Applications** screen with the Syncthing app in the **Deploying** state.
After installation completes the status changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/SyncthingChartsInstalled.png" alt="Syncthing Installed" id="Syncthing Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Syncthing web portal to begin configuring folders, devices, and other settings.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalForTrueNAS.png" alt="Syncthing Web Portal for TrueNAS" id="Syncthing Web Portal for TrueNaS" >}}

### Securing the Syncthing Web UI
After installing and starting the Syncthing application, launch the Syncthing web UI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

### Using the Syncthing Web Portal for TrueNAS

{{< include file="/static/includes/SyncthingWebPortalInfo.md" >}}

## Understanding TrueNAS Syncthing Wizard Settings
The following sections provide more detail explanations of the settings found in each section of the **Install Syncthing** screen.

### Application Name Settings

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

### Configuration Settings
The Syncthing app wizard is configured with all settings required to deploy the container, but you can add additional settings if you want to further customize the app in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingWizardSyncthingConfigSettings.png" alt="Add Syncthing Variables" id="Add Syncthing Environment Variables" >}}

Click **Add** to the right of **Environmental Variables** to show a set of fields to configure the application with additional [Syncthing environmental variables](https://docs.syncthing.net/v1.22.0/users/syncthing.html).

You can add environment variables to the Syncthing app configuration after deploying the app.
Click **Edit** on the **Syncthing Application Info** widget found on the **Installed Application** screen to open the **Edit Syncthing** screen.

### User and Group Settings
Accept the user and group defaults settings in **User and Group Configuration**, or enter new user and group IDs for the user created to administer this app.
The default value for **User Id** and **Group ID** is **568**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingWizardSyncthingUserAndGroup.png" alt="Syncthing User and Group Settings" id="Syncthing User and Group Setting" >}}

### Storage Settings
The Syncthing **stable** train app requires two storage volumes/datasets. One named **home**, the other **data1**.
The first storage volume assigned is **home**, and is where Syncthing configuration information is stored.
The second storage volume assigned in **data1**, and is for the application data storage.
The app can create the configuration storage volumes or you can create datasets to use for the configuration and data storage volumes to use within the container pod.

To allow the app to create a configuration storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)** which is the default setting.
The ixVolumes created are found in the **iX-apps** dataset created by adding the pool for apps.
You can see these volumes if you take a recursive snapshot of the **iX-Apps** dataset.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStableStorageConfigiXvolume.png" alt="ixVolume Storage Option" id="ixVolume Storage Option" >}}

To use existing datasets, set **Type** to **Host Path (Path that already exist on the system)** for the **Syncthing Config Storage**.
This shows the **Host Path** and a file explorer where you can either enter or browse to and select the dataset an existing dataset created for the configuration storage volume.
Use these to enter the **Home** dataset.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStableStorageConfigHostPathandAddStorage.png" alt="Stable Synchting Add Host Path" id="Stable Syncthing Add Host Path" >}}

To add the **data1** datasets, click **Add** to the right of **Additional Storage** to show the set of **Mount Path**, **Host Path** and a file explorer where you can either enter or browse to select the dataset to mount.

Click **Add** again to add another set of fields where you can select either an ixVolume or host path option to mount additional datasets to use as other storage volumes within the pod.

To modify the permissions for an app storage volume or host path dataset, select **Enable ACE** and use these fields to add an ACL entry.
You can use this option or after installing the app, go to **Datasets**, select the dataset for the app, scroll down to the **Permissions** widget and click **Edit** to open the **ACL Editor** screen to modify dataset permissions.

#### Mounting an SMB Share
The TrueNAS Syncthing app includes the option to mount an SMB share inside the container pod.
This allows data synchronization between the share and the app.

Set **Type** an **SMB/CIFS Share (Mounts a persistent volume claim to a SMB share)** to use when migrating third-party data using Syncthing.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStableStorageConfigSMBShare.png" alt="Syncthing Add SMB Share Option" id="Syncthing Add SMB Share Option" >}}

{{< include file="/static/includes/AppWizardStorageSMBOption.md" >}}

### Networking Settings
Accept the default port numbers in **Web Port for Syncthing**, **TCP Port for Syncthing** and **UDP Port for Syncthing**.
The TrueNAS Syncthing stable app listens on port **20910**.
The default TCP port is **20978** and the default UDP port is **20979**.
Before changing default ports and assigning new port numbers, refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsNetworking.png" alt="Syncthing (stable) Network Configuration" id="Syncthing (stable) Network Configuration" >}}

We recommend not selecting **Host Network**. This binds to the host network.

### Advanced DNS Settings
Syncthing does not require configuring advanced DNS options.
Accept the default settings or click **Add** to the right of **DNS Options** to enter the option name and value.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsAddAdvanceDNSOptions.png" alt="Syncthing Add Advanced DNS Options" id="Syncthing Add Advanced DNS Options" >}}

### Resource Configuration Settings

{{< include file="/static/includes/SyncthingWizardResourceConfig.md" >}}
