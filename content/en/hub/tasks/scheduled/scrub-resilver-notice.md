---
title: "Sequential Scrub and Resilver Notice"
description: "Sequential Scrub and Resilver Notice"
---



**Description**
Beginning with the release of FreeNAS 11.1, the algorithm used for scrubs and resilvers received many performance improvements, most noticeable on fragmented pools.

**Issue: Legacy Behavior**
Some users might wish to revert to the old algorithm for scrub and resilver.

**Fix: Revert to Old Behavior**
The legacy scrub algorithm can be enabled by setting this **sysctl** tunable in the Shell console:

`sysctl -w vfs.zfs.zfs_scan_legacy=1`

> Note: if a scrub is already in progress, it can be paused, then the tunable set, and the scrub resumed with these commands:

`zpool scrub -p poolname`

`sysctl -w vfs.zfs.zfs_scan_legacy=1`

`zpool scrub poolname`


**Issue: System Load During Scrubs or Resilvers**
In FreeNAS 11.1 and 11.1-U1, resilver and scrub delays were both set to 0. This can keep the system too busy to do other work when a scrub or resilver is active.

**Fix: Adjust Scrub and Silver Delay Settings**
Two **sysctl** tunables affect scrub and resilver speed and system availability:

`vfs.zfs.resilver_delay`

`vfs.zfs.scrub_delay`

Setting the resilver delay to 2 and the scrub delay to 4 limits the IOPS used for these functions, providing some reserve for normal operations:

`sysctl vfs.zfs.resilver_delay=2`

`sysctl vfs.zfs.scrub_delay=4`

