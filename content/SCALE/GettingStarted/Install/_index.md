---
title: "Installation Instructions"
geekdocCollapseSection: true
weight: 30
---

This section provides instructions for users that are installing TrueNAS SCALE for the first time on their own system hardware and for users that need to do a clean install of SCALE. 

TrueNAS SCALE Enterprise customers should contact iXsystem Support for assistance with the initial set up and configuration of their systems.

The installation process covers installing SCALE using an <file>iso</file>, and then using the Console setup menu to configure the primary network interface with a static IP address. 
TrueNAS SCALE uses DHCP to provide the system IP address but customers can use the Console setup menu to assign a static IP address to the primary network interface if they do not want to use the DHCP-assigned IP address, and to use it to configure additional network settings. 

It also describes using the web UI to configure the rest of the system including network settings, storage pools, data sharing, data storage backup solutions, important services, and other options available though the web UI. 

Finally, it covers backing up the system configuration to a file.

If you plan to use this TrueNAS SCALE system as part of a cluster, complete the configuration process and then save the system configuration file.

If you plan to use TrueCommand to manage multiple TrueNAS systems, installation instructions are found [here]({{< relref "/truecommand/tcgettingstarted/install/_index.md" >}})

## Installation Article Summaries

{{< children depth="2" description="true" >}}