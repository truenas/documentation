&NewLine;

{{< hint type=info title="VMware ESXi Compatibility" >}}
NVMe over TCP is incompatible with VMware ESXi environments. TrueNAS uses the Linux kernel NVMe over TCP target driver, which lacks support for "fused commands" required by VMware ESXi. This is an upstream kernel limitation that prevents path initialization in ESXi environments.
{{< /hint >}}
