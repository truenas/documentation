---
title: "Mirroring the Boot Pool"
description: "Provides information on how to mirror the boot pool on TrueNAS CORE."
weight: 35
tags:
- coreboot
- coremirror
---

Adding a second storage device to the boot pool changes the configuration to a **Mirror**.
This allows one of the devices to fail and the system still boots.
If one of the two devices were to fail, that device is easily detached and replaced.

When adding a second device to create a mirrored boot pool, consider these caveats:

* **Capacity**: The new device must have at least the same capacity as the existing device.
  Larger capacity devices can be added, but the mirror will only have the capacity of the smallest device.
  Different models of devices which advertise the same nominal size are not necessarily the same actual size.
  For this reason, adding another device of the same model of is recommended.

* **Device Type**: We **strongly recommend** using SSDs rather than USB devices when creating a mirrored boot pool.

{{< hint type=warning >}}
Removing devices from storage pools can result in data loss!
{{< /hint >}}

Go to **System > Boot > ACTIONS > Boot Pool Status**.

![SystemBootBootPoolStatus](/images/CORE/12.0/SystemBootBootPoolStatus.png "Boot Pool Status Example")

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> on the boot device, then click attach.

Select a new **Member Disk** from the drop-down and click **SUBMIT**.

{{< expand "Use all disk space?" "v" >}}
By default, TrueNAS partitions the new device to the same size as the existing device.
When you select **Use all disk space**, TrueNAS uses the entire capacity of the new device.

If the original operating system device fails and is detached, the boot mirror changes to consist of just the newer device and grows to whatever capacity it provides.
However, new devices added to this mirror must now be as large as the new capacity.
{{< /expand >}}

{{< taglist tag="coreboot" limit="10" >}}
