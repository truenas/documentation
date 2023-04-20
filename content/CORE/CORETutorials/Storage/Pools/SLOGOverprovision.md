---
title: "SLOG Overprovisioning"
description: "This article describes how to configure SLOG over-provisioning on TrueNAS CORE."
weight: 50
aliases: /core/storage/pools/slogoverprovision/
tags:
- coreslogoverprovisioning
- corestorage
---

{{< toc >}}

Over-provisioning SLOG SSDs is useful for different scenarios.
The most useful benefit of over-provisioning is greatly extending SSD life.
Over-provisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive. 

Seagate provides a thoughtful investigation into over-provisioning SSDs here: 
https://www.seagate.com/tech-insights/ssd-over-provisioning-benefits-master-ti/.

{{< hint type=note >}}
Some SATA devices are limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

## Overprovision Options
{{< expand "Web Interface" >}}
To over provision a SLOG device, log in to TrueNAS and go to **System > Advanced**.
Enter an over-provision value corresponding to the new size in GB in the **Log (Write Cache) Overprovision Size in GiB** field.

![StoragePoolsOptionSLOGOverprovision](/images/CORE/12.0/StoragePoolsOptionsLogOverprovision.png "")

When this value is applied, the over-provision value is applied whenever a pool is created with a SLOG device.
It is impossible to restore an over-provisioned SLOG device back to original capacity without running command `disk_resize` after first destroying the pool it was part of and issuing a full power cycle.

{{< hint type=note >}}
Only one over-provision/under-provision operation occurs per power cycle.
{{< /hint >}}

Erasing the over-provision setting in **System > Advanced** **Log (Write Cache) Overprovision Size in GiB** field and setting to *none* prevents future SLOG devices from being over-provisioned.
{{< /expand >}}
{{< expand "Shell" >}}
Use `disk_resize` in the **Shell** to over-provision.

The command to over-provision an SSD is `disk_resize {DEVICE} {SIZE}`, where *{DEVICE}* is the SSD device name and *{SIZE}* is the new provision size in GiB or TiB.
Example: `disk_resize ada5 16GB`.
When no size is specified, it reverts the provision back the full size of the device.
{{< /expand >}}

{{< taglist tag="corestorage" limit="10" >}}
