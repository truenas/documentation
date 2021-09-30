TrueNAS assigns a portion of system RAM and a new zvol to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use the [KVM](https://www.linux-kvm.org/page/Main_Page) virtual machine software.
This type of virtualization requires an x86 machine running a recent Linux kernel on an Intel processor with VT (virtualization technology) extensions or an AMD processor with SVM extensions (also called AMD-V).
Users cannot create VMs unless the host system supports these features.

To verify that you have Intel VT or AMD-V, open the **Shell** and run `egrep '^flags.*(vmx|svm)' /proc/cpuinfo`.
If device information appears, your system has VT. You can also check the processor model name (in `/proc/cpuinfo`) on the vendor's website.
