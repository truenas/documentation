---
title: "iSCSI Shares"
weight: 10
---

{{< toc >}}

To get started, make sure you have created a [zvol]({{< relref "ZVols.md" >}}) or a [dataset]({{< relref "Datasets.md" >}}) with at least one file to share.

Go to **Sharing > Block Shares (iSCSI)**. You can either set one up manually or use the wizard to guide you through creation.

## Wizard Setup

{{< tabs "Wizard Setup" >}}
{{< tab "Block Device" >}}
First, enter a name for the iSCSI share. It can only contain lowercase alphanumeric characters plus a dot (.), dash (-), or colon (:). We recommend keeping the name short or at most 63 characters. Next, choose the *Extent Type*.

* If the *Extent Type* is *Device*, select the Zvol to share from the *Device* menu.

* If the *Extent Type* is *File*, select the path to the Extent and indicate the file size.

Select the type of platform that will be using the share. For example, if using the share from an updated Linux OS, choose *Modern OS*.

![SharingISCSIWizardDevice](/images/CORE/12.0/SharingISCSIWizardDevice.png "iSCSI Wizard: Block Device")
{{< /tab >}}

{{< tab "Portal" >}}
Now you will either create a new portal or select an existing one from the dropdown.

If you create a new portal, you will need to select a *Discovery Authentication Method*.

If you set the *Discovery Authentication Method* to *CHAP* or *MUTUAL CHAP*, you will also need to select a *Discovery Authentication Group*. If no group exists, click *Create New* from the drop-down and enter a *Group ID*, *User*, and *Secret*.

![SharingISCSIWizardPortal](/images/CORE/12.0/SharingISCSIWizardPortal.png "iSCSI Wizard: Portal")

When the *Discovery Authentication Method* is *NONE*, the *Discovery Authentication Group* can be left empty.

Select *0.0.0.0* or *::* from the *IP Address* dropdown and click *NEXT*.

{{< expand "What are these options?" "v" >}}
*0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses.
{{< /expand >}}
{{< /tab >}}

{{< tab "Initiator" >}}
Decide which initiators or networks can use the iSCSI share.
Leave the list empty to allow all initiators or networks, or add entries to the list to limit access to those systems.

![SharingISCSIWizardInitiator](/images/CORE/12.0/SharingISCSIWizardInitiator.png "iSCSI Wizard: Initiator")
{{< /tab >}}

{{< tab "Confirm" >}}
Confirm the settings are correct and click *SUBMIT*.

![SharingISCSIWizardSummary](/images/CORE/12.0/SharingISCSIWizardSummary.png "iSCSI Wizard: Summary")
{{< /tab >}}
{{< /tabs >}}

## Manual Setup

{{< tabs "Manual Setup" >}}
{{< tab "Target Global Configuration" >}}
The *Target Global Configuration* tab lets users configure settings that will apply to all iSCSI shares.

![SharingISCSIManualPortals](/images/CORE/12.0/SharingISCSIManualPortals.png "iSCSI Portal")

| Setting | Description |
|---------|-------|
| Base Name | Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the *iqn.format* section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| ISNS Servers | Hostnames or IP addresses of the ISNS servers to be registered with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>. |
| Pool Available Space Threshold (%) | Generate an alert when the pool has this percent space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device-based extents. |
{{< /tab >}}

{{< tab "Portals" >}}
The *Portals* tab lets users create new portals or edit existing ones in the list.

![SharingISCSIManualPortals](/images/CORE/12.0/SharingISCSIManualPortals.png "iSCSI Portal")

To add a new portal, click *ADD* and enter the basic and IP address information.

To edit an existing portal, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to the portal and select *Edit*.

![SharingISCSIWizardPortal](/images/CORE/12.0/SharingISCSIWizardPortal.png "iSCSI Wizard: Portal")

**Basic Info**
| Setting | Description |
|---------|-------|
| Description | Optional description. Portals are automatically assigned a numeric group. |
| Discovery Authentication Method | iSCSI supports multiple authentication methods that the target uses to discover valid devices. *None* allows anonymous discovery while *CHAP* and *Mutual CHAP* require authentication. |
| Discovery Authentication Group | Group ID created in Authorized Access. Required when the Discovery Authentication Method is CHAP or Mutual CHAP. |

**IP Address**
| Setting | Description |
|---------|-------|
| IP Address | Select the IP addresses to be listened on by the portal. Click ADD to add IP addresses with a different network port. *0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses. |
| Port | TCP port used to access the iSCSI target. Default is *3260*. |
| ADD | Adds another IP address row. |
{{< /tab >}}

