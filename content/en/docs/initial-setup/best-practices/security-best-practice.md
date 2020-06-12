---
title: "Security Best Practices"
description: "Best practices to follow when using various services."
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
Many of the ciphers are outdated and have vulnerabilities. The default
values *None, AES128-CBC* for *Weak Ciphers* are sufficient.

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

## NFS

Like SMB, NFS is a sharing protocol to enable other users to
connect to the TrueNAS to share data. To see the NFS service settings,
go to **Services** and click <i class="fas fa-pen"></i>. By default,
all settings are unset. Unless needed for a specific use case, leave
the default NFS service settings.
