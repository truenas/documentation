---
title: "Directory Services"
geekdocCollapseSection: true
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
---

The SCALE Directory Services section contains options to edit directory domain and account settings, set up Idmapping, and configure authentication and authorization services in TrueNAS SCALE. 

## Choosing Active Directory or LDAP

When setting up directory services in TrueNAS, you can connect TrueNAS to either an Active Directory or an LDAP server. 

{{< tabs "Directory Service Options" >}}
{{< tab "Active Directory" >}}
The Active Directory (AD) service shares resources in a Windows network.
AD provides authentication and authorization services for the users in a network, eliminating the need to recreate the user accounts on TrueNAS.

Once joined to an AD domain, you can use domain users and groups in local ACLs on files and directories. 
You can also set up shares to act as a file server.

Joining an AD domain also configures the Privileged Access Manager (PAM) to let domain users log on via SSH or authenticate to local services.

Users can configure AD services on Windows or Unix-like operating systems running [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

To configure a connection, you will need to know the Active Directory domain controller's domain and that system's account credentials.

## Preparation

Users can take a few steps before configuring Active Directory to ensure the connection process goes smoothly.

### Verify Name Resolution

To confirm that name resolution is functioning, go to **System Settings > Shell** and use `ping` to check the connection to the AD domain controller.

![ShellDomainPingSCALE](/images/SCALE/ShellDomainPingSCALE.png "Pinging a Domain Controller")

When TrueNAS sends and receives packets without loss, the connection is verified. Press <kbd>Ctrl + C</kbd> to cancel the `ping`.

Another option is to use `host -t srv _ldap._tcp.domainname.com` to check the network's SRV records and verify DNS resolution.

{{< expand "The ping failed!" "v" >}}
If the ping fails, go to **Network** and click *Settings* in the *Global Configuration* window. Update the *DNS Servers* and *Default Gateway* settings so the connection to your Active Directory Domain Controller can start.
Use more than one *Nameserver* for the AD domain controllers so DNS queries for requisite SRV records can succeed.
Using more than one *Nameserver* helps maintain the AD connection whenever a domain controller becomes unavailable.
{{< /expand >}}

### Time Synchronization

Active Directory relies on the time-sensitive [Kerberos](https://tools.ietf.org/html/rfc1510) protocol.
TrueNAS adds the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) as the preferred NTP server during the domain join process. 
If your environment requires something different, go to **System Settings > General** and add or edit a server in the *NTP Servers* window.

The local system time cannot be out of sync by more than **five (5) minutes** with the AD domain controller time in a default AD environment.
Use an external time source when configuring a virtualized domain controller.
TrueNAS creates an alert if the system time gets out of sync with the AD domain controller time.

TrueNAS has a few options to ensure both systems are synchronized:

1. Go to **System Settings > General** and click *Settings* in the *Localization* window to ensure the *Timezone* matches the AD Domain Controller.

![LocalizationSCALE](/images/SCALE/LocalizationSCALE.png "Timezone Options")

2. Set either localtime or universal time in the system BIOS.

## Connect to the Active Directory Domain

To connect to Active Directory, click *Settings* in the *Active Directory* window and enter the AD *Domain Name* and account credentials.
Set *Enable* to attempt to join the AD domain immediately after saving the configuration.

![ActiveDirectorySCALE](/images/SCALE/ActiveDirectorySCALE.png "Active Directory Form")

TrueNAS offers advanced options for fine-tuning the AD configuration, but the preconfigured defaults are generally suitable.

{{< expand "I don't see any AD information!" "v" >}}
TrueNAS can take a few minutes to populate the Active Directory information after configuration. 
To check the AD join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
TrueNAS displays any errors during the join process in the **Task Manager**.
{{< /expand >}}

When the import is complete, AD users and groups become available while configuring basic dataset permissions or an ACL with TrueNAS cache enabled (enabled by default).

Joining AD also adds default Kerberos realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials stored in the TrueNAS configuration file.

{{< expand "Advanced Options" "v" >}}
![ActiveDirectoryAdvancedOptionsSCALE](/images/SCALE/ActiveDirectoryAdvancedOptionsSCALE.png "Advanced Options")

| Setting | Description |
|---------|-------------|
| Verbose logging | Logs attempts to join the domain in /var/log/messages. |
| Allow Trusted Domains | When set, usernames do not include a domain name. Unset to prepend domain names to user names. Unsetting this option prevents username collisions when there are identical usernames across multiple domains. |
| Use Default Domain | Unset to prepend the domain name to the username and prevent name collisions when using Allow Trusted Domains with the same username across multiple domains. |
| Allow DNS Updates | Enables Samba to do DNS updates when joining a domain. |
| Disable FreeNAS Cache | Disables caching AD users and groups, which can help when unable to bind to a domain with a lot of users or groups. |
| Restrict PAM | Restricts SSH access to BUILTIN\\Administrators members in certain circumstances. |
| Site Name | Enter the relative distinguished name of the site object in the Active Directory. |
| Kerberos Realm | Select an existing realm from *Kerberos Realms*. |
| Kerberos Principal | Select the location of the principal in the keytab created in Directory Services > Kerberos Keytabs. |
| Computer Account OU | The OU that creates new computer accounts. TrueNAS reads the OU string from top to bottom without RDNs. Uses forward slashes (/) as delimiters, like Computers/Servers/NAS. Use backslashes (\\) to escape characters but not as a separator. TrueNAS interprets backslashes at multiple levels, so you might have to use several for them to work. When this field is blank, TrueNAS creates new computer accounts in the AD default OU. |
| AD Timeout | Number of seconds before timeout. To view the AD connection status, open the interface Task Manager. |
| DNS Timeout | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| Winbind NSS Info | Choose the schema to use when querying AD for user/group info. *rfc2307* uses the Windows 2003 R2 schema support, *sfu* is for Service For Unix 3.0 or 3.5, and *sfu20* is for Service For Unix 2.0. |
| Netbios Name | Netbios Name of this NAS. This name must differ from the Workgroup name and be no greater than 15 characters. |
| NetBIOS alias | Alternative names (no greater than 15 characters) that SMB clients can use when connecting to this NAS. Can be no greater than 15 characters. |
| Edit Idmap | Navigates to **Directory Services > Idmap** so the user can edit the Active Directory's Idmap |
| Leave Domain | Disconnects the TrueNAS system from the Active Directory. |
{{< /expand >}}

## Troubleshooting

{{< expand "Resync the Cache" "v" >}}
If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync it by clicking *Settings* in the *Active Directory* window and selecting *Rebuild Directory Service Cache*.

If you are using Windows Server with 2008 R2 or older,, try creating a **Computer** entry on the Windows server Organizational Unit (OU).

When creating the entry, enter the TrueNAS hostname in the name field and make sure it matches the:

* *Hostname*: Go to **Network** and find *Hostname* in the *Global Configuration* window.
* *NetBIOS alias*: Go to **Credentials > Directory Services** and click *Settings* in the *Active Directory* window. Click *Advanced Options* and find the *NetBIOS alias*.

## Shell Commands

You can go to **System Settings > Shell** and enter various commands to get more details about the AD connection and users:

*AD current state*: `midclt call activedirectory.get_state`.

*Connected LDAP server details*: `midclt call activedirectory.domain_info | jq`. For example:
  ```
  truenas# midclt call activedirectory.domain_info | jq
  {
    "LDAP server": "192.168.1.125",
    "LDAP server name": "DC01.HOMEDOM.FUN",
    "Realm": "HOMEDOM.FUN",
    "Bind Path": "dc=HOMEDOM,dc=FUN",
    "LDAP port": 389,
    "Server time": 1593026080,
    "KDC server": "192.168.1.125",
    "Server time offset": 5,
    "Last machine account password change": 1592423446
  }
  ```

*View AD users*: `wbinfo -u`.
* Enter `getent passwd DOMAIN\\<user>` to see more user details (`<user>` = desired user name).
* If `wbinfo -u` shows more users than are available when configuring permissions and the TrueNAS cache is enabled, go to **Directory Services**, click *Settings* in the *Active Directory* window, and increase the *AD Timeout* value.

*View AD groups*: `wbinfo -g`. Enter `getent group DOMAIN\\domain\ users` to see more details.

*View domains*: `wbinfo -m`.

*Test AD connection*: `wbinfo -t`. 
* A successful test shows a message like `checking the trust secret for domain YOURDOMAIN via RPC calls succeeded`.

*Test user connection to SMB share*: `smbclient '//0.0.0.0/smbshare -U AD.DOMAIN.COM\user`
* `0.0.0.0` is the server address 
* `smbshare` is the SMB share name 
* `AD.DOMAIN.COM` is the trusted domain
* `user` is the user account name to authenticate.
{{< /expand >}}

{{< expand "Clean Up Active Directory" "v" >}}
TrueNAS SCALE requires users to cleanly leave an Active Directory using the *Leave Domain* button under *Advanced Settings* to remove the AD object. 

If the AD server moves or shuts down without you using *Leave Domain*, TrueNAS won't remove the AD object, and you will have to clean up the Active Directory.

Go to **Credentials > Directory Services** and click *Show* next to *Advanced Settings*

1. Clean out Kerberos settings by clicking *Settings* in the *Kerberos Settings* window and clearing the *Appdefaults Auxiliary Parameters* and *Libdefaults Auxiliary Parameters* boxes. You may also need to clear out leftover Kerberos Realms and Keytabs by clicking the <i class="material-icons" aria-hidden="true">delete</i> next to remaining entries.
2. Click the *Idmap* *Active Directory - Primary Domain* entry and clear out the Active Directory settings, then click *CONTINUE* to clear the Idmap cache.
3. Go to **Network** and click *Settings* in the *Global Configuration* window. Remove the Active Directory Nameserver and enter a new one.
4. Ensure all other network settings are correct.
5. Go to **System Settings > Services** and change the workgroup to "WORKGROUP".
6. Go to **Credentials> Directory Services** and edit the Active Directory config to the new domain.
7. Make sure the Kerberos settings and Idmap are correct and that SMB is running.
{{< /expand >}}
{{< /tab >}}
{{< tab "LDAP" >}}
TrueNAS has an [Open LDAP](https://www.openldap.org/) client for accessing the information on an LDAP server. An LDAP server provides directory services for finding network resources such as users and their associated permissions.

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless you have configured and populated the LDAP directory with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
The LDAP server must support SSL/TLS, and you must import the certificate for the LDAP server CA.
TrueNAS does not support non-CA certificates.
{{< /expand >}}

## Configuration

To integrate an LDAP server with TrueNAS, go to **Credentials > Directory Services** and click *Settings* in the *LDAP* window.

![LDAPSCALE](/images/SCALE/LDAPSCALE.png "LDAP Options")

| Field | Description |  
|-------|-------------|  
| Hostname | LDAP server hostnames/IP addresses. Separate entries with <kbd>Space</kbd>. You can enter multiple hostnames/IP addresses to create an LDAP failover priority list. If a host does not respond, TrueNAS will try the next host until it establishes a connection. |
| Base DN | Top level of the LDAP directory tree to be used when searching for resources. Example: dc=test,dc=org. |
| Bind DN | Administrative account name on the LDAP server. Example: cn=Manager,dc=test,dc=org. |
| Bind Password | Password for the Bind DN. |
| Enable | Activates the configuration. Unset to disable the configuration without deleting it. You can re-enable it later without reconfiguring it. |

{{< expand "Advanced Configuration" "v" >}}
To further modify the LDAP configuration, click *Advanced Options*.

![LDAPAdvancedSCALE](/images/SCALE/LDAPAdvancedSCALE.png "LDAP Advanced Options")

| Field | Description |  
|-------|-------------|  
| Allow Anonymous Binding | Set for the LDAP server to disable authentication and allow read and write access to any client. |
| Encryption Mode | Options for encrypting the LDAP connection:  
* *OFF*: do not encrypt the LDAP connection.  
* * *ON*: encrypt the LDAP connection with SSL on port 636.  
* * *START_TLS*: encrypt the LDAP connection with STARTTLS on the default LDAP port *389*. |
| Certificate | Certificate to use when performing LDAP certificate-based authentication. To configure LDAP certificate-based authentication, create a Certificate Signing Request for the LDAP provider to sign. TrueNAS does not need a certificate when using username/password or Kerberos authentication. To configure LDAP certificate-based authentication, [create a Certificate Signing Request]({{< relref "/SCALE/SCALEUIReference/Credentials/Certificates/CertificatesSCALE.md" >}}) for the LDAP provider to sign. |
| Validate Certificates | Verify certificate authenticity. |
| Disable LDAP User/Group Cache | Disable caching LDAP users and groups in large LDAP environments. When caching is disabled, LDAP users and groups do not appear in drop-down menus but are still accepted when manually entered. |
| Kerberos Realm | Select an existing realm from *Kerberos Realms*. |
| Kerberos Principal | Select the location of the principal in the keytab created in *Kerberos Keytab*. |
| LDAP timeout | LDAP timeout in seconds. Increase this value if a Kerberos ticket timeout occurs. |
| DNS timeout | DNS timeout in seconds. Increase this value if DNS queries timeout. |
| Samba Schema | Only set if you configured the LDAP server with Samba attributes and it requires LDAP authentication for SMB shares. |
| Auxiliary Parameters | You can specify additional options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5). |
| Schema  | Schema to use with Samba Schema. |
| Edit Idmap  | The *Edit Idmap* button takes users to the *Idmap* configuration screen. |

{{< hint warning >}} 
**DEPRECATED:** Samba Schema support is deprecated in Samba 4.13. We will remove this feature after Samba 4.14. Users should begin upgrading legacy Samba domains to Samba AD domains. 
{{< /hint >}}
{{< /expand >}}

## Troubleshooting

If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync the cache using the *Rebuild Directory Service Cache*.
{{< /tab >}}
{{< /tabs >}}

## Advanced Settings

To view Idmap and Kerberos Services, click *Show* next to *Advanced Settings*.

### Idmap

The *Idmap* directory service lets users configure and select a backend to map Windows security identifiers (SIDs) to UNIX UIDs and GIDs. Users must enable the *Active Directory* service to configure and use Identity Mapping (Idmap).

![IdmapSCALE](/images/SCALE/IdmapSCALE.png "Idmap Window")

Users can click *Add* in the *Idmap* window to configure backends or click on an already existing Idmap to edit it.

![AddIdmapSCALE](/images/SCALE/AddIdmapSCALE.png "Add Idmap Form")

| Field | Description |
|---------|-------|
| Idmap Backend  | Provides a plugin interface for Winbind to use varying backends to store SID/uid/gid mapping tables. The correct setting depends on the environment you deployed the NAS in. |
| Name  | Enter the pre-Windows 2000 domain name. |
| DNS Domain Name  | DNS name of the domain. |
| Range Low | Range Low and Range High set the range of UID/GID numbers the IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS will ignore it. |
| Range High  | Range Low and Range High set the range of UID/GID numbers the IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, TrueNAS will ignore it. |
| SSSD Compat | Generate Idmap low range based on the same algorithm that SSSD uses by default. |

### Kerberos

[Kerberos](https://web.mit.edu/kerberos/) is a web authentication protocol that uses strong cryptography to prove the identity of both client and server over an insecure network connection.

Kerberos uses "realms" and "keytabs" to authenticate clients and servers.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.
A [keytab ("key table")](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys for authentication.

TrueNAS SCALE allows users to configure general Kerberos settings, as well as realms and keytabs.

{{< tabs "Kerberos" >}}
{{< tab "Kerberos Settings" >}}
Users can configure Kerberos settings by navigating to **Directory Services** and clicking *Settings* in the *Kerberos Settings* window.

![KerberosSettingsSCALE](/images/SCALE/KerberosSettingsSCALE.png "Kerberos Settings")

| Field | Description |
|---------|-------|
| Appdefaults Auxiliary Parameters | Additional Kerberos application settings. See [[appdefaults] in krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults) for settings and usage syntax. |
| Libdefaults Auxiliary Parameters | Additional Kerberos library settings. See [[libdefaults] in krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults) for settings and usage syntax. |
{{< /tab >}}

{{< tab "Kerberos Realms" >}}
Users can configure Kerberos realms by navigating to **Directory Services** and clicking *Add* in the *Kerberos Realms* window.

![KerberosRealmsSCALE](/images/SCALE/KerberosRealmsSCALE.png "Kerberos Realms Form")

| Field | Description |
|---------|-------|
| Realm | Enter the name of the realm. |
| KDC | Enter the name of the Key Distribution Center. Separate multiple values by pressing <kbd>Enter</kbd>. |
| Admin Server | Define the server that performs all database changes. Separate multiple values by pressing <kbd>Enter</kbd>. |
| Password Server | Define the server that performs all password changes. Separate multiple values by pressing <kbd>Enter</kbd>. |
{{< /tab >}}

{{< tab "Kerberos Keytabs" >}}
Kerberos keytabs let you join an Active Directory or LDAP server without a password.

Since TrueNAS does not save the Active Directory or LDAP administrator account password in the system database, keytabs can be a security risk in some environments.

{{< hint info >}}
When using a keytab, create and use a less-privileged account to perform queries.
TrueNAS will store that account's password in the system database.
{{< /hint >}}


#### Create Keytab on Windows

To create the keytab on a Windows system, use the [ktpass](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass) command:

`ktpass.exe /out file.keytab /princ http/user@EXAMPLE.COM /mapuser user /ptype KRB5_NT_PRINCIPAL /crypto ALL /pass userpass`

* `file.keytab` is the file to upload to the TrueNAS server.
* `user` is the user account name for the TrueNAS server generated in [Active Directory Users and Computers](https://technet.microsoft.com/en-us/library/aa998508(v=exchg.65).aspx).
* `http/user@EXAMPLE.COM` is the principal name written in the format `host/user.account@KERBEROS.REALM`.
  The Kerberos realm is usually in all caps, but be sure to match the Kerberos Realm case with the realm name. See [this note](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass#BKMK_remarks) about using `/princ` for more details.
* `userpass` is the `user`'s password.
* `/crypto` is the cryptographic type.

Setting `/crypto` to *ALL* allows using all supported cryptographic types.
You can use specific keys instead of using *ALL*:

* *DES-CBC-CRC* is backward compatible.
* *DES-CBC-MD5* adheres more closely to the MIT implementation and is backward compatible.
* *RC4-HMAC-NT* uses 128-bit encryption.
* *AES256-SHA1* uses AES256-CTS-HMAC-SHA1-96 encryption.
* *AES128-SHA1* uses AES128-CTS-HMAC-SHA1-96 encryption.

#### Add Windows Keytab to TrueNAS

After generating the keytab, go back to **Directory Services** in TrueNAS and click *Add* in the *Kerberos Keytab* window to add it to TrueNAS.

To make *AD* use the keytab, click *Settings* in the *Active Directory* window and select it using the *Kerberos Principal* drop-down.

When using a keytab with *AD*, ensure the keytab *username* and *userpass* match the *Domain Account Name* and *Domain Account Password*.

To make LDAP use a keytab principal, click *Settings* in the *LDAP* window and select the keytab using the *Kerberos Principal* drop-down.
{{< /tab >}}
{{< /tabs >}}
