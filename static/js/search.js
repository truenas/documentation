let query = new URLSearchParams(window.location.search).get("query");
let searchResultsContainer = document.getElementById('results');
let currentPage = 1;
const resultsPerPage = 10;
let pagefind;
let loadMoreButton; // Cache reference to the load more button

initPageFind();

async function initPageFind() {
    pagefind = await import("https://docs-dev.ixsystems.com/pagefind/pagefind.js");
    pagefind.init();

    if (query != null) {
        document.getElementById("search-input").value = query;
        await displaySearchResults(query, currentPage);
    }
}

async function displaySearchResults(query, page) {
    try {
        let results = await pagefind.search(query);
        let paginatedResults = results.results;
        let slicedResults = await Promise.all(paginatedResults.map(r => r.data()));

        let startIndex = (page - 1) * resultsPerPage;
        let endIndex = startIndex + resultsPerPage;
        let paginatedSlicedResults = slicedResults.slice(startIndex, endIndex);

        if (loadMoreButton) {
            loadMoreButton.classList.remove("loading");
        }

        if (paginatedSlicedResults.length === 0) {
            if (currentPage === 1) {
                searchResultsContainer.innerHTML = 'No results found.';
            } else {
                let noMoreResultsMessage = document.createElement('div');
                noMoreResultsMessage.innerHTML = '<p>No more results.</p>';
                searchResultsContainer.appendChild(noMoreResultsMessage);
            }
        } else {
            let fragment = document.createDocumentFragment();

            paginatedSlicedResults.forEach((result, index) => {
                let resultDiv = document.createElement('div');
                let title = result.meta.title.charAt(0).toUpperCase() + result.meta.title.slice(1);

                // Add section marker in front of the <a>
                let coreIcon = '<img src="/favicon/TN-favicon-32x32.png" alt="TrueNAS CORE" title="TrueNAS CORE" class="icon">';
                let scaleIcon = '<img src="/favicon/TNScale-favicon-32x32.png" alt="TrueNAS SCALE" title="TrueNAS SCALE" class="icon">';
                let tcIcon = '<img src="/favicon/TC-favicon-32x32.png" alt="TrueCommand" title="TrueCommand" class="icon">';

                let linkText = result.url.includes("/core/") ? `${coreIcon}`
                    : result.url.includes("/scale/") ? `${scaleIcon}`
                    : result.url.includes("/truecommand/") ? `${tcIcon}`
                    : result.url.includes("/solutions/") ? `Solutions:`
                    : result.url.includes("/hardware/") ? `TrueNAS Systems:`
                    : result.url.includes("/contributing/") ? `Contributing:`
                    : result.url.includes("/references/") ? `References:`
					: result.url.includes("core_websocket") ? `${coreIcon}\u00A0API:`
					: result.url.includes("scale_websocket") ? `${scaleIcon}\u00A0API:`
                    : `${title}:`;

                resultDiv.innerHTML = `
                    <h3>${linkText}&ensp;<a href="${result.url}">${title}</a></h3>
                    <p>${result.excerpt}</p>
                    <hr>
                `;
                fragment.appendChild(resultDiv);
            });

            // Append the new results fragment to existing content
            searchResultsContainer.appendChild(fragment);

            // Check if there are more results to display
            const hasMoreResults = slicedResults.length > endIndex;

            // Show/hide the load more button
            if (hasMoreResults) {
                if (!loadMoreButton) {
                    loadMoreButton = createLoadMoreButton();
                }
                loadMoreButton.classList.remove("loading");
                loadMoreButton.style.display = 'block';
            } else if (loadMoreButton) {
                loadMoreButton.style.display = 'none';
            }
        }

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function loadMoreResults() {
    currentPage++;
    let query = new URLSearchParams(window.location.search).get("query");
    if (loadMoreButton) {
        loadMoreButton.classList.add("loading");
    }
    await displaySearchResults(query, currentPage);
}

function createLoadMoreButton() {
    const button = document.createElement("a");
    button.classList.add("absolute-center");
    button.classList.add("button");
    button.textContent = "Load more results";
    button.id = "loadMoreButton";
    button.addEventListener('click', loadMoreResults);
    searchResultsContainer.parentNode.appendChild(button);
    return button;
}
