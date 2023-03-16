---
title: "Adding and Managing VM Devices"
description: "This article provides instructions on how to add or manage VM devices."
weight: 12
alias: /scale/scaleuireference/virtualization/creatingmanagingvmsscale/
tags:
 - scalevm
 - scalegpu
---

{{< toc >}}

## Adding and Removing Devices

After creating the VM, the next step is to add and remove virtual devices for that VM. Go to **Virtualization** > **Virtual Machines** and locate the name of the VM you want to modify. Expand the VM entry on the **Virtual Machines** widget by clicking the down arrow to the right of the VM name. This displays further details for the VM.

Click the <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>**Devices** button to view the devices associated with the VM.

![VMRunningOptionsSCALE](/images/SCALE/22.12/VMRunningOptionsSCALE.png "VM Listing Expanded")

The devices for the VM display as a list.

![VMDetailsDevicesSCALE](/images/SCALE/22.12/VMDetailsDevicesSCALE.png "VM Devices")

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allow booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

The  <span class="material-icons">more_vert</span> vertical elipsis icon displayed on the right side of each listed device provides additional options. These include **Edit**, **Delete** and **Details**.

## Device Actions

### Edit *type* Device
**Edit** opens the **Edit *type* Device** screen where *type* is the device type selected. 
Settings displayed vary based on the type of device set when at device creation, and are the same as those displayed on the **[Add Device](#devices-add-screens)** screen except for the **Device Type** field that only displays on the Add Device screens.
### Delete Device
**Delete** opens a dialog where you click **Delete Device** to confirm you want to delete the device. 
### Change Device Order
**Change Device Order** opens a dialog for the selected device. Enter the number that represents the order the VM looks to the device during boot-up. The lower the number places the device earlier in the boot process. 
Enter the number and click **Save**.
### Details
**Details** displays an information dialog for the selected device that lists the port, type, bind IP and other details about the device. Click **Close** to close the dialog.

## Device Add Screens

The **Add** button on the **Devices** screen opens the **Add Device** configuration screen. Settings change base on the selection in **Device Type**. Configure the following based on your needs:

Select **[CD-ROM](#add-device-type-cd-rom)** to configure a new CD-ROM location and the boot order for that device.

Select **[NIC](#add-device-type-nic)** to configure a new network adapter and the boot order for that device.

Select **[Disk](#add-device-type-disk)** to configure a new disk location, drive type and sector size, and the boot order for that device.

Select **[Raw File](#add-device-type-raw-file)** to configure a new file location and file size, the disk sector and mode, and the boot order for that device.

Select **[PCI Passthrough Device](#add-device-type-pci-passthrough-device)** to select a PCI Passthrough device from the dropdown list and the boot order for that device.

Select **[USB Passthrough Device](#add-device-type-usb-passthrough-device)** to select a USB Passthrough device from the dropdown list and the boot order for that device.

Select **[Display](#add-device-type-display)** to configure a new display device and the boot order for that device.

### Add Device Type CD-ROM
Select **CD-ROM** in the **Add** device screen **Device Type** to configure the device setings and boot order.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceCDROM](/images/SCALE/22.12/VMAddDeviceCDROM.png "Devices Add CD-ROM Type") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list. **CD-ROM** is the default setting. |
| **CD-ROM Path** | Use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to browse to the location of the CD-ROM file on the system. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |

{{< /expand >}}
### Add Device Type NIC
Select **NIC** in the **Add** device screen **Device Type** to configure network interface card settings and boot order.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceNIC](/images/SCALE/22.12/VMAddDeviceNIC.png "Devices Add NIC") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list.  |
| **Adapter Type** | Required. Select the emulator type from the dropdown list. Emulating an **Intel e82545 (e1000)** Ethernet card provides compatibility with most operating systems. Change to **VirtIO** to provide better performance on systems with VirtIO paravirtualized network driver support. |
| **MAC Address**  | Displays the default auto-generated random MAC address the VM receives. Enter a custom address to override the default.   |
| **Generate MAC Address** | Click to add a new randomized address in **MAC Address**. |
| **NIC to attach** | Select a physical interface from the dropdown list to assoicate with the VM. |
| **Trust Guest Filters** | Default setting is not enabled. Set this attribute to allow the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to "yes" has security risks, because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /expand >}}

### Add Device Type Disk
Select **Disk** in the **Add** device screen **Device Type** to configure a new disk location, drive type and disk sector size and boot order.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceDisk](/images/SCALE/22.12/VMAddDeviceDisk.png "Devices Add Disk") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Zvol** | Select the zvol path from the dropdown list. |
| **Mode** | Select the drive type from the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Disk sector size** | Select the disk sector size from the dropdown list or leave set as **Default**. Options are **Default**, **512** or **4096**. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /expand >}}

### Add Device Type Raw File
Select **Raw File** in the **Add** device screen **Device Type** to configure the location and size of the file, disk sector size and type, and boot order.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceRawFile](/images/SCALE/22.12/VMAddDeviceRawFile.png "Devices Add Raw File") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Raw File** | Enter or use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to browse to the location of the file on the system. |
| **Disk sector size** | Select the disk sector size from the dropdown list or leave set as **Default**. Options are **Default**, **512** or **4096**. |
| **Mode** | Select the drive type from the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Raw filesize** | Enter the size of the file in GiB. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. | 
{{< /expand >}}

