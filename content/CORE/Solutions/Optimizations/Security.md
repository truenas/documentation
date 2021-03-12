---
title: "Security Recommendations"
weight: 30
---

{{< toc >}}

When using services on TrueNAS, especially services that allow outside connections, there are some best practices to follow to ensure your system is safe and secure.
Several different system services are disscused in this article.

{{< tabs "Service Security" >}}
{{< tab "iSCSI" >}}
Follow the iSCSI creation wizard unless a specific configuration is required.
To create an iSCSI share, go to **Sharing > Block Shares (iSCSI)** and click *WIZARD*.
The iSCSI wizard has several additional security settings.

[iSCSI Share Creation]({{< relref "iSCSIShare.md" >}}) walks through share creation steps.

When creating a new **Portal**, consider adding a *Discovery Authentication Method*.
This adds authentication between the initiator and the extent based on the chosen authentication method.

Entering a list of *Initiators* and *Authorized Networks* is also recommended.
This allows defining which systems or networks can connect to the extent.
When these options are empty, all initiators and all networks are allowed to connect to the extent.
{{< /tab >}}
{{< tab "NFS" >}}
Network File System (NFS) is a sharing protocol that allows outside users to connect and view or modify shared data.

To create a share, see [NFS Share Creation]({{< relref "NFSShare.md" >}}).

NFS service settings are in **Services** after clicking the <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>.
By default, all options are unset.
Unless needed for a specific use case, keep the default NFS service settings.

During [Share Creation]({{< relref "NFSShare.md" >}}), define which systems are authorized for share connections.
Leaving the *Authorized Networks* or *Authorized Hosts and IP addresses* lists empty allows any system to connect to the NFS share.
To define which systems can connect to the share, click the *Advanced Options* and enter all networks, hosts, and IP addresses to have share access.
All other systems are denied access.
{{< /tab >}}
{{< tab "SMB" >}}
Using Server Message Block (SMB) to share data is a very common situation for TrueNAS users.
However, it allows outside connections to the system and must be properly use to avoid security concerns.

To create a new SMB share, see [SMB Share Creation]({{< relref "SMBShare.md" >}}).

SMB service settings are in **Services** after clicking the <i class="fas fa-pencil" aria-hidden="true" title="Pencil"></i>.

[Do not use SMB1.]({{< relref "SMB1Advisory.md" >}})

Do not use *NTLMv1 Auth* with an untrusted network.
This encryption option is insecure and vulnerable.

When using MacOS to connect to the SMB share, enable *Apple SMB2/3 Protocol Extensions*.
This improves connection stability between the share and the Apple system.

If you need to add an *Administrators Group*, make sure the group members are correct.
Members of the administration group have full permissions to modify or delete the share data.

During [Share Creation]({{< relref "SMBShare.md" >}}), a *Purpose* can be selected.
This changes the share configuration with one click.
For example, when selecting *Private SMB Datasets and Shares* from the list, TrueNAS automatically tunes some settings so the share is set up for private use.
To fully customize the share settings, select *No presets* for the *Purpose*.
Unless a specific purpose for the share is required, it is recommended to select *Default share parameters* as the *Purpose*.

SMB Server Signing is recommended.
To enable Server Signing, go to **Services > SMB > Edit > Auxiliary Parameters** and add this string to the *Auxilary Parameters* field:

`server signing = mandatory`

Then save, stop, and restart the SMB service.
{{< /tab >}}
{{< tab "SSH" >}}
Using Secure Shell (SSH) to connect to your TrueNAS is very helpful when issuing commands through the CLI.
SSH settings are in **Services** after clicking the <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>.

To make sure users cannot connect to the system as `root` and potentially harm the system, leave *Log in as Root with Password* unset.
It is off by default.

Unless it is required, do not set *Allow TCP Port Forwarding*.

Many SSH ciphers are outdated and vulnerable.
It is not safe to enable any weak SSH ciphers.
Block both the *CBC* and *Arcfour* ciphers by going to **Services > SSH > Edit > Advanced Options** and adding this line in the *Auxiliary Parameters*:

`Ciphers chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com`
{{< /tab >}}
{{< /tabs>}}
