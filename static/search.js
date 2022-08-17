const lunr = require('lunr');

const MIN_SEARCH_LENGTH = 3;

const searchInput = $('#search-input');
const searchResultsMessage = $('#search-results-message');
const searchResultsCount = $('#search-results-count');
const searchResultsList = $('.search-results');
const searchResults = searchResultsList.children();

let searchIndex;

function showMessage(message) {
  if (message) {
    searchResults.hide();
    searchResultsCount.hide();
    searchResultsMessage.show();
    searchResultsMessage.text(message);
  } else {
    searchResultsMessage.hide();
  }
}

function getInitialSearchTerm() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('q') || '';
}

function onSearch(term) {
  if (term.length < MIN_SEARCH_LENGTH) {
    searchResultsCount.hide();
    showMessage(
      `Enter a search term (of at least ${MIN_SEARCH_LENGTH} characters) to search`
    );
    return;
  }
  showMessage('');

  // do search
  const results = searchIndex.search(term).map(match => match.ref);

  if (!results.length) {
    showMessage('No results found');
    return;
  }

  // Show the results
  searchResults.each(function() {
    const el = $(this);
    if (results.includes(this.dataset.id)) {
      el.css('display', 'flex');
    } else {
      el.css('display', 'none');
    }
  });

  // Sort results by accuracy
  searchResults
    .sort(function(a, b) {
      const aOrder = results.indexOf(a.dataset.id);
      const bOrder = results.indexOf(b.dataset.id);
      if (aOrder < bOrder) {
        return -1;
      }
      if (aOrder > bOrder) {
        return 1;
      }
      return 0;
    })
    .appendTo(searchResultsList);

  // Show number of results
  searchResultsCount.text(`Found ${results.length} results`);
  searchResultsCount.show();
}

$(document).ready(function() {
  searchInput.prop('disabled', true);
  const initialSearchTerm = getInitialSearchTerm();
  searchInput.val(initialSearchTerm);

  $.getJSON('/search/index.json', function(data) {
    // populate the index
    searchIndex = lunr(function() {
      this.ref('id');
      this.field('title');
      this.field('content');

      data.forEach(function(page) {
        this.add(page);
      }, this);
    });

    // add event handler
    searchInput.on('input', function(event) {
      onSearch(event.target.value);
    });

    // re-enable the input
    searchInput.prop('disabled', false);

    // Do an initial search
    onSearch(searchInput.val());

    // Scroll to the title if we landed on the page with a search term
    if (initialSearchTerm) {
      document.getElementsByTagName('h1')[0].scrollIntoView();
    }
  });
});