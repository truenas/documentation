---
---

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Interfaces** | Use to enter up to four interface configurations in the format *interface:bridge*, separated by a comma (,), where the left value is the virtual VNET interface name and the right value is the bridge name where to attach the virtual interface. |
| **host_domainname** | Use to enter a [NIS domain name](https://www.freebsd.org/doc/handbook/network-nis.html) for the jail. |
| **host_hostname** | Use to set the jail host name. Defaults to the jail UUID. |
| **resolver** | Use to add lines to the jail resolv.conf. For example, *nameserver IP*;*search domain.local*. Delimit fields with a semicolon (;), this translates as new lines in resolv.conf. Enter none to inherit resolv.conf from the host. |
| **exec_fib** | Enter the routing table [(FIB)](https://www.freebsd.org/cgi/man.cgi?query=setfib) to use when running commands inside the jail. |
| **ip4.saddrsel** | Select to disable IPv4 source address selection for the jail in favor of the primary IPv4 address of the jail. Only available when the jail is not configured to use VNET. |
| **ip6.saddrsel** | Select to disable IPv6 source address selection for the jail in favor of the primary IPv6 address of the jail. Only available when the jail is not configured to use VNET. |
| **ip4** | Controls the availability of IPv4 addresses. Use the dropdown list to select from options **inherit**, **New** or **Disable**.<br> Select **Inherit** to allow unrestricted access to all system addresses.<br> Select **New** to restrict addresses with ip4_addr.<br> Select **Disable** to stop the jail from using IPv4 entirely. |
| **ip6** | Controls the availability of IPv6 addresses. Use the dropdown list to select from options **inherit**, **New** or **Disable**.<br> Select **Inherit** to allow unrestricted access to all system addresses.<br> Select **New** to restrict addresses with ip6_addr.<br> Select **Disable** to stop the jail from using IPv6 entirely. |
| **mac_prefix** | Enter a valid MAC address vendor prefix. For example, *E4F4C6*. |
| **vnet0_mac** | Use to assign a fixed MAC address. Leave this field empty to generate random MAC addresses for the host and jail. To assign fixed MAC addresses, enter the MAC address to assign to the host, a space, then the MAC address to assign to the jail. |
{{< /truetable >}}