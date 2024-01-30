---
title: "Securing Apps"
description: "Securing TrueNAS applications with VPNs and Zero Trust."
geekdocCollapseSection: true
weight: 12
tags:
- apps
- vpn
author: 
- Fabian Mühlberger
draft: true
---

## Securing Apps with VPNs and Zero Trust

TrueNAS SCALE offers a variety of different [applications]({{< relref "/scale/scaletutorials/apps/_index.md" >}}), either directly provided or via the community. While applications can greatly expand TrueNAS functionality, making them accessible from outside of the local network can create security risks that need to solved. 

### Scope

This tutorial provides a general overview of different options to secure apps by installing an additional application client like Cloudflared or Wireguard to proxy traffic between the user and the application. 
This tutorial uses the **Nextcloud** app as an example.
 The goal is to allow secure access from anywhere.
 Review [Nextcloud documentation] to get a better understanding of the security implications before proceeding.




## Setting Up Cloudflare

Register or log in to a [Cloudflare account](https://dash.cloudflare.com/sign-up).
 A free account is sufficient.

Follow Cloudflare documentation to [register a domain](https://developers.cloudflare.com/registrar/) and set up [DNS](https://developers.cloudflare.com/dns/). 

### Creating a Cloudflare Tunnel

[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) is a client that runs on the TrueNAS SCALE system and proxies traffic from the Cloudflare network to the application.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelOverview.jpg" alt="Cloudflare Tunnel Overview" id="Cloudflare Tunnel Overview" >}}


This guide assumes that the applications run as a docker container but the same approach can be used to secure apps running on Truenas Scale in Kubernetes.
 [This video](https://www.youtube.com/watch?v=eojWaJQvqiw) from Lawrence Systems provides a detailed overview of setting up Cloudflare tunnels for applications. 

In the Cloudflare One dashboard, set a public hostname for accessing Nextcloud, for example:  *nextcloud.example.com*.

Set service **Type** to **HTTPS**.
Enter the local TrueNAS IP with the Nextcloud container port, for example *192.168.1.1:9001*.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelHostname.png" alt="Cloudflare Tunnel Hostname" id="Cloudflare Tunnel Hostname" >}}


Go to **Additional application Settings**, select **TLS** from the dropdown menu, and enable **No TLS Verify**.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelTLSSetting.png" alt="Cloudflare Tunnel TLS Setting" id="Cloudflare Tunnel TLS Setting" >}}


### Nextcloud Configuration

Two environment variables must be set in the Nextcloud application.
[overwrite.cli.url](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwrite-cli-url) and [overwritehost](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwritehost)

Enter the two environment variables in **Name** as *OVERWRITECLIURL* and *OVERWRITEHOST*.

Enter the address for the Cloudflare Tunnel configured above in **Value**, for example *nextcloud.example.com*.


{{< trueimage src="/images/SCALE/Apps/NextcloudEnviromentVariables.png" alt="Nextcloud Environment Variables" id="Nextcloud Environment Variables" >}}
