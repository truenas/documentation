---
title: "Replication Tasks"
geekdocCollapseSection: true
weight: 60
---

The ZFS file system provides ability to create a snapshot of the file system contents and transfer the snapshot to another machine to recreate the file system on another machine. Snapshots can be created at any time and as many snapshots can be created as needed. By utilizing replication sysadmins can achieve synchronization between one or more machines.

ZFS replication relies on periodic ZFS snapshots. ZFS snapshots are an inherent feature from the ZFS file system, and are a point-in-time state of the existing ZFS file system. Snapshot can be triggered manually or scheduled. Once the ZFS replication task has been configured, the selected snapshot or snapshots will be replicated to the target ZFS dataset.  Usually, the target ZFS dataset is on a secondary TrueNAS storage server, serving as a disaster recovery platform.

{{< include file="static/includes/General/MenuNav.md.part" markdown="true" >}}
