---
title: "TrueNAS Software Status"
description: "Find the right TrueNAS version for your use case with current deployment recommendations, release schedules, and upgrade paths."
weight: 5
related: false
use_jump_to_buttons: true
default_jump_button: "which-truenas-version-is-recommended"
aliases:
 - /softwarestatus/
 - /truenasupgrades/
 - /softwarereleases/
 - /releasenotes/releaseschedule/
jump_to_buttons:
  - text: "Recommendations"
    anchor: "which-truenas-version-is-recommended"
    icon: "star"
  - text: "User Types"
    anchor: "user-types"
    icon: "account-group"
  - text: "Release Schedule"
    anchor: "release-schedule"
    icon: "calendar"
  - text: "Upgrade Paths"
    anchor: "upgrade-paths"
    icon: "conversion-path"
  - text: "Downloads"
    anchor: "downloads"
    icon: "download"
  - text: "Documentation Lifecycle"
    anchor: "documentation-lifecycle"
    icon: "file-document"
---

{{% blocks/cover color="light" image_anchor="top" height="micro" %}}
<div class="row align-items-center">
  <div class="col-lg-7 text-start pe-lg-4">
    <div class="d-flex align-items-center mb-4">
      <span class="material-icons-outlined me-3" style="color: #0095D5; font-size: 3rem;">assessment</span>
      <h1 class="cover-heading fw-bold mb-0">Software <span class="heading-gradient">Status</span></h1>
    </div>
    <p class="lead mt-3">Choose the right TrueNAS version by balancing your need for new features against operational risk tolerance. These recommendations are regularly updated after extensive testing across diverse deployments.</p>
  </div>
  <div class="col-lg-5 d-none d-lg-block text-end ps-lg-4">
    <img src="/images/truenas-logo-mark.png" alt="Software Status" class="img-fluid" style="max-width: 300px;">
  </div>
</div>
{{% /blocks/cover %}}

{{< blocks/section color="light" type="container" >}}

<div id="which-truenas-version-is-recommended"></div>

{{< software-status-table >}}

<div style="margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <div class="enterprise-support-notice" style="display: flex; align-items: center; gap: 2rem; padding: 1rem; border: 1px solid var(--accent-color); border-radius: 8px; background-color: var(--accent-color-lite);">
    <div style="flex-shrink: 0;">
      <img src="/images/open-enterprise-storage--logo-full-color-rgb-large.png" alt="TrueNAS Enterprise" style="max-width: 150px; height: auto;">
    </div>
    <div style="flex-grow: 1; font-size: 0.95rem;">
      <p style="margin-top: 0;">* We recommend the default Mission Critical update profile for all TrueNAS Enterprise systems.</p>
      <p style="margin-bottom: 0;">Customers with a TrueNAS Enterprise support contract should <a href="https://www.truenas.com/support/">contact TrueNAS Support</a> before system updates. Our Support team can provide advice based on your unique requirements and help resolve any unexpected issues.</p>
    </div>
  </div>
</div>

<!-- Hugo-processed content for software status tab box -->
<div style="display: none;" id="release-tab-content-source">
  <div data-tab-id="user-types" data-tab-label="User Types">

{{< user-expectations-table >}}

  </div>
  <div data-tab-id="release-schedule" data-tab-label="Release Schedule">

{{< releaselist name=tn-releases defaultTab=3 >}}

{{< expand "Individual releases within a major version are labeled as Early, Stable, or Maintenance (expand for details)." "v" >}}

{{< truetable >}}
| Type | Status |
|-----------|-------------|
| Early | Public release of an unstable version that is either not feature complete or has more testing cycles planned. Follows an ALPHA, BETA, and RC naming convention. |
| Stable | Public release of a feature complete and internal and community tested major version. Follows a .0 naming convention. |
| Maintenance | Public release with software bug fixes and additional internal and community testing. Follows a .# naming convention, with small-scope maintenance releases ("hotpatches") following a .#.# convention. |
{{< /truetable >}}

{{< /expand >}}

  </div>
  <div data-tab-id="upgrade-paths" data-tab-label="Upgrade Paths">

{{< include file="/static/includes/upgrade-paths.md" >}}

  </div>
  <div data-tab-id="downloads" data-tab-label="Downloads">

{{< tabbox name=truenas-downloads defaultTab=4 >}}

Each listed release links to download files for that release.

Bug tickets are typically accepted for the latest release of the current stable version.
Nightly builds also accept feedback and bug tickets.

{{< expand "Nightly Builds" "v" >}}
{{< include file="archive/NightlyTestWarning.md" >}}

Nightly builds are automatically published when automated testing passes.
**.iso** files are available for fresh installation on disposable hardware or a virtual machine.

**.update** files are also available for manually updating an existing experimental system to a nightly build.

Your testing and feedback are always welcome!
TrueNAS nightlies have an [option in the top panel](https://www.truenas.com/docs/scale/scaleuireference/toptoolbar/#how-would-you-rate-this-page?) to submit feedback directly to the development team.
Let us know what is working well and what can be improved!

{{< /expand >}}

{{< expand "Legacy Releases" "v" >}}
Legacy TrueNAS versions are provided for historical context and upgrade pathways.
They are provided "as-is" and typically do not receive further maintenance releases.
Individual releases are within each major version.

Legacy releases can only be used by downloading the .iso file and freshly installing it to the hardware.
{{< /expand >}}

<small>* TrueNAS CORE is no longer under active development. Enterprise customers should contact TrueNAS Support to discuss migration options.</small>

  </div>
  <div data-tab-id="documentation-lifecycle" data-tab-label="Documentation Lifecycle">

The TrueNAS team maintains and regularly updates documentation for current and in-development versions of TrueNAS software. For documentation purposes, current and future releases are those [recommended](#which-truenas-version-is-recommended) for one or more user types.

Documentation is actively maintained for all recommended TrueNAS versions, with updates published alongside software releases. Each TrueNAS product has dedicated documentation sections, and version selectors help users navigate between different software releases when breaking changes or new features are introduced.

When TrueNAS versions are no longer recommended for any user type, their documentation is moved to the [Documentation Archive](https://www.truenas.com/docs/archive/). Archived documentation becomes read-only and receives no further updates, but remains available as a historical reference for existing installations that haven't yet migrated to supported versions.

Users can find additional help through the [TrueNAS Community Forums](https://www.truenas.com/community/) for discussions and community support, or through [GitHub Issues](https://github.com/truenas) for reporting bugs and requesting features. Enterprise customers with support contracts receive priority assistance with documentation questions and access to custom deployment guides.

  </div>
</div>

<!-- Linkable Tab Box -->
<div id="component-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script src="/js/jump-to-button-fix.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('release-tab-content-source', 'component-tabs-container', 'user-types');
});
</script>

{{< /blocks/section >}}
