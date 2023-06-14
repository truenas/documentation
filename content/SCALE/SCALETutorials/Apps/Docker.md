---
title: "Using Launch Docker Image"
description: "Provides information on using Launch Docker Image to configure custom or third-party applications in TrueNAS SCALE."
weight: 10
aliases: scale/scaleuireference/apps/docker/
tags:
- scaleapps
- scaledocker
- scaleicharts
---

{{< toc >}}

SCALE includes the ability to run Docker containers using Kubernetes.

{{< expand "What is Docker?" "v" >}}
Docker is an open-source platform for developing, shipping, and running applications. Docker enables the separation of applications from infrastructure through OS-level virtualization to deliver software in containers.
{{< /expand >}}

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes (K8s) is an open-source system for automating deployment, scaling, and managing containerized applications.
{{< /expand >}}

Always read through the Docker Hub page for the container you are considering installing so that you know all of the settings that you need to configure.
To set up a Docker image, first, determine if you want the container to use its dataset. If yes, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) for host volume paths before you click **Launch Docker Image**. 

## Adding Custom Applications

{{< hint type=important >}}
If your application requires directory paths, specific datasets, or other storage arrangements, configure these before you start the **Launch Docker Image** wizard. 

You cannot exit the configuration wizard and save settings to create data storage or directories in the middle of the process. If you are unsure about any configuration settings, review the [Launch Docker Image UI reference article]({{< relref "LaunchDockerImageScreens.md" >}}) before creating a Docker image.

To create directories in a dataset on SCALE, use **System Settings > Shell** before you begin installing the container.
{{< /hint >}}

When you are ready to create a container, go to the **APPS** screen, select the **Available Applications** tab, and then click **Launch Docker Image**.

![AvailableApplicationsScreen](/images/SCALE/22.02/AvailableApplicationsScreen.png "Available Applications")

1. Fill in the **Application Name** and the current version information in **Version**. 
   Add the GitHub repository URL in **Image Repository** for the docker container. 

   ![LaunchDockerImageAppNameVerContainerImage](/images/SCALE/22.12/LaunchDockerImageAppNameVerContainerImage.png "Launch Docker Image")

2. Enter the Github repository for the application you want to install in **Image Repository**. 
   If the application requires it, enter the correct setting values in **Image Tag** and select the **Image Pull Policy** to use. 

   If the application requires it, enter the executables you want or need to run after starting the container in **Container Entrypoint**. Click **Add** for **Container CMD** to add a command. Click **Add** for **Container Arg** to add a container argument.

   ![LaunchDockerImageAddContainerEntrypoints](/images/SCALE/22.12/LaunchDockerImageAddContainerEntrypoints.png "Add Container Entrypoints")

3. Enter the **Container Environment Variables**. Not all applications use environment variables. 
   Check the Docker Hub for details on the application you want to install to verify which variables that particular application requires. 

   ![LaunchDockerImageAddContainerEnvironmentVariables](/images/SCALE/22.12/LaunchDockerImageAddContainerEnvironmentVariables.png "Add Container Environmental Variables")

4. Enter the networking settings. 

   a. Enter the external network interface to use. 
      Click **Add** to display the **Host Interface** and **IPAM Type** fields required when configuring network settings. 

      ![LaunchDockerImageAddNetworking](/images/SCALE/22.12/LaunchDockerImageAddNetworking.png "Add Networking")

   b. Scroll down to select the **DNS Policy** and enter any DNS configuration settings required for your application. 
      
      ![LaunchDockerImageAddDNS](/images/SCALE/22.12/LaunchDockerImageAddDNS.png "Add DNS Policy and Settings")

5. Enter the **Port Forwarding** settings. 
   Click **Add** for all ports you need to enter. TrueNAS SCALE requires setting all **Node Ports** above 9000. 

   ![LaunchDockerImageAddPortForwarding](/images/SCALE/22.12/LaunchDockerImageAddPortForwarding.png "Add Port Forwarding")

   Enter the required **Container Port** and **Node Port** settings, and select the protocol for these ports. Repeat for all ports.

