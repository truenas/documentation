---
title: "TrueNAS 27 Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 27 releases."
weight: 10
aliases:
 - /releasenotes/
 - /gettingstarted/scalereleasenotes/
related: false
use_jump_to_buttons: true
jump_to_buttons:
  - text: "Latest Changes"
    anchor: "27-nightly-changes"
    icon: "fiber-new"
  - text: "Known Issues"
    anchor: "known-issues"
    icon: "warning"
  - text: "27 Major Features"
    anchor: "major-features"
    icon: "new-releases"
  - text: "Deprecations"
    anchor: "deprecations"
    icon: "timeline"
  - text: "Full 27 Changelog"
    anchor: "full-changelog"
    icon: "history"
  - text: "Preparing to Upgrade"
    anchor: "upgrade-prep"
    icon: "update-truenas"
  - text: "Upgrade Paths"
    anchor: "upgrade-paths"
    icon: "conversion-path"
  - text: "Software Component Versions"
    anchor: "software-component-versions"
    icon: "component-versions"
---

{{< hint type="important" title="TrueNAS 27 Early Release Documentation" >}}
This page tracks the latest notes for TrueNAS 27, which was renamed from TrueNAS 26.
Pre-release builds are early-stage software intended for testing and feedback, not production use.
See the [Software Development Life Cycle]({{< ref "SoftwareDevelopmentLifeCycle" >}}) for an overview of TrueNAS release stages and versioning.

