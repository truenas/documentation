---
title: "Accessing TrueCommand Cloud"
description: "How to use TrueCommand Cloud to manage TrueNAS 12.0 (or newer) systems."
tags: ["TrueCommand Cloud", "TrueCommand"]
weight: 10
---

TrueCommand Cloud is a SaaS offering of TrueCommand which includes a WireGuard VPN capability to connect TrueNAS systems through firewalls. TrueCommand Cloud is compatible with TrueNAS version v12.0 and newer.


## Register an iXsystems Account

Open http://portal.ixsystems.com and click **Register**. 

<img src="/images/tcc-01.png" width='700px'>
<br><br>

Fill out the form using the email address you want to use. 

<img src="/images/tcc-02.png" width='700px'>
<br><br>

This email account will need to be verified.  The email should arrive in a few minutes, if it does not show up in your inbox, check your spam folder.  If the email is in the spam folder, mark it as *not spam* and add the account to your address book so future emails will go to your inbox.
When you have received the verification email, open the link provided in the email to verify your account.  

### Create a New Subscription

Log in to your verified account and click **New Subscription**.  

<img src="/images/tcc-03.png" width='700px'>
<br><br>

<img src="/images/tcc-04.png" width='700px'>
<br><br>

Select the TrueCommand Cloud option and choose the subscription plan that best fits your current needs.  This can be adjusted later if your needs change.

<img src="/images/tcc-05.png" width='700px'>
<br><br>

Click Continue to proceed.

<img src="/images/tcc-06.png" width='700px'>
<br><br>

Next, fill the payment form. 

<img src="/images/tcc-07.png" width='700px'>
<br><br>

Once the form has been accepted, click **Provision Now**.

<img src="/images/tcc-08.png" width='700px'>
<br><br>

Select a Subnet that is not currently in-use on your network. If unsure, please speak to your local IT staff.

<img src="/images/tcc-09.png" width='700px'>
<br><br>


## Managing Your TrueCommand Cloud Account

From the account home page, click **Manage**.  Add a client for your desktop or laptop so that you can obtain a TrueCommand WireGuard Config file. 

<img src="/images/tcc-10.png" width='700px'>
<br><br>

Once the client account has been created, click the <i class="fas fa-download action-icon clickable" aria-hidden="true" title="Download WireGuard configuration file"></i>&nbsp download icon to download the config file.

<img src="/images/tcc-11.png" width='700px'>
<br><br>

Open Wireguard on your machine and click **Add Tunnel**. 

<img src="/images/wg-01.png" width='700px'>
<br><br>

Select the TrueCommand WireGuard Configuration file that was downloaded from the portal.
the configuration file into WireGuard on your machine and activate the tunnel.

<img src="/images/wg-02.png" width='700px'>
<br><br>

Click **Activate** to initialize the Wireguard tunnel.
<img src="/images/wg-03.png" width='700px'>
<br><br>

Further information on WireGuard and WireGuard clients can be found on the [WireGuard home page](https://www.wireguard.com). The IP of your TrueCommand Cloud instance is displayed in the iXsystems Account Portal page.  

After WireGuard has been activated, you can log in to the TrueCommand Cloud Interface by clicking the TrueCommand IP address listed on the portal, or manually entering the TrueCommand Cloud IP in a browser. 

## Connecting Systems to a TrueCommand Cloud Instance

Log into your ixSystems cloud account and click **Manage**, Under *Service Details* copy the *TrueCommand API Key* that is displayed.

<img src="/images/tcc-11.png" width='700px'>
<br><br>

Log into your TrueNAS systems and click the TrueCommand icon in the upper right.

Paste the TrueCommand API Key copied from the iXsystems Account Portal into the TrueNAS dialog window. 

<img src="/images/TNapiTC.png"><br><br>

When the True Command logo starts bouncing left and right, check the email account registered for the TrueCommand Cloud Account for a verification message.  The email contains a link to the Portal account home to confirm the connection and activate the TrueNAS system.

Click on the New System alert, fill in the information from the TrueNAS system, and click the **Add System** button.

<img src="/images/tcnewssystemcred.png"><br><br>

It may take 10 to 15 minutes for your TrueNAS instance to fully sync up with the TrueCommand Cloud instance. When systems are connected to the TrueCommand Cloud instance, refer to the [TrueCommand documentation](/docs/truecommand/) for more articles about setting up configuration backups, alerts, reports, and role-based access control.

## Support

If you encounter any issues using TrueCommand Cloud or your iX Portal account, open your Portal Account, click **Manage**, and click **Request Support**.
Fill out the *Request Support* form with as much information as possible and click **Send Request**.
A copy of the support request will be emailed to the registered email account.
