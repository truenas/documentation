---
title: "VMWare Snapshots Screen"
description: "Provides information on the VMWare-Snapshot Add screen settings and functions."
weight: 55
aliases:
 - /scale/scaleuireference/storage/vmwaresnapshotsscreen/
tags:
- snapshots
- vm
---

Use the **VMware Snapshot Integration** option on the **Data Protection > Periodic Snapshot Tasks** widget to create snapshots when you are using TrueNAS SCALE as a VMWare datastore.
Click **VMware Snapshot Integration** to to open the **VMWare Snapshots** screen.

{{< trueimage src="/images/SCALE/DataProtection/vmwaresnapshottask.png" alt="VMware Snapshot Integration" id="VMware Snapshot Integration" >}}

Click the **Add** button to display the **Add VMware Snapshot** screen.

{{< trueimage src="/images/SCALE/DataProtection/emptyvmwaresnapshotadd.png" alt="Add VMware Snapshot Screen" id="Add VMware Snapshot Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | Enter the IP address or host name of the VMWare host. When clustering, enter the vCenter server for the cluster. |
| **Username** | Enter the user on the VMWare host with permission to snapshot virtual machines. |
| **Password** | Enter the password associated with the user entered in **Username**. |
| **Datastore** | Select a VMFS datastore to synchronize with the host from the dropdown list of options. Click **Fetch DataStores** to populate this list with options from the VMWare host. You must click **Fetch Datastores** before you click in this field or the creation process fails. Selecting a datastore also selects any mapped datasets. |
| **ZFS Filesystem** | Select a TrueNAS ZFS dataset from the dropdown list of options. This field does not populate until you click **Fetch Datastores**. You must click **Fetch Datastores** before clicking in this field or the creation process fails. |
{{< /truetable >}}

Click **Fetch DataStores** to connect TrueNAS SCALE to the VMWare host.
This synchronizes TrueNAS SCALE with the VMWare host and populates the **ZFS Filesystem** and **Datastore** dropdown lists with the information from the VMWare host response.

Configured snapshots appear on the **VMware Snapshots** screen. <!-- STATUS INDICATOR? -->

{{< trueimage src="/images/SCALE/DataProtection/VMWareSnapshotsScreenConfigured.png" alt="VMWare Snapshot Configured" id="VMWare Snapshot Configured" >}}
