---
title: "25.10 (Goldeye) Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 25.10 releases."
aliases:
 - /scale/scalereleasenotes/
 - /scalenext-releasenotes/
 - /scale/scalenextversion/
 - /scale/25.10/gettingstarted/scalereleasenotes/
 - /releasenotes/
weight: 10
related: false
use_jump_to_buttons: true
jump_to_buttons:
  - text: "Full TrueNAS 25.10 Changelog"
    anchor: "full-changelog"
    icon: "clipboard-text"
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
  <div data-tab-id="25.10-BETA.1" data-tab-label="25.10-BETA.1">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

August 20, 2025

The TrueNAS team is pleased to release TrueNAS 25.10-BETA.1!
This first public release version of TrueNAS 25.10 (Goldeye) has software component updates and new features that are in the polishing phase.

Special thanks to (Github users): [Aurélien Sallé](https://github.com/MDVAurelien), [ReiKirishima](https://github.com/ReiKirishima), [AquariusStar](https://github.com/AquariusStar), [RedstoneSpeaker](https://github.com/RedstoneSpeaker), [Lee Jihaeng](https://github.com/SejoWuigui), [Marcos Ribeiro](https://github.com/marcosasribeiro), [Christos Longros](https://github.com/chrislongros), [dany22m](https://github.com/dany22m), [Aindriú Mac Giolla Eoin](https://github.com/aindriu80), [William Li](https://github.com/WilliamLi0623), [Franco Castillo](https://github.com/castillofrancodamian), [MAURICIO S BASTOS](https://github.com/msbastos), [TeCHiScy](https://github.com/TeCHiScy), [Chen Zhaochang](https://github.com/chenwickc), [Helak](https://github.com/helakostain), [dedebenui](https://github.com/dedebenui), [Henry Essinghigh](https://github.com/essinghigh), [Sophist](https://github.com/Sophist-UK), [Piotr Jasiek](https://github.com/pht31337), [Martin Dørum](https://github.com/mortie), [Emmanuel Ferdman](https://github.com/emmanuel-ferdman) and [zrk02](https://github.com/zrk02) for contributing to TrueNAS 25.10-BETA.1.
Visit [our guide](https://www.truenas.com/docs/contributing/) for information on how you too can contribute.

### 25.10-BETA.1 Notable changes

* A redesigned **Updates** screen allows users to select an update profile reflecting their risk-tolerance level ([NAS-133600](https://ixsystems.atlassian.net/browse/NAS-133600)). TrueNAS only notifies users of updates recommended for users at the selected profile level.
* Introduces a refreshed **Users** screen to allow for improved at-a-glance access to account information and simplify user creation ([NAS-134198](https://ixsystems.atlassian.net/browse/NAS-134198)).
* Includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
* Adds support for for directory services authentication via FTP ([NAS-135200](https://ixsystems.atlassian.net/browse/NAS-135200)).
* Various UI improvements and optimizations simplify core user experiences ([NAS-135159](https://ixsystems.atlassian.net/browse/NAS-135159)).
* Fixes the NVIDIA GPU related error "RenderError: Expected [uuid] to be set for GPU in slot" ([NAS-134152](https://ixsystems.atlassian.net/browse/NAS-134152)).
* Fixes an issue affecting drive temperature reporting on the dashboard ([NAS-135572](https://ixsystems.atlassian.net/browse/NAS-135572)).
* Virtual machines created in 25.04 (pre-25.04.2) and displayed on the **Containers** screen do not automatically start on system boot to prevent conflicts with VMs on the **Virtual Machines** screen that might use the same zvol(s) ([NAS-136946](https://ixsystems.atlassian.net/browse/NAS-136946)).
* The **Enable Secure Boot** option is added to virtual machine configuration screens ([NAS-136466](https://ixsystems.atlassian.net/browse/NAS-136466)).
* TrueNAS can now automatically migrate existing applications when selecting a new applications pool ([NAS-132188](https://ixsystems.atlassian.net/browse/NAS-132188)).
* The TrueNAS Apps service now supports configuring external container registry mirrors as alternative sources for Docker images ([NAS-136553](https://ixsystems.atlassian.net/browse/NAS-136553)).
* Fixes a bug to reenable available update notifications for custom apps ([NAS-135124](https://ixsystems.atlassian.net/browse/NAS-135124)).
* Fixes contrast issues on some UI theme options ([NAS-135519](https://ixsystems.atlassian.net/browse/NAS-135519)).
* Simplifies and improves robustness of gateway and name server settings when changing from DHCP to static aliases ([NAS-136360](https://ixsystems.atlassian.net/browse/NAS-136360) and [NAS-136360](https://ixsystems.atlassian.net/browse/NAS-136360)).


<a href="#full-changelog" target="_blank">Click here</a> to see the full 25.10 changelog or visit the <a href="https://ixsystems.atlassian.net/issues/?filter=13196" target="_blank">TrueNAS 25.10-BETA.1 (Goldeye) Changelog</a> in Jira.

### 25.10-BETA.1 Known Issues

*

<a href="https://ixsystems.atlassian.net/issues/?filter=13197" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.10-BETA.1 that are being resolved in a future TrueNAS release.
  </div>

  <div data-tab-id="full-changelog" data-tab-label="Full TrueNAS 25.10 Changelog">
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
<script src="/js/csv-changelog-table.js"></script>
<script src="/js/csv-changelog-init.js"></script>
<script src="/js/csv-changelog-tab-init.js"></script>
<script>
// Initialize changelog table for version
initializeChangelogTableForTabs('25.04');
</script>

## Upgrading TrueNAS {#upgrading}

<!-- Hugo-processed content for upgrade notes tab box -->
<div style="display: none;" id="tab-content-source">
  <div data-tab-id="upgrade-prep" data-tab-label="Preparing to Upgrade">

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

*  

  </div>

  <div data-tab-id="containers-virtual-machines" data-tab-label="Containers and Virtual Machines">

### Containers and Virtual Machines

* Virtual machines created in 25.04 (pre-25.04.2) and displayed on the **Containers** screen do not automatically start on system boot to prevent conflicts with VMs on the **Virtual Machines** screen that might use the same zvol(s) ([NAS-136946](https://ixsystems.atlassian.net/browse/NAS-136946)).
* The **Enable Secure Boot** option is added to virtual machine configuration screens ([NAS-136466](https://ixsystems.atlassian.net/browse/NAS-136466)).

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
See the [Migration articles]({{< ref "/SCALE/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the migration process.

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
