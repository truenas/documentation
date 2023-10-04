window.addEventListener('load', function () {
  // Function to handle scrolling to anchors
  function scrollToAnchor(anchor) {
    var targetElement = document.getElementById(anchor);

    if (targetElement) {
      var navElement = document.querySelector('nav');
      var navElementHeight = navElement ? navElement.offsetHeight : 0;

      var offsetPercentage = 0.1; // Adjust this percentage as needed
      var offset = navElementHeight * offsetPercentage;

      // Delay scrolling by a short time to ensure the page layout is ready
      setTimeout(function () {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });

        // Use replaceState to update the URL without adding a new history entry
        if (anchor !== 'atlwdg-trigger') {
          history.replaceState({}, document.title, '#' + anchor);
        }
      }, 50); // Adjust the delay time as needed
    }
  }

  // Function to check for anchor in URL on page load
  function checkAnchorInURL() {
    var currentHash = window.location.hash;
    if (currentHash && currentHash !== '#') {
      var anchor = currentHash.substring(1);
      scrollToAnchor(anchor);
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
          // Use replaceState to update the URL without adding a new history entry
          if (anchor !== 'atlwdg-trigger') {
            history.replaceState({}, document.title, '#' + anchor);
          }
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

  // Check for anchor in URL on page load
  checkAnchorInURL();

  // Function to handle scrolling to expand anchors
  function scrollToExpandAnchor(anchor) {
    var targetElement = document.getElementById(anchor);

    if (targetElement) {
      var navElement = document.querySelector('nav');
      var navElementHeight = navElement ? navElement.offsetHeight : 0;

      // Adjust the offset for expand elements
      var offsetPercentage = 0.2; // Adjust this percentage as needed
      var offset = navElementHeight * offsetPercentage;

      // Delay scrolling by a short time to ensure the page layout is ready
      setTimeout(function () {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });

        // Use replaceState to update the URL without adding a new history entry
        if (anchor !== 'atlwdg-trigger') {
          history.replaceState({}, document.title, '#' + anchor);
        }
      }, 50); // Adjust the delay time as needed
    }
  }

  // Handle anchor clicks for expand elements
  var expandLinks = document.querySelectorAll('a[href^="#expand-"]');
  expandLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var anchor = link.getAttribute('href').substring(1);
      scrollToExpandAnchor(anchor);
    });
  });

  // Function to check for expand anchor in URL on page load
  function checkExpandAnchorInURL() {
    var currentHash = window.location.hash;
    if (currentHash && currentHash.startsWith('#expand-')) {
      var anchor = currentHash.substring(1);
      scrollToExpandAnchor(anchor);
    }
  }

  // Check for expand anchor in URL on page load
  checkExpandAnchorInURL();

  // Function to handle scrolling to expand anchor when URL is manually entered
  window.addEventListener('hashchange', function () {
    var currentHash = window.location.hash;
    if (currentHash && currentHash.startsWith('#expand-')) {
      var anchor = currentHash.substring(1);
      scrollToExpandAnchor(anchor);
    }
  });
});
