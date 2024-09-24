---
title: "Syncthing (Enterprise)"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the Enterprise version of the Syncthing app."
weight: 100
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

{{< include file="/static/includes/apps/SCALEEnterpriseApps.md" >}}

{{< include file="/static/includes/apps/SyncthingArticleIntro.md" >}}

## Syncthing Overview

{{< include file="/static/includes/apps/SyncthingOverview.md" >}}

Users migrating data from an existing third-party NAS solution to TrueNAS 24.04 (Dragonfish) or newer can use the Syncthing **enterprise** application to mount the source with a remote SMB share that preserves metadata.

See [Third-Party SMB Data Migration]({{< relref "DataMigrationSyncthing.md" >}}) for considerations and a full tutorial.

## Before You Begin
To install the Syncthing **enterprise** train app, first create a self-signed certificate for the Syncthing enterprise app.
{{< include file="/static/includes/apps/AddAppCertificate.md" >}}

Syncthing requires two storage volumes.
{{< include file="/static/includes/apps/SyncthingFirstSteps.md" >}}

## Installing the Syncthing Application

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseScreen.png" alt="Install Syncthing Enterprise Screen" id="Install Syncthing Enterprise Screen" >}}

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

Next, enter the **Syncthing Configuration** settings.

Select the timezone where the TrueNAS server is located from the **Timezone** dropdown list.

Accept the default user and group IDs or enter the UID for any new TrueNAS user created to serve as the administrator for this app. See [User and Group Settings](#user-and-group-settings) below for more information.

Select **Host Network** to bind to the default host settings programmed for Syncthing. See [Network Configuration](#networking-settings) below for more information.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

Accept the default web port **8384**. Before changing ports, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.

If created, select the certificate for Syncthing from the **Certificates** dropdown list.
See [Network Settings](#networking-settings) below for more information on network settings.

Configure the storage settings.
We recommend setting **Type** to **Host Path (Path that already exists on the system)**, and then entering or browsing to the **home** dataset to populate the **Host Path** field for the **Syncthing Home Storage** settings.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigHomeHostPath.png" alt="Syncthing Home Storage Settings" id="Syncthing Home Storage Settings" >}}

Next, Click **add** to the right of **Additional Storage** to add the storage configuration settings for the **data1** volume.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigData1HostPath.png" alt="Syncthing Data1 Storage Settings" id="Syncthing Data1 Storage Settings" >}}

If migrating from some other NAS system, set **Type** to **SMB/CIFS Share (Mounts a persistent volume claim to a SMB share)** and select **Migrate Data**. 
See [**Storage Settings**](#storage-settings) below for more information.

{{< include file="/static/includes/apps/SyncthingCompleteInstall.md" >}}

### Securing the Syncthing Web UI
After installing and starting the Syncthing application, launch the Syncthing web UI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

### Using the Syncthing Web Portal for TrueNAS

{{< include file="/static/includes/apps/SyncthingWebPortalInfo.md" >}}

## Understanding TrueNAS Syncthing Wizard Settings

The following sections provide detailed explanations of the settings found in each section of the Enterprise train **Install Syncthing** screen.

### Application Name Settings

{{< include file="/static/includes/Apps/AppsWizardAppNameAndVersion.md" >}}

### Configuration Setting
{{< include file="/static/includes/apps/AppsInstallWizardTimezoneSetting.md" >}}

{{< include file="/static/includes/apps/AppInstallWizardEnvironVariablesSettings.md" >}}

Click here for more information on [Syncthing environmental variables](https://docs.syncthing.net/v1.22.0/users/syncthing.html)
### User and Group Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseUserAndGroupConfig.png" alt="Syncthing Enterprise User and Group IDs" id="Syncthing Enterprise User and Group IDs" >}}

{{< include file="/static/includes/apps/AppInstallWizardUserAndGroupConfig.md" >}}

### Networking Settings
The TrueNAS Syncthing enterprise app listens on port **8384**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardNetworkConfig.md" >}}

If you clear the **Host Network** checkbox, the TCP and UDP port numbers show and the web UI listens on port **22000**. 

### Storage Settings
The Syncthing **enterprise** train app requires two storage volumes/datasets. Create on named **home** and the other **data1**.
The **home** storage volume stores Syncthing configuration information, while the **data1** storage volume stores application data.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigiXvolume.png" alt="Add ixVolume Storage Option" id="Add ixVolume Storage Option" >}}

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

#### Mounting an SMB Share
The TrueNAS Syncthing Enterprise app includes the option to mount an SMB share inside the container pod and to migrate data from some other NAS to TrueNAS.

Selecting **Migrate Data** forces a read-only mount regardless of the **Read Only** checkbox selection.
The SMB mount options are set to **vers=3.0**, **cifsacl**, and **noperm**.
ACL preservation is not guaranteed if in a non-AD environment, or if the ACL or remote server contains local users.

Use the SMB option to data synchronization between the share and the app.

Set **Type** to **SMB/CIFS Share (Mounts a persistent volume claim to a SMB share)** when migrating third-party data using Syncthing.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigSMBShare.png" alt="Syncthing Add SMB Share Option" id="Syncthing Add SMB Share Option" >}}

{{< include file="/static/includes/apps/AppWizardStorageSMBOption.md" >}}

### Resource Configuration Settings

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppsInstallWizardResourceConfig.md" >}}

## Increasing inotify Watchers
Syncthing uses [inotify](https://man7.org/linux/man-pages/man7/inotify.7.html) to monitor file system events, with one inotify watcher per monitored directory.
Linux defaults to a maximum of 8192 inotify watchers.
Using the Syncthing Enterprise app to sync directories with greater than 8191 subdirectories (possibly lower if other services are also utilizing inotify) produces errors that prevent automatic monitoring of file system changes.

Increase inotify values to allow Syncthing to monitor all sync directories.
Add a sysctl variable to ensure changes persist through reboot.

Go to **System > Advanced** and locate the [**Sysctl** widget]({{< relref "/scale/scaletutorials/systemsettings/advanced/_index.md #managing-sysctl-variables" >}}).

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSysctlWidget.png" alt="Sysctl Widget" id="Sysctl Widget" >}}

Click **Add** to open the **Add Sysctl** screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddSysctlConfigScreen.png" alt="Add Sysctl Screen" id="Add Sysctl Screen" >}}

Enter **fs.inotify.max_user_watches** in **Variable**.

Enter a **Value** larger than the number of directories monitored by Syncthing.
There is a small memory impact for each inotify watcher of 1080 bytes, so it is best to start with a lower number, we suggest 204800 and increase if needed.

Enter a **Description** for the variable, such as *Increase inotify limit*.

Select **Enabled** and click **Save**.