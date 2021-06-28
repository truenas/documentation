---
title: "Kerberos"
weight: 40
---

{{< toc >}}

[Kerberos](https://web.mit.edu/kerberos/) is a web authentication protocol that uses strong cryptography to prove the identity of both client and server over an insecure network connection.

Kerberos uses "realms" and "keytabs" to authenticate clients and servers.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.
A [keytab ("key table")](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys and is used for various authentication scenarios.

TrueNAS SCALE allows users to configure general Kerberos settings, as well as realms and keytabs.

## Kerberos Settings

Users can configure Kerberos settings by navigating to **Directory Services** and clicking *Settings* in the *Kerberos Settings* window.

![KerberosSettingsSCALE](/images/SCALE/KerberosSettingsSCALE.png "Kerberos Settings")

| Field | Description |
|---------|-------|
| Appdefaults Auxiliary Parameters | Additional Kerberos application settings. See the [[appdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults) for available settings and usage syntax. |
| Libdefaults Auxiliary Parameters | Additional Kerberos library settings. See the [[libdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults) for available settings and usage syntax. |

## Kerberos Realms

Users can configure Kerberos realms by navigating to **Directory Services** and clicking *Add* in the *Kerberos Realms* window.

![KerberosRealmsSCALE](/images/SCALE/KerberosRealmsSCALE.png "Kerberos Realms Form")

| Field | Description |
|---------|-------|
| Realm | Enter the name of the realm. |
| KDC | Enter the name of the Key Distribution Center. Separate multiple values by pressing <kbd>Enter</kbd>. |
| Admin Server | Define the server where all changes to the database are performed. Separate multiple values by pressing <kbd>Enter</kbd>. |
| Password Server | Define the server where all password changes are performed. Separate multiple values by pressing <kbd>Enter</kbd>. |

## Kerberos Keytabs

Kerberos keytabs are for joining Active Directory or LDAP without a password.

Since the password for the Active Directory or LDAP administrator account is not saved in the TrueNAS system database, keytabs can be a security risk in some environments.

{{< hint info >}}
When using a keytab, create and use a less privileged account for performing any required queries.
The password for that account is stored in the TrueNAS system database.
{{< /hint >}}


### Create Keytab on Windows

To create the keytab on a Windows system, use the [ktpass](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass) command:

`ktpass.exe /out freenas.keytab /princ http/useraccount@EXAMPLE.COM /mapuser useraccount /ptype KRB5_NT_PRINCIPAL /crypto ALL /pass userpass`

where: 

* *freenas.keytab* is the file to upload to the TrueNAS server.
* *useraccount* is the name of the user account for the TrueNAS server generated in [Active Directory Users and Computers](https://technet.microsoft.com/en-us/library/aa998508(v=exchg.65).aspx.
* *http/useraccount@EXAMPLE.COM* is the principal name written in the format host/user.account@KERBEROS.REALM.
  By convention, the Kerberos realm is written in all caps, but make sure the case used for the Kerberos Realm matches the realm name.
  See [this note](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass#BKMK_remarks) about using `/princ` for more details.
* *userpass* is the password associated with *useraccount*.

Setting `/crypto` to *ALL* allows using all supported cryptographic types.
These keys can be specified instead of ALL:

* *DES-CBC-CRC* is used for compatibility.
* *DES-CBC-MD5* adheres more closely to the MIT implementation and is used for compatibility.
* *RC4-HMAC-NT* uses 128-bit encryption.
* *AES256-SHA1* uses AES256-CTS-HMAC-SHA1-96 encryption.
* *AES128-SHA1* uses AES128-CTS-HMAC-SHA1-96 encryption.

This creates a keytab with sufficient privileges to grant tickets.

### Add Windows Keytab to TrueNAS

After generating the keytab, navigate back to **Directory Services** in TrueNAS SCALE and click *add* in the *Kerberos Keytab* window to add the keytab to the TrueNAS system.

To instruct the *Active Directory* service to use the keytab, click *Settings* in the *Active Directory* window and select the installed keytab using the *Kerberos Principal* drop-down.

When using a keytab with Active Directory, make sure that *username* and *userpass* in the keytab match the *Domain Account Name* and *Domain Account Password*.

To instruct LDAP to use a principal from the keytab, click *Settings* in the *LDAP* window and select the installed keytab using the *Kerberos Principal* drop-down.
