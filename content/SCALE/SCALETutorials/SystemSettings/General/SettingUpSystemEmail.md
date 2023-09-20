---
title: "Setting Up System Email"
description: "Provides instructions on configuring email using SMTP or GMail OAuth and setting up the email alert service in SCALE."
weight: 30
tags:
 - scaleemail
 - scalealerts
aliases:
 - /scale/gettingstarted/scalesystememail/
 - /scale/scaletutorials/toptoolbar/settingupsystememail/
---

{{< toc >}}

An automatic script sends a nightly email to the administrator account containing important information such as the health of the disks.
Configure the system to send these emails to the administrator remote email account for fast awareness and resolution of any critical issues.

{{< hint type=note >}}
[Scrub Task]({{< relref "ScrubTasksSCALE.md" >}}) issues and [S.M.A.R.T. reports]({{< relref "SMARTTestsSCALE.md" >}}) are mailed separately to the address configured in those services.
{{< /hint >}}

## Setting Up User Accounts

Configure the email address for the admin user as part of your initial system setup or using the procedure below.
You can also configure email addresses for additional user accounts as needed.

### Configuring the Admin User Email Address

Before configuring anything else, set the local administrator email address.
{{< expand "Click here for instructions" "v" >}}
Go to **Credentials > Local Users**, click on the admin user row to expand it. Select **Edit** to display the **Edit User** configuration screen.
In the **Email** field, enter a remote email address that the system administrator regularly monitors (like *admin@example.com*) and click **Save**.
{{< /expand >}}

### Configuring User Emails

Add a new user as an administrative or non-administrative account and set up email for that user.
Follow the directions in [Configuring the Admin User Email Address](#configuring-the-admin-user-email-address) above for an existing user or see [Managing Users]({{< relref "ManageLocalUsersSCALE.md" >}}) for a new user.

## Setting Up System Email

After setting up the admin email address, you need to set up the send method for email service.

There are two ways to access email configuration options.
Go to the **Systems Settings > General** screen and locate the **Email** widget to view current configuration or click the **Alerts** <span class="iconify" data-icon="mdi:bell"></span> icon in the top right of the UI, then click the gear <span class="iconify" data-icon="mdi:cog"></span> icon, and select **Email** to open the **General** settings screen.
Click **Settings** on the **Email Widget** to open the **Email Options** configuration screen.

**Send Mail Method** shows two different options:

* [**SMTP**](#setting-up-email-using-smtp)
* [**GMail OAuth**](#setting-up-email-using-gmail-oauth)

The configuration options change based on the selected method.

After configuring the send method, click **Send Test Mail** to verify the configured email settings are working.
If the test email fails, verify that the **Email** field is correctly configured for the admin user.
Return to **Credentials > Users** to edit the [admin user](#configuring-the-administration-user-email-address).

**Save** stores the email configuration and closes the **Email Options** screen.

### Configuring Email Using SMTP

To set up SMTP service for the system email send method, you need the outgoing mail server and port number for the email address.

{{< expand "Click here for more information" "v" >}}
Click the **SMTP** radio button.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsSMTP.png" alt="SMTP Email Options" id="SMTP Email Options" >}}

Enter the email address you want to use in **From Email** and the name in **From Name**.
This is the email that sends the alerts and the name that appears before the address.

Enter the host name or IP address of the SMTP server to use in **Outgoing Mail Server**.
Enter the SMTP port number in **Mail Server Port**.
Typically, this is 25/465 (secure SMTP) or 587 (submission).

Select the level of security from the **Security** dropdown list.
Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**.

Select **SMTP Authentication** for TrueNAS to reuse authentication credentials from the SMTP server.
Enter the SMTP credentials in the new fields that appear.
Typically, **Username** is the full email address and **Password** is the password for that account.

Click **Send Test Email** to verify you receive an email.

Click **Save**.
{{< /expand >}}

### Configuring Email Using GMail OAuth

To set up the system email using **Gmail OAuth**, you need to log in to your Gmail account through the TrueNAS SCALE web UI.

{{< expand "Click here for more information" "v" >}}
Click the **GMail OAuth** radio button.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsGmailOAuth.png" alt="Gmail OAuth Login" id="Gmail OAuth Login" >}}

Click on **Log In To GMail**.

The GMail **Authorization** window opens.

{{< trueimage src="/images/SCALE/SystemSettings/EmailGmailAuthorization.png" alt="Gmail Authorization Screen" id="Gmail Authorization Screen" >}}

Click **Proceed** to open the **Sign in with Google** window.

{{< trueimage src="/images/SCALE/SystemSettings/EmailGmailChooseAccount.png" alt="Choose Account" id="Choose Account" >}}

Select the account to use for authentication or select **Use another account**.

If prompted, enter the Gmail account credentials.
Type in the GMail account to use and click **Next**.
Enter the password for the GMail account you entered.

When the **TrueNAS wants to access your Google Account** window displays, scroll down and click **Allow** to complete the set up or **Cancel** to exit set up and close the window.

{{< trueimage src="/images/SCALE/SystemSettings/EmailGmailAllow.png" alt="Allow Access" id="Allow Access" >}}

After setting up Gmail OAuth authentication, the **Email Options** screen displays **Gmail credentials have been applied** and the button changes to **Log In To Gmail Again**.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsGmailOAuthApplied.png" alt="Gmail Credentials Applied" id="Gmail Credentials Applied" >}}

Click **Send Test Email** to verify you receive an email.

Click **Save**.

{{< /expand >}}

## Setting Up the Email Alert Service

If the system email send method is configured, the admin email receives a system health email every night/morning.

You can also add/configure the **Email Alert Service** to send timely warnings when a system alert hits a warning level that is specified in [**Alert Settings**]({{< relref "/SCALE/SCALEUIReference/toptoolbar/alerts/alertsettingsscreen.md" >}}).

From the **Alerts** <span class="material-icons">notifications</span> panel, select the <span class="material-icons">settings</span> icon and then **Alert Settings**, or go to **System Settings > Alert Settings**.

Locate **Email** under **Alert Services**, select the <span class="material-icons">more_vert</span> icon, and then click **Edit** to open the **Edit Alert Service** screen.

{{< trueimage src="/images/SCALE/SystemSettings/EditAlertServiceEmailScreen.png" alt="Edit Email Alert Service" id="Edit Email Alert Service" >}}

Add the system email address in the **Email Address** field.

Use the **Level** dropdown to adjust the email warning threshold or accept the default **Warning**.

Use **Send Test Alert** to generate a test alert and confirm the email address and alert service works.

{{< taglist tag="scaleemail" limit="10" >}}

{{< taglist tag="scalealerts" limit="10" title="Related Alert Articles" >}}
