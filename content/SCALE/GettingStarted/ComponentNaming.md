---
title: "Component Naming"
weight: 25
---

{{< toc >}}

TrueNAS SCALE incorporates all the major TrueNAS CORE storage and sharing features with a web interface based on Debian GNU/Linux.
Because SCALE shares the same UI as the FreeBSD-based TrueNAS CORE, users will notice there are similarities.
However, SCALE does incorporate some differences, primarily in component naming.

## Disks

TrueNAS Core utilizes a numerical listing of drives in a system.

![ComponentNamingDrivesCore](/images/SCALE/ComponentNamingDrivesCore.png "TrueNAS Core Drive Listing")

TrueNAS SCALE uses a lettered format for drive identification.  

![ComponentNamingDrivesSCALE](/images/SCALE/ComponentNamingDrivesSCALE.png "TrueNAS SCALE Drive Listing")

{{< hint info >}}
 SCALE still labels NVMe drives with a numeric value.
{{< /hint >}}

## Interfaces

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

See the [TrueNAS Systems]({{< relref "/Hardware/_index.md" >}}) section for lists of the default port names for each platform.
