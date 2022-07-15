---
title: "SMB Share Creation"
description: "This article provides information on how to create Server Message Block (SMB) shares on your TrueNAS."
weight: 10
aliases: /core/sharing/smb/smbshare/
tags:
- coresmb
---

{{< toc >}}

## SMB Background

SMB (also known as CIFS) is the native file sharing system in Windows.
SMB shares can connect to any major operating system, including Windows, MacOS, and Linux.
SMB can be used in TrueNAS to share files among single or multiple users or devices.

SMB shares allow a wide range of permissions and security settings, and can support advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for the management and administration of large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
There are multiple versions of the SMB protocol. An SMB client typically negotiates the highest supported SMB protocol during SMB session negotiation. Industry-wide, the usage of the SMB1 protocol (sometimes referred to as NT1) is [being deprecated]({{< relref "/CORE/CoreSecurityReports/SMB1Advisory.md" >}}). This deprecation is for security reasons.
However, most SMB clients support SMB 2 or 3 protocols, even when they are not the default protocols.

{{< hint info >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network. The NetBIOS name server (nmbd) is disabled by default in TrueNAS. You can enable it in **Network > Global Configuration** if this functionality is required.

MacOS clients use mDNS to discover the presence of SMB servers on the network. The mDNS server (avahi) is enabled by default on TrueNAS.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but depending on the version of the Windows client, network discovery can be disabled by default.

Discoverability through broadcast protocols is a convenience feature and not required to access a SMB server.
{{< /hint >}}

## First Steps

### Create a Dataset

It is recommended you create a new dataset and set the **Share Type** to **SMB** for the new SMB share.

Create the ZFS dataset with these settings:

 * **aclmode** = "restricted"
 * **case sensitivity** = "insensitive"

A default Access Control List is also applied to the dataset.
This default ACL is restrictive and only allows access to the dataset owner and group.
You can modify this ACL later according to your use case.

### Create Local User Accounts

By default, all new local users are members of a built in SMB group called **builtin users**. You can use this group to grant access to all local users on the server. You can use additional [groups]({{< relref "/CORE/CORETutorials/SettingUpUsersAndGroups.md" >}}) to fine-tune permissions to large numbers of users. User accounts built-in to TrueNAS or that do not have the **smb** flag set cannot be used for SMB access.
{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Although anonymous or guest access to the share is possible, this is a security vulnerability and is being deprecated by the major SMB client vendors. This partly because signing and encryption are not possible for guest sessions.
{{< /expand >}}
{{< expand "What about LDAP users?" "v" >}}
When LDAP is configured and you want users from the LDAP server to have access the SMB share, go to **Directory Services > LDAP > ADVANCED MODE** and set **Samba Schema**. However, local TrueNAS user accounts no longer have access to the share.
{{< /expand >}}

### Tune the Dataset ACL

After a dataset and accounts are created, you will need to investigate your access requirements and adjust the dataset ACL to match. To edit the ACL, go to **Storage > Pools**, open the options for the new dataset, and click *Edit Permissions*.
Many home users typically add a new entry that grants *FULL_CONTROL* to the *builtin_users* group with the flags set to *INHERIT*.
See the [Permissions article]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) for more details.

## Creating the SMB Share

To create a Windows SMB share, go to **Sharing > Windows Shares (SMB)** and click **ADD**.

![SMBShareAdd](/images/CORE/12.0/SharingSMBAdd.png "Basic SMB Share Options")

The **Path** and **Name** of the SMB share define the absolute minimum amount of information required to create a new SMB share. The **Path** is the directory tree on the local filesystem that is exported over the SMB protocol, and the **Name** is the name of the SMB share, which forms a part of the full share pathname when SMB clients perform an SMB tree connect. Because of the way that the value in **Name** is used in the SMB protocol, it must be less than or equal to 80 characters in length, and must not contain any invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. If **Name** is left blank, then the last component of the value in **Path** is used as the share name.

You can set a share **Purpose** to apply and lock pre-defined advanced options for the share.
To retain full control over all the share **Advanced Options**, choose **No presets**.

You can specify an optional value in **Description** to help explain the purpose of the share.

**Enabled** allows this path to be shared when the SMB service is activated.
Clearing **Enabled** disables the share without deleting the configuration.

See [SMB Share Screen]({{< relref "/CORE/UIReference/Sharing/SMB/SMBShareScreen.md" >}}) for more information on SMB Share settings.

## Activate the SMB Service

Connecting to an SMB share does not work when the related system service is not activated.
To make SMB share available on the network, **Services** and click the **SMB** toggle to start the service.
If you want the service to activate whenever TrueNAS boots, set **Start Automatically**.

See [SMB Service Screen]({{< relref "/CORE/UIReference/Services/SMBScreen.md" >}}) for more information on SMB services settings.

## Mounting an SMB Share on Another Machine

{{< expand "Mount Commands" >}}
{{< expand "Linux" >}}

Verify that the required CIFS packages are installed for your distribution of Linux.
Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`.

If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.

{{< /expand >}}
{{< expand "Windows" >}}

To mount the SMB share to a drive letter on windows, open the command line and run the following command with the appropiate drive letter, computer name, and share name.

```net use Z: \\computer_name\share_name /PERSISTENT:YES```

{{< /expand >}}
{{< expand "Apple" >}}

Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`.

Input the username and password for the user assigned to that pool or Guest if Guest access is enabled on the share.

{{< /expand >}}
{{< expand "FreeBSD" >}}

Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share`.

{{< /expand >}}
{{< /expand >}}

{{< taglist tag="coresmb" limit="10" >}}