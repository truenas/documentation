---
---

{{< include file="/_includes/CLI/CLICommandWIP.md" type="page" >}}

The `query` command with no additional attributes or arguments will perform a basic query of all local users.

```
account user query
+-------+------------------+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------+-------------------+------------------------------------+---------+-------+-------------------+--------+---------------+------------------------+------------+----------------+--------+------------------------+-----------+-----------+-------+--------------+---------+--------+
| uid   | username         | unixhash                                                         | smbhash                                                          | home                  | shell             | full_name                          | builtin | smb   | password_disabled | locked | sudo_commands | sudo_commands_nopasswd | attributes | email          | group  | groups                 | sshpubkey | immutable | local | id_type_both | nt_name | sid    |
+-------+------------------+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------+-------------------+------------------------------------+---------+-------+-------------------+--------+---------------+------------------------+------------+----------------+--------+------------------------+-----------+-----------+-------+--------------+---------+--------+
| 0     | root             | *                                                                |                                                                  | /root                 | /usr/bin/zsh      | root                               | true    | false | true              | false  | <empty list>  | <empty list>           | <dict>     | <null>         | <dict> | builtin_administrators | <null>    | true      | true  | false        | <null>  | <null> |
| 1     | daemon           | *                                                                |                                                                  | /root                 | /usr/sbin/nologin | Owner of many system processes     | true    | false | false             | false  | <empty list>  | <empty list>           | <dict>     | <null>         | <dict> | <empty list>           | <null>    | true      | true  | false        | <null>  | <null> |
...
```

Specifying additional attributes returns the value of the specified key(s) for all users.

```
account user query uid
+-------+
| uid   |
+-------+
| 0     |
| 1     |
| 2     |
| 5     |
| 9     |
| 6     |
| 111   |
| 13    |
| 10    |
| 65534 |
| 105   |
| 104   |
| 121   |
| 124   |
| 666   |
| 108   |
| 473   |
| 110   |
| 3     |
| 4     |
| 7     |
| 8     |
| 33    |
| 34    |
| 38    |
| 39    |
| 41    |
| 100   |
| 101   |
| 102   |
| 103   |
| 106   |
| 107   |
| 109   |
| 112   |
| 113   |
| 114   |
| 115   |
| 116   |
| 117   |
| 118   |
| 119   |
| 120   |
| 122   |
| 123   |
| 125   |
| 568   |
| 64055 |
| 126   |
| 127   |
| 950   |
| 3000  |
| 3001  |
+-------+
```

There are a total of 23 `query` attributes available.

{{< expand "Query Attributes" "v" >}}
{{< truetable >}}
| Attribute | Purpose |
|-----------|-------------|
| `uid`  | <!--These should be filled in, with examples, once behavior in general and specified searches is known.--> |
| `username` |  |
| `home` |  |
| `shell` |  |
| `full_name` |  |
| `email` |  |
| `password_disabled` |  |
| `locked` |  |
| `smb` |  |
| `sudo_commands` |  |
| `sudo_commands_nopasswd` |  |
| `sshpubkey` |  |
| `group` |  |
| `attributes` |  |
| `group` |  |
| `id` |  |
| `builtin` |  |
| `id_type_both` |  |
| `local` |  |
| `unixhash` |  |
| `smbhash` |  |
| `nt_name` |  |
| `sid` |  |
{{< /truetable >}}
{{< /expand >}}

Additionally, `query` can be used to return attributes related to a specific user account.

<!--Example to be added once this mechanism syntax is discovered
```
```-->

Expanded information may be requested by specifying the extra option
`"extra": {"additional_information": []}`.

There are two `additional_information` options supported.

{{< truetable >}}
| Option | Purpose |
|-----------|-------------|
| `SMB`  | Includes Windows SID and NT Name for user. If this option is not specified, then these keys will have `null` value. |
| `DS` | Includes users from Directory Service (LDAP or Active Directory) in results |
{{< /truetable >}}
