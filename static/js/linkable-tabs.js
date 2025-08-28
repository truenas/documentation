/**
 * Linkable Tab Box JavaScript - TrueNAS themed tabs with URL linking
 * Supports dark/light mode, matches TrueNAS styling, and processes Markdown
 * 
 * Version: 3.4 - Updated hover color to #36bdeb
 */

// Suppress SVG coordinate errors globally - only if not already done
if (!window._svgErrorsSuppressed) {
    window._svgErrorsSuppressed = true;
    const originalConsoleError = console.error;
    console.error = function(...args) {
        const message = String(args[0] || '');
        if (message.includes('translate(undefined') || 
            message.includes('Expected number') ||
            message.includes('attribute transform') ||
            message.includes('<g>')) {
            // Suppress SVG coordinate errors completely
            return;
        }
        return originalConsoleError.apply(console, args);
    };
}

if (typeof window.LinkableTabBox === 'undefined') {
class LinkableTabBox {
    constructor(containerId, tabs, options = {}) {
        this.containerId = containerId;
        this.tabs = tabs;
        this.config = {
            defaultTab: options.defaultTab || (tabs.length > 0 ? tabs[0].id : null),
            urlHashEnabled: options.urlHashEnabled !== false,
            theme: options.theme || 'truenas',
            enableMarkdown: options.enableMarkdown !== false,
            collapsible: options.collapsible || false
        };
        
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('Container element not found:', containerId);
            return;
        }

        this.mermaidOriginals = new Map();
        this.init();
    }

    init() {
        this.addStyles();
        this.createTabStructure();
        this.storeMermaidContent();
        this.setupThemeChangeListeners();
        this.addEventListeners();
        this.handleInitialNavigation();
    }

    addStyles() {
        if (document.getElementById('linkable-tabs-styles')) return;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'linkable-tabs-styles';
        styleSheet.textContent = `
            .linkable-tabs-wrapper {
                --truenas-primary: #1194d2;
                --truenas-primary-hover: #36bdeb;
                --truenas-secondary: #71bf44;
                --truenas-inactive: #676767;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                margin: 20px 0;
            }
            
            .linkable-tabs-nav {
                display: flex;
                width: fit-content;
                border-radius: 8px 8px 0 0;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            /* Dark mode support */
            @media (prefers-color-scheme: dark) {
                .linkable-tabs-nav {
                }
            }
            
            .linkable-tabs-nav.collapsed {
                border-bottom: none !important;
                border-radius: 8px !important;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
            }
            
            .linkable-tab-button {
                background: var(--truenas-inactive);
                color: white;
                border: none;
                padding: 15px 25px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
                border-bottom: 3px solid transparent;
                position: relative;
                text-decoration: none;
                display: inline-block;
                border-right: 1px solid var(--accent-color, #dee2e6);
            }
            
            .linkable-tabs-wrapper .linkable-tab-button.first-tab {
                border-top-left-radius: 8px !important;
                border-bottom-left-radius: 8px !important;
            }
            
            .linkable-tabs-wrapper .linkable-tab-button.last-tab {
                border-right: none;
                border-top-right-radius: 8px !important;
                border-bottom-right-radius: 8px !important;
            }
            
            .linkable-tab-button:hover {
                background: var(--truenas-primary-hover);
                color: white;
                transform: translateY(-1px);
            }
            
            .linkable-tab-button.active {
                background: var(--truenas-primary);
                color: white;
                border-bottom-color: var(--truenas-primary);
                font-weight: 600;
                box-shadow: 0 -2px 4px rgba(17, 148, 210, 0.2);
            }
            
            .linkable-tab-content {
                background: var(--body-background, white);
                border: none;
                border-top: none;
                border-radius: 0 0 8px 8px;
                padding: 25px;
                min-height: 200px;
            }
            
            .linkable-tab-pane {
                display: none;
                animation: fadeIn 0.3s ease;
            }
            
            .linkable-tab-pane.active {
                display: block;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Medium width tab overlap fix */
            @media (max-width: 1310px) and (min-width: 1081px) {
                .linkable-tabs-nav {
                    max-width: 100%;
                    flex-wrap: wrap;
                    gap: 4px;
                }
                
                .linkable-tab-button {
                    padding: 12px 18px;
                    font-size: 13px;
                    white-space: nowrap;
                    border-right: none !important;
                    border-radius: 8px !important;
                    margin-bottom: 4px;
                }
                
                .linkable-tabs-wrapper .linkable-tab-button.first-tab,
                .linkable-tabs-wrapper .linkable-tab-button.last-tab {
                    border-radius: 8px !important;
                }
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .linkable-tabs-nav {
                    flex-direction: column;
                    gap: 4px;
                }
                
                .linkable-tab-button {
                    border-right: none !important;
                    border-bottom: none !important;
                    text-align: center;
                    border-radius: 8px !important;
                    margin-bottom: 4px;
                }
                
                .linkable-tab-button:first-child,
                .linkable-tab-button:last-of-type {
                    border-radius: 8px !important;
                }
                
                .linkable-tab-button:last-of-type {
                    margin-bottom: 0;
                }
                
                .linkable-tab-content {
                    padding: 20px 15px;
                }
            }
            
            /* Copy link button */
            .tab-copy-link {
                position: absolute;
                top: 5px;
                right: 5px;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border: none;
                border-radius: 3px;
                padding: 2px 6px;
                font-size: 10px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.2s;
            }
            
            .linkable-tab-button:hover .tab-copy-link {
                opacity: 1;
            }
            
            .tab-copy-link:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            
            /* List styling for markdown content */
            .linkable-tab-content ul,
            .linkable-tab-content ol {
                margin: 16px 0;
                padding-left: 24px;
            }
            
            .linkable-tab-content ul {
                list-style-type: disc;
            }
            
            .linkable-tab-content ol {
                list-style-type: decimal;
            }
            
            .linkable-tab-content li {
                margin: 8px 0;
                line-height: 1.5;
            }
            
            .linkable-tab-content ul ul,
            .linkable-tab-content ol ol,
            .linkable-tab-content ul ol,
            .linkable-tab-content ol ul {
                margin: 4px 0;
            }
            
            .linkable-tab-content ul ul {
                list-style-type: circle;
            }
            
            .linkable-tab-content ul ul ul {
                list-style-type: square;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    createTabStructure() {
        const tabsHTML = `
            <div class="linkable-tabs-wrapper">
                <div class="linkable-tabs-nav" role="tablist">
                    ${this.tabs.map((tab, index) => `
                        <button class="linkable-tab-button ${index === 0 ? 'first-tab' : ''} ${index === this.tabs.length - 1 ? 'last-tab' : ''}" 
                                role="tab" 
                                id="tab-${tab.id}" 
                                data-tab="${tab.id}"
                                aria-controls="pane-${tab.id}"
                                title="${this.config.collapsible ? 'Click to Expand/Collapse' : 'Click to view tab content'}">
                            ${tab.label}
                            <button class="tab-copy-link" 
                                    onclick="copyTabLink('${tab.id}')" 
                                    title="Copy link to this tab">
                                🔗
                            </button>
                        </button>
                    `).join('')}
                </div>
                <div class="linkable-tab-content">
                    ${this.tabs.map(tab => {
                        const cleanContent = this.cleanTabContent(tab.content);
                        return `<div class="linkable-tab-pane" 
                             role="tabpanel" 
                             id="pane-${tab.id}" 
                             aria-labelledby="tab-${tab.id}">
${this.config.enableMarkdown ? this.parseMarkdown(cleanContent) : cleanContent}
                        </div>`;
                    }).join('')}
                </div>
            </div>
        `;

        this.container.innerHTML = tabsHTML;
    }

    cleanTabContent(content) {
        if (!content) return '<p style="color: #6c757d; font-style: italic;">Content for this tab will be added here.</p>';
        
        // Remove problematic HTML entities
        return content.replace(/&NewLine;/g, '');
    }

    storeMermaidContent() {
        // Extract and store original Mermaid content for each tab
        this.tabs.forEach(tab => {
            const mermaidPattern = /{{<\s*mermaid[^>]*>}}\s*([\s\S]*?)\s*{{<\s*\/mermaid\s*>}}/g;
            const mermaidOriginals = [];
            let match;
            
            while ((match = mermaidPattern.exec(tab.content)) !== null) {
                mermaidOriginals.push(match[1].trim());
            }
            
            if (mermaidOriginals.length > 0) {
                this.mermaidOriginals.set(tab.id, mermaidOriginals);
            }
        });

        // Store original content from rendered elements
        const allMermaidElements = this.container.querySelectorAll('.mermaid');
        allMermaidElements.forEach(element => {
            const textContent = element.textContent.trim();
            if (textContent && !textContent.startsWith('#mermaid-')) {
                element.setAttribute('data-original-content', textContent);
            }
        });
    }

    addEventListeners() {
        // Add click listeners to tab buttons
        this.tabs.forEach(tab => {
            const button = document.getElementById(`tab-${tab.id}`);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (this.config.collapsible) {
                        // In collapsible mode, don't update URL when clicking tabs
                        this.toggleTab(tab.id, false);
                    } else {
                        this.switchToTab(tab.id, this.config.urlHashEnabled);
                    }
                });
            }
        });

        // Handle hash changes
        if (this.config.urlHashEnabled) {
            let lastProcessedHash = '';
            
            window.addEventListener('hashchange', () => {
                const currentHash = window.location.hash.substring(1);
                
                // If it's the same hash as last time (case-insensitive), force re-processing
                if (currentHash.toLowerCase() === lastProcessedHash.toLowerCase() && currentHash !== '') {
                    // Force a brief clear and reset to ensure processing
                    const tempPath = window.location.pathname + window.location.search;
                    history.replaceState(null, null, tempPath);
                    
                    setTimeout(() => {
                        window.location.hash = `#${currentHash}`;
                        this.handleNavigation(currentHash);
                        lastProcessedHash = currentHash;
                    }, 50);
                } else {
                    this.handleNavigation(currentHash);
                    lastProcessedHash = currentHash;
                }
            });
            
            // Also handle direct clicks on hash links to ensure immediate processing
            document.addEventListener('click', (e) => {
                if (e.target.matches('a[href^="#"]')) {
                    const targetHash = e.target.getAttribute('href').substring(1);
                    // Small delay to let the hash change, then process
                    setTimeout(() => {
                        this.handleNavigation(targetHash);
                    }, 10);
                }
            });
        }
    }

    handleInitialNavigation() {
        if (this.config.collapsible) {
            // In collapsible mode, check for hash first
            if (this.config.urlHashEnabled && window.location.hash) {
                const hash = window.location.hash.substring(1);
                this.handleNavigation(hash);
            } else {
                // Start with all tabs collapsed if no hash
                this.collapseAllTabs();
            }
        } else if (this.config.urlHashEnabled) {
            const hash = window.location.hash.substring(1);
            this.handleNavigation(hash);
        } else {
            this.switchToTab(this.config.defaultTab, false);
        }
    }

    handleNavigation(hash) {
        
        if (!hash) {
            if (this.config.collapsible) {
                this.collapseAllTabs();
            } else {
                this.switchToTab(this.config.defaultTab, false);
            }
            return;
        }

        // Check if hash matches a tab ID directly (case-insensitive)
        const directTabMatch = this.tabs.find(t => t.id.toLowerCase() === hash.toLowerCase());
        if (directTabMatch) {
            if (this.config.collapsible) {
                this.expandTab(directTabMatch.id, false);
            } else {
                this.switchToTab(directTabMatch.id, false);
            }
            return;
        }

        // Check if hash matches a header inside any tab content
        const headerTabMatch = this.findTabContainingHeader(hash);
        if (headerTabMatch) {
            if (this.config.collapsible) {
                // FORCE expansion even if tab appears active
                this.forceExpandTabForHash(headerTabMatch.tabId);
            } else {
                this.switchToTab(headerTabMatch.tabId, false);
            }
            this.waitForTabActivation(headerTabMatch.tabId, () => {
                this.scrollToHeaderInTab(hash, headerTabMatch.tabId);
            });
            return;
        }

        // Default behavior if no match found
        if (this.config.collapsible) {
            this.collapseAllTabs();
        } else {
            this.switchToTab(this.config.defaultTab, false);
        }
    }

    switchToTab(tabId, updateUrl = true) {
        console.log(`[DEBUG] Switching to tab: ${tabId}`);
        
        // Hide all tab panes and buttons
        this.tabs.forEach(tab => {
            const pane = document.getElementById(`pane-${tab.id}`);
            const button = document.getElementById(`tab-${tab.id}`);
            if (pane) pane.classList.remove('active');
            if (button) button.classList.remove('active');
        });

        // Show selected tab
        const selectedPane = document.getElementById(`pane-${tabId}`);
        const selectedButton = document.getElementById(`tab-${tabId}`);
        
        if (selectedPane && selectedButton) {
            console.log(`[DEBUG] Activating tab pane: ${tabId}`);
            selectedPane.classList.add('active');
            selectedButton.classList.add('active');
            
            // Force layout recalculation
            selectedPane.offsetHeight;
            
            console.log(`[DEBUG] Tab pane ${tabId} activated, dimensions: ${selectedPane.getBoundingClientRect().width}x${selectedPane.getBoundingClientRect().height}`);
            
            // Execute any scripts in the newly shown tab content
            this.executeTabScripts(selectedPane);
            
            // Update URL hash if enabled
            if (updateUrl && this.config.urlHashEnabled) {
                history.pushState(null, null, `#${tabId}`);
            }
        } else {
            console.warn(`[DEBUG] Could not find tab elements for ${tabId} - pane: ${!!selectedPane}, button: ${!!selectedButton}`);
        }
    }

    toggleTab(tabId, updateUrl = false) {
        const button = document.getElementById(`tab-${tabId}`);
        const pane = document.getElementById(`pane-${tabId}`);
        // Target the content container within this specific instance
        const content = this.container.querySelector('.linkable-tab-content');
        const nav = this.container.querySelector('.linkable-tabs-nav');
        
        if (!button || !pane || !content || !nav) return;

        const isCurrentlyActive = button.classList.contains('active');
        
        if (isCurrentlyActive) {
            // Collapse the active tab
            button.classList.remove('active');
            pane.classList.remove('active');
            // Hide the entire content container
            content.style.display = 'none';
            // Style the nav for collapsed state
            nav.classList.add('collapsed');
        } else {
            // Collapse all other tabs first
            this.collapseAllTabs();
            
            // Then expand this tab
            button.classList.add('active');
            pane.classList.add('active');
            // Show the content container
            content.style.display = 'block';
            // Remove collapsed styling from nav
            nav.classList.remove('collapsed');
            
            // Execute any scripts in the newly shown tab content
            this.executeTabScripts(pane);
        }
    }

    collapseAllTabs() {
        // Target the content container within this specific instance
        const content = this.container.querySelector('.linkable-tab-content');
        const nav = this.container.querySelector('.linkable-tabs-nav');
        
        if (content) {
            content.style.display = 'none';
        }
        if (nav) {
            nav.classList.add('collapsed');
        }
        
        this.tabs.forEach(tab => {
            const pane = document.getElementById(`pane-${tab.id}`);
            const button = document.getElementById(`tab-${tab.id}`);
            if (pane) pane.classList.remove('active');
            if (button) button.classList.remove('active');
        });
    }

    expandTab(tabId, updateUrl = false) {
        // Similar to toggleTab but always expands (for deep linking)
        const button = document.getElementById(`tab-${tabId}`);
        const pane = document.getElementById(`pane-${tabId}`);
        const content = this.container.querySelector('.linkable-tab-content');
        const nav = this.container.querySelector('.linkable-tabs-nav');
        
        if (!button || !pane || !content || !nav) return;

        // Collapse all other tabs first
        this.collapseAllTabs();
        
        // Then expand this tab
        button.classList.add('active');
        pane.classList.add('active');
        content.style.display = 'block';
        nav.classList.remove('collapsed');
        
        // Execute any scripts in the newly shown tab content
        this.executeTabScripts(pane);
        
        // Scroll to the tab navigation after expansion (with longer delay for proper rendering)
        setTimeout(() => {
            const rect = nav.getBoundingClientRect();
            const offsetY = window.pageYOffset + rect.top - 80;
            window.scrollTo({ top: Math.max(0, offsetY), behavior: 'smooth' });
        }, 200);
        
        // Update URL if requested (typically false for deep linking)
        if (updateUrl && this.config.urlHashEnabled) {
            history.pushState(null, null, `#${tabId}`);
        }
    }

    forceExpandTabForHash(tabId) {
        
        const button = document.getElementById(`tab-${tabId}`);
        const pane = document.getElementById(`pane-${tabId}`);
        const content = this.container.querySelector('.linkable-tab-content');
        const nav = this.container.querySelector('.linkable-tabs-nav');
        
        if (!button || !pane || !content || !nav) {
            return;
        }

        // ALWAYS force collapse everything first
        this.collapseAllTabs();
        
        // Small delay then force expand
        setTimeout(() => {
            button.classList.add('active');
            pane.classList.add('active');
            content.style.display = 'block';
            nav.classList.remove('collapsed');
            
            // Execute any scripts in the newly shown tab content
            this.executeTabScripts(pane);
        }, 50);
    }

    executeTabScripts(tabPane) {
        
        // Handle Mermaid diagrams
        this.initializeMermaidDiagrams(tabPane);
        
        // Execute other scripts
        this.executeInlineScripts(tabPane);
        
        // Call component initializers for known components
        this.callComponentInitializers(tabPane);
        
        // CRITICAL: Initialize scroll controls when upgrade-paths tab becomes active
        if (tabPane.id === 'pane-upgrade-paths') {
            // Give extra time for Mermaid rendering to complete
            setTimeout(() => {
                if (typeof window.reinitializeScrollControls === 'function') {
                    window.reinitializeScrollControls();
                }
            }, 1000);
        }
    }

    async initializeMermaidDiagrams(tabPane) {
        const mermaidElements = tabPane.querySelectorAll('.mermaid');
        if (mermaidElements.length === 0) return;
        
        // Remove all existing Mermaid elements to start fresh
        document.querySelectorAll('.mermaid, .mermaid-processed').forEach(el => {
            if (!tabPane.contains(el)) {
                el.remove();
            }
        });

        // Prevent multiple simultaneous initializations
        const tabId = tabPane.id.replace('pane-', '');
        if (this.mermaidInitializing && this.mermaidInitializing.has(tabId)) {
            return;
        }
        
        if (!this.mermaidInitializing) {
            this.mermaidInitializing = new Set();
        }
        this.mermaidInitializing.add(tabId);

        try {
            // Store original content before processing
            this.storeMermaidElementContent(mermaidElements, tabPane);

            // Initialize Mermaid library if needed
            if (typeof mermaid === 'undefined') {
                await this.loadMermaidLibrary();
            }

            // Render diagrams
            await this.renderMermaidDiagrams(mermaidElements);
            
            // After Mermaid rendering, check for scroll containers and scroll them
            this.handlePostMermaidScroll(tabPane);
        } finally {
            this.mermaidInitializing.delete(tabId);
        }
    }

    storeMermaidElementContent(elements, tabPane) {
        const tabId = tabPane.id.replace('pane-', '');
        const storedOriginals = this.mermaidOriginals.get(tabId);

        elements.forEach((element, index) => {
            if (element.hasAttribute('data-original-content')) return;

            let originalContent = null;

            // Try stored originals first
            if (storedOriginals && storedOriginals[index]) {
                originalContent = storedOriginals[index];
            } else {
                // Fallback to text content if not corrupted
                const textContent = element.textContent.trim();
                if (textContent && !textContent.startsWith('#mermaid-')) {
                    originalContent = textContent;
                }
            }

            if (originalContent) {
                element.setAttribute('data-original-content', originalContent);
            } else {
                console.warn(`Could not find original content for diagram ${index + 1}`);
            }
        });
    }

    async loadMermaidLibrary() {
        return new Promise((resolve, reject) => {
            // Ensure DOM is fully loaded before adding Mermaid script
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.loadMermaidScript(resolve, reject);
                });
            } else {
                this.loadMermaidScript(resolve, reject);
            }
        });
    }
    
    loadMermaidScript(resolve, reject) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
        script.async = true; // Load asynchronously to avoid blocking
        script.onload = () => {
            if (typeof mermaid !== 'undefined') {
                // Small delay to ensure Mermaid is fully initialized
                setTimeout(() => {
                    this.initializeMermaidTheme();
                    resolve();
                }, 50);
            } else {
                reject(new Error('Mermaid failed to load'));
            }
        };
        script.onerror = reject;
        document.head.appendChild(script);
    }

    initializeMermaidTheme() {
        // Detect current theme mode
        const isDarkMode = this.isDarkMode();
        
        // Define theme variables for light and dark modes
        const lightTheme = {
            primaryColor: '#ffffff',
            primaryTextColor: '#222222',
            primaryBorderColor: '#0095d5',
            lineColor: '#AEADAE',
            sectionBkColor: '#f8f9fa',
            altSectionBkColor: '#ffffff',
            gridColor: '#e9ecef',
            secondaryColor: '#31BeeC',
            secondaryBorderColor: '#0095d5',
            secondaryTextColor: '#222222',
            tertiaryColor: '#f0f8ff',
            background: '#ffffff',
            mainBkg: '#ffffff',
            secondBkg: '#f8f9fa',
            tertiaryTextColor: '#222222'
        };

        const darkTheme = {
            primaryColor: '#ffffff',
            primaryTextColor: '#222222',
            primaryBorderColor: '#0095d5',
            lineColor: '#ffffff',
            sectionBkColor: '#2a2a2a',
            altSectionBkColor: '#1a1a1a',
            gridColor: '#444444',
            secondaryColor: '#31BeeC',
            secondaryBorderColor: '#0095d5',
            secondaryTextColor: '#ffffff',
            tertiaryColor: '#1e1e1e',
            background: '#1a1a1a',
            mainBkg: '#ffffff',
            secondBkg: '#2a2a2a',
            tertiaryTextColor: '#ffffff'
        };

        console.log('[DEBUG] Initializing Mermaid with startOnLoad: false');
        
        // CRITICAL: Disable any global mermaid initialization and take full control
        if (typeof mermaid !== 'undefined' && mermaid.mermaidAPI) {
            // Reset any existing configuration
            mermaid.mermaidAPI.reset();
        }
        
        // Initialize Mermaid with appropriate theme and STRICT control
        mermaid.initialize({ 
            startOnLoad: false,
            theme: 'base',
            themeVariables: isDarkMode ? darkTheme : lightTheme,
            suppressErrorRendering: true // Prevent theme errors from corrupting charts
        });
    }

    isDarkMode() {
        // Check for manual theme selection first
        const root = document.documentElement;
        const colorTheme = root.getAttribute('color-theme');
        
        if (colorTheme === 'dark') return true;
        if (colorTheme === 'light') return false;
        
        // Fall back to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setupThemeChangeListeners() {
        // Listen for manual theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'color-theme') {
                    this.handleThemeChange();
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['color-theme']
        });

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                this.handleThemeChange();
            });
        }
    }

    async handleThemeChange() {
        // Only reinitialize if Mermaid is already loaded
        if (typeof mermaid !== 'undefined') {
            // Reinitialize Mermaid with new theme
            this.initializeMermaidTheme();
            
            // Re-render all existing Mermaid diagrams
            const allMermaidElements = this.container.querySelectorAll('.mermaid');
            if (allMermaidElements.length > 0) {
                await this.renderMermaidDiagrams(allMermaidElements);
            }
        }
    }

    async renderMermaidDiagrams(elements) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            await this.renderSingleMermaidDiagram(element, i);
        }
    }

    handlePostMermaidScroll(tabPane) {
        // Look for scroll containers that need to be scrolled to the right
        const scrollContainers = tabPane.querySelectorAll('.scroll-container');
        if (scrollContainers.length > 0) {
            
            // Add a small delay to ensure the DOM is fully updated
            setTimeout(() => {
                scrollContainers.forEach(container => {
                    if (container.scrollWidth > container.clientWidth) {
                        container.scrollLeft = container.scrollWidth;
                    }
                    
                    // Add drag scroll functionality if not already added
                    if (!container.hasAttribute('data-drag-initialized')) {
                        this.addDragScrollToContainer(container);
                        container.setAttribute('data-drag-initialized', 'true');
                    }
                });
            }, 100);
        }
    }

    addDragScrollToContainer(scrollContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
            scrollContainer.style.userSelect = 'none'; // Prevent text selection
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
            scrollContainer.style.userSelect = ''; // Re-enable text selection
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
            scrollContainer.style.userSelect = ''; // Re-enable text selection
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scrolling speed
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    async renderSingleMermaidDiagram(element, index) {
        // Check if already rendered
        if (element.hasAttribute('data-rendered-once') && element.innerHTML.includes('<svg')) {
            return;
        }

        const originalContent = element.getAttribute('data-original-content');
        if (!originalContent) return;

        // Clear previous processing
        element.removeAttribute('data-processed');
        element.classList.remove('mermaid-processed');
        element.innerHTML = originalContent;

        try {
            // Wait for stable layout
            await this.waitForStableLayout(element);

            // Initialize theme
            if (typeof this.initializeMermaidTheme === 'function') {
                this.initializeMermaidTheme();
            }
            
            // Render with Mermaid
            if (mermaid.render) {
                const id = `mermaid-diagram-${Date.now()}-${index}`;
                const { svg } = await mermaid.render(id, originalContent);
                element.innerHTML = svg;
                element.setAttribute('data-rendered-once', 'true');
            } else {
                mermaid.init(undefined, element);
                element.setAttribute('data-rendered-once', 'true');
            }
        } catch (error) {
            element.innerHTML = '<div style="color: red; font-style: italic;">Mermaid diagram failed to load</div>';
        }
    }

    async waitForStableLayout(element) {
        // First ensure the tab pane is visible and active
        await this.waitForTabPaneVisibility(element);
        
        // Then wait for CSS layout completion
        await this.waitForCSSLayoutComplete();
        
        const maxRetries = 15;
        const baseDelay = 100;
        
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            // Force visibility and proper display
            const originalDisplay = element.style.display;
            element.style.display = 'block';
            element.style.visibility = 'visible';
            
            // Force browser to recalculate layout
            element.offsetHeight; // Trigger layout
            
            // Check element dimensions
            const elementRect = element.getBoundingClientRect();
            
            // Check parent container dimensions
            const container = element.closest('.chart-wrapper') || element.closest('.linkable-tab-pane') || element.parentElement;
            const containerRect = container ? container.getBoundingClientRect() : { width: 0, height: 0 };
            
            // More comprehensive validation including tab pane state
            const tabPane = element.closest('.linkable-tab-pane');
            const isTabActive = tabPane ? tabPane.classList.contains('active') : true;
            const isElementVisible = elementRect.width > 0 && elementRect.height > 0;
            const isContainerVisible = containerRect.width > 0 && containerRect.height > 0;
            const hasValidLayout = element.offsetParent !== null;
            const hasComputedStyle = window.getComputedStyle(element).display !== 'none';
            
            if (isTabActive && isElementVisible && isContainerVisible && hasValidLayout && hasComputedStyle) {
                // Wait for layout to stabilize and verify consistency
                await new Promise(resolve => setTimeout(resolve, baseDelay));
                
                // Force another layout recalculation
                element.offsetHeight;
                const recheckRect = element.getBoundingClientRect();
                
                // Verify dimensions are still stable
                if (recheckRect.width > 0 && recheckRect.height > 0 && 
                    Math.abs(recheckRect.width - elementRect.width) < 1 &&
                    Math.abs(recheckRect.height - elementRect.height) < 1) {
                    return; // Layout is stable
                }
            }
            
            // Progressive delay for hash loads or retries
            const delay = window.location.hash ? baseDelay * (attempt + 1) : baseDelay;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        console.warn(`Layout did not stabilize for Mermaid element after ${maxRetries} attempts`);
    }

    async waitForTabPaneVisibility(element) {
        const tabPane = element.closest('.linkable-tab-pane');
        if (!tabPane) return; // Not in a tab pane
        
        const maxWait = 20; // 2 seconds total
        let attempts = 0;
        
        while (attempts < maxWait) {
            if (tabPane.classList.contains('active') && 
                tabPane.offsetParent !== null &&
                tabPane.getBoundingClientRect().width > 0) {
                return; // Tab pane is visible and active
            }
            
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }
        
        console.warn('Tab pane did not become visible within timeout');
    }

    async waitForCSSLayoutComplete() {
        return new Promise(resolve => {
            if (document.readyState === 'complete') {
                // Use requestAnimationFrame to ensure layout calculations are done
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        resolve();
                    });
                });
            } else {
                window.addEventListener('load', () => {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            resolve();
                        });
                    });
                });
            }
        });
    }

    executeScriptSafely(scriptContent, tabPane) {
        // Create a safe execution context that prevents document.write violations
        const originalWrite = document.write;
        const originalWriteln = document.writeln;
        
        // Temporarily override document.write methods to prevent violations
        document.write = function(content) {
            console.warn('document.write() intercepted and ignored to prevent violations');
        };
        document.writeln = function(content) {
            console.warn('document.writeln() intercepted and ignored to prevent violations');
        };
        
        try {
            eval(scriptContent);
        } catch (error) {
            console.warn('Error in safe script execution:', error);
        } finally {
            // Restore original methods
            document.write = originalWrite;
            document.writeln = originalWriteln;
        }
    }

    executeInlineScripts(tabPane) {
        const scripts = tabPane.querySelectorAll('script');
        scripts.forEach(script => {
            if (script.src) {
                // External script
                const newScript = document.createElement('script');
                newScript.src = script.src;
                document.head.appendChild(newScript);
            } else {
                // Inline script
                try {
                    const scriptContent = script.textContent || script.innerHTML;
                    
                    if (scriptContent.includes('<script') || scriptContent.includes('</script')) {
                        console.warn('Skipping script with nested script tags');
                        return;
                    }
                    
                    if (scriptContent.trim()) {
                        // Decode HTML entities
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = scriptContent;
                        const decodedScript = tempDiv.textContent || tempDiv.innerText;
                        
                        // Prevent document.write violations by creating a safe execution context
                        this.executeScriptSafely(decodedScript, tabPane);
                    }
                } catch (error) {
                    console.warn('Error executing tab script:', error);
                }
            }
        });
        
        // Call specific initialization functions for known components
        this.callComponentInitializers(tabPane);
    }

    callComponentInitializers(tabPane) {
        // Check if this tab contains a CSV changelog table and initialize it
        const csvContainer = tabPane.querySelector('#csv-changelog-container');
        if (csvContainer && typeof window.initializeChangelogTable === 'function') {
            // Only initialize if not already initialized
            if (!csvContainer.hasAttribute('data-initialized')) {
                csvContainer.setAttribute('data-initialized', 'true');
                setTimeout(() => {
                    window.initializeChangelogTable();
                }, 300); // Increased timeout to ensure tab is fully active
            } else {
            }
        }
    }

    findTabContainingHeader(headerId) {
        if (!headerId) return null;
        
        
        for (const tab of this.tabs) {
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = tab.content;
            
            const headers = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
            
            for (const header of headers) {
                const headerText = (header.textContent || header.innerText).trim();
                const potentialId = this.generateHeaderId(headerText);
                
                
                if (potentialId === headerId || header.id === headerId) {
                    return { tabId: tab.id, headerId: headerId };
                }
            }
        }
        
        return null;
    }

    generateHeaderId(headerText) {
        return headerText.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }

    scrollToHeaderInTab(headerId, tabId) {
        
        const targetTabPane = document.getElementById(`pane-${tabId}`);
        if (!targetTabPane) {
            return;
        }
        

        let targetHeader = targetTabPane.querySelector(`#${headerId}`);
        
        if (!targetHeader) {
            const headers = targetTabPane.querySelectorAll('h1, h2, h3, h4, h5, h6');
            
            for (const header of headers) {
                const headerText = (header.textContent || header.innerText).trim();
                const generatedId = this.generateHeaderId(headerText);
                
                
                if (generatedId === headerId) {
                    targetHeader = header;
                    header.id = headerId;
                    break;
                }
            }
        }

        if (targetHeader) {
            
            const headerRect = targetHeader.getBoundingClientRect();
            const absoluteTop = headerRect.top + window.pageYOffset;
            const offset = 150;
            
            
            window.scrollTo({
                top: Math.max(0, absoluteTop - offset),
                behavior: 'smooth'
            });
        } else {
            
            // Debug: List all headers in the target tab
            const allHeaders = targetTabPane.querySelectorAll('h1, h2, h3, h4, h5, h6');
            allHeaders.forEach(h => {
                const text = (h.textContent || h.innerText).trim();
                const id = this.generateHeaderId(text);
            });
        }
    }

    waitForTabActivation(tabId, callback) {
        const maxAttempts = 20;
        let attempts = 0;
        
        const checkTabActive = () => {
            attempts++;
            const targetTabPane = document.getElementById(`pane-${tabId}`);
            const activeTabPane = document.querySelector('.linkable-tab-pane.active');
            
            
            if (targetTabPane && targetTabPane.classList.contains('active') && activeTabPane?.id === `pane-${tabId}`) {
                callback();
            } else if (attempts < maxAttempts) {
                setTimeout(checkTabActive, 50);
            } else {
                console.warn(`Timeout waiting for tab ${tabId} to become active`);
                callback(); // Try anyway
            }
        };
        
        checkTabActive();
    }

    parseMarkdown(markdown) {
        if (!markdown) return '';
        return this.markdownParser.parse(markdown);
    }

    get markdownParser() {
        if (!this._markdownParser) {
            this._markdownParser = new MarkdownParser();
        }
        return this._markdownParser;
    }
}

