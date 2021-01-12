---
title: "Interface Fields Reference Guide: Sharing"
linkTitle: "Sharing"
description: "Descriptions of each field in the Sharing section of the TrueNAS web interface."
weight: 80
tags: ["reference", "AFP", "FTP/SFTP/TFTP", "iSCSI", "NFS", "SMB", "webdav"]
---

## AFP Add

**General Options**

| | |
|-|-|
| Path | Browse to the pool or dataset to share. Netatalk does not fully support nesting additional pools, datasets, or symbolic links beneath this path. |
| Name | The pool name that appears in the connect to server dialog of the computer. |
| Time Machine | Set to advertise FreeNAS as a Time Machine disk so it can be found by Macs. Setting multiple shares for Time Machine use is not recommended. When multiple Macs share the same pool, low disk space issues and intermittently failed backups can occur. |
| Use as Home Share | Set to allow the share to host user home directories. Only one share can be the home share. |
| Enabled | Enable this AFP share. Unset to disable this AFP share without deleting it. |

**Advanced Permissions**

| | |
|-|-|
| Default Umask | Umask is used for newly created files. Default is 000 (anyone can read, write, and execute). |
| File Permissions | Only works with Unix ACLs. New files created on the share are set with the selected permissions. |
| Directory Permissions | Only works with Unix ACLs. New directories created on the share are set with the selected permissions. |
| AFP3 Unix Privs | Only works with Unix ACLs. New directories created on the share are set with the selected permissions. |
| Allow | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will deny any user or group that is not specified. |
| Read Only | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will deny any user or group that is not specified. |
| Allow Hosts | Allow hostnames or IP addresses to connect to the share. Click ADD to add multiple entries.  If neither *Allow Hosts* or *Deny Hosts* contains an entry, then AFP share access is allowed for any host.  If there is a *Allow Hosts* list but no *Deny Hosts* list, then only allow hosts on the *Allow Hosts* list.  If there is a *Deny Hosts* list but no *Allow Hosts* list, then allow all hosts that are not on the *Deny Hosts* list.  If there is both a *Allow Hosts* and *Deny Hosts* list, then allow all hosts that are on the *Allow Hosts* list.  If there is a host not on the *Allow Hosts* and not on the *Deny Hosts* list, then allow it. |
| Deny | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will allow any user or group that is not specified. |
| Read/Write | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will allow any user or group that is not specified. |
| Deny Hosts | Deny hostnames or IP addresses access to the share. Click ADD to add multiple entries.  If neither *Allow Hosts* or *Deny Hosts* contains an entry, then AFP share access is allowed for any host.  If there is a *Allow Hosts* list but no *Deny Hosts* list, then only allow hosts on the *Allow Hosts* list.  If there is a *Deny Hosts* list but no *Allow Hosts* list, then allow all hosts that are not on the *Deny Hosts* list.  If there is both a *Allow Hosts* and *Deny Hosts* list, then allow all hosts that are on the *Allow Hosts* list.  If there is a host not on the *Allow Hosts* and not on the *Deny Hosts* list, then allow it. |

**Other Options**

