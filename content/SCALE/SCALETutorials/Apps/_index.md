---
title: "Apps"
description: "Expanding TrueNAS SCALE functionality with additional applications."
geekdocCollapseSection: true
weight: 12
aliases:
 - /scale/scaletutorials/apps/usingapps/
 - /scale/scaleuireference/apps/usingapps/
 - /scale/apps/usingapps/
 - /scale/scaleclireference/app/
tags:
- apps
keywords:
- nas data storage
- software storage solutions
---


TrueNAS applications allow for quick and easy integration of third-party software and TrueNAS SCALE.

{{< include file="/static/includes/ProposeArticleChange.md" >}}

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure.
TrueNAS SCALE delivers a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.
SCALE applications expand the capabilities of your system by adding third-party software, but they can add significant risk to system stability and security.

## Getting Started
All applications added to SCALE are intended to expand system functionality far beyond what is typically expected from a NAS.

You must choose a pool before you can install an application.

SCALE applications are available in three catalogs (trains):

* Enterprise - Apps are simplified and validated for Enterprise users that are maintained by iXsystems for Enterprise users.
* Chart - Default catalog, maintained by iXsystems for non-Enterprise and community users.
* Community - Apps proposed and maintained by the community.

Some apps proposed by community members get adopted as official **Chart** applications apps.
Official apps are vetted by iXsystems based on the features and functionality the provide and how they integrate with the SCALE platform.

Applications are provided "as-is" and can introduce system stability or security issues when installed.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

Some applications deploy as the **root** user for initial configuration before operating as a non-root user.
Keep these general best practices in mind when using applications with TrueNAS SCALE.

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
To select a different pool for apps to use, click 

## Adding a Catalog Train
The TrueNAS **Chart** catalog populates the **Discover** apps screen by default.
Users can add the **Community** or **Enterprise** catalog.
To view the catalog settings, select the **Manage Catalogs** at the top of the **Discover** apps screen.

{{< include file="/static/includes/AddEnterpriseTrain.md" >}}**Settings > Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

## Installing an Application
The first time you go to **Apps**, the **Installed** applications screen displays an <i class="fa fa-cog" aria-hidden="true"></i> **Apps Service Not Configured** status on the screen header.
You must choose the pool apps use before you can install applications.

{{< trueimage src="/images/SCALE/Apps/AppsServiceNotConfigured.png" alt="Apps Service Not Configured" id="Apps Service Not Configured" >}}

After setting the pool, **Apps Service Running** shows at the top of the screen.

The **Installed** applications screen displays **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