class MarkdownParser {
    parse(markdown) {
        let html = markdown;
        
        // Protect code blocks
        const codeBlocks = [];
        html = html.replace(/```([\s\S]*?)```/g, (match, content) => {
            const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
            codeBlocks.push(`<pre><code>${content.trim()}</code></pre>`);
            return placeholder;
        });
        
        // Headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Bold and italic
        html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        
        // Lists
        html = this.processLists(html);
        
        // Blockquotes
        html = html.replace(/^> (.+$)/gim, '<blockquote>$1</blockquote>');
        
        // Horizontal rules
        html = html.replace(/^---$/gim, '<hr>');
        
        // Paragraphs
        html = html.replace(/\n\n/g, '</p><p>');
        html = '<p>' + html + '</p>';
        
        // Clean up
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/<p>(<h[1-6]>)/g, '$1');
        html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
        html = html.replace(/<p>(<ul>|<ol>|<blockquote>|<pre>|<hr>)/g, '$1');
        html = html.replace(/(<\/ul>|<\/ol>|<\/blockquote>|<\/pre>|<hr>)<\/p>/g, '$1');
        
        // Restore code blocks
        codeBlocks.forEach((block, index) => {
            html = html.replace(`__CODE_BLOCK_${index}__`, block);
        });
        
        return html;
    }

    processLists(html) {
        const lines = html.split('\n');
        const result = [];
        let currentList = null;
        let listStack = [];
        
        for (const line of lines) {
            const unorderedMatch = line.match(/^(\s*)[\*\-\+]\s+(.+)$/);
            const orderedMatch = line.match(/^(\s*)\d+\.\s+(.+)$/);
            
            if (unorderedMatch || orderedMatch) {
                const indent = (unorderedMatch || orderedMatch)[1].length;
                const content = (unorderedMatch || orderedMatch)[2];
                const listType = unorderedMatch ? 'ul' : 'ol';
                
                if (currentList === null) {
                    result.push(`<${listType}>`);
                    listStack = [{ type: listType, indent: indent }];
                    currentList = listType;
                } else {
                    const currentIndent = listStack[listStack.length - 1].indent;
                    
                    if (indent > currentIndent) {
                        result.push(`<${listType}>`);
                        listStack.push({ type: listType, indent: indent });
                    } else if (indent < currentIndent) {
                        while (listStack.length > 0 && listStack[listStack.length - 1].indent > indent) {
                            const closingList = listStack.pop();
                            result.push(`</${closingList.type}>`);
                        }
                        
                        if (listStack.length === 0 || listStack[listStack.length - 1].type !== listType) {
                            if (listStack.length > 0) {
                                const closingList = listStack.pop();
                                result.push(`</${closingList.type}>`);
                            }
                            result.push(`<${listType}>`);
                            listStack.push({ type: listType, indent: indent });
                        }
                    } else if (currentList !== listType) {
                        const closingList = listStack.pop();
                        result.push(`</${closingList.type}>`);
                        result.push(`<${listType}>`);
                        listStack.push({ type: listType, indent: indent });
                    }
                }
                
                result.push(`<li>${content}</li>`);
                currentList = listType;
            } else {
                if (currentList !== null) {
                    while (listStack.length > 0) {
                        const closingList = listStack.pop();
                        result.push(`</${closingList.type}>`);
                    }
                    currentList = null;
                }
                result.push(line);
            }
        }
        
        // Close remaining lists
        while (listStack.length > 0) {
            const closingList = listStack.pop();
            result.push(`</${closingList.type}>`);
        }
        
        return result.join('\n');
    }
}

// Utility functions for backward compatibility
function createLinkableTabs(containerId, tabs, options = {}) {
    return new LinkableTabBox(containerId, tabs, options);
}

function copyTabLink(tabId) {
    const url = `${window.location.origin}${window.location.pathname}#${tabId}`;
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(() => {
            showCopyFeedback();
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showCopyFeedback();
        } catch (err) {
            console.error('Failed to copy link');
        }
        document.body.removeChild(textArea);
    }
}

function showCopyFeedback(message = 'Link copied!') {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--truenas-secondary, #71bf44);
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Add animation styles
if (!document.getElementById('copy-feedback-styles')) {
    const feedbackStyles = document.createElement('style');
    feedbackStyles.id = 'copy-feedback-styles';
    feedbackStyles.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(feedbackStyles);
}

// Global exports
window.createLinkableTabs = createLinkableTabs;
window.LinkableTabBox = LinkableTabBox;
} // End of LinkableTabBox class definition guard