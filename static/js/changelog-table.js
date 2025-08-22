/**
 * Changelog Table JavaScript - Supports JIRA filters and CSV data
 * Can be used without CSS modifications
 */

let changelogData = [];
let dataSource = 'json'; // 'jira', 'csv', or 'json'

/**
 * Creates and initializes the changelog table
 * @param {string} url - URL to fetch data from (JSON, JIRA API, or CSV)
 * @param {string} containerId - ID of the container element
 * @param {Object} options - Configuration options
 */
function createChangelogTable(url, containerId, options = {}) {
    const config = {
        dataType: options.dataType || 'json', // 'jira', 'csv', or 'json'
        jiraAuth: options.jiraAuth || null, // {token: 'xxx'} or {username: 'xxx', password: 'xxx'}
        filterId: options.filterId || null, // JIRA filter ID
        csvDelimiter: options.csvDelimiter || ',',
        columns: options.columns || {
            reference: 'reference',
            severity: 'severity', 
            description: 'description',
            truenasRating: 'truenasSecurityRisk',
            fixVersion: 'productVersionResolvedIn',
            version: 'productVersionImpacted'
        }
    };
    
    dataSource = config.dataType;
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container element not found:', containerId);
        return;
    }

    // Add CSS for dark/light mode compatibility
    if (!document.getElementById('changelog-table-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'changelog-table-styles';
        styleSheet.textContent = `
            .changelog-table-wrapper {
                --truenas-primary: #0095d5;
                --truenas-primary-hover: #0084c0;
                --truenas-secondary: #71bf44;
                --table-header-bg: linear-gradient(to bottom, #0095d5, #0084c0);
                --table-header-hover: linear-gradient(to bottom, #00a6eb, #0095d5);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            }
            
            .changelog-controls {
                margin-bottom: 20px; 
                display: flex; 
                gap: 15px; 
                align-items: center; 
                flex-wrap: wrap;
            }
            
            .changelog-controls select,
            .changelog-controls input[type="text"] {
                padding: 10px 15px;
                border: 1px solid var(--accent-color, #e0e3e9);
                border-radius: 6px;
                font-size: 14px;
                background-color: var(--body-background, white);
                color: var(--body-font-color, #333);
                transition: border-color 0.2s, box-shadow 0.2s;
            }
            
            .changelog-controls select {
                cursor: pointer;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 10px center;
                padding-right: 35px;
            }
            
            .changelog-controls input[type="text"] {
                min-width: 200px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: 10px center;
                padding-left: 35px;
            }
            
            .changelog-controls select:focus,
            .changelog-controls input[type="text"]:focus {
                outline: none;
                border-color: var(--truenas-primary);
                box-shadow: 0 0 0 3px rgba(0, 149, 213, 0.2);
            }
            
            .changelog-controls label {
                display: flex; 
                align-items: center; 
                gap: 8px;
                color: var(--body-font-color, #333);
                font-size: 14px;
                user-select: none;
            }
            
            .changelog-controls input[type="checkbox"] {
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
            
            .changelog-controls input[type="checkbox"]:checked {
                background-color: var(--truenas-primary);
                border-color: var(--truenas-primary);
            }
            
            .changelog-controls input[type="checkbox"]:checked::after {
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
            
            .changelog-button {
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
            }
            
            .changelog-button:hover {
                background-color: var(--truenas-primary-hover);
                transform: translateY(-1px);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
            }
            
            .changelog-table-container {
                overflow-x: auto;
                border: 1px solid var(--accent-color, #dee2e6);
                border-radius: 8px;
                border-collapse: separate;
                border-spacing: 0;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            
            .changelog-table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                background-color: var(--body-background, white);
                border-radius: 8px;
                overflow: hidden;
            }
            
            .changelog-table thead {
                position: sticky;
                top: 0;
                z-index: 2;
            }
            
            .changelog-table th {
                text-align: left;
                background: var(--table-header-bg);
                color: white;
                padding: 12px 15px;
                font-weight: 600;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border: none;
                position: relative;
                transition: background 0.2s;
                cursor: pointer;
            }
            
            .changelog-table th:hover {
                background: var(--table-header-hover);
            }
            
            .changelog-table th.asc::after {
                content: "▲";
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
            }
            
            .changelog-table th.desc::after {
                content: "▼";
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
            }
            
            .changelog-table tr {
                background-color: var(--body-background, white);
                transition: all 0.2s ease;
                border: none;
            }
            
            .changelog-table tbody tr:nth-child(even) {
                background-color: var(--accent-color-lite, #f9fafc);
            }
            
            .changelog-table tbody tr:hover {
                background-color: var(--accent-color, #e6f4fa) !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 5px rgba(0, 149, 213, 0.15);
                cursor: pointer;
            }
            
            .changelog-table tbody tr.selected-row {
                background-color: var(--accent-color, #e0f1f8) !important;
                border-left: 3px solid var(--truenas-primary);
            }
            
            .changelog-table td {
                padding: 12px 15px;
                border: none;
                border-bottom: 1px solid var(--accent-color, #eef0f5);
                font-size: 14px;
                color: var(--body-font-color, #333);
                vertical-align: middle;
            }
            
            .changelog-table a {
                color: var(--link-color, var(--truenas-primary));
                text-decoration: none;
                font-weight: 500;
                transition: color 0.2s;
            }
            
            .changelog-table a:hover {
                color: var(--link-color-visited, #00769a);
                text-decoration: underline;
            }
            
            .changelog-details {
                display: none;
                margin-top: 20px;
                padding: 20px;
                border: 1px solid var(--accent-color, #dee2e6);
                border-radius: 8px;
                background-color: var(--accent-color-lite, #f8f9fa);
                border-top: 4px solid var(--truenas-primary);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .changelog-details h3 {
                margin-top: 0;
                color: var(--truenas-primary);
                font-size: 18px;
                font-weight: 600;
            }
            
            .changelog-details h4 {
                color: var(--body-font-color, #333);
                font-size: 16px;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 1px solid var(--accent-color, #eef0f5);
            }
            
            .changelog-close-button {
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
            
            .changelog-close-button:hover {
                background-color: #5ea035;
                transform: none;
            }
            
            .changelog-detail-content {
                display: flex;
                gap: 40px;
                margin-top: 20px;
                color: var(--body-font-color, #333);
            }
            
            .changelog-detail-column {
                flex: 1;
            }
            
            .changelog-detail-item {
                margin-bottom: 10px;
            }
            
            .changelog-detail-item strong {
                color: var(--body-font-color, #333);
            }
            
            @media (max-width: 768px) {
                .changelog-controls {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .changelog-controls select,
                .changelog-controls input[type="text"],
                .changelog-button {
                    width: 100%;
                    margin-bottom: 10px;
                }
                
                .changelog-detail-content {
                    flex-direction: column;
                    gap: 20px;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Create table structure with CSS classes
    const tableHTML = `
        <div class="changelog-table-wrapper">
            <div class="changelog-controls">
                <select id="changelog-version-select">
                    <option value="all">Select a Version</option>
                </select>
                <input type="text" id="changelog-search" placeholder="Search...">
                <label>
                    <input type="checkbox" id="changelog-false-positives">
                    Show False Positives
                </label>
                <button id="changelog-reset" class="changelog-button">Reset</button>
                <button id="changelog-export" class="changelog-button">Export CSV</button>
            </div>
            
            <div class="changelog-table-container">
                <table id="changelog-table" class="changelog-table">
                    <thead>
                        <tr>
                            <th onclick="sortChangelogTable(0)">Reference</th>
                            <th onclick="sortChangelogTable(1)">Severity</th>
                            <th onclick="sortChangelogTable(2)">Description</th>
                            <th onclick="sortChangelogTable(3)">TrueNAS Rating</th>
                            <th onclick="sortChangelogTable(4)">Fix Version</th>
                        </tr>
                    </thead>
                    <tbody id="changelog-table-body">
                        <!-- Rows will be populated here -->
                    </tbody>
                </table>
            </div>
            
            <div id="changelog-details" class="changelog-details">
                <!-- Details will be populated here -->
            </div>
        </div>
    `;

    container.innerHTML = tableHTML;

    // Add event listeners
    document.getElementById('changelog-version-select').addEventListener('change', onChangelogVersionChange);
    document.getElementById('changelog-search').addEventListener('input', filterChangelogTable);
    document.getElementById('changelog-false-positives').addEventListener('change', filterChangelogTable);
    document.getElementById('changelog-reset').addEventListener('click', resetChangelogTable);
    document.getElementById('changelog-export').addEventListener('click', exportChangelogToCSV);

    // Fetch data based on type
    if (config.dataType === 'jira') {
        fetchJiraData(url, config.filterId, config.jiraAuth, config.columns);
    } else if (config.dataType === 'csv') {
        fetchCSVData(url, config.csvDelimiter, config.columns);
    } else {
        fetchChangelogData(url);
    }
}

/**
 * Fetches JSON data from the specified URL
 */
function fetchChangelogData(url) {
    const absoluteUrl = url.startsWith('/') ? window.location.origin + url : url;
    
    fetch(absoluteUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                changelogData = data;
                generateChangelogVersionOptions(data);
                console.log('Changelog data loaded:', data.length, 'items');
            } else {
                console.error('Data is not an array:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching changelog data:', error);
            document.getElementById('changelog-table-body').innerHTML = 
                '<tr><td colspan="5" style="padding: 20px; text-align: center; color: #dc3545;">Error loading data: ' + error.message + '</td></tr>';
        });
}

/**
 * Fetches data from JIRA using REST API
 */
function fetchJiraData(jiraBaseUrl, filterId, auth, columnMapping) {
    const jiraApiUrl = `${jiraBaseUrl}/rest/api/2/search?jql=filter=${filterId}&maxResults=1000&fields=key,summary,description,status,priority,fixVersions,labels,customfield_*`;
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    
    // Add authentication if provided
    if (auth) {
        if (auth.token) {
            headers['Authorization'] = `Bearer ${auth.token}`;
        } else if (auth.username && auth.password) {
            headers['Authorization'] = `Basic ${btoa(auth.username + ':' + auth.password)}`;
        }
    }
    
    fetch(jiraApiUrl, { 
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`JIRA API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.issues && Array.isArray(data.issues)) {
            changelogData = data.issues.map(issue => convertJiraIssue(issue, columnMapping));
            generateChangelogVersionOptions(changelogData);
            console.log('JIRA data loaded:', changelogData.length, 'issues');
        } else {
            console.error('Invalid JIRA response format:', data);
        }
    })
    .catch(error => {
        console.error('Error fetching JIRA data:', error);
        document.getElementById('changelog-table-body').innerHTML = 
            '<tr><td colspan="5" style="padding: 20px; text-align: center; color: #dc3545;">Error loading JIRA data: ' + error.message + '</td></tr>';
    });
}

