---
title: "Apps Screens"
description: "Articles describing the TrueNAS Apps screens and fields."
geekdocCollapseSection: true
weight: 20
aliases:
 - /scale/apps/apps/
 - /scale/scaleuireference/apps/
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
doctype: reference
---

{{< include file="/static/includes/apps/AppsMarket.md" >}}

{{< include file="/static/includes/ProposeArticleChange.md" >}}

There are two main application screens: [**Installed**](#installed-screen) and [**Discover**](#discover-screen).
The **Installed** applications screen shows the status of installed apps, provides access to [pod shell and logs screens](#workloads-card) and a web portal for the app (if available), and the ability to edit deployed app settings.

The **Discover** screen shows cards for the installed catalog of apps.
The individual app cards open app information screens with details about that application, and access to an installation wizard for the app.
It also includes options to install [third-party applications](#install-custom-app-screen) in Docker containers that allow users to deploy apps not included in the catalog.

## Installed Applications Screen

The **Installed** applications screen header shows an <i class="fa fa-cog" aria-hidden="true"></i> **Apps Service Not Configured** status until you choose the pool for apps storage.

{{< trueimage src="/images/SCALE/Apps/AppsServiceNotConfigured.png" alt="Apps Service Not Configured" id="Apps Service Not Configured" >}}

**Apps Service Running** shows on the screen header after [choosing the apps pool](#choose-a-pool-for-apps).

The **Installed** applications screen shows **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

**Check Available Apps** and **Discover Apps** opens the **[Discover](#using-the-discover-applications-screen)** screen.

**Discover Apps** opens the **[Discover](#discover-screen)** screen with search filters and cards for each app in the trains selected on the **Configuration > Settings** screen.

## Configuration Menu

**Configuration** on the **Installed** applications screen shows a menu of global setting options that apply to all applications.

* **Choose Pool** opens the **[Choose a pool for Apps](#choose-a-pool-for-apps-dialog)** dialog.
* **Unset Pool** shows after setting a pool for applications to use. It opens the **[Unset Pool](#unset-pool)** dialog.
* **Manage Container Images** opens the [**Manage Container Images**](#manage-container-images) screen.
* **Sign-in to a Docker registry** opens the [**Docker Registries**](#docker-registries) screen.
* **[Settings](#settings)** opens the **Settings** screen.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsSettingOptions.png" alt="Installed Applications Screen Settings" id="Installed Applications Screen Settings" >}}

### Choose a Pool for Apps

**Choose Pool** on the **Configuration** menu opens the **Choose a pool for apps** dialog.
**Pool** shows a list of available pools on the system.
**Choose** sets the selected pool for use by applications.

{{< trueimage src="/images/SCALE/Apps/AppsChoosePoolForApps.png" alt="Apps Choose a Pool for Apps" id="Apps Choose a Pool for Apps" >}}

The first time you open the **Installed** applications screen you might see a dialog that prompts you to choose the pool for apps to use for storage.
Selecting the pool from the dropdown list, then clicking **Save** starts the applications service.
If you exit out of this dialog, to set the pool, clicking [**Configureation > Choose Pool**](#choose-a-pool-for-apps-dialog) opens the **Choose a pool for apps** dialog.

You must choose a pooo for apps before you can install an app.

#### Migrate Existing Applications

**Migrate existing applications** migrates all installed applications to a new applications pool. It shows on the **Choose a pool for apps** dialog when you choose a new pool while you have apps installed.

{{< trueimage src="/images/SCALE/Apps/ChoosePoolMigrate.png" alt="Migrate Existing Applications" id="Migrate Existing Applications" >}}

{{< hint type=note >}}
**Migrate existing applications** only affects data saved in the apps dataset, such as the installed app location and iXvolume storage.
Data in mounted host paths is not migrated.
{{< /hint >}}

### Unset Pool

**Unset Pool** on the **Configuration** menu opens the **Unset Pool** dialog.

**Unset** removes the pool configuration and turns off the application service.
When complete, a **Success** dialog displays.

{{< trueimage src="/images/SCALE/Apps/AppsUnsetPoolDialog.png" alt="Apps Unset Pool" id="Apps Unset Pool" >}}

### Manage Container Images Screen

The **Manage Container Images** screen lists all container images downloaded on TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImages.png" alt="Apps Manage Container Images" id="Apps Manage Container Images" >}}

Entering characters in the **<span class="iconify" data-icon="mdi:magnify"></span> Search** field on the screen header filters the images list to only the **Image ID** or **Tags** entries matching the entered characters.

**Pull Image** opens the **Pull Image** screen with options to download specific images to TrueNAS.

### Pull Image Screen

The **Pull Image** screen specifies the options for an image you want to add to TrueNAS. The screen presents settings in two section: general and **Docker Registry Authentication** settings.

{{< trueimage src="/images/SCALE/Apps/AppsManageContainerImagesPullImage.png" alt="Pull a Container Image" id="Pull a Container Image" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Image Name** | Specifies the full path and name for the specific image to download. Use the format *registry*/*repository*/*image*. |
| **Image Tag** | Specifies the image tag string to download that specific version of the image. The default **latest** pulls whichever image version is most recent. |
{{< /truetable >}}

#### Docker Registry Authentication

These settings are optional for most images but required for private images.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Username** | Specifies the user account name to access a private Docker image. |
| **Password** | Soecifies the user account password to access a private Docker image. |
{{< /truetable >}}

### Delete Image Dialogs

There are two versions of the **Delete** image dialog: batch operation and individual image.

**<span class="iconify" data-icon="mdi:garbage">Delete</span> Delete** for each image row opens the individual image [**Delete**](#delete-image) dialog showing selected image.

{{< trueimage src="/images/SCALE/Apps/DeleteImage.png" alt="Delete Image" id="Delete Image" >}}

The checkboxs to the left of **Image ID** or any image row shows the **Batch Operations** and **Delete** button.
**Delete** for the **Batch Operations** opens the **Delete** dialog listing all selected images.

{{< trueimage src="/images/SCALE/Apps/DDeleteImageBatchOperation.png" alt="Delete Image Batch Operation" id="Delete Image Batch Operation" >}}

**Confirm** activates the **Delete** button.

Target images must not be associated with any running container.

**Force** allows deleting an image that is referenced by multiple tags or stopped containers.
Use **Force** with caution as it can potentially break dependencies or leave images without defined tags.

### Docker Registries Screen

The **Docker Registries** screen lists signed-in Docker registry records. **No records have been added yet** shows on the screen until you add a registry.

{{< trueimage src="/images/SCALE/Apps/DockerRegistriesScreen.png" alt="Docker Registries Screen" id="Docker Registries Screen" >}}

**Add Registry** opens the **Create Docker Registry** screen.

#### Create Docker Registry Screen

The **Create Docker Registry** screen settings specify the URI, username and password credentials for the registry you want to add.

{{< trueimage src="/images/SCALE/Apps/CreateDockerRegistry.png" alt="Create Docker Registry" id="Create Docker Registry" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **URI** | Sets the Uniform Resource Identifier (URI) type for the registry. Default option is **Docker Hub** or use **Other Registry** to specify some other URI.  The URI address field is hidden when a Docker Hub registry record is already configured or is selected. |
| **URI** | The valid Uniform Resource Identifier (URI) for the registry, for example *https://index.docker.io/v1/*. Displays when **URI** is set to **Other Registry**. |
| **Name** | Specifies the display name for the registry record. Shows when **URI** is set to **Other Registry**. |
| **Username** | Specifies the username to sign in to the registry. |
| **Password** | Specifies the password for the user to sign in to the registry. |
{{< /truetable >}}

### Settings

The **Settings** screen shows the application train options, the option to add IP addresses and subnets for the application to use, specfies whether to check for Docker image updates, and if the system is equipped with a GPU, enables TrueNAS to update drivers for that GPU.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

The checkbox to the left of the train name adds that train to the applications catalog.
Train options:
* **stable** the default train for official apps
* **enterprise** for apps verified and simplified for Enterprise users, default for enterprise-licensed systems.
* **community** for community proposed and maintained apps
* **test** for application in development but not yet released in one of the other three trains.
* **dev** is for application currently in development.

You must specify at least one train.

**Add** to the right of **Address Pools** shows **Base** and **Size** settings with the current IP address and subnet mask for the network used by applications.
**Base** shows the default IP address and subnet (select from the dropdown list of options).
**Size** shows the network size of each docker network that is cut off from the base subnet.

{{< hint type="info" title="Apps Troubleshooting Tip!" >}}
This setting replaces the Kubernetes settings option for **Bind Network** in 24.04 and earlier.
Use to resolve issues where apps experience issues where the TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

**Add** to the right of **Registry Mirors** shows the settings for a registry mirror URL and specifies whether it is **Insecure**.

**Mirror URL** specifies the URL of the registry mirror to use when pulling container images. Must be a valid URL (for example, *https://mirror.example.com*). Useful for air-gapped environments, corporate proxies, or to avoid Docker Hub rate limits.

**Insecure** allows the registry mirror to use an unverified or self-signed TLS certificate. Enable only for trusted internal mirrors. Not recommended for production use.

**Install NVIDIA Drivers** shows if an NVIDIA GPU is detected by TrueNAS. It allows installing NVIDIA GPU drivers on the system. Disabled when TrueNAS Debug Kernel is enabled. When disabled, allows removing installed drivers. Requires the system to use the production kernel — if **Enable Debug Kernel** is selected in the [Kernel Card](#kernel-card), driver installation fails. Installing requires you to disable the debug kernel before installing NVIDIA drivers.

**Check for docker image updates** sets TrueNAS to automatically check for docker image updates (default setting).

## Applications Table

The **Applications** table on the **Installed** screen shows a row for each installed app. It shows the current state of the app, and the option to stop the app.
Stopped apps show the option to start the app.

When returning to the **Installed** screen, the first row in the **Application** tabie is selected by default and shows the cards for that app.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsScreenWithApps.png" alt="Installed Applications Status" id="Installed Applications Status" >}}

Clicking on **Application**, **Status**, or **Update** on the table header row sorts the table in ascending or descending order.

A yellow badge shows when an update is available. See [Update Apps](#update-apps) for more information on updating the application.

**Search** above the **Applications** table allows entering the name of an app to locate an installed application.

Selecting the checkbox to the left of **Applications** selects all installed apps and shows the [**Bulk Actions**](#bulk-actions) menu.

### Applications Table Bulk Actions

The **Bulk Action** menu applies actions to the selected applications installed and running on your system.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsBulkActions.png" alt="Installed Applications Bulk Actions" id="Installed Applications Bulk Actions" >}}

Selecting the checkbox to the left of **Applications** shows the **Bulk Actions** menu options:
* ***Start All Selected** - Disabled while the selected apps are running.
* **Stop All Selected** - Stops the selected apps, then activates the **Start All Selected** option.
* **Update All Selected** - Starts the updates process for the selected apps with pending updates.
* **Delete All Selected** - Opens the [**Delete Applications**](#delete-app) sdialog listing the selected app.

Performing a bulk action update opens a dialog listing the apps with available updates.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsBulkActionUpdateDialog.png" alt="App Bulk Update Dialog" id="App Bulk Update Dialog" >}}

Each app appears in a collapsible panel that displays the app name and current upstream version.
Click the expand icon to view version details. A **Version** row appears when the upstream version changes. A **Revision** row shows the catalog revision change.
A **Version to be updated to** dropdown appears for apps with multiple available revisions.
A **View Upstream Release Notes** link appears when the app provides a changelog URL.

**Update** begins updating the selected application. Each app status changes to **Stopped** during the update and returns to **Running** when the update completes.

## Application Cards

Installed applications have a set of cards on the **Installed** screen.
Content in the cards changes based on the individual applications.

### Application Info Card

The **Application Info** card shows the name, **Version** (upstream application version), **Revision** (TrueNAS catalog revision), source link(s) for the application, and TrueNAS train name.

**[Edit](#install-or-edit-app-wizards)** opens an **Edit *Application*** configuration screen populated with editable settings also found on the install wizard screen for the application.

**[Delete](#delete-apps)** opens the **Delete** dialog.
This deletes the application deployment but does not remove it from the catalog or train in TrueNAS.

**[Roll Back](#roll-back-apps)*** shows for applications that have been upgraded and opens the **Roll Back** dialog that allows you to to revert an app to an earlier installed version.

**Web UI** opens a browser window showing the application web UI or account sign-in screen.

{{< trueimage src="/images/SCALE/Apps/ApplicationInfoWidget.png" alt="Application Info Card" id="Application Info Card" >}}

The <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> shows the **Update** and **Convert to custom app** options.

**[Update](#update-apps)** opens a window for the application showing the current version and the new version the update installs.

**[Convert to custom app](#convert-to-custom-app)** opens a **Convert to custom app** dialog to convert the installed application to a custom YAML app.

#### Delete Apps

The **Delete** dialog requires you to type the application name to confirm deletion.

{{< trueimage src="/images/SCALE/Apps/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="Delete Application Dialog" >}}

The blank field should specify the application name exactly as shown in the confirmation field.
**Delete** remains disabled until the name is entered correctly.
The following options are for the delete operation:

{{< truetable >}}
| Option | Description |
|--------|-------------|
| **Remove iXVolumes** | Deletes hidden app storage from the apps pool. Only shown if the app has iXVolumes. |
| **Force-Remove iXVolumes** | Deletes app storage created on TrueNAS 24.04 and migrated to 24.10 or later. Only shown when **Remove iXVolumes** is selected. Removes both legacy Kubernetes and current Docker data for the application. Use with caution. |
| **Remove Images** | Prunes Docker images of the deleted app. Selected by default. |
{{< /truetable >}}

Click **Delete** to remove the application.

#### Roll Back Apps

**Roll Back** opens a dialog to revert an application to the snapshot of an earlier installed version. It only shows for ugraded applications that have selectiable previous versions to choose from.

{{< trueimage src="/images/SCALE/Apps/RollBackDialog.png" alt="Roll Back Dialog" id="Roll Back Dialog" >}}

**Version** shows the available app versions for roll back.
The version numbers are the **Revision** of the app in the TrueNAS catalog, equivalent to the **Revision** shwwn on the **Application Info** card.
This is the catalog revision, not the upstream **Version**.
See [Understanding Versions](https://apps.truenas.com/managing-apps/discovering-apps/#understanding-versions) on the TrueNAS Apps Market for more information.

**Roll back snapshots** restores the application data volume to match the selected version by rolling back to the snapshot for that version.
This reverts both the application and app data stored in the apps pool to the exact state from when the snapshot was created.

{{< hint type=note >}}
**Roll back snapshots** only affects data saved in the apps dataset, such as iXvolume storage.
Data in mounted host paths is not rolled back.
{{< /hint >}}

**Cancel** closes the dialog without completing the roll back.

**Roll Back** begins the operation.

#### Update Apps

**Update** shows on the **Application Info** card after clicking **Update All Selected** on the **Installed** applications header.
Both show only when TrueNAS detects an available update for an application.
The application row on the **Installed** screen shows **Update available** when the upstream application version is changing, or **Revision available** when only the TrueNAS catalog revision is changing.

**Update** opens an update dialog showing the version change.
When the upstream application version is changing, the dialog shows a **Version** row with the current and new upstream versions.
The dialog always shows a **Revision** row with the current and new catalog revision numbers.
When multiple catalog revisions are available, a **Version to be updated to** dropdown appears with options in the format **Version: X / Revision: Y**.
A **View Upstream Release Notes** link appears when the app provides a changelog URL.

{{< trueimage src="/images/SCALE/Apps/AppUpdateWindow.png" alt="Update Application Window" id="Update Application Window" >}}

**Update** begins the process and opens a progress dialog that shows the update progress.
When complete, the update badge and buttons disappear.
The **Update** state on the application row on the **Installed** screen changes to **Up to date**.

#### Convert to Custom App

**Convert to custom app** on the <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> dropdown opens a dialog to convert an installed catalog application to a custom YAML application.
Converting to a custom app allows direct editing of the YAML configuration file for the app using the [Custom App Screens]({{< relref "/SCALE/Apps/InstallCustomAppScreens.md" >}}).

{{< trueimage src="/images/SCALE/Apps/ConvertToCustomAppDialog.png" alt="Convert to Custom App Dialog" id="Convert to Custom App Dialog" >}}

{{< hint type=warning title="Permanent Action" >}}
Converting to custom app is a one-time, permanent operation.
When converted, a custom application cannot be converted back to a catalog version.
{{< /hint >}}

**Cancel** closes the dialog without converting the application.

**Confirm** enables the **Convert** button.

**Convert** begins the conversion process.

### Workloads Card

The **Workloads** card shows the container information for the selected application.
Information includes the number of pods, used ports, number of deployments, stateful sets, and container information.
It also shows icons for a **Shell**, **Volume Mounts** and **View Log** that open the container pod shell or log screens, and a mount point dialog.
The option to access the log and the shell remain available for stopped applications with fully deployed application containers, and for applications in the crashed state.

{{< trueimage src="/images/SCALE/Apps/InstalledAppsWorkloadsWidget.png" alt="Installed Apps Containers Card" id="Installed Apps Containers Card" >}}

The **Shell** <span class="iconify" data-icon="mdi:console" title="Shell">Shell</span> opens the **Container Shell** screen.

{{< include file="/static/includes/WebShellAccessRoles.md" >}}

{{< trueimage src="/images/SCALE/Apps/AppsPodShellScreen.png" alt="Container Shell Screen" id="Container Shell Screen" >}}

**Volume Mounts** <span class="material-icons">folder_open</span> opens the [**Volume Mounts**](#volume-mounts) dialog.

**View Logs** <span class="iconify" data-icon="mdi:text-box" title="Logs">Logs</span> opens the **Pod Logs** screen for the app.

#### Volume Mounts

**Volume Mounts** opens a dialog showing information on the app volume mounts for current and exited volume mounts for the application container.
The app has **Volume Mount** options to open windows for both the running mount point and permissions - exited mount point.

{{< trueimage src="/images/SCALE/Apps/MinIOVolumeMountsDialog.png" alt="MinIO Volume Mounts" id="MinIO Volume Mounts" >}}

#### Pod Log

Each **Pod Log** screen includes a banner with the **Application Name**, **Pod Name**, and **Container Name**.

{{< trueimage src="/images/SCALE/Apps/WebDAVPodLogsScreen.png" alt="WebDAV Pod Logs Screen" id="WebDAV Pod Logs Screen" >}}

Use the logs to help troubleshoot problems with your container pods.

### Notes Card

The **Notes** card shows information about the apps, the TrueNAS Documentation Hub article locations, links to file bug reports through Jira or GitHub, and where to make feature requests.

{{< trueimage src="/images/SCALE/Apps/AppsNotesWidget.png" alt="Apps Notes Card" id="Apps Notes Card" >}}

**View More** expands the card to show more information on application settings.
**Collapse** hides the extra information.

### Application Metadata Card

The **Application Metadata** card shows application capabilities unique to the application, and **Run As Content** showing the user and group IDs, the default user and group name, and brief description for the application.

{{< trueimage src="/images/SCALE/Apps/ApplicationMetadataWidget.png" alt="Application Metadata Card" id="Application Metadata Card" >}}

**View More** expands the card to show more information on application settings.
**Collapse** hides the extra information.

## Discover Screen

The **Discover** screen displays application cards for the official TrueNAS **stable** train by default.
Users can add the **community** and **enterprise**, or **test** train applications on the **[Settings](#settings-screen)** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

The breadcrumbs at the top of the screen header show links to the previous or the main applications screen. Clicking a link opens that screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreenHeaderAndSearch.png" alt="Apps Discover Screen Header and Search" id="Discover Screen Header and Search" >}}

**Custom App** opens the **[Install iX App](#install-custom-app-screens)** screen with an install wizard.

The <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> shows the **Install via YAML** option, which opens the **Add Custom App** screen with an advanced YAML editor for deploying apps using Docker Compose.

The **Discover** screen includes a search field, links to other application management screens, and filters to sort the application cards displayed.
**Show All** shows all application cards in the trains added to the **Stable** catalog. The links are:

* **Refresh Charts** executes a job to refresh the catalog applications.
* **Manage Installed Apps** opens the **[Installed](#installed-apllications-screen)** applications screen.

**Filters** shows a list of sort categories that alter the application cards shown. Clicking on a category filters the app cards.
Filter options:

* **Category** sorts the app cards by category or functional area.
  For example, Media, Monitoring, Networking, Productivity. etc.
* **App Name** sorts app cards alphabetically (A to Z).
* **Updated Date** sorts the app cards by date of update.

## Install Custom App Screens

TrueNAS 24.10 or later provides two options for installing a third-party application not included in the official catalogs using a Docker image.
**Custom App** opens the **[Install iX App](#install-custom-app-screens)** guided installation wizard.
<i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** opens the **Add Custom App** screen with an advanced YAML editor for deploying apps using Docker Compose.

See [Install Custom App Screens]({{< ref "InstallCustomAppScreens" >}}) for more information.

## Application Information Screens

Each application card on the **Discover** screen opens an information screen with details about that application, a few screenshots of the web UI for the application, and the **Install** button.

Application information shown includes the current app version, GitHub repository link for the image, last-updated date for the image, keywords, the TrueNAS app train, and the app homepage location.

{{< trueimage src="/images/SCALE/Apps/CollaboraInfoScreen.png" alt="Application Information Screen Example" id="Application Information Screen Example" >}}

Information on the application cards vary by application but each app includes these cards:

* **Available Resources** - Show CPU and memory usage the app requires, the app pool, and available space in gigabits.
* **Application Info** = Shows the application version number, link to GitHub repository for the image, and date the image was last updated.
* **Runs as Content** - Shows user and group ID, and descriptions for each container the app deploys.
* **Capabililties** - Shows capabilities of the app when this information is available.

The screen includes small screenshots of the application website that, when clicked, opens larger versions of the image.

**Install** opens the installation wizard for the application.

The bottom of the screen includes app cards for similar applications found in the catalog.

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

{{< trademark-notice minio="true" >}}
