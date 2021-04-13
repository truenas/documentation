---
title: "Interface Overview"
weight: 20
---

{{< toc >}}

## First Time Login

### Creating the Administrator Account

When accessing the interface for the first time you will need to create an admin account. 

![TrueCommand Admin Creation](/images/TrueCommand/2.0/FirstLogin.png "TrueCommand Admin Creation")

* Enter a username and password.

*  Read the Terms of Service, set **I have read and agree to the terms of service**, and click **SIGN UP**.

* The admin login credentials will be created and you will be presented with the login page.

![TrueCommand Admin Sign In](/images/TrueCommand/2.0/LoginAdmin.png "TrueCommand Admin Sign In")

You can now log in to the TrueCommand web interface with the new administrator account credentials.

## Top Bar

![TopBar](/images/TrueCommand/2.0/TopBar.png "Top Bar")

The Top Bar has various quick links, configuration options, Alerts, and Menus.

+ Clicking <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> opens the [Cluster Volume]({{< relref "" >}}) Page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [Reports]({{< relref "" >}}) page. 
+ Clicking <mat-icon role="img" mattooltip="Toggle documentation tooltips" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">help</mat-icon> toggles Documentation Tooltips.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-palette" mattooltip="Theme settings" class="mat-icon mdi mdi-palette mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [Theme Settings Dropdown]({{< relref "" >}}).
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-bell" class="mat-icon mdi mdi-bell mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [Alert Notifications]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <i class="material-icons" aria-hidden="true" title="Settings">settings</i> opens the Settings Menu dropdown.
+ The User Menu will display your user avatar. If no avatar has been set it will show your default user gravtar. Clicking the User menu will open the the User Menu dropdown.

### Themeing 

TrueCommand includes the ability to customize the alert colors to user preferences.
The Theme pallet is located in the top banner on the right.
To open the theme configuration menu, click the <i class="material-icons" aria-hidden="true" title="Palette">palette</i> icon.

![ThemeSelect](/images/TrueCommand/2.0/ThemePallete.png "Theme Select")

To change a color, click on the color to open a selection menu. Select the desired color or enter its HEX color value.

![ThemeCustomize](/images/TrueCommand/2.0/ThemePalleteCustom.png "Theme Customize")

To remove changes and revert to the currently saved settings, click *Reset*.
To reset all colors to the application defaults, click *Defaults*.

### Settings Menu

The Settings mention has the following options:

+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-view-dashboard" class="mat-icon mdi mdi-view-dashboard mat-icon-no-color" aria-hidden="true" ></mat-icon> opens the main TrueCommand Dashboard.
+ Clicking <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> opens the [Cluster Volume]({{< relref "" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [iSCSI Manager]({{< relref "" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [Reports]({{< relref "/TrueCommand/Reports/Creation.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">playlist_add_check</mat-icon> opens the [Alerts]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">notification_important</mat-icon> opens the [Alert Rules]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-cloud-alert" class="mat-icon mdi mdi-cloud-alert mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [Alert Services]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">settings_remote</mat-icon> opens the [Systems]({{< relref "/TrueCommand/Administration/Systems.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> opens the [Users]({{< relref "/TrueCommand/Administration/Users.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">supervised_user_circle</mat-icon>  opens the [Teams]({{< relref "/TrueCommand/Administration/Users.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">short_text</mat-icon> opens the [Logs]({{< relref "/TrueCommand/Administration/SystemLog.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">vpn_key</mat-icon> opens the [Administration]({{< relref "/TrueCommand/Administration/Settings.md" >}}) page.


### User Menu

The Settings mention has the following options:

+ Clicking 
Profile
<mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> opens the [User Account]({{< relref "/TrueCommand/Administration/Users.md" >}}) page.

API
<mat-icon role="img" fontset="mdi" fonticon="mdi-swap-vertical-bold" class="mat-icon mdi mdi-swap-vertical-bold mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [API]({{< relref "/TrueCommand/API/_index.md" >}}) Testing page.

EULA
<mat-icon role="img" fontset="mdi" fonticon="mdi-file-document-edit" class="mat-icon notranslate mdi mdi-file-document-edit mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [TrueCommand EULA]({{< relref "/TrueCommand/Introduction/TCTermsOfService.md" >}}).

Log Out
<mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">exit_to_app</mat-icon> logs the user out of TrueCommand.

