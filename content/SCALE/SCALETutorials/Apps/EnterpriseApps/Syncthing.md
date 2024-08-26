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
keywords:
- nas data storage
- software storage solutions
- enterprise data storage
---

{{< include file="/static/includes/SCALEEnterpriseApps.md" >}}

{{< include file="/static/includes/SyncthingArticleIntro.md" >}}

## Syncthing Overview
{{< include file="/static/includes/SyncthingOverview.md" >}}

Users migrating data from an existing third-party NAS solution to TrueNAS SCALE 24.04 (Dragonfish) or newer can use the Syncthing Enterprise application to mount the source with a remote SMB share that preserves metadata.

See [Third-Party SMB Data Migration]({{< relref "DataMigrationSyncthing.md" >}}) for considerations and a full tutorial.

## Before You Begin
To install the Syncthing **enterprise** train app, first create a self-signed certificate for the Syncthing enterprise app.
{{< include file="/static/includes/AddAppCertificate.md" >}}

Syncthing requires two storage volumes.
{{< include file="/static/includes/SyncthingFirstSteps.md" >}}

## Installing the Syncthing Application
You can have multiple Syncthing app deployments (for example two or more **stable**, two or more **enterprise**, or a combination of **stable** and **enterprise** trains, etc.).
Each Syncthing app deployment requires a unique name that can include numbers, and dashes or underscores (for example, *syncthing2*, *syncthing-test*, *syncthing_1*, etc.).

Use a consistent file-naming convention to avoid conflict situations where data does not or cannot synchronize because of file name conflicts.
Path and file names in the Syncthing app are case sensitive.
For example, a file named *MyData.txt* is not the same as *mydata.txt* file in Syncthing.

Go to **Apps > Discover Apps**, and locate the **Syncthing** enterprise app widget.

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppWidget.png" alt="Syncthing Enterprise App Widget" id="Syncthing Enterprise App Widget" >}}

Click on the widget to open the Syncthing details screen.

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppDetailsScreen.png" alt="Syncthing Enterprise Details Screen" id="Syncthing Enterprise Details Screen" >}}

Click **Install** to open the **Install Syncthing** wizard.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section, or click on the section heading in the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseScreen.png" alt="Install Syncthing Enterprise Screen" id="Install Syncthing Enterprise Screen" >}}

Accept the default values in **Application Name** and **Version**.

Select the timezone where the TrueNAS server is located from the **Timezone** dropdown list.

Accept the default user and group ID settings (**568**).
If you created a user for this app, change these settings to the UID/GID for that new user.

