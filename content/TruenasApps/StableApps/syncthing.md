---
title: "Syncthing (Stable)"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the official version of Syncthing in the stable app train."
weight: 
aliases:
 - /scale/scaletutorials/apps/chartapps/syncthingcharts/
 - /scale/scaletutorials/apps/stableapps/syncthingcharts/
 - /scale/scaletutorials/apps/stableapps/syncthingstable/
 - /truenasapps/communityapps/syncthingcharts/
 - /truenasapps/stableapps/syncthingstable/
tags:
- apps
- syncthing
---

{{< github-content 
    path="trains/stable/syncthing/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

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

{{< include file="/static/includes/apps/SyncthingFirstSteps.md" >}}
To install the Syncthing **stable** train app, do the following:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/SyncthingAppDetailsScreen.png" alt="Syncthing App Details Screen" id="Syncthing App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBegingAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
Syncthing enterprise train app requires two datasets, <b>config</b> to store configuration data and <b>data1</b> to store app data.

Follow the instructions below in <b>Creating Datasets for Apps</b> to correctly create the dataset(s).
You can organize the app dataset(s) under a parent dataset to separate them from datasets for other applications.
For example, create a <i>syncthing</i> parent dataset with these datasets nested under it.
If you organize the required dataset(s) under a parent dataset, set up the required ACL permissions for the parent dataset before using the app installation wizard to avoid receiving installation wizard errors.
Use the <b>Enable ACL</b> option in the <b>Install Sycnting</b> wizard to configure permissions for the <b>home</b> and <b>data1</b> datasets.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}
</div>

<div style="margin-left: 33px">{{< expand "Configuring Parent Dataset Permissions" "v" >}} 
Select the parent dataset row on the **Datasets** screen tree table, scroll down to the **Permissions** widget, and click **Edit** to open the <b>Edit ACL</b> screen.
Set the <b>@owner</b> and <b>@group</b> to <b>admin</b> or the name of your TrueNAS administration user account, and click <b>Apply Owner</b> and <b>Apply Group</b>.

Next, click **Add Item** to add an ACE entry for the <b>Syncthing</b> run as user, <b>0</b>. Give the user full permissions.

See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for more information.
{{< /expand >}}</div>

## Installing the Syncthing Application

{{< hint info >}}
This basic procedure covers the required Syncthing app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}
{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingScreen.png" alt="Install Syncthing Screen" id="Install Syncthing Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Accept the default user and group ID settings (**0**).

Accept the default port numbers in **Networking**, and leave the **Host Network** cleared.
For more information on network settings, see [Network Settings](#networking-settings) below.

Configure the storage settings.
Syncthing uses two datasets. First, set **Type** to **Host Path (Path that already exists on the system.
Select **Enable ACL**.
Enter or browse to select the **config** with the host path set to the **config** dataset.
Click **Add** to the right of **ACL Entries**. Set **ID type** to **Entry is for a USER**, enter **0** in **ID** and give this full control permissions.

Select **Force Flag** to allow upgrading the app. This allows writing to the dataset when there is existing data.

Click **Add** to the right of **Additional Storage** to add another set of storage settings.
Repeat the instructions above to add the storage volume for the  **data1** dataset.
The Syncthing stable train app **config** stores app configuration data.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigACLandACESettings.png" alt="Syncthing Config Dataset ACL and ACE Settings" id="Syncthing Config Dataset ACL and ACE Settings" >}}

For more information on storage settings, see [**Storage Settings**](#storage-settings) below.

{{< include file="/static/includes/apps/SyncthingCompleteInstall.md" >}}

### Securing the Syncthing Web UI

After installing and starting the Syncthing application, launch the Syncthing web UI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

### Using the Syncthing Web Portal for TrueNAS

{{< include file="/static/includes/SyncthingWebPortalInfo.md" >}}

## Understanding App Installation Wizard Settings

The following sections provide more detailed explanations of the settings in each section of the **Install Syncthing** screen.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### Configuration Settings

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

Click here for more information on [Syncthing environmental variables](https://docs.syncthing.net/v1.22.0/users/syncthing.html)

### User and Group Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseUserAndGroupConfig.png" alt="Syncthing Enterprise User and Group IDs" id="Syncthing Enterprise User and Group IDs" >}}

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Networking Settings

Accept the default port numbers in **Web Port for Syncthing**, **TCP Port for Syncthing**, and **UDP Port for Syncthing**.
The TrueNAS Syncthing stable app listens on port **20910**.
The default TCP port is **20978** and the default UDP port is **20979**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStableNetworking.png" alt="Syncthing (stable) Network Configuration" id="Syncthing (stable) Network Configuration" >}}

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}

{{< include file="/static/includes/apps/InstallWizardHostNetworkConfig.md" >}}

Disabling **Host Network** shows the TCP and UDP port numbers, and sets the web UI to listen on port **22000**.

{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}

### Storage Settings

TrueNAS provides two storage options for storage volumes: ixVolumes and host paths.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigACLandACESettings.png" alt="Syncthing Config Dataset ACL and ACE Settings" id="Syncthing Config Dataset ACL and ACE Settings" >}}

To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This adds a storage volume for the application nested in the hidden **ix-apps** dataset, located on the pool selected as the apps pool.
Using ixVolume is intended for a test deployment of an app but not for a full app deployment, as data does not persist for these volumes after deleting the app where a dataset does.
Datasets make recovering, transferring, and accessing app configuration, user, or other data possible where ixVolumes do not.

To use an existing dataset (recommended option), set **Type** to **Host Path (Path that already exists on the system**).

The Syncthing **stable** train app requires two storage volumes/datasets to store configuration data and app data storage. Create one named **config** and another dataset named **data1**.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

If you organize the config dataset under a parent dataset named *syncthing*, configure the ACL permissions for this parent dataset and add an ACE entry for the root user.

You can add extra storage volumes during the app installation, or edit the application after it deploys. Stop the app before editing settings.

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Syncthing** wizard or from the **Datasets** screen after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Syncthing, the run-as user is **0**. Add a user entry for this user.
Save the ACL before leaving the screen.

For more infomration, see [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}).
{{< /expand >}}

#### Mounting an SMB Share Storage Volume

The TrueNAS Syncthing app includes the option to mount an SMB share inside the container pod.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resource Configuration Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}
