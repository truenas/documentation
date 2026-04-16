---
title: "CSI Driver"
description: "Provides overview information on the TrueNAS CSI driver integration with Kubernetes."
weight: 25
aliases:
tags:
- CSI driver
- Kubernetes
related: false
doctype: reference
---


## CSI Driver Overview

The TrueNAS CSI (Container Storage Interface) Driver is an official TrueNAS product that enables Kubernetes clusters to dynamically provision, manage, and consume storage from TrueNAS storage systems.
It can automatically create storage volumes on-demand from Kubernetes, and leverage ZFS capabilities like snapshots, clones, and compression in Kubernetes.
It provisions native Kubernetes integration via industry-standard CSI specifications.

The CSI driver supports snapshots, clones, ZFS compression (with no extra setup), and supports both file (NFS) and block (iSCSI) storage protocols.
Standard Kubernetes uses K8s APIs and works with all K8s tooling. The CSI driver integration leverages TrueNAS investment in Kubernetes environments.

Storage administrators set up TrueNAS and the storage guardrails (StorageClasses), and thereafter developers can create the storage volumes they need through YAML files, bypassing the need to submit IT requests for the storage they need.

The CSI driver is ideal for:
* Stateful applications in Kubernetes, like databases (PostgreSQL, MySQL, MongoDB), content management systems, CI/CD build caches, and application persistence.
* Dev operations and development, like development environments with persistent data, shared build artifacts, and testing environments
* Data-intensive workloads, like big data processing (Spark, Hadoop), ML/AI training data storage, media processing and transcoding
* Enterprise Kubernetes deployments, like multi-tenant Kubernetes clusters needing reliable storage, hybrid cloud deployments with on-premises storage, and edge computing with local TrueNAS systems.

The CSI driver is simple to use. Developer/users only need to create PVCs using the StorageClass cluster administrators setup, and the driver handles everything else.

<div class="noprint">

## Additional CSI Driver Articles

{{< children depth="2" description="true" >}}

</div>

