---
title: "First Time Login"
weight: 20
aliases: 
 - /scale/gettingstarted/firsttimelogin/
tags:
- scalesignin
- scaledashboard
- scaleenterprise
- scaleconfig
---

{{< toc >}}


Now that you have installed TrueNAS SCALE or migrated from TrueNAS CORE to SCALE, you can log into the SCALE web user interface (UI) to complete your initial system configuration and then begin managing data!
{{< hint warning >}}
Important! Use only the web user interface (UI) to make configuration changes to the system.
{{< /hint >}}

{{< expand "Can I configure TrueNAS SCALE using a CLI?" "v" >}}
After installing TrueNAS, you can configure and use the system through the UI.

By default, using the command-line interface (CLI) to modify the system *does not* modify the settings database. If the system restarts it reverts to the original database settings and wipes any user-made command line changes. 

A future release of SCALE Bluefin will introduce the SCALE CLI that allows administrators, experienced with CLI configuration, to use it to configure SCALE settings just as in the UI.
{{< /expand >}}

## Web Interface Access

TrueNAS automatically creates several ways to access the UI, but you might need to adjust the default settings for your network environment.

By default, fresh installs of TrueNAS SCALE provide a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, either connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces to access the web UI.
On networks that support Multicast Domain Name Services (mDNS), the system can use a host name and domain to access the TrueNAS web interface.
By default, TrueNAS uses the host name and domain **truenas.local**. 
To change the host name and domain in the web interface, go to **Network** and click **Settings** on the **Global Configuration** card.

To access the web interface using an IP address, either use the IP address displayed at the top of the Console Setup Menu after installing SCALE or use the IP address you assigned in the [Consoled Setup Menu]({{< relref "/SCALE/GettingStarted/install/ConsoleSetupMenuSCALE.md" >}}) article.

{{< enterprise >}}
SCALE Enterprise (HA) systems can use the DHCP-assigned IP address for the primary controller to access the UI or, if a static IP is configured using the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}), use that IP address to access to the SCALE UI. 
{{< /enterprise >}}

## Logging Into the SCALE UI

Using a computer with access to the same network as the TrueNAS system, enter the host name and domain or IP address in a web browser to connect to the SCALE web interface.

{{< hint info >}}
The browser you use can impact the quality of your user experience. We generally recommend using Firefox, Edge, or Chrome.
{{< /hint >}}

{{< include file="/_includes/RootLoginWarnSCALE.md" type="page" >}}

With the implementation of rootless login, root is no longer the default administrator username, rather you use the new admin user created during the installation process. 
We recommend creating the admin user during the installation process and using it to log into SCALE.

Based on the authentication method selected in step 4 of the SCALE [TrueNAS installer Console Setup]({{< relref "InstallingScale.md#using-the-truenas-installer-console-setup" >}}) process, you could see one of three sign-in splash screen options for the web UI.

* Selecting **1. Administrative user (admin)** opens the SCALE sign-in screen to log in with the admin username and password created during installation.
* Selecting **2. Root user (not recommended)** opens the SCALE sign-in screen to log in with the root username and the root password created during installation.
* Selecting **3. Configuring using Web UI** opens a SCALE sign-in screen where you select the option for either the admin or root user and create the password.

If you select option 1, the root user still exists but with the password disabled by default, which means only the admin user can log into the system. 
You can activate the password for the root user for some limited uses, but you should return to a security-hardened operation by disabling the root password immediately after you finish with the limited use.

### Logging In as Admin

If you set up the admin user during the installation using the option **1. Administrative user (admin)**, enter the username **admin** and password you set up. 

![LoginScreenSCALE](/images/SCALE/22.12/LoginScreenSCALE.png "TrueNAS SCALE Login Screen")

To modify user credentials, go to **Credentials > Local Users**, click anywhere on the user row, then click **Edit**. For more information see [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}).

### Logging In as Root
{{< include file="/_includes/RootLoginDeprecatedSCALE.md" type="page" >}}
If installed SCALE and created the root user rather than setting up an admin user during the installation process, log into the UI as the root user with the root password. 

