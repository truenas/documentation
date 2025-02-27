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

## Instances Screen

The **Instances** screen allows users to add, edit, or manage virtual machines (VMs) and Linux containers.

The first time you go to **Instances**, the screen header shows a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status.
You must choose the pool instances use before you can create an instance. See [**Global Settings**](#global-settings) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

The **Instances** screen displays **No Instances** before you create the first instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenNoInstances.png" alt="Instances Screen No Instances" id="Instances Screen No Instances" >}}

The **Configuration** dropdown menu includes **[Global Settings](#global-settings-screen)** and **[Manage Volumes](#manage-volumes-screen)**.

**Create New Instance** at the top right of the screen opens the **[Create Instance](#create-instance-wizard-screens)** wizard.

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
| **IPv4 Network** | Displays when **Bridge** is set to **Automatic**. Enter the IPv4 address and subnet to use for the bridge or leave empty to allow TrueNAS to use the default address. |
| **IPv6 Network** | Displays when **Bridge** is set to **Automatic**. Enter the IPv6 address and subnet to use for the bridge or leave empty to allow TrueNAS to use the default address. |
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

### Environment

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

### Network

The **Network** settings allow you to configure how the instance connects to the host and external networks, Options include the default network bridge, an existing bridge interface, or a MACVLAN.

See [Accessing NAS from VMs and Containers]({{< relref "/SCALETutorials/Network/ContainerNASBridge.md" >}}) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

{{< expand "Network Settings" "v" >}}

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use default network settings** | Select to use default network settings to connect the instance to the host using the automatic bridge defined in [Global Settings](#global-settings). Selected by default. Deselect to display the **Bridged NICs** (if available) and **Macvlan NICs** settings. |
| **Bridged NICs** | Select an existing bridge on the TrueNAS host to connect to the instance. Displays when one or more existing bridge interface(s) is available. |
| **Macvlan NICs** | Select an existing interface to create a virtual network interface based on the selected interface, assigning it a unique MAC address to allow the instance to appear as a separate device on the network. |
{{< /truetable >}}
{{< include file="/static/includes/MacvlanHost.md" >}}
{{< /expand >}}

### USB Devices

The USB Devices settings allow you to attach a USB device directly to an instance, enabling it to access the device as if it were physically connected.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceUSB.png" alt="USB Devices" id="USB Devices" >}}

Select one or more device(s) to attach.

### PCI Passthrough

The **PCI Passthrough** settings allow you to assign a physical PCI device, such as a network card or GPU, directly to a VM, enabling it to use the device as if it were physically attached.
This setting is only available for VMs and cannot be used with containers.

The selected PCI device(s) must not be in use by the host and must not share an IOMMU group with other devices that the host requires.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstancePCI.png" alt="PCI Passthrough" id="PCI Passthrough" >}}

Click **Add PCI Passthrough** to open the [**Add PCI Passthrough Device**](#add-pci-passthrough-device-screen) screen and select the device(s) to attach.

### VNC

The **VNC** settings allow you to enable VNC access for a VM, configure the VNC port, and set a VNC password for remote access.
This setting is only available for VMs and cannot be used with containers.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceVNC.png" alt="VNC Settings" id="VNC Settings" >}}

{{< expand "VNC Settings" "v" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable VNC** | Select to allow remote desktop access via VNC. |
| **VNC Port** | Enter a port number to configure the port on which the VM's VNC server listens for connections. |
| **VNC Password** | Enter a password to authenticate VNC access to the VM. Note: A VNC password is not cryptographically secure. You should not rely on it as a single authentication mechanism for your VMs. |
{{< /truetable >}}
{{< /expand >}}

## Instances Table

The **Instances** table populates a row for each configured instance that shows the name, type, current state, and options to restart or stop the instance.
Stopped instances show the option to start the instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Instances Screen - Populated" id="Instances Screen - Populated" >}}

Click on an instance to populate the **Details for *Instance*** [widgets](#instances-widgets) with information and configuration options for that instance.

Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running instance.
Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped instance.

**Search** above the **Instances** table allows entering the name of an instance to locate a configured instance.

Selecting the checkbox to the left of **Name** selects all configured instances and shows the [**Bulk Actions**](#bulk-actions) dropdown list.
Selecting the checkbox on an instance row also shows the [**Bulk Actions**](#bulk-actions) dropdown list.

### Bulk Actions

The **Bulk Action** dropdown list allows you to apply actions to one or more instances on your system.
Select the checkbox to the left of **Name** to show the **Bulk Actions** dropdown menu.

Menu options are **Start All Selected**, **Stop All Selected**, and **Restart All Selected**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

## Instances Widgets

Configured instances have a set of widgets on the **Instances** screen.
Click on an instance row to highlight it and view the information widgets for that instance.
Information in the widgets changes based on the row highlighted in the **Instances** table.

### General Info Widget

The **General Info** widget shows the status and configured autostart, base image, CPU, memory, and secure boot settings for the instance.
It includes the **Edit** and **Delete** buttons for the instance.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

**[Delete](#delete-instances)** opens the **Delete** dialog.

**[Edit](#edit-instance-screen)** opens an **Edit Instance: *Instance*** configuration screen populated with editable settings also found on the install wizard screen for the instance.

#### Delete Instances

The **Delete** dialog asks for confirmation to delete the selected instance.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Instance Dialog" id="Delete Instance Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### Devices Widget

The **Devices** widget displays all USB, GPU, Trusted Platform Module (TPM), and PCI Passthrough devices attached to the instance.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="Devices Widget" id="Devices Widget" >}}

**Add** opens a flyout menu containing available options for **USB Devices**, **GPUs**, **TPM**, and **PCI Passthrough** devices.
Select a device to attach it to the instance.

**Add Device** under **PCI Passthrough** opens the [**Add PCI Passthrough Device**](#add-pci-passthrough-device-screen) screen.

### Disks Widget

The **Disks** widget displays the storage devices attached to the instance, showing their corresponding paths.
It allows you to manage the disks, including adding new ones or modifying existing ones.

{{< trueimage src="/images/SCALE/Virtualization/DisksWidget.png" alt="Disks Widget" id="Disks Widget" >}}

**Add** opens the [**Add Disk**](#addedit-disk-screen) screen for adding new disks to the instance.

For existing disks, the actions menu (<span class="material-icons">more_vert</span>) includes options to [**Edit**](#addedit-disk-screen) or [**Delete**](#delete-disks) the disk.

#### Add/Edit Disk Screen

The **Add/Edit Disk** screen allows you to configure a new disk or modify an existing one attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen" id="Add Disk Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | Enter or browse to select the host source path for the disk. To create a new dataset, enter or browse to select the parent path, then click **Create Dataset**, enter a name for the new dataset, and click **Create**. |
| **Destination**| Enter the destination path to mount the disk in the instance. |
{{< /truetable >}}

Click **Save** to apply changes.

#### Delete Disks

The **Delete Item** dialog asks for confirmation to delete the selected disk.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

<!--

### NIC Widget

### Proxies Widget
-->

### Idmap Widget

(Containers Only) The **Idmap** widget displays the user ID (UID) and group ID (GID) mappings used by the instance for ID translation between the host and the container or VM.
It provides details such as the **Host ID**, **Maprange**, and **NS ID** for both UIDs and GIDs.

{{< trueimage src="/images/SCALE/Virtualization/IdmapWidget.png" alt="Idmap Widget" id="Idmap Widget" >}}

* **Host ID**: Shows the starting ID used by the host for mapping to the instance's IDs.
* **Maprange**: Indicates the range of IDs that the host allocates for the instance.
* **NS ID**: Represents the namespace ID used for the mapping.

For example, if the **Host ID** is `2147000001` and the **Maprange** is `458752`, the container UID 0 (root) is mapped to the host UID `2147000001`.

This widget allows you to view the configured ID mapping settings for the instance, which ensures proper isolation and user/group identity management between the host and the instance.

<!--

### Tools Widget

### Metrics Widget

-->

<!--
## Edit Instance Screen

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

-->

## Add PCI Passthrough Device Screen

The **Add PCI Passthrough Device** screen displays the physical PCI devices available to attach to an instance.
Use PCI passthrough to assign a physical PCI device, such as a network card or GPU, directly to a VM, enabling it to use the device as if it were physically attached.

The selected PCI device(s) must not be in use by the host and must not share an IOMMU group with other devices that the host requires.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

To  filter the available devices, enter all or part of a device type or label in **Search Devices** or use the **Type** dropdown.

Click **Select** to attach the selected device.
