---
---
{{< expand "Using the Delete Command" "v" >}}

Use `delete` to erase a user account.

By default, the `user delete` command also deletes the user's primary group, if it is not being used by another user.
Set the `delete_group` option as false to retain the primary group.

The command returns a blank line.

To confirm the user is deleted, use [`get_user_obj`](#get_user_obj-command) for the deleted account or go to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI. If the account is successfully deleted, get_user_obj returns <code>Error: KeyError('getpwuid(): uid not found: <i>3001</i>')</code>, where *3001* is the UID of the deleted account.

From the CLI prompt, enter:

<code> account user delete id=<i>3001</i> </code>

Press <kbd>Enter<kbd>

From the **account** prompt, enter:

<code> user delete id=<i>3001</i> </code>

Press <kbd>Enter<kbd>

Where *3001* is the user identification number for the account.

{{< expand "Command Example" "v" >}}
```
account user delete id=<UID> options={"delete_group": false}
```
{{< /expand >}}
{{< /expand >}}
