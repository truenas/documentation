---
title: "Managing Enclosures"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/systemconfiguration/viewingenclosures/"
description: "Provides information about hardware and expansion shelves on TrueNAS CORE."
weight: 50
aliases:
  - /core/system/viewenclosure
tags:
- enclosure
---

{{< hint type=tip >}}
Only compatible TrueNAS hardware and expansion shelves available from [iXsystems](https://www.ixsystems.com/) allow seeing the **View Enclosure** option.
To learn more about available iXsystems products, see the [TrueNAS Systems Overview](https://www.truenas.com/systems-overview/) or browse the [Hardware]({{< relref "/Hardware/_index.md" >}}) documentation.
{{< /hint >}}

Go to **System > View Enclosure** to display the status of connected disks and hardware.

![System View Enclosure M50](/images/CORE/System/SystemViewEnclosureM50.png "M50 Enclosure")

## Checking Enclosure Components

The screen shows the primary system.
Other detected TrueNAS hardware is available from a column on the right side of the screen.
Click an enclosure to show details about that hardware. 

![System View Enclosure ES102](/images/CORE/System/SystemViewEnclosureES102.png "System View Enclosure ES102")

The screen is divided into different tabs which reflect the active sensors in the chosen hardware.

You can rename a system by clicking **EDIT LABEL**.

## Identifying Disks

In the **Disks** tab, select a disk on the enclosure image and click **IDENTIFY DRIVE**. The drive LED on the physical system flashes so you can find it.

{{< hint type=note >}}
The TrueNAS Mini Series models do not support drive light identification. 
{{< /hint >}}
