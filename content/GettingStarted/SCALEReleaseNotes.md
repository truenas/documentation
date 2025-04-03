---
title: "24.10 (Electric Eel) Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 24.10 release versions."
weight: 10
related: false
---
{{< header logo="/images/tn-openstorage-logo.png" logo_alt="TrueNAS Logo" version="24.10 Electric Eel" icon="/images/SCALE_Electric_Eel_Icon.png" icon_alt="Electric Eel Icon" >}}

## Features

{{< include file="/static/includes/24.10FeatureList.md" >}}

## Obtaining a Release

24.10 (Electric Eel) is available from the [TrueNAS download page](https://www.truenas.com/download-truenas-scale/).

For adventurous users that want to experiment with the latest feature development, nightly build [.iso](https://download.truenas.com/truenas-scale-electriceel-nightly/) and [.update](https://update.sys.truenas.net/scale/TrueNAS-SCALE-ElectricEel-Nightlies/) files are available.

More details are available from [Software Releases](https://www.truenas.com/docs/softwarereleases/).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=2 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/LifecycleTable.md" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* 24.10 moves the applications backend from Kubernetes to Docker ([announcement](https://forums.truenas.com/t/the-future-of-electric-eel-and-apps/5409)).

  * All applications available from official catalogs in 24.04 are available to install in 24.10.
    Supported catalog applications automatically migrate to Docker deployments on upgrade from from 24.04 (Dragonfish) to Electric Eel.
    Applications from third-party catalogs, such as TrueCharts, do not automatically migrate to 24.10.
    See [Preparing for App Migration](#preparing-for-app-migration) below for more information.
  
  * Custom applications based on Docker images can be installed using the installation wizard or a Docker Compose YAML file.
    See [Installing Custom Applications](https://www.truenas.com/docs/truenasapps/usingcustomapp/) for more information.
  
  * Automatic app migration on upgrade from 24.04 is at parity for all official catalog applications.
    A few applications might require manual migration steps, depending on the options enabled in 24.04.
    For more information, see the comments for [Home Assistant](https://github.com/truenas/apps/pull/492) and [Tailscale](https://github.com/truenas/apps/pull/641).

    During the migration process, 24.10 creates a hidden Docker dataset on the apps pool that is mounted at <file>/mnt/.ix-apps</file>.
    TrueNAS then reads the stored Kubernetes app data in the previous <file>ix-applications</file> dataset, ports them to Docker, and saves them in the new Docker dataset.

    App storage ix-volumes present in ix-applications are cloned under the new Docker dataset and promoted.

    Because the previous ix-applications dataset is retained as is, 24.10 maintains the ability to roll back to your previous Dragonfish installation.

    You can re-initiate a failed migration of any previously-installed Kubernetes apps to Docker at any time after upgrading to Electric Eel.
    From a shell session enter {{< cli >}}midclt call -job k8s_to_docker.migrate *poolname*{{< /cli >}}, where *poolname* is the name of the applications pool, for example *tank*.

    Custom applications installed using the TrueNAS UI in 24.04 automatically migrate on upgrade to 24.10.
    Custom applications with nonstandard networking, such as an external interface attached, migrate, but the interface configuration is discarded.
    Users can either use the base networking as is or configure custom Docker networking using a YAML custom app deployment, Dockge, or Portainer.  

* Starting in 24.10, TrueNAS does not include a default NVIDIA GPU driver and instead provides a simple NVIDIA driver download option in the web interface.
  This allows for driver updates between TrueNAS release versions.
  
  Users can enable driver installation from the **Installed** applications screen.
  Click **Configure** > **Settings** and select **Install NVIDIA Drivers**.
  This option is only available for users with a compatible NVIDIA GPU and no drivers installed or for users who have previously enabled the setting.

* Support for the deprecated LDAP **Samba Schema** is removed in 24.10.
  Users with both LDAP and SMB shares configured should migrate legacy Samba domains to Active Directory before upgrading to 24.10.

* Electric Eel introduces redesigns of the UI **Dashboard** and **View Enclosure** screens with numerous improvements to system and enclosure management.
  The legacy **Dashboard** and **View Enclosure** screens are removed in the RC.1 release version.

* SMB audit log entries are omitted by default from the **System > Audit** screen.
  To view SMB audit results, go to **System > Services** and click <i class="material-icons" aria-hidden="true" title="Audit Logs">receipt_long</i> **Audit Logs** for the SMB service or use advanced search on the main **Audit** screen to query SMB events.

### Preparing for App Migration

{{< include file="/static/includes/AppsSupportTimeline.md" >}}

To prepare applications for migration from Kubernetes to Docker, address the following configurations before upgrading to 24.10:  
  
{{< truetable >}}
| Configuration | Action Needed |
|-----------|-------------|
| Outdated Applications | Update all applications to the latest available version in the TrueNAS catalog before migrating. |
| Host Path ACLs | Users with applications installed on 24.04 using host path volume mounts with **Enable ACL** selected and **ACL Entries** defined in the app configuration, must go to the **Edit *Application*** screen and set the [**Force Flag** checkbox under **ACL Options**](https://www.truenas.com/docs/scale/24.04/scaletutorials/apps/#storage-configuration-settings) before updating to 24.10. This ensures the app fully migrates and does not encounter issues when the mount point has existing data. |
| Encrypted Dataset | TrueNAS shows a warning and explains that applications do not migrate to 24.10 when the ix-applications dataset is configured on a pool with an encrypted dataset (see [NAS-131561](https://ixsystems.atlassian.net/browse/NAS-131561)). Relocate installed applications to an unencrypted pool on 24.04 before attempting to upgrade to 24.10. TrueNAS does attempt to migrate predefined encrypted host mount paths. |
| Third Party Applications | Applications from third-party catalogs, such as TrueCharts, do not support automatic migration to 24.10. Migration of third-party applications generally requires manual data backup and redeployment.<br><br>Third-party catalogs are provided, maintained, and supported by individuals or organizations outside of iXsystems. Refer to the catalog maintainer or the [TrueNAS Community forums](https://forums.truenas.com/) for migration support. |
| Container Dependent Network Settings | Applications do not migrate if TrueNAS network settings are configured to depend on any client container or application hosted on the TrueNAS system, such as DNS services, proxy networks, firewalls, and routers (see [NAS-131553](https://ixsystems.atlassian.net/browse/NAS-131553)). This is an unsupported configuration because TrueNAS cannot access the necessary networks during boot if the client container has not started. |
{{< /truetable >}}

### Upgrade Paths

{{< include file="/static/includes/24.10UpgradeMethods.md" >}}

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

### Migrating from TrueNAS CORE

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< enterprise >}}
Enterprise customers should contact iXsystems Support for assistance with migrating.
{{< expand "iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

When attempting to migrate from TrueNAS 13.0 (or 13.3 for community members), the general recommendation is to back up the system configuration file and use an **.iso** file to fresh install TrueNAS.
Upgrade your system to the latest publicly-available 13.0-U6.2 (or later) release before attempting to migrate.
After install, restore the system configuration and import the pools.

Depending on the specific system configuration, this can be a straightforward or complicated process.
See the [Migration articles]({{< relref "/GettingStarted/Migrate/_index.md" >}}) for cautions and notes about differences between each software and the migration process.

The only path to side-grade or migrate from 13.0-U6.2 or 13.3 is to install or upgrade to 24.04 (latest).
TrueNAS 24.10 and later releases do not support migrations from 13.X. These migrations cannot be done, and either fail or result in error conditions that cannot be resolved.
Download the <file>iso</file> for the latest maintenance release of TrueNAS 24.04 (see [Software Releases](https://www.truenas.com/docs/softwarereleases/)) and follow the instruction articles in this section.
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/) for assistance with migrating.

## Component Versions

Component version numbers below are current as of the latest TrueNAS 24.10 release.
Click the component version number to see the latest release notes for that component.

{{< truetable >}}
| Component | Version |
|-----------|-------------|
| Linux Kernel | [6.6.44](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tag/?h=v6.6.44) |
| OpenZFS | [2.2.99-1](https://github.com/openzfs/zfs/tree/zfs-2.2.99) |
| Docker Engine | [27.5.0](https://docs.docker.com/engine/release-notes/27/#2750) |
| Nvidia Driver | [550.142](https://www.nvidia.com/en-us/drivers/details/237853/) |
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

## 24.10.2.1

**April 3, 2025**

The TrueNAS team is pleased to release TrueNAS 24.10.2.1!

This maintenance release is focused on fixing a few OpenZFS-related priority issues that impact 24.10.2.

### Notable Changes

* Error with device removal and block pointers remap with cloned blocks [NAS-133555](https://ixsystems.atlassian.net/browse/NAS-133555).
* ZED fails to activate a hot spare if a device is removed by the kernel [NAS-135033](https://ixsystems.atlassian.net/browse/NAS-135033).
  An [OpenZFS patch](https://github.com/openzfs/zfs/pull/17187) was also submitted.

## 24.10.2

**January 28, 2025**

iXsystems is pleased to release TrueNAS 24.10.2!
This is a maintenance release and includes refinement and fixes for issues discovered or outstanding after the 24.10.1 release.

### Notable Changes

* Do not retrieve hidden zpool properties in `py-libzfs` by default ([NAS-132988](https://ixsystems.atlassian.net/browse/NAS-132988)). These properties include name, tname, maxblocksize, maxdnodesize, dedupditto and dedupcached. Users needing these properties can see the linked ticket for the `zpool` command to retrieve them.
* A **Force Remove iXVolumes** checkbox is exposed on app deletion for any apps migrated from 24.04 that were unable to be deleted due to a "dependent clones" error ([NAS-132914](https://ixsystems.atlassian.net/browse/NAS-132914)).
* New cloud backup option: **Use Absolute Paths** ([NAS-132920](https://ixsystems.atlassian.net/browse/NAS-132920)).
* Fix loading the `nvidia_drm` kernel module to populate the `/dev/dri` directory for NVIDIA GPU availability in apps like Plex ([NAS-133250](https://ixsystems.atlassian.net/browse/NAS-133250)).
* Fix `netbiosname` validation logic if AD enabled ([NAS-133167](https://ixsystems.atlassian.net/browse/NAS-133167)).
* Disallow specifying SSH credentials when rsync mode is MODULE ([NAS-132874](https://ixsystems.atlassian.net/browse/NAS-132874) and [NAS-132928](https://ixsystems.atlassian.net/browse/NAS-132928)).
* Simplify CPU widget logic to fix reporting issues for CPUs that have performance and efficiency cores ([NAS-133128](https://ixsystems.atlassian.net/browse/NAS-133128)).
* Properly support OCI image manifest for registries other than Docker ([NAS-133046](https://ixsystems.atlassian.net/browse/NAS-133046)).
* Remove explicit calls to the `syslog.syslog` module ([NAS-132657](https://ixsystems.atlassian.net/browse/NAS-132657)).
* Fix an ACL Editor Group/User Search Bug ([NAS-131841](https://ixsystems.atlassian.net/browse/NAS-131841)).
* Prevent infinite recursion on corrupted databases when deleting network interfaces ([NAS-132567](https://ixsystems.atlassian.net/browse/NAS-132567)).
* Clean up FTP banner to prevent Reolink camera failures ([NAS-132701](https://ixsystems.atlassian.net/browse/NAS-132701)).
* Refresh cloud sync credentials even if cloud sync task fails ([NAS-132851](https://ixsystems.atlassian.net/browse/NAS-132851)).
* Fix lagg (bond) alert ([NAS-133113](https://ixsystems.atlassian.net/browse/NAS-133113)).
* Make recovery attempt when initializing directory services ([NAS-133235](https://ixsystems.atlassian.net/browse/NAS-133235)).
* Fix extend window not showing up for spares ([NAS-133299](https://ixsystems.atlassian.net/browse/NAS-133299)).
* Remove stale locks before any TrueCloud Backup operation ([NAS-132612](https://ixsystems.atlassian.net/browse/NAS-132612)).

<a href="https://ixsystems.atlassian.net/issues/?filter=11414" target="_blank">Click here for the full changelog</a> of completed Jira tickets that are included in the 24.10.2 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* We are aware of an issue affecting SED disk unlock at boot, particularly for systems configured with per-disk SED passwords.
  A fix is expected in the TrueNAS 25.04 release.
* Some users who have applications with have NVIDIA GPU allocations report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see [NAS-132086](https://ixsystems.atlassian.net/browse/NAS-132086)).

  Users experiencing this error should follow the steps below for a one time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -job app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
    * `APP_NAME` is the name you entered in the application, for example “plex”.
    * `PCI_SLOT` is the pci slot identified in the error, for example "0000:2d:00.0”.
    * `GPU_UUID` is the UUID matching the pci slot that you retrieved with the above command.

<a href="https://ixsystems.atlassian.net/issues/?filter=11415" target="_blank">Click here to see the latest information on Jira</a> about public issues discovered in 24.10.2 that are being resolved in a future TrueNAS release.

## 24.10.1

{{< expand "Click to expand" "v" >}}
**December 17, 2024**

iXsystems is pleased to release TrueNAS 24.10.1!
This is a maintenance release and includes refinement and fixes for issues discovered after the 24.10.0 and 24.10.0.X releases.

### Notable Changes

* The `sendmail` command is removed for security reasons ([NAS-133174](https://ixsystems.atlassian.net/browse/NAS-133174)). Users previously using sendmail as part of their custom scripting should use `exim` instead.
* The boot pool is now properly enforcing the default `setuid` and `noexec` options ([NAS-127825](https://ixsystems.atlassian.net/browse/NAS-127825)). This restores the default boot pool behavior to be restricted from general use. Users that are currently attempting to exec scripts from a `/home` or other boot pool location should move these to a data pool location.
* Fix issue with zpl_get_name ([NAS-132930](https://ixsystems.atlassian.net/browse/NAS-132930)). This can improve performance in some specific NFS workloads with large directories (see the [commit](https://github.com/truenas/zfs/commit/c3513aeac5da5f3ce3e8da52e85a47ec0627e0b0) for more details).
* Rework Dashboard CPU widgets to show metrics per physical core ([NAS-131839](https://ixsystems.atlassian.net/browse/NAS-131839)).
* Prevent incorrect translation of LDAP Base DN to kerberos realm ([NAS-132192](https://ixsystems.atlassian.net/browse/NAS-132192)).
* Increase the maximum permitted Samba (SMB) ACL size from 64 to 1024 entries ([NAS-132344](https://ixsystems.atlassian.net/browse/NAS-132344)).
* Prevent applications service failing after upgrade if an app requires an Nvidia GPU ([NAS-132070](https://ixsystems.atlassian.net/browse/NAS-132070) and [NAS-132131](https://ixsystems.atlassian.net/browse/NAS-132131)).
* Cache installed Nvidia kernel modules on upgrades within the same release train (i.e. 24.10.0, 24.10.1, etc.) so they do not need to be reinstalled and compiled ([NAS-132359](https://ixsystems.atlassian.net/browse/NAS-132359)).
* Allow limited administrative users to view and download logs of certain jobs, even if they did not initiate the job ([NAS-132031](https://ixsystems.atlassian.net/browse/NAS-132031)).
* Ensure installed apps are shown correctly after system reset ([NAS-131913](https://ixsystems.atlassian.net/browse/NAS-131913)).
* Prevent `KeyError: 'pool_name'` resulting from pool name collision in zpool.status ([NAS-132742](https://ixsystems.atlassian.net/browse/NAS-132742)).
* Allow unsetting/changing the apps pool in cases where the ix-apps dataset no longer exists ([NAS-132065](https://ixsystems.atlassian.net/browse/NAS-132065)).
* Fix memory context for IPC read allocations to prevent potential Use After Free (UAF) corruption ([NAS-132685](https://ixsystems.atlassian.net/browse/NAS-132685)).
* Make sure helm secret is safely serialized when listing App backups to migrate ([NAS-132077](https://ixsystems.atlassian.net/browse/NAS-132077)). This fix prevents a Unicode decode error, `Failed to list backups: 'utf-8' codec can't decode byte 0xa6 in position 0: invalid start byte`, that prevented some users from migrating apps from 24.04 to 24.10.0.X versions.

<a href="https://ixsystems.atlassian.net/issues/?filter=11216" target="_blank">Click here for the full changelog</a> of completed Jira tickets that are included in the 24.10.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* The Plex app doesn't show Nvidia GPUs being passed to the app and transcode stops working ([NAS-133250](https://ixsystems.atlassian.net/browse/NAS-133250)). A fix is anticipated in a future release and the linked Jira ticket has a workaround for the 24.10.1 release.
* Configured SED drives do not migrate from FreeBSD-based TrueNAS releases to 24.10 (or earlier) releases, due to differences in how FreeBSD-based and Linux-based TrueNAS releases manage SED configurations. A fix to allow cleaner migrations of SED configurations is anticipated in TrueNAS 25.04.
* The Dashboard CPU widgets have an issue displaying metrics for some types of hyper-threaded CPUs ([NAS-133128](https://ixsystems.atlassian.net/browse/NAS-133128)). This is being addressed in future 24.10 maintenance releases.
* An issue was discovered with restoration of ZFS snapshots via TrueCloud back up tasks ([NAS-132608](https://ixsystems.atlassian.net/browse/NAS-132608)). The **Take Snapshot** option for TrueCloud back up tasks is disabled in 24.10.1 until the underlying issue is addressed in a future TrueNAS release.
* OAuth support for Microsoft Outlook is no longer supported in 24.10 due to Microsoft removal of username and password authentication to their email server. Restoration of Outlook OAuth support is anticipated in the 25.04 release version ([NAS-132807](https://ixsystems.atlassian.net/browse/NAS-132807)).
* An issue has been discovered for cloud sync tasks configured with **Filename Encryption**, which is available in **Advanced Remote Options** ([NAS-132472](https://ixsystems.atlassian.net/browse/NAS-132472)). As this is an upstream issue in rclone, we recommend that users should not create new cloud sync tasks with **Filename Encryption** enabled. Existing users of this feature must leave it enabled for existing cloud sync tasks to be able to recover backups.
* Some users report an error when trying to delete applications that previously migrated from 24.04 to 24.10 and are configured with ixVolumes ([NAS-131911](https://ixsystems.atlassian.net/browse/NAS-131911)). Attempting to delete an affected app returns the error `Failed to delete dataset: cannot destroy 'POOL/ix-apps/app_mounts/APPNAME': filesystem has dependent clones`. A fix is expected in the 24.10.2 release ([NAS-132914](https://ixsystems.atlassian.net/browse/NAS-132914)).
* VMs might not start due to an issue with memory allocation and the ZFS cache ([NAS-128544](https://ixsystems.atlassian.net/browse/NAS-128544)). This is resolved in the upcoming TrueNAS 25.04 version.
* If an SMB or NFS bind IP address is set and an administrator changes the host system IP without first removing the current NFS and/or SMB bind IP, the UI does not display the current NFS and/or SMB bind ip address(es) and provides no mechanism for unsetting the bad IP address ([NAS-133049](https://ixsystems.atlassian.net/browse/NAS-133049)). This breaks functionality of the NFS and/or SMB service.

  Users who encounter this bug can manually remove the existing bind IP address(es) and then use the TrueNAS UI to reconfigure bind IP addresses.
  Connect to a TrueNAS shell session and enter one or both of these command(s), as needed:

  * `midclt call smb.update '{"bindip": []}'` to clear the SMB bind address(es)
  * `midclt call nfs.update '{"bindip": []}'` to clear the NFS bind address(es)

  A UI fix for this issue is expected in a future release.

* {{< enterprise >}}
  An issue was found with configuring Chelsio T580 NICs in different modes with TrueNAS 24.10.1. This is under investigation and a fix is forthcoming in a future 24.10 maintenance release.
  {{< /enterprise >}}

<a href="https://ixsystems.atlassian.net/issues/?filter=11217" target="_blank">Click here to see the latest information on Jira</a> about public issues discovered in 24.10.1 that are being resolved in a future TrueNAS release.

{{< /expand >}}

## 24.10.0.2

{{< expand "Click to expand" "v" >}}
**November 8, 2024**

iXsystems is pleased to release TrueNAS 24.10.0.2!
This is a release to address another high-impact issue discovered with SMB memory management.

* Fix Management of SMB AIO read buffers ([NAS-132365](https://ixsystems.atlassian.net/browse/NAS-132365)).

Users with 24.10.0.1 installed and SMB shares in use are encouraged to upgrade to this release immediately.

### Known Issues

Please see the 24.10.0 changelog below and use the Jira filter links to see the full changelog and known issues related to the 24.10.0, 24.10.0.1, and 24.10.0.2 releases.
{{< /expand >}}

## 24.10.0.1

{{< expand "Click to expand" "v" >}}
**November 7, 2024**

iXsystems is pleased to release TrueNAS 24.10.0.1!
This is a release to address a small number of issues discovered in the 24.10.0 release.

### Notable Changes

* Fix memory consumption related to SMB AIO reads ([NAS-132166](https://ixsystems.atlassian.net/browse/NAS-132166)).
* Fix disk.sync_all edge-case crash ([NAS-132177](https://ixsystems.atlassian.net/browse/NAS-132177)).
* Fix libzfs errors in py-libzfs in electric eel are out of sync with libzfs ([NAS-132126](https://ixsystems.atlassian.net/browse/NAS-132126)).
* Prevent empty critical bond interfaces on TrueNAS Enterprise HA systems ([NAS-132187](https://ixsystems.atlassian.net/browse/NAS-132187)).
* Fix HA logic bug to ensure marked critical interfaces are treated as critical ([NAS-132115](https://ixsystems.atlassian.net/browse/NAS-132115)).
* Prevent SED pool degradation after power loss ([NAS-129366](https://ixsystems.atlassian.net/browse/NAS-129366)).
* Fix TrueNAS ES24 enclosure management bug ([NAS-132067](https://ixsystems.atlassian.net/browse/NAS-132067)).

### Known Issues

* Users have reported an issue with SMB memory management under heavy SMB loads.
  A fix for this issue is in the 24.10.0.2 release version.

Please see the 24.10.0 changelog below and use the Jira filter links to see the full changelog and known issues related to the 24.10.0 and 24.10.0.1 releases.
{{< /expand >}}

## 24.10.0

{{< expand "Click to expand" "v" >}}
**October 29, 2024**

iXsystems is pleased to release TrueNAS 24.10.0!
This is the first stable release of TrueNAS SCALE 24.10 (Electric Eel).
It includes numerous software component updates and polished features, as well as fixes for issues discovered in 24.10-RC.1 and 24.10-RC.2.

### Notable Changes

* True Cloud Backup Tasks ([NAS-127165](https://ixsystems.atlassian.net/browse/NAS-127165)).
* Replace nslcd with sssd ([NAS-127073](https://ixsystems.atlassian.net/browse/NAS-127073)).
* Dashboard Improvements ([NAS-127217](https://ixsystems.atlassian.net/browse/NAS-127217)).
* UI Table Improvements ([NAS-127222](https://ixsystems.atlassian.net/browse/NAS-127222)).
* UI Global Search ([NAS-127224](https://ixsystems.atlassian.net/browse/NAS-127224)).
* Rewrite enclosure plugin in 24.10 to match performance improvements in 13.3 ([NAS-123474](https://ixsystems.atlassian.net/browse/NAS-123474)).
* Prevent phantom partitions that TrueNAS erroneously reported as disconnected pools ([NAS-131171](https://ixsystems.atlassian.net/browse/NAS-131171)).
* Revised Docker networking logic for applications ([NAS-131617](https://ixsystems.atlassian.net/browse/NAS-131617)).
* Enable editing of custom YAML applications ([NAS-131147](https://ixsystems.atlassian.net/browse/NAS-131147)).
* Prevent the TrueNAS UI from sending an improper payload for the Outboard Activity option when re-saving an edit to global network settings ([NAS-131787](https://ixsystems.atlassian.net/browse/NAS-131787)).
* When moving from an existing applications pool to a new pool, TrueNAS does not present the option to **Migrate applications to the new pool** because the underlying functionality is not present in the new Docker apps framework ([NAS-131610](https://ixsystems.atlassian.net/browse/NAS-131610)). Users who need to redeploy the applications pool can either choose to leave existing applications on the previous location, remove existing applications and reinstall on the new pool, or manually relocate and clean up data.
* **Documentation Hub Update**: To reflect the continuing process of application maintenance and updates as separate from TrueNAS major version releases, all application Tutorials are moved from the Tutorials section in TrueNAS version documentation to a dedicated and unversioned [TrueNAS Apps](https://www.truenas.com/docs/truenasapps/) section.
  
  Community contributions to TrueNAS Apps documentation are highly encouraged!
  The [Community Apps](https://www.truenas.com/docs/truenasapps/communityapps/) documentation is pre-populated with placeholder templates for each application available in the TrueNAS Community train and ready to accept Pull Requests.
  See [Contributing to TrueNAS Application Documentation](https://www.truenas.com/docs/contributing/applications/#contributing-to-truenas-application-documentation) for more information.

<a href="https://ixsystems.atlassian.net/issues/?filter=11052" target="_blank">Click here for the full changelog</a> of completed Jira tickets that are included in the 24.10.0 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* SED devices are not consistently unlocking on system restart ([NAS-132518](https://ixsystems.atlassian.net/browse/NAS-132518)). Users are cautioned to avoid using SED devices in 24.10 or attempting to migrate a functional SED environment from TrueNAS 13.0-U6.3 (Enterprise) or TrueNAS 13.3-U1 (Community) until this issue is resolved.
* A [bug with sudo v1.9.13](https://bugzilla.sudo.ws/show_bug.cgi?id=1050) causes commands like `sudo su -` and `sudo su` before starting tmux to break in TrueNAS 24.10.
  Sudo v1.9.14 fixes this issue and is planned for inclusion in a future TrueNAS release.
* Application **Update Available** tooltips display the current installed version as the available update version ([NAS-131747](https://ixsystems.atlassian.net/browse/NAS-131747)). A fix for this issue is expected in the 24.10.1 release version.
* Installed custom applications do not alert for available updates in the TrueNAS UI ([NAS-132202](https://ixsystems.atlassian.net/browse/NAS-132202)). A fix for this issue is expected in the 24.10.1 release version.
* Some users who have upgraded to 24.10.0 from a previous version, and who have applications with have NVIDIA GPU allocations, report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see [NAS-132086](https://ixsystems.atlassian.net/browse/NAS-132086)).

  Users experiencing this error should follow the steps below for a one time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -job app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
    * `APP_NAME` is the name you entered in the application, for example “plex”.
    * `PCI_SLOT` is the pci slot identified in the error, for example "0000:2d:00.0”.
    * `GPU_UUID` is the UUID matching the pci slot that you retrieved with the above command.
* Drives that have been formatted with previous TrueNAS versions can show exported pools in the TrueNAS UI ([NAS-131890](https://ixsystems.atlassian.net/browse/NAS-131890)). This is typically due to obsolete filesystem labels in the boot drives still being detected by TrueNAS. The underlying bug is fixed in 24.10.0-RC.2 and newer, but these labels can remain on boot drives used with previous TrueNAS releases. Removing these labels from the boot drives requires backing up your TrueNAS configuration, reinstalling 24.10.0 fresh on the boot drives, then restoring the TrueNAS configuration.
* If TrueNAS is updated to 24.10.0 from a previous 24.10 release candidate version and the **Install Nvidia Drivers** option is selected, TrueNAS downloads and installs drivers to the upgraded OS in the background before starting the Applications service ([NAS-132070](https://ixsystems.atlassian.net/browse/NAS-132070)).
  This can be a lengthy process with no UI progress feedback.
  If a network interruption on boot prevents driver installation, TrueNAS does not retry and a manual workaround is required (see linked NAS issue for steps).
* {{< enterprise >}}
  There is a known issue with the ES24 expansion shelf not displaying on the Enclosure Management screen in 24.10.0. A fix is anticipated in the next 24.10 release. In the meantime, customers with an ES24 shelf connected to their TrueNAS appliance should plan their 24.10 upgrade time frame for the first maintenance release, 24.10.1.
  {{< /enterprise >}} 
* Replication task (and possibly other Backup Task) logs aren't properly downloading for non-full admin users ([NAS-132031](https://ixsystems.atlassian.net/browse/NAS-132031)).
  A full admin user can download these task logs and a fix for admin users with fewer permissions is pending in the 24.10.1 release.
* Some users report that after rebooting TrueNAS, the Installed applications screen does not display the apps that are installed and states **Applications are not running**.
  Users encountering this issue can refresh the web page to correct it.

<a href="https://ixsystems.atlassian.net/issues/?filter=11053" target="_blank">Click here to see the latest information on Jira</a> about public issues discovered in 24.10.0 that are being resolved in a future TrueNAS release.
{{< /expand >}}

## 24.10-RC.2

{{< expand "Click to expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early release software for critical tasks.
{{< /hint >}}

**October 4, 2024**

iXsystems is pleased to release TrueNAS 24.10-RC.2!
This is a small hot fix to correct applications-related issues discovered after the release of 24.10-RC.1.

### Notable Changes

* Revised Docker networking logic to prevent users with 15 or more applications installed encountering network exhaustion, which resulted in the apps service failing to initialize ([NAS-131485](https://ixsystems.atlassian.net/browse/NAS-131485)).

Please use the 24.10-RC.1 Jira filter links below to see the full changelog and known issues related to the 24.10 release candidates.
{{< /expand >}}

## 24.10-RC.1

{{< expand "Click to expand" "v" >}}
{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**October 2, 2024**

iXsystems is pleased to release TrueNAS 24.10-RC.1!
This release candidate version has software component updates and new features that are in the polishing phase as well as fixes for issues discovered in 24.10-BETA.1.

### Notable Changes

* Convert audit message_timestamp for sudo to UTC ([NAS-130373](https://ixsystems.atlassian.net/browse/NAS-130373)).

* The previous **Dashboard** and **View Enclosure** UI screens are removed ([NAS-130582](https://ixsystems.atlassian.net/browse/NAS-130582)).

* Fix issues with TrueCloud Backup restoration paths and scheduling ([NAS-130644](https://ixsystems.atlassian.net/browse/NAS-130644), [NAS-130794](https://ixsystems.atlassian.net/browse/NAS-130794), and [NAS-130320](https://ixsystems.atlassian.net/browse/NAS-130320)).

* Prevent incorrect auto-populated portal group IDs on iSCSI target ([NAS-130656](https://ixsystems.atlassian.net/browse/NAS-130656)).

* All administrators receive a daily alert for all login failures by any account to the TrueNAS UI or API ([NAS-127040](https://ixsystems.atlassian.net/browse/NAS-127040)).
  Enterprise administrators also receive a daily alert for all successful logins by default administrator accounts (root / admin / truenas_admin).

* Prevent systemd journal from producing duplicate audit entries on upgrade ([NAS-131125](https://ixsystems.atlassian.net/browse/NAS-131125)).

* Ensure snapshot batch deletion targets only selected snapshots ([NAS-130874](https://ixsystems.atlassian.net/browse/NAS-130874)).

* Remove acltype normalization for datasets ([NAS-130877](https://ixsystems.atlassian.net/browse/NAS-130877)).

* Fix dRAID logic for number of children when creating a pool ([NAS-130678](https://ixsystems.atlassian.net/browse/NAS-130678)).

* UI support for installing NVIDIA GPU drivers is added ([NAS-130588](https://ixsystems.atlassian.net/browse/NAS-130588)).

* Improve handling for file renaming in case insensitive filesystems ([NAS-130743](https://ixsystems.atlassian.net/browse/NAS-130743)).
  This prevents name collision errors some MacOS users experience when trying to rename a file to change its case on a case-insensitive filesystem.

* Prevent applications from running startup processes before acquiring the default interface ([NAS-130863](https://ixsystems.atlassian.net/browse/NAS-130863)).

* Fix issues with user.update endpoint ([NAS-130696](https://ixsystems.atlassian.net/browse/NAS-130696)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10887" target="_blank">Click here for the full changelog</a> of completed Jira tickets that are included in the 24.10-RC.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* Nvidia GPU transcoding is not functioning with the Plex application ([NAS-131591](https://ixsystems.atlassian.net/browse/NAS-131591)).

* Mariadb-based applications require [additional steps to successfully migrate into 24.10](https://github.com/truenas/apps/issues/592#issuecomment-2391455422).
  
* Users with 15 or more applications installed can experience a network exhaustion error on upgrade to 24.10-RC.1, resulting in the apps service failing to initialize ([NAS-131485](https://ixsystems.atlassian.net/browse/NAS-131485)).

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

* Application **Web UI** buttons, accessed from the **Application Info** widget, can default to a 0.0.0.0:*port* address after app install or restart ([NAS-131308](https://ixsystems.atlassian.net/browse/NAS-131308)).
  Refresh the browser window, or manually access the port in the form *hostname or IP address*:*port*, to correct button function and access the app UI.

* The SMB Share **Purpose** presets on the **Add SMB** screen do not adjust advanced options when set ([NAS-131374](https://ixsystems.atlassian.net/browse/NAS-131374)).
  Users encountering this issue can manually set the required advanced options.
  See [Advanced Options Presets]({{< relref "SMBSharesScreens.md #advanced-options-presets">}}) in the UI reference guide for more information.

* Some users have reported incomplete shutdown and reboot behavior ([NAS-130118](https://ixsystems.atlassian.net/browse/NAS-130118)). This issue has not been reported in iXsystems hardware.

* Unexpected behavior can occur when unlocking a dataset with recursive set to false ([NAS-130329](https://ixsystems.atlassian.net/browse/NAS-130329)). Child datasets with inherited keys are also unlocked with the parent dataset.

* Development of the new RAIDZ pool expansion feature is ongoing, with fixes for known issues expected in the 24.10.0 release ([NAS-131207](https://ixsystems.atlassian.net/browse/NAS-131207) and [NAS-131028](https://ixsystems.atlassian.net/browse/NAS-131028)).

<a href="https://ixsystems.atlassian.net/issues/?filter=10886" target="_blank">Click here to see the latest information on Jira</a> about public issues discovered in 24.10-RC.1 that are being resolved in a future TrueNAS release.
{{< /expand >}}

## 24.10-BETA.1

{{< expand "Click to Expand" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**August 29, 2024**

iXsystems is pleased to release TrueNAS 24.10-BETA.1!
This has software component updates and new features that are in the polishing phase.

### Notable Changes

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

<a href="https://ixsystems.atlassian.net/issues/?filter=10587" target="_blank">Click here for the full changelog</a> of completed Jira tickets that are included in the 24.10-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### Known Issues

* The **System > Audit** screen can display different values for **Timestamp** in the entries list and **Localtime** in **Event Data**, depending on the local timezone of the system ([NAS-130373](https://ixsystems.atlassian.net/browse/NAS-130373)).
  
* Some users have reported incomplete shutdown and reboot behavior ([NAS-130118](https://ixsystems.atlassian.net/browse/NAS-130118)). This issue has not been reported in iXsystems hardware.

* Unexpected behavior can occur when unlocking a dataset with recursive set to false ([NAS-130329](https://ixsystems.atlassian.net/browse/NAS-130329)). Child datasets with inherited keys are also unlocked with the parent dataset.

* Development of the new TrueCloud backup feature for TrueNAS and Storj integration is ongoing, with fixes for known issues expected in a future 24.10 development version release ([NAS-130320](https://ixsystems.atlassian.net/browse/NAS-130320), [NAS-130794](https://ixsystems.atlassian.net/browse/NAS-130794), and [NAS-130644](https://ixsystems.atlassian.net/browse/NAS-130644)).

* Auto-populated portal group IDs for iSCSI configurations can differ between the **Portals** and **Targets** screen. This is a cosmetic issue in the UI and underlying functionality is not impacted ([NAS-130656](https://ixsystems.atlassian.net/browse/NAS-130656)).

* Audit logging status indicators on SMB share tables might not accurately reflect if logging is or is not enabled on a given share ([NAS-130830](https://ixsystems.atlassian.net/browse/NAS-130830)).

* App icons can periodically fail to render on the **Discover** applications screen, especially when searching for applications ([NAS-130831](https://ixsystems.atlassian.net/browse/NAS-130831)).

* On the virtual machine creation screen, a validation error displays if a configured GPU device is not valid for use in the VM. However, in some cases it can be possible to continue and create the VM with an invalid GPU configuration ([NAS-130754](https://ixsystems.atlassian.net/browse/NAS-130754)). If you receive a GPU validation error during VM creation, remove or correct the invalid GPU before creating the VM.

<a href="https://ixsystems.atlassian.net/issues/?filter=10588" target="_blank">Click here to see the latest information on Jira</a> about public issues discovered in 24.10-BETA.1 that are being resolved in a future TrueNAS release.
{{< /expand >}}
