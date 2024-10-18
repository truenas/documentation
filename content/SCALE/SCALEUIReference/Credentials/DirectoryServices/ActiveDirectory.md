---
title: "Active Directory Screens"
description: "Provides information on the **Active Directory** configuration screens and settings."
weight: 10
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
  - /scale/scaleclireference/directory-service/cliiactivedirectory/
tags:
- activedirectory
- kerberos
- directoryservices
---


{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

## Active Directory Widget
The **Active Directory** widget displays after you configure TrueNAS to access your Active Directory domain controller.
The widget shows **Status**, **Domain Name**, and **Domain Account Name**.

{{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryWidget.png" alt="Active Directory Widget" id="Active Directory Widget" >}}

**Settings** opens the **Active Directory** edit screen that shows the settings you can edit.

## Active Directory - Add and Edit Screens
The **Active Directory** configuration screen opens showing the **Basic Options** as the default view.
**Advanced Options** shows additional advanced setting options.
After configuring TrueNAS to access Active Directory, **Settings** opens the **Active Directory** screen showing the few basic options you can edit and the option to access advanced setting.

**Rebuild Directory Service Cache** resyncs the cache if it gets out of sync or if there are fewer users than expected available in the permissions editors.

**Leave Domain** shows after configuring Active Directory access, and disconnects the TrueNAS system from the Active Directory server.

### Active Directory - Basic Options
The edit version of the **Basic Options** screen only shows options you can edit, which are the **Domain Name** and **Enable** options.
**Basic Options** settings also show on the **[Advanced Options](#active-directory-advanced-options)** screen.

{{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryBasicOptions.png" alt="Active Directory Basic Options" id="Active Directory Basic Options" >}}

{{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryBasicOptionsEditScreen.png" alt="Active Directory Edit Basic Options" id="Active Directory Edit Basic Options" >}}

{{< expand "Basic Option Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Domain Name** | (Required) Enter the Active Directory domain name (example.com) or child domain (sales.example.com) if configuring TrueNAS with access to a limited portion of your configuration. This is the name of the domain with all the user and group objects TrueNAS accesses. Editable after saving. |
| **Domain Account Name** | (Required) Enter the bindname TrueNAS should use as the account name. The default value is **Administrator**. TrueNAS creates this account after domain-join. Not editable after saving. |
| **Domain Account Password** | (Required) Enter the bindpw password for the account. Required the first time you configure a domain. After initial configuration, the password is not needed to edit, start, or stop the service. After the initial configuration or joining, TrueNAS uses the **Kerberos Principal** instead of the password. |
| **NetBIOS Name** | Enter the hostname of the TrueNAS system, found on the **Edit Global Configuration** screen in the **Hostname** field. The default value is **TRUENAS**. The name must not exceed 15 characters, including spaces, and must differ from the Workgroup name. The Workgroup name is a label used to identify a group of computers on a local network that share resources and are part of a peer-to-peer networking model. |
| **Enable (requires password or Kerberos principal)** | Select to enable the Active Directory service in TrueNAS. TrueNAS populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovers in AD. Clear to disable Active Directory. After disabling Active Directory, the **[Directory Services]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}})** screen returns to the default and shows the options to configure AD or LDAP. TrueNAS creates a Kerberos realm and keytab from what it detects in Active Directory, then populates the **Kerberos Realm** and **Kerberos Principal** settings on the **Advanced Options** screen. |
{{< /truetable >}}
{{< /expand >}}

### Active Directory - Advanced Options
The **Advanced Options** screen shows both the basic and advanced option settings on the add and edit versions of the **Active Directory** screen.

{{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryAdvancedOptions.png" alt="Active Directory Advanced Options" id="Active Directory Advanced Options" >}}

{{< expand "Advanced Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Site Name** | Enter the relative distinguished name (RDN) of the site object in the AD server. This is the first component of the distingished name in AD. For more info, read [Configuring Active Directory]({{< relref "ConfigADSCALE.md" >}}). |
| **Kerberos Realm** | Select an existing realm from the dropdown list of options. Options are those configured in **Kerberos Realms**. After selecting **Enable (requires password or Kerberos principal)**, SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovered in AD. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in **Directory Services > Kerberos Keytabs**. After selecting **Enable (requires password or Kerberos principal)**, SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovered in AD. |
| **Computer Account OU** | The organizational unit (OU) where new computer accounts are created. The OU string includes the distinguished name (DN) of the Computer Account OU that includes the hierarchical location of the OU within the directory structure. For example, *OU=Computers,DC=example,DC=com*. The OU string is read from top to bottom without relative distinguished names (RDNs). Slashes (/) are uses as delimiters, as in *Computers/Servers/NAS*. Backslashes (\) are used to escape characters but not as a separator. Backslashes are interpreted at multiple levels and might require doubling or even quadrupling to take effect. When this field is blank, new computer accounts are created in the Active Directory default OU. |
| **AD Timeout** | Enter the number of seconds before timeout. To view the AD connection status, open the interface **Task Manager**, click **History** to open the **Jobs** screen. |
| **DNS Timeout** | Enter the number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| **Winbind NSS Info** | Winbind NSS specifies the method used by Winbind to retrieve user and group information. Select the schema to use when querying AD for user/group info. Options:<br><li>**TEMPLATE** - (default) Select to use a template to construct user and group entries based on attributes. Other options are:<br><li>**rfc2307** - Select to use the RFC 2307 schema, Windows 2003 R2 schema support.<br><li>**sfu** - Select to use the Service for Unix 3.0 or 3.5 schema to access Unix attributes in Active Directory.<br><li>**sfu20** - Select to use the Service for Unix 2.0 schema to access Unix attributes in Active Directory.</li> |
| **NetBIOS Alias** | Alternative names that SMB clients can use when connecting to this NAS. Names must not exceed 15 characters. |
|**Enable (requires password or Kerberos principle)** | Select to enable AD service. The first time you select this option you must enter the password for the domain admin account. After selecting **Enable (requires password or Kerberos principal)**, SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields with what it discovered in AD. |
| **Verbose Logging** | Select to log attempts to join the domain in <file>/var/log/messages</file>. |
| **Allow Trusted Domains** | Select if you do not want the username to include a domain name. Leave cleared to force the domain names to be prepended to usernames. One possible reason to not select this is to prevent username collisions when this is selected and there are identical usernames across multiple domains. |
| **Use Default Domain** | Select to set the domain name to the username. Leave clear to prevent name collisions when **Allow Trusted Domains** is selected and multiple domains use the same username. |
| **Allow DNS Updates** | Select to enable Samba to do DNS updates when joining a domain. Selected by default. |
| **Disable AD User/Group Cache** | Select to disable caching AD users and groups, which can help when unable to bind to a domain with a lot of users or groups. |
| **Restrict PAM** | Select to restrict SSH access in certain circumstance to members in BUILTIN\\Administrators. Pluggable Authentication Module (PAM) enables systems to authenticate users against AD credentials. |
{{< /truetable >}}
{{< /expand >}}
