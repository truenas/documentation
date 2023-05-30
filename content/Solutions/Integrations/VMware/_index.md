---
title: "VMware"
description: "Integration guides for TrueNAS and a VMware hypervisor."
geekdocCollapseSection: true
weight: 50
aliases:
  - /core/solutions/integrations/vmware/vmwarebestpractices/
  - /core/solutions/integrations/vmware/truenasforvmware/
  - /core/solutions/integrations/vmware/
---

{{< toc >}}

There are several configuration recommendations and troubleshooting tips when using TrueNAS with a [VMware](https://www.vmware.com/) hypervisor.

{{< tabs "iSCSI Recommendations" >}}
{{< tab "IQN" >}}

[iSCSI]({{< relref "CORE/CORETutorials/Sharing/iSCSI/_index.md" >}}) IQN is an acronym that stands for “iSCSI Qualified Name”.  It is comprised of the following naming schema with a preamble, node name and unique identifier:

![iSCSIQualifiedName](/images/TrueNASCommon/iSCSIQualifiedName.png "iSCSI Qualified Name Components")

VMware requires using an IQN in their software iSCSI implementation.

{{< /tab >}}
{{< tab "Failover" >}}

A VMware datastore backed by iSCSI-based storage will consist of at least three distinct pieces: the storage host, the switching infrastructure, and the VMware host itself. In order to maximize service availability, each of these elements needs to be able to tolerate some level of failure without significantly disrupting iSCSI traffic.

TrueNAS systems support high-availability (HA) through dual-controllers running in active/standby mode. A properly-configured HA TrueNAS system can offer up to 5x 9’s of system availability. TrueNAS also fully supports asymmetric logical unit access (ALUA) on iSCSI to significantly reduce failover time.

Network switching infrastructure can be made redundant and fault-tolerant through a number of methods, but multipathing is recommended as the best practice for iSCSI networks.

[VMware’s official documentation](https://www.vmware.com/support/pubs/) details several ways the virtualization host(s) can be made redundant, so that is not covered here.

{{< /tab >}}
{{< tab "Discovery, Authentication, and Access Control" >}}

For a VMware ESXi host to communicate with an iSCSI capable storage array, the iSCSI protocol must be configured to provide: Discovery, Authentication, and Access Control (DAAC).

**Discovery**

iSCSI offers two methods of target discovery: dynamic and static. Dynamic discovery lets the storage array respond automatically to the host initiator’s “SendTargets” request. Static discovery requires an administrator to manually add a list of the iSCSI targets to the initiator. Either method of discovery is fine, but dynamic discovery can make the iSCSI setup process easier.

**Authentication**

iSCSI authentication is handled via the Challenge Handshake Authentication Protocol, or CHAP. CHAP uses a shared secret between targets and initiators to let them validate each other’s authenticity. By default, no CHAP-based authentication is performed by the VMware iSCSI initiator. If you do decide to use CHAP, authentication can either be unidirectional (where only the target authenticates the initiator) or bidirectional (where both the iSCSI initiator and the iSCSI target are required to authenticate to each other prior to transmitting iSCSI data).

VMware iSCSI initiators operating with unidirectional CHAP can be configured in two behavior modes. In “Required” mode, an iSCSI adapter will give precedence to non-CHAP connections, but if the iSCSI target requires it, the connection will use CHAP instead. Required mode is only supported by Software iSCSI and Dependent Hardware iSCSI adapters. Alternatively, initiators can run in “Prohibited” mode, where an iSCSI adapter will give precedence to CHAP connections, but if the iSCSI target does not support CHAP, the initiator can still connect.

Bidirectional CHAP (called “mutual CHAP” in TrueNAS) offers greater security by ensuring that both sides of the iSCSI connection authenticate against each other. Unidirectional CHAP does not let the iSCSI initiator authenticate the target, and running without CHAP obviously disables all authentication. For this reason, bidirectional CHAP is usually recommended but requires additional configuration and comes with greater administrative overhead when troubleshooting iSCSI connections.

**Access Control**

Access control policies are set up within a storage array to ensure only certain initiators can connect to the target (even if they possess the correct CHAP password). Access control can be performed using the initiator’s name (IQN), its IP address, or its CHAP username.

{{< /tab >}}
{{< /tabs >}}

## VMware and TrueNAS iSCSI Setup

The setup of vCenter iSCSI to TrueNAS requires that ESXi hosts be set up as initiators and TrueNAS storage arrays are set up as targets.
To configure ESXi hosts with vCenter, see the [VMware vCenter 6.7 documentation](https://docs.vmware.com/en/VMware-vSphere/6.7/vsphere-vcenter-server-67-installation-guide.pdf).

To configure TrueNAS Enterprise storage arrays with vCenter, iXsystems has developed a [vCenter plugin]({{< relref "/content/Solutions/Integrations/VMware/TrueNASvCenterPlugin/_index.md" >}}).
The plugin uses TrueNAS REST APIs to automate LUN creation and assignment.
When an VMFS (iSCSI) datastore is created using the plugin, the TrueNAS systems automatically activate their iSCSI system services.

## Hosting VMware Storage with TrueNAS

When using TrueNAS as a VMware datastore:

* Make sure guest VMs have the latest version of `vmware-tools` installed.
  VMware provides instructions to [install VMware Tools](https://www.vmware.com/support/ws5/doc/new_guest_tools_ws.html) on different guest operating systems.

* Increase the VM disk timeouts to better survive long reboots or other delayed disk operations. 
  Set the timeout to a minimum of *300 seconds*.
  VMware provides instructions for setting disk timeouts on some specific guest operating systems:

  * Windows guest operating system: https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.storage.doc/GUID-EA1E1AAD-7130-457F-8894-70A63BD0623A.html
  * Linux guests running kernel version 2.6: https://kb.vmware.com/s/article/1009465

  NOTE: Reboots or failovers will typically complete much faster than 300 seconds and Disk IO will resume automatically when finished.


### VMware Snapshots on TrueNAS

When TrueNAS is used as a VMware datastore, you can coordinate creating and using ZFS and VMware snapshots.
See [VMware-Snapshots]({{< relref "CORE/CORETutorials/Storage/VMware-Snapshots.md" >}}) for details.

## vStorage APIs for Array Integration (VAAI) for iSCSI

VMware’s VAAI allows storage tasks such as large data moves to be offloaded from the virtualization hardware to the storage array.
These operations are performed locally on the NAS without transferring bulk data over the network.

VAAI for iSCSI supports these operations:

{{< tabs "VAAI iSCSI Operations" >}}
{{< tab "Atomic Test and Set (ATS)" >}}
Allows multiple initiators to synchronize LUN access in a fine-grained manner rather than locking the whole LUN and preventing other hosts from accessing the same LUN simultaneously.
{{< /tab >}}
{{< tab "Clone Blocks (XCOPY)" >}}
Copies disk blocks on the NAS.
Copies occur locally rather than over the network.
This operation is similar to [Microsoft ODX](https://docs.microsoft.com/en-us/windows-hardware/drivers/storage/offloaded-data-transfer).
{{< /tab >}}
{{< tab "LUN Reporting" >}}
Allows a hypervisor to query the NAS to determine whether a LUN is using thin provisioning.
{{< /tab >}}
{{< tab "Stun" >}}
Pauses virtual machines when a pool runs out of space.
The space issue can be fixed and the virtual machines continue instead of reporting write errors.
{{< /tab >}}
{{< tab "Threshold Warning" >}}
The system reports a warning when a configurable capacity is reached.
In TrueNAS, this threshold is configured at the storage pool level when using zvols or at the extent level for both file and device based extents.
Typically, the warning is set at the pool level, unless file extents are used, in which case it must be set at the extent level.
{{< /tab >}}
{{< tab "Unmap" >}}
Informs TrueNAS that the space occupied by deleted files should be freed.
Without unmap, the NAS is unaware of freed space created when the initiator deletes files.
For this feature to work, the initiator must support the `unmap` command.
{{< /tab >}}
{{< tab "Zero Blocks or Write Same" >}}
Zeros out disk regions.
When allocating virtual machines with thick provisioning, the zero write is done locally, rather than over the network.
This makes virtual machine creation and any other zeroing of disk regions much quicker.
{{< /tab >}}
{{< /tabs >}}

## Additional VMWare Articles

{{< children depth="2" description="true" >}}
