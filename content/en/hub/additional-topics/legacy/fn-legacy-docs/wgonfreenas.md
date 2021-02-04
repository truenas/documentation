---
title: "How To Enable Wireguard on FreeNAS 11.3"
description: "How To Enable Wireguard on FreeNAS 11.3."
---

Google Drive and G Suite are widely used tools for creating and sharing documents, spreadsheets, and presentations with team members. While cloud-based tools have inherent backups and replications included by the cloud provider, certain users may require additional backup or archive capabilities. For example, companies using G Suite for important work may be required to keep records for years, potentially beyond the scope of the G Suite subscription. FreeNAS and TrueNAS offer the ability to back up Google Drive easily, using the built-in cloud sync.

This blog will explain how to set up Google Drive sync with FreeNAS 11.3, as well as provide a few caveats and workarounds when backing up Google Docs and other Google created content.

### Setting up Google Drive credentials

Set up the credentials under **System > Cloud Credentials**.

[WireGuard](https://www.wireguard.com/) is quickly gaining popularity in the VPN marketplace due to its speed, simplicity, and modern cryptography standards. Starting with FreeNAS version 11.3-RC1, it is possible to connect your NAS directly to a WireGuard network with a few easy steps.

We get started on this by creating some custom tunables to enable the WireGuard service and give it a default interface. To do this you must first navigate to **System > Tunables > Add**.

Enable the WireGuard service by adding `“wireguard_enable” -> “YES”` in rc.conf.

<img src="/images/WireguardFreeNAS-1.png">
<br><br>

Next, create another tunable and add “wireguard_interfaces” -> “wg0” in rc.conf.

<img src="/images/WireguardFreeNAS-2.png">
<br><br>

When finished, you should have the following two variables set and enabled.

<img src="/images/WireguardFreeNAS-3.png">
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

<img src="/images/WireguardFreeNAS-4.png">
<br><br>

We need to create the /root/wg0.conf which will contain the specific WireGuard configuration to apply at boot. This configuration is beyond the scope of this article, but there are [quickstart guides](https://www.wireguard.com/quickstart/) and [tutorials](https://www.linode.com/docs/networking/vpn/set-up-wireguard-vpn-on-ubuntu/) available online as well as the built-in `wg-quick` manpage.

Once you have a valid `/root/wg0.conf`, rebooting the system should bring up the WireGuard interface, and you’ll see a `wg0` device in the output of `ifconfig`.

<img src="/images/WireguardFreeNAS-5.png">
<br><br>

Congratulations, you have successfully linked your FreeNAS system to a secure WireGuard tunnel!

