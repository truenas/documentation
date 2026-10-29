&NewLine;

Update to the latest maintenance release of the current major version before upgrading to the next major version.
You can then upgrade directly from the latest maintenance release to the latest release of the next major version.

{{< hint type=note title="Recommended Upgrade Paths" >}}
This chart shows the basic upgrade paths between TrueNAS major versions.
Depending on your use case and risk tolerance, you may prefer to delay upgrading to allow additional time for testing and stability.
See the <a href="https://docs.truenas.com/software-status/#which-truenas-version-is-recommended" target="_blank">TrueNAS Software Status</a> for version recommendations tailored to different user types from Developer to Mission Critical.
{{< /hint >}}

<div class="section-box section-box-upgradepaths" id="tn-upgrade-paths" style="padding: 0 60px 40px 60px; margin-bottom: 20px;">
    <div class="community-paths-container">
      <img src="/images/truenas-community-edition-logo-blue.png" class="light-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
      <img src="/images/truenas-community-edition-logo-white.png" class="dark-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px; display: none;" title="TrueNAS Community Edition" alt="TrueNAS Community Edition">
      <div class="scroll-wrapper">
        <button class="scroll-nav scroll-nav-left" aria-label="Scroll left" title="Scroll left">‹</button>
        <button class="scroll-nav scroll-nav-right" aria-label="Scroll right" title="Scroll right">›</button>
        <div class="scroll-container" id="scrollContainer1">
          <div class="chart-wrapper">
            {{< mermaid class="mermaid_sizing" >}}
            flowchart LR
              A["11.3-U5"] -->|update| B["12.0-U8.1"]
              B -->|"update / ISO install"| C["13.0-U6.8 / 13.3-U2"]
              C -->|update| G
              C -->|ISO install| J
              D["22.02.4 (Angelfish)"] -->|update| E
              E["22.12.4.2 (Bluefin)"] -->|update| F
              F["23.10.2 (Cobia)"] -->|update| G
              G["24.04.2.5 (Dragonfish)"] -->|update| H
              H["24.10.2.4 (Electric Eel)"] -->|update| I
              I["25.04.2.6 (Fangtooth)"] -->|"update"| J
            J["25.10.1 (Goldeye)"]
            {{< /mermaid >}}
          </div>
        </div>
        <div class="scroll-indicator" id="scrollIndicator1">
          <div class="scroll-dot" data-section="0" title="Beginning"></div>
          <div class="scroll-dot" data-section="1" title="Middle"></div>
          <div class="scroll-dot active" data-section="2" title="Latest versions"></div>
        </div>
      </div>
    </div>
    <div class="enterprise-paths-container">
      <img src="/images/truenas-enterprise-logo-logo-blue.png" class="light-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
      <img src="/images/truenas-enterprise-logo-logo-white-rgb-900px-w-72ppi.png" class="dark-mode-logo" style="box-shadow: none; max-width: 225px; padding-bottom: 20px; padding-top: 40px; display: none;" title="TrueNAS Enterprise" alt="TrueNAS Enterprise">
      <div class="scroll-wrapper">
        <button class="scroll-nav scroll-nav-left" aria-label="Scroll left" title="Scroll left">‹</button>
        <button class="scroll-nav scroll-nav-right" aria-label="Scroll right" title="Scroll right">›</button>
        <div class="scroll-container" id="scrollContainer2">
          <div class="chart-wrapper">
            {{< mermaid class="mermaid_sizing" >}}
            flowchart LR
              A["11.3-U5"] -->|update| B
              B["12.0-U8.1"] -->|update| C
              C["13.0-U6.8"] -->|ISO install| G
              C -->|update| E
              D["23.10.2 (Cobia)"] -->|update| E
              E["24.04.2.5 (Dragonfish)"]  -->|update| F
              F["24.10.2.4 (Electric Eel)"] -->|update| G
              G["25.04.2.6 (Fangtooth)"] -->|"(anticipated)"| H
            H["25.10 (Goldeye)"]
            {{< /mermaid >}}
          </div>
        </div>
        <div class="scroll-indicator" id="scrollIndicator2">
          <div class="scroll-dot" data-section="0" title="Beginning"></div>
          <div class="scroll-dot" data-section="1" title="Middle"></div>
          <div class="scroll-dot active" data-section="2" title="Latest versions"></div>
        </div>
      </div>
    </div>
