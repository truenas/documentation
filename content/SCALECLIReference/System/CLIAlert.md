---
title: "Alert"
description: "Provides information about the system alert namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 15
aliases:
draft: false
tags:
- alerts
---

## Alert Namespace

The **alert** namespace has seven commands and is based on alert functions found in the SCALE API and web UI.
It provides access to alert management methods through the **alert** commands.

## Alert Commands

The following **alert** commands allow you to view and manage alerts and policies.

You can enter commands from the main CLI prompt or from the alert namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

## Class Command

The `class` command allows you to view and update the default alert settings.

{{< expand "Viewing Current Alert Settings">}}
#### Description
The `class` command requires the `config` property to view current alert settings.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of current alert settings when successful.

#### Usage
From the CLI prompt, enter:

`system alert class config`

{{< expand "Command Example" "v" >}}

```
system alert class config
+---------+--------+
|      id | 1      |
| classes | <dict> |
+---------+--------+
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Updating Default Alert Settings">}}
#### Description
The `class` command requires the `update` property and `classes` argument to update default alert settings.
Enter the command then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

#### Usage
From the CLI prompt, enter:

`system alert class update classes={"class":{"level":"LEVEL","policy":"POLICY"}}`

Where:
* *class* is the alert category class you want to update.
* *LEVEL* is the alert level you want to apply.
* *POLICY* is the alert notification frequency you want to apply.

{{< expand "Command Example" "v" >}}

```
system alert class update classes={"UPSBatteryLow":{"level":"INFO","policy":"HOURLY"}}
```
{{< /expand >}}
{{< /expand >}}

## Dismiss Command

The `dismiss` command dismisses alerts based on alert UUID.

{{< expand "Using the Dismiss Command">}}
#### Description
The `dismiss` command requires the `UUID` property.
Enter the command then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

#### Usage
From the CLI prompt, enter:

<code>system alert dismiss uuid="<i>alertuuid</i>"</code>

Where *alertuuid* is the UUID of the alert you want to dismiss.

{{< expand "Command Example" "v" >}}
```
dismiss uuid="59579a69-55a4-4cad-8d20-3bfceee2c4c5"
```
{{< /expand >}}
{{< /expand >}}

## List Command

The `list` command lists all types of alerts including active and dismissed currently in the system.

{{< expand "Using the List Command">}}
#### Description
The `list` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of current alerts when successful.

#### Usage
From the CLI prompt, enter:

`system alert list`

{{< expand "Command Example" "v" >}}

```
system alert list
+--------------------------------------+-----------------+------------------+--------------------+--------------+------------------------+---------------------------+---------------------------+-----------+--------+------------------------------------------------------------------+--------------------------------------+----------+------------------------------------------------------------------+----------+
| uuid                                 | source          | klass            | args               | node         | key                    | datetime                  | last_occurrence           | dismissed | mail   | text                                                             | id                                   | level    | formatted                                                        | one_shot |
+--------------------------------------+-----------------+------------------+--------------------+--------------+------------------------+---------------------------+---------------------------+-----------+--------+------------------------------------------------------------------+--------------------------------------+----------+------------------------------------------------------------------+----------+
| 59579a69-55a4-4cad-8d20-3bfceee2c4c5 | USBStorage      | USBStorage       | /dev/sr0           | Controller A | "/dev/sr0"             | 2023-05-24T16:08:04+00:00 | 2023-09-19T19:06:48+00:00 | false     | <null> | A USB storage device %r has been connected to this system. Pl... | 59579a69-55a4-4cad-8d20-3bfceee2c4c5 | CRITICAL | A USB storage device '/dev/sr0' has been connected to this sy... | false    |
| a9a5ada0-0dde-42a0-b3c4-df878696e38a |                 | PoolUpgraded     | tank               | Controller A | "tank"                 | 2023-09-06T01:13:03+00:00 | 2023-09-06T01:13:03+00:00 | false     | <null> | New ZFS version or feature flags are available for pool '%s'.... | a9a5ada0-0dde-42a0-b3c4-df878696e38a | WARNING  | New ZFS version or feature flags are available for pool 'tank... | false    |
| 949f4fd7-051a-481e-bdc0-d9dab216c9df | EnclosureStatus | EnclosureHealthy | R30 NVMe Enclosure | Controller A | ["R30 NVMe Enclosure"] | 2023-05-24T16:08:02+00:00 | 2023-09-19T19:06:48+00:00 | false     | <null> | Enclosure (%s) is healthy.                                       | 949f4fd7-051a-481e-bdc0-d9dab216c9df | INFO     | Enclosure (R30 NVMe Enclosure) is healthy.                       | false    |
| bd3afbac-fd91-4461-a346-6f05a8679d8b |                 | ScrubFinished    | tank               | Controller A | "tank"                 | 2023-09-03T07:00:08+00:00 | 2023-09-03T07:00:08+00:00 | false     | <null> | Scrub of pool %r finished.                                       | bd3afbac-fd91-4461-a346-6f05a8679d8b | INFO     | Scrub of pool 'tank' finished.                                   | true     |
| 43f9025e-29c3-4a22-b95f-88186a4fd93b |                 | ScrubFinished    | boot-pool          | Controller A | "boot-pool"            | 2023-09-18T10:45:04+00:00 | 2023-09-18T10:45:04+00:00 | false     | <null> | Scrub of pool %r finished.                                       | 43f9025e-29c3-4a22-b95f-88186a4fd93b | INFO     | Scrub of pool 'boot-pool' finished.                              | true     |
+--------------------------------------+-----------------+------------------+--------------------+--------------+------------------------+---------------------------+---------------------------+-----------+--------+------------------------------------------------------------------+--------------------------------------+----------+------------------------------------------------------------------+----------+
```
{{< /expand >}}
{{< /expand >}}

## List_Categories Command

The `list_categories` command lists all types of alerts that the system can issue.

{{< expand "Using the List_Categories Command">}}
#### Description
The `list_categories` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of alert types when successful.

#### Usage
From the CLI prompt, enter:

`system alert list_categories`

{{< expand "Command Example" "v" >}}
```
system alert list_categories
+-------------------+-------------------------------------------------+---------+
| id                | title                                           | classes |
+-------------------+-------------------------------------------------+---------+
| APPLICATIONS      | Applications                                    | <list>  |
| CERTIFICATES      | Certificates                                    | <list>  |
| DIRECTORY_SERVICE | Directory Service                               | <list>  |
| HA                | High-Availability                               | <list>  |
| HARDWARE          | Hardware                                        | <list>  |
| KMIP              | Key Management Interoperability Protocol (KMIP) | <list>  |
| NETWORK           | Network                                         | <list>  |
| REPORTING         | Reporting                                       | <list>  |
| SHARING           | Sharing                                         | <list>  |
| STORAGE           | Storage                                         | <list>  |
| SYSTEM            | System                                          | <list>  |
| TASKS             | Tasks                                           | <list>  |
| UPS               | UPS                                             | <list>  |
+-------------------+-------------------------------------------------+---------+
```
{{< /expand >}}
{{< /expand >}}

## List_Policies Command

The `list_policies` command lists all possible alert policies. Alert policies indicate the frequency of the alerts.

{{< expand "Using the List_Policies Command">}}
#### Description
The `list_policies` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of alert types when successful.

#### Usage
From the CLI prompt, enter:

`system alert list_policies`

{{< expand "Command Example" "v" >}}
```
system alert list_policies
IMMEDIATELY
HOURLY
DAILY
NEVER
```
{{< /expand >}}
{{< /expand >}}

## Restore Command

The `restore` command dismisses alerts based on alert UUID.

{{< expand "Using the Restore Command">}}
#### Description
The `restore` command requires the `UUID` property.
Enter the command then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

#### Usage
From the CLI prompt, enter:

<code>system alert restore uuid="<i>alertuuid</i>"</code>

Where *alertuuid* is the UUID of the alert you want to restore.

{{< expand "Command Example" "v" >}}
```
restore uuid="59579a69-55a4-4cad-8d20-3bfceee2c4c5"
```
{{< /expand >}}
{{< /expand >}}

## Service Command

The `service` command allows you to view and modify alert services.

The `service` command has seven options, but can only run one at a time. Alert `service` command options are `create`, `delete`, `get_instance`, `list_types`, `query`, `test`, and `update`.

{{< expand "Creating an Alert Service">}}
#### Description
The `service create` command requires the `name`, `type`, `attributes`, `level`, and `enabled` properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

{{< expand "Service Create Properties" "v" >}}
{{< truetable >}}
| Property     | Required | Description | Syntax Example |
|--------------|----------|-------------|---------------|
| `name`       | Yes      | The name of the service. | <code>name=<em>name</em></code> |
| `type`       | Yes      | The service type. View all types using the `system alert service list_types` command. | <code>type=<em>Type</em></code> |
| `attributes` | Yes      | Authentication attributes for the service. Required attributes vary depending on the service. Separate each `attribute` and `value` pair with a comma. | <code>attributes={"<em>attribute</em>":"<em>value</em>","<em>attribute</em>":"<em>value</em>"}</code> |
| `level`      | Yes      | The alert level for the service. | <code>level=LEVEL</em></code> |
| `enabled`    | Yes      | Whether or not to enable the service | <code>enabled=<em>true/false</em></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system alert service create name=<i>name</i> type=<i>type</i> attributes={"<i>attribute</i>":"<i>value</i>"} level=<i>LEVEL</i> enabled=<i>true/false</i></code>

Where:
* *name* is the name you want to give the service.
* *type* is the service type.
* *attributes* are the authentication attributes for the service.
* *level* is the alert level you want to assign to the service.
* *enabled* turns the service on (true) or off (false).

{{< expand "Command Example" "v" >}}
```
service create name=NewAlertService type=PagerDuty attributes={"service_key":"u+Pgbsif8kE5rH5fzpXQ","client_name":"clientname"} level=INFO enabled=false
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Deleting an Alert Service">}}
#### Description
The `service delete` command requires the `id` property.
Enter the command then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

