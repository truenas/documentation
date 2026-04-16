---
title: "CSI Driver User Guide"
description: "Provides information for Kubernetes develper/users of the TrueNAS CSI Driver."
weight: 25
aliases:
tags:
- CSI driver
- Kubernetes
related: false
doctype: tutorial
---


This guide is for developers/users suing a Kubernetes cluster that want to use the TrueNAS CSI driver to create and submit requests for storage to use in pods.
It covers creating PersistentVolumeClaims, mounting storage volumes, and using the features available to TrueNAS storage users.

For an overview of the Kubernetes/CSI driver integration see [TrueNAS CSI Driver]({{< ref "/solutions/integrations/csidriver/_index.md" >}})

For reference material including a glossary of terms, see [CSI Driver Refernce]({{< ref "CSIDriverReference" >}})

[Kubernetes Cluster Administrators Guide]({{< ref "CSIDriver" >}}) provides instructions on configuring StorageClasses and the Kubernetes integration with the CSI driver.
The process involves creating a yaml file stored locally, and then sumbitting it to create the PVC using `kubectl` commands.

The Kubernetes uses the CSI driver to send the information from Kubernetes to TrueNAS. TrueNAS creates the storage volume based on the information in the PVC yaml file, and sends this back to Kubernetes through the CSI driver, where it can be mounted and used in a pod.

## Using the CSI Driver

Developers/users should follow this process to set up storage they can mount in their Kubernetes pods.

Replace <i>my-app-data</i> with the name of your PVC in the commands in this section.

1. Create a PersistentVolumeClaim.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-app-data
  namespace: default
spec:
  accessModes:
    - ReadWriteMany  # For NFS (multiple pods can access)
  storageClassName: truenas-nfs
  resources:
    requests:
      storage: 10Gi  # Request 10GB of storage
```

2. Apply the PersistentVolumeClaim.

<code>kubectl apply -f <i>my-app-data</i>.yaml</code>

Where *my-app-data* is the name of the yaml file (and PVC) created locally by the developer/user.

3. Check the PVC status.

```bash
kubectl get pvc my-app-data
```
{{< expand "Expected Output:" "v" >}}
```text
NAME          STATUS   VOLUME                                     CAPACITY   ACCESS MODES
my-app-data   Bound    pvc-a1b2c3d4-e5f6-7890-abcd-ef1234567890   10Gi       RWX
```
Status Meanings:
- `Pending` - Waiting for driver to create volume
- `Bound` - Volume created and ready to use
- `Lost` - PV was deleted but PVC still exists (error state)
{{< /expand >}}

## Using a Volume in a Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  namespace: default
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: data
      mountPath: /usr/share/nginx/html  # Where to mount in container
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: my-app-data  # Reference the PVC
```

### Apply a Volume in a Pod

```bash
kubectl apply -f pod.yaml
```

## Verifying a Volume is Mounted

These commands, check if a pod is running, verifies a mount inside a container, and then writes test data to and reads it back from the container.

```bash
# Check pod is running
kubectl get pod my-app

# Verify mount inside container
kubectl exec my-app -- df -h /usr/share/nginx/html

# Write test data
kubectl exec my-app -- sh -c "echo 'Hello from TrueNAS' > /usr/share/nginx/html/index.html"

# Read it back
kubectl exec my-app -- cat /usr/share/nginx/html/index.html
```

### Expanding a Volume

1. Check the current size. The CAPACITY shows current size.

   ```bash
   kubectl get pvc my-app-data
   ```

2. Edit a PVC to request a lrger size. Change the storage size, then save and exit.
   
   ```bash
   kubectl edit pvc my-app-data
   
   # Change:
     resources:
         requests:
               storage: 10Gi
   
   # To:
     resources:
         requests:
               storage: 20Gi
   
   # Save and exit
   ```

   Alternatively, use kubectl patch:
   ```bash
   kubectl patch pvc my-app-data -p '{"spec":{"resources":{"requests":{"storage":"20Gi"}}}}'
   ```

3. Wait for the expansion. Watch the CAPACITY column increase in size.
   
   ```bash
   kubectl get pvc my-app-data -w
   
   # Watch CAPACITY column increase to 20Gi
   ```

   **Note:** For iSCSI volumes, you might need to restart the pod for the filesystem resize to take effect.

### Creating a Snapshot

1. Create a VolumeSnapshot, and then apply it.
   
   ```yaml
   apiVersion: snapshot.storage.k8s.io/v1
   kind: VolumeSnapshot
   metadata:
     name: my-app-snapshot-20250102
     namespace: default
   spec:
     volumeSnapshotClassName: truenas-snapshot-class
     source:
       persistentVolumeClaimName: my-app-data
   ```

   Apply it:
   ```bash
    kubectl apply -f snapshot.yaml
   ```

