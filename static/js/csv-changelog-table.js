/**
 * CSV Changelog Table JavaScript - TrueNAS themed table for JIRA CSV exports
 * Supports dark/light mode and matches security site header colors
 */

let changelogData = [];
let currentConfig = {};

/**
 * Creates and initializes the CSV changelog table with version support
 * @param {string} baseUrlOrSingleUrl - Base URL path for versioned CSVs or single CSV URL
 * @param {string} containerId - ID of the container element
 * @param {Object} options - Configuration options
 */
async function createCSVChangelogTable(baseUrlOrSingleUrl, containerId, options = {}) {
    // Load version configuration from JSON file
    let versionConfig = null;
    if (options.useVersioning && options.versionKey) {
        try {
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
                            // Versioned branch: docs/scale/25.10/gettingstarted/versionnotes/
                            // Need to go back to version root (docs/scale/25.10/)
                            const versionIndex = scaleIndex + 1; // Index of version segment (25.10)
                            docsRootDepth = pathSegments.length - versionIndex - 1; // Back to docs/scale/25.10/
                        } else {
                            // Master branch: docs/scale/gettingstarted/versionnotes/ 
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
            const response = await fetch(configPath);
            const allVersions = await response.json();
            versionConfig = allVersions[options.versionKey];
        } catch (error) {
            console.error('Error loading version configuration:', error);
        }
    }
    
    const config = {
        csvDelimiter: options.delimiter || ',',
        useVersioning: options.useVersioning || false,
        baseUrl: options.useVersioning ? baseUrlOrSingleUrl : null,
        singleCsvUrl: options.useVersioning ? null : baseUrlOrSingleUrl,
        versions: options.versions || (versionConfig ? versionConfig.versions : [
            { value: 'all', label: '25.04 (All)', filename: 'scale-25.04-changelog.csv' }
        ]),
        defaultVersion: options.defaultVersion || (versionConfig ? versionConfig.defaultVersion : 'all'),
        columns: options.columns || {
            key: 'Key',
            summary: 'Summary',
            priority: 'Priority',
            status: 'Status',
            fixVersion: 'Fix Versions',
            components: 'Components',
            description: 'Description',
            assignee: 'Assignee',
            created: 'Created',
            updated: 'Updated'
        }
    };
    
    // Store config globally for version changes
    currentConfig = config;

    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container element not found:', containerId);
        return;
    }

    // Add CSS for dark/light mode compatibility
    if (!document.getElementById('csv-changelog-table-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'csv-changelog-table-styles';
        styleSheet.textContent = `
            .csv-changelog-wrapper {
                --truenas-primary: #0095d5;
                --truenas-primary-hover: #0084c0;
                --truenas-secondary: #71bf44;
                --table-header-bg: linear-gradient(to bottom, #0095d5, #0084c0);
                --table-header-hover: linear-gradient(to bottom, #00a6eb, #0095d5);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            }
            
            .csv-changelog-controls {
                margin-bottom: 20px; 
                display: flex; 
                gap: 15px; 
                align-items: center; 
                flex-wrap: wrap;
            }
            
            .csv-changelog-controls select,
            .csv-changelog-controls input[type="text"] {
                padding: 10px 15px;
                border: 1px solid var(--accent-color, #e0e3e9);
                border-radius: 6px;
                font-size: 14px;
                background-color: var(--body-background, white);
                color: var(--body-font-color, #333);
                transition: border-color 0.2s, box-shadow 0.2s;
            }
            
            .csv-changelog-controls select {
                cursor: pointer;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 10px center;
                padding-right: 35px;
                min-width: 180px;
            }
            
            .csv-changelog-controls input[type="text"] {
                min-width: 200px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: 10px center;
                padding-left: 35px;
            }
            
            .csv-changelog-controls select:focus,
            .csv-changelog-controls input[type="text"]:focus {
                outline: none;
                border-color: var(--truenas-primary);
                box-shadow: 0 0 0 3px rgba(0, 149, 213, 0.2);
            }
            
            .csv-changelog-controls label {
                display: flex; 
                align-items: center; 
                gap: 8px;
                color: var(--body-font-color, #333);
                font-size: 14px;
                user-select: none;
            }
            
            .csv-changelog-controls input[type="checkbox"] {
                appearance: none;
                width: 18px;
                height: 18px;
                border: 2px solid var(--truenas-primary);
                border-radius: 4px;
                outline: none;
                transition: all 0.2s;
                cursor: pointer;
                position: relative;
                background-color: var(--body-background, white);
            }
            
            .csv-changelog-controls input[type="checkbox"]:checked {
                background-color: var(--truenas-primary);
                border-color: var(--truenas-primary);
            }
            
            .csv-changelog-controls input[type="checkbox"]:checked::after {
                content: "";
                position: absolute;
                left: 5px;
                top: 2px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }
            
            .csv-changelog-button {
                padding: 10px 15px;
                background-color: var(--truenas-primary);
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s, transform 0.1s;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                white-space: nowrap;
            }
            
            .csv-changelog-button:hover {
                background-color: var(--truenas-primary-hover);
                transform: translateY(-1px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
            }
            
            .csv-changelog-table-container {
                overflow: auto;
                border: 1px solid var(--accent-color, #dee2e6);
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                height: calc(8 * 49px + 49px); /* 8 rows * row height + header height */
                max-height: calc(8 * 49px + 49px);
                position: relative;
                display: block;
            }
            
            .csv-changelog-table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                background-color: var(--body-background, white);
                table-layout: fixed;
                margin: 0;
            }
            
            .csv-changelog-table thead {
                position: sticky;
                top: 0;
                z-index: 100;
            }
            
            .csv-changelog-table thead tr {
                display: table-row;
            }
            
            .csv-changelog-table th {
                text-align: left;
                background: var(--table-header-bg);
                color: white;
                padding: 12px 15px;
                font-weight: 600;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border: none;
                position: sticky;
                top: 0;
                transition: background 0.2s;
                cursor: pointer;
                height: 49px;
                box-sizing: border-box;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                z-index: 101;
            }
            
            .csv-changelog-table th:nth-child(1) { width: 15%; } /* Key */
            .csv-changelog-table th:nth-child(2) { width: 35%; } /* Summary */
            .csv-changelog-table th:nth-child(3) { width: 12%; } /* Priority */
            .csv-changelog-table th:nth-child(4) { width: 15%; } /* Status */
            .csv-changelog-table th:nth-child(5) { width: 23%; } /* Fix Versions */
            
            .csv-changelog-table td:nth-child(1) { width: 15%; } /* Key */
            .csv-changelog-table td:nth-child(2) { width: 35%; } /* Summary */
            .csv-changelog-table td:nth-child(3) { width: 12%; } /* Priority */
            .csv-changelog-table td:nth-child(4) { width: 15%; } /* Status */
            .csv-changelog-table td:nth-child(5) { width: 23%; } /* Fix Versions */
            
            .csv-changelog-table th:hover {
                background: var(--table-header-hover);
            }
            
            .csv-changelog-table th.asc::after {
                content: "▲";
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
            }
            
            .csv-changelog-table th.desc::after {
                content: "▼";
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
            }
            
            .csv-changelog-table tr {
                background-color: var(--body-background, white);
                transition: all 0.2s ease;
                border: none;
                height: 49px;
            }
            
            .csv-changelog-table tbody tr:nth-child(even) {
                background-color: var(--accent-color-lite, #f9fafc);
            }
            
            .csv-changelog-table tbody tr:hover {
                background-color: var(--accent-color, #e6f4fa) !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 5px rgba(0, 149, 213, 0.15);
                cursor: pointer;
            }
            
            .csv-changelog-table tbody tr.selected-row {
                background-color: var(--accent-color, #e0f1f8) !important;
                border-left: 3px solid var(--truenas-primary);
            }
            
            .csv-changelog-table td {
                padding: 12px 15px;
                border: none;
                border-bottom: 1px solid var(--accent-color, #eef0f5);
                font-size: 14px;
                color: var(--body-font-color, #333);
                vertical-align: middle;
                word-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 49px;
                box-sizing: border-box;
                line-height: 1.3;
            }
            
            .csv-changelog-table tbody {
                transition: opacity 0.3s ease;
            }
            
            .csv-changelog-table tbody.loading {
                opacity: 0.5;
            }
            
            .csv-changelog-table a {
                color: var(--link-color, var(--truenas-primary));
                text-decoration: none;
                font-weight: 500;
                transition: color 0.2s;
            }
            
            .csv-changelog-table a:hover {
                color: var(--link-color-visited, #00769a);
                text-decoration: underline;
            }
            
            .csv-changelog-details {
                display: none;
                margin-top: 20px;
                padding: 20px;
                border: 1px solid var(--accent-color, #dee2e6);
                border-radius: 8px;
                background-color: var(--accent-color-lite, #f8f9fa);
                border-top: 4px solid var(--truenas-primary);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .csv-changelog-details h3 {
                margin-top: 0;
                color: var(--truenas-primary);
                font-size: 18px;
                font-weight: 600;
            }
            
            .csv-changelog-details h4 {
                color: var(--body-font-color, #333);
                font-size: 16px;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 1px solid var(--accent-color, #eef0f5);
            }
            
            .csv-changelog-close-button {
                float: right;
                padding: 8px 16px;
                background-color: var(--truenas-secondary);
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.2s;
                font-size: 12px;
                font-weight: 500;
            }
            
            .csv-changelog-close-button:hover {
                background-color: #5ea035;
                transform: none;
            }
            
            .csv-changelog-detail-content {
                display: flex;
                gap: 40px;
                margin-top: 20px;
                color: var(--body-font-color, #333);
            }
            
            .csv-changelog-detail-column {
                flex: 1;
            }
            
            .csv-changelog-detail-item {
                margin-bottom: 10px;
            }
            
            .csv-changelog-detail-item strong {
                color: var(--body-font-color, #333);
            }
            
            .priority-critical, .priority-highest {
                color: #e53935;
                font-weight: 600;
            }
            
            .priority-high {
                color: #fb8c00;
                font-weight: 600;
            }
            
            .priority-medium {
                color: #43a047;
                font-weight: 500;
            }
            
            .priority-low, .priority-lowest {
                color: #757575;
                font-weight: 400;
            }
            
            .status-done, .status-closed {
                color: #43a047;
                font-weight: 500;
            }
            
            .status-in-progress {
                color: #fb8c00;
                font-weight: 500;
            }
            
            .status-open, .status-to-do {
                color: #757575;
                font-weight: 400;
            }
            
            @media (max-width: 768px) {
                .csv-changelog-controls {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .csv-changelog-controls select,
                .csv-changelog-controls input[type="text"],
                .csv-changelog-button {
                    width: 100%;
                    margin-bottom: 10px;
                }
                
                .csv-changelog-detail-content {
                    flex-direction: column;
                    gap: 20px;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Create table structure with CSS classes
    const versionSelector = config.useVersioning ? `
                <select id="csv-version-select">
                    ${config.versions.map(v => 
                        `<option value="${v.value}" ${v.value === config.defaultVersion ? 'selected' : ''}>${v.label}</option>`
                    ).join('')}
                </select>` : '';
    
    const tableHTML = `
        <div class="csv-changelog-wrapper">
            <div class="csv-changelog-controls">
                ${versionSelector}
                <select id="csv-priority-select">
                    <option value="all">All Priorities</option>
                </select>
                <input type="text" id="csv-search" placeholder="Search tickets...">
                <button id="csv-reset" class="csv-changelog-button">Reset</button>
            </div>
            
            <div class="csv-changelog-table-container">
                <table id="csv-changelog-table" class="csv-changelog-table">
                    <thead>
                        <tr>
                            <th onclick="sortCSVTable(0)">Key</th>
                            <th onclick="sortCSVTable(1)">Summary</th>
                            <th onclick="sortCSVTable(2)">Priority</th>
                            <th onclick="sortCSVTable(3)">Status</th>
                            <th onclick="sortCSVTable(4)">Fix Versions</th>
                        </tr>
                    </thead>
                    <tbody id="csv-table-body">
                        <!-- Rows will be populated here -->
                    </tbody>
                </table>
            </div>
            
            <div id="csv-details" class="csv-changelog-details">
                <!-- Details will be populated here -->
            </div>
        </div>
    `;

    container.innerHTML = tableHTML;

    // Add event listeners
    if (config.useVersioning) {
        document.getElementById('csv-version-select').addEventListener('change', onVersionChange);
    }
    document.getElementById('csv-priority-select').addEventListener('change', filterCSVTable);
    document.getElementById('csv-search').addEventListener('input', filterCSVTable);
    document.getElementById('csv-reset').addEventListener('click', resetCSVTable);

    // Fetch initial CSV data
    if (config.useVersioning) {
        // Load default version
        const defaultVersionData = config.versions.find(v => v.value === config.defaultVersion);
        const initialUrl = `${config.baseUrl}/${defaultVersionData.filename}`;
        fetchCSVData(initialUrl, config.csvDelimiter, config.columns);
    } else {
        fetchCSVData(config.singleCsvUrl, config.csvDelimiter, config.columns);
    }
}

/**
 * Handles version selection change
 */
function onVersionChange() {
    const selectedVersion = document.getElementById('csv-version-select').value;
    const versionData = currentConfig.versions.find(v => v.value === selectedVersion);

    if (versionData) {
        // Construct CSV URL using the same logic as initial load
        let csvUrl;
        if (currentConfig.baseUrl.startsWith('/')) {
            // Absolute path - simple concatenation
            csvUrl = `${currentConfig.baseUrl}/${versionData.filename}`;
        } else {
            // Relative path - need to ensure proper concatenation
            csvUrl = currentConfig.baseUrl ? `${currentConfig.baseUrl}/${versionData.filename}` : versionData.filename;
        }

        // Add loading state with smooth transition
        const tableBody = document.getElementById('csv-table-body');
        const tbody = tableBody.parentNode;
        tbody.classList.add('loading');

        // Show loading with consistent table structure
        tableBody.innerHTML = `
            <tr>
                <td style="text-align: center; color: #6c757d; font-style: italic;">Loading...</td>
                <td style="text-align: center; color: #6c757d; font-style: italic;">Please wait</td>
                <td style="text-align: center; color: #6c757d; font-style: italic;">•••</td>
                <td style="text-align: center; color: #6c757d; font-style: italic;">•••</td>
                <td style="text-align: center; color: #6c757d; font-style: italic;">•••</td>
            </tr>
        `;

        // Reset filters
        document.getElementById('csv-priority-select').value = 'all';
        document.getElementById('csv-search').value = '';
        hideCSVDetails();

        // Fetch new data with delay for smooth transition
        setTimeout(() => {
            fetchCSVData(csvUrl, currentConfig.csvDelimiter, currentConfig.columns);
        }, 200);
    }
}

/**
 * Fetches CSV data from the specified URL
 */
function fetchCSVData(csvUrl, delimiter, columnMapping) {
    fetch(csvUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText} (URL: ${csvUrl})`);
            }
            return response.text();
        })
        .then(csvText => {
            changelogData = parseCSV(csvText, delimiter, columnMapping);
            generateFilterOptions(changelogData);
            populateCSVTable(changelogData);

            // Remove loading state
            const tbody = document.getElementById('csv-table-body').parentNode;
            tbody.classList.remove('loading');
        })
        .catch(error => {
            console.error('Error fetching CSV data from', csvUrl, ':', error);
            const tbody = document.getElementById('csv-table-body');
            tbody.parentNode.classList.remove('loading');
            tbody.innerHTML =
                `<tr><td colspan="5" style="padding: 20px; text-align: center; color: #dc3545;">
                    Error loading CSV data: ${error.message}<br>
                    <small>Attempted URL: ${csvUrl}<br>
                    Make sure the CSV file exists and is accessible.</small>
                </td></tr>`;
        });
}

