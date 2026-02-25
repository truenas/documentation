---
title: "Kerberos Keytab Screens"
description: "Provides information on the **Kerberos Keytabs** screen and widget settings."
weight: 60
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
tags:
- kerberos
---

{{< include file="/static/includes/KerberosIntroWarnings.md" >}}

## Kerberos Keytab Widget

The **Kerberos Keytab** widget in the **Advanced Settings** on the **Directory Services** screen displays added keytabs.

![KerberosKeytabWidget](/images/SCALE/Credentials/KerberosKeytabWidget.png "Kerberos Keytab Widget")

**Add** opens the **Add Kerberos Keytab** configuration screen.

**Sync** synchronizes Kerberos keytabs with Active Directory. This button only appears when the system is joined to Active Directory. Click **Sync** to open the synchronization confirmation dialog.

{{< trueimage src="/images/SCALE/Credentials/SyncKeytabDialog.png" alt="Sync Keytab Confirmation" id="Sync Keytab Confirmation Dialog" >}}

Click on any keytab instance to open the **Edit Kerberos Keytab** screen.

The **Kerberos Keytab** widget header opens the **Kerberos Keytabs** screen.

## Kerberos Keytab Screen

The **Kerberos Keytabs** screen displays a list view of keytabs configured on your TrueNAS system.

![KerberosKeytabsScreen](/images/SCALE/Credentials/KerberosKeytabsScreen.png "Kerberos Keytabs Screen")

**Actions** includes options to **Add** a new keytab or **Sync** keytabs with Active Directory:

* **Add** opens the **Add Kerberos Keytab** screen.

* **Sync** synchronizes Kerberos keytabs with Active Directory. This button only appears when the system is joined to Active Directory. Click **Sync** to open the synchronization confirmation dialog.

  {{< trueimage src="/images/SCALE/Credentials/SyncKeytabDialog.png" alt="Sync Keytab Confirmation" id="Sync Keytab Confirmation Dialog" >}}

The <span class="material-icons">more_vert</span> button opens the actions options for the selected keytab. Options are **Edit** which opens the **Edit Kerberos Keytab** screen for the selected keytab, and **Delete** that opens a delete confirmation dialog.

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Add and Edit Kerberos Keytab Screens
The settings found on the **Add Kerberos Keytab** and **Edit Kerberos Keytab** screens are the same. 

{{< include file="/static/includes/KerberosWarnings.md" >}}

![AddKerberosKeytabScreen](/images/SCALE/Credentials/AddKerberosKeytabScreen.png "Add Kerberos Keytab")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for this Keytab. If configured, TrueNAS populates this field with what it detects in Active Directory. |
| **Kerberos Keytab** | Browse to the keytab file to upload. |
{{< /truetable >}}
