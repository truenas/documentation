// Multi-Site Search Configuration
// Set LOCAL_TESTING to true for local development, false for production
const LOCAL_TESTING = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const searchConfig = {
  indexes: LOCAL_TESTING ? {
    // LOCAL TESTING MODE
    // To test multi-site search locally:
    // 1. Build each site: cd <site-dir> && hugo && npx pagefind --site public
    // 2. Serve on different ports: hugo serve --port 131X
    // 3. Uncomment the sites you want to test below

    docs: {
      url: '/pagefind/',  // Local pagefind index
      name: 'Documentation',
      icon: '/favicon/TN-favicon-32x32.png',
      priority: 1
    },
    // Uncomment to test Apps site (serve on port 1314)
    // apps: {
    //   url: 'http://localhost:1314/pagefind/',
    //   name: 'Apps',
    //   icon: '/favicon/TN-favicon-32x32.png',
    //   priority: 2
    // },
    // Uncomment to test API site (serve on port 1315)
    // api: {
    //   url: 'http://localhost:1315/pagefind/',
    //   name: 'API',
    //   icon: '/favicon/TN-favicon-32x32.png',
    //   priority: 3
    // },
    // Uncomment to test Security site (serve on port 1316)
    // security: {
    //   url: 'http://localhost:1316/pagefind/',
    //   name: 'Security',
    //   icon: '/favicon/TN-favicon-32x32.png',
    //   priority: 4
    // },
    // Uncomment to test Connect site (serve on port 1317)
    // connect: {
    //   url: 'http://localhost:1317/pagefind/',
    //   name: 'Connect',
    //   icon: '/images/tn-openstorage-logo.png',
    //   priority: 5
    // }
  } : {
    // PRODUCTION MODE - Search all sites
    docs: {
      url: 'https://www.truenas.com/docs/pagefind/',
      name: 'Documentation',
      icon: '/favicon/TN-favicon-32x32.png',
      priority: 1
    },
    apps: {
      url: 'https://apps.truenas.com/pagefind/',
      name: 'Apps',
      icon: '/favicon/TN-favicon-32x32.png',
      priority: 2
    },
    api: {
      url: 'https://api.truenas.com/pagefind/',
      name: 'API',
      icon: '/favicon/TN-favicon-32x32.png',
      priority: 3
    },
    security: {
      url: 'https://security.truenas.com/pagefind/',
      name: 'Security',
      icon: '/favicon/TN-favicon-32x32.png',
      priority: 4
    },
    connect: {
      url: 'https://connect.truenas.com/pagefind/',
      name: 'Connect',
      icon: '/images/tn-openstorage-logo.png',
      priority: 5
    }
  }
};

class MultiSiteSearch {
  constructor() {
    this.loadedIndexes = new Map();
    this.activeSites = ['all'];
    this.resultsPerPage = 10;
    this.currentPage = 1;
    this.allResults = [];
    this.isSearching = false;

    // Bind methods
    this.init = this.init.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.loadMoreResults = this.loadMoreResults.bind(this);

    this.init();
  }

