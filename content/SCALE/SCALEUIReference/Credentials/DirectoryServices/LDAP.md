---
title: "LDAP"
geekdocCollapseSection: true
weight: 20
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
---

{{< toc >}}

Click **Configure LDAP** in **Credentials > Directory Services** to open the **LDAP** form.

![DirectoryServicesLDAPForm](/images/SCALE/22.02/DirectoryServicesLDAPForm.png "LDAP Form")

### Basic Options

| Setting | Description |  
|-------|-------------|  
| **Hostname** | LDAP server hostnames/IP addresses. Separate entries with <kbd>Space</kbd>. You can enter multiple hostnames/IP addresses to create an LDAP failover priority list. If a host does not respond, TrueNAS will try the next host until it establishes a connection. |
| **Base DN** | Top level of the LDAP directory tree to be used when searching for resources. Example: dc=test,dc=org. |
| **Bind DN** | Administrative account name on the LDAP server. Example: cn=Manager,dc=test,dc=org. |
| **Bind Password** | Password for the Bind DN. |
| **Enable** | Activates the configuration. Unset to disable the configuration without deleting it. You can re-enable it later without reconfiguring it. |

### Advanced Options

| Setting | Description |  
|-------|-------------|  
| **Allow Anonymous Binding** | Set for the LDAP server to disable authentication and allow read and write access to any client. |
| **Encryption Mode** | Options for encrypting the LDAP connection: <br> <br> *OFF*: do not encrypt the LDAP connection. <br> *ON*: encrypt the LDAP connection with SSL on port 636. <br> *START_TLS*: encrypt the LDAP connection with STARTTLS on the default LDAP port *389*. |
| **Certificate** | Certificate to use when performing LDAP certificate-based authentication. To configure LDAP certificate-based authentication, create a Certificate Signing Request for the LDAP provider to sign. TrueNAS does not need a certificate when using username/password or Kerberos authentication. To configure LDAP certificate-based authentication, [create a Certificate Signing Request]({{< relref "CertificatesSCALE.md" >}}) for the LDAP provider to sign. |
| **Validate Certificates** | Verify certificate authenticity. |
| **Disable LDAP User/Group Cache** | Disable caching LDAP users and groups in large LDAP environments. When caching is disabled, LDAP users and groups do not appear in drop-down menus but are still accepted when manually entered. |
| **Kerberos Realm** | Select an existing realm from *Kerberos Realms*. |
| **Kerberos Principal** | Select the location of the principal in the keytab created in *Kerberos Keytab*. |
| **LDAP Timeout** | LDAP timeout in seconds. Increase this value if a Kerberos ticket timeout occurs. |
| **DNS Timeout** | DNS timeout in seconds. Increase this value if DNS queries timeout. |
| **Samba Schema (DEPRECATED - see help text)** | Only set if you configured the LDAP server with Samba attributes and it requires LDAP authentication for SMB shares. |
| **Auxiliary Parameters** | You can specify additional options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| **Schema** | Schema to use with Samba Schema. |

{{< hint warning >}} 
**DEPRECATED:** Samba Schema support is deprecated in Samba 4.13. We will remove this feature after Samba 4.14. Users should begin upgrading legacy Samba domains to Samba AD domains. 
{{< /hint >}}