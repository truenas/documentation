---
title: "Containers"
weight: 25
---

{{< toc >}}

TrueNAS CORE does not natively support container solutions. However, the open-source community has made a container storage interface (CSI) driver available for TrueNAS CORE! 

The driver (available at https://github.com/democratic-csi/democratic-csi) supports integrating popular container solutions like Kubernetes, Nomad, or Mesos into the TrueNAS CLI.

A CSI (Container Storage Interface) is an interface between container workloads and third-party storage that supports creating and configuring persistent storage external to the orchestrator, its input/output (I/O), and its advanced functionality such as snapshots and cloning.

The democratic-csi focuses on providing storage using iSCSI, NFS, and SMB protocols, and includes several ZFS features like snapshots, cloning, and resizing.

# Features

- dynamically provisions/de-provision storage and shares it as appropriate for cluster usage
- online resize operations to dynamically expand volumes as needed
- snapshot support (using either `zfs send/receive` or `zfs snapshot`)
- cross-architecture (amd64, armv7, arm64)

# Installation

3 steps to install the democratic-csi:

1. Prepare the nodes (ie: your Kubernetes cluster nodes).
2. Deploy the driver into the cluster (`helm` chart provided with sample `values.yaml`).
3. Prepare the server with a container solution.

## Prepare the Nodes

Install and configure the requirements for both NFS and iSCSI.
{{< tabs "NodePrep" >}}
{{< tab "NFS" >}}
## NFS

```
RHEL / CentOS
sudo yum install -y nfs-utils
Ubuntu / Debian
sudo apt-get install -y nfs-common
```
{{< /tab >}}
{{< tab "iSCSI" >}}
## iSCSI

{{< hint info >}}
Note that multipath is supported for the `iscsi`-based drivers. Configure multipath with multiple portals in the configuration as needed.

If you are running Kubernetes with rancher/rke please see the https://github.com/rancher/rke/issues/1846.

```
RHEL / CentOS
# Install the following system packages
sudo yum install -y lsscsi iscsi-initiator-utils sg3_utils device-mapper-multipath
# Enable multipathing
sudo mpathconf --enable --with_multipathd y
# Ensure that iscsid and multipathd are running
sudo systemctl enable iscsid multipathd
sudo systemctl start iscsid multipathd
# Start and enable iscsi
sudo systemctl enable iscsi
sudo systemctl start iscsi
Ubuntu / Debian
# Install the following system packages
sudo apt-get install -y open-iscsi lsscsi sg3-utils multipath-tools scsitools
# Enable multipathing
sudo tee /etc/multipath.conf <<-'EOF'
defaults {
    user_friendly_names yes
    find_multipaths yes
}
EOF
sudo systemctl enable multipath-tools.service
sudo service multipath-tools restart
# Ensure that open-iscsi and multipath-tools are enabled and running
sudo systemctl status multipath-tools
sudo systemctl enable open-iscsi.service
sudo service open-iscsi start
sudo systemctl status open-iscsi
```
{{< /hint >}}
{{< /tab >}}
{{< tab "SMB" >}}
## SMB

If using with Windows based machines you may need to enable guest access (even
if you are connecting with credentials).

```
Set-ItemProperty HKLM:\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters AllowInsecureGuestAuth -Value 1
Restart-Service LanmanWorkstation -Force
```
{{< /tab >}}
{{< /tabs >}}

## Deploy the Driver (Helm Installation)

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
{{< expand "Note About non-standard Kubelet Paths" "v" >}}
If you're using a distribution with a non-standard kubelet path (such as `minikube` and `microk8s`), you will need to provide a new kubelet host path (microk8s example below).

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

## Prepare the Server with a Container Solution

We recommend using TrueNAS 12.0-U2.1+. However, the driver should work with older versions too.

Once you have prepared the nodes and set up the democratic-csi driver using the instructions above, you may navigate through the tabs below to prepare the server with a container solution. Several container solutions integrate with TrueNAS, but we prefer Kubernetes. Before you set up a container solution, go to **Services** and make sure that *iSCSI*, *NFS*, and *SSH* are enabled.

{{< tabs "ContainerSolutions" >}}
{{< tab "Kubernetes" >}}
## Kubernetes
 
[Kubernetes](https://kubernetes.io/) is "an open-source system for automating deployment, scaling, and management of containerized applications."

### Create Pools

Go to **Storage > Pools** and create the pools that you want to include in your Kubernetes container.

### Set up SSH 

Now you need to ensure that the user account Kubernetes will use to SSH to TrueNAS has a supported shell.  
Go to **Accounts > Users** and set the desired user's *Shell* to either *bash* or *sh*, then click *SAVE*.

{{< hint info >}}
 
Also, if you want to use a non-root user for the SSH operations, you may create a `csi` user and then run `visudo` directly from the console. Make sure the line for the `csi` user has `NOPASSWD` added (note: this can get reset by TrueNAS if you alter the user via the GUI later):

```
csi ALL=(ALL) NOPASSWD:ALL
```

With TrueNAS CORE 12, you can use an `apiKey` instead of the `root` password for the HTTP connection.
{{< /hint >}}

### Set up NFS

1. Go to **Services** and click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i> next to *NFS* to edit its properties.
2. Make sure *Enable NFSv4*, *NFSv3 ownership model for NFSv4*, and *Allow non-root mount* are checked, then click *SAVE*.

### Set up iSCSI

1. Go to **Sharing > Block Shares (iSCSI)**.
2. Use the default settings in the *Target Global Configuration* tab.
3. In the *Portals* tab, click *ADD*, then create a **Description*. Set the *IP Address* to *0.0.0.0* and the *Port* to *3260*, then click *SUBMIT*.
4. In the *Initiators Groups* tab, click *ADD*. For ease of use, check the *Allow ALL Initiators*, then click *SAVE*. You can make restrictions later using the *Allowed Initiators (IQN)* function.
5. Kubernetes will create Targets and Extents automatically.

{{< hint info >}}
 
When using the TrueNAS API concurrently, the `/etc/ctl.conf` file on the server can become invalid. There are sample scripts in the `contrib` directory to clean things up ie: copy the script to the server and directly and run - `./ctld-config-watchdog-db.sh | logger -t ctld-config-watchdog-db.sh &`. Please read the scripts and set the variables as appropriate for your server.
  - Ensure you have preemptively created portals, initiator groups, and authorizations
    - Make note of the respective IDs (the true ID may not reflect what is visible in the UI)
    - You can make ID's visible by clicking the `Edit` link and finding the ID in the browser address bar
    - Alternately, use these commands to retrieve appropriate IDs:
      - `curl --header "Accept: application/json" --user root:<password> 'http(s)://<ip>/api/v2.0/iscsi/portal'`
      - `curl --header "Accept: application/json" --user root:<password> 'http(s)://<ip>/api/v2.0/iscsi/initiator'`
      - `curl --header "Accept: application/json" --user root:<password> 'http(s)://<ip>/api/v2.0/iscsi/auth'`
{{< /hint >}}

* You can run the `kubectl get pods -n democratic-csi -o wide` command to make sure all the democratic-csi pods are running.
* You can also run the `kubectl get sc` command to make sure your storage classes are present and set a default class.
* Visit the [Kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) for more Kubernetes creation and configuration commands.
{{< /tab >}}
{{< tab "Nomad" >}}
## Nomad
 
[Nomad](https://www.nomadproject.io/) is a "simple and flexible workload orchestrator to deploy and manage containers and non-containerized applications across on-prem and clouds at scale."

The democratic-csi works in Nomad with limited functionality and has to be deployed as a set of jobs. The controller job runs as a single instance, and the node job runs on every node and manages mounting the volume.

Read the [Nomad Support](https://github.com/democratic-csi/democratic-csi/blob/master/docs/nomad.md) page in the democratic-csi GitHub for detailed setup instructions. 

{{< /tab >}}
{{< tab "Mesos" >}}
## Mesos
 
[Mesos](http://mesos.apache.org/) is an open source cluster manager that abstracts CPU, memory, storage, and other compute resources away from machines (physical or virtual), enabling fault-tolerant and elastic distributed systems to easily be built and run effectively.
{{< /tab >}}
{{< /tabs >}}

As always, we welcome and encourage contributions from the community!

# Additional Resources

- https://github.com/democratic-csi/democratic-csi/blob/master/README.md
- https://github.com/democratic-csi/democratic-csi/blob/master/docs/nomad.md
- https://jonathangazeley.com/2021/01/05/using-truenas-to-provide-persistent-storage-for-kubernetes/
