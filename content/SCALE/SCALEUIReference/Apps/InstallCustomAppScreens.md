---
title: "Install Custom App Screen"
description: "Provides information on the Install Custom App screen and configuration settings."
weight: 25
aliases:
 - /scale/scaleuireference/apps/launchdockerimagescreens/
 - /scale/scaletutorials/apps/docker/
tags:
- customapp
---

{{< include file="/static/includes/CustomAppEE.md" >}}

The **Custom App** button on the [**Discover**]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}) applications screen opens the **[Install iX App](#install-ix-app-screen)** screen with a guided installation wizard.
The <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** button opens the **[Custom App](#custom-app-screen)** screen with an advanced YAML editor for deploying apps using Docker Compose.

## Install iX App Screen

The **Install iX App** screen allows you to configure third-party applications using Docker settings.
Use the wizard to configure applications not included in the official catalog.
The **Custom App** button on the **Discover** application screen opens the **Install iX App** configuration wizard.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenNameAndImage.png" alt="Install iX App Screen" id="Install iX App Screen" >}}

The panel on the right of the screen links to each setting area.
Click on a heading or setting to jump to that area of the screen.
Click in the **Search Input Fields** to see a list of setting links.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppTOC.png" alt="Install Custom App Toc" id="Install Custom App ToC" >}}

Settings are grouped into **Application Name**, **Image Configuration**, **Container Configuration**, **Security Context Configuration**, **Network Configuration**, **Portal Configuration**, **Storage Configuration**, and **Resources Configuration** sections.

### Application Name Settings

**Application Name** has two required settings, **Application Name** and **version**.
After completing the installation these settings are not editable.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppApplicationName.png" alt="Application Name Settings" id="Application Name Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Application Name** | Enter a name for the application. The name must have lowercase alphanumeric characters, begin with an alphabet character, and can end with an alphanumeric character. The name can contain a hyphen (-) but not as the first or last character in the name. For example, use *chia-1* but not *-chia1* or *1chia-* as a valid name. |
| **Version** | Displays the current version of the iX-App chart. Accept the default number. |
{{< /truetable >}}
{{< /expand >}}

### Image Configuration Settings

**Image Configuration** settings specify the container image details.
They define the image, tag, and when TrueNAS pulls the image from the remote repository.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerImages.png" alt="Image Configuration Settings" id="Image Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Repository** | Required. Enter the Docker image repository name. For example, *plexinc/pms-docker* for Plex.|
| **Tag** | Enter the tag to use for the specified image. For example, *public* for Plex. Or accept the default *latest*. |
| **Pull Policy** | Select the Docker image pull policy from the dropdown list. Options are **Only pull image if not present on host** (default option), **Always pull image even if present on host**, and **Never pull image even if it's not present on host**. |
{{< /truetable >}}
{{< /expand >}}

### Container Configuration Settings

**Container Configuration** settings specify the [entrypoints](https://docs.docker.com/reference/dockerfile/#entrypoint), [commands](https://docs.docker.com/reference/dockerfile/#cmd), timezone, [environment variables](https://docs.docker.com/reference/dockerfile/#env), and restart policy to use for the image.
These can override any existing variables stored in the image.
Check the documentation for the application you want to install for entrypoints, commands, or variables you need to enter.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerEntrypoint.png" alt="Container Configuration Settings" id="Container Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Entrypoint** | Click **Add** to display a container entrypoint field. Enter an entrypoint in either the exec form, for example `ENTRYPOINT ["top", "-b"]`. Click **Add** again to enter another entrypoint variable. |
| **Command** | Click **Add** to display a container command field. Enter an command in either the exec form, for example `CMD ["executable","param1","param2"]`. Click **Add** again to enter another command. |
| **Timezone** | Use the dropdown to select a timezone setting for the container. |
| **Environment Variables** | Click **Add** to display a block of **Container Environment Variables**. Click **Add** again to enter another set of environment variables. |
| **Name** | Enter the environment variable name or key. For example, enter `MY_NAME`. |
| **Value** | Enter the value for the variable specified in **Environment Variable Name**. For example, enter  `"John Doe"`, `John\ Doe`, or `John`. |
| **Restart Policy** | Use the dropdown to select a restart policy to use for the container. Options are **No - Does not restart the container under any circumstances.**, **Unless Stopped - Restarts the container irrespective of the exit code but stops restarting when the service is stopped or removed.**, **On Failure - Restarts the container if the exit code indicates an error.**, and **Always - Restarts the container until its removal.**. |
| **Disable Builtin Healthcheck** | Select to disable the built-in `HEALTHCHECK` defined in the image, for example to address performance or compatibility requirements. |
| **TTY** | Select to enable a pseudo-TTY (or pseudo-terminal) for the container. |
| **Stdin** | Select to keep the standard input (stdin) stream for the container open, for example for an interactive application that needs to remain ready to accept input. |
{{< /truetable >}}
{{< /expand >}}

### Security Context Configuration Settings

**Security Context Configuration** settings allow you to run the container in [privileged mode](https://docs.docker.com/reference/cli/docker/container/run/#privileged), grant the container [Linux kernel capabilities](https://docs.docker.com/engine/containers/run/#runtime-privilege-and-linux-capabilities), or define a user to run the container.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppSecurityContextConfiguration.png" alt="Security Context Configuration Settings" id="Security Context Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Privileged** | Select to run the container in privileged mode. <br> By default, a container cannot access any devices on the host. With **Privileged** enabled, the container has access to all devices on the host, which allows the container nearly all the same access as processes running on the host. Be cautious if enabling privileged mode. A more secure solution is to use **Capabilities** to grant limited access to system processes as needed. |
| **Capabilities** | Click **Add** to display a container capability field. Enter a [Linux capability](https://man7.org/linux/man-pages/man7/capabilities.7.html) to enable, for example, enter `CHOWN`. Click **Add** again to enter another capability. |
| **Custom User** | Select to display the **User ID** and **Group ID** fields. |
| **User ID** | Displays when **Custom User** is selected. Enter the numeric UID of the user that runs the container. Defaults to **568** (apps). |
| **Group ID** | Displays when **Custom User** is selected. Enter the numeric GID of the group that runs the container. Defaults to **568** (apps). |
{{< /truetable >}}
{{< /expand >}}

### Network Configuration Settings

**Network Configuration** settings specify network, ports, and DNS servers if the container needs a custom networking configuration.

See the [Docker documentation](https://docs.docker.com/engine/network/drivers/host/) for more details on host networking.

Use port forwarding to reroute container ports that default to the same port number used by another system service or container.
See [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned ports in TrueNAS.
See the Docker [Container Discovery](https://docs.docker.com/engine/network/drivers/overlay/#container-discovery) documentation for more on overlaying ports.

By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/engine/network/#dns-services) for more details.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworking.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Network** | Select to bind the container to the TrueNAS host network. When bound to the host network, the container does not have a unique IP-address, so port-mapping is disabled. |
| **Ports** | Click **Add** to display a block of port configuration fields to specify the port values and transfer protocol. Click again to add additional port mappings. |
| **Container Port** | Enter a port number in the container. Refer to the application documentation for default port values. |
| **Host Port** | Enter an open port number on the TrueNAS host. |
| **Protocol** | Select the protocol from the dropdown list. Options are **TCP** or **UDP**. |
| **Nameservers** | Use to add one or more IP addresses to use as DNS servers for the container. Click **Add** to the right of **Nameservers** to display a **Nameserver** entry field. Click again to add another name server. |
| **Nameserver** | Enter the IP address of the name server. |
| **Search Domains** | Use to add one or more DNS search domains to search non-fully qualified hostnames. Click **Add** to display a **Search Domain** field to enter the domain you want to configure. Click again to add another search domain. See [search](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) in the Linux documentation for more information. |
| **Search Domain** | Enter the search domain you want to configure. For example, *mydomain.com*. |
| **DNS Options** | Use to add one or more key-value pairs to control various aspects of query behavior DNS resolution. Click **Add** to display an **Option** field. Click again to add another option. See [options](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) in the Linux documentation for more information. |
| **Option** | Enter a key-value pair representing a DNS option and its value. For example, *ndots:2*. |
{{< /truetable >}}
{{< /expand >}}












### Portal Configuration Settings

The **Portal Configuration** settings configure the web UI portal for the container.

Select **Enable WebUI Portal (only supported in TrueNAS Bluefin)** to display the web portal configuration settings.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddPortalConfiguration.png" alt="Portal Configuration Settings" id="Portal Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Portal Name** | Enter a UI portal name to use and display in the UI. For example, *MyAppLogin*. |
| **Protocol for Portal** | Select the web protocol to use for the portal from the dropdown list. Options are **HTTP** or **HTTPS**. |
| **Port** | Enter the port number to use for portal access. The port number the app uses should be in the documentation provided by the application provider/developer. Check the port number against the list of [Default Ports](https://www.truenas.com/docs/references/defaultports/) to make sure TrueNAS is not using it for some other purpose. |
{{< /truetable >}}
{{< /expand >}}

### Storage Configuration Settings

The **Storage Configuration** settings specify persistent host paths and share data that separate from the lifecycle of the container.
Create the storage volumes in TrueNAS and set the host path volume to a dataset and directory path.
You can mount TrueNAS storage locations inside the container with host path volumes. Define the path to the system storage and the container internal path for the system storage location to appear.
For more details, see the [Kubernetes HostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).

Users can create additional Persistent Volumes (PVs) for storage within the container.
PVs consume space from the pool chosen for application management. To do this, name each new dataset and define a path where that dataset appears inside the container.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenStorage.png" alt="Storage Configuration Settings" id="Storage Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddHostPathVol.png" alt="Host Path Volume Settings" id="Host Path Volume Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Path Volumes** | Use to configure a persistent host path volume. Click **Add** to display a block of **Host Path Volume** settings. |
| **Host Path** | Required. Enter or click <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span> **/mnt** to browse to the location of the dataset to populate the **Mount Path**. Click on the dataset to select and display it in the **Mount Path** field. |
| **Mount Path** | Required. Enter the <file>**/data**</file> directory where the host path mounts inside the pod. |
| **Read Only** | Select to make the mount path inside the pod read-only and prevent using the container to store data. Kubernetes recommends scoping it to only require file or directory and mounting it as read only. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddMemoryBackedVol.png" alt="Memory Backed Volume Settings" id="Memory Backed Volume Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Memory Backed Volumes** | Use to configure a Kubernetes emptydir volume that mounts inside the pod. Click **Add** to display a block of **Memory Backed Volume** settings. |
| **Mount Path** | Required. Enter the path where the Kubernetes emptydir volume mounts inside the pod. |
| **Size Limit** | Optional. Enter the size of the volume. Use the format, *100Mi, 1Gi, 2Gi*, etc. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddStorageVolumes.png" alt="Volume Settings" id="Volume Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Volumes** | Use to configure a persistent volume that mounts inside the pod. Click **Add** to display a block of **Volumes** settings. Click again to add another block of settings. |
| **Mount Path** | Required. Enter the path where the persistent volume mounts inside the pod. |
| **Dataset Name** | Required. Enter the name of the dataset created for the storage volume. |
{{< /truetable >}}

{{< /expand >}}

### Resources Configuration Settings







### Resource Reservation Settings

**Resource Reservation** settings configure GPU device allocation for application processes.
Settings only display if the system detects available GPU device(s).

Select the number of devices to allocate from the **Select GPU** dropdown list of devices.
See Allocating GPU]( relref "/content/truenasapps/_index.md#allocating-gpu"  for more information.

### Resource Limits Settings

**Resource Limits** settings specify the CPU and memory limits to place on the Kubernetes pod.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddResourceLimits.png" alt="Resource Limits Settings" id="Resource Limits Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Pod resource limits** | Select to enable resource limits and display the **CPU Limit** and **Memory Limit** settings. |
| **CPU Limit** | Enter the integer values with the suffix m (mill) you want to use to limit the CPU resource. For example, 1000m, 100m, etc. |
| **Memory Limit** | Enter the number of bytes you want to limit memory to. Follow the number with the quantity suffix, like E, P, T, G, M, k or Ei, Pi, Ti, Mi, Gi, Ki. For example, 129e6, 129m, 12897484800m, 123Mi, etc. |
{{< /truetable >}}
{{< /expand >}}
### Scaling/Upgrade Strategy Settings

**Scaling/Upgrade Strategy** settings configure how application upgrades replace pods.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppScalingUpgradePolicy.png" alt="Scaling/Upgrade Strategy Settings" id="Scaling/Upgrade Strategy Settings" >}}

Select **Create new pods and then kill the old ones** to recreate the container.
This retains the existing configuration and container until the upgrade completes before removing it.

Select **Kill existing pods before creating new ones** to do rolling upgrades.
This removes the existing pod and start with a newly updated pod.
Killing existing pods is useful if your old pod is not functioning properly.
For fewer issues, select **Kill existing pods before creating new ones**.

## Custom App Screen

The **Custom App** screen allows you to configure third-party applications using Docker Compose YAML syntax.
Use the YAML editor to configure applications not included in the official catalog.
The <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** button opens the **Custom App** screen.
