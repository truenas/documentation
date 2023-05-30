---
title: "Virtual Machines"
description: "Describes the fields in the Virtual Machines screen in TrueNAS CORE."
weight: 10
tags:
- corevm
- corejailspluginsvm
---

{{< toc >}}

The Virtual Machines screen displays a list of virtual machines (VM) configured on your system.

![VirtualMachinesScreen](/images/CORE/13.0/VirtualMachinesScreen.png "Virtual Machines")

Use the blue **COLUMNS** button to display a list of options to customize the list view. Options are **Select All**, **Autostart**, **Virtual CPUs**, **Cores**, **Threads**, **Memory Size**, **Boot Loader Type**, **System Clock**, **VNC Port**, **Com Port**, **Description**, **Shutdown Timeout** or **Reset to Defaults**.

Use **ADD** to display the Virtual Machines configuration Wizard.

The **State** toggle indicates the current state of the VM. Hover over the toggle with your mouse to see the state as **STOPPED** or **RUNNING**. The toggle turns blue when it is running.

Select the **Autostart** checkbox to set the VM to start automatically after a system reboot, or clear the checkbox to require manually starting the VM after a system reboot.

## Virtual Machine Wizard

The Wizard consists of six individual configuration screens. 

**Confirmation Options** displays the summary of settings. You can use **BACK** to return to previous screens to make changes or use **SUBMIT** to save settings and create the virtual machine. 

After saving the VM, if you want to make changes you can select the the VM on the list, expand it and select **EDIT** to make changes.

### VM Wizard Navigation
You cannot advance to the next screen if the current screen has required fields. 
After entering all required information you can advance to the next screen. 

Use **Next** to advance to the next wizard configuration form. 

Use **Back** to return to a previous wizard configuration form. 

Use **Cancel** to exit the configuration wizard.

The blue edit icons preceding each Wizard screen name, at the top of the screen, allow you to jump to the screen you selected but only if you have populated all required fields on the current screen and any screen that follows in the sequence of screens. 
If you select a screen that follows  a Wizard screen that has required fields and you have not provided the information those required fields wants, the screen you selected does not display. 
You must enter all required fields before you can freely move around in the Wizard screens.

{{< expand "Operating System Settings" "v" >}}

![VMAddOperatingSystemScreen](/images/CORE/13.0/VMAddOperatingSystemScreen.png "VM Add: OS")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Guest Operating System** | Required field. Select the VM operating system type from the dropdown list three operating systems listed **Windows**, **Linux** or **FreeBSD**. |
| **Name** | Enter an alphanumeric name for the virtual machine. |
| **Description** | (optional) Enter a description for the OS. |
| **System Clock** | Required field. Specifies the VM system time. Select from the dropdown list options  **Local** or **UTC**. Default is **Local**. |
| **Boot Method** | Select from the dropdown list options **UEFI**, **UEFI-CSM** or **Grub**. Select **UEFI** for newer operating systems or **UEFI-CSM (Compatibility Support Mode)** for older operating systems that only support BIOS booting. Grub is not recommended but can be used when the other options do not work. |
| **Shutdown Timeout** | The time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable VNC** | Select to enable a VNC (Virtual Network Computing) remote connection. Requires UEFI booting. |
| **Delay VM Boot Until VNC Connects** | Select to wait to start VM until VNC client connects. |
| **Bind**  | Required field. Select from the dropdown list options **0.0.0.0**, **::**, **::1** or the system IP addresses provided on the list. VNC network interface IP address. The primary interface IP address is the default. A different interface IP address can be chosen. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "CPU and Memory Settings" "v" >}}

![VMAddCPUandMemoryScreen](/images/CORE/13.0/VMAddCPUandMemoryScreen.png "VM Add: CPU and Memory")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Virtual CPUs** | Number of virtual CPUs to allocate to the virtual machine. The maximum is 16, or fewer if the host CPU limits the maximum. The VM operating system might also have operational or licensing restrictions on the number of CPUs. |
| **Cores** | Specify the number of cores per virtual CPU socket. The product of vCPUs, cores, and threads must not exceed 16. |
| **Threads** | Specify the number of threads per core. The product of vCPUs, cores, and threads must not exceed 16. |
| **Memory Size** | Allocate RAM for the VM. Minimum value is 256 MiB. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to bytes. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Disk Settings" "v" >}}

