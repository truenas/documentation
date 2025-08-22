/**
 * Jump-to Button Scroll Enhancement
 * Adds scrolling behavior after existing jump-to button system expands tabs
 */

// Listen for hash changes and scroll to target after tab expansion
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash) {
        // Give the tab system time to expand, then scroll
        setTimeout(() => {
            // Try to find the active tab navigation first (better than content)
            const activeTabNav = document.querySelector('.linkable-tabs-nav');
            if (activeTabNav) {
                const rect = activeTabNav.getBoundingClientRect();
                const offsetY = window.pageYOffset + rect.top - 80; // 80px offset from top
                window.scrollTo({ top: Math.max(0, offsetY), behavior: 'smooth' });
            } else {
                // Fallback to active tab content with offset
                const activeTab = document.querySelector('.linkable-tab-pane.active');
                if (activeTab) {
                    const rect = activeTab.getBoundingClientRect();
                    const offsetY = window.pageYOffset + rect.top - 100; // 100px offset from top
                    window.scrollTo({ top: Math.max(0, offsetY), behavior: 'smooth' });
                }
            }
        }, 300);
    }
});

// Also handle same-hash clicks for existing hash navigation
document.addEventListener('click', function(e) {
    // Check for jump-to buttons or hash links
    let targetHash = null;
    
    if (e.target.matches('button.jump-to-button') || e.target.closest('button.jump-to-button')) {
        const button = e.target.matches('button.jump-to-button') ? e.target : e.target.closest('button.jump-to-button');
        targetHash = button.getAttribute('data-target') || ('#' + (button.textContent.trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')));
    } else if (e.target.matches('a[href^="#"]')) {
        targetHash = e.target.getAttribute('href');
    }

    // If clicking the same hash that's already active, force refresh
    if (targetHash && window.location.hash === targetHash) {
        // Brief hash clear to trigger hashchange event
        window.location.hash = '';
        setTimeout(() => {
            window.location.hash = targetHash;
        }, 50);
    }
}, true);