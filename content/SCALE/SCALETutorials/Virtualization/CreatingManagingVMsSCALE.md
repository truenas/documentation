---
title: "Adding and Managing VMs"
description: "Provides instructions adding or managing a virtual machine (VM) and installing an operating system in the VM."
weight: 10
alias: /scale/scaleuireference/virtualization/creatingmanagingvmsscale/
tags:
 - vm
 - gpu
---

A virtual machine (VM) is an environment on a host computer that you can use as if it is a separate, physical computer.
Users can use VMs to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the host computer physical hardware.
VMs provide more isolation than Jails but also consume more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
{{< include file="/static/includes/ScaleVMReqResources.md" >}}
{{< /expand >}}

## Creating a Virtual Machine

Before creating a VM, you need an installer <file>.iso</file> or image file for the OS you intend to install, and a [zvol]({{< relref "AddManageZvols.md" >}}) on a storage pool that is available for both the virtual disk and OS install file.

To create a new VM, go to **Virtualization** and click **Add** to open the **Create Virtual Machine** configuration screen.
If you have not yet added a virtual machine to your system you can click **Add Virtual Machines** to open the same screen.

1. Select the operating system you want to use from the **Guest Operating System** dropdown list.

{{< trueimage src="/images/SCALE/Virtualization/AddVMOperSys.png" alt="Operating System Settings" id="Operating System Settings" >}}

   Compare the recommended specifications for the guest operating system with your available host system resources when allocating virtual CPUs, cores, threads, and memory size.

2. Change other **Operating System** settings per your use case.

   Select **UTC** as the VM system time from the **System Clock** dropdown if you do not want to use the default **Local** setting.

   Select **Enable Display** to enable a SPICE Virtual Network Computing (VNC) remote connection for the VM.
   The **Bind** and **Password** fields display. If **Enable Display** is selected:

      * Enter a display **Password**

      * Use the dropdown menu to change the default IP address in **Bind** if you want use a specific address as the display network interface, otherwise leave it set to **0.0.0.0**.
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

   Click **Next**.

6. Upload installation media for the operating system you selected.

{{< trueimage src="/images/SCALE/Virtualization/AddVMInstallMedia.png" alt="Installation Media" id="Installation Media" >}}

   You can create the VM without an OS installed. To add it either type the path or browse to the location and select it.

   To upload an <file>iso</file> select **Upload New Image File** and either enter the path or browse to the location of the file.

{{< trueimage src="/images/SCALE/Virtualization/CreateVMWInstallMediaUploadSCALE.png" alt="Upload Installation Media" id="Upload Installation Media" >}}

   Click **Upload** to begin the upload process. After the upload finishes, click **Next**.

7. Specify a GPU.

{{< trueimage src="/images/SCALE/Virtualization/AddVMGPU.png" alt="GPU Screen" id="GPU Screen" >}}

   The **VirtIO** network interface requires a guest OS that supports VirtIO para-virtualized network drivers.

   {{< hint type="note" title="Supported GPUs" >}}
   iXsystems does not have a list of approved GPUs at this time but does have drivers and basic support for the list of [nvidia Supported Products](https://www.nvidia.com/Download/driverResults.aspx/191961/en-us/).
   {{< /hint >}}

8. Confirm your VM settings, then click **Save**.

### Adding and Removing Devices

After creating the VM, you can add or remove virtual devices.

Expand the VM entry on the **Virtual Machines** screen and click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices**.

{{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="Devices" id="Devices" >}}

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allow booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

See [Adding and Managing VM Devices]({{< relref "AddManageVMDevicesSCALE.md" >}}) for more information.

## Managing a Virtual Machine

After creating the VM and configuring devices for it, manage the VM by expanding the entry on the **Virtual Machines** screen.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Options" id="VM Options" >}}

An active VM displays options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> **Display** and <i class="material-icons" aria-hidden="true" title="Serial Shell">keyboard_arrow_right</i> **Serial Shell** connections.

When a **Display** device is configured, remote clients can connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).

If the display connection screen appears distorted, try adjusting the display device resolution.

Use the **State** toggle or click <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** to follow a standard procedure to do a clean shutdown of the running VM.
Click <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> **Power Off** to halt and deactivate the VM, which is similar to unplugging a computer.

{{< hint type="tip" title="OS Dependent Toggles" >}}
If the VM you created has no Guest OS installed, The VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button send an ACPI power down command to the VM operating system, but since an OS is not installed, these commands time out.
Use the **Power Off** button instead.
{{< /hint >}}

## Installing an OS

