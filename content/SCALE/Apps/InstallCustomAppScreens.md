---
title: "Custom App Screens"
description: "Provides information on the Install Custom App screen and configuration settings."
weight: 50
aliases:
 - /scale/scaleuireference/apps/installcustomappscreens/
 - /scale/scaleuireference/apps/launchdockerimagescreens/

 - /scale/scaleuireference/apps/docker/
tags:
- customapp
doctype: reference
---

{{< include file="/static/includes/apps/AppsMarket.md" >}}

**Custom App** on the [**Discover**]({{< ref "SCALE/Apps" >}}) screen opens the **[Install Custom App](#install-custom-app-screen)** guided installation wizard.
<i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** opens the **[Add Custom App](#add-custom-app-screen)** screen with an advanced YAML editor for deploying apps using Docker Compose.

## Install Custom App Screen

The **Install Custom App** screen allows you to configure third-party applications using Docker settings.
Use the wizard to configure applications not included in the official catalog.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenNameAndImage.png" alt="Install Custom App Screen" id="Install Custom App Screen" >}}

The panel on the right of the screen links to each setting area.
Click on a heading or setting to jump to that area of the screen.
Click in the **Search Input Fields** to see a list of setting links.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppTOC.png" alt="Install Custom App Toc" id="Install Custom App ToC" >}}

Settings are grouped into **Application Name**, **Image Configuration**, **Container Configuration**, **Security Context Configuration**, **Network Configuration**, **Portal Configuration**, **Storage Configuration**, and **Resources Configuration** sections.

### Application Name Settings

**Application Name** has two required settings: **Application Name** and **version**.
After completing the installation, these settings are not editable.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppApplicationName.png" alt="Application Name Settings" id="Application Name Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Application Name** | Specifies the name for the application. When entering a new name, the name must have lowercase alphanumeric characters that begin with an alphabet character, and can end with an alphanumeric character. A name can contain a hyphen (-) but not as the first or last character in the name. For example, use *chia-1* but not *-chia1* or *1chia-* as a valid name. |
| **Version** | Shows the current version of iX-App. Accept the default number. |
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
| **Repository** | Specifies the Docker image repository nam. For example, *plexinc/pms-docker* for Plex.|
| **Tag** | Specifies the tag for the image, for example *public* for Plex, or accpet the default *latest*, which pulls the most recent version. For example, *public* for Plex. Or accept the default *latest*. |
| **Pull Policy** | Sets the Docker image pull policy. Default only pulls when not present. Options are **Only pull image if not present on host** (default option), **Always pull image even if present on host**, and **Never pull image even if it not present on host**. |
{{< /truetable >}}
{{< /expand >}}

### Container Configuration Settings updated

**Container Configuration** settings specify the [entrypoint](https://docs.docker.com/reference/dockerfile/#entrypoint), [commands](https://docs.docker.com/reference/dockerfile/#cmd), timezone, [environment variables](https://docs.docker.com/reference/dockerfile/#env), and restart policy to use for the image.
These can override any existing variables stored in the image.
Check the documentation for the application you want to install for required entrypoints, commands, or variables.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerEntrypoint.png" alt="Container Configuration Settings" id="Container Configuration Settings" >}}

**Add** to the right of configuration settings such as **Entrypoint**, **Command**, **Environment Variables**, and **Devices** shows additional setting options. Clicking **Add** again shows another block of settings.

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | Sets the hostname for the container. If not specified, the container name is used as the hostname. |
| **Entrypoint** | Specifies items in the ENTRYPOINT list in exec format. **Add** shows a blank field where you enter one entrypoint item in the ENTRYPOINT list. For example, to enter `ENTRYPOINT ["top", "-b"]`, enter `top` in the first blank field, and then click **Add** again to then enter `-b` in the second blank field. |
| **Command** | Adds items in exec format to the CMD list for the container. Each blank field added specfied one item like `echo` in field 1 and `hello world` in the second blank field for CMD ["echo", "hello world"]. |
| **Timezone** | Sets a timezone for the container. Select or begin typing a timezone to filter the list of options to select from. |
| **Environment Variables** | Specifies environment variables for the container based on what the app supports. Refer to documentation for the application for lists of supported environment variables. **Add** shows the **Name** and **Value** fields to enter the environment variables. |
| **Name** | Specifies the environment variable name or key. For example, enter `MY_NAME`. |
| **Value** | Specifies the value for the environment variable entered in **Name**, like John Doe or en_US.UTF-8. For example, enter  `John Doe`, `John\ Doe`, or `John`. |
| **Restart Policy** | Sets a restart policy to use for the container. Options are **No - Does not restart the container under any circumstances.**, **Unless Stopped - Restarts the container irrespective of the exit code but stops restarting when the service is stopped or removed.**, **On Failure - Restarts the container if the exit code indicates an error.**, and **Always - Restarts the container until its removal.**. |
| **Maximum Retry Count** | Sets the maximum number of retries allowed for a container to exit with an error code. Setting to zero keeps restarting the container on error exit. Shows when **Restart Policy** is set to **On Failure**. |
| **Disable Builtin Healthcheck** | Disables the built-in `HEALTHCHECK` defined in the image, for example to address performance or compatibility requirements. |
| **TTY** | Enables a pseudo-TTY (or pseudo-terminal) for the container. |
| **Stdin** | Keeps the standard input (stdin) stream for the container open, for example for an interactive application that needs to remain ready to accept input. |
| **Devices** | Specifies host and contanter devices that pass to the container. **Add** shows the **Host Devices** and **Container Device** required fields. |
| **Host Device** | Specifies the host device path to pass to the container. For example, */dev/ttyUSB0*. Required when adding a device. Shows after clicking **Add** to the right of **Devices**. |
| **Containter Device** | Specifies the device path inside the container. For example, */dev/ttyACM0*. Required when adding a device to the container. Shows after clicking **Add** to the right of **Devices**. |
{{< /truetable >}}
{{< /expand >}}

### Security Context Configuration Settings updated

**Security Context Configuration** settings allow you to run the container in [privileged mode](https://docs.docker.com/reference/cli/docker/container/run/#privileged), grant the container [Linux kernel capabilities](https://docs.docker.com/engine/containers/run/#runtime-privilege-and-linux-capabilities), or define a user to run the container.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppSecurityContextConfiguration.png" alt="Security Context Configuration Settings" id="Security Context Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
**Add** under **Capabilities** adds the **Capability** field. Clicking **Add** again shows another **Capability** field..

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Privileged** | Runs the container in privileged mode. Note that privileged mode grants the container nearly unrestricted access to the host system, providing full administrative access to the entire TrueNAS server. This includes access to alll devices,  privileged credentials, encryption keys, and all data. By default, containers cannot access host devices. With **Privileged** enabled, the container gains access to all host devices and system capabilities. Only enable privileged mode when absolutely necessary and when you fully trust the container source. A more secure solution is to use **Capabilities** to grant specific, limited permissions as needed. |
| **Capabilities** | Sets the Linux capability to enable like CHOWN or NET_ADMIN. Safer alternative to **Privileged** mode. Clicking **Add** shows the **Capability** field. Click **Add** again to enter another capability. |
| **Capability** | Specifies a linux capability to grant to the container rather than using **Privileged** mode. Enter a [Linux capability](https://man7.org/linux/man-pages/man7/capabilities.7.html) to enable, for example, enter `CHOWN`. |
| **Custom User** | Allows adding a run-as custom user and group ID to the container. Shows **User ID** and **Group ID** fields. |
| **User ID** | Specifies the numeric user ID (UID) of the user that runs the container. Default is 568 (apps). Only shows after selecting **Custom User**. |
| **Group ID** | Specifies the numeric group ID (GID) of the group that runs the container. Default 568 (apps). Only shows after selecting **Custom User**. |
{{< /truetable >}}
{{< /expand >}}

### Network Configuration Settings updated

**Network Configuration** settings specify network, ports, and DNS servers if the container needs a custom networking configuration.

See the [Docker documentation](https://docs.docker.com/engine/network/drivers/host/) for more details on host networking.

Use port forwarding to reroute container ports that default to the same port number used by another system service or container.
See [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned ports in TrueNAS.
See the Docker [Container Discovery](https://docs.docker.com/engine/network/drivers/overlay/#container-discovery) documentation for more on overlaying ports.

By default, containers use the DNS settings from the host system.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/engine/network/#dns-services) for more details.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworking.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

**Add** to the right of configuration settings such as **Ports**, **Networks**, **Nameservers**, **Search Domains**, and **DNS Options** shows additional setting fields to configure these areas. Clicking **Add** again shows another block of settings.

{{< expand "Network Configuration Settings Information" "v" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Network** | Binds the container to the TrueNAS host network. When bound to the host network, the container does not have a unique IP-address, so port-mapping is disabled. See Docker host networking documentation for more information. |
| **Port** | Sets the port number for portal access. Clicking **Add** to the right of **Ports** shows a block of port configuration fields to specify the port values and transfer protocol. Click again to add additional port mappings. |
{{< /truetable >}}

{{< expand "Ports Settings" "v" >}}

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworkingPortSettings.png" alt="Ports Settings" id="Ports Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Port Bind Mode** | Sets how the port is exposed. **Publish** makes the port available on the host for external access. **Expose** makes the port available for inter-container communication only. |
| **Host Port** | Specifies an open port number on the TrueNAS host. |
| **Container Port** | Specifies the port values and transfer protocol in the container. Refer to the application documentation for default port values. |
| **Protocol** | Sets the transfer protocol for the port mapping. Options are **HTTP** or **HTTPS**. |
| **Host IPs** | Specifies one or more IP addresses on the host to bind the port to when **Port Bind Mode** is set to **Publish**. Only shows when **Port Bind Mode** is set to **Publish**. **Add** shows the **Host IP** field. |
| **Host IP** | Sets the host IP to the address selected from the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Networks Settings" "v" >}}

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworkConfigNetworksSettings.png" alt="Networks Settings" id="Networks Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the name of an existing Docker network for the container to join. The network must already exist. |
| **Aliases (Optional)** | Specifies one or more optional network aliases for the container on this network. Clicking **Add** shows the **Alias** field. |
| **Alias** | Specified the optional network alias to add. for the container. Must be on the same network. |
| **Interface Name (Optional**) | Specifies the optional network interface name to use for this network. |
| **MAC Address (Otional)** | Specifies the otpional MAC address for the network interface. |
| **IPv4 Address (Optional)** | Specifies the optional IPv4 address for the network interface. |
| **IPv6 Address (Optional)** | Specifies the optional IPv6 address for the network interface. |
| **Gateway Priority (Optional)** | Sets the optional priority of the gateway for this network interface. |
| **Prioirty (Optional)** | Specifies the order which Compose connects the container services to its networks. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Custom DNS Setup Settings" "v" >}}
The **Custom DNS Setup** covers adding nameservers, search domains, and DNS options to the container.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworkConfigCustomDNSSetupSettings.png" alt="Networks Settings" id="Networks Settings" >}}

**Add** shows additional settings. Clicking **Add** again shows another block of settings.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Nameservers** | Specifies the IP address of the domain name system (DNS) server for the container. Default uses host DNS settings. Clicking **Add** shows the **Nameserver** field. |
| **Search Domains** |Specifies the DNS domain to search for non-fully qualified hostnames, for example, *mydomain.com*. For example, *mydomain.com*.  See the Linux [search](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) documentation for more information. Clicking **Search Domains** adds shows the **Search Domain** field.|
| **DNS Options** | Specifies DNS value pairs to control various aspects of query behavior and DNS resolution.S ee the Linux [options](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) documentation for more information. Clicking **Add** shows the **Option** field. |
| **Option** | Specifies a key-value pair representing a DNS option and its value. For example, *ndots:2*. |
{{< /truetable >}}
{{< /expand >}}
{{< /expand >}}

### Portal Configuration Settings

The **Portal Configuration** settings configure the web UI portal for the container.

**Add** shows the web portal configuration settings.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddPortalConfiguration.png" alt="Portal Configuration Settings" id="Portal Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Sets the UI portal name to display in the TrueNAS UI. For example, *MyAppPortal*.  Default is set to **Web UI**. |
| **Protocol** |Sets the web protocol for the portal. **HTTP** or **HTTPS**. |
| **Use Node IP** | Specifies the TrueNAS node, or host, IP address to access the portal. Selected by default. When disalbed, shows the **Host** field. |
| **Host** | Sets the hostname or internal IP address for portal access like *my-app-service.local* or an internal IP address. Only shows after disabling **Use Node IP**. |
| **Port** | Sets the port number for portal access. The port number the app uses should be in the documentation provided by the application provider/developer. Check the port number against the list of [Default Ports](https://www.truenas.com/docs/references/defaultports/) to make sure TrueNAS is not using it for some other purpose. |
| **Path** | Sets the path for portal access like */admin*. Appended to the host IP address and port. The path is appended to the host IP and port, as in *truenas.local:15000/admin*. |
{{< /truetable >}}
{{< /expand >}}

### Storage Configuration Settings

The **Storage Configuration** settings specify persistent or termporay storage paths and share data claims separate from the lifecycle of the container.
For more details, see the [Docker storage documentation](https://docs.docker.com/engine/storage/).

Host path volumes can mount TrueNAS storage locations inside the container. Refer to the [Installing Custom Apps](https://apps.truenas.com/managing-apps/installing-custom-apps/) tutorial for more information on configuring storage options.

**ixVolume** allows TrueNAS to create a dataset on the apps storage pool. These are intended for fast test deployments of applications and not for persistent storage.

Both **Host Path** and **ixVolume** attach container storage as a bind mount.
See Docker [Bind Mount](https://docs.docker.com/engine/storage/bind-mounts/) documentation for more information.

NFS and SMB share volume claims within the container access the NFS or SMB share.
Share volumes consume space from the pool chosen for application management.

**Tmpfs** allows the container to utilize a temporary directory on the RAM, and are intended of log usage that does not need to persist.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenStorage.png" alt="Storage Configuration Settings" id="Storage Configuration Settings" >}}

**Add** shows a block of storage configuration settings. Clicking **Add** again shows another set of storage configuration settings.

{{< expand "Host Path (Path that already exists on the system) Settings" "v" >}}
Shows the setting options to configure a persistent host path.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddHostPathVol.png" alt="Host Path Settings" id="Host Path Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type**  | Sets the storage option used in the container and the settings shown by that type. Options: **ixVolume (dataset created automatically by the system)**, **Host Path (Path that already exists on the system)**, **SMB/CIFS Share (Mounts a vlume to a SMB Share)**, **NFS Share (Mounts a volum eto a NFS share)**, or **Tmpfs (Temporary Directory created on the RAM)**. |
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Sets the required <file>**path/to/directory**</file> where the host path mounts inside the container. Using the file browser to select the **Host Path** can populate the **Mount Path**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand " Enable ACL Settings" "v">}}
These setting show when **Type** is set to host path or ixVolume.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppEnableACLSettings.png" alt="Enable ACL Settings" id="Enable ACL Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable ACL** | Sets up custom Access Control List (ACL) entries for the container mount. It shows the **ACL Configuration** settings fields. |
| **Host Path** | Sets the path to the existing dataset, or click <span class="material-icons">arrow_right</span> to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> **/mnt** to browse to the location of the dataset to populate the **Host Path**. Click on the dataset to select and display it in the **Host Path** field.  After selecting a dataset in the file browser the **Create Dataset** option becomes available and allows adding a new dataset under the selected dataset. |
| **Create Dataset** | Opens a dialog that allows you to add a new dataset under the dataseet selected in the apps storage file browser. Activates after selecting a dataset in the file browser. |
| **ACL Entries** | Shows the ACL settings to create a custom ACL for the storage volume. Shows the **ACL Entries** option and **Add** button. Clicking **Add** shows the **ID Type**, **ID** and **Access** fields that define the ACL entry. |
| **ID Type** | Sets the type of entry defined. Options are **Entry is for a USER** or **Entry is for a GROUP**. Shows after enabling **Enable ACL** and clicking **Add**. |
| **ID** | Specifies the numeric UID or GID, matching the selected **ID Type**. Shows after enabling **Enable ACL** and clicking **Add**. |
| **Access** | Sets the level of access privileges to assign to the user or group matching the **ID**. Options are **Read Access**, **Modify Access**, or **FULL_CONTROL Access**. Shows after enabling **Enable ACL** and clicking **Add**. |
| **Force Flag** | Applies the configured ACL settings to a directory containing existing data. Shows after enabling **Enable ACL** and clicking **Add**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "ixVolume (Dataset created automatically by the system)" "v" >}}
Use to configure a storage mount for a system-created dataset on the application pool.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddixVolume.png" alt="ixVolume Settings" id="ixVolume Settings" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Sets the required <file>**path/to/directory**</file> where the ixVolume mounts inside the container. ixVolumes are typically created inside the **ix-apps** dataset and hidden by default. |
| **Dataset Name** | Specifies the name of the datast to use for storage. The default is **storage_entry**.  to enable custom Access Control List (ACL) entries for the container mount and display ACL settings fields. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "SMB/CIFS Share (Mounts a volume to a SMB share)" "v" >}}
Use to mount an SMB share with a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddSMB.png" alt="SMB/CIFS Share Settings" id="SMB/CIFS Share Settings" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Specifies the required <file>**path/to/directory**</file> where the share volume mounts inside the container. |
| **Server** | Specifies the required IP address for the SMB server, for example *192.168.1.100*. This can be the TrueNAS host. |
| **Path** | Specifies the required name of the SMB share, for example *my-share*. |
| **Username** | Specifies the required username of an account with permission to access the SMB share. |
| **Password** | Specifies the required the password for the account in **Username**. |
| **Domain** | Specifies the directory services domain. Only required if the domain is something other than the TrueNAS default `WORKGROUP`, for example on systems with Active Directory configured.  |
{{< /truetable >}}
{{< /expand >}}

{{< expand "NFS Share (Mounts a volume to a NFS share)" "v" >}}
Use to mount an NFS share with a Docker [volume](https://docs.docker.com/engine/storage/#volumes).

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddNFS.png" alt="NFS Share Settings" id="NFS Share Settings" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. |
| **Mount Path** | Specifies the required <file>**path/to/directory**</file> where the share volume mounts inside the container. |
| **Server** | Specifies the required IP address for the NFS server, for example *192.168.1.100*. This can be the TrueNAS host. |
| **Path** | Specifies the required name of the NFS share, for example *my-share*. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Tmpfs (Temporary directory created on the RAM)" "v" >}}
Use to configure a memory-backed temporary directory.
See the Docker [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) documentation for more information.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddMemoryBackedVol.png" alt="Tmpfs Settings" id="Tmpfs Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read Only** | Makes the mount path inside the container read-only and prevent the app from using the path to store data. Not recommended for memory-backed storage. |
| **Mount Path** | Specifies the required path where the memory-backed directory mounts inside the container. |
| **Tmpfs Size Limit (in Mi)** | Sets the required maximum size of the temporary directory in mebibytes. Defaults to *500*. |
{{< /truetable >}}
{{< /expand >}}

### Label Configuration

The **Label Configuration** settings allow creating custom key-falue pairs attached to a container as metadata. Thsee are informational tags used to organize, identify, and filter containers. Common uses include marking which app or environment a container belongs to, noting a version or owner, or letting external tools (monitoring, orchestration, backup scripts) select the containers by label instead of by name or ID.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppLabelConfig.png" alt="Label Configuration Settings" id="Label Configuration Settings" >}}

**Add** shows the label settings.

**Key** sets the label key for the container.

**Value** sets the label value paired with the label key.

### Resources Configuration Settings

**Resources Configuration** settings configure resources for the container. Resource limits specify the CPU and memory limits to place on the container.

**GPU Configuration** settings configure GPU device allocation for application processes.
Settings only show if the system detects available GPU device(s).
See [GPU Passthrough](https://apps.truenas.com/managing-apps/installing-apps/#gpu-passthrough) for more information.

{{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddResourceLimits.png" alt="Resources Configuration Settings" id="Resources Configuration Settings" >}}

{{< expand "Settings Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Resource Limits** | Allows configuring resource limits and shows the **CPUs** and **Memory (in MB)** settings. |
| **CPUs** | Sets the maximum number of CPU cores the container can access. For example, *2*. |
| **Memory (in MB)** | Specifies the number of megabytes in the memory limit applied to the container. For example, *4096*. Only shows after selecdting **Enable Resource Limits**. |
| **Passthrough available (non-NVIDIA) GPUs** | Allows the passthrough of non-NVIDIA GPU devices to the container. |
| **Select NVIDIA GPU(s)** | Shows if compatible NVIDIA GPU device(s) are installed and detected. |
| **Use this GPU** | Allows passthrough of the specified NVIDIA device to the container. |
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
| **Name** | Specifies a name for the application to be used in the TrueNAS UI. The name must use lowercase alphanumeric characters, start with an alphabetic character, and can end with alphanumeric character. A hyphen (`-`) is allowed but not as the first or last character, for example *abc123*, *abc*, *abcd-1232*, but not *-abcd*. |
| **Custom Config** | Specifies a Docker Compose YAML file for the application. The file must include a `services:` key or an `include:` key pointing to an external Compose file that defines services. |
{{< /truetable >}}

**Save** initiates app deployment.
