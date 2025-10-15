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

## Managing Devices

{{< include file="/static/includes/ManagingVMDevices.md" >}}

### Before You Begin

Before adding, editing, or deleting a VM device, stop the VM if it is running.
Click the **Running** toggle to stop a VM, or click on the VM row and use the **Stop** button.
Clicking the **Running** toggle for a stopped VM restarts it, or you can click on the VM row to expand it, and then click on the **Restart** button.

To access the devices for a VM, click on the VM row on the **Virtual Machines** screen to expand the VM, then click on **Devices** to open the **Devices** screen showing the devices for the selected VM.

Click **Add** to create a new device>
To edit an existing device, click on the <span class="material-icons">more_vert</span> at the right of each device row, click **Edit** to open the **Edit Device** screen.
Click **Delete** to open a delete confirmation dialog. t

### Editing a Device

After selecting the VM row on the **Virtual Machines** list and clicking on **Devices** to open the **Devices** screen, the devices configured for that selected VM show.
Devices added when you create the VM show by default. You can add additional or edit existing devices.

Click on the <span class="material-icons">more_vert</span> at the right of the device row.
Options for each device show. A disk device shows four options: **Edit**, **Delete**, **Details**, and **Export to Image**.
Other device types do not include the export option.

Click *Edit** to open the **Edit Device** screen.
The screen settings change based on the device type selected.
For example, when editing a disk (example provided below), you can change the type of virtual hard disk, the storage volume to use, or change the boot order for the device.

Stop the VM on the **Virtual Machines** screen, click on **Devices** to open the **Devices** screen for that VM, and then click **Edit**.
The procedure below describes editing a disk device.
Steps below are optional. Change them based on your use case.

{{< trueimage src="/images/SCALE/Virtualization/EditDeviceDiskScreen.png" alt="Edit Device VM Disk" id="Edit Device VM Disk" >}}

1. (Optional) Select the zvol created when setting up the VM on the **Zvol** dropdown list. The field populates with the path to the selected zvol.
2. (Optional) Select the type of hard disk emulation from the **Mode** dropdown list. The options are **AHCI** and **VirtIO**.
   Select **AHCI** for better software compatibility, or **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
3. (Optional) Specify the disk sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** if you want to leave the sector size unset and use the ZFS volume value.
   Select either **512** or **4096** byte values from the dropdown list to specify a logical and physical sector size.
4. (Optional) Enter a number that reflects the boot order or priority level in **Device Order**.
   Setting this value to **1000** puts the disk device in the boot order first position.
   When first installing or changing an OS added to the **CD-ROM** device, the CD-ROM is assigned **1000** to boot up from and install an OS.
   After installing the OS, change the boot order for the CD-ROM to a lower boot order so you don't keep booting into an installer and to run the OS in the VM.
   The lower the number, the higher the priority in the boot sequence.
5. Click **Save**.
6. Click on the **Virtual Machines** breadcrumb at the top of the screen to return to the **Virtual Machines** screen. Click on the VM to expand it and restart it.

{{< expand "To edit display type or bind address after creating a VM" "v" >}}
Go to **Virtual Machines**, locate the VM you want to modify, and click on it to expand it.
Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the **Devices** screen associated with the VM.
Click the <span class="material-icons">more_vert</span> icon at the right of the display device and click on **Edit** to open the **Edit Device** screen for that display device.
Select the IP address or other option on the **Bind** dropdown.

You can assign a port number to your display device or use the default port number associated with the device.

You can add a second display device to have a VNC and SPICE display associated with the VM, but only one display device can be active at one time.
Adding a second display device assigns a different default port number to the second display device.
{{< /expand >}}

### Deleting a Device

Deleting a device removes it from the list of available devices for the selected VM.

To delete a device:

1. Stop the VM if it is running, then click **Devices** to open the **Devices** screen showing the devices for the selected VM.
2. Click on the <span class="material-icons">more_vert</span> icon to the right of the device and then **Delete** to open the delete confirmation dialog for that display device.
   The dialog shows the name or identifier for the selected device. The example below shows *undefined 8* as the name.

   {{< trueimage src="/images/SCALE/Virtualization/DeleteVMDevice.png" alt="Delete Virtual Machine Device" id="Delete Virtual Machine Device" >}}

3. Select **Force Delete** to force the system to delete the device (for example, device is a CD-ROM).
   When deleting a disk, it forces the system to delete the zvol even if other devices or services are using it or are affiliated with the zvol device.
4. Click **Delete Device**.

### Changing the Device Order

Changing the device order moves the device up or down in the boot order when the VM or system is restarted.
A VM attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click on the <span class="material-icons">more_vert</span> at the right of the device row, then click on **Edit** to open the **Edit Device** screen.
2. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence. **1000** is the first position in the boot order.
3. Click **Save**.
4. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a CD-ROM Device

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **CD-ROM** on the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceCDROM.png" alt="Devices Add CD-ROM Type" id="Devices Add CD-ROM Type" >}}

