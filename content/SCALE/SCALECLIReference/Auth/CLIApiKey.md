---
title: "API_Key"
description: "Provides information about the auth api_key namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scalecliauth
- scaleapikeys
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

## API_Key Namespace

The **api_key** namespace has five commands and is based on API key management functions found in the SCALE API and web UI.
It provides access to API key creation and management methods through the **api_key** commands.

## API_Key Commands

The following **api_key** commands allow you to create, view, and delete API keys.

You can enter commands from the main CLI prompt or from the **auth** namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command

The `create` command lets you create simple or complex API keys.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has one required property, `name`, and one optional property `allowlist`.
See **Create Command Properties** below for more information on these properties.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the API key when successful.

{{< include file="/_includes/APIKeyWarn.md" >}}

{{< expand "Create Command Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a user-readable name for the API key using alphanumeric characters with or without the underscore `_`. Enter the property argument using the `=` to separate property and value. | <code>name=<i>mykey</i></code> |
| `allowlist` | No | Use to enter the HTTP method and WebSocket API authorized to use the API key. <br>Enter the required `resource` permitted to use this key. Append **/api/docs/** to the end of your TrueNAS web UI address to see our full list of WebSocket API resources. <br>Enter the HTTP `method` as a string using any of these values: <br><li>`GET`to retrieve information about the API resource. <br><li>`POST` to create an API resource. <br><li>`PUT` to update an API resource. <br><li>`DELETE` to delete the API resource. <br><li>`CALL`,or <br><li>`SUBSCRIBE`</li> <br>Enclosed property arguments within curly brackets `{}` inside square brackets `[]`. Enter property arguments using the `=` to separate double-quoted property and values. Separate each propery argument with a comma and space. | <code>allowlist=[{"method"="<i>SUBSCRIBE</i>", ["resource"="<i>certificate.query</i>"}]</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>auth api_key create name=<i>name</i></code>

Where *name* is the name you want to assign to the key.

{{< expand "Command Example" "v" >}}
```
auth api_key create name=apikey3
API Key: 3-xTqwhyf3SrUgUlotMQEEGuUr6oRvqg89SBDfXob6xtWSgLbRiDBr6SVRWxswSXx3
```
{{< /expand >}}
{{< /expand >}}

{{< expand "Creating a Complex API Key" "v" >}}
#### Description
Enter the `create` command `name` property argument followed by the `allowlist` property argument.
You can also specify an HTTP method and a WebSocket API method.
Enter the command string then press <kbd>Enter</kbd>.
The command returns the API key when successful.

{{< include file="/_includes/APIKeyWarn.md" >}}

#### Usage
From the CLI prompt, enter:

<code>auth api_key create name=<i>name</i> allowlist=[{"method":"<i>METHOD</i>","resource":"<i>api.resource</i>"}]</code>

Where:
* *name* is the name you want to assign to the key.
* *METHOD* is the HTTP method you want the key to use. Options are GET, POST, PUT, DELETE, CALL, and SUBSCRIBE.
* *api.resource* is the WebSocket API resource you want to use. Append "/api/docs/" to the end of your TrueNAS web UI address to see our full list of WebSocket API resources.

{{< expand "Command Example" "v" >}}
```
auth api_key create name=apikey3 allowlist=[{"method":"SUBSCRIBE","resource":"certificate.query"}]
API Key: 3-xTqwhyf3SrUgUlotMQEEGuUr6oRvqg89SBDfXob6xtWSgLbRiDBr6SVRWxswSXx3
```
{{< /expand >}}
{{< /expand >}}

### Delete Command
The `delete` command deletes an API key.

{{< expand "Using the Delete Command" "v" >}}
#### Description
The `delete` command has one required property, `id`.
Enter the property argument using the `=` delimiter to separate the property and value.
Enter the command then press <kbd>Enter</kbd>.
The command returns nothing when successful.

#### Usage
From the CLI prompt, enter:

<code>auth api_key delete id=<i>number</i></code>

Where *number* is the list number of the API key you want to delete. Use the [`query`](#query-command) command to retrieve id numbers for all API keys on the system.
{{< expand "Command Example" "v" >}}
```
auth api_key delete id=1
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command

The `get_instance` command returns a table of properties for the specified API key.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` command has one required property, `id`.
Enter the property argument using the `=` delimiter to separate the property and value.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of properties for the specified API key when successful.

#### Usage
From the CLI prompt, enter:

<code>auth api_key get_instance id=<i>number</i></code>

Where *number* is the list number of the API key you want to delete. Use the [`query`](#query-command) command to retrieve id numbers for all API keys on the system.

{{< expand "Command Example" "v" >}}
```
auth api_key get_instance id=2
+------------+---------------------------+
|         id | 2                         |
|       name | apikey2                   |
| created_at | 2023-08-22T19:58:59+00:00 |
|  allowlist | <list>                    |
+------------+---------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command returns a table of properties for all API keys.

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of properties for all API keys when successful.

#### Usage
From the CLI prompt, enter:

`auth api_key query`

{{< expand "Command Example" "v" >}}
```
auth api_key query
+----+---------+---------------------------+-----------+
| id | name    | created_at                | allowlist |
+----+---------+---------------------------+-----------+
| 2  | apikey2 | 2023-08-22T19:58:59+00:00 | <list>    |
| 3  | apikey3 | 2023-08-22T20:14:59+00:00 | <list>    |
| 4  | apikey4 | 2023-08-22T20:17:44+00:00 | <list>    |
+----+---------+---------------------------+-----------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command

The update command allows you to update existing API keys.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has one required property, `id`, and three configurable properties.
See **Update Command Properties** below for details.
After specifying the `id` of the API key you want to update, you must include at least one of the properties.
Enter `--` after entering the `id` property argument to open the interactive argument editor.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table of properties for all API keys when successful.

#### Usage
From the CLI prompt, enter:

<code>auth api_key update id=<i>number</i> name=<i>name</i> allowlist=[{"method":"<i>METHOD</i>","resource":"<i>api.resource</i>"}] reset=<i>true/false</i></code>

Where
* *number* is the list number of the API key you want to update. For example, the first API key created on the system would be 1.
* *name* is the new name you want to assign to the key.
* *METHOD* is the HTTP method you want the key to use. Options are GET, POST, PUT, DELETE, CALL, and SUBSCRIBE.
* *api.resource* is the WebSocket API resource you want to use. Append "/api/docs/" to the end of your TrueNAS web UI address to see our full list of WebSocket API resources.
* *true/false* determines if you want to remove the existing API key and generate a new random key.

{{< expand "Command Example" "v" >}}
```
auth api_key update id=2 name=apikey3 allowlist=[{"method":"SUBSCRIBE","resource":"certificate.query"}] reset=true
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliauth" limit="10" title="Related CLI Auth Articles" >}}
{{< taglist tag="scaleapikeys" limit="10" title="Related API Key Articles" >}}
