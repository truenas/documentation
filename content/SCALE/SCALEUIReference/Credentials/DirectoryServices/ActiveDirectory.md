---
title: "Active Directory"
geekdocCollapseSection: true
weight: 10
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
---

{{< toc >}}

Click **Configure Active Directory** in **Credentials > Directory Services** to open the **Active Directory** form.

![DirectoryServicesActiveDirectoryForm](/images/SCALE/22.02/DirectoryServicesActiveDirectoryForm.png "Active Directory Form")

### Basic Options

| Setting | Description |
|---------|-------------|
| **Domain Name** | Enter the Active Directory domain (example.com) or child domain (sales.example.com). |
| **Domain Account Name** | Enter the Active Directory administrator account name. |
| **Domain Account Password** | Password for the Active Directory administrator account. Required the first time a domain is configured. After initial configuration, the password is not needed to edit, start, or stop the service. |
| **Enable (requires password or Kerberos principal)** | Enable the Active Directory service. The first time this option is set, the Domain Account Password must be entered. |

### Advanced Options

| Setting | Description |
|---------|-------------|
| **Verbose Logging** | Logs attempts to join the domain in /var/log/messages. |
| **Allow Trusted Domains** | When set, usernames do not include a domain name. Unset to prepend domain names to user names. Unsetting this option prevents username collisions when there are identical usernames across multiple domains. |
| **Use Default Domain** | Unset to prepend the domain name to the username and prevent name collisions when using Allow Trusted Domains with the same username across multiple domains. |
| **Allow DNS Updates** | Enables Samba to do DNS updates when joining a domain. |
| **Disable AD User/Group Cache** | Disables caching AD users and groups, which can help when unable to bind to a domain with a lot of users or groups. |
| **Restrict PAM** | Restricts SSH access to BUILTIN\\Administrators members in certain circumstances. |
| **Site Name** | Enter the relative distinguished name of the site object in the Active Directory. |
| **Kerberos Realm** | Select an existing realm from *Kerberos Realms*. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in Directory Services > Kerberos Keytabs. |
| **Computer Account OU** | The OU that creates new computer accounts. TrueNAS reads the OU string from top to bottom without RDNs. Uses forward slashes (/) as delimiters, like Computers/Servers/NAS. Use backslashes (\\) to escape characters but not as a separator. TrueNAS interprets backslashes at multiple levels, so you might have to use several for them to work. When this field is blank, TrueNAS creates new computer accounts in the AD default OU. |
| **AD Timeout** | Number of seconds before timeout. To view the AD connection status, open the interface Task Manager. |
| **DNS Timeout** | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| **Winbind NSS Info** | Choose the schema to use when querying AD for user/group info. *rfc2307* uses the Windows 2003 R2 schema support, *sfu* is for Service For Unix 3.0 or 3.5, and *sfu20* is for Service For Unix 2.0. |
| **Netbios Name** | Netbios Name of this NAS. This name must differ from the Workgroup name and be no greater than 15 characters. |
| **NetBIOS Alias** | Alternative names (no greater than 15 characters) that SMB clients can use when connecting to this NAS. Can be no greater than 15 characters. |
| **Leave Domain** | Disconnects the TrueNAS system from the Active Directory. |