---
title: "Interface Fields Reference Guide: Jails"
linkTitle: "Jails"
description: "Descriptions of each field in the Jails section of the TrueNAS web interface."
weight: 110
tags: ["reference", "jails", "networking"]
---

## Add

**Name Jail and Choose FreeBSD Release**

| | |
|-|-|
| Name | Required. Can contain letters, numbers, periods (.), dashes (-), and underscores (_). |
|-|-|
| Jail Type | Default (Clone Jail) or Basejail. Clone jails are clones of the specified RELEASE. They are linked to that RELEASE, even if they are upgraded. Basejails mount the specified RELEASE directories as nullfs mounts over the jail directories. Basejails are not linked to the original RELEASE when upgraded. |
| Release | FreeBSD release to use as the jail operating system. Jails can run FreeBSD versions up to the same version as the host system. Newer releases are not shown. |


**Configure Networking**

| | |
|-|-|
| DHCP Autoconfigure IPv4 | Set to autoconfigure jail networking with the Dynamic Host Configuration Protocol. VNET and Berkeley Packet Filter must also be enabled. |
| NAT | Network Address Translation (NAT). Transforms local network IP addresses into a single IP address. Set when the jail will share a single connection to the Internet with other systems on the network. |
| VNET | Set to use [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) to emulate network devices for the jail. A fully virtualized per-jail network stack will be installed. |
| IPv4 Interface | IPv4 interface for the jail. |
| IPv4 Address | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| IPv4 Netmask | IPv4 netmask for the jail. |
| IPv4 Default Router | A valid IPv4 address to use as the default route. Enter none to configure the jail with no IPv4 default route. A jail without a default route will not be able to access any networks. |
| AutoConfigure IPv6 | Set to use SLAAC (Stateless Address Auto Configuration) to autoconfigure IPv6 in the jail. |
| IPv6 Interface | IPv6 interface for the jail. |
| IPv6 Address | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| IPv6 Netmask | IPv6 prefix for the jail. |
| IPv6 Default Router | A valid IPv6 address to use as the default route. Enter none to configure the jail without an IPv6 default route. A jail without a default route will not be able to access any networks. |



## Advanced

**Basic Properties**

