---
title: "Configuring a Windows SMB share"
description: "How to set up a general purpose Server Message Block share."
tags: ["networking","Samba"]
---

## SMB Overview

SMB (also known as CIFS) is the native file sharing system in Windows. Computers on a local network that offer SMB shares to other devices will appear by default in the Navigation Pane of Windows File Explorer. SMB shares can be connected to any major operating systems including Windows, MacOS, and Linux. SMB can be used in TrueNAS to share files with one user or device, or many. 

SMB shares allow a wide range of permissions and security settings, and can support advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata. SMB is suitable for the management and administration of large or small pools of data.

TrueNAS uses Samba to provide SMB services. SMB has multiple versions. Version 1 (SMB1) is strongly discouraged for security reasons - please see the separate advisory.  Modern computers will usually use SMB versions 2.0 up to 3.1.1. 

{{% alert color="warning" %}}
SMB1 and another old protocol, NetBIOS ("NetBIOS over TCP/IP"), are usually **not** required for discovery of SMB shares, and in most cases they can - and should - be safely disabled. A newer protocol called WS-Discovery is used instead in all modern versions of Windows to discover and list file shares. By default, TrueNAS will start a WS-Discovery service when required.
{{% /alert %}}

To get started, make sure a <a href="/hub/initial-setup/storage/datasets/">dataset has been created</a>. This dataset stores the data that is going to be shared. Next, activate the SMB service, create the share, and configure permissions for the share.

## SMB Service

Connecting to an SMB share does not work when the related system service is not activated. To turn the SMB service on, go to **Services** and click the slider for *SMB*. If you want the service to activate whenever TrueNAS boots, set *Start Automatically*. 

The SMB service settings can be configured by clicking <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>. Don't forget to click *SAVE* when changing the settings. Unless a specific setting is needed, it is recommended to use the default settings for the SMB service.

## SMB Share

Now create the Windows SMB share. Go to **Sharing > Windows Shares (SMB)** and click **ADD**. The only required field to continue is the *Path*. Set the path to the pool or dataset you want to share by entering a path in the field or clicking a directory in the file browser.

A descriptive *Name* helps identify the share. Otherwise, TrueNAS automatically assigns the name of the pool or dataset shared to the name of the SMB share.

You can set a share *Purpose* to apply and lock pre-defined Advanced Options for the share.
To retain full control over all the share Advanced Options, choose *No presets*.
The following table shows the preset options for the different *Purposes* and if those options are locked.
An [x] indicates the option is enabled, [ ] means the option is disabled, and [text] indicates a specific value:

