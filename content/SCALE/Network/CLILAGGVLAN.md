---
title: "Setting a LAGG/VLAN with the SCALE CLI"
weight: 20
---

{{< toc >}}

Setting a LAGG or VLAN on TrueNAS SCALE can be accomplished with the new CLI utility. In this example we will be setting both a LAGG and a VLAN at the same time.  The values used in this example will change based on your network infrastructure.

| Parameter | Value |
|-|-|
| Lagg Interfaces | eno1, eno2 |
| VLAN ID | 1022 |
| Bond ID | bond0 |
| IP address | 10.215.6.5 |
| Subnet Mask | 25 |

#### Launching the CLI Utility

Open the TrueNAS shell by clicking **System Settings > Shell**.
Next, launch the CLI utility by entering: **cli**

![SCALECLI](/images/SCALE/SCALECLIShell.png "SCALE CLI")

#### Configure the LAGG and VLAN

The following commands will configure the interface.

`network interface create type=LINK_AGGREGATION lag_ports=["eno1","eno2"] lag_protocol=LACP`

`network interface create type=VLAN vlan_parent_interface=bond0 vlan_tag=1022 aliases=[{"address": "10.215.6.5", "netmask": "25"}]`

`network interface commit options={}`

The configuration will be attempted and if any errors occur they will be displayed.
Once this has been completed you can exit the CLI Utility and run `ip addr show` and verify that the IP was set.

#### Configure gateway

Once the IP on the interface has been properly configured you can now set the gateway.
Launch the CLI utility by entering: **cli**, and run the following command:
`network configuration update ipv4gateway="10.215.6.1"`
Once this has completed, you can exit the CLI Utility.  If everything has been properly set, you will be able to ping the gateway. 





