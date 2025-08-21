---
title: "Audit Logs"
description: "Provides information on the System and SMB Share auditing screens and function in TrueNAS."
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

TrueNAS auditing and logs provide a trail of all actions performed by a session, user, or service (SMB, middleware).

The audit function backends are the syslog and Samba debug libraries.
Syslog sends audit messages via an explicit syslog call with configurable priority (WARNING is the default) and facility (for example, USER).
The default is syslog-sent audit messages.
Debug sends audit messages from the Samba debug library. Messages have a configurable severity (WARNING, NOTICE, or INFO).

The **System > Audit** screen lists all session or user events, facilitating comprehensive monitoring.
Logs include who performed the action, timestamp, event type, and a short string of the action performed (event data).

TrueNAS includes a manual page with more information on the [VFS auditing functions](https://github.com/truenas/samba/blob/SCALE-v4-19-stable/docs-xml/manpages/vfs_truenas_audit.8.xml).

## Auditing Event Types

Audit logs retain at least one week of data. Logs are downloadable.

Auditing event types are:
- Session and user
- Sudo and root user commands (includes STIG-compliant shell commands)
- SMB protocol and share
- NFS protocol and share
- iSCSI protocol and share
- FTP service
- STIG-compliant security objects
- HA shutdown and restart reason

Enterprise and Enterprise HA systems have security object (FIPS and STIG) event logging.
HA primary and standby controller event logs are downloadable from either the primary or the standby controller.

### Session and User Auditing Events

Session and user auditing events include authentication, method call, and sudo accept/reject events.

{{< expand "Authentication Events" "v" >}}
Audit messages are generated every time a client logs into the TrueNAS UI or an SSH session or makes changes to user credentials.

TrueNAS terminates inactive sessions when it reaches the specified timeout limit. If a user initiates a new session within five minutes of the last session, TrueNAS logs the user as associated with the previous session. If the log-in occurs outside the five minutes, TrueNAS initiates a new websocket session.
{{< /expand >}}

{{< expand "Method Call Events" "v" >}}
Audit messages are generated every time a currently logged-in user creates a new user account or changes user credentials.
{{< /expand >}}

{{< expand "Sudo Accept or Reject Events" "v" >}}
Generated every time a user logs into a shell session and uses sudo to perform a command as root, or is denied sudo permission.
The event data for a sudo event includes the command.
{{< /expand >}}

### SMB and NFS Auditing Events

SMB and NFS events are omitted by default from the **System > Audit** screen.
To view these audit results, go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Audit Logs">receipt_long</i> **Audit Logs** for the SMB or NFS service or use advanced search on the main **Audit** screen to query {{< cli >}}"Service" = "SMB"{{< /cli >}}.

{{< hint type=info title="SMB Service Audit Logs" >}}
SMB audit logs include all SMB protocol events, but do not include changes to SMB configuration, such as creating an SMB share or querying and modifying SMB ACLs.
See the middleware service log to review those events.
{{< /hint >}}

The following sections also apply to NFS share audit logs.

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
Specifies the minimum time to wait before generating another read or write event for a given file type.

For example, when set to 5 and an SMB client does constant writes to a file, only 12 events are generated per minute.
The default value is **60**, or one event per type per minute.
File-based counters are printed within close messages, and connection-based counters are included in disconnect messages.
{{< /expand >}}
{{< expand "Read or Write Offload Events" "v" >}}
Generated at configurable intervals as an SMB client performs offloads of reads from or writes to a file.
Specifies the minimum time to wait before generating another offload read or write event for a given file type.

For example, when set to 5 and an SMB client does constant writes to a file, only 12 events are generated per minute.
The default value is **60**, or one event per type per minute.
File-based counters are printed within close messages, and connection-based counters are included in disconnect messages.
{{< /expand >}}
{{< expand "Open or Close Events" "v" >}}
Generated every time an SMB client opens or closes a file.
When a file is opened or closed, a summary of file system operations performed on the type is included in the audit message.
{{< /expand >}}
{{< expand "Rename Events" "v" >}}
Generated when a client attempts to rename a file.
{{< /expand >}}
{{< expand "Set_Attr Events" "v" >}}
Generated when a client attempts to set basic file attributes (for example, DOS mode or file timestamps).
The key **attr_type** indicates the precise type of attributes changed in the event this message records.
{{< /expand >}}
{{< expand "Set_Quota Events" "v" >}}
Generated when a client attempts to set basic file attributes (for example, DOS mode or file timestamps).
The key **attr_type** indicates the precise type of attributes changed in the event this message records.
{{< /expand >}}
{{< expand "Unlink Events" "v" >}}
Generated when a client attempts to delete a file or directory from a share.
{{< /expand >}}
{{< expand "Set_ACL Events" "v" >}}
Generated when a client attempts to set an NFSv4 ACL on a file system or to grant a user (OWNER) read and write permissions to the file system.
{{< /expand >}}

## Audit Message Records
Audit records contain information that establishes:
* Type of event
* When the event occurred (timestamp)
* Where the event occurred (source and destination addresses)
* Source of the event (user or process)
* Outcome of the event (success or failure)
* Identity of any individual or file names associated with the event

Each audit message is a single JSON file containing mandatory fields.
It can also include additional optional records.
Message size is limited to not exceeding 1024 bytes for maximum portability with different syslog implementations.

Use the **Export to CSV** button on an audit screen to download audit logs in a format readable in a spreadsheet program.
Use the **Copy to Clipboard** option on the **Event Data** widget to copy the selected audit message event record to a text or JSON object file.
The JSON object for an audit message contains the version information, the service that might be the name of the SMB share, a session ID, and the tree connection (tcon_id).

{{< expand "Message Fields" "v" >}}
Each audit message JSON object includes:
{{< truetable >}}
| Field | Description |
|-------|-------------|
| aid | GUID uniquely identifying the audit event. |
| vers | JSON object containing version information of the audit event. Audit version identifiers represent the major and minor versions of the internal TrueNAS audit message. Major versions are not made outside a major TrueNAS release. Minor version changes indicate non-breaking changes to the format, such as adding a new optional field. Major version changes that can be renaming or removing an existing mandatory field. |
| time | UTC timestamp indicating when the event occurs. |
| addr | IPv4 or IPv6 address for the client generating the audit message. |
| user | Username of the user or client generating the audit message. If no username, it can be the user ID prefixed with UID. |
| svc | Unique human-readable service identifier (all uppercase alpha characters) for the TrueNAS service generating the audit message (always SMB). |
| event | Human-readable name for the event type for the audit message. Name is in all uppercase alpha characters that can include the underscore (_) or dot (.) special characters. See [Audit Event Types](#auditing-event-types) above for more information.
| svc_data | A JSON object containing tree connection (TCON) specific data. This is standardized for all events. |
| event_data | A JSON object containing event-specific data. This varies based on the event type. |
| sess | GUID unique identifier for the session. |
| success | Shows true if the operation succeeds or false if it fails. |
{{< /truetable >}}
{{< /expand >}}

## Accessing Auditing Screens
Users have access to audit information from three locations in the TrueNAS UI:

* **Credentials > Users** details screen through the **Audit Logs** option
  * On the **Users** screen, click **Audit Logs** on the **Users** details screen to open the **Audit** log screen with the **Search** field filtered to show events (authentication, changes to existing users, creating new users, etc.) specific to that user.  For more details, see [Audit Screen](#audit-screen).
* **Shares > Window (SMB) Shares** details screen through the share edit **Audit Logging** option
  * On the **Sharing** screen, click the <span class="material-icons">edit</span> **Edit** icon on the desired **SMB share** row where **Enable**, **watch** and **ignore** settings are available. For details, see [Configuring SMB Auditing](#configuring-smb-auditing).
* **System > Services > SMB** to view **SMB** audit logs
  * On the **Services** screen, click the <span class="material-icons">receipt_long</span> **Audit Logs** icon on the **SMB** row. This opens the main **Audit** log page with the **Search** field filter configured to show only SMB events.  For details, see [Audit Screen](#audit-screen).
* **System > Audit** option on the main navigation panel
  * The default **Audit** log screen is unfiltered and displays all system events such as authentication and SMB events.

## Searching Audit Logs

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsAuditScreen.png" alt="Audit Screen" id="Audit Screen" >}}

The audit screen includes basic and advanced search options.
Click **Switch to Basic** to change to the basic search function or click **Switch to Advanced** to show the advanced search operators.

You can enter any filters in the basic **Search** field to show events matching the entry.

To enter advanced search parameters, use the format displayed in the field, for example, *Service = "SMB" AND Event = "CLOSE"* to show closed SMB events.
Event types are listed in [Auditing Event Types](#auditing-event-types).

Advanced search uses a syntax similar to SQL/JQL and allows several custom variables for filtering.
Parentheses define query priority.
Clicking the advanced **Search** field prompts you with a dropdown of available event types, options, and operators to help you complete the search string.

For example, to search for any SMB connect or close event from the user *smbuser* or any non-authentication SMB events, enter `(Service = "SMB" AND Event in ("Connect", "Close") AND User in ("smbuser")) OR (Event != "Authentication"  AND Service = "SMB")`.

{{< trueimage src="/images/SCALE/SystemSettings/AuditAdvancedSearch.png" alt="Advanced Search" id="Advanced Search" >}}

The advanced search automatically checks syntax and shows <i class="material-icons" aria-hidden="true" title="done">done</i> when the syntax is valid and <i class="material-icons" aria-hidden="true" title="warning">warning</i> for invalid syntax.

Click on a row to show details of that event in the **Metadata** and **Event Data** widgets.

**Export as CSV** sends the event log data to a CSV file you can open in a spreadsheet program (i.e., MS Excel, Google Sheets, etc.) or other data management app that accepts CSV files.

The <i class="material-icons" aria-hidden="true" title="Copy to Clipboard">assignment</i> (**Copy to Clipboard**) icon shows two options, **Copy Text** and **Copy Json**.
**Copy Text** copies the event to a text file.
**Copy Json** copies the event to a JSON object.

## Configuring SMB Auditing

{{< include file="/static/includes/ConfigureSMBShareAuditingSCALE.md" >}}

## Configuring Audit Storage and Retention Policies

To configure Audit storage and retention settings, click **Audit Settings** on the **Audit** screen or go to **System > Advanced Settings**, then click **Configure** on the [**Audit**]({{< ref "/SCALEUIReference/SystemSettings/AdvancedSettingsScreen.md#audit-widget" >}}) widget.

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

For example, to change the percent usage **warning** threshold for the storage allocated to the Audit database:

1. Navigate to **System > Advanced** screen.

2. Select the **Configure** button on the **Audit** widget.
3. In the Audit configuration popup, change the value in the **Quota Fill Warning** field to the desired percentage.
4. Select the **Save** button to effect the change.
