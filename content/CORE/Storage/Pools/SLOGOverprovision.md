---
title: "SLOG Overprovision"
weight: 80
---

Overprovisioning SLOG SSDs can be useful for many different scenarios.
Perhaps the most useful benefit of overprovisioning is that it can extend the life of an SSD greatly.
Overprovisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive. 

Read more about overprovisioning SSDs [here](https://www.seagate.com/tech-insights/ssd-over-provisioning-benefits-master-ti/).
{{< hint >}}
Some SATA devices can be limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

## Overprovision in the Web Interface

To over provision a SLOG device, log in to TrueNAS and go to **System > Advanced**.
Enter an overprovision value corresponding to the new size in GB.

![Storage Pools Option SLOG Overprovision](/images/CORE/12.0/StoragePoolsOptionsLog Overprovision.png "Storage Pools Option SLOG Overprovision")
<br><br>

This setting only applies to SLOG devices during pool creation.

{{< hint >}}
Only one overprovision/underprovision operation can occur per power cycle.
{{< /hint >}}

Once this value is applied, the overprovision value is applied whenever a pool is created with a SLOG device.
It is impossible to restore an overprovisioned SLOG device back to original capacity without running `disk_resize` after first destroying the pool it was part of and issuing a full power cycle.

The overprovision setting can be erased and set to *none* to prevent future SLOG devices from being overprovisioned.

## Overprovision Shell Commands

You can also overprovision using the `disk_resize` command in the Shell.

The command to overprovision an SSD is **disk_resize** device size**, where *device* is the device name of the SSD and size is the desired size of the provision in GB or TB. Here is an example of the command: **disk_resize ada5 16GB**. When no size is specified, it reverts the provision back the full size of the device.

<img src="/images/ShellDiskResize.png" width='700px'>
