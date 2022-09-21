---
title: "View Enclosure"
description: "This article provides information about viewing enclosures, disks and hardware on TrueNAS CORE."
weight: 45
tags:
- coreenclosures
- corehardware
---

{{< hint ok >}}
Only compatible TrueNAS hardware and expansion shelves available from [iXsystems](https://www.ixsystems.com/) allow seeing the **View Enclosure** option.
To learn more about available iXsystems products, see the [TrueNAS Systems Overview](https://www.truenas.com/systems-overview/) or browse the [Hardware]({{< relref "/Hardware/_index.md" >}}) documentation.
{{< /hint >}}

Click an enclosure to show details about that hardware. 

![System View Enclosure ES102](/images/CORE/12.0/SystemViewEnclosureES102.png "System View Enclosure ES102")

| Name | Description |
|------|------|
| Disks | Shows a graphic representation of the TrueNAS hardware and details about connected disks. |
| Cooling | Shows the current status and RPM of each connected fan. |
| Enclosure Services Controller Electronics | Shows the enclosure status. |
| Power Supply | Shows details about each power supply. |
| SAS Connector | Shows the status of the SAS connector components. |
| Temperature Sensor | Shows the current temperature of each expansion shelf and the disk chassis. |
| Voltage Sensor | Shows the current voltage for each sensor, VCCP, and VCC. |
| EDIT LABEL | Renames the selected enclosure. |
| SHOW POOLS | Highlights disks in pools. |
| SHOW STATUS | Highlights failed disks. |
| SHOW EXPANDER STATUS| Shows SAS expander statuses. |

{{< taglist tag="corehardware" limit="10" >}}