Click **Check Available Apps** or **Discover** to open the **[Discover Apps](#using-the-discover-applications-screen)** screen.

After installing an application, the **Installed** screen populates the **Applications** table with a row that shows the row shows the current state, the option to stop or start the app, and a badge when an update is available.
Select an application to view the information widgets for that application.

The **Application Info** widget provides options to edit or delete the app.
It shows information about the app and provides access to the **Web Portal** for the application, if applicable.

The **Workload** widget provides information on the container and access to the container pod shell and log screens.
If not deployed these pod options do not show.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsScreenWithApps.png" alt="Installed Applications Screen with Apps" id="Installed Applications Screen with Apps" >}}

Application widgets vary by app, but all include the **Application Info** and **Workloads** widgets. Some include the **History** and **Notes** widgets.

### Opening an App Installation Wizard
While on the **Discover Apps** screen, click on an app widget to open the information screen for that app.
From the application information screen, click **Install** to open the installation wizard for the application.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

After installing an application, the **Installed** applications screen opens showing the application in the **Deploying** state.
It changes to **Running** when the application is ready to use.

The installation wizard configuration sections vary by application, with some including more configuration areas than others.
Click **Install** to review settings ahead of time to check for required settings.
Click **Discover** on the breadcrumb at the top of the installation wizard to exiting the screen without saving and until you are ready return and configure the app settings.

All applications include these basic setting sections:

{{< expand "Application Name and Version" "v" >}}
**Application Name** shows the default name for the application (typically the app name, like *storj*) and **Version** shows the installed version.

If deploying more than one instance of the application, you must change the default name. For example, *storj2* or *storj-node1*.

Do not change the version number for official apps or those included in a SCALE catalog.
When a new version becomes available, an **Upodate** banner shows on the **Installed** application screen, the app row shows an update alert, and the **Application Info** widget showss an update button.
Updating the app changes the version shown on the edit wizard for the application.
{{< /expand >}}

{{< expand "*Application* Configuration" "v" >}}
***Application* Configuration** shows required and optional settings for that app.
For example, the MinIO app uses  **MinIO Configuration**.

Typical settings include admin user credentials, environment variables, additional argument settings, name of the node, or even sizing parameters.

Sometimes users show in a **Users and Group Configuration** section.
If not using the default user and group, create the new user (and group) to manage the application before using the installation wizard.
{{< /expand >}}

{{< expand "Network Configuration" "v" >}}
**Network Configuration** shows network settings the app uses to communicate with SCALE and the Internet.
Settings include the default port assignment, host name, IP addresses, and other network settings.

If changing the port number to something other than the default setting, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of used and available port numbers.

Some network configuration settings include the option to add a certificate.
If a certificate is required for the application, create the certificate authority and certificate before using the installation wizard.
{{< /expand >}}

{{< expand "Storage Configuration" "v" >}}
**Storage Configuration** shows options to configure storage for the application.
Storage configuration can includes the primary data mount volume, a configuration volume, postgres volumes, and an option to add additional storage volumes.
The primary mount volumes have two options:
* **ixVolume** that creates a storage volume inside the **ix-applications** dataset. This is the default setting.
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

After installing an app, you can modify most settings by clicking on the app row on the **Installed** applications screen, then clicking **Edit** on the **Application Info** widget.
Make sure you have the right app row selected or you end up accessing the first app listed in the table of deployed apps.

Refer to individual tutorials in the [Chart]({{< relref "/SCALE/SCALETutorials/Apps/ChartApps/_index.md" >}}), [Community]({{< relref "/SCALE/SCALETutorials/Apps/CommunityApps/_index.md" >}}), or [Enterprise]({{< relref "/SCALE/SCALETutorials/Apps/EnterpriseApps/_index.md" >}}) sections of the Documentation Hub for more details on configuring application settings.

<!-- commenting out until the new UI is available to verify how this is handled 
### Changing Official Application Networking 
Official applications use the default system-level Kubernetes node IP settings.

You can change the Kubernetes node IP to assign an external interface to your apps, separate from the web UI interface, in **Apps > Settings > Advanced Settings**.

{{< trueimage src="/images/SCALE/Apps/KubernetesSettingsScreenTop.png" alt="Advanced/Kubernetes Settings" id="Advanced/Kubernetes Settings" >}}

We recommend using the default Kubernetes node IP (0.0.0.0) to ensure apps function correctly.

### Managing Container Images
The **Settings** dropdown includes an option 
Click **Settings** > **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Update or delete images from this screen, or click **Pull Image** to download a specific custom image to TrueNAS.

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

### Using App Settings
The **Settings** dropdown list at the top of the **Installed** applications screen provides these options:
* [**Choose Pool**](#choosing-the-apps-pool) where you set the pool apps uses and create the **ix-applications** dataset.
* [**Advanced Setting**](#changing-offiical-application-networking) where you can make changes to the Kubernetes node IP setting.
* [**Unset Pool**](#unsetting-the-apps-pool) where you can unset the apps pool, and if desired, then choose a different pool for apps to use.
* [**Manage Container Images**](#managing-container-images) where you can manage every container image downloaded to TrueNAS.

## Discover Apps Options
The **Discover Apps** screen shows application widgets for the official **Chart**, **Community**, and **Enterprise** catalog trains.
Non-Enterprise systems show the **Chart** catalog of apps by default.
The **Chart** catalog train has official applications that are pre-configured and only require a name during deployment.

Enterprise applications display automatically for Enterprise-licensed systems, but community users can add these apps using the **Manage Catalogs** screen.
App trains display based on the **Trains** settings on the **Edit Catalog** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

Use the **Discover** screen links to access other functions. 

Click [**Refresh Charts**](#refreshing-charts) to refresh the widgets on the screen.

Click **Manage Installed Apps** or on the **Applications** breadcrumb at the top of the screen to open the **Installed** application screen.
See [Using SCALE Catalogs]({{< relref "usingcatalogs.md" >}}) for more information on managing catalogs.

Click **Manage Catalogs**]({{< relref "UsingCatalogs.md" >}}) to open the **Catalogs** screen.

**Custom App** opens a wizard where you can configure an unofficial app or one not included in a SCALE catalog.

Scroll the screen to scan app widgets or use the search field to find a specific app in the catalogs configured on the system.

Click on an app widget to open the information screen for that application.

### Refreshing Charts
To refresh the charts catalog, click **Refresh Charts** on the **Discover** screen.
Refresh the catalog after adding or editing the catalogs on your system.

You can also refresh all catalogs from the **Catalogs** screen.
Click **Manage Catalogs**, then click **Refresh All**.

### Using the Discover Screen Filters
To alter how the app widgets show, click the down arrow to the right of **Filters**.

{{< trueimage src="/images/SCALE/Apps/DiscoverAppsScreenFilterOptions.png" alt="Discover Apps Filter Options" id="Discover Apps Filter Options" >}}

To quickly locate an app, begin typing the name in the search field.

To sort app widgets by category, click in **Categories**.
To select multiple categories, click **Categories** again and select another category from the dropdown.

## Allocating GPU
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

## Installing Custom Applications
To deploy a custom application, go to **Discover** and click **Custom App** to open the **Install Custom App** screen.
See [Using Install Custom App]({{< relref "UsingCustomApp.md" >}}) for more information.

### Changing Custom Application Networking
Custom applications use the system-level Kubernetes Node IP settings by default.

You can assign an external interface to custom apps using  one of the **Networking** section  settings found on the **Install Custom App** screen.

Unless you need to run an application separately from the Web UI, we recommend using the default Kubernetes **Node IP** (0.0.0.0) to ensure apps function correctly.-->

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
