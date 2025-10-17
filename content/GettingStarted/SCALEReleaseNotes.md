---
title: "25.10 (Goldeye) Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 25.10 releases."
weight: 10
related: false
use_jump_to_buttons: true
jump_to_buttons:
  - text: "Latest Changes"
    anchor: "25.10-RC.1"
    icon: "fiber-new"
  - text: "Known Issues"
    anchor: "known-issues"
    icon: "warning"
  - text: "25.10 Major Features"
    anchor: "major-features"
    icon: "new-releases"
  - text: "Full 25.10 Changelog"
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

{{< hint type="important" icon="gdoc_code" title="25.10 Early Release Documentation" >}}
This page tracks the early release development for the future TrueNAS major version 25.10 (Goldeye).
See the stable [25.04 (Fangtooth)](https://www.truenas.com/docs/scale/25.04/gettingstarted/scalereleasenotes/) release notes for information relating to that version.
{{< /hint >}}

## Notable Changes and Known Issues

<!-- Hugo-processed content for release notes tab box -->
<div style="display: none;" id="release-tab-content-source">

  <div data-tab-id="25.10-RC.1" data-tab-label="25.10-RC.1">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early release software for critical tasks.
{{< /hint >}}

September 30, 2025

The TrueNAS team is pleased to release TrueNAS 25.10-RC.1!

### 25.10-RC.1 Notable changes

* Enhances remote syslog configuration to support up to two servers ([NAS-137315](https://ixsystems.atlassian.net/browse/NAS-137315)).
  Updates the **Syslog** configuration options in **System > Advanced Settings** to allow configuring multiple syslog servers with individual transport and TLS certificate options.
* Improves NVMeoF target configuration with automatic port defaults ([NAS-137394](https://ixsystems.atlassian.net/browse/NAS-137394), [NAS-137395](https://ixsystems.atlassian.net/browse/NAS-137395)).
  Sets port 4420 as the default for NVMe over Fabric targets, eliminating the need for manual port configuration.
* Clarifies VM secure boot configuration as create-only setting ([NAS-137397](https://ixsystems.atlassian.net/browse/NAS-137397)).
  Removes secure boot option from VM edit form as this setting can only be configured during initial VM creation.
* Fixes upgrade blocking issue for systems without BIOS partition ([NAS-137352](https://ixsystems.atlassian.net/browse/NAS-137352)).
  Resolves traceback during 25.10 upgrades on systems originally deployed with TrueNAS CORE that lack a BIOS partition.
* Fixes SMB service hanging during Windows client file operations ([NAS-137095](https://ixsystems.atlassian.net/browse/NAS-137095)).
  Resolves issue where Windows clients became unresponsive during file moves and editing operations, requiring manual thread termination.
* Fixes incorrect disk temperature threshold alerts ([NAS-137385](https://ixsystems.atlassian.net/browse/NAS-137385)).
  Resolves issue where critical temperature alerts were triggered incorrectly when threshold was set to 0 degrees Celsius.
* Improves password manager compatibility with WebUI login screen ([NAS-136335](https://ixsystems.atlassian.net/browse/NAS-136335)).
  Resolves issue where password managers like Bitwarden and Dashlane failed to automatically recognize and fill login credentials.
* Consolidates Users page interface ([NAS-137443](https://ixsystems.atlassian.net/browse/NAS-137443)).
  Removes legacy Users page and renames **Users (WIP)** to **Users** for a cleaner interface experience.
* Fixes network usage units display on Applications page ([NAS-137428](https://ixsystems.atlassian.net/browse/NAS-137428)).
  Corrects network usage units from lowercase 'b' to capital 'B' (B/s, kB/s, MB/s) to properly indicate bytes per second.
* Fixes UI Bug Reporting feature "FAILED: This TrueNAS build is experimental" error ([NAS-137445](https://ixsystems.atlassian.net/browse/NAS-137445)).
  Resolves issue preventing bug report submissions through the UI.
* Fixes incorrect time sort for frequency on Cloud Sync Tasks screen ([NAS-137096](https://ixsystems.atlassian.net/browse/NAS-137096)).
* Fixes Users page showing "can not retrieve response" error due to invalid email address ([NAS-137198](https://ixsystems.atlassian.net/browse/NAS-137198)).
* Fixes Virtual Machines page not refreshing properly ([NAS-136973](https://ixsystems.atlassian.net/browse/NAS-136973)).
* Adds VM disk image import and export capabilities ([NAS-137334](https://ixsystems.atlassian.net/browse/NAS-137334), [NAS-137335](https://ixsystems.atlassian.net/browse/NAS-137335)).
  Enables importing disk images (QCOW2, QED, RAW, VDI, VHDX, and VMDK formats) during VM creation and exporting VM disks to portable image formats, streamlining VM migration and setup processes.
* Improves Virtual Machine configuration performance ([NAS-136937](https://ixsystems.atlassian.net/browse/NAS-136937)).
  Prevents libvirt service from starting automatically when browsing VM creation options, improving system responsiveness.
* Enhances session security with improved random number generation ([NAS-137318](https://ixsystems.atlassian.net/browse/NAS-137318)).
  Uses SSL-based random number generator for creating session IDs, improving overall cryptographic security.
* Fixes an issue where the ACL editor ignored unchecked "Apply Owner" and "Apply Group" checkboxes and always applied owner/group changes recursively, potentially causing unintended ownership changes ([NAS-137378](https://ixsystems.atlassian.net/browse/NAS-137378)).
* The PGP public keys for the TrueNAS Security Team have been renewed and published to the [TrueNAS Security Advisories](https://security.truenas.com/).

<a href="#full-changelog" target="_blank">Click here</a> to see the full 25.10 changelog or visit the <a href="https://ixsystems.atlassian.net/issues/?filter=13361" target="_blank">TrueNAS 25.10-RC.1 (Goldeye) Changelog</a> in Jira.

  </div>

  <div data-tab-id="25.10-BETA.1" data-tab-label="25.10-BETA.1">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early release software for critical tasks.
{{< /hint >}}

August 28, 2025

The TrueNAS team is pleased to release TrueNAS 25.10-BETA.1!
This first public release version of TrueNAS 25.10 (Goldeye) has software component updates and new features that are in the polishing phase.

Special thanks to (Github users): [Aurélien Sallé](https://github.com/MDVAurelien), [ReiKirishima](https://github.com/ReiKirishima), [AquariusStar](https://github.com/AquariusStar), [RedstoneSpeaker](https://github.com/RedstoneSpeaker), [Lee Jihaeng](https://github.com/SejoWuigui), [Marcos Ribeiro](https://github.com/marcosasribeiro), [Christos Longros](https://github.com/chrislongros), [dany22m](https://github.com/dany22m), [Aindriú Mac Giolla Eoin](https://github.com/aindriu80), [William Li](https://github.com/WilliamLi0623), [Franco Castillo](https://github.com/castillofrancodamian), [MAURICIO S BASTOS](https://github.com/msbastos), [TeCHiScy](https://github.com/TeCHiScy), [Chen Zhaochang](https://github.com/chenwickc), [Helak](https://github.com/helakostain), [dedebenui](https://github.com/dedebenui), [Henry Essinghigh](https://github.com/essinghigh), [Sophist](https://github.com/Sophist-UK), [Piotr Jasiek](https://github.com/pht31337), [Martin Dørum](https://github.com/mortie), [Emmanuel Ferdman](https://github.com/emmanuel-ferdman) and [zrk02](https://github.com/zrk02) for contributing to TrueNAS 25.10-BETA.1.
Visit [our guide](https://www.truenas.com/docs/contributing/) for information on how you too can contribute.

### 25.10-BETA.1 Notable changes

{{< enterprise >}}
Virtual Machines are now "Enterprise ready" with support for TrueNAS Enterprise High Availability (HA) systems and failover ([NAS-136509](https://ixsystems.atlassian.net/browse/NAS-136509)).

Failover moves to the **Advanced Settings** screen ([NAS-135469](https://ixsystems.atlassian.net/browse/NAS-135469)).
{{< /enterprise >}}

* Introduces a redesigned **Updates** screen that allows users to select an update profile reflecting their risk-tolerance level ([NAS-133600](https://ixsystems.atlassian.net/browse/NAS-133600)). TrueNAS only notifies users of updates recommended for their selected profile level.
* Introduces changes to **Certificates**, **Certificate Authorities (CA)**, and **Certificate Signing Requests (CSR)** ([NAS-135168](https://ixsystems.atlassian.net/browse/NAS-135168)):
  * Removes **Certificate Authorities (CA)** screens and support for CAs, which means you cannot sign CSRs or create self-signed certificates.
  * Removes **Add** from **Certificates**. Users can import a certificate created by an external certificate authority.
  * Allows adding a certificate using the new **Create ACME Certificate** screen found under **Certificate Signing Requests** and an existing DNS authenticator added through the **ACME DNS Authenticators** screen.
    See [Preparing to Upgrade](#upgrade-prep) for more information.
* Introduces a refreshed **Users (WIP)** screen that provides improved, at-a-glance access to account information and simplified user creation ([NAS-134198](https://ixsystems.atlassian.net/browse/NAS-134198)).
* Introduces changes to the **Datasets** and **Storage Dashboard** screens ([NAS-135362](https://ixsystems.atlassian.net/browse/NAS-135362), [NAS-135364](https://ixsystems.atlassian.net/browse/NAS-135364)).
  * Renames dataset and pool widgets, and changes links to other screens.
  * Removes **Scrub Tasks** configuration and scheduling from the **Data Protection Tasks** screen, but makes it available on the **Storage Health** widget located on the **Storage Dashboard** ([NAS-135555](https://ixsystems.atlassian.net/browse/NAS-135555)). 
* Fixes the NVIDIA GPU related error "RenderError: Expected [uuid] to be set for GPU in slot" ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).
* Includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
* Adds support for directory services authentication via FTP ([NAS-135200](https://ixsystems.atlassian.net/browse/NAS-135200)).
* Adds the **Enable Secure Boot** option to virtual machine configuration screens ([NAS-136466](https://ixsystems.atlassian.net/browse/NAS-136466)).
* Allows TrueNAS to automatically migrate existing applications when selecting a new applications pool ([NAS-132188](https://ixsystems.atlassian.net/browse/NAS-132188)).
* Adds TrueNAS Apps service support for configuring external container registry mirrors as alternative sources for Docker images ([NAS-136553](https://ixsystems.atlassian.net/browse/NAS-136553)).
* Introduces various UI improvements and optimizations simplify core user experiences ([NAS-135159](https://ixsystems.atlassian.net/browse/NAS-135159)).
* Includes critical ZFS stability fixes and performance improvements, including fixed corruptions for plaintext replication of encrypted snapshots, enhanced memory pressure handling, faster pool export operations, improved I/O scaling capabilities, zfs rewrite and Direct I/O support ([NAS-135902](https://ixsystems.atlassian.net/browse/NAS-135902)).
* Simplifies and improves robustness of gateway and name server settings when changing from DHCP to static aliases ([NAS-136360](https://ixsystems.atlassian.net/browse/NAS-136360) and [NAS-136360](https://ixsystems.atlassian.net/browse/NAS-136360)).
  Moves **Network** screen under the **System** main menu option.
* Fixes insufficient memory pressure on ZFS ARC by Virtual Machines to prevent out-of-memory conditions ([NAS-135499](https://ixsystems.atlassian.net/browse/NAS-135499)).
* Virtual machines created in 25.04 (pre-25.04.2) and displayed on the **Containers** screen do not automatically start on system boot to prevent conflicts with VMs on the **Virtual Machines** screen that might use the same zvols ([NAS-136946](https://ixsystems.atlassian.net/browse/NAS-136946)).
* Makes changes to SMB shares:
  * Enables access-based enumeration for SMB shares with NFSv4 ACL type, so directory listings only show files that users have permission to read ([NAS-136499](https://ixsystems.atlassian.net/browse/NAS-136499)).
  * Changes SMB share **Advanced Options**, **Purpose**, and **Other Option** settings associated with the preset setting selected ([NAS-136499](https://ixsystems.atlassian.net/browse/NAS-136499)).
* Removes the **AUTORID** IDMAP backend option from Active Directory configuration to improve consistency across multi-server environments ([NAS-136630](https://ixsystems.atlassian.net/browse/NAS-136630)).
  Existing configurations using **AUTORID** are automatically migrated to **RID** during upgrade.
  Users should review their ACLs and permissions after upgrade and might need to reconfigure them in some edge cases.
* Completes the transition to the versioned JSON-RPC 2.0 over WebSocket API by migrating all remaining jobs and events from the deprecated REST API ([NAS-133984](https://ixsystems.atlassian.net/browse/NAS-133984)).
  Full removal of the REST API is planned for the TrueNAS 26.04 release.
* Removes the SMART UI ([NAS-134927](https://ixsystems.atlassian.net/browse/NAS-134927)).
  * Removes the built-in SMART test scheduling and monitoring interface to improve user flexibility while maintaining smartmontools binaries for continued third-party script compatibility ([NAS-135020](https://ixsystems.atlassian.net/browse/NAS-135020)).
    Existing scheduled SMART tests are automatically migrated to cron tasks during upgrade, and users can install the Scrutiny app for advanced SMART monitoring.
  * SMART tests functions no longer show on the **Data Protections Tasks**, **Storage Dashboard**, or individual disk screens.  
   See [Preparing to Upgrade](#upgrade-prep) for more information.
* Improves drive temperature monitoring efficiency by extending the `drivetemp` kernel module to include SCSI/SAS disk temperatures.
* Fixes an issue affecting drive temperature reporting on the dashboard ([NAS-135572](https://ixsystems.atlassian.net/browse/NAS-135572)).
* Fixes a bug to reenable available update notifications for custom apps ([NAS-135124](https://ixsystems.atlassian.net/browse/NAS-135124)).
* Fixes contrast issues on some UI theme options ([NAS-135519](https://ixsystems.atlassian.net/browse/NAS-135519)).

<a href="#full-changelog" target="_blank">Click here</a> to see the full 25.10 changelog or visit the <a href="https://ixsystems.atlassian.net/issues/?filter=13196" target="_blank">TrueNAS 25.10-BETA.1 (Goldeye) Changelog</a> in Jira.

  </div>

  <div data-tab-id="known-issues" data-tab-label="Known Issues">

{{< hint type="important" title="Known Issues in 25.10" >}}
These are ongoing issues that can affect multiple versions in the 25.10 series.
<br> When resolved, issues move to **Notable Changes** for the appropriate release.
{{< /hint >}}

### Current Known Issues

* The storage page can temporarily show errors while TrueNAS is on the receiving side of an active replication ([NAS-137818](https://ixsystems.atlassian.net/browse/NAS-137818)).
  This is due to some ZFS properties being unavailable while the dataset is in an inconsistent state. Better handling of this situation is planned for the 25.10.0 (and newer) releases.

* NVMe over TCP is incompatible with VMware ESXi environments ([NAS-137372](https://ixsystems.atlassian.net/browse/NAS-137372)).
  TrueNAS 25.10 uses the Linux kernel NVMe over TCP target driver, which lacks support for fused commands required by VMware ESXi.
  This is an upstream kernel limitation that prevents path initialization in ESXi environments.

<a href="https://ixsystems.atlassian.net/issues/?filter=13362" target="_blank">See the latest status on Jira</a> for public issues discovered in 25.10 that are being resolved in a future TrueNAS release.

See the [Release Notes](https://forums.truenas.com/c/release-notes/13) section of the TrueNAS forum for ongoing updates about known issues, investigations, and statistics about TrueNAS releases.

  </div>

  <div data-tab-id="major-features" data-tab-label="25.10 Major Features">

{{< include file="/static/includes/25.10FeatureList.md" >}}

  </div>

  <div data-tab-id="full-changelog" data-tab-label="Full 25.10 Changelog">
<!-- CSV Changelog Table with Version Support -->
<div id="csv-changelog-container"></div>
  </div>

</div>

<!-- Linkable Tab Box -->
<div id="release-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('release-tab-content-source', 'release-tabs-container', '25.10-BETA.1');
});
</script>

<!-- CSV Changelog Table Script - Load outside tab content to prevent redeclaration -->
{{< changelog-scripts >}}
<script>
// Initialize changelog table for version
initializeChangelogTableForTabs('25.10');
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
  
* NVIDIA GPU Compatibility: TrueNAS 25.10 switches to open GPU kernel drivers that are incompatible with legacy NVIDIA GPUs (Pascal, Maxwell, Volta architectures).
  See [NVIDIA GPU Support](#nvidia-gpu-support) for compatibility details.

* Virtual Machine Startup Changes: VMs created in TrueNAS 25.04 (pre-25.04.2) and displayed on the **Containers** screen no longer automatically start on system boot to prevent conflicts with VMs on the **Virtual Machines** screen.
  See [Containers and Virtual Machines](#containers-virtual-machines) for more information.

* Active Directory AUTORID IDMAP Backend Removal: TrueNAS 25.10 removes this option to improve consistency across multi-server environments ([NAS-136630](https://ixsystems.atlassian.net/browse/NAS-136630)).
  Existing configurations using **AUTORID** are automatically migrated to **RID** during upgrade.
  Users should review their ACLs and permissions after upgrade and might need to reconfigure them in some edge cases.

* TrueNAS 25.10 removes the built-in SMART test scheduling and monitoring interface to improve user flexibility for disk monitoring.
  The smartmontools binaries remain installed and continue to be used internally by TrueNAS, ensuring that existing third-party scripts and monitoring tools continue to work unchanged.
  Users seeking advanced SMART monitoring can install the "Scrutiny" app from the TrueNAS catalog, which offers superior disk health tracking with historical data storage, customizable alerts, and automatic drive detection.
  TrueNAS maintains monitoring of critical disk health indicators and automatically migrates existing scheduled SMART tests to cron tasks during upgrade.

* TrueNAS 25.10 removes the Certificate Authority (CA) functionality that allowed TrueNAS to create and sign certificates.
  Users can continue to manage certificates by creating Certificate Signing Requests (CSRs) to be signed by external certificate authorities or and importing certificates that have been signed by external CAs or directory services.
  These alternatives provide the certificate management capabilities most users need while ensuring proper certificate validation through established certificate authorities.

* TrueNAS 25.10 improves SMB share configuration by displaying only options relevant to each purpose-based preset.
  Existing shares that previously used the "No Preset" option are automatically migrated to the "Legacy Share" preset during upgrade.
  New shares cannot access legacy configuration options.
  The SMB recycle bin feature is no longer available for new shares due to security and usability concerns.
  For file recovery and versioning, use ZFS snapshots, which provide more reliable and predictable data protection.
  See [Legacy Share Settings](https://www.truenas.com/docs/scale/25.10/scaleuireference/shares/smbsharesscreens/#legacy-share-settings) for more information.
  
* Pool usage, disk temperature, and related metrics can have a short delay of no more than 10 minutes before displaying. This is typically seen when TrueNAS boots or in situations where the reporting system restarts.

  </div>

  <div data-tab-id="containers-virtual-machines" data-tab-label="Containers and Virtual Machines">

### Containers and Virtual Machines

{{< enterprise >}}
Virtual Machines are now "Enterprise ready" with support for TrueNAS Enterprise High Availability (HA) systems and failover ([NAS-136509](https://ixsystems.atlassian.net/browse/NAS-136509)).
{{< /enterprise >}}

* The **Enable Secure Boot** option is added to virtual machine configuration screens ([NAS-136466](https://ixsystems.atlassian.net/browse/NAS-136466)).
* Virtual machines created in 25.04 (pre-25.04.2) and displayed on the **Containers** screen do not automatically start on system boot to prevent conflicts with VMs on the **Virtual Machines** screen that might use the same zvols ([NAS-136946](https://ixsystems.atlassian.net/browse/NAS-136946)).
* Virtual machines created in 25.04.0 or 25.04.1 using the **Instances** (now **Containers**) screen can be migrated to conventional VMs in 25.10 and later using the process described in the **Migrating Instance VMs** section of the [Adding and Managing VM Devices]({{< ref "addmanagevmdevicesscale#migrating-instances-vms" >}}) tutorial.
* Resolves ZFS ARC memory management conflicts that were causing out-of-memory crashes in Virtual Machines due to memory fragmentation issues ([NAS-135499](https://ixsystems.atlassian.net/browse/NAS-135499)).

  </div>

  <div data-tab-id="truenas-apps" data-tab-label="TrueNAS Apps">

### TrueNAS Apps

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

* TrueNAS 25.10 adds an option to automatically migrate existing applications when changing apps pool locations ([NAS-135720](https://ixsystems.atlassian.net/browse/NAS-135720)).
  See [Migrating Existing Applications](https://apps.truenas.com/getting-started/initial-setup/#migrating-existing-applications) for details.
* 25.10 supports configuring external container registry mirrors as alternative sources for Docker images ([NAS-136553](https://ixsystems.atlassian.net/browse/NAS-136553)).
  See [PD-2125]() for more information.
* Includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
* Fixes the NVIDIA GPU related error "RenderError: Expected [uuid] to be set for GPU in slot" ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).
* Fixes a bug to reenable available update notifications for custom apps ([NAS-135124](https://ixsystems.atlassian.net/browse/NAS-135124)).

{{< include file="/static/includes/apps-market-ad-banner.md" >}}

  </div>

  <div data-tab-id="nvidia-GPU-support" data-tab-label="NVIDIA GPU Support">
  
### NVIDIA GPU Support

TrueNAS 25.10 introduces support for [NVIDIA open GPU kernel module drivers](https://us.download.nvidia.com/XFree86/Linux-x86_64/570.172.08/README/kernel_open.html), enabling compatibility with the latest NVIDIA graphics cards including the newest Blackwell architecture.
This driver update ensures support for modern GPU acceleration workloads in TrueNAS Apps and Containers.

The open GPU kernel drivers are [compatible with Turing architecture and later GPUs](https://github.com/NVIDIA/open-gpu-kernel-modules/tree/570?tab=readme-ov-file#compatible-gpus), which includes GTX 16-series cards and all RTX series cards.
The new NVIDIA Blackwell (RTX 50-series) chips require the nvidia-open driver to function, as this driver leverages the built-in NVIDIA GSP (GPU System Processor).

Users with compatible hardware can enable TrueNAS to install NVIDIA drivers.
See the TrueNAS Apps Market for [installation instructions](https://apps.truenas.com/getting-started/initial-setup/#installing-nvidia-drivers).

GPUs based on earlier architectures including Pascal (GTX 10-series, Quadro P-series), Maxwell (GTX 700 and 900-series), and Volta (GTX Titan V) are not supported by the NVIDIA open drivers.
This is because these older GPUs lack the required GSP component.

Users with incompatible legacy cards can still utilize them by deploying a TrueNAS Virtual Machine and isolating the GPU to it.
This approach involves creating a VM, isolating the legacy GPU to that VM, installing the proprietary NVIDIA driver within the VM environment, and running GPU workloads from within the virtual machine.
However, this workaround requires a secondary GPU (such as integrated Intel graphics or IPMI console) to handle system display duties, as isolating the only GPU in the system would leave TrueNAS without console access.

  </div>

  <div data-tab-id="upgrade-paths" data-tab-label="Upgrade Paths">

### Upgrade Paths (Anticipated)

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/25.10UpgradeMethods.md" >}}

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

{{< component-versions "25.10" >}}

\*TrueNAS 25.10 and later includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
  </div>

  <div data-tab-id="zfs-feature-flags" data-tab-label="ZFS Feature Flags">

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.3.0) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| n/a | [](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#FLAG) |  |
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
