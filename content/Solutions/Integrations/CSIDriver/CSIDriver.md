---
title: "CSI Driver Administrators Guide"
description: "Provides Kubernetes cluster adminitrators with the information needed to deploy the TrueNAS CSI Driver integration with the Kubernetes, including informatio on setting up StorageClasses."
weight: 20
aliases:
tags:
- CSI driver
- Kubernetes
related: false
doctype: tutorial
---


## Configuation Overview

This article is for Kubernetes cluster administrators who perform the one-time configuration of Kubernetes that consists of:
* Setting up each worker node that can use the CSI driver
* Deploying the TruenAS CSI driver in Kubernetes

After receiving the authentication credentials from the TrueNAS administrator, they then establish communication with TrueNAS using the API authentication key provided by TrueNAS and the TrueNAS system IP address.

The TrueNAS administrator does the one-time setup that consists of:
* Creating an API key for Kubernetes authentication
* Setting up a pool to use for storage
* Turning on the appropriate service (nfs for file or iscsi for block storage requests)
* Supplying the Kubernetes administrator with the API and IP address of the TrueNAS system

Each Kubernetes cluster user(developer) creates a yaml file that specifies the volume size, access mode, StorageClass, etc., then submits this PVC request in Kubernetes using a kubectl command.
TrueNAS receives the request, adds the requested volumes based on the StorageClass information received in the yaml file.

The CSI driver does the work of communicating what is received from Kubernetes, passes it to TrueNAS, and then sends information from TrueNAS back to Kubernetes where users can mount the storage volume(s) requested.

### Prerequisites

* Kubernetes Cluster Requirements
  - Kubernetes Version 1.20 or higher
  - Node OS Linux (Ubuntu, RHEL, Debian, etc.)

* Required packages on Kubernetes nodes:
  - For NFS: `nfs-common` (Debian/Ubuntu) or `nfs-utils` (RHEL/CentOS)
  - For iSCSI: `open-iscsi`, `multipath-tools`

* Privileges: Cluster admin access for installation

#### TrueNAS Requirements

* TrueNAS Version 26.0 or later

* Services enabled:
  * NFS service (for NFS volumes)
  * iSCSI service (for iSCSI volumes)

* Network connectivity - Kubernetes nodes must reach TrueNAS IP

* Storage pool - provide at least one ZFS pool with space available to meet the users needs

* API key with administrative privileges to authenticate Kubernetes connections

* TrueNAS network requirements:
  * TrueNAS WebSocket API Port 443 (HTTPS/WSS)
  * NFS Port 2049 (TCP/UDP)
  * iSCSI Port 3260 (TCP)
  * Firewall that allows Kubernetes pod network CIDR to reach TrueNAS

### Configuring TrueNAS

Log in to TrueNAS:

1. Generate an API key for Kubernetes.
   
   a. Click on **Settings** on the top toolbar, then click **My API Keys** to open the **User API Keys** screen.
   b. Click **Add**, enter a name for the key, for example, *Kubernetes* or *CSI driver*.
   c. Click **Save**. 
   d. Copy the key to a txt file or a document you keep secured, and backed up regularly.

   Provide this to the Kubernetes cluster administrator, who should enter this key in Kubernetes along with the TrueNAS IP address to establish authenticated communication with TrueNAS.

   For more information on TrueNAS API keys, see [Managing API Keys]({{< ref "ManagingAPIKeys" >}})

   To locate the IP address for TrueNAS, go to **System > Network**. The primary network interface is listed in the **Interfaces** card.

2. Enable the NFS service if using NFS, or enable the iSCSI service if using iSCSI.
   
   a. Go to **System > Services**.
   b. Edit the service settings to provide the required port access. NFS set to type to TCP and port 2049, type UDP and port 2049. iSCSI type to TCP and port 3260.
   c. Click **Save**.
   d. Click on the enable-service toggle to turn on the **NFS** and/or **iSCSI** services based on your use case. 
      If you installed the nfs-common package on the Kubernetes worker nodes, enable the NFS service. If you installed the iscsi-common package on the Kubernetes worker nodes, enable the iSCSI service.

3. Create a new pool or locate a pool with enough storage to accomodate the Kubernetes cluster storage needs.
   Go to **Storage Dashboard**, identify a pool with enough storage capacity to suit your use case, or click **Create Pool** to add a new pool for Kubernetes volumes.
   For more information on creating new pools, see [Creating Pools]({{< ref "CreatingPools" >}}). To increase storage in an existing pool, see [Exapnding a Pool in Managing Pools]({{< ref "ManagePools" >}}).
  