{{< tab "Initiators Groups" >}}
The *Initiators Groups* tab lets users create new authorized access client groups or edit existing ones in the list.

![SharingISCSIManualInitiators](/images/CORE/12.0/SharingISCSIManualInitiators.png "iSCSI Initiators Groups")

To add a new initiators group, click *ADD* and either leave *Allow All Initiators* checked or configure your own allowed initiators and authorized networks.

To edit an existing initiators group, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to the initiators group and select *Edit*.

| Setting | Description |
|---------|-------|
| Allow All Initiators | Allows All Initiators when checked. |
| Allowed Initiators (IQN) | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click *+* to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| Authorized Networks | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click + to add the network address to the list. Example: *192.168.2.0/24*. |
| Description | Any notes about initiators. |
{{< /tab >}}

{{< tab "Authorized Access" >}}
The *Authorized Access* tab lets users create new authorized access networks or edit existing ones in the list.

![SharingISCSIManualAuthorizedAccess](/images/CORE/12.0/SharingISCSIManualAuthorizedAccess.png "iSCSI Authorized Access")

To add a new authorized access network, click *ADD* and fill out the group, user, and peer user information.

To edit an existing authorized access network, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to it and select *Edit*.

![SharingISCSIManualAuthorizedAccessForm](/images/CORE/12.0/SharingISCSIManualAuthorizedAccessForm.png "iSCSI Authorized Access Form")

**Group**
| Setting | Description |
|---------|-------|
| Group ID | Allow different groups to be configured with different authentication profiles. Example: all users with a group ID of 1 will inherit the authentication profile associated with Group 1. |

**User**
| Setting | Description |
|---------|-------|
| User | User account to create for CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| Secret | User password. Must be at least 12 and no more than 16 characters long. |
| Secret (Confirm) | Confirm the user password. |

**Peer User**
| Setting | Description |
|---------|-------|
| Peer User | Only entered when configuring mutual CHAP. Usually the same value as User. |
| Peer Secret | Mutual secret password. Required when Peer User is set. Must be different than the Secret. |
| Peer Secret (Confirm) | Confirm the mutual secret password. |
{{< /tab >}}

{{< tab "Targets" >}}
The *Targets* tab lets users create new TrueNAS storage resources or edit existing ones in the list.

![SharingISCSIManualTargets](/images/CORE/12.0/SharingISCSIManualTargets.png "iSCSI Targets")

To add a new target, click *ADD* and enter the basic and iSCSI group information.

To edit an existing target, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to it and select *Edit*.

![SharingISCSIManualTargetsForm](/images/CORE/12.0/SharingISCSIManualTargetsForm.png "iSCSI Targets Form")

**Basic Info**
| Setting | Description |
|---------|-------|
| Target Name | The base name is automatically prepended if the target name does not start with iqn. Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the iqn.format section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| Target Alias | Optional user-friendly name. |

**iSCSI Group**
| Setting | Description |
|---------|-------|
| Portal Group ID | Leave empty or select an existing portal to use. |
| Initiator Group ID | Select which existing initiator group has access to the target. |
| Authentication Method | Choices are *None*, *Auto*, *CHAP*, or *Mutual CHAP*. |
| Authentication Group Number | Select *None* or an integer. This value represents the number of existing authorized accesses. |
{{< /tab >}}

{{< tab "Extents" >}}
The *Extents* tab lets users create new shared storage units or edit existing ones in the list.

![SharingISCSIManualExtents](/images/CORE/12.0/SharingISCSIManualExtents.png "iSCSI Extents")

To add a new extent, click *ADD* and enter the basic, type, and compatibility information.

To edit an existing extent, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to it and select *Edit*.

![SharingISCSIManualExtentsForm](/images/CORE/12.0/SharingISCSIManualExtentsForm.png "iSCSI Extents Form")

**Basic Info**
| Setting | Description |
|---------|-------|
| Name | Name of the extent. If the *Extent* size is not 0, it cannot be an existing file within the pool or dataset. |
| Description | Notes about this extent. |
| Enabled | Set to enable the iSCSI extent. |

**Type**
| Setting | Description |
|---------|-------|
| Extent Type | *Device* provides virtual storage access to zvols, zvol snapshots, or physical devices. *File* provides virtual storage access to a single file. |
| Device | Only appears if *Device* is selected. Select the unformatted disk, controller, or zvol snapshot. |
| Path to the Extent | Only appears if *File* is selected. Browse to an existing file. Create a new file by browsing to a dataset and appending /\{filename.ext\} to the path. Users cannot create extents inside a jail root directory. |
| Filesize | Only appears if *File* is selected. Entering 0 uses the actual file size and requires that the file already exists. Otherwise, specify the file size for the new file. |
| Logical Block Size | Leave at the default of 512 unless the initiator requires a different block size. |
| Disable Physical Block Size Reporting | Set if the initiator does not support physical block size values over 4K (MS SQL). |

