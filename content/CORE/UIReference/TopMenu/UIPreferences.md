---
title: "Interface Preferences"
description: "Use the Interface Preferences screen to display a list of general preferences for your TrueNAS."
weight: 30
aliases: /core/administration/uipreferences/
tags:
- coretopmenu
- coreinterfacepref
---

{{< toc >}}

{{< include file="/_includes/COREUIPreferencesIntro.md" type="page" >}}

## General Preferences

| Name | Description |
|--------|-------------|
| **Choose Theme** | Choose a preferred theme from the dropdown list. Prebuilt and custom themes are visible here. |
| **Prefer buttons with icons only** | Select checkbox to preserve screen space. Displays icons and tooltips instead of text labels. |
| **Enable Password Toggle** | Select checkbox to make an eye icon appear next to password fields. Click the icon to reveal the password. |
| **Reset Table Columns to Default** | Select checkbox to reset the display of all table columns as system default. |
| **Retro Logo** | Select checkbox to revert branding back to FreeNAS. |
| **Reset All Preferences to Default** | Select checkbox to reset all user preferences to their default values. (Custom themes are preserved) |
| **UPDATE PREFERENCES** | Cick button to apply the current checkbox settings to the web interface. |

## Manage Custom Themes

| Name | Description |
|--------|-------------|
| **theme name (variable)** | Each custom theme is listed. |
| **DELETE SELECTED** | Click button to remove each selected custom theme from the system. |
| **CREATE NEW THEME** | Click button to open the theme editor. |

## Custom Theme Editor

![Preferences Custom Theme](/images/CORE/13.0/PreferencesCustomTheme.png "Custom UI Theme")

### Create Theme

| Name | Description |
|--------|-------------|
| **Load colors from existing theme** | Select from dropdown list. Imports the settings from the chosen theme into the **Create Theme** and **Preview** tabs. |
| **GENERAL** | Primary options for the new theme are listed on this tab. |
| **COLORS** | Options for setting custom color values are listed on this tab. |
| **PREVIEW** | Controls for the **Preview** widget are listed on this tab. |

#### GENERAL

| Name | Description |
|--------|-------------|
| **Custom Theme Name** | Enter a name to identify the new theme. |
| **Menu Label** | Enter a short name to use in the TrueNAS web interface menus. |
| **Description** | Enter a short description of the new theme. |
| **Choose Primary** | Select from the dropdown list a generic color, or import a specific color setting to use as the primary theme color. |
| **Choose Accent** | Select from the dropdown list a generic color, or import a specific color setting to use as the accent color for the theme. |
| **Choose Topbar** | Select from the dropdown list the color of the top menu bar in the web interface. |
| **SUBMIT** | Click to save the current selections and create the new theme. |
| **CANCEL** | Click to return to the **Preferences** screen without creating a new theme. |

#### COLORS

| Name | Description |
|--------|-------------|
| **Background 1** | Click the swatch to pick a color or enter a color hex. This value is used in for the **bg1** option in the **GENERAL** tab. |
| **Background 2** | Click the swatch to pick a color or enter a color hex. This value is used in for the **bg2** option in the **GENERAL** tab. |
| **Foreground 1** | Click the swatch to pick a color or enter a color hex. This value is used in for the **fg1** option in the **GENERAL** tab. |
| **Foreground 2** | Click the swatch to pick a color or enter a color hex. This value is used in for the **fg2** option in the **GENERAL** tab. |
| **Alt Background 1** | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-bg1** option in the **GENERAL** tab. |
| **Alt Background 2** | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-bg2** option in the **GENERAL** tab. |
| **Alt Foreground 1** | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-fg1** option in the **GENERAL** tab. |
| **Alt Foreground 2** | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-fg2** option in the **GENERAL** tab. |
| **Yellow** | Click the swatch to pick a color or enter a color hex. This value is used in for the **yellow** option in the **GENERAL** tab. |
| **Orange** | Click the swatch to pick a color or enter a color hex. This value is used in for the **orange** option in the **GENERAL** tab. |
| **Red** | Click the swatch to pick a color or enter a color hex. This value is used in for the **red** option in the **GENERAL** tab. |
| **Magenta** | Click the swatch to pick a color or enter a color hex. This value is used in for the **magenta** option in the **GENERAL** tab. |
| **Violet** | Click the swatch to pick a color or enter a color hex. This value is used in for the **violet** option in the **GENERAL** tab. |
| **Blue** | Click the swatch to pick a color or enter a color hex. This value is used in for the **blue** option in the **GENERAL** tab. |
| **Cyan** | Click the swatch to pick a color or enter a color hex. This value is used in for the **cyan** option in the **GENERAL** tab. |
| **Green** | Click the swatch to pick a color or enter a color hex. This value is used in for the **green** option in the **GENERAL** tab. |
| **SUBMIT** | Click the button to save the current selections and create the new theme. |
| **CANCEL** | Click the button to return to the **Preferences** screen without creating a new theme. |

#### PREVIEW

| Name | Description |
|--------|-------------|
| **Global Preview** | Click the toggle button to control the visibility of the **Preview** widget. |

### Preview

| Name | Description |
|--------|-------------|
| **Buttons** | Examples of web interface buttons with the current theme settings applied are displayed on this tab. |
| **Forms** | Examples of web interface form options with the current theme settings applied are displayed on this tab. |

{{< taglist tag="coretopmenu" limit="10" >}}
