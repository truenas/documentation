---
title: "Basic Management"
weight: 10
---

{{< toc >}}

{{< include file="static/includes/CommunitySupportedFeature.html.part" >}}

A Virtual Machine (VM) is an environment on a host computer that can be used as if it were a separate physical computer.
VMs can be used to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the actual hardware of the host computer.
This provides more isolation than Jails, but a VM will consume more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
A portion of system RAM and a new zvol is assigned to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use the [bhyve](https://bhyve.org/) virtual machine software.
This type of virtualization requires an Intel processor with Extended Page Tables (EPT) or an AMD processor with Rapid Virtualization Indexing (RVI) or Nested Page Tables (NPT).
VMs cannot be created unless the host system supports these features.

To verify that an Intel processor has the required features, open the **Shell** and run `grep VT-x /var/run/dmesg.boot`.
If the EPT and UG features are shown, this processor can be used with bhyve.

To verify that an AMD processor has the required features, open the **Shell** and run `grep POPCNT /var/run/dmesg.boot`.
If the output shows the POPCNT feature, this processor can be used with bhyve.
Note that AMD K10 "Kuma" processors include POPCNT but do not support NRIS, which is required for use with bhyve.
Production of these processors ceased in 2012-2013.
{{< /expand >}}

## Creating a Virtual Machine

Before creating the virtual machine, you will need an installer <file>.iso</file> or image file for the operating system you intend to install and a [storage pool](/CORE/Storage/Pools/) available for both the virtual disk and operating system install file.

To create a new VM, go to **Virtual Machines** and click *Add*.
Configure each category of the VM according to your specifications, starting with the **Operating System**.

![VMAddOperatingSystem](/images/CORE/12.0/VirtualMachinesAddOperatingSystem.png "VM Add: OS")

{{< expand "Specific Options" "v" >}}

{{< include file="static/includes/VirtualMachinesAddFields.md.part" markdown="true" >}}

Additional notes:

* The *Grub* *Boot Method* is not supported by *Windows* guest operating systems.
* Compare the recommended specifications for your guest operating system with the available host system resources when allocating *Virtual CPUs*, *Cores*, *Threads*, and *Memory Size*.
* Avoid allocating too much memory to a VM.
  Activating a VM that has all available memory allocated to it can slow the host system or prevent other VMs from starting.
* *AHCI* is the recommended *Disk Type* for Windows VMs.
* The *VirtIO* **Network Interface** requires that the chosen guest operating system support VirtIO paravirtualized network drivers.
{{< /expand >}}

### Adding and Removing Devices

After the VM is created, add and remove virtual devices by expanding the VM entry in **Virtual Machines** and clicking <i class="material-icons" aria-hidden="true" title="Devices Button">device_hub</i> *DEVICES*.

![VMDevices](/images/CORE/12.0/VirtualMachinesDevices.png "VM Devices")

Device notes:

* The virtual machine attempts to boot from devices according to the *Device Order*, starting with *1000*, then ascending.
* *CD-ROM* devices allowing booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

## Managing the Virtual Machine

After creating the VM and configuring any devices for it, manage the VM by expanding its entry in **Virtual Machines**.

![VMOptions](/images/CORE/12.0/VirtualMachinesOptions.png "VM Options")

Options for <i class="material-icons" aria-hidden="true" title="VNC Button">settings_ethernet</i> *VNC* or <i class="material-icons" aria-hidden="true" title="Serial Button">keyboard_arrow_right</i> *SERIAL* connections are available after activating the VM.
If the *VNC* connection screen appears garbled, try adjusting the VNC device resolution.

Using the *State* toggle or clicking <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *STOP* follows a standard shut down procedure to cleanly shut down the running VM.
Clicking <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> *POWER OFF* immediately halts and deactivates the VM, similar to unplugging a computer.

{{< hint info >}}
If the VM you created has no Guest OS installed, The VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *STOP* button might not function as expected.
These buttons try to send an ACPI power down command to the VM operating system, but since no OS is installed, the commands time out.
Use the *POWER OFF* button instead.
{{< /hint >}}