---
title: "Apps Screens"
description: "Articles describing the TrueNAS Apps screens and fields."
geekdocCollapseSection: true
weight: 20
aliases:
 - /apps/apps/
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

**Apps Service Running** shows in the screen header after [choosing the app pool](#choose-a-pool-for-apps).

The **Installed** applications screen shows **Check Available Apps** before you install the first application.

{{< trueimage src="/images/SCALE/Apps/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="Installed Applications Screen No Apps" >}}

**Check Available Apps** and **Discover Apps** open the **[Discover](#using-the-discover-applications-screen)** screen.

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
After closing this dialog, clicking [**Configureation > Choose Pool**](#choose-a-pool-for-apps-dialog) opens the **Choose a pool for apps** dialog.

You must choose a pooo for apps before you can install an app.

#### Migrate Existing Applications

**Migrate existing applications** migrates all installed applications to the new pool. Migrates only data in the apps dataset, not host paths. Only shows on the **Choose a pool for apps** dialog after initial configuration and when you choose a new pool while you have apps installed.

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

**<span class="iconify" data-icon="mdi:garbage">Delete</span> Delete** for each image row opens the individual image [**Delete**](#delete-image) dialog showing the selected image.

{{< trueimage src="/images/SCALE/Apps/DeleteImage.png" alt="Delete Image" id="Delete Image" >}}

The checkboxs to the left of **Image ID** or any image row shows the **Batch Operations** and **Delete** button.
**Delete** for the **Batch Operations** opens the **Delete** dialog listing all selected images.

{{< trueimage src="/images/SCALE/Apps/DeleteImageBatchOperation.png" alt="Delete Image Batch Operation" id="Delete Image Batch Operation" >}}

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

The **Settings** screen shows the application train options, the option to add IP addresses and subnets for the application to use, specfies whether to check for Docker image updates, and, if the system is equipped with a GPU, enables TrueNAS to update drivers for that GPU.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

The checkbox to the left of the train name adds that train to the applications catalog.
Train options:
* **stable** is the default train for official apps
* **enterprise** is for apps verified and simplified for Enterprise users, default for enterprise-licensed systems.
* **community** fis or community proposed and maintained apps
* **test** is for application in development but not yet released in one of the other three trains.
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

**Add** to the right of **Registry Mirrors** shows the settings for a registry mirror URL and specifies whether it is **Insecure**.

**Mirror URL** specifies the URL of the registry mirror to use when pulling container images. Must be a valid URL (for example, *https://mirror.example.com*). Useful for air-gapped environments, corporate proxies, or to avoid Docker Hub rate limits.

**Insecure** allows the registry mirror to use an unverified or self-signed TLS certificate. Enable only for trusted internal mirrors. Not recommended for production use.

**Install NVIDIA Drivers** shows if an NVIDIA GPU is detected by TrueNAS. It allows installing NVIDIA GPU drivers on the system. Disabled when TrueNAS Debug Kernel is enabled. When disabled, allows removing installed drivers. Requires the system to use the production kernel — if **Enable Debug Kernel** is selected in the [Kernel Card](#kernel-card), driver installation fails. Installing requires you to disable the debug kernel before installing NVIDIA drivers.

**Check for docker image updates** sets TrueNAS to automatically check for docker image updates (default setting).

## Applications Table

The **Applications** table on the **Installed** screen shows a row for each installed app. It shows the current state of the app and the option to stop the app.
Stopped apps show the option to start the app.

The **Application** tabie shows with the first row selected by default, and showing the cards for that app.

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
* **Delete All Selected** - Opens the [**Delete Applications**](#delete-app) dialog listing the selected app.

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

**Version** sets the version of the app to roll back to from the available app versions.
The version numbers are the **Revision** of the app in the TrueNAS catalog, equivalent to the **Revision** shwwn on the **Application Info** card.
This is the catalog revision, not the upstream **Version**.
See [Understanding Versions](https://apps.truenas.com/managing-apps/discovering-apps/#understanding-versions) on the TrueNAS Apps Market for more information.

**Roll back snapshots** restores the application data volume to match the selected version by rolling back to the snapshot for that version.
This reverts both the application and app data stored in the apps pool to the exact state from when the snapshot was created.

{{< hint type=note >}}
**Roll back snapshots** only affect data saved in the apps dataset, such as iXvolume storage.
Data in mounted host paths is not rolled back.
{{< /hint >}}

**Cancel** closes the dialog without completing the rollback.

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
Converting to a custom app allows direct editing of the YAML configuration file for the app using the [Custom App Screens]({{< relref "/Apps/InstallCustomAppScreens.md" >}}).

{{< trueimage src="/images/SCALE/Apps/ConvertToCustomAppDialog.png" alt="Convert to Custom App Dialog" id="Convert to Custom App Dialog" >}}

{{< hint type=warning title="Permanent Action" >}}
Converting to custom app is a one-time and permanent operation.
When converted, a custom application cannot be converted back to a catalog version.
{{< /hint >}}

**Cancel** closes the dialog without converting the application.

**Confirm** enables the **Convert** button.

**Convert** begins the conversion process.

### Workloads Card

The **Workloads** card shows the container information for the selected application.
Information includes the number of pods, used ports, number of deployments, stateful sets, and container information.
It also shows icons for a **Shell**, **Volume Mounts**, and **View Log** that open the container pod shell or log screens, and a mount point dialog.
The option to access the log and the shell remains available for stopped applications with fully deployed application containers, and for applications in the crashed state.

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

The **Application Metadata** card shows application capabilities unique to the application, and **Run As Content** shows the user and group IDs, the default user and group name, and a brief description for the application.

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

The screen includes small screenshots of the application website that, when clicked, open larger versions of the image.

**Install** on the details screen for each app opens the install wizard for the app.

The bottom of the screen includes app cards for similar applications found in the catalog.

### Application Install or Edit App Wizards

The application **Install *Application*** wizard and **Edit *Application*** screens show the same settings, but un-editable settings are either not shown or are inactive to prevent edit attempts. The installation wizard configuration sections vary by application, with some including more configuration areas than others.

Settings in the app installation wizard are grouped into sections. Not all sections are required to deploy every app, so some might not be included in the install-app wizard.
Settings in each section can differ by app based on what that app requires to fully deploy.
The sections and settings below are common to apps in the Stable and Enterprise trains, but it is not an exhaustive list of app settings.
Apps in Community trains might also include these sections and these settings.

The install and edit wizard screens include a Table of Contents navigation panel on the right of the screen that lists and links to the setting sections.
A red triangle with an exclamation point marks the sections with the required settings.
An asterisk marks the required fields in a section.
You can enter a new setting in fields that include a preprogrammed default.

{{< trueimage src="/images/SCALE/Apps/AppsInstallWizardSectionTOC.png" alt="App Installation Wizard ToC" id="App Installation Wizard ToC" >}}

The app name in the breadcrumb at the top of the app install wizard returns to the details screen for the app, closing the app installation wizard without saving changes made.

**Discover** in the breadcrumb at the top of the app install wizard returns to the **Discover** screen, closing the app installation wizard without saving any changes made. 

After installing an app, **Edit** on the **Application Info** card for that app opens the **Installed** applications screen where you can the modify most settings.
The **Edit *Application*** screen opens populated with the current settings for the application.

For more detailed information on application install wizard settings, see individual app resources in the [Catalog](/catalog).

#### Application Name Settings

**Application Name** shows the default name for the application. If deploying more than one instance of the application, you must change the default name.

**Version** shows the current version of the app. Do not change the version number for official apps or those included in a TrueNAS catalog.
When a new version becomes available, the **Installed** application screen shows an update alert, and the **Application Info** card shows an **Update** button.
Updating the app changes the version to the currently available release.

#### *Application* Configuration settings

Settings in the application configuration section change based on what the app requires to deploy. It shows required and optional settings for the app.
Typical settings include user credentials, environment variables, additional argument settings, the name of the node, or even sizing parameters.

#### User and Group Configuration Settings

Settings shows the user and group ID for the default user assigned to the app.
If not using a default user and group provided, add a new user to manage the application before using the installation wizard, then enter the UID in both the user and group fields.
This section is not always included in app installation wizards.

{{< expand "User and Group Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User ID** | Specifies the numeric user ID (UID) of the user that runs the container. Default is 568 (apps). |
| **Group ID** | Specifies the numeric group ID (GID) of the group that runs the container. Default 568 (apps). |
{{< /truetable >}}
{{< /expand >}}

#### Network Configuration Settings

Settings cover network settings the app needs to communicate with TrueNAS and the Internet. They include the default port assignment, hostname, IP addresses, and other network settings.

If changing the port number to something other than the default setting, refer to [Default Ports](https://www.truenas.com/docs/solutions/optimizations/security/#truenas-default-ports) for a list of used and available port numbers.

Some network configuration settings include the option to add a certificate. Create the certificate authority and certificate before using the installation wizard if using a certificate is required for the application.

{{< expand "Network Configuration Settings" "v" >}}
Network configuration settings vary to suit the requirements of the selected application. Not all possible network configuration settings are listed in this section.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Port Bind Mode** | Sets how the port is exposed. **Publish** makes the port available on the host for external access. **Expose** makes the port available for inter-container communication only. |
| **Port Number** | Sets the port number for the application. Accept the default port unless some other specific port number is required. Before changing the port number refer to TrueNAS documentation on default port numbers. |
| **Host IPs** | Sets the host IP address to the option selected on the dropdown list. Can specifies one or more IP addresses on the host to bind the port to when **Port Bind Mode** is set to **Publish**. Only shows when **Port Bind Mode** is set to **Publish**. **Add** shows the **Host IP** field. |
| **Host Network** | Bypasses port mapping, granting the container direct access network interfaces on the host. This can improve performance, especially in deployments with many users, and simplify network configuration, but compromises isolation and introduces the risk of port conflicts, limiting the ability to run multiple instances of the same app. For most deployments, default port mapping is more secure and versatile. We do not recommend enabling **Host Network** unless required for the specific application or workload. When disabled, the other networks settings show to allow for customization. |
| **Certificate** | Sets the optional certificate for the application to use to the one selected from the list of available certificates in the TrueNAS system. See [Managing Certificates]({{< ref "ManagingCertificates" >}}) for information on importing a certificate or the application. |
| **DNS Options** | Specifies optional DNS options if required for your use case. Clicking **Add** shows the **Options** field. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Networks Settings" "v" >}}

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworkConfigNetworksSettings.png" alt="Network Configuration - Networks Settings" id="Network Configuration - Networks Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the name of an existing Docker network for the container to join. The network must already exist. |
| **Containers** | Specifies the settings for the container assoicated with the selected app. **Add** shows the container settings. |
| **Container Name** | Sets the container to configure. Shows a list of containers assoicated with the selected app.  |
| **Aliases (Optional)** | Specifies one or more optional network aliases for the container on this network. Clicking **Add** shows the **Alias** field. |
| **Alias** | Specified the optional network alias to add. for the container. Must be on the same network. |
| **Interface Name (Optional**) | Specifies the optional network interface name to use for this network. |
| **MAC Address (Otional)** | Specifies the otpional MAC address for the network interface. |
| **IPv4 Address (Optional)** | Specifies the optional IPv4 address for the network interface. |
| **IPv6 Address (Optional)** | Specifies the optional IPv6 address for the network interface. |
| **Gateway Priority (Optional)** | Sets the optional priority of the gateway for this network interface. |
| **Prioirty (Optional)** | Specifies the order which Compose connects the container services to its networks. |
{{< /truetable >}}
{{< /expand >}}

#### Storage Configuration Settings

Setting options configure storage volumes (datasets, ix-application volumes, shares, temporary options) for the application.
Storage configuration can include the primary data mount volume, a configuration volume, postgres volumes, and an option to add additional storage volumes.

If the application requires host path storage volumes for particular storage, the app installation wizard shows a storage configuration section nameed for that storage requirement.
Refer to tutorials for specifics.

Storage options can include:

* **ixVolume** - Creates a storage volume inside the hidden **ix-apps** dataset by default unless a different mount path is specified. It shows as the default storage type. Used to rapidly deploy the app for testing purposes, but is not intended as storage for a full app deployment. ixVolumes are not recommended for permanent storage volumes. We recommend adding datasets and configuring the container storage volumes with the host path option.

* **Host path** - Sets a specific dataset created for the app for use as the required storage. Shows additional settings related to the storage volume such as ACL permissions. Host paths add existing dataset(s) as the storage volumes. You can configure the datasets before beginning the app installation using the wizard or click **Create Dataset** in the app install wizard.

* **SMB share** - Sets up an SMB share as a Docker volume for the application to use.

* **NFS share** - Sets up an NFS share as a Docker volume for the application to use.

* **Tmpfs (Temporary directory created on the RAM)** - Creates temporary storage in RAM that does not persist. Suitable for logs.

If the application requires specific datasets or you want to allow SMB or NFS share access, configure the dataset(s) and share before using the installation wizard.

See [Understanding App Storage Volumes](/getting-started/app-storage) for more information.

**Add** shows additonal storage options to create additional storage volumes after configuring required storage volumes.

{{< expand "Common Storage Configuration Settings" "v" >}}
The following are common storage configuration settings that show for ixVolumes and host paths. Apps that require datasets for specific storage can show as storage configuration setting blocks.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type**  | Sets the storage option used in the container and the settings shown by that type. Options: **ixVolume (dataset created automatically by the system)**, **Host Path (Path that already exists on the system)**, **SMB/CIFS Share (Mounts a vlume to a SMB Share)**, **NFS Share (Mounts a volum eto a NFS share)**, or **Tmpfs (Temporary Directory created on the RAM)**. |
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Sets the <file>**path/to/directory**</file> where the host path mounts inside the container, but is not required or shown for all apps. Using the file browser to select the **Host Path** can populate the **Mount Path**. |
| **Enable ACL** | Sets up custom Access Control List (ACL) entries for the container mount. It shows the **ACL Configuration** settings fields. |
| **Host Path** | Sets the path to the existing dataset, or click <span class="material-icons">arrow_right</span> to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> **/mnt** to browse to the location of the dataset to populate the **Host Path**. Click on the dataset to select and display it in the **Host Path** field.  After selecting a dataset in the file browser the **Create Dataset** option becomes available and allows adding a new dataset under the selected dataset. |
| **Create Dataset** | Opens a dialog that allows you to add a new dataset under the dataseet selected in the apps storage file browser. Activates after selecting a dataset in the file browser. |
| **ACL Entries** | Shows the ACL settings to create a custom ACL for the storage volume. Shows the **ACL Entries** option and **Add** button. Clicking **Add** shows the **ID Type**, **ID** and **Access** fields that define the ACL entry. |
| **ID Type** | Sets the type of entry defined. Options are **Entry is for a USER** or **Entry is for a GROUP**. Shows after enabling **Enable ACL** and clicking **Add**. |
| **ID** | Specifies the numeric UID or GID, matching the selected **ID Type**. Shows after enabling **Enable ACL** and clicking **Add**. |
| **Access** | Sets the level of access privileges to assign to the user or group matching the **ID**. Options are **Read Access**, **Modify Access**, or **FULL_CONTROL Access**. Shows after enabling **Enable ACL** and clicking **Add**. |
| **Force Flag** | Applies the configured ACL settings to a directory containing existing data. Shows after enabling **Enable ACL** and clicking **Add**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "SMB/CIFS Share (Mounts a volume to a SMB share)" "v" >}}
Use to mount an SMB share with a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Specifies the required <file>**path/to/directory**</file> where the share volume mounts inside the container. |
| **Server** | Specifies the required IP address for the SMB server, for example *192.168.1.100*. This can be the TrueNAS host. |
| **Path** | Specifies the required name of the SMB share, for example *my-share*. |
| **Username** | Specifies the required username of an account with permission to access the SMB share. |
| **Password** | Specifies the required the password for the account in **Username**. |
| **Domain** | Specifies the directory services domain. Only required if the domain is something other than the TrueNAS default `WORKGROUP`, for example on systems with Active Directory configured.  |
{{< /truetable >}}
{{< /expand >}}

{{< expand "NFS Share (Mounts a volume to a NFS share)" "v" >}}
Use to mount an NFS share with a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Specifies the required <file>**path/to/directory**</file> where the share volume mounts inside the container. |
| **Server** | Specifies the required IP address for the NFS server, for example *192.168.1.100*. This can be the TrueNAS host. |
| **Path** | Specifies the required name of the NFS share, for example *my-share*. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Tmpfs (Temporary directory created on the RAM)" "v" >}}
Use to configure a memory-backed temporary directory.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. Not recommended for memory-backed storage. |
| **Mount Path** | Specifies the required path where the memory-backed directory mounts inside the container. |
| **Tmpfs Size Limit (in Mi)** | Sets the required maximum size of the temporary directory in mebibytes. Defaults to *500*. |
{{< /truetable >}}
{{< /expand >}}


#### Label Configuration Settings

**Label Configuration** settings allow creating custom key-falue pairs attached to a container as metadata.
These are informational tags used to organize, identify, and filter containers. Common uses include marking which app or environment a container belongs to, noting a version or owner, or letting external tools (monitoring, orchestration, backup scripts) select the containers by label instead of by name or ID.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppLabelConfig.png" alt="Label Configuration Settings" id="Label Configuration Settings" >}}

**Add** shows the label settings.

**Key** sets the label key for the container.

**Value** sets the label value paired with the label key.

#### Resources Configuration Settings

Setting options configure how much CPU and memory is allocated for the container pod.
In most cases, you can accept the default settings or you can change these settings to limit the system resources available to the application.

Some apps include GPU settings if the app allows or requires GPU passthrough.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddResourceLimits.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< expand "Network Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Resource Limits** | Select to enable resource limits and display the **CPUs** and **Memory (in MB)** settings. |
| **CPUs** | Enter the maximum number of CPU cores the container can access. For example, *2*. |
| **Memory (in MB)** | Specifies the number of megabytes in the memory limit applied to the container. For example, *4096*. Only shows after selecdting **Enable Resource Limits**. |
| **Passthrough available (non-NVIDIA) GPUs** | Select to allow the passthrough of non-NVIDIA GPU devices to the container. |
| **Select NVIDIA GPU(s)** | Displays if compatible NVIDIA GPU device(s) are installed and detected. |
| **Use this GPU** | Select to allow passthrough of the specified NVIDIA device to the container. |
{{< /truetable >}}
{{< /expand >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>

{{< trademark-notice minio="true" >}}
