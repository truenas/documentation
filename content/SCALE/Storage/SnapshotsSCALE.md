---
title: "Snapshots"
geekdocCollapseSection: true
weight: 20
---

{{< toc >}}

Snapshots are one of ZFS's most powerful features.

Snapshots create a read-only point-in-time copy of a file system or volume.
The copy does not consume extra space in the ZFS pool.
Snapshots only record the differences between storage block references when the data is modified.

{{< expand "Why do I want to keep snapshots?" "v" >}}
Snapshots keep a history of files and provide a way to recover older or even deleted files.
For this reason, many administrators take regular snapshots, store them for some time, and copy them to a different system.
This strategy allows an administrator to roll the system data back to a specific point in time.
In case of catastrophic system or disk failure, off-site snapshots can restore data up to the most recent snapshot.
{{< /expand >}}

Taking snapshots requires the system have all [pools]({{< relref "PoolsSCALE.md" >}}), [datasets]({{< relref "DatasetsSCALE.md" >}}), and [zvols]({{< relref "ZvolsSCALE.md" >}}) already configured.

{{< tabs "Snapshots" >}}
{{< tab "Snapshots" >}}
## Creating a Single Snapshot

{{< hint ok >}}
To save time and regularly create fresh snapshots, consider making a [Periodic Snapshot Task]({{< relref "/SCALE/DataProtection/_index.md" >}}) instead.
{{< /hint >}}

Go to **Storage** and click *Snapshots*, then click *ADD*.

![AddSnapshotSCALE](/images/SCALE/AddSnapshotSCALE.png "Create a New Snapshot")

Use the *Dataset* drop-down to select an existing ZFS pool, dataset, or zvol to snapshot.

TrueNAS automatically generates the suggested *Name*, but users can override it with any custom string.

TrueNAS automatically populates the *Naming Schema* drop-down with previously created periodic snapshot task schemas. Choosing one generates a name for the snapshot using the naming schema from a previously created Periodic Snapshot and replicates that snapshot. *Naming Schema* cannot be used with a *Name*.

Check the *Recursive* box to include child datasets with the snapshot.

## Managing Snapshots

Go to **Storage** and click *Snapshots* to manage created snapshots.

![RepLocalSnaphots](/images/SCALE/RepLocalSnaphots.png "List of Snapshots")

Each entry in the list includes the dataset and snapshot names. Entries also display the snapshot numbers, how much space they used, the date the system created them, and the amount of data the dataset can access.

Click <i class="material-icons" aria-hidden="true" title="Expand">more_vert</i> to view snapshot options.

### Delete

The *Delete* option destroys the snapshot.
You must delete child clones before you can delete their parent snapshot.
While creating a snapshot is instantaneous, deleting one is I/O intensive and can take a long time, especially when deduplication is enabled.

{{< expand "Why?" "v" >}}
ZFS has to review all allocated blocks before deletion to see if another process is using that block. If not, the ZFS can free that block.
{{< /expand >}}

### Clone to New Dataset

The *Clone to New Dataset* option creates a new snapshot "clone" (dataset) from the snapshot contents.

{{< expand "What is a clone?" "v" >}}
A clone is a writable copy of the snapshot.
Because a clone is a dataset that can be mounted, it appears in the **Storage** screen rather than the *Snapshots* screen.
By default, TrueNAS adds *-clone* to the new snapshot name when creating the clone.

{{< /expand >}}
A dialog prompts for the new dataset *Name*.
The suggested *Name* derives from the snapshot name.

### Rollback

The *Rollback* option reverts the *Dataset* back to the point in time saved by the *Snapshot*.

