---
title: "Adding and Managing VM Devices"
description: "This article provides instructions on adding or managing devices used by VMs."
weight: 12
alias: /scale/scaleuireference/virtualization/creatingmanagingvmsscale/
tags:
 - scalevm
 - scalegpu
---

{{< toc >}}

## Adding and Removing Devices

After creating the VM, the next step is to add virtual devices for that VM.

Go to **Virtualization > Virtual Machines** and locate the name of the VM you want to modify. Click anywhere on a VM entry on the **Virtual Machines** widget to expand it and show the options for the VM.

Click the <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>**Devices** to open the devices screen associated with the VM.

![VMRunningOptionsSCALE](/images/SCALE/22.12/VMRunningOptionsSCALE.png "VM Listing Expanded")

The devices for the VM display as a list.

![VMDetailsDevicesSCALE](/images/SCALE/22.12/VMDetailsDevicesSCALE.png "VM Devices")

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

Click the <span class="material-icons">more_vert</span> vertical ellipsis icon displayed on the right side of each listed device to see additional options.

### Editing a Device
Select **Edit** to open the **Edit *type* Device** screen where *type* is the device type selected. You you can change the type of virtual hard disk, the storage volume to use, or change the device boot order.
{{< expand "Click Here for More Information" "v" >}}
To edit a VM device:
1. Stop the VM if it is running. Go to **Virtualization > Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and then click **Devices**. 
3. Click on the <span class="material-icons">more_vert</span> vertical ellipsis icon displayed on the right side of the listed device you want to edit, and select **Edit**. The **Edit Device** screen opens.
   
   ![EditDeviceVMDiskSCALE](/images/SCALE/22.12/EditDeviceVMDiskSCALE.png "Edit Device VM Disk")
   
4. Select the path to the zvol you created when setting up the VM on the **Zvol** dropdown list.
5. Select the type of hard disk emulation from the **Mode** dropdown list. 
   Select **AHCI** for better software compatibility, or select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
6. (Optional) Specify the disk sector size in bytes in **Disk Sector Size**. 
   Leave set to **Default** or select either **512** or **4096** byte values from the dropdown list. 
   If unset, the sector size uses the ZFS volume values. 
7. Specify the boot order or priority level in **Device Order** to move this device up or or down in the sequence. 
   The lower the number the higher the priority in the boot sequence. 
8. Click **Save**.

You can now go to **Virtualization > Virtual Machines** and click on the **State** toggle button to restart the VM.
{{< /expand >}}

### Deleting a Disk Device
Deleting a device removes it from the list of available devices for the selected VM.
{{< expand "Click Here for More Information" "v" >}}
To delete a VM device:
1. Stop the VM you change. Go to **Virtualization > Virtual Machines**, click on the **State** toggle button.
2. Click on the name of the VM to expand it and show the additional options. 
3. Click **Devices** to open the **Devices** screen. 
4. Click on the <span class="material-icons">more_vert</span> icon at the right side of the listed device you want to edit, and click **Delete**. The **Delete** screen displays. 

![DeleteDeviceVMDiskSCALE](/images/SCALE/22.12/DeleteDeviceVMDiskSCALE.png "Delete Device VM Disk")

5. Select the **Delete zvol device** to confirm you want to delete the zvol device. 
   Select **Force Delete** if you want the system to force the deletion of the zvol device even if there are other devices or services using or affiliated with the zvol device.
6. Click **Delete Device**. 
{{< /expand >}}

### Changing the Device Order
To change the boot-up order for a device, use **Edit** and enter the number for where you want the device, then click **Save**.

### Adding a CD-ROM Device

Add a device from the **Devices** screen for a selected VM. 
{{< expand "Click Here for More Information" "v" >}}
1. Stop the VM. Go to **Virtualization >Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and see additional options. 
3. Click on **Devices** to open the list of devices for the selected VM, then click **Add**. The **Add Device** screen opens.
   
   ![VMAddDeviceCDROM](/images/SCALE/22.12/VMAddDeviceCDROM.png "Devices Add CD-ROM Type")
   
4. Select the type of device you want to add from the **Type** dropdown list. For example, CD-ROM.
5. Specify the mount path. 
   Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** and at the pool and dataset levels to expand the directory tree. Select the path to the CD-ROM device.
6. Specify the boot sequence order for the CD-ROM device by typing a value (such as *1003*) in the **Device Order** field. 
   The lower the number, the higher the device is in the boot sequence.
7. Click **Save**.

You can now go to **Virtualization > Virtual Machines** and restart the VM.
{{< /expand >}}

### Adding a NIC Device Type
Select **NIC** in the **Add** device screen **Device Type** add a network interface card for the VM to use and the boot order.
{{< expand "Click Here for More Information" "v" >}}
1. Stop the VM. Go to **Virtualization > Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and see additional options. 
3. Click **Devices** to open the **Devices** screen for this VM, and click **Add** to open the **Add Device** screen.
   
   ![VMAddDeviceNIC](/images/SCALE/22.12/VMAddDeviceNIC.png "Devices Add NIC") 

4. Select **NIC** on the **Type** dropdown list.
5. Select the adaptor type. Choose **Intel e82585(e1000)** for maximum compatibility with most operating systems. 
   If the guest OS supports VirtIO paravirtualized network drivers, choose **VirtIO** for better performance. 
