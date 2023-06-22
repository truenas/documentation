---
---

{{< expand "Using the Create Command" "v" >}}

Use [`create`]({{< relref "CLIgroup.md#create-command" >}}) to configure a new group.

`create` has seven configuration arguments.
They are `gid`, `name`, `smb`, `sudo_commands`, `sudo_commands_nopasswd`, `allow_duplicate_gid`, and `users`.
The only required option is `name`.
If a group identification number is not provided, it is automatically filled with the next one available.
For more details, see [Create Configuration Arguments]({{< relref "CLIgroup.md#create-configuration-arguments" >}}).

Enter the command, then press <kbd>Enter</kbd>.
The command returns a blank line.

To confirm the group is created, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

From the CLI prompt, enter:

<code>account group create name=<i>name</i></code>

From the **account** prompt, enter:

<code>group create name=<i>name</i></code>

Where *name* is the desired group name.

{{< expand "Command Example" "v" >}}
<code>
account group create name=<i>TestGroup</i> gid=<i>3022</i> smb=<i>false</i> users=[<i>3000,3001</i>]
</code>

Where *3022* is the group id number, *TestGroup* is the group name, *false* is a boolean value, and *3000,3001* are user id numbers for group members.
{{< /expand >}}
{{< /expand >}}
