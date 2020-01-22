+++
fragment = "content"
title = "How To Enable WireGuard on FreeNAS™ 11.3"
weight = 10
disabled = false
background = "light"
+++

[WireGuard](https://www.wireguard.com/ "WireGuard homepage") is quickly
gaining popularity in the VPN marketplace due to its speed, simplicity,
and modern cryptography standards. Starting with {{< subfreenas >}}
version 11.3-RC1, it is possible to connect your NAS directly to a
WireGuard network with a few easy steps. We get started on this by
creating some custom tunables to enable the WireGuard service and give
it a default interface. To do this you must first navigate to
System &rightarrow; Tunables &rightarrow; Add.

Enable the WireGuard service by adding
`wireguard_enable` &rightarrow; `YES` in `rc.conf`.

![alt text](/images/wireguard-enable.png "Enabling WireGuard")
