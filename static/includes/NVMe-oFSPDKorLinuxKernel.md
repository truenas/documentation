&NewLine;

{{< expand "What is the difference between SPDK and Linux Kernel?" "v" >}}
**Linux Kernel** runs in the kernel space (standard Linux drivers). Choose when you need the rich Linux ecosystems features (filesystem, LVM, encryption, snapshots, and standard tools) or when you want maximum compatibility, and if you prefer lower idle CPU and easier power management.

**SPDK (Userspace)** runs entirely in the user space. Choose when you need maximum performance (lowest latency, highest IOPS/core, best tail latency), when the system has many NVMe drives, if you have high-speed networking (100 GbE+) requirements, and when CPU efficiency under heavy load is critical.
{{< /expand >}}