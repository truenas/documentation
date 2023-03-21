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

After creating the VM, the next step is to add virtual devices for that VM.

Go to **Virtualization** > **Virtual Machines** and locate the name of the VM you want to modify. Click anywhere on a VM entry on the **Virtual Machines** widget to expand it and show the options for the VM.

Click the <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>**Devices** button to view the devices associated with the VM.

![VMRunningOptionsSCALE](/images/SCALE/22.12/VMRunningOptionsSCALE.png "VM Listing Expanded")

The devices for the VM display as a list.

![VMDetailsDevicesSCALE](/images/SCALE/22.12/VMDetailsDevicesSCALE.png "VM Devices")

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

The  <span class="material-icons">more_vert</span> vertical ellipsis icon displayed on the right side of each listed device provides additional options. These include **Edit**, **Delete** and **Details**.

## Device Actions

**Edit** opens the **Edit *type* Device** screen where *type* is the device type selected. Settings displayed vary based on the type of device set when at device creation, and are the same as those displayed on the **[Add Device](#devices-add-screens)** screen except for the **Device Type** field that only displays on the Add Device screens.

### Edit *type* Device
{{< expand "Click Here for More Information" "v" >}}
To edit a VM device:
1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. 
4. Click on the <span class="material-icons">more_vert</span> vertical ellipsis icon displayed on the right side of the listed device you want to edit. Select **Edit**. The **Edit Device** screen displays.

![EditDeviceVMDiskSCALE](/images/SCALE/22.12/EditDeviceVMDiskSCALE.png "Edit Device VM Disk")

5. Select the path to the zvol you created when setting up the VM using the **Zvol** dropdown list.
6. **Mode** offers two choices of hard disk emulation. Select **AHCI** for better software compatibility. Or, select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
7. **Disk Sector Size** defines a sector size in bytes. Leave this set to **Default**. The sector size remains unset and uses the ZFS volume values. To change this sector size, use the dropdown list. Options are **512** and **4096** byte values. 
8. The **Device Order** field is used to assign a priority level for the boot sequence for this device. The lower the number the higher the priority in the boot sequence. You can change this number to move a device up or down in the boot sequence.
9. Click **Save** to retain your changes, click on the X icon to close the screen and return to the VM device listing.
10. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Delete Device
{{< expand "Click Here for More Information" "v" >}}
To delete a VM device:
1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. 
4. Click on the <span class="material-icons">more_vert</span> vertical ellipsis icon displayed on the right side of the listed device you want to edit (In this example we are editing the **Disk** device). Select **Delete**. The **Delete** screen displays. In this example, we are deleting a disk device.

![DeleteDeviceVMDiskSCALE](/images/SCALE/22.12/DeleteDeviceVMDiskSCALE.png "Delete Device VM Disk")

5. The **Delete zvol device** is not selected by default. Select this checkbox to confirm you want to delete the zvol device. The **Force Delete** checkbox is not selected by default. Select this checkbox if you want the system to force the deletion of the zvol device even if there are other devices or services in use or affiliated with the zvol device.
6. Click **Delete Device** to proceed with the device removal. Click **Cancel** to return to the device listing without saving changes.
{{< /expand >}}

### Device Details
{{< expand "Click Here for More Information" "v" >}}

**Details** displays an information dialog for the selected device. Click **Close** to remove the dialog box and return to the device listing.
{{< /expand >}}

### Change Device Order
To change the device order the VM follows for the device during boot-up, use the **Edit** device process outlined above. The lower the number, the earlier the device is placed in the boot process. 
Enter the number and click **Save**.

## Device Add Screens

The **Add** button on the **Devices** screen opens the **Add Device** configuration screen. Settings change based on the selection in **Device Type**. Configure the following based on your needs:

Select **[CD-ROM](#add-device-type-cd-rom)** to configure a new CD-ROM location and the boot order for that device.

Select **[NIC](#add-device-type-nic)** to configure a new network adapter and the boot order for that device.

Select **[Disk](#add-device-type-disk)** to configure a new disk location, drive type and sector size, and the boot order for that device.

Select **[Raw File](#add-device-type-raw-file)** to configure a new file location and file size, the disk sector and mode, and the boot order for that device.

Select **[PCI Passthrough Device](#add-device-type-pci-passthrough-device)** to select a PCI Passthrough device from the dropdown list and the boot order for that device.

Select **[USB Passthrough Device](#add-device-type-usb-passthrough-device)** to select a USB Passthrough device from the dropdown list and the boot order for that device.

Select **[Display](#add-device-type-display)** to configure a new display device and the boot order for that device.

### Add Device Type CD-ROM
Select **CD-ROM** in the **Add** device screen **Device Type** to configure the device settings and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.

![VMAddDeviceCDROM](/images/SCALE/22.12/VMAddDeviceCDROM.png "Devices Add CD-ROM Type")

5. In the **Type** field, select **CD-ROM** from the dropdown list.
6. Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** and at the pool and dataset levels to expand the directory tree. Select the path to the CD-ROM device, which displays in the field above the tree.
7. Specify the boot sequence order for the CD-ROM device by typing a value (such as *1003*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence.
8. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing.
9. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Add Device Type NIC
Select **NIC** in the **Add** device screen **Device Type** to configure network interface card settings and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.

![VMAddDeviceNIC](/images/SCALE/22.12/VMAddDeviceNIC.png "Devices Add NIC") 

5. In the **Type** field, select **NIC** from the dropdown list.
6. **Adapter Type** is a required field. Choose **Intel e82585(e1000)** for maximum compatibility with most operating systems. If the guest OS supports VirtIO paravirtualized network drivers, choose **VirtIO** for better performance. 
7. A random MAC address displays by default in the **MAC Address** field. Click the **Generate** button to assign a new random address. Enter your own custom address if you do not want to use a generated address.
8. Use the dropdown list in the **NIC To Attach** field to select the physical interface you want the VM to use.
9. The default setting for **Trust Guest Filters** is not enabled. Setting this attribute allows the virtual server to change its MAC address and join multicast groups, which is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP). Setting this attribute has security risks, because it allows the virtual server to change its MAC address, and so receive all frames delivered to this address. Determine your network setup needs before setting this attribute.
10. Specify the boot sequence order for the NIC device by typing a value (such as *1002*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence.
11. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing. 
12. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Add Device Type Disk
Select **Disk** in the **Add** device screen **Device Type** to configure a new disk location, drive type and disk sector size, and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.

![VMAddDeviceDisk](/images/SCALE/22.12/VMAddDeviceDisk.png "Devices Add Disk") 

5. In the **Type** field, select **Disk** from the dropdown list.
6. Select the path to the zvol you created when setting up the VM using the **Zvol** dropdown list.
7. **Mode** offers two choices of hard disk emulation. Select **AHCI** for better software compatibility. Or, select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
8. **Disk Sector Size** defines a sector size in bytes. Leave this set to **Default**. The sector size remains unset and uses the ZFS volume values. To change this sector size, use the dropdown list. Options are **512** and **4096** byte values. 
9. Specify the boot sequence order for the disk device by typing a value (such as *1002*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence.
10. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing.
11. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Add Device Type Raw File
Select **Raw File** in the **Add** device screen **Device Type** to configure the location and size of the file, disk sector size and type, and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.

![VMAddDeviceRawFile](/images/SCALE/22.12/VMAddDeviceRawFile.png "Devices Add Raw File")

5. In the **Type** field, select **Raw File** from the dropdown list.
6. Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** and at the pool and dataset levels to expand the directory tree. Select the path to the raw file device, which displays in the field above the tree.
7. **Disk Sector Size** defines a sector size in bytes. Leave this set to **Default**. The sector size remains unset and uses the ZFS volume values. To change this sector size, use the dropdown list. Options are **512** and **4096** byte values. 
8. **Mode** offers two choices of hard disk emulation. Select **AHCI** for better software compatibility. Or, select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
9. Enter a file size for the raw file defined in gigabytes (GiB) in **Raw Filesize**. 
10. Specify the boot sequence order for the raw file device by typing a value (such as *1003*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence. 
11. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing.
12. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Add Device Type PCI Passthrough Device
Select **PCI Passthrough Device** in the **Add** device screen **Device Type** to configure the PCI passthrough device and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.
5. In the **Type** field, select **PCI Passthrough Device** from the dropdown list.

{{< hint warning >}}
Depending upon the type of device installed in your system, you may see a warning: PCI device does not have a reset mechanism defined. You may experience inconsistent or degraded behavior when starting or stopping the VM.
<br>Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

![VMAddDevicePCIpass](/images/SCALE/22.12/VMAddDevicePCIpass.png "Devices Add PCI Passthrough") 

6. To define a PCI passthrough device, enter a value in **PCI Passthrough Device** using the format of (bus#/slot#/fcn#). 
7. Specify the boot sequence order for the PCI passthrough device by typing a value (such as *1003*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence. 
8. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing.
9. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Add Device Type USB Passthrough Device
Select **USB Passthrough Device** in the **Add** device screen **Device Type** to configure the USB passthrough device and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.
5. In the **Type** field, select **USB Passthrough Device** from the dropdown list.

![VMAddDeviceUSBpass](/images/SCALE/22.12/VMAddDeviceUSBpass.png "Devices Add USB Passthrough") 

6. The **Controller Type** field is required. Use the dropdown list to choose from **piix3-uhci**, **piix4-uhci**, **ehci**, **ich9-ehci1**, **vt82c686b-uhci**, **pci-ohci**, **nec-xhci**, **qemu-xhci**.
7. **Device** is a required field. Use the dropdown list to select the appropriate hub controller. If **Specify custom** is chosen, enter the required **Vendor ID** and **Product ID**. 
8. Specify the boot sequence order for the USB passthrough device by typing a value (such as *1003*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence. 
9. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing.
10. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

### Add Device Type Display
Select **Display** in the **Add** device screen **Device Type** to configure a new display device and boot order.
{{< expand "Click Here for More Information" "v" >}}

1. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to stop the VM if it is running.
2. Click on the name of the VM to expand the menu and view additional options. 
3. Click on **Devices**. The list of devices for this VM displays.
4. Click the **Add** button at the top right of the screen. The **Add Device** screen displays.
5. In the **Type** field, select **Display** from the dropdown list.

![VMAddDeviceDisplay](/images/SCALE/22.12/VMAddDeviceDisplay.png "Devices Add Display") 

6. In the **Port** field, either enter a fixed port number, or set the value to zero (leave the field empty) for TrueNAS to assign a port when the VM is started. 
7. Use the dropdown list in **Resolution** to select a screen resolution to use for VNC sessions.
8. In **Bind**, select an IP address to use for the VNC sessions. The default is **0.0.0.0**.
9. If you choose to enter a password for VNC sessions, specify it here. The password can be no more than eight characters in length.
10. **Display Type** is a required field. Use the dropdown list to select either **VNC** or **SPICE**. 
11. The checkbox for **Web Interface** is enabled by default. Leave it selected to allow access to the VNC web interface. 
12. Specify the boot sequence order for the display device by typing a value (such as *1003*) in the **Device Order** field. The lower the number, the higher the device is in the boot sequence. 
13. Click **Save** to retain your changes, or click on the X icon to close the screen and return to the VM device listing.
14. Go to **Virtualization** > **Virtual Machines** and click on the **State** toggle button to start the VM.
{{< /expand >}}

{{< taglist tag="scalevm" limit="10" >}}
