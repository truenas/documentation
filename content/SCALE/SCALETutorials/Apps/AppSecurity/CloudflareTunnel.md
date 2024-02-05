---
title: Cloudflare Tunnel
description: "Securing the Nextcloud application using a Cloudflare Tunnel."
weight: 5
tags:
- apps
- vpn
---

This Guide shows how to create a Cloudflare tunnel and configure the **Nextcloud** and **Cloudflared** applications in TrueNAS SCALE.
The goal is to allow secure access from anywhere.

{{< hint type=important >}}
Exposing applications to the internet can create security risks.
Always follow best practices to secure your applications.

See [additional security considerations](#additional-security-considerations) below.
{{< /hint >}}

Review the [Nextcloud documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html) to get a better understanding of the security implications before proceeding.

## Setting Up Cloudflare

[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) is a system that proxies traffic between the user and the application over the Cloudflare network.
It uses a **Cloudflared** client that is installed on the TrueNAS SCALE system.

This allows a secure and encrypted connection without the need of exposing ports or the private IP of the TrueNAS system to the internet.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelOverview.jpg" alt="Cloudflare Tunnel Overview" id="Cloudflare Tunnel Overview" caption="Illustration via [Cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) (CC BY)" >}}

Register or log in to a [Cloudflare account](https://dash.cloudflare.com/sign-up).
A free account is sufficient.

Follow Cloudflare documentation to [register a domain](https://developers.cloudflare.com/registrar/) and set up [DNS](https://developers.cloudflare.com/dns/).

### Creating a Cloudflare Tunnel

{{< hint type=note >}}
[This video](https://www.youtube.com/watch?v=eojWaJQvqiw) from Lawrence Systems provides a detailed overview of setting up Cloudflare tunnels for applications.
It assumes that the applications run as a docker container, but the same approach can be used to secure apps running on TrueNAS SCALE in Kubernetes.
{{< /hint >}}

In the Cloudflare One dashboard:

Go to **Networks** and select **Tunnels**.

Click **Create Tunnel**, choose type **Cloudflared** and click **Next**.

Choose a **Tunnel Name** and click **Save tunnel**.

Copy the tunnel token from the **Install and run a connector** screen.
This is needed to configure the **Cloudflared** app in TrueNAS SCALE.

{{< trueimage src="/images/SCALE/Apps/CloudflareCreateToken.png" alt="Cloudflare Create Token" id="Cloudflare Create Token" >}}

The operating system selection does not matter as the same token is used for all options.
For example, the command for a docker container is:

```
docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token 
eyJhIjoiNjVlZGZlM2IxMmY0ZjEwNjYzMDg4ZTVmNjc4ZDk2ZTAiLCJ0IjoiNWYxMjMyMWEtZjE
2YS00MWQwLWFhN2ItNjJiZmYxNmI4OGIwIiwicyI6IlpqQmpaRE13WXpBdFkyRmpPUzAwWVRCbU
xUZ3hZVGd0TlRWbE9UQmpaakEyTlRFMCJ9
```

Copy the string after `--token`, then click **Next**.

Add a public hostname for accessing Nextcloud, for example: *nextcloud.example.com*.

Set service **Type** to **HTTPS**.
Enter the local TrueNAS IP with the Nextcloud container port, for example *192.168.1.1:9001*.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelHostname.png" alt="Cloudflare Tunnel Hostname" id="Cloudflare Tunnel Hostname" >}}

Go to **Additional application Settings**, select **TLS** from the dropdown menu, and enable **No TLS Verify**.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelTLSSetting.png" alt="Cloudflare Tunnel TLS Setting" id="Cloudflare Tunnel TLS Setting" >}}

Click **Save tunnel**.

The new tunnel displays on the **Tunnels** screen.

### Installing Cloudflared

After creating the Cloudflare tunnel, go to **Apps** in the TrueNAS SCALE UI and click **Discover Apps**.
Search or browse to select the **Cloudflared** app from the community train and click **Install**.

Accept the default **Application Name** and **Version**.

Copy the Cloudflare tunnel token from the Cloudflare dashboard

Paste the token from Cloudflare, that you copied earlier, in the **Tunnel Token** field.

All other settings can be left as default.

{{< trueimage src="/images/SCALE/Apps/CloudflaredApplicationInstall.png" alt="Install Cloudflared" id="Install Cloudflared" >}}

Click **Save** and deploy the application.

### Nextcloud Configuration

Install the [Nextcloud]({{< relref "/scale/scaletutorials/apps/communityapps/installnextcloudmedia.md" >}}) community application.

The first application deployment may take a while and starts and stops multiple times.
This is normal behavior.

The [Nextcloud documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html) provides information on running Nextcloud behind a reverse proxy.
Depending on the reverse proxy and its configuration, these settings may vary.
For example, if you don't use a subdomain, but a path like *example.com/nextcloud*.

If you want to access your application via subdomain (shown in this guide) two environment variables must be set in the Nextcloud application: [overwrite.cli.url](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwrite-cli-url) and [overwritehost](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#overwritehost).

Enter the two environment variables in **Name** as *OVERWRITECLIURL* and *OVERWRITEHOST*.

Enter the address for the Cloudflare Tunnel, configured above in **Value**, for example *nextcloud.example.com*.

{{< trueimage src="/images/SCALE/Apps/NextcloudEnviromentVariables.png" alt="Nextcloud Environment Variables" id="Nextcloud Environment Variables" >}}

### Testing the Cloudflare Tunnel

With the Cloudflare connector and Nextcloud installed and configured, in your Cloudflare dashboard, go to **Networks** and select **Tunnels**.

The status of the tunnel should be **HEALTHY**.

{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelStateHealthy.png" alt="Cloudflare Tunnel Healthy" id="Cloudflare Tunnel Healthy" >}}

Nextcloud should now be reachable via the Cloudflare Tunnel address, *nextcloud.example.com* in this example, using a HTTPS connection.

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

{{< hint type=note >}}
Note: there are additional options for policy configuration, but these are beyond the scope of this tutorial.
{{< /hint >}}
