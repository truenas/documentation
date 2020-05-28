---
title: "Configuring a Windows SMB share"
linkTitle: "Configuring a Windows SMB share"
description: "A how-to guide on how to set up a general purpose Windows SMB share for TrueNAS"
type: docs
---

## Introduction

If sharing a lot of data securely with many users is the goal, then setting up
an SMB share can help. SMB shares allow the management and administration
of large or small pools of data. The brilliant design of the TrueNAS web
interface makes it easy to create and configure an SMB share. SMB shares can be
connected to any major operating systems including Windows, MacOS, and Linux.

## Create SMB Share

First thing is first, set up the Windows SMB share on the TrueNAS system. This
is done by going to **Sharing > Windows Shares (SMB) > ADD**. The only required
field to continue is the *Path*. Set the path to the pool or dataset you want
to share. If a pool or dataset has not been created for sharing, do so by going
to **Storage > Pools > ADD**. Give the share a custom name in the *Name* field.
Otherwise, TrueNAS automatically assigns the name of the pool or dataset shared
to the name of the SMB share. An optional *Description* can be specified
to help explain the purpose of the share. For a more granular configuration,
click **ADVANCED MODE**. See the web interface help text for detailed
explanations.

After changing the desired settings, click **SAVE**.

## Users for the Share

Users connecting to the SMB share must have user accounts on the TrueNAS before
they can connect. Add user accounts by going to **Accounts > Users > ADD**.

If LDAP has been configured and you want users from the LDAP server to be
allowed to access the SMB share, check the setting **Samba Schema** in
**Directory Services > LDAP > ADVANCED MODE**.

{{% alert color="warning" %}}
If the LDAP setting **Samba Schema** is enabled, then the local TrueNAS user
accounts cannot be used to connect to the share. Only user accounts configured
on the LDAP server can connect to the share.
{{% /alert %}}

## Edit ACLs

The final step for setting up a general purpose SMB share is to control the
permissions of the users accessing the share. After an SMB share has been
created, it appears in the **Sharing > Windows Shares (SMB)** list. Go to the
list and click
**<i class="fa fa-ellipsis-v" aria-hidden="true"></i> > Edit ACL** for the
desired share. Refer to the web interface help text for detailed explanations
on each ACL setting.