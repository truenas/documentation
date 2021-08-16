---
title: "Windows (SMB) Shares"
weight: 10
---

{{< toc >}}

## Background

SMB (also known as CIFS) is the native file sharing system in Windows. SMB shares can connect to any major operating system, including Windows, MacOS, and Linux. SMB can be used in TrueNAS to share files among single or multiple users or devices.

SMB shares allow a wide range of permissions and security settings, and can support advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata. SMB is suitable for the management and administration of large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services. There are multiple versions of the SMB protocol. An SMB client will typically negotiate the highest supported SMB protocol during SMB session negotiation. Industry-wide, the usage of the SMB1 protocol (sometimes referred to as NT1) is in the [process of being deprecated]({{< relref "SMB1Advisory.md" >}}). This deprecation is for security reasons. However, most SMB clients support SMB 2 or 3 protocols, even when they are not the default protocols.

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

 A default Access Control List is also applied to the dataset.  This default ACL is restrictive and only allows access to the dataset owner and group.
 This ACL can be modified later according to your use case.
{{< /expand >}}

### Create Local User Accounts

By default, all new local users are members of a built in SMB group called *builtin users*. This group can be used to grant access to all local users on the server. Additional [groups]({{< relref "Groups.md" >}}) can be used to fine-tune permissions to large numbers of users. User accounts built-in to TrueNAS or that do not have the *smb* flag set cannot be used for SMB access.

{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Although anonymous or guest access to the share is possible, this is a security vulnerability and is being deprecated by the major SMB client vendors. This partly because signing and encryption are not possible for guest sessions.
{{< /expand >}}

{{< expand "What about LDAP users?" "v" >}}
When LDAP has been configured and you want users from the LDAP server to have access the SMB share, go to **Credentials > Directory Services > LDAP** and set *Samba Schema*. However, local TrueNAS user accounts will no longer have access to the share.

{{< hint info >}}
**Samba Schema Depreciation**

Support for Samba Schema is [officially deprecated in Samba 4.13](https://www.samba.org/samba/history/samba-4.13.0.html). The feature will be removed after Samba 4.14. Users should begin upgrading legacy Samba domains to Samba AD domains.
{{< /hint >}}

{{< /expand >}}

### Tune the Dataset ACL

After a dataset and accounts are created, you will need to investigate your access requirements and adjust the dataset ACL to match. To edit the ACL, go to **Storage** and select <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the new dataset, click *Edit Permissions*.
Many home users typically add a new entry that grants *Full Control* to the *builtin_users* group with the flags set to *Inherit*.
See the [Permissions article]({{< relref "Permissions.md" >}}) for more details.

## Creating the SMB Share

To create a Windows SMB share, go to **Shares > Windows (SMB) Shares** and click **Add**.

![SMBShareAdd](/images/SCALE/SharesSMBAdd.png "Basic SMB Share Options")

The **Path** and **Name** of the SMB share define the absolute minimum amount of information required to create a new SMB share. The *Path* is the directory tree on the local filesystem that will be exported over the SMB protocol, and the *Name* is the name of the SMB share, which forms a part of the "full share pathname" when SMB clients perform an SMB tree connect. Because of the way that the *Name* is used in the SMB protocol, it must be less than or equal to 80 characters in length, and must not contain any invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If a *Name* is not supplied, then the last component of the *Path* will be used as the share name.

You can set a share *Purpose* to apply and lock pre-defined advanced options for the share. To retain full control over all the share *Advanced Options*, choose *No presets*.

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

**Enabled** allows this path to be shared when the SMB service is activated. Unsetting **Enabled** disables the share without deleting the configuration.

{{< expand "Advanced Options" "v" >}}
![SMBShareAdvanced](/images/SCALE/SharesSMBAdvancedOptions.png "SMB Share Advanced Options")

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
| Use as Home Share                  | checkbox  | Allows the share to host user home directories. Each user is given a personal home directory when connecting to the share which is not accessible by other users. This allows for a personal, dynamic share. Only one share can be used as the home share. |
| Time Machine                       | checkbox  | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. |
| Enable Shadow Copies               | checkbox  | Export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| Export Recycle Bin                 | checkbox  | Files that are deleted from the same dataset are moved to the Recycle Bin and do not take any additional space. **Deleting files over NFS will remove the files permanently.** When the files are in a different dataset or a child dataset, they are copied to the dataset where the Recycle Bin is located. To prevent excessive space usage, files larger than *20 MiB* are deleted rather than moved. Adjust the **Auxiliary Parameter** `crossrename:sizelimit=` setting to allow larger files. For example, <code>crossrename:sizelimit=<i>50</i></code> allows moves of files up to *50 MiB* in size. This means files can be permanently deleted or moved from the recycle bin. **This is not a replacement for ZFS snapshots.** |
| Use Apple-style Character Encoding | checkbox  | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option converts NTFS illegal characters in the same manner as MacOS SMB clients. |
| Enable Alternate Data Streams      | checkbox  | Allows multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes MacOS to write streams to files on the filesystem. |
| Enable SMB2/3 Durable Handles      | checkbox  | Allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| Enable FSRVP                       | checkbox  | Enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows Remote Procedure Call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mountpoint. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| Path Suffix                        | string    | Appends a suffix to the share connection path. This is used to provide unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| Auxiliary Parameters               | string    | Additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |
{{< /expand >}}
Clicking **Save** creates the share and adds it to the **Sharing > Windows (SMB) Shares (SMB)** list.
You can also choose to enable the SMB service at this time.

