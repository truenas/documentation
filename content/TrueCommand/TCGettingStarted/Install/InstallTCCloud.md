---
title: "Installing TrueCommand Cloud"
description: "This article describes the steps for installing TrueCommand Cloud."
weight: 10
tags:
- tccloudinstall
- tcinstall
- tccloud
- scaletoptoolbar
- coretoptoolbar
---
{{< toc >}}

TrueCommand is versatile and offers several different install options.
TrueCommand Cloud is the preferred method for using TrueCommand since it requires no local resources or specific hardware requirements to get started!

{{< hint info >}}
Please note that a credit card number is required for Cloud Signups.

If you're purchasing TrueNAS Enterprise hardware or licenses, you might be eligible to receive an additional TrueCommand license that lasts the duration of the TrueNAS Enterprise contract. Contact [**iXsystems Customer Support**]({{< relref "/TrueCommand/Introduction/Support.md" >}}) for more details about adding TrueCommand to your TrueNAS Enterprise purchase.
{{< /hint >}}

## Getting Started with Cloud Deployment

{{< expand "TrueCommand Cloud: Register and Create Subscription" "v" >}}

TrueCommand Cloud is a SaaS offering of TrueCommand with a WireGuard VPN capability to connect TrueNAS systems through firewalls.
TrueCommand Cloud is compatible with TrueNAS version 12.0 and newer.

### Register an iXsystems Account

Open https://portal.ixsystems.com and click **Register**. 

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

Fill out the form using the email address you want to use. 

![PortalAccountCreate](/images/TrueCommand/Cloud/PortalAccountCreate.png "Portal Account Create")

Check the address spam folder if the email does not arrive within a few minutes.
If the email is in the spam folder, mark it as *not spam* and add the account to the address book.
After receiving the verification email, open the link provided to verify the account.

### Create a New Subscription

Log in to the verified account and click **New Subscription**.  

![PortalDashboard](/images/TrueCommand/Cloud/PortalDashboard.png "Account Services: Dashboard")

![PortalCloudSubscription](/images/TrueCommand/Cloud/PortalCloudSubscription.png "Creating a Cloud Subscription")

Select the TrueCommand Cloud option and choose the subscription plan that best fits your current needs.

![PortalCloudSubscriptionOptions](/images/TrueCommand/Cloud/PortalCloudSubscriptionOptions.png "Account Services: Cloud Subscription Options")

Click **Continue** to proceed.

![PortalCloudSubscriptionSelected](/images/TrueCommand/Cloud/PortalCloudSubscriptionSelected.png "Account Services: Cloud Subscription Selected")

Next, fill out the payment form. 

![CloudSubscriptionPayment](/images/TrueCommand/Cloud/CloudSubscriptionPayment.png "Cloud Subscription Payment")

Click **Subscribe** and wait until the form is accepted. The **Account Services** window confirms that you have an active TrueNAS Cloud account with an active subscription.

### Provision the Active Subscription

Click the **Provision Now** button located to the right of the **Active Subscription** listing.

![PortalDashboardActiveSubscription](/images/TrueCommand/Cloud/PortalDashboardActiveSubscription.png "Account Services: Active Subscriptions")

Select a subnet that your network is not using from the **Subnet** dropdown list.

![TrueCommandProvisionSubnet](/images/TrueCommand/Cloud/TrueCommandProvisionSubnet.png "Account Services: Provisioning TrueCommand")

Click **Create Instance**. This returns you to the **Account Services** screen.  

The next step is to add a client and create a WireGuard Config file.

{{< /expand >}}

## Adding a Client and WireGuard in TrueCommand Cloud

{{< expand "TrueCommand Cloud: Add Client and WireGuard" >}}

From the account home page, click **Manage**.

To obtain a TrueCommand WireGuard config file you need to add a client.  

Under **Create Access Client** provide a nickname and click the **Add** button.

![CloudSubscriptionServiceDetails](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetails.png "Account Services: Service Details")

After adding the client, click <i class="fa fa-download action-icon clickable" aria-hidden="true" title="Download WireGuard configuration file"></i> to download the configuration file.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: Downloading the WireGuard Configuration File")

Open Wireguard on your system and click **Add Tunnel**.

![WireGuardTunnels](/images/TrueCommand/WireGuardTunnels.png "WireGuard: Adding Tunnels")

Select the TrueCommand WireGuard configuration file you downloaded.

![WireGuardTCCloudInactive](/images/TrueCommand/WireGuardTCCloudInactive.png "WireGuard: Tunnel Inactive")

Click **Activate** to initialize the Wireguard tunnel.

![WireGuardTCCloudActivate](/images/TrueCommand/WireGuardTCCloudActivate.png "WireGuard: Tunnel Active")

See the [WireGuard home page](https://www.wireguard.com) for more information on WireGuard and WireGuard clients.

The TrueCommand Cloud IP address is on the iXsystems account portal.

When WireGuard is active, log in to the TrueCommand Cloud interface by clicking the TrueCommand IP address on the portal, or manually enter the TrueCommand Cloud IP in a browser.

The next step is to add systems to your configuration.
{{< /expand >}}

## Connect Systems to the TrueCommand Cloud Instance

{{< expand "TrueCommand Cloud: Connecting Systems" "v" >}}

Log into the ixSystems cloud account and click **Manage**.
Under **Service Details**, copy the **TrueCommand API Key**.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")

Log into a TrueNAS system and click the TrueCommand icon in the upper right.

Paste the TrueCommand API key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

![TrueCommandCloudConnectAPIKey](/images/SCALE/TrueCommandCloudConnectAPIKey.png "Connecting TrueNAS to TrueCommand Cloud")

When the True Command logo starts moving, check the TrueCommand Cloud email address for a verification message.
The email contains a link to the portal to confirm the connection and activate the TrueNAS system.

Click the **Discovered Systems** icon and select the TrueNAS system. TrueCommand automatically fills out the IP field using the WiredGuard address. Fill in the TrueNAS system nickname and password information from the TrueNAS system, and click **Add System**.

![NewSystemCreds](/images/TrueCommand/2.0/TC20NewSystemCreds.png "Registering TrueNAS in TrueCommand Cloud")

The TrueNAS instance can take 10 to 15 minutes to fully sync up with TrueCommand Cloud.
When all systems are connected to TrueCommand Cloud, refer to the [TrueCommand Administration articles]({{< relref "/TrueCommand/Administration/_index.md" >}}) for more instructions about setting up configuration backups, alerts, reports, and role-based access control.
{{< /expand >}}
### Adding Browser Exceptions
{{< include file="/_includes/TCBrowserExceptions.md" type="page" >}}

## Create the Administrator Account in TrueCommand Cloud
{{< expand "TrueCommand Cloud: Create the Admin Account" "v" >}}

When accessing the interface for the first time, you need to create an admin account. 

![TrueCommand Admin Creation](/images/TrueCommand/2.0/FirstLogin.png "TrueCommand Admin Creation")

Enter a username and password. Read the Terms of Service, select **I have read and agree to the terms of service**, and click **SIGN UP**.

TrueCommand creates the admin login credentials and displays the login page.

![TrueCommand Admin Sign In](/images/TrueCommand/2.0/LoginAdmin.png "TrueCommand Admin Sign In")

You can now log in to the TrueCommand web interface with the new administrator account credentials.

### Resetting a User Password on the Login Screen

{{< include file="static/includes/TrueCommand/2.1/ResettingUserPassword.md.part" markdown="true" >}}
{{< /expand >}}

{{< taglist tag="tccloud" limit="10" >}}
