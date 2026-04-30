---
title: "Creating and Managing Containers"
description: "Tutorials for configuring the TrueNAS Containers feature, creating, and managing containers."
geekdocCollapseSection: true
weight: 20
related: false
aliases:
 - /scale/containers/containers/
 - /scale/reporting/instances/
tags:
 - vm
 - container
 - instances
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
doctype: tutorial
---

Linux containers, powered by LXC, offer a lightweight, isolated environment that shares the host system kernel while maintaining its own file system, processes, and network settings.
Containers start quickly, use fewer system resources than [virtual machines (VMs)]({{< relref "/SCALE/VirtualMachines/ManagingVMs.md" >}}), and scale efficiently, making them ideal for deploying and managing scalable applications with minimal overhead.

{{< expand "What system resources do containers require?" "v" >}}
{{< include file="/static/includes/ContainerRequirements.md" >}}
{{< /expand >}}

## Setting Up the Containers Service

When you first access the **Containers** screen, it displays a message indicating no containers are configured.

{{< trueimage src="/images/SCALE/Virtualization/ContainersScreenNoContainers.png" alt="No Containers" id="No Containers" >}}

You can create containers immediately using the **Create New Container** button, or configure global settings first using the **Configuration** menu.

For more information on screens and screen functions, refer to the UI Reference article on [Containers Screens]({{< relref "/SCALE/Containers/ContainersScreens.md" >}}).

