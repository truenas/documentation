---
title: "Install Custom App Screen"
description: "Provides information on the Install Custom App screen and configuration settings."
weight: 25
aliases:
 - /scale/scaleuireference/apps/launchdockerimagescreens/
 - /scale/scaletutorials/apps/docker/
tags:
- scalecustomapp
---

{{< toc >}}


## Install Custom App Screen

The **Install Custom App** screen allows you to configure third-party applications using settings based on Kubernetes. 
Use the wizard to configure applications not included in the TRUENAS catalog. 
The **Install Custom** button on the **Discover** application screen opens the **Install Custom App** configuration wizard. 

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppScreenNameAndImage.png" alt="Install Custom Application Screen" id="1: Install Custom Application Screen" >}}

The breadcrumbs in the top header link to other screens. 
**Discover** closes the **Install Custom App** screen and opens the **Discover** screen.
**ix-chart** closes the **Install Custom App** screen and opens the **Installed** screen.
The panel on the right of the screen links to each setting area. 
Click on a heading or setting to jump to that area of the screen.
Click in the **Search Input Fields** to see a list of setting links. 

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppTOC.png" alt="Install Custom App Toc" id="2: Install Custom App ToC" >}}

Settings are grouped into **Application Name**, **Container Images**, **Container Entrypoint**, **Container Environment Variables**, **Networking**, **Port Forwarding**, **Storage**, **Workload Details**, **Scaling/Upgrade Policy**, **Resource Limits**, and **Portal Configuration** sections.

### Application Name Settings
**Application Name** has two required settings, **Application Name** and **version**. 
After completing the installation these settings are not editable.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppApplicationName.png" alt="Application Name" id="3: Application Name" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Application Name** | Enter a name for the application. The name must have lowercase alphanumeric characters, begin with an alphabet character, and can end with an alphanumeric character. The name can contain a hyphen (-) but not as the first or last character in the name. For example, using *chia-1* but not *-chia1* or *1chia-* as a valid name. |
| **Version** | Displays the current version of the default application. Enter the version of the application you want to install.|
{{< /truetable >}}
{{< /expand >}}

### Container Images Settings
**Container Images** settings specify the container image details. 
They define the image tag, when TrueNAS pulls the image from the remote repository, how the container updates, and when a container automatically restarts.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppContainerImages.png" alt="Container Images Settings" id="4: Container Images Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Image Repository** | Required. Enter the Docker image repository name. For example, *plexinc/pms-docker* for Plex.|
| **Image Tag** | Enter the tag to use for the specified image. For example, *1.20.2.3402-0fec14d92* for Plex. |
| **Image Pull Policy** | Select the Docker image pull policy from the dropdown list. Options are **Only pull image if not present on host** (default option), **Always pull image even if present on host**, and **Never pull image even if it's not present on host**. |
{{< /truetable >}}
{{< /expand >}}

