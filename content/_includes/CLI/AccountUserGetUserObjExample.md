---
---
{{< expand "Using the get_user_obj Command" "v" >}}
Use `get_user_obj` to retrieve user information from the struct passwd dictionary key. Returned information includes the username, account UID, primary group GID, full name (displayed as `pw_gecos`), home directory, and shell preference setting.

The user account can be specified using either the username or UID.

`get_user_obj` has two additional options.
The `get_groups` option includes the user's assigned groups in the command results.
Results will not include nested groups for Active Directory users.

The `sid_info` option retrieves the Security Identifier (SID) and domain information for the user.
In some instances retrieving SID and domain information makes the operation hang until the winbindd request timeout has been reached if the winbindd connection manager has not yet marked the domain as offline. Check the Active Directory service state prior to batch operations using this option.

From the CLI prompt, enter:

<code>account user get_user_obj get_user_obj={"uid": <i>3001</i>}</code>

Press <kbd>Enter</kbd>

From the **account** prompt, enter:

<code>account user get_user_obj get_user_obj={"uid": <i>3001</i>}</code>

Press <kbd>Enter</kbd>

Where *3001* is the id number for the targeted account.

You can also use <code>get_user_obj={"username": "<i>testuser</i>"}</code>, where *testuser* is the username of the targeted account.

{{< expand "Command Example" "v" >}}
<pre><code>
account user get_user_obj get_user_obj={"username": "<i>testuser</i>", "get_groups": <i>true</i>, "sid_info": <i>true</i>}
+-----------+--------------+
|   pw_name | testuser     |
|    pw_uid | 3000         |
|    pw_gid | 65534        |
|  pw_gecos | Test User    |
|    pw_dir | /nonexistent |
|  pw_shell | /usr/bin/zsh |
| grouplist | 65534        |
|           | 3000         |
|           | 3009         |
|           | 545          |
|           | 3022         |
|           | 3002         |
|  sid_info | &lt;null&gt;       |
+-----------+--------------+
</code></pre>
{{< /expand >}}
{{< /expand >}}
