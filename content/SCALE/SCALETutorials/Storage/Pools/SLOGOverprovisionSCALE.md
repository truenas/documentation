---
title: "SLOG Over-Provisioning"
description: "This article provides information on the disk_resize command in SCALE."
weight: 40
aliases: 
tags:
 - scaledisks
 - scalepools
---

{{< toc >}}

Over-provisioning SLOG SSDs is useful for different scenarios.
The most useful benefit of over-provisioning is greatly extending SSD life.
Over-provisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive. 

Seagate provides a thoughtful investigation into over-provisioning SSDs here: 
https://www.seagate.com/tech-insights/ssd-over-provisioning-benefits-master-ti/.

{{< hint info >}}
Some SATA devices are limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

## Over-Provision with Disk_Resize

SCALE uses the `disk_resize` command to change the size of a device. The SCALE UI does not have a UI function for this command yet.

Go to **System Settings > Shell** to enter the command and resize or over-provision a device.

`disk_resize sda 32GB` where *sda* is the device and *32GIB* is the new size for the device.

When no size is specified, it reverts the provision back the full size of the device.

The `disk_resize` command supports SAS, SATA, SAT (interposer) and NVMe drives. Power cycle SATA drives before a second resize

{{< taglist tag="scaledisks" limit="10" >}}
