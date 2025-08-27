---
title: "Update Screens"
description: "Provides information on functions and fields on the TrueNAS Update screens."
weight: 10
aliases: 
 - /scale/scaleclireference/system/cliupdate/
tags:
- update
- configuration files
- manual install
- update profile
---


The TrueNAS **Update** screen provides users with an automatic or manual method to update the TrueNAS software running on the system.

## Update Screen

The **Update** screen shows the installed version, other installation or update options, and user profiles instead of release trains.

{{< trueimage src="/images/SCALE/SystemSettings/SystemUpdateScreen.png" alt="Update Screen" id="Update Screen" >}}

Truenas systems ship with a profile assigned to the system administration user, but users can select a different option on [**Select and update profile**]() dropdown list.
TrueNAS checks the update server daily for updates available to the selected update profile.
An upgrade only shows when the system detects it. The screen shows four information areas:

- [**Installed Version**](#installed-version) - Shows the current release of TrueNAS running on the system.
- [**Other Options**](#other-options) - Shows the **Manual Install** option, and a link to the TrueNAS Documentation Hub article on manually updating the release.
- [**Update Profile**](#update-profiles) - Shows the **Select an update profile** dropdown list.
- [**Available Profiles**](#available-profiles) - Shows a list of update profile, and a description of what each provides.

### Installed Version

This section shows the current TrueNAS release installed on the system. **System is up to date** shows when no updates are available to the profile set in **Select an update profile**.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenWithUpdateAvailable.png" alt="Update Available" id="Update Available" >}}

If an update is detected, it and the **Install Update** button shows below the current release version.
The update summary for this release shows the **View Release Notes** link that opens the release notes for the update version.

**Install Update** starts the update process.

### Other Options

This section shows the **Manual Update** option.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenOtherOptions.png" alt="Other Options" id="Other Options" >}}

The **See the manual image installation guide** link opens the TrueNAS Documentation Hub article with information on performing a manual upgrade.

**Install** opens the [**Manual Update**](#manual-update-screen) screen.

### Update Profiles

Each profile changes the type of releases or updates available. Default profiles are labeled.
Each update profile and the description of software in each shows on the **Update** screen in the **Available Profiles** area.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenUpdateProfile.png" alt="Update Profile" id="Update Profile" >}}

**Apply** changes the profile to the selected option.

### Available Profiles

The profiles listed in this section show the profile and a brief description of releases made available to each profile. These profiles are on the **Select an update profile** dropdown list. Some profiles might not be available to all TrueNAS users, in particular Enterprise users.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateScreenAvailableProfiles.png" alt="Available Profiles" id="Available Profiles" >}}

Profile selections allow users to choose how conservative the software selection is based on the use case. The table below summarizes profiles and the intended users.

{{< truetable >}}
| Profile | Description |
|---------|-------------|
| **Early Adoptor** | Available to Community users wanting to try out or test early or nightly releases still in development. Pre-release access to new features and functionality of TrueNAS software. Some issues might need workarounds, bug reports, or patience. |
| **General** | Available to Community and some Enterprise customers, but is not recommended for Enterprise customers. General releases are field-tested software with mature features. Expect a few issues in the general release profile. |
| **Mission Critical** | Available to Community and Enterprise users, especially TrueNAS HA systems. This profile the most conservative release, and is mature software that enables 24x7 operations with high availability for a clearly defined use case. Software updates are very infrequent and based on need. |
| **Developer** | Available to developer users. The developer profile is for nightly builds of software in active development. Expect many issues and frequent, sometimes twice daily updates. |
{{< /truetable >}}

## Save Configuration Settings Window

The **Save configuration settings from this machine before updating?** window opens after clicking **Install** to the right of **Manual Install**.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigSettingsWindow.png" alt="Save Configuration Settings" id="Save Configuration Settings" >}}

**Export Password Secret Seed** stores hashes of the passwords sufficient for authentication in the system, but it does not store user passwords.
The secret seed is used to decrypt encrypted fields in the TrueNAS configuration database.
Various fields are encrypted because they might contain sensitive information such as cryptographic certificates, passwords (not user login passwords), or weak hashing algorithms (for example, NT hashes of SMB users).
When a config file is restored without the secret seed, encrypted fields are set to empty values.
This means various services can be broken due to the missing information. Examples are SMB via local accounts and apps.

**Save Configuration** downloads the system configuration file to your system. Keep the configuration file in a safe place that is regularly backed up.

## Manual Update Screen

The **Manual Update** screen opens after saving the system configuration settings.

{{< trueimage src="/images/SCALE/SystemSettings/ManualUpdateScreen.png" alt="System Manual Update" id="System Manual Update" >}}

**Current Version** shows the TrueNAS release version running on your system.

**Choose File** opens a browser window where you can locate the downloaded update file.

The **Update File Temporary Storage Location** dropdown list includes two options:
* **Memory Device** 
* A mount location on the system designating where on the system to store the upgrade file. For example, a pool or dataset path on your system.

**Apply Update** starts the installation.
