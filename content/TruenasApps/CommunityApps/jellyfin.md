---
title: "Jellyfin"
description: "Provides installation instructions for the Jellyfin application in TrueNAS."
weight: 
aliases:
 - /scale/scaletutorials/apps/communityapps/jellyfin/
tags:
- apps
- media
keywords:
- nas data storage
- software storage solutions
- flash storage
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!--Comment or remove the following line if your PR changes provide a complete, up-to-date, and working installation tutorial -->
{{< include file=\"/static/includes/apps/CommunityPleaseImprove.md\" >}}

[Jellyfin](https://jellyfin.org/) is a volunteer-built media solution that puts you in control of managing and streaming your media.

Jellyfin enables you to collect, manage, and stream media files. Official and third-party Jellyfin streaming clients are available on most popular platforms.

TrueNAS makes installing Jellyfin easy, but you must use the Jellyfin web portal to configure accounts and manage libraries.

{{< include file="/static/includes/ProposeArticleChange.md" >}}

## First Steps

The Jellyfin app in TrueNAS installs, completes the initial configuration, then starts the Jellyfin web portal.
When updates become available, TrueNAS alerts and provides easy updates.

You can configure environment variables at any time after deploying the application.

TrueNAS does not need advance preparation.

You can allow TrueNAS to create the datasets Jellyfin requires automatically during app installation.
Or before beginning app installation, [create the datasets]({{< relref "DatasetsSCALE.md" >}}) to use in the **Storage Configuration** section during installation.
Jellyfin requires two datasets: **config** and **cache**.
You can organize these as one parent with two child datasets, for example <file>mnt/tank/jellyfin/config</file>, <file>mnt/tank/jellyfin/cache</file>, and so on.
You can choose to create a static **transcodes** dataset or use temporary storage in the disk or memory for transcoding.

If you want to run the application with a user or group other than the default apps (568) user and group, create them now.

## Installing the Jellyfin Application

To install the **Jellyfin** application, go to **Apps**, click **Discover Apps**, either begin typing Jellyfin into the search field or scroll down to locate the **Jellyfin** application widget.

{{< trueimage src="/images/SCALE/Apps/JellyfinWidget.png" alt="Jellyfin App Widget" id="Jellyfin App Widget" >}}

Click on the widget to open the **Jellyfin** application details screen.

{{< trueimage src="/images/SCALE/Apps/JellyfinAppDetailsScreen.png" alt="Jellyfin App Details Screen" id="Jellyfin App Details Screen" >}}

Click **Install** to open the Jellyfin application configuration screen.

Application configuration settings are presented in several sections, each explained below.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinScreen.png" alt="Install Jellyfin Screen" id="Install Jellyfin Screen" >}}

Accept the default values in **Application Name** and **Version**.

Accept the defaults in **Jellyfin Configuration**, **User and Group Configuration**, and **Network Configuration** or change to suit your use case.
You must select **Host Network** under **Network Configuration** if using [DLNA](https://jellyfin.org/docs/general/networking/dlna/).

Jellyfin requires three app storage datasets.
You can allow TrueNAS to create them for you, or use the dataset(s) created in [First Steps](#first-steps).
Select the storage options you want to use for **Jellyfin Config Storage** and **Jellyfin Cache Storage**.
Select **ixVolume (dataset created automatically by the system)** in **Type** to let TrueNAS create the dataset or select **Host Path** to use the existing datasets created on the system.

Jellyfin also requires a dataset or [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) for **Jellyfin Transcodes Storage**.
Select **ixVolume (dataset created automatically by the system)** in **Type** to let TrueNAS create the dataset, select **Host Path** to use an existing dataset created on the system, or select **emptyDir** to use a temporary storage volume on the disk or in memory.

Solid state storage is recommended for config and cache storage.
Do not use the same spinning disk device for both cache and config and media storage libraries.

Mount one or more media libraries using **Additional Storage**.
Click **Add** to enter the path(s) on your system.
Select **Host Path (Path that already exists on the system)** or **SMB Share (Mounts a persistent volume claim to a SMB share)** in **Type**.
Enter a **Mount Path** to be used within the Jellyfin container. For example, the local Host Path /mnt/tank/video/movies could be assigned the Mount Path /media/movies.
Define the **Host Path** or complete the SMB Share Configuration fields.
See [Mounting Additional Storage](#mounting-additional-storage) below for more information.

Accept the defaults in **Resource Configuration** or change the CPU and memory limits to suit your use case.

Click **Install**.

A container launches with root privileges to apply the correct permissions to the Jellyfin directories.
Afterward, the Jellyfin container runs as a non-root user (default: 568).
Configured storage directory ownership is changed if the parent directory does not match the configured user.

The system opens the **Installed Applications** screen with the Jellyfin app in the **Deploying** state.
When the installation completes it changes to **Running**.

{{< trueimage src="/images/SCALE/Apps/JellyfinInstalled.png" alt="Jellyfin Installed" id="Jellyfin Installed" >}}

Click **Web Portal** on the **Application Info** widget to open the Jellyfin web interface initial setup wizard to set up your admin account and begin administering libraries.

{{< trueimage src="/images/SCALE/Apps/JellyfinWebPortal.png" alt="Jellyfin Web Portal" id="Jellyfin Web Portal" >}}

## Editing the Jellyfin Application

Go to the **Installed Applications** screen and select Jellyfin from the list of installed applications.
Click **Edit** on the **Application Info** widget to open the **Edit Jellyfin** screen.
The settings on the edit screen are the same as on the install screen.
You cannot edit **Storage Configuration** paths after the initial app install.

Click **Update** to save changes.
TrueNAS automatically updates, recreates, and redeploys the Jellyfin container with the updated environment variables.

## Understanding Jellyfin Settings

The following sections provide more detailed explanations of the settings found in each section of the **Install Jellyfin** screen.

### Application Name Settings

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

### Jellyfin Configuration Settings

You can accept the defaults in the **Jellyfin Configuration** settings, or enter the settings you want to use.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinConfigSettings.png" alt="Jellyfin Configuration Settings" id="Jellyfin Configuration Settings" >}}

You can enter a **Published Server URL** for use in UDP autodiscovery, or leave it blank.

If needed, click **Add** to define **Additional Environment Variables**, see the Jellyfin [Configuration](https://jellyfin.org/docs/general/administration/configuration/) documentation for options.

### User and Group Settings

You can accept the default value of 568 (apps) in **User ID** and **Group ID** or define your own.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinUserGroupSettings.png" alt="Jellyfin User and Group Settings" id="Jellyfin User and Group Settings" >}}

This user and group are used for running the Jellyfin container only and cannot be used to log in to the Jellyfin web interface.
Create an admin user in the Jellyfin initial setup wizard to access the UI.

### Networking Settings

Select **Host Network** under **Network Configuration** if using [DLNA](https://jellyfin.org/docs/general/networking/dlna/), to bind network configuration to the host network settings.
Otherwise, leave **Host Network** unselected.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinNetworkConfig.png" alt="Jellyfin Networking" id="Jellyfin Networking" >}}

Accept the default port numbers in **Web Port**.
The SCALE Jellyfin app listens on port **30013**.

Refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.
To change the port numbers, enter a number within the range 9000-65535.

### Storage Settings

You can install Jellyfin using the default setting **ixVolume (dataset created automatically by the system)** or use the host path option with datasets [created before installing the app](#first-steps).

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinStorageConfigixVolume.png" alt="Jellyfin Configure Storage ixVolumes" id="Jellyfin Configure Storage ixVolumes" >}}

Select **Host Path (Path that already exists on the system)** to browse to and select the datasets.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinStorageConfigHostPath.png" alt="Jellyfin Host Paths" id="Jellyfin Host Paths" >}}

For **Jellyfin Transcodes Storage**, choose **ixVolume**, **Host Path**, or **emptyDir (Temporary directory created on the disk or in memory)**. An emptyDir uses ephemeral storage either on the disk or by mounting a tmpfs (RAM-backed filesystem) directory for storing transcode files.

#### Mounting Additional Storage

Click **Add** next to **Additional Storage** to add the media storage path(s) on your system.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinAdditionalStorage.png" alt="Jellyfin Additional Storage" id="Jellyfin Additional Storage" >}}

Select **Host Path (Path that already exists on the system)** or **SMB Share (Mounts a persistent volume claim to a SMB share)** in **Type**.
You can select **ixVolume (dataset created automatically by the system)** to create a new library dataset, but this is not recommended.

Mounting an SMB share allows data synchronization between the share and the app.
The SMB share mount does not include ACL protections at this time. Permissions are currently limited to the permissions of the user that mounted the share. Alternate data streams (metadata), finder colors tags, previews, resource forks, and MacOS metadata is stripped from the share along with filesystem permissions, but this functionality is undergoing active development and implementation planned for a future TrueNAS release.

For all types, enter a **Mount Path** to be used within the Jellyfin container.
For example, the local **Host Path** <file>/mnt/tank/video/movies</file> could be assigned the **Mount Path** <file>/media/movies</file>.

{{< expand "Additional Storage Fields" "v" >}}
{{< truetable >}}
| Type      | Field             | Description                                                 |
|-----------|-------------------|-------------------------------------------------------------|
| All       | Mount Path        | The virtual path to mount the storage within the container. |
| Host Path | Host Path         | The local path to an existing dataset on the System.        |
| ixVolume  | Dataset Name      | The name for the dataset the system creates.                |
| SMB Share | Server            | The server for the SMB share.                               |
| SMB Share | Share             | The name of the share.                                      |
| SMB Share | Domain (Optional) | The domain for the SMB share.                               |
| SMB Share | Username          | The user name used to access the SMB share.                 |
| SMB Share | Password          | The password for the SMB share user.                        |
| SMB Share | Size (in Gi)      | The quota size for the share volume. You can edit the size after deploying the application if you need to increase the storage volume capacity for the share. |
{{< /truetable >}}
{{< /expand >}}

### Resource Configuration Settings

Accept the default values in **Resources Configuration** or enter new CPU and memory values
By default, this application is limited to use no more than 4 CPU cores and 8 gibibytes available memory.

{{< trueimage src="/images/SCALE/Apps/InstallJellyfinResourceConfig.png" alt="Jellyfin Resource Limits" id="Jellyfin Resource Limits" >}}

To customize the CPU and memory allocated to the container Jellyfin uses, enter new CPU values as a plain integer value followed by the suffix m (milli).
Default is 4000m, which means Jellyfin is allowed to use 4 CPU cores.

Accept the default value 8Gi allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example 4G.

Systems with compatible GPU(s) display devices in **GPU Configuration**.
Use the **GPU Resource** dropdown menu(s) to configure device allocation.

See [Allocating GPU]({{< relref "/content/TruenasApps/_index.md#allocating-gpu" >}}) for more information about allocating GPU devices in TrueNAS.
