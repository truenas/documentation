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

To get started, make sure a
<a href="/docs/initial-setup/storage/datasets/">dataset has been created</a>.
This dataset serves as the storage for the data that is going to be
shared. If a dataset already exists, proceed to turning the SMB service
on.

## SMB Service

To turn the SMB service on, go to **Services** and click the slider for
*SMB*. If you wish to turn the service to activate whenever TrueNAS
boots, check the *Start Automatically* box.

> NOTE: The SMB share will not work if the service is not turned on.

The SMB service settings can be configured by clicking
<i class="fas fa-pen"></i>. Don't forget to click *SAVE* when changing
the settings. Unless a specific setting is needed, it is recommended to
use the default settings for the SMB service.

## SMB Share

Now create the Windows SMB share. Go to
**Sharing > Windows Shares (SMB)** and click **ADD**. The only required
field to continue is the *Path*. Set the path to the pool or dataset you want
to share by entering a path in the field or clicking a directory in the file browser. A descriptive *Name* helps identify the share.
Otherwise, TrueNAS automatically assigns the name of the pool or dataset
shared to the name of the SMB share. An optional *Description* can be
specified to help explain the purpose of the share. For a more granular
configuration, click **ADVANCED MODE**. See the web interface help text
for detailed explanations.

After changing the desired settings, click **SAVE**.

## Users for the Share

Users connecting to the SMB share must have user accounts on the TrueNAS
before they can connect. Add user accounts by going to
**Accounts > Users > ADD**. <!-- Can insert links here to "How to create users/groups when they're complete. -->

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
