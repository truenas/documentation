---
title: "TrueNAS Apps"
description: "Expanding TrueNAS functionality with applications."
geekdocCollapseSection: true
weight: 22
aliases:
 - /scale/scaletutorials/apps/usingapps/
 - /scale/scaleuireference/apps/usingapps/
 - /scale/apps/usingapps/
 - /scale/scaleclireference/app/
 - /scale/scaletutorials/apps/
 - /images/SCALE/Apps/AppsAddCatalogScreen.png
cascade:
  - _target:
    book: "TrueNASApps"
  - _target:
    volume: "SCALE"
  - _target:
    volume: "Appendices" 
tags:
- apps
keywords:
- nas data storage
- software storage solutions
---


TrueNAS applications allow for quick and easy integration of third-party software and TrueNAS.
The TrueNAS applications backend changed in 24.10 to Docker images managed with Docker Compose.
Earlier TrueNAS releases operated with Kubernetes K3 and Helm providing containers for applications.
For more information on this change refer to the [24.10 Release Notes](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/).

{{< include file="/static/includes/ProposeArticleChange.md" >}} 
<!-- Update to an app specific snippet -->

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure.
TrueNAS delivers a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.
TrueNAS applications expand the capabilities of your system by adding third-party software, but they can add significant risk to system stability and security.

As of 24.10, TrueNAS apps use Docker containers and Docker Compose for deployment.
Docker is an open-source software that manages images and container deployments.

All applications added to TrueNAS are intended to expand system functionality far beyond what is typically expected from a NAS.

Applications are provided "as-is" and can introduce system stability or security issues when installed.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

## Getting Started

You must choose a pool before you can install an application.
TrueNAS prompts you to choose the pool when you first click on **Apps**.
You can exit out of this if you are not ready to deploy apps, do not have a pool designated for apps, or just want to look at the app options.
Choose a pool with enough storage capacity to support all applications you plan to install.
If you do not choose the pool before attempting to install an application, TrueNAS prompts you again after you click **Install** on an application information screen.

Change general app settings to match your use case and preferences.
App general setting are described in [Configuring App General Settings](#configuring-app-general-settings).
Access the default system-level settings through the **Configuration** button at the top right of the **Installed** applications screen.

For more information on app screens and functions, see [Apps Screens]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}).
For general instructions on installing and managing TrueNAS apps, see [Managing TrueNAS Apps]({{< relref "ManagingApps.md" >}})

TrueNAS apps have a **Run as** user. This user shows on each app information screen, and after installed and running, on the **Application Metadata** widget for the app.
Some applications deploy as the **root** user for initial configuration before operating as a non-root user.

Click **Discover** to view, search for and install apps, and to refresh the TrueNAS app catalogs on your system after adding/removing trains.

### Choosing the Apps Pool

Click **Choose Pool** to choose the pool.

Select the pool and click **Save**.

{{< trueimage src="/images/SCALE/Apps/AppsSettingsChoosePool.png" alt="Choosing a Pool for Apps" id="Choosing a Pool for Apps" >}}

{{< include file="/static/includes/apps/AppsPool.md" >}}

#### Unsetting the Apps Pool

Click **Unset Pool** to remove the pool for applications and delete any ixVolumes created for individual application storage.
ixVolumes are added to the **ix-apps** hidden dataset created when you set the apps pool. These storage volumes exist until you delete the application or unset the apps pool.
To maintain individual application data, create datasets to use with the host path storage option.
 
To select a different pool for apps, click **Configuration** and select **Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

To reset the apps pool, click **Choose Pool** and select the pool.

## Configuring App General Settings

The **Configuration** button provides access to app settings that globally apply to apps, for example, the app pool, container images, app trains (catalogs), and if the system has an NVIDIA GPU, the option to update the NVIDIA drivers. Configuration settings allow setting up multiple IP addresses and directory service authentication.
Click on **Configuration** at the top right of the screen to expand the dropdown. These settings are not accessible from the individual app installation wizards.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

For information on managing trains, see [Managing App Trains]({{< relref "UsingTrains.md" >}}).

The pool management options are **Choose Pool** and **Unset Pool**

To manage container images in TrueNAS apps, use **Manage Container Images**

To access to options to manage the trains (catalogs of apps) and general GPU settings such as NVIDIA drivers, click **Settings**.

### Selecting App Trains

