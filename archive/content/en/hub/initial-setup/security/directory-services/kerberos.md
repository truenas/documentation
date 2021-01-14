---
title: "Kerberos"
description: "Configuring Kerberos, Kerberos Realms, and Kerberos Keytabs."
tags: ["Kerberos", "security", "AD", "networking"]
---

[Kerberos](https://web.mit.edu/kerberos/) is a web authentication protocol that uses strong cryptography to prove the identity of both client and server over an insecure network connection.
Kerberos uses "realms" and "keytabs" to authenticate clients and servers.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.
A [keytab ("key table")](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys and is used for various authentication scenarios.

TrueNAS allows configuring both Kerberos realms and keytabs.

## Kerberos Realms

 **Directory Services** > **Kerberos Realms** can be used to view and add Kerberos realms. If the network contains a Key Distribution Center (KDC), click `ADD` to add the realm. 

<img src="/images/DirectoryServicesKerberosRealmsAdd.png">
<br><br>

### Kerberos Realm Options

Some settings are only available in Advanced Mode. To see these settings, either click `ADVANCED MODE` or configure the system to always display these settings by setting `Show advanced fields by default` in **System** > **Advanced**.

| Setting         | Value  | Advanced Mode | Description                                             |
|-----------------|--------|---------------|---------------------------------------------------------|
| Realm           | string |               | Name of the realm.                                      |
| KDC             | string | ✓             | Name of the Key Distribution Center.                    |
| Admin Server    | string | ✓             | Server where all changes to the database are performed. |
| Password Server | string | ✓             | Server where all password changes are performed.        |


## Kerberos Keytabs

Kerberos keytabs are for joining Active Directory or LDAP without a password.
This means the password for the Active Directory or LDAP administrator account is not saved in the TrueNAS system database, which can be seen as a security risk in some environments.

When using a keytab, it is recommended to create and use a less privileged account for performing the required queries as the password for that account is stored in the TrueNAS system database.
To create the keytab on a Windows system, use the [ktpass](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass) command:

`ktpass.exe /out freenas.keytab /princ http/useraccount@EXAMPLE.COM /mapuser useraccount /ptype KRB5_NT_PRINCIPAL /crypto ALL /pass userpass`

where: 

+ **freenas.keytab** is the file to upload to the TrueNAS server.
+ **useraccount** is the name of the user account for the TrueNAS server generated in [Active Directory Users and Computers](https://technet.microsoft.com/en-us/library/aa998508(v=exchg.65).aspx.
+ **http/useraccount@EXAMPLE.COM** is the principal name written in the format host/user.account@KERBEROS.REALM. By convention, the kerberos realm is written in all caps, but make sure the case used for the Kerberos Realm matches the realm name. See [this note](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass#BKMK_remarks) about using `/princ` for more details.
+ **userpass** is the password associated with **useraccount**.

Setting `/crypto` to *ALL* allows using all supported cryptographic types. These keys can be specified instead of ALL:

+ *DES-CBC-CRC* is used for compatibility.
+ *DES-CBC-MD5* adheres more closely to the MIT implementation and is used for compatibility.
+ *RC4-HMAC-NT* uses 128-bit encryption.
+ *AES256-SHA1* uses AES256-CTS-HMAC-SHA1-96 encryption.
+ *AES128-SHA1* uses AES128-CTS-HMAC-SHA1-96 encryption.

This will create a keytab with sufficient privileges to grant tickets.

After the keytab is generated, add it to the TrueNAS system using **Directory Services > Kerberos Keytabs > Add Kerberos Keytab**.

To instruct the Active Directory service to use the keytab, select the installed keytab using the drop-down **Kerberos Principal** in **Directory Services > Active Directory > Advanced Mode**.
When using a keytab with Active Directory, make sure that *username* and *userpass* in the keytab matches the **Domain Account Name** and **Domain Account Password** fields in **Directory Services > Active Directory**.

To instruct LDAP to use a principal from the keytab, use the **Kerberos Principal** drop down in **Directory Services > LDAP > Advanced Mode**.

## Kerberos Settings

Additional Kerberos options are in **Directory Services > Kerberos Settings**.

<img src="/images/DirectoryServicesKerberosSettings.png">
<br><br>

+ **Appdefaults Auxiliary Parameters**: Define any additional settings for use by some Kerberos applications. The available settings and syntax is listed in the [[appdefaults] section of krb.conf(5)](http://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults).

+ **Libdefaults Auxiliary Parameters**: Define any settings used by the Kerberos library. The available settings and their syntax are listed in the [[libdefaults] section of krb.conf(5)](http://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults).
