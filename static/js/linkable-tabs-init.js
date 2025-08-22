/**
 * Linkable Tabs Initialization Script
 * Initializes linkable tabs from Hugo-processed content
 * @param {string} sourceId - ID of the source container with tab content
 * @param {string} containerId - ID of the target container for tabs  
 * @param {string} defaultTab - Optional default tab ID
 */
function initializeHugoTabs(sourceId, containerId, defaultTab = null) {
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
        collapsible: true
    };

    if (defaultTab) {
        options.defaultTab = defaultTab;
    }

    createLinkableTabs(containerId, tabs, options);
}