---
title: "Support"
description: "Provides information about the system support namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 90
aliases:
draft: false
tags:
- scaleclisystem
- scalesupport
---

## Support Namespace
The **support** namespace has xx commands, and is based on Proactive Support management functions found in the SCALE API and web UI.
It provides access to system proactive support account setting methods through the **support** commands.

## Support Commands 
The following **support** commands allow you to configure Proactive support account settings, create a new support ticket and attach files to an existing ticket.

You can enter commands from the main CLI prompt or from the **support** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}



attach_ticket            - Method to attach a file to a existing ticket
attach_ticket_max_size   - Returns maximum uploaded file size for `support
config                  
fetch_categories         - Fetch issue categories using access token `token`
fields                   - Returns list of pairs of field names and field titles for Proactive Support
is_available             - Returns whether Proactive Support is available for this product type and current license
is_available_and_enabled - Returns whether Proactive Support is available and enabled
new_ticket               - Creates a new ticket for support
update                   - Update Proactive Support settings

### Attach_Ticket Command
Use the `attach_ticket` command 

{{< expand "Using the Attach_Tickete Command" "v" >}}
#### Description
The `attach_tickete` command has xxx required properties and xx optional properties.

Enter the command then press <kbd>Enter</kbd>.
The command returns maximum size of a file you can attach to the ticket. 

#### Usage
From the CLI prompt, enter:

<code>ystem support attach_ticket </code>

{{< expand "Command Example" "v" >}}
```
system support attach_ticket 

```
{{< /expand >}}
{{< /expand >}}


### Attach_Ticket_Max_Size Command
Use the `attach_ticket_max_size` command 

{{< expand "Using the Attach_Ticket_Max_Size Command" "v" >}}
#### Description
The `attach_ticket_max_size` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns maximum size of a file you can attach to the ticket. 

#### Usage
From the CLI prompt, enter:

<code>ystem support attach_ticket_max_size</code>

{{< expand "Command Example" "v" >}}
```
system support attach_ticket_max_size
30
```
{{< /expand >}}
{{< /expand >}}

### Config Command
Use the `config` command 

{{< expand "Using the Config Command" "v" >}}
#### Description
The `config` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns the current Proactive support configuration settings. 

#### Usage
From the CLI prompt, enter:

<code>system support config</code>

{{< expand "Command Example" "v" >}}
```
system support config
+-----------------+-----------+
|              id | 1         |
|         enabled | <null>    |
|            name | test user |
|           title | tech doc  |
|           email |           |
|           phone |           |
|  secondary_name |           |
| secondary_title |           |
| secondary_email |           |
| secondary_phone |           |
+-----------------+-----------+
```
{{< /expand >}}
{{< /expand >}}


### Fetch_Categories Command
Use the `fetch_categories` command 

{{< expand "Using the Fetch_Categories Command" "v" >}}
#### Description
The `fetch_categories` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of ticket categories. 

#### Usage
From the CLI prompt, enter:

<code>system support fetch_categories</code>

{{< expand "Command Example" "v" >}}
```
system support fetch_categories
+-------------+--------------------+
|         BUG | Bug                |
|    HARDWARE | Hardware           |
|     INSTALL | Installation/Setup |
| PERFORMANCE | Performance        |
+-------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}


### Fields Command
Use the `fields` command 

{{< expand "Using the Fields Command" "v" >}}
#### Description
The `fields` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of Proactive Support fields. 

#### Usage
From the CLI prompt, enter:

<code>system support fields</code>

{{< expand "Command Example" "v" >}}
```
system support fields
name
Contact Name
title
Contact Title
email
Contact E-mail
phone
Contact Phone
secondary_name
Secondary Contact Name
secondary_title
Secondary Contact Title
secondary_email
Secondary Contact E-mail
secondary_phone
Secondary Contact Phone
```
{{< /expand >}}
{{< /expand >}}

### Is_Available Command
Use the `is_available` command 

{{< expand "Using the Is_Available Command" "v" >}}
#### Description
The `is_available` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns an true if successful. 

#### Usage
From the CLI prompt, enter:

<code>system support is_available</code>

{{< expand "Command Example" "v" >}}
```
system support is_available
true
```
{{< /expand >}}
{{< /expand >}}

### Is_Available_And_Enabled Command
Use the `is_available_and_enabled` command 

{{< expand "Using the Is_Available_And_Enabled Command" "v" >}}
#### Description
The `is_available_and_enabled` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns an true if successful. 

#### Usage
From the CLI prompt, enter:

<code>system support is_available_and_enabled</code>

Where:
* *test user* is name of the user.
* *tech doc* is the title for the user.

{{< expand "Command Example" "v" >}}
```
system support is_available_and_enabled
<null>
```
{{< /expand >}}
{{< /expand >}}
### New_Ticket Command
Use the `new_ticket` command to create a new support ticket.

{{< expand "Using the New_Ticket Command" "v" >}}
#### Description
The `new_ticket` command has one required property, `new_ticket`.
`new_ticket` has xx required properties and xx optional properties (see **New_Ticket Properties** below for details.)
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns  

{{< expand "New_Ticket Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| ` ` |  | Enter the property argument using the `=` delimiter to separate the property and double-quoted value. | <code>="<i></i>"</code> |

{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system support new_ticket new_ticket= {"title":"<i>Test Ticket Created with CLI</i>","body":"<i>Created this ticket using the CLI Support command</i>","category":"<i>BUG</i>","criticality":"","environment":"<i>M50</i>","name":"<i>test user</i>","phone":"<i>123-456-7890</i>","email":"<i>testuser@gmail.com"}</code>

Where:
* *Test Ticvket Created with CLI* is title for the support ticket.
* *Created this ticket using the CLI support command* is the description of the issue.
* *BUG* is the type of ticket (category)
* *M50* is the type of system (environment)
* *test user* is the name of the user
* *123.456.-7890* is the phone number for the user account.
* *testuser@gmail.com* is the email for the user account.

{{< expand "Command Example" "v" >}}
```
system support new_ticket new_ticket= {"title":"Test Ticket Created with CLI","body":"Created this ticket using the CLI Support command","category":"BUG","criticality":"","environment":"M50","name":"mic J","phone":"123-456-7890","email":"mjohnson@ixsystems.com"}
[0%] ...
[1%] Gathering data...
[20%] Submitting ticket...
[50%] Ticket created: 8658131359842353...
[100%] Ticket created: 8658131359842353...
+-----------+------------------------------------------------------------------+
|    ticket | 8658131359842353                                                 |
|       url | https://support-proxy.ixsystems.com/issues/salesforce/8658131... |
| has_debug | false                                                            |
+-----------+------------------------------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command
Use the `update` command to change the settings for an existing proactive account.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `Update` command has xx optional properties (see **Update Properties** below for details.)
Enter property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line when successful. 

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| ` ` |  | Enter the property argument using the `=` delimiter to separate the property and double-quoted value. | <code>="<i></i>"</code> |

{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system support update name="<i>test user</i>" title="<i>tech doc</i>"</code>

Where:
* *test user* is name of the user.
* *tech doc* is the title for the user.

{{< expand "Command Example" "v" >}}
```
system support update name="test user" title="tech doc"

```
{{< /expand >}}
{{< /expand >}}


{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scalesupport" limit="10" title="Related Support Articles" >}}