/**
 * Parses CSV text into our standard format
 */
function parseCSV(csvText, delimiter, columnMapping) {
    const lines = csvText.split('\n');
    if (lines.length < 2) return [];
    
    const headers = lines[0].split(delimiter).map(h => h.trim().replace(/"/g, ''));
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const values = parseCSVLine(line, delimiter);
        if (values.length < headers.length) continue;
        
        const row = {};
        const fixVersions = [];
        const affectsVersions = [];
        
        headers.forEach((header, index) => {
            const value = values[index] ? values[index].replace(/"/g, '').trim() : '';
            
            // Handle duplicate Fix versions columns specially
            if (header.toLowerCase().includes('fix version') && value) {
                fixVersions.push(value);
            } 
            // Handle duplicate Affects versions columns specially
            else if (header.toLowerCase().includes('affects version') && value) {
                affectsVersions.push(value);
            } else {
                row[header] = value;
            }
        });
        
        const fixVersionString = fixVersions.length > 0 ? fixVersions.join(', ') : 'TBD';
        const affectsVersionString = affectsVersions.length > 0 ? affectsVersions.join(', ') : 'N/A';

        // Convert to our standard format
        const standardRow = {
            key: row[columnMapping.key] || row['Key'] || row['Issue key'] || '',
            summary: row[columnMapping.summary] || row['Summary'] || '',
            priority: row[columnMapping.priority] || row['Priority'] || 'Medium',
            status: row[columnMapping.status] || row['Status'] || 'Open',
            fixVersion: fixVersionString,
            affectsVersion: affectsVersionString,
            description: row[columnMapping.description] || row['Description'] || '',
            created: row[columnMapping.created] || row['Created'] || '',
            updated: row[columnMapping.updated] || row['Updated'] || '',
            url: row['URL'] || `https://ixsystems.atlassian.net/browse/${row['Issue key'] || row['Key'] || ''}`
        };
        
        data.push(standardRow);
    }
    
    return data;
}

/**
 * Parses a single CSV line handling quoted values
 */
function parseCSVLine(line, delimiter) {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];
        
        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                current += '"';
                i++; // Skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === delimiter && !inQuotes) {
            values.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    values.push(current.trim());
    return values;
}

/**
 * Generates filter dropdown options
 */
function generateFilterOptions(data) {
    const prioritySelect = document.getElementById('csv-priority-select');
    
    // Clear existing options except the first one
    while (prioritySelect.options.length > 1) {
        prioritySelect.remove(1);
    }
    
    // Get unique priorities
    const uniquePriorities = [...new Set(data.map(item => item.priority))].sort();
    
    uniquePriorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });
}

