---
title: "Creating and Managing VMs"
weight: 10
---

{{< toc >}}

A Virtual Machine (VM) is an environment on a host computer that you can use as if it were a separate, physical computer.
Users can use VMs to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the host computer's physical hardware.
VMs provide more isolation than Jails but will also consume more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
TrueNAS assigns a portion of system RAM and a new zvol to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use [bhyve](https://bhyve.org/) virtual machine software.
[Bhyve](https://bhyve.org/) virtualization requires at least one of two processors: 

* An Intel processor with Extended Page Tables (EPT) 
* An AMD processor with Rapid Virtualization Indexing (RVI) or Nested Page Tables (NPT)

To verify that an Intel processor has the required features, open the **Shell** and run `grep VT-x /var/run/dmesg.boot`.
If the **Shell** shows the EPT and UG features, the processor will work with bhyve.

To verify that an AMD processor has the required features, open the **Shell** and run `grep POPCNT /var/run/dmesg.boot`.
If the output shows the POPCNT feature, the processor will work with bhyve.

Note that AMD K10 "Kuma" processors include POPCNT but do not support NRIS, which bhyve requires.
AMD stopped making K10 processors in 2012-2013.
{{< /expand >}}

## Creating a Virtual Machine

Before creating a virtual machine, you need an installer <file>.iso</file> or image file for the OS you intend to install, and a [storage pool]({{< relref "/SCALE/Storage/_index.md" >}}) available for both the virtual disk and OS install file.

To create a new VM, go to **Virtualization** and click *Add* (or *Add Virtual Machines*).
Configure each category of the VM according to your specifications, starting with the *Operating System*.

![AddVMOperatingSystemSCALE](/images/SCALE/AddVMOperatingSystemSCALE.png "VM Add: OS")

{{< expand "Specific Options" "v" >}}

{{< include file="static/includes/Reference/VirtualMachinesAddFieldsSCALE.md.part" markdown="true" >}}

Additional notes:

* Compare the recommended specifications for your guest operating system with the available host system resources when allocating *Virtual CPUs*, *Cores*, *Threads*, and *Memory Size*.
* Don't allocate too much memory to a VM.
  Activating a VM with all available memory allocated to it can slow the host system or prevent other VMs from starting.
* We recommend using the *AHCI* *Disk Type* for Windows VMs.
* The *VirtIO* network interface requires a guest OS that supports VirtIO paravirtualized network drivers.
{{< /expand >}}

### Adding and Removing Devices

After creating the VM, add and remove virtual devices by expanding the VM entry in **Virtualization** and clicking <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>*Devices*.

![VirtualMachinesDevicesSCALE](/images/SCALE/VirtualMachinesDevicesSCALE.png "VM Devices")

Device notes:

* The virtual machine attempts to boot from devices according to the *Device Order*, starting with *1000*, then ascending.
* *CD-ROM* devices allow booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

## Managing the Virtual Machine

After creating the VM and configuring any devices for it, manage the VM by expanding its entry in **Virtualization**.

![VirtualMachinesOptionsSCALE](/images/SCALE/VirtualMachinesOptionsSCALE.png "VM Options")

When the VM is active, it will display options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> *Display* and <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> *Serial* connections.

If the *Display* connection screen appears distorted, try adjusting the display device resolution.

Using the *State* toggle or clicking <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *Stop* follows a standard shut down procedure to cleanly shut down the running VM.
Clicking <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> *Power Off* immediately halts and deactivates the VM, similar to unplugging a computer.

{{< hint info >}}
If the VM you created has no Guest OS installed, The VM *State* toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *Stop* button might not function as expected.
The *State* toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *Stop* button send an ACPI power down command to the VM operating system, but since no OS is installed, the commands time out.
Use the *Power Off* button instead.
{{< /hint >}}

## Examples of Specific OS VM Installations

{{< tabs "Examples of Specific OS VM Installations" >}}
{{< tab "Debian" >}}

Prerequisites:
The latest [Debian installation file](https://www.debian.org) has been downloaded.
The iso has been uploaded to a dataset on the TrueNAS SCALE system.

From the Virtualization menu, click the ADD button to start the VM Wizard.

**Operating System values entered:**
* Guest Operating System: Linux
* Name: debianVM
* Description: Debian VM
* Click the Next Button.

![SCALEDebianVMOperatingSystem](/images/SCALE/ScaleDebianVMOsSystem.png "Debian VM Add: OS")

**CPU and Memory values entered:**
* Change the memory size to 1024 MiB.
* Click the Next button.

![SCALEDebianVMCpuMemory](/images/SCALE/ScaleDebianVMCpuMemory.png "Debian VM Add: CPU Memory")

**Disks values entered:**
* Select *Create new disk image*.
* Select the Zvol Location.
* Change the size to 30 GiB.
* Click the Next button.

![SCALEDebianVMDisks](/images/SCALE/ScaleDebianVMDisks.png "Debian VM Add: Disks")

**Network Interface values entered:**
* Attach NIC: Select the physical interface to associate with the VM.
* Click the Next button.

![SCALEDebianVMNetwork](/images/SCALE/ScaleDebianVMNetwork.png "Debian VM Add: Network")

**Installation Media values entered:**
* In this case the installation iso was uploaded to /mnt/tank2/isostorage/. Click on the installation ISO, debian-11.0.0-amd64-netinst.iso. 
* Note: If the iso hadn't been uploaded previously, the user would select the "Upload an installer image file" box, select a dataset to upload the iso to, click the Choose file button, and click the Upload button. Wait for the upload to complete.
* Click the Next button.

![SCALEDebianVMInstallationMedia](/images/SCALE/ScaleDebianVMInstallMedia.png "Debian VM Add: Installation Media")

**GPU values entered:**
* Click the Next button.

![SCALEDebianVMGpu](/images/SCALE/ScaleDebianVMGPU.png "Debian VM Add: GPU")

**Confirm Options:**
* Verify the information is correct and then click the Submit button.

![SCALEDebianVMConfirm](/images/SCALE/ScaleDebianVMInstallConfirm.png "Debian VM Add: Install confirm")


Expand the VM by clicking on the down pointing arrow to the right of the new VM. Click the Start button.

Click the Display button to step through the Debian installation.

{{< expand "The steps/values entered during the example Debian Graphic installation." "v" >}}

**Debian Graphical Install**
* Press the Return key, on the keyboard, to start the Debian Graphical Install.
* Language: English, click the continue button.
* Location: United States, click the continue button.
* Keymap: American English, click the continue button.

Installation begins

* If the Network Configuration fails, click the Continue button.
* Do not configure the network at this time, click the Continue button.
* Enter a Hostname, click the Continue button.
* Enter the root password and re-enter the root password. Click the Continue button.
* Enter a New User name, click the Continue button.
* Select the username for your account (it should already be filled in), click the Continue button.
* Enter and re-enter the password for the user account, then click the Continue button.
* Choose the time zone, Eastern in this case, and click the Continue button.

Disk Detection should begin

* Partition disks: select Guided - use entire disk, click the Continue button.
* Select the avaialble disk, click the Continue button.
* Select "All files in one partition (recommended for new users), click the Continue button.
* Select "Finish partitioning and write changes to disk, click the Continue button.
* Select "Yes" to "Write the changes to disks?", click the Continue button.

Installing the base system

* Select "No" to the question "Scan extra installation media, click the Continue button.
* Select "Yes" when asked "Continue without a network mirror, click the Continue button.

Installing Software

* Select "No" when asked "Participate in the package usage survey" , click the Continue button.
* Select Standard system utilities, click the Continue button.
* Click the Continue botton when the installation is finished.
{{< /expand >}}

Close the Display window after the installtion is finished. In the VM's expanded section click the Power Off button to stop the new VM.

Click the Devices button.

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Delete* next to the CDROM. Click the Delete Device button.

Click Virtualization and expand the new VM by clicking on the down pointing arrow to the right.

Click the Start button.

Click the Display button.

{{< hint warning >}}
The grub file does not run when the VM is started. This can be done manually, after each start,  at the shell prompt by typing:
* Type FS0: and the Reurn key on the Keyboard.
* Type cd EFI and the Reurn key on the Keyboard.
* Type cd Debian and the Reurn key on the Keyboard
* Type grubx64.efi

To set it up to automatically start up create the startup.nsh file at the root directory on the vm. At the shell prompt type *edit startup.nsh*. In the editor type:
* Type FS0: and the Reurn key on the Keyboard.
* Type cd EFIand the Reurn key on the Keyboard.
* Type cd Debian and the Reurn key on the Keyboard.
* Type grubx64.efi
* Type the Control+s keys(Command+s for Mac OS) and then the return key.
* Type the Control+q keys to quit.
* 
Close the Dispaly window

To test if it now boots up on startup:
* Power off the VM
* Click the Start button
* Click the Dispaly button
* Log into your Debian VM.
{{< /hint >}}


{{< /tab >}}
{{< /tabs >}}

