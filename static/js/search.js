const queryString = new URLSearchParams(window.location.search).get("query");
if (queryString) {
    document.getElementById("search-input").setAttribute("value", queryString);
    
    // Define the excluded URL paths
    const excludedPaths = ["/tags/", "/book/", "/volume/", "/_includes/"];

    // Perform the search
    !function (queryString, excludedPaths) {
        const resultsContainer = document.getElementById("results");
        if (queryString.length) {
            let resultsHTML = "";
            for (const result of lunr(function () {
                this.ref("id");
                this.field("title", { boost: 15 });
                this.field("tags");
                this.field("content", { boost: 10 });
                for (const key in window.store) {
                    this.add({ id: key, title: window.store[key].title, tags: window.store[key].category, content: window.store[key].content });
                }
            }).search(queryString)) {
                const item = window.store[result.ref];
                // Check if the URL is excluded
                if (!excludedPaths.some(path => item.url.includes(path))) {
                    // Remove the "/docs/" prefix from the URL
                    const url = `https://www.truenas.com/docs/truecommand/3.0${item.url.replace('/docs/', '/')}`;
                    resultsHTML += `<li><p><a href="${url}">${item.title}</a></p>`;
                    resultsHTML += `<p>${item.content.substring(0, 150)}...</p></li>`;
                }
            }
            resultsContainer.innerHTML = resultsHTML || "No results found.";
        } else {
            resultsContainer.innerHTML = "No results found.";
        }
    }(queryString, excludedPaths);
}