To create an admin user go to **Credentials > Local Users**, and click **Add** to open the **Add User** screen. 
Follow the directions in [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}) to create an admin user with all the settings it requires.

### Creating an Administrator Account at First Log in
Selecting the option **3. Configuring using Web UI** during the installation asks you to create the root or administration user when you first log into SCALE. This option presents a sign-in splash screen with two radio buttons.

![FirstTimeLoginInstallOpt3SCALE](/images/SCALE/22.12/FirstTimeLoginInstallOpt3SCALE.png "TrueNAS SCALE Login Screen Set Admin Password")

Select either the admin or root user (not recommended) option, then enter the password to use with that user.

If you chose **Root user (not recommended)** as the TrueNAS authentication method, go to the **Credentials > Local Users** screen. [Create the admin account]({{< relref "ManageLocalUsersSCALE.md" >}}) immediately after you enter the UI. Create the [admin user account settings]({{< relref "ManageLocalUsersSCALE.md" >}}), enable the password, and click **Save**. After setting up the admin user, edit the root user to disable the password and resume rootless login security hardening.

{{< expand "What happens if I disable both admin and root passwords at the same time?" "V">}}
If you disabled the root user password and did not create the admin user and enable that password, or you disable both admin and root user passwords and your session times out before you enable one of the passwords, SCALE displays a sign-in screen that allows you create a temporary password for one-time access. 

![CreateAdminAccountAtFirstTimeLogin](/images/SCALE/22.12/CreateAdminAccountAtFirstTimeLogin.png "Set New Root Account Password Sign In Screen") change image

### Troubleshooting Accessing the Web UI

{{< hint warning >}}
This option does not configure the admin or root user account. 
The password entered is a one-time user access password. 
You must go to the **Credentials > Local Users** screen and [create the admin account]({{< relref "ManageLocalUsersSCALE.md" >}}) immediately after you enter the UI.
{{< /hint >}}
{{< /expand >}}
{{< expand "UI is not accessible by IP address" "V" >}}
If the user interface is not accessible by IP address from a browser, check these things:

* If the browser configuration has proxy settings enabled, disable them and try connecting again.
* If the page does not load, ensure a `ping` reaches the TrueNAS system IP address. If the IP address is in a private range, you must access it from within that private network.
{{< /expand >}}
{{< expand "UI displays but seems unresponsive" "v" >}}
If the web interface displays but seems unresponsive or incomplete:

* Make sure the browser allows cookies, Javascript, and custom fonts from the TrueNAS system.
* Try a different browser. We recommend Firefox.

If the UI becomes unresponsive after an upgrade or other system operation, clear the site data and refresh the browser (<kbd>Shift</kbd>+<kbd>F5</kbd>).
{{< /expand >}}

If you cannot remember the administrator password to log in to the web interface, connect a keyboard and mouse to the TrueNAS system and open the [console setup menu]({{< relref "ConsoleSetupMenuScale.md#changing-the-root-password" >}}) to reset the root account password.

## Introducing the Main SCALE Dashboard

{{< expand "Dashboard Video Tutorial" >}}

{{< embed-video name="scaledashboardtour" >}}

{{< /expand >}}
After logging in for the first time, you see the main system **Dashboard** screen. 
The **Dashboard** displays basic information about the installed version, systems component usage, and network traffic. 
{{< enterprise >}}
SCALE Enterprise users with an iXsystems-provided TrueNAS server, also see an image of the system in the **System Information** widget. Click on the system image to open the **System Settings > [View Enclosure]({{< relref "EnclosureScreensSCALE.md" >}})** screen. 

![DashboardMainScreenSCALE](/images/SCALE/22.12/DashboardMainScreenSCALE.png "TrueNAS SCALE Dashboard")

{{< /enterprise >}}
The **Dashboard** for non-Enterprise systems displays the TrueNAS logo on the **System Information** widget. 

You can reorder dashboard widgets by clicking **Reorder** and then dragging them into your preferred order. You can also choose which widgets appear on the dashboard by clicking **Configure**.

![DashboardConfigureScreenSCALE](/images/SCALE/22.12/DashboardConfigureScreenSCALE.png "Dashboard Configure Panel")

