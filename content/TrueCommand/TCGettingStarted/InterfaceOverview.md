---
title: "Interface Overview"
description: "This article defines the icons, provides links to articles for each function, and where to access alerts on the TrueCommand interface."
weight: 20
tags:
- tcinterface
- tctoptoolbar
- scaletoptoolbar
- coretoptoolbar
---

{{< toc >}}


## Top Toolbar

![TopBar](/images/TrueCommand/2.1/TopBar.png "Top Bar")

The top toolbar has various quick links, configuration options, alerts, and menus.

{{< truetable >}}
| Icon | Description |
|------|-------------|
| <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> | Opens the [**Cluster Volume**]({{< relref "/TrueCommand/Clusters.md" >}}) page. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**iSCSI Manager**]({{< relref "/TrueCommand/iSCSIManagement.md" >}}) page. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Reports**]({{< relref "/TrueCommand/Reports/Creation.md" >}}) page. |
| <mat-icon role="img" mattooltip="Toggle documentation tooltips" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">help</mat-icon> | Toggles documentation tooltips. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-palette" mattooltip="Theme settings" class="mat-icon mdi mdi-palette mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the **[Theme Setting](#creating-themes-using-the-theme-settings-pallet)** menu dropdown. |
| <i class="material-icons" aria-hidden="true" title="Newspaper">newspaper</i> | Opens a dialog window with a TrueCommand releases and maintenance news feed. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-bell" class="mat-icon mdi mdi-bell mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Alert Notifications**]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) page. |
| <i class="material-icons" aria-hidden="true" title="Settings">settings</i> | Opens the **[Settings](#settings-menu)** menu dropdown. |
| User avatar | Opens the user **[Profile](#user-menu)** option where you can set a custom avatar to change the default user gravtar. It also provides access to the **API Interface**, the **EULA** and the **Log Out** options. |
{{< /truetable >}}

### TrueCommand Theme Settings 

TrueCommand includes the ability to customize the alert colors to user preferences.
The **Theme settings** pallet is located in the top banner on the right.
{{< expand "Changing Theme Settings" >}}
To open the theme configuration menu, click the <i class="material-icons" aria-hidden="true" title="Palette">palette</i> icon.

![ThemeSelect](/images/TrueCommand/2.0/ThemePallete.png "Theme Select")

To change a color, click on the color to open a selection menu, then choose a color or enter its HEX color value.

![ThemeCustomize](/images/TrueCommand/2.0/ThemePalleteCustom.png "Theme Customize")

To remove changes and revert to the currently saved settings, click **RESET**.
To reset all colors to the application defaults, click **DEFAULTS**.
{{< /expand >}}

### Settings Menu
The settings dropdown menu provides the main navigation to functional areas in TrueCommand, some of which you can also access from the top toolbar, main Dashboard, and System information screens through **Explore** or the <span class="material-icons">more_vert</span> icon. 
{{< expand "Settings Menu Options" >}}
The **Settings** menu has the following options:

| Icon | Description |
|------|-------------|
| <mat-icon role="img" fontset="mdi" fonticon="mdi-view-dashboard" class="mat-icon mdi mdi-view-dashboard mat-icon-no-color" aria-hidden="true" ></mat-icon> | Opens the main TrueCommand Dashboard. |
| <mat-icon _ngcontent-ahp-c196="" role="img" fontset="mdi" fonticon="mdi-chip" class="mat-icon notranslate mdi mdi-chip mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" data-mat-icon-name="mdi-chip" data-mat-icon-namespace="mdi"></mat-icon> | Opens the [**System Inventory**]({{< relref "/TrueCommand/systemmanagement/multisystems.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" aria-hidden="true" class="mat-icon mdi mdi-server-network mat-icon-no-color"></mat-icon> | Opens the [Clusters]({{< relref "/TrueCommand/Clusters.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [iSCSI Manager]({{< relref "/TrueCommand/iSCSIManagement.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-chart-line-stacked"  class="mat-icon mdi mdi-chart-line-stacked mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [**Reports**]({{< relref "/TrueCommand/Reports/Creation.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">playlist_add_check</mat-icon> | Opens the [All Alerts]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">notification_important</mat-icon> | Opens the [Alert Rules]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-cloud-alert" class="mat-icon mdi mdi-cloud-alert mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [Alert Services]({{< relref "/TrueCommand/Alerts/AlertManage.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">settings_remote</mat-icon> | Opens the [Systems]({{< relref "/TrueCommand/Administration/Systems.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> | Opens the [Users]({{< relref "/TrueCommand/Administration/Users.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">supervised_user_circle</mat-icon> | Opens the [Teams]({{< relref "/TrueCommand/Administration/Users.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">short_text</mat-icon> | Opens the [Administration]({{< relref "/TrueCommand/Administration/Admin/_index.md" >}}) screen. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">vpn_key</mat-icon> |Opens the [Logs]({{< relref "/TrueCommand/Administration/SystemLog.md" >}}) screen. |
 
{{< /expand >}}

### User Avatar Menu
The user avatar provides access to the logged-in user profile, API Interface, user license (EULA), and the log out option.
{{< expand "User (avatar) Options" >}}
| Icon | Description |
|------|-------------|
| <mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">person</mat-icon> | Opens the **[Profile]({{< relref "/TrueCommand/Administration/Users.md" >}})** screen for the logged-in user. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-swap-vertical-bold" class="mat-icon mdi mdi-swap-vertical-bold mat-icon-no-color" aria-hidden="true"></mat-icon>  | Opens the **[API Interface]({{< relref "/TrueCommand/API/_index.md" >}})** testing screen. |
| <mat-icon role="img" fontset="mdi" fonticon="mdi-file-document-edit" class="mat-icon notranslate mdi mdi-file-document-edit mat-icon-no-color" aria-hidden="true"></mat-icon> | Opens the [TrueCommand EULA]({{< relref "/TrueCommand/Notices/TCTermsOfService.md" >}}) window. |
| <mat-icon role="img" class="mat-icon material-icons mat-icon-no-color" aria-hidden="true">exit_to_app</mat-icon>  | Logs the user out of TrueCommand. |

{{< /expand >}}

{{< taglist tag="tcinstall" limit="10" >}}
