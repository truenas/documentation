---
title: "Concepts and Terminology"
description: "Provides a glossary of terms and definitions used in TrueNAS and general network attach storage (NAS) software."
weight: 10
---

TrueNAS is very complicated software that combines many different open-source solutions into one cohesive software package.
While TrueNAS is designed for and ever-evolving towards increased user friendliness, there are many terms and concepts that can be learned to improve your ability to understand and configure the software.

## General Concepts

* **Operating System (OS)**: An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.

* **Open Source**: Open-source software is a type of computer software in which source code is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software to anyone and for any purpose.

* **Network Attach Storage (NAS)**: Network-attached storage (NAS) is a computer data storage server connected to a computer network providing data access to a heterogeneous group of clients.

* **Storage Area Network (SAN)**: A storage area network (SAN) or storage network is a computer network which provides access to consolidated, block-level data storage. SANs are primarily used to access storage devices, such as disk arrays and tape libraries from servers so that the devices appear to the operating system as direct-attached storage.

* **Software as a Service (SaaS)**: Software as a service (SaaS) is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted. It is sometimes referred to as *on-demand software*.

* **SSD Metadata**: File system metadata that can be stored on SDs for faster performance while large data files can be stored on HDDs for lower costs.

* **Storage**: Computer data storage is a technology consisting of computer components and recording media that are used to retain digital data.

* **File System**: A file system or filesystem (fs) controls how data is stored and retrieved. Without a file system, data placed in a storage medium would be one large body of data with no way to tell where one piece of data stops and the next begins.

* **Networking**: A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes.

* **Sharing**: File sharing is the public or private sharing of computer data or space in a network of multiple systems.

* **Virtualization**: Virtualization refers to the act of creating a virtual (rather than physical) version of something, including virtual computer hardware platforms, storage devices, and computer network resources.

* **Encryption**: In cryptography, encryption is the process of encoding information.
  This process converts the original representation of the information, known as plaintext, into an alternative form known as ciphertext.
  Ideally, only authorized parties can decipher a ciphertext back to plaintext and access the original information.
  Encryption does not itself prevent interference but denies the intelligible content to a would-be interceptor.

## Accounts Terminology

* ***root* User**: *root* is the primary account that by default has access to all commands and files on a Linux and Unix-like operating systems.
  It is also referred to as the root account, root user, and/or the superuser.
  This is similar to the administrator account on Windows.

* **User**: A *user* account is an additional account on a Linux and Unix-like operating system that has a lower permission levels than the root account.

* **Group**:  A *group* is a collection of users.
  The main purpose of the groups is to easily define a set of privileges like read, write, or execute permission for a given resource that can be shared among the multiple users within the group.

## Storage Terminology

* **Block Device**: A block device is a data storage device that supports reading and writing data in fixed-size blocks, sectors, or clusters.
  These blocks are can vary in size based on formatting.

* **Self-Encrypting Drive (SED)**: A SED (or Self-Encrypting Drive) is a hard drive that automatically and continuously encrypts the data on the drive without any user action.

* [**Zettabyte File System (ZFS)**]({{< relref "/references/ZFSPrimer.md" >}}): ZFS is a next-generation file system designed by Sun Microsystems that eliminates most, if not all of the shortcomings found in legacy file systems and hardware RAID devices.

* **iSCSI**: iSCSI stands for Internet Small Computer Systems Interface.
  iSCSI is a transport layer protocol that works on top of the Transport Control Protocol (TCP).
  It provides block-level access to storage devices by carrying SCSI commands over a TCP/IP network.

### ZFS

* [**L2ARC**]({{< relref "/references/L2ARC.md" >}}): sometimes called a CACHE vdev.
  This is a special class of vdev.
  ARC stands for Adaptive Replacement Cache and is a caching algorithm that tracks both the blocks in cache and blocks recently evicted from cache.
  The main ARC resides in system memory.
  The L2ARC is 2nd layer ARC assigned to a disk to expand ARC capability.

* [**ZFS Datasets**]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}): similar to a conventional mounted filesystem.
  It appears in casual inspection as "just another folder".
  However, unlike conventional mounted filesystems, each ZFS dataset has its own set of properties.

* [**ZFS Pools**]({{< relref "CORE/CORETutorials/Storage/Pools/_index.md" >}}): filesystem container that is composed of one or more vdevs.

* [**ZFS vdev**]({{< relref "/references/ZFSPrimer.md" >}}): ZFS virtual device.
  A ZFS pool is made up by one or more vdevs.
  A vdev can be created using a single disk or many.
  A vdev has many configurations: single disk, stripe, RAIDz1, RAIDz2, RAIDz3, or mirror.

* [**ZFS zvols**]({{< relref "CORE/CORETutorials/Storage/Pools/Zvols.md" >}}): datasets that represent block devices.

