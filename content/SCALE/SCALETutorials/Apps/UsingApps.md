---
title: "Using Apps"
description: "This article provides information on deploying official apps in TrueNAS SCALE."
weight: 10
aliases:
 - /scale/scaleuireference/apps/usingapps/
 - /scale/apps/usingapps/

tags:
 - scaleapps
 - scaleplex
---

{{< toc >}}

Both pre-built official containers and custom application containers can be deployed using the **Applications** page in the SCALE web interface.

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Apps Catalog")

The UI asks to use a storage pool for applications.

![AppsSettingsChoosePool](/images/SCALE/22.02/AppsSettingsChoosePool.png "Choosing a Pool for Apps")

We recommend users keep the container use case in mind when choosing a pool.
Select a pool that has enough space for all the application containers you intend to use.
TrueNAS creates an *ix-applications* dataset on the chosen pool and uses it to store all container-related data.

You can find additional options for configuring general network interfaces and IP addresses for application containers in **Apps > Settings > Advanced Settings**.

![AppsAdvancedSettingsKubernetesSettings](/images/SCALE/22.02/AppsAdvancedSettingsKubernetesSettings.png "Apps Advanced Settings")

## Official Applications

Official containers are pre-configured to only require a name during deployment.

![AppPlexApplicationWizard](/images/SCALE/22.02/AppPlexApplicationWizard.png "Plex App Wizard Application Name")

A button to open the application web interface displays when the container is deployed and active.

![InstalledApplicationsWithPlexApp](/images/SCALE/22.02/InstalledApplicationsWithPlexApp.png "Plex App: Active")

Users can adjust the container settings by editing a deployed official container.
Saving any changes redeploys the container.

{{< embed-video name="docs-3795-install-official-app-plex" >}}

## Custom Applications

To deploy a custom application container in the Scale web interface, go to **Apps** and click **[Launch Docker Image]({{< relref "LaunchDockerImageScreens.md" >}})** for more on the Docker image wizard screens and settings.

## Upgrading Apps

You may want to upgrade apps as they receive big-fixing updates or QOL changes. To upgrade an app to the latest version, click the <span class="iconify" data-icon="bi:dots-three-outline-vertical-fill"></span> in an app widget to see the list of app options, then select **<span class="iconify" data-icon="eva:diagonal-arrow-right-up-outline"></span> Upgrade**.

![UpgradeAppSingle](/images/SCALE/22.12/UpgradeAppSingle.png "Upgrade Single App")

To upgrade multiple apps, click the checkbox in the widget of each app you want to update, then click **Bulk Actions** and select **<span class="iconify" data-icon="ic:outline-update"></span> Upgrade**.

![UpgradeAppBulk](/images/SCALE/22.12/UpgradeAppBulk.png "Upgrade Bulk Apps")

{{< taglist tag="scaleapps" limit="10" >}}
