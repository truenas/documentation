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

## Configuring LDAP

The **LDAP** directory service configuration screen shows after selecting **LDAP** in the **Configuration Type** dropdown list in the **Directory Services Configuration** screen.

For detailed configuration instructions, see [Configuring LDAP]({{< relref "ConfigLDAPSCALE.md" >}}).

## LDAP Widget

The **LDAP** widget displays after configuring TrueNAS settings for your LDAP instance.
The widget includes **Status**, and the **Hostname**, **Base DN**, and **Bind DN** configured.

![LDAPwidgett](/images/SCALE/Credentials/LDAPwidget.png "LDAP Widget")

**Settings** opens the **LDAP** configuration screen.

**Rebuild Directory Service Cache** resyncs the cache if it gets out of sync or there are fewer users than expected available in the permissions editors.

## Directory Services LDAP Configuration Screen

The **Directory Services Configuration** screen organizes settings into multiple sections: **Basic Configuration**, **Credential Configuration**, and **LDAP Configuration** (with subsections for **Auxiliary Parameters**, **Search Bases**, and **Attribute Maps**).

The **Directory Services Configuration** screen is used to configure one of three directory services: Active Directory, IPA, or LDAP. The configuration sections and settings change based on the **Configuration Type** selected.

### LDAP Basic Configuration Section

The **Basic Configuration** section settings control core LDAP service settings.

{{< trueimage src="/images/SCALE/Credentials/LDAPBasicConfig.png" alt="LDAP Basic Configuration" id="LDAP Basic Configuration" >}}

{{< expand "Basic Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Configuration Type** | Sets the type of directory service. **LDAP** shows LDAP directory service integration settings. |
| **Enable Service** | Activates the LDAP configuration. Enabled by default. Clear to disable the configuration without deleting it. Re-enable it later without reconfiguring it. The **[Directory Services]({{< ref "/SCALE/SCALEUIReference/Credentials/DirectoryServices" >}})** screen returns to the default and provides the options to configure AD, LDAP, or IPA. |
| **Enable Account Cache** | Caches user and group information. Caching makes directory users and groups available in UI dropdown menus. Enabled by default. |
| **Enable DNS Updates** | Allows the directory service to update DNS records. Enabled by default. |
| **Timeout (seconds)** | The number of seconds before the directory service connection times out. Valid range is 1-40 seconds. |
| **Kerberos Realm** | Defines the Kerberos realm for authentication (usually the uppercase version of the domain name, for example, *EXAMPLE.COM*). |
{{< /truetable >}}
{{< /expand >}}

### LDAP Credential Configuration Section

The **Credential Configuration** section settings define authentication methods for LDAP access.

{{< expand "Credential Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Credential Type** | (Required) Sets the credential type for LDAP authentication. Options include **LDAP Anonymous**, **LDAP Plain**, **LDAP MTLS**, **Kerberos Principal**, and **Kerberos User**. |
| **Bind DN** | The administrative account name for the LDAP server. Displays when **LDAP Plain** is selected. For example, *cn=Manager,dc=test,dc=org*. |
| **Bind Password** | The password for the **Bind DN**. Displays when **LDAP Plain** is selected. |
| **Client Certificate** | The certificate to use for LDAP MTLS authentication. Displays when **LDAP MTLS** is selected. |
| **Kerberos Principal** | The location of the principal in the keytab. Displays when **Kerberos Principal** is selected. |
| **Username** | The LDAP administrative account username. Displays when **Kerberos User** is selected. |
| **Password** | The password for the administrative account. Displays when **Kerberos User** is selected. |
{{< /truetable >}}
{{< /expand >}}

### LDAP Configuration Section

The **LDAP Configuration** section settings define the connection parameters and validation options.

{{< trueimage src="/images/SCALE/Credentials/LDAPBasicOptionsSettings.png" alt="LDAP Configuration" id="LDAP Configuration" >}}

{{< expand "LDAP Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Server URLs** | (Required) The LDAP server URLs. Separate multiple entries by pressing <kbd>Enter</kbd>. Multiple URLs create an LDAP failover priority list. If a host does not respond, TrueNAS tries the next host until it establishes a connection. If using a cloud service LDAP server, do not include the full URL. |
| **Base DN** | (Required) The top level of the LDAP directory tree to use when searching for resources. For example, *dc=test,dc=org*. |
| **Start TLS** | Encrypts the LDAP connection with STARTTLS on the default LDAP port *389*. |
| **Validate Certificates** | Verifies certificate authenticity when connecting to the LDAP server. |
| **Schema** | (Required) The LDAP NSS schema. Options are **RFC2307** or **RFC2307BIS**. |
{{< /truetable >}}
{{< /expand >}}

#### Auxiliary Parameters Subsection

The **Auxiliary Parameters** subsection allows customization of auxiliary parameters.

{{< include file="/static/includes/auxiliary-parameters-caution.md" >}}

{{< expand "Auxiliary Parameters Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Standard Auxiliary Parameters** | Uses default auxiliary parameters. Enabled by default. Clear to reveal the **Auxiliary Parameters** text field for custom options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
{{< /truetable >}}
{{< /expand >}}

#### Search Bases Subsection

The **Search Bases** subsection allows customization of search base DNs.

{{< expand "Search Bases Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Standard Search Bases** | Uses default search bases. Enabled by default. Clear to reveal **User Base DN**, **Group Base DN**, and **Netgroup Base DN** fields for custom search base configuration. |
{{< /truetable >}}
{{< /expand >}}

#### Attribute Maps Subsection

The **Attribute Maps** subsection allows customization of attribute mappings.

{{< expand "Attribute Maps Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Standard Attribute Maps** | Uses default attribute mappings. Enabled by default. Clear to reveal four subsections for customization: **LDAP Password Attributes**, **LDAP Shadow Attributes**, **LDAP Group Attributes**, and **LDAP Net Group Attributes**. |
{{< /truetable >}}
{{< /expand >}}
