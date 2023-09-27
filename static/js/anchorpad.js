document.addEventListener('DOMContentLoaded', function () {
    // Function to handle scrolling to anchors
    function scrollToAnchor(anchor) {
      var targetElement = document.getElementById(anchor);

      if (targetElement) {
        var navElement = document.querySelector('nav');
        var navElementHeight = navElement ? navElement.offsetHeight : 0;

        var offset = navElementHeight; // Adjust the offset as needed

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }

    // Handle anchor clicks
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var anchor = link.getAttribute('href').substring(1);
        scrollToAnchor(anchor);
      });
    });

    // Use Intersection Observer to handle anchors in the URL
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var anchor = entry.target.getAttribute('id');
            history.replaceState({}, document.title, window.location.pathname + '#' + anchor);
          }
        });
      },
      { threshold: 1 }
    );

    // Observe all anchors with IDs
    var anchors = document.querySelectorAll('a[id]');
    anchors.forEach(function (anchor) {
      observer.observe(anchor);
    });
  });