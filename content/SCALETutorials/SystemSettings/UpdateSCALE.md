---
title: "Updating SCALE"
description: "Provides instructions on updating SCALE releases in the UI."
weight: 10
tags:
- update
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

TrueNAS has several software branches (linear update paths) known as trains. If SCALE is in a prerelease train it can have various preview/early build releases of the software.

The **Update Screen** only displays the current train.
When upgrading TrueNAS to a new major version, follow the upgrade path of major versions until the system is on the desired major version release.
For more information on other available trains and the upgrade path from one version to the next, see [Software Releases](https://www.truenas.com/docs/truenasupgrades/).

{{< hint type=warning >}}
See the [Software Status](https://www.truenas.com/software-status/) page for the latest recommendations for software usage.
Do not change to a prerelease or nightly release unless you intend to keep the system permanently on early versions and are not storing critical data on it.

If you are using a non-production train, be prepared to experience bugs or other problems.
Testers are encouraged to submit bug reports and debug files.
For information on how to file an issue ticket see [Filing an Issue Ticket in SCALE]({{< relref "FileIssueSCALE.md" >}}).
{{< /hint >}}

The TrueNAS **Update** screen provides users with two different updated methods for the system, automatic or manual.

We recommend updating SCALE when the system is idle (no clients connected, no disk activity, no ongoing S.M.A.R.T. tests, etc.).
The system restarts after an upgrade.
Update during scheduled maintenance times to avoid disrupting user activities.

{{< hint type=important >}}
All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues.
We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
{{< /hint >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemUpdateScreenAvailableUpdate.png" alt="System Update Upgrade Available" id="System Update Upgrade Available" >}}

## Performing an Automatic Update

If an update is available, click **Apply Pending Update** to install it.

The **Save configuration settings from this machine before updating?** window opens.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigSettingsWindow.png" alt="Save Configuration Settings" id="Save Configuration Settings" >}}

Select **Export Password Secret Seed** then click **Save Configuration**.

{{< include file="/static/includes/SecretSeed.md" >}}

The **Apply Pending Updates** window opens.

{{< trueimage src="/images/SCALE/SystemSettings/ApplyPendingUdates.png" alt="Apply Pending Updates" id="Apply Pending Updates" >}}

Select **Confirm**, then **Continue** to start the automatic installation process.
TrueNAS downloads the configuration and the update files, and then starts the installation.

{{< include file="/static/includes/UpgradeClearCache.md" >}}

## Performing a Manual Update

If the system detects an available update, to do a manual update click **Download Updates** and wait for the file to download to your system.

{{< include file="/static/includes/ManualUpdates.md" >}}

## Update Progress

When a system update starts, <span class="iconify" data-icon="ic:sharp-system-update-alt" style="font-size:150%;"></span> appears in the toolbar at the top of the UI.
Click the icon to see the current status of the update and which TrueNAS administrative account initiated the update.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateStatus.png" alt="Update Status" id="Update Status Example" >}}
