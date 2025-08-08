&NewLine;

{{< expand "How does TrueNAS NVMe-oF compare to iSCSI?" "V" >}}

The TrueNAS NVMe-oF implementation is based on the Linux kernel NVMe target, with four entities:

* Subsystem - The equivalent of the iSCSI target.
  A subsystem includes a namespace, port, and host access. The **Add Subsystem** wizard walks admins through the configuration process.

* Namespace - The equivalent of an iSCSI extent. In NVMe, this includes the extent and target-extent mapping.
  A particular namespace entity can only ever be used in a single subsystem.

* Host - The clients allowed to connect to the subsystem (target) and namespace (extent).
  The default is to allow all hosts to connect, or for greater security, admins can configure individual hosts allowed to access the subsystem and namespace.

* Port - The communication channels NVMe-oF uses for incoming/outgoing traffic over TCP networks. Port numbers are at least four digits in length.

TrueNAS NVMe-oF uses zvols or files for the storage devices. TrueNAS serves storage (zvols or files) to NVMe-oF clients (hosts).
TrueNaS allows exporting an existing zvol previously exposed as an iSCSI target for use in NVMe-oF, preserving any data in the zvol a user wants to keep, and with one-to-one mapping of the zvol to the namespace.
A zvol exported is not eligible to be exposed by iSCSI after it is exported.

TrueNAS NVMe-oF offers global configurations of iSCSI equivalents:

* Asymmetric Namespace Access (ANA) - This is the equivalent to ALUA in iSCSI.
  Systems connecting to the target require some form of multi-pathing support.
* Remote Direct Memory Access (RDMA) - The system must support Remote Direct Memory Access (RDMA).

Both ANA and RDMA require an Enterprise license.
{{< /expand >}}
