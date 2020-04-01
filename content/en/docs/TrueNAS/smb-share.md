---
title: "Configuring a Windows SMB share"
linkTitle: "Configuring a Windows SMB share"
description: "A how-to guide on how to set up a general purpose Windows SMB share for TrueNAS"
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

## Create Users for the Share

Each user connecting to the share must have a user profile that exists on the
TrueNAS.

## Edit ACLs

The next step for setting up a general purpose SMB share is to control the
permissions of the users accessing the share. After an SMB share has been
created, it appears in the **Sharing > Windows Shares (SMB)** list. Go to the
list and click
**<i class="fa fa-ellipsis-v" aria-hidden="true"></i> > Edit ACL** for the
desired share. Refer to the web interface help text for detailed explanations
on each ACL setting.