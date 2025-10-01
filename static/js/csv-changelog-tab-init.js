/**
 * CSV Changelog Tab Initialization Script
 * Handles the complex logic for initializing CSV changelog tables within tabs
 */

/**
 * Initialize CSV changelog table when tab becomes active
 * @param {string} majorVersion - Major version (e.g., '25.04', '25.10')
 * @param {string} baseUrl - Base URL for CSV files (default: '/data')
 */
function initializeChangelogTableForTabs(majorVersion, baseUrl) {
    // Dynamically determine the correct baseUrl if not provided
    if (!baseUrl) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Local Hugo server - use absolute path
            baseUrl = '/data';
        } else {
            // Production/deployed site with subdirectories
            const pathSegments = window.location.pathname.split('/').filter(s => s); // Remove empty segments
            const docsIndex = pathSegments.indexOf('docs');

            if (docsIndex !== -1) {
                // Build absolute path to data directory
                const scaleIndex = pathSegments.indexOf('scale');

                if (scaleIndex !== -1 && scaleIndex < pathSegments.length - 1) {
                    // Check if the segment after 'scale' looks like a version (e.g., "25.10")
                    const potentialVersion = pathSegments[scaleIndex + 1];
                    if (potentialVersion && /^\d+\.\d+/.test(potentialVersion)) {
                        // Versioned branch: /docs/scale/25.10/data
                        baseUrl = '/' + pathSegments.slice(0, scaleIndex + 2).join('/') + '/data';
                    } else {
                        // Master branch: /docs/scale/data
                        baseUrl = '/' + pathSegments.slice(0, scaleIndex + 1).join('/') + '/data';
                    }
                } else {
                    // Fallback: /docs/data
                    baseUrl = '/' + pathSegments.slice(0, docsIndex + 1).join('/') + '/data';
                }
            } else {
                // No 'docs' in path - use root-relative
                baseUrl = '/data';
            }
        }

        console.log('Calculated baseUrl for CSV files:', baseUrl);
    }
    // Create the initialization function and attach it to window
    window.initializeChangelogTable = async function() {
        if (typeof initializeChangelogFromConfig === 'function') {
            // Find the container inside the active tab
            const activeTabPane = document.querySelector('.linkable-tab-pane.active');
            if (activeTabPane) {
                const container = activeTabPane.querySelector('#csv-changelog-container');
                if (container) {
                    // Clear any existing content first
                    container.innerHTML = '';

                    // Fix the duplicate ID issue by temporarily using a unique ID
                    const originalId = container.id;
                    const uniqueId = 'csv-changelog-container-active-' + Date.now();

                    // Change to unique ID temporarily
                    container.id = uniqueId;

                    try {
                        const result = await initializeChangelogFromConfig(baseUrl, uniqueId, majorVersion);

                        // Restore original ID after a delay to allow CSV function to complete
                        setTimeout(() => {
                            container.id = originalId;
                        }, 2000);

                    } catch (error) {
                        console.error('Error calling initializeChangelogFromConfig:', error);
                        // Restore ID even if there's an error
                        container.id = originalId;
                        
                        // Show error in container
                        container.innerHTML = `
                            <div style="color: red; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 4px;">
                                <h3>Error Loading Changelog</h3>
                                <p>Failed to initialize changelog table for ${majorVersion}.</p>
                                <p><small>${error.message}</small></p>
                            </div>
                        `;
                    }

                    return; // Success, exit
                }
            }

            // If we get here, retry
            setTimeout(window.initializeChangelogTable, 200);
        } else {
            setTimeout(window.initializeChangelogTable, 200);
        }
    };
}