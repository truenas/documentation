---
title: "Syncthing Enterprise App"
description: "Provides general information, guidelines, installation instructions, and use scenarios for the Enterprise version of the Syncthing app."
weight: 100
aliases:
 - /scale/scaletutorials/apps/syncthing/
tags:
- syncthing
- apps
- enterprise
---

{{< include file="/static/includes/SyncthingArticleIntro.md" >}}

{{< enterprise >}}
Syncthing is available to Enterprise systems with the appropriate VM and applications license.
{{< /enterprise >}}

## Syncthing Overview
{{< include file="/static/includes/SyncthingOverview.md" >}}

Users migrating data from an existing third-party NAS solution to TrueNAS SCALE 24.04 (Dragonfish) or newer can use the Syncthing Enterprise application to mount the source with a remote SMB share that preserves metadata.

See [Third-Party SMB Data Migration]({{< relref "DataMigrationSyncthing.md" >}}) for considerations and a full tutorial.

## Before You Begin
Create a self-signed certificate for the Syncthing enterprise app.
{{< include file="/static/includes/AddAppCertificate.md" >}}

{{< include file="/static/includes/SyncthingFirstSteps.md" >}}

## Installing the Syncthing Application
Go to **Apps > Discover Apps**, locate the **Syncthing** enterprise app widget.

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppWidget.png" alt="Syncthing Enterprise App Widget" id="Syncthing Enterprise App Widget" >}}

Click on the widget to open the Syncthing details screen.

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppDetailsScreen.png" alt="Syncthing Enterprise Details Screen" id="Syncthing Enterprise Details Screen" >}}

Click **Install** to open the **Install Syncthing** screen.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseScreen.png" alt="Install Syncthing Enterprise Screen" id="Install Syncthing Enterprise Screen" >}}

Accept the default values in **Application Name** and **Version**.

Select the timezone where the TrueNAS server is located from the **Timezone** dropdown list.

Accept the default user and group ID settings.
If selected, **Host Network** binds to the default host settings programmed for Syncthing.
Accept the default web port **31000**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

If changing ports, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.

Select the certificate created for Syncthing from the **Certificates** dropdown list.

Configure the storage settings.
To allow Syncthing to create the configuration storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**, then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigIxVolume.png" alt="Syncthing Storage Add ix-Volume" id="Syncthing Storage Add ix-Volume" >}}

To use an existing dataset created for Syncthing, select **Host Path (Path that already exists on the system)**.
Enter or browse to the dataset created to populate the **Host Path** field (for example, */mnt/tank/syncthing/config*), then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field.