</div>

Permitted upgrade methods are:

* **update**: Apply updates using the **Update** screen in the TrueNAS UI or install a manual update file.
  Not all upgrade paths support automatic updates (see chart).
* **ISO install**: Save your TrueNAS configuration file, perform a fresh install using an .iso file for the target version, then upload the saved configuration.

You can skip major versions using a fresh installation with configuration file restore.
Before skipping versions, review release notes for each major version to identify service deprecations or significant changes that may affect your configuration.
Consider upgrading incrementally through major versions with significant changes, or be prepared to manually reconfigure any incompatibilities after upgrading directly to the target version.

<style>
/* Custom CSS to override Mermaid background color */
#tn-upgrade-paths .mermaid {
    background-color: inherit;
}

/* Mermaid diagram theming - text color only */
#tn-upgrade-paths .mermaid .nodeLabel,
#tn-upgrade-paths .mermaid .edgeLabel {
    color: #333333 !important;
}

/* Light mode - gray lines - default and explicit */
/* Stroke for lines, fill only for arrowheads */
#tn-upgrade-paths .mermaid .edgePath .path,
#tn-upgrade-paths .mermaid .edgePath path,
#tn-upgrade-paths .mermaid .flowchart-link {
    stroke: #999999 !important;
}

#tn-upgrade-paths .mermaid marker path {
    fill: #999999 !important;
    stroke: #999999 !important;
}

[data-bs-theme="light"] #tn-upgrade-paths .mermaid .edgePath .path,
[data-bs-theme="light"] #tn-upgrade-paths .mermaid .edgePath path,
[data-bs-theme="light"] #tn-upgrade-paths .mermaid .flowchart-link {
    stroke: #999999 !important;
}

[data-bs-theme="light"] #tn-upgrade-paths .mermaid marker path {
    fill: #999999 !important;
    stroke: #999999 !important;
}

@media (prefers-color-scheme: light) {
    #tn-upgrade-paths .mermaid .edgePath .path,
    #tn-upgrade-paths .mermaid .edgePath path,
    #tn-upgrade-paths .mermaid .flowchart-link {
        stroke: #999999 !important;
    }

    #tn-upgrade-paths .mermaid marker path {
        fill: #999999 !important;
        stroke: #999999 !important;
    }
}

/* Dark mode - white lines - manual selection */
[data-bs-theme="dark"] #tn-upgrade-paths .mermaid .edgePath .path,
[data-bs-theme="dark"] #tn-upgrade-paths .mermaid .edgePath path,
[data-bs-theme="dark"] #tn-upgrade-paths .mermaid .flowchart-link {
    stroke: #ffffff !important;
}

[data-bs-theme="dark"] #tn-upgrade-paths .mermaid marker path {
    fill: #ffffff !important;
    stroke: #ffffff !important;
}

/* Dark mode - white lines - system preference */
@media (prefers-color-scheme: dark) {
    #tn-upgrade-paths .mermaid .edgePath .path,
    #tn-upgrade-paths .mermaid .edgePath path,
    #tn-upgrade-paths .mermaid .flowchart-link {
        stroke: #ffffff !important;
    }

    #tn-upgrade-paths .mermaid marker path {
        fill: #ffffff !important;
        stroke: #ffffff !important;
    }
}

/* Logo visibility for light/dark modes */
/* Default light mode */
.dark-mode-logo { display: none !important; }
.light-mode-logo { display: block !important; }

/* Manual dark mode selection - Docsy uses data-bs-theme */
[data-bs-theme="dark"] .light-mode-logo { display: none !important; }
[data-bs-theme="dark"] .dark-mode-logo { display: block !important; }

/* Manual light mode selection - Docsy uses data-bs-theme */
[data-bs-theme="light"] .dark-mode-logo { display: none !important; }
[data-bs-theme="light"] .light-mode-logo { display: block !important; }

