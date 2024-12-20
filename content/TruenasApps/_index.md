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
For more information on this change refer to the [24.10 Release Notes](https://www.truenas.com/docs/scale/24.10/gettingstarted/scalereleasenotes/).

{{< include file="/static/includes/ProposeArticleChange.md" >}} 
<!-- Update to an app specific snippet -->

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure.
TrueNAS delivers a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.
TrueNAS applications expand the capabilities of your system by adding third-party software, but they can add significant risk to system stability and security.

## Getting Started

All applications added to TrueNAS are intended to expand system functionality far beyond what is typically expected from a NAS.

Applications are provided "as-is" and can introduce system stability or security issues when installed.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

You must choose a pool before you can install an application.
See [Advanced Guidance](#advanced-guidance) below for more information about apps pool selection.

As of 24.10, TrueNAS apps use Docker containers and Docker Compose for deployment.
Docker is an open-source software that manages images and container deployments.

The default system-level settings are found in **Apps > Settings**.

For more information on screens and screen functions, refer to the UI Reference article on [Apps Screens]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}).

## Setting Up the Apps Service

Use the **Configuration** dropdown to access the **Choose Pool**, **Unset Pool**, **Manage Container Images**, and **Settings** options.

### Choosing the Apps Pool

You are prompted to select the pool for apps the first time you click on **Apps**.
You can exit out of this if you are not ready to deploy apps or do not have a pool configured for apps to use for storage.
You must set the pool before you can add any application.

Select the pool and click **Save**. If you close the dialog to set the pool later, click **Configuration > Choose Pool** to set the pool.

{{< trueimage src="/images/SCALE/Apps/AppsSettingsChoosePool.png" alt="Choosing a Pool for Apps" id="Choosing a Pool for Apps" >}}

{{< include file="/static/includes/apps/AppsPool.md" >}}

### Unsetting the Apps Pool

To select a different pool for apps to use, click **Configuration > Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

### Understanding App Storage Volumes

The **ix-apps** dataset is the base-level storage volume for app data.
Additionally, configuration options for individual apps include one or more of the following storage types: ixVolume datasets, host path datasets, SMB share volumes, and Tmpfs.

{{< include file="/static/includes/apps/AppsDatasets.md" >}}

### Configuring Apps Settings

Click **Configuration > Settings** to open the **Settings** screen, which contains options for setting app trains, configuring app networking, installing NVIDIA drivers (if compatible hardware is present), and allowing TrueNAS to monitor for Docker image updates.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

#### Changing App Trains

TrueNAS applications are available in three catalogs (trains):

* **stable** - Default train of official apps, vetted by iXsystems, chosen because of the features and functionality of the app, and how they integrate with TrueNAS.
* **enterprise** - Default train of apps, simplified and validated for Enterprise users for Enterprise-licensed systems.
* **community** - Apps proposed and maintained by the community

The default TrueNAS **Stable** catalog populates the **Discover** apps screen with apps.

Some apps proposed by community members might be adopted as official **stable** train apps.
iXsystems maintains official apps for non-Enterprise and community users.

Click **Settings** on the **Configuration** dropdown menu to open the **Settings** screen, then select the desired train(s).
To show only the one train of apps, for example, the **enterprise** train, after selecting **enterprise** deselect the **stable** checkbox and click **Save**.

For more information on trains, see [Managing App Trains]({{< relref "UsingTrains.md" >}}).

Some applications deploy as the **root** user for initial configuration before operating as a non-root user.
Keep these general best practices in mind when using applications with TrueNAS.

#### Changing Apps Network Settings

Go to **Apps > Installed**, click **Configuration**, and select **Settings**.

To add another range of IP addresses, click **Add** to the right of **Address Pools**, then select a range from the dropdown list of options, and enter the desired value in **Size**.

**Base** shows the default IP address and subnet, and **Size** shows the network size of each docker network that is cut off from the base subnet.

{{< hint type="info" title="Apps Networking Troubleshooting Tip!" >}}
This setting replaces the **Kubernetes Settings** option for **Bind Network** in 24.04 and earlier.
Use to resolve issues where apps experience issues where TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

{{< include file="/static/includes/apps/AppsVMsNoHTTPS.md" >}}

#### App Directory Services

{{< include file="/static/includes/apps/AppsDirectoryService.md" >}}

#### Installing NVIDIA Drivers

