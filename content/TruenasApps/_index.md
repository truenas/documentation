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
 - /images/SCALE/Apps/AppsAddCatalogScreen.png
 - /scale/scaleuireference/apps/usingcatalogs/
 - /scale/apps/usingcatalogs/
 - /scale/scaletutorials/apps/usingcatalogs/
 - /scale/scaletutorials/apps/
 - /truenasapps/usingcatalogs/
 - /truenasapps/usingtrains/
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

{{< include file="/static/includes/apps/AppsIntro.md" >}}

This article covers how to set up the TrueNAS Apps service, configure global settings, and other general information.
For details on discovering, installing, and managing applications, see [Managing Apps]({{< relref "ManagingApps.md" >}}) and individual app tutorials.

{{< include file="/static/includes/ProposeArticleChange.md" >}}

## Setting Up the Apps Service

You must choose a pool before you can install an application.
See [Choosing the Apps Pool](#choosing-the-apps-pool) below for more information about apps pool selection.

As of 24.10, TrueNAS apps use Docker containers and Docker Compose for deployment.
Docker is an open-source software that manages images and container deployments.

The default system-level settings are found in **Apps > Settings**.

For more information on screens and screen functions, refer to the UI Reference article on [Apps Screens]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}).

Use the **Configuration** dropdown to access the **Choose Pool**, **Unset Pool**, **Manage Container Images**, and **Settings** options.

### Choosing the Apps Pool

You are prompted to select the pool for apps the first time you click on **Apps**.
You can exit out of this if you are not ready to deploy apps or do not have a pool configured for apps to use for storage.
You must set the pool before you can add any application.

Select the pool and click **Save**.
If you close the dialog to set the pool later, click **Configuration > Choose Pool** to set the pool.

{{< trueimage src="/images/SCALE/Apps/AppsSettingsChoosePool.png" alt="Choosing a Pool for Apps" id="Choosing a Pool for Apps" >}}

{{< include file="/static/includes/apps/AppsPool.md" >}}

#### Unsetting the Apps Pool

To select a different pool for apps to use, click **Configuration > Unset Pool**. This turns off the apps service until you choose another pool for apps to use.

### Managing Container Images

{{< include file="/static/includes/Apps/AppsManageImages.md" >}}

### Signing In to a Docker Registry

To sign in to a Docker registry, click **Configuration > Sign-in to a Docker registry** to go to the **Docker Registries** screen.

{{< trueimage src="/images/SCALE/Apps/DockerRegistriesScreen.png" alt="Docker Registries Screen" id="Docker Registries Screen" >}}

Signing in to a registry, such as Docker Hub, is not required but allows you to avoid rate limiting issues or connect to a private registry.

Click **Add Registry** to open the **Create Docker Registry** panel.

{{< trueimage src="/images/SCALE/Apps/CreateDockerRegistry.png" alt="Create Docker Registry - Docker Hub" id="Create Docker Registry - Docker Hub" >}}

Use the **URI** dropdown to select the Uniform Resource Identifier (URI) type for the registry.
Options are **Docker Hub** or **Other Registry**.
The URI dropdown is hidden when a Docker Hub registry record is already configured.

To sign in to Docker Hub, enter the user name and password of an existing Docker Hub account.

To sign in to another registry, select **Other Registry** from the dropdown or click **Add Registry** again after signing in to Docker Hub.

{{< trueimage src="/images/SCALE/Apps/CreateDockerRegistryOther.png" alt="Create Docker Registry - Other Registry" id="Create Docker Registry - Other Registry" >}}

Enter a valid Uniform Resource Identifier (URI) for the registry, for example *https://index.docker.io/v1/*.
Then enter a display name for the registry record in TrueNAS.

Enter the user name and password of an existing account on the registry.

Click **Save** to sign in and create the registry record.

## Configuring Global Settings

Click **Configuration > Settings** to open the **Settings** screen, which contains options for setting app trains, configuring app networking, installing NVIDIA drivers (if compatible hardware is present), and allowing TrueNAS to monitor for Docker image updates.

{{< trueimage src="/images/SCALE/Apps/AppsSettingScreen.png" alt="Apps Settings Screen" id="Apps Settings Screen" >}}

### Changing App Trains