When the VM is configured in TrueNAS and has an OS <file>.iso,</file> file attached, you can start the VM and begin installing the operating system.

{{< hint type="note" title="OS Specific Settings" >}}
Some operating systems can require specific settings to function properly in a virtual machine.
For example, vanilla Debian can require advanced partitioning when installing the OS.
Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}

{{< expand "Debian OS Example" "v" >}}
Upload the Debian <file>.iso</file> to the TrueNAS system and attached to the VM as a CD-ROM device.
This example uses Debian 12 and basic configuration recommendations.
Modify settings as needed to suit your use case.

1. Click **Virtualization**, then **ADD** to use the VM wizard.
   See table below for settings used in this example.

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

2. After creating the VM, start it. Expand the VM entry and click **Start**.

3. Click **Display** to open a SPICE interface and see the Debian Graphical Installation screens.

4. Press <kbd>Enter</kbd> to start the Debian Graphical Install.

   a. Enter your localization settings for **Language**, **Location**, and **Keymap**.

   b. Debian automatically configures networking and assigns an IP address with DHCP.
      * If the network configuration fails, click **Continue** and do not configure the network at this time.

   c. Enter a name in **Hostname**.

   d. Enter a **Domain name**

   e. Enter the root password and re-enter the root password.

   f. Enter a name in **New User**.

   g. Select the username for your account or accept the generated name.

   h. Enter and re-enter the password for the user account.

   j. Choose the time zone, *Eastern* in this case.

5. Detect and partition disks.

   a. Select **Guided - use entire disk** to partition.

   b. Select the available disk.

   c. Select **All files in one partition (recommended for new users)**.

   d. Select **Finish partitioning and write changes to disk**.

   e. Select **Yes** to **Write the changes to disks?**.

6. Install the base system

   a. Select **No** to the question **Scan extra installation media**.

   b. Select **Yes** when asked **Continue without a network mirror**.

7. Install software packages

   a. Select **No** when asked **Participate in the package usage survey**.

   b. Select **Standard** system utilities.

   c. Click **Continue** when the installation finishes.

   After the Debian installation finishes, close the display window.

8. Remove the device or edit device order.
   In the expanded section for the VM, click **Power Off** to stop the new VM.

   a. Click **Devices**.

   b. Remove the CD-ROM device containing the install media or edit device order to boot from the Disk device.

      * To remove the CD-ROM from the devices, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Delete**.
      Click **Delete Device**.

      * To edit the device boot order, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Edit**.
      Change the CD-ROM **Device Order** to a value greater than that of the existing Disk device, such as *1005*.
      Click **Save**.

9. Return to the **Virtual Machines** screen and expand the new VM again.

10. Click **Start**.

11. Click **Display**.
{{< /expand >}}
{{< expand "What if the grub file does not run after starting the VM?" "v" >}}
The grub file does not run when you start the VM, you can do this manually after each start.
At the shell prompt:
1. Type `FS0:` and press <kbd>Enter</kbd>.
2. Type `cd EFI` and press <kbd>Enter</kbd>.
3. Type `cd Debian` and press <kbd>Enter</kbd>.
4. Type `grubx64.efi` and press <kbd>Enter</kbd>.

{{< hint type=important >}}
To ensure it starts automatically, you create the startup.nsh file at the root directory on the vm. To create the file:

1. Go to the **Shell**.

2. At the shell prompt type `edit startup.nsh`.

3. In the editor type:

   a. Type `FS0:` and press <kbd>Enter</kbd>.

   b. Type `cd EFI` and press <kbd>Enter</kbd>.

   c. Type `cd Debian` and press <kbd>Enter</kbd>.

   d. Type `grubx64.efi` and press <kbd>Enter</kbd>.

   e. Use the <kbd>Control+s</kbd> keys (Command+s for Mac OS) then press <kbd>Enter</kbd>.

   f. Use the <kbd>Control+q</kbd> keys to quit.

4. Close the display window

5. To test if it now boots up on startup:

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
If you want to access your TrueNAS SCALE directories from a VM, for example to connect to a TrueNAS data share, you have multiple options.

If your system has more than one physical interface, you can assign your VMs to a NIC other than the primary one your TrueNAS server uses. This method makes communication more flexible, but does not offer the potential speed of a bridge.

To create a bridge interface for the VM to use if you have only one physical interface, stop all existing apps, VMs, and services using the current interface, edit the interface and VMs, create the bridge, and add the bridge to the VM device.
See [Accessing NAS from VM]({{< relref "accessingnasfromvm.md" >}}) for more information.
