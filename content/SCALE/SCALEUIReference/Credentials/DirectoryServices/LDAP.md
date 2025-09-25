---
title: "LDAP Screens"
description: "Provides information on the **LDAP** screen and widget settings."
weight: 20
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
  - /scale/scaleclireference/directory-service/clildap/
tags:
- ldap
- directoryservices
---

{{< hint type=important >}}
Support for LDAP **Samba Schema** is deprecated in TrueNAS 22.02 (Angelfish) and removed in 24.10 (Electric Eel).
Migrate legacy Samba domains to Active Directory before upgrading to 24.10 or later.
{{< /hint >}}

## LDAP Widget

The **LDAP** widget displays after you configure TrueNAS settings for your LDAP instance.
The widget includes **Status**, and the **Hostname** and **Base DN** and **Bind DN** you configured.

![LDAPwidgett](/images/SCALE/Credentials/LDAPwidget.png "LDAP Widget")

**Settings** opens the **LDAP** screen.

## LDAP - Add and Edit Screens

The **LDAP** configuration screen has two screens, **Basic Options** the default view, and **Advanced Options**.
After configuring LDAP, the edit **LDAP** screen includes both the basic and advanced options.

**Rebuild Directory Service Cache** resyncs the cache if it gets out of sync or there are fewer users than expected are available in the permissions editors.

### LDAP Screen - Basic Options

The settings on the **Basic Options** also display on the **[Advanced Options](#ldap-screen---advanced-options)** screen.
{{< expand "Basic Option Settings" "v" >}}

![LDAPBasicOptionsSettings](/images/SCALE/Credentials/LDAPBasicOptionsSettings.png "LDAP Screen Basic Options")

{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Hostname** | Enter the LDAP server hostnames/IP addresses. Separate entries by pressing <kbd>Enter</kbd>. You can enter multiple hostnames/IP addresses to create an LDAP failover priority list. If a host does not respond, TrueNAS tries the next host until it establishes a connection. |
| **Base DN** | Enter the top level of the LDAP directory tree to use when searching for resources. Example: *dc=test,dc=org*. |
| **Bind DN** | Enter the administrative account name for the LDAP server. Example: *cn=Manager,dc=test,dc=org*. |
| **Bind Password** | Enter the password for the **Bind DN**. |
| **Enable** | Select to activate the configuration. Select to clear and disable the configuration without deleting it. You can re-enable it later without reconfiguring it. The **[Directory Services]({{< ref "/SCALE/SCALEUIReference/Credentials/DirectoryServices" >}})** screen returns to the default and provides the options to configure AD or LDAP. |
{{< /truetable >}}
{{< /expand >}}
### LDAP Screen - Advanced Options
The settings on the **Advanced Options** screen include the **[Basic Options](#ldap-screen---basic-options)** screen.
{{< expand "Advanced Option Settings" "v" >}}

![LDAPAdvancedOptionsSettings](/images/SCALE/Credentials/LDAPAdvancedOptionsSettings.png "LDAP Screen Advanced Options")

{{< include file="/static/includes/auxiliary-parameters-caution.md" >}}

{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Allow Anonymous Binding** | Select to enable the LDAP server to disable authentication and allow read and write access to any client. |
| **Encryption Mode** | Select the options for encrypting the LDAP connection from the dropdown list. <br> <br>Select **OFF** to not encrypt the LDAP connection. <br>Select **ON** to encrypt the LDAP connection with SSL on port 636. <br>Select **START_TLS** to encrypt the LDAP connection with STARTTLS on the default LDAP port *389*. |
| **Certificate** | Select the certificate to use when performing LDAP certificate-based authentication.  To configure LDAP certificate-based authentication, [create a Certificate Signing Request]({{< ref "CertificatesSCALE" >}}) for the LDAP provider to sign. TrueNAS does not need a certificate when using username/password or Kerberos authentication.  |
| **Validate Certificates** | Select to verify certificate authenticity. |
| **Disable LDAP User/Group Cache** | Select to disable caching LDAP users and groups in large LDAP environments. When caching is disabled, LDAP users and groups do not appear in drop-down menus but are still accepted when manually entered. |
| **Kerberos Realm** | Select an existing realm from **Kerberos Realms**. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in **Kerberos Keytab**. |
| **LDAP Timeout** | Enter the number of seconds for the LDAP timeout. Increase this value if a Kerberos ticket timeout occurs. |
| **DNS Timeout** | Enter the number of seconds for the DNS timeout. Increase this value if DNS queries timeout. |
| **Auxiliary Parameters** | (Optional - only experienced users) Specify additional options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| **Schema** | Select the LDAP NSS schema from the dropdown list. Options are **RFC2307** or **RFC2307BIS**. |
{{< /truetable >}}
{{< /expand >}}
