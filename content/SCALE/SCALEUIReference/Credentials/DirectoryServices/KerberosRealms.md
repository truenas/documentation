---
title: "Kerberos Realms Screens"
description: "Provides information on the **Kerberos Realms** widget and configuration screen settings."
weight: 50
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
  - /scale/scaleclireference/directory-service/clikerberos/
tags:
- kerberos
---

{{< include file="/static/includes/KerberosIntroWarnings.md" >}}

## Kerberos Realm Widget

The **Kerberos Realms** widget in the **Advanced Settings** on the **Directory Services** screen displays currently configured realms. 

![KerberosRealmsWidget](/images/SCALE/Credentials/KerberosRealmsWidget.png "Kerberos Realms Widget")

**Add** opens the **Add Kerberos Realm** configuration screen.

Click on any instance to open the **Edit Kerberos Realm** screen.

Click on the **Kerberos Realms** widget header to open the **Kerberos Realms** screen.

## Kerberos Realms Screen
The **Kerberos Realms** screen displays a list view of realms configured on your TrueNAS system.

![KerberosRealmsScreen](/images/SCALE/Credentials/KerberosRealmsScreen.png "Kerberos Realms Screen")

**Actions** includes the option to **Add** a new realm. **Add** opens the **Add Kerberos Realm** screen.

The <i class="material-icons" aria-hidden="true" title="Configure">edit</i> button opens the **Edit Kerberos Realm** screen for the selected realm. The <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button opens a delete confirmation dialog for the Kerberos realm.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Add and Edit Kerberos Realm Screens
The settings found on the **Add Kerberos Realm** and **Edit Kerberos Realm** screens are the same. 

{{< include file="/static/includes/KerberosWarnings.md" >}}

![AddKerberosRealmScreen](/images/SCALE/Credentials/AddKerberosRealmScreen.png "Add Kerberos Realms Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Realm** | (Required) Enter the name of the realm as a domain name, For example, *example.com*. AD configured TrueNAS systems pre-populate this field with the required information. |
| **KDC** | Enter the name of the Key Distribution Center (KDC).The KDC acts as as the third-party authentication service for Kerberos. Separate multiple values by pressing <kbd>Enter</kbd>. For example, *kdc1.example.com* press <kbd>Enter</kbd> then *kdc2.example.com*. |
| **Primary KDC** | Specifies the primary Key Distribution Center(KDC) for the realm. The Kerberos client uses this KDC when acquiring credentials if the current KDC fails with a bad password error. This is valuable for domains with hub-and-spoke topology where password changes slowly propagate from the hub to the spoke. |
| **Admin Server** | Define the server that performs all database changes. Separate multiple values by pressing <kbd>Enter</kbd>. |
| **Password Server** | Define the server that performs all password changes. Separate multiple values by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}
