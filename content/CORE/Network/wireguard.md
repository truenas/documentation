---
title: "How To Enable WireGuard on FreeNAS 12.0"
weight: 50
---

[WireGuard](https://www.wireguard.com/) is a popular option in the VPN marketplace due to its speed, simplicity, and modern cryptography standards. Starting with FreeNAS version 11.3-RC1, it is possible to connect your NAS directly to a WireGuard network with a few easy steps.

We get started on this by creating some custom tunables to enable the 
service and give it a default interface. To do this you must first navigate to **System > Tunables > Add**.

Enable the WireGuard service by adding `“wireguard_enable” -> “YES”` in rc.conf.

![EnableWireguard](/images/CORE/12.0/wireguard_enable.png "Enable Wireguard")
<br><br>

Next, create another tunable and add “wireguard_interfaces” -> “wg0” in rc.conf.

![WireguardInterface](/images/CORE/12.0/wireguard_interfaces.png "Wireguard Interfaces")
<br><br>

When finished, you should have the following two variables set and enabled.

![WireguardVariables](/images/CORE/12.0/wireguard_variables.png "Wireguard Variables")
<br><br>

Next, we will need to create a post-init script that will place the WireGuard config into the correct location at startup. Navigate to Tasks -> Init/Shutdown Scripts -> Add.

Create the following command and set it to run at post-init:

```
mkdir /usr/local/etc/wireguard && cp /root/wg0.conf /usr/local/etc/wireguard/wg0.conf && /usr/local/etc/rc.d/wireguard start
```

You can configure the `/root/wg0.conf` file and apply a WireGuard configuration to attach to whatever WireGuard network you define. It can be a single point-to-point to anything running WG, or even with full routing. Example use cases are:

+ Access data on a NAS from your Remote Laptop
+ Linking NAS to NAS for replication
+ Attaching a managed NAS to a remote network
+ Access to your NAS from your smartphone

![WireguardPostInit](/images/CORE/12.0/wireguard_post_init.png "Wireguard POst Init")
<br><br>

We need to create the /root/wg0.conf which will contain the specific WireGuard configuration to apply at boot. This configuration is beyond the scope of this article, but there are [quickstart guides](https://www.wireguard.com/quickstart/) and [tutorials](https://www.linode.com/docs/networking/vpn/set-up-wireguard-vpn-on-ubuntu/) available online as well as the built-in `wg-quick` manpage.

Once you have a valid `/root/wg0.conf`, rebooting the system should bring up the WireGuard interface, and you’ll see a `wg0` device in the output of `ifconfig`.

![wg0DeviceOutput](/images/CORE/12.0/wg0_Device_Output.png "wg0 device output")
<br><br>

Congratulations, you have successfully linked your FreeNAS system to a secure WireGuard tunnel!