TrueNAS applications are available in three main trains (catalogs):

* **stable** - Default train of official apps that are vetted and maintained by iXsystems.
  These apps are chosen because of the features and functionality of the app and how they integrate with TrueNAS.
* **enterprise** - Default train of apps that are simplified and validated for Enterprise users for Enterprise-licensed systems, and maintained by iXsystems.
* **community** - Optional train of apps that are proposed and maintained by community users.

The **test** train is for apps that are available for testing before general release.

All trains populate the **Discover** apps screen. The **stable** train is the default catalog of apps for community users.
The **enterprise** train is the default catalog of apps for Enterprise-licensed systems.

The **community** train is the catalog of community-proposed and maintained apps.
Some apps proposed by community members might be adopted as official apps and moved to the **stable** apps train.
iXsystems maintains official apps for non-enterprise and community users.

To view app trains, click **Configuration** and select **Settings** on the dropdown list.
Select the checkbox to the left of each train to show the catalog of apps. Clear the checkbox to not show the catalog of apps.
To show only one train of apps, for example, the **enterprise** train, after selecting **enterprise** clear the **stable** checkbox and click **Save**.
Refresh the catalog after making changes to update what the **Discover** screen shows.

Users can add any train to their default option.
For more information on adding and managing trains, see [Managing TrueNAS Apps]({{< relref "ManagingApps.md #managing-app-trains" >}}).

### App Network Settings

TrueNAS allows adding a range of IP addresses through general app **Configuration** settings.
Go to **Apps > Installed**, click **Configuration**, and select **Settings**.

To add another range of IP addresses, click **Add** to the right of **Address Pools**, then select a range from the dropdown list of options, and enter the desired value in **Size**.

**Base** shows the default IP address and subnet, and **Size** shows the network size of each docker network that is cut off from the base subnet.

{{< hint type="info" title="Apps Networking Troubleshooting Tip!" >}}
This setting replaces the **Kubernetes Settings** option for **Bind Network** in 24.04 and earlier.
Use to resolve issues where apps experience issues where TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

{{< include file="/static/includes/apps/AppsVMsNoHTTPS.md" >}}

### App Directory Services

{{< include file="/static/includes/apps/AppsDirectoryService.md" >}}

### Installing NVIDIA Drivers

Beginning in TrueNAS 24.10, NVIDIA drivers are not automatically installed, instead, users must manually install drivers in the TrueNAS UI.
If running TrueNAS 24.10 or higher:

1. Go to **Apps > Installed** and click on the **Configuration**.

2. Click on **Settings** to open the **Settings** configuration screen.

3. Select **Install NVIDIA Drivers**, which is available to users with compatible GPUs.

4. Select **Install NVIDIA Drivers**, and click **Save.**

### GPU Passthrough

Users with compatible hardware can pass through a GPU device to an application for use in hardware acceleration.

GPU devices can be available for the host operating system (OS) and applications or can be [isolated for use in a Virtual Machine (VM)]({{< relref "managegpuscale.md" >}}).
A single GPU cannot be shared between the OS/applications and a VM.

The GPU passthrough option shows in the **Resources Configuration** section of the application installation wizard, or on the **Edit** screen for a deployed application.

{{< trueimage src="/images/SCALE/Apps/InstallAppResourceConfigurationGPU.png" alt="Select GPU Passthrough" id="Select GPU Passthrough" >}}

Click **Passthrough available (non-NVIDIA) GPUs** to have TrueNAS pass an AMD or Intel GPU to the application.

