---
title: "Security Best Practices"
description: "Best practices when using various system services."
tags: ["security","ssh","samba","nfs","iscsi"]
---

When using services on TrueNAS, especially services that allow outside connections, there are some best practices to follow to ensure your system is safe and secure. The main services that will be discussed in this article are SSH, SMB, NFS, and iSCSI.

## SSH

Using Secure Shell (SSH) to connect to your TrueNAS can be very helpful when issuing commands through the CLI. To see SSH settings, go to **Services** and click <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>.

To make sure users cannot connect to the system as `root` and potentially harm the system, ensure the *Log in as Root with Password* setting is not set. It is off by default.

Unless it is required, ensure *Allow TCP Port Forwarding* is not set.

Finally, it is not safe to enable any additional weak ciphers for SSH. Many of the ciphers are outdated and have vulnerabilities. It is recommended to block both the CBC and Arcfour ciphers by going to **Services > SSH > Edit > Advanced Options** and entering this line in the *Auxiliary Parameters* field:

`Ciphers chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com`

## SMB

Using Server Message Block (SMB) to share data is a very common situation for TrueNAS users. However, it allows others to connect to the system and must be used properly to avoid any security concerns.

To create a new SMB share, see <a href="/hub/sharing/smb/smb-share/">Configuring a Windows SMB Share</a>.

To see the SMB service settings, go to **Services** and click <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>.

It is recommended to avoid using *SMB1 support*.
This is a legacy SMB protocol and has many vulnerabilities.

Do not use *NTLMv1 Auth* with an untrusted network. This type of encryption is insecure and vulnerable.

When using MacOS to connect to the SMB share, enable *Apple SMB2/3 Protocol Extensions*.
This improves connection stability between the share and the Apple system.

Finally, if you need to add an *Administrators Group*, make sure the group members are correct.
Members of the administration group have full permissions to modify or delete the share data.

When <a href="/hub/sharing/smb/smb-share/">creating a SMB share</a>, a *Purpose* can be selected. This changes the share configuration with one click. For example, when selecting *Private SMB Datasets and Shares* from the list, TrueNAS automatically tunes some of the settings so that the share is set up for private use. To fully customize the share settings, select *No presets* for the *Purpose*. Unless a specific purpose for the share is required, it is recommended to select *Default share parameters* as the *Purpose*.

SMB Server Signing is a recommended configuration. To enable Server Signing, go to **Services > SMB > Edit > Auxiliary Parameters** and add this string to the *Auxilary Parameters* field:

`server signing = mandatory`

Then save, stop, and restart the SMB service.

## NFS

Like SMB, Network File System (NFS) is a sharing protocol to enable other users to connect to the TrueNAS and view or modify shared data.

To create a share, see <a href="/hub/sharing/nfs/nfs-share/">Configuring a Unix NFS Share</a>.

To see the NFS service settings, go to **Services** and click <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>.
By default, all settings are unset.
Unless needed for a specific use case, keep the default NFS service settings.

When <a href="/hub/sharing/nfs/nfs-share/">creating a NFS share</a>, you can define which systems are authorized to connect to the share.
Leaving the *Authorized Networks* or *Authorized Hosts and IP addresses* lists empty allows any system to connect to the NFS share.
To define which systems can connect to the share, open the advanced options and enter the authorized networks and authorized hosts and IP addresses that should have access to the share.
All other systems will be denied access.

## iSCSI

The best practice for setting up iSCSI sharing on TrueNAS is to follow the creation wizard unless a specific configuration is required.
To create an iSCSI share, go to **Sharing > Block Shares (iSCSI)** and click *WIZARD*.
Within the iSCSI wizard are a couple of settings to consider for extra security.

To see more details about creating an iSCSI share, see <a href="/hub/sharing/iscsi/iscsi-share/">Configuring a Block Share (iSCSI)</a>.

When creating a new portal, consider adding a *Discovery Authentication Method*.
This adds authentication between the initiator and the extent based on the chosen authentication method.

Entering a list of *Initiators* and *Authorized Networks* is also recommended. This allows you to define which systems or networks can connect to the extent can be added. When these options are left empty, all initiators and all networks are allowed to connect to the extent.
