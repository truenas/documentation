---
title: "vCenter Plugin Usage"
description: "vCenter Plugin Usage" 
tags: ["vm", "TrueNAS Enterprise"]
---



### vCenter Plugin Usage v 3.3.0

vCenter Server (https://www.vmware.com/products/vcenter-server.html) provides a web interface to manage
physical and virtual machines. vCenter uses plugins to integrate servers management into the vCenter application.
The iXsystems TrueNAS® vCenter Plugin activates management options for TrueNAS® hardware attached to vCenter Server. This enables TrueNAS® systems to be managed from a single interface. The images in this guide show
vCenter 6.7, but versions 7.0 and 6.5 offer a similar experience

#### Connecting TrueNAS® Systems to vCenter

Go to the vCenter Server web interface in a browser and click **Menu** > **Global Inventory Lists** > **Manage TrueNAS** > **+ Add host** to add TrueNAS® hosts to vCenter.


<img src="/images/vcp-10.PNG">
<br><br>

Fill in the required information. To only use a secure connection to the TrueNAS® system, set *HTTPS*. Click **Add Host** and the TrueNAS® hostname or IP address appears in the list of connected systems.

<img src="/images/vcp-11.PNG">
<br><br>

Right-click a list entry to see options to edit the host user credentials or remove that host from vCenter. Click a hostname to see the system management options.
Clicking a system entry opens the management interface. This interface will suspend after several minutes of inactivity and display a warning that the interface is suspended and must be refreshed. The system management screen shows a summary and options to modify the system.

#### Summary

Click **Summary** to view basic information about this system. The IP address, installed version of TrueNAS®, storage
availability, and system service status are shown.

<img src="/images/vcp-12.PNG">
<br><br>

#### Configure

To modify the TrueNAS® system, click **Configure**. Each submenu has a row of buttons to add or make changes to any items in the list.
vCenter works in the background when resolving change requests. **Refresh** updates the list to see any items that might have finished being created or modified. Tasks in progress display in the collapsible **Recent Tasks** area across the bottom of the screen. Naming objects in the plugin follow a standard convention. Names can contain spaces and alphanumeric, -, and . characters.

#### Datastore
The vCenter plugin can create Virtual Machine File System (VMFS) datastores on TrueNAS® hosts for iSCSI blocklevel access, or Network File System (NFS) datastores for file-level access.

<img src="/images/vcp-13.PNG">
<br><br>

vCenter has a default limit of eight NFS datastores per ESX host. See this[VMware article](https://kb.vmware.com/s/article/1020652) about maximum supported volumes  for more details.

Datastores that already exist on the TrueNAS® system are shown. Other types of shares created and managed through the TrueNAS® web interface are not shown here.

#### Add Datastore

Click **+** (Add) to create a new datastore.

<img src="/images/vcp-14.PNG">
<br><br>

Choose an ESXi host to store the datastore, or an ESXi cluster to spread the reserved space across multiple systems. Click **Next**.

<img src="/images/vcp-15.PNG">
<br><br>

Choose the datastore type. VMFS datastores provide block-level (iSCSI) storage for virtual machines. NFS datastores provide file-level storage access.
Click **Next** to view specific options for each type of datastore. These are shown in VMFS Datastore Configuration and NFS Datastore Configuration.

#### VMFS Datastore Configuration

<img src="/images/vcp-16.PNG">
<br><br>

Enter a name for the new datastore. Enter a value and choose a unit for the Datastore Size. The size must be smaller than the chosen Volume.
The *Data Path IP* shows the IP address of the TrueNAS® system. Other connected TrueNAS® systems can also be selected with the drop down menu.
Select the datastore VMFS Version from the drop down menu. Choose between the modern version 6 or the legacy versions 3 and 5. See the [VMware VMFS documentation](https://docs.vmware.com/en/VMwarevSphere/6.5/com.vmware.vsphere.storage.doc/GUID-7552DAD4-1809-4687-B46EED9BB42CE277.html?src=af_5acfd7719690b&cid=70134000001YR9C) for detailed comparisons.

Enabling Sparse Volume reserves less than the total available size and metadata storage space, but this can cause writes to fail if the volume has little space remaining. See [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs).
Select the TrueNAS® pool to hold the datastore. The *Volume* must be large enough to contain the chosen *Datastore Size*.

#### NFS Datastore Configuration

<img src="/images/vcp-17.PNG">
<br><br>

Enter a name for the new datastore. The *Data Path IP* shows the IP address of the TrueNAS® system. Other TrueNAS® systems added to vCenter Server
can also be selected with the drop down menu.
Select the path to the TrueNAS® NFS share from the *Mount Share Path* drop down menu.
Click Next.

#### Review Datastore Configuration

After configuring the VMFS or NFS datastore, a summary of the new datastore is shown. To being creating the
datastore, review the settings and click Finish. The interface shows a warning when the datastore contains more
than 80% of the available space. Click Refresh to see the new datastore after it has been created.

#### Extending a Datastore

The total size of a VMFS datastore can be increased when additional space is required. Highlight a VMFS datastore from the list and click Edit to extend it.

<img src="/images/vcp-18.PNG">
<br><br>

The new size must be larger than the current size and less than the total available capacity. For best performance,
it is recommended to use less than 80% of the total available size. Click Extend Datastore.
A datastore reserves some of the available space for internal use, leaving the available capacity as slightly less
than the chosen amount.

#### Cloning Datastores

Cloning an NFS or VMFS datastore creates a duplicate of that datastore. Select a datastore from the list and click **Clone**.
Choose an ESXi host to store the new datastore and click **Next**. Enter a name for the clone and click **Clone Datastore**. vCenter starts the cloning process and continues the task in the background. Click **Refresh** after some time to see the cloned datastore.

#### Create Snapshot

A snapshot is a read-only copy of a file system or volume. Snapshots require little disk space and can be used to restore a datastore to an earlier point in time. See [Overview of ZFS Snapshots](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbciq.html) for more details. Select a datastore from the list and click **Create Snapshot**. Enter a name for the snapshot. Click **Create**.  View created snapshots in the `Snapshot` menu.

#### Snapshots

This list shows all manually or automatically created snapshots. Create snapshots in the *Datastore* and *Scheduling* menus.

<img src="/images/vcp-19.PNG">
<br><br>

*Revert* resets a datastore to the state saved by the selected snapshot. Any changes to the datastore made after the snapshot was created are lost. To revert a datastore, highlight a snapshot and click *Revert*. Confirm the action by clicking Yes in the popup window. vCenter reverts the datastore to the state saved in the snapshot. 
A snapshot can be deleted by clicking Delete and confirming the action.

#### Scheduling Periodic Snapshots

The *Scheduling* tab is used to create, edit, and delete periodic snapshot schedules. Schedules are synchronized between vCenter and the individual TrueNAS® web interface. Click **+** to begin creating a new snapshot schedule.

<img src="/images/vcp-20.PNG">
<br><br>

| Setting   | Value                     | Description                                                                                                                                                         |                                                     |
|-----------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| Datastore | dropdown menu             | The datastore to snapshot. Choose a created datastore from the drop-down list.                                                                                      |                                                     |
| Recursive | checkbox                  | Recursive checkbox Include child datasets in the snapshot.                                                                                                          |                                                     |
| Lifetime  | integer and dropdown menu | The amount of time to keep snapshots created by this schedule. Enter a number and choose a unit of time from the drop-down.                                         | umber and choose a unit of time from the drop-down. |
| Begin     | dropdown menu             | When the schedule can begin snapshotting the datastore. Choose a time from the dropdown.                                                                            |                                                     |
| End       | dropdown menu             | When the schedule can no longer start snapshotting the datastore. Choose a time from the drop-down. A schedule that is already running can continue past this time. |                                                     |
| Interval  | dropdown menu             | How often a new snapshot is created between the Begin and End times. Choose a preconfigured interval from the drop-down.                                            |                                                     |
| Weekdays  | checkboxes                | Days of the week this task is allowed to run.                                                                                                                       |                                                     |
| Enable    | checkbox                  | Activate this periodic snapshot schedule.                                                                                                                           |                                                     |


Click **OK** to save the configured schedule and add it to the **Configure** > **Scheduling** list. If the new schedule is not
immediately visible, click **Refresh** to update screen.
Selecting a schedule and clicking Edit opens a configuration window for that schedule. Make any needed adjustments, then click **Save** to save the updated schedule.

#### Replication

**Configure** > **Replication** is used to schedule remote backups of snapshots that have been taken as part of a periodic snapshot.
Click **+** to open the *Create Replication* window.

<img src="/images/vcp-21.PNG">
<br><br>

| Setting                                        | Value         | Description                                                                                                                                      |
|------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Datastore                                      | dropdown menu | Datastore with snapshots to copy to the Remote Datastore. Choose a datastore with a periodic snapshot schedule.                                  |
| Remote Datastore                               | string        | Remote Datastore string Datastore to store the replicated snapshots. Enter the ZFS filesystem name. Example: pool1/dataset1.                     |
| Recursively Replicate Child Dataset's Snapshot | checkbox      | Set to include snapshots of child datasets from the primary datastore.                                                                           |
| Delete Stale Snapshot                          | checkbox      | Set to delete snapshots from the Remote Datastore that no longer exist in the datastore.                                                         |
| Replication Stream Compression                 | dropdown menu | Choices are lz4 (fastest), pigz (all rounder), plzip (best compression), or                                                                      |
| Limit KB/s                                     | integer       | off. Selecting a compression algorithm can reduce the size of the data being replicated.                                                         |
| Begin                                          | dropdown menu | Time to start the replication task.                                                                                                              |
| End                                            | dropdown menu | The end time that a replication can start. Replication tasks already in progress will continue past this time.                                   |
| Enable                                         | checkbox      | Activate this replication schedule.                                                                                                              |
| Remote Hostname                                | string        | Hostname or IP address of the remote system to receive the replicated snapshots.                                                                 |
| Remote Port                                    | integer       | Port number used by the SSH server on the remote system.                                                                                         |
| Encryption Cipher                              | dropdown menu | Standard encryption provides the best security. Fast is less secure, but has better transfer rates for devices with limited cryptographic speed. |
| Remote Host Key                                | string        | Type or paste the SSH public key of the NAS containing the Datastore.                                                                            |

The system that receives the snapshots must have SSH enabled and a public SSH key from the source system added to the receiving system root user account. This public key is the same key used as the *Remote Host Key*. See **Storage** > **Replication Tasks** > **Example: TrueNAS to TrueNAS or Other Systems, Manual Setup** > **Encryption Keys** in the TrueNAS® Documentation(https://docs.truenas.com/) for instructions about copying the
source system replication key.
Click **Ok** to save the new replication schedule and add it to the list. If the task does not immediately appear in the list, click **Refresh**.
A replication that runs for the first time can take a long time to complete. Schedule replications to run outside peak usage times for both the source and destination systems.

#### Role-Based Access Control (RBAC)

An administrator can grant vCenter users specific role-based access to a TrueNAS® system.

<img src="/images/vcp-22.PNG">
<br><br>

| Role Name       |   | User is allowed to:            |
|-----------------|---|--------------------------------|
| Discover        |   | Add TrueNAS systems to vCenter |
| Create Clones   |   | Copy existing datastores       |
| Create Storage  |   | Create new datastores          |
| Modify Storage  |   | Edit existing datastores       |
| Destroy Storage |   | Delete datastores              |

Each role gives the user the ability to perform the functions in that role and all of the roles that precede it in the list. For example, a user with a *Create Storage* role can create a new datastore and clone existing datastores. The vCenter administrator account always has all permissions.


{{% pageinfo %}}
New vCenter users must be created in **Menu** > **Administration** > **Single Sign On** > **Users and Groups**.
{{% /pageinfo %}}

#### Add a Role to an Existing vCenter User

Click **+** to open the Add Role Based Access Control window. Type a user name in the form `DOMAIN.NAME\username`, where `DOMAIN.NAME` is the user Domain found in the **vCenter Menu** > **Administration** > **Single Sign On** > **Users and Groups** page. 
Open the *Assign Role* drop-down menu and choose a role for the user. Click **Add** to add the role. If the entry does not appear in the list immediately, click **Refresh**.


