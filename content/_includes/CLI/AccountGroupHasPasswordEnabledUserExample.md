---
---

{{< expand "Using the Has_Password_Enabled_User Command" "v" >}}

Use `has_password_enabled_user` to return whether at least one user with a password is a member of one or more groups.

{{< hint type=note >}}
`has_password_enabled_user` returns a single boolean value for the entire list of GIDs queried. The command does not return whether each individual group does or does not have a password enabled user.
{{< /hint >}}

From the CLI prompt, enter:

<code>account group has_password_enabled_user gids=<i>3001</i></code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>group has_password_enabled_user gids=<i>3001</i></code>

Press <kbd>Enter</kbd>

Where *3001* represents the GID(s) to query.

{{< expand "Command Examples" "v" >}}

<pre><code>
account group has_password_enabled_user gids=<i>3001</i>
false
<br>
account group has_password_enabled_user gids=<i>3002</i>
true
<br>
account group has_password_enabled_user gids=<i>3001,3002</i>
true
</code></pre>

{{< /expand >}}
{{< /expand >}}