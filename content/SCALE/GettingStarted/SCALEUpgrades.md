---
title: "Nightly Version Upgrades"
description: "Overview and processes for upgrading from earlier SCALE major versions to the latest nightly version."
weight: 35
---

{{< toc >}}

{{< hint type="tip" title="Work in Progress" >}}
This article is being rewritten to document changes in the latest TrueNAS SCALE nightly version.

To view related content for a previous major version releases, use the Product and Version drop downs at the top of this page or the links available on the [Docs Hub Home page](www.truenas.com/docs/).
{{< /hint >}}

<!--
There are a variety of options for upgrading to SCALE 23.10.

See the [Software Status page](https://www.truenas.com/software-status/) for iXsystems' software version recommendations based on user type.

## Upgrading from the Web Interface

Log in to the SCALE web interface and go to **System Settings > Update**.
The screen shows which update train is active for the install.

{{< truetable >}}
| Train Type | Name | Notes | 
|------------|------|-------|
| Stable Release | TrueNAS-SCALE-Bluefin | |
| Prerelease | TrueNAS-SCALE-Cobia-BETA | Intended for early testing and feature previews. Do not use a prerelease train for production use. |
| Nightly | TrueNAS-SCALE-Cobia-Nightlies | Adventurous users with disposable hardware only. Requires nightly [.iso file](https://download.truenas.com/truenas-scale-cobia-nightly/) upgrade to switch to this train. |
{{< /truetable >}}

When a new version is available, open the **Current Train** dropdown and select the desired release option.
TrueNAS begins checking for update files from the new train and stages any updates available from that location.

Alternately, uploading a <file>.update</file> file and manually updating switches the system between train types.
{{< expand "Manual Update Process (Click to expand)" "v" >}}
{{< include file="/content/_includes/ManualUpdates.md" >}}
{{< /expand >}}

Changing trains is a one-way operation!
Do not change to a prerelease or nightly release unless the system is intended to permanently remain on early versions and is not storing any critical data.

## Upgrading Using an ISO File

{{< include file="/content/_includes/ISOUpgrades.md" >}}

## Migrating from CORE to SCALE

{{< hint type=warning >}}
SCALE is a new and maturing software.
CORE systems with High Availability enabled (HA) can not be upgraded to SCALE with HA.

Migrating from CORE to SCALE is not recommended when custom modifications have been made to the system database.
If any such modifications are present in CORE, these must be reverted before attempting a migration to SCALE.
CORE users should always exercise caution and [back up their data]({{< relref "/SCALE/SCALETutorials/DataProtection/_index.md" >}}) and [system configuration]({{< relref "ManageSysConfigSCALE.md" >}}) before starting an upgrade.
{{< /hint >}}

{{< hint type=important >}}
Systems with TrueNAS CORE major version 12.0 or earlier must update to the latest CORE 13.0 release (e.g. 13.0-U5) prior to migrating to SCALE.
{{< /hint >}}

When appropriate, a CORE to SCALE migration is performed with an <file>.iso</file> and USB stick and preserves much of your existing CORE configuration.
See [Migrating from CORE]({{< relref "/SCALE/GettingStarted/Migrate/MigratingFromCORE.md" >}}) for the USB migration process.
-->