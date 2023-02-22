---
---

TrueNAS uses DHCP to assign the IP address to the primary system network interface. DHCP only provisions one IP address. You can use this DHCP-provided address or you can assign a static IP address. You must assign each network interface cards (NICs) installed in your system and wired to your network an IP address if you want to communicate over your network using the interfaces. To configure your TrueNAS server to work with your network, you need:

* DHCP broadcast messages enabled on the network or the subnet(s) in your network where TrueNAS is installed
* DNS name sever IP addresses in your network (SCALE can accommodate up to three name server IP addresses) 
* IP address for the Network Time Protocol (NTP) server you use to synchronize time across your servers and network
* Main domain name or the domain name for the portion of your network where the TrueNAS SCALE server is deployed 
* Host name you want to use if not using the default-assigned host name in SCALE (**truenas** is the default host name in SCALE)
* IP address for each additional network interface added in your system and connected to your network (static IP not provided by DHCP)
* IP address assigned to the controller. Either allow DHCP to assign the IP address or assign a static IP.