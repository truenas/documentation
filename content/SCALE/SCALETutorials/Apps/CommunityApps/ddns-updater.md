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

When establishing a new provider, create the user account before proceeding. Otherwise, use the existing provider details.

If you want to grant access to a specific user (and group) other than using the defaults, add the new non-root administrative user and take note of the UID and GID for this user.

## Configuring the Dynamic DNS Service Application

Go to **Apps**, click on **Available Applications**, and locate the **ddns-updater** application widget.

{{< trueimage src="/images/SCALE/22.12/ddnsUpdaterAppWidget.png" alt="ddns-updater Application Widget" id="1: ddns-updater Application Widget" >}}

Click **Install** to open the **ddns-updater** configuration wizard.

Select the timezone that applies to your server location from the **Timezone** dropdown list.

Click **Add** to the right of **DNS Provider Configuration** to display provider setting options. 
Select the DDNS provider from the **Provider** dropdown list. 
Each provider displays the settings required to establish a connection with and authenticate to that provider. 

{{< trueimage src="/images/SCALE/22.12/ddns-updaterDNSProviderConfigAdd.png" alt="ddns-updater Add DNS Provider Configuration" id="2: Add ddns-updater Provider Configuration" >}}

{{< trueimage src="/images/SCALE/22.12/ddns-updaterConfigPeriodSettings.png" alt="ddns-updater Provider Settings" id="3: Add ddns-updater Provider Settings" >}}

To use a notification service, enter the service in **Shoutrrr Addresses**. 
Shoutrrr addresses are a way to make sending notifications easy by standardizing them.
Enter the [shoutrrr gopher notification service(s) addresses](https://containrrr.dev/shoutrrr/0.7/services/overview/) and separate each entry with a comma.

Enter either the IPv4 or IPv6 HTTP public provider and then the public IP fetcher type to obtain the public IP address, or select **All providers** in each field.

{{< trueimage src="/images/SCALE/22.12/ddns-updaterConfigIPSettings.png" alt="ddns-updater IP Settings" id="4: Add ddns-updater IP Settings" >}}

Select **Host Network** to bind to the host network, but we recommend leaving this disabled.

Select the **DDNS Updater Data Storage** option from the **Type** dropdown list. Options are the iXVolume or host path.

Click **Save**.

{{< taglist tag="scaleddns" limit="10" title="Related Dynamic DDNS" >}}
