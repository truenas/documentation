---
title: "Security Recommendations"
description: "Best practices to administrate TrueNAS securely."
weight: 30
aliases:
  - /core/solutions/optimizations/security/
tags:
 - coressh
 - scalessh
keywords:
 - TrueNAS Security
---

{{< toc >}}

Follow these best practices to administrate TrueNAS securely.
These generally apply to either TrueNAS CORE or TrueNAS SCALE, but each software might place the related options in slightly different web interface locations.

## General Recommendations

* Modifying  the base TrueNAS firmware image is unsupported and can create security issues.
* Keep TrueNAS up to date with the most recent updates for your supported version.
* Upgrade to new major releases in a timely manner consistent with the deployment use case.
* Disable any Network services not in use.
* Restrict the TrueNAS web, IPMI, and any other management interfaces to private subnets away from untrusted users.

### User Accounts

Restrict new TrueNAS user accounts ([CORE accounts]({{< relref "SettingUpUsersAndGroups.md" >}}), [SCALE accounts]({{< relref "ManageLocalUsersSCALE.md" >}})) to the most minimal set of permissions and access possible.
On TrueNAS SCALE, create the administrator user on install and disable root user web interface access permissions ([rootless login tutorial]({{< relref "RootlessLogin.md" >}})).

Use complex passwords and Two-Factor Authentication ([CORE 2FA]({{< relref "UsingTwoFactorAuthentication.md" >}}), [SCALE 2FA]({{< relref "2FASCALE.md" >}})) for all TrueNAS root and administrator accounts.

Grant TrueNAS user accounts (local or directory services added accounts) access to SSH or console shells only if that account is explicitly trusted.

### iSCSI

Follow the iSCSI creation ([CORE iSCSI]({{< relref "AddingiSCSIShare.md" >}}), [SCALE iSCSI]({{< relref "AddingISCSIShares.md" >}})) wizard unless a specific configuration is required.
To create an iSCSI share, go to **Sharing > Block Shares (iSCSI)** and click *WIZARD*.
The iSCSI wizard has several additional security settings.

When creating a new **Portal**, consider adding a *Discovery Authentication Method*.
This adds authentication between the initiator and the extent based on the chosen authentication method.

Entering a list of *Initiators* and *Authorized Networks* is also recommended.
This allows defining which systems or networks can connect to the extent.
When these options are empty, all initiators and all networks are allowed to connect to the extent.

### NFS

Network File System (NFS) is a sharing protocol that allows outside users to connect and view or modify shared data.

During share creation ([CORE NFS]({{< relref "NFSShare.md" >}}), [SCALE NFS]({{< relref "AddingNFSShares.md" >}})), define which systems are authorized for share connections.
Leaving the **Authorized Networks** or **Authorized Hosts and IP addresses** lists empty allows any system to connect to the NFS share.
To define which systems can connect to the share, click the **Advanced Options** and enter all networks, hosts, and IP addresses to have share access.
All other systems are denied access.

NFS service settings are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).
Leave all default NFS service settings unset unless a specific use case requires enabling an option.

### SMB

Using Server Message Block (SMB) to share data is a very common situation for TrueNAS users.
However, it allows outside connections to the system and must be properly use to avoid security concerns.

Select a **Purpose** during share creation ([CORE SMB]({{< relref "SMBShare.md" >}}), [SCALE SMB]({{< relref "AddSMBShares.md" >}})).
This changes the share configuration with one click.
For example, when selecting **Private SMB Datasets and Shares** from the list, TrueNAS adjusts the **Advanced Options** so the share is set up for private use.
To fully customize the share settings, select **No presets** for the **Purpose**.
Unless a specific purpose for the share is required, it is recommended to select **Default share parameters** as the **Purpose**.

[Do not use SMB1.]({{< relref "/CORE/CoreSecurityReports/SMB1Advisory.md" >}})

SMB service settings are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

Do not use **NTLMv1 Auth** with an untrusted network.
This encryption option is insecure and vulnerable.

When using MacOS to connect to the SMB share, enable **Apple SMB2/3 Protocol Extensions**.
This improves connection stability between the share and the Apple system.

When an administrators group is required, make sure the group members are correct.
Administration group members have full permissions to modify or delete the share data.

### SSH

Using Secure Shell (SSH) to connect to your TrueNAS is very helpful when issuing commands through the CLI.
SSH settings ([CORE SSH]({{< relref "ConfiguringSSH.md" >}}), [SCALE SSH]({{< relref "SSHServiceSCALE.md" >}})) are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

For best security, disable all login options for root or admin accounts in the SSH service options.
Instead, create and exchange SSH keys between client systems and TrueNAS before attempting to connect with SSH.

{{< hint type=warning >}}
Be careful when prompted to overwrite any existing SSH key pairs, as this can disrupt previously configured SSH connections.
SSH key pair overwrites are permanent.
{{< /hint >}}

{{< tabs "SSH Key Generation" >}}
{{< tab "Windows 10 & 11" >}}
1. Open Windows **Powershell** or a terminal.
2. Enter `ssh-keygen.exe`.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended) shown in parentheses.
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< tab "MacOS" >}}
1. Open the Terminal app
2. Enter `ssh-keygen -t rsa -b 2048`. This uses the RSA algorithm to create key of 2048 bits, which is generally considered acceptible.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended).
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< tab "Debian 11" >}}
1. Open the shell.
2. Enter `ssh-keygen`. By default, uses the RSA algorithm to create a 3072 bit key pair.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended).
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< tab "FreeBSD " >}}
1. Open the shell.
2. Enter `ssh-keygen -t rsa`. This uses the RSA algorithm to create the key pair.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended).
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< /tabs >}}

Root account logins using SSH are never recommended.
Instead, create new TrueNAS user accounts with limited permissions and log in to these when using SSH.
If it is a critical and unavoidable situation and root logins must be allowed, first set up two-factor authentication ([CORE 2FA]({{< relref "UsingTwoFactorAuthentication.md" >}}), [SCALE 2FA]({{< relref "/SCALE/SCALETutorials/Credentials/2FASCALE.md" >}})) as an additional layer of security.
Disable the **Log in as Root with Password** setting as soon as the situation is resolved.

Unless it is required, do not set **Allow TCP Port Forwarding**.

Many SSH ciphers are outdated and vulnerable.
It is not safe to enable any weak SSH ciphers.
Block both the **CBC** and **Arcfour** ciphers by going to **Services > SSH > Edit > Advanced Options** and adding this line in the **Auxiliary Parameters**:

`Ciphers chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com`

### Virtualization: VMs, Plugins, Apps

Review any plugin, app, or virtual machine (VM) deployment scenario for additional security exposure or vulnerabilities.
iXsystems cannot resolve security vulnerabilities introduced from within user-deployed virtualized environments.

After configuring a VM ([CORE VMs]({{< relref "CreatingBasicVM.md" >}}), [SCALE VMs]({{< relref "CreatingManagingVMsSCALE.md" >}})), disable any VNC or SPICE Virtual Machine display devices after the VM is configured.
