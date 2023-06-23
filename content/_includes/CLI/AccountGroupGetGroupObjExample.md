---
---

{{< expand "Using the Get_Group_Obj Command" "v" >}}

Use `get_group_obj` to display basic information about a group including group name, identification number, and group members. 
The target group can be specified by group name or GID.

From the CLI prompt, enter:

<code>account group get_group_obj get_group_obj={"groupname": "<i>TestGroup</i>"}</code>

Press <kbd>Enter</kbd>.

From the **account** prompt, enter:

<code>group get_group_obj get_group_obj={"groupname": "<i>TestGroup</i>"}</code>

Press <kbd>Enter</kbd>.

Where *TestGroup* is the name of the target group.

{{< expand "Command Example" "v" >}}

<pre><code>
account group get_group_obj get_group_obj={"groupname": "<i>TestGroup</i>"}
+---------+------------+
| gr_name | TestGroup  |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
</code></pre>

{{< /expand >}}

The target group can also be specified by group identification number.

{{< expand "Command Example" "v" >}}

<pre><code>
account group get_group_obj get_group_obj={"gid": <i>3002</i>}
+---------+------------+
| gr_name | TestGroup  |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
</code></pre>

Where *3002* is the GID number for the target group.

{{< /expand >}}
{{< /expand >}}
