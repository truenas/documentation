---
title: "Virtualization Screens"
description: "This article provides information on the screens and settings to add virtual machines (VMs) and devices to your TrueNAS SCALE system."
weight: 80
aliases:
- /scale/scaleuireference/virtualization/
- /scale/scaleuireference/virtualization/virtualizationscreens/
tags:
 - scalevm
 - scalegpu
---

{{< toc >}}


The **Virtualization** option displays the **Virtual Machines** screen that displays the list of VMs configured on the TrueNAS SCALE system.

![VirtualMachinesScreenwithVM](/images/SCALE/22.12/VirtualMachinesScreenwithVM.png "Virtual Machine Screen")

If there are no VMs configured on the system, the **No Virtual Machines** screen displays. This also displays if you delete all VMs on the system.

![AddVMNoVMs](/images/SCALE/22.12/AddVMNoVMs.png "No Virtual Machine Screen")

**Add Virtual Machines** and the **Add** button in the top right of the screen opens the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** wizard configuration screens.

After adding virtual machines (VMs) to the system the screen displays a list of the VMs. 

Click on the VM name or the expand <iconify-icon icon="ic:twotone-expand-more"></iconify-icon> down arrow to the right of a VM  to open the details screen for that VM. 

The **State** toggle displays and changes the state of the VM. 
The **Autostart** checkbox, when selected, automatically starts the VM if the system reboots. When cleared you must manually start the VM.

## Create Virtual Machine Wizard Screens
The **Create Virtual Machine** configuration wizard displays all settings to set up a new virtual machine.

Use **Next** and **Back** to advance to the next or return to the previous screen to change a setting. 
Use **Save** to close the wizard screens and add the new VM to the **Virtual Machines** screen.

### Operating System Screen
The **Operating System** configuration screen settings specify the VM operating system type, the time it uses, its boot method, and its display type.
{{< expand "Click Here for More Information" "v" >}}

