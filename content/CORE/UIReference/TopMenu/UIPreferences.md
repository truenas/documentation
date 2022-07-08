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

| Option | Style | Description |
|--------|-------|-------------|
| **Choose Theme** | dropdown list | Choose a preferred theme. Prebuilt and custom created themes are visible here. |
| **Prefer buttons with icons only** | checkbox | Preserve screen space with icons and tooltips instead of text labels. |
| **Enable Password Toggle** | checkbox | When set, an eye icon appears next to password fields. Clicking the icon reveals the password. |
| **Reset Table Columns to Default** | checkbox | Reset all tables to display the system default columns. |
| **Retro Logo** | checkbox | Revert branding back to FreeNAS. |
| **Reset All Preferences to Default** | checkbox | Reset all user preferences to their default values. (Custom themes are preserved) |
| **UPDATE PREFERENCES** | button | Apply the current checkbox settings to the web interface. |

## Manage Custom Themes

| Option | Style | Description |
|--------|-------|-------------|
| **theme name (variable)** | checkbox | Each custom theme is listed. |
| **DELETE SELECTED** | button | Removes each selected custom theme from the system. |
| **CREATE NEW THEME** | button | Opens the theme creation screen. |

## Custom Theme Editor

![Preferences Custom Theme](/images/CORE/13.0/PreferencesCustomTheme.png "Custom UI Theme")

### Create Theme

| Option | Style | Description |
|--------|-------|-------------|
| **Load colors from existing theme** | dropdown list | Imports the settings from the chosen theme into the **Create Theme** and **Preview** tabs. |
| **GENERAL** | tab | Contains the primary options for the new theme. |
| **COLORS** | tab | Contains options for setting custom color values. |
| **PREVIEW** | tab | Controls the **Preview** widget. |

#### GENERAL

| Option | Style | Description |
|--------|-------|-------------|
| **Custom Theme Name** | text input | Enter a name to identify the new theme. |
| **Menu Label** | text input | Enter a short name to use in the TrueNAS web interface menus. |
| **Description** | text input | Enter a short description of the new theme. |
| **Choose Primary** | dropdown list | Choose from either a generic color or import a specific color setting to use as the primary theme color. |
| **Choose Accent** | dropdown list | Choose from either a generic color or import a specific color setting to use as the accent color for the theme. |
| **Choose Topbar** | dropdown list | Changes the color of the top menu bar in the web interface. |
| **SUBMIT** | button | Save the current selections and create the new theme. |
| **CANCEL** | button | Return to the **Preferences** screen without creating a new theme. |

#### COLORS

| Option | Style | Description |
|--------|-------|-------------|
| **Background 1** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **bg1** option in the **GENERAL** tab. |
| **Background 2** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **bg2** option in the **GENERAL** tab. |
| **Foreground 1** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **fg1** option in the **GENERAL** tab. |
| **Foreground 2** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **fg2** option in the **GENERAL** tab. |
| **Alt Background 1** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-bg1** option in the **GENERAL** tab. |
| **Alt Background 2** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-bg2** option in the **GENERAL** tab. |
| **Alt Foreground 1** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-fg1** option in the **GENERAL** tab. |
| **Alt Foreground 2** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **alt-fg2** option in the **GENERAL** tab. |
| **Yellow** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **yellow** option in the **GENERAL** tab. |
| **Orange** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **orange** option in the **GENERAL** tab. |
| **Red** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **red** option in the **GENERAL** tab. |
| **Magenta** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **magenta** option in the **GENERAL** tab. |
| **Violet** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **violet** option in the **GENERAL** tab. |
| **Blue** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **blue** option in the **GENERAL** tab. |
| **Cyan** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **cyan** option in the **GENERAL** tab. |
| **Green** | text input | Click the swatch to pick a color or enter a color hex. This value is used in for the **green** option in the **GENERAL** tab. |
| **SUBMIT** | button | Save the current selections and create the new theme. |
| **CANCEL** | button | Return to the **Preferences** screen without creating a new theme. |

#### PREVIEW

| Option | Style | Description |
|--------|-------|-------------|
| **Global Preview** | toggle | Controls the visibility of the **Preview** widget. |

### Preview

| Option | Style | Description |
|--------|-------|-------------|
| **Buttons** | tab | Shows examples of web interface buttons with the current theme settings applied. |
| **Forms** | tab | Shows examples of web interface form options with the current theme settings applied. |

{{< taglist tag="coretopmenu" limit="10" >}}
