---
---

{{< expand "Using the Create Command" "v" >}}

### Overview

Use [`create`]({{< relref "CLIgroup.md#create-command" >}}) to configure a new group.

`create` has [one command option]({{< relref "CLIgroup.md#create-interactive-arguments-editor" >}}) and [7 configuration arguments]({{< relref "CLIgroup.md#create-configuration-arguments" >}}).

The required argument `name` defines the group name.
All other arguments are optional.

If a group identification number is not provided, it is automatically filled with the next one available.

The command returns a blank line.

To confirm the group is created, use [`get_group_obj`]({{< relref "CLIgroup.md#get_group_obj-command" >}}) or navigate to [**Credentials > Local Groups**]({{< relref "managelocalgroups.md" >}}) in the SCALE Web UI.

### Syntax

From the CLI prompt, enter:

<code>account group create name="<i>name</i>"</code>

Where *name* is the desired group name.

Press <kbd>Enter</kbd>.

From the **account** prompt, enter:

<code>group create name="<i>name</i>"</code>

Press <kbd>Enter</kbd>.

{{< expand "Command Example" "v" >}}
<code>
account group create gid=<i>3022</i> name="<i>Test Group</i>" smb=<i>false</i> users=[<i>3000,3001</i>]
</code>

Where *3002* is the group id number, *Test Group* is the group name, *false* is a boolean value, and *3000,3001* are user id numbers for group members.
{{< /expand >}}
{{< /expand >}}
