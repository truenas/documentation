## Apple Shares (AFP): Add

**General Options**

| | |
|-|-|
| Path | Browse to the pool or dataset to share. Netatalk does not fully support nesting additional pools, datasets, or symbolic links beneath this path. |
| Name | The pool name that appears in the connect to server dialog of the computer. |
| Time Machine | Set to advertise FreeNAS as a Time Machine disk so it can be found by Macs. Setting multiple shares for Time Machine use is not recommended. When multiple Macs share the same pool, low disk space issues and intermittently failed backups can occur. |
| Use as Home Share | Set to allow the share to host user home directories. Only one share can be the home share. |
| Enabled | Enable this AFP share. Unset to disable this AFP share without deleting it. |

**Advanced Permissions**

| | |
|-|-|
| Default Umask | Umask is used for newly created files. Default is 000 (anyone can read, write, and execute). |
| File Permissions | Only works with Unix ACLs. New files created on the share are set with the selected permissions. |
| Directory Permissions | Only works with Unix ACLs. New directories created on the share are set with the selected permissions. |
| AFP3 Unix Privs | Only works with Unix ACLs. New directories created on the share are set with the selected permissions. |
| Allow | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will deny any user or group that is not specified. |
| Read Only | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will deny any user or group that is not specified. |
| Allow Hosts | Allow hostnames or IP addresses to connect to the share. Click ADD to add multiple entries.  If neither *Allow Hosts* or *Deny Hosts* contains an entry, then AFP share access is allowed for any host.  If there is a *Allow Hosts* list but no *Deny Hosts* list, then only allow hosts on the *Allow Hosts* list.  If there is a *Deny Hosts* list but no *Allow Hosts* list, then allow all hosts that are not on the *Deny Hosts* list.  If there is both a *Allow Hosts* and *Deny Hosts* list, then allow all hosts that are on the *Allow Hosts* list.  If there is a host not on the *Allow Hosts* and not on the *Deny Hosts* list, then allow it. |
| Deny | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will allow any user or group that is not specified. |
| Read/Write | Comma-delimited list of allowed users and/or groups where groupname begins with a @. Note that adding an entry will allow any user or group that is not specified. |
| Deny Hosts | Deny hostnames or IP addresses access to the share. Click ADD to add multiple entries.  If neither *Allow Hosts* or *Deny Hosts* contains an entry, then AFP share access is allowed for any host.  If there is a *Allow Hosts* list but no *Deny Hosts* list, then only allow hosts on the *Allow Hosts* list.  If there is a *Deny Hosts* list but no *Allow Hosts* list, then allow all hosts that are not on the *Deny Hosts* list.  If there is both a *Allow Hosts* and *Deny Hosts* list, then allow all hosts that are on the *Allow Hosts* list.  If there is a host not on the *Allow Hosts* and not on the *Deny Hosts* list, then allow it. |

**Other Options**

| | |
|-|-|
| Descriptions | Optional description. |
| Zero Device Number | Enable when the device number is inconstant across a reboot. |
| No Stat | If set, AFP does not stat the pool path when enumerating the pools list. This is useful for automounting or pools created by a preexec script. |
| Auxillary Parameters | Additional [afp.conf](http://netatalk.sourceforge.net/3.1/htmldocs/afp.conf.5.html) parameters not covered by other option fields. |