---
title: "SMB Service Screen"
description: "Provides information in the SMB service screen and settings."
weight: 50
aliases:
 - /scale/scaleuireference/shares/smb/smbservicesscreen/
 - /scale/scaleclireference/service/clismb/
tags:
 - smb
 - services
---

The **System > Services** screen includes three icons on the **SMB** service row:
* <span class="iconify" data-icon="material-symbols:receipt-long"></span> **Audit Logs** opens the [**Audit** screen]({{< ref "AuditingSCALE.md#accessing-auditing-screens" >}}).
* <span class="iconify" data-icon="material-symbols:list"></span> **SMB Sessions** opens the [**SMB Status** screen]({{< ref "SMBSharesScreens" >}}).
* <span class="iconify" data-icon="ic:baseline-edit"></span> **Configure** opens the **SMB Service** screen showing the **Basic Settings** by default.

## SMB Service Screen
The **SMB** service screen displays setting options to configure TrueNAS SMB service settings to fit your use case.

{{< trueimage src="/images/SCALE/SystemSettings/SMBServiceOptionsSCALE.png" alt="SMB Service Basic Settings" id="SMB Service Basic Settings" >}}

Click **Save** or **Cancel** to close the configuration screen and return to the **Services** screen.

### Basic Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **NetBIOS Name** | Automatically populates with the original system host name. Enter a name that does not exceed 15 characters that is not the same as the **Workgroup** name. |
| **NetBIOS Alias** | Enter any alias name that does not exceed 15 characters in length. If entering multiple aliases, separate alias names with a space between them. |
| **Workgroup** | Enter a name that matches the Windows workgroup name. If you do not configure a workgroup, and Active Directory or LDAP is active, TrueNAS detects and sets the correct workgroup from these services. |
| **Description** | (Optional) Enter any notes or descriptive details about the service configuration. |
| **Enable SMB1 support** | Select to allow legacy SMB1 clients to connect to the server (see caution below). SMB audit logging does not work when using SMB1. |
| **NTLMv1 Auth** | Off by default. Select to allow [smbd](https://www.samba.org/samba/docs/current/man-html/smbd.8.html) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. This setting allows backward compatibility with older versions of Windows, but we do not recommend it. Do not use on untrusted networks. |
{{< /truetable >}}

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

### Advanced Settings

{{< trueimage src="/images/SCALE/SystemSettings/SMBServiceAdvanced1.png" alt="SMB Service Advanced Settings" id="SMB Service Advanced Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **UNIX Charset** | Select the character set to use internally from the dropdown list of options. **UTF-8** is standard for most systems as it supports all characters in all languages. |
| **Transport Encryption Behavior** | Select the option for the level of transport encryption to implement. Options and behaviors:<br><li>**Default - follow upstream/TrueNAS default** <br><li>**Negotiate - only encrypt transport if explicitly requested by the SMB client** <br><li>**Desired - encrypt transport if supported by client during session negotiation** <br><li>**Required - always encrypt transport (rejecting access if client does not support encryption - incompatible with SMB1 server `enable_smb1`)** </li>the TrueNAS and Samba default behavior allows SMB clients to negotiate different encryption levels for SMB shares. When set to **Default**, there is no technical limitation preventing an SMB client from negotiating an encrypted session if it is required. **Default** enables negotiating encryption but does not turn on data encryption globally per share. For more information on SMB1 and SMB2 session or per-share encryption, see [Samba Server SMB Encrypt(s)](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#SERVERSMBENCRYPT). For more information on using Windows client-side SMB signing, see [Windows SMB Signing Policies](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/overview-server-message-block-signing#policy-locations-for-smb-signing). |
| **Log Level** | Record SMB service messages up to the specified log level from the dropdown list. Options are **None**, **Minimum**, **Normal**, **full** and **Debug**. By default, TrueNAS logs error and warning-level messages. We do not recommend using a log level above **Minimum** for production servers. |
| **Use Syslog Only** | Select to log authentication failures in <file>/var/log/messages</file> instead of the default <file>/var/log/samba4/log.smbd</file>. |
| **Local Master** | Selected by default and determines if the system participates in a browser election. Leave cleared when the network contains an Active Directory or LDAP server or when Vista or Windows 7 machines are present. |
| **Enable Apple SMB2/3 Protocol Extensions** | Select to allow MacOS to use these [protocol extensions](https://support.apple.com/en-us/HT210803) to improve the performance and behavioral characteristics of SMB shares. TrueNAS requires Apple SMB2/3 protocol extensions for Time Machine support. |
| **Multichannel** | SMB multichannel allows servers to use multiple network connections simultaneously by combining the bandwidth of several network interface cards (NICs) for better performance. SMB multichannel does not function if you combine NICs into a LAGG. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/SystemSettings/SMBServiceAdvanced2.png" alt="SMB Service Advanced Settings (continued)" id="SMB Service Advanced Settings (continued)" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Administrators Group** | Enter or select members from the dropdown list. Members of this group are local administrators and automatically have privileges to take ownership of any file in an SMB share, reset permissions, and administer the SMB server through the Computer Management MMC snap-in. |
| **Guest Account** | Select the account for guest access from the dropdown list. The default is **nobody**. The selected account must have permission for the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL), add a new entry for the chosen guest account, and configure the permissions in that entry. If you delete the selected **Guest Account**, the field resets to **nobody**. |
| **File Mask** | Overrides default **0664** file creation mask, which creates files with read and write access for everybody. |
| **Directory Mask** | Overrides default directory creation mask of **0775**, which grants everyone directory read, write, and execute access. |
| **Bind IP Addresses** | Select static IP addresses that SMB listens on for connections from the dropdown list. Leaving all unselected defaults to listening on all active interfaces. |
{{< /truetable >}}
