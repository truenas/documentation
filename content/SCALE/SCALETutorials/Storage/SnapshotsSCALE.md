---
title: "Snapshots"
geekdocCollapseSection: true
weight: 20
---

{{< toc >}}

{{< include file="/_includes/SnapshotsIntroSnippet.md" type="page" >}}

Taking snapshots requires the system have all [pools]({{< relref "/SCALE/SCALEUIReference/Storage/Pools/_index.md" >}}), [datasets]({{< relref "DatasetsSCALE.md" >}}), and [zvols]({{< relref "ZvolsSCALE.md" >}}) already configured.

## Snapshot Creation Options

{{< tabs "Snapshot Creation Options" >}}
{{< tab "Single Snapshots" >}}

### Creating a Single Snapshot

{{< hint ok >}}
Consider making a [Periodic Snapshot Task]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) to save time and create regular, fresh snapshots.
{{< /hint >}}

{{< expand "Video Tutorial" "v" >}}
This short video demonstrates manually adding a snapshot {{< embed-video name="scaleangelfishmanualsnapshots" >}}
{{< /expand >}}

Go to **Storage** and click **Snapshots**, then click **ADD**.

![AddSnapshotSCALE](/images/SCALE/AddSnapshotSCALE.png "Create a New Snapshot")

Use the **Dataset** drop-down to select an existing ZFS pool, dataset, or zvol to snapshot.

TrueNAS software generates a suggested name that you can override with any custom string.

TrueNAS software populates the **Naming Schema** drop-down with periodic snapshot task schemas already created. Choosing one generates a name for the snapshot using the naming schema from the selected Periodic Snapshot and replicates that snapshot. You cannot enter a value in **Naming Schema** and **Name** as selecting or entering a value in **Naming Schema** populates the other. 

To include child datasets with the snapshot, set **Recursive**.
  
### Managing Snapshots

Go to **Storage** and click **Snapshots** to manage created snapshots.

![RepLocalSnaphots](/images/SCALE/RepLocalSnaphots.png "List of Snapshots")

Each entry in the list includes the dataset and snapshot names. Entries also display the snapshot numbers, the space they use, the date the system created them, and the amount of data the dataset can access.

Click <i class="material-icons" aria-hidden="true" title="Expand">more_vert</i> to view snapshot options.

#### Delete

{{< include file="/_includes/DeletingSnapshots.md" type="page" >}}

#### Clone to New Dataset

The **Clone to New Dataset** option creates a new snapshot *clone* (dataset) from the snapshot contents.

{{< expand "What is a clone?" "v" >}}
A **clone** is a writable copy of the snapshot.
Because a clone is a mountable dataset, it appears in the **Storage** screen rather than the **Snapshots** screen.
By default, TrueNAS adds **-clone** to the new snapshot name when creating the clone.
{{< /expand >}}

A dialog prompts for the new dataset name.
The suggested name derives from the snapshot name.

#### Rollback

The **Rollback** option reverts the dataset back to the point in time saved by the snapshot.

{{< hint warning >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
Replications use the existing snapshot when doing an incremental backup, and rolling back can put the snapshots 'out of order'.
To restore the data within a snapshot, the recommended steps are:

1.  Clone the desired snapshot.
2.  Share the clone with the share type or service running on the TrueNAS system.
3.  Allow users to recover their needed data.
4.  Delete the clone from **Storage**.

This approach does not destroy any on-disk data or impact replication.
{{< /hint >}}

TrueNAS asks for confirmation before rolling back to the chosen snapshot state.
Clicking **Yes** reverts all dataset files to the state they were in when TrueNAS created the snapshot.

### Batch Operations

{{< include file="/_includes/SnapshotsBulkOperations.md" type="page" >}}

## Browsing a Snapshot Collection

{{< include file="/_includes/BrowsingSnapshotCollections1.md" type="page" >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or the **Shares** screen using services like **SMB**, **NFS**, and **SFTP**.

{{< include file="/_includes/BrowsingSnapshotCollections2.md" type="page" >}}

{{< /tab >}}

{{< tab "VMware-Snapshots" >}}
VMware-Snapshots coordinate ZFS snapshots when using TrueNAS as a VMware datastore.
When TrueNAS creates a ZFS snapshot, it snapshots any running VMware virtual machines before it takes a scheduled or manual ZFS snapshot of the dataset or zvol backing that VMware datastore.

You must power on virtual machines for TrueNAS to copy snapshots to VMware.
The temporary VMware snapshots deleted on the VMware side, still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go in the **Snapshots** list.

{{< hint info >}}
Only paid versions of VMware ESXi support VMware-Snapshots. Attempting to create VMware-Snapshots with ESXi free results in the following error message: **"Error: Can’t create snapshot, current license or ESXi version prohibits execution of the requested operation.”**. ESXi free has a locked (read only) API that prohibits using TrueNAS VMware-Snapshots. *VMware vSphere Essentials Kit* is the cheapest ESXi edition that is compatible with TrueNAS VMware-Snapshots.
{{< /hint >}}

## Create a VMware Snapshot

Go to **Storage** and click **VMware Snapshots**, then click **ADD**.

![AddVMwareSnapshotSCALE](/images/SCALE/AddVMwareSnapshotSCALE.png "Creating a VMware Snapshot")

| Setting | Description |
|---------|-------------|
| **Hostname** | Enter the IP address or hostname of the VMware host. When clustering, this is the vCenter server for the cluster. |
| **Username** | Enter the user on the VMware host with permission to snapshot virtual machines. |
| **Password** | Enter the password associated with the user entered in **Username**. |
| **ZFS Filesystem** | Select a file system to snapshot. |
| **Datastore** | After entering the values in **Hostname**, ***Username**, and **Password**, click **Fetch DataStores** and select the datastore to synchronize. |

TrueNAS connects to the VMware host after clicking **Fetch DataStores**.
The **ZFS Filesystem** and **Datastore** drop-down menus populate from the VMware host response.
Choosing a datastore also selects any previously mapped dataset.
{{< /tab >}}
{{< /tabs >}}
