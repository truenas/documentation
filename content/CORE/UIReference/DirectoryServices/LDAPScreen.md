---
title: "LDAP Screen"
description: "Use the LDAP screen to configure Lightweight Directory Access Protocol (LDAP) server settings on your TrueNAS"
weight: 20
tags:
- coreldap
- coreidmap
---

Lightweight Directory Access Protocol (LDAP) is an industry standard. Directory information services deployed over an Internet Protocol (IP) network can use LDAP. Configure LDAP server settings on your TrueNAS using the **Directory Services > LDAP** screen.  

![DirectoryServicesLDAPScreen](/images/CORE/13.0/DirectoryServicesLDAPScreen.png "Directory Services LDAP Screen")

Click **SAVE** to save settings.

Click **ADVANCED OPTIONS** to display extra **LDAP** configuration options. 

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync. Or if fewer users than expected are available in the permissions editors.

## Basic Options

![LDAPBasicOptions](/images/CORE/13.0/LDAPBasicOptions.png "LDAP Basic Options")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Hostname** | Enter the LDAP server host names or IP addresses. Separate entries with an empty space. To create an LDAP failover priority list, enter more than one host name or IP address. If a host does not respond, the system tries the next host on the list. This continues until the new connection succeeds. |
| **Base DN** | Top level of the LDAP directory tree to use when searching for resources. For example, *dc=test,dc=org*. |
| **Bind DN** | Enter an administrative account name on the LDAP server. For example, *cn=Manager,dc=test,dc=org*. |
| **Bind Password** | Enter the password for the administrative account in **Bind DN**. |
| **Enable** | Select to activate the configuration. Leave checkbox clear to disable the configuration without deleting it. |
{{< /truetable >}}

## Advanced Options

![LDAPAdvancedOptions](/images/CORE/13.0/LDAPAdvancedOptions.png "LDAP Advanced Options")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Allow Anonymous Binding** | Select to disable authentication and allow read and write access to any client. |
| **Kerberos Realm** | Select an option configured on your system from the dropdown list. |
| **Kerberos Principle** |Select an option configured on your system from the dropdown list. |
| **Encryption Mode** | Select an encryption mode for the LDAP connection from the dropdown list. Select **OFF** to not encrypt the LDAP connection. Select **ON** to encrypt the LDAP connection with SSL on port **636**. Select **START_TLS** to encrypt the LDAP connection with STARTTLS. This option uses the default LDAP port **389**. |
| **Certificate** | A certificate is not required when using a username and password. A certificate is not required when using Kerberos authentication. Select a certificate added to your system from the dropdown list. The default option is **freenas_default**. Or add a new LDAP certificate-based authentication for the LDAP provider to sign. See [Certificate Signing Requests]({{< relref "/CORE/CORETutorials/SystemConfiguration/CreatingCAsandCertificates/CreatingCertificates.md" >}}) for more information. |
| **Validate Certificates** | Select to validate the authenticity of the certificate. |
| **Disable LDAP User/Group Cache** | Select to disable caching LDAP users and groups in large LDAP environments. When disabled, LDAP users and groups do not display on dropdown lists. They are still accepted when typed into fields. |
| **LDAP timeout** | Default value is **10** seconds. Increase if Kerberos ticket queries are not responding within the default time. |
| **DNS timout** | Default value is **10** seconds. Increase if DNS queries take too long to respond. |
| **Samba Schema (DEPRECATED - see help text)** | [Samba 4.13.0](https://www.samba.org/samba/history/samba-4.13.0.html) deprecated **Samba Schema**. Select if SMB shares need LDAP authentication and the LDAP server is already configured with Samba attributes. If selected, specify the type of schema from the **Schema** dropdown list. |
| **Auxiliary Parameters** | Enter for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| **Schema** | Select the Samba schema from the dropdown list. Options are **RFC2307** or **RFC2307BIS**. |
{{< /truetable >}}

Click **SAVE** to save settings and return to the **LDAP** screen.

Click **BASIC OPTIONS** to return to the **LDAP** display of basic options only.

Click **EDIT IDMAP** to navigate to the **Directory Services > Idmap** screen.

{{< taglist tag="coreldap" limit="10" title="Related LDAP Articles" >}}

{{< taglist tag="coreidmap" limit="10" >}}
