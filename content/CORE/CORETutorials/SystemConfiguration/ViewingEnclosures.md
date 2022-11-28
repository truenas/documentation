---
title: "Managing Enclosures"
description: "This article provides information about hardware and expansion shelves on TrueNAS CORE."
weight: 50
aliases:
  - /core/system/viewenclosure
tags:
- coreenclosures
- corehardware
---

{{< hint ok >}}
Only compatible TrueNAS hardware and expansion shelves available from [iXsystems](https://www.ixsystems.com/) allow seeing the **View Enclosure** option.
To learn more about available iXsystems products, see the [TrueNAS Systems Overview](https://www.truenas.com/systems-overview/) or browse the [Hardware]({{< relref "/Hardware/_index.md" >}}) documentation.
{{< /hint >}}

Go to **System > View Enclosure** to display the status of connected disks and hardware.

![System View Enclosure M50](/images/CORE/12.0/SystemViewEnclosureM50.png "M50 Enclosure")

## Checking Enclosure Components

The screen shows the primary system.
Other detected TrueNAS hardware is available from a column on the right side of the screen.
Click an enclosure to show details about that hardware. 

![System View Enclosure ES102](/images/CORE/12.0/SystemViewEnclosureES102.png "System View Enclosure ES102")

The screen is divided into different tabs which reflect the active sensors in the chosen hardware.

You can rename a system by clicking **EDIT LABEL**.

## Identifying Disks

In the **Disks** tab, select a disk on the enclosure image and click **IDENTIFY DRIVE**. The drive LED on the physical system flashes so you can find it.

{{< taglist tag="corehardware" limit="10" >}}
