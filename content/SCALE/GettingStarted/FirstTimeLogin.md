---
title: "First Time Login"
weight: 60
---

Now that you have installed and configured TrueNAS SCALE, you can log in to the web interface and begin managing data!

{{< expand "Can I configure TrueNAS SCALE using a CLI?" "v" >}}
After installing TrueNAS, you can configure and use the system through the web interface.

{{< hint warning >}}
**Important:** Use only the web interface to make configuration changes to the system.
{{< /hint >}}

By default, using the command-line interface (CLI) to modify the system **does not modify the settings database**.
The system reverts to the original database settings when it restarts and wipes any user-made command line changes.
TrueNAS automatically creates several ways to access the web interface, but you might need to adjust the default settings for your network environment.
{{< /expand >}}

## Web Interface Access

By default, fresh installs of TrueNAS SCALE provide a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces to access the web UI.
On networks that support Multicast Domain Name Services (mDNS), the system can use a hostname and domain to access the TrueNAS web interface.
By default, TrueNAS uses the hostname and domain truenas.local.
To change the hostname and domain in the web interface, go to **Network** and click **Settings** in the **Global Configuration** pane.

To access the web interface using an IP address, use the one that the Console Setup Menu generated after installing SCALE, or use the one you configured in the [Post-install Configuration article]({{< relref "Post-installConfiguration.md" >}}) if you upgraded from CORE.

Create a strong login password!
You can reset the root password in the TrueNAS console setup menu or web interface by going to **Credentials > Local Users** and editing the `root` user.

## Logging In

On a computer with access to the same network as the TrueNAS system, enter the hostname and domain or IP address in a web browser to connect to the web interface.

![LoginSCALE](/images/SCALE/LoginSCALE.png "TrueNAS SCALE Login Screen")

Enter the `root` username and account password you created during installation.

{{< expand "Troubleshooting" "v" >}}
If the user interface is not accessible by IP address from a browser, check these things:

* If the browser configuration has proxy settings enabled, disable them and try connecting again.
* If the page does not load, ensure a `ping` reaches the TrueNAS system IP address. If the IP address is in a private range, you must access it from within that private network.

If the web interface displays but seems unresponsive or incomplete:

* Make sure the browser allows cookies, Javascript, and custom fonts from the TrueNAS system.
* Try a different browser. We recommend Firefox.

If the UI becomes unresponsive after an upgrade or other system operation, clear the site data and refresh the browser (<kbd>Shift</kbd>+<kbd>F5</kbd>).
{{< /expand >}}

## Dashboard

{{< embed-video name="scaletour" >}}

After logging in, you see the system **Dashboard**.
**Dashboard** displays basic information about the installed version, systems component usage, and network traffic. For users with compatible TrueNAS
Hardware, clicking the system image takes you to the **System Settings > Enclosure** page. 

![DashboardSCALE](/images/SCALE/DashboardSCALE.png "TrueNAS SCALE Dashboard")

The **Dashboard** provides access to all TrueNAS management options.
The top row has links to outside resources and buttons to control the system.
The left-hand column lets users navigate to the various TrueNAS Configuration screens.

You can reorder dashboard widgets by clicking **Reorder** and then dragging them into your preferred order. You can also choose which widgets appear on the dashboard by clicking **Configure**.

![ConfigureWidgetsSCALE](/images/SCALE/ConfigureWidgetsSCALE.png "Dashboard Configuration")

## Top Bar Menu

Buttons in the top bar menu link to the iXsystems site, display the status of TrueCommand, and show system processes and configuration menus.

![TopRowSCALE](/images/SCALE/TopRowSCALE.png "TrueNAS SCALE Dashboard Top Row Icons")

