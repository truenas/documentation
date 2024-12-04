---
title: "Accessing TrueNAS Remotely"
description: "Provides basic information on the variety of ways to access TrueNAS remotely"
weight: 10
tags:
- gettingstarted
- vpn
- remote
- apps
---

## Overview

TrueNAS is fundamentally a storage appliance, so we recommend that you always run it not directly exposed to the internet.

However, there are many instances where a user needs to access their storage data or services remotely. 
In most corporate environments, a corporate VPN service controls internal and external access, performs proper auditing, and applies and enforces security best practices. 
For the small business or home lab, where a corporate VPN is not an option, you can choose from many easy-to-deploy and manage services that give you or your clients access to your storage services and applications. 
This guide introduces several access options and provides a basic walk-through enabling remote access to your TrueNAS.

In TrueNAS 24.10 and later, there are several VPN technologies to choose from, each with strengths and weaknesses that make them suitable for particular environments. 
This guide focuses on three options available through the TrueNAS App catalog for rapid deployment. 

- Tailscale

- ZeroTier

- Wireguard

## Tailscale

Website: [Tailscale](https://www.tailscale.com/)
Pricing: Free / Paid Tier
Difficulty: Easy to Moderate
Usability: Tailscale focuses on simplicity and ease of setup. It uses a centralized control plane and integrates with identity providers like Google or Microsoft for authentication. It is ideal for users with limited networking knowledge.

### Installing Tailscale in TrueNAS:

Before you install Tailscale on TrueNAS, you will need to create an [Auth Key](https://login.tailscale.com/admin/settings/keys) via your Tailscale account. [More Information](https://tailscale.com/kb/1085/auth-keys)

Once your Auth Key has been created, you can navigate to the TrueNAS Apps Catalog and install Tailscale:

Apps -> Discover Apps -> (Search for Tailscale) -> Install

On the Installation page, scroll down to the `AuthKey` field, paste in the key you created previously. Leave all other options at their defaults, then scroll down and click `Install`.

Once the installation completes and you see the App status as "Running" you can navigate back to your [Tailscale Machines](https://login.tailscale.com/admin/machines) list and you will see your TrueNAS system listed.

Using the `Addresses` listed for TrueNAS, you can now reach your TrueNAS host, including Shares, Apps and other services from your other [Tailscale clients](https://tailscale.com/download) anywhere in the world. 



## ZeroTier

Website: [ZeroTier](https://www.zerotier.com/)
Pricing: Free / Paid Tier
Difficulty: Moderate to Hard
Usability: While still being user-friendly, ZeroTier offers more advanced configuration options, such as managing multiple networks, IP ranges, and multicast settings. This makes it better suited for users with technical expertise.

### Installing ZeroTier on TrueNAS:

Before you install ZeroTier on TrueNAS, you will need to create an [Network](https://my.zerotier.com/network) via your ZeroTier account. [More Information](https://docs.zerotier.com/start)

Once your Network has been created, copy the `Network ID` and then you can navigate to the TrueNAS Apps Catalog to install ZeroTier:

Apps -> Discover Apps -> (Search for ZeroTier) -> Install

On the Installation page, scroll down to the `ZeroTier Configuration -> Networks` field. Click to add a network and paste in the network key you copied previously. Leave all other options at their defaults, then scroll down and click `Install`.

Once the installation completes and you see the App status as "Running" you can navigate back to your [ZeroTier Networks](https://my.zerotier.com/networks) list, click your network and you will see your TrueNAS system waiting for approval.

Click to authorize TrueNAS and you will have successfully finished joined your TrueNAS system to a ZeroTier network.

Using the `Addresses` listed for TrueNAS, you can now reach your TrueNAS host, including Shares, Apps and other services from your other [ZeroTier clients](https://www.zerotier.com/download/) anywhere in the world. 



## Wireguard

Website: [WireGuard](https://www.wireguard.com)
Pricing: Free
Difficulty: Hard
Usability: Wireguard requires manual setup and configuration. You need to manage keys, IPs, and routing yourself.

### Installing Wireguard on TrueNAS:

Wireguard can be setup and configured by installing the `WG Easy` Application in the TrueNAS app catalog. [Click Here](https://www.truenas.com/docs/truenasapps/stableapps/installwgeasyapp/) for more detailed information on how to setup and configure.
