---
title: "Server Message Block (SMB)"
weight: 50
---

Server Message Block shares, also known as Common Internet File System (CIFS) shares, are accessible by Windows, macOS, Linux, and BSD computers.
SMB provides more configuration options than NFS and is a good choice on a network for Windows or Mac systems.

TrueNAS uses [Samba](https://www.samba.org/) to share pools using Microsoft's SMB protocol.
SMB is built into the Windows and macOS operating systems and most Linux and BSD systems pre-install an SMB
client to provide support for the SMB protocol.

The SMB protocol supports many different types of configuration scenarios, ranging from the simple to complex.
The complexity of the scenario depends upon the types and versions of the client operating systems that will connect to the share, whether the network has a Windows server, and whether Active Directory is being used.
Depending on the authentication requirements, it might be necessary to create or import users and groups.

Samba supports server-side copy of files on the same share with clients from Windows 8 and higher.
Copying between two different shares is not server-side.
Windows 7 clients support server-side copying with [Robocopy](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc733145(v=ws.11)).

[SMB Tips and Tricks](https://www.truenas.com/community/resources/smb-tips-and-tricks.15/) shows helpful hints for configuring and managing SMB networking.

Another helpful reference is [Methods For Fine-Tuning Samba Permissions](https://www.truenas.com/community/threads/methods-for-fine-tuning-samba-permissions.50739/).

{{< hint type=important >}}
[The SMB1 protocol is disabled by default for security]({{< relref "/CORE/CORESecurityReports/SMB1Advisory.md" >}}).
{{< /hint >}}

By default, Samba disables NTLMv1 authentication for security.
Standard configurations of Windows XP and some configurations of later clients like Windows 7 will not be able to connect with NTLMv1 disabled.
[Security guidance for NTLMv1 and LM network authentication](https://support.microsoft.com/en-us/help/2793313/security-guidance-for-ntlmv1-and-lm-network-authentication) has information about the security implications and ways to enable NTLMv2 on those clients.
If changing the client configuration is not possible, NTLMv1 authentication can be enabled by selecting the **NTLMv1 auth** option in the SMB service configuration screen.

{{< include file="/_includes/SMBShareMSDOSalert.md" type="page" >}}

To view all active SMB connections and users, enter `smbstatus` in the TrueNAS **Shell**.

Most configuration scenarios require each user to have their own user account and to authenticate before accessing the share.
This allows the administrator to control access to data, provide appropriate permissions to that data, and to determine who accesses and modifies stored data.
A Windows domain controller is not needed for authenticated SMB shares, which means that additional licensing costs are not required.
However, because there is no domain controller to provide authentication for the network, each user account must be created on the TrueNAS system.
This type of configuration scenario is often used in home and small networks as it does not scale well if many user accounts are needed.

[Shadow Copies](https://en.wikipedia.org/wiki/Shadow_copy), also known as the Volume Shadow Copy Service (VSS) or Previous Versions, is a Microsoft service for creating volume snapshots.
Shadow copies can be used to restore previous versions of files from within Windows Explorer.

By default, all ZFS snapshots for a dataset underlying an SMB share path are presented to SMB clients through the volume shadow copy service (or accessible directly with SMB if the hidden ZFS snapshot directory is located within the path of the SMB share).

Before using shadow copies with TrueNAS, be aware of these caveats:

* If the Windows system is not fully patched to the latest service pack, Shadow Copies might not work.
  If no previous versions of files to restore are visible, use Windows Update to ensure the system is fully up-to-date.

* Shadow copy support only works for ZFS pools or datasets.

* Appropriate permissions must be configured on the pool or dataset being shared by SMB.

* Users cannot delete shadow copies via an SMB client.
  Instead, the administrator can remove snapshots from the TrueNAS web interface.
  Shadow copies can be disabled for an SMB share by unsetting the *Enable shadow copies* advanced option for the SMB share.
  Note that this does not prevent access to the hidden <file>.zfs/snapshot</file>
  directory for a ZFS dataset if it is located within the *Path* for an SMB share.

macOS includes the [Time Machine](https://support.apple.com/en-us/HT201250) feature which performs automatic backups.
TrueNAS supports Time Machine backups for both SMB and AFP shares.

Configuring a quota for each Time Machine share helps prevent backups from using all available space on the TrueNAS system.
Time Machine waits two minutes before creating a full backup.
It then creates ongoing hourly, daily, weekly, and monthly backups.
**The oldest backups are deleted when a Time Machine share fills up, so make sure that the quota size is large enough to hold the desired number of backups.**
A default installation of macOS is over 20 GiB.

Configure a global quota using the instructions in [Set up Time Machine for multiple machines with OSX Server-Style Quotas](https://forums.freenas.org/index.php?threads/how-to-set-up-time-machine-for-multiple-machines-with-osx-server-style-quotas.47173/)
or create individual share quotas.

See [vfs_fruit(8)](https://www.samba.org/samba/docs/current/man-html/vfs_fruit.8.html) and the [Apple documentation](https://support.apple.com/en-us/HT201250) for detailed Time Machine configuration instructions.
