---
title: "Component Naming"
description: "Provides information on disk and interface naming changes related to the change from FreeBSD to Linux-based storage and sharing in TrueNAS."
weight: 35
tags:
 - migrate
---

The Linux-based TrueNAS OS incorporates all the major FreeBSD-based TrueNAS storage and sharing features with a web interface based on Debian GNU/Linux.
Users might notice similarities between the Linux-based TrueNAS UI and the FreeBSD-based TrueNAS UI.
However, the switch from FreeBSD to Linux results in some differences, primarily in component naming.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}
{{< /hint >}}

## Disks

TrueNAS 13.3 or earlier utilizes a numerical listing of drives in a system.

![ComponentNamingDrivesCore](/images/SCALE/Storage/ComponentNamingDrivesCore.png "TrueNAS Core Drive Listing")

TrueNAS 22.12 or newer uses a lettered format for drive identification.  

![ComponentNamingDrivesSCALE](/images/SCALE/Storage/ComponentNamingDrivesSCALE.png "TrueNAS Drive Listing")

{{< hint type=note >}}
TrueNAS 22.12 or newer still labels NVMe drives with a numeric value.
{{< /hint >}}

## Interfaces

{{< include file="/static/includes/NetworkPortIdentifications.md" >}}

TrueNAS 13.3 or earlier identifies bonded interfaces or link aggregations with **lagg** followed by a number (lagg1).
TrueNAS 22.12 or newer uses **bond** followed by a number (bond1).

{{<include file="/static/includes/addcolumnorganizer.md">}}

See the [Products](https://www.truenas.com/docs/hardware/) section for lists of the default port names for each platform.


