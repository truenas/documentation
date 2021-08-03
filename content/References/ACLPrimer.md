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

### When to use NFSv4 ACLs

TrueNAS administrators should use NFSv4 ACLs to **losslessly migrate Windows-style ACLs** across domains and active directories useing ACL models richer than POSIX1E ACLs.

NFSv4 ACLs **maintain compatibility with TrueNAS Core / Enterprise and FreeBSD**. POSIX1E ACLs are a Linux-specific ZFS feature. If TrueNAS administrators intend to migrate data from TrueNAS CORE/Enterprise, FreeBSD, or other non-Linux ZFS implementations into TrueNAS SCALE, the NFSv4 ACL type preserves permissions.

TrueNAS administrators should also use NFSv4 ACLs if their **infrastructure requires advanced NFSv4 ACL features**. NFSv4 ACLs have many features that meet critical business needs and simplify server administration, such as the ability to explicitly deny users or groups access to a share, and the ability to differentiate entries that are inherited and non-inherited.

### When to use POSIX ACLs

TrueNAS administrators should use POSIX ACLs when their organization's **data backup strategy does not suppor native NFSv4 ACLs**. Since the Linux platform used POSIX for a long time, many backup products that access the server outside of the SMB protocol will not be able to understand or preserve native NFSv4 ACLs.

{{< hint info >}}
**Note:** When deciding how to configuring ACLs, administrators should also take time to verify that they can restore permissions correctly from backups.
{{< /hint >}}

Inversely, TrueNAS administrators should use POSIX ACLs when TrueNAS is the backup target for clients that use POSIX ACLs. Since ZFS provides superb safety and data protection, many administrators use their TrueNAS system as a target for file-based backups from computers on their networks. Using POSIX ACLs preserves POSIX.1e ACLs from client systems.

TrueNAS administrators should also use POSIX ACLs if they wish to **replicate ZFS filesystems on SMB datasets to other non-TrueNAS Linux** servers. Especially when the Linux server should be able to seamlessly take over serving files in a disaster recovery scenario.
