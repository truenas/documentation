---
title: "AFP Screen"
description: "Use the AFP screen to configure Apple Filing Protocol (AFP) on your TrueNAS"
weight: 10
tags:
- coreafp
---

The Apple Filing Protocol (AFP) is a network protocol that allows file sharing over a network.
It is similar to SMB and NFS, but was made specifically for Apple systems.

{{< hint warning >}}
Beginning in 2013, Apple began using the SMB sharing protocol as the default option for file sharing and ceased development of the AFP sharing protocol. It is recommended to use SMB sharing instead of AFP, unless files are being shared with legacy Apple products. Please see https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html
{{< /hint >}}

Use the **Services AFP** screen to configure Apple Filing Protocol (AFP) service on your TrueNAS.

![Services AFP Edit](/images/CORE/12.0/ServicesAFPEdit.png "Services AFP Edit")

Click **SAVE** to save settings. 

Click **CANCEL** to exit without saving and return to the **Services** screen.

**General Option**

| Name | Description |
|----------|-------------|
| **Database Path** | Browse to select the database information to be stored in the path. Path must be writable even if the pool is read only. |

**Access**


| Name | Description |
|----------|-------------|
| **Guest Account** | Select an account to use for guest access. This account must have permissions to the shared pool or dataset. The privileges given to this user are also available to any client connecting to the guest service. This user must exist in the password file, but does not require a valid login. The root user cannot be used as guest account. |
| **Guest Access** | Select to disable the password prompt that displays before clients access AFP shares. |
| **Max Connections** | Maximum number of simultaneous connections permitted via AFP. The default limit is **50**. |
| **Chmod Request** | Indicates how to handle access control lists. Select **Ignore** to ignore requests and give the parent directory ACL inheritance full control over new items. Select **Preserve** to preserve ZFS ACEs for named users and groups or the POSIX ACL group mask. Select **Simple** to configure chmod() as requested without any extra steps. |
| **Map ACLs** | Maps permissions for authenticated users. Select **Rights** (default, Unix-style permissions), **None**, or **Mode (ACLs)**. |

**Other Options**


| Name | Description |
|----------|-------------|
| **Log Level** | Record AFP service messages up to the specified log level in the system log. Severe and warning level messages are logged by default. |
| **Bind Interfaces** | Specify the IP addresses to listen for AFP connections. Leave blank to bind to all available IPs. If none are specified, advertise the first IP address of the system, but listen for any incoming request. |
| **Global Auxiliary** | Additional [afp.conf(5)](http://netatalk.sourceforge.net/3.0/htmldocs/afp.conf.5.html) parameters. |

{{< taglist tag="coreafp" limit="10" >}}
