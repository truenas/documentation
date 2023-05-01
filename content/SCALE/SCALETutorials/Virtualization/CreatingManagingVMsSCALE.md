---
title: "Adding and Managing VMs"
description: "This article provides instructions adding or managing a virtual machine (VM), and installing an operating system in the VM."
weight: 10
alias: /scale/scaleuireference/virtualization/creatingmanagingvmsscale/
tags:
 - scalevm
 - scalegpu
---

{{< toc >}}

A virtual machine (VM) is an environment on a host computer that you can use as if it is a separate, physical computer.
Users can use VMs to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the host computer physical hardware.
VMs provide more isolation than Jails but also consume more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
{{< include file="content/_includes/ScaleVMReqResources.md" type="page" >}}
{{< /expand >}}

## Creating a Virtual Machine

Before creating a VM, you need an installer <file>.iso</file> or image file for the OS you intend to install, and a [zvol]({{< relref "AddManageZvols.md" >}}) on a storage pool that is available for both the virtual disk and OS install file.

To create a new VM, go to **Virtualization** and click **Add** to open the **Create Virtual Machine** configuration screen. 
If you have not yet added a virtual machine to your system you can click **Add Virtual Machines** to open the same screen.

1. Select the operating system you want to use from the **Guest Operating System** dropdown list.
   
   ![AddVMOperSys](/images/SCALE/22.12/AddVMOperSys.png "Operating System Settings") 

   Compare the recommended specifications for the guest operating system with your available host system resources when allocating virtual CPUs, cores, threads, and memory size.

2. Change other **Operating System** settings per your use case. 

   Select **UTC** as the VM system time from the **System Clock** dropdown if you do not want to use the default **Local** setting. 

   Select the virtual console option from the **Display Type** dropdown. 
   VNC is the most widely used option with the best display but is slower than SPICE. 
   SPICE has faster data transfer speed but a lower quality display, and is not as secure as VNC.

   Change the default IP address in **Bind** if you want use a specific address as the primary network interface, otherwise leave it set to **0.0.0.0**.

   Click **Next**.

3. Enter the CPU and memory settings for your VM.

   ![CreateVMCPUandMemorySettings](/images/SCALE/22.12/CreateVMCPUandMemorySettings.png "VM CPU and Memory")
   
   If you selected Windows as the **Guest Operating System**, the **Virtual CPUs** field displays a default value of 2. 
   The VM operating system might have operational or licensing restrictions on the number of CPUs.

   Do not allocate too much memory to a VM. Activating a VM with all available memory allocated to it can slow the host system or prevent other VMs from starting.
   
   Leave **CPU Mode** set to **Custom** if you want to select a CPU model. 
   
   Specify the amount of RAM you want for the VM if you want to use more or less than the default. We recommend increasing this value, but your configuration depends on the resources available for your VM.

   Click **Next**.

4. Configure disk settings.
   
   ![CreateVMWDisksSCALE](/images/SCALE/22.12/CreateVMWDisksSCALE.png "VM Disks")

   Select **Create new disk image** to create a new zvol on an existing dataset.  
   Select **Use existing disk image** to use an existing zvol for the VM.

   Select either **AHCI** or **VirtIO** from the **Select Disk Type** dropdown list. We recommend using **AHCI** or Windows VMs. 

   Select the location for the new zvol from the **Zvol Location** dropdown list.
   
   Enter a value in **Size (Examples: 500KiB, 500M, and 2TB)** to indicate the amount of space to allocate for the new zvol.

   Click **Next**.

5. Cofigure the network interface.
   
   ![CreateVMWNetworkInterfaceSCALE](/images/SCALE/22.12/CreateVMWNetworkInterfaceSCALE.png "VM Network Interface")

   Select the network interface type from the **Adapter Type** dropdown list. Select **Intel e82585 (e1000)** as it offers a higher level of compatibility with most operating systems, or select **VirtIO** if the guest operating system supports para-virtualized network drivers.

   Select the network interface card to use from the **Attach NIC** dropdown list.

   Click **Next**.

6. Upload installation media for the operating system you selected.
   
   ![CreateVMWInstallMediaSCALE](/images/SCALE/22.12/CreateVMWInstallMediaSCALE.png "VM Installation Media")

   You can create the VM without an OS installed. To add it either type the path or browse to the location and select it.
   
   To upload an <file>iso</file> select **Upload an installer image file** and either enter the path or browse to the location of the file.

   ![CreateVMWInstallMediaUploadSCALE](/images/SCALE/22.12/CreateVMWInstallMediaUploadSCALE.png "VM Upload Installation Media")

   Click **Upload** to begin the upload process. After the upload finishes, click **Next**.

