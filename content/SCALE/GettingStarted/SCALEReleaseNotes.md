---
title: "25.10 (Goldeye) Development Notes"
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

{{< hint type="tip" title="25.10 Early Release Documentation" >}}
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
<script>
// Initialize linkable tabs with Hugo-processed content
document.addEventListener('DOMContentLoaded', function() {
    // Extract all tab content from Hugo-processed divs
    const tabSource = document.getElementById('release-tab-content-source');
    const tabDivs = tabSource.querySelectorAll('[data-tab-id]');
    
    const tabs = Array.from(tabDivs).map(div => ({
        id: div.getAttribute('data-tab-id'),
        label: div.getAttribute('data-tab-label'),
        content: div.innerHTML
    }));
    
    createLinkableTabs('release-tabs-container', tabs, {
        defaultTab: '25.04.1-changes-and-issues',
        urlHashEnabled: true,
        enableMarkdown: false, // Hugo already processed the content
        collapsible: true
    });
});
</script>

<!-- CSV Changelog Table Script - Load outside tab content to prevent redeclaration -->
<script src="/js/csv-changelog-table.js"></script>
<script>
// Initialize CSV changelog table when tab becomes active
window.initializeChangelogTable = function() {
    console.log('🔄 Attempting to initialize CSV changelog table');
    
    if (typeof createCSVChangelogTable === 'function') {
        // Find the container inside the active tab
        const activeTabPane = document.querySelector('.linkable-tab-pane.active');
        if (activeTabPane) {
            const container = activeTabPane.querySelector('#csv-changelog-container');
            if (container) {
                console.log('✅ Container found in active tab, initializing table');
                // Clear any existing content first
                container.innerHTML = '';
                
                // Fix the duplicate ID issue by temporarily using a unique ID
                console.log('🔧 Fixing duplicate ID issue...');
                const originalId = container.id;
                const uniqueId = 'csv-changelog-container-active-' + Date.now();
                
                // Change to unique ID temporarily
                container.id = uniqueId;
                console.log('   Changed container ID from', originalId, 'to', uniqueId);
                
                try {
                    console.log('🔄 Calling createCSVChangelogTable with unique ID...');
                    const result = createCSVChangelogTable('/data', uniqueId, {
                        useVersioning: true,
                        versions: [
                            { value: 'all', label: '25.04 (All)', filename: 'scale-25.04-changelog.csv' },
                            { value: '25.04.1', label: '25.04.1', filename: 'scale-25.04.1-changelog.csv' },
                            { value: '25.04.0', label: '25.04.0', filename: 'scale-25.04.0-changelog.csv' },
                            { value: '25.04-RC.1', label: '25.04-RC.1', filename: 'scale-25.04-RC.1-changelog.csv' },
                            { value: '25.04-BETA.1', label: '25.04-BETA.1', filename: 'scale-25.04-BETA.1-changelog.csv' }
                        ],
                        defaultVersion: 'all'
                    });
                    console.log('✅ createCSVChangelogTable returned:', result);
                    
                    // Restore original ID after a delay to allow CSV function to complete
                    setTimeout(() => {
                        container.id = originalId;
                        console.log('🔄 Restored container ID to', originalId);
                    }, 2000);
                    
                } catch (error) {
                    console.error('❌ Error calling createCSVChangelogTable:', error);
                    // Restore ID even if there's an error
                    container.id = originalId;
                }
                
                // Debug the container after table creation - check multiple times
                setTimeout(() => {
                    console.log('📊 Container 1 second after table creation:');
                    console.log('   Container HTML length:', container.innerHTML.length);
                    console.log('   Container children:', container.children.length);
                    if (container.innerHTML.length > 0) {
                        console.log('   First 200 chars:', container.innerHTML.substring(0, 200));
                    }
                }, 1000);
                
                setTimeout(() => {
                    console.log('📊 Container 3 seconds after table creation:');
                    console.log('   Container HTML length:', container.innerHTML.length);
                    console.log('   Container children:', container.children.length);
                    if (container.innerHTML.length > 0) {
                        console.log('   Table found!');
                    } else {
                        console.log('   Still empty - checking for errors...');
                        // Try to manually create some content to test
                        container.innerHTML = '<p style="color: red; font-size: 18px; padding: 20px;">TEST: If you can see this, the container works but CSV table creation failed.</p>';
                    }
                }, 3000);
                
                return; // Success, exit
            } else {
                console.log('❌ Container not found in active tab');
            }
        } else {
            console.log('❌ No active tab found');
        }
        
        // If we get here, retry
        console.log('⏳ Retrying in 200ms...');
        setTimeout(window.initializeChangelogTable, 200);
    } else {
        console.log('❌ createCSVChangelogTable function not available, retrying...');
        setTimeout(window.initializeChangelogTable, 200);
    }
};

