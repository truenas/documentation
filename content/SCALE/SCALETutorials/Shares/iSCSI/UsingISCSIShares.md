---
title: "Using an iSCSI Share"
description: "This article provides information on setting up a Linux or Windows system to use a TrueNAS-configured iSCSI block share."
weight: 40
tags:
- scaleiscsi
- scaleshares
- tciscsi
---

{{< toc >}}

Connecting to and using an iSCSI share can differ between operating systems.

This article provides instructions on setting up a Linux and Windows system to use the TrueNAS iSCSI block share.

## Using Linux iSCSI Utilities and Service
In this section, you start the iSCSI service, log in to the share, and obtain the configured basename and target. You also partition the iSCSI disk, make a file system for the share, mount it, and share data.
{{< expand "Click here for more information" "v" >}}
Before you begin, open the command line and ensure you have installed the `open-iscsi` utility.
To install the utility on an Ubuntu/Debian distribution, enter command `sudo apt update && sudo apt install open-iscsi`.
After the installation completes, ensure the **iscsid** service is running using the `sudo service iscsid start` command.

First, with the **iscsid** service started, run the `iscsiadm` command with the discovery arguments and get the necessary information to connect to the share.

![LinuxISCSIAppInstall](/images/CORE/LinuxISCSIAppInstall.png "Linux ISCSI App Install")

Next, discover and log into the iSCSI share. 

1. Run the command `sudo iscsiadm \--mode discovery \--type sendtargets \--portal {IPADDRESS}`.
   The output provides the basename and target name that TrueNAS configured.

   ![LinuxISCSIDiscoveryList](/images/CORE/LinuxISCSIDiscoveryList.png "Linux ISCSI Discovery List")

   Alternatively, enter `sudo iscsiadm -m discovery -t st -p {IPADDRESS}` to get the same output.
   Note the basename and target name given in the output. You need them to log in to the iSCSI share.

   When a Portal Discovery Authentication Method is CHAP, add the three following lines to /etc/iscsi/iscsid.conf.

   ```
   discovery.sendtargets.auth.authmethod = CHAP
   discovery.sendtargets.auth.username = user
   discovery.sendtargets.auth.password = secret
   ```

   The user for `discovery.sendtargets.auth.username` is set in the **Authorized Access** used by the iSCSI share **Portal**. 
   Likewise, the password to use for `discovery.sendtargets.auth.password` is the **Authorized Access** secret.
   Without those lines, the iscsiadm does not discover the portal with the CHAP authentication method.

2. Enter comand `sudo iscsiadm \--mode node \--targetname {BASENAME}:{TARGETNAME} \--portal {IPADDRESS} \--login`,
   where *{BASENAME}* and *{TARGETNAME}* is the discovery command information.

   ![LinuxISCSILogin](/images/CORE/LinuxISCSILogin.png "Linux ISCSI Login")

Now you partition an iSCSI disk.

   When the iSCSI share login succeeds, the device shared through iSCSI shows on the Linux system as an **iSCSI Disk**.
   To view a list of connected disks in Linux, enter command `sudo fdisk -l`.

   ![FDiskList](/images/CORE/FDiskList.png "fdisk -l output")

   Because the connected iSCSI disk is raw, you must partition it.
   Identify the iSCSI device in the list and enter `sudo fdisk {/PATH/TO/iSCSIDEVICE}`.

   ![FDiskPartition](/images/CORE/FDiskPartition.png "fdisk partitioning")

   **Shell** lists the iSCSI device path in the `sudo fdisk -l` output.
   Use the `fdisk` command defaults when partitioning the disk.

   {{< hint info >}}
   Remember to type <kbd>w</kbd> when finished partitioning the disk.
   The `w` command tells `fdisk` to save any changes before quitting.
   {{< /hint >}}

   ![LinuxISCSIFilesystemCreated](/images/CORE/LinuxISCSIFilesystemCreated.png "Linux ISCSI Filesystem Created")

   After creating the partition on the iSCSI disk, a partition slice displays on the device name.
   For example, <file>/dev/sdb1</file>.
   Enter `fdisk -l` to see the new partition slice.

Next, make a file system on the iSCSI disk.

Finally, use `mkfs` to make a file system on the new partition slice.
To create the default file system (ext2), enter `sudo mkfs {/PATH/TO/iSCSIDEVICEPARTITIONSLICE}`.

![LinuxISCSIFilesystem](/images/CORE/LinuxISCSIFilesystem.png "Linux ISCSI Filesystem")

Mount the iSCSI device and share the data.

Enter `sudo mount {/PATH/TO/iSCSIDEVICEPARTITIONSLICE}`.
For example, `sudo mount /dev/sdb1 /mnt` mounts the iSCSI device */dev/sdb1* to file */mnt*.
{{< /expand >}}

## Using the iSCSI Share with Windows
This section provides instructions on setting up Windows iSCSI Initiator Client to work with TrueNAS iSCSI shares.
{{< expand "Click here for more information" "v" >}}
To access the data on the iSCSI share, clients need to use iSCSI Initiator software. An iSCSI Initiator client is pre-installed in Windows 7 to 10 Pro, and Windows Server 2008, 2012, and 2019. Windows Professional Edition is usually required.

First, click the **Start Menu** and search for the **iSCSI Initiator** application.

![WindowsISCSIInitiatorApp](/images/CORE/WindowsISCSIInitiatorApp.png "Windows ISCSI Initiator App")

Next, go to the **Configuration** tab and click **Change** to replace the iSCSI initiator with the name created earlier. Click **OK**.

![WindowsISCSIInitiatorConfigName](/images/CORE/WindowsISCSIInitiatorConfigName.png "Windows ISCSI Initiator Config Name")

Next, switch to the **Discovery Tab**, click **Discover Portal**, and type in the TrueNAS IP address.

* If TrueNAS changed the port number from the default **3260**, enter the new port number.

* If you set up CHAP when creating the iSCSI share, click **Advanced...**, set **Enable CHAP log on**, and enter the initiator name and the same target/secret set earlier in TrueNAS.

Click **OK**.

![WindowsISCSIInitiatorDiscoverPortal](/images/CORE/WindowsISCSIInitiatorDiscoverPortal.png "Windows ISCSI Initiator Discover Portal")

Go to the **Targets** tab, highlight the iSCSI target, and click **Connect**.

![WindowsISCSIInitiatorTargetConnect](/images/CORE/WindowsISCSIInitiatorTargetConnect.png "Windows ISCSI Initiator Target Connect")

After Windows connects to the iSCSI target, you can partition the drive.

Search for and open the **Disk Management** app.

![WindowsISCSIDiskManagementApp](/images/CORE/WindowsISCSIDiskManagementApp.png "Windows ISCSI Disk Management App")

The current state of your drive should be **unallocated**. Right-click the drive and click **New Simple Volume...**.

![WindowsISCSIDiskNewVolume](/images/CORE/WindowsISCSIDiskNewVolume.png "Windows ISCSI Disk New Volume")

Complete the wizard to format the drive and assign a drive letter and name.

![WindowsISCSIDiskNewVolumeOptions](/images/CORE/WindowsISCSIDiskNewVolumeOptions.png "Windows ISCSI Disk New Volume Options")

Finally, go to **This PC** or **My Computer** in **File Explorer**. The new iSCSI volume should display under the list of drives. You should now be able to add, delete, and modify files and folders on your iSCSI drive.

![WindowsiSCSIVolumeLocation](/images/CORE/WindowsiSCSIVolumeLocation.png "Windows iSCSI Volume Location")
{{< /expand >}}

{{< taglist tag="scaleiscsi" limit="10" >}}