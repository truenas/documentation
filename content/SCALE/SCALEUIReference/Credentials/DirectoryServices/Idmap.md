---
title: "Idmap"
description: "This article provides information about Identity Mapping (IDMAP) configuration screen settings."
geekdocCollapseSection: true
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
tags:
- scaleidmap
- scaledirectoryservices
---

{{< toc >}}

Click an **Idmap** name to edit an Idmap, or click **Add** in the **Credentials > Directory Services** **Idmap** widget to open the **Idmap** form.

![DirectoryServicesIdmapForm](/images/SCALE/22.02/DirectoryServicesIdmapForm.png "Idmap Form")

| Setting | Description |
|---------|-------|
| **Name**  | Enter the pre-Windows 2000 domain name. |
| **Idmap Backend**  | Provides a plugin interface for Winbind to use varying backends to store SID/uid/gid mapping tables. The correct setting depends on the environment you deployed the NAS in. |
| **DNS Domain Name**  | DNS name of the domain. |
| **Range Low** | Range Low and Range High set the range of UID/GID numbers the IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS will ignore it. |
| **Range High**  | Range Low and Range High set the range of UID/GID numbers the IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS will ignore it. |

### Options

Some options only display when either adding or editing an Idmap.

| Setting | Description |
|---------|-------|
| **Schema Mode** | Choose the schema to use with LDAP authentication for SMB shares. The LDAP server must be configured with Samba attributes to use a Samba Schema. Options include RFC2307 (included in Windows 2003 R2) and Service for Unix (SFU). For SFU 3.0 or 3.5, choose "SFU". For SFU 2.0, choose "SFU20". |
| **Unix Primary Group** | When checked, the primary group membership is fetched from the LDAP attributes (gidNumber). When not checked, the primary group membership is calculated via the "primaryGroupID" LDAP attribute. |
| **Unix NSS Info** | When checked, winbind will retrieve the login shell and home directory from the LDAP attributes. When not checked or when the AD LDAP entry lacks the SFU attributes the smb4.conf parameters `template shell` and `template homedir` are used. |
| **SSSD Compat** | Generate Idmap low range based on the same algorithm that SSSD uses by default. | 

{{< taglist tag="scaledirectoryservices" limit="10" title="Related Directory Services Articles" >}}
