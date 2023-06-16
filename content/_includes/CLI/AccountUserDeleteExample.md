---
---

```
account user delete id=<UID>
```

Where `<UID>` is the user ID number for the account.

The command returns a blank line.
To confirm the user is deleted, use `account user query` or navigate to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

By default, the `user delete` command also deletes the users's primary group, if it is not being used by another user.
It is possible to delete the user and keep its primary group by using the `delete_group` option:

```
account user delete id=<UID> options={"delete_group": false}
```
