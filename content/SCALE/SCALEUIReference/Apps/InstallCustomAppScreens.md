---
title: "Custom App Screens"
description: "Provides information on the Install Custom App screen and configuration settings."
weight: 25
aliases:
 - /scale/scaleuireference/apps/launchdockerimagescreens/
 - /scale/scaletutorials/apps/docker/
tags:
- customapp
---

**Custom App** on the [**Discover**]({{< relref "SCALE/SCALEUIReference/Apps/_index.md" >}}) screen opens the **[Install iX App](#install-ix-app-screen)** guided installation wizard.
<i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** opens the **[Add Custom App](#add-custom-app-screen)** screen with an advanced YAML editor for deploying apps using Docker Compose.

## Install iX App Screen

The **Install iX App** screen allows you to configure third-party applications using Docker settings.
Use the wizard to configure applications not included in the official catalog.

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
| **Version** | Displays the current version of iX-App. Accept the default number. |
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
| **Repository** | (Required) Enter the Docker image repository name. For example, *plexinc/pms-docker* for Plex.|
| **Tag** | Enter the tag to use for the specified image. For example, *public* for Plex. Or accept the default *latest*. |
| **Pull Policy** | Select the Docker image pull policy from the dropdown list. Options are **Only pull image if not present on host** (default option), **Always pull image even if present on host**, and **Never pull image even if it's not present on host**. |
{{< /truetable >}}
{{< /expand >}}

### Container Configuration Settings

**Container Configuration** settings specify the [entrypoint](https://docs.docker.com/reference/dockerfile/#entrypoint), [commands](https://docs.docker.com/reference/dockerfile/#cmd), timezone, [environment variables](https://docs.docker.com/reference/dockerfile/#env), and restart policy to use for the image.
These can override any existing variables stored in the image.
Check the documentation for the application you want to install for required entrypoints, commands, or variables.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerEntrypoint.png" alt="Container Configuration Settings" id="Container Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Entrypoint** | Click **Add** to display a new field. Each field is an item in the ENTRYPOINT list in exec format. For example, to enter `ENTRYPOINT ["top", "-b"]`, enter `top` in the first **Entrypoint** field. Click **Add** again. Enter `-b` in the second field. |
| **Command** | Click **Add** to display a new field. Each field is an item in the CMD list in exec format. For example, to enter `CMD ["echo", "hello world"]`, enter `echo` in the first **Command** field. Click **Add** again. Enter `hello world` in the second field. |
| **Timezone** | Use the dropdown to select a timezone setting for the container or begin typing the timezone to see a narrowed list of options to select from. |
| **Environment Variables** | Click **Add** to display a block of environment variables. Click **Add** again to enter another set of environment variables. |
| **Name** | Enter the environment variable name or key. For example, enter `MY_NAME`. |
| **Value** | Enter the value for the variable specified in **Environment Variable Name**. For example, enter  `John Doe`, `John\ Doe`, or `John`. |
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
| **Search Domains** | Use to add one or more DNS domains to search non-fully qualified host names. Click **Add** to display a **Search Domain** field to enter the domain you want to configure. Click again to add another search domain. See the Linux [search](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) documentation for more information. |
| **Search Domain** | Enter the search domain you want to configure. For example, *mydomain.com*. |
| **DNS Options** | Use to add one or more key-value pairs to control various aspects of query behavior and DNS resolution. Click **Add** to display an **Option** field. Click again to add another option. See the Linux [options](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) documentation for more information. |
| **Option** | Enter a key-value pair representing a DNS option and its value. For example, *ndots:2*. |
{{< /truetable >}}
{{< /expand >}}

### Portal Configuration Settings

The **Portal Configuration** settings configure the web UI portal for the container.

Click **Add** to display the web portal configuration settings.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddPortalConfiguration.png" alt="Portal Configuration Settings" id="Portal Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a UI portal name to use and display in the UI. For example, *MyAppPortal*. |
| **Protocol** | Select the web protocol to use for the portal from the dropdown list. Options are **HTTP** or **HTTPS**. |
| **Use Node IP** | Select to use the TrueNAS node, or host, IP address to access the portal. Selected by default. |
| **Host** | Displays when **Use Node IP** is not selected. Enter a host name or an internal IP within your local network, for example *my-app-service.local* or an internal IP address. |
| **Port** | Enter the port number to use for portal access. The port number the app uses should be in the documentation provided by the application provider/developer. Check the port number against the list of [Default Ports](https://www.truenas.com/docs/references/defaultports/) to make sure TrueNAS is not using it for some other purpose. |
| **Path** | Enter the path for portal access, for example */admin*. Defaults to */*. The path is appended to the host IP and port, as in **truenas.local:15000/admin**. |
{{< /truetable >}}
{{< /expand >}}

### Storage Configuration Settings

The **Storage Configuration** settings specify persistent storage paths and share data claims separate from the lifecycle of the container.
For more details, see the [Docker storage documentation](https://docs.docker.com/engine/storage/).

You can mount TrueNAS storage locations inside the container with host path volumes.
Create the storage volumes in TrueNAS and set the host path volume to a dataset and directory path.
Define the path to the system storage and the container internal path for the system storage location to appear.
Alternatively, select **ixVolume** to allow TrueNAS to create a dataset on the apps storage pool.
Both **Host Path** and **ixVolume** attach container storage as a bind mount.
See Docker [Bind Mount](https://docs.docker.com/engine/storage/bind-mounts/) documentation for more information.

Users can create additional SMB share volume claims within the container to access an SMB share.
Share volumes consume space from the pool chosen for application management.

Finally, **Tmpfs** allows the container to utilize a temporary directory on the RAM.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenStorage.png" alt="Storage Configuration Settings" id="Storage Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}

Click **Add** to display a block of storage configuration settings.
Click again to mount an additional storage volume.

Select an option from the **Type** dropdown:

{{< expand "Host Path (Path that already exists on the system)" "v" >}}
Use to configure a persistent host path.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddHostPathVol.png" alt="Host Path Settings" id="Host Path Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read Only** | Select to make the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | (Required) Enter the <file>**path/to/directory**</file> where the host path mounts inside the container. |
| **Enable ACL** | Select to enable custom Access Control List (ACL) entries for the container mount and display ACL settings fields. |
| **Host Path** | (Required) Enter a path or click <span class="material-icons">arrow_right</span> to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> **/mnt** to browse to the location of the dataset to populate the **Host Path**. Click on the dataset to select and display it in the **Host Path** field. |
| **ACL Entries** | Displays when **Enable ACL** is selected. <br> Click **Add** to display a block of ACL entry settings. |
| **ID Type** | Displays when **Enable ACL** is selected and **Add** is clicked. <br> Select **Entry is for a USER** or **Entry is for a GROUP**. |
| **ID** | Displays when **Enable ACL** is selected and **Add** is clicked. <br> Enter the numeric UID or GID, matching the selected **ID Type**. |
| **Access** | Displays when **Enable ACL** is selected and **Add** is clicked. <br> Select the level of access privileges to assign to the user or group matching the **ID**. Options are **Read Access**, **Modify Access**, or **FULL_CONTROL Access**. |
| **Force Flag** | Displays when **Enable ACL** is selected. <br> Select to apply the configured ACL settings to a directory containing existing data. |
{{< /truetable >}}

{{< /expand >}}

{{< expand "ixVolume (Dataset created automatically by the system)" "v" >}}
Use to configure a storage mount for a system created dataset on the applications pool.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddixVolume.png" alt="ixVolume Settings" id="ixVolume Settings" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Select to make the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | (Required) Enter the <file>**path/to/directory**</file> where the ixVolume mounts inside the container. |
| **Enable ACL** | Select to enable custom Access Control List (ACL) entries for the container mount and display ACL settings fields. |
| **Dataset Name** | Enter a name for the dataset that is created and used for storage. |
| **ACL Entries** | Displays when **Enable ACL** is selected. <br> Click **Add** to display a block of ACL entry settings. |
| **ID Type** | Displays when **Enable ACL** is selected and **Add** is clicked. <br> Select **Entry is for a USER** or **Entry is for a GROUP**. |
| **ID** | Displays when **Enable ACL** is selected and **Add** is clicked. <br> Enter the numeric UID or GID, matching the selected **ID Type**. |
| **Access** | Displays when **Enable ACL** is selected and **Add** is clicked. <br> Select the level of access privileges to assign to the user or group matching the **ID**. Options are **Read Access**, **Modify Access**, or **FULL_CONTROL Access**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "SMB/CIFS Share (Mounts a volume to a SMB share)" "v" >}}
Use to mount an SMB share with a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddSMB.png" alt="SMB/CIFS Share Settings" id="SMB/CIFS Share Settings" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Select to make the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | (Required) Enter the <file>**path/to/directory**</file> where the share volume mounts inside the container. |
| **Server** | (Required) Enter the IP address for the SMB server, for example *192.168.1.100*. This can be the TrueNAS host. |
| **Path** | (Required) Enter the name of the SMB share, for example *my-share*. |
| **Username** | (Required) Enter the username of an account with permission to access the SMB share. |
| **Password** | (Required) Enter the password for the account in **Username**. |
| **Domain** | Enter the directory services domain. Only required if the domain is something other than the TrueNAS default `WORKGROUP`, for example on systems with Active Directory configured.  |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Tmpfs (Temporary directory created on the RAM)" "v" >}}
Use to configure a memory-backed temporary directory.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddMemoryBackedVol.png" alt="Tmpfs Settings" id="Tmpfs Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read Only** | Select to make the mount path inside the container read-only and prevent the app from using the path to store data. Not recommended for memory-backed storage. |
| **Mount Path** | (Required) Enter the path where the memory-backed directory mounts inside the container. |
| **Tmpfs Size Limit (in Mi)** | (Required) Enter the maximum size of the temporary directory in mebibytes. Defaults to *500*. |
{{< /truetable >}}
{{< /expand >}}
{{< /expand >}}

### Resources Configuration Settings

**Resources Configuration** settings configure resources for the container.

Resource limits specify the CPU and memory limits to place on the container.

**GPU Configuration** settings configure GPU device allocation for application processes.
Settings only display if the system detects available GPU device(s).
See [Allocating GPU](https://www.truenas.com/docs/truenasapps/#allocating-gpu) for more information.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddResourceLimits.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Resource Limits** | Select to enable resource limits and display the **CPUs** and **Memory (in MB)** settings. |
| **CPUs** | Enter the maximum number of CPU cores the container can access. For example, *2*. |
| **Memory (in MB)** | Enter the number of megabytes you want to limit memory to. For example, *4096*. |
| **Passthrough available (non-NVIDIA) GPUs** | Select to allow the passthrough of non-NVIDIA GPU devices to the container. |
| **Select NVIDIA GPU(s)** | Displays if compatible NVIDIA GPU device(s) are installed and detected. |
| **Use this GPU** | Select to allow passthrough of the specified NVIDIA device to the container. |
{{< /truetable >}}
{{< /expand >}}

## Add Custom App Screen

The **Add Custom App** screen allows you to configure third-party applications using Docker Compose YAML syntax.
Use the YAML editor to configure applications not included in the official catalog.
See the [Docker Compose overview](https://docs.docker.com/compose/) from Docker for more information.

{{< include file="/static/includes/apps/YAMLWarning.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppYAML.png" alt="Install Custom App via YAML" id="Install Custom App via YAML" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| Name | Enter a name for the application to be used in the TrueNAS UI. The name must use lowercase alphanumeric characters, start with an alphabetic character, and can end with alphanumeric character. A hyphen (`-`) is allowed but not as the first or last character, for example *abc123*, *abc*, *abcd-1232*, but not *-abcd*. |
| Custom Config | Enter a Docker Compose YAML file for the application. |
{{< /truetable >}}

Click **Save** to initiate app deployment.
