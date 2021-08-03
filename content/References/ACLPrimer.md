---
title: "ACL Primer"
weight: 9
---

{{< toc >}}

[TrueNAS SCALE brings full ACL compatibility]({{< relref "PermissionsSCALE.md" >}}) between Windows and Linux with NFSv4 ACLs on ZFS and eases the challenges of integrating Unix servers in Windows environments.

## ACL Overview

In TrueNAS, ACLs specify which users or system processes (trustees) have access to datasets or shares. ACLs also determine what operations trustees may perform.

Each entry in an ACL specifies a trustee and an operation. For example, if an SMB share has an ACL that contains: 

```  
Who: User  
User: user1  
Permissions: Full Control  
  
Who: User  
User: user2  
Permissions: Read  
```  

The ACL would give *user1* permission to view, edit, and create files and directories within the share, but only give *user2* viewing permissions.

## NFSv4 in TrueNAS

While the POSIX ACL type lets administrators assign read, write, and execute permissions to the chosen *Who*, the NFSv4 ACL type lets administrators fine-tune the read, modify (write), and traverse (execute) permissions so that they apply to certain file traits and actions. 

The NFSv4 ACL type also lets administrators apply basic or advanced inheritance flags. Basic flags enable or disable ACE (Access Control Entry) inheritance. Advanced flags give further control of how an ACE applies to a dataset's files and directories.

## Preferred Configurations for SMB Shares

Properly configuring ACLs on SMB shares is not straightforward, depending on the existing environment.

Even though TrueNAS SCALE NFSv4 ACL support provides the best possible compatibility with a Windows file system security model, it is not the best choice for every situation. 

### When to use NFSv4 ACLs

TrueNAS administrators should use NFSv4 ACLs to losslessly migrate Windows-style ACLs across domains and active directories using ACL models richer than POSIX1E ACLs.

NFSv4 ACLs maintain compatibility with TrueNAS Core / Enterprise and FreeBSD. POSIX1E ACLs are a Linux-specific ZFS feature. If TrueNAS administrators intend to migrate data from TrueNAS CORE/Enterprise, FreeBSD, or other non-Linux ZFS implementations into TrueNAS SCALE, the NFSv4 ACL type preserves permissions.

TrueNAS administrators should also use NFSv4 ACLs if their infrastructure requires advanced NFSv4 ACL features. NFSv4 ACLs meet many critical business needs and simplify server administration. Administrators can use NFSv4 ACLs to explicitly deny users or groups access to a share. NFSv4 ACLs can also differentiate entries that are inherited and non-inherited.

### When to use POSIX ACLs

TrueNAS administrators should use POSIX ACLs when their organization's data backup target does not support native NFSv4 ACLs. Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol can't understand or preserve native NFSv4 ACLs.

{{< hint info >}}
**Note:** When deciding how to configuring ACLs, administrators should verify that they can correctly restore permissions from backups.
{{< /hint >}}

Inversely, TrueNAS administrators should use POSIX ACLs when TrueNAS is the backup target for clients that use POSIX ACLs. Since ZFS provides superb safety and data protection, many administrators use their TrueNAS system as a target for file-based backups from computers on their networks. Using POSIX ACLs preserves POSIX.1e ACLs from client systems.

TrueNAS administrators should also use POSIX ACLs if they wish to replicate SMB datasets to other non-TrueNAS Linux servers with ZFS, especially when the Linux server should seamlessly take over serving files during disaster recovery.
