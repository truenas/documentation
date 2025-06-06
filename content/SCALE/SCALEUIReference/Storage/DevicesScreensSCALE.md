---
title: "Devices"
description: "Provides information on settings and functions found on the Devices screens and widget."
weight: 35
aliases:
 - /scale/scaleuireference/storage/pools/devicesscreensscale/
tags:
- smart
- disks
- sed
- smart
---

The **Devices** screen lists VDEVS and disks configured for the selected pool.
Go to **Storage** and click on **Manage Devices** on the **Topology** widget to view the **Devices** screen.

{{< trueimage src="/images/SCALE/Storage/DevicesScreenDataVdevsUnexpanded.png" alt="Devices Data VDEV Unexpanded" id="Devices Data VDEV Unexpanded" >}}

Click anywhere on the VDEV to see the drives in it and the **ZFS Info** widget for that VDEV.

{{< trueimage src="/images/SCALE/Storage/DevicesMirrorVDEVSelected.png" alt="Devices Mirror VDEV Expanded" id="Devices Mirror VDEV Expanded" >}}

Click anywhere on a drive to see the [drive widgets](#disk-widgets).

**Add VDEV** opens the **Add a VDEVs to Pool** screen with the **[Pool Creation Wizard]({{< ref "PoolCreateWizardScreens" >}})** for the selected pool.
For example, find the **Topology** widget for a pool and click **Manage Devices**.
This opens the **Pool Creation Wizard** with *tank* prepopulated but not editable.

## ZFS Info Widget (VDEV)
The **ZFS Info** widget for the VDEV shows a count of read, write, and checksum errors for that VDEV and the **Extend** and **Remove** options.

{{< trueimage src="/images/SCALE/Storage/DevicesVDEVZFSInfoWidget.png" alt="Devices Details for Mirror ZFS Info Widget" id="Devices Details for Mirror ZFS Info Widget" >}}

**Extend** opens the **Extend VDEV** dialog where you select a disk from the **New Disk** dropdown to add a new disk to the VDEV.

{{< trueimage src="/images/SCALE/Storage/DevicesExtendVDEVDialog.png" alt="Devices Extend VDEV Dialog" id="Devices Extend VDEV Dialog" >}}

**Remove** opens the **Remove device** dialog where you confirm you want to remove the selected VDEV.
To remove a drive from the VDEV, select the drive then select **Detach** on the **[ZFS Info](#zfs-info-widget-drives)** widget to remove the drive from the VDEV (pool).

## Disk Widgets
Each disk in a VDEV has a set of four widgets that show information for that disk.
After selecting a disk, the widgets display on the right side of the screen in the **Details for *diskname*** area of the screen.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskWidgets.png" alt="Devices Disk Widgets" id="Devices Disk Widgets" >}}

### ZFS Info Widget (Drives)
The **ZFS Info** widget for each device (disk drive) in the VDEV shows the name of the VDEV (**Parent**) the read, write, and checksum errors for that drive, and the **Detach** and **Offline** options.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskZFSInfoWidget.png" alt="Devices Disk ZFS Info Widget" id="Devices Disk ZFS Info Widget" >}}

**Detach** opens a confirmation dialog and removes the selected drive from the parent VDEV.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskDetachDialog.png" alt="Devices Disk Detach Dialog" id="Devices Disk Detach Dialog" >}}

**Offline** opens a confirmation dialog and takes the selected drive to an offline state before taking a disk offline to replace it. 
Toggles to **Online** so you can bring a replacement disk online.
After taking a drive offline you can remove or replace the physical drive.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskOfflineDialog.png" alt="Devices Disk Offline Dialog" id="Devices Disk Offline Dialog" >}}

### Hardware Disk Encryption Widget
{{< enterprise >}}
The **Hardware Disk Encryption** widget only shows on Enterprise-licensed systems.
{{< /enterprise >}}

The **Hardware Disk Encryption** widget shows drive information such as the SED password set or not set.

The **Manage SED Password** link opens a **Manage SED Password** dialog, where you can enter a disk SED password to set the disk encryption password.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskHardwareDiskEncryptionWidget.png" alt="Devices Disk Hardware Disk Encryption Widget" id="Devices Disk Hardware Disk Encryption Widget" >}}

{{< trueimage src="/images/SCALE/Storage/ManageSEDPasswordDialog.png" alt="Manage Disk SED Encryption Password" id="Manage Disk SED Encryption Password" >}}

**Global SED Password** shows the status as set or not set.
The **Manage Global SED Password** link opens the **[System Settings > Advanced]({{< ref "AdvancedSettingsScreen" >}})** screen where you can change the global SED password that overrides the disk passwords.

### S.M.A.R.T. Info for&nbsp;*Devicename*&nbsp;Widget

The **S.M.A.R.T. Info for *devicename*** widget, where *devicename* is the name of the disk. It provides the number of **Completed S.M.A.R.T. Tests** and the number of **S.M.A.R.T. Tests** configured on the system.
The widget shows the status of the last short test performed.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskSMARTInfoWidget.png" alt="Devices Disk S.M.A.R.T. Info Widget" id="Devices Disk S.M.A.R.T. Info Widget" >}}

The **Manage SMART Tasks** link opens the **[Data Protection > SMART Tests]({{< ref "SMARTTestsScreensSCALE" >}})** details screen where you find the list of SMART tests configured on your system.

**Run Manual Test** opens the **Manual S.M.A.R.T. Test** dialog if the disk is compatible with SMART tests or opens an information dialog if it is not.

{{< trueimage src="/images/SCALE/DataProtection/ManualSMARTTestDialog.png" alt="Devices Disk S.M.A.R.T. Test Dialog" id="Devices Disk S.M.A.R.T. Test Dialog" >}}

{{< trueimage src="/images/SCALE/DataProtection/ManualSMARTTestSupportDialog.png" alt="Devices Disk S.M.A.R.T. Test Support Dialog" id="Devices Disk S.M.A.R.T. Test Support Dialog" >}}

The **Type** dropdown list includes the **LONG**, **SHORT**, **CONVEYANCE**, and **OFFLINE** options, and the **Cancel** and **Start** buttons.

### Disk Info Widget

The **Disk Info** widget shows the disk size, transfer mode, the serial and model numbers for the drive, type of drive, HDD standby setting, and a description associated with the selected drive.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskInfoWidget.png" alt="Devices Disk Info Widget" id="Devices Disk Info Widget" >}}

**Replace** opens the **Replacing disk *diskname*** dialog, where *diskname* is the name of the selected disk.

{{< trueimage src="/images/SCALE/Storage/ReplacingDiskDialog.png" alt="Replacing Disk Dialog" id="Replacing Disk Dialog" >}}

**Member Disk** lists selectable disks to add a new disk to the pool.
The system prevents losing existing data by stopping an add operation for the new disk if it is already in use or has partitions present.

**Force** overrides the safety check and adds the disk to the pool. Selecting this option erases any data stored on the disk!

**Preserve Power Management and S.M.A.R.T. settings** transfers all power management and S.M.A.R.T. test configurations from the original disk to your replacement disk. Selected by default. Disable to reset your configuration. 

**Preserve disk description** maintains any descriptions associated with the original disk. Selected by default. Disable it before changing the replacement disk descriptors attached to the original disk.
**Replace Disk** adds the new disk to the pool.