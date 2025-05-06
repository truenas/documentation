---
title: "Audit Screen"
description: "Provides information on the TrueNAS Audit screens and settings."
weight: 90
aliases: 
tags:
 - auditing
 - system
 - stig
 - user
 - service
 - smb 
keywords:
 - enterprise storage solutions
 - nas storage solutions
---

TrueNAS auditing logs record all operations performed by a session, user, or service (SMB, middleware).

## Audit Screen

The **Audit** screen lists all session or user events, facilitating comprehensive monitoring.

{{< trueimage src="/images/SCALE/SystemSettings/AuditScreen.png" alt="Audit Screen" id="Audit Screen" >}}

The **Audit** screen lists log entries in a table that shows:

* **Service** - The service performing the operation (e.g. **Midddleware**).
* **User** - Name of the user (login or internal process user (e.g., **admin**, **UNAUTHENTICATED**, etc.)
* **Timestamp** - Date and time the event occurred.
* **Event** - Name of the process (e.g., **Authentication**, **Method Call**, etc.)
* **Event Data** - A short description of the operation (e.g., **Credentials: Password Login**, **System advanced update**, etc.).

**Audit Settings** opens the **System > Advanced Settings** screen showing the **Audit** widget.
For more information on configuring audit settings, see [Advanced Settings Screen]({{< relref "AdvancedSettingsScreen.md #Audit-Widget" >}})

TrueNAS includes a manual page with more information on the [VFS auditing functions](https://github.com/truenas/samba/blob/SCALE-v4-19-stable/docs-xml/manpages/vfs_truenas_audit.8.xml).

### Audit Screen Search

The **Search** field shows the **Switch to Advanced** option that replaces the default basic search with the advanced search option.
The advanced search option allows entering filter parameters to narrow results to a specific type of record.
Click in the **Search** field to see the advanced filter options in advanced search mode.

{{< trueimage src="/images/SCALE/SystemSettings/AuditAdvancedSearch.png" alt="Audit Advanced Search" id="Audit Advanced Search" >}}

**Switch to Advanced** toggles to **Switch to Basic** that reverts the search operation to the default simple word search method.
Clicking in the **Search** field does not show search filter options in basic search mode.

**Search** starts the search operation based on the search parameters entered.

**Export to CSV** generates a CSV file of audit log records and downloads it to the **Downloads** folder on the server.

### Audit Screen Log Details Widgets

The **Audit** screen shows two widgets for a selected record in the audit table:

* **Metadata** - Shows the selected audit record properties **Audit ID**, **Version**, and **Session ID**.

* **Event Data** - Shows the selected audit record method, a description of the recorded event, authentication status, and authorization information.
  The data varies based on the type of event.

The **Copy to Clipboard** icon on the **Event Data** widget copies the fields listed on the **Event Data** widget formatted as straight text or a JSON file record that you can paste into any text editor.