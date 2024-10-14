---
title: "Installing Custom Applications"
description: "Provides information on installing and configuring custom or third-party applications in TrueNAS SCALE."
weight: 50
aliases:
 - /scale/scaletutorials/apps/docker/
 - /scale/apps/docker/
 - /scale/scaleuireference/apps/docker/
 - /scale/scaletutorials/apps/usingcustomapp/
tags:
- customapp
- apps
keywords:
- nas data storage
- software storage solutions
---

{{< include file="/static/includes/apps/CustomAppEE.md" >}}

{{< include file="/static/includes/apps/CustomAppIntro.md" >}}

## Custom Docker Applications

Custom Docker applications typically follow Open Container specifications and deploy in TrueNAS following the Custom Application deployment process described below.

Carefully review documentation for the app you plan to install before attempting to install a custom app.
Take note of any required environment variables, optional variables you want to define, start-up commands or arguments, networking requirements, such as port numbers, and required storage configuration.

{{< hint type=important title="Configure TrueNAS before installing Custom Applications" >}}
If your application requires specific directory paths, datasets, or other storage arrangements, configure these before you start the **Install Custom App** wizard.

You cannot save settings and exit the configuration wizard to create data storage or directories in the middle of the process.
If you are unsure about any configuration settings, review the [Install Custom App Screen UI reference article]({{< relref "InstallCustomAppScreens.md" >}}) before creating a new container image.

To create directories in a dataset on TrueNAS, before you begin installing the container, open the TrueNAS CLI and enter `storage filesystem mkdir path="/PATH/TO/DIRECTORY"`.
{{< /hint >}}

{{< include file="/static/includes/apps/AppsCustomApp.md" >}}

## Setting up App Storage

To set up a new container image, first, determine if you want the container to use additional TrueNAS datasets.
If yes, [create the dataset(s)]({{< relref "DatasetsSCALE.md" >}}) before you begin the app installation.

