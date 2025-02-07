---
title: "SLOG Over-Provisioning"
description: "Provides information on the disk_resize command in TrueNAS."
weight: 30
tags:
 - disks
 - pools
keywords:
- network attached storage device
- enterprise storage solutions
- nas data storage
---

{{< enterprise >}}
Over-provisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive.
Seagate provides a thoughtful investigation into over-provisioning SSDs here:
https://www.seagate.com/blog/ssd-over-provisioning-benefits-master-ti/.

For more general information on SLOG disks, see [SLOG Devices](https://www.truenas.com/docs/references/slog/).

Because this is a potentially disruptive procedure, contact iXsystems Support to review your overprovisioning needs and schedule a maintenance window.

{{< include file="/static/includes/iXsystemsSupportContact.md" >}}

{{< /enterprise >}}
