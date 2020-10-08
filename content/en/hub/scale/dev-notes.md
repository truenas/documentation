---
title: "Developer's Notes"
description: "Running updates about TrueNAS SCALE Nightly status and current issues."
---

#### Recent Updates
> 9/25/2020 - Samba 4.13.0 added - Includes iX VFS modules, Shadow Copies, and IO_URING support (Enabled by default)

> 9/24/2020 - Preliminary support for Kubernetes added to middleware backend! - [Usage Instructions](#containerisation)

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

Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time. Online updates are created every 2 hours and can be used via the UI's online updating page.

ISO's can be downloaded here:

[https://www.truenas.com/download-truenas-scale/](https://www.truenas.com/download-truenas-scale/ "https://www.truenas.com/download-truenas-scale/")


## Current Feature Status

The nightly images are very much a WIP until we get farther along in our development process. They should be suitable for very adventerous users and developers who are not afraid to use the command-line in some instances.


**Fully Functional via the UI:**
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

**Supported via the CLI (Currently)**
- Docker
- Docker with NVIDIA --gpu passthrough flags
- Gluster
- Wireguard

**TODO**

- Posix NFSv4 ACLs
- Docker UI
- Clustered Datasets API support for TrueCommand
- TrueCommand Clustering UI for SCALE


## Virtual Machines

**PCI Passthrough Devices**

In order to use PCI passthrough devices with VM's, following steps should be followed so that the PCI devices shows up in UI when we want to create a PCI device to be attached to a VM.

1) Identify the PCI device which should be used for passthrough with command `virsh nodedev-list pci`.
2) Once PCI address has been identified, it should be made sure that the host OS is not using the device anywhere i.e pools etc. After ensuring this case, please  execute `virsh nodedev-detach pci_0000_26_00_0` where `pci_0000_26_00_0` is the name of the PCI device.
3) Step (2) will detach the PCI device from the host and it can be used with a VM guest by adding a PCI device in a VM via UI.

The above steps should be performed when there has been at least 1 VM created via UI.
Please ensure that the device an be safely used with the guest as if it's for example part of a CPU and we try to pass it through to the guest, that might result in a crash and the system will only recover after a reboot.

## Containerisation

**Configuring Kubernetes**

In order to leverage containers, SCALE is using a single node kubernetes cluster powered by k3s. In order to configure kubernetes, please type the following command:

```
midclt call -job kubernetes.update '{"pool": "pool_name_here"}'
``` 

This will setup kubernetes on the defined pool. For the first time, it may take a few minutes for the k8s cluster to properly initialise itself. Moving on, if you have a pool configured for kubernetes, kubernetes will start automatically on boot.

**Using Kubernetes**

SCALE does not support deploying workloads to kubernetes cluster officially yet, however users interested in using k8s can do so manually via shell. SCALE has helm3 pre-installed, so users can leverage helm to deploy their workloads.

A tip for users is to add following lines to `~/.zshrc`
```
alias kubectl="k3s kubectl"
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

Setting `KUBECONFIG` is required for using helm and the `kubectl` alias helps use `kubectl` directly instead of prefixing it with `k3s` each time.

A word of caution: Support for kubernetes is still considered experimental, so please use it at your own risk. However if you come across any bugs, please feel free to create tickets at https://jira.ixsystems.com.

**Creating Helm Charts**

SCALE today supports the deployment of Helm charts using the `kubectl` command. Support for natively importing docker containers is coming to the SCALE UI later in 2020. In the meantime, it is possible to create a Helm chart from a docker container by following [various tutorials available online](https://opensource.com/article/20/5/helm-charts#:~:text=%20How%20to%20make%20a%20Helm%20chart%20in,%E2%80%9Cmy-cherry-chart%E2%80%9D%20has%20been%20upgraded.%20Happy%20Helming%21%20More%20). 
