## Active Directory

**Domain Credentials**

| | |
|-|-|
| Domain Name | Enter the Active Directory domain (example.com) or child domain (sales.example.com). |
| Domain Account Name | Enter the Active Directory administrator account name. |
| Domain Account Password | Password for the Active Directory administrator account. Required the first time a domain is configured. After initial configuration, the password is not needed to edit, start, or stop the service. |
| Enable | Enable the Active Directory service. The first time this option is set, the Domain Account Password must be entered. |

**Advanced**

| | |
|-|-|
| Verbose logging | Set to log attempts to join the domain to /var/log/messages. |
| Allow Trusted Domains | When set, usernames do not include a domain name. Unset to force domain names to be prepended to user names. One possible reason for unsetting this value is to prevent username collisions when Allow Trusted Domains is set and there are identical usernames in more than one domain. |
| Use Default Domain | Unset to prepend the domain name to the username. Unset to prevent name collisions when Allow Trusted Domains is set and multiple domains use the same username. |
| Allow DNS updates | Set to enable Samba to do DNS updates when joining a domain. |
| Disable FreeNAS Cache | Set to disable caching AD users and groups. This can help when unable to bind to a domain with a large number of users or groups. |
| Restrict PAM | Set to restrict SSH access in certain circumstances to only members of BUILTIN\\Administrators |
| Site Name | Enter the relative distinguished name of the site object in the Active Directory. |
| Kerberos Realm | Select an existing realm that was added in Directory Services > Kerberos Realms. |
| Kerberos Principal | Select the location of the principal in the keytab created in Directory Services > Kerberos Keytabs. |
| Computer Account OU | The OU in which new computer accounts are created. The OU string is read from top to bottom without RDNs. Slashes ("/") are used as delimiters, like Computers/Servers/NAS. The backslash ("\\") is used to escape characters but not as a separator. Backslashes are interpreted at multiple levels and might require doubling or even quadrupling to take effect. When this field is blank, new computer accounts are created in the Active Directory default OU. |
| AD Timeout | Number of seconds before timeout. To view the AD connection status, open the interface Task Manager. |
| DNS Timeout | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| Winbind NSS Info | Choose the schema to use when querying AD for user/group info. rfc2307 uses the schema support included in Windows 2003 R2, sfu is for Service For Unix 3.0 or 3.5, and sfu20 is for Service For Unix 2.0. |
| Netbios Name  | Netbios Name of this NAS. This name must differ from the Workgroup name and be no greater than 15 characters. |
| NetBIOS alias | Alternative names that SMB clients can use when connecting to this NAS. Can be no greater than 15 characters. |