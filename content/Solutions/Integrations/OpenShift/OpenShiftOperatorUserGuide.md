---
title: "OpenShift Operator User Guide"
description: "Provides information for developer/users of the OpenShift Operator with integrated TrueNAS CSI Driver."
weight: 25
aliases:
tags:
- OpenShift Operator
- TrueNAS CSI driver
- Containerized applications
related: false
doctype: tutorial
---


This guide is for developers/users requesting storage through the OpenShift Operator that packages and manages the TrueNAS CSI driver.
These storage requests use PersistentVolumeClaim (PVC) YAML files submitted with the `oc apply` command to add volumes to OpenShift projects.

It covers creating PersistentVolumeClaims, mounting storage volumes, and using the features available to TrueNAS storage users.

For an overview of the OpenShift Operator/CSI driver integration see [OpenShift Operator]({{< ref "/solutions/integrations/OpenShift/_index.md" >}})

For StorageClass configuration and Operator installation, see [OpenShift Operator Administrators Guide]({{< ref "OpenShiftOperator" >}}).

For reference material including a glossary of terms, see [OpenShift Operator Reference]({{< ref "OpenShiftReference" >}})

The OpenShift Operator sends storage requests to TrueNAS via the CSI driver.
TrueNAS creates the storage volume based on the information in the PVC yaml file and returns volume information to OpenShift, where it can be mounted and used in a project.

## Using the OpenShift Operator

Developers/users should follow this process to set up storage they can mount in their cluster pods within their project.

Replace <i>my-app-data</i> with the name of your PVC in the commands in this section.

1. Create a PersistentVolumeClaim.

   {{< expand "YAML Code Block" "v" >}}
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
{{< /expand >}}

2. Apply the PersistentVolumeClaim.

   <code>oc apply -f <i>my-app-data</i>.yaml</code>

   Where *my-app-data* is the name of the yaml file (and PVC) created locally by the developer/user.

3. Check the PVC status.

   ```bash
   oc get pvc my-app-data
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

Then to apply a volume in a pod:

```bash
oc apply -f pod.yaml
```

## Verifying a Volume is Mounted

These commands check if a pod is running, verify a mount inside a container, and then write test data to and read it back from the container.

```bash
# Check pod is running
oc get pod my-app

# Verify mount inside container
oc exec my-app -- df -h /usr/share/nginx/html

# Write test data
oc exec my-app -- sh -c "echo 'Hello from TrueNAS' > /usr/share/nginx/html/index.html"

# Read it back
oc exec my-app -- cat /usr/share/nginx/html/index.html
```

### Expanding a Volume

1. Check the current size. The CAPACITY shows current size.

   ```bash
   oc get pvc my-app-data
   ```

2. Edit a PVC to request a larger size. Change the storage size, then save and exit.
   
   ```bash
   oc edit pvc my-app-data
   
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

   Alternatively, use oc patch:
   ```bash
   oc patch pvc my-app-data -p '{"spec":{"resources":{"requests":{"storage":"20Gi"}}}}'
   ```

3. Wait for the expansion. Watch the CAPACITY column increase in size.
   
   ```bash
   oc get pvc my-app-data -w
   
   # Watch CAPACITY column increase to 20Gi
   ```

   **Note:** For iSCSI volumes, you might need to restart the pod for the filesystem resize to take effect.

### Creating a Snapshot

1. Create a VolumeSnapshot, and then apply it.

   {{< expand "YAML Code Block" "v" >}}   
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
   {{< /expand >}}

   Apply it:
   ```bash
   oc apply -f snapshot.yaml
   ```

2. Verify the snapshot.
   
   ```bash
   oc get volumesnapshot my-app-snapshot-20250102
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
oc apply -f restore-pvc.yaml
oc wait --for=jsonpath='{.status.phase}'=Bound pvc/my-app-restore --timeout=120s
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
oc apply -f clone-pvc.yaml
oc wait --for=jsonpath='{.status.phase}'=Bound pvc/my-app-clone --timeout=120s
```

**Result:** New independent volume with copy of source data

## Advanced Features

The TrueNAS CSI driver supports advanced storage operations including snapshot-based backup and restore, volume cloning, and multi-protocol deployments.
These features are available to all cluster users with the appropriate StorageClass configured by the cluster administrator.

### Creating Volume Snapshots for Backup and Restore

The following is a backup workflow:

1. Create a pre-upgrade snapshot YAML file and apply it.
   
   {{< expand "YAML Code Block" "v" >}}
```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: db-before-upgrade
  namespace: production
spec:
  volumeSnapshotClassName: truenas-snapshot-class
  source:
    persistentVolumeClaimName: postgres-data
```
   {{< /expand >}}
   
   ```bash
   oc apply -f snapshot.yaml
   ```

2. Perform Application Upgrade.
   
   ```bash
   oc set image deployment/postgres postgres=postgres:15
   ```

3. Restore if upgrade fails. Stop the application and then create a new volume from a snapshot.
   Next update the deployment to use the restored volume and then restart the application.

   Stop the application:
   ```bash
   oc scale deployment postgres --replicas=0
   ```
   Create new volume from snapshot
   {{< expand "Command and YAML Code" "v" >}}
```bash
oc apply -f - <<EOF
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
   {{< /expand >}}

   Update deployment to use restored volume
   ```bash
   oc set volume deployment/postgres --add --name=data --claim-name=postgres-data-restored
   ```

   Restart application
   ```bash
   oc scale deployment postgres --replicas=1
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
