---
title: "Configuring an iSCSI Share"
description: "A how-to guide on creating a general purpose iSCSI share."
---

Unlike other sharing protocols on TrueNAS, setting up an iSCSI share
allows for block sharing as well as file sharing. Block sharing provides
the benefit of
[block-level access](https://en.wikipedia.org/wiki/Block-level_storage)
to data on the TrueNAS. iSCSI exports disk devices (zvols on TrueNAS)
over a network that allows other iSCSI clients (initiators) to attach to
and mount. Here is a list of terminology to be familiar with:

* **CHAP**: an authentication method which uses a shared secret and
three-way authentication to determine if a system is authorized to
access the storage device and to periodically confirm that the session
has not been hijacked by another system. In iSCSI, the initiator
(client) performs the CHAP authentication.

* **Mutual CHAP**: a superset of CHAP in that both ends of the
communication authenticate to each other.

* **Initiator**: a client which has authorized access to the storage data
on the TrueNAS system. The client requires initiator software to initiate the connection to the iSCSI share.

* **Target**: a storage resource on the TrueNAS system. Every target has
a unique name known as an iSCSI Qualified Name (IQN).

* **Internet Storage Name Service (iSNS)**: protocol for the automated
discovery of iSCSI devices on a TCP/IP network.

* **Extent**: the storage unit to be shared. It can either be a file or a
device.

* **Portal**: indicates which IP addresses and ports to listen on for
connection requests.

* **LUN**: *Logical Unit Number* representing a logical SCSI device. An
initiator negotiates with a target to establish connectivity to a LUN.
The result is an iSCSI connection that emulates a connection to a SCSI
hard disk. Initiators treat iSCSI LUNs as if they were a raw SCSI or
SATA hard drive. Rather than mounting remote directories, initiators
format and directly manage filesystems on iSCSI LUNs. When configuring
multiple iSCSI LUNs, create a new target for each LUN. Since iSCSI
multiplexes a target with multiple LUNs over the same TCP connection,
there can be TCP contention when more than one target accesses the same
LUN. TrueNAS supports up to 1024 LUNs.

{{% alert title="TrueNAS Enterprise Feature" %}}
* **ALUA**: *Asymmetric Logical Unit Access* allows a client computer to
discover the best path to the storage on a TrueNAS system. HA storage
clusters can provide multiple paths to the same storage. For example,
the disks are directly connected to the primary computer and provide
high speed and bandwidth when accessed through that primary computer.
The same disks are also available through the secondary computer, but
because they are not directly connected to it, speed and bandwidth are
restricted. With ALUA, clients automatically ask for and use the best
path to the storage. If one of the TrueNAS HA computers becomes
inaccessible, the clients automatically switch to the next best
alternate path to the storage. When a better path becomes available,
as when the primary host becomes available again, the clients
automatically switch back to that better path to the storage.

NOTE: Do not enable ALUA on TrueNAS unless it is supported by and
enabled on the client computers also. ALUA only works properly when
enabled on both the client and server.
{{% /alert %}}


To get started, make sure a
<a href="/docs/intitial-setup/storage/datasets/">dataset has been created</a>
with at least one file to share, or a
<a href="/docs/initial-setup/storage/zvols/">zvol has been created</a>.
If the desired file or zvol already exists, proceed to turning on the
iSCSI service.

## iSCSI Service

To turn on the iSCSI service, go to **Services** and click the slider
for *iSCSI*. If you wish to turn the service on automatically when the
TrueNAS system is rebooted, check the *Start Automatically* box.

> NOTE: The iSCSI share will not work if the service is not turned on.

## iSCSI Share

The web interface provides an easy way to setup the necessary items for
an iSCSI share. Go to **Sharing > Block Shares (iSCSI)** and click
*WIZARD*. The wizard walks though each step in the creation process.

* STEP 1: Enter a name for the iSCSI share. It's recommended to keep the
name short or at least less than 63 characters. Also, the name can
only contain lowercase alphanumeric characters plus a dot (.),
dash (-), or colon (:). Enter the *Extent Type*. If the *Extent Type*
is *Device*, select the zvol to share from the *Device* drop down.
Next, select the type of platform that will be using the share. For
example, if using the share from an updated Linux OS, choose
*Modern OS*.

* STEP 2: Either create a new portal or select an existing one from
the dropdown. If you are creating a new portal, a *Discovery
Authentication Method* can be selected. If *NONE* is selected, select
*0.0.0.0* or *::* from the *IP Address* dropdown and click *NEXT*. The
address *0.0.0.0* listens on all IPv4 addresses, and *::* listens on
all IPv6 addresses If *CHAP* or *MUTUAL CHAP* are selected, then a
*Discovery Authentication Group* is also needed. If a group doesn't
already exist select *Create New* from the dropdown. Enter the desired
*Group ID*, *User*, and *Secret*.

* STEP 3: If desired, you can only allow specific initiators or networks
to be able to use the iSCSI share. If left blank, allow all initiators
or all networks to use the share.

* STEP 4: Review the settings. If the settings look correct, click
*SUBMIT*.

## Using the iSCSI Share

