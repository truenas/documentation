---
title: "Setting Up LDAP"
description: "Use the LDAP screen to configure Lightweight Directory Access Protocol (LDAP) server settings on your TrueNAS."
weight: 20
aliases: /core/directoryservices/ldap/
tags:
- coreldap
---
 
Lightweight Directory Access Protocol (LDAP) is an open and cross-platform protocol. It is often used to centralize authentication. TrueNAS includes an [Open LDAP](https://www.openldap.org/) client for accessing information from an LDAP server. An LDAP server provides directory services for finding network resources. This includes finding users and their associated permissions.

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is not enabled. To enable, first determine if LDAP authentication for SMB shares is a requirement. If so, configure the LDAP directory and populate it with Samba attributes. The most popular script for performing this task is `smbldap-tools`. The LDAP server must support SSL/TLS. Import the certificate for the LDAP server CA. Non-CA certificates are not currently supported.
{{< /expand >}}

## Integrating an LDAP Server with TrueNAS

To integrate an LDAP server with TrueNAS, go to **Directory Services > LDAP**.

![DirectoryServicesLDAP](/images/CORE/12.0/DirectoryServicesLDAP.png "LDAP Options")

Enter any LDAP server host names or IP addresses.
Separate entries with an empty space.
Entering more than one host name or IP address creates an LDAP failover priority list.

{{< expand "What does this do?" "v" >}}
If a host does not respond, the system tries the next host in the list until it establishes a new connection.
{{< /expand >}}

Enter the **Base DN**.
This is the top level of the LDAP directory tree used when searching for resources.
For example, `dc=test,dc=org`.

Enter the **Bind DN**.
This is the administrative account name on the LDAP server.
For example, `cn=Manager,dc=test,dc=org`.

Enter the **Bind Password**.
This is the password associated with the account in **Bind DN**.

The final basic option is **Enable**.
Clearing the **Enable** checkbox disables the LDAP configuration without deleting it. Enable it at a later time without reconfiguring the options.

To make further changes to the LDAP configuration, click **ADVANCED OPTIONS**.

See [LDAP Screen]({{< relref "/CORE/UIReference/DirectoryServices/LDAPScreen.md" >}}) for information on basic and advanced option settings.

See [Kerberos]({{< relref "/CORE/CORETutorials/DirectoryServices/Kerberos.md" >}}) for more information on using Kerberos.

To configure LDAP certificate-based authentication for the LDAP provider to sign, see [Certificate Signing Requests]({{< relref "CORE/CORETutorials/SystemConfiguration/CreatingCAsandCertificates/CreatingCertificates.md" >}}).

{{< hint type=important >}}
[Samba 4.13.0](https://www.samba.org/samba/history/samba-4.13.0.html) deprecated **Samba Schema**. Select if SMB shares need LDAP authentication and the LDAP server is already configured with Samba attributes. If selected, specify the type of schema from the **Schema** dropdown list.
{{< /hint >}}

{{< taglist tag="coreldap" limit="10" >}}