The custom app installation wizard provides four options for mounting app storage, see below.
When deploying a custom app via YAML, refer to the Docker [Storage](https://docs.docker.com/engine/storage/) documentation for guidance on mount options.

### Using Host Path Volumes

You can mount TrueNAS storage locations inside the container as host paths.
A host path mounts a file or dataset into the container using Docker [bind mounts](https://docs.docker.com/engine/storage/#bind-mounts).
To mount a host path, define the path to the system storage and the container internal path for storage location to appear.
You can also mount the storage as read-only to prevent using the container to change any stored data.

### Using ixVolumes

Using ixVolumes, you can allow TrueNAS to create a dataset on the apps storage pool.
Like host paths, ixVolumes are mounted as Docker bind mounts and can be mounted read only.
In most use cases, ixVolume storage is better suited to app testing, while host volumes are better for production deployments.

### Using SMB Shares

Users can mount a an SMB share for storage within the container using Docker [volumes](https://docs.docker.com/engine/storage/#volumes).
Volumes consume space from the pool chosen for application management.
You need to define a path where the volume appears inside the container.

### Using Memory-Backed Storage

Memory-backed [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) storage provides temporary, in-memory filesystem for storing data that only needs to persist for the lifetime of the container.
It is mounted directly in RAM and automatically cleared when the container stops.

Memory-backed storage can be used to store ephemeral data, especially when performance speed is a concern, such as caching, processing data that doesn't need persistent storage, or storing session data.
For security purposes, sensitive data like temporary credentials or data can be stored in tmpfs instead of writing to disk.

## Installing via Wizard

When you are ready to create a container, go to **Apps**, click **Discover Apps**, then click **Custom App**.

1. Enter a name for the container in **Application Name**.
   Accept the default number in **Version**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppApplicationName.png" alt="Application Name" id="Application Name" >}}

2. Enter the Docker Hub repository for the application you want to install in **Image Configuration**.
   Use the format `maintainer/image`, for example *storjlabs/storagenode*, or `image`, such as *debian*, for Docker Official Images.

   If the application requires it, enter the correct value in **Tag** and select the **Pull Policy** to use.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerImages.png" alt="Container Images Settings" id="Container Images Settings" >}}

3. If the application requires it, define any **Container Configuration** settings to specify the [entrypoint](https://docs.docker.com/reference/dockerfile/#entrypoint), [commands](https://docs.docker.com/reference/dockerfile/#cmd), timezone, [environment variables](https://docs.docker.com/reference/dockerfile/#env), and restart policy to use for the image.
   These can override any existing commands stored in the image.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerEntrypoint.png" alt="Container Entrypoint Settings" id="Container Entrypoint Settings" >}}

   Click **Add** for **Entrypoint** to display an entrypoint field.
   Enter an entrypoint in either the exec form, for example `ENTRYPOINT ["top", "-b"]`.
   Click **Add** again to enter another entrypoint variable.

   Click **Add** for **Command** to display a container command field.
   Enter an command in either the exec form, for example `CMD ["executable","param1","param2"]`.
   Click **Add** again to enter another command.

   Select the appropriate **Timezone**.

    Click **Add** for **Environment Variables** to display a block of variable fields.
    Enter the environment variable name or key in **Name**, for example `MY_NAME`.
    Enter the value for the variable in **Value** for example,  `"John Doe"`, `John\ Doe`, or `John`.
    Click **Add** again to enter another set of environment variables.

    Use the dropdown to select a **Restart Policy** to use for the container.

   If needed, select the options to disable healthcheck built into the container, enable a pseudo-TTY (or pseudo-terminal) for the container, or to keep the standard input (stdin) stream for the container open, for example for an interactive application that needs to remain ready to accept input.

4. Enter any required settings in **Security Context Configuration**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppSecurityContextConfiguration.png" alt="Security Context Configuration Settings" id="Security Context Configuration Settings" >}}

   Select **Privileged** to run the container in [privileged mode](https://docs.docker.com/reference/cli/docker/container/run/#privileged).
   By default, a container cannot access any devices on the host.
   With **Privileged** enabled, the container has access to all devices on the host, which allows the container nearly all the same access as processes running on the host.
   Be cautious if enabling privileged mode.
   A more secure solution is to use **Capabilities** to grant limited access to system processes as needed.

   To grant access to specific processes, click **Add** under **Capabilities** to display a container capability field.
   Enter a [Linux capability](https://man7.org/linux/man-pages/man7/capabilities.7.html) to enable, for example `CHOWN`.
   Click **Add** again to enter another capability.
   See Docker [documentation](https://docs.docker.com/engine/containers/run/#runtime-privilege-and-linux-capabilities) for more information on linux capabilities in Docker.

   If you need to define a user to run the container, select **Custom User** to display the **User ID** and **Group ID** fields.
   Enter the numeric UID and GID of the user that runs the container. The default UID/GID is **568**/**568** (apps/apps).

5. Enter the **Network Configuration** settings.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworking.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

   Select **Host Network** to bind the container to the TrueNAS network.
   When bound to the host network, the container does not have a unique IP-address, so port-mapping is disabled.
   See the [Docker documentation](https://docs.docker.com/engine/network/drivers/host/) for more details on host networking.

   Use **Ports** to reroute container ports that default to the same port number used by another system service or container.
   See [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned ports in TrueNAS.
   See the Docker [Container Discovery](https://docs.docker.com/engine/network/drivers/overlay/#container-discovery) documentation for more on overlaying ports.

   Click **Add** to display a block of port configuration fields. Click again to add additional port mappings.
   Enter a **Container Port** number.
   Refer to the application documentation for default port values.
   Enter a **Host Port** number that is open on the TrueNAS system.
   Select either **TCP** or **UDP** for the transmission **Protocol**.

   Use **Custom DNS Setup** to enter any DNS configuration settings required for your application.
   By default, containers use the DNS settings from the host system.
   You can change the DNS policy and define separate nameservers and search domains.
   See the Docker [DNS services documentation](https://docs.docker.com/engine/network/#dns-services) for more details.

   Use **Nameservers** to add one or more IP addresses to use as DNS servers for the container.
   Click **Add** to display a **Nameserver** entry field and enter the IP address.
   Click again to add another name server.

   Use **Search Domains** to add one or more DNS domains to search non-fully qualified hostnames.
   Click **Add** to display a **Search Domain** field and enter the domain you want to configure, for example, *mydomain.com*.
   Click again to add another search domain.
   See the Linux [search](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) documentation for more information.

   Use **DNS Options** to add one or more key-value pairs to control various aspects of query behavior and DNS resolution.
   Click **Add** to display an **Option** field and enter a key-value pair representing a DNS option and its value, for example *ndots:2*.
   Click again to add another option.
   See the Linux [options](https://www.man7.org/linux/man-pages/man5/resolv.conf.5.html) documentation for more information.

6. If the application includes a GUI, use the **Portal Configuration** settings to set up a web UI portal for the application.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddPortalConfiguration.png" alt="Portal Configuration Settings" id="Portal Configuration Settings" >}}

   Click **Add** to display a block of web portal configuration settings.

   Enter a **Name** for the portal, for example *MyAppPortal*.

   Select the web **Protocol** to use for the portal from the dropdown list. Options are **HTTP** or **HTTPS**.

   Select **Use Node IP** to use the TrueNAS node, or host, IP address to access the portal or deselect to display the **Host** field.
   Then enter a hostname or an internal IP within your local network, for example *my-app-service.local* or an internal IP address.

   Enter the **Port** number to use for portal access.
   The port number the app uses should be in the documentation provided by the application provider/developer.
   Check the port number against the list of [Default Ports](https://www.truenas.com/docs/references/defaultports/) to make sure TrueNAS is not using it for some other purpose.
   If needed, you can map the default container port to an open host port under **Network Configuration** (see above).

   If needed, enter a custom **Path** for portal access, for example */admin*. Defaults to */*. The path is appended to the host IP and port, as in **truenas.local:15000/admin**.

7. Add the **Storage** settings.
   Review the image documentation for required storage volumes.
   See [Setting up Storage](#setting-up-app-storage) above for more information.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenStorage.png" alt="Storage Settings" id="Storage Settings" >}}

   Click **Add** to display a block of configuration settings for each storage mount.
   You can edit to add additional storage to the container later, if needed.

   Use the dropdown to select the storage **Type** you need to mount then configure the appropriate settings.

   {{< expand "ixVolume (Dataset created automatically by the system)" "v" >}}
   To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
   This is recommended for a test deployment of an app but not for a full app deployment.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddixVolume.png" alt="IxVolume Settings" id="IxVolume Settings" >}}

   Enter in **Mount Path** the <file>**path/to/directory**</file> where the iXvolume mounts inside the container.

   Select whether to mount the iXvolume as **Read Only** or to **Enable ACL** and configure settings as needed.
   {{< /expand >}}

   {{< expand "Host Path (Path that already exists on the system)" "v" >}}
   To configure a persistent host path to an existing dataset, select **Host Path (Path that already exists on the system)**.
   This is the recommended setting for on-disk storage in a production deployment.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddHostPathVol.png" alt="Host Path Settings" id="Host Path Settings" >}}

   Enter in **Mount Path** the <file>**path/to/directory**</file> where the host path mounts inside the container.
   Then define the **Host Path**. Enter a path or click <span class="material-icons">arrow_right</span> to the left of <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> **/mnt** to browse to the location of the dataset in TrueNAS.

   Select whether to mount the host path as **Read Only** or to **Enable ACL** and configure settings as needed.
   {{< /expand >}}

   {{< expand "SMB/CIFS Share (Mounts a volume to a SMB share)" "v" >}}
   To mount an existing SMB share as a Docker [volume](https://docs.docker.com/engine/storage/#volumes), select **SMB/CIFS Share (Mounts a volume to a SMB share)**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddSMB.png" alt="SMB/CIFS Share Settings" id="SMB/CIFS Share Settings" >}}

   Enter in **Mount Path** the <file>**path/to/directory**</file> where the iXvolume mounts inside the container.

   Enter in **Server** the IP address for the SMB server, for example *192.168.1.100*.
   This can be the TrueNAS host.

   Enter the name of the SMB share in **Path**, for example *my-share*.

   Enter the **Username** and **Password** of an account with permission to access the SMB share.

   Select whether to mount the share volume as **Read Only** or enter a directory services **Domain** as needed.
   {{< /expand >}}

   {{< expand "Tmpfs (Temporary directory created on the RAM)" "v" >}}
   To mount a temporary memory-backed storage directory, select **Tmpfs (Temporary directory created on the RAM)**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppAddMemoryBackedVol.png" alt="Tmpfs Settings" id="Tmpfs Settings" >}}

   Enter in **Mount Path** the <file>**path/to/directory**</file> where the temporary directory mounts inside the container.

   Enter in **Tmpfs Size Limit (in Mi)** the maximum size of the temporary directory in mebibytes or accept the default of *500*.
   {{< /expand >}}

8. {{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}

9. Use **GPU Configuration** to allocate GPU resources if available and required for the application.

10. Click **Install** to deploy the container.
    If you correctly configured the app, the widget displays on the **Installed Applications** screen.

    When complete, the container becomes active.
    If the container does not automatically start, click **Start** on the widget.

    Click on the App card reveals details.

## Installing via YAML

{{< include file="/static/includes/YAMLWarning.md" >}}

