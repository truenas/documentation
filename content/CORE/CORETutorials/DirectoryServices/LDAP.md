---
title: "Setting Up LDAP"
description: "Use the LDAP screen to configure Lightweight Directory Access Protocol (LDAP) server settings on your TrueNAS"
weight: 20
aliases: /core/directoryservices/ldap/
tags:
- coredirectoryservices
- coreldap
---
 

TrueNAS includes an [Open LDAP](https://www.openldap.org/) client for accessing information from an LDAP server. An LDAP server provides directory services for finding network resources such as users and their associated permissions.

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless the LDAP directory is configured for and populated with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
The LDAP server must support SSL/TLS and the certificate for the LDAP server CA must be imported.
Non-CA certificates are not currently supported.
{{< /expand >}}

## Integrating an LDAP Server with TrueNAS

To integrate an LDAP server with TrueNAS, go to **Directory Services > LDAP**.

![DirectoryServicesLDAP](/images/CORE/12.0/DirectoryServicesLDAP.png "LDAP Options")

Enter any LDAP server host names or IP addresses.
Separate entries with an empty space.
Entering multiple host names or IP addresses creates an LDAP failover priority list.

{{< expand "What does this do?" "v" >}}
If a host does not respond, the next host in the list is tried until a new connection is established.
{{< /expand >}}

Enter the **Base DN**.
This is the top level of the LDAP directory tree used when searching for resources.
For example, `dc=test,dc=org`.

Enter the **Bind DN**.
This is the administrative account name on the LDAP server.
For example, `cn=Manager,dc=test,dc=org`.

Next, enter the **Bind Password**.
This is the password associated with the account in **Bind DN**.

The final basic option is **Enable**.
Leaving the **Enable** checkbox clear disables the LDAP configuration without deleting it.
It can be enabled at a later time without reconfiguring the options.

To further modify the LDAP configuration, click **ADVANCED OPTIONS**.

See [LDAP Screen]({{< relref "/CORE/UIReference/DirectoryServices/LDAPScreen.md" >}}) for information on basic and advanced option settings.

See [Kerberos]({{< relref "/CORE/CORETutorials/DirectoryServices/Kerberos.md" >}}) for more information on using Kerberos..

To configure LDAP certificate-based authentication for the LDAP provider to sign, see [Certificate Signing Requests]({{< relref "CORE/CORETutorials/SystemConfiguration/CreatingCAsandCertificates/CreatingCertificates.md" >}}).

{{< hint warning >}}
**Samba Schema** is deprecated in [Samba 4.13.0](https://www.samba.org/samba/history/samba-4.13.0.html).
Set **Samba Schema** if LDAP authentication for SMB shares is required and the LDAP server is already configured with Samba attributes.
If **Samba Schema** is set, select the type of schema from the **Schema** dropdown.
{{< /hint >}}

{{< taglist tag="coredirectoryservices" limit="10" title="Related Articles" >}}
