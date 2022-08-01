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
| **Choose Theme** | Select a preferred theme from the dropdown list. Prebuilt and custom themes are visible here. |
| **Prefer buttons with icons only** | Select checkbox to preserve screen space. Displays icons and tooltips instead of text labels. |
| **Enable Password Toggle** | Select checkbox to make an eye icon appear next to password fields. Click the icon to reveal the password. |
| **Reset Table Columns to Default** | Select checkbox to reset the display of all table columns as system default. |
| **Retro Logo** | Select checkbox to revert branding back to FreeNAS. |
| **Reset All Preferences to Default** | Select checkbox to reset all user preferences to their default values. (Custom themes are preserved) |
| **UPDATE PREFERENCES** | Cick button to apply the current checkbox settings to the web interface. |

## Manage Custom Themes

| Name | Description |
|--------|-------------|
| **theme name (variable)** | Use checkbox to select a custom theme if listed. |
| **DELETE SELECTED** | Click button to remove each selected custom theme from the system. |
| **CREATE NEW THEME** | Click button to open the theme editor. |

## Custom Theme Editor

![Preferences Custom Theme](/images/CORE/13.0/PreferencesCustomTheme.png "Custom UI Theme")

### Create Theme

| Name | Description |
|--------|-------------|
| **Load colors from existing theme** | Select the theme option from the dropdown list to import settings into the **Create Theme** and **Preview** tabs. |
| **GENERAL** | Click to display the **GENERAL** tab with the primary options for a new theme. |
| **COLORS** | Click to display the **COLORS** tab with color options for a new theme. |
| **PREVIEW** | Click to display the **PREVIEW** tab. The **PREVIEW** updates to reflect current selections. |

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
| **Background 1** | Either click on the color swatch or enter a hex value. This value is used for the **bg1** option in the **GENERAL** tab. |
| **Background 2** | Either click on the color swatch or enter a hex value. This value is used for the **bg2** option in the **GENERAL** tab. |
| **Foreground 1** | Either click on the color swatch or enter a hex value. This value is used in the **fg1** option in the **GENERAL** tab. |
| **Foreground 2** | Either click on the color swatch or enter a hex value. This value is used for the **fg2** option in the **GENERAL** tab. |
| **Alt Background 1** | Either click on the color swatch or enter a hex value. This value is used for the **alt-bg1** option in the **GENERAL** tab. |
| **Alt Background 2** | Either click on the color swatch or enter a hex value. This value is use for the **alt-bg2** option in the **GENERAL** tab. |
| **Alt Foreground 1** | Either click on the color swatch or enter a hex value. This value is used for the **alt-fg1** option in the **GENERAL** tab. |
| **Alt Foreground 2** | Either click on the color swatch or enter a hex value. This value is used for the **alt-fg2** option in the **GENERAL** tab. |
| **Yellow** | Either click on the color swatch or enter a hex value. This value is used for the **yellow** option in the **GENERAL** tab. |
| **Orange** | Either click on the color swatch or enter a hex value. This value is used for the **orange** option in the **GENERAL** tab. |
| **Red** | Either click on the color swatch or enter a hex value. This value is used for the **red** option in the **GENERAL** tab. |
| **Magenta** | Either click on the color swatch or enter a hex value. This value is used for the **magenta** option in the **GENERAL** tab. |
| **Violet** | Either click on the color swatch or enter a hex value. This value is used for the **violet** option in the **GENERAL** tab. |
| **Blue** | Either click on the color swatch or enter a hex value. This value is used for the **blue** option in the **GENERAL** tab. |
| **Cyan** | Either click on the color swatch or enter a hex value. This value is used for the **cyan** option in the **GENERAL** tab. |
| **Green** | Either click on the color swatch or enter a hex value. This value is used for the **green** option in the **GENERAL** tab. |
| **SUBMIT** | Click the button to save the current selections and create the new theme. |
| **CANCEL** | Click the button to return to the **Preferences** screen without creating a new theme. |

#### PREVIEW

| Name | Description |
|--------|-------------|
| **Global Preview** | Color selections are displayed in the **PREVIEW**. To turn this feature off and compare these selections with the currently active theme, click the toggle to turn the display of the **PREVIEW** widget on or off. |

### Preview

| Name | Description |
|--------|-------------|
| **Buttons** | Examples of web interface buttons with the current theme settings applied are displayed on this tab. |
| **Forms** | Examples of web interface form options with the current theme settings applied are displayed on this tab. |

{{< taglist tag="coretopmenu" limit="10" >}}
