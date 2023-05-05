---
title: "Interface"
description: "This article provides information about the SCALE CLI network interface namespace and command syntax, and includes common commands."
weight: 30
aliases:
draft: false
tags:
- scaleclinetwork
---

{{< toc >}}


{{< hint type=tip >}}
The SCALE CLI guide is a work in progress!
New namespace and command documentation is continually added and maintained, so check back here often to see what is new!
{{< /hint >}}

## Interfaces Commands

The **interfaces** namespace has 24 commands based on functions found in the SCALE API and web UI. 
These commands return interface and options by type (bridge, VLAN, etc.), allow you to add or manage settings, get interface and IP address information, and commit or rollback network changes for interfaces on system. 
Options can vary by the type of system and license applied (i.e., an HA system). 

You can enter commands from the main CLI prompt or from a **network** namespace prompt.

### Interfaces

This section covers assigning an IP address to a network interface.

Enter `network interface`.

If you do not already know the interface you want to configure, enter `query` to display a list of all physical network interfaces.

![TrueNASCLInetworkinterfacequery](/images/SCALE/TrueNASCLInetworkinterfacequery.png "Network Interface Query")

To edit the interface, enter `update interfacename aliases=["ipaddress/subnetmask"] ipv4_dhcp=false`

The CLI displays the message: "You have pending network interface changes. Please run 'network interface commit' to apply them."

Enter `commit` to apply the changes, then enter `checkin` to make them permanent. 

![TrueNASCLIupdateinterfacealiases](/images/SCALE/TrueNASCLIupdateinterfacealiases.png "Update Interface Aliases")

Enter `query` to make sure the TrueNAS applies the changes successfully.

Enter `..` to exit `interface` and go up one level to the `network` menu.


{{< taglist tag="scaleclinetwork" limit="10" title="Related CLI Network Articles" >}}
