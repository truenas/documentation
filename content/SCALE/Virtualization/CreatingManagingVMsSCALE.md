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

{{< tabs "Examples of Specific OS VM Installations" >}}
{{< tab "Debian" >}}

Go to https://www.debian.org to download the latest Debian Installation file.

{{< /tab >}}
{{< /tabs >}}

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

When the VM is active, it will display options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> *VNC* and <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> *Serial* connections.

If the *VNC* connection screen appears distorted, try adjusting the VNC device resolution.

Using the *State* toggle or clicking <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *Stop* follows a standard shut down procedure to cleanly shut down the running VM.
Clicking <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> *Power Off* immediately halts and deactivates the VM, similar to unplugging a computer.

{{< hint info >}}
If the VM you created has no Guest OS installed, The VM *State* toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *Stop* button might not function as expected.
The *State* toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> *Stop* button send an ACPI power down command to the VM operating system, but since no OS is installed, the commands time out.
Use the *Power Off* button instead.
{{< /hint >}}

