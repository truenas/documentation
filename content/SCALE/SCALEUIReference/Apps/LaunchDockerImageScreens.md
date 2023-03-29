---
title: "Launch Docker Image Screens"
description: "This article provides information on the **Launch Docker Image** wizard configuration settings."
weight: 25
aliases:
tags:
 - scaledocker
 - scaleapps
---

{{< toc >}}


**Launch Docker Image** on the **Applications** screen opens a configuration wizard that steps through the application creation process using a Docker image when selected while on the **Available Applications** tab.  

![AppsScreenHeaderSCALE](/images/SCALE/22.02/AppsScreenHeaderSCALE.png "Avalable Application Header Options") 

The **Launch Docker Image** wizard allows you to configure third-party applications using settings based on Kubernetes. You can use the wizard to configure applications not included in the **Official** catalog or to do a more advanced installation of official catalog applications.

## Application Name
The **Application Name** section is the first step in the **Launch Docker Image** configuration wizard.
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageApplicationVersion](/images/SCALE/22.12/LaunchDockerImageApplicationVersion.png "Application Name and Version") 

| Setting | Description |
|---------|-------------|
| **Application Name** | Displays **ix-Chart** as the default. Enter a name for the application you are adding. The name must have lowercase alphanumeric characters, must begin with an alphabet character, and can end with an alphanumeric character. The name can contain a hyphen (-) but not as the first or last character in the name. For example, using *chia-1* but not *-chia1* or *1chia-* as a valid name. |
| **Version** | Displays the current version of the default application. Enter the version of the application you want to install.|
{{< /expand >}}

## Container Images
The  **Container Images** settings specify the Docker image details. Always refer to the docker hub page for information on docker container requirements.
{{< expand "Click Here for More Information" "v" >}}
Define the image tag, when TrueNAS pulls the image from the remote repository, how the container updates, and when a container automatically restarts with these settings.

![LaunchDockerImageContainerImage](/images/SCALE/22.12/LaunchDockerImageContainerImage.png "Container Images")  

| Setting | Description |
|---------|-------------|
| **Image Repository** | Required. Enter the Docker image repository name. For example, *plexinc/pms-docker* for Plex.|
| **Image Tag** | Enter the tag for the specified image. For example, *1.20.2.3402-0fec14d92* for Plex. |
| **Image Pull Policy** | Select the Docker image pull policy from the dropdown list. Options are **Only pull image if not present on host**, **Always pull image even if present on host**, or **Never pull image even if it's not present on host**. |
{{< /expand >}}

## Container Entrypoint
The **Container Entrypoint** settings specify both commands and argument options the application requires.  
{{< expand "Click Here for More Information" "v" >}}
Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image. 
Check the documentation for the application you want to install using a Docker Image for entry point commands or arguments you need to enter.

![LaunchDockerImageAddContainerEntrypoints](/images/SCALE/22.12/LaunchDockerImageAddContainerEntrypoints.png "Add Container Entrypoints") 

| Setting | Description |
|---------|-------------|
| **Configure Container CMD**| Click **Add** to display a **Command** field. |
| **Command** | Enter container command. For example, if adding MinIO, enter *SERVER*. |
| **Configure Container Args** | Click **Add** to display an argument entry **Arg** field. Click again to add more arguments. |
| **Argument** | Enter an argument. For example, if adding MinIO, enter the IP and port string such as *http://0.0.0.0/9000/data*.|
{{< /expand >}}

