---
title: "Creating and Managing VMs"
weight: 10
---

{{< toc >}}

A Virtual Machine (VM) is an environment on a host computer that you can use as if it were a separate, physical computer.
Users can use VMs to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the host computer's physical hardware.
VMs provide more isolation than Jails, but will also consume more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
TrueNAS assigns a portion of system RAM and a new zvol to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use [bhyve](https://bhyve.org/) virtual machine software.
[Bhyve](https://bhyve.org/) virtualization requires at least one of two processors: 

* An Intel processor with Extended Page Tables (EPT) 
* An AMD processor with Rapid Virtualization Indexing (RVI) or Nested Page Tables (NPT)

To verify that an Intel processor has the required features, open the **Shell** and run `grep VT-x /var/run/dmesg.boot`.
If the EPT and UG features are shown, the processor will work with bhyve.

To verify that an AMD processor has the required features, open the **Shell** and run `grep POPCNT /var/run/dmesg.boot`.
If the output shows the POPCNT feature, the processor will work with bhyve.

Note that AMD K10 "Kuma" processors include POPCNT but do not support NRIS, which bhyve requires.
AMD stopped making K10 processors in 2012-2013.
{{< /expand >}}

## Creating a Virtual Machine

Before creating a virtual machine, you need an installer <file>.iso</file> or image file for the OS you intend to install, and a [storage pool]({{< relref "CreatingPoolsSCALE.md" >}}) available for both the virtual disk and OS install file.

To create a new VM, go to **Virtualization** and click *Add* (or *Add Virtual Machines*).
Configure each category of the VM according to your specifications, starting with the *Operating System*.

![AddVMOperatingSystemSCALE](/images/SCALE/AddVMOperatingSystemSCALE.png "VM Add: OS")

{{< expand "Specific Options" "v" >}}

{{< include file="static/includes/VirtualMachinesAddFieldsSCALE.md.part" markdown="true" >}}

Additional notes:

* The *Grub* *Boot Method* is not supported by *Windows* guest operating systems.
* Compare the recommended specifications for your guest operating system with the available host system resources when allocating *Virtual CPUs*, *Cores*, *Threads*, and *Memory Size*.
* Avoid allocating too much memory to a VM.
  Activating a VM that has all available memory allocated to it can slow the host system or prevent other VMs from starting.
* *AHCI* is the recommended *Disk Type* for Windows VMs.
* The *VirtIO* **Network Interface** requires that the chosen guest operating system support VirtIO paravirtualized network drivers.
{{< /expand >}}

### Adding and Removing Devices

After the VM is created, add and remove virtual devices by expanding the VM entry in **Virtual Machines** and clicking <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i>.

![VMDevices](/images/CORE/12.0/VirtualMachinesDevices.png "VM Devices")

Device notes:

* The virtual machine attempts to boot from devices according to the *Device Order*, starting with *1000*, then ascending.
* *CD-ROM* devices allowing booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

## Managing the Virtual Machine

After creating the VM and configuring any devices for it, manage the VM by expanding its entry in **Virtual Machines**.

![VMOptions](/images/CORE/12.0/VirtualMachinesOptions.png "VM Options")

Options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> or <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> connections are available after activating the VM.
If the *VNC* connection screen appears garbled, try adjusting the VNC device resolution.

Using the *State* toggle or clicking <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> follows a standard shut down procedure to cleanly shut down the running VM.
Clicking <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> immediately halts and deactivates the VM, similar to unplugging a computer.

{{< hint info >}}
If the VM you created has no Guest OS installed, The VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> button might not function as expected.
These buttons try to send an ACPI power down command to the VM operating system, but since no OS is installed, the commands time out.
Use the *POWER OFF* button instead.
{{< /hint >}}
