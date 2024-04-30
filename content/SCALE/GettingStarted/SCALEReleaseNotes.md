---
title: "24.10 (Electric Eel) Development Notes"
description: "Highlights, change log, and known issues for the latest SCALE nightly development version."
aliases:
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/scale22.12/
 - /scale/24.10/gettingstarted/scalereleasenotes/
weight: 10
related: false
---
{{< header logo="/images/tn-scale-logo.png" logo_alt="TrueNAS SCALE Logo" version="24.10 Electric Eel" icon="" icon_alt="" >}}

{{< hint type="tip" title="24.10 Nightly Documentation" >}}
This page tracks the latest development roadmap and release notes for the next upcoming TrueNAS SCALE major version, 24.10 (Electric Eel).
[24.04 (Dragonfish) release notes](https://www.truenas.com/docs/scale/24.04/gettingstarted/scalereleasenotes/) are available with that version's documentation.
{{< /hint >}}

## Anticipated Features

{{< include file="/static/includes/24.10FeatureList.md" >}}

To see the latest on each feature in active development, click one of the **NAS-###### development project** links above.

## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

<!-- (uncomment with BETA.1 release) 24.10 (Electric Eel) early releases (BETA and RC) are available from the [TrueNAS SCALE download page](https://www.truenas.com/download-truenas-scale/).
-->

For adventurous users that want to experiment with the latest feature development, nightly build [.iso](https://download.truenas.com/truenas-scale-electriceel-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-ElectricEel-Nightlies/) files are available.

More details are available from [Software Releases]({{< relref "/TrueNASUpgrades/_index.md" >}}).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

* TrueNAS SCALE is an appliance built from specific Linux packages.
  Attempting to update SCALE with `apt` or methods other than the SCALE web interface can result in a nonfunctional system.

* All auxiliary parameters can change between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

<!--
  ### Upgrade Paths
  
  There are a variety of options for upgrading to SCALE 24.04.
  
  {{< include file="/static/includes/24.04UpgradeMethods.md" >}}
  
  See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.
  
  Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.
  
  **TrueNAS SCALE (Anticipated)**
  
  {{< mermaid class="mermaid_sizing" >}}
  flowchart LR
  
  A["22.02.4 (Angelfish)"] |update| C
  B[CORE 13.0-U6.1] |ISO install| E
  C["22.12.4.2 (Bluefin)"] |update| D
  C["22.12.4.2 (Bluefin)"] |update| E
  D["23.10.2 (Cobia)"] |update| E
  E["24.04.0 (Dragonfish)"]
  {{< /mermaid >}}
  
  **TrueNAS SCALE Enterprise (Anticipated)**
  
  {{< mermaid class="mermaid_sizing" >}}
  flowchart LR
  A["CORE 13.0-U6.1"] |ISO install| D
  B["Current 23.10 (Cobia) release"] |update| C["23.10.2 (Cobia)"] |update| D["24.04.0 (Dragonfish)"]
  {{< /mermaid >}}

  ### CORE > SCALE Migrations
  
  {{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}
  
  {{< enterprise >}}
  Enterprise customers with HA systems should contact iXsystems Support for assistance with migrating to TrueNAS SCALE.
  {{< expand "iXsystems Support" "v" >}}
  {{< include file="content/_includes/iXsystemsSupportContact.md" >}}
  {{< /expand >}}
  {{< /enterprise >}}
  
  When attempting to migrate from TrueNAS CORE, the general recommendation is to back up the system configuration file and use a SCALE **.iso** file to fresh install TrueNAS.
  After install, restore the system configuration and import the pools.
  
  Depending on the specific system configuration, this can be a straightforward or complicated process.
  See the [Migration articles]({{< relref "/SCALE/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the CORE to SCALE migration process.
  
  You must either clean install or use an upgrade ***iso** file to migrate a TrueNAS CORE system to SCALE 24.04 (Dragonfish).
  Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with transitioning from CORE to SCALE.
-->
## Component Versions
Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [6.6.20](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.20) |
| NVIDIA Driver | [545.23.08-2](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) |
| OpenZFS | [2.2.99-2](https://github.com/openzfs/zfs/tree/zfs-2.2.99) |
{{< /truetable >}}

### OpenZFS Feature Flags
TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.1.11) are listed below:

{{< truetable >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| raidz expansion | [org.openzfs:raidz_expansion](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#raidz_expansion) |  |
| redaction list spill | [com.delphix:redaction_list_spill](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#redaction_list_spill) | |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

<!-- 24.10-BETA.1 (relnotes)-->
