&NewLine;

{{< expand "CPU and Memory Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Virtual CPUs** | Text entry field to manually enter the number of virtual CPUs to allocate to the virtual machine. The VM operating system might have operational or licensing restrictions on the number of CPUs. Consult the documentation and requirements for the planned operating system configured for this VM. |
| **Cores** | Text entry field to manually enter the number of cores per virtual CPU socket. |
| **Threads** | Text entry field to manually enter the number of threads per core. |
| **Optional: CPU Set (Example: 0-3,8-11)** | Text entry field to manually enter the logical cores this VM can use. Better cache locality can be achieved by setting the CPU set based on the CPU topology (e.g., to assign cores 0, 1, 2, 5, 9, 10, and 11, you can enter 1-2,5,9-11). |
| **Pinvcpus** | Set to automatically pin into the CPU when the number of vcpus equals the number of CPUs in the CPU. Pinning is done by mapping each vcpu into a single CPU number following the order in CPU set. This improves CPU cache locality and can reduce possible stutter in GPU passthrough VMs. |
| **CPU Mode** | Sets the CPU mode to the option selected on the dropdown list. Options are: **Custom**, **Host Model**, and **Host Passthrough**.
**Custom** shows the **CPU Model** setting. |
| **CPU Model** | Sets the CPU model to the option selected on the dropdown list. |
| **Memory Size** | Text entry field to manually enter the amount of RAM allocated for the VM. The minimum value is **256 MiB**. |
| **Minimum Memory Size** | Text entry field to manually enter the minimum amount of memory. When not specified, a guest system is given a fixed amount of memory specified above. When specified, a guest system is given memory within the range between the minimum and fixed as needed.  |
| **Optional: NUMA nodeset (Example: 0-1)** | Text entry field to manually enter the node sets. The node set allows setting NUMA nodes for multi-NUMA processors when the CPU set is defined. Better memory locality can be achieved by setting the node set based on the assigned CPU set (e.g., if CPUs is 0, and 1 belongs to NUMA node 0, then setting nodeset to 0 improves memory locality). |
{{< /truetable >}}
{{< /expand >}}
