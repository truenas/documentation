---
---

{{< expand "Using the Query Command" "v" >}}

Use `query` to retrieve information about a group or groups.
Enter the command with no additional attributes or arguments to perform a basic query of all local groups.

From the CLI prompt, enter:

`account group query`

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

`group query`

Press <kbd>Enter</kbd>

{{< expand "Command Example" "v" >}}

```
account group query
+-------+------------------------+---------+---------------+------------------------+-------+------------------+-------+--------------+---------+--------+
| gid   | name                   | builtin | sudo_commands | sudo_commands_nopasswd | smb   | users            | local | id_type_both | nt_name | sid    |
+-------+------------------------+---------+---------------+------------------------+-------+------------------+-------+--------------+---------+--------+
| 0     | wheel                  | true    | <empty list>  | <empty list>           | false | root             | true  | false        | <null>  | <null> |
| 1     | daemon                 | true    | <empty list>  | <empty list>           | false | daemon           | true  | false        | <null>  | <null> |
| 15    | kmem                   | true    | <empty list>  | <empty list>           | false | <empty list>     | true  | false        | <null>  | <null> |
| 3     | sys                    | true    | <empty list>  | <empty list>           | false | sys              | true  | false        | <null>  | <null> |
| 5     | tty                    | true    | <empty list>  | <empty list>           | false | <empty list>     | true  | false        | <null>  | <null> |
| 37    | operator               | true    | <empty list>  | <empty list>           | false | uucp             | true  | false        | <null>  | <null> |
| 8     | mail                   | true    | <empty list>  | <empty list>           | false | mail             | true  | false        | <null>  | <null> |
| 2     | bin                    | true    | <empty list>  | <empty list>           | false | bin              | true  | false        | <null>  | <null> |
| 9     | news                   | true    | <empty list>  | <empty list>           | false | news             | true  | false        | <null>  | <null> |
...
```
{{< /expand >}}

Add additional options to return the value of the specified key(s) for all groups.
There are 13 `query` options available.

{{< truetable >}}
| Option | Type | Purpose | Required |
|-----------|-------------|-----------|-------------|
| `gid`  | <!--To be filled in, with examples, once behavior in general and specified searches better established.--> |  |  |
| `name` |  |  |  |
| `smb` |  |  |  |
| `sudo_commands` |  |  |  |
| `sudo_commands_nopasswd` |  |  |  |
| `users` |  |  |  |
| `id` |  |  |  |
| `group` |  |  |  |
| `builtin` |  |  |  |
| `id_type_both` |  |  |  |
| `local` |  |  |  |
| `nt_name` |  |  |  |
| `sid` |  |  |  |
{{< /truetable >}}

{{< expand "Command Example" "v" >}}

```
account group query gid
+-------+
| gid   |
+-------+
| 0     |
| 1     |
| 15    |
| 3     |
| 5     |
| 37    |
| 8     |
| 2     |
| 9     |
...
```

{{< /expand >}}

Additionally, `query` can be used to return attributes related to a specific group.

{{< expand "Code Example" "v" >}}
<!--Example to be added-->
{{< /expand >}}

<!--
 Expanded information may be requested by specifying the extra option
`"extra": {"additional_information": []}`.
There are two `additional_information` options supported.

{{< truetable >}}
| Option | Purpose |
|-----------|-------------|
| `SMB`  | Includes Windows SID and NT Name for group. If this option is not specified, then these keys will have `null` value. |
| `DS` | Includes groups from Directory Service (LDAP or Active Directory) in results |
{{< /truetable >}}
-->

{{< /expand >}}
