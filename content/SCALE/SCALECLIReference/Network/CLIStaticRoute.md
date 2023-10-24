---
title: "Static_Route"
description: "Provides information about the network static_route namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 60
aliases:
draft: false
tags:
- scaleclinetwork
- scalenetwork
- scalestaticroute
book: "SCALECLIReference"
volume: "SCALE"
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Static_Route Namespace
The **static_route** namespace has four commands, and is based on network static route creation and management functions found in the SCALE API and web UI.
It provides access to network methods through the **static_route** commands.

## Static_Route Commands
The following **static_route** commands allow you to create new and manage existing static routes.

You can enter commands from the main CLI prompt or from the **static_route** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command
The `create` command adds a single static route IP address and gateway to the system.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has three required properties, `destination`, `gateway`, and `description`.
See **Create Properties** below for details.
Enter the property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the `network static_route query` command to verify creation of the static route.

{{< nest-expand "Create Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `destination` | Yes | Enter the IP address in the format a.b.c.d/e for the static route you want to create. | <code>destination="<i>a.b.c.d/e</i>"</code> |
| `gateway` | Yes | Enter the IP address for the gateway for the destination IP address in the format a.b.c.d. | <code>gateway="<i>a.b.c.d</i>"</code> |
| `description` | No | Enter optional text to describe the static route. | <code>description="<i>test</i>"</code> |
{{< /truetable >}}
{{< /nest-expand >}}

#### Usage
From the CLI prompt, enter:

<code>network static_route create destination="<i>10.123.0.123/20</i>" gateway="<i>10.123.0.1</i>" description="<i>test</i>"</code>

Where:
* *10.123.0.123/20* is IP address for the static route.
* *10.123.0.1* is the gateway for the destination IP address.
* *test* is a description for the static route.

{{< nest-expand "Command Example" "v" >}}
```
network static_route create destination="10.123.0.123/20" gateway="10.123.0.1" description="test"

```
{{< /nest-expand >}}
{{< /expand >}}

### Delete Command
The `delete` command deletes the static route matching the ID entered.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`.
`id` is the system-assigned number for the static route found in the output of the `network static_route query` command.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the `network static_route query` command to verify deletion of the static route.

#### Usage
From the CLI prompt, enter:

<code>network static_route delete id="<i>1</i>"</code>

Where *1* is the system-assigned number for the static route.

{{< nest-expand "Command Example" "v" >}}
```
network static_route delete id=1

```
{{< /nest-expand >}}
{{< /expand >}}

### Query Command
The `query` command lists details on static routes added to the system.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument.
To narrow the information returned include the one property of the static route you want to see for all static routes.
Properties are `id`, `destination`, `gateway`, and `description`.
Enter the command then press <kbd>Enter</kbd>.
The command returns the values for all static routes configured on the system, or just the property included in the command.

#### Usage
From the CLI prompt, enter:

`network static_route query`

{{< nest-expand "Command Example" "v" >}}
```
network static_route query
+----+-----------------+------------+-------------+
| id | destination     | gateway    | description |
+----+-----------------+------------+-------------+
| 1  | 10.123.0.123/20 | 10.123.0.1 | TEST        |
+----+-----------------+------------+-------------+
```
{{< /nest-expand >}}
{{< /expand >}}

### Update Command
Use the `update` command to change the properties of the static route matching the ID entered.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has one required property, `id`.
See **Update Properties** below for details.
Enter the property arguments using the `=` delimiter to separate property and value. Double-quote values with special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the `network static_route query` command to verify updates to the static route.

{{< nest-expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `destination` | Enter the IP address in the format a.b.c.d/e for the static route you want to create. | <code>destination="<i>a.b.c.d/e</i>"</code> |
| `gateway` | Enter the IP address for the gateway for the destination IP address in the format a.b.c.d. | <code>gateway="<i>a.b.c.d</i>"</code> |
| `description` | Enter optional text to describe the static route. | <code>description="<i>test</i>"</code> |
{{< /truetable >}}
{{< /nest-expand >}}

#### Usage
From the CLI prompt, enter:

<code>network static_route update id=<i>1</i> description="<i>test route</i>"</code>

Where:
* *1* is system-assigned ID for the static route.
* *test route* is the new descriptive text for the static route.

{{< nest-expand "Command Example" "v" >}}
```
network static_route update id=1 description="test route"

```
{{< /nest-expand >}}
{{< /expand >}}

{{< taglist tag="scaleclinetwork" vol="SCALE" limit="5" title="Related CLI Network Articles" >}}
{{< taglist tag="scalestaticroute" vol="SCALE" limit="5" title="Related Static Route Articles" >}}
