---
title: "Network"
geekdocCollapseSection: true
description: "This article describes how to set up networking in the TrueNAS CLI Shell." 
weight: 30
---

{{< toc >}}

## Basic Networking

### Interfaces

This section covers assigning an IP address to a network interface.

Enter `network interface`.

If you don't already know the interface you want to configure, enter `query` to display a list of all physical network interfaces.

![TrueNASCLInetworkinterfacequery](/images/SCALE/TrueNASCLInetworkinterfacequery.png "Network Interface Query")

To edit the interface, enter `update interfacename aliases=["ipaddress/subnetmask"] ipv4_dhcp=false`

The CLI displays the message: "You have pending network interface changes. Please run 'network interface commit' to apply them."

Enter `commit` to apply the changes, then enter `checkin` to make them permanent. 

![TrueNASCLIupdateinterfacealiases](/images/SCALE/TrueNASCLIupdateinterfacealiases.png "Update Interface Aliases")

Enter `query` to make sure the Truenas applies the changes successfully.

Enter `..` to exit `interface` and go up one level to the `network` menu.

### Global Configuration

This section covers configuring the default gateway.

Enter `configuration` (or `network configuration` if you just opened the CLI Shell).

Enter `update ipv4gateway="ipaddress"`

If entered properly, your system networking is now configured.

