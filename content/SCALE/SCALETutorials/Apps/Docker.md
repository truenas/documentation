---
title: "Using Docker Image"
description: "This article provides information on using the Docker image wizard to configure third-party applications in TrueNAS SCALE."
weight: 25
aliases: scale/scaleuireference/apps/docker/
tags:
 - scaleapps
 - scaledocker
 - scalepihole
---

{{< toc >}}

SCALE includes the ability to run Docker containers using Kubernetes.

{{< expand "What is Docker?" "v" >}}
Docker is an open platform for developing, shipping, and running applications. Docker enables the separation of applications from infrastructure through OS-level virtualization to deliver software in containers.
{{< /expand >}}

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes is a portable, extensible, open-source container-orchestration system for automating computer application deployment, scaling, and management with declarative configuration and automation.
{{< /expand >}}

Always read through the Docker Hub page for the container you are considering installing so that you know all of the settings that you need to configure.
To set up a Docker image, first determine if you want the container to use its own dataset. If yes, create a dataset for host volume paths before you click **Launch Docker Image**. 

## Adding Custom Applications

When you are ready to create a container, open the **APPS** page, select the **Available Applications** tab, and then click **Launch Docker Image**.

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Available Applications")

Fill in the **Application Name** and click **Next**. Add the github repository URL in **Image Repository** for the docker container are setting up. For example, to add Pi-Hole in **Launch Docker Image** wizard, enter **pihole/pihole** as the [PiHole project](https://hub.docker.com/r/pihole/pihole) image repository on the **Container Image** configuration screen.

![LaunchDockerImagePiholeContainerImage](/images/SCALE/22.02/LaunchDockerImagePiholeContainerImage.png "Pi-Hole Container Image")

Click **Next** to move to the **Container Environment Variables**. Not all applications use environment variables. Check the Docker Hub for details on the application you want to install to verify which variables are required for that particular application. 
For Pi-Hole, click **Add** then enter **TZ** for timezone, and then **America/NewYork** for the value. And click **Add** again to enter the second required variable **WEBPASSWORD** with a secure password like the exaple used, *s3curep4$$word*. 

![LaunchDockerImagePiHoleContainerEnvironmentVariables](/images/SCALE/22.02/LaunchDockerImagePiHoleContainerEnvironmentVariables.png "SCALE Apps Container Settings")

Click **Next** to advance to each of the **Launch Docker Image** configuration screens. Enter information required for the application you are adding on each screen that requires input.

When you reach **Networking**, if the container needs special networking configuration, enter it here. Click **Next** to open **Port Forwarding** to add ports. Click **Add** for each port you need to enter. 
The PiHole Docker Hub page lists a set of four ports and the node port you need to set. Adjust these values if your system configuration requires changes. TrueNAS SCALE requires setting all **Node Ports** above 9000. 

![LaunchDockerImagePiHolePortForwarding](/images/SCALE/22.02/LaunchDockerImagePiHolePortForwarding.png "Pi-Hole Port Forwarding List")

Click **Next** after configuring all the ports to open **Storage**. 
Click **Add** for each host path you need to enter for the application. Pi-Hole uses two blocks of host path settings. 

{{< hint warning >}}
If your application requires directory paths, specific dataset, or storage arrangements, configure these before you starting the **Launch Docker Image** wizard. 
You cannot interrupt the configuration wizard and save settings to leave and go create data storage or directories in the middle of the process. 
You need to create these directories in a dataset on SCALE using **System Settings > Shell** before you begin installing this container.
{{< /hint >}}

![LaunchDockerImagePiHoleStorageHostPaths](/images/SCALE/22.02/LaunchDockerImagePiHoleStorageHostPaths.png "Storage Pi-Hole Host Path Volumes")

You can add more volumes to the container later if they are needed. 

Click **Next** to move through the configuration screens, entering settings where required for your application. 

When you reach **Confirm Options**. Verify the the information on the screen and click **Save**. 

![LaunchDockerImagePiHoleConfirmOptions](/images/SCALE/22.02/LaunchDockerImagePiHoleConfirmOptions.png "PiHole Confirm Options")

TrueNAS SCALE deploys the container.
If correctly configured, the application widget displays on the **Installed Applications** screen.

When the deployment is completed the container becomes active. If the container does not autostart, click **Start** on the widget.

![PiHoleWidget](/images/SCALE/22.02/PiHoleWidget.png "SCALE App Active")

Clicking on the App card reveals details.

![SCALE App Status](/images/SCALE/AppsPiHoleStatus.png "SCALE App Status")

With PiHole as our example we navigate to the IP of our TrueNAS system with the port and directory address `:9080/admin/`.

![PiHoleRunning](/images/SCALE/AppsPiHoleRunning.png "PiHole Running")


###  Defining Container Settings
Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image.

You can also [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
Some Docker images can require additional environment variables.
Be sure to check the documentation for the image you're trying to deploy and add any required variables here.

### Defining Networking
To use the system IP address for the container, set *Host Networking*.
The container is not given a separate IP address and the container port number is appended to the end of the system IP address.
See the [Docker documentation](https://docs.docker.com/network/host/) for more details.

Users can create additional network interfaces for the container if needed.
Users can also give static IP addresses and routes to new interface.

By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/config/containers/container-networking/#dns-services) for more details.

### Defining Port Forwarding List
Choose the protocol and enter port numbers for both the container and node.
Multiple port forwards can be defined.
The node port number must be over *9000*.
Make sure no other containers or system services are using the same port number.

### Defining Host Path Volumes
Scale storage locations can be mounted inside the container.
To mount Scale storage, define the path to the system storage and the container internal path for the system storage location to appear.
You can also mount the storage as read-only to prevent the container from being used to change any stored data.
For more details, see the [Kubernetes hostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).

### Defining Other Volumes
Users can create additional Persistent Volumes (PVs) for storage within the container.
PVs consume space from the pool chosen for Application management.
You need to name each new dataset and define a path where that dataset appears inside the container.

To view created container datasets, go to **Storage** and expand the pool used for applications.
Expand `/ix-applications/releases/<ContainerName>/volumes/ix-volumes/`.

### Setting Up Persistent Volume Access

Users developing applications should be mindful that if an application uses Persistent Volume Claims (PVC), those datasets won't be mounted on the host, and therefore are not accessible within a file browser. This is upstream zfs-localpv behavior which is being used for managing PVC(s)

If you want to consume or have file browser access to data that is present on the host, set up your custom application to use host path volumes.

Alternatively, you can use the network to copy directories and files to and from the pod using `k3s kubectl` commands.

To copy from a pod in a specific container:
`k3s kubectl cp <file-spec-src> <file-spec-dest> -c <specific-container>`

To copy a local file to the remote pod:
`k3s kubectl cp /tmp/foo <some-namespace>/<some-pod>:/tmp/bar`

To copy a remote pod file locally:
`k3s kubectl cp <some-namespace>/<some-pod>:/tmp/foo /tmp/bar`

## Accessing the Shell in an Active Container

To access the shell in an active container, first identify the namespace and pod for the container.
In the Scale UI, go to **System Settings > Shell** to begin entering commands:

To view container namespaces: `k3s kubectl get namespaces`.
To view pods by namespace: `k3s kubectl get -n <NAMESPACE> pods`.
To access container shell: `k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash`.

{{< expand "Additional Container Commands" >}}
* View details about all containers: `k3s kubectl get pods,svc,daemonsets,deployments,statefulset,sc,pvc,ns,job --all-namespaces -o wide`.
* Get container status: `k3s kubectl describe -n <CONTAINER NAMESPACE> <POD-ID>`.
{{< /expand >}}

{{< taglist tag="scaledocker" limit="10" >}}
{{< taglist tag="scaleapps" limit="10" title="Related Apps Articles" >}}
