---
title: "Containers Screens"
description: "Provides information on the Containers screens and settings to add containers or virtual machines (VMs) to your TrueNAS system."
weight: 50
tags:
 - vm
 - container
 - instances
doctype: reference
---

## Containers Screen

The **Containers** screen allows users to add, edit, or manage Linux containers.

The **Containers** screen displays **No Containers** before you create the first container.

{{< trueimage src="/images/SCALE/Virtualization/ContainersScreenNoContainers.png" alt="Containers Screen No Containers" id="Containers Screen No Containers" >}}

The **Configuration** dropdown opens options to configure global container settings:
- **Settings** opens the [**Settings**](#settings-screen) screen to configure the preferred pool and default network.
- **Map User/Group IDs** opens the [**Map User and Group IDs**](#map-user-and-group-ids-screen) screen to configure UID and GID mappings.

**Create New Container** at the top right of the screen opens the **[Add Container](#add-container-screen)** screen.

## Settings Screen

The **Settings** screen displays global options that apply to all containers, including an optional preferred storage pool and default network settings.

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Settings Panel" id="Settings Panel" >}}

### Preferred Pool

**Preferred Pool** specifies an optional default storage pool for container data.
When no preferred pool is configured, TrueNAS prompts for pool selection at container creation.

#### Default Network Settings

**Default Network** settings configure global networking defaults for the containers service.

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Bridge** | Network bridge for containers. **Automatic** creates and manages a dedicated virtual bridge (*truenasbr0*) on the TrueNAS host, assigns container IP addresses via DHCP, and routes outbound traffic through the host via NAT. Default ranges are *172.200.0.0/24* (IPv4) and *fd42:4c58:43ae::/64* (IPv6), configurable via **IPv4 Network** and **IPv6 Network**. Additional options show existing configured bridges. See [Accessing NAS from VMs and Containers]({{< ref "/Network/ContainerNASBridge" >}}) for more information.<br><br>Custom bridge selection is not available on High Availability systems. HA deployments always use **Automatic** to prevent bridge STP issues that could interfere with controller failover. |
| **IPv4 Network** | (Displayed only when **Bridge** is set to **Automatic**) IPv4 address and subnet for the automatic bridge (for example, *192.168.1.0/24*). Defaults to the system-assigned address when empty. At least one network (IPv4 or IPv6) must be configured. |
| **IPv6 Network** | (Displayed only when **Bridge** is set to **Automatic**) IPv6 address and subnet for the automatic bridge (for example, *fd42:96dd:aef2:483c::1/64*). Defaults to the system-assigned address when empty. At least one network (IPv4 or IPv6) must be configured. |
{{< /truetable >}}

## Map User and Group IDs Screen

The **Map User and Group IDs** screen  allows users to manually configure UID and GID mappings between the TrueNAS host and containers.
It opens after clicking **Configuration** on the **Containers** screen header and selecting **Map User/Group IDs**.

{{< trueimage src="/images/SCALE/Virtualization/MapUserGroupIDs.png" alt="Map User and Group IDs Screen" id="Map User and Group IDs Screen" >}}

Existing mappings appear in a table listing the user or group name, host ID, and container ID.
**<i class="material-icons" aria-hidden="true" title="Delete">delete</i> Delete** on a row removes that mapping.

{{< expand "Add New Mapping Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User/Group** | Specifies the user or group account name. Supports local users and groups only; Active Directory and other directory service accounts are not supported. |
| **Map to the same UID/GID in the container** | (Default) Maps the host user or group ID to the same ID inside containers. |
| **Container UID/GID** | (Displays when **Map to the same UID/GID in the container** is not selected) Enter the ID number (e.g., *1000*) to map the host user or group ID to inside containers. |
{{< /truetable >}}
{{< /expand >}}

**Set** creates the mapping.
Changes apply immediately, though restarting the container might be required for them to take effect.

## Add Container Screen

The **Add Container** screen displays basic configuration fields and an **Advanced Options** button for additional settings.

### Basic Settings

The basic settings are always visible and configure essential container properties.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerBasic.png" alt="Add Container Basic Settings" id="Add Container Basic Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the container. |
| **Description** | Specifies an optional description about the container or how it is used. |
| **Autostart** | Automatically starts the container when the system boots when selected. |
| **Image** | Specifies the operating system image file for the container. **Browse Catalog** opens the **Select Image** screen with available Linux image choices, with an option to search or browse to locate a desired image. |
| **Pool** | Specifies a storage pool for the container. Only shows when no preferred pool is configured in [Settings](#settings-screen). |
{{< /truetable >}}

{{< include file="/static/includes/InstanceNameRequirements.md" >}}

### Advanced Options

**Advanced Options** shows additional configuration settings.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerAdvanced1.png" alt="Add Container Advanced Options - Part 1" id="Add Container Advanced Options - Part 1" >}}

#### Storage

The **Storage** settings only show when a preferred pool is configured in [Settings](#settings-screen).

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Preferred Pool** | Sets the selected pool as the preferred pool to store the container. Only shows when a preferred pool is configured. When selected, this container is stored on the configured preferred pool. When not enabled, the **Pool** dropdown shows a list of pools to choose from. |
| **Pool** | Sets a storage pool for the container to use. Only shows when **Use Preferred Pool** is deselected. |
{{< /truetable >}}

#### CPU Configuration

The **CPU Configuration** settings bind the container to specific CPU cores.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **CPU Set** | Specifies CPU core numbers to allocate to the container (e.g., *0,1,2* or *0-3*). Leave blank to allow the container access to all host CPU cores. |
{{< /truetable >}}

#### Time Configuration

The **Time Configuration** settings control container time zone and shutdown behavior.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Container Time** | Sets the time zone for the container. **Local** uses the host system time. **UTC** uses Coordinated Universal Time. |
| **Shutdown Timeout** | Specifies the number of seconds to wait for the container to shut down gracefully before forcing termination. Default is 30 seconds. |
{{< /truetable >}}

#### Init Process

The **Init Process** settings configure the initialization process for the container.  

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Init Process** | Specifies the init process command line. Default is `/sbin/init`. |
| **Init Working Directory** | Specifies the working directory for the init process. |
| **Init User** | Specifies the user to run the init process as. |
| **Init Group** | Specifies the group to run the init process as. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Virtualization/AddContainerAdvanced2.png" alt="Add Container Advanced Options - Part 2" id="Add Container Advanced Options - Part 2" >}}

#### Environment Variables

The **Environment Variables** settings configure optional environment variables to run on boot or execute.

**Add** shows a set of environment variable fields each time you click it.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the environment variable name (e.g., *PATH*, *HOME*). |
| **Value** | Specifies the value for the environment variable. |
{{< /truetable >}}

#### ID Mapping

The **ID Mapping** settings configure how user and group IDs (UIDs/GIDs) inside the container map to UIDs/GIDs on the TrueNAS host.
This setting is available at container creation only and cannot be changed after the container is created.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **ID Map Type** | Sets the UID/GID mapping mode for the container from the options:<br><li>**Default** (Recommended): Maps the container root (UID 0) to the unprivileged host user **truenas_container_unpriv_root** (UID 2147000001). All other container UIDs are offset by the same amount (e.g., container UID 1000 becomes host UID 2147001001). Provides security isolation while allowing normal container operations.<br><li>**Isolated**: Uses the same offset as default but shifts the base further by a per-container slice value, ensuring no two containers share host UID ranges. Use when multiple containers access the same host datasets and non-overlapping UID ranges are required. TrueNAS automatically assigns a unique slice if none is specified.<br><li>**Privileged**: Applies no UID/GID mapping — container UIDs map directly to the same UIDs on the host. Container root (UID 0) becomes host root. Use only when an application explicitly requires direct UID mapping. </li> |
{{< /truetable >}}

{{< hint type=warning title="Privileged ID Mapping Warning" >}}
Setting **ID Map Type** to **Privileged** removes all UID isolation between the container and the TrueNAS host.
Container processes running as root have direct host root access.
Use only when an application explicitly requires it and you understand the security implications.
{{< /hint >}}

#### Capabilities

**Capabilities** settings control Linux capabilities, which are special permissions that divide root privileges into distinct units.  
Allows containers to perform specific privileged operations without granting full root access.  

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Capabilities Policy** | Sets the default policy for container capabilities:<br><li>**DEFAULT** (Recommended): Keeps most capabilities but drops dangerous ones (sys_module, sys_time, mknod, audit_control, mac_admin). Provides security while allowing normal container operations.<br><li>**ALLOW**: Grants all capabilities. Use when containers need broad system access, but reduces security isolation. |
{{< /truetable >}}

{{< hint type=note >}}
Device configuration (network interfaces, USB devices, GPU devices, and file system mounts) is performed after container creation using the detail cards on the **Containers** screen.  
See [Containers Cards](#containers-cards) for information on configuring devices.
{{< /hint >}}

## Containers Table

The **Containers** table lists each configured container name, current state, autostart setting, and live resource metrics: **CPU %**, **Memory MiB**, and **Disk I/O % Full Pressure** (shown as *N/A* when the container is stopped or metrics are unavailable).  
Stopped containers show the option to start the container.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Containers Screen - Populated" id="Containers Screen - Populated" >}}

The **Details for *Container*** [cards](#containers-cards) show information and management options for the selected container.

The <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> button restarts or the <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> button stops a running container.

The **Stop Options** window defines how the container stops:

- **Wait for graceful stop** - Sends a shutdown signal and waits indefinitely for the container to stop gracefully. Does not force kill the container.
- **Wait for graceful stop, then force** - Sends a shutdown signal and waits for the shutdown timeout (default 30 seconds) for the container. Force-kills the container if still running after the timeout expires.  
- **Force stop immediately** - Immediately force kills the container without attempting graceful shutdown.

{{< trueimage src="/images/SCALE/Virtualization/InstanceStopOptions.png" alt="Container Stop Options" id="Container Stop Options" >}}

The <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> button starts a stopped container.

**Search** above the **Containers** table allows entering the name of a container to locate a configured container.

The checkbox on each container row shows the [**Bulk Actions**](#bulk-actions) dropdown.

### Bulk Actions

The **Bulk Actions** dropdown list allows you to apply actions to one or more containers on your system.
Options are **Start All Selected**, **Stop All Selected**, and **Restart All Selected**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

## Containers Cards

The **Details for *Container*** cards display information and configuration options for the selected container.

### General Info Card

The **General Info** card displays container configuration details including **Description**, **Autostart**, **Dataset**, **CPU Set**, **Container Time**, **Shutdown Timeout**, **Init Process** command, and **Capabilities Policy**. **Init Working Directory**, **Init User**, and **Init Group** also display when configured.
It includes the **Edit** and **Delete** buttons for the container.

{{< trueimage src="/images/SCALE/Virtualization/GeneralInfoWidget.png" alt="General Info Card" id="General Info Card" >}}

**[Delete](#delete-containers)** opens the **Delete** dialog.

**[Edit](#edit-container-screen)** opens an **Edit Container: *Container*** configuration screen populated with editable settings also found on the install wizard screen for the container.

#### Delete Containers

The **Delete** dialog asks for confirmation to delete the selected container.

{{< trueimage src="/images/SCALE/Virtualization/DeleteInstance.png" alt="Delete Container Dialog" id="Delete Container Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### USB Devices Card

The **USB Devices** card displays USB devices attached to the container, allowing hardware passthrough for USB peripherals.

{{< trueimage src="/images/SCALE/Virtualization/DevicesWidget.png" alt="USB Devices Card" id="USB Devices Card" >}}

**Add** opens a list of available USB devices to attach to the container.

### GPU Devices Card

The **GPU Devices** card displays GPU hardware attached to the container for graphics or computation acceleration.

{{< trueimage src="/images/SCALE/Virtualization/GPUDevices.png" alt="GPU Devices Card" id="GPU Devices Card" >}}

TrueNAS supports GPU passthrough for containers with the following GPU vendors:

{{< truetable >}}
| GPU Vendor | Driver Requirements | Notes |
|------------|---------------------|-------|
| **NVIDIA** | Manual installation required | Supports Turing architecture and later. See [Advanced Settings Screen]({{< relref "/SystemSettings/Advanced/AdvancedSettingsScreen.md#nvidia-drivers-card" >}}) for driver installation details. |
| **Intel** | Native support | No additional driver installation required. |
| **AMD** | Native support | No additional driver installation required. |
{{< /truetable >}}

**Add** opens a list of available GPU devices.
GPU devices only appear in the list if:  
- The physical GPU hardware is installed and detected by TrueNAS
- The NVIDIA GPU drivers are installed via **System > Advanced Settings**
- The GPU device is not currently allocated to another container or VM

### Filesystem Devices Card

The **Filesystem Devices** card displays file system mounts that provide the container with access to host directories and datasets.  
File system devices allow containers to read and write data to TrueNAS datasets or host paths.

{{< trueimage src="/images/SCALE/Virtualization/FilesystemDevicesWidget.png" alt="Filesystem Devices Card" id="Filesystem Devices Card" >}}

**Add** opens fields to configure a new file system device mount.

{{< trueimage src="/images/SCALE/Virtualization/AddFilesystemDevice.png" alt="Add Filesystem Device" id="Add Filesystem Device" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Directory Source** | Specifies the host source path for the file system to mount into the container. |
| **Container Mount Path** | Specifies the mount path inside the container where the file system appears, for example */mnt/data* or */var/lib/data*. |
{{< /truetable >}}

For existing filesystem devices, the <span class="material-icons">more_vert</span> actions menu includes options to **Edit** or **Delete** the filesystem device.

See [Configuring Filesystem Devices]({{< relref "/Containers/ManagingContainers.md#configuring-filesystem-devices" >}}) in the Containers tutorial for configuration procedures.

### NIC Devices Card

The **NIC Devices** card displays network interfaces (NICs) attached to the container.

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Devices Card" id="NIC Devices Card" >}}

Each NIC displays the network interface name and MAC address in the format: *{interface_name} ({mac_address})*.
For example: *br0 (aa:bb:cc:dd:ee:ff)* or *br0 (Default Mac Address)*.

{{< hint type=important >}}
NIC modifications are restricted when there are pending network interface changes on the TrueNAS system.
If the card displays a warning about pending changes, apply or revert those network changes before modifying container NICs.
{{< /hint >}}

**Add** opens a menu with available network interfaces grouped by type.

#### Add/Edit NIC Device Dialog

The **Add/Edit NIC Device** dialog configures network interface settings for the container.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerNICDevice.png" alt="Add NIC Device" id="Add NIC Device" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **NIC Type** | Sets the NIC type (*virtio*, *macvlan*, *ipvlan*, etc.). |
| **Use Default Mac Address** | Sets TrueNAS to automatically assign a MAC address. Only available when adding a new NIC. |
| **Mac Address** | Specifies a custom MAC address. Only shows while adding and when **Use Default Mac Address** is not selected. If editing a NIC, leave empty to use the default MAC address. |
| **Trust Guest RX Filters** | (*virtio* type only) When enabled, trusts guest OS receive filter settings for better performance. |
{{< /truetable >}}

**Add** or **Update** applies the NIC configuration.

For existing NICs, the <span class="material-icons">more_vert</span> actions menu provides options to **Edit** or **Delete** the NIC.

{{< hint type=note >}}
NICs can only be modified when the container is stopped.
{{< /hint >}}

### Tools Card

The **Tools** card provides quick access to the container shell.

{{< trueimage src="/images/SCALE/Virtualization/ContainersToolsWidget.png" alt="Tools Card" id="Tools Card" >}}

**Shell** opens a **Container Shell** session for command-line interaction with the container. The shell is only available when the container is running.

## Edit Container Screen

The **Edit Container: *Container*** screen includes most settings from the **[Add Container Screen](#add-container-screen)** except **Image**, **Pool**, and **ID Map Type**.

Settings available in edit mode include **Name**, **Description**, **Autostart**, and all **Advanced Options** (**CPU Configuration**, **Time Configuration**, **Init Process**, **Environment Variables**, and **Capabilities**).  

Note that the **Init Process** command field cannot be changed after creation, but **Init Working Directory**, **Init User**, and **Init Group** remain editable.

Device, disk, network, and other settings are configured via the [Containers Cards](#containers-cards) on the **Containers** screen.

{{< trueimage src="/images/SCALE/Virtualization/EditContainerBasic.png" alt="Edit Container Screen" id="Edit Container Screen" >}}

The screen has **Basic** settings (Name, Description, Autostart) visible by default, with an **Advanced Options** button to expand additional configuration sections.

For detailed field descriptions, see the **[Add Container Screen](#add-container-screen)** section. The Edit screen uses the same fields except **Image**, **Pool**, **ID Map Type**, and the **Init Process** command (none of which can be changed after creation).

{{< enterprise >}}
**Autostart in HA Environments**

In High Availability configurations, containers with autostart enabled automatically restart on the new active controller after a failover.
Ensure containers have static IP addresses configured to maintain network connectivity after failover.
See [Containers in High Availability Environments]({{< relref "/Containers/ManagingContainers.md#containers-in-high-availability-environments" >}}) for details.
{{< /enterprise >}}