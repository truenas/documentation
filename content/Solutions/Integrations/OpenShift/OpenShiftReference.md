---
title: "OpenShift Operator Reference"
description: "Provides reference information for the TrueNAS OpenShift Operator including storage concepts, full TrueNASCSI and StorageClass YAML specifications, network and TLS requirements, troubleshooting tips, and support resources."
weight: 40
aliases:
tags:
- OpenShift Operator
- TrueNAS CSI driver
- Containerized applications
related: false
doctype: reference
---


This article provides general reference information about the TrueNAS OpenShift Operator. It covers basic storage concepts, the workflow from storage request to volume provisioning, and full YAML specifications for the TrueNASCSI custom resource and NFS and iSCSI StorageClasses. It also includes network and TLS configuration requirements, troubleshooting tips, and support resources.

Use this article alongside the [OpenShift Operator Administrators Guide]({{< ref "OpenShiftOperator" >}}) and [OpenShift Operator User Guide]({{< ref "OpenShiftOperatorUserGuide" >}}) for complete deployment information.

## OpenShift Storage Concepts

OpenShift is built on Kubernetes, an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. The OpenShift Operator packages and manages the TrueNAS CSI Driver, providing a native OpenShift deployment experience through OperatorHub.

The following are important terms and foundational to how OpenShift (Kubernetes) and the TrueNAS CSI driver provides storage:

* **Pod** - A pod is the smallest deployable unit in Kubernetes. It contains one or more containers. Because pods can be created and destroyed frequently, they need persistent storage to retain data beyond their lifecycle.

* **Project** - OpenShift term for a Kubernetes namespace. Developers work within projects to organize and isolate their workloads and storage requests.

* **Persistent Volume** - A persistent volume is a piece of storage in the cluster, provisioned by the Kubernetes administrator or can be dynamically provisioned via storage classes (StorageClass). It exists independently of pods, and has a lifecycle independent of any pod that uses it.

* **PersistentVolumeClaims (PVC)** - A persistent volume claim (PVC) is a request for storage by a user or application. It specifies size, access mode, and storage class.
  Kubernetes finds or creates a matching PV. It acts like a *ticket* that entitles a pod to use storage. Think of it like this:

  PV = a physical parking space
  PVC = a parking ticket requesting a space
  Pod = a car that parks in the space

* **StorageClass** - A StorageClass defines classes of storage with different properties. They enable dynamic provisioning, specifying which provisioner to use (for example, TrueNAS CSI Driver), and contains parameters for that provisioner (pool name, compression, etc.).

* **Container Storage Interface (CSI)** - A container storage interface (CSI) is an industry standard for storage plugins in Kubernetes. It enables storage vendors to write one plugin that works everywhere, and separates storage logic from Kubernetes core. The TrueNAS CSI driver implements this standard.

## How It Works

The process begins with a user requesting storage by creating a PVC YAML file using `oc apply -f filename.yaml` that specifies volume size, access mode, StorageClass.
After this, OpenShift detects the new PVC and calls the TrueNAS CSI driver CreateVolume function.
Next the CSI driver communicates with TrueNAS via the API, which creates the volume on the specified pool.
TrueNAS then returns volume information to the CSI driver, which creates a PersistentVolume (PV) and binds it to the PVC.
Finally, the pod can now mount and use the volume.

## TrueNASCSI Custom Resource

The `TrueNASCSI` custom resource configures the CSI driver deployment.

Use these full YAML records in place of those in the [OpenShift Operator Administrators Guide]({{< ref "OpenShiftOperator" >}}) if the deployment requires the extra parameters.

### Full Specification