{{< tabs "Top Row Menu" >}}
{{< tab "iXsystems" >}}
The iXsystems button opens the [iXsystems home page](https://www.ixsystems.com/). There, users can find information about storage and server systems.

Users can also use the iXsystems home page to access their customer portal and community section for support.
{{< /tab >}}

{{< tab "Status of TrueCommand" >}}
The **Status of TrueCommand** button lets users sign up with and connect to [TrueCommand Cloud]({{< relref "/content/TrueCommand/_index.md" >}}).

![StatusOfTrueCommandSCALE](/images/SCALE/StatusOfTrueCommandSCALE.png "Status of TrueCommand")

Clicking **SIGNUP** opens the TrueCommand signup page in a new tab.

![SignUpTrueCommandSCALE](/images/SCALE/SignUpTrueCommandSCALE.png "TrueCommand Cloud Signup")

After users sign up, they can click the **CONNECT** button and enter their API key to connect SCALE to TrueCommand Cloud.

![ConnectToTrueCommandSCALE](/images/SCALE/ConnectToTrueCommandSCALE.png "Connect to TrueCommand Cloud")
{{< /tab >}}

{{< tab "Directory Services Monitor" >}}
The Directory Services Monitor displays the status of Active Directory and LDAP. Clicking them takes you to their respective configuration screens. 

![DirectoryServicesMonitorSCALE](/images/SCALE/DirectoryServicesMonitorSCALE.png "Directory Services Monitor")
{{< /tab >}}

{{< tab "Task Manager" >}}
The Task Manager displays all running and failed jobs/processes. Error and Alert dialog boxes that were manually closed can be accessed in the Task Manager.

![TaskManagerSCALE](/images/SCALE/TaskManagerSCALE.png "TrueNAS SCALE Task Manager")

Users can click the **History** button to open the **Jobs** screen. **Jobs** lists all successful, active, and failed jobs. Users can also click **View Logs** next to a failed process to view its log information and error message.

![TaskManagerHistorySCALE](/images/SCALE/TaskManagerHistorySCALE.png "Task Manager History")
{{< /tab >}}

{{< tab "Alerts" >}}
The **Alerts** button displays the **Alerts** menu, which shows all current alerts. Users can dismiss them individually or all at once.

The **Alerts** menu also lets users configure **Alert Settings**, **Alert Services**, and **Email**.

### Alert Settings

The **Alert Settings** screen has options for setting the warning level and frequency for alerts specific to application actions.

![AlertSettingsSCALE](/images/SCALE/AlertSettingsSCALE.png "TrueNAS SCALE Alert Settings")

The **Set Warning Level** drop-downs customize alert importance. Each warning level has an icon and color to express the level of urgency.

The **Set Frequency** drop-downs adjust how often the system sends alert notifications. Setting the **Frequency** to *NEVER* prevents that alert from being in the **Alerts** menu, but it still pops up in the UI if triggered.

#### Alert Warning Levels

Each warning level has a different icon and color to express its urgency. To make the system email you when alerts with a specific warning level trigger, set up an email Alert Service with that warning level. 

| Level | Icon | Alert Notification? |
|-------|------|-------------|
| 1 INFO | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | No |
| 2 NOTICE | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
| 3 WARNING | ![AlertLevelWarning](/images/SCALE/AlertLevelWarning.png "Alert Levels") | Yes |
| 4 ERROR | ![AlertLevelErrorCritical](/images/SCALE/AlertLevelErrorCritical.png "Alert Levels") | Yes |
| 5 CRITICAL | ![AlertLevelErrorCritical](/images/SCALE/AlertLevelErrorCritical.png "Alert Levels") | Yes |
| 6 ALERT | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
| 7 EMERGENCY | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |

### Alert Services

The **Alert Services** screen has options to create and edit alert services. The **Alert Services** screen displays existing services in a list that users can filter by **Type**, **Level**, and **Enabled**.

![AlertServicesSCALE](/images/SCALE/AlertServicesSCALE.png "TrueNAS SCALE Alert Services")

To create a new alert service, click **Add** and fill out the form, then click **Save**.

![NewAlertServiceSCALE](/images/SCALE/NewAlertServiceSCALE.png "New TrueNAS SCALE Alert Service")

**Name and Type**

| Setting | Description |
|---------|-------------|
| Name | Name of the new alert service. |
| Enabled | Unset to disable this service without deleting it. |
| Type | Choose an alert service to display options for that service. |
| Level | Select the level of severity. |

**Authentication**

| Setting | Description |
|---------|-------------|
| AWS Region | Enter the [AWS account region](https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html). |
| ARN | Topic [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) for publishing. Example: arn:aws:sns:us-west-2:111122223333:MyTopic. |
| Key ID | Access Key ID for the linked AWS account. |
| Secret Key | Secret Access Key for the linked AWS account. |

The **SEND TEST ALERT** button generates a test alert to confirm the alert service works correctly.

### Email

The **Email** screen lets you set up a system email address.

![AlertEmailSCALE](/images/SCALE/AlertEmailSCALE.png "Email General Options")

| Setting | Description |
|---------|-------------|
| From Email | The user account Email address to use for the envelope From email address. The user account Email in Accounts > Users > Edit must be configured first. |
| From Name | The friendly name to show in front of the sending email address. Example: *Storage System 01<it@example.com>* |
| SMTP | Enable SMTP configuration. |
| GMail OAuth | Enable GMail OAuth authentication. |
| Outgoing Mail Server | Hostname or IP address of SMTP server to use for sending this email. |
| Mail Server Port | MTP port number. Typically 25,465 (secure SMTP), or 587 (submission). |
| Security | [Email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html) type. Choices are **Plain (No Encryption)**, **SSL (Implicit TLS)**, or **TLS (STARTTLS)**. |
| SMTP Authentication | Enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using PLAIN SASL. Requires a valid Username and Password. |

The **Send Test Mail** button generates a test email to confirm the system email works correctly.
{{< /tab >}}

{{< tab "Settings" >}}
The **Settings** button has options for passwords, web interface preferences, API Keys, and TrueNAS information.

### Change Password

Clicking **Change Password** allows users to change the currently logged-in administrator password.

### Preferences

Clicking **Preferences** lets users select general preferences for the system.

![WebInterfacePreferencesSCALE](/images/SCALE/WebInterfacePreferencesSCALE.png "Web Interface Preferences")

| Setting | Description |
|---------|-------------|
| Choose Theme | Choose a preferred theme. |
| Prefer buttons with icons only | Preserve screen space with icons and tooltips instead of text labels. |
| Enable Password Toggle | When set, an eye icon appears next to password fields. Clicking the icon reveals the password. |
| Reset Table Columns to Default | Reset all tables to display default columns. |
| Retro Logo | Revert branding to FreeNAS. |
| Reset All Preferences to Default | Reset all user preferences to their default values (custom themes are preserved). |

### API Keys

The **API Keys** section lets users add API keys that identify outside resources and applications without a principal.

Users can also click **DOCS** to access their system API documentation.

### Guide and About

Clicking the **Guide** button opens the TrueNAS Documentation Hub in a new tab.

Clicking the **About** button displays links to the TrueNAS Documentation Hub, the TrueNAS Community Forums, the FreeNAS Open Source Storage Appliance GitHub repository, and the iXsystems homepage.
{{< /tab >}}

{{< tab "Power" >}}
The **Power** button lets the user log out of, restart, or shut down the system.
{{< /tab >}}
{{< /tabs >}}

## Storing Data

Now that you can access the TrueNAS web interface and see all the management options, you can begin [storing data]({{< relref "/SCALE/SCALEUIReference/Storage/_index.md" >}})!
