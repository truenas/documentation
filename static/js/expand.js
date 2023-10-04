// Custom JavaScript for expanding sections based on anchor links and new page load
document.addEventListener("DOMContentLoaded", function () {
    function expandSection(checkbox) {
      if (checkbox) {
        checkbox.checked = true;
      }
    }
  
    // Function to handle hash changes and expand the section if needed
    function handleHashChange() {
      const hash = window.location.hash;
      if (hash) {
        const checkbox = document.querySelector(hash + " .gdoc-expand__control");
        if (checkbox) {
          expandSection(checkbox);
        }
      }
    }
  
    // Check if an anchor is present in the URL and expand the section if needed
    handleHashChange();
  
    // Expand section when clicking an anchor link
    document.querySelectorAll('a[href^="#"]').forEach(function (anchorLink) {
      anchorLink.addEventListener("click", function (e) {
        const hash = anchorLink.getAttribute("href");
        const checkbox = document.querySelector(hash + " .gdoc-expand__control");
        if (checkbox) {
          expandSection(checkbox);
        }
      });
    });
  
    // Listen for changes in the URL hash and expand the section if needed
    window.addEventListener('hashchange', handleHashChange);
  });
  