---
title: "Changing User Preferences"
description: "A how-to for changing user preferences."
---
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

To access user preferences, click **<i class="fas fa-cog"></i> > Preferences**.
This page has options to adjust global settings in the web interface, manage
custom themes, and create new themes.

To change the theme, select a theme from the *Choose Theme* dropdown.
*Prefer buttons with icons only* can be set to only display icons and tooltips
instead of text labels. When *Enable Password Toggle* is set,
<i class="material-icons">visibility</i> appears next to password fields. The
button can be used to toggle the visibility of the password. To display the
legacy FreeNAS branding, set *Retro Logo*. Set *Reset Table Columns to Default*
to reset all tables to display default columns.

If a default theme doesn't satisfy your preference, a fully custom theme can be
created. To start creating a custom theme, click *CREATE NEW THEME*.
Colors from an existing theme can be used when creating a new custom theme.
Select a theme from the *Load Colors from Theme* dropdown to use the colors
from that theme for the new custom theme. The fields are as follows:

* *Custom Theme Name* - Enter a name to identify the new theme.

* *Menu Label* - Enter a short name to use in the TrueNAS web interface menus.

* *Description* - Enter a short description of the new theme.

* *Choose Primary* - Choose from either a generic color or import a specific
  color setting to use as the primary theme color. The primary color changes
  the color of many of the buttons.

* *Choose Accent* - Choose from either a generic color or import a specific
  color setting to use as the accent color for the theme. This color is used
  for many of the buttons and smaller elements in the web interface.

* *Choose Topbar* - Changes the color of the top menu bar in the web interface.

For even more fine tuning, click the *COLORS* tab. Here, colors can be changed
using the slider or hexadecimal values.

When complete, click *SUBMIT*. TrueNAS automatically switches to newly created
theme. The new theme will now show up in the *Choose Theme* dropdown.