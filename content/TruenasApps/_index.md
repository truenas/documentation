---
title: "TrueNas Apps"
description: "Expanding TrueNAS functionality with applications."
geekdocCollapseSection: true
weight: 26
aliases:
 - /scale/scaletutorials/apps/usingapps/
 - /scale/scaleuireference/apps/usingapps/
 - /scale/apps/usingapps/
 - /scale/scaleclireference/app/
 - /scale/scaletutorials/apps/
tags:
- apps
keywords:
- nas data storage
- software storage solutions
---


TrueNAS applications allow for quick and easy integration of third-party software and TrueNAS.

{{< include file="/static/includes/ProposeArticleChange.md" >}}

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure.
TrueNAS delivers a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.
TrueNAS applications expand the capabilities of your system by adding third-party software, but they can add significant risk to system stability and security.

## Getting Started
All applications added to TrueNAS are intended to expand system functionality far beyond what is typically expected from a NAS.

Applications are provided "as-is" and can introduce system stability or security issues when installed.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

You must choose a pool before you can install an application.

{{< expand "App Pool Selection" "v" >}}

{{< include file="/static/includes/AppsPoolOrDataset.md" >}}

{{< /expand >}}

{{< expand "App Dataset and File Sharing" "v" >}}

{{< include file="/static/includes/AppsFileSharing.md" >}}

{{< /expand >}}

{{< expand "Docker Compose Settings" "v" >}}

{{< include file="/static/includes/AppsDockerCompose.md" >}}

{{< /expand >}}

{{< expand "Custom Apps" "v" >}}

{{< include file="/static/includes/AppsCustomApp.md" >}}

{{< /expand >}}

{{< expand "App Directory Services" "v" >}}

{{< include file="/static/includes/AppsDirectoryService.md" >}}

{{< /expand >}}

For more information on screens and screen functions, refer to the UI Reference article on [Apps Screens]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}).

