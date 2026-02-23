---
title: "VDEVs"
description: "Provides information on settings and functions found on the VDEVs screens and cards."
weight: 35
aliases:
 - /scale/scaleuireference/storage/pools/devicesscreensscale/
tags:
- disks
- sed
---

The **VDEVs** screen lists VDEVS and disks configured for the selected pool.
Go to **Storage** and click on **View VDEVs** on the **VDEVs** card to view the **VDEVs** screen.

Click anywhere on the VDEV to see the drives in it and the **ZFS Info** card for that VDEV.

{{< trueimage src="/images/SCALE/Storage/VDEVScreenExpanded.png" alt="Devices RAIDZ2 VDEV Expanded" id="Devices RAIDZ2 VDEV Expanded" >}}

Click anywhere on a drive to see the [drive cards](#disk-cards).

**Add VDEV** opens the **Add a VDEVs to Pool** screen with the **[Pool Creation Wizard]({{< ref "PoolCreateWizardScreens" >}})** for the selected pool.
For example, find the **VDEVS** card for a pool and click **View VDEVs**.
This opens the **Pool Creation Wizard** with *tank* prepopulated but not editable.

## ZFS Info Card {id="storage_vdevs_extend"}

The **ZFS Info** card for the VDEV shows a count of read, write, and checksum errors for that VDEV. It can show the **Remove** or **Offline** buttons, and the **Extend** and **Remove** options.

**Extend** opens the **Extend VDEV** dialog, where you select a disk from the **New Disk** dropdown to add a new disk to the VDEV.

{{< trueimage src="/images/SCALE/Storage/DataVdevExpanded.png" alt="Data VDEV Expanded" id="Data VDEV Expanded" >}}

**Remove** opens the **Remove device** dialog, where you confirm you want to remove the selected VDEV.
To remove a drive from the VDEV, select the drive, then select **Detach** on the **[ZFS Info](#zfs-info-card-drives)** card to remove the drive from the VDEV (pool).

## Disk Cards

Each disk in a VDEV has two cards that show information for that disk: **ZFS Info** and **Disk Info**.
After selecting a disk, the cards show on the right side of the screen in the **Details for *diskname*** area of the screen.

{{< trueimage src="/images/SCALE/Storage/VDEVDiskWidgets.png" alt="VDEV Screen Disk Cards" id="Vdev Screen Disk Cards" >}}

### ZFS Info Card (Drives)

The **ZFS Info** card for each device (disk drive) in the VDEV shows the name of the VDEV (**Parent**), the read, write, and checksum errors for that drive, and the **Detach** and **Offline** options.

{{< columns >}}
{{< trueimage src="/images/SCALE/Storage/ZvolInfoWidget.png" alt="ZFS Info Card" id="ZFS Info Card" >}}
<--->
{{< trueimage src="/images/SCALE/Storage/ZFSInfoWidgetWithExtendRemove.png" alt="ZFS Info Card With Extend and Remove" id="ZFS Info Card with Extend and Remove" >}}
{{< /columns >}}

**Detach** opens a confirmation dialog and removes the selected drive from the parent VDEV.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskDetachDialog.png" alt="Devices Disk Detach Dialog" id="Devices Disk Detach Dialog" >}}

**Offline** opens a confirmation dialog and takes the selected drive to an offline state before taking a disk offline to replace it. 
Toggles to **Online** so you can bring a replacement disk online.
After taking a drive offline, you can remove or replace the physical drive.

{{< trueimage src="/images/SCALE/Storage/DeviceDiskOfflineDialog.png" alt="Devices Disk Offline Dialog" id="Devices Disk Offline Dialog" >}}

### Disk Info Card

The **Disk Info** card shows the disk size, transfer mode, the serial and model numbers for the drive, type of drive, HDD standby setting, and a description associated with the selected drive.

{{< trueimage src="/images/SCALE/Storage/DiskInfoWidget.png" alt="Disk Info Card" id="Disk Info Card" >}}

**Replace** opens the **Replacing disk *diskname*** dialog, where *diskname* is the name of the selected disk.

### Hardware Disk Encryption Card
{{< enterprise >}}
The **Hardware Disk Encryption** card only shows on Enterprise-licensed systems.
{{< /enterprise >}}

The **Hardware Disk Encryption** card shows drive information, like whether the SED password is set or not.
It might show on non-enterprise systems with self-encrypting drives, but not all configuration options show in the UI. Community users should use the SED utilities to manage these drives.

The **Manage SED Password** link opens a **Manage SED Password** dialog, where you can enter a disk SED password to set the disk encryption password.

{{< trueimage src="/images/SCALE/Storage/DevicesDiskHardwareDiskEncryptionWidget.png" alt="Devices Disk Hardware Disk Encryption Card" id="Devices Disk Hardware Disk Encryption Card" >}}

{{< trueimage src="/images/SCALE/Storage/ManageSEDPasswordDialog.png" alt="Manage Disk SED Encryption Password" id="Manage Disk SED Encryption Password" >}}

**Global SED Password** shows the status as set or not set.
The **Manage Global SED Password** link opens the **[System Settings > Advanced]({{< ref "AdvancedSettingsScreen" >}})** screen, where you can change the global SED password that overrides the disk passwords.

#### Replacing Disk Dialog {id="storage_vdev_replace-disk"}

The **Replacing disk *diskname** dialog allows replacing the selected disk with a new disk selected from the **Member Disk** dropdown list.

{{< trueimage src="/images/SCALE/Storage/ReplacingDiskDialog.png" alt="Replacing Disk Dialog" id="Replacing Disk Dialog" >}}

**Member Disk** lists selectable disks to add a new disk to the pool.
The system prevents losing existing data by stopping an add operation for the new disk if it is already in use or has partitions present.

**Force** overrides the safety check and adds the disk to the pool. Selecting this option erases any data stored on the disk!

**Preserve disk description** maintains any descriptions associated with the original disk. Selected by default. Disable it before changing the replacement disk descriptors attached to the original disk.

**Replace Disk** adds the new disk to the pool.
