---
title: "LDAP Screen"
description: "Use the LDAP screen to configure Lightweight Directory Access Protocol (LDAP) server settings on your TrueNAS"
weight: 20
tags:
- coreldap
- coreidmap
---

Lightweight Directory Access Protocol (LDAP) is an industry standard for directory information services deployed over an Internet Protocol (IP) network. Use the **Directory Services LDAP** screen to configure LDAP server settings on your TrueNAS.  

![DirectoryServicesLDAPScreen](/images/CORE/13.0/DirectoryServicesLDAPScreen.png "Directory Services LDAP Screen")

Click **SAVE** to save settings.

Click **ADVANCED OPTIONS** to display additional **LDAP** configuration options. 

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync or fewer users than expected are available in the permissions editors.

## Basic Options

![LDAPBasicOptions](/images/CORE/13.0/LDAPBasicOptions.png "LDAP Basic Options")

| Name | Description |
|---------|-------------|
| **Hostname** | Enter the LDAP server host names or IP addresses. Separate entries with an empty space. Mutltiple host names or IP addresses entered can be used to create an LDAP failover priority list. If a host does not respond, the next host on the list is tried until a new connection is established. |
| **Base DN** | Top level of the LDAP directory tree to use when searching for resources. For example, *dc=test,dc=org*. |
| **Bind DN** | Enter an administrative account name on the LDAP server. For example, *cn=Manager,dc=test,dc=org*. |
| **Bind Password** | Enter the password for the administrative account in **Bind DN**. |
| **Enable** | Select to activate the configuration. Leave checkbox clear to disable the configuration without deleting it. |

## Advanced Options

![LDAPAdvancedOptions](/images/CORE/13.0/LDAPAdvancedOptions.png "LDAP Advanced Options")

| Name | Description |
|---------|-------------|
| **Allow Anonymous Binding** | Select to disable authentication and allow read and write access to any client. |
| **Kerberos Realm** | Select an option configured on your system from the dropdown list. |
| **Kerberos Principle** |Select an option configured on your system from the dropdown list. |
| **Encryption Mode** | Select an encryption mode for the LDAP connection from the dropdown list. Select **OFF** to not encrypt the LDAP connection. Select **ON** to encrypt the LDAP connection with SSL on port **636**. Select **START_TLS** to encrypt the LDAP connection with STARTTLS on the default LDAP port **389**. |
| **Certificate** | A certificate is not required when using a username and password or Kerberos authentication. Select a certificate added to your system from the dropdown list (default option is **freenas_default**) or add a new LDAP certificate-based authentication for the LDAP provdier to sign. See [Certificate Signing Requests]({{< relref "/CORE/CORETutorials/SystemConfiguration/CreatingCAsandCertificates/CreatingCertificates.md" >}}) for more information. |
| **Validate Certificates** | Select to validate the authenticity of the certificate. |
| **Disable LDAP User/Group Cache** | Select to disable chaching LDAP users and groups in large LDAP environments. When disabled, LDAP users and groups do not display on the dropdown lists but are still accepted when typed into fields. |
| **LDAP timeout** | Default value is **10** seconds. Increase if Kerberos ticket queries are not responding within the default time. |
| **DNS timout** | Default value is **10** seconds. Increase if DNS queries take too long to respond. |
| **Samba Schema (DEPRECATED - see help text)** | Select if LDAP authentication for SMB shares is required and the LDAP server is already configured with Samba attributes. If selected, select the type of schema in the **Schema** dropdown list. **Samba Schema** is deprecated in [Samba 4.13.0](https://www.samba.org/samba/history/samba-4.13.0.html). |
| **Auxiliary Parameters** | Enter for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| **Schema** | Select the Samba schema from the dropdown list. Options are **RFC2307** or **RFC2307BIS**. |

Click **SAVE** to save settings and return to the **LDAP** screen.

Click **BASIC OPTIONS** to return to the **LDAP** display of basic options only.

Click **EDIT IDMAP** to navigate to the **Directory Services > Idmap** screen.

{{< taglist tag="coreldap" limit="10" title="Related LDAP Articles" >}}

{{< taglist tag="coreidmap" limit="10" >}}