Use the **Configuration** menu to access [**Settings**](#configuring-settings) where you can configure an optional [preferred storage pool](#setting-a-preferred-pool) for containers and [default network settings](#configuring-the-default-network).
The **Configuration** menu also provides access to [**Map User/Group IDs**](#managing-container-permissions) for configuring UID and GID mappings.

### Configuring Settings

Click **Configuration** on the **Containers** screen header and select **Settings** to open the **Settings** screen.
The screen displays global options that apply to all containers.
Use these options to configure an optional [preferred storage pool](#setting-a-preferred-pool) for containers and [default network settings](#configuring-the-default-network).

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Settings Panel" id="Settings Panel" >}}

#### Setting a Preferred Pool

The **Preferred Pool** setting allows you to specify a default storage pool for container data.
This setting is optional.
If you do not specify a preferred pool, TrueNAS prompts you to select a pool when creating each container.

To set a preferred pool:

1. Click **Configuration** on the **Containers** screen header and select **Settings**.

2. Select a pool from the **Preferred Pool** dropdown list.
   The dropdown displays all available pools on your system.

3. Click **Save**.

We recommend keeping the container use case in mind when choosing a preferred pool.
Select a pool with enough storage space for all the containers you intend to host.

For stability and performance, we recommend using SSD/NVMe storage for the containers pool due to faster speed and resilience for repeated read/writes.

You can change the preferred pool at any time by opening **Configuration** > **Settings** and selecting a different pool from the **Preferred Pool** dropdown.

#### Configuring the Default Network

Use the **Default Network** settings in the **Settings** screen to define how containers connect to the network.
These settings apply to all new containers unless you configure different network settings for individual containers.

To configure default network settings:

1. Click **Configuration** on the **Containers** screen header and select **Settings**.

2. Select a bridge from the **Bridge** dropdown list:
   - **Automatic** to allow TrueNAS to create and manage a dedicated virtual bridge (`truenasbr0`) on the TrueNAS host using DHCP and routes their outbound traffic through the host via NAT. Change the defaults using the **IPv4 Network** and **IPv6 Network** fields if they conflict with your network.
   - Select an existing bridge interface to use that bridge for container networking.

   See [Accessing NAS from VMs and Containers]({{< relref "/SCALE/Network/ContainerNASBridge.md" >}}) for information on creating bridge interfaces.

   {{< enterprise >}}
   Custom bridge selection is not available on High Availability systems. HA deployments always use **Automatic** to prevent issues that could interfere with controller failover.
   {{< /enterprise >}}

3. (Optional) When **Bridge** is set to **Automatic**, configure IP address ranges:

   a. Enter an IPv4 address and subnet in **IPv4 Network** (for example, *192.168.1.0/24*) to assign a specific IPv4 network for containers.
      Leave empty to allow TrueNAS to assign the default IPv4 address.

   b. Enter an IPv6 address and subnet in **IPv6 Network** (for example, *fd42:96dd:aef2:483c::1/64*) to assign a specific IPv6 network for containers.
      Leave empty to allow TrueNAS to assign the default IPv6 address.

4. Click **Save**.

Adjust these settings as needed to match your network environment and ensure proper connectivity for containers.

### Configuring Containers in High Availability Environments

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

#### Understanding Network Configuration Best Practices for HA

When you configure containers for HA environments:

- Configure a static IP address inside each container OS before deploying containers in an HA system.
   This ensures the container retains its IP address across reboots and failover events.
   Maintain records of static IP addresses assigned to each container for troubleshooting and network planning.
- Mount container data to  datasets that persist across failovers.
   This ensures container data remains available after a controller switchover.
- Select the **Autostart** option in container configuration to automatically start containers after a failover.
   See [Editing Container Configuration Settings](#editing-container-configuration-settings) for details.
- Perform test failovers to verify containers restart properly and remain accessible with their static IP addresses.

#### Understanding Container Failover Behavior

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

### Managing Container Permissions

When a container reads or writes to a host dataset mounted via a [file system device](#configuring-filesystem-devices), TrueNAS checks whether the user identity inside the container has permission to access that path on the host.
User accounts inside containers are independent from host user accounts, so a user named *appuser* with UID *1000* inside a container is not the same identity as UID *1000* on the TrueNAS host, even though they share the same number.

To bridge this gap, TrueNAS uses **UID/GID mapping**: a translation layer that tells the host which host user corresponds to each container user.
For most containers you do not need to configure this manually — the default behavior set by the **ID Map Type** for the container at creation time handles it automatically.
The **Map User/Group IDs** screen is for cases where you need finer control, such as granting a specific host user access to data a container reads or writes.

#### Understanding Default Mapping

By default (when **ID Map Type** is set to **Default**), TrueNAS shifts all container UIDs and GIDs into a private range on the host starting at **2147000001**.
This means container UID *0* (root) maps to host UID *2147000001*, container UID *1* maps to *2147000002*, and so on.
No container process appears as a real user on the host, which prevents a compromised container from having any meaningful access to host resources.

#### Granting Root Access to Host Paths

The special host user **truenas_container_unpriv_root** (UID *2147000001*) represents the container root on the host when using default ID mapping.
To give a container running as root access to a host dataset, assign dataset permissions to **truenas_container_unpriv_root** — no mapping configuration is required.

#### Determining When to Use Custom Mappings

You need to configure a custom mapping when:

- An application inside the container runs as a specific non-root UID (for example, UID *1000*) and needs access to a TrueNAS dataset.
- You want a specific TrueNAS user account to own files the container creates on a shared dataset.
- You are sharing a dataset between a container and other services (like an SMB share) and need consistent ownership.

In these cases, you create a mapping that tells TrueNAS: when the container acts as UID *X*, treat it as host user *Y*.

#### Configuring Mappings

Click **Configuration** on the **Containers** screen header and select **Map User/Group IDs** to open the **Map User and Group IDs** screen.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

Select the **Users** or **Groups** tab to view and manage mappings for user or group accounts respectively.

Existing mappings appear in a table listing the user or group name, host ID, and container ID.
Click **<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row to remove a mapping.

To add a new mapping:

1. Type an account name to search or select it from the dropdown.

2. Choose how to map the ID:
   - Select **Map to the same UID/GID in the container** to use the identical ID number inside the container (for example, host UID *1000* → container UID *1000*).
   - Disable it to assign a different container ID. Enter the UID or GID the container uses for this account — for example, *1000*.

3. Click **Set** to save the mapping.

Changes apply immediately, though restarting the container might be required for them to take effect.

{{< hint type=info >}}
Only local TrueNAS users and groups are supported. Active Directory and other directory service accounts cannot be used for container ID mapping.
{{< /hint >}}

For example, if your container runs a service as UID *1000* and you want it to read and write to a TrueNAS dataset owned by the local user *mediauser* (host UID *3000*):

1. Create a mapping for the host user *mediauser* to the  container UID *1000*.
2. Assign the dataset permissions to *mediauser* on the host.
3. The container service running as UID *1000* can now access that dataset.

{{< hint type=note >}}
Incorrect or missing mappings cause permission denied errors when containers access mounted host paths.
{{< /hint >}}

## Creating Containers

Click **Create New Container** to open the **Add Container** configuration wizard.

### Creating a Container

The **Add Container** screen displays basic configuration fields and an **Advanced Options** button for additional settings.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerBasic.png" alt="Add Container Basic Settings" id="Add Container Basic Settings" >}}

To create a new container:

1. Enter a **Name** for the container.
   {{< include file="/static/includes/InstanceNameRequirements.md" >}}

2. (Optional) Enter a **Description** for the container.

3. (Optional) Select **Autostart** to automatically start the container when the system boots.

   When you enable autostart, TrueNAS automatically starts the container during system boot after the containers service initializes, ensuring services are available immediately after system startup.
   During system shutdown, TrueNAS sends a graceful shutdown signal to the container, allowing applications to close properly and save data.

4. Click **Browse Catalog** to open the **Select Image** screen.

   {{< trueimage src="/images/SCALE/Virtualization/SelectImage.png" alt="Select Image Screen" id="Select Image Screen" >}}

   Search or browse to choose a Linux image.
   Click **Select** in the row for your desired image.

5. (Conditional) Select a **Pool** for the container.
   This field appears when no preferred pool is configured in global container settings.

6. (Optional) Click **Advanced Options** to configure additional settings:

   - Use **CPU Configuration** to bind the container to specific CPU cores (useful for performance-sensitive workloads or isolating container resources).

   - Use **Time Configuration** to set the container time zone (Local or UTC) and shutdown timeout (how long to wait for graceful shutdown before forcing termination).

   - Use **Init Process** to configure the init command, working directory, and user/group for the PID 1 process for the container. The default init command is `/sbin/init`.
      Note: The init command cannot be changed after creation, but working directory, user, and group remain editable.

   - Use **ID Mapping** to control how container UIDs and GIDs map to host UIDs and GIDs. This setting cannot be changed after the container is created. Options include:
     - **Default** (recommended): Container root maps to the unprivileged host user **truenas_container_unpriv_root**. Provides security isolation for most workloads.
     - **Isolated**: Assigns a unique UID/GID range to this container to prevent overlap with other containers. Use when multiple containers share access to the same host datasets.
     - **Privileged**: Removes UID isolation — container UIDs map directly to host UIDs, including root. Required for nested container runtimes. See [Running Nested Containers](#running-nested-containers).

   - Use **Environment Variables** to define environment variables that are available inside the container.

   - Use **Capabilities** to control Linux capabilities (special permissions). Use **DEFAULT** for most containers (secure and functional) or **ALLOW** to grant all capabilities when containers need broad system access (reduces isolation). **ALLOW** is required for nested container runtimes. See [Running Nested Containers](#running-nested-containers).

7. Click **Create** to deploy the container.

{{< hint type=note title="Configuring Devices After Creation" >}}
Device configuration (network interfaces, USB devices, GPU devices, and file system mounts) is performed after container creation using the detail cards on the **Containers** screen.

See the following sections for device configuration procedures:

- [Managing NICs](#managing-nics) for network interface configuration
- [Managing USB Devices](#managing-usb-devices) for USB device passthrough
- [Managing GPU Devices](#managing-gpu-devices) for GPU hardware acceleration
- [Configuring File system Devices](#configuring-filesystem-devices) for additional file system mounts
{{< /hint >}}

### Running Nested Containers

A nested container is a container that runs its own container runtime — for example, a TrueNAS container with Docker installed and running inside it.
Nested container runtimes require direct UID mapping and full Linux capabilities, which means the container must be configured as privileged.

{{< hint type=warning title="Privileged Containers Reduce Security Isolation" >}}
Privileged containers remove UID isolation between the container and the TrueNAS host.
Container processes running as root have direct host root access.

Only use privileged containers for workloads that specifically require nested container support, and ensure the container image and its contents are trusted.
{{< /hint >}}

To create a container that supports a nested container runtime such as Docker:

1. Begin creating a container as described in [Creating a Container](#creating-a-container).

2. Click **Advanced Options**.

3. Under **ID Mapping**, set **ID Map Type** to **Privileged**.

4. Under **Capabilities**, set **Capabilities Policy** to **ALLOW**.

5. Complete the remaining settings and click **Create**.

After the container starts, open a shell session from the **Tools** card and install the container runtime of your choice.

## Managing Containers

Created containers appear in a table on the **Containers** screen.
The table lists each configured container, displaying its name, current status, autostart setting, and live resource metrics: **CPU %**, **Memory MiB**, and **Disk I/O % Full Pressure**.
Metrics display *N/A* for stopped containers.
Stopped containers show the option to start the container.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Containers Screen - Populated" id="Containers Screen - Populated" >}}

Select the checkbox to the left of **Name** (select all) or select one or more container rows to access the [**Bulk Actions**](#using-bulk-actions) dropdown.

Enter the name of a container in the **Search** field above the **Containers** table to locate a configured container.

Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running container.
Choosing to stop a container shows a choice to stop immediately or after a small delay.

Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped container.

Select a container row in the table to populate the **Details for *Container*** cards with information and management options for the selected container.

### Using Bulk Actions

Apply actions to one or more selected containers on your system using **Bulk Actions**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

Use the dropdown to select **Start All Selected**, **Stop All Selected**, or **Restart All Selected**.

### Editing Containers

After selecting the container row in the table to populate the **Details for *Container*** cards, locate the **General Info** card.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Card" id="General Info Card" >}}

Click **Edit** to open the **Edit Container: *Container*** screen.

The edit screen allows you to modify container settings after creation. You can change **Name**, **Description**, **Autostart**, and all **Advanced Options** settings.

{{< trueimage src="/images/SCALE/Virtualization/EditContainerBasic.png" alt="Edit Container Screen" id="Edit Container Screen" >}}

**Settings you cannot change after creation:**
The edit screen allows you to modify container settings after creation. You can change **Name**, **Description**, **Autostart**, and all **Advanced Options** settings.
- **Pool**: The storage pool cannot be changed after deployment
- **ID Map Type**: The UID/GID mapping mode is fixed at creation
- **Init Process** command: The init command is fixed, but **Init Working Directory**, **Init User**, and **Init Group** remain editable

For detailed information about each setting, see the [Add Container Screen]({{< relref "/SCALE/Containers/ContainersScreens.md#add-container-screen" >}}) section in the UI Reference.

### Deleting Containers

After selecting the container row in the table to populate the **Details for *Container*** cards, locate the **General Info** card.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Card" id="General Info Card" >}}

Click **Delete** to open the **Delete** dialog.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Container Dialog" id="Delete Container Dialog" >}}

Select **Confirm** to activate the **Continue** button.
Click **Continue** to delete the container.

### Managing USB Devices

Use the **USB Devices** card to view and manage USB devices attached to the container.
USB device passthrough allows containers to access USB peripherals as if they are physically connected.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="USB Devices Card" id="USB Devices Card" >}}

Click **Add** to open a list of available USB devices.
USB device passthrough allows containers to access USB peripherals as if they are physically connected.

USB devices appear in the list only if they are physically connected to the TrueNAS system and not currently allocated to another container or VM.

### Managing GPU Devices

Use the **GPU Devices** card to attach GPU hardware to containers for graphics acceleration or computation tasks.

{{< trueimage src="/images/SCALE/Virtualization/GPUDevices.png" alt="GPU Devices Card" id="GPU Devices Card" >}}

TrueNAS supports GPU passthrough for containers with the following GPU vendors:

- NVIDIA (Turing architecture and later) - Requires driver installation
- Intel - Native support (no drivers needed)
- AMD - Native support (no drivers needed)

For NVIDIA GPUs, you must install drivers before attaching the GPU to a container.
Go to **System > Advanced Settings** to install NVIDIA drivers.
See [Advanced Settings Screen]({{< relref "/SCALE/SystemSettings/Advanced/AdvancedSettingsScreen.md#nvidia-drivers-card" >}}) for detailed instructions.

Click **Add** to open a list of available GPU devices.
Select a GPU from the list to attach it to the container.

GPU devices appear in the list only if:

- The physical GPU hardware is installed and detected by TrueNAS.
- The NVIDIA GPU drivers are installed via **System > Advanced Settings**.
- The GPU device is not currently allocated to another container or VM.

### Configuring Filesystem Devices

Use the **Filesystem Devices** card to mount additional host directories or datasets into the container.
File system devices provide containers with access to TrueNAS storage for reading and writing data.

{{< trueimage src="/images/SCALE/Virtualization/FilesystemDevicesWidget.png" alt="Filesystem Devices Card" id="Filesystem Devices Card" >}}

To add a file system device:
File system devices provide containers with access to TrueNAS storage for reading and writing data.
1. Click **Add** in the **Filesystem Devices** card.

   {{< trueimage src="/images/SCALE/Virtualization/AddFilesystemDevice.png" alt="Add Filesystem Device" id="Add Filesystem Device" >}}
To add a file system device:
2. Enter or browse to select the **Host Directory Source**.
   This is the directory or dataset path on the TrueNAS host that you want to mount into the container.

3. Enter the **Container Mount Path**.
   This is the mount point inside the container where the file system appears (for example, */mnt/data* or */var/lib/appdata*).

4. Click **Save** to create the file system device mount.

To edit or delete an existing file system device, click the <span class="material-icons">more_vert</span> icon and select **Edit** or **Delete**.

Use cases for file system devices:

- Mounting TrueNAS datasets for persistent container data storage
- Providing containers with access to shared media libraries
- Mounting configuration directories from the host
Use cases for file system devices:

### Managing NICs

Use the **NIC Devices** card to view and manage network interfaces (NICs) attached to the container.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Devices Card" id="NIC Devices Card" >}}

Each NIC displays the network interface name and MAC address (for example, **br0 (aa:bb:cc:dd:ee:ff)** or **br0 (Default Mac Address)**).

{{< hint type=important >}}
NIC modifications are restricted when there are pending network interface changes on the TrueNAS system.
If you see a warning about pending changes, apply or revert those changes before modifying container NICs.
{{< /hint >}}

To add a NIC:

1. Click **Add** to open a dropdown with available network interfaces.
2. Select a NIC from the list to open the configuration dialog.

   {{< trueimage src="/images/SCALE/Virtualization/AddContainerNICDevice.png" alt="Add NIC Device" id="Add NIC Device" >}}

3. Configure the NIC settings:
   - Use **NIC Type** to select the network interface type (virtio, macvlan, ipvlan, etc.).
   - (Create only) Select **Use Default Mac Address** to automatically assign a MAC address.
   - Use **Mac Address** to enter a custom MAC address, or leave empty to use the default.
   - (virtio only) Select **Trust Guest RX Filters** to trust guest OS receive filter settings for better performance.
4. Click **Add** to attach the NIC to the container.

To edit or delete an existing NIC:

1. Stop the container if it is running.
   Click <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop the container.

2. Click the <span class="material-icons">more_vert</span> icon next to the NIC.

3. Select **Edit** to modify the NIC settings, or **Delete** to remove the NIC.

{{< trueimage src="/images/SCALE/Virtualization/DeleteNicDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

Click **Confirm** to activate the **Continue** button.
Click **Continue** to start the delete operation.

## Accessing Containers

After selecting the container row in the table to populate the **Details for *Container*** cards, locate the **Tools** card.
You can open a shell session directly from this card.

{{< trueimage src="/images/SCALE/Virtualization/ContainersToolsWidget.png" alt="Tools Card" id="Tools Card" >}}

Click **Shell** <span class="iconify" data-icon="mdi:console-line"></span> to open a **Container Shell** session for command-line interaction with the container.