#### Usage
From the CLI prompt, enter:

<code>system alert service delete id=<i>number</i></code>

Where *number* is the ID number of the alert service you want to delete.

{{< expand "Command Example" "v" >}}
```
system alert service delete id=1
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Viewing an Alert Service Instance">}}
#### Description
The `service get_instance` command requires the `id` property.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of settings for the identified alert service.

#### Usage
From the CLI prompt, enter:

<code>system alert service get_instance id=<i>number</i></code>

Where *number* is the ID number of the alert service you want to view.

{{< expand "Command Example" "v" >}}
```
system alert service get_instance id=1
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Listing Alert Service Types">}}
#### Description
The `service list_types` has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of alert service types.

#### Usage
From the CLI prompt, enter:

<code>system alert service list_types</i></code>

{{< expand "Command Example" "v" >}}
```
system alert service list_types
+------------+------------+
| name       | title      |
+------------+------------+
| AWSSNS     | AWS SNS    |
| Mail       | Email      |
| InfluxDB   | InfluxDB   |
| Mattermost | Mattermost |
| OpsGenie   | OpsGenie   |
| PagerDuty  | PagerDuty  |
| Slack      | Slack      |
| SNMPTrap   | SNMP Trap  |
| Telegram   | Telegram   |
| VictorOps  | VictorOps  |
+------------+------------+
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Running a Basic Alert Service Query">}}
#### Description
The `service query` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of alert services when successful.

#### Usage
From the CLI prompt, enter:

`system alert service query`

{{< expand "Command Example" "v" >}}
```
system alert service query
+----+-----------+----------+------------+---------+---------+-------------+
| id | name      | type     | attributes | enabled | level   | type__title |
+----+-----------+----------+------------+---------+---------+-------------+
| 1  | SNMP Trap | SNMPTrap | <dict>     | true    | WARNING | SNMP Trap   |
| 2  | E-Mail    | Mail     | <dict>     | true    | WARNING | Email       |
+----+-----------+----------+------------+---------+---------+-------------+
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Running a Filtered Alert Service Query">}}
#### Description
Enter the `service query` command with one of the optional attributes to filter out other attributes from the query return.
See **Query Attributes** below for the list of seven available `query` attributes.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with the specified attribute.

