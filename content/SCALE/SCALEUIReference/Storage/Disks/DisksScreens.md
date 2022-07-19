---
title: "Disks Screens"
description: "This article provides information on the settings found on and functions of the Disks Screens."
weight: 30
aliases:
 - /scale/scaleuireference/storage/disksscale/
tags:
- scaledisks
---


{{< toc >}}

Use the disk screens to manage disk settings for all physical drives installed in your system.

## Disk Screen

The **Disks** screen displays a list of the physical drives (disks) in the system. The list includes the names, serial numbers, sizes, and pools for the system disks. 

![DisksScreen](/images/SCALE/22.02/DisksScreen.png "Disks Screen")

Use the **Columns** dropdown list to select options to customize disk columns displayed. Options are **Select All**, **Serial** (the disk serial number), **Disk Size**, **Pool** (where the disk is in use), **Disk Type**, **Description**, **Model**, **Transfer Mode**, **Rotation Rate (RPM)**, **HDD Standby**, **Adv. Power Management**, **Enable S.M.A.R.T.**, **S.M.A.R.T. extra options**, and **Reset to Defaults**. The information you enter in the **Edit Disk** screen or when you install the disk displays for each of these column options. 

Click the the <span class="iconify" data-icon="ant-design:down-outlined"></span> for a disk to expand it and show the traits specific to that disk. 

![DiskScreenWithDiskExpanded](/images/SCALE/22.02/DiskScreenWithDiskExpanded.png "Disk Details")

Click **Edit** to display the **Edit Disk** screen.

Click **Wipe** to wipe data from the disk. See [Wiping Disks]({{< relref "/SCALE/SCALETutorials/Storage/Disks/WipingDisks.md" >}}) for more information.

## Edit Disk Screen

The **Edit Disk** screen allows users to configure general disk, power management, temperature alert, S.M.A.R.T. and SED settings for system disks not assigned to a pool. 

![EditDiskScreen](/images/SCALE/22.02/EditDiskScreen.png "Edit Disk Screen")

The **Edit Pool Disk** screen, accessed from the **Pool Status** screen, displays the same settings found on the **Edit Disk** screen you use when editing settings for disks assigned to a storage pool. Click the <span class="material-icons">more_vert</span> for the disk to display the **Disk Actions** menu and select **Edit**.

![EditPoolDiskScreen](/images/SCALE/22.02/EditPoolDiskScreen.png "Edit Pool Disk Screen")

### General Settings

| Setting | Description |
|---------|-------------|
| **Name** | Enter a Linux disk device name. |
| **Serial** | Enter the disk serial number. |
| **Description** | Enter notes about this disk. |

### Power Management Settings

| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select a value from the dropdown list of options or leave set to the default **Always On**. This specifies the minutes of inactivity before the drive enters standby mode. This [forum post](https://www.truenas.com/community/threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describes identifying spun down drives. Temperature monitoring is disabled for standby disks. |
| **Advanced Power Management** | Select a power management profile from the dropdown list of options that include **Disabled** (the default setting), **Level 1 - Minimum power usage with Standby (spindown)**, **Level 64 - Intermediate power usage with Standby**, **Level 127 - Maximum power usage with Standby**, **Level 128 - Minimum power usage withoout Standby (no spindown)**, **Level 192 - Intermediate power usage without Standby**, or **Level 254 - Maximum performance, maximum power usage**. |

### Temperature Alerts Settings

| Setting | Description |
|---------|-------------|
| **Critical** | Enter a threshold temperature in Celsius. If the drive temperature is higher than this value, it creates a LOG_CRIT level log entry and sends an email to the address entered in the [Alerts]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/EmailScreens.md" >}}). Enter **0** to disable this check. |
| **Difference** | Enter a value in degrees Celsius that triggers a report if the temperature of a drive changes by this value since the last report. Enter **0** to disable this check. |
| **Informational** | Enter a value in degrees Celsius that triggers a report if drive temperature is at or above this temperature. Enter **0** to disable this check. |

#### S.M.A.R.T./SED Settings

| Setting | Description |
|---------|-------------|
| **Enable S.M.A.R.T.** | Select to enable the system to conduct periodic [S.M.A.R.T. tests]({{< relref "/SCALE/SCALEUIReference/DataProtection/SMARTTestsSCALE.md" >}}). |
| **S.M.A.R.T. extra options** | Enter additional [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/) options. |
| **SED Password** | Enter a password to set or change the password of the SED for this disk and to use instead of the global SED password. |
| **Clear SED Password** | Select to clear the SED password for this disk. |

## Disk Actions Options
The **Disk Actions** dropdown list provides options to edit, place a disk offline or online, replace, remove or detach a disk associated with a pool. To access these options, from the **Pool Status** screen, click the <span class="material-icons">more_vert</span> for the disk.

**Edit** displays the **Edit Pool Disk** settings screen described in the section above.

### Offline or Online Options

The **Offline** and **Online** options each display a confirmation dialog where you must confirm this action before the system initiates the process to take the disk offline or bring a disk online. Each diplays a status spinner that provides status the operation is in progress. You can also use the **Task Manager** to monitor the process. Both processes can take a while to complete.  

![OfflineAndOnlineConfirmationDialogs](/images/SCALE/22.02/OfflineAndOnlineConfirmationDialogs.png "Offline and Online Confirmation Dialogs")

When the offline or online process completes the **Status** display changes to reflect the new status of that disk.

## Replace Option

The **Replace** option displays a confirmation dialog for the disk selected. Select the disk from the **Member disk** dropdown list that to use as the replacement disk. The disk selected in **Member disk** is stopped if that disk is currently in use or if it has partitions present. To override this protection you must select **Force**. 

{{< hint danger >}}
Replacing a disk can be a destructive process resulting in lost data especially if you use the **Force** option.
Always back up all data before performing a replace operation as data might not be recoverable.
{{< /hint >}}

**Force** overrides the safety checks and adds the disk to the pool. This erases any data on the disk! Be sure you selected the correct disk before you use this option.

![ReplaceDiskDialog](/images/SCALE/22.02/ReplaceDiskDialog.png "Replace Disk Confirmation Dialog")

After you select the disk the **Replace Disk** button activates. Click to begin the replacement process.

### Remove Option

The **Remove** option removes a disk used as a hot spate, cache or log device. A confirmation dialog displays before the system performs the operation. You must select **Confirm** to activate the **Remove** button. 

{{< hint danger >}}
Removing a disk can be a destructive process resulting in lost data.
Always back up all data before performing a remove operation as data might not be recoverable.
{{< /hint >}}

![RemoveDiskDialog](/images/SCALE/22.02/RemoveDiskDialog.png "Remove Disk Confirmation Dialog")

Click **Remove** to execute this operation. If you attempt to remove a disk you should not remove an **Failed** error window displays with information about the failed process.

![RemoveFailedError](/images/SCALE/22.02/RemoveFailedError.png "Remove Disk Failed Error")

### Detach Option

The **Detach** option detaches a disk from a mirror only if another valid replica of the data exists, if not the operation is refused and an error message displays. A confirmation dialog displays where you must select **Confirm** before the **Detach** button activates. Select **Detach** to execute the process.

![DetachDiskDialog](/images/SCALE/22.02/DetachDiskDialog.png "Detach Disk Confirmation Dialog")

{{< hint danger >}}
Detaching a disk can be a destructive process resulting in lost data.
Always back up all data before performing a detach operation as data might not be recoverable.
{{< /hint >}}

{{< taglist tag="scaledisks" limit="10" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}