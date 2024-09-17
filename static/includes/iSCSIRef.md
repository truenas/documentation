&NewLine;

*Internet Small Computer Systems Interface* (iSCSI) represents standards for using Internet-based protocols for linking binary data storage device aggregations.
IBM and Cisco submitted the draft standards in March 2000. Since then, iSCSI has seen widespread adoption into enterprise IT environments.

iSCSI functions through encapsulation. The *Open Systems Interconnection Model* (OSI) encapsulates SCSI commands and storage data within the session stack.
The OSI further encapsulates the session stack within the transport stack, the transport stack within the network stack, and the network stack within the data stack.
Transmitting data this way permits block-level access to storage devices over LANs, WANs, and even the Internet itself (although performance clould suffer if your data traffic is traversing the Internet).

The table below shows where iSCSI sits in the OSI network stack:

{{< truetable >}}
| OSI Layer Number | OSI Layer Name | Activity as it relates to iSCSI |
|------------------|----------------|---------------------------------|
| 7 | Application | An application tells the CPU that it needs to write data to non-volatile storage. |
| 6 | Presentation | OSI creates a SCSI command, SCSI response, or SCSI data payload to hold the application data and communicate it to non-volatile storage. |
| 5 | Session | Communication between the source and the destination devices begins. This communication establishes when the conversation starts, what it talks about, and when the conversion ends. This entire dialogue represents the session. OSI encapsulates the SCSI command, SCSI response, or SCSI data payload containing the application data within an iSCSI Protocol Data Unit (PDU). |
| 4 | Transport | OSI encapsulates the iSCSI PDU within a TCP segment. |
| 3 | Network | OSI encapsulates the TCP segment within an IP packet. |
| 2 | Data | OSI encapsulates the IP packet within the Ethernet frame. |
| 1 | Physical | The Ethernet frame transmits as bits (zeros and ones). |
{{< /truetable >}}

Unlike other sharing protocols on TrueNAS, an iSCSI share allows block sharing and file sharing.
Block sharing provides the benefit of [block-level access](https://www.ibm.com/cloud/learn/block-storage) to data on the TrueNAS.
iSCSI exports disk devices (zvols on TrueNAS) over a network that other iSCSI clients (initiators) can attach and mount.

{{< expand "iSCSI Terminology" "v" >}}

* **Challenge-Handshake Authentication Protocol (CHAP)**: an authentication method that uses a shared secret and three-way authentication to determine if a system is authorized to access the storage device. It also periodically confirms that the session has not been hijacked by another system. In iSCSI, the client (initiator) performs the CHAP authentication.

* **Mutual CHAP**: a CHAP type in which both ends of the communication authenticate to each other.

* **Internet Storage Name Service (iSNS)**: protocol for the automated discovery of iSCSI devices on a TCP/IP network.

* **Extent**: the storage unit to be shared. It can either be a file or a device.

* **Portal**: indicates which IP addresses and ports to listen on for connection requests.

* **Initiators and Targets**: iSCSI introduces the concept of *initiators* and *targets* which act as sources and destinations respectively.
iSCSI initiators and targets follow a client/server model. Below is a diagram of a typical iSCSI network.
The TrueNAS storage array acts as the iSCSI target and can be accessed by many of the different iSCSI initiator types, including software and hardware-accelerated initiators.

  ![iSCSIInitiatorsTargets](/images/TrueNASCommon/iSCSIInitiatorsTargets.png "iSCSI Initiators and Targets Example")

  The iSCSI protocol standards require that iSCSI initiators and targets are represented as iSCSI nodes.
  It also requires that each node is given a unique iSCSI name.
  To represent these unique nodes via their names, iSCSI requires the use of one of two naming conventions and formats, IQN or EUI.
  
  IQN names must follow these conventions for allowed characters, as described in [RFC-3722](https://www.rfc-editor.org/rfc/rfc3722):
  
  * dash (`-`)
  * dot (`.`)
  * colon (`:`)
  * lower case characters (`a`...`z`).
    Upper-case characters must be mapped to their related lower-case counterparts.
  * digits (`0`...`9`)

  iSCSI also allows the use of iSCSI aliases which are not required to be unique and can help manage nodes.

* **Logical Unit Number (LUN)**: LUN represents a logical SCSI device. An initiator negotiates with a target to establish connectivity to a LUN.
  The result is an iSCSI connection that emulates a connection to a SCSI hard disk.
  Initiators treat iSCSI LUNs as if they were a raw SCSI or SATA hard drive. Rather than mounting remote directories, initiators format and directly manage filesystems on iSCSI LUNs.
  When configuring multiple iSCSI LUNs, create a new target for each LUN. Since iSCSI multiplexes a target with multiple LUNs over the same TCP connection, there can be TCP contention when more than one target accesses the same LUN. TrueNAS supports up to 1024 LUNs.

* **Jumbo Frames**: Jumbo frames are the name given to Ethernet frames that exceed the default 1500 byte size.
  This parameter is typically referenced by the nomenclature as a maximum transmission unit (MTU).
  A MTU that exceeds the default 1500 bytes necessitates that all devices transmitting Ethernet frames between the source and destination support the specific jumbo frame MTU setting, which means that NICs, dependent hardware iSCSI, independent hardware iSCSI cards, ingress and egress Ethernet switch ports, and the NICs of the storage array must all support the same jumbo frame MTU value. So, how does one decide if they should use jumbo frames?

  Administrative time is consumed configuring jumbo frames and troubleshooting if/when things go sideways.
  Some network switches might also have ASICs optimized for processing MTU 1500 frames while others might be optimized for larger frames.
  Systems administrators should also account for the impact on host CPU utilization.
  Although jumbo frames are designed to increase data throughput, it might measurably increase latency (as is the case with some un-optimized switch ASICs); latency is typically more important than throughput in a VMware environment.
  Some iSCSI applications might see a net benefit running jumbo frames despite possible increased latency. Systems administrators should test jumbo frames on their workload with lab infrastructure as much as possible before updating the MTU on their production network.

{{< enterprise >}}
* **Asymmetric Logical Unit Access (ALUA)**: ALUA allows a client computer to discover the best path to the storage on a TrueNAS system.
  HA storage clusters can provide multiple paths to the same storage.
  For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer.
  The same disks are also available through the secondary computer, but speed and bandwidth are restricted.
  
  With ALUA, clients automatically ask for and use the best path to the storage.
  If one of the TrueNAS HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage.
  When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

Do not enable ALUA on TrueNAS unless it is also supported by and enabled on the client computers. ALUA only works when enabled on both the client and server.
{{< /enterprise >}}
{{< /expand >}}

## iSCSI Configuration Methods

There are a few different approaches for configuring and managing iSCSI-shared data:

{{< enterprise >}}
TrueNAS Enterprise customers that use vCenter to manage their systems can use the TrueNAS vCenter Plugin to connect their TrueNAS systems to vCenter and create and share iSCSI datastores.
This is all managed through the vCenter web interface.
{{< /enterprise >}}

* TrueNAS 13 web interface: the TrueNAS web interface is fully capable of configuring iSCSI shares.
  This requires creating and populating zvol block devices with data, then setting up the iSCSI Share.
  TrueNAS Enterprise licensed customers also have additional options to configure the share with Fibre Channel.

* TrueNAS 24.10 web interface: TrueNAS 24.10 offers a similar experience to TrueNAS 13 for managing data with iSCSI; create and populate the block storage, then configure the iSCSI share.
