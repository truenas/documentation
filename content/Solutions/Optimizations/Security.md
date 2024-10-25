---
title: "Security Recommendations"
description: "Best practices to administrate TrueNAS securely."
weight: 30
aliases:
  - /core/solutions/optimizations/security/
tags:
 - ssh
 - 2fa
keywords:
 - TrueNAS Security
---

Follow these best practices to administer TrueNAS securely.
These generally apply to either TrueNAS CORE or TrueNAS SCALE, but each software might place the related options in slightly different web interface locations.

## General Recommendations

* Modifying the base TrueNAS firmware image is unsupported and can create security issues.
* Keep TrueNAS up-to-date with the most recent updates for your supported version.
* Upgrade to new major releases promptly consistent with the deployment use case.
* Disable any network services not in use.
* Restrict the TrueNAS web UI, IPMI, and any other management interfaces to private subnets away from untrusted users.
* Configure **Syslog** settings to send logs to an external server ([CORE]({{< relref "/core/uireference/system/advanced/_index.md" >}}) | [SCALE]({{< relref "managesyslogsscale.md" >}})).
* In TrueNAS 24.04 (Dragonfish) or later, locally [monitor and review audit logs]({{< relref "auditingscale.md" >}}) using the **Audit** screen.
* In the **System > Advanced Settings**, always keep **Show Text Console without Password Prompt** set to **Disabled**.

Consult the [TrueNAS Security Advisories](https://security.truenas.com/) site for information about any identified security vulnerabilities in TrueNAS products.
Check back regularly for updates.

## User Accounts

Restrict new TrueNAS user accounts ([CORE]({{< relref "SettingUpUsersAndGroups.md" >}}) | [SCALE]({{< relref "ManageLocalUsersSCALE.md" >}})) to the most minimal set of storage ACL permissions and access possible.

On TrueNAS SCALE, [create the administrator account]({{< relref "ManageLocalUsersSCALE.md#creating-an-admin-user-account" >}}) on install and disable root NAS administrative access.
In TrueNAS 24.04 (Dragonfish) or later, use the **Credentials > Groups > Privileges** screen to define limited access administrative roles, such as read-only or share administrators.
Assign users to those groups to grant partial NAS administrative access.
Members of privilege groups can access the UI but cannot perform administrative tasks outside those defined by their role(s).

Use complex passwords and Two-Factor Authentication ([CORE]({{< relref "UsingTwoFactorAuthentication.md" >}}) | [SCALE]({{< relref "ManageGlobal2FASCALE.md" >}})) for all TrueNAS administrator accounts.

Grant TrueNAS user accounts (local or domain accounts) access to SSH or console shells only if that user is explicitly trusted.

## Shares

Using SMB, iSCSI, or NFS to share data is common for TrueNAS users.
However, it allows outside connections to the system and must be configured to minimize security concerns.

### iSCSI

Follow the iSCSI creation wizard ([CORE]({{< relref "AddingiSCSIShare.md" >}}) | [SCALE]({{< relref "AddingISCSIShares.md" >}})) to create an iSCSI share.

When creating a new **Portal**, consider adding a **Discovery Authentication Method**.
This adds authentication between the initiator and the extent based on the chosen authentication method, CHAP or Mutual CHAP.

Be aware that discovery authentication secures initial discovery only.
iSCSI data traffic is not encrypted and should be isolated from regular data traffic or other types of network communication.
One common approach is to create a dedicated network or VLAN (Virtual Local Area Network) specifically for iSCSI traffic.

Entering a list of **Initiators** and **Authorized Networks** is also recommended.
This allows defining which systems or networks can connect to the extent.
When these options are empty, all initiators and all networks can connect to the extent.

### NFS

During share creation ([CORE]({{< relref "NFSShare.md" >}}) | [SCALE]({{< relref "AddingNFSShares.md" >}})), define which systems are authorized for share connections.
Leaving the **Authorized Networks** or **Authorized Hosts and IP addresses** lists empty allows any system to connect to the NFS share.
To define which systems can connect to the share, click the **Advanced Options** and enter all networks, hosts, and IP addresses to have share access.
All other systems are denied access.

NFS service settings are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

For greater security and more granular access control, enable the NFSv4 protocol.
To apply NFS ACLs, click **Advanced Options** on the add or edit screen for an NFS share and enter **Access** details.

### SMB

Select a **Purpose** during share creation ([CORE]({{< relref "/CORE/CORETutorials/Sharing/SMB/_index.md" >}}) | [SCALE]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}})).
This changes the share configuration with one click.
For example, when selecting **Private SMB Datasets and Shares** from the list, TrueNAS adjusts the **Advanced Options** so the share is set up for private use.
To fully customize the share settings, select **No presets** as the **Purpose**.
Unless you require a specific purpose for the share, we recommend selecting **Default share parameters** as the **Purpose**.

