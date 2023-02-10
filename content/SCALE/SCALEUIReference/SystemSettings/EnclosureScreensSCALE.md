---
title: "View Enclosure Screen (Enterprise Only)"
description: "This article provides information on the TrueNAS **View Enclosure** screen available only on SCALE Enterprise systems, and the information you can find there."
weight: 60
aliases:
tags:
- scaleenclosure
- scaleenterprise
- scaledisks
- scaledashboard
---

{{< toc >}}

{{< hint info >}}
The **View Enclosure** screen only displays on TrueNAS SCALE Enterprise systems or systems with TrueNAS compatible hardware that allows SCALE to communicate with and display information about that hardware.
The option to select **System Settings > Enclosure** is not present on non-Enterprise systems.
{{< /hint >}}

The **System Information** widget on the main **Dashboard** displays an image of the TrueNAS system for Enterprise systems or systems with TrueNAS compatible hardware. Hover the mouse over the image to see the **View Enclosure** label. 
Click anywhere on the system image to open the **View Enclosure** screen.

![ViewEnclosureMainDashboard](/images/SCALE/22.02/ViewEnclosureMainDashboard.png "Main Dashboard View Enclosure") 

The **View Enclosure** screen displays an image of the TrueNAS-provided system hardware showing the location for disks installed in the system. 
Click on a drive image to display a screen with information that drive. Information includes the system pool, disk status, hardware details, and stats for the drive.

Based on the TrueNAS system hardware, the screen displays additional images and information options that reflects the system hardware model using TrueNAS SCALE.

The screen displays expansion shelves with the disks installed in them if the system has expansion shelves installed.

## System Images
System images display the front view of the server by default. 
If the system model includes a rear view, **Rear** changes the image to the rear view of the system hardware. 
**Front** switches to the front view of the system chassis. 
**Edit Label** displays for system models other than the Mini. 

![EnclosureChangeEnclosureLabel](/images/SCALE/22.02/EnclosureChangeEnclosureLabel.png "Change Enclosure Label") 

**Edit Label** opens the **Change Enclosure Label** window. 
Type a name or description for the system and click **Save** to apply the label. 
**Reset to Default** restores the default name for the system.

### Mini Enclosure Screen Example
TrueNAS Mini systems only display the front view of the system hardware.

![ViewEnclosureScreenMini](/images/SCALE/22.02/ViewEnclosureScreenMini.png "View Enclosure Mini") 

Pool information displays at the top of the screen. 
The drive bay number and disk label displays to the left of the image and the status to the right of the image. 
A disk image screen shows details for the drive you click on. 
The **Disk Overview** section provides general details on the system drive hardware and capacity. 
**Drive Temperatures** displays current readings for each drive in the system.

![ViewEnclosureDiskDetailsMini](/images/SCALE/22.02/ViewEnclosureDiskDetailsMini.png "View Enclosure Disk Details Mini") 

### R20 Enclosure Screen Examples
Larger TrueNAS hardware system images include a front and rear view of the chassis to show all drive bays and installed disk drives.

![ViewEnclosureFrontViewR20](/images/SCALE/22.02/ViewEnclosureFrontViewR20.png "View Enclosure Front View R20") 

![ViewEnclosureRearViewR20](/images/SCALE/22.02/ViewEnclosureRearViewR20.png "View Enclosure Rear View R20") 

Click on a drive to display details for that selected drive and to access the **Identify Drive** option.

![ViewEnclosureR20SelectDisk](/images/SCALE/22.02/ViewEnclosureR20SelectDisk.png "View Enclosure Disk Details R20") 

**Identify Drive** helps identify the physical drive bay that corresponds to the SCALE identification number for that drive. 
Select the drive, click **Identify Drive** and go to the location of the system server to locate the drive bay with the LED indication turned on to identify the physical drive that corresponds to the software drive location.

Disk details include the pool, drive model and serial number, status, and other options for the selected drive. 

{{< taglist tag="scaleenclosure" limit="10" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}
{{< taglist tag="scaleEnterprise" limit="10" title="Related Enterprise Articles" >}}