Release notes for the 26-BETA.1 through 26-BETA.3 releases are in the [TrueNAS 26 Version Notes](https://www.truenas.com/docs/scale/26/gettingstarted/versionnotes/).
{{< /hint >}}

## Notable Changes and Known Issues

<!-- Hugo-processed content for release notes tab box -->
<div style="display: none;" id="release-tab-content-source">
  <div data-tab-id="27-nightly-changes" data-tab-label="27 Nightly Changes">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

TrueNAS 27 is currently in active development.

Check back for more information.

  </div>

  <div data-tab-id="known-issues" data-tab-label="Known Issues">

{{< hint type="important" title="Known Issues in 27" >}}
These are ongoing issues that can affect multiple versions in the 27 series.
<br> When resolved, issues move to **Notable Changes** for the appropriate release.
{{< /hint >}}

### Current Known Issues

* The **Backup Tasks** dashboard card does not display **TrueCloud Backup** or **Periodic Snapshot** tasks, even when those tasks are configured and have completed successfully.
  The tasks run normally and appear as expected on the **Data Protection** screen; only the dashboard card omits them.
  Other task types, such as Replication and Cloud Sync, appear on the card as expected.
* Upgrading to TrueNAS 27 can disrupt two-factor authentication (2FA) for any account with a stored token interval other than 30 or 60 seconds. TrueNAS 27 supports only these two intervals and clears the stored 2FA secret for any affected account during the upgrade. A non-standard interval can come from the API, or from the global 2FA interval setting in TrueNAS releases before 24.04, which applied a single interval to every 2FA account on the system and persists across upgrades. The current web interface always uses a 30-second interval. See [Two-Factor Authentication](#two-factor-authentication) for who is affected and how to restore access.

<a href="https://ixsystems.atlassian.net/issues/?filter=14655" target="_blank">See the latest status on Jira</a> for public issues discovered in TrueNAS 27 that are being resolved in a future TrueNAS release.

See the [Release Notes](https://forums.truenas.com/c/release-notes/13) section of the TrueNAS forum for ongoing updates about known issues, investigations, and statistics about TrueNAS releases.

  </div>

  <div data-tab-id="major-features" data-tab-label="27 Major Features">

{{< include file="/static/includes/27FeatureList.md" >}}

  </div>
  <div data-tab-id="full-changelog" data-tab-label="Full 27 Changelog">
<!-- CSV Changelog Table with Version Support -->
<div id="csv-changelog-container"></div>
  </div>

  <div data-tab-id="deprecations" data-tab-label="Deprecations">

{{< include file="/static/includes/DeprecationsList.md" >}}

For additional resources, see the [Feature Deprecations]({{< ref "Deprecations" >}}) page.

  </div>

</div>

<!-- Linkable Tab Box -->
<div id="release-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('release-tab-content-source', 'release-tabs-container', '27-nightly-changes');
});
</script>

<!-- CSV Changelog Table Script - Load outside tab content to prevent redeclaration -->
{{< changelog-scripts >}}
<script>
// Initialize changelog table for version
initializeChangelogTableForTabs('27');
</script>

## Upgrading TrueNAS {#upgrading}

<!-- Hugo-processed content for upgrade notes tab box -->
<div style="display: none;" id="tab-content-source">
  <div data-tab-id="upgrade-prep" data-tab-label="Preparing to Upgrade">

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* The TrueNAS REST API is removed in TrueNAS 27. Systems still using the REST API must migrate to the JSON-RPC 2.0 WebSocket API before upgrading. See [API Changes](#api-changes) for migration guidance and details about API authentication improvements in TrueNAS 27.

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

  </div>

  <div data-tab-id="api-changes" data-tab-label="API Changes">

### API Improvements in TrueNAS 27

#### REST API Removal

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

{{< include file="/static/includes/APIDocs.md" >}}

You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
Click **API Docs** to view API documentation.

#### Improved API Authentication

TrueNAS 27 introduces `auth.login_ex` as a unified WebSocket API authentication method that supports password (`PASSWORD_PLAIN`), API key (`API_KEY_PLAIN`), OTP token (`OTP_TOKEN`), and the new SCRAM-SHA-512 (`SCRAM`) mechanism. SCRAM provides mutual authentication between client and server without transmitting raw key material.

The legacy `auth.login` and `auth.login_with_api_key` methods are deprecated and scheduled for removal in TrueNAS 27. Their functionality is fully replaced by `auth.login_ex`, which continues to support `API_KEY_PLAIN` and the other non-SCRAM mechanisms beyond TrueNAS 27. SCRAM is the recommended choice for new clients that can adopt it.

See the [SCRAM Authentication primer](https://github.com/truenas/middleware/blob/stable/26/docs/source/accounts/scram_authentication.rst) for guidance on implementing SCRAM in custom API clients and migrating pre-TrueNAS 26 API keys to the optimized precomputed format.

For the full list of deprecated and removed API methods, see [Feature Deprecations]({{< ref "Deprecations" >}}).

  </div>

  <div data-tab-id="two-factor-authentication" data-tab-label="Two-Factor Authentication">

### Two-Factor Authentication Interval Change

TrueNAS 27 restricts the two-factor authentication (2FA) token interval to 30 or 60 seconds. TrueNAS 27 validates Time-based One-Time Password (TOTP) login codes and accepts only these two intervals.

A non-standard interval could have been set through the API, or through the global 2FA setting in TrueNAS releases before 24.04, where the web interface exposed an editable interval field that applied a single value to every 2FA account on the system. That value persists across upgrades. The current web interface always sets a 30-second interval and no longer exposes this field, so 2FA configured through the UI on TrueNAS 24.04 or later uses the supported 30-second interval. A non-standard interval worked for web interface logins in earlier releases but stops working after upgrading to TrueNAS 27. Both local accounts and directory services (Active Directory or LDAP) accounts are in scope.

During the upgrade, TrueNAS clears the stored 2FA secret and resets the interval to 30 for any affected account. That account has no working 2FA until the user sets up 2FA again.

To avoid any interruption, affected users re-enroll before upgrading. Go to **Credentials > Two Factor Auth**, click **Renew 2FA Secret**, then scan the new QR code with an authenticator app. The renewed secret uses the default 30-second interval. If you are not sure whether an account is affected, renew the 2FA secret for that account anyway. A renewal is safe for accounts that are not affected.

To restore 2FA for an affected account after upgrading:

- On standard systems, where 2FA is not required to log in, the user signs in with their password, then re-enrolls 2FA at **Credentials > Two Factor Auth**.
- On systems that require 2FA to log in (for example, STIG mode), an administrator issues a one-time password for the affected user. An administrator who can still sign in generates it at **Credentials > Users**: select the affected user, then click **Generate One-Time Password** on the **Password** widget. If every administrator is locked out, an administrator with console access generates it from the console:

  {{< cli >}}  
  midclt call auth.generate_onetime_password '{"username": "*account-name*"}'
  {{< /cli >}}

  Replace {{< cli >}}*account-name*{{< /cli >}} with the name of the affected user account. The command returns a one-time password (for example, `1_nIaCpK-OhJPNQ-I6BfKr-29CyQB`). The user enters it in place of their password at the login screen, then reconfigures 2FA at **Credentials > Two Factor Auth**.

  </div>

  <div data-tab-id="containers-virtual-machines" data-tab-label="Containers and Virtual Machines">

### Containers and Virtual Machines

#### Containers

LXC containers, introduced as an experimental feature in earlier TrueNAS releases, are fully supported in TrueNAS 27.
No configuration migration is required for containers created in prior releases.

TrueNAS 27 adds the following container improvements:

- **Enterprise HA support** — Containers can now fail over between HA controllers ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  HA container failover requires a **static IP configuration**. Containers using DHCP do not fail over.
- **GPU passthrough** — NVIDIA and other supported GPU devices can now be assigned to LXC containers from the container configuration screen ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
- **USB and PCIe passthrough fixes** — A regression that prevented USB and PCIe device passthrough to containers and VMs is resolved in 26-BETA.1 ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).

See [Containers]({{< ref "/Containers/ManagingContainers.md" >}}) for configuration details.

  </div>

  <div data-tab-id="disk-health-management" data-tab-label="Drive Health Management">

### Drive Health Management

TrueNAS monitors the condition of installed HDD and SSD drives (SAS, SATA, and NVMe) through three integrated layers:

- **ZFS** detects sudden failures in real time during active read and write operations and marks affected vdevs or disks as faulted immediately.
- **TrueNAS Middleware** polls SMART data from every drive every 90 minutes. When a polled attribute crosses a failure threshold, TrueNAS generates an alert.
- **Alert logic** filters incoming SMART and ZFS data to suppress known-benign attribute fluctuations, reducing false-positive alerts by approximately 50% compared to prior releases.

Drive health status is visible on the [**Disk Health**]({{< ref "/Storage/StorageDashboardScreens.md#disk-health-widget" >}}) card on the **Storage** dashboard. Active alerts appear in the **Alerts** panel with details on the affected disk and recommended next steps.

Community Edition users can supplement automated monitoring with manual SMART tests run via cron jobs or the `smartctl` command-line tool. Third-party tools such as [Scrutiny](https://apps.truenas.com/catalog/scrutiny_community/) are also available from the TrueNAS Apps catalog.

See [Drive Health Management]({{< ref "/Storage/Disks/DriveHealthManagement.md" >}}) for full details.

  </div>

  <div data-tab-id="upgrade-paths" data-tab-label="Upgrade Paths">

### Upgrade Paths

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/27UpgradeMethods.md" >}}

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}
  </div>  
  <div data-tab-id="migrating-from-tn13" data-tab-label="Migrating from TrueNAS 13.0 or 13.3">

### Migrating from TrueNAS 13.0 or 13.3

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

Depending on the specific system configuration, migrating from a FreeBSD-based TrueNAS version can be a straightforward or complicated process.
See the [Migration articles]({{< ref "/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the migration process.

{{< enterprise >}}
{{< include file="/static/includes/EnterpriseMigrationSupport.md" >}}

{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /enterprise >}}
  </div>  
</div>

<!-- Linkable Tab Box -->
<div id="upgrade-notes-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('tab-content-source', 'upgrade-notes-container', 'upgrade-prep');
});
</script>

## Component Versions and ZFS Feature Flags {#component-versions-feature-flags}

<!-- Hugo-processed content for component versions tab box -->
<div style="display: none;" id="component-tab-content-source">
  <div data-tab-id="software-component-versions" data-tab-label="Software Component Versions">

### Software Component Versions {#component-versions-tab}

Click the component version number to see release notes for that component.

{{< component-versions "26" >}}

\*TrueNAS (25.10 and later) includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
  </div>

  <div data-tab-id="zfs-feature-flags" data-tab-label="ZFS Feature Flags">

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.3.3) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| `block_cloning_endian` | [com.truenas:block_cloning_endian](https://openzfs.github.io/openzfs-docs/man/v2.4/7/zpool-features.7.html#block_cloning_endian) | Corrects ZAP entry endianness issues in the Block Reference Table (BRT) used by block cloning. Read-only compatible. |
| `dynamic_gang_header` | [com.klarasystems:dynamic_gang_header](https://openzfs.github.io/openzfs-docs/man/v2.4/7/zpool-features.7.html#dynamic_gang_header) | Enables larger gang headers based on pool sector size. Not read-only compatible; must be manually enabled. |
| `physical_rewrite` | [com.truenas:physical_rewrite](https://openzfs.github.io/openzfs-docs/man/v2.4/7/zpool-features.7.html#physical_rewrite) | Enables physical block rewriting that preserves logical birth times, reducing incremental send stream sizes. Read-only compatible. |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).
  </div>  
</div>

<!-- Linkable Tab Box -->
<div id="component-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script src="/js/jump-to-button-fix.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('component-tab-content-source', 'component-tabs-container', 'software-component-versions');
});
</script>
