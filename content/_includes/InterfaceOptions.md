---
---

## Other Settings

Every kind of network interface has common settings:

![NetworkInterfacesAddOtherSettings](/images/CORE/12.0/NetworkInterfacesAddOtherSettings.jpg "Common Interface Settings")

Disabling **Hardware Offloading** can reduce network performance. It is not recommended.  

Disabling this option is sometimes necessary. For example, when the interface is managing jails, plugins, or virtual machines.  

MTU stands for maximum transmission unit. It is the largest protocol unit for transferring data.
MTU size varies. Physical hardware and available network interfaces determine the largest workable MTU size.
1500 and 9000 are standard Ethernet MTU sizes. The recommendation is to use the default 1500.
The permissible range of MTU values is 1492-9216.
Leaving this field blank sets the default value of **1500**.

You can enter more tuning [ifconfig](https://www.freebsd.org/cgi/man.cgi?query=ifconfig) settings in the **Options**.

## IP Addresses

Additional aliases for the interface can also be defined:

![NetworkInterfacesAddIpAddresses](/images/CORE/12.0/NetworkInterfacesAddIpAddresses.jpg "Interface Aliases")

It is possible to define either IPv4 or IPv6 addresses and subnets from 1-32.
Clicking **Add** provides another field for defining an IP address.