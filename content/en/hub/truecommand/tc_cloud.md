---
title: "Configuring TrueCommand Cloud"
linkTitle: "Configuring the iXsystems Hosted TrueCommand Instance"
description: "How to configure TrueNAS to communicate with TrueCommand Cloud"
tags: ["TrueCommand Cloud", "TrueCommand"]
---

TrueCommand Cloud is a SaaS offering of TrueCommand which includes a WireGuard VPN capability to connect TrueNAS systems through firewalls. TrueCommand Cloud is compatible with TrueNAS version v12.0 and newer.

{{% pageinfo %}}
TrueCommand Cloud accounts are currently undergoing a trial phase. For Early Access to TrueCommand Cloud, go to portal.ixsystems.com and create an iX account, then send an email to truecommand-sales@ixsystems.com to request Early Access to the TrueCommand Cloud Services. Be sure to include the email address that you used to create your iX Account.
{{% /pageinfo %}}

### Registering an Online Account with iXsystems

Open http://portal.ixsystems.com and click **Register**. Fill out the form using the email address you want to use, or you can optionally use existing credentials from Google, GitHub or other OAuth Providers.. This email account will need to be verified.  The email should arrive in a few minutes, if it does not show up in your inbox, check your spam folder.  If the email is in the spam folder, mark it as *not spam* and add the account to your address book so future emails will go to your inbox.
When you have received the verification email, open the link provided in the email to verify your account.  

### Creating a New Subscription

Log in to your verified account and click **New Subscription**.  Select the TrueCommand Cloud option and choose the subscription plan that best fits your current needs.  This can be adjusted later if your needs change.  Next, fill the payment form. Once the form has been accepted, click **Provision Now** and select a Subnet that is not currently in-use on your network. If unsure, please speak to your local IT staff.

### Managing Your TrueCommand Cloud Account

From the account home page, click **Manage**.  Add a client for your desktop or laptop so that you can obtain a TrueCommand WireGuard Config file. Download the config file and load the file into WireGuard on your machine and activate the tunnel.
Further information on WireGuard and WireGuard clients can be found on the [WireGuard home page](https://www.wireguard.com). The IP of your TrueCommand Cloud instance is displayed in the iXsystems Account Portal page.  

After WireGuard has been activated, you can log in to the TrueCommand Cloud Interface by  clicking the TrueCommand IP address listed on the portal, or manually entering the TrueCommand Cloud IP in a browser. 

### Connecting Systems to a TrueCommand Cloud Instance

Log into your ixSystems cloud account and click **Manage**, Under *Service Details* copy the *API Key* that is displayed.
Log into your TrueNAS system and click the TrueCommand icon in the upper right. [insert TC logo] 
Paste the API key copied from the iXsystems Account Portal into the TrueNAS dialog.  When the True Command logo starts bouncing left and right, check the email account registered for the TrueCommand Cloud Account for a verification message.  The email contains a link to the Portal account home to confirm the connection and activate the TrueNAS system.

It may take 10 to 15 minutes for your TrueNAS instance to fully sync up with the TrueCommand Cloud instance. When systems are connected to the TrueCommand Cloud instance, refer to the [TrueCommand documentation](/hub/truecommand/) for more articles about setting up configuration backups, alerts, reports, and role-based access control.

### Support

If you encounter any issues using TrueCommand Cloud or your iX Portal account, open your Portal Account, click **Manage**, and click **Request Support**. Fill out the *Request Support* form with as much information as possible and click **Send Request**. A copy of the Support request will be emailed to the registered email account.
