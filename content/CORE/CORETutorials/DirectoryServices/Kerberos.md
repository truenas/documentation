---
title: "Kerberos"
weight: 40
---

{{< toc >}}

[Kerberos](https://web.mit.edu/kerberos/) is a web authentication protocol that uses strong cryptography to prove the identity of both client and server over an insecure network connection.

Kerberos uses "realms" and "keytabs" to authenticate clients and servers.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.
A [keytab ("key table")](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys for various authentication scenarios.

TrueNAS allows configuring both Kerberos realms and keytabs.

## Kerberos Realms

Your network must contain a Key Distribution Center (KDC) to add a realm.
Users can configure Kerberos realms by navigating to **Directory Services** > **Kerberos Realms** and clicking *ADD*.

![DirectoryServicesKerberosRealmsAdd](/images/CORE/12.0/DirectoryServicesKerberosRealmsAdd.png "Directory Services Kerberos Realms Add")

Enter the *Realm* name and click *SUBMIT*.

{{< expand "Advanced Options" "v" >}}

| Setting | Description |
|---------|-------------|
| KDC | Enter the name of the Key Distribution Center. Separate multiple values by pressing <kbd>Enter</kbd>. |
| Admin Server | Define the server where all changes to the database are performed. Separate multiple values by pressing <kbd>Enter</kbd>. |
| Password Server | Define the server where all password changes are performed. Separate multiple values by pressing <kbd>Enter</kbd>. |
{{< /expand >}}

## Kerberos Keytabs

Kerberos keytabs allow systems and clients to join an Active Directory or LDAP without a password.
With keytabs, the TrueNAS system database does not store the Active Directory or LDAP administrator account password, which can be a security risk in some environments.

When using a keytab, create and use a less privileged account to perform any required queries.
The TrueNAS system database stores the password for that account.

### Create Keytab on Windows Server for Active Directory

To create the keytab on a Windows Server system, open a Command Prompt and use the [ktpass](https://techjogging.com/create-keytab-file-for-kerberos-authentication-in-windows.html) command:

`ktpass -princ USERNAME@REALM.COM -pass PASSWORD -crypto ENCRYPTION TYPE -ptype KRB5_NT_PRINCIPAL -kvno 0 -out c:\PATH\KEYTABNAME.KEYTAB`

`USERNAME@REALM.COM` is the Windows Server user and principal name written in the format username@KERBEROS.REALM.
The Kerberos Realm is typically in all caps, but the Kerberos Realm case should match the realm name.
See [this note](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ktpass#BKMK_remarks) about using `/princ` for more details.

`PASSWORD` is the Windows Server user's password.

`ENCRYPTION TYPE` is the cryptographic type you want to use. Setting `ENCRYPTION TYPE` to `ALL` allows using all supported cryptographic types.
Users can specify each key instead of ALL:
* *DES-CBC-CRC* is used for compatibility.
* *DES-CBC-MD5* is used for compatibility and adheres more closely to the MIT implementation.
* *RC4-HMAC-NT* uses 128-bit encryption.
* *AES256-SHA1* uses AES256-CTS-HMAC-SHA1-96 encryption.
* *AES128-SHA1* uses AES128-CTS-HMAC-SHA1-96 encryption.
Specifying cryptographic types creates a keytab with sufficient privileges to grant tickets.

`PATH\KEYTABNAME.KEYTAB` is the path where you want to save the keytab and the name you want it to have.

An example ktpass command would look like this:

`ktpass -princ admin@WINDOWSSERVER.NET -pass Abcd1234! -crypto ALL -ptype KRB5_NT_PRINCIPAL -kvno 0 -out c:\kerberos\freenas.keytab`

### Add Windows Keytab to TrueNAS

After generating the keytab, add it to the TrueNAS system in **Directory Services > Kerberos Keytabs > Add Kerberos Keytab**.

To instruct the Active Directory service to use the keytab, go to **Directory Services > Active Directory** and click *Advanced Options*. Select the installed keytab using the *Kerberos Principal* drop-down.

When using a keytab with Active Directory, *username* and *userpass* in the keytab should match the *Domain Account Name* and *Domain Account Password* fields in **Directory Services > Active Directory**.

To instruct LDAP to use a principal from the keytab,  go to **Directory Services > Active Directory** and click *Advanced Options*, then select the installed keytab using the *Kerberos Principal* drop-down.

## Kerberos Settings

Additional Kerberos options are in **Directory Services > Kerberos Settings**.

![DirectoryServicesKerberosSettings](/images/CORE/12.0/DirectoryServicesKerberosSettings.png "Kerberos Settings")

* *Appdefaults Auxiliary Parameters*: Define any additional settings for use by some Kerberos applications.
  The available settings and syntax is listed in the [[appdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults).
* *Libdefaults Auxiliary Parameters*: Define any settings used by the Kerberos library.
  The available settings and their syntax are listed in the [[libdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults).
