---
title: "24.10 (Electric Eel) Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 24.10 release versions."
weight: 10
related: false
---
{{< header logo="/images/tn-scale-logo.png" logo_alt="TrueNAS Logo" version="24.10 Electric Eel" icon="" icon_alt="" >}}

{{< hint type="tip" title="24.10 Early Release Documentation" >}}
This page tracks the latest development roadmap and release notes for the next upcoming TrueNAS major version, 24.10 (Electric Eel).
The stable [24.04 (Dragonfish) release notes](https://www.truenas.com/docs/scale/24.04/gettingstarted/scalereleasenotes/) are available with documentation for that version.
{{< /hint >}}

## Features

{{< include file="/static/includes/24.10FeatureList.md" >}}

## Obtaining a Release

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

24.10 (Electric Eel) early releases (BETA and RC) are available from the [TrueNAS download page](https://www.truenas.com/download-truenas-scale/).

For adventurous users that want to experiment with the latest feature development, nightly build [.iso](https://download.truenas.com/truenas-scale-electriceel-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-ElectricEel-Nightlies/) files are available.

More details are available from [Software Releases](https://www.truenas.com/docs/softwarereleases/).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=3 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

* TrueNAS is an appliance built from specific Linux packages.
  Attempting to update TrueNAS with `apt` or methods other than the web interface can result in a nonfunctional system.

* All auxiliary parameters can experience changes between TrueNAS major versions due to security and development changes.
  We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading as these settings can result in SMB share failures after an upgrade.

* {{< include file="/static/includes/UpgradeClearCache.md" >}}

* 24.10 moves the applications backend from Kubernetes to Docker ([announcement](https://forums.truenas.com/t/the-future-of-electric-eel-and-apps/5409)).

  * All applications available from official trains in 24.04 are available to install in 24.10.
    Supported catalog applications automatically migrate to Docker deployments on upgrade from from 24.04 (Dragonfish) to Electric Eel.

  * Custom application installs are enabled in 24.10-RC.1.
    There are two options to install a custom application from the **Applications > Discover** screen for the RC.1 release:

    * Click **Custom App** to install an application using a Docker Compose YAML file.
    Note: applications installed using the **Custom App** button are not editable via the TrueNAS UI in 24.10-RC.1 (see [Known Issues](#2410-rc1-known-issues) below).

    * Select the **Ix-app** application widget on the **Discover** screen, then click **Install** on the information screen to deploy a docker image with a simple installation wizard.
    Applications installed using this option can be edited in the TrueNAS UI.

    Additional development for the 24.10.0 release version will simplify these options so that the **Custom App** button will open the install wizard and also contain a dropdown option to **Install via YAML**.
  
  * Automatic app migration on upgrade from 24.04 is generally at parity for all applications.
    A few applications, such as home-assistant, might require manual migration steps, depending on the options enabled in 24.04.
    See the [Parity Status with truenas/charts](https://github.com/truenas/apps?tab=readme-ov-file#parity-status-with-truenascharts) chart from the /truenas/apps/ github repository for more information.

    In the event of a migration failure, configuration data for applications that do not automatically migrate is retained in the ixapplications dataset.
    You can re-initiate migration of previously-installed Kubernetes apps to Docker at any time after upgrading to Electric Eel.
    From a shell session enter {{< cli >}}midclt call -job k8s_to_docker.migrate *poolname*{{< /cli >}}, where *poolname* is the name of the applications pool.

    * Custom applications installed using the TrueNAS UI in 24.04 automatically migrate on upgrade to 24.10.

    * Applications from third-party catalogs, such as TrueCharts, do not support automatic migration to 24.10.
      Migration of third-party applications generally requires manual data backup and redeployment.

      Third-party catalogs are provided, maintained, and supported by individuals or organizations outside of iXsystems.
      Refer to the catalog maintainer or the [TrueNAS Community forums](https://forums.truenas.com/) for migration support.

  {{< hint type=important title="Migrating Apps with Host Path ACLs" >}}
  Users with applications installed on 24.04 using host path volume mounts and **ACL Entries** defined in the app configuration screen must go to the app edit screen and set the **Force Flag** checkbox under **ACL Options** prior to updating to 24.10. This ensures the app fully migrates and doesn't encounter issues when the mount point has existing data.
  {{< /hint >}}

* Starting in 24.10, TrueNAS does not install a default NVIDIA driver.
  This allows for driver updates in between TrueNAS release versions.
  
  Users can enable driver installation from the **Installed** applications screen.
  Click **Configure** > **Settings** and select **Install NVIDIA Drivers**.
  This option is only available for users with a compatible NVIDIA GPU and no drivers installed or for users who have previously enabled the setting.

* Support for the deprecated LDAP **Samba Schema** is removed in 24.10.
  Users with both LDAP and SMB shares configured should migrate legacy Samba domains to Active Directory before upgrading to 24.10.

* Electric Eel introduces redesigns of the UI **Dashboard** and **View Enclosure** screens with numerous improvements to system and enclosure management.
  The legacy **Dashboard** and **View Enclosure** screens are removed in the RC.1 release version.

* SMB audit log entries are omitted by default from the **System > Audit** screen.
  To view SMB audit results, go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Audit Logs">receipt_long</i> **Audit Logs** for the SMB service or use advanced search on the main **Audit** screen to query SMB events.
  
### Upgrade Paths (Anticipated)

{{< include file="/static/includes/24.10UpgradeMethods.md" >}}

See the <a href="https://www.truenas.com/software-status/" target="_blank">TrueNAS Software Status</a> page for recommendations about which software version to use based on your user type.

Update the system to the latest maintenance release of the installed major version before attempting to upgrade to a new TrueNAS major version.

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

### TrueNAS Migrations

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< enterprise >}}
Enterprise customers with HA systems should contact iXsystems Support for assistance with migrating.
{{< expand "iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

When attempting to migrate from TrueNAS 13.0 (or 13.3 for community members), the general recommendation is to back up the system configuration file and use an **.iso** file to fresh install TrueNAS.
After install, restore the system configuration and import the pools.

Depending on the specific system configuration, this can be a straightforward or complicated process.
See the [Migration articles]({{< relref "/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the migration process.

You must either clean install using an <file>iso</file> or use an upgrade file to migrate a TrueNAS 13.0 (or 13.3 for community users) system to 24.04 (Dragonfish) before upgrading to 24.10 (Electric Eel).
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/#expand-1-Enterprise%20HA%20Migrations) for assistance with migrating.

## Component Versions
Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [6.6.44](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.44) |
| OpenZFS | [2.2.99-2](https://github.com/openzfs/zfs/tree/zfs-2.2.99) |
| Docker Engine | [27.1.1](https://docs.docker.com/engine/release-notes/27/#2711) |
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

## 24.10-RC.1 Changelog

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**October 2, 2024**

iXsystems is pleased to release TrueNAS 24.10-RC.1!
This release candidate version has software component updates and new features that are in the polishing phase as well as fixes for issues discovered in 24.10-BETA.1.

Notable changes:

* Convert audit message_timestamp for sudo to UTC ([NAS-130373](https://ixsystems.atlassian.net/browse/NAS-130373)).

* The previous **Dashboard** and **View Enclosure** UI screens are removed ([NAS-130582](https://ixsystems.atlassian.net/browse/NAS-130582)).

* Fix issues with TrueCloud Backup restoration paths and scheduling ([NAS-130644](https://ixsystems.atlassian.net/browse/NAS-130644), [NAS-130794](https://ixsystems.atlassian.net/browse/NAS-130794), and [NAS-130320](https://ixsystems.atlassian.net/browse/NAS-130320)).

* Prevent incorrect auto-populated portal group IDs on iSCSI target ([NAS-130656](https://ixsystems.atlassian.net/browse/NAS-130656)).

* Add alert for every successful root, admin, or truenas_admin, login to the TrueNAS web UI ([NAS-127040](https://ixsystems.atlassian.net/browse/NAS-127040)).

* Prevent systemd journal from producing duplicate audit entries on upgrade ([NAS-131125](https://ixsystems.atlassian.net/browse/NAS-131125)).

* Ensure snapshot batch deletion targets only selected snapshots ([NAS-130874](https://ixsystems.atlassian.net/browse/NAS-130874)).

* Remove acltype normalization for datasets ([NAS-130877](https://ixsystems.atlassian.net/browse/NAS-130877)).

* Fix dRAID logic for number of children when creating a pool ([NAS-130678](https://ixsystems.atlassian.net/browse/NAS-130678)).

* UI support for installing NVIDIA GPU drivers is added ([NAS-130588](https://ixsystems.atlassian.net/browse/NAS-130588)).

* Improve handling for file renaming in case insensitive filesystems ([NAS-130743](https://ixsystems.atlassian.net/browse/NAS-130743)).

* Prevent applications from running startup processes before acquiring the default interface ([NAS-130863](https://ixsystems.atlassian.net/browse/NAS-130863)).

* Fix issues with user.update endpoint ([NAS-130696](https://ixsystems.atlassian.net/browse/NAS-130696)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10887" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 24.10-RC.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 24.10-RC.1 Known Issues

* GPU passthrough issues can occur due to the UI passing malformed data to `system.advanced.update_gpu_pci_ids` resulting in an error dialog on VM creation ([NAS-130983](https://ixsystems.atlassian.net/browse/NAS-130983)).
  Users who encounter this issue can simply close the dialog.
  The VM should be created with the GPU attached, as expected.

* Custom Docker Compose applications deployed via the **Custom App** button and YAML editor cannot be edited after deployment in 24.10-RC.1 ([NAS-131147](https://ixsystems.atlassian.net/browse/NAS-131147)).
  A fix is expected in the 24.10.0 release.
  RC.1 users can delete, edit the YAML file, and then redeploy custom applications to make changes.
  Custom applications deployed via the **Ix-app** deployment wizard can be edited in the TrueNAS UI.

* Docker applications do not support IPv6 at present ([NAS-131333](https://ixsystems.atlassian.net/browse/NAS-131333)).

* A user reports errors restarting the Docker service on system reboot ([NAS-131328](https://ixsystems.atlassian.net/browse/NAS-131328)).

* Applications with available updates display an option to view changelogs. These changelogs are not populated at present ([NAS-131297](https://ixsystems.atlassian.net/browse/NAS-131297)).

* Application **Web UI** buttons, accessed from the **Application Info** widget, can default to a 0.0.0.0:*port* address after app install ([NAS-131308](https://ixsystems.atlassian.net/browse/NAS-131308)).
  Refresh the browser window, or manually access the port in the form *hostname or IP address*:*port*, to correct button function and access the app UI.

* The SMB Share **Purpose** presets on the **Add SMB** screen do not adjust advanced options when set ([NAS-131374](https://ixsystems.atlassian.net/browse/NAS-131374)).
  Users encountering this issue can manually set the required advanced options.
  See [Advanced Options Presets]({{< relref "SMBSharesScreens.md #advanced-options-presets">}}) in the UI reference guide for more information.

* Some users have reported incomplete shutdown and reboot behavior ([NAS-130118](https://ixsystems.atlassian.net/browse/NAS-130118)). This issue has not been reported in iXsystems hardware.

* Unexpected behavior can occur when unlocking a dataset with recursive set to false ([NAS-130329](https://ixsystems.atlassian.net/browse/NAS-130329)). Child datasets with inherited keys are also unlocked with the parent dataset.

* Development of the new RAIDZ pool expansion feature is ongoing, with fixes for known issues expected in the 24.10.0 release ([NAS-131207](https://ixsystems.atlassian.net/browse/NAS-131207) and [NAS-131028](https://ixsystems.atlassian.net/browse/NAS-131028)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10886" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.10-RC.1 that are being resolved in a future TrueNAS release.

## 24.10-BETA.1 Changelog

{{< expand "Click to Expand" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**August 29, 2024**

iXsystems is pleased to release TrueNAS 24.10-BETA.1!
This has software component updates and new features that are in the polishing phase.

Notable changes:

* Dashboard reworked with more widgets, data reporting, and customization ([NAS-127217](https://ixsystems.atlassian.net/browse/NAS-127217)).

* Applications backend framework is shifted from Kubernetes to Docker. See the official [announcement](https://forums.truenas.com/t/the-future-of-electric-eel-and-apps/5409) for more information. The **Custom App** installation screen is disabled in 24.10-BETA.1. A redesigned screen, including Docker Compose support, is anticipated for the RC.1 version. See [Upgrade Notes](#upgrade-notes) for more information.
  
* New [TrueCloud Backup Tasks]({{< relref "TrueCloudTasks.md" >}}) with streamlined functionality for Storj iX cloud backups and restoration ([NAS-127165](https://ixsystems.atlassian.net/browse/NAS-127165)).

* [Extend a RAIDZ vdev]({{< relref "ManagePoolsScale.md #extending-a-raidz-vdev" >}}) with individual disks (OpenZFS feature sponsored by iXsystems) ([NAS-123548](https://ixsystems.atlassian.net/browse/NAS-123548)).

* New [global search]({{< relref "GlobalSearch.md" >}}) for finding pages and settings in the TrueNAS UI ([NAS-127224](https://ixsystems.atlassian.net/browse/NAS-127224)).

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

### 24.10-BETA.1 Known Issues

* The **System > Audit** screen can display different values for **Timestamp** in the entries list and **Localtime** in **Event Data**, depending on the local timezone of the system ([NAS-130373](https://ixsystems.atlassian.net/browse/NAS-130373)).
  
* Some users have reported incomplete shutdown and reboot behavior ([NAS-130118](https://ixsystems.atlassian.net/browse/NAS-130118)). This issue has not been reported in iXsystems hardware.

* Unexpected behavior can occur when unlocking a dataset with recursive set to false ([NAS-130329](https://ixsystems.atlassian.net/browse/NAS-130329)). Child datasets with inherited keys are also unlocked with the parent dataset.

* Development of the new TrueCloud backup feature for TrueNAS and Storj integration is ongoing, with fixes for known issues expected in a future 24.10 development version release ([NAS-130320](https://ixsystems.atlassian.net/browse/NAS-130320), [NAS-130794](https://ixsystems.atlassian.net/browse/NAS-130794), and [NAS-130644](https://ixsystems.atlassian.net/browse/NAS-130644)).

* Auto-populated portal group IDs for iSCSI configurations can differ between the **Portals** and **Targets** screen. This is a cosmetic issue in the UI and underlying functionality is not impacted ([NAS-130656](https://ixsystems.atlassian.net/browse/NAS-130656)).

* Audit logging status indicators on SMB share tables might not accurately reflect if logging is or is not enabled on a given share ([NAS-130830](https://ixsystems.atlassian.net/browse/NAS-130830)).

* App icons can periodically fail to render on the **Discover** applications screen, especially when searching for applications ([NAS-130831](https://ixsystems.atlassian.net/browse/NAS-130831)).

* On the virtual machine creation screen, a validation error displays if a configured GPU device is not valid for use in the VM. However, in some cases it can be possible to continue and create the VM with an invalid GPU configuration ([NAS-130754](https://ixsystems.atlassian.net/browse/NAS-130754)). If you receive a GPU validation error during VM creation, remove or correct the invalid GPU before creating the VM.

<a href="https://ixsystems.atlassian.net/issues/?filter=10588" target="_blank">Click here to see the latest information</a> about public issues discovered in 24.10-BETA.1 that are being resolved in a future TrueNAS release.
{{< /expand >}}
