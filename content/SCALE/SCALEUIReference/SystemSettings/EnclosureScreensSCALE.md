---
title: "View Enclosure Screen (Enterprise Only)"
description: "This article provides information on the TrueNAS View Enclosure screen available only on compatible SCALE Enterprise systems."
weight: 60
aliases:
tags:
- scaleenclosure
- scaleenterprise
- scaledisks
- scaledashboard
---

{{< toc >}}

{{< enterprise >}}
The **View Enclosure** screen only displays on TrueNAS SCALE Enterprise systems with compatible hardware.
The UI options to select **System Settings > Enclosure** is not present on incompatible non-Enterprise systems.
{{< /enterprise >}}

The **System Information** widget on the main **Dashboard** displays an image of the specific TrueNAS system. Hover the mouse over the image to see the **View Enclosure** label.
Click anywhere on the system image to open the **View Enclosure** screen.

![ViewEnclosureMainDashboard](/images/SCALE/22.02/ViewEnclosureMainDashboard.png "Main Dashboard View Enclosure") 

## View Enclosure Screen
The **View Enclosure** screen displays an image of the TrueNAS platform.
Additional information about storage pools, drives, and other hardware components is available through a variety of clickable elements and buttons.

### Elements Options

The **Elements** button at the top right of the **View Enclosure** screen displays a dropdown list of options to view information about the system or expansion shelf. 
The options vary by TrueNAS platform, if the system is connected to expansion shelves, and if you have an expansion shelf image selected instead of the main system. 
All TrueNAS systems include the **Disks** option. TrueNAS systems with expansion shelves include the **Temperature**, **Power Supply**, and **Voltage** options. 
The expansion shelf  includes the **Disks**, **Cooling**, **Services**, **Power Supply**, **SAS**, **Temperature**, and **Voltage** options. 
Each option displays a table with readings from the system's internal components taken over a period of time.

## System Image Screens
System images display the front view of the server by default. 
If the system model includes a rear view, **Rear** changes the image to the rear view of the system hardware. 
**Front** switches to the front view of the system chassis. 
**Edit Label** displays for system models other than the Mini. 

![EnclosureChangeEnclosureLabel](/images/SCALE/22.02/EnclosureChangeEnclosureLabel.png "Change Enclosure Label") 

**Edit Label** opens the **Change Enclosure Label** window. 
Type a name or description for the system and click **Save** to apply the label. 
**Reset to Default** restores the default name for the system.

System image screen include two options to change the information on the screen: 
* **Show Pools** that highlights disks in pools on the system image.
* **Show Status** that shows healthy disks in the system and a status indicator color legend.

### Disk Image Screens
Click on a drive image to display a screen with information that drive. Disk drive information includes the system pool, disk status, hardware details, and stats for the drive.

**Identify Drive** on disk detail screens turns on the LED indicator located on a physical drive bay in the system server. 
This helps to identify the physical drive bay that corresponds to the SCALE identification number for that drive. 
Select the drive on the image and then click **Identify Drive**. Go to the location of the system server to locate the drive bay with the LED indication turned on then check the drive location on the **View Enclosure** screen.
{{< hint type=note >}}
The disk image for the Mini-R and R30 systems does not include the **Identify Drive** option as they have all flash drives that do not support this function. 
{{< /hint >}}

### Mini Enclosure Screen Example
TrueNAS Mini systems only display the front view of the system hardware.

![ViewEnclosureScreenMini](/images/SCALE/22.02/ViewEnclosureScreenMini.png "View Enclosure Mini") 

Pool information displays at the top of the screen. 
The drive bay number and disk label displays to the left of the image and the status to the right of the image. 
A disk image screen shows details for the drive you click on. 
The **Disk Overview** section provides general details about the system drive hardware and capacity. 
**Drive Temperatures** displays current readings for each drive in the system.

![ViewEnclosureDiskDetailsMini](/images/SCALE/22.02/ViewEnclosureDiskDetailsMini.png "View Enclosure Disk Details Mini") 

### R20 Enclosure Screen Example
Larger TrueNAS hardware system images include a front and rear view of the chassis to show all drive bays and installed disk drives.

![ViewEnclosureFrontViewR20](/images/SCALE/22.02/ViewEnclosureFrontViewR20.png "View Enclosure Front View R20") 

![ViewEnclosureRearViewR20](/images/SCALE/22.02/ViewEnclosureRearViewR20.png "View Enclosure Rear View R20") 

Click on a drive to display details for that selected drive and to access the **Identify Drive** option.

![ViewEnclosureR20SelectDisk](/images/SCALE/22.02/ViewEnclosureR20SelectDisk.png "View Enclosure Disk Details R20") 

### M40 and Expansion Shelf Enclosure Screen Examples 
The screen opens showing the front view of the main image by default. Both the system and expansion shelf images show the location installed disks. 

![ViewEnclosureM40HeadUnit](/images/SCALE/22.12/ViewEnclosureM40HeadUnit.png "View Enclosure Main Chassis") 

The screen includes smaller images of both the main system and expansion shelves connected to the system, on the right side of the screen. A blue vertical line to the left of the small image on the right side of the screen indicates the selected system view.

![ViewEnclosureExpansionShelf](/images/SCALE/22.12/ViewEnclosureExpansionShelf.png "View Enclosure Expansion Shelf") 

The system and expansion shelf image screens include three options to change the information shown on the screen: 
* **Show Pools** that shows disks in pools on the system or expansion shelf image.
* **Show Status** that shows healthy disks in the system or expansion shelf image, and a status indicator color legend.
* **Show Expander Status** that shows the status of SAS expanders in the system or expansion shelf (only systems with an expansion shelf).

Click on a drive image in the system or expansion shelf image to display a drive information screen for that drive. Disk drive information includes the system pool, disk status, hardware details, and stats for the drive.

![ViewEnclosureDiskInfo](/images/SCALE/22.12/ViewEnclosureDiskInfo.png "View Enclosure Main Chassis Disk Information") 

![ViewEnclosureExpansionShelfDiskInfo](/images/SCALE/22.12/ViewEnclosureExpansionShelfDiskInfo.png "View Enclosure Expansion Shelf Disk Information")

The expansion shelf image varies based on the type of expansion shelf installed, but the disk information displayed is the same as for disks in other system disks.

{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}

