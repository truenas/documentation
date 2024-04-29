---
title: 13.3 Version Notes
description: "Highlights and change log for each TrueNAS CORE 13.3 release."
weight: 3
aliases:
related: false
---
{{< header logo="/images/truenas-core-logo.png" logo_alt="TrueNAS CORE Logo" version="TrueNAS CORE 13.3" icon="" icon_alt="" >}}

{{< hint type="tip" title="13.3 Early Release Documentation">}}
This page tracks the latest development roadmap and release notes for the next upcoming TrueNAS CORE major version, 13.3.
The latest [TrueNAS CORE **13.0** version release notes](https://www.truenas.com/docs/core/13.0/gettingstarted/corereleasenotes/) are available from the TrueNAS CORE 13.0 documentation section.
{{< /hint >}}

{{< include file="/static/includes/13.3Overview.md" >}}

## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

To download a <file>.tar</file> file for installing or upgrading to a CORE 13.3 nightly version, go to https://www.truenas.com/download-truenas-core/ and click **Download Future Previews**.
Select the latest <file>.tar</file> file and click **Download**.

Log in to the web interface and go to **System > Update**.
Click **INSTALL MANUAL UPDATE FILE**.
Select **SAVE CONFIGURATION** when prompted.
Select an **Update File Temporary Storage Location** then click **Chose File** and browse to select the <file>.tar</file> file.
Click **APPLY UPDATE**.

More details are available from [Updating Core]({{< relref "updatingcore.md" >}}).

{{< expand "Release Schedule (Click to expand)" "v" >}}

## Software Lifecycle

{{< include file="/static/includes/LifecycleTable.md" >}}

{{< include file="/static/includes/SoftwareStatusPage.md" >}}

## Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=core-releases defaultTab=3 >}}
{{< /expand >}}

## Upgrade Notes

### Upgrade Paths

**TrueNAS CORE**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR

A["11.0-U7"] -->|update| B["11.2-U8"]
B -->|update| C["11.3-U5"]
C -->|update| D["13.0-U6.1"]
D -->|"(anticipated)"| E["13.3.0"]
{{< /mermaid >}}

**TrueNAS CORE Enterprise**

{{< mermaid class="mermaid_sizing" >}}
flowchart LR

A["11.0-U7"] -->|update| B["11.2-U8"]
B -->|update| C["11.3-U5"]
C -->|update| D["13.0-U6.1"]
{{< /mermaid >}}

## Component Versions

Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| FreeBSD | [13.3-RELEASE-1](https://www.freebsd.org/releases/13.3R/relnotes/) |
| OpenZFS | [2.2.3-1](https://github.com/openzfs/zfs/releases/tag/zfs-2.2.3) |
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

## 13.3-BETA.1 Changelog

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

**May 7, 2024**

iXsystems is pleased to release TrueNAS CORE 13.3-BETA.1!
This has software component updates and security fixes that are in the polishing phase.

Notable changes:

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and removed in CORE 13.3 ([NAS-127694](https://ixsystems.atlassian.net/browse/NAS-127694)).
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should migrate to a separately maintained [MinIO plugin]({{< relref "MinIOPlugin.md" >}}) or otherwise move any production data away from the S3 service storage location before upgrading to a 13.3 pre-release version.
  See the CORE 13.0 tutorial for [detailed migration instructions](http://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/).
  See also [Feature Deprecations]({{< relref "Deprecations.md" >}}).

* The web UI **Shell** is removed in CORE 13.3. Users can continue to access the shell using [SSH]({{< relref "ConfiguringSSH.md" >}}) or a physical system connection with serial cable or other direct method ([NAS-124392](https://ixsystems.atlassian.net/browse/NAS-124392)).

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

<a href="https://ixsystems.atlassian.net/issues/?filter=10526" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 13.3-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 13.3-BETA.1 Ongoing Issues

<a href="https://ixsystems.atlassian.net/issues/?filter=10527" target="_blank">Click here to see the latest information</a> about public issues discovered in 13.3-BETA.1 that are either being resolved in a future TrueNAS CORE release or are not to be fixed in CORE and are resolved in TrueNAS SCALE.
