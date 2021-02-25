---
title: "Interface Preferences"
weight: 10
---

{{< toc >}}

There are a few adjustable interface preferences and a built-in theme editor for creating your own TrueNAS color schemes.

To access user preferences, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Settings) **> Preferences**.
This page has options to adjust global settings in the web interface, manage custom themes, and create new themes.

![InterfacePreferences](/images/CORE/12.0/InterfacePreferences.png "Interface Preferences")

## General Preferences

There are a few options for how things are displayed or behave in the web interface:

* To choose a different pre-built or saved custom color scheme for the web interface, select an option from the *Choose Theme* dropdown.
* If screen space is limited, set *Prefer buttons with icons only* to only display icons and tooltips without text labels.
* When *Enable Password Toggle* is set, <i class="material-icons" aria-hidden="true" title="Visibility">visibility</i> appears next to password fields. Clicking this button will show characters typed or saved in the field.
* To clear any custom display choices for interface tables, set *Reset Table Columns to Default*.
* To display the legacy FreeNAS branding, set **Retro Logo**.
* *Reset All Preferences to Default* changes all these options back to their factory default settings.

## Custom Themes

If a included theme doesn't satisfy your preference, a fully custom theme can be created.
To start creating a custom theme, click *CREATE NEW THEME*.

![Preferences Custom Theme](/images/CORE/12.0/PreferencesCustomTheme.png "Custom UI Theme")

Colors from an existing theme can be used when creating a new custom theme.
Select a theme from the *Load Colors from Theme* dropdown to use the colors from that theme for the new custom theme:

* *Custom Theme Name*: Enter a name to identify the new theme.
* *Menu Label*: Enter a short name to use in the TrueNAS web interface menus.
* *Description*: Enter a short description of the new theme.
* *Choose Primary*: Choose from either a generic color or import a specific color setting to use as the primary theme color.
  The primary color changes the color of many of the buttons.
* *Choose Accent*: Choose from either a generic color or import a specific color setting to use as the accent color for the theme.
  This color is used for many of the buttons and smaller elements in the web interface.
* *Choose Topbar*: Changes the color of the top menu bar in the web interface.

For even more fine tuning, click the *COLORS* tab.
Here, colors can be changed using the slider or by entering hexadecimal values.



When complete, click **SUBMIT**.
TrueNAS automatically switches to newly created theme and adds it to the **Choose Theme** dropdown.
