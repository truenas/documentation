---
title: "Setting Up System Email"
weight: 70
---

{{< toc >}}

An automatic script sends a nightly email to the administrator (*root*) account containing important information such as the health of the disks.
Alert events are also emailed to the root user account.
Configure the system to send these emails to the administrator remote email account for fast awareness and resolution of any critical issues.

{{< hint info >}}
[Scrub Task]({{< relref "ScrubTasksSCALE.md" >}}) issues and [S.M.A.R.T. reports]({{< relref "SMARTTestsSCALE.md" >}}) are mailed separately to the address configured in those services.
{{< /hint >}}

## TrueNAS Root Email Address

Before configuring anything else, set the root account email address.
Go to **Credentials > Local Users**, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Edit** for the **root** user.
In the **Email** field, enter a remote email address that the system administrator regularly monitors (like *admin@example.com*) and click **Save**.

## Email Options

For the next step, you must go to the **System Email** screen.

Click the **Alerts** <span class="iconify" data-icon="mdi:bell"></span> icon in the top right of the UI, then click the gear <span class="iconify" data-icon="mdi:cog"></span> icon and select **Email**.

The **Send Mail Method** shows different options:

* SMTP
* GMail OAuth

The **Email** screen configuration options change based on the option you select. 

Click **Send Test Mail** to verify the configured email settings are working.
If the test email fails, verify that the root user **Email** field is correctly configured by clicking the **Edit** button for the **root** account in **Credentials > Local Users**.

{{< expand "Setting Up Email Using GMail OAuth" "v" >}}
To use the **GMail OAuth** send-mail method:

Click on **Log In To GMail** button. 
The GMail **Authorizationg** window displays. 

Click **Proceed** to display the **Sign in with Google** window.

![EmailGmailSignIn](/images/SCALE/22.02/EmailGmailSignIn.png "Email GMail Sign In")

Type in the GMail account to use and click **Next**. 
Enter the password for the GMail account entered. 
When the **TrueNAS wants to access your Google Account** window displays, scroll down and click **Allow** to complete the set up or **Cancel** to exit set up and close the window.

![EmailGmailAllow](/images/SCALE/22.02/EmailGmailAllow.png "Email GMail Allow")

{{< /expand >}}

{{< expand "Setting Up Email Using SMTP" "v" >}}
To setup up SMTP service for the system email you need the outgoing mail server and port number for the email you entered.

Enter the email you want to use in **From Email** and the name in **From Name**. This is the email that sends the alerts and the name associated with the email.

![AlertEmailSMTPScreen](/images/SCALE/22.02/AlertEmailSMTPScreen.png "Email SMTP Screen")

Enter the host name or IP address of SMTP server sending email.
Enter the SMTP port number. Typically 25/465 (secure SMTP), or 587 (submission).

Select the level of securty from the **Security** dropdown list. Options are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**.

Select **SMTP Authentication** if you use the SMTP server uses authentication credentials and enter those credentials.

Click **Save**.

Click **Send Test Email** to verify you receive an email.

## Additional Information

See [Email Screens]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/EmailScreens.md" >}}) for more information on email settings.



