a. Enter the number of virtual CPU (vCPU) cores to allocate in **CPU Configuration**.

  Set to an integer to expose that number of full vCPU cores to the instance.

  Set to a range or comma-separated list to pin vCPUs to specific physical cores.
  For better cache locality and performance, select cores that share the same cache hierarchy or NUMA node.
  For example, to assign cores 0,1,2,5,9,10,11, you can write: `1-2,5,9-11`.

b. Allocate RAM in **Memory Size**.

  This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB).
  If units are not specified, the value defaults to mebibytes (MiB). The minimum value is 32 MiB.
