---
---

`gids` can be singular or a list. 

{{< hint type=note >}}
`has_password_enabled_user` returns a single boolean value for the entire list of GIDs queried. The command does not return whether individual groups do or do not have a password enabled user.
{{< /hint >}}

```
account group has_password_enabled_user gids=3001
false
account group has_password_enabled_user gids=3002
true
account group has_password_enabled_user gids=3001,3002
true
```
