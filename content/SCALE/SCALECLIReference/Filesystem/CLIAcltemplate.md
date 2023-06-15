---
title: "Acltemplate"
description: "Provides information about the filesystem acltemplate namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scalefilesystem
- scaleacls
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

### By_Path Command
The `by_path` command retrieves a list of available ACL templates for a given path. 

{{< expand "Retrieve ACL Templates for a Path" "v" >}}
The `by_path` command has one required option value pair, `acltemplate_ by_path`. 
Use the default `{}` to display the list of preset SCALE ACL templates. 

`by_path` supports `query-filters` and `query-options`. `format-options` provides additional options to alter the template query results.

`Format.options`additional options:
{{< truetable >}}
| Option | Description |
|--------|-------------|
| canonicalize | Places ACL entries for NFSv4 ACLS in Microsoft canonical order. |
| ensure_builtins | Ensures all resutls contain entries for builtin_users and builtin_administrators groups. |
| resolve_names | Converts IDs in ACL entries to names. |
{{< /truetable >}}

From the CLI prompt, enter:

`filesystem acltemplate by_path acltemplate= {}`

From the **filesystem** namespace prompt, enter:

`acltemplate by_path acltemplate= {}`

{{< expand "Command Example" "v" >}}
```
filesystem acltemplate by_path acltemplate= {}
+-----+-----------------+------------------------------------------------------------------+---------+--------+---------+
| id | name             | comment                                                          | acltype | acl    | bulitin |
+-----+-----------------+------------------------------------------------------------------+---------+----- --+---------+
| 1  | NFS4_OPEN        | Template that grants full control to owner@, group@, and ever... | NFS4    | <list> | true    |
| 2  | NFS4_RESTRICTED  | Template that omits access for the everyone@ special entry. T... | NFS4    | <list> | true    |
| 3  | NFS4_HOME        | Template for special Samba homes share that only grants read ... | NFS4    | <list> | true    |
| 4  | NFS4_DOMAIN_HOME | Template special Samba homes share in Active Directory(A...      | NFS4    | <list> | true    |
| 5  | POSIX_OPEN       | Template that grants read, write, and execute permissions to ... | POSIX1E | <list> | true    |
| 6  | POSIX_RESTRICTED | Template that grants read, write, and execute to owner and gr... | POSIX1E | <list> | true    |
| 7  | POSIX_HOME       | Template for special Samba homes share that only grants read ... | POSIX1E | <list> | true    |
| 8  | NFS4_ADMIN       | Template restricting access to local and domain administrators.  | NFS4    | <list> | true    |
| 9  | POSIX_ADMIN      | Template restricting access to local and domain administrators.  | POSIX1E | <list> | true    |
+-----+-----------------+------------------------------------------------------------------+---------+--------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Create Command
The `create` command creates a filesystem ACL template. 

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

### Delete Command
The `delete` command deleted a filesystem acl template from the system.

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

### Get_Instance
The `get_instance` command returns the instance matching the value of the ID number of the ACL template or the query-options-get_instance value specified. 

{{< expand "Find Instance Matching ID" "v" >}}
The `get_instance` command returns the instance matching the value of the ID number or the query-options-get_instance value specified. 

From the CLI prompt, enter:

<code>filesystem acltemplate get_instance id=<i>integer</i></code>

From the **filesystem** namespace prompt, enter:

<code>acltemplate get_instance id=<i>integer</i></code>

{{< expand "Command Example" "v" >}}
```
filesystem acltemplate get_instance id=1
+---------+------------------------------------------------------------------+
|      id |1                                                                 |
|    name | NFS4_OPEN                                                        |
| comment | Template that grants full control to owner@, group@, and ever... |
| acltype | NFS4                                                             |
|     acl | <list>                                                           |
| builtin | true                                                             |
+---------+------------------------------------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command
The `query` command returns a list of filesystem ACL templates. 

{{< expand "Query Filesystem ACL Templates" "v" >}}
The `query` command returns the list of filesystem ACL templates. 
The output from this command is the same as the `acltemplate by_path acltemplate= {}` command.

From the CLI prompt, enter:

`filesystem acltemplate query`

From the **filesystem** namespace prompt, enter:

`acltemplate query`

{{< expand "Command Example" "v" >}}
```
filesystem acltemplate query
+-----+-----------------+------------------------------------------------------------------+---------+--------+---------+
| id | name             | comment                                                          | acltype | acl    | bulitin |
+-----+-----------------+------------------------------------------------------------------+---------+----- --+---------+
| 1  | NFS4_OPEN        | Template that grants full control to owner@, group@, and ever... | NFS4    | <list> | true    |
| 2  | NFS4_RESTRICTED  | Template that omits access for the everyone@ special entry. T... | NFS4    | <list> | true    |
| 3  | NFS4_HOME        | Template for special Samba homes share that only grants read ... | NFS4    | <list> | true    |
| 4  | NFS4_DOMAIN_HOME | Template special Samba homes share in Active Directory(A...      | NFS4    | <list> | true    |
| 5  | POSIX_OPEN       | Template that grants read, write, and execute permissions to ... | POSIX1E | <list> | true    |
| 6  | POSIX_RESTRICTED | Template that grants read, write, and execute to owner and gr... | POSIX1E | <list> | true    |
| 7  | POSIX_HOME       | Template for special Samba homes share that only grants read ... | POSIX1E | <list> | true    |
| 8  | NFS4_ADMIN       | Template restricting access to local and domain administrators.  | NFS4    | <list> | true    |
| 9  | POSIX_ADMIN      | Template restricting access to local and domain administrators.  | POSIX1E | <list> | true    |
+-----+-----------------+------------------------------------------------------------------+---------+--------+---------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command updates the filesystem ACL template for the `id` included in the command.

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

{{< taglist tag="scaleclifilesystem" limit="10" title="Related CLI Filesystem Articles" >}}
{{< taglist tag="scaleacls" limit="10" title="Related ACL Articles" >}}