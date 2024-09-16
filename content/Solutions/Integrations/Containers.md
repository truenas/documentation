---
title: "Containers"
description: "Guide to configure TrueNAS as backing storage for container solutions."
weight: 25
aliases:
  - /core/solutions/integrations/containers/
---

TrueNAS & TrueNAS Enterprise can both be used as backing storage for container workloads.

The democratic-csi driver (available at https://github.com/democratic-csi/democratic-csi) allows users to integrate popular container solutions like Kubernetes, Nomad, Cloud Foundry, or Mesos into the TrueNAS CLI. The driver is sponsored by and officially supported by iXsystems for TrueNAS Enterprise Customers.

A CSI (Container Storage Interface) is an interface between container workloads and third-party storage that supports creating and configuring persistent storage external to the orchestrator, its input/output (I/O), and its advanced functionality such as snapshots and cloning.

The democratic-csi focuses on providing storage using iSCSI, NFS, and SMB protocols, and includes several ZFS features like snapshots, cloning, and resizing.

# Features

- dynamically provisions/de-provision storage and shares it as appropriate for cluster usage
- online resize operations to dynamically expand volumes as needed
- cross-architecture (amd64, armv7, arm64)

# Installation

There are 3 steps to integrating a container solution in TrueNAS:

1. Prepare TrueNAS.
2. Prepare the nodes (ie: your Kubernetes cluster nodes).
3. Deploy your container orchestrator.

## Prepare TrueNAS for a Container Solution

We recommend using TrueNAS 12.0-U2.1+. However, the driver typically works with previous versions too, but is unsupported. Before you start, log in to TrueNAS, go to **Services**, and make sure *iSCSI*, *NFS*, and *SSH* are enabled.

### Create Pools

Go to **Storage > Pools** and create the pools to include in your container.

### Set up SSH

Now you need to ensure that a supported shell is used by the user account that your container solution can use to SSH to TrueNAS.
Go to **Accounts > Users** and set the desired user's *Shell* to either *bash* or *sh*, then click *SAVE*.

### Set up NFS

1. Go to **Services** and click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i> next to *NFS* to edit its properties.
2. Make sure *Enable NFSv4*, *NFSv3 ownership model for NFSv4*, and *Allow non-root mount* are checked, then click *SAVE*.

### Set up iSCSI

1. Go to **Sharing > Block Shares (iSCSI)**.
2. Use the default settings in the *Target Global Configuration* tab.
3. In the *Portals* tab, click *ADD*, then create a **Description*. Set the *IP Address* to *0.0.0.0* and the *Port* to *3260*, then click *SUBMIT*.
4. In the *Initiators Groups* tab, click *ADD*. For ease of use, check the *Allow ALL Initiators*, then click *SAVE*. You can make restrictions later using the *Allowed Initiators (IQN)* function.
5. Kubernetes will create Targets and Extents automatically.

## Prepare the Nodes

Install and configure the requirements for both NFS and iSCSI.
{{< tabs "NodePrep" >}}
{{< tab "iSCSI" >}}
### iSCSI

{{< hint type=note >}}
Multipath is supported for the `iscsi`-based drivers. Configure multipath with multiple portals in the configuration as needed.

If you are running Kubernetes with rancher/rke, please see https://github.com/rancher/rke/issues/1846.
{{< /hint >}}
{{< /tab >}}
{{< tab "SMB" >}}
### SMB

When using Windows based machines, you might need to enable guest access, even if you are connecting with credentials.

```
Set-ItemProperty HKLM:\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters AllowInsecureGuestAuth -Value 1
Restart-Service LanmanWorkstation -Force
```
{{< /tab >}}
{{< /tabs >}}

## Deploy Your Orchestrator Into the Cluster

{{< tabs "ContainerSolutions" >}}
{{< tab "Kubernetes" >}}
## Kubernetes
 
[Kubernetes](https://kubernetes.io/) is "an open-source system for automating deployment, scaling, and management of containerized applications."

### Deploy the Driver (Helm Installation)

```
helm repo add democratic-csi https://democratic-csi.github.io/charts/
helm repo update

# helm v2
helm search democratic-csi/

# helm v3
helm search repo democratic-csi/

# copy proper values file from https://github.com/democratic-csi/charts/tree/master/stable/democratic-csi/examples
# edit as appropriate
# examples are from helm v2, alter as appropriate for v3

# add --create-namespace for helm v3
helm upgrade \
--install \
--values freenas-iscsi.yaml \
--namespace democratic-csi \
zfs-iscsi democratic-csi/democratic-csi
helm upgrade \
--install \
--values freenas-nfs.yaml \
--namespace democratic-csi \
zfs-nfs democratic-csi/democratic-csi
```
{{< expand "Non-standard Kubelet Paths" "v" >}}
When using a distribution with a non-standard kubelet path (such as `minikube` and `microk8s`), a new kubelet host path is required. Example:

```bash
microk8s helm upgrade \
  --install \
  --values freenas-nfs.yaml \
  --set node.kubeletHostPath="/var/snap/microk8s/common/var/lib/kubelet"  \
  --namespace democratic-csi \
  zfs-nfs democratic-csi/democratic-csi
```
{{< /expand >}}

### Multiple Deployments

You can install multiple deployments of each or any driver. You will need:

- a new helm release name for each deployment
- a unique `csiDriver.name` in the values file
- a unique name for each storage class (per cluster)
- a unique parent dataset (don't try to use the same parent across deployments or clusters)

### Snapshot Support

Install beta (v1.17+) CRDs (once per cluster):

- https://github.com/kubernetes-csi/external-snapshotter/tree/master/client/config/crd

```
kubectl apply -f snapshot.storage.k8s.io_volumesnapshotclasses.yaml
kubectl apply -f snapshot.storage.k8s.io_volumesnapshotcontents.yaml
kubectl apply -f snapshot.storage.k8s.io_volumesnapshots.yaml
```

Install snapshot controller (once per cluster):

- https://github.com/kubernetes-csi/external-snapshotter/tree/master/deploy/kubernetes/snapshot-controller

```
# replace namespace references to your liking
kubectl apply -f rbac-snapshot-controller.yaml
kubectl apply -f setup-snapshot-controller.yaml
```

Install `democratic-csi` as usual with `volumeSnapshotClasses` defined as appropriate.

- https://kubernetes.io/docs/concepts/storage/volume-snapshots/
- https://github.com/kubernetes-csi/external-snapshotter#usage

{{< expand "Openshift" "v" >}}
[Openshift](https://www.simplilearn.com/kubernetes-vs-openshift-article) is another addon to Kubernetes and generally works fine with the `democratic-csi`. You will need to set special parameters with helm (support added in chart version `0.6.1`):

```
# for sure required
--set node.rbac.openshift.privileged=true
--set node.driver.localtimeHostPath=false
# unlikely, but in special circumstances may be required
--set controller.rbac.openshift.privileged=true
```

{{< /expand >}}
* Visit the [Kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) or this [Kubernetes CSI guide](https://kubernetes-csi.github.io/docs/) for more Kubernetes deployment and configuration information.
{{< /tab >}}
{{< tab "Nomad" >}}
## Nomad
 
[Nomad](https://www.nomadproject.io/) is a "simple and flexible workload orchestrator to deploy and manage containers and non-containerized applications across on-prem and clouds at scale."

The democratic-csi works in Nomad with limited functionality and has to be deployed as a set of jobs. The controller job runs as a single instance, and the node job runs on every node and manages mounting the volume.

Read the [Nomad Support](https://github.com/democratic-csi/democratic-csi/blob/master/docs/nomad.md) page in the democratic-csi GitHub for detailed setup instructions.
Visit the [Nomad Storage Plugins](https://www.nomadproject.io/docs/internals/plugins/csi) page to learn how Nomad manages dynamic storage plugins.

{{< /tab >}}
{{< tab "Mesos" >}}
## Mesos
 
[Mesos](https://mesos.apache.org/documentation/latest/csi/) is an open source cluster manager that abstracts CPU, memory, storage, and other compute resources away from machines (physical or virtual), enabling fault-tolerant and elastic distributed systems to easily be built and run effectively.
{{< /tab >}}
{{< tab "Cloud Foundry" >}}
## Cloud Foundry
 
[Cloud Foundry](https://github.com/cloudfoundry-attic/csi-plugins-release/) is an open source cloud platform as a service (PaaS) on which developers can build, deploy, run and scale applications.
{{< /tab >}}
{{< /tabs >}}

As always, we welcome and encourage contributions from the community!

# Additional Resources

- https://github.com/democratic-csi/democratic-csi/blob/master/README.md
- https://github.com/democratic-csi/democratic-csi/blob/master/docs/nomad.md
