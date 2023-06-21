---
---

```
account group update gid_or_name=3006 users=3001
```

Where `3006` represents the GID or group name of the desired group and `users=3001` represents the argument\(s) to be updated.
The example command as written adds the user account with UID 3001 to the group with GID 3006.

The command returns a blank line.
To confirm the group is updated, use `account group query`, `account group get_group_obj`, or navigate to[**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.
