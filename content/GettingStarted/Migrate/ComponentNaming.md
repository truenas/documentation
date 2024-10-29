---
title: "Component Naming"
description: "Provides information on disk and interface naming changes related to the change from FreeBSD storage and sharing in CORE to Linux in TrueNAS SCALE."
weight: 35
tags:
 - migrate
---

TrueNAS SCALE incorporates all the major TrueNAS CORE storage and sharing features with a web interface based on Debian GNU/Linux.
Because SCALE shares the same UI as the FreeBSD-based TrueNAS CORE, users might notice there are similarities.
However, SCALE does incorporate some differences, primarily in component naming.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}
{{< /hint >}}

## Disks

TrueNAS Core utilizes a numerical listing of drives in a system.

![ComponentNamingDrivesCore](/images/SCALE/Storage/ComponentNamingDrivesCore.png "TrueNAS Core Drive Listing")

TrueNAS SCALE uses a lettered format for drive identification.  

![ComponentNamingDrivesSCALE](/images/SCALE/Storage/ComponentNamingDrivesSCALE.png "TrueNAS SCALE Drive Listing")

{{< hint type=note >}}
SCALE still labels NVMe drives with a numeric value.
{{< /hint >}}

## Interfaces

{{< include file="/static/includes/NetworkPortIdentifications.md" >}}

TrueNAS CORE identifies bonded interfaces or link aggregations with **lagg** followed by a number (lagg1).
TrueNAS SCALE uses **bond** followed by a number (bond1).

{{<include file="/static/includes/addcolumnorganizer.md">}}

See the [TrueNAS Systems](https://www.truenas.com/docs/hardware/) section for lists of the default port names for each platform.