## Container Environment Variables
The **Container Environment Variables** settings specify container environment variables the container/image needs. 
You can also [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
{{< expand "Click Here for More Information" "v" >}}
Check the documentation for the image you are trying to deploy and add any required variables here.

![LaunchDockerImageAddContainerEnvironmentVariables](/images/SCALE/22.12/LaunchDockerImageAddContainerEnvironmentVariables.png "Add Container Environmental Variables") 

| Setting | Description |
|---------|-------------|
| **Configure Container Environment Variables** | Click **Add** to display a block of **Container Environment Variables**. Click again to add more blocks for environment variables. |
| **Container Environment Variables** | Container environmental variable name and value fields. |
| **Environment Variable Name** | Enter the environment variable name. For example, enter **TZ** for the timezone if installing Pi-Hole. |
| **Environment Variable Value** | Enter the value for the variable specified in **Environment Variable Name**. For example, for the Pi-Hole timezone variable, enter *AmericaNewYork*. |
{{< /expand >}}

## Networking
The **Networking** settings specify network policy, addresses, and DNS services if the container needs a custom networking configuration.
{{< expand "Click Here for More Information" "v" >}}
See the [Docker documentation](https://docs.docker.com/network/host/) for more details on host networking. 
You can create additional network interfaces for the container or give static IP addresses and routes to a new interface. 
By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/config/containers/container-networking/#dns-services) for more details.

![LaunchDockerImageAddNetworking](/images/SCALE/22.12/LaunchDockerImageAddNetworking.png "Add Networking")  

| Setting | Description |
|---------|-------------|
| **Add External Interfaces** | Click **Add** to displays a block of interface settings. |
| **Host Interface** | Required. Select a host interface on your system from the dropdown list. |
| **IPAM Type** | Required. Select an option from the dropdown list to specify the IPAM type. Options are **Use DHCP** or **Use Static IP**. To add a default route, select **Add route**, which allows you to enter route destination IP /subnet 0.0.0.0/0. Enter the gateway (for example, *192.168.1.1*). After submitting the docker image, navigate to **Installed Applications**, locate the docker image you added, select **Edit** and change the route destination/subnet to equal 0.0.0.0 /0. |

![LaunchDockerImageAddDNS](/images/SCALE/22.12/LaunchDockerImageAddDNS.png "Add DNS Policy and Settings")  

| Setting | Description |
|---------|-------------|
| **DNS Policy** | Select the option from the dropdown list that specifies the policy. With the default behavior, the pod inherits the name resolution configuration from the node that the pods run on. With **None**,  a pod can ignore DNS settings from the Kubernetes environment. Options are:<br> **Use Default DNS Policy where Pod inherits the name resolution configuration from the node**.<br> **Kubernetes internal DNS is prioritized and resolved first.** If the domain does not resolve with internal Kubernetes DNS, the DNS query forwards to the upstream nameserver inherited from the node, which is useful if the workload needs to access other services using Kubernetes internal DNS.<br> **For Pods running with hostNetwork and wanting to prioritize internal Kubernetes DNS should make use of this policy.**<br> **Ignore DNS settings from the Kubernetes cluster**. |
| **DNS Configuration** | Specify custom DNS configuration to apply to the pod. Click **Add** to display a **Nameserver** entry field. Click again to add another name server. |
| **Nameserver** | Enter the IP address of the name server. |
| **Searches** | Click **Add** to display a **Search Entry** field to enter the search value you want to configure. |
| **DSN Options** | Click **Add** to display a block of **Option Entry Configuration** settings. Click again to display another block of settings if needed.  |
| **Option Name** | Required. Enter the option name. |
| **Option Value** | Required. Enter the value for the option name. |
| **Provide access to node network namespace for the workload** | Select to allow the container to bind to any port. Some ports still require appropriate permissions. Unless you need it, we recommend leaving this setting disabled because app containers might try to bind to arbitrary ports like 80 or 443, which the TrueNAS UI already uses.  |
{{< /expand >}}

## Port Forwarding
The **Port Forwarding** settings specify the container and node ports and the transfer protocol.
{{< expand "Click Here for More Information" "v" >}}
Choose the protocol and enter port numbers for both the container and node. You can define multiple port forwards. 

![LaunchDockerImageAddPortForwarding](/images/SCALE/22.12/LaunchDockerImageAddPortForwarding.png "Add Port Forwarding") 

| Setting | Description |
|---------|-------------|
| **Configure Specify Node ports to forward to workload** | Click **Add** to display a block of **Port Forwarding Configuration** settings. |
| **Container Port** | Required. Do not enter the same port number used by another system service or container. |
| **Node Port** | Required. Enter a node port number over **9000**. |
| **Protocol** | Select the protocol from the dropdown list. Options are **TCP Protocol** or **UDP Protocol**.  |
{{< /expand >}}

## Storage
The **Storage** settings specify the host path, memory-backed, and storage volumes. 
{{< hint ok >}}
Exiting the wizard closes it without saving settings, so create the pool, dataset, zvol, or directory for the container to use before you begin configuring an app.
{{< /hint >}}
{{< expand "Click Here for More Information" "v" >}}
Set the Host Path volume to a dataset and directory path. 
You can mount SCALE storage locations inside the container with host path volumes. Define the path to the system storage and the container internal path for the system storage location to appear.
For more details, see the [Kubernetes hostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).
Users can create additional Persistent Volumes (PVs) for storage within the container. 
PVs consume space from the pool chosen for application management. To do this, name each new dataset and define a path where that dataset appears inside the container.

![LaunchDockerImageAddStorage](/images/SCALE/22.12.2/LaunchDockerImageAddStorage.png "Add Storage Paths and Volumes") 

| Setting | Description |
|---------|-------------|
| **Host Path Volumes** | Click **Add** to display a block of **Host Path Volume** settings. Click again to add another block of settings. |
| **Host Path** | Require. Enter or click <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span> **/mnt** to browse to the location of the host path. Click on the dataset to select and display it in the **Host Path** field. |
| **Mount Path** | Required. Enter the <file>**/data**</file> directory where the host path mounts inside the pod. |
| **Read Only** | Select to make the mount path inside the pod read-only and prevent using the container to store data. |

![LaunchDockerImageStorageAddVolumes](/images/SCALE/22.12/LaunchDockerImageStorageAddVolumes.png "Storage Volume Settings") 

| Setting | Description |
|---------|-------------|
| **Memory Backed Volumes** | Click **Add** to display a block of **Memory Backed Volume** settings. Click again to display another block of settings. |
| **Mount Path** | Required. Enter the path where the temporary path mounts inside the pod. |
| **Volumes** | Click **Add** to display a block of **Volume** settings. Click again to add another block of settings.  |
| **Mount Path** | Required. Enter the path where the volume mounts inside the pod. |
| **Dataset Name** | Required. Enter the name of the dataset. |
{{< /expand >}}

## Workload Details
The **Workload Details** settings specify if containers in a pod run with TTY or STDIN enabled, allow it to enable any device on the host or configure host capabilities and if you run the container as a user or group.
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageAddWorkloadDetails](/images/SCALE/22.12/LaunchDockerImageAddWorkloadDetails.png "Workload Details") 

| Setting | Description |
|---------|-------------|
| **Enable TTY** | Select to set containers in a pod to run with TTY enabled. Disabled by default. |
| **Enable STDIN** | Select to set containers in a pod to run with STDIN enabled. Disabled by default. |
| **Privileged Mode** | By default, a container cannot access any devices on the host. With Privileged Mode enabled, the container has access to all devices on the host, which allows the container nearly all the same access as processes running on the host. |
| **Capabilities** | Click **Add** to display a **Add Capability** field. Click again to add another field. |
| **Add Capability** | Enter a capability. |
| **Configure Container User and Group ID** | Select to display the **Run Container as User** and **Run Container as Group** settings to add security context (`runAsUser` and `runAsGroup` variables). |
| **Run Container As User** | Enter a numeric user ID for the container. |
| **Run Container as Group** | Enter a numeric group ID for the container. |
{{< /expand >}}

## Scaling/Upgrade Policy
Use **Kill existing pods before creating new ones** to recreate the container or **Create new pods and then kill old ones** if you want rolling upgrades. 
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageScalingUpgrade](/images/SCALE/22.12/LaunchDockerImageScalingUpgrade.png "Scaling/Upgrade Policy")  

