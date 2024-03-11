---
title: "ACL Primer"
description: "Provides general information on POSIX and NFSv4 access control lists (ACLs) in TrueNAS systems and when to use them."
weight: 9
---

[TrueNAS SCALE brings full Access Control List (ACL) compatibility]({{< relref "PermissionsSCALE.md" >}}) between Windows and Linux with NFSv4 ACLs on ZFS and eases the challenges of integrating Unix servers in Windows environments.

## ACL Overview

In TrueNAS, ACLs specify which users or system processes (trustees) have access to datasets or shares.
ACLs also determine what operations trustees can perform.

Each entry in an ACL specifies a trustee and an operation.
For example, if an SMB share has an ACL that contains:

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

While the POSIX ACL type has basic read, write, and execute permissions, the NFSv4 ACL type lets administrators fine-tune advanced read, modify (write), and traverse (execute) permissions.

For example, NFSv4 advanced permissions allow an administrator to set up a trustee that can read and write data, but not delete anything.

The NFSv4 ACL type also lets administrators apply basic or advanced inheritance flags.
Basic flags enable or disable ACE (Access Control Entry) inheritance.
Advanced flags give further control of how an ACE applies to a dataset's files and directories.

For example, advanced flags allow an administrator to apply the ACL to new directories within a dataset, but not new files.

## NFSV4.1 Support in TrueNAS SCALE

SCALE 24.04 NFSv4.1 adds support to the NFS client of Linux, brings support for higher ACL types to the filesystem NFS and SMB clients.

Enhances the SMB client to present the Windows NT security descriptor as xattr in our system. This security descriptor is a list contain the discretionary access control lists (DACLs) entries that grant or deny access to users or groups.
It also contains system access control lists (SACLs) that control audit logging for users and groups.

It brings support for server-side discretionary access control lists (DACLs) and client-side support for the existing client DACL support for transport.
Permits support for DACLs or system access crontrol lists (SACLs). The flag remains set at zero for ACL. the ACL Type determines whether we operate on an ACL or DACL.
DACL support is modeled on the existing ACL support. Some functions have widened signatures to include the ACL type parameter.
Only OWNER@, GROUP@, EVERYONE@ and numeric UIDs or GIDs are supported in the ACEs, which is the way NFSv4 transfers them.
A new xattr handler easily preserves and converts the content of the SMB Security Descriptor DACL into native ZFS ACL when ingesting data during migration via SMB client.

Adds a new endpoint that can be used to control error handling. The default behavior is to prevent modifications to remote SMB server ACL, and fail xattr read if ID mapping fails.

In general, NFSv4.1 adds these new features:

* Enhances network performance and security, and client-side support for parallel NFS (pNFS).
  This allows presenting the same datastore on multiple data paths, enabling redundancy and load-balancing
  It also adds support for high-speed I/O to clustered servers, increases scalability and overall performance through parallel I/O.

* Adds a new session layer on top of the transport layer so a separate TCP connection for callbacks is no longer requiring.
  The NFS server can grant delegations to a client even when it cannot contact the client, for example, when NAT or a firewall interferes.

* Provides improvements that prevent a previous issue where certain operations could return an inaccurate result if a reply was lost and the operation was sent twice.

* Allows storing metadata, such as directory information, on a server other than where data is stored, keeping it out of the data path.
  The directory delegation, allows servers to delegate control of files to clients, allowing the client to perform file operations without requiring server interaction.

## Preferred Configurations for SMB Shares

To properly configure ACLs on SMB shares, users should consider how they intend to access the dataset/share with other devices and services on the network.

Even though TrueNAS SCALE NFSv4 ACL support provides the best possible compatibility with a Windows file system security model, it is not the best choice for every situation.

### When to use NFSv4 ACLs

TrueNAS administrators should use NFSv4 ACLs to cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX.

Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS CORE, FreeBSD, or other non-Linux ZFS implementations.

{{< hint type=warning >}}
Administrators *must* use NFSv4 if they intend to replicate data from TrueNAS SCALE to a TrueNAS CORE disaster recovery target.
{{< /hint >}}

TrueNAS administrators should also use NFSv4 ACLs if their organization requires advanced NFSv4 ACL features.

If an organization requires managers to review all data before deletion, administrators can use advanced NFSv4 permissions to let employees access and create files, but not edit or delete existing files.

NFSv4 can operate alongside CIFS, allowing organizations that use UNIX-based processing systems features to use Windows-based clients.
It can also cooperate with CIFS to bypass the NFS 16-group limitation by generating NFS credentials based on Unix and Windows groups.

Users should use NFSv4 ACLs when they intend to have nested groups within an SMB share.
Since users and nested groups might have different permissions for directories, the NFSv4 **Traverse** permission can enable users to connect to and move through directories that their nested group might not have read or write access to.

### When to use POSIX ACLs

TrueNAS administrators should use POSIX ACLs when the data backup target for the organization does not support native NFSv4 ACLs.
Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs.

{{< hint type=note title="Verify Permissions Backups" >}}
When deciding how to configure ACLs, administrators must verify they can correctly restore permissions from backups first.
{{< /hint >}}

Inversely, TrueNAS administrators should use POSIX ACLs when TrueNAS is the backup target for clients that use POSIX ACLs.
Since ZFS provides superb safety and data protection, many administrators use their TrueNAS system as a target for file-based backups from computers on their networks.
Using POSIX ACLs preserves POSIX.1e ACLs from client systems.

TrueNAS administrators should also use POSIX ACLs if they wish to replicate SMB datasets to other non-TrueNAS Linux servers with ZFS, especially when the Linux server should seamlessly take over serving files during disaster recovery.

TrueNAS SCALE creates a POSIX.1e ACL for datasets created when the **Dataset Preset** (ACL Type) is set to **Generic**.
