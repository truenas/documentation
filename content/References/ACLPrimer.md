---
title: "ACL Primer"
weight: 9
---

{{< toc >}}

Microsoft developed Windows ACLs in the 1990s (Windows NT) and integrated them into SMB (Server Message Block) operation for file sharing. Windows ACLs are more fine-grained and sophisticated than the traditional UNIX/POSIX permissions used by the NFSv3 protocol and local access on Unix servers. The differences between Windows ACLs and POSIX permissions presented significant administrative challenges for professionals who wanted to integrate their Unix servers in Windows environments.

TrueNAS SCALE remedies this administrative dilemma by bringing full ACL compatibility between Windows and Linux with NFSv4 ACLs on ZFS.

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

The NFSv4 ACL type also allows administrators to apply basic or advanced inheritance flags. Basic flags enable or disable ACE inheritance. Advanced flags allow further control of how the ACE is applied to files and directories in the dataset.

## Preferred Configurations
