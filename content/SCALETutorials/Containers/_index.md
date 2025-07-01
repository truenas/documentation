---
title: "Containers"
description: "Tutorials for configuring the TrueNAS Containers feature and creating containers or virtual machines."
geekdocCollapseSection: true
weight: 11
related: false
aliases:
- /scaletutorials/instances/
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

**Containers** allow users to configure Incus-based containers or VMs in TrueNAS.

*Linux containers*, powered by LXC, offer a lightweight, isolated environment that shares the host system kernel while maintaining its own file system, processes, and network settings.
Containers start quickly, use fewer system resources than VMs, and scale efficiently, making them ideal for deploying and managing scalable applications with minimal overhead.

{{< expand "What system resources do containers require?" "v" >}}
{{< include file="/static/includes/ScaleVMReqResources.md" >}}
{{< /expand >}}

## Setting Up the Containers Service

You must choose a pool before you can deploy an container.
The **Containers** screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for containers is selected.
See [Choosing the Containers Pool](#choosing-the-containers-pool) below for more information about pool selection.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

For more information on screens and screen functions, refer to the UI Reference article on [Containers Screens]({{< ref "/SCALEUIReference/ContainersScreens" >}}).

Use the **Configuration** dropdown to access the **[Global Settings](#configuring-global-settings)**, **[Manage Volumes](#managing-volumes)**, and [**Map User/Group IDs**](#mapping-user-and-group-ids) options.

### Configuring Global Settings

Click **Global Settings** on the **Configuration** menu to open the **Global Settings** screen, showing global options that apply to all containers.
Use these options to configure the [storage pool](#choosing-the-containers-pool) for containers and [network settings](#configuring-the-default-network).

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Choosing the Containers Pool

You must set the pool before you can add any containers.

Use the **Pool** dropdown to select the pool and click **Save**.

We recommend users keep the VM and container use case in mind when choosing an containers pool.

{{< hint type=tip title="Containers Pool Capacity" >}}
Select a pool with enough storage space for all the containers you intend to host. The pool must also store all the ISO files.
{{< /hint >}}

For stability and performance, we recommend using SSD/NVMe storage for the containers pool due to their faster speed and resilience for repeated read/writes.

<!-- Placeholder: Further description of the containers storage implementation here (once implementation is nailed down and experimental status removed) -->

To select a different pool for containers to use, use the **Pool** dropdown to select a different pool.
Select **[Disabled]** to deactivate the pool and disable the containers service.

#### Configuring the Default Network

Use the **Default Network** settings on the **Global Settings** screen to define how containers connect to the network.
These settings apply to all new containers and VMs, unless configured otherwise.  

Select **Automatic** from the **Bridge** dropdown list to use the default network bridge for communication between containers and the TrueNAS host.
To specify an existing bridge, select one from the dropdown list.
See [Accessing NAS from VMs and Containers]({{< ref "/ScaleTutorials/Network/ContainerNASBridge" >}}) for details.  
When **Bridge** is set to **Automatic**, the **IPv4 Network** and **IPv6 Network** settings display.

Enter an IPv4 address and subnet (e.g., *192.168.1.0/24*) in **IPv4 Network** to assign a specific network for containers.
Leave this field empty to allow TrueNAS to assign the default address.  

Enter an IPv6 address and subnet (e.g., *fd42:96dd:aef2:483c::1/64*) in **IPv6 Network** or leave this field empty to allow TrueNAS to assign the default address.  

Adjust these settings as needed to match your network environment and ensure proper connectivity for containers.  

### Managing Volumes

Click **Manage Volumes** on the **Configuration** menu to open the **Volumes** screen, which lists all the volumes currently configured for the containers service.

Click **Create Volume** to open the [**Create New Volume**](#creating-volumes) dialog to configure a new containers volume.

Click **Import Zvols** to open the [**Import Zvol**](#importing-zvols) dialog to import an existing Zvol as an containers volume.

Click **Upload ISO** to open a file browser to select an <file>.iso</file> file from the client computer and [upload it](#uploading-iso-images) to TrueNAS for use in containers.

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
This option retains the original zvol while creating an identical copy as an containers volume.

Select **Move** to relocate the existing zvol to the ix-virt dataset as a volume.

#### Uploading ISO Images

Click **Upload ISO** to open a file browser.
Select an <file>.iso</file> file from your client computer to upload it to TrueNAS for use in containers.

{{< expand "Image Filename Requirements" "v" >}}
{{< include file="/static/includes/InstanceImageFilenames.md" >}}

This ensures the container name works without conflicts in DNS records, the file system, security profiles, and as the container hostname.
{{< /expand >}}

#### Deleting Volumes

Click **Configuration > Manage Volumes** to access the **Volumes** screen.
Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on a volume row to delete that volume.
The **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

Select **Confirm** and then click **Continue** to delete the image.
TrueNAS disables the delete icon for active images to prevent accidental deletion.

### Managing Container Permissions

Containers run as isolated environments from the host system.  
To give container processes access to host files and datasets, you must map user and group IDs (UIDs and GIDs) between the host and the container.

Click **Map User/Group IDs** from the **Configuration** dropdown to open the **Map User and Group IDs** screen.  
This screen allows you to configure how user and group IDs (UIDs and GIDs) appear inside containers and virtual machines.

By default, user and group accounts within an container are assigned UIDs and GIDs from a private range starting at **2147000001**.  
This mapping ensures security isolation for containers. You can override these mappings to meet specific access requirements.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

Select **Users** or **Groups** to view mappings for individual user or group accounts.

Existing mappings appear in a table that lists the user or group name, host ID, and container ID.  
Click **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row to remove a mapping.

To add a new mapping:

* Type an account name to search or select it from the dropdown.
* Enable **Map to the same UID/GID in the container** to use the same ID from the host in containers.  
  This makes the selected user or group ID appear the same inside and outside the container.
* Disable **Map to the same UID/GID in the container** to assign a different container ID.  
  Enter the container UID or GID you want to use—for example, *1000*.

{{< hint type=info >}}
Only local users and groups are supported for ID mapping in containers.  
Domain accounts from Active Directory or other directory services are not supported.
{{< /hint >}}

Click **Set** to create the mapping.  
Changes apply immediately, though restarting the container can be required for them to take effect.

Mapped IDs control access to mounted host datasets.  
For example, if you map a host user with UID *3000* to UID *1000* inside the container:

1. Assign permissions on the host dataset to UID *3000*.
2. Inside the container, perform actions as UID *1000*.

This setup grants user 1000 in the container the same access to the dataset as user 3000 has on the host.  
Assigning dataset permissions to a host user is not enough to grant container permissions to all users—you must also map that user and ensure the correct user and UID is used inside the container.

{{< hint type=note >}}
Incorrect or missing mappings can cause permission errors when containers access host paths.
{{< /hint >}}

#### Granting Root Access to Host Paths

To safely allow container root processes to access host datasets, TrueNAS provides a built-in unprivileged root user for containers **truenas_container_unpriv_root**.

This user has UID **2147000001** and is used automatically to represent the container root on the host.
No manual ID mapping is required.

To grant container root access to host data:

1. Assign permissions on the host dataset to the **truenas_container_unpriv_root** user.
2. Access the dataset from inside the container as root.

When the container root accesses the path, it uses the host permissions of **truenas_container_unpriv_root**.

{{< hint type=note >}}
This approach provides secure, controlled access for container root processes without exposing host root privileges.
{{< /hint >}}

## Creating Containers

Click **Create New Container** on the **Containers** screen to open the **Create Container** configuration wizard with the settings to set up a new [container](#creating-a-container) or [virtual machine](#creating-a-virtual-machine).

### Creating a Container

To create a new container, from the **Create Container** screen:

1. Configure the container configuration settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationContainer.png" alt="Container Configuration - Container" id="Container Configuration - Container" >}}

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

5. (Optional) Configure proxy settings to forward network connections between the host and the container.
   This routes traffic from a specific address on the host to an address inside the container, or vice versa, allowing the container to connect externally through the host.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceProxies.png" alt="Proxies" id="Proxies" >}}

   a. Click **Add** in the **Proxies** section to display a set of proxy configuration settings.

   b. Select the protocol option from the **Host Protocol** dropdown list to set the connection protocol for the TrueNAS host as **TCP** or **UDP**.

   c. Enter a port in **Host Port** to define the TrueNAS port to map to the container port on the container, for example *3600*.

   d. Select the connection protocol for the container in **Container Protocol**.
      Options are **TCP** or **UDP**.

   e. Enter the port number within the container in **Container Port**, for example *80*, to map to the host port.

6. {{< include file="/static/includes/InstanceNetworkProcedure.md" >}}

7. {{< include file="/static/includes/InstanceUSBProcedure.md" >}}

8. {{< include file="/static/includes/InstanceGPUProcedure.md" >}}

9. Click **Create** to deploy the container.

## Managing Containers

Created containers appear in a table on the **Containers** screen.
The table lists each configured container, displaying its name, type, current status, and options to restart or stop it.
Stopped containers show the option to start the container.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Containers Screen - Populated" id="Containers Screen - Populated" >}}

Select the checkbox to the left of **Name** (select all) or select one or more container rows to access the [**Bulk Actions**](#using-bulk-actions) dropdown.

Enter the name of an container in the **Search** field above the **Containers** table to locate a configured container.

Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running container.
Choosing to stop an container shows a choice to stop immediately or after a small delay.

Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped container.

Select an container row in the table to populate the **Details for *Container*** widgets with information and management options for the selected container.

### Using Bulk Actions

Apply actions to one or more selected containers on your system using **Bulk Actions**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

Use the dropdown to select **Start All Selected**, **Stop All Selected**, or **Restart All Selected**.

### Editing Containers

After selecting the container row in the table to populate the **Details for *Container*** widgets, locate the **General Info** widget.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

Click **Edit** to open the **Edit Container: *Container*** screen.
The **Edit Container: *Container*** screen settings are a subset of those found on the **Create Container** screen.
It includes the general **Container Configuration** and **CPU and Memory** settings for all containers.
Additionally, containers include **Environment** settings, and VMs include **VNC** and **Security** settings.

#### Editing Container Configuration Settings

{{< trueimage src="/images/SCALE/Virtualization/EditInstanceConfiguration.png" alt="Edit Container Configuration" id="Edit Container Configuration" >}}

Select **Autostart** to automatically start the container when the system boots.

#### Editing CPU & Memory Settings

For containers, **CPU Configuration** and **Memory Size** can be configured or left blank to allow the container access to all host CPU and memory resources.
For VMs, CPU and memory configurations are required.

{{< trueimage src="/images/SCALE/Virtualization/EditCPUandMemory.png" alt="Edit CPU & Memory" id="Edit CPU & Memory" >}}

To edit resource allocation:

<div style="margin-left: 33px">{{< include file="/static/includes/InstanceCPUMemoryProcedure.md" >}}
</div>

#### Editing VNC Settings

When VNC access is enabled, remote clients can connect to VM display sessions using a VNC client.
These settings are only available for VMs and cannot be used with containers.

Stop the container before editing VNC settings.

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

### Deleting Containers

After selecting the container row in the table to populate the **Details for *Container*** widgets, locate the **General Info** widget.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

Click **Delete** to open the **Delete** dialog.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Container Dialog" id="Delete Container Dialog" >}}

Select **Confirm** to activate the **Continue** button.
Click **Continue** to delete the container.

### Managing Devices

Use the **Devices** widget to view all USB, GPU, Trusted Platform Module (TPM), and PCI Passthrough devices attached to the container.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="Devices Widget" id="Devices Widget" >}}

Click **Add** to open a list of available **USB Devices**, **GPUs**, **TPM**, and **PCI Passthrough** devices to attach.
Select a device to attach to an container.

To attach a PCI passthrough device, click **Add Device** under **PCI Passthrough** on the device list to open the **Add PCI Passthrough Device**.
PCI passthrough assigns a physical PCI device, such as a network card or controller, directly to a VM, allowing it to function as if physically attached.
The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an container.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

Use **Search Devices** or the **Type** dropdown to filter available devices.
The selected PCI device(s) must not be in use by the host or share an IOMMU group with any device the host requires.

Click **Select** to attach the selected device.

### Managing Disks

Use the **Disks** widget to view the storage devices attached to the container, along with their associated paths.

{{< trueimage src="/images/SCALE/Virtualization/DisksWidget.png" alt="Disks Widget" id="Disks Widget" >}}

Click **Add** to open the [**Add Disk**](#adding-or-editing-disks) screen for adding new disks to the container.

Click the <span class="material-icons">more_vert</span> icon to the right of an existing disk to open the actions menu.
Select to either [**Edit**](#adding-or-editing-disks) or [**Delete**](#deleting-disk-mounts) the disk mount.

For VMs, use the **Disks** widget to manage the root disk size and I/O Bus.
The root disk stores the OS and serves as the boot disk for the VM.
Click **Change** to open the [**Change Root Disk Setup**](#managing-the-root-disk-setup) dialog.

#### Adding or Editing Disks

Click **Add** to open the **Add Disk** screen for adding new disks to the container.

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
Enter the **Destination** path to mount the disk in the container.

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

Use the **NIC Widget** to view the network interfaces (NICs) attached to the container, along with their names and types.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Widget" id="NIC Widget" >}}

Click **Add** to open a menu with available NIC choices.
Select a NIC from the dropdown to attach it to the container.

#### Deleting NICs

Click the <span class="material-icons">more_vert</span> icon to the right of an existing NIC to open the actions menu.
Select [**Delete**](#deleting-disk-mounts) to delete the NIC mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

### Managing Proxies

Use the **Proxies** widget to view the network proxy settings configured for the container.
It allows you to manage these settings, including adding, editing, or removing proxies.
Proxies are available for containers only and cannot be used with VMs.

{{< trueimage src="/images/SCALE/Virtualization/ProxiesWidget.png" alt="Proxies Widget" id="Proxies Widget" >}}

Click **Add** to open the [**Add Proxy**](#adding-or-editing-proxies) screen to configure a new proxy for the container.

For existing proxies, click <span class="material-icons">more_vert</span> to open the actions menu with options to [**Edit**](#adding-or-editing-proxies) or [**Delete**](#deleting-proxies) the proxy.

#### Adding or Editing Proxies

Use the **Add Proxy** or **Edit Proxy** screen to configure or modify a proxy setting attached to an container.

{{< trueimage src="/images/SCALE/Virtualization/AddProxyScreen.png" alt="Add Proxy Screen" id="Add Proxy Screen" >}}

Select a **Host Protocol** to set the connection protocol for the TrueNAS host.
Options are **TCP** or **UDP**.

Enter a port number in **Host Port** to map to the container port on the container, for example *3600*.

Select an **Instance Protocol** to set the connection protocol for the container.
Options are **TCP** or **UDP**.

Enter a port number for the container in **Instance Port**, for example *80*.

Click **Save** to apply changes.

#### Deleting Proxies

For existing proxies, click <span class="material-icons">more_vert</span> to open the actions menu.
Select **Delete** to remove the proxy configuration.

{{< trueimage src="/images/SCALE/Virtualization/DeleteProxyDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

## Accessing Containers

After selecting the container row in the table to populate the **Details for *Instance*** widgets, locate the **Tools** widget.
You can open a shell, console, or VNC session directly from this widget.

{{< trueimage src="/images/SCALE/Virtualization/ToolsWidget.png" alt="Tools Widget - VM" id="Tools Widget" >}}

Click **Shell** <span class="iconify" data-icon="mdi:console-line"></span> to open an **Instance Shell** session for command-line interaction with the container.
  
For VMs, click **Serial Console** <span class="iconify" data-icon="mdi:console"></span> to open an **Instance Console** session to access the system console for the container.

For VMs, click **VNC** to open a VNC connection using your preferred client.
It uses a VNC URL scheme (for example, `vnc://hostname.domain.com:5930`) to launch the session directly in the application.
If your environment does not support VNC URLs, you can manually connect using a VNC client by entering the host name or IP address followed by the port number without `vnc://` (for example, `hostname.domain.com:5930` or `IP:5930`).
