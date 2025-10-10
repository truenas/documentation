---
title: "Disks"
description: "Describes UI screens and dialogs related to disk operations."
geekdocCollapseSection: true
weight: 20
tags:
 - disks
 - pools
 - storage
---

The **Disks** screen lists the physical drives (disks) installed in the system.
The list includes the names, serial numbers, sizes, and pools for each system disk.

{{< trueimage src="/images/SCALE/Storage/DisksScreen.png" alt="Disks Screen" id="Disks Screen" >}}

Use the **Columns** dropdown list to select options to customize disk the information displayed.
Options are **Select All**, **Name**, **Serial** (the disk serial number), **Disk Size**, **Pool** (where the disk is in use), **Disk Type**, **Description**, **Model**, **Transfer Mode**, **Rotation Rate (RPM)**, **HDD Standby**, **Adv. Power Management**, and **Reset to Defaults**.
Each option displays the information you enter in the **Edit Disk** screen or when you install the disk.

Select the checkbox to the left of a disk to display the **[Batch Operations](#batch-operations)** options.
The checkbox at the top of the table selects all disks in the system. Select again to clear the checkboxes.

**Storage** in the breadcrumb at the top of the screen returns to the **[Storage Dashboard]({{< ref "/SCALEUIReference/Storage" >}})**.

## Disks Screen - Expanded Disk

Click anywhere on a disk row to expand it and show the traits specific to that disk and available options.
The expanded view of a disk includes details for the disk, options to edit disk properties, and, in some instances, the ability to wipe the disk.

{{< trueimage src="/images/SCALE/Storage/DiskScreenExpandedDiskWithWipeOption.png" alt="Disk Details" id="Disk Details" >}}

**Edit** opens the **[Edit Disk](#edit-disk-screen)** screen.

If a disk is not associated with a pool and is inactive, the **Wipe** option shows.
**Wipe** opens the **[Wipe Disk](#wipe-disk-dialogs)** dialog.

### Batch Operations

Select a checkbox to the left of a disk on the **Disks** screen to display the **Batch Operations** functions: **Edit Disk(s)**.

**Edit Disk(s)** opens the **[Bulk Edit Disks](#bulk-edit-disks)** screen.

#### Bulk Edit Disks

The **Bulk Edits Disks** screen allows you to change disk settings for multiple disks simultaneously.
The screen lists the device names for each selected disk in the **Disks to be edited** section.

{{< trueimage src="/images/SCALE/Storage/BulkEditDisksScreen.png" alt="Bulk Edit Disks Screen" id="Bulk Edit Disks Screen" >}}

{{< expand "Bulk Edit Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select the minutes of inactivity before the drive enters standby mode from the dropdown list. Options are **Always On** or **5**, **10**, **20**, **30**, **60**, **120**, **240**, **300**, and **330**. For more information, read this [forum post|(https://forums.freenas.org/index.php?threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describing identifying spun-down drives. Temperature monitoring is disabled for the standby disk. |
| **Advanced Power Management** | Select the power management profile from the dropdown list. Options are **Disabled**, **Level 1 - Minimum power usage with Standby (spindown)**, **Level 64 - Intermediate power usage with Standby**, **Level 127 - Maximum power usage with Standby**, **Level 128 - Minimum power usage without Standby (no spindown)**, **Level 192 - Intermediate power usage without Standby**, and **Level 254 - Maximum performance, maximum power usage**. |
{{< /truetable >}}
{{< /expand >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Wipe Disk Dialogs

The option to wipe a disk only displays when a disk is not assigned to a pool and is not in use.
**Wipe** opens three dialogs, one to select the method, a confirmation dialog, and a progress dialog that includes the option to abort the process.

The **Wipe Disk *diskname*** opens after clicking **Wipe** on the expanded view of a disk on the **Disks** screen.

{{< trueimage src="/images/SCALE/Storage/WipeDiskDialog.png" alt="Wipe Disk Dialog" id="Wipe Disk Dialog" >}}

**Method** provides options for how you want the system to wipe the disk.
Options are **Quick**, **Full with zeros**, or **Full with random data**.
See [Wiping Disks]({{< ref "WipingDisks" >}}) for more information.

**Wipe** opens the wipe disk confirmation dialog.

{{< trueimage src="/images/SCALE/Storage/WipeDiskConfirmationDialog.png" alt="Wipe Disk Confirmation Dialog" id="Wipe Disk Confirmation Dialog" >}}

**Confirm** activates **Continue**, and **Continue** starts the disk wipe process and opens a progress dialog with the **Abort** button.

{{< trueimage src="/images/SCALE/Storage/DiskWipeProgressDialog.png" alt="Wipe Disk Progress Dialog" id="Wipe Disk Progress Dialog" >}}

**Abort** stops the disk wipe process. At the end of the disk wipe process, a success dialog displays.
**Close** closes the dialog and returns you to the **Disks** screen.

## Edit Disk Screen
The **Edit Disk** screen allows users to configure and manage general disk, power management, temperature alert, and SED settings for system disks not assigned to a pool.

{{< trueimage src="/images/SCALE/Storage/EditDiskScreen.png" alt="Edit Disk Screen" id="Edit Disk Screen" >}}

Click **Edit Disk** on the **[Devices]({{< ref "DevicesScreensSCALE" >}})** screen to open the the **Edit Disk** screen.

### General Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Displays the current name of the disk. To change, enter a Linux disk device name. |
| **Serial** | Displays the serial number for the selected disk. To change, enter the disk serial number. |
| **Description** | Enter notes about this disk. |
{{< /truetable >}}

### Power Management Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select a value from the dropdown list of options or leave it set to the default **Always On**. This specifies the minutes of inactivity before the drive enters standby mode. For information on identifying spun-down drives, see this [forum post](https://www.truenas.com/community/threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/). Temperature monitoring is disabled for standby disks. |
| **Advanced Power Management (APM)** |  Sets the APM level that controls power management behavior when drives are idle, not maximum performance capabilities. When drives are actively accessed, they operate at full performance regardless of the APM setting. Lower-numbered levels prioritize power savings during idle periods, while higher levels prioritize quick response times. Power management profile options: <br><li>**Disabled** (the default setting) <br><li>**Level 1 - Minimum power usage with Standby (spindown)** <br><li>**Level 64 - Intermediate power usage with Standby** <br><li>**Level 127 - Maximum power usage with Standby** <br><li**Level 128 - Minimum power usage without Standby (no spindown)** <br><li**Level 192 - Intermediate power usage without Standby** <br><li**Level 254 - Maximum performance, maximum power usage**</li> |
{{< /truetable >}}
