---
title: "Block Shares (iSCSI)"
geekdocCollapseSection: true
weight: 20
---

iSCSI is an acronym that stands for “Internet Small Computer Systems Interface”, and it represents a set of standards for using Internet-based protocols for linking aggregations of binary data storage devices.
The draft standards were submitted in March 2000 and iSCSI has since seen a tremendous growth in adoption into enterprise IT environments.

One perspective of iSCSI can be understood as the “encapsulation” of SCSI commands and storage data within the “session” stack, which is then further encapsulated within the “transport” stack, which, yet again, is further encapsulated within the “network” stack, and so on and so forth.
Transmitting data this way allows for block-level access to storage devices over LANs, WANs, and even “the Internet” itself (although don’t expect performance to be amazing if your data traffic is traversing the Internet).

The table below shows where iSCSI sits in the OSI network stack:

![iSCSIStackLocation](images/TrueNASCommon/iSCSIStackLocation.png "iSCSI Location in Network Stack")

Unlike other sharing protocols on TrueNAS, an iSCSI share allows for block sharing *and* file sharing.
Block sharing provides the benefit of [block-level access](https://www.ibm.com/cloud/learn/block-storage) to data on the TrueNAS.
iSCSI exports disk devices (zvols on TrueNAS) over a network that allows other iSCSI clients (initiators) to attach to and mount.

## iSCSI Terminology

* **CHAP (Challenge-Handshake Authentication Protocol)**: an authentication method that uses a shared secret and three-way authentication to determine if a system is authorized to access the storage device. It also periodically confirms that the session has not been hijacked by another system. In iSCSI, the client (initiator) performs the CHAP authentication.

* **Mutual CHAP**: a CHAP type in which both ends of the communication authenticate to each other.

* **Internet Storage Name Service (iSNS)**: protocol for the automated discovery of iSCSI devices on a TCP/IP network.

* **Extent**: the storage unit to be shared. It can either be a file or a device.

* **Portal**: indicates which IP addresses and ports to listen on for connection requests.

* **Initiators and Targets**: iSCSI introduces the concept of “initiators” and “targets” which act as sources and destinations respectively. iSCSI initiators and targets follow a client / server model. Below is a diagram of a typical iSCSI network. The TrueNAS storage array acts as the iSCSI target and can be accessed by many of the different iSCSI initiator types, including software and hardware-accelerated initiators.

  ![iSCSIInitiatorsTargets](images/TrueNASCommon/iSCSIInitiatorsTargets.png "iSCSI Initiators and Targets Example")

  The iSCSI protocol standards require that iSCSI initiators and targets be represented as iSCSI nodes. It also requires that each node be given a unique iSCSI name. In order to represent these unique nodes via their names, iSCSI requires the use of one of two naming conventions and formats, IQN or EUI. iSCSI also allows the use of iSCSI aliases which are not required to be unique and can be helpful in managing nodes.

* **LUN**: *Logical Unit Number* representing a logical SCSI device. An initiator negotiates with a target to establish connectivity to a LUN. The result is an iSCSI connection that emulates a connection to a SCSI hard disk. Initiators treat iSCSI LUNs as if they were a raw SCSI or SATA hard drive. Rather than mounting remote directories, initiators format and directly manage filesystems on iSCSI LUNs. When configuring multiple iSCSI LUNs, create a new target for each LUN. Since iSCSI multiplexes a target with multiple LUNs over the same TCP connection, there can be TCP contention when more than one target accesses the same LUN. TrueNAS supports up to 1024 LUNs.

{{< hint info >}}
**TrueNAS Enterprise Feature**:

* **ALUA**: *Asymmetric Logical Unit Access* allows a client computer to discover the best path to the storage on a TrueNAS system. HA storage clusters can provide multiple paths to the same storage. For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer. The same disks are also available through the secondary computer, but because they are not directly connected to it, speed and bandwidth are restricted. With ALUA, clients automatically ask for and use the best path to the storage. If one of the TrueNAS HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage. When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

* **Jumbo Frames**: “Jumbo frames” are the name given to Ethernet frames that exceed the default 1500 byte size. This parameter is typically referenced by the nomenclature of maximum transmission unit, or MTU. MTU that exceeds the default 1500 bytes necessitates that all devices transmitting Ethernet frames between the source and destination support the specific jumbo frame MTU setting, which means that NICs, dependent hardware iSCSI, independent hardware iSCSI cards, ingress and egress Ethernet switch ports, and the NICs of the storage array must all support the same jumbo frame MTU value. So, how does one decide if they should use jumbo frames?

Administrative time is consumed configuring Jumbo Frames and troubleshooting if/when things go sideways. Some network switches might also have ASICs optimized for processing MTU 1500 frames while others might be optimized for larger frames. Systems administrators should also account for the impact on host CPU utilization. Although Jumbo Frames are designed to increase data throughput, it may  measurably increase latency (as is the case with some un-optimized switch ASICs);  latency is typically more important than throughput in a VMware environment. Some iSCSI applications might see a net benefit running jumbo frames despite possible increased latency. Systems administrators should test jumbo frames on their workload with lab infrastructure as much as possible before updating the MTU on their production network.

Do not enable ALUA on TrueNAS unless it is supported by and enabled on the client computers also. ALUA only works properly when enabled on both the client and server.
{{< /hint >}}

{{< include file="static/includes/General/MenuNav.md.part" markdown="true" >}}
