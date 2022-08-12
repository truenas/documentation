---
title: "TrueNAS Upgrades"
weight: 25
---

{{< toc >}}

There are a variety of options for updating your TrueNAS installation and new options for migrating between TrueNAS CORE and SCALE!
Here are the current "trains" (linear update paths) for updating TrueNAS and some additional notes about TrueNAS migrations.

## Current Release Trains

These are the public release trains that contain the most tested and stable version of the various softwares to date.

* TrueNAS CORE: **12.0**
* TrueNAS Enterprise: **12.0**

## Prerelease Trains

These trains have the various preview / early build releases of the software.

* TrueNAS SCALE: **22.02.RC.2**

## Nightly / Developer Images

* TrueNAS 13.0
* TrueNAS SCALE "Bluefin"

### Upgrading to a Nightly Image

TrueNAS offers "nightly" images which allow adventurous users and developers to participate in early testing and feedback of future versions of TrueNAS.
These images should not be used in production, and users are required to roll back to a previous "released" version before upgrading again to a stable release.

See [CORE Updates]({{< relref "UpdatingCORE.md" >}}) for more information about how to use nightly images.

## Migrating from CORE to SCALE

{{< hint danger >}}
SCALE is a new and maturing software.
CORE systems with High Availability enabled (HA) can not be upgraded to SCALE with HA.
It is not suitable for TrueNAS Enterprise customers and CORE users should always exercise caution and back up their data and system configuration before starting an upgrade.
{{< /hint >}}

TrueNAS CORE 12.0 and later users can now migrate to SCALE!
This update can be performed with an <file>.iso</file> and USB stick and preserves much of your existing CORE configuration.
See [Migrating from CORE]({{< relref "/Content/SCALE/GettingStarted/Migrate/MigratingFromCORE.md" >}}) for the USB migration process.

## Previous Versions of TrueNAS CORE

Previous versions of TrueNAS CORE can be downloaded at https://www.truenas.com/download-truenas-core/.
