---
title: "How to Enable WireGuard on FreeNAS™ 11.3"
date: 2020-01-21T08:36:08-05:00
draft: true
description: "A how-to process for enabling WireGuard in FreeNAS™ 11.3"
categories: ["FreeNAS™"]
resources:
- name: featuredImage
  src: "wireguard-logo.png"
  params:
    description: "Enable Wiregaurd on FreeNAS™ 11.3"
---


[WireGuard](https://www.wireguard.com/ "WireGuard homepage") is quickly
gaining popularity in the VPN marketplace due to its speed, simplicity,
and modern cryptography standards. Starting with {{< subfreenas >}}
version 11.3-RC1, it is possible to connect your NAS directly to a
WireGuard network with a few easy steps. We get started on this by
creating some custom tunables to enable the WireGuard service and give
it a default interface. To do this you must first navigate to
System &rightarrow; Tunables &rightarrow; Add.

Enable the WireGuard service by adding
`wiregaurd_enable` &rightarrow; `YES` in `rc.conf`.
{{<image src="wireguard-enable.png" alt="Enabling WireGuard in rc.conf">}}