/**
 * Populates the table with data
 */
function populateCSVTable(data) {
    const tableBody = document.getElementById('csv-table-body');
    const tbody = tableBody.parentNode;
    
    // Clear table with fade out
    tableBody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('tr');
        
        row.addEventListener('click', function() {
            // Remove previous selection
            const previouslySelected = document.querySelector('.csv-changelog-table tbody tr.selected-row');
            if (previouslySelected) {
                previouslySelected.classList.remove('selected-row');
            }
            // Add selection to current row
            this.classList.add('selected-row');
            showCSVDetails(item);
        });
        
        // Key cell
        const keyCell = document.createElement('td');
        const keyLink = document.createElement('a');
        keyLink.href = item.url;
        keyLink.target = '_blank';
        keyLink.textContent = item.key;
        keyCell.appendChild(keyLink);
        
        // Summary cell
        const summaryCell = document.createElement('td');
        const truncatedSummary = item.summary.length > 80 ? 
            item.summary.substring(0, 80) + '...' : 
            item.summary;
        summaryCell.textContent = truncatedSummary;
        
        // Priority cell
        const priorityCell = document.createElement('td');
        priorityCell.textContent = item.priority;
        priorityCell.className = `priority-${item.priority.toLowerCase().replace(/\s+/g, '-')}`;
        
        // Status cell
        const statusCell = document.createElement('td');
        statusCell.textContent = item.status;
        statusCell.className = `status-${item.status.toLowerCase().replace(/\s+/g, '-')}`;
        
        // Fix version cell
        const fixVersionCell = document.createElement('td');
        fixVersionCell.textContent = item.fixVersion;
        
        row.appendChild(keyCell);
        row.appendChild(summaryCell);
        row.appendChild(priorityCell);
        row.appendChild(statusCell);
        row.appendChild(fixVersionCell);
        
        tableBody.appendChild(row);
    });
    
    // Remove loading state and fade in new content
    setTimeout(() => {
        tbody.classList.remove('loading');
    }, 100);
}

