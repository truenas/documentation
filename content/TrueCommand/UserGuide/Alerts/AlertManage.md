---
title: "Managing Alerts"
description: "Provides information on the alert screens and functions in TrueCommand. It also provides instructions on managing alerts, alert rules, and setting up alert services."
weight: 10
aliases:
  - /truecommand/alerts/alertmanage/
  - /truecommand/tcgettingstarted/configurealert/
  - /truecommand/alerts/alertmanage/
tags:
- tcuser
- tcadmin
---

{{< toc >}}

TrueCommand alerts provide visual warnings for monitored systems that require attention.
Monitored TrueNAS systems and TrueCommand alert rules can both generate alerts.

TrueCommand can discover and show TrueNAS system alerts created created in the last two months. 
Alerts older than this do not show in TrueCommand. 

Administrator accounts can see all system alerts but non-administrator accounts can only see alerts on systems they are permitted to access.

TrueCommand provides three alert screen options:
* **All Alerts** displays all alerts from systems that TrueCommand monitors.
* **Alert Rules** allows administrators and users with permissions to configure alerts for monitored systems.
* **Alert Services** allows administrators to configure communication plugins.

The **All Alerts**, **Fleet Dashboard**, main **Dashboard**, and **Systems** and **System Inventory** screens display alert indications.

## All Notices Screens and Functions
To view a list of all system alerts TrueCommand discovers, click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then click **All Alerts**. The **Alert Notices** screen opens.

![AllAlerts](/images/TrueCommand/Alerts/AllAlerts.png "All Alerts")

Select the checkbox to the left of **CREATED** at the top of the list of alerts to select all alerts. Selecting one or more alerts activates the **Resolve Selected** and **Delete Selected** buttons.

Click the delete <span class="material-icons">delete</span> icon to remove the alert from TrueCommand.
Click the checkmark <span class="iconify" data-icon="ion:checkmark-sharp"></span> icon to dismiss the alert.

### Viewing Alerts
The **Fleet Dashboard** includes an **Alerts** widget that lists alerts discovered by TrueCommand for all managed systems.

System widgets on the main **Dashboard** and the **Systems** screen display blue alert bubbles with the number of alerts discovered for a TrueNAS system.

![DashboardSingleSystemview](/images/TrueCommand/Dashboard/DashboardSingleSystemView.png "Dashboard System Widget Alerts")

Click on the system name on a main **Dashboard** system widget to open the detailed single system screen. Each single system detail screen includes an **Alerts** widget that displays alerts for that system. 

![DashboardSystemDetailAlerts](/images/TrueCommand/Dashboard/DashboardSystemDetailAlerts.png "Dashboard System Detail Alerts")

Click the arrow icon at the top right corner of the single system **Alerts** widget to open the **Alert Notices** screen. 
Alternatively, click the gear icon on the top toolbar, then click **All Alerts** to open the same **Alert Notices** screen.

To view all alerts from the **Systems** screen system list, click the blue alert bubble to open the single system detail screen with the **Alerts** widget. 

### Resolving Alerts
To resolve an alert, select the checkbox to the left of the alert, then click **RESOLVE SELECTED**. A green checkmark displays in the **Dismissed** column.

![AllAlertsResolvedAlert](/images/TrueCommand/Alerts/AllAlertsResolvedAlert.png "All Alert Resolved Alert")

To resolve multiple alerts, select the checkbox for each alert, then click **RESOLVE SELECTED**.

### Deleting Alerts
Administrator accounts can delete alerts from the single system detailed screen **Alerts** widget and from the **Alert Notices** screen.

Deleting an alert cannot be undone.

Click the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> icon on the **Alert Notices** screen. A delete confirmation dialog displays.

To delete multiple alerts, select each alert checkbox, then click **DELETE SELECTED**.

## Alert Rules Screens and Functions
Only administrator accounts can create alert rules.

TrueCommand alert rules monitor system information and generate a TrueCommand alert if specific conditions occur.
TrueCommand has several built-in default alert rules listed on the **Alert Rules** screen.
Alert rules define alert options and triggers that can generate alerts for a system.
TrueCommand administrators and [team members]({{< relref "/TrueCommand/TCGettingStarted/UserAccounts.md" >}}) with the appropriate permissions can create new alert rules.

To view all TrueCommand alert rules, click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i>icon, then click **Alert Rules**.

![AlertRulesScreen](/images/TrueCommand/Alerts/AlertRulesScreen.png "Alert Rules Screen")

The **Alert Rules** screen details each TrueCommand alert rule, the administrator user account that created it, the alert rule priority level, name, and system.

### Managing Alert Rules
Administrator users can activate, pause, edit, or delete alert rules. 

To create a new alert rule, click **NEW ALERT RULE**, then follow the creation wizard:

![AlertRulesCreate](/images/TrueCommand/Alerts/AlertRulesCreate.png "Create new Alert Rule")

To create a new rule:

