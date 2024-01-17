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

SMB auditing does not work for SMB shares where SMB1 connection is used. 

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

