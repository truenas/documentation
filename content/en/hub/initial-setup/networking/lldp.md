---
title: "LLDP"
description: "Link Layer Discovery Protocol"
tags: ["LLDP", "networking"]
---


### LLDP

The Link Layer Discovery Protocol (LLDP) is used by network devices to advertise their identity, capabilities, and neighbors on an Ethernet network. TrueNAS® uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation. If the network contains managed switches, configuring and starting the LLDP service will tell the TrueNAS® system to advertise itself on the network.

<img src="/images/TN-12.0-services-lldp.png" width='700px'>
<br><br>


### LLDP onfiguration options

| Setting               | Value    | Description                                                                                     |
|-----------------------|----------|-------------------------------------------------------------------------------------------------|
| Interface Description | checkbox | Set to enable receive mode and to save and received peer information in interface descriptions. |
| Country Code          | string   | Required for LLDP location support. Enter a two-letter ISO 3166 country code.                   |
| Location              | string   | Optional. Specify the physical location of the host.  
