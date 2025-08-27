---
title: "Updating TrueNAS"
description: "Provides instructions on updating TrueNAS releases in the UI."
weight: 10
aliases: /scale/scaleuireference/systemsettings/updatescale/
tags:
- update
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

TrueNAS has several software branches (linear update paths) known as trains. 
Update profiles offer updates to the release running on your system based on specific use cases.
Some profiles are not available or recommended for Enterprise customers.
TrueNAS systems are shipped with the profile set for the user based on their use case.

The **Update** screen shows the installed version, other installation or update options, and user profiles.
Some users can select a different profile option on **Select and update profile** dropdown list.

## Software Update Paths

When upgrading TrueNAS to a new major version, follow the upgrade path of major versions until the system is on the desired major version release.
For more information on the upgrade path from one version to the next, see [Software Releases](https://www.truenas.com/docs/truenasupgrades/).

{{< hint type=warning >}}
See the [Software Status](https://www.truenas.com/software-status/) page for the latest recommendations for software usage.
Do not change to a prerelease or nightly release unless you intend to keep the system permanently on early versions and are not storing critical data on it.

The **Developer** update profile allows using a non-production train in active development, but be prepared to experience bugs or other problems.
Testers are encouraged to submit bug reports with debug files.
For information on how to file an issue ticket, see [Filing an Issue Ticket in TrueNAS]({{< ref "FileIssueSCALE" >}}).
{{< /hint >}}

The TrueNAS **Update** screen provides users with an automatic and manual update method.

We recommend updating TrueNAS when the system is idle (no clients connected, no disk activity, etc.).
The system restarts after an upgrade.
Update during scheduled maintenance times to avoid disrupting user activities.

{{< hint type=important >}}
All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues.
We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
{{< /hint >}}

## Automatically Updating

If an update is available, it shows in the **Update Available** section on the **Update** screen.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenWithUpdateAvailable.png" alt="Update Available" id="Update Available" >}}

Click **Install Update** to open the **Save configuration settings from this machine before updating?** window.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigSettingsWindow.png" alt="Save Configuration Settings" id="Save Configuration Settings" >}}

Select **Export Password Secret Seed**, then click **Save Configuration**.

{{< include file="/static/includes/SecretSeed.md" >}}

TrueNAS downloads the configuration and the update files, then starts the installation.

{{< include file="/static/includes/UpgradeClearCache.md" >}}

## Manually Updating

If the system detects an available update, it and the Install Update button show below the current release running on the system.
Click **Install Update**. The **Save configuration settings from this machine before updating?** window opens.
Leave **Export Password Secret Seed** selected, and then click **Save Configuration**.

{{< include file="/static/includes/ManualUpdates.md" >}}

## Update Progress

When a system update starts, <span class="iconify" data-icon="ic:sharp-system-update-alt" style="font-size:150%;"></span> appears in the toolbar at the top of the UI.
Click the icon to see the current status of the update and which TrueNAS administrative account initiated the update.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateStatus.png" alt="Update Status" id="Update Status Example" >}}
