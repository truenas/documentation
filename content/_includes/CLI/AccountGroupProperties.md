&NewLine;

{{< truetable >}}
| Property | Accepts | Required | Function |
|----------|---------|----------|----------|
| `gid` | Integer | No | Assigns the group identification number. If not providing a `gid` during group creation, the system automatically fills with the next one available. <br>Ex. <code>gid=<i>3005</i></code> <br> &emsp; Where *3005* is a GID number. |
| `name` | String | Yes | Sets the group name. <br> Ex. <code>name=<i>TestGroup</i></code> <br> &emsp; Where *TestGroup* is a group name. |
| `smb` | Boolean | No | Sets whether the group maps into an NT group for Windows SMB sharing. Defaults to `true`. <br> Ex. <code>smb=<i>false</i></code> <br> &emsp; Where *false* is a boolean value. |
| `sudo_commands` | Array | No |Sets any sudo commands group members are allowed to use. Security best practice is to limit sudo permissions to administrative users. <br>Ex. <code>sudo_commands="<i>path1</i>,<i>path2</i>"</code> <br> &emsp; Where <code><i>path1</i></code> and <code><i>path2</i></code> are absolute paths to the location of executable scripts or packages. <br> &emsp; You can also use `sudo_commands="ALL"` |
| `sudo_commands_nopasswd` | Array | No | Sets any sudo commands group members are allowed to use without entering a password. Exercise caution when allowing sudo commands without password prompts. We recommend limiting this privilege to trusted users and specific commands to minimize security risks. <br>Ex. <code>sudo_commands_nopasswd="<i>path1</i>,<i>path2</i>"</code> <br> &emsp; Where <code><i>path1</i></code> and <code><i>path2</i></code> are absolute paths to the location of executable scripts or packages. <br>&emsp; You can also use `sudo_commands_nopasswd="ALL"`, but this is not recommended. |
| `allow_duplicate_gid` | Boolean | No | If set to true, allows distinct group names to share the same group identification number. Defaults to false. <br>Important: Use only if absolutely necessary. Duplicate GIDs can lead to unexpected behavior. <br>Ex. <code>allow_duplicate_gid=<i>true</i></code> <br> &emsp; Where *true* is a boolean value. |
| `users` | Array or Integer | No | Assigns users to the group with a list of one or more user identification numbers (UIDs). <br>Ex. <code>users=[<i>3001,3002</i>]</code> <br> &emsp; Where *3001* and *3002* are UID numbers for group members.  |
{{< /truetable >}}
