---
title: "Configuring a Windows SMB share"
description: "How to set up a general purpose Server Message Block (SMB) share."
tags: ["networking","Samba"]
---

SMB (also known as CIFS) is the native file sharing system in Windows.
SMB shares can be connected to any major operating systems including Windows, MacOS, and Linux.
SMB can be used in TrueNAS to share files with one user or device, or many. 

SMB shares allow a wide range of permissions and security settings, and can support advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for the management and administration of large or small pools of data.

TrueNAS uses Samba to provide SMB services.
There are multiple versions of the SMB protocol. An SMB client will typically negotiate the highest supported SMB protocol during SMB session negotiation. Industry-wide the usage of the SMB1 protocol (sometimes referred to as NT1) is in the process of being deprecated. This deprecation is largely due to security reasons, and for this reason most SMB clients support the SMB2/3 protocol even if it is not the default protocol used by the particular SMB client.

Please see the separate [advisory](/hub/sharing/smb/smb1/) for more information about the SMB1 protocol.

{{% alert color="warning" %}}
Legacy SMB clients rely on NetBIOS Name Resolution to discover the presence of SMB servers on the network. The NetBIOS Name Server (nmbd) is disabled by default in TrueNAS, and may be enabled if this functionality is required.
MacOS clients use mDNS to discover the the presence of SMB servers on the network. The mDNS server (avahi) is enabled by default on TrueNAS.
Windows clients use [WS-Discovery](http://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but depending on the version of the Windows client, network discovery may be disabled by default.

Discoverability through broadcast protocols is a convenience feature and is not a requirement to access the SMB server.
{{% /alert %}}

You will need a [dataset](/hub/initial-setup/storage/datasets/) with the data to share stored within it before creating an SMB share.

## Requirements for a new SMB share
1) Create a dataset. Typically, a new dataset should be created when creating a new SMB share. It is recommended to use the *SMB* **Share Type** preset for the ZFS dataset. This will set the ZFS dataset's aclmode property to "restricted", case sensitivity to "insensitive", and apply a default ACL on the newly created dataset. The default ACL is restrictive and will only grant access to the dataset owner and group. Further modification of this default ACL may be required depending on intended usage of the share.

2) Create a user. Although it is possible to grant anonymous or guest access to SMB shares, the support for this is in the process of being deprecated by major vendors of SMB clients. This is in part due to the fact that signing and encryption are not possible for guest sessions. It is therefore recommended to create one or more [user accounts](/hub/initial-setup/security/accounts/users/) for SMB access. By default all new local users are members of a builtin SMB group "builtin users". This group may be used as a simple control point to grant access to all local users on the server. Additional [groups](/hub/initial-setup/security/accounts/groups/) may be created to simplify assigning permissions to large numbers of users.  User accounts that are built-in or do not have the 'smb' flag set may not be used for SMB access.

3) Fine-tune dataset ACL as needed. In most circumstances for home users a reasonable step at this point is to add a new ACL entry to the ACL of the dataset created in (1) above that grants "FULL_CONTROL" to the group "builtin_users" with the flags set to "INHERIT". See the [Permissions article]() for more details about configuring dataset permissions.

{{% alert color="warning" %}}
When LDAP has been configured and you want users from the LDAP server to have access the SMB share, set **Samba Schema** in **Directory Services > LDAP > ADVANCED MODE**.
When **Samba Schema** is enabled, local TrueNAS user accounts cannot be used to connect to the share.
Only user accounts configured on the LDAP server can connect to the share.
{{% /alert %}}

## Creating the SMB Share

To create a Windows SMB share, go to **Sharing > Windows Shares (SMB)** and click **ADD**.

<img src="/images/SharingSMBAdd.png">
<br><br>
The **Path** and **Name** of the SMB share define the absolute minimum amount of information required to create a new SMB share. The *Path* is the directory tree on the local filesystem that will be exported over the SMB protocol, and the *Name* is the name of the SMB share, which forms a part of the "full share pathname" when SMB clients perform an SMB tree connect. Because of the way that the *Name* is used in the SMB protocol, it must be less than or equal to 80 characters in length, and must not contain any invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If a *Name* is not supplied, then the last component of the *Path* will be used as the share name.

