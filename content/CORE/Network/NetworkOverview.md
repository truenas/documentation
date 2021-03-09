---
title: "Network Overview"
weight: 10
---

It is recommended to set up your system connections before setting up data sharing.
This allows integrating TrueNAS into your specific security and network environment before attempting to store or share critical data.
The articles in this section describe the various TrueNAS networking features and guide you through many of the different configuration options.

## Network Summary
A concise overview of the current network setup. Information about the Interfaces, Default Routes, and Nameservers are provided.
This area is not editable

<img src="documentation/static/images/CORE/12.0/NetworkSummary.png">
<br><br>

These menu items are provided in the UI to add or edit network options:

* Global Configuration - Hostname and Domain, DNS Servers, Default Gateway and other realted options

* [Interfaces](documentation/content/CORE/Network/Interfaces/) - Set up Static IP, Bridge, LAGG, amd Vlan's

* [Static Routes](documentation/content/CORE/Network/StaticRoutes) - Add a static route here if it is required to reach portions of the network 

* [IPMI](documentation/content/CORE/Network/IPMI) - Configure Out of Band Management
