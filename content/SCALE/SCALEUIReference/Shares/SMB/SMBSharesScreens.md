---
title: "Adding SMB Shares"
description: "This article provides information on adding SMB Shares, starting SMB service, and mounting the share on another system."
weight: 10
aliases: 
tags:
 - scalesmb
 - scaleafp
 - scaleshares
---

## SMB Shares

{{< embed-video name="scaleangelfishsmbshare" >}}

SMB (also known as CIFS) is the native file sharing system in Windows.
SMB shares can connect to most operating systems, including Windows, macOS, and Linux.
TrueNAS can use SMB to share files among single or multiple users or devices.

SMB supports a wide range of permissions, security settings, and advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for managing and administering large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
The SMB protocol has multiple versions. An SMB client typically negotiates the highest supported SMB protocol during SMB session negotiation. Industry-wide, SMB1 protocol (sometimes referred to as NT1) usage is [being deprecated]({{< relref "/CORE/CoreSecurityReports/SMB1Advisory.md" >}}) for security reasons.
However, most SMB clients support SMB 2 or 3 protocols, even when they are not default.

{{< hint info >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network. TrueNAS disables the NetBIOS Name Server (nmbd) by default. Enabled in **Network** if you require its functionality.

MacOS clients use mDNS to discover SMB servers present on the network. TrueNAS enables the mDNS server (avahi) by default.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but network discovery can be disabled by default depending on the Windows client version.

Discoverability through broadcast protocols is a convenience feature and not required to access an SMB server.
{{< /hint >}}

## First Steps

### Create a Dataset

It is recommended to create a new dataset and set the **Share Type** to **SMB** for the new SMB share. 

{{< expand "What does this do?" "v" >}}
TrueNAS creates the ZFS dataset with these settings:

 * **aclmode** = **restricted**
 * **case sensitivity** = **insensitive**

 TrueNAS also applies a default access control list to the dataset.
 This default ACL is restrictive and only allows access to the dataset owner and group.
 You can modify the ACL later according to your use case.
{{< /expand >}}

### Create Local User Accounts

By default, all new local users are members of a built-in SMB group called **builtin users**. 
You can use the group to grant access to all local users on the server or add more groups to fine-tune permissions to large numbers of users. 
You cannot access SMB shares with user accounts built-in to TrueNAS or those without the **smb** flag.
{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Anonymous or guest access to the share is possible, but it is a security vulnerability. 
Major SMB client vendors are deprecating it, partly because signing and encryption are not possible for guest sessions.
{{< /expand >}}
{{< expand "What about LDAP users?" "v" >}}
If you want LDAP server users to access the SMB share, go to **Credentials > Directory Services**. 
Click **Settings** in the **LDAP window**, then click **Advanced Options** and set **Samba Schema**. 
Local TrueNAS user accounts no longer have access to the share.
{{< /expand >}}

### Tune the Dataset ACL

After creating a dataset and accounts, you need to investigate your access requirements and adjust the dataset ACL to match. 
Go to **Storage**, open the options for the new dataset, and click **Edit Permissions**.
Many home users typically add a new entry that grants **FULL_CONTROL** to the **builtin_users** group with the flags set to **INHERIT**.
See the [Permissions article]({{< relref "/SCALE/SCALETutorials/Storage/Pools/PermissionsSCALE.md" >}}) for more details.

## Creating the SMB Share

To create a Windows SMB share, go to **Sharing > Windows Shares (SMB)** and click **Add**.

![SharingSMBAddSCALE](/images/SCALE/SharingSMBAddSCALE.png "Basic SMB Share Options")

The SMB share **Path** and **Name** define the absolute minimum amount of information required to create a new SMB share. The **Path** is the directory tree on the local filesystem that TrueNAS exports over the SMB protocol. The **Name** is the SMB share name, which forms part of the full share pathname when SMB clients perform an SMB tree connect. Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters. It cannot have any invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If a name is not supplied, then the last component of the path is used as the share name.

You can set a share **Purpose** to apply and lock pre-determined advanced options for the share.
To retain control over all the share **Advanced Options**, choose **No presets**.

{{< expand "What do all the presets do?" "v" >}}
The following table shows the preset options for the different **Purpose** options and if those are locked.      
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

You can specify an optional **Description** to help explain the share purpose.

**Enabled** allows this path to be shared when the SMB service is activated.
Unsetting **Enabled** disables the share without deleting the configuration.

{{< expand "Advanced Options" "v" >}}
![SharingSMBAddAdvancedSCALE](/images/SCALE/SharingSMBAddAdvancedSCALE.png "SMB Share Advanced Options")

Options are divided into **Access** and **Other Options** groups.
**Access** options control various settings for allowing systems or users to access or modify the shared data.

| Setting                        | Description  |
|--------------------------------|--------------|
| Enable ACL                     | Enables ACL support for the SMB share. |
| Export Read Only               | Prohibits writes to the share. |
| Browsable to Network Clients   | Determine whether this share name is included when browsing shares. Home shares are only visible to the owner regardless of this setting.
| Allow Guest Access             | Privileges are the same as the guest account. Guest access is disabled by default in Windows 10 version 1709 and Windows Server version 1903. Additional client-side configuration is required to provide guest access to these clients.<br><br> **MacOS clients**: Attempting to connect as a user that does not exist in FreeNAS *does not* automatically connect as the guest account. The **Connect As: Guest** option must be specifically chosen in macOS to log in as the guest account. See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details. |
| Access Based Share Enumeration | Restrict share visibility to users with read or write access to the share. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page. |
| Hosts Allow                    | Enter a list of allowed hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
| Hosts Deny                     | Enter a list of denied hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>. |

The **Hosts Allow** and **Hosts Deny** fields work together to produce different situations:
* If neither **Hosts Allow** or **Hosts Deny** contains an entry, then SMB share access is allowed for any host.
* If there is a Hosts Allow list but no Hosts Deny list, then only allow hosts on the Hosts Allow list.
* If there is a Hosts Deny* list but no Hosts Allow list, then allow all hosts on the Hosts Deny list.
* If there is both a Hosts Allow and Hosts Deny list, then allow all hosts on the Hosts Allow list. If there is a host not on the Hosts Allow and not on the Hosts Deny list, then allow it.

The **Other Options** have settings for improving Apple software compatibility, ZFS snapshot features, and other advanced features.

| Setting                            | Description  |
|------------------------------------|--------------|
| Use as Home Share                  | Allows the share to host user home directories. Each user is given a personal home directory when connecting to the share which is not accessible by other users. This allows for a personal, dynamic share. Only one share can be used as the home share. See the [**SMB Home Shares**](#smb-home-shares) section below. |
| Time Machine                       | Enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share. |
| Legacy AFP Compatibility           | This controls how the SMB share reads and writes data. Leave unset for the share to behave like a normal SMB share and set for the share to behave like the deprecated Apple Filing Protocol (AFP). Only set this when this share originated as an AFP sharing configuration. This is not required for pure SMB shares or macOS SMB clients. |
| Enable Shadow Copies               | Export ZFS snapshots as [Shadow Copies](https://docs.microsoft.com/en-us/windows/win32/vss/shadow-copies-and-shadow-copy-sets) for Microsoft Volume Shadow Copy Service (VSS) clients. |
| Export Recycle Bin                 | Files that are deleted from the same dataset are moved to the **Recycle Bin** and do not take any additional space. *Deleting files over NFS removes the files permanently.* When the files are in a different dataset or a child dataset, they are copied to the dataset where the recycle bin is located. To prevent excessive space usage, files larger than 20 MiB are deleted rather than moved. Adjust the **Auxiliary Parameter** `crossrename:sizelimit=` setting to allow larger files. For example, <code>crossrename:sizelimit=<i>50</i></code> allows moves of files up to 50 MiB in size. This means files can be permanently deleted or moved from the recycle bin. *This is not a replacement for ZFS snapshots.* |
| Use Apple-style Character Encoding | By default, Samba uses a hashing algorithm for NTFS illegal characters. Enabling this option converts NTFS illegal characters in the same manner as macOS SMB clients. |
| Enable Alternate Data Streams      | Allows multiple [NTFS data streams](https://www.ntfs.com/ntfs-multiple.htm). Disabling this option causes macOS to write streams to files on the filesystem. |
| Enable SMB2/3 Durable Handles      | Allow using open file handles that can withstand short disconnections. Support for POSIX byte-range locks in Samba is also disabled. This option is not recommended when configuring multi-protocol or local access to files. |
| Enable FSRVP                       | Enable support for the File Server Remote VSS Protocol ([FSVRP](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fsrvp/dae107ec-8198-4778-a950-faa7edad125b)). This protocol allows remote procedure call (RPC) clients to manage snapshots for a specific SMB share. The share path must be a dataset mount point. Snapshots have the prefix `fss-` followed by a snapshot creation timestamp. A snapshot must have this prefix for an RPC user to delete it. |
| Path Suffix                        | Appends a suffix to the share connection path. This is used to provide unique shares on a per-user, per-computer, or per-IP address basis. Suffixes can contain a macro. See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page for a list of supported macros. The connectpath must be preset before a client connects. |
| Auxiliary Parameters               | Additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) settings. |
{{< /expand >}}

Clicking **Save** creates the share and adds it to the **Shares > Windows (SMB) Shares** list.
You can also choose to enable the SMB service at this time.

## Share Management

After creating the SMB share, additional management options are available by going to the **Shares** screen and clicking <i class="material-icons" aria-hidden="true">open_in_new</i> in the **Windows (SMB) Shares** window. Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> next to the share you want to manage.

* **Edit**: Opens the [share creation screen](#creating-the-smb-share) to reconfigure the share or disable it.
* **Edit Share ACL**: Opens a screen to configure an Access Control List (ACL) for the share. This screen is separate from filesystem permissions and applies at the entire SMB share level. Other filesharing protocol clients or other SMB shares that export the same share **Path** do not interpret these permissions. Open is the default. This ACL determines the browse list if **Access Based Share Enumeration** is enabled.
* **Edit Filesystem ACL**: Opens a screen to configure an Access Control List (ACL) for the path defined in the share **Path**.
* **Delete**: Remove the share configuration from TrueNAS. Shared data is unaffected.

### Configure Share ACL

To see the share ACL options, select **Edit Share ACL**.

![SharingSMBShareACLSCALE](/images/SCALE/SharingSMBShareACLSCALE.png "Share ACL Options")

TrueNAS displays the **Share Name** (cannot be changed).
**ACL Entries** are listed as a block of settings.
Click **Add** to register a new entry.

| Setting    | Description  |
|------------|--------------|
| SID        | Who this ACL entry (ACE) applies to, shown as a [Windows Security Identifier](https://docs.microsoft.com/en-us/windows/win32/secauthz/security-identifiers). Values in either **SID** or **Domain** with **Name** is required for the ACL. |
| Domain     | Domain for the user specified in **Name**. Required when a **SID** value is not entered. Local users have the SMB server NetBIOS name: *truenas\\smbusers*.
| Permission | Predefined permission combinations.<br>**Read**: Read access and Execute permission on the object (RX).<br>**Change**: Read access, Execute permission, Write access, and Delete object (RXWD).<br>**Full**: Read access, Execute permission, Write access, Delete object, change Permissions, and take Ownership (RXWDPO).<br><br>For more details, see [smbacls(1)](https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html). |
| Name      | Who this ACL entry applies to, shown as a user name. Requires adding the user **Domain**. |
| Type       | How permissions are applied to the share. **Allowed** denies all permissions by default except those that are manually defined. **Denied** allows all permissions by default except those that are manually defined. |

Clicking **Save** stores the share ACL and applies it to the share immediately.

### Configure Filesystem ACL

Selecting **Edit Filesystem ACL** takes you to the **Edit File ACL** screen in **Storage** to edit the dataset ACL.

Since SCALE gives users the option to use either POSIX or NFSv4 share [ACL types]({{< relref "/content/References/ACLPrimer.md" >}}), the **Edit File ACL** page differs depending on which ACL type the filesystem is using.

{{< expand "NFSv4 Filesystem ACL" "v" >}}
![DatasetACLEditNFSv4](/images/SCALE/DatasetACLEditNFSv4.png "NFSv4 Dataset Permissions Options")

The filesystem ACL defines the user accounts or groups that own or have specific [permissions]({{< relref "/SCALE/SCALETutorials/Storage/Pools/PermissionsSCALE.md" >}}) to the shared dataset.
The **User** and **Group** values show which accounts *own* or have full permissions to the dataset.
Change the default settings to your preferred primary account and group and set the **Apply permissions recursively** checkbox before saving any changes.

#### ACL Presets

To rewrite the current ACL with a standardized preset, click **Use ACL Preset** and choose an option:

**NFS4_OPEN**: Owner and group have full dataset control. All other accounts can modify the dataset contents.  
**NFS4_RESTRICTED**: Owner has full dataset control. Group can modify the dataset contents.
**NFS4_HOME**: Owner has full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.

#### Adding ACL Entries (ACEs)

To define permissions for a specific user account or group, click **Add Item**.
Open the **Who** drop-down, select **User** or **Group**, and choose a specific user or group account.
Define how the settings apply to the account, then choose which permissions to apply.
For example, to only allow the *newuser* user permission to view dataset contents but not make changes, set the **ACL Type** to **Allow** and **Permissions** to **Read**.

![ExampleACENFSv4](/images/SCALE/ExampleACENFSv4.png "Sample ACE")
{{< /expand >}}

{{< expand "POSIX Filesystem ACL" "v" >}}
![DatasetACLEditPOSIX](/images/SCALE/DatasetACLEditPOSIX.png "POSIX Dataset Permissions Options")

The filesystem ACL defines the user accounts or groups that own or have specific [permissions]({{< relref "/SCALE/SCALETutorials/Storage/Pools/PermissionsSCALE.md" >}}) to the shared dataset.

The **User** and **Group** values show which accounts own, or have full permissions to the dataset.
Change the default settings to your preferred primary account and group and set the **Apply permissions recursively** checkbox before saving any changes.

#### ACL Presets

To rewrite the current ACL with a standardized preset, click **Use ACL Preset** and choose an option:

**POSIX_OPEN**: Owner and group have full dataset control. All other accounts can modify the dataset contents.  
**POSIX_RESTRICTED**: Owner has full dataset control. Group can modify the dataset contents.
**POSIX_HOME**: Owner has full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.

#### Adding ACL Entries (ACEs)

To define permissions for a specific user account or group, click **Add Item**.
Open the **Who** drop-down, select **User** or **Group**, and choose a specific user or group account.
Define how the settings apply to the account, then choose which permissions to apply.
For example, to only allow the *newuser* user permission to view dataset contents but not make changes, set the **ACL Type** to **Allow** and **Permissions** to **Read**.

![ExampleACEPOSIX](/images/SCALE/ExampleACEPOSIX.png "Sample ACE")
{{< /expand >}}

## Activate the SMB Service

Connecting to an SMB share does not work when the related system service is not activated.
To make SMB share available on the network, go to **System Settings > Services** and click the toggle to running for **SMB**.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.

### Service Configuration

Configure the SMB service by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Unless you need a specific setting or are configuring a unique network environment, we recommend the default settings.

![SMBServiceOptionsSCALE](/images/SCALE/SMBServiceOptionsSCALE.png "SMB Service Options")

| Setting             | Description  |
|---------------------|--------------|
| NetBIOS Name        | Automatically populated with the system's original hostname. This name is limited to 15 characters and cannot be the **Workgroup** name. |
| NetBIOS Alias       | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| Workgroup           | Must match the Windows workgroup name. When this is unconfigured and Active Directory or LDAP is active, TrueNAS detects and sets the correct workgroup from these services. |
| Description         | This allows entering any notes or descriptive details about the service configuration. |
| Enable SMB1 support | Allow legacy SMB1 clients to connect to the server. Note that SMB1 is being deprecated and it is advised to upgrade clients to operating system versions that support modern SMB protocol versions. |
| NTLMv1 Auth         | When set, [smbd](https://www.samba.org/samba/docs/current/man-html/smbd.8.html) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. This setting allows backward compatibility with older versions of Windows, but is not recommended and should not be used on untrusted networks. |

{{< expand "Advanced Options" "v" >}}
![SMBServiceAdvancedSCALE](/images/SCALE/SMBServiceAdvancedSCALE.png "Advanced Options for the SMB Service")

| Setting                                 | Description  |
|-----------------------------------------|--------------|
| UNIX Charset                            | Character set used internally. **UTF-8** is standard for most systems as it supports all characters in all languages. |
| Log Level                               | Record SMB service messages up to the specified log level. By default, error and warning level messages are logged. It is not recommended to use a log level above minimum for production servers. |
| Use Syslog Only                         | Set to log authentication failures in */var/log/messages* instead of the default */var/log/samba4/log.smbd*. |
| Local Master                            | Set to determine if the system participates in a browser election. Clear the setting when the network contains an AD or LDAP server, or when Vista or Windows 7 machines are present. |
| Enable Apple SMB2/3 Protocol Extensions | These [protocol extensions](https://support.apple.com/en-us/HT210803) can be used by macOS to improve the performance and behavioral characteristics of SMB shares. This is required for Time Machine support. |
| Administrators Group                    | Members of this group are local administrators and automatically have privileges to take ownership of any file in an SMB share, reset permissions, and administer the SMB server through the Computer Management MMC snap-in. |
| Guest Account                           | Account used for guest access. Default is **nobody**. The chosen account is required to have permissions to the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL), add a new entry for the chosen guest account, and configure the permissions in that entry. If the selected **Guest Account** is deleted the field resets to **nobody**. |
| File Mask                               | Overrides default **0666** file creation mask which creates files with read and write access for everybody. |
| Directory Mask                          | Overrides default directory creation mask of **0777** which grants directory read, write and execute access for everybody. |
| Bind IP Addresses                       | Static IP addresses which SMB listens on for connections. Leaving all unselected defaults to listening on all active interfaces.
| Auxiliary Parameters                    | Stores additional [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html). Auxiliary parameters can be used to override the default SMB server configuration, but such changes may adversely affect SMB server stability or behavior. |
{{< /expand >}}

## Mounting SMB Share on another machine.

{{< expand "Linux" "v" >}}
Verify that your Linux distribution has the required CIFS packages installed.
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`.

If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.
{{< /expand >}}

{{< expand "Windows" "v" >}}
To mount the SMB share to a drive letter on Windows, open the command line and run the following command with the appropriate drive letter, computer name, and share name.

```net use Z: \\computer_name\share_name /PERSISTENT:YES```
{{< /expand >}}

{{< expand "Apple" "v" >}}
Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`.

Input the username and password for the user assigned to that pool or guest if the share has guest access.
{{< /expand >}}

{{< expand "FreeBSD" "v" >}}
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share`.
{{< /expand >}}

## SMB Home Shares

TrueNAS offers the **Use as Home Share** option for organizations or SMEs that want to use a single SMB share to provide a personal directory to every user account.

{{< hint warning >}}
The **Use as Home Share** feature is available for a single TrueNAS SMB share. You can create additional SMB shares without the **Use as Home Share** option enabled.
{{< /hint >}}

### Create a Pool and Join Active Directory

First, go to **Storage** and [create a pool]({{< relref "/SCALE/SCALETutorials/Storage/Pools/CreatePoolSCALE.md" >}}).

Next, [set up the Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}) that you want to share resources with over your network.

### Prepare a Dataset

Go to **Storage** and open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the root dataset in the pool you just created, then click **Add Dataset**.

Name the dataset and set the **Share Type** to **SMB**.

After creating the dataset, go to **Storage** and open <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the new dataset. Select **View Permissions**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

Click the **Group** drop-down list and change the owning group to your Active Directory domain admins.

![GroupDomainAdminsSCALE](/images/SCALE/GroupDomainAdminsSCALE.png "Set the owning group to Domain Admins")

Click **Use an ACL Preset** and choose **NFS4_HOME**. Then, click **Continue**.

![StoragePoolsOptionsEditPermissionsACLPresetHomeSCALE](/images/SCALE/StoragePoolsOptionsEditPermissionsACLPresetHomeSCALE.png "Set the Home ACL Preset")

### Create the Share

Go to **Shares > Windows (SMB) Shares** and click **Add**. 

Set the **Path** to the prepared dataset. 

The **Name** automatically becomes identical to the dataset. Leave this at the default.

Set the **Purpose** to **No presets**, then click **Advanced Options** and set **Use as Home Share**. Click **Save**.

Enable the **SMB** service in **System Settings > Services** to make the share is available on your network.

### Add Users

Go to **Credentials > Local Users** and click **Add**. Create a new user name and password. By default, the user **Home Directory** is titled from the user account name and added as a new subdirectory of **Home_Share_Dataset**.

![AccountsUsersEditHomeDirSCALE](/images/SCALE/AccountsUsersEditHomeDirSCALE.png "Editing a User Home Directory")

If existing users require access to the home share, go to **Credentials > Local Users** and edit an existing account.

Adjust the user home directory to the appropriate dataset and give it a name to create their own directory.

After adding the user accounts and configuring permissions, users can log in to the share and see a folder matching their username.

## SMB Shadow Copies

[Shadow Copies](https://docs.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service), also known as the Volume Shadow Copy Service (VSS) or Previous Versions, is a Microsoft service for creating volume snapshots.
You can use shadow copies to restore previous versions of files from within Windows Explorer.

By default, all ZFS snapshots for a dataset underlying an SMB share path are presented to SMB clients through the volume shadow copy service or are accessible directly with SMB when the hidden ZFS snapshot directory is within the SMB share path.

There are a few caveats about shadow copies to be aware of before activating the feature in TrueNAS:

* Shadow copies might not work if the Windows system is not patched to the latest service pack. If no previous versions of files to restore are visible, use Windows Update to ensure the system is fully up-to-date.

* Shadow copy support only works for ZFS pools or datasets.

* Permissions on the pool or dataset SMB shares must be configured appropriately. 

* Shadow copy cannot be deleted by users with an SMB client. Instead, the administrator uses the TrueNAS web interface to remove snapshots. Shadow copies can be disabled for an SMB share by unsetting **Enable shadow copies** for the SMB share. This does not prevent access to the hidden <file>.zfs/snapshot</file> directory for a ZFS dataset when the directory is located within the path for an SMB share.
  
To enable shadow copies, go to **Shares > Windows (SMB) Shares** and **Edit** an existing share.
Open the **Advanced Options** and set **Enable Shadow Copies**.

{{< expand "Windows 10 v2004 Issue" "v" >}}
Some users have experienced issues in the Windows 10 v2004 release where network shares can't be accessed. The problem appears to come from a bug in <file>gpedit.msc</file>, the Local Group Policy Editor. Unfortunately, setting the **Allow insecure guest logon** flag value to **Enabled** in **Computer Configuration > Administrative Templates > Network > Lanman Workstation** appears to have no effect on the configuration.

To work around this issue, edit the Windows registry. Use **Regedit** and go to **HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters**.
The **DWORD AllowInsecureGuestAuth** is an incorrect value: *0x00000000*. Change this value to **0x00000001** (Hexadecimal 1) to allow adjusting the settings in <file>gpedit.msc</file>. 
You can use a Group Policy Update to apply this  to a fleet of Windows machines.
{{< /expand >}}


{{< taglist tag="scalesmb" limit="10" >}}
{{< taglist tag="scaleafp" limit="10" title="Releated AFP Articles" >}}