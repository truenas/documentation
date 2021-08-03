---
title: "ACL Primer"
weight: 9
---

{{< toc >}}

Microsoft developed Windows ACLs in the 1990s (Windows NT) and integrated them into SMB (Server Message Block) operation for file sharing. Windows ACLs are more fine-grained and sophisticated than the traditional UNIX/POSIX permissions used by the NFSv3 protocol and local access on Unix servers. The differences between Windows ACLs and POSIX permissions presented significant administrative challenges for professionals who wanted to integrate their Unix servers in Windows environments.

TrueNAS remedies this administrative dilemma by bringing full ACL compatibility between Windows and Linux with NFSv4 ACLs on ZFS.

## ACL Overview

In TrueNAS, an access-control list (ACL) is a list of permissions associated with a dataset or share. An ACL specifies which users or system processes have access to datasets or shares, as well as what operations subjects may perform on them. 

Each entry in an ACL specifies a subject and an operation. For example, if an SMB share has an ACL that contains: 

`
Who: User
User: user1
Permissions: Full Control

Who: User
User: user2
Permissions: Read
`

The ACL would give *user1* permission to view, edit, and create files and directories within the share, but only give *user2* viewing permissions.

## NFSv4 in TrueNAS

While the POSIX ACL type allows administrators to assign read, write, and execute permissions to the chosen *Who*, the NFSv4 ACL type allows administrators to fine-tune the read, modify (write), and traverse (execute) permissions so that they apply to certain file traits and actions. 

The NFSv4 ACL type also allows administrators to apply basic or advanced inheritance flags. Basic flags enable or disable ACE (Access Control Entry) inheritance. Advanced flags allow further control of how the ACE is applied to files and directories in the dataset.

## Preferred Configurations for SMB Shares

Properly configuring ACLs on SMB shares is not straightforward, depending on the existing environment.

Even though TrueNAS SCALE NFSv4 ACL support provides the best possible compatibility with a Windows file system security model, it is not the best choice for every situation. 

### When to NFSv4 ACLs

TrueNAS administrators should use NFSv4 ACLs to **losslessly migrate Windows-style ACLs** across domains and active directories useing ACL models richer than POSIX1E ACLs.

NFSv4 ACLs **maintain compatibility with TrueNAS Core / Enterprise and FreeBSD**. POSIX1E ACLs are a Linux-specific ZFS feature. If TrueNAS administrators intend to migrate data from TrueNAS CORE/Enterprise, FreeBSD, or other non-Linux ZFS implementations into TrueNAS SCALE, the NFSv4 ACL type preserves permissions.

TrueNAS administrators should also use NFSv4 ACLs if their **infrastructure requires advanced NFSv4 ACL features**. NFSv4 ACLs have many features that meet critical business needs and simplify server administration, such as the ability to explicitly deny users or groups access to a share, and the ability to differentiate entries that are inherited and non-inherited.

### When to POSIX ACLs

* Backup strategy for the TrueNAS data does not support native NFSv4 ACLs. POSIX1E ACLs have a long history on the Linux platform and many backup products that access the server outside of the SMB protocol will not be able to understand and preserve native NFSv4 ACLs. If this is the case, then POSIX1E ACL type must be selected to maintain compatibility with the backup product. Note: when making decisions about how you’re configuring ACLs, also take the extra time to verify that you can restore the permissions correctly from backups.
* TrueNAS is a backup target for clients that have POSIX1E ACLs in use. Many administrators take advantage of the tremendous safety and data protection that ZFS gives by making their TrueNAS server a target for file-based backups from computers on their networks. Just like mentioned above, POSIX1E ACLs have a long history on Linux. There are many common file-based backup or synchronization tools that are POSIX1E ACL aware, e.g. rsync. If you wish to preserve POSIX1E ACLs from the client, then POSIX1E ACLs are a requirement.
* ZFS replication to non-TrueNAS ZFS on Linux. If the SMB dataset is replicated to another non-TrueNAS Linux server with ZFS on Linux, and this server is expected to be able to seamlessly take over serving files in a disaster recovery scenario, then POSIX1E ACLs must be used.
