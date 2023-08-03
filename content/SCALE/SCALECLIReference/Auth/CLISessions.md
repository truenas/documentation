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
It provides access to session information through the seven **sessions** commands. 

You can enter commands from the main CLI prompt or the **sessions** namespace prompt.

### Sessions Command

The `sessions` command returns a table that displays each session id, whether or not each session is current and internal, each session origin, and the credentials and credential data used to log into each session.

{{< expand "Displaying all sessions since system boot" "v" >}}
#### Description

The `sessions` command does not require entering properties or arguments.

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table with the ID, current session state, origin such as an IP or socket information, credentials, and creation date and time.

#### Usage

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

The `id` command displays the IDs of all TrueNAS sessions since boot. 

{{< expand "Identifying sessions" "v" >}}

#### Description

The `id` command does not require entering properties or arguments.

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table of recent and active session IDs.

#### Usage

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

The `current` command displays whether or not the TrueNAS sessions in the `sessions` list are current. 

{{< expand "Displaying if sessions are current" "v" >}}

#### Description

The `current` command does not require entering properties or arguments.

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table showing which sessions are current (true) or not (false). The rows of the table are relative to the rows returned from the `sessions` command.

#### Usage

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

{{< expand "Displaying if sessions are internal" "v" >}}

#### Description

The `internal` command does not require entering properties or arguments. 

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table showing if sessions are internal or not. The rows of the table are relative to the rows returned from the `sessions` command.

*Possible states:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true`   | Indicates the session is internal (created via the web UI). |
| `false`  | Indicates the session is not internal (created via SSH). |
{{< /truetable >}}

#### Usage

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

{{< expand "Displaying the login origin of sessions" "v" >}}

#### Description

The `origin` command does not require entering properties or arguments. 

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table showing the login origin of each session. The rows of the table are relative to the rows returned from the `sessions` command.

#### Usage

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

{{< expand "Displaying how each session authenticated" "v" >}}

#### Description

The `credentials` command does not require entering properties or arguments. 

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table showing the credentials used to authenticate each session. The rows of the table are relative to the rows returned from the `sessions` command.

*Possible states:*
{{< truetable >}}
| Property          | Description                                                             |
|-------------------|-------------------------------------------------------------------------|
| `UNIX_SOCKET`     | Indicates the session used web UI user credential authentication.       |
| `ROOT_TCP_SOCKET` | Indicates the session used TCP and Root user credential authentication. |
| `LOGIN_PASSWORD`  | Indicates the session used SSH password authentication.                 |
| `API_KEY`         | Indicates the session used API key authentication.                      |
| `TOKEN`           | Indicates the session used token authentication.                        |
{{< /truetable >}}

#### Usage

From the CLI Auth namespace prompt, enter:

`auth sessions credentials`

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

The `created_at` command displays the creation date and time of the sessions in the `sessions` list.

{{< expand "Displaying session creation dates" "v" >}}

#### Description

The `created_at` command does not require entering properties or arguments. 

Enter the command, then press <kbd>Enter</kbd>.

The command returns a table showing the creation date and time of each session. The rows of the table are relative to the rows returned from the `sessions` command.

#### Usage

From the CLI Auth namespace prompt, enter:

` auth sessions created_at`

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