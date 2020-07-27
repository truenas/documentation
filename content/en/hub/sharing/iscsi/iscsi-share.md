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
<a href="/hub/intitial-setup/storage/datasets/">dataset has been created</a>
with at least one file to share, or a
<a href="/hub/initial-setup/storage/zvols/">zvol has been created</a>.
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

## Using the iSCSI Share on Linux

The following instructions are for connecting to an iSCSI share from a Linux
system.

### iSCSI Utilities and Service

First, ensure the command line utility *open-iscsi* is installed. To
install the utility on an Ubuntu/Debian distribution, type
`sudo apt update && sudo apt install open-iscsi`. After that has
finished installing, make sure the *iscsid* service is running. Type
`sudo service iscsid start` to start the service. After the service is
started, you can now run the `iscsiadm` command with the discovery
arguments and get the necessary information to connect to the share.

### Discover and Login to the iSCSI Share

Run the command
<code>sudo iscsiadm --mode discovery --type sendtargets --portal <i>IPofTrueNASsystem</i></code>.
The output gives the basename and target name that was configured on
the TrueNAS. See the image directly below as an example.

<img src="/images/iscsiadm-discovery-output.png">
<br><br>

Alternatively, you can enter
<code>sudo iscsiadm -m discovery -t st -p <i>IPofTrueNASsystem</i></code>
and get the same output. Take note of the basename and target name
given in the output. It will be needed to login to the iSCSI share.

Next, run the command
<code>sudo iscsiadm --mode node --targetname <i>basename</i>:<i>targetname</i> --portal <i>IPofTrueNASsystem</i> --login</code>
where *basename* and *targetname* is the information given from the
discovery command. See the images directly below as an example.

<img src="/images/iscsiadm-login-output.png">
<br><br>

### Partition iSCSI Disk

If the login to the iSCSI share was successful, the device shared
through iSCSI should now show up on the Linux system as an *iSCSI Disk*.
To view a list of connected disks in Linux, run the command
`sudo fdisk -l`. Since the iSCSI disk connected is raw it has to be
partitioned for it to be used. Identify the iSCSI device in the list and
run the command <code>sudo fdisk <i>/part/to/iSCSIdevice</i></code>. The
path for the iSCSI device is listed in the output of `sudo fdisk -l`.
The image directly below shows an example of listing the disks.

<img src="/images/fdisk-list-output.png">
<br><br>

When partitioning the disk it is recommended to use the defaults of
the `fdisk` command. The image directly below shows an example of
partitioning the iSCSI disk for use.

> NOTE: It is important to enter the letter *w* when finished
> partitioning the disk. This tells `fdisk` to save the changes before
> quitting the utility.

<img src="/images/fdisk-partition-output.png">
<br><br>

After creating the partition on the iSCSI disk, a partition slice shows
up on the device name. For example, `/dev/sdb1`. Run `fdisk -l` to see
the new partition slice.

### Make Filesystem on iSCSI Disk

Finally, make a filesystem on the new partition slice of the device.
This can be done by using the command `mkfs`. To create the default
filesystem (ext2), run the command
<code>sudo mkfs <i>/path/to/iSCSIdevicePartitionSlice</i></code>. The image
directly below shows an example of creating a filesystem on the
partition slice of the iSCSI device.

<img src="/images/mkfs-output.png">
<br><br>

### Mount the iSCSI Device

The iSCSI device can finally be mounted to share data. To mount the
iSCSI device run the command
<code>sudo mount <i>/path/to/iSCSIdevicePartitionSlice</i></code>. For example,
`sudo mount /dev/sdb1 /mnt` mounts the iSCSI device *sdb1* to the
`/mnt` directory.

## Using the iSCSI Share on Windows

The following instructions are for connecting to an iSCSI share from a Windows
system.

In order to access the data on the iSCSI share, clients will need to use iSCSI
Initiator software. An iSCSI Initiator client is pre-installed in Windows 7 to
10 Pro, and Windows Server 2008, 2012, and 2019. Please note that Windows
Professional Edition is typically required.

<img src="/images/iscsi-initiator-app.png">
<br><br>

Click the Start Menu and search for the *iSCSI Initiator* application. Go to
the **Configuration** tab and click **Change** to change the iSCSI initiator
to the same name you created earlier.

<img src="/images/iscsi-initiator-name.png">
<br><br>

Go to the **Discovery Tab**, proceed to **Discover Portal**, and type in your
TrueNAS IP address. If the port number was changed from the default of *3260*,
enter the new port number.

<img src="/images/iscsi-discover-portal.png">
<br><br>

<img src="/images/iscsi-portal-ip.png">
<br><br>

If CHAP was set up when creating the iSCSI share, click **Advanced Settings**,
set *Enable CHAP log on*, and enter the initiator name and the
same target/secret you set earlier on TrueNAS. Go back to **Targets** and click
**Connect** on your iSCSI target. Click **OK**.

<img src="/images/iscsi-target-list.png">
<br><br>

Search for and open the *Disk Management* app. A new window will ask you to
format the drive. Your drive should currently be *unallocated*. Complete the
Wizard to format it and assign it a drive letter and name.

<img src="/images/iscsi-disk-management-app.png">
<br><br>

<img src="/images/iscsi-disk-format.png">
<br><br>

<img src="/images/iscsi-disk-new-volume.png">
<br><br>

<img src="/images/iscsi-disk-volume-label.png">
<br><br>

<img src="/images/iscsi-volume-created.png">
<br><br>

Go to *This PC* or *My Computer* in File Explorer and your new iSCSI volume
should show up under the list of drives. You should now be able to add,
delete, and modify files and folders on your iSCSI drive.

<img src="/images/iscsi-windows-disk.png">
<br><br>

<img src="/images/iscsi-windows-disk-contents.png">
<br><br>