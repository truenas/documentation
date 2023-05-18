---
title: "View Enclosure Screen (Enterprise Only)"
description: "This article provides information on the TrueNAS **View Enclosure** screen available only on compatible CORE Enterprise systems, and the information you can find there."
weight: 45
tags:
- coreenclosures
- corehardware
---

{{< toc >}}

{{< enterprise >}}
The **View Enclosure** screen only displays on TrueNAS CORE Enterprise systems with compatible hardware.
The UI options to select **System > View Enclosure** is not present on incompatible non-Enterprise systems.
{{< /enterprise >}}

The **System Information** widget on the main **Dashboard** displays an image of the specific TrueNAS system. Hover the mouse over the image to see the **View Enclosure** label.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureWidget.png" alt="View Enclosure Widget" id="anchor ID and figure caption text." >}}

Click anywhere on the system image to open the **View Enclosure** screen.

## View Enclosure Screen

The **View Enclosure** screen displays an image of the TrueNAS platform.
Additional information about storage pools, drives, and other hardware components is available through clickable elements and buttons.

### Enclosure Elements

The top of the **View Enclosure** screen displays options to view information about the system or expansion shelf. 
The options vary by TrueNAS platform, whether or not the system has expansion shelves, and if you have an expansion shelf image selected instead of the TrueNAS system.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureElements.png" alt="View Enclosure Elements" id="anchor ID and figure caption text." >}}

All TrueNAS systems include the **Disks** option. TrueNAS systems with expansion shelves include the **Temperature**, **Power Supply**, and **Voltage** options. 

Expansion shelves include the **Disks**, **Cooling**, **Services**, **Power Supply**, **SAS Expander**, **Temperature Sensors**, and **Voltage Sensor** options. 
Each option displays a table with readings from the system's internal components taken over time.

## System Image Screens

System images display the front view of the server by default. 

If the system model includes a rear view, **REAR** changes the image to the back of the system. **FRONT** switches to the front view of the system chassis. 

**EDIT LABEL** displays for system models other than the Mini.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureEditLabel.png" alt="View Enclosure Edit Label" id="anchor ID and figure caption text." >}}

**EDIT LABEL** opens the **Change Enclosure Label** window.  Type a name or description for the system and click **SAVE** to apply the label.  **Reset to default** restores the default name for the system.

System image screens include three options to change the information on the screen: 
* **SHOW POOLS** that highlights disks in pools on the system image.
* **SHOW STATUS** that shows healthy disks in the system and a status indicator color legend.
* **SHOW EXPANDER STATUS** that shows the status of SAS expanders in the system or expansion shelf (only systems with an expansion shelf).
* 
### Disk Image Screens

Click on a drive image to display a screen with information for that drive. Disk drive information includes the system pool, status, hardware details, and stats.

**IDENTIFY DRIVE** on disk detail screens turns on the LED indicator on a physical drive bay in the system server. 

**IDENTIFY DRIVE** helps to identify the physical drive bay corresponding to the CORE identification number for that drive. 
Select the drive on the image and then click **IDENTIFY DRIVE**. Go to the location of the system server to locate the drive bay with the LED indication turned on, then check the drive location on the **View Enclosure** screen.

{{< hint type=note >}}
TrueNAS Mini and R30 systems do not include the **IDENTIFY DRIVE** function. 
{{< /hint >}}

### Mini Enclosure Screen Example

TrueNAS Mini systems only display the front view of the system hardware.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureMiniExample.png" alt="View Enclosure Mini" id="anchor ID and figure caption text." >}}

Pool information displays at the top of the screen. The drive bay number and disk label display to the left of the image, and the status is to the right. A disk image screen shows details for the drive you click on. 

The **Disks Overview** section displays the system drive hardware and capacity. 
**Drive Temperatures** section displays current readings for each drive in the system.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureMiniDisks.png" alt="View Enclosure Mini Disks" id="anchor ID and figure caption text." >}}

### R20 Enclosure Screen Example

Larger TrueNAS hardware system images include a front and rear view of the chassis to show all drive bays and installed disk drives.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureR20Front.png" alt="View Enclosure R20 Front" id="anchor ID and figure caption text." >}}

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureR20Rear.png" alt="View Enclosure R20 Rear" id="anchor ID and figure caption text." >}} 

Click on a drive to display details for that selected drive and to access the **IDENTIFY DRIVE** option.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureR20Disks.png" alt="View Enclosure R20 Disks" id="anchor ID and figure caption text." >}} 

### M40 and Expansion Shelf Enclosure Screen Examples
The screen shows the front view of the system by default. Both the system and expansion shelf images show the locations of installed disks. 

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureM40WithShelf.png" alt="View Enclosure M40 With Shelf" id="anchor ID and figure caption text." >}} 
The right side of the screen includes smaller images of both the system and expansion shelves connected to it. The selected system has a blue verticle line next to it.

{{< trueimage src="/Images/CORE/13.0/ViewEnclosureExpansionShelf.png" alt="View Enclosure Expansion Shelf" id="anchor ID and figure caption text." >}} 

The system and expansion shelf image screens include three options to change the information shown on the screen: 
* **SHOW POOLS** that highlights disks in pools on the system image.
* **SHOW STATUS** that shows healthy disks in the system and a status indicator color legend.
* **SHOW EXPANDER STATUS** that shows the status of SAS expanders in the system or expansion shelf (only systems with an expansion shelf).

Click on a drive image in the system or an expansion shelf image to display a drive information screen for that drive. Disk drive information includes the system pool, disk status, hardware details, and stats.

The expansion shelf image varies based on the type of expansion shelf installed, but the disk information displayed is the same as for disks in other system disks.

{{< taglist tag="coreenterprise" limit="10" title="Related Enterprise Articles" >}}
{{< taglist tag="coredisks" limit="10" title="Related Disks Articles" >}}
{{< taglist tag="corehardware" limit="10" >}}