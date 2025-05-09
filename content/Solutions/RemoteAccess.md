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

**Website:** [Tailscale](https://www.tailscale.com/)

**Pricing:** Free / Paid Tier

**Difficulty:** Easy to Moderate

**Usability:** Tailscale focuses on simplicity and ease of setup. It uses a centralized control plane and integrates with identity providers like Google or Microsoft for authentication. It is ideal for users with limited networking knowledge.

### Installing Tailscale in TrueNAS

Before installing Tailscale in TrueNAS, create an [Auth Key](https://login.tailscale.com/admin/settings/keys) through your Tailscale account. [More Information](https://tailscale.com/kb/1085/auth-keys)

After creating your Auth Key you can navigate to the TrueNAS Apps Catalog and install Tailscale:

**Apps -> Discover Apps ->** (Search for Tailscale) **-> Install**

On the Installation page, scroll down to the **AuthKey** field, and paste the previously created key. Accept all other default settings, and then scroll down and click **Install**.

After the installation completes and you see the app status as **Running** you can navigate back to your [Tailscale Machines](https://login.tailscale.com/admin/machines) list to see your TrueNAS system listed.

Using the **Addresses**  listed for TrueNAS, you can now reach your TrueNAS host, including shares, apps, and other services from your other [Tailscale clients](https://tailscale.com/download) anywhere in the world.

## ZeroTier

**Website:** [ZeroTier](https://www.zerotier.com/)

**Pricing:** Free / Paid Tier

**Difficulty:** Moderate to Hard

**Usability:** User-friendly ZeroTier offers more advanced configuration options, such as managing multiple networks, IP ranges, and multicast settings. This makes it better suited for users with technical expertise.

### Installing ZeroTier in TrueNAS

Before installing ZeroTier on TrueNAS, create a [Network](https://my.zerotier.com/network) through your ZeroTier account. [More Information](https://docs.zerotier.com/start)

After creating the Network, copy the **Network ID** and then navigate to the TrueNAS Apps Catalog to install ZeroTier:

**Apps -> Discover Apps ->** (Search for ZeroTier) **-> Install**

On the installation screen, scroll down to the **ZeroTier Configuration -> Networks** field.
Click to add a network and paste in the network key you copied previously. Accept all other default settings, and then scroll down to click **Install**.

After the installation completes and the App status changes to "Running", you can navigate back to your [ZeroTier Networks](https://my.zerotier.com/networks) list, and click on your network to see your TrueNAS system waiting for approval.

Click to authorize TrueNAS and you have successfully finished and joined your TrueNAS system to a ZeroTier network.

Using the **Addresses** listed for TrueNAS, you can reach your TrueNAS host, including shares, apps, and other services from your other [ZeroTier clients](https://www.zerotier.com/download/) anywhere in the world.

## Wireguard

**Website:** [WireGuard](https://www.wireguard.com)

**Pricing:** Free

**Difficulty:** Hard

**Usability:** Wireguard requires manual setup and configuration. You need to manage keys, IPs, and routing yourself.

### Installing Wireguard in TrueNAS

Wireguard can be setup and configured by installing the **WG Easy** application in the TrueNAS app catalog. [Click here](https://apps.truenas.com/catalog/wg-easy/) for more detailed information on setting up and configuring the app.
