---
title: "Mirroring the Boot Pool"
description: "How to add a second drive and mirror the system boot pool."
---

TrueNAS supports mirroring a boot pool by adding a second device to the original pool. This is especially helpful as one device can fail and the system will still boot. If a device were to fail in a mirror, it can be easily detached and replaced with a new device.

View the current boot pool status by going to **System > Boot > ACTIONS > Boot Pool Status**. On this page you will find the list and status of each boot pool on the system. The default boot pool is named *truenas-boot*. If adding a second device to create a mirrored boot pool, consider these caveats:

* The new device must have at least the same capacity as the existing device.
  Larger capacity devices can be added, but the mirror will only have the
  capacity of the smallest device. Different models of devices which advertise
  the same nominal size are not necessarily the same actual size. For this reason,
  adding another device of the same model of is recommended.

* It is **strongly recommended** to use SSDs rather than USB devices when
  creating a mirrored boot pool.

<img src="/images/boot-pool-status.png">
<br><br>

Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; on a device entry to access actions specific to that device:

* **Attach**: Use this option to add a second device to create a mirrored boot pool.
  If another device is available, it appears in the *Member Disk* drop-down menu.
  Select the desired device.
  The *Use all disk space* option controls the capacity made available to the device.
  By default, the new device is partitioned to the same size as the existing device.
  When *Use all disk space* is enabled, the entire capacity of the new device is used.
  If the original operating system device fails and is detached, the boot mirror will consist of just the newer device, and will grow to whatever capacity it provides.
  However, new devices added to this mirror must now be as large as the new capacity.
  Click *SAVE* to attach the new device to the mirror.

* **Detach**: remove the failed device from the mirror so that it can be replaced.

* **Replace**: once the failed device has been detached, select the new replacement device from the *Member Disk* drop-down menu to rebuild the mirror.
