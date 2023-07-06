---
title: "Using Install Custom App"
description: "Provides information on using Install Custom App to configure custom or third-party applications in TrueNAS SCALE."
weight: 10
aliases: 
tags:
- scalecustomapp
---

{{< toc >}}

SCALE includes the ability to run third-party apps in containers (pods) using Kubernetes settings.

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes (K8s) is an open-source system for automating deployment, scaling, and managing containerized applications.
{{< /expand >}}

Always read through the documentation page for the application container you are considering installing so that you know all of the settings that you need to configure.
To set up a new container image, first, determine if you want the container to use its dataset. If yes, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) for host volume paths before you click **Custom App** on the **Discover** application screen. 

## Adding Custom Applications

{{< hint type=important >}}
If your application requires directory paths, specific datasets, or other storage arrangements, configure these before you start the **Install Custom App** wizard. 

You cannot exit the configuration wizard and save settings to create data storage or directories in the middle of the process. If you are unsure about any configuration settings, review the [Install Custom App Screen UI reference article]({{< relref "InstallCustomAppScreens.md" >}}) before creating a new container image.

To create directories in a dataset on SCALE, use **System Settings > Shell** before you begin installing the container.
{{< /hint >}}

When you are ready to create a container, go to **Apps**, click **Discover Apps**, then click **Custom App**.

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="1: Applications Discover Screen" >}}

1. Fill in the **Application Name** and the current version information in **Version**. 
   Add the GitHub repository URL in **Image Repository** for the docker container. 

   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppApplicationName.png" alt="Application Name" id="2: Application Name" >}}

2. Enter the Github repository for the application you want to install in **Image Repository**. 
   If the application requires it, enter the correct setting values in **Image Tag** and select the **Image Pull Policy** to use. 

   If the application requires it, enter the executables you want or need to run after starting the container in **Container Entrypoint**. Click **Add** for **Container CMD** to add a command. Click **Add** for **Container Arg** to add a container argument.

   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppContainerImages.png" alt="Container Images Settings" id="3: Container Images Settings" >}}

3. Enter the **Container Entrypoint** commands an arguments the application requires.
   
   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppContainerEntrypoint.png" alt="Container Entrypoint Settings" id="4: Container Entrypoint Settings" >}}

4. Enter the **Container Environment Variables**. Not all applications use environment variables. 
   Check the application container doumentation for details on what to install and to verify the variables that particular application requires. 

   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppContainerEnvironmentVariables.png" alt="Container Environment Variables Settings" id="5: Container Environment Variables Settings" >}}

5. Enter the networking settings. 

   a. Enter the external network interface to use. 
      Click **Add** to display the **Host Interface** and **IPAM Type** fields required when configuring network settings. 

    {{< trueimage src="/images/SCALE/23.10/InstallCustomAppNetworkingAddExternalInterfaces.png" alt="Networking Add External Interfaces" id="6: Networking Add External Interfaces" >}}

   b. Scroll down to select the **DNS Policy** and enter any DNS configuration settings required for your application. 
      
   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppNetworkingDNSConfig.png" alt="Networking Add DNS Configuration" id="7: Networking Add DNS Configuration" >}}

6. Enter the **Port Forwarding** settings. 
   Click **Add** for all ports you need to enter. TrueNAS SCALE requires setting all **Node Ports** above 9000. 

   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppPortForwarding.png" alt="Port Forwarding Settings" id="8: Port Forwarding Settings" >}}

   Enter the required **Container Port** and **Node Port** settings, and select the protocol for these ports. Repeat for all ports.

7. Add the **Storage** settings. 
   Click **Add** for each application host path. Add any memory-backed or other volumes you want to use.

   {{< trueimage src="/images/SCALE/23.10/InstallCustomAppScreenStorage.png" alt="Storage Settings" id="9: Storage Settings" >}}

   You can add more volumes to the container later if needed. 

8. Enter any additional settings required for your application, such as workload details or adding container settings for your application. 

   Select the **Update Strategy** to use. The default is **Kill existing pods before creating new ones**.

   Set any resource limits you want to impose on this application.

9. Enter or select any **Portal Configuration** settings to use.

10. Click **Install** to deploy the container. 
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
To use the system IP address for the container, set up [Host Networking]({{< relref "InstallCustomAppScreens.md#NetworkingSettings" >}}).
TrueNAS does not give the container a separate IP address, and the container port number appends to the end of the system IP address.

Users can create additional network interfaces for the container if needed.
Users can also give static IP addresses and routes to a new interface.

By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/) for more details.

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


{{< taglist tag="scaledocker" limit="10" title="Related Custom App Articles" >}}