{{< expand "Query Attributes" "v" >}}
{{< truetable >}}
| Attribute     | Purpose                                  |
|---------------|------------------------------------------|
| `id`          | Alert service ID number.                 |
| `name`        | Alert service name.                      |
| `type`        | Alert service type.                      |
| `attributes`  | Alert service authentication attributes. |
| `enabled`     | Whether service is enabled or disabled.  |
| `level`       | Alert level for the service.             |
| `type__title` | Alert service type name.                 |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system alert service query <i>attribute</i></code>

Where *attribute* is the query attribute you want to filter for.

{{< expand "Command Example" "v" >}}
```
system alert service query name
+-----------+
| name      |
+-----------+
| SNMP Trap |
| E-Mail    |
+-----------+
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Sending an Alert Service Test Alert">}}
#### Description
The `service test` command with requires the `alert_services_create` argument with the `name`, `type`, and `level` attributes.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true or false depending on if the test alert succeeded or not.

#### Usage
From the CLI prompt, enter:

<code>system alert service test alert_services_create{"name":"<i>name</i>", "type":"<i>type</i>", "level":"<i>LEVEL</i>"}</code>

Where:

* *name* is the alert service name.
* *type* is the service type.
* *level* is the alert level for the service.

{{< expand "Command Example" "v" >}}
```
system alert service test alert_service_create={"name":"E-Mail","type":"Mail","level":"WARNING"}
true
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Updating an Alert Service" "v" >}}
#### Description
The `update` command requires entering `id` and has five optional properties.
See **Update Command Properties** below for details.
After specifying the `id` of the alert service you want to update, you must include at least one property to update.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

{{< expand "Update Command Properties">}}
{{< truetable >}}
| Attribute     | Purpose                                  |
|---------------|------------------------------------------|
| `id`          | Alert service ID number.                 |
| `name`        | Alert service name.                      |
| `type`        | Alert service type.                      |
| `attributes`  | Alert service authentication attributes. |
| `level`       | Alert level for the service.             |
| `enabled`     | Whether service is enabled or disabled.  |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage disk update id=number property=<i>option</i></code>

Where:
* *number* is the ID number of the alert service you want to update.
* *option* is any of the properties listed in the **Update Command Properties** table above.

{{< expand "Command Example" "v" >}}
```
system alert service update id=1 Name=NewName type=Mail attributes={"email":"newemail@mail.com"} level=INFO enabled=true
```
{{< /expand >}}
{{< /expand >}}
