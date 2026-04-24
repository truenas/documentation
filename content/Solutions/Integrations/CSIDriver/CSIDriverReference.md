---
title: "CSI Driver Reference"
description: "Provides information on best practices, example StorageClasses, glossary of terms, troubleshooting and diagnostic commands, and API commands related to the TrueNAS CSI Driver integration with Kubernetes."
weight: 40
aliases:
tags:
- CSI driver
- Kubernetes
related: false
doctype: tutorial
---


This article provides general reference information about the CSI Driver, a deployment checklist, capacity planning, troubleshooting and diagnostic commands for resolving issues between Kubernetes and the CSI driver, workflows for NFS and iSCSI deployments of the CSI driver integration with Kubernetes, best practices, a glossary of terms, as well as upgrade and suggested deployment options.

This article provides information that is not included in the administration and user guide articles.

### Kubernetes Fundamentals

Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.

The following are important terms and foundational to how the CSI driver works with Kubernetes:

* **Pod** - A pod is the smallest deployable unit in Kubernetes. It contains one or more containers.
  It can be created and destroyed frequently. They need persistent storage to retain data beyond their lifecycle.

* **Persistent Volume** - A persistent volume is a piece of storage in the cluster, provisioned by the Kubernetes administrator or can be dynamically provisioned via storage classes (StorageClass). It exists independently of pods, and has a lifecycle independent of any pod that uses it.

* **PersistentVolumeClaims (PVC)** - A persistent volume claim (PVC) is a request for storage by a user or application. It specifies size, access mode, and storage class.
  Kubernetes finds or creates a matching PV. It acts like a *ticket* that entitles a pod to use storage. Think of it like this:

  PV = a physical parking space
  PVC = a parking ticket requesting a space
  Pod = a car that parks in the space

* **StorageClass** - A StorageClass defines classes of storage with different properties. They enable dynamic provisioning, specifying which provisioner to use (for example, TrueNAS CSI Driver), and contains parameters for that provisioner (pool name, compression, etc.).

* **Container Storage Interface (CSI)** - A container storage interface (CSI) is an industry standard for storage plugins in Kubernetes. They enable storage vendors to write one plugin that works everywhere. They separate storage logic from Kubernetes core. The TrueNAS CSI driver implements this standard!

### How it works

A user creates a PVC requesting storage (creates a YAML file specifying, volume size, access mode, StorageClass, etc.).
Kubernetes calls the CSI driver CreateVolume function (executes the <code>kubectl apply -f <i>filename.yaml</i></code> command)
The CSI driver creates storage on the backend (TrueNAS creates the volume per request in YAML file), and then returns volume information to Kubernetes.
Kubernetes then creates a PV and binds it to a PVC.
A pod can now mount and use the volume.

## Best Practices

Before deploying the CSI driver integration, review the following best practices sessions to assist with planning the implementation in Kubernetes.

### Deployment Best Practices

1. **Use Dedicated Namespace**
   - Deploy driver in `truenas-csi` namespace (not `default` or `kube-system`)
   - Isolates driver from application workloads

2. **Resource Limits**
   - Set memory and CPU limits on driver pods
   - Prevents resource exhaustion
   - Recommended: 128Mi-256Mi RAM, 100m-200m CPU per container

3. **High Availability**
   - Controller uses leader election (supports multiple replicas)
   - For HA: Set `replicas: 3` in controller deployment
   - Node driver runs on all nodes automatically (DaemonSet)

4. **Security**
   - Use a strong TrueNAS API key
   - Rotate API keys periodically
   - Enable TLS verification in production (`truenasInsecure: "false"`)
   - Restrict the NFS networks parameter to the cluster pod CIDR

### Storage Management Best Practices

* Pool Planning
   - Use separate pools for different performance tiers
   - Monitor pool capacity
   - Set up TrueNAS alerts for pool >80% full

* Naming Conventions
   - Use descriptive StorageClass names (e.g., `fast-ssd`, `archive-hdd`)
   - PVC names should indicate application and purpose
   - Snapshot names should include date/time

