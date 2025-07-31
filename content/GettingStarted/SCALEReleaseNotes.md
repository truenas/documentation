---
title: "25.04 (Fangtooth) Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 25.04 release versions."
weight: 10
related: false
---
{{< header logo="/images/tn-openstorage-logo.png" logo_alt="TrueNAS Logo" version="25.04 Fangtooth" icon="/images/Fangtooth_Icon.png" icon_alt="Fangtooth Icon" >}}

## Features

{{< include file="/static/includes/25.04FeatureList.md" >}}

## Obtaining a Release

For adventurous users who want to experiment with the latest feature development, 25.04 (Fangtooth) nightly images are available from [the TrueNAS downloads server](https://download.truenas.com/truenas-scale-fangtooth-nightly/).

More details are available from [Software Releases](https://www.truenas.com/docs/softwarereleases/).

## Release Schedule

{{< include file="/static/includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=scale-releases defaultTab=2 >}}

{{< expand "Software Lifecycle" "v" >}}
{{< include file="/static/includes/SoftwareStatusPage.md" >}}
{{< /expand >}}

## Upgrade Notes

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* {{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

  {{< include file="/static/includes/APIDocs.md" >}}

  You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
  Click **API Docs** to view API documentation.

* 25.04 also introduces user-linked API access keys, allowing administrators to configure per-user access to the TrueNAS API.
  Keys are revocable and can be configured to automatically expire on a preset date.
  
  {{< include file="/static/includes/API_AD.md" >}}

  User-linked API keys allow for better integration of TrueNAS into third-party solutions.
  Use this as a reference for projects that require direct TrueNAS integration.

  {{< include file="/static/includes/APIKeyWarn.md" >}}

  See [Managing API Keys]({{< ref "/scaletutorials/toptoolbar/managingapikeys" >}}) for more information.

  * {{< include file="/static/includes/APIKeyMigrate.md" >}}

* {{< include file="/static/includes/ConfigRestrictions.md" >}}

* {{< include file="/static/includes/NetdataUI.md" >}}

### Virtual Machines and Containers (Updated for 25.04.2)

{{< include file="/static/includes/25.04Virtualization.md" >}}

### TrueNAS Apps

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

{{< include file="/static/includes/AppsSupportTimeline.md" >}}

### Upgrade Paths

{{< include file="/static/includes/25.04UpgradeMethods.md" >}}

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}

### Migrating from TrueNAS 13.0 or 13.3

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

Depending on the specific system configuration, migrating from a FreeBSD-based TrueNAS version can be a straightforward or complicated process.
See the [Migration articles]({{< ref "/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the migration process.

{{< enterprise >}}
{{< include file="/static/includes/EnterpriseMigrationSupport.md" >}}

{{< expand "TrueNAS Enterprise Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}

{{< /expand >}}
{{< /enterprise >}}

## Component Versions

Click the component version number to see release notes for that component.

{{< component-versions "25.04" >}}

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.2.99) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| fast deduplication | [com.klarasystems:fast_dedup](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#fast_dedup) | This flag is present in 24.10, but is now generally available through the TrueNAS UI. |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).

## 25.04.2

**July 31, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04.2!
This is a maintenance release and includes refinements and fixes for issues discovered after 25.04.1.

{{< enterprise >}}
TrueNAS 25.04.2 is not recommended for TrueNAS Enterprise customers with High Availability (HA) systems at this time.
{{< /enterprise >}}

### 25.04.2 Notable Changes

{{< enterprise >}}
* STIG enforces the limit of three consecutive invalid login attempts by a user in 15 minutes, and limits the maximum number of concurrent session to 10 for all accounts and/or account types ([NAS-127189](https://ixsystems.atlassian.net/browse/NAS-127189)).
* Adds a new SMB share preset **Veeam Repository with Fast Clone** to the share **Purpose** list of options.
  Requires creating a new share and dataset prior to adding a Veeam Backup & Restore repository, and setting the dataset ZFS record size to 128 KiB.
  There is currently no supported mechanism to convert an existing SMB Veeam repository into a Veeam Repository Share with fast clone ([NAS-135244](https://ixsystems.atlassian.net/browse/NAS-135244)).
* Changes to Support notifications for zpool capacity, warning, and critical alerts (85, 90, and 95% respectively) and removes "optimal pool performance" language from the notifications to address customer concerns with over-notification on issues that do not interest them ([NAS-135831](https://ixsystems.atlassian.net/browse/NAS-135831)).
* Changes PSU failures that occur in the field to automatically generate a support alert ([NAS-135832](https://ixsystems.atlassian.net/browse/NAS-135832)).
{{< /enterprise >}}
* TrueNAS 25.04.2 reintroduces "classic virtualization" with the [**Virtual Machines**]({{< ref "/scaletutorials/virtualmachines/" >}}) feature.
  Virtualization features are now split between the **Virtual Machines** and [**Containers**]({{< ref "/scaletutorials/containers/" >}}) screens. 
  
  Virtual machines created in 25.04.0 or 25.04.1 using the **Instances** feature continue to function and appear in the **Containers** screen.
  New VMs and those migrated from 24.10.2.2 to 25.04.2 use the **Virtual Machines** screen.

  Virtual machines automatically migrate from TrueNAS 24.10 to 25.04.2.
  No manual migration of virtual machines is required.
* Adds the ability to enter optional custom endpoints in cloud sync credentials that support **Global** and **Select** tiers in Storj ([NAS-133835](https://ixsystems.atlassian.net/browse/NAS-133835)).
* Adds a Secure Boot checkbox to the **Add Virtual Machine** wizard and **Edit Virtual Machine** form ([NAS-136466](https://ixsystems.atlassian.net/browse/NAS-136466)).
* Passes the Storj/iX cloud sync credential access key and secret access key in the UI when creating the credential ([NAS-135837](https://ixsystems.atlassian.net/browse/NAS-135837)).
* Removes the **Mega** cloud service provider for rclone.
  Mega Technical Support states they no longer support rclone due to bugs in their implementation and requirements to properly troubleshoot issues ([NAS-135844](https://ixsystems.atlassian.net/browse/NAS-135844)).
* Adds the `ethtool -m` to the debug file, which brings additional layer1 troubleshooting to interfaces ([NAS-135911](https://ixsystems.atlassian.net/browse/NAS-135911)).
* Shows all object fields and explicitly  lists all parameters and result fields for nested objects not previously included in generated API documentation ([NAS-135959](https://ixsystems.atlassian.net/browse/NAS-135959)).
* Adds starting and stopping services in the UI to the audit log records ([NAS-136310](https://ixsystems.atlassian.net/browse/NAS-136310)).

<a href="https://ixsystems.atlassian.net/issues/?filter=#####" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04.2 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04.2 Known Issues

* Some users of TrueNAS Apps attempting to configure GPU allocation report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one-time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -j app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
  * `APP_NAME` is the name you entered in the application, for example, “plex”.
  * `PCI_SLOT` is the PCI slot identified in the error, for example "0000:2d:00.0”.
  * `GPU_UUID` is the UUID matching the PCI slot that you retrieved with the above command.
* Custom applications with TTY enabled do not display logs in the TrueNAS UI. This is due to an upstream bug, see https://github.com/docker/docker-py/issues/1394. Users experiencing this issue can resolve it by either disabling TTY or using `docker logs` from the command line.
* TrueNAS UI displays **Updates Available** button after updating to the latest release (see ([NAS-136046](https://ixsystems.atlassian.net/browse/NAS-136046)).
  This issue is resolved in the upcoming 25.04.2 release, but if you want to work around this issue now, follow these steps:
  1. Open the **Shell** and run `midclt call systemdataset.config | jq ."path"`
  2. Search for a file named **update.sqsh** in the returned string using `find "returned path" -name update.sqsh`
  3. Run `rm -f <full-path-to-update.sqsh>`, replacing `<full-path-to-update.sqsh>` with the **full** file path to the **update.sqsh** file from the previous step
* {{< include file="/static/includes/auxiliary-parameters-ssh.md" >}}

<a href="https://ixsystems.atlassian.net/issues/?filter=12504" target="_blank">Click here to see the latest information</a> about public issues in 25.04.1 that are being resolved in a future TrueNAS release.

## 25.04.1

{{< expand "Click to expand" "v" >}}

**May 27, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04.1!
This is a maintenance release and includes refinements and fixes for issues discovered after 24.04.0.

### 25.04.1 Notable Changes

{{< enterprise >}}
* Support for account policy settings in TrueNAS Enterprise environments regarding password history, complexity, and aging ([NAS-135115](https://ixsystems.atlassian.net/browse/NAS-135115)).
  Note: Administrators should contact TrueNAS Support before enabling STIG and FIPS security settings (see [Security Settings](/scaletutorials/systemsettings/advanced/#security-settings) for details).
* Add PAM-based session management for middleware ([NAS-127189](https://ixsystems.atlassian.net/browse/NAS-127189)).
  For STIG compliant environments, the max number of simultaneous logins is 10.
  Accounts are locked for 15 minutes after 3 consecutive failed login attempts.
{{< /enterprise >}}
* Remove support for BOTH in share ACLs ([NAS-135183](https://ixsystems.atlassian.net/browse/NAS-135183)).
* Persist updated GMail OAuth refresh token to prevent deauthentication ([NAS-135394](https://ixsystems.atlassian.net/browse/NAS-135394)).
* Improvements to **Instances**, including:
  * Allow the same host path to be mounted inside multiple containers ([NAS-135371](https://ixsystems.atlassian.net/browse/NAS-135371)).
  * ARC scaling and eviction fixes to prevent VM crashes due to OOM errors ([NAS-135904](https://ixsystems.atlassian.net/browse/NAS-135904)).
  * Enhanced robustness of the **Instances** screen to handle edge-case configurations ([NAS-135098](https://ixsystems.atlassian.net/browse/NAS-135098)).
  * Add a synthetic container root user ([NAS-135375](https://ixsystems.atlassian.net/browse/NAS-135375)).
    This adds a built-in unprivileged root user for containers: **truenas_container_unpriv_root**.
    This account can be used in permissions related APIs / UI forms to grant permissions aligning to root in VMs and containers (see [Managing Instance Permissions](/scaletutorials/containers/#managing-instance-permissions)).
  * Improved error handling when instance ports conflict with other service or application configurations ([NAS-134963](https://ixsystems.atlassian.net/browse/NAS-134963)).
  * Prevent accidental deletion of built-in idmap entries ([NAS-135475](https://ixsystems.atlassian.net/browse/NAS-135475)).
  * Improved validation for attaching and removing zvols from instances ([NAS-135308](https://ixsystems.atlassian.net/browse/NAS-135308)).
* Increase middlewared.service timeout to prevent boot failure when upgrading systems with slow boot drives ([NAS-135663](https://ixsystems.atlassian.net/browse/NAS-135663)).
* Prevent JSON decode crash in smartctl output to fix issues with disk temperature reporting ([NAS-135527](https://ixsystems.atlassian.net/browse/NAS-135527)).
* Fix TrueNAS UI authentication with IPv6 entries in **Allowed IP Addresses** ([NAS-135361](https://ixsystems.atlassian.net/browse/NAS-135361)).
* Fix SSH service startup with auxiliary parameters enabled ([NAS-135367](https://ixsystems.atlassian.net/browse/NAS-135367)).
* Improve human-readable formatting of TrueCloud Backup log ([NAS-134491](https://ixsystems.atlassian.net/browse/NAS-134491)).
* Change how oplocks are handled for multiprotocol shares ([NAS-135040](https://ixsystems.atlassian.net/browse/NAS-135040)).
  Removes kernel oplocks in favor of disabling oplocks on a per-share basis when they have been flagged for mixed-mode use.
  This avoids issues observed in the field with kernel lease breaks causing client timeouts as well allowing SMB leases globally, resolving limitations on multiprotocol shares and Time Machine backup seen in 25.04.0.
* Fix API calls when connected to legacy `/websocket` endpoints ([NAS-135643](https://ixsystems.atlassian.net/browse/NAS-135643)).

<a href="https://ixsystems.atlassian.net/issues/?filter=12503" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04.1 Known Issues

* {{< include file="/static/includes/auxiliary-parameters-ssh.md" >}}

* An update to the Microsoft Netlogon RPC protocol affects systems using the "AD" idmap backend for Active Directory. Users are not able to connect to the SMB service provided by Samba for any domain configured to use the "AD" idmap backend.
  A fix is expected in the TrueNAS 25.04.2 release.

* Some users of TrueNAS Apps attempting to configure GPU allocation report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one-time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -j app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
  * `APP_NAME` is the name you entered in the application, for example, “plex”.
  * `PCI_SLOT` is the PCI slot identified in the error, for example "0000:2d:00.0”.
  * `GPU_UUID` is the UUID matching the PCI slot that you retrieved with the above command.
* Custom applications with TTY enabled do not display logs in the TrueNAS UI. This is due to an upstream bug, see https://github.com/docker/docker-py/issues/1394. Users experiencing this issue can resolve it by either disabling TTY or using `docker logs` from the command line.
* TrueNAS UI displays **Updates Available** button after updating to the latest release (see ([NAS-136046](https://ixsystems.atlassian.net/browse/NAS-136046)).
  This issue is resolved in the upcoming 25.04.2 release, but if you want to work around this issue now, follow these steps:
  1. Open the **Shell** and run `midclt call systemdataset.config | jq ."path"`
  2. Search for a file named **update.sqsh** in the returned string using `find "returned path" -name update.sqsh`
  3. Run `rm -f <full-path-to-update.sqsh>`, replacing `<full-path-to-update.sqsh>` with the **full** file path to the **update.sqsh** file from the previous step

<a href="https://ixsystems.atlassian.net/issues/?filter=12504" target="_blank">Click here to see the latest information</a> about public issues in 25.04.1 that are being resolved in a future TrueNAS release.
{{< /expand >}}

## 25.04.0
{{< expand "Click to expand" "v" >}}
**April 15, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04.0!
This is the first stable release of TrueNAS SCALE 25.04 (Fangtooth). It includes numerous software component updates and polished features, as well as fixes for issues discovered in 25.04-RC.1.

Special thanks to (Github users): Gleb Chesnokov and Franco Castillo for contributing to TrueNAS 25.04.0. For information on how you can contribute, visit https://www.truenas.com/docs/contributing/.

{{< include file="/static/includes/25.04FeatureList.md" >}}

### 25.04.0 Notable Changes

Notable changes since 25.04-RC.1:

* Prevent cloned blocks remapping after device removal to avoid data corruption ([NAS-133555](https://ixsystems.atlassian.net/browse/NAS-133555)).
* Numerous improvements and bug fixes to the experimental **Instances** feature, including:
  * Allow configuration of IO bus for disk devices in Instances ([NAS-134250](https://ixsystems.atlassian.net/browse/NAS-134250)).
    This enables users to create virtualized disks using a standard other than VirtIO in cases where the OS image does not by default include VirtIO drivers.
  * Improved upload speed for volume imports ([NAS-134552](https://ixsystems.atlassian.net/browse/NAS-134552)).
  * New IO Bus configuration options for Virtual Machines ([NAS-134393](https://ixsystems.atlassian.net/browse/NAS-134393)).
  * New IDMAP options for users and groups in Linux containers ([NAS-134447](https://ixsystems.atlassian.net/browse/NAS-134447)).
  * Fixed bug to allow console access for VMs created with an iso file ([NAS-134253](https://ixsystems.atlassian.net/browse/NAS-134253)).
* Fix KeyError crash in ipmi.lan.query ([NAS-134736](https://ixsystems.atlassian.net/browse/NAS-134736)).
* Fix permissions for user app config file ([NAS-134558](https://ixsystems.atlassian.net/browse/NAS-134558)).
* Prevent upgrade failure if encrypted fields are not readable in the DNS auth table ([NAS-134728](https://ixsystems.atlassian.net/browse/NAS-134728)).
* Optimize Dashboard resource widgets and fetch metrics once per page load ([NAS-132124](https://ixsystems.atlassian.net/browse/NAS-132124)).

<a href="https://ixsystems.atlassian.net/issues/?filter=12305" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04.0 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04.0 Known Issues

* The SSH service does not start if certain user-provided SSH auxiliary parameters are configured ([NAS-135367](https://ixsystems.atlassian.net/browse/NAS-135367)).
  This is known to affect `match` parameters minimally, but might impact other parameters as well.

* A validation check intended to prevent users from creating multiple VMs from the same zvol source has the unintended consequence of preventing attaching the same virtual disk to multiple Instance containers ([NAS-135371](https://ixsystems.atlassian.net/browse/NAS-135371)).

* Some users of TrueNAS Apps attempting to configure GPU allocation report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one-time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -j app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
  * `APP_NAME` is the name you entered in the application, for example, “plex”.
  * `PCI_SLOT` is the PCI slot identified in the error, for example "0000:2d:00.0”.
  * `GPU_UUID` is the UUID matching the PCI slot that you retrieved with the above command.
* Custom applications with TTY enabled do not display logs in the TrueNAS UI. This is due to an upstream bug, see https://github.com/docker/docker-py/issues/1394. Users experiencing this issue can resolve it by either disabling TTY or using `docker logs` from the command line.

<a href="https://ixsystems.atlassian.net/issues/?filter=12306" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04.0 that are being resolved in a future TrueNAS release.
{{< /expand >}}

## 25.04-RC.1

{{< expand "Click to expand" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**March 11, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04-RC.1!
This release candidate version has software component updates and new features that are in the polishing phase as well as fixes for issues discovered in 25.04-BETA.1.

Special thanks to (Github users) René, jnbastoky, Bas Nijholt, jbsamcho, t0b3, Franco Castillo, Ljcbaby, Oskar, ken1010533, Gleb Chesnokov, markrieder, janekdz, Aurélien Sallé, Nicodemus Schoenwald, m.chernobrov, Jason Cheng, SejoWuigui, TheJulianJES, p0358, Janek, Dhananjay Kamble, wanyuehan, Georg Schölly, dany22m, xream, and Lee Jihaeng for contributing to TrueNAS 25.04-RC.1. For information on how you can contribute, visit https://www.truenas.com/docs/contributing/.

### 25.04-RC.1 Notable Changes

* To prevent excessive resource usage, especially on systems with large HDD storage pools, SMART test results no longer appear directly on the **Storage** dashboard.
  Click **View S.M.A.R.T. Tests** on the **Disk Health** widget to open the **S.M.A.R.T. Test Results of *POOL*** screen.
* To improve stability and prevent unsupported SMB configurations from breaking on [migration from TrueNAS CORE]({{< ref "/GettingStarted/Migrate/" >}}), TrueNAS automatically removes the SMB auxiliary parameters `wide links`, `use sendfile`, `vfs objects`, and `allow insecure` during migration ([NAS-132911](https://ixsystems.atlassian.net/browse/NAS-132911)).
* To prevent unexpected failures in SMB shares, TrueNAS automatically disables SMB2/3 lease support and AAPL extensions (typically used to configure Time Machine) globally when [multiprotocol SMB/NFS shares]({{< ref "MixedModeShares" >}}) are enabled ([NAS-133680](https://ixsystems.atlassian.net/browse/NAS-133680)).
* Reserve 2 GiB of disk space (but no more than 1%) to allow the data disk to be replaced with a slightly smaller one in the future ([NAS-134309](https://ixsystems.atlassian.net/browse/NAS-134309)).
* Bugfix: Ensure disk temperature reporting is available for all disks ([NAS-130766](https://ixsystems.atlassian.net/browse/NAS-130766)).
* Bugfix: Allow SMB authentication for usernames with a capital letter ([NAS-134346](https://ixsystems.atlassian.net/browse/NAS-134346)).
* Bugfix: Fix top toolbar icon colors for the iX Blue, Paper, and High Contrast UI themes ([NAS-133853](https://ixsystems.atlassian.net/browse/NAS-133853)).
* Bugfix: Enable the applications **Web UI** button when accessing from IPv6 or mDNS name ([NAS-133655](https://ixsystems.atlassian.net/browse/NAS-133655)).

<a href="https://ixsystems.atlassian.net/issues/?filter=11942" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04-RC.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04-RC.1 Known Issues

* Further development of the experimental **Instances** virtualization feature is expected ahead of the 25.04.0 release. Current known issues include:
  * Full IDMAP support is currently unavailable in the TrueNAS UI ([NAS-134447](https://ixsystems.atlassian.net/browse/NAS-134447)).
    Users testing instances in 25.04-RC.1 can use the **apps** user and group (568:568) to set permissions with consistent mapping in the TrueNAS host and containers.
  * In 25.04-RC.1, VirtIO is the only available IO bus for VMs, which complicates deployment of VMs using OS images that do not natively support VirtIO, see ([NAS-134250](https://ixsystems.atlassian.net/browse/NAS-134250)).
    Additional IO bus options are expected in 25.04.0 ([NAS-134393](https://ixsystems.atlassian.net/browse/NAS-134393)).
* Some users of TrueNAS Apps attempting to configure GPU allocation report the error `Expected [uuid] to be set for GPU inslot [<some pci slot>] in [nvidia_gpu_selection])` (see ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one-time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -j app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
    * `APP_NAME` is the name you entered in the application, for example, “plex”.
    * `PCI_SLOT` is the PCI slot identified in the error, for example "0000:2d:00.0”.
    * `GPU_UUID` is the UUID matching the PCI slot that you retrieved with the above command.

<a href="https://ixsystems.atlassian.net/issues/?filter=11975" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04-BETA.1 that are being resolved in a future TrueNAS release.

{{< /expand >}}

## 25.04-BETA.1

{{< expand "Click to expand" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

**February 13, 2025**

The TrueNAS team is pleased to release TrueNAS 25.04-BETA.1!
This first public release version of TrueNAS 25.04 (Fangtooth) has software component updates and new features that are in the polishing phase.

### 25.04-BETA.1 Notable changes

* The TrueNAS REST API is deprecated in TrueNAS 25.04 and replaced with a versioned JSON-RPC 2.0 over WebSocket API ([API Reference]({{< ref "/api/" >}})). Full removal of the REST API is planned for a future release.
* Improved API key mechanism with support for user-linked API keys ([NAS-131396](https://ixsystems.atlassian.net/browse/NAS-131396)).
* UI login experience improvements ([NAS-130810](https://ixsystems.atlassian.net/browse/NAS-130810)).
* NFS over RDMA support - Enterprise Feature ([NAS-131784](https://ixsystems.atlassian.net/browse/NAS-131784)).
* iSCSI Extensions for RDMA (iSER) support - Enterprise Feature ([NAS-106190](https://ixsystems.atlassian.net/browse/NAS-106190)).
* ZFS Fast deduplication support ([NAS-127088](https://ixsystems.atlassian.net/browse/NAS-127088)).
* iSCSI XCOPY support through ZVOL block cloning ([NAS-130017](ixsystems.atlassian.net/browse/NAS-130017)).
* Container & VM Support - Experimental Community Feature ([NAS-130251](https://ixsystems.atlassian.net/browse/NAS-130251)).
* Hide SED related options in the UI for non-Enterprise users ([NAS-133442](https://ixsystems.atlassian.net/browse/NAS-133442)).
* Bump nvidia driver version ([NAS-133575](https://ixsystems.atlassian.net/browse/NAS-133575)).
* Remove integrated Netdata web portal from the TrueNAS UI and middleware ([NAS-133629](https://ixsystems.atlassian.net/browse/NAS-133629)).
  Default Netdata integration is removed due to STIG security requirements.
  Users who want to continue using Netdata monitoring can install Netdata from the TrueNAS Apps catalog.
* Bugfix: "Cache and Spare disks are not recognized post upgrade from 13.0 U6.2 to 24.04.2" ([NAS-130825](https://ixsystems.atlassian.net/browse/NAS-130825)).
* Bugfix: "Unable to start a VM due to insufficient memory" ([NAS-128544](https://ixsystems.atlassian.net/browse/NAS-128544)).

<a href="https://ixsystems.atlassian.net/issues/?filter=11744" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.04-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.04-BETA.1 Known Issues

* An issue has been discovered for cloud sync tasks configured with file name encryption, which is available in **Advanced Remote Options** ([NAS-132472](https://ixsystems.atlassian.net/browse/NAS-132472)). As this is an upstream issue in rclone, we recommend that users should not create new cloud sync tasks with the **Filename Encryption** setting enabled. Existing users of this feature must leave it enabled for existing cloud sync tasks to be able to recover backups.
* Unable to Create dataset under disks while configuring a new virtualization Instance ([NAS-134151](https://ixsystems.atlassian.net/browse/NAS-134151)).
* UUID related traceback when activating NVIDIA GPU for Jellyfin app: `base_v2_1_14.error.RenderError: Expected [uuid] to be set for GPU in slot [0000:01:00.0] in [nvidia_gpu_selection]` ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).

  Users experiencing this error should follow the steps below for a one-time fix that should not need to be repeated.

  Connect to a shell session and retrieve the UUID for each GPU with the command `midclt call app.gpu_choices | jq`.

  For each application that experiences the error, run `midclt call -j app.update APP_NAME '{"values": {"resources": {"gpus": {"use_all_gpus": false, "nvidia_gpu_selection": {"PCI_SLOT": {"use_gpu": true, "uuid": "GPU_UUID"}}}}}}'`
  Where:
    * `APP_NAME` is the name you entered in the application, for example, “plex”.
    * `PCI_SLOT` is the PCI slot identified in the error, for example "0000:2d:00.0”.
    * `GPU_UUID` is the UUID matching the PCI slot that you retrieved with the above command.

<a href="https://ixsystems.atlassian.net/issues/?filter=11745" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.04-BETA.1 that are being resolved in a future TrueNAS release.
{{< /expand >}}
