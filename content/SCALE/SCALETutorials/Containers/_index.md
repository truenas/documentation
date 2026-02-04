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

**Containers** allow users to configure Linux containers in TrueNAS.

Linux containers, powered by LXC, offer a lightweight, isolated environment that shares the host system kernel while maintaining its own file system, processes, and network settings.
Containers start quickly, use fewer system resources than [virtual machines (VMs)](/scale/scaletutorials/virtualmachines/), and scale efficiently, making them ideal for deploying and managing scalable applications with minimal overhead.

{{< expand "What system resources do containers require?" "v" >}}
{{< include file="/static/includes/ContainerRequirements.md" >}}
{{< /expand >}}

## Setting Up the Containers Service

When you first access the **Containers** screen, it displays a message indicating no containers are configured.

{{< trueimage src="/images/SCALE/Virtualization/ContainersScreenNoContainers.png" alt="No Containers" id="No Containers" >}}

You can create containers immediately using the **Create New Container** button, or configure global settings first using the **Settings** button.

For more information on screens and screen functions, refer to the UI Reference article on [Containers Screens](/SCALE/SCALEUIReference/ContainersScreens).

Use the **Settings** button to access the [**Settings**](#configuring-settings) screen where you can configure an optional [preferred storage pool](#setting-a-preferred-pool) for containers and [default network settings](#configuring-the-default-network).

### Configuring Settings

Click **Settings** on the **Containers** screen header to open the **Settings** screen.
The screen displays global options that apply to all containers.
Use these options to configure an optional [preferred storage pool](#setting-a-preferred-pool) for containers and [default network settings](#configuring-the-default-network).

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Settings Panel" id="Settings Panel" >}}

#### Setting a Preferred Pool

The **Preferred Pool** setting allows you to specify a default storage pool for container data.
This setting is optional.
If you do not specify a preferred pool, TrueNAS prompts you to select a pool when creating each container.

To set a preferred pool:

1. Click **Settings** on the **Containers** screen header.

2. Select a pool from the **Preferred Pool** dropdown list.
   The dropdown displays all available pools on your system.

3. Click **Save**.

We recommend keeping the container use case in mind when choosing a preferred pool.
Select a pool with enough storage space for all the containers you intend to host.

For stability and performance, we recommend using SSD/NVMe storage for the containers pool due to faster speed and resilience for repeated read/writes.

You can change the preferred pool at any time by opening **Settings** and selecting a different pool from the **Preferred Pool** dropdown.

#### Configuring the Default Network

Use the **Default Network** settings in the **Settings** panel to define how containers connect to the network.
These settings apply to all new containers unless you configure different network settings for individual containers.

To configure default network settings:

1. Click **Settings** on the **Containers** screen header.

2. Select a bridge from the **Bridge** dropdown list:
   - **Automatic** uses the default network bridge for communication between containers and the TrueNAS host.
   - Select an existing bridge interface to use that bridge for container networking.

   See [Accessing NAS from VMs and Containers](/scale/scaletutorials/network/containernasbridge) for information on creating bridge interfaces.

3. (Optional) When **Bridge** is set to **Automatic**, configure IP address ranges:

   a. Enter an IPv4 address and subnet in **IPv4 Network** (for example, *192.168.1.0/24*) to assign a specific IPv4 network for containers.
      Leave empty to allow TrueNAS to assign the default IPv4 address.

   b. Enter an IPv6 address and subnet in **IPv6 Network** (for example, *fd42:96dd:aef2:483c::1/64*) to assign a specific IPv6 network for containers.
      Leave empty to allow TrueNAS to assign the default IPv6 address.

4. Click **Save**.

Adjust these settings as needed to match your network environment and ensure proper connectivity for containers.

### Containers in High Availability Environments

{{< enterprise >}}
High Availability (HA) functionality is available in [TrueNAS Enterprise](https://www.truenas.com/truenas-enterprise/) systems.
{{< /enterprise >}}

TrueNAS 26 adds support for containers in High Availability (HA) configurations.
Containers can run on HA systems and automatically restart after a controller failover.
However, HA environments require specific network configuration to ensure containers remain accessible after failover events.

{{< hint type=warning title="Static IP Configuration Required" >}}
Containers in HA environments must have a static IP address configured in the container operating system.

Without a static IP, the container loses network connectivity after a controller failover and becomes inaccessible.

Configure the static IP inside the container OS, not in TrueNAS network settings.
Refer to your container operating system documentation for instructions on setting a static IP address.
{{< /hint >}}

#### Network Configuration Best Practices for HA

When you configure containers for HA environments:

- Configure a static IP address inside each container OS before deploying containers in an HA system.
   This ensures the container retains its IP address across reboots and failover events.
   Maintain records of static IP addresses assigned to each container for troubleshooting and network planning.
- Mount container data to  datasets that persist across failovers.
   This ensures container data remains available after a controller switchover.
- Select the **Autostart** option in container configuration to automatically start containers after a failover.
   See [Editing Container Configuration Settings](#editing-container-configuration-settings) for details.
- Perform test failovers to verify containers restart properly and remain accessible with their static IP addresses.

#### Failover Behavior

When a controller failover occurs in an HA system:

- Containers on the active controller experience a hard shutdown without a graceful stop sequence.
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

<!--
### Managing Container Permissions
TODO: This section needs to be rewritten once webui bug is fixed (no UI currently exists for IDMAP management).
Backend API supports IDMAP configuration via container.create() with idmap parameter (DEFAULT/ISOLATED/None modes).
See middleware code: /plugins/container/lifecycle.py and /api/v26_04_0/container.py
WebUI bug filed: [INSERT BUG NUMBER]
-->

<!--
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
-->

## Creating Containers

Click **Create New Container** to open the **Add Container** configuration wizard.

### Creating a Container

The **Add Container** form displays basic configuration fields and an **Advanced Options** toggle for additional settings.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerBasic.png" alt="Add Container Basic Settings" id="Add Container Basic Settings" >}}

To create a new container:

1. Enter a **Name** for the container.
   {{< include file="/static/includes/InstanceNameRequirements.md" >}}

2. (Optional) Enter a **Description** for the container.

3. (Optional) Enable **Autostart** to automatically start the container when the system boots.

   When you enable autostart:

      - TrueNAS automatically starts the container during system boot after the containers service initializes.
      - The container starts without manual intervention, ensuring services are available immediately after system startup.
      - During system shutdown, TrueNAS sends a graceful shutdown signal to the container, allowing applications to close properly and save data.

4. Click **Browse Catalog** to open the **Select Image** screen.

   {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

   Search or browse to choose a Linux image.
   Click **Select** in the row for your desired image.

5. (Conditional) Select a **Pool** for the container.
   This field appears when no preferred pool is configured in global container settings.

6. (Optional) Click **Advanced Options** to configure additional settings:

   - Use **CPU Configuration** to bind the container to specific CPU cores (useful for performance-sensitive workloads or isolating container resources).

   - Use **Time Configuration** to set the container time zone (Local or UTC) and shutdown timeout (how long to wait for graceful shutdown before forcing termination).

   - Use **Init Process** to configure the init command, working directory, and user/group for the container's PID 1 process.
     Note: The init command cannot be changed after creation, but working directory, user, and group remain editable.

   - Use **Environment Variables** to define environment variables that will be available inside the container.

   - Use **Capabilities** to control Linux capabilities (special permissions). Use **DEFAULT** for most containers (secure and functional), **ALLOW** to grant all capabilities (reduces isolation), or **DENY** to drop all capabilities except those explicitly enabled (maximum security for untrusted containers).

7. Click **Create** to deploy the container.

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

The Edit screen allows you to modify container settings after creation. You can change **Name**, **Description**, **Autostart**, and all **Advanced Options** settings.

{{< trueimage src="/images/SCALE/Virtualization/EditInstanceConfiguration.png" alt="Edit Container Screen" id="Edit Container Screen" >}}

**Settings you cannot change after creation:**
- **Image**: The container operating system image is fixed at creation
- **Pool**: The storage pool cannot be changed after deployment
- **Init Process** command line: The init command is fixed, but Init Working Directory, Init User, and Init Group remain editable

For detailed information about each setting, see the [Add Container Form]({{< relref "/SCALE/SCALEUIReference/ContainersScreens.md#add-container-form" >}}) section in the UI Reference.

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

{{< trueimage src="/images/SCALE/Virtualization/GPUDevices.png" alt="GPU Devices Widget" id="GPU Devices Widget" >}}

TrueNAS supports GPU passthrough for containers with the following GPU vendors:

- NVIDIA (Turing architecture and later) - Requires driver installation
- Intel - Native support (no drivers needed)
- AMD - Native support (no drivers needed)

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

{{< trueimage src="/images/SCALE/Virtualization/FilesystemDevicesWidget.png" alt="Filesystem Devices Widget" id="Filesystem Devices Widget" >}}

To add a filesystem device:

1. Click **Add** in the **Filesystem Devices** widget.

   {{< trueimage src="/images/SCALE/Virtualization/AddFilesystemDevice.png" alt="Add Filesystem Device" id="Add Filesystem Device" >}}

2. Enter or browse to select the **Host Directory Source**.
   This is the directory or dataset path on the TrueNAS host that you want to mount into the container.

3. Enter the **Container Mount Path**.
   This is the mount point inside the container where the filesystem appears (for example, */mnt/data* or */var/lib/appdata*).

4. Click **Save** to create the filesystem device mount.

To edit or delete an existing filesystem device, click the <span class="material-icons">more_vert</span> icon and select **Edit** or **Delete**.

Use Cases for Filesystem Devices:

- Mounting TrueNAS datasets for persistent container data storage
- Providing containers with access to shared media libraries
- Mounting configuration directories from the host
- Sharing data between multiple containers

### Managing NICs

Use the **NIC Devices** widget to view and manage network interfaces (NICs) attached to the container.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Devices Widget" id="NIC Devices Widget" >}}

Each NIC displays the network interface name and MAC address (for example, `br0 (aa:bb:cc:dd:ee:ff)` or `br0 (Default Mac Address)`).

{{< hint type=important >}}
NIC modifications are restricted when there are pending network interface changes on the TrueNAS system.
If you see a warning about pending changes, apply or revert those changes before modifying container NICs.
{{< /hint >}}

To add a NIC:

1. Click **Add** to open a menu with available network interfaces.
2. Select a NIC from the menu to open the configuration dialog.

   {{< trueimage src="/images/SCALE/Virtualization/AddContainerNICDevice.png" alt="Add NIC Device" id="Add NIC Device" >}}

3. Configure the NIC settings:
   - Use **NIC Type** to select the network interface type (virtio, macvlan, ipvlan, etc.).
   - (Create only) Enable **Use Default Mac Address** to automatically assign a MAC address.
   - Use **Mac Address** to enter a custom MAC address, or leave empty to use the default.
   - (virtio only) Enable **Trust Guest RX Filters** to trust guest OS receive filter settings for better performance.
4. Click **Add** to attach the NIC to the container.

To edit or delete an existing NIC:

1. Click the <span class="material-icons">more_vert</span> icon next to the NIC.
2. Select **Edit** to modify the NIC settings, or **Delete** to remove the NIC.

{{< hint type=note >}}
NICs can only be modified when the container is stopped.
If the container is running, stop it first before editing or deleting NICs.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

## Accessing Containers

After selecting the container row in the table to populate the **Details for *Container*** widgets, locate the **Tools** widget.
You can open a shell session directly from this widget.

{{< trueimage src="/images/SCALE/Virtualization/ContainersToolsWidget.png" alt="Tools Widget" id="Tools Widget" >}}

Click **Shell** <span class="iconify" data-icon="mdi:console-line"></span> to open a **Container Shell** session for command-line interaction with the container.
