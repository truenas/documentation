---
title: "FRG: Directory Services"
linkTitle: "Directory Services"
description: "Descriptions of each field in the Directory Services section of the TrueNAS web interface."
weight: 70
tags: ["reference", "AD", "Kerberos", "LDAP", "NIS"]
---

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

## IDMAP Edit

**Settings**

| | |
|-|-|
| ldmap Backend | Provides a plugin interface for Winbind to use varying backends to store SID/uid/gid mapping tables. The correct setting depends on the environment in which the NAS is deployed. |
| Name | Enter the pre-Windows 2000 domain name. |
| DNS Domain Name | DNS name of the domain |
| Range Low | Range Low and Range High set the range of UID/GID numbers which this IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, the external credential is ignored. |
| Range High | Range Low and Range High set the range of UID/GID numbers which this IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, the external credential is ignored. |

**Options**

| | |
|-|-|
| SSSD Compat | Generate idmap low range based on same algorithm that SSSD uses by default. |

## LDAP

**Server Credentials**

| | |
|-|-|
| Hostname | LDAP server hostnames or IP addresses. Separate entries with an empty space. Multiple hostnames or IP addresses can be entered to create an LDAP failover priority list. If a host does not respond, the next host in the list is tried until a new connection is established. |
| Base DN | Top level of the LDAP directory tree to be used when searching for resources. Example: dc=test,dc=org. |
| Bind DN | Administrative account name on the LDAP server. Example: cn=Manager,dc=test,dc=org. |
| Bind Password | Password for the Bind DN. |
| Enable | Activates the configuration. Unset to disable the configuration without deleting it. |

**Advanced**

| | |
|-|-|
| Allow Anonymous Binding | Set for the LDAP server to disable authentication and allow read and write access to any client. |
| Kerberos Realm | Select an existing realm that was added in Directory Services > Kerberos Realms. |
| Kerberos Principal | Select the location of the principal in the keytab created in Directory Services > Kerberos Keytabs. |
| Encryption Mode | Options for encrypting the LDAP connection: *OFF*: do not encrypt the LDAP connection. *ON*: encrypt the LDAP connection with SSL on port 636. *START_TLS*: encrypt the LDAP connection with STARTTLS on the default LDAP port 389. |
| Certificate | Certificate to use when performing LDAP certificate-based authentication. To configure LDAP certificate-based authentication, create a Certificate Signing Request for the LDAP provider to sign. A certificate is not required when using username/password or Kerberos authentication. |
| Validate Certificates | Verify certificate authenticity. |
| Disable LDAP User/Group Cache | Disable caching LDAP users and groups in large LDAP environments. When caching is disabled, LDAP users and groups do not appear in dropdown menus, but are still accepted when manually entered. |
| LDAP timeout | LDAP timeout in seconds. Increase this value if a Kerberos ticket timeout occurs. |
| DNS timeout | DNS timeout in seconds. Increase this value if DNS queries timeout. |
| Samba Schema (DEPRECATED - see help text) | Only set LDAP authentication for SMB shares is required and the LDAP server is already configured with Samba attributes. DEPRECATED: Support for Samba Schema is [officially deprecated in Samba 4.13](https://www.samba.org/samba/history/samba-4.13.0.html). The feature will be removed after Samba 4.14. Users should begin upgrading legacy Samba domains to Samba AD domains. |
| Auxiliary Parameters | Additional options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| Schema | Select a schema when Samba Schema is set. |

## NIS

**Network Information Service (NIS)**

| | |
|-|-|
| NIS Domain | Name of NIS domain. |
| NIS Servers | List of hostnames or IP addresses. Separate entries by pressing Enter. |
| Secure Mode | Set to have [ypbind(8)](https://www.freebsd.org/cgi/man.cgi?query=ypbind) refuse to bind to any NIS server not running as root on a TCP port over 1024. |
| Manycast | Set for ypbind to bind to the server that responds the fastest. |
| Enable | Unset to disable the configuration without deleting it. |

## Kerberos Realms: Add

**Kerberos Realms**

| | |
|-|-|
| Realm | Enter the name of the realm. |

**Advanced**

| | |
|-|-|
| Realm | Enter the name of the realm. |
| KDC | Enter the name of the Key Distribution Center. Separate multiple values by pressing Enter. |
| Admin Server | Define the server where all changes to the database are performed. Separate multiple values by pressing Enter. |
| Password Server | Define the server where all password changes are performed. Separate multiple values by pressing Enter. |

## Kerberos Keytab: Add

**Kerberos Keytab**

| | |
|-|-|
| Name | Enter a name for this Keytab. |
| Keberos Keytab | Browse to the keytab file to upload. |

## Kerberos Settings

**Options**

| | |
|-|-|
| Appdefaults Auxiliary Parameters | Additional Kerberos application settings. See the "appdefaults" section of [krb.conf(5)](https://www.freebsd.org/cgi/man.cgi?query=krb5.conf&apropos=0&sektion=5&manpath=FreeBSD+12.0-RELEASE&arch=default&format=html). for available settings and usage syntax. |
| Libdefaults Auxiliary Parameters | Additional Kerberos application settings. See the "libdefaults" section of [krb.conf(5)](https://www.freebsd.org/cgi/man.cgi?query=krb5.conf&apropos=0&sektion=5&manpath=FreeBSD+12.0-RELEASE&arch=default&format=html). for available settings and usage syntax. |
