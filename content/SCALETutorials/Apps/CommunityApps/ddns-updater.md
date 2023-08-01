---
title: "Ddns-updater"
description: "Provides basic configuration instructions for the ddns-updater application."
weight:
aliases:
 - /scale/scaleuireference/systemsettings/services/ddnsservicescreenscale/
 - /scale/scaletutorials/systemsettings/services/ddnsservicescale/
 - /scale/scaletutorials/systemsettings/services/ddnsservicemigrate/
---

The ddns-updater application is a lightweight universal dynamic DNS (DDNS) updater with web UI.
When installed, a container launches with root privileges in order to apply the correct permissions to the ddns-updater directories. 
Afterwards, the containter runs as a non-root user.

## First Steps

Make sure to have account credentials ready with the chosen DNS provider before installing the application in TrueNAS.

{{< expand "Supported Providers (Click to expand)" "v" >}}

<table class="truetable" style="max-width:25%;">
  <tr><th>Provider</th></tr>
  <tr><td><a href="https://cn.aliyun.com/" target="_blank">Aliyun</a></tr></td>
  <tr><td><a href="https://all-inkl.com/" target="_blank">All-Inkl</a></tr></td>
  <tr><td><a href="https://www.cloudflare.com/dns/" target="_blank">Cloudflare</a></tr></td>
  <tr><td><a href="https://www.domaindiscount24.com/" target="_blank">DD24</a></tr></td>
  <tr><td><a href="https://www.ddnss.de/" target="_blank">DDNSS</a></tr></td>
  <tr><td><a href="https://www.digitalocean.com/" target="_blank">Digital Ocean</a></tr></td>
  <tr><td><a href="https://www.dnsomatic.com/" target="_blank">DNS O Matic</a></tr></td>
  <tr><td><a href="https://www.dnspod.com/" target="_blank">DNS Pod</a></tr></td>
  <tr><td><a href="https://www.dondominio.com/" target="_blank">Don Dominio</a></tr></td>
  <tr><td><a href="https://www.dreamhost.com/" target="_blank">Dreamhost</a></tr></td>
  <tr><td><a href="https://www.duckdns.org/" target="_blank">Duck DNS</a></tr></td>
  <tr><td><a href="https://account.dyn.com/" target="_blank">DynDN</a></tr></td>
  <tr><td><a href="https://www.dynu.com/" target="_blank">Dynu</a></tr></td>
  <tr><td><a href="https://dynv6.com/" target="_blank">DynV6</a></tr></td>
  <tr><td><a href="https://freedns.afraid.org/" target="_blank">FreeDNS</a></tr></td>
  <tr><td><a href="https://www.gandi.net/" target="_blank">Gandi</a></tr></td>
  <tr><td><a href="https://cloud.google.com/gcp" target="_blank">GCP (Google Cloud Services Platform)</a></tr></td>
  <tr><td><a href="https://www.godaddy.com/" target="_blank">GoDaddy</a></tr></td>
  <tr><td><a href="https://developers.google.com/speed/public-dns" target="_blank">Google</a></tr></td>
  <tr><td><a href="https://www.he.net/" target="_blank">He.Net</a></tr></td>
  <tr><td><a href="https://www.infomaniak.com/" target="_blank">Infomaniak</a></tr></td>
  <tr><td><a href="https://www.inwx.com/" target="_blank">INWX</a></tr></td>
  <tr><td><a href="https://www.linode.com/" target="_blank">Linode</a></tr></td>
  <tr><td><a href="http://www.luadns.com/" target="_blank">LuaDNS</a></tr></td>
  <tr><td><a href="https://www.namecheap.com/" target="_blank">Namecheap</a></tr></td>
  <tr><td><a href="https://njal.la/" target="_blank">Njalla</a></tr></td>
  <tr><td><a href="https://www.noip.com/" target="_blank">NoIP</a></tr></td>
  <tr><td><a href="https://www.opendns.com/" target="_blank">OpenDNS</a></tr></td>
  <tr><td><a href="https://www.ovhcloud.com/" target="_blank">OVH</a></tr></td>
  <tr><td><a href="https://porkbun.com/" target="_blank">Porkbun</a></tr></td>
  <tr><td><a href="https://www.selfhost.de/" target="_blank">Selfhost.De</a></tr></td>
  <tr><td><a href="https://www.servercow.de/" target="_blank">Servercow</a></tr></td>
  <tr><td><a href="https://www.spdyn.de/" target="_blank">Spdyn.De</a></tr></td>
  <tr><td><a href="https://www.strato-hosting.co.uk/" target="_blank">Strato</a></tr></td>
  <tr><td><a href="https://www.variomedia.de/" target="_blank">Variomedia</a></tr></td>
