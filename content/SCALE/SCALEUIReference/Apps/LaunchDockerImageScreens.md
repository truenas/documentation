---
title: "Launch Docker Image Screens"
description: "This article provides information on the **Launch Docker Image** wizard configuration screens and settings."
weight: 25
aliases:
tags:
 - scaledocker
 - scaleapps
---

{{< toc >}}


**Launch Docker Image** on the **Applications** screen opens a configuration wizard that steps through the application creation process using Docker image when selected while on the **Available Applications** tab.  

![AppsScreenHeaderSCALE](/images/SCALE/22.02/AppsScreenHeaderSCALE.png "Avalable Application Header Options") 

The docker image wizard includes 12 configuration screens and a **[Confirm Options]()** screen that displays a summary of some of the setting options configured.
The **Launch Docker Image** wizard allows you to configure third-party applications using settings based on Kubernetes. You can use the wizard to configure applications not included in the **Official** catalog or to do a more advanced installation of official catalog applications.

## Application Name Screen
The **Application Name** screen is the first step in the **Launch Docker Image** configuration wizard.
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageApplicationName](/images/SCALE/22.02/LaunchDockerImageApplicationName.png "Application Name") 

| Setting | Description |
|---------|-------------|
| **Application Name** | Enter a name for the application you are adding. The name must have lowercase alphanumeric characters, must begin with an alphabet character and can end with an alphanumeric character. The name can contain a hyphen (-) but not as the first or last character in the name. For example, using *chia-1* but not *-chia1* or *1chia-* as a valid name. |
{{< /expand >}}

## Container Images Screen
The  **Container Images** settings specify the Docker image details. Always refer to the dockerhub page for information on what the docker container requires.
{{< expand "Click Here for More Information" "v" >}}
Define the image tag, when the image is pulled from the remote repository, how the container is updated, and when a container automatically restarts with these settings.

![LaunchDockerImageContainerImages](/images/SCALE/22.02/LaunchDockerImageContainerImages.png "Container Images")  

| Setting | Description |
|---------|-------------|
| **Image Repository** | Required. Enter the Docker image repository name. For example, for Plex enter *plexinc/pms-docker*.|
| **Image Tag** | Enter the tag for the specified image. For example, for Plex enter *1.20.2.3402-0fec14d92*. |
| **Image Pull Policy** | Select the Docker image pull policy from the dropdown list. Options are **Only pull image if not present on host**, **Always pull image even if present on host**, or **Never pull image even if it's not present on host**. |
{{< /expand >}}

## Container Entrypoint
The **Container Entrypoint** settings specify both commands and arguement options the application requires.  
{{< expand "Click Here for More Information" "v" >}}
Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image. 
Check the documentation for the application you want to install using a Docker Image for entrypoint commands or arguments you need to enter.

![LaunchDockerImageContainerEntrypoints](/images/SCALE/22.02/LaunchDockerImageContainerEntrypoints.png "Container Entrypoints After Add") 

| Setting | Description |
|---------|-------------|
| **Configure Container CMD**| Click **Add** to display a **Command** field. |
| **Command** | Enter container command. For example, if adding MinIO, enter *SERVER*. |
| **Configure Container Args** | Click **Add** to display an argument entry **Arg** field. Click again to add more arguments. |
| **Argument** | Enter an argument. For example, if adding MinIO, enter the IP and port string such as *http://0.0.0.0/9000/data*.|
{{< /expand >}}

