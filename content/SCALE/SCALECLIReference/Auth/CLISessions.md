---
title: "Sessions"
description: "Provides information about the auth sessions namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 30
aliases:
draft: false
tags:
- scalecliauth
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Sessions Commands

The **sessions** namespace has seven commands and is based on functions found in the SCALE API and web UI. 
It provides access to sessions management methods through the 7 **sessions** commands. 
The four child namespaces have their own commands.

You can enter commands from the main CLI prompt or from the **sessions** namespace prompt.

### Sessions Command

The `sessions` command returns a table that displays each session id, whether or not each session is current and internal, each session origin, and the credentials and credential data used to log into each session.

{{< expand "Displaying all sessions since system boot" "v" >}}
The `sessions` command has no required options.

From the CLI Auth namespace prompt, enter:

`sessions`

{{< expand "Command Example" "v" >}}
```
auth> sessions
+--------------------------------------+---------+----------+---------------------------------------+-------------+------------------+---------------------------+
| id                                   | current | internal | origin                                | credentials | credentials_data | created_at                |
+--------------------------------------+---------+----------+---------------------------------------+-------------+------------------+---------------------------+
| 8a21fefe-1255-42eb-a86d-8a7f74752b94 | false   | false    | 10.234.15.210:15864                   | UNIX_SOCKET | <dict>           | 2023-07-25T17:54:49+00:00 |
| f01274e8-4954-4926-9346-76a16d3648dd | true    | true     | UNIX socket (pid=2459768 uid=0 gid=0) | UNIX_SOCKET | <dict>           | 2023-07-26T11:05:16+00:00 |
+--------------------------------------+---------+----------+---------------------------------------+-------------+------------------+---------------------------+
```
{{< /expand >}}
{{< /expand >}}

### ID Command

The `id` command displays only the id's of the most recent and active TrueNAS sessions. 

{{< expand "Identifying sessions" "v" >}}
The `id` command has no required options. It returns a table of recent and active sission id's.

From the CLI Auth namespace prompt, enter:

`sessions id`

{{< expand "Command Example" "v" >}}
```
auth> sessions id
+--------------------------------------+
| id                                   |
+--------------------------------------+
| 8a21fefe-1255-42eb-a86d-8a7f74752b94 |
| f01274e8-4954-4926-9346-76a16d3648dd |
+--------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Current Command

The `current` command displays only whether or not the TrueNAS sessions in the `sessions` list are current. 

{{< expand "Displaying if sessions are current" "v" >}}
The `current` command has no required options. It returns a table showing which sessions are current. The rows of the table are relative to the rows returned from the `sessions` command.

*Possible states:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true`   | Indicates the session is current (active). |
| `false`  | Indicates the session is not current (inactive). |
{{< /truetable >}}

From the CLI Auth namespace prompt, enter:

`sessions current`

{{< expand "Command Example" "v" >}}
```
auth> sessions current
+---------+
| current |
+---------+
| false   |
| true    |
+---------+
```
{{< /expand >}}
{{< /expand >}}

### Internal Command

The `internal` command displays whether sessions in the `sessions` list are internally created (via the web UI) or not (via SSH).

{{< expand "Displaying if sessions are internal"}}
The `internal` command has no required options. It returns a table showing if sessions are internal or not. The rows of the table are relative to the rows returned from the `sessions` command.

*Possible states:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true`   | Indicates the session is internal (created via the web UI). |
| `false`  | Indicates the session is not internal (created via SSH). |
{{< /truetable >}}

From the CLI Auth namespace prompt, enter:

`sessions internal`

{{< expand "Command Example" "v" >}}
```
auth> sessions internal
+----------+
| internal |
+----------+
| false    |
| true     |
+----------+
```
{{< /expand >}}
{{< /expand >}}

### Origin Command

The `origin` command displays the login origin of the sessions in the `sessions` list.

{{< expand "Displaying the login origin of sessions"}}
The `origin` command has no required options. It returns a table showing the login origin of each session. The rows of the table are relative to the rows returned from the `sessions` command.

From the CLI Auth namespace prompt, enter:

`sessions origin`

{{< expand "Command Example" "v" >}}
```
auth> sessions origin
+---------------------------------------+
| origin                                |
+---------------------------------------+
| 10.234.15.210:15864                   |
| UNIX socket (pid=2459768 uid=0 gid=0) |
+---------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Credentials Command

The `credentials` command displays the credentials used to authenticate each session in the `sessions` list.

{{< expand "Displaying how each session authenticated"}}
The `credentials` command has no required options. It returns a table showing the credentials used to authenticate each session. The rows of the table are relative to the rows returned from the `sessions` command.

*Possible states:*
{{< truetable >}}
| Property         | Description                                                       |
|------------------|-------------------------------------------------------------------|
| `UNIX_SOCKET`    | Indicates the session used web UI user credential authentication. |
| `LOGIN_PASSWORD` | Indicates the session used SSH password authentication.           |
| `LOGIN_KERBEROS` | Indicates the session used Kerberos authentication.               |
{{< /truetable >}}

From the CLI Auth namespace prompt, enter:

`sessions credentials`

{{< expand "Command Example" "v" >}}
```
auth> sessions credentials
+----------------+
| credentials    |
+----------------+
| LOGIN_PASSWORD |
| UNIX_SOCKET    |
+----------------+
```
{{< /expand >}}
{{< /expand >}}

### Created At Command

The `created_at` command displays the creation date and time the sessions in the `sessions` list.

{{< expand "Displaying when sessions were created"}}
The `created_at` command has no required options. It returns a table showing the the creation date and time of each session. The rows of the table are relative to the rows returned from the `sessions` command.

From the CLI Auth namespace prompt, enter:

`sessions created_at`

{{< expand "Command Example" "v" >}}
```
auth> sessions created_at
+---------------------------+
| created_at                |
+---------------------------+
| 2023-07-25T17:54:49+00:00 |
| 2023-07-26T11:05:16+00:00 |
+---------------------------+
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliauth" limit="10" title="Related CLI Auth Articles" >}}