{{< hint warning >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
Replications use the existing snapshot during incremental backups, so rolling back can put the snapshot "out of order".
To restore the data within a snapshot, the recommended steps are:

* Clone the desired snapshot.
* Share the clone with the share type or service running on the TrueNAS system.
* After users have recovered the needed data, delete the clone from **Storage > Pools**.

This approach does not destroy any on-disk data or impact replication.
{{< /hint >}}

TrueNAS asks for confirmation before rolling back to the chosen snapshot state.
Clicking *Yes* reverts all dataset files to the state they were in when TrueNAS created the snapshot.

### Batch Operations

To delete multiple snapshots, check the left column boxes for each snapshot and click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> *Delete* button that appears.

To search through the snapshots list by name, type a matching criteria into the <i class="material-icons" aria-hidden="true" title="Search">search</i> *Filter Snapshots* text area.
The list changes to only display the snapshot names that match the filter text.

## Browsing a Snapshot Collection

{{< hint warning >}}
Browsing snapshot collections is an advanced capability that requires ZFS and command-line experience.
{{< /hint >}}

All dataset snapshots are accessible as hierarchical filesystems accessed from a hidden <file>.zfs</file> at the root of every dataset.

{{< hint warning >}}
A snapshot and any files it contains are not accessible or searchable when the snapshot mount path is more than *88* characters.
The data within the snapshot is safe. The snapshot itself is accessible again after shortening the mount path.
{{< /hint >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or by using **Shares** services like *SMB*, *NFS*, and *SFTP*.
In summary, the main required changes to settings are:

* Manually enabling snapshot visibility in the dataset ZFS properties.
* In Samba auxiliary settings, the `veto files` command must be modified to not hide the <file>.zfs</file>, and the setting `zfsacl:expose_snapdir=true` must be added.

The effect is that any user who can access the dataset contents can view the list of snapshots by going to the dataset <file>.zfs</file> directory.
Users can browse and search any files they have permission to access throughout the entire dataset snapshot collection.

When creating a snapshot, permissions or ACLs set on files within that snapshot may limit access to the files.

Snapshots are read-only, so users do not have permission to modify a snapshot or its files, even if they had write permissions when creating the snapshot.

ZFS has a `zfs diff` command user can run in the **Shell**.
The command lists all changed files between any two snapshot versions within a dataset, or between any snapshot and the current data.
{{< /tab >}}

{{< tab "VMware-Snapshots" >}}
VMware-Snapshots coordinate ZFS snapshots when using TrueNAS as a VMware datastore.
When creating a ZFS snapshot, TrueNAS automatically snapshots any running VMware virtual machines before taking a scheduled or manual ZFS snapshot of the dataset or zvol backing that VMware datastore.

Virtual machines **must be powered on** for TrueNAS snapshots to be copied to VMware.
The temporary VMware snapshots are deleted on the VMware side but still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go in the *Snapshots* list.

{{< hint info >}}
Only paid versions of VMware ESXi support VMware-Snapshots. Attempting to create VMware-Snapshots with ESXi free will result in the following error message: **"Error: Can’t create snapshot, current license or ESXi version prohibits execution of the requested operation.”**. ESXi free has a locked (read-only) API that prohibits using TrueNAS VMware-Snapshots. *VMware vSphere Essentials Kit* is the cheapest ESXi edition that is compatible with TrueNAS VMware-Snapshots.
{{< /hint >}}

## Create a VMware Snapshot

Go to **Storage** and click *VMware Snapshots*, then click *ADD*.

![AddVMwareSnapshotSCALE](/images/SCALE/AddVMwareSnapshotSCALE.png "Creating a VMware Snapshot")

| Setting | Description |
|---------|-------------|
| Hostname | Enter the IP address or hostname of the VMware host. When clustering, this is the vCenter server for the cluster. |
| Username | Enter the user on the VMware host with permission to snapshot virtual machines. |
| Password | Enter the password associated with the *Username*. |
| ZFS Filesystem | Select a filesystem to snapshot. |
| Datastore | After entering the *Hostname*, *Username*, and *Password*, click *Fetch DataStores* and select the datastore to be synchronized. |

TrueNAS connects to the VMware host after clicking *Fetch DataStores*.
The *ZFS Filesystem* and *Datastore* drop-down menus populate from the VMware host response.
Choosing a datastore also selects any previously mapped dataset.
{{< /tab >}}
{{< /tabs >}}
