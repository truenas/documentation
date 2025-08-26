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
        const configResponse = await fetch('/data/changelog-versions.json');
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