* Quota Management
   - Set realistic default sizes in StatefulSet templates
   - Monitor actual usage
   - Use volume expansion when needed (don't over-provision initially)

* *Compression Strategy
   - `lz4` (default) - Good balance of speed and compression
   - `off` - For pre-compressed data (videos, images, archives)
   - `gzip` or `zstd` - Higher compression for archives, backups
   - Test with your data to determine the best setting

### Application Usage Best Practices

* StatefulSets for Databases

   ```yaml
   apiVersion: apps/v1
   kind: StatefulSet
   metadata:
     name: postgres
   spec:
     serviceName: postgres
     replicas: 3
     volumeClaimTemplates:  # Automatic PVC per replica
     - metadata:
         name: data
       spec:
         accessModes: [ReadWriteOnce]
         storageClassName: truenas-iscsi
         resources:
           requests:
             storage: 50Gi
   ```

* Shared Storage for Multi-Pod Apps

   ```yaml
   # One PVC, multiple pods (NFS only)
   apiVersion: v1
   kind: PersistentVolumeClaim
   metadata:
     name: shared-uploads
   spec:
     accessModes: [ReadWriteMany]
     storageClassName: truenas-nfs
     resources:
       requests:
         storage: 100Gi

   ---
   # Multiple pods reference same PVC
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: web-app
   spec:
     replicas: 5  # All 5 pods share same storage
     template:
       spec:
         volumes:
         - name: uploads
           persistentVolumeClaim:
             claimName: shared-uploads
   ```

* Backup Strategy
  - Create a VolumeSnapshotClass before using snapshot features:
    ```yaml
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshotClass
    metadata:
      name: truenas-snapshot-class
    driver: csi.truenas.io
    deletionPolicy: Delete
    ```
  - Daily snapshots via CronJob
  - Export snapshots to an external backup system
  - Test restore procedures regularly

   ```yaml
   apiVersion: batch/v1
   kind: CronJob
   metadata:
     name: daily-snapshot
   spec:
     schedule: "0 2 * * *"  # 2 AM daily
     jobTemplate:
       spec:
         template:
           spec:
             serviceAccountName: snapshot-creator
             containers:
             - name: create-snapshot
               image: bitnami/kubectl
               command:
               - /bin/sh
               - -c
               - |
                 kubectl apply -f - <<EOF
                 apiVersion: snapshot.storage.k8s.io/v1
                 kind: VolumeSnapshot
                 metadata:
                   name: db-snapshot-$(date +%Y%m%d)
                   namespace: production
                 spec:
                   volumeSnapshotClassName: truenas-snapshot-class
                   source:
                     persistentVolumeClaimName: postgres-data
                 EOF
             restartPolicy: OnFailure
   ```

### Performance Optimization Best Practices

* Choose the Right Protocol
  * **NFS:** Shared file access, ease of use, cross-platform
  * **iSCSI:** Better performance for databases, single-node access

* Tune ZFS Properties
  * `recordsize`: Match application I/O patterns
     - Database: 8K-16K
     - Large files: 128K-1M
  * `sync`: Adjust based on durability vs performance needs
     - `standard`: Good balance (default)
     - `always`: Maximum durability, slower writes
     - `disabled`: Faster, risk of data loss on crash

* Volume Block Size (iSCSI)
   - `volblocksize`: Must match application needs
   - Cannot be changed after creation
   - Default 16K is good for most uses
   - Database: Match DB page size (8K for PostgreSQL)

* Network Optimization
   - Use a dedicated network for storage traffic (if possible)
   - 10GbE recommended for high throughput
   - MTU 9000 (jumbo frames) for better performance

## Production Deployment Checklist

**Pre-Deployment:**
- [ ] TrueNAS system properly sized for workload
- [ ] Network connectivity tested from all K8s nodes to TrueNAS
- [ ] API key generated with strong security
- [ ] Pool created with appropriate RAID level
- [ ] NFS/iSCSI services tested manually
- [ ] Backup strategy for TrueNAS configuration

**Deployment:**
- [ ] Use production-grade container registry
- [ ] Tag images with version numbers (not `:latest`)
- [ ] Set `truenasInsecure: "false"` (validate TLS certificates)
- [ ] Configure resource limits on driver pods
- [ ] Enable leader election for controller HA
- [ ] Deploy to dedicated namespace

**Post-Deployment:**
- [ ] Monitor driver logs for errors
- [ ] Create test volume and verify in TrueNAS
- [ ] Set up alerting for driver pod failures
- [ ] Document StorageClasses for users
- [ ] Train users on PVC creation
- [ ] Establish snapshot/backup schedules

## Capacity Planning

### TrueNAS Side

- Reserve 20% pool space for snapshots and overhead
- Monitor pool space usage
- Set up TrueNAS alerts for capacity thresholds

### Kubernetes Side

- Use ResourceQuotas to limit PVC sizes per namespace
  ```yaml
  apiVersion: v1
  kind: ResourceQuota
  metadata:
    name: storage-quota
    namespace: dev
  spec:
    hard:
      requests.storage: 1Ti  # Max 1TB total storage in namespace
      persistentvolumeclaims: "50"  # Max 50 PVCs
  ```

## Troubleshooting

This section provides troubleshooting for common issues, and offers solutions to resolve them.

### "Pool name is required but not configured"

**Cause:** Pool name is empty or not set

**Solution:**
- Check ConfigMap has `defaultPool` set
- OR ensure StorageClass has `pool` parameter
- Verify pool name is correct and exists in TrueNAS

```bash
# Check ConfigMap
kubectl get configmap truenas-csi-config -n truenas-csi -o yaml

# Update if needed
kubectl patch configmap truenas-csi-config -n truenas-csi -p '{"data":{"defaultPool":"tank"}}'
kubectl rollout restart deployment truenas-csi-controller -n truenas-csi
```

### "Authentication failed: credentials were rejected by TrueNAS"

**Cause:** Invalid or expired API key

**Solution:**
1. Generate new API key in TrueNAS (Settings → API Keys)
2. Update Kubernetes secret:

   ```bash
   kubectl create secret generic truenas-api-credentials \
     --from-literal=api-key='NEW_KEY_HERE' \
     --namespace=truenas-csi \
     --dry-run=client -o yaml | kubectl apply -f -
   ```

3. Restart controller:

   ```bash
   kubectl rollout restart deployment truenas-csi-controller -n truenas-csi
   ```

### "Please provide a valid dataset name according to ZFS standards"

**Cause:** Dataset name starts with `/` or contains invalid characters

**Solution:** This is fixed in v1.0.0. If using an older version, upgrade to the latest driver.

### Connection Timeout to TrueNAS

**Cause:** Network connectivity issue

**Diagnosis:**
```bash
# Test from a pod
kubectl run nettest --image=busybox --rm -it --restart=Never -- ping -c 3 TRUENAS_IP

# Test WebSocket port
kubectl run wstest --image=curlimages/curl --rm -it --restart=Never -- \
  curl -k -I https://TRUENAS_IP/api/current
```

**Solution:**
- Check firewall rules on TrueNAS
- Check Kubernetes network policies
- Verify TrueNAS is reachable from pod network (not just host network)
- For Docker/kind: Add iptables rule to allow pod traffic

### NFS Mount Fails with "Permission Denied"

**Cause:** NFS export doesn't allow access from Kubernetes nodes

**Solution:**
1. Check NFS share in TrueNAS UI
2. Verify "Authorized Networks" includes Kubernetes pod CIDR
3. Update StorageClass to set network restriction:

   ```yaml
   parameters:
     nfs.networks: "10.244.0.0/16"  # Your pod CIDR
   ```

### iSCSI: "No iSCSI session found"

**Cause:** iscsid not running on nodes or login failed

**Diagnosis:**
```bash
# Check if iscsid is running
kubectl exec -n truenas-csi <node-pod> -c csi-node -- ps aux | grep iscsid

# Check node logs
kubectl logs -n truenas-csi <node-pod> -c csi-node
```

**Solution:**
- Ensure `open-iscsi` package is installed on all nodes
- Ensure iscsid service is enabled and started
- Check iSCSI portal is reachable on port 3260

### Volume Expansion Stuck

**Cause:** StorageClass doesn't allow expansion

**Check:**
```bash
kubectl get storageclass truenas-nfs -o jsonpath='{.allowVolumeExpansion}'
# Should return: true
```

**Solution:**
```bash
kubectl patch storageclass truenas-nfs -p '{"allowVolumeExpansion":true}'
```

## Diagnostic Commands

This section provides diagnostic commands to resolve issues in the areas specified.

### Check Driver Health
```bash
# All driver pods running?
kubectl get pods -n truenas-csi

# Controller healthy?
kubectl get pod -n truenas-csi -l app=truenas-csi-controller -o jsonpath='{.items[0].status.conditions[?(@.type=="Ready")].status}'
# Should return: True

# Check authentication
kubectl logs -n truenas-csi -l app=truenas-csi-controller -c csi-controller | grep -i "auth\|pool"
```

### Check Volume Status
```bash
# List all PVCs
kubectl get pvc --all-namespaces

# Check specific PVC
kubectl describe pvc <name> -n <namespace>

# Check corresponding PV
PV=$(kubectl get pvc <name> -n <namespace> -o jsonpath='{.spec.volumeName}')
kubectl describe pv $PV

# Check in TrueNAS (via logs)
kubectl logs -n truenas-csi -l app=truenas-csi-controller -c csi-controller | grep -i "CreateVolume"
```

### Check Network Connectivity
```bash
# From a pod
kubectl run nettest --image=busybox --rm -it --restart=Never -- \
  sh -c "ping -c 3 TRUENAS_IP && nc -zv TRUENAS_IP 443 && nc -zv TRUENAS_IP 3260"
```

## Monitoring and Alerting

 Monitoring the CSI driver integration requires watching both the Kubernetes cluster and TrueNAS. Kubernetes tracks driver health and storage operations, while TrueNAS monitors pool capacity and service availability.

For information on alerts in Kubernetes and TrueNAS see:

* Kubernetes
  * [Resource Usage Monitoring](https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-usage-monitoring/)
* TrueNAS Alert articles:
  - [Alert Screens]({{< ref "AlertsSettingsServiceScreen" >}})
  - [Alerts]({{< ref "/scale/toptoolbar/alerts/_index.md" >}}) 

### Metrics to Monitor

- Driver pod health and restarts
- PVC binding success rate
- Volume creation time
- TrueNAS pool capacity
- Network latency between K8s and TrueNAS
- iSCSI session health (for iSCSI volumes)

### Recommended Alerts

- Driver pod not running
- PVC stuck in Pending > 5 minutes
- TrueNAS pool > 80% full
- Authentication failures
- Volume creation failures


## API References

### CSI Standard Methods Implemented

#### Identity Service
- `GetPluginInfo` - Returns driver name and version
- `GetPluginCapabilities` - Returns capabilities (CONTROLLER_SERVICE, VOLUME_ACCESSIBILITY_CONSTRAINTS)
- `Probe` - Health check endpoint

#### Controller Service
- `CreateVolume` - Creates dataset/ZVOL and shares on TrueNAS
- `DeleteVolume` - Removes dataset/ZVOL and associated resources
- `ControllerPublishVolume` - Returns volume connection info (NFS path or iSCSI IQN)
- `ControllerUnpublishVolume` - Cleanup on detach
- `ValidateVolumeCapabilities` - Validates requested capabilities
- `ListVolumes` - Lists all volumes managed by driver
- `GetCapacity` - Returns available space in pool
- `ControllerExpandVolume` - Expands volume size
- `CreateSnapshot` - Creates ZFS snapshot
- `DeleteSnapshot` - Deletes ZFS snapshot
- `ListSnapshots` - Lists snapshots for a volume

#### Node Service
- `NodeStageVolume` - Discovers and logs into iSCSI targets
- `NodeUnstageVolume` - Logs out of iSCSI targets
- `NodePublishVolume` - Mounts volume into pod directory
- `NodeUnpublishVolume` - Unmounts volume from pod directory
- `NodeGetCapabilities` - Returns node capabilities
- `NodeGetInfo` - Returns node ID and topology info
- `NodeGetVolumeStats` - Returns volume usage statistics

### TrueNAS API Methods Used

#### Dataset Management
- `pool.dataset.create` - Create ZFS dataset or ZVOL
- `pool.dataset.get_instance` - Get dataset details
- `pool.dataset.update` - Update dataset properties (for expansion)
- `pool.dataset.delete` - Delete dataset

#### NFS Share Management
- `sharing.nfs.create` - Create NFS share
- `sharing.nfs.query` - Query NFS shares
- `sharing.nfs.delete` - Delete NFS share

#### iSCSI Management
- `iscsi.target.create` - Create iSCSI target
- `iscsi.extent.create` - Create extent (links to ZVOL)
- `iscsi.targetextent.create` - Associate target with extent
- `iscsi.target.delete` - Delete target (and associations)
- `iscsi.extent.delete` - Delete extent

#### Snapshot Management
- `pool.snapshot.create` - Create ZFS snapshot
- `pool.snapshot.delete` - Delete snapshot
- `pool.snapshot.clone` - Clone dataset from snapshot
- `pool.snapshot.query` - List snapshots

#### Pool Management
- `pool.query` - Query pool information (for capacity reporting)

## CSI Driver and Kubernetes Architecture Diagrams

### High-Level Component Interaction

```
┌────────────────────────────────────────────────────────────┐
│                   Developer/User                           │
│                        │                                   │
│                        │ kubectl apply -f pvc.yaml         │
│                        ▼                                   │
│              ┌──────────────────────┐                      │
│              │  Kubernetes API      │                      │
│              │  (PVC Created)       │                      │
│              └──────────┬───────────┘                      │
│                         │                                  │
│        ┌────────────────┴────────────────┐                 │
│        │  PVC stored in etcd             │                 │
│        └────────────────┬────────────────┘                 │
│                         │                                  │
│                         │ Watch for new PVCs               │
│                         ▼                                  │
│              ┌──────────────────────┐                      │
│              │  CSI Provisioner     │                      │
│              │  (Sidecar)           │                      │
│              └──────────┬───────────┘                      │
│                         │                                  │
│                         │ gRPC: CreateVolume()             │
│                         ▼                                  │
│              ┌──────────────────────┐                      │
│              │  TrueNAS CSI Driver  │                      │
│              │  (Controller)        │                      │
│              └──────────┬───────────┘                      │
│                         │ WebSocket API                    │
│                         │ (wss://truenas/api/current)      │
└─────────────────────────┼──────────────────────────────────┘
                          │
                          ▼
                ┌──────────────────────┐
                │  TrueNAS Middleware  │
                │  (API Server)        │
                └──────────┬───────────┘
                           │ Creates resources:
                           │ • pool.dataset.create
                           │ • sharing.nfs.create
                           ▼
                ┌──────────────────────┐
                │    ZFS Storage       │
                │  • Datasets created  │
                │  • Shares configured │
                └──────────────────────┘
```

### NFS Volume Mount Flow

1. Pod Scheduled
   Pod → Node (Kubernetes scheduler assigns pod to node)

2. Kubelet Calls CSI Node Plugin
   Kubelet → NodePublishVolume(volumeId, targetPath)

3. CSI Node Plugin Mounts NFS
   Node Plugin executes:
   `mount -t nfs TRUENAS_IP:/mnt/pool/dataset /var/lib/kubelet/pods/.../volumes/.../mount`

4. Bind Mount to Pod
   /var/lib/kubelet/pods/.../volumes/.../mount
   →  bind mounted to
   /var/lib/kubelet/pods/.../volumes/.../data

5. Container Starts
   Container sees volume at /data (or specified mountPath)

### iSCSI Volume Mount Flow

1. Pod Scheduled
   Pod → Node

2. CSI Attacher Creates VolumeAttachment
   Attacher → ControllerPublishVolume(volumeId, nodeId)
   Driver returns: targetPortal, targetIQN, LUN

3. Kubelet Calls NodeStageVolume
   Node Plugin:
   a. Discover iSCSI target
      `iscsiadm -m discovery -t sendtargets -p TRUENAS_IP:3260`

   b. Log in to iSCSI target
      `iscsiadm -m node -T <IQN> -p TRUENAS_IP:3260 --login`

   c. Wait for block device
      /dev/sdX appears

   d. Create filesystem if needed
      mkfs.ext4 /dev/sdX

   e. Mount to staging path
      mount /dev/sdX /var/lib/kubelet/plugins/.../globalmount

4. Kubelet Calls NodePublishVolume
   Bind mount staging path to pod volume path

5. Container Starts
   Container sees volume at /data


## Integration with Prometheus

{{< hint type=note >}}
The TrueNAS CSI driver does not currently expose a Prometheus metrics endpoint. The example below is provided for future reference when metrics support is added.
{{< /hint >}}

```yaml
# ServiceMonitor for driver metrics (if driver exposes metrics)
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: truenas-csi-metrics
  namespace: truenas-csi
spec:
  selector:
    matchLabels:
      app: truenas-csi-controller
  endpoints:
  - port: metrics
```

## Backup and Disaster Recovery

**Volume Snapshots:**
- Create daily snapshots via CronJob.
- Retain seven daily, four weekly snapshots.
- Document restore procedures.

**TrueNAS Snapshots:**
- Use TrueNAS snapshot tasks as an additional backup layer.
- Replicate to a secondary TrueNAS system.

**Metadata Backup:**
Export PVC/PV definitions regularly.

  ```bash
  kubectl get pvc --all-namespaces -o yaml > pvc-backup.yaml
  kubectl get pv -o yaml > pv-backup.yaml
  ```

## Upgrade Strategy

**Driver Upgrade:**
1. Test new version in dev/staging cluster.
2. Create snapshots of critical volumes.
3. Update driver image in deployment.
4. Rolling update automatically replaces pods.
5. Verify existing volumes are still accessible.
6. Test creating new volumes.

**TrueNAS Upgrade:**
1. Check the CSI driver compatibility with a new TrueNAS version.
2. Perform TrueNAS upgrade during maintenance window.
3. Verify API connectivity post-upgrade.
4. Test volume operations.

**Kubernetes Upgrade:**
1. Check CSI specification compatibility.
2. Might need to update sidecar container versions.
3. Test in staging first.

## Glossary

**CSI (Container Storage Interface):** Industry standard specification for storage plugins in Kubernetes.

**PV (PersistentVolume):** A piece of storage in the cluster, provisioned by an admin or dynamically.

**PVC (PersistentVolumeClaim):** A request for storage by a user.

**StorageClass:** Defines classes of storage with different QoS, backup policies, etc.

**ZFS:** Advanced filesystem with features like snapshots, clones, compression, and data integrity.

**ZVOL:** ZFS Volume - a block device created from a ZFS pool.

**Dataset:** ZFS filesystem entity that can store files or act as a volume.

**NFS (Network File System):** Protocol for sharing files over a network.

**iSCSI (Internet Small Computer Systems Interface):** Protocol for block-level storage over a network.

**IQN (iSCSI Qualified Name):** Unique identifier for iSCSI targets.

**LUN (Logical Unit Number):** Identifier for iSCSI storage units.

**Extent:** iSCSI term for the actual storage backing an iSCSI target.

**WebSocket:** Communication protocol for persistent, bi-directional connection.

**Snapshot:** Read-only point-in-time copy of data (instant with ZFS).

**Clone:** Writable copy of data created from a snapshot.

**Copy-on-Write (CoW):** ZFS technique where clones share data with the source until modified.

## Appendix A: Sample Deployment for Common Applications

* {{< expand " PostgreSQL Database" "v" >}}

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-data
spec:
  accessModes: [ReadWriteOnce]
  storageClassName: truenas-iscsi
  resources:
    requests:
      storage: 100Gi
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        env:
        - name: POSTGRES_PASSWORD
          value: "changeme"
        - name: PGDATA
          value: /var/lib/postgresql/data/pgdata
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
      volumes:
      - name: data
        persistentVolumeClaim:
          claimName: postgres-data
```
{{< /expand >}}
* {{< expand "WordPress (Multi-Pod with Shared Storage)" "v" >}}
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: wordpress-uploads
spec:
  accessModes: [ReadWriteMany]
  storageClassName: truenas-nfs
  resources:
    requests:
      storage: 50Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wordpress
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: wordpress
        image: wordpress:latest
        volumeMounts:
        - name: uploads
          mountPath: /var/www/html/wp-content/uploads
      volumes:
      - name: uploads
        persistentVolumeClaim:
          claimName: wordpress-uploads
```
{{< /expand >}}

## Appendix B: Network Requirements Reference

| Service | Protocol | Port | Source | Destination | Purpose |
|---------|----------|------|--------|-------------|---------|
| TrueNAS API | TCP | 443 | K8s Pods | TrueNAS | WebSocket management API |
| NFS | TCP/UDP | 2049 | K8s Nodes | TrueNAS | Mount NFS shares |
| RPC Bind | TCP/UDP | 111 | K8s Nodes | TrueNAS | NFS RPC services |
| iSCSI | TCP | 3260 | K8s Nodes | TrueNAS | iSCSI target access |

**Firewall Configuration:**
- Allow Kubernetes pod CIDR (e.g., 10.244.0.0/16) to TrueNAS IP
- Allow Kubernetes node IPs to TrueNAS IP
- For iptables/Docker environments: Configure DOCKER-USER chain

## Appendix C: Comparison with Other Storage Solutions

| Feature | TrueNAS CSI | NFS Subdir | Local Path | Cloud Provider CSI |
|---------|-------------|------------|------------|-------------------|
| Dynamic Provisioning | ✓ | ✓ | ✓ | ✓ |
| ReadWriteMany | ✓ (NFS) | ✓ | ✗ | ✗ (usually) |
| Volume Expansion | ✓ | ✗ | ✗ | ✓ |
| Snapshots | ✓ | ✗ | ✗ | ✓ |
| Cloning | ✓ | ✗ | ✗ | ✓ |
| Block Storage | ✓ (iSCSI) | ✗ | ✓ | ✓ |
| Enterprise Features | ✓ (ZFS) | ✗ | ✗ | ✓ |
| Cost | Infrastructure only | Infrastructure only | Infrastructure only | Per-use cloud billing |
| On-Premises | ✓ | ✓ | ✓ | ✗ |
