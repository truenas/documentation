---
title: "Devices Screens"
description: "Provides information on settings and functions found on the Devices screens and widget."
weight: 35
aliases: 
tags:
- scaledevices
- scalesmart
- scaledisks
- scalevdevs
- scalesed
- scalesmart
---

{{< toc >}}

The **Devices** screen lists VDEVS configured for the selected pool. Go to **Storage > Topology > Manage Devices** to view the **Devices** screen. 

{{< trueimage src="/images/SCALE/Storage/DevicesScreenDataVdevsUnexpanded.png" alt="Devices Data VDEV Unexpanded" id="Devices Data VDEV Unexpanded" >}}

Click anywhere on the VDEV to see the drives included in it and the **ZFS Info** widget for that VDEV.

{{< trueimage src="/images/SCALE/Storage/DevicesMirrorVDEVSelected.png" alt="Devices Mirror VDEV Expanded" id="Devices Mirror VDEV Expanded" >}}

Click anywhere on a drive to see the [drive widgets](#disk-widgets).

**Add VDEV** opens the **Add a VDEVs to Pool** screen with the **[Pool Manager]({{< relref "PoolCreateWizardScreens.md" >}})** for the selected pool.
For example, find the **Topology** widget for a pool and click **Manage Devices**.
This opens the **Pool Creation Wizard** with *tank* prepopulated and uneditable.

## ZFS Info Widget (VDEV)

There are two versions of the **ZFS Info** widget, one for the VDEV and the other for each drive in the VDEV. 
The **ZFS Info** widget for the VDEV displays a count of read, write and checksum errors for that VDEV, and the **Extend** and **Remove** options. 

{{< trueimage src="/images/SCALE/Storage/DevicesVDEVZFSInfoWidget.png" alt="Devices Details for Mirror ZFS Info Widget" id="Devices Details for Mirror ZFS Info Widget" >}}

**Extend** opens the **Extend VDEV** dialog where you select a disk from the **New Disk** dropdown to add a new disk to the VDEV.

{{< trueimage src="/images/SCALE/Storage/DevicesExtendVDEVDialog.png" alt="Devices Extend VDEV Dialog" id="Devices Extend VDEV Dialog" >}}

**Remove** opens the **Remove device** dialog where you confirm you want to remove the selected VDEV. 
To remove a drive from the VDEV, select the drive then select **Detach** on the **[ZFS Info](#zfs-info-widget-drives)** widget to remove the drive from the VDEV (pool).

## Disk Widgets
Each disk in a VDEV has a set of four widgets that provide information on that disk. 
After selecting a disk the widgets display on the right side of the screen in the **Details for *diskname*** area of the screen.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskWidgets.png" alt="Devices Disk Widgets" id="Devices Disk Widgets" >}}

### ZFS Info Widget (Drives)
The **ZFS Info** widget for each device (disk drive) in the VDEV displays the name of the VDEV (**Parent**) the read, write, and checksum errors for that drive, and the **Detach** and **Offline** options.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/Storage/DevicesDiskZFSInfoWidget.png" alt="Devices Disk ZFS Info Widget" id="Devices Disk ZFS Info Widget" >}}

**Detach** opens a confirmation dialog and removes the selected drive from the parent VDEV.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskDetachDialog.png" alt="Devices Disk Detach Dialog" id="Devices Disk Detach Dialog" >}}

**Offline** opens a confirmation dialog and takes the selected drive to an offline state. After taking a drive offline you can remove or replace the physical drive.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskOfflineDialog.png" alt="Devices Disk Offline Dialog" id="Devices Disk Offline Dialog" >}}
{{< /expand >}}

### Hardware Disk Encryption Widget
The **Hardware Disk Encryption** widget provides information on the drive SED password status (set, not set). 
{{< expand "Click Here for More Information" "v" >}}
The widget allows you to set the disk encryption password through the **Manage SED Password** link that opens a **Manage SED Password** dialog where you can enter an SED password for the drive.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskHardwareDiskEncryptionWidget.png" alt="Devices Disk Hardware Disk Encryption Widget" id="Devices Disk Hardware Disk Encryption Widget" >}}

The widget allows you to set the disk encryption password through the **Manage SED Password** link that opens a **Manage SED Password** dialog where you can enter an SED password for the drive.

{{< trueimage src="/images/SCALE/Storage/ManageSEDPasswordDialog.png" alt="Manage Disk SED Encryption Password" id="Manage Disk SED Encryption Password" >}}

The widget also provides the status of the **Global SED Password** (set or not set) and the **Manage Global SED Password** link that opens the **[System Settings > Advanced]({{< relref "AdvancedSettingsScreen.md" >}})** screen where you can change the global SED password that overrides the disk passwords.
{{< /expand >}}

### S.M.A.R.T. Info for *Devicename* Widget
The **S.M.A.R.T. Info for *devicename*** widget, where *devicename* is the name of the disk, provides the number of **Completed S.M.A.R.T. Tests** and the number of **S.M.A.R.T. Tests** configured on the system. 
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/Storage/DeviceDiskSMARTInfoWidget.png" alt="Devices Disk S.M.A.R.T. Info Widget" id="Devices Disk S.M.A.R.T. Info Widget" >}}

The **Manage SMART Tasks** link opens the **[Data Protection > SMART Tests]({{< relref "SMARTTestsScreensSCALE.md" >}})** details screen where you find the list of SMART tests configured on your system. 
**Run Manual Test** opens the **Manual S.M.A.R.T. Test** dialog if the disk is compatible with SMART tests or opens an information dialog if it is not. 

{{< trueimage src="/images/SCALE/DataProtection/ManualSMARTTestDialog.png" alt="Devices Disk S.M.A.R.T. Test Dialog" id="Devices Disk S.M.A.R.T. Test Dialog" >}}

{{< trueimage src="/images/SCALE/DataProtection/ManualSMARTTestSupportDialog.png" alt="Devices Disk S.M.A.R.T. Test Support Dialog" id="Devices Disk S.M.A.R.T. Test Support Dialog" >}}

The **Type** dropdown list includes the **LONG**, **SHORT**, **CONVEYANCE**, and **OFFLINE** options, and the **Cancel** and **Start** buttons.
{{< /expand >}}

### Disk Info Widget
The **Disk Info** widget displays information on the **Disk Size**, **Transfer Mode**, the **Serial** and **Model** numbers for the drive, the **Type** of drive it is, the **HDD Standby** setting, and any **Description** associated with the selected drive.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/Storage/DeviceDiskInfoWidget.png" alt="Devices Disk Info Widget" id="Devices Disk Info Widget" >}}

**Replace** opens the **Replacing disk *diskname*** dialog, where *diskname* is the name of the selected disk.

{{< trueimage src="/images/SCALE/Storage/ReplacingDiskDialog.png" alt="Replacing Disk Dialog" id="Replacing Disk Dialog" >}}

Select the new disk for the pool from the **Member Disk** dropdown list. 
The system prevents losing existing data by stopping the add operation for the new disk if the disk is already in use or has partitions present.

**Force** overrides the safety check and adds the disk to the pool. Selecting this option erases any data stored on the disk!

**Replace Disk** adds the new disk to the pool.
{{< /expand >}}

{{< taglist tag="scaledevices" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalesmart" limit="10" title="Related S.M.A.R.T. Test Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}