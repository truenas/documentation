---
title: "Idmap Screens"
description: "This article provides information on the **Idmap** screen and widget settings."
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
tags:
- scaleidmap
- scaledirserv
---

{{< toc >}}

Idmap in Linux is essentially a translation of a range of IDs into another or the same range of IDs. Idmap works in conjunction with the Winbind facility of SAMBA to map owner and group SIDs to user IDs (UIDs) and group IDs (GIDs). 

{{< hint type=warning >}}
Only administrators experienced with configuring Id mapping should attempt to add new or edit existing idmaps. 
Misconfiguration can impact system operation.
{{< /hint >}}

## Idmap Widget
The **Idmap** widget in the **Advanced Settings** on the **Directory Services** screen displays idmaps added to SCALE. 

![IdmapWidget](/images/SCALE/22.12/IdmapWidget.png "Idmap Widget")

**Add** opens the **Add Idmap** configuration screen.

Click on any instance to open the **Edit Idmap** screen.

The **Idmap** widget header opens the **Idmap** screen.

## Idmap Screen

The **Idmap** screen displays a list view of idmaps configured on your SCALE system.

![IdmapScreen](/images/SCALE/22.12/IdmapScreen.png "Idmap Screen")

**Add** opens the **Add Idmap** screen.

Click on an Idmap on the widget to open the screen for the selected idmap. 

## Add and Edit IDMAP Screens
The settings on the **Add Idmap** and **Edit Idmap** change based on the selection made in both the **Name** and **Idmap Backend** fields. 

### Add Idmap Screen (Default and Custom Value)

