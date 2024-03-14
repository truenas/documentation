---
title: "Truenas"
description: "Introduces the TrueNAS CLI truenas namespace that configures TrueNAS Enterprise service settings found in the API and web UI."
weight: 105
aliases:
draft: false
tags:
- enterprise
---

{{< include file="/_includes/CLIGuideWIP.md" >}}
{{< include file="/_includes/SCALECLIIntroduction.md" >}}

## TrueNAS Namespace

{{< enterprise >}}
On licensed systems, use the **truenas** namespace for viewing or modifying Enterprise customer service details.
Systems without an Enterprise license do not use this namespace.
{{< /enterprise >}}

The **truenas** namespace has five commands and is based on TrueNAS Enterprise functions found in the SCALE API and web UI.
It provides access to Enterprise customer management methods through the **truenas** namespace commands.

## TrueNAS Commands

The following **truenas** namespace commands allow you to accept the TrueNAS EULA, modify Enterprise customer information, and control system production status.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Accept_eula Command

The `accept_eula` command records agreement with the [TrueNAS SCALE End User License Agreement]({{< relref "/SCALE/GettingStarted/useragreements/scaleeula.md" >}}) (EULA).

{{< hint type=important >}}
Review the [EULA]({{< relref "/SCALE/GettingStarted/useragreements/scaleeula.md" >}}) before accepting it.
{{< /hint >}}

{{< expand "Using the Accept_eula Command" "v" >}}
#### Description
`accept_eula` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

`system truenas accept_eula`

{{< expand "Command Example" "v" >}}
```
system truenas accept_eula

```
{{< /expand >}}
{{< /expand >}}

### Get_customer_information Command

The `get_customer_information` command returns a table of stored customer information.

{{< expand "Using the Get_customer_information Command" "v" >}}
#### Description
`get_customer_information` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table containing Enterprise customer information.

#### Usage
From the CLI prompt, enter:

`system truenas get_customer_information`.

{{< expand "Command Example" "v" >}}
```
system truenas get_customer_information
+----------------+---------------------------+
|             id | 1                         |
|           data | <dict>                    |
|     updated_at | 2023-08-28T19:54:04+00:00 |
|        sent_at | <null>                    |
| form_dismissed | false                     |
| immutable_data | <dict>                    |
|   needs_update | false                     |
+----------------+---------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Is_production Command

The `is_production` command returns if the system is marked as a production system.

{{< expand "Using the Is_production Command" "v" >}}
#### Description
`is_production` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns either a true or false output.
True indicates the system is a production system. False indicates the system is not.

#### Usage
From the CLI prompt, enter:

`system truenas is_production`

{{< expand "Command Example" "v" >}}

```
system truenas is_production
true
```
{{< /expand >}}
{{< /expand >}}

### Set_production Command

The `set_production` command adds or removes in-production status from the system and creates a ticket to notify iXsystems Support that the system is ready for use in production.

{{< expand "Using the Set_production Command" "v" >}}
#### Description
`set_production` has one required property, `production`, and one optional property, `attach_debug`, to include in the command string.
The `production` property uses a boolean value to set production as true or false.
The `attach_debug` property uses a boolean value to include a debug file in the support ticket.
If `attach_debug` is set to true, TrueNAS automatically creates and attaches a debug file to the ticket.

Enter the property argument using the `=` delimiter to separate the property and value. Separate multiple property arguments with a space.
Enter the command string then press <kbd>Enter</kbd>

#### Usage
From the CLI prompt, enter:

`system truenas set_production production=true attach_debug=true`

{{< expand "Command Example" "v" >}}
```
system truenas set_production production=true attach_debug=true
[0%] ...
[1%] Gathering data...
[20%] Submitting ticket...
[50%] Ticket created: 12345678910111213...
[100%] Ticket created: 12345678910111213...
+-----------+-------------------------------------------------------------------+
|    ticket | 12345678910111213                                                 |
|       url | https://support-proxy.ixsystems.com/issues/salesforce/123456...   |
| has_debug | true                                                              |
+-----------+-------------------------------------------------------------------+
```

{{< /expand >}}
{{< /expand >}}

### Update_customer_information Command

The `update_customer_information` command modifies stored customer information.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

{{< expand "Using the Update_customer_information Command" "v" >}}
#### Description
`update_customer_information` has one required property, `customer_information_update`. 
`customer_information_update` has seven properties, four of which have additional configurable properties (see the **Customer_information_update Properties** below).
If entering a command string, enter the command then press <kbd>Enter</kbd>.
When making complex changes, enter `update_customer_information --` to use the interactive arguments editor. 
The command returns a chart of stored customer information.

<!-- Once CLI syntax for complex commands is discovered, these properties can be revisted and expanded, but for now I'm leaving it at this level of "soft-documentation" -->
{{< expand "Customer_information_update Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `company` | no | Enter the company name for the customer. | <code>"company":"<em>Name</em>"</code> |
| `administrative_user` | no | Enter identification information for the system administrator.<br>Properties:<br><li>`first_name`<br><li>`last_name`<br><li>`title`<br><li>`office_phone`<br><li>`mobile_phone`<br><li>`primary_email`<br><li>`secondary_email`<br><li>`address`<br><li>`city`<br><li>`state`<br><li>`zip`<br><li>`country` | Use the interactive arguments editor. |
| `technical_user` | no | Enter identification information for the system technical user or a second adminstrative contact person.<br>Properties:<br><li>`first_name`<br><li>`last_name`<br><li>`title`<br><li>`office_phone`<br><li>`mobile_phone`<br><li>`primary_email`<br><li>`secondary_email`<br><li>`address`<br><li>`city`<br><li>`state`<br><li>`zip`<br><li>`country` | Use the interactive arguments editor. |
| `reseller` | no | Enter identification information for the system reseller, if applicable.<br>Properties:<br><li>`company`<br><li>`first_name`<br><li>`last_name`<br><li>`title`<br><li>`office_phone`<br><li>`mobile_phone` | Use the interactive arguments editor. |
| `physical_location` | no | Enter the physical location of the system.<br>Properties:<br><li>`address`<br><li>`city`<br><li>`state`<br><li>`zip`<br><li>`country`<br><li>`contact_name`<br><li>`contact_phone_number`<br><li>`contact_email` | Use the interactive arguments editor. |
| `primary_use_case` | no | Enter the primary use-case for the system. | <code>"primary_use_case":"<em>use1</em>"</code> |
| `other_primary_use_case` | no | Enter the another primary or a secondary use-case for the system. | <code>"primary_use_case":"<em>use2</em>"</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system truenas update_customer_information customer_information_update={"company":"<em>Name</em>", "primary_use_case":"<em>use1</em>", "other_primary_use_case":"<em>use2</em>"}</code>

Where *Name* is the customer company, *use1* is the primary use-case for the system, and *use2* is the other primary or secondary use-case for the system.

{{< expand "Command Example" "v" >}}
```
system truenas update_customer_information customer_information_update={"company":"iXsystems", "primary_use_case":"testing", "other_primary_use_case":"documentation"}
+----------------+---------------------------+
|             id | 1                         |
|           data | <dict>                    |
|     updated_at | 2023-08-29T17:21:24+00:00 |
|        sent_at | <null>                    |
| form_dismissed | false                     |
| immutable_data | <null>                    |
|   needs_update | false                     |
+----------------+---------------------------+
```
{{< /expand >}}
{{< /expand >}}
