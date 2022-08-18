---
---
**General Options**

These settings display on the **BASIC OPTIONS** screen.

| Name | Description |
|----------|-------------|
| **Path** | Browse to the pool or dataset to share. Netatalk does not fully support nesting additional pools, datasets, or symbolic links beneath this path. |
| **Name** | The pool name that appears in the connect to server dialog of the computer. This is a required field. |
| **Time Machine** | Select to advertise TrueNAS as a Time Machine disk so Macs can find it. Configuring multiple shares for Time Machine use is not recommended. When multiple Macs share the same pool, low disk space issues and failed backups can occur. |
| **Use as Home Share** | Select to allow the share to host user home directories. Only one share can be the home share. |
| **Enabled** | Select to enable this AFP share. Clear checkmark to disable this AFP share without deleting it. |

**Permissions**

These settings display on the **BASIC OPTIONS** screen and after clicking **ADVANCED OPTIONS**.

| Name | Description |
|----------|-------------|
| **Default Umask** | Umask used for newly created files. Default is **000**. This means anyone can read, write, and execute. |
| **File Permissions** | Only works with Unix ACLs. New files created on the share are set with the selected permissions. |
| **Directory Permissions** | Only works with Unix ACLs. New directories created on the share are set with the selected permissions. |
| **AFP3 Unix Privs** | Select to enable Unix privileges supported by OSX 10.5 and higher. Do not enable this if the network contains Mac OSX 10.4 clients or lower as they do not support this feature. Only works with Unix ACLs. |
| **Allow** | Comma-delimited list of allowed users and/or groups where groupname begins with a **@**. Note that adding an entry denies any user or group that is not specified. |
| **Read Only** | Comma-delimited list of allowed users and/or groups where groupname begins with a **@**. Note that adding an entry denies any user or group that is not specified. |
| **Allow Hosts** | Allow host names or IP addresses to connect to the share. Click **ADD** to add multiple entries. If neither **Allow Hosts** or **Deny Hosts** contains an entry, then allow AFP share access for any host. If there is an entry in **Allow Hosts** list but none in **Deny Hosts** list, then only allow hosts on the **Allow Hosts** list. If there is a entry in **Deny Hosts** list but none in **Allow Hosts** list, then allow all hosts that are not on the **Deny Hosts** list. If there are entries in both **Allow Hosts** and **Deny Hosts** list, then allow all hosts that are on the **Allow Hosts** list. If there is a host not on the **Allow Hosts** and not on the **Deny Hosts** list, then allow it. |
| **Deny** | Comma-delimited list of allowed users and/or groups where groupname begins with a **@**. Note that adding an entry allows any user or group that is not specified. |
| **Read/Write** | Comma-delimited list of allowed users and/or groups where groupname begins with a **@**. Note that adding an entry allows any user or group that is not specified. |
| **Deny Hosts** | Deny host names or IP addresses access to the share. Click **ADD** to add multiple entries. If neither **Allow Hosts** or **Deny Hosts** contains an entry, then allow AFP share access for any host. If there is an entry in **Allow Hosts** list but none in **Deny Hosts** list, then only allow hosts on the **Allow Hosts** list. If there is an entry in **Deny Hosts** list but none in **Allow Hosts** list, then allow all hosts that are not on the **Deny Hosts** list. If there are entries in both **Allow Hosts** and **Deny Hosts** list, then allow all hosts that are on the **Allow Hosts** list. If there is a host not on the **Allow Hosts** and not on the **Deny Hosts** list, then allow it. |

**Other Options**

These settings display after clicking **ADVANCED OPTIONS**.

| Name | Description |
|----------|-------------|
| **Descriptions** | Optional description. |
| **Zero Device Number** | Select to enable when the device number is inconstant across a reboot. |
| **No Stat** | Select to allow AFP to not stat the pool path when enumerating the pools list. This is useful for automounting or pools created by a preexec script. |
| **Auxillary Parameters** | Additional [afp.conf](http://netatalk.sourceforge.net/3.1/htmldocs/afp.conf.5.html) parameters not covered by other option fields. |