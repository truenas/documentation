---
title: "Creating and Managing VMs"
weight: 10
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

Before creating a virtual machine, you need an installer <file>.iso</file> or image file for the OS you intend to install, and a [storage pool]({{< relref "/SCALE/SCALEUIReference/Storage/_index.md" >}}) available for both the virtual disk and OS install file.

To create a new VM, go to **Virtualization** and click **Add** (or **Add Virtual Machines**).
Configure each category of the VM according to your specifications, starting with the **Operating System**.

![AddVMOperatingSystemSCALE](/images/SCALE/AddVMOperatingSystemSCALE.png "VM Add: OS")

{{< expand "Specific Options" "v" >}}

{{< include file="static/includes/Reference/VirtualMachinesAddFieldsSCALE.md.part" markdown="true" >}}

Additional notes:

Compare the recommended specifications for your guest operating system with the available host system resources when allocating virtual CPUs, cores, threads, and memory size.

Don't allocate too much memory to a VM.

Activating a VM with all available memory allocated to it can slow the host system or prevent other VMs from starting.

We recommend using the **AHCI** **Disk Type** for Windows VMs.

The **VirtIO** network interface requires a guest OS that supports VirtIO paravirtualized network drivers.
{{< /expand >}}

### Adding and Removing Devices

After creating the VM, add and remove virtual devices by expanding the VM entry in **Virtualization** and clicking <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>**Devices**.

![VirtualMachinesDevicesSCALE](/images/SCALE/VirtualMachinesDevicesSCALE.png "VM Devices")

Device notes:

* Virtual machine attempt to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* **CD-ROM** devices allow booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

## Managing the Virtual Machine

After creating the VM and configuring any devices for it, manage the VM by expanding its entry in **Virtualization**.

![VirtualMachinesOptionsSCALE](/images/SCALE/VirtualMachinesOptionsSCALE.png "VM Options")

When the VM is active, it displays options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> **Display** and <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> **Serial** connections.

If the display connection screen appears distorted, try adjusting the display device resolution.

Use the **State** toggle or click <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** to follow a standard shut down procedure to do a clean shut down of the running VM.
Click <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> **Power Off** halts and deactivates the VM, similar to unplugging a computer.

{{< hint info >}}
If the VM you created has no Guest OS installed, The VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button send an ACPI power down command to the VM operating system, but since an OS is not installed, the commands time out.
Use the **Power Off** button instead.
{{< /hint >}}

## Installing an OS

When the VM is configured in TrueNAS and has an OS .iso file attached, you can start the VM and begin installing the operating system.

{{< hint info >}}
Some operating systems can require specific settings to function properly in a virtual machine. For example, vanilla Debian can require advanced partitioning when installing the OS. Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}

Here is an example of installing a Debian OS in a TrueNAS VM. The Debian `.iso` was uploaded to the TrueNAS system and attached to the VM as a CD-ROM device. 

* Click on the **Virtualization** menu then click **ADD** to start the VM creation process using the wizard.

![SCALEDebianVMOperatingSystem](/images/SCALE/ScaleDebianVMOsSystem.png "Debian VM Add: OS")

{{< expand "VM values entered for the Debian Example." "v" >}}

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
* If the ISO is or was not uploaded, you need to set **Upload an installer image file**, select a dataset to store the ISO, click **Choose file**, then click **Upload**. Wait for the upload to complete (this can take some time).

**GPU:**
* Leave the default values.

**Confirm Options**
* Verify the information is correct and then click **Submit**.

{{< /expand >}}

* After the VM is created, start it by expanding the VM entry (select the down-pointing arrow to the right of the VM name) and click **Start**.

* Click **Display** to open a virtual monitor to the VM and see the Debian Graphical Installation screens.

{{< expand "Debian Install Example." "v" >}}

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

Disk Detection should begin

* Partition disks: select **Guided - use entire disk**.
* Select the available disk.
* Select **All files in one partition** (recommended for new users).
* Select **Finish partitioning and write changes to disk**.
* Select **Yes** to **Write the changes to disks?**.

Installing the base system

* Select **No** to the question **Scan extra installation media**.
* Select **Yes** when asked **Continue without a network mirror**.

Installing Software

* Select **No** when asked **Participate in the package usage survey**.
* Select **Standard** system utilities.
* Click **Continue** when the installation finishes.
{{< /expand >}}

* After the Debian installation finishes, close the display window.
 
* In the VM's expanded section click **Power Off** to stop the new VM.

* Click **Devices**.

* Remove the CD-ROM from the devices by clicking the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and selecting **Delete**. Click **Delete Device**.

* Click **Virtualization** and expand the new VM by selecting the down-pointing arrow to the right.

* Click **Start**.

* Click **Display**.

*The grub file does not run when you start the VM. This can be done manually after each start.*
At the shell prompt:
* Type *exit* <kbd>Return</kbd>.
* Select **Boot Manager** <kbd>Return</kbd>.
* Select **Boot Maintenance Manager** <kbd>Return</kbd>.
* Select **Boot From File** <kbd>Return</kbd>.
* Select the boot volume from the list <kbd>Return</kbd>.
* Select **EFI** <kbd>Return</kbd>.
* Select **debian** <kbd>Return</kbd>.
* Select **grubx64.efi** <kbd>Return</kbd>.

{{< hint warning >}}
To insure it starts automatically, you need to create the startup.nsh file at the root directory on the vm. To create the file:
* Go to the **Shell**.
* At the shell prompt type **edit startup.nsh**.
* In the editor type:
  * Type **FS0:** <kbd>Return</kbd>.
  * Type **cd EFI** <kbd>Return</kbd>.
  * Type **cd Debian** <kbd>Return</kbd>.
  * Type **grubx64.efi** <kbd>Return</kbd>.
  * Type the <kbd>Control+s</kbd> keys(Command+s for Mac OS) <kbd>Return</kbd>.
  * Type the <kbd>Control+q</kbd> keys to quit.
 
Close the display window

To test if it now boots up on startup:
* Power off the VM.
* Click **Start**.
* Click **Display**.
* Log into your Debian VM.
{{< /hint >}}

