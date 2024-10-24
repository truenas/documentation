&NewLine;

{{< expand "CPU and Memory Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Virtual CPUs** | (Required) Enter the number of virtual CPUs to allocate to the virtual machine. The maximum is 16, or fewer if the host CPU limits the maximum. The VM operating system might impose operational or licensing restrictions on the number of CPUs. Default setting changes with the option selected in **Guest OS**, for Windows it is 2, for Unix-type it is 1. |
| **Cores** | (Required) Enter the number of cores per virtual CPU socket. The product of vCPUs, cores, and threads must not exceed 16. |
| **Threads** | (Required) Enter the number of threads per core. A single CPU core can have up to two threads per core. A dual-core could have up to four threads. The product of vCPUs, cores, and threads must not exceed 16. |
| **Optional: CPU Set (Examples: 0-3,8-11)** | Specify the logical cores that the VM can use. Better cache locality can be achieved by setting the CPU set based on CPU topology. E.g. to assign cores: 0,1,2,5,9,10,11 you can write: `1-2,5,9-11` |
| **Pin vcpus** | When the number of vCPUs equals the number of CPUs in **CPU Set**, vCPUs can be automatically pinned into **CPU Set**. Pinning is done by mapping each vCPU into a single CPU number following the order in **CPU Set**. This improves CPU cache locality and can reduce possible stutter in GPU passthrough VMs. |
| **CPU Mode** | Select the CPU mode attribute from the dropdown list to allow your guest VM CPU to be as close to the host CPU as possible. Select **Custom** to make it so a persistent guest virtual machine sees the same hardware no matter what physical machine the guest VM boots on. It is the default if the CPU mode attribute is not specified. This mode describes the CPU presented to the guest.  Select **Host Model** to use this shortcut to copy the physical host machine CPU definition from the capabilities XML into the domain XML. As the CPU definition copies just before starting a domain, a different physical host machine can use the same XML while still providing the best guest VM CPU each physical host machine supports. Select **Host Passthrough** when the CPU visible to the guest VM is the same as the physical host machine CPU, including elements that cause errors within libvirt. The downside of this is you cannot reproduce the guest VM environment on different hardware. |
| **CPU Model** | Select a CPU model to emulate. |
| **Memory Size** | Allocate RAM for the VM. The minimum value is 256 MiB. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to bytes. |
| **Minimum Memory Size** | (Optional) When not specified, the guest system is given a fixed amount of memory specified in **Memory Size**. When minimum memory is specified, the guest system is given memory within a range between minimum and fixed as needed. Enter a value smaller than the **Memory Size** to enable a variable RAM amount as needed within a range between this value and the one entered in **Memory Size**. |
| **Optional: NUMA nodeset (Example: 0-1)** | Node set allows setting NUMA nodes for multi NUMA processors when CPU set was defined. To achieve better memory locality, setting nodeset based on assigned cpuset. For example, if CPUs 0,1 belong to NUMA node 0, then setting nodeset to 0 improves memory locality. |
{{< /truetable >}}
{{< /expand >}}
