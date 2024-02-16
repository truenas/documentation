---
title: "Installing TrueCommand Cloud"
description: "Describes the steps for installing TrueCommand Cloud."
weight: 10
tags:
- install
- tccloud
---


TrueCommand is versatile and offers several different install options.
TrueCommand Cloud is the preferred method for using TrueCommand since it does not require local resources or have specific hardware requirements to get started!

{{< hint type=note >}}
Please note that a credit card number is required for Cloud Signups.

If you are purchasing TrueNAS Enterprise hardware or licenses, you might be eligible to receive an additional TrueCommand license that lasts the duration of the TrueNAS Enterprise contract.
Inquire with [**iXsystems Customer Support**](https://www.ixsystems.com/support/) for more details about adding TrueCommand to your TrueNAS Enterprise purchase.
{{< /hint >}}

## Getting Started with Cloud Deployment

{{< expand "TrueCommand Cloud: Register and Create Subscription" "v" >}}
TrueCommand Cloud is a SaaS offering of TrueCommand with a WireGuard VPN capability to connect TrueNAS systems through firewalls.
TrueCommand Cloud is compatible with TrueNAS version 12.0 and newer.

### Registering an iXsystems Account
Open https://portal.ixsystems.com and click **Register**.

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

Fill out the form using the email address you want to use.

![PortalAccountCreate](/images/TrueCommand/Cloud/PortalAccountCreate.png "Portal Account Create")

If the email does not arrive within a few minutes, check the address spam folder.
If the email is in the spam folder, mark it as *not spam* and add the account to the address book.
After receiving the verification email, open the link provided to verify the account.

Future login attempts to the iXsystems account requires entering a one time password (OTP) sent to the registered email address.
Three failed login attempts results in a temporary account lock for 30 hours.

Continued failed login attempts can result in a permament account block.
If this occurs, contact iXsystems Support to request unblocking the account.

{{< expand "Contacting iXsystems Support (Click to expand)" "v" >}}
{{< include file="/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

### Creating a New Subscription
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
Click **Provision Now** located to the right of the **Active Subscription** listing.

![PortalDashboardActiveSubscription](/images/TrueCommand/Cloud/PortalDashboardActiveSubscription.png "Account Services: Active Subscriptions")

Select a subnet that your network is not using from the **Subnet** dropdown list.

![TrueCommandProvisionSubnet](/images/TrueCommand/Cloud/TrueCommandProvisionSubnet.png "Account Services: Provisioning TrueCommand")

Click **Create Instance**. This returns you to the **Account Services** screen.  

Next, add a client and create a WireGuard config file.
{{< /expand >}}

## Adding a Client and WireGuard in TrueCommand Cloud

{{< expand "TrueCommand Cloud: Add Client and WireGuard" >}}
From the account home page, click **Manage**.

To obtain a TrueCommand WireGuard config file, add a client.  

Under **Create Access Client** enter a nickname, then click **Add**.

![CloudSubscriptionServiceDetails](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetails.png "Account Services: Service Details")

After adding the client, click <i class="fa fa-download action-icon clickable" aria-hidden="true" title="Download WireGuard configuration file"></i> to download the configuration file.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: Downloading the WireGuard Configuration File")

Open Wireguard on your system and click **Add Tunnel**.

![WireGuardTunnels](/images/TrueCommand/WireGuardTunnels.png "WireGuard: Adding Tunnels")

Select the downloaded TrueCommand WireGuard configuration file.

![WireGuardTCCloudInactive](/images/TrueCommand/WireGuardTCCloudInactive.png "WireGuard: Tunnel Inactive")

Click **Activate** to initialize the Wireguard tunnel.

![WireGuardTCCloudActivate](/images/TrueCommand/WireGuardTCCloudActivate.png "WireGuard: Tunnel Active")

See the [WireGuard home page](https://www.wireguard.com) for more information on WireGuard and WireGuard clients.

The TrueCommand Cloud IP address is on the iXsystems account portal.

When WireGuard is active, log in to the TrueCommand Cloud interface by clicking the TrueCommand IP address on the portal, or manually enter the TrueCommand Cloud IP in a browser.

Next, add systems to your configuration.
{{< /expand >}}

## Connect Systems to the TrueCommand Cloud Instance

{{< expand "TrueCommand Cloud: Connecting Systems" "v" >}}
{{< include file="/_includes/TCCloudConnectSystems.md" >}}

For more information on connecting TrueNAS systems to TrueCommand Cloud, see [Connecting Your First TrueNAS System]({{< relref "/TrueCommand/TCGettingStarted/ConnectingTrueNAS.md" >}}).

After connecting all systems to TrueCommand Cloud, refer to the TrueCommand [User]({{< relref "/TrueCommand/UserGuide/_index.md" >}}) and [Administrator]({{< relref "/TrueCommand/AdminGuide/_index.md" >}}) Guides for instructions on setting up configuration backups, alerts, reports, and role-based access control.
{{< /expand >}}
### Adding Browser Exceptions
{{< include file="/_includes/TCBrowserExceptions.md" >}}

## Create the Administrator Account in TrueCommand Cloud
{{< expand "TrueCommand Cloud: Create the Admin Account" "v" >}}
When accessing the interface for the first time, you must create an admin account.

![TrueCommand Admin Creation](/images/TrueCommand/Users/FirstLogin.png "TrueCommand Admin Creation")

Enter a username and password. Read the Terms of Service, select **I have read and agree to the terms of service**, then click **SIGN UP**.

TrueCommand creates the admin login credentials and displays the login page.

![TrueCommand Admin Sign In](/images/TrueCommand/Users/LoginAdmin.png "TrueCommand Admin Sign In")

You can now log into the TrueCommand web interface with the new administrator account credentials.

### Resetting a User Password on the Login Screen

{{< include file="content/_includes/TCResettingUserPassword.md" >}}
{{< /expand >}}