```yaml
apiVersion: csi.truenas.io/v1alpha1
kind: TrueNASCSI
metadata:
  name: truenas
spec:
  # Required: TrueNAS WebSocket API URL
  truenasURL: "wss://truenas.example.com/api/current"

  # Required: Name of the Secret containing the API key
  credentialsSecret: "truenas-api-credentials"

  # Required: Default ZFS pool for volume provisioning
  defaultPool: "tank"

  # Optional: NFS server IP address (required for NFS volumes)
  nfsServer: "192.168.1.100"

  # Optional: iSCSI portal address (required for iSCSI volumes)
  iscsiPortal: "192.168.1.100:3260"

  # Optional: Base IQN for iSCSI targets
  iscsiIQNBase: "iqn.2005-10.org.freenas.ctl"

  # Optional: Skip TLS certificate verification
  insecureSkipTLS: false

  # Optional: Custom driver image
  driverImage: "quay.io/truenas_solutions/truenas-csi:v0.1.0"

  # Optional: Number of controller replicas (default: 1)
  controllerReplicas: 1

  # Optional: Node selector for CSI pods
  nodeSelector:
    node-role.kubernetes.io/worker: ""

  # Optional: Tolerations for CSI pods
  tolerations:
    - key: "node.kubernetes.io/not-ready"
      operator: "Exists"
      effect: "NoExecute"
      tolerationSeconds: 300
```

#### Specification Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `truenasURL` | string | Yes | - | WebSocket URL to TrueNAS API |
| `credentialsSecret` | string | Yes | - | Name of Secret with API key |
| `defaultPool` | string | Yes | - | Default ZFS pool name |
| `nfsServer` | string | No | - | NFS server IP address |
| `iscsiPortal` | string | No | - | iSCSI portal (IP:port) |
| `iscsiIQNBase` | string | No | `iqn.2005-10.org.freenas.ctl` | Base IQN for targets |
| `insecureSkipTLS` | bool | No | `false` | Skip TLS verification |
| `driverImage` | string | No | Operator default | Custom driver image |
| `controllerReplicas` | int32 | No | `1` | Controller pod replicas |
| `nodeSelector` | map | No | - | Node selector labels |
| `tolerations` | array | No | - | Pod tolerations |

#### Status Fields

The operator updates the status subresource with deployment information.

```yaml
status:
  phase: Running          # Current phase: Pending, Running, Failed
  controllerReady: true   # Controller deployment ready
  nodeDaemonSetReady: true # Node DaemonSet ready
  conditions:
    - type: Ready
      status: "True"
      reason: DeploymentReady
      message: "CSI driver is ready"
      lastTransitionTime: "2026-01-20T00:00:00Z"
```

## StorageClasses Configuration

Use these full YAML records in place of those in the [OpenShift Operator Administrators Guide]({{< ref "OpenShiftOperator" >}}) if the deployment requires the extra parameters.

### NFS StorageClass

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: truenas-nfs
provisioner: csi.truenas.io
parameters:
  # Required
  protocol: nfs
  pool: tank

  # Optional: Dataset path within pool
  datasetPath: "kubernetes/volumes"

  # Optional: ZFS compression (off, lz4, gzip, zstd, etc.)
  compression: "lz4"

  # Optional: Sync mode (standard, always, disabled)
  sync: "standard"

  # Optional: Record size (default: 128K)
  recordsize: "128K"

  # Optional: Access time updates (on, off)
  atime: "off"

  # Optional: NFS export options
  nfsExportOptions: "sec=sys,rw,no_root_squash"

reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: Immediate
mountOptions:
  - nfsvers=4.1
  - hard
  - intr
```

### iSCSI StorageClass

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: truenas-iscsi
provisioner: csi.truenas.io
parameters:
  # Required
  protocol: iscsi
  pool: tank

  # Required: Filesystem type
  fsType: ext4  # or xfs

  # Optional: Dataset path within pool
  datasetPath: "kubernetes/volumes"

  # Optional: ZFS compression
  compression: "lz4"

  # Optional: Volume block size
  volblocksize: "16K"

  # Optional: Sparse volumes (thin provisioning)
  sparse: "true"

reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: Immediate
```

### StorageClass Parameters Reference

