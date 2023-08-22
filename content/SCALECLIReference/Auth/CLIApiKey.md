---
title: "API_Key"
description: "Provides information about the auth api_key namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scalecliauth
---

{{< toc >}}

## API_Key Namespace

The *api_key* namespace has five commands and is based on API key management functions found in the SCALE API and web UI.
It provides access to API kay creation and management methods through the **api_key** commands.

## API_Key Commands

The following **api_key** commands allow you to create, view, and delete API keys.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" type="page" >}}

### Create Command

The `create` command lets you create simple or complex API keys.

{{< expand "Creating a Simple API Key" "v" >}}

#### Description
The `create` command requires the `name` property.
Enter the command, then press <kbd>Enter</kbd>.
The command returns the API key when successful.

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
The `create` command requires the `name` property. You can also specify an HTTP method and a WebSocket API method.
Enter the command, then press <kbd>Enter</kbd>.
The command returns the API key when successful.

#### Usage

From the CLI prompt, enter:

<code>auth api_key create name=<i>name</i> allowlist=[{"method":"<i>METHOD</i>","resource":"<i>api.resource</i>"}]</code>

Where 
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

{{< expand "Deleting an API Key" "v" >}}

#### Description
The `delete` command requires the `id` property.
Enter the command, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

#### Usage

From the CLI prompt, enter:

<code>auth api_key delete id=<i>number</i></code>

Where *number* is the list number of the API key you want to delete. For example, the first API key created on the system would be "1".
{{< expand "Command Example" "v" >}}
```
auth api_key delete id=1
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command

The `get_instance` command returns a table of properties for the specified API key.

{{< expand "Viewing API Key Instances" "v" >}}

#### Description
The `get_instance` command requires the `id` property.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a table of properties for the specified API key when successful.

#### Usage

From the CLI prompt, enter:

<code>auth api_key get_instance id=<i>number</i></code>

Where *number* is the list number of the API key you want to delete. For example, the first API key created on the system would be "1".

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

{{< expand "Running an API Key Query" "v" >}}

#### Description
The `query` command has no requirements.
Enter the command, then press <kbd>Enter</kbd>.
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

{{< expand "Updating API Keys" "v" >}}

#### Description
The `update` command has two configurable properties and one argument. After specifying the `id` of the API key you want to update, you must include at least one of the configurable properties or arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a table of properties for all API keys when successful.

#### Usage

From the CLI prompt, enter:

<code>auth api_key update id=<i>number</i> name=<i>name</i> allowlist=[{"method":"<i>METHOD</i>","resource":"<i>api.resource</i>"}] reset=<i>true/false</i></code>

Where 
* *number* is the list number of the API key you want to update. For example, the first API key created on the system would be "1".
* *name* is the new name you want to assign to the key.
* *METHOD* is the HTTP method you want the key to use. Options are GET, POST, PUT, DELETE, CALL, and SUBSCRIBE.
* *api.resource* is the WebSocket API resource you want to use. Append "/api/docs/" to the end of your TrueNAS web UI address to see our full list of WebSocket API resources.
* *true/false* determines if you want to remove the existing API key and generate a new random key.
* 
{{< expand "Command Example" "v" >}}
```
auth api_key update id=2 name=apikey3 allowlist=[{"method":"SUBSCRIBE","resource":"certificate.query"}] reset=true
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliauth" limit="10" title="Related CLI Auth Articles" >}}
