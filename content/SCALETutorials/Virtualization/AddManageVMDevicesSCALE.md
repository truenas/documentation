---
title: "Adding and Managing VM Devices"
description: "Provides instructions on adding or managing devices used by VMs."
weight: 12
tags:
 - vm
 - gpu
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

## Managing Devices

After creating a VM, the next step is to add virtual devices for that VM.
Using the Create Virtual Machine wizard configures at least one disk, NIC, and the display as part of the process.
To add devices, from the **Virtual Machines** screen, click anywhere on a VM entry to expand it and show the options for the VM.

Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the **Devices** screen for the VM.
From this screen, you can edit, add, or delete devices.
Click the <span class="material-icons">more_vert</span> icon at the right of each listed device to see device options.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Options" id="VM Options" >}}

The devices for the VM display as a list.

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.
* With a **Display** device, remote clients can connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
  SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).

Before adding, editing, or deleting a VM device, stop the VM if it is running.
Click the **State** toggle to stop or restart a VM, or use the **Stop** and **Restart** buttons.

### Editing a Device

Select **Edit** to open the **Edit Device** screen.
You can change the type of virtual hard disk, the storage volume to use, or change the device boot order.

To edit a VM device:

1. Stop the VM if it is running, then click **Devices** to open the list of devices for the selected VM.
2. Click on the <span class="material-icons">more_vert</span> icon at the right of the listed device you want to edit, then select **Edit** to open the **Edit Device** screen.

   {{< trueimage src="/images/SCALE/Virtualization/EditDeviceDiskScreen.png" alt="Edit Device VM Disk" id="Edit Device VM Disk" >}}

3. Select the path to the zvol created when setting up the VM on the **Zvol** dropdown list.
4. Select the type of hard disk emulation from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
5. (Optional) Specify the disk sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** byte values from the dropdown list.
   If not set, the sector size uses the ZFS volume values.
6. Specify the boot order or priority level in **Device Order** to move this device up or down in the sequence.
   The lower the number the higher the priority in the boot sequence.
7. Click **Save**.
8. Restart the VM.

### Deleting a Disk Device

Deleting a device removes it from the list of available devices for the selected VM.

To delete a VM device:

1. Stop the VM if it is running, then click **Devices** to open the list of devices for the selected VM.
2. Click on the <span class="material-icons">more_vert</span> icon at the right of the listed device you want to edit, then select **Delete**.
   The **Delete Virtual Machine** dialog opens.

   {{< trueimage src="/images/SCALE/Virtualization/DeleteVirtualMachine.png" alt="Delete Virtual Machine" id="Delete Virtual Machine" >}}

3. Select **Delete zvol device** to confirm you want to delete the zvol device.
   Select **Force Delete** if you want the system to force the deletion of the zvol device, even if other devices or services are using or affiliated with the zvol device.
4. Click **Delete Device**.

### Changing the Device Order

1. Stop the VM if it is running, then click **Devices** to open the list of devices for the selected VM
2. Click **Edit**.
3. Enter the number that represents where in the boot sequence you want this device to boot in the **Devices Order** field.
   The lower the number, the higher the device is in the boot sequence.
4. Click **Save**.
5. Restart the VM.

### Adding a CD-ROM Device

Select **CD-ROM** as the **Device Type** on the **Add Device** screen and set a boot order.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **CD-ROM** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceCDROM.png" alt="Devices Add CD-ROM Type" id="Devices Add CD-ROM Type" >}}

3. Specify the mount path.
   Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** and at the pool and dataset levels to expand the directory tree. Select the path to the CD-ROM device.
4. Specify the boot sequence in **Device Order**.
5. Click **Save**.
6. Restart the VM.

### Adding a NIC Device Type

Select **NIC** in the **Device Type** on the **Add Device** screen to add a network interface card for the VM to use.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **NIC** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceNIC.png" alt="Devices Add NIC" id="Devices Add NIC" >}}

3. Select the adapter type. Choose **Intel e82585(e1000)** for maximum compatibility with most operating systems.
   If the guest OS supports VirtIO paravirtualized network drivers, choose **VirtIO** for better performance.
4. Click **Generate** to assign a new random MAC address to replace the random default address, or enter your own custom address.
5. Select the physical interface you want to use from the **NIC To Attach** dropdown list.
6. (Optional) Select **Trust Guest Filters** to allow the virtual server to change its MAC address and join multicast groups.
   This is required for the IPv6 Neighbor Discovery Protocol (NDP).

   Setting this attribute has security risks.
   It allows the virtual server to change its MAC address and receive all frames delivered to this address.
   Determine your network setup needs before setting this attribute.
7. Click **Save**.
8. Restart the VM

### Add a Disk Device Type

Select **Disk** in **Device Type** on the **Add Device** screen to configure a new disk location, drive type and disk sector size, and boot order.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **Disk** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisk.png" alt="Devices Add Dik" id="Devices Add Disk" >}}

4. Select the path to the zvol you created when setting up the VM using the **Zvol** dropdown list.
5. Select the hard disk emulation type from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or **VirtIO** for better performance if the guest OS installed in the VM supports VirtIO disk devices.
6. Specify the sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** from the dropdown list to change it.
   If the sector size remains unset it uses the ZFS volume values.
7. Specify the boot sequence order for the disk device.
8. Click **Save**.
9. Restart the VM.

### Adding a PCI Passthrough Device

Select **PCI Passthrough Device** in the **Device Type** on the **Add Device** screen to configure the PCI passthrough device and boot order.
{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a warning: PCI device does not have a reset mechanism defined.
You may experience inconsistent or degraded behavior when starting or stopping the VM.
Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **PCI Passthrough Device** from the **Device Type** dropdown list.
3. Enter a value in **PCI Passthrough Device** using the format of bus#/slot#/fcn#.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDevicePCIpass.png" alt="Devices Add PCI Passthrough" id="Devices Add PCI Passthrough" >}}

4. Specify the boot sequence order for the PCI passthrough device.
5. Click **Save**.
6. Restart the VM.

### Adding a USB Passthrough Device

Select **USB Passthrough Device** as the **Device Type** on the **Add Device** screen to configure the USB passthrough device, and set a boot order.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **USB Passthrough Device** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceUSBpass.png" alt="Devices Add USB Passthrough" id="Devices Add USB Passthrough" >}}

3. Select the **Controller Type** from the dropdown list.
4. Select the hub controller type from the **Device** dropdown list.
   If the type is not listed, select **Specify custom**, then enter the **Vendor ID** and **Product ID**.
5. Specify the boot sequence order.
6. Click **Save**.
7. Restart the VM.

### Adding a Display Device

Select **Display** as **Device Type** on the **Add Device** screen to configure a new display device.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **Display** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisplay.png" alt="Devices Add Display" id="Devices Add Display" >}}

3. Enter a fixed port number in **Port**.
   To allow TrueNAS to assign the port after restarting the VM, set the value to zero (leave the field empty).
4. Specify the display session settings:
   a. Select the screen resolution to use for the display from the **Resolution** dropdown.
   b. Select an IP address for the display device to use in **Bind**. The default is **0.0.0.0**.
   c. Enter a unique password for the display device to securely access the VM.
5. Select **Web Interface** to allow access to the VNC web interface.
6. Click **Save**.
7. Restart the VM.

Display devices have a 60-second inactivity timeout.
If the VM display session appears unresponsive, try refreshing the browser tab.
