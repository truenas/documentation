---
title: "Virtual Machines"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/virtualmachines/creatingbasicvm/"
description: "Provides instructions on creating and managing a basic virtual machine, and lists other tutorials about virtual machines in TrueNAS CORE."
geekdocCollapseSection: true
weight: 30
related: false
aliases: 
 - /core/applications/virtualmachines/basic/
 - /core/coretutorials/jailspluginsvms/virtualmachines/creatingbasicvm/
tags:
- vm
- plugins
---

## Basic Virtual Machine Management

{{< hint type=important title="Unsupported Feature" >}}
{{< include file="/static/includes/COREFeatureSupport.md" >}}
{{< /hint >}}

A *virtual machine* (VM) is an environment on a host computer that can be used as if it were a separate physical computer.
VMs can be used to run multiple operating systems simultaneously on a single computer.
Operating systems running inside a VM see emulated virtual hardware rather than the actual hardware of the host computer.
This provides more isolation than jails, but a VM consumes more system resources.

{{< expand "What system resources do VMs require?" "v" >}}
A VM requires a portion of system RAM and a new zvol assigned to it.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use the [bhyve](https://bhyve.org/) virtual machine software.
This type of virtualization requires an Intel processor with Extended Page Tables (EPT) or an AMD processor with Rapid Virtualization Indexing (RVI) or Nested Page Tables (NPT).
VMs cannot be created unless the host system supports these features.

To verify that an Intel processor has the required features, open an SSH session or local console shell and run `grep VT-x /var/run/dmesg.boot`.
If the EPT and UG features are shown, this processor can use the bhyve VM software.

To verify that an AMD processor has the required features, open and SSH session or local console shell and run `grep POPCNT /var/run/dmesg.boot`.
If the output shows the POPCNT feature, this processor can use the bhyve VM software.
Note that AMD K10 Kuma processors include POPCNT but do not support NRIS, which is required for use with bhyve.
Production of these processors ceased in 2012-2013.
{{< /expand >}}

## Creating a Virtual Machine

Before creating the virtual machine, you need an installer <file>.iso</file> or image file for the operating system you intend to install and a [storage pool]({{< relref "/CORE/CORETutorials/Storage/Pools/_index.md" >}}) available for both the virtual disk and operating system install file.

To create a new VM, go to **Virtual Machines** and click **Add**.
Configure each category of the VM according to your specifications, starting with the **Operating System**.

![VMAddOperatingSystem](/images/CORE/VirtualMachines/VirtualMachinesAddOperatingSystem.png "VM Add: OS")

For information on the wizard screens and settings, see [Virtual Machine Screens]({{< relref "/CORE/UIReference/JailsPluginsVMs/VirtualMachines.md" >}}).

Additional notes:

* Using the **Grub** boot method as the guest operating system is not supported by Windows.
* Compare the recommended specifications for your guest operating system with the available host system resources when allocating values in **Virtual CPUs**, **Cores**, **Threads**, and **Memory Size**.
* Avoid allocating too much memory to a VM.
  Activating a VM that has all available memory allocated to it can slow the host system or prevent other VMs from starting.

**AHCI** is the recommended disk type for Windows VMs.

**VirtIO** as network interface requires that the chosen guest operating system support VirtIO paravirtualized network drivers.
{{< expand "VirtIO compatibility with Windows 10 21H1" "v" >}}
VirtIO drivers are unstable with Windows 10 21H1 during the installation process and can result in VM install failure. 
Avoid using VirtIO drivers with Windows 10 21H2 Virtual Machines.
{{< /expand >}}

### Adding and Removing Devices

After creating the VM, you can add and remove virtual devices by expanding the VM entry in **Virtual Machines** and clicking the <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** option.

![VMDevices](/images/CORE/VirtualMachines/VirtualMachinesDevices.png "VM Devices")

Device notes:

* The virtual machine attempts to boot from devices according to the the **Device Order** setting, starting with **1000**, then ascending.
* The **CD-ROM** device option allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.

## Managing a Virtual Machine

After creating a VM and configuring any devices for it, manage the VM by expanding its entry in **Virtual Machines**.

![VMOptions](/images/CORE/VirtualMachines/VirtualMachinesOptions.png "VM Options")

Options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> or <i class="material-icons" aria-hidden="true" title="Serial">keyboard_arrow_right</i> connections are available after activating the VM.
If the **VNC** connection screen appears garbled, try adjusting the VNC device resolution.

Using the **State** toggle or clicking <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> follows a standard shutdown procedure to cleanly shut down the running VM.
Clicking <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> immediately halts and deactivates the VM, similar to unplugging a computer.

{{< hint type=note >}}
If the VM does not have a guest OS installed, the VM **State** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> button might not function as expected.
These buttons try to send an ACPI power-down command to the VM operating system, but since an OS is not installed, the commands time out.
Use the **POWER OFF** button instead.
{{< /hint >}}

<div class="noprint">

## Virtual Machine Articles

{{< children depth="2" description="true" >}}

</div>
