&NewLine;

TrueNAS assigns a portion of system RAM and a new zvol to each VM.
While a VM is running, these resources are not available to the host computer or other VMs.

Virtualization requires:
- x86 machine running a recent Linux kernel
- Intel processor with VT (Virtualization Technology) extensions, OR
- AMD processor with SVM extensions (AMD-V)

Users cannot create VMs unless the host system supports these features.
