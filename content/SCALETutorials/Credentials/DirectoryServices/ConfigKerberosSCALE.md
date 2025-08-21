---
title: "Configuring Kerberos"
description: "Provides instructions on configuring and managing Kerberos realms and keytabs in TrueNAS."
weight: 25
aliases:
tags:
- kerberos
keywords:
- enterprise data storage
- nas data storage 
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

Users can configure Kerberos realms by navigating to **Directory Services** and clicking **Add** in the **Kerberos Realms** window.

![KerberosRealmsScreen](/images/SCALE/Credentials/KerberosRealmsScreen.png "Kerberos Realms Screen")

Enter the realm and key distribution (KDC) names, then define the admin and password servers for the realm.

{{<include file="/static/includes/addcolumnorganizer.md">}}

Click **Save**. 

## Kerberos Keytabs
{{< hint type=note >}}
TrueNAS automatically generates a keytab after you configure AD.
{{< /hint >}}

A Kerberos keytab replaces the administration credentials for Active Directory after intial configuration. 
Since TrueNAS does not save the Active Directory or LDAP administrator account password in the system database, keytabs can be a security risk in some environments.

When using a keytab, create and use a less-privileged account to perform queries.
TrueNAS stores that account password in the system database.

### Adding the Windows Keytab to TrueNAS

After generating the keytab, go back to **Directory Services** in TrueNAS and click **Add** in the **Kerberos Keytab** window to add it to TrueNAS.

To make AD use the keytab, click **Settings** in the **Active Directory** window and select it using the **Kerberos Principal** dropdown list.

When using a keytab with AD, ensure the keytab **username** and **userpass** match the **Domain Account Name** and **Domain Account Password**.

To make LDAP use a keytab principal, click **Settings** in the **LDAP** window and select the keytab using the **Kerberos Principal** dropdown list.

### Kerberos Settings

{{< hint type=warning >}}
If you do not understand Kerberos auxiliary parameters, do not attempt to configure new settings!
{{< /hint >}}

The **Kerberos Settings** screen includes two fields used to configure auxiliary parameters.

![KerberosSettingsScreen](/images/SCALE/Credentials/KerberosSettingsScreen.png "Kerberos Settings Screen")

{{< include file="/static/includes/KerberosWarning.md" >}}
