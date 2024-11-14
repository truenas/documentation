---
title: "Syncthing (Stable)"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the offical version of Syncthing in the stable app train."
weight: 
aliases:
 - /scale/scaletutorials/apps/chartapps/syncthingcharts/
 - /scale/scaletutorials/apps/stableapps/syncthingcharts/
 - /scale/scaletutorials/apps/stableapps/syncthingstable/
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
Before launching the app installation wizard, do the following:

* Create the required dataset, **config** and an optional **data1**.
  
  Syncthing stores configuration  information in the **config** dataset. You can use the **data1** dataset to store application data.

{{< include file="/static/includes/apps/SyncthingFirstSteps.md" >}}

## Installing the Syncthing Application
{{< hint info >}}
This basic procedure covers the required Syncthing stable app settings.
For optional settings, see [Understanding Syncthing Wizard Settings](#understanding-Sycnthing-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseScreen.png" alt="Install Syncthing Enterprise Screen" id="Install Syncthing Enterprise Screen" >}}

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/AddMultipleAppInstancesAndNaming.md" >}}

Accept the default user and group ID settings (**568**).
If you created a user for this app, change these settings to the UID/GID for that new user.

Accept the default port numbers in **Networking**, and leave the **Host Network** cleared.
See [Network Settings](#networking-settings) below for more information on network settings.

Configure the storage settings.
Syncthing uses one dataset and mount paths, but you can add as many as you want. Set the first to **/config** with the host path set to the **config** dataset.
Another optional mount point can be **/data1** with the host path set to a **data1** dataset.
The Syncthing stable train app **config** stores app configuration data.
An additional storage volumes such as a *data* or *data1* dataset can store data but this is not required.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingConfigAndData1ACLandACESettings.png" alt="Syncthing Storage and ACL Settings" id="Syncthing Storage and ACL Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

See [**Storage Settings**](#storage-settings) below for more information.

{{< include file="/static/includes/apps/SyncthingCompleteInstall.md" >}}

### Securing the Syncthing Web UI
After installing and starting the Syncthing application, launch the Syncthing web UI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

### Using the Syncthing Web Portal for TrueNAS

{{< include file="/static/includes/SyncthingWebPortalInfo.md" >}}

## Understanding TrueNAS Syncthing Wizard Settings
The following sections provide more detail explanations of the settings found in each section of the **Install Syncthing** screen.

### Application Name Settings

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

### Configuration Settings
The Syncthing app wizard is configured with all settings required to deploy the container, but you can add additional settings if you want to further customize the app in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingWizardSyncthingConfigSettings.png" alt="Add Syncthing Variables" id="Add Syncthing Environment Variables" >}}

{{< include file="/static/includes/apps/AppInstallWizardEnvironVariablesSettings.md" >}}

### User and Group Settings
Accept the user and group defaults settings in **User and Group Configuration**, or enter new user and group IDs for the user created to administer this app.
The default value for **User Id** and **Group ID** is **568**.

{{< include file="/static/includes/apps/AppInstallWizardUserAndGroupConfig.md" >}}

### Networking Settings
Accept the default port numbers in **Web Port for Syncthing**, **TCP Port for Syncthing** and **UDP Port for Syncthing**.
The TrueNAS Syncthing stable app listens on port **20910**.
The default TCP port is **20978** and the default UDP port is **20979**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStableNetworking.png" alt="Syncthing (stable) Network Configuration" id="Syncthing (stable) Network Configuration" >}}

{{< include file="/static/includes/apps/AppInstallWizardNetworkConfig.md" >}}

Clearing the **Host Network** checkbox shows the TCP and UDP port numbers, and the web UI listens on port **22000**. 

#### Advanced DNS Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingChartsAddAdvanceDNSOptions.png" alt="Syncthing Add Advanced DNS Options" id="Syncthing Add Advanced DNS Options" >}}

{{< include file="/static/includes/apps/AppInstallWizardAdvancedDNSSettings.md" >}}

### Storage Settings
The Syncthing **stable** train app requires one storage volume/dataset to store configuration data and you can use a second dataset for app data storage. Create one named **config** and the other dataset named **data1**.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingConfigAndData1ACLandACESettings.png" alt="Config and Data1 Host Path ACL and ACE Settings" id="Config and Data1 Host Path ACL and ACE Settings" >}}

#### Mounting an SMB Share
The TrueNAS Syncthing app includes the option to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/AppWizardStorageSMBOption.md" >}}

### Resource Configuration Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}
