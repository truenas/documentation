/**
 * Linkable Tabs Initialization Script
 * Initializes linkable tabs from Hugo-processed content
 * @param {string} sourceId - ID of the source container with tab content
 * @param {string} containerId - ID of the target container for tabs  
 * @param {string} defaultTab - Optional default tab ID
 * @param {boolean} autoOpen - Whether to auto-open default tab (defaults to false)
 */
function initializeHugoTabs(sourceId, containerId, defaultTab = null, autoOpen = false) {
    // Extract all tab content from Hugo-processed divs
    const tabSource = document.getElementById(sourceId);
    const tabDivs = tabSource.querySelectorAll('[data-tab-id]');

    const tabs = Array.from(tabDivs).map(div => ({
        id: div.getAttribute('data-tab-id'),
        label: div.getAttribute('data-tab-label'),
        content: div.innerHTML
    }));

    const options = {
        urlHashEnabled: true,
        enableMarkdown: false, // Hugo already processed the content
        collapsible: true,
        autoOpen: autoOpen // Pass the autoOpen parameter
    };

    if (defaultTab) {
        options.defaultTab = defaultTab;
    }

    createLinkableTabs(containerId, tabs, options);
}