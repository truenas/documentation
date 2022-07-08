---
title: Setting UI Preferences
description: "Use the Interface Preferences screen to display a list of general preferences or to change preference settings for your TrueNAS."
weight: 1000
tags:
- coreinterfacepref
---

{{< toc >}}

{{< include file="/_includes/COREUIPreferencesIntro.md" type="page" >}}

## Tuning the Visibility of UI Elements.

If you want to change the color appearance of the web interface, you can open the **Choose Theme** dropdown list and select from a range of prebuilt or any custom created themes.
The **High Contrast** option offers the most visibility.

If your screen space is limited, select **Prefer buttons with icons only** to only display icons and tooltips without text labels.

For increased security, you can clear the **Enable Password Toggle** checkbox.
This removes all the <i class="material-icons" aria-hidden="true" title="Visibility">visibility</i> icons next to password fields and prevents the actual password characters from being visible.

## Creating a Custom Theme

If an included theme is not your preference, you can create a fully custom theme.
Click **CREATE NEW THEME** to start configuring the theme.

![Preferences Custom Theme](/images/CORE/13.0/PreferencesCustomTheme.png "Custom UI Theme")

1. Open **Load colors from existing theme** and select an existing theme to import into the configuration.
   This is useful when you have an existing theme you like but want to change a couple of colors within it.
2. Click the **COLORS** tab and define the color values you want to use for this new theme.
   You can either type in RGBA or hexadecimal color values or click a color swatch to open a visual color picker.
   The **Preview** updates to reflect your current choices. If you want to turn this off and compare with the currently active theme, click the **PREVIEW** tab and click the **Global Preview** toggle.
3. Color selection you make in the **COLORS** tab determine the options you can select on the **GENERAL** tab.
4. Name and label the theme and click **SUBMIT** to save it and add it to the options on the **Preferences** page.

{{< taglist tag="coreinterfacepref" limit="10" >}}