2. Verify the snapshot.
   
   ```bash
   kubectl get volumesnapshot my-app-snapshot-20250102
   ```

   {{< expand "Expected Result" "v" >}}
   ```
   # Expected:
   # NAME                        READYTOUSE   SOURCEPVC     RESTORESIZE
   # my-app-snapshot-20250102    true         my-app-data   10Gi
   ```
   {{< /expand >}}

3. Check in TrueNAS.

   Navigate to **Datasets**, locate and select the dataset on the table, then click **View Snapshots**  on the **Data Protection** card to open the **Snapshots** screen.
   Search for the snapshot. The snapshot name format is `pool/dataset@snapshot-name`

## Restoring from Snapshot

You can restore from a snapshot by creating a new volume from a snapshot, or cloning an existing volume.

### Create New Volume from Snapshot

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-app-restore
  namespace: default
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: truenas-nfs
  resources:
    requests:
      storage: 10Gi
  dataSource:
    name: my-app-snapshot-20250102
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
```

Apply it:
```bash
kubectl apply -f restore-pvc.yaml
kubectl wait --for=jsonpath='{.status.phase}'=Bound pvc/my-app-restore --timeout=120s
```

**Result:** New volume with data from snapshot

### Cloning an Existing Volume

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-app-clone
  namespace: default
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: truenas-nfs
  resources:
    requests:
      storage: 10Gi
  dataSource:
    name: my-app-data  # Source PVC to clone
    kind: PersistentVolumeClaim
```

Apply it:
```bash
kubectl apply -f clone-pvc.yaml
kubectl wait --for=jsonpath='{.status.phase}'=Bound pvc/my-app-clone --timeout=120s
```

**Result:** New independent volume with copy of source data

## Advanced Features

The TrueNAS CSI driver supports advanced storage operations including snapshot-based backup and restore, volume cloning, and multi-protocol deployments.
These features are available to all cluster users with the appropriate StorageClass configured by the cluster administrator.

### Creating Volume Snapshots for Backup and Restore

The follow is a backup workflow:

1. Create Pre-Upgrade Snapshot.
   
   ```bash
   kubectl apply -f - <<EOF
   apiVersion: snapshot.storage.k8s.io/v1
   kind: VolumeSnapshot
   metadata:
     name: db-before-upgrade
     namespace: production
   spec:
     volumeSnapshotClassName: truenas-snapshot-class
   source:
      persistentVolumeClaimName: postgres-data
   EOF
   ```

2. Perform Application Upgrade.
   
   ```bash
   kubectl set image deployment/postgres postgres=postgres:15
   ```

3. Restore if upgrade fails. Stop the application and then create a new volume form a snapshot.
   Next update the deployment to use the restored volume and then restart the application.
   
   ```bash
   # Stop the application
   kubectl scale deployment postgres --replicas=0

   # Create new volume from snapshot
   kubectl apply -f - <<EOF
   apiVersion: v1
   kind: PersistentVolumeClaim
   metadata:
     name: postgres-data-restored
     namespace: production
   spec:
     accessModes: [ReadWriteOnce]
     storageClassName: truenas-iscsi
     resources:
       requests:
         storage: 100Gi
     dataSource:
       name: db-before-upgrade
       kind: VolumeSnapshot
       apiGroup: snapshot.storage.k8s.io
   EOF

   # Update deployment to use restored volume
   kubectl set volume deployment/postgres --add --name=data --claim-name=postgres-data-restored

   # Restart application
   kubectl scale deployment postgres --replicas=1
   ```

### Volume Cloning for Environments

 Volume cloning creates an instant copy of an existing volume using ZFS copy-on-write, making it ideal for spinning up staging or test environments with real production data.

#### Cloning Production Data to Staging

**Benefits:**
- Instant copy via ZFS clones
- Minimal storage overhead (copy-on-write)
- Staging has real production data for testing
- No impact on production volume

```bash
# Clone production volume
kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-data-staging
  namespace: staging
spec:
  accessModes: [ReadWriteMany]
  storageClassName: truenas-nfs
  resources:
    requests:
      storage: 50Gi
  dataSource:
    name: app-data-prod
    kind: PersistentVolumeClaim
    namespace: production  # Can clone across namespaces
EOF
```

### Multi-Protocol Deployments

Some applications benefit from using both protocols. Example content management system:

```yaml
# Media files - NFS for shared access
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: cms-media
spec:
  accessModes: [ReadWriteMany]
  storageClassName: truenas-nfs
  resources:
    requests:
      storage: 100Gi

---
# Database - iSCSI for performance
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: cms-database
spec:
  accessModes: [ReadWriteOnce]
  storageClassName: truenas-iscsi
  resources:
    requests:
      storage: 20Gi
```
