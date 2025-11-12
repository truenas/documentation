// Multi-Site Search Configuration
// Temporary local testing mode - set LOCAL_TESTING to true for local development

const LOCAL_TESTING = false; // Change to true for local testing

const searchConfig = {
  indexes: {
    // TrueNAS Documentation versions
    // NOTE: To change the default version, move the "isDefault: true" flag to the desired version
    'docs-26.04': {
      url: LOCAL_TESTING ? '/pagefind/' : 'https://www.truenas.com/docs/pagefind/',
      name: 'TrueNAS Documentation',
      displayName: 'TrueNAS 26.04 Nightly',
      version: '26.04 Nightly',
      icon: LOCAL_TESTING ? '/favicon/TN-favicon-32x32.png' : 'https://www.truenas.com/docs/favicon/TN-favicon-32x32.png',
      priority: 1,
      group: 'docs'
    },
    'docs-25.10': {
      url: 'https://www.truenas.com/docs/scale/25.10/pagefind/',
      name: 'TrueNAS Documentation',
      displayName: 'TrueNAS 25.10',
      version: '25.10',
      icon: 'https://www.truenas.com/docs/favicon/TN-favicon-32x32.png',
      priority: 2,
      group: 'docs'
    },
    'docs-25.04': {
      url: 'https://www.truenas.com/docs/scale/25.04/pagefind/',
      name: 'TrueNAS Documentation',
      displayName: 'TrueNAS 25.04',
      version: '25.04',
      icon: 'https://www.truenas.com/docs/favicon/TN-favicon-32x32.png',
      priority: 3,
      group: 'docs',
      isDefault: true  // Default selected version - change this flag to set a different default
    },
    'docs-24.10': {
      url: 'https://www.truenas.com/docs/scale/24.10/pagefind/',
      name: 'TrueNAS Documentation',
      displayName: 'TrueNAS 24.10',
      version: '24.10',
      icon: 'https://www.truenas.com/docs/favicon/TN-favicon-32x32.png',
      priority: 4,
      group: 'docs'
    },
    // Other sites (non-expandable)
    apps: {
      url: 'https://apps.truenas.com/pagefind/',
      name: 'TrueNAS Apps',
      displayName: 'TrueNAS Apps',
      iconSvg: '<svg style="width: 20px; height: 20px;" viewBox="0 0 24 24"><circle cx="5" cy="5" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></svg>',
      priority: 10,
      group: 'other'
    },
    api: {
      url: 'https://api.truenas.com/pagefind/',
      name: 'TrueNAS API',
      displayName: 'TrueNAS API',
      iconSvg: '<svg style="width: 20px; height: 20px;" viewBox="0 0 800 800"><g><path d="M699.5,512.3v128.8c-90.1,52.2-181.1,105-273.5,158.6v-129.2c89.9-52,180.7-104.5,273.5-158.2Z"/><path d="M100.5,641.9v-128.8c91.6,53,181.9,105.2,272.8,157.7v129.1c-91.8-53.2-182.3-105.6-272.8-158.1Z"/><path d="M562.2,531.8c-46.4-26.9-91.6-53.2-136.7-79.3v-128.9c83.6,48.3,165.5,95.7,248.5,143.7-38,22-74.8,43.2-111.8,64.6Z"/><path d="M124.6,467.1c83.5-48.3,164.9-95.4,248.2-143.6v129.1c-45.2,26.2-90.9,52.6-136.6,79-36.6-21.2-72.9-42.1-111.6-64.5Z"/><path d="M510.5,561.5c-38.1,22.2-74.2,43.1-111.4,64.8-36.6-21.4-73.1-42.7-110.6-64.7,37.3-21.7,73.6-42.8,110.6-64.4,36.7,21.2,73.3,42.3,111.4,64.3Z"/></g><g><path d="M100.5,255.3L189.3,0h49.6l88.8,255.3h-55.1l-15.5-48.5h-85.5l-15.5,48.5h-55.5ZM185.2,163.2h57.7l-28.9-89.9-28.9,89.9Z"/><path d="M440.5,165.4v89.9h-51.8V0h91.4c58.8,0,95.5,27,95.5,81.8s-36.3,83.6-95.5,83.6h-39.6ZM472.7,121.7c35.9,0,51.1-12.6,51.1-40s-15.2-37.7-51.1-37.7h-32.2v77.7h32.2Z"/><path d="M699.5,255.3h-51.8V0h51.8v255.3Z"/></g></svg>',
      priority: 11,
      group: 'other'
    },
    // TEMPORARILY DISABLED - Uncomment to re-enable when pagefind is fixed
    // security: {
    //   url: 'https://security.truenas.com/pagefind/',
    //   name: 'Security Advisories',
    //   displayName: 'Security Advisories',
    //   iconSvg: '<svg style="width: 20px; height: 20px; stroke-width: 0.5;" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,21C7.59,21 4,17.41 4,13V6.31L12,3.11L20,6.31V13C20,17.41 16.41,21 12,21Z"/></svg>',
    //   priority: 12,
    //   group: 'other'
    // },
    connect: {
      url: 'https://connect.truenas.com/pagefind/',
      name: 'TrueNAS Connect',
      displayName: 'TrueNAS Connect',
      icon: 'https://www.truenas.com/docs/favicon/TN-favicon-32x32.png',
      priority: 13,
      group: 'other'
    }
  }
};

