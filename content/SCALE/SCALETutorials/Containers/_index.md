---
title: "Containers"
description: "Tutorials for configuring the TrueNAS Containers feature, creating, and managing containers."
geekdocCollapseSection: true
weight: 11
related: false
aliases:
- /scale/scaletutorials/instances/
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

**Containers** allow users to configure linux containers in TrueNAS.

*Linux containers*, powered by LXC, offer a lightweight, isolated environment that shares the host system kernel while maintaining its own file system, processes, and network settings.
Containers start quickly, use fewer system resources than [virtual machines (VMs)](/scale/scaletutorials/virtualmachines/), and scale efficiently, making them ideal for deploying and managing scalable applications with minimal overhead.

{{< expand "What system resources do containers require?" "v" >}}
{{< include file="/static/includes/ContainerRequirements.md" >}}
{{< /expand >}}

## Setting Up the Containers Service

You must choose a pool before you can deploy a container.
The **Containers** screen header displays a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status before a pool for containers is selected.
See [Choosing the Containers Pool](#choosing-the-containers-pool) below for more information about pool selection.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

For more information on screens and screen functions, refer to the UI Reference article on [Containers Screens](/SCALE/SCALEUIReference/ContainersScreens).

Use the **Configuration** dropdown to access the **[Global Settings](#configuring-global-settings)**, **[Manage Volumes](#managing-volumes)**, and [**Map User/Group IDs**](#mapping-user-and-group-ids) options.

### Configuring Global Settings

Click **Global Settings** on the **Configuration** menu to open the **Global Settings** screen, showing global options that apply to all containers.
Use these options to configure the [storage pool](#choosing-the-containers-pool) for containers and [network settings](#configuring-the-default-network).

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Choosing the Containers Pool

You must set a pool before you can add any containers.

Select **Enabled** to enable container storage.

Use the **Pool** dropdown to select one or more pools and click **Save**.

We recommend users keep the container use case in mind when choosing a containers pool.
Select a pool with enough storage space for all the containers you intend to host.

For stability and performance, we recommend using SSD/NVMe storage for the containers pool due to their faster speed and resilience for repeated read/writes.

Select additional pools to allow containers to access shared resources.

To select a different pool for containers to use, use the **Pool** dropdown to select a different pool.

Deselect **Enabled** to deactivate the pool and disable the containers service.

#### Configuring the Default Network

Use the **Default Network** settings on the **Global Settings** screen to define how containers connect to the network.
These settings apply to all new containers, unless configured otherwise.  

Select **Automatic** from the **Bridge** dropdown list to use the default network bridge for communication between containers and the TrueNAS host.
To specify an existing bridge, select one from the dropdown list.
See [Accessing NAS from VMs and Containers](/scale/scaletutorials/network/containernasbridge) for details.  
When **Bridge** is set to **Automatic**, the **IPv4 Network** and **IPv6 Network** settings display.

Enter an IPv4 address and subnet (e.g., *192.168.1.0/24*) in **IPv4 Network** to assign a specific network for containers.
Leave this field empty to allow TrueNAS to assign the default address.  

Enter an IPv6 address and subnet (e.g., *fd42:96dd:aef2:483c::1/64*) in **IPv6 Network** or leave this field empty to allow TrueNAS to assign the default address.  

Adjust these settings as needed to match your network environment and ensure proper connectivity for containers.

### Containers in High Availability Environments

{{< enterprise >}}
High Availability (HA) functionality is available in TrueNAS Enterprise systems.
{{< /enterprise >}}

TrueNAS 26 adds support for containers in High Availability (HA) configurations.
Containers can run on HA systems and automatically restart after a controller failover.
However, HA environments require specific network configuration to ensure containers remain accessible after failover events.

{{< hint type=warning title="Static IP Configuration Required" >}}
**CRITICAL**: Containers in HA environments must have a static IP address configured in the container operating system.

Without a static IP, the container loses network connectivity after a controller failover and becomes inaccessible.

Configure the static IP inside the container OS, not in TrueNAS network settings.
Refer to your container operating system documentation for instructions on setting a static IP address.
{{< /hint >}}

#### Network Configuration Best Practices for HA

When you configure containers for HA environments:

1. **Assign static IP addresses**: Configure a static IP address inside each container OS before deploying containers in an HA system.
   This ensures the container retains its IP address across reboots and failover events.

2. **Use persistent storage**: Mount container data to datasets that persist across failovers.
   This ensures container data remains available after a controller switchover.

3. **Enable autostart**: Select the **Autostart** option in container configuration to automatically start containers after a failover.
   See [Editing Container Configuration Settings](#editing-container-configuration-settings) for details.

4. **Test failover behavior**: Perform test failovers to verify containers restart properly and remain accessible with their static IP addresses.

#### Failover Behavior and Expectations

When a controller failover occurs in an HA system:

- Containers on the active controller experience a **hard shutdown** without a graceful stop sequence.
- After failover completes, containers configured with **Autostart** automatically start on the new active controller.
- Containers with static IP addresses restore network connectivity and become accessible again.
- Container data persists if stored on datasets that remain available after failover.

{{< hint type=important title="Data Persistence During Failover" >}}
A hard shutdown during failover can result in data loss for applications that do not handle abrupt stops gracefully.

For production containers in HA environments:
- Use applications designed to handle unexpected shutdowns
- Configure regular backups or snapshots
- Store critical data on persistent datasets
- Test your containers' behavior during simulated failovers
{{< /hint >}}

#### Enterprise Production Considerations

For Enterprise deployments using containers in HA:

- **Plan for failover testing**: Schedule regular failover tests to verify container behavior and data persistence.
- **Monitor container health**: Implement monitoring to detect containers that fail to restart after a failover.
- **Document static IP assignments**: Maintain records of static IP addresses assigned to each container for troubleshooting and network planning.
- **Consider application requirements**: Evaluate whether your containerized applications can tolerate hard shutdowns and data loss risks associated with HA failovers.

### Managing Volumes

Click **Manage Volumes** on the **Configuration** menu to open the **Volumes** screen, which lists all the volumes currently configured for the containers service.

Click **Create Volume** to open the [**Create New Volume**](#creating-volumes) dialog to configure a new volume.

Click **Import Zvols** to open the [**Import Zvol**](#importing-zvols) dialog to import an existing Zvol as a volume.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

#### Creating Volumes

Click **Create Volume** on the **Volumes** screen to open the **Create New Volume** dialog.

{{< trueimage src="/images/SCALE/Virtualization/InstancesCreateVolume.png" alt="Create New Volume Dialog" id="Create New Volume Dialog" >}}

Enter a name for the volume.

Enter a size for the volume, for example *1 GiB*.

Click **Create** to create the new volume.

#### Importing Zvols

Click **Import Zvols** on the **Volumes** screen to open the **Import Zvol** dialog.

Importing a zvol as a volume allows its lifecycle to be managed, including backups, restores, and snapshots.
This allows portability between systems using standard tools.

{{< trueimage src="/images/SCALE/Virtualization/InstanceImportZvol.png" alt="Import Zvol Dialog" id="Import Zvol Dialog" >}}

Enter the path or browse to select an existing Zvol in **Select Zvols**.

Select **Clone** to clone and promote a temporary snapshot of the zvol into a custom storage volume.
This option retains the original zvol while creating an identical copy as a container volume.

Select **Move** to relocate the existing zvol to the ix-virt dataset as a volume.

#### Deleting Volumes

Click **Configuration > Manage Volumes** to access the **Volumes** screen.
Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on a volume row to delete that volume.
The **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

Select **Confirm** and then click **Continue** to delete the volume.
TrueNAS disables the delete icon for active images to prevent accidental deletion.

### Managing Container Permissions

Containers run as isolated environments from the host system.  
To give container processes access to host files and datasets, you must map user and group IDs (UIDs and GIDs) between the host and the container.

Click **Map User/Group IDs** from the **Configuration** dropdown to open the **Map User and Group IDs** screen.  
This screen allows you to configure how user and group IDs (UIDs and GIDs) appear inside containers.

By default, user and group accounts within a container are assigned UIDs and GIDs from a private range starting at **2147000001**.  
This mapping ensures security isolation for containers.
You can override these mappings to meet specific access requirements.

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

Click **Create New Container** to open the **Create Container** configuration wizard.

### Creating a Container

To create a new container:

1. Configure the container configuration settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceConfigurationContainer.png" alt="Container Configuration" id="Container Configuration" >}}

   a. Enter a name for the container.
      {{< include file="/static/includes/InstanceNameRequirements.md" >}}

   b. Click **Browse Catalog** to open the **Select Image** screen.

      {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

      Search or browse to choose a Linux image.
      Click **Select** in the row for your desired image.

2. (Optional) Configure CPU and memory settings.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory" id="CPU & Memory" >}}

   Enter values for **CPU Configuration** and **Memory Size** or leave blank to allow the container access to all host CPU and memory resources.
   To configure resource allocation:

   {{< include file="/static/includes/InstanceCPUMemoryProcedure.md" >}}

3. (Optional) Configure environment variables to run on boot or execute.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

   {{< include file="/static/includes/InstancesEnvironmentProcedure.md" >}}

4. (Optional) Configure disk settings to mount storage volumes for the container.
   You can create a new dataset or use an existing one.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksContainer.png" alt="Disks" id="Disks" >}}

   a. Click **Add** in the **Disks** section to display a set of fields to mount a disk.

   b. To create a new dataset, enter a path or browse to select a parent dataset from the dropdown list of datasets on the system.
      Then click **Create Dataset**, enter a name for the new dataset in the **Create Dataset** window, and click **Create**.

      To use an existing volume, enter a path or browse to select an existing dataset from the **Source** dropdown list.

   c. Enter the file system **Destination** path to mount the disk in the container, for example */media* or */var/lib/data*.

   d. Click **Add** again to mount additional storage volumes.

5. Click **Create** to deploy the container.

{{< hint type=note title="Configuring Devices After Creation" >}}
Device configuration (network interfaces, USB devices, GPU devices, and filesystem mounts) is performed after container creation using the detail widgets on the **Containers** screen.

See the following sections for device configuration procedures:
- [Managing NICs](#managing-nics) for network interface configuration
- [Managing USB Devices](#managing-usb-devices) for USB device passthrough
- [Managing GPU Devices](#managing-gpu-devices) for GPU hardware acceleration
- [Configuring Filesystem Devices](#configuring-filesystem-devices) for additional filesystem mounts
{{< /hint >}}

## Managing Containers

Created containers appear in a table on the **Containers** screen.
The table lists each configured container, displaying its name, type, current status, and options to restart or stop it.
Stopped containers show the option to start the container.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Containers Screen - Populated" id="Containers Screen - Populated" >}}

Select the checkbox to the left of **Name** (select all) or select one or more container rows to access the [**Bulk Actions**](#using-bulk-actions) dropdown.

Enter the name of a container in the **Search** field above the **Containers** table to locate a configured container.

Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running container.
Choosing to stop a container shows a choice to stop immediately or after a small delay.

Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped container.

Select a container row in the table to populate the **Details for *Container*** widgets with information and management options for the selected container.

### Using Bulk Actions

Apply actions to one or more selected containers on your system using **Bulk Actions**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

Use the dropdown to select **Start All Selected**, **Stop All Selected**, or **Restart All Selected**.

### Editing Containers

After selecting the container row in the table to populate the **Details for *Container*** widgets, locate the **General Info** widget.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

Click **Edit** to open the **Edit Container: *Container*** screen.
The **Edit Container: *Container*** screen settings are a subset of those found on the **Create Container** screen.
It includes the general **Container Configuration** and **CPU and Memory** settings for containers.
Additionally, containers include **Environment** settings.

#### Editing Container Configuration Settings

{{< trueimage src="/images/SCALE/Virtualization/EditInstanceConfiguration.png" alt="Edit Container Configuration" id="Edit Container Configuration" >}}

Select **Autostart** to automatically start the container when the system boots.

When you enable autostart:

1. TrueNAS automatically starts the container during system boot after the containers service initializes.
2. The container starts without manual intervention, ensuring services are available immediately after system startup.
3. During system shutdown, TrueNAS sends a graceful shutdown signal to the container, allowing applications to close properly and save data.

#### Best Practices for Production Containers

For production environments, consider these autostart configuration practices:

- **Enable autostart for critical services**: Containers hosting essential services benefit from automatic startup to minimize downtime after system restarts.
- **Test shutdown behavior**: Verify applications inside containers respond properly to graceful shutdown signals before relying on autostart in production.
- **Monitor startup order**: If multiple containers depend on each other, ensure the containers service initialization order meets your application requirements.
- **Document autostart configuration**: Maintain records of which containers use autostart to aid in troubleshooting and disaster recovery planning.

{{< enterprise >}}
In High Availability environments, autostart ensures containers restart automatically on the new active controller after a failover.
See [Containers in High Availability Environments](#containers-in-high-availability-environments) for HA-specific configuration requirements.
{{< /enterprise >}}

#### Editing CPU & Memory Settings

**CPU Configuration** and **Memory Size** can be configured or left blank to allow the container access to all host CPU and memory resources.

{{< trueimage src="/images/SCALE/Virtualization/EditCPUandMemory.png" alt="Edit CPU & Memory" id="Edit CPU & Memory" >}}

To edit resource allocation:

<div style="margin-left: 33px">{{< include file="/static/includes/InstanceCPUMemoryProcedure.md" >}}
</div>

#### Editing Environment Settings

These settings configure optional environment variables for the container.

{{< trueimage src="/images/SCALE/Virtualization/EditEnvironment.png" alt="Environment Settings" id="Environment Settings" >}}  

<div style="margin-left: 33px">{{< include file="/static/includes/InstancesEnvironmentProcedure.md" >}}
</div>

#### Advanced Container Configuration Options

Click **Advanced Options** on the **Edit Container** screen to access additional configuration settings for fine-grained control over container behavior, security, and resource allocation.

##### Capabilities Policy

The **Capabilities Policy** setting controls which Linux capabilities are available to the container.
Linux capabilities divide root privileges into distinct units, allowing containers to perform specific privileged operations without full root access.

**Policy Options**:

- **DEFAULT** (Recommended): Drops dangerous capabilities while keeping standard capabilities. Provides security while allowing normal container operations.
- **ALLOW**: Keeps all capabilities except explicitly disabled ones. Use when containers need broader system access, but reduces security isolation.
- **DENY**: Drops all capabilities except explicitly enabled ones. Provides maximum security isolation for untrusted or security-sensitive containers.

**When to Configure**:
- Use DEFAULT for most containers (secure and functional)
- Use ALLOW only when containers require specific privileged operations
- Use DENY for containers running untrusted code or in security-sensitive environments

##### Time Configuration

The **Time Configuration** setting determines whether the container uses local time or UTC.

**Options**:
- **LOCAL** (Default): Container uses the system local time
- **UTC**: Container uses Coordinated Universal Time

**When to Use UTC**:
- Containers running distributed systems
- Applications handling timestamps across multiple time zones
- Containers that log events for correlation with systems in other time zones

**When to Use LOCAL**:
- Location-specific applications
- Containers that interact primarily with local services

##### Shutdown Timeout

The **Shutdown Timeout** setting specifies how many seconds TrueNAS waits for a container to shut down gracefully before forcing termination.

**Range**: 5-300 seconds
**Default**: 90 seconds

When you stop a container or shut down the system, TrueNAS sends a graceful shutdown signal (SIGTERM) to the container.
If the container does not stop within the specified timeout, TrueNAS forcefully terminates it (SIGKILL).

**When to Increase Timeout**:
- Containers running databases that need time to flush buffers
- Applications with long connection cleanup procedures
- Services that need time to complete ongoing operations before stopping

**When to Decrease Timeout**:
- Lightweight containers that shut down quickly
- Testing scenarios where faster restarts are beneficial

##### Init Process Configuration

The **Init Process Configuration** settings control the container initialization process.
The init process starts as PID 1 inside the container and is responsible for starting and managing container processes.

**Settings**:
- **Init Command**: Command line for the init process (default: `/sbin/init`). **This cannot be changed after container creation.**
- **Init Working Directory**: Working directory where the init process starts
- **Init User**: Username to run the init process as (must exist in container OS)
- **Init Group**: Group name to run the init process as (must exist in container OS)

**Use Cases for Custom Init Configuration**:
- Running containers with custom initialization systems
- Executing containers as non-root users for enhanced security
- Starting containers with specific working directories required by applications
- Containerized applications that expect to run as specific users

{{< hint type=warning >}}
The **Init Command** cannot be modified after creating the container.
Plan your init command carefully during container creation.
{{< /hint >}}

##### CPU Set (CPU Affinity Pinning)

The **CPU Set** setting pins the container to specific physical CPU cores, restricting which CPU cores the container can use.

**Format**: Enter CPU core numbers using numeric set notation
- Range: `0-3` allows CPUs 0, 1, 2, and 3
- List: `1,2,3` allows CPUs 1, 2, and 3 only
- Combined: `0-3,5,7` allows CPUs 0-3, plus 5 and 7

**When to Use CPU Pinning**:
- Performance-sensitive containers that benefit from CPU cache locality
- Isolating container workloads from system processes or other containers
- Testing applications with specific CPU core counts
- Running NUMA-aware applications that need specific CPU-memory locality

**When Not to Pin CPUs**:
- Most general-purpose containers (leave empty for best flexibility)
- Containers with variable CPU usage patterns
- Systems running many containers (pinning limits scheduling flexibility)

**Example**: Enter `0-3` to restrict a container to the first four CPU cores.

Leave the CPU Set field empty (default) to allow the container to use any available CPU core.

##### ID Mapping (Automatic Security)

TrueNAS automatically configures secure ID mapping for all containers using unprivileged mode.
This security feature maps container user IDs to a distinct range on the host system.

**How It Works**:
- Container UID 0 (root) maps to host UID 2147000001
- Each container receives a unique UID range on the host
- Container processes cannot access files owned by actual root on the host
- This isolation prevents containers from interfering with the host or each other

**Security Benefits**:
- Container root does not have root privileges on the host system
- Containers are isolated from each other at the UID level
- Reduces risk of container escape or privilege escalation attacks

**No Configuration Required**: TrueNAS handles ID mapping automatically.
You do not need to configure ID mapping manually unless you have specific advanced requirements.

### Deleting Containers

After selecting the container row in the table to populate the **Details for *Container*** widgets, locate the **General Info** widget.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Widget" id="General Info Widget" >}}

Click **Delete** to open the **Delete** dialog.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Container Dialog" id="Delete Container Dialog" >}}

Select **Confirm** to activate the **Continue** button.
Click **Continue** to delete the container.

### Managing USB Devices

Use the **USB Devices** widget to view and manage USB devices attached to the container.
USB device passthrough allows containers to access USB peripherals as if they were physically connected.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="USB Devices Widget" id="USB Devices Widget" >}}

Click **Add** to open a list of available USB devices.
Select a USB device from the list to attach it to the container.

USB devices appear in the list only if they are physically connected to the TrueNAS system and not currently allocated to another container or VM.

### Managing GPU Devices

Use the **GPU Devices** widget to attach GPU hardware to containers for graphics acceleration or computation tasks.

TrueNAS supports GPU passthrough for containers with the following GPU vendors:
- **NVIDIA** (Turing architecture and later) - Requires driver installation
- **Intel** - Native support (no drivers needed)
- **AMD** - Native support (no drivers needed)

For NVIDIA GPUs, you must install drivers before attaching the GPU to a container.
Go to **System > Advanced Settings** to install NVIDIA drivers.
See [Advanced Settings Screen]({{< relref "/SCALE/SCALEUIReference/SystemSettings/AdvancedSettingsScreen.md#nvidia-drivers-widget" >}}) for detailed instructions.

Click **Add** to open a list of available GPU devices.
Select a GPU from the list to attach it to the container.

GPU devices appear in the list only if:
- The physical GPU hardware is installed and detected by TrueNAS
- For NVIDIA GPUs, drivers are installed via **System > Advanced Settings**
- The GPU device is not currently allocated to another container or VM

### Configuring Filesystem Devices

Use the **Filesystem Devices** widget to mount additional host directories or datasets into the container.
Filesystem devices provide containers with access to TrueNAS storage for reading and writing data.

To add a filesystem device:

1. Click **Add** in the **Filesystem Devices** widget.

2. Enter or browse to select the host **Source** path.
   This is the directory or dataset path on the TrueNAS host that you want to mount into the container.

3. Enter the **Destination** path.
   This is the mount point inside the container where the filesystem appears (for example, */mnt/data* or */var/lib/appdata*).

4. Click **Save** to create the filesystem device mount.

To edit or delete an existing filesystem device, click the <span class="material-icons">more_vert</span> icon and select **Edit** or **Delete**.

**Use Cases for Filesystem Devices**:
- Mounting TrueNAS datasets for persistent container data storage
- Providing containers with access to shared media libraries
- Mounting configuration directories from the host
- Sharing data between multiple containers

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

Click the <span class="material-icons">more_vert</span> icon to the right of an existing disk to open the actions menu.
Select **Edit** to edit the disk mount.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen" id="Add Disk Screen" >}}

Enter or browse to select the host **Source** path for the disk.
For a new dataset, enter or browse to select the parent path.
Enter the **Destination** path to mount the disk in the container.

Click **Save** to apply changes.

#### Deleting Disk Mounts

Click the <span class="material-icons">more_vert</span> icon to the right of an existing disk to open the actions menu.
Select **Delete** to delete the disk mount.

The **Delete Item** dialog asks for confirmation to delete the selected disk mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.


### Managing NICs

Use the **NIC Widget** to view the network interfaces (NICs) attached to the container, along with their names and types.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Widget" id="NIC Widget" >}}

Click **Add** to open a menu with available NIC choices.
Select a NIC from the dropdown to attach it to the container.

#### Deleting NICs

Click the <span class="material-icons">more_vert</span> icon to the right of an existing NIC to open the actions menu.
Select **Delete** to delete the NIC mount.

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

## Accessing Containers

After selecting the container row in the table to populate the **Details for *Container*** widgets, locate the **Tools** widget.
You can open a shell session directly from this widget.

{{< trueimage src="/images/SCALE/Virtualization/ToolsWidget.png" alt="Tools Widget" id="Tools Widget" >}}

Click **Shell** <span class="iconify" data-icon="mdi:console-line"></span> to open a **Container Shell** session for command-line interaction with the container.