1. Enter the **Alert Options**.
   a. Enter a name in **Alert Rule Name**.
   b. Select a system **System** to apply the rule to. Non-administrative user accounts require appropriate system permissions.
   c. Select the alert type in **Priority**. Choose **Information**, **Warning**, or **Critical** to determine the alert category generated.
   d. Enter an optional description for the alert.
2. Specify the **Alert Triggers**.
   a. Select a metric. 
      For example, *cpu_temperature* means the alert rule monitors the temperature of the chosen system. Scroll down to find a desired source.

   ![AlertTriggerDataSources](/images/TrueCommand/Alerts/AlertTriggerDataSources.png "Alert Trigger Data Sources")

   b. Select a comparison type in **Comparator** (**Greater Than**, **Less Than**, or **Not Equals**).
      The comparison type applies to the data source and comparison value. 
   c. Enter the comparison value by entering an integer appropriate for the selected options in the **Value** field. 
      The integer acts as a threshold or limitation for when the rule generates an alert.
3. Click **SAVE ALERT RULE ** to finish creating the new alert rule. To start over, click **RESET**.

## Alert Services Screens and Functions
Configurable alert services are only available for local installations or containerized TrueCommand deployments.
TrueCommand Cloud instances use email alerts by default; PagerDuty is not an option.

TrueCommand uses different service plugins to expand how it communicates alerts to users or administrators.
Individual user accounts can use service plugins to manage how TrueCommand notifies them of a system alert.  

### Configuring Alert Services
To configure an alert service plugin, click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then click **Alert Services**. 
TrueCommand has two alert services:
* **PagerDuty** plugin that configures a pager to receive an alert.
* **SMTP Email** plugin that configures system SMTP and user email services.

![Alert Services Screen](/images/TrueCommand/Alerts/AlertServiceScreen.png "Alert Services")

Each plugin has three options:
* **Send test alert** <span class="iconify" data-icon="mdi:test-tube"></span>
* **Configure plugin** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> 
* **Clear plugin configuration** <mat-icon _ngcontent-ath-c200="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">remove_circle</mat-icon> 

### Configuring SMTP Email
{{< hint type=note >}}
Before proceeding, verify that the sending mail server has TLS enabled. 
TrueCommand cannot send emails through a mail server without TLS.
The user profile page must have an email address to receive emails.
{{< /hint >}}

To configure SMTP service:

1. Enter values in all fields on the **SMTP Email** screen and then click **SAVE**:
   
   ![AlertServiceSMTPEmailScreen](/images/TrueCommand/Alerts/AlertServiceSMTPEmailScreen.png "Alert Services: SMTP Email options")

   Enter the host name for the mail server in **Mailserver** (*smtp.gmail.com* for example).

   Enter the port number for the mail server in **Mailserver port**.

   Enter the email address for plain authentication in **Auth user**, for example, *adminuser@yourmail.com*, and the password for plain authentication in **Auth pass**. For a *No-Auth* SMTP configuration, leave the password field blank.
   If configuring smtp.gmail.com, create an **App Password** in the gmail account for the gmail account. 

   Enter this passcode here to configure gmail SMTP service authentication.

   Enter the address that sends the email (i.e., no-reply@TrueCommand.io) or allows you to customize the sender field of the email in **From**

   Select **Tls** to initiate a connection with TLS.

   Click **Test** on the **SMTP Email** configuration screen to verify that the configuration is correct.
   If you do not receive a test alert email, check the values entered are accurate.

   The system displays pop-up messages to prompt you if the email address for the administration user account (root or admin user) is not added.

2. Click on the avatar to the right of the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then click **Profile**.
     
   ![EditUserProfile](/images/TrueCommand/Alerts/EditUserProfile.png "Edit User Profile")

3. Type the email for that user in the **Email** field and click **SAVE CHANGES**.
   The first time you set up SMTP email, a **VERIFY EMAIL** button displays below the **Email** field to the left of the **Enable 2FA** checkbox.

   The system should automatically send a test email to the specified email address. 
   If not, click **VERIFY EMAIL**.
   Enter or copy/paste the code emailed to verify the email in the **Confirm** dialog.
   
   ![SMTPSetupVerifyEmail](/images/TrueCommand/Users/SMTPSetupVerifyEmail.png "SMTP Setup Verify Email")

### Configuring PagerDuty

Open the **Configure Plugin** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> for PagerDuty.
Enter the pagerDuty API key in the **Authtoken** field. 
If you have an active subscription with PagerDuty, the key should be available to you. Click **TEST**.

![AlertServicesPagerDutyOptions](/images/TrueCommand/Alerts/AlertServicesPagerDutyOptions.png "Alert Services: Pager Duty options")

Log in to your PagerDuty account and check for open incidents.
You should see the triggered test alert from TrueCommand.

![PagerDutyTestConfirm](/images/TrueCommand/PagerDutyTestConfirm.png "Confirming the Pager Duty test")

If you did not receive a test alert, check the PagerDuty API key for accuracy in the alert service plugin configuration section.

{{< taglist tag="tcadmin" limit="10" title="Related Admin Guide Articles" >}}
{{< taglist tag="tcuser" limit="10" title="Related User Guide Articles" >}}