### Container Entrypoint Settings
**Container Entrypoint** settings specify both [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image. 
Check the documentation for the application you want to install for entry point commands or arguments you need to enter. 

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppContainerEntrypoint.png" alt="Container Entrypoint Settings" id="5: Container Entrypoint Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Container CMD**| Click **Add** to display a **Command** field. |
| **Command** | Enter a container command. For example, if adding MinIO, enter *SERVER*. |
| **Container Args** | Click **Add** to display an argument entry **Arg** field. Click again to add another argument. |
| **Argument** | Enter an argument. For example, if adding MinIO, enter the IP and port string such as *http://0.0.0.0/9000/data*.|
{{< /truetable >}}
{{< /expand >}}

### Container Environment Variables Settings
**Container Environment Variables** settings [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
Check the documentation for the image and add any required variables here.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppContainerEnvironmentVariables.png" alt="Container Environment Variables Settings" id="6: Container Environment Variables Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Container Environment Variables** | Click **Add** to display a block of **Container Environment Variables**. Click again to add another set of environment variables. |
| **Environment Variable Name** | Enter the environment variable name. For example, enter **TZ** for the timezone if installing Pi-Hole. |
| **Environment Variable Value** | Enter the value for the variable specified in **Environment Variable Name**. For example, for the Pi-Hole timezone variable, enter *AmericaNewYork*. |
{{< /truetable >}}
{{< /expand >}}

### Networking Settings
**Networking** settings specify network policy, addresses, and DNS services if the container needs a custom networking configuration.

See the [Kubernetes documentation](https://kubernetes.io/docs/concepts/services-networking/) for more details on host networking. 
You can create additional network interfaces for the container or give static IP addresses and routes to a new interface. 
By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Kubernetes [DNS services documentation](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/) for more details.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppNetworking.png" alt="Networking Settings" id="7: Networking Settings" >}}

{{< expand "Settings Information" "v" >}}

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppNetworkingAddExternalInterfaces.png" alt="Networking Add External Interfaces" id="8: Networking Add External Interfaces" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Add External Interfaces** | Click **Add** to display the **Host Interface** and **IP Address Management** settings. |
| **Host Interface** | Required. Select a host interface configured on your system from the dropdown list. |
| **IPAM Type** | Required. Select an **IP Address Management** option from the dropdown list. Options are **Use DHCP** or **Use Static IP**. <br>**Use Static IP** adds two settings, **Static IP Address** and **Static Routes**. Click **Add** to the right of **Static IP Addresses** to display the **Static IP** fields to specify the IP address and CIDR value. <br>Click **Add** to the right of **Static Routes** to add the **Destination** and **Gateway** fields.  |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppNetworkingDNSConfig.png" alt="Networking Add DNS Configuration" id="9: Networking Add DNS Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **DNS Policy** | Select the DNS policy option from the dropdown list. There are four options. See the table in [DNS Policy Setting Options](#dns-policy-setting-options) below. |
| **DNS Configuration** | Specify custom DNS configuration to apply to the pod. Configuration fields are **Nameservers**, **Searches**, and **DNS Options**. For more information on Kubernetes DNS configuration see [Pod DNS Configuration](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-dns-config). |
| **Nameservers** | Use to add a list of IP addresses to use as DNS servers for the container (pod). Specify at least three nameserver IP addresses. If the DNS policy is set to **None** the list must contain at least one IP address. If not the DNS policy is set to something other than none, specifying nameservers is optional. Click **Add** to the right of **Nameservers** to display a **Nameserver** entry field. Click again to add another name server. |
| **Nameserver** | Enter the IP address of the name server. |
| **Searches** | Optional. Use to add a list of DNS search domains for a host name lookup in the container (pod). The list cannot exceed 32 entries. When specified, the provided list is merged into the base search domain names generated from the chosen DNS policy. Kubernetes allows up to six search domains. Click **Add** to display a **Search Entry** field to enter the search value you want to configure. For more information on Kubernetes DNS search configuration see [DNS Search Domain List Limits](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#dns-search-domain-list-limits). |
| **Search Entry** | Enter the search value you want to configure. For example, *ns1.svc.cluster-domain.example* or *my.dns.search.suffix*. |
| **DNS Options** | Optional. Use to add a list of objects where each can have a name and a value property. These merge into the options generated from the specified DNS policy. Click **Add** to display a block of **Option Entry Configuration** settings. Click again to display another block of settings.  |
| **Option Name** | Required. Enter the option name. For example, *ndots* or *edns0*. |
| **Option Value** | Required. Enter the value for the option name. For example, *2* for *ndots*. |
| **Provide access to node network namespace for the workload** | Select to allow the container to bind to any port. Some ports still require appropriate permissions. Unless needed, we recommend leaving this setting disabled because app containers might try to bind to arbitrary ports like 80 or 443, which the TrueNAS UI already uses.  |
{{< /truetable >}}

#### DNS Policy Setting Options
For more information on DNS policies see the Kubernetes [Pod DNS Policy](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy) documentation.
{{< truetable >}}
| Option | Description |
|--------|-------------|
| **Use Default DNS Policy Where Pod Will Inherit The Name Resolution Configuration From The Node.**| This is the Kubernetes `default` dnsPolicy. With the `default` behavior, the pod inherits the name resolution configuration from the node that the pods run on. |
| **"Kubernetes Internal DNS Will Be Prioritized And Resolved First. If The Domain Does Not Resolve With Internal Kubernetes DNS, The DNS Query Will Be Forwarded To The Upstream Nameserver Inherited From The Node. This Is Useful If The Workload Needs To Access Other Service(S)/Workload(S) Using Kubernetes Internal DNS."** | This is the Kubernetes `ClusterFirst` dnsPolicy. If no dnsPolicy is specified in Kubernetes, this becomes the default option. |
| **For Pods Running With HostNetwork And Wanting To Prioritize Internal Kubernetes DNS Should Make Use Of This Policy.** | This is the Kubernetes `ClusterFirstWithHostNet` dnsPolicy. |
| **Ignore DNS Settings From The Kubernetes Cluster** | This the the Kubernetes `none` dnsPolicy. With `none`, a pod can ignore DNS settings from the Kubernetes environment. |

{{< /truetable >}}
{{< /expand >}}

### Port Forwarding Settings
**Port Forwarding** settings specify the container and node ports, and the transfer protocol.
Choose the protocol and enter port numbers for both the container and node. You can define multiple port forwards. 

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppPortForwarding.png" alt="Port Forwarding Settings" id="10: Port Forwarding Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Specify Node ports to forward to workload** | Use to specify one or more local ports to forward to a container (pod). Click **Add** to display a block of **Port Forwarding Configuration** settings. |
| **Container Port** | Required. Do not enter the same port number used by another system service or container. See [Default Ports]({{< relref "DefaultPorts.md" >}}) for a list of assigned ports in TrueNAS. |
| **Node Port** | Required. Enter a node port number over **9000**. |
| **Protocol** | Select the protocol from the dropdown list. Options are **TCP Protocol** or **UDP Protocol**.  |
{{< /truetable >}}
{{< /expand >}}

### Storage Settings
The **Storage** settings specify persistent host paths and share data that separate from the lifecycle of the container. 
Create the storage volumes in SCALE and set the host path volume to a dataset and directory path. 
You can mount SCALE storage locations inside the container with host path volumes. Define the path to the system storage and the container internal path for the system storage location to appear.
For more details, see the [Kubernetes HostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).
Users can create additional Persistent Volumes (PVs) for storage within the container. 
PVs consume space from the pool chosen for application management. To do this, name each new dataset and define a path where that dataset appears inside the container.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppScreenStorage.png" alt="Storage Settings" id="11: Storage Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< trueimage src="/images/SCALE/23.10/InstallCustomAppAddHostPathVol.png" alt="Host Path Volume Settings" id="12: Host Path Volume Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Path Volumes** | Use to configure a persistent host path volume. Click **Add** to display a block of **Host Path Volume** settings. |
| **Host Path** | Required. Enter or click <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span> **/mnt** to browse to the location of the dataset to populate the **Mount Path**. Click on the dataset to select and display it in the **Mount Path** field. |
| **Mount Path** | Required. Enter the <file>**/data**</file> directory where the host path mounts inside the pod. |
| **Read Only** | Select to make the mount path inside the pod read-only and prevent using the container to store data. Kubernetes recommends scoping it to only require file or directory and mounting it as read only. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppAddMemoryBackedVol.png" alt="Memory Backed Volume Settings" id="13: Memory Backed Volume Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Memory Backed Volumes** | Use to configure a Kubernetes emptydir volume that mounts inside the pod. Click **Add** to display a block of **Memory Backed Volume** settings. |
| **Mount Path** | Required. Enter the path where the Kubernetes emptydir volume mounts inside the pod. |
| **Size Limit** | Optional. Enter the size of the volume. Use the format, *100Mi, 1Gi, 2Gi*, etc. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppAddStorageVolumes.png" alt="Volume Settings" id="14: Volume Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Volumes** | Use to configure a persistent volume that mounts inside the pod. Click **Add** to display a block of **Volumes** settings. Click again to add another block of settings. |
| **Mount Path** | Required. Enter the path where the persistent volume mounts inside the pod. |
| **Dataset Name** | Required. Enter the name of the dataset created for the storage volume. |
{{< /truetable >}}

{{< /expand >}}

### Workload Details Settings
**Workload Details** settings specify how to deploy workloads in the container (pod). 
Kubernetes defines workloads as applications running in the pod.
**Workload Details** settings specify if containers in a pod run with TTY or STDIN enabled, allow enabling any device on the host or configuring host capabilities, and if you run the container as a user or group.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppAddWorkloadDetails.png" alt="Workload Details Settings" id="15: Workload Details Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable TTY** | Select to set containers in a pod to run with TTY (text typed) enabled. Disabled by default. |
| **Enable STDIN** | Select to set containers in a pod to run with STDIN (standard input) enabled. Disabled by default. |
| **Privileged Mode** | By default, a container cannot access any devices on the host. With **Privileged Mode** enabled, the container has access to all devices on the host, which allows the container nearly all the same access as processes running on the host. |
| **Capabilities** | Click **Add** to display an **Add Capability** field. Click again to add another field. |
| **Add Capability** | Enter a capability. |
| **Configure Container User and Group ID** | Select to display the **Run Container as User** and **Run Container as Group** settings to add security context (`runAsUser` and `runAsGroup` variables). |
| **Run Container As User** | Enter a numeric user ID for the container. Default is **568**. |
| **Run Container as Group** | Enter a numeric group ID for the container. Default is **568**. |
{{< /truetable >}}
{{< /expand >}}

### Scaling/Upgrade Strategy Settings
**Scaling/Upgrade Strategy** settings configure how application upgrades replace pods.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppScalingUpgradePolicy.png" alt="Scaling/Upgrade Strategy Settings" id="16: Scaling/Upgrade Strategy Settings" >}}

Select **Create new pods and then kill the old ones** to recreate the container. 
This retains the existing configuration and container until the upgrade completes before removing it.

Select **Kill existing pods before creating new ones** to do rolling upgrades. 
This removes the existing pod and start with a newly updated pod. 
Killing existing pods is useful if your old pod is not functioning properly. 
For fewer issues, select **Kill existing pods before creating new ones**.

### Resource Reservation Settings
**Resource Reservation** settings configure GPU devices detected by the system.
Settings only display if the system detects the GPU device.

Select the device on the **Select GPU** dropdown list of devices.
Settings vary based on the device selected.

### Resource Limits Settings

**Resource Limits** settings specify the CPU and memory limits to place on the Kubernetes pod. 

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppAddResourceLimits.png" alt="Resource Limits Settings" id="17: Resource Limits Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Pod resource limits** | Select to enable resource limits and display the **CPU Limit** and **Memory Limit** settings. |
| **CPU Limit** | Enter the integer values with the suffix m (mill) you want to use to limit the CPU resource. For example, 1000m, 100m, etc. |
| **Memory Limit** | Enter the number of bytes you want to limit memory to. Follow the number with the quantity suffix, like E, P, T, G, M, k or Ei, Pi, Ti, Mi, Gi, Ki. For example, 129e6, 129m, 12897484800m, 123Mi, etc. |
{{< /truetable >}}
{{< /expand >}}

### Portal Configuration Settings

The **Portal Configuration** settings configure the web UI portal for the container.

Select **Enable WebUI Portal (only supported in TrueNAS SCALE Bluefin)** to display the web portal configuration settings.

{{< trueimage src="/images/SCALE/23.10/InstallCustomAppAddPortalConfiguration.png" alt="Portal Configuration Settings" id="18: Portal Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Portal Name** | Enter a UI portal name to use and display in the UI. For example, *MyAppLogin*. |
| **Protocol for Portal** | Select the web protocol to use for the portal from the dropdown list. Options are **HTTP** or **HTTPS**. |
| **Port** | Enter the port number to use for portal access. The port number the app uses should be in the documentation provided by the application provider/developer. Check the port number against the list of [Default Ports]({{< relref "DefaultPorts.md" >}}) to make sure TrueNAS is not using it for some other purpose. |
{{< /truetable >}}
{{< /expand >}}

{{< taglist tag="scaledocker" limit="10" title="Related Custom App Articles" >}}
