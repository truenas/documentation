---
title: "Upgrading a Pool"
description: "How to upgrade a storage pool."
---

Pools are upgraded using the TrueNAS web interface.

Before upgrading an existing pool, be aware of these caveats:

- Upgrading a pool is one-way, meaning that if you change your mind you cannot go back to an earlier ZFS version or downgrade to an earlier version of the software that does not support those ZFS features.

- Before performing any operation that can affect the data on a storage disk, always back up all data first and verify the integrity of the backup. While it is unlikely that the pool upgrade will affect the data, it is always better to be safe than sorry.

- Upgrading a ZFS pool is optional. Do not upgrade the pool if the possibility of reverting to an earlier version of TrueNAS or repurposing the disks in another operating system that supports ZFS is desired. It is not necessary to upgrade the pool unless the end user has a specific need for the newer ZFS Feature Flags. If a pool is upgraded to the latest feature flags, it will not be possible to import that pool into another operating system that does not yet support those feature flags.

To upgrade a pool, go to **Storage > Pools** and click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>.
Click *Upgrade Pool*.
> NOTE: If the *Upgrade Pool* button does not appear, the pool is already at the
> latest feature flags and does not need to be upgraded.

The upgrade itself only takes a few seconds and is non-disruptive. It is not necessary to stop any sharing services to upgrade the pool. However, it is best to upgrade when the pool is not being heavily used. The upgrade process will suspend I/O for a short period, but is nearly instantaneous on a quiet pool.