[Do not use SMB1.]({{< relref "/CORE/CoreSecurityReports/SMB1Advisory.md" >}})

SMB service settings are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

Do not use **NTLMv1 Auth** with an untrusted network.
This encryption option is insecure and vulnerable.

When an administrators group is required, ensure the group members are correct.
Administration group members have full permissions to modify or delete the share data.

## SSH

Using Secure Shell (SSH) to connect to your TrueNAS is very helpful when issuing commands through the CLI.
SSH settings ([CORE]({{< relref "ConfiguringSSH.md" >}}) | [SCALE]({{< relref "SSHServiceSCALE.md" >}})) are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

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
2. Enter `ssh-keygen -t rsa -b 2048`. This uses the RSA algorithm to create a key of 2048 bits, which is generally considered acceptable.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended).
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< tab "Debian" >}}
1. Open the shell.
2. Enter `ssh-keygen`. By default, uses the RSA algorithm to create a 3072-bit key pair.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended).
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< tab "FreeBSD" >}}
1. Open the shell.
2. Enter `ssh-keygen -t rsa`. This uses the RSA algorithm to create the key pair.
3. Type in a location to store the new key pair or press <kbd>Enter</kbd> to use the default location (recommended).
4. Type in a passphrase (recommended) for the keypair or press <kbd>Enter</kbd> to not use a passphrase. Confirm the passphrase.
{{< /tab >}}
{{< /tabs >}}

Root account logins using SSH are never recommended.
Create TrueNAS user accounts with limited permissions and log in to these when using SSH.
If a critical situation requires root login, first set up two-factor authentication ([CORE]({{< relref "UsingTwoFactorAuthentication.md" >}}) | [SCALE]({{< relref "ManageGlobal2FASCALE" >}})) as an extra layer of security.
Disable the **Log in as Root with Password** setting as soon as the situation is resolved.

Unless required, do not set **Allow TCP Port Forwarding**.

Many SSH ciphers are outdated and vulnerable.
It is not safe to enable any weak SSH ciphers.
Block both the **CBC** and **Arcfour** ciphers by going to **Services > SSH > Edit > Advanced Options** and adding this line in the **Auxiliary Parameters**:

`Ciphers chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com`

## Virtualization: VMs, Plugins, Apps

Review any plugin, app, or virtual machine (VM) deployment scenario for additional security exposure or vulnerabilities.
iXsystems cannot resolve security vulnerabilities introduced from within user-deployed virtualized environments.

After configuring a VM ([CORE]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/VirtualMachines/_index.md" >}}) | [SCALE]({{< relref "/SCALE/SCALETutorials/Virtualization/_index.md" >}})), disable any VNC or SPICE virtual machine display devices.

Update plugins ([CORE]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Plugins/_index.md" >}})) or applications ([SCALE]({{< relref "/content/TruenasApps/_index.md" >}})) regularly.
TrueNAS SCALE monitors connected application catalogs and trains and displays available updates on the **Installed** applications screen.
To upgrade an app to the latest version, click **Update** on the **Application Info** widget.
To upgrade multiple apps, click the **Update All** button on the **Installed** applications header.
