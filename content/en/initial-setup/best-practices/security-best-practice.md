---
title: "Security Best Practices"
description: "Best practices to follow when using various services."
type: docs
---

When using services on TrueNAS, especially services that allow outside
connections, there are some best practices to follow to ensure your
system is safe and secure. The main services that will be discussed
in this article are SSH, SMB, NFS, and iSCSI.

## SSH

Using SSH to connect to your TrueNAS can be very helpful when issuing
commands through the CLI. To see SSH settings, go to **Services** and
click <i class="fas fa-pen"></i>. To make sure users cannot connect to
the system as `root` and potentially harm the system, ensure the
*Log in as Root with Password* setting is not set. It is off by default.
Unless it is required, ensure *Allow TCP Port Forwarding* is not set.
Finally, it is not safe to enable any additional weak ciphers for SSH.
Many of the ciphers are outdated and have vulnerabilities. It is 
recommended to block both CBC and Arcfour ciphers.
Go to **Services** -> **SSH** -> **Edit** -> **Extra options** and enter 
the following line in the Extra Options field:

`Ciphers chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com` 


## SMB

Using TrueNAS to set up an SMB share and share data with multiple users
is the bread and butter of owning a TrueNAS. However, it allows others
to connect to the system and must be used properly to avoid any
security concerns. To see the SMB service settings, go to **Services**
and click <i class="fas fa-pen"></i>. It is recommended that *SMB1
support* is not used. It is a legacy SMB protocol and has
vulnerabilities. Also, it is recommended that *NTLMv1 Auth* is not used
on untrusted networks. This type of encryption is insecure and
vulnerable. If using MacOS to connect to the share, enable
*Apple SMB2/3 Protocol Extensions*. This will improve connection and
stability between the share and the Apple system. Finally, if adding
an *Administrators Group*, make sure the members of the group are
correct. Members of the administration group have full permissions and
can cause destruction on the share.

When <a href="/docs/sharing/smb/smb-share/">creating a SMB share</a>, a
*Purpose* can be selected. This changes the share configuration with
one click. For example, when selecting *Private SMB Datasets and Shares*
from the list, TrueNAS automatically tunes some of the settings so that
the share is set up for private use. To fully customize the share
settings, select *No presets* for the *Purpose*. Unless a specific
purpose for the share is required, it is recommended to select
*Default share parameters* as the *Purpose*.

SMB Server Signing is a recommended configuration. To enable Server Signing
go to **Services** -> **SMB** -> **Edit** -> **Auxiliary Parameters** and 
add the following string to the Auxilary Parameters field:
`server signing = mandatory`

Then save, stop, and restart the SMB service.

See <a href="/docs/sharing/smb/smb-share/"> Configuring a Windows SMB
Share</a> to create a share.

## NFS

Like SMB, NFS is a sharing protocol to enable other users to
connect to the TrueNAS to share data. To see the NFS service settings,
go to **Services** and click <i class="fas fa-pen"></i>. By default,
all settings are unset. Unless needed for a specific use case, keep
the default NFS service settings.

When <a href="/docs/sharing/nfs/nfs-share/">creating a NFS share</a>, some things can be done to
ensure a safer sharing experience. In the advanced options, authorized
networks and authorized hosts and IP addresses can be specified. If
authorized networks are specified, any system that is not on the
authorized networks cannot connect to the share. Likewise, if specific
hosts or IP addresses are specified, then those are the only
systems that can connect to the share. When *Authorized Networks* or
*Authorized Hosts and IP addresses* are left blank, it allows all to
connect. Allowing any system to connect to the NFS share raises some
security concern.

See <a href="/docs/sharing/nfs/nfs-share/">Configuring a Unix NFS Share</a> to create a share.

## iSCSI

The last sharing service is iSCSI. The best practice for setting up
iSCSI sharing on TrueNAS is to follow the creation wizard unless a
specific configuration is required. To create an iSCSI share, go to
**Sharing > Block Shares (iSCSI)** and click *WIZARD*. During the iSCSI
wizard there are a couple of settings to consider for extra security.
When creating a new portal, consider adding a *Discovery Authentication
Method*. This adds an authentication between the initiator and the
extent based on the chosen authentication method. Next, a list of
*Initiators* and *Authorized Networks* allowed to connect
to the extent can be added. This is useful when choosing a few
systems to be able to connect to the extent. If left blank, all
initiators and all networks are allowed to connect to the extent.

See <a href="/docs/sharing/iscsi/iscsi-share/">Configuring a Block Share (iSCSI)</a> to create a share.
