---
title: "Interface Overview"
description: "Defines the icons and navigation menus on the top TrueCommand toolbar banner, provides links to articles for each function, and explains how to customize alerts in the TrueCommand interface."
weight: 20
tags:
- tcinterface
- tctoptoolbar
- tcadmin
---

{{< toc >}}

The TrueCommand web interface provides administrator and non-administrator user access to system information screens and dashboards, reports, configuration, and other options through easy-to-use icons, menus and widgets (system information cards).

## Top Toolbar Icons Options

![TopBar](/images/TrueCommand/Dashboard/TopBar.png "Top Bar")

The top toolbar provides all users quick links to the two dashboards, various configuration options, alerts, and the two navigation menus.
{{< truetable >}}
| Icon | Description |
|------|-------------|
| ![TrueCommandIcon](/images/TrueCommand/Dashboard/TrueCommandIcon.png "TrueCommand Icon") | Opens the main [TrueCommand Dashboard]({{< relref "/TrueCommand/UserGuide/Dashboard.md" >}}). |
| <span class="iconify" data-icon="ri:heart-pulse-fill"></span> | Opens the [**Fleet Dashboard**]({{< relref "FleetDashboard.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> | Opens the [**Cluster Volume**]({{< relref "Clusters.md" >}}) page. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Reports**]({{< relref "/TrueCommand/UserGuide/Reports/Creation.md" >}}) page. |
| <mat-icon role="img" mattooltip="Toggle documentation tooltips" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">help</mat-icon> | Toggles documentation tooltips. |
| <i class="material-icons" aria-hidden="true" title="Palette">palette</i> | Opens the **[Theme Setting](#creating-themes-using-the-theme-settings-pallet)** menu dropdown. |
| <i class="material-icons" aria-hidden="true" title="Newspaper">newspaper</i> | Opens a dialog window with a TrueCommand releases and maintenance news feed. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-bell" class="mat-icon mdi mdi-bell mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Alert Notifications**]({{< relref "AlertManage.md" >}}) page. |
| <i class="material-icons" aria-hidden="true" title="Settings">settings</i> | Opens the **[Settings](#settings-menu)** menu dropdown. |
| User avatar | Opens the user menu with access to the **[Profile](#user-menu)**, **API Interface**, **EULA**, and **Log Out** options. |
{{< /truetable >}}

### Changing TrueCommand Theme Settings 
TrueCommand provides the ability to customize alert colors to suit user preferences.
The **Theme settings** pallet is located in the top toolbar banner on the right.

To open the theme configuration menu, click the <i class="material-icons" aria-hidden="true" title="Palette">palette</i> icon.

![ThemeSelect](/images/TrueCommand/Dashboard/ThemePallete.png "Theme Select")

To change a color, click on the color to open a selection menu, then choose a color or enter its HEX color value.

![ThemeCustomize](/images/TrueCommand/Dashboard/ThemePalleteCustom.png "Theme Customize")

To remove changes and revert to the currently saved settings, click **RESET**.
To reset all colors to the application defaults, click **DEFAULTS**.

## Navigation Menus
The TrueCommand UI has two dropdown menus, the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon at the top right of the screen to open the settings menu, and the user avatar to access the user menu.

### Settings Menu
The settings dropdown menu provides the main navigation to functional areas in TrueCommand, some of which you can also access from the top toolbar icons, main dashboard, and system information screens through **Explore** or the <span class="material-icons">more_vert</span> icon. 

The **Settings** menu has the following options:
{{< truetable >}}
| Icon | Description |
|------|-------------|
| <mat-icon role="img" fontset="mdi" fonticon="mdi-view-dashboard" class="mat-icon mdi mdi-view-dashboard mat-icon-no-color" aria-hidden="true" ></mat-icon> | Opens the main TrueCommand Dashboard. |
| <mat-icon _ngcontent-ahp-c196="" role="img" fontset="mdi" fonticon="mdi-chip" class="mat-icon notranslate mdi mdi-chip mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-chip" data-mat-icon-namespace="mdi"></mat-icon> | Opens the [**System Inventory**]({{< relref "MultiSystems.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> | Opens the [Clusters]({{< relref "Clusters.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Reports**]({{< relref "/TrueCommand/UserGuide/Reports/Creation.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">playlist_add_check</mat-icon> | Opens the [All Alerts]({{< relref "AlertManage.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">notification_important</mat-icon> | Opens the [Alert Rules]({{< relref "AlertManage.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-cloud-alert" class="mat-icon mdi mdi-cloud-alert mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [Alert Services]({{< relref "AlertManage.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">settings_remote</mat-icon> | Opens the [Systems]({{< relref "/TrueCommand/AdminGuide/Systems.md" >}}) screen. Only available for administrator users. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> | Opens the [Users]({{< relref "/TrueCommand/AdminGuide/Users.md" >}}) screen. Only available for administrator users.  |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">supervised_user_circle</mat-icon> | Opens the [Teams]({{< relref "/TrueCommand/AdminGuide/Users.md" >}}) screen. Only available for administrator users.  |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">short_text</mat-icon> | Opens the [Administration]({{< relref "/TrueCommand/AdminGuide/Admin/_index.md" >}}) screen. Only available for administrator users.  |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">vpn_key</mat-icon> |Opens the [Logs]({{< relref "/TrueCommand/AdminGuide/SystemLog.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-swap-vertical-bold" class="mat-icon mdi mdi-swap-vertical-bold mat-icon-no-color" aria-hidden="true"></mat-icon>  | Opens the **[API Interface]({{< relref "TrueCommand/UserGuide/API.md" >}})** screen. |
{{< /truetable >}} 

### User Avatar Menu
The user avatar provides access to the logged-in user **Profile** screen, API Interface, user license (EULA), and the log out option.

{{< truetable >}}
| Icon | Description |
|------|-------------|
| <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> | Opens the **[Profile]({{< relref "/TrueCommand/AdminGuide/Users.md" >}})** screen for the logged-in user. |
| <span class="iconify" data-icon="mdi:file-document-multiple"></span> | Opens the TrueNAS Documentation hub. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-file-document-edit" class="mat-icon notranslate mdi mdi-file-document-edit mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [TrueCommand EULA]({{< relref "/TrueCommand/Notices/TCTermsOfService.md" >}}) window. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">exit_to_app</mat-icon>  | Logs the user out of TrueCommand. |
{{< /truetable >}}

