---
title: "Setting Up System Email"
description: "Provides instructions on configuring email using SMTP or GMail OAuth and setting up the email alert service in TrueNAS."
weight: 30
tags:
 - email
 - alerts
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
aliases:
 - /scale/gettingstarted/scalesystememail/
 - /scale/scaletutorials/toptoolbar/settingupsystememail/
---

An automatic script sends a nightly email containing important information such as disk health to the administrator account.
For fast awareness and resolution of critical issues, configure TrueNAS to send these emails to the remote email account for the administrator.

{{< hint type=note >}}
TrueNAS mails [Scrub Task]({{< ref "ScrubTasksSCALE" >}}) issues and [S.M.A.R.T. reports]({{< ref "SMARTTestsSCALE" >}}) separately to the address configured in those services.
{{< /hint >}}

## Configuring User Email Addresses

You can configure the email address for the admin user as part of your initial system setup or by following the procedure below.
You can also configure email addresses for additional user accounts as needed.

Before configuring anything else, set the local administrator email address.
Go to **Credentials > Users**, click on the admin user row to expand it, then select **Edit** to open the **Edit User** configuration screen.
In the **Email** field, enter a remote email address for the system administrator that regularly monitors (like *admin@example.com*), and click **Save**.

For more information on adding or changing user settings, see [Managing Users]({{< ref "ManageLocalUsersSCALE" >}}).

## Setting Up System Email

After setting up the admin email address, configure the send method for the email service.

Go to **System > General Settings** and locate the **Email** widget to view the current configuration, or click the **Alerts** <span class="iconify" data-icon="mdi:bell"></span> icon at the top right of the UI screen, then click the gear <span class="iconify" data-icon="mdi:cog"></span> settings icon, and select **Email** to open the **General Settings** screen.

Click **Settings** on the **Email Widget** to open the **Email Options** screen.

Select one of the three **Send Mail Method** options:

* [**SMTP**](#configuring-email-using-smtp)
* [**GMail OAuth**](#configuring-email-using-gmail-oauth)
* [**Outlook OAuth**](#configuring-email-using-outlook-oauth)

The configuration options change based on the selected method.

After configuring the send method, click **Send Test Mail** to verify you can send email.
If the email test fails, verify the **Email** field is correctly configured for the admin user.
Return to **Credentials > Users** to edit the [admin user](#configuring-the-admin-user-email-address).

**Save** stores the email configuration and closes the **Email Options** screen.

### Configuring Email Using SMTP

To set up SMTP service as the system email send method, you need the outgoing mail server and port number for the email address.

Select the **SMTP** radio button.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsSMTP.png" alt="SMTP Email Options" id="SMTP Email Options" >}}

Enter the email address that sends the alerts in **From Email** and the name that appears before the address in **From Name**.

Enter the SMTP server host name or IP address in **Outgoing Mail Server**.
Enter the SMTP port number in **Mail Server Port**. This is typically 25, 465 (secure SMTP) or 587 (submission).

Select the level of security from the **Security** dropdown list.
Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**.

Select **SMTP Authentication** for TrueNAS to reuse authentication credentials from the SMTP server.
Enter the SMTP credentials in the new fields that appear.
Typically, **Username** is the full email address, and **Password** is the password for that account.

Click **Send Test Email** to verify you receive an email.

Click **Save**.

### Configuring Email Using GMail OAuth

To set up the system email using **Gmail OAuth**, use the TrueNAS web UI to log in to your Gmail account.

Select **GMail OAuth**.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsGmailOAuth.png" alt="Gmail OAuth Login" id="Gmail OAuth Login" >}}

Click on **Log In To GMail**. The GMail **Authorization** window opens.

{{< trueimage src="/images/SCALE/SystemSettings/EmailGmailAuthorization.png" alt="Gmail Authorization Screen" id="Gmail Authorization Screen" >}}

Click **Proceed** to open the **Sign in with Google** window.

{{< trueimage src="/images/SCALE/SystemSettings/EmailGmailChooseAccount.png" alt="Choose Account" id="Choose Account" >}}

Select the account to use for authentication or select **Use another account**.

When prompted, enter the Gmail account credentials.
Type in the GMail account to use and click **Next**.
Enter the password for the GMail account you entered.

When the **TrueNAS wants to access your Google Account** window opens, scroll down and click **Allow** to complete the setup or **Cancel** to exit setup and close the window.

{{< trueimage src="/images/SCALE/SystemSettings/EmailGmailAllow.png" alt="Allow Access" id="Allow Access" >}}

After setting up Gmail OAuth authentication, the **Email Options** screen displays **Gmail credentials have been applied**, and the button changes to **Log In To Gmail Again**.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsGmailOAuthApplied.png" alt="Gmail Credentials Applied" id="Gmail Credentials Applied" >}}

Click **Send Test Email** to verify you receive an email.

Click **Save**.

### Configuring Email Using Outlook OAuth

To set up the system email using **Outlook OAuth**, use the TrueNAS web UI to log in to your Outlook account.

Select **Outlook OAuth**.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsOutlookOAuth.png" alt="Outlook OAuth Login" id="Outlook OAuth Login" >}}

Enter the email address that sends the alerts in **From Email** and the name that appears before the address in **From Name**.

Click **Log In To Outlook**. The Outlook **Authorization** window opens.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOutlookAuthorization.png" alt="Outlook Authorization Screen" id="Outlook Authorization Screen" >}}

Click **Proceed** to open the **Sign in** window.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOutlookSignIn.png" alt="Outlook Sign In Screen" id="Outlook Sign In Screen" >}}

Enter the email, phone number, or Skype username associated with your Outlook account, then click **Next** to enter your password.

When the **TrueNAS wants to access your Outlook Account** window opens, scroll down and click **Allow** to complete the setup or **Cancel** to exit the setup process.

After setting up Outlook OAuth authentication, the **Email Options** screen shows **Outlook credentials have been applied** and the button changes to **Logged In To Outlook**.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsOutlookOAuthApplied.png" alt="Outlook Credentials Applied" id="Outlook Credentials Applied" >}}

Click **Send Test Email** to verify you receive an email.

Click **Save**.

## Setting Up the Email Alert Service

After configuring the system email send method, the admin email receives a system health email every night/morning.

To add or configure the **Email Alert Service** to send timely warnings when a system alert hits the warning level specified in [**Alert Settings**]({{< ref "/SCALEUIReference/toptoolbar/alerts/alertsettingsscreen" >}}):

 Go to **System > Alert Settings** or from any screen, click on the **Alerts** <span class="material-icons">notifications</span> icon at the top right of the screen to open the **Alerts** panel.
Click on the <span class="material-icons">settings</span> settings icon and then on **Alert Settings**.

Locate **Email** under **Alert Services**, select the <span class="material-icons">more_vert</span> icon, and then click **Edit** to open the **Edit Alert Service** screen.

{{< trueimage src="/images/SCALE/SystemSettings/EditAlertServiceEmailScreen.png" alt="Edit Email Alert Service" id="Edit Email Alert Service" >}}

Add the system email address in the **Email Address** field.

Use the **Level** dropdown to adjust the email warning threshold or accept the default **Warning** setting.

Click **Send Test Alert** to generate a test alert and confirm the email address and alert services work.