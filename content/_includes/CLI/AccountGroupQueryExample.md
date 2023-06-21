---
---

The `query` command with no additional attributes or arguments will perform a basic query of all local groups.

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

Specifying additional attributes returns the value of the specified key(s) for all groups.

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

There are a total of 13 `query` attributes available.

{{< expand "Query Attributes" "v" >}}
{{< truetable >}}
| Attribute | Purpose |
|-----------|-------------|
| `gid`  | <!--These should be filled in, with examples, once behavior in general and specified searches is known.--> |
| `name` |  |
| `smb` |  |
| `sudo_commands` |  |
| `sudo_commands_nopasswd` |  |
| `users` |  |
| `id` |  |
| `group` |  |
| `builtin` |  |
| `id_type_both` |  |
| `local` |  |
| `nt_name` |  |
| `sid` |  |
{{< /truetable >}}
{{< /expand >}}

Additionally, `query` can be used to return attributes related to a specific group.

<!--Example to be added once this mechanism syntax is discovered
```
```-->

Expanded information may be requested by specifying the extra option
`"extra": {"additional_information": []}`.

There are two `additional_information` options supported.

{{< truetable >}}
| Option | Purpose |
|-----------|-------------|
| `SMB`  | Includes Windows SID and NT Name for group. If this option is not specified, then these keys will have `null` value. |
| `DS` | Includes groups from Directory Service (LDAP or Active Directory) in results |
{{< /truetable >}}