| Parameter | Protocols | Values | Description |
|-----------|-----------|--------|-------------|
| `protocol` | all | `nfs`, `iscsi` | Storage protocol |
| `pool` | all | string | ZFS pool name |
| `datasetPath` | all | string | Path within pool |
| `compression` | all | `off`, `lz4`, `gzip`, `zstd` | ZFS compression |
| `sync` | all | `standard`, `always`, `disabled` | Sync behavior |
| `fsType` | iscsi | `ext4`, `xfs` | Filesystem type |
| `recordsize` | nfs | `4K`-`1M` | NFS record size |
| `volblocksize` | iscsi | `512`-`128K` | iSCSI block size |
| `sparse` | iscsi | `true`, `false` | Thin provisioning |
| `atime` | all | `on`, `off` | Access time updates |

## VolumeSnapshotClass Configuration

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:
  name: truenas-snapclass
driver: csi.truenas.io
deletionPolicy: Delete
parameters:
  # Optional: Snapshot naming prefix
  snapshotPrefix: "k8s-snap"
```

## Network Requirements

This section provides TLS configuration information for network and cluster administrators, and port settings for the TrueNAS administrator.

### Firewall Rules

Ensure the following connectivity between OpenShift nodes and TrueNAS:

| Protocol | Port | Direction | Purpose |
|----------|------|-----------|---------|
| TCP | 443 | Nodes -> TrueNAS | WebSocket API |
| TCP | 2049 | Nodes -> TrueNAS | NFS |
| TCP | 3260 | Nodes -> TrueNAS | iSCSI |

### TLS Configuration

For production environments, use valid TLS certificates:

* TrueNAS with valid certificate: Set `insecureSkipTLS: false`
* TrueNAS with self-signed certificate: Set `insecureSkipTLS: true` (not recommended for production)

**Network admin** — Ensure valid TLS is configured on the network path between OpenShift nodes and TrueNAS (port 443).
This is typically handled by the existing enterprise certificate infrastructure.

**OpenShift cluster admin** — Set `insecureSkipTLS: false` in the TrueNASCSI CR for production environments, or `insecureSkipTLS: true` for non-production/self-signed environments.


## Troubleshooting Tips

This section provides troubleshooting tips to access logs, and resolve general configuration or basic connectivity issues.

### Check Operator Logs

```bash
oc logs -n openshift-operators deployment/truenas-csi-operator-controller-manager
```

### Check CSI Controller Logs

```bash
oc logs -n truenas-csi deployment/truenas-csi-controller -c csi-controller
```

### Check CSI Node Logs

```bash
oc logs -n truenas-csi daemonset/truenas-csi-node -c csi-node
```

### Common Issues

1. **Connection refused to TrueNAS**: Verify the `truenasURL` is correct and the API is accessible from the cluster.

2. **Authentication failed**: Verify the API key in the secret is correct and that it was created by a TrueNAS user with full administration privileges.

3. **Volume provisioning fails**: Check the TrueNAS logs and ensure the specified pool exists with sufficient space.

4. **iSCSI volumes not mounting**: Ensure iSCSI initiator is installed on all nodes and the portal address is correct.

### Verify TrueNAS Connectivity

```bash
# Test WebSocket connection from a pod
oc run test-ws --rm -it --image=curlimages/curl -- \
  curl -k wss://your-truenas-ip/api/current
```

### Check API Key

```bash
# Verify secret exists and has correct key
oc get secret truenas-api-credentials -n truenas-csi -o yaml
```

### Validate StorageClass

```bash
# Check StorageClass configuration
oc describe storageclass truenas-nfs
```

### Test Volume Provisioning

```bash
# Create a test PVC
cat <<EOF | oc apply -f -
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: test-pvc
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: truenas-iscsi
  resources:
    requests:
      storage: 1Gi
EOF

# Check PVC status
oc get pvc test-pvc

# Check events for errors
oc describe pvc test-pvc
```

## OpenShift Support

For issues and feature requests, please visit:
- GitHub: https://github.com/truenas/truenas-csi
- TrueNAS Documentation: https://www.truenas.com/docs/