</table>

{{< /expand >}}

To grant access to specific user (and group) accounts other than using the default **apps** user (UID: **568**), add a non-root TrueNAS administrative user from **Credentials > Local Users** and record the UID and GID for this user.
Using a non-default user/group account forces permissions changes on any defined data storage for this application.

Have the **TRUENAS** catalog loaded and **community** train enabled.
To view and adjust the current application catalogs, go to **Apps** and click **Discover Apps > Manage Catalogs**.

## Configuring the Dynamic DNS Service Application

Go to **Apps**, click **Discover Apps**, and locate the **ddns-updater** application widget by typing the first few characters of the application name in the search bar.

{{< trueimage src="/images/SCALE/23.10/FindDdnsUpdaterApp.png" alt="Finding the ddns-updater Application" id="1: Finding the ddns-updater Application" >}}

Click the application card to see additional details about the application and options to install it.

{{< trueimage src="/images/SCALE/23.10/DdnsAppDetails.png" alt="Ddns-Updater Application Details" id="2: Ddns-Updater Application Details" >}}

Click **Install** to open the **ddns-updater** configuration screen.
Application configuration options are presented in several sections.
Find specific fields or skip to a particular section with the navigation box in the upper-right corner.

{{< trueimage src="/images/SCALE/23.10/Installddns-updaterScreen.png" alt="Install ddns-updater Screen" id="3: Install ddns-updater Screen" >}}

### Application Name

Leave these fields at their default settings.
Changing the application version is only recommended when a specific version is required.

### DDNS Updater Configuration

Select the timezone that applies to the TrueNAS location from the **Timezone** dropdown list.

Click **Add** to the right of **DNS Provider Configuration** to display provider setting options. 
Select the DDNS provider from the **Provider** dropdown list. 
Each provider displays the settings required to establish a connection with and authenticate to that specific provider. 

{{< trueimage src="/images/SCALE/23.10/ddns-updaterDNSProviderConfigAdd.png" alt="ddns-updater Add DNS Provider Configuration" id="4: Add ddns-updater Provider Configuration" >}}

Define how often to check IP addresses with **Update Period** and **Update Cooldown Period**.
The application also creates <file>.zip</file> backups for the <file>data/config.json</file> and <file>data/updates.json</file> files according to a defined schedule in **Backup Period**.
Define the HTTP request and DNS query time out values with **HTTP Timeout** and **PUblic IP DNS Timeout**.

To configure notifications with the [Shoutrrr](https://containrrr.dev/shoutrrr/0.7/) service, click **Add** and enter the service **Address** under **Shoutrrr Addresses**.

Use the **Public IP** options to define which providers to use for the various DNS, IPv4, and IPv6 public addresses.
The default **All providers** allows for quick app usability but these options can be tuned as needed.

### User and Group Configuration

By default, the TrueNAS **apps** (UID/GID **568**) user and group account manages this application.

{{< trueimage src="/images/SCALE/23.10/DdnsUpdaterUserGroupConfig.png" alt="ddns-updater User and Group Configuration" id="5: ddns-updater User and Group Configuration" >}}

Entering an alternate UID or GID reconfigures the application to run as that account.
When using a custom account for this application, make sure the account is a member of the **Builtin_administrators** group and that the storage location defined in **Storage Configuration** has permissions tuned for this account after the application is installed.

### Network Configuration

By default, this application uses TrueNAS port **30007** to access the application web interface.

{{< trueimage src="/images/SCALE/23.10/DdnsUpdaterNetworkConfig.png" alt="ddns-updater Network Configuration" id="6: ddns-updater Network Configuration" >}}

Adjust the **Web Port** integer when a different network port is required.
Select **Host Network** to bind to the host network, but we recommend leaving this disabled.

### Storage Configuration

{{< trueimage src="/images/SCALE/23.10/DdnsUpdaterStorageConfig.png" alt="ddns-updater Storage Configuration" id="7: ddns-updater Storage Configuration" >}}

Select the **DDNS Updater Data Storage** option from the **Type** dropdown list.
Options are the iXVolume or a predefined host path.

### Resources Configuration

By default, this application is limited to use no more than **4** CPU cores and **8** Gibibytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/23.10/DdnsUpdaterResourceConfig.png" alt="ddns-updater Resource Configuration" id="8: ddns-updater Resource Configuration" >}}

Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

Review the configuration settings then click **Install** for TrueNAS to download and initialize the application.
