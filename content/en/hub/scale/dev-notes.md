---
title: "Developer's Notes"
description: "Running updates about TrueNAS SCALE Nightly status and current issues."
---

#### Recent Updates
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


**Supported via the UI:**
- Pool creation
- Pool Management
- Samba Shares
- iSCSI Shares
- AFP Shares
- NFS Shares
- AD / LDAP Directory Services
- Online / Offline updating

**Supported via the CLI (Currently)**
- Docker
- Docker with NVIDIA --gpu passthrough flags
- KVM / Libvirt
- Gluster
- Wireguard

**TODO**

- Posix NFSv4 ACLs
- Docker UI
- KVM UI
- Clustered Datasets API support for TrueCommand
- TrueCommand Clustering UI for SCALE



