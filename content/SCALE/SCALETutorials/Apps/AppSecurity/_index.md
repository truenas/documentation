---
title: "Securing Apps"
description: "Securing TrueNAS applications with VPNs and Zero Trust."
geekdocCollapseSection: true
weight: 12
aliases:
 - /scale/scaletutorials/apps/appsecurity/
 - /scale/scaleuireference/apps/appsecurity/
 - /scale/apps/appsecurity/
tags:
- appsecurity
author: 
- Fabian Mühlberger
draft: true
---

## Securing Apps with VPNs and Zero Trust

Truenas offers a variety of different [apps](https://www.truenas.com/apps/), ether directly provided or via the community. Exposing those to the world to make them accessible from outside of the network creates security risks, that need to solved by the user. 

### Scope

This tutorial provides a general overview of the different options to secure apps. This usually done by installing a additional application client like Cloudflared or Wireguard that proxies traffic form between the user and the application. 
The main focus lies on official apps provided by iXSystems. 
Additionally the user should read the documentation of the app to get a better understanding of the security implications.

Nextcloud will be as an example for this tutorial, the goal is to allow secure access from anywhere.

### Prerequisites

This guide assumes that the user has basic knowledge about TrueNAS Scale itself and is willing to read the [documentation](https://www.truenas.com/docs/scale/scaletutorials/) 

Follow th guide for installing [Nextcloud](https://www.truenas.com/docs/scale/scaletutorials/apps/communityapps/installnextcloudmedia/) on TrueNAS SCALE.


## Cloudflare

For this solution to work, a free Cloudflare account is needed, as well as registered domain. The Cloudflare documentation is very well written and covers everything you need to know, setting up a domain and [DNS](https://developers.cloudflare.com/dns/). 

### Creating a Cloudflare Tunnel

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelOverview.jpg" alt="Cloudflare Tunnel Overview" id="Cloudflare Tunnel Overview" >}}

The Cloudflare Tunnel is a client that runs on the TrueNAS SCALE system and proxies traffic from the Cloudflare network to the application. 

It is highly recommended to read the [tunnel documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) or to watch [this](https://www.youtube.com/watch?v=eojWaJQvqiw) from Lawrence Systems setting up Cloudflare tunnels for applications. This guide assumes that the applications run as a docker container but the same approach can be used to secure apps running on Truenas Scale in Kubernetes.

In the Cloudflare One dashboard, set a public hostname for accessing Nextcloud, this hostname, in this example it is:  **nextcloud.example.com**

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelHostname.png" alt="Cloudflare Tunnel Hostname" id="Cloudflare Tunnel Hostname" >}}

The service Type is set to **HTTPS** and the URL is the local TrueNAS IP + the Nextcloud container port, e.g. 192.168.1.1:9001

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelTLSSetting.png" alt="Cloudflare Tunnel TLS Setting" id="Cloudflare Tunnel TLS Setting" >}}

Additional application Settings > TLS > No TLS Verify = Enabled

### Nextcloud Configuration

Two environment variables must be set in the Nextcloud application.
[overwrite.cli.url](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwrite-cli-url) and [overwritehost](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwritehost)

In the Nextcloud App the environment variables are edited as shown below, where `value` is the address. 

{{< trueimage src="/images/SCALE/Apps/NextcloudEnviromentVariables.png" alt="Nextcloud Environment Variables" id="Nextcloud Environment Variables" >}}
