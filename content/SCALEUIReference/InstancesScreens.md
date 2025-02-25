---
title: "Instances"
description: "Provides information on the Instances screens and settings to add containers or virtual machines (VMs) to your TrueNAS system."
weight: 80
aliases:
- /scaleuireference/virtualizationscreens/
tags:
 - vm
 - gpu
 - storage provisioning
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

The **Instances** screen allows users to add, edit, or manage virtual machines (VMs) and Linux containers.

The first time you go to **Instances**, the screen header shows a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status.
You must choose the pool instances use before you can create an instance. See [**Global Settings**](#global-settings) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

The **Instances** screen displays **No Instances** before you create the first instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenNoInstances.png" alt="Instances Screen No Instances" id="Instances Screen No Instances" >}}

The **Configuration** dropdown menu includes **[Global Settings](#global-settings-screen)** and **[Manage Volumes](#manage-volumes-screen)**.

**Create New Instance** at the top right of the screen opens the **[Create Instance](#create-instance-wizard-screens)** wizard.

The screen displays a list of VMs configured on the TrueNAS system.
The **State** toggle displays and changes the state of the VM.
**Autostart**, when selected, automatically starts the VM if the system reboots, otherwise you must manually start the VM.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Instances Screen" id="Instances Screen" >}}

Click on an instance to populate the **Details for *Instance*** widgets with information and configuration options for that instance.
Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running instance.
Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped instance.

## Configuration Menu

**Configuration** on the **Instances** screen header displays service-level settings that apply to all instances.

* **Global Settings** opens the **[Global Settings](#global-settings)** screen.
* **Manage Volumes** opens the [**Volumes**](#volumes) screen.

{{< trueimage src="/images/SCALE/Virtualization/InstancesConfigurationMenu.png" alt="Configuration Menu" id="Configuration Menu" >}}

### Global Settings

**Global Settings** opens the **Global Settings** screen showing global options that apply to all instance, including selecting the storage pool for instances and network settings.

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Storage Settings

The **Pool** dropdown list shows a list of available pools on the system.
Select a pool for instances.

The first time you open the **Instances** screen, the header shows a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status.
**Select Pool** at the top right of the screen opens the **Global Settings** screen.
Select the pool from the dropdown list, then click **Save**.
This starts the instances service.

To unset an active pool and stop the instances service, click **Configuration > Global Settings** and select **[Disabled]** from the **Pool** dropdown list.
 on the **Settings** menu opens the **Unset Pool** dialog. Click **Unset** to unset the pool and turn off the application service.
Click **Save**.
When complete, the **Instances** screen displays the **No instances** and <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** statuses.

#### Network Settings

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| Bridge | Select **Automatic** to use the default network bridge for communication between instances and the TrueNAS host or use the dropdown list to select an existing bridge. See [Accessing NAS from VMs and Containers]({{< relref "/ScaleTutorials/Network/ContainerNASBridge.md" >}}) for more information. |
| **IPv4 Network** | Displays when **Automatic** is selected for **Bridge**. Enter the IPv4 address and subnet to use for the bridge or leave empty to allow TrueNAS to use the default address. |
| **IPv6 Network** | Displays when **Automatic** is selected for **Bridge**. Enter the IPv6 address and subnet to use for the bridge or leave empty to allow TrueNAS to use the default address. |
{{< /truetable >}}

### Volumes

The **Volumes** screen lists all <file>.iso</file> images currently uploaded to the instances service.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

**Upload New Image** opens a file browser to select an image from the client computer and upload it to TrueNAS for use in instances.
Select the image and then open it.
An **Uploading Image** dialog displays.
When complete, the new image displays on the **Volumes** list.

Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on an image row to delete that image.
A **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

Select **Confirm** and then click **Continue** to delete the image.
To prevent accidental deletion of an in-use image, the delete icon is not selectable for active images.

## Create Instance Wizard

The **Create Instance** configuration wizard displays all settings to set up a new container or virtual machine.

### Instance Configuration

The **Instance Configuration** settings specify the instance name, virtualization method or type, and operating system image.

{{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationContainer.png" alt="Instance Configuration - Container" id="Instance Configuration - Container" >}}

{{< expand "Instance Configuration Settings - Container" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the instance. |
| **Virtualization Method** | Required. Select **Container** to create a lightweight Linux container that shares the TrueNAS OS kernel. |
| **Image** | **Browse Catalog** opens the **Select Image** screen with available Linux image choices from [linuxcontainers.org](https://linuxcontainers.org/). Search or browse to locate your desired image and click **Select**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Instance Configuration Settings - VM" "v" >}}

{{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationVM.png" alt="Instance Configuration - VM" id="Instance Configuration - VM" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the instance. |
| **Virtualization Method** | Required. Select **VM** to create a fully isolated virtual machine using any operating system. |
| **VM Image Options** | (Shows when **Virtualization Method** is set to **VM**)  |
| **Use a Linux image** | Select to choose a Linux image from [linuxcontainers.org](https://linuxcontainers.org/). **Browse Catalog** opens the **Select Image** screen with available image choices. Search or browse to locate your desired image and click **Select**. |
| **Use an ISO image** | Select to use ISO image previously uploaded to the instances service or to upload a new one. **Select ISO** opens the **Volumes** screen. Locate your desired image and click **Select** or use **Upload New Image**. See [Volumes](#volumes) for more information. |
| **Use zvol with previously installed OS** | Select to create a new instance using an existing VM storage volume. Enter or browse to select the zvol on the TrueNAS system.<br><br>Use this option to migrate a previously configured VM, such as after updating from TrueNAS 24.10. See [Migrating Virtual Machines](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/#migrating-virtual-machines) from the 25.04 release notes for more information. |
{{< /truetable >}}
{{< /expand >}}

### CPU & Memory

The **CPU & Memory** settings specify the number of virtual CPU cores to allocate to the virtual machine and memory size.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory" id="CPU & Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

## Environment

The Environment settings allow you to configure optional additional environment variables for a Linux container to run on boot or execute.
Environment variables are not supported for VMs.

Click Add to display a set of environment fields.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

{{< expand "Environment Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| Name | Enter the name of the environment variable to set (e.g., `LANG`). |
| Value | Enter the value to assign to the environment variable (e.g., `en_US.UTF-8`). |
{{< /truetable >}}
{{< /expand >}}

### Disks

The **Disks** settings allow mounting storage volumes to an instance.
Options are to create a new zvol on an existing dataset or to use an existing zvol.
For VMs, you can also specify the size of the root disk.

Click **Add** to configure to create or mount a disk.
Click **Add** again to create or mount additional disks.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksVM.png" alt="Disks - VM" id="Disks - VM" >}}

{{< expand "Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Root Disk Size (in GiB)** | (Required for VMs only) Enter a plain integer to configure the size of the VM root disk (default 10). |
| **Source** | (Required) Displays after clicking **Add** in **Disks**. To create a new zvol, enter a path or browse to select a parent dataset from the dropdown list of datasets on the system. Then click **Create Dataset**, enter a name for the new zvol in the **Create Dataset** window, and click **Create**. <br><br> To use an existing zvol, select an existing zvol from the dropdown list under <file>/dev/zvol/</file>. |
| **Destination** | (Required for containers only) Enter the filesystem path to mount the disk at in the container. |
{{< /truetable >}}
{{< /expand >}}

### Proxies

The **Proxies** settings allow you to forward network connections between the host and the instance. This enables traffic directed to a specific address on the host to be routed to an address inside the instance, or vice versa, allowing the instance to connect externally through the host.

Click **Add** to display a set of proxy configuration settings.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceProxies.png" alt="Proxies" id="Proxies" >}}

{{< expand "Proxies Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Protocol** | Select the connection protocol for the TrueNAS host. Options are **TCP** or **UDP**. |
| **Host Port** | Enter the TrueNAS host port to map to the instance port on the container or VM, for example *3600*. |
| **Instance Protocol** | Select the connection protocol for the container or VM. Options are **TCP** or **UDP**. |
| **Instance Port** | Enter the port number within the container or VM, for example *80*. |
{{< /truetable >}}
{{< /expand >}}

<!--
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

Click **Save** to add the VM to the **Instances** screen. Click **Back** to return to the previous screens to make changes.

## Virtual Machine Details Screen

Expand any VM on the **Instances** screen to show the details and options for a VM.
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

Naming the clone VM is optional. The cloned VM displays on the **Instances** list with the extension **_clone0**.
If you clone the same VM again the extension for the second clone is **clone1**.

### VM Serial Shell Screen

Click **Serial Shell** to open the **VM Serial Shell** screen where you can enter commands for the selected virtual machine.

{{< trueimage src="/images/SCALE/Virtualization/VMSerialShellScreen.png" alt="Serial Shell" id="Serial Shell" >}}

Click **Instances** in the header to return to the **Virtual Machine** screen.

## Edit Virtual Machine Screen

The **Edit VM** screen settings are a subset of those found on the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** screens.
It only includes the general settings found on the wizard **Operating System** screen, **CPU & Memory**, and **GPUs** screen settings.
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
Click anywhere on the VM entry on the **Instances** widget to expand it.
Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the devices screen associated with the VM.
From this screen, click the <span class="material-icons">more_vert</span> icon at the right of the display device and select **Edit** to open the **Edit Display Device** screen.
Use the **Bind** dropdown to select a new IP address.
{{< /expand >}}

### Edit CPU & Memory Settings

The **CPU & Memory** settings on the **Edit VM** screen are the same as those in the **Create Virtual Machine** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditVMCPUandMemory.png" alt="Edit CPU & Memory" id="Edit CPU & Memory" >}}

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
