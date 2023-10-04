---
title: "Alert"
description: "Provides information about the system alert namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 15
aliases:
draft: false
tags:
- scaleclisystem
- scalealerts
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Alert Namespace
The **alert** namespace has one namespace, **service**, and six commands, and is based on alert management functions found in the SCALE API and web UI.
It provides access to alert class and service methods through the **alert** commands.

## Alert Commands 
The following **alert** commands allow you to manage alerts.

You can enter commands from the main CLI prompt or from the **alert** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}      

### Class Command
Use the `classes` command to lists alerts on the system.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

{{< expand "Using the Class Command" "v" >}}
#### Description
The `class` command has two required properties, `config` and `update`.
`config` does not require entering a property argument. 
`update` has one required property argument, `classes`. This command property is a work in progress. 
Enter the command then press <kbd>Enter</kbd>.
It returns the the class ID number and a `<dict>` for classes.

#### Usage
From the CLI prompt, enter:

`system alert class config`

{{< nest-expand "Command Example" "v" >}}
```
system alert class config
+---------+--------+
|      id | 1      |
| classes | <dict> |
```
{{< /nest-expand >}}
{{< /expand >}}

### Dismiss Command
The `dismiss` command dismisses the alert matching the alert UUID entered.

Use the `system alert list` command to get the alert UUID.
{{< expand "Using the Dismiss Command" "v" >}}
#### Description
The `dismiss` command has one required property, `uuid`.
`uuid` is the system-assigned identification number for an alert.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.
Use the `system alert list` command to verify the `system alert dismiss` command removed the alert.

#### Usage
From the CLI prompt, enter:

<code>system alert dismiss uuid="<i>3884c4f0-291b-4303-ab5e-4fb27a4dd142</i>"</code>

Where *3884c4f0-291b-4303-ab5e-4fb27a4dd142* is the uuid for an alert.

{{< nest-expand "Command Example" "v" >}}
```
system alert dismiss uuid="3884c4f0-291b-4303-ab5e-4fb27a4dd142"

```
{{< /nest-expand >}}
{{< /expand >}}

### List Command
The `list` command system alert lists all types of alerts including active/dismissed currently in the system.

{{< expand "Using the List Command" "v" >}}
#### Description
The `list` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with system alert UUIDs, alert sources, klass, and arguments, the node (controller A in single controller systems), key, date/time, last occurrencess, and dismissed alerts, mail, text description with alert status, the ID, alert level, formatted as text, and if it is a one-shot alert.

#### Usage
From the CLI prompt, enter:

`system alert list`