6. Add the **Storage** settings. 
   Click **Add** for each application host path. Add any memory-backed or other volumes you want to use.

   ![LaunchDockerImageAddStorage](/images/SCALE/22.12/LaunchDockerImageAddStorage.png "Add Storage Paths and Volumes")

   You can add more volumes to the container later if they are needed. 

7. Enter any additional settings required for your application, such as workload details or adding container settings for your application. 

   Select the **Update Strategy** to use. The default is **Kill existing pods before creating new ones**.

   Set any resource limits you want to impose on this application.

8. Enter or select any **Portal Configuration** settings to use.

9. Click **Save** to deploy the container. 
   If you correctly configured the app, the widget displays on the **Installed Applications** screen.

   When complete, the container becomes active. If the container does not automatically start, click **Start** on the widget.

Click on the App card reveals details.

### Defining Container Settings
Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image.

You can also [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
Some Docker images can require additional environment variables.
Check the documentation for the image you are trying to deploy and add any required variables here.

### Defining Networking
To use the system IP address for the container, set Docker [Host Networking](https://docs.docker.com/network/host/).
TrueNAS does not give the container a separate IP address, and the container port number appends to the end of the system IP address.
See the [Docker documentation](https://docs.docker.com/network/host/) for more details.

Users can create additional network interfaces for the container if needed.
Users can also give static IP addresses and routes to a new interface.

By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/config/containers/container-networking/#dns-services) for more details.

### Defining Port Forwarding List
Choose the protocol and enter port numbers for both the container and node.
You can define multiple ports to forward to the workload.
{{< hint type=note >}}
The node port number must be over **9000**.
Ensure no other containers or system services are using the same port number.
{{< /hint >}}

### Defining Host Path Volumes
You can mount SCALE storage locations inside the container.
To mount SCALE storage, define the path to the system storage and the container internal path for the system storage location to appear.
You can also mount the storage as read-only to prevent using the container to change any stored data.
For more details, see the [Kubernetes hostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).

### Defining Other Volumes
Users can create additional Persistent Volumes (PVs) for storage within the container.
PVs consume space from the pool chosen for application management.
You need to name each new dataset and define a path where that dataset appears inside the container.

To view created container datasets, go to **Datasets** and expand the dataset tree for the pool you use for applications.

### Setting Up Persistent Volume Access

Users developing applications should be mindful that if an application uses Persistent Volume Claims (PVC), those datasets are not mounted on the host and therefore are not accessible within a file browser. Upstream zfs-localpv uses this behavior to manage PVC(s).

If you want to consume or have file browser access to data that is present on the host, set up your custom application to use host path volumes.

Alternatively, you can use the network to copy directories and files to and from the pod using `k3s kubectl` commands.

To copy from a pod in a specific container:
`k3s kubectl cp <file-spec-src> <file-spec-dest> -c <specific-container>`

To copy a local file to the remote pod:
`k3s kubectl cp /tmp/foo <some-namespace>/<some-pod>:/tmp/bar`

To copy a remote pod file locally:
`k3s kubectl cp <some-namespace>/<some-pod>:/tmp/foo /tmp/bar`

## Accessing the Shell in an Active Container

To access the shell in an active container, first, identify the namespace and pod for the container.
In the Scale UI, go to **System Settings > Shell** to begin entering commands:

To view container namespaces: `k3s kubectl get namespaces`.
To view pods by namespace: `k3s kubectl get -n <NAMESPACE> pods`.
To access container shell: `k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash`.

{{< expand "Additional Container Commands" >}}
* View details about all containers: `k3s kubectl get pods,svc,daemonsets,deployments,statefulset,sc,pvc,ns,job --all-namespaces -o wide`.
* Get container status: `k3s kubectl describe -n <CONTAINER NAMESPACE> <POD-ID>`.
{{< /expand >}}

{{< taglist tag="scaledocker" limit="10" >}}