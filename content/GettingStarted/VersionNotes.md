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

April 00, 2026

The TrueNAS team is pleased to release TrueNAS 26-BETA.1!
This first public release version of TrueNAS 26 has software component updates and new features that are in the polishing phase.

Special thanks to (Github users): [Franco Castillo](https://github.com/castillofrancodamian), [AquariusStar](https://github.com/AquariusStar), [Rogelio Tajes Piñeiro](https://github.com/rtajes-max), [Aurélien Sallé](https://github.com/MDVAurelien), [dany22m](https://github.com/dany22m), [ReiKirishima](https://github.com/ReiKirishima), [Christos Longros](https://github.com/chrislongros), [Lee Jihaeng](https://github.com/SejoWuigui), [Aui162](https://github.com/Aui162), [Seele Volleri](https://github.com/SeeleVolleri), [Ban](https://github.com/Ban921), [Michael Rohrhirsch](https://github.com/CrunkA3), [PCAsusM1981](https://github.com/PCAsusM1981), [Cantabile](https://github.com/cantab1le), [Fernando G. Monteiro](https://github.com/fgmGitHub), [Joda Stößer](https://github.com/SimJoSt), [Marius](https://github.com/mariusachim), [herbkk](https://github.com/herbkk), [saso-g1](https://github.com/saso-g1), [René](https://github.com/renediepenbroek), [Jehu Marcos Herrera Puentes](https://github.com/JMarcosHP), [Amir Burbea](https://github.com/amirburbea), [Piotr Jasiek](https://github.com/pht31337), [Eric Schultz](https://github.com/eschultz), [Kent Ross](https://github.com/mumbleskates), [fkwp](https://github.com/fkwp), [Gautam krishna R](https://github.com/gautamkrishnar) and [Joel May](https://github.com/joel0) for contributing to TrueNAS 26-BETA.1.
Visit [our guide](https://www.truenas.com/docs/contributing/) for information on how you too can contribute.

### 26-BETA.1 Notable Changes

* Adds support for LXC containers in Enterprise High Availability (HA) configurations ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  Containers can now fail over between HA controllers. HA container failover requires a static IP configuration.

* Adds GPU passthrough support for LXC containers, including NVIDIA and Intel GPUs ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
  Users can assign NVIDIA and Intel GPU devices to LXC containers from the container configuration screen in the UI.

* Adds CPU, memory, and network metrics for LXC containers in the UI ([NAS-138624](https://ixsystems.atlassian.net/browse/NAS-138624)).
  Container performance data is now visible directly from the container view, matching the metrics display previously available for virtual machines.

* Fixes migration of containers from the Incus implementation to the libvirt implementation ([NAS-138743](https://ixsystems.atlassian.net/browse/NAS-138743)).
  Users upgrading from TrueNAS 25.10 with existing containers could encounter migration failures. This fix ensures containers transfer correctly during upgrade.

* Adds Multi-Path I/O (MPIO) support for Fibre Channel connections ([NAS-137252](https://ixsystems.atlassian.net/browse/NAS-137252)).
  Fibre Channel configurations can now use multiple paths for improved redundancy and throughput. This option is available in the Fibre Channel port configuration.

* Updates the **Pools** and storage screens to reflect OpenZFS 2.4 changes, including the new separation of special and dedup vdev types ([NAS-138129](https://ixsystems.atlassian.net/browse/NAS-138129)).
  Pool creation and management dialogs now correctly represent the new vdev types available in OpenZFS 2.4.

* Fixes the Samba Spotlight metadata service connection so that macOS Spotlight search works correctly on SMB shares ([NAS-137715](https://ixsystems.atlassian.net/browse/NAS-137715)).
  The Spotlight AF_UNIX socket connection was established as a non-privileged user, causing authentication failures. The connection now runs with the correct permissions.

* Adds an option to de-register a system from TrueNAS Connect ([NAS-139544](https://ixsystems.atlassian.net/browse/NAS-139544)).
  Users can now remove a system's TrueNAS Connect registration from the **TrueNAS Connect** configuration screen without needing to contact support.

* Adds BRT (Block Reference Table) support to the `zpool prefetch` command for faster pool import operations ([NAS-139230](https://ixsystems.atlassian.net/browse/NAS-139230)).
  Pool imports on systems that use block cloning are now faster, as the prefetch operation includes BRT metadata.

* Fixes SNMP alerts that stopped sending notifications ([NAS-140259](https://ixsystems.atlassian.net/browse/NAS-140259)).
  A regression caused SNMP alert notifications to fail silently. SNMP monitoring integrations relying on TrueNAS alerts now receive notifications correctly.

* Fixes an issue where `pool.get_disks` incorrectly returned virtual DRAID devices as physical disks ([NAS-140344](https://ixsystems.atlassian.net/browse/NAS-140344)).
  This caused incorrect disk inventory results for pools using DRAID vdevs and affected downstream operations that depend on accurate disk lists.

* Fixes a blocker that prevented creating or modifying virtual machines and containers ([NAS-139812](https://ixsystems.atlassian.net/browse/NAS-139812)).
  A middleware regression in earlier nightly builds made it impossible to save new VM or container configurations.

* Fixes TrueNAS updates failing with a "pool or dataset is busy" error that could set a broken boot environment as the default ([NAS-139794](https://ixsystems.atlassian.net/browse/NAS-139794)).
  In some cases, the update process failed mid-way and left the system with an incomplete boot environment set as default. The update sequence is fixed to prevent this state.

* Fixes an issue where applications did not start after a TrueNAS update ([NAS-139545](https://ixsystems.atlassian.net/browse/NAS-139545)).
  A regression caused the apps service to fail to start applications following an update. Apps now start correctly after updating.

* Fixes a failure where datasets could not be loaded in the UI ([NAS-140389](https://ixsystems.atlassian.net/browse/NAS-140389)).
  A middleware issue prevented dataset information from loading on the **Datasets** screen, showing an error instead of the dataset tree.

* Fixes available space calculations for pools with special or dedup vdevs ([NAS-139820](https://ixsystems.atlassian.net/browse/NAS-139820)).
  Incorrect accounting caused available space to display inaccurate values for pools using special allocation or dedup vdevs.

* Fixes an error that prevented setting secondary IP address aliases on network interfaces ([NAS-139803](https://ixsystems.atlassian.net/browse/NAS-139803)).
  A `KeyError: 'alias_interface_id'` error prevented saving secondary aliases in the network interface configuration.

* Fixes the **System > Services** screen showing as empty ([NAS-139571](https://ixsystems.atlassian.net/browse/NAS-139571)).
  A regression caused the services list to appear blank, preventing users from starting, stopping, or configuring services from the UI.

* Fixes an error that prevented editing share ACLs ([NAS-139535](https://ixsystems.atlassian.net/browse/NAS-139535)).
  Users attempting to modify permissions on SMB or NFS shares through the ACL editor received errors and could not save changes.

* Fixes NFS shares showing no available actions in the **Shares** screen ([NAS-139490](https://ixsystems.atlassian.net/browse/NAS-139490)).
  The action buttons for NFS shares were not rendering correctly, preventing users from editing or deleting NFS shares from the UI.

* Fixes an error that prevented updating an iSCSI auth method when **Mutual CHAP** was selected ([NAS-139397](https://ixsystems.atlassian.net/browse/NAS-139397)).
  Users could not save changes to iSCSI authorized access entries with Mutual CHAP configured.

* Fixes USB and PCIe device passthrough to virtual machines ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).
  A regression in an earlier nightly build broke the ability to pass USB and PCIe devices through to VMs. Both USB and PCIe passthrough are restored in BETA.1.

* Fixes a boot delay of up to 120 seconds on systems with VLAN interfaces configured for DHCP ([NAS-139038](https://ixsystems.atlassian.net/browse/NAS-139038)).
  Systems using VLAN interfaces with DHCP experienced long waits during boot due to a `dhcpcd` configuration issue. Boot now completes without the delay.

* Fixes Time Machine SMB shares being unnecessarily indexed by the Spotlight service ([NAS-139559](https://ixsystems.atlassian.net/browse/NAS-139559)).
  Time Machine volumes were being sent to the Spotlight indexer even though they do not support Spotlight search, causing unnecessary resource usage.

* Fixes the web interface logging out users on page refresh in Firefox ([NAS-139491](https://ixsystems.atlassian.net/browse/NAS-139491)).
  Firefox users experienced unexpected session termination when refreshing the TrueNAS web interface. Sessions now persist correctly across page refreshes in Firefox.

* Fixes datasets becoming unavailable after a ZFS send replication operation ([NAS-139363](https://ixsystems.atlassian.net/browse/NAS-139363)).
  A ZFS issue caused target datasets to enter an unavailable state after a send operation completed. Datasets are now accessible immediately after replication finishes.

* Fixes Rsync task setup failures related to remote path validation and host key verification ([NAS-139773](https://ixsystems.atlassian.net/browse/NAS-139773)).
  Remote path validation incorrectly rejected valid paths, and host key verification failed even after accepting the key. Both issues are resolved.

* Fixes tooltips and hover popovers throughout the UI that broke after an Angular framework upgrade ([NAS-139342](https://ixsystems.atlassian.net/browse/NAS-139342)).
  An Angular update caused tooltips and contextual popovers to stop working across many screens. Tooltips now display correctly.

* Improves the **Storage Dashboard** to show the reason a pool is degraded ([NAS-138613](https://ixsystems.atlassian.net/browse/NAS-138613)).
  Previously, a degraded pool indicator offered no detail on the cause. The dashboard now provides context so users can take corrective action.

* Fixes a misleading warning that appeared when exporting a pool that did not contain the system dataset ([NAS-139293](https://ixsystems.atlassian.net/browse/NAS-139293)).
  The export dialog incorrectly stated "System dataset will be moved off this pool" even when the pool did not host the system dataset.

* Fixes incorrect compression options and size calculation discrepancies in the zvol creation form ([NAS-136251](https://ixsystems.atlassian.net/browse/NAS-136251)).
  Some compression options shown in the form were invalid, and reported zvol sizes did not always match actual allocated space.

* Fixes snapshot task retention attributes being lost after editing a periodic snapshot task ([NAS-133952](https://ixsystems.atlassian.net/browse/NAS-133952)).
  Editing a snapshot task caused existing snapshots to lose their retention timestamp, which could result in premature snapshot deletion.

* Fixes the CPU reporting chart to show both per-core and total CPU usage ([NAS-135633](https://ixsystems.atlassian.net/browse/NAS-135633)).
  The **Reporting** screen previously only showed aggregated CPU usage. Users can now view individual core utilization alongside the total.

* Fixes application log timestamps not following the system timezone ([NAS-139705](https://ixsystems.atlassian.net/browse/NAS-139705)).
  App logs displayed timestamps in UTC regardless of the configured system timezone, making it harder to correlate events with local time.

* Fixes the **Keep** and **Unkeep** actions being reversed in the boot environments dialog ([NAS-139053](https://ixsystems.atlassian.net/browse/NAS-139053)).
  The keep/unkeep action was labeled and applied in reverse. The correct behavior is now restored.

* Fixes the **Apps** catalog page not updating after manually triggering a catalog refresh ([NAS-138934](https://ixsystems.atlassian.net/browse/NAS-138934)).
  After refreshing the app catalog, users had to reload the entire page to see updated app information. The page now updates automatically.

* Fixes the update dialog obscuring a failed encryption key download notification ([NAS-139166](https://ixsystems.atlassian.net/browse/NAS-139166)).
  When an update was available and an encryption key download failed, the update modal blocked the failure message from being visible to the user.

* Fixes the replication task search filter being reset when a job starts or completes ([NAS-139213](https://ixsystems.atlassian.net/browse/NAS-139213)).
  Active search filters on the **Replication Tasks** screen were cleared whenever a replication job changed state, forcing users to re-enter their search.

* Improves touch and mobile usability for side panels and form layouts ([NAS-139925](https://ixsystems.atlassian.net/browse/NAS-139925), [NAS-139786](https://ixsystems.atlassian.net/browse/NAS-139786), [NAS-138896](https://ixsystems.atlassian.net/browse/NAS-138896)).
  Side panels now scroll correctly in mobile browsers, canvas edge spacing is improved for touch targets, and the **Save** button on the **Add Rsync Task** form is no longer hidden on small screens.

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

No known issues currently reported for 26 development builds.

Check back for more information.

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

  </div>

  <div data-tab-id="truenas-apps" data-tab-label="TrueNAS Apps">

### TrueNAS Apps

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

{{< include file="/static/includes/apps-market-ad-banner.md" >}}

  </div>

  <div data-tab-id="upgrade-paths" data-tab-label="Upgrade Paths">

### Upgrade Paths

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
