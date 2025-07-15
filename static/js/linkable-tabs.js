/**
 * Linkable Tab Box JavaScript - TrueNAS themed tabs with URL linking
 * Supports dark/light mode, matches TrueNAS styling, and processes Markdown
 * 
 * Version: 3.1 - Fixed auto-scroll functionality
 */

class LinkableTabBox {
    constructor(containerId, tabs, options = {}) {
        this.containerId = containerId;
        this.tabs = tabs;
        this.config = {
            defaultTab: options.defaultTab || (tabs.length > 0 ? tabs[0].id : null),
            urlHashEnabled: options.urlHashEnabled !== false,
            theme: options.theme || 'truenas',
            enableMarkdown: options.enableMarkdown !== false
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
        this.addEventListeners();
        this.handleInitialNavigation();
    }

    addStyles() {
        if (document.getElementById('linkable-tabs-styles')) return;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'linkable-tabs-styles';
        styleSheet.textContent = `
            .linkable-tabs-wrapper {
                --truenas-primary: #0095d5;
                --truenas-primary-hover: #0084c0;
                --truenas-secondary: #71bf44;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                margin: 20px 0;
            }
            
            .linkable-tabs-nav {
                display: flex;
                border-bottom: 2px solid var(--accent-color, #dee2e6);
                background-color: var(--body-background, white);
                border-radius: 8px 8px 0 0;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .linkable-tab-button {
                background: var(--accent-color-lite, #f8f9fa);
                color: var(--body-font-color, #333);
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
            
            .linkable-tab-button:last-child {
                border-right: none;
            }
            
            .linkable-tab-button:hover {
                background: var(--accent-color, #e9ecef);
                color: var(--truenas-primary);
                transform: translateY(-1px);
            }
            
            .linkable-tab-button.active {
                background: var(--body-background, white);
                color: var(--truenas-primary);
                border-bottom-color: var(--truenas-primary);
                font-weight: 600;
                box-shadow: 0 -2px 4px rgba(0, 149, 213, 0.2);
            }
            
            .linkable-tab-content {
                background: var(--body-background, white);
                border: 1px solid var(--accent-color, #dee2e6);
                border-top: none;
                border-radius: 0 0 8px 8px;
                padding: 25px;
                min-height: 200px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
            
            /* Responsive design */
            @media (max-width: 768px) {
                .linkable-tabs-nav {
                    flex-direction: column;
                }
                
                .linkable-tab-button {
                    border-right: none;
                    border-bottom: 1px solid var(--accent-color, #dee2e6);
                    text-align: center;
                }
                
                .linkable-tab-button:last-child {
                    border-bottom: none;
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
                background: var(--truenas-primary);
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
                background: var(--truenas-primary-hover);
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
                    ${this.tabs.map(tab => `
                        <button class="linkable-tab-button" 
                                role="tab" 
                                id="tab-${tab.id}" 
                                data-tab="${tab.id}"
                                aria-controls="pane-${tab.id}">
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
                    this.switchToTab(tab.id, this.config.urlHashEnabled);
                });
            }
        });

        // Handle hash changes
        if (this.config.urlHashEnabled) {
            window.addEventListener('hashchange', () => {
                this.handleNavigation(window.location.hash.substring(1));
            });
        }
    }

    handleInitialNavigation() {
        if (this.config.urlHashEnabled) {
            const hash = window.location.hash.substring(1);
            this.handleNavigation(hash);
        } else {
            this.switchToTab(this.config.defaultTab, false);
        }
    }

    handleNavigation(hash) {
        if (!hash) {
            this.switchToTab(this.config.defaultTab, false);
            return;
        }

        // Check if hash matches a tab ID directly
        const directTabMatch = this.tabs.find(t => t.id === hash);
        if (directTabMatch) {
            this.switchToTab(hash, false);
            return;
        }

        // Check if hash matches a header inside any tab content
        const headerTabMatch = this.findTabContainingHeader(hash);
        if (headerTabMatch) {
            console.log(`Found header "${hash}" in tab "${headerTabMatch.tabId}", switching and scrolling`);
            this.switchToTab(headerTabMatch.tabId, false);
            this.waitForTabActivation(headerTabMatch.tabId, () => {
                console.log(`Tab "${headerTabMatch.tabId}" is now active, scrolling to header "${hash}"`);
                this.scrollToHeaderInTab(hash, headerTabMatch.tabId);
            });
            return;
        }

        // Default to first tab if no match found
        this.switchToTab(this.config.defaultTab, false);
    }

    switchToTab(tabId, updateUrl = true) {
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
            selectedPane.classList.add('active');
            selectedButton.classList.add('active');
            
            // Execute any scripts in the newly shown tab content
            this.executeTabScripts(selectedPane);
            
            // Update URL hash if enabled
            if (updateUrl && this.config.urlHashEnabled) {
                history.pushState(null, null, `#${tabId}`);
            }
        }
    }

    executeTabScripts(tabPane) {
        console.log('=== TAB SCRIPT EXECUTION v3.1 ===');
        
        // Handle Mermaid diagrams
        this.initializeMermaidDiagrams(tabPane);
        
        // Execute other scripts
        this.executeInlineScripts(tabPane);
    }

    async initializeMermaidDiagrams(tabPane) {
        const mermaidElements = tabPane.querySelectorAll('.mermaid');
        if (mermaidElements.length === 0) return;

        console.log(`Found ${mermaidElements.length} Mermaid elements in tab`);

        // Store original content before processing
        this.storeMermaidElementContent(mermaidElements, tabPane);

        // Initialize Mermaid library if needed
        if (typeof mermaid === 'undefined') {
            await this.loadMermaidLibrary();
        }

        // Render diagrams
        await this.renderMermaidDiagrams(mermaidElements);
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
                console.log(`Stored original content for diagram ${index + 1}:`, originalContent.substring(0, 100) + '...');
            } else {
                console.warn(`Could not find original content for diagram ${index + 1}`);
            }
        });
    }

    async loadMermaidLibrary() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
            script.onload = () => {
                console.log('Mermaid loaded dynamically');
                if (typeof mermaid !== 'undefined') {
                    mermaid.initialize({ 
                        startOnLoad: false,
                        theme: 'default',
                        themeVariables: {
                            primaryColor: '#0095d5',
                            primaryTextColor: '#000',
                            primaryBorderColor: '#0095d5',
                            lineColor: '#333',
                            sectionBkColor: '#f8f9fa',
                            altSectionBkColor: '#ffffff',
                            gridColor: '#e9ecef'
                        }
                    });
                    resolve();
                } else {
                    reject(new Error('Mermaid failed to load'));
                }
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async renderMermaidDiagrams(elements) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            await this.renderSingleMermaidDiagram(element, i);
        }
    }

    async renderSingleMermaidDiagram(element, index) {
        const originalContent = element.getAttribute('data-original-content');
        if (!originalContent) {
            console.warn(`No original content found for diagram ${index + 1}`);
            return;
        }

        // Clear previous processing
        element.removeAttribute('data-processed');
        element.classList.remove('mermaid-processed');
        element.innerHTML = originalContent;

        // Force visibility during rendering
        const originalDisplay = element.style.display;
        element.style.display = 'block';
        element.style.visibility = 'visible';

        try {
            if (mermaid.render) {
                const id = `mermaid-diagram-${Date.now()}-${index}`;
                const { svg } = await mermaid.render(id, originalContent);
                element.innerHTML = svg;
                console.log(`Mermaid diagram ${index + 1} rendered successfully`);
            } else {
                mermaid.init(undefined, element);
                console.log(`Mermaid diagram ${index + 1} initialized successfully`);
            }
        } catch (error) {
            console.error(`Error rendering Mermaid diagram ${index + 1}:`, error);
            element.innerHTML = '<div style="color: red; font-style: italic;">Mermaid diagram failed to load</div>';
        } finally {
            element.style.display = originalDisplay;
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
                        
                        eval(decodedScript);
                    }
                } catch (error) {
                    console.warn('Error executing tab script:', error);
                }
            }
        });
    }

    findTabContainingHeader(headerId) {
        if (!headerId) return null;
        
        console.log(`Searching for header ID: ${headerId}`);
        
        for (const tab of this.tabs) {
            console.log(`Checking tab: ${tab.id} (${tab.label})`);
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = tab.content;
            
            const headers = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
            console.log(`Found ${headers.length} headers in tab ${tab.id}`);
            
            for (const header of headers) {
                const headerText = (header.textContent || header.innerText).trim();
                const potentialId = this.generateHeaderId(headerText);
                
                console.log(`  Header: "${headerText}" → ID: "${potentialId}"`);
                
                if (potentialId === headerId || header.id === headerId) {
                    console.log(`Match found in tab ${tab.id}!`);
                    return { tabId: tab.id, headerId: headerId };
                }
            }
        }
        
        console.log('No matching header found in any tab');
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
        console.log(`Attempting to scroll to header "${headerId}" in tab "${tabId}"`);
        
        const targetTabPane = document.getElementById(`pane-${tabId}`);
        if (!targetTabPane) {
            console.log(`Tab pane not found: pane-${tabId}`);
            return;
        }
        
        console.log(`Tab pane found: ${targetTabPane.id}`);

        let targetHeader = targetTabPane.querySelector(`#${headerId}`);
        console.log(`Header found by ID: ${targetHeader}`);
        
        if (!targetHeader) {
            console.log(`Searching for header by text content...`);
            const headers = targetTabPane.querySelectorAll('h1, h2, h3, h4, h5, h6');
            console.log(`Found ${headers.length} headers in tab`);
            
            for (const header of headers) {
                const headerText = (header.textContent || header.innerText).trim();
                const generatedId = this.generateHeaderId(headerText);
                
                console.log(`Header: "${headerText}" → Generated ID: "${generatedId}"`);
                
                if (generatedId === headerId) {
                    targetHeader = header;
                    header.id = headerId;
                    console.log(`Match found! Setting header ID to "${headerId}"`);
                    break;
                }
            }
        }

        if (targetHeader) {
            console.log(`Target header found, scrolling to:`, targetHeader);
            
            const headerRect = targetHeader.getBoundingClientRect();
            const absoluteTop = headerRect.top + window.pageYOffset;
            const offset = 150;
            
            console.log(`Scrolling to position: ${absoluteTop - offset}`);
            
            window.scrollTo({
                top: Math.max(0, absoluteTop - offset),
                behavior: 'smooth'
            });
        } else {
            console.log(`Header not found for ID: ${headerId}`);
            
            // Debug: List all headers in the target tab
            const allHeaders = targetTabPane.querySelectorAll('h1, h2, h3, h4, h5, h6');
            console.log('Available headers in target tab:');
            allHeaders.forEach(h => {
                const text = (h.textContent || h.innerText).trim();
                const id = this.generateHeaderId(text);
                console.log(`"${text}" → "${id}"`);
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
            
            console.log(`Attempt ${attempts}: Target pane: ${targetTabPane?.id}, Active pane: ${activeTabPane?.id}`);
            
            if (targetTabPane && targetTabPane.classList.contains('active') && activeTabPane?.id === `pane-${tabId}`) {
                console.log(`Tab ${tabId} is now active, executing callback`);
                callback();
            } else if (attempts < maxAttempts) {
                console.log(`Waiting for tab ${tabId} to become active (attempt ${attempts})`);
                setTimeout(checkTabActive, 50);
            } else {
                console.warn(`Timeout waiting for tab ${tabId} to become active`);
                console.log(`Final state - Target: ${targetTabPane?.id}, Active: ${activeTabPane?.id}`);
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