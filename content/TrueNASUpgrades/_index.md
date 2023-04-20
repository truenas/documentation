---
title: "TrueNAS Upgrades"
weight: 25
---

{{< toc >}}

There are a variety of options for updating your TrueNAS installation and new options for migrating between TrueNAS CORE and SCALE!
Here are the current "trains" (linear update paths) for updating TrueNAS and some additional notes about TrueNAS migrations.

## Current Release Trains

These are the public release trains that contain the most tested and stable version of the various software to date.

* TrueNAS CORE: **TrueNAS-13.0-STABLE**
* TrueNAS Enterprise: **TrueNAS-13.0-STABLE**
* TrueNAS SCALE: **TrueNAS-SCALE-Bluefin**

## Prerelease Trains

These trains have the various preview / early build releases of the software.

*Coming Soon*

## Nightly / Developer Images

* TrueNAS 13.0
* TrueNAS SCALE "Cobia"

### Upgrading to a Nightly Image

TrueNAS offers "nightly" images which allow adventurous users and developers to participate in early testing and feedback of future versions of TrueNAS.
These images should not be used in production, and users are required to roll back to a previous "released" version before upgrading again to a stable release.

See [CORE Updates]({{< relref "UpdatingCORE.md" >}}) for more information about how to use nightly images.

## Migrating from CORE to SCALE

{{< hint type=warning >}}
SCALE is a new and maturing software.
CORE systems with High Availability enabled (HA) can not be upgraded to SCALE with HA.
It is not suitable for TrueNAS Enterprise customers and CORE users should always exercise caution and back up their data and system configuration before starting an upgrade.

Migrating from CORE to SCALE is not recommended when custom modifications have been made to the system database.
If any such modifications are present in CORE, these must be reverted before attempting a migration to SCALE.
{{< /hint >}}

{{< hint type=important >}}
Systems on 12.0x or lower should update to the latest CORE 13.0 release (e.g 13.0-U2) prior to migrating to SCALE.
{{< /hint >}}

The SCALE update can be performed with an <file>.iso</file> and USB stick and preserves much of your existing CORE configuration.
See [Migrating from CORE]({{< relref "/Content/SCALE/GettingStarted/Migrate/MigratingFromCORE.md" >}}) for the USB migration process.

## Previous Versions of TrueNAS CORE

Previous versions of TrueNAS CORE can be downloaded at https://www.truenas.com/download-truenas-core/.
