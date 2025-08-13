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
  <div data-tab-id="25.10.0-BETA.1" data-tab-label="25.10.0-BETA.1">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

August 20, 2025

The TrueNAS team is pleased to release TrueNAS 25.10-BETA.1!
This first public release version of TrueNAS 25.10 (Goldeye) has software component updates and new features that are in the polishing phase.

### 25.10-BETA.1 Notable changes

* 
* TrueNAS 25.10 includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.

<a href="https://ixsystems.atlassian.net/issues/?filter=11744" target="_blank">Click here for the full changelog</a> of completed tickets that are included in the 25.10-BETA.1 release.
{{< include file="/static/includes/JiraFilterInstructions.md" >}}

### 25.10-BETA.1 Known Issues

*

<a href="https://ixsystems.atlassian.net/issues/?filter=11745" target="_blank">Click here to see the latest information</a> about public issues discovered in 25.10-BETA.1 that are being resolved in a future TrueNAS release.
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
    initializeHugoTabs('release-tab-content-source', 'release-tabs-container', '25.10.0-BETA.1');
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

  </div>

  <div data-tab-id="truenas-apps" data-tab-label="TrueNAS Apps">

### TrueNAS Apps

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

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

\* TrueNAS 25.10 and later includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
  </div>

  <div data-tab-id="zfs-feature-flags" data-tab-label="ZFS Feature Flags">

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.2.99) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
|  | [](https://openzfs.github.io/openzfs-docs/man/master/7/zpool-features.7.html#FLAG) |  |
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

