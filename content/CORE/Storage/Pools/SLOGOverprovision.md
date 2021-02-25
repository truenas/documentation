---
title: "SLOG Overprovisioning"
weight: 50
---

{{< toc >}}

Overprovisioning SLOG SSDs is useful for different scenarios.
The most useful benefit of overprovisioning is greatly extending SSD life.
Overprovisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive. 

Seagate provdes a thoughtful investigation into overprovisioning SSDs: https://www.seagate.com/tech-insights/ssd-over-provisioning-benefits-master-ti/.

{{< hint info >}}
Some SATA devices are limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

{{< tabs "Overprovision Options" >}}
{{< tab "Web Interface" >}}
To over provision a SLOG device, log in to TrueNAS and go to **System > Advanced**.
Enter an overprovision value corresponding to the new size in GB.

![StoragePoolsOptionSLOGOverprovision](/images/CORE/12.0/StoragePoolsOptionsLogOverprovision.png "")

When this value is applied, the overprovision value is applied whenever a pool is created with a SLOG device.
It is impossible to restore an overprovisioned SLOG device back to original capacity without running `disk_resize` after first destroying the pool it was part of and issuing a full power cycle.

{{< hint info >}}
Only one overprovision/underprovision operation occurs per power cycle.
{{< /hint >}}

Erasing the overprovision setting and setting to *none* prevents future SLOG devices from being overprovisioned.
{{< /tab >}}
{{< tab "Shell" >}}
Use `disk_resize` in the Shell to overprovision.

The command to overprovision an SSD is `disk_resize {DEVICE} {SIZE}`, where *{DEVICE}* is the SSD device name and *{SIZE}* is the new provision size in GiB or TiB.
Example: `disk_resize ada5 16GB`.
When no size is specified, it reverts the provision back the full size of the device.
{{< /tab >}}
{{< /tabs >}}
