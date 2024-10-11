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

Users can mount a persistent volume (PV) claim to an SMB share for storage within the container.
PVs consume space from the pool chosen for application management.
You need to define a path where that dataset appears inside the container.
To view created container datasets, go to **Datasets** and expand the dataset tree for the pool you use for applications.

Users developing applications should be mindful that if an application uses Persistent Volume Claims (PVC), those datasets are not mounted on the host and therefore are not accessible within a file browser.
Upstream zfs-localpv uses this behavior to manage PVC(s).
If you want to consume or have file browser access to data that is present on the host, set up your custom application to use host path volumes.

### Using Memory-Backed Storage

Memory-backed [tmpfs](https://docs.docker.com/engine/storage/#tmpfs) storage provides temporary, in-memory filesystem for storing data that only needs to persist for the lifetime of the container.
It is mounted directly in RAM and automatically cleared when the container stops.

Memory-backed storage can be used to store ephemeral data, especially when performance speed is a concern, such as caching, processing data that doesn't need persistent storage, or storing session data.
For security purposes, sensitive data like temporary credentials or data can be stored in tmpfs instead of writing to disk.

## Installing via Wizard

When you are ready to create a container, go to **Apps**, click **Discover Apps**, then click **Custom App**.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

1. Enter a name for the container in **Application Name**.
   Accept the default number in **Version**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppApplicationName.png" alt="Application Name" id="Application Name" >}}

2. Enter the Docker Hub repository for the application you want to install in **Image Repository** using the format `maintainer/image`, for example *storjlabs/storagenode*, or `image`, such as *debian*, for Docker Official Images.

   If the application requires it, enter the correct value in **Image Tag** and select the **Pull Policy** to use.

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











7. Add the **Storage** settings.
   Review the image documentation for required storage volumes.
   See [Setting up Storage](#setting-up-app-storage) below for more information.

   Click **Add** for each host path volume.
   Enter or browse to select the **Host Path** for the dataset on TrueNAS.
   Enter the **Mount Path** to mount the host path inside the container.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppScreenStorage.png" alt="Storage Settings" id="Storage Settings" >}}

   Add any memory-backed or other volumes you need or want to use.
   You can add more volumes to the container later, if needed.

8. Enter any additional settings required for your application, such as workload details or adding container settings for your application.

9. Select the **Scaling/Upgrade Policy** to use.
   The default is **Kill existing pods before creating new ones**.

10. {{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}

11. Use **GPU Configuration** to allocate GPU resources if available and required for the application.

12. Click **Install** to deploy the container.
    If you correctly configured the app, the widget displays on the **Installed Applications** screen.

    When complete, the container becomes active.
    If the container does not automatically start, click **Start** on the widget.

    Click on the App card reveals details.

## Installing via YAML

{{< include file="/static/includes/YAMLWarning.md" >}}
