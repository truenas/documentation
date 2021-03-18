---
title: "Developer's Notes"
weight: 2
---

{{< toc >}}

{{< expand "Update Log" >}}

> 02/04/2021 - Rounding out the last set of feature to merge for the release of 21.02, support for dynamic charts and managing additional catalog repos has merged.

> 01/29/2021 - First early look at the new TrueNAS CLI has been merged into SCALE Nightly images. To launch, run `cli` from the shell.

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
{{< /expand >}}

## System Requirements

* Any x86_64 compatible (Intel or AMD) processor
* 8GB of RAM (More is better)
* 20GB Boot Device

## Nightly Status

Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time. Online updates are created every 2 hours and are available in the SCALE UI online updating page.

The Nightly ISO Image can be downloaded from: [https://download.truenas.com/truenas-scale-nightly/](https://download.truenas.com/truenas-scale-nightly/ "SCALE Nightly .iso files")

Users wanting to upgrade to a nightly image from 20.10 or 20.12 versions can do so by downloading the manual update file: [http://update.freenas.org/scale/TrueNAS-SCALE-Angelfish-Nightlies/TrueNAS-SCALE.update](http://update.freenas.org/scale/TrueNAS-SCALE-Angelfish-Nightlies/TrueNAS-SCALE.update)

## Current Feature Status

The nightly images are very much a WIP until we get farther along in the development process.
They should be suitable for very adventurous users and developers who are not afraid to use the command-line in some instances.

**Fully Functional in the UI:**

* Pool creation
* Pool Management
* SMB Shares
* iSCSI Shares
* AFP Shares
* NFS Shares
* S3 Shares
* AD / LDAP Directory Services
* Online / Offline updating
* Virtual Machines (Using KVM)
* WebDAV
* Monitoring, Alerting and Reporting
* Docker Image / Apps Menus

**Currently Supported in the CLI**

* Docker with NVIDIA / Intel Quicksync --gpu passthrough flags
* Gluster
* Wireguard

**TODO**

* Posix NFSv4 ACLs
* Clustered Datasets API support for TrueCommand
* TrueCommand Clustering UI for SCALE

## Virtual Machines

### PCI Passthrough Devices

In order to use PCI passthrough devices with VMs, follow these steps to have PCI devices show up in UI when it is time to create a PCI device to attach to a VM.

1. In the CLI, identify the PCI device to use for passthrough with `virsh -c "qemu+unix:///system?socket=/run/truenas_libvirt/libvirt-sock" nodedev-list pci`.
2. When the PCI address has been identified, make sure the host OS is not using the device anywhere else (i.e pools). When you're sure the device is not being used, execute `virsh -c "qemu+unix:///system?socket=/run/truenas_libvirt/libvirt-sock" nodedev-detach pci_0000_26_00_0`, where `pci_0000_26_00_0` is the name of the PCI device.
3. Step (2) detaches the PCI device from the host. It can now be used with a VM guest by adding a PCI device to a VM using the UI.

Follow the above steps when there is already 1 VM created with the UI.

Please ensure the device can be safely used with the guest.
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

To redeploy a chart release, i.e. after pulling a newer container image:

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

{{< hint danger >}}	> Caution: Support for Kubernetes is still considered experimental, so please use it at your own risk. If you find any bugs, please create tickets at https://jira.ixsystems.com.
Support for Kubernetes is still considered experimental, so please use it at your own risk.	
If you find any bugs, please create tickets at https://jira.ixsystems.com.	## Using Applications
{{< /hint >}}
