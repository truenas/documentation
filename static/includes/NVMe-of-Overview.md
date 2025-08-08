&NewLine;

What is NVMe-oF?
Non-Volatile Memory Express over Fabric (NVMe-oF) is a network protocol that runs NVMe commands over standard TCP/IP networks.
The default protocol in TrueNAS is TCP.

The TrueNAS deployment of the NVMe-oF protocol provides a block share alternative to iSCSI and iSER (available to Enterprise customers).
TrueNAS NVMe-of works with VMware vShpere 7. It is not supported in earlier VMware releases of vSphere.

{{< expand "What are the benefits of NVMe-oF over iSCSI?" "v" >}}

NVMe-oF benefits include performance, protocol efficiencies, system scalability, and no specific network requirements.

Performance includes lower latency (90% lower than iSCSI), which is attributed to streamlined command processing.
Other performance improvements are in higher IOPS capabilities (up to 4x performance improvement over iSCSI), better CPU efficiency with fewer processing layers (85% lower than iSCSI), and native support for parallelism and queuing.

Protocol efficiencies result from direct NVMe command mapping versus SCSI translation layers, reductions in overhead in the storage stack, and better utilization of modern SDD capabilities.

Scalability improves through more efficient handling of multiple connections, scaling with additional drives for performance improvements, and native support for modern storage workloads.

NVMe does not require specialized network hardware, unless you deploy RDMA or Fibre Channel solutions. NVMe works over standard TCP/IP network infrastructure, and supports standard networking features like VLANs and routing.
However, if deploying RDMA or Fibre Channel, each requires a TrueNaS Enterprise license, and the TrueNAS systems must be equipped with the appropriate hardware to support each transport type.

When using NVMe-oF with VMware vSphere 7, systems have native support through built-in FC-NVMe and RDMA (RoCE v2). Enhanced virtualization through enabled I/O-intensive workloads previously requiring bare metal, and simplified management through integration with the vSphere storage stack.
{{< /expand >}}

{{< expand "Why choose NVMe-oF?" "v" >}}

Systems that require support for high-performance databases, virtualization environments, container storage, and modern applications that require low-latency storage, benefit from NVMe which excels with these solutions.

Possible use case scenarios for NVMe-oF are system share administrators who want to:

* Edit or disable NVMe-oF block storage targets from the TrueNAS UI.
* Start, restart, or stop the service from the TrueNAS UI.
* Access logs of who created the target and when, who makes modifications and when, and who disables NVMe-oF shares and when.
* Confirm connectivity and validate credentials during configuration or modification of the targets.
* Allow read-only admins to view NVMe-oF target details but not allow editing or deleting the targets.

The NVMe-oF service is restored with no data loss during failover in High Availability (HA) systems.
{{< /expand >}}

{{< expand "How does TrueNAS NVMe-oF compare to iSCSI?" "V" >}}

{{< include file="/static/includes/NVMe-oF-Structure.md" >}}

{{< /expand >}}
