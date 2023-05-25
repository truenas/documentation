---
title: "AFP Screen"
description: "This article describes the AFP screen in TrueNAS CORE."
weight: 10
tags:
- coreafp
---

The Apple Filing Protocol (AFP) is a network protocol that allows file sharing over a network.
It is like SMB and NFS, but it is for Apple systems.

{{< hint type=important >}}
Apple began using the SMB sharing protocol as the default option for file sharing in 2013. At that time Apple ceased development of the AFP sharing protocol. The recommendation is to use SMB sharing instead of AFP. AFP sharing is still used if files are being shared with legacy Apple products. Please see https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html
{{< /hint >}}

Use the **Services AFP** screen to configure Apple Filing Protocol (AFP) service on your TrueNAS.

![Services AFP Edit](/images/CORE/12.0/ServicesAFPEdit.png "Services AFP Edit")

Click **SAVE** to save settings. 

Click **CANCEL** to exit without saving and return to the **Services** screen.

**General Option**

{{< truetable >}}
| Name | Description |
|----------|-------------|
| **Database Path** | The database information stored in the path. If the pool has read-only status, the path must still be writable. |
{{< /truetable >}}

**Access**


{{< truetable >}}
| Name | Description |
|----------|-------------|
| **Guest Account** | Select an account to use for guest access. This account must have permissions to the shared pool or dataset. Any client connecting to the guest service has the privileges of the guest account user. This user must exist in the password file, but does not need a valid login. Root user cannot be the guest account. |
| **Guest Access** | Select to disable the password prompt that displays before clients access AFP shares. |
| **Max Connections** | Maximum number of simultaneous connections permitted via AFP. The default limit is **50**. |
| **Chmod Request** | Indicates how to handle access control lists. Select **Ignore** to disregard requests. Selecting **Ignore** also gives the parent directory ACL inheritance full control over new items. Select **Preserve** to preserve ZFS ACEs for named users and groups or the POSIX ACL group mask. Select **Simple** to configure chmod() as requested without any extra steps. |
| **Map ACLs** | Maps permissions for authenticated users. Select **Rights** (default, Unix-style permissions), **None**, or **Mode (ACLs)**. |
{{< /truetable >}}

**Other Options**

{{< truetable >}}
| Name | Description |
|----------|-------------|
| **Log Level** | Record AFP service messages up to the specified log level in the system log. The system logs severe and warning level messages by default. |
| **Bind Interfaces** | Specify the IP addresses to listen for AFP connections. Leave blank to bind to all available IPs. If no IP addresses specified, advertise the first IP address of the system. If no IP addresses specified, listen for any incoming request. |
| **Global Auxiliary** | Additional [afp.conf(5)](http://netatalk.sourceforge.net/3.0/htmldocs/afp.conf.5.html) parameters. |
{{< /truetable >}}

{{< taglist tag="coreafp" limit="10" >}}
