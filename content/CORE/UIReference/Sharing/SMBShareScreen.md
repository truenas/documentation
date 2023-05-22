---
title: "SMB Share Screen"
description: "Use the Sharing SMB screen to setup Server Message Block (SMB) shares on your TrueNAS"
weight: 50
aliases:
- /core/uireference/sharing/smb/smbsharescreen/
- /core/uireference/sharing/smb/
tags:
- coresmb
---

{{< toc >}}

Server Message Block (SMB) is a file sharing protocol. Windows and other operating systems use SMB. 

Go to **Sharing > Windows Shares (SMB)** to display the **SMB** screen and setup SMB shares on your TrueNAS.

![SharingSMBScreen](/images/CORE/13.0/SharingSMBScreen.png "SMB Share Screen")

Click **Columns** to change the information displayed in the table. Options are **Unselect All**, **Path**, **Description**, **Enabled** and **Reset to Defaults**.

Click **Add** to display the **BASIC Options** settings screen.

## Basic Options

![SharingSMBBasicOptions](/images/CORE/13.0/SharingSMBBasicOptions.png "SMB Share Basic Options")

{{< truetable >}}
| Name | Description  |
|---------|--------------|
| **Path** | Use the file browser or click the **/mnt** to select the pool, dataset or directory to share. |
| **Name** | Enter a name for the SMB share. |
| **Purpose** | Select a preset purpose configuration. This locks in predetermined values for the share. This includes **Advanced Options**, as well as the **Path Suffix**. Select from the dropdown list. Options are:<br>**No presets**<br>**Default share parameters**<br>**Multi-user time machine**<br>**Multi-protocol (AFP/SMB) shares**<br>**Multi-protocol (NFSv3/SMB) shares**<br>**Private SMB Datasets and Shares**<br>**SMB WORM. Files become readonly via SMB after 5 minutes**. Note: The **SMB WORM** preset only impacts writes over the SMB protocol. Prior to deploying this option in a production environment the user needs to determine whether the feature meets his / her requirements.<br>See "What do all the presets do?" for more information on presets. |
| **Description** | Optional. Explains the purpose of the share. |
| **Enabled** | Select to enable this SMB share. Clear checkbox to disable the share without deleting the configuration. |
{{< /truetable >}}

{{< expand "What do all the presets do?" "v" >}}
The following table shows the preset options for the different **Purposes** and if those options are locked.
An [x] indicates the option is enabled, [ ] means the option is disabled, and [text] indicates a specific value:

{{< truetable >}}
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
{{< /truetable >}}
{{< /expand >}}

## Advanced Options

![SharingSMBAdvancedOptions](/images/CORE/13.0/SharingSMBAdvancedOptions.png "SMB Share Advanced Options")

**Access** and **Other Options** are the two options groups.
**Access**  settings allow systems or users to access or change the shared data.

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Enable ACL** | Select to add Access Control List (ACL) support to the share. Leave checkbox clear to disable ACL support and delete any existing ACL for the share. |
| **Export Read Only** | Select to prohibit writes to the share. Leave checkbox clear to allow writes to the share. |
| **Browsable to Network Clients** | Select to include this share name when browsing shares. Home shares are only visible to the owner regardless of this setting. |
| **Allow Guest Access** | Select to make privileges the same as the guest account. Windows 10 version 1709 and Windows Server version 1903 have disabled guest access. Guest access for these clients requires extra client-side configuration.<br><br> **MacOS clients**: Trying to connect as a user that does not exist in TrueNAS does not default to the guest account. The **Connect As: Guest** option must be specifically chosen in MacOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
| **Access Based Share Enumeration** | Select to restrict share visibility to users with read or write access to the share. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
| **Hosts Allow** | Enter a list of allowed host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. A more detailed description with examples see [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW). |
| **Hosts Deny** | Enter a list of denied host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}

{{< expand "Host Allow and Hosts Deny Fields" >}}
The **Hosts Allow** and **Hosts Deny** fields work together to produce different situations:
* If neither **Hosts Allow** or **Hosts Deny** contain an entry, then allow SMB share access for any host.
* If there is an entry in **Hosts Allow** list but none in **Hosts Deny** list, then only allow hosts on the **Hosts Allow** list.
* If there is an entry in **Hosts Deny** list but none in **Hosts Allow** list, then allow all hosts that are not on the **Hosts Deny** list.
* If there are both an entry in **Hosts Allow** and **Hosts Deny** list, then allow all hosts that are on the **Hosts Allow** list. If there is a host not on the **Hosts Allow** and not on the **Hosts Deny** list, then allow it.
{{< /expand >}}

The **Other Options** have settings for improving Apple software compatibility. There are also ZFS snapshot features, and other advanced features.

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Use as Home Share** | Select to allow the share to host user home directories. Gives each user a personal home directory when connecting to the share. This personal home directory is not accessible by other users. This allows for a personal, dynamic share. It is only possible to use one share as the home share. See the configuring [Home Share article]({{< relref "/CORE/CORETutorials/Sharing/SMB/HomeShare.md" >}}) for detailed instructions. |
| **Time Machine** | Select to enable [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. |
| **Enable Shadow Copies** | Select to allow export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| **Export Recycle Bin** | When selected, moves files deleted from the same dataset to the Recycle Bin. These files do not take any extra space. Deleting files over NFS is a permanent deletion! For files in a different dataset or a child dataset there is an extra step. These files are first copied to the dataset where the Recycle Bin is located. To prevent excessive space usage, deletes files larger than 20 MiB instead of moving them. Adjust the **Auxiliary Parameter** `crossrename:sizelimit=` setting to allow larger files. For example, <code>crossrename:sizelimit=<i>50</i></code> allows moves of files up to 50 MiB in size. This means files can be permanently deleted or moved from the recycle bin. This is not a replacement for ZFS snapshots! |
| **Use Apple-style Character Encoding** | Select to convert NTFS illegal characters in the same manner as MacOS SMB clients. By default, Samba uses a hashing algorithm for NTFS illegal characters. |
| **Enable Alternate Data Streams** | Select to allow multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes MacOS to write streams to files on the file system. |
| **Enable SMB2/3 Durable Handles** | Select to allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| **Enable FSRVP** | Select to enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows Remote Procedure Call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mountpoint. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| **Path Suffix** | Appends a suffix to the share connection path. This provides unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| **Auxiliary Parameters** | Additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |
{{< /truetable >}}

Click **Submit** to save setings. This creates the share and adds it to the **Sharing > Windows Shares (SMB)** list.

Click **CANCEL** to exit without saving and return to the main **SMB** screen.

{{< taglist tag="coresmb" limit="10" >}}
