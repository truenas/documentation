---
title: "VMWare Snapshots Screen"
description: "This article provides information on the VMWare-Snapshot Add screen settings and functions."
weight: 40 
tags:
- scalesnapshots
- scalevmware
---


Use the **VMware-Snapshots** option on the **Storage** sceen to create snapshots when TrueNAS SCALE is used as a VMWare datastore. 
Click **Snapshots** and select **VMware-Snapshots** from the dropdown list to display the **Add VMware-Snapshots** screen.

![AddVMwareSnapshotScreen](/images/SCALE/22.02/AddVMwareSnapshotScreen.png "Add VMware- Snapshot Screen")


| Setting | Description |
|---------|-------------|
| **Hostname** | Enter the IP address or host name of the VMware host. When clustering, enter the vCenter server for the cluster. |
| **Username** | Enter the user on the VMware host with permission to snapshot virtual machines. |
| **Password** | Enter the password associated with the user entered in **Username**. |
| **ZFS Filesystem** | Select a file system to snapshot from the dropdown list of options. This field does not populate until you click **Fetch Datastores**. You must click **Fetch Datastores** before clicking in this field or the creation process fails. |
| **Datastore** | Select a datastore to synchronize with the host from the dropdown list of options. Click **Fetch DataStores** to populate this list with options from the VMWare host. You must click **Fetch Datastores** before you click in this field or the creation process fails. Selecting a datastore also selects any mapped datasets. |

Click **Fetch DataStores** to connect TrueNAS connects to the VMware host. 
This synchronizes TrueNAS SCALE with the VMWare host and populates the **ZFS Filesystem** and **Datastore** dropdown lists with the information from the VMware host response.

{{< taglist tag="scalesnapshots" limit="10" >}}
{{< taglist tag="scalevmware" limit-"10" title="Related VMWare Articles" >}}