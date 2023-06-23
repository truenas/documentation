---
---
{{< expand "Using the Create Command" "v" >}}

Use `user create` to configure a new user account.
Required configuration arguments are a `username`, `full_name`, `group` or `group_create` set to true, and a `password` or `password_disabled` set to true.
For all available arguments, see [Configuration Arguments](#create-configuration-arguments).

The command returns a blank line.

To confirm the user is created, use [`get_user_obj`](#get_user_obj-command) or navigate to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

From the CLI prompt, enter:

<code>account user create username=<i>testuser</i> full_name="<i>Test User</i>" group_create=<i>true</i> password=<i>passwort1234</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>user create username=<i>testuser</i> full_name="<i>Test User</i>" group_create=<i>true</i> password=<i>passwort1234</i></code>

Press <kbd>Enter</kbd>

Where <i>testuser</i> is the desired user name, "<i>Test User</i>" is the user's full name, <i>true</i> is a boolean value, and <i>passwort1234</i> is a password for the account.

{{< hint type=note >}}
<code>group=<i>GroupName</i></code>, where <i>GroupName</i> is the name of an existing group, can replace of <code>group_create=<i>true</i></code>.

<code>password_disabled=true</code> can replace <code>password=<i>passwort1234</i></code>.
{{< /hint >}}

{{< expand "Command Example" "v" >}}
<code>account user create username=<i>testuser</i> full_name="<i>Test User</i>" group=<i>GroupName</i> password_disabled=<i>true</i></code>
{{< /expand >}}
{{< /expand >}}