  async init() {
    console.log('Initializing MultiSiteSearch...');

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

    // Site filter buttons
    const filterButtons = document.querySelectorAll('.site-filter');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => this.toggleSiteFilter(e.target));
    });

    // Try to load local index on init (for faster first search)
    try {
      await this.loadIndex('docs');
      console.log('Local docs index pre-loaded');
    } catch (error) {
      console.warn('Could not pre-load docs index:', error);
    }
  }

  async loadIndex(siteKey) {
    if (this.loadedIndexes.has(siteKey)) {
      return this.loadedIndexes.get(siteKey);
    }

    try {
      const config = searchConfig.indexes[siteKey];
      console.log(`Loading index for ${siteKey} from ${config.url}`);

      const pagefind = await import(`${config.url}pagefind.js`);
      await pagefind.init();

      this.loadedIndexes.set(siteKey, pagefind);
      console.log(`Successfully loaded ${siteKey} index`);
      return pagefind;
    } catch (error) {
      console.error(`Failed to load index for ${siteKey}:`, error);
      return null;
    }
  }

  toggleSiteFilter(button) {
    const site = button.dataset.site;

    if (site === 'all') {
      // Clear all filters and select "All"
      document.querySelectorAll('.site-filter').forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      this.activeSites = ['all'];
    } else {
      // Toggle individual site
      const allButton = document.querySelector('.site-filter[data-site="all"]');
      if (allButton) {
        allButton.classList.remove('active');
      }

      button.classList.toggle('active');

      // Update active sites list
      const activeButtons = document.querySelectorAll('.site-filter.active:not([data-site="all"])');
      this.activeSites = Array.from(activeButtons).map(btn => btn.dataset.site);

      // If nothing selected, default to all
      if (this.activeSites.length === 0) {
        if (allButton) {
          allButton.classList.add('active');
        }
        this.activeSites = ['all'];
      }
    }

    console.log('Active sites:', this.activeSites);
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
      console.log('Search already in progress');
      return;
    }

    const searchInput = document.getElementById('search-input-enhanced');
    const query = searchInput?.value;

    if (!query || query.trim() === '') {
      console.log('Empty query');
      return;
    }

    console.log(`Searching for: "${query}"`);
    this.isSearching = true;
    this.currentPage = 1;
    this.allResults = [];

    // Show loading
    const loadingDiv = document.getElementById('search-loading');
    const resultsDiv = document.getElementById('search-results-enhanced');

    if (loadingDiv) loadingDiv.style.display = 'block';
    if (resultsDiv) resultsDiv.innerHTML = '';

    const sitesToSearch = this.activeSites.includes('all')
      ? Object.keys(searchConfig.indexes)
      : this.activeSites;

    console.log('Searching sites:', sitesToSearch);

    // Search each selected site
    const searchPromises = sitesToSearch.map(async (siteKey) => {
      try {
        const pagefind = await this.loadIndex(siteKey);
        if (!pagefind) {
          console.warn(`No pagefind instance for ${siteKey}`);
          return [];
        }

        const results = await pagefind.search(query);
        console.log(`Found ${results.results.length} results in ${siteKey}`);

        const enrichedResults = await Promise.all(
          results.results.map(async (r) => {
            try {
              const data = await r.data();
              return {
                ...data,
                siteKey,
                siteName: searchConfig.indexes[siteKey].name,
                siteIcon: searchConfig.indexes[siteKey].icon,
                sitePriority: searchConfig.indexes[siteKey].priority
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

      console.log(`Total results: ${this.allResults.length}`);

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
    } catch (error) {
      console.error('Error during search:', error);
      if (loadingDiv) loadingDiv.style.display = 'none';
      if (resultsDiv) {
        resultsDiv.innerHTML = '<p class="search-error">An error occurred during search. Please try again.</p>';
      }
    } finally {
      this.isSearching = false;
    }
  }

  displayResults() {
    const container = document.getElementById('search-results-enhanced');
    if (!container) return;

    if (this.allResults.length === 0) {
      container.innerHTML = '<p class="no-results">No results found.</p>';
      return;
    }

    const start = (this.currentPage - 1) * this.resultsPerPage;
    const end = start + this.resultsPerPage;
    const pageResults = this.allResults.slice(start, end);

    let html = `<div class="results-count">${this.allResults.length} result${this.allResults.length !== 1 ? 's' : ''} found</div>`;

    pageResults.forEach(result => {
      const icon = result.siteIcon
        ? `<img src="${result.siteIcon}" alt="${result.siteName}" class="result-site-icon" width="20" height="20">`
        : '';

      const title = result.meta?.title || result.url?.split('/').pop() || 'Untitled';
      const excerpt = result.excerpt || '';

      html += `
        <div class="search-result-item">
          <div class="result-header">
            ${icon}
            <span class="result-site-badge">${result.siteName}</span>
          </div>
          <h4><a href="${result.url}" target="_blank" rel="noopener">${this.escapeHtml(title)}</a></h4>
          <div class="result-excerpt">${excerpt}</div>
          <div class="result-url">${this.escapeHtml(result.url)}</div>
        </div>
      `;
    });

    // Add load more button if needed
    if (end < this.allResults.length) {
      html += `<button id="load-more-results" class="load-more-btn">Load More Results (${this.allResults.length - end} remaining)</button>`;
    }

    container.innerHTML = html;

    // Add load more event listener
    const loadMoreBtn = document.getElementById('load-more-results');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', this.loadMoreResults);
    }
  }

  loadMoreResults() {
    this.currentPage++;

    const container = document.getElementById('search-results-enhanced');
    if (!container) return;

    const start = (this.currentPage - 1) * this.resultsPerPage;
    const end = start + this.resultsPerPage;
    const pageResults = this.allResults.slice(start, end);

    // Create a temporary container for new results
    const tempDiv = document.createElement('div');

    pageResults.forEach(result => {
      const icon = result.siteIcon
        ? `<img src="${result.siteIcon}" alt="${result.siteName}" class="result-site-icon" width="20" height="20">`
        : '';

      const title = result.meta?.title || result.url?.split('/').pop() || 'Untitled';
      const excerpt = result.excerpt || '';

      tempDiv.innerHTML += `
        <div class="search-result-item">
          <div class="result-header">
            ${icon}
            <span class="result-site-badge">${result.siteName}</span>
          </div>
          <h4><a href="${result.url}" target="_blank" rel="noopener">${this.escapeHtml(title)}</a></h4>
          <div class="result-excerpt">${excerpt}</div>
          <div class="result-url">${this.escapeHtml(result.url)}</div>
        </div>
      `;
    });

    // Remove old load more button
    const oldLoadMoreBtn = document.getElementById('load-more-results');
    if (oldLoadMoreBtn) {
      oldLoadMoreBtn.remove();
    }

    // Append new results
    container.appendChild(tempDiv);

    // Add new load more button if needed
    if (end < this.allResults.length) {
      const loadMoreBtn = document.createElement('button');
      loadMoreBtn.id = 'load-more-results';
      loadMoreBtn.className = 'load-more-btn';
      loadMoreBtn.textContent = `Load More Results (${this.allResults.length - end} remaining)`;
      loadMoreBtn.addEventListener('click', this.loadMoreResults);
      container.appendChild(loadMoreBtn);
    }
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
    console.log('DOM loaded, creating MultiSiteSearch instance');
    window.multiSiteSearch = new MultiSiteSearch();
  });
} else {
  console.log('DOM already loaded, creating MultiSiteSearch instance');
  window.multiSiteSearch = new MultiSiteSearch();
}
