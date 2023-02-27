---
title: "Active Directory Screens"
description: "This article provides information on the **Active Directory** configuration screens and settings."
weight: 10
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
tags:
- scalead
- scalekerberos
- scaledirserv
---

{{< toc >}}


## Active Directory Widget

The **Active Directory** widget displays after you configure SCALE settings for your Active Directory instance. 
The widget includes **Status**, and the **Domain Name** and **Domain Account Name** you configured.

![ActiveDirectoryWidget](/images/SCALE/22.12/ActiveDirectoryWidget.png "Active Directory Widget")

**Settings** opens the **Active Directory** screen with a subset of settings you can edit.

## Active Directory - Add and Edit Screens

The **Active Directory** configuration screen has two screens, **Basic Options** the default view, and **Advanced Options**. 
After configuring Active Directory, the edit **Active Directory** screen includes both the basic and advanced options, but the basic options are a limited subset of settings of what is available when you add AD.

**Rebuild Directory Service Cache** resyncs the cache if it gets out of sync or there are fewer users than expected are available in the permissions editors. 

**Leave Domain** disconnects the TrueNAS system from the Active Directory server.

### Active Directory Basic Options
The edit version of the **Basic Options** screen only includes the **Domain Name** and **Enable** options. The **Basic Options** settings are included on the **[Advanced Options](#active-directory-advanced-options)** screen.
{{< expand "Basic Option Settings" "v" >}}

![ActiveDirectoryBasicOptions](/images/SCALE/22.12/ActiveDirectoryBasicOptions.png "Active Directory Basic Options")

| Setting | Description |
|---------|-------------|
| **Domain Name** | (Required) Enter the Active Directory domain (example.com) or child domain (sales.example.com). Editable after save. |
| **Domain Account Name** | (Required) Enter the Active Directory administrator account name. Not editable after you save. |
| **Domain Account Password** | (Required) Password for the Active Directory administrator account. Required the first time you configure a domain. After initial configuration, the password is not needed to edit, start, or stop the service. After the initial configuration or joining, SCALE uses the **Kerberos Principal** instead of the password. |
| **Enable (requires password or Kerberos principal)** | Select to enable the Active Directory service. Clear to disable Active Directory. After disabling Active Directory, the **[Directory Services]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}})** screen returns to the default and provides the options to configure AD or LDAP. SCALE creates a Kerberos realm and keytab from what it detects in Active Directory, then populates the **Kerberos Realm** and **Kerberos Principal** settings on the **Advanced Options** screen. |
{{< /expand >}}

### Active Directory Advanced Options
The **Advanced Options** screen displays the same settings on both the add and edit versions of the **Active Directory** screen. 
On the add **Active Directory** screen, the **Advanced Options** screen includes the **[Basic Options](#active-directory-basic-options)** settings.
On the edit screen, the **Advanced Options** displays the subset found on the **Basic Options** screen.
{{< expand "Advanced Options Settings" "v" >}}

![ActiveDirectoryAdvancedOptions](/images/SCALE/22.12/ActiveDirectoryAdvancedOptions.png "Active Directory Advanced Options")

| Setting | Description |
|---------|-------------|
| **Site Name** | Enter the Relative Distinguished Name (RDN) of the site object in the AD server. This is the first component of the **distingishedName** in AD. For more info read [Configuring Active Directory]({{< relref "ConfigADSCALE.md" >}}). |
| **Kerberos Realm** | Select an existing realm from the dropdown list of options. Options are those configured in **Kerberos Realms**. After selecting **Enable (requires password or Kerberos principal)**, SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovered in AD. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in **Directory Services > Kerberos Keytabs**. After selecting **Enable (requires password or Kerberos principal)**, SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovered in AD. |
|**Enable (requires password or Kerberos principle)** | Select to enable AD service. The first time you select this option you must enter the password for the domain admin account. After selecting **Enable (requires password or Kerberos principal)**, SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovered in AD. |
| **Verbose Logging** | Select to log attempts to join the domain in <kbd>/var/log/messages</kbd>. |
| **Allow Trusted Domains** | Selected if you do not want the username to include a domain name. Leave cleared to force the domain names to be prepended to usernames. One possible reason to not select this is to prevent username collisions when this is selected and there are identical usernames across multiple domains. |
| **Use Default Domain** | Leave cleared to prepend the domain name to the username to prevent name collisions when selecting **Allow Trusted Domains** and multiple domains use the same username. |
| **Use Default Domain** | Select to prepend the domain name to the username. Leave clear to prevent name collisions when **Allow Trusted Domains** is selected and multiple domains use the same username. |
| **Allow DNS Updates** | Select to enable Samba to do DNS updates when joining a domain. |
| **Disable AD User/Group Cache** | Select to disable caching AD users and groups, which can help when unable to bind to a domain with a lot of users or groups. |
| **Restrict PAM** | Select to restrict SSH access in certain circumstance to members in BUILTIN\\Administrators. |
| **Computer Account OU** | Enter the organizational unit (OU) that creates new computer accounts. The OU string from top to bottom without RDNs. Uses forward slashes (/) as delimiters, like `Computers/Servers/NAS`. Use backslashes (\\) to escape characters but do not use as a separator. TrueNAS interprets backslashes at multiple levels, so you might have to use several for them to work. If left blank, TrueNAS creates new computer accounts in the AD default OU. |
| **AD Timeout** | Enter the number of seconds before timeout. To view the AD connection status, open the interface **Task Manager**, click **History** to open the **Jobs** screen. |
| **DNS Timeout** | Enter the number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| **Winbind NSS Info** | Select the schema to use when querying AD for user/group info. **rfc2307** uses the Windows 2003 R2 schema support, **sfu** is for Service For Unix 3.0 or 3.5, and **sfu20** is for Service For Unix 2.0. |
| **Netbios Name** | (Required) Enter a netbios name of this NAS if not using the default. The name must differ from the Workgroup name and not exceed 15 characters. Default setting is **truenas**. |
| **NetBIOS Alias** | Alternative names (no greater than 15 characters) that SMB clients can use when connecting to this NAS.  |
| **Leave Domain** | Disconnects the TrueNAS system from the AD server. |
{{< /expand >}}


{{< taglist tag="scalead" limit="10" >}}
{{< taglist tag="scaledkerberos" limit="10" title="Related Kerberos Articles" >}}
