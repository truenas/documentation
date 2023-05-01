---
---

**NetBIOS**

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **NetBIOS Name** | Automatically populated with the original host name of the system **truenas**. This name is limited to 15 characters and cannot be the same name in **Workgroup**. |
| **NetBIOS Alias** | Enter any aliases, separated by spaces. Each alias can be up to 15 characters long. |
| **Workgroup** | Value must match Windows workgroup name. If this is unconfigured and Active Directory or LDAP are active, TrueNAS detects and sets the correct workgroup from these services. |
| **Description** | Optional. Enter a server description. |
| **Enable SMB1 support** | Select to allow legacy SMB clients to connect to the server. Note that SMB1 is being deprecated and it is advised to upgrade clients to operating system versions that support modern versions of the SMB protocol. |
| **NTLMv1 Auth** | Select to allow [smbd(8)](https://www.freebsd.org/cgi/man.cgi?query=smbd) attempts to authenticate users with the insecure and vulnerable NTLMv1 encryption. Off by default. This setting allows backward compatibility with older versions of Windows, but is not recommended and should not be used on untrusted networks. |
{{< /truetable >}}

**Other Options**

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Unix Charset** | Select an option from the dropdown list. Default is **UTF-8** which supports all characters in all languages. |
| **Log Level** | Select an option from the dropdown list. Options are **None**, **Minimum**, **Normal**, **Full** or **Debug**. Records SMB service messages up to the specified log level. By default, error and warning level messages are logged. |
| **Use Syslog Only** | Select to log authentication failures in <file>/var/log/messages</file> instead of the default of <file>/var/log/samba4/log.smbd</file>. |
| **Local Master** | Select to determine if the system participates in a browser election. Leave checkbox clear when the network contains an AD or LDAP server, or when Vista or Windows 7 machines are present. |
| **Enable Apple SMB2/3 Protocol Extensions** | Select to allow these [protocol extensions](https://support.apple.com/en-us/HT210803) to be used by macOS to improve the performance and behavioral characteristics of SMB shares. This is required for Apple Time Machine support. |
| **Administrators Group** | Select an option from the dropdown list. Options include local admins and automatically have privileges to take ownership of any file in an SMB share, reset permissions, and administer the SMB server through the Computer Management MMC snap-in. |
| **Guest Account** | Select an account to use for guest access from the dropdown list. Default is **nobody**. The selected account is required to have permissions to the shared pool or dataset. To adjust permissions, edit the dataset Access Control List (ACL), add a new entry for the chosen guest account, and configure the permissions in that entry. If the selected user in **Guest Account** is deleted the field resets to **nobody**. |
| **File Mask** | Overrides default file creation mask of **0666** which creates files with read and write access for everybody. |
| **Directory Mask** | Overrides default directory creation mask of **0777** which grants directory read, write and execute access for everybody. |
| **Bind IP Addresses** | Select the static IP addresses which SMB listens on for connections from the dropdown list. Leave unselected defaults to listen on all active interfaces. |
| **Auxiliary Parameters** | Enter additional smb.conf options. See the [Samba Guide](http://www.oreilly.com/openbook/samba/book/appb_02.html) for more information on these settings. To log more details when a client attempts to authenticate to the share, add **log level = 1, auth_audit:5**. |
{{< /truetable >}}