{{< nest-expand "Command Example" "v" >}}
```
system alert list
+--------------------------------------+----------------+-------------------+-----------+--------------+------------------------------------------------------------------+---------------------------+---------------------------+-----------+--------+------------------------------------------------------------------+--------------------------------------+----------+------------------------------------------------------------------+----------+
| uuid                                 | source         | klass             | args      | node         | key                                                              | datetime                  | last_occurrence           | dismissed | mail   | text                                                             | id                                   | level    | formatted                                                        | one_shot |
+--------------------------------------+----------------+-------------------+-----------+--------------+------------------------------------------------------------------+---------------------------+---------------------------+-----------+--------+------------------------------------------------------------------+--------------------------------------+----------+------------------------------------------------------------------+----------+
| 68c1d491-4ba1-4d4f-978b-68e943d9bb0b | BootPoolStatus | BootPoolStatus    | <dict>    | Controller A | {"status": "ONLINE", "status_detail": "One or more devices ha... | 2023-08-25T04:16:18+00:00 | 2023-09-13T14:34:09+00:00 | false     | <null> | Boot pool status is %(status)s: %(status_detail)s.               | 68c1d491-4ba1-4d4f-978b-68e943d9bb0b | CRITICAL | Boot pool status is ONLINE: One or more devices has experienc... | false    |
| 37a81617-04dd-469b-887e-3b2c1090ed34 |                | CatalogSyncFailed | <dict>    | Controller A | "TRUENAS"                                                        | 2023-09-26T18:23:47+00:00 | 2023-10-03T18:26:09+00:00 | false     | <null> | Failed to sync %(catalog)s catalog: %(error)s                    | 37a81617-04dd-469b-887e-3b2c1090ed34 | CRITICAL | Failed to sync TRUENAS catalog: [EFAULT] Failed to clone 'htt... | true     |
|                                      |                |                   |           |              |                                                                  |                           |                           |           |        |                                                                  |                                      |          | fatal: unable to access 'https://github.com/truenas/charts.gi... |          |
| 6f6ac0aa-466e-4376-b8d2-1796d6cf096e |                | PoolUpgraded      | tank      | Controller A | "tank"                                                           | 2023-09-21T18:21:34+00:00 | 2023-09-21T18:21:34+00:00 | false     | <null> | New ZFS version or feature flags are available for pool '%s'.... | 6f6ac0aa-466e-4376-b8d2-1796d6cf096e | WARNING  | New ZFS version or feature flags are available for pool 'tank... | false    |
| 3884c4f0-291b-4303-ab5e-4fb27a4dd142 |                | ScrubFinished     | tank      | Controller A | "tank"                                                           | 2023-08-06T07:00:06+00:00 | 2023-08-06T07:00:06+00:00 | false     | <null> | Scrub of pool %r finished.                                       | 3884c4f0-291b-4303-ab5e-4fb27a4dd142 | INFO     | Scrub of pool 'tank' finished.                                   | true     |
| f00fc270-a944-4b51-9435-bc45fc9e8f03 |                | ScrubFinished     | boot-pool | Controller A | "boot-pool"                                                      | 2023-09-28T16:21:46+00:00 | 2023-09-28T16:21:46+00:00 | false     | <null> | Scrub of pool %r finished.                                       | f00fc270-a944-4b51-9435-bc45fc9e8f03 | INFO     | Scrub of pool 'boot-pool' finished.                              | true     |
+--------------------------------------+----------------+-------------------+-----------+--------------+------------------------------------------------------------------+---------------------------+---------------------------+-----------+--------+------------------------------------------------------------------+--------------------------------------+----------+------------------------------------------------------------------+----------+
```
{{< /nest-expand >}}
{{< /expand >}}

### List_Categories Command
The `list_categories` command displays a list of alert categories.

{{< expand "Using the List_Categories Command" "v" >}}
#### Description
The `list_categories` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of alert categories that includes the ID, title and classes (<list>).

#### Usage
From the CLI prompt, enter:

`system alert list_categories`

{{< nest-expand "Command Example" "v" >}}
```
system alert list_categories
+-------------------+-------------------------------------------------+---------+
| id                | title                                           | classes |
+-------------------+-------------------------------------------------+---------+
| APPLICATIONS      | Applications                                    | <list>  |
| CERTIFICATES      | Certificates                                    | <list>  |
| CLUSTERING        | Clustering                                      | <list>  |
| DIRECTORY_SERVICE | Directory Service                               | <list>  |
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
{{< /nest-expand >}}
{{< /expand >}}


### List_Policies Command
The `list_policies` command displays a list of alert policies.

{{< expand "Using the List_Policies Command" "v" >}}
#### Description
The `list_policies` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of alert frequencies.

#### Usage
From the CLI prompt, enter:

`system alert list_policies`

{{< nest-expand "Command Example" "v" >}}
```
system alert list_policies
IMMEDIATELY
HOURLY
DAILY
NEVER
```
{{< /nest-expand >}}
{{< /expand >}}

### Restore Command
The `restore` command restores a dismissed alert matching the UUID entered. You can restore dismissed alerts that are still active.

{{< expand "Using Restore Command" "v" >}}
#### Description
The `restore` command has one required property argument, `uuid`.
`uuid` is the system-assigned identification number for an alert.
Enter the property argument using the `=` delimiter to separate propery and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.
Use the `system alert list` command to verify the `system alert restore` command restored the alert.

#### Usage
From the CLI prompt, enter:

<code>system alert restore uuid="<i>3884c4f0-291b-4303-ab5e-4fb27a4dd142</i>"</code>

Where *3884c4f0-291b-4303-ab5e-4fb27a4dd142* is the uuid for a dismissed alert.

{{< nest-expand "Command Example" "v" >}}
```
system alert restore uuid="3884c4f0-291b-4303-ab5e-4fb27a4dd142"

