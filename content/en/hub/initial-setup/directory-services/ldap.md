---
title: "Connecting to LDAP"
description: "A how-to for connecting TrueNAS to an LDAP server."
---

TrueNAS includes an [Open LDAP](http://www.openldap.org/) client for accessing
information from an LDAP server. An LDAP server provides directory services for
finding network resources such as users and their associated permissions.

>NOTE: LDAP authentication for SMB shares is disabled unless the LDAP directory
has been configured for and populated with Samba attributes. The most popular
script for performing this task is `smbldap-tools`. The LDAP server must support
SSL/TLS and the certificate for the LDAP server CA must be imported. Non-CA
certificates are not currently supported.

## Server Credentials

To integrate an LDAP server with TrueNAS, go to **Directory Services > LDAP**.
First, enter LDAP server hostnames or IP addresses. Separate entries with an
empty space. Multiple hostnames or IP addresses can be entered to create an
LDAP failover priority list. If a host does not respond, the next host in the
list is tried until a new connection is established. Enter the *Base DN*. This
is the top level of the LDAP directory tree to be used when searching for
resources. For Example, `dc=test,dc=org`. Enter the *Bind DN*. This is the
administrative account name on the LDAP server. For example,
`cn=Manager,dc=test,dc=org`. Next, enter the *Bind Password*. This is the password
associated with the *Bind DN* account. The final basic option is *Enable*.
Unsetting *Enable* disables the LDAP configuration without deleting it. It can
be enabled at a later time.

{{% alert title="ADVANCED OPTIONS" %}}
If you would like to modify the LDAP configuration further, click
*ADVANCED OPTIONS*. Setting *Allow Anonymous Binding* disables authentication
and allows read and write access to any client. If a Kerberos realm has been
added to TrueNAS it can be selected from the *Kerberos Realm* dropdown. Likewise,
if a Kerberos keytab has been created, select it in the *Kerberos Principal*
dropdown. If an encryption mode for the LDAP connection is desired, select one
of these options from the*Encryption Mode* dropdown: *OFF* -do not encrypt the
LDAP connection, *ON* - encrypt the LDAP connection with SSL on port 636, or
*START_TLS* - encrypt the LDAP connection with STARTTLS on the default LDAP
port 389. If certificate authentication is desired, select a certificate to use
from the *Certificate* dropdown. To configure LDAP certificate-based
authentication, create a Certificate Signing Request for the LDAP provider to
sign. A certificate is not required when using username/password or Kerberos
authentication. To validate the authenticity of the certificate, set
*Validate Certificates*. Set *Disable LDAP User/Group Cache* to disable caching
LDAP users and groups in large LDAP environments. When caching is disabled,
LDAP users and groups do not appear in dropdown menus, but are still accepted
when manually entered. Increase *LDAP timeout* if a Kerberos ticket timeout
occurs. *LDAP timeout* is in seconds. Increase *DNS timeout* if DNS queries
timeout. *DNS timeout* is in seconds. Only set *Samba Schema* if LDAP
authentication for SMB shares is required and the LDAP server is already
configured with Samba attributes. *Auxiliary Parameters* can be specified for
[nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). If *Samba
Schema* is set, select the type of schema from the *Schema* dropdown.
{{% /alert %}}
