---
title: "First Time Login"
weight: 50
tags:
- scalelogin
- scalesettings
- scaleinstall
- scaledashboard
- scalemigrate
---

{{< toc >}}


Now that you have installed and configured TrueNAS SCALE, you can log in to the web interface and begin managing data!

{{< expand "Can I configure TrueNAS SCALE using a CLI?" "v" >}}
After installing TrueNAS, you can configure and use the system through the web interface.

{{< hint warning >}}
Important! Use only the web interface to make configuration changes to the system.
{{< /hint >}}

By default, using the command-line interface (CLI) to modify the system *does not* modify the settings database.
The system reverts to the original database settings when it restarts and wipes any user-made command line changes.
TrueNAS automatically creates several ways to access the web interface, but you might need to adjust the default settings for your network environment.
{{< /expand >}}

## Web Interface Access

By default, fresh installs of TrueNAS SCALE provide a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces to access the web UI.
On networks that support Multicast Domain Name Services (mDNS), the system can use a host name and domain to access the TrueNAS web interface.
By default, TrueNAS uses the host name and domain truenas.local.
To change the host name and domain in the web interface, go to **Network** and click **Settings** in the **Global Configuration** card.

To access the web interface using an IP address, use the one that the Console Setup Menu generated after installing SCALE, or use the one you configured in the [Post-install Configuration article]({{< relref "/SCALE/GettingStarted/install/ConsoleSetupMenuSCALE.md" >}}) if you upgraded from CORE.

## Logging In

On a computer with access to the same network as the TrueNAS system, enter the host name and domain or IP address in a web browser to connect to the web interface.

{{< hint info >}}
The quality of your user experience can be impacted by the browser that you use. We generally recommend using Firefox, Edge, or Chrome.
{{< /hint >}}

With the implementation of rootless login and based on your Authentication Method selection in the SCALE [TrueNAS installer]({{< relref "InstallingScale.md" >}}), you could see one of three sign-in options for the web UI:

!![SCALEInstallerConsoleSetupAdminAccount](/images/SCALE/22.12/SCALEInstallerConsoleSetupAdminAccount.png "Admin User Screen")

* 1. Logging in as the new admin user, entering the admin username and password created during installation.
* 2. Logging in as the root user, entering root as the username and the root password created during installation.
* 3. Configuring a login when you first log into the UI.

Use the administrative account credentials to log in.
The default administrator username is no longer root but the administrative user created during installation.

{{< include file="/_includes/RootLoginWarnSCALE.md" type="page" >}}

### Logging In As Admin

If you set up the admin user during the installation, enter the admin username and password you set up. 

![LoginScreenSCALE](/images/SCALE/22.12/LoginScreenSCALE.png "TrueNAS SCALE Login Screen")

Note, the root user still exists but the password is disabled by default so that only the admin user can log into the system. 
To modify user credentials, go to **Credentials > Local Users**, click anywhere on the user row, then click **Edit**. For more information see [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}).

### Logging In as Root
{{< include file="/_includes/RootLoginDeprecatedSCALE.md" type="page" >}}
If you did not set up an admin user during the installation process, log into the UI as the root user with the root password. 
Go to **Credentials > Local Users**, and click **Add** to open the **Add User** screen. 
Follow the directions in [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}) to create an admin user with all the permissions it requires.

### Creating a Login at First Login
{{< hint warning >}}
This option does not configure the admin or root user account. 
The password entered is a one-time user access password. 
You must go to the **Credentials > Local Users** screen and [create the admin account]({{< relref "ManageLocalUsersSCALE.md" >}}) immediately after you enter the UI.
{{< /hint >}}

If you selected the option to create a new user when you log into the web UI the first time, the **Set new root account password** sign-in splash screen opens after you enter the system IP address into a browser search bar. 

![CreateAdminAccountAtFirstTimeLogin](/images/SCALE/22.12/CreateAdminAccountAtFirstTimeLogin.png "Set New Root Account Password Sign In Screen")

### Troubleshooting Accessing the Web UI
If the user interface is not accessible by IP address from a browser, check these things:

* If the browser configuration has proxy settings enabled, disable them and try connecting again.
* If the page does not load, ensure a `ping` reaches the TrueNAS system IP address. If the IP address is in a private range, you must access it from within that private network.

If the web interface displays but seems unresponsive or incomplete:

* Make sure the browser allows cookies, Javascript, and custom fonts from the TrueNAS system.
* Try a different browser. We recommend Firefox.

If the UI becomes unresponsive after an upgrade or other system operation, clear the site data and refresh the browser (<kbd>Shift</kbd>+<kbd>F5</kbd>).

If you cannot remember the administrator password to log in to the web interface, connect a keyboard and mouse to the TrueNAS system and open the [console setup menu]({{< relref "ConsoleSetupMenuScale.md#changing-the-root-password" >}}) to reset the `root` account password.


## Dashboard

{{< expand "Dashboard Video Tutoral" >}}

{{< embed-video name="scaledashboardtour" >}}

{{< /expand >}}
After logging in, you see the system **Dashboard** screen.
**Dashboard** displays basic information about the installed version, systems component usage, and network traffic. For users with compatible TrueNAS
hardware, clicking the system image takes you to the **System Settings > Enclosure** page. 

![DashboardScreenTrueNASHardware](/images/SCALE/22.02/DashboardScreenTrueNASHardware.png "TrueNAS SCALE Dashboard")

