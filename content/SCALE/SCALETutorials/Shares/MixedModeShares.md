---
title: "Multiprotocol Shares"
description: "Provides instructions on setting up SMB and NFSv4 mixed-mode shares."
weight: 40
tags:
- scaleshares
- scalesmb
- scalenfs
---

{{< toc >}}

## About Multiprotocol Shares

A multiprotocol or mixed-mode NFS and SMB share supports both NFS and SMB protocols for sharing data.
Multiprotocol shares allow clients running different operating systems to access the same data.
This can be particularly useful in environments with a mix of Unix-like systems (which prefer NFS) and Windows systems (which prefer SMB).

It's important to properly configure permissions and access control to ensure security and data integrity when using mixed-mode sharing, [see below](#configure-active-directory-for-nfs-security).
It is also important that NFS clients preserve extended attributes when copying files, or SMB metadata could be discarded in the copy.

## Adding a Multiprotocol Share Dataset

Before creating a mixed-mode share, create the dataset you want the share to use for data storage.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

We recommend creating a new dataset with the **Share Type** set to **MULTIPROTOCOL** for the new mixed-mode share.

{{< expand "Creating a Dataset" "v" >}}
{{< include file="/content/_includes/CreateDatasetSCALE.md" >}}
{{< /expand >}}

### Adjusting the Dataset ACL

## Configuring Active Directory for NFS Security

The NFS server does not evaluate permissions set in the SMB Share (not Filesystem) ACL
The NFS admin should protect the NFS export with proper authentication and authorization controls

AD or Kerberos

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).

## Creating the SMB Share

## Creating the NFS Share

## Starting the SMB and NFS Services