class MultiSiteSearch {
  constructor() {
    this.loadedIndexes = new Map();
    this.resultsPerPage = 10;
    this.currentPage = 1;
    this.allResults = [];
    this.isSearching = false;
    this.hasResults = false; // Track if results are currently displayed
    this.isLoadingMore = false; // Track if more results are being loaded
    this.activeSites = []; // Will be initialized after DOM is ready

    // Detect current docs version from URL
    this.currentDocsVersion = this.detectCurrentDocsVersion();

    // Bind methods
    this.init = this.init.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.loadMoreResults = this.loadMoreResults.bind(this);
    this.updateSearchIcon = this.updateSearchIcon.bind(this);
    this.checkUrlQueryParameter = this.checkUrlQueryParameter.bind(this);

    this.init();
  }

  detectCurrentDocsVersion() {
    // Try to detect version from URL (e.g., /docs/scale/25.04/ or /scale/25.04/)
    const urlMatch = window.location.pathname.match(/\/(?:docs\/)?(?:scale\/)?(\d+\.\d+)/);
    if (urlMatch) {
      const version = urlMatch[1]; // e.g., "25.04"
      return version;
    }

    // Fallback: try to detect from version switcher or config
    const versionSwitcher = document.querySelector('[data-current-version]');
    if (versionSwitcher) {
      const version = versionSwitcher.dataset.currentVersion;
      return version;
    }

    // Default to the default version from config
    const defaultDocs = Object.keys(searchConfig.indexes).find(key => searchConfig.indexes[key].isDefault);
    const defaultVersion = searchConfig.indexes[defaultDocs]?.version?.replace(/\s.*$/, '');
    return defaultVersion;
  }

