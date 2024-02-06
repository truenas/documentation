let query = new URLSearchParams(window.location.search).get("query");
let searchResultsContainer = document.getElementById('results');
let currentPage = 1;
const resultsPerPage = 10;
let pagefind;

initPageFind();

async function initPageFind() {
    pagefind = await import("https://www.truenas.com/docs/pagefind/pagefind.js");
    pagefind.init();

    if (query != null) {
        document.getElementById("search-input").value = query;
        displaySearchResults(query, currentPage);
    }
}

async function displaySearchResults(query, page) {
    let button;
    try {
        let startIndex = (page - 1) * resultsPerPage;
        let endIndex = startIndex + resultsPerPage;

        let results = await pagefind.search(query);

        let paginatedResults = results.results.slice(startIndex, endIndex);
        let slicedResults = await Promise.all(paginatedResults.map(r => r.data()));

        // Custom filter function to exclude specific paths
        function customFilter(result) {
            const excludedPaths = ["/_includes", "/printview", "/tags", "/volume", "/book", "/scaleclireference"];
            return !excludedPaths.some(path => result.url.includes(path));
        }

        slicedResults = slicedResults.filter(customFilter);

        // Append new results to existing content
        searchResultsContainer.innerHTML += '';
        
        if (!document.getElementById("loadMoreButton") == null) {
            document.getElementById("loadMoreButton").classList.remove("loading");
        }
        if (slicedResults.length === 0) {
            searchResultsContainer.innerHTML = 'No results found.';
        } else {
            let fragment = document.createDocumentFragment();

            slicedResults.forEach((result, index) => {
                let resultDiv = document.createElement('div');
                let title = result.meta.title.charAt(0).toUpperCase() + result.meta.title.slice(1)
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
                    : `${title}:`;

                resultDiv.innerHTML = `
                    <h3>${linkText}&ensp;<a href="${result.url}">${title}</a></h3>
                    <p>${result.excerpt}</p>
                `;
                fragment.appendChild(resultDiv);
            });

            // Append the new results fragment to existing content
            searchResultsContainer.appendChild(fragment);

            let button;
            if (document.getElementById("loadMoreButton") == null) {
                button = document.createElement("a");
                button.classList.add("absolute-center");
                button.classList.add("button");
                button.textContent = "Load more results";
                button.id = "loadMoreButton";
                button.addEventListener('click', loadMoreResults);
            } else {
                button = document.getElementById("loadMoreButton");
            }

            if (results.results.length > endIndex) {
                document.getElementById("results").parentNode.appendChild(button);
                button.classList.remove("loading");
                button.style.display = 'block';

                let v = document.documentElement;
                v.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            } else {
                button.classList.remove("loading");
                button.style.display = 'none';
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
    let loadMoreButton = document.getElementById('loadMoreButton');
    loadMoreButton.classList.add("loading");
    await displaySearchResults(query, currentPage);
}