```
{{< /nest-expand >}}
{{< /expand >}}

## Alert Service Commands
The `alert service` namespace has seven commands that allow you to configure and manage alert services.

### Service Create Command
The `services create` command allows you to configure an alert service. 
Use the `system alert service list_type` command to get the list of alert service types. 
Use the `system alert service query` command to see which alert services exist on the system.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}} 
<!-- cannot get this command to work, errors at the attributes property argument.
{{< expand "Using the Service Create Command" "v" >}}
#### Description
The `services create` command hase five property arguments, `name`, `type`, `attributes`, `level` and `enabled`. 
See **Create Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Use `system alert service query` to verify the system added the alert servcie

{{< nest-expand "Create Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|-------------|----------------|
| `name` | Yes | Enter a name for the alert. Enter | <code>name="<i>AlertTypeName</i>"</code> |
| `type` | Yes | Enter the `type` as one of the following: `AWSSNS`, `Mail`, `InfluxDB`, `Mattermost`, `OpsGenie`, `PagerDuty`, `Slack`, `SNMPTrap`, `Telegram`, or `VicotorOps`. | <code>type=<i>PagerDuty</i></code> | 
| `attributes` | Yes | Enter the authentication properies for the `type` selected. See **Alert Service Type Authentication Properties** below for details. Use the UI or enter `--` to open the interactive argument editor to set these properties. | <code>attributes={" ":"<i> </i>"}</code> |
| `level` | Yes | Enter the level option as one of the following: `INFO`, `NOTICE`, `WARNING`, `ERROR`, `CRITCAL`, `ALERT`, or `EMERGENCY`. | <code>level=<i>WARNING</i></code> |
| `enabled` | No | Enter `true` to enable the service after entering the `service create` command, or `false` to enable it later. | `enabled=true` or `enabled=false` |  
{{< /truetable >}}
{{< /nest-expand >}}

{{< nest-expand "Service Type Authentication Properties" "v" >}}
{{< truetable >}}
Use the `attributes` property to specify the authentication settings required for each alert service type. 
Enter the `attribute` the property arguments inside the curly brackets `{}` and where the properties and values are double-quoted and separated by the `:` delimiter and each argument separated with a comma. 

<code>service create attributes={}</code> 

| Service Type | Property | Description |
|----------|-------------|----------------|
| `AWSSNS` | `AWS_region` | Enter the [AWS account region](https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html). |
|  | `ARN` |Enter the [Amazon resource name](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) For example: *arn:aws:sns:us-west-2:111122223333:MyTopic.* for publishing. |
|  | `key_id` | Enter the access Key ID for the linked AWS account. |
|  | `secret_key` | Enter the secret access key for the linked AWS account. |
| `Mail` | `email` | Enter a valid email address to receive alerts from this system. |
| `InfluxDB` | `host` | Enter the InfluxDB host name |
|  | `username` | Enter the username for this service. |
|  | `password` | Enter the password for the user of this service. |
|  | `database` | Enter the name of the InfixDB database. |
|  | `series` | Enter the InfuxDB time series name for the collected points. |
| `Mattermost` | `webhook_url` | Enter the [incoming webhook URL](https://docs.mattermost.com/configure/integrations-configuration-settings.html#integrate-enableincomingwebhooks) assoicated with this service. |
|  | `username`  | Enter the Mattermost username. |
|  | `channel` | Enter the [channel to receive notifications](https://docs.mattermost.com/help/getting-started/organizing-conversations.html/#managing-channels). This overrides the default channel in the incomming webhook settings. |
|  | `icon_url` | Icon file to use as the profile picture for new messages. Example: https://mattermost.org/wp-content/uploads/2016/04/icon.png.
Requires configuring Mattermost to override profile picture icons. https://docs.mattermost.com/administration/config-settings.html/#enable-integrations-to-override-profile-picture-icons |
| `OpsGenie` | `api_key` | Enter or paste the API key. Find the API key by signing into the OpsGenie web interface and going to [Integrations/Configured Integrations](http://10.234.27.252/ui/system/alert-settings#:~:text=Enter%20or%20paste%20the%20API%20key.%20Find%20the%20API%20key%20by%20signing%20into%20the%20OpsGenie%20web%20interface%20and%20going%20to%20Integrations/Configured%20Integrations.%20Click%20the%20desired%20integration%2C%20Settings%2C%20and%20read%20the%20API%20Key%20field) Click the desired integration, **Settings**, and read the API Key field. |
|  | `api_url` | Leave set to null to use the [OpsGenie API](https://docs.opsgenie.com/docs/api-overview).  |
| `PagerDuty` | `service_key` | Enter or paste the [integration/service key](https://v2.developer.pagerduty.com/v2/docs/events-api) for this system to access the PagerDuty API. |
|  | `client_name` | Enter the PagerDuty client name. |
| `Slack` | `webhook_url` | Enter or paste the [incoming webhook URL](https://api.slacek.com/incoming-webhooks) assoicated with this service. |
| `SNMPTrap` | `hostname` | Enter the host name or IP address of the system to receive SNMP trap notifications. |
|  | `port` | Enter the DP port number on the system receiving SNMP trap notifications. The default is `162`. |
|  | `SNMPv3_security_model` | Set to `true` to enable the SNMPv3 seclurity model. |
|  | `SNMP_community` | Enter the network community string. The community string acts like a user ID or password. A user with the correct community string has access to network information. The default is public. For more information, see [What is an SNMP Community String?](https://community.helpsystems.com/knowledge-base/intermapper/snmp/snmp-community-strings/). |
| `Telegram` | `bot_api_token` | Enter the Telegram Bot API token [How to create a Telegram Bot](https://core.telegram.org/bots/#3-how-do-i-create-a-bot). |
|  | `list_of_chat_ids` | Enter a list of chat IDs separated by space, comma, or semicolon. To find your chat ID send a message to the bot, group or channel and visit https://api.telegram.org/bot/getUpdates. |
| `VictorOps` | `api_key` | Enter or paste the VictorOps [API key](https://help.victorops.com/knowledge-base/api/). |
|  | `routing_key` | Enter or paste the VictorOps [routing key](https://portal.victorops.com/public/api-docs.html/#/Routing32Keys). |
{{< /truetable >}}
{{< /nest-expand >}}

#### Usage

From the CLI prompt, enter:

<code>system alert service create name=<i> </i> type=<i> </i> attributes={} level=<i> </i> enabled=<i>true</i></code>

{{< nest-expand "Command Example" "v" >}}
```
system alert service create name=
```
{{< /nest-expand >}}
{{< /expand >}} -->

### Service Delete Command
The `services delete` command deletes configure an alert service matching the ID entered.

Use the `alert service delete` command to get the list of alert services and their IDs.
{{< expand "Using the Service Delete Command" "v" >}}
#### Description
The `service delete` command has one required property, `id`.
`id` is the system-assigned identification number for the alert service.
Enter the property argument using the `=` delimiter to separate propery and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.
Use the `system alert service query` command to verify the system removed the alert service.

#### Usage
From the CLI prompt, enter:

<code>system alert service delete id=<i>2</i></code>

Where *2* is the system-assigned ID number.

{{< nest-expand "Command Example" "v" >}}
```
system alert service delete id=2
```
{{< /nest-expand >}}
{{< /expand >}}

### Service Get_Instance Command
The `service get_instance` command table lists the alert service setting details for the ID entered. 
Use the `alert service query` command before other `system alert service` commands that require the service ID number.

{{< expand "Using the Service Get_Instance Command" "v" >}}
#### Description
The `service get_instance` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the system-assigned ID number and other alert service setting details for the ID entered.

#### Usage
From the CLI prompt, enter:

<code>system alert service get_instance id=<i>2</i></code>

Where *2* is the system-assigned ID for the alert service.
{{< nest-expand "Command Example" "v" >}}
```
system alert service get_instance id=2
+-------------+---------+
|          id | 2       |
|        name | E-Mail  |
|        type | Mail    |
|  attributes | <dict>  |
|     enabled | true    |
|       level | WARNING |
| type__title | Email   |
+-------------+---------+
```
{{< /nest-expand >}}
{{< /expand >}}

### Service List_Types
The `service list_types` command table lists the type of alert service. 

{{< expand "Using the Service List_Types Command" "v" >}}
#### Description
The `service list_type` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of alert service.

#### Usage
From the CLI prompt, enter:

`system alert service list_types`

{{< nest-expand "Command Example" "v" >}}
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
{{< /nest-expand >}}
{{< /expand >}}

### Service Query Command
The `service query` command table lists alert service setting details. 
Use the `alert service query` command before other `system alert service` commands that require the service ID number.

{{< expand "Using the Service Query Command" "v" >}}
#### Description
The `service query` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the system-assigned ID number and other alert service setting details.

#### Usage
From the CLI prompt, enter:

`system alert service query`

{{< nest-expand "Command Example" "v" >}}
```
system alert service query
+----+-----------+----------+------------+---------+---------+-------------+
| id | name      | type     | attributes | enabled | level   | type__title |
+----+-----------+----------+------------+---------+---------+-------------+
| 1  | SNMP Trap | SNMPTrap | <dict>     | true    | WARNING | SNMP Trap   |
| 2  | E-Mail    | Mail     | <dict>     | true    | WARNING | Email       |
+----+-----------+----------+------------+---------+---------+-------------+
```
{{< /nest-expand >}}
{{< /expand >}}

### Service Test Command
Use the `service test` command to send a test alert using the specified alert service.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out until we can get the create command to work so we can test a service
{{< expand "Using the Service Test Command" "v" >}}
#### Description
The `service test` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the system-assigned ID number and other alert service setting details.
#### Usage
From the CLI prompt, enter:

<code>system alert service create name=<i> </i> type=<i> </i> attributes={} level=<i> </i> enabled=<i>true</i></code>

{{< nest-expand "Command Example" "v" >}}
```

