---
title: "Enabling WireGuard"
weight: 50
aliases: /core/network/wireguard/
---

[WireGuard](https://www.wireguard.com/) is a popular option in the VPN marketplace due to its speed, simplicity, and modern cryptography standards.
Starting with FreeNAS version 11.3-RC1 and continuing through TrueNAS 12.0, it is possible to connect your NAS directly to a WireGuard network with a few easy steps.

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

Next, create a post-init script that places the WireGuard config in the correct location at startup.

Go to **Tasks > Init/Shutdown Scripts** and click **Add**.
Configure the script to load the WireGuard <file>.conf</file> file each time the system boots:

* **Type** = **Command** 
* **Command** = `mkdir -p /usr/local/etc/wireguard && cp /root/wg0.conf /usr/local/etc/wireguard/wg0.conf && /usr/local/etc/rc.d/wireguard start`
* **When** = **Post Init**

## Configure the WireGuard File

You can configure the <file>/root/wg0.conf</file> file and apply a WireGuard configuration to attach to whatever WireGuard network you define.
It can be a single point-to-point to anything running WireGuard or even use full routing.
Example use cases are:

* Access data on a NAS from your Remote Laptop
* Linking NAS to NAS for replication
* Attaching a managed NAS to a remote network
* Access to your NAS from your smartphone

![WireguardPostInit](/images/CORE/12.0/WireguardInitScript.png "Wireguard Post Init Script")

### Create the File with WireGuard Configuration to Apply at Boot

Now create the <file>/root/wg0.conf</file> with the specific WireGuard configuration to apply at boot.
These file settings depend on your specific networking environment and requirements, which is beyond the scope of this article.

There are [quickstart guides](https://www.wireguard.com/quickstart/) and [tutorials](https://www.linode.com/docs/networking/vpn/set-up-wireguard-vpn-on-ubuntu/) available online as well as the built-in wg-quick manpage.

After you have a valid <file>/root/wg0.conf</file>, rebooting the system brings up the WireGuard interface with a wg0 device in the output of `ifconfig`.

![wg0DeviceOutput](/images/CORE/12.0/wg0DeviceOutput.png "wg0 device output")