---
title: "Setting Up Jail Storage"
description: "Describes how to set up jail storage in TrueNAS CORE."
weight: 30
aliases: /core/applications/jails/storage/
tags:
- jails
- plugins
---

{{< hint type=important title="Unsupported Feature" >}}
{{< include file="/static/includes/COREFeatureSupport.md" >}}
{{< /hint >}}

Jails can be given access to an area of storage outside of the jail that is configured on the TrueNAS system.
It is possible to give a FreeBSD jail access to an area of storage on the TrueNAS system.
This is useful for applications or plugins that store large amounts of data or if an application in a jail needs access to data stored on the TrueNAS system.
For example, the Transmission plugin that stores data using BitTorrent.
Add the TrueNAS external storage using the [mount_nullfs(8)](https://www.freebsd.org/cgi/man.cgi?query=mount_nullfs) mechanism, which links data that resides outside of the jail as a storage area within a jail.

Stop the jail before adding a mount point. A jail must have a **STATE** of **down** before adding a new mount point.
Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> and <i class="material-icons" aria-hidden="true" title="Stop">stop</i> for the jail to change the jail to the down state.

To add storage, click on the <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand the jail, then click on **MOUNT POINTS**.
The **MOUNT POINT** screen lists all of the currently defined mount points.

Click on **Actions** and select **Add** on the **Mount Point** screen to add storage to a jail.

![Jails Mountpoint Add](/images/CORE/Jails/JailMountpointAdd.png "Jails Mountpoint Add")

Browse to the **Source** and **Destination** mount points (paths to the datasets), where:

* **Source** is the directory or dataset on the TrueNAS system you give the jail access to. This is the dataset you create for this purpose.

  TrueNAS creates the directory if it does not exist.
  This directory must reside outside of the pool or dataset the jail uses.
  This is why it is recommended to create a separate dataset to store jails.
  The dataset holding the jails is always separate from any datasets used for storage on the TrueNAS system.

* **Destination** is an existing and empty directory (listed on the screen) within the jail to link to the **Source** storage area. This is the directory you want to use.

  Add a backslash **/** and a name to the end of the path to allow TrueNAS to create a new directory.
  New directories created must be within the jail directory structure. For example, the path is **/mnt/iocage/jails*/*jailname*/root/*new-directory***.

{{< expand "Creating a Mount Point in an SSH Session" "v" >}}
Using the same example above, you can create a mount point from an SSH session by entering the following commands:

Create the new directory with command:

<code>iocage exec <i>jailname</i> mkdir -p /<i>new-directory</i></code>

then create the mount point with command:

<code>iocate fstab -jail <i>jailname</> /mnt/iocage/jails/<i>jailname<i>/root /<i>new-directory</i></code>
{{< /expand >}}

After adding or creating storage, it displays on the **Mount Points** screen for that jail.

![Jails Mountpoint Example](/images/CORE/Jails/JailMountpointExample.png "Jails Mountpoint Example")

Storage automatically mounts as it is created.
Mounting a dataset does not automatically mount child datasets inside it.
Each dataset is a separate file system, so child datasets must each have separate mount points.

### Dataset Permissions and Mount Points
Storage is typically added because the user and group account associated with an application installed inside of a jail needs to access data stored on the TrueNAS system.
Before selecting the **Source**, it is important to ensure that the permissions of the selected directory or dataset grant permission to the user or group account inside the jail.
This is not the default, as the users and groups created inside a jail are separate from the users and groups created on the TrueNAS system.

### Typical Adding Jail Storage Workflow
Here is a typical workflow for adding jail storage:

1. Determine the name of the user and group account used by the application.
   For example, the installation of the Transmission application automatically creates a user account and group account each named *transmission*.
   When in doubt, check the files <file>/etc/passwd</file> (to find the user account) and <file>/etc/group</file> (to find the group account) inside the jail.

   Typically, the user and group names are similar to the application name.
   Also, the UID and GID are usually the same as the port number used by the service.
   A *media* user and group (GID *8675309*) are part of the base system.
   Having applications run as this group or user makes it possible to share storage between multiple applications in a single jail, between multiple jails, or even between the host and jails.

2. Create a user account and group account that match the user and group names used by the jail application on the TrueNAS system.

3. Decide if the jail needs access to existing data or if a new storage area should be created.

   If the jail needs to access existing data, [edit the permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) of the pool or dataset so the user and group accounts have read and write access.
   When multiple applications or jails need access to the same data, create a new group and add each new user account to that group.

   If you are setting aside a new storage area for that jail or application, [create a dataset]({{< relref "/CORE/CORETutorials/Storage/Pools/Datasets.md" >}}).
   Edit the dataset permissions so the user and group account has the desired read and write access.

4. Use the jail <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i>, then click **MOUNT POINTS**.
   Next click on **ACTIONS** and select **Add**, then browse to select the data source and the jail mount destination paths.

To prevent writes to the storage, select **Read-Only**.

### Deleting a Mount Point
Click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and then **Delete** to delete the storage.

### Adding Pointers to Datasets (Directories)
{{< hint type=important >}}
Remember that added storage is just a pointer to the selected storage directory on the TrueNAS system.
It does not copy that data to the jail.
Files that are deleted from the **Destination** directory in the jail are also deleted from the **Source** directory on the TrueNAS system.
However, removing the jail storage entry only removes the pointer.
This leaves the data intact but no longer accessible to the jail.
{{< /hint >}}

If you want to access data stored in a dataset from a directory in the plugin, add a jail mount point from the host dataset to the plugin directory. Remember to stop the jail before adding mount points, and when finished, start the jail again.
For example, the host path */mnt/tank/all-media* wants to see what is in the */media* directory for the plugin, then create a mount point to add */mnt/tank/all-media* in the */media* directory to see the files in the host dataset *all-media*.
Do this for each dataset you want to see in a jail.
Make sure the user and group permissions are set to allow what the plugin expects.
