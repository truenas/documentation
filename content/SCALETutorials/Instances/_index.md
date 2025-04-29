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

*Linux containers*, powered by LXC, offer a lightweight, isolated environment that shares the host system kernel while maintaining its own file system, processes, and network settings.
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

For more information on screens and screen functions, refer to the UI Reference article on [Instances Screens]({{< ref "/SCALEUIReference/InstancesScreens" >}}).

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
Select **[Disabled]** to deactivate the pool and disable the instances service.

#### Configuring the Default Network

Use the **Default Network** settings on the **Global Settings** screen to define how instances connect to the network.
These settings apply to all new containers and VMs, unless configured otherwise.  

Select **Automatic** from the **Bridge** dropdown list to use the default network bridge for communication between instances and the TrueNAS host.
To specify an existing bridge, select one from the dropdown list.
See [Accessing NAS from VMs and Containers]({{< ref "/ScaleTutorials/Network/ContainerNASBridge" >}}) for details.  
When **Bridge** is set to **Automatic**, the **IPv4 Network** and **IPv6 Network** settings display.

Enter an IPv4 address and subnet (e.g., *192.168.1.0/24*) in **IPv4 Network** to assign a specific network for instances.
Leave this field empty to allow TrueNAS to assign the default address.  

Enter an IPv6 address and subnet (e.g., *fd42:96dd:aef2:483c::1/64*) in **IPv6 Network** or leave this field empty to allow TrueNAS to assign the default address.  

Adjust these settings as needed to match your network environment and ensure proper connectivity for instances.  

### Managing Volumes

Click **Manage Volumes** on the **Configuration** menu to open the **Volumes** screen, which lists all the volumes currently configured for the instances service.

