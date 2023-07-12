---
title: "Applications Screens"
description: "Provides information on application screens and settings in SCALE."
weight: 10
aliases:
tags:
- scaleapps
- scalecustomapp
- scalecatalog
---

{{< toc >}}

## Installed Apllications Screen

The **Apps** option on the main feature panel opens the **Installed Applications** screen. 
The screen displays **No Applications Installed** before you install the first application. 

{{< trueimage src="/images/SCALE/23.10/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="1: Installed Applications Screen No Apps" >}}

**Leave Feedback** on the top header opens a feedback window that allows you to rate prereleased SCALE screens and leave commments.

{{< expand "Leave Feedback" "v" >}}
{{< include file="NewLeaveFeedback.md" type="page" >}}
{{< /expand >}}

Use **Check Available Apps** or **Discover Apps** to open the **[Discover](#discover-screen)** applications screen to see widgets for applications available in SCALE.

After installing an application, the **Installed** screen populates the **Applications** area with a table of applications.
Each application listed shows the name, status, CPU, RAM, disk and update information for the application.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsStatus.png" alt="Installed Applications Status" id="2: Installed Applications Status" >}}

Use **Search** to enter the name and search for an installed application.

The **[Bulk Actions](#bulk-actions)** dropdown list displays if you select the **Applications** checkbox or the checkbox to the left of an individual installed application.
The **Applications** checkbox selects all installed apps.
The checkbox to the left of an individual application selects that application.

### Settings 

**Settings** only displays on the **Installed Applications** screen and displays the global options that apply to all applications.

* **Choose Pool** opens the **[Choose a pool for Apps](#choose-a-pool-for-apps-dialog)** dialog.
* **Advanced Settings** opens the **[Kubernetes Settings](#kubernetes-settings-screen)** configuration screen.
* **Unset Pool** displays only after setting a pool for applications to use. It opens the **Unset Pool** dialog.

{{< trueimage src="/images/SCALE/23.10/AppsInstalledAppsSettingOptions.png" alt="Installed Applications Screen Settings" id="3: Installed Applications Screen Settings" >}}

#### Choose a Pool for Apps Dialog

The **Choose a pool for Apps** dialog includes the **Pool** dropdown list that shows the list of pools available on your system.
**Choose** sets the selected pool for use by appliations.
Use the **Settings > Choose Pool** option to change the pool.

{{< trueimage src="/images/SCALE/23.10/AppsChoosePoolForApps.png" alt="Apps Choose a Pool for Apps" id="4: Apps Choose a Pool for Apps" >}}

**Migrate applications to the new pool** starts moving application data from an existing pool to the new pool specified after you click **Choose**.
Select **Migrate applications to the new pool** when changing the applications pool and migrating data from the existing pool to the new one.

#### Kubernetes Settings Screen

**Advanced Settings** opens the **Kubernetes Settings** configuration screen.

{{< trueimage src="/images/SCALE/23.10/KubernetesSettingsScreenTop.png" alt="Apps Kubernetes Settings" id="5: Apps Kubernetes Settings" >}}

{{< expand "Settings Information" "v" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Node IP** | Select the IP address for the node from the dropdown list. |
| **Route v4 Interface** | Select the network interface from the dropdown list. |
| **Route v4 Gateway** | Enter the IP address for the route v4 gateway. |
| **Enable Container Image Updates** | Select to enable container image updates. |
| **Enable GPU support** | Select to enable GPU support. The maximum number of apps that can use an Intel GPU is five. |
| **Enable Integrated Loadbalancer** | Select to enable the integrated loadbalancer. The default uses servicelb. When disabled, you can use metallb and specify any IP from the local network.  |
| **Enable Host Path Safety Checks** | Enabled by default. Select to enable TrueNAS SCALE to perform safety checks to ensure app host path volumes are secure. |
{{< /truetable >}}

**Settings Requiring Re-Initialization**

{{< trueimage src="/images/SCALE/23.10/KubernetesSettingsScreenBottom.png" alt="Apps Kubernetes Settings Requiring Re-Initialization" id="6: Apps Kubernetes Settings Requiring Re-Initialization" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Cluster CIDR** | Required. Enter the IP address and CIDR number for the Kubernetes cluster. |
| **Service CIDR** | Required. Enter the IP address and CIDR number for the Kubernetes service. |
| **Cluster DNS IP** | Required. Enter the IP address for the cluster DNS. |
| **Force** | Select to force bypassing pool validation during Kubernetes reinitialization. |
{{< /truetable >}}
{{< /expand >}}

#### Unset Pool

The **Unset Pool** option under **Settings** displays a confirmation dialog. Click **UNSET** to unset the pool. When complete, a **Success** dialog displays.

{{< trueimage src="/images/SCALE/23.10/AppsUnsetPoolDialog.png" alt="Apps Unset Pool" id="7: Apps Unset Pool" >}}

### Bulk Actions 

The **Bulk Action** dropdown list allows you to apply actions to one more applications installed and running on your system.  
Options are **Start All Selected**, **Stop All Selected**, **Upgrade All Selected**, and **Delete All Selected**.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsBulkActions.png" alt="Installed Applications Bulk Actions" id="8: Installed Applications Bulk Actions" >}}

### Application Info Widget

The **Application Info** widget shows for each application on the **Installed** application screen. 
The widget includes the name, version number, date last updated, source link for the application, developer, catalog and train name.

{{< trueimage src="/images/SCALE/23.10/InstalledAppScreenApplicationInfoWidget.png" alt="Installed Application Info Widget" id="9: Installed Application Info Widget" >}}

**Web Portal** opens the application login or sign-up web page.

**[Delete](#delete-apps)** deletes the application deployment but does not remove it from the catalog or train in TruNAS SCALE.

**[Edit](#install-or-edit-app-wizards)** opens an **Edit *Application*** configuration screen with the settings found on the install wizard screen for the application.

**[Update](#update-apps)** opens a window for the application showing the current version and the new version the upgrade installs.

#### Delete Apps

The **Delete** dialog for a selected application includes two confirmation options, **Confirm** and **Delete docker images used by the app**.

{{< trueimage src="/images/SCALE/23.10/AppsDeleteAppDialog.png" alt="Delete Application Dialog" id="10: Delete Application Dialog" >}}

**Delete docker images used by the app** deletes both the application and the docker image the app uses. 
**Confirm** activates the **Continue** button. **Continue** initiates the delete operation.

#### Update Apps

**Update** on the **Application Info** widget displays after clicking the **Update All** button on the **Installed** applications header. Both buttons only display if TrueNAS SCALE detects an available update for an application. 
The application widget on the **Discover** screen also displays and update badge.

**Update** opens an upgrade window for the application that includes two selectable options, **Images (to be updated)** and **Changelog**.
Click on the down arrow to see the options available for each.

{{< trueimage src="/images/SCALE/23.10/AppUpdateWindow.png" alt="Update Application Window" id="11: Update Application Window" >}}

**Upgrade** begins the process and opens a counter dialog that shows the upgrade progress.
When complete, the update badge and buttons disappear and the application **Update** state on the **Installed** screen changes from **Update Available** to **Up to date**.

### Workloads Widget

The **Workloads** widget shows the pod information for the selected installed application.
Information includes number of pods, used ports, number of deployments, stateful sets, and container information. One icon links to the pod shell and another to pod logs.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsScreenContainersWidget.png" alt="Installed Apps Containers Widget" id="12: Installed Apps Containers Widget" >}}

The **Shell** icon button opens the **[Choose Pod](#choose-pod)** window. After selecting the options a Shell for the pod opens.

The **Logs** icon button opens the **Choose Pod** window. After selecting the options, a window with logs for pod opens.

#### Choose Pod 

The **Choose Pod** window lets you choose the pod, active container, and shell commands to use when the **Applications > Pod Shell** screen displays.

{{< trueimage src="/images/SCALE/23.10/AppsChoosePodWindow.png" alt="Apps Choose Pod Window" id="13: Apps Choose Pod Window" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Pods** | Required. Select the pod installed from the dropdown list. |
| **Containers** | Required. Select the container from the dropdown list. |
| **Commands** | Enter the shell commands. |
{{< /truetable >}}

**Choose** opens the **Pod Shell** or **Pod Log** screen based on the **Workloads** widget icon clicked.

### History Widget

The **History** widget for each application displays Kubernetes related events.
The refresh icon updates the information in this widget.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsHistoryWidget.png" alt="Installed Apps History Widget" id="14: Installed Apps History Widget" >}}

### Notes Widget

The **Notes** widget for each application displays any notes related to the application. If there are no notes, the widget does not display. Example content ranges from links to TrueNAS documetation on the application to a CLI command to get to the application URL in the Shell.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsNotesWidget.png" alt="Installed Apps Notes Widget" id="15: Installed Apps Notes Widget" >}}

## Application Install and Edit Screens

Each application has an installation wizard with settings that application uses or needs to deploy the application container. The edit screen opens the same installation wizard, but some settings might not be editable.

**Install** on the application widget on the **Discover** screen opens the application information screen for that application.

### Application Information Screens

Each application information screen includes the catalog, version, train, home page link, and keywords to find the app in TrueNAS searches.

{{< trueimage src="/images/SCALE/23.10/AppsNextcloudInstallScreen.png" alt="Application Information Screen Example" id="16: Application Information Screen Example" >}}

The screen includes three widgets:

* **Available Resources** that displays CPU and memory usage, the pool and available space in gigabits.
* **Helm Chart Info** that includes the catalog, train, chart version, and the mainainer of the chart.
* **Application Info** that includes the application version number, links to the source(s), and last application update time and date.

The screen includes small screenshots of the application website that when clicked open larger versions of the image.

**Install** opens the installation wizard for the application.

The bottom of the screen includes widgets for similar applications found in the catalog.

### Install or Edit App Wizards

Each application has the same or similarly named setting sections.
The install and edit wizard screens include a navigation panel on the right of the screen that lists and links to the setting sections.
A red triangle with an exclamation point marks the sections with required settings.
An asterisk marks required fields in a section.
You can enter a new setting in fields that include a preprogrammed default.

{{< trueimage src="/images/SCALE/23.10/AppsInstallWizardSectionTOC.png" alt="App Installation Wizard ToC" id="17: App Installation Wizard ToC" >}}

Not all applications include all of the following sections:

{{< truetable >}}
| Setting Section | Description |
|-----------------|-------------|
| **Application Name** | Includes the required **Application Name** and **Version** settings. SCALE provides the default application name and current version number of the application in the TRUENAS chart. After installing the application, the name is not editable. Version is not included on the **Edit application** screen. |
| **Application* Configuration** | Includes certificates, credential or token authentication, timezone, host name, and environment variable settings that vary by application. Settings are editable. Some applications include network settings in this section. |
| **Networking** | Includes container network settings such as the port number assigned for communication, and to set an option that  the host network settings manually or to use the default option to use the preprogrammed settings defined in SCALE. |
| **Storage** | Includes the option to enable and configure extra volumes such as a data and configuration volume, or other volumes the application might need. |
| **Scaling/Upgrade Policy** | Includes the update strategy or policy setting. Another application might include Update strategy in the **Workload Configuration** section. |
| **Resource Reservation** | Includes the GPU configuration setting. |
| **Advanced DNS Settings** | Includes options to configure advanced DNS settings. |
| **Resource Limits** | Includes the option to limit CPU and memory resources the Kubernetes pod uses in SCALE. |
| **CronJob Configuration** | Includes options to enable, configure, and schedule cron jobs as part of the application deployment. |
{{< /truetable >}}

## Discover Screen

The **Discover** screen displays **New & Updated Apps** application widgets for the official TrueNAS **Chart**, **Community**, and **Enterprise** train applications based on the **Trains** settings selected on the **[Edit Catalog](#edit-catalog-screen)** screen. First time SCALE installation includes the **Chart** catalog train.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="18: Applications Discover Screen" >}}

### Discover Screen Header

The header includes the **Leave Feedback** link in early release versions of SCALE Cobia.

The breadcrumbs at the top of the header provide links to the previous or the main applications screen. Click a link to open that screen.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreenHeaderAndSearch.png" alt="Apps Discover Screen Header and Search" id="19: Discover Screen Header and Search" >}}

**Custom App** opens the **[Install Custom App](#install-custom-app-screen)** screen.

### Discover Screen Application Screen Links

The **Discover** screen includes a search field, links to other application management screens, and filters to sort the application widgets displayed.

The three application screen links are:

* **Refresh Charts** that executes a job to refresh the catalog applications.
* **Manage Installed Apps** that opens **[Installed](#installed-apllications-screen)** applications screen.
* **Manage Catalogs** that opens the **[Catalog](#catalogs-screen)** screen.

### Discover Screen Filters

**Filters** shows a list of sort categories that alter how application widgets display. Filter information includes the **Catalog**, **Sort** options and the **Categories** dropdown field.

**Catalog** displays the default catalog **TRUENAS**.

**Sort** options are:

* **Category** sorts the app widgets by category or functional area.
  For example, New & Updated Apps, S3, File-Sharing, Financial, Games, Media, Monitoring, Networking, Productivity, Security and Storage.
* **App Name** sorts the app widgets alphabetically (A to Z)
* **Catalog Name** sorts the app widgets by installed catalogs. TRUENAS is the default catalog installed in SCALE.
* **Updated Date** sorts the app widgets by date of update.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreenFilterOptions.png" alt="Apps Discover Screen Filter Options" id="20: Discover Screen Filter Options" >}}

**Categories** allows selecting which application categories display. Options are **New-And-Updated**, **Recommended**, **S3**, **File-Sharing**, **Financial**, **Games**, **Media**, **Monitoring**, **Networking**, **Productivity**, **Security**, and **Storage**.
Click in the field to see the list, then click on a category. Repeat to select multiple categories.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreenFilterCategoryOptions.png" alt="Discover Screen Filter Category Options" id="21: Discover Screen Filter Category Options" >}}

## Install Custom App Screen

The **Install Custom App** screen displays the setting options needed to install a third-party application not included in the TRUENAS catalog.
See [Install Custom App Screens]({{< relref "InstallCustomAppScreens.md" >}}) for more information.

## Catalogs Screen

The **Catalog** screen displays a list of application catalogs installed on TrueNAS SCALE, default catalog is **TRUENAS**.

{{< trueimage src="/images/SCALE/23.10/AppsCatalogScreen.png" alt="Apps Catalogs Screen" id="22: Apps Catalogs Screen" >}}

The options at the top right of the screen include the **Refresh All** and **Add Catalog** options.
**Refresh All** starts a catalog refresh operation.
**[Add Catalog](#add-catalog-screen)** opens the **Add Catalog** screen after first displaying a warning confirmation dialog.

Click on a catalog row to expand it and show the options available for each catalog:

* **[Summary](#catalog-summary-window)**
* **[Refresh](#refresh-catalog)**
* **[Edit](#edit-catalog-screen)**

The default **TRUENAS** catalog does not show the **[Delete](#delete-catalog)** option.

{{< trueimage src="/images/SCALE/23.10/AppsCatalogExpandedViewWithOptions.png" alt="Apps Catalog Options" id="23: Apps Catalog Options" >}}

### Add Catalog Screen

**Add Catalog** at the top of the **Catalogs** screen opens a warning dialog before it opens the **Add Catalog** screen.

{{< trueimage src="/images/SCALE/23.10/AddCatalogWarning.png" alt="Add Catalog Warning" id="24: Add Catalog Warning" >}}

Click **Continue** to open the **Add Catalog** screen.

{{< trueimage src="/images/SCALE/23.10/AppsAddCatalogScreen.png" alt="Apps Add Catalog Screen" id="25: Apps Add Catalog Screen" >}}

{{< truetable >}}
| Field | Description | 
|---------|-------|
| **Catalog Name** | enter the name the TrueNAS uses to look up the catalog. For example, *truecharts*. |
| **Force Create** | Select to add the catalog to the system even if some trains are unhealthy. |
| **Repository** |  Enter the valid git repository URL. For example,  *https://github.com/truecharts/catalog*. |
| **Preferred Trains** | The trains TrueNAS uses to retrieve available applications for the catalog. The default is **stable** (and optionally: **incubator**). |
| **Branch** | Specify the git repository branch TrueNAS should use for the catalog. The default is **main**. |
{{< /truetable >}}

### Edit Catalog Screen

The **Edit Catalog** screen settings specify the name and train the UI should use to look up the catalog and retrieve applications for the catalog.
The **Catalog Name** is not editable, but you can change the train.

{{< trueimage src="/images/SCALE/23.10/AppsEditCatalogScreen.png" alt="Apps Edit Catalog Screen" id="26: Apps Edit Catalog Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Catalog Name** | Enter a name TrueNAS should use to look up the catalog. |
| **Preferred Train** | Select the train(s) from which the UI retrieves available applications for the catalog. Dropdown list options are **charts**, **test**, **enterprise**, and **community**. |
{{< /truetable >}}

### Refresh Catalog

**Refresh** initiates the catalog refresh operation for the selected catalog.

### Delete Catalog

Opens a confirmation dialog before deleting the catalog.
You cannot delete the **TRUENAS** catalog.

### Catalog Summary Window

The **Summary** option for each catalog ***Name* Catalog Summary** window where *Name* is the name of the catalog displays the current catalog status (**Healthy**, **Unhealthy**), the train, and list of application information.
The **Trains** dropdown options are **All**, **charts**, **community**, and **enterprise**.
The **Status** dropdown list options are **All**, **Healthy**, and **Unhealthy**. 
Select options to alter the information included in the displayed summary.
**Close** closes the window.

{{< trueimage src="/images/SCALE/23.10/AppsTruenasCatalogSummaryWindow.png" alt="Apps Catalog Summary Window" id="27: Apps Catalog Summary Window" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Train** | Select the trains you want to include in the catalog summary information. Options are **All**, **charts**, **test**, **enterprise** or **community**. |
| **Status** | Select the statuses you want to include in the catalog summary information. Options are **All**, **Healthy**, or **Unhealthy**. This is useful to filter the summary to locate trains or applications with the **Unhealthy** status. |
{{< /truetable >}}

{{< taglist tag="scaleapps" limit="10" title="Related Application Articles" >}}
