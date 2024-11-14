---
title: "Windows Shares (SMB)"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/sharing/smb/smbshare/"
description: "Tutorials for SMB sharing scenarios."
geekdocCollapseSection: true
weight: 50
aliases: 
 - /hub/sharing/smb/smb-share/
 - /core/sharing/smb/smbshare/
 - /core/coretutorials/sharing/smb/smbshare/
related: false
tags:
- smb
---

## SMB Background

SMB (also known as CIFS) is the native file sharing system in Windows.
SMB shares can connect to any major operating system. This includes Windows, MacOS, and Linux.

TrueNAS can use SMB to share files among one or many users or devices.
SMB supports a wide range of permissions and security settings.
SMB can support advanced permissions (ACLs) on Windows and other systems.
SMB also supports Windows Alternate Streams and Extended Metadata.
SMB is suitable for the management and administration of large or small pools of data.  

{{< hint type=important >}}
TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
There are many versions of the SMB protocol.
During SMB session negotiation, an SMB client attempts to negotiate the highest SMB protocol.
Industry-wide, the usage of the SMB1 protocol (sometimes referred to as NT1) is [being deprecated]({{< relref "/CORE/CoreSecurityReports/SMB1Advisory.md" >}}) for security reasons.
However, most SMB clients support SMB 2 or 3 protocols, even when they are not the default protocols.
{{< /hint >}}

{{< hint type=note >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network.
The NetBIOS name server (nmbd) is disabled by default in TrueNAS.
You can enable it in **Network > Global Configuration** if this functionality is required.

MacOS clients use mDNS to discover the presence of SMB servers on the network.
The mDNS server (avahi) is enabled by default on TrueNAS.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers.
Check the version of the Windows client.
In some versions of the Windows client, the default settings disable network discovery.

Discoverability through broadcast protocols is a convenience feature.
It is not required to access an SMB server.
{{< /hint >}}

## First Steps

1. Create a dataset.

   {{< include file="/static/includes/ShareDatasetsNotPools.md" >}}

   For the new SMB share, the recommendation is to create a new dataset and set the **Share Type** to **SMB**.

   Create the ZFS dataset with these settings:

   * **aclmode** = restricted
   * **case sensitivity** = insensitive

   A default Access Control List is also applied to the dataset.
   This default ACL is restrictive and only allows access to the dataset owner and group.
   You can change this ACL later according to your use case.

2. Create local user accounts.

   By default, all new local users are members of a built-in SMB group called **builtin users**.
   You can use this group to grant access to all local users on the server.
   You can use additional [groups]({{< relref "/CORE/CORETutorials/SettingUpUsersAndGroups.md" >}}) to fine-tune permissions to large numbers of users.
   User accounts built-in to TrueNAS cannot access SMB.
   User accounts that do not have the **smb** flag set cannot access SMB.

   As of 13.3, SMB user passwords can include the question mark (?).

   {{< expand "Why not just allow anonymous access to the share?" "v" >}}
   Anonymous or guest access to the share is possible, but this is a security vulnerability.
   Anonymous or guest access is being deprecated by the major SMB client vendors.
   This partly because signing and encryption are not possible for guest sessions.
   {{< /expand >}}

   {{< expand "What about LDAP users?" "v" >}}
   {{< hint type=important >}}
   Support for LDAP **Samba Schema** is deprecated in TrueNAS 13.0 or later.
   Users with LDAP and SMB shares configured should begin to migrate legacy Samba domains to Active Directory.
   {{< /hint >}}

   With LDAP configured, users from the LDAP server can have access the SMB share.
   Go to **Directory Services > LDAP > ADVANCED MODE** and set **Samba Schema**.
   Caution: local TrueNAS user accounts no longer have access to the share.
   {{< /expand >}}

3. Tune the dataset ACL.

   After creating a dataset and the needed accounts, determine the access requirements and adjust the dataset ACL to match.
   To edit the ACL, go to **Storage > Pools**, open the options for the new dataset, and click **Edit Permissions**.
   Many home users often add a new entry that grants this access: **FULL_CONTROL** to the **builtin_users** group with the flags set to **INHERIT**.
   See the [Permissions article]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) for more details.

## Creating an SMB Share

To create a Windows SMB share, go to **Sharing > Windows Shares (SMB)** and click **ADD**.

{{< trueimage src="/images/CORE/Sharing/SharingSMBAdd.png" alt="Basic SMB Share Options" id="Basic SMB Share Options" >}}

The **Path** and **Name** of the SMB share define the smallest amount of information required to create a new SMB share.
The **Path** is the directory tree on the local file system exported over the SMB protocol.
**Name** is the name of the SMB share.
This forms a part of the full share path name when SMB clients perform an SMB tree connect.
Enter a name that is less than or equal to 80 characters in length.
The name shoud not contain any invalid characters.
Microsoft documentation [MS-FSCC section 2.1.6](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea) lists these invalid characters.
The last component of the value in **Path** becomes the share name if **Name** is blank or empty.

You can set a share **Purpose** to apply and lock pre-defined advanced options for the share.
To keep full control over all the share **Advanced Options**, choose **No presets**.

You can specify an optional value in **Description** to help explain the purpose of the share.

**Enabled** shares this path when the SMB service is activated.
Clearing **Enabled** disables the share without deleting the configuration.

See [SMB Share Screen]({{< relref "SMBShareScreen.md" >}}) for more information on SMB Share settings.

## Activating the SMB Service

Connecting to an SMB share does not work when the related system service is not activated.
To make an SMB share available on the network, go to **Services** and click the **SMB** toggle to start the service.
If you want the service to activate whenever TrueNAS boots, select **Start Automatically**.

See [SMB Service Screen]({{< relref "/CORE/UIReference/Services/SMBScreen.md" >}}) for more information on SMB services settings.

## Mounting an SMB Share on Another Machine

{{< expand "Mount Commands" >}}
### Linux
Verify that the required CIFS packages are installed for your distribution of Linux.
Create a mount point. Enter `sudo mkdir /mnt/smb_share`.

Mount the volume. Enter `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`.

If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.

### Windows
To mount the SMB share to a drive letter on Windows, open the command line and enter the following command with the appropriate drive letter, computer name, and share name.

```net use Z: \\computer_name\share_name /PERSISTENT:YES```

{{< hint type=tip title="Troubleshooting Tip" >}}
In case of Windows reporting an incorrect password, you might have to change your Windows security settings using **Local Security Policy > Local Policies > Security Options > Network security: LAN Manager authentication level > Send NTLMv2 response only**.
{{< /hint >}}

### Apple
Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`.

Input the username and password for the user assigned to that pool or guest if gGuest access is enabled on the share.

### FreeBSD
Create a mount point. Enter `sudo mkdir /mnt/smb_share`.

Mount the volume. Enter `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share`.
{{< /expand >}}

<div class="noprint">

## SMB Articles

{{< children depth="2" description="true" >}}

</div>
