---
title: "Interface Overview"
weight: 20
---

{{< toc >}}

## First Time Login

### Creating the Administrator Account

When accessing the interface for the first time, you need to create an admin account. 

![TrueCommand Admin Creation](/images/TrueCommand/2.0/FirstLogin.png "TrueCommand Admin Creation")

* Enter a username and password.

* Read the Terms of Service, set **I have read and agree to the terms of service**, and click **SIGN UP**.

TrueCommand creates the admin login credentials and displays the login page.

![TrueCommand Admin Sign In](/images/TrueCommand/2.0/LoginAdmin.png "TrueCommand Admin Sign In")

You can now log in to the TrueCommand web interface with the new administrator account credentials.

### Resetting a User Password on the Login Screen

{{< include file="static/includes/TrueCommand/2.1/ResettingUserPassword.md.part" markdown="true" >}}

## Top Bar

![TopBar](/images/TrueCommand/2.1/TopBar.png "Top Bar")

The top bar has various quick links, configuration options, alerts, and menus.

+ Clicking <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> opens the [**Cluster Volume**]({{< relref "" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [**iSCSI Manager**]({{< relref "/TrueCommand/systemmanagement/multisystems.md" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [**Reports**]({{< relref "" >}}) page. 
+ Clicking <mat-icon role="img" mattooltip="Toggle documentation tooltips" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">help</mat-icon> toggles documentation tooltips.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-palette" mattooltip="Theme settings" class="mat-icon mdi mdi-palette mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [**Theme settings**]({{< relref "" >}}) dropdown.
+ Clicking <i class="material-icons" aria-hidden="true" title="Newspaper">newspaper</i> opens a dialog window with a TrueCommand releases and maintenance news feed.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-bell" class="mat-icon mdi mdi-bell mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [**Alert Notifications**]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <i class="material-icons" aria-hidden="true" title="Settings">settings</i> opens the settings menu dropdown.
+ Clicking the user avatar displays the user **Profile** option where you can set a custom avatar to change the default user gravtar. It also provides access to the **API Interface**, the **EULA** and the **Log Out** options.

### Themeing

TrueCommand includes the ability to customize the alert colors to user preferences.
The **Theme settings** pallet is located in the top banner on the right.
To open the theme configuration menu, click the <i class="material-icons" aria-hidden="true" title="Palette">palette</i> icon.

![ThemeSelect](/images/TrueCommand/2.0/ThemePallete.png "Theme Select")

To change a color, click on the color to open a selection menu, then choose a color or enter its HEX color value.

![ThemeCustomize](/images/TrueCommand/2.0/ThemePalleteCustom.png "Theme Customize")

To remove changes and revert to the currently saved settings, click **RESET**.
To reset all colors to the application defaults, click **DEFAULTS**.

### Settings Menu

The Settings menu has the following options:

+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-view-dashboard" class="mat-icon mdi mdi-view-dashboard mat-icon-no-color" aria-hidden="true" ></mat-icon> opens the main TrueCommand Dashboard.
+ Clicking <mat-icon _ngcontent-ahp-c196="" role="img" fontset="mdi" fonticon="mdi-chip" class="mat-icon notranslate mdi mdi-chip mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-chip" data-mat-icon-namespace="mdi"></mat-icon> opens the [**System Inventory**]({{< relref "/TrueCommand/systemmanagement/multisystems.md" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> opens the [Cluster Volume]({{< relref "" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [iSCSI Manager]({{< relref "/TrueCommand/systemmanagement/multisystems.md" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [**Reports**]({{< relref "/TrueCommand/Reports/Creation.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">playlist_add_check</mat-icon> opens the [All Alerts]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">notification_important</mat-icon> opens the [Alert Rules]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-cloud-alert" class="mat-icon mdi mdi-cloud-alert mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [Alert Services]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">settings_remote</mat-icon> opens the [Systems]({{< relref "/TrueCommand/Administration/Systems.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> opens the [Users]({{< relref "/TrueCommand/Administration/Users.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">supervised_user_circle</mat-icon>  opens the [Teams]({{< relref "/TrueCommand/Administration/Users.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">short_text</mat-icon> opens the [Logs]({{< relref "/TrueCommand/Administration/SystemLog.md" >}}) page.
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">vpn_key</mat-icon> opens the [Administration]({{< relref "/TrueCommand/Administration/Settings/_index.md" >}}) page.

### User Menu

The user menu (avatar) has the following options:

+ Clicking <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> opens the [**Users**]({{< relref "/TrueCommand/Administration/Users.md" >}}) page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-swap-vertical-bold" class="mat-icon mdi mdi-swap-vertical-bold mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [**API Interface**]({{< relref "/TrueCommand/API/_index.md" >}}) testing page.
+ Clicking <mat-icon role="img" fontset="mdi" fonticon="mdi-file-document-edit" class="mat-icon notranslate mdi mdi-file-document-edit mat-icon-no-color" aria-hidden="true"></mat-icon> opens the [TrueCommand EULA]({{< relref "/TrueCommand/Notices/TCTermsOfService.md" >}}).
+ Clicking <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">exit_to_app</mat-icon> logs the user out of TrueCommand.