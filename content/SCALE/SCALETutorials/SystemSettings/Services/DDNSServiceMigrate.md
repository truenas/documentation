---
title: "Migrating from Dynamic DNS Service to DDNS Updater App"
description: "This article provides instructions for users migrating from the SCALE Dynamic DNS service to the new ddns-updater application." 
weight: 7
aliases:
tags:
- scaleddns
---


{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}

This article provides instructions on how to move from using the deprecated dynamic DNS service to the new **ddns-updater** application. 

The ddns-updater application is a lightweight universal dynanmic DNS (DDNS) updater with web UI. 
When installed, a container launches with root privileges in order to apply the correct permissions to the ddns-updater directories. 
Afterwards, the containter runs as a non-root user.

## Before You Begin
Before you configure the new ddns-updater application:

* Disable the Dynamic DNS service.
  Go to **System Settings > Services**, disable the service, and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your Dynamic DNS service settings and note all provider, domain, IP address, port number, URL, and credential (username and password) settings.

If establishing a new provider, create the user account before proceeding. Otherwise, use the existing provider details.

If you want to grant access to a specific user (and group) other than using the defaults, add the new non-root administrative user and take note of the UID and GID for this user.

## Migrating from TrueNAS Dynamic DNS Service

After disabling the dynamamic DNS service, install the ddns-updater application. Go to **Apps**, click on **Available Applications**, and locate the **ddns-updater** application widget.

{{< trueimage src="/images/SCALE/22.12/ddnsUpdaterAppWidget.png" alt="ddns-updater Application Widget" id="1: ddns-updater Application Widget" >}}

Click **Install** to open the **ddns-updater** configuration wizard.

Select the timezone that applies to your server location from the **Timezone** dropdown list.

Click **Add** to the right of **DNS Provider Configuration** to display provider setting options. 
Select the DDNS provider from the **Provider** dropdown list. 
Each provider displays the settings required to establish a connection with and authenticate to that provider. 

{{< trueimage src="/images/SCALE/22.12/ddns-updaterDNSProviderConfigAdd.png" alt="ddns-updater Add DNS Provider Configuration" id="2: Add ddns-updater Provider Configuration" >}}

{{< hint type=info >}}
The SCALE service dynamic DNS list includes providers not on the ddns-Updater application list. 
If the service configuration uses a service not in the application, create a new account with a provider on the list in the ddns-updater application.
{{< /hint >}}

The update period default for the SCALE service is different from the application. Accept the default settings.

{{< trueimage src="/images/SCALE/22.12/ddns-updaterConfigPeriodSettings.png" alt="ddns-updater Provider Settings" id="3: Add ddns-updater Provider Settings" >}}

To use a notification service, enter the service in **Shoutrrr Addresses**. 
Shoutrrr addresses are a way to make sending notifications easy by standardizing them. 
Enter the [shoutrrr gopher notification service(s) addresses](https://containrrr.dev/shoutrrr/0.7/services/overview/) and separate each entry with a comma.

Enter either the IPv4 or IPv6 HTTP public provider and then the public IP fetcher type you want to use to obtain the public IP address, or select **All providers** in each field.

{{< trueimage src="/images/SCALE/22.12/ddns-updaterConfigIPSettings.png" alt="ddns-updater IP Settings" id="4: Add ddns-updater IP Settings" >}}

Select **Host Network** to bind to the host network, but we recommend leaving this disabled.

Select the **DDNS Updater Data Storage** option from the **Type** dropdown list. Options are the iXVolume or host path.

Click **Save**.

{{< taglist tag="scaleddns" limit="10" title="Related Dynamic DDNS" >}}