/* System preference fallback */
@media (prefers-color-scheme: dark) {
    html:not([data-bs-theme]) .light-mode-logo { display: none !important; }
    html:not([data-bs-theme]) .dark-mode-logo { display: block !important; }
}

@media (prefers-color-scheme: light) {
    html:not([data-bs-theme]) .dark-mode-logo { display: none !important; }
    html:not([data-bs-theme]) .light-mode-logo { display: block !important; }
}

/* Enhanced scroll container with navigation controls */
.scroll-wrapper {
    position: relative;
    width: calc(100% - 80px); /* Leave space for arrows (40px each side) */
    margin: 0 40px; /* Center the container with arrow space */
}

.scroll-container {
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    cursor: grab;
    user-select: none;
    position: relative;
    scroll-behavior: smooth;
}

.scroll-container:active {
    cursor: grabbing;
}

.scroll-container:hover {
    background: rgba(0, 149, 213, 0.02);
    border-radius: 8px;
    transition: background-color 0.2s ease;
}

/* Hide scrollbars completely for clean dot-only navigation */
.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-container {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

/* Navigation arrows - always visible for discoverability */
.scroll-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 149, 213, 0.8);
    color: white !important;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 20;
    opacity: 1; /* Always visible */
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

#tn-upgrade-paths .scroll-nav {
    color: white !important;
}

.scroll-nav:hover {
    background: rgba(0, 149, 213, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.scroll-nav:active {
    transform: translateY(-50%) scale(0.95);
}

.scroll-nav-left {
    left: -3.5rem; /* Closer to the edge, further from container */
}

.scroll-nav-right {
    right: -3.5rem; /* Closer to the edge, further from container */
}

/* Hide arrows when at scroll boundaries */
.scroll-nav.hidden {
    opacity: 0 !important;
    pointer-events: none;
}

/* Edge fade gradients - positioned relative to the scroll wrapper */
.scroll-wrapper::before,
.scroll-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    pointer-events: none;
    z-index: 5;
    transition: opacity 0.3s ease;
}

.scroll-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--card-background) 0%, transparent 100%);
}

.scroll-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--card-background) 0%, transparent 100%);
}

/* Hide gradients at scroll boundaries */
.scroll-wrapper.at-start::before {
    opacity: 0;
}

.scroll-wrapper.at-end::after {
    opacity: 0;
}

/* Scroll position indicator */
.scroll-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 4px;
}

.scroll-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 149, 213, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
}

.scroll-dot.active {
    background: #0095d5;
    transform: scale(1.2);
}

.scroll-dot:hover {
    background: #0071a2;
    transform: scale(1.1);
}

.chart-wrapper {
    display: inline-block;
    width: 1400px; /* Force fixed width instead of min-width */
}

/* Make sure the SVG fills the wrapper */
.chart-wrapper svg {
    width: 100% !important;
    max-width: none !important;
    min-width: 1400px;
}
</style>

