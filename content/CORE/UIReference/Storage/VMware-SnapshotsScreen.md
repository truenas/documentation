---
title: "VMware-Snapshots Screen"
description: "This article describes the fields in the VMware Snapshot screen on TrueNAS CORE."
weight: 30
tags:
- coresnapshots
---
 
Use **Storage** > **VMware-Snapshots** to add a VMWare snapshot that coordinates ZFS snapshots when using TrueNAS as a VMware datastore.

![StorageVMwareSnapshotsAdd](/images/CORE/12.0/StorageVMwareSnapshotsAdd.png "Creating a VMware Snapshot")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Hostname** | Enter the IP address or host name of the VMware host. When clustering, use the IP address or host name of the vCenter server for the cluster. |
| **Username** |Enter a user account name created on the VMware host. The account must have permission to snapshot virtual machines. |
| **Password** | Enter the password associated with the value in **Username**. |
| **ZFS Filesystem** | Select a file system to snapshot from the dropdown list. Values populate from the VMWare host response. |
| **Datastore** | Select an option from the dropdown list after entering the **Hostname**, **Username**, and **Password**, click **FETCH DATASTORES** to populate the menu. Select the datastore to synchronize. Selecting a datastore also select any previously mapped datasets. |
{{< /truetable >}}

Use **FETCH DATASTORES** to have TrueNAS connect to the VMware host.

{{< taglist tag="coresnapshots" limit="10" >}}
