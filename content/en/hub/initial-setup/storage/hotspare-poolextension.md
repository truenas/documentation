---
title: "Hot Spares and Pool Extension"
description: "Adding spare devices and extending a pool."
tags: ["ZFS","zpool"]
---

## Adding Spare Devices

ZFS provides the ability to have “hot” spares. These are drives that are connected to a pool, but not in use. If the pool experiences the failure of a data drive, the system uses the hot spare as a temporary replacement. If the failed drive is replaced with a new drive, the hot spare drive is no longer needed and reverts to being a hot spare. If the failed drive is detached from the pool, the spare is promoted to a full member of the pool.

Hot spares can be added to a pool during or after creation. On TrueNAS, hot spare actions are implemented by [zfsd(8)](https://www.freebsd.org/cgi/man.cgi?query=zfsd).

To add a spare during pool creation, click `Add Spare`. Select the disk from `Available Disks` and use the <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp (right arrow) next to `Spare VDev` to add it to the section.

To add a device to an existing pool, extend that pool.

## Extending a Pool

To increase the capacity of an existing pool, click the pool name, <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp (Settings), then **Extend**.

If the existing pool is encrypted, an additional warning message shows a reminder that **extending a pool resets the passphrase and recovery key**. Extending an encrypted pool opens a dialog to download the new encryption key file. Remember to use the Encryption Operations to set a new passphrase and create a new recovery key file.

When adding disks to increase the capacity of a pool, ZFS supports the addition of virtual devices, or vdevs, to an existing ZFS pool. **After a vdev is created, more drives cannot be added to that vdev**, but a new vdev can be striped with another of the **same type** to increase the overall size of the pool. To extend a pool, the vdev being added must be the same type as existing vdevs. The **EXTEND** button is only enabled when the vdev being added is the same type as the existing vdevs. 

Some vdev extending examples:

+ to extend a ZFS mirror, add the same number of drives. The result is a striped mirror. For example, if ten new drives are available, a mirror of two drives could be created initially, then extended by adding another mirror of two drives, and repeating three more times until all ten drives have been added.
+ to extend a three-drive RAIDZ1, add another three drives. The resulting pool is a stripe of two RAIDZ1 vdevs, similar to RAID 50 on a hardware controller.
+ to extend a four-drive RAIDZ2, add another four drives. The result is a stripe of RAIDZ2 vdevs, similar to RAID 60 on a hardware controller.
