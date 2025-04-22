---
title: "Using Install Custom App"
description: "Provides information on using Install Custom App to configure custom or third-party applications in TrueNAS SCALE."
weight: 10
tags:
- customapp
- apps
---

{{< hint type=important title="24.04 Application Tutorials" >}}
{{< include file="/static/includes/AppsUnversioned.md" >}}
{{< /hint >}}

SCALE includes the ability to run third-party apps in containers (pods) using Kubernetes settings.

{{< expand "What is Kubernetes?" "v" >}}
Kubernetes (K8s) is an open-source system for automating deployment, scaling, and managing containerized applications.
{{< /expand >}}

Generally, you can deploy any container that follows the [Open Container Initiative](https://opencontainers.org/) specifications.

Always read through the documentation page for the application container you are considering installing so that you know all of the settings that you need to configure.
To set up a new container image, first, determine if you want the container to use additional TrueNAS datasets.
If yes, [create a dataset]({{< ref "DatasetsSCALE" >}}) for host volume paths before you click **Custom App** on the **Discover** application screen.

### Custom Docker Applications
Custom Docker applications typically follow open container specifications and deploy in TrueNAS following the custom application deployment process described below.

Carefully review documentation for the app you plan to install before attempting to install a custom app.
Take note of any required environment variables, optional variables you want to define, start-up commands or arguments, networking requirements, such as port numbers, and required storage configuration.

{{< hint type=important title="Configure TrueNAS before installing Custom Applications" >}}
If your application requires specific directory paths, datasets, or other storage arrangements, configure these before you start the **Install Custom App** wizard.

You cannot save settings and exit the configuration wizard to create data storage or directories in the middle of the process.
If you are unsure about any configuration settings, review the [Install Custom App Screen UI reference article]({{< ref "InstallCustomAppScreens" >}}) before creating a new container image.

To create directories in a dataset on SCALE, before you begin installing the container, open the TrueNAS SCALE CLI and enter `storage filesystem mkdir path="/PATH/TO/DIRECTORY"`.
{{< /hint >}}

## Adding Custom Applications

When you are ready to create a container, go to **Apps**, click **Discover Apps**, then click **Custom App**.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

1. Enter a name for the container in **Application Name**.
   Accept the application train number in **Version**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppApplicationName.png" alt="Application Name" id="Application Name" >}}

2. Enter the Docker Hub repository for the application you want to install in **Image Repository** using the format `maintainer/image`, for example *storjlabs/storagenode*, or `image`, such as *debian*, for Docker Official Images.

   If the application requires it, enter the correct value in **Image Tag** and select the **Image Pull Policy** to use.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerImages.png" alt="Container Images Settings" id="Container Images Settings" >}}

3. If the application requires it, enter the executables you want or need to run after starting the container in **Container Entrypoint**.
   Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
   These can override any existing commands stored in the image.

   Click **Add** for **Container CMD** to add a command.
   Click **Add** for **Container Args** to add a container argument.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerEntrypoint.png" alt="Container Entrypoint Settings" id="Container Entrypoint Settings" >}}

4. Enter the **Container Environment Variables** to [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
   Not all applications use environment variables.
   Check the application documentation to verify the variables that particular application requires.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppContainerEnvironmentVariables.png" alt="Container Environment Variables Settings" id="Container Environment Variables Settings" >}}

5. Enter the networking settings.
   To use a unique IP address for the container, set up an [external interface]({{< ref "InstallCustomAppScreens.md#NetworkingSettings" >}}).

   Users can create additional network interfaces for the container if needed.
   Users can also give static IP addresses and routes to a new interface.

   a. Click **Add** to display the **Host Interface** and **IPAM Type** fields required when configuring network settings.
      Select the interface to use.
      Select **Use static IP** to display the **Static IP Addresses** and **Static Routes** fields, or select **Use DHCP**.

    {{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworkingAddExternalInterfaces.png" alt="Networking Add External Interfaces" id="Networking Add External Interfaces" >}}

   b. Scroll down to select the **DNS Policy** and enter any DNS configuration settings required for your application.
   By default, containers use the DNS settings from the host system.
   You can change the DNS policy and define separate nameservers and search domains.
   See the Kubernetes [DNS services documentation](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/) for more details.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppNetworkingDNSConfig.png" alt="Networking Add DNS Configuration" id="Networking Add DNS Configuration" >}}

6. Enter the **Port Forwarding** settings.
   You can define multiple ports to forward to the workload.

   If port forwarding settings do not display, remove external networking interfaces under **Networking**.

   {{< trueimage src="/images/SCALE/Apps/InstallCustomAppPortForwarding.png" alt="Port Forwarding Settings" id="Port Forwarding Settings" >}}

   Click **Add** for each port you need to enter.
   Enter the required **Container Port** and **Node Port** settings, and select the **Protocol** for these ports.

   {{< hint type=note >}}
   The node port number must be over **9000**.
   Ensure no other containers or system services are using the same port number.
   {{< /hint >}}

   Repeat for all ports.

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

10. Use **Resource Reservation** to allocate GPU resources if available and required for the application.

11. Set any **Resource Limits** you want to impose on this application.
    Select **Enable Pod resource limits** to display the **CPU Limit** and **Memory Limit** fields.

12. Enter or select any **Portal Configuration** settings to use.
    Select **Enable WebUI Portal** to display UI portal settings.

13. Click **Install** to deploy the container.
    If you correctly configured the app, the widget displays on the **Installed Applications** screen.

    When complete, the container becomes active. If the container does not automatically start, click **Start** on the widget.

    Click on the App card reveals details.

## Setting up App Storage

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

To consume or have file browser access to data that is present on the host, set up your custom application to use host path volumes.

Alternatively, you can use the network to copy directories and files to and from the pod using `k3s kubectl` commands.

To copy from a pod in a specific container:
`k3s kubectl cp <file-spec-src> <file-spec-dest> -c <specific-container>`

To copy a local file to the remote pod:
`k3s kubectl cp /tmp/foo <some-namespace>/<some-pod>:/tmp/bar`

To copy a remote pod file locally:
`k3s kubectl cp <some-namespace>/<some-pod>:/tmp/foo /tmp/bar`