If selected, **Host Network** binds to the default host settings programmed for Syncthing.
If not selected you must enter your local network in CIDR format to the Syncthing Web UI. See [Network Configuration](#networking-settings) below for more information.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

Accept the default web port **8384**.
Before changing ports, see [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.

Select the certificate created for Syncthing from the **Certificates** dropdown list.

Configure the storage settings.
You can allow Syncthing to create the configuration storage volume, but we recommend setting **Type** to **Host Path (Path that already exists on the system)**, and then enter or browse to the location of the **home** dataset to populate the **Host Path** field for the **Synchthing Home Storage** settings.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigHomeHostPath.png" alt="Syncthing Home Storage Settings" id="Syncthing Home Storage Settings" >}}

Next, Click **add** to the right of **Additional Storage** to add the storage configuration settings for the data volume.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigData1HostPathh.png" alt="Syncthing Data1 Storage Settings" id="Syncthing Data1 Storage Settings" >}}

Enter or browse to the dataset created to populate the **Host Path** field (for example, */mnt/tank/syncthing/config*), then enter or browse to the location of the **data1** dataset to populate the **Host Path** field under the **Mount Path** field.

To add another dataset path inside the container, see [**Storage Settings**](#storage-settings) below for more information.
Set **Type** to **Host Path (Path that already exists on the system)**, enter **/data1** in **Mount Path**, and then either enter or browse to the path to the **data1** dataset to populate the **Host Path** field.

Accept the rest of the default values in the wizard, then click **Install**.
The system opens the **Installed Applications** screen with the Syncthing app in the **Deploying** state.
After installation completes the status changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppDeployed.png" alt="Syncthing Installed" id="Syncthing Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Syncthing web portal where you can begin configuring folders, devices, and other settings.

{{< trueimage src="/images/SCALE/Apps/SyncthingWebPortalForTrueNAS.png" alt="Syncthing Web Portal for TrueNAS" id="Syncthing Web Portal for TrueNaS" >}}

Secure Syncthing by setting up a username and password.

## Understanding Syncthing Settings
The following sections provide detailed explanations of the settings found in each section of the Enterprise train **Install Syncthing** screen.

### Application Name Settings
Accept the default value or enter a name in **Application Name** field.
In most cases use the default name, but if adding a second deployment of the application you must change this name.

Accept the default version number in **Version**.
When a new version becomes available, the application shows an update badge and the **Application Info** widget on the **Installed** applications screen shows the **Update** button.

### Configuration Setting
Select the timezone where your TrueNAS SCALE system is located.

The Syncthing Enterprise app wizard is configured with all settings required to deploy the container, but you can add additional settings if you want to further customize the app in SCALE.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpirseAddEnvironmentVariables.png" alt="Add Syncthing Environment Variables" id="Add Syncthing Environment Variables" >}}

Click **Add** to the right of **Environmental Variables** to show a set of fields to configure the application with additional [Syncthing environmental variables](https://docs.syncthing.net/v1.22.0/users/syncthing.html).
Click **Add** for each environmental variable you want to configure.

### User and Group Settings
Accept the user and group defaults settings in **User and Group Configuration**, or enter new user and group IDs for the user created to administer this app.
The default value for **User Id** and **Group ID** is **568**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseUserAndGroupConfig.png" alt="Syncthing Enterprise User and Group IDs" id="Syncthing Enterprise User and Group IDs" >}}

### Networking Settings
Accept the default port numbers in **Web UI Port**.
The SCALE Syncthing enterprise app listens on port **8384**.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseNetworkSettings.png" alt="Syncthing Enterprise Network Settings" id="Syncthing Enterprise Network Settings" >}}

Before changing the default port to a new port number, refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

**Host Network** is selected by default.
This binds to the host network.
If not selected, you must enter the network settings for TrueNAS in the Syncthing web portal.

Select the self-signed certificate created in SCALE for Syncthing from the **Certificate** dropdown list.
If you did not create this certificate before starting the installation wizard you can select the default **TrueNAS** certificate and edit the certificate after deploying the application.

### Storage Settings
The Syncthing **enterprise** train app requires two storage volumes/datasets. One named **home**, the other **data1**.
The first storage volume assigned is **home**, and is where Syncthing configuration information is stored.
The second storage volume assigned in **data1**, and is for the application data storage.
The Syncthing app can create the configuration storage volumes or you can create datasets to use for the configuration and data storage volumes to use within the container pod.

To allow the Syncthing app to create a configuration storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
The app ixVolumes created are found in the **iX-apps** dataset created by adding the pool for apps.
You can see these volumes if you take a recursive snapshot of the **iX-Apps** dataset.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingStorageConfigiXvolume.png" alt="Add ixVolume Storage Option" id="Add ixVolume Storage Option" >}}

To use existing datasets, set **Type** to **Host Path (Path that already exist on the system)**.
This shows the **Mount Path** and **Host Path** fields, and a file explorer where you can either enter or browse to and select the dataset an existing dataset created for the configuration storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigHostPath.png" alt="Syncthing Enterprise Add Host Path" id="Syncthing Enterprise Add Host Path" >}}

In addition to the **home** and **data1** datasets, you can mount additional datasets to use as other storage volumes within the pod.
Click **Add** to the right of **Additional Storage** to show another set of **Mount Path** and **Host Path** fields for each dataset to mount.
The first time you add additional storage, mount the **data** one dataset as a host path.

#### Mounting an SMB Share
The TrueNAS SCALE Syncthing Enterprise app includes the option to mount an SMB share inside the container pod.
This allows data synchronization between the share and the app.

Set **Type** an **SMB/CIFS Share (Mounts a persistent volume claim to a SMB share)** to use when migrating third-party data using Syncthing.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseStorageConfigSMBShare.png" alt="Syncthing Add SMB Share Option" id="Syncthing Add SMB Share Option" >}}

Selecting this option shows the SMB share fields that allow you to configure the share server, path, and user authentication credentials while configuring the app.

Select **Read Only** to make the storage volume read only.

Enter the path inside the container to mount the storage for the share volume in **Mount Path**.

Select **Migration Mode** if migrating third-party data.
Enter the server address for the SMB share in **Server**, the path to mount the SMB share in **Path**, and the share authentication user credentials in **User** and **Password**.
**domain** is an optional field for the share domain name.

Permissions are currently limited to the permissions of the user that mounted the share.
Alternate data streams (metadata), finder colors tags, previews, resource forks, and MacOS metadata is stripped from the share along with file system permissions, but this functionality is undergoing active development and implementation planned for a future TrueNAS SCALE release.

### Resource Configuration Settings
Accept the default values in **Resources Configuration** or enter new CPU and memory values.
By default, this application is limited to use no more than 2 CPU cores and 4096 Megabytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

To customize the CPU and memory allocated to the container (pod) Syncthing uses, enter new CPU values as a plain integer value followed by the suffix **m** (milli).
The default is 4096m.

Accept the default value 8Gb allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example, 129M or 123MiB.

## Increasing inotify Watchers

Syncthing uses [inotify](https://man7.org/linux/man-pages/man7/inotify.7.html) to monitor file system events, with one inotify watcher per monitored directory.
Linux defaults to a maximum of 8192 inotify watchers.
Using the Syncthing Enterprise app to sync directories with greater than 8191 subdirectories (possibly lower if other services are also utilizing inotify) produces errors that prevent automatic monitoring of file system changes.

Increase inotify values to allow Syncthing to monitor all sync directories.
Add a sysctl variable to ensure changes persist through reboot.

Go to **System > Advanced** and locate the [**Sysctl** widget](https://www.truenas.com/docs/scale/scaletutorials/systemsettings/advanced/#managing-sysctl-variables).

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSysctlWidget.png" alt="Sysctl Widget" id="Sysctl Widget" >}}

Click **Add** to open the **Add Sysctl** screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddSysctlConfigScreen.png" alt="Add Sysctl Screen" id="Add Sysctl Screen" >}}

Enter **fs.inotify.max_user_watches** in **Variable**.

Enter a **Value** larger than the number of directories monitored by Syncthing.
There is a small memory impact for each inotify watcher of 1080 bytes, so it is best to start with a lower number, we suggest 204800 and increase if needed.

Enter a **Description** for the variable, such as *Increase inotify limit*.

Select **Enabled** and click **Save**.

## Securing the Syncthing Web UI

After installing and starting the Syncthing application, launch the Syncthing web UI.
Go to **Actions > Settings** and set a user password for the web UI.

{{< trueimage src="/images/SCALE/Apps/SyncthingUIActionsMenu.png" alt="Syncthing UI Actions Menu" id="Syncthing UI Actions Menu" >}}

## Using the Syncthing Web Portal for TrueNAS
{{< include file="/static/includes/SyncthingWebPortalInfo.md" >}}
