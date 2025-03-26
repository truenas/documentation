---
title: "Syncthing (Enterprise)"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the Enterprise version of the Syncthing app."
weight: 
aliases:
 - /scale/scaletutorials/apps/syncthing/
 - /scale/scaletutorials/apps/enterpriseapps/syncthing/
tags:
- syncthing
- apps
- enterprise
keywords:
- nas data storage
- software storage solutions
- enterprise data storage
---

{{< include file="/static/includes/apps/EnterpriseApps.md" >}}

{{< github-content 
    path="trains/enterprise/syncthing/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

{{< include file="/static/includes/apps/SyncthingArticleIntro.md" >}}

## Syncthing Overview

{{< include file="/static/includes/apps/SyncthingOverview.md" >}}

Users migrating data from an existing third-party NAS solution to TrueNAS 24.04 (Dragonfish) or newer can use the Syncthing **enterprise** application to mount the source with a remote SMB share that preserves metadata.

See [Third-Party SMB Data Migration]({{< relref "DataMigrationSyncthing.md" >}}) for considerations and a full tutorial.

Enterprise users with the appropriate license can see the apps in the **enterprise** train.
Community users can access enterprise versions of apps by adding the **enterprise** train to their catalog. To change app train settings:
{{< include file="/static/includes/apps/AddEnterpriseTrain.md" >}}

## Before You Begin

To install the Syncthing **enterprise** train app, do the following:

* Acquire and apply the Enterprise VM & Apps license to the Enterprise system.

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseDetailsScreen.png" alt="Syncthing Enterprise App Details Screen" id="Syncthing Enterprise App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBegingAddAppCertificate.md" >}}

{{< include file="/static/includes/apps/BeforeYouBegingAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
Syncthing enterprise train app requires two datasets, <b>home</b> to store configuration data and <b>data1</b> to store app data.

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

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseScreen.png" alt="Install Syncthing Enterprise Screen" id="Install Syncthing Enterprise Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

Next, enter the **Syncthing Configuration** settings.

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

Accept the default user and group IDs or enter the UID for any new TrueNAS user created to serve as the administrator for this app. See [User and Group Settings](#user-and-group-settings) below for more information.

Select **Host Network** to bind to the default host settings programmed for Syncthing. See [Network Configuration](#networking-settings) below for more information.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

Accept the default web port **8384**. Before changing ports, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.

If created, select the certificate for Syncthing from the **Certificates** dropdown list.
For more information, see [Network Settings](#networking-settings) below.

Configure the storage settings.
Syncthing uses two datasets. Set **Type** to **Host Path (Path that already exists on the system)**
Select **Enable ACL**, then either enter or browse to select the **home** dataset.
The other mount point is **/data1** with the host path set to the **data1** dataset.
Click **Add** to the right of **ACL Entries**.
Set **ID** to **Entry is for a USER**, enter **0** in **ID**, and then give the user full control permissions.

Select **Force Flag** to allow upgrading the app. This allows writing to the dataset when there is existing data.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageHomeACLandACESettings.png" alt="Home Host Path ACL and ACE Settings" id="Home Host Path ACL and ACE Settings" >}}

Repeat for the **/data1** storage volume. Click **Add** to the right of **Additional Storage** to show the storage settings.

Set **Type** to **Host Path**.
Select **Enable ACL**, then enter or browse to select the path to the **data1** dataset. Add the run as user, **0** as an ACE entry with full control permissions.

If migrating from another NAS system, set **Type** to **SMB/CIFS Share (Mounts a volume to an SMB share)**, and then select **Migrate Data**.
For more information, see [**Mounting an SMB Share Storage Volume**](#mounting-an-smb-share-storage-volume) below.

{{< include file="/static/includes/apps/SyncthingCompleteInstall.md" >}}

### Securing the Syncthing Web UI

After installing and starting the Syncthing application, launch the Syncthing web UI.
Go to **Actions > Settings** and set a user password for the web UI.

### Using the Syncthing Web Portal for TrueNAS

{{< include file="/static/includes/apps/SyncthingWebPortalInfo.md" >}}

## Understanding App Installation Wizard Settings

The following sections provide detailed explanations of the settings found in each section of the Enterprise train **Install Syncthing** screen.

### Application Name Settings

{{< include file="/static/includes/Apps/InstallWizardAppNameAndVersion.md" >}}

### Configuration Setting

{{< include file="/static/includes/apps/InstallWizardTimezoneSetting.md" >}}

#### Adding Environmental Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

Click here for more information on [Syncthing environmental variables](https://docs.syncthing.net/v1.22.0/users/syncthing.html)

### User and Group Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseUserAndGroupConfig.png" alt="Syncthing Enterprise User and Group IDs" id="Syncthing Enterprise User and Group IDs" >}}

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Networking Settings

The Syncthing enterprise app listens on port **8384**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}

{{< include file="/static/includes/apps/InstallWizardHostNetworkConfig.md" >}}

Disabling **Host Network** shows the TCP and UDP port numbers, and sets the web UI to listen on port **22000**.

{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Settings

TrueNAS provides two storage options for storage volumes: ixVolumes and host paths.

To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This adds a storage volume for the application nested in the hidden **ix-apps** dataset, located on the pool selected as the apps pool.
Using ixVolume is intended for a test deployment of an app but not for a full app deployment, as data does not persist for these volumes after deleting the app where a dataset does.
Datasets make recovering, transferring, and accessing app configuration, user, or other data possible where ixVolumes do not.

To use an existing dataset (recommended option), set **Type** to **Host Path (Path that already exists on the system**).

The Syncthing **enterprise** train app requires two storage volumes/datasets to store configuration data and app data storage. Create one named **home** and another dataset named **data1**.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

If you organize the config dataset under a parent dataset named *syncthing*, configure the ACL permissions for this parent dataset and add an ACE entry for the root user.

You can add extra storage volumes during the app installation, or edit the application after it deploys. Stop the app before editing settings.

#### Setting Dataset ACL Permissions

You can configure ACL permissions for the required dataset in the **Install Syncthing** wizard, or from the **Datasets** screen after adding the datasets.

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

The TrueNAS Syncthing Enterprise app includes the option to mount an SMB share inside the container pod and to migrate data from another NAS to TrueNAS.

Selecting **Migrate Data** forces a read-only mount regardless of the **Read Only** checkbox selection.
The SMB mount options are set to **vers=3.0**, **cifsacl**, and **noperm**.
ACL preservation is not guaranteed if in a non-AD environment, or if the ACL or remote server contains local users.

{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resource Configuration Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}

## Increasing inotify Watchers

Syncthing uses [inotify](https://man7.org/linux/man-pages/man7/inotify.7.html) to monitor file system events, with one inotify watcher per monitored directory.
Linux defaults to a maximum of 8192 inotify watchers.
Using the Syncthing Enterprise app to sync directories with greater than 8191 subdirectories (possibly lower if other services are also using inotify) produces errors that prevent automatic monitoring of file system changes.

Increase inotify values to allow Syncthing to monitor all sync directories.
Add a sysctl variable to ensure changes persist through restart.

Go to **System > Advanced** and locate the [**Sysctl** widget]({{< relref "/scale/scaletutorials/systemsettings/advanced/_index.md #managing-sysctl-variables" >}}).

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSysctlWidget.png" alt="Sysctl Widget" id="Sysctl Widget" >}}

Click **Add** to open the **Add Sysctl** screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddSysctlConfigScreen.png" alt="Add Sysctl Screen" id="Add Sysctl Screen" >}}

Enter **fs.inotify.max_user_watches** in **Variable**.

Enter a **Value** larger than the number of directories monitored by Syncthing.
There is a small memory impact of 1080 bytes for each inotify watcher, so it is best to start with a lower number, we suggest 204800 and increase if needed.

Enter a **Description** for the variable, such as *Increase inotify limit*.

Select **Enabled** and click **Save**.
