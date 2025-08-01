---
title: "Apps"
description: "Articles describing the TrueNAS Apps screens and fields."
geekdocCollapseSection: true
weight: 100
aliases:
 - /scale/scaleuireference/apps/appsscreensscale/
 - /scale/scaleclireference/app/
 - /scale/scaleclireference/app/clicatalog/
 - /scale/scaleclireference/app/clichartrelease/
 - /scale/scaleclireference/app/clicontainer/
 - /scale/scaleclireference/app/clidocker/
 - /scale/scaleclireference/app/clikubernetes/
 - /scale/scaleuireference/apps/usingapps/
tags:
- apps
related: false
---

{{< include file="/static/includes/apps/AppsMarket.md" >}}

{{< include file="/static/includes/ProposeArticleChange.md" >}}

There are two main application screens, [**Installed**](#installed-screen) and [**Discover**](#discover-screen).
The **Installed** applications screen shows the status of installed apps, provides access to [pod shell and logs screens](#workloads-widget) and a web portal for the app (if available), and the ability to edit deployed app settings.

The **Discover** screen shows widgets for the installed catalog of apps.
The individual app widgets open app information screens with details about that application, and access to an installation wizard for the app.
It also includes options to install [third-party applications](#install-custom-app-screen) in Docker containers that allow users to deploy apps not included in the catalog.

## Installed Screen

The first time you go to **Apps**, the **Installed** applications screen header shows an <i class="fa fa-cog" aria-hidden="true"></i> **Apps Service Not Configured** status and dialog opens prompting you to choose the pool for apps to use.
You must choose the pool apps use before you can install applications. See [Choose A Pool for Apps](#choose-a-pool-for-apps) for more information.

{{< trueimage src="/images/SCALE/Apps/AppsServiceNotConfigured.png" alt="Apps Service Not Configured" id="Apps Service Not Configured" >}}

After setting the pool, **Apps Service Running** shows on the screen header.

The **Installed** applications screen displays **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

**Check Available Apps** or **Discover Apps** opens the **[Discover](#using-the-discover-applications-screen)** screen.

## Configuration Menu

**Configuration** on the **Installed** applications header displays global settings that apply to all applications.

* **Choose Pool** opens the **[Choose a pool for Apps](#choose-a-pool-for-apps-dialog)** dialog.
* **Unset Pool** shows after setting a pool for applications to use. It opens the **Unset Pool** dialog.
* **Manage Container Images** opens the [**Manage Container Images**](#manage-container-images) screen.
* **Sign-in to a Docker registry** opens the [**Docker Registries**](#docker-registries) screen.
* **[Settings](#settings)** opens the **Settings** screen with four train options. Use to add or remove other trains to the one catalog of applications.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsSettingOptions.png" alt="Installed Applications Screen Settings" id="Installed Applications Screen Settings" >}}

### Choose a Pool for Apps

**Choose Pool**  opens the **Choose a pool for apps** dialog. The **Pool** dropdown list shows a list of available pools on the system.
**Choose** sets the selected pool for use by applications.

{{< trueimage src="/images/SCALE/Apps/AppsChoosePoolForApps.png" alt="Apps Choose a Pool for Apps" id="Apps Choose a Pool for Apps" >}}

The first time you open the **Installed** applications screen a dialog prompts you to choose the pool for apps to use for storage.
Select the pool from the dropdown list, then click **Save**. This starts the applications service.
If you exit out of this dialog, to set the pool, click [**Settings > Choose Pool**](#choose-a-pool-for-apps-dialog) to select a storage pool for apps.

If a pool is not selected and you attempt to install an application, a dialog window prompts you to select a pool before the installation wizard shows.

#### Migrate Existing Applications

If you select a new pool in the **Pool** dropdown after previously configuring the apps service, the dialog displays the **Migrate existing applications** option.

{{< trueimage src="/images/SCALE/Apps/ChoosePoolMigrate.png" alt="Migrate Existing Applications" id="Migrate Existing Applications" >}}

**Migrate existing applications** migrates all installed applications to the new applications pool.

{{< hint type=note >}}
**Migrate existing applications** only affects data saved in the apps dataset, such as the installed app loacation and iXvolume storage.
Data in mounted host paths is migrated.
{{< /hint >}}

### Unset Pool

**Unset Pool** on the **Settings** menu opens the **Unset Pool** dialog.

**Unset** removes the pool configuration and turns off the application service.
When complete, a **Success** dialog displays.

{{< trueimage src="/images/SCALE/Apps/AppsUnsetPoolDialog.png" alt="Apps Unset Pool" id="Apps Unset Pool" >}}

### Manage Container Images

The **Manage Container Images** screen lists all container images downloaded on TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Entering characters in the **<span class="iconify" data-icon="mdi:magnify"></span> Search** field on the screen header filters the images list to only the **Image ID** or **Tags** entries matching the entered characters.

**<span class="iconify" data-icon="mdi:garbage">Delete</span> Delete** in an image row opens the [**Delete** image](#delete-image) dialog.

The checkbox to the left of **Image ID** or an image shows the **Batch Operations** section and delete button.

#### Pull Image

**Pull Image** opens a side panel with options to download specific images to TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Image Name** | Enter the full path and name for the specific image to download. Use the format *registry*/*repository*/*image*. |
| **Image Tag** | Enter the specific image tag string to download that specific version of the image. The default **latest** pulls whichever image version is most recent. |
| **Docker Registry Authentication** | Optional. Only needed for private images. |
| **Username** | User account name to access a private Docker image. |
| **Password** | User account password to access a private Docker image. |
{{< /truetable >}}

#### Delete Image

**<span class="iconify" data-icon="mdi:garbage">Delete</span> Delete** in an image row or the **Batch Operations** section opens the **Delete** dialog.
The dialog displays the selected image(s) to delete.

{{< trueimage src="/images/SCALE/Apps/DeleteImage.png" alt="Delete Image" id="Delete Image" >}}

Target images must not be associated with any running container.
Select **Confirm** and then click **Delete** to delete the image(s).

**Force** allows deletion if an image is referenced by multiple tags or stopped containers.
Use **Force** with caution as it can potentially break dependencies or leave images without defined tags.

### Docker Registries

The **Docker Registries** screen lists signed-in Docker registry records.

{{< trueimage src="/images/SCALE/Apps/DockerRegistriesScreen.png" alt="Docker Registries Screen" id="Docker Registries Screen" >}}

#### Create Docker Registry

**Add Registry** opens the **Create Docker Registry** panel.

{{< trueimage src="/images/SCALE/Apps/CreateDockerRegistry.png" alt="Create Docker Registry" id="Create Docker Registry" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **URI** (Dropdown) | The Uniform Resource Identifier (URI) type for the registry. Options are **Docker Hub** or **Other Registry**. Hidden when a Docker Hub registry record is already configured. |
| **URI** | The valid Uniform Resource Identifier (URI) for the registry, for example *https://index.docker.io/v1/*. Displays when **URI** is set to **Other Registry** or when a Docker Hub registry record is already configured. |
| **Name** | Display name for the registry record. Displays when **URI** is set to **Other Registry** or when a Docker Hub registry record is already configured. |
| **Username** | The user name to sign in to the registry. |
| **Password** | The password for the user to sign in to the registry. |
{{< /truetable >}}

### Settings

**Settings** opens the **Settings** screen showing four application train options, the option to add IP addresses and subnets for the application to use, check for Docker image updates, and if the system is equipped with a GPU, to enable TrueNAS to update drivers for that GPU.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

Select the checkbox to the left of the train name to add another train to the applications catalog.
Train options:
* **stable** the default train for official apps
* **enterprise** for apps verified and simplified for Enterprise users, default for enterprise-licensed systems.
* **community** for community proposed and maintained apps
* **test** for application in development but not yet released in one of the other three trains.

You must specify at least one train.

The **Address Pools** shows the current IP address and subnet mask for the network used by applications.
**Base** shows the default IP address and subnet, and **Size** shows the network size of each docker network that is cut off from the base subnet.
Select a predefined range from the dropdown list.

{{< hint type="info" title="Apps Troubleshooting Tip!" >}}
This setting replaces the Kubernetes Settings option for Bind Network in 24.04 and earlier.
Use to resolve issues where apps experience issues where the TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

**Install NVIDIA Drivers** shows if the system has an NVIDIA GPU installed.
Select to enable TrueNAS to manually install drivers for this device.
When the TrueNAS Debug Kernel is enabled, NVIDIA drivers are disabled.

Systems with non-NVIDIA GPU devices do not show this option, but these GPUs are selectable in the app installation wizards in the **Resources Configuration** section for the app.

**Check for docker image updates** sets TrueNAS to check for docker image updates (default setting).

## Applications Table

The **Applications** table on the **Installed** screen populates a row for each installed app that shows the current state, and the option to stop the app.
Stopped apps show the option to start the app.

After installing an application, the **Installed** screen populates the **Applications** table.
When returning to the **Installed** screen, the first application on the list is selected by default.
Each application row shows the name, status, and update information for the application.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsScreenWithApps.png" alt="Installed Applications Status" id="Installed Applications Status" >}}

Click on **Application**, **Status**, or **Update** on the table heading row to sort the table in ascending or descending order.

A yellow badge shows when an update is available. See [Update Apps](#update-apps) for more information on updating the application.

**Search** above the **Applications** table allows entering the name of an app to locate an installed application.

Selecting the checkbox to the left of **Applications** selects all installed apps and shows the [**Bulk Actions**](#bulk-actions) dropdown list.

### Bulk Actions

The **Bulk Action** dropdown list allows you to apply actions to one or more applications installed and running on your system.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsBulkActions.png" alt="Installed Applications Bulk Actions" id="Installed Applications Bulk Actions" >}}

Select the checkbox to the left of **Applications** to show the **Bulk Actions** dropdown menu.
Menu options are **Start All Selected**, **Stop All Selected**, **Update All Selected**, and **Delete All Selected**.

Performing a bulk action update opens a dialog listing the apps with available updates.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsBulkActionUpdateDialog.png" alt="App Bulk Update Dialog" id="App Bulk Update Dialog" >}}

Select an application by clicking the radio button to the left of a listed application.

Click the expand icon for listed app to show the **Version** dropdown and **Changelog** for the selected version.

Update begins updating the applications one at a time. Apps status changes to STOPPED before it is updated, and then returns to RUNNING after the update completes.

## Application Widgets

Installed applications have a set of widgets on the **Installed** screen.
Select an application row to view the information widgets for that application.
Information in the widgets changes based on the app row selected in the **Applications** table.

### Application Info Widget

The **Application Info** widget shows the name, (upstream) app version number, catalog version number, source link for the application, and train name.
It includes the **Edit**, **Delete**, **Roll Back** and **Web UI** buttons for the application.
The <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> dropdown contains the **Update** and **Convert to custom app** buttons.

{{< trueimage src="/images/SCALE/Apps/ApplicationInfoWidget.png" alt="Application Info Widget" id="Application Info Widget" >}}

**[Edit](#install-or-edit-app-wizards)** opens an **Edit *Application*** configuration screen populated with editable settings also found on the install wizard screen for the application.

<i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> opens a dropdown containing the **Update** and **Convert to custom app** buttons.

**[Update](#update-apps)** opens a window for the application showing the current version and the new version the update installs.

**[Convert to custom app](#convert-to-custom-app)** opens a **Convert to custom app** dialog to convert the installed application to a custom YAML app.

**Web UI** opens the application login or sign-up web page.

**[Roll Back](#roll-back-apps)** opens the **Roll Back** dialog to revert an app to an earlier installed version.

**[Delete](#delete-apps)** opens the **Delete** dialog.
This deletes the application deployment but does not remove it from the catalog or train in TrueNAS.

#### Delete Apps

The **Delete App** dialog asks for confirmation to delete the selected application.

{{< trueimage src="/images/SCALE/Apps/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="Delete Application Dialog" >}}

**Remove iXVolumes** deletes hidden app storage from the apps pool.
**Force-Remove iXVolumes** deletes app storage created on TrueNAS 24.04 and migrated to 24.10 or later.

**Remove Images** prunes Docker images of the deleted app.

**Confirm** activates the **Continue** button. **Continue** initiates the delete operation.

#### Update Apps

**Update** shows on the **Application Info** widget after clicking **Update All** on the **Installed** applications header.
Both only show if TrueNAS detects an available update for an application.
The application widget on the **Discover** screen also displays an update badge.

**Update** opens an update window for the application that includes the **Version to be updated to** dropdown and **Changelog** options.

{{< trueimage src="/images/SCALE/Apps/AppUpdateWindow.png" alt="Update Application Window" id="Update Application Window" >}}

**Update** begins the process and opens a progress dialog that shows the update progress.
When complete, the update badge and buttons disappear.
The **Update** state on the application row on the **Installed** screen changes to **Up to date**.

#### Convert to Custom App

**Convert to custom app** on the <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> dropdown opens a dialog to convert an installed catalog application to a custom YAML application.
Converting to a custom app direct editing to YAML configuration file for the app using the [Custom App Screens]({{< relref "/SCALE/SCALEUIReference/Apps/InstallCustomAppScreens.md" >}}).

{{< trueimage src="/images/SCALE/Apps/ConvertToCustomAppDialog.png" alt="Convert to Custom App Dialog" id="Convert to Custom App Dialog" >}}

{{< hint type=warning title="Permanent Action" >}}
**Convert to custom app** is a one-time, permanent operation.
When converted, an custom application cannot be converted back to a catalog version.
{{< /hint >}}

**Cancel** closes the dialog without converting the application.

**Confirm** enables the **Convert** button.

**Convert** begins the conversion process.

#### Roll Back Apps

**Roll Back** on the <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> dropdown opens a dialog to revert an application to the snapshot of an earlier installed version.

{{< trueimage src="/images/SCALE/Apps/RollBackDialog.png" alt="Roll Back Dialog" id="Roll Back Dialog" >}}

The **Version** dropdown contains available app versions for roll back.
The version numbers displayed are the version of the app in the TrueNAS catalog, equivalent to the **Version** displayed on the app information card.
It is not equal to the **App Version** or the upstream release version.
See [Understanding Versions](https://apps.truenas.com/managing-apps/discovering-apps/#understanding-versions) on the TrueNAS Apps Market for more information.

**Roll back snapshots** restores the application data volume to match the selected version by rolling back to the snapshot for that version.
This reverts both the application and app data stored in the apps pool to the exact state from when the snapshot was created.

{{< hint type=note >}}
**Roll back snapshots** only affects data saved in the apps dataset, such as iXvolume storage.
Data in mounted host paths is not rolled back.
{{< /hint >}}

**Cancel** closes the dialog without completing the roll back.

**Roll Back** begins the operation.

### Workloads Widget

The **Workloads** widget shows the container information for the selected application.
Information includes the number of pods, used ports, number of deployments, stateful sets, and container information.
It also shows the **Shell**, **Volume Mounts** and **View Log** icon buttons that provide access to the container pod shell and log screens and mount point windows.
The option to access the log and the shell remain available for stopped applications for fully deployed application containers, and for applications in the crashed state.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsWorkloadsWidget.png" alt="Installed Apps Containers Widget" id="Installed Apps Containers Widget" >}}

The **Shell** <span class="iconify" data-icon="mdi:console" title="Shell">Shell</span> button opens the **Container Shell** screen.

{{< trueimage src="/images/SCALE/Apps/AppsPodShellScreen.png" alt="Container Shell Screen" id="Container Shell Screen" >}}

The **Volume Mounts** <span class="material-icons">folder_open</span> button opens the [**Volume Mounts**](#volume-mounts) dialog.

The **View Logs** <span class="iconify" data-icon="mdi:text-box" title="Logs">Logs</span> button also opens the **Pod Logs** screen for the app.

#### Volume Mounts

**Volume Mounts** opens a dialog showing information on the app volume mounts for current and exited volume mounts for the application container.
The app has **Volume Mount** options to open windows for both the running mount point and permissions - exited mount point.

{{< trueimage src="/images/SCALE/Apps/MinIOVolumeMountsDialog.png" alt="MinIO Volume Mounts" id="MinIO Volume Mounts" >}}

#### Pod Log

Each **Pod Log** screen includes a banner with the **Application Name**, **Pod Name** and **Container Name**.

{{< trueimage src="/images/SCALE/Apps/WebDAVPodLogsScreen.png" alt="WebDAV Pod Logs Screen" id="WebDAV Pod Logs Screen" >}}

Use the logs to help troubleshoot problems with your container pods.

### Notes Widget

The **Notes** widget shows information about the apps, TrueNAS Documentation Hub article locations, links to file bug reports through Jira or GitHub, and where to make feature requests.

{{< trueimage src="/images/SCALE/Apps/AppsNotesWidget.png" alt="Apps Notes Widget" id="Apps Notes Widget" >}}

**View More** expands the widget to show more information on application settings.
**Collapse** hides the extra information.

### Application Metadata Widget

The **Application Metadata** widget shows application capabilities unique to the application, and **Run As Content** showing the user and group IDs, the default user and group name, and brief description for the application.

{{< trueimage src="/images/SCALE/Apps/ApplicationMetadataWidget.png" alt="Application Metadata Widget" id="Application Metadata Widget" >}}

**View More** expands the widget to show more information on application settings.
**Collapse** hides the extra information.

## Discover Apps Screen

The **Discover** screen displays application widgets for the official TrueNAS **stable** train by default.
Users can add the **community** and **enterprise**, or **test** train applications on the **[Settings](#settings-screen)** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

### Discover Screen Header

The breadcrumbs at the top of the screen header show links to the previous or the main applications screen. Click a link to open that screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreenHeaderAndSearch.png" alt="Apps Discover Screen Header and Search" id="Discover Screen Header and Search" >}}

**Custom App** opens the **[Install iX App](#install-custom-app-screens)** screen with an install wizard.
<i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** opens the **Add Custom App** screen with an advanced YAML editor for deploying apps using Docker Compose.

The **Discover** screen includes a search field, links to other application management screens, and filters to sort the application widgets displayed.
**Show All** shows all application widgets in the trains added to the **Stable** catalog. The links are:

* **Refresh Charts** that executes a job to refresh the catalog applications.
* **Manage Installed Apps** that opens **[Installed](#installed-apllications-screen)** applications screen.

**Filters** shows a list of sort categories that alter which application widgets show. Click on a category to select and filter app widgets.
Filter information includes the **Category**, **App Name**, and **Updated Date**.

* **Category** sorts the app widgets by category or functional area.
  For example, Media, Monitoring, Networking, Productivity. etc.
* **App Name** sorts app widgets alphabetically (A to Z).
* **Updated Date** sorts the app widgets by date of update.

## Install Custom App Screens

TrueNAS 24.10 or later provides two options for installing a third-party application not included in the official catalogs using a Docker image.
**Custom App** opens the **[Install iX App](#install-custom-app-screens)** guided installation wizard.
<i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** opens the **Add Custom App** screen with an advanced YAML editor for deploying apps using Docker Compose.

See [Install Custom App Screens]({{< ref "InstallCustomAppScreens" >}}) for more information.

## Application Information Screens

Each application widget on the **Discover** screen opens an information screen with details about that application, a few screenshots of the web UI for the application, and the **Install** button.
Application information shows the app version, GitHub repository link for the image, and date the image was last updated, keywords, the TrueNAS app train, and the app homepage location.

{{< trueimage src="/images/SCALE/Apps/CollaboraInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

The application information screen shows two widgets:

* **Available Resources** that show CPU and memory usage the app requires, the app pool, and available space in gigabits.
* **Application Info** that includes the application version number, link to GitHub repository for the image, and date the image was last updated.

Some applications might also include the **Run-As Content** and **Capabilities** widgets.

The screen includes small screenshots of the application website that, when clicked, opens larger versions of the image.

**Install** opens the installation wizard for the application.

The bottom of the screen includes app widgets for similar applications found in the catalog.

### Application Install or Edit App Wizards

The application **Install *Application*** wizard and **Edit *Application*** screens show the same settings, but un-editable settings are either not shown or are inactive to prevent edit attempts.
The **Edit *Application*** screen opens populated with the current settings for the application.

The install and edit wizard screens include a navigation panel on the right of the screen that lists and links to the setting sections.
A red triangle with an exclamation point marks the sections with the required settings.
An asterisk marks the required fields in a section.
You can enter a new setting in fields that include a preprogrammed default.

{{< trueimage src="/images/SCALE/Apps/AppsInstallWizardSectionTOC.png" alt="App Installation Wizard ToC" id="App Installation Wizard ToC" >}}

{{< include file="/static/includes/apps/AppsInstallWizardSettings.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
