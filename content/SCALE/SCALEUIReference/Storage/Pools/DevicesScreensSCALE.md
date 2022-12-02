---
title: "Devices Screens"
description: "This article provides information on the **Devices** screen and widget settings and functions."
weight: 30
aliases:
tags:
- scaledevices
- scaledisks
- scalevdevs
- scalesed
- scalesmart
---

{{< toc >}}

The **Devices** screen lists VDEVS configured for the selected pool. 

![DevicesScreenDataVdevsUnexpanded](/images/SCALE/22.12/DevicesScreenDataVdevsUnexpanded.png "Devices Data VDEV Unexpanded")  

Click anywhere on the VDEV to see the drives included in it and the **ZFS Info** widget for that VDEV.

![DevicesMirrorVDEVSelected](/images/SCALE/22.12/DevicesMirrorVDEVSelected.png "Devices Mirror VDEV Expanded") 

Click anywhere on a drive to see the [drive widgets](#disk-widgets).

**Add VDEV** opens the **Add a VDEVs to Pool** screen with the **[Pool Manager]({{< relref "PoolManagerScreens.md" >}})** for the selected pool. For example, click **Manage Devices** on the **Topology** widget for your existing pool (i.e., *tank*) opens the **Pool Manager** with *tank* preselected and uneditable. 

## ZFS Info Widget (VDEV)

There are two versions of the **ZFS Info** widget, one for the VDEV and the other for each drive in the VDEV. 
The **ZFS Info** widget for the VDEV displays a count of read, write and checksum errors for that VDEV, and the **Extend** and **Remove** options. 

![DevicesVDEVZFSInfoWidget](/images/SCALE/22.12/DevicesVDEVZFSInfoWidget.png "Devices Details for Mirror ZFS Info Widget")  

**Extend** opens the **Extend VDEV** dialog where you select a disk from the **New Disk** dropdown to add a new disk to the VDEV.

![DevicesExtendVDEVDialog](/images/SCALE/22.12/DevicesExtendVDEVDialog.png "Devices Extend VDEV Dialog")  

**Remove** opens the **Remove device** dialog where you confirm you want to remove the selected VDEV. 
To remove a drive from the VDEV, select the drive then select **Detach** on the **[ZFS Info](#zfs-info-widget-drives)** widget to remove the drive from the VDEV (pool).

## Disk Widgets
Each disk in a VDEV has a set of four widgets that provide information on that disk. 
After selecting a disk the widgets display on the right side of the screen in the **Details for *diskname*** area of the screen.

![DevicesDiskWidgets](/images/SCALE/22.12/DevicesDiskWidgets.png "Devices Disk Widgets") 

### ZFS Info Widget (Drives)
The **ZFS Info** widget for each device (disk drive) in the VDEV displays the name of the VDEV (**Parent**) the read, write, and checksum errors for that drive, and the **Detach** and **Offline** options.
{{< expand "Click Here for More Information" "v" >}}

![DevicesDiskZFSInfoWidget](/images/SCALE/22.12/DevicesDiskZFSInfoWidget.png "Devices Disk ZFS Info Widget") 

**Detach** opens a confirmation dialog and removes the selected drive from the parent VDEV.

![DeviceDiskDetachDialog](/images/SCALE/22.12/DeviceDiskDetachDialog.png "Devices Disk Detach Dialog") 

**Offline** opens a confirmation dialog and takes the selected drive to an offline state. After taking a drive offline you can remove or replace the physical drive.

![DeviceDiskOfflineDialog](/images/SCALE/22.12/DeviceDiskOfflineDialog.png "Devices Disk Offline Dialog") 
{{< /expand >}}

### Hardware Disk Encryption Widget
The **Hardware Disk Encryption** widget provides information on the drive SED password status (set, not set). 
{{< expand "Click Here for More Information" "v" >}}
The widget allows you to set the disk encryption password through the **Manage SED Password** link that opens a **Manage SED Password** dialog where you can enter an SED password for the drive.

![DevicesDiskHardwareDiskEncryptionWidget](/images/SCALE/22.12/DevicesDiskHardwareDiskEncryptionWidget.png "Devices Disk Hardware Disk Encryption Widget") 

The widget allows you to set the disk encryption password through the **Manage SED Password** link that opens a **Manage SED Password** dialog where you can enter an SED password for the drive.

![ManageSEDPasswordDialog](/images/SCALE/22.12/ManageSEDPasswordDialog.png "Manage Disk SED Encryption Password") 

The widget also provides the status of the **Global SED Password** (set or not set) and the **Manage Global SED Password** link that opens the **[System Settings > Advanced]({{< relref "AdvancedSettingsScreen.md" >}})** screen where you can change the global SED password that overrides the disk passwords.
{{< /expand >}}

### S.M.A.R.T. Info for *Devicename* Widget
The **S.M.A.R.T. Info for *devicename*** widget, where *devicename* is the name of the disk, provides the number of **Completed S.M.A.R.T. Tests** and the number of **S.M.A.R.T. Tests** configured on the system. 
{{< expand "Click Here for More Information" "v" >}}

![DeviceDiskSMARTInfoWidget](/images/SCALE/22.12/DeviceDiskSMARTInfoWidget.png "Devices Disk S.M.A.R.T. Info Widget") 

The **Manage SMART Tasks** link opens the **[Data Protection > SMART Tests]({{< relref "SMARTTestsScreensSCALE.md" >}})** details screen where you find the list of SMART tests configured on your system. 
**Run Manual Test** opens the **Manual S.M.A.R.T. Test** dialog if the disk is compatible with SMART tests or opens an information dialog if it is not. 

![ManualSMARTTestDialog](/images/SCALE/22.12/ManualSMARTTestDialog.png "Devices Disk S.M.A.R.T. Test Dialog") 

![ManualSMARTTestSupportDialog](/images/SCALE/22.12/ManualSMARTTestSupportDialog.png "Devices Disk S.M.A.R.T. Test Support Dialog") 

The **Type** dropdown list includes the **LONG**, **SHORT**, **CONVEYANCE**, and **OFFLINE** options, and the **Cancel** and **Start** buttons.
{{< /expand >}}

### Disk Info Widget
The **Disk Info** widget displays information on the **Disk Size**, **Transfer Mode**, the **Serial** and **Model** numbers for the drive, the **Type** of drive it is, the **HDD Standby** setting, and any **Description** associated with the selected drive.
{{< expand "Click Here for More Information" "v" >}}

![DeviceDiskInfoWidget](/images/SCALE/22.12/DeviceDiskInfoWidget.png "Devices Disk Info Widget") 

**Replace** opens the **Replacing disk *diskname*** dialog, where *diskname* is the name of the selected disk.

![ReplacingDiskDialog](/images/SCALE/22.12/ReplacingDiskDialog.png "Replacing Disk Dialog") 

Select the new disk for the pool from the **Member Disk** dropdown list. 
The system prevents losing existing data by stopping the add operation for the new disk if the disk is already in use or has partitions present.

**Force** overrides the safety check and adds the disk to the pool. Selecting this option erases any data stored on the disk!

**Replace Disk** adds the new disk to the pool.
{{< /expand >}}

{{< taglist tag="scaledevices" limit="10" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}