---
title: "Setting Up Jail Storage"
description: "This article describes how to set up Jail Storage in TrueNAS CORE."
weight: 30
aliases: /core/applications/jails/storage/
tags:
- corejails
- corejailspluginsvm
---


Jails can be given access to an area of storage outside of the jail that is configured on the TrueNAS system.
It is possible to give a FreeBSD jail access to an area of storage on the TrueNAS system.
This is useful for applications or plugins that store large amounts of data or if an application in a jail needs access to data stored on the TrueNAS system.
For example, *Transmission* is a plugin that stores data using BitTorrent.
Add the TrueNAS external storage using the [mount_nullfs(8)](https://www.freebsd.org/cgi/man.cgi?query=mount_nullfs) mechanism, which links data that resides outside of the jail as a storage area within a jail.

<i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> > **MOUNT POINTS** shows any added storage and allows adding more storage.

A jail must have a **STATE** of **down** before adding a new mount point.
Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> and <i class="material-icons" aria-hidden="true" title="Stop">stop</i> for a jail to change the jail STATE to down.

Add storage by clicking  on the **Jails** <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> amd then select **MOUNT POINTS**.
The **MOUNT POINT** section lists all of the currently defined mount points.

Go to **MOUNT POINTS > ACTIONS > Add Mount Point** to add storage to a jail.

![Jails Mountpoint Add](/images/CORE/12.0/JailMountpointAdd.png "Jails Mountpoint Add")

Browse to the **Source** and **Destination**, where:

* **Source** is the directory or dataset on the TrueNAS system that is accessed by the jail.
  TrueNAS creates the directory if it does not exist.
  This directory must reside outside of the pool or dataset being used by the jail.
  This is why it is recommended to create a separate dataset to store jails.
  The dataset holding the jails is always separate from any datasets used for storage on the TrueNAS system.
* **Destination** is an existing and empty directory within the jail to link to the **Source** storage area.
  Adding `/` and a name to the end of the path for TrueNAS creates a new directory.
  New directories created must be *within* the jail directory structure. Example: <file>/mnt/iocage/jails/samplejail/root/new-destination-directory</file>.

Storage is typically added because the user and group account associated with an application installed inside of a jail needs to access data stored on the TrueNAS system.
Before selecting the *Source*, it is important to ensure that the permissions of the selected directory or dataset grant permission to the user or group account inside the jail.
This is not the default, as the users and groups created inside a jail are separate from the users and groups created on the TrueNAS system.

Here is the typical workflow for adding jail storage:

1. Determine the name of the user and group account used by the application.
   For example, the installation of the *transmission* application automatically creates a user account named *transmission* and a group account also named *transmission*.
   When in doubt, check the files <file>/etc/passwd</file> (to find the user account) and <file>/etc/group</file> (to find the group account) inside the jail.

   Typically, the user and group names are similar to the application name.
   Also, the UID and GID are usually the same as the port number used by the service.
   A *media* user and group (GID 8675309) are part of the base system. Having applications run as this group or user makes it possible to share storage between multiple applications in a single jail, between multiple jails, or even between the host and jails.

2. On the TrueNAS system, create a user account and group account that match the user and group names used by the jail application.

3. Decide if the jail needs access to existing data or if a new storage area should be created.

4. If the jail needs to access existing data, [edit the permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) of the pool or dataset so the user and group accounts have the desired read and write access.
   When multiple applications or jails need access to the same data, create a new group and add each new user account to that group.

5. If you are setting aside a new storage area for that jail or application, [create a dataset]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}).
   Edit the dataset permissions so the user and group account has the desired read and write access.

6. Use the jail <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> and then select **MOUNT POINTS > ACTIONS > Add Mount Point** to select the data **Source** and the jail mount **Destination**.

To prevent writes to the storage, click **Read-Only**.

After adding or creating storage, it appears in the `MOUNT POINTS` for that jail.

![Jails Mountpoint Example](/images/CORE/12.0/JailMountpointExample.png "Jails Mountpoint Example")

Storage is automatically mounted as it is created.
Mounting a dataset does not automatically mount any child datasets inside it.
Each dataset is a separate filesystem, so child datasets must each have separate mount points.

Click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and then **Delete** to delete the storage.

{{< hint warning >}}
Remember that added storage is just a pointer to the selected storage directory on the TrueNAS system.
It does not copy that data to the jail.
Files that are deleted from the **Destination** directory in the jail are also deleted from the **Source** directory on the TrueNAS system.
However, removing the jail storage entry only removes the pointer.
This leaves the data intact but no longer accessible to the jail.
{{< /hint >}}

{{< taglist tag="corejails" limit="10" >}}
