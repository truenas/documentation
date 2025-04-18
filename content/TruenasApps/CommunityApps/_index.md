---
title: "Community Apps"
description: "Notes about community-maintained applications and individual tutorials for those applications."
weight: 30
aliases:
 - /scale/scaletutorials/apps/communityapps/
 - /scale/scaletutorials/apps/communityapps/installwgeasyapp/
tags:
- apps
related: false
keywords:
- nas data storage
- software storage solutions
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

{{< include file="/static/includes/ProposeArticleChange.md" >}}

The TrueNAS community creates and maintains numerous applications intended to expand system functionality far beyond what is typically expected from a NAS.

By default, the TrueNAS application catalog includes the **stable** train.
To see community-maintained applications on the **Discover** screen, you must add the train.

{{< include file="/static/includes/apps/Apps-Community-Support.md" >}}

To view the community apps, from the **Installed** application screen, click **Settings** and then **Train Settings**.
Select the **community** checkbox on the **Train Settings** screen and click **Save**.
Go to the **Discover** screen and click **Refresh Catalog**, to the right of the search field.

For information on adding to or changing the train for the apps catalog, see [Changing App Trains]({{< relref "/truenasapps/_index.md #changing-app-trains" >}}).

{{< include file="/static/includes/apps/AppsBestPractices.md" >}}

Applications are provided "as-is" and can introduce system stability or security issues when installed.

Some applications deploy as the **root** user for initial configuration before changing to operate as a non-root user.
Make sure the application is required for your specific use requirements and does not violate your security policies before installation.

The tutorials in this section are for commonly used community-maintained applications.
Some apps in this section replace deprecated services or functionality previously built into TrueNAS.

## Understanding App Install Wizard Settings

{{< include file="/static/includes/apps/InstallWizardSettingsOverview.md" >}}

<div class="noprint">

## Section Contents

{{< children depth="1" description="true" >}}

</div>
