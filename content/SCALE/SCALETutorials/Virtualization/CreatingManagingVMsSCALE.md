---
title: "Adding and Managing VMs"
description: "This article provides instructions on how to add or manage a virtual machine and installing an operating system in the VM."
weight: 10
alias: /scale/scaleuireference/virtualization/creatingmanagingvmsscale/
tags:
 - scalevm
 - scalegpu
---

{{< toc >}}

A Virtual Machine (VM) is an environment on a host computer that you can use as if it were a separate, physical computer.
Users can use VMs to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the host computer physical hardware.
VMs provide more isolation than Jails but also consumes more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
{{< include file="static/includes/SCALE/ScaleVMReqResources.md.part" markdown="true" >}}
{{< /expand >}}

## Creating a Virtual Machine

Before creating a virtual machine, you need an installer <file>.iso</file> or image file for the OS you intend to install, and a [storage pool]({{< relref "CreatePoolSCALE.md" >}}) available for both the virtual disk and OS install file.

To create a new VM, go to **Virtualization** and click **Add** or **Add Virtual Machines** if you have not yet added a virtual machine to your system.
Configure each category of the VM according to your specifications, starting with the **Operating System**.

![AddVMOperatingSystemSCALE](/images/SCALE/AddVMOperatingSystemSCALE.png "VM Add: OS")

For more information see [Virtualization Screens]({{< relref "VirtualizationScreens.md" >}}) for more information on virtual machine screen settings.

Additional notes:

Compare the recommended specifications for your guest operating system with the available host system resources when allocating virtual CPUs, cores, threads, and memory size.

Do not allocate too much memory to a VM. 
Activating a VM with all available memory allocated to it can slow the host system or prevent other VMs from starting.

Enter the time the system waits for the VM to cleanly shut down in **Shutdown Timeout** or leave set at the default which is 90 seconds.

Leave **Start on Boot** selected if you want the VM to start when the system boots.

(Optional) Leave **Enable Display** selected to enable a Virtual Network Computing remote connection. This requires UEFI booting.

Select the **Display Type**. The default is **VNC** but you can change this to **SPICE**.

Enter the primary interface IP address in **Bind**. Leave this set to 0.0.0.0 unless you know you want to use a different interface IP address.

Click **Next**.

### Configuring CPU and Memory
{{< expand "Click Here for More Information" "v" >}}
![CreateVMWCPUMemSCALE](/images/SCALE/22.12/CreateVMWCPUMemSCALE.png "VM CPU and Memory")

If you selected Windows as the **Guest Operating System**, the **Virtual CPUs** field displays a default value of 2. Note that the VM operating system might have operational or licensing restrictions on the number of CPUs. The default value for the number of cores per virtual CPU socket is 1 and pre-populates the **Cores** field. The default value for the number of threads per core is also 1, and displays in the **Threads** field.

The following field, **Optional: CPU Set (Examples:0-3.8-11)** defines the CPU set, and is optional. Inputting a value here allows you to specify the logical cores that the VM can use based on CPU topology.

The checkbox **Pin vcpus** is related to the previous field, **Optional: CPU Set (Examples:0-3.8-11)**, in that each vCPU is pinned (mapped) into a single CPU number by following the order you just defined for the CPU set. The number of vCPUs must be equal to the number of CPUs in the CPU set. This checkbox is not selected by default.

The **CPU Mode** default is **Custom**. When **Custom** is selected, you have the option of choosing a **CPU Model** from the dropdown list in the next field. You can also choose **Host Model** or **Host Passthrough** as the **CPU Mode**, but in these instances the next field, **CPU Model**, does not apply. 

**Memory Size (Examples: 500KiB, 500M, 2 TB)** is a required field that pre-populates with a value of 4 GiB if you chose a Windows OS. We recommend that you increase this value, but your configuration will depend on the resources available for your VM.

**Minimum Memory Size** is an optional field. When not specified, the guest system is given the fixed amount of memory specified in **Memory Size (Examples: 500KiB, 500M, 2 TB)**. When **Minimum Memory Size** is specified, the guest system is given memory within the range **Minimum Memory Size** and **Memory Size (Examples: 500KiB, 500M, 2 TB)** as needed.

The next field, **Optional: NUMA nodeset (Example: 0-1)** is also not populated by default as it is not required. If you specified a CPU set, you can then specify a NUMA nodeset to improve memory locally.

Click **Next**.
{{< /expand >}}

### Configuring Disks
{{< expand "Click Here for More Information" "v" >}}
![CreateVMWDisksSCALE](/images/SCALE/22.12/CreateVMWDisksSCALE.png "VM Disks")

Select **Create new disk image** radio button to create a new zvol on an existing dataset (you define the location of this existing dataset in **Zvol Location**).  Alternatively, you can select **Use existing disk image** if there is an existing zvol you want to use for the VM.

The dropdown list under **Select Disk Type** allows you to select either **AHCI** or **VirtIO**. We recommend using **AHCI** as the **Disk Type** for Windows VMs. Next, specify the location of the dataset in **Zvol Location**. Here we have specified the pool called *tank*. Enter a value in **Size (Examples: 500KiB, 500M, and 2TB)** to indicate the amount of space to allocate for the new zvol.

Click **Next**.
{{< /expand >}}

### Configuring the Network Interface
{{< expand "Click Here for More Information" "v" >}}
![CreateVMWNetworkInterfaceSCALE](/images/SCALE/22.12/CreateVMWNetworkInterfaceSCALE.png "VM Network Interface")

Under **Adapter Type**, select **Intel e82585 (e1000)** from the dropdown list as it offers a higher level of compatibility with most operating systems. Select **VirtIO** if the guest operating system supports para-virtualized network drivers.

