---
title: "Accessing TrueCommand Cloud"
description: "How to use TrueCommand Cloud to manage TrueNAS 12.0 (or newer) systems."
tags: ["TrueCommand Cloud", "TrueCommand"]
weight: 10
---

TrueCommand Cloud is a SaaS offering of TrueCommand with a WireGuard VPN capability to connect TrueNAS systems through firewalls.
TrueCommand Cloud is compatible with TrueNAS version v12.0 and newer.

## Register an iXsystems Account

Open https://portal.ixsystems.com and click **Register**. 

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

Fill out the form using the email address you want to use. 

![PortalAccountCreate](/images/TrueCommand/Cloud/PortalAccountCreate.png "Portal Account Create")

This email account must be verified.
Check the address spam folder if the email does not arrive within a few minutes.
When the email is in the spam folder, mark it as *not spam* and add the account to the address book so future emails arrive at the inbox.
After receiving the verification email, open the link provided to verify the account.

## Create a New Subscription

Log in to the verified account and click **New Subscription**.  

![PortalDashboard](/images/TrueCommand/Cloud/PortalDashboard.png "Account Services: Dashboard")

![PortalCloudSubscription](/images/TrueCommand/Cloud/PortalCloudSubscription.png "Creating a Cloud Subscription")

Select the TrueCommand Cloud option and choose the subscription plan that best fits your current needs.
This can be changed later.

![PortalCloudSubscriptionOptions](/images/TrueCommand/Cloud/PortalCloudSubscriptionOptions.png "Account Services: Cloud Subscription Options")

Click *Continue* to proceed.

![PortalCloudSubscriptionSelected](/images/TrueCommand/Cloud/PortalCloudSubscriptionSelected.png "Account Services: Cloud Subscription Selected")

Next, fill the payment form. 

![CloudSubscriptionPayment](/images/TrueCommand/Cloud/CloudSubscriptionPayment.png "Cloud Subscription Payment")

Submit and wait for the form to be accepted.
When ready, click *Provision Now*.

![PortalDashboardActiveSubscription](/images/TrueCommand/Cloud/PortalDashboardActiveSubscription.png "Account Services: Active Subscriptions")

Select a *Subnet* that is not currently used on the network.

![TrueCommandProvisionSubnet](/images/TrueCommand/Cloud/TrueCommandProvisionSubnet.png "Account Services: Provisioning TrueCommand")

## Managing a TrueCommand Cloud Account

From the account home page, click *Manage*.
Add a client for desktop or laptop to obtain a TrueCommand WireGuard Config file.

![CloudSubscriptionServiceDetails](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetails.png "Account Services: Service Details")

When the client account is created, click <i class="fa fa-download action-icon clickable" aria-hidden="true" title="Download WireGuard configuration file"></i> to download the configuration file.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: Downloading the WireGuard Configuration File")

Open Wireguard on your machine and click *Add Tunnel*.

![WireGuardTunnels](/images/TrueCommand/WireGuardTunnels.png "WireGuard: Adding Tunnels")

Select the TrueCommand WireGuard Configuration file that was downloaded from the portal.
the configuration file into WireGuard on your machine and activate the tunnel.

![WireGuardTCCloudInactive](/images/TrueCommand/WireGuardTCCloudInactive.png "WireGuard: Tunnel Inactive")

Click *Activate* to initialize the Wireguard tunnel.

![WireGuardTCCloudActivate](/images/TrueCommand/WireGuardTCCloudActivate.png "WireGuard: Tunnel Active")

Further information on WireGuard and WireGuard clients is found on the [WireGuard home page](https://www.wireguard.com).
The TrueCommand Cloud IP address displays in the iXsystems Account Portal page.

After WireGuard is active, log in to the TrueCommand Cloud Interface by clicking the TrueCommand IP address listed on the portal, or manually entering the TrueCommand Cloud IP in a browser.

## Connecting Systems to a TrueCommand Cloud Instance

Log into the ixSystems cloud account and click *Manage*.
Under **Service Details**, copy the *TrueCommand API Key*.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![TrueCommandCloudConnectAPIKey](/images/SCALE/TrueCommandCloudConnectAPIKey.png "Connecting TrueNAS to TrueCommand Cloud")

When the True Command logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the Portal to confirm the connection and activate the TrueNAS system.

Click on the **New System** alert, fill in the information from the TrueNAS system, and click *Add System*.

![NewSystemCreds](/images/TrueCommand/1.3/NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

It can take 10 to 15 minutes for the TrueNAS instance to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles](/TrueCommand/Administration/) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.

## TrueCommand Cloud Support

If you encounter any issues using TrueCommand Cloud or your iX Portal account, open your Portal Account, click **Manage**, and click **Request Support**.
Fill out the *Request Support* form with as much information as possible and click **Send Request**.
A copy of the support request will be emailed to the registered email account.

{{< include file="static/includes/TCSupport.md.part" markdown="true" >}}
