---
---
{{< expand "Using the Update Command" "v" >}}

Use `update` to change the configuration attributes of an existing group.
Available attributes are the same as those used by [`create`](#create-configuration-arguments).

The command returns a blank line.

To confirm the group is updated, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

From the CLI prompt, enter:

<code>account group update gid_or_name=<i>3006</i> users=<i>3001</i></code>

From the **account** prompt, enter:

`group update`

Where *3006* is the identification number or GID for the target group and <code>users=<i>3001</i></code> represents the argument(s) to update.

{{< expand "Command Example" "v" >}}
```
account group update gid_or_name=3006 users=3001
```
{{< /expand >}}

The example command as written adds the user with UID 3001 to the group with GID 3006.

{{< /expand >}}
