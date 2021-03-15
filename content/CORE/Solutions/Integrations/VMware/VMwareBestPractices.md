---
title: "VMware Best Practices"
weight: 30
---

{{< toc >}}

There are several configuration recommendations and troubleshooting tips when using TrueNAS with a [VMware](https://www.vmware.com/) hypervisor.

## Hosting VMware Storage with TrueNAS

When using TrueNAS as a VMware datastore:

* Make sure guest VMs have the latest version of `vmware-tools` installed.
  VMware provides instructions to [install VMware Tools](https://www.vmware.com/support/ws5/doc/new_guest_tools_ws.html) on different guest operating systems.

* Increase the VM disk timeouts to better survive long disk operations.
  Set the timeout to a minimum of *300 seconds*.
  VMware provides instructions for setting disk timeouts on some specific guest operating systems:

  * Windows guest operating system: https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.storage.doc/GUID-EA1E1AAD-7130-457F-8894-70A63BD0623A.html
  * Linux guests running kernel version 2.6: https://kb.vmware.com/s/article/1009465

### VMware Snapshots on TrueNAS

When TrueNAS is used as a VMware datastore, you can coordinate creating and using ZFS and VMware snapshots.
See [VMware-Snapshots](/core/storage/vmware-snapshots/) for details.

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
