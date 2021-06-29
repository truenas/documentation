---
title: "LDAP"
weight: 20
---

{{< toc >}}

TrueNAS has an [Open LDAP](https://www.openldap.org/) client for accessing the information on an LDAP server. An LDAP server provides directory services for finding network resources such as users and their associated permissions.

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless the LDAP directory has been configured for and populated with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
The LDAP server must support SSL/TLS and the certificate for the LDAP server CA must be imported.
Non-CA certificates are not currently supported.
{{< /expand >}}

## Configuration

To integrate an LDAP server with TrueNAS, go to **Credentials > Directory Services** and click *Settings* in the *LDAP* window.

![LDAPSCALE](/images/SCALE/LDAPSCALE.png "LDAP Options")

| Field | Description |
|-------|-------------|
| Hostname | LDAP server hostnames or IP addresses. Separate entries with <kbd>Space</kbd>. Multiple hostnames or IP addresses can be entered to create an LDAP failover priority list. If a host does not respond, the next host in the list is tried until a new connection is established. |
| Base DN | Top level of the LDAP directory tree to be used when searching for resources. Example: dc=test,dc=org. |
| Bind DN | Administrative account name on the LDAP server. Example: cn=Manager,dc=test,dc=org. |
| Bind Password | Password for the Bind DN. |
| Enable | Activates the configuration. Unset to disable the configuration without deleting it. It can be enabled at a later time without reconfiguring the options.|

{{< expand "Advanced Configuration" "v" >}}
To further modify the LDAP configuration, click *Advanced Options*.

![LDAPAdvancedSCALE](/images/SCALE/LDAPAdvancedSCALE.png "LDAP Advanced Options")

| Field | Description |
|-------|-------------|
| Allow Anonymous Binding | Set for the LDAP server to disable authentication and allow read and write access to any client. |
| Encryption Mode | Options for encrypting the LDAP connection:
* *OFF*: do not encrypt the LDAP connection.
* *ON*: encrypt the LDAP connection with SSL on port 636.
* *START_TLS*: encrypt the LDAP connection with STARTTLS on the default LDAP port *389*. |
| Certificate | Certificate to use when performing LDAP certificate-based authentication. To configure LDAP certificate-based authentication, create a Certificate Signing Request for the LDAP provider to sign. A certificate is not required when using username/password or Kerberos authentication.
To configure LDAP certificate-based authentication, [create a Certificate Signing Request]({{< relref "CertificatesSCALE.md" >}}) for the LDAP provider to sign. |
| Validate Certificates | Verify certificate authenticity. |
| Disable LDAP User/Group Cache | Disable caching LDAP users and groups in large LDAP environments. When caching is disabled, LDAP users and groups do not appear in dropdown menus but are still accepted when manually entered. |
| Kerberos Realm | Select an existing realm that was added in [Kerberos Realms]({{< relref "KerberosSCALE.md" >}}). |
| Kerberos Principal | Select the location of the principal in the keytab created in [Kerberos Keytab]({{< relref "KerberosSCALE.md" >}}). |
| LDAP timeout | LDAP timeout in seconds. Increase this value if a Kerberos ticket timeout occurs. |
| DNS timeout | DNS timeout in seconds. Increase this value if DNS queries timeout. |
| Samba Schema | Only set LDAP authentication for SMB shares is required and the LDAP server is already configured with Samba attributes. 
{{< hint warning >}} **DEPRECATED:** Support for Samba Schema is officially deprecated in Samba 4.13. The feature will be removed after Samba 4.14. Users should begin upgrading legacy Samba domains to Samba AD domains. {{< /hint >}} |
| Auxiliary Parameters | Additional options can be specified for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| Schema  | Select a schema when Samba Schema is set. |
| Edit Idmap  | The *Edit Idmap* button takes users to the [Idmap configuration]({{< relref "IdmapSCALE.md" >}}) screen. |
{{< /expand >}}

## Troubleshooting

If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync the cache using the *Rebuild Directory Service Cache*.
