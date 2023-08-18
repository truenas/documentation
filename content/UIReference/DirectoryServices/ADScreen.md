---
title: "Active Directory Screen"
description: "Use the AD screen to configure Active Directory (AD) on TrueNAS CORE."
weight: 10
tags:
- coredirectoryservices
- coread
---

The Active Directory (AD) service shares resources in a Windows network environment. Go to **Directory Services > Active Directory** to set up AD on TrueNAS. The first Active Directory screen is a list of basic options.  

![ActiveDirectoryScreen](/images/CORE/13.0/ActiveDirectoryScreen.png "Active Directory Screen")

## Basic Options

![ActiveDirectoryScreenBasicOptions](/images/CORE/13.0/ActiveDirectoryScreenBasicOptions.png "Active Directory Basic Options")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Domain Name** | Enter the Active Directory domain (*example.com*) or child domain (*sales.example.com*). Required field. |
| **Domain Account Name** | Enter the Active Directory administrator account name. Required field. |
| **Domain Account Password** | Enter the password for the Active Directory administrator account. Required when configuring a domain for the first time. After initial configuration, the password is not needed to edit, start or stop the service. |
| **Enable (requires password or Kerberos principle)** | Enable the Active Directory services. Must enter the **Domain Account Password** when selecting this option for the first time. |
{{< /truetable >}}

Click **ADVANCED OPTIONS** to access extra options shown below.  

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync. Or if fewer users than expected are available or visible in the permissions editors.  

## Advanced Options

![ActiveDirectoryScreenAdvancedOptions](/images/CORE/13.0/ActiveDirectoryScreenAdvancedOptions.png "Active Directory Advanced Options")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Verbose logging** | Select to log attempts to join the domain to <file>/var/log/messages</file>. |
| **Allow Trusted Domains** | Selected if you do not want the username to include a domain name. Clear the checkbox to force the domain names to be prepended to usernames. One possible reason to not select this value is to prevent username collisions when this is selected and there are identical usernames across multiple domains. |
| **Use Default Domain** | Leave checkbox clear to prepend the domain name to the user name. When not selected prevents name collisions when **Allow Trusted Domains** is set and multiple domains use the same user name. |
| **Allow DNS Updates** | Select to enable Samba to do DNS updates when joining a domain. |
| **Disable FreeNAS Cache** | Select to disable caching AD users and groups. This can help when unable to bind to a domain with a large number of users or groups. |
| **Restrict PAM** | Select to restrict SSH access in certain circumstances. When selected only members of BUILTIN\\Administrators have SSH access. |
| **Site Name** | Enter the relative distinguished name of the site object in the Active Directory. |
| **Kerberos Realm** | Select an existing realm added in **Directory Services > Kerberos Realms**. |
| **Kerberos Principal** | Select the location of the principal in the keytab. Keytab created in **Directory Services > Kerberos Keytabs**. |
| **Computer Account OU** | The organizational unit where new computer accounts get created. OU strings read from top to bottom without RDNs. Use slashes (/) as delimiters, like *Computers/Servers/NAS*. Use the backslash (\\) to escape characters but not as a separator. Backslash interpretation takes place at many levels. Backslashes might need doubling or even quadrupling to take effect. When left blank, new computer accounts get created in the Active Directory default OU. |
| **AD Timeout** | Number of seconds before timeout. To view the AD connection status, open the interface **Task Manager**. |
| **DNS Timeout** | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| **Winbind NSS Info** | Select the schema to use when querying AD for user/group info from the dropdown list. **rfc2307** uses the schema support included in Windows 2003 R2. **sfu** is for Service For Unix 3.0 or 3.5. **sfu20** is for Service For Unix 2.0. |
| **Netbios Name** | The Netbios name of this NAS is **truenas**. This name must differ from the Workgroup name and be no greater than 15 characters. |
| **NetBIOS alias** | Alternative names that SMB clients can use when connecting to this NAS. Can be no greater than 15 characters. |
| **LEAVE DOMAIN** | Disconnects the TrueNAS system from the Active Directory. |
{{< /truetable >}}

Click **SAVE** to save settings. 

Click **BASIC OPTIONS** to return to the **Active Directory** display of basic options only.  

Click **EDIT IDMAP** to navigate to the **Directory Services > Idmap** screen. 

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync. Or if fewer users than expected are available in the permissions editors. 

{{< taglist tag="coread" limit="10" >}}  
