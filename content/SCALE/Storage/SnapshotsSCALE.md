---
title: "Snapshots"
geekdocCollapseSection: true
weight: 20
---

{{< toc >}}

Snapshots are one of the most powerful features of ZFS.
A snapshot provides a read-only point-in-time copy of a file system or volume.
This copy does not consume extra space in the ZFS pool.
The snapshot only records the differences between storage block references whenever the data is modified.

{{< expand "Why do I want to keep snapshots?" "v" >}}
Snapshots keep a history of files and provide a way to recover an older or even deleted files.
For this reason, many administrators take regular snapshots, store them for some time, and copy them to a different system.
This strategy allows an administrator to roll the system data back to a specific point in time.
In the event of catastrophic system or disk failure, off-site snapshots can restore data up to the most recent snapshot.
{{< /expand >}}

Taking snapshots requires the system have all [pools]({{< relref "PoolsSCALE.md" >}}), [datasets]({{< relref "DatasetsSCALE.md" >}}), and [zvols]({{< relref "ZvolsSCALE.md" >}}) already configured.

{{< tabs "Snapshots" >}}
{{< tab "Snapshots" >}}
## Creating a Single Snapshot

{{< hint ok >}}
To save time and regularly create fresh snapshots, consider making a [Periodic Snapshot Task]({{< relref "PeriodicSnapshotTasks.md" >}}) instead.
{{< /hint >}}

To quickly snapshot existing storage, go to **Storage > Snapshots** and click *ADD*.

![StorageSnapshotsAdd](/images/CORE/12.0/StorageSnapshotsAdd.png "Create a New Snapshot")

Use the *Dataset* drop down to select an existing ZFS pool, dataset, or zvol to snapshot.

The suggested *Name* is automatically generated but can be overridden with any custom string.
Choosing a proper *Naming Schema* instead allows including the snapshot in [Replication Tasks]({{< relref "/CORE/Tasks/ReplicationTasks/_index.md" >}}).
The *Naming Schema* drop-down is populated with previously created schemas from periodic snapshot tasks.

To include child datasets with the snapshot, set *Recursive*.

## Managing Snapshots

Go to **Storage > Snapshots** to manage created snapshots.

![RepLocalSnaphots](/images/SCALE/RepLocalSnaphots.png "List of Snapshots")

Each entry in the list includes the dataset and snapshot names. Entries also display the snapshot numbers, how much space they used, the date the system created them, and the amount of data the dataset can access.

Click <i class="material-icons" aria-hidden="true" title="Expand">more_vert</i> to view snapshot options.

### Delete

The *Delete* option destroys the snapshot.
Child clones must be deleted before their parent snapshot can be deleted.
While creating a snapshot is instantaneous, deleting a snapshot is I/O intensive and can take a long time, especially when deduplication is enabled.

{{< expand "Why?" "v" >}}
To delete a block in a snapshot, ZFS has to review all allocated blocks to see if that block is used anywhere else; if it is not, it can be freed.
{{< /expand >}}

### Clone to New Dataset

The *Clone to New Dataset* option creates a new snapshot "clone" (dataset) from the snapshot contents.

{{< expand "What is a clone?" "v" >}}
A clone is a writable copy of the snapshot.
Because a clone is actually a dataset which can be mounted, it appears in the **Pools** screen rather than the **Snapshots** screen.
By default, *-clone* is added to the new snapshot name when the clone is created.

{{< /expand >}}
A dialog prompts for the new dataset *Name*.
The suggested *Name* derives from the snapshot name.

### Rollback

The *Rollback* option reverts the *Dataset* back to the point in time saved by the *Snapshot*.

{{< hint warning >}}
Rollback is a dangerous operation that causes any configured replication tasks to fail.
Replications use the existing snapshot when doing an incremental backup, and rolling back can put the snapshots "out of order".
To restore the data within a snapshot, the recommended steps are:

* Clone the desired snapshot.
* Share the clone with the share type or service running on the TrueNAS system.
* After users have recovered the needed data, delete the clone from **Storage > Pools**.

This approach does not destroy any on-disk data and has no impact on replication.
{{< /hint >}}

TrueNAS asks for confirmation before rolling back to the chosen snapshot state.
Clicking *Yes* reverts all dataset files to the state they were in when the snapshot was created.

