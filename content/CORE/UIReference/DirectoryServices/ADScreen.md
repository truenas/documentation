---
title: "Active Directory Screen"
description: "Use the AD screen to configure Active Directory (AD) and related service options on your TrueNAS"
weight: 10
tags:
- coredirectoryservices
- coread
---


Use the **Directory Serices > Active Directory** screens to set up Active Directory (AD) on your TrueNAS. The Active Directory (AD) service shares resources in a Windows network. The first Active Directory screen is a list of basic options.  

Use **ADVANCED OPTIONS** to access additional options shown below.  

Use **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync  or  fewer users than expected are available in the permissions editors.  

![ActiveDirectoryScreen](/images/CORE/13.0/ActiveDirectoryScreen.png "Active Directory Screen")


## Basic Options

![ActiveDirectoryScreenBasicOptions](/images/CORE/13.0/ActiveDirectoryScreenBasicOptions.png "Active Directory Basic Options")

| Setting | Description |
|---------|-------------|
| **Domain Name** | Enter the Active Directory domain (*example.com*) or child domain (*sales.example.com*). Required field. |
| **Domain Account Name** | Enter the Active Directory administrator account name. Required field. |
| **Domain Account Password** | Enter the password for the Active Directory administrator account. Required the first time a domain is configured. After initial configuration, the password is not needed to edit, start or stop the service. |
| **Enable (requires password or Kerberos principle)** | Enable the Active Directory services. The first time this option is selected, the **Domain Account Password** must be entered. |

## Advanced Options

![ActiveDirectoryScreenAdvancedOptions](/images/CORE/13.0/ActiveDirectoryScreenAdvancedOptions.png "Active Directory Advanced Options")

| Setting | Description |
|---------|-------------|
| **Verbose logging** | Select to log attempts to join the domain to <file>/var/log/messages</file>. |
| **Allow Trusted Domains** | Select to not include a domain name in user names. Leave checkbox clear to force domain names to prepend to user names. One possible reason for not setting this value is to prevent user name collisions when **Allow Trusted Domains** is selected and there are identical user names in more than one domain. |
| **Use Default Domain** | Leave checkbox clear to prepend the domain name to the user name. When not selected prevents name collisions when **Allow Trusted Domains** is set and multiple domains use the same user name. |
| **Allow DNS Updates** | Select to enable Samba to do DNS updates when joining a domain. |
| **Disable FreeNAS Cache** | Select to disable caching AD users and groups. This can help when unable to bind to a domain with a large number of users or groups. |
| **Restrict PAM** | Select to restrict SSH access in certain circumstances to only members of BUILTIN\\Administrators. |
| **Site Name** | Enter the relative distinguished name of the site object in the Active Directory. |
| **Kerberos Realm** | Select an existing realm that is added in **Directory Services > Kerberos Realms**. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in **Directory Services > Kerberos Keytabs**. |
| **Computer Account OU** | The organizational unit in which new computer accounts are created. The OU string is read from top to bottom without RDNs. Slashes (/) are used as delimiters, like *Computers/Servers/NAS*. The backslash (\\) is used to escape characters but not as a separator. Backslashes are interpreted at multiple levels and might require doubling or even quadrupling to take effect. When left blank, new computer accounts are created in the Active Directory default OU. |
| **AD Timeout** | Number of seconds before timeout. To view the AD connection status, open the interface **Task Manager**. |
| **DNS Timeout** | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| **Winbind NSS Info** | Select the schema to use when querying AD for user/group info from the dropdown list. **rfc2307** uses the schema support included in Windows 2003 R2, **sfu** is for Service For Unix 3.0 or 3.5, and **sfu20** is for Service For Unix 2.0. |
| **Netbios Name** | The Netbios name of this NAS is **truenas**. This name must differ from the Workgroup name and be no greater than 15 characters. |
| **NetBIOS alias** | Alternative names that SMB clients can use when connecting to this NAS. Can be no greater than 15 characters. |
| **LEAVE DOMAIN** | Disconnects the TrueNAS system from the Active Directory. |

Use **SAVE** to save settings. 

Use **BASIC OPTIONS** to return to the **Active Directory** display of basic options only.  

Use **EDIT IDMAP** to navigate to the **Directory Services > Idmap** screen. 

Use **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync or fewer users than expected are available in the permissions editors. 

{{< taglist tag="coread" limit="10" >}}  