**Select NVIDIA GPU(s)** displays if an NVIDIA GPU is available, with [installed drivers](#installing-nvidia-drivers).
Click **Use this GPU** to pass that GPU to the application.

### Monitoring for Docker Image Updates

**Check for docker image updates** (selected by default) enables TrueNAS to periodically check for Docker image updates.
This applies to all Docker images present on the system for either catalog or custom applications.
Disable to prevent TrueNAS from monitoring for upstream image updates.

Go to the **Installed** applications screen, click on **Configuration**, and then click on **Settings** to open the screen.
Scroll down to check this option. If check-marked it is enabled. Select to clear the checkbox to disable it.

Click **Save** after making a change.

## Managing Container Images

While on the **Installed** application screen, click **Configuration**, then click on **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Delete images or add new ones from this screen.

### Downloading an Image

**Pull Image** downloads a specific custom image to TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

To download a specific image, click **Pull Image**, then enter a valid path and tag to the image.
Enter the path using the format *registry*/*repository*/*image* to identify the specific image.
The default **latest** tag downloads the most recent image version.

When downloading a private image, enter user account credentials that allow access to the private registry.

## Installed Applications Table

The installed **Applications** table lists installed applications, shows the current status (state of the app), and performance statistics for each app.

The **Applications** table defaults to selecting the first app row listed and showing the application widgets for that app.
To modify installed application settings, click on the app row in the **Applications** table, then click **Edit** on the **Application Info** widget.

The app shows a banner if an update is available for the app.

Each app has a set of widgets with additional information about the app. 
The **Application Info** widget shows a link to the app web portal if available, and function buttons to update, edit, or delete the app.
The **Workloads** widget shows the IP address and ports for the app, and icon buttons that open a log file, a shell screen for the container pod, and volume mount information.
The **Application Metadata** widget shows host mounts, capabilites of the app, and run-as content such as the app user name and UID/GID numbers.

### Viewing App Logs

Click <span class="iconify" data-icon="mdi:text-box" title="Logs">Logs</span> **View Logs** on the **Workloads** widget for the app to open **Container Logs** screen showing the log file.
Apps stuck in a deploying state can result from various configuration problems.
Check the app log for deployment issues encountered to see where the problem is occurring.
To close the log screen and return to the **Applications** screen, click **Applications** on the top breadcrumb.

### Understanding App Versions

There are two versions associated with applications: **App Version** and **Version**.
These two versions show on the information screen for each app and in the **Application Info** widget on the **Installed** applications screen.

**App Version** is the version of the upstream Docker image the app installs, such as *24.04.10.2.1* for Collabora.

**Version** is the revision number of the app in the [TrueNAS app train](https://github.com/truenas/apps/tree/master/trains), for example *1.2.2*.
**Version** is the number used to identify app updates in TrueNAS.

### Upgrading Apps

Upgrade options only show if TrueNAS detects an available update for installed applications.

TrueNAS notifies users of available updates in several ways:

* Yellow circle with an exclamation mark on the app row.
* **Update** banner and button at the top of the **Installed** application screen.

Select an app row in the **Applications** stable to see the **Update** button in the **Application Info** widget for that app.
Select the checkbox(es) to the right of an app or each app with the update indicator to show the **Bulk Actions** button above the **Applications** table.
When multiple apps have available updates, the **Update All** button shows at the top of the screen.

To upgrade an app:
1. Select the app row and click **Update** on the **Application Info** widget.
2. Select the **Update** or **Update All** button at the top of the screen.
3. Select the checkbox to the left of the app row, then click **Update** or **Update All**.

Click **Bulk Actions** and select **Upgrade All** to upgrade multiple selected apps.

Clicking **Update** opens an upgrade window that includes two selectable options, **Images (to be updated)** and **Changelog**.
Click on the down arrow to see the options available for each.

{{< trueimage src="/images/SCALE/Apps/AppUpdateWindow.png" alt="Update Application Window" id="Update Application Window" >}}

Click **Upgrade** to begin the process. A counter dialog opens showing the upgrade progress.

TrueNAS stops the app, applies the update, then restarts the app. When updating multiple apps, TrueNAS updates each app, one at a time.
When complete, the update badge and buttons disappear and the application **Update** state on the **Installed** screen changes from **Update Available** to **Up to date**.

#### Troubleshooting Updates

If you did not select the **Force Flag** when setting up storage and ACL permissions in the app installation wizard when you first configured the app, you need to enable this function.

Select the app row, stop the app, and click **Edit** in the **Application Info** widget to open the **Edit *appName*** screen.

Scroll down to **Storage Configuration** and select the **Force Flag** option** for each of the storage volumes. This allows updating the dataset when it has existing data, but it does not overwrite your existing data.

### Deleting Apps

To delete an application, click <i class="fa fa-stop" aria-hidden="true"></i> **Stop** on the application row.

{{< hint type="warning" >}}
Make sure you have the correct app row selected or you might delete the first app listed in the table!
{{< /hint >}}

After the app status changes to **Stopped**, select the app row, then click **Delete** on the **Application Info** widget for the selected application to open the **Delete** dialog.
{{< trueimage src="/images/SCALE/Apps/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="Delete Application Dialog" >}}

Select **Remove ixVolumes** to delete hidden app storage from the Apps pool.

Click **Confirm** then **Continue** to delete the application.

### Stopping Apps

To stop an app showing either the **Deploying** or **Running** status, click the <i class="fa fa-stop" aria-hidden="true"></i> **Stop** button on the **Applications** table row for the app.

### Restarting Apps

To restart a stopped app, click the <span class="material-icons">restart_alt</span> icon button restart the app.
Clicking restart when the app is still running, first stops the app and then restarts it.

## Understanding App Storage Volumes

The **ix-apps** dataset is the base-level storage volume for app data.
This dataset is hidden by default.

Configuration options for individual apps include one or more of the following storage types: ixVolume datasets, host path datasets, SMB share volumes, and temporary Tmpfs and other directories.

{{< include file="/static/includes/apps/AppsDatasets.md" >}}

## Discover Screen

The **Discover** screen shows widgets for applications included in the train(s) selected on the **Train Settings** screen.

Non-Enterprise systems show the apps in the **stable** train by default.
These official applications are pre-configured to allow deploying the app after accepting the default values for a test deployment.
To fully deploy apps, enter some customization including host path storage volumes.

Enterprise-licensed systems show apps in the **enterprise** train.

Users can add any train listed on the [**Settings**](#changing-app-trains) screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

The **Discover** screen shows links to access other functions:

* [**Refresh Catalog**](#refreshing-the-apps-catalog) - Updates the screen to show app widgets in selected trains after making changes.
* **Manage Installed Apps** - Opens the **Installed** apps screen.
  Click **Configuration** to manage general application settings, or select the row of an installed application in the **Applications** table to access app managment functions for that application.

Click on an app widget to open the app information screen with details about the selected application.

{{< trueimage src="/images/SCALE/Apps/CollaboraInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

### Refreshing the Apps Catalog

Click **Refresh Catalog** on the **Discover** screen to refresh the app catalog.
Refresh the app catalog after adding or editing the app trains on your system.

### Using the Discover Screen Filters

To change how app widgets show on the screen, click the down arrow to the right of **Filters**, and select the filter option to use.

{{< trueimage src="/images/SCALE/Apps/DiscoverAppsScreenFilterOptions.png" alt="Discover Apps Filter Options" id="Discover Apps Filter Options" >}}

To quickly locate a specific app, begin typing the name in the search field. The screen shows apps matching the typed entry.

To sort app widgets by category, click on **Categories**.
To select multiple categories, click **Categories** again and select another category from the dropdown.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

After installing an application, the **Installed** applications screen shows the app in the **Deploying** state.
The status changes to **Running** when the application is fully deployed and ready to use.

## Installing Apps

You must set the app pool before you can install applications.
Select the pool as described in the [**Choosing the Apps Pool**](#choosing-the-apps-pool).

If no apps are installed, the **Installed** applications screen shows the **Check Available Apps** option.
Click this option or **Discover Apps** to open the **[Discover](#using-the-discover-applications-screen)** screen where you select the apps you want to install.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

Search for the application widget, then click on that widget to open the information screen for the app and access the installation wizard.

{{< include file="/static/includes/apps/AppsSMBErrorWarning.md" >}}

There are two primary app installation methods: the app installation wizard or the custom install option.

TrueNAS uses the app installation wizards for apps in the [**enteprise**]({{< relref "/content/TruenasApps/Enterprise/_index.md" >}}) and [**stable**] ({{< relref "/content/TruenasApps/Stable/_index.md" >}}) trains.
These introductory articles describe the sections in the installation wizards and show links to existing app tutorials for these trains.

The [Installing Custom Applications]({{< relref "UsingCustomApp.md" >}}) article describes installing apps that are not included in any of the TrueNAS application trains.

**Community** apps are proposed and supported by community members.

{{< hint type="info" title="Community Maintained Apps" >}}
Apps submitted and maintained by community members using the **Custom App** option might not include an installation wizard.
Refer to tutorials created and maintained by the community for more information on deploying and using these applications.
{{< /hint >}}

To prepare for app installations, refer to the articles for each train and each individual tutorials in the [Stable]({{< relref "/content/TruenasApps/StableApps/_index.md" >}}), [Community]({{< relref "/content/TruenasApps/CommunityApps/_index.md" >}}), or [Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}) sections of the Documentation Hub for more details on configuring application settings.

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
