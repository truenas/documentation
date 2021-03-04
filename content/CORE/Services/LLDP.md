---
title: "LLDP"
weight: 30
---

The [Link Layer Discovery Protocol (LLDP)](https://tools.ietf.org/html/rfc4957) is used by network devices to advertise their identity, capabilities, and neighbors on an Ethernet network.
TrueNAS uses the [ladvd](https://github.com/sspans/ladvd) LLDP implementation.
When the local network contains managed switches, configuring and starting the LLDP service will tell the TrueNAS system to advertise itself on the network.

To configure LLDP, log in to the web interface and go to **Services > LLDP**

<img src="/images/TN12.0-ServicesLLDP.png" width='700px'>
<br><br>

Set an **Interface Description** and enter a **Country Code** before turning the LLDP service on.

## LLDP Configuration options

| Setting               | Value    | Description                                                                                     |
|-----------------------|----------|-------------------------------------------------------------------------------------------------|
| Interface Description | checkbox | Enables *receive* mode. Any received peer information is saved in interface descriptions.       |
| Country Code          | string   | Two-letter [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/#search) code used to enable LLDP location support.                        |
| Location              | string   | The physical location of the host.  
