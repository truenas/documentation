&NewLine;

TrueNAS assigns a portion of system RAM and a new zvol to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

TrueNAS VMs use the [KVM](https://www.linux-kvm.org/page/Main_Page) virtual machine software.
This type of virtualization requires an x86 machine running a recent Linux kernel on an Intel processor with VT (virtualization technology) extensions or an AMD processor with SVM extensions (also called AMD-V).
Users cannot create VMs unless the host system supports these features.

To verify that you have Intel VT or AMD-V, check your processor model name on the vendor's website.
If needed, enable virtualization in the BIOS **Advanced > CPU Configuration** settings.
