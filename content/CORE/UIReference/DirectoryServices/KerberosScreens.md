---
title: "Kerberos Screens"
description: "Use the Kerberos screen to configure to configure Kerberos realms and keytabs on your TrueNAs"
weight: 40
tags:
- corekerberos
---


Use the **Directory Services > Kerberos** screens to configure Kerberos realms and keytabs on your TrueNAs. 
Kerberos uses realms and keytabs to authenticate clients and servers.

![KerberosRealmsScreen](/images/CORE/13.0/KerberosRealmsScreen.png "Kerberos Realms Screen")

Both the **Kerberos Realms** and the **Kerberos Keytabs** screens display a table of what is added to the system. 

Use the blue **Columns** button to display a list of options to customize the table displays for both the realms and keytabs screens.

Use **ADD** to display the settings screens for either realms or keytabs.

Selecting **Kerberos Settings** opens the settings screen but no table.

## Kerberos Realms

Your network must contain a Key Distribution Center (KDC) to add a realm.
A Kerberos realm is an authorized domain that a Kerberos server can use to authenticate a client.
By default, TrueNAS creates a Kerberos realm for the local system.

Use **ADD** to create a realm on the TrueNAS. Use **SUBMIT** to save changes.

![KerberosRealmAdvancedOptions](/images/CORE/13.0/KerberosRealmAdvancedOptions.png "Kerberos Realm Add Screen")

**Basic Options**

| Setting | Description |
|---------|-------------|
| **Realm** | Enter a name for the realm. |

**Advanced Options**
| Setting | Description |
|---------|-------------|
| **KDC** | Enter the name of the Key Distribution Center. Separate multiple values by pressing <kbd>Enter</kbd>. |
| **Admin Server** | Define the server where all changes to the database are performed. Separate multiple values by pressing <kbd>Enter</kbd>. |
| **Password Server** | Define the server where all password changes are performed. Separate multiple values by pressing <kbd>Enter</kbd>. |

## Kerberos Keytabs

A [keytab (key table)](https://web.mit.edu/kerberos/krb5-devel/doc/basic/keytab_def.html) is a file that stores encryption keys for various authentication scenarios.
Kerberos keytabs allow systems and clients to join an Active Directory or LDAP without a password.

After generating the keytab, use the **Add Kerberos Keytab** screen to add it to your TrueNAS.

![KerberosKeytabAddScreen](/images/CORE/13.0/KerberosKeytabAddScreen.png "Kerberos Keytab Add Screen")

**Kerberos Keytab**

| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the keytab. |
| **Choose File** | Opens a file explorer window where you can locate and select the keytab file. |

Use **SUBMIT** to save settings or **CANCEL** to exit without saving.

## Kerberos Settings

Use the  **Directory Services > Kerberos Settings** screen to enter an additional settings.

![KerberosSettingsScreen](/images/CORE/13.0/KerberosSettingsScreen.png "Kerberos Settings")

| Setting | Description |
|---------|-------------|
| **Appdefaults Auxiliary Parameters** | Define any additional settings for use by some Kerberos applications. The available settings and syntax are listed in the [[appdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#appdefaults). |
| **Libdefaults Auxiliary Parameters** | Define any settings used by the Kerberos library. The available settings and their syntax are listed in the [[libdefaults] section of krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html#libdefaults). |

{{< taglist tag="corekerberos" limit="10" >}}