![AddVMOperSys](/images/SCALE/22.12/AddVMOperSys.png "Operating System 1") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Guest Operating System** | Required. Select the VM operating system type from the dropdown list. Select from **Windows**, **Linux** or **FreeBSD**. |
| **Enable Hyper-V Enlightenments** |Only displays when **Guest Operating System** is set to **Windows**. This emulates a Hyper-V compatible hypervisor for the Windows guest operating system and makes some Hyper-V specific features available. |
| **Name** | Required. Enter an alphanumeric name for the virtual machine. |
| **Description** | Optional. Enter a description. |
| **System Clock**  | Select the VM system time from the dropdown list. Options are **Local** or **UTC**. Default is **Local**. |
| **Boot Method** | Select the boot method option from the dropdown list. Select **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Shutdown Timeout** | Enter the time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout entered expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable Display** | Enable a Display (Virtual Network Computing) remote connection. Requires UEFI booting. |
| **Display Type** | Select either [VNC](https://novnc.com/info.html) or [SPICE](https://spice-space.org/) from the dropdown list. VNC is the most widely used option with the best display, but it is slower than SPICE. SPICE has faster data transfer speed but a lower quality display and is not as secure as VNC.|
| **Bind** | Select the IP address option from the dropdown list. The primary interface IP address is the default. A different interface IP address can be chosen. |
{{< /truetable >}}

{{< /expand >}}
### CPU and Memory Screen
The **CPU and Memory** configuration wizard screen settings specify the number of virtual CPUs to allocate to the virtual machine, cores per virtual CPU socket, and threads per core. Also to specify the CPU mode and model, and the memory size.
{{< expand "Click Here for More Information" "v" >}}

![AddVMMemory](/images/SCALE/22.12/AddVMMemory.png "CPU and Memory") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Virtual CPUs** | Required. Enter the number of virtual CPUs to allocate to the virtual machine. The maximum is 16, or fewer if the host CPU limits the maximum. The VM operating system might impose operational or licensing restrictions on the number of CPUs. Default setting changes with the option selected in **Guest OS**, for Windows it is 2, for Unix-Type it is 1. |
| **Cores** | Required. Enter the number of cores per virtual CPU socket. The product of vCPUs, cores, and threads must not exceed 16. |
| **Threads** | Required. Enter the number of threads per core. A single CPU core can have up to two threads per core. A dual core could have up to four threads. The product of vCPUs, cores, and threads must not exceed 16. |
| **Optional: CPU Set (Examples: 0-3,8-11)** | Specify the logical cores that VM is allowed to use. Better cache locality can be achieved by setting CPU set base on CPU topology. E.g. to assign cores: 0,1,2,5,9,10,11 you can write: `1-2,5,9-11` |
| **Pin vcpus** | When the number of vCPUs equals the number of CPUs in **CPU Set**, vCPUs can be automatically pinned into **CPU Set**. Pinning is done by mapping each vCPU into a single CPU number following the order in **CPU Set**. This improves CPU cache locality and can reduce possible stutter in GPU passthrough VMs. |
| **CPU Mode** | Select the CPU mode attribute from the dropdown list to allow your guest VM CPU to be as close to the host CPU as possible. Select **Custom** to make it so a persistent guest virtual machine sees the same hardware no matter what physical physical machine the guest VM boots on. It is the default if the CPU mode attribute is not specified. This mode describes the CPU presented to the guest.  Select **Host Model** to use this shortcut to copying the physical host machine CPU definition from the capabilities XML into the domain XML. As the CPU definition copies just before starting a domain, a different physical host machine can use the same XML while still providing the best guest VM CPU each physical host machine supports. Select **Host Passthrough** when the CPU visible to the guest VM is exactly the same as the physical host machine CPU, including elements that cause errors  within libvirt. The downside of this is you cannot reproduce the guest VM environment on different hardware. |
| **CPU Model** | Select a CPU model to emulate. |
| **Memory Size** | Allocate RAM for the VM. Minimum value is 256 MiB. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to bytes. |
| **Optional: NUMA nodeset (Example: 0-1)** | Node set allows setting NUMA nodes for multi NUMA processors when CPU set was defined. Better memory locality can be achieved by setting nodeset based on the assigned CPU set. Example: if CPUs 0,1 belong to NUMA node 0, setting nodeset to 0 improves memory locality. |
{{< /truetable >}}
{{< /expand >}}
### Disks Screen
The **Disks** configuration wizard screen settings specify whether to create a new zvol on an existing dataset for a disk image or use an existing zvol or file for the VM. You also specify the disk type, zvol location and size.
{{< expand "Click Here for More Information" "v" >}}

![AddVMDisks](/images/SCALE/22.12/AddVMDisks.png "Create VM Disks") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Create new disk image** | Select this radio button to create a new zvol on an existing dataset to use as a virtual hard drive for the VM. |
| **Use existing disk image** | Select this radio button to use an existing zvol or file for the VM. Displays the **Select Existing Zvol** dropdown list field. |
| **Select Disk Type** | Select desired disk type as either **AHCI** or **VirtIO** from the dropdown list. Select **AHCI** for Windows VMs. **VirtIO** requires a guest OS that supports VirtIO paravirtualized network drivers. |
| **Zvol Location** | Select a dataset for the new zvol from the dropdown list of datasets on the system. |
| **Size** | Required. Allocate space for the new zvol. (Examples: 500 KiB, 500M, 2 TB). Units smaller than MiB are not allowed. |
| **Select Existing Zvol** | Displays after selecting the **Use existing disk image** radio button. Select an existing zvol from the dropdown list of zvols on the system. |
{{< /truetable >}}
{{< /expand >}}
### Network Interface Screen
The **Network Interface** screen settings specify the network adaptor type, mac address and the physical network interface card associated with the VM. 
{{< expand "Click Here for More Information" "v" >}}

![AddVMNetwork](/images/SCALE/22.12/AddVMNetwork.png "Network Interface") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Adapter Type** | Select the adaptor type from the dropdown list. **Intel e82545 (e1000)** emulates the same Intel Ethernet card and provides compatibility with most operating systems. **VirtIO** provides better performance when the operating system installed in the VM supports VirtIO para-virtualized network drivers. |
| **Mac Address** | Enter the desired address into the field to override the randomized MAC address. |
| **Attach NIC** | Select the physical interface to associate with the VM from the dropdown list. |
| **Trust Guest Filters** | Default setting is not enabled. Set this attribute to allow the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to "yes" has security risks, because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. |
{{< /truetable >}}
{{< /expand >}}
### Installation Media Screen
The **Installation Media** screen settings specify the operation system installation media image on a dataset or upload one from the local machine.
{{< expand "Click Here for More Information" "v" >}}

![AddVMInstallMedia](/images/SCALE/22.12/AddVMInstallMedia.png "Installation Media") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Choose Installation Media Image** | Enter the path or browse to the operating system installer image file. To collapse the browse tree click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt**. |
| **Upload an Installer Image File** | Select to display image upload the **ISO save location** and browse <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** options that populate the field with the mount path, and the **Choose File** button. |
| **Choose File** | Click to save the path populated in the **ISO save location** field. |
| **Upload** | Click to upload the file selected in the **ISO save location** field. |
{{< /truetable >}}
{{< /expand >}}
### GPU Screen
The **GPU** screen settings specify graphic processing unit (GPU) for the VM. It also provides the option to hide the VM from the Microsoft Reserved Partition (MSR) on Windows systems.
{{< expand "Click Here for More Information" "v" >}}

![AddVMGPU](/images/SCALE/22.12/AddVMGPU.png "GPU Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hide from MSR** | Select to enable the VM to hide the GPU from the Microsoft Reserved Partition (MSR). |
| **Ensure Display Device** | Select to ensure that the guest always has access to a video device. Required for headless installations like ubuntu server for the guest to operate properly. Leave checkbox clear for cases where want to use a graphic processing unit (GPU) passthrough and do not want a display device added. |
| **GPU's** | Select a physical GPU on your system from the dropdown list to use for the VM. |
{{< /truetable >}}
{{< /expand >}}
### Confirm Options Screen
The **Confirm Options** screen displays the settings selected using the **Create Virtual Machine** wizard screens. It displays the number CPUs, cores, threads, the memory, name of the VM and the disk size.

Click **Save** to add the VM to the **Virtual Machines** screen. Click **Back** to return to the previous screens to make changes.
## Virtual Machine Detail Screen
The details view of any VM displays the basic information on the number of virtual CPUS, cores, and threads, the amount of memory, boot load and system clock types, the display port number and the shutdown timout in seconds.
{{< expand "Click Here for More Information" "v" >}}

![VirtualMachinesScreenwithVMDetails](/images/SCALE/22.12/VirtualMachinesScreenwithVMDetails.png "VM Details Screen")

The buttons below the details show the actions options for each VM.

{{< truetable >}}
| Operation | Icon | Description |
|-----------|------|-------------|
| **Start** | <span class="iconify" data-icon="bxs:right-arrow"></span> | Starts a VM. The toggle turns blue when the VM switches to running. Toggles to **Stop**. After clicking **Start** the **Restart**,**Power Off**, **Display** and **Serial Shell** option buttons display. |
| **Restart** | <span class="material-icons">replay</span> | Retarts the VM. |
| **Power Off** | <span class="material-icons">power_settings_new</span> | Powers off and halts the VM, similar to turning off a computer power switch.  |
| **STOP** | <i class="material-icons" aria-hidden="true" title="Stop">stop</i> | Stops a running VM. Because a virtual machine does not always respond well to **STOP** or the command might time-out if the VM does not have an OS. Use **Power Off** instead. |
| **Edit** | <span class="material-icons">mode_edit</span> | Opens the **[Edit Virtual Machine](#edit-virtual-machine-screen)** that displays editable VM settings. You cannot edit a VM while it is running. You must first stop the VM and then you can edit the properties and settings. |
| **Delete** | <i class="material-icons" aria-hidden="true" title="Delete">delete</i> | Deletes a VM. Opens a [delete dialog](#delete-virtual-machine-dialog) that allows you to remove the VM from your system. You cannot delete a virtual machine that is running. You must first stop the VM and then you can delete it. |
| **Devices** | <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> | opens the **[Virtual Machine Devices](#devices-screens)** screen with a list of virtual machine devices configured on the system. |
| **Clone** | <span class="iconify" data-icon="cil:clone"></span> | Makes an exact copy or *clone* of the VM that you can select and edit. Opens the **[Clone](#clone-virtual-machine-window)** dialog that allows you to clone the selected VM. Enter a name for the cloned VM. Naming the clone VM is optional. The cloned VM displays on the Virtual Machines list with the extension **_clone0**. If you clone the same VM again the extension for the second clone is **clone1**. |
| **Display** | <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> | Opens **noVNC** in a browser window that allows you to connect to the remote desktop. |
| **Serial Shell** | <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> | Opens the TrueNAS **VM Serial Shell** screen. |
| **Download Logs** | <span class="material-icons">content_paste</span> | Downloads a <file>.log </file> file to the system. |
{{< /truetable >}}
{{< /expand >}}
### Delete Virtual Machine Dialog
**Delete** removes the VM configuration from your system.
{{< expand "Click Here for More Information" "v" >}}

![DeleteVirtualMachine](/images/SCALE/22.12/DeleteVirtualMachine.png "Delete Virtual Machine") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Delete Virtual Machine Data** | Select to remove the data associated with this virtual machine. This results in data loss if the data is not backed up. Leave unselected to keep the VM data intact. |
| **Force Delete**| Select to ignore the virtual machine status during the delete operation. Leave unselected to prevent deleting the VM when it is still active or has an undefined state. |
| **Enter *vmname* below to confirm** | Enter the name of the VM to confirm you want to delete the selected VM. |
{{< /truetable >}}
{{< /expand >}}

### Clone Virtual Machine Window
The **Clone** option opens a **Name** dialog where you can enter an optional name for a clone or exact duplicate of the selected VM.

### VM Serial Shell Screen
**Serial Shell** opens the **VM Serial Shell** window where you can enter commands for the selected virtual machine.
{{< expand "Click Here for More Information" "v" >}}

![VMSerialShellScreen](/images/SCALE/22.12/VMSerialShellScreen.png "VM Serial Shell") 

Click **Virtual Machines** in the header to return to the **Virtual Machine** screen.
{{< /expand >}}

## Edit Virtual Machine Screen
The **Virtual Machine > Edit** screens settings are a subset of those found on the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** settings.
### Edit General Settings
The **Edit** screen **General Settings** specify the basic settings for the VM. Unlike the **Create Virtual Machine** wizard, you cannot change the **Enable** or **Start on Boot** status or change the display type or bind address for a saved VM.
{{< expand "Click Here for More Information" "v" >}}

![EditVMGeneralSettings](/images/SCALE/22.12/EditVMGeneralSettings.png "Virtual Machines Edit General Settings") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the virtual machine. |
| **Description** | Enter a description (optional). |
| **System Clock**  | Select the VM system time from the dropdown list. Options are **Local** or **UTC**. Default is **Local**. |
| **Boot Method** | Select the boot method option from the dropdown list. Select **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Shutdown Timeout** | Enter the time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout entered expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable Hyper-V Enlightenments** | KVM implements Hyper-V Enlightenments for Windows guests. These features make Windows think they're running on top of a Hyper-V compatible hypervisor and use Hyper-V specific features. In some cases enabling these Enlightenments might improve usability and performance on the guest. |
{{< /truetable >}}
{{< /expand >}}
### Edit CPU and Memory Settings
The **Edit** screen **CPU and Memory** settings are the same as those in the **Create Virtual Machine** wizard screen.
{{< expand "Click Here for More Information" "v" >}}

![EditVMCPUandMemory](/images/SCALE/22.12/EditVMCPUandMemory.png "Virtual Machines Edit CPU and Memory") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Virtual CPUs** | Required. Enter the number of virtual CPUs to allocate to the virtual machine. The maximum is 16, or fewer if the host CPU limits the maximum. The VM operating system might impose operational or licensing restrictions on the number of CPUs. |
| **Cores** | Required. Enter the number of cores per virtual CPU socket. The product of vCPUs, cores, and threads must not exceed 16. |
| **Threads** | Required. Enter the number of threads per core. A single CPU core can have up to two threads per core. A dual core could have up to four threads. The product of vCPUs, cores, and threads must not exceed 16. |
| **Optional: CPU Set (Examples: 0-3,8-11)** | Specify the logical cores that VM is allowed to use. Better cache locality can be achieved by setting CPU set base on CPU topology. E.g. to assign cores: 0,1,2,5,9,10,11 you can write: `1-2,5,9-11` |
| **Pin vcpus** | When the number of vCPUs equals the number of CPUs in **CPU Set**, vCPUs can be automatically pinned into **CPU Set**. Pinning is done by mapping each vCPU into a single CPU number following the order in **CPU Set**. This improves CPU cache locality and can reduce possible stutter in GPU passthrough VMs. |
| **CPU Mode** | Select the CPU mode attribute from the dropdown list to allow your guest VM CPU to be as close to the host CPU as possible. Select **Custom** to make it so a persistent guest virtual machine sees the same hardware no matter what physical physical machine the guest VM boots on. It is the default if the CPU mode attribute is not specified. This mode describes the CPU presented to the guest.  Select **Host Model** to use this shortcut to copying the physical host machine CPU definition from the capabilities XML into the domain XML. As the CPU definition copies just before starting a domain, a different physical host machine can use the same XML while still providing the best guest VM CPU each physical host machine supports. Select **Host Passthrough** when the CPU visible to the guest VM is exactly the same as the physical host machine CPU, including elements that cause errors  within libvirt. The downside of this is you cannot reproduce the guest VM environment on different hardware. |
| **CPU Model** | Select a CPU model to emulate. |
| **Memory Size** | Allocate RAM for the VM. Minimum value is 256 MiB. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to bytes. |
| **Optional: NUMA nodeset (Example: 0-1)** | Node set allows setting NUMA nodes for multi NUMA processors when CPU set was defined. Better memory locality can be achieved by setting nodeset based on the assigned CPU set. Example: if CPUs 0,1 belong to NUMA node 0, setting nodeset to 0 improves memory locality. |
{{< /truetable >}}
{{< /expand >}}
### Edit GPU Settings
The **Edit** screen **GPU** settings are the same as those in the **Create Virtual Machine** wizard screens.
{{< expand "Click Here for More Information" "v" >}}

![EditVMGpuSettings](/images/SCALE/22.12/EditVMGpuSettings.png "Virtual Machines Edit GPU") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hide from MSR** | Select to enable the VM to hide the GPU from the Microsoft Reserved Partition (MSR). |
| **Ensure Display Device** | Select to ensure that the guest always has access to a video device. Required for headless installations like ubuntu server for the guest to operate properly. Leave checkbox clear for cases where want to use a graphic processing unit (GPU) passthrough and do not want a display device added. |
| **GPU's** | Select a physical GPU on your system from the dropdown list to use for the VM. |
{{< /truetable >}}
{{< /expand >}}

## Devices Screens
The **Virtual Machines > Devices** screen displays a list of VM devices configured on your system.

![VMDevicesListed](/images/SCALE/22.12/VMDevicesListed.png "VM Devices Listed")

**Add** opens the **[Virtual Machine > Devices > Add](#devices-add-screens)** configuration screen. Settings change based on the various device types.

### Device Actions
The <span class="material-icons">more_vert</span> displays a list of options for each device listed on the **Devices** screen.

**Edit** opens the **Edit *type* Device** screen where *type* is the device type selected. 
Settings vary based on the type of device in **Device Type**, and are the same as those on the **[Add Device](#devices-add-screens)** screen. The **Device Type** setting only displays on the **Add Device** screens.

**Delete** opens a dialog. 
**Delete Device** confirms you want to delete the device. 

**Change Device Order** opens a dialog for the selected device. Enter the number that represents the order the VM looks to the device during boot-up. The lower the number places the device earlier in the boot process. 

**Details** displays an information dialog for the selected device that lists the port, type, bind IP and other details about the device. Click **Close** to close the dialog.
## Devices Add Screens
The **Add Device** screen displays different settings based on the **Device Type** selected. 

### Add Device Type CD-ROM
Select **CD-ROM** in **Device Type** in the **Add** device screen to see the CD-ROM settings.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceCDROM](/images/SCALE/22.12/VMAddDeviceCDROM.png "Devices Add CD-ROM Type") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. **CD-ROM** is the default setting. |
| **CD-ROM Path** | Use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to browse to the location of the CD-ROM file on the system. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}

{{< /expand >}}
### Add Device Type NIC
Select **NIC** in **Device Type** in the **Add** device screen to see the VM network interface card settings.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceNIC](/images/SCALE/22.12/VMAddDeviceNIC.png "Devices Add NIC") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list.  |
| **Adapter Type** | Required. Select the emulator type from the dropdown list. Emulating an **Intel e82545 (e1000)** Ethernet card provides compatibility with most operating systems. Change to **VirtIO** to provide better performance on systems with VirtIO paravirtualized network driver support. |
| **MAC Address**  | Displays the default auto-generated random MAC address the VM receives. Enter a custom address to override the default.   |
| **Generate MAC Address** | Click to add a new randomized address in **MAC Address**. |
| **NIC to attach** | Select a physical interface from the dropdown list to assoicate with the VM. |
| **Trust Guest Filters** | Default setting is not enabled. Set this attribute to allow the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to "yes" has security risks, because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}
{{< /expand >}}

### Add Device Type Disk
Select **Disk** in **Device Type** in the **Add** device screen to see the disk settings that include disk location, drive type and disk sector size.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceDisk](/images/SCALE/22.12/VMAddDeviceDisk.png "Devices Add Disk") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Zvol** | Select the zvol path from the dropdown list. |
| **Mode** | Select the drive type from the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Disk sector size** | Select the disk sector size from the dropdown list or leave set as **Default**. Options are **Default**, **512** or **4096**. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}
{{< /expand >}}

### Add Device Type Raw File
Select **Raw File** in **Device Type** in the **Add** device screen to see the raw file setings that include location, size of the file, disk sector size, and type.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceRawFile](/images/SCALE/22.12/VMAddDeviceRawFile.png "Devices Add Raw File") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Raw File** | Enter or use the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** to browse to the location of the file on the system. |
| **Disk sector size** | Select the disk sector size from the dropdown list or leave set as **Default**. Options are **Default**, **512** or **4096**. |
| **Mode** | Select the drive type from the dropdown list. Options are **AHCI** or **VirtIO**. |
| **Raw filesize** | Enter the size of the file in GiB. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. | 
{{< /truetable >}}
{{< /expand >}}

### Add Device Type PCI Passthrough Device
Select **PCI Passthrough Device**in **Device Type** in the **Add** device screen to see the PCI passthrough device settings.
{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a warning: PCI device does not have a reset mechanism defined. You might experience inconsistent or degraded behavior when starting or stopping the VM.
Determine if you want to proceed with this action in such an instance.
{{< /hint >}}
{{< expand "Click Here for More Information" "v" >}}

![VMAddDevicePCIpass](/images/SCALE/22.12/VMAddDevicePCIpass.png "Devices Add PCI Passthrough") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **PCI Passthrough Device** | Enter or select the device from the dropdown list of options. Enter as (bus#/slot#/fcn#). |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}
{{< /expand >}}

### Add Device Type USB Passthrough Device
Select **USB Passthrough Device** in **Device Type** in the **Add** device screen to see the USB passthrough device settings.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceUSBpass](/images/SCALE/22.12/VMAddDeviceUSBpass.png "Devices Add USB Passthrough") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. |
| **Controller Type** | Required. Choose from **piix3-uhci**, **piix4-uhci**, **ehci**, **ich9-ehci1**, **vt82c686b-uhci**, **pci-ohci**, **nec-xhci**, **qemu-xhci**. |
| **Device** | Enter or select the device from the dropdown list of options. If **Specify custom** is chosen, enter the required **Vendor ID** and **Product ID**. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}
{{< /expand >}}

### Add Device Type Display
Select **Display** in **Device Type** in the **Add** device screen to see the display device settings.
{{< expand "Click Here for More Information" "v" >}}

![VMAddDeviceDisplay](/images/SCALE/22.12/VMAddDeviceDisplay.png "Devices Add Display") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Type** | Select the device type from the dropdown list. **Display** is the default setting. |
| **Port** | Enter the port number. You can assign **0**, leave empty for TrueNAS to assign a port when the VM is started, or set to a fixed preferred port number. |
| **Resolution** | Select a screen resolution to use for VNC sessions. |
| **Bind** | Select an IP address to use for VNC sessions or use the default **0.0.0.0**. |
| **Password** | Enter a VNC password of no more than eight characters in length to automatically pass to the VNC session. |
| **Display Type** | Select the display type from the dropdown list. Options are **VNC** or **SPICE**. VNC is the most widely used option with the best display but is slower than SPICE.
   SPICE has faster data transfer speed but a lower quality display, and is not as secure as VNC. |
| **Web Interface** | Select to enable connecting to the VNC web interface. |
| **Device Order** | Enter the number (such as *1003*) that represents where in the boot order this device should be. The higher the number the later in the boot-up process the device falls. If you want the CD-ROM to be the first device checked assign it a lower number. |
{{< /truetable >}}
{{< /expand >}}

{{< taglist tag="scalevm" limit="10" >}}
{{< taglist tag="scalegpu" limit="10" title="Related GPU Articles" >}}