* [**ZIL**](https://www.truenas.com/blog/zfs-zil-and-slog-demystified/) (or ZFS Intent Log): special vdev class.
  This is also sometimes referred to as a SLOG or Separate Intent Log.

* [**Fusion Pool**]({{< relref "CORE/CORETutorials/Storage/Pools/FusionPool.md" >}}) (or metadata vdev): is a special class of vdev.
  This special vdev can store meta data such as file locations and allocation tables.
  Using a special vdev drastically speeds up random I/O and can cut the average number of spinning-disk I/Os needed to find and access a file by up to half.

* [**Checksum**]({{< relref "zfsprimer.md" >}}): As ZFS writes data, it creates a checksum for each disk block it writes.
  As ZFS reads data, it validates the checksum for each disk block it reads.

* [**Self-healing**]({{< relref "zfsprimer.md" >}}): Media errors or bit rot can cause data to change.
  As a result, the checksum no longer matches.
  When ZFS identifies a disk block checksum error on a pool that is mirrored or uses RAIDZ, it replaces the corrupted data with the correct data.

* [**ZFS Snapshots**]({{< relref "CORE/CORETutorials/Storage/Snapshots.md" >}}): read-only copy of a file system or volume.
  When a snapshot of a dataset is made, ZFS records the timestamp of when the snapshot was made.
  No data is copied and no extra storage is consumed.
  Only when changes occur in the filesystem and the data in it diverges from the snapshot does the snapshot start using additional storage.

* [**ZFS Scrub**]({{< relref "CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}): the process that ZFS uses to verify the data on disk.
  All of the data is read and checked against the computed checksums to verify that no corruption has occurred.

* [**ZFS Resilver**]({{< relref "CORE/CORETutorials/Tasks/UsingResilverPriority.md" >}}): process to reconstruct data on a disk when that disk has replaced a failed disk.

* [**ZFS Replication**]({{< relref "ReplicationTasks.md" >}}): copying a ZFS dataset to another dataset.
  The receiving dataset can be on the same machine or on another machine in a remote location.
  Replication works with snapshots so only the changes to the stored data need to be sent to the receiving dataset.

* [**Cloud Sync**]({{< relref "CORE/CORETutorials/Tasks/CreatingCloudSyncTasks.md" >}}): TrueNAS sending, receiving, or synchronizing data with a Cloud Storage provider like Amazon S3, Google Cloud, or Microsoft Azure.

## Networking Terminology

* **Certificate Authority (CA)**: A certificate authority or CA is an entity that issues digital certificates.
  A digital certificate certifies the ownership of a public key by the named subject of the certificate.

* **Certificate**: A Certificate is an electronic document used to prove the ownership of a public key.
  The certificate includes information about the key, information about the identity of its owner, and the digital signature of an entity that has verified the certificate.

* **Virtual Private Network (VPN)**: A virtual private network (VPN) extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.

* **Interface**: An interface is a boundary across which two or more different components of a computer system exchange information.
  The exchange can be between software, computer hardware, peripheral devices, humans, or other things.
  A network interface such as a LAN port or wi-fi facilitates data exchanging between two systems. A Human Interface Device (HID) such as a mouse or keyboard allows a person to interact with a system.
  A hardware interface like a USB port allows for the exchange of information between a computer and another device.

* **Default Route**: The default route is a configuration of the IP Network that establishes a forwarding rule for packets when no specific address of a next-hop host is available from the routing table or other routing mechanisms.

* **Nameserver**: A name server refers to the server component of the Domain Name System (DNS).
  A nameserver provides responses to queries against a directory service which translates an often human readable text-based identifier to an numeric identification or addressing component.

* **Domain Name System**: The Domain Name System (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network.

* **IP Address**: An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.
  IPv4 addresses are decimal while IPv6 addresses are hexadecimal.

* **Hostname**: A hostname is a label that is assigned to a device connected to a computer network and that is used to identify the device in various forms of electronic communication.

* **NFS**: Network File System (NFS) is a distributed file system protocol originally developed by Sun Microsystems, which allows users on a client computer to access files over a computer network much like local storage is accessed.

* **SMB**: SMB, or sometimes the Common Internet File System (CIFS), is a communication protocol for providing shared access to files, printers, and serial ports between nodes on a network.
  It was originally designed by IBM in the early 1980s.

* **Active Directory**: Active Directory (AD) is a directory service developed by Microsoft for Windows domain networks.
  Active Directory uses the Lightweight Directory Access Protocol (LDAP), Microsoft versions of Kerberos, and DNS.

* **DDNS**: Dynamic DNS (DDNS) is a method to realtime update a name server in the Domain Name System (DNS) according to the active DDNS configuration of its configured hostnames, addresses or other information.

* **LDAP**: The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an IP network.

* **DHCP**: The Dynamic Host Configuration Protocol (DHCP) is a network management protocol used on IP networks.
  A DHCP server dynamically assigns an IP address and other network configuration parameters to each device on the network, so devices can communicate with each other.

* **LLDP**: The Link Layer Discovery Protocol (LLDP) is a link layer protocol used by network devices for advertising their identity, capabilities, and neighbors on a local area network based on IEEE 802 technology, typically wired Ethernet.

* **IPMI**: The Intelligent Platform Management Interface (IPMI) is a set of computer interface specifications for a computer subsystem that provides management and monitoring capabilities independently of the host system CPU, firmware (BIOS or UEFI) and operating system.

* **NDS**: The Network Information Service (NIS) originally designed by Sun Microsystems is a client–server directory service protocol for distributing system configuration data such as user and host names between computers on a computer network.

* **NTP**: The Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.

* **SSH**: SSH or Secure Shell is a cryptographic network protocol for operating network services securely over an unsecured network.

* **VLAN**: A virtual LAN (VLAN) is any broadcast domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2).
  LAN is the abbreviation for local area network and in this context virtual refers to a physical object recreated and altered by additional logic.

* **WebDAV**: WebDAV (Web Distributed Authoring and Versioning) is an extension of the Hypertext Transfer Protocol (HTTP) that allows clients to perform remote Web content authoring operations.

* **KMIP**: The Key Management Interoperability Protocol (KMIP) is an extensible client/server communication protocol for the storage and maintenance of keys, certificates, and secret objects.

* **Kerberos**: Kerberos is a computer-network authentication protocol designed by MIT that works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner.

* **NAT**: Network address translation (NAT) is a method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.

* **VNET**: VNET is the name of a technique on FreeBSD to virtualize the network stack.
  The basic idea is to change global resources, most notably variables, into per-network stack resources and have functions, sysctls, and eventhandlers access and handle the resources in the context of the correct instance.

* **FTP**: The File Transfer Protocol (FTP) is a classic network protocol that transfers computer files between a server and a client over a computer network.
  FTP is built on a client-server model architecture using separate control and data connections between the client and the server.

* **AFP**: The Apple Filing Protocol (AFP), formerly AppleTalk Filing Protocol, a proprietary network protocol, is part of the Apple File Service (AFS), AFP offers file services for macOS and the classic Mac OS.
  AFP was the primary protocol for file services, in Mac OS 9 and earlier.
  The protocol was deprecated starting in OS X 10.9 Mavericks, and AFP Server support was removed in macOS 11 Big Sur.

* **MAC Address**: A media access control address (MAC address) is a unique identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment.
  Within the [Open Systems Interconnection (OSI) network model](https://en.wikipedia.org/wiki/OSI_model), MAC addresses are used in the medium access control protocol sublayer of the data link layer.

## Virtualization

* **AHCI**: The Advanced Host Controller Interface (AHCI) is a technical standard defined by Intel that specifies the operation of Serial ATA (SATA) host controllers in a non-implementation-specific manner in its motherboard chipsets.
  The specification describes a system memory structure for computer hardware to exchange data between host system memory and attached storage devices.
  For modern solid state drives, the interface has been superseded by NVMe.

* **VirtIO**: VirtIO is a virtualization standard for network and disk device drivers where just the guest device driver knows it is running in a virtual environment, and cooperates with the hypervisor.
  VirtIO was chosen to be the main platform for IO virtualization in KVM.

* **UEFI**: The Unified Extensible Firmware Interface (UEFI) is a specification that defines a software interface between an operating system and platform firmware.
  UEFI replaces the legacy Basic Input/Output System (BIOS) firmware interface originally present in all IBM PC-compatible personal computers.

* **UEFI-CSM**: To ensure backward compatibility, most UEFI firmware implementations on PC-class machines also support booting in legacy BIOS mode from MBR-partitioned disks through the Compatibility Support Module (CSM).
  In this scenario, booting is performed in the same way as on legacy BIOS-based systems: ignoring the partition table and relying on the content of a boot sector.

* **GRUB**: GNU GRUB stands for GNU GRand Unified Bootloader and is commonly referred to as GRUB.
  GRUB is a boot loader package from the GNU Project and the reference implementation of the Free Software Foundation Multiboot Specification, which provides the choice to boot into one of multiple operating systems installed on a computer or select a specific kernel configuration available on a particular operating system partitions.

* **VNC**: Virtual Network Computing (VNC) is a graphical desktop-sharing system that uses the remote frame buffer protocol to remotely control another computer.
  It transmits the keyboard and mouse events from one computer to another and relays back the graphical-screen updates through a network.

## iSCSI

* **Portals**: An iSCSI portal is a target IP and TCP port pair.

* **Initiator**: An initiator is software or hardware that enables a host computer to send data to an external iSCSI-based storage array through a network adapter.

* **Targets**: An iSCSI target is a storage resource located on an iSCSI server.

* **Extents**: Extents are used to define resources to share with clients.
  There are two types of extents: device and file.
