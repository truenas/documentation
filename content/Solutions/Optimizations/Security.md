---
title: "Security Recommendations"
description: "Best practices to administrate TrueNAS securely."
weight: 30
aliases:
  - /core/solutions/optimizations/security/
  - /references/defaultports/
tags:
 - ssh
 - 2fa
 - ports
keywords:
 - TrueNAS Security
---

Follow these best practices to administer TrueNAS securely.

## General Recommendations

* Modifying the base TrueNAS firmware image is unsupported and can create security issues.
* Keep TrueNAS up-to-date with the most recent updates for your supported version.
* Upgrade to new major releases promptly consistent with the deployment use case.
* Disable any network services when not in use.
* Restrict the TrueNAS web UI, IPMI, and any other management interfaces to private subnets away from untrusted users, or keep them disconnected when not in active use.
* Configure **Syslog** settings to send logs to an external server ([CORE](https://www.truenas.com/docs/core/13.0/uireference/system/advanced/) | [SCALE]({{< relref "managesyslogsscale.md" >}})).
* In TrueNAS 24.04 (Dragonfish) or later, locally [monitor and review audit logs]({{< relref "auditingscale.md" >}}) using the **Audit** screen.
* In the **System > Advanced Settings**, always keep **Show Text Console without Password Prompt** set to **Disabled**.

{{<include file="/static/includes/CustomScriptWarning.md">}}

For information about any identified security vulnerabilities in TrueNAS products, consult the [TrueNAS Security Advisories](https://security.truenas.com/) site.
Check back regularly for updates.

## TrueNAS Default Ports

TrueNAS open ports are **80** and **443**.

TrueNAS provides a range of different storage services and uses TCP/IP for both data and management functions.
All protocols can be securely encrypted and routed using VPN technologies.
This approach is encouraged when using services directly over the Internet or WAN.

### Inbound Ports

The TCP ports and services that listen for external connections:

{{< truetable >}}
|   Inbound Port  | Protocol | Service Name |                Description of Service                | Encrypted | Defaults |
|:---------------:|:--------:|:------------:|:----------------------------------------------------:|:---------:|:--------:|
|      80/443     |    TCP   |  HTTP/HTTPS  |         Web interface <br> REST API <br> WebSockets API        |  Optional |   Open   |
|        22       |    TCP   |   SSH/SFTP   | Secure Shell Secure FTP <br> ZFS Replication <br> Rsync over SSH  |    Yes    |  Closed  |
|     111/2049    |  TCP/UDP |    NFS v3    |                 Network File Service                 |     No    |  Closed  |
| 137/138/139/445 |  TCP/UDP |      SMB     |                 Windows File Service                 |  Optional |  Closed  |
|       548       |    TCP   |      AFP     |                  Apple File Service                  |     No    |  Closed  |
|      20/21      |    TCP   |      FTP     |                File Transfer Protocol                |     No    |  Closed  |
|       443       |    TCP   |    WebDAV    |                 HTTPS access to files                |    Yes    |  Closed  |
|       3260      |    TCP   |     iSCSI    |                 Block storage over IP                |  Optional |  Closed  |
|       9000      |    TCP   |    S3 API    |                Object storage over IP                |    Yes    |  Closed  |
|       837       |    TCP   |     Rsync    |                Remote synchronization                |  Optional |  Closed  |
|   Not defined   |    UDP   |   Wireguard  |               Point-to-point encryption              |    Yes    |  Closed  |
|     161/162     |    TCP   |     SNMP     |               Simple Network Monitoring              |  Optional |  Closed  |
{{< /truetable >}}

### Outbound Ports

Outpound protocols do not listen for or accept external connections.
These protocols and ports are not a security risk and are usually allowed through firewalls.
These protocols are considered *primary* and might need to be permitted through a firewall:

{{< truetable >}}
| Outbound Port | Protocol | Service Name |          Description of Service         | Encrypted | Defaults |
|:-------------:|:--------:|:------------:|:---------------------------------------:|:---------:|:--------:|
|     80/443    |    TCP   |  HTTP/HTTPS  | Software updates and Pro-active support |  Optional |   Open   |
|     25/465    |    TCP   | Sendmail/TLS |          Send emails for alerts         |     No    | Outgoing |
|      123      |    TCP   |      NTP     |       Network Time synchronization      |    Yes    | Outgoing |
|      514      |    TCP   |    Syslog    |      Logging of alerts and changes      |     No    | Outgoing |
{{< /truetable >}}

## Callouts to Websites

Some elements of TrueNAS make external callouts to online locations.
Manage these callout addresses as part of your general network configuration (i.e., TrueNAS and router allow/deny hosts, etc.) to further secure your system.
Callouts are grouped into several classes.

{{< expand "All TrueNAS releases callouts" "v" >}}

* Update to https://update-master.ixsystems.com/ or https://update.ixsystems.com/
* Enterprise Proactive support to https://support-proxy.ixsystems.com
* Error parser to https://github.com/angular/angular/blob/master/packages/core/src/util/errors.ts
  Other possible error callouts to https://github.com/angular/angular/issues/10816 as a workaround for https://github.com/angular/angular/issues/56471 
* Email to the address set in the TrueNAS UI as configured for administration users, and for alerts

TrueNAS uses Sentry to "phone home" general system statictics for analytics to https://7ac3e76fe2a94f77a58e1c38ea6b42d9@sentry.ixsystems.com/4
{{< /expand >}}

{{< expand "TrueNAS FreeBSD-based systems plugin callouts" "v" >}}
* Official plugins list to https://github.com/freenas/iocate-ix-plugins
* Community plugins list to https://github.com/ix-plugin-hub/iocate-plugin-index

Each plugin JSON excludes its own download and pkg update URL.
{{< /expand >}}

{{< expand "TrueNAS FreeBSD-based systems jail callouts" "v" >}}
* Upstream FreeBSD pkg updates to pkg.freebsd.org
* Upstream FreeBSD current releases to https://download.freebsd.org/releases/amd64/
* Upstream archived FreeBSD releases for manual iocage fetch downloads to https://frp-archive.freebsd.org/pub/FreeBSD-Archive/old-releases/amd64/
{{< /expand >}}

{{< expand "Truenas Debian Linux-based systems app callouts" "v" >}}
* Media content downloads from https://media.sys.truenas.net
* Docker hub registry to https://index.docker.io/v1

TruNAS apps index from https://github.com/truenas/apps.
Some apps pull from other registries like ghcr.io and quay.io.
{{< /expand >}}

{{< expand "TrueNAS Debian Linux-based systems chart callouts" "v" >}}
* Register all necessary components (fixed https://ixsystems.atlassian.net/browse/NAS-130717)
* When ng-mocks get view child support see https://github.com/help-me-mom/ng-mocks/issues/8634
{{< /expand >}}

{{< expand "TrueNAS Debian Linux-based system other callouts" "v" >}}
* Feedback Oauth URL to https://support-proxy.ixsystems.com/oauth/initiate?origin=
* Feedback User Guide form to https://www.truenas.com/docs/hub/
* File Jira ticket to https://ixsystems.atlassian.net
* Feedback service private readonly host name to https://feedback.ui.truenas.com

When usage collection is disabled, anonymous usage statistics consisting of only the software version and total system capacity (e.g. TrueNAS 24.04.0, 55 TB) are still collected but information about the system configuration and usage is not.

When Debian Linux-based system DNS look-ups to https://updates.ixystems.com *(storjshare.io) occur,  the content delivery network (CDN) for TrueNAS is making callouts to Storj where TrueNAS updates available for downloads are stored.
{{< /expand >}}

## User Accounts

Restrict new [TrueNAS user accounts]({{< relref "ManageLocalUsersSCALE.md" >}}) to the most minimal set of storage ACL permissions and access possible.

On TrueNAS 22.12 or newer, [create the administrator account]({{< relref "ManageLocalUsersSCALE.md#creating-an-admin-user-account" >}}) on install and disable root NAS administrative access.

In TrueNAS 24.04 (Dragonfish) or later, use the **Credentials > Groups > Privileges** screen to define limited access administrative roles, such as read-only or share administrators.
Assign users to those groups to grant partial NAS administrative access.
Members of privilege groups can access the UI but cannot perform administrative tasks outside those defined by their role(s).

Use complex passwords and [Two-Factor Authentication]({{< relref "ManageGlobal2FASCALE.md" >}}) for all TrueNAS administrator accounts.

Grant TrueNAS user accounts (local or domain accounts) access to SSH or console shells only if that user is explicitly trusted.

## Shares

Using SMB, iSCSI, or NFS to share data is common for TrueNAS users.
However, it allows outside connections to the system and must be configured to minimize security concerns.

### iSCSI

Follow the [iSCSI creation wizard]({{< relref "AddingISCSIShares.md" >}}) to create an iSCSI share.

When creating a new **Portal**, consider adding a **Discovery Authentication Method**.
This adds authentication between the initiator and the extent based on the chosen authentication method, CHAP or Mutual CHAP.

Be aware that discovery authentication only secures initial discovery.
iSCSI data traffic is not encrypted and should be isolated from regular data traffic or other types of network communication.
One common approach is to create a dedicated network or VLAN (Virtual Local Area Network) specifically for iSCSI traffic.

Entering a list of **Initiators** and **Authorized Networks** is also recommended.
This allows defining to systems or networks that can connect to the extent.
When these options are empty, all initiators and all networks can connect to the extent.

### NFS

During [NFS share creation]({{< relref "AddingNFSShares.md" >}}), define which systems are authorized for share connections.
Leaving the **Authorized Networks** or **Authorized Hosts and IP addresses** lists empty allows any system to connect to the NFS share.
To define which systems can connect to the share, click **Advanced Options*, then enter all networks, hosts, and IP addresses to share access.

NFS service settings are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

For greater security and more granular access control, enable the NFSv4 protocol.
To apply NFS ACLs, click **Advanced Options** on the add or edit NFS share screen, then enter **Access** details.

### SMB

Select a **Purpose** during [SMB share creation]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}}).
This changes the share configuration with one click.
For example, when selecting **Private SMB Datasets and Shares** from the list, TrueNAS adjusts the **Advanced Options** so the share is set up for private use.
To fully customize the share settings, select **No presets** as the **Purpose**.
Unless you require a specific purpose for the share, we recommend selecting **Default share parameters** as the **Purpose**.

[Do not use SMB1.](https://www.truenas.com/docs/core/13.0/coresecurityreports/smb1advisory/)

SMB service settings are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

Do not use **NTLMv1 Auth** with an untrusted network.
This encryption option is insecure and vulnerable.

When an administrator group is required, verify the group members are correctly configured.
Administration group members have full permission to modify or delete the share data.

## SSH

Using Secure Shell (SSH) to connect to your TrueNAS is very helpful when issuing commands through the CLI.
[SSH settings]({{< relref "SSHServiceSCALE.md" >}}) are in **Services** after clicking the <span class="iconify" data-icon="mdi:pencil"></span> (pencil).

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
2. Enter `ssh-keygen`. By default, this uses the RSA algorithm to create a 3072-bit key pair.
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
If a critical situation requires root login, first set up two-factor authentication ([CORE](https://www.truenas.com/docs/core/13.0/coretutorials/systemconfiguration/usingtwofactorauthentication/) | [SCALE]({{< relref "ManageGlobal2FASCALE" >}})) as an extra layer of security.
Disable the **Log in as Root with Password** setting as soon as the situation is resolved.

Unless required, do not set **Allow TCP Port Forwarding**.

Many SSH ciphers are outdated and vulnerable.
It is not safe to enable any weak SSH ciphers.
Block both the **CBC** and **Arcfour** ciphers by going to **Services > SSH > Edit > Advanced Options** and adding this line in the **Auxiliary Parameters**:

`Ciphers chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com`

## Virtualization: VMs, Plugins, Apps

{{< include file="/static/includes/COREFeatureSupport.md" >}}

Review any application or virtual machine (VM) deployment scenario for additional security exposure or vulnerabilities.
The TrueNAS team cannot resolve security vulnerabilities introduced from within user-deployed virtualized environments.

After [configuring a VM]({{< relref "/SCALE/SCALETutorials/Virtualization/_index.md" >}}), disable any VNC or SPICE virtual machine display devices.

Update [applications]({{< relref "/content/TruenasApps/_index.md" >}}) regularly.
TrueNAS monitors connected application catalogs and trains and displays available updates on the **Installed** applications screen.
