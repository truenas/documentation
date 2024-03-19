---
title: "Audit Logging"
description: "Provides information on the system and SMB Share audit logging screens and function in TrueNAS."
weight: 90
alias: 
tags:
- auditing
- smb 
---

## Auditing Overview
TrueNAS SCALE auditing and logs provide a trail of all actions performed by a session, user, or service (SMB, middleware).

The audit function backends are both the syslog and the Samba debug library.
Syslog sends audit messages via explicit syslog call with configurable priority (WARNING is the default) and facility (for example, USER).
The default is syslog sent audit messages.
Debug sends audit messages from the Samba debug library and these messages have a configurable severity (WARNING, NOTICE, or INFO).

The **System Settings > Audit** screen lists all session, user, or SMB events.
Logs include who performed the action, timestamp, event type, and a short string of the action performed (event data).

SCALE includes a manual page with more information on the [VFS auditing functions](https://github.com/truenas/samba/blob/SCALE-v4-19-stable/docs-xml/manpages/vfs_truenas_audit.8.xml).
Administrative users can enter {{< cli >}}man vfs_truenas_audit{{< /cli >}} in a SCALE command prompt to view the embedded manual page.

### Auditing Event Types
Events are organized by session and user, and SMB auditing.

**Session and user auditing events**
{{< expand "Authentication Events" "v" >}}
Audit message generated every time a client logs into the SCALE UI or an SSH session or makes changes to user credentials.
{{< /expand >}}
{{< expand "Method Call Events" "v" >}}
Audit message generated every time the currently logged in user creates a new user account or changes user credentials.
{{< /expand >}}

**SMB auditing events**
{{< expand "Connect Events" "v" >}}
Generated every time an SMB client performs an SMB tree connection (TCON) to a given share.
Each session can have zero or more TCONs.
{{< /expand >}}
{{< expand "Disconnect Events" "v" >}}
Generated every time an SMB client performs an SMB tree disconnect to a given share.
{{< /expand >}}
{{< expand "Create Events" "v" >}}
Generated every time an SMB client performs an SMB create operation on a given tree connection (TCON).
Does not log internally-initiated create operations.
Each SMB tree connection can have multiple open files.
{{< /expand >}}
{{< expand "Read or Write Events" "v" >}}
Generated at configurable intervals as an SMB client reads from or writes to a file.
Specifies the minimum amount of time to wait before generating another read or write event for a given file type.

For example, when set to 5 and an SMB client does constant writes to a file, only 12 events are generated per minute.
The default value is **60**, or one event per type per minute.
File-based counters are printed within close messages, and connection-based counters are included in disconnect messages.
{{< /expand >}}
{{< expand "Read or Write Offload Events" "v" >}}
Generated at configurable intervals as an SMB client performs offloads of reads from or writes to a file.
Specifies the minimum amount of time to wait before generating another offload read or write event for a given file type.

For example, when set to 5 and an SMB client does constant writes to a file, only 12 events are generated per minute.
The default value is **60**, or one event per type per minute.
File-based counters are printed within close messages, and connection-based counters are included in disconnect messages.
{{< /expand >}}
{{< expand "Open or Close Events" "v" >}}
Generated every time an SMB client opens or closes a file.
When a file is opened or closed a summary of file system operations performed on the type is included in the audit message.
{{< /expand >}}
{{< expand "Rename Events" "v" >}}
Generated when a client attempts to rename a file.
{{< /expand >}}
{{< expand "Set_Attr Events" "v" >}}
Generated when a client attempts to set basic file attributes (for example DOS mode or file timestamps).
The key **attr_type** indicates the precise type of attributes that are changed in the event this message records.
{{< /expand >}}
{{< expand "Set_Quota Events" "v" >}}
Generated when a client attempts to set basic file attributes (for example DOS mode or file timestamps).
The key **attr_type** indicates the precise type of attributes that are changed in the event this message records.
{{< /expand >}}
{{< expand "Unlink Events" "v" >}}
Generated when a client attempts to set a user or group quota on an SMB share.
{{< /expand >}}
{{< expand "Set_ACL Events" "v" >}}
Generated when a client attempts to set an NFSv4 ACL on a file system or to grant a user (OWNER) read and write permissions to the file system.
{{< /expand >}}

### Audit Message Records
Audit records contain information that establishes:
* Type of event
* When the event occurred (timestamp)
* Where the event occurred (source and destination addresses)
* Source of the event (user or process)
* Outcome of the event (success or failure)
* Identity of any individual or file names associated with the event

Each audit message is a single JSON file containing mandatory fields.
It can also include additional optional records.
Message size is limited to not exceed 1024 bytes for maximum portability with different syslog implementations.

Use the **Export to CSV** button on an audit screen to download audit logs in a format readable in a spreadsheet program.
Use the **Copy to Clipboard** option on the **Event Data** widget to copy the selected audit message event record to a text or JSON object file.
The JSON object for an audit message contains the version information, the service which is the name of the SMB share, a session ID and the tree connection (tcon_id).

{{< expand "Message Fields" "v" >}}
Each audit message JSON object includes:
{{< truetable >}}
| Field | Description |
|-------|-------------|
| aid | GUID uniquely identifying the audit event. |
| vers | JSON object containing version information of the audit event. Audit version identifiers represent the major and minor versions of the internal TrueNAS audit message. Major versions are not made outside a major SCALE release. Minor version changes indicate non-breaking changes to format, such as adding a new optional field. Major version changes can be renaming or removing an existing mandatory field. |
| time | UTC timestamp indicating when the event occurs. |
| addr | IPv4 or IPv6 address for the client generating the audit message. |
| user | Username of either the user or client generating the audit message. If no username, could be the user ID prefixed with UID. |
| svc | Unique human-readable service identifier (all uppercase alpha characters) for the TrueNAS service generating the audit message (always SMB). |
| event | Human-readable name for the event type for the audit message. Name is in all uppercase alpha characters that can include an underscore (_) or dot(.) special characters. See [Audit Event Types](#auditing-event-types) above for more information.
| svc_data | A JSON object containing tree connection (TCON) specific data. This is standardized for all events. |
| event_data | A JSON object containing event-specific data. This varies based on the event type. |
| sess | GUID unique identifier for the session. ||
| success | Shows true if the operation succeeded or false if it fails. |
{{< /truetable >}}
{{< /expand >}}

## System and User Auditing
Authentication and other events are captured by the TrueNAS audit logging functions.
The TrueNAS SCALE auditing logs event data varies based on the type of event tracked.

## Accessing Auditing (Screens)
Users have access to audit information from three locations in the SCALE UI:

* **Credentials > Local Users** details screen through the **Audit Logging** option
* **Sharing SMB** details screen through the **Audit Logging** option
* **System Settings > Audit** option on the main navigation panel

Click **Audit Logging** on the **Users** details screen to open the **Audit** log screen with the **Search** field filtered to show events (authentication, changes to existing users, creating new users, etc.) specific to that user.

Click **Audit Logging** on the **SMB** row on the **Services** screen to open the **Audit** log screen with the **Search** field filter added to show only SMB events.

The main **System Settings > Audit** screen shows all system events such as authentication and SMB events.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsAuditScreen.png" alt="Audit Screen" id="Audit Screen" >}}

The audit screen includes basic and advanced search options.
Click **Switch to Basic** to change to the basic search function or click **Switch to Advanced** to show the advanced search operators.

You can enter any filters in the basic **Search** field to show events matching the entry.

To enter advanced search parameters, use the format displayed in the field, for example, *Service = "SMB" AND Event = "CLOSE"* to show closed SMB events.
Event types are listed in [Auditing Event Types](#auditing-event-types).

Advanced search uses a syntax similar to SQL/JQL and allows several custom variables for filtering.
Parentheses define query priority.
Clicking the advanced **Search** field prompts you with a dropdown of available event types, options, and operators to help you complete the search string.

For example, to search for any SMB connect or close event from the user *smbuser* or any non-authentication SMB events, enter `(Service = "SMB" AND Event in ("Connect", "Close") AND User in ("smbuser")) OR (Event != "Authentication"  AND Service = "SMB")`.

{{< trueimage src="/images/SCALE/SystemSettings/AuditAdvancedSearch.png" alt="Advanced Search" id="Advanced Search" >}}

The advanced search automatically checks syntax and shows <i class="material-icons" aria-hidden="true" title="done">done</i> when the syntax is valid and <i class="material-icons" aria-hidden="true" title="warning">warning</i> for invalid syntax.

Click on a row to show details of that event in the **Metadata** and **Event Data** widgets.

**Export as CSV** sends the event log data to a csv file you can open in a spreadsheet program (i.e., MS Excel, Google Sheets, etc.) or other data management app that accept CSV files.

The <i class="material-icons" aria-hidden="true" title="Copy to Clipboard">assignment</i> (**Copy to Clipboard**) icon shows two options, **Copy Text** and **Copy Json**.
**Copy Text** copies the event to a text file.
**Copy Json** copies the event to a JSON object.

## Configuring SMB Auditing

{{< include file="/static/includes/ConfigureSMBShareAuditingSCALE.md" >}}

## Configuring Session Auditing
To configure session auditing settings, go to **System Settings > Advanced**, then click **Configure** on the **Audit** widget.

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}