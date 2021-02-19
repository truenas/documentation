## Add

**General Options**

| | |
|-|-|
| Plugin Name | Required. Can contain letters, numbers, periods (.), dashes (-), and underscores (_). |
| Jail Name | Required. Can contain letters, numbers, periods (.), dashes (-), and underscores (_). |
| DHCP | Set to autoconfigure jail networking with the Dynamic Host Configuration Protocol. VNET and Berkeley Packet Filter must also be enabled. |
| NAT | Network Address Translation (NAT). Transforms local network IP addresses into a single IP address. Set when the jail will share a single connection to the Internet with other systems on the network. |
| IPv4 Interface | IPv4 interface for the jail. |
| IPv4 Address | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| IPv4 Netmask | IPv4 netmask for the jail. |
| IPv6 Interface | IPv6 interface for the jail. |
| IPv6 Address | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| IPv6 Netmask | IPv6 prefix for the jail. |