Beginning in TrueNAS 24.10, NVIDIA drivers are no longer automatically installed. Users must manually install drivers from the TrueNAS UI.

If running TrueNAS 24.10 or higher:
1. Go to **Apps > Installed** and click on the **Configuration**.

2. Click on **Settings** to open the **Settings** configuration screen.

3. Select **Install NVIDIA Drivers**, which is available to users with compatible GPUs.

4. Select **Install NVIDIA Drivers**, and click **Save.**

#### Monitoring for Image Updates

Select **Check for docker image updates** (selected by default) to enable TrueNAS to periodically check for Docker image updates.
This applies to all Docker images present on the system for either catalog or custom applications.
Disable to prevent TrueNAS from monitoring for upstream image updates.

## Discovering Apps

The **Discover** screen shows application widgets based on the trains selected on the **Train Settings** screen.

Non-Enterprise systems show the **stable** catalog of apps by default.
These are official applications, pre-configured to only require a name during a test deployment, or some customization for a full deployment.

Enterprise-licensed systems display the **enterprise** train of applications simplified and validated for Enterprise systems.

Community users can add the **community** and **enterprise** trains on the [**Settings**](#changing-app-trains) screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

Use the **Discover** screen links to access other functions.

* [**Refresh Catalog**](#refreshing-the-apps-catalog) - Refreshes the list of app widgets after changing train settings or changes to the catalog.
* **Manage Installed Apps** - Opens the **Installed** apps screen where you access the **Configuration** menu to manage general application settings.

Click on an app widget to open the app information screen with details about the selected application.

{{< trueimage src="/images/SCALE/Apps/CollaboraInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

### Understanding Versions

The information screen includes two version numbers for the selected application: **App Version** and **Version**.
**App Version** is the version of the upstream Docker image the app installs, such as *24.04.10.2.1* for Collabora.
The **App Version** also appears in the **Application Info** widget on the **Installed** applications screen.
**Version** is the revision number of the app in the [TrueNAS app train](https://github.com/truenas/apps/tree/master/trains), for example *1.2.2*.
The **Version** is the number used to identify app updates in TrueNAS.
It also appears on the **Installed** applications screen, on the **Discover** screen app widget, and in the install wizard for the app.

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

The first time you go to **Apps**, a dialog prompts you to choose the pool for apps to use. You must set the app pool before you can install applications.
Select the pool as described in the [**Choosing the Apps Pool**](#choosing-the-apps-pool).

The **Installed** applications screen displays **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

Click either **Check Available Apps** or **Discover Apps** to open the **[Discover](#using-the-discover-applications-screen)** screen.

Search for the application widget, then click on that widget to open the information screen for the app and access the installation wizard.

{{< include file="/static/includes/apps/AppsSMBErrorWarning.md" >}}

If an application requires specific host path datasets, create the datasets before installing the application.
For example, the [Nextcloud]({{< relref "InstallNextCloudMedia.md" >}}) app requires three datasets: **html** for app data, **data** for user data, and **postgres_data** for the database data storage volume.
[Create these datasets]({{< relref "DatasetsSCALE.md" >}}) before installing the app.
See [Understanding App Storage Volumes](#understanding-app-storage-volumes), individual app information screens, and app tutorials for more information.

### Using an App Installation Wizard

After clicking on an app widget on the **Discover Apps** screen, the information screen for that app opens.
Click **Install** to open the installation wizard for the application.

{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

The installation wizard configuration sections vary by application, with some including more configuration areas than others.
Each application tutorial provides information on steps to take before launching an app installation wizard, but if a tutorial does not exist, click **Install** on the app information screen to open the wizard.
Review settings ahead of time to check for required settings and then exit the wizard to do the necessary steps before returning to install the application.
Click **Discover** on the breadcrumb at the top of the app wizard screen to exit without saving.

{{< hint type="info" title="Community Maintained Apps" >}}
Apps submitted and maintained by community members using the **Custom App** option might not include an installation wizard.
Refer to tutorials created and maintained by the community for more information on deploying and using these applications.
{{< /hint >}}

{{< include file="/static/includes/apps/InstallWizardSettingsOverview.md" >}}

After clicking **Install** on an application wizard screen, the **Installed** applications screen opens showing the application in the **Deploying** state before
changing to **Running**. 
Applications that crash show the **Crashed** status. Clicking **Stop** changes the status to **Stopping** before going to **Stopped**.
Click **Start** to restart the application.

The screen defaults to selecting the first app row listed on the **Applications** table and showing the application widgets that first app.
To modify installed application settings, first, click on the app row on the **Applications** table, then click **Edit** on the **Application Info** widget.

Refer to individual tutorials in the [Stable]({{< relref "/content/TruenasApps/StableApps/_index.md" >}}), [Community]({{< relref "/content/TruenasApps/CommunityApps/_index.md" >}}), or [Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}) sections of the Documentation Hub for more details on configuring application settings.

#### GPU Passthrough

Users with compatible hardware can pass through a GPU device to an application for use in hardware acceleration.

GPU devices can be available for the host operating system (OS) and applications or can be [isolated for use in a Virtual Machine (VM)]({{< relref "managegpuscale.md" >}}).
A single GPU cannot be shared between the OS/applications and a VM.

The GPU passthrough option shows in the **Resources Configuration** section of the application installation wizard screen or the **Edit** screen for a deployed application.

{{< trueimage src="/images/SCALE/Apps/InstallAppResourceConfigurationGPU.png" alt="Select GPU Passthrough" id="Select GPU Passthrough" >}}

Click **Passthrough available (non-NVIDIA) GPUs** to have TrueNAS pass an AMD or Intel GPU to the application.

**Select NVIDIA GPU(s)** displays if an NVIDIA GPU is available, with [installed drivers](#installing-nvidia-drivers).
Click **Use this GPU** to pass that GPU to the application.

### Viewing App Logs

Apps stuck in a deploying state can result from various configuration problems.
To check the logs for information on deployment issues encountered, click <span class="iconify" data-icon="mdi:text-box" title="Logs">Logs</span> **View Logs** on the **Workloads** widget for the app.

### Installing Custom Apps

{{< include file="/static/includes/apps/CustomAppIntro.md" >}}

{{< include file="/static/includes/apps/AppsCustomApp.md" >}}

See [Installing Custom Applications]({{< relref "UsingCustomApp.md" >}}) for more information.

## Managing Installed Apps

Installed applications appear on the **Installed** applications screen.
Click on an app row to view **Details**, including the **Application Info**, **Workloads**, **Notes**, and **Application Metadata** widgets.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsScreenWithApps.png" alt="" id="" >}}

### Upgrading Apps

Apps with available upgrades show a yellow circle with an exclamation point on the right side of the **Applications** table row, and the **Installed** application screen banner displays an **Update** or an **Update All** button.
To upgrade an app, select the app row and click **Update** on the **Application Info** widget.
To upgrade multiple apps, either click the **Update All** button on the **Installed** applications banner or select the checkbox to the left of the application row to show the **Bulk Actions** button.
Click **Bulk Actions** and select **Upgrade All** to upgrade the apps selected.
Upgrade options only show if TrueNAS detects an available update for installed applications.

**Update** opens an upgrade window that includes two selectable options, **Images (to be updated)** and **Changelog**.
Click on the down arrow to see the options available for each.

{{< trueimage src="/images/SCALE/Apps/AppUpdateWindow.png" alt="Update Application Window" id="Update Application Window" >}}

Click **Upgrade** to begin the process. A counter dialog opens showing the upgrade progress.
When complete, the update badge and buttons disappear and the application **Update** state on the **Installed** screen changes from **Update Available** to **Up to date**.

### Deleting Apps

To delete an application, click <i class="fa fa-stop" aria-hidden="true"></i> **Stop** on the application row.
After the app status changes to stopped, click **Delete** on the **Application Info** widget for the selected application to open the **Delete** dialog.

{{< trueimage src="/images/SCALE/Apps/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="Delete Application Dialog" >}}

Select **Remove ixVolumes** to delete hidden app storage from the Apps pool.

Click **Confirm** then **Continue** to delete the application.

### Stopping Apps

Apps on the **Installed** screen, showing either the **Deploying** or **Running** status, can be stopped using the stop button on the **Applications** table row for the app.

### Managing Container Images

While on the **Installed** application screen, click **Configuration** > **Manage Container Images** to open the **Manage Container Images** screen.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Delete images or add new ones from this screen.

**Pull Image** downloads a specific custom image to TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

To download a specific image, click **Pull Image**, then enter a valid path and tag to the image.
Enter the path using the format *registry*/*repository*/*image* to identify the specific image.
The default **latest** tag downloads the most recent image version.

When downloading a private image, enter user account credentials that allow access to the private registry.

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
