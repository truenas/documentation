---
title: "Enabling WireGuard"
description: "This article provides instructions on setting up WireGuard on TrueNAS CORE."
weight: 50
aliases: /core/network/wireguard/
tags:
- corewireguard
- corenetwork
---

[WireGuard](https://www.wireguard.com/) is a popular option in the VPN marketplace. It is fast, simple, and uses modern cryptography standards. It is possible to connect your NAS to a WireGuard network in a few easy steps. Systems running FreeNAS version 11.3-RC1 through TrueNAS 13.0 have WireGuard capability.

## Configure System Tunables for WireGuard

Go to **System > Tunables > Add** and use these settings to enable the service:

* **Variable** = **wireguard_enable**
* **Value** = **YES**
* **Type** = **rc.conf**

![EnableWireguard](/images/CORE/12.0/wireguard_enable.png "Enable Wireguard")

Next, create another tunable to define the networking interface:

* **Variable** = **wireguard_interfaces**
* **Value** = **wg0**
* **Type** = **rc.conf**

![WireguardInterface](/images/CORE/12.0/wireguard_interfaces.png "Wireguard Interfaces")

When finished, TrueNAS sets and enables the two variables.

![WireguardVariables](/images/CORE/12.0/wireguard_variables.png "Wireguard Variables")

## Configure a Init/Shutdown Script

Next, create a post-init script. This places the WireGuard config in the correct location at startup.

Go to **Tasks > Init/Shutdown Scripts** and click **Add**.
Configure the script to load the WireGuard <file>.conf</file> file each time the system boots:

* **Type** = **Command** 
* **Command** = `mkdir -p /usr/local/etc/wireguard && cp /root/wg0.conf /usr/local/etc/wireguard/wg0.conf && /usr/local/etc/rc.d/wireguard start`
* **When** = **Post Init**

## Configure the WireGuard File

You can configure the <file>/root/wg0.conf</file> file. This applies a WireGuard configuration to attach to whatever WireGuard network you define.
It can be a single point-to-point to anything running WireGuard. It can even use full routing.
Example use cases are:

* Access data on a NAS from your Remote Laptop
* Linking NAS to NAS for replication
* Attaching a managed NAS to a remote network
* Access to your NAS from your smartphone

![WireguardPostInit](/images/CORE/12.0/WireguardInitScript.png "Wireguard Post Init Script")

### Create the File with WireGuard Configuration to Apply at Boot

Now create the <file>/root/wg0.conf</file>. This is the specific WireGuard configuration to apply at boot.
These file settings depend on your specific networking environment and requirements. Their configuration is beyond the scope of this article.

There are [quickstart guides](https://www.wireguard.com/quickstart/) and [tutorials](https://www.linode.com/docs/networking/vpn/set-up-wireguard-vpn-on-ubuntu/) available online as well as the built-in wg-quick manpage.

Determine that you have a valid <file>/root/wg0.conf</file>. If so, rebooting the system brings up the WireGuard interface with a wg0 device in the output of `ifconfig`.

![wg0DeviceOutput](/images/CORE/12.0/wg0DeviceOutput.png "wg0 device output")

{{< taglist tag="corenetwork" limit="10" >}}