2. Enter or browse to select the mount path to the CD-ROM device.
   Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** to expand or collapse the directory tree.
3. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
4. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
5. Click **Save**.
6. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a NIC Device Type

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** to open the **Add Device** screen.
2. Select **NIC** on the **Device Type** dropdown list to show the network interface card settings.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceNIC.png" alt="Devices Add NIC" id="Devices Add NIC" >}}

3. Select the adapter type from the **Adapter Type** dropdown list.
   Choose **Intel e82585 (e1000)** for maximum compatibility with most operating systems.
   If the guest OS supports VirtIO paravirtualized network drivers, choose **VirtIO** for better performance.
4. Click **Generate** to have TrueNAS populate **MAC Address** with a new random MAC address to replace the default random address, or enter your own custom address.
5. Select a physical interface on your TrueNAS system from the **NIC To Attach** dropdown list.
6. (Optional) Select **Trust Guest Filters** to allow the virtual server to change its MAC address and join multicast groups.
   This is required for the IPv6 Neighbor Discovery Protocol (NDP).

   Setting this attribute has security risks because it allows the virtual server to change its MAC address and receive all frames delivered to this address. Determine your network setup needs before setting this attribute.
7. Click **Save**.
8. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Add a Disk Device

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **Disk** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisk.png" alt="Devices Add Disk" id="Devices Add Disk" >}}

2. Select the path to the zvol created when setting up the VM on the **Zvol** dropdown list.
3. Select the hard disk emulation type from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or **VirtIO** for better performance if the guest OS installed in the VM supports VirtIO disk devices.
4. Select the sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** from the dropdown list.
   **Default** uses the ZFS volume values.
5. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
7. Click **Save**.
4. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Exporting a Disk to an Image

You can use this function to create a VM disk image that you can then specify later as a zvol for use by a VM.

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click on the <span class="material-icons">more_vert</span> icon to the right of the disk device and then click **Export to Image** to open the **Export Disk to Image** window.

   {{< trueimage src="/images/SCALE/Virtualization/ExportDiskToImageWindow.png" alt="Export Disk to Image" id="Export Disk to Image" >}}

2. Browse to select the dataset/directory using the file browser, click on the dataset/directory to select it, and populate the mount path field.
3. Select the image format from the **Image Format** dropdown list. Selecting the format adds the extension to the image name in **Image Name**.
4. Click **Export**. The disk is saved as an image in the location specified in **Destination Directory**.

### Adding a PCI Passthrough Device

{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a warning: PCI device does not have a reset mechanism defined.
You may experience inconsistent or degraded behavior when starting or stopping the VM.
Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **PCI Passthrough Device** from the **Device Type** dropdown list.
2. Enter a value in **PCI Passthrough Device** using the format of *bus#/slot#/fcn#*.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDevicePCIpass.png" alt="Devices Add PCI Passthrough" id="Devices Add PCI Passthrough" >}}

3. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
4. Click **Save**.
5. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a USB Passthrough Device

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **USB Passthrough Device** from the **Device Type** dropdown list to configure the USB passthrough device.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceUSBpass.png" alt="Devices Add USB Passthrough" id="Devices Add USB Passthrough" >}}

2. Select the **Controller Type** from the dropdown list.
3. Select the hub controller type from the **Device** dropdown list.
   If the type is not listed, select **Specify custom**, then enter the **Vendor ID** and **Product ID**.
4. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
5. Click **Save**.
6. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a Display Device

Display devices have a 60-second inactivity timeout.
If the VM display session appears unresponsive, try refreshing the browser tab.

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **Display** from the **Device Type** dropdown list to configure a new display device.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisplay.png" alt="Devices Add Display" id="Devices Add Display" >}}

2. Select the **Display Device** option from the dropdown list.
   TrueNAS allows a VM to have two different display devices: a VNC display device added through the VM creation wizard if the **Enable Display (VNC)** option is selected, and a second SPICE display device added to the VM using the **Add Device** screen with **Device Type** set to display.

   If you created the VM without the display, the **Display Type** dropdown list shows the **VNC** and **SPICE** options.
   Select the display type on the dropdown list. (VNC is recommended).
   To add a second display device, repeat this procedure and select **SPICE** (the only option for the second display device).
3. Enter a fixed port number in **Port**.
   To allow TrueNAS to assign the port after restarting the VM, set the value to zero (leave the field empty).
4. Specify the display session settings:
   a. Select the screen resolution to use for the display from the **Resolution** dropdown.
   b. Select an IP address for the display device to use in **Bind**. The default is **0.0.0.0**.
   c. Enter a unique password for the display device to securely access the VM.
5. Select **Web Interface** to allow access to the VNC web interface.
6. Click **Save**.
7. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.
