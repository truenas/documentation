---
title: "Virtual Machines"
description: "Provides information on the screens and settings to add virtual machines (VMs) and devices to your TrueNAS SCALE system."
weight: 80
tags:
 - vm
 - gpu
 - storage provisioning
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

## Virtual Machines Screen

The **Virtual Machines** screen allows users to add, edit, or manage virtual machines (VMs) or VM devices in TrueNAS.
The **No Virtual Machines** screen shows when there are no VMs configured in or deleted from TrueNAS.

{{< trueimage src="/images/SCALE/Virtualization/AddVMNoVMs.png" alt="No Virtual Machines" id="No Virtual Machines" >}}

**Add Virtual Machines** and **Add** at the top right of the screen opens the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** wizard.

Each virtual machine listed, includes the **Running** and **Start on Boot** toggles.
**Running** shows the current state of the VM.
**Start on Boot** automatically starts the VM after a system reboot.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVM.png" alt="Virtual Machine Screen" id="Virtual Machine Screen" >}}

Expanding a VM shows the [details screen](#virtual-machine-details-screen) details on and options for that VM.

## Virtual Machine Details Screen

The expanded **Virtual Machines** screen shows the details and options for a VM.
Details include the basic information on the number of virtual CPUs, cores, and threads, the amount of memory, boot loader, and system clock types, the display port number, and the shutdown timeout in seconds.

{{< trueimage src="/images/SCALE/Virtualization" >}}

Options shown change after starting a virtual machine.

{{< expand "VM Options" "v" >}}
{{< truetable >}}
| Operation | Icon | Description |
|-----------|------|-------------|
| **Start** | <span class="iconify" data-icon="bxs:right-arrow"></span> | Starts a VM. The toggle turns blue when the VM switches to running. The **Start** button toggles to **Stop**. While running, the screens shows the **Restart**,**Power Off**, **Display**, and **Serial Shell** buttons. |
| **Restart** | <span class="material-icons">replay</span> | Stops then starts the VM. Shows for a running VM. |
| **Power Off** | <span class="material-icons">power_settings_new</span> | Shows after starting a VM. Powers off and halts the VM, similar to turning off a computer power switch. Shows only when the VM is running. |
| **Stop** | <i class="material-icons" aria-hidden="true" title="Stop">stop</i> | Shows after starging a VM. Stops a running VM. Virtual machines do not always respond to **STOP** or the command might time out if the VM does not have an OS. Use **Power Off** instead. **Stop** toggles to **Start** after the VM stops. |
| **Edit** | <span class="material-icons">mode_edit</span> | Opens the **[Edit Virtual Machine](#edit-virtual-machine-screen)** with editable VM settings. You cannot edit a VM while it is running. Stop the VM to edit the properties and settings. |
| **Delete** | <i class="material-icons" aria-hidden="true" title="Delete">delete</i> | Deletes a VM and removes it from the system. Opens a [delete dialog](#delete-virtual-machine-dialog). You cannot delete a virtual machine that is running. Stop the VM to delete it. |
| **Devices** | <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> | Shows after starting a VM. Opens the **[Virtual Machine Devices](#devices-screens)** screen for the selected VM. |
| **Clone** | <span class="iconify" data-icon="cil:clone"></span> | Shows after starting the VM. Makes an exact *clone* copy of the VM. Opens the **[Clone](#clone-virtual-machine-window)** dialog. |
| **Display** | <i class="material-icons" aria-hidden="true" title="display">settings_ethernet</i> | Shows after starting the VM. Opens the **SPICE** login screen in a new browser window and allows you to connect to the remote desktop after entering the password to access that remote desktop. |
| **Serial Shell** | <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> | Shows after starting the VM. Opens the TrueNAS **VM Serial Shell** screen. |
| **Download Logs** | <span class="material-icons">content_paste</span> | Places a copy of the  <file>.log </file> file on the system. |
{{< /truetable >}}
{{< /expand >}}

### Delete Virtual Machine Dialog

The **Delete Virtual Machine** dialog shows options when deleting the VM and removing the VM configuration from your system.

{{< trueimage src="/images/SCALE/Virtualization/DeleteVirtualMachineDialog.png" alt="Delete Virtual Machine" id="Delete Virtual Machine" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Delete Virtual Machine Data** | Removes the data associated with this virtual machine. Deleting a VM results in data loss if the data is not backed up. Do not select this option to keep the VM data intact. |
| **Force Delete**| Ignores the virtual machine status during the delete operation. Do not select this option to prevent deleting the VM when it is still active or the state is undefined. |
| **Enter *vmname* below to confirm** | Blank text entry field to manually enter the name of the VM to delete. This must match the name shown in the dialog. |
{{< /truetable >}}

### Clone Virtual Machine Dialog

The **Clone** dialog settings create an exact duplicate (clone) of the VM. The blank field allows manual entry of a name for the clone of the selected VM.
Naming the clone VM is optional.

{{< trueimage src="/images/SCALE/Virtualization/CloneVMDialog.png" alt="Clone Virtual Machine" id="Clone Virtual Machine" >}}

A cloned VM shows on the Virtual Machines list with the extension **_clone0**. Cloning the same VM again changes the extension for the second clone to **clone1**.

### VM Serial Shell Screen

The **Serial Shell** button opens the **VM Serial Shell** screen, where you can enter commands for the selected virtual machine.

{{< trueimage src="/images/SCALE/Virtualization/VMSerialShellScreen.png" alt="Serial Shell" id="Serial Shell" >}}

The **Virtual Machines** breadcrumb in the header to returns to the **Virtual Machine** screen.

### Edit Virtual Machine Screen

The **Edit VM** screen shows a subset of settings in the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** screens.
It includes the general settings also on the wizard **Operating System** screen, **CPU and Memory**, and **GPUs** screen settings.
To edit disks, network, or display settings, click [**Devices**](#virtual-machine-details-screen) on the expanded view of the VM to open the [**Devices**](#devices-screens) screen.

#### General Settings

The **Edit** screen **General Settings** specifies the basic settings for a VM. Unlike the **Create Virtual Machine** wizard, you cannot change the **Enable** or **Start on Boot** status or change the display type or bind address for a saved VM from this screen.

{{< trueimage src="/images/SCALE/Virtualization/EditVMGeneralSettings.png" alt="Edit General Settings" id="Edit General Settings" >}}

{{< expand "General Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the virtual machine. |
| **Description** | Enter a description (optional). |
| **System Clock** | Select the VM system time from the dropdown list. Options are **Local** or **UTC**. The default is **Local**. |
| **Boot Method** | Select the boot method option from the dropdown list. Select **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Shutdown Timeout** | Enter the time, in seconds, the system waits for the VM to cleanly shut down. During the shutdown, the system powers off the VM after the shutdown timeout entered expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable Hyper-V Enlightenments** | Shows for VMs set for Windows OS. KVM implements Hyper-V Enlightenments for Windows guests. These features make Windows think they are running on a Hyper-V-compatible hypervisor and use Hyper-V-specific features. In some cases, enabling these enlightenments might improve the usability and performance for the guest. |
| **Enable Secure Boot** | Turns on the secure boot function in TrueNAS. Some operating systems, like Windows 11, might not require secure boot. |
| **Enable Trusted Platform Module (TPM)** | Turns on the Trusted Platform Module (TPM) for enhanced security features in TrueNAS. TPM provides hardware-based cryptographic security functions, Some operating systems, like Windows 11, might require enabling this option. |
{{< /truetable >}}
{{< /expand >}}

#### Edit CPU and Memory Settings

The **CPU and Memory** settings on the **Edit VM** screen are the same as those in the **Create Virtual Machine** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditVMCPUandMemory.png" alt="Edit CPU and Memory" id="Edit CPU and Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

#### Edit GPU Settings
The **GPU** settings on the **Edit** screen are the same as those in the **Create Virtual Machine** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditVMGpuSettings.png" alt="Edit GPU" id="Edit GPU" >}}

{{< include file="/static/includes/VMGPUSettings.md" >}}

### Devices Screens

The **Devices** screen shows a table listing of VM devices configured on your system. By default, the screen shows three devices: **Disks**, **NIC**, and **Display**.

{{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="VM Devices Screen" id="VM Devices Screen" >}}

**Add** opens the [**Add Device**](#devices-add-screens) screen. Settings change based on the various device types.

The <span class="material-icons">more_vert</span> at the right of each device row has three options:

* **Edit** - Opens the **Edit *type* Device** screen where *type* is the device type selected.
  Settings vary based on the type of device selected in **Device Type**. See **[Add Device](#devices-add-screens)** screen.
  **Device Type** only displays on the **Add Device** screens.

* **Delete** - Opens the **Delete Device** dialog.

* **Details** - Opens an information dialog showing the port, type, bind IP, and other details about the device.

## Create Virtual Machine Wizard Screens

The **Create Virtual Machine** wizard includes all settings to set up a new virtual machine in TrueNAS.

**Next** and **Back** advance to the next screen or return to the previous screen without saving or losing setting choices.
**Save** saves all settings, closes the wizard, and adds the new VM to the **Virtual Machines** screen.

### Operating System Settings

The **Operating System** settings specify the VM operating system type, the time setting the VM system clock uses, the boot method, and the display type.

{{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineOperatingSystemSettings.png" alt="Operating System Settings" id="Operating System Settings" >}}

{{< expand "Operating System Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Guest Operating System** | (Required) Sets the operating system for the VM operating system to the option selected on the dropdown list. Options are **Windows**, which adds the **Enable Hyper-V Enlightenments** option. **Linux**, and **FreeBSD**. |
| **Enable Hyper-V Enlightenments** | Only shows when **Guest Operating System** is set to **Windows**. When enabled, the VM emulates a Hyper-V-compatible hypervisor for the Windows guest operating system and makes some Hyper-V-specific features available. |
| **Name** | (Required) Text entry field that accepts manual or copy/paste entry of a name for the VM that consists of alphanumeric characters. |
| **Description** | (Optional) Text entry field that accepts manual or copy/paste entry of a brief description about the VM. For example, the type of OS for the VM or the purpose of the VM. |
| **System Clock** | (Required) Sets the VM system clock to the option selected on the dropdown list. Options are: **Local**, which uses the TrueNAS SCALE system clock setting, or **UTC**, which uses the Coordinated Universal Time clock. The default is **Local**. |
| **Boot Method** | (Required) Sets the boot method to the option selected on the dropdown list. Options are: **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Enable Secure Boot** | Sets the VM to verify boot components using digital signatures. This prevents unauthorized code from running during startup and is required for Windows 11 and some Linux distributions. |
| **Enable Trusted Platform Module (TPM)** | Sets TrueNAS to provide a virtual TPM 2.0 device for the VM. This enables hardware-based security functions, including secure key storage and cryptographic operations. Required for Windows 11. |
| **Shutdown Timeout** | Text entry field that accepts manual entry of a time in seconds that the system waits for the VM to cleanly shut down. During system shutdown, the system powers off after the shutdown timeout entered for the VM expires. |
| **Start on Boot** | Sets the VM to automatically start after restarting the system or when it is rebooted. Selected by default. |
| **Enable Display** | Enables a display (Virtual Network Computing) remote connection. Requires UEFI booting. Selected by default. |
| **Bind** | Shows when **Enable Display** is selected. Sets an IP address to use for remote VNC sessions. Note that this setting only applies when using a VNC client other than the TrueNAS WebUI. |
| **Password** | (Required)  Displays when **Enable Display** is selected.Enter a password to secure access to the VM. Enter this when logging into the VNC display. |
{{< /truetable >}}
{{< /expand >}}

### CPU and Memory Settings
The **CPU and Memory** settings specify the CPU mode, model, and memory size. They allow specifying the number of virtual CPUs to allocate to the virtual machine, the number of cores per virtual CPU socket, and the number of threads per core.

{{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineCPUAndMemorySettings.png" alt="CPU and Memory Settings" id="CPU and Memory Settings" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

### Disks Settings

The **Disks** settings specify how virtual disks are added. Options are creating a new zvol on an existing dataset for a disk image, or using an existing zvol or file for the VM.

{{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachinesDisksSettings.png" alt="Disks Settings" id="Disks Settings" >}}

{{< expand "Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Create new disk image** | Shows settings to create a new zvol on an existing dataset to use as a virtual hard drive for the VM. |
| **Use existing disk image** | Shows settings to select an existing zvol or file for the VM. Shows the **Select Disk Type** and **Select Existing Zvol**  fields. |
| **Select Disk Type** | Sets the disk type to the option selected on the dropdown list. Options are **AHCI** or **VirtIO**. Select **AHCI** for Windows VMs. **VirtIO** requires a guest OS that supports VirtIO paravirtualized network drivers. |
| **Select Existing Zvol** | (Required) Showss after selecting **Use existing disk image**. Sets the disk to the existing zvol selected from the dropdown list. |
| **Zvol Location** | (Required) Shows when **Create new disk image** is selected. Shows a dropdown list of datasets to select as the location where a new zvol is created. |
| **Size** | (Required) Shows when **Create new disk image* is selected. Allocates space for the new zvol. (Examples: 500 KiB, 500M, 2 TB). Units smaller than MiB are not allowed. |
{{< /truetable >}}
{{< /expand >}}

### Network Interface Settings

The **Network Interface** settings specify the network adapter type, MAC address, and physical network interface card associated with the VM.

{{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachinesNetworkInterfaceSettings.png" alt="Network Interface" id="Network Interface" >}}

{{< expand "Network Interface Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Adapter Type** | Sets the adapter type to the option selected on the dropdown list. Options are:<br><li>**Intel e82545 (e1000)** - Emulates the same Intel Ethernet card and provides compatibility with most operating systems.<br><li>**VirtIO** - Provides better performance when the operating system installed in the VM supports VirtIO para-virtualized network drivers.</li> |
| **Mac Address** | Shows the MAC address automatically entered by TrueNAS. Enter the desired address into the field to override the randomized MAC address. |
| **Attach NIC** | Sets the physical interface to associate with the VM selected on the dropdown list. |
| **Trust Guest Filters** | Enables and allows the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Enabling **Trust Guest Filters** has security risks because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. Disabled by default. |
{{< /truetable >}}
{{< /expand >}}

### Installation Media Screen

The **Installation Media** settings specify the location of the operating system installation media image in a TrueNAS dataset, or you can upload a copy from the local machine.

{{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineInstallationMediaSettings.png" alt="Installation Medi Settings" id="Installation Media Settings" >}}

{{< expand "Installation Media Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Choose Installation Media Image** | Shows two fields, the mount path field and a file browser field directly below it. Sets the mount path to what is selected in the file browser field. To collapse the file branch, click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt**. |
| **Upload New Image File** | Opens the **Upload Image File** dialog, where you browse to, and select the image file location on the local system or a network location available to your TrueNAS system. **Choose File** sets the file location and activates **UpLoad**.  |
{{< /truetable >}}
{{< /expand >}}

#### Upload Installation Media Dialog

{{< trueimage src="/images/SCALE/Virtualization/CreateVMWInstallMediaUploadSCALE.png" alt="Upload Installation Media" id="Upload Installation Media" >}}

{{< expand "Upload Installation Media Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **ISO save location** | Enter the path or browse to the location where you want to install the image file. |
| **Choose File** | Click to save the path populated in the **ISO save location** field. |
| **Upload** | Click to upload the file selected in the **ISO save location** field. |
{{< /truetable >}}
{{< /expand >}}

### GPU Screen
The **GPU** settings specify the graphics processing unit (GPU) for the VM. It also provides the option to hide the VM from the Microsoft Reserved Partition (MSR) on Windows systems.

{{< trueimage src="/images/SCALE/Virtualization/AddVMGPU.png" alt="GPU Settings" id="GPU Settings" >}}

{{< include file="/static/includes/VMGPUSettings.md" >}}

### Confirm Options Screen

The **Confirm Options** screen shows a summary of settings for the VM, including the number of CPUs, cores, threads, memory, name of the VM, and the disk size.

**Save** adds the VM to the **Virtual Machines** screen.

## Add Device Screen

The **Add Device** screen shows different settings based on the option selected in **Device Type**. Settings change based on the type except the **Type** and **Device Order** settings, which are common to all device types.

**Type** sets the device type to the option selected on the dropdown list. The default selection is **CD-ROM**.

**Device Order** sets the position of the device in the boot order used when the system boots up or restarts. Accepts a number (such as *1003*) that represents where in the boot order this device should be. The higher the number, the later in the boot-up process the device falls.

{{< expand "CD-ROM Settings" "v" >}}
CD-ROM settings show when **Device Type** is set to **CD-ROM**.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceCDROM.png" alt="Add Device - CD-ROM" id="Add Device - CD-ROM" >}}

**CD-ROM Path** shows two fields: the **/mnt** path field that populates with what is selected with the file browser field directly below it. The <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** expands or collapses the directory branch while you browse to the location of the CD-ROM file on the system. |
{{< /expand >}}

{{< expand "NIC Settings" "v" >}}
VM network interface card settings show when **Device Type** is set to **NIC**.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceNIC.png" alt="Add Device - NIC" id="Add Device - NIC" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Adapter Type** | (Required) Sets the emulator type to the option selected in the dropdown list. Emulating an **Intel e82545 (e1000)** Ethernet card provides compatibility with most operating systems. **VirtIO** provides better performance for systems with VirtIO paravirtualized network driver support. |
| **MAC Address** | Shows the default auto-generated random MAC address the VM receives. Enter a custom address to override the default. |
| **Generate** | Generates a new randomized address in **MAC Address**. |
| **NIC To attach** | Sets a physical interface to associate with the VM to the device selected on the dropdown list. |
| **Trust Guest Filters** | Allows the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to "yes" has security risks because it allows the virtual server to change its MAC address and receive all frames delivered to this address. The default setting is not enabled. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Disk Settings" "v" >}}
Disk settings, including disk location, drive type, and disk sector size, show when **Device Type** is set to **Disk**.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisk.png" alt="Add Device - Disk" id="Add Device - Disk" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Zvol** | Sets the zvol path to the options selected on the dropdown list. |
| **Mode** | Sets the drive type to the option selected on the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Disk sector size** | Sets the disk sector size in bytes to the option selected on the dropdown list, or leave it set to **Default**. Options are: **Default**, which uses the ZFS volume values, **512**, or **4096**. Setting a sector size changes both the logical and physical sector size. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Display Settings" "v" >}}
Display settings show when **Device Type** is set to **Display**.

Remote clients can connect to VM display sessions using a SPICE client, or by installing a third-party remote desktop server inside your VM.
SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisplay.png" alt="Add Device - Display" id="Add Device - Display" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Port** | Text field that accepts manual or copy/paste entry of a port number. Can be set to **0**, left empty for TrueNAS to assign a port when the VM is started, or set to a fixed preferred port number. |
| **Resolution** | Sets the screen resolution for the VM display session to the option selected on the dropdown list. |
| **Bind** | Sets the IP address used for the SPICE display sessions to the option selected on the dropdown list. Options include the default **0.0.0.0**, **::**, **::1**, IP addresses obtained from your network, and the TrueNAS primary interface. |
| **Password** | Text field that accepts manual or copy/paste entry of a password, that is eight characters in length, that TrueNAS automatically passes to the remote display session. |
| **Web Interface** | Enables connecting to the SPICE web interface. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Raw File Settings" "v" >}}
Shows the raw file settings, including file location, size, disk sector size, and type when **Device Type** is set to **Raw File**.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceRawFile.png" alt="Add Device - Raw File" id="Add Device - Raw File" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Raw File** | Shows two fields. A file browser field and a blank field that populates with what is selected in the file browser directly below it. Use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to expand or collaspe the directory branches as you browse to and select the location of the file on the system. |
| **Disk sector size** | Sets the disk sector size to the option selected on the dropdown list. Options are **Default**, which uses the ZFS volume values, **512** or **4096**. Setting a sector size changes both the logical and physical sector size. |
| **Mode** | Sets the drive type to the option selected on the dropdown list. Options are: <br><li>**AHCI** - Emulates an AHCI hard disk for better software compatibility. <br><li>**VirtIO** - Uses paravirtualized drivers and can provide better performance, but the operating system installed in the VM must support VirtIO disk devices.</li>. |
| **Raw filesize** | Text field that accepts manual entry of a number for the size of the file in GiB. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "PCI Passthrough Settings" "v" >}}
Shows PCI passthrough device settings when **Device Type** is set to **PCI Passthrough Device**.

{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a **PCI device does not have a reset mechanism defined** warning.
You might experience inconsistent or degraded behavior when starting or stopping the VM.
If this occurs, determine if you want to proceed with this action.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Virtualization/VMAddDevicePCIpass.png" alt="Add Device - PCI Passthrough" id="Add Device - PCI Passthrough" >}}

**PCI Passthrough Device** sets the PCI device to what is manually entered or select on the dropdown list of options. Enter a device as *bus#/slot#/fcn#*, for example *0000:00:04.3 'System peripheral': Sky Lake-E CBDMA Registers by 'Intel Corporation'*. 
{{< /expand >}}

{{< expand "USB Passthrough Settings" "v" >}}
Shows the USB passthrough device setting when **Device Type** is set to **USB Passthrough Device**.

{{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceUSBpass.png" alt="Add Device - USB Passthrough" id="Add Device - USB Passthrough" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Controller Type** | (Required) Sets the controller to the option selected on the dropdown list. Options are: **piix3-uhci**, **piix4-uhci**, **ehci**, **ich9-ehci1**, **vt82c686b-uhci**, **pci-ohci**, **nec-xhci**, **qemu-xhci**. |
| **Device** | Sets the device to the option manually entered or selected on the dropdown list of options. Selecting **Specify custom** shows the **Vendor ID** and **Product ID** fields. |
{{< /truetable >}}
{{< /expand >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}