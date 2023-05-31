---
title: "Idmap Screen"
description: "Use the Idmap screen to configure Identity Mapping (Idmap) on TrueNAS CORE."
weight: 10
tags:
- coreidmap
- coread
---

On a system running Unix or a Unix-like OS, Idmap acts as a translator. Windows Security Identifier (SID)s convert to a user ID (UID) and group ID (GID). Use the Identity Mapping (Idmap) screen to configure Idmap service on the TrueNAS.

 Click **Edit IDMAP** on the **Active Directory > Advanced Options** screen. The **Edit Idmap** screen displays. It lists all domains configured on the TrueNAS.

![DirectoryServicesldmapScreenn](/images/CORE/13.0/DirectoryServicesldmapScreen.png "Directory Services Idmap Screen")

You can customize the information displayed in the **Idmap** table. Click the blue **COLUMNS** button to display a dropdown list of options. A check mark next to the option name means the column is currently visible. Select from **Unselect All**, **Backend**, **DNS Domain Name**, **Range Low**, **Range High**, **Certificate** or **Reset to Defaults**. 

Click **ADD** to open the **Idmap Add** screen. Enable Active Directory before attempting to add new domains.

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the options for each domain, **Edit** or **Delete**.

## Idmap Settings

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Idmap Backend** | Select the plugin interface for Windbind to use from the dropdown list. Plugin interfaces for Windbind use varying backends. These backends store SID/uid/gid mapping tables. The correct setting depends on the NAS deployment environment. |
| **Name** | Enter the pre-Windows 2000 domain name or select from the dropdown list. |
| **DNS Domain Name** | Enter the DNS name of the domain. |
| **Range Low** | Determines the range of UID/GID numbers which this Idmap backend translates. External credentials like a Windows SID must map to a UID or GID number inside this range. Ignores external credentials outside this range. |
| **Range High**  | Determines the range of UID/GID numbers which this Idmap backend translates. External credentials like a Windows SID must map to a UID or GID number inside this range. Ignores external credentials outside this range. |
| **SSSD Compat** | Select to generate Idmap low range based on same algorithm that SSSD uses by default.  |
{{< /truetable >}}

Click **SAVE** to save settings and return to the **Idmap** screen.

Click **CANCEL** to exit without saving and return to the **Idmap** screen.

{{< taglist tag="coreidmap" limit="10" title="Related Idmap Articles" >}}

{{< taglist tag="coread" limit="10" >}}
