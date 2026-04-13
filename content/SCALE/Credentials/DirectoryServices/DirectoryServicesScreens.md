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
tags:
- kerberos
- activedirectory
- idmap
- ldap
- directoryservices
doctype: reference
---


{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

The **Directory Services** screen configuration options set up access to directory servers through domain and account settings, and can set up ID mapping or Kerberos authentication and authorization services.6

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesScreen.png" alt="Directory Services Screen" id="Directory Services Screen" >}}

The screen shows the status of directory services when a service is not configured or when it is configured but disabled.

The main option displays:

* **Configure Directory Services** opens the **Directory Services Configuration** form where you can set up Active Directory, IPA, or LDAP connections.
* [**Advanced Settings**](#advanced-settings)

## Directory Services Configuration Screen

The **Directory Services Configuration** screen shows common and directory service-specfic settings based on the type of directory service selectd in **Configuration Type**.

Common settings:
* [Basic Configuration](#basic-configuration)
* [Credential Configuration](#credential-configuation)

Directory Service-specific settings:
* [Active Directory Configuration](#active-directory-configuration)
  * [AD Truste Domain Configuration](#active-directory-trusted-domain-configuration)
  * [IDMAP Configuration](#idmap-configuration-ad)
* [LDAP Configuation](#ldap-configuration)
  * [Auxiliary Parameters (LDAP)](#auxiliary-parameters-ldap)
  * [Search Bases](#search-bases)
  * [Attribute Maps](#attribute-maps)
* [IPA Configuration](#ipa-configuration)
  * [SMB Domain Confituration](#smb-domain-configuration)

### Basic Configuration

The **Basic Configuration** settings show settings common to the three directory services available in TrueNAS: Active Directory, LDAP, and IPA (formerly FreeIPA).

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigurationScreen.png" alt="Directory Services Configuration -Basic Settings" id="Directory Services Configuration - Basic Settings" >}}

{{< expand "Basic Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Configuration Type** | Sets the type of directory service. Options are: **Acitve Directory**, **LDAP**, and **IPA**. Each option shows the **Credential Configuration** settings and changes the setting options shown for each type of directory service. |
| **Enable Service** | Enables the directory service when selected. If TrueNAS has never joined the specified domain (IPA or Active Directory), enabling causes TrueNAS to attempt to join the domain. <br>NOTE: The domain join process for Active Directory and IPA makes changes to the domain, such as creating a new computer account for the TrueNAS server and creating DNS records for TrueNAS. Enabled by default. Leave disabled to deactivate the configuration without deleting it and allow reenabling it later without reconfiguring it. The screen returns to the default settings and provides the option to configure AD, LDAP, or IPA. |
| **Enable Account Cache** | Enables backend caching for user and group lists. When enabled, directory services users and groups are presented as choices in the UI dropdowns and in API responses for user and group queries. Also controls whether users and groups appear in getent results. Disable to reduce load on the directory server when necessary. Enabled by default. |
| **Enable DNS Updates** | Allows TrueNAS to automatically register and update its DNS records on the DNS server for the domain when its IP address changes. Uses Kerberos authentication to verify TrueNAS has permission to update its own records. Enabled by default. Disable only if your DNS server does not support dynamic updates or if DNS is managed manually. |
| **Timeout (seconds)** | The number of seconds before the directory service connection times out. Valid range is 1-40 seconds. The timeout value for DNS queries that are performed as part of the join process and NETWORK_TIMEOUT for LDAP requests (5-60 seconds). |
| **Kerberos Realm** |  Specifies the name of the Kerberos realm used for authentication to the directory service, for example, *EXAMPLE.COM*. When left empty, Kerberos is not used for binding to the directory service, but when joining an Active Directory or IPA domain for the first time, the realm is detected and configured automatically if not specified. |
{{< /truetable >}}
{{< /expand >}}

### Credential Configuration 

The **Credential Type** setting changes the authentication settings shown for the directory service no matter which type is selected in **Configuration Type**. Active Directory, IPA and LDAP all show Kerberos authentication options, but LDAP shows additional settings based on LDAP options.

**Credential Type** sets the credential used to bind to the specified directory service. Kerberos credentials are required for Active Directory or IPA domains. Generic LDAP environments support various authentication methods. Available methods depend on the remote LDAP server configuration. If Kerberos credentials are selected for LDAP, GSSAPI binds replace plain LDAP binds. Use Kerberos or mutual TLS authentication when possible for better security.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosUser.png" alt="Credential Configuration Kerberos User" id="Credential Configuration Kerberos User" >}}

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosPrinciple.png" alt="Credential Configuration Kerberos Principle" id="Credential Configuration Kerberos Principle" >}}

{{< expand "Kerberos Credential Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Credential Type** | Sets the credential type for authentication. Options: **Kerberos User** or **Kerberos Principle**. **Kerberose User** shows the **Username** and **Password** settings. **Kerberose Principle** shows the **Kerberos Principle** dropdown list. **Kerberos Principle**, and **Kerberos User**. |
| **Username** | Username of the account to use to create a Kerberos ticket for authentication to directory services. This account must exist on the domain controller. A *Kerberos ticket* is a time-limited encrypted credential issued by the domain controller that allows TrueNAS to authenticate to domain services without transmitting passwords over the network. |
| **Password** | Password for the user account that obtains the Kerberos ticket. A *Kerberos ticket* is a time-limited encrypted credential issued by the domain controller that allows TrueNAS to authenticate to domain services without transmitting passwords over the network. |
| **Kerberos Principle** | A Kerberos principal is the unique identity, formatted as *username@DOMAIN.COM*, that Kerberos uses to issue authentication tickets. Kerberos keytabs configured in TrueNAS show on the dropdown list. The specified principal must have a matching entry in a keytab stored on TrueNAS. Keytabs are managed in **Directory Services > Advanced Settings > Kerberos Keytabs**. If a keytab entry does not exist for the specified principal, authentication fails. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Credential Configuration Settings" "v" >}}
When **Configuration Type** is set to **LDAP**, **Credential Configuration** shows five options to define the authentication method for LDAP access:
* **LDAP Plain**
* **LDAP Anonymous** (shows no additional settings)
* **LDAP MTLS**
* **Kerberos Principle**
* **Kerberous User**

Each option shows different settings in **Credential Configuration**.

{{< trueimage src="/images/SCALE/Credentials/LDAPPlainCredentialConfig.png" alt="LDAP Plain Credential Configuration" id="LDAP Plain Credential Configuration" >}}

{{< trueimage src="/images/SCALE/Credentials/LDAPMTLSCredentialConfig.png" alt="LDAP MTLS Credential Configuration" id="LDAP MTLS Credential Configuration" >}}

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosUser.png" alt="Credential Configuration Kerberos User" id="Credential Configuration Kerberos User" >}}

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesConfigCredentialConfigKerberosPrinciple.png" alt="Credential Configuration Kerberos Principle" id="Credential Configuration Kerberos Principle" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Bind DN** | Specifies the distinguished name to use for authentication. This is the administrative account name for the LDAP server. Shows when **LDAP Plain** is selected. For example, *cn=Manager,dc=test,dc=org*. |
| **Bind Password** | Specifies the password for the **Bind DN**. Shows when **LDAP Plain** is selected. |
| **Client Certificate** | Specifies the client certificate to use for mutual TLS authentication to the remote LDAP server. Shows when **LDAP MTLS** is selected. |
| **Kerberos Principal** | A Kerberos principal is the unique identity, formatted as *username@DOMAIN.COM*, that Kerberos uses to issue authentication tickets. Kerberos keytabs configured in TrueNAS show on the dropdown list. The specified principal must have a matching entry in a keytab stored on TrueNAS. Keytabs are managed in **Directory Services > Advanced Settings > Kerberos Keytabs**. If a keytab entry does not exist for the specified principal, authentication fails. |
| **Kerberos User** | Shows the **Username** and **Password** authentication fields, and sets authentication to use the LDAP administrative account credentials. |
| **Username** | Username of the account used to obtain a Kerberos ticket for authentication to the LDAP server. A Kerberos ticket is a time-limited, encrypted
  credential that allows TrueNAS to authenticate without transmitting passwords over the network. |
| **Password** | Password for the user account that obtains the Kerberos ticket. A *Kerberos ticket* is a time-limited encrypted
  credential that allows TrueNAS to authenticate without transmitting passwords over the network. |
{{< /truetable >}}
{{< /expand >}}

### Active Directory Configuration

The **Active Directory Configuration** section settings define the connection parameters and domain-specific options.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesconfigADConfig.png" alt="Active Directory Configuration" id="ctive Directory Configuration" >}}

{{< expand "Active Directory Configuration Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **TrueNAS Hostname** | The hostname for the TrueNAS system to register in Active Directory, for example, *truenasnyc*. This value must match the **Hostname** setting on the **Network > Global Configuration** screen and cannot exceed 15 characters. Cannot contain these special characters: \ / : * ? " < > |. Cannot use Microsoft or RFC 852 reserved words (ANONYMOUS, AUTHENTICATED USER, BATCH, BUILTIN, DIALUP, DOMAIN, ENTERPRISE, INTERACTIVE, INTERNET, LOCAL, NETWORK, NULL, PROXY, RESTRICTED, SELF, SERVER, USERS, WORLD, GATEWAY, GW, TAC). Must differ from the Workgroup name. |
| **Domain Name** | The full DNS domain name of the Active Directory domain name (for example, *mydoman.internal*) or child domain (for example, *sales.example.com*) if configuring access to a child domain. This must not be a domain controller! |
| **Site Name** | The Active Directory site where the TrueNAS server is located. TrueNAS detects this automatically during the domain join process. |
| **Computer Account OU** | The organizational unit (OU) where the TrueNAS computer object is created when joining the Active Directory domain for the first time. The OU string includes the distinguished name (DN) of the Computer Account OU. For example, *OU=Computers,DC=example,DC=com*.  Use this setting to override the default organizational unit (OU) in which the TrueNAS computer account is created during the domain join. Use it to set a custom location for TrueNAS computer accounts. |
| **Use Default Domain** | Removes the domain name prefix from AD users and groups. This setting might be required for specific configurations, such as Kerberos authentication with NFS for AD users. Note that using this setting can cause collisions with local user account names.  Controls if the system removes the domain prefix from Active Directory user and group names. If enabled, users appear as "administrator" instead of "EXAMPLE\administrator". In most cases, disable this (default) to avoid name conflicts between Active Directory and local accounts. |
{{< /truetable >}}
{{< /expand >}}

### Active Directory Trusted Domain Configuration

Beginning in TrueNAS 25.10, trusted domains are configured as part of the Active Directory configuration rather than as separate IDmap entries.

The **Trusted Domains Configuration** section controls access for trusted domains.

**Enable Trusted Domains** shows the **Trusted Domains** options that allow clients to access TrueNAS if they are members of domains with a trust relationship. When enabled,  the **Trusted Domain** section and **Add** button show.
**Add** shows the **Basic Configuration** section with the **IDMAP Backend** options. 

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainConfig.png" alt="Trusted Domain Configuration" id="Trusted Domain Configuration" >}}

The **IDMAP Backend** configuration defines how domain accounts joined to TrueNAS are mapped to Unix UIDs and GIDs on the TrueNAS server.
Most TrueNAS deployments use the RID backend, which algorithmically assigns UIDs and GIDs based on the Active Directory account SID.
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
| **Name** | Short name for the domain. This should match the NetBIOS domain name for Active Directory domains. It might be null if the domain is configured as the base IDMAP for Active Directory. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **Schema Mode** | The schema mode the IDMAP backend uses to query Active Directory for user and group information. The RFC2307 schema applies to Windows Server 2003 R2 and newer. The Services for Unix (SFU) schema applies to versions before Windows Server 2003 R2. |
| **Unix Primary Group** | Defines if the user's primary group is fetched from Unix attributes (Services for Unix) or the Active Directory primary group. If enabled, the TrueNAS server uses the gidNumber LDAP attribute. If disabled, it uses the primaryGroupID LDAP attribute. |
|**Unix NSS Info**  | If enabled, the login shell and home directory are retrieved from LDAP attributes (Unix attributes in Active Directory). If disabled, or if the Active Directory LDAP entry lacks Unix attributes, the home directory defaults to /var/empty. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Trusted Domain LDAP Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendLDAP.png" alt="Trusted Domain LDAP IDMAP Backend Configuration" id="Trusted Domain LDAP IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **LDAP Base DN** | Directory base suffix to use for mapping UIDs and GIDs to SIDs. |
| **LDAP User DN** |Defines the user DN to be used for authentication to the LDAP server.|
| **LDAP User DN Password** | Secret to use for authenticating the user specified by ldap_user_dn.  |
| **LDAP Url** | LDAP server to use for the IDMAP entries. |
| **Readonly** | If enabled, TrueNAS does not attempt to write new IDMAP entries. |
| **Validate Certificates** | Verify certificate authenticity. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Trusted Domain RFC2307 Attributes from Standalone LDAP Server Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendRFC2307.png" alt="Trusted Domain RFC2307 IDMAP Backend Configuration" id="Trusted Domain RFC-2307 IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **LDAP Url** | LDAP server to use for the IDMAP entries. |
| **LDAP User DN** |Defines the user DN to be used for authentication to the LDAP server.|
| **LDAP User DN Password** | Secret to use for authenticating the user specified by ldap_user_dn.  |
| **Bind Path User** | The search base that contains user objects in the LDAP server. |
| **Bind Path Group** | The search base that contains group objects in the LDAP server. |
| **User CN** | If set, query the CN attribute instead of the UID attribute for the user name in LDAP. |
| **LDAP Realm** | Append @realm to the CN for groups. Also, append it to users if user_cn is specified. |
| **Validate Certificate** | Verify certificate authenticity. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Trusted Domain RID (Default - Algorithmic Mapping Based on RID Values) Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigTrustedDomainIDMAPBackendRID.png" alt="Trusted Domain LDAP RID Backend Configuration" id="Trusted Domain RID IDMAP Backend Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **SSSD Compat**  | Generate an IDMAP low range using the algorithm from SSSD. Use this option if the domain uses only a single SSSD IDMAP slice. |
{{< /truetable >}}
{{< /expand >}}

### IDMAP Configuration (AD)

**Use Trusted Server IDMAP Defaults** is enabled by default.
Use the TrueNAS default IDMAP configuration unless you want to customize ID mapping.
Defaults are suitable for new deployments without existing support for Unix-like operating systems.
The default configuration uses the RID backend with predefined UID/GID ranges (builtin: 90000001-100000000, domain: 100000001-200000000).

When disabled, it shows IDMAP configuration settings to customize Id mapping.

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
| **Name** | Short name for the joined domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
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
| **Name** | Short name for the joined domain. Typically matches the NetBIOS domain name. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **Schema Mode** | The schema mode the IDMAP backend uses to query Active Directory for user and group information. The RFC2307 schema applies to Windows Server 2003 R2 and newer. The Services for Unix (SFU) schema applies to versions before Windows Server 2003 R2. |
| **Unix Primary Group** | Defines if the user's primary group is fetched from Unix attributes (Services for Unix) or the Active Directory primary group. If enabled, the TrueNAS server uses the gidNumber LDAP attribute. If disabled, it uses the primaryGroupID LDAP attribute. |
|**Unix NSS Info**  | If enabled, the login shell and home directory are retrieved from LDAP attributes (Unix attributes in Active Directory). If disabled, or if the Active Directory LDAP entry lacks Unix attributes, the home directory defaults to /var/empty. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "IDMAP Domain LDAP Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendLDAP.png" alt="IDMAP Domain LDAP Configuration" id="IDMAP Domain LDAP Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Short name for the joined domain. Typically matches the NetBIOS domain name. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **LDAP Base DN** | Directory base suffix to use for mapping UIDs and GIDs to SIDs. |
| **LDAP User DN** |Defines the user DN to be used for authentication to the LDAP server.|
| **LDAP User DN Password** | Secret to use for authenticating the user specified by ldap_user_dn.  |
| **LDAP Url** | LDAP server to use for the IDMAP entries. |
| **Readonly** | If enabled, TrueNAS does not attempt to write new IDMAP entries. |
| **Validate Certificates** | Verify certificate authenticity. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "IDMAP Domain RFC2307 Attributes from Standalone LDAP Server Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendRFC2307.png" alt="IDMAP Domain RFC-2307 Configuration" id="IDMAP Domain RFC2307 Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Short name for the domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
| **LDAP Url** | LDAP server to use for the IDMAP entries. |
| **LDAP User DN** |Defines the user DN to be used for authentication to the LDAP server.|
| **LDAP User DN Password** | Secret to use for authenticating the user specified by ldap_user_dn.  |
| **Bind Path User** | The search base that contains user objects in the LDAP server. |
| **Bind Path Group** | The search base that contains group objects in the LDAP server. |
| **User CN** | If set, query the CN attribute instead of the UID attribute for the user name in LDAP. |
| **LDAP Realm** | Append @realm to the CN for groups. Also append it to users if user_cn is specified. |
| **Validate Certificate** | Verify certificate authenticity. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "IDMAP Domain RID (Default - Algorithmic Mapping Based on RID Values) Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/ADConfigIDMAPDomainIDMAPBackendRID.png" alt="IDMAP Domain RID Configuration" id="IDMAP Domain RID Configuration" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Short name for the joined domain. This should match the NetBIOS domain name for Active Directory domains. |
| **Range Low** | The lowest UID or GID that the IDMAP backend can assign. |
| **Range High** | The highest UID or GID that the IDMAP backend can assign. |
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
| **Server URLs** | Specifes the hostname or IP address of the LDAP server. Separate entries by pressing <kbd>Enter</kbd>. Multiple URLs create an LDAP failover priority list. If a host does not respond, TrueNAS tries the next host until it establishes a connection. If using a cloud service LDAP server, do not include the full URL. |
| **Base DN** | The top level of the LDAP directory tree to use when searching for resources. For example, *dc=test,dc=org*. |
| **Start TLS** | Encrypts the LDAP connection with STARTTLS on the default LDAP port *389*. Options for encrypting the LDAP connection:<br><li>**OFF** - Does not encrypt the LDAP connection.<br><li>**ON**- Encrypts the LDAP connection with SSL on port 636.<br><li>**START_TLS**- Encrypts the LDAP connection with STARTTLS on the default LDAP port 389</li>. |
| **Validate Certificates** | Verifies certificate authenticity when connecting to the LDAP server, when enabled. |
| **Schema** | Sets the LDAP NSS schema. Options are **RFC2307** or **RFC2307BIS**.<br><li>**RFC2307** — Standard Unix attributes schema. Compatible with most LDAP servers, including OpenLDAP.<br><li>**RFC2307BIS** — Extended schema that supports nested group membership. Use if your LDAP server is configured with RFC2307bis.</li> |
{{< /truetable >}}
{{< /expand >}}

### Auxiliary Parameters (LDAP)

The **Auxiliary Parameters** subsection allows customization of auxiliary parameters. 

**Use Standard Auxiliary Parameters** is enabled by default. Disable to enter custom options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5).

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
| **User Base DN** | Sets the base DN to use when searching for LDAP user accounts. Restricts user searches to a specific directory subtree. For example, *ou=users,dc=example,dc=org*. |
| **Group Base DN** | Sets the base DN to use when searching for LDAP group accounts. Restricts group searches to a specific directory subtree. For example, *ou=groups,dc=example,dc=org*. |
| **Netgroupe Base DN** | Sets the base DN to use when searching for LDAP group accounts. Restricts group searches to a specific directory subtree. For example, *ou=netgroups,dc=example,dc=org*. |
{{< /truetable >}}
{{< /expand >}}

### Attribute Maps 

The **Attribute Maps**  settings allow customization of attribute mappings by defining custom LDAP attribute names for user and group account fields. 
An attribute left blank uses the default attribute name for that field.
Only use custom attribute maps if the LDAP server is non-standard, if your LDAP schema uses non-standard attribute names.

**Use Standard Attribute Maps** is enabled by default, and uses standard RFC2307 or RFC2307BIS attribute mappings.
When disabled, the standard LDAP attribute mapping for LDAP servers that do not follow RFC2307 or RFC2307BIS shows to allow for customization.

The screen groups settings into LDAP password attributes, shadow attributes, and group attibutes: **LDAP Password Attributes**, **LDAP Shadow Attributes**, **LDAP Group Attributes**, and **LDAP Net Group Attributes**.

{{< expand "LDAP Password Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapPasswordAttributes.png" alt="LDAP Password Attributes" id="LDAP Password Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User Object Class** | Specifies the entry object class in LDAP for the user. |
| **Username Attribute** | Specifies the LDAP attribute for the login name for the user. | 
| **UID Attribute** | Specifies the LDAP attribute for the id of the user. |
| **GID Attribute** | Specifies the  LDAP attribute for the primary group id for the user. |
| **GECOS Attribute** | Specifies the LDAP attribute for the gecos field for the user. |
| **Home Directory Attribute** | Specifies the LDAP attribute for the home directory for the user. |
| **Shell Attribute** | Specifies the LDAP attribute for the path to the default shell for the user. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Shadow Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapShadowAttributes.png" alt="LDAP Shadow Attributes" id="LDAP Shadow Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Last Change Attribute** | Specifies the LDAP attribute for password last change. |
| **Min Days Attribute** | Specifies the LDAP attribute for minimum password age. |
| **Max Days Attribute** | Specifies the  LDAP attribute for maximum password age. |
| **Warning Attribute** | Specifies the LDAP attribute for password warning period. |
| **Inactive Attribute** | Specifies the LDAP attribute for the account inactive period. |
| **Expire Attribute** | Specifies the LDAP attribute for account expiration. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Group Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapGroupAttributes.png" alt="LDAP Group Attributes" id="LDAP Group Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Group Object Class** | Specifies the DAP object class for groups. |
| **Netgroup Member Attribute** | Specifies the LDAP attribute for group members. |
| **Netgroup Triple Attribute** | Specifies the LDAP attribute for group triples. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "LDAP Net Group Attribute Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/AttributeMapsLdapNetGroupAttributes.png" alt="LDAP Net Group Attributes" id="LDAP Net Group Attributes" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Netgroup Object Class** | Specifies the DAP object class for netgroups. |
| **Netgroup Member Attribute** | Specifies the LDAP attribute for netgroup members. |
| **Netgroup Triple Attribute** | Specifies the LDAP attribute for netgroup triples. |
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
| **TrueNAS Hostname** | Specifies the hostname of the TrueNAS server to register in IPA during the join process. For example: *truenasnyc*. |
| **Domain** | Specifes the domain name of the IPA Server. For example: *ipa.internal*. |
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
| **Name** | Short name for the IPA domain used for SMB access. Typically matches the IPA domain name. |
| **Domain Name** | Name of the SMB domain as defined in the IPA configuration for the IPA domain to which TrueNAS is joined. |
| **Range Low**| Specifies the lowest UID or GID that the IPA maps natively. |
| **Range High** | Specifies the highest UID or GID that IPA maps natively.  |
| **Domain SID** | Specifies the domain SID for the IPA domain to which TrueNAS is joined. |
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

![KerberosRealmsScreen](/images/SCALE/Credentials/KerberosRealmsScreen.png "Kerberos Realms Screen")

{{< truetable >}}
| Setting | Description |  
|---------|-------------|
| **Name** | Specifies a short name for the Kerberos realm. The Kerberos standard allows upper case characters, DNS rules apply, and does not exceed 253 characters (letters, digits, and/or hyphens). TrueNAS does not enforce naming conventions, but requires entering a name.  |
| **Primary KDC** | Specifies the master Kerberos domain controller for this realm. TrueNAS uses this as a fallback if it cannot get credentials because of an invalid password. This can help in environments where the domain uses a hub-and-spoke topology. Use this setting to reduce credential errors after TrueNAS automatically changes its machine password. |
| **KDC**| Specifies the name of the Key Distribution Center. Pressing <kbd>Enter</kbd> separates multiple values. |
| **Admin Server** | Defines the server where all changes to the database are performed. Pressing <kbd>Enter</kbd> separates multiple values.  |
| **Domain SID** | Defines the server where all password changes are performed. Pressing <kbd>Enter</kbd> separates multiple values. |
{{< /truetable >}}

### Add Kerberos Keytabs

The **Add Kerberos Keytabs** allows adding a keytab file using the file browser option and assigning the keytab a name.

![KerberosKeytabsScreen](/images/SCALE/Credentials/KerberosKeytabsScreen.png "Kerberos Keytabs Screen")

**Name** specifies a short name for the keytab on the TrueNAS system. Kerberos does not have a name convention for keytab files.

**Choose File** opens the file browser to locate and upload a keytab file. Kerberos keytab files are binary files in a specific format (MIT Kerberos keytab format). Keytab files can have either the .keytab or .kt extension.

