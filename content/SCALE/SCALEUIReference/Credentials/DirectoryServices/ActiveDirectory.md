---
title: "Active Directory Screen"
descritpion: "This article provides information on the **Active Directory** configuration screen settings."
weight: 10
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
tags:
- scalead
- scalekerberos
---

{{< toc >}}

Click **Configure Active Directory** in **Credentials > Directory Services** to open the **Active Directory** form.

### Basic Options

![ActiveDirectoryBasicOptions](/images/SCALE/22.12/ActiveDirectoryBasicOptions.png "Active Directory Basic Options")

| Setting | Description |
|---------|-------------|
| **Domain Name** | Required. Enter the Active Directory domain (example.com) or child domain (sales.example.com). |
| **Domain Account Name** | Required. Enter the Active Directory administrator account name. |
| **Domain Account Password** | Password for the Active Directory administrator account. Required the first time you configure a domain. After initial configuration, the password is not needed to edit, start, or stop the service. |
| **Enable (requires password or Kerberos principal)** | Select to enable the Active Directory service. You must enter the password for the domain account the first time you select this option. |

### Advanced Options
Click **Advanced Options** to open the advanced settings screen. The **Advanced Options** includes the **Basic Options** settings.

![ActiveDirectoryAdvancedOptions](/images/SCALE/22.12/ActiveDirectoryAdvancedOptions.png "Active Directory Advanced Options")

| Setting | Description |
|---------|-------------|
| **Site Name** | Enter the Relative Distinguished Name (RDN) of the site object in the AD server. This is the first component of the **distingishedName** in AD. For more info read [Configuring Active Directory]({{< relref "ConfigADSCALE.md" >}}). |
| **Kerberos Realm** | Select an existing realm from the dropdown list of options. Options are those configured in **Kerberos Realms**. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in **Directory Services > Kerberos Keytabs**. |
|**Enable (requires password or Kerberos principle)** | Select to enable AD service. The first time you select this option you must enter the password for the domain admin account. | **Verbose Logging** | Logs attempts to join the domain in <kbd>/var/log/messages</kbd>. |
| **Allow Trusted Domains** | Selected if you do not want the username to include a domain name. Leave cleared to force the domain names to be prepended to usernames. One possible reason to not select this is to prevent username collisions when this is selected and there are identical usernames across multiple domains. |
| **Use Default Domain** | Leave cleared to prepend the domain name to the username to prevent name collisions when selecing **Allow Trusted Domains** and multiple domains use the same username. |
| **Allow DNS Updates** | Enables Samba to do DNS updates when joining a domain. |
| **Disable AD User/Group Cache** | Select to disable caching AD users and groups, which can help when unable to bind to a domain with a lot of users or groups. |
| **Restrict PAM** | Select to restrict SSH access in certain circumstance to members in BUILTIN\\Administrators. |
| **Computer Account OU** | Enter the organizational unit (OU) that creates new computer accounts. The OU string from top to bottom without RDNs. Uses forward slashes (/) as delimiters, like `Computers/Servers/NAS`. Use backslashes (\\) to escape characters but do not use as a separator. TrueNAS interprets backslashes at multiple levels, so you might have to use several for them to work. If left blank, TrueNAS creates new computer accounts in the AD default OU. |
| **AD Timeout** | Number of seconds before timeout. To view the AD connection status, open the interface **Task Manager**, click **History** to open the **Jobs** screen. |
| **DNS Timeout** | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| **Winbind NSS Info** | Choose the schema to use when querying AD for user/group info. **rfc2307** uses the Windows 2003 R2 schema support, **sfu** is for Service For Unix 3.0 or 3.5, and **sfu20** is for Service For Unix 2.0. |
| **Netbios Name** | Required. Default is **trunas** which is the netbios name of this NAS. This name must differ from the Workgroup name and be no greater than 15 characters. |
| **NetBIOS Alias** | Alternative names (no greater than 15 characters) that SMB clients can use when connecting to this NAS. |
| **Leave Domain** | Disconnects the TrueNAS system from the AD server. |


{{< taglist tag="scalead" limit="10" >}}
{{< taglist tag="scaledkerberos" limit="10" title="Related Kerberos Articles" >}}