6. Click **Generate** to assign a new random MAC address to replace the random default address, or enter your own custom address.
7. Select the physical interface you want to use from the **NIC To Attach** dropdown list.
8. (Optional) Select **Trust Guest Filters** to allow the virtual server to change its MAC address and join multicast groups. 
   This is required for the IPv6 Neighbor Discovery Protocol (NDP). 
   
   Setting this attribute has security risks. 
   It allows the virtual server to change its MAC address and receive all frames delivered to this address. 
   Determine your network setup needs before setting this attribute.
9. Specify the boot sequence order for the NIC device.
10. Click **Save**. 
 You can now go to **Virtualization > Virtual Machines** and restart the VM.
{{< /expand >}}

### Add Device Type Disk
Select **Disk** in the **Add** device screen **Device Type** to configure a new disk location, drive type and disk sector size, and boot order.
{{< expand "Click Here for More Information" "v" >}}
1. Stop the VM. Go to **Virtualization > Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and see additional options. 
3. Click **Devices** to open the **Devices** screen for this VM, and click **Add** to open the **Add Device** screen.

![VMAddDeviceDisk](/images/SCALE/22.12/VMAddDeviceDisk.png "Devices Add Disk") 

4. Select **Disk** from the **Type** dropdown list.
5. Select the path to the zvol you created when setting up the VM using the **Zvol** dropdown list.
6. Select the hard disk emulation type from the **Mode** dropdown list. 
   Select **AHCI** for better software compatibility, or **VirtIO** for better performance if the guest OS installed in the VM supprots VirtIO disk devices.
7. Specify the sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** from the dropdown list to change it. 
   If the sector size remains unset it uses the ZFS volume values. 
8. Specify the boot sequence order for the disk device.
9. Click **Save**.

You can now go to **Virtualization > Virtual Machines** to restart the VM.
{{< /expand >}}

### Adding a PCI Passthrough Device
Select **PCI Passthrough Device** in the **Add** device screen **Device Type** to configure the PCI passthrough device and boot order.
{{< expand "Click Here for More Information" "v" >}}
1. Stop the VM. Go to **Virtualization > Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and see additional options. 
3. Click **Devices** to open the **Devices** screen with the list of devices for this VM, then click **Add**.
4. Select **PCI Passthrough Device** from the **Type** dropdown list, then enter a value in **PCI Passthrough Device** in the format of (bus#/slot#/fcn#).
   
   {{< hint warning >}}
   Depending upon the type of device installed in your system, you may see a warning: PCI device does not have a reset mechanism defined. 
   You may experience inconsistent or degraded behavior when starting or stopping the VM.
   Determine if you want to proceed with this action in such an instance.
   {{< /hint >}}
   
   ![VMAddDevicePCIpass](/images/SCALE/22.12/VMAddDevicePCIpass.png "Devices Add PCI Passthrough") 
   
5. Specify the boot sequence order for the PCI passthrough device. 
6. Click **Save**.

You can now go to **Virtualization > Virtual Machines** to restart the VM.
{{< /expand >}}

### Adding a USB Passthrough Device
Select **USB Passthrough Device** in the **Add** device screen **Device Type** to configure the USB passthrough device and boot order.
{{< expand "Click Here for More Information" "v" >}}
1. Stop the VM. Go to **Virtualization > Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and see additional options. 
3. Click **Devices** to open the **Devices** screen with the list of devices for this VM, then click **Add**.
4. In the **Type** field, select **USB Passthrough Device** from the dropdown list.
   
   ![VMAddDeviceUSBpass](/images/SCALE/22.12/VMAddDeviceUSBpass.png "Devices Add USB Passthrough") 

5. Select the **Controller Type** from the dropdown list. 
6. Select the hub controller type from the **Device** dropdown list. 
   If the type is not listed, select **Specify custom**, enter the **Vendor ID** and **Product ID**. 
7. Specify the boot sequence order. 
8. Click **Save**.

You can now go to **Virtualization > Virtual Machines** to restart the VM.
{{< /expand >}}

### Adding a Display Device
Select **Display** as **Device Type** on the **Add** device screen to configure a new display device and boot order.
{{< expand "Click Here for More Information" "v" >}}
1. Stop the VM. Go to **Virtualization > Virtual Machines** and click on the **State** toggle button to stop the VM.
2. Click on the name of the VM to expand it and see additional options. 
3. Click **Devices** to open the **Devices** screen with the list of devices for this VM, then click **Add**.
4. Select **Display** from the **Type** dropdown list.
   
   ![VMAddDeviceDisplay](/images/SCALE/22.12/VMAddDeviceDisplay.png "Devices Add Display") 

5. Enter a fixed port number in **Port**. 
   To allow TrueNAS to assign the port after restarting the VM, set the value to zero (leave the field empty). 
6. Specify the VNC session settings:
   a. Select the screen resolution to use for VNC sessions from the **Resolution** dropdown. 
   b. Select an IP address for VNC to use in **Bind**. The default is **0.0.0.0**.
   c. (Optional) Enter a password if you want to use for for VNC sessions. The password must not exceed eight characters in length.
7. Select either **VNC** or **SPICE** to use as the **Display Type**. 
8. Select **Web Interface** to allow access to the VNC web interface. 
9. Specify the boot sequence order for the display device. 
10. Click **Save**.

You can now go to **Virtualization > Virtual Machines** to restart the VM.
{{< /expand >}}

{{< taglist tag="scalevm" limit="10" >}}
