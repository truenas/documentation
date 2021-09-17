---
title: "Shares"
geekdocCollapseSection: true
weight: 40
---

File sharing is one of the primary benefits of a NAS. TrueNAS helps foster collaboration between users through network shares.  
TrueNAS SCALE allows users to create and configure Block (iSCSI) shares targets, Windows SMB shares, Unix (NFS) shares, and WebDAV shares. 

![SharingSCALE](/images/SCALE/SharingSCALE.png "SCALE Sharing Screen")

{{< tabs "Shares" >}}
{{< tab "Block (iSCSI) Shares Targets" >}}
{{< include file="/_includes/iSCSIRef.md" type="page" >}}

To get started with iSCSI shares, make sure you have created a [zvol]({{< relref "ZVolsSCALE.md" >}}) or a [dataset]({{< relref "DatasetsSCALE.md" >}}) with at least one file to share.

Go to **Shares** and click *Configure* in the *Block (iSCSI) Shares Targets* window. You can either set one up manually or use the wizard to guide you through creation.

## Wizard Setup

{{< expand "Block Device" "v" >}}
![SharingISCSIWizardDeviceSCALE](/images/SCALE/SharingISCSIWizardDeviceSCALE.png "iSCSI Wizard: Block Device")

First, enter a name for the iSCSI share. It can only contain lowercase alphanumeric characters plus a dot (.), dash (-), or colon (:). We recommend keeping the name short or at most 63 characters. Next, choose the *Extent Type*.

* If the *Extent Type* is *Device*, select the Zvol to share from the *Device* menu.

* If the *Extent Type* is *File*, select the path to the Extent and indicate the file size.

Select the type of platform that will be using the share. For example, if using the share from an updated Linux OS, choose *Modern OS*.
{{< /expand >}}

{{< expand "Portal" "v" >}}
Now you will either create a new portal or select an existing one from the dropdown.

If you create a new portal, you will need to select a *Discovery Authentication Method*.

If you set the *Discovery Authentication Method* to *CHAP* or *MUTUAL CHAP*, you will also need to select a *Discovery Authentication Group*. If no group exists, click *Create New* from the drop-down and enter a *Group ID*, *User*, and *Secret*.

![SharingISCSIWizardPortalSCALE](/images/SCALE/SharingISCSIWizardPortalSCALE.png "iSCSI Wizard: Portal")

When the *Discovery Authentication Method* is *NONE*, the *Discovery Authentication Group* can be left empty.

Select *0.0.0.0* or *::* from the *IP Address* dropdown and click *NEXT*. *0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses.
{{< /expand >}}

{{< expand "Initiator" "v" >}}
Decide which initiators or networks can use the iSCSI share.
Leave the list empty to allow all initiators or networks, or add entries to the list to limit access to those systems.

![SharingISCSIWizardInitiatorSCALE](/images/SCALE/SharingISCSIWizardInitiatorSCALE.png "iSCSI Wizard: Initiator")
{{< /expand >}}

{{< expand "Confirm" "v" >}}
Confirm the settings are correct and click *Submit*.

![SharingISCSIWizardSummarySCALE](/images/SCALE/SharingISCSIWizardSummarySCALE.png "iSCSI Wizard: Summary")
{{< /expand >}}

## Manual Setup

{{< expand "Target Global Configuration" "v" >}}
The *Target Global Configuration* tab lets users configure settings that will apply to all iSCSI shares.

![SharingISCSIManualTargetGlobalConfigSCALE](/images/SCALE/SharingISCSIManualTargetGlobalConfigSCALE.png "iSCSI Target Global Configuration")

| Setting | Description |
|---------|-------|
| Base Name | Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the *iqn.format* section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| ISNS Servers | Hostnames or IP addresses of the ISNS servers to be registered with the iSCSI targets and portals of the system. Separate entries by pressing <kbd>Enter</kbd>. |
| Pool Available Space Threshold (%) | Generate an alert when the pool has this percent space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device-based extents. |
{{< /expand >}}

{{< expand "Portals" "v" >}}
The *Portals* tab lets users create new portals or edit existing ones in the list.

![SharingISCSIManualPortalsSCALE](/images/SCALE/SharingISCSIManualPortalsSCALE.png "iSCSI Portal")

To add a new portal, click *ADD* and enter the basic and IP address information.

To edit an existing portal, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the portal and select *Edit*.

