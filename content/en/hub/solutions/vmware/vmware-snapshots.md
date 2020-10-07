---
title: "VMware-Snapshots"
description: "Snapshoting VMware Instances" 
tags: ["ZFS", "Snapshots"]
---

### VMware-Snapshots
**Storage** > **VMware-Snapshots** is used to coordinate ZFS snapshots when using TrueNAS® as a VMware datastore. When a ZFS snapshot is created, TrueNAS® automatically snapshots any running VMware virtual machines before taking a scheduled or manual ZFS snapshot of the dataset or zvol backing that VMware datastore. Virtual machines **must be powered on** for TrueNAS® snapshots to be copied to VMware. The temporary VMware snapshots are then deleted on the VMware side but still exist in the ZFS snapshot and can be used as stable resurrection points in that snapshot. These coordinated snapshots are listed in Snapshots.


VMware snapshot options.


| Setting        | Value          | Description                                                                                                                                     |
|----------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Hostname       | string         | Enter the IP address or hostname of the VMware host. When clustering, use the IP address or hostname of the vCenter server for the cluster.     |
| Username       | string         | Enter a user account name created on the VMware host. The account must have permission to snapshot virtual machines.                            |
| Password       | string         | Enter the password associated with `Username`.                                                                                                    |
| ZFS Filesystem | browse button  | `Browse` to the filesystem to snapshot.                                                                                                           |
| Datastore      | drop-down menu | After entering the `Hostname`, `Username`, and `Password`, click `FETCH DATASTORES` to populate the menu, then select the datastore to be synchronized. |

TrueNAS® connects to the VMware host after the credentials are entered. The `ZFS Filesystem` and `Datastore` drop-down menus are populated with information from the VMware host. Choosing a datastore also selects any previously mapped dataset.