## Choosing the Application Pool
You are prompted to [select the pool for apps](#choosing-the-apps-pool) the first time you click on **Apps**.
You can exit out of this if you are not ready to deploy apps or do not have a pool configured for apps to use for storage.
You must set the pool before you can add any application. 

We recommend keeping the application use case in mind when choosing a pool.
Select a pool with enough space for all the applications you intend to use.
For stability, we also recommend using SSD storage for the applications pool.

Select the pool and click **Save**. If you close the dialog to set the pool later, click **Settings > Choose Pool** to set the pool.

{{< trueimage src="/images/SCALE/Apps/AppsSettingsChoosePool.png" alt="Choosing a Pool for Apps" id="Choosing a Pool for Apps" >}}

TrueNAS creates an **ix-applications** dataset on the chosen pool and uses it to store all container-related data.
The dataset is for internal use only.

If you want to set up new datasets to store your application data in a location separate from other storage on your system, create the datasets before installing the application.
For example, create the datasets for the Nextcloud app before installing the app.

{{< include file="/static/includes/AppsVMsNoHTTPS.md" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsGUISettingsSCALE.png" alt="General System Settings" id="General System Settings" >}}

### Unsetting the Apps Pool
To select a different pool for apps to use, click **Settings > Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

## Changing App Trains
TrueNAS applications are available in three catalogs (trains):

* **stable** - Default train of official apps, vetted by iXsystems, chosen because of the features and functionality of the app, and how they integrate with TrueNAS. 
* **enterprise** - Default train of apps, simplified and validated for for Enterprise users for Enterprise-licensed systems.
* **community** - Apps proposed and maintained by the community

The default TrueNAS **Stable** catalog populates the **Discover** apps screen with apps.

Some apps proposed by community members might be adopted as official **stable** train apps.
Official apps are maintained by iXsystems for non-Enterprise and community users.

{{< trueimage src="/images/SCALE/Apps/AppsTrainSettingsScreen.png" alt="Train Settings Add Enterprise Train" id="Train Settings Add Enterprise Train" >}}

Users can change apps on the **Discover** screen from the **Train Settings** screen.
Click **Train Settings** on the **Settings** dropdown menu to open the **Train Settings** scree, then select the desired train(s).
To show only the one train of apps, for example the **enterprise** train, after selecting **enterprise** deselect the **stable** checkbox and click **Save**. 

For more information on trains, see [Managing App Trains]({{< relref "UsingTrains.md" >}}).

Some applications deploy as the **root** user for initial configuration before operating as a non-root user.
Keep these general best practices in mind when using applications with TrueNAS.

### Managing Container Images
While on the **Installed** application screen, click **Settings** > **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Delete images or add new from this screen.

Click **Pull Image** to download a specific custom image to TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

To download a specific image, click the button and enter a valid path and tag to the image.
Enter the path using the format *registry*/*repository*/*image* to identify the specific image.
The default **latest** tag downloads the most recent image version.

When downloading a private image, enter user account credentials that allow access to the private registry.

### Upgrading Apps
Apps display a yellow circle with an exclamation point that indicates an upgrade is available, and the **Installed** application screen banner displays an **Update** or **Update All** button when upgrades are available.
To upgrade an app to the latest version, click **Update** on the **Application Info** widget or to upgrade multiple apps, click the **Update All** button on the **Installed** applications banner.
Both buttons only display if TrueNAS SCALE detects an available update for installed applications.

**Update** opens an upgrade window that includes two selectable options, **Images (to be updated)** and **Changelog**.
Click on the down arrow to see the options available for each.

{{< trueimage src="/images/SCALE/Apps/AppUpdateWindow.png" alt="Update Application Window" id="Update Application Window" >}}

Click **Upgrade** to begin the process. A counter dialog opens showing the upgrade progress.
When complete, the update badge and buttons disappear and the application **Update** state on the **Installed** screen changes from **Update Available** to **Up to date**.

### Deleting Apps
To delete an application, click <i class="fa fa-stop" aria-hidden="true"></i> **Stop** on the application row.
After the app status changes to stopped, click **Delete** on the **Application Info** widget for the selected application to open the **Delete** dialog.

{{< trueimage src="/images/SCALE/Apps/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="Delete Application Dialog" >}}

Click **Confirm** then **Continue** to delete the application.

## Installing an Application
The first time you go to **Apps**, choose the pool apps use before you can install applications.
Select the pool in the [**Choosing the Application Pool**](#choosing-the-application-pool) for more information.

The **Installed** applications screen displays **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

Click **Check Available Apps** or **Discover Apps** to open the **[Discover](#using-the-discover-applications-screen)** screen.

Search for the application widget, click on that widget to open the information screen for the app and to access the installation wizard.

{{< include file="/static/includes/AppsSMBErrorWarning.md" >}}

If the application requires specific datasets, configure these before using the installation wizard.

### Opening an App Installation Wizard
After clicking on an app widget on the **Discover Apps** screen, the information screen for that app opens.
From the application information screen, click **Install** to open the installation wizard for the application.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

The installation wizard configuration sections vary by application, with some including more configuration areas than others.
Click **Install** to review settings ahead of time to check for required settings.
Click **Discover** on the breadcrumb at the top of the installation wizard to exiting the screen without saving and until you are ready return and configure the app settings.

All applications include these basic setting sections:

{{< expand "Application Name and Version" "v" >}}
**Application Name** shows the default name for the application (typically the app name, like *storj*) and **Version** shows the installed version.

If deploying more than one instance of the application, you must change the default name. For example, *storj2* or *storj-node1*.

Do not change the version number for official apps or those included in a TrueNAS catalog.
When a new version becomes available, an **Upodate** banner shows on the **Installed** application screen, the app row shows an update alert, and the **Application Info** widget showss an update button.
Updating the app changes the version shown on the edit wizard for the application.
{{< /expand >}}

{{< expand "Application Configuration" "v" >}}
***Application* Configuration** shows required and optional settings for that app.
For example, the MinIO app uses  **MinIO Configuration**.

Typical settings include admin user credentials, environment variables, additional argument settings, name of the node, or even sizing parameters.

Sometimes users show in a **Users and Group Configuration** section.
If not using the default user and group, create the new user (and group) to manage the application before using the installation wizard.
{{< /expand >}}

{{< expand "Network Configuration" "v" >}}
**Network Configuration** shows network settings the app uses to communicate with TrueNAS and the Internet.
Settings include the default port assignment, host name, IP addresses, and other network settings.

If changing the port number to something other than the default setting, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of used and available port numbers.

Some network configuration settings include the option to add a certificate.
If a certificate is required for the application, create the certificate authority and certificate before using the installation wizard.
{{< /expand >}}

{{< expand "Storage Configuration" "v" >}}
**Storage Configuration** shows options to configure storage for the application.
Storage configuration can includes the primary data mount volume, a configuration volume, postgres volumes, and an option to add additional storage volumes.
The primary mount volumes have two options:
* **ixVolume** that creates a storage volume inside the **ix-apps** dataset. This is the default setting.
* **Host Path** that allows you to select an existing dataset created for the application. Shows additional fields to select the path to the dataset and add the mount point.

If adding an additional storage volume, click **Add** to configure additional storage volumes for the application to use in addition to the main storage volume (dataset).
The three storage options are:
* **ixVolume**
* **Host path**
* **SMB share** that allows you to create a storage volume used by an SMB share. 

If the application requires specific datasets or you want to allow SBM share access, configure the dataset(s) and SMB share before using the installation wizard.

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}
{{< /expand >}}

{{< expand "Resource Configuration" "v" >}}
**Resources Configuration** shows default CPU and memory settings for the container pod.
This section can also be named **Resource Limits**.
In most cases, accept the default settings or change these settings to limit the system resources available to the application.
{{< /expand >}}

After installing an application, the **Installed** applications screen opens showing the application in the **Deploying** state.
It changes to **Running** when the application is ready to use.

To modify installed application settings, click on the app row on the **Applications** table on the **Installed** screen, then click **Edit** on the **Application Info** widget.
Make sure you have the right app row selected or you end up accessing the first app listed in the table of deployed apps.

Refer to individual tutorials in the [Stable]({{< relref "/content/TruenasApps/StableApps/_index.md" >}}), [Community]({{< relref "/content/TruenasApps/CommunityApps/_index.md" >}}), or [Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}) sections of the Documentation Hub for more details on configuring application settings.

#### Allocating GPU
Users with compatible hardware can allocate one or more GPU devices to an application for use in hardware acceleration.
This is an advanced process that could require significant troubleshooting depending on installed GPU device(s) and application-specific criteria.

GPU devices can be available for the host operating system (OS) and applications or can be [isolated for use in a Virtual Machine (VM)]({{< relref "managegpuscale.md" >}}).
A single GPU cannot be shared between the OS/applications and a VM.

Allocate GPU from the **Resources Configuration** section of the application installation wizard screen or the **Edit** screen for a deployed application.

{{< trueimage src="/images/SCALE/Apps/ResourcesConfiguration.png" alt="Resources Configuration" id="Resources Configuration" >}}

Click the **GPU Resource** allocation row for the type of GPU (AMD, Intel, or Nvidia) and select the number of GPU devices the application is allowed access to.
It is not possible at this time to specify which available GPU device is allocated to the application and assigned devices can change on reboot.

{{< trueimage src="/images/SCALE/Apps/ResourcesConfigurationAllocateGPU.png" alt="Select GPU Allocation" id="Select GPU Allocation" >}}

{{< expand "Troubleshooting GPU Allocation" "v" >}}
If installed GPU devices do not populate as available for allocation in **GPU Configuration**:

1. Ensure the GPU devices you want to allocate are not configured as isolated.
   Go to **System > Advanced** and locate the **Isolated GPU Device(s)** widget.
   If necessary, click **Configure**, deselect the device(s) you want to allocate, and click **Save**.

2. Ensure the GPU devices you want to allocate are not assigned to any existing VMs.
   Go to **Virtualization**.
   Select an existing VM and click on that row to expand it, then click **Edit**.
   Scroll down to **GPU** and review configured devices.
   If necessary, deselect the device you want to allocate to applications.
   Repeat for any additional VMs on the system.

If the GPU was previously isolated and/or assigned to a VM, a reboot could be required to free it up for app allocation.
Restart the system then return to the **Resources Configuration** section of the application to see if expected devices are available.
{{< /expand >}}

## Discover Screen Options
The **Discover** screen shows application widgets based on the trains selected on the **Train Settings** screen.

Non-Enterprise systems show the **stable** catalog of apps by default.
These are official applications that are pre-configured and only require a name during deployment.

Enterprise-licensed systems display the **enterprise** train of applications simplified and validated for Enterprise systems.
Community users can add the **community** and **enterprise** trains on the [**Train Settings**](#changing-app-trains) screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

Use the **Discover** screen links to access other functions. 

* [**Refresh Catalog**](#refreshing-the-apps-catalog)
* **Manage Installed Apps** 

**Manage Installed Apps** opens the **Installed** apps screen where you access the **Settings** menu to manage general application settings.

<!-- commenting out until RC1 when this screen gets added back to the UI
**Custom App** opens a wizard where you can configure an unofficial app or one not included in a TrueNAS catalog. -->

### Refreshing the Apps Catalog
Click **Refresh Catalog** on the **Discover** screen to refresh the apps catalog.
Refresh the apps catalog after adding or editing the trains on your system.

### Using the Discover Screen Filters
To change the way app widgets show on the screen, click the down arrow to the right of **Filters**, and select the filter option you want to use.

{{< trueimage src="/images/SCALE/Apps/DiscoverAppsScreenFilterOptions.png" alt="Discover Apps Filter Options" id="Discover Apps Filter Options" >}}

To quickly locate a specific app, begin typing the name in the search field.

To sort app widgets by category, click in **Categories**.
To select multiple categories, click **Categories** again and select another category from the dropdown.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

After installing an application, the **Installed** applications screen shows the app in the **Deploying** state.
The status changes to **Running** when the application is fully deployed and ready to use.

<!-- commenting out until the UI includes this in RC1
## Installing Custom Applications
To deploy a custom application, go to **Discover** and click **Custom App** to open the **Install Custom App** screen.
See [Using Install Custom App]({{< relref "UsingCustomApp.md" >}}) for more information.

### Changing Custom Application Networking
Custom applications use the system-level Kubernetes Node IP settings by default.

You can assign an external interface to custom apps using  one of the **Networking** section  settings found on the **Install Custom App** screen.
-->

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