![SharingISCSIManualPortalsFormSCALE](/images/SCALE/SharingISCSIManualPortalsFormSCALE.png "iSCSI Portals Form")

**Basic Info**
| Setting | Description |
|---------|-------|
| Description | Optional description. Portals are automatically assigned a numeric group. |

**Authentication Method and Group**
| Setting | Description |
|---------|-------|
| Discovery Authentication Method | iSCSI supports multiple authentication methods that the target uses to discover valid devices. *None* allows anonymous discovery while *CHAP* and *Mutual CHAP* require authentication. |
| Discovery Authentication Group | Group ID created in Authorized Access. Required when the Discovery Authentication Method is CHAP or Mutual CHAP. |

**IP Address**
| Setting | Description |
|---------|-------|
| IP Address | Select the IP addresses to be listened on by the portal. Click ADD to add IP addresses with a different network port. *0.0.0.0* listens on all IPv4 addresses and *::* listens on all IPv6 addresses. |
| Port | TCP port used to access the iSCSI target. Default is *3260*. |
| ADD | Adds another IP address row. |
{{< /expand >}}

{{< expand "Initiators Groups" "v" >}}
The *Initiators Groups* tab lets users create new authorized access client groups or edit existing ones in the list.

![SharingISCSIManualInitiatorsSCALE](/images/SCALE/SharingISCSIManualInitiatorsSCALE.png "iSCSI Initiators Groups")

To add a new initiators group, click *Add* and either leave *Allow All Initiators* checked or configure your own allowed initiators and authorized networks.

To edit an existing initiators group, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the initiators group and select *Edit*.

| Setting | Description |
|---------|-------|
| Allow All Initiators | Allows All Initiators when checked. |
| Allowed Initiators (IQN) | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click *+* to add it to the list. Example: *iqn.1994-09.org.freebsd:freenas.local*. |
| Authorized Networks | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click + to add the network address to the list. Example: *192.168.2.0/24*. |
| Description | Any notes about initiators. |
{{< /expand >}}

{{< expand "Authorized Access" "v" >}}
The *Authorized Access* tab lets users create new authorized access networks or edit existing ones in the list.

![SharingISCSIManualAuthorizedAccessSCALE](/images/SCALE/12.0/SharingISCSIManualAuthorizedAccessSCALE.png "iSCSI Authorized Access")

To add a new authorized access network, click *ADD* and fill out the group, user, and peer user information.

To edit an existing authorized access network, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select *Edit*.

![SharingISCSIManualAuthorizedAccessFormSCALE](/images/SCALE/SharingISCSIManualAuthorizedAccessFormSCALE.png "iSCSI Authorized Access Form")

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
{{< /expand >}}

{{< expand "Targets" "v" >}}
The *Targets* tab lets users create new TrueNAS storage resources or edit existing ones in the list.

![SharingISCSIManualTargetsSCALE](/images/SCALE/SharingISCSIManualTargets.png "iSCSI Targets")

To add a new target, click *ADD* and enter the basic and iSCSI group information.

To edit an existing target, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select *Edit*.

![SharingISCSIManualTargetsFormSCALE](/images/SCALE/SharingISCSIManualTargetsFormSCALE.png "iSCSI Targets Form")

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
{{< /expand >}}

{{< expand "Extents" "v" >}}
The *Extents* tab lets users create new shared storage units or edit existing ones in the list.

![SharingISCSIManualExtentsSCALE](/images/SCALE/SharingISCSIManualExtentsSCALE.png "iSCSI Extents")

To add a new extent, click *ADD* and enter the basic, type, and compatibility information.

To edit an existing extent, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select *Edit*.

![SharingISCSIManualExtentsFormSCALE](/images/SCALE/SharingISCSIManualExtentsFormSCALE.png "iSCSI Extents Form")

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
{{< /expand >}}

{{< expand "Associated Targets" "v" >}}
The *Associated Targets* tab lets users create new associated TrueNAS storage resources or edit existing ones in the list.

![SharingISCSIManualAssociatedTargetsSCALE](/images/SCALE/SharingISCSIManualAssociatedTargetsSCALE.png "iSCSI Associated Targets")

To add a new associated target, click *ADD* and fill out the information.

To edit an existing associated target, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to it and select *Edit*.

![SharingISCSIManualAssociatedTargetsFormSCALE](/images/SCALE/SharingISCSIManualAssociatedTargetsFormSCALE.png "iSCSI Associated Targets Form")

