---
title: "Mirroring the Boot Pool"
weight: 20
---

Adding a second storage device to the boot pool changes the configuration to a **Mirror**.
This allows one of the devices to fail and the system still boots.
If one of the two devices were to fail, that device is easily detached and replaced.

View the current boot pool status by going to **System > Boot > ACTIONS > Boot Pool Status**.

![SystemBootBootPoolStatus](/images/CORE/12.0/SystemBootBootPoolStatus.png "Boot Pool Status Example")

On this page you will find the list and status of each boot pool on the system.
By default, this pool is named **boot-pool**.

When adding a second device to create a mirrored boot pool, consider these caveats:

* **Capacity** : The new device must have at least the same capacity as the existing device.
  Larger capacity devices can be added, but the mirror will only have the capacity of the smallest device.
  Different models of devices which advertise the same nominal size are not necessarily the same actual size.
  For this reason, adding another device of the same model of is recommended.

* **Device Type** : It is **strongly recommended** to use SSDs rather than USB devices when creating a mirrored boot pool.

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> on the boot device entry to see all possible actions.
These are used to mirror the boot pool or maintain it later:

{{< tabs "Device Actions" >}}
{{< tab "Attach" >}}
Add another disk to the pool.
For the system boot pool, this is used to create a mirrored configuration.
Click *Attach* and select the new *Member Disk*.
{{< expand "Use all disk space option" "v" >}}
This option controls the available capacity for the device.
By default, the new device is partitioned to the same size as the existing device.
When *Use all disk space* is enabled, the entire capacity of the new device is used.

If the original operating system device fails and is detached, the boot mirror changes to consist of just the newer device and grows to whatever capacity it provides.
However, new devices added to this mirror must now be as large as the new capacity.
{{< /expand >}}
Click *SAVE* to attach the new device to the mirror.
{{< /tab >}}
{{< tab "Detach" >}}
Removes the device from the pool.
{{< hint danger >}}
Removing devices from storage pools can result in data loss!
{{< /hint >}}
When the device is critical to the pool, the pool status changes to **Degraded** or even **Failed**.
This is part of the disk replacement procedure.
{{< /tab >}}
{{< tab "Replace" >}}
Integrates a new disk into the current location of this disk.
Part of the disk replacement procedure.
*Detach* the failed device, *Replace* and select the new *Member Disk*, and *Save* to rebuild the mirror.
{{< /tab >}}
