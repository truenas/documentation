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

a

### Creating a Virtual Machine

### Creating a Container
<!-- Commenting out previous tutorial content

## Creating a Virtual Machine
Before creating a VM, obtain an installer <file>.iso</file> or image file for the OS you intend to install, and create a [zvol]({{< relref "AddManageZvols.md" >}}) on a storage pool that is available for both the virtual disk and the OS install file.

If the VM needs to access local NAS storage, you need to create a network bridge to allow communication.
See [Accessing TrueNAS Storage from a VM](#accessing-truenas-storage-from-a-vm) below for more information.

To create a new VM, go to **Instances** and click **Add** to open the **Create Virtual Machine** configuration screen.
If you have not yet added a virtual machine to your system, click **Add Virtual Machines** to open the same screen.

1. Select the operating system you want to use from the **Guest Operating System** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/AddVMOperSys.png" alt="Operating System Settings" id="Operating System Settings" >}}

   Compare the recommended specifications for the guest operating system with your available host system resources when allocating virtual CPUs, cores, threads, and memory size.

2. Change other **Operating System** settings per your use case.

   Select **UTC** as the VM system time from the **System Clock** dropdown if you do not want to use the default **Local** setting.

   Select **Enable Display** to enable a SPICE Virtual Network Computing (VNC) remote connection for the VM.
      The **Bind** and **Password** fields display. If **Enable Display** is selected:

   Enter a display **Password**

   Use the dropdown menu to change the default IP address in **Bind** if you want to use a specific address as the display network interface, otherwise leave it set to **0.0.0.0**.
   The **Bind** menu populates any existing logical interfaces, such as static routes, configured on the system.
   **Bind** cannot be edited after VM creation.

   Click **Next**.

3. Enter the CPU and memory settings for your VM.

   {{< trueimage src="/images/SCALE/Virtualization/AddVMMemory.png" alt="CPU and Memory" id="CPU and Memory" >}}

   If you selected Windows as the **Guest Operating System**, the **Virtual CPUs** field displays a default value of 2.
   The VM operating system might have operational or licensing restrictions on the number of CPUs.

   Do not allocate too much memory to a VM. Activating a VM with all available memory allocated to it can slow the host system or prevent other VMs from starting.

   Leave **CPU Mode** set to **Custom** if you want to select a CPU model.

   Use **Memory Size** and **Minimum Memory Size** to specify how much RAM to dedicate to this VM.
   To dedicate a fixed amount of RAM, enter a value (minimum 256 MiB) in the **Memory Size** field and leave **Minimum Memory Size** empty.

   To allow for memory usage flexibility (sometimes called ballooning), define a specific value in the **Minimum Memory Size** field and a larger value in **Memory Size**.
   The VM uses the **Minimum Memory Size** for normal operations but can dynamically allocate up to the defined **Memory Size** value in situations where the VM requires additional memory.
   Reviewing available memory from within the VM typically shows the **Minimum Memory Size**.

   Click **Next**.

4. Configure disk settings.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineDisks.png" alt="Disks" id="Disks" >}}

   Select **Create new disk image** to create a new zvol on an existing dataset.  
   Select **Use existing disk image** to use an existing zvol for the VM.

   Select either **AHCI** or **VirtIO** from the **Select Disk Type** dropdown list. We recommend using **AHCI** for Windows VMs.

   Select the location for the new zvol from the **Zvol Location** dropdown list.

   Enter a value in **Size (Examples: 500KiB, 500M, and 2TB)** to indicate the amount of space to allocate for the new zvol.

   Click **Next**.

5. Configure the network interface.

   {{< trueimage src="/images/SCALE/Virtualization/AddVMNetwork.png" alt="Network Interface" id="Network Interface" >}}

   Select the network interface type from the **Adapter Type** dropdown list. Select **Intel e82585 (e1000)** as it offers a higher level of compatibility with most operating systems, or select **VirtIO** if the guest operating system supports para-virtualized network drivers.

   Select the network interface card to use from the **Attach NIC** dropdown list.
   If the VM needs to access local NAS storage, attach a [network bridge](#accessing-truenas-storage-from-a-vm) interface.

   Click **Next**.

6. Upload installation media for the operating system you selected.

   {{< trueimage src="/images/SCALE/Virtualization/AddVMInstallMedia.png" alt="Installation Media" id="Installation Media" >}}

   You can create the VM without an OS installed. To add it either type the path or browse to the location and select it.

   To upload an <file>iso</file> select **Upload New Image File** and either enter the path or browse to the location of the file.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVMWInstallMediaUploadSCALE.png" alt="Upload Installation Media" id="Upload Installation Media" >}}

   Click **Upload** to begin the upload process. After the upload finishes, click **Next**.

7. Specify a GPU.

   {{< trueimage src="/images/SCALE/Virtualization/AddVMGPU.png" alt="GPU Screen" id="GPU Screen" >}}

   {{< hint type="note" title="Supported GPUs" >}}
    TrueNAS does not have a list of approved GPUs at this time but TrueNAS does support various GPU from Nvidia, Intel, and AMD.
    As of 24.10, TrueNAS does not automatically install NVIDIA drivers. Instead, users must manually install drivers from the UI. For detailed instructions, see (https://www.truenas.com/docs/truenasapps/#installing-nvidia-drivers).
   {{< /hint >}}

8. Confirm your VM settings, then click **Save**.

### Adding and Removing Devices
After creating the VM, you can add or remove virtual devices.

Click on the VM row on the **Virtual Machines** screen to expand it and show the options, then click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices**.

{{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="Devices" id="Devices" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

<!-- nb: this is the content from the removed /scaletutorials/virtualization/addmanagevmdevicesscale/ -->
<!-- preserved here in case any of it is useful when this tutorial is rewritten for Instances. -->
<!--
## Managing Devices

After creating a VM, the next step is to add virtual devices for that VM.
Using the Create Virtual Machine wizard configures at least one disk, NIC, and the display as part of the process.
To add devices, from the **Virtual Machines** screen, click anywhere on a VM entry to expand it and show the options for the VM.

Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the **Devices** screen for the VM.
From this screen, you can edit, add, or delete devices.
Click the <span class="material-icons">more_vert</span> icon at the right of each listed device to see device options.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Options" id="VM Options" >}}

The devices for the VM display as a list.

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.
* With a **Display** device, remote clients can connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
  SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).

Before adding, editing, or deleting a VM device, stop the VM if it is running.
Click the **State** toggle to stop or restart a VM, or use the **Stop** and **Restart** buttons.

### Editing a Device

Select **Edit** to open the **Edit Device** screen.
You can change the type of virtual hard disk, the storage volume to use, or change the device boot order.

To edit a VM device:

1. Stop the VM if it is running, then click **Devices** to open the list of devices for the selected VM.
2. Click on the <span class="material-icons">more_vert</span> icon at the right of the listed device you want to edit, then select **Edit** to open the **Edit Device** screen.

   {{< trueimage src="/images/SCALE/Virtualization/EditDeviceDiskScreen.png" alt="Edit Device VM Disk" id="Edit Device VM Disk" >}}

3. Select the path to the zvol created when setting up the VM on the **Zvol** dropdown list.
4. Select the type of hard disk emulation from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
5. (Optional) Specify the disk sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** byte values from the dropdown list.
   If not set, the sector size uses the ZFS volume values.
6. Specify the boot order or priority level in **Device Order** to move this device up or down in the sequence.
   The lower the number the higher the priority in the boot sequence.
7. Click **Save**.
8. Restart the VM.

### Deleting a Disk Device

Deleting a device removes it from the list of available devices for the selected VM.

To delete a VM device:

1. Stop the VM if it is running, then click **Devices** to open the list of devices for the selected VM.
2. Click on the <span class="material-icons">more_vert</span> icon at the right of the listed device you want to edit, then select **Delete**.
   The **Delete Virtual Machine** dialog opens.

   {{< trueimage src="/images/SCALE/Virtualization/DeleteVirtualMachine.png" alt="Delete Virtual Machine" id="Delete Virtual Machine" >}}

3. Select **Delete zvol device** to confirm you want to delete the zvol device.
   Select **Force Delete** if you want the system to force the deletion of the zvol device, even if other devices or services are using or affiliated with the zvol device.
4. Click **Delete Device**.

### Changing the Device Order

1. Stop the VM if it is running, then click **Devices** to open the list of devices for the selected VM
2. Click **Edit**.
3. Enter the number that represents where in the boot sequence you want this device to boot in the **Devices Order** field.
   The lower the number, the higher the device is in the boot sequence.
4. Click **Save**.
5. Restart the VM.

### Adding a CD-ROM Device

Select **CD-ROM** as the **Device Type** on the **Add Device** screen and set a boot order.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **CD-ROM** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceCDROM.png" alt="Devices Add CD-ROM Type" id="Devices Add CD-ROM Type" >}}

3. Specify the mount path.
   Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** and at the pool and dataset levels to expand the directory tree. Select the path to the CD-ROM device.
4. Specify the boot sequence in **Device Order**.
5. Click **Save**.
6. Restart the VM.

### Adding a NIC Device Type

Select **NIC** in the **Device Type** on the **Add Device** screen to add a network interface card for the VM to use.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **NIC** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceNIC.png" alt="Devices Add NIC" id="Devices Add NIC" >}}

3. Select the adapter type. Choose **Intel e82585(e1000)** for maximum compatibility with most operating systems.
   If the guest OS supports VirtIO paravirtualized network drivers, choose **VirtIO** for better performance.
4. Click **Generate** to assign a new random MAC address to replace the random default address, or enter your own custom address.
5. Select the physical interface you want to use from the **NIC To Attach** dropdown list.
6. (Optional) Select **Trust Guest Filters** to allow the virtual server to change its MAC address and join multicast groups.
   This is required for the IPv6 Neighbor Discovery Protocol (NDP).

   Setting this attribute has security risks.
   It allows the virtual server to change its MAC address and receive all frames delivered to this address.
   Determine your network setup needs before setting this attribute.
7. Click **Save**.
8. Restart the VM

### Add a Disk Device Type

Select **Disk** in **Device Type** on the **Add Device** screen to configure a new disk location, drive type and disk sector size, and boot order.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **Disk** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisk.png" alt="Devices Add Dik" id="Devices Add Disk" >}}

4. Select the path to the zvol you created when setting up the VM using the **Zvol** dropdown list.
5. Select the hard disk emulation type from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or **VirtIO** for better performance if the guest OS installed in the VM supports VirtIO disk devices.
6. Specify the sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** from the dropdown list to change it.
   If the sector size remains unset it uses the ZFS volume values.
7. Specify the boot sequence order for the disk device.
8. Click **Save**.
9. Restart the VM.

### Adding a PCI Passthrough Device

Select **PCI Passthrough Device** in the **Device Type** on the **Add Device** screen to configure the PCI passthrough device and boot order.
{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a warning: PCI device does not have a reset mechanism defined.
You may experience inconsistent or degraded behavior when starting or stopping the VM.
Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **PCI Passthrough Device** from the **Device Type** dropdown list.
3. Enter a value in **PCI Passthrough Device** using the format of bus#/slot#/fcn#.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDevicePCIpass.png" alt="Devices Add PCI Passthrough" id="Devices Add PCI Passthrough" >}}

4. Specify the boot sequence order for the PCI passthrough device.
5. Click **Save**.
6. Restart the VM.

### Adding a USB Passthrough Device

Select **USB Passthrough Device** as the **Device Type** on the **Add Device** screen to configure the USB passthrough device, and set a boot order.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **USB Passthrough Device** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceUSBpass.png" alt="Devices Add USB Passthrough" id="Devices Add USB Passthrough" >}}

3. Select the **Controller Type** from the dropdown list.
4. Select the hub controller type from the **Device** dropdown list.
   If the type is not listed, select **Specify custom**, then enter the **Vendor ID** and **Product ID**.
5. Specify the boot sequence order.
6. Click **Save**.
7. Restart the VM.

### Adding a Display Device

Select **Display** as **Device Type** on the **Add Device** screen to configure a new display device.

1. Stop the VM if it is running, then click **Devices**.
2. Click **Add** and select **Display** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisplay.png" alt="Devices Add Display" id="Devices Add Display" >}}

3. Enter a fixed port number in **Port**.
   To allow TrueNAS to assign the port after restarting the VM, set the value to zero (leave the field empty).
4. Specify the display session settings:
   a. Select the screen resolution to use for the display from the **Resolution** dropdown.
   b. Select an IP address for the display device to use in **Bind**. The default is **0.0.0.0**.
   c. Enter a unique password for the display device to securely access the VM.
5. Select **Web Interface** to allow access to the VNC web interface.
6. Click **Save**.
7. Restart the VM.

Display devices have a 60-second inactivity timeout.
If the VM display session appears unresponsive, try refreshing the browser tab.


## Managing a Virtual Machine
After creating the VM and configuring devices for it, click on the VM to expand it and show the options to manage the VM. 

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Options" id="VM Options" >}}

An active VM displays options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> **Display** and <i class="material-icons" aria-hidden="true" title="Serial Shell">keyboard_arrow_right</i> **Serial Shell** connections.

When a **Display** device is configured, remote clients can connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).

If the display connection screen appears distorted, try adjusting the display device resolution.

Use the **State** toggle or click <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** to follow a standard procedure to do a clean shutdown of the running VM.
Click <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> **Power Off** to halt and deactivate the VM, which is similar to unplugging a computer.

{{< hint type="tip" title="OS Dependent Toggles" >}}
If the VM does not have a guest OS installed, the VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** buttons send an ACPI power down command to the VM operating system, but since an OS is not installed, these commands time out.
Use the **Power Off** button instead.
{{< /hint >}}

## Installing an OS
After configuring the VM in TrueNAS and an OS <file>.iso,</file> file is attached, start the VM and begin installing the operating system.

{{< hint type="note" title="OS Specific Settings" >}}
Some operating systems can require specific settings to function properly in a virtual machine.
For example, vanilla Debian can require advanced partitioning when installing the OS.
Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}

{{< expand "Installing Debian OS Example" "v" >}}
Upload the Debian <file>.iso</file> to the TrueNAS system and attach it to the VM as a CD-ROM device.
This example uses Debian 12 and basic configuration recommendations.
Modify settings as needed to suit your use case.

1. Click **Instances**, then **ADD** to use the VM wizard.
   The table below lists the settings used in this example.

   {{< trueimage src="/images/SCALE/Virtualization/ScaleDebianVMOsSystem.png" alt="Add Debian VM" id="Add Debian VM" >}}

   {{< truetable >}}
   | Wizard Screen | Setting | Description |
   |---------------|---------|-------------|
   | **Operating System:** | Guest Operating System |Linux |
   |  | Name | debianVM |
   |  | Description | Debian VM |
   | **CPU and Memory:** | Memory Size | 1024 MiB |
   | **Disks:** | **Create new disk image** | Selected |
   |  | Zvol Location | Select pool. |
   |  | Size | 30 GiB |
   | **Network Interface:** | Attach NIC | Select the physical interface to associate with the VM. |
   | **Installation Media:** |  | Installation ISO is uploaded to local storage.<br>If the ISO is not uploaded, select **Upload an installer image file**.<br>Select a dataset to store the ISO, click **Choose file**, then click **Upload**. Wait for the upload to complete. |
   | **GPU:** |  | Leave the default values. |
   | **Confirm Options** |  | Verify the information is correct and then click **Save**. |
   {{< /truetable >}}

   After creating the VM, start it. Expand the VM entry and click **Start**.

2. Click **Display** to open a SPICE interface and see the Debian Graphical Installation screens.

3. Press <kbd>Enter</kbd> to start the Debian Graphical Install.

   a. Enter your localization settings for **Language**, **Location**, and **Keymap**.

   b. Debian automatically configures networking and assigns an IP address with DHCP.
      * If the network configuration fails, click **Continue** and do not configure the network yet.

   c. Enter a name in **Hostname**.

   d. Enter a **Domain name**

   e. Enter the root password and re-enter the root password.

   f. Enter a name in **New User**.

   g. Select the username for your account or accept the generated name.

   h. Enter and re-enter the password for the user account.

   j. Choose the time zone, *Eastern* in this case.

4. Detect and partition disks.

   a. Select **Guided - use entire disk** to partition.

   b. Select the available disk.

   c. Select **All files in one partition (recommended for new users)**.

   d. Select **Finish partitioning and write changes to disk**.

   e. Select **Yes** to **Write the changes to disks?**.

5. Install the base system

   a. Select **No** to the question **Scan extra installation media**.

   b. Select **Yes** when asked **Continue without a network mirror**.

6. Install software packages

   a. Select **No** when asked **Participate in the package usage survey**.

   b. Select **Standard** system utilities.

   c. Click **Continue** when the installation finishes.

   After the Debian installation finishes, close the display window.

7. Remove the device or edit the device order.
   In the expanded section for the VM, click **Power Off** to stop the new VM.

   a. Click **Devices**.

   b. Remove the CD-ROM device containing the install media or edit the device order to boot from the Disk device.

      * To remove the CD-ROM from the devices, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Delete**.
      Click **Delete Device**.

      * To edit the device boot order, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Edit**.
      Change the CD-ROM **Device Order** to a value greater than that of the existing Disk device, such as *1005*.
      Click **Save**.

8. Return to the **Virtual Machines** screen and expand the new VM again.

9. Click **Start**, then click **Display**.
{{< /expand >}}
{{< expand "What if the grub file does not run after starting the VM?" "v" >}}
The grub file does not run when you start the VM, enter the following after each start.
At the shell prompt:
1. Enter `FS0:` and press <kbd>Enter</kbd>.
2. Enter `cd EFI` and press <kbd>Enter</kbd>.
3. Enter `cd Debian` and press <kbd>Enter</kbd>.
4. Enter `grubx64.efi` and press <kbd>Enter</kbd>.

{{< hint type=important >}}
To ensure it starts automatically, create the <file>startup.nsh</file> file at the root directory on the VM. To create the file:

1. Go to the **Shell**.

2. At the shell prompt enter `edit startup.nsh`.

3. In the editor enter:

   a. Enter `FS0:` and press <kbd>Enter</kbd>.

   b. Enter `cd EFI` and press <kbd>Enter</kbd>.

   c. Enter `cd Debian` and press <kbd>Enter</kbd>.

   d. Enter `grubx64.efi` and press <kbd>Enter</kbd>.

   Use the <kbd>Control+s</kbd> keys (Command+s for Mac OS) then press <kbd>Enter</kbd>.

   Use the <kbd>Control+q</kbd> keys to quit.

4. Close the display window

5. To test if it boots up on startup:

   a. Power off the VM.

   b. Click **Start**.

   c. Click **Display**.

   d. Log into your Debian VM.
{{< /hint >}}
{{< /expand >}}

## Configuring Virtual Machine Network Access
Configure VM network settings during or after installation of the guest OS.
To communicate with a VM from other parts of your local network, use the IP address configured or assigned by DHCP within the VM.

To confirm network connectivity, send a ping to and from the VM and other nodes on your local network.

{{< expand "Debian OS Example" "v" >}}
Open a terminal in the Debian VM.

Enter `ip addr` and record the address.

Enter `ping` followed by the known IP or hostname of another client on the network, that is not your TrueNAS host.
Confirm the ping is successful.
To confirm internet access, you can also ping a known web server, such as `ping google.com`.

Log in to another client on the network and ping the IP address of your new VM.
Confirm the ping is successful.
{{< /expand >}}

### Accessing TrueNAS Storage From a VM
By default, VMs are unable to communicate directly with the host NAS.
If you want to access your TrueNAS directories from a VM, to connect to a TrueNAS data share, for example, you have multiple options.

If your system has more than one physical interface, you can assign your VMs to a NIC other than the primary one your TrueNAS server uses. This method makes communication more flexible but does not offer the potential speed of a bridge.

To create a bridge interface for the VM to use if you have only one physical interface, stop all existing apps, VMs, and services using the current interface, edit the interface and VMs, create the bridge, and add the bridge to the VM device.
See [Accessing NAS from VM]({{< relref "ContainerNASBridge.md" >}}) for more information.
-->