| Setting | Description |
|---------|-------|
| Target | Select an existing target. |
| LUN ID | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| Extent | Select an existing extent. |
{{< /expand >}}

{{< expand "Quick iSCSI Target Creation" "v" >}}
TrueNAS SCALE lets users quickly add iSCSI targets without having to set up another share. To add a target, go to **Shares** and click *Add* in the *Block (iSCSI) Shares Targets* window.

![QuickiSCSITargetSCALE](/images/SCALE/QuickiSCSITargetSCALE.png "Quick iSCSI Target")

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
{{< /expand >}}

## Starting the iSCSI Service

To turn on the iSCSI service, go to **Services** and toggle *iSCSI*.
Set *Start Automatically* to start it when TrueNAS boots up.

![ServicesISCSIEnableSCALE](/images/SCALE/ServicesISCSIEnableSCALE.png "Starting the iSCSI Service")

Clicking the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> returns to the options in **Shares >** *Block (iSCSI) Shares Targets*.

## Using the iSCSI Share

Connecting to and using an iSCSI share can differ between operating systems:

{{< expand "Linux" "v" >}}
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

### Make a Filesystem on the iSCSI Disk

Finally, use `mkfs` to make a filesystem on the device's new partition slice.
To create the default filesystem (ext2), enter `sudo mkfs {/PATH/TO/iSCSIDEVICEPARTITIONSLICE}`.

![LinuxISCSIFilesystem](/images/CORE/LinuxISCSIFilesystem.png "Linux ISCSI Filesystem")

### Mount the iSCSI Device

Now the iSCSI device can mount and share data.
Enter `sudo mount {/PATH/TO/iSCSIDEVICEPARTITIONSLICE}`.
For example, `sudo mount /dev/sdb1 /mnt` mounts the iSCSI device *sdb1* to <file>/mnt</file>.
{{< /expand >}}

{{< expand "Windows" "v" >}}
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
{{< /expand >}}


{{< /tab >}}
{{< /tabs >}}

## Expanding LUNs

TrueNAS lets users expand Zvol and file-based LUNs to increase the available storage that the iSCSI shares.

{{< expand "Zvol LUN" "v" >}}
To expand a Zvol LUN, go to **Storage > Pools** and click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the Zvol LUN, then select *Edit Zvol*.

![ExpandingZvolLUNListSCALE](/images/SCALE/ExpandingZvolLUNListSCALE.png "Edit the Zvol LUN")

Enter a new size in the *Size for this zvol* field, then click *SAVE*.

![ExpandingZvolLUNSizeSCALE](/images/SCALE/ExpandingZvolLUNSizeSCALE.png "Change the Zvol Size")

{{< hint ok >}}
To prevent data loss, the web interface does not allow users to reduce the Zvol's size. 
TrueNAS also does not allow users to increase the Zvol's size past 80% of the pool size.
{{< /hint >}}
{{< /expand >}}

{{< expand "File LUN" "v" >}}
You will need to know the path to the file to expand a file-based LUN. To find the path, go to **Shares** and click *Configure* in the *Block (iSCSI) Shares Targets* window, then select the *Extents* tab. 

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the file-based LUN and select *Edit*. 

![ExpandingFileLUNPathSCALE](/images/SCALE/ExpandingFileLUNPathSCALE.png "Copy the Path to the File")

Highlight and copy the path, then click *Cancel*

Go to **Shell** and input `truncate -s +[size] [path to file]`, then press <kbd>Enter</kbd>.

The *[size]* is how much space you want to grow the file by, and the *[path to file]* is the file path you copied earlier. 

![ExpandingFileLUNShellSCALE](/images/SCALE/ExpandingFileLUNShellSCALE.png "Expanding the File Size in Shell")

An example of the command could look like this: `truncate -s +2g /mnt/Pool1/Dataset1/File LUN`

Lastly, go back to the extent in **Shares >** *Block (iSCSI) Shares Targets* and make sure the *Filesize* is set to *0* so that the share uses the actual file size.
{{< /expand >}}
{{< /tab >}}

{{< tab "Windows (SMB) Shares" >}}
{{< /tab >}}

{{< tab "UNIX (NFS) Shares" >}}
{{< /tab >}}

{{< tab "WebDAV" >}}
{{< /tab >}}
{{< /tabs >}}


