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

Click the **Choose Theme** dropdown list to change the color appearance of the web interface. Select from a range of prebuilt or custom created themes.
The **High Contrast** option offers the most visibility.

Select **Prefer buttons with icons only** if screen space is limited to display icons and tooltips without text labels.

For increased security, clear the **Enable Password Toggle** checkbox.
This removes all the <i class="material-icons" aria-hidden="true" title="Visibility">visibility</i> icons next to password fields and prevents the actual password characters from being visible.

## Creating a Custom Theme

To create a custom theme, click **CREATE NEW THEME**.

![Preferences Custom Theme](/images/CORE/13.0/PreferencesCustomTheme.png "Custom UI Theme")

1. Click **Load colors from existing theme** to change colors within an existing theme. Select an existing theme from the dropdown list to import into the configuration.
2. Click the **COLORS** tab to define the color values for this new theme.
   Color choices can be defined as either RGBA or hexadecimal values, or click a color swatch to open a visual color picker.
3. Color selections defined in the **COLORS** tab determine the options available on the **GENERAL** tab.
4. Color selections are displayed in the **Preview**. To turn this feature off and compare these selections with the currently active theme, click the **PREVIEW** tab then click the **Global Preview** toggle. 
5. Name and label the theme. Click **SUBMIT** to save it and add it to the options on the **Preferences** page.

{{< taglist tag="coreinterfacepref" limit="10" >}}