7. Specify a GPU.    
   The **VirtIO** network interface requires a guest OS that supports VirtIO para-virtualized network drivers.

   {{< hint type=note >}}
   iXsystems does not have a list of approved GPUs at this time but does have drivers and basic support for the  list of [nvidia Supported Products](https://www.nvidia.com/Download/driverResults.aspx/191961/en-us/).
   {{< /hint >}}

8. Confirm your VM settings, then click **Save**.

### Adding and Removing Devices

After creating the VM, you can add or remove virtual devices.

Expand the VM entry on the **Virtual Machines** screen and click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices**.

![VirtualMachinesDevicesSCALE](/images/SCALE/VirtualMachinesDevicesSCALE.png "VM Devices")

Device notes:

* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allow booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

## Managing a Virtual Machine

After creating the VM and configuring devices for it, manage the VM by expanding the entry on the **Virtual Machines** screen.

![VirtualMachinesOptionsSCALE](/images/SCALE/VMRunningOptionsSCALE.png "VM Options")

An active VM displays options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> **Display** and <i class="material-icons" aria-hidden="true" title="Serial Shell">keyboard_arrow_right</i> **Serial Shell** connections.

If the display connection screen appears distorted, try adjusting the display device resolution.

Use the **State** toggle or click <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** to follow a standard procedure to do a clean shutdown of the running VM. 
Click <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> **Power Off** to halt and deactivate the VM, which is similar to unplugging a computer.

{{< hint type=note >}}
If the VM you created has no Guest OS installed, The VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button send an ACPI power down command to the VM operating system, but since an OS is not installed, these commands time out.
Use the **Power Off** button instead.
{{< /hint >}}

## Installing an OS

When the VM is configured in TrueNAS and has an OS <file>.iso,</file> file attached, you can start the VM and begin installing the operating system.

{{< hint type=note >}}
Some operating systems can require specific settings to function properly in a virtual machine. 
For example, vanilla Debian can require advanced partitioning when installing the OS. 
Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}

{{< expand "Debian OS Example" "v" >}}
Upload the Debian <file>.iso</file>to the TrueNAS system and attached to the VM as a CD-ROM device. 

1. Click **Virtualization**, then **ADD** to use the VM wizard.
   
   ![SCALEDebianVMOperatingSystem](/images/SCALE/ScaleDebianVMOsSystem.png "Debian VM Add: OS")
   
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
   | **Installation Media:** |  | Installation ISO is uploaded to `/mnt/tank2/isostorage/`.<br>If the ISO is ot uploaded, select **Upload an installer image file**.<br>Select a dataset to store the ISO, click **Choose file**, then click **Upload**. Wait for the upload to complete. |
   | **GPU:** |  | Leave the default values. |
   | **Confirm Options** |  | Verify the information is correct and then click **Save**. |
   {{< /truetable >}}
   
2. After creating the VM, start it. Expand the VM entry and click **Start**.

3. Click **Display** to open a virtual monitor to the VM and see the Debian Graphical Installation screens.

   {{< expand "Debian Install Example" "v" >}}   
   **Debian Graphical Install**
   1. Press <kbd>Return</kbd> to start the Debian Graphical Install.
   * Language: English
   * Location: United States
   * Keymap: American English

   Installation begins
   * Continue if the network configuration fails.   
   * Do not configure the network at this time.
   * Enter a name in **Hostname**.
   * Enter the root password and re-enter the root password.
   * Enter a name in **New User**.
   * Select the username for your account (it should already be filled in).
   * Enter and re-enter the password for the user account.
   * Choose the time zone, *Eastern* in this case.

   Disk detection begins
   * Partition disks: select **Guided - use entire disk**.
   * Select the available disk.
   * Select **All files in one partition** (recommended for new users).
   * Select **Finish partitioning and write changes to disk**.
   * Select **Yes** to **Write the changes to disks?**.

   Installing the base system begins
   * Select **No** to the question **Scan extra installation media**.
   * Select **Yes** when asked **Continue without a network mirror**.

   Installing software begins
   * Select **No** when asked **Participate in the package usage survey**.
   * Select **Standard** system utilities.
   * Click **Continue** when the installation finishes.
   
   After the Debian installation finishes, close the display window.
   {{< /expand >}} 
4. Remove the device. 
   In the expanded section for the VM, click **Power Off** to stop the new VM.

    a. Click **Devices**.
    b. Remove the CD-ROM from the devices by clicking the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and selecting **Delete**. Click **Delete Device**.

5. Return to the **Virtual Machines** screen and expand the new VM again.

6. Click **Start**.

7. Click **Display**.
{{< /expand >}}
{{< expand "What if the grub file does not run after starting the VM?" "v" >}}
The grub file does not run when you start the VM, you can do this manually after each start.
At the shell prompt:
1. Type `FS0:` <kbd>Return</kbd>.
2. Type `cd EFI` <kbd>Return</kbd>.
3. Type `cd Debian` <kbd>Return</kbd>.
4. Type `grubx64.efi` <kbd>Return</kbd>.

{{< hint type=important >}}
To ensure it starts automatically, you create the startup.nsh file at the root directory on the vm. To create the file:

1. Go to the **Shell**.

2. At the shell prompt type `edit startup.nsh`.

3. In the editor type:
  * Type `FS0:` <kbd>Return</kbd>.
  * Type `cd EFI` <kbd>Return</kbd>.
  * Type `cd Debian` <kbd>Return</kbd>.
  * Type `grubx64.efi` <kbd>Return</kbd>.
  * Use the <kbd>Control+s</kbd> keys (Command+s for Mac OS) then <kbd>Return</kbd>.
  * Use the <kbd>Control+q</kbd> keys to quit.
 
4. Close the display window

5. To test if it now boots up on startup:
   * Power off the VM.
   * Click **Start**.
   * Click **Display**.
   * Log into your Debian VM.
{{< /hint >}}
{{< /expand >}}

{{< taglist tag="scalevm" limit="10" >}}