## Container Environment Variables
The **Container Environment Variables** settings specify container environment variables the container/image needs. 
{{< expand "Click Here for More Information" "v" >}}
You can also [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
Be sure to check the documentation for the image you are trying to deploy and add any required variables here.

![LaunchDockerImageContainerEnvironmentVariables](/images/SCALE/22.02/LaunchDockerImageContainerEnvironmentVariables.png "Container Environment Variables After Add") 

| Setting | Description |
|---------|-------------|
| **Configure Container Environment Variables** | Click **Add** to display a block of **Container Environment Variables**. Click again to add more blocks for environment variables. |
| **Container Environment Variables** | Container environmental variable name and value fields. |
| **Environment Variable Name** | Enter the environment variable name. For example, if installing Pi-Hole enter ***TZ** for timezone. |
| **Environment Variable Value** | Enter the value for the variable specified in **Environment Variable Name**. For example, for Pi-Hole timezone variable, enter *AmericaNewYork*. |
{{< /expand >}}

## Networking
The **Networking** settings specify network policy, addresses, and DNS services if the container needs special networking configuration.
{{< expand "Click Here for More Information" "v" >}}
See the [Docker documentation](https://docs.docker.com/network/host/) for more details on host networking. 
Users can create additional network interfaces for the container if needed or give static IP addresses and routes to new interface. 
By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/config/containers/container-networking/#dns-services) for more details.


![LaunchDockerImageNetworkingInterfaceDNSSettings](/images/SCALE/22.02/LaunchDockerImageNetworkingInterfaceDNSSettings.png "Networking Interface and DNS Policy")  

| Setting | Description |
|---------|-------------|
| **Configure Add External Interfaces** | Click **Add** to displays a block of interface settings. |
| **Interface Configuration** | Required. Select an interface from the **Host Interface** dropdown list. |
| **Host Interface** | Required. Select a host interface on your system from the dropdown list. |
| **IP Address Management** | Select an option for how to manage the IP address from the **IPAM Type** dropdown list. |
| **IPAM Type** | Required. Select an option from the dropdown list to specify the type for IPAM. Options are **Use DHCP** or **Use Static IP**. To add a default route, select **Add route** allow you to enter route destination IP /subnet 0.0.0.0/0. Enter the gateway (for example, *192.168.1.1*). After submitting the docker image, navigate to **Installed Applications**, locate the docker image you added, select **Edit** and change the route destination/subnet to equal 0.0.0.0 /0. |
| **DNS Policy** | Select the option from the dropdown list that specifies the policy. Default behavior is where Pod inherits the name resolution configuration from the node that the pods run on. If **None** is specified, it allows a pod to ignore DNS settings from the Kubernetes environment. Options are:<br> **Use Default DNS Policy where Pod inherits the name resolution configuration from the node**.<br> **Kubernetes internal DNS is prioritized and resolved first.** If the domain does not resolve with internal kubernetes DNS, the DNS query forwards to the upstream nameserver inherited from the node. This useful if the workload to access other services, workflows, using kubernetes internal DNS.<br> **For Pods running with hostNetwork and wanting to prioritize internal kubernetes DNS should make use of this policy.**<br> **Ignore DNS settings from the Kubernetes cluster**. |
| **DNS Configuration** | Specify custom DNS configuration to apply to the pod. Click **Add** to dsiplay a **Nameserver** entry field. Click again to add another name server. |
| **Nameserver** | Enter the IP address of the name server. |

![LaunchDockerImageNetworkingInterfaceDNSSettings](/images/SCALE/22.02/LaunchDockerImageNetworkingInterfaceDNSSettings.png "Networking Interface and DNS Policy") 

| Setting | Description |
|---------|-------------|
| **Configure Searches** | Click **Add** to display a **Search Entry** field. |
| **Search Entry** | Enter the search value you want to configure. |
| **Configure DSN Options** | Click **Add** to display a block of **Option Entry Configuration** settings. Click again to display another block of settings if needed.  |
| **Option Name** | Required. Enter the option name. |
| **Option Value** | Required. Enter the value for the option name. |
| **Provide access to node network namespace for the workload** | Select to enable. |
{{< /expand >}}

##  Port Forwarding
The **Port Forwarding** settings specify the container and node ports and the transfer protocol to use.
{{< expand "Click Here for More Information" "v" >}}
Choose the protocol and enter port numbers for both the container and node. You can define multiple port forwards. 

![LaunchDockerImagePortForwarding](/images/SCALE/22.02/LaunchDockerImagePortForwarding.png "Port Forwarding") 

| Setting | Description |
|---------|-------------|
| **Configure Specify Node ports to forward to workload** | Click **Add** to display a block of **Port Forwarding Configuration** settings. |
| **Container Port** | Required. Do not enter the same port number used by another system service or container. |
| **Node Port** | Required. Enter a node port number over **9000**. |
| **Protocol** | Select the protocol to use from the dropdown list. Options are **TCP Protocol** or **UDP Protocol**.  |
{{< /expand >}}

## Storage
The **Storage** settings specify the host path configuration, memory backed volumes, and storage volumes. 
{{< hint ok >}}
Create the pool, dataset, zvol or directory for the container to use before you begin configuring the container as leaving the wizard closes it without saving.
{{< /hint >}}
{{< expand "Click Here for More Information" "v" >}}
Set the Host Path volume to a dataset and directory path. Somme apps like Pi-Hole use volumes store data between container upgrades. 
For host path volumes, you can mount SCALE storage locations inside the container. Define the path to the system storage and the container internal path for the system storage location to appear.
For more details, see the [Kubernetes hostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).
Users can create additional Persistent Volumes (PVs) for storage within the container. PVs consume space from the pool chosen for application management. To do this, name each new dataset and define a path where that dataset appears inside the container.

![LaunchDockerImageStorageHostPath](/images/SCALE/22.02/LaunchDockerImageStorageHostPath.png "Storage Host Path") 

| Setting | Description |
|---------|-------------|
| **Configure Host Path Volumes** | Click **Add** to display a block of **Host Path Configuration** settings. Click again to add another block of settings. |
| **Host Path** | Require. Enter or click <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span> **/mnt** to browse to the location of the host path. Click on the dataset to select and display it in the **Host Path** field. |
| **Mount Path** | Required. Enter the <file>**/data**</file> directory where host path mounts inside the pod. |
| **Read Only** | Select to make the mount path inside the pod read only and prevent using the container to store data. |

![LaunchDockerImageStorageVolumeSettings](/images/SCALE/22.02/LaunchDockerImageStorageVolumeSettings.png "Storage Volume Settings") 

| Setting | Description |
|---------|-------------|
| **Configure Memory Backed Volumes** | Click **Add** to display a block of **memory Backed Volume** settings. Click again to display another block of settings. |
| **Mount Path** | Required. Enter the path where temporary path mounts inside the pod. |
| **Configure Volumes** | Click **Add** to display a block of **Volume** settings. Click again to add another block of settings.  |
| **Mount Path** | Required. Enter the path where the volume mounts inside the pod. |
| **Dataset Name** | Required. Enter the name of the dataset. |
{{< /expand >}}

## Workload Details
The **Workload Details** settings specify if containers in a pod run with TTY or STDIN enabled, allow it to enable any device on the host or configure host capabilities, and if you run the container as a user or group.
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageWorkloadDetails](/images/SCALE/22.02/LaunchDockerImageWorkloadDetails.png "Workload Details") 

| Setting | Description |
|---------|-------------|
| **Enable TTY** | Select to set containers in a pod to run with TTY enabled. Disabled by default. |
| **enable STDIN** | Select to set containers in a pod to run with STDIN enabled. Disabled by default. |
| **Privileged Mode** | Select to allow any container in a pod to enable any device on the host, but a **privileged** container is given access to all devices on the host. This allows the container nearly all the same access as processes running on the host. |
| **Configure Capabilities** | Click **Add** to display a **Add Capability** field**. Click again to add another field. |
| **Add Capability** | Enter a capability. |
| **Configure Container User and Group ID** | Select to display the **Run Container as User** and **Run Container as Group** settings to add security context (`runAsUser` and `runAsGroup` variables). |
| **Run Container As User** | Enter a user ID (numeric value) for container. |
| **Run Container as Group** | Enter a group ID (numeric value) for container. |
{{< /expand >}}

## Scaling/Upgrade Policy
Use **Kill existing pods before creating new ones** to recreate the container or **Create new pods and then kill old ones** if you want rolling upgrades. 
{{< expand "Click Here for More Information" "v" >}}

![LaunchDockerImageScalingUpgradePolicy](/images/SCALE/22.02/LaunchDockerImageScalingUpgradePolicy.png "Scaling/Upgrade Policy")  

Select **Create new pods and then kill the old ones** to retain your existing configuration and container until the upgrade completes before removing it.
Select **Kill existing pods before creating new ones** to remove the exiting pod and start with a new updated pod. This is useful if your old pod was not functioning properly. For fewer issues, select **Kill existing pods before creating new ones**.
{{< /expand >}}
## Resource Reservation
The **Resource Reservation** screen specifies the **GPU configuration**.

## Resource Limits
The **Resource Limits** setting specifies whether to **Enable Pod resource limits**.

## Portal Configuration
The **Portal Configuration** setting specifies whether to **Enable WebUI Portal (only supported in TrueNAS SCALE Bluefin)**.

## Confirm Options
The **Confirm Options** screen displays a summary of the image/container configuration. Click **Back** to return to previous screens to make changes and **Next** to advance back to **Confirm Options**. Click **Save** to create the image and add the application to the **Installed Applications** screen.

{{< taglist tag="scaledocker" limit="10" >}}
{{< taglist tag="scaleapps" limit="10" title="Related Apps Articles" >}}
