function updateFigureNumbers() {   
  var figures = document.querySelectorAll('.trueimg');
  for (var i = 0; i < figures.length; i++) {
    var figure = figures[i];
    var figureNumber = i + 1;
    var figId = figure.getAttribute('id'); // Get the ID of the figure
    var figCaption = figure.querySelector('figcaption');
    if (figCaption) {
      var figLink = figCaption.querySelector('a');
      if (figLink) {
        var spanId = figLink.querySelector('span[id^="fig-"]');
        if (spanId) {
          var captionText = spanId.textContent;
          figCaption.innerHTML = 'Figure ' + figureNumber + ': ' + captionText;
        }
      }
    }
  }
}

// Call the function when the page loads and whenever content is added (Hugo's infinite scroll)
document.addEventListener('DOMContentLoaded', function() {
  updateFigureNumbers();
});

var observeDOM = (function() {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
      eventListenerSupported = window.addEventListener;

  return function(obj, callback) {
    if (MutationObserver) {
      // MutationObserver logic
    } else if (eventListenerSupported) {
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  };
})();

observeDOM(document.getElementById('content'), updateFigureNumbers);