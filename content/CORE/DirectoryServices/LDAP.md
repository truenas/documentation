---
title: "LDAP"
weight: 20
---

{{< toc >}}

TrueNAS includes an [Open LDAP](http://www.openldap.org/) client for accessing information from an LDAP server. An LDAP server provides directory services for finding network resources such as users and their associated permissions.

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless the LDAP directory has been configured for and populated with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
The LDAP server must support SSL/TLS and the certificate for the LDAP server CA must be imported.
Non-CA certificates are not currently supported.
{{< /expand >}}

To integrate an LDAP server with TrueNAS, go to **Directory Services > LDAP**.

![DirectoryServicesLDAP](/images/CORE/12.0/DirectoryServicesLDAP.png "LDAP Options")

Enter any LDAP server hostnames or IP addresses.
Separate entries with an empty space.
Entering multiple hostnames or IP addresses creates an LDAP failover priority list.
{{< expand "What does this do?" "v" >}}
If a host does not respond, the next host in the list is tried until a new connection is established.
{{< /expand >}}

Enter the *Base DN*.
This is the top level of the LDAP directory tree to be used when searching for resources.
For example, `dc=test,dc=org`.

Enter the *Bind DN*.
This is the administrative account name on the LDAP server.
For example, `cn=Manager,dc=test,dc=org`.

Next, enter the *Bind Password*.
This is the password associated with the *Bind DN* account.

The final basic option is *Enable*.
Unsetting *Enable* disables the LDAP configuration without deleting it.
It can be enabled at a later time without reconfiguring the options.

{{< expand "Advanced Configuration" "v" >}}
To further modify the LDAP configuration, click *ADVANCED OPTIONS*.

![DirectoryServicesLDAPADvanced](/images/CORE/12.0/DirectoryServicesLDAPAdvanced.png "LDAP Advanced Options")

Setting *Allow Anonymous Binding* disables authentication and allows read and write access to any client.

If a [Kerberos](/core/directoryservices/kerberos/) realm has been added to TrueNAS, it can be selected from the *Kerberos Realm* dropdown.
Likewise, if a Kerberos keytab has been created, select it in the *Kerberos Principal* dropdown.

If an encryption mode for the LDAP connection is desired, select one of these options from the *Encryption Mode* dropdown:

* *OFF*: do not encrypt the LDAP connection.
* *ON*: encrypt the LDAP connection with SSL on port 636.
* *START_TLS*: encrypt the LDAP connection with STARTTLS on the default LDAP port *389*.

A certificate is not required when using username/password or Kerberos authentication.
If certificate authentication is desired, select a certificate to use from the *Certificate* dropdown.
To configure LDAP certificate-based authentication, [create a Certificate Signing Request](/CORE/System/certificates/) for the LDAP provider to sign.

To validate the authenticity of the certificate, set *Validate Certificates*.

Set *Disable LDAP User/Group Cache* to disable caching LDAP users and groups in large LDAP environments.
When caching is disabled, LDAP users and groups do not appear in dropdown menus, but are still accepted when manually entered.

Increase *LDAP timeout* if a Kerberos ticket queries are not responding within the default time.
*LDAP timeout* is in seconds.
Increase *DNS timeout* if DNS queries take too long to respond.
*DNS timeout* is in seconds.

{{< hint warning >}}
*Samba Schema* is deprecated in [Samba 4.13.0](https://www.samba.org/samba/history/samba-4.13.0.html).
Set *Samba Schema* if LDAP authentication for SMB shares is required and the LDAP server is already configured with Samba attributes.
If *Samba Schema* is set, select the type of schema from the *Schema* dropdown.
{{< /hint >}}

*Auxiliary Parameters* can be specified for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5).
{{< /expand >}}
