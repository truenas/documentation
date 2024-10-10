---
title: "Pi-Hole"
description: "Provides information on installing Pi-hole to support network-level advertisement and internet tracker blocking."
weight: 
aliases: 
 - /scale/scaletutorials/apps/installpiholeapp/
 - /scale/scaletutorials/apps/chartapps/installpiholeapp/
 - /scale/scaletutorials/apps/stableapps/installpiholeapp/
tags:
- apps
- dns
keywords:
- nas data storage
- software storage solutions
---

{{< include file="/static/includes/CommunityAppsLegacy.md" >}}

TrueNAS includes the ability to run Docker containers using Docker Compose.

{{< expand "What is Docker?" "v" >}}
Docker is an open platform for developing, shipping, and running applications. Docker enables the separation of applications from infrastructure through OS-level virtualization to deliver software in containers.
{{< /expand >}}

Always read through the Docker Hub page for the container you are considering installing so that you know all of the settings that you need to configure.
To set up a Docker image, first determine if you want the container to use its own dataset.
If yes, create a dataset for host volume paths before you click **Launch Docker Image**.

{{< include file="/static/includes/ProposeArticleChange.md" >}}

## Installing Pi-hole Application

{{< hint type=note >}}
If you want to create a dataset for Pi-hole data storage, you must do this before beginning the Pi-hole application install.
{{< /hint >}}

When you are ready to create a container, click **Apps** to open the **Applications** screen, then click on **Available Applications**.
Locate the **pihole** widget and click **Install** on the widget.

![AvailableApplicationsScreen](/images/SCALE/Apps/AvailableApplicationsScreen.png "Available Applications")

Fill in the **Application Name** and click **Version** to verify the default version is the only, and most current version.

![AppPiHoleApplicationNameAndVersion](/images/SCALE/Apps/AppPiHoleApplicationNameAndVersion.png "Pi-Hole Application Name and Version")

Enter the password to use for the administrative user in **Admin password** in the **Container Environment Variables** section. The password entered can not be edited after you click **Save**.
Adjust the **Configure timezone** setting if it does not match where your TrueNAS is located.

To add the WEBPASSWORD environment variable, click **Add** for **Pihole Environment** to add a block of environment variable settings.
Enter **WEBPASSWORD** in **Name**, then a secure password like the example the one used, *s3curep4$$word*.

![AppPiHoleConfigurationSettings](/images/SCALE/Apps/AppPiHoleConfigurationSettings.png "TrueNAS Apps Configuration Settings")

Scroll down to the **Storage** settings.
Select **Enable Custom Host Path for Pihole Configuration Volume** to add the **Host Path for Pihole Configuration Volume** field and dataset browse option.
Click the arrow to the left of **<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> /mnt** and at each dataset to expand the tree and browse to the dataset and directory paths you created before beginning the container deployment.
Pi-hole uses volumes store your data between container upgrades.

{{< hint type=warning >}}  
You need to create these directories in a dataset on TrueNAS before you begin installing this container.
Create directories in a dataset on TrueNAS, before you begin installing the container. 
{{< include file="/static/includes/MakeDirectory.md" >}}
{{< /hint >}}

![AppPiHoleStorageSettings](/images/SCALE/Apps/AppPiHoleStorageSettings.png "PiHole Storage Settings")

Click **Add** to display setting options to add extra host path volumes to the container if you need them.

Enter any **Networking** settings you want to use or customize.
TrueNAS adds the port assignments Pi-hole requires in the **Web Port for pihole**, **DNS TCP Port for pihole**, and **DNS UDP Port for pihole** fields. TrueNAS  requires setting all **Node Ports** above 9000.
Select **Enable Host Network** to add host network settings.
Click **Add** for **DNS Options** to add a block of DNS settings if you want to configure DNS options.

![AppPiHoleNetworkingSettings](/images/SCALE/Apps/AppPiHoleNetworkingSettings.png "Pi-Hole Network and Port Forwarding")

Click **Add** for **DNS Options** if you want to configure DNS for your pod.
Select **Enable Pod resource limits** if you want to limit the CPU and memory for your Pi-hole application.

![AppPiHoleDNSAndResourceLimitsSettings](/images/SCALE/Apps/AppPiHoleDNSAndResourceLimitsSettings.png "PiHole DNS and Resource Limit Settings")

Click **Save**.
TrueNAS deploys the container.
If correctly configured, the Pi-Hole widget displays on the **Installed Applications** screen.

When the deployment is completed the container becomes active. If the container does not automatically start, click **Start** on the widget.
Clicking on the App card reveals details on the app.

With Pi-hole as our example we navigate to the IP of our TrueNAS system with the port and directory address *:9080/admin/*.

![PiHoleRunning](/images/SCALE/Apps/AppsPiHoleRunning.png "PiHole Running")
