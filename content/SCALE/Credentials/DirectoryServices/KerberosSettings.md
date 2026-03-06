---
title: "Kerberos Settings Screen"
description: "Provides information on the **Kerberos Settings** widget and configuration screen settings."
weight: 80
aliases:
 - /scale/scaleuireference/credentials/directoryservices/kerberossettings/
 - /scale/credentials/directoryservices/activedirectoryscale/
 - /scale/credentials/directoryservices/ldapscale/
 - /scale/credentials/directoryservices/idmapscale/
 - /scale/credentials/directoryservices/kerberosscale/
tags:
- kerberos
doctype: reference
---


{{< include file="/static/includes/KerberosIntroWarnings.md" >}}

## Advanced Settings

{{< include file="/static/includes/KerberosWarning.md" >}}

The **Advanced Settings** screen options do not show until you click **Show**.
A warning message shows first and must be acknowledged.
**Continue** closes the warning and shows the the **Kerberos Realms** and **Kerberos Keytabs** cards.

![DirectoryServicesAdvancedSettingsWarning](/images/SCALE/Credentials/DirectoryServicesAdvancedSettingsWarning.png "Advanced Settings Warning")

{{< hint type=note >}}
Advanced Kerberos auxiliary parameter configuration options are removed in TrueNAS 25.10. Kerberos settings are now managed through the unified directory services configuration.
{{< /hint >}}

### Add Kerberos Realm Screen {id="kerberos_add_realm"}

{{< include file="/static/includes/KerberosWarning.md" >}}

The **Add Kerberos Realm** allows you to create a new Kerberos realm in TrueNAS. This screen is for advanced configuration users that understand Kerberos!

![AddKerberosRealmScreen](/images/SCALE/Credentials/AddKerberosRealmScreen.png "Add Kerberos Realm Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Realm** | Set the name of the realm. The realm name usually matches the DNS domain in all caps by convention (for example, *EXAMPLE.COM*). It is the identifier for the entire authentication boundary. |
| **Primary KDC** | Sets the master Kerberos domain controller KDC (Key Distribution Center) for this realm. It is the one that issues tickets. If you cannot reach it, you cannot authenticate. TrueNAS uses this as a fallback if it cannot get credentials because of an invalid password. This can help in environments where the domain uses a hub-and-spoke topology. Use this setting to reduce credential errors after TrueNAS automatically changes its machine password. |
| **KDC** | Sets additional/secondary KDC(s) for redundancy. If the primary KDC is unavailable, Kerberos can fall back to these. Environments with hub-and-spoke topology often have multiple KDCs. |
| **Admin Servers** | Defines the server where all changes (adding/modifying principals) to the database are performed. Separate multiple values by pressing <kbd>Enter</kbd>. It is not the same as KDC. You can have many KDCs but typically only one admin server. |
| **Password Servers** | Defines the server where all password changes are performed. It is often the same host as the admin server but can be separate. Separate multiple values by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}

### Add Kerberos Keytab Screen {id="kerberos_add_keytab"}

The **Add Kerberos Ketab** allows you to create a new Kerberos keytab in TrueNAS. This screen is for advanced configuration users that understand Kerberos!

![AddKerberosKeytabScreen](/images/SCALE/Credentials/AddKerberosKeytabScreen.png "Add Kerberos Keytab Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Sets a descriptive label that identifies this keytab in TrueNAS. Use a name that indicates the associated service or host (for example, *truenas-host* or *nfs-service*). |
| **Kerberos Keytab** | Uploads the keytab file exported from your KDC or Active Directory server. A keytab stores encrypted Kerberos credentials that allow TrueNAS to authenticate to Kerberos services without an interactive password prompt. Select the keytab using the **Choose File** button to open a file browser window. The file must be in standard keytab format (*.keytab*). |
{{< /truetable >}}
