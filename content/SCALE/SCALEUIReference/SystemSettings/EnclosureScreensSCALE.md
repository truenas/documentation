---
title: "View Enclosure Screen"
description: "This article provides information on the TrueNAS **View Enclosure** screen, the information you can find there."
weight: 60
aliases:
tags:
 - scaleenclosure
 - scalepools
 - scaledisks
 - scaledashboard
---

{{< toc >}}
The **View Enclosure** screen displays an image of the TrueNAS-provided system hardware with drive images you can select. 
The screen includes information on system pools, disks and their status, details and the HDD stats change with the drive you select on the system image.
Based on the system hardware, the screen provides additional display and information options that reflects the system hardware model using TrueNAS SCALE.

To access the **System > View Enclosure** screen, either click the image on the main dashboard or go to **System Settings > Enclosure>**.

![ViewEnclosureMainDashboard](/images/SCALE/22.02/ViewEnclosureMainDashboard.png "Main Dashboard View Enclosure") 

## System Images
System images display with the front view shown by default. 
If the system model includes a rear view, click **Rear** to change the image to the rear view of the system hardware. 
Click **Front** to switch to the front view of the system chassis. 
**Edit Label** displays for system models other than the Mini. 

![EnclosureChangeEnclosureLabel](/images/SCALE/22.02/EnclosureChangeEnclosureLabel.png "Change Enclosure Label") 

Click on **Edit Label** to open the **Change Enclosure Label** window. 
Type a name or description for the system and click **Save** to apply the label. Select **Reset to Default** to restore the default name for the system.

### Mini Enclosure Screen Example
TrueNAS Mini systems only display the front view of the system hardware.

![ViewEnclosureScreenMini](/images/SCALE/22.02/ViewEnclosureScreenMini.png "View Enclosure Mini") 

Pool information displays at the top of the screen. 
The drive bay number and disk label displays to the left of the image and the status to the right of the image. 
Select a disk to change show details for that drive. The **Disk Overview** section provides general details on the system drive hardware and capacity. 
The **Drive Temperatures** displays current readings for each drive in the system.

![ViewEnclosureDiskDetailsMini](/images/SCALE/22.02/ViewEnclosureDiskDetailsMini.png "View Enclosure Disk Details Mini") 

### R20 Enclosure Screen Examples
Larger TrueNAS hardware system images include a front and rear view of the chassis to show all drive bays and installed disk drives.

![ViewEnclosureFrontViewR20](/images/SCALE/22.02/ViewEnclosureFrontViewR20.png "View Enclosure Front View R20") 

![ViewEnclosureRearViewR20](/images/SCALE/22.02/ViewEnclosureRearViewR20.png "View Enclosure Rear View R20") 

Click on a drive to display details for that selected drive and to access the **Identify Drive** option.

![ViewEnclosureR20SelectDisk](/images/SCALE/22.02/ViewEnclosureR20SelectDisk.png "View Enclosure Disk Details R20") 

**Identify Drive** helps you identify which physical drive bay corresponds to the SCALE identification number for that drive. 
Select the drive, click **Identify Drive** and go to the location of the system server to locate the drive bay with the LED indication turned on to identify the physical drive that corresponds to the software drive location.

Disk details include the pool, drive model and serial number, status, and other options for the selected drive. 

{{< taglist tag="scaleenclosure" limit="10" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}
{{< taglist tag="scalepools" limit="10" title="Related Pools Articles" >}}

