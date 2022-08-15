---
title: "Kerberos Screens"
description: "Use the Kerberos screen to configure to configure Kerberos realms and keytabs on your TrueNAS"
weight: 40
tags:
- corekerberos
---

Kerberos is an authentication protocol. It allows nodes on a network to perform identity checks in a secure manner. 
Kerberos uses realms and keytabs to authenticate clients and servers. 
Go to **Directory Services > Kerberos** to configure Kerberos. These screens configure Kerberos realms and keytabs on your TrueNAS.

![KerberosRealmsScreen](/images/CORE/13.0/KerberosRealmsScreen.png "Kerberos Realms Screen")

Both **Kerberos Realms** and **Kerberos Keytabs** display a table of what is currently on the system.  

Click the blue **Columns** button to display a list of options. These options customize the table display. This button is available for both the realms and keytabs screens.

Click **ADD** to display the settings screens for either realms or keytabs.

Select **Kerberos Settings** to open the settings screen but no table.

## Kerberos Realms

Your network must contain a Key Distribution Center (KDC) to add a realm.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.

Click **ADD** to create a realm on the TrueNAS. Click **SUBMIT** to save changes.

![KerberosRealmAdvancedOptions](/images/CORE/13.0/KerberosRealmAdvancedOptions.png "Kerberos Realm Add Screen")

**Basic Options**

| Name | Description |
|---------|-------------|
| **Realm** | Enter a name for the realm. |

**Advanced Options**
| Name | Description |
|---------|-------------|
| **KDC** | Enter the name of the Key Distribution Center. If there is more than one value separate the values by pressing <kbd>Enter</kbd>. |
| **Admin Server** | Define the server that performs all changes to the database. If there is more than one value separate the values by pressing <kbd>Enter</kbd>. |
| **Password Server** | Define the server that performs all password changes. If there is more than one value separate the values by pressing <kbd>Enter</kbd>. |

## Kerberos Keytabs

A [keytab (key table)](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys for various authentication scenarios.
Kerberos keytabs allow systems and clients to join an Active Directory or LDAP. Keytabs make it possible to join without entering a password.

After generating the keytab, use the **Add Kerberos Keytab** screen to add it to your TrueNAS.

![KerberosKeytabAddScreen](/images/CORE/13.0/KerberosKeytabAddScreen.png "Kerberos Keytab Add Screen")

**Kerberos Keytab**

| Name | Description |
|---------|-------------|
| **Name** | Enter a name for the keytab. |
| **Choose File** | Opens a file explorer window where you can locate and select the keytab file. |

Click **SUBMIT** to save settings or **CANCEL** to exit without saving.

## Kerberos Settings

Use the  **Directory Services > Kerberos Settings** screen to enter any extra settings.

![KerberosSettingsScreen](/images/CORE/13.0/KerberosSettingsScreen.png "Kerberos Settings")

| Name | Description |
|---------|-------------|
| **Appdefaults Auxiliary Parameters** | Define any extra settings for use by some Kerberos applications. [[appdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults) lists the available settings and syntax. |
| **Libdefaults Auxiliary Parameters** | Define any settings used by the Kerberos library. [[libdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults) lists the available settings and their syntax. |

{{< taglist tag="corekerberos" limit="10" >}}
