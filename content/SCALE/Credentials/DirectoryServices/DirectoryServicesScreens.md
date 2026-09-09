---
title: "Directory Services Screens"
description: "Describes the screens and fields in the TrueNAS Directory Services section."
geekdocCollapseSection: true
weight: 110
aliases:
 - /scale/scaleuireference/credentials/directoryservices/
 - /scale/credentials/directoryservices/activedirectoryscale/
 - /scale/credentials/directoryservices/ldapscale/
 - /scale/credentials/directoryservices/idmapscale/
 - /scale/credentials/directoryservices/kerberosscale/
 - /scale/scaleclireference/directory-service/
 - /scale/scaleuireference/credentials/directoryservices/idmap/
tags:
- kerberos
- activedirectory
- idmap
- ldap
- directoryservices
doctype: reference
---


{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

The **Directory Services** screen configuration options set up access to directory servers through domain and account settings, and can set up ID mapping or Kerberos authentication and authorization services.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesScreen.png" alt="Directory Services Screen" id="Directory Services Screen" >}}

The screen shows the status of directory services when a service is not configured or when it is configured but disabled.

The main option displays:

* **Configure Directory Services** opens the **Directory Services Configuration** form where you can set up Active Directory, IPA, or LDAP connections.
* [**Advanced Settings**](#advanced-settings)

After configuring a directory service, the card for it shows a menu with two to three options:
* **Settings**, which opens the Edit Directory Service screen.
* **Rebuild Directory Service Cache**, which synchronizes the cache if it gets out of sync or there are fewer users than expected available in the permissions editors.
* **Leave**, which shows only when the AD server is joined and healthy. This removes the computer account and associated DNS records from Active Directory.

## Directory Services Configuration Screen

The **Directory Services Configuration** screen shows common and directory service-specific settings based on the type of directory service selected in **Configuration Type**.

Common settings:
* [Basic Configuration](#basic-configuration)
* [Credential Configuration](#credential-configuration)

Directory Service-specific settings:
* [Active Directory Configuration](#active-directory-configuration)
  * [AD Trusted Domain Configuration](#active-directory-trusted-domain-configuration)
  * [IDMAP Configuration](#idmap-configuration-ad)
* [LDAP Configuration](#ldap-configuration)
  * [Auxiliary Parameters (LDAP)](#auxiliary-parameters-ldap)
  * [Search Bases](#search-bases)
  * [Attribute Maps](#attribute-maps)
* [IPA Configuration](#ipa-configuration)
  * [SMB Domain Configuration](#smb-domain-configuration)

After configuring a directory service, the **Settings** option opens the **Directory Services Configuration** screen showing the editable settings for that directory service screen.

**Clear Config** clears the current directory service configuration settings.
**Save** retains changes. After using **Clear Config**, **Save** removes the cleared directory service configuration from TrueNAS allowing you to configure a new directory service configuration, for example, clearing an LDAP configuration to allow configuring Active Directory.

### Basic Configuration

The **Basic Configuration** settings show settings common to the three directory services available in TrueNAS: Active Directory, LDAP, and IPA (formerly FreeIPA).

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigurationScreen.png" alt="Directory Services Configuration -Basic Settings" id="Directory Services Configuration - Basic Settings" >}}

{{< expand "Basic Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Configuration Type** | Sets the type of directory service. Options are: **Active Directory**, **LDAP**, and **IPA**. Each option shows the **Credential Configuration** settings and changes the setting options shown for each type of directory service. Only one directory service can be active at a time. |
| **Enable Service** | Enables the directory service when selected. If TrueNAS has never been joined to the specified domain (IPA or Active Directory), enabling causes TrueNAS to attempt to join the domain. <br>NOTE! The domain join process for Active Directory and IPA makes changes to the domain, such as creating a new computer account for the TrueNAS server and creating DNS records for TrueNAS. Enabled by default. Leave disabled to deactivate the configuration without deleting it and allow reenabling it later without reconfiguring it. The screen returns to the default settings and provides the option to configure AD, LDAP, or IPA. |
| **Enable Account Cache** | Enables backend caching for user and group lists. Caches user/group information for performance. When enabled, directory services users and groups are presented as choices in the UI dropdowns and in API responses for user and group queries. Also controls whether users and groups appear in getent results. Disable to reduce load on the directory server when necessary. Enabled by default. |
| **Enable DNS Updates** | Allows TrueNAS to automatically register and update its DNS records on the DNS server for the domain when its IP address changes. Uses Kerberos authentication to verify TrueNAS has permission to update its own records. Enabled by default. Disable only if your DNS server does not support dynamic updates or if DNS is managed manually. |
| **Timeout (seconds)** | Sets the number of seconds before the directory service connection times out. The timeout value for DNS queries that are performed as part of the join process and NETWORK_TIMEOUT for LDAP requests (5-60 seconds). Valid range is 1-40 seconds. |
| **Kerberos Realm** | Specifies the existing Kerberos realm from Kerberos Realms configuration in an uppercase domain format like *EXAMPLE.COM*. When left empty, Kerberos is not used for binding to the directory service, but when joining an Active Directory or IPA domain for the first time, the realm is detected and configured automatically if not specified. |
{{< /truetable >}}
{{< /expand >}}

### Credential Configuration 

The **Credential Type** setting changes the authentication settings shown for the directory service no matter which type is selected in **Configuration Type**. Active Directory, IPA and LDAP all show Kerberos authentication options, but LDAP shows additional settings based on LDAP options.

**Credential Type** sets the credential used to bind to the specified directory service. Kerberos credentials are required for Active Directory or IPA domains. Generic LDAP environments support various authentication methods. Available methods depend on the remote LDAP server configuration. If Kerberos credentials are selected for LDAP, GSSAPI binds replace plain LDAP binds. Use Kerberos or mutual TLS authentication when possible for better security.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosUser.png" alt="Credential Configuration Kerberos User" id="Credential Configuration Kerberos User" >}}

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosPrincipal.png" alt="Credential Configuration Kerberos Principal" id="Credential Configuration Kerberos Principal" >}}

{{< expand "Kerberos Credential Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Credential Type** | Sets the credential type for authentication. Options: **Kerberos User** or **Kerberos Principal**. **Kerberos User** shows the **Username** and **Password** settings. **Kerberos Principal** shows the **Kerberos Principal**. Kerberos credentials are required for Active  Directory or IPA domains. Generic LDAP environments support various authentication methods. Available methods depend on the remote LDAP server configuration. If Kerberos credentials are selected for LDAP, GSSAPI binds replace plain LDAP binds. Use Kerberos or mutual TLS authentication when possible for better security. |
| **Username** | Specifies the username of the account to used to create a Kerberos ticket for authentication to directory services. This account must exist on the domain controller. A *Kerberos ticket* is a time-limited encrypted credential issued by the domain controller that allows TrueNAS to authenticate to domain services without transmitting passwords over the network. |
| **Password** | Specifies the password for the bind account, that obtains the Kerberos ticket. A *Kerberos ticket* is a time-lminted encrypted credential issues by the domain controller that allows TrueNAS to authenticate to domain services without transmitting passwords over the network. Required for first configuration only. After initial configuration, uses Kerberos Principal. |
| **Kerberos Principal** | Sets the location of the principal in the keytab from Kerberos Keytab. Shows when <b> Credential Type</b> is set to <b>Kerberos Principal</b>. A *Kerberos principal* is the unique identity, formatted as *username@DOMAIN.COM*, that Kerberos uses to issue authentication tickets. Kerberos keytabs configured in TrueNAS show on the dropdown list. The specified principal must have a matching entry in a keytab stored on TrueNAS. Keytabs are managed in **Directory Services > Advanced Settings > Kerberos Keytabs**. If a keytab entry does not exist for the specified principal, authentication fails. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Credential Configuration Settings" "v" >}}
When **Configuration Type** is set to **LDAP**, **Credential Configuration** shows five options to define the authentication method for LDAP access:
* **LDAP Plain**
* **LDAP Anonymous** (shows no additional settings)
* **LDAP MTLS**
* **Kerberos Principal**
* **Kerberous User**

Each option shows different settings in **Credential Configuration**.

{{< trueimage src="/images/SCALE/Credentials/LDAPPlainCredentialConfig.png" alt="LDAP Plain Credential Configuration" id="LDAP Plain Credential Configuration" >}}

{{< trueimage src="/images/SCALE/Credentials/LDAPMTLSCredentialConfig.png" alt="LDAP MTLS Credential Configuration" id="LDAP MTLS Credential Configuration" >}}

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosUser.png" alt="Credential Configuration Kerberos User" id="Credential Configuration Kerberos User" >}}

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosPrincipal.png" alt="Credential Configuration Kerberos Principal" id="Credential Configuration Kerberos Principal" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Bind DN** | Specifies the distinguished name to use for authentication. This is the administrative account name for the LDAP server. Shows when **LDAP Plain** is selected. For example, *cn=Manager,dc=test,dc=org*. |
| **Bind Password** | Specifies the password for the **Bind DN**. Shows when **LDAP Plain** is selected. |
| **Client Certificate** | Specifies the client certificate to use for mutual TLS authentication to the remote LDAP server. Shows when **Configuration Type** is **LDAP** and **Credential Type** is **LDAP MTLS**. |
| **Kerberos Principal** | Sets the location of the principal in the keytab from Kerberos Keytab. Shows when <b> Credential Type</b> is set to <b>Kerberos Principal</b>. A *Kerberos principal* is the unique identity, formatted as *username@DOMAIN.COM*, that Kerberos uses to issue authentication tickets. Kerberos keytabs configured in TrueNAS show on the dropdown list. The specified principal must have a matching entry in a keytab stored on TrueNAS. Keytabs are managed in **Directory Services > Advanced Settings > Kerberos Keytabs**. If a keytab entry does not exist for the specified principal, authentication fails. |
| **Username** | Specifies the username of the account to used to create a Kerberos ticket for authentication to directory services. This account must exist on the domain controller. A *Kerberos ticket* is a time-limited encrypted credential issued by the domain controller that allows TrueNAS to authenticate to domain services without transmitting passwords over the network. Shows when **Credential Type** is set to **Kerberos User**. |
| **Password** | Specifies the password for the bind account, that obtains the Kerberos ticket. A *Kerberos ticket* is a time-lminted encrypted credential issues by the domain controller that allows TrueNAS to authenticate to domain services without transmitting passwords over the network. Required for first configuration only. After initial configuration, uses Kerberos Principal. Shows when **Credential Type** is set to **Kerberos User**. |
{{< /truetable >}}
{{< /expand >}}

### Active Directory Configuration

The **Active Directory Configuration** section settings define the connection parameters and domain-specific options.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesconfigADConfig.png" alt="Active Directory Configuration" id="Active Directory Configuration" >}}

{{< expand "Active Directory Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **TrueNAS Hostname** | Specifies the hostname of the TrueNAS server to register in AD or IPA during the join process. Cannot exceed 15 characters or contain the \ / : * ? < > | sepcial characters. Cannot use Microsoft/RFC 852 reserved words (ANONYMOUS, AUTHENTICATED USER, BATCH, BUILTIN, DIALUP, DOMAIN, ENTERPRISE, INTERACTIVE, INTERNET, LOCAL, NETWORK, NULL, PROXY, RESTRICTED, SELF, SERVER, USERS, WORLD, GATEWAY, GW, TAC). Must differ from **Workgroup**. TrueNAS 25.04+ enforces validation. For example: *truenasnyc*. |
| **Domain Name** | Specifies the name of the name of the Active Directory, IPA, or SMB domain (e.g., example.com) or child domain. Editable after saving. The full DNS domain name of the Active Directory or IP domain must not be a domain controller. for example, *mydomain.internal*. The name of the SMB domain is as defined in the IPA configuration for the IPA domain to which TrueNAS is joined. SMB configuration **Domain Name** shows when ***Configuration Type** is IPA and **Use Default SMB Domain Configuration** is disabled. |
| **Site Name** | Specifies the Active Directory site where the TrueNAS server is located. TrueNAS detects this automatically during the domain join process. Sets the relative distinguished name (RDN) of the AD site object. |
| **Computer Account OU** | Specifies the organizational unit (OU) where the TrueNAS computer object is created when joining the Active Directory domain for the first time. The OU string includes the distinguished name (DN) of the **Computer Account OU** value. For example, *OU=Computers,DC=example,DC=com*. Use this setting to override the default organizational unit (OU) in which the TrueNAS computer account is created during the domain join. Use it to set a custom location for TrueNAS computer accounts. |
| **Use Default Domain** | Enables removing domain name prefix (DOMAIN\) from users/groups. Might be required for specific configurations, such as Kerberos authentication with NFS for AD users. Controls if the system removes the domain prefix from Active Directory user and group names. When enabled, users show as **administrator** instead of EXAMPLE\administrator. Leave disabled to avoid name conflicts between Active Directory and local accounts. NOT RECOMMENDED as this can cause collisions with local accounts. |
{{< /truetable >}}
{{< /expand >}}

### Active Directory Trusted Domain Configuration

Beginning in TrueNAS 25.10, trusted domains are configured as part of the Active Directory configuration rather than as separate IDmap entries.

The **Trusted Domains Configuration** section controls access for trusted domains.

**Enable Trusted Domains** sets the **Trusted Domains** option that allow clients to access TrueNAS if they are members of domains with a trust relationship. Shows the **Trusted Domains** option that allow clients to access TrueNAS if they are members of domains with a trust relationship. When enabled, shows the **Trusted Domain** section and **Add** button. As of TrueNAS 25.10 and later, configured in directory services vs separate IDMAP entries. 

**Add** shows the **Basic Configuration** section with the **IDMAP Backend** options. 

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainConfig.png" alt="Trusted Domain Configuration" id="Trusted Domain Configuration" >}}

**IDMAP Backend** defines how domain accounts joined to TrueNAS are mapped to Unix UIDs and GIDs on the TrueNAS server.
Most TrueNAS deployments use the RID backend, which algorithmically assigns UIDs and GIDs based on  the Active Directory account SID. Another common option is the AD backend, which reads predefined Active Directory  LDAP schema attributes that assign explicit UID and GID numbers to accounts.
Another common option is the AD backend, which reads predefined Active Directory LDAP schema attributes that assign explicit UID and GID numbers to accounts. 

The **IDMAP Backend** dropdown list shows four options:
* **AD (RFC2307/SFU attributes from Active Directory)**
* **LDAP**
* **RFC2307 (RFC2307 attributes from a standalone LDAP server)**
* **RID (Default - algorithmic mapping based on RID values)**

Each option shows different settings.

{{< expand "Trusted Domain AD (RFC2307/SFU Attributes from Active Directory) Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendAD.png" alt="Trusted Domain AD IDMAP Backend Configuration" id="Trusted Domain AD IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | Specifies the lowest UID or GID that the IDMAP backend can assign for the trusted domain. Shows for all IDMAP backend types, and when **Configuration Type** is **Active Directory** and **Enable Trusted Domains** is enabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Schema Mode** | Specifies the schema mode the IDMAP backend uses to query Active Directory for user and group information. The schema mode in the IDMAP backend uses to query Active Directory for user and group information. The RFC2307 schema applies to Windows Server 2003 R2 and newer. The Services for Unix (SFU) schema applies to versions before Windows Server 2003 R2. Shows when Configuration Type is Active Directory, Enable Trusted Domains is enabled, and IDMAP Backend is AD (RFC2307/SFU attributes from Active Directory). |
| **Unix Primary Group** | Defines if the user's primary group is fetched from Unix attributes (Services for Unix) or the Active Directory primary group. If enabled, the TrueNAS server uses the gidNumber LDAP attribute. If disabled, it uses the primaryGroupID LDAP attribute. |
|**Unix NSS Info**  | If enabled, the login shell and home directory are retrieved from LDAP attributes (Unix attributes in Active Directory). If disabled, or if the Active Directory LDAP entry lacks Unix attributes, the home directory defaults to /var/empty. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Trusted Domain LDAP Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendLDAP.png" alt="Trusted Domain LDAP IDMAP Backend Configuration" id="Trusted Domain LDAP IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | Specifies the lowest UID or GID that the IDMAP backend can assign for the trusted domain. Shows for all IDMAP backend types, and when **Configuration Type** is **Active Directory** and **Enable Trusted Domains** is enabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **LDAP Base DN** | Sets the directory base suffix to use for mapping UIDs and GIDs to SIDs. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP**. |
| **LDAP User DN** | Defines the user DN to be used for authentication to the trusted domain LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP**. |
| **LDAP User DN Password** | Specifies the secret to use for authenticating the user specified by LDAP User DN to the trusted domain RFC2307 LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP Url** | Specfies the LDAP server to use for the IDMAP entries. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Readonly** | Prevents TrueNAS from writing new IDMAP entries to the trusted domain LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP**. |
| **Validate Certificates** | Verify certificate authenticity. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Trusted Domain RFC2307 Attributes from Standalone LDAP Server Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendRFC2307.png" alt="Trusted Domain RFC2307 IDMAP Backend Configuration" id="Trusted Domain RFC-2307 IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | Specifies the lowest UID or GID that the IDMAP backend can assign for the trusted domain. Shows for all IDMAP backend types, and when **Configuration Type** is **Active Directory** and **Enable Trusted Domains** is enabled.|
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **LDAP Url** | Specfies the LDAP server to use for the IDMAP entries. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP User DN** | Defines the user DN used for authentication to the trusted domain RFC2307 LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP User DN Password** | Specifies the secret to use for authenticating the user specified by LDAP User DN to the trusted domain RFC2307 LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP Url** | Specfies the LDAP server to use for the IDMAP entries. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Bind Path User** | Specifies the search base that contains user objects in the LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Bind Path Group** | Specifies the search base that contains group objects in the LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **User CN** | Queries the CN attribute instead of the UID attribute for the user name in LDAP. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP Realm** | Appends @realm to the CN for groups. Also, append it to users if User CN is specified. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Validate Certificate** | Verify certificate authenticity. TrueNAS validates the full certificate chain. TrueNAS does not support non-CA certificates when certificate validation is required. When disabled, TrueNAS does not validate certificates from a remote LDAP server. It is better to use valid certificates or import them into the TrueNAS server trusted certificate store. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP** or **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Trusted Domain RID (Default - Algorithmic Mapping Based on RID Values) Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendRID.png" alt="Trusted Domain LDAP RID Backend Configuration" id="Trusted Domain RID IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | Specifies the lowest UID or GID that the IDMAP backend can assign for the trusted domain. Shows for all IDMAP backend types, and when **Configuration Type** is **Active Directory** and **Enable Trusted Domains** is enabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **SSSD Compat**  | Generates an IDMAP low range using the algorithm from SSSD. Use this option if the domain uses only a single SSSD IDMAP slice. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RID (Default - algorithmic mapping based on RID values)**. |
{{< /truetable >}}
{{< /expand >}}

### IDMAP Configuration (AD)

**Use Trusted Server IDMAP Defaults** is enabled by default.
Use the TrueNAS default IDMAP configuration unless you want to customize ID mapping.
Defaults are suitable for new deployments without existing support for Unix-like operating systems.
The default configuration uses the RID backend with predefined UID/GID ranges (builtin: 90000001-100000000, domain: 100000001-200000000).

When disabled, it shows IDMAP configuration settings to customize ID mapping.

{{< trueimage src="/images/SCALE/Credentials/ADIDMAPConfig.png" alt="IDMAP Configuration" id="IDMAP Configuration" >}}

{{< hint type=important >}}
Only administrators experienced with configuring ID mapping should customize IDMAP settings.
{{< /hint >}}

#### IDMAP Builtin Settings

The **Builtin** settings map Windows built-in local groups to Unix GIDs, defining the UID/GID range allocated to Windows built-in local groups, such as Administrators, Users, and Guests. TrueNAS creates this entry automatically when joining a domain. Adjust the range only if it conflicts with existing local UID/GID assignments.
<!-- background info only: Samba needs to assign these well-known Windows security principals (S-1-5-32 SID prefix) that exist on every Windows system to local GIDs so file permission checks work correctly. -->

{{< expand "IDMAP Configuration Builtin Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the joined domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | Sets the lowest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
{{< /truetable >}}
{{< /expand >}}

#### IDMAP Domain Settings

**IDMAP Domain** settings configure how TrueNAS maps Windows domain users and groups from the joined domain to Unix UIDs and GIDs.
The selected backend determines whether mappings are generated algorithmically or read from directory attributes.
The UID/GID range defined here must not overlap with local accounts or trusted domain ranges.

The **IDMAP Backend** configuration defines how domain accounts the domain TrueNAS is joined to are mapped to Unix UIDs and GIDs on the TrueNAS server.
Most TrueNAS deployments use the RID backend, which algorithmically assigns UIDs and GIDs based on the Active Directory account SID.
Another common option is the AD backend, which reads predefined Active Directory LDAP schema attributes that assign explicit UID and GID numbers to accounts.

The **IDMAP Backend** dropdown list shows four options:
* **AD (RFC2307/SFU attributes from Active Directory)**
* **LDAP**
* **RFC2307 (RFC2307 attributes from a standalone LDAP server)**
* **RID (Default - algorithmic mapping based on RID values)**

Each option shows different settings.

{{< expand "IDMAP Domain AD (RFC2307/SFU Attributes from Active Directory) Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendAD.png" alt="IDMAP Domain AD Configuration" id="IDMAP Domain AD Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the joined domain. Typically matches the NetBIOS domain name. |
| **Range Low** | Sets the lowest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Schema Mode** | Specifies the schema mode the IDMAP backend uses to query Active Directory for user and group information. The schema mode in the IDMAP backend uses to query Active Directory for user and group information. The RFC2307 schema applies to Windows Server 2003 R2 and newer. The Services for Unix (SFU) schema applies to versions before Windows Server 2003 R2. Shows when Configuration Type is Active Directory, Enable Trusted Domains is enabled, and IDMAP Backend is AD (RFC2307/SFU attributes from Active Directory). |
| **Unix Primary Group** | Defines if the user primary group is fetched from Unix attributes (Services for Unix) or the Active Directory primary group. If enabled, TrueNAS ses the gidNumber LDAP attribute. If disabled, it uses the primaryGroupID LDAP attribute. Shows when Configuration Type is Active Directory, Enable Trusted Domains is enabled, and IDMAP Backend is AD (RFC2307/SFU attributes from Active Directory). |
|**Unix NSS Info** | Controls whether login shell and home directory are retrieved from LDAP Unix attributes in Active Directory. When disabled, or if the Active Directory LDAP entry lacks Unix attributes, the home directory defaults to <file>/var/empty</file>. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **AD (RFC2307/SFU attributes from Active Directory)**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "IDMAP Domain LDAP Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendLDAP.png" alt="IDMAP Domain LDAP Configuration" id="IDMAP Domain LDAP Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the joined domain. Typically matches the NetBIOS domain name. |
| **Range Low** | Sets the lowest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **LDAP Base DN** | Sets the directory base suffix to use for mapping UIDs and GIDs to SIDs. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP**. |
| **LDAP User DN** | Defines the user DN used for authentication to the trusted domain RFC2307 LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP User DN Password** | Specifies the secret to use for authenticating the user specified by ldap_user_dn to the trusted domain LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP** or **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP Url** | LDAP server to use for the IDMAP entries. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Readonly** | Prevents TrueNAS from writing new IDMAP entries to the trusted domain LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP**. |
| **Validate Certificates** | Verify certificate authenticity. TrueNAS validates the full certificate chain. TrueNAS does not support non-CA certificates when certificate validation is required. When disabled, TrueNAS does not validate certificates from a remote LDAP server. It is better to use valid certificates or import them into the TrueNAS server trusted certificate store. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP** or **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "IDMAP Domain RFC2307 Attributes from Standalone LDAP Server Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendRFC2307.png" alt="IDMAP Domain RFC-2307 Configuration" id="IDMAP Domain RFC2307 Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the joined domain. Typically matches the NetBIOS domain name. |
| **Range Low** | Sets the lowest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **LDAP Url** | LDAP server to use for the IDMAP entries. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP User DN** | Defines the user DN used for authentication to the trusted domain RFC2307 LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**.  |
| **LDAP User DN Password** | Specifies the secret to use for authenticating the user specified by ldap_user_dn to the trusted domain LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP** or **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Bind Path User** | Specifies the search base that contains user objects in the LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Bind Path Group** | Specifies the search base that contains group objects in the LDAP server. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **User CN** | Queries the CN attribute instead of the UID attribute for the user name in LDAP. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **LDAP Realm** | Appends @realm to the CN for groups. Also, append it to users if User CN is specified. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Validate Certificate** | Verify certificate authenticity. TrueNAS validates the full certificate chain. TrueNAS does not support non-CA certificates when certificate validation is required. When disabled, TrueNAS does not validate certificates from a remote LDAP server. It is better to use valid certificates or import them into the TrueNAS server trusted certificate store. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP** or **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "IDMAP Domain RID (Default - Algorithmic Mapping Based on RID Values) Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendRID.png" alt="IDMAP Domain RID Configuration" id="IDMAP Domain RID Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the short name for the joined domain. Typically matches the NetBIOS domain name. |
| **Range Low** | Sets the lowest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **SSSD Compat**  | Generate an IDMAP low range using the algorithm from SSSD. Use this option if the domain uses only a single SSSD IDMAP slice. |
{{< /truetable >}}
{{< /expand >}}

### LDAP Configuration

The **LDAP Configuration** section settings define the connection parameters and validation options.

{{< trueimage src="/images/SCALE/Credentials/LDAPConfigurationSettings.png" alt="LDAP Configuration" id="LDAP Configuration" >}}

{{< expand "LDAP Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Server URLs** | Specifies the hostname or IP address of the LDAP server. Separate entries by pressing <kbd>Enter</kbd>. Multiple URLs create an LDAP failover priority list. If a host does not respond, TrueNAS tries the next host until it establishes a connection. If using a cloud service LDAP server, do not include the full URL. |
| **Base DN** | Specifies the base distinguished name (base DN) to use when performing LDAP operations. For Example, *dc=example,dc=com*. |
| **Start TLS** | Encrypts the LDAP connection with STARTTLS on the default LDAP port *389*. Options for encrypting the LDAP connection:<ul><li>**OFF** - Does not encrypt the LDAP connection.</li><li>**ON**- Encrypts the LDAP connection with SSL on port 636.</li><li>**START_TLS**- Encrypts the LDAP connection with STARTTLS on the default LDAP port 389</li></ul>. |
| **Validate Certificates** | Verify certificate authenticity. TrueNAS validates the full certificate chain. TrueNAS does not support non-CA certificates when certificate validation is required. When disabled, TrueNAS does not validate certificates from a remote LDAP server. It is better to use valid certificates or import them into the TrueNAS server trusted certificate store. Shows when **Configuration Type** is **Active Directory**, **Enable Trusted Domains** is enabled, and **IDMAP Backend** is **LDAP** or **RFC2307 (RFC2307 attributes from a standalone LDAP server)**. |
| **Schema** | Sets the LDAP NSS schema. Options are **RFC2307** or **RFC2307BIS**.<ul><li>**RFC2307** — Standard Unix attributes schema. Compatible with most LDAP servers, including OpenLDAP.</li><li>**RFC2307BIS** — Extended schema that supports nested group membership. Use if your LDAP server is configured with RFC2307bis.</li></ul> |
{{< /truetable >}}
{{< /expand >}}

### Auxiliary Parameters (LDAP)

The **Auxiliary Parameters** subsection allows customization of auxiliary parameters. 

**Use Standard Auxiliary Parameters** sets the LDAP directory server to use standard auxiliary parameters. Disable to enter custom optins for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). Warning! Auxiliary parameters are an unsupported configuration. Parameters entered here are not validated and can cause undefined system behaviors, including data corrution or data loss! Disbled by default. 

{{< trueimage src="/images/SCALE/Credentials/LDAPAuxiliaryParametersSettings.png" alt="LDAP Auxiliary Parameters" id="LDAP Auxiliary Parameters" >}}

{{< include file="/static/includes/auxiliary-parameters-caution.md" >}}

### Search Bases

The **Search Bases** uses standard search bases when enabled. Disable to allows customization of search base DNs.
Use the base DN for user, group, and netgroup searches.
Disable to specify alternative LDAP search base settings to define where to find user, group, and netgroup entries.
Use custom search bases only if the LDAP server uses a non-standard LDAP schema or if you want to limit the accounts available on TrueNAS.

{{< trueimage src="/images/SCALE/Credentials/LDAPSearchBasesSettings.png" alt="LDAP Search Bases" id="LDAP Search Bases" >}}

{{< expand "Search Bases Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User Base DN** | Sets the base DN to use when searching for LDAP user accounts. Restricts user searches to a specific directory subtree. For example, ou=users,dc=example,dc=org. Shows when **Configuration Type** is **LDAP** and **Use Standard Search Bases** is disabled. |
| **Group Base DN** | Sets the base DN to use when searching for LDAP group accounts. Restricts group searches to a specific directory subtree. For example, ou=groups,dc=example,dc=org. SShows when **Configuration Type** is **LDAP** and **Use Standard Search Bases** is disabled. |
| **Netgroup Base DN** | Sets the base DN to use when searching for LDAP netgroup accounts. Restricts netgroup searches to a specific directory subtree. For example, ou=netgroups,dc=example,dc=org. Shows when **Configuration Type** is **LDAP** and **Use Standard Search Bases** is disabled. |
{{< /truetable >}}
{{< /expand >}}

### Attribute Maps 

The **Attribute Maps**  settings allow customization of attribute mappings by defining custom LDAP attribute names for user and group account fields. 
An attribute left blank uses the default attribute name for that field.
Only use custom attribute maps if the LDAP server is non-standard, if your LDAP schema uses non-standard attribute names.

**Use Standard Attribute Maps** is enabled by default, and uses standard RFC2307 or RFC2307BIS attribute mappings.
When disabled, the standard LDAP attribute mapping for LDAP servers that do not follow RFC2307 or RFC2307BIS shows to allow for customization.

The screen groups settings into LDAP password attributes, shadow attributes, and group attributes: **LDAP Password Attributes**, **LDAP Shadow Attributes**, **LDAP Group Attributes**, and **LDAP Net Group Attributes**.

{{< expand "LDAP Password Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapPasswordAttributes.png" alt="LDAP Password Attributes" id="LDAP Password Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User Object Class** | Specifies the entry object class in LDAP for the user entries. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Username Attribute** | Specifies the LDAP attribute for the login name for the user. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. | 
| **UID Attribute** | Specifies the LDAP attribute for the id of the user. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **GID Attribute** | Specifies the LDAP attribute for the primary group id for the user. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **GECOS Attribute** | Specifies the LDAP attribute for the gecos field for the user. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Home Directory Attribute** | Specifies the LDAP attribute for the home directory for the user. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Shell Attribute** | Specifies the LDAP attribute for the path to the default shell for the user. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Shadow Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapShadowAttributes.png" alt="LDAP Shadow Attributes" id="LDAP Shadow Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Last Change Attribute** | Specifies the LDAP attribute for password last change date. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Min Days Attribute** | Specifies the LDAP attribute for minimum password age. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Max Days Attribute** | Specifies the LDAP attribute for maximum password age. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Warning Attribute** | Specifies the LDAP attribute for password warning period. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Inactive Attribute** | Specifies the LDAP attribute for the account inactive period. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Expire Attribute** | Specifies the LDAP attribute for account expiration. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Group Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapGroupAttributes.png" alt="LDAP Group Attributes" id="LDAP Group Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Group Object Class** | Specifies the LDAP object class for groups. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Netgroup Member Attribute** | Specifies the LDAP attribute for group members. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps**is disabled. |
| **Netgroup Triple Attribute** | Specifies the LDAP attribute for group triples. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled.
  type: input |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Net Group Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapNetGroupAttributes.png" alt="LDAP Net Group Attributes" id="LDAP Net Group Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Netgroup Object Class** | Specifies the LDAP object class for netgroups entries. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled. |
| **Netgroup Member Attribute** | Specifies the LDAP attribute for group members. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps**is disabled. |
| **Netgroup Triple Attribute** | Specifies the LDAP attribute for group triples. Shows when **Configuration Type** is **LDAP** and **Use Standard Attribute Maps** is disabled.
{{< /truetable >}}
{{< /expand >}}

### IPA Configuration

The **IPA Configuration** settings define the connection parameters and validation options.

{{< trueimage src="/images/SCALE/Credentials/IPAConfiguation.png" alt="IPA Configuration" id="IPA Configuration" >}}

{{< expand "IPA Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Target Server** | Specifies the name of the IPA server (hostname or IP address) that TrueNAS uses to build URLs when it joins or leaves the IPA domain. For example: *ipa.example.internal*. |
| **TrueNAS Hostname** | Specifies the hostname of the TrueNAS server to register in AD or IPA during the join process. Cannot exceed 15 characters or contain the \ / : * ? < > | sepcial characters. Cannot use Microsoft/RFC 852 reserved words (ANONYMOUS, AUTHENTICATED USER, BATCH, BUILTIN, DIALUP, DOMAIN, ENTERPRISE, INTERACTIVE, INTERNET, LOCAL, NETWORK, NULL, PROXY, RESTRICTED, SELF, SERVER, USERS, WORLD, GATEWAY, GW, TAC). Must differ from **Workgroup**. TrueNAS 25.04+ enforces validation. For example: *truenasnyc*. |
| **Domain** | Specifies the name of the Active Directory, IPA, or SMB domain (e.g., example.com) or child domain. Editable after saving. The full DNS domain name of the Active Directory or IP domain must not be a domain controller. for example, *mydomain.internal*. The name of the SMB domain is as defined in the IPA configuration for the IPA domain to which TrueNAS is joined. SMB configuration **Domain Name** shows when ***Configuration Type** is IPA and **Use Default SMB Domain Configuration** is disabled. |
| **Base DN** | Specifies the base distinguished name (base DN) to use when performing LDAP operations. For example: *dc=example,dc=com*. |
| **Validate Certificates** | Verifies certificate authenticity when connecting to the IPA server. When enabled, TrueNAS validates the full certificate chain. TrueNAS does not support non-CA certificates when certificate validation is required. When disabled, TrueNAS does not validate certificates from the remote LDAP server. It is better to use valid certificates or import them into the TrueNAS server trusted certificate store. |
{{< /truetable >}}
{{< /expand >}}

### SMB Domain Configuration

The **SMB Domain Configuration** settings control SMB integration.

**Use Default SMB Domain Configuration** is enabled by default, and uses the default SMB domain settings detected during the IPA join.
Settings for the IPA SMB domain are automatically detected by TrueNAS during the domain join process.
Some IPA domains might not include SMB schema configuration. IPA includes integrated Samba support and can provide user and group information for SMB authentication. 
Disable to enter custom settings.

{{< trueimage src="/images/SCALE/Credentials/IPASMBDomainConfiguration.png" alt="IPA SMB Domain Configuration" id="IPA SMB Domain Configuration" >}}

{{< expand "SMB Domain Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |  
|---------|-------------|
| **Name** | Specifies the short name for the IPA domain used for SMB access. Typically matches the IPA domain name. |
| **Domain Name** | Specifies the name of the Active Directory, IPA, or SMB domain (e.g., example.com) or child domain. Editable after saving. The full DNS domain name of the Active Directory or IP domain must not be a domain controller. for example, *mydomain.internal*. The name of the SMB domain is as defined in the IPA configuration for the IPA domain to which TrueNAS is joined. SMB configuration **Domain Name** shows when ***Configuration Type** is IPA and **Use Default SMB Domain Configuration** is disabled. |
| **Range Low** | Sets the lowest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Range High** | Sets the highest UID or GID that the IDMAP backend can assign. UIDs and GIDs outside the range are ignored. Setting shows when <b>Configuration Type</b> is set to <b>Active Directory</b> and <b>Use TrueNAS Server IDMAP Defaults</b> is disabled. |
| **Domain SID** | Specifies the domain SID for the IPA domain to which TrueNAS is joined. Shows when **Configuration Type** is **IPA** and Use **Default SMB Domain Configuration** is disabled.|
{{< /truetable >}}
{{< /expand >}}

## Advanced Settings

The **Show** button to the right of **Advanced Settings** opens a warning dialog stating that incorrectly configuring advanced settings is dangerous.
**Continue** closes the warning dialog.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesAdvancedSettingsWarning.png" alt="Directory Services Warning" id="Directory Services Warning" >}}

After closing the warning dialog, the **Directory Services** screen shows the **Kerberos Realm** and **Kerberos Keytab** cards.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServiceswithAdvancedSettings.png" alt="Directory Services Advanced SettingsCards" id="Directory Services Advanced Settings Cards" >}}

Each Kerberos card shows the realms or keytabs configured in TrueNAS.

**Add** on the Kerberos cards opens configuration screens for each Kerberos function:
* **[Add Kerberos Realm](#add-kerberos-realms)**
* **[Add Kerberos Keytab](#add-kerberos-keytabs)**

### Add Kerberos Realms

The **Add Kerberos Realm** screen allows adding a Kerberos realm to the TrueNAS system.

{{< trueimage src="/images/SCALE/Credentials/AddKerberosRealmScreen.png" alt="add Kerberos Realms Screen" id="add Kerberos Realms Screen" >}}

{{< truetable >}}
| Setting | Description |  
|---------|-------------|
| **Realm** | Specifies a short name for the Kerberos realm. The Kerberos standard allows upper case characters, DNS rules apply, and does not exceed 253 characters (letters, digits, and/or hyphens). TrueNAS does not enforce naming conventions, but requires entering a name. |
| **Primary KDC** | Specifies the master Kerberos domain controller KDC (Key Distribution Center) for this realm. It is the one that issues tickets. If you cannot reach it, you cannot authenticate. TrueNAS uses this as a fallback if it cannot get credentials because of an invalid password. This can help in environments where the domain uses a hub-and-spoke topology. Use this setting to reduce credential errors after TrueNAS automatically changes its machine password. |
| **KDC**| Specifies the name of the Key Distribution Center. Pressing <kbd>Enter</kbd> separates multiple values. Use additional/secondary KDC(s) for redundancy. If the primary KDC is unavailable, Kerberos can fall back to these. Environments with hub-and-spoke topology often have multiple KDCs. |
| **Admin Server** | Defines the server where all changes (adding/modifying principals) to the database are performed. Pressing <kbd>Enter</kbd> separates multiple values. Unlike KDC, you can have many KDCs  but typically only one admin server.  |
| **Password Server** | Defines the server where all password changes are performed. It is often the same host as the admin server but can be separate. Pressing <kbd>Enter</kbd> separates multiple values. |
{{< /truetable >}}

### Add Kerberos Keytabs

The **Add Kerberos Keytabs** allows adding a keytab file using the file browser option and assigning the keytab a name.

{{< trueimage src="/images/SCALE/Credentials/AddKerberosKeytabScreen.png" alt="Add Kerberos Keytabs Screen" id="Add Kerberos Keytabs Screen" >}}

**Name** specifies a short name for the keytab on the TrueNAS system. Kerberos does not have a name convention for keytab files.

**Choose File** opens the file browser to locate and upload a keytab file. Kerberos keytab files are binary files in a specific format (MIT Kerberos keytab format). Keytab files can have either the .keytab or .kt extension.