| | |
|-|-|
| Descriptions | Optional description. |
| Zero Device Number | Enable when the device number is inconstant across a reboot. |
| No Stat | If set, AFP does not stat the pool path when enumerating the pools list. This is useful for automounting or pools created by a preexec script. |
| Auxillary Parameters | Additional [afp.conf](http://netatalk.sourceforge.net/3.1/htmldocs/afp.conf.5.html) parameters not covered by other option fields. |

## iSCSI

**Target Global Configuration**

| | |
|-|-|
| Base Name | Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the iqn.format section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| ISNS Servers | Hostnames or IP addresses of the ISNS servers to be registered with the iSCSI targets and portals of the system. Separate entries by pressing Enter. |
| Pool Available Space Threshold | Generate an alert when the pool has this percent space remaining. This is typically configured at the pool level when using zvols or at the extent level for both file and device based extents. |

**Portals**

| | |
|-|-|
| Description | Optional description. Portals are automatically assigned a numeric group. |
| Discovery Authentication Group | iSCSI supports multiple authentication methods that are used by the target to discover valid devices. None allows anonymous discovery while CHAP and Mutual CHAP require authentication. |
| Discovery Authentication Group | Group ID created in Authorized Access. Required when the Discovery Authentication Method is set to CHAP or Mutual CHAP. |
| IP Address | Select the IP addresses to be listened on by the portal. Click ADD to add IP addresses with a different network port. The address 0.0.0.0 can be selected to listen on all IPv4 addresses, or :: to listen on all IPv6 addresses. |
| Port | TCP port used to access the iSCSI target. Default is 3260. |


**Initiators**

| | |
|-|-|
| Connected Initiators | Initiators currently connected to the system. Shown in IQN format with an IP address. Set initiators and click an -> (arrow) to add the initiators to either the Allowed Initiators or Authorized Networks lists. Clicking Refresh updates the Connected Initiators list. |
| Allowed Initiators | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click + to add it to the list. Example: iqn.1994-09.org.freebsd:freenas.local |
| Authorized Networks | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click + to add the network address to the list. Example: 192.168.2.0/24. |
| Description | Any notes about initiators. |

**Authorized**

| | |
|-|-|
| Group ID | Allow different groups to be configured with different authentication profiles. Example: all users with a group ID of 1 will inherit the authentication profile associated with Group 1. |
| User | User account to create for CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| Secret  | User password. Must be at least 12 and no more than 16 characters long. |
| Peer User | Only entered when configuring mutual CHAP. Usually the same value as User. |
| Peer Secret | Mutual secret password. Required when Peer User is set. Must be different than the Secret. |


**Target**

| | |
|-|-|
| Target Name | The base name is automatically prepended if the target name does not start with iqn. Lowercase alphanumeric characters plus dot (.), dash (-), and colon (:) are allowed. See the Constructing iSCSI names using the iqn.format section of [RFC3721](https://tools.ietf.org/html/rfc3721.html). |
| Portal Group ID | Leave empty or select number of existing portal to use. |
| Initiator Group ID | Select which existing initiator group has access to the target. |
| Authentication Method | Choices are None, Auto, CHAP, or Mutual CHAP. |
| Authentication Group Number | Select None or an integer. This value represents the number of existing authorized accesses. |


**Extents**

| | |
|-|-|
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


**Associated Targets**

| | |
|-|-|
| Target | Select an existing target. |
| LUN ID | Select the value or enter a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID. |
| Extent | Select an existing extent. |

## NFS Add

**Basic Options**

| | |
|-|-|
| Path | Full path to the pool or dataset to share. Mandatory. Click ADD ADDITIONAL PATH to configure multiple paths. |
| Description | Set the share name. If left empty, share name is the list of selected Path entries. |
| All Dirs | Set to allow the client to mount any subdirectory within the Path. |
| Quiet | Set to inhibit some syslog diagnostics to avoid error messages. See [exports(5)](https://www.freebsd.org/cgi/man.cgi?query=exports) for examples. |
| Enabled | Enable this NFS share. Unset to disable this NFS share without deleting it. |

**Advanced**

| | |
|-|-|
| Read Only | Set to prohibit writing to the share. |
| Maproot User | When a user is selected, the root user is limited to the permissions of that user. |
| Maproot Group | When a group is selected, the root user is also limited to the permissions of that group. |
| Mapall User | The specified permissions of that user are used by all clients. |
| Mapall Group | The specified permissions of that group are used by all clients. |
| Security |  |
| Authorized Networks | Space-delimited list of allowed networks in network/mask CIDR notation. Example: 1.2.3.0/24. Leave empty to allow all. |
| Authorized Hosts and IP Addresses | Space-delimited list of allowed IP addresses (192.168.1.10) or hostnames (www.freenas.com). Leave empty to allow all. |


## webdav

**Add**

| | |
|-|-|
| Name | Enter a name for the share. |
| Description | Optional. |
| Path | Browse to the pool or dataset to share. |
| Read Only | Set to prohibit users from writing to this share. |
| Change User & Group Ownership | Change existing ownership of ALL files in the share to user webdav and group webdav. If unset, ownership of files to be accessed through WebDAV must be manually set to the webdav or www user/group. |
| Enabled | Enable this WebDAV share. Unset to disable this WebDAV share without deleting it. |

## Windows Shares (SMB)

**General Options**

| | |
|-|-|
| Path | Select pool, dataset, or directory to share. |
|-|-|
| Name | Enter a name for the share. |
| Purpose | Choosing a preset configuration for the share locks in several predetermined values for the share Advanced Options, including the Path Suffix. To see which options have been set and/or locked, click Advanced Options after selecting a Purpose. %U is added as the Path Suffix when a Multi-user, Multi-protocol, or Private Purpose is selected. To retain full control over all the Advanced Options, select No presets. |
| Description | Description of the share or notes on how it is used. |
| Enabled | Enable this SMB share. Unset to disable this SMB share without deleting it. |

**Advanced**

| | |
|-|-|
| Access | Enable ACL support for the SMB share. Disabling ACL support for a share deletes that ACL. |
|-|-|
| Enable ACL | Prohibits writes to this share. |
| Export Read Only | Determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting. |
| Browsable to Network Clients | Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients. |
| Allow Guest Access | MacOS clients: Attempting to connect as a user that does not exist in FreeNAS does not automatically connect as the guest account. The Connect As: Guest option must be specifically chosen in MacOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/) for more details. |
|  | Restrict share visibility to users with read or write access to the share. See the [smb.conf](https://www.freebsd.org/cgi/man.cgi?query=smb.conf) manual page. |
| Access Based Share Enumeration | Enter a list of allowed hostnames or IP addresses. Separate entries by pressing Enter. A more detailed description with examples can be found here. |
| Hosts Allow | If neither *Hosts Allow* or *Hosts Deny* contains an entry, then AFP share access is allowed for any host. If there is a *Hosts Allow* list but no *Hosts Deny* list, then only allow hosts on the *Hosts Allow* list.  If there is a *Hosts Deny* list but no *Hosts Allow* list, then allow all hosts that are not on the *Hosts Deny* list.  If there is both a *Hosts Allow* and *Hosts Deny* list, then allow all hosts that are on the *Hosts Allow* list.  If there is a host not on the *Hosts Allow* and not on the *Hosts Deny* list, then allow it. |
| Hosts Deny | Enter a list of denied hostnames or IP addresses. Separate entries by pressing Enter. If neither *Hosts Allow* or *Hosts Deny* contains an entry, then AFP share access is allowed for any host. If there is a *Hosts Allow* list but no *Hosts Deny* list, then only allow hosts on the *Hosts Allow* list.  If there is a *Hosts Deny* list but no *Hosts Allow* list, then allow all hosts that are not on the *Hosts Deny* list.  If there is both a *Hosts Allow* and *Hosts Deny* list, then allow all hosts that are on the *Hosts Allow* list.  If there is a host not on the *Hosts Allow* and not on the *Hosts Deny* list, then allow it. |



**Other Options**

| | |
|-|-|
| Use as Home Share | Allows the share to host user home directories. Each user is given a personal home directory when connecting to the share which is not accessible by other users. This allows for a personal, dynamic share. Only one share can be used as the home share. |
|-|-|
| Time Machine | Enable Time Machine backups on this share. |
| Enable Shadow Copies | Export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/desktop/vss/shadow-copies-and-shadow-copy-sets) for VSS clients. |
| Export Recycle Bin | Files that are deleted from the same dataset are moved to the Recycle Bin and do not take any additional space. Deleting files over NFS will remove the files permanently . When the files are in a different dataset or a child dataset, they are copied to the dataset where the Recycle Bin is located. To prevent excessive space usage, files larger than 20 MiB are deleted rather than moved. Adjust the Auxiliary Parameter crossrename:sizelimit= setting to allow larger files. For example, crossrename:sizelimit=\{50\} allows moves of files up to 50 MiB in size. This means files can be permanently deleted or moved from the recycle bin. This is not a replacement for ZFS snapshots. |
| Use Apple-Style Character Encoding | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option translates NTFS illegal characters to the Unicode private range. |
| Enable Alternate Data Streams | Allows multiple [NTFS data streams](http://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes MacOS to write streams to files on the filesystem. |
| Enable SMB2/SMB3 Durable Handles | Allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| Enable FSRVP | Enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp)). This protocol allows RPC clients to manage snapshots for a specific SMB share. The share path must be a dataset mountpoint. Snapshots have the prefix fss- followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| Path Suffix | Appends a suffix to the share connection path. This is used to provide unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.freebsd.org/cgi/man.cgi?query=smb.conf) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| Auxillary Parameters | Additional [smb.conf](https://www.freebsd.org/cgi/man.cgi?query=smb.conf) parameters. |

