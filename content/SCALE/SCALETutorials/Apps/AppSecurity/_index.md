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
---

## Securing Apps with VPNs and Zero Trust

TrueNAS SCALE offers a variety of different [applications]({{< relref "/scale/scaletutorials/apps/_index.md" >}}), either directly provided or via the community.
While applications can greatly expand TrueNAS functionality, making them accessible from outside the local network can create security risks that need to solved.

Regardless of the VPN or reverse proxy you use, follow common approaches to secure your applications.

1. Update the applications reguarly to fix security issues.
2. Use strong passwords and 2FA.
3. Don't reuse passwords, especially not for admin accounts.
4. Don't use your admin account for daily tasks.

See [additional security considerations](#additional-security-considerations) below.

### Scope

This tutorial provides a general overview of different options to secure apps by installing an additional application client like Cloudflared or Wireguard to proxy traffic between the user and the application.
This tutorial uses the **Nextcloud** app as an example.

The goal is to allow secure access from anywhere.
Review [Nextcloud documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html) to get a better understanding of the security implications before proceeding.

## Setting Up Cloudflare

Register or log in to a [Cloudflare account](https://dash.cloudflare.com/sign-up).
A free account is sufficient.

Follow Cloudflare documentation to [register a domain](https://developers.cloudflare.com/registrar/) and set up [DNS](https://developers.cloudflare.com/dns/).


### Creating a Cloudflare Tunnel

[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) is a client that runs on the TrueNAS SCALE system and proxies traffic from the Cloudflare network to the application.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelOverview.jpg" alt="Cloudflare Tunnel Overview" id="Cloudflare Tunnel Overview" caption="Illustration via [Cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) (CC BY)" >}}

This guide assumes that the applications run as a docker container, but the same approach can be used to secure apps running on TrueNAS SCALE in Kubernetes.
[This video](https://www.youtube.com/watch?v=eojWaJQvqiw) from Lawrence Systems provides a detailed overview of setting up Cloudflare tunnels for applications.

In the Cloudflare One dashboard, set a public hostname for accessing Nextcloud, for example: *nextcloud.example.com*.

Set service **Type** to **HTTPS**.
Enter the local TrueNAS IP with the Nextcloud container port, for example *192.168.1.1:9001*.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelHostname.png" alt="Cloudflare Tunnel Hostname" id="Cloudflare Tunnel Hostname" >}}

Go to **Additional application Settings**, select **TLS** from the dropdown menu, and enable **No TLS Verify**.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelTLSSetting.png" alt="Cloudflare Tunnel TLS Setting" id="Cloudflare Tunnel TLS Setting" >}}

### Nextcloud Configuration

Install the [Nextcloud]({{< relref "/scale/scaletutorials/apps/communityapps/installnextcloudmedia.md" >}}) community application.

The first application deployment may take a while and starts and stops multiple times.
This is normal behavior.

The [Nextcloud documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html) provides information on running Nextcloud behind a reverse proxy.
Depending on the reverse proxy and its configuration, these settings may vary.
For example if you don't use a subdomain, but a path like *example.com/nextcloud*.

If you want to access your application via subdomain (shown in this guide) two environment variables must be set in the Nextcloud application: [overwrite.cli.url](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwrite-cli-url) and [overwritehost](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwritehost).

Enter the two environment variables in **Name** as *OVERWRITECLIURL* and *OVERWRITEHOST*.

Enter the address for the Cloudflare Tunnel configured above in **Value**, for example *nextcloud.example.com*.

{{< trueimage src="/images/SCALE/Apps/NextcloudEnviromentVariables.png" alt="Nextcloud Environment Variables" id="Nextcloud Environment Variables" >}}

### Testing the Cloudflare Tunnel

With the Cloudflare connector and Nextcloud installed and configured, in your Cloudflare dashboard, go to **Networks** and select **Tunnels**.

The status of the tunnel should be **HEALTHY**.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelStateHealthy.png" alt="Cloudflare Tunnel Healthy" id="Cloudflare Tunnel Healthy" >}}

Nextcloud should now be reachable via nextcloud.example.com, using an https connection.

## Additional Security Considerations

Use strong user passwords and configure [two-factor authentication](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/two_factor-auth.html) for additional security.

Cloudflare offers [access policies](https://developers.cloudflare.com/cloudflare-one/policies/access/) to restrict access to the application to specific users, emails or authentication methods.

Go to **Access**, click **Add an Application**, and select **Self-Hosted**.

Add your Nextcloud application and the domain you configured in the Cloudflare tunnel.

{{< trueimage src="/images/SCALE/Apps/CloudflareAddApplication.png" alt="Cloudflare Add Application" id="Cloudflare Add Application" >}}

Click **Next**.

Create a new policy by entering a **Policy Name**. Groups can be assigned to this policy or additional rules can be added.

{{< trueimage src="/images/SCALE/Apps/CloudflareAddPolicy.png" alt="Cloudflare Add Policy" id="Cloudflare Add Policy" >}}

{{< trueimage src="/images/SCALE/Apps/CloudflareCreateAdditionalRules.png" alt="Cloudflare Additional Rules" id="Cloudflare Additional Rules" >}}

Click **Next** and **Save**.

Note: there are additional options for policy configuration, but these are beyond the scope of this tutorial.
