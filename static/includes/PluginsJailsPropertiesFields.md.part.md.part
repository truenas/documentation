**Jail Properties**

| | |
|-|-|
| devfs_ruleset | The [devfs(8)](https://www.freebsd.org/cgi/man.cgi?query=devfs) ruleset number to enforce when mounting devfs in the jail. The default 0 means no ruleset is enforced. Mounting devfs inside a jail is only possible when the allow_mount and allow_mount_devfs permissions are enabled and enforce_statfs is set to a value lower than 2. |
|-|-|
| exec_start | Commands to run in the jail environment when the jail is created. Example: sh /etc/rc. The pseudo-parameters section of [JAIL(8)](https://www.freebsd.org/cgi/man.cgi?query=jail) describes exec.start usage. |
| exec_stop | Commands to run in the jail environment before the jail is removed and after exec.prestop commands are complete. Example: sh /etc/rc.shutdown. |
| exec_prestart | Commands to run in the system environment before a jail is started. |
| exec_poststart | Commands to run in the system environment after a jail is started and after any exec_start commands are finished. |
| exec_prestop | Commands to run in the system environment before a jail is stopped. |
| exec_poststop | Commands to run in the system environment after a jail is stopped. |
| exec_jail_user | Enter either root or another valid username. Inside the jail, commands run as this user. |
| exec_system_user | Run commands in the jail as this user. By default, commands are run as the current user. |
| securelevel | The value of the jail [securelevel](https://www.freebsd.org/doc/faq/security.html#idp60202568) sysctl. A jail never has a lower securelevel than the host system. Setting this parameter allows a higher securelevel. If the host system securelevel is changed, the jail securelevel will be at least as secure. |
| sysvmsg | Allow or deny access to SYSV IPC message primitives.  Inherit: All IPC objects on the system are visible to the jail.  New: Only objects the jail creates using the private key namespace are visible. The system and parent jails have access to the jail objects but not private keys.  Disable: The jail cannot perform any sysvmsg related system calls. |
| sysvsem | Allow or deny access to SYSV IPC semaphore primitives.  Inherit: All IPC objects on the system are visible to the jail.  New: Only objects the jail creates using the private key namespace are visible. The system and parent jails have access to the jail objects but not private keys.  Disable: The jail cannot perform any sysvmem related system calls. |
| sysvshm | Allow or deny access to SYSV IPC shared memory primitives.  Inherit: All IPC objects on the system are visible to the jail.  New: Only objects the jail creates using the private key namespace are visible. The system and parent jails have access to the jail objects but not private keys. | Disable: The jail cannot perform any sysvshm related system calls. |
| vnet_interfaces | A space-delimited list of network interfaces attached to a VNET enabled jail after it is created. Interfaces are automatically released when the jail is removed. |
| allow_set_hostname | Allow the jail hostname to be changed with [hostname(1)](https://www.freebsd.org/cgi/man.cgi?query=hostname) or [sethostname(3)](https://www.freebsd.org/cgi/man.cgi?query=sethostname). |
| allow_sysvipc | Choose whether a process in the jail has access to System V IPC primitives. Equivalent to setting sysvmsg, sysvsem, and sysvshm to Inherit. Deprecated in FreeBSD 11.0 and newer!  Use sysvmsg, sysvsem, and sysvshm instead. |
| allow_raw_sockets | Set to allow raw sockets. Utilities like [ping(8)](https://www.freebsd.org/cgi/man.cgi?query=ping) and [traceroute(8)](https://www.freebsd.org/cgi/man.cgi?query=traceroute) require raw sockets. When set, source IP addresses are enforced to comply with the IP addresses bound to the jail, ignoring the IP_HDRINCL flag on the socket. |
| allow_chflags | Set to treat jail users as privileged and allow the manipulation of system file flags. securelevel constraints are still enforced. |
| allow_mlock | Enable running services that require [mlock(2)](https://www.freebsd.org/cgi/man.cgi?query=mlock) in a jail. |
| allow_vmm | Allow the jail to access the bhyve virtual machine monitor (VMM). The jail must have FreeBSD 12.0 or newer installed with the [vmm(4)](https://www.freebsd.org/cgi/man.cgi?query=vmm) kernel module loaded. |
| allow_quotas | Set to allow the jail root to administer quotas on jail filesystems. This includes filesystems the jail shares with other jails or with non-jailed parts of the system. |
| allow_socket_af | Set to allow access to other protocol stacks beyond IPv4, IPv6, local (UNIX), and route.  Warning: jail functionality does not exist for all protocol stacks. |
| allow_mount | Set to allow privileged users inside the jail to mount and unmount filesystem types marked as jail-friendly. |