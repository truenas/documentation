---
title: "View Enclosure"
weight: 50
---

{{< hint ok >}}
Only compatible TrueNAS hardware and expansion shelves available from [iXsystems](https://www.ixsystems.com/) allow seeing the **View Enclosure** option.
To learn more about available iXsystems products, see the [TrueNAS Systems Overview](https://www.truenas.com/systems-overview/) or browse the [Hardware](/Hardware/) documentation.
{{< /hint >}}

Go to **System > View Enclosure** to display the status of connected disks and hardware.

![System View Enclosure M50](/images/CORE/12.0/SystemViewEnclosureM50.png "M50 Enclosure")

The screen shows the primary system.
Other detected TrueNAS hardware is available from a column on the right side of the screen.
Click an enclosure to show details about that hardware. 

![System View Enclosure ES102](/images/CORE/12.0/SystemViewEnclosureES102.png "System View Enclosure ES102")

The screen is divided into different tabs.
These tabs reflect the sensors that are active in the chosen hardware.
Some or all of these can show in the **View Enclosure** screen.
The system can be renamed from any tab by clicking *EDIT LABEL*.

{{< tabs "Enclosure Management Tabs" >}}
{{< tab "Disks" >}}
Shows a graphic representation of the TrueNAS hardware and details about connected disks.

![SystemViewEnclosureDisksTabOverview](/images/CORE/12.0/SystemViewEnclosureDisksTabOverview.png "Disks")

Click any disk slot to see specific details about the disk like the device name, vdev assignment and function, serial number, and current drive settings.
*IDENTIFY DRIVE* flashes the identification LED for the chosen drive.

The **Disks Overview** shows statistics about the enclosure pools, status, and detected expanders.
There are options to show more details about pools in the enclosure, disk status, and expansion shelf status.
Clicking any of the buttons changes the graphic to show the requested details.
{{< /tab >}}
{{< tab "Cooling" >}}
Shows the current status and RPM of each connected fan.

![SystemViewEnclosureCoolingTab](/images/CORE/12.0/SystemViewEnclosureCoolingTab.png "Cooling")

{{< /tab >}}
{{< tab "Enclosure Services Controller Electronics" >}}
Shows the enclosure status.

![SystemViewEnclosureEncServContElecTab](/images/CORE/12.0/SystemViewEnclosureEncServContElecTab.png "Enclosure Services Controller Electronics")

{{< /tab >}}
{{< tab "Power Supply" >}}
Shows details about each power supply.

![SystemViewEnclosurePowerSupplyTab](/images/CORE/12.0/SystemViewEnclosurePowerSupplyTab.png "Power Supply")

{{< /tab >}}
{{< tab "SAS Connector" >}}
Shows the status of the SAS connector components.

![SystemViewEnclosureSASConnectorTab](/images/CORE/12.0/SystemViewEnclosureSASConnectorTab.png "SAS Connector")

{{< /tab >}}
{{< tab "Temperature Sensor" >}}
Shows the current temperature of each expansion shelf and the disk chassis.

![SystemViewEnclosureTemperatureSensorTab](/images/CORE/12.0/SystemViewEnclosureTemperatureSensorTab.png "Temperature Sensor")

{{< /tab >}}
{{< tab "Voltage Sensor" >}}
Shows the current voltage for each sensor, VCCP, and VCC.

![SystemViewEnclosureVoltageSensorTab](/images/CORE/12.0/SystemViewEnclosureVoltageSensorTab.png "Voltage Sensor")

{{< /tab >}}
{{< /tabs >}}
