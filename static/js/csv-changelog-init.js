/**
 * CSV Changelog Initialization Script
 * Loads version configuration from JSON and initializes the changelog table
 */

/**
 * Initialize CSV changelog table with version configuration from JSON
 * @param {string} baseUrl - Base URL for CSV files (e.g., '/data')
 * @param {string} containerId - ID of the container element
 * @param {string} majorVersion - Major version (e.g., '25.04', '25.10')
 * @param {Object} additionalOptions - Additional options to pass to createCSVChangelogTable
 */
async function initializeChangelogFromConfig(baseUrl, containerId, majorVersion, additionalOptions = {}) {
    try {
        // Fetch the version configuration
        // Dynamically determine the correct path based on the current location
        let configPath;
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Local Hugo server
            configPath = '/data/changelog-versions.json';
        } else {
            // Production/deployed site with subdirectories
            const pathSegments = window.location.pathname.split('/').filter(s => s); // Remove empty segments
            const docsIndex = pathSegments.indexOf('docs');
            if (docsIndex !== -1) {
                // Check if this is a versioned path (docs/scale/VERSION/) or master (docs/scale/)
                const scaleIndex = pathSegments.indexOf('scale');
                let docsRootDepth;
                
                if (scaleIndex !== -1 && scaleIndex < pathSegments.length - 1) {
                    // Check if the segment after 'scale' looks like a version (e.g., "25.10")
                    const potentialVersion = pathSegments[scaleIndex + 1];
                    if (potentialVersion && /^\d+\.\d+/.test(potentialVersion)) {
                        // Versioned branch: docs/scale/25.10/gettingstarted/scalereleasenotes/
                        // Need to go back to version root (docs/scale/25.10/)
                        const versionIndex = scaleIndex + 1; // Index of version segment (25.10)
                        docsRootDepth = pathSegments.length - versionIndex - 1; // Back to docs/scale/25.10/
                    } else {
                        // Master branch: docs/scale/gettingstarted/scalereleasenotes/ 
                        // Need to go back to scale root (docs/scale/)
                        docsRootDepth = pathSegments.length - scaleIndex - 1; // Back to docs/scale/
                    }
                } else {
                    // Fallback: calculate based on position after docs
                    docsRootDepth = pathSegments.length - docsIndex - 1;
                }
                
                const backPath = '../'.repeat(docsRootDepth);
                configPath = backPath + 'data/changelog-versions.json';
            } else {
                // Fallback
                configPath = 'data/changelog-versions.json';
            }
        }
        const configResponse = await fetch(configPath);
        if (!configResponse.ok) {
            throw new Error(`Failed to fetch changelog config: ${configResponse.status}`);
        }

        const config = await configResponse.json();
        
        // Get the configuration for the specified major version
        const versionConfig = config[majorVersion];
        if (!versionConfig) {
            throw new Error(`Version configuration not found for: ${majorVersion}`);
        }

        // Prepare options for the CSV table
        const options = {
            useVersioning: true,
            versions: versionConfig.versions,
            defaultVersion: versionConfig.defaultVersion,
            ...additionalOptions
        };

        // Initialize the CSV changelog table
        const result = createCSVChangelogTable(baseUrl, containerId, options);
        return result;

    } catch (error) {
        console.error('Error initializing changelog table:', error);
        
        // Show error message in the container
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div style="color: red; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 4px;">
                    <h3>Error Loading Changelog</h3>
                    <p>Failed to load changelog configuration for version ${majorVersion}.</p>
                    <p><small>${error.message}</small></p>
                </div>
            `;
        }
        
        throw error;
    }
}