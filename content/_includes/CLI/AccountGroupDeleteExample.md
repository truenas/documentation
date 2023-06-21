---
---

```
account group delete id=<GID>
```

Where `<GID>` is the group identification number.

The command returns a blank line.
To confirm the group is deleted, use `account group query`, `account group get_group_obj`, or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

If the `delete_group` option is set to `true`, the command also deletes any user with the target as its primary group. `delete_group` defaults to false.

```
account group delete id=<GID> options={"delete_group": true}
```
