---
title: "Kerberos Realms Screens"
description: "Provides information on the **Kerberos Realms** widget and configuration screen settings."
weight: 50
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
The **Kerberos Realms** screen displays a list view of realms configured on your SCALE system.

![KerberosRealmsScreen](/images/SCALE/Credentials/KerberosRealmsScreen.png "Kerberos Realms Screen")

**Actions** includes the option to **Add** a new realm. **Add** opens the **Add Kerberos Realm** screen.

The <span class="material-icons">more_vert</span> button opens the actions options for the selected realm. Options are **Edit** which opens the **Edit Kerberos Realm** screen for the selected realm, and **Delete** that opens a delete confirmation dialog.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Add and Edit Kerberos Realm Screens
The settings found on the **Add Kerberos Realm** and **Edit Kerberos Realm** screens are the same. 

{{< include file="/static/includes/KerberosWarnings.md" >}}

![AddKerberosRealmScreen](/images/SCALE/Credentials/AddKerberosRealmScreen.png "Add Kerberos Realms Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Realm** | (Required) Enter the name of the realm as a domain name, For example, *example.com*. AD configured SCALE systems pre-populate this field with the required information. |
| **KDC** | Enter the name of the Key Distribution Center (KDC).The KDC acts as as the third-party authentication service for Kerberos. Separate multiple values by pressing <kbd>Enter</kbd>. For example, *kdc1.example.com* press <kbd>Enter</kbd> then *kdc2.example.com*. |
| **Admin Server** | Define the server that performs all database changes. Separate multiple values by pressing <kbd>Enter</kbd>. |
| **Password Server** | Define the server that performs all password changes. Separate multiple values by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}