Select **Create new pods and then kill the old ones** to retain your existing configuration and container until the upgrade completes before removing it.
Select **Kill existing pods before creating new ones** to remove the existing pod and start with a newly updated pod. Killing existing pods is useful if your old pod is not functioning properly. For fewer issues, select **Kill existing pods before creating new ones**.
{{< /expand >}}
## Resource Reservation and Limits
The **Resource Reservation** setting specifies the **GPU configuration**.

The **Resource Limits** setting specifies the limits you want to place on the Kubernetes pod. 
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageResourcesAdd](/images/SCALE/22.12/LaunchDockerImageResourcesAdd.png "Resource Reservation and Limits")  

| Setting | Description |
|---------|-------------|
| **Enable Pod resource limits** | Select to enable resource limits and display the **CPU Limit** and **Memory Limit** settings. |
| **CPU Limit** | Enter the integer values with the suffix m (mill) you want to use to limit the CPU resource. For example, 1000m, 100, etc. |
| **Memory Limit** | Enter the number of bytes you want to limit memory to. Follow the number with the quantity suffix, like E, P, T, G, M, k or Ei, Pi, Ti, Mi, Gi, Ki. For example, 129e6, 129m, 12897484800m, 123Mi, etc. |
{{< /expand >}}

## Portal Configuration
The **Portal Configuration** setting specifies whether to **Enable WebUI Portal (only supported in TrueNAS SCALE Bluefin)**.

{{< taglist tag="scaledocker" limit="10" >}}