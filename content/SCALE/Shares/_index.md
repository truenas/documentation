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

## Quick iSCSI Target Creation


{{< /tab >}}

{{< tab "Windows (SMB) Shares" >}}
{{< /tab >}}

{{< tab "UNIX (NFS) Shares" >}}
{{< /tab >}}

{{< tab "WebDAV" >}}
{{< /tab >}}
{{< /tabs >}}
## iSCSI Background

