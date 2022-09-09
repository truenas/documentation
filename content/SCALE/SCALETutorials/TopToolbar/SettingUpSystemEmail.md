---
title: "Setting Up System Email"
weight: 40
tags:
- scaleemail
aliases:
 - /scale/gettingstarted/scalesystememail/
---

{{< toc >}}

An automatic script sends a nightly email to the administrator root account containing important information such as the health of the disks.
Alert events are also emailed to the root user account.
Configure the system to send these emails to the administrator remote email account for fast awareness and resolution of any critical issues.

{{< hint info >}}
[Scrub Task]({{< relref "/SCALE/SCALETutorials/DataProtection/ScrubTasksSCALE.md" >}}) issues and [S.M.A.R.T. reports]({{< relref "/SCALE/SCALETutorials/DataProtection/SMARTTestsSCALE.md" >}}) are mailed separately to the address configured in those services.
{{< /hint >}}
## Setting up User Accounts

Configure the email address for the system root user as part of your initial system setup. 
You can also configure email addresses for additional user accounts as needed.

### Configuring the Root User Email Address

Before configuring anything else, set the root account email address.
{{< expand "Click here for instructions" "v" >}}
Go to **Credentials > Local Users**, select the  click <span class="material-icons">expand_more</span> to expand the root user information. Select **Edit** to display the **Edit User** configuration screen.
In the **Email** field, enter a remote email address that the system administrator regularly monitors (like *admin@example.com*) and click **Save**.
{{< /expand >}}
### Configuring User Email

Just as with the root user, you can add new users as an admin or non-administrative account, and set up email for that user. 
Follow the directions in [Configuring the Root User Email Address](#configuring-user-email) for an existing user or in Setting Up User Accounts to add email service for a new user.

## Configuring System Email 

After setting up the root user email address you need to set up the send method for email service.

Click the **Alerts** <span class="iconify" data-icon="mdi:bell"></span> icon in the top right of the UI, then click the gear <span class="iconify" data-icon="mdi:cog"></span> icon and select **Email** to open the **Email** configuration screen.

The **Send Mail Method** shows two different options:

* **SMTP**
* **GMail OAuth**

The **Email** screen configuration options change based on the selected option. 

After configuring the send method, click **Send Test Mail** to verify the configured email settings are working.
If the test email fails, verify that the root user **Email** field is correctly configured for the root user. 
Return to **Credentials > Users** to select the [root user](#configuring-the-root-user-email-address).

### Setting Up Email Using GMail OAuth
The **Email** screen displays with **GMail OAuth** preselected as the default send method.
{{< expand "Click here for more information" "v" >}}
To use the **GMail OAuth** send method:

![AlertEmailScreen](/images/SCALE/22.02/AlertEmailScreen.png "Alert Email Screen")

Click on **Log In To GMail**. 

The GMail **Authorization** window displays. 

![EmailGmailAuthorization](/images/SCALE/22.02/EmailGmailAuthorization.png "Email Gmail Authorization")

Click **Proceed** to display the **Sign in with Google** window.

![EmailGmailSignIn](/images/SCALE/22.02/EmailGmailSignIn.png "Email GMail Sign In")

Enter the Gmail account credentials. Type in the GMail account to use and click **Next**. 
Enter the password for the GMail account you entered. 
When the **TrueNAS wants to access your Google Account** window displays, scroll down and click **Allow** to complete the set up or **Cancel** to exit set up and close the window.

![EmailGmailConfirmation](/images/SCALE/22.02/EmailGmailConfirmation.png "Email GMail Confirmation")

![EmailGmailAllow](/images/SCALE/22.02/EmailGmailAllow.png "Email GMail Allow")

{{< /expand >}}
## Setting Up Email Using SMTP
To setup up SMTP service for the system email send method you need the outgoing mail server and port number for the email you entered.
{{< expand "Click here for more information" "v" >}}
Enter the email you want to use in **From Email** and the name in **From Name**. 
This is the email that sends the alerts and the name associated with the email.

![AlertEmailSMTPScreen](/images/SCALE/22.02/AlertEmailSMTPScreen.png "Email SMTP Screen")

Enter the host name or IP address of SMTP server sending email.
Enter the SMTP port number. 
Typically 25/465 (secure SMTP), or 587 (submission).

Select the level of security from the **Security** dropdown list. Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**.

Select **SMTP Authentication** if you use the SMTP server uses authentication credentials and enter those credentials.

Click **Save**.

Click **Send Test Email** to verify you receive an email.
{{< /expand >}}

## Setting up the Email Alert Service

The final step to setting up system email and have alerts sent to that system email is to configure the email alert.

From the **Alerts** panel, select the <span class="material-icons">settings</span> icon and then **Alert Services**.

Change the **Type** field to **Email** and then populate the **Add Alert Service** form.

![AddAlertServiceEmailScreen](/images/SCALE/22.02/AddAlertServiceEmailScreen.png "Add Email Alert Service")

Add the system email address in the **Email Address** field.

Use **SEND TEST ALERT** to generate a test alert and confirm the email address and alert service works.

{{< taglist tag="scaleemail" limit="10" >}}
