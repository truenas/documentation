---
title: "Instances"
description: "Provides information on the Instances screens and settings to add containers or virtual machines (VMs) to your TrueNAS system."
weight: 80
aliases:
- /scaleuireference/virtualizationscreens/
tags:
 - vm
 - container
 - instances
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

## Instances Screen

The **Instances** screen allows users to add, edit, or manage virtual machines (VMs) and Linux containers.

The first time you go to **Instances**, the screen header shows a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status.
You must choose the pool instances use before you can create an instance. See [**Global Settings**](#global-settings) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesPoolNotSelected.png" alt="Pool Is Not Selected" id="Pool Is Not Selected" >}}

After setting the pool, <i class="fa fa-check" aria-hidden="true" title="Check"></i> **Initialized** shows on the screen header.

The **Instances** screen displays **No Instances** before you create the first instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenNoInstances.png" alt="Instances Screen No Instances" id="Instances Screen No Instances" >}}

The **Configuration** dropdown menu includes **[Global Settings](#global-settings-screen)** and **[Manage Volumes](#manage-volumes-screen)**.

**Create New Instance** at the top right of the screen opens the **[Create Instance](#create-instance-wizard-screens)** wizard.

## Configuration Menu

**Configuration** on the **Instances** screen header displays service-level settings that apply to all instances.

* **Global Settings** opens the **[Global Settings](#global-settings)** screen.
* **Manage Volumes** opens the [**Volumes**](#volumes) screen.

{{< trueimage src="/images/SCALE/Virtualization/InstancesConfigurationMenu.png" alt="Configuration Menu" id="Configuration Menu" >}}

### Global Settings

**Global Settings** opens the **Global Settings** screen showing global options that apply to all instance, including selecting the storage pool for instances and network settings.

{{< trueimage src="/images/SCALE/Virtualization/InstancesGlobalSettingsScreen.png" alt="Global Settings Screen" id="Global Settings Screen" >}}

#### Storage Settings

The **Pool** dropdown list shows a list of available pools on the system.
Select a pool for instances.

The first time you open the **Instances** screen, the header shows a <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** status.
**Select Pool** at the top right of the screen opens the **Global Settings** screen.
Select the pool from the dropdown list, then click **Save**.
This starts the instances service.

To unset an active pool and stop the instances service, click **Configuration > Global Settings** and select **[Disabled]** from the **Pool** dropdown list.
 on the **Settings** menu opens the **Unset Pool** dialog. Click **Unset** to unset the pool and turn off the application service.
Click **Save**.
When complete, the **Instances** screen displays the **No instances** and <i class="fa fa-cog" aria-hidden="true"></i> **Pool is not selected** statuses.

#### Network Settings

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| Bridge | Select **Automatic** to use the default network bridge for communication between instances and the TrueNAS host or use the dropdown list to select an existing bridge. See [Accessing NAS from VMs and Containers]({{< relref "/ScaleTutorials/Network/ContainerNASBridge.md" >}}) for more information. |
| **IPv4 Network** | Displays when **Bridge** is set to **Automatic**. Enter the IPv4 address and subnet to use for the bridge or leave empty to allow TrueNAS to use the default address. |
| **IPv6 Network** | Displays when **Bridge** is set to **Automatic**. Enter the IPv6 address and subnet to use for the bridge or leave empty to allow TrueNAS to use the default address. |
{{< /truetable >}}

### Volumes

The **Volumes** screen lists all <file>.iso</file> images currently uploaded to the instances service.

{{< trueimage src="/images/SCALE/Virtualization/InstancesVolumesScreen.png" alt="Volumes Screen" id="Volumes Screen" >}}

**Upload New Image** opens a file browser to select an image from the client computer and upload it to TrueNAS for use in instances.
Select the image and then open it.
An **Uploading Image** dialog displays.
When complete, the new image displays on the **Volumes** list.

{{< expand "Image Filename Requirements" "v" >}}
Valid instance names must meet the following conditions:

* The name must be between 1 and 63 characters long.
* The name must contain only letters, numbers and dashes from the ASCII table.
* The name must not start with a digit or a dash.
* The name must not end with a dash.

This ensures the instance name works without conflicts in DNS records, the file system, security profiles, and as the instance hostname.
See [Instance name requirements](https://linuxcontainers.org/incus/docs/main/reference/instance_properties/#instance-name-requirements) from Incus for more information.
{{< /expand >}}

#### Delete Volumes

Click <i class="material-icons" aria-hidden="true" title="Delete">delete</i> on an image row to delete that image.
A **Delete volume** dialog displays.

{{< trueimage src="/images/SCALE/Virtualization/InstancesDeleteVolume.png" alt="Delete Volume Dialog" id="Delete Volume Dialog" >}}

Select **Confirm** and then click **Continue** to delete the image.
To prevent accidental deletion of an in-use image, the delete icon is not selectable for active images.

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
| **Use an ISO image** | Select to use ISO image previously uploaded to the instances service or to upload a new one. **Select ISO** opens the **Volumes** screen. Locate your desired image and click **Select** or use **Upload New Image**. See [Volumes](#volumes) for more information. |
| **Use zvol with previously installed OS** | Select to create a new instance using an existing VM storage volume. Enter or browse to select the zvol on the TrueNAS system.<br><br>Use this option to migrate a previously configured VM, such as after updating from TrueNAS 24.10. See [Migrating Virtual Machines](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/#migrating-virtual-machines) from the 25.04 release notes for more information. |
{{< /truetable >}}
{{< /expand >}}

### CPU & Memory

The **CPU & Memory** settings specify the number of virtual CPU cores to allocate to the virtual machine and memory size.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceCPUandMemory.png" alt="CPU & Memory" id="CPU & Memory" >}}

{{< include file="/static/includes/VMCPUandMemorySettings.md" >}}

### Environment

The Environment settings allow you to configure optional environment variables to run on boot or execute.
TrueNAS supports environment variables for Linux containers only.

Click Add to display a set of environment fields.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceEnvironment.png" alt="Environment" id="Environment" >}}

{{< expand "Environment Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| Name | Enter the name of the environment variable to set (for example, `LANG`). |
| Value | Enter the value to assign to the environment variable (for example, `en_US.UTF-8`). |
{{< /truetable >}}
{{< /expand >}}

### Disks

The **Disks** settings allow mounting storage volumes to an instance.
Options are to create a new zvol on an existing dataset or to use an existing zvol.
For VMs, you can also specify the size of the root disk.

Click **Add** to configure to create or mount a disk.
Click **Add** again to create or mount additional disks.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceDisksVM.png" alt="Disks - VM" id="Disks - VM" >}}

{{< expand "Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Root Disk Size (in GiB)** | (Required for VMs only) Enter a plain integer to configure the size of the VM root disk (default 10). |
| **Source** | (Required) Displays after clicking **Add** in **Disks**. To create a new zvol, enter a path or browse to select a parent dataset from the dropdown list of datasets on the system. Then click **Create Dataset**, enter a name for the new zvol in the **Create Dataset** window, and click **Create**. <br><br> To use an existing zvol, select an existing zvol from the dropdown list under <file>/dev/zvol/</file>. |
| **Destination** | (Required for containers only) Enter the filesystem path to mount the disk at in the container. |
{{< /truetable >}}
{{< /expand >}}

### Proxies

The **Proxies** settings allow you to forward network connections between the host and the instance.
This routes traffic from a specific address on the host to an address inside the instance, or vice versa, allowing the instance to connect externally through the host.

Click **Add** to display a set of proxy configuration settings.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceProxies.png" alt="Proxies" id="Proxies" >}}

{{< expand "Proxies Settings" "v" >}}
{{< include file="/static/includes/InstanceProxySettings.md" >}}
{{< /expand >}}

### Network

The **Network settings** configure how the instance connects to the host and external networks.
Options include the default network bridge, an existing bridge interface, or a MACVLAN.

See [Accessing NAS from VMs and Containers]({{< relref "/SCALETutorials/Network/ContainerNASBridge.md" >}}) for more information.

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

{{< expand "Network Settings" "v" >}}

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use default network settings** | Select to use default network settings to connect the instance to the host using the automatic bridge defined in [Global Settings](#global-settings). Selected by default. Deselect to display the **Bridged NICs** (if available) and **Macvlan NICs** settings. |
| **Bridged NICs** | Select an existing bridge on the TrueNAS host to connect to the instance. Displays when one or more existing bridge interface(s) is available. |
| **Macvlan NICs** | Select an existing interface to create a virtual network interface based on it, assigning a unique MAC address so the instance appears as a separate device on the network. |
{{< /truetable >}}
{{< include file="/static/includes/MacvlanHost.md" >}}
{{< /expand >}}

### USB Devices

The **USB Devices** settings let you attach a USB device to an instance, allowing it to function as if physically connected.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceUSB.png" alt="USB Devices" id="USB Devices" >}}

Select one or more device(s) to attach.

### PCI Passthrough

The **PCI Passthrough** settings let you assign a physical PCI device, such as a network card or GPU, directly to a VM, allowing it to use the device as if physically attached.
This setting is only available for VMs and cannot be used with containers.

The selected PCI device(s) cannot be in use by the host or share an IOMMU group with devices the host requires.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstancePCI.png" alt="PCI Passthrough" id="PCI Passthrough" >}}

Click **Add PCI Passthrough** to open the [**Add PCI Passthrough Device**](#add-pci-passthrough-device-screen) screen and select the device(s) to attach.

### VNC

The **VNC** settings allow you to enable VNC access for a VM, configure the VNC port, and set a VNC password for remote access.
This setting is only available for VMs and cannot be used with containers.

{{< trueimage src="/images/SCALE/Virtualization/CreateInstanceVNC.png" alt="VNC Settings" id="VNC Settings" >}}

{{< expand "VNC Settings" "v" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable VNC** | Select to allow remote desktop access via VNC. |
| **VNC Port** | Enter a port number to configure the port on which the VM VNC server listens for connections. |
| **VNC Password** | Enter a password to authenticate VNC access to the VM. Note: A VNC password is not cryptographically secure. You should not rely on it as a single authentication mechanism for your VMs. |
{{< /truetable >}}
{{< /expand >}}

## Instances Table

The **Instances** table lists each configured instance, displaying its name, type, current state, and options to restart or stop it.
Stopped instances show the option to start the instance.

{{< trueimage src="/images/SCALE/Virtualization/InstancesScreenWithInstances.png" alt="Instances Screen - Populated" id="Instances Screen - Populated" >}}

Click on an instance to populate the **Details for *Instance*** [widgets](#instances-widgets) with information and configuration options for that instance.

Click <i class="material-icons" aria-hidden="true" title="Restart">restart_alt</i> to restart or <i class="material-icons" aria-hidden="true" title="Stop">stop_circle</i> to stop a running instance.
Click <i class="material-icons" aria-hidden="true" title="Start">play_circle</i> to start a stopped instance.

**Search** above the **Instances** table allows entering the name of an instance to locate a configured instance.

Selecting the checkbox to the left of **Name** selects all configured instances and shows the [**Bulk Actions**](#bulk-actions) dropdown list.
Selecting the checkbox on an instance row also shows the [**Bulk Actions**](#bulk-actions) dropdown list.

### Bulk Actions

The **Bulk Action** dropdown list allows you to apply actions to one or more instances on your system.
Select the checkbox to the left of **Name** to show the **Bulk Actions** dropdown menu.

Menu options are **Start All Selected**, **Stop All Selected**, and **Restart All Selected**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesBulkActions.png" alt="Bulk Actions" id="Bulk Actions" >}}

## Instances Widgets

Configured instances have a set of widgets on the **Instances** screen.
Click on an instance row to highlight it and view the information widgets for that instance.
Information in the widgets changes based on the row highlighted in the **Instances** table.

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

**Add** opens a flyout menu containing available options for **USB Devices**, **GPUs**, **TPM**, and **PCI Passthrough** devices.
Select a device to attach it to the instance.

**Add Device** under **PCI Passthrough** opens the [**Add PCI Passthrough Device**](#add-pci-passthrough-device-screen) screen.

### Disks Widget

The **Disks** widget shows the storage devices attached to the instance, along with their associated paths.
It allows you to manage the disks, including adding new ones or modifying existing ones.

{{< trueimage src="/images/SCALE/Virtualization/DisksWidget.png" alt="Disks Widget" id="Disks Widget" >}}

**Add** opens the [**Add Disk**](#addedit-disk-screen) screen for adding new disks to the instance.

For existing disks, the <span class="material-icons">more_vert</span> actions menu includes options to [**Edit**](#addedit-disk-screen) or [**Delete**](#delete-disks) the disk.

#### Add/Edit Disk Screen

The **Add/Edit Disk** screen allows you to configure a new disk or modify an existing one attached to an instance.

{{< trueimage src="/images/SCALE/Virtualization/AddDiskScreen.png" alt="Add Disk Screen" id="Add Disk Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | Enter or browse to select the host source path for the disk. To create a new dataset, enter or browse to select the parent path, then click **Create Dataset**, enter a name for the new dataset, and click **Create**. |
| **Destination**| Enter the destination path to mount the disk in the instance. |
{{< /truetable >}}

Click **Save** to apply changes.

#### Delete Disks

The **Delete Item** dialog asks for confirmation to delete the selected disk.

{{< trueimage src="/images/SCALE/Virtualization/DeleteDiskDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

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

Click **Save** to apply changes.

#### Delete Proxies

The **Delete Item** dialog asks for confirmation to delete the selected proxy configuration.

{{< trueimage src="/images/SCALE/Virtualization/DeleteProxyDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}

**Confirm** activates the **Continue** button.
**Continue** starts the delete operation.

### Idmap Widget

(Containers Only) The **Idmap** widget shows the user ID (UID) and group ID (GID) mappings used by the instance to translate IDs between the host and the container or VM.
It provides details such as the **Host ID**, **Maprange**, and **NS ID** for both UIDs and GIDs.

{{< trueimage src="/images/SCALE/Virtualization/IdmapWidget.png" alt="Idmap Widget" id="Idmap Widget" >}}

* **Host ID**: Shows the starting ID used by the host for mapping to the instance IDs.
* **Maprange**: Indicates the range of IDs that the host allocates for the instance.
* **NS ID**: Represents the namespace ID used for the mapping.

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
If your environment does not support VNC URLs, you can manually connect using a VNC client by entering the hostname or IP address followed by the port number without `vnc://` (for example, `hostname.domain.com:5930` or `IP:5930`).

### Metrics Widget

The **Metrics** widget displays real-time graphs that monitor instance performance, including CPU usage, memory usage, and disk I/O pressure.

{{< trueimage src="/images/SCALE/Virtualization/MetricsWidget.png" alt="Metrics Widget" id="Metrics Widget" >}}

**CPU (%)** shows the percentage of CPU usage over time.
  
**Memory (MiB)** displays the memory usage in MiB over time.

**Disk I/O Full Pressure (%)** tracks the disk input/output pressure as a percentage over time.

## Add PCI Passthrough Device Screen

The **Add PCI Passthrough Device** screen lists the available physical PCI devices that can be attached to an instance.

PCI passthrough assigns a physical PCI device, such as a network card or GPU, directly to a VM, allowing it to function as if physically attached.

The selected PCI device(s) must not be in use by the host or share an IOMMU group with any device the host requires.

{{< trueimage src="/images/SCALE/Virtualization/AddPCIPassthroughDevice.png" alt="Add PCI Passthrough Device Screen" id="Add PCI Passthrough Device Screen" >}}

To filter available devices, enter a device type or label in **Search Devices**, or use the **Type** dropdown.

Click **Select** to attach the selected device.
