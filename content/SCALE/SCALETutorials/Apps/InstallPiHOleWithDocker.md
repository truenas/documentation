---
title: "Adding Pi-Hole Using Docker Image"
description: "This article provides information on using the Docker image wizard to configure third-party applications like Pi-Hole in TrueNAS SCALE."
weight: 45
aliases: 
tags:
 - scaleapps
 - scaledocker
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

When you are ready to create a container, open the **APPS** page and click **Launch Docker Image**.

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Available Applications")

Fill in the **Application Name** and click **Next**. Add the github repository URL in **Image Repository** for the docker container are setting up. For the [PiHole project](https://hub.docker.com/r/pihole/pihole) enter **pihole/pihole**.

![LaunchDockerImagePiholeContainerImage](/images/SCALE/22.02/LaunchDockerImagePiholeContainerImage.png "Pi-Hole Container Image")

Click **Next** to move to the **Container Environment Variables**. 
For Pi-Hole, click **Add** then enter **TZ** for timezone, and then **America/NewYork** for the value. 
Click **Add** again and enter **WEBPASSWORD** and then a secure password like the example used, *s3curep4$$word*. 
Always refer to the docker hub page for information on what the docker container requires.

![LaunchDockerImagePiHoleContainerEnvironmentVariables](/images/SCALE/22.02/LaunchDockerImagePiHoleContainerEnvironmentVariables.png "SCALE Apps Container Settings")

Click **Next** to open **Networking**. If the container needs special networking configuration, enter it here. Click **Next** to open **Port Forwarding** to add the Pi-Hole ports.

The PiHole Docker Hub page lists a set of four ports and the node port you need to set. Adjust these values if your system configuration requires changes. TrueNAS SCALE requires setting all **Node Ports** above 9000. 

![LaunchDockerImagePiHolePortForwarding](/images/SCALE/22.02/LaunchDockerImagePiHolePortForwarding.png "Pi-Hole Port Forwarding List")

Click **Next** after configuring all the ports to open **Storage**.

Click **Add** twice to add two blocks of host path settings. Browse to the dataset and directory paths you created before beginning the container deployment. 
PiHole uses volumes store your data between container upgrades. 

{{< hint warning>}} 
You need to create these directories in a dataset on SCALE using **System Settings > Shell** before you begin installing this container.
{{< /hint >}}

![LaunchDockerImagePiHoleStorageHostPaths](/images/SCALE/22.02/LaunchDockerImagePiHoleStorageHostPaths.png "Storage Pi-Hole Host Path Volumes")

You can add more volumes to the container if needed. 
When all the settings are entered, click **Next** until you reach **Confirm Options**. Verify the the information on the screen and click **Save**. 

![LaunchDockerImagePiHoleConfirmOptions](/images/SCALE/22.02/LaunchDockerImagePiHoleConfirmOptions.png "PiHole Confirm Options")

TrueNAS SCALE deploys the container.
If correctly configured, the Pi-Hole widget displays on the **Installed Applications** screen.

When the deployment is completed the container becomes active. If the container does not autostart, click **Start** on the widget.

![PiHoleWidget](/images/SCALE/22.02/PiHoleWidget.png "SCALE App Active")

Clicking on the App card reveals details.

![SCALE App Status](/images/SCALE/AppsPiHoleStatus.png "SCALE App Status")

With PiHole as our example we navigate to the IP of our TrueNAS system with the port and directory address `:9080/admin/`.

![PiHoleRunning](/images/SCALE/AppsPiHoleRunning.png "PiHole Running")

{{< taglist tag="scaledocker" limit="10" >}}
{{< taglist tag="scaleapps" limit="10" title="Related Apps Articles" >}}
