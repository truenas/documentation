---
title: "Configuring Kerberos"
description: "This article provides instructions on configuring and managing Kerberos realms and keytabs in SCALE."
weight: 25
aliases:
tags:
- scaleKerberos
- scaledirectoryservices
---

{{< toc >}}


[Kerberos](https://web.mit.edu/kerberos/) is a web authentication protocol that uses strong cryptography to prove the identity of both client and server over an insecure network connection.

Kerberos uses *realms* and *keytabs* to authenticate clients and servers.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.
A [keytab ("key table")](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys for authentication.

TrueNAS SCALE allows users to configure general Kerberos settings, as well as realms and keytabs.

### Kerberos Settings

Users can configure Kerberos settings by navigating to **Directory Services** and clicking **Settings** in the **Kerberos Settings** window.

![KerberosSettingsSCALE](/images/SCALE/KerberosSettingsSCALE.png "Kerberos Settings")

| Field | Description |
|---------|-------|
| **Appdefaults Auxiliary Parameters** | Additional Kerberos application settings. See [[appdefaults] in krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults) for settings and usage syntax. |
| **Libdefaults Auxiliary Parameters** | Additional Kerberos library settings. See [[libdefaults] in krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults) for settings and usage syntax. |

### Kerberos Realms

Users can configure Kerberos realms by navigating to **Directory Services** and clicking **Add** in the **Kerberos Realms** window.

![KerberosRealmsSCALE](/images/SCALE/KerberosRealmsSCALE.png "Kerberos Realms Form")

Enter the realm and key distribution (KDC) names, then define the admin and password servers for the realm.

TrueNAS automatically generates a realm after you configure AD or LDAP.

### Kerberos Keytabs

Kerberos keytabs let you join an Active Directory or LDAP server without a password.

TrueNAS automatically generates a Keytab after you configure AD or LDAP.

Since TrueNAS does not save the Active Directory or LDAP administrator account password in the system database, keytabs can be a security risk in some environments.

{{< hint info >}}
When using a keytab, create and use a less-privileged account to perform queries.
TrueNAS stores that account password in the system database.
{{< /hint >}}

#### Creating a Keytab on Windows

To create a keytab on a Windows system, use the [ktpass](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass) command:

`ktpass.exe /out file.keytab /princ http/user@EXAMPLE.COM /mapuser user /ptype KRB5_NT_PRINCIPAL /crypto ALL /pass userpass`

* `file.keytab` is the file to upload to the TrueNAS server.
* `user` is the user account name for the TrueNAS server generated in [Active Directory Users and Computers](https://technet.microsoft.com/en-us/library/aa998508(v=exchg.65).aspx).
* `http/user@EXAMPLE.COM` is the principal name written in the format `host/user.account@KERBEROS.REALM`.
  The Kerberos realm is usually in all caps, but be sure to match the Kerberos Realm case with the realm name. See [this note](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass#BKMK_remarks) about using `/princ` for more details.
* `userpass` is the `user`'s password.
* `/crypto` is the cryptographic type.

Setting `/crypto` to **ALL** allows using all supported cryptographic types.
You can use specific keys instead of using **ALL**:

* *DES-CBC-CRC* is backward compatible.
* *DES-CBC-MD5* adheres more closely to the MIT implementation and is backward compatible.
* *RC4-HMAC-NT* uses 128-bit encryption.
* *AES256-SHA1* uses AES256-CTS-HMAC-SHA1-96 encryption.
* *AES128-SHA1* uses AES128-CTS-HMAC-SHA1-96 encryption.

#### Adding the Windows Keytab to TrueNAS

After generating the keytab, go back to **Directory Services** in TrueNAS and click **Add** in the **Kerberos Keytab** window to add it to TrueNAS.

To make AD use the keytab, click **Settings** in the **Active Directory** window and select it using the **Kerberos Principal** drop-down.

When using a keytab with AD, ensure the keytab **username** and **userpass** match the **Domain Account Name** and **Domain Account Password**.

To make LDAP use a keytab principal, click **Settings** in the **LDAP** window and select the keytab using the **Kerberos Principal** drop-down.


{{< taglist tag="scalekerberos" limit="10" >}}
{{< taglist tag="scaledirectoryservices" limit="10" title="Related Directory Services Articles" >}}