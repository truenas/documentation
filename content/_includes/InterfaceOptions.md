---
---

## Other Settings

Every kind of network interface has common settings:

![NetworkInterfacesAddOtherSettings](/images/CORE/12.0/NetworkInterfacesAddOtherSettings.jpg "Common Interface Settings")

Disabling **Hardware Offloading** is discouraged as it can reduce network performance.
However, disabling this option might be needed when the interface is managing jails, plugins, or virtual machines.

The maximum transmission unit (MTU) is the largest protocol data unit that can be communicated.
What the largest workable MTU size can be changes according to your available network interfaces and other physical hardware.
1500 and 9000 are standard Ethernet MTU sizes and the recommendation is to use the default 1500.
The permissible range of MTU values is 1492-9216.
Leaving this field blank sets the default value of **1500**.

If additional tuning is needed, you can enter additional [ifconfig](https://www.freebsd.org/cgi/man.cgi?query=ifconfig) settings in the **Options**.

## IP Addresses

Additional aliases for the interface can also be defined:

![NetworkInterfacesAddIpAddresses](/images/CORE/12.0/NetworkInterfacesAddIpAddresses.jpg "Interface Aliases")

Either IPv4 or IPv6 addresses and subnets from 1-32 can be defined.
Clicking **Add** provides another field for defining an IP address.