/**
 * Fetches CSV data from the specified URL
 */
function fetchCSVData(csvUrl, delimiter, columnMapping) {
    fetch(csvUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(csvText => {
            changelogData = parseCSV(csvText, delimiter, columnMapping);
            generateChangelogVersionOptions(changelogData);
            console.log('CSV data loaded:', changelogData.length, 'rows');
        })
        .catch(error => {
            console.error('Error fetching CSV data:', error);
            document.getElementById('changelog-table-body').innerHTML = 
                '<tr><td colspan="5" style="padding: 20px; text-align: center; color: #dc3545;">Error loading CSV data: ' + error.message + '</td></tr>';
        });
}

/**
 * Converts a JIRA issue to our standard format
 */
function convertJiraIssue(issue, columnMapping) {
    const fields = issue.fields;
    
    return {
        reference: issue.key,
        moreinfo: `${window.location.origin.replace(/:\d+/, '')}/browse/${issue.key}`,
        component: fields.components && fields.components.length > 0 ? fields.components[0].name : 'N/A',
        description: fields.summary || '',
        severity: fields.priority ? fields.priority.name : 'Medium',
        truenasSecurityRisk: fields.labels && fields.labels.includes('security') ? 'Security Related' : 'Enhancement',
        productVersionImpacted: extractVersionFromLabels(fields.labels) || 'Multiple',
        productVersionResolvedIn: fields.fixVersions && fields.fixVersions.length > 0 ? fields.fixVersions[0].name : 'TBD',
        ixbug: issue.key,
        ixAdditionalInfo: fields.description || ''
    };
}

/**
 * Extracts version information from JIRA labels
 */
function extractVersionFromLabels(labels) {
    if (!labels || !Array.isArray(labels)) return null;
    
    // Look for version patterns like "25.04", "v25.04", "version-25.04"
    const versionRegex = /(?:v|version-)?(\d+\.\d+(?:\.\d+)?)/i;
    
    for (const label of labels) {
        const match = label.match(versionRegex);
        if (match) {
            return match[1];
        }
    }
    
    return null;
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
        if (values.length !== headers.length) continue;
        
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        
        // Convert to our standard format
        const standardRow = {
            reference: row[columnMapping.reference] || row['Key'] || row['Issue key'] || '',
            moreinfo: row['URL'] || `https://ixsystems.atlassian.net/browse/${row[columnMapping.reference] || row['Key']}`,
            component: row['Components'] || row['Component'] || 'N/A',
            description: row['Summary'] || row[columnMapping.description] || '',
            severity: row['Priority'] || row[columnMapping.severity] || 'Medium',
            truenasSecurityRisk: row['Security Risk'] || row[columnMapping.truenasRating] || 'TBD',
            productVersionImpacted: row['Affected Version'] || row[columnMapping.version] || 'Multiple',
            productVersionResolvedIn: row['Fix Version'] || row[columnMapping.fixVersion] || 'TBD',
            ixbug: row[columnMapping.reference] || row['Key'] || '',
            ixAdditionalInfo: row['Description'] || ''
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
 * Generates version dropdown options
 */
function generateChangelogVersionOptions(data) {
    const versionSelect = document.getElementById('changelog-version-select');
    
    // Clear existing options except the first one
    while (versionSelect.options.length > 1) {
        versionSelect.remove(1);
    }
    
    // Get unique versions
    const uniqueVersions = [...new Set(data.map(item => item.productVersionImpacted))];
    uniqueVersions.sort((a, b) => b.localeCompare(a));
    
    uniqueVersions.forEach(version => {
        const option = document.createElement('option');
        option.value = version;
        option.textContent = version;
        versionSelect.appendChild(option);
    });
}

/**
 * Handles version selection change
 */
function onChangelogVersionChange() {
    const selectedVersion = document.getElementById('changelog-version-select').value;
    
    if (selectedVersion === 'all') {
        clearChangelogTable();
    } else {
        filterChangelogByVersion(selectedVersion);
    }
}

/**
 * Filters table by version
 */
function filterChangelogByVersion(selectedVersion) {
    const showFalsePositives = document.getElementById('changelog-false-positives').checked;
    
    const filteredData = changelogData.filter(item => {
        const matchesVersion = item.productVersionImpacted === selectedVersion;
        
        if (!showFalsePositives && item.truenasSecurityRisk === 'False Positive') {
            return false;
        }
        
        return matchesVersion;
    });
    
    populateChangelogTable(filteredData);
}

/**
 * Populates the table with data
 */
function populateChangelogTable(data) {
    const tableBody = document.getElementById('changelog-table-body');
    tableBody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('tr');
        
        row.addEventListener('click', function() {
            // Remove previous selection
            const previouslySelected = document.querySelector('.changelog-table tbody tr.selected-row');
            if (previouslySelected) {
                previouslySelected.classList.remove('selected-row');
            }
            // Add selection to current row
            this.classList.add('selected-row');
            showChangelogDetails(item);
        });
        
        // Reference cell
        const refCell = document.createElement('td');
        const refLink = document.createElement('a');
        refLink.href = item.moreinfo;
        refLink.target = '_blank';
        refLink.textContent = item.reference;
        refCell.appendChild(refLink);
        
        // Severity cell
        const severityCell = document.createElement('td');
        severityCell.textContent = item.severity;
        
        // Description cell
        const descCell = document.createElement('td');
        const truncatedDesc = item.description.length > 100 ? 
            item.description.substring(0, 100) + '...' : 
            item.description;
        descCell.textContent = truncatedDesc;
        
        // Rating cell
        const ratingCell = document.createElement('td');
        ratingCell.textContent = item.truenasSecurityRisk;
        
        // Fix version cell
        const fixCell = document.createElement('td');
        fixCell.textContent = item.productVersionResolvedIn;
        
        row.appendChild(refCell);
        row.appendChild(severityCell);
        row.appendChild(descCell);
        row.appendChild(ratingCell);
        row.appendChild(fixCell);
        
        tableBody.appendChild(row);
    });
}

/**
 * Shows detailed information
 */
function showChangelogDetails(item) {
    const detailsDiv = document.getElementById('changelog-details');
    
    const detailsHTML = `
        <button onclick="hideChangelogDetails()" class="changelog-close-button">Close</button>
        <h3>${item.reference}</h3>
        
        <div class="changelog-detail-content">
            <div class="changelog-detail-column">
                <h4>Vulnerability Details</h4>
                <div class="changelog-detail-item"><strong>Reference:</strong> <a href="${item.moreinfo}" target="_blank">${item.moreinfo}</a></div>
                <div class="changelog-detail-item"><strong>Component:</strong> ${item.component}</div>
                <div class="changelog-detail-item"><strong>Base Severity (NIST):</strong> ${item.severity}</div>
                <div class="changelog-detail-item"><strong>Description:</strong> ${item.description}</div>
            </div>
            
            <div class="changelog-detail-column">
                <h4>TrueNAS Response</h4>
                <div class="changelog-detail-item"><strong>Related Version:</strong> ${item.productVersionImpacted}</div>
                <div class="changelog-detail-item"><strong>TrueNAS Vulnerability Rating:</strong> ${item.truenasSecurityRisk}</div>
                <div class="changelog-detail-item"><strong>Fix Version:</strong> ${item.productVersionResolvedIn}</div>
                ${item.ixbug ? `<div class="changelog-detail-item"><strong>Ticket:</strong> <a href="https://ixsystems.atlassian.net/browse/${item.ixbug}" target="_blank">${item.ixbug}</a></div>` : ''}
                ${item.ixAdditionalInfo ? `<div class="changelog-detail-item"><strong>Additional Details:</strong> ${item.ixAdditionalInfo}</div>` : ''}
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
function hideChangelogDetails() {
    document.getElementById('changelog-details').style.display = 'none';
}

/**
 * Filters table based on search and checkboxes
 */
function filterChangelogTable() {
    const searchTerm = document.getElementById('changelog-search').value.toLowerCase();
    const showFalsePositives = document.getElementById('changelog-false-positives').checked;
    const rows = document.querySelectorAll('#changelog-table-body tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let matchesSearch = false;
        let isFalsePositive = false;
        
        // Check search term
        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                matchesSearch = true;
            }
        });
        
        // Check false positive status
        if (cells[3] && cells[3].textContent === 'False Positive') {
            isFalsePositive = true;
        }
        
        // Show/hide row based on conditions
        const shouldShow = matchesSearch && (showFalsePositives || !isFalsePositive);
        row.style.display = shouldShow ? '' : 'none';
    });
}

/**
 * Sorts table by column
 */
function sortChangelogTable(column) {
    const table = document.getElementById('changelog-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    const isAscending = table.dataset.sortColumn === column.toString() && table.dataset.sortDirection === 'asc';
    
    rows.sort((a, b) => {
        const aValue = a.querySelectorAll('td')[column].textContent.trim();
        const bValue = b.querySelectorAll('td')[column].textContent.trim();
        
        if (column === 3) { // TrueNAS Rating column
            const ratingOrder = {
                'Critical': 0, 'High': 1, 'Medium': 2, 'Low': 3, 'TBD': 4, 'False Positive': 5
            };
            return (ratingOrder[aValue] || 999) - (ratingOrder[bValue] || 999);
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
    table.dataset.sortColumn = column.toString();
    table.dataset.sortDirection = isAscending ? 'desc' : 'asc';
}

/**
 * Resets the table to initial state
 */
function resetChangelogTable() {
    document.getElementById('changelog-version-select').value = 'all';
    document.getElementById('changelog-search').value = '';
    document.getElementById('changelog-false-positives').checked = false;
    clearChangelogTable();
    hideChangelogDetails();
}

/**
 * Clears the table
 */
function clearChangelogTable() {
    document.getElementById('changelog-table-body').innerHTML = '';
}

/**
 * Exports table to CSV
 */
function exportChangelogToCSV() {
    const table = document.getElementById('changelog-table');
    const rows = Array.from(table.querySelectorAll('tr')).filter(row => row.style.display !== 'none');
    
    const csvContent = rows.map(row => {
        const cells = Array.from(row.querySelectorAll('th, td'));
        return cells.map(cell => `"${cell.textContent.replace(/"/g, '""')}"`).join(',');
    }).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'changelog-table.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// Initialize table when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Auto-initialize if changelog-table-container exists
    if (document.getElementById('changelog-table-container-auto')) {
        createChangelogTable('/advisories/SCALE.json', 'changelog-table-container-auto');
    }
});

// Global function for easy JIRA integration
window.createJiraTable = function(containerId, jiraUrl, filterId, authOptions = {}) {
    createChangelogTable(jiraUrl, containerId, {
        dataType: 'jira',
        filterId: filterId,
        jiraAuth: authOptions
    });
};

// Global function for CSV integration  
window.createCSVTable = function(containerId, csvUrl, options = {}) {
    createChangelogTable(csvUrl, containerId, {
        dataType: 'csv',
        csvDelimiter: options.delimiter || ',',
        columns: options.columns || {}
    });
};