Click **Create Volume** to open the [**Create New Volume**](#creating-volumes) dialog to configure a new instances volume.

Click **Import Zvols** to open the [**Import Zvol**](#importing-zvols) dialog to import an existing Zvol as an instances volume.

Click **Upload ISO** to open a file browser to select an <file>.iso</file> file from the client computer and [upload it](#uploading-iso-images) to TrueNAS for use in instances.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

#### Creating Volumes

Click **Create Volume** on the **Volumes** screen to open the **Create New Volume** dialog.

{{< trueimage src="/images/SCALE/Virtualization/InstancesCreateVolume.png" alt="Create New Volume Dialog" id="Create New Volume Dialog" >}}

Enter a name for the volume.

Enter a size for the volume, for example *1 GiB*.

Click **Create** to create the new volume.

#### Importing Zvols

Click **Import Zvols** on the **Volumes** screen to open the **Import Zvol** dialog.

{{< trueimage src="/images/SCALE/Virtualization/InstanceImportZvol.png" alt="Import Zvol Dialog" id="Import Zvol Dialog" >}}

Enter the path or browse to select an existing Zvol in **Select Zvols**.

Select **Clone** to clone and promote a temporary snapshot of the zvol into a custom storage volume.
This option retains the original zvol while creating an identical copy as an instances volume.

Select **Move** to relocate the existing zvol to the ix-virt dataset as a volume.

#### Uploading ISO Images

Click **Upload ISO** to open a file browser.
Select an <file>.iso</file> file from your client computer to upload it to TrueNAS for use in instances.

{{< expand "Image Filename Requirements" "v" >}}
{{< include file="/static/includes/InstanceImageFilenames.md" >}}

This ensures the instance name works without conflicts in DNS records, the file system, security profiles, and as the instance hostname.
See [Instance name requirements](https://linuxcontainers.org/incus/docs/main/reference/instance_properties/#instance-name-requirements) from Incus for more information.
{{< /expand >}}

#### Deleting Volumes

Click **Configuration > Manage Volumes** to access the **Volumes** screen.
Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on any volume row to delete that volume.
The **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

Select **Confirm** and then click **Continue** to delete the image.
TrueNAS disables the delete icon for active images to prevent accidental deletion.

### Mapping User and Group IDs

Click **Map User/Group IDs** on the **Configuration** dropdown list to open the **Map User and Group IDs** screen, which allows you to manually configure UID and GID mappings inside instances.
By default, user and group accounts within an instance are assigned UIDs and GIDs from a special private range starting at **2147000001**.
This mapping ensures security isolation for containers.
However, you can override these mappings to meet specific system requirements.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

Select **Users** or **Groups** to view mappings for individual user or group accounts, respectively.

Existing mappings are shown in a table containing the user or group name, host ID, and instance ID.
Click **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row to delete that mapping.

To configure a new mapping, type an account name to search for it or select it from the dropdown list.
Select **Map to the same UID/GID in the instance** to directly map the host ID to the same ID in instances.
This means that the selected user or group ID on the host appears as the same ID in instances.

Disable **Map to the same UID/GID in the instance** to define a different instance ID for the user or group.
Enter an ID number to map in instances, for example *1000*.
This means that the selected user or group ID on the host appears as the configured ID in instances.

Click **Set** to create the mapping.
Changes take effect immediately, though instances can require a restart to reflect the changes.

Incorrect mappings can create permission issues within instances.

## Creating Instances

Click **Create New Instance** on the **Instances** screen to open the **Create Instance** configuration wizard with the settings to set up a new [container](#creating-a-container) or [virtual machine](#creating-a-virtual-machine).

### Creating a Container

To create a new container, from the **Create Instance** screen:

1. Configure the instance configuration settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationContainer.png" alt="Instance Configuration - Container" id="Instance Configuration - Container" >}}

   a. Enter a name for the container.
      {{< include file="/static/includes/InstanceNameRequirements.md" >}}

   b. Select **Container** as the **Virtualization Method**.

   c. Click **Browse Catalog** to open the **Select Image** screen.

      {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

      Search or browse to choose a Linux image from [linuxcontainers.org](https://linuxcontainers.org/).
      Click **Select** in the row for your desired image.

2. (Optional) Configure CPU and memory settings.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory - Container" id="CPU & Memory - Container" >}}

   For containers, enter values for **CPU Configuration** and **Memory Size** or leave blank to allow the container access to all host CPU and memory resources.
   To configure resource allocation:

   {{< include file="/static/includes/InstanceCPUMemoryProcedure.md" >}}

3. (Optional) Configure environment variables to run on boot or execute.
   Environment settings are only supported for containers and cannot be used with VMs.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

   {{< include file="/static/includes/InstancesEnvironmentProcedure.md" >}}

4. (Optional) Configure disk settings to mount storage volumes for the container.
   You can create a new dataset or use an existing one.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksContainer.png" alt="Disks - Container" id="Disks - Container" >}}

   a. Click **Add** in the **Disks** section to display a set of fields to mount a disk.

   b. To create a new dataset, enter a path or browse to select a parent dataset from the dropdown list of datasets on the system.
      Then click **Create Dataset**, enter a name for the new dataset in the **Create Dataset** window, and click **Create**.

      To use an existing volume, enter a path or browse to select an existing dataset from the **Source** dropdown list.

   c. Enter the file system **Destination** path to mount the disk in the container, for example */media* or */var/lib/data*.

   d. Click **Add** again to mount additional storage volumes.

5. {{< include file="/static/includes/InstanceNetworkProcedure.md" >}}

6. {{< include file="/static/includes/InstanceUSBProcedure.md" >}}

7. {{< include file="/static/includes/InstanceGPUProcedure.md" >}}

8. Click **Create** to deploy the container.

### Creating a Virtual Machine

{{< hint type=note title="Before You Begin" >}}
Before creating a VM:

- Obtain an installer <file>.iso</file> or image file for the OS you intend to install, if you are not using a Linux image from the catalog or one previously uploaded to the instances service. You can upload an image for use in instances by using the [**Manage Volumes**](#managing-volumes) option on the **Instances** screen **Configuration** menu or you can upload the image from the **Instance Configuration** settings while creating the VM.

- [Create one or more zvols]({{< ref "/SCALETutorials/Datasets/AddManageZvols" >}}) on a storage pool for the virtual disk now or do this from the **Volumes** screen while configuring the instance.

- Compare the recommended specifications for the guest operating system with your available host system resources.
  Reference these when allocating resources to the instance.

{{< /hint >}}

To create a new virtual machine, from the **Create Instance** screen:

1. Configure the instance configuration settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationVM.png" alt="Instance Configuration - VM" id="Instance Configuration - VM" >}}

   a. Enter a name for the virtual machine.

      {{< include file="/static/includes/InstanceNameRequirements.md" >}}

   b. Select **VM** as the **Virtualization Method**.

   c. Select one of the available **VM Image Options**: **Use a Linux Image** or **Upload ISO, import a zvol or use another volume**.

      - Selecting **Use a Linux Image** creates the VM using a Linux image from [linuxcontainers.org](https://linuxcontainers.org/).

         1. Click **Browse Catalog** to open the **Select Image** screen.

         {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

         2. Search or browse to choose an available image.

         3. Click **Select** in the row for your desired image.

      - Selecting **Upload ISO, import a zvol or use another volume** creates the VM using an <file>.iso</file> image, importing a zvol from a previously installed VM, or using an existing instances volume.

         Click **Select Volume** to open the **Volumes** screen.

         {{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

         Use one of the available options to select or create a volume:

         - Using an existing volume:

            Click **Select** on an existing volume to use that for the new VM.
            The selected volume cannot be in use by an existing instance.

         - Creating a new volume:

            1. Click **Create Volume** to open the **Create New Volume** dialog.

            {{< trueimage src="/images/SCALE/Virtualization/InstancesCreateVolume.png" alt="Create New Volume Dialog" id="Create New Volume Dialog" >}}

            2. Enter a name for the volume.

            3. Enter a size for the volume, for example *1 GiB*.

            4. Click **Create** to create the new volume.

         - Importing a Zvol:

            Use this option to migrate a previously configured VM, such as after updating from TrueNAS 24.10.
            See [Migrating Virtual Machines](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/#migrating-virtual-machines) from the 25.04 release notes for more information.

            1. Click **Import Zvols** on the **Volumes** screen to open the **Import Zvol** dialog.

            {{< trueimage src="/images/SCALE/Virtualization/InstanceImportZvol.png" alt="Import Zvol Dialog" id="Import Zvol Dialog" >}}

            2. Enter a path in **Select Zvols** or browse to select an existing Zvol.

            3. Select a method to import the Zvol:

             - Select **Clone** to clone and promote a temporary snapshot of the zvol into a custom storage volume.
                This option retains the original zvol while creating an identical copy as an instances volume.

             - Select **Move** to relocate the existing zvol to the ix-virt dataset as a volume.
         - Uploading an ISO file:

            1. Click **Upload ISO** to open a file browser and select an <file>.iso</file> file from your client computer.

            2. Locate your desired image file and then click **Open** to upload the file for use in instances.

2. Configure the CPU and memory settings.

   Compare the recommended specifications for the guest operating system with your available host system resources when allocating CPU and memory resources.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVMCPUandMemory.png" alt="CPU & Memory - VM" id="CPU & Memory - VM" >}}

   For VMs, CPU and memory configuration is required.

   {{< include file="/static/includes/InstanceCPUMemoryProcedure.md" >}}

3. Configure disks settings to mount storage volumes for the VM.
   For VMs, you must specify the I/O bus and size of the root disk.
   You can also mount one or more existing zvol(s) as additional storage, if needed.
   See [Storage volume types](https://linuxcontainers.org/incus/docs/main/explanation/storage/#storage-volume-types) from Incus for more information.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksVM.png" alt="Disks - VM" id="Disks - VM" >}}

   a. Choose the root disk I/O bus type that best suits system needs.

      Use **NVMe** for high-performance storage with faster read/write speeds.

      Use **Virtio-BLK** for efficient virtualized environments that need direct block device access with lower overhead.

      Use **Virtio-SCSI** for flexible and scalable storage that supports advanced features like hot-swapping and multiple devices.

   b. Enter a plain integer in **Root Disk Size (in GiB)** to configure the size of the VM root disk (default **10**).

   c. To mount additional storage, click **Add** to display a set of fields to mount a zvol.

   d. Enter a path or browse to select an existing zvol from the **Source** dropdown list.

   e. Choose the disk **I/O Bus** type that best suits system needs.
      Options are **NVMe**, **Virtio-BLK**, or **Virtio-SCSI**.

   f. Click **Add** again to mount additional storage volumes.

4. {{< include file="/static/includes/InstanceNetworkProcedure.md" >}}

5. {{< include file="/static/includes/InstanceUSBProcedure.md" >}}

6. {{< include file="/static/includes/InstanceGPUProcedure.md" >}}

7. (Optional) Configure PCI passthrough settings to assign physical PCI devices, such as a network card or controller, directly to a VM.
   This allows the VM to use the device as if physically attached.
   The selected PCI device(s) cannot be in use by the host or share an IOMMU group with devices the host requires.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstancePCI.png" alt="PCI Passthrough" id="PCI Passthrough" >}}

   a. Click **Add PCI Passthrough** to open the **Add PCI Passthrough Device** screen.
      The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an instance.

      {{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

   b. Use **Search Devices** or the **Type** dropdown to filter available devices.

   c. Click **Select** on a device row to attach that device.

8. (Optional) Configure the **VNC** section settings to enable VNC access for a VM, configure the VNC port, and set a VNC password for remote access.
   When VNC access is enabled, remote clients can connect to VM display sessions using a VNC client.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceVNC.png" alt="VNC Settings" id="VNC Settings" >}}

   {{< include file="/static/includes/InstanceVNCProcedure.md" >}}

9. (Optional) Configure the security settings to control various system security features, including Trusted Platform Module (TPM) and Secure Boot options.
   These options help to ensure a secure environment by enabling advanced hardware-based security features during system startup and operation.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceSecurity.png" alt="Security Settings" id="Security Settings" >}}

   There are two options:

   - **Add Trusted Platform Module (TPM)** enables TPM, a hardware-based security feature that protects sensitive data and ensures integrity.
      This adds a Trusted Platform Module (TPM) device to the VM.

   - {{< include file="/static/includes/InstanceSecureBootProcedure.md" >}}

10. Click **Create** to deploy the VM.

   {{< hint type=tip >}}  
   Some guest operating systems, such as Windows, require user input during boot to start the installation.
   If the VM does not boot into the installer automatically, connect using a VNC client and press a key within the first 10 seconds after startup.  
   {{< /hint >}}

## Managing Instances

Created instances appear in a table on the **Instances** screen.
The table lists each configured instance, displaying its name, type, current status, and options to restart or stop it.
Stopped instances show the option to start the instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Instances Screen - Populated" id="Instances Screen - Populated" >}}

Select the checkbox to the left of **Name** (select all) or select one or more instance rows to access the [**Bulk Actions**](#using-bulk-actions) dropdown.

Enter the name of an instance in the **Search** field above the **Instances** table to locate a configured instance.

Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running instance.
Choosing to stop an instance shows a choice to stop immediately or after a small delay.

Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped instance.

Select an instance row in the table to populate the **Details for *Instance*** widgets with information and management options for the selected instance.

### Using Bulk Actions

Apply actions to one or more selected instances on your system using **Bulk Actions**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

Use the dropdown to select **Start All Selected**, **Stop All Selected**, or **Restart All Selected**.

### Editing Instances

After selecting the instance row in the table to populate the **Details for *Instance*** widgets, locate the **General Info** widget.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

Click **Edit** to open the **Edit Instance: *Instance*** screen.
The **Edit Instance: *Instance*** screen settings are a subset of those found on the **Create Instance** screen.
It includes the general **Instance Configuration** and **CPU and Memory** settings for all instances.
Additionally, containers include **Environment** settings and VMs include **VNC** and **Security** settings.

#### Editing Instance Configuration Settings

{{< trueimage src="/images/SCALE/Virtualization/EditInstanceConfiguration.png" alt="Edit Instance Configuration" id="Edit Instance Configuration" >}}

Select **Autostart** to automatically start the instance when the system boots.

#### Editing CPU & Memory Settings

For containers, **CPU Configuration** and **Memory Size** can be configured or left blank to allow the container access to all host CPU and memory resources.
For VMs, CPU and memory configuration is required.

{{< trueimage src="/images/SCALE/Virtualization/EditCPUandMemory.png" alt="Edit CPU & Memory" id="Edit CPU & Memory" >}}

To edit resource allocation:

<div style="margin-left: 33px">{{< include file="/static/includes/InstanceCPUMemoryProcedure.md" >}}
</div>

#### Editing VNC Settings

When VNC access is enabled, remote clients can connect to VM display sessions using a VNC client.
These settings are only available for VMs and cannot be used with containers.

Stop the instance before editing VNC settings.

{{< trueimage src="/images/SCALE/Virtualization/EditVNC.png" alt="Edit VNC" id="Edit VNC" >}}

<div style="margin-left: 33px">{{< include file="/static/includes/InstanceVNCProcedure.md" >}}
</div>

#### Editing Environment Settings

These settings are only available for containers and cannot be used with VMs.

{{< trueimage src="/images/SCALE/Virtualization/EditEnvironment.png" alt="Environment Settings" id="Environment Settings" >}}  

<div style="margin-left: 33px">{{< include file="/static/includes/InstancesEnvironmentProcedure.md" >}}
</div>

#### Editing Security Settings

These settings are only available for VMs and cannot be used with containers.  

{{< trueimage src="/images/SCALE/Virtualization/EditSecurity.png" alt="Security Settings" id="Security Settings" >}}  

{{< include file="/static/includes/InstanceSecureBootProcedure.md" >}}

### Deleting Instances

After selecting the instance row in the table to populate the **Details for *Instance*** widgets, locate the **General Info** widget.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

Click **Delete** to open the **Delete** dialog.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Instance Dialog" id="Delete Instance Dialog" >}}

Select **Confirm** to activate the **Continue** button.
Click **Continue** to delete the instance.

### Managing Devices

Use the **Devices** widget to view all USB, GPU, Trusted Platform Module (TPM), and PCI Passthrough devices attached to the instance.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="Devices Widget" id="Devices Widget" >}}

Click **Add** to open a list of available **USB Devices**, **GPUs**, **TPM**, and **PCI Passthrough** devices to attach.
Select a device to attach it to an instance.

To attach a PCI passthrough device, click **Add Device** under **PCI Passthrough** on the device list to open the **Add PCI Passthrough Device**.
PCI passthrough assigns a physical PCI device, such as a network card or controller, directly to a VM, allowing it to function as if physically attached.
The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

Use **Search Devices** or the **Type** dropdown to filter available devices.
The selected PCI device(s) must not be in use by the host or share an IOMMU group with any device the host requires.

Click **Select** to attach the selected device.

### Managing Disks

Use the **Disks** widget to view the storage devices attached to the instance, along with their associated paths.

{{< trueimage src="/images/SCALE/Virtualization/DisksWidget.png" alt="Disks Widget" id="Disks Widget" >}}

Click **Add** to open the [**Add Disk**](#adding-or-editing-disks) screen for adding new disks to the instance.

Click the the <span class="material-icons">more_vert</span> icon to the right of an existing disk to open the actions menu.
Select to either [**Edit**](#adding-or-editing-disks) or [**Delete**](#deleting-disk-mounts) the disk mount.

For VMs, use the **Disks** widget to manage the root disk size and I/O Bus.
The root disk stores the OS and serves as the boot disk for the VM.
Click **Change** to open the [**Change Root Disk Setup**](#managing-the-root-disk-setup) dialog.

#### Adding or Editing Disks

Click **Add** to open the **Add Disk** screen for adding new disks to the instance.

Click the the <span class="material-icons">more_vert</span> icon to the right of an existing disk to open the actions menu.
Select **Edit** to edit the disk mount.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreenVM.png" alt="Add Disk Screen - VM" id="Add Disk Screen - VM" >}}

For VMs, click **Select Volume** to open the [**Volumes**](#managing-volumes) screen to create or select a volume to attach.
Enter a **Boot Priority** value to set the order in which to boot disks.
By default, the root disk is set to 1, which is the highest priority.
Select the **I/O Bus** for the disk.
Options are **NVMe**, **Virtio-BLK**, and **Virtio-SCSI**.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen - Container" id="Add Disk Screen - Container" >}}

For containers, enter or browse to select the host **Source** path for the disk.
For a new dataset, enter or browse to select the parent path.
Enter the **Destination** path to mount the disk in the instance.

Click **Save** to apply changes.

#### Deleting Disk Mounts

Click the the <span class="material-icons">more_vert</span> icon to the right of an existing disk to open the actions menu.
Select [**Delete**](#deleting-disk-mounts) to delete the disk mount.

The **Delete Item** dialog asks for confirmation to delete the selected disk mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

#### Managing the Root Disk Setup

Click **Change** to the right of the root disk to open the [**Change Root Disk Setup**](#managing-the-root-disk-setup) dialog.

{{< trueimage src="/images/SCALE/Virtualization/IncreaseRoot.png" alt="Increase Root Disk Size Widget" id="Increase Root Disk Size Widget" >}}

Enter a new root disk size in GiB, such as *20*.

Select the **Root Disk I/O Bus**.
Options are **NVMe**, **Virtio-BLK**, and **Virtio-SCSI**.

Click **Save** to apply changes.

### Managing NICs

Use the **NIC Widget** to view the network interfaces (NICs) attached to the instance, along with their names and types.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Widget" id="NIC Widget" >}}

Click**Add** to open a menu with available NIC choices.
Select a NIC from the dropdown to attach it to the instance.

#### Deleting NICs

Click the the <span class="material-icons">more_vert</span> icon to the right of an existing NIC to open the actions menu.
Select [**Delete**](#deleting-disk-mounts) to delete the NIC mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

## Accessing Instances

After selecting the instance row in the table to populate the **Details for *Instance*** widgets, locate the **Tools** widget.
You can open a shell, console, or VNC session directly from this widget.

{{< trueimage src="/images/SCALE/Virtualization/ToolsWidget.png" alt="Tools Widget - VM" id="Tools Widget" >}}

Click **Shell** <span class="iconify" data-icon="mdi:console-line"></span> to open an **Instance Shell** session for command-line interaction with the instance.
  
For VMs, click **Serial Console** <span class="iconify" data-icon="mdi:console"></span> to open an **Instance Console** session to access the system console for the instance.

For VMs, click **VNC** to open a VNC connection using your preferred client.
It uses a VNC URL scheme (for example, `vnc://hostname.domain.com:5930`) to launch the session directly in the application.
If your environment does not support VNC URLs, you can manually connect using a VNC client by entering the host name or IP address followed by the port number without `vnc://` (for example, `hostname.domain.com:5930` or `IP:5930`).
