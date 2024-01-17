---
title: "Audit Logging"
description: "Provides information on the system and SMB Share autdit logging screens and function in TrueNAS."
weight: 90
alias: 
tags:
- auduting
- smb 
---


## overview
The **Audit** screen provides an audit trail of all actions performed by user.
The **System Settings > Audit** screen lists all actions performed with the action type whether in the UI or through the API.
Logs include who performed the action, the originating IP address, timestamp and a short string of the action performed.

## SMB Share and Service Auditing

This module is only supported for SMB2 protocol-negotiated SMB sessions (or higher). 
SMB1 connections to shares with auditing enabled are rejected. This module is stackable.

SMB1 connections are not permitted to shares where auditing is enabled. 
If we fail to generate our connection info, then TCON should be rejected since we are unable to properly audit.


### Event Types of SMB Auditing 
SMB auditing events logged:
{{< expand "Connect Events" "v" >}}
SMB audit message generated every time an SMB client performs and SMB tree connection (TCON) to a given share. 
Each session can have zero or more TCONs.
{{< /expand >}}
{{< expand "Disconnect Events" "v" >}}
SMB audit message generated every time an SMB client performs and SMB tree disconnect to a given share. Each session can have zero or more TCONs.
{{< /expand >}}
{{< expand "Create Events" "v" >}}
SMB audit message generated every time an SMB client performs an SMB create operation on a given TCON, but does not log internally-initiated create operations. 
Each SMB tree connection can have multiple open files. 
{{< /expand >}}
{{< expand "Read or Write Events" "v" >}}
SMB audit message generated at configurable intervals as an SMB client reads from or writes to a file. 
Specifies the minimum amount of time to wait before generating another read or write event for a given file type. 
For example, if set to 5 and an SMB client does constant writes to a file, only 12 events are generated per minute. 
The default value is 60, or one event per type per minute.
File-based counters are printed within close messages, and connection-based counters are included in disconnect messages.
{{< /expand >}}
{{< expand "Read or Write Offload Events" "v" >}}
SMB audit message generated at configurable intervals as an SMB client performs offloads of reads from or writes to a file. 
Specifies the minimum amount of time to wait before generating another offload read or write event for a given file type. 
For example, if set to 5 and an SMB client does constant writes to a file, only 12 events are generated per minute. 
The default value is 60, or one event per type per minute.
File-based counters are printed within close messages, and connection-based counters are included in disconnect messages.
{{< /expand >}}
{{< expand "Open or Close Events" "v" >}}
SMB audit message generated every time an SMB client opens or closes a file. 
When a file is opened or closed a summary of file system operations performed on the type is included in the audit message.
{{< /expand >}}
{{< expand "Rename Events" "v" >}}
SMB audit message generated when a client attempts to rename a file.
{{< /expand >}}
{{< expand "Set_Attr Events" "v" >}}
SMB audit message generated when a client attempts to set basic file attributes (for example DOS mode or file timestamps). 
The key attr_type indicates the precise type of attributes that are changed in the event this message records.
{{< /expand >}}
{{< expand "Set_Qutoa Events" "v" >}}
SMB audit message generated when a client attempts to set basic file attributes (for example DOS mode or file timestamps). 
The key attr_type indicates the precise type of attributes that are changed in the event this message records.
{{< /expand >}}
{{< expand "Unlink Events" "v" >}}
SMB audit message generated when a client attempts to set a user or group quota on an SMB share.
{{< /expand >}}

### Audit Message Records
Each audit message is a single JSON file containing mandatory fields and that can include additional optional records.
Message size is limited to not exceed 1024 bytes for maximum portability with diffent syslog implementations.

Use the **Export to CSV** button on the audit screens to download information in a format readable in a spreadsheet program.
{{< expand "Mandatory Message Fields" "v" >}}
Each audit message JSON object includes:
{{< truetable >}}
| Field | Description |
|-------|-------------|
| aid | Audit identifier to uniquely identify the particular audit message. |
| vers | Audit version identifier representing the major and minor versions of the internal TrueNAS audit message. |
| time | Audit timestamp for when the event occurs. |
| addr | IPv4 or IPv6 address for the client generating the audit message. |
| user | Username of either the user or client generating the audit message. If no username, could be the user ID prefixed with UID. |
| svc | Unique human-readable service identifier in all uppercase alpha characters that identifies the TrueNAS service generating the audit message. Could include the application generating the message (for example, SMB). |
| event | Event identifier generated by the service. Name is human-readable all uppercase alpha characters that can include an underscore (_) or dot(.) special characters. For example, *DISCONNECT*. |
{{< /truetable >}}
{{< /expand >}}
{{< expand "Optional Message Fields" "v" >}}
Each audit message JSON object includes:
{{< truetable >}}
| Field | Description |
|-------|-------------|
| svc_data | Either a syslog message or a JSON object with additional service implementation-specific information provdied by the auditing implementation that provides global context to uniquely identify sessions for the audited event. Includes the vers field in the string. |
| event_data | Either a syslog message or a JSON object with event implementation-specific information that provides global information to uniquely identify sessions for the audited event. |
| sess | Unique session identifier (GUID). |
{{< /truetable >}}
{{< /expand >}}

## System and User Auditing
Authentication and other events are captured by the TrueNAS audit logging functions. 
The TrueNAS SCALE auditing logs event data varies based on the type of event tracked. 

General system audit events also include each time an IP address or ACL is set.

### Event Types of System and User Auditing

## Accessing Auditing (Screens)

Users have access to audit information from three loctions:

* **Credentials > Local Users** details screen **Audit Logging** function to access user log events.
* **Sharing SMB** details screen **Audit Logging** function to access SMB share log events.
* **System Settings > Audit** option on the main navigation panel to access system audit log events.

Click **Audit Logging** on the **Users** details screen to open the **Audit** log screen with the **Search** field populated with user search filters.
Click **Audig Logging** on the **SMB** row on the **Services** screen to open the **Audit** log screen with the **Search** field populated with SMB service filters.
You can enter any user filters in the **Search** field on the **System Settings > Audit** screen to filter results to show only specific records.

{{< trueimage src="/images/SCALE/SystemSettings/.png" alt="Audit Screen" id="AuditScreen" >}}

All log screen provide a list of audit log events, and the **Metadata** and **Event Data** widgets that provide more details on the highlighted log row. 
**Export as CSV** sends the log data to a csv file you can open in a spreadsheet program like Excel, Google Sheets, etc.
**Copy to Clipboard** icon shows two options, **Copy Text** and **Copy Json**.


Each audit screen includes basic and advanced search options. Click **Switch to Basic** to change to the basic search fuction or click **Switch to Advanced** to show the advanced search operators.

Similar audit screens are available from the SMB share and service screens, and from the user screen.

## Configuring SMB Auditing

Use the **Watch List** and **Limit List** functions to add audit logging groups to include or exclude. If using both lists the watch list takes precedence over the limit list. Leave **Watch List** blank to enclude all groups, otherwise auditing is restricted to only the groups added.

## Configurting System Auditing

