---
title: "Instances"
description: "Provides information on the Instances screens and settings to add containers or virtual machines (VMs) to your TrueNAS system."
weight: 80
aliases:
 - /scaleuireference/virtualizationscreens/
 - /scale/scaleuireference/virtualizationscreens/
tags:
 - vm
 - container
 - instances
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

## Instances Screen

The **Instances** screen allows users to add, edit, or manage virtual machines (VMs) and Linux containers.

The screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for instances is selected.
See [**Global Settings**](#global-settings) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

The **Instances** screen displays **No Instances** before you create the first instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenNoInstances.png" alt="Instances Screen No Instances" id="Instances Screen No Instances" >}}

The **Configuration** dropdown menu includes **[Global Settings](#global-settings)**, **[Manage Volumes](#manage-volumes)**, and [**Map User/Group IDs**](#map-user-and-group-ids) options.

**Create New Instance** at the top right of the screen opens the **[Create Instance](#create-instance-wizard-screens)** wizard.

## Configuration Menu

**Configuration** on the **Instances** screen header displays service-level settings that apply to all instances.

* **Global Settings** opens the **[Global Settings](#global-settings)** screen.
* **Manage Volumes** opens the [**Volumes**](#manage-volumes) screen.
* **Map User/Group IDs** opens the [**Map User And Group IDs**](#map-user-and-group-ids) screen.

### Global Settings

**Global Settings** opens the **Global Settings** screen showing global options that apply to all instances, including selecting the storage pool for instances and network settings.

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Storage Settings

The **Pool** dropdown list shows a list of available pools on the system.
**[Disabled]** deactivates the pool and disables the instances service.

The screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for instances is selected.

#### Default Network Settings

**Default Network** settings configure global networking defaults for the instances service.

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Bridge** | Specifies the network bridge.  **Automatic** uses the default network bridge for communication between instances and the TrueNAS host. The dropdown list option shows existing bridges. See [Accessing NAS from VMs and Containers]({{< ref "/SCALE/SCALETutorials/Network/ContainerNASBridge" >}}) for more information. |
| **IPv4 Network** | Specifies the IPv4 address for the bridge specified when **Bridge** is set to **Automatic**. Enter the IPv4 address and subnet (e.g., *192.168.1.0*/*24*) for the instances to use or leave empty to allow TrueNAS to use the default address. |
| **IPv6 Network** | Specifies the IPv6 address for the bridge specified when **Bridge** is set to **Automatic**. Enter the IPv6 address and subnet (e.g., *fd42:96dd:aef2:483c::1*/*64*) for the instances to use or leave empty to allow TrueNAS to use the default address. |
{{< /truetable >}}

### Manage Volumes

The **Volumes** screen lists all volumes currently configured for the instances service.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

**Create Volume** opens the [**Create New Volume**](#create-volumes) dialog to configure a new instances volume.

**Import Zvols** opens the [**Import Zvol**](#import-zvol) dialog to import an existing Zvol as an instances volume.

**Upload ISO** opens a file browser to select an <file>.iso</file> file from the client computer and upload it to TrueNAS for use in instances.

{{< expand "Image Filename Requirements" "v" >}}
{{< include file="/static/includes/InstanceImageFilenames.md" >}}
{{< /expand >}}

#### Create Volumes

**Create Volume** on the **Volumes** screen opens the **Create New Volume** dialog.

{{< trueimage src="/images/SCALE/Virtualization/InstancesCreateVolume.png" alt="Create New Volume Dialog" id="Create New Volume Dialog" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Name** | Name of the volume. Enter a name for the volume. |
| **Size** | Size of the volume. Enter a size for the volume, for example *1 GiB*. |
{{< /truetable >}}

**Create** creates the new volume.

#### Import Zvol

**Import Zvols** on the **Volumes** screen opens the **Import Zvol** dialog.

{{< trueimage src="/images/SCALE/Virtualization/InstanceImportZvol.png" alt="Import Zvol Dialog" id="Import Zvol Dialog" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Select Zvols** | Specifies the Zvol to import. Enter or browse to select an existing Zvol. |
| **Clone** | Clones and promotes a temporary snapshot of the zvol into a custom storage volume. This option retains the original zvol while creating an identical copy as an instances volume. |
| **Move** | Relocates the existing zvol to the ix-virt dataset as a volume. |
{{< /truetable >}}

#### Delete Volumes

**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on an image row deletes that image.
A **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

**Confirm** and then **Continue** deletes the image.
Delete is disabled for active images.

### Map User And Group IDs

The **Map User and Group IDs** screen allows users to manually configure UID and GID mappings inside instances.

Existing mappings are shown in a table containing the group or user name, host ID, and instance ID.
**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row deletes that mapping.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

The **Users** or **Groups** tabs display mappings for individual user or group accounts, respectively.

Existing mappings are shown in a table containing the group or user name, host ID, and instance ID.
**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row deletes that mapping.

{{< expand "Add New Mapping Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User/Group** | Specifies the user or group account name. Begin typing an account name to search for it or select it from the dropdown menu. |
| **Map to the same UID/GID in the instance** | (Default) Specifies the host ID-to-instance user or group ID mapping. Select to map the host ID to the same ID in instances. |
| **Instance UID/GID** | (Displays when **Map to the same UID/GID in the instance** is not selected)<br> Specified the user or group ID. Enter the ID number (e.g., *1000*) to map the host user or group ID to in instances. |
{{< /truetable >}}
{{< /expand >}}

**Set** creates the mapping.
Changes take effect immediately, but instances might require a restart to reflect the changes.

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

{{< include file="/static/includes/InstanceNameRequirements.md" >}}

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
| **Upload ISO, import a zvol or use another volume** | Sets the method to use to for the storage option. Select to create the VM using an <file>.iso</file> image, import a zvol from a previously installed VM, or use an existing instances volume. **Select ISO** opens the **Volumes** screen. See [**Volumes**](#manage-volumes) for more information. |
{{< /truetable >}}

{{< include file="/static/includes/InstanceNameRequirements.md" >}}

{{< /expand >}}

### CPU & Memory

The **CPU & Memory** settings specify the number of virtual CPU cores to allocate to the virtual machine and memory size.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory" id="CPU & Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

### Environment

The **Environment** settings configure optional environment variables to run on boot or execute.
These settings are only available for containers and cannot be used with VMs.

**Add** displays a set of environment fields.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

{{< include file="/static/includes/InstanceEnvironmentSettings.md" >}}

### Disks

The **Disks** settings allow mounting storage volumes to an instance.
Container options include creating a new dataset or using an existing one.
VMs use the [**Volumes**](#manage-volumes) screen to select or create a new volume.
VMs must specify the I/O bus and size of the root disk.

**Add** displays a set of fields to create or mount a disk.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksVM.png" alt="Disks - VM" id="Disks - VM" >}}

{{< expand "Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Root Disk I/O Bus** | (Required for VMs only) Set the root disk I/O bus type to the option that best suits system needs. Options are:<br><ul><li>**NVMe** – Ideal for high-performance storage with faster read and write speeds.<br><li>**Virtio-BLK** – Efficient for virtualized environments, offering direct block device access with lower overhead.<br><li>**Virtio-SCSI** – Flexible and scalable, supporting advanced features like hot-swapping and multiple devices.</ul> |
| **Root Disk Size (in GiB)** | (Required for VMs only) Enter a plain integer to configure the size of the VM root disk (default 10). |
| **Source** | (Required) Displays after clicking **Add** in **Disks**. Define an existing dataset or create a new dataset using the **Create Dataset** option. Creating a dataset requires entering a path or browsing to select a parent dataset from the dropdown list of datasets on the system. Enter a name for the new dataset in the **Create Dataset** window. **Create** adds the dataset. |
| **Destination** | (Required for containers only) Specifies the file system path to mount the disk in the container, for example */media* or */var/lib/data*. |
| **I/O Bus** | (Required for VMs only) Sets the disk I/O bus type to what best suits system needs. Options are **NVMe**, **Virtio-BLK**, or **Virtio-SCSI**. |
{{< /truetable >}}
{{< /expand >}}

### Proxies

The **Proxies** settings allow you to forward network connections between the host and the instance.
This routes traffic from a specific address on the host to an address inside the instance, or vice versa, allowing the instance to connect externally through the host.
These settings are only available for containers and cannot be used with VMs.

**Add** displays a set of proxy configuration settings.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceProxies.png" alt="Proxies" id="Proxies" >}}

{{< expand "Proxies Settings" "v" >}}
{{< include file="/static/includes/InstanceProxySettings.md" >}}
{{< /expand >}}

### Network

The **Network settings** configure how the instance connects to the host and external networks.
Options include the default network bridge, an existing bridge interface, or a MACVLAN.

See [Accessing NAS from VMs and Containers]({{< ref "/SCALE/SCALETutorials/Network/ContainerNASBridge" >}}) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

{{< expand "Network Settings" "v" >}}

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use default network settings** | Select to use default network settings to connect the instance to the host using the automatic bridge defined in [Global Settings](#global-settings). Selected by default. Disable to display the **Bridged NICs** (if available) and **Macvlan NICs** settings. |
| **Bridged NICs** | Select an existing bridge on the TrueNAS host to connect to the instance. Displays when one or more existing bridge interface(s) is available. |
| **Macvlan NICs** | Select an existing interface to create a virtual network interface based on it, assigning a unique MAC address so the instance appears as a separate device on the network. |
{{< /truetable >}}
{{< include file="/static/includes/MacvlanHost.md" >}}
{{< /expand >}}

### USB Devices

**USB Devices** displays a list of available devices to attach to an instance, allowing the device to function as if physically connected.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceUSB.png" alt="USB Devices" id="USB Devices" >}}

### GPU Devices

**GPU Devices** displays available GPU devices to attach to an instance, enabling it to utilize hardware acceleration for graphics or computation tasks.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceGPU.png" alt="GPU Devices" id="GPU Devices" >}}

### PCI Passthrough

**PCI Passthrough** settings enable assigning a physical PCI device, such as a network card or controller, directly to a VM, allowing it to use the device as if physically attached.
These settings are only available for VMs and cannot be used with containers.

The selected PCI device(s) cannot be in use by the host or share an IOMMU group with devices the host requires.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstancePCI.png" alt="PCI Passthrough" id="PCI Passthrough" >}}

**Add PCI Passthrough** opens the [**Add PCI Passthrough Device**](#add-pci-passthrough-device-screen) screen.

### VNC

The **VNC** settings allow you to enable VNC access for a VM, configure the VNC port, and set a VNC password for remote access.
These settings are only available for VMs and cannot be used with containers.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceVNC.png" alt="VNC Settings" id="VNC Settings" >}}

{{< include file="/static/includes/InstanceVNCSettings.md" >}}

### Security

The **Security settings** control various system security features, including Trusted Platform Module (TPM) and Secure Boot options.
These options help to ensure a secure environment by enabling advanced hardware-based security features during system startup and operation.
These settings are only available for VMs and cannot be used with containers.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceSecurity.png" alt="Security Settings" id="Security Settings" >}}

{{< expand "Security Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Add Trusted Platform Module (TPM)** | Enables TPM, a hardware-based security feature that protects sensitive data and ensures integrity. Adds a Trusted Platform Module (TPM) device to the VM. |
| **Secure Boot** | Sets boot to ensure that only trusted, signed software is loaded during the system boot process. Can be incompatible with some images. |
{{< /truetable >}}

{{< /expand >}}

## Instances Table

The **Instances** table lists each configured instance, displaying its name, type, current state, and options to restart or stop it.
Stopped instances show the option to start the instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Instances Screen - Populated" id="Instances Screen - Populated" >}}

The **Details for *Instance*** [widgets](#instances-widgets) show information and management options for the selected instance.

<i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> restarts or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> stops a running instance.

The **Stop Options** window defines when the Instance stops, immediately or after one of 30 seconds, 1 minute, or 5 minutes occurs.

{{< trueimage src="/images/SCALE/Virtualization/InstanceStopOptions.png" alt="TrueNAS Instance Stop Options Dropdown with Options" id="Instance Stop Options" >}}

<i class="material-icons" aria-hidden="true" title="Start">play_circle</i> starts a stopped instance.

**Search** above the **Instances** table allows entering the name of an instance to locate a configured instance.

The checkbox on each instance row shows the [**Bulk Actions**](#bulk-actions) dropdown.

### Bulk Actions

The **Bulk Actions** dropdown list allows you to apply actions to one or more instances on your system.
Options are **Start All Selected**, **Stop All Selected**, and **Restart All Selected**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

## Instances Widgets

The **Details for *Instance*** [widgets](#instances-widgets) display information and configuration options for the selected instance.

### General Info Widget

The **General Info** widget displays the instance status, autostart setting, base image, CPU, memory, and secure boot configuration.
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

**Add** opens a list of available **USB Devices**, **GPUs**, **TPM**, and **PCI Passthrough** devices.

**Add Device** under **PCI Passthrough** opens the [**Add PCI Passthrough Device**](#add-pci-passthrough-device-screen) screen.

### Disks Widget

The **Disks** widget shows the storage devices attached to the instance, along with their associated paths.
It allows you to manage the disks, including adding new ones or modifying existing ones.

{{< trueimage src="/images/SCALE/Virtualization/DisksWidget.png" alt="Disks Widget" id="Disks Widget" >}}

**Add** opens the [**Add Disk**](#addedit-disk-screen) screen for adding new disks to the instance.

For existing disks, the <span class="material-icons">more_vert</span> actions include options to [**Edit**](#addedit-disk-screen) or [**Delete**](#delete-disk-mounts) the disk mount.

For VMs, the widget displays the current root disk size.
The root disk stores the OS and serves as the boot disk for the VM.
**Change** opens the [**Change Root Disk Setup**](#change-root-disk-setup) dialog.

#### Add/Edit Disk Screen

The **Add/Edit Disk** screen allows you to configure a new disk or modify an existing one attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreenVM.png" alt="Add Disk Screen - VM" id="Add Disk Screen - VM" >}}

{{< expand "Add/Edit Disk Settings - VM" "v" >}}
{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Volume** | **Select Volume** opens the [**Volumes**](#manage-volumes) screen to create or select a volume to attach. |
| **Boot Priority** | Sets the order in which to boot disks. By default, the root disk is set to 1, which is the highest priority. |
| **I/O Bus** | Sets the I/O bus for the disk. Options are **NVMe**, **Virtio-BLK**, and **Virtio-SCSI**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Add/Edit Disk Settings - Container" "v" >}}
{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen - Container" id="Add Disk Screen - Container" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | Enter or browse to select the host source path for the disk. For a new dataset, enter or browse to select the parent path. |
| **Destination**| Enter the destination path to mount the disk in the instance. |
{{< /truetable >}}
{{< /expand >}}

**Save** applies changes.

#### Delete Disk Mounts

The **Delete Item** dialog asks for confirmation to delete the selected disk mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

#### Change Root Disk Setup

The **Change Root Disk Setup** dialog allows you to configure the size of the disk a VM stores its OS on and boots from and change the root disk I/O bus.

{{< trueimage src="/images/SCALE/Virtualization/IncreaseRoot.png" alt="Increase Root Disk Size Widget" id="Increase Root Disk Size Widget" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Root Disk Size (in GiB)** | Increases the size of the VM root disk. Enter a new root disk size in GiB, such as *20*. |
| **Root Disk I/O Bus** | Sets the communication pathway type for the root disk. Options are **NVMe**, **Virtio-BLK**, and **Virtio-SCSI**. |
{{< /truetable >}}


**Save** applies changes.

### NIC Widget

The **NIC Widget** displays the network interfaces (NICs) attached to the instance, along with their names and types.
It allows you to add new NICs and manage existing ones.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Widget" id="NIC Widget" >}}

**Add** opens a menu with available NIC choices, allowing you to select and attach a new NIC to the instance.

For existing NICs, the <span class="material-icons">more_vert</span> actions menu allows you to [delete](#delete-nics) the NIC.

#### Delete NICs

The **Delete Item** dialog asks for confirmation to delete the selected NIC.

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### Proxies Widget

The **Proxies** widget displays the network proxy settings configured for the instance.
It allows you to manage these settings, including adding, editing, or removing proxies.
These settings are only available for containers and cannot be used with VMs.

{{< trueimage src="/images/SCALE/Virtualization/ProxiesWidget.png" alt="Proxies Widget" id="Proxies Widget" >}}

**Add** opens the [**Add Proxy**](#addedit-proxy-screen) screen to configure a new proxy for the instance.

For existing proxies, the <span class="material-icons">more_vert</span> actions menu includes options to [**Edit**](#addedit-proxy-screen) or [**Delete**](#delete-proxies) the proxy.

#### Add/Edit Proxy Screen

The **Add/Edit Proxy** screen allows you to configure or modify a proxy setting attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddProxyScreen.png" alt="Add Proxy Screen" id="Add Proxy Screen" >}}

{{< include file="/static/includes/InstanceProxySettings.md" >}}

**Save** applies changes.

#### Delete Proxies

The **Delete Item** dialog asks for confirmation to delete the selected proxy configuration.

{{< trueimage src="/images/SCALE/Virtualization/DeleteProxyDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### Idmap Widget

The **Idmap** widget shows the user ID (UID) and group ID (GID) mappings used by the instance to translate IDs between the host and the container or VM.
It provides details such as the **Host ID**, **Maprange**, and **NS ID** for both UIDs and GIDs.
These settings are only available for containers and cannot be used with VMs.

{{< trueimage src="/images/SCALE/Virtualization/IdmapWidget.png" alt="Idmap Widget" id="Idmap Widget" >}}

* **Host ID** shows the starting ID used by the host for mapping to the instance IDs.
* **Maprange** indicates the range of IDs that the host allocates for the instance.
* **NS ID** represents the namespace ID used for the mapping.

For example, if the **Host ID** is `2147000001` and the **Maprange** is `458752`, the container UID 0 (root) is mapped to the host UID `2147000001`.
This ensures proper isolation and user/group identity management between the host and the instance.

### Tools Widget

The **Tools** widget provides quick access to various tools and utilities for managing your instance.
You can open a shell, console, or VNC session directly from this widget.

{{< trueimage src="/images/SCALE/Virtualization/ToolsWidget.png" alt="Tools Widget - VM" id="Tools Widget" >}}

**Shell** opens an **Instance Shell** session for command-line interaction with the instance.
  
**Serial Console** (VM only) opens an **Instance Console** session to access the system console for the instance.

**VNC** (VM only) opens a VNC connection using your preferred client.
It uses a VNC URL scheme (for example, `vnc://hostname.domain.com:5930`) to launch the session directly in the application.
If your environment does not support VNC URLs, you can manually connect using a VNC client by entering the host name or IP address followed by the port number without `vnc://` (for example, `hostname.domain.com:5930` or `IP:5930`).

### Metrics Widget

The **Metrics** widget displays real-time graphs that monitor instance performance, including CPU usage, memory usage, and disk I/O pressure.

{{< trueimage src="/images/SCALE/Virtualization/MetricsWidget.png" alt="Metrics Widget" id="Metrics Widget" >}}

**CPU (%)** shows the percentage of CPU usage over time.
  
**Memory (MiB)** displays the memory usage in MiB over time.

**Disk I/O Full Pressure (%)** tracks the disk input/output pressure as a percentage over time.

## Edit Instance Screen

The **Edit Instance: *Instance*** screen settings are a subset of those found on the **[Create Instance Wizard](#create-instance-wizard)** screens.
It includes the general **Instance Configuration** and **CPU and Memory** settings for all instances.
Additionally, containers include **Environment** settings.
VMs include **VNC** and **Security** settings.
To edit device, disk, network, or proxy settings, use the [Instances Widgets](#instances-widgets) on the **Instances** screen.

### Edit Instance Configuration Settings

The **Instance Configuration** settings on the **Edit** screen allow you to modify basic parameters for the instance, such as startup behavior.

{{< trueimage src="/images/SCALE/Virtualization/EditInstanceConfiguration.png" alt="Edit Instance Configuration" id="Edit Instance Configuration" >}}

**Autostart** automatically starts the instance when the system boots.

### Edit CPU and Memory Settings

The **CPU & Memory** settings on the **Edit** screen are the same as those in the **Create Instance** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditCPUandMemory.png" alt="Edit CPU & Memory" id="Edit CPU & Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

### Edit VNC Settings

The **VNC** settings on the **Edit** screen are the same as those in the **Create Instance** wizard.
These settings are only available for VMs and cannot be used with containers.

{{< trueimage src="/images/SCALE/Virtualization/EditVNC.png" alt="Edit VNC" id="Edit VNC" >}}

{{< include file="/static/includes/InstanceVNCSettings.md" >}}

### Edit Environment Settings  

The **Environment** settings on the **Edit** screen are the same as those in the **Create Instance** wizard.
These settings are only available for containers and cannot be used with VMs.

**Add** displays a set of environment fields.

{{< trueimage src="/images/SCALE/Virtualization/EditEnvironment.png" alt="Environment Settings" id="Environment Settings" >}}  

{{< include file="/static/includes/InstanceEnvironmentSettings.md" >}}

### Edit Security Settings  

The **Security** settings on the **Edit** screen allow you to enable Secure Boot for the instance, ensuring that only trusted, signed software runs during the startup process.
These settings are only available for VMs and cannot be used with containers.  

{{< trueimage src="/images/SCALE/Virtualization/EditSecurity.png" alt="Security Settings" id="Security Settings" >}}  

{{< expand "Security Settings" "v" >}}  
{{< truetable >}}  
| Setting | Description |  
|---------|-------------|  
| **Secure Boot** | Select to ensure only trusted, signed software runs during startup. Some images are not compatible with Secure Boot. |  
{{< /truetable >}}
{{< /expand >}}

## Add PCI Passthrough Device Screen

The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

Use **Search Devices** or the **Type** dropdown to filter available devices.
The selected PCI device(s) must not be in use by the host or share an IOMMU group with any device the host requires.

**Select** attaches the selected device.
