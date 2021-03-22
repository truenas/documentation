---
title: "Using Docker on TrueNAS SCALE"
geekdocCollapseSection: true
weight: 20
---


SCALE includes the ability to run Docker containers using Kubernetes.

{{< expand "What is Docker?" "v" >}}
Docker is an open platform for developing, shipping, and running applications. Docker enables the separation of applications from infrastructure through OS-level virtualization to deliver software in containers.
{{< /expand >}}

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes is a portable, extensible, open-source container-orchestration system for automating computer application deployment, scaling, and management with declarative configuration and automation.
{{< /expand >}}


To Set up a Docker Image, first determine if you wish the container to use its own dataset.  Create a dataset before hand if desired. When you are reacy to create a container, click **Launch Docker Image**.

Fill in the *Application Name* and *Image Repository* for the docker contained you'd like to set up.  This example shows installation of the [PiHole project[(https://hub.docker.com/r/pihole/pihole).

![Image And Policies](/images/SCALE/SCALEAppsPiHoleImageAndPolicies.png "Image And Policies")

Click **Next** to move to the *Container Settings* section. In this example, PiHole needs the timezone and password set.   Always refer to the dockerhub page for information on what the docker container requires.

![SCALE Apps Container Settings](/images/SCALE/SCALEAppsPiHoleContainerSettings.png "SCALE Apps Container Settings")

Clicking **Next** will open the Networking section. If the container needs special networking configuration it should be set here.  Ports are configured in the next section.  Once completed, click Next to move forward in the coniguration process.

The PiHole Docker Hub page lists a set of ports that will need to be set.  These values may need to be adjusted depending on the configuration of your system.  TrueNAS SCALE requires all Node Ports to be above 9000. 

![SCALE App Port Forwarding List](/images/SCALE/SCALEAppsPiHolePortForwardingList.png "SCALE App Port Forwarding List")

Click **Next** when all the ports are configured.

The Host Path volume will be set to a dataset and directory paths which were created before attempting to deploy the container. 

![SCALE App Host Path Volumes](/images/SCALE/SCALEAppsPiHoleHostPathVolumes.png "SCALE App Host Path Volumes")

Additional Volumes can be added to the container if needed.
When all the settings have been entered, verify the Application and Container Name and click **Submit**. 

![SCALE App Deploying](/images/TrueCommand/2.0/SCALEAppsPiHoleDeploying.png "SCALE App Deploying")

When the deployment has completed, click **Start** to launch the container.


