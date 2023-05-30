---
title: "Installing the Pi-Hole Application"
description: "Provides information on installing Pi-hole to support network-level advertisement and internet tracker blocking."
weight: 65
aliases: 
tags:
- scaleapps
- scalepihole
---


SCALE includes the ability to run Docker containers using Kubernetes.

{{< expand "What is Docker?" "v" >}}
Docker is an open platform for developing, shipping, and running applications. Docker enables the separation of applications from infrastructure through OS-level virtualization to deliver software in containers.
{{< /expand >}}

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes is a portable, extensible, open-source container-orchestration system for automating computer application deployment, scaling, and management with declarative configuration and automation.
{{< /expand >}}

Always read through the Docker Hub page for the container you are considering installing so that you know all of the settings that you need to configure.
To set up a Docker image, first determine if you want the container to use its own dataset. If yes, create a dataset for host volume paths before you click **Launch Docker Image**. 

## Installing Pi-hole Application

{{< hint type=note >}}
If you want to create a dataset for Pi-hole data storage, you must do this before beginning the Pi-hole application install.
{{< /hint >}}

When you are ready to create a container, click **Apps** to open the **Applications** screen, then click on **Available Applications**. 
Locate the **pihole** widget and click **Install** on the widget.

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Available Applications")

Fill in the **Application Name** and click **Version** to verify the default version is the only, and most current version. 

![AppPiHoleApplicationNameAndVersion](/images/SCALE/22.12/AppPiHoleApplicationNameAndVersion.png "Pi-Hole Application Name and Version")

Enter the password to use for the administrative user in **Admin password** in the **Container Environment Variables** section. The password entered can not be edited after you click **Save**. 
Adjust the **Configure timezone** setting if it does not match where your TrueNAS is located. 

To add the WEBPASSWORD environment variable, click **Add** for **Pihole Environment** to add a block of environment variable settings. 
Enter **WEBPASSWORD** in **Name**, then a secure password like the example the one used, *s3curep4$$word*. 

![AppPiHoleConfigurationSettings](/images/SCALE/22.12/AppPiHoleConfigurationSettings.png "SCALE Apps Configuration Settings")

Scroll down to the **Storage** settings. 
Select **Enable Custom Host Path for Pihole Configuration Volume** to add the **Host Path for Pihole Configuration Volume** field and dataset browse option. 
Click the arrow to the left of **<span class="material-icons">folder</span> /mnt** and at each dataset to expand the tree and browse to the dataset and directory paths you created before beginning the container deployment. 
Pi-hole uses volumes store your data between container upgrades. 

{{< hint type=warning >}}  
You need to create these directories in a dataset on SCALE using **System Settings > Shell** before you begin installing this container.
{{< /hint >}}

![AppPiHoleStorageSettings](/images/SCALE/22.12/AppPiHoleStorageSettings.png "PiHole Storage Settings")

Click **Add** to display setting options to add extra host path volumes to the container if you need them. 

Enter any **Networking** settings you want to use or customize. 
TrueNAS adds the port assignments Pi-hole requires in the **Web Port for pihole**, **DNS TCP Port for pihole**, and **DNS UDP Port for pihole** fields. TrueNAS SCALE requires setting all **Node Ports** above 9000. 
Select **Enable Host Network** to add host network settings.
Click **Add** for **DNS Options** to add a block of DNS settings if you want to configure DNS options.

![AppPiHoleNetworkingSettings](/images/SCALE/22.12/AppPiHoleNetworkingSettings.png "Pi-Hole Network and Port Forwarding")

Click **Add** for **DNS Options** if you want to configure DNS for your pod.
Select **Enable Pod resource limits** if you want to limit the CPU and memory for your Pi-hole application.

![AppPiHoleDNSAndResourceLimitsSettings](/images/SCALE/22.12/AppPiHoleDNSAndResourceLimitsSettings.png "PiHole DNS and Resource Limit Settings")

Click **Save**. 
TrueNAS SCALE deploys the container.
If correctly configured, the Pi-Hole widget displays on the **Installed Applications** screen.

When the deployment is completed the container becomes active. If the container does not automatically start, click **Start** on the widget.
Clicking on the App card reveals details on the app.

With Pi-hole as our example we navigate to the IP of our TrueNAS system with the port and directory address *:9080/admin/*.

![PiHoleRunning](/images/SCALE/AppsPiHoleRunning.png "PiHole Running")

{{< taglist tag="scaleapps" limit="10" title="Related Apps Articles" >}}