![AddIdmapDefalutScreen](/images/SCALE/22.12/AddIdmapDefalutScreen.png "Add Idmap Default Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | (Required) Select an option from the dropdown list, **SMB - Primary Domain** or **Custom Value**. **SMB - Primary Domain** reduces the fields displayed on the **Add Idmap** screen. Selecting **Custom Value** adds The **Custom Name** field. |
| **Custom Name** | Displays below the **Name** field after selecting **Custom Value** in the **Name** field. Enter the pre-Windows 2000 domain name. |
| **Idmap Backend**  |(Required) Select the backend plugin interface for Winbind to use to store SID to UID/GID mapping tables. The correct setting depends on the environment you deployed the NAS in. Options are **AD** for Active Directory, **LDAP** for an LDAP environment. **AUTORID** is similar to RID but it can automatically assign IDs for different domains. **NSS** provides a means to map Unix users and groups to Windows accounts. **RFC2307** provides a way for Winbind to read ID mappings from records in an LDAP server defined in RFC 2307. **RID** provides a way to use an algorithmic mapping scheme to map UIDs/GIDs and SIDs. **TDB** is similar to RID but it is an allocating backend, which means it needs to allocate new users and group IDs in order to create new mappings. The selected option changes the settings displayed on the **Add Idmap** screen. |
| **DNS Domain Name**  | Enter the DNS name of the domain. |
| **Range Low** |(Required) Enter a value for the least number of members. Works with the **Range High** to establish the range of UID/GID numbers the Idmap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS ignores it. |
| **Range High**  | (Required) Enter a value for the greatest number of members. Works with the **Range Low** to establish the range of UID/GID numbers the Idmap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS ignores it. |
{{< /truetable >}}

**Options Settings**
The **Options** settings change based on the selected **Name** and **Idmap Backend** fields.

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Schema Mode** | (Required) Select the schema to use with LDAP authentication for SMB shares. You must configure the LDAP server with Samba attributes to use a Samba Schema. Options include **RFC2307** (included in Windows 2003 R2) and Service for Unix (**SFU**). For SFU 3.0 or 3.5, choose **SFU**. For SFU 2.0, choose **SFU20**. |
| **Unix Primary Group** | Select to fetch the primary group membership from the LDAP attributes (gidNumber). If unselected, the primary group membership is calculated via the primaryGroupID LDAP attribute. |
| **Unix NSS Info** | Select sets Winbind to retrieve the login shell and home directory from the LDAP attributes. If unselected, when the AD LDAP entry lacks the SFU attributes the smb4.conf parameters `template shell` and `template homedir` are used. |
{{< /truetable >}}

### Add Idmap Screen for SMB - Primary Domain
The settings for **Add Idmap** displays a subset of those on the default screen.
{{< expand "Settings for SMB - Primary Domain" "v" >}}

![AddIdmapSMBPrimaryDomainScreen](/images/SCALE/22.12/AddIdmapSMBPrimaryDomainScreen.png "Add Idmap SMB - Primary Domain Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Displays **SMB - Primary Domain**. |
| **DNS Domain Name** | Enter the DNS name of the domain. |
| **Range Low** |(Required) Works with the **Range High** to establish the range of UID/GID numbers the idmap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS ignores it. |
| **Range High** | (Required) Works with the **Range Low** to establish the range of UID/GID numbers the idmap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS ignores it. |
{{< /truetable >}}

**Options** only as the **Read Only** which, when selected, makes the module read-only. No new ranges are allocated or new mappings created in the idmap pool.
{{< /expand >}}

### Add Idmap Screen with Idmap Backend as AD
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **AD** shares the same settings as the default screen but it includes **DNS Domain Name**.
{{< expand "Idmap Backend - AD Settings" "v" >}}

![AddIdmapBackendAD](/images/SCALE/22.12/AddIdmapBackendAD.png "Add Idmap Screen with AD as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **DNS Domain Name** | Enter the domain name of the DNS server. |
{{< /truetable >}}
{{< /expand >}}

### Add Idmap Screen with Idmap Backend as AUTORID
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **AUTORD** shares the some of the same settings on the **AD** screen but the **Options** settings are different.
{{< expand "Idmap Backend - AUTORID Options Settings" "v" >}}

![AddIdmapBackendAD](/images/SCALE/22.12/AddIdmapBackendAD.png "Add Idmap Screen with AUTORID as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Range Size** | Enter the number of UIDs/GIDs available per domain range. The minimum number is 2000. The recommended default is 100000. |
| **Read Only** | Select to make the module read-only. No new ranges are allocated or new mappings created in the idmap pool. |
| **Ignore Builtin** | Select to ignore mapping requests for the BUILTIN domain. |
{{< /truetable >}}

{{< /expand >}}

### Add Idmap Screen with Idmap Backend as LDAP
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **LDAP** shares the some of the same settings on the **AD** screen but it adds the **Certificate** option, and the **Options** settings are different.
{{< expand "Idmap Backend - LDAP Settings" "v" >}}

![AddIdmapBackendLDAPSettings](/images/SCALE/22.12/AddIdmapBackendLDAPSettings.png "Add Idmap Screen with LDAP as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Certificate** | Select the certificate of the Active Directory server if SSL connections are used. When no certificates are available, move to the Active Directory server and create a Certificate Authority and certificate. Import the certificate to SCALE using the **Credentials > Certificates** screen widgets. |
| **Manage Certificates** | Opens the **Credentials > Certificates** screen. When finished on the **Certificates** screen, navigate back to **Directory Services**, click **Show** and confirm to display the **Idmap** widget again. Click **Add** to begin the configuration again. |
{{< /truetable >}}

**Options**
The LDAP settings in **Options** are different from other **Idmap Backend** options except the **RFC2307** option.

![AddIdmapBackendLDAPOptionsSettings](/images/SCALE/22.12/AddIdmapBackendLDAPOptionsSettings.png "Add Idmap Screen with LDAP as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read Only** | Select to make the module read-only. No new ranges are allocated or new mappings created in the idmap pool. | 
| **Base DN** | (Required) Enter the directory base suffix to use for SID to UID/GID mapping entries. Examples, *dc=test*, *dc=org*. When undefined, idmap_ldap defaults to using the LDAP idmap suffix option from [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html). | 
| **LDAP User DN** | (Required) Enter the user distinguished name (DN) to use for authentication. | 
| **LDAP User DN Password** | Enter the password associated with the LDAP user DN. | 
| **URL** | (Required) Enter the URL for the LDAP server to use for SID to UID/GID mapping. For example, *ldap://ldap.netscap.com/o=Airus.com*. | 
| **Encryption Mode** | (Required) Select the encryption mode to use with LDAP from the dropdown list. Options are **On**, **Off**, or **StartTLS**. | 
{{< /truetable >}}

{{< /expand >}}

### Add Idmap Screen with Idmap Backend as NSS
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **NSS** shares the same settings as the **AD** screen. There is only one **Options** setting.
{{< expand "Idmap Backend - NSS Settings" "v" >}}
![AddIdmapBackendNSSSettings](/images/SCALE/22.12/AddIdmapBackendNSSSettings.png "Add Idmap Screen with RSS as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Linked Service** | (Required) Select the option that specifies the auxiliary directory service ID provider from the dropdown list. Options are **Local Account**, **LDAP**, or **NIS**. |
{{< /truetable >}}
{{< /expand>}}

###  Add Idmap Screen with Idmap Backend as RFC2307
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **RFC2307** shares the same settings as the **LDAP** screen, and some of the same **Options** settings. 
{{< expand " Idmap Backend - RFC2307 Settings" "v" >}}
The **RFC2307** settings in **Options** share the **Idmap Backend** settings as the **LDAP** option, but includes more configuration settings.

![AddIdmapBackendRFC2307Options](/images/SCALE/22.12/AddIdmapBackendRFC2307Options.png "Add Idmap Screen with RFC2307 as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **LDAP User DN** | (Required) Enter the user distinguished name (DN) to use for authentication. | 
| **LDAP User DN Password** | Enter the password associated with the LDAP user DN. | 
| **URL** | (Required) Enter the URL for the LDAP server to use for SID to UID/GID mapping. For example, *ldap://ldap.netscap.com/o=Airus.com*. | 
| **Encryption Mode** | (Required) Select the encryption mode to use with LDAP from the dropdown list. Options are **On**, **Off**, or **StartTLS**. | 
| **LDAP Server** | Select the type of LDAP server to use. This can be the LDAP server provided by the Active Directory server or a stand-alone LDAP server. |
| **LDAP Realm** | Enter the realm that performs authentication from an LDAP server. |
| **User Bind Path** | Enter the search base where user objects are found in the LDAP server. |
| **Group Bind Path** | Enter the search base where group objects are found in the LDAP server. |
| **User CN** | Enter the user common name (CN) to query the CN instead of the uid attribute for the user name in LDAP. |
| **CN Realm** | Append *@realm* to the CN in LDAP queries for both groups and users when you set the **User CN**. |
| **LDAP Domain** | Enter the domain to access the Active Directory server when using the LDAP server inside the Active Directory server. |
{{< /truetable >}}
{{< /expand >}}

### Add Idmap Screen with Idmap Backend as RID
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **RID** shares the same settings as the **AD** screen. There is only one **Options** setting.
{{< expand "Idmap Backend - RID Settings" "v" >}}

![AddIdmapBackendAUTORIDSettings](/images/SCALE/22.12/AddIdmapBackendAUTORIDSettings.png "Add Idmap Screen with RID as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SSSD Compat** | Select to generate the idmap low range based on the same algorithm that SSSD uses by default. |
{{< /truetable >}}
{{< /expand>}}

### Add Idmap Screen with Idmap Backend as TDB
The **Add Idmap** screen with **Name** set to **Custom Value** and **Idmap Backend** set to **TDB** shares the same settings as the **AD** screen. There is only one **Options** setting.
{{< expand "Idmap Backend - TDB Settings" "v" >}}

![AddIdmapBackendTDBSettings](/images/SCALE/22.12/AddIdmapBackendTDBSettings.png "Add Idmap Screen with TDB as Idmap Backend")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read Only** | Select to make the module read-only. No new ranges are allocated or new mappings created in the idmap pool. | 
{{< /truetable >}}
{{< /expand>}}

{{< taglist tag="scaleidmap" limit="10" >}}
