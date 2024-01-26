---
title: "Nightly Version Notes"
description: "Highlights, change log, and known issues for the latest SCALE nightly development version."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/scale22.12/
 - /scale/24.04/gettingstarted/scalereleasenotes/
weight: 10
related: false
---

{{< hint type="tip" >}}
This page is being rebuilt with notes about the latest TrueNAS SCALE nightly development versions.
This is currently SCALE 24.04 (Dragonfish).
The latest TrueNAS SCALE stable version release notes are linked from the [Documentation Hub Home](/) or available in the specific Version documentation.
{{< /hint >}}

<!-- ## SCALE 24.04 (Dragonfish) Primary Features

TrueNAS SCALE 24.04 introduces many new features and continued improvements to the TrueNAS SCALE experience:

 -->

## Obtaining a Release

{{< include file="_includes/NightlyTestWarning.md" >}}

To download an <file>.iso</file> file for installing or upgrading to a SCALE 24.04 nightly version, go to https://download.truenas.com/truenas-scale-dragonfish-nightly/, select the <file>.iso</file> file for the most recent version, and click **Download**.

More details are available from [Versions and Schedules]({{< relref "/TrueNASUpgrades/_index.md" >}}).

{{< expand "Release Schedule (Click to expand)" "v" >}}

## Software Lifecycle

{{< include file="/content/_includes/LifecycleTable.md" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" >}}

## TrueNAS SCALE Release Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}
{{< /expand >}}

## Upgrade Notes

* Users with unofficial apps installed should review app storage drivers to determine if any utilize the OpenEBS-ZFS container storage interface (CSI) before upgrading. This CSI is not supported in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)). Unofficial apps which use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backup for those apps. New users are not able to install and deploy these apps.

* TrueNAS SCALE 24.04 (Dragonfish) no longer includes the deprecated gluster component.
  Systems installed with 24.04 cannot be used in experimental TrueCommand clusters.
  Community users that experimented with this now-deprecated TrueCommand feature need to migrate any data from the TrueCommand cluster and delete it before upgrading any clustered SCALE systems to 24.04.

<!-- ### Upgrade Paths -->

<!-- ## Component Versions -->

## Nightly Changelog

Notable changes:

* systemd nspawn containers are added as an unsupported community feature for advanced containerization users to deploy custom software in persistent containers.
* The deprecated gluster component is removed and all other gluster-related components are removed from TrueNAS SCALE.
* ZFS ARC memory allocations are now identical to TrueNAS CORE ([NAS-123034](https://ixsystems.atlassian.net/browse/NAS-123034)).
* OpenEBS-ZFS container storage interface (CSI) driver support is removed in TrueNAS SCALE 24.04 ([Removal Notice](https://www.truenas.com/community/threads/openebs-zfs-driver-removal-notice.115026/)).
  
  New and existing users who only use official apps are unaffected by this change, as these apps do not use OpenEBS-ZFS CSI drivers.
  Unofficial apps are unaffected if they are configured as outlined below.
  
  Unofficial apps which use OpenEBS-ZFS CSI drivers should maintain functionality for existing deployments, but users are not able to make backups or restore any existing backup for those apps. New users are not able to install and deploy these apps.
  
  Maintainers of unofficial catalog apps using OpenEBS-ZFS CSI drivers should either begin to ship a CSI driver with the app or use the one provided in SCALE.