**Compatibility**
| Setting | Description |
|---------|-------|
| Enable TPC | Set to allow an initiator to bypass normal access control and access any scannable target. This allows [xcopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc771254(v=ws.11)) operations that are otherwise blocked by access control. |
| Xen initiator compat mode | Set when using Xen as the iSCSI initiator. |
| LUN RPM | Do **NOT** change this setting when using Windows as the initiator. Only needs to be changed in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| Read-only | Set to prevent the initiator from initializing this LUN. |
{{< /tab >}}

{{< tab "Associated Targets" >}}
The *Associated Targets* tab lets users create new associated TrueNAS storage resources or edit existing ones in the list.

![SharingISCSIManualAssociatedTargets](/images/CORE/12.0/SharingISCSIManualAssociatedTargets.png "iSCSI Associated Targets")

To add a new associated target, click *ADD* and fill out the information.

To edit an existing associated target, click <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to it and select *Edit*.

![SharingISCSIManualAssociatedTargetsForm](/images/CORE/12.0/SharingISCSIManualAssociatedTargetsForm.png "iSCSI Associated Targets Form")

| Setting | Description |
|---------|-------|
| Target | Select an existing target. |
| LUN ID | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| Extent | Select an existing extent. |
{{< /tab >}}
{{< /tabs >}}

## Starting the iSCSI Service

To turn on the iSCSI service, go to **Services** and toggle *iSCSI*.
Set *Start Automatically* to start it when TrueNAS boots up.

![ServicesISCSIEnable](/images/CORE/12.0/ServicesISCSIEnable.png "Starting the iSCSI Service")

Clicking the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> returns to the options in **Sharing > iSCSI**.

## Using the iSCSI Share

Connecting to and using an iSCSI share can differ between operating systems:

{{< tabs "iSCSI Use: OSes" >}}
{{< tab "Linux" >}}

### iSCSI Utilities and Service

First, open the command line and ensure that the `open-iscsi` utility is installed.
To install the utility on an Ubuntu/Debian distribution, enter `sudo apt update && sudo apt install open-iscsi`.
After the installation completes, ensure the *iscsid* service is running: `sudo service iscsid start`.
With the *iscsid* service started, run the `iscsiadm` command with the discovery arguments and get the necessary information to connect to the share.

![LinuxISCSIAppInstall](/images/CORE/LinuxISCSIAppInstall.png "Linux ISCSI App Install")

### Discover and Log In to the iSCSI Share

Run the command `sudo iscsiadm \--mode discovery \--type sendtargets \--portal {IPADDRESS}`.
The output provides the basename and target name that TrueNAS configured.

![LinuxISCSIDiscoveryList](/images/CORE/LinuxISCSIDiscoveryList.png "Linux ISCSI Discovery List")

Alternatively, enter `sudo iscsiadm -m discovery -t st -p {IPADDRESS}` to get the same output.
Note the basename and target name given in the output, since they you need them to log in to the iSCSI share.

When a Portal Discovery Authentication Method is CHAP, add the three following lines to /etc/iscsi/iscsid.conf.
```
discovery.sendtargets.auth.authmethod = CHAP
discovery.sendtargets.auth.username = user
discovery.sendtargets.auth.password = secret
```
The user for `discovery.sendtargets.auth.username` is set in the *Authorized Access* used by the *Portal* of the iSCSI share. Likewise, the password to use for `discovery.sendtargets.auth.password` is the *Authorized Access* secret. Without those lines, the iscsiadm will not discover the Portal with the CHAP authentication method.

Next, enter `sudo iscsiadm \--mode node \--targetname {BASENAME}:{TARGETNAME} \--portal {IPADDRESS} \--login`, where *{BASENAME}* and *{TARGETNAME}* is the information from the discovery command.

![LinuxISCSILogin](/images/CORE/LinuxISCSILogin.png "Linux ISCSI Login")

### Partition iSCSI Disk

When the iSCSI share login succeeds, the device shared through iSCSI shows on the Linux system as an *iSCSI Disk*.
To view a list of connected disks in Linux, enter `sudo fdisk -l`.

![FDiskList](/images/CORE/FdiskList.png "fdisk -l output")

Because the connected iSCSI disk is raw, you must partition it.
Identify the iSCSI device in the list and enter `sudo fdisk {/PATH/TO/iSCSIDEVICE}`.