To add another dataset path inside the container, see [**Storage Settings**](#storage-settings) below for more information.

Click **Install**.
The system opens the **Installed Applications** screen with the Syncthing app in the **Deploying** state.
After installation completes the status changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/SyncthingChartsInstalled.png" alt="Syncthing Installed" id="Syncthing Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Syncthing web portal to begin configuring folders, devices, and other settings.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalForTrueNAS.png" alt="Syncthing Web Portal for TrueNAS" id="Syncthing Web Portal for TrueNaS" >}}

Secure Syncthing by setting up a username and password.

## Understanding Syncthing Settings
The following sections provide detailed explanations of the settings found in each section of the **Install Syncthing** screen for the Enterprise train app.

### Application Name Settings
Accept the default value or enter a name in **Application Name** field.
In most cases use the default name, but if adding a second deployment of the application you must change this name.

Accept the default version number in **Version**.
When a new version becomes available, the application has an update badge.
The **Installed Applications** screen shows the option to update applications.

### Configuration Setting
Select the timezone where your TrueNAS SCALE system is located.

### User and Group Settings
You can accept the defaults settings in **User and Group Configuration**, or enter new user and group IDs.
The default value for **User Id** and **Group ID** is **568**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseUserAndGroupConfig.png" alt="Syncthing Enterprise User and Group IDs" id="Syncthing Enterprise User and Group IDs" >}}

### Networking Settings

Accept the default port numbers in **Web Port for Syncthing**.
The SCALE Syncthing chart app listens on port **31000**.
Before changing the default port and assigning a new port number, refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Configuration" id="Syncthing Enterprise Network Configuration" >}}

We recommend not selecting **Host Network**.
This binds to the host network.

Select the self-signed certificate created in SCALE for Syncthing from the **Certificate** dropdown list.
You can edit the certificate after deploying the application.

### Storage Settings
You can allow the Syncthing app to create the configuration storage volume or you can create datasets to use for the configuration storage volume and to use for storage within the container pod.

To allow the Syncthing app to create the configuration storage volume, leave **Type** set to **ixVolume (Dataset created automatically...)**.

To use existing datasets, select **Host Path (Path that already exist on the system)** in **Type** to show the **Host Path** field, then enter or browse to and select the dataset an existing dataset created for the configuration storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigHostPath.png" alt="Syncthing Enterprise Add Host Path" id="Syncthing Enterprise Add Host Path" >}}

If mounting a storage volume inside the container pod, enter or browse to the location of the **data1** dataset to populate the **Host Path** field below the **Mount Path** populated with **data1**.

In addition to the **data1** dataset, you can mount additional datasets to use as other storage volumes within the pod.
Click **Add** to the right of **Additional Storage** to show another set of **Mount Path** and **Host Path** fields for each dataset to mount.
Enter or browse to the dataset to populate the **Host Path** and **Mount Path** fields.

#### Mounting an SMB Share
The TrueNAS SCALE Syncthing Enterprise app includes the option to mount an SMB share inside the container pod.
This allows data synchronization between the share and the app.

The SMB share mount does not include ACL protections at this time.
Permissions are currently limited to the permissions of the user that mounted the share.
Alternate data streams (metadata), finder colors tags, previews, resource forks, and MacOS metadata is stripped from the share along with filesystem permissions, but this functionality is undergoing active development and implementation planned for a future TrueNAS SCALE release.

To mount an SMB share inside the Syncthing application, select **SMB Share (Mounts a persistent volume claim to a system)** in **Type** if not mounting a dataset in the container pod. If mounting a dataset inside the pod and to mount an SMB share, click **Add** to the right of **Additional Storage** to add a set of select settings then select the SMB share option.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageAddSMBShare.png" alt="Syncthing Enterprise Add SMB Share" id="Syncthing Enterprise Add SMB Share" >}}

Enter the server for the SMB share in **Server**, the name of the share in **Share**, then enter the username and password credentials for the SMB share
Determine the total size of the SMB share to mount and access via TrueNAS SCALE and Syncthing, and enter this value in **Size**.
You can edit the size after deploying the application if you need to increase the storage volume capacity for the share.

### Resource Configuration Settings
Accept the default values in **Resources Configuration** or enter new CPU and memory values.
By default, this application is limited to use no more than 4 CPU cores and 8 Gigabytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprose Resource Limits" >}}

To customize the CPU and memory allocated to the container (pod) Syncthing uses, enter new CPU values as a plain integer value followed by the suffix **m** (milli).
Default is 4000m.

Accept the default value 8Gb allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example 129M or 123MiB.

## Increasing inotify Watchers

Syncthing uses [inotify](https://man7.org/linux/man-pages/man7/inotify.7.html) to monitor filesystem events, with one inotify watcher per monitored directory.
Linux defaults to a maximum of 8192 inotify watchers.
Using the Syncthing Enterprise app to sync directories with greater than 8191 subdirectories (possibly lower if other services are also utilizing inotify) produces errors that prevent automatic monitoring of filesystem changes.

Increase inotify values to allow Syncthing to monitor all sync directories.
Add a sysctl variable to ensure changes persist through reboot.

Go to **System Settings > Advanced** and locate the [**Sysctl** widget](https://www.truenas.com/docs/scale/scaletutorials/systemsettings/advanced/#managing-sysctl-variables).

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSysctlWidget.png" alt="Sysctl Widget" id="Sysctl Widget" >}}

Click **Add** to open the **Add Sysctl** screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddSysctlConfigScreen.png" alt="Add Sysctl Screen" id="Add Sysctl Screen" >}}

Enter **fs.inotify.max_user_watches** in **Variable**.

Enter a **Value** larger than the number of directories monitored by Syncthing.
There is a small memory impact for each inotify watcher of 1080 bytes, so it is best to start with a lower number, we suggest 204800, and increase if needed.

Enter a **Description** for the variable, such as *Increase inotify limit*.

Select **Enabled** and click **Save**.

## Securing the Syncthing Web UI

After installing and starting the Syncthing application, launch the Syncthing webUI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

## Using the Syncthing Web Portal for TrueNAS
{{< include file="/static/includes/SyncthingWebPortalInfo.md" >}}
