---
title: "LDAP Screens"
description: "Provides information on the **LDAP** screen and card settings."
weight: 60
aliases:
 - /scale/credentials/directoryservices/directoryservicesscreens/ldap/
 - /scale/credentials/directoryservices/activedirectoryscale/
 - /scale/credentials/directoryservices/ldapscale/
 - /scale/credentials/directoryservices/idmapscale/
 - /scale/credentials/directoryservices/kerberosscale/
 - /scale/scaleclireference/directory-service/clildap/
tags:
- ldap
- directoryservices
doctype: reference
---


{{< hint type=important >}}
Support for LDAP **Samba Schema** is deprecated in TrueNAS 22.02 (Angelfish) and removed in 24.10 (Electric Eel).
Migrate legacy Samba domains to Active Directory before upgrading to 24.10 or later.
{{< /hint >}}

## Configuring LDAP

The **LDAP** directory service configuration screen shows after selecting **LDAP** in the **Configuration Type** dropdown list in the **Directory Services Configuration** screen.

For detailed configuration instructions, see [Configuring LDAP]({{< relref "ConfigLDAP" >}}).

## LDAP Card

The **LDAP** card displays after configuring TrueNAS settings for your LDAP instance.
The card includes **Status**, and the **Hostname**, **Base DN**, and **Bind DN** configured.

![LDAPwidgett](/images/SCALE/Credentials/LDAPwidget.png "LDAP Card")

**Settings** opens the **Directory Services Configuration** screen where you can modify your LDAP settings.

**Clear Config** removes the LDAP directory service configuration. A confirmation dialog appears before clearing the configuration.

{{< trueimage src="/images/SCALE/Credentials/ClearDirectoryServices.png" alt="Clear Directory Services Configuration" id="Clear Directory Services Configuration Dialog" >}}

**Rebuild Directory Service Cache** resyncs the cache if it gets out of sync or there are fewer users than expected available in the permissions editors.

## Directory Services LDAP Configuration Screen

The **Directory Services Configuration** screen organizes settings into multiple sections: **Basic Configuration**, **Credential Configuration**, and **LDAP Configuration** (with subsections for **Auxiliary Parameters**, **Search Bases**, and **Attribute Maps**).

The **Directory Services Configuration** screen is used to configure one of three directory services: Active Directory, IPA, or LDAP. The configuration sections and settings change based on the **Configuration Type** selected.

The screen includes a **Clear Config** button that removes the entire directory service configuration after confirmation. See [Removing LDAP from TrueNAS]({{< relref "ConfigLDAP.md#removing-ldap-from-truenas" >}}) for details.

### LDAP Basic Configuration Section

{{< include file="/static/includes/DirectoryServicesCommonSettings.md" >}}

### LDAP Credential Configuration Section

The **Credential Configuration** section settings define authentication methods for LDAP access.

{{< expand "Credential Configuration Settings" "v" >}} {id="ldap-credential-config"} <!--  Credential Type is # PROBLEM: Needs resolution — single record vs duplicate for AD/IPA/LDAP injection. Cannot implement until duplicate strategy is decided. Client Certificate missing in the yaml, Username and Password not found in the yaml for ldap  -->
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

{{< expand "LDAP Configuration Settings" "v" >}} {id="ldap-config"} <!-- Server URLs, settings not in the yaml -->
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

{{< expand "Auxiliary Parameters Settings" "v" >}} {id=""} <!-- Use Standard Auxiliary Parameters is missing from the yaml ● It's in the scrape at line 6356 — not in the working YAML yet. Flag it as needing to be added from webui-26-extraction-fixed.yaml. 🏷️-->
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Standard Auxiliary Parameters** | Uses default auxiliary parameters. Enabled by default. Clear to reveal the **Auxiliary Parameters** text field for custom options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
{{< /truetable >}}
{{< /expand >}}

#### Search Bases Subsection

The **Search Bases** subsection allows customization of search base DNs. <!-- Not in the working YAML — but we already saw it in the scrape at line 6107 (use_standard_search_bases). Flag it as needing to be added. 🏷️-->

{{< expand "Search Bases Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Standard Search Bases** | Uses default search bases. Enabled by default. Clear to reveal **User Base DN**, **Group Base DN**, and **Netgroup Base DN** fields for custom search base configuration. |
{{< /truetable >}}
{{< /expand >}}

#### Attribute Maps Subsection

The **Attribute Maps** subsection allows customization of attribute mappings.

{{< expand "Attribute Maps Settings" "v" >}}    <!-- Not in the working YAML  use_standard_attribute_maps at line 6154 in webui-26-extraction-fixed.yaml. Flag it and move on. -->
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use Standard Attribute Maps** | Uses default attribute mappings. Enabled by default. Clear to reveal four subsections for customization: **LDAP Password Attributes**, **LDAP Shadow Attributes**, **LDAP Group Attributes**, and **LDAP Net Group Attributes**. |
{{< /truetable >}}
{{< /expand >}}
