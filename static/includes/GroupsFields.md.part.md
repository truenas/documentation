##  Groups: Add

**Group Configuration**

| | |
|-|-|
| GID | The Group ID (GID) is a unique number used to identify a Unix group. Enter a number above *1000* for a group with user accounts. Groups used by a service must have an ID that matches the default port number used by the service. |
| Name | Group name cannot begin with a hyphen (`-`) or contain a space, tab, or these characters: `, : + & # % ^ ( ) ! @ ~ * ? < > =`. `$` can only be used as the last character of the username. |
| Permit Sudo | Allow group members to use [sudo](https://www.freebsd.org/cgi/man.cgi?query=sudo&manpath=FreeBSD+11.1-RELEASE+and+Ports). Group members are prompted for their password when using sudo. |
| Samba Authentication | Set to allow group to be used for Samba permissions and authentication. |
| Allow Duplicate GIDs | Not recommended. Allow more than one group to have the same group ID. |
