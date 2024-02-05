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
				let title = result.meta.title.charAt(0).toUpperCase() + result.meta.title.slice(1);
				
				// Add "CORE:" in front of the <a> if the URL contains "/core/"
				let linkText = result.url.includes("/core/") ? `CORE: ${title}` : result.url.includes("/scale/") ? `SCALE: ${title}` : title;
				
				resultDiv.innerHTML = `
					<h3><a href="${result.url}">${linkText}</a></h3>
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