  async init() {
    // Initialize docs toggle and active sites
    this.updateDocsToggle();

    // Set up event listeners
    const trigger = document.getElementById('search-trigger');
    const closeBtn = document.getElementById('search-close');
    const overlay = document.getElementById('search-overlay');
    const submitBtn = document.getElementById('search-submit');
    const searchInput = document.getElementById('search-input-enhanced');

    if (trigger) {
      trigger.addEventListener('click', this.openModal);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', this.closeModal);
    }

    if (overlay) {
      overlay.addEventListener('click', this.closeModal);
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', this.performSearch);
    }

    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.performSearch();
      });
    }

    // Site filter checkboxes (non-docs checkboxes)
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]:not(#docs-main-toggle)');
    filterCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => this.toggleSiteCheckbox(e.target));
    });

    // Docs version dropdown (hover-based)
    const docsContainer = document.getElementById('docs-filter-container');
    const docsMenu = document.getElementById('docs-version-menu');
    const docsMainToggle = document.getElementById('docs-main-toggle');
    const docsVersionCheckboxes = document.querySelectorAll('.docs-version-option input[type="checkbox"]');

    // Prevent dropdown from closing when clicking inside
    if (docsMenu) {
      docsMenu.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Handle docs version checkbox changes
    if (docsVersionCheckboxes && docsMainToggle) {
      docsVersionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          this.updateDocsToggle();
          // If results are displayed, change search icon to refresh
          if (this.hasResults) {
            this.updateSearchIcon('refresh');
          }
        });
      });

      // Handle main docs toggle
      docsMainToggle.addEventListener('change', () => {
        const isChecked = docsMainToggle.checked;

        // Don't uncheck version boxes when main toggle is unchecked
        // This allows version selections to control API filtering even when Docs is disabled
        if (isChecked) {
          // Check at least one version if none are checked
          const anyChecked = Array.from(docsVersionCheckboxes).some(cb => cb.checked);
          if (!anyChecked) {
            // Default to 25.04
            const default25 = Array.from(docsVersionCheckboxes).find(cb => cb.dataset.site === 'docs-25.04');
            if (default25) default25.checked = true;
          }
        }

        this.updateDocsToggle();

        // If results are displayed, change search icon to refresh
        if (this.hasResults) {
          this.updateSearchIcon('refresh');
        }
      });
    }

    // Infinite scroll for search results
    const resultsContainer = document.getElementById('search-results-enhanced');
    if (resultsContainer) {
      resultsContainer.addEventListener('scroll', () => {
        const scrollTop = resultsContainer.scrollTop;
        const scrollHeight = resultsContainer.scrollHeight;
        const clientHeight = resultsContainer.clientHeight;

        // Trigger load more when scrolled to within 100px of bottom
        if (scrollTop + clientHeight >= scrollHeight - 100) {
          this.loadMoreResults();
        }
      });
    }

    // Try to load default docs index on init (for faster first search)
    try {
      const defaultDocs = Object.keys(searchConfig.indexes).find(key => searchConfig.indexes[key].isDefault);
      await this.loadIndex(defaultDocs);
    } catch (error) {
      // Could not pre-load docs index
    }

    // Check for URL query parameter and auto-execute search
    this.checkUrlQueryParameter();
  }

  checkUrlQueryParameter() {
    // Parse URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('query');

    if (queryParam && queryParam.trim() !== '') {
      // Check if we're on the /search/ path and redirect to homepage with query
      const currentPath = window.location.pathname;
      if (currentPath === '/search/' || currentPath === '/search') {
        // Redirect to homepage with query parameter preserved
        window.location.href = `/${window.location.search}`;
        return;
      }

      // Open the modal
      this.openModal();

      // Set the search input value
      const searchInput = document.getElementById('search-input-enhanced');
      if (searchInput) {
        searchInput.value = queryParam.trim();
      }

      // Wait a short moment for modal to fully render, then perform search
      setTimeout(() => {
        this.performSearch();
      }, 200);
    }
  }

  async loadIndex(siteKey) {
    if (this.loadedIndexes.has(siteKey)) {
      return this.loadedIndexes.get(siteKey);
    }

    try {
      const config = searchConfig.indexes[siteKey];
      const pagefind = await import(`${config.url}pagefind.js`);
      await pagefind.init();
      this.loadedIndexes.set(siteKey, pagefind);
      return pagefind;
    } catch (error) {
      console.error(`Failed to load index for ${siteKey}:`, error);
      return null;
    }
  }

  toggleSiteFilter(button) {
    const site = button.dataset.site;

    // Toggle the button state
    button.classList.toggle('active');

    // Update active sites list (excluding 'api' which is managed by dropdown)
    const activeButtons = document.querySelectorAll('.site-filter.active');
    const buttonSites = Array.from(activeButtons).map(btn => btn.dataset.site);

    // Combine button sites with API if the dropdown is active
    const apiDropdown = document.getElementById('api-version-filter');
    const apiIsActive = apiDropdown && apiDropdown.classList.contains('active');

    this.activeSites = buttonSites;
    if (apiIsActive) {
      this.activeSites.push('api');
    }

    // Ensure at least one site is selected
    if (this.activeSites.length === 0) {
      button.classList.add('active');
      this.activeSites = [site];
    }

    // If results are displayed, change search icon to refresh
    if (this.hasResults) {
      this.updateSearchIcon('refresh');
    }
  }

  updateDocsToggle() {
    const docsMainToggle = document.getElementById('docs-main-toggle');
    const docsVersionCheckboxes = document.querySelectorAll('.docs-version-option input[type="checkbox"]');
    const versionLabelText = document.getElementById('version-label-text');

    if (!docsMainToggle || !docsVersionCheckboxes) return;

    // Check if any version is selected
    const anyChecked = Array.from(docsVersionCheckboxes).some(cb => cb.checked);

    // Update version label text based on selected versions
    if (versionLabelText) {
      if (!anyChecked) {
        versionLabelText.textContent = 'Version';
      } else {
        const selectedVersions = Array.from(docsVersionCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.dataset.site.replace('docs-', ''))
          .sort((a, b) => {
            // Sort versions descending (26.04, 25.10, 25.04, 24.10)
            const [aMajor, aMinor] = a.split('.').map(Number);
            const [bMajor, bMinor] = b.split('.').map(Number);
            if (aMajor !== bMajor) return bMajor - aMajor;
            return bMinor - aMinor;
          });

        versionLabelText.textContent = `Version (${selectedVersions.join(', ')})`;
      }
    }

    // Update active sites
    this.updateActiveSites();
  }

  updateActiveSites() {
    // Collect non-docs checkboxes
    const nonDocsCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]:not(#docs-main-toggle):checked');
    this.activeSites = Array.from(nonDocsCheckboxes).map(cb => cb.dataset.site);

    // Add docs sites if main toggle is checked
    const docsMainToggle = document.getElementById('docs-main-toggle');
    if (docsMainToggle && docsMainToggle.checked) {
      const docsVersionCheckboxes = document.querySelectorAll('.docs-version-option input[type="checkbox"]:checked');
      const docsSites = Array.from(docsVersionCheckboxes).map(cb => cb.dataset.site);
      this.activeSites.push(...docsSites);
    }
  }

  toggleSiteCheckbox(checkbox) {
    this.updateActiveSites();

    // Ensure at least one site is selected
    if (this.activeSites.length === 0) {
      checkbox.checked = true;
      this.updateActiveSites();
    }

    // If results are displayed, change search icon to refresh
    if (this.hasResults) {
      this.updateSearchIcon('refresh');
    }
  }

  updateSearchIcon(mode = 'search') {
    const submitBtn = document.getElementById('search-submit');
    if (!submitBtn) return;

    const icon = submitBtn.querySelector('i');
    if (!icon) return;

    if (mode === 'refresh') {
      icon.className = 'fa fa-sync';
      submitBtn.setAttribute('aria-label', 'Refresh search');
    } else {
      icon.className = 'fa fa-search';
      submitBtn.setAttribute('aria-label', 'Search');
    }
  }

  openModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.style.display = 'block';

      // Focus on input after modal opens
      setTimeout(() => {
        const input = document.getElementById('search-input-enhanced');
        if (input) input.focus();
      }, 100);
    }
  }

  closeModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  async performSearch() {
    if (this.isSearching) {
      return;
    }

    const searchInput = document.getElementById('search-input-enhanced');
    const query = searchInput?.value;

    if (!query || query.trim() === '') {
      return;
    }

    this.isSearching = true;
    this.currentPage = 1;
    this.allResults = [];

    // Reset search icon to magnifying glass
    this.updateSearchIcon('search');

    // Show loading
    const loadingDiv = document.getElementById('search-loading');
    const resultsDiv = document.getElementById('search-results-enhanced');
    const countDiv = document.getElementById('search-results-count');

    if (loadingDiv) loadingDiv.style.display = 'block';
    if (resultsDiv) resultsDiv.innerHTML = '';
    if (countDiv) countDiv.style.display = 'none';

    const sitesToSearch = this.activeSites.includes('all')
      ? Object.keys(searchConfig.indexes)
      : this.activeSites;

    // Search each selected site
    const searchPromises = sitesToSearch.map(async (siteKey) => {
      try {
        const pagefind = await this.loadIndex(siteKey);
        if (!pagefind) {
          return [];
        }

        const results = await pagefind.search(query);

        const enrichedResults = await Promise.all(
          results.results.map(async (r) => {
            try {
              const data = await r.data();
              const config = searchConfig.indexes[siteKey];

              return {
                ...data,
                siteKey,
                siteName: config.name,
                siteDisplayName: config.displayName || config.name,
                siteIcon: config.icon,
                siteIconSvg: config.iconSvg,
                sitePriority: config.priority,
                version: config.version || data.meta?.version || null
              };
            } catch (error) {
              console.error(`Error loading result data for ${siteKey}:`, error);
              return null;
            }
          })
        );

        return enrichedResults.filter(r => r !== null);
      } catch (error) {
        console.error(`Error searching ${siteKey}:`, error);
        return [];
      }
    });

    try {
      const resultsArrays = await Promise.all(searchPromises);
      this.allResults = resultsArrays.flat();

      // Filter API results to match selected docs versions
      if (this.activeSites.includes('api')) {
        // Extract versions from docs version dropdown (regardless of main docs toggle state)
        const checkedDocsVersions = Array.from(document.querySelectorAll('.docs-version-option input[type="checkbox"]:checked'))
          .map(cb => cb.dataset.site.replace('docs-', '')); // ["25.04", "26.04", etc.]

        if (checkedDocsVersions.length > 0) {

          this.allResults = this.allResults.filter(result => {
            // Keep non-API results
            if (result.siteKey !== 'api') {
              return true;
            }

            // For API results, extract version from metadata or URL
            let resultVersion = result.meta?.version || result.version;

            // If no metadata version, extract from URL (e.g., /v25.04/)
            if (!resultVersion && result.url) {
              const urlMatch = result.url.match(/\/v(\d+\.\d+)\//);
              if (urlMatch) {
                resultVersion = urlMatch[1]; // e.g., "25.04"
              }
            }

            if (!resultVersion) {
              return false; // Filter out results without version info
            }

            // Extract version numbers (e.g., "v25.04" or "25.04")
            const apiVersion = resultVersion.replace(/^v/, '');
            const matches = checkedDocsVersions.includes(apiVersion);

            return matches;
          });
        } else {
          // No docs versions selected, remove all API results
          this.allResults = this.allResults.filter(result => result.siteKey !== 'api');
        }
      }

      // Sort by score/relevance, then by site priority
      this.allResults.sort((a, b) => {
        if (a.score !== b.score) {
          return (b.score || 0) - (a.score || 0);
        }
        return a.sitePriority - b.sitePriority;
      });

      // Hide loading
      if (loadingDiv) loadingDiv.style.display = 'none';

      // Display results
      this.displayResults();

      // Mark that results are now displayed
      this.hasResults = this.allResults.length > 0;
    } catch (error) {
      console.error('Error during search:', error);
      if (loadingDiv) loadingDiv.style.display = 'none';
      if (resultsDiv) {
        resultsDiv.innerHTML = '<p class="search-error">An error occurred during search. Please try again.</p>';
      }
      this.hasResults = false;
    } finally {
      this.isSearching = false;
    }
  }

  displayResults() {
    const container = document.getElementById('search-results-enhanced');
    const countContainer = document.getElementById('search-results-count');

    if (!container) return;

    if (this.allResults.length === 0) {
      container.innerHTML = '<p class="no-results">No results found.</p>';
      if (countContainer) {
        countContainer.style.display = 'none';
      }
      return;
    }

    // Update results count in separate fixed element
    if (countContainer) {
      countContainer.textContent = `${this.allResults.length} result${this.allResults.length !== 1 ? 's' : ''} found`;
      countContainer.style.display = 'block';
    }

    const start = (this.currentPage - 1) * this.resultsPerPage;
    const end = start + this.resultsPerPage;
    const pageResults = this.allResults.slice(start, end);

    let html = '';

    pageResults.forEach(result => {
      let icon = '';
      if (result.siteIconSvg) {
        icon = result.siteIconSvg;
      } else if (result.siteIcon) {
        icon = `<img src="${result.siteIcon}" alt="${result.siteName}" class="result-site-icon" width="20" height="20">`;
      }

      const title = result.meta?.title || result.url?.split('/').pop() || 'Untitled';
      const excerpt = result.excerpt || '';

      // Add version badge for API results
      let versionBadge = '';
      if (result.siteKey === 'api') {
        let resultVersion = result.meta?.version || result.version;
        // If no metadata version, extract from URL (e.g., /v25.04/)
        if (!resultVersion && result.url) {
          const urlMatch = result.url.match(/\/v(\d+\.\d+)\//);
          if (urlMatch) {
            resultVersion = 'v' + urlMatch[1]; // e.g., "v25.04"
          }
        }
        if (resultVersion) {
          versionBadge = `<span class="result-version-badge">${resultVersion}</span>`;
        }
      }

      html += `
        <div class="search-result-item">
          <div class="result-header">
            ${icon}
            <span class="result-site-badge">${result.siteDisplayName}</span>
            ${versionBadge}
          </div>
          <h4><a href="${result.url}" target="_blank" rel="noopener">${this.escapeHtml(title)}</a></h4>
          <div class="result-excerpt">${excerpt}</div>
          <div class="result-url">${this.escapeHtml(result.url)}</div>
        </div>
      `;
    });

    // Add loading indicator if more results available
    if (end < this.allResults.length) {
      html += `<div id="scroll-loading-indicator" class="scroll-loading-indicator" style="display:none;">
        <div class="loading-spinner-small"></div>
        <p>Loading more results...</p>
      </div>`;
    }

    container.innerHTML = html;
  }

  loadMoreResults() {
    // Prevent multiple simultaneous loads
    if (this.isLoadingMore) return;

    const start = (this.currentPage - 1) * this.resultsPerPage;
    const end = start + this.resultsPerPage;

    // Check if there are more results to load
    if (end >= this.allResults.length) return;

    this.isLoadingMore = true;

    // Show loading indicator
    const loadingIndicator = document.getElementById('scroll-loading-indicator');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }

    // Simulate a small delay to show loading indicator (remove if not needed)
    setTimeout(() => {
      this.currentPage++;

      const container = document.getElementById('search-results-enhanced');
      if (!container) {
        this.isLoadingMore = false;
        return;
      }

      const newStart = (this.currentPage - 1) * this.resultsPerPage;
      const newEnd = newStart + this.resultsPerPage;
      const pageResults = this.allResults.slice(newStart, newEnd);

      // Remove loading indicator
      if (loadingIndicator) {
        loadingIndicator.remove();
      }

      // Append new results
      pageResults.forEach(result => {
        let icon = '';
        if (result.siteIconSvg) {
          icon = result.siteIconSvg;
        } else if (result.siteIcon) {
          icon = `<img src="${result.siteIcon}" alt="${result.siteName}" class="result-site-icon" width="20" height="20">`;
        }

        const title = result.meta?.title || result.url?.split('/').pop() || 'Untitled';
        const excerpt = result.excerpt || '';

        // Add version badge for API results
        let versionBadge = '';
        if (result.siteKey === 'api') {
          let resultVersion = result.meta?.version || result.version;
          // If no metadata version, extract from URL (e.g., /v25.04/)
          if (!resultVersion && result.url) {
            const urlMatch = result.url.match(/\/v(\d+\.\d+)\//);
            if (urlMatch) {
              resultVersion = 'v' + urlMatch[1]; // e.g., "v25.04"
            }
          }
          if (resultVersion) {
            versionBadge = `<span class="result-version-badge">${resultVersion}</span>`;
          }
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = 'search-result-item';
        resultDiv.innerHTML = `
          <div class="result-header">
            ${icon}
            <span class="result-site-badge">${result.siteDisplayName}</span>
            ${versionBadge}
          </div>
          <h4><a href="${result.url}" target="_blank" rel="noopener">${this.escapeHtml(title)}</a></h4>
          <div class="result-excerpt">${excerpt}</div>
          <div class="result-url">${this.escapeHtml(result.url)}</div>
        `;
        container.appendChild(resultDiv);
      });

      // Add new loading indicator if more results available
      if (newEnd < this.allResults.length) {
        const newLoadingIndicator = document.createElement('div');
        newLoadingIndicator.id = 'scroll-loading-indicator';
        newLoadingIndicator.className = 'scroll-loading-indicator';
        newLoadingIndicator.style.display = 'none';
        newLoadingIndicator.innerHTML = `
          <div class="loading-spinner-small"></div>
          <p>Loading more results...</p>
        `;
        container.appendChild(newLoadingIndicator);
      }

      this.isLoadingMore = false;
    }, 300);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.multiSiteSearch = new MultiSiteSearch();
  });
} else {
  window.multiSiteSearch = new MultiSiteSearch();
}
