---
title: "Share Creation"
weight: 10
---

{{< toc >}}

Unlike other sharing protocols on TrueNAS, an iSCSI share allows for block sharing *and* file sharing.
Block sharing provides the benefit of [block-level access](https://www.ibm.com/cloud/learn/block-storage) to data on the TrueNAS.
iSCSI exports disk devices (zvols on TrueNAS) over a network that allows other iSCSI clients (initiators) to attach to and mount.

{{< expand "iSCSI Terminology" "v" >}}
* **CHAP (Challenge-Handshake Authentication Protocol)**: an authentication method that uses a shared secret and three-way authentication to determine if a system is authorized to access the storage device. It also periodically confirms that the session has not been hijacked by another system. In iSCSI, the client (initiator) performs the CHAP authentication.

* **Mutual CHAP**: a CHAP type in which both ends of the communication authenticate to each other.

* **Initiator**: a client that is authorized to access the storage data on the TrueNAS system. The client requires initiator software to connect to the iSCSI share.

* **Target**: a storage resource on the TrueNAS system. Every target has a unique name known as an iSCSI Qualified Name (IQN).

* **Internet Storage Name Service (iSNS)**: protocol for the automated discovery of iSCSI devices on a TCP/IP network.

* **Extent**: the storage unit to be shared. It can either be a file or a device.

* **Portal**: indicates which IP addresses and ports to listen on for connection requests.

* **LUN**: *Logical Unit Number* representing a logical SCSI device. An initiator negotiates with a target to establish connectivity to a LUN. The result is an iSCSI connection that emulates a connection to a SCSI hard disk. Initiators treat iSCSI LUNs as if they were a raw SCSI or SATA hard drive. Rather than mounting remote directories, initiators format and directly manage filesystems on iSCSI LUNs. When configuring multiple iSCSI LUNs, create a new target for each LUN. Since iSCSI multiplexes a target with multiple LUNs over the same TCP connection, there can be TCP contention when more than one target accesses the same LUN. TrueNAS supports up to 1024 LUNs.

{{< hint info >}}
**TrueNAS Enterprise Feature**:

* **ALUA**: *Asymmetric Logical Unit Access* allows a client computer to discover the best path to the storage on a TrueNAS system. HA storage clusters can provide multiple paths to the same storage. For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer. The same disks are also available through the secondary computer, but because they are not directly connected to it, speed and bandwidth are restricted. With ALUA, clients automatically ask for and use the best path to the storage. If one of the TrueNAS HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage. When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

Do not enable ALUA on TrueNAS unless it is supported by and enabled on the client computers also. ALUA only works properly when enabled on both the client and server.
{{< /hint >}}
{{< /expand >}}

To get started, make sure a [dataset]({{< relref "Datasets.md" >}}) has been created with at least one file to share, or a [zvol]({{< relref "ZVols.md" >}}) has been created.

## Setting Up an iSCSI Share

Go to **Sharing > Block Shares (iSCSI)** and click **WIZARD**. The wizard will guide you through each step of the creation process.

{{< tabs "iSCSI Wizard Steps" >}}
{{< tab "Block Device" >}}
First, enter a name for the iSCSI share. The name can only contain lowercase alphanumeric characters plus a dot (.), dash (-), or colon (:). We recommend keeping the name short or at most 63 characters. Next, choose the *Extent Type*.

* If the *Extent Type* is *Device*, select the Zvol to share from the *Device* drop down.
* If the *Extent Type* is *File*, select the path to the Extent and indicate the file size.

Select the type of platform that will be using the share. For example, if using the share from an updated Linux OS, choose *Modern OS*.

![SharingISCSIWizardDevice](/images/CORE/12.0/SharingISCSIWizardDevice.png "iSCSI Wizard: Block Device")
{{< /tab >}}
{{< tab "Portal" >}}
Now you will either create a new portal or select an existing one from the dropdown.

If you create a new portal, you will need to select a *Discovery Authentication Method*.

If you set the *Discovery Authentication Method* to *CHAP* or *MUTUAL CHAP*, then you will also need to select a *Discovery Authentication Group*. If a group doesn't already exist select *Create New* from the dropdown and enter the desired *Group ID*, *User*, and *Secret*.

![SharingISCSIWizardPortal](/images/CORE/12.0/SharingISCSIWizardPortal.png "iSCSI Wizard: Portal")

When the *Discovery Authentication Method* is *NONE*, the *Discovery Authentication Group* can be left empty.

Select *0.0.0.0* or *::* from the *IP Address* dropdown and click *NEXT*.

{{< expand "What are these options?" "v" >}}
*0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses.
{{< /expand >}}
{{< /tab >}}
{{< tab "Initiator" >}}
Decide which initiators or networks can use the iSCSI share.
Leave the list empty to allow all initiators or networks or add entries to the list to only allow access to those systems.

![SharingISCSIWizardInitiator](/images/CORE/12.0/SharingISCSIWizardInitiator.png "iSCSI Wizard: Initiator")
{{< /tab >}}
{{< tab "Confirm" >}}
Confirm the settings are correct and click *SUBMIT*.

![SharingISCSIWizardSummary](/images/CORE/12.0/SharingISCSIWizardSummary.png "iSCSI Wizard: Summary")
{{< /tab >}}
{{< /tabs >}}

## Start the iSCSI Service

To turn on the iSCSI service, go to **Services** and toggle **iSCSI**.
Set *Start Automatically* for the service to start during TrueNAS system boots.

![ServicesISCSIEnable](/images/CORE/12.0/ServicesISCSIEnable.png "Starting the iSCSI Service")

Clicking the <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i> returns to the options in **Sharing > iSCSI**.

## Using the iSCSI Share

Connecting to an using an iSCSI share can be a little different for different operating systems:

{{< tabs "iSCSI Use: OSes" >}}
{{< tab "Linux" >}}
### iSCSI Utilities and Service

First, open the command line and ensure that the `open-iscsi` utility is installed.
To install the utility on an Ubuntu/Debian distribution, enter `sudo apt update && sudo apt install open-iscsi`.
After the installation completes, make sure the *iscsid* service is running: `sudo service iscsid start`.
With the *iscsid* service started, run the `iscsiadm` command with the discovery arguments and get the necessary information to connect to the share.

![LinuxISCSIAppInstall](/images/CORE/LinuxISCSIAppInstall.png "Linux ISCSI App Install")

### Discover and Login to the iSCSI Share

Run the command `sudo iscsiadm \--mode discovery \--type sendtargets \--portal {IPADDRESS}`.
The output provides the basename and target name that was configured in TrueNAS.

![LinuxISCSIDiscoveryList](/images/CORE/LinuxISCSIDiscoveryList.png "Linux ISCSI Discovery List")

Alternatively, enter `sudo iscsiadm -m discovery -t st -p {IPADDRESS}` to get the same output.
Note the basename and target name given in the output.
These are needed to login to the iSCSI share.

Next, enter `sudo iscsiadm \--mode node \--targetname {BASENAME}:{TARGETNAME} \--portal {IPADDRESS} \--login`, where *{BASENAME}* and *{TARGETNAME}* is the information from the discovery command.

![LinuxISCSILogin](/images/CORE/LinuxISCSILogin.png "Linux ISCSI Login")

### Partition iSCSI Disk

When the iSCSI share login succeeds, the device shared through iSCSI shows on the Linux system as an *iSCSI Disk*.
To view a list of connected disks in Linux, enter `sudo fdisk -l`.

![FDiskList](/images/CORE/FdiskList.png "fdisk -l output")

Because the connected iSCSI disk is raw, it has to be partitioned to be used.
Identify the iSCSI device in the list and enter `sudo fdisk {/PATH/TO/iSCSIDEVICE}`.

![FDiskPartition](/images/CORE/FdiskPartition.png "fdisk partitioning")

The path for the iSCSI device is listed in the output of `sudo fdisk -l`.
Use the `fdisk` command defaults when partitioning the disk.

{{< hint info >}}
Remember to type <kbd>w</kbd> when finished partitioning the disk.
The `w` command tells `fdisk` to save any changes before quitting.
{{< /hint >}}

![LinuxISCSIFilesystemCreated](/images/CORE/LinuxISCSIFilesystemCreated.png "Linux ISCSI Filesystem Created")

After creating the partition on the iSCSI disk, a partition slice displays on the device name.
For example, <file>/dev/sdb1</file>.
Enter `fdisk -l` to see the new partition slice.

### Make a Filesystem on the iSCSI Disk

Finally, use `mkfs` to make a filesystem on the new partition slice of the device.
To create the default filesystem (ext2), enter `sudo mkfs {/PATH/TO/iSCSIDEVICEPARTITIONSLICE}`.

![LinuxISCSIFilesystem](/images/CORE/LinuxISCSIFilesystem.png "Linux ISCSI Filesystem")

### Mount the iSCSI Device

Now the iSCSI device can mount and share data.
Enter `sudo mount {/PATH/TO/iSCSIDEVICEPARTITIONSLICE}`.
For example, `sudo mount /dev/sdb1 /mnt` mounts the iSCSI device *sdb1* to <file>/mnt</file>.
{{< /tab >}}
{{< tab "Windows" >}}
To access the data on the iSCSI share, clients will need to use iSCSI Initiator software. An iSCSI Initiator client is pre-installed in Windows 7 to 10 Pro, and Windows Server 2008, 2012, and 2019. Windows Professional Edition is usually required.

First, click the Start Menu and search for the *iSCSI Initiator* application.

![Windows ISCSI Initiator App](/images/CORE/WindowsISCSIInitiatorApp.png "Windows ISCSI Initiator App")

Next, go to the **Configuration** tab and click **Change** to change the iSCSI initiator to the same name created earlier. Click **OK**.

![Windows ISCSI Initiator Config Name](/images/CORE/WindowsISCSIInitiatorConfigName.png "Windows ISCSI Initiator Config Name")

Next, switch to the **Discovery Tab**, click **Discover Portal**, and type in the TrueNAS IP address.

* If the port number was changed from the default of *3260*, enter the new port number.

* If CHAP was set up when creating the iSCSI share, click **Advanced...**, set *Enable CHAP log on*, and enter the initiator name and the same target/secret that was set earlier in TrueNAS.

Click **OK**.

![Windows ISCSI Initiator Discover Portal](/images/CORE/WindowsISCSIInitiatorDiscoverPortal.png "Windows ISCSI Initiator Discover Portal")

Go to the **Targets** tab, highlight the iSCSI target, and click **Connect**.

![Windows ISCSI Initiator Target Connect](/images/CORE/WindowsISCSIInitiatorTargetConnect.png "Windows ISCSI Initiator Target Connect")

After Windows connects to the iSCSI target the drive can be partitioned.

Search for and open the *Disk Management* app.

![Windows ISCSI Disk Management App](/images/CORE/WindowsISCSIDiskManagementApp.png "Windows ISCSI Disk Management App")

Your drive should currently be *unallocated*. Right-click the drive and click **New Simple Volume...**.

![Windows ISCSI Disk New Volume](/images/CORE/WindowsISCSIDiskNewVolume.png "Windows ISCSI Disk New Volume")

Complete the Wizard to format the drive and assign a drive letter and name.

![Windows ISCSI Disk New Volume Options](/images/CORE/WindowsISCSIDiskNewVolumeOptions.png "Windows ISCSI Disk New Volume Options")

Finally, go to *This PC* or *My Computer* in File Explorer and the new iSCSI volume should show up under the list of drives. You should now be able to add, delete, and modify files and folders on your iSCSI drive.

![Windows iSCSI Volume Location](/images/CORE/WindowsiSCSIVolumeLocation.png "Windows iSCSI Volume Location")
{{< /tab >}}
{{< /tabs >}}


