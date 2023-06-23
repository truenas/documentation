---
---

{{< expand "Using the Delete Command" "v" >}}

### Overview

Use [`delete`]({{< relref "CLIgroup.md#delete-command" >}}) to erase a group.

If the `delete_group` option is set to true, the command also deletes any user with the target as its primary group. `delete_group` defaults to false.

The command returns a blank line.

To confirm the group is deleted, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

### Syntax

From the CLI prompt, enter:

<code> account group delete id=<i>3000</i> </code>

Press <kbd>Enter</kbd>.

From the **account** prompt, enter:

<code> group delete id=<i>3000</i> </code>

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
<code>
account group delete id=<i>3000</i> options={"delete_group": <i>true</i>}
</code>

Where *3000* is the group identification number and *true* is a boolean value.

{{< hint type=important >}}
`options={"delete_group": true}` deletes any users whose primary group matches the deleted group.
Carefully consider affected users before using this option.
{{< /hint >}}

{{< /expand >}}
{{< /expand >}}
