---
---

| Name | Description |
|------|-------------|
| **priority** | Enter a numeric start priority for the jail at boot time. Valid priorities are between 1 and 99. Smaller values are higher priority. At system shutdown the priority is reversed. For example, *99*. |
| **hostid** | Enter a new jail host id, if desired. For example, the *hostid: 1a2bc345-678d-90e1-23fa-4b56c78901de*. |
| **comment** | Enter comments about the jail. |
| **template** | Select to set this jail as a template. |
| **host_time** | Select to set system host time to synchronize the time between jail and host. |
| **jail_zfs** | Select to enable automatic ZFS jailing inside the jail. The jail fully controls the assigned ZFS dataset. |
| **jail_zfs_dataset** | Enter a ZFS file system name without a pool name to define the jailed dataset and fully hand over to a jail. You must set jail_zfs for this option to work. |
| **jail_zfs_mountpoint** | Enter the mount point for the jail_zfs_dataset. For example, */data example-dataset-name*. |
| **allow_tun** | Select to reveal tun devices for the jail with an individual devfs ruleset. Allows the creation of tun devices in the jail. |
| **Autoconfigure IPv6 with rtsold** | Select to use [rtsold(8)](https://www.freebsd.org/cgi/man.cgi?query=rtsold) as part of IPv6 auto-configuration. Send ICMPv6 router solicitation messages to interfaces to discover new routers. |
| **ip_hostname** | Select to use DNS records during jail IP configuration to search the resolver and apply the first open IPv4 and IPv6 addresses. See [jail(8)](https://www.freebsd.org/cgi/man.cgi?query=jail). |
| **assign_localhost** | Select to add network interface lo0 to the jail and assign it the first available localhost address, starting with **127.0.0.2**. The **Basic Properties** **VNET** checkbox must be cleared. Jails using VNET configure a localhost as part of their virtualized network stack. |