| | |
|-|-|
| Name | Required. Can contain letters, numbers, periods (.), dashes (-), and underscores (_). |
|-|-|
| Jail Type | Default (Clone Jail) or Basejail. Clone jails are clones of the specified RELEASE. They are linked to that RELEASE, even if they are upgraded. Basejails mount the specified RELEASE directories as nullfs mounts over the jail directories. Basejails are not linked to the original RELEASE when upgraded. |
| Release | FreeBSD release to use as the jail operating system. Jails can run FreeBSD versions up to the same version as the host system. Newer releases are not shown. |
| DHCP Autoconfigure IPv4 | Set to autoconfigure jail networking with the Dynamic Host Configuration Protocol. VNET and Berkeley Packet Filter must also be enabled. |
| NAT | Network Address Translation (NAT). Transforms local network IP addresses into a single IP address. Set when the jail will share a single connection to the Internet with other systems on the network. |
| VNET | Set to use [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) to emulate network devices for the jail. A fully virtualized per-jail network stack will be installed. |
| Berkeley Packet Filter | Set to use the Berkeley Packet Filter [(BPF(4))](https://www.freebsd.org/cgi/man.cgi?query=bpf) to data link layers in a protocol independent fashion. |
| vnet_default_interface | Set the default VNET interface. Only takes effect when VNET is set. Choose a specific interface or set to auto to use the interface that has the default route. Choose none to not set a default VNET interface. |
| IPv4 Interface | IPv4 interface for the jail. |
| IPv4 Address | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| IPv4 Netmask | IPv4 netmask for the jail. |
| IPv4 Default Router | A valid IPv4 address to use as the default route. Enter none to configure the jail with no IPv4 default route. A jail without a default route will not be able to access any networks. |
| AutoConfigure IPv6 | Set to use SLAAC (Stateless Address Auto Configuration) to autoconfigure IPv6 in the jail. |
| IPv6 Interface | IPv6 interface for the jail. |
| IPv6 Address | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| IPv6 Netmask | IPv6 prefix for the jail. |
| IPv6 Default Router | A valid IPv6 address to use as the default route. Enter none to configure the jail without an IPv6 default route. A jail without a default route will not be able to access any networks. |
| Auto Start | Set to auto-start the jail at system boot time. Jails are started and stopped based on iocage priority. Set in the priority field under Custom Properties. |


**Jail Properties
**

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

**Network Properties
**

| | |
|-|-|
| Interfaces | Enter up to four interface configurations in the format interface:bridge, separated by a comma (,). The left value is the virtual VNET interface name and the right value is the bridge name where the virtual interface should be attached. |
| host_domainname | Enter a [NIS Domain name](https://www.freebsd.org/doc/handbook/network-nis.html) for the jail. |
| host_hostname | Set the jail hostname. Defaults to the jail UUID. |
| resolver | Add lines to the jail resolv.conf. Example: nameserver IP;search domain.local. Fields must be delimited with a semicolon (;), This is translated as new lines in resolv.conf. Enter none to inherit resolv.conf from the host. |
| ip4.saddrsel | Disable IPv4 source address selection for the jail in favor of the primary IPv4 address of the jail. Only available when the jail is not configured to use VNET. |
| ip6.saddrsel | Disable IPv6 source address selection for the jail in favor of the primary IPv6 address of the jail. Only available when the jail is not configured to use VNET. |
| ip4 | Control the availability of IPv4 addresses.  Inherit: Allow unrestricted access to all system addresses.  New: Restrict addresses with ip4_addr.  Disable: Stop the jail from using IPv4 entirely. |
| ip6 | Control the availability of IPv6 addresses.  Inherit: Allow unrestricted access to all system addresses.  New: Restrict addresses with ip6_addr.  Disable: Stop the jail from using IPv6 entirely. |
| mac_prefix | Enter a valid MAC address vendor prefix. Example: E4F4C6 |
| vnet0_mac | Leave this field empty to generate random MAC addresses for the host and jail. To assign fixed MAC addresses, enter the MAC address to be assigned to the host, a space, then the MAC address to be assigned to the jail. |

**Custom Properties
**

| | |
|-|-|
| priority | Numeric start priority for the jail at boot time. Valid priorities are between 1 and 99. Smaller values are higher priority. At system shutdown the priority is reversed.  Example: 99 |
| hostid | A new jail hostid, if desired.  Example hostid: 1a2bc345-678d-90e1-23fa-4b56c78901de. |
| comment | Enter comments about the jail. |
| template | Set to set this jail as a template. |
| host_time | System host time to synchronize the time between jail and host. |
| jail_zfs | Set to enable automatic ZFS jailing inside the jail. The assigned ZFS dataset is fully controlled by the jail. |
| jail_zfs_dataset | Define the dataset to be jailed and fully handed over to a jail. Enter a ZFS filesystem name without a pool name. jail_zfs must be set for this option to work. |
| jail_zfs_mountpoint | Enter the mountpoint for the jail_zfs_dataset. Example: /data example-dataset-name |
| allow_tun | Reveal tun devices for the jail with an individual devfs ruleset. Allow the creation of tun devices in the jail |
| Autoconfigure IPv6 with rtsold | Use [rtsold(8)](https://www.freebsd.org/cgi/man.cgi?query=rtsold) as part of IPv6 autoconfiguration. Send ICMPv6 Router Solicitation messages to interfaces to discover new routers. |
| ip_hostname | Set to use DNS records during jail IP configuration to search the resolver and apply the first open IPv4 and IPv6 addresses. See [jail(8)](https://www.freebsd.org/cgi/man.cgi?query=jail). |
| assign_localhost | Set to add network interface lo0 to the jail and assign it the first available localhost address, starting with 127.0.0.2. VNET must be unset. Jails using VNET configure a localhost as part of their virtualized network stack. |