A randomized MAC address displays in the **Mac Address** field. You can change this to suit your needs.

Use the **Attach NIC** dropdown list to select the active interface you wish to use. You can view active interfaces in **Network** > **Interfaces** (note that if you navigate away from the wizard at this point, you will lose your progress).

The **Trust Guest Filters** checkbox is not selected by default. Enabling this feature has security risks because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. For more information see [Virtualization Screens]({{< relref "VirtualizationScreens.md#network-interface-screen" >}}).

Click **Next**.
{{< /expand >}}

### Uploading Installation Media
{{< expand "Click Here for More Information" "v" >}}
![CreateVMWInstallMediaSCALE](/images/SCALE/22.12/CreateVMWInstallMediaSCALE.png "VM Installation Media")

The VM can be created initially without an OS installed. To navigate to the location where you have previously uploaded an installation file, use the **Optional: Choose installation media image** dropdown navigation list. Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt** and at the pool and dataset levels to expand the options. Select the location of the installation file. The path displays in the location field.

The **Upload an installer image file** checkbox is not selected by default. If you select this option, additional fields display:
![CreateVMWInstallMediaUploadSCALE](/images/SCALE/22.12/CreateVMWInstallMediaUploadSCALE.png "VM Upload Installation Media")

This gives you the option of browsing to select a file. The file uploads to the **ISO save location** that you specify.

Click **Upload** to begin the upload process. After the upload finishes, click **Next**.
{{< /expand >}}

### Specifying a GPU

The **VirtIO** network interface requires a guest OS that supports VirtIO paravirtualized network drivers.
{{< hint info >}}
iXsystems does not have a list of approved GPUs at this time but does have drivers and basic support for the  list of [nvidia Supported Products](https://www.nvidia.com/Download/driverResults.aspx/191961/en-us/).
{{< /hint >}}
### Adding and Removing Devices

After creating the VM, add and remove virtual devices by expanding the VM entry on the **Virtual Machines** screen and clicking <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>**Devices**.

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

{{< hint info >}}
If the VM you created has no Guest OS installed, The VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button send an ACPI power down command to the VM operating system, but since an OS is not installed, these commands time out.
Use the **Power Off** button instead.
{{< /hint >}}

## Installing an OS

When the VM is configured in TrueNAS and has an OS <file>.iso,</file> file attached, you can start the VM and begin installing the operating system.

{{< hint info >}}
Some operating systems can require specific settings to function properly in a virtual machine. 
For example, vanilla Debian can require advanced partitioning when installing the OS. 
Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}

Here is an example of installing a Debian OS in a TrueNAS VM. The Debian <file>.iso</file> is uploaded to the TrueNAS system and attached to the VM as a CD-ROM device. 

1. Click on the **Virtualization** menu then click **ADD** to start the VM creation process using the wizard.
   
   ![SCALEDebianVMOperatingSystem](/images/SCALE/ScaleDebianVMOsSystem.png "Debian VM Add: OS")

{{< expand "VM Values Entered for the Debian Example" "v" >}}

**Operating System:**
* Guest Operating System: Linux
* Name: debianVM
* Description: Debian VM

**CPU and Memory:**
* Change the memory size to 1024 MiB.

**Disks:**
* Select **Create new disk image**.
* Select the Zvol Location.
* Change the size to 30 GiB.

**Network Interface:**
* Attach NIC: Select the physical interface to associate with the VM.

**Installation Media:**
* In this case the installation ISO is uploaded to `/mnt/tank2/isostorage/`. Click on the installation ISO, *debian-11.0.0-amd64-netinst.iso*. 
* If the ISO is or was not uploaded, you need to set **Upload an installer image file**.
  Select a dataset to store the ISO, click **Choose file**, then click **Upload**. Wait for the upload to complete (this can take some time).

**GPU:**
* Leave the default values.

**Confirm Options**
* Verify the information is correct and then click **Save**.

{{< /expand >}}

2. After the VM is created, start it by expanding the VM entry (select the down-pointing arrow to the right of the VM name) and click **Start**.

3. Click **Display** to open a virtual monitor to the VM and see the Debian Graphical Installation screens.

{{< expand "Debian Install Example" "v" >}}

**Debian Graphical Install**
* Press <kbd>Return</kbd> to start the Debian Graphical Install.
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

Disk detection should begin

* Partition disks: select **Guided - use entire disk**.
* Select the available disk.
* Select **All files in one partition** (recommended for new users).
* Select **Finish partitioning and write changes to disk**.
* Select **Yes** to **Write the changes to disks?**.

Installing the base system

* Select **No** to the question **Scan extra installation media**.
* Select **Yes** when asked **Continue without a network mirror**.

Installing software

* Select **No** when asked **Participate in the package usage survey**.
* Select **Standard** system utilities.
* Click **Continue** when the installation finishes.
{{< /expand >}}

   After the Debian installation finishes, close the display window.
 
4. Remove the device. 
   In the expanded section for the VM, click **Power Off** to stop the new VM.

    a. Click **Devices**.

    b. Remove the CD-ROM from the devices by clicking the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and selecting **Delete**. Click **Delete Device**.

5. Return to the **Virtual Machines** screen and expand the new VM again.

6. Click **Start**.

7. Click **Display**.

{{< expand "What if the grub file does not run after starting the VM?" "v" >}}
The grub file does not run when you start the VM, you can do this manually after each start.
At the shell prompt:
1. Type `FS0:` <kbd>Return</kbd>.
2. Type `cd EFI` <kbd>Return</kbd>.
3. Type `cd Debian` <kbd>Return</kbd>.
4. Type `grubx64.efi` <kbd>Return</kbd>.

{{< hint warning >}}
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