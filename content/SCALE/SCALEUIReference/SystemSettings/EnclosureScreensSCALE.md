---
title: "View Enclosure Screen (TrueNAS Systems Only)"
description: "Provides information on the TrueNAS View Enclosure screen available only on compatible TrueNAS hardware systems."
weight: 80
aliases:
 - /scale/scaleclireference/storage/clienclosure/
tags:
- enclosure
- enterprise
- disks
- dashboard
---

{{< hint type=info title="TrueNAS Systems Only" >}}
The **View Enclosure** screen only displays on compatible TrueNAS hardware.
The UI options to select **System > Enclosure** is not present on incompatible systems.

Those interested in purchasing compatible TrueNAS appliances can click here to [compare options](https://www.truenas.com/systems-overview/) or get a [request a quote from a product specialist](https://www.truenas.com/get-quote/).  
{{< /hint >}}

The **System Information** widget on the main **Dashboard** displays an image of the host TrueNAS system.
Hover the mouse over the image to see the **View Enclosure** label.
Click anywhere on the system image to open the **View Enclosure** screen.

{{< trueimage src="/images/SCALE/Dashboard/DashboardSystemInfoWidget.png" alt="System Information Widget" id="System Information Widget" >}}

## View Enclosure Screen

The **View Enclosure** screen displays an image of the TrueNAS platform.
Additional information about storage pools, drives, and other hardware components is available through a variety of elements and buttons.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureFront.png" alt="View Enclosure Front View" id="View Enclosure Front View" >}}

### Elements Options

The **Elements** button at the top right of the **View Enclosure** screen displays a dropdown list of options to view information about the system or expansion shelf.
The options vary by TrueNAS platform, if the system is connected to expansion shelves, and if you have an expansion shelf image selected instead of the main system.
All TrueNAS systems include the **Disks** option. TrueNAS systems with expansion shelves include the **Temperature**, **Power Supply**, and **Voltage** options.
The expansion shelf  includes the **Disks**, **Cooling**, **Services**, **Power Supply**, **SAS**, **Temperature**, and **Voltage** options.
Each option displays a table with readings from the system's internal components taken over a period of time.

### Change Enclosure Label

**Edit Label** displays for the main system (except TrueNAS Minis) and expansion shelves.
**Edit Label** opens the **Change Enclosure Label** window.

{{< trueimage src="/images/SCALE/SystemSettings/EnclosureChangeEnclosureLabel.png" alt="Change Enclosure Label" id="Change Enclosure Label" >}}

Type a name or description for the system and click **Save** to apply the label.
To simplify system maintenance, use labels that help identify the physical location of the system, such as *ES102 Rack D5 U20*.
**Reset to Default** restores the default name for the system.

## System Image Screens

System images display the front view of the system by default.

System image screens include options to change the information on the screen:

* **Show Pools** shows disks highlighted in pools on the system image.
* **Show Status** shows healthy or failed disks in the system and a status indicator color legend.
* **Show Expander Status** shows a SAS expander status indicator for systems with one or more expander.

### TrueNAS Mini Enclosure Screens

TrueNAS Mini systems display the front view of the system chassis.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureScreenMini.png" alt="Mini Enclosure View" id="Mini Enclosure View" >}}

Pool information displays at the top of the screen.
The drive bay number and disk label displays to the left of the image and the status to the right of the image.
The **Disk Overview** section provides general details about the system drive hardware and capacity.
**Drive Temperatures** displays current readings for each drive in the system.

Click on a disk to show drive details and stats.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureDiskDetailsMini.png" alt="Mini Enclosure Disk Details" id="Mini Enclosure Disk Details" >}}

### TrueNAS Enterprise Enclosure Screens

Larger TrueNAS Enterprise system images include a front and rear view of the chassis.
The screen opens showing the front view by default.

**Rear** changes the image to the rear view of the system chassis.
**Front** switches to the front view.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureRear.png" alt="View Enclosure Rear View" id="View Enclosure Rear View" >}}

The right side of the screen includes smaller thumbnail images of both the main system and any expansion shelves connected to the system.
A blue vertical line to the left of the thumbnail image indicates the selected enclosure.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureExpansionShelf.png" alt="View Enclosure Expansion Shelf" id="View Enclosure Expansion Shelf" >}}

### Disk Image Screens

Both the system and expansion shelf images show installed disk locations.
Click on a drive image in the system or expansion shelf to display a drive information screen for that drive.
Disk drive information includes the system pool, disk status, hardware details, and stats for the drive.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureDiskInfo.png" alt="View Enclosure Disk Information" id="View Enclosure Disk Information" >}}

**Identify** on disk detail screens turns on the LED indicator located on a physical drive bay in the system server.
This helps to identify the physical drive bay that corresponds to the TrueNAS identification number for that drive.
Select the drive on the image and then click **Identify**.
Go to the location of the system server to locate the drive bay with the LED indication turned on, then check the drive location on the **View Enclosure** screen.

{{< hint type=note >}}
TrueNAS Mini and R30 systems do not include the **IDENTIFY** function.
{{< /hint >}}

The expansion shelf image varies based on the type of expansion shelf installed.
The disk information displayed is the same as for disks in the main system chassis.

{{< trueimage src="/images/SCALE/SystemSettings/ViewEnclosureExpansionShelfDiskInfo.png" alt="View Enclosure Expansion Shelf Disk Information" id="View Enclosure Expansion Shelf Disk Information" >}}
