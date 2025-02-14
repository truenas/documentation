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

## Getting Started

All applications added to TrueNAS are intended to expand system functionality far beyond what is typically expected from a NAS.

Applications are provided "as-is" and can introduce system stability or security issues when installed.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

You must choose a pool before you can install an application.
If you do not choose the pool before attempting to install an application, TrueNAS prompts you again after you click **Install** on an application information screen.
Choose a pool with enough storage capacity to support all applications you plan to install.
For more information on choosing a pool for apps, see [Choosing the Apps Pool]({{< relref "ManagingApps.md #choosing-the-apps-pool" >}}).

Access the default system-level settings through the **Configuration** button at the top right of the **Installed** applications screen.

For more information on app screens and functions, see [Apps Screens]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}).
For general instructions on installing and managing TrueNAS apps, see [Managing TrueNAS Apps]({{< relref "ManagingApps.md" >}})

TrueNAS apps have a **Run as** user. This user shows on each app information screen, and after installed and running, on the **Application Metadata** widget for the app.
Some applications deploy as the **root** user for initial configuration before operating as a non-root user.

## App General Settings

The **Configuration** button provides access to app settings that globally apply to apps, for example, the app pool, container images, app trains (catalogs), and if the system has an NVIDIA GPU, the option to update the NVIDIA drivers.
These settings are not accessible from the individual app installation wizards.
The pool management options are **Choose Pool** and **Unset Pool**

To manage container images in TrueNAS apps, use **Manage Container Images**

**Settings** provides access to options to manage the trains (catalogs of apps) and general GPU settings such as NVIDIA drivers.

### App Trains

TrueNAS applications are available in three main trains (catalogs):

* **stable** - Default train of official apps that are vetted and maintained by iXsystems.
  These apps are chosen because of the features and functionality of the app and how they integrate with TrueNAS.
* **enterprise** - Default train of apps that are simplified and validated for Enterprise users for Enterprise-licensed systems, and maintained by iXsystems.
* **community** - Optional train of apps that are proposed and maintained by community users.

The **test** train is for apps that are available for testing before general release.

All trains populate the **Discover** apps screen. The **stable** train is the default catalog of apps for community users.
The **enterprise** train is the default catalog of apps for Enterprise-licensed systems.
All users can add any of the other trains.
For more information on adding and managing trains, see [Managing TrueNAS Apps]({{< relref "ManagingApps.md #managing-app-trains" >}}).

The **community** train is the catalog of community-proposed and maintained apps.
Some apps proposed by community members might be adopted as official apps and moved to the **stable** apps train.
iXsystems maintains official apps for non-enterprise and community users.

To view app trains, click **Configuration** and select **Settings** on the dropdown list.
To show only one train of apps, for example, the **enterprise** train, after selecting **enterprise** clear the **stable** checkbox and click **Save**.
Refresh the catalog after making changes to update what the **Discover** screen shows. 

See [Managing App Trains]({{< relref "UsingTrains.md" >}}) for more information on adding or removing a train.

### App Network Settings

TrueNAS allows adding a range of IP addresses through general app **Configuration** settings.

{{< hint type="info" title="Apps Networking Troubleshooting Tip!" >}}
This setting replaces the **Kubernetes Settings** option for **Bind Network** in 24.04 and earlier.
Use to resolve issues where apps experience issues where TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

{{< include file="/static/includes/apps/AppsVMsNoHTTPS.md" >}}

### App Directory Services

{{< include file="/static/includes/apps/AppsDirectoryService.md" >}}

### NVIDIA Drivers

Beginning in TrueNAS 24.10, NVIDIA drivers are not automatically installed, instead, users must manually install drivers in the TrueNAS UI.
For more information on the NVIDIA drivers option, see [Installing NVIDIA Drivers]({{< relref "ManagingApps.md #installing-nvidia-drivers" >}}).

### Monitoring for Docker Image Updates

**Check for docker image updates** (selected by default) enables TrueNAS to periodically check for Docker image updates.
This applies to all Docker images present on the system for either catalog or custom applications.
Disable to prevent TrueNAS from monitoring for upstream image updates.

## Installed Applications Table

The installed **Applications** table lists installed applications, the current status of the app, and performance statistics for the app.

The **Applications** table defaults to selecting the first app row listed and showing the application widgets for that first app.
To modify installed application settings, click on the app row in the **Applications** table, then click **Edit** on the **Application Info** widget.

The app shows a banner if an update is available for the app.

Each app has a set of widgets that show additional information about the app, a link to the app web portal if available, and function buttons to update, edit, or delete the app.
The **Workloads** widget shows the IP address and ports for the app, and icon buttons that open a log file, a shell screen for the container pod, and volume mount information.

### Viewing App Logs

