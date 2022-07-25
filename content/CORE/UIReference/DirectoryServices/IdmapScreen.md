---
title: "Idmap Screen"
description: "Use the Idmap screen to configure Identity Mapping (Idmap) on your TrueNAS"
weight: 10
tags:
- coreidmap
- coread
---

Identity mapping in a system running Unix or a Unix-like OS involves the translation of Windows Security Identifier (SID) to a user ID (UID) and group ID (GID). 
The **Edit Idmap** screen displays after clicking **Edit IDMAP** on the **Active Directory > Advanced Options** screen. It lists all domains configured on the TrueNAS.

![DirectoryServicesldmapScreenn](/images/CORE/13.0/DirectoryServicesldmapScreen.png "Directory Services Idmap Screen")

Click the blue **COLUMNS** button to customize the information displayed in the **Idmap** table. Select from **Unselect All**, **Backend**, **DNS Domain Name**, **Range Low**, **Range High**, **Certifcate** or **Reset to Defaults**.

Click **ADD** to open the **Idmap Add** screen. Active Directory must be enabled before adding new domains.

Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the options for each domain, **Edit** or **Delete**.

## Idmap Settings

| Name | Description |
|---------|-------------|
| **Idmap Backend** | Select the plugin interface for Windbind to use from the dropdown list. Plugin interfaces for Windbind use varying backends to store SID/uid/gid mapping tables. The correct setting depends on the environment in which the NAS is deployed. |
| **Name** | Enter the pre-Windows 2000 domain name or select from the dropdown list. |
| **DNS Domain Name** | Enter the DNS name of the domain. |
| **Range Low** | Sets the range of UID/GID numbers which this Idmap backend translates. If an external credential like a Windows SDI maps to a UID or GID number outside this range, the external credential is ignored. |
| **Rang High**  | Sets the range of UID/GID numbers which this Idmap backend translates. If an external credential like a Windows SDI maps to a UID or GID number outside this range, the external credential is ignored. |
| **SSSD Compat** | Select to generate Idmap low range based on same algorithm that SSSD uses by default.  |

Click **SAVE** to save settings and return to the **Idmap** screen.

Click **CANCEL** to exit without saving and return to the **Idmap** screen.

{{< taglist tag="coreidmap" limit="10" title="Related Idmap Articles" >}}

{{< taglist tag="coread" limit="10" >}}