![VMAddDisksScreen](/images/CORE/13.0/VMAddDisksScreen.png "VM Add: Disks")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Create new disk image** | Select to create a new zvol on an existing dataset. This is used as a virtual hard drive for the VM. Select Use existing disk image to use an existing zvol or file for the VM. |
| **Select Disk Type** | Select desired disk type from the dropdown list options **AHIC** or **VirtIO**. |
| **Zvol Location** | Rerquired field. Select a dataset for the new zvol. |
| **Size** | Allocate space for the new zvol. (Examples: 500 KiB, 500M, 2 TB) MiB. Units smaller than MiB are not allowed. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Network Interface Settings" "v" >}}

![VMAddNetworkInterfaceScreen](/images/CORE/13.0/VMAddNetworkInterfaceScreen.png "VM Add: Network Interface")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Adapter Type** | Required field. Select an adapter from the dropdown list. **Intel e82545 (e1000)** emulates the same Intel Ethernet card. This provides compatibility with most operating systems. **VirtIO** provides better performance when the operating system installed in the VM supports VirtIO paravirtualized network drivers. |
| **Mac Address** | Enter the desired address into the field to override the randomized MAC address. |
| **Attach NIC** | Required field. Select the physical interface to associate with the VM from the dropdown list options. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Installation Media Settings" "v" >}}

![VMAddInstallationMediaScreen](/images/CORE/13.0/VMAddInstallationMediaScreen.png "VM Add: Installation Media")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Choose Installation Media Image** | Browse to the operating system installer image file. |
| **Upload an Installer Image File** | Set to display image upload options. |
{{< /truetable >}}
{{< /expand >}}

## Individual Virtual Machine Screen
The individual virtual machine screens display the VM settings and provide optional operation buttons for that VM. 
Click the <i class="fa fa-caret-right" aria-hidden="true"></i> icon to expand that virtual machine and access current settings and operation actions.

![VMScreenExpanded](/images/CORE/13.0/VMScreenExpanded.png "Virtual Machine Screen")

The following operations are available on each VM screen:

{{< truetable >}}
| Operation | Icon | Description |
|-----------|------|-------------|
| **RESTART** | <span class="material-icons">replay</span> | Retarts the VM. |
| **POWER OFF** | <span class="material-icons">power_settings_new</span> | Powers off and halts the VM, similar to turning off a computer power switch.  |
| **STOP** | <i class="material-icons" aria-hidden="true" title="Stop">stop</i> | Stops a running VM. Because a virtual machine doesn't always respond well to **STOP** use the option to force the stop when prompted. |
| **START** | <span class="iconify" data-icon="bxs:right-arrow"></span> | Starts a VM. The toggle turns blue when the VM switches to running. |
| **EDIT** | <span class="material-icons">mode_edit</span> | Displays the **Virtual Machines > Edit** screen. You cannot edit a VM while it is running. You must first stop the VM and then you can edit the properties and settings. |
| **DELETE** | <i class="material-icons" aria-hidden="true" title="Delete">delete</i> | Deletes a VM. You cannot delete a virtual machine that is running. You must first stop the VM and then you can delete it. |
| **DEVICES** | <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> | Displays the list of devices for this virtual machine. See xxx |
| **CLONE** | <span class="iconify" data-icon="cil:clone"></span> | Makes an exact copy or *clone* of the VM that you can select and edit. A **Name** dialog displays where you can enter a name for the cloned VM. Naming the clone VM is optional. The cloned VM displays on the Virtual Machines list with the extension **_clone0**. if you clone the same VM again the extension for the second clone is **clone1**. |
| **VNC** | <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> | Opens a **noVCN** window that allows you to connect to a  |
| **SERIAL** | <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> | Opens the TrueNAS **Shell** screen. |
{{< /truetable >}}

{{< hint type=note >}}
The **STOP** button and the system **State** toggle both try to send an ACPI power-down command to the VM operating system. Sometimes the commands time out, so it is better to use the **POWER OFF** button instead.
{{< /hint >}}

{{< taglist tag="corejailspluginsvm" limit="10" >}}