![FDiskPartition](/images/CORE/FdiskPartition.png "fdisk partitioning")

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

### Make a Filesystem on the iSCSI Disk

Finally, use `mkfs` to make a filesystem on the device's new partition slice.
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

![WindowsISCSIInitiatorApp](/images/CORE/WindowsISCSIInitiatorApp.png "Windows ISCSI Initiator App")

Next, go to the **Configuration** tab and click **Change** to change the iSCSI initiator to the same name created earlier. Click **OK**.

![Windows ISCSI Initiator Config Name](/images/CORE/WindowsISCSIInitiatorConfigName.png "Windows ISCSI Initiator Config Name")

Next, switch to the **Discovery Tab**, click **Discover Portal**, and type in the TrueNAS IP address.

* If TrueNAS changed the port number from the default *3260*, enter the new port number.

* If you set up CHAP when creating the iSCSI share, click **Advanced...**, set *Enable CHAP log on*, and enter the initiator name and the same target/secret set earlier in TrueNAS.

Click **OK**.

![Windows ISCSI Initiator Discover Portal](/images/CORE/WindowsISCSIInitiatorDiscoverPortal.png "Windows ISCSI Initiator Discover Portal")

Go to the **Targets** tab, highlight the iSCSI target, and click **Connect**.

![Windows ISCSI Initiator Target Connect](/images/CORE/WindowsISCSIInitiatorTargetConnect.png "Windows ISCSI Initiator Target Connect")

After Windows connects to the iSCSI target, you can partition the drive.

Search for and open the *Disk Management* app.

![WindowsISCSIDiskManagementApp](/images/CORE/WindowsISCSIDiskManagementApp.png "Windows ISCSI Disk Management App")

Your drive should currently be *unallocated*. Right-click the drive and click **New Simple Volume...**.

![WindowsISCSIDiskNewVolume](/images/CORE/WindowsISCSIDiskNewVolume.png "Windows ISCSI Disk New Volume")

Complete the Wizard to format the drive and assign a drive letter and name.

![WindowsISCSIDiskNewVolumeOptions](/images/CORE/WindowsISCSIDiskNewVolumeOptions.png "Windows ISCSI Disk New Volume Options")

Finally, go to *This PC* or *My Computer* in File Explorer. The new iSCSI volume should show up under the list of drives. You should now be able to add, delete, and modify files and folders on your iSCSI drive.

![WindowsiSCSIVolumeLocation](/images/CORE/WindowsiSCSIVolumeLocation.png "Windows iSCSI Volume Location")
{{< /tab >}}
{{< /tabs >}}

## Expanding LUNs

TrueNAS lets users expand Zvol and file-based LUNs to increase the available storage that the iSCSI shares.

{{< tabs "Expanding LUNs" >}}
{{< tab "Zvol LUN" >}}
To expand a Zvol LUN, go to **Storage > Pools** and click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to the Zvol LUN, then select *Edit Zvol*.

![ExpandingZvolLUNList](/images/CORE/ExpandingZvolLUNList.png "Edit the Zvol LUN")

Enter a new size in the *Size for this zvol* field, then click *SAVE*.

![ExpandingZvolLUNSize](/images/CORE/ExpandingZvolLUNSize.png "Change the Zvol Size")

{{< hint ok >}}
To prevent data loss, the web interface does not allow users to reduce the Zvol's size. 
TrueNAS also does not allow users to increase the Zvol's size past 80% of the pool size.
{{< /hint >}}
{{< /tab >}}

{{< tab "File LUN" >}}
To expand a file-based LUN, you will need to know the path to the file. You can find the path by going to **Sharing > Block Shares (iSCSI)** and clicking the *Extents* tab. 
Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> next to the file-based LUN and select *Edit*. 

![ExpandingFileLUNPath](/images/CORE/ExpandingFileLUNPath.png "Copy the Path to the File")

Highlight and copy the path, then click *CANCEL*

Go to **Shell** and input `truncate -s +[size] [path to file]`, then press <kbd>Enter</kbd>.

The *[size]* is how much space you want to grow the file by, and the *[path to file]* is the file path you copied earlier. 

![ExpandingFileLUNShell](/images/CORE/ExpandingFileLUNShell.png "Expanding the File Size in Shell")

An example of the command could look like this: `truncate -s +2g /mnt/Shares/Dataset1/FileLun/FileLUN`

Lastly, go back to the extent in **Sharing > Block Shares (iSCSI)** and make sure the *Filesize* is set to *0* so that the share uses the actual file size.
{{< /tab >}}
{{< /tabs >}}
