---
title: "Using Docker on TrueNAS SCALE"
geekdocCollapseSection: true
weight: 25
---


SCALE includes the ability to run Docker containers using Kubernetes.

{{< expand "What is Docker?" "v" >}}
Docker is an open platform for developing, shipping, and running applications. Docker enables the separation of applications from infrastructure through OS-level virtualization to deliver software in containers.
{{< /expand >}}

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes is a portable, extensible, open-source container-orchestration system for automating computer application deployment, scaling, and management with declarative configuration and automation.
{{< /expand >}}


Always read through the Docker Hub page for the container you are considering installing so that you know all of the settings that need to be configured.
To Set up a Docker Image, first determine if you wish the container to use its own dataset.  Create a dataset for before hand if desired for host volume paths. 


When you are ready to create a container, open the **APPS** page and click **Launch Docker Image**.


![AppsCatalog](/images/SCALE/AppsCatalog.png "Apps Catalog")


Fill in the *Application Name* and *Image Repository* for the docker container you'd like to set up.  This example shows installation of the [PiHole project](https://hub.docker.com/r/pihole/pihole).

![Image And Policies](/images/SCALE/SCALEAppsPiHoleImageAndPolicies.png "Image And Policies")

Click **Next** to move to the *Container Settings* section. In this example, PiHole needs the timezone and password set.   Always refer to the dockerhub page for information on what the docker container requires.

![SCALE Apps Container Settings](/images/SCALE/SCALEAppsPiHoleContainerSettings.png "SCALE Apps Container Settings")

Clicking **Next** will open the Networking section. If the container needs special networking configuration it should be set here.  Ports are configured in the next section.  Once completed, click Next to move forward in the configuration process.

The PiHole Docker Hub page lists a set of ports that will need to be set.  These values may need to be adjusted depending on the configuration of your system.  TrueNAS SCALE requires all Node Ports to be above 9000. 

![SCALE App Port Forwarding List](/images/SCALE/SCALEAppsPiHolePortForwardingList.png "SCALE App Port Forwarding List")

Click **Next** when all the ports are configured.

The Host Path volume will be set to a dataset and directory paths which were created before attempting to deploy the container. PiHole uses volumes store your data between container upgrades.  You will need to create these directories in a dataset on SCALE prior to installing this container.

![SCALE App Host Path Volumes](/images/SCALE/SCALEAppsPiHoleHostPathVolumes.png "SCALE App Host Path Volumes")

Additional Volumes can be added to the container if needed.
When all the settings have been entered, verify the Application and Container Name and click **Submit**. 

![SCALEAppsPiHoleConfirmOptions](/images/SCALE/SCALEAppsPiHoleConfirmOptions.png "SCALE Apps PiHole Confirm Options")

TrueNAS SCALE will deploy the container.

![SCALE App Deploying](/images/SCALE/SCALEAppsPiHoleDeploying.png "SCALE App Deploying")

When the deployment is completed the container will become active.  If the container does not autostart, click the **START** button.

![SCALE App Active](/images/SCALE/AppsPiHoleActive.png "SCALE App Active")

Clicking on the App card will reveal details.

![SCALE App Status](/images/SCALE/AppsPiHoleStatus.png "SCALE App Status")

With PiHole as our example we navigate to the IP of our TrueNAS system with the port and directory address `:9080/admin/`.

![PiHoleRunning](/images/SCALE/AppsPiHoleRunning.png "PiHole Running")


