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

Select **Prefer buttons with icons only** when working with limited screen space. This displays icons and tooltips without text labels.

For increased security, clear the **Enable Password Toggle** checkbox.
This removes all the <i class="material-icons" aria-hidden="true" title="Visibility">visibility</i> icons next to password fields. It prevents the actual password characters from being visible.

## Creating a Custom Theme

To create a custom theme, click **CREATE NEW THEME**.

![Preferences Custom Theme](/images/CORE/13.0/PreferencesCustomTheme.png "Custom UI Theme")

1. Click **Load colors from existing theme** to change colors within an existing theme. Select an existing theme from the dropdown list to import into the configuration. This is useful when you have a theme you like but want to change a few colors within it.
2. Click the **COLORS** tab to define the color values for this new theme.
   Define color choices as either RGBA or hexadecimal values. Or click a color swatch to open a visual color picker.
3. Define color selections in the **COLORS** tab. These selections determine the options available on the **GENERAL** tab.
4. Color selections display in the **Preview**. The **Preview** updates to reflect your current choices. You can turn this feature off. Click the **PREVIEW** tab then click the **Global Preview** toggle. This allows you to compare these selections with the currently active theme.  
5. Go to the **GENERAL** tab and choose the primary, accent, and topbar colors for the theme. The color selections you made in the **COLORS** tab determine the options shown here.
6. Name and label the theme. Click **SUBMIT** to save it and add it to the options on the **Preferences** page.

{{< taglist tag="coreinterfacepref" limit="10" >}}
