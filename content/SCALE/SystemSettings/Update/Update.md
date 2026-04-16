---
title: "Updating TrueNAS"
description: "Provides instructions on updating TrueNAS releases in the UI."
weight: 10
aliases:
- /scale/scaletutorials/systemsettings/updatescale/
tags:
- update
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
doctype: tutorial
---

TrueNAS updates system software from the **System > Update** screen.
Updates can be installed from the update server or by uploading a local update file.

Update profiles control which TrueNAS releases the system checks for updates.
Community Edition systems default to the highest profile available for the installed version.
For example, a fresh install of a General release defaults to the General profile.

TrueNAS Enterprise systems ship with the Mission Critical profile set by default.
Enterprise users can select General or Mission Critical only.

The **Update** screen shows the installed version, other installation or update options, and user profiles.
Some users can select a different profile option from the **Select an update profile** dropdown list.

{{< trueimage src="/images/SCALE/SystemSettings/SystemUpdateScreen.png" alt="Update Screen" id="Update Screen" >}}

## Software Update Paths

Before upgrading to a new major version, update to the latest maintenance release of the current major version.
See [Upgrade Paths](https://www.truenas.com/docs/softwarestatus/#upgrade-paths) on the Software Status page for the supported paths from your current version, and the recommended versions table for guidance on which release to target.

The TrueNAS **Update** screen provides options to install updates from the update server or upload a local update file.

We recommend updating TrueNAS when the system is idle (no clients connected, no disk activity, etc.).
The system restarts after an update.
Update during scheduled maintenance times to avoid disrupting user activities.

{{< hint type=important >}}
All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues.
We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
{{< /hint >}}

## Selecting an Update Profile

The **Update Profile** section on the **Update** screen controls which releases TrueNAS checks for updates.
Change it only if you want to shift to a different release cadence.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenUpdateProfile.png" alt="Update Profile" id="Update Profile" >}}

TrueNAS has four distinct update profiles:

- **Developer** — Developer software with new features and bugs alike. Allows users to contribute directly to the development process.
- **Early Adopter** — Pre-release access to new features and functionality of TrueNAS software. Some issues might need workarounds, bug reports, or patience.
- **General** — Field-tested software with mature features. Few issues are expected.
- **Mission Critical** — Mature software that enables 24×7 operations with high availability for a very clearly defined use case. Software updates are very infrequent and based on need.

See the [TrueNAS Software Status](https://www.truenas.com/docs/softwarestatus/) page for current recommendations by user type.

Enterprise users can select **General** or **Mission Critical** only.
Community Edition users can select **Developer**, **Early Adopter**, or **General**.

The dropdown only shows profiles at or below the level of the currently installed version.
A system on a General release can select General, Early Adopter, or Developer.
A system on an Early Adopter release can select Early Adopter or Developer, but not General.
Profiles above the current version level appear in the **Other Profiles (Not Available)** section and cannot be selected until the system runs a release at that profile level.

{{< hint type=warning >}}
The **Developer** update profile uses a non-production train in active development.
Do not use this profile unless you intend to keep the system permanently on early versions and are not storing critical data on it.
Testers are encouraged to submit bug reports with debug files.
For information on how to file an issue ticket, see [Reporting an Issue]({{< ref "FileIssueSCALE" >}}#reporting-an-issue).
{{< /hint >}}

To change the update profile:

1. Go to **System > Update**.
2. In the **Update Profile** section, select the desired profile from the **Select an update profile** dropdown.
3. Click **Apply**.
4. In the confirmation dialog, click **Continue**.

TrueNAS refreshes the update check after you apply the new profile.

## Installing an Update

If an update is available, it shows in the **Update Available** section on the **Update** screen.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenWithUpdateAvailable.png" alt="Update Available" id="Update Available" >}}

Click **Install Update** to begin.
The **Save configuration settings from this machine before updating?** window opens.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigSettingsWindow.png" alt="Save Configuration Settings" id="Save Configuration Settings" >}}

Select **Export Password Secret Seed**, then click **Save Configuration**.

{{< include file="/static/includes/SecretSeed.md" >}}

TrueNAS downloads the configuration and the update files, then starts the installation.

{{< include file="/static/includes/UpgradeClearCache.md" >}}

## Installing a Manual Update File

{{< include file="/static/includes/ManualUpdates.md" >}}

## Update Progress

When a system update starts, <span class="iconify" data-icon="ic:sharp-system-update-alt" style="font-size:150%;"></span> appears in the toolbar at the top of the UI.
Click the icon to see the current status of the update and which TrueNAS administrative account initiated the update.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateStatus.png" alt="Update Status" id="Update Status Example" >}}
