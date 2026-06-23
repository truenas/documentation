---
title: "OpenShift Operator"
description: "Provides overview information on the TrueNAS OpenShift Operator integration."
weight: 25
aliases:
tags:
- OpenShift Operator
- TrueNAS CSI driver
- Containerized applications
related: false
---


## TrueNAS OpenShift Operator Overview

The TrueNAS OpenShift operator is an official TrueNAS product that enables Red Hat OpenShift customers to use their clusters to dynamically provision, manage, and consume storage from TrueNAS storage systems.

{{< expand "What is OpenShift Operator?" "v" >}}
Red Hat OpenShift Operator is an enterprise Kubernetes platform that provides a complete, certified environment for deploying and managing containerized applications across on-premises, cloud, and edge infrastructure.

The OpenShift Operator packages and manages the TrueNAS CSI Driver, providing a native OpenShift deployment experience through OperatorHub.

OpenShift includes the Operator Lifecycle Manager (OLM) and OperatorHub, which is a built-in marketplace for certified software.
Operators extend OpenShift with custom resource types.
The TrueNAS OpenShift Operator introduces the TrueNASCSI resource, which lets administrators configure the Operator through a single declarative object rather than manually managing individual pods and configuration files.

It consists of:
* OperatorHub - The built-in marketplace interface in the OpenShift console for certified software and where you find and install the TrueNAS OpenShift Operator.
  It allows browsing and deploying hundreds of pre-verified, enterprise-grade operators (like databases, CI/CD tools, and monitoring suites) with a single click.
* Operator Lifecycle Manager (OLM)- Manages installation and updates automatically.
  It manages automatic security updates, and access controls of all operators across your cluster.
* Custom Resource Definitions (CRD) - Custom resources explain why the admin creates a TrueNASCSI object rather than editing raw YAML like in vanilla Kubernetes.
  It introduces new, custom object types into the cluster API.
  For example, the TrueNAS OpenShift Operator introduces `kind: TrueNASCSI`, letting administrators declare their entire storage configuration in a single object.
{{< /expand >}}

The TrueNAS OpenShift driver is Red Hat certified and available directly from OperatorHub.

### Benefits of the OpenShift Driver with TrueNAS

The OpenShift Operator uses an existing TrueNAS system as the persistent storage backend for OpenShift workloads.
No separate storage solution is needed for the container platform, and the existing TrueNAS requires minimal configuration.
TrueNAS manages all storage, both traditional workloads and containerized OpenShift applications, from a single pool and administrative interface.

The Operator creates storage volumes on demand from OpenShift and provides native OpenShift integration through the industry-standard CSI specification.
ZFS capabilities such as snapshots, clones, compression, and thin provisioning are available to OpenShift workloads automatically.

The OpenShift Operator supports both file (NFS) and block (iSCSI) storage protocols.
It allows organizations to extend an existing TrueNAS system to OpenShift workloads.

Storage administrators set up TrueNAS and the StorageClasses.
Developers then create the storage volumes they need through YAML files, without submitting IT requests.
Dynamic provisioning reduces administrative overhead, because the Operator creates the dataset, share, and target automatically.
The TrueNAS administrator sets up the pool and provides the API key.
TrueNAS creates the storage and removes it automatically as OpenShift needs it.
All OpenShift-provisioned volumes appear as datasets in TrueNAS, so the storage administrator has full visibility into what is used.

The TrueNAS OpenShift Operator is ideal for:
* Stateful applications in OpenShift, like databases (PostgreSQL, MySQL, MongoDB), content management systems, CI/CD build caches, and application persistence.
* DevOps and development, like development environments with persistent data, shared build artifacts, and testing environments
* Data-intensive workloads, like big data processing (Spark, Hadoop), ML/AI training data storage, media processing and transcoding
* Enterprise OpenShift deployments, like multi-tenant clusters needing reliable storage, hybrid cloud deployments with on-premises storage, and edge computing with local TrueNAS systems.

The TrueNAS OpenShift Operator is simple to use. Developer/users issue an `oc` command to create a PersistentVolumeClaim (PVC), specifying the StorageClass set up by the cluster administrator. The Operator handles everything else.

<div class="noprint">

## Additional OpenShift Operator Articles

{{< children depth="2" description="true" >}}

</div>

