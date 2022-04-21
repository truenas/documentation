---
title: "Virtualization"
geekdocCollapseSection: true
weight: 80
---

The Virtualization section allows users to set up Virtual Machines (VMs) to run alongside TrueNAS. Delegating processes to VMs reduces the load on the physical system, which means users can utilize additional hardware resources. Users can customize six different segments of a VM when creating one in TrueNAS SCALE.

{{< expand "What system resources do VMs require?" "v" >}}
{{< include file="static/includes/SCALE/ScaleVMReqResources.md.part" markdown="true" >}}
{{< /expand >}}

![VirtualizationSCALE](/images/SCALE/VirtualizationSCALE.png "SCALE Virtualization Screen")

{{< tabs "VM Configuration Options" >}}
{{< tab "1 Operating System" >}}
The **Operating System** menu lets users chose the VM operating system type, the time it uses, its boot method, and its display type.

The menu also lets users set a shutdown timeout duration and IP address type, as well as set whether the VM should start when the system boots or have a display.
{{< /tab >}}
{{< tab "2 CPU and Memory" >}}
The **CPU and Memory** menu lets users select how many virtual CPUs to allocate to the virtual machine, how many cores per virtual CPU socket, and how many threads per core.

This menu also has options for CPU mode and model, and how much RAM to allocate for the VM.
{{< /tab >}}
{{< tab "3 Disks" >}}
The **Disks** menu lets users choose to either create a new zvol on an existing dataset for a disk image or use an existing zvol or file for the VM.

Users may also select the disk type, zvol location, and how much space to allocate to the zvol.
{{< /tab >}}
{{< tab "4 Network Interface" >}}
The **Network Interface** menu provides options for the adapter type, Mac address, and which physical interface to associate with the VM.
{{< /tab >}}
{{< tab "5 Installation Media" >}}
The **Installation Media** menu lets users decide if they want to choose an installation media image on a dataset or upload one from the local machine.
{{< /tab >}}
{{< tab "6 GPU" >}}
The **GPU** menu allows users to select a graphics processing unit (GPU) for the VM. It also provides the option to hide the VM from the Microsoft Reserved Partition (MSR) on Windows systems.
{{< /tab >}}
{{< /tabs >}}

{{< include file="static/includes/General/MenuNav.md.part" markdown="true" >}}
