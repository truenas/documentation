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
For more information on this change refer to the [24.10 Release Note]({{< relref "/Content/SCALE/GettingStarted/ScaleReleaseNotes.md" >}}).

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

{{< expand "Apps General Settings" "v" >}}

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

If you want to set up new datasets to store your application data in a location separate from other storage on your system, create the datasets before installing the application.
For example, create the datasets for the Nextcloud app before installing the app.

{{< include file="/static/includes/AppsVMsNoHTTPS.md" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsGUISettingsSCALE.png" alt="General System Settings" id="General System Settings" >}}

### Unsetting the Apps Pool
To select a different pool for apps to use, click **Settings > Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

## Changing App Trains
TrueNAS applications are available in three catalogs (trains):

* **stable** - Default train of official apps, vetted by iXsystems, chosen because of the features and functionality of the app, and how they integrate with TrueNAS. 
* **enterprise** - Default train of apps, simplified and validated for Enterprise users for Enterprise-licensed systems.
* **community** - Apps proposed and maintained by the community

The default TrueNAS **Stable** catalog populates the **Discover** apps screen with apps.

Some apps proposed by community members might be adopted as official **stable** train apps.
iXsystems maintains official apps for non-Enterprise and community users.

{{< trueimage src="/images/SCALE/Apps/AppsTrainSettingsScreen.png" alt="Train Settings Add Enterprise Train" id="Train Settings Add Enterprise Train" >}}

Users can change apps on the **Discover** screen from the **Train Settings** screen.
Click **Train Settings** on the **Settings** dropdown menu to open the **Train Settings** screen, then select the desired train(s).
To show only the one train of apps, for example, the **enterprise** train, after selecting **enterprise** deselect the **stable** checkbox and click **Save**. 

For more information on trains, see [Managing App Trains]({{< relref "UsingTrains.md" >}}).

Some applications deploy as the **root** user for initial configuration before operating as a non-root user.
Keep these general best practices in mind when using applications with TrueNAS.

### Managing Container Images
While on the **Installed** application screen, click **Settings** > **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Delete images or add new ones from this screen.

Click **Pull Image** to download a specific custom image to TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

To download a specific image, click the button, then enter a valid path and tag to the image.
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
The first time you go to **Apps**, you are prompted to choose the pool apps use. You must set the app pool before you can install applications.
Select the pool as described in the [**Choosing the Application Pool**](#choosing-the-application-pool).

The **Installed** applications screen displays **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

Ether click on **Check Available Apps** or **Discover Apps** to open the **[Discover](#using-the-discover-applications-screen)** screen.

Search for the application widget, then click on that widget to open the information screen for the app and access the installation wizard.

{{< include file="/static/includes/AppsSMBErrorWarning.md" >}}

If the application requires specific datasets, configure these before using the installation wizard.

### Using an App Installation Wizard
After clicking on an app widget on the **Discover Apps** screen, the information screen for that app opens.
Click **Install** to open the installation wizard for the application.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

The installation wizard configuration sections vary by application, with some including more configuration areas than others.
Each application tutorial provides information on steps to take before launching an app installation wizard, but if a tutorial does not exist, click **Install** on the app information screen to open the wizard.
Review settings ahead of time to check for required settings then exit the wizard to do the necessary steps before returning to install the application.
Click **Discover** on the breadcrumb at the top of the app wizard screen to exiting the without saving.

{{< hint type="Information" title="Community Maintained Apps" >}}
Apps submitted and maintained by community members using the **Custom App** option might not include an installation wizard.
Refer to tutorials created and maintained by the community for more information on deploying and using these applications.
{{< /hint >}}

{{< include file="/static/includes/AppsInstallWizardSettings.md" >}}

After installing an application, the **Installed** applications screen opens showing the application in the **Deploying** state.
It changes to **Running** when the application is ready to use.

To modify installed application settings, click on the app row on the **Applications** table on the **Installed** screen, then click **Edit** on the **Application Info** widget.
Ensure you have the right app row selected or you end up accessing the first app listed in the table of deployed apps.

Refer to individual tutorials in the [Stable]({{< relref "/content/TruenasApps/StableApps/_index.md" >}}), [Community]({{< relref "/content/TruenasApps/CommunityApps/_index.md" >}}), or [Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}) sections of the Documentation Hub for more details on configuring application settings.

#### Allocating GPU
Users with compatible hardware can allocate one or more GPU devices to an application for use in hardware acceleration.
Allocating GPUs is an advanced process that could require significant troubleshooting depending on installed GPU device(s) and application-specific criteria.

GPU devices can be available for the host operating system (OS) and applications or can be [isolated for use in a Virtual Machine (VM)]({{< relref "managegpuscale.md" >}}).
A single GPU cannot be shared between the OS/applications and a VM.

Allocate GPU from the **Resources Configuration** section of the application installation wizard screen or the **Edit** screen for a deployed application.

{{< trueimage src="/images/SCALE/Apps/ResourcesConfiguration.png" alt="Resources Configuration" id="Resources Configuration" >}}

Click the **GPU Resource** allocation row for the type of GPU (AMD, Intel, or NVIDIA) and select the number of GPU devices the application is allowed access to.
You cannot specify which available GPU device TrueNAS allocates to the application. Furthermore, assigned devices can change on reboot.

{{< trueimage src="/images/SCALE/Apps/ResourcesConfigurationAllocateGPU.png" alt="Select GPU Allocation" id="Select GPU Allocation" >}}

{{< expand "Troubleshooting GPU Allocation" "v" >}}
If installed GPU devices do not populate as available for allocation in **GPU Configuration**:

1. Ensure the GPU devices you want to allocate are not configured as isolated.
   Go to **System > Advanced Settings** and locate the **Isolated GPU Device(s)** widget.
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

### Refreshing the Apps Catalog
Click **Refresh Catalog** on the **Discover** screen to refresh the apps catalog.
Refresh the apps catalog after adding or editing the trains on your system.

### Using the Discover Screen Filters
To change the way app widgets show on the screen, click the down arrow to the right of **Filters**, and select the filter option you want to use.

{{< trueimage src="/images/SCALE/Apps/DiscoverAppsScreenFilterOptions.png" alt="Discover Apps Filter Options" id="Discover Apps Filter Options" >}}

To quickly locate a specific app, begin typing the name in the search field.

To sort app widgets by category, click on **Categories**.
To select multiple categories, click **Categories** again and select another category from the dropdown.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

After installing an application, the **Installed** applications screen shows the app in the **Deploying** state.
The status changes to **Running** when the application is fully deployed and ready to use.

## Installing Custom Applications
**Custom App** opens a screen where you can upload a yaml file for an unofficial app or one not included in a TrueNAS catalog.
To deploy a custom application, go to **Discover** and click **Custom App** to open the **Install Custom App** screen.

<!-- Commenting out until we have tutorials for created for this.
See [Using Install Custom App]({{< relref "UsingCustomApp.md" >}}) for more information.

### Changing Custom Application Networking
Custom applications use the system-level Kubernetes Node IP settings by default.

You can assign an external interface to custom apps using  one of the **Networking** section  settings found on the **Install Custom App** screen.
-->

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
