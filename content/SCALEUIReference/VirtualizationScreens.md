---
title: "Virtualization"
description: "Provides information on the screens and settings to add virtual machines (VMs) and devices to your TrueNAS system."
weight: 80
tags:
 - vm
 - gpu
 - storage provisioning
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

The **Virtual Machines** screen allows users to add, edit, or manage virtual machines (VMs) and VM devices.
The **No Virtual Machines** screen displays if there are no VMs configured on the system or if you delete all VMs on the system.

{{< trueimage src="/images/SCALE/Virtualization/AddVMNoVMs.png" alt="No Virtual Machines" id="No Virtual Machines" >}}

**Add Virtual Machines** and **Add** at the top right of the screen opens the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** wizard.

The screen displays a list of VMs configured on the TrueNAS system.
The **State** toggle displays and changes the state of the VM.
**Autostart**, when selected, automatically starts the VM if the system reboots, otherwise you must manually start the VM.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVM.png" alt="Virtual Machine Screen" id="Virtual Machine Screen" >}}

Click on a VM to expand it and open the [details screen](#virtual-machine-details-screen) with details on that VM and options for a VM.
Click **Start** to start the VM and show additional options.

## Create Virtual Machine Wizard Screens
The **Create Virtual Machine** configuration wizard displays all settings to set up a new virtual machine.

Use **Next** and **Back** to advance to the next or return to the previous screen to change a setting.
Use **Save** to close the wizard screens and add the new VM to the **Virtual Machines** screen.

### Operating System Screen
The **Operating System** settings specify the VM operating system type, the time the VM system clock uses, the boot method, and  display type.

{{< trueimage src="/images/SCALE/Virtualization/AddVMOperSys.png" alt="Operating System" id="Operating System" >}}

{{< expand "Operating System Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Guest Operating System** | Required. Select the VM operating system type from the dropdown list. Options are **Windows** which adds the **Enable Hyper-V Enlightenments** option. **Linux**, and **FreeBSD**. |
| **Enable Hyper-V Enlightenments** |Only displays when **Guest Operating System** is set to **Windows**. This emulates a Hyper-V-compatible hypervisor for the Windows guest operating system and makes some Hyper-V-specific features available. |
| **Name** | Required. Enter an alphanumeric name for the virtual machine. |
| **Description** | (Optional) Enter a description of your choosing. For example, the type of OS for the VM or the VM use. |
| **System Clock** | Select the method to use to set the system the VM from the dropdown list. Options are **Local** which uses the TrueNAS system clock setting, or **UTC** to use the Coordinated Universal Time clock. The default is **Local**. |
| **Boot Method** | Select the boot method option from the dropdown list. Options are **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Shutdown Timeout** | Enter the time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout entered expires. |
| **Start on Boot** | Select to start the VM when the system boots. Selected by default. |
| **Enable Display** | Enables a display (Virtual Network Computing) remote connection. Requires UEFI booting. Selected by default. |
| **Bind** | Displays when **Enable Display** is selected. Select an IP address to use for remote VNC sessions. Note that this setting only applies if you are using a VNC client other than the TrueNAS WebUI. |
| **Password** | Displays when **Enable Display** is selected. Enter a password for the VNC display to use to securely access the VM. |
{{< /truetable >}}
{{< /expand >}}

### CPU and Memory Screen
The **CPU and Memory** settings specify the CPU mode, model, and memory size. They also let you specify the number of virtual CPUs to allocate to the virtual machine, the number of cores per virtual CPU socket, and the number of threads per core.

{{< trueimage src="/images/SCALE/Virtualization/AddVMMemory.png" alt="CPU and Memory" id="CPU and Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

### Disks Screen
The **Disks** settings allow specifying how virtual disks are added. Options are to create a new zvol on an existing dataset for a disk image or use an existing zvol or file for the VM. You also specify the disk type, zvol location, and size.

{{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineDisks.png" alt="Disks" id="Disks" >}}

{{< expand "Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Create new disk image** | Select to create a new zvol on an existing dataset to use as a virtual hard drive for the VM. |
| **Use existing disk image** | Select to use an existing zvol or file for the VM. Displays the **Select Disk Type** and **Select Existing Zvol** dropdown list fields. |
| **Select Disk Type** | Displays after selecting **Use existing disk image**. Select the desired disk type. Options are **AHCI** or **VirtIO**. Select **AHCI** for Windows VMs. **VirtIO** requires a guest OS that supports VirtIO paravirtualized network drivers. |
| **Select Existing Zvol** | (Required) Displays after selecting **Use existing disk image**. Select an existing zvol from the dropdown list. |
| **Zvol Location** | (Required) Displays after selecting **Use existing disk image**. Select a dataset for the new zvol from the dropdown list of datasets on the system. |
| **Size** | (Required) Displays after selecting **Use existing disk image**. Allocate space for the new zvol. (Examples: 500 KiB, 500M, 2 TB). Units smaller than MiB are not allowed. |
{{< /truetable >}}
{{< /expand >}}

### Network Interface Screen
The **Network Interface** settings specify the network adapter type, mac address, and physical network interface card associated with the VM.

{{< trueimage src="/images/SCALE/Virtualization/AddVMNetwork.png" alt="Network Interface" id="Network Interface" >}}

{{< expand "Network Interface Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Adapter Type** | Select the adapter type from the dropdown list. Options are:<br><li>**Intel e82545 (e1000)** emulates the same Intel Ethernet card and provides compatibility with most operating systems.<br><li>**VirtIO** provides better performance when the operating system installed in the VM supports VirtIO para-virtualized network drivers.</li> |
| **Mac Address** | Enter the desired address into the field to override the randomized MAC address. |
| **Attach NIC** | Select the physical interface to associate with the VM from the dropdown list. |
| **Trust Guest Filters** | Select to enable and allow the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to yes has security risks because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. Disabled by default. |
{{< /truetable >}}
{{< /expand >}}

### Installation Media Screen
The **Installation Media** settings specify the operation system installation media image on a dataset or upload one from the local machine.

{{< trueimage src="/images/SCALE/Virtualization/AddVMInstallMedia.png" alt="Installation Media" id="Installation Media" >}}

{{< expand "Installation Media Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Choose Installation Media Image** | Enter the path or browse to the operating system installer image file. To collapse the browse tree click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt**. |
| **Upload New Image File** | Select to open the **Upload Image File** dialog. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Virtualization/CreateVMWInstallMediaUploadSCALE.png" alt="Upload Installation Media" id="Upload Installation Media" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **ISO save location** | Enter the path or browse to the location where you want to install the image file. |
| **Choose File** | Click to save the path populated in the **ISO save location** field. |
| **Upload** | Click to upload the file selected in the **ISO save location** field. |
{{< /truetable >}}
{{< /expand >}}

### GPU Screen
The **GPU** settings specify the graphic processing unit (GPU) for the VM. It also provides the option to hide the VM from the Microsoft Reserved Partition (MSR) on Windows systems.

{{< trueimage src="/images/SCALE/Virtualization/AddVMGPU.png" alt="GPU" id="GPU" >}}

{{< include file="/static/includes/VMGPUSettings.md" >}}

### Confirm Options Screen
The **Confirm Options** screen displays a summary of settings for the VM. It shows the number of CPUs, cores, threads, memory, name of the VM, and the disk size.

Click **Save** to add the VM to the **Virtual Machines** screen. Click **Back** to return to the previous screens to make changes.

## Virtual Machine Details Screen
Expand any VM on the **Virtual Machines** screen to show the details and options for a VM.
Details include the basic information on the number of virtual CPUs, cores, and threads, the amount of memory, boot load and system clock types, the display port number, and the shutdown timeout in seconds.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Details" id="VM Details" >}}

Starting the VM shows additional options for the VM.

{{< expand "VM Options" "v" >}}
{{< truetable >}}
| Operation | Icon | Description |
|-----------|------|-------------|
| **Start** | <span class="iconify" data-icon="bxs:right-arrow"></span> | Starts a VM. The toggle turns blue when the VM switches to running. Toggles to **Stop**. Clicking **Start** shows the **Restart**,**Power Off**, **Display**, and **Serial Shell** buttons. |
| **Restart** | <span class="material-icons">replay</span> | Restarts the VM. |
| **Power Off** | <span class="material-icons">power_settings_new</span> | Powers off and halts the VM, similar to turning off a computer power switch.  |
| **Stop** | <i class="material-icons" aria-hidden="true" title="Stop">stop</i> | Stops a running VM. Because a virtual machine does not always respond well to **STOP** or the command might time out if the VM does not have an OS. Use **Power Off** instead. |
| **Edit** | <span class="material-icons">mode_edit</span> | Opens the **[Edit Virtual Machine](#edit-virtual-machine-screen)** that displays editable VM settings. You cannot edit a VM while it is running. Stop the VM and then you can edit the properties and settings. |
| **Delete** | <i class="material-icons" aria-hidden="true" title="Delete">delete</i> | Deletes a VM. Opens a [delete dialog](#delete-virtual-machine-dialog) that allows you to remove the VM from your system. You cannot delete a virtual machine that is running. You must first stop the VM and then you can delete it. |
| **Devices** | <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> | Opens the **[Virtual Machine Devices](#devices-screens)** screen for the selected VM. Shows a list of configured devices for the VM. By default, all VMs show the **Disks**, **NIC**, and **Display** devices. |
| **Clone** | <span class="iconify" data-icon="cil:clone"></span> | Makes an exact copy or *clone* of the VM. Opens the **[Clone](#clone-virtual-machine-window)** dialog that allows you to clone the selected VM. Enter a name for the cloned VM. Naming the clone VM is optional. The cloned VM displays on the Virtual Machines list with the extension **_clone0**. If you clone the same VM again the extension for the second clone is **clone1**. |
| **Display** | <i class="material-icons" aria-hidden="true" title="display">settings_ethernet</i> | Opens the **SPICE** login screen in a browser window and allows you to connect to the remote desktop. |
| **Serial Shell** | <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> | Opens the TrueNAS **VM Serial Shell** screen. |
| **Download Logs** | <span class="material-icons">content_paste</span> | Downloads a <file>.log </file> file to the system. |
{{< /truetable >}}
{{< /expand >}}

### Delete Virtual Machine Dialog
**Delete** removes the VM configuration from your system.

{{< trueimage src="/images/SCALE/Virtualization/DeleteVirtualMachine.png" alt="Delete Virtual Machine" id="Delete Virtual Machine" >}}

{{< expand "Delete Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Delete Virtual Machine Data** | Select to remove the data associated with this virtual machine. Deleting a VM results in data loss if the data is not backed up. Leave unselected to keep the VM data intact. |
| **Force Delete**| Select to ignore the virtual machine status during the delete operation. Leave unselected to prevent deleting the VM when it is still active or has an undefined state. |
| **Enter *vmname* below to confirm** | Enter the name of the VM to confirm you want to delete the selected VM. |
{{< /truetable >}}
{{< /expand >}}

### Clone Virtual Machine Window
The **Clone** dialog allows you to create an exact duplicate of the VM using the name entered.

{{< trueimage src="/images/SCALE/Virtualization/CloneVMDialog.png" alt="Clone Virtual Machine" id="Clone Virtual Machine" >}}

Naming the clone VM is optional. The cloned VM displays on the **Virtual Machines** list with the extension **_clone0**.
If you clone the same VM again the extension for the second clone is **clone1**.

### VM Serial Shell Screen
Click **Serial Shell** to open the **VM Serial Shell** screen where you can enter commands for the selected virtual machine.

{{< trueimage src="/images/SCALE/Virtualization/VMSerialShellScreen.png" alt="Serial Shell" id="Serial Shell" >}}

Click **Virtual Machines** in the header to return to the **Virtual Machine** screen.

## Edit Virtual Machine Screen
The **Edit VM** screen settings are a subset of those found on the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** screens.
It only includes the general settings found on the wizard **Operating System** screen, **CPU and Memory**, and **GPUs** screen settings.
To edit disks, network, or display settings, click [**Devices**](#virtual-machine-details-screen) on the expanded view of the VM to open the [**Devices**](#devices-screens) screen.

### Edit General Settings
The **Edit** screen **General Settings** specify the basic settings for the VM. Unlike the **Create Virtual Machine** wizard, you cannot change the **Enable** or **Start on Boot** status or change the display type or bind address for a saved VM from this screen.

{{< trueimage src="/images/SCALE/Virtualization/EditVMGeneralSettings.png" alt="Edit General Settings" id="Edit General Settings" >}}

{{< expand "General Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the virtual machine. |
| **Description** | Enter a description (optional). |
| **System Clock** | Select the VM system time from the dropdown list. Options are **Local** or **UTC**. The default is **Local**. |
| **Boot Method** | Select the boot method option from the dropdown list. Select **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Shutdown Timeout** | Enter the time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout entered expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable Hyper-V Enlightenments** | Shows for VMs set for Windows OS. KVM implements Hyper-V Enlightenments for Windows guests. These features make Windows think they are running on top of a Hyper-V-compatible hypervisor and use Hyper-V-specific features. In some cases enabling these enlightenments might improve the usability and performance on the guest. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "To edit display type or bind address after VM creation (click to expand)" "v" >}}
Go to **Virtualization > Virtual Machines** and locate the VM you want to modify.
Click anywhere on the VM entry on the **Virtual Machines** widget to expand it.
Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the devices screen associated with the VM.
From this screen, click the <span class="material-icons">more_vert</span> icon at the right of the display device and select **Edit** to open the **Edit Display Device** screen.
Use the **Bind** dropdown to select a new IP address.
{{< /expand >}}

### Edit CPU and Memory Settings
The **CPU and Memory** settings on the **Edit VM** screen are the same as those in the **Create Virtual Machine** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditVMCPUandMemory.png" alt="Edit CPU and Memory" id="Edit CPU and Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

### Edit GPU Settings
The **GPU** settings on the **Edit** screen are the same as those in the **Create Virtual Machine** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditVMGpuSettings.png" alt="Edit GPU" id="Edit GPU" >}}

{{< include file="/static/includes/VMGPUSettings.md" >}}

## Devices Screens
The **Devices** screen displays a list of VM devices configured on your system.
By default, every VM displays three devices: **Disks**, **NIC**, and **Display**.

{{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="VM Devices Screen" id="VM Devices Screen" >}}

**Add** opens the [**Add Device**](#devices-add-screens) screen. Settings change based on the various device types.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Device Actions
Each device listed on the **Devices** screen has the same three options, accessed by clicking the <span class="material-icons">more_vert</span> at the right of the device row:

* **Edit** opens the **Edit *type* Device** screen where *type* is the device type selected.
  Settings vary based on the type of device selected in **Device Type**. See **[Add Device](#devices-add-screens)** screen.
  **Device Type** only displays on the **Add Device** screens.

* **Delete** opens a dialog. **Delete Device** confirms you want to delete the device.

* **Details** opens an information dialog that lists the port, type, bind IP, and other details about the device.
  Click **Close** to close the dialog.

## Devices Add Screens
The **Add Device** screen displays different settings based on the **Device Type** selected.

{{< expand "Add CD-ROM Device Type Settings" "v" >}}
Select **CD-ROM** in **Device Type** to see the CD-ROM settings.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceCDROM.png" alt="Add Device - CD-ROM" id="Add Device - CD-ROM" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. **CD-ROM** is the default setting. |
| **CD-ROM Path** | Use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to browse to the location of the CD-ROM file on the system. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add NIC Device Type Settings" "v" >}}
Select **NIC** in **Device Type** to see the VM network interface card settings.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceNIC.png" alt="Add Device - NIC" id="Add Device - NIC" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list.  |
| **Adapter Type** | Required. Select the emulator type from the dropdown list. Emulating an **Intel e82545 (e1000)** Ethernet card provides compatibility with most operating systems. Change to **VirtIO** to provide better performance on systems with VirtIO paravirtualized network driver support. |
| **MAC Address**  | Displays the default auto-generated random MAC address the VM receives. Enter a custom address to override the default.   |
| **Generate** | Click to add a new randomized address in **MAC Address**. |
| **NIC To attach** | Select a physical interface from the dropdown list to associate with the VM. |
| **Trust Guest Filters** | Default setting is not enabled. Set this attribute to allow the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to "yes" has security risks because it allows the virtual server to change its MAC address and receive all frames delivered to this address. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add Disk Device Type Settings" "v" >}}
Select **Disk** in **Device Type** in the **Add** device screen to see the disk settings including disk location, drive type, and disk sector size.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisk.png" alt="Add Device - Disk" id="Add Device - Disk" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Zvol** | Select the zvol path from the dropdown list. |
| **Mode** | Select the drive type from the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Disk sector size** | Select the disk sector size from the dropdown list or leave set as **Default**. Options are **Default**, **512** or **4096**. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add Display Device Type Settings" "v" >}}
Remote clients can connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).

Select **Display** in **Device Type** in the **Add** device screen to see the display device settings.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisplay.png" alt="Add Device - Display" id="Add Device - Display" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. **Display** is the default setting. |
| **Port** | Enter the port number. You can assign **0**, leave it empty for TrueNAS to assign a port when the VM is started, or set it to a fixed preferred port number. |
| **Resolution** | Select a screen resolution to use for VM display sessions. |
| **Bind** | Select an IP address to use for display sessions or use the default **0.0.0.0**. |
| **Password** | Enter a password of no more than eight characters in length to automatically pass to the remote display session. |
| **Web Interface** | Select to enable connecting to the SPICE web interface. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add Raw File Device Type Settings" "v" >}}
Select **Raw File** in **Device Type** in the **Add** device screen to see the raw file settings that include location, size of the file, disk sector size, and type.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceRawFile.png" alt="Add Device - Raw File" id="Add Device - Raw File" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Raw File** | Enter or use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to browse to the location of the file on the system. |
| **Disk sector size** | Select the disk sector size from the dropdown list or leave set as **Default**. Options are **Default**, **512** or **4096**. |
| **Mode** | Select the drive type from the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Raw filesize** | Enter the size of the file in GiB. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add PCI Passthrough Device Type Settings" "v" >}}
Select **PCI Passthrough Device** in **Device Type** in the **Add** device screen to see the PCI passthrough device settings.
{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a warning: PCI device does not have a reset mechanism defined. You might experience inconsistent or degraded behavior when starting or stopping the VM.
Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Virtualization/VMAddDevicePCIpass.png" alt="Add Device - PCI Passthrough" id="Add Device - PCI Passthrough" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **PCI Passthrough Device** | Enter or select the device from the dropdown list of options. Enter as (bus#/slot#/fcn#). |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add USB Passthrough Device Type Settings" "v" >}}
Select **USB Passthrough Device** in **Device Type** in the **Add** device screen to see the USB passthrough device settings.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceUSBpass.png" alt="Add Device - USB Passthrough" id="Add Device - USB Passthrough" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Controller Type** | Required. Choose from **piix3-uhci**, **piix4-uhci**, **ehci**, **ich9-ehci1**, **vt82c686b-uhci**, **pci-ohci**, **nec-xhci**, **qemu-xhci**. |
| **Device** | Enter or select the device from the dropdown list of options. If **Specify custom** is chosen, enter the required **Vendor ID** and **Product ID**. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls. |
{{< /truetable >}}
{{< /expand >}}