### Add Device Type PCI Passthrough Device
Select **PCI Passthrough Device** in the **Add** device screen **Device Type** to configure the PCI passthrough device and boot order.
{{< expand "Click Here for More Information" "v" >}}

{{< hint warning >}}
Depending upon the type of device installed in your system, you may see a warning: PCI device does not have a reset mechanism defined. You may experience inconsistent or degraded behavior when starting or stopping the VM.
<br>Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

![VMAddDevicePCIpass](/images/SCALE/22.12/VMAddDevicePCIpass.png "Devices Add PCI Passthrough") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **PCI Passthrough Device** | Enter or select the device from the dropdown list of options. Enter as (bus#/slot#/fcn#). |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /expand >}}

### Add Device Type USB Passthrough Device
Select **USB Passthrough Device** in the **Add** device screen **Device Type** to configure the USB passthrough device and boot order.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceUSBpass](/images/SCALE/22.12/VMAddDeviceUSBpass.png "Devices Add USB Passthrough") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Controller Type** | Required. Choose from **piix3-uhci**, **piix4-uhci**, **ehci**, **ich9-ehci1**, **vt82c686b-uhci**, **pci-ohci**, **nec-xhci**, **qemu-xhci**. |
| **Device** | Enter or select the device from the dropdown list of options. If **Specify custom** is chosen, enter the required **Vendor ID** and **Product ID**. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /expand >}}

### Add Device Type Display
Select **Display** in the **Add** device screen **Device Type** to configure a new display device and boot order.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceDisplay](/images/SCALE/22.12/VMAddDeviceDisplay.png "Devices Add Display") 

| Field | Description |
|-------|-------------|
| **Type** | Select the device type from the dropdown list. **Display** is the default setting. |
| **Port** | Enter the port number. You can assign **0**, leave empty for TrueNAS to assign a port when the VM is started, or set to a fixed preferred port number. |
| **Resolution** | Select a screen resolution to use for VNC sessions. |
| **Bind** | Select an IP address to use for VNC sessions or use the default **0.0.0.0**. |
| **Password** | Enter a VNC password of no more than eight characters in length to automatically pass to the VNC session. |
| **Display Type** | Select the display type from the dropdown list. Options are **VNC** or **SPICE**. |
| **Web Interface** | Select to enable connecting to the VNC web interface. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /expand >}}

{{< taglist tag="scalevm" limit="10" >}}
