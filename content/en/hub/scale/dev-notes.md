---
title: "Developer's Notes"
description: "Running updates about TrueNAS SCALE Nightly status and current issues."
tags: ["SCALE"]
---

#### Recent Updates
> 02/04/2021 - Rounding out the last set of feature to merge for the release of 21.02, support for dynamic charts and managing additional catalog repos has merged.

> 01/29/2021 - First early look at the new TrueNAS CLI has been merged into SCALE Nightly images. To launch run "cli" from the shell.

> 01/16/2021 - Updated Debian base image, SCALE now includes Kernel 5.10 as well as updates to all other base packages

> 12/16/2020 - Applications UI lands in SCALE - Support for deploying pre-defined Helm Charts, as well as Docker Images now possible via the UI.

> 11/17/2020 - Update Debian base image, SCALE now includes Kernel 5.9.0 as well as more updated versions of K8s, Docker, KVM and more.

> 10/29/2020 - Updated [Kubernetes Workload Usage](#using-kubernetes) information, providing examples of deploying Docker images on SCALE

> 10/14/2020 - Updated [Roadmap / Information](#containerization) about Kubernetes and Linux container support in SCALE

> 9/25/2020 - Samba 4.13.0 added - Includes iX VFS modules, Shadow Copies, and IO_URING support (Enabled by default)

> 9/24/2020 - Preliminary support for Kubernetes added to middleware backend! - [Usage Instructions](#containerization)

> 9/21/2020 - UX Refresh - New Networking section added

> 9/21/2020 - OpenZFS 2.0-RC (With Async CoW) merged into nightly images

> 9/18/2020 - UX Refresh - New System Settings -> General page updated

> 9/14/2020 - Base system update - Debian and related apt repositories updated, TrueNAS SCALE now includes Kernel 5.8.0-1

> 8/26/2020 - UI/ UX Layout Changes - New left-menu style added, and pages re-organized in preperation for creation of some new Dashboard-style sections.

> 8/6/2020 - Updated list of services / features that are functional in SCALE nightly images

> 7/16/2020 - [Slack Instance](https://www.ixsystems.com/community/threads/collaborator-community-slack-instance.85717/) is available for community contributors

> 7/15/2020 - VM support using KVM as the backend has arrived, including support for PCI passthrough and nested virtualization.

## System Requirements

- Any x86_64 compatible (Intel or AMD) processor
- 8GB of RAM (More is better)
- 20GB Boot Device

## Nightly Status

Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time. Online updates are created every 2 hours and are available in the SCALE UI online updating page.

The Nightly ISO Image can be downloaded from: [http://download.truenas.com/truenas-scale-nightly/TrueNAS-SCALE.iso](http://download.truenas.com/truenas-scale-nightly/TrueNAS-SCALE.iso "http://download.truenas.com/truenas-scale-nightly/TrueNAS-SCALE.iso")

Users wanting to upgrade to a nightly image from 20.10 or 20.12 versions can do so by downloading the manual update file: [http://update.freenas.org/scale/TrueNAS-SCALE-Angelfish-Nightlies/TrueNAS-SCALE.update](http://update.freenas.org/scale/TrueNAS-SCALE-Angelfish-Nightlies/TrueNAS-SCALE.update)

## Current Feature Status

The nightly images are very much a WIP until we get farther along in the development process.
They should be suitable for very adventurous users and developers who are not afraid to use the command-line in some instances.

**Fully Functional in the UI:**

- Pool creation
- Pool Management
- SMB Shares
- iSCSI Shares
- AFP Shares
- NFS Shares
- S3 Shares
- AD / LDAP Directory Services
- Online / Offline updating
- Virtual Machines (Using KVM)
- WebDAV
- Monitoring, Alerting and Reporting
- Docker Image / Apps Menus

**Currently Supported in the CLI**

- Docker with NVIDIA / Intel Quicksync --gpu passthrough flags
- Gluster
- Wireguard

**TODO**

- Posix NFSv4 ACLs
- Clustered Datasets API support for TrueCommand
- TrueCommand Clustering UI for SCALE

## Virtual Machines

### PCI Passthrough Devices

For PCI Passthrough devices, system will try to detach the PCI device before the VM starts and then re-attach once the VM stops. Please ensure the device can be safely used with the guest.
For example, the device could be part of a CPU and we try to pass it through to the guest, it can result in a crash where the system only recovers after a reboot.

## Containerization

### Containers / Kubernetes Roadmap

TrueNAS SCALE has native host support for container workloads.
This is under active development and not at BETA or RELEASE quality.
The notes below explain the path and options that are intended, but might not be fully implemented.

The goal of TrueNAS SCALE container services is to provide an easy-to-use infrastructure for deploying and managing container workloads on either a single node or a cluster of nodes.
The container workloads can be simple Docker containers or a set of complex multi-container Pods that have been custom developed.
The REST APIs and web UI for using these services are simple and powerful.

In some cases, users have specific container management tools that they would like to continue using.
SCALE allows for this with some reasonable flexibility.

The approach with SCALE to solve this problem is three pronged:

* SCALE includes a Kubernetes distribution (K3s) that has been integrated with middleware to provide a simple web UI and REST API for managing containers. Kubernetes will operate first on a single node (later as a cluster) and support Docker containers or Kubernetes pods defined by [Helm Charts](https://helm.sh). This integration will provide an approximation of the Jails and Plugins capability provided by TrueNAS CORE. The initial WebUI for plugins is planned for the 20.12 release.

* SCALE allows Kubernetes to be disabled. The user will then have access to the native container services within Debian. This will include Docker, LXC (Q1 2021) or any other Kubernetes distribution. There will be a Container Storage Interface (CSI) that can couple the container services with the SCALE storage capabilities. Users can script these capabilities and then use 3rd-party tools like Portainer to manage them. This approach can be used in SCALE 20.10 and later.

* SCALE provides very reliable VMs (via KVM) for guest OSes with specific container management features. Users can create these VMs with any OS (including Windows, Linux, and FreeBSD) with any software stack they want. These VMs allow full integration with existing Container management clusters. This is supported on SCALE 20.10 and later.

### Kubernetes Integration Information

The integration of Kubernetes software and functionality into TrueNAS SCALE is one of the exciting differentiators of TrueNAS SCALE. TrueNAS SCALE provides an integrated software platform (or appliance) that provides storage services, virtualization and container services. Integration of the software into TrueNAS SCALE is intended to provide many benefits:

* A single downloadable image with Kubernetes, OpenZFS and Storage services
* Simpler deployment with reduced user configuration and more unified documentation
* Coordinated “middleware” response with integrated alerts, logs and statistics
* A single API and common WebUI
* Automated deployment of Docker containers
* Integration with ZFS and scale-out ZFS (gluster) storage
* Combined and tested software updates with minimal disruption
* Community support of a common and integrated software base
* TrueNAS SCALE Software is fully Open Source

TrueNAS SCALE 20.12 will provide the first web-based user-facing implementation of Kubernetes and container services.

The initial implementation of Kubernetes is being done using the [K3S software](https://k3s.io/) from Rancher (recently acquired by SUSE linux). This proven software base provides a lightweight Kubernetes implementation with support for the API and ability to cluster instances.

TrueNAS SCALE uses [Helm Charts](https://helm.sh) as a package manager to deploy containerized applications into Kubernetes. Helm can package a single Docker container or a complex set of containers from any other public or private repositories. TrueNAS SCALE uses Helm charts to manage application deployment and the provide the 3rd party plugin experience from TrueNAS CORE.

Docker containers can be deployed directly on TrueNAS SCALE. SCALE will automatically create the Helm charts for the Docker container. Users with more complex applications will be able to deploy their own applications using Helm charts that describe Kubernetes pods with multiple containers.

The storage for Kubernetes will be based on ZFS and scale-out ZFS. Scale-out ZFS is a marriage of Gluster and OpenZFS which provides scale-out properties of higher bandwidth, capacity and increased resilience.

## Using Kubernetes

### Configuring Kubernetes

In order to leverage containers, SCALE is using a single node Kubernetes cluster powered by k3s. To configure Kubernetes, enter:

```
midclt call -job kubernetes.update '{"pool": "pool_name_here"}'
``` 

This will set up Kubernetes on the defined pool. For the first time, it may take a few minutes for the k8s cluster to properly initialize. Next, if you have a pool configured for Kubernetes, Kubernetes will start automatically on boot.

### Deploying Kubernetes Workloads

SCALE has API support for deploying Kubernetes workloads. SCALE manages Kubernetes workloads with integration of Helm v3 and using a concept of catalogs. For more information about catalogs and how to build your own iX Helm chart, please refer to https://github.com/truenas/charts.

Each catalog item points to an application which will be deployed to Kubernetes. This application is an enhanced helm chart which deploys the application to the TrueNAS SCALE Kubernetes cluster.

Right now we have a catalog item called `ix-chart` (https://github.com/truenas/charts/tree/master/test/ix-chart/) which has the ability to deploy single Docker image workloads. Please refer to the chart link to see more details about what features and configurations are supported.

Here is an example of deploying the Plex docker image:

```
midclt call -job chart.release.create '{"catalog": "OFFICIAL", "train": "test", "item": "ix-chart", "values": {"image": {"repository": "plexinc/pms-docker"}, "portForwardingList": [{"containerPort": 32400, "nodePort": 32400}], "volumes": [{"datasetName": "transcode", "mountPath": "/transcode"}, {"datasetName": "config", "mountPath": "/config"}, {"datasetName": "data", "mountPath": "/data"}], "workloadType": "Deployment", "gpuConfiguration": {"nvidia.com/gpu": 1}}, "version": "2010.0.1", "release_name": "plex"}'
```

To update the chart release:

```
midclt call -job chart.release.update 'plex' '{"values": {"portForwardingList": [{"containerPort": 32400, "nodePort": 32401}]}}'
```

To delete the chart release:

```
midclt call -job chart.release.delete plex
```

To upgrade the chart version ( example shows the *2010.0.2* version ):

```
midclt call -job chart.release.upgrade 'plex' '{"item_version": "2010.0.2"}'
```

Here is an example of rolling back the chart release to a previous chart version:

```
midclt call -job chart.release.rollback 'plex' '{"item_version": "2010.0.1"}'
```

To pull latest version of a container image:

```
midclt call -job docker.images.pull '{"from_image": "plexinc/pms-docker", "tag": "latest"}'
```

To redeploy a chart release, I.E. after pulling a newer container image:

```
midclt call -job chart.release.redeploy plex
```

### Using Kubernetes via CLI

SCALE does not officially test and support workloads created manually with `kubectl` / `helm` or direct interaction with the Kubernetes API. However, the SCALE software does not deliberately restrict them. Using the `kubectl` / `helm` in a read-only mode should be 100% safe, but for all other operations users should test and verify their own workloads.

A tip for users is to add these lines to `~/.zshrc`:

```
alias kubectl="k3s kubectl"
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

Setting `KUBECONFIG` is required for using helm and the `kubectl` alias helps use `kubectl` directly instead of prefixing it with `k3s` each time.

> Caution: Support for Kubernetes is still considered experimental, so please use it at your own risk. If you find any bugs, please create tickets at https://jira.ixsystems.com.

## Using Applications

Both pre-built official containers and custom application containers can be deployed using the *Apps* page in the Scale web interface.

<img src="/images/ScaleApps.png">
<br><br>

The UI will ask to use a storage pool for Applications.

<img src="/images/ScaleAppsChoosePool.png">
<br><br>

It is recommended to keep the container use case in mind when choosing a pool.
Be sure to select a pool that has enough space for all the application containers you intend to use.
This will create an `ix-applications` dataset on the chosen pool and use this location to store all container-related data.

Additional options for configuring general network interfaces and IP addresses for application containers are in **Apps > Settings > Advanced Settings**.

<img src="/images/ScaleAppsAdvancedSettings.png">
<br><br>

### Official Applications

Official containers are pre-configured to only require a name during deployment.

<img src="/images/ScaleAppsInstallPlex.png">
<br><br>

When the container is deployed and active, a button to open the application web interface becomes available.

<img src="/images/ScaleAppsInstalledPlexActive.png">
<br><br>

Editing a deployed official container allows adjusting the container settings.
Saving any changes will redeploy the container.

### Custom Applications

To deploy a custom application container in the Scale web interface, go to **Apps** and click *Launch Docker Image*.

<img src="/images/ScaleAppsLaunchDockerImage.png">
<br><br>

There a numerous options for custom containers that are broken down into smaller sections.
These options are derived from the [Kubernetes container options](https://kubernetes.io/docs/setup/).

#### Image and Policies

You will need to name the custom application and provide the online storage location (repository) that will be used to download the container.
The remaining options allow setting the image tag, defining when the image is pulled from the remote repository, how the container is updated, and defining when a container will automatically restart.

#### Container Settings

Define any [commands and arguments](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) to use for the image.
These can override any existing commands stored in the image.

You can also [define additional environment variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) for the container.
Some Docker images can require additional environment variables.
Be sure to check the documentation for the image you're trying to deploy and add any required variables here.

#### Networking

To use the system IP address for the container, set *Host Networking*.
The container will not be given a separate IP address and the container port number will be appended to the end of the system IP address.
See the [Docker documentation](https://docs.docker.com/network/host/) for more details.

If needed, additional network interfaces can be created for the container.
Each new interface can be given static IP addresses and routes.

By default, the DNS settings from the host system are used for the container.
You can change the DNS policy and define separate nameservers and search domains.
See the Docker [DNS services documentation](https://docs.docker.com/config/containers/container-networking/#dns-services) for more details.

#### Port Forwarding List

Choose the protocol and enter port numbers for both the container and node.
Multiple port forwards can be defined.
The node port number must be over *9000*.
Make sure no other containers or system services are using the same port number.

#### Host Path Volumes

Scale storage locations can be mounted inside the container.
To mount Scale storage, define the path to the system storage and the container internal path for the system storage location to appear.
You can also mount the storage as read only to prevent the container from being used to change any stored data.
For more details, see the [Kubernetes hostPath documentation](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath).

#### Volumes

Additional Persistent Volumes (PVs) can be created for storage within the container.
These consume space from the pool that was chosen for Application management.
You will need to name each new dataset and define a path where that dataset appears inside the container.

To view created container datasets, go to **Storage** and expand the pool used for applications.
Expand `/ix-applications/releases/<ContainerName>/volumes/ix-volumes/`.

### Creating the Application Container

Saving the official or custom container will add a new entry to *Installed Applications*.
The container will then enter a deploy status as it fetches the image from the remote repository and configures it.
When deployment is complete, the container moves to an active status and can begin to be used.

<img src="/images/ScaleAppsInstalledPlexActive.png">
<br><br>

### Accessing the Shell in an Active Container

To access the shell in an active container, you will need to first identify the namespace and pod for the container.
In the Scale UI, go to **System Settings > Shell** to begin entering commands:

1. View container namespaces: `k3s kubectl get namespaces`.
2. View pods by namespace: `k3s kubectl get -n <NAMESPACE> pods`.
3. Access container shell: `k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash`.

#### Additional Container Commands

* View details about all containers: `k3s kubectl get pods,svc,daemonsets,deployments,statefulset,sc,pvc,ns,job --all-namespaces -o wide`.
* Get container status: `k3s kubectl describe -n <CONTAINER NAMESPACE> <POD-ID>`.