4. Verify the Websocket API port is set to port 443. Go to **System > General Settings**. The **Gui** card should show the Web Interface HTTPS port set to 443.
   If not, click **Settings**, locate the **Web Interface HTTPS Port** field and change the value to 443. Click **Save** after making a change.

   Provide the path to the Kubernetes cluster administrator.

### Verifying the Network Configuration

Check with your network administrator to verify the Kubernetes cluster can communicate with the TrueNAS server.

### Configuring Kubernetes

First, download the container image and the **deploy/truenas-csi-driver.yaml** file found here:

* [Docker image file](http://quay.io/truenas_solutions/truenas-csi:latest)

   If doing full OpenShift, you can fetch it from the Red Hat catalog.

* Obtain the **deploy/truenas-csi-driver.yaml** file.

  Download the raw download from https://raw.githubusercontent.com/truenas/truenas-csi/master/deploy/truenas-csi-driver.yaml

  Or fetch it directly using the following command:
  
  `curl -O https://raw.githubusercontent.com/truenas/truenas-csi/master/deploy/truenas-csi-driver.yaml`

  For standard Kubernetes, the user needs to edit deploy/truenas-csi-driver.yaml before deploying.
  They update the ConfigMap with their TrueNAS connection details (URL, pool name, NFS server address, iSCSI portal) and the Secret with their API key.
  Then `kubectl apply -f deploy/truenas-csi-driver.yaml.` which is covered in step 4 in the procedure below.

  If using OpenShift, editing the YAML is not required. The user installs the operator from OperatorHub through the web console, then creates two small resources:

  1. A Secret with their API key

  2. A TrueNASCSI custom resource with their connection details (TrueNAS URL, pool name, etc.)

  Both of those can be created through the OpenShift console UI or via `oc apply`. The operator handles all the deployment details.

  After that, on either platform, the user creates StorageClass and PVC resources, but these are standard Kubernetes patterns, and not a driver-specific setup.

The procedure below covers addng the API key and TrueNAS IP address to Kubernetes to establish communication, editing the deploy/yaml file, adding required packages, deploying the CSI driver, and setting up StoragClasses. 

Kubernetes automatically communicates with TrueNAS, making stoarge requests, driver calls to the TrueNAS API, and TrueNAS creates the resources.
For more information on Kubernetes, refer to:
- [Kubernetes Documentation Configuration - Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) 
- [Kubernetes Documentation Configuration - ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) 

To deploy the CSI Driver, the Kubernetes cluster adminstrator does the following:

1. Install NFS packages on all nodes.

   ```bash
   # Debian/Ubuntu
   sudo apt-get install -y nfs-common

   # RHEL/CentOS
   sudo yum install -y nfs-utils
   ```

2. Install iSCSI packages on all nodes (if using iSCSI).

   ```bash
   # Debian/Ubuntu
   sudo apt-get install -y open-iscsi multipath-tools
   sudo systemctl enable iscsid
   sudo systemctl start iscsid

   # RHEL/CentOS
   sudo yum install -y iscsi-initiator-utils
   sudo systemctl enable iscsid
   sudo systemctl start iscsid
   ```

3. Verify kubectl access.

   ```bash
   kubectl cluster-info
   kubectl get nodes
   ```

4. Configure the deployment manifest, by editing the `deploy/truenas-csi-driver.yaml`.

   Update `ConfigMap` (line ~160) in the YAML file:

   ```yaml
    data:
      truenasURL: "wss://YOUR_TRUENAS_IP/api/current"
      truenasInsecure: "true"  # Set to "false" for production with valid certs
      defaultPool: "YOUR_POOL_NAME"  # e.g., "tank"
      nfsServer: "YOUR_TRUENAS_IP"
      iscsiPortal: "YOUR_TRUENAS_IP:3260"
      iscsiIQNBase: "iqn.2000-01.io.truenas"  # Optional: customize IQN prefix
   ```

   Update `secret` (line ~150) in the YAML file:
   ```yaml
     stringData:
     api-key: "YOUR_TRUENAS_API_KEY"
   ```

   Update Image (line ~188, ~345):
   ```yaml
     image: wmohanlon/truenas-csi-driver:v1.0.0  # Or your registry path
     imagePullPolicy: IfNotPresent
   ```

5. Deploy the CSI driver.

   ```bash
   # Apply the manifest
   kubectl apply -f deploy/truenas-csi-driver.yaml

   # Wait for pods to be ready
   kubectl wait --for=condition=Ready pod -n truenas-csi -l app=truenas-csi-controller --timeout=120s
   kubectl wait --for=condition=Ready pod -n truenas-csi -l app=truenas-csi-node --timeout=120s

   # Verify deployment
   kubectl get pods -n truenas-csi
   kubectl get csidriver csi.truenas.io
   ```

   {{< expand "Expected Output:" "v" >}}
   ```text
   NAME                                      READY   STATUS
   truenas-csi-controller-xxxxxxxxxx-xxxxx   6/6     Running
   truenas-csi-node-xxxxx                    3/3     Running
   truenas-csi-node-xxxxx                    3/3     Running
   ```
   {{< /expand >}} 

6. Verify authentication by checking controller logs for successful authentication.

   ```bash
   kubectl logs -n truenas-csi -l app=truenas-csi-controller -c csi-controller | grep -i auth
   ```
   {{< expand "Expected Output:" "v" >}}
   ```
   Successfully authenticated with TrueNAS
   Pool 'tank' validated successfully
   ```
  {{< /expand >}} 

7. Create the StorageClasses for the package method used (NFS or iSCSI).

   {{< expand "Create NFS StorageClass:" "v" >}}
    ```
    kubectl apply -f - <<EOF
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: truenas-nfs
    provisioner: csi.truenas.io
    parameters:
      protocol: "nfs"
      pool: "tank"
      compression: "lz4"
      sync: "standard"
    allowVolumeExpansion: true
    reclaimPolicy: Delete
    volumeBindingMode: Immediate
    EOF
    ```
   {{< /expand >}}

   {{< expand "Create iSCSI StorageClass:" "v" >}}
   ```bash
   kubectl apply -f - <<EOF
   apiVersion: storage.k8s.io/v1
   kind: StorageClass
   metadata:
     name: truenas-iscsi
   provisioner: csi.truenas.io
   parameters:
     protocol: "iscsi"
     pool: "tank"
     compression: "lz4"
     volblocksize: "16K"
   allowVolumeExpansion: true
   reclaimPolicy: Delete
   volumeBindingMode: Immediate
   EOF
   ```
   {{< /expand >}}

8. Create a test volume

   ```bash
   # Create test PVC
   kubectl apply -f - <<EOF
   apiVersion: v1
   kind: PersistentVolumeClaim
   metadata:
     name: test-volume
     namespace: default
   spec:
     accessModes:
       - ReadWriteMany
     storageClassName: truenas-nfs
     resources:
       requests:
         storage: 1Gi
   EOF

   # Wait for binding
   kubectl wait --for=jsonpath='{.status.phase}'=Bound pvc/test-volume --timeout=60s

   # Check status
   kubectl get pvc test-volume
   ```

   If PVC binds the installation is successful!

### StorageClass Parameters

The following parameters are needed when configuring Kubernetes.

#### Common Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `protocol` | string | nfs | Storage protocol: "nfs" or "iscsi" |
| `pool` | string | (from ConfigMap) | ZFS pool name (overrides default) |
| `compression` | string | lz4 | ZFS compression: lz4, gzip, zstd, off |

#### NFS and iSCSI Parameters
{{< tabs >}}
{{< tab "NFS-Specific Parameters" >}}

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `sync` | string | standard | ZFS sync: standard, always, disabled |
| `nfs.hosts` | string | - | Comma-separated allowed hosts |
| `nfs.networks` | string | - | Comma-separated allowed networks (CIDR) |

**Example:**
```yaml
parameters:
  protocol: "nfs"
  pool: "tank"
  compression: "lz4"
  sync: "standard"
  nfs.networks: "10.0.0.0/8,192.168.0.0/16"
```
{{</tab >}}
{{< tab "iSCSI-Specific Parameters" >}} 

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `volblocksize` | string | 16K | ZVOL block size: 4K, 8K, 16K, 32K, 64K, 128K |
| `iscsi.blocksize` | string | 512 | iSCSI extent logical block size |
| `iscsi.iqn-base` | string | (from ConfigMap) | Custom IQN prefix per StorageClass |

**Example:**
```yaml
parameters:
  protocol: "iscsi"
  pool: "ssd-pool"
  compression: "lz4"
  volblocksize: "8K"
  iscsi.blocksize: "512"
```
{{</tab >}}
{{< /tabs >}}

#### StorageClass Design Patterns

* Pattern 1: Performance Tiers
  
  {{< expand "Fast tier - SSD pool with minimal compression" "v" >}} 
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: truenas-fast
provisioner: csi.truenas.io
parameters:
  protocol: "iscsi"
  pool: "ssd-pool"
  compression: "off"
  volblocksize: "8K"
allowVolumeExpansion: true
reclaimPolicy: Delete
```
  {{< /expand >}}
  {{< expand "Standard tier - HDD pool with LZ4" "v" >}} 
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: truenas-standard
provisioner: csi.truenas.io
parameters:
  protocol: "nfs"
  pool: "hdd-pool"
  compression: "lz4"
allowVolumeExpansion: true
reclaimPolicy: Delete
```
  {{< /expand >}}

  {{< expand " Archive tier - High compression" "v" >}}
``` yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: truenas-archive
provisioner: csi.truenas.io
parameters:
  protocol: "nfs"
  pool: "archive-pool"
  compression: "gzip-9"
allowVolumeExpansion: true
reclaimPolicy: Retain  # Keep data even if PVC deleted
```
  {{</expand>}}

* Pattern 2: Protocol-Specific
  
  {{< expand "NFS for shared file storage" "v" >}}
  ```yaml
  apiVersion: storage.k8s.io/v1
  kind: StorageClass
  metadata:
    name: shared-files
  provisioner: csi.truenas.io
  parameters:
    protocol: "nfs"
    pool: "tank"
    compression: "lz4"
    sync: "standard"
   nfs.networks: "10.0.0.0/8"  # Restrict to internal network
  allowVolumeExpansion: true
  reclaimPolicy: Delete
  ```
  {{< /expand >}}
  {{< expand "iSCSI for database block storage" "v" >}}
  ```yaml
  apiVersion: storage.k8s.io/v1
  kind: StorageClass
  metadata:
    name: database-block
  provisioner: csi.truenas.io
  parameters:
    protocol: "iscsi"
    pool: "tank"
    compression: "lz4"
    volblocksize: "16K"
    iscsi.blocksize: "4096"
  allowVolumeExpansion: true
  reclaimPolicy: Retain  # Keep DB data if PVC accidentally deleted
  ```
  {{< /expand >}}

* Pattern 3: Application-Specific
  {{< expand "PostgreSQL optimized" "v" >}}
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: postgres-storage
provisioner: csi.truenas.io
parameters:
  protocol: "iscsi"
  pool: "db-pool"
  compression: "lz4"
  volblocksize: "8K"  # Match PostgreSQL page size
  zfs.recordsize: "8K"
allowVolumeExpansion: true
reclaimPolicy: Retain
```
  {{< /expand >}}

  {{< expand "Media/video storage" "v" >}}
``` yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: media-storage
provisioner: csi.truenas.io
parameters:
  protocol: "nfs"
  pool: "media-pool"
  compression: "off"  # Media already compressed
  sync: "disabled"    # Better performance for streaming
  zfs.recordsize: "1M"  # Large files
allowVolumeExpansion: true
reclaimPolicy: Retain
```
  {{< /expand >}}

####  ReclaimPolicy Explained

**Delete (default):**
- When PVC is deleted, PV and backend storage are automatically deleted
- Use for: Temporary data, dev/test environments
- Risk: Accidental PVC deletion causes data loss

**Retain:**
- When PVC is deleted, PV and backend storage are kept
- Admin must manually delete resources
- Use for: Production databases, important data
- Safety: Prevents accidental data loss

**Example:**
```yaml
reclaimPolicy: Retain  # Safe for production
reclaimPolicy: Delete  # Convenient for dev/test
```

### Advanced ZFS Properties

Set advanced ZFS properties via StorageClass:

Any parameter prefixed with `zfs.` is set as a ZFS property:

```yaml
parameters:
  protocol: "nfs"
  pool: "tank"
  zfs.recordsize: "128K"     # Sets recordsize property
  zfs.atime: "off"           # Disables access time updates
  zfs.dedup: "on"            # Enables deduplication (use cautiously!)
```

#### Custom ZFS Properties

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: truenas-custom
provisioner: csi.truenas.io
parameters:
  protocol: "nfs"
  pool: "tank"
  compression: "lz4"
  zfs.recordsize: "1M"      # Large recordsize for large files
  zfs.atime: "off"          # Better performance (no access time updates)
  zfs.redundant_metadata: "most"  # Balance between performance and safety
  zfs.xattr: "sa"           # System attribute-based extended attributes
```
**Common ZFS Properties Descriptions**
- `recordsize`: Suggested block size (4K-1M) - affects performance
- `atime`: Access time updates (on/off) - disable for performance
- `dedup`: Deduplication (on/off) - requires lots of RAM
- `sync`: Write behavior (standard/always/disabled)
- `redundant_metadata`: Metadata redundancy level

**Warning:** Some properties (like dedup) can significantly impact TrueNAS performance. Consult ZFS documentation and test before using in production.
