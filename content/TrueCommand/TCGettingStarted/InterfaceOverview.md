---
title: "Interface Overview"
description: "Defines the icons, provides links to articles for each function, and explains where to access alerts on the TrueCommand interface."
weight: 20
aliases: 
 - /truecommand/tcgettingstarted/interfaceoverview/
tags:
- ui
- alerts
---



## Top Toolbar

![TopBar](/images/TrueCommand/Dashboard/TopBar.png "Top Bar")

The top toolbar has various quick links, configuration options, alerts, and menus.

{{< truetable >}}
| Icon | Description |
|------|-------------|
| <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> | Opens the [**Cluster Volume**]({{< relref "Clusters.md" >}}) page. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Reports**]({{< relref "/TrueCommand/UserGuide/Reports/Creation.md" >}}) page. |
| <mat-icon role="img" mattooltip="Toggle documentation tooltips" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">help</mat-icon> | Toggles documentation tooltips. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-palette" mattooltip="Theme settings" class="mat-icon mdi mdi-palette mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the **[Theme Setting](#creating-themes-using-the-theme-settings-pallet)** menu dropdown. |
| <i class="material-icons" aria-hidden="true" title="Newspaper">newspaper</i> | Opens a dialog window with a TrueCommand releases and maintenance news feed. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-bell" class="mat-icon mdi mdi-bell mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Alert Notifications**]({{< relref "AlertManage.md" >}}) page. |
| <i class="material-icons" aria-hidden="true" title="Settings">settings</i> | Opens the **[Settings](#settings-menu)** menu dropdown. |
| User avatar | Opens the user **[Profile](#user-menu)** option where you can set a custom avatar to change the default user gravtar. It also provides access to the **API Interface**, the **EULA** and the **Log Out** options. |
{{< /truetable >}}

### TrueCommand Theme Settings 
{{< include file="/_includes/TCThemeOptions.md" >}}

### Settings Menu
The settings dropdown menu provides the main navigation to functional areas in TrueCommand, some of which you can also access from the top toolbar, main **Dashboard**, and system information screens through **Explore** or the <span class="material-icons">more_vert</span> icon. 
{{< expand "Settings Menu Options" >}}
The **Settings** menu has the following options:

| Icon | Description |
|------|-------------|
| <mat-icon role="img" fontset="mdi" fonticon="mdi-view-dashboard" class="mat-icon mdi mdi-view-dashboard mat-icon-no-color" aria-hidden="true" ></mat-icon> | Opens the main TrueCommand Dashboard. |
| <mat-icon _ngcontent-ahp-c196="" role="img" fontset="mdi" fonticon="mdi-chip" class="mat-icon notranslate mdi mdi-chip mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-chip" data-mat-icon-namespace="mdi"></mat-icon> | Opens the [**System Inventory**]({{< relref "MultiSystems.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> | Opens the [Clusters]({{< relref "Clusters.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Reports**]({{< relref "/TrueCommand/UserGuide/Reports/Creation.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">playlist_add_check</mat-icon> | Opens the [All Alerts]({{< relref "AlertManage.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">notification_important</mat-icon> | Opens the [Alert Rules]({{< relref "AlertManage.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-cloud-alert" class="mat-icon mdi mdi-cloud-alert mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [Alert Services]({{< relref "AlertManage.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">settings_remote</mat-icon> | Opens the [Systems]({{< relref "/TrueCommand/AdminGuide/Systems.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> | Opens the [Users]({{< relref "/TrueCommand/AdminGuide/Users.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">supervised_user_circle</mat-icon> | Opens the [Teams]({{< relref "/TrueCommand/AdminGuide/Users.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">short_text</mat-icon> | Opens the [Administration]({{< relref "/TrueCommand/AdminGuide/Admin/_index.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">vpn_key</mat-icon> |Opens the [Logs]({{< relref "/TrueCommand/AdminGuide/SystemLog.md" >}}) screen. | 
{{< /expand >}}

### User Avatar Menu
The user avatar provides access to the logged-in user profile, API Interface, user license (EULA), and the log out option.
{{< expand "User (avatar) Options" >}}
| Icon | Description |
|------|-------------|
| <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> | Opens the **[Profile]({{< relref "/TrueCommand/AdminGuide/Users.md" >}})** screen for the logged-in user. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-swap-vertical-bold" class="mat-icon mdi mdi-swap-vertical-bold mat-icon-no-color" aria-hidden="true"></mat-icon>  | Opens the **[API Interface]({{< relref "TrueCommand/UserGuide/API.md" >}})** screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-file-document-edit" class="mat-icon notranslate mdi mdi-file-document-edit mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [TrueCommand EULA]({{< relref "/TrueCommand/Notices/TCTermsOfService.md" >}}) window. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">exit_to_app</mat-icon>  | Logs the user out of TrueCommand. |
{{< /expand >}}
