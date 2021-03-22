---
title: "Share Creation"
weight: 10
---

{{< toc >}}

## Background

SMB (also known as CIFS) is the native file sharing system in Windows.
SMB shares can connect to any major operating system, including Windows, MacOS, and Linux.
SMB can be used in TrueNAS to share files among single or multiple users or devices

SMB shares allow a wide range of permissions and security settings, and can support advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for the management and administration of large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
There are multiple versions of the SMB protocol. An SMB client will typically negotiate the highest supported SMB protocol during SMB session negotiation. Industry-wide, the usage of the SMB1 protocol (sometimes referred to as NT1) is in the [process of being deprecated]({{< relref "SMB1Advisory.md" >}}). This deprecation is for security reasons.
However, most SMB clients support SMB 2 or 3 protocols, even when they are not the default protocols.

{{< hint info >}}
Legacy SMB clients rely on NetBIOS Name Resolution to discover SMB servers on a network. The NetBIOS Name Server (nmbd) is disabled by default in TrueNAS. It can be enabled in **Network > Global Configuration** if this functionality is required.

MacOS clients use mDNS to discover the the presence of SMB servers on the network. The mDNS server (avahi) is enabled by default on TrueNAS.

Windows clients use [WS-Discovery](http://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but depending on the version of the Windows client, network discovery can be disabled by default.

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
See the [Permissions article]() for more details.

## Creating the SMB Share

To create a Windows SMB share, go to **Sharing > Windows Shares (SMB)** and click **ADD**.

![SMBShareAdd](/images/CORE/12.0/SharingSMBAdd.png "Basic SMB Share Options")

The **Path** and **Name** of the SMB share define the absolute minimum amount of information required to create a new SMB share. The *Path* is the directory tree on the local filesystem that will be exported over the SMB protocol, and the *Name* is the name of the SMB share, which forms a part of the "full share pathname" when SMB clients perform an SMB tree connect. Because of the way that the *Name* is used in the SMB protocol, it must be less than or equal to 80 characters in length, and must not contain any invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If a *Name* is not supplied, then the last component of the *Path* will be used as the share name.

You can set a share *Purpose* to apply and lock pre-defined advanced options for the share.
To retain full control over all the share *Advanced Options*, choose *No presets*.


{{< expand "What do all the presets do?" "v" >}}
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
{{< /expand >}}

An optional *Description* can be specified to help explain the purpose of the share.

**Enabled** allows this path to be shared when the SMB service is activated.
Unsetting **Enabled** disables the share without deleting the configuration.

{{< expand "Advanced Options" "v" >}}
![SMBShareAdvanced](/images/CORE/12.0/SharingSMBAddAdvanced.png "SMB Share Advanced Options")

Options are divided into **Access** and **Other Options** groups.
*Access* options control various settings for allowing systems or users to access or modify the shared data.

| Setting                        | Value     | Description  |
|--------------------------------|-----------|--------------|
| Enable ACL                     | checkbox  | Set to add Access Control List (ACL) support to the share. Unsetting disables ACL support and deletes any existing ACL for the share. |
| Export Read Only               | checkbox  | Prohibits writes to the share. Unset to allow writes to the share. |
| Browsable to Network Clients   | checkbox  | Determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting.
| Allow Guest Access             | checkbox  | Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients.<br><br> *MacOS clients*: Attempting to connect as a user that does not exist in FreeNAS *does not* automatically connect as the guest account. The *Connect As: Guest* option must be specifically chosen in MacOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
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
| Use as Home Share                  | checkbox  | Allows the share to host user home directories. Each user is given a personal home directory when connecting to the share which is not accessible by other users. This allows for a personal, dynamic share. Only one share can be used as the home share. See the configuring [Home Share article]({{< relref "HomeShare.md" >}}) for detailed instructions. |
| Time Machine                       | checkbox  | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. |
| Enable Shadow Copies               | checkbox  | Export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| Export Recycle Bin                 | checkbox  | Files that are deleted from the same dataset are moved to the Recycle Bin and do not take any additional space. **Deleting files over NFS will remove the files permanently.** When the files are in a different dataset or a child dataset, they are copied to the dataset where the Recycle Bin is located. To prevent excessive space usage, files larger than *20 MiB* are deleted rather than moved. Adjust the **Auxiliary Parameter** `crossrename:sizelimit=` setting to allow larger files. For example, <code>crossrename:sizelimit=<i>50</i></code> allows moves of files up to *50 MiB* in size. This means files can be permanently deleted or moved from the recycle bin. **This is not a replacement for ZFS snapshots.** |
| Use Apple-style Character Encoding | checkbox  | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option converts NTFS illegal characters in the same manner as MacOS SMB clients. |
| Enable Alternate Data Streams      | checkbox  | Allows multiple [NTFS data streams](http://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes MacOS to write streams to files on the filesystem. |
| Enable SMB2/3 Durable Handles      | checkbox  | Allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| Enable FSRVP                       | checkbox  | Enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows Remote Procedure Call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mountpoint. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| Path Suffix                        | string    | Appends a suffix to the share connection path. This is used to provide unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| Auxiliary Parameters               | string    | Additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |
{{< /expand >}}
Clicking **Submit** creates the share and adds it to the **Sharing > Windows Shares (SMB)** list.
You can also choose to enable the SMB service at this time.

## Share Management

After the SMB share is created, additional management options are available by going to **Sharing > Windows Shares (SMB)** and clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for a share entry:

* **Edit**: Opens the [share creation screen](#creating-the-smb-share) to reconfigure the share or disable it.
* **Edit Share ACL**: Opens a screen to configure an Access Control List (ACL) for the share. This is separate from filesystem permissions, and applies at the level of the entire SMB share. Permissions defined here are not interpreted by clients of other filesharing protocols or other SMB shares that export the same share *Path*. The default is open. This ACL is used to determine the browse list if *Access Based Share Enumeration* is enabled.
* **Edit Filesystem ACL**: Opens a screen to configure an Access Control List (ACL) for the path defined in the share **Path**.
* **Delete**: Remove the share configuration from TrueNAS. Data that was being shared is unaffected.

### Configure Share ACL

To see the share ACL options, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> > *Edit Share ACL*.

![EditShareACL](/images/CORE/12.0/SharingSMBShareACL.png "Share ACL Options")>

The *Share Name* is shown, but cannot be changed.
*ACL Entries* are listed as a block of settings.
Click *ADD* to register a new entry.

| Setting    | Value     | Description  |
|------------|-----------|--------------|
| SID        | string    | Who this ACL entry (ACE) applies to, shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). Either a *SID* or a *Domain* with *Name* is required for the ACL. |
| Domain     | string    | Domain for the user *Name*. Required when a **SID** is not entered. Local users have the SMB server NetBIOS name: *truenas\\smbusers*.
| Permission | drop down | Predefined permission combinations:<br>*Read*: Read access and Execute permission on the object (RX).<br>*Change*: Read access, Execute permission, Write access, and Delete object (RXWD).<br>*Full*: Read access, Execute permission, Write access, Delete object, change Permissions, and take Ownership (RXWDPO).<br><br>For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html). |
| Name       | string    | Who this ACL entry applies to, shown as a user name. Requires adding the user **Domain**. |
| Type       | drop down | How permissions are applied to the share. *Allowed* denies all permissions by default except those that are manually defined. *Denied* allows all permissions by default except those that are manually defined. |

Clicking *SAVE* stores the share ACL and applies it to the share immediately.

### Configure Filesystem ACL

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> > *Edit Filesystem ACL* to quickly return to **Storage > Pools** and edit the dataset ACL.

![DatasetACLEdit](/images/CORE/12.0/StoragePoolsEditACL.png "Dataset Permissions Options")

This ACL is used to define the user accounts or groups that own or have specific [permissions]() to the dataset that is being shared.
The *User* and *Group* values show which accounts "own", or have full permissions to the dataset.
To change these settings, set *Apply* before saving any changes.

#### ACL Presets

To rewrite the current ACL with a standardized preset, click *SELECT AN ACL PRESET* and choose an option:

{{< tabs "SaveConsoleLog" >}}
{{< tab "Open" >}}
Has three entries:
* *owner@* has full dataset control.
* *group@* has full dataset control.
* All other accounts can modify the dataset contents.
{{< /tab >}}
{{< tab "Restricted" >}}
Has two entries:
* *owner@* has full dataset control.
* *group@* can modify the dataset contents.
{{< /tab >}}
{{< tab "Home" >}}
Has three entries:
* *owner@* has full dataset control.
* *group@* can modify the dataset contents.
* All other accounts can traverse through the dataset.
{{< /tab >}}
{{< /tabs >}}

#### Adding ACL Entries (ACEs)

To define permissions for a specific user account or group, click *ADD ACL ITEM*.
Open the *Who* drop down, select *User* or *Group*, and choose a specific *User* or *Group* account.
Define how the settings are applied to the account then choose which permissions to apply to that account.
For example, to only allow the *tmoore* user permission to view dataset contents but not make changes, set the *ACL Type* to *Allow* and *Permissions* to *Read*.

![ExampleACE](/images/CORE/12.0/StoragePoolsEditACLExample.png "Sample ACE")

## Activate the SMB Service

Connecting to an SMB share does not work when the related system service is not activated.
To make SMB share available on the network, *Services* and click the toggle for *SMB*.
If you want the service to activate whenever TrueNAS boots, set *Start Automatically*.

### Service Configuration

The SMB service is configured by clicking <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>.
Unless a specific setting is needed or configuring for a specific network environment, it is recommended to use the default settings for the SMB service.

![SMBServiceOptions](/images/CORE/12.0/ServicesSMBOptions.png "SMB Service Options")

| Setting             | Value    | Description  |
|---------------------|----------|--------------|
| NetBIOS Name        | string   | Automatically populated with the original hostname of the system. This name is limited to 15 characters and cannot be the *Workgroup* name. |
| NetBIOS Alias       | string   | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| Workgroup           | string   | Must match the Windows workgroup name. When this is unconfigured and Active Directory or LDAP are active, TrueNAS will detect and set the correct workgroup from these services. |
| Description         | string   | This allows entering any notes or descriptive details about the service configuration. |
| Enable SMB1 support | checkbox | Allow legacy SMB1 clients to connect to the server. Note that SMB1 is being deprecated and it is advised to upgrade clients to operating system versions that support modern versions of the SMB protocol. |
| NTLMv1 Auth         | checkbox | When set, [smbd](https://www.samba.org/samba/docs/current/man-html/smbd.8.html) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. This setting allows backward compatibility with older versions of Windows, but is not recommended and should not be used on untrusted networks. |

{{< expand "Advanced Options" "v" >}}
![SMBServiceAdvanced](/images/CORE/12.0/ServicesSMBOptionsAdvanced.png "Advanced Options for the SMB Service")

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
{{< /expand >}}


### Mounting SMB Share on another machine.


{{< tabs "Mount Commands" >}}
{{< tab "Linux" >}}

Verify that the required CIFS packages are installed for your distribution of Linux.
Create a mount point: `sudo mkdir /mnt/smb_share`.
Mount the volume. `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`
If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.

{{< /tab >}}
{{< tab "Windows" >}}

To mount the SMB share to a drive letter on windows, open the command line and run the following command with the appropiate drive letter, computer name, and share name.

```net use Z: \\computer_name\share_name /PERSISTENT:YES```

{{< /tab >}}
{{< tab "Apple" >}}

Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`
Input the username and password for the user assigned to that pool or Guest if Guest access is enabled on the share.

{{< /tab >}}
{{< /tabs >}}

