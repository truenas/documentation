---
title: "Configuring Kerberos"
description: "Provides instructions on configuring and managing Kerberos realms and keytabs in TrueNAS."
weight: 70
aliases:
 - /scale/scaletutorials/credentials/directoryservices/configkerberosmscale/
tags:
- kerberos
keywords:
- enterprise data storage
- nas data storage 
doctype: tutorial
---


{{< include file="/static/includes/KerberosIntroWarnings.md" >}}

Kerberos uses *realms* and *keytabs* to authenticate clients and servers.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.
A [keytab ("key table")](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys for authentication.

TrueNAS allows users to configure general Kerberos settings, as well as realms and keytabs.

## Kerberos Realms
{{< hint type=note >}}
TrueNAS automatically generates a realm after you configure AD.
{{< /hint >}}

To configure Kerberos realms:

1. Go to **Credentials > Directory Services** and click **Show** in **Advanced Settings**, then click **Continue** on the warning dialog.

2. Click **Add** in the **Kerberos Realms** widget to open the **Add Kerberos Realm** screen.

3. Enter the realm name in **Realm**. Required. Enter the name as a domain name, for example, *example.com*.

4. (Optional) Enter the Key Distribution Center name in **KDC**. The KDC acts as the third-party authentication service for Kerberos. If left blank, TrueNAS uses DNS discovery to locate the KDC. Separate multiple values by pressing <kbd>Enter</kbd>.

5. (Optional) Enter the primary KDC in **Primary KDC**. The Kerberos client uses this KDC when acquiring credentials if the current KDC fails with a bad password error. This is valuable for domains with hub-and-spoke topology.

6. (Optional) Enter the server that performs all database changes in **Admin Server**. If left blank, TrueNAS uses DNS discovery. Separate multiple values by pressing <kbd>Enter</kbd>.

7. (Optional) Enter the server that performs all password changes in **Password Server**. If left blank, TrueNAS uses DNS discovery. Separate multiple values by pressing <kbd>Enter</kbd>.

8. Click **Save**. 

## Kerberos Keytabs
{{< hint type=note >}}
TrueNAS automatically generates a keytab after you configure AD.
{{< /hint >}}

A Kerberos keytab is a file containing one or more Kerberos principals with their associated encryption keys. TrueNAS automatically generates a keytab during the Active Directory domain join process. The keytab principals are typically associated with the TrueNAS host computer account.

Keytabs allow authentication without requiring password storage. TrueNAS does not store the Active Directory or LDAP administrator account password in the system database after the keytab is created.

### Adding a Keytab to TrueNAS

After generating the keytab:

1. Go to **Credentials > Directory Services** and click **Show** in **Advanced Settings**, then click **Continue** on the warning dialog.

2. Click **Add** in the **Kerberos Keytabs** widget to open the **Add Kerberos Keytab** screen.

3. Enter a name for the keytab in **Name**. If configured, TrueNAS populates this field with what it detects in Active Directory.

4. Browse to the keytab file in **Kerberos Keytab** and upload it.

5. Click **Save**.

### Using a Keytab with Active Directory or LDAP

To configure AD to use a keytab, go to the **Directory Services** screen, click **Settings** in the **Active Directory** widget, and select the keytab using the **Kerberos Principal** dropdown list.

The keytab must correspond to the computer account created during the domain join process.

To configure LDAP to use a keytab principal, click **Settings** in the **LDAP** widget and select the keytab using the **Kerberos Principal** dropdown list.

### Kerberos Settings

{{< include file="/static/includes/KerberosWarning.md" >}}

The **Kerberos Settings** screen is available in **Advanced Settings** for configuring auxiliary parameters.

To access Kerberos Settings:

1. Go to **Credentials > Directory Services** and click **Show** in **Advanced Settings**, then click **Continue** on the warning dialog.

2. Click **Settings** in the **Kerberos Settings** widget to open the **Kerberos Settings** screen.

3. (Optional) Enter additional Kerberos application settings in **Appdefaults Auxiliary Parameters**. See the *appdefaults* section of [krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.20/doc/admin/conf_files/krb5_conf.html) for available settings and usage syntax.

4. (Optional) Enter additional Kerberos library settings in **Libdefaults Auxiliary Parameters**. See the *libdefaults* section of [krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.20/doc/admin/conf_files/krb5_conf.html) for available settings and usage syntax.

5. Click **Save**.
