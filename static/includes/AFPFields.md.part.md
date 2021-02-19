## AFP

**General Option**

| | |
|-|-|
| Database Path | Sets the database information to be stored in the path. The path must be writable even if the pool is read only. |

**Access**

| | |
|-|-|
| Guest Account | Select an account to use for guest access. This account must have permissions to the shared pool or dataset. The privileges given to this user are also available to any client connecting to the guest service. This user must exist in the password file, but does not require a valid login. The root user cannot be used as guest account. |
| Guest Access | Set to disable the password prompt that appears before clients access AFP shares. |
| Max Connections | Maximum number of simultaneous connections permitted via AFP. The default limit is 50. |
| Chmod Request | Indicates how to handle Access Control Lists. Ignore: ignores requests and gives the parent directory ACL inheritance full control over new items. Preserve: preserves ZFS ACEs for named users and groups or the POSIX ACL group mask. Simple: is set to chmod() as requested without any extra steps. |
| Map ACLs | Select mapping of permissions for authenticated users. Rights (default, Unix-style permissions), None, or Mode (ACLs). |

**Other Options**

| | |
|-|-|
| Log Level | Record AFP service messages up to the specified log level in the system log. By default, severe and warning level messages are logged. |
| Bind Interfaces | Specify the IP addresses to listen for AFP connections. Leave blank to bind to all available IPs. If none are specified, advertise the first IP address of the system, but listen for any incoming request. |
| Global Auxilliary | Additional [afp.conf(5)](http://netatalk.sourceforge.net/3.0/htmldocs/afp.conf.5.html) parameters. |