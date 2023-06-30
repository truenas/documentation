---
title: "Applications Screens"
description: "Provides information on application screens and settings in SCALE."
weight: 10
aliases:
tags:
- scaleapps
---

{{< toc >}}


## Installed Apllications Screen
The **Apps** option on the main feature navigation panel opens the **Installed Applications** screen. 
The screen displays **No Applications Installed** the first time you install and log into SCALE or if you do not have existing applications installed from an earlier SCALE release. 

{{< trueimage src="/images/SCALE/23.10/AppsInstalledAppsScreenNoApps.png" alt="Installed Applications Screen No Apps" id="1 Installed Applications Screen No Apps" >}}

**Leave Feedback** on the top header opens a feedback window that allows you to rate prereleased SCALE screens and leave commments.

Use **Check Available Apps** or **Discover Apps** to open the **[Discover](#discover-screen)** applications screen to see widgets for applications available in SCALE. 

After installing an application, the **Installed** screen populates the **Applications** area with a table of applications. 
Each application listed shows the name, status, CPU, RAM, disk and update information for the application.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsStatus.png" alt="Installed Applications Status" id="2 Installed Applications Status" >}}

Use **Search** to enter the name and search for an installed application.

The **Applications** checkbox selects all running apps. Use this or the checkbox to the left of an individual application to select it and show the **[Bulk Actions](#bulk-actions)** dropdown list.

### Settings 
**Settings** displays global options that apply to all applications. The **Settings** option only displays on the **Installed Applications** screen. Options are:

* **Choose Pool** opens the **[Choose A pool for Apps](#choose-a-pool-for-apps-dialog)** dialog. 
* **Advanced Settings** opens the **[Kubernetes Settings](#kubernetes-settings-screen)** configuration screen. 
* **Unset Pool** only displays after setting a pool for applications to use. It opens the **Unset Pool** dialog.

{{< trueimage src="/images/SCALE/23.10/AppsInstalledAppsSettingOptions.png" alt="Installed Applications Screen Settings" id="3 Installed Applications Screen Settings" >}}

#### Choose a Pool for Apps Dialog
The **Choose a pool for Apps** dialog includes the **Pool** dropdown list that includes the list of pools available on your system. 
**Choose** sets the selected pool as the applica
Use the **Settings > Choose Pool** option to change the pool .

{{< trueimage src="/images/SCALE/23.10/AppsChoosePoolForApps.png" alt="Apps Choose a Pool for Apps" id="4 Apps Choose a Pool for Apps" >}}

**Migrate applications to the new pool** starts moving your application data from the existing pool to the new pool specified after you click **Choose**. 
Select **Migrate applications to the new pool** if you change your applications pool and want to migrate data from the existing pool to the new one.

#### Kubernetes Settings Screen
The **Advanced Settings** option opens the **Kubernetes Settings** configuration screen.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/23.10/KubernetesSettingsScreenTop.png" alt="Apps Kubernetes Settings" id="5 Apps Kubernetes Settings" >}}

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

{{< trueimage src="/images/SCALE/23.10/KubernetesSettingsScreenBottom.png" alt="Apps Kubernetes Settings Requiring Re-Initialization" id="5 Apps Kubernetes Settings Requiring Re-Initialization" >}}

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

{{< trueimage src="/images/SCALE/23.10/AppsUnsetPoolDialog.png" alt="Apps Unset Pool" id="6 Apps Unset Pool" >}}

### Bulk Actions 

The **Bulk Action** dropdown list allows you to apply actions to one more applications installed and running on your system.  
Options are **Start All Selected**, **Stop All Selected**, **Upgrade All Selected**, or **Delete All Selected**.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsBulkActions.png" alt="Installed Applications Bulk Actions" id="7 Installed Applications Bulk Actions" >}}

### Applications Info Widget
The **Applications Info** widget shows for each application on the **Installed** application screen. 
The widget includes the name, version number, date last updated, source link for the application, developer, catalog and train name where it is located.

{{< trueimage src="/images/SCALE/23.10/InstalledAppScreenApplicationInfoWidget.png" alt="Installed Application Info Widget" id="8 Installed Application Info Widget" >}}

**Web Portal** opens the application login or sign-up web page.

**Delete** deletes the application deployment but does not remove it from the catalog or train in TruNAS SCALE.

**[Edit]()** opens a **Edit *Application*** configuration screen with the settings found on the install wizard screen for the application.

### Containers Widget
The **Containers** widget shows the pod information for the selected installed application. 
Information includes number of pods, port ids, number of deployments, stateful sets, and icon links to the pod shell and logs.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsScreenContainersWidget.png" alt="Installed Apps Containers Widget" id="9 Installed Apps Containers Widget" >}}

The **Shell** icon button opens the **[Choose Pod]()** window. After selecting the options a Shell for the pod opens.

The **Logs** icon button opens the **Choose Pod** window. After selecting the options, a window with logs for pod opens.

### History Widget
The **History** widget for each application displays Kubernetes related vents. 
The refresh icon updates the information in this widget.

{{< trueimage src="/images/SCALE/23.10/InstalledAppsHistoryWidget.png" alt="Installed Apps History Widget" id="10 Installed Apps History Widget" >}}

### Notes Widget
The **Notes** widget for each application displays any notes related to the application. Example content ranges to links to TrueNAS documetation on the application to a CLI command to get to the application URL in the Shell. 

{{< trueimage src="/images/SCALE/23.10/InstalledAppsNotesWidget.png" alt="Installed Apps Notes Widget" id="11 Installed Apps Notes Widget" >}}

## Discover Screen
The **Discover** screen displays **New & Updated Apps** application widgets for the official TrueNAS **Chart**, **Community**, and **Enterprise** train applications based on the **Trains** settings selected on the **[Edit Catalog]()** screen. First time SCALE installation includes the **Chart** catalog train.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="12 Applcations Discover Screen" >}}

### Discover Screen Header

The header includes the **Leave Feedback** link in early release versions of SCALE Cobia.

The breadcrumbs at the top of the header provide links to the previous or the main applications screen. Click the a link to open that screen.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreenHeaderAndSearch.png" alt="Apps Discover Screen Header and Search" id="13 Discover Screen Header and Search" >}}

**Custom App** opens the **[Install Custom App](#install-custom-app-screen)** screen.

### Discover Screen Application Screen Links
The **Discover** screen includes a search field, links to other application management screens, and filters to sort the application widgets displayed.

The three application screen links are:

* **Refresh Charts** that executes a job to refresh the catalog applications.
* **Manage Installed Apps** that opens **[Installed](#installed-apllications-screen)** applications screen.
* **Manage Catalogs** that opens the **[Catalog]()** screen.

### Discover Screen Filters
**Filters** shows a list of sort categories that alter how application widgets display. Filter information includes the **Catalog**, **Sort** options and the **Categories** dropdown field. 

**Catalog** displays the defalut catalog **TRUENAS**. 

**Sort** options are:

* **Category** sorts the app widgets by category or functional area. 
  For example, New & Updated Apps, S3, File-Sharing, Financial, Games, Media, Monitoring, Networking, Productivity, Security and Storage.
* **App Name** sorts the app widgets alphabetically (A to Z)
* **Catalog Name** sorts the app widgets by installed catalogs. TRUENAS is the default catalog installed in SCALE.
* **Updated Date** sorts the app widgets by date of update.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreenFilterOptions.png" alt="Apps Discover Screen Filter Options" id="14 Discover Screen Filter Options" >}}

**Categories** allows selecting the application categories to display. Categories are  **New-And-Updated**, **Recommended**, **S3**, **File-Sharing**, **Financial**, **Games**, **Media**, **Monitoring**, **Networking**, **Productivity**, **Security**, and **Storage**. 
Click in the field to see the list, then click on a category. Repeat to select multiple categories.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreenFilterCategoryOptions.png" alt="Discover Screen Filter Category Options" id="15 Discover Screen Filter Category Options" >}}

## Install Custom App Screen

The **Install Custom App** screen provides the setting options needed to install an application not included in the TRUENAS catalog. 

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppScreenNameAndImage.png" alt="Install Custom Application Screen" id="16 Install Custom Application Screen" >}}

Settings are grouped into **Application Name**, **Container Images**, **Container Entrypoint**, **Container Environment Variables**, **Networking**, **Port Forwarding**, **Storage**, **Workload Details**, **Scaling/Upgrade Policy**, **Resource Limits**, and **Portal Configuration**.

The panel on the right of the screen links to each setting area, or click in the **Search Input Fields** to see a list of setting links. Click on a heading or setting to jump to that area of the screen.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppSearchInputFields.png" alt="Install Custom App Search Input Fields" id="17 Install Custom App Search Input Fields" >}}

### Application Name Settings



### Container Images Settings


### Container Entrypoint Settings



### Container Environment Variables Settings



### Networking Settings



### Port Forwarding Settings



### Storage Settings



### Workload Details Settings



### Scaling/Upgrade Strategy Settings



### Resource Reseration Settings



### Resource Limits Settings



### Portal Configuration Settings







### Refresh All

Opens a **Refreshing** counter showing the refresh options status. When complete, the **Task Manager** displays the status of each app refresh operation.

### Add Catalog
**Add Catalog** at the top of the **Manage Catalogs** screen opens a warning dialog before it opens the **Add Catalog** screen.
{{< expand "Click Here for More Information" "v" >}}

![AddCatalogWarningSCALE](/images/SCALE/22.02/AddCatalogWarningSCALE.png "Add Catalog Warning")

Click **CONTINUE** to open the **Add Catalog** screen.

![ManageCatalogsAddCatalogScreen](/images/SCALE/22.02/ManageCatalogsAddCatalogScreen.png "Add Catalog")

{{< truetable >}}
| Field | Description | 
|---------|-------|
| **Catalog Name** | enter the name the TrueNAS uses to look up the catalog. For example, *truecharts*. |
| **Force Create** | Select to add the catalog to the system even if some trains are unhealthy. |
| **Repository** |  Enter the valid git repository URL. For example,  *https://github.com/truecharts/catalog*. |
| **Preferred Trains** | The trains TrueNAS uses to retrieve available applications for the catalog. The default is **stable** (and optionally: **incubator**). |
| **Branch** | Specify the git repository branch TrueNAS should use for the catalog. The default is **main**. |
{{< /truetable >}}
{{< /expand >}}

### Pull Image
The **Pull Image** option at the top right of the **Manage Docker Images** screen opens the **Pull Image** screen.
{{< expand "Click Here for More Information" "v" >}}

![AppsManageDockerImagesPullImage](/images/SCALE/22.02/AppsManageDockerImagesPullImage.png "Pull Image")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Image Name** | Enter the name of the image to pull. The format for the name is `registry/repo/image`. |
| **Image Tag** | Enter the image tag. For example, *latest*. |
{{< /truetable >}}

#### Docker Registry Authentication Settings
These settings are optional and only necessary for private images.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Username** | Enter the input user name. |
| **Password** | Enter the input user password. |
{{< /truetable >}}
{{< /expand >}}

### Launch Docker Image

**Launch Docker Image** opens the Docker Image wizard, where you can configure third-party applications not listed on the **Available Applications** screen. 
These docker image options derive from the [Kubernetes container options](https://kubernetes.io/docs/setup/). 
See [Launch Docker Image Screens]({{< relref "LaunchDockerImageScreens.md" >}}) for more information.

## Installed Applications Screen old
The **No Applications Installed** screen displays before you install your first application. **View Catalog** opens the **Available Applications** screen.
{{< expand "Click Here for More Information" "v" >}}

![AppsInstalledApplicationsViewCatalog](/images/SCALE/22.02/AppsInstalledApplicationsViewCatalog.png "Installed Applications View Catalog")

After installing your application(s), this screen displays the application(s).

![InstalledApplicationsWithApps](/images/SCALE/22.02/InstalledApplicationsWithApps.png "Installed Applications")

Click the application name in the app widget to open the app summary screen. The app summary screen displays information on the app version, ports, status, pods, deployments, statefulsets, catalog, update train, and name. The application summary screen also has dropdowns that list the active container images and application events. The **Refresh Events** button updates the list with the latest events.

![AppsSummaryScreen](/images/SCALE/22.12/AppsSummaryScreen.png "Apps Summary")

Click the <span class="iconify" data-icon="mdi:dots-vertical"></span> on the application widget to open the action options dropdown list. Options are:

* **Edit** opens the configuration form for the selected application.
* **Shell** opens the **[Choose pod](#choose-pod-window)** window before opening the **[Applications > Pod Shell](#pod-shell-screen)** screen.
* **Logs** opens the **[Choose Log](#choose-log-window)** window before opening the **[Applications > Pod Log](#pod-log-window)** screen.
* **Delete** opens a confirmation dialog.
{{< /expand >}}

### Choose Pod Shell Window
The **Choose Pod Shell** window lets you choose which pod or active container and shell commands to use when the **Applications > Pod Shell** screen displays.
{{< expand "Click Here for More Information" "v" >}}

![AppsChoosePodWindow](/images/SCALE/22.12/AppsChoosePodWindow.png "Choose Pod Window") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Pods** | Required. Select the pod installed from the dropdown list. |
| **Containers** | Required. Select the container from the dropdown list. |
| **Commands** | Enter the shell command. |
{{< /truetable >}}

Select **Choose** to open the **Applications > Pod Shell** screen. 
{{< /expand >}}

### Pod Shell Screen
The **Pod Shell** screen allows users to enter TrueNAS CLI commands to access information about their applications.
{{< expand "Click Here for More Information" "v" >}}

![AppsPodShellWindow](/images/SCALE/22.02/AppsPodShellWindow.png "Applications Pod Shell")

The following are example commands to access information on an active container. You can also use the **System Settings > Shell** to access the same information.

To view container namespaces: `k3s kubectl get namespaces`.
To view pods by namespace: `k3s kubectl get -n <NAMESPACE> pods`.
To access container shell: `k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash`.
To view details about all containers: `k3s kubectl get pods,svc,daemonsets,deployments,statefulset,sc,pvc,ns,job --all-namespaces -o wide`.
To get container status: `k3s kubectl describe -n <CONTAINER NAMESPACE> <POD-ID>`.
{{< /expand >}}

### Choose Log Window
The **Logs** option opens the **Choose Log** window.
{{< expand "Click Here for More Information" "v" >}}

![AppsChooseLogWindow](/images/SCALE/22.12/AppsChooseLogWindow.png "Choose Log Window") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Pods** | Select the pod from the dropdown list to open the shell screen with the log for this pod. |
| **Containers** | Select the containers from the dropdown list to include in the log shell screen. |
| **Tail Lines** | Enter the number of log file lines to include in the shell screen for the log file. |
{{< /truetable >}}
{{< /expand >}}

### Pod Log Window
The **Pod Log** shell screen displays the information selected in the **Choose Log** window. 
{{< expand "Click Here for More Information" "v" >}}

![ApplicationsPodLogsScreen](/images/SCALE/22.02/ApplicationsPodLogsScreen.png "Applications Pod Logs Shell") 

Use the **Set font size** slider to increase or decrease the font size displayed on the screen.
**Reconnect** re-establishes a connection with the application service.
**Download Logs** downloads the logs to your server.
{{< /expand >}}

### Delete Application

The **Delete** dialog for stopped applications includes two confirmation options, a **Confirm** option and a **Delete docker images used by the app** option.

![DeleteStoppedAppDialog](/images/SCALE/22.12/DeleteStoppedAppDialog.png "Delete Application")

**Delete docker images used by the app** deletes the docker image the app uses when you delete the app. If you do not delete the image, it remains on the **Manage Docker Images** list until you [delete it](#delete-image).

**Confirm** activates the **Delete** button.

## Available Applications
The **Available Applications** screen displays the widgets for all applications in the **Official** catalog.
{{< expand "Click Here for More Information" "v" >}}

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Available Applications")

The **Install** button on each application card opens the configuration wizard for that application.

Click on the application icon or name to open an ***appname* Application Summary** window that includes information on the **Catalog**, **Categories**, **Train**, **Status**, and **Versions** for that application.
{{< /expand >}}

## Manage Catalogs
The **Manage Catalog** screen displays the application catalogs installed on TrueNAS SCALE. The **Official** catalog contains all the applications listed on the **Available Applications** screen. 
{{< expand "Click Here for More Information" "v" >}}
The options at the top right of the screen include the **[Refresh All](#refresh-all)** and  **[Add Catalog](#add-catalog-screen)** options.

![ApplicationsManageCatalogsScreen](/images/SCALE/22.02/ApplicationsManageCatalogsScreen.png "Applications Manage Catalogs Screen") 

The <span class="material-icons">more_vert</span> to the right of each catalog displays the catalog options **[Edit](#edit-catalog-screen)**, **[Refresh](#refresh-catalog)**, **[Delete](#delete-catalog)** or **[Summary](#catalog-summary-window)**.
{{< /expand >}}
### Edit Catalog Screen
The **Edit Catalog** screen settings specify the name and train the UI should use to look up the catalog and retrieve applications for the catalog.
{{< expand "Click Here for More Information" "v" >}}
The **Official** catalog name is not editable, but you can change the train.

![ApplicationsEditCatalog](/images/SCALE/22.02/ApplicationsEditCatalog.png "Edit Catalog")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Catalog Name** | Enter a name TrueNAS should use to look up the catalog. |
| **Preferred Train** | Select the train(s) the UI should use to retrieve available applications for the catalog from the dropdown list. Options are **charts**, **test**, **enterprise**, and **community**. |
{{< /truetable >}}
{{< /expand >}}

### Refresh Catalog
Opens a **Refreshing** counter that shows the status of the refresh operation. You can minimize the counter while the process continues.

### Delete Catalog
Opens a confirmation dialog before deleting the catalog. The **Official** catalog **Delete** option is inactive. You cannot delete the official catalog.

### Catalog Summary Window
The **Summary** option for each catalog listed on **Manage Catalogs** opens the ***Name* Catalog Summary** window where *Name* is the name of the catalog. The summary displays the catalog status, application, and train, and allows you to select the train and status you want to include in the summary.
{{< expand "Click Here for More Information" "v" >}}
**[Add Catalog](#add-catalog)** opens the **Add Catalog** screen.

![AddCatalogScreen](/images/SCALE/22.02/AddCatalogScreen.png "Add Catalog")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Train** | Select the trains you want to include in the catalog summary information. Options are **All**, **charts**, **test**, **enterprise** or **community**. |
| **Status** | Select the statuses you want to include in the catalog summary information. Options are **All**, **Healthy**, or **Unhealthy**. This is useful to filter the summary to locate trains or applications with the **Unhealthy** status. |
{{< /truetable >}}
{{< /expand >}}

## Manage Docker Images
The **Manage Docker Images** button displays a list of Docker image IDs and tags on the system. The list shows **Update Available** for container images you can update.
{{< expand "Click Here for More Information" "v" >}}

![ApplicationsManageDockerImagesScreen](/images/SCALE/22.02/ApplicationsManageDockerImagesScreen.png "Applications Manage Docker Images")

Use the <span class="material-icons">more_vert</span> to display the options for each Docker image listed. Options are **Update Image** or **Delete**. **Update Image** is only available when the Docker image displays **Update Available**.
{{< /expand >}}

### Update Image
Select **Update** to open the **Choose a tag** dialog. Select the image tag and click **Choose**. 

![AppsUpdateDockerImageChooseATag](/images/SCALE/22.02/AppsUpdateDockerImageChooseATag.png "Update Docker Images Choose A Tag")

After updating the Docker image, the option becomes inactive until a new update becomes available.

### Delete Image
The **Delete** dialog for images includes a pre-selected radio button for the docker image you selected to delete, a **Confirm** option and a **Force delete** option.

![AppsManageDockerImageDelete](/images/SCALE/22.12/AppsManageDockerImageDelete.png "Delete Docker Image")

**Confirm** activates the **Delete** button.

**Force delete** adds the force flag to the delete-image operation. Select to avoid issues deleting an image. You can encounter problems if multiple regeistries reference the same Docker image.

For example, you can encounter issues deleting an image if the Docker hub registry and GitHub container registry reference it.

{{< taglist tag="scaleapps" limit="10" >}}
