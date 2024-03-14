---
title: "api_key"
description: "Provides information about the auth api_key commands, command usage, optional and required command properties, syntax, and command examples."
weight: 10
aliases:
draft: false
tags:
- apikeys
---

{{< include file="/_includes/CLI/CLIGuideWIP.md" >}}

**api_key** commands are based on API key creation and management functions found in the SCALE API and web UI. 
Use to create new API keys, delete or update existing keys, and locate information on one or all keys added to the system.

Enter `auth api_key ls` to view the list of available commands.
{{< truetable >}}
| Commands | Description |
|----------|-------------|
| [`auth api_key create`](#auth-api_key-create) | Creates an API key. |
| [`auth api_key delete`](#auth-api_key-delete) | Deletes the API key matching the ID entered. |
| [`auth api_key get_instance`](#auth-api_key-get_instance) | Provides API key information for the ID entered. |
| [`auth api_key query`](#auth-api_key-query) | Provides information on all API keys configured in the system. |
| [`auth api_key update`](#auth-api_key-update) | Updates the API key matching the ID entered. |
{{< /truetable >}}

{{< expand "Interactive Argument Editor" "v" >}}
{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}
{{< /expand >}}

## auth api_key create
The `auth api_key create` command allows you create simple or complex API keys.

`auth api_key create` has one required property, `name`, and one optional property `allowlist`.
See **api_key create Properties** below for details.

Enter the command string then press <kbd>Enter</kbd>.
The command returns the API key when successful.

{{< include file="/_includes/APIKeyWarn.md" >}}

### api_key create Properties
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a user-readable name for the API key using alphanumeric characters with or without the underscore `_`. Enter the property argument using the `=` to separate property and value. Double-quote values with spaces or special characters. | <code>name=<i>mykey</i></code> |
| `allowlist` | No | Use to enter the HTTP method and WebSocket API authorized to use the API key. Enter the required `resource` permitted to use this key. Append **/api/docs/** to the end of your TrueNAS web UI address to see our full list of WebSocket API resources. Enter the HTTP `method` as a string using any of these values: <br><li>`GET`to retrieve information about the API resource. <br><li>`POST` to create an API resource. <br><li>`PUT` to update an API resource. <br><li>`DELETE` to delete the API resource. <br><li>`CALL`,or <br><li>`SUBSCRIBE`</li> Enclose property arguments inside the curly brackets `{}` within square brackets `[]`. Enter property aguments using the `=` to separate double-quoted property and values. Separate each propery argument with a comma and space. | <code>allowlist=[{"method"="<i>SUBSCRIBE</i>", ["resource"="<i>certificate.query</i>"}]</code> |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
auth api_key create name=apikey3
API Key: 3-xTqwhyf3SrUgUlotMQEEGuUr6oRvqg89SBDfXob6xtWSgLbRiDBr6SVRWxswSXx3
```
{{< /expand >}}

{{< expand "Complex api_key Command Example" "v" >}}
Enter the `auth api_key create` command with the `name` and `allowlist` property arguments. 
Optionally, include an HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `CALL`, or `SUBSCRIBE`) and a WebSocket API method by 
appending **/api/docs/** to the end of your TrueNAS web UI address to see our full list of WebSocket API resources.

Enter the command string then press <kbd>Enter</kbd>. 
The command returns the API key when successful.

{{< expand "Command Example" "v" >}}
```
auth api_key create name=apikey3 allowlist=[{"method":"SUBSCRIBE","resource":"certificate.query"}]
API Key: 3-xTqwhyf3SrUgUlotMQEEGuUr6oRvqg89SBDfXob6xtWSgLbRiDBr6SVRWxswSXx3
```
{{< /expand >}}
{{< /expand >}}

## auth api_key delete 
The `auth api_key delete` command deletes the API key matching the key ID entered.

Use the `auth api_key query` command to obtain a list of ID numbers for API keys on the system and again after deleting an API key to verify it is removed.

`auth api_key delete` has one required property, `id`.
`id` is the system-assigned ID number for the API key found in the `auth api_key query` command output.

Enter the property argument using the `=` delimiter to separate the property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns nothing when successful.
{{< expand "Command Example" "v" >}}
```
auth api_key delete id=1
```
{{< /expand >}}

## auth api_key get_instance
The `auth api_key get_instance` command returns API key properties for the specified ID.

`auth api_key get_instance` has one required property, `id`.
`id` is the system-assigned ID number for the API key found in the `auth api_key query` command output.

Enter the property argument using the `=` delimiter to separate the property and value.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the ID, name, creation date and time, and an allow list for the specified API key.
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

## auth api_key query 
The `auth api_key query` command returns a table of properties for all API keys.

Use to locate the system-assigned ID number required in the `auth api_key delete`, `auth api_key get_instance` and `auth api_key update` commands.

`auth api_key query` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the ID, name, creation date and time, and an allow list for all API keys.

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

## auth api_key update
The `auth api_key update` command allows you to change or reset existing API keys.

Use the `auth api_key query` command to obtain API key ID numbers, and after making changes to verify the changes are applied.

`auth api_key update` has one required property, `id`, and three configurable properties.
Enter the `id` of the API key, then include at least one of the properties.
See **api_key update Properties** below for details.

Enter the command string then press <kbd>Enter</kbd>.
Or enter `--` after `id` to open the interactive argument editor.
The command returns an empty line.

### api_key update Properties
{{< truetable >}}
| Property |  Description | Syntax Example |
|----------|--------------|----------------|
| `name` | Enter a user-readable name for the API key using alphanumeric characters with or without the underscore `_`. Enter the property argument using the `=` to separate property and value. Double-quote values with spaces or special characters. | <code>name=<i>mykey</i></code> |
| `allowlist` | Use to enter the HTTP method and WebSocket API authorized to use the API key. Enter the required `resource` permitted to use this key. Append **/api/docs/** to the end of your TrueNAS web UI address to see our full list of WebSocket API resources. Enter the HTTP `method` as a string using any of these values: <br><li>`GET`to retrieve information about the API resource. <br><li>`POST` to create an API resource. <br><li>`PUT` to update an API resource. <br><li>`DELETE` to delete the API resource. <br><li>`CALL`,or <br><li>`SUBSCRIBE`</li> Enclose property arguments inside the curly brackets `{}` within square brackets `[]`. Enter property aguments using the `=` to separate double-quoted property and values. Separate each propery argument with a comma and space. | <code>allowlist=[{"method"="<i>SUBSCRIBE</i>", ["resource"="<i>certificate.query</i>"}]</code> |
| `reset` | Enter `true` to remove the existing key and generate a new one. | `reset=true` or `reset=false` |
{{< /truetable >}}
{{< expand "Command Example" "v" >}}
```
auth api_key update id=2 name=apikey3 allowlist=[{"method":"SUBSCRIBE","resource":"certificate.query"}] reset=true
```
{{< /expand >}}
