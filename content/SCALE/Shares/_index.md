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

![SharingISCSIManualTargetsSCALE](/images/SCALE/SharingISCSIManualTargetsSCALE.png "iSCSI Targets")

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

{{< expand "Integrating Fibre Channel" "v" >}}
Fibre Channel is a high-speed data transfer protocol providing in-order, lossless delivery of raw block data.
Fibre Channel is primarily used to connect computer data storage to servers in storage area networks in commercial data centers.
The Fibre Channel protocol is fast, cost effective, and reliable over a wide variety of storage workloads.

{{< expand "Which TrueNAS Products can use Fibre Channel?" "v" >}}

* [TrueNAS R-Series](https://www.truenas.com/r-series/)(4x16 Gbps)
* [TrueNAS X-10](https://www.truenas.com/x-series/)(2x8 Gbps)
* [TrueNAS X-20](https://www.truenas.com/x-series/)(2x8 Gbps)
* [TrueNAS M-40](https://www.truenas.com/m-series/)(4x16 Gbps)
* [TrueNAS M-50](https://www.truenas.com/m-series/)(4x16 Gbps or 2x32 Gbps)
* [TrueNAS M-60](https://www.truenas.com/m-series/)(4x32 Gbps)

{{< /expand >}}

{{< hint info >}}
This is a TrueNAS Enterprise feature.
TrueNAS systems licensed for Fibre Channel have *Fibre Channel Ports* added to **Sharing > Block Shares (iSCSI)**.

![Sharing ISCSI Fibre Channel Ports](/images/CORE/12.0/SharingISCSIFibreChannelPorts.png "Sharing ISCSI Fibre Channel Ports")
{{< /hint >}}

## Fibre Channel ISCSI Share Example

{{< hint info >}}
**Initiators** and **Authorized Access** screens only apply to iSCSI and can be ignored when configuring Fibre Channel.
{{< /hint >}}

Go to **Storage > Pools**.
Find an existing pool, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add zvol* to create a new zvol.

![StoragePoolsZvolFibreEnterprise](/images/CORE/12.0/StoragePoolsZvolFibreEnterprise.png "Creating a Zvol for Fibre Channel")

Configure these tabs in **Sharing > Block Shares (iSCSI)**:

{{< tabs "iSCSI Config Tabs" >}}
{{< tab "Portals" >}}
If a portal with listen interface `0.0.0.0:3260` does not exist, click *Add* and add this portal.
{{< /tab >}}

{{< tab "Initiators Groups" >}}

| Name | Description |
|------|-------------|
| Connected Initiators | Initiators currently connected to the system. Shown in IQN format with an IP address. Set initiators and click an -> (arrow) to add the initiators to either the Allowed Initiators or Authorized Networks lists. Clicking Refresh updates the Connected Initiators list. |
| Allowed Initiators | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click + to add it to the list. Example: iqn.1994-09.org.freebsd:freenas.local |
| Authorized Networks | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click + to add the network address to the list. Example: `192.168.2.0/24`. |
| Description | Any notes about initiators. |
{{< /tab >}}

{{< tab "Authorized Access" >}}

| Name | Description |
|------|-------------|
| Group ID | Allow different groups to be configured with different authentication profiles. Example: all users with a group ID of 1 will inherit the authentication profile associated with Group 1. |
| User | User account to create for CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| Secret  | User password. Must be at least 12 and no more than 16 characters long. |
| Peer User | Only entered when configuring mutual CHAP. Usually the same value as User. |
| Peer Secret | Mutual secret password. Required when Peer User is set. Must be different than the Secret. |
{{< /tab >}}

{{< tab "Targets" >}}
*Add* a new target.

![Sharing ISCSI Targets Add Fibre](/images/CORE/12.0/SharingISCSITargetsAddFibre.png "ISCSI Targets: Fibre")

Enter or select values specific to your use case for the *Target Name*, *Target Alias*, *Target Mode*, and *Portal Group*. The *Initiator Group ID* selects which existing initiator group has access to the target.  Options for the *Authentication Method* are None, Auto, CHAP, or Mutual CHAP. *Authentication Group Number* can be set to none or an integer. This value represents the number of existing authorized accesses.

{{< hint info >}}
An extra *Target Mode* option appears after going to *Targets* and clicking *ADD*.
This new option is to select whether the target to create is iSCSI, Fibre Channel, or both.

The *Target* [Reporting]({{< relref "/CORE/Administration/Reporting.md" >}}) tab provides Fibre Channel port bandwidth graphs.
{{< /hint >}}
{{< /tab >}}
{{< tab "Extents" >}}
*Add* a new extent.

![ISCSIExtentsAddFibre](/images/CORE/12.0/ISCSIExtentsAddFibre.png "ISCSI Extents Add Fibre")

| Name | Description |
|------|-------------|
| Name | Name of the extent. If the Extent size is not 0, it cannot be an existing file within the pool or dataset. |
| Description | Notes about this extent. |
| Enabled | Set to enable the iSCSI extent. |
| Extent Type | Device provides virtual storage access to zvols, zvol snapshots, or physical devices. File provides virtual storage access to a single file. |
| Device | Only appears if Device is selected. Select the unformatted disk, controller, or zvol snapshot. |
| Logical Block Size | Leave at the default of 512 unless the initiator requires a different block size. |
| Disable Physical Block Size Reporting | Set if the initiator does not support physical block size values over 4K (MS SQL). |
| Enable TPC | Set to allow an initiator to bypass normal access control and access any scannable target. This allows xcopy operations which are otherwise blocked by access control. |
| Xen initiator compat mode | Set when using Xen as the iSCSI initiator. |
| LUN RPM | Do NOT change this setting when using Windows as the initiator. Only needs to be changed in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| Read-only | Set to prevent the initiator from initializing this LUN. |

{{< /tab >}}
{{< tab "Associated Targets" >}}
*Add* a new Associated Target.

![ISCSIAssocTargetAddFibre](/images/CORE/12.0/ISCSIAssocTargetAddFibre.png "ISCSI Assoc Target: Add Fibre")

Select values for *Target* and *Extent*.  The LUN ID is  a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID.
{{< /tab >}}
{{< tab "Fibre Channel Ports" >}}
Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand the option, select options as presented under test data, and *Save*.
{{< /tab >}}
{{< /tabs >}}

The iSCSI share does not work when the service is not turned on.
To turn on the iSCSI service, go to **Services** and toggle **iSCSI**.

## NPIV (N_Port ID Virtualization)

NPIV allows the administrator to use switch zoning to configure each virtual port as if it was a physical port in order to provide access control.
This is important in an environment with a mix of Windows systems and virtual machines in order to prevent automatic or accidental reformatting of targets containing unrecognized filesystems.
It can also be used to segregate data; for example, to prevent the engineering department from accessing data from the human resources department.
Refer to the switch documentation for details on how to configure zoning of virtual ports.

To create virtual ports on the TrueNAS system, go to **System > Tunables** and click *ADD*.
Enter these options:

* *Variable* : `input hint.isp.X.vports`, replacing *X* with the number of the physical interface.
* *Value* : input the number of virtual ports to create. There cannot be more than *125* SCSI target ports, including all physical Fibre Channel ports, all virtual ports, and all configured combinations of iSCSI portals and targets.
* *Type* : make sure *loader* is selected.

![SystemTunablesFibre](/images/CORE/11.3/SystemTunablesFibre.png "Virtual Ports for Fibre Channel")

In the example shown, two physical interfaces were each assigned *4* virtual ports.
Two tunables were required, one for each physical interface.
After the tunables are created, the configured number of virtual ports appears in **Sharing > Block Shares (iSCSI) > Fibre Channel Ports** screen so they can be associated with targets.
They are also advertised to the switch so zoning can be configured on the switch.

After a virtual port has been associated with a target, it is added to the *Target* tab of [Reporting]({{< relref "/CORE/Administration/Reporting.md" >}}) where its bandwidth usage can be viewed.
{{< /expand >}}
{{< /tab >}}

{{< tab "Windows (SMB) Shares" >}}
SMB (also known as CIFS) is the native file sharing system in Windows.
SMB shares can connect to any major operating system, including Windows, MacOS, and Linux.
SMB can be used in TrueNAS to share files among single or multiple users or devices.

SMB shares allow a wide range of permissions and security settings, and can support advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for the management and administration of large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
There are multiple versions of the SMB protocol. An SMB client will typically negotiate the highest supported SMB protocol during SMB session negotiation. Industry-wide, the usage of the SMB1 protocol (sometimes referred to as NT1) is in the [process of being deprecated]({{< relref "SMB1Advisory.md" >}}). This deprecation is for security reasons.
However, most SMB clients support SMB 2 or 3 protocols, even when they are not the default protocols.

{{< hint info >}}
Legacy SMB clients rely on NetBIOS Name Resolution to discover SMB servers on a network. The NetBIOS Name Server (nmbd) is disabled by default in TrueNAS. It can be enabled in **Network > Global Configuration** if this functionality is required.

MacOS clients use mDNS to discover the the presence of SMB servers on the network. The mDNS server (avahi) is enabled by default on TrueNAS.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but depending on the version of the Windows client, network discovery can be disabled by default.

Discoverability through broadcast protocols is a convenience feature and not required to access a SMB server.
{{< /hint >}}

## First Steps

### Create a Dataset

It is recommended to create a new dataset and set the *Share Type* to *SMB* for the new SMB share.
{{< expand "What does this do?" "v" >}}
The ZFS dataset is created with these settings:

 * *aclmode* = "restricted"
 * *case sensitivity* = "insensitive"

 A default Access Control List is also applied to the dataset.
 This default ACL is restrictive and only allows access to the dataset owner and group.
 This ACL can be modified later according to your use case.
{{< /expand >}}

### Create Local User Accounts

By default, all new local users are members of a built in SMB group called *builtin users*. This group can be used to grant access to all local users on the server. Additional [groups]({{< relref "Groups.md" >}}) can be used to fine-tune permissions to large numbers of users. User accounts built-in to TrueNAS or that do not have the *smb* flag set cannot be used for SMB access.
{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Although anonymous or guest access to the share is possible, this is a security vulnerability and is being deprecated by the major SMB client vendors. This partly because signing and encryption are not possible for guest sessions.
{{< /expand >}}
{{< expand "What about LDAP users?" "v" >}}
When LDAP has been configured and you want users from the LDAP server to have access the SMB share, go to **Directory Services > LDAP > ADVANCED MODE** and set *Samba Schema*. However, local TrueNAS user accounts will no longer have access to the share.
{{< /expand >}}

### Tune the Dataset ACL

After a dataset and accounts are created, you will need to investigate your access requirements and adjust the dataset ACL to match. To edit the ACL, go to **Storage > Pools**, open the options for the new dataset, and click *Edit Permissions*.
Many home users typically add a new entry that grants *FULL_CONTROL* to the *builtin_users* group with the flags set to *INHERIT*.
See the [Permissions article]({{< relref "Permissions.md" >}}) for more details.

## Creating the SMB Share

To create a Windows SMB share, go to **Sharing > Windows Shares (SMB)** and click **ADD**.

![SMBShareAdd](/images/CORE/12.0/SharingSMBAdd.png "Basic SMB Share Options")

The **Path** and **Name** of the SMB share define the absolute minimum amount of information required to create a new SMB share. The *Path* is the directory tree on the local filesystem that will be exported over the SMB protocol, and the *Name* is the name of the SMB share, which forms a part of the "full share pathname" when SMB clients perform an SMB tree connect. Because of the way that the *Name* is used in the SMB protocol, it must be less than or equal to 80 characters in length, and must not contain any invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If a *Name* is not supplied, then the last component of the *Path* will be used as the share name.

You can set a share *Purpose* to apply and lock pre-defined advanced options for the share.
To retain full control over all the share *Advanced Options*, choose *No presets*.

{{< expand "What do all the presets do?" "v" >}}
The following table shows the preset options for the different *Purposes* and if those options are locked.      
A <i class="material-icons" aria-hidden="true" title="System Update">check_box</i> indicates the option is enabled while <i class="material-icons" aria-hidden="true" title="System Update">check_box_outline_blank</i> means the option is disabled. [ ] indicates empty text fields, and [%U] indicates the exact option the preset created.

| Setting                            | Default share parameters                                                          | Multi-user time machine                                                   | Multi-protocol (NFSv3/SMB) shares                                                 | Private SMB Datasets and Shares                                          | Files become readonly of SMB after 5 minutes                             |
|------------------------------------|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Enable ACL                         | <i class="material-icons" aria-hidden="true">check_box</i> (locked)               | <i class="material-icons" aria-hidden="true">check_box</i>                | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Export Read Only                   | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Browsable to Network Clients       | <i class="material-icons" aria-hidden="true">check_box</i> (locked)               | <i class="material-icons" aria-hidden="true">check_box</i>                | <i class="material-icons" aria-hidden="true">check_box</i>                        | <i class="material-icons" aria-hidden="true">check_box</i>               | <i class="material-icons" aria-hidden="true">check_box</i>               |
| Allow Guest Access                 | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Access Based Share Enumeration     | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Hosts Allow                        | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Hosts Deny                         | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Use as Home Share                  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Time Machine                       | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Enable Shadow Copies               | <i class="material-icons" aria-hidden="true">check_box</i> (locked)               | <i class="material-icons" aria-hidden="true">check_box</i>                | <i class="material-icons" aria-hidden="true">check_box</i>                        | <i class="material-icons" aria-hidden="true">check_box</i>               | <i class="material-icons" aria-hidden="true">check_box</i>               |
| Export Recycle Bin                 | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Use Apple-style Character Encoding | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box</i>                        | <i class="material-icons" aria-hidden="true">check_box</i>               | <i class="material-icons" aria-hidden="true">check_box</i>               |
| Enable Alternate Data Streams      | <i class="material-icons" aria-hidden="true">check_box</i> (locked)               | <i class="material-icons" aria-hidden="true">check_box</i>                | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Enable SMB2/3 Durable Handles      | <i class="material-icons" aria-hidden="true">check_box</i> (locked)               | <i class="material-icons" aria-hidden="true">check_box</i>                | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Enable FSRVP                       | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> (locked) | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>  | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i>          | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> | <i class="material-icons" aria-hidden="true">check_box_outline_blank</i> |
| Path Suffix                        | [ ] (locked)                                                                      | [%U] (locked)                                                             | [%U]                                                                              | [%U] (locked)                                                            | [ ] (locked)                                                             |
| Auxiliary Parameters               | [ ]                                                                               | [ ]                                                                       | [ ]                                                                               | [ ]                                                                      | [ ]                                                                      |
{{< /expand >}}

An optional *Description* can be specified to help explain the purpose of the share.

**Enabled** allows this path to be shared when the SMB service is activated.
Unsetting **Enabled** disables the share without deleting the configuration.

{{< expand "Advanced Options" "v" >}}
![SharingSMBAddAdvancedSCALE](/images/SCALE/SharingSMBAddAdvancedSCALE.png "SMB Share Advanced Options")

Options are divided into **Access** and **Other Options** groups.
*Access* options control various settings for allowing systems or users to access or modify the shared data.

| Setting                        | Description  |
|--------------------------------|--------------|
| Enable ACL                     | Enable ACL support for the SMB share. |
| Export Read Only               | Prohibits writes to the share. |
| Browsable to Network Clients   | Determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting.
| Allow Guest Access             | Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients.<br><br> *MacOS clients*: Attempting to connect as a user that does not exist in FreeNAS *does not* automatically connect as the guest account. The *Connect As: Guest* option must be specifically chosen in MacOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
| Access Based Share Enumeration | Restrict share visibility to users with read or write access to the share. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
| Hosts Allow                    | Enter a list of allowed hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. A more detailed description with examples can be found [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
| Hosts Deny                     | Enter a list of denied hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. |

The **Hosts Allow** and **Hosts Deny** fields work together to produce different situations:
* If neither *Hosts Allow* or *Hosts Deny* contains an entry, then SMB share access is allowed for any host.
* If there is a *Hosts Allow* list but no *Hosts Deny* list, then only allow hosts on the *Hosts Allow* list.
* If there is a *Hosts Deny* list but no *Hosts Allow* list, then allow all hosts that are not on the *Hosts Deny* list.
* If there is both a *Hosts Allow* and *Hosts Deny* list, then allow all hosts that are on the *Hosts Allow* list. If there is a host not on the *Hosts Allow* and not on the *Hosts Deny* list, then allow it.

The *Other Options* have settings for improving Apple software compatibility, ZFS snapshot features, and other advanced features.

| Setting                            | Description  |
|------------------------------------|--------------|
| Use as Home Share                  | Allows the share to host user home directories. Each user is given a personal home directory when connecting to the share which is not accessible by other users. This allows for a personal, dynamic share. Only one share can be used as the home share. See the configuring [Home Share article]({{< relref "HomeShare.md" >}}) for detailed instructions. |
| Time Machine                       | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. |
| Legacy AFP Compatibility           | This controls how the SMB share reads and writes data. Leave unset for the share to behave like a normal SMB share and set for the share to behave like the deprecated Apple Filing Protocol (AFP). This should only be set when this share originated as an AFP sharing configuration. This is not required for pure SMB shares or MacOS SMB clients. |
| Enable Shadow Copies               | Export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| Export Recycle Bin                 | Files that are deleted from the same dataset are moved to the Recycle Bin and do not take any additional space. **Deleting files over NFS will remove the files permanently.** When the files are in a different dataset or a child dataset, they are copied to the dataset where the Recycle Bin is located. To prevent excessive space usage, files larger than *20 MiB* are deleted rather than moved. Adjust the **Auxiliary Parameter** `crossrename:sizelimit=` setting to allow larger files. For example, <code>crossrename:sizelimit=<i>50</i></code> allows moves of files up to *50 MiB* in size. This means files can be permanently deleted or moved from the recycle bin. **This is not a replacement for ZFS snapshots.** |
| Use Apple-style Character Encoding | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option converts NTFS illegal characters in the same manner as MacOS SMB clients. |
| Enable Alternate Data Streams      | Allows multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes MacOS to write streams to files on the filesystem. |
| Enable SMB2/3 Durable Handles      | Allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| Enable FSRVP                       | Enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows Remote Procedure Call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mountpoint. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| Path Suffix                        | Appends a suffix to the share connection path. This is used to provide unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| Auxiliary Parameters               | Additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |
{{< /expand >}}

Clicking *Save* creates the share and adds it to the **Shares >** *Windows (SMB) Shares* list.
You can also choose to enable the SMB service at this time.

## Share Management

After creating the SMB share, additional management options are available by going to the **Shares** screen and clicking <i class="material-icons" aria-hidden="true">open_in_new</i> in the *Windows (SMB) Shares* window. Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> next to the share you want to manage.

* **Edit**: Opens the [share creation screen](#creating-the-smb-share) to reconfigure the share or disable it.
* **Edit Share ACL**: Opens a screen to configure an Access Control List (ACL) for the share. This is separate from filesystem permissions, and applies at the level of the entire SMB share. Permissions defined here are not interpreted by clients of other filesharing protocols or other SMB shares that export the same share *Path*. The default is open. This ACL is used to determine the browse list if *Access Based Share Enumeration* is enabled.
* **Edit Filesystem ACL**: Opens a screen to configure an Access Control List (ACL) for the path defined in the share **Path**.
* **Delete**: Remove the share configuration from TrueNAS. Data that was being shared is unaffected.

### Configure Share ACL

To see the share ACL options, select *Edit Share ACL*.

![SharingSMBShareACLSCALE](/images/SCALE/SharingSMBShareACLSCALE.png "Share ACL Options")

The *Share Name* is shown, but cannot be changed.
*ACL Entries* are listed as a block of settings.
Click *Add* to register a new entry.

| Setting    | Description  |
|------------|--------------|
| SID        | Who this ACL entry (ACE) applies to, shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). Either a *SID* or a *Domain* with *Name* is required for the ACL. |
| Domain     | Domain for the user *Name*. Required when a **SID** is not entered. Local users have the SMB server NetBIOS name: *truenas\\smbusers*.
| Permission | Predefined permission combinations.<br>*Read*: Read access and Execute permission on the object (RX).<br>*Change*: Read access, Execute permission, Write access, and Delete object (RXWD).<br>*Full*: Read access, Execute permission, Write access, Delete object, change Permissions, and take Ownership (RXWDPO).<br><br>For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html). |
| Name       | Who this ACL entry applies to, shown as a user name. Requires adding the user **Domain**. |
| Type       | How permissions are applied to the share. *Allowed* denies all permissions by default except those that are manually defined. *Denied* allows all permissions by default except those that are manually defined. |

Clicking *Save* stores the share ACL and applies it to the share immediately.

### Configure Filesystem ACL

Selecting *Edit Filesystem ACL* will take you to the *Edit File ACL* screen in **Storage** to edit the dataset ACL.

Since SCALE gives users the option to use either POSIX or NFSv4 share [ACL types]({{< relref "ACLPrimer.md" >}}), the *Edit File ACL* page will differ depending on which ACL type the filesystem is using.

{{< expand "NFSv4 Filesystem ACL" "v" >}}
![DatasetACLEditNFSv4](/images/SCALE/DatasetACLEditNFSv4.png "NFSv4 Dataset Permissions Options")

The filesystem ACL defines the user accounts or groups that own or have specific [permissions]({{< relref "PermissionsSCALE.md" >}}) to the dataset that is being shared.
The *User* and *Group* values show which accounts "own", or have full permissions to the dataset.
Change the default settings to your preferred primary account and group and set the *Apply permissions recursively* check box before saving any changes.

#### ACL Presets

To rewrite the current ACL with a standardized preset, click *Use ACL Preset* and choose an option:

**NFS4_OPEN**: *Owner* and *group* have full dataset control. All other accounts can modify the dataset contents.  
**NFS4_RESTRICTED**: *Owner* has full dataset control. *Group* can modify the dataset contents.
**NFS4_HOME**: *Owner* has full dataset control. *Group* can modify the dataset contents. All other accounts can navigate the dataset.

#### Adding ACL Entries (ACEs)

To define permissions for a specific user account or group, click *Add Item*.
Open the *Who* drop down, select *User* or *Group*, and choose a specific *User* or *Group* account.
Define how the settings are applied to the account then choose which permissions to apply to that account.
For example, to only allow the *newuser* user permission to view dataset contents but not make changes, set the *ACL Type* to *Allow* and *Permissions* to *Read*.

![ExampleACENFSv4](/images/SCALE/ExampleACENFSv4.png "Sample ACE")
{{< /expand >}}

{{< expand "POSIX Filesystem ACL" "v" >}}
![DatasetACLEditPOSIX](/images/SCALE/DatasetACLEditPOSIX.png "POSIX Dataset Permissions Options")

The filesystem ACL defines the user accounts or groups that own or have specific [permissions]({{< relref "PermissionsSCALE.md" >}}) to the dataset that is being shared.
The *User* and *Group* values show which accounts "own", or have full permissions to the dataset.
Change the default settings to your preferred primary account and group and set the *Apply permissions recursively* check box before saving any changes.

#### ACL Presets

To rewrite the current ACL with a standardized preset, click *Use ACL Preset* and choose an option:

**POSIX_OPEN**: *Owner* and *group* have full dataset control. All other accounts can modify the dataset contents.  
**POSIX_RESTRICTED**: *Owner* has full dataset control. *Group* can modify the dataset contents.
**POSIX_HOME**: *Owner* has full dataset control. *Group* can modify the dataset contents. All other accounts can navigate the dataset.

#### Adding ACL Entries (ACEs)

To define permissions for a specific user account or group, click *Add Item*.
Open the *Who* drop down, select *User* or *Group*, and choose a specific *User* or *Group* account.
Define how the settings are applied to the account then choose which permissions to apply to that account.
For example, to only allow the *newuser* user permission to view dataset contents but not make changes, set the *ACL Type* to *Allow* and *Permissions* to *Read*.

![ExampleACEPOSIX](/images/SCALE/ExampleACEPOSIX.png "Sample ACE")
{{< /expand >}}

## Activate the SMB Service

Connecting to an SMB share does not work when the related system service is not activated.
To make SMB share available on the network, go to **System Settings > Services** and click the toggle for *SMB*.
If you want the service to activate whenever TrueNAS boots, set *Start Automatically*.

### Service Configuration

The SMB service is configured by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Unless a specific setting is needed or configuring for a specific network environment, it is recommended to use the default settings for the SMB service.

![SMBServiceOptionsSCALE](/images/SCALE/SMBServiceOptionsSCALE.png "SMB Service Options")

| Setting             | Description  |
|---------------------|--------------|
| NetBIOS Name        | Automatically populated with the original hostname of the system. This name is limited to 15 characters and cannot be the *Workgroup* name. |
| NetBIOS Alias       | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| Workgroup           | Must match the Windows workgroup name. When this is unconfigured and Active Directory or LDAP are active, TrueNAS will detect and set the correct workgroup from these services. |
| Description         | This allows entering any notes or descriptive details about the service configuration. |
| Enable SMB1 support | Allow legacy SMB1 clients to connect to the server. Note that SMB1 is being deprecated and it is advised to upgrade clients to operating system versions that support modern versions of the SMB protocol. |
| NTLMv1 Auth         | When set, [smbd](https://www.samba.org/samba/docs/current/man-html/smbd.8.html) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. This setting allows backward compatibility with older versions of Windows, but is not recommended and should not be used on untrusted networks. |

{{< expand "Advanced Options" "v" >}}
![SMBServiceAdvancedSCALE](/images/SCALE/SMBServiceAdvancedSCALE.png "Advanced Options for the SMB Service")

| Setting                                 | Description  |
|-----------------------------------------|--------------|
| UNIX Charset                            | Character set used internally. *UTF-8* is standard for most systems as it supports all characters in all languages. |
| Log Level                               | Record SMB service messages up to the specified log level. By default, error and warning level messages are logged. It is not recommended to use a log level above MINIMUM for production servers. |
| Use Syslog Only                         | Set to log authentication failures in */var/log/messages* instead of the default */var/log/samba4/log.smbd*. |
| Local Master                            | Set to determine if the system participates in a browser election. Unset when the network contains an AD or LDAP server, or when Vista or Windows 7 machines are present. |
| Enable Apple SMB2/3 Protocol Extensions | These [protocol extensions](https://support.apple.com/en-us/HT210803) can be used by macOS to improve the performance and behavioral characteristics of SMB shares. This is required for Time Machine support. |
| Administrators Group                    | Members of this group are local administrators and automatically have privileges to take ownership of any file in an SMB share, reset permissions, and administer the SMB server through the Computer Management MMC snap-in. |
| Guest Account                           | Account used for guest access. Default is *nobody*. The chosen account is required to have permissions to the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL), add a new entry for the chosen guest account, and configure the permissions in that entry. If the selected **Guest Account** is deleted the field resets to *nobody*. |
| File Mask                               | Overrides default *0666* file creation mask which creates files with read and write access for everybody. |
| Directory Mask                          | Overrides default directory creation mask of *0777* which grants directory read, write and execute access for everybody. |
| Bind IP Addresses                       | Static IP addresses which SMB listens on for connections. Leaving all unselected defaults to listening on all active interfaces.
| Auxiliary Parameters                    | Stores additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html). Auxiliary parameters may be used to override the default SMB server configuration, but such changes may adversely affect SMB server stability or behavior. |
{{< /expand >}}

## Mounting SMB Share on another machine.

{{< expand "Linux" "v" >}}
Verify that the required CIFS packages are installed for your distribution of Linux.
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`.

If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.
{{< /expand >}}

{{< expand "Windows" "v" >}}
To mount the SMB share to a drive letter on windows, open the command line and run the following command with the appropiate drive letter, computer name, and share name.

```net use Z: \\computer_name\share_name /PERSISTENT:YES```
{{< /expand >}}

{{< expand "Apple" "v" >}}
Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`.

Input the username and password for the user assigned to that pool or Guest if Guest access is enabled on the share.
{{< /expand >}}

{{< expand "FreeBSD" "v" >}}
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share`.
{{< /expand >}}
{{< /tab >}}

{{< tab "UNIX (NFS) Shares" >}}
Creating a Network File System (NFS) share on TrueNAS gives the benefit of making lots of data easily available for anyone with share access.
Depending how the share is configured, users accessing the share can be restricted to read or write privileges.

{{< include file="static/includes/General/SharingPrereqs.md.part" markdown="true" >}}

## Creating an NFS Share

Go to **Shares >** *Unix (NFS) Shares* and click *Add*.

![SharingNFSAddSCALE](/images/SCALE/SharingNFSAddSCALE.png "Services NFS Add")

Use the file browser to select the dataset to be shared.
An optional *Description* can be entered to help identify the share.
Clicking *Save* creates the share.
At the time of creation, you can select *Enable Service* for the service to start and to automatically start after any reboots.
If you wish to create the share but not immediately enable it, select *Cancel*.

### NFS Share Settings

| Setting | Description |
|---------|---------------|
| Path | Type or browse to the full path to the pool or dataset to share. Click *Add* to configure multiple paths. |
| Description | Enter any notes or reminders about the share.   |
| Enabled | Enable this NFS share. Unset to disable this NFS share without deleting the configuration. |
| Add networks | Enter an allowed network in network/mask CIDR notation. Click *Add* to define another authorized network. Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. |
| Add hosts | Enter a hostname or IP address to allow that system access to the NFS share. Click *Add* to define another allowed system. Defining authorized systems restricts access to all other systems. Leave field empty to allow all systems access to the share. |

{{< expand "Advanced Options" "v" >}}
Opening the *Advanced Options* allows tuning the share access permissions and defining authorized networks.

![SharingNFSAdvancedSCALE](/images/SCALE/SharingNFSAdvancedSCALE.png "Advanced NFS Share Options")

| Setting | Value | Description |
|---------|-------|-------------|
| Read Only | checkbox | Prohibits writing to the share when set. |
| Maproot User | string or drop down | Select a user to apply that user's permissions to the *root* user. |
| Maproot Group | string or drop down | Select a group to apply that group's permissions to the *root* user. |
| Mapall User | string or drop down | Permissions for the chosen user applied to all clients. |
| Mapall Group | string or drop down | Permissions for the chosen group are applied to all clients. |
{{< /expand >}}

To edit an existing NFS share, go to **Shares >** *Unix Shares (NFS)* and click the share you want to edit.
The options available are identical to the share creation options.

## Configure the NFS Service

To begin sharing the data, go to **System Settings > Services** and click the *NFS* toggle.
If you want NFS sharing to activate immediately after TrueNAS boots, set *Start Automatically*.

NFS service settings can be configured by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesNFSOptionsSCALE](/images/SCALE/ServicesNFSOptionsSCALE.png "Services NFS Options")

| Setting                           | Description |
|-----------------------------------|-------------|
| Bind IP Addresses                 | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| Enable NFSv4                      | Set to switch from NFSv3 to NFSv4.  |
| NFSv3 ownership model for NFSv4   | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| Require Kerberos for NFSv4        | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |
| Serve UDP NFS clients             | Set if NFS clients need to use the User Datagram Protocol (UDP). |
| Support >16 groups                | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| mountd(8) bind port               | Enter a number to bind [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) only to that port. |
| rpc.statd(8) bind port            | Enter a number to bind [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) only to that port. |
| rpc.lockd(8) bind port            | Enter a number to bind [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) only to that port. |

Unless a specific setting is needed, it is recommended to use the default settings for the NFS service.
When TrueNAS is already connected to [Active Directory]({{< relref "ActiveDirectorySCALE.md" >}}), setting *NFSv4* and *Require Kerberos for NFSv4* also requires a [Kerberos Keytab]({{< relref "KerberosSCALE.md#kerberos-keytabs" >}}). 

## Connecting to the NFS Share

Although you can connect to an NFS share with various operating systems, it is recommended to use a Linux/Unix operating system.
First, download the `nfs-common` kernel module.
This can be done using the package manager of the installed distribution.
For example, on Ubuntu/Debian, enter `sudo apt-get install nfs-common` in the terminal.

After installing the module, connect to an NFS share by entering `sudo mount -t nfs {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`.
In the above example, *{IPaddressOfTrueNASsystem}* is the IP address of the remote TrueNAS system that contains the NFS share, *{path/to/nfsShare}* is the path to the NFS share on the TrueNAS system, and *{localMountPoint}* is a local directory on the host system configured for the mounted NFS share.
For example, `sudo mount -t nfs 10.239.15.110:/mnt/Pool1/NFS_Share /mnt` will mount the NFS share *NFS_Share* to the local directory `/mnt`.

By default, anyone that connects to the NFS share only has *read* permission.
To change the default permissions, edit the share, open the *Advanced Options*, and change the *Access* settings.

{{< hint warning >}}
ESXI 6.7 or later is required for read/write functionality with NFSv4 shares.
{{< /hint >}}
{{< /tab >}}

{{< tab "WebDAV" >}}
A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy to share a TrueNAS dataset and its contents over the web.
{{< include file="static/includes/General/SharingPrereqs.md.part" markdown="true" >}}

## Share Configuration

Go to **Shares >** *WebDAV Shares* and click *Add*.

![SharingWebdavAddSCALE](/images/SCALE/SharingWebdavAddSCALE.png "Creating a WebDAV Share")

Enter a share *Name* and use the file browser to select the dataset to be shared.
An optional *Description* helps to identify the share.
To prevent user accounts from modifying the shared data, set *Read Only*.

By default, *Change User & Group Ownership* is set.
This changes existing ownership of *ALL* files in the share to the *webdav* user and group accounts.
The default simplifies WebDAV share permission, but is unexpected, so the web interface shows a warning:

![SharingWebdavAddWarningSCALE](/images/SCALE/SharingWebdavAddWarningSCALE.png "Services Webdav Add Warning")

This warning does not show when *Change User & Group Ownsership* is unset.
In that situation, shared file ownership must be manually set to the *webdav* or *www* user and group accounts.

By default, the new WebDAV share is immediately active.
To create the share but not immediately activate it, unset *Enable*.
Click *SUBMIT* to create the share.

## Service Activation

Creating a share immediately opens a dialog to activate the WebDAV service.
To later enable or disable the WebDAV system service, go to **System Settings > Services** and toggle *WebDAV*.
To automatically start the service when TrueNAS boots, set *Start Automatically*.
Click <i class="material-icons" aria-hidden="true" title="edit">edit</i> to change the service settings.

![WebDAVServiceOptionsSCALE](/images/SCALE/WebDAVServiceOptionsSCALE.png "WebDAV Service Options")

For better data security, set the *Protocol* to *HTTPS*.
This requires choosing an SSL certificate, but the *freenas_default* certificate is always available.
All of the *Protocol* options require defining a *Port* number.
Make sure the WebDAV service port is not already used on the network.

To prevent unauthorized access to the shared data, set the *HTTP Authentication* to either *Basic* or *Digest* and create a new *Webdav Password*.

Be sure to click *Save* after making any changes.

## Connecting to the WebDAV Share

WebDAV shared data is accessible from a web browser.
To see the shared data, open a new browser tab and enter `{PROTOCOL}://{TRUENASIP}:{PORT}/{SHAREPATH}`.
Replace the elements in curly brackets `{}` with your chosen settings from the WebDAV share and service.
Example: `https://10.2.1.1:8081/newdataset`

When the *Authentication* WebDAV service option is set to either *Basic* or *Digest*, a user name and password is required.
Enter the user name *webdav* and the password defined in the WebDAV service.
{{< /tab >}}
{{< /tabs >}}

{{< tabs tabTotal="3" tabID="1" tabName1="Tab 1" tabName2="Tab 2" tabName3="Tab 3" >}}
{{< tab tabNum="1" >}}
{{< tabs tabTotal="3" tabID="1" tabName1="Tab 1" tabName2="Tab 2" tabName3="Tab 3" >}}
{{< tab tabNum="1" >}}
**Tab 1 Content**
{{< /tab >}}

{{< tab tabNum="2" >}}
**Tab 2 Content**
{{< /tab >}}

{{< tab tabNum="3" >}}
**Tab 3 Content**
{{< /tab >}}
{{< /tabs >}}
{{< /tab >}}

{{< tab tabNum="2" >}}
**Tab 2 Content**
{{< /tab >}}

{{< tab tabNum="3" >}}
**Tab 3 Content**
{{< /tab >}}
{{< /tabs >}}