### Bulk Operations

To delete multiple snapshots, set the left column boxes for each snapshot and click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> *Delete* button that appears.

To quickly search through the snapshots list by name, type a matching criteria into the <i class="material-icons" aria-hidden="true" title="Search">search</i> *Filter Snapshots* text area.
The list changes to only display the snapshot names that match the filter text.

## Browsing a Snapshot Collection

{{< hint warning >}}
This is an advanced capability which requires ZFS and command line experience.
{{< /hint >}}

All dataset snapshots are accessible as an ordinary hierarchical filesystem
This is reached from a hidden <file>.zfs</file> located at the root of every dataset.

{{< hint warning >}}
A snapshot and any files it contains are not accessible or searchable when the snapshot mount path is longer than *88* characters.
The data within the snapshot is safe and the snapshot is accessible again when the mount path is shortened.
{{< /hint >}}

A user with permission to access the hidden file can view and explore all snapshots for a dataset from the **Shell** or using **Sharing** services like *SMB*, *NFS*, and *SFTP*.
In summary, the main required changes to settings are:

* Snapshot visibility must be manually enabled in the ZFS properties of the dataset.
* In Samba auxiliary settings, the `veto files` command must be modified to not hide the <file>.zfs</file>, and the setting `zfsacl:expose_snapdir=true` must be added.

The effect is that any user who can access the dataset contents can view the list of snapshots by going to the dataset <file>.zfs</file> directory.
Users can browse and search any files they have permission to access throughout the entire dataset snapshot collection.

A user’s ability to view files within a snapshot is limited by any permissions or ACLs set on the files when the snapshot was taken.
Snapshots are fixed as “read-only”, so this access does not permit the user to change any files in the snapshots, or to modify or delete any snapshot, even if they had write permission at the time when the snapshot was taken.

ZFS has a `zfs diff` command which can be run in the **Shell**.
This command lists all changed files between any two snapshot versions within a dataset, or between any snapshot and the current data.
{{< /tab >}}

{{< tab "VMware-Snapshots" >}}
**Storage** > **VMware-Snapshots** coordinates ZFS snapshots when using TrueNAS as a VMware datastore.
When a ZFS snapshot is created, TrueNAS automatically snapshots any running VMware virtual machines before taking a scheduled or manual ZFS snapshot of the dataset or zvol backing that VMware datastore.

Virtual machines **must be powered on** for TrueNAS snapshots to be copied to VMware.
The temporary VMware snapshots are then deleted on the VMware side but still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go in the **Storage > Snapshots** list.

{{< hint info >}}
You need a paid-edition for VMware ESXi to use VMware-Snapshots. If you try to use them with ESXi free then you will see the following error message: **"Error: Can’t create snapshot, current license or ESXi version prohibits execution of the requested operation.”**. Indeed ESXi free has locked (read-only) API that prevents using TrueNAS VMware-Snapshots. The cheapest ESXi edition that is compatible with TrueNAS VMware-Snapshots is *VMware vSphere Essentials Kit*.
{{< /hint >}}

## Create a VMware Snapshot

Go to **Storage > VMware Snapshots** and click *ADD*.

![StorageVMwareSnapshotsAdd](/images/CORE/12.0/StorageVMwareSnapshotsAdd.png "Creating a VMware Snapshot")

| Setting | Value | Description |
|---------|-------|-------------|
| Hostname | string | Enter the IP address or hostname of the VMware host. When clustering, use the IP address or hostname of the vCenter server for the cluster. |
| Username | string | Enter a user account name created on the VMware host. The account must have permission to snapshot virtual machines. |
| Password | string | Enter the password associated with the *Username*. |
| ZFS Filesystem | browse button | Select a filesystem to snapshot. |
| Datastore | drop-down menu | After entering the *Hostname*, *Username*, and *Password*, click *FETCH DATASTORES* to populate the menu. Select the datastore to synchronize. |

TrueNAS connects to the VMware host after clicking *FETCH DATASTORES*.
The *ZFS Filesystem* and *Datastore* drop-down menus populate from the VMware host response.
Choosing a datastore also selects any previously mapped dataset.
{{< /tab >}}
{{< /tabs >}}