You can set a share *Purpose* to apply and lock pre-defined [Advanced Options](#advanced-options) for the share.
To retain full control over all the share *Advanced Options*, choose *No presets*.
The following table shows the preset options for the different *Purposes* and if those options are locked.
An [x] indicates the option is enabled, [ ] means the option is disabled, and [text] indicates a specific value:

| Default share parameters                        | Multi-user time machine                           | Multi-protocol (AFP/SMB) shares                 | Multi-protocol (NFSv3/SMB) shares                 | Private SMB Datasets and Shares                   | Files become readonly of SMB after 5 minutes      |
|:-----------------------------------------------:|---------------------------------------------------|-------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
| [x] Enable ACL (locked)                         | [x] Enable ACL (unlocked)                         | [x] Enable ACL (locked)                         | [ ] Enable ACL (locked)                           | [ ] Enable ACL (unlocked)                         | [ ] Enable ACL (unlocked)                         |
| [ ] Export Read Only (locked)                   | [ ] Export Read Only (unlocked)                   | [ ] Export Read Only (unlocked)                 | [ ] Export Read Only (unlocked)                   | [ ] Export Read Only (unlocked)                   | [ ] Export Read Only (unlocked)                   |
| [x] Browsable to Network Clients (locked)       | [x] Browsable to Network Clients (unlocked)       | [x] Browsable to Network Clients (unlocked)     | [x] Browsable to Network Clients (unlocked)       | [x] Browsable to Network Clients (unlocked)       | [x] Browsable to Network Clients (unlocked)       |
| [ ] Allow Guest Access (unlocked)               | [ ] Allow Guest Access (unlocked)                 | [ ] Allow Guest Access (unlocked)               | [ ] Allow Guest Access (unlocked)                 | [ ] Allow Guest Access (unlocked)                 | [ ] Allow Guest Access (unlocked)                 |
| [ ] Access Based Share Enumeration (locked)     | [ ] Access Based Share Enumeration (unlocked)     | [ ] Access Based Share Enumeration (unlocked)   | [ ] Access Based Share Enumeration (unlocked)     | [ ] Access Based Share Enumeration (unlocked)     | [ ] Access Based Share Enumeration (unlocked)     |
| [ ] Hosts Allow (locked)                        | [ ] Hosts Allow (unlocked)                        | [ ] Hosts Allow (unlocked)                      | [ ] Hosts Allow (unlocked)                        | [ ] Hosts Allow (unlocked)                        | [ ] Hosts Allow (unlocked)                        |
| [ ] Hosts Deny (locked)                         | [ ] Hosts Deny (unlocked)                         | [ ] Hosts Deny (unlocked)                       | [ ] Hosts Deny (unlocked)                         | [ ] Hosts Deny (unlocked)                         | [ ] Hosts Deny (unlocked)                         |
| [ ] Use as Home Share (locked)                  | [ ] Use as Home Share (unlocked)                  | [ ] Use as Home Share (unlocked)                | [ ] Use as Home Share (unlocked)                  | [ ] Use as Home Share (unlocked)                  | [ ] Use as Home Share (unlocked)                  |
| [ ] Time Machine (locked)                       | [ ] Time Machine (unlocked)                       | [ ] Time Machine (unlocked)                     | [ ] Time Machine (unlocked)                       | [ ] Time Machine (unlocked)                       | [ ] Time Machine (unlocked)                       |
| [x] Enable Shadow Copies (locked)               | [x] Enable Shadow Copies (unlocked)               | [x] Enable Shadow Copies (unlocked)             | [x] Enable Shadow Copies (unlocked)               | [x] Enable Shadow Copies (unlocked)               | [x] Enable Shadow Copies (unlocked)               |
| [ ] Export Recycle Bin (locked)                 | [ ] Export Recycle Bin (unlocked)                 | [ ] Export Recycle Bin (unlocked)               | [ ] Export Recycle Bin (unlocked)                 | [ ] Export Recycle Bin (unlocked)                 | [ ] Export Recycle Bin (unlocked)                 |
| [ ] Use Apple-style Character Encoding (locked) | [ ] Use Apple-style Character Encoding (unlocked) | [x] Use Apple-style Character Encoding (locked) | [x] Use Apple-style Character Encoding (unlocked) | [x] Use Apple-style Character Encoding (unlocked) | [x] Use Apple-style Character Encoding (unlocked) |
| [x] Enable Alternate Data Streams (locked)      | [x] Enable Alternate Data Streams (unlocked)      | [x] Enable Alternate Data Streams (locked)      | [ ] Enable Alternate Data Streams (locked)        | [ ] Enable Alternate Data Streams (unlocked)      | [ ] Enable Alternate Data Streams (unlocked)      |
| [x] Enable SMB2/3 Durable Handles (locked)      | [x] Enable SMB2/3 Durable Handles (unlocked)      | [ ] Enable SMB2/3 Durable Handles (locked)      | [ ] Enable SMB2/3 Durable Handles (locked)        | [ ] Enable SMB2/3 Durable Handles (unlocked)      | [ ] Enable SMB2/3 Durable Handles (unlocked)      |
| [ ] Enable FSRVP (locked)                       | [ ] Enable FSRVP (unlocked)                       | [ ] Enable FSRVP (locked)                       | [ ] Enable FSRVP (unlocked)                       | [ ] Enable FSRVP (unlocked)                       | [ ] Enable FSRVP (unlocked)                       |
| [ ] Path Suffix (locked)                        | [%U] Path Suffix (locked)                         | [%U] Path Suffix (unlocked)                     | [%U] Path Suffix (unlocked)                       | [%U] Path Suffix (locked)                         | [ ] Path Suffix (locked)                          |
| [ ] Auxiliary Parameters (unlocked)             | [ ] Auxiliary Parameters (unlocked)               | [ ] Auxiliary Parameters (unlocked)             | [ ] Auxiliary Parameters (unlocked)               | [ ] Auxiliary Parameters (unlocked)               | [ ] Auxiliary Parameters (unlocked)               |

An optional *Description* can be specified to help explain the purpose of the share.

**Enabled** allows this path to be shared when the SMB service is activated.
Unsetting **Enabled** disables the share without deleting the configuration.

### Advanced Options

To fine-tune the share configuration, click **ADVANCED OPTIONS**.

<img src="/images/SharingSMBAddAdvanced.png">
<br><br>

Options are divided into *Access* and *Other Options* groups.
*Access* options control various settings for allowing systems or users to access or modify the shared data.

| Setting                        | Value     | Description  |
|--------------------------------|-----------|--------------|
| Enable ACL                     | checkbox  | Set to add Access Control List (ACL) support to the share. Unsetting disables ACL support and will delete any existing ACL for the share. |
| Export Read Only               | checkbox  | Prohibits writes to the share. Unset to allow writes to the share. |
| Browsable to Network Clients   | checkbox  | Determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting.
| Allow Guest Access             | checkbox  | Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients.<br><br> *MacOS clients*: Attempting to connect as a user that does not exist in FreeNAS *does not* automatically connect as the guest account. The **Connect As:** *Guest* option must be specifically chosen in MacOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
| Access Based Share Enumeration | checkbox  | Setting this restricts share visibility to users with read or write access to the share. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
| Hosts Allow                    | string    | Enter a list of allowed hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. A more detailed description with examples can be found [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
| Hosts Deny                     | string    | Enter a list of denied hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. |

The **Hosts Allow** and **Hosts Deny** fields work together to produce different situations:
* If neither *Hosts Allow* or *Hosts Deny* contains an entry, then SMB share access is allowed for any host.
* If there is a *Hosts Allow* list but no *Hosts Deny* list, then only allow hosts on the *Hosts Allow* list.
* If there is a *Hosts Deny* list but no *Hosts Allow* list, then allow all hosts that are not on the *Hosts Deny* list.
* If there is both a *Hosts Allow* and *Hosts Deny* list, then allow all hosts that are on the *Hosts Allow* list. If there is a host not on the *Hosts Allow* and not on the *Hosts Deny* list, then allow it.

The *Other Options* have settings for improving Apple software compatibility, ZFS snapshot features, and other advanced features.

| Setting                            | Value     | Description  |
|------------------------------------|-----------|--------------|
| Use as Home Share                  | checkbox  | Allows the share to host user home directories. Each user is given a personal home directory when connecting to the share which is not accessible by other users. This allows for a personal, dynamic share. Only one share can be used as the home share. See the configuring [Home Share article](/hub/sharing/smb/homeshare/) for detailed instructions. |
| Time Machine                       | checkbox  | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. |
| Enable Shadow Copies               | checkbox  | Export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| Export Recycle Bin                 | checkbox  | Files that are deleted from the same dataset are moved to the Recycle Bin and do not take any additional space. **Deleting files over NFS will remove the files permanently.** When the files are in a different dataset or a child dataset, they are copied to the dataset where the Recycle Bin is located. To prevent excessive space usage, files larger than *20 MiB* are deleted rather than moved. Adjust the **Auxiliary Parameter** `crossrename:sizelimit=` setting to allow larger files. For example, <code>crossrename:sizelimit=<i>50</i></code> allows moves of files up to *50 MiB* in size. This means files can be permanently deleted or moved from the recycle bin. **This is not a replacement for ZFS snapshots.** |
| Use Apple-style Character Encoding | checkbox  | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option converts NTFS illegal characters in the same manner as MacOS SMB clients. |
| Enable Alternate Data Streams      | checkbox  | Allows multiple [NTFS data streams](http://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes MacOS to write streams to files on the filesystem. |
| Enable SMB2/3 Durable Handles      | checkbox  | Allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| Enable FSRVP                       | checkbox  | Enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows Remote Procedure Call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mountpoint. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| Path Suffix                        | string    | Appends a suffix to the share connection path. This is used to provide unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| Auxiliary Parameters               | string    | Additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |

Clicking **Submit** creates the share and adds it to the **Sharing > Windows Shares (SMB)** list.
You can also choose to enable the SMB service at this time.

### Share Management

After the SMB share is created, additional management options are available by going to **Sharing > Windows Shares (SMB)** and clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a share entry:

* **Edit**: Opens the [share creation screen](#creating-the-smb-share) to reconfigure the share or disable it.
* **Edit Share ACL**: Opens a screen to configure an Access Control List (ACL) for the share. This is separate from filesystem permissions, and applies at the level of the entire SMB share. Permissions defined here are not interpreted by clients of other filesharing protocols or other SMB shares that export the same share *Path*. The default is open. This ACL is used to determine the browse list if *Access Based Share Enumeration* is enabled.
* **Edit Filesystem ACL**: Opens a screen to configure an Access Control List (ACL) for the path defined in the share **Path**.
* **Delete**: Remove the share configuration from TrueNAS. Data that was being shared is unaffected.

### Configure Share ACL

Open the share options (<i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>)&nbsp; and click **Edit Share ACL** to see options for the Share ACL.

<img src="/images/SharingSMBShareACL.png">
<br><br>

The **Share Name** is shown, but cannot be changed.
*ACL Entries* are listed as a block of settings.
To add a new entry, click **ADD**.

| Setting    | Value     | Description  |
|------------|-----------|--------------|
| SID        | string    | Who this ACL entry (ACE) applies to, shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). Either a **SID** or a **Domain** and **Name** is required for the ACL. |
| Domain     | string    | Domain for the user **Name**. Required when a **SID** is not entered. Local users have the SMB server NetBIOS name: `truenas\\smbusers`.
| Permission | drop down | Predefined permission combinations:<br>*Read*: Read access and Execute permission on the object (RX).<br>*Change*: Read access, Execute permission, Write access, and Delete object (RXWD).<br>*Full*: Read access, Execute permission, Write access, Delete object, change Permissions, and take Ownership (RXWDPO).<br><br>For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html). |
| Name       | string    | Who this ACL entry applies to, shown as a user name. Requires adding the user **Domain**. |
| Type       | drop down | How permissions are applied to the share. *Allowed* denies all permissions by default except those that are manually defined. *Denied* allows all permissions by default except those that are manually defined. |

Clicking **SAVE** stores the share ACL and applies it to the share immediately.

### Configure Filesystem ACL

Open the share options (<i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>)&nbsp; and click **Edit Filesystem ACL** to see options for the dataset ACL.

<img src="/images/StoragePoolsEditACL.png">
<br><br>

This ACL is used to define the user accounts or groups that own or have specific permissions to the dataset that is being shared.
The options in this screen are detailed in the [Permissions article]().
This section will outline how to choose a preset ACL and add an ACL entry (ACE) for a specific TrueNAS user account.

The **User** and **Group** values show which accounts "own", or have full permissions to, the dataset.
If you want to change these settings, be sure to set the **Apply** option before saving any changes.

There are some standard ACLs that can be applied to the dataset by clicking **SELECT AN ACL PRESET** and choosing an preconfigured ACL to apply.
This will overwrite any current ACL entries.

To define permissions for a specific user account or group, click **ADD ACL ITEM**.
Open the **Who** drop down, select *User* or *Group*, and choose the specific **User** or **Group** in the new drop down that appears.
Continue to define how the settings are applied to the account then choose which permissions to apply to that account.
For example, to only allow the *tmoore* user permission to view dataset contents but not make changes, set the **ACL Type** to *Allow* and **Permissions** to *Read*.

<img src="/images/StoragePoolsEditACLExample.png">
<br><br>

For more information on Managing ACLs, read the [Dataset Management](/hub/tasks/advanced/editingacls/) documentation.


## SMB Service

Connecting to an SMB share does not work when the related system service is not activated.
To turn the SMB service on, go to **Services** and click the toggle for *SMB*.
If you want the service to activate whenever TrueNAS boots, set *Start Automatically*.

The SMB service is configured by clicking <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>.
Unless a specific setting is needed or configuring for a specific network environment, it is recommended to use the default settings for the SMB service.

<img src="/images/ServicesSMBConfigure.png">
<br><br>

| Setting             | Value    | Description  |
|---------------------|----------|--------------|
| NetBIOS Name        | string   | Automatically populated with the original hostname of the system. This name is limited to 15 characters and cannot be the **Workgroup** name. |
| NetBIOS Alias       | string   | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| Workgroup           | string   | Must match the Windows workgroup name. When this is unconfigured and Active Directory or LDAP are active, TrueNAS will detect and set the correct workgroup from these services. |
| Description         | string   | This allows entering any notes or descriptive details about the service configuration. |
| Enable SMB1 support | checkbox | Allow legacy SMB1 clients to connect to the server. Note that SMB1 is being deprecated and it is advised to upgrade clients to operating system versions that support modern versions of the SMB protocol. |
| NTLMv1 Auth         | checkbox | When set, [smbd](https://www.samba.org/samba/docs/current/man-html/smbd.8.html) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. This setting allows backward compatibility with older versions of Windows, but is not recommended and should not be used on untrusted networks. |

### Advanced Options

Clicking **ADVANCED OPTIONS** adds a new section of *Other Options* for fine-tuning the service.

<img src="/images/ServicesSMBConfigureAdvanced.png">
<br><br>

| Setting                                 | Value     | Description  |
|-----------------------------------------|-----------|--------------|
| UNIX Charset                            | drop down | Character set used internally. *UTF-8* is standard for most systems as it supports all characters in all languages. |
| Log Level                               | drop down | Record SMB service messages up to the specified log level. By default, error and warning level messages are logged. It is not recommended to use a log level above MINIMUM for production servers. |
| Use Syslog Only                         | checkbox  | Set to log authentication failures in */var/log/messages* instead of the default */var/log/samba4/log.smbd*. |
| Local Master                            | checkbox  | Set to determine if the system participates in a browser election. Unset when the network contains an AD or LDAP server, or when Vista or Windows 7 machines are present. |
| Enable Apple SMB2/3 Protocol Extensions | checkbox  | These [protocol extensions](https://support.apple.com/en-us/HT210803) can be used by macOS to improve the performance and behavioral characteristics of SMB shares. This is required for Time Machine support. |
| Administrators Group                    | drop down | Members of this group are local administrators and automatically have privileges to take ownership of any file in an SMB share, reset permissions, and administer the SMB server through the Computer Management MMC snap-in. |
| Guest Account                           | drop down | Account to be used for guest access. Default is *nobody*. The chosen account is required to have permissions to the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL), add a new entry for the chosen guest account, and configure the permissions in that entry. If the selected **Guest Account** is deleted the field resets to *nobody*. |
| File Mask                               | integer   | Overrides default file creation mask of *0666* which creates files with read and write access for everybody. |
| Directory Mask                          | integer   | Overrides default directory creation mask of *0777* which grants directory read, write and execute access for everybody. |
| Bind IP Addresses                       | drop down | Static IP addresses which SMB listens on for connections. Leaving all unselected defaults to listening on all active interfaces.
| Auxiliary Parameters                    | string    | Stores additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html). Auxiliary parameters may be used to override the default SMB server configuration, but such changes may adversely affect SMB server stability or behavior. |

### Shadow Copies

To enable Shadow Copies, mark the checkbox under the Advanced Section of the SMB Properties window.
<img src="/images/ShadowCopyOption.png">
<br><br>

[Shadow Copies](https://en.wikipedia.org/wiki/Shadow_copy),
also known as the Volume Shadow Copy Service (VSS) or Previous
Versions, is a Microsoft service for creating volume snapshots. Shadow
copies can be used to restore previous versions of files from
within Windows Explorer.

By default all ZFS snapshots for a dataset underlying an SMB share
path are presented to SMB clients through the volume shadow copy
service (or accessible directly via SMB if the hidden ZFS snapshot
directory is located within the path of the SMB share).

Before using shadow copies with TrueNAS, be aware of the following
caveats:

* If the Windows system is not fully patched to the latest service
  pack, Shadow Copies may not work. If no
  previous versions of files to restore are visible, use Windows Update
  to ensure the system is fully up-to-date.

* Shadow copy support only works for ZFS pools or datasets.

* Appropriate permissions must be configured on the pool or dataset
  being shared by SMB.

* Users cannot delete shadow copies via an SMB client.
  Instead, the administrator can remove snapshots
  from the TrueNAS web interface.
  Shadow copies may be disabled for an SMB share by unchecking the
  *Enable shadow copies* advanced option for the SMB share. Note that
  unchecking this will not prevent access to the hidden .zfs/snapshot
  snapdir for a ZFS dataset if it is located within the *Path* for an
  SMB share.
  
{{% pageinfo %}}
Some users have experienced issues in the Windows 10 v2004 release where network shares can't be accessed. The problem appears to come from a bug in `gpedit.msc`, the Local Group Policy Editor. Unfortunately, setting the "Allow insecure guest logon" flag value to "Enabled" in Computer Configuration > Administrative Templates > Network > Lanman Workstation appears to have no effect on the configuration.
To work around the issue, you will need to edit the registry. Use `Regedit` and go to `HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters`. The **DWORD AllowInsecureGuestAuth** will be set to the incorrect value *0x00000000*. Changing this value to `0x00000001` (Hexadecimal 1) allows adjusting the settings in `gpedit.msc`.
This can be applied to a fleet of Windows machines with a Group Policy Update.
{{% /pageinfo %}}