/**
 * Shows detailed information
 */
function showCSVDetails(item) {
    const detailsDiv = document.getElementById('csv-details');
    
    const detailsHTML = `
        <button onclick="hideCSVDetails()" class="csv-changelog-close-button">Close</button>
        <h3>${item.key}: ${item.summary}</h3>
        
        <div class="csv-changelog-detail-content">
            <div class="csv-changelog-detail-column">
                <h4>Issue Details</h4>
                <div class="csv-changelog-detail-item"><strong>Key:</strong> <a href="${item.url}" target="_blank">${item.key}</a></div>
                <div class="csv-changelog-detail-item"><strong>Summary:</strong> ${item.summary}</div>
                <div class="csv-changelog-detail-item"><strong>Priority:</strong> <span class="priority-${item.priority.toLowerCase().replace(/\s+/g, '-')}">${item.priority}</span></div>
                <div class="csv-changelog-detail-item"><strong>Status:</strong> <span class="status-${item.status.toLowerCase().replace(/\s+/g, '-')}">${item.status}</span></div>
                ${item.description ? `<div class="csv-changelog-detail-item"><strong>Description:</strong> ${item.description}</div>` : ''}
            </div>
            
            <div class="csv-changelog-detail-column">
                <h4>Release Information</h4>
                <div class="csv-changelog-detail-item"><strong>Affects Versions:</strong> ${item.affectsVersion}</div>
                <div class="csv-changelog-detail-item"><strong>Fix Versions:</strong> ${item.fixVersion}</div>
                ${item.created ? `<div class="csv-changelog-detail-item"><strong>Created:</strong> ${item.created}</div>` : ''}
                ${item.updated ? `<div class="csv-changelog-detail-item"><strong>Updated:</strong> ${item.updated}</div>` : ''}
            </div>
        </div>
    `;
    
    detailsDiv.innerHTML = detailsHTML;
    detailsDiv.style.display = 'block';
    detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Hides detailed information
 */
function hideCSVDetails() {
    document.getElementById('csv-details').style.display = 'none';
}

/**
 * Filters table based on dropdowns and search
 */
function filterCSVTable() {
    const priorityFilter = document.getElementById('csv-priority-select').value;
    const searchTerm = document.getElementById('csv-search').value.toLowerCase();

    const filteredData = changelogData.filter(item => {
        const matchesPriority = priorityFilter === 'all' || item.priority === priorityFilter;
        const matchesSearch = searchTerm === '' ||
            (item.key || '').toLowerCase().includes(searchTerm) ||
            (item.summary || '').toLowerCase().includes(searchTerm) ||
            (item.description || '').toLowerCase().includes(searchTerm) ||
            (item.status || '').toLowerCase().includes(searchTerm) ||
            (item.fixVersion || '').toLowerCase().includes(searchTerm);

        return matchesPriority && matchesSearch;
    });

    populateCSVTable(filteredData);
}

/**
 * Sorts table by column
 */
function sortCSVTable(column) {
    const table = document.getElementById('csv-changelog-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    const isAscending = table.dataset.sortColumn === column.toString() && table.dataset.sortDirection === 'asc';
    
    rows.sort((a, b) => {
        const aValue = a.querySelectorAll('td')[column].textContent.trim();
        const bValue = b.querySelectorAll('td')[column].textContent.trim();
        
        if (column === 2) { // Priority column
            const priorityOrder = {
                'Highest': 0, 'Critical': 0, 'High': 1, 'Medium': 2, 'Low': 3, 'Lowest': 4
            };
            return (priorityOrder[aValue] || 999) - (priorityOrder[bValue] || 999);
        }
        
        return aValue.localeCompare(bValue);
    });
    
    if (isAscending) {
        rows.reverse();
    }
    
    // Update table
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
    
    // Update sort indicators
    const headers = table.querySelectorAll('th');
    headers.forEach((header, index) => {
        header.classList.remove('asc', 'desc');
        if (index === column) {
            header.classList.add(isAscending ? 'desc' : 'asc');
        }
    });
    
    table.dataset.sortColumn = column.toString();
    table.dataset.sortDirection = isAscending ? 'desc' : 'asc';
}

/**
 * Resets the table to initial state
 */
function resetCSVTable() {
    if (currentConfig.useVersioning) {
        document.getElementById('csv-version-select').value = currentConfig.defaultVersion;
    }
    document.getElementById('csv-priority-select').value = 'all';
    document.getElementById('csv-search').value = '';
    populateCSVTable(changelogData);
    hideCSVDetails();
}

// Global function for easy CSV table creation  
window.createCSVChangelogTable = createCSVChangelogTable;