```
{{< /nest-expand >}}
{{< /expand >}} -->

### Services Update Command
The `services update` command allows you to manage an existing alert service. 
Use the `system alert service query` command to locate the ID for the service.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

{{< expand "Using the Service Update Command" "v" >}}
#### Description
The `service update` command has one required property, `id`, and four optional property arguments, `name`, `type`, `attributes`, `level` and `enabled`. `attributes` is a work in progress.
See **Service Update Properties** below for details. 
`id` is the system-assigned number for an alert service found in the output of the `system alert service query` command.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.
Use the `system alert service query` command to verify the system added the service.

{{< nest-expand "Service Update Properties" "v" >}}
{{< truetable >}}

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a name for the alert. Enter | <code>name="<i></i>"</code> |
| `type` | Yes | Enter the `type` as one of the following options: `AWSSNS`, `Mail`, `InfluxDB`, `Mattermost`, `OpsGenie`, `PagerDuty`, `Slack`, `SNMPTrap`, `Telegram`, or `VicotorOps`. | <code>type=<i></i></code> | 
| `level` | Yes | Enter the level option as one of the following: `INFO`, `NOTICE`, `WARNING`, `ERROR`, `CRITCAL`, `ALERT`, or `EMERGENCY`. | <code>level=<i>WARNING</i></code> |
| `enabled` | No | Enter `true` to enable the service after entering the `service create` command, or `false` to enable it later. | `enabled=true` or `enabled=false` |
<!-- need verification on what attributes are for each service 
| `attributes` | Yes | Enter the authentication properies for the `type` selected. See **Alert Service Type Authentication Properties** below for details. Use the UI or enter `--` to open the interactive argument editor to set these properties. |  | <code>attributes={" ":"<i> </i>"}</code> | -->
{{< /truetable >}}
{{< /expand >}}

From the CLI prompt, enter:

<code>system alert service id=<i>2</i> level=<i>ALERT</i></code>

Where:
* *2* is the ID for the service to update.
* *ALERT* is the new level for the service.
{{< nest-expand "Command Example" "v" >}}
```
system alert service update id=2 level=ALERT

```
{{< /nest-expand >}}
{{< /expand >}}

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
{{< taglist tag="scalealerts" limit="10" title="Related Alert Articles" >}}