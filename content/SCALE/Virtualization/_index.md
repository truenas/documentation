---
title: "Virtualization"
geekdocCollapseSection: true
weight: 80
---

The Virtualization section allows users to set up Virtual Machines (VM's) to run alongside TrueNAS. Delegating processes to VM's reduces the load on the physical system, which means users can utilize additional hardware resources. Users can customize six different segments of a VM when creating one in TrueNAS SCALE.

{{< expand "What system resources do VMs require?" "v" >}}
A portion of system RAM and a new zvol is assigned to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use the [KVM](https://www.linux-kvm.org/page/Main_Page) virtual machine software.
This type of virtualization requires an x86 machine running a recent Linux kernel on an Intel processor with VT (virtualization technology) extensions, or an AMD processor with SVM extensions (also called AMD-V).
VMs cannot be created unless the host system supports these features.

To verify that you have Intel VT or AMD-V, open the **Shell** and run `egrep '^flags.*(vmx|svm)' /proc/cpuinfo`.
If something shows up, your sytem has VT. You can also check the processor model name (in `/proc/cpuinfo`) in the vendor's web site.
{{< /expand >}}

{{< tabs "VM Configuration Options" >}}
{{< tab "1 Operating System" >}}
The operating system menu lets users chose the VM operating system type, the time it uses, its boot method, and its display type.

The menu also lets users set a shutdown timeout duration and IP address type, as well as set whether the VM should start when the system boots or have a display.
{{< /tab >}}
{{< tab "2 CPU and Memory" >}}
The CPU and memory menu lets users select how many virtual CPUs to allocate to the virtual machine, how many cores per virtual CPU socket, and how many threads per core.

This menu also has options for CPU mode and model, and how much RAM to allocate for the VM.
{{< /tab >}}
{{< tab "3 Disks" >}}

{{< /tab >}}
{{< tab "4 Network Interface" >}}

{{< /tab >}}
{{< tab "5 Installation Media" >}}

{{< /tab >}}
{{< tab "6 GPU" >}}

{{< /tab >}}
{{< /tabs >}}

{{< include file="static/includes/MenuNav.md.part" markdown="true" >}}
