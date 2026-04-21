---
title: "Advanced Replication Tasks"
description: "Instructions to configure advanced ZFS snapshot replication tasks in TrueNAS."
geekdocCollapseSection: true
weight: 70
related: false
tags:
 - replication
 - backup
keywords:
- enterprise data storage solution
- nas data storage solution
- data protection
- data backup and recovery
---

TrueNAS advanced replication allows users to create one-time or regularly scheduled snapshots of data stored in pools, datasets, or zvols on their TrueNAS system as a way to back up stored data.
When properly configured and scheduled, local or remote replication using the **Advanced Replication Creation** option takes regular snapshots of storage pools or datasets and saves them in the destination location on the same or another system.

{{< include file="/static/includes/ReplicationIndexContentSCALE.md" >}}

The **Advanced Replication Creation** option opens the **Add Replication Task** screen.
This screen provides access to the same settings found in the replication wizard, but has more options to specify:

* Full file system replication
* Stream compression
* Replication speed
* Attempts to replicate data before the task fails
* Block size for data sent
* Log level verbosity

You can also:

* Change encrypted replication to allow an unencrypted dataset as the destination
* Create replication from scratch
* Include or exclude replication properties
* Replicate specific snapshots that match a defined creation time.
* Prevent the snapshot retention policy from removing source system snapshots that failed

With the implementation of the local administrator user to replace the root login, setting up replication tasks as an admin user differs from setting up replication tasks when logged in as root.
Setting up remote replication while logged in as the admin user requires selecting **Use Sudo For ZFS Commands**.

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

<div class="noprint">

## Advanced Replication Contents

{{< children depth="2" description="true" >}}

</div>
