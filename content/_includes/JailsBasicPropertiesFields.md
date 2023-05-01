---
---

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Name** | Required field. Enter a name that can include letters, numbers, periods (.), dashes (-), and underscores (_). |
| **Jail Type** | Select an option from the dropdown-list. Options are **Default (Clone Jail)** or **Basejail**. Use **Default (Clone Jail)** to clone jails that are clones of the specified value in **Release**. They are linked to that release, even if they are upgraded. Use **Basejails** to mount the specified release directories as nullfs mounts over the jail directories. Basejails are not linked to the original release when upgraded. |
| **Release** | Select an option from the dropdown list. Options are **12.2-RELEASE** or **13.0-RELEASE**. This is the FreeBSD release to use as the jail operating system. Jails can run FreeBSD versions up to the same version as the host system. Newer releases are not shown. |
| **DHCP Autoconfigure IPv4** | Select to auto-configure jail networking with the Dynamic Host Configuration Protocol (DHCP). Also select **VNET** and **Berkeley Packet Filter** with this selected option. |
| **NAT** | Network Address Translation (NAT) to transform local network IP addresses into a single IP address. Select when the jail shares a single connection to the Internet with other systems on the network. |
| **VNET** | Select to use [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) to emulate network devices for the jail. A fully virtualized per-jail network stack is installed. |
| **Berkeley Packet Filter** | Select to use the [Berkeley Packet Filter (BPF(4))](https://www.freebsd.org/cgi/man.cgi?query=bpf) to data-link layers in a protocol independent fashion. |
| **vnet_default_interface** | Select the default VNET interface from options on the dropdown list. Options are **none**, **auto**, or specific interfaces on your system. Only takes effect when **VNET** is selected. Choose a specific interface or set to **auto** to use the interface that has the default route. Choose **none** to not set a default VNET interface. |
| **IPv4 Interface** | Select the IPv4 interface for the jail from the dropdown list. |
| **IPv4 Address** | Enter the IPv4 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv4 Netmask** | Select the IPv4 netmask for the jail from the dropdown list. |
| **IPv4 Default Router** | Enter a valid IPv4 address to use as the default route. Enter **none** to configure the jail with no IPv4 default route. A jail without a default route is not be able to access any networks. |
| **AutoConfigure IPv6** | Select to use Stateless Address Auto Configuration (SLAAC) to autoconfigure IPv6 in the jail. |
| **IPv6 Interface** | Select the IPv6 interface for the jail from the dropdown list. |
| **IPv6 Address** | Enter the IPv6 address for [VNET(9)](https://www.freebsd.org/cgi/man.cgi?query=vnet) and shared IP jails. |
| **IPv6 Netmask** | Select the IPv6 prefix for the jail from the dropdown list. |
| **IPv6 Default Router** | Enter a valid IPv6 address to use as the default route. Enter **none** to configure the jail without an IPv6 default route. A jail without a default route is not be able to access any networks. |
| **Auto Start** | Select to auto-start the jail at system boot time. Jails are started and stopped based on iocage priority. Set in the **Custom Properties priority** field. |
{{< /truetable >}}