TrueNAS applications are available in three catalogs (trains):

* **stable** - Default train of official apps, vetted by the TrueNAS team, chosen because of the features and functionality of the app, and how they integrate with TrueNAS.
* **enterprise** - Default train of apps, simplified and validated for Enterprise users for TrueNAS Enterprise-licensed systems.
* **community** - Apps proposed and maintained by the community

The default TrueNAS **Stable** catalog populates the **Discover** apps screen with apps.

Some apps proposed by community members might be adopted as official **stable** train apps.
The TrueNAS team maintains official apps for non-Enterprise and community users.

Click **Settings** on the **Configuration** dropdown menu to open the **Settings** screen, then select the desired train(s).
To show only the one train of apps, for example, the **enterprise** train, after selecting **enterprise** deselect the **stable** checkbox and click **Save**.

Some applications deploy as the **root** user for initial configuration before operating as a non-root user.
Keep these general best practices in mind when using applications with TrueNAS.

<!-- 
TrueNAS has a pre-built official catalog of available TrueNAS-approved applications.

Users can configure and add catalog trains if they choose.
The default train is **stable** which shows the apps found in the charts repository. Other available trains are **enterprise** and **community**.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the TRUENAS catalog.
{{< /hint >}}

## Managing the Application Catalog
Users can manage the catalog by changing the trains included in it.
To add or remove a train, from the **Installed** application screen, click **Configuration** then on **Settings** on the dropdown menu to open the **Settings** screen.
You can also click **Manage Installed Apps** at the top right of the **Discover** screen to open the **Installed** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

Users can change the catalog trains and show apps in those trains on the **Settings** screen.
After making a change, go to the **Discover** screen and click on **Refresh Catalog** to pull the catalog from the repository and refresh it in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsTrainSettingsScreen.png" alt="Apps Train Settings Screen" id="Apps Train Settings Screen" >}}

To remove a train from the catalog, select the checkbox for the train on the **Settings** screen to clear the checkbox, then click **Save**.
You must have one train selected.
 
## Adding the Enterprise Train

{{< include file="/static/includes/apps/AddEnterpriseTrain.md" >}}

-->

### Apps Network Settings

Go to **Apps > Installed**, click **Configuration**, and select **Settings**.

To add another range of IP addresses, click **Add** to the right of **Address Pools**, then select a range from the dropdown list of options, and enter the desired value in **Size**.

**Base** shows the default IP address and subnet, and **Size** shows the network size of each docker network that is cut off from the base subnet.

{{< hint type="info" title="Apps Networking Troubleshooting Tip!" >}}
This setting replaces the **Kubernetes Settings** option for **Bind Network** in 24.04 and earlier.
Use to resolve issues where apps experience issues where TrueNAS device is not reachable from some networks.
Select the network option, or add additional options to resolve the network connection issues.
{{< /hint >}}

{{< include file="/static/includes/apps/AppsVMsNoHTTPS.md" >}}

### App Directory Services

{{< include file="/static/includes/apps/AppsDirectoryService.md" >}}

### Installing NVIDIA Drivers

Beginning in TrueNAS 24.10, NVIDIA drivers are no longer automatically installed. Users must manually install drivers from the TrueNAS UI.

If running TrueNAS 24.10 or higher:
1. Go to **Apps > Installed** and click on the **Configuration**.

2. Click on **Settings** to open the **Settings** configuration screen.

3. Select **Install NVIDIA Drivers**, which is available to users with compatible GPUs.

4. Select **Install NVIDIA Drivers**, and click **Save.**

### Monitoring for Image Updates

Select **Check for docker image updates** (selected by default) to enable TrueNAS to periodically check for Docker image updates.
This applies to all Docker images present on the system for either catalog or custom applications.
Disable to prevent TrueNAS from monitoring for upstream image updates.

## Understanding App Storage Volumes

The **ix-apps** dataset is the base-level storage volume for app data.
Additionally, configuration options for individual apps include one or more of the following storage types: ixVolume datasets, host path datasets, SMB share volumes, and Tmpfs.

{{< include file="/static/includes/apps/AppsDatasets.md" >}}

<div class="noprint">

## Apps Contents

{{< children depth="1" description="true" >}}

</div>
