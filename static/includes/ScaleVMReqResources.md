&NewLine;

TrueNAS uses [Incus](https://linuxcontainers.org/incus/) to manage instances, with LXC for containers and QEMU for virtual machines (VMs).

VMs require an Intel processor with VT-x extensions or an AMD processor with SVM (AMD-V) extensions.
Users cannot create VMs unless the host system supports these features.
To verify Intel VT-x or AMD-V support, check your processor model on the vendor's website.
If needed, enable virtualization in the BIOS under **Advanced > CPU Configuration** settings.

Containers do not require CPU virtualization support since they use OS-level virtualization and share the host kernel.

For best performance, ensure the system has sufficient RAM (at least 4GB per VM), fast storage (SSD/NVMe recommended), and networking configured to allow external access if needed.
More CPU cores improve performance and dedicated resources like pinned vCPUs can enhance workload efficiency.
