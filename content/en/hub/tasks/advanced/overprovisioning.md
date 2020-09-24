---
title: "Overprovisioning"
description: "Overprovisioning SSD Drives"
tags: ["components"]
---

### Overprovisioning SSD Drives

Overprovisioning SSDs can be done using the **disk_resize** command in the Shell. This can be useful for many different scenarios. Perhaps the most useful benefit of overprovisioning is that it can extend the life of an SSD greatly. Overprovisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive. 

Read more about overprovisioning SSDs [here](https://www.seagate.com/tech-insights/ssd-over-provisioning-benefits-master-ti/).

The command to overprovision an SSD is **disk_resize** device size**, where *device* is the device name of the SSD and size is the desired size of the provision in GB or TB. Here is an example of the command: **disk_resize ada5 16GB**. When no size is specified, it reverts the provision back the full size of the device.

<img src="/images/shell-disk-resize.png" width='700px'>
<br><br>

{{% pageinfo %}}
Some SATA devices may be limited to one resize per power cycle. Some BIOS may block resize during boot and require a live power cycle.
{{% /pageinfo %}}
