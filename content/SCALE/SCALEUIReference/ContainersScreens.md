---
title: "Containers"
description: "Provides information on the Containers screens and settings to add containers or virtual machines (VMs) to your TrueNAS system."
weight: 80
aliases:
- /docs/scale/scaleuireference/instancesscreens/
tags:
 - vm
 - container
 - instances
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

## Containers Screen

The **Containers** screen allows users to add, edit, or manage Linux containers.


The screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for containers is selected.
See [**Global Settings**](#global-settings) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

The **Containers** screen displays **No Containers** before you create the first container.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenNoInstances.png" alt="Containers Screen No Containers" id="Containers Screen No Containers" >}}

The **Configuration** dropdown menu includes **[Global Settings](#global-settings)**, **[Manage Volumes](#manage-volumes)**, and [**Map User/Group IDs**](#map-user-and-group-ids) options.

**Create New Container** at the top right of the screen opens the **[Create Container](#create-container-wizard-screens)** wizard.

## Configuration Menu

**Configuration** on the **Containers** screen header displays service-level settings that apply to all containers.

* **Global Settings** opens the **[Global Settings](#global-settings)** screen.
* **Manage Volumes** opens the [**Volumes**](#manage-volumes) screen.
* **Map User/Group IDs** opens the [**Map User And Group IDs**](#map-user-and-group-ids) screen.

### Global Settings

**Global Settings** opens the **Global Settings** screen showing global options that apply to all containers, including selecting the storage pool for containers and network settings.

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Storage Settings

Use the **Enable Containers** toggle to activate or deactivate containers.
The **Pools** dropdown list shows a list of available pools on the system for container storage.

The screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for containers is selected.

#### Default Network Settings

**Default Network** settings configure global networking defaults for the containers service.

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Bridge** | Specifies the network bridge.  **Automatic** uses the default network bridge for communication between containers and the TrueNAS host. The dropdown list option shows existing bridges. See [Accessing NAS from VMs and Containers]({{< ref "/SCALE/SCALETutorials/Network/ContainerNASBridge" >}}) for more information. |
| **IPv4 Network** | Specifies the IPv4 address for the bridge specified when **Bridge** is set to **Automatic**. Enter the IPv4 address and subnet (e.g., *192.168.1.0*/*24*) for the containers to use or leave empty to allow TrueNAS to use the default address. |
| **IPv6 Network** | Specifies the IPv6 address for the bridge specified when **Bridge** is set to **Automatic**. Enter the IPv6 address and subnet (e.g., *fd42:96dd:aef2:483c::1*/*64*) for the containers to use or leave empty to allow TrueNAS to use the default address. |
{{< /truetable >}}

### Manage Volumes

The **Volumes** screen lists all volumes currently configured for the containers service.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

**Create Volume** opens the [**Create New Volume**](#create-volumes) dialog to configure a new containers volume.

**Import Zvols** opens the [**Import Zvol**](#import-zvol) dialog to import an existing Zvol as a containers volume.


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
| **Clone** | Clones and promotes a temporary snapshot of the zvol into a custom storage volume. This option retains the original zvol while creating an identical copy as a containers volume. |
| **Move** | Relocates the existing zvol to the ix-virt dataset as a volume. |
{{< /truetable >}}

#### Delete Volumes

**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on an image row deletes that image.
A **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

**Confirm** and then **Continue** deletes the image.
Delete is disabled for active images.

### Map User And Group IDs

The **Map User and Group IDs** screen allows users to manually configure UID and GID mappings inside containers.

Existing mappings are shown in a table containing the group or user name, host ID, and container ID.
**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row deletes that mapping.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

The **Users** or **Groups** tabs display mappings for individual user or group accounts, respectively.

Existing mappings are shown in a table containing the group or user name, host ID, and container ID.
**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row deletes that mapping.

{{< expand "Add New Mapping Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User/Group** | Specifies the user or group account name. Begin typing an account name to search for it or select it from the dropdown menu. |
| **Map to the same UID/GID in the container** | (Default) Specifies the host ID-to-container user or group ID mapping. Select to map the host ID to the same ID in containers. |
| **Container UID/GID** | (Displays when **Map to the same UID/GID in the container** is not selected)<br> Specified the user or group ID. Enter the ID number (e.g., *1000*) to map the host user or group ID to in containers. |
{{< /truetable >}}
{{< /expand >}}

**Set** creates the mapping.
Changes take effect immediately, but containers might require a restart to reflect the changes.

## Create Container Wizard

The **Create Container** configuration wizard displays all settings to set up a new container.

### Container Configuration

The **Container Configuration** settings specify the container name and operating system image.

{{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationContainer.png" alt="Container Configuration" id="Container Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the container. |
| **Image** | **Browse Catalog** opens the **Select Image** screen with available Linux image choices from [linuxcontainers.org](https://linuxcontainers.org/). Search or browse to locate your desired image and click **Select**. |
{{< /truetable >}}

{{< include file="/static/includes/InstanceNameRequirements.md" >}}

### CPU & Memory

The **CPU & Memory** settings specify the number of virtual CPU cores to allocate to the container and memory size.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory" id="CPU & Memory" >}}

{{< include file="/static/includes/ContainerCPUandMemorySettings.md" >}}

### Environment

The **Environment** settings configure optional environment variables to run on boot or execute.

**Add** displays a set of environment fields.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

{{< include file="/static/includes/InstanceEnvironmentSettings.md" >}}

{{< hint type=note >}}
Device configuration (network interfaces, USB devices, GPU devices, and filesystem mounts) is performed after container creation using the detail widgets on the **Containers** screen.
See [Containers Widgets](#containers-widgets) for information on configuring devices.
{{< /hint >}}

## Containers Table

The **Containers** table lists each configured container, displaying its name, type, current state, and options to restart or stop it.
Stopped containers show the option to start the container.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Containers Screen - Populated" id="Containers Screen - Populated" >}}

The **Details for *Container*** [widgets](#containers-widgets) show information and management options for the selected container.

The <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> button restarts or the <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> button stops a running container.

The **Stop Options** window defines when the container stops, immediately or after one of 30 seconds, 1 minute, or 5 minutes occurs.

{{< trueimage src="/images/SCALE/Virtualization/InstanceStopOptions.png" alt="Container Stop Options" id="Container Stop Options" >}}

The <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> button starts a stopped container.

**Search** above the **Containers** table allows entering the name of a container to locate a configured container.

The checkbox on each container row shows the [**Bulk Actions**](#bulk-actions) dropdown.

### Bulk Actions

The **Bulk Actions** dropdown list allows you to apply actions to one or more containers on your system.
Options are **Start All Selected**, **Stop All Selected**, and **Restart All Selected**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

## Containers Widgets

The **Details for *Container*** widgets display information and configuration options for the selected container.

### General Info Widget

The **General Info** widget displays the container status, autostart setting, base image, CPU, memory, and secure boot configuration.
It includes the **Edit** and **Delete** buttons for the container.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

**[Delete](#delete-containers)** opens the **Delete** dialog.

**[Edit](#edit-container-screen)** opens an **Edit Container: *Container*** configuration screen populated with editable settings also found on the install wizard screen for the container.

#### Delete Containers

The **Delete** dialog asks for confirmation to delete the selected container.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Container Dialog" id="Delete Container Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### USB Devices Widget

The **USB Devices** widget displays USB devices attached to the container, allowing hardware passthrough for USB peripherals.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="USB Devices Widget" id="USB Devices Widget" >}}

**Add** opens a list of available USB devices to attach to the container.

### GPU Devices Widget

The **GPU Devices** widget displays GPU hardware attached to the container for graphics or computation acceleration.

TrueNAS supports GPU passthrough for containers with the following GPU vendors:

{{< truetable >}}
| GPU Vendor | Driver Requirements | Notes |
|------------|---------------------|-------|
| **NVIDIA** | Manual installation required | Supports Turing architecture and later. Install drivers via **System > Advanced Settings**. See [Advanced Settings Screen]({{< relref "/SCALE/SCALEUIReference/SystemSettings/AdvancedSettingsScreen.md#nvidia-drivers-widget" >}}) for details. |
| **Intel** | Native support | No additional driver installation required. |
| **AMD** | Native support | No additional driver installation required. |
{{< /truetable >}}

**Add** opens a list of available GPU devices.
GPU devices appear in the list only if:
- The physical GPU hardware is installed and detected by TrueNAS
- For NVIDIA GPUs, drivers are installed via **System > Advanced Settings**
- The GPU device is not currently allocated to another container or VM

### Filesystem Devices Widget

The **Filesystem Devices** widget displays filesystem mounts that provide the container with access to host directories and datasets.
Filesystem devices allow containers to read and write data to TrueNAS datasets or host paths.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | Host source path for the filesystem. Enter or browse to select an existing host directory or dataset path. |
| **Destination** | Mount path inside the container where the filesystem appears. Enter the container path, for example */mnt/data* or */var/lib/data*. |
{{< /truetable >}}

**Add** opens fields to configure a new filesystem device mount.

For existing filesystem devices, the <span class="material-icons">more_vert</span> actions menu includes options to **Edit** or **Delete** the filesystem device.

See [Configuring Filesystem Devices]({{< relref "/SCALE/SCALETutorials/Containers/_index.md#configuring-filesystem-devices" >}}) in the Containers tutorial for configuration procedures.

### Disks Widget

The **Disks** widget shows the storage devices attached to the container, along with their associated paths.
It allows you to manage the disks, including adding new ones or modifying existing ones.

{{< trueimage src="/images/SCALE/Virtualization/DisksWidget.png" alt="Disks Widget" id="Disks Widget" >}}

**Add** opens the [**Add Disk**](#addedit-disk-screen) screen for adding new disks to the container.

For existing disks, the <span class="material-icons">more_vert</span> actions include options to [**Edit**](#addedit-disk-screen) or [**Delete**](#delete-disk-mounts) the disk mount.

For VMs, the widget displays the current root disk size.
The root disk stores the OS and serves as the boot disk for the VM.
**Change** opens the [**Change Root Disk Setup**](#change-root-disk-setup) dialog.

#### Add/Edit Disk Screen

The **Add/Edit Disk** screen allows you to configure a new disk or modify an existing one attached to a container.

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

{{< expand "Add/Edit Disk Settings" "v" >}}
{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen" id="Add Disk Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | Enter or browse to select the host source path for the disk. For a new dataset, enter or browse to select the parent path. |
| **Destination**| Enter the destination path to mount the disk in the container. |
{{< /truetable >}}
{{< /expand >}}

**Save** applies changes.

#### Delete Disk Mounts

The **Delete Item** dialog asks for confirmation to delete the selected disk mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

#### Change Root Disk Setup

The **Change Root Disk Setup** dialog allows you to configure the size of the disk a VM stores its OS on and boots from, and change the root disk I/O bus.

{{< trueimage src="/images/SCALE/Virtualization/IncreaseRoot.png" alt="Increase Root Disk Size Widget" id="Increase Root Disk Size Widget" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Root Disk Size (in GiB)** | Increases the size of the VM root disk. Enter a new root disk size in GiB, such as *20*. |
| **Root Disk I/O Bus** | Sets the communication pathway type for the root disk. Options are **NVMe**, **Virtio-BLK**, and **Virtio-SCSI**. |
{{< /truetable >}}


**Save** applies changes.

### NIC Widget

The **NIC Widget** displays the network interfaces (NICs) attached to the container, along with their names and types.
It allows you to add new NICs and manage existing ones.

{{< enterprise >}}
{{< hint type=warning title="High Availability Configuration" >}}
Containers in High Availability (HA) environments require a static IP address configured in the container operating system.

Without a static IP, containers lose network connectivity after a controller failover.
Configure the static IP inside the container OS, not in TrueNAS network settings.

See [Containers in High Availability Environments]({{< relref "/SCALE/SCALETutorials/Containers/_index.md#containers-in-high-availability-environments" >}}) for detailed guidance.
{{< /hint >}}
{{< /enterprise >}}

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Widget" id="NIC Widget" >}}

**Add** opens a menu with available NIC choices, allowing you to select and attach a new NIC to the container.

For existing NICs, the <span class="material-icons">more_vert</span> actions menu allows you to [delete](#delete-nics) the NIC.

#### Delete NICs

The **Delete Item** dialog asks for confirmation to delete the selected NIC.

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### Tools Widget

The **Tools** widget provides quick access to various tools and utilities for managing your container.
You can open a shell, console, or VNC session directly from this widget.

{{< trueimage src="/images/SCALE/Virtualization/ToolsWidget.png" alt="Tools Widget - VM" id="Tools Widget" >}}

**Shell** opens an **Container Shell** session for command-line interaction with the container.
  
**Serial Console** (VM only) opens an **Container Console** session to access the system console for the container.

**VNC** (VM only) opens a VNC connection using your preferred client.
It uses a VNC URL scheme (for example, `vnc://hostname.domain.com:5930`) to launch the session directly in the application.
If your environment does not support VNC URLs, you can manually connect using a VNC client by entering the host name or IP address followed by the port number without `vnc://` (for example, `hostname.domain.com:5930` or `IP:5930`).

**Logs** opens the **Container Logs** viewer showing real-time log output from the container.
The log viewer includes an **Auto-scroll** checkbox that automatically scrolls to display new log entries as they appear.
Enable auto-scroll to follow live log output or disable it to review specific log entries without automatic scrolling.

## Edit Container Screen

The **Edit Container: *Container*** screen settings are a subset of those found on the **[Create Container Wizard](#create-container-wizard)** screens.
It includes the general **Container Configuration** and **CPU and Memory** settings for containers.
Additionally, containers include **Environment** settings.
To edit device, disk, network, or proxy settings, use the [Containers Widgets](#containers-widgets) on the **Containers** screen.

### Edit Container Configuration Settings

The **Container Configuration** settings on the **Edit** screen allow you to modify basic parameters for the container, such as startup behavior.

{{< trueimage src="/images/SCALE/Virtualization/EditInstanceConfiguration.png" alt="Edit Container Configuration" id="Edit Container Configuration" >}}

**Autostart** automatically starts the container when the system boots.

When enabled, TrueNAS starts the container during the system boot sequence after the containers service initializes.
This ensures containers are available immediately after system startup without manual intervention.

During system shutdown, containers with autostart enabled receive a graceful shutdown signal, allowing applications inside the container to close properly and save data before the container stops.
The system waits for the container to shut down gracefully before continuing the shutdown process.

{{< enterprise >}}
{{< hint type=note title="Autostart in HA Environments" >}}
In High Availability configurations, containers with autostart enabled automatically restart on the new active controller after a failover.
Ensure containers have static IP addresses configured to maintain network connectivity after failover.
See [Containers in High Availability Environments]({{< relref "/SCALE/SCALETutorials/Containers/_index.md#containers-in-high-availability-environments" >}}) for details.
{{< /hint >}}
{{< /enterprise >}}

### Edit CPU and Memory Settings

The **CPU & Memory** settings on the **Edit** screen are the same as those in the **Create Container** wizard.

{{< trueimage src="/images/SCALE/Virtualization/EditCPUandMemory.png" alt="Edit CPU & Memory" id="Edit CPU & Memory" >}}

{{< include file="/static/includes/ContainerCPUandMemorySettings.md" >}}

### Edit Environment Settings  

The **Environment** settings on the **Edit** screen are the same as those in the **Create Container** wizard.
These settings configure optional environment variables for the container.

**Add** displays a set of environment fields.

{{< trueimage src="/images/SCALE/Virtualization/EditEnvironment.png" alt="Environment Settings" id="Environment Settings" >}}  

{{< include file="/static/includes/InstanceEnvironmentSettings.md" >}}

### Advanced Configuration Options

The **Edit Container** screen includes advanced configuration options accessible by clicking **Advanced Options** to expand additional settings.
These options provide fine-grained control over container behavior, security, and resource allocation.

#### Capabilities Policy

The **Capabilities Policy** setting controls Linux capabilities available to the container, affecting what privileged operations the container can perform.

{{< truetable >}}
| Policy | Description | Use Case |
|--------|-------------|----------|
| **DEFAULT** | Drops dangerous capabilities (sys_module, sys_time, mknod, audit_control, mac_admin) while keeping common capabilities. | Recommended for most containers. Provides security while allowing standard operations. |
| **ALLOW** | Keeps all capabilities except those explicitly disabled. | Use when containers need broader system access. Reduces security isolation. |
| **DENY** | Drops all capabilities except those explicitly enabled. | Maximum security isolation. Use for untrusted containers or security-sensitive environments. |
{{< /truetable >}}

Linux capabilities control specific privileged operations without granting full root access.
The DEFAULT policy provides secure operation for most use cases.

#### Time Configuration

The **Time Configuration** setting determines the time reference used inside the container.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **LOCAL** | (Default) Container uses the system local time. |
| **UTC** | Container uses Coordinated Universal Time. |
{{< /truetable >}}

Use UTC for containers running distributed systems or applications that handle timestamps across time zones.
Use LOCAL for containers running location-specific applications.

#### Shutdown Timeout

The **Shutdown Timeout** setting specifies how long TrueNAS waits for a container to shut down gracefully before forcing termination.

**Range**: 5-300 seconds
**Default**: 90 seconds

During system shutdown or when manually stopping a container, TrueNAS sends a graceful shutdown signal and waits for the specified timeout period.
If the container does not stop within the timeout, TrueNAS forces termination.

Increase the timeout for containers running applications that require extended shutdown procedures (database flushing, connection cleanup, etc.).
Decrease the timeout for lightweight containers that shut down quickly.

#### Init Process Configuration

The **Init Process Configuration** settings control the container initialization process, which starts as PID 1 inside the container.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Init Command** | Command line for the init process. Default: `/sbin/init`. **Cannot be changed after container creation.** |
| **Init Working Directory** | Working directory for the init process. Enter a path inside the container. |
| **Init User** | Username to run the init process as. Enter a username that exists in the container OS. |
| **Init Group** | Group name to run the init process as. Enter a group name that exists in the container OS. |
{{< /truetable >}}

Most containers use the default init process.
Configure custom init settings when:
- Running containers with custom initialization systems
- Executing containers as non-root users for security
- Starting containers with specific working directories for application requirements

{{< hint type=warning >}}
The **Init Command** cannot be modified after container creation.
Plan your init command carefully before creating the container.
{{< /hint >}}

#### CPU Set (CPU Affinity)

The **CPU Set** setting pins the container to specific physical CPU cores, limiting which CPU cores the container can use.

**Format**: Numeric set notation
- Range: `0-3` (CPUs 0 through 3)
- List: `1,2,3` (CPUs 1, 2, and 3)
- Combined: `0-3,5,7` (CPUs 0-3, 5, and 7)

Use CPU pinning when:
- Running performance-sensitive containers that benefit from CPU cache locality
- Isolating container workloads from system processes
- Testing applications with specific CPU core counts
- Running NUMA-aware applications

Leave empty to allow the container to use all available CPU cores (default).

#### ID Mapping (Security)

TrueNAS automatically configures secure ID mapping for containers using the DEFAULT idmap mode.
This mode maps container UID 0 (root) to host UID 2147000001, ensuring containers run unprivileged on the host system.

This security feature provides isolation between containers and the host:
- Container root (UID 0) does not have root privileges on the host
- Each container operates with a distinct UID range on the host
- Container processes cannot access host files owned by actual root

No configuration is required.
TrueNAS handles ID mapping automatically to ensure secure container operation.

## Add PCI Passthrough Device Screen

The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to a container.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

Use **Search Devices** or the **Type** dropdown to filter available devices.
The selected PCI device(s) must not be in use by the host or share an IOMMU group with any device the host requires.

**Select** attaches the selected device.
