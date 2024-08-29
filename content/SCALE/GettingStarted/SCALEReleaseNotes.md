---
title: "24.10 (Electric Eel) Version Notes"
description: "Highlights, change log, and known issues for the latest SCALE nightly development version."
aliases:
 - /scale/scalereleasenotes/
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/scale22.12/
 - /scale/24.10/gettingstarted/scalereleasenotes/
weight: 10
related: false
---
{{< header logo="/images/tn-scale-logo.png" logo_alt="TrueNAS SCALE Logo" version="24.10 Electric Eel" icon="" icon_alt="" >}}

{{< hint type="tip" title="24.10 Early Release Documentation" >}}
This page tracks the latest development roadmap and release notes for the next upcoming TrueNAS SCALE major version, 24.10 (Electric Eel).
The stable [24.04 (Dragonfish) release notes](https://www.truenas.com/docs/scale/24.04/gettingstarted/scalereleasenotes/) are available with documentation for that version.
{{< /hint >}}

## Features

{{< include file="/static/includes/24.10FeatureList.md" >}}

## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

24.10 (Electric Eel) early releases (BETA and RC) are available from the [TrueNAS SCALE download page](https://www.truenas.com/download-truenas-scale/).

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

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in SMB share failures after an upgrade.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

* 24.10 moves the applications backend from Kubernetes to Docker ([announcement](https://forums.truenas.com/t/the-future-of-electric-eel-and-apps/5409)).

  * Supported catalog applications automatically migrate to Docker deployments on upgrade from from 24.04 (Dragonfish) to Electric Eel.
  
    App migration is receiving active development in 24.10-BETA.1.
    To see which applications currently support automatic migration, see the [Parity Status with truenas/charts](https://github.com/truenas/apps?tab=readme-ov-file#parity-status-with-truenascharts) chart from the /truenas/apps/ github repository.
    Applications that support migration display a green check (✅) in both **Added** and **Migrated** columns.
    Check back regularly and note the update history of the [README.md](https://github.com/truenas/apps/blob/master/README.md) file for the latest developments.

    Configuration data for applications that do not automatically migrate is retained in the ixapplications dataset.
    You can re-initiate migration of previously-installed Kubernetes apps to Docker at any time after upgrading to Electric Eel, for example to migrate an app that was not yet available for automatic migration upon upgrade but is now available.
    From a shell session enter {{< cli >}}midclt call -job k8s_to_docker.migrate *poolname*{{< /cli >}}, where *poolname* is the name of the applications pool.

  * Custom apps are not supported for migration on 24.10-BETA.1.
  The **Custom App** installation screen is disabled.
  A redesigned screen, including Docker Compose support, is anticipated for the RC.1 version.
  Users wishing to leverage Docker Compose in BETA can do so using the **Dockge** or **Portainer** apps, available from the [**Community**]({{< relref "/SCALE/SCALETutorials/Apps/CommunityApps/_index.md" >}}) train, or in a [**Sandbox**]({{< relref "Sandboxes.md" >}}).

* Starting in 24.10, TrueNAS does not install a default Nvidia driver.
  This allows for driver updates in between TrueNAS release versions.
  
  A UI selectable option to install/update Nvidia drivers is planned for a future 24.10 development version.
  Users needing Nvidia GPU support in 24.10.BETA.1 can enable this option from a shell session using the command {{< cli >}}midclt call -job docker.update '{"nvidia": true}'{{< /cli >}}.

* Support for the deprecated LDAP **Samba Schema** is removed in 24.10.
  Users with both LDAP and SMB shares configured should migrate legacy Samba domains to Active Directory before upgrading to 24.10.

* Electric Eel introduces redesigns of the UI **Dashboard** and **View Enclosure** screens with numerous improvements to system and enclosure management.
  24.10-BETA-1 includes both the new and legacy screen versions.
  Legacy versions are identified as **(old)** in the navigation menu.

  Removal of the legacy **Dashboard** and **View Enclosure** screens is anticipated in the RC.1 release version.

* SMB audit log entries are omitted by default from the **System > Audit** screen.
  To view SMB audit results, go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Audit Logs">receipt_long</i> **Audit Logs** for the SMB service or use advanced search on the main **Audit** screen to query SMB events.
  
### Upgrade Paths (Anticipated)

{{< include file="/static/includes/24.10UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS SCALE major version.

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

### CORE to SCALE Migrations

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

You must either clean install using an <file>iso</file> or use an upgrade file to migrate a TrueNAS CORE system to SCALE 24.10 (Electric Eel).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with transitioning from CORE to SCALE.

## Component Versions
Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [6.6.44](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.44) |
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

## 24.10-BETA.1 Changelog

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**August 29, 2024**

iXsystems is pleased to release TrueNAS 24.10-BETA.1!
This has software component updates and new features that are in the polishing phase.

Notable changes:

* Dashboard reworked with more widgets, data reporting, and customization ([NAS-127217](https://ixsystems.atlassian.net/browse/NAS-127217)).

* Applications backend framework is shifted from Kubernetes to Docker ([](https://ixsystems.atlassian.net/browse/)). See the official [announcement](https://forums.truenas.com/t/the-future-of-electric-eel-and-apps/5409) for more information. The **Custom App** installation screen is disabled in 24.10-BETA.1. A redesigned screen, including Docker Compose support, is anticipated for the RC.1 version. See [Upgrade Notes](#upgrade-notes) for more information.
  
* New [TrueCloud Backup Tasks]({{< relref "TrueCloudTasks.md" >}}) with streamlined functionality for Storj iX cloud backups and restoration ([NAS-127165](https://ixsystems.atlassian.net/browse/NAS-127165)).

* [Extend a RAIDZ vdev]({{< relref "ManagePoolsScale.md #extending-a-raidz-vdev" >}}) with individual disks (OpenZFS feature sponsored by iXsystems) ([NAS-123548](https://ixsystems.atlassian.net/browse/NAS-123548)).

* New [global search]({{< relref "GlobalSearch.md" >}}) for finding pages and settings in the SCALE UI ([NAS-127224](https://ixsystems.atlassian.net/browse/NAS-127224)).

* UI support for NVMe SMART tests [NAS-128116](https://ixsystems.atlassian.net/browse/NAS-128116)

* Align Enclosure Management code with CORE and improve the feature's performance ([NAS-123474](https://ixsystems.atlassian.net/browse/NAS-123474)).

* Improved web UI tables ([NAS-113063](https://ixsystems.atlassian.net/browse/NAS-113063)).
  
* Preserve SMB alternate data streams when ingesting data from remote servers ([NAS-127114](https://ixsystems.atlassian.net/browse/NAS-127114)).

* Rewrite TrueNAS installer to better support future development efforts ([NAS-127092](https://ixsystems.atlassian.net/browse/NAS-127092)).

* The **Allow root login** option is removed from the FTP service ([NAS-128837](https://ixsystems.atlassian.net/browse/NAS-128837)).
  
* Implement a globally unique system ID ([NAS-123519](https://ixsystems.atlassian.net/browse/NAS-123519)).

* Remove creation/reporting/management of swap on TrueNAS ([NAS-12887](https://ixsystems.atlassian.net/browse/NAS-12887)).

* Rename the default administrator account (UID 950) from **admin** to **truenas_admin** to prevent DS conflicts ([NAS-129997](https://ixsystems.atlassian.net/browse/NAS-129997)).
  This change affects fresh installs of 24.10 only.
  Existing **admin** accounts are preserved on upgrade.

  For improved security, we recommended that users create a unique administrator account and disable password access for default administrator accounts.
  See [Using Administrator Logins]({{< relref "adminroles.md" >}}) for more information.

* SMB audit log entries are omitted by default from the **System > Audit** screen ([NAS-130498](https://ixsystems.atlassian.net/browse/NAS-130498)).
  To view SMB audit results, go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Audit Logs">receipt_long</i> **Audit Logs** for the SMB service or use advanced search on the main **Audit** screen to query SMB events.

* Fix IPv6 bind for VM display ([NAS-128102](https://ixsystems.atlassian.net/browse/NAS-128102)).

* Replace nslcd with sssd ([NAS-127073](https://ixsystems.atlassian.net/browse/NAS-127073)).

* Fix management of SNMPv3 user ([NAS-128335](https://ixsystems.atlassian.net/browse/NAS-128335)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10587" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.10-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 24.04-BETA.1 Known Issues

* The **System > Audit** screen can display different values for **Timestamp** in the entries list and **Localtime** in **Event Data**, depending on the local timezone of the system ([NAS-130373](https://ixsystems.atlassian.net/browse/NAS-130373)).
  
* Some users have reported incomplete shutdown and reboot behavior ([NAS-130118](https://ixsystems.atlassian.net/browse/NAS-130118)). This issue has not been reported in iXsystems hardware.

* Unexpected behavior can occur when unlocking a dataset with recursive set to false ([NAS-130329](https://ixsystems.atlassian.net/browse/NAS-130329)). Child datasets with inherited keys are also unlocked with the parent dataset.

* Development of the new TrueCloud backup feature for TrueNAS and Storj integration is ongoing, with fixes for known issues expected in a future 24.10 development version release ([NAS-130320](https://ixsystems.atlassian.net/browse/NAS-130320), [NAS-130794](https://ixsystems.atlassian.net/browse/NAS-130794), and [NAS-130644](https://ixsystems.atlassian.net/browse/NAS-130644)).

* Auto-populated portal group IDs for iSCSI configurations can differ between the **Portals** and **Targets** screen. This is a cosmetic issue in the UI and underlying functionality is not impacted ([NAS-130656](https://ixsystems.atlassian.net/browse/NAS-130656)).

* Audit logging status indicators on SMB share tables might not accurately reflect if logging is or is not enabled on a given share ([NAS-130830](https://ixsystems.atlassian.net/browse/NAS-130830)).

* App icons can periodically fail to render on the **Descover** applications screen, especially when searching for applications ([NAS-130831](https://ixsystems.atlassian.net/browse/NAS-130831)).

* On the virtual machine creation screen, a validation error displays if a configured GPU device is not valid for use in the VM. However, in some cases it can be possible to continue and create the VM with an invalid GPU configuration ([NAS-130754](https://ixsystems.atlassian.net/browse/NAS-130754)). If you receive a GPU validation error during VM creation, remove or correct the invalid GPU before creating the VM.

<a href="https://ixsystems.atlassian.net/issues/?filter=10588" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.10-BETA.1 that are being resolved in a future TrueNAS SCALE release.
