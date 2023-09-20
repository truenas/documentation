---
title: "SLOG Over-Provisioning"
description: "Provides information on the disk_resize command in TrueNAS SCALE."
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
https://www.seagate.com/blog/ssd-over-provisioning-benefits-master-ti/.

{{< hint type=note >}}
Some SATA devices are limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

## Resizing a Disk for Over-Provisioning

SCALE uses the [`storage disk resize`]({{< relref "CLIDisk.md #resize-command" >}}) command to change the size of a device. The SCALE UI does not have a UI function for this command yet.

Go to **System Settings > Shell** to access the TrueNAS CLI.

To resize or over-provision a device, enter <code>storage disk resize disks={"name":"<em>sda</em>", "size":"<em>32</em>"}</code> where *sda* is the name of the disk and *32* is the new size for the disk (in gigabytes).
If no size is specified, it reverts the provision back the full size of the device.

The `storage disk resize` command supports SAS, SATA, SAT (interposer) and NVMe drives. Power cycle SATA drives before a second resize.

{{< taglist tag="scaledisks" limit="10" >}}
