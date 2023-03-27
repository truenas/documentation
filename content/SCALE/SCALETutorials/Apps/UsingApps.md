---
title: "Using Apps"
description: "This article provides information on deploying official apps in TrueNAS SCALE."
weight: 10
aliases:
 - /scale/scaleuireference/apps/usingapps/
 - /scale/apps/usingapps/
tags:
- scaleapps
- scaledocker
---

{{< toc >}}

Use **Applications** screens to deply both pre-built official containers and custom application containers in the SCALE web interface.

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Apps Catalog")

The first time you open the **Applications** screen, the UI asks you to choose a storage pool for applications.

![AppsSettingsChoosePool](/images/SCALE/22.02/AppsSettingsChoosePool.png "Choosing a Pool for Apps")

We recommend users keep the container use case in mind when choosing a pool. 
Select a pool that has enough space for all the application containers you intend to use.
TrueNAS creates an *ix-applications* dataset on the chosen pool and uses it to store all container-related data. This is for internal use only. 
Set up a new dataset before installing your applications if you want to store your application data in an location separated from other storage on your system. 
For example, create the datasets for Nextcloud application, and if installing Plex, create the dataset(s) for Plex data storage needs.

{{< hint warning >}}
Since TrueNAS considers shared host paths non-secure, apps that use shared host paths (such as those services like SMB are using) fail to deploy. 
Best practice is to create datasets for applications that do not share the same host path as an SMB or NFS share. 
If you want apps to deploy in a shared host path, either disable **Enable Host Path Safety Checks** in **Applications > Settings > Advanced Settings** or alter the path for shares and applications.
For example, if you want to group the share and application data under a common dataset such as *media*, where both use a path such as */tank/media/*, and you want to enable host path validation, this can result in the application not moving past the deployment stage. 
You can still group shares and applications under *media* but alter the path for shares and apps, such as */tank/media-shares* or */tank/media/shares/sharename* and */tank/media-apps* or */tank/media/apps/appname*. 
This differs enough to use host path validation and avoid issues that prevent application deployment. 
{{< /hint >}}

You can find additional options for configuring general network interfaces and IP addresses for application containers in **Apps > Settings > Advanced Settings**.

![AppsAdvancedSettingsKubernetesSettings](/images/SCALE/22.12/AppsAdvancedSettingsKubernetesSettings.png "Apps Advanced Settings")

{{< include file="/_includes/AppsVMsNoHTTPS.md" type="page" >}}

![SystemSettingsGUISettingsSCALE](/images/SCALE/22.12/SystemSettingsGUISettingsSCALE.png "General System Settings")

## Deploying Official Applications

Official applications are pre-configured and only require a name during deployment.

![AppAddPlexApplicationName](/images/SCALE/22.12/AppAddPlexApplicationName.png "Plex App Wizard Application Name")

A button to open the application web interface displays when the container is deployed and active.

![AppsInstalledPlexWidgetActive](/images/SCALE/22.12/AppsInstalledPlexWidgetActive.png "Plex App: Active")

You can adjust the container settings by editing a deployed official container.
Saving any changes redeploys the container.

{{< expand "Tutorial Video" "v" >}}

{{< embed-video name="docs-3795-install-official-app-plex" >}}

{{< /expand >}}

### Changing Official Application Networking

Official applications use the default system-level Kubernetes Node IP settings in **Apps > Settings > Advanced Settings**. 

You can change the Kubernetes Node IP to assign an external interface to your apps, separate from the web UI interface.

We recommend using the default Kubernetes Node IP (0.0.0.0) to ensure apps function properly.

## Deploying Custom Application Containers

To deploy a custom application container in the SCALE web interface, go to **Apps** and click **[Launch Docker Image]({{< relref "LaunchDockerImageScreens.md" >}})** to open the Docker image wizard screens and settings.

### Changing Custom Application Networking

Custom applications use the system-level Kubernetes Node IP settings by default. You can assign an external interface to custom apps by setting one on the **Networking** section of the **Launch Docker Image** form. 

Unless you need to run an application separately from the Web UI, we recommend using the default Kubernetes Node IP (0.0.0.0) to ensure apps function properly.

## Upgrading Apps

You can upgrade apps as they receive big-fixing updates or QOL changes. To upgrade an app to the latest version, click the <span class="iconify" data-icon="bi:dots-three-outline-vertical-fill"></span> in an app widget to see the list of app options, then select **<span class="iconify" data-icon="eva:diagonal-arrow-right-up-outline"></span> Upgrade**.

![UpgradeAppSingle](/images/SCALE/22.12/UpgradeAppSingle.png "Upgrade Single App")

To upgrade multiple apps, select the checkbox in the widget of each app you want to update, then click **Bulk Actions** and select **<span class="iconify" data-icon="ic:outline-update"></span> Upgrade**.

![UpgradeAppBulk](/images/SCALE/22.12/UpgradeAppBulk.png "Upgrade Bulk Apps")

## Deleting Apps

To delete an application, click **Stop** and wait for the status to change to stopped. 
Click the <span class="iconify" data-icon="bi:dots-three-outline-vertical-fill"></span> in an app widget to see the list of app options, then select **Delete**. 

![DeleteStoppedApp](/images/SCALE/22.12/DeleteStoppedApp.png "Delete App in Stopped State")

If you attempt to delete the application before it fully deploys, a dialog opens with a list of other applications on your system using the same resources. 

![AppsDeleteAppImagesNotToBeDeleted](/images/SCALE/22.12/AppsDeleteAppImagesNotToBeDeleted.png "Delete App in Deploying State")

Click **Confirm** and then **OK** to delete the application.

If you only select **Confirm** to delete the selected application and you do not select **Delete docker images used by the app** the docker image remains on the list of images on the **Manage Docker Images** screen. 
To remove the image, go to **Manage Docker Images**, click the <span class="iconify" data-icon="bi:dots-three-outline-vertical-fill"></span> and then **Delete**. 

![AppsManageDockerImageDelete](/images/SCALE/22.12/AppsManageDockerImageDelete.png "Delete Docker Image")

Click **Confirm** and **Force delete** then click **Delete** to remove the docker image from the system.


{{< taglist tag="scaleapps" limit="10" >}}
{{< taglist tag="scaledocker" limit="10" title="Related Docker Image Articles" >}}
