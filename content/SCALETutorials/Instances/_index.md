---
title: "Instances"
description: "Tutorials for configuring the TrueNAS Instances feature and creating containers or virtual machines."
geekdocCollapseSection: true
weight: 11
related: false
aliases:
- /scaletutorials/virtualization/
- /scaletutorials/virtualization/addmanagevmdevicesscale/
tags:
 - vm
 - container
 - instances
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

**Instances** allow users to configure Incus-based containers or VMs in TrueNAS.

*Linux containers*, powered by LXC, offer a lightweight, isolated environment that shares the host system kernel while maintaining its own filesystem, processes, and network settings.
Containers start quickly, use fewer system resources than VMs, and scale efficiently, making them ideal for deploying and managing scalable applications with minimal overhead.

*Virtual machines (VMs)*, powered by QEMU, offer full OS isolation, kernel independence, and can run diverse OS types.
VMs emulate hardware, providing greater isolation than containers but requiring more system resources, making them ideal for legacy applications, full-featured desktops, or software with strict OS dependencies.

{{< expand "What system resources do instances require?" "v" >}}
{{< include file="/static/includes/ScaleVMReqResources.md" >}}
{{< /expand >}}

## Setting Up the Instances Service

You must choose a pool before you can deploy an instance.
The **Instances** screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for instances is selected.
See [Choosing the Instances Pool](#choosing-the-instances-pool) below for more information about pool selection.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

For more information on screens and screen functions, refer to the UI Reference article on [Instances Screens]({{< relref "/SCALEUIReference/InstancesScreens.md" >}}).

Use the **Configuration** dropdown to access the **[Global Settings](#configuring-global-settings)**, **[Manage Volumes](#managing-volumes)**, and [**Map User/Group IDs**](#mapping-user-and-group-ids) options.

### Configuring Global Settings

Click **Global Settings** on the **Configuration** menu to open the **Global Settings** screen, showing global options that apply to all instances.
Use these options to configure the [storage pool](#choosing-the-instances-pool) for instances and [network settings](#configuring-the-default-network).

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Choosing the Instances Pool

You must set the pool before you can add any instances.

Use the use the **Pool** dropdown to select the pool and click **Save**.

We recommend users keep the VM and container use case in mind when choosing an instances pool.
Select a pool with enough storage space for all the instances you intend to host.

For stability and performance, we recommend using SSD/NVMe storage for the instances pool due to their faster speed and resilience for repeated read/writes.

<!-- Placeholder: Further description of the instances storage implementation here (once implementation is nailed down and experimental status removed) -->

To select a different pool for instances to use, use the **Pool** dropdown to select a different pool.
Select **[Disabled]** to deselect the active pool and disable the instances service.

#### Configuring the Default Network

Use the **Default Network** settings to define how instances connect to the network.
These settings apply to all new containers and VMs, unless configured otherwise.  

Select **Automatic** for **Bridge** to use the default network bridge for communication between instances and the TrueNAS host.
To specify an existing bridge, select one from the dropdown list.
See [Accessing NAS from VMs and Containers]({{< relref "/ScaleTutorials/Network/ContainerNASBridge.md" >}}) for details.  
When **Bridge** is set to **Automatic**, the **IPv4 Network** and **IPv6 Network** settings display.

Enter an IPv4 address and subnet (e.g., *192.168.1.0/24*) in **IPv4 Network** to assign a specific network for instances.
Leave this field empty to allow TrueNAS to assign the default address.  

Enter an IPv6 address and subnet (e.g., *fd42:96dd:aef2:483c::1/64*) in **IPv6 Network** or leave this field empty to allow TrueNAS to assign the default address.  

Adjust these settings as needed to match your network environment and ensure proper connectivity for instances.  

### Managing Volumes

Click **Manage Volumes** on the **Configuration** menu to open the **Volumes** screen, which lists all <file>.iso</file> images currently uploaded to the instances service.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

Click **Upload New Image** to open a file browser.
Select an image from your computer and upload it to TrueNAS for use in instances.

{{< expand "Image Filename Requirements" "v" >}}
{{< include file="/static/includes/InstanceImageFilenames.md" >}}

This ensures the instance name works without conflicts in DNS records, the file system, security profiles, and as the instance hostname.
See [Instance name requirements](https://linuxcontainers.org/incus/docs/main/reference/instance_properties/#instance-name-requirements) from Incus for more information.
{{< /expand >}}

Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on an image row to delete that image.
The **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

Select **Confirm** and then click **Continue** to delete the image.
TrueNAS disables the delete icon for active images to prevent accidental deletion.

### Mapping User and Group IDs

Click **Map User/Group IDs** on the **Configuration** menu to open the **Map User and Group IDs** screen, which allows you to manually configure UID and GID mappings inside instances.
By default, user and group accounts within an instance are assigned UIDs and GIDs from a special private range starting at `2147000001`.
This mapping ensures security isolation for containers.
However, you can override these mappings to meet specific system requirements.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

Select **Users** or **Groups** to view mappings for individual user or group accounts, respectively.

Existing mappings are shown in a table containing the user or group name, host ID, and instance ID.
Click **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row to delete that mapping.

To configure a new mapping, type an account name to search for it or select it from the dropdown menu.
Select **Map to the same UID/GID in the instance** to directly map the host ID to the same ID in instances.
This means that the selected user or group ID on the host appears as the same ID in instances.

Deselect **Map to the same UID/GID in the instance** to define a different instance ID for the user or group.
Enter an ID number to map in instances, for example *1000*.
This means that the selected user or group ID on the host appears as the configured ID in instances.

Click **Set** to create the mapping.
Changes take effect immediately, though instances can require a restart to reflect the changes.

Incorrect mappings can create permission issues within instances.

## Creating Instances

Click **Create New Instance** on the **Instances** screen to open the **Create Instance** configuration wizard with the settings to set up a new [container](#creating-a-container) or [virtual machine](#creating-a-virtual-machine).

### Creating a Container

To create a new container, from the **Create Instance** screen:

1. Configure the **Instance Configuration** settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationContainer.png" alt="Instance Configuration - Container" id="Instance Configuration - Container" >}}

   a. Enter a name for the container.

   b. Select **Container** as the **Virtualization Method**.

   c. Click **Browse Catalog** to open the **Select Image** screen.

      {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

      Search or browse to choose a Linux image from [linuxcontainers.org](https://linuxcontainers.org/).
      Click **Select** in the row for your desired image.

2. (Optional) Configure the **CPU & Memory** settings.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory - Container" id="CPU & Memory - Container" >}}

   a. Enter the number of virtual CPU (vCPU) cores to allocate to the container in **CPU Configuration** or leave this field blank to allow the container access to all host CPUs.

      To allocate cores (optional), set to an integer to expose that number of full vCPU cores to the instance.

      Set to a range or comma-separated list to pin vCPUs to specific physical cores.
      For better cache locality and performance, select cores that share the same cache hierarchy or NUMA node.
      For example, to assign cores 0,1,2,5,9,10,11, you can write: `1-2,5,9-11`.

   b. Allocate RAM to the container in **Memory Size** or leave this field blank to allow the container access to all host memory.

      This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB).
      If units are not specified, the value defaults to mebibytes (MiB).
      The minimum value is 32 MiB.

3. (Optional) Configure the **Environment** settings.
   Use these settings to configure optional environment variables to run on boot or execute.
   Environment settings are only supported for containers and cannot be used with VMs.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

   a. Click **Add** to display a set of environment fields.

   b. Enter the name of the environment variable to set (for example, `LANG`).

   c. Enter the value to assign to the environment variable (for example, `en_US.UTF-8`).

   d. Click **Add** again to configure additional environment variables.

4. (Optional) Configure the **Disks** settings to mount storage volumes for the container.
   You can create a new dataset or use an existing one.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksContainer.png" alt="Disks - Container" id="Disks - Container" >}}

   a. Click **Add** to display a set of fields to mount a disk.

   b. To create a new dataset, enter a path or browse to select a parent dataset from the dropdown list of datasets on the system.
      Then click **Create Dataset**, enter a name for the new dataset in the **Create Dataset** window, and click **Create**.

      To use an existing volume, enter a path or browse to select an existing dataset or zvol from the **Source** dropdown list.

   c. Enter the filesystem **Destination** path to mount the disk at in the container, for example */media* or */var/lib/data*.

   d. Click **Add** again to mount additional storage volumes.

5. (Optional) Configure **Proxies** settings to forward network connections between the host and the container.
   This routes traffic from a specific address on the host to an address inside the instance, or vice versa, allowing the instance to connect externally through the host.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceProxies.png" alt="Proxies" id="Proxies" >}}

   a. Click **Add** to display a set of proxy configuration settings.

   b. Select the **Host Protocol** to set the connection protocol for the TrueNAS host.
      Options are **TCP** or **UDP**.

   c. Enter the **Host Port** to define the TrueNAS port to map to the instance port on the container, for example *3600*.

   d. Select the **Instance Protocol** to set the connection protocol for the container.
      Options are **TCP** or **UDP**.

   e. Enter the **Instance Port** to define the port number within the container that the host port is mapped to, for example *80*.

6. {{< include file="/static/includes/InstanceNetworkProcedure.md" >}}

7. {{< include file="/static/includes/InstanceUSBProcedure.md" >}}

8. {{< include file="/static/includes/InstanceGPUProcedure.md" >}}

9. Click **Create** to deploy the container.

### Creating a Virtual Machine

{{< hint type=note title="Before You Begin" >}}
Before creating a VM, you should:

- Obtain an installer <file>.iso</file> or image file for the OS you intend to install, if you are not using a Linux image from the catalog or one previously uploaded to the instances service. You can upload an image for use in instances by using the [**Manage Volumes**](#managing-volumes) option on the **Instances** screen **Configuration** menu or you can upload the image from the **Instance Configuration** settings while creating the VM.

- [Create a zvol]({{< relref "/SCALETutorials/Datasets/AddManageZvols.md" >}}) on a storage pool that is available for the virtual disk.

- Compare the recommended specifications for the guest operating system with your available host system resources.
  Reference these when allocating resources to the instance.

{{< /hint >}}

To create a new virtual machine, from the **Create Instance** screen:

1. Configure the **Instance Configuration** settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationVM.png" alt="Instance Configuration - VM" id="Instance Configuration - VM" >}}

   a. Enter a name for the virtual machine.

   b. Select **VM** as the **Virtualization Method**.

   c. Select one of the available **VM Image Options**.
      Options include **Use a Linux Image**, **Use an ISO image**, or **Use zvol with previously installed OS**.

      - Select **Use a Linux Image** to create the VM using a Linux image from [linuxcontainers.org](https://linuxcontainers.org/).
         Click **Browse Catalog** to open the **Select Image** screen.

         {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

         Search or browse to choose an available image.
         Click **Select** in the row for your desired image.

      - Select **Use an ISO image** to create the VM using an <file>.iso</file> image.
         Click **Select ISO** to open the **Volumes** screen.

         {{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

         Locate your desired image and click **Select** or use **Upload New Image**.
         See [Managing Volumes](#managing-volumes) for more information.

      - Select **Use zvol with previously installed OS** to create a new VM using a zvol from a previously installed VM.
         Enter or browse to select the zvol on the TrueNAS system.

         {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceZvol.png" alt="Zvol Selection" id="Zvol Selection" >}}

         Use this option to migrate a previously configured VM, such as after updating from TrueNAS 24.10.
         See [Migrating Virtual Machines](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/#migrating-virtual-machines) from the 25.04 release notes for more information.

2. Configure the **CPU & Memory** settings.

   Compare the recommended specifications for the guest operating system with your available host system resources when allocating CPU and memory resources.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVMCPUandMemory.png" alt="CPU & Memory - VM" id="CPU & Memory - VM" >}}

   a. Enter the number of virtual CPU (vCPU) cores to allocate to the VM in **CPU Configuration**.

      Set to an integer to expose that number of full vCPU cores to the instance.

      Set to a range or comma-separated list to pin vCPUs to specific physical cores.
      For better cache locality and performance, select cores that share the same cache hierarchy or NUMA node.
      For example, to assign cores 0,1,2,5,9,10,11, you can write: `1-2,5,9-11`.

   b. Allocate RAM to the VM in **Memory Size**.

      This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB).
      If units are not specified, the value defaults to mebibytes (MiB). The minimum value is 32 MiB.

3. Configure the **Disks** settings to mount storage volumes for the VM.
   For VMs, you must specify the I/O bus and size of the root disk.
   You can also mount one or more existing zvol(s) as additional storage, if needed.
   See [Storage volume types](https://linuxcontainers.org/incus/docs/main/explanation/storage/#storage-volume-types) from Incus for more information.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksVM.png" alt="Disks - VM" id="Disks - VM" >}}

   a. Choose the root disk I/O bus type that best suits system needs. Options are:

      - **NVMe** – Ideal for high-performance storage with faster read and write speeds.

      - **Virtio-BLK** – Efficient for virtualized environments, offering direct block device access with lower overhead.

      - **Virtio-SCSI** – Flexible and scalable, supporting advanced features like hot-swapping and multiple devices.

   b. Enter a plain integer in **Root Disk Size (in GiB)** to configure the size of the VM root disk (default **10**).

   c. To mount additional storage, click **Add** to display a set of fields to mount a zvol.

   d. Enter a path or browse to select an existing zvol from the **Source** dropdown list.

   e. Choose the disk **I/O Bus** type that best suits system needs.
      Options are **NVMe**, **Virtio-BLK**, or **Virtio-SCSI**.

   f. Click **Add** again to mount additional storage volumes.

4. {{< include file="/static/includes/InstanceNetworkProcedure.md" >}}

5. {{< include file="/static/includes/InstanceUSBProcedure.md" >}}

6. {{< include file="/static/includes/InstanceGPUProcedure.md" >}}

7. (Optional) Configure **PCI Passthrough** settings to assign physical PCI devices, such as a network card or controller, directly to a VM.
   This allows the VM to use the device as if physically attached.
   The selected PCI device(s) cannot be in use by the host or share an IOMMU group with devices the host requires.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstancePCI.png" alt="PCI Passthrough" id="PCI Passthrough" >}}

   a. Click **Add PCI Passthrough** to open the **Add PCI Passthrough Device** screen.
      The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an instance.

      {{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

   b. Use **Search Devices** or the **Type** dropdown to filter available devices.

   c. Click **Select** on a device row to attach that device.

8. (Optional) Configure **VNC** settings to enable VNC access for a VM, configure the VNC port, and set a VNC password for remote access.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceVNC.png" alt="VNC Settings" id="VNC Settings" >}}

   a. Select **Enable VNC** to allow remote desktop access via a VNC client.

   b. Enter a **VNC Port** number to define the port that the VM VNC server listens for connections on.

   c. Enter a **VNC Password** to authenticate VNC access to the VM.

   {{< hint type=important title="Security Concern">}}
   A VNC password is not cryptographically secure.
   You should not rely on it as a single authentication mechanism for your VMs.
   {{< /hint >}}

9. (Optional) Configure the **Security settings** to control various system security features, including Trusted Platform Module (TPM) and Secure Boot options.
   These options help to ensure a secure environment by enabling advanced hardware-based security features during system startup and operation.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceSecurity.png" alt="Security Settings" id="Security Settings" >}}

   - Select **Add Trusted Platform Module (TPM)** to enable TPM, a hardware-based security feature that protects sensitive data and ensures integrity.
      This adds a Trusted Platform Module (TPM) device to the VM.

   - Select **Secure Boot** to enable [UEFI Secure Boot](https://wiki.debian.org/SecureBoot#What_is_UEFI_Secure_Boot.3F).
      Secure boot ensures that only trusted, signed software is loaded during the system boot process.
      This may be incompatible with some images, refer to the guest OS documentation for compatibility information.

10. Click **Create** to deploy the VM.

   {{< hint type=tip >}}  
   Some guest operating systems, such as Windows, require user input during boot to start the installation.
   If the VM does not boot into the installer automatically, connect via VNC and press a key within the first 10 seconds after startup.  
   {{< /hint >}}

<!-- Commenting out previous tutorial content

When a **Display** device is configured, remote clients can connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).


{{< hint type="tip" title="OS Dependent Toggles" >}}
If the VM does not have a guest OS installed, the VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** buttons send an ACPI power down command to the VM operating system, but since an OS is not installed, these commands time out.
Use the **Power Off** button instead.
{{< /hint >}}



{{< hint type="note" title="OS Specific Settings" >}}
Some operating systems can require specific settings to function properly in a virtual machine.
For example, vanilla Debian can require advanced partitioning when installing the OS.
Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}
-->

## Managing Instances

<!-- Managing Instances content from the UI REF
## Instances Table

The **Instances** table lists each configured instance, displaying its name, type, current state, and options to restart or stop it.
Stopped instances show the option to start the instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Instances Screen - Populated" id="Instances Screen - Populated" >}}

The **Details for *Instance*** [widgets](#instances-widgets) display information and configuration options for the selected instance.

<i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> restarts or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> stops a running instance.
<i class="material-icons" aria-hidden="true" title="Start">play_circle</i> starts a stopped instance.

**Search** above the **Instances** table allows entering the name of an instance to locate a configured instance.

The checkboxes to the left of **Name** on each instance row shows the [**Bulk Actions**](#bulk-actions) dropdown list.
The checkboxes on each instance row shows the [**Bulk Actions**](#bulk-actions) dropdown list.

### Bulk Actions

The **Bulk Action** dropdown list allows you to apply actions to one or more instances on your system.
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

For existing disks, the <span class="material-icons">more_vert</span> actions include options to [**Edit**](#addedit-disk-screen) or [**Delete**](#delete-disks) the disk.

For VMs, the widget displays the current root disk size.
The root disk stores the OS and serves as the boot disk for the VM.
**Increase** opens the [**Increase Root Disk Size**](#increase-root-disk-size) dialog.

#### Add/Edit Disk Screen

The **Add/Edit Disk** screen allows you to configure a new disk or modify an existing one attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen" id="Add Disk Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | Enter or browse to select the host source path for the disk. For a new dataset, enter or browse to select the parent path. |
| **Destination**| Enter the destination path to mount the disk in the instance. |
{{< /truetable >}}

**Save** applies changes.

#### Delete Disks

The **Delete Item** dialog asks for confirmation to delete the selected disk.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

#### Increase Root Disk Size

The **Increase Root Disk Size** dialog allows you to configure the size of the disk a VM stores its OS on and boots from.

{{< trueimage src="/images/SCALE/Virtualization/IncreaseRoot.png" alt="Increase Root Disk Size Widget" id="Increase Root Disk Size Widget" >}}

Enter a new size in GiB, such as *20*.
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

(Containers Only) The **Idmap** widget shows the user ID (UID) and group ID (GID) mappings used by the instance to translate IDs between the host and the container or VM.
It provides details such as the **Host ID**, **Maprange**, and **NS ID** for both UIDs and GIDs.

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

**Shell** opens an **Instance Shell** session for interacting with the instance.
  
**Console** (VM only) opens an **Instance Console** session for accessing the instance’s system console.

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
These settings are only supported for containers and cannot be used with VMs.

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
| **Secure Boot** | Select to ensure only trusted, signed software runs during startup. Some images may not be compatible with Secure Boot. |  
{{< /truetable >}}
{{< /expand >}}

## Add PCI Passthrough Device Screen

The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an instance.

PCI passthrough assigns a physical PCI device, such as a network card or GPU, directly to a VM, allowing it to function as if physically attached.

The selected PCI device(s) must not be in use by the host or share an IOMMU group with any device the host requires.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

Use **Search Devices** or the **Type** dropdown to filter available devices, enter device type or a label.

**Select** attaches the selected device.
-->
