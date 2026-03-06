---
title: "Active Directory Screens"
description: "Provides information on the **Active Directory** configuration screens and settings."
weight: 50
aliases:
 - /scale/credentials/directoryservices/activedirectory/
 - /scale/credentials/directoryservices/activedirectoryscale/
 - /scale/credentials/directoryservices/ldapscale/
 - /scale/credentials/directoryservices/idmapscale/
 - /scale/credentials/directoryservices/kerberosscale/
 - /scale/scaleclireference/directory-service/cliiactivedirectory/
tags:
- activedirectory
- kerberos
- directoryservices
doctype: reference
---



{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

## Configuring Active Directory

The **Active Directory** directory service configuration screen shows after selecting **Active Directory** in the **Configuration Type** dropdown list in the **Directory Services Configuration** screen.

For detailed configuration instructions, see [Configuring Active Directory]({{< relref "ConfigAD" >}}).

## Active Directory Widget

The **Active Directory** widget displays after configuring TrueNAS to access your Active Directory domain controller.
The widget shows **Status**, **Domain Name**, and **Domain Account Name**.

{{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryWidget.png" alt="Active Directory Widget" id="Active Directory Widget" >}}

**Settings** opens the **Active Directory** configuration screen.

**Rebuild Directory Service Cache** resyncs the cache if it gets out of sync or if there are fewer users than expected available in the permissions editors.

**Leave Domain** removes the TrueNAS system from the Active Directory server.

## Directory Services Active Directory Configuration Screen

The **Directory Services Configuration** screen organizes settings into multiple sections: **Basic Configuration**, **Credential Configuration**, **Active Directory Configuration**, **Trusted Domains Configuration**, and **IDMAP Configuration**.

The **Directory Services Configuration** screen is used to configure one of three directory services: Active Directory, IPA, or LDAP. The configuration sections and settings change based on the **Configuration Type** selected.

### Active Directory Basic Configuration Section

{{< include file="/static/includes/DirectoryServicesCommonSettings.md" >}}

### Active Directory Credential Configuration Section

The **Credential Configuration** section settings define authentication methods for Active Directory access.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesCredentialConfig.png" alt="Credential Configuration" id="Credential Configuration" >}}

{{< expand "Credential Configuration Settings" "v" >}} {id="dir-services_ad_credential"} {id=""} <!--  Credential Type is # PROBLEM: Needs resolution — single record vs duplicate for AD/IPA/LDAP injection. Cannot implement until duplicate strategy is decided.  Missing records: Directory Services credential settings (Username, Password, and others) not captured by either scrape — need manual addition or targeted re-scrape. -->
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Credential Type** | (Required) Sets the credential type for Active Directory authentication. Options include **Kerberos User** and **Kerberos Principal**. |
| **Username** | (Required) The Active Directory domain administrator username. Enter only the username (for example, *Administrator*), not the domain-prefixed format. |
| **Password** | (Required) The password for the administrator account. |
{{< /truetable >}}
{{< /expand >}}

### Active Directory Configuration Section

The **Active Directory Configuration** section settings define the connection parameters and domain-specific options.

{{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryBasicOptions.png" alt="AD Configuration" id="AD Configuration" >}}

{{< expand "Active Directory Configuration Settings" "v" >}} {id="dir-services_ad-config"}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **TrueNAS Hostname** | (Required) The hostname for the TrueNAS system. This value must match the **Hostname** setting on the **Network > Global Configuration** screen and cannot exceed 15 characters. Cannot contain: `\ / : * ? " < > |`. Cannot use Microsoft or RFC 852 reserved words (ANONYMOUS, AUTHENTICATED USER, BATCH, BUILTIN, DIALUP, DOMAIN, ENTERPRISE, INTERACTIVE, INTERNET, LOCAL, NETWORK, NULL, PROXY, RESTRICTED, SELF, SERVER, USERS, WORLD, GATEWAY, GW, TAC). Must differ from the Workgroup name. |
| **Domain Name** | (Required) The Active Directory domain name (for example, *example.com*) or child domain (for example, *sales.example.com*) if configuring access to a child domain. |
| **Site Name** | The relative distinguished name (RDN) of the site object in the AD server. TrueNAS automatically detects this from the Active Directory server. |
| **Computer Account OU** | The organizational unit (OU) where the TrueNAS computer object is created when joining the Active Directory domain for the first time. The OU string includes the distinguished name (DN) of the Computer Account OU. For example, *OU=Computers,DC=example,DC=com*. |
| **Use Default Domain** | Removes the domain name prefix from AD users and groups. This setting may be required for specific configurations such as Kerberos authentication with NFS for AD users. Note that using this setting can cause collisions with local user account names. |
{{< /truetable >}}
{{< /expand >}}

### Trusted Domains Configuration Section

The **Trusted Domains Configuration** section controls access for trusted domains.

{{< expand "Trusted Domains Configuration Settings" "v" >}} {id="dir-services_ad-domain-config"} <!-- not in the yaml file  Flagging it as needing to be added from webui-26-extraction-fixed.yaml line 6082.-- >
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Trusted Domains** | Allows clients to access TrueNAS if they are members of domains with a trust relationship. Starting in TrueNAS 25.10, trusted domains are configured as part of the Active Directory configuration rather than as separate IDmap entries. When enabled, additional trusted domain configuration options appear. Each trusted domain requires an **IDMAP Backend** selection. |
{{< /truetable >}}
{{< /expand >}}

### IDMAP Configuration Section

The **IDMAP Configuration** section controls identity mapping settings.

{{< trueimage src="/images/SCALE/Credentials/ADIDMAPConfig.png" alt="IDMAP Configuration" id="IDMAP Configuration" >}}

{{< hint type=important >}}
IDMAP (Identity Mapping) ensures that UIDs and GIDs assigned to Active Directory users and groups have consistent values domain-wide. By default, TrueNAS uses an algorithmic method based on the RID component of the user or group SID, which is suitable for most environments. Only administrators experienced with configuring ID mapping should customize IDMAP settings.
{{< /hint >}}

{{< expand "IDMAP Configuration Settings" "v" >}} {id="dir-services_ad-idmap-config"} <!-- Use TrueNAS Server IDMAP Defauts is in the scrape — use_default_idmap in webui-26-extraction-fixed.yaml line 6442, with a good tooltip. needs to be added to the yaml. -->
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Use TrueNAS Server IDMAP Defaults** | Uses default IDMAP configuration. Enabled by default and recommended for most setups. Clear to reveal additional configuration options: **Builtin** section with optional **Name** field and required **Range Low** and **Range High** fields, and **IDMAP Domain** section with required **IDMAP Backend**, **Name**, **Range Low**, and **Range High** fields. |
| **IDMAP Backend** | Sets the backend plugin interface for Winbind to store SID in UID/GID mapping tables. Options include **AD**, **AUTORID**, **LDAP**, **NSS**, **RFC2307**, **RID**, and **TDB**. |
| **Range Low** | The lowest UID/GID number the IDMAP backend translates. Works with **Range High** to establish the range. |
| **Range High** | The highest UID/GID number the IDMAP backend translates. Works with **Range Low** to establish the range. |
{{< /truetable >}}
{{< /expand >}}
