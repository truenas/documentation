---
title: "Applications Screens"
description: "This article provide information on application screens and settings in SCALE."
weight: 10
aliases:
tags:
 - scaleapps
---

{{< toc >}}


The application screen displays with **Installed Applications** displayed by default. 

The first time time you select **Apps** on the main feature navigation panel, the **Applications** screen displays the **Choose a pool for Apps** dialog. 
Select a pool from the dropdown list and then click **Choose** to set the selected pool as the one applications use for data storage.

## Applications Screen Options

The options at the top right of the **Applications** screen change with the screen tab selected.

![AppsScreenHeaderSCALE](/images/SCALE/22.02/AppsScreenHeaderSCALE.png "Applications Options")

### Bulk Actions

The **Bulk Action** option that displays at the top right of the **Installed Applications** screen allows you to select more than one, or all  installed apps on your system. After selecting the apps, use the other action buttons to either **Start**, **stop** or **Delete** the selected apps.

**Select All** places a checkmark in the top left corner of the widget for each installed application. Toggles to **Unselect All**.
**Start** starts all selected apps, and displays s **Success** dialog for each app after it starts without issue.
**Stop** stops all selected apps and displays a **Success** dialog for each app after it stops without issue.

### Settings 
**Settings** displays at the top right of all four **Applications** screens, but they are only functional when on the **Available Applications** screen. Setting options are:

