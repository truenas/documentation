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

## Containers Screen

The **Containers** screen allows users to add, edit, or manage Linux containers.

The **Containers** screen displays **No Containers** before you create the first container.

{{< trueimage src="/images/SCALE/Virtualization/ContainersScreenNoContainers.png" alt="Containers Screen No Containers" id="Containers Screen No Containers" >}}

The **Settings** button opens the [**Settings**](#settings-panel) panel to configure global container options.

**Create New Container** at the top right of the screen opens the **[Add Container](#add-container-form)** form.

## Settings Panel

**Settings** opens the **Settings** screen showing global options that apply to all containers.
Use this panel to configure an optional preferred storage pool for containers and default network settings.

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Settings Panel" id="Settings Panel" >}}

### Preferred Pool

**Preferred Pool** specifies a default storage pool for container data.
This setting is optional.
Select a pool from the dropdown list to use it as the default when creating containers.
If no preferred pool is set, TrueNAS prompts for pool selection when creating each container.

#### Default Network Settings

**Default Network** settings configure global networking defaults for the containers service.

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Bridge** | Specifies the network bridge. Select from the dropdown list. **Automatic** uses the default network bridge for communication between containers and the TrueNAS host. Additional options show existing configured bridges. See [Accessing NAS from VMs and Containers]({{< ref "/SCALE/SCALETutorials/Network/ContainerNASBridge" >}}) for more information. |
| **IPv4 Network** | (Displayed only when **Bridge** is set to **Automatic**) Specifies the IPv4 address and subnet for the automatic bridge (e.g., *192.168.1.0*/*24*). Leave empty to use the default address. At least one network (IPv4 or IPv6) must be specified. |
| **IPv6 Network** | (Displayed only when **Bridge** is set to **Automatic**) Specifies the IPv6 address and subnet for the automatic bridge (e.g., *fd42:96dd:aef2:483c::1*/*64*). Leave empty to use the default address. At least one network (IPv4 or IPv6) must be specified. |
{{< /truetable >}}

<!--
TODO: Map User And Group IDs section removed - No UI exists in webui for IDMAP management.
Backend API supports IDMAP via container.create() with idmap parameter (DEFAULT/ISOLATE D/None modes).
WebUI bug filed: [INSERT BUG NUMBER]
Restore this section once webui implements the IDMAP management UI.

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
-->

## Add Container Form

The **Add Container** form displays basic configuration fields and an **Advanced Options** button for additional settings.

### Basic Settings

The basic settings are always visible and configure essential container properties.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerBasic.png" alt="Add Container Basic Settings" id="Add Container Basic Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter an alphanumeric name for the container. |
| **Description** | Optional. Enter a description for the container. |
| **Autostart** | Optional. Select to automatically start the container when the system boots. |
| **Image** | Required. Click **Browse Catalog** to open the **Select Image** screen with available Linux image choices. Search or browse to locate your desired image and click **Select**. |
| **Pool** | (Conditional) Select a storage pool for the container. This field appears when no preferred pool is configured in [Settings](#settings-panel). |
{{< /truetable >}}

{{< include file="/static/includes/InstanceNameRequirements.md" >}}

### Advanced Options

Click **Advanced Options** to display additional configuration settings.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerAdvanced1.png" alt="Add Container Advanced Options - Part 1" id="Add Container Advanced Options - Part 1" >}}

#### CPU Configuration

The **CPU Configuration** settings bind the container to specific CPU cores.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **CPU Set** | Optional. Specify CPU core numbers to allocate to the container (e.g., *0,1,2* or *0-3*). Leave blank to allow the container access to all host CPU cores. |
{{< /truetable >}}

#### Time Configuration

The **Time Configuration** settings control container time zone and shutdown behavior.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Container Time** | Select the time zone for the container. **Local** uses the host system time. **UTC** uses Coordinated Universal Time. |
| **Shutdown Timeout** | Specify the number of seconds to wait for the container to shut down gracefully before forcing termination. Default is 30 seconds. |
{{< /truetable >}}

#### Init Process

The **Init Process** settings configure the container's initialization process.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Init Process** | Optional. Specify the init process command line. Default is `/sbin/init`. |
| **Init Working Directory** | Optional. Specify the working directory for the init process. |
| **Init User** | Optional. Specify the user to run the init process as. |
| **Init Group** | Optional. Specify the group to run the init process as. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Virtualization/AddContainerAdvanced2.png" alt="Add Container Advanced Options - Part 2" id="Add Container Advanced Options - Part 2" >}}

#### Environment Variables

The **Environment Variables** settings configure optional environment variables to run on boot or execute.

Click **Add** to display a set of environment variable fields.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter the environment variable name (e.g., *PATH*, *HOME*). |
| **Value** | Enter the value for the environment variable. |
{{< /truetable >}}

Click **Add** again to configure additional environment variables.

#### Capabilities

The **Capabilities** settings control Linux capabilities, which are special permissions that divide root privileges into distinct units.
This allows containers to perform specific privileged operations without granting full root access.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Capabilities Policy** | Select the default policy for container capabilities:<br><br>**DEFAULT** (Recommended): Keeps most capabilities but drops dangerous ones (sys_module, sys_time, mknod, audit_control, mac_admin). Provides security while allowing normal container operations.<br><br>**ALLOW**: Grants all capabilities. Use when containers need broad system access, but reduces security isolation.<br><br>**DENY**: Drops all capabilities. Provides maximum security isolation for untrusted containers. |
{{< /truetable >}}

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

The **Stop Options** window defines how the container stops:

- **Wait for graceful stop** - Sends a shutdown signal and waits indefinitely for the container to stop gracefully. Does not force kill the container.
- **Wait for graceful stop, then force** - Sends a shutdown signal and waits for the container's shutdown timeout (default 30 seconds). Force kills the container if still running after the timeout expires.
- **Force stop immediately** - Immediately force kills the container without attempting graceful shutdown.

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

The **General Info** widget displays container configuration details including **Description**, **Autostart**, **Dataset**, **CPU Set**, **Container Time**, **Shutdown Timeout**, **Init Process** command, and **Capabilities Policy**. **Init Working Directory**, **Init User**, and **Init Group** also display when configured.
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

{{< trueimage src="/images/SCALE/Virtualization/GPUDevices.png" alt="GPU Devices Widget" id="GPU Devices Widget" >}}

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

{{< trueimage src="/images/SCALE/Virtualization/FilesystemDevicesWidget.png" alt="Filesystem Devices Widget" id="Filesystem Devices Widget" >}}

**Add** opens fields to configure a new filesystem device mount.

{{< trueimage src="/images/SCALE/Virtualization/AddFilesystemDevice.png" alt="Add Filesystem Device" id="Add Filesystem Device" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host Directory Source** | Host source path for the filesystem. Enter or browse to select an existing host directory or dataset path. |
| **Container Mount Path** | Mount path inside the container where the filesystem appears. Enter the container path, for example */mnt/data* or */var/lib/data*. |
{{< /truetable >}}

For existing filesystem devices, the <span class="material-icons">more_vert</span> actions menu includes options to **Edit** or **Delete** the filesystem device.

See [Configuring Filesystem Devices]({{< relref "/SCALE/SCALETutorials/Containers/_index.md#configuring-filesystem-devices" >}}) in the Containers tutorial for configuration procedures.

### NIC Devices Widget

The **NIC Devices** widget displays network interfaces (NICs) attached to the container.

{{< enterprise >}}
**High Availability Configuration**

Containers in High Availability (HA) environments require a static IP address configured in the container operating system.

Without a static IP, containers lose network connectivity after a controller failover.
Configure the static IP inside the container OS, not in TrueNAS network settings.

See [Containers in High Availability Environments]({{< relref "/SCALE/SCALETutorials/Containers/_index.md#containers-in-high-availability-environments" >}}) for detailed guidance.
{{< /enterprise >}}

{{< trueimage src="/images/SCALE/Virtualization/NICWidget.png" alt="NIC Devices Widget" id="NIC Devices Widget" >}}

Each NIC displays the network interface name and MAC address in the format: `{interface_name} ({mac_address})`.
Example: `br0 (aa:bb:cc:dd:ee:ff)` or `br0 (Default Mac Address)`.

{{< hint type=important >}}
NIC modifications are restricted when there are pending network interface changes on the TrueNAS system.
If the widget displays a warning about pending changes, apply or revert those network changes before modifying container NICs.
{{< /hint >}}

**Add** opens a menu with available network interfaces grouped by type.
Select a NIC from the menu to open the configuration dialog.

#### Add/Edit NIC Device Dialog

The **Add/Edit NIC Device** dialog configures network interface settings for the container.

{{< trueimage src="/images/SCALE/Virtualization/AddContainerNICDevice.png" alt="Add NIC Device" id="Add NIC Device" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **NIC Type** | Select the NIC type (virtio, macvlan, ipvlan, etc.). |
| **Use Default Mac Address** | (While adding only) Select to automatically assign a MAC address. |
| **Mac Address** | Enter a custom MAC address. While adding, this field appears when **Use Default Mac Address** is deselected. While editing, leave empty to use the default MAC address. |
| **Trust Guest RX Filters** | (virtio type only) Enable to trust guest OS receive filter settings for better performance. |
{{< /truetable >}}

**Add** or **Update** applies the NIC configuration.

For existing NICs, the <span class="material-icons">more_vert</span> actions menu provides options to **Edit** or **Delete** the NIC.

{{< hint type=note >}}
NICs can only be modified when the container is stopped.
If the container is running, stop it before editing or deleting NICs.
{{< /hint >}}

### Tools Widget

The **Tools** widget provides quick access to the container shell.

{{< trueimage src="/images/SCALE/Virtualization/ContainersToolsWidget.png" alt="Tools Widget" id="Tools Widget" >}}

**Shell** opens a **Container Shell** session for command-line interaction with the container. The shell is only available when the container is running.

## Edit Container Screen

The **Edit Container: *Container*** screen includes most settings from the **[Add Container Form](#add-container-form)** except **Image** and **Pool**.

Settings available in Edit mode include **Name**, **Description**, **Autostart**, and all **Advanced Options** (CPU Configuration, Time Configuration, Init Process, Environment Variables, and Capabilities).

Note that the **Init Process** command line field cannot be changed after creation, but **Init Working Directory**, **Init User**, and **Init Group** remain editable.

To edit device, disk, network, or proxy settings, use the [Containers Widgets](#containers-widgets) on the **Containers** screen.

{{< trueimage src="/images/SCALE/Virtualization/EditContainerBasic.png" alt="Edit Container Screen" id="Edit Container Screen" >}}

The form has **Basic** settings (Name, Description, Autostart) visible by default, with an **Advanced Options** button to expand additional configuration sections.

For detailed field descriptions, see the **[Add Container Form](#add-container-form)** section. The Edit form uses the same fields except **Image**, **Pool**, and **Init Process** command (which cannot be changed after creation).

{{< enterprise >}}
**Autostart in HA Environments**

In High Availability configurations, containers with autostart enabled automatically restart on the new active controller after a failover.
Ensure containers have static IP addresses configured to maintain network connectivity after failover.
See [Containers in High Availability Environments]({{< relref "/SCALE/SCALETutorials/Containers/_index.md#containers-in-high-availability-environments" >}}) for details.
{{< /enterprise >}}