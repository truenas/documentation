---
title: "Configuring an iSCSI Share"
description: "A how-to guide on creating a general-purpose iSCSI share."
tags: ["networking","iSCSI", "block"]
---

Unlike other sharing protocols on TrueNAS, an iSCSI share allows for block sharing *and* file sharing. Block sharing provides the benefit of [block-level access](https:/ en.wikipedia.org/wiki/Block-level_storage) to data on the TrueNAS. iSCSI exports disk devices (zvols on TrueNAS) over a network that allows other iSCSI clients (initiators) to attach to and mount. Here is a list of terminology to be familiar with:

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

To get started, make sure a [dataset](/CORE/Storage/DataPools/datasets/) has been created with at least one file to share, or a [zvol](/CORE/Storage/zvols/) has been created. If the desired file or zvol already exists, proceed to turning on the iSCSI service.

## Turning On iSCSI Service

To turn on the iSCSI service, go to **Services** and click the slider for **iSCSI**. Check the *Start Automatically* box if you want the service to turn on automatically when the TrueNAS system is rebooted.

![Services ISCSI Enable](/images/CORE/12.0/ServicesISCSIEnable.png "Services ISCSI Enable")
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

![Sharing ISCSI Wizard Device](/images/CORE/12.0/SharingISCSIWizardDevice.png "Sharing ISCSI Wizard Device")
<br><br>

### Portal

Now you will either create a new portal or select an existing one from the dropdown.

If you create a new portal, you will need to select a *Discovery Authentication Method*.

If you set the *Discovery Authentication Method* to *CHAP* or *MUTUAL CHAP*, then you will also need to select a *Discovery Authentication Group*. If a group doesn't already exist select *Create New* from the dropdown and enter the desired *Group ID*, *User*, and *Secret*.

![Sharing ISCSI Wizard Portal](/images/CORE/12.0/SharingISCSIWizardPortal.png "Sharing ISCSI Wizard Portal")

If you set the *Discovery Authentication Method* to *NONE*, you don't need to select a *Discovery Authentication Group*.

Select *0.0.0.0* or *::* from the *IP Address* dropdown and click **NEXT**.

> NOTE: *0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses.

### Initiator

If you wish, you can allow only specific initiators or networks to use the iSCSI share. You can leave it blank to allow all initiators or networks to use the share.

![Sharing ISCSI Wizard Initiator](/images/CORE/12.0/SharingISCSIWizardInitiator.png "SharingISCSIWizard Initiator")
<br><br>

### Confirm

Confirm that your settings look correct, then click **SUBMIT**.

![Sharing ISCSI Wizard Summary](/images/CORE/12.0/SharingISCSIWizardSummary.png "Sharing ISCSI Wizard Summary")
<br><br>

## Using the iSCSI Share on Linux

Follow these steps to connect to an iSCSI share from a Linux system.

### iSCSI Utilities and Service

First, open the command line and ensure that the `open-iscsi` utility is installed. To install the utility on an Ubuntu/Debian distribution, type `sudo apt update && sudo apt install open-iscsi`. After the installation completes, make sure the *iscsid* service is running by typing `sudo service iscsid start`. Once the *iscsid* service is started, you can run the `iscsiadm` command with the discovery arguments and get the necessary information to connect to the share.

![Linux ISCSI App Install](/images/CORE/12.0/LinuxISCSIAppInstall.png "Linux ISCSI App Install")
<br><br>

### Discover and Login to the iSCSI Share

Run the command <code>sudo iscsiadm \--mode discovery \--type sendtargets \--portal <i>IPofTrueNASsystem</i></code>. The output provides the basename and target name that you configured in TrueNAS.

![Linux ISCSI Discovery List](/images/CORE/12.0/LinuxISCSIDiscoveryList.png "Linux ISCSI Discovery List")
<br><br>

Alternatively, you can enter <code>sudo iscsiadm -m discovery -t st -p <i>IPofTrueNASsystem</i></code> to get the same output. Take note of the basename and target name given in the output. You will need it to login to the iSCSI share.

Next, run the command <code>sudo iscsiadm \--mode node \--targetname <i>basename</i>:<i>targetname</i> \--portal <i>IPofTrueNASsystem</i> \--login</code> where *basename* and *targetname* is the information you got from the discovery command.

![Linux ISCSI Login](/images/CORE/12.0/Linux ISCSI Login.png "Linux ISCSI Login")
<br><br>

### Partition iSCSI Disk

