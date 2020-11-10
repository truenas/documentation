---
title: "Managing the Enclosure"
description: "Overview of options for configuring the TrueNAS hardware and connnected systems"
---

Click System ➞ View Enclosure to display the status of connected disks and hardware.
Only compatible TrueNAS hardware and expansion shelves that are available from iXsystems will allow the Enclosure Management screen to appear.
For documentation about available iXsystems products, see the Docs Hub [Hardware Section](/hardware/)

Detected TrueNAS® hardware is added to a column on the right side of the screen.
Click an enclosure to show details about that hardware. 

The screen is divided into different tabs.
These tabs reflect the sensors that are active in the chosen hardware.

* **Disks** shows a graphic representation of the TrueNAS® hardware and details about connected disks.
  Click any disk slot to see specific details about the disk like the device name, vdev assignment and function, serial number, and current drive settings. 
  The **IDENTIFY DRIVE** button flashes the identification LED for the chosen drive.
* The **Disks Overview** shows statistics about the enclosure pools, status, and detected expanders. 
  There are options to show more details about pools in the enclosure, disk status, and expansion shelf status. 
  Clicking any of the buttons changes the graphic to show the requested details.
* **Cooling** has an entry for each fan with status and RPM.
* **Enclosure Services Controller Electronics** shows the enclosure status.
* Power Supply shows the status of each power supply.
* **SAS Connector** shows the status of the expansion shelf.
* **Temperature Sensor** shows the current temperature of each expansion shelf and the disk chassis.
* **Voltage Sensor** shows the current voltage for each sensor, VCCP, and VCC.

Each enclosures label can be changed by clicking **EDIT NAME**.