<script>
  // Enhanced scroll functionality - wait for Mermaid to properly render
  document.addEventListener("DOMContentLoaded", function() {
    
    let checkAttempts = 0;
    
    function waitForMermaidAndInitialize() {
      if (checkAttempts >= 15) { // 3 seconds total timeout
        initializeScrollControls();
        return;
      }
      
      // Check if the upgrade-paths tab is currently active
      const upgradePathsTab = document.getElementById('pane-upgrade-paths');
      if (!upgradePathsTab || !upgradePathsTab.classList.contains('active')) {
        // Tab is not active, wait longer
        checkAttempts++;
        setTimeout(waitForMermaidAndInitialize, 300);
        return;
      }
      
      // Find the VISIBLE containers (there might be duplicates)
      const allContainers1 = document.querySelectorAll('[id="scrollContainer1"]');
      const allContainers2 = document.querySelectorAll('[id="scrollContainer2"]');
      
      const container1 = Array.from(allContainers1).find(el => el.offsetParent !== null);
      const container2 = Array.from(allContainers2).find(el => el.offsetParent !== null);
      
      if (container1 && container1.scrollWidth > 0 && 
          container2 && container2.scrollWidth > 0) {
        initializeScrollControls();
      } else {
        checkAttempts++;
        setTimeout(waitForMermaidAndInitialize, 200);
      }
    }
    
    function initializeWhenReady() {
      // Start checking immediately
      waitForMermaidAndInitialize();
    }
    
    // Start initialization
    initializeWhenReady();
    
    // Handle URL hash changes (like when clicking jump buttons or loading with anchor)
    window.addEventListener('hashchange', function() {
      // Small delay to allow tab to become active
      setTimeout(() => {
        checkAttempts = 0;
        waitForMermaidAndInitialize();
      }, 300);
    });
    
    // CRITICAL: Listen for when the upgrade-paths tab specifically becomes active
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.id === 'pane-upgrade-paths' && target.classList.contains('active')) {
            // Tab just became active, start initialization
            setTimeout(() => {
              checkAttempts = 0;
              waitForMermaidAndInitialize();
            }, 500); // Extra time for Mermaid to render
          }
        }
      });
    });
    
    // Start observing the upgrade-paths tab pane for class changes
    const upgradePathsPane = document.getElementById('pane-upgrade-paths');
    if (upgradePathsPane) {
      observer.observe(upgradePathsPane, { attributes: true, attributeFilter: ['class'] });
    }
    
    // Also check after a longer delay on initial load to catch tab activation from URL anchor
    setTimeout(() => {
      const container1 = document.getElementById('scrollContainer1');
      const container2 = document.getElementById('scrollContainer2');
      if ((!container1 || container1.scrollWidth === 0) || (!container2 || container2.scrollWidth === 0)) {
        checkAttempts = 0;
        waitForMermaidAndInitialize();
      }
    }, 1000);
    
    // Global function for manual testing
    window.reinitializeScrollControls = function() {
      initializeScrollControls();
    };
    
    // Also listen for tab changes and reinitialize when this tab becomes visible
    function handleTabVisibility() {
      const upgradePathsSection = document.getElementById('tn-upgrade-paths');
      if (upgradePathsSection && upgradePathsSection.offsetParent !== null) {
        // Reset check attempts and try again
        checkAttempts = 0;
        setTimeout(waitForMermaidAndInitialize, 100);
      }
    }
    
    // Listen for tab changes (multiple methods to catch different tab systems)
    document.addEventListener('click', function(e) {
      if (e.target.matches('a[href*="upgrade"], .nav-link, .tab-link, [role="tab"]')) {
        setTimeout(handleTabVisibility, 300);
      }
    });
    
    // Also try intersection observer for when the section becomes visible
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setTimeout(() => {
              const container1 = document.getElementById('scrollContainer1');
              if (container1 && container1.scrollWidth === 0) {
                checkAttempts = 0;
                waitForMermaidAndInitialize();
              }
            }, 200);
          }
        });
      }, { threshold: 0.1 });
      
      const upgradePathsSection = document.getElementById('tn-upgrade-paths');
      if (upgradePathsSection) {
        observer.observe(upgradePathsSection);
      }
    }
    
    // Manual trigger for testing - click anywhere on the upgrade paths section
    document.addEventListener('click', function(e) {
      const upgradePathsSection = document.getElementById('tn-upgrade-paths');
      if (upgradePathsSection && upgradePathsSection.contains(e.target)) {
        const container1 = document.getElementById('scrollContainer1');
        if (container1 && container1.scrollWidth === 0) {
          checkAttempts = 0;
          setTimeout(waitForMermaidAndInitialize, 100);
        }
      }
    });
    
    function initializeScrollControls() {
      // Prevent multiple simultaneous initializations
      if (initializeScrollControls.isInitializing) {
        return;
      }
      initializeScrollControls.isInitializing = true;
      const containerIds = ['scrollContainer1', 'scrollContainer2'];
      
      containerIds.forEach((containerId) => {
        // Find the VISIBLE container with this ID (there might be duplicates)
        const allContainers = document.querySelectorAll(`[id="${containerId}"]`);
        
        // More robust visibility detection
        const container = Array.from(allContainers).find(el => {
          const rect = el.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(el);
          return el.offsetParent !== null && 
                 rect.width > 0 && 
                 rect.height > 0 && 
                 computedStyle.display !== 'none' &&
                 computedStyle.visibility !== 'hidden';
        });
        
        if (!container) {
          return;
        }
        
        const wrapper = container.closest('.scroll-wrapper');
        const leftBtn = wrapper ? wrapper.querySelector('.scroll-nav-left') : null;
        const rightBtn = wrapper ? wrapper.querySelector('.scroll-nav-right') : null;
        const indicatorId = containerId.replace('Container', 'Indicator');
        // Find the VISIBLE indicator that corresponds to this container
        const allIndicators = document.querySelectorAll(`[id="${indicatorId}"]`);
        const indicator = Array.from(allIndicators).find(el => {
          const rect = el.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(el);
          return el.offsetParent !== null && 
                 rect.width > 0 && 
                 rect.height > 0 && 
                 computedStyle.display !== 'none' &&
                 computedStyle.visibility !== 'hidden';
        });
        const dots = indicator ? indicator.querySelectorAll('.scroll-dot') : [];
        

        // Set initial scroll position to rightmost
        if (container.scrollWidth > container.clientWidth) {
          container.scrollLeft = container.scrollWidth - container.clientWidth;
        }
        
        // Update scroll state function
        function updateScrollState() {
          const { scrollLeft, scrollWidth, clientWidth } = container;
          const maxScroll = scrollWidth - clientWidth;
          const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
          
          // Update wrapper classes for gradients with larger threshold for smaller screens
          if (wrapper) {
            // Use larger threshold (10px) to handle sub-pixel rendering and smaller screens
            const threshold = 10;
            const isAtStart = scrollLeft <= threshold;
            const isAtEnd = scrollLeft >= maxScroll - threshold;
            
            wrapper.classList.toggle('at-start', isAtStart);
            wrapper.classList.toggle('at-end', isAtEnd);
          }
          
          // Update scroll indicators with partial states (multiple dots can be active)
          if (dots.length > 0) {
            // scrollPercentage: 0 = leftmost, 1 = rightmost
            // Allow overlapping ranges for better UX feedback
            const dot0Active = scrollPercentage <= 0.4;  // Beginning: 0-40%
            const dot1Active = scrollPercentage >= 0.2 && scrollPercentage <= 0.8;  // Middle: 20-80%  
            const dot2Active = scrollPercentage >= 0.6;  // Latest: 60-100%
            
            dots[0].classList.toggle('active', dot0Active);
            dots[1].classList.toggle('active', dot1Active);  
            dots[2].classList.toggle('active', dot2Active);
          }
        }

        // Arrow button event handlers
        if (leftBtn) {
          leftBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const scrollAmount = container.clientWidth * 0.7;
            container.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth'
            });
            setTimeout(updateScrollState, 100);
          });
        }

        if (rightBtn) {
          rightBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const scrollAmount = container.clientWidth * 0.7;
            container.scrollBy({
              left: scrollAmount,
              behavior: 'smooth'
            });
            setTimeout(updateScrollState, 100);
          });
        }

        // Dot click handlers
        dots.forEach((dot, index) => {
          dot.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const maxScroll = container.scrollWidth - container.clientWidth;
            const targetScroll = (maxScroll / (dots.length - 1)) * index;
            container.scrollTo({
              left: targetScroll,
              behavior: 'smooth'
            });
            setTimeout(updateScrollState, 100);
          });
        });

        // Scroll event listener - more aggressive updates
        container.addEventListener('scroll', updateScrollState);
        
        // Also listen for any programmatic scroll changes
        const observer = new MutationObserver(() => updateScrollState());
        observer.observe(container, { attributes: true, attributeFilter: ['scrollLeft'] });
        
        // Set up drag scrolling
        setupDragScroll(container);
        
        // Initial state update
        setTimeout(updateScrollState, 100);
      });
      
      // Reset initialization flag
      initializeScrollControls.isInitializing = false;
    }

    // Drag scroll functionality
    function setupDragScroll(container) {
      let isDown = false;
      let startX;
      let scrollLeft;

      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
      });

      container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
      });
    }
  });
</script>