If the login to the iSCSI share succeeded, the device shared through iSCSI will show up on the Linux system as an *iSCSI Disk*. To view a list of connected disks in Linux, run the command `sudo fdisk -l`. Since the connected iSCSI disk is raw, it has to be partitioned to be used. Identify the iSCSI device in the list and run the command <code>sudo fdisk <i>/part/to/iSCSIdevice</i></code>. The path for the iSCSI device is listed in the output of `sudo fdisk -l`.

<img src="/images/iSCSI10Linuxfdisk.png">
<br><br>

We recommend using the `fdisk` command defaults when partitioning the disk.

> NOTE: Remember to enter the letter *w* when you are finished partitioning the disk. The *w* command tells `fdisk` to save any changes before you quit the utility.

![Linux ISCSI Filesystem Created](/images/CORE/12.0/LinuxISCSIFilesystemCreated.png "Linux ISCSI Filesystem Created")
<br><br>

After creating the partition on the iSCSI disk, a partition slice will show up on the device name. For example, `/dev/sdb1`. Run `fdisk -l` to see the new partition slice.

### Make a Filesystem on the iSCSI Disk

Finally, make a filesystem on the new partition slice of the device. This can be done by using the command `mkfs`. To create the default filesystem (ext2), run the command <code>sudo mkfs <i>/path/to/iSCSIdevicePartitionSlice</i></code>.

![Linux ISCSI Filesystem](/images/CORE/12.0/LinuxISCSIFilesystem.png "Linux ISCSI Filesystem")
<br><br>

### Mount the iSCSI Device

Now you can mount the iSCSI device to share data by running the command <code>sudo mount <i>/path/to/iSCSIdevicePartitionSlice</i></code>. For example, `sudo mount /dev/sdb1 /mnt` mounts the iSCSI device *sdb1* to the `/mnt` directory.

## Using the iSCSI Share on Windows

Use these instructions to connect to an iSCSI share from a Windows system.

To access the data on the iSCSI share, clients will need to use iSCSI Initiator software. An iSCSI Initiator client is pre-installed in Windows 7 to 10 Pro, and Windows Server 2008, 2012, and 2019. Windows Professional Edition is usually required.

First, click the Start Menu and search for the *iSCSI Initiator* application.

![Windows ISCSI Initiator App](/images/CORE/12.0/WindowsISCSIInitiatorApp.png "Windows ISCSI Initiator App")
<br><br>

Next, go to the **Configuration** tab and click **Change** to change the iSCSI initiator to the same name created earlier. Click **OK**.

![Windows ISCSI Initiator Config Name](/images/CORE/12.0/WindowsISCSIInitiatorConfigName.png "Windows ISCSI Initiator Config Name")
<br><br>

Next, switch to the **Discovery Tab**, click **Discover Portal**, and type in the TrueNAS IP address.

* If the port number was changed from the default of *3260*, enter the new port number.

* If CHAP was set up when creating the iSCSI share, click **Advanced...**, set *Enable CHAP log on*, and enter the initiator name and the same target/secret that was set earlier in TrueNAS.

Click **OK**.

![Windows ISCSI Initiator Discover Portal](/images/CORE/12.0/WindowsISCSIInitiatorDiscoverPortal.png "Windows ISCSI Initiator Discover Portal")
<br><br>

Go to the **Targets** tab, highlight the iSCSI target, and click **Connect**.

![Windows ISCSI Initiator Target Connect](/images/CORE/12.0/WindowsISCSIInitiatorTargetConnect.png "Windows ISCSI Initiator Target Connect")
<br><br>

After Windows connects to the iSCSI target the drive can be partitioned.

Search for and open the *Disk Management* app.

![Windows ISCSI Disk Management App](/images/CORE/12.0/WindowsISCSIDiskManagementApp.png "Windows ISCSI Disk Management App")
<br><br>

Your drive should currently be *unallocated*. Right-click the drive and click **New Simple Volume...**.

![Windows ISCSI Disk New Volume](/images/CORE/12.0/WindowsISCSIDiskNewVolume.png "Windows ISCSI Disk New Volume")
<br><br>

Complete the Wizard to format the drive and assign a drive letter and name.

![Windows ISCSI Disk New Volume Options](/images/CORE/12.0/WindowsISCSIDiskNewVolumeOptions.png "Windows ISCSI Disk New Volume Options")
<br><br>

Finally, go to *This PC* or *My Computer* in File Explorer and the new iSCSI volume should show up under the list of drives. You should now be able to add, delete, and modify files and folders on your iSCSI drive.

![Windows iSCSI Volume Location](/images/CORE/12.0/WindowsiSCSIVolumeLocation.png "Windows iSCSI Volume Location")
<br><br>
