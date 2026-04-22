---
title: "TrueNAS 26 Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 26 releases."
weight: 10
aliases:
 - /releasenotes/
related: false
use_jump_to_buttons: true
jump_to_buttons:
  - text: "Latest Changes"
    anchor: "26.0.0-beta.1"
    icon: "fiber-new"
  - text: "Known Issues"
    anchor: "known-issues"
    icon: "warning"
  - text: "26 Major Features"
    anchor: "major-features"
    icon: "new-releases"
  - text: "Deprecations"
    anchor: "deprecations"
    icon: "timeline"
  - text: "Full 26 Changelog"
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

## Notable Changes and Known Issues

<!-- Hugo-processed content for release notes tab box -->
<div style="display: none;" id="release-tab-content-source">
  <div data-tab-id="26.0.0-beta.1" data-tab-label="26-BETA.1 Notable Changes">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

April 7, 2026

The TrueNAS team is pleased to release TrueNAS 26-BETA.1!
This first public release version of TrueNAS 26 has software component updates and new features that are in the polishing phase.
See [26 Major Features](#major-features) for an overview of what's new in this release.

{{< hint type=important title="Upgrading from TrueNAS 25.10" >}}
Upgrading from TrueNAS 25.10 to 26-BETA.1 is not available in the TrueNAS UI until TrueNAS 25.10.3 is released.
Users on TrueNAS 25.10 who wish to test 26-BETA.1 before that time can manually install or upgrade by downloading directly:
- [TrueNAS-26.0.0-BETA.1.iso](https://iso.sys.truenas.net/TrueNAS-26-BETA/26.0.0-BETA.1/TrueNAS-26.0.0-BETA.1.iso)
- [TrueNAS-26.0.0-BETA.1.update](https://update-public.sys.truenas.net/TrueNAS-26-BETA/TrueNAS-26.0.0-BETA.1.update)
{{< /hint >}}

Special thanks to (GitHub users): [Franco Castillo](https://github.com/castillofrancodamian), [AquariusStar](https://github.com/AquariusStar), [Rogelio Tajes Piñeiro](https://github.com/rtajes-max), [Aurélien Sallé](https://github.com/MDVAurelien), [dany22m](https://github.com/dany22m), [ReiKirishima](https://github.com/ReiKirishima), [Christos Longros](https://github.com/chrislongros), [Lee Jihaeng](https://github.com/SejoWuigui), [Aui162](https://github.com/Aui162), [Seele Volleri](https://github.com/SeeleVolleri), [Ban](https://github.com/Ban921), [Michael Rohrhirsch](https://github.com/CrunkA3), [PCAsusM1981](https://github.com/PCAsusM1981), [Cantabile](https://github.com/cantab1le), [Fernando G. Monteiro](https://github.com/fgmGitHub), [Joda Stößer](https://github.com/SimJoSt), [Marius](https://github.com/mariusachim), [herbkk](https://github.com/herbkk), [saso-g1](https://github.com/saso-g1), [René](https://github.com/renediepenbroek), [Jehu Marcos Herrera Puentes](https://github.com/JMarcosHP), [Amir Burbea](https://github.com/amirburbea), [Piotr Jasiek](https://github.com/pht31337), [Eric Schultz](https://github.com/eschultz), [Kent Ross](https://github.com/mumbleskates), [fkwp](https://github.com/fkwp), [Gautam krishna R](https://github.com/gautamkrishnar) and [Joel May](https://github.com/joel0) for contributing to TrueNAS 26-BETA.1.
Visit [our guide](https://www.truenas.com/docs/contributing/) for information on how you too can contribute.

### 26-BETA.1 Notable Changes

* Adds support for LXC containers in Enterprise High Availability (HA) configurations ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  Containers can now fail over between HA controllers. HA container failover requires a static IP configuration. See [Containers]({{< ref "/Containers/ManagingContainers.md" >}}) for configuration details.

* Adds GPU passthrough support for LXC containers ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
  Users can assign NVIDIA and other supported GPU devices to LXC containers from the container configuration screen in the UI.

* Adds Multi-Path I/O (MPIO) support for Fibre Channel connections ([NAS-137252](https://ixsystems.atlassian.net/browse/NAS-137252)).
  Fibre Channel configurations can now use multiple paths for improved redundancy and throughput. This option is available in the Fibre Channel port configuration.

* Adds SMB3 unix extensions support for multiprotocol shares ([NAS-139988](https://ixsystems.atlassian.net/browse/NAS-139988)).
  When a share uses the **Multi-Protocol** purpose (for example, SMB combined with NFS or local app and container access), TrueNAS now enables SMB3 unix extensions. Linux clients with SMB3 POSIX support can use filesystem primitives not normally available through standard SMB semantics. Windows clients without unix extension support continue to behave normally.

* Adds BRT (Block Reference Table) support to the `zpool prefetch` command for faster pool import operations ([NAS-139230](https://ixsystems.atlassian.net/browse/NAS-139230)).
  Pool imports on systems that use block cloning are now faster, as the prefetch operation includes BRT metadata.

* Adds an option to de-register a system from TrueNAS Connect ([NAS-139544](https://ixsystems.atlassian.net/browse/NAS-139544)).
  Users can now remove a system's TrueNAS Connect registration from the **TrueNAS Connect** configuration screen without needing to contact support.

* Adds support for the `include:` key in custom app Docker Compose configurations ([NAS-137498](https://ixsystems.atlassian.net/browse/NAS-137498)).
  Custom app Compose files can now reference external Compose files that define services, allowing users who manage their own Docker Compose files outside TrueNAS to use modular configurations.

* Updates the **Pools** and storage screens to reflect OpenZFS 2.4 changes, including the new separation of special and dedup vdev types ([NAS-138129](https://ixsystems.atlassian.net/browse/NAS-138129)).
  Pool creation and management dialogs now correctly represent the new vdev types available in OpenZFS 2.4.

* Improves the **Storage Dashboard** to show the reason a pool is degraded ([NAS-138613](https://ixsystems.atlassian.net/browse/NAS-138613)).
  Previously, a degraded pool indicator offered no detail on the cause. The dashboard now provides context so users can take corrective action.

* Updates the Samba build to version 4.23 ([NAS-139190](https://ixsystems.atlassian.net/browse/NAS-139190)).
  See the [Samba 4.23.0 release notes](https://www.samba.org/samba/history/samba-4.23.0.html) for upstream changes. Note that changes to Samba defaults do not necessarily change TrueNAS defaults. See [Software Component Versions](#software-component-versions) for all component version updates in this release.

* Improves touch and mobile usability for side panels and configuration screens ([NAS-139925](https://ixsystems.atlassian.net/browse/NAS-139925), [NAS-139786](https://ixsystems.atlassian.net/browse/NAS-139786), [NAS-138896](https://ixsystems.atlassian.net/browse/NAS-138896)).
  Side panels now scroll correctly in mobile browsers, canvas edge spacing is improved for touch targets, and the **Save** button on the **Add Rsync Task** screen is no longer hidden on small screens.

* Fixes TrueNAS updates failing with errors that could leave apps non-functional or set a broken boot environment as default ([NAS-139794](https://ixsystems.atlassian.net/browse/NAS-139794), [NAS-139545](https://ixsystems.atlassian.net/browse/NAS-139545)).
  A "pool or dataset is busy" error during updates could set an incomplete boot environment as default. A separate regression also caused apps to fail to start after updating. Both issues are resolved.

* Fixes the **System > Services** screen showing as empty ([NAS-139571](https://ixsystems.atlassian.net/browse/NAS-139571)).
  A regression could cause the services list to appear blank on affected systems, preventing users from starting, stopping, or configuring services from the UI.

* Fixes an issue where datasets could not be loaded in the UI ([NAS-140389](https://ixsystems.atlassian.net/browse/NAS-140389)).
  A middleware issue could prevent dataset information from loading on the **Datasets** screen, showing an error instead of the dataset tree.

* Fixes available space calculations for pools with special or dedup vdevs ([NAS-139820](https://ixsystems.atlassian.net/browse/NAS-139820)).
  Incorrect accounting could cause available space to display inaccurate values on pools using special allocation or dedup vdevs.

* Fixes an issue where virtual DRAID devices appeared as physical disks in the disk inventory ([NAS-140344](https://ixsystems.atlassian.net/browse/NAS-140344)).
  On pools using DRAID vdevs, virtual devices could be incorrectly counted alongside physical drives, causing inaccurate disk inventory results.

* Fixes datasets becoming unavailable after a ZFS send replication operation ([NAS-139363](https://ixsystems.atlassian.net/browse/NAS-139363)).
  A ZFS issue could cause target datasets to enter an unavailable state after a send operation completed. Datasets are now accessible immediately after replication finishes.

* Fixes a boot delay of up to 120 seconds on systems with VLAN interfaces configured for DHCP ([NAS-139038](https://ixsystems.atlassian.net/browse/NAS-139038)).
  Systems using VLAN interfaces with DHCP experienced long waits during boot due to a `dhcpcd` configuration issue. Boot now completes without the delay.

* Fixes an error that prevented setting secondary IP address aliases on network interfaces ([NAS-139803](https://ixsystems.atlassian.net/browse/NAS-139803)).
  A `KeyError: 'alias_interface_id'` error could occur when saving secondary aliases in the network interface configuration.

* Fixes the Samba Spotlight metadata service connection so that macOS Spotlight search works correctly on SMB shares ([NAS-137715](https://ixsystems.atlassian.net/browse/NAS-137715)).
  The Spotlight AF_UNIX socket connection was established as a non-privileged user, causing authentication failures. The connection now runs with the correct permissions.

* Fixes an error that prevented editing share ACLs ([NAS-139535](https://ixsystems.atlassian.net/browse/NAS-139535)).
  Users attempting to modify permissions on SMB or NFS shares through the ACL editor could receive errors and be unable to save changes.

* Fixes NFS shares showing no available actions in the **Shares** screen ([NAS-139490](https://ixsystems.atlassian.net/browse/NAS-139490)).
  The action buttons for NFS shares could fail to render correctly, preventing users from editing or deleting NFS shares from the UI.

* Fixes an error that prevented updating an iSCSI auth method when **Mutual CHAP** was selected ([NAS-139397](https://ixsystems.atlassian.net/browse/NAS-139397)).
  Users could not save changes to iSCSI authorized access entries with Mutual CHAP configured.

* Fixes USB and PCIe device passthrough to virtual machines ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).
  A regression in an earlier nightly build broke the ability to pass USB and PCIe devices through to VMs. Both USB and PCIe passthrough are restored in BETA.1.

* Fixes Rsync task setup failures related to remote path validation and host key verification ([NAS-139773](https://ixsystems.atlassian.net/browse/NAS-139773)).
  Remote path validation could incorrectly reject valid paths, and host key verification could fail even after accepting the key. Both issues are resolved.

* Fixes SNMP alerts that stopped sending notifications ([NAS-140259](https://ixsystems.atlassian.net/browse/NAS-140259)).
  A regression could cause SNMP alert notifications to fail silently on affected systems. SNMP monitoring integrations relying on TrueNAS alerts now receive notifications correctly.

* Fixes the CPU reporting chart to show both per-core and total CPU usage ([NAS-135633](https://ixsystems.atlassian.net/browse/NAS-135633)).
  The **Reporting** screen previously only showed aggregated CPU usage. Users can now view individual core utilization alongside the total.

* Fixes UI regressions introduced by an Angular framework upgrade, including session logouts on page refresh in Firefox and broken tooltips across multiple screens ([NAS-139491](https://ixsystems.atlassian.net/browse/NAS-139491), [NAS-139342](https://ixsystems.atlassian.net/browse/NAS-139342)).
  Firefox users were logged out unexpectedly on page refresh, and tooltips and contextual popovers stopped working throughout the interface. Both issues are resolved.

* Fixes the TrueNAS web UI preventing NVIDIA driver removal when the GPU has already been uninstalled ([NAS-137282](https://ixsystems.atlassian.net/browse/NAS-137282)).
  When an NVIDIA GPU was physically removed, the UI did not allow removing the associated driver package. The driver can now be removed independently of hardware presence.

<a href="#full-changelog" target="_blank">Click here</a> to see the full 26 changelog or visit the <a href="https://ixsystems.atlassian.net/issues?filter=14298" target="_blank">TrueNAS 26-BETA.1 Changelog</a> in Jira.

<!-- NIGHTLY CONTENT - preserved for reference, remove when no longer needed
**SMB Stateful Failover** (Enterprise, HA) — TrueNAS 26 introduces stateful SMB HA failover.
When enabled in the SMB service configuration, TrueNAS maintains SMB session state across controller failover events, allowing clients to reconnect without re-authentication.
Incompatible with SMB1 support and Multi-Protocol or Legacy share purposes.
See [Enabling SMB Stateful Failover]({{< ref "AddManageSMBShares#enabling-smb-stateful-failover" >}}) for details.
-->

  </div>

  <div data-tab-id="known-issues" data-tab-label="Known Issues">

{{< hint type="important" title="Known Issues in 26" >}}
These are ongoing issues that can affect multiple versions in the 26 series.
<br> When resolved, issues move to **Notable Changes** for the appropriate release.
{{< /hint >}}

### Current Known Issues

* The **Send Feedback > Report a Bug** feature does not attach the debug file when **Attach Debug** is selected, and the UI does not display an error if the attachment fails ([NAS-140163](https://ixsystems.atlassian.net/browse/NAS-140163), [NAS-140237](https://ixsystems.atlassian.net/browse/NAS-140237)).
  Ticket creation is not affected. To manually attach a debug file, generate one from **System > General Settings > Support > Save Debug** and upload it using the Private File Upload link automatically added as a comment on the created Jira ticket.
  Resolved in 26-BETA.2.

<a href="https://ixsystems.atlassian.net/issues?filter=14297" target="_blank">See the latest status on Jira</a> for public issues discovered in 26-BETA.1 that are being resolved in a future TrueNAS release.

See the [Release Notes](https://forums.truenas.com/c/release-notes/13) section of the TrueNAS forum for ongoing updates about known issues, investigations, and statistics about TrueNAS releases.

  </div>

  <div data-tab-id="major-features" data-tab-label="26 Major Features">

{{< include file="/static/includes/26FeatureList.md" >}}

  </div>
  <div data-tab-id="full-changelog" data-tab-label="Full 26 Changelog">
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
    initializeHugoTabs('release-tab-content-source', 'release-tabs-container', '26.0.0-beta.1');
});
</script>

<!-- CSV Changelog Table Script - Load outside tab content to prevent redeclaration -->
{{< changelog-scripts >}}
<script>
// Initialize changelog table for version
initializeChangelogTableForTabs('26');
</script>

## Upgrading TrueNAS {#upgrading}

<!-- Hugo-processed content for upgrade notes tab box -->
<div style="display: none;" id="tab-content-source">
  <div data-tab-id="upgrade-prep" data-tab-label="Preparing to Upgrade">

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* {{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

  {{< include file="/static/includes/APIDocs.md" >}}

  You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
  Click **API Docs** to view API documentation.
  
  </div>

  <div data-tab-id="containers-virtual-machines" data-tab-label="Containers and Virtual Machines">

### Containers and Virtual Machines

#### Containers

LXC containers, introduced as an experimental feature in earlier TrueNAS releases, are fully supported in TrueNAS 26.
No configuration migration is required for containers created in prior releases.

TrueNAS 26 adds the following container improvements:

- **Enterprise HA support** — Containers can now fail over between HA controllers ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  HA container failover requires a **static IP configuration**. Containers using DHCP do not fail over.
- **GPU passthrough** — NVIDIA and other supported GPU devices can now be assigned to LXC containers from the container configuration screen ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
- **USB and PCIe passthrough fixes** — A regression that prevented USB and PCIe device passthrough to containers and VMs is resolved in BETA.1 ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).

See [Containers]({{< ref "/Containers/ManagingContainers.md" >}}) for configuration details.

  </div>

  <div data-tab-id="disk-health-management" data-tab-label="Drive Health Management">

### Drive Health Management

TrueNAS monitors the condition of installed HDD and SSD drives (SAS, SATA, and NVMe) through three integrated layers:

- **ZFS** detects sudden failures in real time during active read and write operations and marks affected vdevs or disks as faulted immediately.
- **TrueNAS Middleware** polls SMART data from every drive every 90 minutes. When a polled attribute crosses a failure threshold, TrueNAS generates an alert.
- **Alert logic** filters incoming SMART and ZFS data to suppress known-benign attribute fluctuations, reducing false-positive alerts by approximately 50% compared to prior releases.

Drive health status is visible on the [**Disk Health**]({{< ref "/Storage/StorageDashboardScreens.md#disk-health-widget" >}}) card on the **Storage** dashboard. Active alerts appear in the **Alerts** panel with details on the affected disk and recommended next steps.

Community Edition users can supplement automated monitoring with manual SMART tests run via cron jobs or the `smartctl` command-line tool. Third-party tools such as [Scrutiny](https://apps.truenas.com/catalog/scrutiny/) are also available from the TrueNAS Apps catalog.

See [Drive Health Management]({{< ref "/Storage/Disks/DriveHealthManagement.md" >}}) for full details.

  </div>

  <div data-tab-id="truenas-apps" data-tab-label="TrueNAS Apps">

### TrueNAS Apps

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

{{< include file="/static/includes/apps-market-ad-banner.md" >}}

  </div>

  <div data-tab-id="upgrade-paths" data-tab-label="Upgrade Paths">

### Upgrade Paths

{{< hint type=important title="25.10 Upgrade Path" >}}
Upgrading from TrueNAS 25.10 to 26-BETA.1 is not available in the TrueNAS UI until TrueNAS 25.10.3 is released.
Users on TrueNAS 25.10 who wish to test 26-BETA.1 before that time can manually install or upgrade by downloading directly:
- [TrueNAS-26.0.0-BETA.1.iso](https://iso.sys.truenas.net/TrueNAS-26-BETA/26.0.0-BETA.1/TrueNAS-26.0.0-BETA.1.iso)
- [TrueNAS-26.0.0-BETA.1.update](https://update-public.sys.truenas.net/TrueNAS-26-BETA/TrueNAS-26.0.0-BETA.1.update)
{{< /hint >}}

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/26UpgradeMethods.md" >}}

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
