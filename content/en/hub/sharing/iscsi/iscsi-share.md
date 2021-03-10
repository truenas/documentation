---
title: "Configuring an iSCSI Share"
description: "A how-to guide on creating a general-purpose iSCSI share."
tags: ["networking","iscsi", "block"]
---

Unlike other sharing protocols on TrueNAS, an iSCSI share allows for block sharing *and* file sharing. Block sharing provides the benefit of [block-level access](https://en.wikipedia.org/wiki/Block-level_storage) to data on the TrueNAS. iSCSI exports disk devices (zvols on TrueNAS) over a network that allows other iSCSI clients (initiators) to attach to and mount. Here is a list of terminology to be familiar with:

* **CHAP (Challenge-Handshake Authentication Protocol)**: an authentication method that uses a shared secret and three-way authentication to determine if a system is authorized to access the storage device. It also periodically confirms that the session has not been hijacked by another system. In iSCSI, the client (initiator) performs the CHAP authentication.

* **Mutual CHAP**: a CHAP type in which both ends of the communication authenticate to each other.

* **Initiator**: a client that is authorized to access the storage data on the TrueNAS system. The client requires initiator software to connect to the iSCSI share.

* **Target**: a storage resource on the TrueNAS system. Every target has a unique name known as an iSCSI Qualified Name (IQN).

* **Internet Storage Name Service (iSNS)**: protocol for the automated discovery of iSCSI devices on a TCP/IP network.

* **Extent**: the storage unit to be shared. It can either be a file or a device.

* **Portal**: indicates which IP addresses and ports to listen on for connection requests.

* **LUN**: *Logical Unit Number* representing a logical SCSI device. An initiator negotiates with a target to establish connectivity to a LUN. The result is an iSCSI connection that emulates a connection to a SCSI hard disk. Initiators treat iSCSI LUNs as if they were a raw SCSI or SATA hard drive. Rather than mounting remote directories, initiators format and directly manage filesystems on iSCSI LUNs. When configuring multiple iSCSI LUNs, create a new target for each LUN. Since iSCSI multiplexes a target with multiple LUNs over the same TCP connection, there can be TCP contention when more than one target accesses the same LUN. TrueNAS supports up to 1024 LUNs.

{{% alert title="TrueNAS Enterprise Feature" %}}
* **ALUA**: *Asymmetric Logical Unit Access* allows a client computer to discover the best path to the storage on a TrueNAS system. HA storage clusters can provide multiple paths to the same storage. For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer. The same disks are also available through the secondary computer, but because they are not directly connected to it, speed and bandwidth are restricted. With ALUA, clients automatically ask for and use the best path to the storage. If one of the TrueNAS HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage. When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

NOTE: Do not enable ALUA on TrueNAS unless it is supported by and enabled on the client computers also. ALUA only works properly when enabled on both the client and server.
{{% /alert %}}

To get started, make sure a [dataset has been created]({{< relref "datasets.md" >}}) with at least one file to share, or a [zvol has been created]({{< relref "zvols.md" >}}). If the desired file or zvol already exists, proceed to turning on the iSCSI service.

## Turning On iSCSI Service

To turn on the iSCSI service, go to **Services** and click the slider for **iSCSI**. Check the *Start Automatically* box if you want the service to turn on automatically when the TrueNAS system is rebooted.

<img src="/images/iSCSI1TurnOnServices.png">
<br><br>

## Setting Up an iSCSI Share

It's easy to set up the necessary items for an iSCSI share using the web interface. Go to **Sharing > Block Shares (iSCSI)** and click **WIZARD**. The wizard will guide you through each step of the creation process.

<img src="/images/iSCSI2Wizard.png">
<br><br>

### Create or Choose Block Device

First, enter a name for the iSCSI share. The name can only contain lowercase alphanumeric characters plus a dot (.), dash (-), or colon (:). We recommend keeping the name short or at most 63 characters. Next, choose the *Extent Type*.

* If the *Extent Type* is *Device*, select the Zvol to share from the *Device* drop down.

* If the *Extent Type* is *File*, select the path to the Extent and indicate the file size.

Select the type of platform that will be using the share. For example, if using the share from an updated Linux OS, choose *Modern OS*.

<img src="/images/iSCSI3CreateBlockDevice.png">
<br><br>

### Portal

Now you will either create a new portal or select an existing one from the dropdown.

If you create a new portal, you will need to select a *Discovery Authentication Method*.

If you set the *Discovery Authentication Method* to *CHAP* or *MUTUAL CHAP*, then you will also need to select a *Discovery Authentication Group*. If a group doesn't already exist, select *Create New* from the dropdown and enter the desired *Group ID*, *User*, and *Secret*.

<img src="/images/iSCSI4Portal.png">
<br><br>

If you set the *Discovery Authentication Method* to *NONE*, you don't need to select a *Discovery Authentication Group*.

Select *0.0.0.0* or *::* from the *IP Address* dropdown and click **NEXT**.

> NOTE: *0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses.

### Initiator

If you wish, you can allow only specific initiators or networks to use the iSCSI share. You can leave it blank to allow all initiators or networks to use the share.

<img src="/images/iSCSI5Initiator.png">
<br><br>

### Confirm

Confirm that your settings look correct, then click **SUBMIT**.

<img src="/images/iSCSI6Confirm.png">
<br><br>

## Using the iSCSI Share on Linux

Follow these steps to connect to an iSCSI share from a Linux system.

### iSCSI Utilities and Service

First, open the command line and ensure that the `open-iscsi` utility is installed. To install the utility on an Ubuntu/Debian distribution, type `sudo apt update && sudo apt install open-iscsi`. After the installation completes, make sure the *iscsid* service is running by typing `sudo service iscsid start`. Once the *iscsid* service is started, you can run the `iscsiadm` command with the discovery arguments and get the necessary information to connect to the share.

<img src="/images/iSCSI7LinuxUtility.png">
<br><br>

### Discover and Login to the iSCSI Share

Run the command <code>sudo iscsiadm \--mode discovery \--type sendtargets \--portal <i>IPofTrueNASsystem</i></code>. The output provides the basename and target name that you configured in TrueNAS.

<img src="/images/iSCSI8LinuxDiscover.png">
<br><br>

Alternatively, you can enter <code>sudo iscsiadm -m discovery -t st -p <i>IPofTrueNASsystem</i></code> to get the same output. Take note of the basename and target name given in the output. You will need it to login to the iSCSI share.

When a Portal *Discovery Authentication Method* is set to *CHAP*, these three lines need to be added to <file>/etc/iscsi/iscsid.conf</file>.
```
discovery.sendtargets.auth.authmethod = CHAP
discovery.sendtargets.auth.username = user
discovery.sendtargets.auth.password = secret
```
The user for `discovery.sendtargets.auth.username` is the user set in the Authorized Access used by the Portal of the iSCSI share. Likewise, the password to use for `discovery.sendtargets.auth.password` is the Authorized Access secret. Without these lines, the iscsiadm will not discover the Portal with the CHAP authentication method.

Next, run the command <code>sudo iscsiadm \--mode node \--targetname <i>basename</i>:<i>targetname</i> \--portal <i>IPofTrueNASsystem</i> \--login</code> where *basename* and *targetname* is the information you got from the discovery command.

<img src="/images/iSCSI9LinuxLogin.png">
<br><br>

### Partition iSCSI Disk

If the login to the iSCSI share succeeded, the device shared through iSCSI will show up on the Linux system as an *iSCSI Disk*. To view a list of connected disks in Linux, run the command `sudo fdisk -l`. Since the connected iSCSI disk is raw, it has to be partitioned to be used. Identify the iSCSI device in the list and run the command <code>sudo fdisk <i>/part/to/iSCSIdevice</i></code>. The path for the iSCSI device is listed in the output of `sudo fdisk -l`.

<img src="/images/iSCSI10Linuxfdisk.png">
<br><br>

We recommend using the `fdisk` command defaults when partitioning the disk.

> NOTE: Remember to enter the letter *w* when you are finished partitioning the disk. The *w* command tells `fdisk` to save any changes before you quit the utility.

<img src="/images/iSCSI11LinuxPartition.png">
<br><br>

After creating the partition on the iSCSI disk, a partition slice will show up on the device name. For example, `/dev/sdb1`. Run `fdisk -l` to see the new partition slice.

### Make a Filesystem on the iSCSI Disk

Finally, make a filesystem on the new partition slice of the device. This can be done by using the command `mkfs`. To create the default filesystem (ext2), run the command <code>sudo mkfs <i>/path/to/iSCSIdevicePartitionSlice</i></code>.

<img src="/images/iSCSI11bLinuxFilesys.png">
<br><br>

### Mount the iSCSI Device

Now you can mount the iSCSI device to share data by running the command <code>sudo mount <i>/path/to/iSCSIdevicePartitionSlice</i></code>. For example, `sudo mount /dev/sdb1 /mnt` mounts the iSCSI device *sdb1* to the `/mnt` directory.

## Using the iSCSI Share on Windows

Use these instructions to connect to an iSCSI share from a Windows system.

To access the data on the iSCSI share, clients will need to use iSCSI Initiator software. An iSCSI Initiator client is pre-installed in Windows 7 to 10 Pro, and Windows Server 2008, 2012, and 2019. Windows Professional Edition is usually required.

First, click the Start Menu and search for the *iSCSI Initiator* application.

<img src="/images/iSCSI12bWiniSCSIInit.png">
<br><br>

Next, go to the **Configuration** tab and click **Change** to change the iSCSI initiator to the same name created earlier. Click **OK**.

<img src="/images/iSCSI12WinInitiator.png">
<br><br>

Next, switch to the **Discovery Tab**, click **Discover Portal**, and type in the TrueNAS IP address.

* If the port number was changed from the default of *3260*, enter the new port number.

* If CHAP was set up when creating the iSCSI share, click **Advanced...**, set *Enable CHAP log on*, and enter the initiator name and the same target/secret that was set earlier in TrueNAS.

Click **OK**.

<img src="/images/iSCSI13WinPortal.png">
<br><br>

Go to the **Targets** tab, highlight the iSCSI target, and click **Connect**.

<img src="/images/iSCSI14WinConnect.png">
<br><br>

After Windows connects to the iSCSI target the drive can be partitioned.

Search for and open the *Disk Management* app.

<img src="/images/iSCSI15WinDiskManager.png">
<br><br>

Your drive should currently be *unallocated*. Right-click the drive and click **New Simple Volume...**.

<img src="/images/iSCSI16WinNewVol.png">
<br><br>

Complete the Wizard to format the drive and assign a drive letter and name.

<img src="/images/iSCSI17WinFormPart.png">
<br><br>

Finally, go to *This PC* or *My Computer* in File Explorer and the new iSCSI volume should show up under the list of drives. You should now be able to add, delete, and modify files and folders on your iSCSI drive.

<img src="/images/iSCSI18WinDrives.png">
<br><br>
