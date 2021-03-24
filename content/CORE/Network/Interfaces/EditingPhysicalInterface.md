---
title: "Editing a Physical Interface"
weight: 50
---

{{<toc>}}

## Interface Editing ###

{{< hint warning >}}
Be careful when configuring the network interface that controls the TrueNAS® web interface or web connectivity can be lost.
{{< /hint >}}

**Network > Interfaces** has all the physical [Network Interface Controllers (NICs)]({{< relref "/CORE/Network/Interfaces/_index.md" >}}) connected
to your TrueNAS® system. 

![NetworkInterfaceOverview](/images/CORE/12.0/NetworkInterfaceOverviewPage.png "Network Interface Overview")
<br><br>

Click **>** for the interface that you want to edit.  This will expand the view and provide a general description about the chosen interface. Click *EDIT*.

{{< hint info >}}
If you are a TrueNAS Enterprise customer, it is important to remember that an interface cannot be edited when High Availability (HA) has been enabled.  Go to
**System > Failover** and check the *Disable Failover* box and click *SAVE*.
{{< /hint >}}

![NetworkInterfaceDescription](/images/CORE/12.0/NetworkInterfaceDescriptionView.png "Network Interface Description")
<br><br>

{{< hint note >}}
The editing options for an interface are dependent on the *Type* of interface that is being modified.
{{< /hint >}}

### Interface Settings ###

| Setting | Value | Description |
|---------|-------|-------------|
| Description | string | Notes or explanatory text about this interface. |
| DHCP | checkbox | Enable DHCP to auto-assign an IPv4 address to this interface. Leave unset to create a static IPv4 or IPv6 configuration. Only one interface can be configured for DHCP. |
| Autoconfigure IPv6 | checkbox | Automatically configure the IPv6 address with [rtsol](https://www.freebsd.org/cgi/man.cgi?query=rtsol). Only one interface can be configured this way. |

### Other Settings ###

| Setting | Value | Description |
|---------|-------|-------------|
| Disable Hardware Offloading | checkbox | Turn off hardware offloading for network traffic processing. WARNING: disabling hardware offloading can reduce network performance and is only recommended when the interface is managing [jails]({{< relref "/Jails/_index.md" >}}), [plugins]({{< relref "/Plugins/_index.md" >}}), or [virtual machines (VMs)]({{< relref "/VirtualMachines/_index.md" >}}). |
| MTU | string | Maximum Transmission Unit, the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of 1500. |
| Options | string | Additional parameters from [ifconfig](https://www.freebsd.org/cgi/man.cgi?query=ifconfig). Separate multiple parameters with a space. For example: mtu 9000 increases the MTU for interfaces which support jumbo frames. |

### IP Addresses ###

| Setting | Value | Description |
|---------|-------|-------------|
| IP Address | integer and drop-down menu | Static IPv4 or IPv6 address and subnet mask. Example: 10.0.0.3 and /24. Click *ADD* to add another IP address. Clicking *DELETE* removes that IP Address. |

## Saving Changes ##