**Choose Pool** opens the **[Choose a pool](#choose-pool-window)** window.
**Advanced Settings** opens the **[Kubernetes Settings](#kubernetes-settings-screen)** configuration screen.
**Unset Pool** opens a dialog confirming the pool is unset.

#### Choose Pool Window
Selecting **Choose Pool** on the **Settings** list opens a different **Choose a pool for Apps** window than the one that first displays before you add your first application.
Use the **Settings > Choose Pool** option to change the pool applications use for storage.

![AppsSettingsChoosePool](/images/SCALE/22.02/AppsSettingsChoosePool.png "Apps Choose Pool Window")

**Migrate applications to the new pool** starts the process of moving your application data from the existing pool to the new pool specified after you click **Choose**. 
Select **Migrate applications to the new pool** if you change your applications pool and want to migrate data from the existing pool to the new pool.

#### Kubernetes Settings Screen
The **Advanced Settings** option opens the **Kubernetes Settings** configuration screen.
{{< expand "Click Here for More Information" "v" >}}

![AppsAdvancedSettingsKubernetesSettings](/images/SCALE/22.02/AppsAdvancedSettingsKubernetesSettings.png "Advanced Settings Kubernetes Settings")

| Setting | Description |
|---------|-------------|
| **Node IP** | Select the IP address for the node from the dropdown list. |
| **Route v4 Interface** | Select the network interface from the dropdown list. |
| **Route v4 Gateway** | Enter the IP address for the route v4 gateway. |
| **Enable Container Image Updates** | Select to enable updates of the container image. |
| **Enable GPU support** | Select to enable GPU support. |
| **Enable Integrated Loadbalancer** | Select to enable the integrated loadbalancer. The default uses servicelb but if disabled, allows using metallb and allows users to speicfy any IP from the local network.  |

**Settings Requiring Re-Initializtion**

![AppsAdvancedSettingsKubernetesSettingsReInitialization](/images/SCALE/22.02/AppsAdvancedSettingsKubernetesSettingsReInitialization.png "Advanced Settings Kubernetes Settings 2")

| Setting | Description |
|---------|-------------|
| **Cluster CIDR** | Required. Enter the IP address and CIDR number for the Kubernetes cluster. |
| **Service CIDR** | Required. Enter the IP address and CIDR number for the Kubernetes service. |
| **Cluster DNS IP** | Required. Enter the IP address for the cluster DNS. |
{{< /expand >}}

#### Unset Pool
The **Unset Pool** option on the **Settings** list displays a confirmation dialog. Click **UNSET** to unset the pool. When complete a **Success** dialog displays.

### Refresh All 

Opens a **Refreshing** counter with status of the refresh options. When complete, the **Task Manager** displays with the status of each app refresh operation.

### Add Catalog
**Add Catalog** at the top of the **Manage Catalogs** screen opens a warning dialog before it opens the **Add Catalog** screen.
{{< expand "Click Here for More Information" "v" >}}

![AddCatalogWarningSCALE](/images/SCALE/22.02/AddCatalogWarningSCALE.png "Add Catalog Warning")

Click **CONTINUE** to open the **Add Catalog** screen.

![ManageCatalogsAddCatalogScreen](/images/SCALE/22.02/ManageCatalogsAddCatalogScreen.png "Add Catalog")

| Field | Description | 
|---------|-------|
| **Catalog Name** | enter the name the TrueNAS uses to look up the catalog. For example, *truecharts*. |
| **Force Create** | Select to add the catalog to the system even if some trains are unhealthy. |
| **Repository** |  Enter the valid git repository URL. For example,  *https://github.com/truecharts/catalog*. |
| **Preferred Trains** | The trains TrueNAS uses to retrieve available applications for the catalog. Default is **stable** (and optionally: **incubator**). |
| **Branch** | Specify the git repository branch TrueNAS should use for the catalog. Default is **main**. |
{{< /expand >}}

### Pull Image
The **Pull Image** option at the top right of the **Manage Docker Images** screen opens the **Pull Image** screen.
{{< expand "Click Here for More Information" "v" >}}

![AppsManageDockerImagesPullImage](/images/SCALE/22.02/AppsManageDockerImagesPullImage.png "Pull Image")

| Setting | Description |
|---------|-------------|
| **Image Name** | Enter the name of the image to pull. Format for the name is `registry/repo/image`. |
| **Image Tag** | Enter the tag of the image. For example, *latest*. |

#### Docker Registry Authentication Settings
These settings are optional, and only needed for private images.

| Setting | Description |
|---------|-------------|
| **Username** | Enter the input user name. |
| **Password** | Enter the input user password. |
{{< /expand >}}

### Launch Docker Image

**Launch Docker Image** opens the Docker Image wizard where you can configure third-party applications not listed on the **Available Applications** screen. 
These docker image options are derived from the [Kubernetes container options](https://kubernetes.io/docs/setup/). 
See [Launch Docker Image Screens]({{< relref "LaunchDockerImageScreens.md" >}}) for more information.

## Installed Applications Screen
The **No Applications Installed** screen displays before you install your first application. **View Catalog** opens the **Available Applications** screen.
{{< expand "Click Here for More Information" "v" >}}

![AppsInstalledApplicationsViewCatalog](/images/SCALE/22.02/AppsInstalledApplicationsViewCatalog.png "Installed Applications View Catalog")

After installing your application(s), this screen displays the application(s).

![InstalledApplicationsWithApps](/images/SCALE/22.02/InstalledApplicationsWithApps.png "Installed Applications")

Click the <span class="material-icons">edit</span> on the application widget to open the action options dropdown list. Options are:

* **Edit** opens the configuration form for the selected application.
* **Shell** opens the **[Choose pod](#choose-pod-window)** window before opening the **[Applications > Pod Shell](#pod-shell-screen)** screen.
* **Logs** opens the **[Choose Log](#choose-log-window)** window before opening the **[Applications > Pod Log](#pod-log-window)** screen.
* **Delete** opens a confirmation dialog.
{{< /expand >}}
### Choose Pod Window
The **Choose Pod** window specifies which pod or active container, and the shell commands you want to use when the **Applications > Pod Shell** screen displays.
{{< expand "Click Here for More Information" "v" >}}

![AppChoosePodWindow](/images/SCALE/22.02/AppChoosePodWindow.png "Choose Pod Window") 

| Setting | Description |
|---------|-------------|
| **Pods** | Required. Select the pod installed from the dropdown list. |
| **Containers** | Required. Select the container from the dropdown list. |
| **Commands** | Enter the shell command. |

Select **Choose** to open the **Applications > Pod Shell** screen. 
{{< /expand >}}

### Pod Shell Screen
The **Pod Shell** screen allows users to enter TrueNAS CLI commands to access information about their applications.
{{< expand "Click Here for More Information" "v" >}}

![AppsPodShellWindow](/images/SCALE/22.02/AppsPodShellWindow.png "Applications Pod Shell")

The following are examples of commands you can enter to access information on an active container. You can also use the **System Settings > Shell** to access the same information.

To view container namespaces: `k3s kubectl get namespaces`.
To view pods by namespace: `k3s kubectl get -n <NAMESPACE> pods`.
To access container shell: `k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash`.
To view details about all containers: `k3s kubectl get pods,svc,daemonsets,deployments,statefulset,sc,pvc,ns,job --all-namespaces -o wide`.
To get container status: `k3s kubectl describe -n <CONTAINER NAMESPACE> <POD-ID>`.
{{< /expand >}}

### Choose Log Window
The **Logs** options opens the **Choose Log** window.
{{< expand "Click Here for More Information" "v" >}}

![AppsChooseLogWindow](/images/SCALE/22.02/AppsChooseLogWindow.png "Choose Log Window") 

| Setting | Description |
|---------|-------------|
| **Pods** | Select the pod from the dropdown list to open the shell screen with the log for this pod. |
| **Containers** | Select the containers from the dropdown list to include in the log shell screen. |
| **Tail Lines** | Enter the number of log file lines to include in the shell screen for the log file. |
{{< /expand >}}

### Pod Log Window
The **Pod Log** shell screen displays with the information selected in the **Choose Log** window. 
{{< expand "Click Here for More Information" "v" >}}

![ApplicationsPodLogsScreen](/images/SCALE/22.02/ApplicationsPodLogsScreen.png "Applications Pod Logs Shell") 

Use the **Set font size** slider to increase or decrease the size of the font displayed on the screen.
**Reconnect** re-establishes a connection with the application service.
**Download Logs** downloads the logs to your server.
{{< /expand >}}

## Available Applications
The **Available Applications** screen displays the widgets for all applications in the **Official** catalog.
{{< expand "Click Here for More Information" "v" >}}

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Available Applications")

The **Install** button on each application card opens the configuration wizard for that application.

Click on the application icon or name to open an ***appname* Application Summary** window that includes information on the **Catalog**, **Categories**, **Train**, **Status** and **Versions** for that application.
{{< /expand >}}

## Manage Catalogs
The **Manage Catalog** screen displays the list of application catalogs installed on TrueNAS SCALE. The **Official** catalog contains all the applications listed on the **Available Applications** screen. 
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

| Setting | Description |
|---------|-------------|
| **Catalog Name** | Enter a name TrueNAS should use to look up the catalog. |
| **Preferred Train** | Select the train(s) the UI should use to retrieve available applications for the catalog from the dropdown list. Options are **charts**, **test**, **enterprise**, and **community**. |
{{< /expand >}}

### Refresh Catalog
Opens a **Refreshing** counter that shows the status of the refresh operation. You can minimze the counter while the process continues.

### Delete Catalog
Opens a confirmation dialog before deleting the catalog. The **Official** catalog **Delete** option is inactive. You cannot delete the official catalog.

### Catalog Summary Window
The **Summary** option for each catalog listed on **Manage Catalogs** opens the ***Name* Catalog Summary** window where *Name* is the name of the catalog. The summary displays the catalog status, application and train, and allows you to select the train and status you want to include in the summary.
{{< expand "Click Here for More Information" "v" >}}
**[Add Catalog](#add-catalog)** opens the **Add Catalog** screen.

![AddCatalogScreen](/images/SCALE/22.02/AddCatalogScreen.png "Add Catalog")

| Setting | Description |
|---------|-------------|
| **Train** | Select the trains you want to include in the catalog summary information. Options are **All**, **charts**, **test**, **enterprise** or **community**. |
| **Status** | Select the statuses you want to include in the catalog summary information. Options are **All**, **Healthy**, or **Unhealthy**. This is useful to filter the summary to locate trains or applications with the **Unhealthy** status. |
{{< /expand >}}

## Manage Docker Images
The **Manage Docker Images** displays a list of Docker image IDs and tags on the system. The list displays **Update Available** for container images you can update.
{{< expand "Click Here for More Information" "v" >}}

![ApplicationsManageDockerImagesScreen](/images/SCALE/22.02/ApplicationsManageDockerImagesScreen.png "Applications Manage Docker Images")

Use the <span class="material-icons">more_vert</span> to display the options for each Docker image listed. Options are **Update Image** or **Delete**. **Update Image** is only available when the Docker image displays **Update Available**.

### Update Image 
Select **Update** to open the **Choose a tag** dialog. Select the image tag and click **Choose**. 

![AppsUpdateDockerImageChooseATag](/images/SCALE/22.02/AppsUpdateDockerImageChooseATag.png "Update Docker Images Choose A Tag")

After updating the Docker image, the option becomes inactive until a new update becomes available.

{{< taglist tag="scaleapps" limit="10" >}}