| Default share parameters                        | Multi-user time machine                           | Multi-protocol (AFP/SMB) shares                 | Multi-protocol (NFSv3/SMB) shares                 | Private SMB Datasets and Shares                   | Files become readonly of SMB after 5 minutes      |
|:-----------------------------------------------:|---------------------------------------------------|-------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
| [x] Enable ACL (locked)                         | [x] Enable ACL (unlocked)                         | [x] Enable ACL (locked)                         | [ ] Enable ACL (locked)                           | [ ] Enable ACL (unlocked)                         | [ ] Enable ACL (unlocked)                         |
| [ ] Export Read Only (locked)                   | [ ] Export Read Only (unlocked)                   | [ ] Export Read Only (unlocked)                 | [ ] Export Read Only (unlocked)                   | [ ] Export Read Only (unlocked)                   | [ ] Export Read Only (unlocked)                   |
| [x] Browsable to Network Clients (locked)       | [x] Browsable to Network Clients (unlocked)       | [x] Browsable to Network Clients (unlocked)     | [x] Browsable to Network Clients (unlocked)       | [x] Browsable to Network Clients (unlocked)       | [x] Browsable to Network Clients (unlocked)       |
| [ ] Allow Guest Access (unlocked)               | [ ] Allow Guest Access (unlocked)                 | [ ] Allow Guest Access (unlocked)               | [ ] Allow Guest Access (unlocked)                 | [ ] Allow Guest Access (unlocked)                 | [ ] Allow Guest Access (unlocked)                 |
| [ ] Access Based Share Enumeration (locked)     | [ ] Access Based Share Enumeration (unlocked)     | [ ] Access Based Share Enumeration (unlocked)   | [ ] Access Based Share Enumeration (unlocked)     | [ ] Access Based Share Enumeration (unlocked)     | [ ] Access Based Share Enumeration (unlocked)     |
| [ ] Hosts Allow (locked)                        | [ ] Hosts Allow (unlocked)                        | [ ] Hosts Allow (unlocked)                      | [ ] Hosts Allow (unlocked)                        | [ ] Hosts Allow (unlocked)                        | [ ] Hosts Allow (unlocked)                        |
| [ ] Hosts Deny (locked)                         | [ ] Hosts Deny (unlocked)                         | [ ] Hosts Deny (unlocked)                       | [ ] Hosts Deny (unlocked)                         | [ ] Hosts Deny (unlocked)                         | [ ] Hosts Deny (unlocked)                         |
| [ ] Use as Home Share (locked)                  | [ ] Use as Home Share (unlocked)                  | [ ] Use as Home Share (unlocked)                | [ ] Use as Home Share (unlocked)                  | [ ] Use as Home Share (unlocked)                  | [ ] Use as Home Share (unlocked)                  |
| [ ] Time Machine (locked)                       | [ ] Time Machine (unlocked)                       | [ ] Time Machine (unlocked)                     | [ ] Time Machine (unlocked)                       | [ ] Time Machine (unlocked)                       | [ ] Time Machine (unlocked)                       |
| [x] Enable Shadow Copies (locked)               | [x] Enable Shadow Copies (unlocked)               | [x] Enable Shadow Copies (unlocked)             | [x] Enable Shadow Copies (unlocked)               | [x] Enable Shadow Copies (unlocked)               | [x] Enable Shadow Copies (unlocked)               |
| [ ] Export Recycle Bin (locked)                 | [ ] Export Recycle Bin (unlocked)                 | [ ] Export Recycle Bin (unlocked)               | [ ] Export Recycle Bin (unlocked)                 | [ ] Export Recycle Bin (unlocked)                 | [ ] Export Recycle Bin (unlocked)                 |
| [ ] Use Apple-style Character Encoding (locked) | [ ] Use Apple-style Character Encoding (unlocked) | [x] Use Apple-style Character Encoding (locked) | [x] Use Apple-style Character Encoding (unlocked) | [x] Use Apple-style Character Encoding (unlocked) | [x] Use Apple-style Character Encoding (unlocked) |
| [x] Enable Alternate Data Streams (locked)      | [x] Enable Alternate Data Streams (unlocked)      | [x] Enable Alternate Data Streams (locked)      | [ ] Enable Alternate Data Streams (locked)        | [ ] Enable Alternate Data Streams (unlocked)      | [ ] Enable Alternate Data Streams (unlocked)      |
| [x] Enable SMB2/3 Durable Handles (locked)      | [x] Enable SMB2/3 Durable Handles (unlocked)      | [ ] Enable SMB2/3 Durable Handles (locked)      | [ ] Enable SMB2/3 Durable Handles (locked)        | [ ] Enable SMB2/3 Durable Handles (unlocked)      | [ ] Enable SMB2/3 Durable Handles (unlocked)      |
| [ ] Enable FSRVP (locked)                       | [ ] Enable FSRVP (unlocked)                       | [ ] Enable FSRVP (locked)                       | [ ] Enable FSRVP (unlocked)                       | [ ] Enable FSRVP (unlocked)                       | [ ] Enable FSRVP (unlocked)                       |
| [ ] Path Suffix (locked)                        | [%U] Path Suffix (locked)                         | [%U] Path Suffix (unlocked)                     | [%U] Path Suffix (unlocked)                       | [%U] Path Suffix (locked)                         | [ ] Path Suffix (locked)                          |
| [ ] Auxiliary Parameters (unlocked)             | [ ] Auxiliary Parameters (unlocked)               | [ ] Auxiliary Parameters (unlocked)             | [ ] Auxiliary Parameters (unlocked)               | [ ] Auxiliary Parameters (unlocked)               | [ ] Auxiliary Parameters (unlocked)               |


An optional *Description* can be specified to help explain the purpose of the share. For a more granular configuration, click **ADVANCED MODE**.

After changing the desired settings, click **SAVE**.

## Define Share Access

Users connecting to the SMB share must have [user accounts](/hub/tasks/administrative/users/) on the TrueNAS system before they can connect. You can also [create groups of users](/hub/tasks/administrative/groups/) to simplify assigning permissions to large numbers of users. User accounts that are built-in to TrueNAS should not be used for the share.

When LDAP has been configured and you want users from the LDAP server to have access the SMB share, set **Samba Schema** in **Directory Services > LDAP > ADVANCED MODE**.

{{% alert color="warning" %}}
If the LDAP setting **Samba Schema** is enabled, then the local TrueNAS user accounts cannot be used to connect to the share. Only user accounts configured on the LDAP server can connect to the share.
{{% /alert %}}

### Edit ACLs

The final step for setting up a general purpose SMB share is to control the permissions of the users accessing the share. After an SMB share has been created, it appears in the **Sharing > Windows Shares (SMB)** list. Go to the list and click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; **> Edit ACL** for the desired share.

Here you can change permissions for *owner@*, *group@*, and *everyone@*. New permissions for specific users or groups can also be defined by clicking *ADD ACL ITEM*. For more information on configuring ACLs, see <a href="/hub/tasks/advanced/editingacls/">Managing Access Control Lists</a>.
