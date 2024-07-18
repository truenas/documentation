---
title: "SMB"
description: "Provides instructions on configuring the SMB service in TrueNAS SCALE."
weight: 50
aliases: /scale/scaleuireference/shares/smb/smbservicesscreen/
tags:
 - smb
 - services
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

The **Services > SMB** screen displays after going to the **Shares** screen, finding the **Windows (SMB) Shares** section, and clicking <span class="material-icons">more_vert</span> + **Config Service**.
Alternatively, you can go to **System > Services** and click the <span class="material-icons">edit</span> edit icon for the SMB service.

## Configuring SMB Service
The **SMB Services** screen displays setting options to configure TrueNAS SMB settings to fit your use case. 
In most cases, you can set the required fields and accept the rest of the setting defaults. If you have specific needs for your use case, click **Advanced Options** to display more settings.

![SMBServiceOptionsSCALE](/images/SCALE/SystemSettings/SMBServiceOptionsSCALE.png "SMB Service Options")

Enter the name of the TrueNAS host system if not the default displayed in **NetBIOS Name**. This name is limited to 15 characters and cannot be the **Workgroup** name.

Enter any alias name or names that do not exceed 15 characters in the **NetBIOS Alias** field. Separate each alias name with a space between them.

Enter a name that matches the Windows workgroup name in **Workgroup**. TrueNAS detects and sets the correct workgroup from these services when unconfigured with enabled Active Directory or LDAP active.

If using SMB1 clients, select **Enable SMB1 support** to allow legacy SMB1 clients to connect to the server. Note: SMB1 is deprecated. We advise you to upgrade clients to operating system versions that support modern SMB protocol versions.

If you plan to use the insecure and vulnerable NTLMv1 encryption, select **NTLMv1 Auth** to allow [smbd](https://www.samba.org/samba/docs/current/man-html/smbd.8.html) attempts to authenticate users. This setting enables backward compatibility with older versions of Windows, but we don't recommend it. Do not use on untrusted networks.

Enter any notes about the service configuration in **Description**

For more advanced settings, see [SMB Services Screen]({{< relref "SMBServicesScreen.md" >}}).

Click **Save**.

Start the **SMB** service.

## Auditing SMB Events

To monitor SMB service event logs, such as when a client attempts to authenticate to the share, use the TrueNAS SCALE [auditing screen]({{< relref "auditingscale.md" >}}).
Go to **System > Audit** to review event logs including SMB connect, disconnect, create, read or write events, and others.

Enter `SMB` in the [search bar]({{< relref "auditingscale.md#searching-audit-logs" >}}) to view only SMB service logs or use the advanced search to further limit results.

{{< expand "Configuring SMB Share Auditing" "v" >}}
{{< include file="/static/includes/ConfigureSMBShareAuditingSCALE.md" >}}
{{< /expand >}}