Click <span class="iconify" data-icon="mdi:text-box" title="Logs">Logs</span> **View Logs** on the **Workloads** widget for the app to open **Container Logs** screen showing the log file.
Apps stuck in a deploying state can result from various configuration problems.
Check the app log for deployment issues encountered to see where the problem is occurring.
To close the log screen and return to the **Applications** screen, click **Applications** on the top breadcrumb.

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

### Understanding App Versions

There are two versions associated with applications: **App Version** and **Version**.
These two versions show on the information screen for each app and in the **Application Info** widget on the **Installed** applications screen.

**App Version** is the version of the upstream Docker image the app installs, such as *24.04.10.2.1* for Collabora.

**Version** is the revision number of the app in the [TrueNAS app train](https://github.com/truenas/apps/tree/master/trains), for example *1.2.2*.
**Version** is the number used to identify app updates in TrueNAS.

## Installing Apps

The first time you go to **Apps**, a dialog prompts you to choose the pool for apps to use. You must set the app pool before you can install applications.
Select the pool as described in the [**Choosing the Apps Pool**](#choosing-the-apps-pool).

The **Installed** applications screen shows the **Check Available Apps** option if no apps are installed.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

Click either **Check Available Apps** or **Discover Apps** to open the **[Discover](#using-the-discover-applications-screen)** screen.

Search for the application widget, then click on that widget to open the information screen for the app and access the installation wizard.

{{< include file="/static/includes/apps/AppsSMBErrorWarning.md" >}}

If an application requires specific host path datasets, create the datasets before installing the application.
For example, the [Nextcloud]({{< relref "InstallNextCloudMedia.md" >}}) app requires three datasets: **html** for app data, **data** for user data, and **postgres_data** for the database data storage volume.
[Create these datasets]({{< relref "DatasetsSCALE.md" >}}) before installing the app.
See [Understanding App Storage Volumes](#understanding-app-storage-volumes), individual app information screens, and app tutorials for more information.

### App Installation Wizards
TrueNAS provides an app installation wizard for each app in the **stable** and **enterprise** trains.
Community apps are proposed and supported by community members, and might also provide an app installation wizard.

{{< hint type="info" title="Community Maintained Apps" >}}
Apps submitted and maintained by community members using the **Custom App** option might not include an installation wizard.
Refer to tutorials created and maintained by the community for more information on deploying and using these applications.
{{< /hint >}}

To access an app install wizard, click on an app widget to open the information screen for that app, then click **Install** to open the wizard.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

App installation wizard configuration sections vary by application, with some including more configuration areas than others.
Each application tutorial provides a **Before You Begin** section with information and steps to take before launching an app installation wizard.
If a tutorial is not written for the app, open the installation wizard to review setting requirements.
Exit the wizard to take the necessary steps before returning to install the application.
Click **Discover** on the breadcrumb at the top of the screen to exit without saving.

{{< include file="/static/includes/apps/InstallWizardSettingsOverview.md" >}}

After clicking **Install** at the bottom of an application wizard screen, the wizard closes and a progress dialog opens. When the app progresses to a certain percentage complete,the **Installed** applications screen opens showing the application in the **Deploying** state. App status changes to **Running** when the app is ready to use. 
Applications show **Crashed** if the installation process crashes and fails to complete.
Clicking **Stop** changes the status to **Stopping** before going to **Stopped**. Stop apps before making configuration changes. To restart the application, click **Start**.
Clicking **Update** stops the app, applies the update, and then restarts the app.

Refer to individual tutorials in the [Stable]({{< relref "/content/TruenasApps/StableApps/_index.md" >}}), [Community]({{< relref "/content/TruenasApps/CommunityApps/_index.md" >}}), or [Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}) sections of the Documentation Hub for more details on configuring application settings.

#### GPU Passthrough

Users with compatible hardware can pass through a GPU device to an application for use in hardware acceleration.

GPU devices can be available for the host operating system (OS) and applications or can be [isolated for use in a Virtual Machine (VM)]({{< relref "managegpuscale.md" >}}).
A single GPU cannot be shared between the OS/applications and a VM.

The GPU passthrough option shows in the **Resources Configuration** section of the application installation wizard, or on the **Edit** screen for a deployed application.

{{< trueimage src="/images/SCALE/Apps/InstallAppResourceConfigurationGPU.png" alt="Select GPU Passthrough" id="Select GPU Passthrough" >}}

Click **Passthrough available (non-NVIDIA) GPUs** to have TrueNAS pass an AMD or Intel GPU to the application.

**Select NVIDIA GPU(s)** displays if an NVIDIA GPU is available, with [installed drivers](#installing-nvidia-drivers).
Click **Use this GPU** to pass that GPU to the application.

## Installing Custom Apps

{{< include file="/static/includes/apps/CustomAppIntro.md" >}}

{{< include file="/static/includes/apps/AppsCustomApp.md" >}}

See [Installing Custom Applications]({{< relref "UsingCustomApp.md" >}}) for more information.

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
