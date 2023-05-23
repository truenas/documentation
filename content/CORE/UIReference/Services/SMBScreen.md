---
title: "SMB Service Screen"
description: "This article describes the SMB screen in TrueNAS CORE."
weight: 110
tags:
- coresmb
---

Use the **Services SMB** screen to configure SMB service settings. 
Unless a specific setting is needed or configuring for a specific network environment, it is recommended to use the default settings for the SMB service.

![SMBServiceOptions](/images/CORE/12.0/ServicesSMBOptions.png "SMB Service Options")

## Basic Options

{{< truetable >}}
| Name | Description |
|----------|-------------|
| **NetBIOS Name** | Populates with the original host name of the system **truenas**. Limited to 15 characters and cannot be the same name in **Workgroup**. |
| **NetBIOS Alias** | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| **Workgroup** | Value must match Windows workgroup name. If unconfigured, TrueNAS uses Active Directory or LDAP to detect and select the correct workgroup. Active Directory or LDAP must be active for TrueNAS to do this. |
| **Description** | Optional. Enter a server description. |
| **Enable SMB1 support** | Select to allow legacy SMB clients to connect to the server. Note that SMB1 is being deprecated. The recommendation is to upgrade the client OS. The OS upgrade should support modern versions of the SMB protocol. |
| **NTLMv1 Auth** | Select to allow [smbd(8)](https://www.freebsd.org/cgi/man.cgi?query=smbd) attempts to authenticate users with NTLMv1 encryption. NTLMv1 is not secure and is a vulnerability. NTLMv1 authentication is off by default. This setting allows backward compatibility with older versions of Windows. It is not recommended. Do not use on untrusted networks. |
{{< /truetable >}}

## Advanced Options

![SMBServiceAdvanced](/images/CORE/12.0/ServicesSMBOptionsAdvanced.png "Advanced Options for the SMB Service")

{{< truetable >}}
| Name | Description |
|----------|-------------|
| **Unix Charset** | Select an option from the dropdown list. Default is **UTF-8** which supports all characters in all languages. |
| **Log Level** | Select an option from the dropdown list. Options are **None**, **Minimum**, **Normal**, **Full** or **Debug**. Records SMB service messages up to the specified log level. Logs error and warning level messages by default. |
| **Use Syslog Only** | Select to log authentication failures in <file>/var/log/messages</file> instead of the default <file>/var/log/samba4/log.smbd</file>. |
| **Local Master** | Select to determine if the system participates in a browser election. Leave checkbox clear when the network contains an AD or LDAP server. Leave checkbox clear when Vista or Windows 7 machines are present. |
| **Enable Apple SMB2/3 Protocol Extensions** | Select to allow macOS to use these [protocol extensions](https://support.apple.com/en-us/HT210803). Improves the performance and behavioral characteristics of SMB shares. Required for Apple Time Machine support. |
| **Administrators Group** | Select an option from the dropdown list. Members of this group are local admins. Local admins have privileges to take ownership of any file in the SMB share. They can reset permissions. Local admins can administer the SMB server through the Computer Management MMC snap-in. |
| **Guest Account** | Select an account to use for guest access from the dropdown list. Default is **nobody**. The selected account must have permissions to the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL). Add a new entry for the selected guest account, and configure the permissions in that entry. Deleting the selected user in **Guest Account** resets the field to **nobody**. |
| **File Mask** | Overrides default file creation mask of **0666**. File creation mask **0666** creates files with read and write access for everybody. |
| **Directory Mask** | Overrides default directory creation mask of **0777**. Directory creation mask **0777** grants directory read, write and execute access for everybody. |
| **Bind IP Addresses** | Select from the dropdown list. These are the static IP addresses which SMB listens on for connections. If not selected, defaults to listen on all active interfaces. |
| **Auxiliary Parameters** | Enter additional smb.conf options. See the [Samba Guide](http://www.oreilly.com/openbook/samba/book/appb_02.html) for more information on these settings. To log more details when a client attempts to authenticate to the share, add *log level = 1, auth_audit:5*. |
{{< /truetable >}}

{{< taglist tag="coresmb" limit="10" >}}