The **Dashboard** provides access to all TrueNAS management options.
The top row has links to outside resources and buttons to control the system.
The left-hand column lets users navigate to the various TrueNAS Configuration screens.

You can reorder dashboard widgets by clicking **Reorder** and then dragging them into your preferred order. You can also choose which widgets appear on the dashboard by clicking **Configure**.

![DashboardConfigureOptions](/images/SCALE/22.02/DashboardConfigureOptions.png "Dashboard Configuration Options")

## Top Bar Menu

The icon buttons in the top toolbar menu link to the iXsystems site, display the status of TrueCommand and directory servers, and show system processes, and configuration menus. You can also collapse and expand the main function menu on the left side of the screen. 

![TopToolbar](/images/SCALE/22.02/TopToolbar.png "TrueNAS SCALE Top Toolbar Icons")

### Top Toolbar Icons
{{< expand "iXsystems" "v" >}}
The iXsystems logo opens the [iXsystems home page](https://www.ixsystems.com/). There, users can find information about storage and server systems.

Users can also use the iXsystems home page to access their customer portal and community section for support.
{{< /expand >}}

{{< expand "Status of TrueCommand" "v" >}}

{{< include file="/content/_includes/StatusOfTrueCommand.md" type="page" >}}

{{< /expand >}}
{{< expand "Directory Services Monitor" "v" >}}

{{< include file="/content/_includes/DirectoryServicesMonitor.md" type="page" >}}

{{< /expand >}}
{{< expand "Jobs" "v" >}}

{{< include file="/content/_includes/Jobs.md" type="page" >}}

{{< /expand >}}
{{< expand "Alerts" "v" >}}
The **Alerts** <span class="material-icons">notifications</span> icon button displays a list of current alerts for your TrueNAS system. Users can dismiss them one at a time or all at once.

It also provides an **Alerts** menu you access by clicking the <span class="material-icons">settings</span> icon. From this menu users can configure **Alert Settings**, **Alert Services**, and **Email**.

![AlertsNotifications](/images/SCALE/22.02/AlertsNotifications.png "TrueNAS SCALE Alerts")

{{< expand "Alert Settings" "v" >}}
The **Alert Settings** screen has options for setting the warning level and frequency for alerts specific to application actions.

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

Use the **Set Warning Level** dropdown list options to customize alert importance. Each warning level has an icon and color to express the level of urgency.

Use the **Set Frequency** dropdown list options adjust how often the system sends alert notifications. Setting the **Frequency** to **NEVER** prevents that alert from appearing in the **Alerts** list, but it still pops up in the UI if triggered.

Each warning level has a different icon and color to express its urgency. To make the system email you when alerts with a specific warning level trigger, set up an email alert service with that warning level. 

See [Alert Settings Screen]({{< relref "/SCALE/SCALEUIReference/Toptoolbar/Alerts/AlertSettingsScreen.md" >}}) for more information on settings.
{{< /expand >}}
{{< expand "Alert Services" "v" >}}
The **Alert Services** screen has options to create and edit alert services. It also displays existing services in a list that users can filter by **Type**, **Level**, and **Enabled**.

![AlertServicesScreen](/images/SCALE/22.02/AlertServicesScreen.png "TrueNAS SCALE Alert Services")

To create a new alert service, click **Add** and fill out the form, then click **Save**. 

Click **SEND TEST ALERT** to generate a test alert to confirm the alert service works.

See [Alert Services Screen]({{< relref "/SCALE/SCALEUIReference/Toptoolbar/Alerts/AlertServicesScreen.md" >}}) for more information on settings.
{{< /expand >}}
{{< expand "Email" "v" >}}
The **Email** screen lets you set up a system email address.

![AlertEmailScreen](/images/SCALE/22.02/AlertEmailScreen.png "Email General Options")

Click on **Send Test Mail** to generate a test email to confirm the system email works.

See [Email Screens]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/EmailScreens.md" >}}) for information on email settings.
{{< /expand>}}
{{< /expand >}}

{{< expand "Settings" "v" >}}
The **Settings** <span class="material-icons">account_circle</span> icon button has options for passwords, API Keys, and TrueNAS information.
{{< expand "Change Password" >}}

{{< include file="/content/_includes/ChangeLoggedInUserPassword.md" type="page" >}}

{{< /expand >}}
{{< expand "API Keys" "v" >}}
Click on **API Keys** <span class="material-icons">laptop</span> to add API keys that identify outside resources and applications without a principal. 
Users can also click **DOCS** to access their system API documentation.

See [API Keys]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Settings/APIKeysScreen.md" >}}) for more information on adding or managing API keys.
{{< /expand >}}
{{< expand "Guide and About" "v" >}}
Click on **Guide** <span class="material-icons">library_books</span> to open the TrueNAS Documentation Hub in a new tab.

Click on **About** <span class="iconify" data-icon="ant-design:info-circle-outlined"></span> to display the information window with links to the TrueNAS Documentation Hub, TrueNAS Community Forums, FreeNAS Open Source Storage Appliance GitHub repository, and iXsystems home page.

![AboutWindow](/images/SCALE/22.02/AboutWindow.png "About Window")

{{< /expand >}}
{{< /expand >}}

{{< expand "Power Options" "v" >}}
Click the **Power** <span class="material-icons">power_settings_new</span> icon button to either log out of, restart, or shut down the system.
{{< /expand >}}

## Storing Data

Now that you can access the TrueNAS web interface and see all the management options, you can begin [storing data]({{< relref "/SCALE/SCALEUIReference/Storage/_index.md" >}})!

{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}
