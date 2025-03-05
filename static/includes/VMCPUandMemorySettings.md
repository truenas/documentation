&NewLine;

{{< expand "CPU and Memory Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **CPU Configuration** | (Required for VMs) Enter the number of virtual CPU (vCPU) cores to allocate to the instance. Set to an integer to expose that number of full vCPU cores to the instance. <br><br> Set to a range or comma-separated list to pin vCPUs to specific physical cores. For better cache locality and performance, select cores that share the same cache hierarchy or NUMA node. For example, to assign cores 0,1,2,5,9,10,11, you can write: `1-2,5,9-11`. <br><br> For Linux containers, you can set CPU limits or leave this field blank to allow access to all host CPUs. |
| **Memory Size** | (Required for VMs) Allocate RAM for the instance. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to mebibytes (MiB). The minimum value is 32 MiB. <br><br> For Linux containers, you can set memory limits or leave this field blank to allow access to all host memory. |
{{< /truetable >}}
{{< /expand >}}
