---
title: 13.3 Version Notes
description: "Highlights and change log for each TrueNAS CORE 13.3 release."
weight: 3
related: false
aliases:
 - /coretutorials/systemconfiguration/configuringfailover/
 - /coretutorials/systemconfiguration/configuringkmip/
 - /coretutorials/sharing/iscsi/settingupfibrechannel/
 - /uireference/system/failover/
 - /uireference/system/viewenclosure/
 - /uireference/system/kmip/
 - /uireference/sharing/iscsi/fibrechannel/
---

{{< header logo="/images/truenas-core-logo.png" logo_alt="TrueNAS CORE Logo" version="13.3" icon="" icon_alt="" >}}

{{< include file="/static/includes/13.3Overview.md" >}}

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=core-releases defaultTab=2 >}}

## Upgrade Notes

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and removed in CORE 13.3 ([NAS-127694](https://ixsystems.atlassian.net/browse/NAS-127694)).
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should move any production data away from the S3 service storage location before migrating to TrueNAS 24.04 or newer, which have MinIO applications available.
  See also [Feature Deprecations]({{< ref "Deprecations" >}}).

* The web UI **Shell** is removed in CORE 13.3. Users can continue to access the shell using [SSH]({{< ref "ConfiguringSSH" >}}) or a physical system connection with serial cable or other direct method ([NAS-124392](https://ixsystems.atlassian.net/browse/NAS-124392)).

* The Plugins, Jails, and Virtual Machines features are untested and provided without support to the TrueNAS Community.
  Users with a critical need to use containers or virtualization solutions in production should migrate to the tested and supported virtualization features available in [TrueNAS SCALE](https://www.truenas.com/download-truenas-scale/).
  [TrueNAS Enterprise customers](https://www.truenas.com/truenas-enterprise/) can contact iXsystems to schedule a TrueNAS SCALE deployment.
  See [CORE to SCALE Migrations](https://www.truenas.com/docs/scale/gettingstarted/migrate/) for more information.

## Obtaining a Release

13.3 releases are only available as manual update <file>.tar</file> or full installation <file>.iso</file> files.
Go to https://www.truenas.com/download-truenas-core/ to download either file type.

See [Updating TrueNAS]({{< ref "/CORETutorials/UpdatingTrueNAS/" >}}) for instructions about updating with either file type.

### Upgrade Paths

{{< include file="/static/includes/COREUpgradePaths.md" >}}

## Component Versions

Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| FreeBSD | [13.3-RELEASE-p2](https://www.freebsd.org/releases/13.3R/relnotes/) |
| OpenZFS | [2.2.4-1](https://github.com/openzfs/zfs/releases/tag/zfs-2.2.4) |
{{< /truetable >}}

### New OpenZFS Feature Flags
The items listed here represent new feature flags implemented since the previous update to the built-in OpenZFS version.

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| blake3 | [org.openzfs:blake3](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:blake3) | |
| block_cloning | [com.fudosecurity:block_cloning](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.fudosecurity:block_cloning) | |
| draid | [org.openzfs:draid](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:draid) | draid is not supported in the TrueNAS CORE web interface. See [TrueNAS SCALE](https://www.truenas.com/truenas-scale/) for this feature. |
| head_errlog | [com.delphix:head_errlog](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.delphix:head_errlog) | |
| vdev_zaps_v2 | [com.klarasystems:vdev_zaps_v2](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#com.klarasystems:vdev_zaps_v2) | |
| zilsaxattr | [org.openzfs:zilsaxattr](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#org.openzfs:zilsaxattr) |  |
{{< /truetable >}}

For more details on feature flags see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 13.3-U1.1 Changelog

**January 31, 2025**

iXsystems is pleased to release TrueNAS 13.3-U1.1!

This is a maintenance release with important updates for the rsync service.

* Updates to the rsync daemon mode to address recent CVEs ([NAS-133561](https://ixsystems.atlassian.net/browse/NAS-133561)).
  See the [TrueNAS Security Advisories](https://security.truenas.com/) for more details about the CVEs, including the iXsystems response.

* Port additional upstream fix for the rsync daemon ([NAS-133755](https://ixsystems.atlassian.net/browse/NAS-133755)).

## 13.3-U1 Changelog

**November 21, 2024**

iXsystems is pleased to release TrueNAS 13.3-U1!

This is a maintenance release with important security updates.
It is recommended for all users of CORE and Enterprise running 13.x or previous software versions.
TrueNAS SCALE & SCALE Enterprise systems are not impacted.

* Resolve a vulnerability involving python deserialization ([CVE-2020-22083](https://github.com/advisories/GHSA-j66q-qmrc-89rx)).

* Address a security vulnerability with the jails system (iocage).

In addition to the included fixes included, additional vulnerabilities are identified related to iocage (A FreeBSD jail manager), which is the infrastructure component that operates both the Jails and the Plugins system on CORE.
This update includes a mitigation that ensures any systems not running jails or plugins are safe from the iocage vulnerability impact.

Because these vulnerabilities are architectural in nature and the iocage application has not been under active development for many years, it is unlikely to receive fixes related to these vulnerabilities.
Systems running Jails or Plugins are still be exposed to the iocage vulnerabilities.

Users who run 3rd party applications on TrueNAS are highly encouraged to upgrade to SCALE, which is actively supported and not impacted by any known vulnerabilities at this time.
As always, users are encouraged to follow [security best-practices](https://www.truenas.com/docs/solutions/optimizations/security/) to minimize the risk to your system and important data.

TrueNAS Enterprise 13.x users should schedule an update with [TrueNAS Support](https://www.ixsystems.com/support/truenas-arrays/).

For other known issues in 13.3 releases, please see the <a href="https://ixsystems.atlassian.net/issues/?filter=10583" target="_blank">13.3-RELEASE Ongoing Issues</a> list available from Jira.

## 13.3-RELEASE Changelog

**August 13, 2024**

iXsystems is pleased to release TrueNAS CORE 13.3-RELEASE!
This stabilized release is intended only for community users who are looking for the upstream incremental fixes included in this release.
See the 13.3 introduction at the top of this page or the [official announcement](https://forums.truenas.com/t/truenas-core-13-3-release-in-august/10344) for more details.

This release includes a very small number of notable changes from the BETA2 release:

* Updates openssh package to address CVE-2024-6387 ([NAS-129828](https://ixsystems.atlassian.net/browse/NAS-129828))
* Includes VNC functionality fixes ([NAS-130278](https://ixsystems.atlassian.net/browse/NAS-130278))
* Fixes image placeholders for iX Plugins ([NAS-129352](https://ixsystems.atlassian.net/browse/NAS-129352))
* Updates samba and fixes issue with Time Machine share and snapshot creation ([NAS-130169](https://ixsystems.atlassian.net/browse/NAS-130169))

<a href="https://ixsystems.atlassian.net/issues/?filter=10582" target="_blank">Click here for the full changelog</a> of completed tickets that are included in this release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 13.3-RELEASE Ongoing Issues

<a href="https://ixsystems.atlassian.net/issues/?filter=10583" target="_blank">Click here to see the latest information</a> about issues discovered in this release, including future fix versions.

## 13.3-BETA2 Changelog

{{< expand "Click to expand" "v" >}}
{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

**June 4, 2024**

iXsystems is pleased to release TrueNAS CORE 13.3-BETA2!
This early release includes improvements and fixes for issues discovered after the release of 13.3-BETA1.

Notable changes:

* Fixed replication for SSH+NETCAT connections ([NAS-128866](https://ixsystems.atlassian.net/browse/NAS-128866)).
* Allow creation of more than 4 billion files per dataset ([NAS-129166](https://ixsystems.atlassian.net/browse/NAS-129166)).
* OpenZFS version updated to 2.2.4-1 ([NAS-128853](https://ixsystems.atlassian.net/browse/NAS-128853)).
* Fixes to ensure TrueCommand functions as expected on TrueNAS Enterprise High Availability (HA) systems ([NAS-128704](https://ixsystems.atlassian.net/browse/NAS-128704)).
* UI fix for enclosure screen to correctly report disks as attached ([NAS-128468](https://ixsystems.atlassian.net/browse/NAS-128468)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10567" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 13.3-BETA2 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 13.3-BETA2 Ongoing Issues

<a href="https://ixsystems.atlassian.net/issues/?filter=10568" target="_blank">Click here to see the latest information</a> about issues discovered in 13.3-BETA2 that are being resolved in a future TrueNAS CORE release.

{{< /expand >}}

## 13.3-BETA1 Changelog

{{< expand "Click to expand" "v" >}}
{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

**May 7, 2024**

iXsystems is pleased to release TrueNAS CORE 13.3-BETA1!
This has software component updates and security fixes that are in the polishing phase.

Notable changes:

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and removed in CORE 13.3 ([NAS-127694](https://ixsystems.atlassian.net/browse/NAS-127694)).
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should move any production data away from the S3 service storage location and consider migrating to TrueNAS 24.04 or newer releases that have Minio Applications available.
  See also [Feature Deprecations]({{< ref "Deprecations" >}}).

* The web UI **Shell** is removed in CORE 13.3. Users can continue to access the shell using [SSH]({{< ref "ConfiguringSSH" >}}) or a physical system connection with serial cable or other direct method ([NAS-124392](https://ixsystems.atlassian.net/browse/NAS-124392)).

* The Plugins, Jails, and Virtual Machines features are untested and provided without support to the TrueNAS Community.
  Users with a critical need to use containers or virtualization solutions in production should migrate to the tested and supported virtualization features available in [TrueNAS SCALE](https://www.truenas.com/download-truenas-scale/).
  [TrueNAS Enterprise customers](https://www.truenas.com/truenas-enterprise/) can contact iXsystems to schedule a TrueNAS SCALE deployment.
  See [CORE to SCALE Migrations](https://www.truenas.com/docs/scale/gettingstarted/migrate/) for more information.

* Update SAMBA to version 4.19 ([NAS-120600](https://ixsystems.atlassian.net/browse/NAS-120600)).
* Update rsync to version 3.2.7 ([NAS-124036](https://ixsystems.atlassian.net/browse/NAS-124036)).
* Fix macOS Time Machine backup and snapshot issues ([NAS-125197](https://ixsystems.atlassian.net/browse/NAS-125197) and [NAS-125218](https://ixsystems.atlassian.net/browse/NAS-125218)).
* Bugfix for zettarepl memory leak ([NAS-125338](https://ixsystems.atlassian.net/browse/NAS-125338)).
* Allow ampersand (&) character in user email addresses ([NAS-125483](https://ixsystems.atlassian.net/browse/NAS-125483)).
* SNMP agent bugfix ([NAS-125904](https://ixsystems.atlassian.net/browse/NAS-125904)).
* Pagination offset and limit improvements for /api/v2.0/certificate ([NAS-126080](https://ixsystems.atlassian.net/browse/NAS-126080)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10548" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 13.3-BETA1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 13.3-BETA1 Ongoing Issues

{{< enterprise-error >}}
We are aware of an issue impacting TrueCommand connections for High Availability (HA) systems.
TrueNAS Enterprise HA customers should not upgrade to 13.3-BETA1 at this time.
{{< /enterprise-error >}}

<a href="https://ixsystems.atlassian.net/issues/?filter=10549" target="_blank">Click here to see the latest information</a> about public issues discovered in 13.3-BETA1 that are being resolved in a future TrueNAS CORE release.

{{< /expand >}}
