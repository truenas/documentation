---
title: "Virtualization"
geekdocCollapseSection: true
weight: 80
---

The Virtualization section allows users to set up Virtual Machines (VM's) to run alongside TrueNAS. Delegating processes to VM's reduces the load on the physical system, which allows users to utilize additional hardware resources. Users can customize six different segments of a VM when creating one in TrueNAS SCALE.

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

{{< /tab >}}
{{< tab "2 CPU and Memory" >}}

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