// Don't initialize immediately - let tab system handle it
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
<script>
// Initialize linkable tabs with Hugo-processed content
document.addEventListener('DOMContentLoaded', function() {
    // Extract all tab content from Hugo-processed divs
    const tabSource = document.getElementById('tab-content-source');
    const tabDivs = tabSource.querySelectorAll('[data-tab-id]');
    
    const tabs = Array.from(tabDivs).map(div => ({
        id: div.getAttribute('data-tab-id'),
        label: div.getAttribute('data-tab-label'),
        content: div.innerHTML
    }));
    
    createLinkableTabs('upgrade-notes-container', tabs, {
        defaultTab: '25.04-upgrade-notes',
        urlHashEnabled: true,
        enableMarkdown: true,
        collapsible: true
    });
});
</script>

## Component Versions and ZFS Feature Flags {#component-versions-feature-flags}

<!-- Hugo-processed content for component versions tab box -->
<div style="display: none;" id="component-tab-content-source">
  <div data-tab-id="software-component-versions" data-tab-label="Software Component Versions">

### Software Component Versions {#component-versions-tab}

Click the component version number to see release notes for that component.

{{< component-versions "25.10" >}}
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
<script>
// Initialize linkable tabs with Hugo-processed content
document.addEventListener('DOMContentLoaded', function() {
    // Extract all tab content from Hugo-processed divs
    const tabSource = document.getElementById('component-tab-content-source');
    const tabDivs = tabSource.querySelectorAll('[data-tab-id]');
    
    const tabs = Array.from(tabDivs).map(div => ({
        id: div.getAttribute('data-tab-id'),
        label: div.getAttribute('data-tab-label'),
        content: div.innerHTML
    }));
    
    createLinkableTabs('component-tabs-container', tabs, {
        defaultTab: 'software-component-versions',
        urlHashEnabled: true,
        enableMarkdown: false, // Hugo already processed the content
        collapsible: true
    });
    
    // Jump-to button hash refresh fix for collapsible tabs
    document.addEventListener('click', function(e) {
        // Check for jump-to buttons (which are <button> elements)
        if (e.target.matches('button.jump-to-button') || e.target.closest('button.jump-to-button')) {
            const button = e.target.matches('button.jump-to-button') ? e.target : e.target.closest('button.jump-to-button');
            
            // Get the target hash from the button's data or map from button text
            let targetHash = button.getAttribute('data-target');
            
            if (!targetHash) {
                const buttonText = button.textContent.trim();
                
                // Map button text to hash targets
                if (buttonText.includes('Full TrueNAS') && buttonText.includes('Changelog')) {
                    targetHash = '#full-changelog';
                } else if (buttonText.includes('Upgrade Paths')) {
                    targetHash = '#upgrade-paths';
                } else if (buttonText.includes('Notable Changes')) {
                    targetHash = '#notable-changes-and-known-issues';
                } else if (buttonText.includes('Component Versions')) {
                    targetHash = '#software-component-versions';
                }
            }
            
            if (targetHash && window.location.hash === targetHash) {
                // Same hash detected - force refresh to trigger tab expansion
                e.preventDefault();
                e.stopPropagation();
                
                window.location.hash = '';
                setTimeout(() => {
                    window.location.hash = targetHash;
                }, 50);
                
                return false;
            }
        }
        
        // Also handle regular hash links
        if (e.target.matches('a[href^="#"]')) {
            const href = e.target.getAttribute('href');
            
            if (window.location.hash === href) {
                e.preventDefault();
                e.stopPropagation();
                
                window.location.hash = '';
                setTimeout(() => {
                    window.location.hash = href;
                }, 50);
                
                return false;
            }
        }
    }, true)
});
</script>

