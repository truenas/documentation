&NewLine;

TrueNAS (27 and later) stores containers in a hidden <file>.truenas_containers</file> dataset on the selected pool.
Each container has its own dataset within <file>.truenas_containers</file>, named after the container, for example <file>*pool*/.truenas_containers/containers/*container_name*</file>.
The <file>.truenas_containers</file> dataset is mounted separately from the pool file system, at <file>/mnt/.truenas_containers/*pool*</file>, to prevent accidental inclusion in SMB or NFS shares.
TrueNAS manages the <file>.truenas_containers</file> dataset internally.
Modifying it directly can cause container instability or data loss.

Images are stored in <file>*pool*/.truenas_containers/images</file>, next to the <file>containers</file> dataset.

The dataset is created per pool. The pool used is set by the **Preferred Pool** setting or chosen when you create the container.

{{< hint type=note title="Containers Created in TrueNAS 25.10" >}}
TrueNAS 25.10 stored containers in <file>.ix-virt</file>.
See [Migrating Containers from TrueNAS 25.10](https://www.truenas.com/docs/scale/27/containers/managingcontainers/#migrating-containers-from-truenas-2510) in the TrueNAS 27 documentation for information on how TrueNAS migrates them.
{{< /hint >}}