## Introducing SCALE Navigation Options

The top row (toolbar) has links to outside resources and buttons to control the system.
The left-hand panel lists the main feature and functional areas and lets users navigate to the various TrueNAS Configuration screens.

### Top Toolbar

The icon buttons in the top toolbar menu link to the iXsystems site, display the status of TrueCommand and directory servers, and show system processes, and configuration menus. You can also collapse and expand the main function menu on the left side of the screen. 

![TopToolbar](/images/SCALE/22.12/TopToolbar.png "TrueNAS SCALE Top Toolbar Icons")

The SCALE top navigation top toolbar provides access to functional areas of the UI that you might want to directly access while on other screens in the UI. 
Icon buttons provide quick access to dropdown lists of options, dropdown panels with information on system alerts or tasks, and can include access to other information or configuration screens.
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
The **Alerts** <span class="material-icons">notifications</span> icon displays a list of current alerts for your TrueNAS system and provides access to alert-related settings. 
Users can dismiss individual alerts or select the option to dismiss all alerts at once.

The <span class="material-icons">settings</span> icon opens the dropdown list of alert options to view or configure **Alert Settings**, **Alert Services**, and **Email**.

![AlertsNotifications](/images/SCALE/22.12/AlertsNotifications.png "TrueNAS SCALE Alerts")

For more information on alert options see [Alerts]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/_index.md" >}}). The [Alert Services]({{< relref "AlertServicesScreen.md" >}}), [Alert Settings]({{< relref "AlertSettingsScreen.md" >}}), or [Email Screens]({{< relref "EmailScreens.md">}}) articles provide information on the SCALE UI screens. 

See [Setting Up Email]({{< relref "SettingUpSystemEmail.md" >}}) for help configuring instructions.
{{< enterprise >}}
The [Alert Settings]({{< relref "AlertSettingsScreen.md" >}}) article includes the SCALE Enterprise alert high availability settings.
{{< /enterprise >}}
{{< /expand >}}

{{< expand "Settings" "v" >}}
The **Settings** <span class="material-icons">account_circle</span> icon opens a dropdown list of options for passwords, API keys, and TrueNAS information.
{{< expand "Change Password" >}}

{{< include file="/content/_includes/ChangeLoggedInUserPassword.md" type="page" >}}

{{< /expand >}}
{{< expand "API Keys" "v" >}}
Click on **API Keys** <span class="material-icons">laptop</span> to add an API key. API keys identify an outside resource or application without a principal. 
For example, when adding a new system to TrueCommand you are required to add an API key to authenticate the system. Use this function to create an API key for this purpose.

Click **API Docs** to access the API documentation portal with information on TrueNAS SCALE API commands.

See [API Keys]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Settings/APIKeysScreen.md" >}}) for more information on adding or managing API keys.
{{< /expand >}}
{{< expand "Guide and About" "v" >}}
Click on **Guide** <span class="material-icons">library_books</span> to open the TrueNAS Documentation Hub in a new tab.

Click on **About** <span class="iconify" data-icon="ant-design:info-circle-outlined"></span> to display the information window with links to the TrueNAS Documentation Hub, TrueNAS Community Forums, FreeNAS Open Source Storage Appliance GitHub repository, and iXsystems home page.

![TrueNASAboutScreenSCALE](/images/SCALE/22.12/TrueNASAboutScreenSCALE.png "About TrueNAS Window")

{{< /expand >}}
{{< /expand >}}

{{< expand "Power Options" "v" >}}
Click the **Power** <span class="material-icons">power_settings_new</span> button open the dropdown list of power options. Options are **Log Out** which logs you out of the SCALE UI but does not power off the system, **Restart** which logs you out of the SCALE UI and restarts the server, or **Shut Down** which logs you out of the SCALE UI and powers off the system as though you pressed the power button on the physical server.
{{< /expand >}}

## Next Steps

Now that you can access the TrueNAS SCALE web interface and see all the management options, you can begin [configuring your system]({{< relref "UIConfigurationSCALE.md" >}})!

{{< taglist tag="scaleconfig" limit="10" title="Related Configuration Articles" >}}

