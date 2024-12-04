---
title: "Accessing TrueNAS Remotely"
description: "Basic information on the variety of ways TrueNAS can be accessed remotely"
weight: 10
tags:
- gettingstarted
- vpn
- remote
- apps
---

## Overview

TrueNAS is fundamentally a storage appliance, and as such it is recommended to always be run not directly exposed to the internet.

However, there are many instances in which a user will need to access their storage data or services remotely. In most corporate
environments this is controlled by having access to a corporate VPN service where proper auditing and security best practices
can be enforced. For the small business or home lab where a corporate VPN isn't available, there are many easier to deploy and
manage services that can be used to give yourself or your clients access to your storage services and applications. This guide
will introduce you to several of these and provide a basic walk-through of how to enable remote access to your TrueNAS.

In TrueNAS 24.10 and later, there are several VPN technologies to choose from, each with their own strengths and weaknesses that
may make them suitable for your particular environment. We will focus on three of them, all of which are available via the 
TrueNAS App catalog for rapid deployment. 

- Tailscale

- ZeroTier

- Wireguard

## TailScale

Website: [https://www.tailscale.com/](Tailscale)
Pricing: Free / Paid Tier
Difficulty: Easy to Moderate
Usability: Tailscale focuses on simplicity and ease of setup. It uses a centralized control plane and integrates with identity providers like Google or Microsoft for authentication. It’s ideal for users with limited networking knowledge.

### Installing Tailscale on TrueNAS:

Before you install Tailscale on TrueNAS, you will need to create an [https://login.tailscale.com/admin/settings/keys](Auth Key) via your Tailscale account. [https://tailscale.com/kb/1085/auth-keys](More Information)

Once your Auth Key has been created, you can navigate to the TrueNAS Apps Catalog and install Tailscale:

Apps -> Discover Apps -> (Search for Tailscale) -> Install

On the Installation page, scroll down to the AuthKey field, paste in the key you created previously. Leave all other options at their defaults, then scroll down and click `Install`.

Once the installation completes and you see the App status as "Running" you can navigate back to your [https://login.tailscale.com/admin/machines](Tailscale Machines) list and you will see your TrueNAS system listed.

Using the `Addresses` listed for TrueNAS, you can now reach your TrueNAS host, including Shares, Apps and other services from your other [https://tailscale.com/download](Tailscale clients) anywhere in the world. 



## ZeroTier

Website: [https://www.zerotier.com/](ZeroTier)
Pricing: Free / Paid Tier
Difficulty: Moderate to Hard
Usability: While still being user-friendly, ZeroTier offers more advanced configuration options, such as managing multiple networks, IP ranges, and multicast settings. This makes it better suited for users with technical expertise.

### Installing ZeroTier on TrueNAS:

Before you install ZeroTier on TrueNAS, you will need to create an [https://my.zerotier.com/network](Network) via your ZeroTier account. [https://docs.zerotier.com/start](More Information)

Once your Network has been created, copy the `Network ID` and then you can navigate to the TrueNAS Apps Catalog to install ZeroTier:

Apps -> Discover Apps -> (Search for ZeroTier) -> Install

On the Installation page, scroll down to the `ZeroTier Configuration -> Networks` field. Click to add a network and paste in the network key you copied previously. Leave all other options at their defaults, then scroll down and click `Install`.

Once the installation completes and you see the App status as "Running" you can navigate back to your [https://my.zerotier.com/network](ZeroTier Networks) list, click your network and you will see your TrueNAS system waiting for approval.

Click to authorize TrueNAS and you will have successfully finished joined your TruenAS system to a ZeroTier network.

Using the `Addresses` listed for TrueNAS, you can now reach your TrueNAS host, including Shares, Apps and other services from your other [https://www.zerotier.com/download/](ZeroTier clients) anywhere in the world. 



## Wireguard

Website: [https://www.wireguard.com/](WireGuard)
Pricing: Free
Difficulity: Hard
Usability: Wireguard requires manual setup and configuration. You need to manage keys, IPs, and routing yourself.

### Installing Wireguard on TrueNAS:

Wireguard can be setup and configured by installing the `WG Easy` Application in the TrueNAS app catalog. [https://www.truenas.com/docs/truenasapps/stableapps/installwgeasyapp/](Click here) for more detailed information on how to setup and configure.
